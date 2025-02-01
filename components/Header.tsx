import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="flex text-xl items-center justify-between p-5 bg-slate-900 text-white">
      <div className="flex text-3xl font-extrabold hover:scale-105 transition-all duration-300">
        <Link href="/">
          <h1>PicUp Website</h1>
        </Link>
      </div>

      <div className="flex space-x-10 absolute left-1/2 -translate-x-1/2">
        <Link href="/headers/upload" className="underline-animation">
          Upload
        </Link>
        <Link href="/headers/saved" className="underline-animation">
          Saved
        </Link>
      </div>

      <div className="flex text-2xl font-bold">
        <Link href="/headers/profile" className="underline-animation">
          Profile
        </Link>
      </div>
    </header>
  );
};

export default Header;
