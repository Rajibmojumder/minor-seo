import React from 'react';
import { Trash2 } from 'lucide-react';

interface TextInputProps {
  text: string;
  setText: (text: string) => void;
  onClear: () => void;
}

const TextInput: React.FC<TextInputProps> = ({ text, setText, onClear }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-900">
          Enter or Paste Text
        </h2>
        <button
          onClick={onClear}
          className="flex items-center px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <Trash2 className="w-4 h-4 mr-1" />
          Clear
        </button>
      </div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type or paste your text here..."
        className="w-full h-[400px] p-4 bg-gray-50 border border-gray-200 rounded-lg resize-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
      />
    </div>
  );
};

export default TextInput;