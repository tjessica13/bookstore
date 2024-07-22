"use client"
import Image from 'next/image';
import CustomButton from './CustomButton';
import { SearchBar } from '@/components';

const Hero = () => {

    const handleScroll = () => {
    }

    return (
        <div className="hero">
            <div className="flex-1 pt-36 padding-x">
                <h1 className="hero__title">
                    A cozy space for all book lovers.
                </h1>

                <p className="hero__subtitle">
                    Find your next book to read here.
                </p>

                <CustomButton 
                title="Search Books" 
                containerStyles="bg-secondary-orange text-white rounded-full mt-10" 
                handleClick={handleScroll} 
                />
                
            </div>

            <div className="hero__image-container">
                <div className="hero__image">
                    <Image src="/pexels-zinep-17910625.jpg" 
                    alt="hero"
                    fill className="object-contain" />
                </div>
            </div>


        </div>
    );
}

export default Hero