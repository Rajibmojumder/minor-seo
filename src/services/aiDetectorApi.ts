import { AIDetectionResult } from '../types/aiDetector';

const API_URL = 'https://ai-content-detector-ai-gpt.p.rapidapi.com/api/detectText/';
const API_KEY = '844f17265emsh0c5bcba45e41543p1530afjsn57ee7c7c7286';
const API_HOST = 'ai-content-detector-ai-gpt.p.rapidapi.com';

class AIDetectionError extends Error {
  code: string;

  constructor(message: string, code: string) {
    super(message);
    this.name = 'AIDetectionError';
    this.code = code;
  }
}

export async function checkAIContent(text: string): Promise<AIDetectionResult> {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': API_HOST,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text })
    });

    if (!response.ok) {
      throw new AIDetectionError('Failed to check content', 'API_ERROR');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof AIDetectionError) {
      throw error;
    }
    throw new AIDetectionError(
      'An unexpected error occurred while checking the content',
      'UNKNOWN_ERROR'
    );
  }
}

export async function fetchUrlContent(url: string): Promise<string> {
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
    
    // Clean HTML content
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
}