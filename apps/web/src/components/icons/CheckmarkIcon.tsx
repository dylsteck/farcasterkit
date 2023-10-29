import Image from "next/image";
import checkmarkIconImg from '../../../public/checkmarkIcon.png';

export default function CheckmarkIcon(){
    return <Image 
                src={checkmarkIconImg} 
                alt="Checkmark icon emoji" 
                className="w-4 h-4"
            />;
}