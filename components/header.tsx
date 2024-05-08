"use client";

import React from 'react';
import { motion, useMotionValue, useTransform } from "framer-motion";
import { links } from "@/lib/data";
import Link from 'next/link';

function Header() {
  const headerY = useMotionValue(-100);
  const headerOpacity = useTransform(headerY, [-100, 0], [0, 1]);

  const linkY = useMotionValue(-100);
  const linkOpacity = useTransform(linkY, [-100, 0], [0, 1]);

  return (
    <header className='z-[999] relative'>
      <motion.div
        className='fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full'
        style={{ y: headerY, x: "-50%", opacity: headerOpacity }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      />

      <nav className='fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0'>
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => {
            return (
              <motion.li
                key={link.hash}
                className="h-3/4 flex items-center justify-center relative"
                style={{ y: linkY, opacity: linkOpacity }}
                animate={{ y: 0, opacity: 1 }}
    
              >
                <Link className="flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300" href={link.hash}>
                  {link.name}
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default Header;