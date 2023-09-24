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
           <div className='flex flex-col' >
            {/* top part after nav bar */}
                <div className='flex flex-row  px-4 rounded-md  py-2 bg-gradient-to-r from-[#92ABFE] to-[#FFF741]'>
                    <div className='flex flex-col gap-2 ' >
                        <div className='text-[8px] font-[600] text-[#000000]'>REDEEM YOUR EARNED POINTS WITH <br /> AREMXYPLUG.</div>
                        <div className='text-[6.67px] font-[400] text-[#000000]'>Redeem all your earned points to real money, withdrawn to <br />
                             your bank account instantly without any hassle,free and enjoy!</div>
                    </div>
                    <div><img className='w-[88.38px] h-[]' src= {cloud} alt="" /> </div>
                </div>

                {/* text lines after top part */}
                <div className='text-[8px] font-[500] mt-[15px] text-[#7C7C7C]' >How much points would you like to redeem to real money?</div>
                <div className='font-[500] text-[7px] py-1 mt-[20px] text-center bg-primary text-white'>Real-timePoints Redeem Tracker</div>
                
                {/* Section with input boxes */}
                <div className='mt-[20px] flex flex-row'>
                    <div className='border-[1px] w-[271.75px] h-[30px]  px-2 py- border-slate-200'><input type="text" className='  text-[7px] font-[600] text-[#7C7C7C]' placeholder='Amount to Redeem' /> </div>
                    <div className='h-[30px] w-[50px] gap-2 flex flex-row px-3 py-2 bg-primary items-center   '>
                        <div> <img src= {icon}   alt="" /> </div>
                        <div> <img src= {arrowdown}  alt="" /> </div>
                    </div>
                </div>
                <div className='flex flex-col items-center mt-[8px] text-[#7C7C7C] gap-2 font-[500] text-[7px] '>
                    <div className='border-[1px] border-slate-200 px-1 py-0 rounded-sm' >Minimum 100 PTS</div>
                    <div className='border-[1px] border-slate-200 pl-1 pr-3 py-0 rounded-sm'>Available Points Balance (50,000.00)</div>
                </div>
                <div className='mt-[7px] flex flex-row'>
                    <div className='border-[1px] w-[271.75px] h-[30px]  px-2 py- border-slate-200'><input type="text" className='  text-[7px] font-[600] text-[#7C7C7C]' placeholder='Amount to Receive' /> </div>
                    <div className='h-[30px] w-[50px] gap-2 flex flex-row px-3 py-2 bg-primary items-center   '>
                        <div> <img src= {flag}   alt="" /> </div>
                        <div> <img src= {arrowdown}  alt="" /> </div>
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
                <div className='text-[12px] mt-[50px] py-3 rounded-md font-[500] text-center text-white bg-primary'>Proceed</div>
                <div className='flex flex-row items-center justify-center mt-[40px] gap-2'>
                    <div className='text-[8px] font-[600] text-black'>You need help?</div>
                    <div className=' bg-primary text-white text-[7px] px-2 py-1 leading-[10.5px] rounded-lg text-center '>Contact us</div>
                </div>
            </div> 
        </DashBoardLayout>
     );
}
 

export default PointRedeem;