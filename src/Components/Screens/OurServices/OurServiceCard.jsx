import React from 'react'
import { Link } from 'react-router-dom';

const 
OurServiceCard = ({cardDetails:{title, image, link, message, image_name}}) => {
  return (
    <div className="flex flex-col  gap-10 md:gap-14 h-auto">
    <div className='w-full flex md:flex-row h-full  flex-col py-[30px] lg:py-[40px]
     md:justify-between lg:gap-[25px] gap-[20px]'>
      <div className='flex flex-col gap-10 md:w-1/2 w-full'>
      <h2 className="text-[30px] leading-[40px]   font-bold md:text-left 
      text-center md:text-[26px] lg:text-[50px]  lg:leading-[60px] 
           text-[#04177F]">{title}
           </h2>

             <p className="text-[14px] md:text-left text-center font-medium text-black
              leading-[20px]   md:text-[11px] lg:text-[16px] lg:leading-[26px] opacity-80">
              {message}
              </p>
    
     </div>
               <div className="h-[110px] flex justify-center 
                lg:h-[263px] lg:py-4 md:h-[153px] md:py-0 md:w-1/2 w-full">
            <img src={image} alt={image_name} className='w-full h-auto object-contain'/>
        
                {/* each of the explore will link to separate page related to them */}
            </div>
             
      </div>
         <Link to={`/${link}`} 
              className='w-full md:w-[197px] px-2 bg-primary text-[14px] leading-[18px]
              font-bold  text-white  py-[16px]  text-center
         rounded-[7px] lg:px-[37px] lg:py-[15px] lg:text-[14px] lg:leading-[16px]'>
              Explore
              </Link>
      </div>
  
  )
}

export default OurServiceCard;
