
import React, { useState, useCallback } from 'react';
import { generateDescription } from '../services/geminiService';
import Spinner from './Spinner';

const DescriptionGenerator: React.FC = () => {
  const [productName, setProductName] = useState('');
  const [keywords, setKeywords] = useState('');
  const [generatedDesc, setGeneratedDesc] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = useCallback(async () => {
    if (!productName.trim()) {
      setError('Product name is required.');
      return;
    }
    setIsLoading(true);
    setError('');
    setGeneratedDesc('');
    try {
      const description = await generateDescription(productName, keywords);
      setGeneratedDesc(description);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred.';
      setError(`Failed to generate: ${errorMessage}`);
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [productName, keywords]);

  return (
    <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 max-w-3xl mx-auto">
      <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">AI Product Description Generator</h2>
          <p className="text-gray-500 mt-2">Powered by Gemini API</p>
      </div>
      <div className="space-y-4">
        <div>
          <label htmlFor="productName" className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
          <input
            id="productName"
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="e.g., Wireless Noise-Cancelling Headphones"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="keywords" className="block text-sm font-medium text-gray-700 mb-1">Keywords (comma separated)</label>
          <input
            id="keywords"
            type="text"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            placeholder="e.g., long battery life, comfortable, bluetooth 5.0"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <button
            onClick={handleGenerate}
            disabled={isLoading}
            className="w-full flex justify-center items-center bg-indigo-600 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors disabled:bg-indigo-300"
          >
            {isLoading && <Spinner />}
            {isLoading ? 'Generating...' : 'Generate Description'}
          </button>
        </div>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
      </div>
      {generatedDesc && (
        <div className="mt-8 border-t pt-6">
          <h3 className="text-xl font-semibold mb-2 text-gray-700">Generated Description:</h3>
          <div className="bg-gray-50 p-4 rounded-md text-gray-800 whitespace-pre-wrap">
            {generatedDesc}
          </div>
        </div>
      )}
    </div>
  );
};

export default DescriptionGenerator;
