import React  from 'react';
const VideoSection = () => {

 return (
      
        <div className=" h-screen bgVideo w-full ">
                <h1 className='text-4xl text-center pt-36 font-bold'>یه کلیپ خوشمزه ببینیم</h1>
                <div className='max-w-[1240px]  flex justify-center mx-auto mt-20 '>
                      
                    
                        <iframe className='lg:w-full w-[80%] mx-auto rounded-lg shadow-custom2 ' width="560" height="315" src="https://www.youtube.com/embed/9i4SKHbhbqk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    
                    
                </div>
      </div>
    );
};

export default VideoSection;

// url='https://www.youtube.com/watch?v=R8Y7NWC5jgM'