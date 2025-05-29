'use client';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Button from '../button/Button';
import { FaSearch } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import { navItems } from '@/app/constants';

const DesktopNav = () => {
  const pathname = usePathname();

  return (
    <div className="lg:flex items-center justify-between px-10 w-full hidden text-white">
      <Link href="/">
        <div className="items-center justify-center w-full flex hover:text-[#684DF4]">
          <Image src="/iconpurple.svg" alt="logo" width={500} height={500} className="h-[50px] w-[60px]" />
          <Image src="/logotext.svg" alt="logo" width={500} height={500} className="h-[50px] w-[60px]" />
        </div>
      </Link>
      <ul className="flex space-x-6">
        {navItems.map((item, index) => (
          <li key={index} className="relative">
            <Link
                href={item.path}
                className={`text-white font-medium hover:text-[#684DF4] transition-all relative px-2 py-1 ${
                  pathname === item.path ? 'border border-[#684DF4] rounded-md' : ''
                }`}
              >
                {item.label}
              </Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-2 md:gap-4">
        <div className="flex items-center gap-2 md:gap-5">
          <div className="flex items-center justify-end w-full gap-5">
            <FaSearch className="transition-transform hover:text-[#684DF4] duration-300 ease-in-out hover:scale-110 cursor-pointer hover:shadow-md hover:opacity-90 text-white text-xl" />
            <Link href="/auth/login">
              <Button
                label="Login"
                width="w-[120px]"
                buttonStyle="custom"
                height="h-[32px]"
                labelSize="text-[15px] font-lg"
                customClasses="cursor-pointer text-[#080F1C] border border-[#684DF4] hover:text-white hover:bg-[#684DF4] bg-white rounded-full transition-transform duration-300 ease-in-out hover:scale-110 hover:opacity-90"
              />
            </Link>
            <Link href="/auth/enroll">
              <Button
                label="Enroll now"
                width="w-fit"
                buttonStyle="custom"
                height="h-[32px]"
                labelSize="text-[15px] font-lg"
                customClasses="text-[#684DF4] hover:text-white hover:bg-[#684DF4] cursor-pointer border border-[#684DF4] rounded-full transition-transform duration-300 ease-in-out hover:scale-110 hover:opacity-90"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopNav;
