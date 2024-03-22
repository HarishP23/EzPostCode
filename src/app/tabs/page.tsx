"use client";

import Image from "next/image";
import { Tabs } from "../components/ui/tabs";
import Formli from "../formli/page";
import Formin from "../formin/page";
import Formth from "../formth/page";
import Formx from "../formx/page";
import "./content/pages.css";

export default function TabsDemo() {
  const tabs = [
    {
      title: (
        <Image src="/linkedin.svg" alt="LinkedIn" width={50} height={50} />
      ),
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-5 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>EzPost.LinkedIn</p>
          <Formli />
        </div>
      ),
    },
    {
      title: (
        <Image src="/instagram.svg" alt="Instagram" width={50} height={50} />
      ),
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-5 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>EzPost.Instagram</p>
          <Formin />
        </div>
      ),
    },
    {
      title: <Image src="/threads.svg" alt="Threads" width={50} height={50} />,
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-5 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>EzPost.Threads</p>
          <Formth />
        </div>
      ),
    },
    {
      title: (
        <Image src="/twitter-x.svg" alt="Twitter" width={67} height={67} />
      ),
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-5 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>EzPost.X</p>
          <Formx />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[65rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <Image
      src="/linear.webp"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
