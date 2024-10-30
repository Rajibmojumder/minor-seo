import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    host: true
  },
  preview: {
    port: 3000,
    open: true,
    host: true
  },
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': [
            'react',
            'react-dom',
            'react-router-dom',
            'react-helmet-async',
          ],
          utils: ['axios', 'dompurify', 'marked', 'diff'],
          highlight: ['highlight.js', 'react-syntax-highlighter'],
          icons: ['lucide-react'],
          plagiarism: [
            './src/components/PlagiarismChecker/ScoreDisplay.tsx',
            './src/components/PlagiarismChecker/ResultDisplay.tsx',
            './src/components/PlagiarismChecker/LoadingProgress.tsx',
            './src/components/PlagiarismChecker/CountdownTimer.tsx',
            './src/components/PlagiarismChecker/WordLimitCounter.tsx',
          ],
          grammar: [
            './src/components/GrammarChecker/ErrorDisplay.tsx',
            './src/components/GrammarChecker/TextInput.tsx',
            './src/components/GrammarChecker/GrammarCheckerContent.tsx',
          ],
          markdown: [
            './src/components/MarkdownConverter/Editor.tsx',
            './src/components/MarkdownConverter/Preview.tsx',
            './src/components/MarkdownConverter/RawHtml.tsx',
            './src/components/MarkdownConverter/Toolbar.tsx',
            './src/components/MarkdownConverter/MarkdownConverterContent.tsx',
          ],
          'word-counter': [
            './src/components/WordCounter/TextInput.tsx',
            './src/components/WordCounter/Statistics.tsx',
            './src/components/WordCounter/FileUpload.tsx',
            './src/components/WordCounter/KeywordDensity.tsx',
            './src/components/WordCounter/ReadingTime.tsx',
            './src/components/WordCounter/WordCounterContent.tsx',
          ],
          'case-converter': [
            './src/components/CaseConverter/TextInput.tsx',
            './src/components/CaseConverter/ConversionOptions.tsx',
            './src/components/CaseConverter/ConvertedText.tsx',
            './src/components/CaseConverter/CaseConverterContent.tsx',
          ],
          paraphrasing: [
            './src/components/ParaphrasingTool/TextInput.tsx',
            './src/components/ParaphrasingTool/ParaphrasedResult.tsx',
            './src/components/ParaphrasingTool/ParaphrasingOptions.tsx',
            './src/components/ParaphrasingTool/ParaphrasingContent.tsx',
          ],
        },
      },
    },
  },
});