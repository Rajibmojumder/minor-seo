const API_URL = 'https://plagiarism-source-checker-with-links.p.rapidapi.com/data';
const API_KEY = '844f17265emsh0c5bcba45e41543p1530afjsn57ee7c7c7286';
const API_HOST = 'plagiarism-source-checker-with-links.p.rapidapi.com';

const MAX_RETRIES = 3;
const INITIAL_RETRY_DELAY = 2000;
const RATE_LIMIT_DELAY = 3000;
const BATCH_SIZE = 3;
const BATCH_DELAY = 1500;

class PlagiarismError extends Error {
  code: string;

  constructor(message: string, code: string) {
    super(message);
    this.name = 'PlagiarismError';
    this.code = code;
  }
}

interface PlagiarismCheckParams {
  text: string;
  onProgress?: (progress: number) => void;
}

interface PlagiarismMatch {
  text: string;
  start: number;
  end: number;
  source?: string;
}

interface PlagiarizedSentence {
  text: string;
  isPlagiarized: boolean;
  position: {
    start: number;
    end: number;
  };
  matchPercentage: number;
}

interface PlagiarismResult {
  status: string;
  duplicate_content_found_on_links?: string[];
  text_with_matches?: string;
  matches?: PlagiarismMatch[];
  plagiarismScore: number;
  uniqueScore: number;
  plagiarizedSentences: PlagiarizedSentence[];
}

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Splits text into sentences using proper sentence boundaries.
 * Only considers periods followed by whitespace or end of text as sentence boundaries.
 * Ignores periods in common abbreviations and other non-sentence-ending contexts.
 * 
 * Key behaviors:
 * - Only splits on periods that end sentences
 * - Preserves abbreviations and decimal numbers
 * - Maintains accurate position tracking
 * - Handles edge cases like multiple spaces
 * 
 * @param text - The input text to split into sentences
 * @returns Object containing sentences array and their positions in the original text
 */
const splitIntoSentences = (text: string): { sentences: string[], positions: { start: number, end: number }[] } => {
  const sentences: string[] = [];
  const positions: { start: number, end: number }[] = [];
  let currentStart = 0;

  // Match sentences ending with a period and followed by whitespace or end of text
  // Negative lookbehind (?<!\\w\\.): avoid splitting on common abbreviations
  // Negative lookahead (?!\\d): avoid splitting decimal numbers
  const sentenceRegex = /(?<!Mr|Mrs|Dr|Prof|Sr|Jr|etc|vs|i\.e|e\.g)\.\s+(?=[A-Z])|(?<!Mr|Mrs|Dr|Prof|Sr|Jr|etc|vs|i\.e|e\.g)\.$|(?<!Mr|Mrs|Dr|Prof|Sr|Jr|etc|vs|i\.e|e\.g)\.\s*$/g;

  let lastIndex = 0;
  let match;

  while ((match = sentenceRegex.exec(text)) !== null) {
    // Get the full sentence including the period
    const sentence = text.slice(currentStart, match.index + 1).trim();
    
    if (sentence) {
      sentences.push(sentence);
      positions.push({
        start: currentStart,
        end: match.index + 1
      });
    }

    // Move past the period and any whitespace
    currentStart = match.index + 1;
    while (currentStart < text.length && /\s/.test(text[currentStart])) {
      currentStart++;
    }
    
    lastIndex = currentStart;
  }

  // Handle any remaining text
  if (lastIndex < text.length) {
    const remaining = text.slice(lastIndex).trim();
    if (remaining) {
      sentences.push(remaining);
      positions.push({
        start: lastIndex,
        end: text.length
      });
    }
  }

  return { sentences, positions };
};

class RequestQueue {
  private queue: Array<() => Promise<any>> = [];
  private processing = false;

  async add<T>(request: () => Promise<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      this.queue.push(async () => {
        try {
          const result = await request();
          resolve(result);
        } catch (error) {
          reject(error);
        }
      });

      if (!this.processing) {
        this.process();
      }
    });
  }

  private async process() {
    if (this.processing || this.queue.length === 0) return;

    this.processing = true;
    while (this.queue.length > 0) {
      const request = this.queue.shift();
      if (request) {
        try {
          await request();
        } catch (error) {
          console.error('Queue processing error:', error);
        }
        await delay(RATE_LIMIT_DELAY);
      }
    }
    this.processing = false;
  }
}

const requestQueue = new RequestQueue();

async function retryWithBackoff<T>(
  operation: () => Promise<T>,
  retries = MAX_RETRIES,
  initialDelay = INITIAL_RETRY_DELAY,
  isRateLimited = false
): Promise<T> {
  try {
    return await operation();
  } catch (error: any) {
    if (retries === 0) throw error;

    if (error.code === 'RATE_LIMIT' || isRateLimited) {
      await delay(RATE_LIMIT_DELAY);
      return retryWithBackoff(operation, retries - 1, RATE_LIMIT_DELAY, true);
    }

    await delay(initialDelay);
    return retryWithBackoff(operation, retries - 1, initialDelay * 2, isRateLimited);
  }
}

