import React from 'react';
import { FileText, Globe2, AlignLeft } from 'lucide-react';

interface CheckOptionsProps {
  activeTab: 'text' | 'url' | 'file';
  onTabChange: (tab: 'text' | 'url' | 'file') => void;
}

const CheckOptions: React.FC<CheckOptionsProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'text', label: 'Text Input', icon: AlignLeft },
    { id: 'url', label: 'URL Check', icon: Globe2 },
    { id: 'file', label: 'File Upload', icon: FileText }
  ];

  return (
    <div className="flex space-x-4 mb-6">
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id as 'text' | 'url' | 'file')}
          className={`flex items-center px-4 py-2 rounded-lg transition-all duration-200 ${
            activeTab === tab.id
              ? 'bg-indigo-100 text-indigo-700'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          <tab.icon className="w-4 h-4 mr-2" />
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default CheckOptions;