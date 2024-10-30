import React from 'react';
import { AlertTriangle, Link, ExternalLink } from 'lucide-react';

interface PlagiarizedSentence {
  text: string;
  isPlagiarized: boolean;
  position: {
    start: number;
    end: number;
  };
  matchPercentage: number;
}

interface PlagiarismMatch {
  text: string;
  start: number;
  end: number;
  source?: string;
}

interface PlagiarismResult {
  status: string;
  duplicate_content_found_on_links?: string[];
  text_with_matches?: string;
  matches?: PlagiarismMatch[];
  plagiarismScore: number;
  uniqueScore: number;
  plagiarizedSentences: PlagiarizedSentence[];
}

interface ResultDisplayProps {
  plagiarismResults: PlagiarismResult | null;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ plagiarismResults }) => {
  if (!plagiarismResults) return null;

  const renderTextWithHighlights = () => {
    if (!plagiarismResults.text_with_matches || !plagiarismResults.plagiarizedSentences) {
      return <p className="text-gray-700">No content to analyze</p>;
    }

    return (
      <div className="leading-relaxed space-y-2">
        {plagiarismResults.plagiarizedSentences.map((line, index) => (
          <div key={index} className="group relative inline-block">
            <span
              className={`${
                line.isPlagiarized
                  ? 'bg-red-50 decoration-red-500 decoration-2 underline'
                  : 'bg-green-50 decoration-green-500 decoration-2 underline'
              } px-1 py-0.5 rounded`}
            >
              {line.text}
            </span>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs rounded py-1 px-2 whitespace-nowrap z-10">
              {line.isPlagiarized 
                ? `${line.matchPercentage}% plagiarized`
                : '100% unique'}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="glass-morphism rounded-2xl p-8 shadow-xl">
      <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-800">
        <AlertTriangle className="mr-3 text-yellow-500" size={24} />
        Content Analysis
      </h2>

      {/* Text with highlights */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4 text-gray-700">Line-by-Line Analysis:</h3>
        <div className="p-6 rounded-xl bg-white border border-gray-100">
          {renderTextWithHighlights()}
        </div>
        <div className="mt-4 flex gap-6">
          <div className="flex items-center">
            <span className="inline-block w-4 h-4 bg-green-50 border border-green-500 rounded mr-2"></span>
            <span className="text-sm text-gray-600">
              Unique Content ({plagiarismResults.uniqueScore}%)
            </span>
          </div>
          <div className="flex items-center">
            <span className="inline-block w-4 h-4 bg-red-50 border border-red-500 rounded mr-2"></span>
            <span className="text-sm text-gray-600">
              Duplicate Content ({plagiarismResults.plagiarismScore}%)
            </span>
          </div>
        </div>
      </div>

      {/* Sources section - Limited to 10 URLs */}
      {plagiarismResults.duplicate_content_found_on_links && plagiarismResults.duplicate_content_found_on_links.length > 0 && (
        <div className="mt-8 pt-6 border-t border-gray-100">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">Found Sources:</h3>
          <ul className="space-y-2">
            {plagiarismResults.duplicate_content_found_on_links.slice(0, 10).map((link, index) => (
              <li key={index} className="flex items-start">
                <Link className="mt-1 mr-2 flex-shrink-0 text-blue-600" size={16} />
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 hover:underline flex items-center gap-1"
                >
                  <span className="break-all">{link}</span>
                  <ExternalLink className="flex-shrink-0" size={14} />
                </a>
              </li>
            ))}
            {plagiarismResults.duplicate_content_found_on_links.length > 10 && (
              <li className="text-sm text-gray-500 mt-2">
                And {plagiarismResults.duplicate_content_found_on_links.length - 10} more sources...
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ResultDisplay;