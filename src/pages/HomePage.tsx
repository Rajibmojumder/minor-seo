import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  Search, 
  Bot, 
  FileText, 
  Type, 
  Sparkles,
  Image,
  Link as LinkIcon,
  Hash,
  BookOpen,
  RefreshCw,
  TextCursor,
  Users,
  Globe,
  CheckCircle,
  Shield,
  Star
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const tools = [
  {
    name: 'Plagiarism Checker',
    description: 'Check content originality and detect duplicate content across multiple languages',
    icon: Search,
    href: '/plagiarism-checker',
    color: 'from-blue-500 to-blue-600'
  },
  {
    name: 'AI Content Detector',
    description: 'Detect AI-generated content with advanced machine learning',
    icon: Bot,
    href: '/ai-detector',
    color: 'from-purple-500 to-purple-600'
  },
  {
    name: 'Markdown Converter',
    description: 'Convert Markdown to clean, semantic HTML',
    icon: FileText,
    href: '/markdown-converter',
    color: 'from-green-500 to-green-600'
  },
  {
    name: 'Word Counter',
    description: 'Count words, characters, and estimate reading time',
    icon: Type,
    href: '/word-counter',
    color: 'from-orange-500 to-orange-600'
  },
  {
    name: 'Grammar Checker',
    description: 'Fix grammar, spelling, and punctuation errors',
    icon: BookOpen,
    href: '/grammar-checker',
    color: 'from-teal-500 to-teal-600'
  },
  {
    name: 'Paraphrasing Tool',
    description: 'Rewrite content while maintaining meaning',
    icon: RefreshCw,
    href: '/paraphrasing-tool',
    color: 'from-pink-500 to-pink-600'
  },
  {
    name: 'Case Converter',
    description: 'Convert text case (uppercase, lowercase, etc.)',
    icon: TextCursor,
    href: '/case-converter',
    color: 'from-indigo-500 to-indigo-600'
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Content Writer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
    quote: "Minor SEO's tools have become an essential part of my content creation workflow. The plagiarism checker and AI detector are incredibly accurate!"
  },
  {
    name: "Michael Chen",
    role: "SEO Specialist",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
    quote: "These tools have significantly improved my productivity. The interface is intuitive, and the results are always reliable."
  },
  {
    name: "Emily Rodriguez",
    role: "Digital Marketer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
    quote: "The best suite of content tools I've found. It's like having a professional editor right at your fingertips."
  }
];

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Minor SEO - Free SEO & Content Analysis Tools</title>
        <meta 
          name="description" 
          content="Enhance your content with Minor SEO's free tools suite. Access plagiarism checker, AI detector, word counter, and more to create SEO-optimized, high-quality content." 
        />
        <meta 
          name="keywords" 
          content="seo tools, best free seo tools, top seo tools, best seo checker, free seo software, cheapest seo tools, online ranking tool" 
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Minor SEO - Free SEO & Content Analysis Tools" />
        <meta 
          property="og:description" 
          content="Free online tools for content creators and SEO professionals. Check plagiarism, detect AI content, analyze text, and more." 
        />
        <meta property="og:image" content="/og-image.jpg" />
        <link rel="canonical" href="https://minorseo.com" />
      </Helmet>

      <MainLayout>
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            All-in-One SEO Tools Suite
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enhance your content quality with our comprehensive collection of free SEO and content analysis tools.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24" id="tools">
          {tools.map((tool) => (
            <Link
              key={tool.name}
              to={tool.href}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              <div className="p-6">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${tool.color} text-white mb-4`}>
                  <tool.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {tool.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {tool.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Features Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Our Tools?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-indigo-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1M+ Users</h3>
              <p className="text-gray-600">Trusted by content creators worldwide</p>
            </div>

            <div className="text-center">
              <div className="bg-indigo-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FileText className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">10M+ Documents</h3>
              <p className="text-gray-600">Processed and analyzed</p>
            </div>

            <div className="text-center">
              <div className="bg-indigo-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Globe className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">12+ Languages</h3>
              <p className="text-gray-600">Multi-language support</p>
            </div>

            <div className="text-center">
              <div className="bg-indigo-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">99.9% Accuracy</h3>
              <p className="text-gray-600">Reliable results you can trust</p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Benefits of Using Our Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <Sparkles className="h-6 w-6 text-indigo-600 flex-shrink-0" />
                <h3 className="text-lg font-semibold ml-2">Free to Use</h3>
              </div>
              <p className="text-gray-600">
                All tools are completely free with no hidden charges or subscriptions required.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <Bot className="h-6 w-6 text-indigo-600 flex-shrink-0" />
                <h3 className="text-lg font-semibold ml-2">AI-Powered</h3>
              </div>
              <p className="text-gray-600">
                Advanced AI algorithms ensure accurate results and intelligent analysis.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-indigo-600 flex-shrink-0" />
                <h3 className="text-lg font-semibold ml-2">Privacy First</h3>
              </div>
              <p className="text-gray-600">
                Your content is secure and private. We never store or share your data.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default HomePage;