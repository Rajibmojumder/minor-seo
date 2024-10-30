import React, { useState, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import MainLayout from '../components/layout/MainLayout';
import { checkGrammar, type GrammarResult } from '../services/grammarApi';
import { AlertTriangle, CheckCircle, Loader } from 'lucide-react';
import ErrorDisplay from '../components/GrammarChecker/ErrorDisplay';
import TextInput from '../components/GrammarChecker/TextInput';
import GrammarCheckerContent from '../components/GrammarChecker/GrammarCheckerContent';
import { readFileContent } from '../utils/fileReader';

const GrammarChecker = () => {
  const [text, setText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isFixing, setIsFixing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<GrammarResult | null>(null);
  const [fixedText, setFixedText] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'original' | 'fixed'>('original');
  const [showTabs, setShowTabs] = useState(false);
  const [wordsCheckedToday, setWordsCheckedToday] = useState(0);

  const WORD_LIMIT = 3000;
  const DAILY_LIMIT = 5000;
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  const isOverLimit = wordCount > WORD_LIMIT;
  const isLimitReached = wordsCheckedToday >= DAILY_LIMIT;

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      try {
        const content = await readFileContent(file);
        setText(content);
        setError(null);
        setResult(null);
        setFixedText(null);
        setShowTabs(false);
        setActiveTab('original');
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to read file');
      }
    }
  };

  const handleCheck = useCallback(async () => {
    if (!text.trim()) {
      setError('Please enter some text to check');
      setResult(null);
      setFixedText(null);
      return;
    }

    if (isOverLimit) {
      setError('Text exceeds word limit');
      return;
    }

    if (wordsCheckedToday + wordCount > DAILY_LIMIT) {
      setError('Daily word limit reached');
      return;
    }

    setIsLoading(true);
    setError(null);
    setFixedText(null);
    setShowTabs(false);
    setActiveTab('original');

    try {
      const grammarResult = await checkGrammar(text);
      if (grammarResult) {
        setResult(grammarResult);
        setError(null);
        setWordsCheckedToday(prev => prev + wordCount);
      } else {
        throw new Error('Failed to analyze text');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to check grammar');
      setResult(null);
    } finally {
      setIsLoading(false);
    }
  }, [text, isOverLimit, wordsCheckedToday, wordCount, DAILY_LIMIT]);

  const handleTextUpdate = useCallback((newText: string) => {
    setText(newText);
  }, []);

  const handleClear = () => {
    setText('');
    setError(null);
    setResult(null);
    setFixedText(null);
    setShowTabs(false);
    setActiveTab('original');
  };

  const handleFixAll = async () => {
    if (!result) return;

    setIsFixing(true);
    setShowTabs(true);
    setActiveTab('fixed');

    try {
      const corrections = result.matches
        .filter(match => match.replacements && match.replacements.length > 0)
        .sort((a, b) => b.offset - a.offset);

      let newText = text;
      corrections.forEach(match => {
        const replacement = match.replacements[0];
        newText = newText.slice(0, match.offset) + replacement + newText.slice(match.offset + match.length);
      });

      setFixedText(newText);

      const newResult = await checkGrammar(newText);
      if (newResult) {
        setResult(newResult);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to apply corrections');
    } finally {
      setIsFixing(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Grammar Checker - Free Online Grammar & Spell Checker</title>
        <meta name="description" content="Check and fix grammar, spelling, and punctuation errors with our free online grammar checker tool. Perfect for writers and students." />
      </Helmet>

      <MainLayout>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Grammar Checker
            </h1>
            <p className="text-lg text-gray-600">
              Fix grammar, spelling, and punctuation errors instantly
            </p>
          </div>

          <div className="space-y-6">
            {/* Daily Word Limit Progress */}
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-4">
              <div className="flex justify-between items-center">
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
                  <AlertTriangle className="mr-2 h-4 w-4" />
                  <span>Daily limit reached. Please try again tomorrow.</span>
                </div>
              )}
            </div>

            {error && (
              <div className="rounded-lg bg-red-50 p-4">
                <div className="flex">
                  <AlertTriangle className="h-5 w-5 text-red-400" />
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800">Error</h3>
                    <div className="mt-2 text-sm text-red-700">{error}</div>
                  </div>
                </div>
              </div>
            )}

            <TextInput
              text={text}
              setText={setText}
              onFileUpload={handleFileUpload}
              isChecking={isLoading}
              onClear={handleClear}
              wordCount={wordCount}
              wordLimit={WORD_LIMIT}
              isOverLimit={isOverLimit}
            />

            <div className="flex justify-center">
              <button
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-8 rounded-lg flex items-center transition-all duration-200 disabled:opacity-50"
                onClick={handleCheck}
                disabled={isLoading || isFixing || !text.trim() || isOverLimit || isLimitReached}
              >
                {isLoading ? (
                  <>
                    <Loader className="mr-2 animate-spin" />
                    Checking...
                  </>
                ) : (
                  <>
                    <CheckCircle className="mr-2" />
                    Check Grammar
                  </>
                )}
              </button>
            </div>

            {result && !error && (
              <ErrorDisplay 
                result={result} 
                text={text}
                fixedText={fixedText}
                onTextUpdate={handleTextUpdate}
                isLoading={isLoading}
                isFixing={isFixing}
                onFixAll={handleFixAll}
                activeTab={activeTab}
                onTabChange={setActiveTab}
                showTabs={showTabs}
              />
            )}
          </div>

          <GrammarCheckerContent />
        </div>
      </MainLayout>
    </>
  );
};

export default GrammarChecker;