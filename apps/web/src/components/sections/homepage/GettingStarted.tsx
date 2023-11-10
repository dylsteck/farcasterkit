import Link from "next/link"
import { Section } from "../Section"

export default function GettingStarted(){
    return(
        <Section>
            <div className="pl-5">
                <h1 className="font-medium text-2xl md:text-4xl">getting started</h1>
                <ol className="parenthetical-list-style pt-[2.5vh] pb-[2.5vh]">
                    <li>npm install farcasterkit, npx create-farcaster-app, or <Link href="/docs"><span className="text-fcPurple">view docs</span></Link></li>
                    <li>see our examples on github, such as <Link href="https://github.com/dylsteck/farcasterkit/tree/main/examples/starter"><span className="text-fcPurple">examples/starter</span></Link></li>
                    <li>enjoy building, and reach out in the support channel if you hit a wall!</li>
                </ol>
            </div>
        </Section>
    )
}