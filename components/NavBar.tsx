import Link from 'next/link';
import Image from 'next/image';
import CustomButton from './CustomButton';

const NavBar = () => {
    return (
        <header className='w-full absolute z-10'>
            <nav className='max-w-[1440px] mx-auto flex justify-between
            items-center sm:px-16 px-6 py-4 pt-10'>
                <Link href="/" className="flex justify-center items-center">
                    The Book Store
                </Link>

                <CustomButton 
                title="Sign In"
                btnType="button"
                containerStyles="text-secondary-orange hover:text-white rounded-full bg-white hover:bg-secondary-orange min-w-[130px] border-solid border-2 border-secondary-orange"
                />
            </nav>
        </header>
    );
}

export default NavBar