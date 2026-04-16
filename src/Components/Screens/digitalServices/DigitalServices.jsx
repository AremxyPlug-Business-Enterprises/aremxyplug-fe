import React from "react";
import { primaryColor } from "../cardIssuing/cardIssuing";
import Bluebutton from "../../bluebutton/Bluebutton";
import { Link } from "react-router-dom";
function DigitalServices() {
  return (
    <div>
      {/* digitalServicesBG1 */}

      <div className="overflow-hidden h-[950px] sm:h-[1100px] md:h-[570px] lg:h-[600px] xl:h-[650px] 2xl:h-[900px]  mt-[-200px] md:mt-[-150px]  lg:mt-[-200px] ">
        <div
          className="absolute mt-[250px] md:mt-[180px] lg:mt-[230px] grid lg:grid-cols-2 lg:gap-x-4  md:grid-cols-2 md:gap-x-4    
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
              Digital Services
            </p>
            <p className="text-[#000] text-justify text-[10.53px] md:text-[12px] lg:text-lg mt-4 sm:mt-6 md:mt-10  lg:mt-12 ">
              We offer a variety of digital services that can be customized to
              fit your company's needs. Our services are affordable and designed
              to deliver outstanding results for your company. Our digital
              experts are devoted to developing your business and catering to
              your digital needs.
            </p>

            <div className="my-6">
              <Link to="/contactUs">
                <Bluebutton text="Contact Sales" />
              </Link>
            </div>
          </div>

          <div className="rounded-lg flex flex-col items-center  md:block ">
            <img
              src="./Images/digitalServices/digitalServicesImage2.png"
              alt="background_image "
              className="w-[90%]  md:float-right"
            />
          </div>
        </div>

        {/* TAB AND DESKTOP BACKGROUND IMAGES */}
        <div
          className="hidden md:block h-[800px] w-[90%] lg:bg-right lg:h-[600px] md:w-[65%] lg:w-[65%]  bg-contain bg-no-repeat "
          style={{
            backgroundImage:
              "url(./Images/digitalServices/digitalServicesBG1.png)",
            float: "right",
          }}
        ></div>
        {/* MOBILE BACKGROUND IMAGE */}
        <div
          className="md:hidden h-[600px] w-[90%] bg-contain bg-right bg-no-repeat"
          style={{
            backgroundImage:
              "url(./Images/digitalServices/digitalServicesBG2.png)",
            float: "right",
          }}
        ></div>
      </div>

      <div className="md:mt-[50px]">
        {/* section 1 */}
        <div
          className=" grid lg:grid-cols-2 lg:gap-x-4  md:grid-cols-2 md:gap-x-4    
       grid-cols-1 gap-y-4 
       lg:px-[8%] px-[5%]
        "
        >
          <div className="  flex flex-col items-center  border-r border-gray-300 pr-[20px] ">
            <img
              src="./Images/digitalServices/contentMarketing.png"
              alt="background_image "
              className="w-[90%] md:float-right"
            />

            <div className=" p-4 sm:p-6  lg:p-8 md:p-6 bg-[#dce4ff] rounded-lg lg:rounded-2xl mt-[50px] md:mt-[70px] xl:mt-[100px] mb-[70px] md:mb-[100px] xl:mb-[130px] h-[200px] md:h-[270px] lg:h-[370px] xl:h-[330px]">
              <p
                className="text-center  text-[10.97px] md:text-[17.4px] lg:text-[30px] font-bold lg:tracking-wider  "
                style={{
                  color: "#000",
                }}
              >
                Content Marketing
              </p>
              <p className="text-[#000] text-justify  mt-4 sm:mt-6 md:mt-10 text-[11.23px] md:text-[10.44px] lg:text-[18px] lg:mt-12 ">
                Content marketing is a powerful tool for businesses looking to
                connect with their audience and drive engagement.
              </p>
              <Link to="/content-marketing">
                <div className="mt-6 flex justify-center">
                  <Bluebutton text="Explore" />
                </div>
              </Link>
            </div>
          </div>

          <div className="  flex flex-col items-center  border-l border-zinc-600 pl-[20px]">
            <img
              src="./Images/digitalServices/Socialmediamarketing.png"
              alt="background_image "
              className="w-[86%] md:float-right"
            />

            <div className=" p-4 sm:p-6  lg:p-8 md:p-6 bg-[#dce4ff] rounded-lg lg:rounded-2xl mt-[50px] md:mt-[70px] xl:mt-[100px] mb-[70px] md:mb-[100px] xl:mb-[130px] h-[200px] md:h-[270px] lg:h-[370px] xl:h-[330px]">
              <p
                className="text-center text-[10.97px] md:text-[17.4px] lg:text-[30px] font-bold lg:tracking-wider  "
                style={{
                  color: "#000",
                }}
              >
                Social Media Marketing
              </p>
              <p className="text-[#000] text-justify  mt-4 sm:mt-6 md:mt-10 text-[11.23px] md:text-[10.44px] lg:text-[18px] lg:mt-12 ">
                Social media marketing can be an effective way to reach a wide
                audience and build brand awareness.
                <span className="text-[#dce4ff]">a marketing effective</span>
              </p>
              <Link to="/social-media-marketing">
                <div className="mt-6 flex justify-center">
                  <Bluebutton text="Explore" />
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* section2 */}
        <div
          className=" grid lg:grid-cols-2 lg:gap-x-4  md:grid-cols-2 md:gap-x-4    
       grid-cols-1 gap-y-4 
       lg:px-[8%] px-[5%]
        "
        >
          <div className="  flex flex-col items-center  border-r border-gray-300 pr-[20px] ">
            <img
              src="./Images/digitalServices/SEO.png"
              alt="background_image "
              className="w-[82%] md:float-right"
            />

            <div className=" p-4 sm:p-6  lg:p-8 md:p-6 bg-[#dce4ff] rounded-lg lg:rounded-2xl mt-[50px] md:mt-[70px] xl:mt-[100px] mb-[70px] md:mb-[100px] xl:mb-[130px] h-[200px] md:h-[270px] lg:h-[370px] xl:h-[330px]">
              <p
                className="text-center text-[10.97px] md:text-[17.4px] lg:text-[30px] font-bold lg:tracking-wider  "
                style={{
                  color: "#000",
                }}
              >
                SEO Marketing
              </p>
              <p className="text-[#000] text-justify  mt-4 sm:mt-6 md:mt-10 text-[11.23px] md:text-[10.44px] lg:text-[18px] lg:mt-12 ">
                SEO is the practice of optimizing your website and its content
                to improve its visibility and ranking on search engine results
                pages.
              </p>
              <Link to="/seo-marketing">
                <div className="mt-6 flex justify-center">
                  <Bluebutton text="Explore" />
                </div>
              </Link>
            </div>
          </div>

          <div className="  flex flex-col items-center  border-l border-zinc-600 pl-[20px]">
            <img
              src="./Images/digitalServices/emailMarketing.png"
              alt="background_image "
              className="w-[90%] md:float-right"
            />

            <div className=" p-4 sm:p-6  lg:p-8 md:p-6 bg-[#dce4ff] rounded-lg lg:rounded-2xl mt-[50px] md:mt-[70px] xl:mt-[100px] mb-[70px] md:mb-[100px] xl:mb-[130px] h-[200px] md:h-[270px] lg:h-[370px] xl:h-[330px]">
              <p
                className="text-center text-[10.97px] md:text-[17.4px] lg:text-[30px] font-bold lg:tracking-wider  "
                style={{
                  color: "#000",
                }}
              >
                Email Marketing
              </p>
              <p className="text-[#000] text-justify  mt-4 sm:mt-6 md:mt-10 text-[11.23px] md:text-[10.44px] lg:text-[18px] lg:mt-12 ">
                Your business needs an email marketing strategy that boost sales
                and create a bond with your customers.
                <span className="text-[#dce4ff]">a marketing</span>
              </p>
              <Link to="/EmailMarketing">
                <div className="mt-6 flex justify-center">
                  <Bluebutton text="Explore" />
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* section3 */}
        <div
          className="relative grid lg:grid-cols-2 lg:gap-x-4  md:grid-cols-2 md:gap-x-4    
       grid-cols-1 gap-y-4 
       lg:px-[8%] px-[5%] md:pb-[15%] pb-[25%]
        "
        >
          {/*  */}
          <div
            className=" bg-left-bottom absolute bottom-0 left-0 h-[800px] w-[90%]  lg:h-[600px] md:w-[65%] lg:w-[65%]  bg-contain bg-no-repeat "
            style={{
              backgroundImage:
                "url(./Images/digitalServices/digitalServicesBG3.png)",

              zIndex: -999,
            }}
          ></div>

          <div className="  flex flex-col items-center  border-r border-gray-300 pr-[20px] ">
            <img
              src="./Images/digitalServices/productDesign.png"
              alt="background_image "
              className="w-[90%] md:float-right"
            />

            <div className=" p-4 sm:p-6  lg:p-8 md:p-6 bg-[#dce4ff] rounded-lg lg:rounded-2xl mt-[50px] md:mt-[70px] xl:mt-[100px]  h-[200px] md:h-[270px] lg:h-[370px] xl:h-[330px]">
              <p
                className="text-center text-[10.97px] md:text-[17.4px] lg:text-[30px] font-bold lg:tracking-wider  "
                style={{
                  color: "#000",
                }}
              >
                Product Design
              </p>
              <p className="text-[#000] text-justify  mt-4 sm:mt-6 md:mt-10 text-[11.23px] md:text-[10.44px] lg:text-[18px] lg:mt-12 ">
                Product design is the process of identifying a market
                opportunity, clearly defining the problem, and validating the
                solution with real user interfaces.
              </p>
              <Link to="/ProductDesign">
                <div className="mt-6  flex justify-center">
                  <Bluebutton text="Explore" />
                </div>
              </Link>
            </div>
          </div>

          <div className="  flex flex-col items-center  border-l border-zinc-600 pl-[20px]">
            <img
              src="./Images/digitalServices/graphicDesign.png"
              alt="background_image "
              className="w-[95%] md:float-right"
            />

            <div className=" p-4 sm:p-6  lg:p-8 md:p-6 bg-[#dce4ff] rounded-lg lg:rounded-2xl mt-[50px] md:mt-[70px] xl:mt-[100px]  h-[200px] md:h-[270px] lg:h-[370px] xl:h-[330px]">
              <p
                className="text-center text-[10.97px] md:text-[17.4px] lg:text-[30px] font-bold lg:tracking-wider  "
                style={{
                  color: "#000",
                }}
              >
                Graphic Design
              </p>
              <p className="text-[#000] text-justify  mt-4 sm:mt-6 md:mt-10 text-[11.23px] md:text-[10.44px] lg:text-[18px] lg:mt-12 ">
                Graphic design is the creation of visual compositions to solve
                problems and communicate ideas through typography, imagery,
                color, and form.
              </p>
              <Link to="/GraphicDesign">
                <div className="mt-6 flex justify-center">
                  <Bluebutton text="Explore" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DigitalServices;
