import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import MainLayout from '../components/layout/MainLayout';
import { CheckCircle, Loader, Trash2, Clock, AlertTriangle } from 'lucide-react';
import ScoreDisplay from '../components/PlagiarismChecker/ScoreDisplay';
import ResultDisplay from '../components/PlagiarismChecker/ResultDisplay';
import ErrorDisplay from '../components/ErrorDisplay';
import LoadingProgress from '../components/PlagiarismChecker/LoadingProgress';
import CheckOptions from '../components/PlagiarismChecker/CheckOptions';
import UrlInput from '../components/PlagiarismChecker/UrlInput';
import FileUpload from '../components/PlagiarismChecker/FileUpload';
import LanguageSelector, { Language } from '../components/PlagiarismChecker/LanguageSelector';
import PlagiarismContent from '../components/PlagiarismChecker/PlagiarismContent';
import { checkPlagiarism, fetchUrlContent } from '../services/plagiarismApi';
import { readFileContent } from '../utils/fileReader';
import type { PlagiarismResult } from '../services/plagiarismApi';

const WORD_LIMIT = 1000;
const DAILY_LIMIT = 3000;

const PlagiarismChecker: React.FC = () => {
  const [text, setText] = useState('');
  const [url, setUrl] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [activeTab, setActiveTab] = useState<'text' | 'url' | 'file'>('text');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<{ message: string; code?: string } | null>(null);
  const [result, setResult] = useState<PlagiarismResult | null>(null);
  const [wordsCheckedToday, setWordsCheckedToday] = useState(0);
  const [nextResetTime, setNextResetTime] = useState(Date.now() + 24 * 60 * 60 * 1000);
  const [checkProgress, setCheckProgress] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>('en');

  const wordCount = text.trim().split(/\s+/).filter(word => word.length > 0).length;
  const isOverLimit = wordCount > WORD_LIMIT;
  const isLimitReached = wordsCheckedToday >= DAILY_LIMIT;

  const timeUntilReset = Math.max(0, nextResetTime - Date.now());
  const hoursLeft = Math.floor(timeUntilReset / (1000 * 60 * 60));
  const minutesLeft = Math.floor((timeUntilReset % (1000 * 60 * 60)) / (1000 * 60));

  const handleCheck = async () => {
    setIsLoading(true);
    setError(null);
    setCheckProgress(0);
    
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
        throw new Error(`Text exceeds ${WORD_LIMIT} words limit`);
      }

      if (wordsCheckedToday + wordCount > DAILY_LIMIT) {
        throw new Error('Daily word limit reached');
      }

      const result = await checkPlagiarism({ 
        text: contentToCheck,
        onProgress: (progress) => setCheckProgress(progress)
      });

      setResult(result);
      setWordsCheckedToday(prev => prev + wordCount);

    } catch (error: any) {
      setError({
        message: error.message || 'An error occurred while checking for plagiarism',
        code: error.code
      });
      setResult(null);
    } finally {
      setIsLoading(false);
      setCheckProgress(0);
    }
  };

  const handleClear = () => {
    setText('');
    setUrl('');
    setSelectedFile(null);
    setError(null);
    setResult(null);
  };

  const dismissError = () => {
    setError(null);
  };

  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
    setActiveTab('file');
  };

  const handleUrlSubmit = (newUrl: string) => {
    setUrl(newUrl);
    setActiveTab('url');
  };

  const handleTabChange = (tab: 'text' | 'url' | 'file') => {
    setActiveTab(tab);
    setError(null);
  };

  return (
    <>
      <Helmet>
        <title>Plagiarism Checker - Free Content Originality Checker</title>
        <meta name="description" content="Check your content for plagiarism with our free online plagiarism checker. Supports multiple languages and provides detailed similarity analysis." />
      </Helmet>

      <MainLayout>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Plagiarism Checker
            </h1>
            <p className="text-lg text-gray-600">
              Check your content for originality across multiple languages
            </p>
          </div>

          <div className="space-y-6">
            <ErrorDisplay error={error} onDismiss={dismissError} />

            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-4 mb-6">
              <div className="flex items-center justify-between gap-4">
                <LanguageSelector
                  selectedLanguage={selectedLanguage}
                  onLanguageChange={setSelectedLanguage}
                  disabled={isLoading}
                />
                <div className="flex items-center gap-4">
                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-300 ${
                        isLimitReached ? 'bg-red-500' : 'bg-indigo-600'
                      }`}
                      style={{ width: `${Math.min((wordsCheckedToday / DAILY_LIMIT) * 100, 100)}%` }}
                    />
                  </div>
                  <span className="text-gray-600 text-sm whitespace-nowrap">
                    {wordsCheckedToday}/{DAILY_LIMIT} words today
                  </span>
                </div>
              </div>
              {isLimitReached && (
                <div className="animate-fade-in flex items-center justify-center bg-red-50 rounded-lg p-4 mt-2">
                  <Clock className="w-5 h-5 text-red-500 mr-2" />
                  <span className="text-red-600 font-medium">
                    Reset in: {hoursLeft}h {minutesLeft}m
                  </span>
                </div>
              )}
            </div>

            <CheckOptions activeTab={activeTab} onTabChange={handleTabChange} />

            <div className="bg-white rounded-xl shadow-sm p-6">
              {activeTab === 'text' && (
                <div className="relative">
                  <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter your text here to check for plagiarism..."
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
                      <span className="text-sm text-red-500 font-medium flex items-center">
                        <AlertTriangle className="h-4 w-4 mr-1" />
                        Exceeds {WORD_LIMIT} word limit
                      </span>
                    )}
                  </div>
                </div>
              )}

              {activeTab === 'url' && (
                <UrlInput 
                  url={url} 
                  onUrlSubmit={handleUrlSubmit}
                />
              )}

              {activeTab === 'file' && (
                <FileUpload
                  onFileSelect={handleFileSelect}
                  selectedFile={selectedFile}
                  onClear={() => setSelectedFile(null)}
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
                      Check Plagiarism
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

            {result && !error && (
              <div className="space-y-8 animate-fade-in">
                <ScoreDisplay
                  plagiarismScore={result.plagiarismScore}
                  uniqueScore={result.uniqueScore}
                />
                <ResultDisplay plagiarismResults={result} />
              </div>
            )}

            {isLoading && (
              <LoadingProgress 
                progress={checkProgress} 
                message="Analyzing content for plagiarism..."
              />
            )}
          </div>

          <PlagiarismContent />
        </div>
      </MainLayout>
    </>
  );
};

export default PlagiarismChecker;