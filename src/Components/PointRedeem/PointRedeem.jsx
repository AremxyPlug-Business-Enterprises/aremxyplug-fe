import React from 'react';
import { DashBoardLayout } from '../Dashboard/Layout/DashBoardLayout';
import cloud from '../PointRedeem/images/cloud storage convert.svg'
import icon from '../PointRedeem/images/Vector.svg'
import arrowdown from '../PointRedeem/images/arrow-down.svg'
import flag from '../PointRedeem/images/Country Flags.svg'
import icon1 from '../PointRedeem/images/Group.svg'
import icon2 from '../PointRedeem/images/convert-card.svg'
import icon3 from '../PointRedeem/images/clock.svg'
const PointRedeem = () => {
    return ( 
        <DashBoardLayout>
           <div className='flex flex-col ' >
            {/* top part after nav bar */}
                <div className='flex flex-row  px-4 rounded-md justify-between  py-2 bg-gradient-to-r from-[#92ABFE] to-[#FFF741]'>
                    <div className='flex flex-col gap-2 ' >
                        <div className='text-[8px] font-[600] md:text-[13.75px] md:leading-[20.63px] text-[#000000] leading-[12px]'>REDEEM YOUR EARNED POINTS WITH <br /> AREMXYPLUG.</div>
                        <div className='text-[6.67px] font-[400] md:text-[11.46px] md:leading-[14.9px] text-[#000000] leading-[8.67px]'>Redeem all your earned points to real money, withdrawn to <br />
                             your bank account instantly without any hassle,free and enjoy!</div>
                    </div>
                    <div><img className='w-[88.38px] md:w-[151.9px] md:h-[85.9px]' src= {cloud} alt="" /> </div>
                </div>

                {/* text lines after top part */}
                <div className='text-[8px] font-[500] mt-[15px] md:mt-[20px] md:text-[11.46px] md:leading-[14.9px] text-[#7C7C7C]' >How much points would you like to redeem to real money?</div>
                <div className='font-[500] text-[7px] py-1 mt-[20px] md:mt-[24px] text-center px-4 md:text-[9.17px] md:flex md:flex-row md:w-[200px] md:py-1 md:rounded-sm md:leading-[11.5px] bg-primary text-white'>Real-timePoints Redeem Tracker</div>
                
                {/* Section with input boxes */}
                <div className='mt-[20px] md:mt-[30px] flex flex-row '>
                    <div className='border-[1px] w-[85%] md:w-[92%] h-[30px] md:h-[40px]  px-2 py-0 md:pt-1  border-slate-200'><input type="text" className='  text-[7px] md:text-[9.2px] font-[600]  text-[#7C7C7C]' placeholder='Amount to Redeem' /> </div>
                    <div className='h-[30px] md:h-[40px] w-[15%] md:w-[8%] gap-2 flex flex-row px-3 py-2 bg-primary items-center   '>
                        <div> <img src= {icon} className='md:w-[13.75px] md:h-[13.75px]'  alt="" /> </div>
                        <div> <img src= {arrowdown} className='md:w-[13.75px] md:h-[13.75px]'  alt="" /> </div>
                    </div>
                </div>
                <div className='flex flex-col items-center mt-[8px] text-[#7C7C7C] gap-2 font-[500] text-[7px] md:text-[9.2px] '>
                    <div className='border-[1px] border-slate-200 px-1 py-0 rounded-sm' >Minimum 100 PTS</div>
                    <div className='border-[1px] border-slate-200 pl-1 pr-3 py-0 rounded-sm'>Available Points Balance (50,000.00)</div>
                </div>
                <div className='mt-[7px] flex flex-row'>
                    <div className='border-[1px] w-[85%] md:w-[92%] h-[30px] md:h-[40px]  px-2 py-0 md:pt-1 border-slate-200'><input type="text" className='  text-[7px] md:text-[9.2px] font-[600] text-[#7C7C7C]' placeholder='Amount to Receive' /> </div>
                    <div className='h-[30px] md:h-[40px] w-[15%] md:w-[8%] gap-2 flex flex-row px-3 py-2 bg-primary items-center   '>
                        <div> <img src= {flag} className='md:w-[13.75px] md:h-[13.75px]'   alt="" /> </div>
                        <div> <img src= {arrowdown} className='md:w-[13.75px] md:h-[13.75px]'  alt="" /> </div>
                    </div>
                </div>
                {/* Section after input boxes */}
                <div className='flex flex-row mt-[20px] blur-[1px] justify-between text-[#7C7C7C] font-[600] text-[6px]' >
                    <div className='flex flex-row items-center gap-1'>
                        <div> <img src= {icon1} alt="" /></div>
                        <div>1 PTS ~ 1 NGN</div>
                    </div>
                    <div className='flex flex-row items-center gap-1'>
                        <div> <img src= {icon2} alt="" /> </div>
                        <div>Transaction Fee - ₦0.00 </div>
                    </div>
                    <div className='flex flex-row items-center gap-1'>
                        <div> <img src= {icon3} alt="" /> </div>
                        <div>Completion Time - Instantly.</div>
                    </div>
                </div>
                <div className='flex flex-col justify-center md:items-center'>
                    <div className='text-[12px] mt-[50px] md:mt-[40px] md:w-[100px] md:py-1 md:rounded-md md:px-6   py-3 rounded-md font-[500] text-center text-white bg-primary'>Proceed</div>
                </div>
                
                <div className='flex flex-row items-center justify-center mt-[40px] md:mt-[250px] gap-2'>
                    <div className='text-[8px] font-[600] text-black'>You need help?</div>
                    <div className=' bg-primary text-white text-[7px] px-2 py-1 leading-[10.5px] rounded-lg text-center '>Contact us</div>
                </div>
            </div> 
        </DashBoardLayout>
     );
}
 

export default PointRedeem;