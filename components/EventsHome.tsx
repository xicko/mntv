import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const buttonStyle = 'w-1/2 hover:bg-sky-800 self-center py-[11px] transition duration-300'

const EventsHome = () => {
  return (
    <>
      <div className='relative h-[200px] max-w-fit w-fit bg-cyan-950 rounded-md'>
        <Image src={'/events/PWShanghai2024.webp'} style={{objectFit: "cover"}} alt={'Event Thumbnail'} width={1000} height={1000} draggable={false} className='w-fit h-[150px] rounded-t-md'/>
        <div className='absolute mb-[60px] ml-5 bottom-0 left-0 right-0'>
            <p className='text-white md:text-2xl text-lg font-semibold'>PerfectWorld Shanghai 2024</p>
        </div>

        <div className='flex text-center text-white md:text-xl text-lg font-medium justify-center h-[50px]'>
            <Link href={''} className={`rounded-bl-md ${buttonStyle} border-r-[1px] border-transparent`}>Overview</Link>
            <Link href={''} className={`rounded-br-md ${buttonStyle}`}>Matches</Link>
        </div>
      </div>
    </>
  )
}

export default EventsHome
