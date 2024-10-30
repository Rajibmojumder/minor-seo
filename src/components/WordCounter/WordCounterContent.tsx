import React from 'react';
import { 
  Type, 
  Clock, 
  Brain, 
  Zap, 
  Globe2, 
  CheckCircle, 
  BarChart2, 
  Search,
  FileText,
  AlertTriangle,
  Sparkles,
  Shield,
  Upload,
  MousePointer,
  Download
} from 'lucide-react';

const WordCounterContent: React.FC = () => {
  return (
    <div className="mt-24 prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Free Online Word Counter Tool
      </h2>

      <div className="bg-white rounded-xl p-8 shadow-sm mb-12">
        <p className="text-gray-600">
          Our word counter tool provides instant character count, word count, and readability analysis for your text. 
          Perfect for writers, students, and content creators who need to meet specific length requirements or analyze their writing.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        How to Use
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-indigo-50 rounded-xl p-6">
          <div className="flex items-center mb-3">
            <Upload className="h-6 w-6 text-indigo-600 flex-shrink-0" />
            <h3 className="text-lg font-semibold ml-2 leading-none m-0">1. Input Text</h3>
          </div>
          <p className="text-gray-600 mt-2">
            Type directly in the editor, paste your content, or upload a document
          </p>
        </div>

        <div className="bg-indigo-50 rounded-xl p-6">
          <div className="flex items-center mb-3">
            <MousePointer className="h-6 w-6 text-indigo-600 flex-shrink-0" />
            <h3 className="text-lg font-semibold ml-2 leading-none m-0">2. Click Check</h3>
          </div>
          <p className="text-gray-600 mt-2">
            Click the "Check Word Count" button to analyze your text
          </p>
        </div>

        <div className="bg-indigo-50 rounded-xl p-6">
          <div className="flex items-center mb-3">
            <Download className="h-6 w-6 text-indigo-600 flex-shrink-0" />
            <h3 className="text-lg font-semibold ml-2 leading-none m-0">3. Get Results</h3>
          </div>
          <p className="text-gray-600 mt-2">
            View detailed statistics and analysis of your content
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Key Features
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
          <div className="flex items-center mb-3">
            <Type className="h-6 w-6 text-indigo-600 flex-shrink-0" />
            <h3 className="text-lg font-semibold ml-2 leading-none m-0">Comprehensive Counting</h3>
          </div>
          <p className="text-gray-600 mt-2">
            Count words, characters, sentences, and paragraphs with real-time updates
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
          <div className="flex items-center mb-3">
            <Clock className="h-6 w-6 text-indigo-600 flex-shrink-0" />
            <h3 className="text-lg font-semibold ml-2 leading-none m-0">Reading Time</h3>
          </div>
          <p className="text-gray-600 mt-2">
            Get estimated reading and speaking times based on average speeds
          </p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
          <div className="flex items-center mb-3">
            <BarChart2 className="h-6 w-6 text-indigo-600 flex-shrink-0" />
            <h3 className="text-lg font-semibold ml-2 leading-none m-0">Keyword Analysis</h3>
          </div>
          <p className="text-gray-600 mt-2">
            Analyze keyword density and phrase frequency in your content
          </p>
        </div>
      </div>

      {/* Rest of the component remains the same */}
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        What We Count
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center mb-4">
            <Type className="h-6 w-6 text-indigo-600 flex-shrink-0" />
            <h3 className="text-lg font-semibold ml-2 leading-none m-0">Basic Statistics</h3>
          </div>
          <ul className="space-y-2">
            <li>Total word count</li>
            <li>Character count (with and without spaces)</li>
            <li>Sentence count</li>
            <li>Paragraph count</li>
            <li>Average word length</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center mb-4">
            <Brain className="h-6 w-6 text-indigo-600 flex-shrink-0" />
            <h3 className="text-lg font-semibold ml-2 leading-none m-0">Advanced Analysis</h3>
          </div>
          <ul className="space-y-2">
            <li>Keyword density</li>
            <li>Phrase frequency</li>
            <li>Reading time estimation</li>
            <li>Speaking time estimation</li>
            <li>Text complexity metrics</li>
          </ul>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Use Cases
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center mb-3">
            <FileText className="h-6 w-6 text-indigo-600 flex-shrink-0" />
            <h3 className="text-lg font-semibold ml-2 leading-none m-0">Academic Writing</h3>
          </div>
          <ul className="space-y-2 text-gray-600">
            <li>Essays and papers</li>
            <li>Research articles</li>
            <li>Dissertations</li>
            <li>Word limit compliance</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center mb-3">
            <Search className="h-6 w-6 text-indigo-600 flex-shrink-0" />
            <h3 className="text-lg font-semibold ml-2 leading-none m-0">Content Creation</h3>
          </div>
          <ul className="space-y-2 text-gray-600">
            <li>Blog posts</li>
            <li>Social media content</li>
            <li>Marketing copy</li>
            <li>SEO optimization</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center mb-3">
            <Globe2 className="h-6 w-6 text-indigo-600 flex-shrink-0" />
            <h3 className="text-lg font-semibold ml-2 leading-none m-0">Professional Use</h3>
          </div>
          <ul className="space-y-2 text-gray-600">
            <li>Business reports</li>
            <li>Presentations</li>
            <li>Documentation</li>
            <li>Email communication</li>
          </ul>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Frequently Asked Questions
      </h2>

      <div className="space-y-6 mb-12">
        <details className="group bg-white rounded-xl shadow-sm">
          <summary className="flex items-center justify-between p-6 cursor-pointer">
            <h3 className="text-xl font-semibold">How accurate is the word count?</h3>
            <span className="ml-4 flex-shrink-0">+</span>
          </summary>
          <div className="px-6 pb-6">
            <p>Our word counter uses standard word counting rules:</p>
            <ul className="mt-2 space-y-1">
              <li>Words are separated by spaces</li>
              <li>Hyphenated words count as one word</li>
              <li>Numbers count as words</li>
              <li>Contractions count as one word</li>
            </ul>
          </div>
        </details>

        <details className="group bg-white rounded-xl shadow-sm">
          <summary className="flex items-center justify-between p-6 cursor-pointer">
            <h3 className="text-xl font-semibold">How is reading time calculated?</h3>
            <span className="ml-4 flex-shrink-0">+</span>
          </summary>
          <div className="px-6 pb-6">
            <p>Reading time is calculated based on standard reading speeds:</p>
            <ul className="mt-2 space-y-1">
              <li>Average reading speed: 200-250 words per minute</li>
              <li>Speaking speed: 130-150 words per minute</li>
              <li>Technical content: 50-100 words per minute</li>
            </ul>
          </div>
        </details>

        <details className="group bg-white rounded-xl shadow-sm">
          <summary className="flex items-center justify-between p-6 cursor-pointer">
            <h3 className="text-xl font-semibold">What file formats are supported?</h3>
            <span className="ml-4 flex-shrink-0">+</span>
          </summary>
          <div className="px-6 pb-6">
            <p>Our tool supports the following file formats:</p>
            <ul className="mt-2 space-y-1">
              <li>Plain text (.txt)</li>
              <li>Microsoft Word (.doc, .docx)</li>
              <li>PDF documents (.pdf)</li>
              <li>Direct text input</li>
            </ul>
          </div>
        </details>

        <details className="group bg-white rounded-xl shadow-sm">
          <summary className="flex items-center justify-between p-6 cursor-pointer">
            <h3 className="text-xl font-semibold">Is there a word limit?</h3>
            <span className="ml-4 flex-shrink-0">+</span>
          </summary>
          <div className="px-6 pb-6">
            <p>There is no strict word limit for the counter, but for optimal performance:</p>
            <ul className="mt-2 space-y-1">
              <li>Text files: Up to 100,000 words</li>
              <li>Direct input: Up to 50,000 words</li>
              <li>PDF files: Up to 200 pages</li>
            </ul>
          </div>
        </details>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Tips for Better Writing
      </h2>

      <div className="bg-white rounded-xl p-8 shadow-sm mb-12">
        <div className="space-y-6">
          <div>
            <div className="flex items-center mb-3">
              <CheckCircle className="h-6 w-6 text-indigo-600 flex-shrink-0" />
              <h3 className="text-lg font-semibold ml-2 leading-none m-0">Monitor Word Count</h3>
            </div>
            <p className="text-gray-600 mt-2">Keep track of your word count while writing to stay within required limits.</p>
          </div>
          
          <div>
            <div className="flex items-center mb-3">
              <AlertTriangle className="h-6 w-6 text-indigo-600 flex-shrink-0" />
              <h3 className="text-lg font-semibold ml-2 leading-none m-0">Avoid Redundancy</h3>
            </div>
            <p className="text-gray-600 mt-2">Use the keyword density analysis to identify and reduce repetitive phrases.</p>
          </div>
          
          <div>
            <div className="flex items-center mb-3">
              <Sparkles className="h-6 w-6 text-indigo-600 flex-shrink-0" />
              <h3 className="text-lg font-semibold ml-2 leading-none m-0">Optimize Length</h3>
            </div>
            <p className="text-gray-600 mt-2">Use reading time estimates to ensure your content is appropriate for your audience.</p>
          </div>
          
          <div>
            <div className="flex items-center mb-3">
              <Shield className="h-6 w-6 text-indigo-600 flex-shrink-0" />
              <h3 className="text-lg font-semibold ml-2 leading-none m-0">Regular Analysis</h3>
            </div>
            <p className="text-gray-600 mt-2">Analyze your text regularly during writing to maintain consistent quality and length.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordCounterContent;