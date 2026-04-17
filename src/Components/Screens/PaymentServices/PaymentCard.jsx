import React from 'react';

const PaymentCard = ({title, message}) => {
  return (
        <div className={`h-[110px] flex flex-col justify-between  w-full  md:h-[88.48px] 
         lg:h-[151px] ${title === "International Payment" ? "md:items-center" : ""}`}>
            <h2 className={`text-[20px] text-primary font-bold text-center 
            ${title === "International Payment" ? "text-center" : "md:text-left text-center"} md:text-[17.38px] lg:text-[30px] lg:leading-[45px]`}>{title}</h2>
            <p className="text-[14px] md:text-left text-center font-medium text-black leading-[20px] 
      md:text-[11px] lg:text-[16px] lg:leading-[26px] opacity-80">{message}</p>
        </div>
  );
}

export default PaymentCard;
