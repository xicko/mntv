import Link from 'next/link';
import React from 'react';
import { isMobile } from "../utils/isMobile";
import { headers } from 'next/headers';

let TabStyle = 'py-4 px-6 hover:bg-sky-300 transition duration-300';

const NavBarAlt = async () => {
    const userAgent = (await headers()).get("user-agent") || "";
    const mobileCheck = isMobile(userAgent);

  return (
    <>
        <div hidden={mobileCheck} className='fixed top-0 left-0 right-0 z-50 bg-sky-200'>
            <div className='flex justify-center text-xl'>
                <Link className={TabStyle} href={'/'}>News</Link>
                <Link className={TabStyle} href={'/matches'}>Matches</Link>
                <Link className={TabStyle} href={'/matches'}>Events</Link>
                <Link className={TabStyle} href={'/ranking'}>Ranking</Link>
                <Link className={TabStyle} href={'/statistics'}>Statistics</Link>
                <Link className={TabStyle} href={'/teams'}>Teams</Link>
                <Link className={TabStyle} href={'/forum'}>Forum</Link>
            </div>
        </div>

        <div hidden={!mobileCheck} className='fixed top-0 left-0 right-0 z-50 bg-pink-200'>
            <div className='flex justify-center text-xl'>
                <Link className={TabStyle} href={'/'}>News</Link>
                <Link className={TabStyle} href={'/matches'}>Matches</Link>
                <Link className={TabStyle} href={'/matches'}>Events</Link>
                <Link className={TabStyle} href={'/ranking'}>Ranking</Link>
                <Link className={TabStyle} href={'/statistics'}>Statistics</Link>
                <Link className={TabStyle} href={'/teams'}>Teams</Link>
                <Link className={TabStyle} href={'/forum'}>Forum</Link>
            </div>
        </div>
    </>
  )
}

export default NavBarAlt;