import React from 'react';
import ContentMarketingHeader from './ContentMarketingHeader';
import { Link } from 'react-router-dom';
import  ContentMain from './images/contentMain2.avif';
import ContentMarketingCard from './ContentMarketingCard';
import KeyFeatureCard from './KeyFeatureCard';
import { contentData } from './data/data';
import { keyData } from './data/data';

const ContentMarketing = () => {
  return (
    <>
        <div className='w-[90%] mx-auto pt-[15%] lg:pt-[5%] md:pt-[5%] md:w-[84%]'>
            <ContentMarketingHeader/>
        </div>
        {/* bottom of header */}
        <div className='w-full pr-[5%] mt-[50px] md:pr-[8%] flex flex-col gap-[50px] pb-[50px] md:flex-row-reverse md:items-center md:gap-0 md:justify-between md:pb-[60.65px] lg:pb-[48.45px] border-b-[12.16px] lg:border-b-[21px] border-[#d9d9d9]'>
            <div className="ml-[5%] md:ml-0 md:w-[329px] lg:w-[600px]">
                <h2 className='text-justify text-[15px] leading-[22.5px] font-bold mb-[15px] md:text-[14px] lg:text-[24px] lg:leading-[36px] lg:mb-[25px]'>Let’s help you to develop the best content marketing strategies.</h2>
                <p className='text-[12px] text-justify leading-[18px] md:text-[11px] lg:text-[18px] lg:leading-[27px]'>Your content needs to carry a unique and identifiable voice. Stay ahead of your brand with content marketing.</p>
            </div>
            <div className='h-[244.53px] md:h-[280.47px] lg:h-[538.3px]'>
                <img src={ContentMain} alt="content_strategy" className='h-[244.53px] md:h-[279.47px] lg:h-[538.3px]'/>
            </div>
        </div>
        {/* content marketing features */}
        <div className="w-[90%] mx-auto md:w-[84%] py-[50px] flex flex-col gap-[80px] lg:gap-[100px]">
            { contentData.map((item) => (
                <ContentMarketingCard key={item.id} cardDetails={item}/>
            ))}
        </div>
        {/* key features */}
        <div className="w-[90%] mx-auto md:w-[84%] mb-[25%] md:mb-[15%]">
            <h2 className="text-center text-primary text-[26px] leading-[39px] mb-[20px] md:mb-[29.96px] lg:mb-[100px] font-bold lg:text-[32px] lg:leading-[48px]">Our Key Features</h2>
            <div className="flex flex-col gap-[100px] lg:gap-[150px]">
                <div className="flex flex-col gap-[25px] md:flex-row lg:gap-[30px]">
                    { keyData.map((item) => (
                        <KeyFeatureCard key={item.id} keyDetails={item}/>
                    ))}
                </div>
                {/* last item of page */}
                <div className="rounded-[11px] h-[254px] px-[10px] flex flex-col justify-between py-[30px] md:h-[142.29px] md:w-[663.72px] md:mx-auto md:py-[14.48px] md:px-[18.53px] lg:w-[95%] lg:h-[244px] lg:py-[25px]" style={{ boxShadow: "0px 0px 11.676px rgba(0, 0, 0, 0.25)" }}>
                    <h2 className="text-primary text-[20px] leading-[30px] text-center font-bold lg:text-[30px] lg:leading-[45px]">Audit Your Content Strategies and Campaigns</h2>
                    <p className="text-[10.42px] leading-[15.64px] text-center lg:text-[18px] lg:leading-[27px]">Content audit is the process of systematically analyzing and assessing all the content on your website. Let’s take your business to a milestone with a well-organized content audit, and enjoy excellent content results.</p>
                    <div className='text-center'>
                        <Link to={`/ContactUs`} className='bg-primary text-[10px] font-bold leading-[11.31px] text-white px-[35px] py-[12px] inline-block rounded-[7px] lg:px-[37px] lg:py-[15px] lg:text-[14px] lg:leading-[16px]'>Contact Sales</Link>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default ContentMarketing;
