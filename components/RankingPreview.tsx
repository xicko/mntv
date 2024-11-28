'use client';

import Link from "next/link";
import React from "react";
import Image from "next/image";

import teams from "../public/data/teams.json";

function getCurrentDate() {
  const newDate = new Date();
  const date = newDate.getDate();
  const month = newDate.getMonth() + 1;

  return `${month} / ${date}`;
}

const RankingPreview: React.FC = () => {
  const rankedTeams = [...teams].sort((a, b) => a.rank - b.rank);

  return (
    <>
      <div className="md:w-[250px] h-fit bg-cyan-700 rounded-md space-y-2 pt-2">
        <span className="text-lg text-white font-semibold px-4">Ranking</span>

        <div className="flex flex-col border-t-[1px] bg-white border-zinc-300">
          {rankedTeams.map((team) => (
            <Link
              href=""
              key={team.id}
              className="flex flex-row md:text-md text-lg items-center hover:bg-slate-200 transition-all duration-150 py-2 px-4 border-zinc-300 border-b-[1px]"
              style={{
                fontVariationSettings: "'wght' 400",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.fontVariationSettings = "'wght' 600")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.fontVariationSettings = "'wght' 400")
              }
            >
              <p className="pr-1">{team.rank}.</p>
              <Image
                src={team.logo}
                alt={"Team"}
                width={100}
                height={100}
                className="p-1 aspect-square md:w-9 w-12"
              />{" "}
              <p className="pl-1">
                {team.name}
              </p>
            </Link>
          ))}
        </div>

        <div className="text-white pb-4 customfontmono text-center">
          <p>Last updated: {getCurrentDate()}</p>
        </div>
      </div>
    </>
  );
};

export default RankingPreview;
