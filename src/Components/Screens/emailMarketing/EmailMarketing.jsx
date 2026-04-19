import React, { useEffect, useState } from "react";
import Bluebutton from "../../bluebutton/Bluebutton";
import { primaryColor } from "../cardIssuing/cardIssuing";
import "./EmailMarketing.css";
import { Link } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";

function EmailMarketing() {
  const [gifSize, setGifSize] = useState("");
  const [gifHeight, setGifHeight] = useState("");
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let newWidth = "";
      let newHeight = "";

      if (width < 768) {
        newWidth = 500;
        newHeight = 500;
      } else if (width >= 768 && width < 1024) {
        newWidth = 470;
        newHeight = 470;
      } else {
        newWidth = 700;
        newHeight = 650;
      }

      setGifSize(newWidth);
      setGifHeight(newHeight);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
              Email Marketing
            </p>
            <p className="text-[#000] text-justify text-[10.53px] md:text-[12px] lg:text-lg mt-[14px] lg:mt-[25px] ">
              Email marketing is one of the most directive and effective way to
              connect with leads, turning them into potential customers. Your
              business needs an email marketing strategy that boost sales and
              create a bond with your customers.
            </p>
            <div className="my-6">
              <Link to="/ContactUs">
                <Bluebutton text="Contact Sales" />
              </Link>
            </div>
          </div>
          {/* EMAIL AND LADY IMAGE */}
          <div className="rounded-lg flex flex-col items-center  md:block ">
            <img
              src="./Images/email_marketing/emailMarketingImage2.avif"
              alt="background_image "
              className="w-[100%]   "
            />
          </div>
        </div>
      </div>

      {/* Build a meaningful relationships with your customers.*/}
      <div
        className=" grid  lg:gap-x-4 md:grid-cols-2 lg:grid-cols-5 md:gap-x-4    
    grid-cols-1 gap-y-4 
    lg:pr-32  px-6 sm:px-16 mt-[50px] lg:pl-12 md:mt-[80px] lg:mt-[100px]
     "
      >
        <div
          // className="rounded-lg flex flex-col items-center  md:block lg:col-span-2"
          className="row-start-2 md:row-start-1 h-[350px] md:h-[unset]  bg-contain bg-center bg-no-repeat lg:col-span-2"
          style={{
            backgroundImage:
              "url(./Images/email_marketing/customerRelationImage.avif)",
          }}
        >
          {/* <img
            src="./Images/email_marketing/customerRelationImage.png"
            alt="background_image "
            className="w-[60%]  md:w-[100%]"
          /> */}
        </div>
        <div className=" py-4 sm:py-6  lg:py-8 md:py-6 lg:col-span-3 ">
          <p
            className="text-[15px] md:text-[13.9px] lg:text-[24px] font-bold lg:tracking-wider  "
            style={{
              color: "#000",
            }}
          >
            Build a meaningful relationships with your customers.
          </p>
          <p className="text-[#000] text-justify text-[12px] md:text-[9.34px] lg:text-lg sm:text:lg   mt-[14px] lg:mt-[25px]">
            Digital recharge is now a well-liked method of purchasing airtime,
            data bundles, and bills payments. We make it easy for you to start
            your telecom business without any hassle. You can start right away
            with any of our plans, very secured, convenient, flexible, and
            cost-effective. 
          </p>
        </div>
      </div>

      {/*Communicating with your customers*/}

      <div
        className="grid  xl:gap-x-4  md:grid-cols-2 md:gap-x-4    
        grid-cols-1 gap-y-4 
         lg:px-[8%] px-[5%] mt-[50px]  md:mt-[80px] lg:mt-[100px] 
       
     "
      >
        <div className="row-start-2 md:row-start-1  py-4 sm:py-6  lg:py-8 md:py-6  ">
          {/* Text content 1 */}
          <div>
            <p
              className="text-[15px] md:text-[13.9px] lg:text-[24px] font-bold lg:tracking-wider  "
              style={{
                color: "#000",
              }}
            >
              Communicating with your customers
            </p>
            <p className="text-[#000] text-justify text-[12px] md:text-[9.34px] lg:text-lg mt-[14px] lg:mt-[25px]">
              Effective communication builds trust, understanding, and loyalty.
              Listen actively, provide clear information, and promptly address
              concerns to foster meaningful and lasting relationships with your
              customers.
            </p>
          </div>

          {/* Text content 2 */}
          <div className="mt-[30px] md:mt-[50px]">
            <p
              className="text-[15px] md:text-[13.9px] lg:text-[24px] font-bold lg:tracking-wider  "
              style={{
                color: "#000",
              }}
            >
              Sending timely campaigns
            </p>
            <p className="text-[#000] text-justify text-[12px] md:text-[9.34px] lg:text-lg mt-[10px] md:mt-[20px] ">
              Sending timely campaigns is crucial for engaging customers and
              achieving desired results. Understanding their preferences and
              aligning content with relevant events maximizes impact and
              conversion rates.
            </p>
          </div>
        </div>
        {/* Background image */}
        <div
          className="h-[350px] md:h-[unset]  bg-contain bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(./Images/email_marketing/communicatingImage.avif)",
          }}
        ></div>
      </div>

      {/*Increase leads and product cost*/}

      <div
        className=" grid  lg:gap-x-4  md:grid-cols-2  xl:gap-x-4    
        grid-cols-1 gap-y-4 
         lg:px-[8%] px-[5%] mt-[50px]  md:mt-[80px] lg:mt-[100px] 
       
     "
      >
        {/* Background image */}
        <div
          className="h-[350px] md:h-[unset]  bg-contain bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(./Images/email_marketing/increaseLeadsImage.avif)",
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
              Increase leads
            </p>
            <p className="text-[#000] text-justify text-[12px] md:text-[9.34px] lg:text-lg mt-[14px] lg:mt-[25px]">
              Boost your lead generation efforts with targeted marketing
              campaigns, compelling content, effective lead capture forms, and
              strategic partnerships to maximize your potential for increased
              leads.
            </p>
          </div>

          {/* Text content 2 */}
          <div className="mt-[30px] md:mt-[50px]">
            <p
              className="text-[15px] md:text-[13.9px] lg:text-[24px] font-bold lg:tracking-wider  "
              style={{
                color: "#000",
              }}
            >
              Product cost-effective campaigns
            </p>
            <p className="text-[#000] text-justify text-[12px] md:text-[9.34px] lg:text-lg mt-[10px] md:mt-[20px] ">
              Product cost-effective campaigns utilize strategic planning and
              targeted marketing techniques to maximize ROI and minimize
              expenses, optimizing resources for maximum impact.
            </p>
          </div>
        </div>
      </div>

      {/*Providing more value to your customers*/}

      <div
        className="grid  xl:gap-x-4  md:grid-cols-2 md:gap-x-4    
        grid-cols-1 gap-y-4 
         lg:px-[8%] px-[5%] mt-[50px]  md:mt-[80px] lg:mt-[100px] 
       
     "
      >
        <div className="row-start-2 md:row-start-1  py-4 sm:py-6  lg:py-8 md:py-6  ">
          {/* Text content 1 */}
          <div>
            <p
              className="text-[15px] md:text-[13.9px] lg:text-[24px] font-bold lg:tracking-wider  "
              style={{
                color: "#000",
              }}
            >
              Communicating with your customers
            </p>
            <p className="text-[#000] text-justify text-[12px] md:text-[9.34px] lg:text-lg mt-[14px] lg:mt-[25px]">
              Effective communication builds trust, understanding, and loyalty.
              Listen actively, provide clear information, and promptly address
              concerns to foster meaningful and lasting relationships with your
              customers.
            </p>
          </div>

          {/* Text content 2 */}
          <div className="mt-[30px] md:mt-[50px]">
            <p
              className="text-[15px] md:text-[13.9px] lg:text-[24px] font-bold lg:tracking-wider  "
              style={{
                color: "#000",
              }}
            >
              Sending timely campaigns
            </p>
            <p className="text-[#000] text-justify text-[12px] md:text-[9.34px] lg:text-lg mt-[10px] md:mt-[20px] ">
              Sending timely campaigns is crucial for engaging customers and
              achieving desired results. Understanding their preferences and
              aligning content with relevant events maximizes impact and
              conversion rates.
            </p>
          </div>
        </div>
        {/* Background image */}
        <div
          className="h-[350px] md:h-[unset]  bg-contain bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(./Images/email_marketing/providingMoreImage.avif)",
          }}
        ></div>
      </div>

      {/* Our Key Features */}
      <div className="bg-[#92ABFE] my-[50px] md:my-[70px]">
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
          className="grid  xl:gap-x-4  md:grid-cols-2  lg:gap-x-4    
        grid-cols-1 gap-y-4 
         lg:px-[8%] px-[5%] mt-[10px]  md:mt-[30px] lg:mt-[50px] 
       
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
                Email Campaign Strategy
              </p>
              <p className="text-[#000] text-justify text-[12px] md:text-[9.34px] lg:text-lg mt-[5px] md:mt-[10px]   lg:mt-[15px] ">
                Help in developing effective email marketing strategies,
                including audience segmentation and personalized content.
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
                Email Design and Development
              </p>
              <p className="text-[#000] text-justify text-[12px] md:text-[9.34px] lg:text-lg mt-[5px] md:mt-[10px]   lg:mt-[15px]  ">
                Designing visually appealing and responsive email templates and
                coding them for compatibility across your customer’s various
                emails.
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
                List Management and Automation
              </p>
              <p className="text-[#000] text-justify text-[12px] md:text-[9.34px] lg:text-lg mt-[5px] md:mt-[10px]   lg:mt-[15px] ">
                Manage your customers email lists, implement automation
                workflows, and track performance metrics.
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
                A/B Testing and Optimization
              </p>
              <p className="text-[#000] text-justify text-[12px] md:text-[9.34px] lg:text-lg mt-[5px] md:mt-[10px]   lg:mt-[15px]     ">
                Conducts A/B tests to optimize your email campaigns, improve
                your open rates, click-through rates, and conversion rates.
              </p>
            </div>
          </div>
          {/* Background image  */}

          <div className="h-[350px] md:h-[unset]  flex justify-center md:block md:justify-[unset] mb-[30px] md:mb-[unset]">
            <Player
              autoplay
              loop
              speed={2.5}
              src="https://assets5.lottiefiles.com/packages/lf20_6avkbecb.json"
              style={{ height: `${gifHeight}px`, width: `${gifSize}px` }}
            ></Player>
          </div>
          {/* <div
            className="h-[350px] md:h-[unset]  bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url(./Images/email_marketing/keyFeaturesImage.png)",
            }}
          ></div> */}
        </div>
      </div>
      {/*   AremxyPlug Email Marketing Service */}

      <div className=" lg:px-[8%] px-[5%] md:mb-[15%] mb-[25%]">
        <div className=" px-4 sm:px-6  lg:px-8 py-4 sm:py-6  bg-[#fff] rounded-lg lg:rounded-2xl mt-[50px] md:mt-[70px] xl:mt-[100px]   EmailBoxShadow">
          <p
            className="text-center   text-[20px]  lg:text-[30px] font-black tracking-wide lg:tracking-wider "
            style={{
              color: primaryColor,
            }}
          >
            AremxyPlug Email Marketing Service
          </p>
          <p className="text-[#000] text-justify  mt-4 sm:mt-6 md:mt-10 text-[11.23px] md:text-[10.44px] lg:text-[18px] lg:mt-12 ">
            You can connect and communicate with your current customers through
            email marketing while also attracting new ones. Our email marketing
            expert got you covered. Contact our sales team right away!
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

export default EmailMarketing;
