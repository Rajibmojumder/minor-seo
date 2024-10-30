import React from 'react';
import { FileText } from 'lucide-react';

interface PreviewProps {
  html: string;
}

const Preview: React.FC<PreviewProps> = ({ html }) => {
  return (
    <div className="flex flex-col h-full bg-white rounded-lg shadow-sm p-4">
      <div className="flex items-center mb-2">
        <FileText className="w-4 h-4 mr-2 text-gray-500" />
        <h2 className="text-sm font-medium text-gray-700">HTML Preview</h2>
      </div>
      <div className="relative flex-1">
        <div 
          className="absolute inset-0 overflow-auto bg-white border border-gray-200 rounded-lg"
        >
          <div 
            className="markdown-preview p-4 prose prose-sm max-w-none"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </div>
  );
};

export default Preview;