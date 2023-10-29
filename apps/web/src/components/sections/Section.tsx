import type { ReactNode } from "react";

type SectionProps = {
    children: ReactNode;
};

export function Section({ children }: SectionProps) {
    return(
        <div className="w-[100vw] p-6 pb-0 border-b border-black">
            {children}
        </div>
    )

}