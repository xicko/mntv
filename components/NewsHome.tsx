import Link from 'next/link'
import React from 'react'

const news = [
    {subject: 'TheMongolz, Rare Atom, FlyQuest qualify to Major Opening Stage', commentnum: '15'},
    {subject: 'Falcons bomb out of EU RMR', commentnum: '11'},
    {subject: 'Drillas sent home', commentnum: '4'},
    {subject: 'New update brings back de_train', commentnum: '42'},
]

const NewsHome = () => {
  return (
    <>
      <div className='bg-white pt-4 w-full h-fit rounded-md'>
        <p className='text-zinc-600 px-6'>Today&apos;s News</p>

        {news.map((news,index) => (
            <Link href='' className='flex flex-col px-6 hover:bg-slate-200 font-semibold border-b-[1px] border-zinc-200 py-4' key={index}>{news.subject}</Link>
        ))}
      </div>



      <div className='bg-white pt-4 w-full h-fit rounded-md'>
        <p className='text-zinc-600 px-6'>Older News</p>

        {news.map((news,index) => (
            <Link href='' className='flex flex-col px-6 hover:bg-slate-200 transition font-semibold border-b-[1px] border-zinc-200 py-4' key={index}>{news.subject}</Link>
        ))}

        <Link className='flex justify-center py-2 text-center text-sky-800 hover:bg-sky-200 transition rounded-b-md' href={''}>More news</Link>
      </div>
    </>
  )
}

export default NewsHome
