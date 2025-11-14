export interface Tip {
    title: string;
    description: string;
    svgPath: string;
}

export interface TipsSectionProps {
    title: string;
    tips: Tip[];
}