import { useAccount } from "wagmi";
import { useCallback, useEffect, useState } from "react";
import SetRecoveryAddress from "./SetRecoveryAddress";
import CreateAccount from "./CreateAccount";
import AuthorizeApp from "./AuthorizeApp";
import Login from "../Login";
import farcasterIcon from '../../../public/farcasterIcon.png';
import Image from "next/image";

interface Step{
    number: number;
    name: string;
}

const steps: Step[] = [
    { number: 0, name: 'Choose sign in/sign up' },
    { number: 1, name: 'Login' },
    { number: 2, name: 'Set recovery address' },
    { number: 3, name: 'Authorize app' },
    { number: 4, name: 'Create account' },
    // TODO: Add create fname after Create account and before Set profile info
    { number: 5, name: 'Set profile info' },
];

function Number({ number }: { number: number }){
    return(
        <div className="rounded-full w-6 h-6 bg-white/80 flex justify-center items-center text-center">
            <p className="text-xs">{`${number}.`}</p>
        </div>
    )
}

export default function Signup(){
        const { address, isConnecting, isDisconnected } = useAccount()
        const [step, setStep] = useState<Step>(steps[0]);
    
        const doesAddressExist = useCallback(() => {
            if(address === undefined){
                return false
            }
            return true;
        }, [address]);

        const handleSignUp = () => {
            setStep(steps[1]);
        };
    
        useEffect(() => {
            // else if (!address && step.number !== 0) {
            //     setStep(steps[0]);
            // }
            console.log("Step: ", step.number);
        }, [address, step.number]);

        return(
            <div className="rounded-lg bg-[#7F5FC6] w-auto max-w-[20vw] p-2">
                <p>Step {step.number + 1}</p>
                {step.number === 0 &&
                    <div className="flex flex-row gap-4 items-center">
                        <div className="w-6 h-6">
                            <Image src={farcasterIcon} alt="Farcaster icon" className="w-full h-full" />
                        </div>
                        { /* Todo: Will add Sign In to flow once Sign Up is done */ }
                        <p onClick={handleSignUp}>Sign Up</p>
                    </div>
                }
                {step.number === 1 && !doesAddressExist() && <Login onComplete={() => setStep(steps[2])} />}
                {step.number === 2 && doesAddressExist() && 
                    <SetRecoveryAddress 
                        authenticatedAddress={address as `0x${string}`} 
                        onComplete={() => setStep(steps[3])}/> 
                }
                {step.number === 3 && doesAddressExist() && <AuthorizeApp onComplete={() => setStep(steps[4])} />}
                {step.number === 4 && doesAddressExist() && <CreateAccount onComplete={() => setStep(steps[5])} />}
                {step.number === 5 && <p>creation complete! now set username then you can add content to your profile</p>}
            </div> 
        )
    }