import React from 'react';
import { Globe2 } from 'lucide-react';

interface UrlInputProps {
  onUrlSubmit: (url: string) => void;
  url: string;
}

const UrlInput: React.FC<UrlInputProps> = ({ onUrlSubmit, url }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onUrlSubmit(e.target.value);
  };

  return (
    <div className="h-24 bg-white rounded-lg shadow-sm p-4">
      <div className="relative h-full">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Check URL Content
        </label>
        <div className="relative">
          <Globe2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="url"
            value={url}
            onChange={handleChange}
            placeholder="Enter website URL"
            className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
      </div>
    </div>
  );
};

export default UrlInput;