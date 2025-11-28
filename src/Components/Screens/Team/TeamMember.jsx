import React from 'react';
import Twitter from './images/aremxy_twitter.svg';
import linkedin from './images/aremxy_linkedin.svg';
import Email from './images/aremxy_mail.svg';

const TeamMember = ({memberData: {name, 
  image, 
  profession, 
  description, 
  linkedIn, 
  email, 
  twitter
}}) => {
  return (
    <div 
    className={`w-full border-[4px] h-[467.36px] md:h-[408.8px] 
    lg:h-[728px] rounded-t-[64.19px] rounded-b-[6px] flex flex-col
     border-[#d4d1d1] lg:border-[7px] my-[20px]`}>
      <div className="h-[45%] flex w-full
       z-[30] items-center justify-center">
      <img className="rounded-t-[64.19px] h-full w-full" 
    src={image} alt="" />
      </div>
      <div className='flex flex-col justify-end items-center
      pt-[50.2px] h-[55%] bg-[#eeebeb] z-[20] md:pt-[36.5px] lg:pt-[83px]'>
        <h2 className='text-left mb-[10px] text-primary font-bold lg:mb-[19px] 
        text-[15.41px] leading-[18.49px] lg:text-[24px] lg:leading-[28.8px]'>
          {name}
          </h2>
        <h2 className='text-left mb-[16.95px] md:mb-[13.5px] text-[15.41px] leading-[18.49px] lg:text-[24px] lg:leading-[28.8px] font-bold'>{profession}</h2>
        <p className='mx-[18px] mb-[40.2px] lg:mb-[61px] text-justify md:mb-[33.6px] text-[12px] leading-[18px] md:text-[11px] md:leading-[16.5px] lg:text-[20px] lg:leading-[30px]'>{description}</p>
        <div className="w-full h-[41.1px] bg-primary md:h-[34.94px] lg:h-[64px]">
          <ul className='flex items-center justify-center h-full gap-[19.22px] md:gap-[17px] lg:gap-[29.94px]'>
            <li>
              <a href={`${linkedIn}`} target='blank' 
               className='block w-[20.06px] h-[20.06px] md:w-[17.55px]
                md:h-[17.55px] lg:w-[31.25px] lg:h-[31.25px]'>
                <img src={linkedin} alt='linkedin_icon'
                 className='w-full h-full object-cover'/>
              </a>
            </li>
           
        
            <li>
              <a href={`${twitter}`} className='block w-[20.06px] h-[20.06px] md:w-[17.55px] md:h-[17.55px] lg:w-[31.25px] lg:h-[31.25px]'>
                <img src={Twitter} alt='twitter_icon'/>
              </a>
            </li>
            <li>
              <a href={`${email}`} className='block w-[26.96px] h-[20.06px] md:w-[23.58px] md:h-[17.55px] lg:w-[42px] lg:h-[31.25px]'>
                <img src={Email} alt='email_icon' className='w-full h-full object-cover'/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TeamMember;
