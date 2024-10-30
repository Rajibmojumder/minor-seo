import axios from 'axios';

const API_URL = 'https://grammarbot-neural.p.rapidapi.com/v1/check';
const API_KEY = '844f17265emsh0c5bcba45e41543p1530afjsn57ee7c7c7286';
const API_HOST = 'grammarbot-neural.p.rapidapi.com';

export interface GrammarError {
  message: string;
  offset: number;
  length: number;
  replacements: string[];
  context: {
    text: string;
    offset: number;
    length: number;
  };
  rule: {
    id: string;
    description: string;
    category: string;
  };
}

export interface GrammarResult {
  matches: GrammarError[];
  text: string;
  stats: {
    correctWords: number;
    incorrectWords: number;
    totalWords: number;
  };
}

export async function checkGrammar(text: string): Promise<GrammarResult> {
  try {
    const response = await axios.post(
      API_URL,
      {
        text,
        lang: 'en'
      },
      {
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': API_KEY,
          'X-RapidAPI-Host': API_HOST
        },
        timeout: 30000
      }
    );

    // Get total word count
    const totalWords = text.trim().split(/\s+/).length;

    if (!response.data || !response.data.edits) {
      throw new Error('Invalid API response');
    }

    // Transform API response to match our interface
    const matches = response.data.edits.map((edit: any) => ({
      message: edit.message || 'Suggested correction',
      offset: edit.start,
      length: edit.end - edit.start,
      replacements: [edit.replace],
      context: {
        text: text.slice(edit.start, edit.end),
        offset: edit.start,
        length: edit.end - edit.start
      },
      rule: {
        id: edit.edit_type || 'unknown',
        description: edit.replace,
        category: edit.err_cat === 'GRMR' ? 'Grammar' : 'Spelling'
      }
    }));

    // Calculate statistics
    const incorrectWords = matches.length;
    const correctWords = totalWords - incorrectWords;

    return {
      matches,
      text,
      stats: {
        correctWords,
        incorrectWords,
        totalWords
      }
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.code === 'ECONNABORTED') {
        throw new Error('Request timed out. Please try again.');
      }
      if (error.response?.status === 429) {
        throw new Error('Too many requests. Please try again in a few minutes.');
      }
      if (error.response?.status === 403) {
        throw new Error('API subscription required. Please check your API key.');
      }
      throw new Error(error.response?.data?.message || 'Failed to check grammar. Please try again.');
    }
    throw new Error('An unexpected error occurred. Please try again.');
  }
}