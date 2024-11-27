import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const matches = [
    {team1: 'Natus Vincere', team2: 'TheMongolZ', rounds1: 2, rounds2: 9, maps1: 0, maps2: 1},
    {team1: 'FaZe', team2: 'Team Liquid', rounds1: 5, rounds2: 2, maps1: 1, maps2: 1},
    {team1: 'G2', team2: 'Natus Vincere', rounds1: 8, rounds2: 12, maps1: 1, maps2: 0}
]

const futurematches = [
  {team1: 'Team Liquid', team2: 'G2', rounds1: 2, rounds2: 9, maps1: 0, maps2: 1}
]

function getCurrentDate() {
  const newDate = new Date();
  const date = newDate.getDate();
  const month = newDate.getMonth() + 1;

  return `${month} / ${date + 1}`;
}

const Matches = () => {
  return (
    <>
      <div className='bg-white pt-4 w-full h-fit rounded-md'>
        <p className='text-zinc-600 px-6 ml-4 relative'><span className='text-red-500 font-black animate-pulse absolute text-4xl mt-[-10px] ml-[-20px]'>•</span> Live Matches</p>
        
        {matches.map((matches,index) => (
            <Link href='' className='flex flex-row px-6 hover:bg-slate-200 transition font-semibold border-b-[1px] border-zinc-200 py-4' key={index}>
              <div className='flex justify-normal flex-col font-normal gap-y-2 w-[40%]'>
                <p>{matches.team1}</p> 
              
                <p>{matches.team2}</p>
              </div>

              <div className='flex justify-normal flex-col text-end gap-y-2 w-[5%] pr-2'>
                <p>{matches.rounds1}</p>

                <p>{matches.rounds2}</p>
              </div>

              <div className='flex justify-normal flex-col font-normal gap-y-2 w-[5%]'>
                <p>({matches.maps1})</p>

                <p>({matches.maps2})</p>
              </div>

              <div className='flex justify-center flex-row w-[50%]'>
                <div className='w-6 h-6 self-center'><Image src={'/player_silhouette.webp'} alt={''} width={50} height={50}/></div>
                
                <p className='self-center'>PerfectWorld Shanghai 2024</p>
              </div>
            </Link>
        ))}
      </div>

      <div className='bg-white pt-4 w-full h-fit rounded-md'>
        <p className='text-zinc-600 px-6'>Scheduled {getCurrentDate()}</p>

        {futurematches.map((futurematches,index) => (
              <Link href='' className='flex flex-row px-6 rounded-b-md hover:bg-slate-200 transition font-semibold border-b-[0px] border-zinc-200 py-4' key={index}>
                <div className='flex justify-normal flex-col gap-y-2 w-[50%]'>
                  <p>{futurematches.team1}</p> 
                
                  <p>{futurematches.team2}</p>
                </div>

                <div className='flex justify-center flex-row w-[50%]'>
                  <div className='w-6 h-6 self-center'><Image src={'/player_silhouette.webp'} alt={''} width={50} height={50}/></div>
                  
                  <p className='self-center'>PerfectWorld Shanghai 2024</p>
                </div>
              </Link>
          ))}
      </div>
    </>
  )
}

export default Matches
