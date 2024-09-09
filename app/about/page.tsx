// app/about/page.tsx

'use client'; // Optional if you need client-side features

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-8">About Us</h1>
      <p className="text-lg">Welcome to the About page of Quotify!</p>
    </div>
  );
}
