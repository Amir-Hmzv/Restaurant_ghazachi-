import React from 'react';
import Image from 'next/image'
import oneImage from '../public/popular/1.png'
import twoImage from '../public/popular/2.png'
import threeImage from '../public/popular/3.png'
import PopularSegmentation from './PopularSegmentation';
import {useRouter} from 'next/router'

const PopularSection = ({title,bg}) => {
    const router = useRouter()
    return (
        <div className={`bg-[${bg}] min-h-[90vh] w-full `}>
            <h1 className='font-bold text-3xl pt-40   text-center '>{title}</h1>
            <div className=' md:max-w-[1140px] 2xl:max-w-[945px]  mx-auto mt-20 flex   flex-col md:justify-between  lg:flex-row  md:space-y-0 space-y-5 '>
                <PopularSegmentation image={oneImage} title='همبرگر'/>
                <PopularSegmentation  image={twoImage}   title='چیکن لو'/>
                <PopularSegmentation image={threeImage} title='اسفناج'/>
            </div>
            <div className='flex justify-center   mt-28'>
            
                <button onClick={() => router.push('/products')} className='mb-20 text-center rounded-md py-3 px-5 text-[#FF2B00]  shadow-custom duration-150 ease-linear  hover:bg-[#FF2B00] hover:text-white transition-all   border-[1px] border-[#FF2B00]'>نمایش بیشتر</button>
            </div>
        </div>
    );
};

export default PopularSection;