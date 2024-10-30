import React from 'react';
import { Hash, Type, AlignLeft, Clock } from 'lucide-react';

interface StatisticsProps {
  stats: {
    characters: number;
    charactersNoSpaces: number;
    words: number;
    sentences: number;
    paragraphs: number;
    readingTime: number;
    speakingTime: number;
  };
}

const Statistics: React.FC<StatisticsProps> = ({ stats }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        Text Statistics
      </h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center">
            <Type className="w-4 h-4 text-indigo-600 mr-2" />
            <span className="text-sm text-gray-600">Words</span>
          </div>
          <span className="font-semibold">{stats.words}</span>
        </div>

        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center">
            <Hash className="w-4 h-4 text-indigo-600 mr-2" />
            <span className="text-sm text-gray-600">Characters</span>
          </div>
          <span className="font-semibold">{stats.characters}</span>
        </div>

        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center">
            <Hash className="w-4 h-4 text-indigo-600 mr-2" />
            <span className="text-sm text-gray-600">Characters (no spaces)</span>
          </div>
          <span className="font-semibold">{stats.charactersNoSpaces}</span>
        </div>

        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center">
            <AlignLeft className="w-4 h-4 text-indigo-600 mr-2" />
            <span className="text-sm text-gray-600">Sentences</span>
          </div>
          <span className="font-semibold">{stats.sentences}</span>
        </div>

        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center">
            <AlignLeft className="w-4 h-4 text-indigo-600 mr-2" />
            <span className="text-sm text-gray-600">Paragraphs</span>
          </div>
          <span className="font-semibold">{stats.paragraphs}</span>
        </div>
      </div>
    </div>
  );
};

export default Statistics;