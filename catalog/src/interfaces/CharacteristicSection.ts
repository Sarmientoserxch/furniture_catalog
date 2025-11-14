export interface Characteristic {
    title: string;
    description: string;
    svgPath: string;
}

export interface CharacteristicSectionProps {
    title: string;
    descriptionGeneral: string;
    characteristics: Characteristic[];
}