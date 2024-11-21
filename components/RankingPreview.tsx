import Link from "next/link";
import React from "react";
import Image from "next/image";

import teams from "../public/data/teams.json";

function getCurrentDate() {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;

  return `${month} / ${date}`;
}

const RankingPreview: React.FC = () => {
  const rankedTeams = [...teams].sort((a, b) => a.rank - b.rank);

  return (
    <>
      <div className="md:w-[250px] h-fit bg-cyan-700 rounded-md space-y-2 pt-2">
        <span className="text-lg text-white font-semibold px-4">
          Ranking
        </span>

        <div className="flex flex-col border-t-[1px] bg-white border-zinc-300">
          {rankedTeams.map((team, index) => (
            <Link
              href=""
              key={team.id}
              className="flex flex-row items-center hover:bg-slate-200 transition duration-150 py-2 px-4 border-zinc-300 border-b-[1px]"
            >
              <span className='pr-1'>{team.rank}.</span>
              <Image
                src={team.logo}
                alt={"Team"}
                width={36}
                height={36}
                className="p-1"
              />{" "}
              {team.name}
            </Link>
          ))}
        </div>

        <div className='text-white pb-4 text-center'>
            <p>Last updated: {getCurrentDate()}</p>
        </div>
      </div>
    </>
  );
};

export default RankingPreview;
