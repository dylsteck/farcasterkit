import { Section } from "../Section";


export default function HooksDocs(){
    return(
        <>
            <Section>
                <div className="pb-[2.5vh]">
                    <p className="text-lg font-medium pb-4">React hooks docs</p>
                    <p className="text-lg font-medium">useLatestCasts</p>
                    <p className="pt-[1.5vh]">get the latest casts on farcaster</p>
                    <p className="pt-2">input:</p>
                    <ol className="parenthetical-list-style">
                        <li>fid - number(optional)</li>
                        <li>parent_url - string(optional)</li>
                        <li>cursor - number(optional)</li>
                        <li>limit - number(optional, max = 100)</li>
                    </ol>

                    <p className="pt-2">usage:</p>
                    <p>{`const {data, loading} = useLatestCasts()`}</p>
                    <p>{`const {data, loading} = useLatestCasts({fid: 616})`}</p>
                    <p>{`const {data, loading} = useLatestCasts({parent_url: 'https://warpcast.com'})`}</p>
                </div>
            </Section>
            <Section>
                <div className="pb-[2.5vh]">
                    <p className="text-lg font-medium">useCast</p>
                    <p className="pt-[1.5vh]">get a cast by hash</p>
                    <p className="pt-2">input:</p>
                    <ol className="parenthetical-list-style">
                        <li>hash - string</li>
                        <li>cursor - number(optional)</li>
                        <li>limit - number(optional, max = 100)</li>
                    </ol>
                    <p className="pt-2">usage:</p>
                    <p>{`const {data, loading} = useCast({hash: '0x62795a62dbd04b94427f464f191986fcc00d81ab'})`}</p>
                </div>
            </Section>
            <Section>
                <div className="pb-[2.5vh]">
                    <p className="text-lg font-medium">useReplies</p>
                    <p className="pt-[1.5vh]">get replies to a given cast</p>
                    <p className="pt-2">input:</p>
                    <ol className="parenthetical-list-style">
                        <li>hash - string</li>
                        <li>cursor - number(optional)</li>
                        <li>limit - number(optional, max = 100)</li>
                    </ol>
                    <p className="pt-2">usage:</p>
                    <p>{`const {data, loading} = useReplies({hash: '0x62795a62dbd04b94427f464f191986fcc00d81ab'})`}</p>
                </div>
            </Section>
            <Section>
                <div className="pb-[2.5vh]">
                    <p className="text-lg font-medium">useSearch</p>
                    <p className="pt-[1.5vh]">search casts given a query</p>
                    <p className="pt-2">input:</p>
                    <ol className="parenthetical-list-style">
                        <li>query - string</li>
                        <li>cursor - number(optional)</li>
                        <li>limit - number(optional, max = 100)</li>
                    </ol>
                    <p className="pt-2">usage:</p>
                    <p>{`const {data, loading} = useSearch({query: 'farcaster'})`}</p>
                </div>
            </Section>
            <div className="w-[100vw] p-6 pb-0">
                <div className="pb-[2.5vh]">
                    <p className="text-lg font-medium">useUser</p>
                    <p className="pt-[1.5vh]">get profile data for a given a fid or fname</p>
                    <p className="pt-2">input:</p>
                    <ol className="parenthetical-list-style">
                        <li>fid - number(optional)</li>
                        <li>fname - string(optional)</li>
                        <li>cursor - number(optional)</li>
                        <li>limit - number(optional, max = 100)</li>
                    </ol>
                    <p className="pt-2">usage:</p>
                    <p>{`const {data, loading} = useUser({fname: 'dylsteck.eth'})`}</p>
                </div>
            </div>
        </>
    )
}