import React from 'react';
import Image from 'next/image'
import one from '../public/grid/1.png'
import two from '../public/grid/2.png'
import three from '../public/grid/3.png'
import four from '../public/grid/4.png'
import xx from '../public/big-sandwich-hamburger-with-juicy-beef-burger-cheese-tomato-red-onion-wooden-table.jpg'
import second from '../public/grid/grilles-chicken-steak-with-teriyaki-sauce.jpg'
import aa from '../public/grid/pasta-meal-pan-with-raw-pasta-mushroom-pepper-parsley-tomato.jpg'



const GridSection = () => {
    
    return (
        <div className=' min-h-[90vh] hidden xl:block '>
            <div className='max-w-[80%]  mt-28 mx-auto   grid grid-cols-3  gap-4 '>
            <div className=' relative row-start-1 row-end-5 xx  cursor-pointer   '><Image  src={aa}  height={10060} className='rounded-lg ' objectFit='cover'  alt='' layout='responsive' />
                <div className=' absolute  top-0 left-0 w-full xl:h-[99%] 2xl:h-[99.7%]   bg-gradient-to-t  opacity-[50%] rounded-lg  from-[#FF2B00] via-transparent to-transparent'> </div>
                <div className='absolute bottom-5 right-10 text-white font-bold'> غذا های محلی هر استان</div>
            </div>
            <div  className=' cursor-pointer  row col-start-2 col-end-4 relative xx ' ><Image height={390} className='rounded-lg '  objectFit='cover' src={xx} alt='' layout='responsive'/>
            <div className=' absolute  top-0 left-0 w-full h-[99.7%]  bg-gradient-to-t  opacity-[50%] rounded-lg  from-[#FF2B00] via-transparent  to-transparent'> </div>
            <div className='absolute bottom-5 right-10 text-white font-bold'> غذا های محلی هر استان</div>

            </div>
            <div  className=' cursor-pointer relative  rounded-xl  row-span-3' ><Image className='rounded-lg '  src={second} alt='' layout='responsive'/>
            <div className=' absolute  top-0 left-0 w-full h-[99.7%]  bg-gradient-to-t  opacity-[50%] rounded-lg  from-[#FF2B00] via-transparent to-transparent'> </div>
            <div className='absolute bottom-5 right-10 text-white font-bold'> غذا های محلی هر استان</div>

            </div>
            <div  className='  cursor-pointer  relative row-span-3 ' ><Image className='rounded-lg '  src={second} alt='' layout='responsive'/>
            <div className=' absolute  top-0 left-0 w-full h-[99.7%]  bg-gradient-to-t  opacity-[50%] rounded-lg  from-[#FF2B00] via-transparent to-transparent'> </div>
            <div className='absolute bottom-5 right-10 text-white font-bold'> غذا های محلی هر استان</div>


            </div>
          
            
            
            </div>
        </div>
    );
};

export default GridSection;


