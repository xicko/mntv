import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const events = [
    {name:'PerfectWorld Shanghai 2024', link: '/events/', date: 'Nov 2024', datenum: '2024-11', image: '/events/PWShanghai2024.webp'},
    {name:'PGL Ulaanbaatar Invitational', link: '/events/', date: 'Jan 2025', datenum: '2025-01', image: '/events/pglulaanbaatar.webp'},
    {name:'Blast Pro Series Darkhan 2025', link: '/events/', date: 'Jan 2025', datenum: '2025-01', image: '/events/blastpro.jpg'},
    {name:'StarLadder Erdenet 2025', link: '/events/', date: 'Feb 2025', datenum: '2025-02', image: '/events/starladder.jpg'},
    {name:'MESA Nomadic Masters Spring 2025', link: '/events/', date: 'Feb 2025', datenum: '2025-02', image: '/events/mesanomadic2024.webp'},
    {name:'Yalla Compass Abu Dhabi 2025', link: '/events/', date: 'Feb 2025', datenum: '2025-02', image: '/events/yallacompass2024.jpg'},
]

const Events = () => {
  return (
    <div className='md:w-[609px] w-fit'>
      <div className='bg-white pt-4 w-full h-fit rounded-md'>
        <p className='text-zinc-600 px-6'>Events</p>

        {events.map((event,index) => (
            <div className=''>
                <p className='text-zinc-600 px-6 pt-8 pb-2'>{events[index].date}</p>
                
                <Link href={events[index].link} className='flex flex-col px-0 hover:bg-slate-200 transition font-semibold border-b-[0px] border-zinc-200' key={index}>
                    <Image src={events[index].image} style={{objectFit: "cover"}} alt={'Event Thumbnail'} width={1000} height={1000} draggable={false} className='w-fit h-[150px]'/>
                    
                    <div className='px-6 py-4'>{events[index].name}</div>
                </Link>
                
            </div>
        ))}
      </div>
    </div>
  )
}

export default Events
