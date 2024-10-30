import React, { useMemo, useState } from 'react';
import { BarChart2, Settings } from 'lucide-react';

interface KeywordDensityProps {
  text: string;
  maxWords: number;
  title: string;
}

interface KeywordCount {
  phrase: string;
  count: number;
  percentage: number;
}

const KeywordDensity: React.FC<KeywordDensityProps> = ({ text, maxWords, title }) => {
  const [limit, setLimit] = useState(10);
  const [excludeGrammar, setExcludeGrammar] = useState(true);

  // Common grammar/stop words
  const stopWords = new Set([
    'the', 'be', 'to', 'of', 'and', 'a', 'in', 'that', 'have', 'i',
    'it', 'for', 'not', 'on', 'with', 'he', 'as', 'you', 'do', 'at',
    'this', 'but', 'his', 'by', 'from', 'they', 'we', 'say', 'her', 'she',
    'or', 'an', 'will', 'my', 'one', 'all', 'would', 'there', 'their', 'what',
    'is', 'are', 'was', 'were', 'has', 'had', 'been', 'may', 'might', 'must',
    'can', 'could', 'should', 'shall', 'will', 'would', 'am', 'if', 'then', 'else',
    'when', 'where', 'why', 'how', 'which', 'who', 'whom', 'whose'
  ]);

  const keywordStats = useMemo(() => {
    if (!text.trim()) return [];

    // Clean and split text into words
    const words = text.toLowerCase()
      .replace(/[^\w\s]/g, '')
      .split(/\s+/)
      .filter(word => word.length > 2);

    const phraseCounts: { [key: string]: number } = {};

    // Function to check if a phrase should be counted
    const isValidPhrase = (phrase: string[]) => {
      if (excludeGrammar) {
        return !phrase.every(word => stopWords.has(word));
      }
      return true;
    };

    // Count phrases based on maxWords length
    for (let i = 0; i < words.length - (maxWords - 1); i++) {
      const phrase = words.slice(i, i + maxWords);
      if (isValidPhrase(phrase)) {
        const phraseStr = phrase.join(' ');
        phraseCounts[phraseStr] = (phraseCounts[phraseStr] || 0) + 1;
      }
    }

    // Calculate total number of possible phrases
    const totalPhrases = words.length - (maxWords - 1);

    // Convert to array and sort by count
    const sortedPhrases: KeywordCount[] = Object.entries(phraseCounts)
      .map(([phrase, count]) => ({
        phrase,
        count,
        percentage: (count / totalPhrases) * 100
      }))
      .sort((a, b) => b.count - a.count)
      .slice(0, limit); // Show top N results based on limit

    return sortedPhrases;
  }, [text, maxWords, limit, excludeGrammar]);

  if (!text.trim()) {
    return null;
  }

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <BarChart2 className="w-5 h-5 text-indigo-600 mr-2" />
          <h2 className="text-lg font-semibold text-gray-900">
            {title}
          </h2>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-600">Top</label>
            <input
              type="number"
              value={limit}
              onChange={(e) => setLimit(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-20 px-2 py-1 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              min="1"
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Exclude Grammar Words</span>
            <button
              onClick={() => setExcludeGrammar(!excludeGrammar)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                excludeGrammar ? 'bg-indigo-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  excludeGrammar ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                {maxWords === 1 ? 'Word' : 'Phrase'}
              </th>
              <th className="text-center py-3 px-4 text-sm font-semibold text-gray-600">Count</th>
              <th className="text-center py-3 px-4 text-sm font-semibold text-gray-600">Density</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Distribution</th>
            </tr>
          </thead>
          <tbody>
            {keywordStats.map(({ phrase, count, percentage }) => (
              <tr key={phrase} className="border-b border-gray-100">
                <td className="py-3 px-4 text-sm font-medium text-gray-900">{phrase}</td>
                <td className="py-3 px-4 text-sm text-gray-600 text-center">{count}</td>
                <td className="py-3 px-4 text-sm text-gray-600 text-center">
                  {percentage.toFixed(1)}%
                </td>
                <td className="py-3 px-4">
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div
                      className="bg-indigo-600 h-2 rounded-full"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </td>
              </tr>
            ))}
            {keywordStats.length === 0 && (
              <tr>
                <td colSpan={4} className="py-6 text-center text-gray-500">
                  No {maxWords === 1 ? 'words' : 'phrases'} found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default KeywordDensity;