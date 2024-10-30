import React from 'react';
import { Globe2 } from 'lucide-react';

interface UrlInputProps {
  url: string;
  onUrlSubmit: (url: string) => void;
  disabled?: boolean;
}

const UrlInput: React.FC<UrlInputProps> = ({ url, onUrlSubmit, disabled }) => {
  return (
    <div className="mb-4">
      <div className="relative">
        <Globe2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="url"
          value={url}
          onChange={(e) => onUrlSubmit(e.target.value)}
          placeholder="Enter website URL to check for AI-generated content..."
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          disabled={disabled}
        />
      </div>
      <p className="mt-2 text-sm text-gray-500">
        Enter a URL to analyze its content for AI detection
      </p>
    </div>
  );
};

export default UrlInput;