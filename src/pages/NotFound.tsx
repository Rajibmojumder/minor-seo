import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
            404
          </h1>
          <p className="text-2xl font-semibold text-gray-900 mt-4">
            Page Not Found
          </p>
          <p className="text-gray-600 mt-2">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-center mb-3">
              <Home className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="text-sm font-medium text-gray-900">Go Home</h3>
            <p className="text-xs text-gray-600 mt-1">
              Return to our homepage
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-center mb-3">
              <Search className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="text-sm font-medium text-gray-900">Search Tools</h3>
            <p className="text-xs text-gray-600 mt-1">
              Find what you need
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-center mb-3">
              <ArrowLeft className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="text-sm font-medium text-gray-900">Go Back</h3>
            <p className="text-xs text-gray-600 mt-1">
              Return to previous page
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto px-8 py-3 bg-white text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;