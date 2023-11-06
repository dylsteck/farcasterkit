import SoonIcon from "@/components/icons/SoonIcon";
import CheckmarkIcon from "../../icons/CheckmarkIcon";
import { Section } from "../Section";
import { comingSoon, features } from "@/lib/features";

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

export default function WhatsInTheBox(){
    const sectionTitle = `what's in the box?`
    return(
        <Section>
          <div className="pl-5">
            <h1 className="font-medium text-2xl md:text-4xl">{sectionTitle}</h1>
            <Features />
          </div>  
        </Section>
    )
}