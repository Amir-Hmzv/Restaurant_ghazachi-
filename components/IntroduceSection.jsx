import React from "react";
import Image from 'next/image'
import one from '../public/introduce/1.png'
import two from '../public/introduce/2.png'
import three from '../public/introduce/3.png'
import four from '../public/introduce/4.png'

import {useRouter} from 'next/router'
const IntroduceSection = () => {
  const router = useRouter()
  return (
    <div className="min-h-[90vh] w-full  ">
      <div className="max-w-[1224px]  mx-auto mt-[20rem]  flex flex-col lg:grid  justify-center  lg:grid-cols-2">
        <div className="space-y-8   ">
          <h1 className="font-bold  text-center lg:text-right text-4xl">با غذا چی آشنا شو</h1>
          <p className="lg:w-[450px]  text-center  text-[#a8a7a7] lg:text-justify leading-[42px]  italic">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد 
          </p>
          <div className="flex  justify-center lg:block">
          <button onClick={() => router.push('/products')} className="px-5 py-3 my-14 text-center mx-auto rounded-md  text-[#fff] bg-[#FF2B00] shadow-custom hover:bg-transparent hover:border-[1px] transition-all duration-150 ease-linear border-[#FF2B00] hover:text-[#FF2B00]">عکس های خوشمزه</button>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 text-center lg:grid-cols-2    ">
        <div className=" lg:relative right-16">
                    <Image   src={one} alt='' width={300} height={300}/>
                </div>
                <div className="lg:relative top-[24%]">
                <Image  src={three} alt='' width={300} height={200}/>
                   
                </div>
                <div className="lg:relative right-16 bottom-[20%]">
                <Image  src={two} alt='' width={300} height={200}/>
                </div>
                <div className="lg:relative bottom-[26%]">
                    <Image  src={four} alt='' width={300} height={300} objectFit='contain'/>
                </div>

   
        </div>
      </div>
    </div>
  );
};

export default IntroduceSection;
