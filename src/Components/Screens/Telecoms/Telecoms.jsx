import React from 'react'
import TelecomsHeader from './TelecomsHeader';
import TelecomsCard from './TelecomsCard';
import bgImage from './telecomImages/TelecomBg.avif';
import { desktopData } from './data/telecomData';
import { mobileData } from './data/telecomData';
import { Link } from 'react-router-dom';
import mobileBg from './telecomImages/mobileBg.png'

const Telecoms = () => {
  return (
    <div className='h-full'>
        <div className='w-full px-[5%] pt-[15%] lg:pt-[5%] md:pt-[5%] '>
            <TelecomsHeader/>
        </div>

            <div className="w-full flex flex-col gap-[80px] py-10
            h-auto bg-white md:hidden bg-center  
            bg-no-repeat px-[5%] bg-cover p-[11px]"
             style={{
                backgroundImage: `url(${mobileBg})`,
                }}>
                
                    { mobileData.map((data) => (
                        <TelecomsCard key={data.id} cardData={data}/>
                    ))}
                    {/* Explore Pricing for Mobile Screens */}
                     <div className='flex justify-center'>
                    <Link to='/pricing'className='rounded-[7px] 
                    inline-block px-[25px] py-[12px] text-white font-bold 
                    text-[10px] leading-[11.31px] bg-primary md:px-[21px] 
                    lg:px-[37px] lg:py-[15px] lg:text-[14px] lg:leading-[16px]'>Explore Pricing</Link>
                  
                </div>
                </div>
               
        
            {/* formed a sort of table using flex box, it has four rows and each rows contains two column. make sure to check data for more info */}
            <div className="hidden px-[5%] w-full md:flex flex-col lg:gap-[60px] gap-[20px] py-[2%]
    bg-cover bg-center bg-no-repeat"style={{backgroundImage: `url(${bgImage})`}}>
          
                    { desktopData.map((data) => (
                        <div className='flex gap-[198px]' key={data.id}>
                            { data.rows.map((item, index) => (
                                <TelecomsCard key={index} cardData={item}/>
                            ))}
                        </div>
                    ))
                    }
                
                <div className='flex justify-center'>
                    <Link to='/pricing' className='rounded-[7px] 
                    inline-block px-[25px] py-[12px] text-white font-bold 
                    text-[10px] leading-[11.31px] bg-primary md:px-[21px] 
                    lg:px-[37px] lg:py-[15px] lg:text-[14px] lg:leading-[16px]'>
                        Explore Pricing</Link>
                    {/* linked explore more to pricing page, which i hope will exist someday */}
                </div>
            </div>
    
    </div>
  )
}

export default Telecoms;
