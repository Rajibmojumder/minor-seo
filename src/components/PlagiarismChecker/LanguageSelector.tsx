import React from 'react';
import { Globe } from 'lucide-react';

export type Language = 
  | 'en' | 'es' | 'fr' | 'de' | 'it' | 'pt' 
  | 'nl' | 'pl' | 'ru' | 'ja' | 'zh' | 'ko';

interface LanguageSelectorProps {
  selectedLanguage: Language;
  onLanguageChange: (language: Language) => void;
  disabled?: boolean;
}

const languages: { code: Language; name: string }[] = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Spanish' },
  { code: 'fr', name: 'French' },
  { code: 'de', name: 'German' },
  { code: 'it', name: 'Italian' },
  { code: 'pt', name: 'Portuguese' },
  { code: 'nl', name: 'Dutch' },
  { code: 'pl', name: 'Polish' },
  { code: 'in', name: 'India' },
  { code: 'ja', name: 'Japanese' },
  { code: 'zh', name: 'Chinese' },
  { code: 'ko', name: 'Korean' }
];

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  selectedLanguage,
  onLanguageChange,
  disabled
}) => {
  return (
    <div className="flex items-center gap-2">
      <Globe className="w-5 h-5 text-gray-500" />
      <select
        value={selectedLanguage}
        onChange={(e) => onLanguageChange(e.target.value as Language)}
        disabled={disabled}
        className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;