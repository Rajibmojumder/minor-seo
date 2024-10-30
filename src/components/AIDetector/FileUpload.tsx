import React, { useRef } from 'react';
import { Upload, X, FileText } from 'lucide-react';

interface FileUploadProps {
  onFileSelect: (file: File) => void;
  selectedFile: File | null;
  onClear: () => void;
  disabled?: boolean;
}

const FileUpload: React.FC<FileUploadProps> = ({ 
  onFileSelect, 
  selectedFile, 
  onClear,
  disabled 
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onFileSelect(file);
    }
  };

  return (
    <div className="mb-4">
      {!selectedFile ? (
        <div
          onClick={() => !disabled && fileInputRef.current?.click()}
          className={`relative h-32 flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-indigo-500 transition-colors duration-200 ${
            disabled ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          <Upload className="h-8 w-8 text-gray-400 mb-2" />
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
            disabled={disabled}
            className={`p-1 hover:bg-indigo-100 rounded-full transition-colors duration-200 ${
              disabled ? 'opacity-50 cursor-not-allowed' : ''
            }`}
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
        disabled={disabled}
      />
    </div>
  );
};

export default FileUpload;