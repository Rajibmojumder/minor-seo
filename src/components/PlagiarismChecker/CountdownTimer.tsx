import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface CountdownTimerProps {
  targetTime: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetTime }) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = Date.now();
      const difference = targetTime - now;

      if (difference <= 0) {
        clearInterval(timer);
        window.location.reload(); // Refresh page when timer ends
        return;
      }

      const hours = Math.floor(difference / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetTime]);

  return (
    <div className="animate-fade-in flex items-center justify-center bg-red-50 rounded-lg p-4 mt-2">
      <Clock className="w-5 h-5 text-red-500 mr-2" />
      <span className="text-red-600 font-medium">
        Reset in: {String(timeLeft.hours).padStart(2, '0')}:
        {String(timeLeft.minutes).padStart(2, '0')}:
        {String(timeLeft.seconds).padStart(2, '0')}
      </span>
    </div>
  );
};

export default CountdownTimer;