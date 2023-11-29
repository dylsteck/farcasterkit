// import Link from "next/link";
// import FarcasterIcon from "../../icons/FarcasterIcon";
// import GithubIcon from "../../icons/GithubIcon";

// export default function Footer(){
//     return(
//         <div className="flex flex-row gap-2 items-center p-4 pl-12">
//             <div>   
//                 <Link href="https://warpcast.com/dylsteck.eth">
//                     <FarcasterIcon />
//                 </Link>
//             </div>
//             <div>   
//                 <Link href="https://github.com/dylsteck/farcasterkit">
//                     <GithubIcon />
//                 </Link>
//             </div>
//         </div>
//     )
// }

import Link from "next/link";
import Image from "next/image";
import farcasterKitLogo from '../../../../public/farcasterKitLogo.png';
import arrowRight from '../../../../public/arrowRight.png';
import copyIcon from '../../../../public/copyIcon.png';

export default function Footer() {
  const installCommand = `npx create-farcaster-app`;
  const handleCopy = () => {
    void navigator.clipboard.writeText(installCommand).catch(() => {
      console.error('Failed to copy install command to clipboard');
    });
  };

  return (
    <div className="w-[100vw]">
      <div className="p-6 mt-[5vh] border-t border-gray-600/85">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col gap-2">
            <div>
                <Image
                src={farcasterKitLogo}
                alt="Farcaster Kit logo"
                width="190"
                height="47"
                objectFit="contain"
                />
            </div>
            <p className="pl-2 pt-1 text-gray-500/85">react hooks for the best farcaster apps</p>
            {/* TODO: add social media icons here and another nav flex-col to the right */}
          </div>
        </div>
      </div>
    </div>
  );
}