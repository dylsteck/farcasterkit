import axios from 'axios';
import { useEffect, useState, ReactElement, ReactNode } from 'react';
import Link from 'next/link';
import { type Cast } from 'farcasterkit';

interface Mention {
  fid: number;
  position: number;
}

interface CacheType {
  [fid: number]: string | undefined;
}

const fNamesCache: CacheType = {};

export default function Cast({ cast }: { cast: Cast }): ReactElement {
  const [renderedText, setRenderedText] = useState<ReactNode>('');

  useEffect(() => {
    async function fetchFName(fid: number): Promise<string> {
      if (fNamesCache[fid]) {
        return fNamesCache[fid] as string;
      }
      const response = await axios.get(`https://api.farcasterkit.com/users/user?fid=${fid}`);
      const fname = response.data.user.fname;
      fNamesCache[fid] = fname;
      return fname;
    }

    async function replaceMentionsWithFNames(text: string, mentions: number[], positions: number[]): Promise<string> {
      let replacedText = text;
      const sortedMentions: Mention[] = mentions
        .map((fid, index) => ({ fid, position: positions[index] }))
        .sort((a, b) => b.position - a.position);

      for (let { fid, position } of sortedMentions) {
        const fname = await fetchFName(fid);
        if (fname) {
          replacedText = replacedText.slice(0, position) + `@${fname}` + replacedText.slice(position);
        }
      }
      return replacedText;
    }

    const urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;

    function wrapUrlsInLinks(text: string): ReactNode[] {
      return text.split(urlRegex).map((part, i) => {
        if (part.match(urlRegex)) {
          return <Link key={i} href={part}>{part}</Link>;
        }
        return part;
      });
    }

    if (cast.mentions?.length && cast.mentions_positions?.length) {
      replaceMentionsWithFNames(cast.text, cast.mentions, cast.mentions_positions)
        .then(wrapUrlsInLinks)
        .then(setRenderedText);
    } else {
      setRenderedText(wrapUrlsInLinks(cast.text));
    }
  }, [cast]);

  return (
    <div className="p-2 pl-0 pr-0 border-b border-black/90">
      <div className="pl-4">
        <div className="flex flex-row gap-2">
          <small>{new Date(cast.timestamp).toLocaleString()}</small>
          <small className="text-[#8a63d2]">
            <Link href={`https://warpcast.com/~/conversations/${cast.hash}`}>
              view on warpcast
            </Link>
          </small>
        </div>
        <p className="pt-1">{renderedText}</p>
      </div>
    </div>
  );
}
