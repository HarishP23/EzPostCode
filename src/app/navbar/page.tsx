import { Disclosure, Transition } from "@headlessui/react";
import { Fragment } from "react";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex-shrink-0 flex items-center">
                {/* EzPost.ai Logo */}
                <h1 className="text-2xl font-bold text-white">EzPost.ai</h1>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
