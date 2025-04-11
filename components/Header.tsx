"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/public/logo/logo.png';
import { usePathname } from 'next/navigation';

const Header: React.FC = () => {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  if (!isMounted) return null;
  
  if (pathname === "/" || pathname === "/login") return null;
  

  return (
    <header className="flex text-xl items-center justify-between p-4 bg-slate-900 text-white">
      <div className="flex text-3xl font-extrabold group relative overflow-hidden">
        <Link href="/home" className="flex">
          <Image src={Logo} alt="logo" className="w-[60px] h-8 mr-3" />
          <h1 className="transform translate-x-[-100%] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
            PicUp Website
          </h1>
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
