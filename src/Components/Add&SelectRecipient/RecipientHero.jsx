import React from 'react'
import recipientImage from '../Add&SelectRecipient/RecipientImages/heroImage.svg';

export default function RecipientHero() {
  return (
    <div className="RecipientHero  items-center w-[100%] rectangle1 flex justify-between 
    gap-[8.34px] min-h-[88.53px] pt-[9px]   pr-[4.619px] pb-[8.824px] pl-[16.72px] lg:mb-[40px] mb-[20px] rounded-[6.667px] 
  md:pt-[11.737px] md:pb-[6.454px] md:pr-[9.861px] md:pl-[29.339px] md:gap-[17.604px] md:h-[112.02px]
  md:rounded-[11.736px] lg:py-[20px] lg:pl-[60px] lg:pr-[15px] lg:gap-[20px] lg:h-[200px]
     lg:rounded-[20px]"> 
       <div className="flex flex-col gap-[5.016px]  w-[70%] lg:gap-[15px] md:gap-[8.802px]">
           {/* header */}
           <h2
             className="font-[600] capitalize leading-[14px] text-[10px] text-[#000] 
    md:text-[14.75px] md:leading-[20px]
     lg:text-[24px] lg:leading-[36px]"
           >
          transfer money to other banks.
           </h2>
           {/* sub-text */}
           <p
             className="font-[400] text-[10px] leading-[14px] 
     md:text-[14.75px] md:leading-[20.917px]
     lg:text-[20px] lg:leading-[30.8px] "
           >
            Transfer money from your wallets to any bank accounts globally without any 
            hassle or hidden fee.
</p>
         </div>
         <div className="w-[25%] h-[100%] flex items-center">
           <img
             src={recipientImage}
             className="w-[100%] md:h-[100%] h-[60px] "
             alt=""
           />
         </div>
       </div>
 
  )
}
