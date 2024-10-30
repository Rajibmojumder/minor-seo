import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import MainLayout from '../components/layout/MainLayout';
import TextInput from '../components/ParaphrasingTool/TextInput';
import ParaphrasedResult from '../components/ParaphrasingTool/ParaphrasedResult';
import ParaphrasingOptions from '../components/ParaphrasingTool/ParaphrasingOptions';
import ErrorDisplay from '../components/ErrorDisplay';
import ParaphrasingContent from '../components/ParaphrasingTool/ParaphrasingContent';
import { CheckCircle, Loader } from 'lucide-react';
import { paraphraseText } from '../services/paraphrasingApi';
import { readFileContent } from '../utils/fileReader';

const WORD_LIMIT = 2000;
const DAILY_LIMIT = 5000;

const ParaphrasingTool: React.FC = () => {
  const [text, setText] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<{ message: string; code?: string } | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [selectedStyle, setSelectedStyle] = useState('standard');
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [wordsCheckedToday, setWordsCheckedToday] = useState(0);

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
      } catch (err) {
        setError({
          message: err instanceof Error ? err.message : 'Failed to read file',
          code: 'FILE_ERROR'
        });
      }
    }
  };

  const handleParaphrase = async () => {
    if (!text.trim()) {
      setError({ message: 'Please enter some text to paraphrase' });
      return;
    }

    if (isOverLimit) {
      setError({ message: `Text exceeds ${WORD_LIMIT} word limit` });
      return;
    }

    if (wordsCheckedToday + wordCount > DAILY_LIMIT) {
      setError({ message: 'Daily word limit reached' });
      return;
    }

    setIsProcessing(true);
    setError(null);
    setResult(null);

    try {
      const paraphrased = await paraphraseText({
        text,
        result_type: 'single',
        language: selectedLanguage
      });

      setResult(paraphrased);
      setWordsCheckedToday(prev => prev + wordCount);
    } catch (err) {
      setError({
        message: err instanceof Error ? err.message : 'Failed to paraphrase text',
        code: err instanceof Error ? (err as any).code : undefined
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const handleClear = () => {
    setText('');
    setError(null);
    setResult(null);
  };

  return (
    <>
      <Helmet>
        <title>Paraphrasing Tool - Free Content Rewriter</title>
        <meta 
          name="description" 
          content="Rewrite and rephrase your content while maintaining its original meaning with our free online paraphrasing tool." 
        />
      </Helmet>

      <MainLayout>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Paraphrasing Tool
            </h1>
            <p className="text-lg text-gray-600">
              Rewrite content while maintaining its original meaning
            </p>
          </div>

          <div className="space-y-6">
            <ErrorDisplay error={error} />

            <ParaphrasingOptions
              selectedStyle={selectedStyle}
              onStyleChange={setSelectedStyle}
              selectedLanguage={selectedLanguage}
              onLanguageChange={setSelectedLanguage}
              isProcessing={isProcessing}
            />

            <TextInput
              text={text}
              setText={setText}
              onClear={handleClear}
              onFileUpload={handleFileUpload}
              isProcessing={isProcessing}
              wordCount={wordCount}
              wordLimit={WORD_LIMIT}
              isOverLimit={isOverLimit}
              wordsCheckedToday={wordsCheckedToday}
              dailyLimit={DAILY_LIMIT}
            />

            <div className="flex justify-center">
              <button
                onClick={handleParaphrase}
                disabled={isProcessing || !text.trim() || isOverLimit || isLimitReached}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-8 rounded-lg flex items-center transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isProcessing ? (
                  <>
                    <Loader className="mr-2 animate-spin" />
                    Paraphrasing...
                  </>
                ) : (
                  <>
                    <CheckCircle className="mr-2" />
                    Paraphrase Text
                  </>
                )}
              </button>
            </div>

            {result && (
              <ParaphrasedResult
                originalText={text}
                paraphrasedText={result}
                onCopy={() => {}}
              />
            )}
          </div>

          <ParaphrasingContent />
        </div>
      </MainLayout>
    </>
  );
};

export default ParaphrasingTool;