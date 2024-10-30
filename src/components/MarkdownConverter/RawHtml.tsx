import React from 'react';
import { FileCode2 } from 'lucide-react';

interface RawHtmlProps {
  html: string;
}

const RawHtml: React.FC<RawHtmlProps> = ({ html }) => {
  return (
    <div className="flex flex-col h-full bg-white rounded-lg shadow-sm p-4">
      <div className="flex items-center mb-2">
        <FileCode2 className="w-4 h-4 mr-2 text-gray-500" />
        <h2 className="text-sm font-medium text-gray-700">Raw HTML</h2>
      </div>
      <div className="relative flex-1">
        <pre className="absolute inset-0 p-4 bg-gray-50 border border-gray-200 rounded-lg font-mono text-sm overflow-auto">
          <code>{html}</code>
        </pre>
      </div>
    </div>
  );
};

export default RawHtml;