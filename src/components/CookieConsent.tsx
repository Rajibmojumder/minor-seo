import React, { useState, useEffect } from 'react';
import { Cookie, X, ShieldCheck, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a cookie choice
    const cookieChoice = localStorage.getItem('cookieConsent');
    if (cookieChoice === null) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-xl z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
          {/* Icon and Title */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <Cookie className="h-5 w-5 text-indigo-600" />
            <h3 className="text-base font-semibold text-gray-900">Cookie Settings</h3>
          </div>

          {/* Description */}
          <div className="flex-grow">
            <p className="text-sm text-gray-600">
              We use cookies to enhance your browsing experience and analyze our traffic.{' '}
              <Link 
                to="/privacy" 
                className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium"
              >
                Privacy Policy
                <ExternalLink className="h-3 w-3 ml-1" />
              </Link>
            </p>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3 lg:flex-shrink-0 w-full lg:w-auto">
            <button
              onClick={handleReject}
              className="flex-1 lg:flex-initial px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              Reject All
            </button>
            <button
              onClick={handleAccept}
              className="flex-1 lg:flex-initial px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <ShieldCheck className="h-4 w-4" />
              Accept All
            </button>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;