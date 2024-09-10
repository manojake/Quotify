import { NextResponse } from 'next/server';

const quotes = [
  { id: 1, quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
    { id: 2, quote: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { id: 3, quote: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
];

export async function GET() {
  return NextResponse.json(quotes);
}