import React from 'react';
import { DashBoardLayout } from '../Dashboard/Layout/DashBoardLayout';
import cloud from '../PointRedeem/images/cloud storage convert.svg'

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
                    <div><img className='w-[88.38px] h-[]' src= {cloud} alt="" /></div>
                </div>

                {/* text lines after top part */}
                <div className='text-[8px] font-[500] mt-[15px] text-[#7C7C7C]' >How much points would you like to redeem to real money?</div>
                <div className='font-[500] text-[7px] py-1 mt-[20px] text-center bg-[#04177F] text-white'>Real-timePoints Redeem Tracker</div>
                
                {/* Section with input boxes */}
                
            </div> 
        </DashBoardLayout>
     );
}
 

export default PointRedeem;