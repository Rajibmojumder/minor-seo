import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Target, Users, Award, Shield, Globe2, Sparkles, Clock, CheckCircle } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { label: 'Active Users', value: '1M+' },
    { label: 'Documents Processed', value: '10M+' },
    { label: 'Languages Supported', value: '12+' },
    { label: 'Accuracy Rate', value: '99.9%' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Accuracy',
      description: 'We prioritize precision and reliability in all our tools and services.'
    },
    {
      icon: Shield,
      title: 'Privacy',
      description: 'Your data security and privacy are our top priorities.'
    },
    {
      icon: Globe2,
      title: 'Accessibility',
      description: 'Making professional tools accessible to everyone, everywhere.'
    },
    {
      icon: Clock,
      title: 'Efficiency',
      description: 'Delivering fast, reliable results to save you time.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Minor SEO - Our Mission & Values</title>
        <meta 
          name="description" 
          content="Learn about Minor SEO's mission to provide free, high-quality content analysis tools. Discover our story, values, and commitment to helping content creators succeed." 
        />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Sparkles className="h-12 w-12 text-indigo-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About Minor SEO
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Empowering content creators with intelligent tools for better content
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-xl p-8 shadow-sm mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            At Minor SEO, we're on a mission to democratize access to professional content analysis tools. We believe that every content creator, regardless of their size or resources, should have access to powerful tools that help them create better, more engaging content.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Founded in 2024, we've grown from a simple plagiarism checker to a comprehensive suite of content analysis tools, serving millions of users worldwide. Our commitment to providing free, high-quality tools has made us a trusted partner for content creators, students, and professionals across the globe.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-indigo-600 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <value.icon className="h-6 w-6 text-indigo-600" />
                  <h3 className="text-lg font-semibold ml-3">{value.title}</h3>
                </div>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What Sets Us Apart */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What Sets Us Apart</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-indigo-600 mt-1 flex-shrink-0" />
              <div className="ml-4">
                <h3 className="font-semibold text-gray-900">Advanced Technology</h3>
                <p className="text-gray-600">Powered by cutting-edge AI and machine learning algorithms for superior accuracy.</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-indigo-600 mt-1 flex-shrink-0" />
              <div className="ml-4">
                <h3 className="font-semibold text-gray-900">User-Centric Design</h3>
                <p className="text-gray-600">Intuitive interfaces and workflows designed with users in mind.</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-indigo-600 mt-1 flex-shrink-0" />
              <div className="ml-4">
                <h3 className="font-semibold text-gray-900">Comprehensive Solutions</h3>
                <p className="text-gray-600">A complete suite of tools for all your content analysis needs.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Join Our Journey</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're constantly evolving and improving our tools to better serve our users. Whether you're a student, professional writer, or content creator, we invite you to join our growing community and experience the power of intelligent content analysis tools.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutPage;