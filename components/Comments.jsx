import React from 'react';
import avatar from '../public/avatar.png'
import Image from 'next/image'

const Comments = () => {
    return (
        <>
             <div className="mt-10 flex    ">
                <div className="ml-4"> <Image src={avatar} width={100} height={100}/></div>
                <div className=" space-y-2   ">
                  <h2>eminem</h2>
                  <p className="text-sm  text-[#b4b0b0]">24 اسفند 1399</p>
                  <p className="  w-full mmin-w-[200px] ">the food was greate i enjoyed begin your regular customer </p>
                
                </div>
                
              </div>
              <hr className="mt-10 lg:w-[60%]" />
        </>
    );
};

export default Comments;