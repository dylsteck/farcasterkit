import Image from 'next/image';
import FarcasterArch from '../../../public/farcasterArch.svg';

export default function FarcasterIcon(){
    return <Image 
            src={FarcasterArch} 
            alt="Farcaster Icon" 
            width={20} 
            height={20} 
            className="opacity-80" 
        />
}