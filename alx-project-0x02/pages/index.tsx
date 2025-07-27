import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>ALX Project - Next.js Setup</title>
        <meta name="description" content="Next.js project with TypeScript and Tailwind CSS" />
      </Head>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Welcome to ALX Project
          </h1>
          <p className="text-gray-600 mb-6">
            A Next.js project demonstrating routing, components, and API integration.
          </p>
          <Link 
            href="/home"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </>
  );
}