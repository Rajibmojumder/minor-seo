import React, { useRef } from 'react';
import { Trash2, Upload, AlertTriangle, Globe } from 'lucide-react';
import type { Language } from '../../services/paraphrasingApi';

interface TextInputProps {
  text: string;
  setText: (text: string) => void;
  onClear: () => void;
  onFileUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isProcessing: boolean;
  wordCount: number;
  wordLimit: number;
  isOverLimit: boolean;
  selectedLanguage: Language;
  onLanguageChange: (language: Language) => void;
}

const languages: { code: Language; name: string }[] = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Spanish' },
  { code: 'fr', name: 'French' },
  { code: 'de', name: 'German' },
  { code: 'it', name: 'Italian' },
  { code: 'pt', name: 'Portuguese' },
  { code: 'nl', name: 'Dutch' },
  { code: 'pl', name: 'Polish' },
  { code: 'ru', name: 'Russian' },
  { code: 'ja', name: 'Japanese' },
  { code: 'zh', name: 'Chinese' },
  { code: 'ko', name: 'Korean' }
];

const TextInput: React.FC<TextInputProps> = ({
  text,
  setText,
  onClear,
  onFileUpload,
  isProcessing,
  wordCount,
  wordLimit,
  isOverLimit,
  selectedLanguage,
  onLanguageChange
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-gray-500" />
            <select
              value={selectedLanguage}
              onChange={(e) => onLanguageChange(e.target.value as Language)}
              disabled={isProcessing}
              className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>
          </div>
        </div>
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
            disabled={isProcessing}
            className="flex items-center px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Upload className="w-4 h-4 mr-1" />
            Upload
          </button>
          <button
            onClick={onClear}
            disabled={isProcessing}
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
          placeholder="Enter your text here to paraphrase..."
          className={`w-full h-64 p-4 bg-gray-50 border rounded-lg resize-none transition-colors ${
            isOverLimit 
              ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
              : 'border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent'
          }`}
          disabled={isProcessing}
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

      <p className="mt-4 text-sm text-gray-500">
        Supports plain text (.txt) files or direct input. Maximum {wordLimit} words per request.
      </p>
    </div>
  );
};

export default TextInput;