import React, { useState } from 'react';
import { Bot, Brain, Loader, CheckCircle, Trash2, Clock, AlertTriangle } from 'lucide-react';
import AIScoreDisplay from './AIScoreDisplay';
import TextAnalysis from './TextAnalysis';
import ErrorDisplay from '../ErrorDisplay';
import CheckOptions from './CheckOptions';
import UrlInput from './UrlInput';
import FileUpload from './FileUpload';
import { checkAIContent, fetchUrlContent } from '../../services/aiDetectorApi';
import { readFileContent } from '../../utils/fileReader';
import type { AIDetectionResult } from '../../types/aiDetector';

const SUPPORTED_AI_TOOLS = [
  'GPT-3.5',
  'GPT-4',
  'Claude',
  'Gemini',
  'LLaMA',
  'PaLM',
  'BLOOM'
];

const WORD_LIMIT = 1000;
const DAILY_LIMIT = 3000;

const AIDetectorTool = () => {
  const [text, setText] = useState('');
  const [url, setUrl] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [activeTab, setActiveTab] = useState<'text' | 'url' | 'file'>('text');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<{ message: string; code?: string } | null>(null);
  const [result, setResult] = useState<AIDetectionResult | null>(null);
  const [wordsCheckedToday, setWordsCheckedToday] = useState(0);
  const [nextResetTime, setNextResetTime] = useState(Date.now() + 24 * 60 * 60 * 1000);

  const wordCount = text.trim().split(/\s+/).filter(word => word.length > 0).length;
  const isOverLimit = wordCount > WORD_LIMIT;
  const isLimitReached = wordsCheckedToday >= DAILY_LIMIT;

  const timeUntilReset = Math.max(0, nextResetTime - Date.now());
  const hoursLeft = Math.floor(timeUntilReset / (1000 * 60 * 60));
  const minutesLeft = Math.floor((timeUntilReset % (1000 * 60 * 60)) / (1000 * 60));

  const handleCheck = async () => {
    setIsLoading(true);
    setError(null);

    try {
      let contentToCheck = '';
      
      switch (activeTab) {
        case 'text':
          contentToCheck = text;
          break;
        case 'url':
          if (!url) {
            throw new Error('Please enter a URL to check');
          }
          contentToCheck = await fetchUrlContent(url);
          break;
        case 'file':
          if (!selectedFile) {
            throw new Error('Please select a file to check');
          }
          contentToCheck = await readFileContent(selectedFile);
          break;
      }

      const wordCount = contentToCheck.split(/\s+/).filter(word => word.length > 0).length;
      
      if (wordCount > WORD_LIMIT) {
        throw new Error('Text exceeds 1000 words limit');
      }

      if (wordsCheckedToday + wordCount > DAILY_LIMIT) {
        throw new Error('Daily word limit reached');
      }

      const result = await checkAIContent(contentToCheck);
      setResult(result);
      setWordsCheckedToday(prev => prev + wordCount);

    } catch (error: any) {
      setError({
        message: error.message || 'An error occurred while checking the content',
        code: error.code
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    setText('');
    setUrl('');
    setSelectedFile(null);
    setError(null);
    setResult(null);
  };

  return (
    <div className="space-y-6">
      {/* Supported AI Tools */}
      <div className="bg-white rounded-xl p-4 mb-8">
        <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap pb-2">
          <Bot className="h-5 w-5 text-indigo-600 flex-shrink-0" />
          <span className="text-sm font-medium text-gray-700">Supported AI Detection:</span>
          {SUPPORTED_AI_TOOLS.map((tool, index) => (
            <span
              key={tool}
              className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* Daily Word Limit Progress */}
      <div className="bg-white rounded-xl p-4">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center space-x-2">
            <div className="w-48 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className={`h-full transition-all duration-300 ${
                  isLimitReached ? 'bg-red-500' : 'bg-gradient-to-r from-blue-500 to-indigo-600'
                }`}
                style={{ width: `${Math.min((wordsCheckedToday / DAILY_LIMIT) * 100, 100)}%` }}
              />
            </div>
            <span className="text-sm text-gray-600">
              {wordsCheckedToday}/{DAILY_LIMIT} words today
            </span>
          </div>
        </div>
        {isLimitReached && (
          <div className="flex items-center mt-2 text-red-600 text-sm">
            <Clock className="mr-2 h-4 w-4" />
            <span>Daily limit reached. Resets in {hoursLeft}h {minutesLeft}m</span>
          </div>
        )}
      </div>

      <ErrorDisplay error={error} />

      <CheckOptions activeTab={activeTab} onTabChange={setActiveTab} />

      <div className="bg-white rounded-xl shadow-sm p-6">
        {activeTab === 'text' && (
          <div className="relative">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter your text here to check for AI-generated content..."
              className={`w-full h-64 p-4 border rounded-lg resize-none focus:ring-2 focus:border-transparent transition-colors ${
                isOverLimit 
                  ? 'border-red-500 focus:ring-red-500' 
                  : 'border-gray-300 focus:ring-indigo-500'
              }`}
              disabled={isLoading || isLimitReached}
            />
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
              <span className={`text-sm ${isOverLimit ? 'text-red-500 font-medium' : 'text-gray-500'}`}>
                {wordCount}/{WORD_LIMIT} words
              </span>
              
              {isOverLimit && (
                <span className="text-sm text-red-500 font-medium">
                  Exceeds 1000 word limit
                </span>
              )}
            </div>
          </div>
        )}

        {activeTab === 'url' && (
          <UrlInput 
            url={url} 
            onUrlSubmit={setUrl} 
            disabled={isLoading || isLimitReached}
          />
        )}

        {activeTab === 'file' && (
          <FileUpload
            onFileSelect={setSelectedFile}
            selectedFile={selectedFile}
            onClear={() => setSelectedFile(null)}
            disabled={isLoading || isLimitReached}
          />
        )}

        <div className="mt-6 flex justify-between items-center">
          <button
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-lg flex items-center transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handleCheck}
            disabled={isLoading || isLimitReached || (activeTab === 'text' && isOverLimit)}
          >
            {isLoading ? (
              <>
                <Loader className="mr-2 animate-spin" size={20} />
                Checking...
              </>
            ) : (
              <>
                <CheckCircle className="mr-2" size={20} />
                Check Content
              </>
            )}
          </button>

          <button
            className="ml-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-lg flex items-center transition-all duration-200"
            onClick={handleClear}
            disabled={isLoading}
          >
            <Trash2 className="mr-2" size={20} />
            Clear
          </button>
        </div>
      </div>

      {result && (
        <div className="space-y-8 animate-fade-in">
          <AIScoreDisplay result={result} />
          <TextAnalysis result={result} />
        </div>
      )}
    </div>
  );
};

export default AIDetectorTool;