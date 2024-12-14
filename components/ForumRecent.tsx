'use client';

import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useForumModal } from "@/components/ForumModalContext";
import { supabase } from "@/lib/supabase";

interface Post {
  id: number;
  title: string;
}

const ForumRecent: React.FC = () => {
  const { toggleModal } = useForumModal();
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
      const fetchPosts = async () => {
        const { data, error } = await supabase
        .from('forumposts')
        .select('*')
        .order('id', { ascending: false });
  
        if (error) {
          console.error('Error fetching posts:', error.message);
          return;
        }
  
        setPosts(data);
      };
  
      fetchPosts();
    }, []);

  return (
    <>
      <div className='relative md:w-[250px] w-full bg-white rounded-md h-[600px] overflow-hidden'>
        <p className='text-lg font-semibold px-4 bg-cyan-700 py-2 text-white'>Recent Activity</p>

        <div className='flex flex-col bg-white'>
            {posts.map(( post ) => (
                <Link href='' key={post.id} className='flex justify-between hover:bg-slate-200 transition duration-150 py-2 px-4 border-zinc-400 border-b-[1px]'>
                    <span className='text-left'>{post.title}</span>
                    <span className='text-right'>N/A</span>
                </Link>
            ))}
        </div>

        <div className='absolute bottom-4 right-4'><button onClick={toggleModal}><Image src={'/newpost.svg'} alt={'New Post'} width={50} height={50} draggable={false}/></button></div>
      </div>
    </>
  )
}

export default ForumRecent
