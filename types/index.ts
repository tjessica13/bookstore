import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: 
    MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
}

export interface SearchBookProps {
    book: string;
    setBook: (book : string) => void;
}

export interface BookProps {
    id: number;
    title: string;
    author: string;
    year: number;
    img: string;
    price: number;
    href: string;
}