import React from 'react';
import Image from 'next/image'
import Link from 'next/link';
import {useRouter} from 'next/router'
const Products = ({items}) => {
    const router = useRouter()
    console.log(items);
    return (
        <>
              
               
            <div className=' p-4 '>
            <div className=' shadow-lg  rounded-lg '>
                    <Image onClick={() => router.push(`products/${items.idMeal}`)}  src={items.strMealThumb} alt='' className='rounded-t-lg   cursor-pointer w-screen '  width={450} height={300} layout='responsive'/>
                    <div className='p-5 flex justify-between flex-row-reverse'>
                        <div dir='ltr' className=''><p>name : {items.strMeal}</p>
                        <p>categoty : Main</p>
                        </div>
                        <div>
                      <Link href={`products/${items.idMeal}`}><li className=' list-none'> <button className='p-2 bg-red-200 rounded-md  text-red-600'>Details</button></li></Link>
                        </div>
                    </div>
                
            </div>
            </div>
               
                
        </>
    );
};

export default Products;