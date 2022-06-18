import React, { useState,useEffect } from "react";
import { AiOutlineUser,AiOutlineShoppingCart,AiOutlineSearch,AiOutlineClose } from 'react-icons/ai';
import SideBar from "./SideBar";
import SmallMenu from "./SmallMenu";
import {useRouter} from 'next/router'
import Link from "next/link";


const Navbar = () => {
  const [search, setSearch] = useState(false)
  const [shadow, setShadow] = useState(false)
  const [state, setstate] = useState(false)
  const router = useRouter();
  
  useEffect(() => {
    if (
      router.asPath === '/products' ||
      router.asPath === `/products/${router.query.id}`  ||
      router.route === '/404' ||
      router.asPath === '/about'
      
      
    ) {
      setstate(true)
    }else{

      setstate(false)
    }
  }, [router]);




  useEffect(() => {
     const handleShadow = () => {
      if (window.scrollY >= 30 && router.asPath === '/') {
        setShadow(true);
      } else {
         setShadow(false);
        
        
      }
    };
    window.addEventListener('scroll',  handleShadow);
  }, [router]);

  const handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      console.log('enter press here! ')
    }
  }




  return (
    <>
      <nav  className={`${shadow  ? `  fixed   transition-all duration-300 ease-out  w-full h-[7vh] shadow-xl shadow-[#dfd5cf] bg-[#F6E4D9] z-[20]  flex items-center  ` : ` z-[20] fixed  w-full  h-[7vh ${state && `shadow-xl shadow-[#dfd5cf] bg-[#F6E4D9]` }   flex items-center  `}    `}>
        <div className="flex justify-between w-full p-4 sm:p-4  2xl:px-16  ">
          <div>
            <ul className=" w-full h-full justify-center items-start space-x-8  md:space-x-12 italic px-5   text-[#363636] hidden lg:flex" >
              
              <li className=" align-middle -mt-1 ml-5 font-extrabold text-[#FF2B00] cursor-pointer text-2xl hidden  2xl:block">ghazachi</li>
                <Link href={'/'}><li className=" hover:text-[#FF2B00]  ease-linear duration-150 transition-[color] cursor-pointer">صفحه اصلی</li></Link>
              <li className="  ease-linear duration-150  flex cursor-pointer"><SmallMenu fobold={0}/></li>
              <li onClick={() => router.push('/about')} className="hover:text-[#FF2B00]  ease-linear duration-150  cursor-pointer">تماس باما</li>
              <li onClick={() => router.push('/about')} className="hover:text-[#FF2B00]  ease-linear duration-150  cursor-pointer">درباره ما</li>
           
            </ul>
            <li className="block lg:hidden px-3"><SideBar/></li>
          </div>
          <div className="flex px-4 items-center  space-x-2">
            <div  className=" cursor-pointer" ><AiOutlineUser   size={25} /></div>
            <div className=" cursor-pointer"><AiOutlineShoppingCart size={25}  /> </div>
            <div>
                <div  className="hidden relative lg:flex">
                
                    <div>{!search ?
                     (<><AiOutlineSearch onClick={() => setSearch(true)} className=' cursor-pointer' size={23}/></>) : 
                     (<><div className="flex relative sm:mx-5">   <input className=" outline-none rounded-md p-1" onKeyPress={handleKeyPress}  placeholder="جستوجو..." type="text"  />  <AiOutlineClose  size={20} className=' absolute left-[2%] top-[19%]  cursor-pointer hover:text-[#555353] hover:rounded-full transition-all duration-100 ease-linear hover:bg-[#F6E4D9]' onClick={() => setSearch(false)}/><span className="absolute top-[1%] rounded-md cursor-pointer p-1 bg-white left-[-20%]"><AiOutlineSearch size={23} onSubmit={() => console.log('sex')} className='  '/></span></div></> )}</div>
                </div>
            </div>
          </div>
        </div >
      </nav>
      {/* <br />
      <br /> */}
    </>
    
  );
};

export default Navbar;
