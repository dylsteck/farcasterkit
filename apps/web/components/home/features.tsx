import type { FC } from 'react';

import FlashIcon from '@components/icons/flash';
import CodeDocumentIcon from '@components/icons/code-document';
import MagicIcon from '@components/icons/magic';
import ServerIcon from '@components/icons/server';
import { card } from '@components/elements';

interface FeaturesProps {}

export const features = [
  {
    name: 'Free & robust API',
    description:
      'Use our free read/write API to build out your entire Farcaster app',
    icon: <FlashIcon className="stroke-black dark:stroke-white" />
  },
  {
    name: 'Components & hooks',
    description:
      'Comes out-of-the box with all the React components and hooks your app needs',
    icon: <CodeDocumentIcon className="stroke-black dark:stroke-white" />
  },
  {
    name: 'Multi-provider',
    description:
      'Farcaster Kit is flexible to your setup -- easily switch out auth services & data providers, or even customize our components',
    icon: <MagicIcon className="stroke-black dark:stroke-white" />
  },
  {
    name: 'Auth',
    description:
      "Our robust auth components offer options across platforms such as Privy, Dynamic, RainbowKit, and Farcaster's AuthKit",
    icon: <ServerIcon className="stroke-black dark:stroke-white" />
  }
];

const Features: FC<FeaturesProps> = () => {
  return (
    <section className="z-10 my-10 gap-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {features.map((feature, index) => (
          <div
            key={index}
            className={card({ class: 'gap-2 p-4 backdrop-blur' })}
          >
            <div className="flex items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral/10 dark:bg-white/10">
                {feature.icon}
              </div>
              <h3 className="mx-3 text-lg font-bold text-black dark:text-white">
                {feature.name}
              </h3>
            </div>
            <p className="pl-1 text-gray-500 dark:text-gray-400">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
