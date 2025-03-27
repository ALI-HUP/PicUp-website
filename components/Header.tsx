import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/public/logo/Untitled-2.png';

const Header: React.FC = () => {
  return (
    <header className="flex text-xl items-center justify-between p-3 bg-slate-900 text-white">
      <div className="flex text-3xl font-extrabold hover:scale-105 transition-all duration-300">
        <Image src={Logo} alt='oops' className='w-[60px] h-8 mr-3'/>
        <Link href="/">
          <h1>PicUp Website</h1>
        </Link>
      </div>

      <div className="flex space-x-10 absolute left-1/2 -translate-x-1/2">
        <Link href="/header/upload" className="underline-animation">
          Upload
        </Link>
        <Link href="/header/saved" className="underline-animation">
          Saved
        </Link>
      </div>

      <div className="flex text-2xl font-bold">
        <Link href="/header/profile" className="underline-animation">
          Profile
        </Link>
      </div>
    </header>
  );
};

export default Header;
