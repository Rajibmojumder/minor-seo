import React from 'react';
import { Helmet } from 'react-helmet-async';
import MainLayout from '../components/layout/MainLayout';
import AIDetectorTool from '../components/AIDetector/AIDetectorTool';
import AIDetectorContent from '../components/AIDetector/AIDetectorContent';

const AIDetector = () => {
  return (
    <>
      <Helmet>
        <title>AI Content Detector - Free AI Text Detection Tool</title>
        <meta name="description" content="Detect AI-generated content with our free online AI content detector. Supports GPT-3.5, GPT-4, Claude, and other AI models." />
        <meta name="keywords" content="AI content detector, AI text detector, GPT detector, AI writing detector, content authenticity" />
      </Helmet>

      <MainLayout>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              AI Content Detector
            </h1>
            <p className="text-lg text-gray-600">
              Check if content is written by AI or human
            </p>
          </div>

          <AIDetectorTool />
          <AIDetectorContent />
        </div>
      </MainLayout>
    </>
  );
};

export default AIDetector;