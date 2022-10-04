import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen py-2 [font-family:Helvetica] flex-col-reverse gap-12 xl:gap-24 xl:flex-row ">
      <div className="w-64 xl:w-[440px]">
        <Image src="/landing-page.svg" width={440} height={775.69} />
      </div>
      <div className="flex flex-col items-center gap-4 xl:items-end">
        <h1 className="flex flex-col items-center text-5xl font-bold xl:items-end">
          <span>Imagine if</span>
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#8456EC] to-[#E87BF8]">
            Snapchat
          </span>
          <span>had events.</span>
        </h1>
        <p className="text-[#4F4F4F] w-[22rem] text-center xl:text-right">
          Easily host and share events with your friends across any social
          media.
        </p>
        <Link href="/create">
          <a className="w-[#320px] bg-gradient-to-r from-[#8456EC] to-[#E87BF8] text-white p-2 rounded px-10 font-semibold tracking-wide">
            🎉 Create my event
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Home;
