'use client';

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import players from '../public/data/players.json'

const currentPlayerOG = 0;

const PlayerOfTheWeekHome = () => {
    const [currentPlayer, setCurrentPlayer] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPlayer(prevValue => (prevValue >= 24 ? 0 : prevValue + 1));
        }, 1400);

        return () => clearInterval(interval);
    }, []);

  return (
    <>
      <div className='flex justify-normal relative overflow-hidden bg-gradient-to-b from-cyan-700 to-cyan-950 md:aspect-square md:w-[250px] md:h-[250px] max-w-full rounded-md'>
        <div className='md:aspect-square md:w-[80%] w-[50%] md:h-[80%] h-fit md:self-end md:-ml-3 md:pt-0 pt-6'>
            <Image src={players[currentPlayer].photo} placeholder={'empty'} alt={'Player of the Week'} width={500} height={500} draggable={false}/>
        </div>

        <div className='absolute w-full text-white text-right pt-3 pr-4'>
            <p className='md:text-2xl text-4xl font-bold'>{players[currentPlayer].nickname}</p>
            <p className='md:text-base text-md font-light'>Player of the week</p>
        </div>

        <div className='absolute w-full text-white text-right self-end pb-3 pr-4'>
            <p className='md:text-base text-md font-light'>Rating</p>
            <p className='md:text-3xl text-4xl font-bold'>{players[currentPlayer].rating}</p>
        </div>
      </div>
    </>
  )
}

export default PlayerOfTheWeekHome