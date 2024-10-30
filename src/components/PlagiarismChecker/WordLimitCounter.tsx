import React from 'react';
import CountdownTimer from './CountdownTimer';

interface WordLimitCounterProps {
  wordsCheckedToday: number;
  dailyLimit: number;
  nextResetTime: number;
}

const WordLimitCounter: React.FC<WordLimitCounterProps> = ({
  wordsCheckedToday,
  dailyLimit,
  nextResetTime
}) => {
  const percentage = (wordsCheckedToday / dailyLimit) * 100;
  const isLimitReached = wordsCheckedToday >= dailyLimit;

  return (
    <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 mb-6">
      <div className="flex items-center gap-4">
        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className={`h-full rounded-full transition-all duration-300 ${
              isLimitReached ? 'bg-red-500' : 'bg-indigo-600'
            }`}
            style={{ width: `${Math.min(percentage, 100)}%` }}
          />
        </div>
        <span className="text-gray-600 text-sm whitespace-nowrap">
          {wordsCheckedToday}/{dailyLimit} words today
        </span>
      </div>
      {isLimitReached && <CountdownTimer targetTime={nextResetTime} />}
    </div>
  );
};

export default WordLimitCounter;