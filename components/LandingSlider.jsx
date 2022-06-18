import React, { useRef, useState ,} from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Landing from './Landing'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination,Autoplay } from "swiper";
export default function LandingSlider() {
  
  return (
    <>
      <Swiper
    
        
        
     
    pagination={true}  modules={[Pagination,Autoplay]} autoplay={{delay:4000,disableOnInteraction: false}} speed={700}  loop={true}  className="mySwiper"     
      >
        <SwiperSlide><Landing/></SwiperSlide>
        <SwiperSlide><Landing/></SwiperSlide>
      
  
      </Swiper>
    </>
  );
}





