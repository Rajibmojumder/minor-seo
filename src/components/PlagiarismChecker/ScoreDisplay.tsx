import React from 'react';
import { AlertTriangle, CheckCircle } from 'lucide-react';

interface ScoreDisplayProps {
  plagiarismScore: number | null;
  uniqueScore: number | null;
}

const ScoreDisplay: React.FC<ScoreDisplayProps> = ({ plagiarismScore, uniqueScore }) => {
  // Ensure we have valid numbers
  const pScore = plagiarismScore ?? 0;
  const uScore = uniqueScore ?? 0;

  // Determine which score is higher
  const isUniqueDominant = uScore > pScore;

  return (
    <div className="glass-morphism rounded-2xl p-8 shadow-xl">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Analysis Results</h2>
      <div className="grid grid-cols-2 gap-8">
        {/* Plagiarism Score */}
        <div className="text-center">
          <div className="relative">
            <div className={`w-32 h-32 mx-auto rounded-full bg-gradient-to-br ${
              !isUniqueDominant 
                ? 'from-red-500 to-red-600 shadow-lg'
                : 'from-gray-100 to-gray-200'
            } flex items-center justify-center transition-all duration-300`}>
              <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center">
                <div>
                  <span className={`text-2xl font-bold ${
                    !isUniqueDominant ? 'text-red-600' : 'text-gray-400'
                  }`}>
                    {pScore.toFixed(1)}%
                  </span>
                  <div className={`mt-1 text-sm font-medium flex items-center justify-center ${
                    !isUniqueDominant ? 'text-red-600' : 'text-gray-400'
                  }`}>
                    <AlertTriangle className="mr-1" size={14} />
                    Plagiarized
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Unique Score */}
        <div className="text-center">
          <div className="relative">
            <div className={`w-32 h-32 mx-auto rounded-full bg-gradient-to-br ${
              isUniqueDominant 
                ? 'from-green-500 to-green-600 shadow-lg'
                : 'from-gray-100 to-gray-200'
            } flex items-center justify-center transition-all duration-300`}>
              <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center">
                <div>
                  <span className={`text-2xl font-bold ${
                    isUniqueDominant ? 'text-green-600' : 'text-gray-400'
                  }`}>
                    {uScore.toFixed(1)}%
                  </span>
                  <div className={`mt-1 text-sm font-medium flex items-center justify-center ${
                    isUniqueDominant ? 'text-green-600' : 'text-gray-400'
                  }`}>
                    <CheckCircle className="mr-1" size={14} />
                    Unique
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreDisplay;