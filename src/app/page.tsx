import React from "react";
import { Boxes } from "./components/ui/background-boxes";
import { TypewriterEffectSmooth } from "./components/ui/typewriter-effect";
import Link from "next/link";



const words = [
  {
    text: "Build",
  },
  {
    text: "awesome",
  },
  {
    text: "captions",
  },
  {
    text: "with",
  },
  {
    text: "EzPost.ai",
    className: "text-blue-500 dark:text-blue-500",
  },
];

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-slate-900">
      {/* Background Boxes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Boxes />
      </div>
      {/* Typewriter Effect Content */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base text-center">
          Where every word finds its perfect platform
        </p>
        <TypewriterEffectSmooth words={words} />
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 justify-center">
          <Link href="/Home.jsx" passHref>
            <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
              Start now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
