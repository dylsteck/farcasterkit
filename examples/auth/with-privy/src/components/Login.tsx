import { usePrivy } from "@privy-io/react-auth";
import { useEffect } from "react";

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
    const { login, user, logout } = usePrivy()
     
    useEffect(() => {
        if(user){
            onComplete();
        }
    }, [user]);
    
    return user ? <LogoutButton onClick={logout} /> : <LoginButton onClick={login} />
}