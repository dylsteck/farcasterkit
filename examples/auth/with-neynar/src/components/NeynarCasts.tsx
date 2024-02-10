import { useFeed } from "@/providers/NeynarProvider"
import Link from "next/link";
import { useEffect } from "react";


export default function NeynarCasts(){
    const filter = 'global_trending';
    const { feedResponse } = useFeed(filter, 30);

    return(
        <div className="flex flex-col gap-2 bg-gray-800 max-w-[45vw] overflow-scroll rounded-lg m-8">
            <div className="w-[100%] bg-gray-600 text-white rounded-tl-lg rounded-tr-lg p-2">
                <p>Casts by {filter}</p>
            </div>
            {feedResponse !== null && feedResponse.casts.map((cast) => {
            return(
                <div key={feedResponse.casts.indexOf(cast)} className="text-white border-b border-black">
                    <div className="p-2">
                        <p>
                            {cast.text}
                        </p>
                        <div className="flex flex-row gap-2">
                            <p>Casted by {cast.author.username} | </p>
                            <p className="font-medium">
                                <Link href={`https://warpcast.com/${cast.author.username}/${cast.hash.substring(0, 10)}`}>
                                    View on Warpcast
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            )
         })}
        </div>
    )
}