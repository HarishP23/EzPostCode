import React from "react";
import { Boxes } from "./components/ui/background-boxes";
import { TypewriterEffectSmooth } from "./components/ui/typewriter-effect";
import Link from "next/link";
import Home from "./home";

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

export default function Page() {
  return (
    <>
      <Home />
    </>
  );
}
