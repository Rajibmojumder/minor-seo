import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import MainLayout from '../components/layout/MainLayout';
import TextInput from '../components/WordCounter/TextInput';
import Statistics from '../components/WordCounter/Statistics';
import FileUpload from '../components/WordCounter/FileUpload';
import KeywordDensity from '../components/WordCounter/KeywordDensity';
import ReadingTime from '../components/WordCounter/ReadingTime';
import WordCounterContent from '../components/WordCounter/WordCounterContent';
import { readFileContent } from '../utils/fileReader';
import { CheckCircle } from 'lucide-react';

const WordCounter: React.FC = () => {
  const [text, setText] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [stats, setStats] = useState({
    characters: 0,
    charactersNoSpaces: 0,
    words: 0,
    sentences: 0,
    paragraphs: 0,
    readingTime: 0,
    speakingTime: 0
  });
  const [showResults, setShowResults] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { title: 'Single Words', maxWords: 1 },
    { title: 'Two Words', maxWords: 2 },
    { title: 'Three Words', maxWords: 3 }
  ];

  const calculateStats = (text: string) => {
    const characters = text.length;
    const charactersNoSpaces = text.replace(/\s/g, '').length;
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    const sentences = text.trim() ? text.split(/[.!?]+/).filter(Boolean).length : 0;
    const paragraphs = text.trim() ? text.split(/\n\s*\n/).filter(Boolean).length : 0;
    const readingTime = Math.ceil(words / 200);
    const speakingTime = Math.ceil(words / 130);

    setStats({
      characters,
      charactersNoSpaces,
      words,
      sentences,
      paragraphs,
      readingTime,
      speakingTime
    });
  };

  const handleFileSelect = async (file: File) => {
    try {
      const content = await readFileContent(file);
      setText(content);
      setSelectedFile(file);
    } catch (error) {
      console.error('Error reading file:', error);
    }
  };

  const handleClear = () => {
    setText('');
    setSelectedFile(null);
    setShowResults(false);
  };

  const handleCheck = () => {
    calculateStats(text);
    setShowResults(true);
  };

  return (
    <>
      <Helmet>
        <title>Word Counter - Free Online Word Count & Text Analysis Tool</title>
        <meta 
          name="description" 
          content="Count words, characters, sentences, and analyze text with our free online word counter tool. Get reading time estimates and keyword density analysis." 
        />
      </Helmet>

      <MainLayout>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Word Counter
            </h1>
            <p className="text-lg text-gray-600">
              Count words, analyze text, and get detailed content insights
            </p>
          </div>

          <div className="space-y-6">
            <FileUpload
              onFileSelect={handleFileSelect}
              selectedFile={selectedFile}
              onClear={handleClear}
              compact={true}
            />

            <TextInput
              text={text}
              setText={setText}
              onClear={handleClear}
            />

            <div className="flex justify-center">
              <button
                onClick={handleCheck}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-8 rounded-lg flex items-center transition-all duration-200"
              >
                <CheckCircle className="mr-2" size={20} />
                Check Word Count
              </button>
            </div>

            {showResults && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Statistics stats={stats} />
                <ReadingTime
                  readingTime={stats.readingTime}
                  speakingTime={stats.speakingTime}
                  wordCount={stats.words}
                />
              </div>
            )}

            {showResults && text.trim() && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-6">
                  Top Word Analysis
                </h2>
                <div className="border-b border-gray-200 mb-6">
                  <div className="flex space-x-4">
                    {tabs.map((tab, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`pb-3 px-4 text-sm font-medium transition-colors relative ${
                          activeTab === index
                            ? 'text-indigo-600 border-b-2 border-indigo-600'
                            : 'text-gray-500 hover:text-gray-700'
                        }`}
                      >
                        {tab.title}
                      </button>
                    ))}
                  </div>
                </div>
                <KeywordDensity
                  text={text}
                  maxWords={tabs[activeTab].maxWords}
                  title={`Top ${tabs[activeTab].title} Analysis`}
                />
              </div>
            )}
          </div>

          <WordCounterContent />
        </div>
      </MainLayout>
    </>
  );
};

export default WordCounter;