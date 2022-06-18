import React from 'react';
import Image from 'next/image'
import {MdOutlineKeyboardArrowLeft} from 'react-icons/md'

const PopularSegmentation = ({image,title}) => {
    return (
        <div className='flex justify-center   cursor-pointer hover:transform lg:hover:scale-[1.1]  transition-[transform] duration-100 ease-linear' >
              <div className=' relative '>
              <Image src={image} alt='' objectFit='cover' className=' rounded-3xl'   width={300} height={300}/>
              <div className='absolute pb-10 z-19 bg-gradient-to-t rounded-3xl  from-[#FF2B00] to-transparent  opacity-[50%] -top-[6px] left-0 w-full h-full'></div>
              <div className=' z-[30]  rounded-full absolute left-2 bottom-5 bg-black text-white' ><MdOutlineKeyboardArrowLeft size={30}/></div>
              <div className=' z-[30]    absolute right-2 bottom-5  font-bold text-white' > {title}</div>

              </div>
         </div>
        
    );
};

export default PopularSegmentation;