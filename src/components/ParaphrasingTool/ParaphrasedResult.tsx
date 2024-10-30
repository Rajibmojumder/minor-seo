import React, { useState, useMemo } from 'react';
import { Copy, Check } from 'lucide-react';
import { diffWords } from 'diff';

interface ParaphrasedResultProps {
  originalText: string;
  paraphrasedText: string;
}

const ParaphrasedResult: React.FC<ParaphrasedResultProps> = ({
  originalText,
  paraphrasedText
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(paraphrasedText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  // First show the API response text, then highlight the changes
  const diffResult = useMemo(() => {
    // We compare the API response (paraphrasedText) with original text
    // This ensures we show the API's paraphrased version as the base text
    return diffWords(originalText, paraphrasedText).map(part => ({
      ...part,
      // Mark parts that exist in paraphrased but not in original as changes
      isChange: part.added && !part.removed
    }));
  }, [originalText, paraphrasedText]);

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-900">
          Paraphrased Result
        </h2>
        <button
          onClick={handleCopy}
          className={`p-2 rounded-lg transition-colors ${
            copied
              ? 'text-green-600 bg-green-50'
              : 'text-gray-600 hover:text-indigo-600 hover:bg-indigo-50'
          }`}
          title={copied ? 'Copied!' : 'Copy to clipboard'}
        >
          {copied ? (
            <Check className="w-4 h-4" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </button>
      </div>

      <div className="p-4 bg-gray-50 rounded-lg">
        <div className="prose prose-sm max-w-none leading-relaxed whitespace-pre-wrap break-words">
          {/* Only show parts that are either unchanged or added (not removed) */}
          {diffResult
            .filter(part => !part.removed)
            .map((part, index) => (
              <span
                key={index}
                className={part.isChange ? 'bg-green-100 px-1 rounded' : ''}
              >
                {part.value}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ParaphrasedResult;