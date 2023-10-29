import Link from "next/link";
import { Section } from "../Section";
import CopyIcon from "../../icons/CopyIcon";


export default function Header(){
    const installCommand = `npx create-farcaster-app@latest`;
    const handleCopy = () => {
        void navigator.clipboard.writeText(installCommand).catch(() => {
          console.error('Failed to copy install command to clipboard');
        });
      }

    return(
    <Section>
        <div className="p-6 pb-0">
            <div className="flex flex-row justify-between">
                <div>
                    <h1 className="font-medium text-4xl md:text-6xl">farcaster kit</h1>
                    <h3 className="text-xl md:text-2xl">the easiest way to build farcaster apps</h3>
                </div>
                <div className="flex flex-col text-right font-medium">
                    <Link href="/docs">
                        <p>docs</p>
                    </Link>
                    <Link href="https://github.com/dylsteck/farcasterkit" target="_blank">
                        <p>github</p>
                    </Link>
                </div>
            </div>
            <div className="flex flex-row items-center pt-[5vh]">
                <p className="text-lg md:text-xl pr-1 md:pr-2 whitespace-pre-line">{installCommand}</p>
                <div className="invisible md:visible">
                    <CopyIcon onClick={handleCopy} />
                </div>
            </div>
            <Link href="/docs">
                <p className={`text-xl text-fcPurple`}>view docs</p>
            </Link>
            <Link href="https://withcortex.com">
                <p className="pt-[5vh] pb-[2.5vh]">powered by nexus</p>
            </Link>
        </div>
    </Section>
    )
}