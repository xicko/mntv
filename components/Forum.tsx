'use client';

import React from 'react'
import Link from 'next/link'
import { useForumModal } from "@/components/ForumModalContext";

const posts = [
    {subject: 'Mongolz tier 1?', commentnum: '21'},
    {subject: 'bLitz and aleksiB', commentnum: '15'},
    {subject: 'techno my goat', commentnum: '7'},
    {subject: 'ulaanbaatar major when?', commentnum: '36'},
]

const Forum: React.FC = () => {
  const { toggleModal } = useForumModal();
  return (
    <div className=''>
      <div className='bg-white pt-4 md:w-[609px] h-fit rounded-md'>
        <div className='flex flex-row justify-between'>
            <p className='text-zinc-600 px-6'>Forum</p>
            <button onClick={toggleModal} className='flex justify-end mx-4 px-2 text-center text-white hover:text-black bg-cyan-700 hover:bg-zinc-300 transition rounded-md'>New Topic</button>
        </div>

        {posts.map((posts,index) => (
            <Link href='' className='flex flex-col px-6 hover:bg-slate-200 transition font-semibold border-b-[1px] border-zinc-200 py-4' key={index}>{posts.subject}</Link>
        ))}
      </div>
    </div>
  )
}

export default Forum
