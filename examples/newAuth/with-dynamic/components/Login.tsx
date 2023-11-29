"use client"
import { useEffect } from "react";
import { useNetwork, useSwitchNetwork } from 'wagmi';
import { optimism } from 'viem/chains';
import { DynamicWidget, useDynamicContext } from "@dynamic-labs/sdk-react-core";

const LogoutButton = ({ onClick }: { onClick: () => void }) => {
    return (
        <button className="bg-[#f02121]/80 rounded-lg p-2 text-white items-center" onClick={onClick}>
            <p>Logout</p>
        </button>
    );
}

interface LoginProps {
    onComplete: () => void;
}
  
export default function Login({ onComplete }: LoginProps){
    const { primaryWallet, isVerificationInProgress, handleLogOut } = useDynamicContext();
    const { chain } = useNetwork();
    const { switchNetwork } = useSwitchNetwork();

    useEffect(() => {
        if(primaryWallet){
            // TODO: fix switchNetwork(isn't working)
            switchNetwork?.(10);
            onComplete();
        }
    }, [primaryWallet, chain, onComplete, switchNetwork]);

    return primaryWallet ? <LogoutButton onClick={() => handleLogOut()} /> : <DynamicWidget />
}