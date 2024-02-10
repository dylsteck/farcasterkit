import { usePrivy } from "@privy-io/react-auth";
import { useEffect } from "react";
import { useNetwork, useSwitchNetwork } from 'wagmi';
import { optimism } from 'viem/chains';

const LoginButton = ({ onClick }: { onClick: () => void }) => {
    return (
        <button className="bg-[#8A63D2] rounded-lg p-2 text-white items-center" onClick={onClick}>
            <p>Login</p>
        </button>
    );
}

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
    const { login, user, logout } = usePrivy();
    const { chain } = useNetwork();
    const { switchNetwork } = useSwitchNetwork();

    useEffect(() => {
        if(user){
            onComplete();
        }
    }, [user, chain, onComplete, switchNetwork]);

    return user ? <LogoutButton onClick={logout} /> : <LoginButton onClick={login} />;
}