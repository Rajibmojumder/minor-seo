import React from 'react';
import { Wand2, Sparkles, Zap } from 'lucide-react';

interface ParaphrasingOptionsProps {
  selectedStyle: 'standard' | 'fluent' | 'creative';
  onStyleChange: (style: 'standard' | 'fluent' | 'creative') => void;
  isProcessing: boolean;
}

const styles = [
  {
    id: 'standard',
    name: 'Standard',
    icon: Wand2,
    description: 'Basic paraphrasing while maintaining meaning'
  },
  {
    id: 'fluent',
    name: 'Fluent',
    icon: Sparkles,
    description: 'More natural and flowing variations'
  },
  {
    id: 'creative',
    name: 'Creative',
    icon: Zap,
    description: 'More creative and diverse alternatives'
  }
] as const;

const ParaphrasingOptions: React.FC<ParaphrasingOptionsProps> = ({
  selectedStyle,
  onStyleChange,
  isProcessing
}) => {
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Paraphrasing Style
      </h3>
      <div className="flex gap-4">
        {styles.map((style) => (
          <button
            key={style.id}
            onClick={() => onStyleChange(style.id)}
            disabled={isProcessing}
            className={`flex-1 p-4 rounded-lg border-2 transition-all duration-200 ${
              selectedStyle === style.id
                ? 'border-indigo-500 bg-indigo-50'
                : 'border-gray-200 hover:border-indigo-200 hover:bg-gray-50'
            } ${isProcessing ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <div className="flex flex-col items-center gap-2">
              <style.icon className={`w-6 h-6 ${
                selectedStyle === style.id ? 'text-indigo-600' : 'text-gray-500'
              }`} />
              <div className="text-center">
                <div className="font-medium text-sm">{style.name}</div>
                <div className="text-xs text-gray-500 mt-1">{style.description}</div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ParaphrasingOptions;