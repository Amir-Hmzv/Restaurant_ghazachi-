import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
  } from '@chakra-ui/react'
  import Link from 'next/link'
const DropDownSide = ({onClose}) => {
    return (
        <div>
            <Accordion allowMultiple>
  <AccordionItem border={'none'}>
    <h2>
      <AccordionButton padding={'0'} width='100px ' _hover={{backgound:'transparent',color:'red'}} >
        <Box  flex='1' textAlign='right' fontWeight={'bold'} _hover={{color:'red'}} >
            غذا هامون
        </Box>
        <AccordionIcon  />
      </AccordionButton  >
    </h2>
    <AccordionPanel pt={2} pb={3} px='0'>
        <ul>
              <Link href={'/products'}><li onClick={onClose} className=" hover:text-[#FF2B00]  ease-linear duration-150 transition-[color] cursor-pointer"> فست فود ها</li></Link>
              <Link href={'/products'}><li onClick={onClose} className=" hover:text-[#FF2B00]  ease-linear duration-150 transition-[color] cursor-pointer">پیش غذا</li></Link>
              <Link href={'/products'}><li onClick={onClose} className=" hover:text-[#FF2B00]  ease-linear duration-150 transition-[color] cursor-pointer">دسر ها</li></Link>
              <Link href={'/products'}><li onClick={onClose} className=" hover:text-[#FF2B00]  ease-linear duration-150 transition-[color] cursor-pointer">غذا های سنتی</li></Link>

      
        </ul>
    </AccordionPanel>
  </AccordionItem>


</Accordion>
        </div>
    );
};

export default DropDownSide;