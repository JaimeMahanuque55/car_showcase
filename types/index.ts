import { MouseEventHandler } from "react";

export interface CustomButtomProps {
    title?: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
}

export interface searchManufacturerProps {
    manufaturer: string;
    setMafacturer: (manufacturer: string) => void;
}