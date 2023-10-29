import { DocumentDuplicateIcon } from "@heroicons/react/24/outline";

interface CopyIconProps{
    onClick?: () => void;
}

export default function CopyIcon({ onClick }: CopyIconProps){
    return <DocumentDuplicateIcon className="w-4 h-4" onClick={onClick} />
}