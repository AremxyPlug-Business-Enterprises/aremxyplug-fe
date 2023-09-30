import React from 'react';
import { DashBoardLayout } from '../../Layout/DashBoardLayout';
import { Link } from "react-router-dom";
import cloud from '../PointRedeem/images/cloud storage convert.svg'
import icon from '../PointRedeem/images/receipt-add.svg'
import arrowdown from '../PointRedeem/images/arrow-down.svg'
import icon1 from '../PointRedeem/images/Group.svg'
import icon2 from '../PointRedeem/images/convert-card.svg'
import icon3 from '../PointRedeem/images/clock.svg'
import flag from '../PointRedeem/images/Country Flags.svg'
import Joi from "joi";
import { useContext } from "react";
import { ContextProvider } from "../../../Context";
const PointRedeem = () => {
    const {
        transfer,
        setTransfer,
        receive,
        setReceive,
        setInternationalDetailPopUp,
      } = useContext(ContextProvider);
    
      const transferHandler = (e) => {
        setTransfer(e.target.value);
      };
      const receiveHandler = (e) => {
        setReceive(e.target.value);
      };
    
      const schema = Joi.object({
        transfer: Joi.string()
          .pattern(new RegExp(/\d{4,}/))
          .required()
          .messages({
            "string.pattern.base": "Amount can not be less than 1000",
          }),
        receive: Joi.string()
          .pattern(new RegExp(/\d{4,}/))
          .required()
          .messages({
            "string.pattern.base": "Amount can not be less than 1000",
          }),
      });
    
      const handleProceed = (e) => {
        e.preventDefault();
    
        const { error } = schema.validate({
          transfer,
          receive,
        });
        // if (error) {
        //     setErrors(
        //       error.details.reduce((acc, curr) => {
        //         acc[curr.path[0]] = curr.message;
        //         return acc;
        //       }, {})
        //     );
        //   } else {
        //     setErrors({});
        //     setInternationalDetailPopUp(true);
        //   }
        };
    
    return ( 

        
        <DashBoardLayout>
           <div className='flex flex-col w-full ' >
            {/* top part after nav bar */}
                <div className='flex flex-row w-full pt-[20px]  h-[90px] md:h-[112.29px] lg:h-[196px] lg:px-[50px]  px-[16px] rounded-lg md:rounded-[11.5px] lg:rounded-[20px] justify-between  py-2 bg-gradient-to-r from-[#92ABFE] to-[#FFF741]'>
                    <div className='flex flex-col gap-2  ' >
                        <div className='text-[8px] font-[600]  md:text-[13.75px] md:leading-[20.63px] lg:pt-[25px] lg:text-[24px] lg:leading-[36px] text-[#000000] leading-[12px]'>REDEEM YOUR EARNED POINTS WITH <br /> AREMXYPLUG.</div>
                        <div className='text-[6.67px] font-[400] md:text-[11.46px] md:leading-[14.9px] lg:text-[20px] lg:leading-[26px] text-[#000000] leading-[8.67px]'>Redeem all your earned points to real money, withdrawn to <br />
                             your bank account instantly without any hassle, free and enjoy!</div>
                    </div>
                    <div><img className='w-[88.38px] md:w-[151.9px] md:h-[85.9px] lg:w-[265px] lg:h-[150px]' src= {cloud} alt="" /> </div>
                </div>

                {/* text lines after top part */}
                <div className='text-[10px] font-[500] mt-[30px] md:mt-[30px] lg:mt-[50px] md:text-[11.46px] md:leading-[14.9px] lg:text-[20px] lg:leading-[26px] text-[#7C7C7C]' >How much points would you like to redeem to real money?</div>
                <div className='font-[500] text-[10px] py-1 mt-[30px] md:mt-[30px] lg:mt-[50px] text-center px-4 md:text-[9.17px] lg:text-[16px] leading-[20.8px] lg:px-6 lg:w-fit  md:flex md:flex-row md:w-fit md:py-1 lg:py-3 rounded-sm md:rounded-sm lg:rounded-md md:leading-[11.5px] bg-primary text-white'>Real-time Points Redeem Tracker</div>
                
                {/* Section with input boxes */}
                <div className='mt-[20px] md:mt-[30px] lg:mt-[50px] flex flex-row '>
                    <div className='border-[1px] w-[85%] md:w-[92%] h-[30px] md:h-[40px] lg:h-[60px] px-2 py-0 md:pt-1 lg:pt-4 border-slate-200'><input type="number" onChange={transferHandler} className='w-[100%] outline-none text-[10px] lg:text-[16px] leading-[20.8px  font-[600]  text-[#000]' placeholder='Amount to Redeem' /> </div>
                    <div className='h-[30px] md:h-[40px] lg:h-[60px] w-[15%] md:w-[8%] gap-2 lg:gap-4 flex flex-row px-3 py-2 bg-primary items-center   '>
                        <div> <img src= {icon} className='md:w-[13.75px] md:h-[13.75px] lg:w-[24px] lg:h-[24px]'  alt="" /> </div>
                        <div> <img src= {arrowdown} className='md:w-[13.75px] md:h-[13.75px] lg:w-[24px] lg:h-[24px] '  alt="" /> </div>
                    </div>
                </div>
                <div className='flex flex-col items-center mt-[8px] md:mt-[8px] lg:mt-[20px] text-[#7C7C7C] lg:text-[16px] leading-[20.8px] gap-2 lg:gap-4 font-[500] text-[7px] md:text-[9.2px] '>
                    <div className='border-[1px] border-slate-200 px-1 py-0 rounded-sm' >Minimum 100 PTS</div>
                    <div className='border-[1px] border-slate-200 pl-1 pr-3 py-0 rounded-sm'>Available Points Balance (50,000.00)</div>
                </div>
                <div className='mt-[7px] flex flex-row lg:mt-[20px]'>
                    <div className='border-[1px] w-[85%] md:w-[92%] h-[30px] md:h-[40px] lg:h-[60px] px-2 py-0 md:pt-1 lg:pt-4 border-slate-200'><input type="number" onChange={receiveHandler} className=' w-[100%] outline-none text-[10px] lg:text-[16px] leading-[20.8px] font-[600] text-[#000]' placeholder='Amount to Receive' /> </div>
                    <div className='h-[30px] md:h-[40px] lg:h-[60px] w-[15%] md:w-[8%] gap-2 lg:gap-4 flex flex-row px-3 py-2 bg-primary items-center   '>
                        <div> <img src= {flag} className='md:w-[13.75px] md:h-[13.75px] lg:w-[24px] lg:h-[24px]'   alt="flag" /> </div>
                        <div> <img src= {arrowdown} className='md:w-[13.75px] md:h-[13.75px] lg:w-[24px] lg:h-[24px]'  alt="arrow" /> </div>
                    </div>
                </div>

                {/* Section after input boxes */}
                <div className='flex flex-row mt-[20px]  justify-between text-[#7C7C7C] font-[600] md:text-[9.17px] text-[8px] lg:text-[16px]' >
                    <div className='flex flex-row items-center gap-1'>
                        <div> <img src= {icon1} className='lg:w-[20px] md:w-[11px] ' alt="" /></div>
                        <div>1 PTS ~ 1 NGN</div>
                    </div>
                    <div className='flex flex-row items-center gap-1'>
                        <div> <img src= {icon2} className='lg:w-[20px] md:w-[11px]  ' alt="" /> </div>
                        <div>Transaction Fee - ₦0.00 </div>
                    </div>
                    <div className='flex flex-row items-center gap-1'>
                        <div> <img src= {icon3} className='lg:w-[20px] md:w-[11px]  ' alt="" /> </div>
                        <div>Completion Time - Instantly.</div>
                    </div>
                </div>
                <div className='flex flex-col justify-center md:items-center'>
                    <div className={ ` ${
          (transfer.length < 4 ? "bg-[#0008]" : "bg-[#04177f]",
          receive.length < 4 ? "bg-[#0008]" : "bg-[#04177f]")
        } text-[12px] mt-[50px] md:mt-[40px] md:w-fit lg:px-12 lg:text-[16px] lg:px md:py-1 md:rounded-md md:px-6   py-3 rounded-md font-[600] text-center text-white`}>Proceed</div>
                </div>
                
                <div className='flex flex-row items-center justify-center mt-[200px] md:mt-[38%] lg:mt-[26%] gap-2'>
                    <div className='text-[8px] lg:text-[12px] font-[600] text-black'>You need help?</div>
                    <Link to="/ContactUs">
                    <div className='bg-primary text-white lg:text-[8px] text-[7px] px-2 py-1 leading-[10.5px] rounded-lg text-center'>Contact us</div>
                    </Link>
                </div>
            </div> 
        </DashBoardLayout>
     );
}
 

export default PointRedeem;