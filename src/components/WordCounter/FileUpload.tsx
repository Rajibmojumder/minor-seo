import React, { useRef } from 'react';
import { Upload, X, FileText } from 'lucide-react';

interface FileUploadProps {
  onFileSelect: (file: File) => void;
  selectedFile: File | null;
  onClear: () => void;
  compact?: boolean;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileSelect, selectedFile, onClear, compact = false }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onFileSelect(file);
    }
  };

  if (compact) {
    return (
      <div className="bg-white rounded-xl shadow-sm p-4">
        <div className="flex items-center justify-between">
          {!selectedFile ? (
            <div
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center justify-center px-4 py-2 border border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-indigo-500 transition-colors duration-200 w-full"
            >
              <Upload className="h-4 w-4 text-gray-400 mr-2" />
              <span className="text-sm text-gray-600">Upload document (.txt, .doc, .docx, .pdf)</span>
            </div>
          ) : (
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center">
                <FileText className="h-4 w-4 text-indigo-500 mr-2" />
                <span className="text-sm font-medium text-gray-900 truncate max-w-[200px]">
                  {selectedFile.name}
                </span>
              </div>
              <button
                onClick={onClear}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors duration-200"
              >
                <X className="h-4 w-4 text-gray-500" />
              </button>
            </div>
          )}
          <input
            ref={fileInputRef}
            type="file"
            className="hidden"
            accept=".txt,.doc,.docx,.pdf"
            onChange={handleFileChange}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        Upload Document
      </h2>
      {!selectedFile ? (
        <div
          onClick={() => fileInputRef.current?.click()}
          className="h-24 flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-indigo-500 transition-colors duration-200"
        >
          <Upload className="h-6 w-6 text-gray-400 mb-2" />
          <span className="text-sm text-gray-600">
            Choose a file or drag it here
          </span>
          <span className="text-xs text-gray-500 mt-1">
            Supports .txt, .doc, .docx, and .pdf
          </span>
        </div>
      ) : (
        <div className="flex items-center justify-between p-4 bg-indigo-50 rounded-lg">
          <div className="flex items-center">
            <FileText className="h-5 w-5 text-indigo-500 mr-2" />
            <div>
              <span className="text-sm font-medium text-gray-900">
                {selectedFile.name}
              </span>
              <span className="text-xs text-gray-500 block">
                {(selectedFile.size / 1024).toFixed(1)} KB
              </span>
            </div>
          </div>
          <button
            onClick={onClear}
            className="p-1 hover:bg-indigo-100 rounded-full transition-colors duration-200"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>
      )}
      <input
        ref={fileInputRef}
        type="file"
        className="hidden"
        accept=".txt,.doc,.docx,.pdf"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default FileUpload;