import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="flex text-xl p-3 bg-slate-600">
      
        <div>
          <Link href="/" className="flex text-3xl p-2 font-extrabold">
            <h1>PicUp Website</h1>
          </Link>
        </div>

        <div className="">
          <Link href="/headers/upload" className="underline-animation">
            Upload
          </Link>
          <Link href="/headers/saved" className="underline-animation">
            Saved
          </Link>
        </div>
     
        <div>
          <Link href="/headers/profile" className="underline-animation">
            Profile
          </Link>
        </div>
     
    </header>
  );
};

export default Header;
