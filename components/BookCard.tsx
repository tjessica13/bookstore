"use client";
import { useState } from 'react';
import Image from 'next/image';
import { BookProps } from '@/types';
import Link from 'next/link';

interface BookCardProps {
    book: BookProps;
}

const BookCard = ({book}: BookCardProps) => {
    
    const [isOpen, setIsOpen] = useState(false);

    const { 
        id,
        title,
        author,
        year,
        img,
        price,
        href
      } = book;

    return (
        <Link href={href}>
            <div className="car-card group">
                <div className="car-card__content">
                    <h2 className="car-card__content-title">
                        {title} 
                    </h2>
                </div>
                <p className="flex mt-2 text-[14px]">
                    <span>
                        {author}
                    </span>
                </p>

                <div className="relative w-full h-full my-3 flex justify-center items-center">
                    <Image src={img} alt={title} width={300} height={200} />
                </div>

                <p className="flex mt-6 text-[32px] font-extrabold">
                    <span className="self-start text-[18px] font-semibold">
                        ${price}
                    </span>
                </p>
            </div>
        </Link>
    );
}

export default BookCard