async function checkSentence(sentence: string): Promise<any> {
  return requestQueue.add(async () => {
    return retryWithBackoff(async () => {
      try {
        const formData = new FormData();
        formData.append('text', sentence);

        const response = await fetch(API_URL, {
          method: 'POST',
          headers: {
            'x-rapidapi-key': API_KEY,
            'x-rapidapi-host': API_HOST,
          },
          body: formData
        });

        if (!response.ok) {
          if (response.status === 429) {
            throw new PlagiarismError(
              'Rate limit reached. Please wait a moment.',
              'RATE_LIMIT'
            );
          }
          throw new PlagiarismError(
            'Failed to check plagiarism',
            'API_ERROR'
          );
        }

        return await response.json();
      } catch (error) {
        if (error instanceof PlagiarismError) {
          throw error;
        }
        throw new PlagiarismError(
          'Failed to check content. Please try again.',
          'API_ERROR'
        );
      }
    });
  });
}

/**
 * Performs plagiarism checking on the input text.
 * Uses intelligent sentence splitting for accurate content analysis.
 * 
 * @param text - The text to check for plagiarism
 * @param onProgress - Optional callback for progress updates
 * @returns Detailed plagiarism analysis results
 */
export async function checkPlagiarism({ text, onProgress }: PlagiarismCheckParams): Promise<PlagiarismResult> {
  try {
    if (!text.trim()) {
      throw new PlagiarismError('Please enter some text to check for plagiarism.', 'EMPTY_INPUT');
    }

    const { sentences, positions } = splitIntoSentences(text);
    let totalPlagiarizedChars = 0;
    let totalChars = 0;
    const allMatches: PlagiarismMatch[] = [];
    const allDuplicateLinks = new Set<string>();
    const plagiarizedSentences: PlagiarizedSentence[] = [];

    const batches = [];
    for (let i = 0; i < sentences.length; i += BATCH_SIZE) {
      batches.push(sentences.slice(i, i + BATCH_SIZE));
    }

    for (let batchIndex = 0; batchIndex < batches.length; batchIndex++) {
      const batch = batches[batchIndex];
      
      for (let i = 0; i < batch.length; i++) {
        const sentence = batch[i];
        const position = positions[batchIndex * BATCH_SIZE + i];
        
        try {
          if (sentence.length < 10) {
            plagiarizedSentences.push({
              text: sentence,
              isPlagiarized: false,
              position: position,
              matchPercentage: 0
            });
            totalChars += sentence.length;
            continue;
          }

          const result = await checkSentence(sentence);
          
          if (onProgress) {
            const progress = ((batchIndex * BATCH_SIZE + i + 1) / sentences.length) * 100;
            onProgress(Math.min(progress, 100));
          }
          
          const hasDuplicates = result.status === "duplicate_content_found" && 
                              result.duplicate_content_found_on_links?.length > 0;

          let matchPercentage = 0;
          if (hasDuplicates) {
            result.duplicate_content_found_on_links.forEach((link: string) => 
              allDuplicateLinks.add(link)
            );
            
            if (result.matches && result.matches.length > 0) {
              matchPercentage = 100;
              const adjustedMatches = result.matches.map((match: PlagiarismMatch) => ({
                ...match,
                start: position.start + (match.start || 0),
                end: position.start + (match.end || sentence.length)
              }));
              allMatches.push(...adjustedMatches);
            }
          }

          const sentenceLength = sentence.length;
          totalChars += sentenceLength;
          
          if (hasDuplicates) {
            totalPlagiarizedChars += sentenceLength;
          }

          plagiarizedSentences.push({
            text: sentence,
            isPlagiarized: hasDuplicates,
            position: position,
            matchPercentage: hasDuplicates ? 100 : 0
          });

        } catch (error) {
          if (error instanceof PlagiarismError && error.code === 'RATE_LIMIT') {
            await delay(RATE_LIMIT_DELAY);
            batchIndex--; // Retry the current batch
            break;
          }
          throw error;
        }
      }

      if (batchIndex < batches.length - 1) {
        await delay(BATCH_DELAY);
      }
    }

    const plagiarismScore = totalChars > 0 ? 
      Math.round((totalPlagiarizedChars / totalChars) * 100) : 0;
    const uniqueScore = 100 - plagiarismScore;

    return {
      status: plagiarismScore > 0 ? 'duplicate_content_found' : 'unique_content',
      duplicate_content_found_on_links: Array.from(allDuplicateLinks),
      text_with_matches: text,
      matches: allMatches,
      plagiarismScore,
      uniqueScore,
      plagiarizedSentences: plagiarizedSentences.sort((a, b) => a.position.start - b.position.start)
    };

  } catch (error) {
    if (error instanceof PlagiarismError) {
      throw error;
    }
    throw new PlagiarismError(
      'An unexpected error occurred. Please try again.',
      'UNKNOWN_ERROR'
    );
  }
}

export async function fetchUrlContent(url: string): Promise<string> {
  return requestQueue.add(async () => {
    return retryWithBackoff(async () => {
      try {
        const corsProxy = 'https://api.allorigins.win/raw?url=';
        const response = await fetch(corsProxy + encodeURIComponent(url), {
          method: 'GET',
          headers: {
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
            'Accept-Language': 'en-US,en;q=0.5',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch URL content');
        }

        const html = await response.text();
        
        const textContent = html
          .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
          .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
          .replace(/<[^>]+>/g, ' ')
          .replace(/\s+/g, ' ')
          .trim();
        
        if (!textContent) {
          throw new Error('No readable content found at the provided URL');
        }

        return textContent;
      } catch (error: any) {
        if (error.message.includes('No readable content')) {
          throw new Error('No readable content found at the provided URL. Please check if the URL is correct.');
        }
        throw new Error('Failed to fetch content from the URL. Please check the URL and try again.');
      }
    });
  });
}

export type { PlagiarismResult, PlagiarismMatch, PlagiarismError, PlagiarizedSentence };