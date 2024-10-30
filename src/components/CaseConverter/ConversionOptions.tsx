import React from 'react';

interface ConversionOptionsProps {
  selectedCase: string;
  onCaseChange: (caseType: string) => void;
}

const ConversionOptions: React.FC<ConversionOptionsProps> = ({
  selectedCase,
  onCaseChange
}) => {
  const caseTypes = [
    { id: 'upper', label: 'UPPERCASE', example: 'HELLO WORLD' },
    { id: 'lower', label: 'lowercase', example: 'hello world' },
    { id: 'title', label: 'Title Case', example: 'Hello World' },
    { id: 'sentence', label: 'Sentence case', example: 'Hello world' },
    { id: 'camel', label: 'camelCase', example: 'helloWorld' },
    { id: 'pascal', label: 'PascalCase', example: 'HelloWorld' },
    { id: 'snake', label: 'snake_case', example: 'hello_world' },
    { id: 'kebab', label: 'kebab-case', example: 'hello-world' },
    { id: 'alternating', label: 'aLtErNaTiNg', example: 'hElLo WoRlD' },
    { id: 'inverse', label: 'InVeRsE', example: 'hELLO wORLD' }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        Select Case Type
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {caseTypes.map((caseType) => (
          <button
            key={caseType.id}
            onClick={() => onCaseChange(caseType.id)}
            className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${
              selectedCase === caseType.id
                ? 'border-indigo-500 bg-indigo-50'
                : 'border-gray-200 hover:border-indigo-200 hover:bg-gray-50'
            }`}
          >
            <div className="font-medium text-gray-900 mb-1">
              {caseType.label}
            </div>
            <div className="text-sm text-gray-500">
              {caseType.example}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ConversionOptions;