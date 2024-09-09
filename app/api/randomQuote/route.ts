import { NextResponse } from 'next/server';

const quotes = [
  { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
  { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
];

export async function GET() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return NextResponse.json(quotes[randomIndex]);
}