import Link from "next/link";
import FarcasterIcon from "../../icons/FarcasterIcon";
import GithubIcon from "../../icons/GithubIcon";

export default function Footer(){
    return(
        <div className="flex flex-row gap-2 items-center p-4 pl-12">
            <div>   
                <Link href="https://warpcast.com/dylsteck.eth">
                    <FarcasterIcon />
                </Link>
            </div>
            <div>   
                <Link href="https://github.com/dylsteck/farcasterkit">
                    <GithubIcon />
                </Link>
            </div>
        </div>
    )
}