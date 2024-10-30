import React, { useRef } from 'react';
import { Upload, X, FileText } from 'lucide-react';

interface FileUploadProps {
  onFileSelect: (file: File) => void;
  selectedFile: File | null;
  onClear: () => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileSelect, selectedFile, onClear }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onFileSelect(file);
    }
  };

  return (
    <div className="h-24 bg-white rounded-lg shadow-sm p-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Upload Document
      </label>
      {!selectedFile ? (
        <div
          onClick={() => fileInputRef.current?.click()}
          className="relative h-10 flex items-center justify-center border border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-indigo-500 transition-colors duration-200"
        >
          <Upload className="h-4 w-4 text-gray-400 mr-2" />
          <span className="text-sm text-gray-600">Choose file or drag here</span>
        </div>
      ) : (
        <div className="flex items-center justify-between h-10 px-3 bg-indigo-50 rounded-lg">
          <div className="flex items-center">
            <FileText className="h-4 w-4 text-indigo-500 mr-2" />
            <span className="text-sm font-medium text-gray-900 truncate max-w-[180px]">
              {selectedFile.name}
            </span>
          </div>
          <button
            onClick={onClear}
            className="p-1 hover:bg-indigo-100 rounded-full transition-colors duration-200"
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
  );
};

export default FileUpload;