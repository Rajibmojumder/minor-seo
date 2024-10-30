import React from 'react';
import { Copy, Download, Upload, RefreshCw, Palette, FileCode2 } from 'lucide-react';

interface ToolbarProps {
  onFileUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onCopyHtml: () => void;
  onDownloadHtml: () => void;
  onTogglePreviewMode: () => void;
  onToggleCustomCss: () => void;
  onToggleRawHtml: () => void;
  previewMode: 'split' | 'preview';
  showCustomCss: boolean;
  showRawHtml: boolean;
  copied: boolean;
}

const Toolbar: React.FC<ToolbarProps> = ({
  onFileUpload,
  onCopyHtml,
  onDownloadHtml,
  onTogglePreviewMode,
  onToggleCustomCss,
  onToggleRawHtml,
  previewMode,
  showCustomCss,
  showRawHtml,
  copied
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
      <div className="flex items-center gap-3 flex-wrap">
        <div className="relative">
          <input
            type="file"
            accept=".md,.txt"
            onChange={onFileUpload}
            className="hidden"
            id="file-upload"
          />
          <label
            htmlFor="file-upload"
            className="inline-flex items-center px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer whitespace-nowrap"
          >
            <Upload className="w-4 h-4 mr-2" />
            Upload MD
          </label>
        </div>

        <button
          onClick={onTogglePreviewMode}
          className="inline-flex items-center px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 whitespace-nowrap"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          {previewMode === 'split' ? 'Preview Mode' : 'Split Mode'}
        </button>

        <button
          onClick={onToggleCustomCss}
          className={`inline-flex items-center px-3 py-2 border rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
            showCustomCss 
              ? 'bg-indigo-50 border-indigo-200 text-indigo-700' 
              : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
          }`}
        >
          <Palette className="w-4 h-4 mr-2" />
          Custom CSS
        </button>

        <button
          onClick={onToggleRawHtml}
          className={`inline-flex items-center px-3 py-2 border rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
            showRawHtml 
              ? 'bg-indigo-50 border-indigo-200 text-indigo-700' 
              : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
          }`}
        >
          <FileCode2 className="w-4 h-4 mr-2" />
          Raw HTML
        </button>

        <button
          onClick={onCopyHtml}
          className="inline-flex items-center px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 whitespace-nowrap"
        >
          <Copy className="w-4 h-4 mr-2" />
          {copied ? 'Copied!' : 'Copy HTML'}
        </button>

        <button
          onClick={onDownloadHtml}
          className="inline-flex items-center px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 whitespace-nowrap"
        >
          <Download className="w-4 h-4 mr-2" />
          Download HTML
        </button>
      </div>
    </div>
  );
};

export default Toolbar;