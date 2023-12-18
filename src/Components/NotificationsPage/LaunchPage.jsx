import React from "react";
import { DashBoardLayout } from "../Dashboard/Layout/DashBoardLayout";
import { Link } from "react-router-dom/dist/react-router-dom.development";
// import Frame from "./assets/Frames.svg";
import jet from "./assets/jet.svg";













const LaunchPage = () => { 

    return (
        <DashBoardLayout>
          
<div className="flex justify-around lg:gap-[60px] gap-[20px] items-center flex-col">
  <div className="Frame758532675 h-3 flex-col justify-center items-center gap-6 flex">
            <div className="NewLaunch text-black text-md font-medium lg:text-3xl md:text-lg">New Launch</div>
        </div>
        <div
            className="w-full h-[90px] shadow md:h-[112.29px] lg:h-[196px] md:rounded-[11.5px]
            bg-gradient-to-b from-indigo-300 to-purple-600  rounded-lg flex px-[16px] lg:px-[50px]
      justify-between items-center lg:rounded-[20px]"
          >
            <div className="py-[13px] mt-2 lg:py-[40px]">
              <h2
                className="text-[8px] whitespace-nowrap mb-2 w-52 text-white  font-semibold md:text-[12px] md:w-[70%] lg:w-[70%] lg:text-[20px] 
              2xl:w-[80%] 2xl:text-[24px] lg:mb-4"
              >
                We are excited to lunch our global platform for all things<br /> telecom, payments, and Digital services.
              </h2>
              <div className="Frame758532683 w-14 h-5 px-3.5 py-1 lg:w-32 lg:h-12 lg:px-12 lg:py-4 md:w-24 md:h-9 md:px-6 md:py-2 md:gap-1.5
               bg-orange-400 rounded lg:rounded-md justify-center items-center gap-1 inline-flex">
    <div className="Explore text-white text-xs lg:text-base font-medium leading-3 tracking-tight">Explore</div>
</div>
              {/* <h2 */}
                {/* // className="text-neutral-800 text-[5px] font-medium  leading-[9px] mb-3 md:text-[9px] md:leading-[12.2px] */}
              {/* //  w-[100%] md:w-[80%] lg:w-[75%] 2xl:w-[85%] 2xl:mt-[5px] lg:mt-[20px] lg:text-[16px] */}
              {/* //  lg:leading-[26px] 2xl:text-[20px] lg:mb-[20px]" */}
              {/* // > */}
                {/* August 10th, 2023 12 :00:00am */}
              {/* </h2> */}
            </div>
            <div className="md:w-24 md:h-16 w-14 h-10 lg:w-44 lg:h-28">
              <img
                src={jet}
                alt=""
                className="md:w-24 md:h-16 w-14 h-10 lg:w-44 lg:h-28 "
              />
            </div>
          

</div>


<div className="flex lg:gap-7 gap-4 flex-col">
  <h1 className="font-medium lg:text-base text-xs lg:leading-[40px] leading-8">
    Welcome to the future of seamless communication and cutting-edge technology! We're thrilled to unveil our latest array of telecom and digital products designed to redefine connectivity and elevate your digital experience.<br/>
At the heart of our launch is a commitment to transform the way you connect, communicate, and collaborate. Here's a glimpse of what's in store:<br/>
1. Lightning-Fast Connectivity: Say goodbye to buffering and lagging. Our next-generation network infrastructure ensures lightning-fast speeds, enabling you to stream, download, and communicate without interruptions.<br/>
2. Smart Devices for Every Need: From sleek smartphones packed with advanced features to IoT devices that enhance convenience at home and work, our range of smart gadgets caters to diverse lifestyles and demands.<br/>
3. Secure and Reliable Solutions: Your security is our priority. With robust encryption protocols and state-of-the-art security measures, our digital products offer peace of mind while navigating the online world.<br/>
4. Personalized Services: We understand that one size doesn't fit all. That's why our services are tailored to your preferences, offering customizable plans and solutions to meet your unique requirements.<br/>
5. Innovation Hub: Explore the realm of innovation with our dedicated hub, fostering creativity and collaboration. Join us on a journey of exploration and discovery as we pave the way for tomorrow's technological advancements.<br/>
6. Eco-Friendly Initiatives: Embracing sustainability, our products are designed with eco-conscious practices, reducing our carbon footprint while ensuring top-notch performance.<br/>
Join us as we embark on this transformative journey, empowering you to stay connected, productive, and ahead in this digital age. Whether it's staying connected with loved ones, boosting business efficiency, or exploring new horizons, our telecom and digital solutions are here to make it happen.
Experience the future today with our lineup of telecom and digital products. Embrace innovation. Embrace connectivity. Embrace limitless possibilities.<br/>
Get ready to elevate your digital experience like never before. Stay tuned for the launch, and together, let's shape a connected world that's smarter, faster, and more exciting!
</h1> 
   <p className="text-zinc-500 lg:text-xs text-[6px] font-medium tracking-tight">August 10th, 2023 12 :00:00am</p> 
              

</div>
<div
                  className=" flex gap-[5.729px] mt-[95px] lg:mt-[370px] md:gap-[14.896px]
        justify-center px-[8.594px] mb-10"
                >
                  <p
                    className="font-[500] text-[10px] text-black 
              leading-[10.4px] lg:text-[16px] lg:leading-[15.6px]  md:text-[6.875px]
            ] md:leading-[12.938px] self-center"
                  >
                    You need help?
                  </p>
                  <Link
                    to="/contactUs"
                    className="font-[500] text-white text-[10px]  py-[4.865px] 
                px-[10.594px] leading-[10.4px] rounded-[5.156px] bg-[#04177F]
                lg:text-[12px] lg:leading-[14.4px] 
                 md:text-[4.583px]  md:py-[4.865px] 
                md:px-[14.594px] md:leading-[5.985px]  lg:py-[10px]
                lg:px-[16px] lg:rounded-[9px]"
                  >
                    Contact Us
                  </Link>
                </div>

</div>

          
    </DashBoardLayout>
  );
}

export default LaunchPage

