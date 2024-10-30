import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Bot, FileText, Type, Sparkles, Image, Link as LinkIcon, Hash } from 'lucide-react';

const tools = [
  {
    name: 'Plagiarism Checker',
    description: 'Check content originality',
    icon: Search,
    href: '/plagiarism-checker',
  },
  {
    name: 'AI Content Detector',
    description: 'Detect AI-generated text',
    icon: Bot,
    href: '/ai-detector',
  },
  {
    name: 'Markdown Converter',
    description: 'Convert MD to HTML',
    icon: FileText,
    href: '/markdown-converter',
  },
  {
    name: 'Word Counter',
    description: 'Count words & characters',
    icon: Type,
    href: '/word-counter',
  }
];

const relatedToolsMap = {
  '/plagiarism-checker': ['ai-detector', 'word-counter'],
  '/ai-detector': ['plagiarism-checker', 'grammar-checker'],
  '/markdown-converter': ['word-counter', 'meta-generator'],
  '/word-counter': ['plagiarism-checker', 'markdown-converter'],
};

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const getRelatedTools = () => {
    const relatedPaths = relatedToolsMap[currentPath as keyof typeof relatedToolsMap] || [];
    return tools.filter(tool => relatedPaths.some(path => tool.href.includes(path)));
  };

  const popularTools = tools.slice(0, 4); // Show top 4 tools as popular
  const relatedTools = getRelatedTools();

  return (
    <aside className="w-64 hidden lg:block">
      <div className="sticky top-24 space-y-8">
        {/* Popular Tools */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
            Popular Tools
          </h3>
          <div className="space-y-3">
            {popularTools.map((tool) => (
              <Link
                key={tool.name}
                to={tool.href}
                className={`flex items-center p-2 rounded-lg transition-colors duration-200 hover:bg-gray-50 ${
                  currentPath === tool.href ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700'
                }`}
              >
                <tool.icon className="h-5 w-5 mr-3" />
                <div>
                  <p className="text-sm font-medium">{tool.name}</p>
                  <p className="text-xs text-gray-500">{tool.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Related Tools - Only show if there are related tools */}
        {relatedTools.length > 0 && (
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Related Tools
            </h3>
            <div className="space-y-3">
              {relatedTools.map((tool) => (
                <Link
                  key={tool.name}
                  to={tool.href}
                  className="flex items-center p-2 rounded-lg transition-colors duration-200 hover:bg-gray-50 text-gray-700"
                >
                  <tool.icon className="h-5 w-5 mr-3" />
                  <div>
                    <p className="text-sm font-medium">{tool.name}</p>
                    <p className="text-xs text-gray-500">{tool.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;