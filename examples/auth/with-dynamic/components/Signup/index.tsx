"use client"
import Image from 'next/image';
import farcasterIconWhite from '../../../public/farcasterIconWhite.png';
import { useState } from 'react';
import { useAccount } from 'wagmi';
import Login from '../Login';
import SetRecoveryAddress from './SetRecoveryAddress';
import AuthorizeApp from './AuthorizeApp';
import CreateAccount from './CreateAccount';
import CreateAccountBtn from './CreateAccountBtn';
import { useSwitchNetwork } from 'wagmi'

interface Step{
    number: number;
    name: string;
}

const steps: Step[] = [
    { number: 0, name: 'Create account' },
    { number: 1, name: 'Login' },
    { number: 2, name: 'Set recovery address' },
    { number: 3, name: 'Authorize app' },
    { number: 4, name: 'Create account' },
    // TODO: Add create fname before Set profile info and after Create account
    { number: 5, name: 'Set profile info' },
];

export default function Signup(){
    const { address, isConnecting, isConnected, isDisconnected } = useAccount()
    const { chains, error, isLoading, pendingChainId, switchNetwork } = useSwitchNetwork()
    
    const [step, setStep] = useState<Step>(steps[0]);

    const handleSetStep = (newStep: Step) => {
        if(newStep.number === 2 && switchNetwork){
           switchNetwork(10);
        }
        if(step.number !== newStep.number && !isLoading){
            setStep(newStep);
        }
    }

    return(
        <>
            {isDisconnected && 
            <>
                {step.number === 0 && <CreateAccountBtn onClick={() => handleSetStep(steps[1])} />}
                {step.number === 1 && <Login onComplete={() => handleSetStep(steps[2])} />}
            </>
            }
            {isConnected && 
            <div className="bg-purple text-black">
                {step.number === 2 && !isConnecting && 
                    <SetRecoveryAddress 
                        authenticatedAddress={address as `0x${string}`} 
                        onComplete={() => handleSetStep(steps[3])}/> 
                }
                {step.number === 3 && <AuthorizeApp onComplete={() => handleSetStep(steps[4])} />}
                {step.number === 4 && <CreateAccount onComplete={() => handleSetStep(steps[5])} />}
                {step.number === 5 && <p>creation complete! now set username then you can add content to your profile</p>}
            </div>
            }
        </>
    )
}