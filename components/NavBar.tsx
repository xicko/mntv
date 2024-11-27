"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const pagesTop = [
  { name: "News", href: "/" },
  { name: "Matches", href: "/matches" },
  { name: "Events", href: "/events" },
];

const pagesHidden = [
  { name: "Ranking", href: "/ranking" },
  { name: "Stats", href: "/stats" },
  { name: "Teams", href: "/teams" },
  { name: "Forum", href: "/forum" },
];

const TabStyle = "py-4 md:px-8 px-4 hover:bg-slate-300 transition duration-300";

const NavBar = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isMobile, setIsMobile] = useState(false);
  const [visible, setVisible] = useState(false);

    // Check the screen size when the component mounts
    useEffect(() => {
      const handleResize = () => {
        const isMobileView = window.innerWidth <= 768; // Example mobile breakpoint
        setIsMobile(isMobileView);
        setVisible(!isMobileView); // Default: true for desktop, false for mobile
      };
  
      // Run on initial mount
      handleResize();
  
      // Add resize event listener
      window.addEventListener('resize', handleResize);
  
      return () => {
        // Clean up listener on unmount
        window.removeEventListener('resize', handleResize);
      };
    }, []);

  function setVisibleHandler() {
    setVisible(!visible);
  }

  return (
    <>
      <div className="fixed w-full flex md:justify-center md:flex-row flex-col top-0 left-0 right-0 z-50 bg-white text-black">
        <div className='flex md:justify-end justify-between'>
          <div className="flex md:justify-center md:w-full justify-normal md:flex-nowrap flex-wrap text-xl">
            {pagesTop.map((page, index) => (
              <Link className={TabStyle} href={page.href} key={index}>
                {page.name}
              </Link>
            ))}
          </div>

          <button className='pr-4 md:hidden' onClick={setVisibleHandler}>
            <Image
              src={"/burger.png"}
              alt={""}
              width={36}
              height={36}
              className="aspect-square mt-1 w-9 h-9"
              draggable={false}
            />
          </button>
        </div>

        <div className="flex md:w-fit w-[90%] justify-normal flex-wrap text-xl">
          {pagesHidden.map((page, index) => (
            <Link
              hidden={!visible}
              className={TabStyle}
              href={page.href}
              key={index}
            >
              {page.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="h-[60px]"></div>
    </>
  );
};

export default NavBar;
