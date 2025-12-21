import React from "react";
import Bluebutton from "../../bluebutton/Bluebutton";
import { primaryColor } from "../cardIssuing/cardIssuing";
import "./GraphicDesign.css";
import { Link } from "react-router-dom";

function GraphicDesign() {
  return (
    <>
      <div>
        {/* <div className="h-[100vh] relative"> */}

        {/* header bg */}
        <div
          className=" mt-[40px] md:mt-[50px] lg:mt-[80px] grid lg:grid-cols-2 lg:gap-x-4  md:grid-cols-2 md:gap-x-4    
       grid-cols-1 gap-y-4 
       lg:px-[8%] px-[5%] 
       
        "
        >
          <div className=" py-4 sm:py-6  lg:py-8 md:py-6">
            <p
              className="text-[20px]  md:text-[26.06px] lg:text-[45px] font-bold lg:tracking-wider  "
              style={{
                color: primaryColor,
              }}
            >
              Graphic Design
            </p>
            <p className="text-[#000] text-justify text-[10.53px] md:text-[12px] lg:text-lg mt-4 sm:mt-6 md:mt-10  lg:mt-12 ">
              Graphic design is the creation of visual compositions to solve
              problems and communicate ideas through typography, imagery, color,
              and form. Design can be used for message delivery, brand identity
              development, product promotion and sales. Take a look at a
              successful company and analyze the role graphic design plays in
              both its branding and innovative design choices.
            </p>
            <div className="my-6">
              <Link to="/contactUs">
                <Bluebutton text="Contact Sales" />
              </Link>
            </div>
          </div>
          {/* EMAIL AND LADY IMAGE */}
          <div className="rounded-lg flex flex-col items-center   ">
            <img
              src="./Images/graphic_design/graphicsDesignImage.png"
              alt="background_image "
              className="w-[100%]   "
            />
          </div>
        </div>
      </div>

      {/*   We design a visual identity that reflects your company's mission and values.*/}
      <div
        className=" grid  lg:gap-x-4 md:grid-cols-2 lg:grid-cols-5 md:gap-x-4    
    grid-cols-1 gap-y-4 
    lg:pr-32  px-6 sm:px-16 mt-[50px] lg:pl-12 md:mt-[80px] lg:mt-[100px]
     "
      >
        <div
          // className="rounded-lg flex flex-col items-center  md:block lg:col-span-2"
          className="row-start-2 md:row-start-1  h-[350px] md:h-[unset]  bg-contain bg-center bg-no-repeat lg:col-span-2"
          style={{
            backgroundImage: "url(./Images/graphic_design/weDesignImage.png)",
          }}
        ></div>
        <div className=" py-4 sm:py-6  lg:py-8 md:py-6 lg:col-span-3 ">
          <p
            className="text-[15px] md:text-[13.9px] lg:text-[24px] font-bold lg:tracking-wider  "
            style={{
              color: "#000",
            }}
          >
            We design a visual identity that reflects your company's mission and
            values.
          </p>
          <p className="text-[#000] text-justify text-[12px] md:text-[9.34px] lg:text-lg mt-[14px] lg:mt-[25px]">
            Our experts create designs that boost brand awareness and name
            recognition. Strong visuals grab the attention of your audience,
            making you stand out against your competitor.
          </p>
        </div>
      </div>

      {/*    Build Trust And Credibility*/}

      <div
        className="grid  xl:gap-x-4  md:grid-cols-2 md:gap-x-4    
        grid-cols-1 gap-y-4 
        lg:px-[8%] px-[5%]   mt-[50px]  md:mt-[80px] lg:mt-[100px] 
       
     "
      >
        <div className=" py-4 sm:py-6  lg:py-8 md:py-6  ">
          {/* Text content 1 */}
          <div>
            <p
              className="text-[15px] md:text-[13.9px] lg:text-[24px] font-bold lg:tracking-wider  "
              style={{
                color: "#000",
              }}
            >
              Build Trust And Credibility
            </p>
            <p className="text-[#000] text-justify text-[12px] md:text-[9.34px] lg:text-lg mt-[14px] lg:mt-[25px] ">
              You must develop trust and credibility with your clientele. A
              thoughtful design and aesthetic pleasing logo can inspire your
              customer’s confidence. Our experts are available to provide you
              with first-rate service for your visual brand identity.
            </p>
          </div>
        </div>
        {/* Background image */}
        <div
          className="h-[350px] md:h-[unset]  bg-contain bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(./Images/graphic_design/buildTrustImage.png)",
          }}
        ></div>
      </div>

      {/* Tells Your Brand Story*/}

      <div
        className=" grid  lg:gap-x-4  md:grid-cols-2  xl:gap-x-4    
        grid-cols-1 gap-y-4 
        lg:px-[8%] px-[5%]  mt-[50px]  md:mt-[80px] lg:mt-[100px] 
       
     "
      >
        {/* Background image */}
        <div
          className="row-start-2 md:row-start-1 h-[350px] md:h-[unset]  bg-contain bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(./Images/graphic_design/brandStoryImage.png)",
          }}
        ></div>
        <div className=" py-4 sm:py-6  lg:py-8 md:py-6  ">
          {/* Text content 1 */}
          <div>
            <p
              className="text-[15px] md:text-[13.9px] lg:text-[24px] font-bold lg:tracking-wider  "
              style={{
                color: "#000",
              }}
            >
              Tells Your Brand Story
            </p>
            <p className="text-[#000] text-justify text-[12px] md:text-[9.34px] lg:text-lg mt-[14px] lg:mt-[25px] ">
              The story behind your brand is more effectively told through
              graphic design. Customers are interested in the "why" behind the
              goods and services you offer. Your brand messages may change from
              design to design, but the brand story will still remain the same
              over decades.
            </p>
          </div>
        </div>
      </div>

      {/*      Saves Time And Money*/}

      <div
        className="grid  xl:gap-x-4  md:grid-cols-2 md:gap-x-4    
        grid-cols-1 gap-y-4 
        lg:px-[8%] px-[5%]  mt-[50px]  md:mt-[80px] lg:mt-[100px] 
       
     "
      >
        <div className=" py-4 sm:py-6  lg:py-8 md:py-6  ">
          {/* Text content 1 */}
          <div>
            <p
              className="text-[15px] md:text-[13.9px] lg:text-[24px] font-bold lg:tracking-wider  "
              style={{
                color: "#000",
              }}
            >
              Saves Time And Money
            </p>
            <p className="text-[#000] text-justify text-[12px] md:text-[9.34px] lg:text-lg mt-[14px] lg:mt-[25px] ">
              A design that is captivated and timeless is essential in the
              ever-evolving digital world. Save time and money by investing in a
              vetted and professional graphic designer from the start, and avoid
              poorly designs that likely steer customers away from your
              business.
            </p>
          </div>
        </div>
        {/* Background image */}
        <div
          className="h-[350px] md:h-[unset]  bg-contain bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(./Images/graphic_design/savesTimeImage.png)",
          }}
        ></div>
      </div>

      {/*      Boost Brand Awareness*/}

      <div
        className=" grid  lg:gap-x-4  md:grid-cols-2  xl:gap-x-4    
        grid-cols-1 gap-y-4 
        lg:px-[8%] px-[5%]  mt-[50px]  md:mt-[80px] lg:mt-[100px] 
       
     "
      >
        {/* Background image */}
        <div
          className="row-start-2 md:row-start-1 h-[350px] md:h-[unset]  bg-contain bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(./Images/graphic_design/boostBrandImage.png)",
          }}
        ></div>
        <div className=" py-4 sm:py-6  lg:py-8 md:py-6  ">
          {/* Text content 1 */}
          <div>
            <p
              className="text-[15px] md:text-[13.9px] lg:text-[24px] font-bold lg:tracking-wider  "
              style={{
                color: "#000",
              }}
            >
              Boost Brand Awareness
            </p>
            <p className="text-[#000] text-justify text-[12px] md:text-[9.34px] lg:text-lg mt-[14px] lg:mt-[25px] ">
              Graphic design helps you connect with your audience by effectively
              communicating with them through some illustrative designs. Your
              brand will be reinforced, and your audience will be persuaded to
              interact with your product which in result boost your brand
              awareness.
            </p>
          </div>
        </div>
      </div>

      {/* Our Key Features */}
      <div className="keyFeaturesGradient  my-[50px] md:my-[70px]">
        <p
          className="text-[30px] font-bold md:text-[18.16px] lg:text-[32px] text-center pt-[50px]
           "
          style={{
            color: primaryColor,
          }}
        >
          Our Key Features
        </p>

        <div
          className="grid  xl:gap-x-4  md:grid-cols-2 md:gap-x-4    
        grid-cols-1 gap-y-4 
        lg:px-[8%] px-[5%]  mt-[10px]  md:mt-[30px] lg:mt-[50px] 
       
     "
        >
          <div className="row-start-2 md:row-start-1 py-4 sm:py-6  lg:py-8 md:py-6  ">
            {/* Text content 1 */}
            <div className="mb-[20px] md:mb-[35px]">
              <p
                className="text-[15px] md:text-[10.42px] lg:text-lg font-bold lg:tracking-wider  "
                style={{
                  color: "#000",
                }}
              >
                Branding and Identity
              </p>
              <p className="text-[#000] text-justify text-[12px] md:text-[9.34px] lg:text-lg mt-[5px] md:mt-[10px]   lg:mt-[15px] ">
                AremxyPlug helps businesses establish a cohesive brand identity
                through logo design, visual style guidelines, and brand assets.
              </p>
            </div>

            {/* Text content 2 */}
            <div className="mb-[20px] md:mb-[35px]">
              <p
                className="text-[15px] md:text-[10.42px] lg:text-lg font-bold lg:tracking-wider  "
                style={{
                  color: "#000",
                }}
              >
                Print and Digital Collateral
              </p>
              <p className="text-[#000] text-justify text-[12px] md:text-[9.34px] lg:text-lg mt-[5px] md:mt-[10px]   lg:mt-[15px]  ">
                Designing of marketing materials such as brochures, flyers,
                banners, social media graphics, and more.
              </p>
            </div>

            {/* Text content 3 */}
            <div className="mb-[20px] md:mb-[35px]">
              <p
                className="text-[15px] md:text-[10.42px] lg:text-lg font-bold lg:tracking-wider  "
                style={{
                  color: "#000",
                }}
              >
                UI/UX Design
              </p>
              <p className="text-[#000] text-justify text-[12px] md:text-[9.34px] lg:text-lg mt-[5px] md:mt-[10px]   lg:mt-[15px] ">
                Creation of visually appealing and functional interfaces for
                websites, applications, and digital platforms.
              </p>
            </div>

            {/* Text content 4 */}
            <div className="mb-[20px] md:mb-[35px]">
              <p
                className="text-[15px] md:text-[10.42px] lg:text-lg font-bold lg:tracking-wider  "
                style={{
                  color: "#000",
                }}
              >
                Illustrations and Infographics
              </p>
              <p className="text-[#000] text-justify text-[12px] md:text-[9.34px] lg:text-lg mt-[5px] md:mt-[10px]   lg:mt-[15px]     ">
                We design custom illustrations and infographics to visually
                communicate complex information and ideas.
              </p>
            </div>
          </div>
          {/* Background image */}
          <div
            className="h-[350px] md:h-[unset]  bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url(./Images/graphic_design/keyFeatureImage2.png)",
            }}
          ></div>
        </div>
      </div>
      {/*  Let’s Manage your Brand visibility with Captivating Graphic Designs */}

      <div className="lg:px-[8%] px-[5%]  md:mb-[15%] mb-[25%] ">
        <div className=" px-4 sm:px-6  lg:px-8 py-4 sm:py-6 bg-[#fff] rounded-lg lg:rounded-2xl mt-[50px] md:mt-[70px] xl:mt-[100px]  EmailBoxShadow">
          <p
            className="text-center   text-[20px]  lg:text-[30px] font-black tracking-wide  lg:tracking-wider"
            style={{
              color: primaryColor,
            }}
          >
            Let’s Manage your Brand visibility with Captivating Graphic Designs
          </p>
          <p className="text-[#000] text-justify  mt-4 sm:mt-6 md:mt-10 text-[11.23px] md:text-[10.44px] lg:text-[18px] lg:mt-12 ">
            Our graphic design experts craft captivating images, enhancing
            credibility and trust, attracting customers, and expanding markets
            with effective messaging and positive impressions.
          </p>
          <div className="mt-6  flex justify-center">
            <Link to="/ContactUs">
              <Bluebutton text="Contact Sales" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default GraphicDesign;
