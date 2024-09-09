'use client';

import { useState } from 'react';

interface Quote {
  quote: string;
  author: string;
}

export default function Home() {
  const [quoteData, setQuoteData] = useState<Quote | null>(null);

  const fetchQuote = async () => {
    const response = await fetch('/api/randomQuote');
    const data: Quote = await response.json();
    setQuoteData(data);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-8">Quotify - Random Quote Generator</h1>
      <div className="italic text-xl text-center max-w-xl mb-6">
        {quoteData ? `"${quoteData.quote}"` : 'Click the button to get a random quote!'}
      </div>
      {quoteData && (
        <div className="text-lg text-gray-700 mb-6">- {quoteData.author}</div>
      )}
      <button
        onClick={fetchQuote}
        className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition duration-200"
      >
        Get Quote
      </button>
    </div>
  );
}
