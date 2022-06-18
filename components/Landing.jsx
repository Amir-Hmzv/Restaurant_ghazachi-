import React from 'react';
import Image from 'next/image'
import khoresh from '../public/aaa.png'
import {useRouter} from 'next/router'

const Landing = () => {
    const router = useRouter()
    return (
        <>
        <div className='w-full h-[94.9vh]  bg-gradient-to-t from-[#fff]  to-[#F6E4D9]  mx-auto ' >
            <div className='  w-11/12 flex flex-col md:flex-row text-center justify-between mx-auto relative top-[25%] px-16'>
                <div className='mt-10 space-y-8 relative md:top-20'>
                    <h1 className='text-[33px] font-normal  whitespace-nowrap   italic'>تخفیف های خوشمزه</h1>
                    <p>همین الان <span className='text-[#D22705]'>بال گریل شده</span> با <span className='text-[#D22705]'>30</span> درصد تخفیف</p>
                    <button onClick={() => router.push('/products/52927')} className='bg-[#D22705] p-3 text-white rounded-lg lg:flex   hover:bg-[#eb5d40] duration-200 ease-linear' > همین الان سفارش بده</button>
                </div>
                <div  className='  mt-10 md:mt-0 relative left-[16%] md:left-0'>
                <h1 className=' text-[#D22705]  md:mr-[16rem] justify-self-center  xl:block hidden   md:mt-[2rem]  font-lobster text-6xl'>bulliant wining</h1>
                <Image src={khoresh} objectFit='cover' alt=''  width={800} height={500} />
                </div>
            </div>
             
         </div>
        
        </>
    );
};

export default Landing;

{/* <Image src={khoresh} objectFit='cover' alt=''  width={700} height={400} /> */}