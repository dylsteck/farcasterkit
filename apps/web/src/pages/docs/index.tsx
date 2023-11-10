import Layout from "@/components/Layout";
import FarcasterIcon from "@/components/icons/FarcasterIcon";
import GithubIcon from "@/components/icons/GithubIcon";
import { Section } from "@/components/sections/Section";
import CastsDocs from "@/components/sections/docs/CastsDocs";
import HooksDocs from "@/components/sections/docs/HooksDocs";
import UsersDocs from "@/components/sections/docs/UsersDocs";
import UtilsDocs from "@/components/sections/docs/UtilsDocs";
import Footer from "@/components/sections/homepage/Footer";
import Link from "next/link";

export default function Docs(){
    const apostrophe = `'`
    return(
        <Layout>
            <div className="p-6 pb-0"> {/* Header */ }
                <div className="flex flex-row justify-between">
                    <div className="flex flex-col gap-2">
                        <Link href="/">
                            <p className="text-md">back to home</p>
                        </Link>
                        <p className="text-2xl md:text-4xl font-medium">docs</p>
                    </div>
                    <Link href="https://github.com/dylsteck/farcasterkit" target="_blank">
                        <p className="font-medium">github</p>
                    </Link>
                </div>
            </div>
            <Section>
                <div className="pb-[2.5vh]">
                    <p className="text-lg font-medium">getting started</p>
                    <p className="pt-[2.5vh]">welcome to farcaster kit! we can{apostrophe}t wait to see what you build</p>
                    <p className="pt-2">farcaster kit is made up of two parts:</p>
                    <ol className="parenthetical-list-style">
                        <li>a rest api to access app-first data</li>
                        <li>a npm package with react hooks and modules</li>
                    </ol>
                </div>
            </Section>
            <CastsDocs />
            <UsersDocs />
            <UtilsDocs />
            <HooksDocs/>
            <div className="flex flex-row gap-2 items-center p-4 pl-6">
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
        </Layout>
    )
}