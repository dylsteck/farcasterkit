import Image from "next/image";
import Link from "next/link";
import codeIcon from '../../../../public/codeIcon.png';
import chartIcon from '../../../../public/chartIcon.png';
import githubIcon from '../../../../public/githubIcon.png';
import arrowRight from '../../../../public/arrowRight.png';

function NpmInstallSection(){
    return(
        <div className="rounded-lg p-3 md:p-1 bg-[#F5F5F5] max-w-[75vw] md:max-w-[25vw]">
            <div>
              <Image
                src={codeIcon}
                alt="Code icon"
                width="72"
                height="72"
                objectFit="contain"
              />
            </div>
            <div className="pl-3 pr-2 pb-1">
                <p className="font-medium text-xl">Install</p>
                <p>Run npm install farcasterkit or npx create-farcaster-app to get started</p>
                <div className="flex flex-row gap-2 items-center font-medium pt-1 pb-1 text-[#9368E2]">
                    <Link href="/docs">
                        <p>View docs</p>
                    </Link>
                    <div>
                        <Image
                            src={arrowRight}
                            alt="Arrow right icon"
                            width="12"
                            height="12"
                            objectFit="contain"
                        />
                    </div>
                </div>
        </div>
    </div>
    )
}

function ExamplesSection(){
    return(
        <div className="rounded-lg p-3 md:p-1 bg-[#F5F5F5] max-w-[75vw] md:max-w-[25vw]">
            <div>
              <Image
                src={githubIcon}
                alt="GitHub icon"
                width="72"
                height="72"
                objectFit="contain"
              />
            </div>
            <div className="pl-3 pr-2">
                <p className="font-medium text-xl">View our examples</p>
                <p>Check out awesome examples made by the team and our community</p>
                <div className="flex flex-row gap-2 items-center font-medium pt-1 pb-1 text-[#9368E2]">
                    <Link href="https://github.com/dylsteck/farcasterkit/tree/main/examples">
                        <p>View examples</p>
                    </Link>
                    <div>
                        <Image
                            src={arrowRight}
                            alt="Arrow right icon"
                            width="12"
                            height="12"
                            objectFit="contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

function HaveFunSection(){
    return(
        <div className="rounded-lg p-3 md:p-1 bg-[#F5F5F5] max-w-[75vw] md:max-w-[25vw]">
            <div>
              <Image
                src={chartIcon}
                alt="Chart icon"
                width="72"
                height="72"
                objectFit="contain"
              />
            </div>
            <div className="pl-3 pr-2">
                <p className="font-medium text-xl">Have fun!</p>
                <p>Have fun building, and reach out to support if you hit a wall</p>
                <div className="flex flex-row gap-2 items-center font-medium pt-1 pb-1 text-[#9368E2]">
                    <Link href="https://github.com/dylsteck/farcasterkit/issues">
                        <p>Contact support</p>
                    </Link>
                    <div>
                        <Image
                            src={arrowRight}
                            alt="Arrow right icon"
                            width="12"
                            height="12"
                            objectFit="contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function GettingStarted() {
  return (
    <div className="pt-[2.5vh]">
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-medium text-2xl md:text-4xl text-center">Get started</h1>
        <div className="flex flex-col md:flex-row gap-2 pt-[2.5vh]">
            <NpmInstallSection />
            <ExamplesSection />
            <HaveFunSection /> {/* Change to roadmap */ }
        </div>
      </div>
    </div>
  );
}