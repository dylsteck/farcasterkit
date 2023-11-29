import Image from 'next/image';
import farcasterIconWhite from '../../../public/farcasterIconWhite.png';

interface CreateAccountBtnProps{
    onClick: () => void;
}

export default function CreateAccountBtn({ onClick }: CreateAccountBtnProps){
    return(
        <div>
            <button className="rounded-lg bg-[#7F5FC6] w-auto p-3 pl-4 pr-4 text-white font-medium" onClick={onClick}>
                <div className="flex flex-row gap-3 items-center">
                    <div className="w-5 h-5">
                        <Image src={farcasterIconWhite} alt="Farcaster icon" className="w-full h-full" />
                    </div>
                    <p>Create Account</p>
                </div>
            </button>
        </div>
    )
}