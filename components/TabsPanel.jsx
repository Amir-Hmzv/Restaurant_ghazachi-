import React from 'react';

import Image from 'next/image'
const TabsPanel = ({image}) => {
    return (
        <>
                  <div className='relative'>
            <Image  src={image} alt=''  width={500} height={300}/>
            <div className='tab-btn'>چیکن برگر پنیری</div>
          </div>
          <div className='mt-10 lg:mt-0 relative'> 
             <Image src={image} alt=''   width={500} height={300}/>
             <div className='tab-btn'>چیکن برگر پنیری</div>
        </div>
        </>
    );
};

export default TabsPanel;