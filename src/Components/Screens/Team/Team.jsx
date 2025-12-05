import React from 'react';
import TeamMember from './TeamMember';
import { memberData } from './data/data';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Ameenat  from "../AboutUs/ImageAbout/Ameenat CLO (1).jpg"
import Habib  from "../AboutUs/ImageAbout/Founder & CEO.jpg";
import Victory from "../AboutUs/ImageAbout/Victory CTO.jpg";
import pranay from "../AboutUs/ImageAbout/Pranay CPO.jpg";
import Habeebat from "../AboutUs/ImageAbout/Habibat CFO.jpg"


const Team = () => {
  const halfData = memberData.slice(0, 10);
  const secondHalfData = memberData.slice(10, 20);

  const theProfileArray = [
    { name : "Habib Kamaldeen", image : Habib,
       profession : "Founder & CEO", description : "Visionary leader and strategist, steering business development and innovation.", 
      linkedIn : " https://www.linkedin.com/in/habib-kamaldeen-876a8b221 ",
       email : "", twitter : " https://x.com/aremxy_"},
  
     { name : "Habibat Kamaldeen Raji", profession : "Chief Finance Officer (CFO)", image : Habeebat ,
      description : " Oversees financial planning, investment, and fiscal compliance.",
       linkedIn : " https://www.linkedin.com/in/habibat-kamaldeen-raji-2278b8254", 
      email : "", twitter : ": https://x.com/okeowo7525 "},
  
      { name : "Victory Otaghogho Agbabune", 
        profession : "Chief Technology Officer (CTO)", image : Victory,
        description : "Leads platform architecture, technology strategy, and infrastructure scaling.", 
        linkedIn : " https://www.linkedin.com/in/victory-agbabune ", email : "",
         twitter : " https://x.com/sadman_vick "},
       { name : "Pranay Mishra",
         profession : "Chief Product Officer (CPO)", image : pranay,
         description : "Leads product vision and  strategy, design development, and oversees the entire product lifecycle from planning to execution."
         , linkedIn : "https://www.linkedin.com/in/pm-ui-ux", email : "", twitter : "https://x.com/pranaymishra401"},
        { name : "Amina Abiola Abidemi", profession : "Chief Legal Officer (CLO)", image : Ameenat,
           description : " Oversees all legal affairs, regulatory compliance, and corporate governance.", 
           linkedIn : "https://www.linkedin.com/in/amina-abiola-a64483238", email : "", twitter : "https://x.com/meenahlawdesk"},]
  
  

  const [show, setShow] = useState(false)
  return (
    <div className='w-[90%] md:w-[84%] mx-auto pt-[15%] md:pt-[5%] mb-[25%] md:mb-[15%]'>
      <div className="flex flex-col gap-[53.39px] mb-[53px] md:gap-[100px] md:mb-[125.97px] lg:gap-[150px] lg:mb-[150px]">
       <h2 className="w-[80%] mx-auto py-[22.36px] border rounded-full text-center font-bold text-[16.77px] leading-[18.45px] md:w-[33%] lg:text-[30px] lg:leading-[45px] lg:py-[40px] lg:w-[40%]" style={{boxShadow:`0px 0px 11.186px rgba(0, 0, 0, 0.25)`}}>OUR TEAM MEMBERS</h2>
       <p className='text-[12px] leading-[18px] text-justify lg:text-[18px] lg:leading-[27px]'>At AremxyPlug, we think that the success of our company is built on the strength of our team. We take great pride in having a skilled and experienced team of experts who are committed to giving our clients excellent services.</p>
      </div>
      <div className="w-full h-full md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-[131.96px] md:gap-y-[104.49px] 
      lg:gap-x-[235px] lg:gap-y-[158px] gap-y-[20px] ">
        { theProfileArray.map((item, index) => (
          <TeamMember key={index} memberData={item}/>
        ))}
      </div>
      
      <div className='flex justify-center mt-[100px]'>
          <Link to={`/ContactUs`} className='bg-primary text-[10px] font-bold leading-[15px] text-white px-[35px] py-[12px] inline-block rounded-[7px] lg:px-[37px] lg:py-[15px] lg:text-[14px] lg:leading-[16px]'>Contact Us</Link>
      </div>
    </div>
  );
}

export default Team;
