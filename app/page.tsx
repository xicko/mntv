import Image from "next/image";
import PlayerOfTheWeekHome from "@/components/PlayerOfTheWeekHome";
import EventsHome from "@/components/EventsHome";
import ForumRecent from "@/components/ForumRecent";
import RankingPreview from "@/components/RankingPreview";
import NewsHome from "@/components/NewsHome";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className='scroll-smooth'>
      <main className='flex justify-center bg-zinc-800'>
        <div className='bg-sky-100 text-black space-y-8 px-16 py-10 md:w-[1300px] w-full h-fit'>
          <div className='md:w-[400px] w-full h-fit'>
            <Image src={'mntvlogo.svg'} alt={'Logo'} width={600} height={600} className='' draggable={false}/>
          </div>

          <div className='flex md:justify-between md:flex-nowrap flex-wrap gap-x-8 gap-y-8'>
            <div className='flex flex-col gap-y-8'>
              <PlayerOfTheWeekHome />
              <RankingPreview />
            </div>

            <div className='flex flex-col gap-y-8'>
              <EventsHome />
              <NewsHome />
            </div>
           
            <ForumRecent />
          </div>

          <Footer />
        </div>

        

      </main>
    </div>
  );
}