import Image from "next/image";
import soonIconImg from '../../../public/soonIcon.png';
import clockIcon from '../../../public/clockIcon.png';

export default function SoonIcon(){
    return <Image 
                src={clockIcon} 
                alt="Clock icon" 
                className="w-4 h-4"
            />;
}