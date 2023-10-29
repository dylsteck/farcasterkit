import Image from 'next/image';
import GithubOutline from '../../../public/githubOutline.svg';

export default function GithubIcon(){
    return <Image 
            src={GithubOutline} 
            alt="Github icon" 
            width={20} 
            height={20} 
            className="opacity-80" 
        />
}