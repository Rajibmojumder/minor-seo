import React from 'react';
import { AlertTriangle, CheckCircle } from 'lucide-react';
import type { GrammarResult } from '../../services/grammarApi';

interface StatisticsProps {
  result: GrammarResult;
}

const Statistics: React.FC<StatisticsProps> = ({ result }) => {
  const categories = result.matches.reduce((acc, error) => {
    const category = error.rule.category.name;
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">
        Analysis Results
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <AlertTriangle className="w-5 h-5 text-yellow-500 mr-2" />
              <span className="font-medium text-gray-900">Total Issues</span>
            </div>
            <span className="text-2xl font-bold text-yellow-500">
              {result.matches.length}
            </span>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center">
            <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
            <span className="font-medium text-gray-900">
              Checking Language:
            </span>
            <span className="ml-2 text-green-600 font-medium">
              {result.language.name}
            </span>
          </div>
        </div>
      </div>

      {Object.keys(categories).length > 0 && (
        <div className="mt-6">
          <h3 className="text-sm font-medium text-gray-700 mb-4">
            Issues by Category
          </h3>
          <div className="space-y-2">
            {Object.entries(categories).map(([category, count]) => (
              <div
                key={category}
                className="flex items-center justify-between bg-gray-50 rounded-lg p-3"
              >
                <span className="text-sm text-gray-600">{category}</span>
                <span className="text-sm font-medium text-gray-900">
                  {count} {count === 1 ? 'issue' : 'issues'}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Statistics;