import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import PlagiarismChecker from './pages/PlagiarismChecker';
import AIDetector from './pages/AIDetector';
import MarkdownConverter from './pages/MarkdownConverter';
import WordCounter from './pages/WordCounter';
import GrammarChecker from './pages/GrammarChecker';
import ParaphrasingTool from './pages/ParaphrasingTool';
import CaseConverter from './pages/CaseConverter';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import NotFound from './pages/NotFound';
import CookieConsent from './components/CookieConsent';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
          <Helmet>
            <title>Minor SEO - Free SEO & Content Analysis Tools</title>
            <meta name="description" content="Comprehensive suite of SEO and content analysis tools including plagiarism checker, AI content detector, word counter, and more. Free online tools for content creators." />
            <meta name="keywords" content="plagiarism checker, AI detector, word counter, SEO tools, content analysis, markdown converter, grammar checker, paraphrasing tool, case converter" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Minor SEO - Free SEO & Content Analysis Tools" />
            <meta property="og:description" content="Free online tools for content creators and SEO professionals. Check plagiarism, detect AI content, count words, and more." />
            <meta property="og:image" content="/og-image.jpg" />
            <link rel="canonical" href="https://minorseo.com" />
            <meta name="robots" content="index, follow" />
            <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          </Helmet>

          <Header />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/plagiarism-checker" element={<PlagiarismChecker />} />
              <Route path="/ai-detector" element={<AIDetector />} />
              <Route path="/markdown-converter" element={<MarkdownConverter />} />
              <Route path="/word-counter" element={<WordCounter />} />
              <Route path="/grammar-checker" element={<GrammarChecker />} />
              <Route path="/paraphrasing-tool" element={<ParaphrasingTool />} />
              <Route path="/case-converter" element={<CaseConverter />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <Footer />
          <CookieConsent />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;