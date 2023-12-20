"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathname=usePathname();
    return (
        <div className='mt-[30px]'>
        <ul className='list-style-none flex  gap-6 justify-center'>
          <li><Link href="/"className={`${pathname=='/'?"text-red-600":"text-black"}`}>Home</Link></li>
          <li><Link href="/Students"className={`${pathname=='/Students'?"text-red-600":"text-black"}`}>Student</Link></li>
        </ul>
        </div>
    );
};

export default Navbar;