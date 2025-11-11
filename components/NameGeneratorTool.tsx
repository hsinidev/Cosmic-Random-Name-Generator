import React, { useState } from 'react';
import { generateNames, Gender, Format } from '../utils/NameData.ts';

const NameGeneratorTool: React.FC = () => {
  const [quantity, setQuantity] = useState<number>(10);
  const [gender, setGender] = useState<Gender>('Any');
  const [format, setFormat] = useState<Format>('Full Name');
  const [generatedNames, setGeneratedNames] = useState<string[]>([]);
  const [copied, setCopied] = useState<boolean>(false);

  const handleGenerate = () => {
    const names = generateNames(quantity, gender, format);
    setGeneratedNames(names);
    setCopied(false);
  };

  const handleCopy = () => {
    if (generatedNames.length > 0) {
      navigator.clipboard.writeText(generatedNames.join('\n'));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="generator" className="w-full max-w-4xl mx-auto py-12 px-4">
      <div className="bg-gray-900 bg-opacity-60 backdrop-blur-md rounded-2xl shadow-2xl p-6 md:p-8 border border-gray-700">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Cosmic Name Generator
            </span>
          </h1>
          <p className="text-lg text-gray-300 mt-2">Craft the perfect names for your universe.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Quantity */}
          <div>
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-200 mb-2">Quantity</label>
            <input
              type="number"
              id="quantity"
              min="1"
              max="50"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, Math.min(50, parseInt(e.target.value, 10))))}
              className="w-full bg-gray-800 border border-gray-600 rounded-md py-2 px-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-2">Gender</label>
            <div className="flex items-center space-x-2 bg-gray-800 border border-gray-600 rounded-md p-1">
              {(['Any', 'Male', 'Female'] as Gender[]).map((g) => (
                <button
                  key={g}
                  onClick={() => setGender(g)}
                  className={`flex-1 text-center text-sm py-1.5 rounded-md transition-colors ${gender === g ? 'bg-blue-600 text-white font-semibold' : 'text-gray-300 hover:bg-gray-700'}`}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>

          {/* Format */}
          <div>
            <label htmlFor="format" className="block text-sm font-medium text-gray-200 mb-2">Format</label>
            <select
              id="format"
              value={format}
              onChange={(e) => setFormat(e.target.value as Format)}
              className="w-full bg-gray-800 border border-gray-600 rounded-md py-2 px-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            >
              <option>Full Name</option>
              <option>First Name Only</option>
              <option>Last Name Only</option>
            </select>
          </div>
        </div>
        
        <div className="text-center mb-8">
            <button
            onClick={handleGenerate}
            className="w-full md:w-auto bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-12 rounded-lg text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
            Generate Names
            </button>
        </div>

        {generatedNames.length > 0 && (
          <div className="relative">
            <textarea
              readOnly
              value={generatedNames.join('\n')}
              className="w-full h-64 bg-gray-900 border border-gray-700 rounded-lg p-4 text-gray-200 font-mono text-sm resize-none focus:outline-none"
              placeholder="Your generated names will appear here..."
            />
            <button
              onClick={handleCopy}
              className="absolute top-3 right-3 bg-gray-700 text-white py-1 px-3 rounded-md text-xs hover:bg-gray-600 transition"
            >
              {copied ? 'Copied!' : 'Copy List'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default NameGeneratorTool;