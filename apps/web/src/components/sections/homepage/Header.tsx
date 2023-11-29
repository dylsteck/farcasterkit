import Link from "next/link";
import Image from "next/image";
import farcasterKitLogo from '../../../../public/farcasterKitLogo.png';
import arrowRight from '../../../../public/arrowRight.png';
import copyIcon from '../../../../public/copyIcon.png';

export default function Header() {
  const installCommand = `npx create-farcaster-app`;
  const handleCopy = () => {
    void navigator.clipboard.writeText(installCommand).catch(() => {
      console.error('Failed to copy install command to clipboard');
    });
  };

  return (
    <div className="w-[100vw]">
      <div className="p-6 pb-[2.5vh] border-b border-gray-600/85">
        <div className="flex flex-row justify-between items-center">
          <div>
            <Image
              src={farcasterKitLogo}
              alt="Farcaster Kit logo"
              width="190"
              height="47"
              objectFit="contain"
            />
          </div>
          <div className="flex flex-row gap-2 items-center font-semibold p-2 border border-purple-600 text-[#9368E2] rounded-lg">
            <Link href="/docs">
                <p>View docs</p>
            </Link>
            <div>
              <Image
                src={arrowRight}
                alt="Arrow right icon"
                width="12"
                height="12"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="text-center pt-[5vh]">
          <p className="text-6xl font-semibold">farcaster kit</p>
          <p className="font-medium text-xl text-gray-500/75">react hooks for the best farcaster apps</p>
          <div className="bg-black/90 text-white font-light font-mono p-2 rounded-lg flex flex-row justify-between items-center pl-4 pr-4 mt-[2vh]">
            <p>npx create-farcaster-app</p>
            <div className="pt-1">
                <Image
                src={copyIcon}
                alt="Copy icon"
                width="20"
                height="24"
                objectFit="contain"
                />
            </div>
        </div>
        </div>
      </div>
    </div>
  );
}