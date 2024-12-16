'use client';

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import PlayerOfTheWeekHome from "@/components/PlayerOfTheWeekHome";
import EventsHome from "@/components/EventsHome";
import ForumRecent from "@/components/ForumRecent";
import RankingPreview from "@/components/RankingPreview";
import Footer from "@/components/Footer";
import Logo from "@/components/Logo";

interface Post {
    id: number;
    title: string;
    topic: string;
}

export default function Page() {
    // used next router for button to go back to previous page
    const router = useRouter();

    // extract pathname from slug
    const pathname = usePathname();

    // filter out the '/' from the path to use to fetch the post
    const slug = pathname.split('/').pop();

    const [post, setPosts] = useState<Post | null>(null);

    useEffect(() => {
      const fetchPosts = async () => {
        const { data, error } = await supabase
          .from("forumposts")
          .select("*")
          // sorted by the ID
          .eq('id', slug)
          .single()

        if (error) {
          console.log("Error fetching post", error.message);
          return;
        }

        setPosts(data);
      };

      fetchPosts();
    }, [slug]);

  return (
    <>
      <div className="flex justify-center bg-zinc-800">
        <div className="bg-sky-100 space-y-8 md:px-16 px-8 md:py-10 py-8 md:w-[1300px] w-full h-fit">
          <Logo src='../mntvlogo.svg' />

          <div className="flex md:justify-between md:flex-nowrap flex-wrap gap-x-8 gap-y-8">
            <div className="md:flex hidden flex-col gap-y-8">
              <PlayerOfTheWeekHome />
              <RankingPreview />
            </div>

            <div className="flex flex-col gap-y-8">
              <EventsHome />

              {/* main content below */}
              <div className="relative bg-white pt-4 md:w-[609px] w-full h-fit rounded-md">
                <p className="text-zinc-600 px-6">POST AUTHOR / DATETIME</p>
                <button onClick={() => router.back()} className='absolute top-4 right-4 bg-zinc-200 px-2 rounded-md text-zinc-700 hover:text-zinc-950 transition-all'>Go Back</button>

                <section className="px-6 py-4 flex flex-col gap-y-2">
                  <h4 className='text-xl font-medium'>{post?.title}</h4>

                  <p className=''>{post?.topic}</p>
                </section>

                <div className='text-zinc-800 px-6 pt-4 pb-8 bg-zinc-50 rounded-b-md'>
                    Comments:
                    <br></br>will be implemented soon
                    <br></br>{pathname}
                </div>
              </div>
            </div>

            <ForumRecent />
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}