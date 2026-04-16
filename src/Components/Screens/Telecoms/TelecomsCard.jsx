import React from 'react';

const TelecomsCard = ({cardData: {title , image, message, image_name}}) => {
  return (
    <div className='w-full h-[234.48px] flex flex-col  justify-between md:gap-[30px] md:w-[280.45px]
     md:h-[176.01px] lg:w-[500px] lg:h-[315px] lg:gap-[45px]'>
        <h2 className="text-[30px] leading-[40px]   font-bold md:text-left text-center 
    md:text-[26px] lg:text-[50px]  lg:leading-[60px] 
           text-[#04177F]">{title}</h2>
        <div className="w-[100.96px] h-[90.48px] mx-auto md:w-[93.11px] md:h-[81.33px] lg:w-[166px] lg:h-[145px] md:mx-0 md:overflow-hidden">
            <img src={image} alt={image_name} className='w-full h-full object-contain'/>
        </div>
        <p className="text-[14px] md:text-left text-center font-medium text-black leading-[20px] 
      md:text-[11px] lg:text-[16px] lg:leading-[26px] opacity-80">
          {message}
          </p>
    </div>
  );
}

export default TelecomsCard;
