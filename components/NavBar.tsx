//"use client";

import Link from "next/link";
import React from "react";

const TabStyle = "py-4 md:px-8 px-4 hover:bg-slate-300 transition duration-300";

const NavBar = () => {
  return (
    <>
      <div className="fixed w-full top-0 left-0 right-0 z-50 bg-white text-black">
        <div className="flex md:justify-center justify-normal flex-wrap text-xl">
          <Link className={TabStyle} href={"/"}>
            News
          </Link>
          <Link className={TabStyle} href={"/matches"}>
            Matches
          </Link>
          <Link className={TabStyle} href={"/matches"}>
            Events
          </Link>
          <Link className={TabStyle} href={"/ranking"}>
            Ranking
          </Link>
          <Link className={TabStyle} href={"/statistics"}>
            Statistics
          </Link>
          <Link className={TabStyle} href={"/teams"}>
            Teams
          </Link>
          <Link className={TabStyle} href={"/forum"}>
            Forum
          </Link>
        </div>
      </div>

      <div className='md:h-[60px] h-[120px]'></div>
    </>
  );
};

export default NavBar;
