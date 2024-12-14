'use client';

import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { useForumModal } from "@/components/ForumModalContext";

const posts = [
    {subject: 'Mongolz tier 1?', commentnum: '21'},
    {subject: 'bLitz and aleksiB', commentnum: '15'},
    {subject: 'techno my goat', commentnum: '7'},
    {subject: 'ulaanbaatar major when?', commentnum: '36'},
]



const ForumRecent: React.FC = () => {
  const { toggleModal } = useForumModal();

  return (
    <>
      <div className='relative md:w-[250px] w-full bg-white rounded-md h-[600px] overflow-hidden'>
        <p className='text-lg font-semibold px-4 bg-cyan-700 py-2 text-white'>Recent Activity</p>

        <div className='flex flex-col bg-white'>
            {posts.map((post, index) => (
                <Link href='' key={index} className='flex justify-between hover:bg-slate-200 transition duration-150 py-2 px-4 border-zinc-400 border-b-[1px]'>
                    <span className='text-left'>{posts[index].subject}</span>
                    <span className='text-right'>{posts[index].commentnum}</span>
                </Link>
            ))}
        </div>

        <div className='absolute bottom-4 right-4'><button onClick={toggleModal}><Image src={'/newpost.svg'} alt={'New Post'} width={50} height={50} draggable={false}/></button></div>
      </div>
    </>
  )
}

export default ForumRecent
