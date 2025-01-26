import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="p-3 flex items-center bg-slate-600">
      <div>
        <Link href="/" className="flex text-3xl p-2 font-extrabold">
          <h1>PicUp Website</h1>
        </Link>
      </div>

      <div className="text-xl space-x-10 p-3 ml-auto">
        <Link href="/headers/upload" className="underline-animation hover:font-medium">
          Upload
        </Link>
        <Link href="/headers/your-photos" className="underline-animation hover:font-medium">
          Your photos
        </Link>
        <Link href="/headers/about" className="underline-animation hover:font-medium">
          About
        </Link>
        <Link href="/headers/saved" className="underline-animation hover:font-medium">
          Saved
        </Link>
      </div>
    </header>
  );
};

export default Header;
