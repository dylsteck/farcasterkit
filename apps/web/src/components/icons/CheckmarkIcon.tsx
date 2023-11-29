import Image from "next/image";
import checkmarkIconPurple from '../../../public/checkmarkIconPurple.png'

export default function CheckmarkIcon(){
    return <Image 
                src={checkmarkIconPurple} 
                alt="Checkmark icon purple" 
                className="w-4 h-4"
            />;
}