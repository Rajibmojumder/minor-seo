import React from 'react';
import { Clock, Mic } from 'lucide-react';

interface ReadingTimeProps {
  readingTime: number;
  speakingTime: number;
  wordCount: number;
}

const ReadingTime: React.FC<ReadingTimeProps> = ({ readingTime, speakingTime, wordCount }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        Time Estimates
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-indigo-50 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <Clock className="w-5 h-5 text-indigo-600 mr-2" />
            <h3 className="font-medium text-indigo-900">Reading Time</h3>
          </div>
          <p className="text-2xl font-bold text-indigo-600">
            {readingTime} min
          </p>
          <p className="text-sm text-indigo-700 mt-1">
            ~200 words per minute
          </p>
        </div>

        <div className="bg-purple-50 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <Mic className="w-5 h-5 text-purple-600 mr-2" />
            <h3 className="font-medium text-purple-900">Speaking Time</h3>
          </div>
          <p className="text-2xl font-bold text-purple-600">
            {speakingTime} min
          </p>
          <p className="text-sm text-purple-700 mt-1">
            ~130 words per minute
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReadingTime;