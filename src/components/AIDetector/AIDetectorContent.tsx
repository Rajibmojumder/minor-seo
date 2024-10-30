import React from 'react';
import { Brain, Zap, Shield, Globe2, CheckCircle, AlertTriangle, Clock, Search } from 'lucide-react';

const AIDetectorContent = () => {
  return (
    <div className="mt-24 prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Free AI Content Detection Online Tool
      </h2>

      <div className="bg-white rounded-xl p-8 shadow-sm mb-12">
        <p className="text-gray-600 mb-6">
          Our advanced AI content detector helps you identify AI-generated content with high accuracy. Using state-of-the-art machine learning algorithms, we analyze text patterns, writing style, and linguistic features to determine if content was created by popular AI models like GPT-3.5, GPT-4, Claude, or other language models.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">What You Get:</h3>
            <ul className="space-y-2 text-gray-600">
              <li>AI probability scores</li>
              <li>Sentence-by-sentence analysis</li>
              <li>Highlighted AI sections</li>
              <li>Detailed breakdown</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Perfect For:</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Content moderators</li>
              <li>Educational institutions</li>
              <li>Publishers</li>
              <li>Hiring managers</li>
            </ul>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        How to Use
      </h2>

      <div className="bg-white rounded-xl p-8 shadow-sm mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-semibold">1</div>
              <h3 className="text-lg font-semibold m-0">Input Content</h3>
            </div>
            <p className="text-gray-600 mt-3">
              Enter text directly, paste content, upload a file, or provide a URL to analyze
            </p>
          </div>

          <div>
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-semibold">2</div>
              <h3 className="text-lg font-semibold m-0">Check Content</h3>
            </div>
            <p className="text-gray-600 mt-3">
              Click "Check Content" to analyze the text for AI-generated patterns
            </p>
          </div>

          <div>
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-semibold">3</div>
              <h3 className="text-lg font-semibold m-0">Review Results</h3>
            </div>
            <p className="text-gray-600 mt-3">
              Get detailed analysis with AI probability scores and highlighted sections
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        AI Content Detector Key Features
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
          <div className="flex items-center mb-3">
            <Brain className="h-6 w-6 text-indigo-600 flex-shrink-0" />
            <h3 className="text-lg font-semibold ml-2 leading-none m-0">Advanced AI</h3>
          </div>
          <p className="text-gray-600 mt-2">
            Detects content from GPT-3.5, GPT-4, Claude, Gemini, and other AI models
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
          <div className="flex items-center mb-3">
            <Zap className="h-6 w-6 text-indigo-600 flex-shrink-0" />
            <h3 className="text-lg font-semibold ml-2 leading-none m-0">Fast Analysis</h3>
          </div>
          <p className="text-gray-600 mt-2">
            Get instant results with detailed sentence-by-sentence breakdown
          </p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
          <div className="flex items-center mb-3">
            <Shield className="h-6 w-6 text-indigo-600 flex-shrink-0" />
            <h3 className="text-lg font-semibold ml-2 leading-none m-0">High Accuracy</h3>
          </div>
          <p className="text-gray-600 mt-2">
            95%+ detection accuracy with low false positive rate
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Supported AI Models
      </h2>

      <div className="bg-white rounded-xl p-8 shadow-sm mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-3 leading-none">OpenAI Models</h3>
            <ul className="space-y-2 text-gray-600">
              <li>GPT-3.5</li>
              <li>GPT-4</li>
              <li>ChatGPT</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 leading-none">Other Models</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Claude</li>
              <li>Google Gemini</li>
              <li>LLaMA</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 leading-none">Open Source</h3>
            <ul className="space-y-2 text-gray-600">
              <li>BLOOM</li>
              <li>Falcon</li>
              <li>Mistral</li>
            </ul>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Frequently Asked Questions
      </h2>

      <div className="space-y-6 mb-12">
        <details className="group bg-white rounded-xl shadow-sm">
          <summary className="flex items-center justify-between p-6 cursor-pointer">
            <div className="text-xl font-semibold">How accurate is the AI detection?</div>
            <span className="ml-4 flex-shrink-0">+</span>
          </summary>
          <div className="px-6 pb-6">
            <p className="text-gray-600 leading-relaxed">
              Our AI detector achieves over 95% accuracy in identifying AI-generated content from major language models. However, accuracy may vary based on content length and complexity.
            </p>
          </div>
        </details>

        <details className="group bg-white rounded-xl shadow-sm">
          <summary className="flex items-center justify-between p-6 cursor-pointer">
            <div className="text-xl font-semibold">What content length is recommended?</div>
            <span className="ml-4 flex-shrink-0">+</span>
          </summary>
          <div className="px-6 pb-6">
            <p className="text-gray-600 leading-relaxed">
              For best results, we recommend checking content between 100 and 2000 words. Longer texts can be split into multiple checks.
            </p>
          </div>
        </details>

        <details className="group bg-white rounded-xl shadow-sm">
          <summary className="flex items-center justify-between p-6 cursor-pointer">
            <div className="text-xl font-semibold">What are the daily limits?</div>
            <span className="ml-4 flex-shrink-0">+</span>
          </summary>
          <div className="px-6 pb-6">
            <p className="text-gray-600 leading-relaxed">
              You can check up to 2,000 words per submission and 5,000 words per day. The daily limit resets every 24 hours from your first check.
            </p>
          </div>
        </details>

        <details className="group bg-white rounded-xl shadow-sm">
          <summary className="flex items-center justify-between p-6 cursor-pointer">
            <div className="text-xl font-semibold">How does it detect AI content?</div>
            <span className="ml-4 flex-shrink-0">+</span>
          </summary>
          <div className="px-6 pb-6">
            <p className="text-gray-600 leading-relaxed">
              Our tool uses advanced machine learning algorithms to analyze:
            </p>
            <ul className="mt-2 space-y-1">
              <li>Writing patterns and style</li>
              <li>Sentence structure and complexity</li>
              <li>Word choice and vocabulary</li>
              <li>Content coherence and flow</li>
            </ul>
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
              <h3 className="text-lg font-semibold ml-2 leading-none m-0">Use Sufficient Text</h3>
            </div>
            <p className="text-gray-600 mt-2">
              Provide at least 100 words for more accurate detection results.
            </p>
          </div>
          
          <div>
            <div className="flex items-center mb-3">
              <AlertTriangle className="h-6 w-6 text-indigo-600 flex-shrink-0" />
              <h3 className="text-lg font-semibold ml-2 leading-none m-0">Review Context</h3>
            </div>
            <p className="text-gray-600 mt-2">
              Consider the context and purpose of the content when reviewing results.
            </p>
          </div>
          
          <div>
            <div className="flex items-center mb-3">
              <Clock className="h-6 w-6 text-indigo-600 flex-shrink-0" />
              <h3 className="text-lg font-semibold ml-2 leading-none m-0">Regular Checks</h3>
            </div>
            <p className="text-gray-600 mt-2">
              Regularly check content, especially from unknown or suspicious sources.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIDetectorContent;