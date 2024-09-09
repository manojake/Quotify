'use client'; // Optional if you need client-side features

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';

interface Quote {
  quote: string;
  author: string;
}

export default function QuotePage() {
  const params = useParams();
  const { id } = params ?? {};
  const [quoteData, setQuoteData] = useState<Quote | null>(null);

  useEffect(() => {
    if (id) {
      fetch(`/api/quote/${id}`)
        .then(response => response.json())
        .then(data => setQuoteData(data))
        .catch(error => console.error('Error fetching quote:', error));
    }
  }, [id]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-8">Quote Details</h1>
      {quoteData ? (
        <div className="text-lg text-center">
          <p className="italic mb-4">"{quoteData.quote}"</p>
          <p>- {quoteData.author}</p>
        </div>
      ) : (
        <p className="text-lg">Loading...</p>
      )}
    </div>
  );
}
