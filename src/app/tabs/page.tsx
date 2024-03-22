"use client";

import Image from "next/image";
import { Tabs } from "../components/ui/tabs"
import Form from "../form/page";

export default function TabsDemo() {
  const tabs = [
    {
      title: <Image src="/linkedin.svg" alt="LinkedIn" width={50} height={50} />,
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>EzPost.LinkedIn</p>
          <Form />
        </div>
      ),
    },
    {
      title:  <Image
      src="/instagram.svg"
      alt="Instagram"
      width={50}
      height={50}
    />,
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>EzPost.Instagram</p>
          <Form />
        </div>
      ),
    },
    {
      title:  <Image src="/threads.svg" alt="Threads" width={50} height={50} />,
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>EzPost.Threads</p>
          <Form />
        </div>
      ),
    },
    {
      title:  <Image src="/twitter-x.svg" alt="Twitter" width={67} height={67} />,
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>EzTwitter</p>
          <Form />
        </div>
      ),
    },
    // {
    //   title: "Random",
    //   value: "random",
    //   content: (
    //     <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
    //       <p>Random tab</p>
    //       <DummyContent />
    //     </div>
    //   ),
    // },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
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
