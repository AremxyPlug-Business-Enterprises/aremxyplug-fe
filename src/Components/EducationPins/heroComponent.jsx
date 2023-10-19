import React from 'react'
import remoteEducation from "../EducationPins/imagesEducation/Remote education.svg";
import '../../App.css';
export default function HeroComponent() {
  return (
    <div className="educationPinsHero  items-center w-[100%] rectangle1 flex justify-between 
     gap-[18.34px] min-h-[88.53px] pt-[9px]   pr-[4.619px] pb-[8.824px] pl-[16.72px] lg:mb-[40px] mb-[20px] rounded-[6.667px] 
   md:pt-[11.737px] md:pb-[6.454px] md:pr-[9.861px] md:pl-[29.339px] md:gap-[17.604px] md:h-[112.02px]
   md:rounded-[11.736px] lg:py-[20px] lg:pl-[60px] lg:pr-[15px] lg:gap-[20px] lg:h-[200px]
      lg:rounded-[20px]">
        <div className="flex flex-col gap-[5.016px]  w-[70%] lg:gap-[15px]  md:gap-[8.802px]">
            {/* header */}
            <h2
              className="font-[600] leading-[12px] text-[8px] text-[#000] 
     md:text-[13.75px] md:leading-[21px]
      lg:text-[24px] lg:leading-[36px]"
            >
            CHECK YOUR EXAMS RESULT WITH OUR EDUCATION 
              <br />
              PIN FEATURES.
            </h2>
            {/* sub-text */}
            <p
              className="font-[400] text-[7px] leading-[9.1px] 
      md:text-[9.167px]  md:leading-[11.917px]
      lg:text-[16px] lg:leading-[20.8px] "
            >
              <span className="md:block">
         Purchase an affordable education scratch pins / token to
         </span>
              <span className="md:block">
              check your waec, neco, and nabteb results, including jamb 
              </span>
              registration pin.
            </p>
          </div>
          <div className="w-[25%] h-[100%] flex items-center">
            <img
              src={remoteEducation}
              className="w-[100%] md:h-[100%] h-[60px] "
              alt=""
            />
          </div>
        </div>
  )
}
