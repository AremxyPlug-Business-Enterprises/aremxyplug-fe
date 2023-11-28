import React from "react";
import { DashBoardLayout } from "../Dashboard/Layout/DashBoardLayout";
import Frame from "./assets/Frames.svg";
import { Link } from "react-router-dom/dist/react-router-dom.development";














const LaunchPage = () => { 

    return (
        <DashBoardLayout>
          
<div className="flex justify-around lg:gap-[60px] gap-[20px] items-center flex-col">
<div className="Frame758532675 w-full lg:h-96 h-44 flex-col lg:gap-10 gap-5 justify-center items-center flex">
  <h2 className="NewLaunch text-black lg:text-3xl text-xs text-center items-center justify-center font-medium flex">New Launch</h2>
  <div className="Frame758532674 flex-col lg:gap-3 gap-1 w-full justify-center items-center flex">
    <img className="Frame self-stretch object-cover w-full h-full flex justify-center items-center" 
    src={Frame} alt="" />
    <p className="whitespace-nowrap justify-center items-center text-[10px] text-right text-black
     lg:text-base font-medium">
      We are excited to launch our global platform for all things telecom,<br/>
      <span className="flex justify-center items-center" >payments, and Digital services.</span> 
    </p>
  </div>
</div>


<div className="flex lg:gap-7 gap-4 flex-col">
  <h1 className="font-medium lg:text-base text-xs leading-8">
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
                  className=" flex gap-[5.729px] mt-[85px] md:gap-[14.896px]
        justify-center px-[8.594px] mb-[80px]"
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

