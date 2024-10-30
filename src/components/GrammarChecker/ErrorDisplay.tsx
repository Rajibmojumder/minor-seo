import React, { useState, useEffect, useCallback, useRef } from 'react';
import { CheckCircle, Loader, Wand2, Copy, Check } from 'lucide-react';
import type { GrammarResult, GrammarError } from '../../services/grammarApi';

interface ErrorDisplayProps {
  result: GrammarResult;
  text: string;
  fixedText: string | null;
  onTextUpdate: (newText: string) => void;
  isLoading: boolean;
  onFixAll: () => void;
  isFixing: boolean;
  activeTab: 'original' | 'fixed';
  onTabChange: (tab: 'original' | 'fixed') => void;
  showTabs: boolean;
}

interface ExtendedGrammarError extends GrammarError {
  originalOffset: number;
  originalLength: number;
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ 
  result, 
  text, 
  fixedText,
  onTextUpdate,
  isLoading,
  onFixAll,
  isFixing,
  activeTab,
  onTabChange,
  showTabs
}) => {
  const [localText, setLocalText] = useState(text);
  const [localMatches, setLocalMatches] = useState<ExtendedGrammarError[]>([]);
  const [activeError, setActiveError] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);
  const offsetMapRef = useRef<Map<number, number>>(new Map());

  useEffect(() => {
    setLocalText(fixedText || text);
    const extendedMatches = result.matches.map(match => ({
      ...match,
      originalOffset: match.offset,
      originalLength: match.length
    }));
    setLocalMatches(extendedMatches);
    offsetMapRef.current = new Map();
    setActiveError(null);
  }, [text, fixedText, result]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(fixedText || localText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  const updateOffsets = useCallback((position: number, change: number) => {
    const newOffsetMap = new Map(offsetMapRef.current);
    newOffsetMap.forEach((offset, pos) => {
      if (pos > position) {
        newOffsetMap.set(pos, offset + change);
      }
    });
    offsetMapRef.current = newOffsetMap;
  }, []);

  const getAdjustedOffset = useCallback((originalOffset: number): number => {
    let adjustment = 0;
    offsetMapRef.current.forEach((change, position) => {
      if (position < originalOffset) {
        adjustment += change;
      }
    });
    return originalOffset + adjustment;
  }, []);

  const renderText = useCallback(() => {
    const textToRender = fixedText || localText;
    if (!textToRender) return null;

    const elements: JSX.Element[] = [];
    let lastIndex = 0;

    const sortedMatches = [...localMatches]
      .map(match => ({
        ...match,
        currentOffset: getAdjustedOffset(match.originalOffset)
      }))
      .sort((a, b) => a.currentOffset - b.currentOffset);

    sortedMatches.forEach((match, index) => {
      const currentOffset = match.currentOffset;

      if (currentOffset > lastIndex) {
        elements.push(
          <span key={`text-${lastIndex}-${currentOffset}`}>
            {textToRender.slice(lastIndex, currentOffset)}
          </span>
        );
      }

      const isGrammarError = match.rule.category === 'Grammar';
      const errorText = textToRender.slice(currentOffset, currentOffset + match.length);

      elements.push(
        <span
          key={`error-${currentOffset}-${match.length}-${index}`}
          className="relative inline-block"
        >
          <span 
            className={`cursor-pointer inline-block ${
              isGrammarError 
                ? 'border-b-2 border-red-400 hover:bg-red-50' 
                : 'border-b-2 border-blue-400 hover:bg-blue-50'
            }`}
            onClick={(e) => {
              e.stopPropagation();
              setActiveError(activeError === index ? null : index);
            }}
          >
            {errorText}
          </span>

          {activeError === index && match.replacements && match.replacements.length > 0 && (
            <div 
              className="absolute left-0 top-full mt-2 w-64 p-3 bg-white rounded-lg shadow-xl border border-gray-200 z-[100]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`text-sm font-medium mb-2 ${
                isGrammarError ? 'text-red-600' : 'text-blue-600'
              }`}>
                Suggested Corrections:
              </div>
              <div className="space-y-1">
                {match.replacements.map((replacement, i) => (
                  <div
                    key={`suggestion-${i}`}
                    className={`text-sm p-2 rounded ${
                      isGrammarError ? 'text-red-700' : 'text-blue-700'
                    }`}
                  >
                    {replacement}
                  </div>
                ))}
              </div>
            </div>
          )}
        </span>
      );

      lastIndex = currentOffset + match.length;
    });

    if (lastIndex < textToRender.length) {
      elements.push(
        <span key={`text-end-${lastIndex}`}>
          {textToRender.slice(lastIndex)}
        </span>
      );
    }

    return elements;
  }, [localText, localMatches, activeError, getAdjustedOffset, fixedText]);

  const grammarErrors = localMatches.filter(m => m.rule.category === 'Grammar');
  const spellingErrors = localMatches.filter(m => m.rule.category === 'Spelling');
  const hasErrors = grammarErrors.length > 0 || spellingErrors.length > 0;

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      {showTabs && (
        <div className="flex space-x-4 mb-6 border-b border-gray-200">
          <button
            onClick={() => onTabChange('original')}
            className={`pb-3 px-4 text-sm font-medium transition-colors relative ${
              activeTab === 'original'
                ? 'text-indigo-600 border-b-2 border-indigo-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Original Analysis
          </button>
          <button
            onClick={() => onTabChange('fixed')}
            className={`pb-3 px-4 text-sm font-medium transition-colors relative ${
              activeTab === 'fixed'
                ? 'text-indigo-600 border-b-2 border-indigo-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Fixed Result
          </button>
        </div>
      )}

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-red-50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-red-600">{grammarErrors.length}</div>
          <div className="text-sm text-red-700">Grammar Mistakes</div>
        </div>
        <div className="bg-blue-50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-blue-600">{spellingErrors.length}</div>
          <div className="text-sm text-blue-700">Spelling Mistakes</div>
        </div>
      </div>

      <div className="relative prose prose-sm max-w-none">
        {isLoading && (
          <div className="absolute inset-0 bg-white/80 flex items-center justify-center z-10">
            <Loader className="w-6 h-6 text-indigo-600 animate-spin" />
          </div>
        )}
        
        {localMatches.length === 0 ? (
          <div className="flex items-center justify-center text-green-600 bg-green-50 p-4 rounded-lg">
            <CheckCircle className="mr-2" />
            No grammar or spelling errors found!
          </div>
        ) : (
          <div 
            className="leading-relaxed whitespace-pre-wrap break-words"
            onClick={() => setActiveError(null)}
          >
            {renderText()}
          </div>
        )}
      </div>

      <div className="flex justify-between mt-6">
        <button
          onClick={handleCopy}
          className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 mr-2" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 mr-2" />
              Copy Text
            </>
          )}
        </button>

        {hasErrors && activeTab === 'original' && (
          <button
            onClick={onFixAll}
            disabled={isLoading || isFixing}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-2 px-4 rounded-lg flex items-center transition-all duration-200 disabled:opacity-50"
          >
            {isFixing ? (
              <>
                <Loader className="mr-2 animate-spin" />
                Fixing...
              </>
            ) : (
              <>
                <Wand2 className="mr-2" />
                Fix All Errors
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default ErrorDisplay;