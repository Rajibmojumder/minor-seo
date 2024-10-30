import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Lock, Eye, Database, Globe, Bell, UserCheck, FileText, Mail } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Minor SEO</title>
        <meta 
          name="description" 
          content="Learn about Minor SEO's privacy policy, data collection practices, and how we protect your information." 
        />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Shield className="h-12 w-12 text-indigo-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600">
            Last updated: October 30, 2024
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
            <div className="flex items-center mb-4">
              <Lock className="h-6 w-6 text-indigo-600 flex-shrink-0" />
              <h2 className="text-2xl font-bold ml-2 m-0">Introduction</h2>
            </div>
            <p>
              At Minor SEO ("we," "our," or "us"), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
            </p>
            <p>
              By using our services, you agree to the collection and use of information in accordance with this policy.
            </p>
          </div>

          {/* Information We Collect */}
          <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
            <div className="flex items-center mb-4">
              <Eye className="h-6 w-6 text-indigo-600 flex-shrink-0" />
              <h2 className="text-2xl font-bold ml-2 m-0">Information We Collect</h2>
            </div>
            <h3 className="text-xl font-semibold mb-4">Information You Provide</h3>
            <ul>
              <li>Text content submitted for analysis</li>
              <li>Email address (when contacting us)</li>
              <li>Usage preferences and settings</li>
              <li>Feedback and correspondence</li>
            </ul>

            <h3 className="text-xl font-semibold mb-4 mt-6">Information Automatically Collected</h3>
            <ul>
              <li>Device information (browser type, operating system)</li>
              <li>IP address and location data</li>
              <li>Usage statistics and patterns</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </div>

          {/* How We Use Your Information */}
          <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
            <div className="flex items-center mb-4">
              <Database className="h-6 w-6 text-indigo-600 flex-shrink-0" />
              <h2 className="text-2xl font-bold ml-2 m-0">How We Use Your Information</h2>
            </div>
            <p>We use the collected information for:</p>
            <ul>
              <li>Providing and improving our services</li>
              <li>Analyzing and processing your content</li>
              <li>Personalizing your experience</li>
              <li>Communicating with you about our services</li>
              <li>Detecting and preventing fraud or abuse</li>
              <li>Complying with legal obligations</li>
            </ul>
          </div>

          {/* Data Retention and Security */}
          <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
            <div className="flex items-center mb-4">
              <Lock className="h-6 w-6 text-indigo-600 flex-shrink-0" />
              <h2 className="text-2xl font-bold ml-2 m-0">Data Retention and Security</h2>
            </div>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
            <ul>
              <li>Content submitted for analysis is automatically deleted after processing</li>
              <li>We use industry-standard encryption for data transmission</li>
              <li>Regular security assessments and updates</li>
              <li>Limited employee access to personal information</li>
            </ul>
          </div>

          {/* Data Sharing and Third Parties */}
          <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
            <div className="flex items-center mb-4">
              <Globe className="h-6 w-6 text-indigo-600 flex-shrink-0" />
              <h2 className="text-2xl font-bold ml-2 m-0">Data Sharing and Third Parties</h2>
            </div>
            <p>We do not sell your personal information. We may share your information with:</p>
            <ul>
              <li>Service providers who assist in operating our website</li>
              <li>Analytics partners to improve our services</li>
              <li>Law enforcement when required by law</li>
            </ul>
          </div>

          {/* Your Rights and Choices */}
          <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
            <div className="flex items-center mb-4">
              <UserCheck className="h-6 w-6 text-indigo-600 flex-shrink-0" />
              <h2 className="text-2xl font-bold ml-2 m-0">Your Rights and Choices</h2>
            </div>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to data processing</li>
              <li>Withdraw consent</li>
              <li>Data portability</li>
            </ul>
          </div>

          {/* Cookies and Tracking */}
          <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
            <div className="flex items-center mb-4">
              <Bell className="h-6 w-6 text-indigo-600 flex-shrink-0" />
              <h2 className="text-2xl font-bold ml-2 m-0">Cookies and Tracking</h2>
            </div>
            <p>
              We use cookies and similar tracking technologies to improve your experience and collect usage data. You can control cookie settings through your browser preferences.
            </p>
            <h3 className="text-xl font-semibold mb-4 mt-6">Types of Cookies We Use:</h3>
            <ul>
              <li>Essential cookies for website functionality</li>
              <li>Analytics cookies to understand usage</li>
              <li>Preference cookies to remember your settings</li>
            </ul>
          </div>

          {/* Children's Privacy */}
          <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
            <div className="flex items-center mb-4">
              <Shield className="h-6 w-6 text-indigo-600 flex-shrink-0" />
              <h2 className="text-2xl font-bold ml-2 m-0">Children's Privacy</h2>
            </div>
            <p>
              Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you become aware that a child has provided us with personal information, please contact us.
            </p>
          </div>

          {/* Changes to Privacy Policy */}
          <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
            <div className="flex items-center mb-4">
              <FileText className="h-6 w-6 text-indigo-600 flex-shrink-0" />
              <h2 className="text-2xl font-bold ml-2 m-0">Changes to Privacy Policy</h2>
            </div>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </div>

          {/* Contact Us */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="flex items-center mb-4">
              <Mail className="h-6 w-6 text-indigo-600 flex-shrink-0" />
              <h2 className="text-2xl font-bold ml-2 m-0">Contact Us</h2>
            </div>
            <p>
              If you have any questions about this Privacy Policy or our data practices, please contact us:
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

export default PrivacyPolicy;