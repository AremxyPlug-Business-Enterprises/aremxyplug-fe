import React from 'react';
import SocialMediaHeader from './SocialMediaHeader';
import mainBg from './images/mainBg.png'
import SocialMediaCard from './SocialMediaCard';
import { socialMediaData } from './data/data';
import keyFeatureImg from './images/excited young woman receiving like notifications on her laptop.svg'
import SocialMediaListItem from './SocialMediaListItem';
import { Link } from 'react-router-dom';
import marketingChartImg from './images/marketingChart.svg'


const SocialMediaMarketing = () => {
  return (
    <>
      <div className="w-full px-[5%] md:px-[8%] md:pt-[5%] pt-[15%]
       mb-[25%] md:mb-[15%] bg-no-repeat bg-cover flex flex-col gap-[50px] md:gap-[120px]"
        style={{backgroundImage:`url(${mainBg})`}}>
        <SocialMediaHeader/>

        {/* bottom message ofthe header */}
        <div className='md:w-[53%]'>
            <h2 className="text-[15px] leading-[22.5px] font-bold mb-[15px] text-justify lg:text-[24px] lg:leading-[36px] lg:mb-[25px]">Let’s help you to bring remarkable success to your business.</h2>
            <p className="text-[12px] leading-[18px] text-justify md:text-[10px] md:leading-[15.47px] lg:text-[18px] lg:leading-[27px]">Great marketing on social media can bring remarkable success to your business, creating devoted brand advocates and even increasing leads and sales.</p>
        </div>

        {/* middle section of the page */}
        <div className="flex flex-col gap-[80px] lg:gap-[100px]">
            { socialMediaData.map((item) => (
                <SocialMediaCard key={item.id} cardDetail={item}/>
            ))}
        </div>
        {/* mobile version of key features */}
        <div className="md:hidden">
            <h2 className="text-primary text-center text-[30px] font-bold md:text-[18.16px] lg:text-[32px] lg:leading-[48px] mb-[60px]">Our Key Features</h2>
            <div className="flex flex-col gap-[60px]">
                <div className="w-[70%] mx-auto">
                    <img src={keyFeatureImg} alt="key_feature_img" className='w-full h-full object-contain'/>
                </div>
                <div className="flex flex-col gap-[40px]">
                    <SocialMediaListItem 
                        title={'Social Media Strategy'} 
                        message={'Helps your business to develop a social media strategy that aligns with your goals and target audience.'}
                    />
                    <SocialMediaListItem 
                        title={'Profile Setup and Optimization'} 
                        message={'Setting up and optimizing your social media profiles on platforms like Facebook, Twitter, Instagram, LinkedIn, and more.'}
                    />
                    <SocialMediaListItem 
                        title={'Content Creation and Scheduling'} 
                        message={'Creates engaging social media content and schedule it for optimal visibility and engagement for your business.'}
                    />
                    <SocialMediaListItem 
                        title={'Community Management'} 
                        message={'Manages your social media communities, interacts with followers, and responds to queries and comments.'}
                    />
                </div>
            </div>
        </div>
        {/* desktop and tablet version of key features */}
        <div className="hidden md:block">
            <h2 className="text-primary text-center text-[30px] font-bold md:text-[18.16px] lg:text-[32px] mb-[60px]">Our Key Features</h2>
            <div className="flex md:h-[175.99px] lg:h-[311px]">
                <div className="w-[32%] flex flex-col justify-between">
                    <SocialMediaListItem 
                        title={'Social Media Strategy'} 
                        message={'Helps your business to develop a social media strategy that aligns with your goals and target audience.'}
                    />
                    <SocialMediaListItem 
                        title={'Profile Setup and Optimization'} 
                        message={'Setting up and optimizing your social media profiles on platforms like Facebook, Twitter, Instagram, LinkedIn, and more.'}
                    />
                </div>
                <div className="w-[36%] h-full">
                    <img src={keyFeatureImg} alt="key_feature_img" className='w-full h-full object-contain'/>
                </div>
                <div className="w-[32%] flex flex-col justify-between">
                    <SocialMediaListItem 
                        title={'Content Creation and Scheduling'} 
                        message={'Creates engaging social media content and schedule it for optimal visibility and engagement for your business.'}
                    />
                    <SocialMediaListItem 
                        title={'Community Management'} 
                        message={'Manages your social media communities, interacts with followers, and responds to queries and comments.'}
                    />                    
                </div>
            </div>
        </div>
        {/* last item of the page */}
        <div className="rounded-[11px] p-[15px] pt-[30px] flex flex-col gap-[25px]" style={{ boxShadow: "0px 0px 11.676px rgba(0, 0, 0, 0.25)" }}>
                    <h2 className="text-primary text-[20px] leading-[30px] text-center font-bold lg:text-[30px] lg:leading-[45px] w-[80%] mx-auto md:w-[70%] lg:w-[60%]">Let’s Manage your social awareness and increase your sales</h2>
                    <p className="text-[12px] leading-[18px] text-center lg:text-[18px] lg:leading-[27px] md:px-[20px]">A social media marketing team consists of specialists spread across every niche to handle your social media marketing. It consists of professionals selected to suit your business needs such as:</p>
                    <div className='w-[72%] mx-auto'>
                        <img src={marketingChartImg} alt="marketing_chart"/>
                    </div>
                    <div className='text-center'>
                        <Link to={`/ContactUs`} className='bg-primary text-[10px] font-bold leading-[11.31px] text-white px-[35px] py-[12px] inline-block rounded-[7px] lg:px-[37px] lg:py-[15px] lg:text-[14px] lg:leading-[16px]'>Contact Sales</Link>
                    </div>
                </div>
      </div>
    </>
  );
}

export default SocialMediaMarketing;
