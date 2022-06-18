import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel,Box,useTab ,useTabsContext,useMultiStyleConfig,Button} from '@chakra-ui/react'
import Image from 'next/image'
import Ham from '../public/Ham.png'
import burger from '../public/burger.png'
import {MdOutlineKeyboardArrowLeft} from 'react-icons/md'

import {Barbecue,FastFoodX,Meal,Pizza,FastFoodY} from './TabsIcon'
import TabsPanel from './TabsPanel';
import { useRouter } from 'next/router';
const ServeSection = ({props,ref}) => {
     const router = useRouter()

    return (
<>
                  
                <div className='  w-full mx-auto my-40      '>
                           <Tabs >
        <TabList borderColor='#f3f3f3' className='  max-w-lg lg:max-w-xl mx-auto'   display='flex' justifyContent={'space-between'} flexWrap='wrap'  >
          <Barbecue  padding={'5px'} _focus={{boxShadow:'none',}} _selected={{color:'#FF2B00',borderColor:'#FF2B00'}} color='##363636'>کباب</Barbecue>
          <FastFoodX  _focus={{boxShadow:'none'}} _selected={{color:'#FF2B00',borderColor:'#FF2B00'}} color='##363636'>برگر</FastFoodX>
          <Meal  _focus={{boxShadow:'none'}} _selected={{color:'#FF2B00',borderColor:'#FF2B00'}} color='##363636'><span className='  whitespace-'>پیش غذا</span></Meal>
          <Pizza  _focus={{boxShadow:'none'}} _selected={{color:'#FF2B00',borderColor:'#FF2B00'}} color='##363636'>پیتزا </Pizza>
          <FastFoodY  _focus={{boxShadow:'none'}} _selected={{color:'#FF2B00',borderColor:'#FF2B00'}} color='##363636'>نوشیدنی </FastFoodY>
          <Meal  _focus={{boxShadow:'none'}} _selected={{color:'#FF2B00',borderColor:'#FF2B00'}} color='##363636'>سالاد </Meal>
          <div className='hidden lg:block'><Barbecue   _focus={{boxShadow:'none'}} _selected={{color:'#FF2B00',borderColor:'#FF2B00'}}   color='##363636' >دسر</Barbecue></div>
        </TabList>
      
        <TabPanels  className='   max-w-xl     lg:max-w-[85%] 2xl:max-w-[70%]  mx-auto '   >
          <TabPanel marginTop='10px' className='flex flex-col lg:flex-row lg:justify-between 2xl:justify-around lg:mt-0   '   >
              <TabsPanel image={burger}/>
         </TabPanel>
         <TabPanel marginTop='10px' className='flex flex-col lg:flex-row lg:justify-between 2xl:justify-around lg:mt-0   '   >
              <TabsPanel image={Ham}/>
         </TabPanel>
         <TabPanel marginTop='10px' className='flex flex-col lg:flex-row lg:justify-between 2xl:justify-around lg:mt-0   '   >
              <TabsPanel image={burger}/>
         </TabPanel>
         <TabPanel marginTop='10px' className='flex flex-col lg:flex-row lg:justify-between 2xl:justify-around lg:mt-0   '   >
              <TabsPanel image={Ham}/>
         </TabPanel>
         <TabPanel marginTop='10px' className='flex flex-col lg:flex-row lg:justify-between 2xl:justify-around lg:mt-0   '   >
              <TabsPanel image={burger}/>
         </TabPanel>
         <TabPanel marginTop='10px' className='flex flex-col lg:flex-row lg:justify-between 2xl:justify-around lg:mt-0   '   >
              <TabsPanel image={Ham}/>
         </TabPanel>
         <TabPanel marginTop='10px' className='flex flex-col lg:flex-row lg:justify-between 2xl:justify-around lg:mt-0   '   >
              <TabsPanel image={burger}/>
         </TabPanel>


        </TabPanels>
      </Tabs>

     

      <button onClick={()  => router.push('/products')} className=' hover:text-[#FF2B00] ease-linear duration-150 flex text-orange-400 mt-20 px-1 mb-5 justify-center  w-full'>
       <span> نمایش بیشتر </span> <MdOutlineKeyboardArrowLeft className='mt-2'/>
          </button> 
      </div>
   

         
        </>

    );
};

export default ServeSection;


