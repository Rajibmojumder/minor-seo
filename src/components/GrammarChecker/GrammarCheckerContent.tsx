import React from 'react';
import { Brain, Zap, Shield, Clock, CheckCircle, AlertTriangle, FileText, Sparkles, Search } from 'lucide-react';

const GrammarCheckerContent: React.FC = () => {
  return (
    <div className="mt-24 prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Free Online Grammar Checker
      </h2>

      <div className="bg-white rounded-xl p-8 shadow-sm mb-12">
        <p className="text-gray-600">
          Our advanced grammar checker helps you write error-free content by detecting grammar, spelling, and punctuation mistakes in real-time. Perfect for students, writers, and professionals who want to ensure their writing is clear, correct, and impactful.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        How It Works
      </h2>

      <div className="bg-white rounded-xl p-8 shadow-sm mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-semibold">1</div>
              <h3 className="text-lg font-semibold m-0">Enter Your Text</h3>
            </div>
            <p className="text-gray-600 mt-3">
              Type or paste your text into the editor. You can also upload text files.
            </p>
          </div>

          <div>
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-semibold">2</div>
              <h3 className="text-lg font-semibold m-0">AI Analysis</h3>
            </div>
            <p className="text-gray-600 mt-3">
              Our AI analyzes your text for grammar, spelling, and style improvements.
            </p>
          </div>

          <div>
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-semibold">3</div>
              <h3 className="text-lg font-semibold m-0">Get Results</h3>
            </div>
            <p className="text-gray-600 mt-3">
              Review suggestions and apply corrections with a single click.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Key Features
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center space-x-3">
            <Brain className="h-6 w-6 text-indigo-600 flex-shrink-0" />
            <h3 className="text-lg font-semibold m-0">Smart Detection</h3>
          </div>
          <p className="text-gray-600 mt-3">
            Advanced AI algorithms detect complex grammar and spelling errors
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center space-x-3">
            <Zap className="h-6 w-6 text-indigo-600 flex-shrink-0" />
            <h3 className="text-lg font-semibold m-0">Real-Time</h3>
          </div>
          <p className="text-gray-600 mt-3">
            Instant error detection and correction suggestions
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center space-x-3">
            <Shield className="h-6 w-6 text-indigo-600 flex-shrink-0" />
            <h3 className="text-lg font-semibold m-0">Context-Aware</h3>
          </div>
          <p className="text-gray-600 mt-3">
            Understands context to provide accurate suggestions
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        What We Check
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center space-x-3">
            <AlertTriangle className="h-6 w-6 text-indigo-600 flex-shrink-0" />
            <h3 className="text-lg font-semibold m-0">Grammar & Spelling</h3>
          </div>
          <ul className="space-y-2 text-gray-600 mt-4">
            <li>Subject-verb agreement</li>
            <li>Article usage</li>
            <li>Verb tenses</li>
            <li>Common misspellings</li>
            <li>Punctuation errors</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center space-x-3">
            <Sparkles className="h-6 w-6 text-indigo-600 flex-shrink-0" />
            <h3 className="text-lg font-semibold m-0">Style & Clarity</h3>
          </div>
          <ul className="space-y-2 text-gray-600 mt-4">
            <li>Sentence structure</li>
            <li>Word choice</li>
            <li>Readability</li>
            <li>Redundancy</li>
            <li>Tone consistency</li>
          </ul>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Best Practices
      </h2>

      <div className="bg-white rounded-xl p-8 shadow-sm mb-12">
        <div className="space-y-6">
          <div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-6 w-6 text-indigo-600 flex-shrink-0" />
              <h3 className="text-lg font-semibold m-0">Review in Context</h3>
            </div>
            <p className="text-gray-600 mt-3">
              Always review grammar suggestions in the context of your writing to ensure they maintain your intended meaning.
            </p>
          </div>
          
          <div>
            <div className="flex items-center space-x-3">
              <Clock className="h-6 w-6 text-indigo-600 flex-shrink-0" />
              <h3 className="text-lg font-semibold m-0">Regular Checks</h3>
            </div>
            <p className="text-gray-600 mt-3">
              Check your text regularly while writing, rather than waiting until the end.
            </p>
          </div>
          
          <div>
            <div className="flex items-center space-x-3">
              <FileText className="h-6 w-6 text-indigo-600 flex-shrink-0" />
              <h3 className="text-lg font-semibold m-0">Break Long Text</h3>
            </div>
            <p className="text-gray-600 mt-3">
              For longer documents, break them into smaller sections for more thorough analysis.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Frequently Asked Questions
      </h2>

      <div className="space-y-6 mb-12">
        <details className="group bg-white rounded-xl shadow-sm">
          <summary className="flex items-center justify-between p-6 cursor-pointer">
            <div className="text-xl font-semibold">How accurate is the grammar checker?</div>
            <span className="ml-4 flex-shrink-0">+</span>
          </summary>
          <div className="px-6 pb-6">
            <p className="text-gray-600">
              Our grammar checker achieves over 95% accuracy in detecting common grammar and spelling errors. However, we recommend reviewing suggestions in context as language can be complex and context-dependent.
            </p>
          </div>
        </details>

        <details className="group bg-white rounded-xl shadow-sm">
          <summary className="flex items-center justify-between p-6 cursor-pointer">
            <div className="text-xl font-semibold">What types of errors are detected?</div>
            <span className="ml-4 flex-shrink-0">+</span>
          </summary>
          <div className="px-6 pb-6">
            <p className="text-gray-600">
              We detect a wide range of errors including grammar, spelling, punctuation, style issues, and more. Our AI is particularly good at identifying:
            </p>
            <ul className="mt-2 space-y-1">
              <li>Grammar mistakes (subject-verb agreement, verb tenses)</li>
              <li>Spelling errors and typos</li>
              <li>Punctuation issues</li>
              <li>Style and clarity problems</li>
              <li>Word choice and redundancy</li>
            </ul>
          </div>
        </details>

        <details className="group bg-white rounded-xl shadow-sm">
          <summary className="flex items-center justify-between p-6 cursor-pointer">
            <div className="text-xl font-semibold">Is there a word limit?</div>
            <span className="ml-4 flex-shrink-0">+</span>
          </summary>
          <div className="px-6 pb-6">
            <p className="text-gray-600">
              Yes, we have the following limits to ensure optimal performance:
            </p>
            <ul className="mt-2 space-y-1">
              <li>Per check: Up to 3,000 words</li>
              <li>Daily limit: 5,000 words</li>
              <li>For longer texts, we recommend breaking them into smaller sections</li>
            </ul>
          </div>
        </details>

        <details className="group bg-white rounded-xl shadow-sm">
          <summary className="flex items-center justify-between p-6 cursor-pointer">
            <div className="text-xl font-semibold">How do I use the grammar checker?</div>
            <span className="ml-4 flex-shrink-0">+</span>
          </summary>
          <div className="px-6 pb-6">
            <p className="text-gray-600">
              Simply paste your text into the editor or upload a file. Our AI will automatically analyze your text and highlight any issues. Click on the highlighted text to see suggestions and apply corrections with a single click.
            </p>
          </div>
        </details>
      </div>
    </div>
  );
};

export default GrammarCheckerContent;