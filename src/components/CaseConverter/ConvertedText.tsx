import React from 'react';
import { Copy, Check } from 'lucide-react';

interface ConvertedTextProps {
  text: string;
}

const ConvertedText: React.FC<ConvertedTextProps> = ({ text }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-900">
          Converted Text
        </h2>
        <button
          onClick={handleCopy}
          className={`flex items-center px-3 py-1.5 text-sm rounded-lg transition-colors ${
            copied
              ? 'text-green-600 bg-green-50'
              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
          }`}
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 mr-1" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 mr-1" />
              Copy
            </>
          )}
        </button>
      </div>
      <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg min-h-[100px] whitespace-pre-wrap break-words">
        {text}
      </div>
    </div>
  );
};

export default ConvertedText;