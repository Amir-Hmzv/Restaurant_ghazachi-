import React from 'react'
import {useRouter} from 'next/router'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Divider 
  } from '@chakra-ui/react'
  import { MdKeyboardArrowDown } from 'react-icons/md';
function SmallMenu({fobold}) {
  const router = useRouter()
  return (
    <Menu>
    <MenuButton   _hover={{color:'#FF2B00'}}  _active={{color:'#FF2B00'}} >
    <div  className='flex   '>  <span className={`${fobold > 0 && 'font-bold'}`}>غذا هامون</span> <span className=' align-baseline mt-1 px-1' ><MdKeyboardArrowDown/></span></div>
    </MenuButton>
    <MenuList  position="relative" right='50px' >
    <MenuItem onClick={() => router.push('/products')} _hover={{background:'#F6E4D9',color:'#FF2B00'}}>فست فود ها</MenuItem>
      <MenuItem onClick={() => router.push('/products')} _hover={{background:'#F6E4D9',color:'#FF2B00'}}> پیش غذا ها</MenuItem>
        <MenuItem onClick={() => router.push('/products')} _hover={{background:'#F6E4D9',color:'#FF2B00'}}>دسر ها</MenuItem>
        <MenuItem onClick={() => router.push('/products')} _hover={{background:'#F6E4D9',color:'#FF2B00'}}>غذا های سنتی</MenuItem>
     
    </MenuList>
  </Menu>
  )
}

export default SmallMenu