import React from 'react';
import { Code2 } from 'lucide-react';

interface EditorProps {
  value: string;
  onChange: (value: string) => void;
  onPaste: (event: React.ClipboardEvent) => void;
  label: string;
  icon: React.ReactNode;
  placeholder?: string;
}

const Editor: React.FC<EditorProps> = ({
  value,
  onChange,
  onPaste,
  label,
  icon,
  placeholder
}) => {
  const handlePaste = (event: React.ClipboardEvent) => {
    event.preventDefault();
    const text = event.clipboardData.getData('text');
    onChange(text);
  };

  return (
    <div className="flex flex-col h-full bg-white rounded-lg shadow-sm p-4">
      <div className="flex items-center mb-2">
        {icon}
        <h2 className="text-sm font-medium text-gray-700">{label}</h2>
      </div>
      <div className="relative flex-1">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onPaste={handlePaste}
          placeholder={placeholder}
          className="absolute inset-0 w-full h-full p-4 bg-gray-50 border border-gray-200 rounded-lg font-mono text-sm resize-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent overflow-auto whitespace-pre-wrap break-words"
          style={{
            minWidth: '100%',
            maxWidth: '100%',
            wordWrap: 'break-word',
            overflowWrap: 'break-word',
            tabSize: 2,
            WebkitTextSizeAdjust: '100%'
          }}
          spellCheck="false"
          wrap="soft"
        />
      </div>
    </div>
  );
};

export default Editor;