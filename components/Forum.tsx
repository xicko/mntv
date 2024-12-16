'use client';

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useForumModal } from "@/components/ForumModalContext";
import { supabase } from "@/lib/supabase";

//const posts = [
//    {subject: 'Mongolz tier 1?', commentnum: '21'},
//    {subject: 'bLitz and aleksiB', commentnum: '15'},
//    {subject: 'techno my goat', commentnum: '7'},
//    {subject: 'ulaanbaatar major when?', commentnum: '36'},
//]

interface Post {
  id: number;
  title: string;
}

const Forum: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
      .from('forumposts')
      .select('*')
      .order('id', { ascending:false });

      if (error) {
        console.error('Error fetching posts:', error.message);
        return;
      }

      setPosts(data);
    };

    fetchPosts();
  }, []);

  const { toggleModal } = useForumModal();
  return (
    <div className=''>
      <div className='bg-white pt-4 md:w-[609px] h-fit rounded-md'>
        <div className='flex flex-row justify-between'>
            <p className='text-zinc-600 px-6'>Forum</p>
            <button onClick={toggleModal} className='flex justify-end mx-4 px-2 text-center text-white hover:text-black bg-cyan-700 hover:bg-zinc-300 transition rounded-md'>New Topic</button>
        </div>

        {posts.map(( post ) => (
            <Link href={`/forum/` + post.id} className='flex flex-col px-6 hover:bg-slate-200 transition font-semibold border-b-[1px] border-zinc-200 py-4' key={post.id}>{post.title}</Link>
        ))}
      </div>
    </div>
  )
}

export default Forum;
