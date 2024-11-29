import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import players from '../public/data/players.json'
import teams from '../public/data/teams.json'

// Define the player type based on your players.json structure
interface Player {
    id: number;
    nickname: string;
    realName: string;
    photo: string;
    team: string;
  }
  
  // Define the lookup type
  type PlayerLookup = { [id: number]: Player };

  const playerLookup: PlayerLookup = players.reduce((acc: PlayerLookup, player) => {
    acc[player.id] = player;
    return acc;
  }, {} as PlayerLookup);

const Ranking = () => {
  const rankedTeams = [...teams].sort((a, b) => a.rank - b.rank);

  return (
    <div>
      <div className='bg-white pt-4 md:w-[609px] w-fit h-fit rounded-md'>
        <p className='text-zinc-600 px-6'>Ranking</p>

        {rankedTeams.map((teams,index) => (
            <Link href='' className='flex flex-col px-6 hover:bg-slate-200 transition font-semibold border-b-[1px] border-zinc-200 py-4' key={index}>
                {teams.name}
                
                <div className='flex flex-row'>
                {teams.players.map((player, index) => (
                    <div className='flex flex-col justify-between gap-x-2 gap-y-2 items-center font-normal' key={index}>
                        <div className='mt-4'>
                            <Image src={playerLookup[player].photo} alt={playerLookup[player].nickname} width={500} height={500} draggable={false}/>
                        </div>
                        <p>{playerLookup[player].nickname}</p>
                    </div>
                ))}
                </div>
            </Link>
        ))}
      </div>
    </div>
  )
}

export default Ranking
