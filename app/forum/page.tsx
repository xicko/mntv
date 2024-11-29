'use client';

import Image from "next/image";
import PlayerOfTheWeekHome from "@/components/PlayerOfTheWeekHome";
// import EventsHome from "@/components/EventsHome";
import ForumRecent from "@/components/ForumRecent";
import RankingPreview from "@/components/RankingPreview";
import Footer from "@/components/Footer";
import Forum from "@/components/Forum";
import { useState } from 'react';

export default function Page() {
  const [visible, setVisible] = useState(false);

  function setVisibleHandler() {
    setVisible(!visible);
  }

  return (
    <>
      <div className='flex justify-center bg-zinc-800'>
        <div className='bg-sky-100 space-y-8 md:px-16 px-8 md:py-10 py-8 md:w-[1300px] w-full h-fit'>
          <div className='md:w-[400px] w-full h-fit'>
            <Image src={'mntvlogo.svg'} alt={'Logo'} width={600} height={600} className='' draggable={false}/>
          </div>

          <div className='flex md:justify-between md:flex-nowrap flex-wrap gap-x-8 gap-y-8'>
            <div className='md:flex hidden flex-col gap-y-8'>
              <PlayerOfTheWeekHome />
              <RankingPreview />
            </div>

            <div className='flex flex-col gap-y-8'>
              
              
              {/* main content below */}
              <Forum setVisible={setVisibleHandler} visible={false} />
              <div hidden={!visible}>
                <div className='bg-white fixed w-[600px] m-20 left-0 right-0 bottom-0 z-50'>
                  <input type="text" placeholder="Title" className="mt-4 w-full text-black rounded-md p-2" />
                  <textarea placeholder="Content" className="mt-4 w-full text-black rounded-md p-2" />
                  <button className="mt-4 w-full text-white font-semibold rounded-md p-2 bg-cyan-700 hover:bg-zinc-300 transition">Post</button>
                </div>
              </div>
            </div>
           
            <ForumRecent setVisible={setVisibleHandler} visible={false} />
          </div>

          <Footer />
        </div>

        

      </div>
    </>
  );
}