import type {product} from "../utils/typeImage.ts";
import type {ReactNode} from "react";

export interface BannerProducts {
    productos : product[];
    title: string;
    subTitle: string;
    description: string;
    icon?: ReactNode;
    iconTitle?: string;
    showPoint: boolean;
}