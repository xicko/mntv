import Image from "next/image";
import PlayerOfTheWeekHome from "@/components/PlayerOfTheWeekHome";
import EventsHome from "@/components/EventsHome";
import ForumRecent from "@/components/ForumRecent";
import RankingPreview from "@/components/RankingPreview";
import Footer from "@/components/Footer";
import Matches from "@/components/Matches";

export default function index() {
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
              <EventsHome />
              
              {/* main content below */}
              <Matches />
            </div>
           
            <div className='md:flex hidden'>
              <ForumRecent />
            </div>
          </div>

          <Footer />
        </div>

        

      </div>
    </>
  );
}