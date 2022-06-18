import React, { useEffect, useState } from "react";
import ThumbGallery from "./ThumbGallery";
import Image from 'next/image'
import avatar from '../public/avatar.png'
import {AiOutlineMinus,AiOutlinePlus} from 'react-icons/ai'
import { Divider } from '@chakra-ui/react'
import Comments from './Comments'
import PopularFooter from "./PopularFooter";
import Head from 'next/head'
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/movements/counterSlice";
const Product = ({ data }) => {

   const counter = useSelector(state => state.counter.itemCounter)
   const dispatch = useDispatch()
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian')
    .then((response) => response.json())
    .then((json) => setProducts(json.meals));
  }, [])

     console.log(products);
  return (
    <div className="pt-[58px] z-[30]">
                           <Head>
        <title>{data.strMeal}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon2.ico" />
      </Head>
      <div className="h-[195px] w-full imgBg   relative z-[10]  ">
        <div className=" absolute  inset-0 bg-red-600 opacity-[.5]  z-10 "></div>
        <div className=" absolute z-[222] flex justify-center items-center w-full  pt-20">
          <p className="text-white font-bold text-2xl lg:text-4xl">
            {data.strMeal}
          </p>
        </div>
        
      </div>

      <div className= " flex flex-col justify-center items-center lg:flex-row space-y-5 md:justify-around lg:justify-between    px-10 max-w-[80%] 2xl:max-w-[80%] lg:max-w-[100%] mx-auto mt-16">
      <div className=" space-y-5  " dir="ltr">
        <h1 className=" italic font-bold text-center lg:text-right">Explanation about <p className="text-red-400 inline-block  ">{data.strMeal}</p> </h1>
        <p className="w-[450px] text-[#646363]  line-clamp-5 	 " >{data.strInstructions}</p>
      <div className="flex w-full justify-between flex-row-reverse lg:flex-col  lg:space-y-6">
      <p className="text-center lg:text-right px-4">price : 20000</p>
        <div className="text-center lg:text-right  px-4  space-x-5   ">
          <button onClick={() => dispatch(increment())} className="bg-green-500 p-2 rounded-md text-[#fff]"><AiOutlinePlus/></button>
          <span>{counter}</span>
          <button onClick={() => dispatch(decrement())}  className="bg-red-500 p-2 rounded-md text-[#fff]"><AiOutlineMinus/></button>
        </div>
      </div>
      <button className="text-center p-4 text-black  border-2 border-green-500 w-full rounded-md transition-[background] hover:bg-green-500 hover:text-white ease-linear duration-150 ">buy</button>
      </div>


      <div>
      <ThumbGallery image={data.strMealThumb}/>
      
      </div>
      </div>

      <div className="my-10 max-w-[80%]  mx-auto space-y-3">
        <h2 className="text-xl text-red-500 text-center lg:text-right">recipe</h2>
         <div className=" space-y-8"> 
         <p className=" line-clamp-2 text-[#666666]">
          {data.strInstructions}
          </p>
          <p className=" line-clamp-2 text-[#666666]">
          {data.strInstructions}
          </p>
          <p className=" line-clamp-2 text-[#666666]">
          {data.strInstructions}
          </p>
          <p className=" line-clamp-2 text-[#666666]">
          {data.strInstructions}
          </p>
          <p className=" line-clamp-2 text-[#666666]">
          {data.strInstructions}
          </p>

         </div>


         {/* comments */}
          <div className="pb-5 pt-28" >
            <h3 className="text-2xl">3 نظر</h3>
             
        <Comments/>
        <Comments/>
        <Comments/>
              
          </div>

          {/* popular */}
            <h3 className="text-2xl pb-2 pt-16 ">محبوب ترین ها</h3>
          <div className='  grid grid-cols-1  w-full flex-col mx-auto   sm:grid sm:grid-cols-2  lg:grid-cols-3   gap-4'>
          {
            products && products.slice(0,3).map(item => {
              return <PopularFooter key={item.idMeal} item={item} />
            } )
          }
          </div>

      </div>
    
        
          
       


     
    </div>
  );
};

export default Product;
