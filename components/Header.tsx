import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="p-3 flex items-center bg-slate-600 mb-20">
      <div>
        <h1 className="text-3xl p-2 font-extrabold">PicUp Website</h1>
      </div>

      <div className="text-xl space-x-10 p-3 ml-auto">
        <Link href="/headers/your-photos" className="underline-animation hover:font-medium">
          Your Photos
        </Link>
        <Link href="/headers/new-ones" className="underline-animation hover:font-medium">
          New Ones
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
