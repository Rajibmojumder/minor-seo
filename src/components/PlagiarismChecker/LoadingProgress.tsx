import React from 'react';
import { Loader } from 'lucide-react';

interface LoadingProgressProps {
  progress: number;
  message: string;
}

const LoadingProgress: React.FC<LoadingProgressProps> = ({ progress, message }) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4 shadow-2xl">
        <div className="flex flex-col items-center">
          <Loader className="w-8 h-8 text-indigo-600 animate-spin mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{message}</h3>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
            <div 
              className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-sm text-gray-600">{Math.round(progress)}% Complete</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingProgress;