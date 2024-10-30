import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Search, 
  Bot, 
  FileText, 
  Type, 
  Mail, 
  Phone, 
  MapPin, 
  Shield, 
  FileQuestion,
  Sparkles
} from 'lucide-react';

const Footer = () => {
  const services = [
    { name: 'Plagiarism Checker', href: '/plagiarism-checker', icon: Search },
    { name: 'AI Content Detector', href: '/ai-detector', icon: Bot },
    { name: 'Markdown Converter', href: '/markdown-converter', icon: FileText },
    { name: 'Word Counter', href: '/word-counter', icon: Type },
  ];

  const company = [
    { name: 'About Us', href: '/about', icon: FileQuestion },
    { name: 'Contact', href: '/contact', icon: Mail },
    { name: 'Privacy Policy', href: '/privacy', icon: Shield },
    { name: 'Terms of Service', href: '/terms', icon: FileText },
  ];

  const socials = [
    { name: 'GitHub', icon: Github, href: 'https://github.com' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
  ];

  const contact = [
    { text: 'support@minorseo.com', icon: Mail }
  ];

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Sparkles className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
                Minor SEO
              </span>
            </div>
            <p className="text-gray-600 text-sm">
              Comprehensive suite of SEO and content analysis tools to help you create better content.
            </p>
            <div className="flex space-x-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-indigo-600 transition-colors duration-200"
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors duration-200"
                  >
                    <service.icon className="h-4 w-4 mr-2" />
                    <span>{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors duration-200"
                  >
                    <item.icon className="h-4 w-4 mr-2" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              {contact.map((item) => (
                <li key={item.text} className="flex items-center text-gray-600">
                  <item.icon className="h-4 w-4 mr-2 text-indigo-600" />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 py-6">
          <div className="text-center">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Minor SEO. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;