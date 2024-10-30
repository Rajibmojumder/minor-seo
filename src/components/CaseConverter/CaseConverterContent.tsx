import React from 'react';
import { Type, Wand2, Zap, Shield, Clock, CheckCircle, FileText, Settings, Brain, Code2 } from 'lucide-react';

const CaseConverterContent = () => {
  return (
    <div className="mt-24 prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Free Online Case Converter Tool
      </h2>

      <div className="bg-white rounded-xl p-8 shadow-sm mb-12">
        <p className="text-gray-600">
          Transform your text between different letter cases with our powerful case converter tool. Perfect for developers, writers, and content creators who need to quickly convert text between uppercase, lowercase, title case, camelCase, and more. Our tool supports multiple case formats and preserves your text's original formatting.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Available Case Types
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center mb-4">
            <Type className="h-6 w-6 text-indigo-600 flex-shrink-0" />
            <h3 className="text-lg font-semibold ml-2 leading-none m-0">Text Cases</h3>
          </div>
          <ul className="space-y-2 text-gray-600">
            <li><strong>UPPERCASE</strong> - All letters capitalized</li>
            <li><strong>lowercase</strong> - All letters in small case</li>
            <li><strong>Title Case</strong> - First Letter Of Each Word</li>
            <li><strong>Sentence case</strong> - First letter of sentences</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center mb-4">
            <Code2 className="h-6 w-6 text-indigo-600 flex-shrink-0" />
            <h3 className="text-lg font-semibold ml-2 leading-none m-0">Programming Cases</h3>
          </div>
          <ul className="space-y-2 text-gray-600">
            <li><strong>camelCase</strong> - First word lowercase, rest capitalized</li>
            <li><strong>PascalCase</strong> - All words capitalized</li>
            <li><strong>snake_case</strong> - Words separated by underscores</li>
            <li><strong>kebab-case</strong> - Words separated by hyphens</li>
          </ul>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Key Features
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
          <div className="flex items-center mb-3">
            <Wand2 className="h-6 w-6 text-indigo-600 flex-shrink-0" />
            <h3 className="text-lg font-semibold ml-2 leading-none m-0">Instant Conversion</h3>
          </div>
          <p className="text-gray-600 mt-2">
            Convert text case instantly with real-time preview and one-click copying
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
          <div className="flex items-center mb-3">
            <Settings className="h-6 w-6 text-indigo-600 flex-shrink-0" />
            <h3 className="text-lg font-semibold ml-2 leading-none m-0">Multiple Formats</h3>
          </div>
          <p className="text-gray-600 mt-2">
            Support for 10+ different case formats including programming cases
          </p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
          <div className="flex items-center mb-3">
            <Brain className="h-6 w-6 text-indigo-600 flex-shrink-0" />
            <h3 className="text-lg font-semibold ml-2 leading-none m-0">Smart Processing</h3>
          </div>
          <p className="text-gray-600 mt-2">
            Intelligent handling of special characters and formatting
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Use Cases
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center mb-3">
            <Code2 className="h-6 w-6 text-indigo-600 flex-shrink-0" />
            <h3 className="text-lg font-semibold ml-2 leading-none m-0">Development</h3>
          </div>
          <ul className="space-y-2 text-gray-600">
            <li>Variable naming conventions</li>
            <li>File naming standards</li>
            <li>Code formatting</li>
            <li>API endpoint naming</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center mb-3">
            <FileText className="h-6 w-6 text-indigo-600 flex-shrink-0" />
            <h3 className="text-lg font-semibold ml-2 leading-none m-0">Content Creation</h3>
          </div>
          <ul className="space-y-2 text-gray-600">
            <li>Headline formatting</li>
            <li>Title capitalization</li>
            <li>Brand name styling</li>
            <li>Social media content</li>
          </ul>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Frequently Asked Questions
      </h2>

      <div className="space-y-6 mb-12">
        <details className="group bg-white rounded-xl shadow-sm">
          <summary className="flex items-center justify-between p-6 cursor-pointer">
            <div className="text-xl font-semibold">What is case conversion?</div>
            <span className="ml-4 flex-shrink-0">+</span>
          </summary>
          <div className="px-6 pb-6">
            <p className="text-gray-600">
              Case conversion is the process of changing the capitalization style of text. It's commonly used in programming, writing, and formatting text for different purposes such as maintaining coding standards or following title capitalization rules.
            </p>
          </div>
        </details>

        <details className="group bg-white rounded-xl shadow-sm">
          <summary className="flex items-center justify-between p-6 cursor-pointer">
            <div className="text-xl font-semibold">When should I use different cases?</div>
            <span className="ml-4 flex-shrink-0">+</span>
          </summary>
          <div className="px-6 pb-6">
            <ul className="space-y-2 text-gray-600">
              <li><strong>UPPERCASE:</strong> Headlines, acronyms, emphasis</li>
              <li><strong>Title Case:</strong> Titles, headings, proper nouns</li>
              <li><strong>camelCase:</strong> JavaScript variables, function names</li>
              <li><strong>snake_case:</strong> Python variables, file names</li>
              <li><strong>kebab-case:</strong> URLs, CSS classes</li>
            </ul>
          </div>
        </details>

        <details className="group bg-white rounded-xl shadow-sm">
          <summary className="flex items-center justify-between p-6 cursor-pointer">
            <div className="text-xl font-semibold">How does the tool handle special characters?</div>
            <span className="ml-4 flex-shrink-0">+</span>
          </summary>
          <div className="px-6 pb-6">
            <p className="text-gray-600">
              Our case converter preserves special characters, numbers, and punctuation while only modifying letter cases. It also maintains spacing and line breaks in your text.
            </p>
          </div>
        </details>

        <details className="group bg-white rounded-xl shadow-sm">
          <summary className="flex items-center justify-between p-6 cursor-pointer">
            <div className="text-xl font-semibold">Is there a text length limit?</div>
            <span className="ml-4 flex-shrink-0">+</span>
          </summary>
          <div className="px-6 pb-6">
            <p className="text-gray-600">
              No, there is no strict character limit. However, for optimal performance, we recommend processing text in reasonable chunks of up to 50,000 characters at a time.
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
              <h3 className="text-lg font-semibold ml-2 leading-none m-0">Choose Appropriate Case</h3>
            </div>
            <p className="text-gray-600 mt-2">
              Select the case format that matches your project's style guide or industry standards.
            </p>
          </div>
          
          <div>
            <div className="flex items-center mb-3">
              <Shield className="h-6 w-6 text-indigo-600 flex-shrink-0" />
              <h3 className="text-lg font-semibold ml-2 leading-none m-0">Maintain Consistency</h3>
            </div>
            <p className="text-gray-600 mt-2">
              Use consistent case formatting throughout your project or document.
            </p>
          </div>
          
          <div>
            <div className="flex items-center mb-3">
              <Clock className="h-6 w-6 text-indigo-600 flex-shrink-0" />
              <h3 className="text-lg font-semibold ml-2 leading-none m-0">Review Output</h3>
            </div>
            <p className="text-gray-600 mt-2">
              Always review the converted text to ensure proper formatting and readability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseConverterContent;