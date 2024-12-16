import PlayerOfTheWeekHome from "@/components/PlayerOfTheWeekHome";
import EventsHome from "@/components/EventsHome";
import ForumRecent from "@/components/ForumRecent";
import RankingPreview from "@/components/RankingPreview";
import NewsHome from "@/components/NewsHome";
import Footer from "@/components/Footer";
import Logo from "@/components/Logo";

export default function Home() {
  return (
    <>
      <main className='flex justify-center bg-zinc-800'>
        <div className='bg-sky-100 space-y-8 md:px-16 px-8 md:py-10 py-8 md:w-[1300px] w-full h-fit'>
          <Logo src='mntvlogo.svg' />

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
    </>
  );
}