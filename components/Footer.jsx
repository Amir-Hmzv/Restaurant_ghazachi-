import React from "react";
import Image from 'next/image'
import one from '../public/icons/Group 453.svg'
import two from '../public/icons/Group 454.svg'
import three from '../public/icons/Group 455.svg'
import four from '../public/icons/Group 464.svg'
import khoresh from '../public/aaa.png'


const Footer = () => {
  return (
    <div className=" w-full   bg-[#FFE0DA] relative overflow-hidden   ">
      <section className=" lg:w-[90%] xl:w-[75%]       flex flex-col  justify-center  md:flex-row items-center  bg-blac mx-auto lg:mr-10 md:justify-between  ">
      <div className="lg:mr-10 space-y-3 mt-12">
            <h1 className="text-[#FF2B00] text-2xl cursor-pointer font-bold text-center lg:text-right ">ghazachi</h1>
            <p className="w-[250px] lg:text-justify text-center text-sm text-[#9b9b9b]"> و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            بزارهای کاربردی می باشد</p>
        </div>
        <div className="mt-12 lg:mr-28  space-y-4 ">
            <h1 className="text-[#000] font-extrabold  text-lg">دسترسی سریع</h1>
            <ul className=" space-y-2 text-[#9b9b9b] mr-4 text-sm  cursor-pointer">
                <li  className=" cursor-pointer">ساعتچی</li>
                <li className=" cursor-pointer">درباره ما</li>
                <li className=" cursor-pointer">تماس با ما</li>
                <li className=" cursor-pointer">داستان غذاچی</li>
            </ul>
        </div>

        <div className="mt-12 lg:mr-28  space-y-4 ">
            <h1 className="text-[#000] font-extrabold  text-lg text-center lg:text-right">تماس با ما</h1>
            <ul className=" space-y-2 text-[#9b9b9b] mr-4 text-sm  cursor-pointer  text-center lg:text-right  ">
                <li  className=" cursor-pointer flex   justify-center md:justify-start"><p className="px-2">01165462</p> <span>تلفن</span></li>
                <li className=" cursor-pointer flex  justify-center md:justify-start   "><p className="px-2">ghazachi@gmail.com</p> <span>ایمیل</span></li>
                <li className=" cursor-pointer flex  justify-center md:justify-start  "><p className="px-2">200090</p> <span>سامانه بیامکی</span></li>
             
            </ul>
        </div>

        <div className="flex flex-row md:flex-col  mt-16 lg:space-y-2">
          
            <div><Image  src={one} alt='' width={40} height={30}/></div>
            <div><Image  src={two} alt='' width={40} height={30}/></div>
            <div><Image  src={three} alt='' width={40} height={30}/></div>
            <div><Image  src={four} alt='' width={40} height={30}/></div>
            
        </div>
  
      </section>
      <div className="pt-10 pb-3 text-center text-[#FF2B00] ">Copyright 1999-2022 by Refsnes Data. All Rights Reserved.</div>
      <div className=" absolute -left-20  top-0  xl:block hidden"><Image src={khoresh} width={500} objectFit='cover' height={500} alt=''/></div>
    </div>
  );
};

export default Footer;
