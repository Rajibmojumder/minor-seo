import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, Shield, Scale, AlertTriangle, Globe, Ban, Clock, Mail } from 'lucide-react';

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Minor SEO</title>
        <meta 
          name="description" 
          content="Read Minor SEO's terms of service to understand the rules, guidelines, and restrictions for using our content analysis tools." 
        />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Scale className="h-12 w-12 text-indigo-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-600">
            Last updated: October 30, 2024
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
            <div className="flex items-center mb-4">
              <FileText className="h-6 w-6 text-indigo-600 flex-shrink-0" />
              <h2 className="text-2xl font-bold ml-2 m-0">Introduction</h2>
            </div>
            <p>
              Welcome to Minor SEO. By accessing or using our website and services, you agree to be bound by these Terms of Service ("Terms"). Please read these Terms carefully before using our services.
            </p>
            <p>
              If you do not agree with any part of these Terms, you may not access or use our services.
            </p>
          </div>

          {/* Services Description */}
          <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
            <div className="flex items-center mb-4">
              <Globe className="h-6 w-6 text-indigo-600 flex-shrink-0" />
              <h2 className="text-2xl font-bold ml-2 m-0">Services Description</h2>
            </div>
            <p>
              Minor SEO provides various content analysis tools including but not limited to:
            </p>
            <ul>
              <li>Plagiarism checking</li>
              <li>AI content detection</li>
              <li>Grammar checking</li>
              <li>Word counting</li>
              <li>Case conversion</li>
              <li>Markdown conversion</li>
              <li>Text paraphrasing</li>
            </ul>
            <p>
              These services are provided "as is" and we reserve the right to modify, suspend, or discontinue any service at any time without notice.
            </p>
          </div>

          {/* User Obligations */}
          <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
            <div className="flex items-center mb-4">
              <Shield className="h-6 w-6 text-indigo-600 flex-shrink-0" />
              <h2 className="text-2xl font-bold ml-2 m-0">User Obligations</h2>
            </div>
            <p>By using our services, you agree to:</p>
            <ul>
              <li>Provide accurate and complete information</li>
              <li>Use the services only for lawful purposes</li>
              <li>Not attempt to circumvent any limitations or restrictions</li>
              <li>Not interfere with the proper operation of the services</li>
              <li>Not use automated means to access the services</li>
              <li>Not redistribute or resell our services</li>
            </ul>
          </div>

          {/* Usage Restrictions */}
          <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
            <div className="flex items-center mb-4">
              <Ban className="h-6 w-6 text-indigo-600 flex-shrink-0" />
              <h2 className="text-2xl font-bold ml-2 m-0">Usage Restrictions</h2>
            </div>
            <p>You may not use our services to:</p>
            <ul>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon intellectual property rights</li>
              <li>Transmit malicious code or harmful content</li>
              <li>Conduct unauthorized data collection</li>
              <li>Impersonate others or provide misleading information</li>
              <li>Engage in any activity that disrupts our services</li>
            </ul>
          </div>

          {/* Service Limitations */}
          <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
            <div className="flex items-center mb-4">
              <Clock className="h-6 w-6 text-indigo-600 flex-shrink-0" />
              <h2 className="text-2xl font-bold ml-2 m-0">Service Limitations</h2>
            </div>
            <p>Our services are subject to the following limitations:</p>
            <ul>
              <li>Daily usage limits for free services</li>
              <li>Maximum text length restrictions</li>
              <li>File size and format limitations</li>
              <li>Processing time constraints</li>
              <li>Availability and uptime variations</li>
            </ul>
          </div>

          {/* Intellectual Property */}
          <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
            <div className="flex items-center mb-4">
              <Shield className="h-6 w-6 text-indigo-600 flex-shrink-0" />
              <h2 className="text-2xl font-bold ml-2 m-0">Intellectual Property</h2>
            </div>
            <p>
              All content, features, and functionality of our services, including but not limited to text, graphics, logos, and software, are owned by Minor SEO and protected by intellectual property laws.
            </p>
            <p>
              You may not copy, modify, distribute, sell, or lease any part of our services without our explicit permission.
            </p>
          </div>

          {/* Disclaimer of Warranties */}
          <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
            <div className="flex items-center mb-4">
              <AlertTriangle className="h-6 w-6 text-indigo-600 flex-shrink-0" />
              <h2 className="text-2xl font-bold ml-2 m-0">Disclaimer of Warranties</h2>
            </div>
            <p>
              Our services are provided "as is" without any warranty of any kind, either express or implied, including but not limited to:
            </p>
            <ul>
              <li>Accuracy of results</li>
              <li>Uninterrupted service</li>
              <li>Fitness for a particular purpose</li>
              <li>Error-free operation</li>
            </ul>
          </div>

          {/* Limitation of Liability */}
          <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
            <div className="flex items-center mb-4">
              <Scale className="h-6 w-6 text-indigo-600 flex-shrink-0" />
              <h2 className="text-2xl font-bold ml-2 m-0">Limitation of Liability</h2>
            </div>
            <p>
              Minor SEO shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services.
            </p>
          </div>

          {/* Changes to Terms */}
          <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
            <div className="flex items-center mb-4">
              <FileText className="h-6 w-6 text-indigo-600 flex-shrink-0" />
              <h2 className="text-2xl font-bold ml-2 m-0">Changes to Terms</h2>
            </div>
            <p>
              We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the updated Terms on this page with a new effective date.
            </p>
            <p>
              Your continued use of our services after such modifications constitutes your acceptance of the updated Terms.
            </p>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="flex items-center mb-4">
              <Mail className="h-6 w-6 text-indigo-600 flex-shrink-0" />
              <h2 className="text-2xl font-bold ml-2 m-0">Contact Information</h2>
            </div>
            <p>
              If you have any questions about these Terms, please contact us:
            </p>
            <ul>
              <li>Email: support@minorseo.com</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsOfService;