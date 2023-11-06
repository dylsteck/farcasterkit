import Image from "next/image";
import soonIconImg from '../../../public/soonIcon.png';

export default function SoonIcon(){
    return <Image 
                src={soonIconImg} 
                alt="Soon icon emoji" 
                className="w-4 h-4"
            />;
}