import SoonIcon from "@/components/icons/SoonIcon";
import CheckmarkIcon from "../../icons/CheckmarkIcon";
import { Section } from "../Section";
import { comingSoon, features } from "@/lib/features";
import { CopyBlock, atomOneDark } from "react-code-blocks";

type FeatureListProps = {
    features: string[]
};

const Features = () => {
    return (
      <div className="flex flex-col md:flex-row pt-[2.5vh] pb-[2.5vh]">
        {[0, 1, 2].map((index) => (
          <FeatureList key={index} features={features.slice(index * 3, index * 3 + 3)} />
        ))}
        <ComingSoonList features={comingSoon} />
      </div>
    );
};

const FeatureList = ({ features }: FeatureListProps) => {
    return (
      <div className="flex-row pr-4">
        {features.map((feature: string, i: number) => (
          <div key={i} className="mb-2 flex flex-row items-center gap-2">
            <CheckmarkIcon />
            <p>{feature}</p>
          </div>
        ))}
      </div>
    );
  };

  const ComingSoonList = ({ features }: FeatureListProps) => {
    return (
      <div className="flex-row pr-4">
        {features.map((feature: string, i: number) => (
          <div key={i} className="mb-2 flex flex-row items-center gap-2">
            <SoonIcon />
            <p>{feature}</p>
          </div>
        ))}
      </div>
    );
  };

  export default function WhatsInTheBox() {
    const whatsInTheBox = `What's in the box?`;
    const codeSnippet = `
  // 1. Import modules from farcasterkit
  import { channels, useLatestCasts } from 'farcasterkit';
  // 2. Get the latest casts from the Warpcast channel
  const { data: casts, loading } = useLatestCasts({ parent_url: channels.Warpcast.parent_url});
  // 3. Display casts in your app
  return(
    <div>
      {casts.map((cast: any) => {
        return <Cast key={cast.id} cast={cast} />
      })}
    /div>
  )
    `.trim().replace(`// 1. Import modules from farcasterkit`, `  // 1. Import modules from farcasterkit`);
  
    return (
      <div className="w-[100vw] p-6 pt-[7.5vh] pb-[2.5vh] flex justify-center">
          <div className="w-[100%] md:w-[80%] flex flex-row items-center gap-1 pl-[10vw] sm:pl-[7vw] md:pl-[5vw]">
          <div className="w-0 md:w-1/2 max-h-[50vh] overflow-scroll bg-[#282a36] rounded-xl invisible md:visible ml-[0.5vw]">
            <CopyBlock text={codeSnippet} language="typescript" theme={atomOneDark} />
          </div>
          <div className="w-[100%] md:w-1/2 pl-10">
            <p className="text-2xl font-medium pb-[2.5vh]">{whatsInTheBox}</p>
            <div className="flex flex-row gap-2 md:gap-4">
              <div>
                <div className="w-auto max-w-[17vw] sm:max-w-[14vw] md:max-w-[11vw] lg:max-w-[9vw] xl:max-w-[6vw] p-1.5 text-xs border border-purple-600 text-[#9368E2] rounded-lg mb-4">
                  <p>Available now</p>
                </div>
                <FeatureList features={features} />
              </div>
              <div>
                <div className="w-auto max-w-[17vw] sm:max-w-[14vw] md:max-w-[11vw] lg:max-w-[7.5vw] xl:max-w-[6vw] p-1.5 text-xs border border-purple-600 text-[#9368E2] rounded-lg mb-4">
                  <p>Coming soon</p>
                </div>
                <ComingSoonList features={comingSoon} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }  