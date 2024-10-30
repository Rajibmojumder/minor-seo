import React from 'react';
import { AlertTriangle } from 'lucide-react';
import type { AIDetectionResult } from '../../types/aiDetector';

interface TextAnalysisProps {
  result: AIDetectionResult;
}

const TextAnalysis: React.FC<TextAnalysisProps> = ({ result }) => {
  if (!result || !result.sentences) {
    return null;
  }

  const renderAIContent = () => {
    if (!result.sentences || result.sentences.length === 0) {
      return (
        <p className="text-gray-600">
          No AI-generated content detected in the analyzed text.
        </p>
      );
    }

    return (
      <div className="leading-relaxed space-y-2">
        {result.sentences.map((sentence, index) => (
          <div key={index} className="group relative inline">
            <span className="relative inline decoration-red-500 decoration-2 underline shadow-[0_2px_0_0_rgba(239,68,68,0.3)]">
              {sentence}
              {index < result.sentences.length - 1 ? ' ' : ''}
            </span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="glass-morphism rounded-2xl p-8 shadow-xl mt-8">
      <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-800">
        <AlertTriangle className="mr-3 text-yellow-500" size={24} />
        AI Content Detection
      </h2>

      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4 text-gray-700">
          AI-Generated Content:
        </h3>
        <div className="p-6 rounded-xl bg-white border border-gray-100">
          {renderAIContent()}
        </div>
        <div className="mt-4 flex gap-6">
          <div className="flex items-center">
            <span className="inline-block w-4 h-4 bg-red-50 border border-red-500 rounded mr-2"></span>
            <span className="text-sm text-gray-600">AI-Generated Content</span>
          </div>
        </div>
      </div>

      {result.textWords > 1000 && (
        <div className="text-center mt-4 text-red-600 text-sm bg-red-50 rounded-lg p-3">
          <AlertTriangle className="inline-block mr-2 h-4 w-4" />
          Text exceeds 1000 word limit. Please reduce the content length.
        </div>
      )}
    </div>
  );
};

export default TextAnalysis;