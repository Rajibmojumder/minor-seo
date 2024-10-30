import React from 'react';
import { Search, Shield, Clock, CheckCircle, Brain, Globe2, FileText, AlertTriangle, Sparkles, Zap } from 'lucide-react';

const PlagiarismContent = () => {
  return (
    <div className="mt-24 prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Free Online Plagiarism Checker
      </h2>

      {/* Overview Section */}
      <div className="bg-white rounded-xl p-8 shadow-sm mb-12">
        <p className="text-gray-600 mb-6">
          Our advanced plagiarism checker helps you ensure content originality by comparing your text against billions of online sources. Whether you're a student submitting academic work, a content creator maintaining authenticity, or a professional ensuring unique content, our tool provides comprehensive plagiarism detection with detailed source attribution.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">What You Get:</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Instant plagiarism detection</li>
              <li>Detailed similarity analysis</li>
              <li>Source attribution</li>
              <li>Line-by-line comparison</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Perfect For:</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Academic assignments</li>
              <li>Content marketing</li>
              <li>Research papers</li>
              <li>Website content</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Core Features Section */}
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
       Plagiarism Checker Core Features
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
          <div className="flex items-center mb-3">
            <Brain className="h-6 w-6 text-indigo-600 flex-shrink-0" />
            <h3 className="text-lg font-semibold ml-2 leading-none m-0">AI-Powered</h3>
          </div>
          <p className="text-gray-600 mt-2 leading-relaxed">
            Advanced AI algorithms scan billions of web pages and documents for matching content
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
          <div className="flex items-center mb-3">
            <Globe2 className="h-6 w-6 text-indigo-600 flex-shrink-0" />
            <h3 className="text-lg font-semibold ml-2 leading-none m-0">Multi-Language</h3>
          </div>
          <p className="text-gray-600 mt-2 leading-relaxed">
            Support for 12+ languages including English, Spanish, French, German, and more
          </p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
          <div className="flex items-center mb-3">
            <Zap className="h-6 w-6 text-indigo-600 flex-shrink-0" />
            <h3 className="text-lg font-semibold ml-2 leading-none m-0">Real-Time Analysis</h3>
          </div>
          <p className="text-gray-600 mt-2 leading-relaxed">
            Get instant results with detailed similarity scores and source attribution
          </p>
        </div>
      </div>

      {/* Advanced Features Section */}
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Advanced Features
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center mb-3">
            <Search className="h-6 w-6 text-indigo-600 flex-shrink-0" />
            <h3 className="text-lg font-semibold ml-2 leading-none m-0">Deep Web Search</h3>
          </div>
          <ul className="space-y-2 text-gray-600">
            <li>Billions of web pages</li>
            <li>Academic databases</li>
            <li>News articles</li>
            <li>Research papers</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center mb-3">
            <Shield className="h-6 w-6 text-indigo-600 flex-shrink-0" />
            <h3 className="text-lg font-semibold ml-2 leading-none m-0">Accurate Results</h3>
          </div>
          <ul className="space-y-2 text-gray-600">
            <li>Sentence-level analysis</li>
            <li>Source verification</li>
            <li>Context matching</li>
            <li>Similarity scoring</li>
          </ul>
        </div>
      </div>

      {/* Rest of the content remains the same */}
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        How It Works
      </h2>

      <div className="bg-white rounded-xl p-8 shadow-sm mb-12">
        <ol className="space-y-6">
          <li className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-semibold">1</div>
            <div>
              <h4 className="font-semibold leading-none m-0">Input Content</h4>
              <p className="text-gray-600 mt-2 leading-relaxed">Enter text, paste a URL, or upload a document to check for plagiarism.</p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-semibold">2</div>
            <div>
              <h4 className="font-semibold leading-none m-0">Deep Analysis</h4>
              <p className="text-gray-600 mt-2 leading-relaxed">Our AI scans billions of online sources for matching content.</p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-semibold">3</div>
            <div>
              <h4 className="font-semibold leading-none m-0">Detailed Results</h4>
              <p className="text-gray-600 mt-2 leading-relaxed">Get comprehensive plagiarism report with highlighted matches and source URLs.</p>
            </div>
          </li>
        </ol>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Frequently Asked Questions
      </h2>

      <div className="space-y-6 mb-12">
        <details className="group bg-white rounded-xl shadow-sm">
          <summary className="flex items-center justify-between p-6 cursor-pointer">
            <div className="text-xl font-semibold">How accurate is the plagiarism detection?</div>
            <span className="ml-4 flex-shrink-0">+</span>
          </summary>
          <div className="px-6 pb-6">
            <p className="text-gray-600 leading-relaxed">
              Our tool provides high accuracy by comparing your content against billions of web pages and academic sources. However, we recommend reviewing the results manually for context.
            </p>
          </div>
        </details>

        <details className="group bg-white rounded-xl shadow-sm">
          <summary className="flex items-center justify-between p-6 cursor-pointer">
            <div className="text-xl font-semibold">Which languages are supported?</div>
            <span className="ml-4 flex-shrink-0">+</span>
          </summary>
          <div className="px-6 pb-6">
            <p className="text-gray-600 leading-relaxed">
              We support 12+ languages including English, Spanish, French, German, Italian, Portuguese, Dutch, Polish, Russian, Japanese, Chinese, and Korean. More languages are being added regularly.
            </p>
          </div>
        </details>

        <details className="group bg-white rounded-xl shadow-sm">
          <summary className="flex items-center justify-between p-6 cursor-pointer">
            <div className="text-xl font-semibold">What file formats are supported?</div>
            <span className="ml-4 flex-shrink-0">+</span>
          </summary>
          <div className="px-6 pb-6">
            <p className="text-gray-600 leading-relaxed">
              Our tool supports the following file formats:
            </p>
            <ul className="mt-2 space-y-1">
              <li>Plain text (.txt)</li>
              <li>Microsoft Word (.doc, .docx)</li>
              <li>PDF documents (.pdf)</li>
            </ul>
          </div>
        </details>

        <details className="group bg-white rounded-xl shadow-sm">
          <summary className="flex items-center justify-between p-6 cursor-pointer">
            <div className="text-xl font-semibold">How does the word limit work?</div>
            <span className="ml-4 flex-shrink-0">+</span>
          </summary>
          <div className="px-6 pb-6">
            <p className="text-gray-600 leading-relaxed">
              You can check up to 2,000 words per submission and 5,000 words per day. The daily limit resets every 24 hours from your first check.
            </p>
          </div>
        </details>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Best Practices
      </h2>

      <div className="bg-white rounded-xl p-8 shadow-sm mb-12">
        <div className="space-y-6">
          <div>
            <div className="flex items-center mb-3">
              <CheckCircle className="h-6 w-6 text-indigo-600 flex-shrink-0" />
              <h3 className="text-lg font-semibold ml-2 leading-none m-0">Review Results Carefully</h3>
            </div>
            <p className="text-gray-600 mt-2 leading-relaxed">
              Always review plagiarism matches in context to ensure accuracy.
            </p>
          </div>
          
          <div>
            <div className="flex items-center mb-3">
              <AlertTriangle className="h-6 w-6 text-indigo-600 flex-shrink-0" />
              <h3 className="text-lg font-semibold ml-2 leading-none m-0">Check Multiple Sources</h3>
            </div>
            <p className="text-gray-600 mt-2 leading-relaxed">
              Use multiple checking methods (text, URL, file) for comprehensive results.
            </p>
          </div>
          
          <div>
            <div className="flex items-center mb-3">
              <Clock className="h-6 w-6 text-indigo-600 flex-shrink-0" />
              <h3 className="text-lg font-semibold ml-2 leading-none m-0">Regular Checks</h3>
            </div>
            <p className="text-gray-600 mt-2 leading-relaxed">
              Check content regularly during the writing process, not just at the end.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlagiarismContent;