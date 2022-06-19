import React from 'react';
import Image from 'next/image'
const ThumbGallery = ({image}) => {
 

  return (
    <> 
         <div className='relative my-10 '>
           <div className=' rounded-lg'>
           <Image src={image} width={500} className=' rounded-lg' height={350}  />
           </div>
            <div className='absolute w-full left-0 bg-[#D22705] opacity-[.8] h-16 rounded-lg  bottom-1  justify-between flex space-x-3 pr-2 pt-2' >
              <div className='  cursor-pointer rounded-lg'>
              <Image src={image}  width={50} height={50} className='rounded-lg' />
              </div>
              <div className='  cursor-pointer'>
              <Image src={image} width={50} height={50}  className='rounded-lg' />
              </div>
              <div className='  cursor-pointer'>
              <Image src={image} width={50} height={50}  className='rounded-lg' />
              </div>
              <div className=' cursor-pointer  hidden sm:block'>
              <Image src={image} width={50} height={50}    className='rounded-lg'/>
              </div>
            
            
            </div>
           </div>
      
    </>

  );
};

export default ThumbGallery;