import axios from 'axios';

const API_URL = 'https://paraphrase-genius.p.rapidapi.com/dev/paraphrase/';
const API_KEY = '844f17265emsh0c5bcba45e41543p1530afjsn57ee7c7c7286';
const API_HOST = 'paraphrase-genius.p.rapidapi.com';

export type Language = 'en' | 'es' | 'fr' | 'de' | 'it' | 'pt' | 'nl' | 'pl' | 'ru' | 'ja' | 'zh' | 'ko';

export interface ParaphraseOptions {
  text: string;
  language: Language;
  style: 'standard' | 'fluent' | 'creative';
}

export interface ParaphraseError extends Error {
  code?: string;
}

export async function paraphraseText(options: ParaphraseOptions): Promise<string> {
  try {
    const response = await axios.post(API_URL, {
      text: options.text,
      lang: options.language,
      style: options.style,
      result_type: 'single'
    }, {
      headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': API_HOST,
        'Content-Type': 'application/json'
      },
      timeout: 30000
    });

    // Return the first result from the array
    if (Array.isArray(response.data) && response.data.length > 0) {
      return response.data[0];
    }

    throw new Error('Invalid API response');
  } catch (error: any) {
    if (error.response?.status === 429) {
      throw new Error('Too many requests. Please try again later.');
    }
    if (error.response?.status === 403) {
      throw new Error('API key is invalid or expired.');
    }
    throw new Error('Failed to paraphrase text. Please try again.');
  }
}