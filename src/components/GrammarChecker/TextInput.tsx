import React, { useRef } from 'react';
import { Trash2, Upload, AlertTriangle } from 'lucide-react';

interface TextInputProps {
  text: string;
  setText: (text: string) => void;
  onClear: () => void;
  onFileUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isChecking: boolean;
  wordCount: number;
  wordLimit: number;
  isOverLimit: boolean;
}

const TextInput: React.FC<TextInputProps> = ({
  text,
  setText,
  onClear,
  onFileUpload,
  isChecking,
  wordCount,
  wordLimit,
  isOverLimit
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-900">
          Enter or Paste Text
        </h2>
        <div className="flex items-center gap-2">
          <input
            type="file"
            ref={fileInputRef}
            onChange={onFileUpload}
            className="hidden"
            accept=".txt"
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            disabled={isChecking}
            className="flex items-center px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Upload className="w-4 h-4 mr-1" />
            Upload
          </button>
          <button
            onClick={onClear}
            disabled={isChecking}
            className="flex items-center px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Trash2 className="w-4 h-4 mr-1" />
            Clear
          </button>
        </div>
      </div>
      <div className="relative">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type or paste your text here..."
          className={`w-full h-64 p-4 bg-gray-50 border rounded-lg resize-none transition-colors mb-2 ${
            isOverLimit 
              ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
              : 'border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent'
          }`}
          disabled={isChecking}
        />
        <div className="flex items-center justify-between text-sm mt-2">
          <div className={`flex items-center ${isOverLimit ? 'text-red-600' : 'text-gray-500'}`}>
            <span>{wordCount}</span>
            <span className="mx-1">/</span>
            <span>{wordLimit}</span>
            <span className="ml-1">words</span>
          </div>
          {isOverLimit && (
            <div className="flex items-center text-red-600">
              <AlertTriangle className="w-4 h-4 mr-1" />
              <span>Word limit exceeded</span>
            </div>
          )}
        </div>
      </div>
      <p className="mt-2 text-sm text-gray-500">
        Supports plain text (.txt) files or direct input
      </p>
    </div>
  );
};

export default TextInput;