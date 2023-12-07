import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect } from 'react';
// import Cast from '@/components/Cast';
// import { channels, useLatestCasts } from 'farcasterkit';
import Login from '@/components/Login';
import Signup from '@/components/Signup';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // const { data: casts, loading } = useLatestCasts({ parent_url: channels.Warpcast.parent_url});
  // useEffect(() => {
  //   if(casts){
  //     console.log(casts);
  //   }
  // }, [casts])

  return (
    <main>
      <div className="p-4 border-b w-auto max-w-[100%]">
        <div className="flex flex-row items-center gap-4">
          <p className="text-lg font-medium">farcaster kit starter</p>
        </div>
      </div>
      {/* {!loading && casts && 
        <div>
            {casts.map((cast: any) => {
              return <Cast key={cast.id} cast={cast} />
            })}
        </div>
      } */}
      <div className="p-4">
        <Signup />
      </div>
    </main>
  )
}