import type { VariantProps } from 'tailwind-variants';

import { tv } from 'tailwind-variants';
import { useState } from 'react';
import Image from 'next/image';

import { RadioGroup, Radio } from '@components';

const item = tv({
  slots: {
    base: 'flex flex-col mb-4 sm:flex-row p-6 bg-white dark:bg-stone-900 drop-shadow-xl rounded-xl',
    imageWrapper:
      'flex-none w-full sm:w-48 h-48 mb-6 sm:mb-0 sm:h-auto relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-xl before:bg-[#18000E] before:bg-gradient-to-r before:from-[#010187]',
    img: 'sm:scale-125 absolute z-10 top-2 sm:left-2 inset-0 w-full h-full object-cover rounded-lg',
    title:
      'relative w-full flex-none mb-2 text-2xl font-semibold text-stone-900 dark:text-white',
    price: 'relative font-semibold text-xl dark:text-white',
    previousPrice: 'relative line-through font-bold text-neutral-500 ml-3',
    percentOff: 'relative font-bold text-green-500 ml-3',
    sizeButton:
      'cursor-pointer select-none relative font-semibold rounded-full w-10 h-10 flex items-center justify-center active:opacity-80 dark:text-white peer-checked:text-white',
    buyButton:
      'text-xs sm:text-sm px-4 h-10 rounded-lg shadow-lg uppercase font-semibold tracking-wider text-white active:opacity-80',
    addToBagButton:
      'text-xs sm:text-sm px-4 h-10 rounded-lg uppercase font-semibold tracking-wider border-2 active:opacity-80'
  },
  variants: {
    color: {
      primary: {
        buyButton: 'bg-blue-500 shadow-blue-500/50',
        sizeButton: 'peer-checked:bg-blue',
        addToBagButton: 'text-blue-500 border-blue-500'
      },
      secondary: {
        buyButton: 'bg-purple-500 shadow-purple-500/50',
        sizeButton: 'peer-checked:bg-purple',
        addToBagButton: 'text-purple-500 border-purple-500'
      },
      success: {
        buyButton: 'bg-green-500 shadow-green-500/50',
        sizeButton: 'peer-checked:bg-green',
        addToBagButton: 'text-green-500 border-green-500'
      }
    }
  }
});

const itemSizes = ['xs', 's', 'm', 'l', 'xl'];

type Variants = VariantProps<typeof item>;
type ItemSizes = (typeof itemSizes)[number];

const SlotsVariantsExample = () => {
  const [size, setSize] = useState<ItemSizes>('xs');
  const [color, setColor] = useState<Variants['color']>('primary');

  const {
    base,
    imageWrapper,
    img,
    title,
    price,
    previousPrice,
    percentOff,
    sizeButton,
    buyButton,
    addToBagButton
  } = item({ color });

  return (
    <div>
      <div className={base()}>
        <div className={imageWrapper()}>
          <Image
            fill
            alt="Shoes for example"
            className={img()}
            loading="lazy"
            sizes="100vw"
            src="/shoes-1.png"
          />
        </div>
        <div className="flex-auto pl-4 sm:pl-8">
          <div className="relative flex flex-wrap items-baseline">
            <h1 className={title()}>Nike Adapt BB 2.0</h1>
            <div className={price()}>$279.97</div>
            <div className={previousPrice()}>$350</div>
            <div className={percentOff()}>20% off</div>
          </div>
          <div className="my-4 flex items-baseline">
            <div className="flex space-x-3 text-sm font-medium">
              {itemSizes.map((itemSize) => (
                <label key={itemSize}>
                  <input
                    checked={size === itemSize}
                    className="peer sr-only"
                    name="size"
                    type="radio"
                    value={itemSize}
                    onChange={() => setSize(itemSize)}
                  />
                  <div className={sizeButton()}>{itemSize.toUpperCase()}</div>
                </label>
              ))}
            </div>
          </div>
          <div className="flex space-x-4">
            <button className={buyButton()}>Buy now</button>
            <button className={addToBagButton()}>Add to bag</button>
          </div>
        </div>
      </div>
      <RadioGroup label="Select color:" value={color} onChange={setColor}>
        <Radio value="primary">Primary</Radio>
        <Radio value="secondary">Secondary</Radio>
        <Radio value="success">Success</Radio>
      </RadioGroup>
    </div>
  );
};

export default SlotsVariantsExample;
