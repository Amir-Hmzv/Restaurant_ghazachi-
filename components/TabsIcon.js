import {Box,useTab ,useMultiStyleConfig,Button} from '@chakra-ui/react'
import {GiBarbecue} from 'react-icons/gi'
import {BiDrink} from 'react-icons/bi'
import {GiMeal} from 'react-icons/gi'
import {MdFastfood} from 'react-icons/md'
import {FaPizzaSlice} from 'react-icons/fa'

import React from 'react'

export const  Barbecue  = React.forwardRef((props, ref) => {
    // 1. Reuse the `useTab` hook
    const tabProps = useTab({ ...props, ref })
    const isSelected = !!tabProps['aria-selected']

    // 2. Hook into the Tabs `size`, `variant`, props
    const styles = useMultiStyleConfig('Tabs', tabProps)

    return (
      <Button display='flex' justifyContent='space-between'  __css={styles.tab} {...tabProps}>
        <Box as='span' marginLeft={'5px'} mr='0'>
          {isSelected ? <GiBarbecue size={20}/> : ''}
        </Box>
        {tabProps.children}
      </Button>
    )
  })
  export const  Pizza  = React.forwardRef((props, ref) => {
    // 1. Reuse the `useTab` hook
    const tabProps = useTab({ ...props, ref })
    const isSelected = !!tabProps['aria-selected']

    // 2. Hook into the Tabs `size`, `variant`, props
    const styles = useMultiStyleConfig('Tabs', tabProps)

    return (
      <Button display='flex' justifyContent='space-between'  __css={styles.tab} {...tabProps}>
        <Box as='span' marginLeft={'5px'} mr='0'>
          {isSelected ? <FaPizzaSlice size={20}/> : ''}
        </Box>
        {tabProps.children}
      </Button>
    )
  })

  export const  Meal  = React.forwardRef((props, ref) => {
    // 1. Reuse the `useTab` hook
    const tabProps = useTab({ ...props, ref })
    const isSelected = !!tabProps['aria-selected']

    // 2. Hook into the Tabs `size`, `variant`, props
    const styles = useMultiStyleConfig('Tabs', tabProps)

    return (
      <Button display='flex' justifyContent='space-between'  __css={styles.tab} {...tabProps}>
        <Box as='span' marginLeft={'5px'} mr='0'>
          {isSelected ? <GiMeal size={20}/> : ''}
        </Box>
        {tabProps.children}
      </Button>
    )
  })

  export const  FastFoodX  = React.forwardRef((props, ref) => {
    // 1. Reuse the `useTab` hook
    const tabProps = useTab({ ...props, ref })
    const isSelected = !!tabProps['aria-selected']

    // 2. Hook into the Tabs `size`, `variant`, props
    const styles = useMultiStyleConfig('Tabs', tabProps)

    return (
      <Button display='flex' justifyContent='space-between'  __css={styles.tab} {...tabProps}>
        <Box as='span' marginLeft={'5px'} mr='0'>
          {isSelected ? <MdFastfood size={20}/> : ''}
        </Box>
        {tabProps.children}
      </Button>
    )
  })

  export const  Drink  = React.forwardRef((props, ref) => {
    // 1. Reuse the `useTab` hook
    const tabProps = useTab({ ...props, ref })
    const isSelected = !!tabProps['aria-selected']

    // 2. Hook into the Tabs `size`, `variant`, props
    const styles = useMultiStyleConfig('Tabs', tabProps)

    return (
      <Button display='flex' justifyContent='space-between'  __css={styles.tab} {...tabProps}>
        <Box as='span' marginLeft={'5px'} mr='0'>
          {isSelected ? <BiDrink size={20}/> : ''}
        </Box>
        {tabProps.children}
      </Button>
    )
  })