import Link from "next/link";
import Image from "next/image"
import React from "react";

interface LogoProps {
  src: string;
}

const Logo: React.FC<LogoProps> = ({ src }) => {
  return (
    <div className="md:w-[400px] w-full h-fit">
      <Link href="/">
        <Image
          src={src}
          alt={"Logo"}
          width={600}
          height={600}
          className=""
          draggable={false}
        />
      </Link>
    </div>
  );
};

export default Logo;
