import React from 'react'
import SEOHeader from './SEOHeader';
import SEOCard from './SEOCard';
import SEOListItem from './SEOListItem';
import seoMobileBg from './images/seoMobileBg.avif';
import seoDesktopBg from './images/seoDesktoBg.avif';
import keyFeatureImg from './images/Startup idea.svg'
import { seoData } from './data/data';
import { listData } from './data/data';
import { Link } from 'react-router-dom';

const SEOMarketing = () => {
  return (
    <>
    {/* hero section fro mobile */}
    <div className="w-full bg-cover bg-no-repeat bg-center" style={{backgroundImage:`url(${seoMobileBg})`}}>
        <div className='w-[90%] mx-auto pt-[15%] md:hidden'>
            <SEOHeader/>
        </div>
    </div>

    {/* hero section for desktop and tablet */}
    <div className="w-full bg-cover bg-no-repeat bg-center" style={{backgroundImage:`url(${seoDesktopBg})`}}>
        <div className='hidden md:mx-auto pt-[15%] md:block lg:pt-[5%] md:pt-[5%] md:w-[84%]'>
            <SEOHeader/>
        </div>
    </div>

    {/* seo content */}
    <div className='pt-[62.94px] mb-[25%] md:pt-[111.23px] md:mb-[15%]'>
        <div className='w-[90%] mx-auto flex flex-col gap-[50px] md:w-[84%] md:gap-[80px]'>
            { seoData.map((item) => (
                <SEOCard key={item.id} cardDetail={item}/>
            ))}
            {/* key feature section */}
            <div className='mt-[20px] flex flex-col gap-[100px]'>
                <div className="flex flex-col gap-[50px]">
                    <h2 className="text-primary text-center text-[30px] font-bold md:text-[18.16px] lg:text-[32px]">Our Key Features</h2>
                    <div className='flex flex-col gap-[50px]'>
                        <div className= 'md:flex md:flex-row-reverse md:w-[550.69px] mx-auto md:h-[247.8px] md:gap-[17px] md:items-center lg:w-[80%] lg:gap-[30px] lg:h-[442px] lg:justify-between'>
                            <div className='w-[235.93px] h-[215.6px] mx-auto md:mx-0 lg:w-[415px] lg:h-[380px]'>
                                <img src={keyFeatureImg} alt="key_feature" className='w-full h-full object-contain'/>
                            </div>
                            <ul className='flex flex-col gap-[40px] md:gap-[20.37px] lg:w-[60%] lg:gap-[28.37px]'>
                                { listData.map((item) => (
                                    <SEOListItem key={item.id} listItemDetail={item}/>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-[40px] w-full rounded-[11.58px] px-[10px] py-[30px] md:w-[80%] md:mx-auto lg:w-[85%]" style={{ boxShadow: "0px 0px 11.676px rgba(0, 0, 0, 0.5)" }}>
                            <h2 className='text-center text-primary text-[17.02px] font-bold leading-[25.53px] mb-[25px] lg:text-[30px]'>AremxyPlug SEO Marketing Service</h2>
                            <p className='text-[10.21px] mb-[25px] md:text-center lg:text-[18px]'>Let our experts use SEO's best practices to improve your business online visibility and reach more consumers. With SEO, you to attract more worthwhile visitors to your website. </p>
                            <div className='text-center'>
                                <Link to={`/ContactUs`} className='bg-primary text-[10px] font-bold leading-[11.31px] text-white px-[35px] py-[12px] inline-block rounded-[7px] lg:px-[37px] lg:py-[15px] lg:text-[14px] lg:leading-[16px]'>Contact Sales</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </>
  )
}

export default SEOMarketing;
