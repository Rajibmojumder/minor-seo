import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import MainLayout from '../components/layout/MainLayout';
import TextInput from '../components/CaseConverter/TextInput';
import ConversionOptions from '../components/CaseConverter/ConversionOptions';
import ConvertedText from '../components/CaseConverter/ConvertedText';
import CaseConverterContent from '../components/CaseConverter/CaseConverterContent';
import { ArrowDownUp } from 'lucide-react';

const CaseConverter: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [convertedText, setConvertedText] = useState('');
  const [selectedCase, setSelectedCase] = useState('sentence');

  const convertCase = () => {
    let result = '';

    switch (selectedCase) {
      case 'upper':
        result = inputText.toUpperCase();
        break;
      case 'lower':
        result = inputText.toLowerCase();
        break;
      case 'title':
        result = inputText.replace(/\w\S*/g, (txt) => 
          txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
        );
        break;
      case 'sentence':
        result = inputText.toLowerCase().replace(/(^\w|\.\s+\w)/g, letter => 
          letter.toUpperCase()
        );
        break;
      case 'camel':
        result = inputText.toLowerCase()
          .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
        break;
      case 'pascal':
        result = inputText.toLowerCase()
          .replace(/(^|[^a-zA-Z0-9]+)(.)/g, (m, sep, chr) => chr.toUpperCase());
        break;
      case 'snake':
        result = inputText.toLowerCase()
          .replace(/[^a-zA-Z0-9]+/g, '_')
          .replace(/(^_|_$)/g, '');
        break;
      case 'kebab':
        result = inputText.toLowerCase()
          .replace(/[^a-zA-Z0-9]+/g, '-')
          .replace(/(^-|-$)/g, '');
        break;
      case 'alternating':
        result = inputText.split('')
          .map((char, i) => i % 2 === 0 ? char.toLowerCase() : char.toUpperCase())
          .join('');
        break;
      case 'inverse':
        result = inputText.split('')
          .map(char => {
            if (/[a-zA-Z]/.test(char)) {
              return char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase();
            }
            return char;
          })
          .join('');
        break;
      default:
        result = inputText;
    }

    setConvertedText(result);
  };

  const handleClear = () => {
    setInputText('');
    setConvertedText('');
  };

  return (
    <>
      <Helmet>
        <title>Case Converter - Free Text Case Conversion Tool</title>
        <meta 
          name="description" 
          content="Convert text case online - uppercase, lowercase, title case, sentence case, camelCase, PascalCase, snake_case, kebab-case, and more. Free and easy to use." 
        />
      </Helmet>

      <MainLayout>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Case Converter
            </h1>
            <p className="text-lg text-gray-600">
              Convert text between different cases instantly
            </p>
          </div>

          {/* Tool Section */}
          <div className="space-y-6 mb-12">
            <TextInput
              text={inputText}
              setText={setInputText}
              onClear={handleClear}
            />

            <ConversionOptions
              selectedCase={selectedCase}
              onCaseChange={setSelectedCase}
            />

            <div className="flex justify-center">
              <button
                onClick={convertCase}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-8 rounded-lg flex items-center transition-all duration-200"
              >
                <ArrowDownUp className="mr-2" size={20} />
                Convert Case
              </button>
            </div>

            {convertedText && (
              <ConvertedText text={convertedText} />
            )}
          </div>

          <CaseConverterContent />
        </div>
      </MainLayout>
    </>
  );
};

export default CaseConverter;