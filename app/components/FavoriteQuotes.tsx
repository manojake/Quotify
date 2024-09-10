// app/components/FavoriteQuotes.tsx (Client Component)
'use client';

import React, { useState } from 'react';

interface Quote {
  id: number;
  quote: string;
  author: string;
}

interface FavoriteQuotesProps {
  quotes: Quote[];
}

const FavoriteQuotes: React.FC<FavoriteQuotesProps> = ({ quotes }) => {
  const [likedQuotes, setLikedQuotes] = useState<number[]>([]);

  const toggleLike = (id: number) => {
    setLikedQuotes((prev) =>
      prev.includes(id) ? prev.filter((quoteId) => quoteId !== id) : [...prev, id]
    );
  };

  return (
    <div>
      {quotes.map((quote) => (
        <div key={quote.id} className="mb-4 p-4 bg-gray-100 rounded">
          <p className="text-lg italic mb-2">"{quote.quote}"</p>
          <p className="text-sm text-gray-700 mb-2">- {quote.author}</p>
          <button
            className={`px-4 py-2 rounded ${likedQuotes.includes(quote.id) ? 'bg-red-500' : 'bg-blue-500'} text-white`}
            onClick={() => toggleLike(quote.id)}
          >
            {likedQuotes.includes(quote.id) ? 'Unlike' : 'Like'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default FavoriteQuotes;
