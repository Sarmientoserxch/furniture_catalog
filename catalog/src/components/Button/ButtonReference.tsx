import type {ReactNode} from "react";

interface ButtonReferenceProps {
    iconName: string;
    svg: ReactNode;
}

function ButtonReference({ iconName, svg }: ButtonReferenceProps) {
    return (
        <div className="inline-flex items-center px-4 py-2  gap-3 bg-[#FBDB93]/20 backdrop-blur-sm rounded-full text-[#FBDB93] text-sm font-medium mb-6">
            {svg}
            {iconName}
        </div>
    );
}

export default ButtonReference;