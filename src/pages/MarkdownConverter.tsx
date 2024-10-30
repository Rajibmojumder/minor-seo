import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
import MainLayout from '../components/layout/MainLayout';
import Toolbar from '../components/MarkdownConverter/Toolbar';
import Editor from '../components/MarkdownConverter/Editor';
import Preview from '../components/MarkdownConverter/Preview';
import RawHtml from '../components/MarkdownConverter/RawHtml';
import MarkdownConverterContent from '../components/MarkdownConverter/MarkdownConverterContent';
import { Code2, Palette } from 'lucide-react';

const MarkdownConverter: React.FC = () => {
  const [markdown, setMarkdown] = useState<string>('');
  const [html, setHtml] = useState<string>('');
  const [customCss, setCustomCss] = useState<string>('');
  const [showCustomCss, setShowCustomCss] = useState<boolean>(false);
  const [showRawHtml, setShowRawHtml] = useState<boolean>(false);
  const [previewMode, setPreviewMode] = useState<'split' | 'preview'>('split');
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    marked.setOptions({
      highlight: (code, lang) => {
        if (lang && hljs.getLanguage(lang)) {
          return hljs.highlight(code, { language: lang }).value;
        }
        return hljs.highlightAuto(code).value;
      },
      breaks: true,
      gfm: true
    });
  }, []);

  useEffect(() => {
    try {
      const rawHtml = marked.parse(markdown);
      const sanitizedHtml = DOMPurify.sanitize(rawHtml);
      setHtml(sanitizedHtml);
    } catch (error) {
      console.error('Error converting markdown:', error);
    }
  }, [markdown]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        setMarkdown(content);
      };
      reader.readAsText(file);
    }
  };

  const handleCopyHtml = async () => {
    try {
      await navigator.clipboard.writeText(html);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy HTML:', error);
    }
  };

  const handleDownloadHtml = () => {
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'converted.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handlePaste = async (e: React.ClipboardEvent) => {
    e.preventDefault();
    const text = e.clipboardData.getData('text');
    setMarkdown(text);
  };

  return (
    <>
      <Helmet>
        <title>Markdown to HTML Converter - Free Online Tool</title>
        <meta 
          name="description" 
          content="Convert Markdown to clean, semantic HTML with our free online converter. Support for GitHub Flavored Markdown, syntax highlighting, and more." 
        />
        <style>{customCss}</style>
      </Helmet>

      <MainLayout>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Markdown to HTML Converter
            </h1>
            <p className="text-lg text-gray-600">
              Convert your Markdown to clean, semantic HTML instantly
            </p>
          </div>

          <div className="mb-8">
            <Toolbar
              onFileUpload={handleFileUpload}
              onCopyHtml={handleCopyHtml}
              onDownloadHtml={handleDownloadHtml}
              onTogglePreviewMode={() => setPreviewMode(prev => prev === 'split' ? 'preview' : 'split')}
              onToggleCustomCss={() => setShowCustomCss(prev => !prev)}
              onToggleRawHtml={() => setShowRawHtml(prev => !prev)}
              previewMode={previewMode}
              showCustomCss={showCustomCss}
              showRawHtml={showRawHtml}
              copied={copied}
            />
          </div>

          <div className="mb-12">
            <div 
              className="grid gap-6"
              style={{
                gridTemplateColumns: showCustomCss 
                  ? '1fr 1fr 1fr' 
                  : showRawHtml 
                    ? '1fr 1fr' 
                    : previewMode === 'split' 
                      ? '1fr 1fr' 
                      : '1fr',
                height: '600px'
              }}
            >
              {previewMode === 'split' && (
                <Editor
                  value={markdown}
                  onChange={setMarkdown}
                  onPaste={handlePaste}
                  label="Markdown Input"
                  icon={<Code2 className="w-4 h-4 mr-2 text-gray-500" />}
                  placeholder="Type or paste your Markdown here..."
                />
              )}

              {showCustomCss && (
                <Editor
                  value={customCss}
                  onChange={setCustomCss}
                  onPaste={() => {}}
                  label="Custom CSS"
                  icon={<Palette className="w-4 h-4 mr-2 text-gray-500" />}
                  placeholder="Add your custom CSS here..."
                />
              )}

              {showRawHtml && <RawHtml html={html} />}

              <Preview html={html} />
            </div>
          </div>

          <MarkdownConverterContent />
        </div>
      </MainLayout>
    </>
  );
};

export default MarkdownConverter;