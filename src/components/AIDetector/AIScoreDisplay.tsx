import React, { useEffect, useState } from 'react';
import { ThumbsUp, ThumbsDown } from 'lucide-react';
import type { AIDetectionResult } from '../../services/aiDetectorApi';

interface AIScoreDisplayProps {
  result: AIDetectionResult;
}

const AIScoreDisplay: React.FC<AIScoreDisplayProps> = ({ result }) => {
  const [animatedAIScore, setAnimatedAIScore] = useState(0);
  const [animatedHumanScore, setAnimatedHumanScore] = useState(0);
  const aiScore = result.fakePercentage;
  const humanScore = 100 - aiScore;
  const isHumanContent = humanScore > aiScore;

  useEffect(() => {
    const duration = 1500;
    const steps = 60;
    const interval = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      setAnimatedAIScore(Math.round(aiScore * progress));
      setAnimatedHumanScore(Math.round(humanScore * progress));

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [aiScore, humanScore]);

  const getCircleStyle = (percentage: number) => ({
    background: `conic-gradient(currentColor ${percentage * 3.6}deg, #f3f4f6 0deg)`
  });

  return (
    <div className="glass-morphism rounded-2xl p-8 shadow-xl">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Analysis Results</h2>
      <div className="grid grid-cols-3 gap-8">
        {/* AI Score */}
        <div className="text-center">
          <div className="relative">
            <div className="w-32 h-32 mx-auto rounded-full text-red-500 flex items-center justify-center transition-all duration-300" style={getCircleStyle(animatedAIScore)}>
              <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center">
                <div>
                  <span className="text-xl font-bold">{animatedAIScore}%</span>
                  <div className="mt-1 text-xs">AI Content</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Overall Score */}
        <div className="text-center">
          <div className="relative">
            <div className={`w-40 h-40 mx-auto rounded-full flex items-center justify-center`}>
              <div className={`w-36 h-36 rounded-full ${
                isHumanContent 
                  ? 'bg-green-50 border-4 border-green-500' 
                  : 'bg-red-50 border-4 border-red-500'
              } flex items-center justify-center transition-all duration-300`}>
                <div>
                  {isHumanContent ? (
                    <div className="flex flex-col items-center">
                      <ThumbsUp className="h-12 w-12 text-green-500 mb-2" />
                      <span className="text-sm font-medium text-green-700">Good Content</span>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center">
                      <ThumbsDown className="h-12 w-12 text-red-500 mb-2" />
                      <span className="text-sm font-medium text-red-700">AI Generated</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Human Score */}
        <div className="text-center">
          <div className="relative">
            <div className="w-32 h-32 mx-auto rounded-full text-green-500 flex items-center justify-center transition-all duration-300" style={getCircleStyle(animatedHumanScore)}>
              <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center">
                <div>
                  <span className="text-xl font-bold">{animatedHumanScore}%</span>
                  <div className="mt-1 text-xs">Human Content</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIScoreDisplay;