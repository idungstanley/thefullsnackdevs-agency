import React from 'react';
import Link from 'next/link';
import Button from './components/button/Button';

const NotFound: React.FC = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center p-4">
      <h1 className="text-9xl font-bold gradient-text mb-4">404</h1>
      <h2 className="text-4xl font-bold mb-6">Page Not Found</h2>
      <p className="text-gray-400 mb-8 max-w-md">The page you are looking for doesn&apos;t exist or has been moved.</p>
      <Link href="/">
        <Button
          label="Back to Home"
          width="w-fit"
          buttonStyle="custom"
          height="h-[45px]"
          labelSize="text-[15px] font-lg rounded-md"
          customClasses="cursor-pointer text-white bg-[#684DF4] px-2 rounded-full transition-transform duration-300 ease-in-out hover:scale-110 hover:opacity-90"
        />
      </Link>
    </main>
  );
};

export default NotFound;
