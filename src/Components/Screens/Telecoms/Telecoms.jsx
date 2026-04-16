import React from 'react'
import TelecomsHeader from './TelecomsHeader';
import TelecomsCard from './TelecomsCard';
import bgImage from './images/TelecomBg.avif';
import { desktopData } from './data/telecomData';
import { mobileData } from './data/telecomData';
import { Link } from 'react-router-dom';
import mobileBg from './images/mobileBg.png'

const Telecoms = () => {
  return (
    <>
        <div className='w-[90%]  pt-[15%] lg:pt-[5%] md:pt-[5%] md:w-[84%]'>
            <TelecomsHeader/>
        </div>
        <div className="w-full  mb-[25%] md:mb-[15%]">
            <div className="w-full h-auto bg-white md:hidden bg-center bg-no-repeat px-[5%] bg-cover p-[11px]" style={{backgroundImage: `url(${mobileBg})`}}>
                <div className="flex flex-col gap-[80px] mb-[80px]">
                    { mobileData.map((data) => (
                        <TelecomsCard key={data.id} cardData={data}/>
                    ))}
                </div>
                <div className='flex justify-center'>
                    <Link to='/pricing' className='inline-block px-[22px] py-[9px] text-white font-bold text-[9px] leading-[11.31px] bg-primary rounded-[4.73px]'>Explore Pricing</Link>
                    {/* linked explore more to pricing page, which i hope will exist someday */}
                </div>
            </div>
            {/* formed a sort of table using flex box, it has four rows and each rows contains two column. make sure to check data for more info */}
            <div className="hidden w-full md:block md:p-[20px] lg:p-[25px] bg-center bg-no-repeat bg-cover" style={{backgroundImage: `url(${bgImage})`}}>
                <div className="flex flex-col gap-[80px] lg:mb-[160px] md:mb-[111.06px] lg:gap-[150px]">
                    { desktopData.map((data) => (
                        <div className='flex gap-[198px]' key={data.id}>
                            { data.rows.map((item, index) => (
                                <TelecomsCard key={index} cardData={item}/>
                            ))}
                        </div>
                    ))
                    }
                </div>
                <div className='flex justify-center'>
                    <Link to='/pricing' className='rounded-[7px] inline-block px-[25px] py-[12px] text-white font-bold text-[10px] leading-[11.31px] bg-primary md:px-[21px] lg:px-[37px] lg:py-[15px] lg:text-[14px] lg:leading-[16px]'>Explore Pricing</Link>
                    {/* linked explore more to pricing page, which i hope will exist someday */}
                </div>
            </div>
        </div>
    </>
  )
}

export default Telecoms;
