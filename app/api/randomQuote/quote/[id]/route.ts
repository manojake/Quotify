import { NextResponse } from 'next/server';

const quotes = [
  { id: '1', quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { id: '2', quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
  { id: '3', quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
];

export async function GET(req: Request) {
  const url = new URL(req.url);
  const id = url.pathname.split('/').pop();
  const quote = quotes.find(q => q.id === id);

  if (quote) {
    return NextResponse.json(quote);
  } else {
    return NextResponse.json({ message: 'Quote not found' }, { status: 404 });
  }
}
