import type { FC } from 'react';

import Image from 'next/image';
// import { tv } from "tailwind-variants";

interface ResponsiveExampleProps {}

const ResponsiveExample: FC<ResponsiveExampleProps> = () => {
  // const button = tv({
  //   base: "absolute font-medium rounded-full shadow-md bottom-0 right-0 m-4 px-4 py-2 active:opacity-80",
  //   variants: {
  //     color: {
  //       primary: "text-white bg-blue-500 hover:bg-blue-600",
  //       white: "text-gray-800 bg-white hover:bg-gray-100",
  //     },
  //   },
  // });

  return (
    <div className="relative mx-auto max-w-xl overflow-hidden rounded-xl bg-white shadow-lg dark:bg-gray-900 sm:flex sm:h-[240px]">
      <div className="md:flex">
        <div className="h-[480px] sm:h-full sm:flex-shrink-0">
          <Image
            alt="Modern acme camera"
            className="sm:full xs:w-full h-full w-full object-cover sm:w-48"
            height={400}
            src="/intro-responsive.jpeg"
            width={300}
          />
        </div>
        <div className="xs:relative absolute bottom-0 left-0 right-0 h-full p-8">
          <div className="text-sm font-semibold uppercase tracking-wide text-white/80 sm:text-blue-500 sm:dark:text-blue-300">
            ACME Camera
          </div>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a
            className="mt-1 block text-lg font-medium leading-tight text-slate-900 sm:text-black sm:dark:text-gray-300"
            href="#"
          >
            Modern Camera
          </a>
          <p className="text-md mt-2 text-white sm:text-gray-500 sm:dark:text-gray-400">
            Looking for a new camera? Look no further. This is the best camera
            on the market. It is in mint condition and comes with a 1 year
            warranty.
          </p>
        </div>
        <button
          // className={button({
          //   color: {
          //     initial: "white",
          //     md: "primary",
          //   },
          // })}
          className="absolute bottom-0 right-0 m-4 rounded-full bg-white px-4 py-2 font-medium text-gray-800 shadow-md hover:bg-gray-100 active:opacity-80 md:bg-blue-500 md:text-white md:hover:bg-blue-600"
        >
          Buy now
        </button>
      </div>
    </div>
  );
};

export default ResponsiveExample;
