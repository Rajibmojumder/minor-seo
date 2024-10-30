import React from 'react';
import { Brain, Globe2, Zap, Shield, Clock, CheckCircle, Sparkles, FileText, Settings } from 'lucide-react';

const ParaphrasingContent = () => {
  return (
    <div className="mt-24 prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Free Online Paraphrasing Tool
      </h2>

      {/* Overview Section */}
      <div className="bg-white rounded-xl p-8 shadow-sm mb-12">
        <p className="text-gray-600 mb-6">
          Transform your content while maintaining its original meaning with our advanced paraphrasing tool. Whether you're a student looking to improve your writing, a professional refining your content, or a content creator seeking fresh perspectives, our tool helps you rewrite text effectively and efficiently.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">What You Get:</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Instant paraphrasing results</li>
              <li>Multiple writing style options</li>
              <li>Highlighted changes tracking</li>
              <li>Up to 2000 words per check</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Perfect For:</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Academic writing and research</li>
              <li>Content marketing and SEO</li>
              <li>Professional communications</li>
              <li>Creative writing projects</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Core Features Section */}
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Core Features
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
          <div className="flex items-center mb-3">
            <Brain className="h-6 w-6 text-indigo-600 flex-shrink-0" />
            <h3 className="text-lg font-semibold ml-2 leading-none m-0">AI-Powered</h3>
          </div>
          <p className="text-gray-600 mt-2 leading-relaxed">
            Advanced AI algorithms ensure high-quality paraphrasing while maintaining context and meaning
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
            <Settings className="h-6 w-6 text-indigo-600 flex-shrink-0" />
            <h3 className="text-lg font-semibold ml-2 leading-none m-0">Multiple Styles</h3>
          </div>
          <p className="text-gray-600 mt-2 leading-relaxed">
            Choose from Standard, Fluent, or Creative paraphrasing styles
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
            <Shield className="h-6 w-6 text-indigo-600 flex-shrink-0" />
            <h3 className="text-lg font-semibold ml-2 leading-none m-0">Content Preservation</h3>
          </div>
          <ul className="space-y-2 text-gray-600 mt-2">
            <li>Maintains original meaning</li>
            <li>Preserves key information</li>
            <li>Retains technical terms</li>
            <li>Keeps citations intact</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center mb-3">
            <Sparkles className="h-6 w-6 text-indigo-600 flex-shrink-0" />
            <h3 className="text-lg font-semibold ml-2 leading-none m-0">Enhanced Processing</h3>
          </div>
          <ul className="space-y-2 text-gray-600 mt-2">
            <li>Real-time paraphrasing</li>
            <li>Change highlighting</li>
            <li>Contextual suggestions</li>
            <li>Multiple output options</li>
          </ul>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        How It Works
      </h2>

      <div className="bg-white rounded-xl p-8 shadow-sm mb-12">
        <ol className="space-y-6">
          <li className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-semibold">1</div>
            <div>
              <h4 className="font-semibold leading-none m-0">Input Your Text</h4>
              <p className="text-gray-600 mt-2 leading-relaxed">Enter or paste your text into the editor. You can also upload text files.</p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-semibold">2</div>
            <div>
              <h4 className="font-semibold leading-none m-0">Choose Settings</h4>
              <p className="text-gray-600 mt-2 leading-relaxed">Select your preferred language and paraphrasing style (Standard, Fluent, or Creative).</p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-semibold">3</div>
            <div>
              <h4 className="font-semibold leading-none m-0">Get Results</h4>
              <p className="text-gray-600 mt-2 leading-relaxed">Receive your paraphrased text with changes highlighted for easy comparison.</p>
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
            <div className="text-xl font-semibold">What is paraphrasing?</div>
            <span className="ml-4 flex-shrink-0">+</span>
          </summary>
          <div className="px-6 pb-6">
            <p className="text-gray-600 leading-relaxed">
              Paraphrasing is the process of rewriting text to express the same meaning using different words and sentence structures. It helps avoid plagiarism and improve content uniqueness while maintaining the original message.
            </p>
          </div>
        </details>

        <details className="group bg-white rounded-xl shadow-sm">
          <summary className="flex items-center justify-between p-6 cursor-pointer">
            <div className="text-xl font-semibold">How accurate is the paraphrasing?</div>
            <span className="ml-4 flex-shrink-0">+</span>
          </summary>
          <div className="px-6 pb-6">
            <p className="text-gray-600 leading-relaxed">
              Our AI-powered paraphrasing tool maintains high accuracy by understanding context and meaning. However, we recommend reviewing the output to ensure it matches your needs, especially for technical or specialized content.
            </p>
          </div>
        </details>

        <details className="group bg-white rounded-xl shadow-sm">
          <summary className="flex items-center justify-between p-6 cursor-pointer">
            <div className="text-xl font-semibold">What are the different paraphrasing styles?</div>
            <span className="ml-4 flex-shrink-0">+</span>
          </summary>
          <div className="px-6 pb-6">
            <ul className="space-y-2 text-gray-600">
              <li><strong>Standard:</strong> Basic paraphrasing that maintains the original tone and style</li>
              <li><strong>Fluent:</strong> More natural and flowing variations with improved readability</li>
              <li><strong>Creative:</strong> More extensive rewording with creative alternatives</li>
            </ul>
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
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Best Practices for Paraphrasing
      </h2>

      <div className="bg-white rounded-xl p-8 shadow-sm mb-12">
        <div className="space-y-6">
          <div>
            <div className="flex items-center mb-3">
              <CheckCircle className="h-6 w-6 text-indigo-600 flex-shrink-0" />
              <h3 className="text-lg font-semibold ml-2 leading-none m-0">Review the Output</h3>
            </div>
            <p className="text-gray-600 mt-2 leading-relaxed">
              Always review the paraphrased text to ensure it maintains accuracy and context.
            </p>
          </div>
          
          <div>
            <div className="flex items-center mb-3">
              <CheckCircle className="h-6 w-6 text-indigo-600 flex-shrink-0" />
              <h3 className="text-lg font-semibold ml-2 leading-none m-0">Choose the Right Style</h3>
            </div>
            <p className="text-gray-600 mt-2 leading-relaxed">
              Select the appropriate paraphrasing style based on your content type and audience.
            </p>
          </div>
          
          <div>
            <div className="flex items-center mb-3">
              <CheckCircle className="h-6 w-6 text-indigo-600 flex-shrink-0" />
              <h3 className="text-lg font-semibold ml-2 leading-none m-0">Maintain Clarity</h3>
            </div>
            <p className="text-gray-600 mt-2 leading-relaxed">
              Ensure the paraphrased content remains clear and easy to understand.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParaphrasingContent;