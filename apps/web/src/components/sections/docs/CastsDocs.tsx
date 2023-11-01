import { Section } from "../Section";


export default function CastsDocs(){
    return(
        <>
            <Section>
                <div className="pb-[2.5vh]">
                    <p className="text-lg font-medium">casts/:hash</p>
                    <p className="pt-[2.5vh]">a GET request that returns a cast given its hash</p>
                    <p className="pt-2">input:</p>
                    <ol className="parenthetical-list-style">
                        <li>hash - string</li>
                        <li>cursor - number(optional)</li>
                        <li>limit - number(optional, max = 100)</li>
                    </ol>
                </div>
            </Section>
            <Section>
                <div className="pb-[2.5vh]">
                    <p className="text-lg font-medium">casts/latest</p>
                    <p className="pt-[2.5vh]">a GET request that returns the latest casts on farcaster</p>
                    <p className="pt-2">input:</p>
                    <ol className="parenthetical-list-style">
                        <li>fid - number(optional)</li>
                        <li>parent_url - string(optional)</li>
                        <li>cursor - number(optional)</li>
                        <li>limit - number(optional, max = 100)</li>
                    </ol>
                    <p className="pt-[2.5vh]">note: passing fid or parent_url gets you the feed for either, but right now you can only input one of them -- not both</p>
                </div>
            </Section>
            <Section>
                <div className="pb-[2.5vh]">
                    <p className="text-lg font-medium">casts/replies</p>
                    <p className="pt-[2.5vh]">a GET request that returns all replies to a cast</p>
                    <p className="pt-2">input:</p>
                    <ol className="parenthetical-list-style">
                        <li>hash - string</li>
                        <li>cursor - number(optional)</li>
                        <li>limit - number(optional, max = 100)</li>
                    </ol>
                </div>
            </Section>
            <Section>
                <div className="pb-[2.5vh]">
                    <p className="text-lg font-medium">casts/search</p>
                    <p className="pt-[2.5vh]">a GET request that searches casts given a keyword(s)</p>
                    <p className="pt-2">input:</p>
                    <ol className="parenthetical-list-style">
                        <li>query - string</li>
                        <li>cursor - number(optional)</li>
                        <li>limit - number(optional, max = 100)</li>
                    </ol>
                </div>
            </Section>
        </>
    )
}