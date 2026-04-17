import React from "react";
import "./VTU_DEV.css";
import { primaryColor } from "../cardIssuing/cardIssuing";
import Bluebutton from "../../bluebutton/Bluebutton";
import { VTU_PAY } from "../../svgs/svg1";
import { RxDotFilled } from "react-icons/rx";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function VTU_DEV() {
  const DifferenceHead = [
    { text: "Product" },
    { text: "Starter" },
    { text: "Merchant" },
    { text: "Venture" },
    { text: `Telecom Pro` },
    { text: "Unlimited" },
  ];

  const differenceContent = [
    {
      text: "Airtime Top-up",
      starter: (
        <div className="flex justify-center border-l-[1px] border-y-[1px] border-gray-500 py-2">
          <p>Yes</p>
        </div>
      ),
      merchant: (
        <div className="flex justify-center  border-y-[1px] border-gray-500 py-2">
          <BsFillCheckCircleFill color="#2ED173" size={25} />
        </div>
      ),
      venture: (
        <div className="flex justify-center  border-y-[1px] border-gray-500 py-2">
          <p>Yes</p>
        </div>
      ),
      telecom: (
        <div className="flex justify-center  border-y-[1px] border-gray-500 py-2">
          <BsFillCheckCircleFill color="#2ED173" size={25} />
        </div>
      ),
      unlimited: (
        <div className="border-r-[1px] border-y-[1px] border-gray-500 flex justify-center py-2">
          <BsFillCheckCircleFill color="#2ED173" size={25} />
        </div>
      ),
    },
    {
      text: "Date Bundles",
      starter: (
        <div className="flex justify-center border-l-[1px] border-y-[1px] border-gray-500 py-2">
          <p>Yes</p>
        </div>
      ),
      merchant: (
        <div className="flex justify-center  border-y-[1px] border-gray-500 py-2">
          <BsFillCheckCircleFill color="#2ED173" size={25} />
        </div>
      ),
      venture: (
        <div className="flex justify-center  border-y-[1px] border-gray-500 py-2">
          <p>Yes</p>
        </div>
      ),
      telecom: (
        <div className="flex justify-center  border-y-[1px] border-gray-500 py-2">
          <BsFillCheckCircleFill color="#2ED173" size={25} />
        </div>
      ),
      unlimited: (
        <div className="border-r-[1px] border-y-[1px] border-gray-500 flex justify-center py-2">
          <BsFillCheckCircleFill color="#2ED173" size={25} />
        </div>
      ),
    },
    {
      text: "Education Pin",
      starter: (
        <div className="flex justify-center border-l-[1px]  border-y-[1px] border-gray-500 py-2">
          <BsFillCheckCircleFill color="#2ED173" size={25} />
        </div>
      ),
      merchant: (
        <div className="flex justify-center  border-y-[1px] border-gray-500 py-2">
          <p>Yes</p>
        </div>
      ),
      venture: (
        <div className="flex justify-center  border-y-[1px] border-gray-500 py-2">
          <BsFillCheckCircleFill color="#2ED173" size={25} />
        </div>
      ),
      telecom: (
        <div className="flex justify-center  border-y-[1px] border-gray-500 py-2">
          <BsFillCheckCircleFill color="#2ED173" size={25} />
        </div>
      ),
      unlimited: (
        <div className="border-r-[1px] border-y-[1px] border-gray-500 flex justify-center py-2">
          <BsFillCheckCircleFill color="#2ED173" size={25} />
        </div>
      ),
    },
    {
      text: "TV Subscription",
      starter: (
        <div className="flex justify-center border-l-[1px] border-y-[1px] border-gray-500 py-2">
          <p>Yes</p>
        </div>
      ),
      merchant: (
        <div className="flex justify-center  border-y-[1px] border-gray-500 py-2">
          <p>Yes</p>
        </div>
      ),
      venture: (
        <div className="flex justify-center  border-y-[1px] border-gray-500 py-2">
          <BsFillCheckCircleFill color="#2ED173" size={25} />
        </div>
      ),
      telecom: (
        <div className="flex justify-center  border-y-[1px] border-gray-500 py-2">
          <p>Yes</p>
        </div>
      ),
      unlimited: (
        <div className="border-r-[1px] border-y-[1px] border-gray-500 flex justify-center py-2">
          <BsFillCheckCircleFill color="#2ED173" size={25} />
        </div>
      ),
    },
    {
      text: "Electricity Bills",
      starter: (
        <div className="flex justify-center border-l-[1px]  border-y-[1px] border-gray-500 py-2">
          <BsFillCheckCircleFill color="#2ED173" size={25} />
        </div>
      ),
      merchant: (
        <div className="flex justify-center  border-y-[1px] border-gray-500 py-2">
          <p>Yes</p>
        </div>
      ),
      venture: (
        <div className="flex justify-center  border-y-[1px] border-gray-500 py-2">
          <BsFillCheckCircleFill color="#2ED173" size={25} />
        </div>
      ),
      telecom: (
        <div className="flex justify-center  border-y-[1px] border-gray-500 py-2">
          <p>Yes</p>
        </div>
      ),
      unlimited: (
        <div className="border-r-[1px] border-y-[1px] border-gray-500 flex justify-center py-2">
          <BsFillCheckCircleFill color="#2ED173" size={25} />
        </div>
      ),
    },
    {
      text: "Airtime Conversion",
      starter: (
        <div className="flex justify-center  border-l-[1px]  border-y-[1px] border-gray-500 py-2">
          <BsFillCheckCircleFill color="#2ED173" size={25} />
        </div>
      ),
      merchant: (
        <div className="flex justify-center  border-y-[1px] border-gray-500 py-2">
          <BsFillCheckCircleFill color="#2ED173" size={25} />
        </div>
      ),
      venture: (
        <div className="flex justify-center  border-y-[1px] border-gray-500 py-2">
          <BsFillCheckCircleFill color="#2ED173" size={25} />
        </div>
      ),
      telecom: (
        <div className="flex justify-center  border-y-[1px] border-gray-500 py-2">
          <BsFillCheckCircleFill color="#2ED173" size={25} />
        </div>
      ),
      unlimited: (
        <div className="border-r-[1px] border-y-[1px] border-gray-500 flex justify-center py-2">
          <BsFillCheckCircleFill color="#2ED173" size={25} />
        </div>
      ),
    },
    {
      text: "Bulk SMS",
      starter: (
        <div className="flex justify-center border-l-[1px] border-y-[1px] border-gray-500 py-2">
          <p>...</p>
        </div>
      ),
      merchant: (
        <div className="flex justify-center  border-y-[1px] border-gray-500 py-2">
          <p>No</p>
        </div>
      ),
      venture: (
        <div className="flex justify-center  border-y-[1px] border-gray-500 py-2">
          <BsFillCheckCircleFill color="#2ED173" size={25} />
        </div>
      ),
      telecom: (
        <div className="flex justify-center  border-y-[1px] border-gray-500 py-2">
          <BsFillCheckCircleFill color="#2ED173" size={25} />
        </div>
      ),
      unlimited: (
        <div className="border-r-[1px] border-y-[1px] border-gray-500 flex justify-center py-2">
          <BsFillCheckCircleFill color="#2ED173" size={25} />
        </div>
      ),
    },
    {
      text: "Recharge Card Printing",
      starter: (
        <div className="flex justify-center border-l-[1px] border-y-[1px] border-gray-500 py-2">
          <p>...</p>
        </div>
      ),
      merchant: (
        <div className="flex justify-center  border-y-[1px] border-gray-500 py-2">
          <p>...</p>
        </div>
      ),
      venture: (
        <div className="flex justify-center  border-y-[1px] border-gray-500 py-2">
          <p>No</p>
        </div>
      ),
      telecom: (
        <div className="flex justify-center  border-y-[1px] border-gray-500 py-2">
          <p>No</p>
        </div>
      ),
      unlimited: (
        <div className="border-r-[1px] border-y-[1px] border-gray-500 flex justify-center py-2">
          <BsFillCheckCircleFill color="#2ED173" size={25} />
        </div>
      ),
    },
    {
      text: "Smile Airtime & Data",
      starter: (
        <div className="flex justify-center border-l-[1px] border-y-[1px] border-gray-500 py-2">
          <p>No</p>
        </div>
      ),
      merchant: (
        <div className="flex justify-center  border-y-[1px] border-gray-500 py-2">
          <p>No</p>
        </div>
      ),
      venture: (
        <div className="flex justify-center  border-y-[1px] border-gray-500 py-2">
          <p>...</p>
        </div>
      ),
      telecom: (
        <div className="flex justify-center  border-y-[1px] border-gray-500 py-2">
          <BsFillCheckCircleFill color="#2ED173" size={25} />
        </div>
      ),
      unlimited: (
        <div className="border-r-[1px] border-y-[1px] border-gray-500 flex justify-center py-2">
          <BsFillCheckCircleFill color="#2ED173" size={25} />
        </div>
      ),
    },
    {
      text: "Spectranet Data",
      starter: (
        <div className="flex justify-center border-l-[1px] border-y-[1px] border-gray-500 py-2">
          <p>No</p>
        </div>
      ),
      merchant: (
        <div className="flex justify-center  border-y-[1px] border-gray-500 py-2">
          <p>...</p>
        </div>
      ),
      venture: (
        <div className="flex justify-center  border-y-[1px] border-gray-500 py-2">
          <p>...</p>
        </div>
      ),
      telecom: (
        <div className="flex justify-center  border-y-[1px] border-gray-500 py-2">
          <p>No</p>
        </div>
      ),
      unlimited: (
        <div className="border-r-[1px] border-y-[1px] border-gray-500 flex justify-center py-2">
          <BsFillCheckCircleFill color="#2ED173" size={25} />
        </div>
      ),
    },
    {
      text: "Wallet System",
      starter: (
        <div className="flex justify-center border-l-[1px]  border-y-[1px] border-gray-500 py-2">
          <BsFillCheckCircleFill color="#2ED173" size={25} />
        </div>
      ),
      merchant: (
        <div className="flex justify-center  border-y-[1px] border-gray-500 py-2">
          <BsFillCheckCircleFill color="#2ED173" size={25} />
        </div>
      ),
      venture: (
        <div className="flex justify-center  border-y-[1px] border-gray-500 py-2">
          <p>Yes</p>
        </div>
      ),
      telecom: (
        <div className="flex justify-center  border-y-[1px] border-gray-500 py-2">
          <BsFillCheckCircleFill color="#2ED173" size={25} />
        </div>
      ),
      unlimited: (
        <div className="border-r-[1px] border-y-[1px] border-gray-500 flex justify-center py-2">
          <BsFillCheckCircleFill color="#2ED173" size={25} />
        </div>
      ),
    },
    {
      text: "NGN Virtual Accounts",
      starter: (
        <div className="flex justify-center border-l-[1px] border-y-[1px] border-gray-500 py-2">
          <p>...</p>
        </div>
      ),
      merchant: (
        <div className="flex justify-center  border-y-[1px] border-gray-500 py-2">
          <BsFillCheckCircleFill color="#2ED173" size={25} />
        </div>
      ),
      venture: (
        <div className="flex justify-center  border-y-[1px] border-gray-500 py-2">
          <p>Yes</p>
        </div>
      ),
      telecom: (
        <div className="flex justify-center  border-y-[1px] border-gray-500 py-2">
          <BsFillCheckCircleFill color="#2ED173" size={25} />
        </div>
      ),
      unlimited: (
        <div className="border-r-[1px] border-y-[1px] border-gray-500 flex justify-center py-2">
          <BsFillCheckCircleFill color="#2ED173" size={25} />
        </div>
      ),
    },
    {
      text: "Card Payment",
      starter: (
        <div className="flex justify-center border-l-[1px] border-y-[1px] border-gray-500 py-2">
          <p>...</p>
        </div>
      ),
      merchant: (
        <div className="flex justify-center  border-y-[1px] border-gray-500 py-2">
          <p>Yes</p>
        </div>
      ),
      venture: (
        <div className="flex justify-center  border-y-[1px] border-gray-500 py-2">
          <BsFillCheckCircleFill color="#2ED173" size={25} />
        </div>
      ),
      telecom: (
        <div className="flex justify-center  border-y-[1px] border-gray-500 py-2">
          <BsFillCheckCircleFill color="#2ED173" size={25} />
        </div>
      ),
      unlimited: (
        <div className="border-r-[1px] border-y-[1px] border-gray-500 flex justify-center py-2">
          <BsFillCheckCircleFill color="#2ED173" size={25} />
        </div>
      ),
    },
    {
      text: "1year .com Domain",
      starter: (
        <div className="flex justify-center border-l-[1px] border-y-[1px] border-gray-500 py-2">
          <p>...</p>
        </div>
      ),
      merchant: (
        <div className="flex justify-center  border-y-[1px] border-gray-500 py-2">
          <BsFillCheckCircleFill color="#2ED173" size={25} />
        </div>
      ),
      venture: (
        <div className="flex justify-center  border-y-[1px] border-gray-500 py-2">
          <p>Yes</p>
        </div>
      ),
      telecom: (
        <div className="flex justify-center  border-y-[1px] border-gray-500 py-2">
          <p>Yes</p>
        </div>
      ),
      unlimited: (
        <div className="flex justify-center  border-y-[1px] border-gray-500 py-2">
          <BsFillCheckCircleFill color="#2ED173" size={25} />
        </div>
      ),
    },
    {
      text: "1year .com Hosting & Domain",
      starter: (
        <div className="flex justify-center border-l-[1px] border-y-[1px] border-gray-500 py-2">
          <p>No</p>
        </div>
      ),
      merchant: (
        <div className="flex justify-center  border-y-[1px] border-gray-500 py-2">
          <p>...</p>
        </div>
      ),
      venture: (
        <div className="flex justify-center  border-y-[1px] border-gray-500 py-2">
          <BsFillCheckCircleFill color="#2ED173" size={25} />
        </div>
      ),
      telecom: (
        <div className="flex justify-center  border-y-[1px] border-gray-500 py-2">
          <p>Yes</p>
        </div>
      ),
      unlimited: (
        <div className="border-r-[1px] border-y-[1px] border-gray-500 flex justify-center py-2">
          <BsFillCheckCircleFill color="#2ED173" size={25} />
        </div>
      ),
    },
    {
      text: "Mobile App",
      starter: (
        <div className="flex justify-center border-l-[1px] border-y-[1px] border-gray-500 py-2">
          <p>...</p>
        </div>
      ),
      merchant: (
        <div className="flex justify-center  border-y-[1px] border-gray-500 py-2">
          <p>NO</p>
        </div>
      ),
      venture: (
        <div className="flex justify-center  border-y-[1px] border-gray-500 py-2">
          <p>NO</p>
        </div>
      ),
      telecom: (
        <div className="flex justify-center  border-y-[1px] border-gray-500 py-2">
          <BsFillCheckCircleFill color="#2ED173" size={25} />
        </div>
      ),
      unlimited: (
        <div className="border-r-[1px] border-y-[1px] border-gray-500 flex justify-center py-2">
          <BsFillCheckCircleFill color="#2ED173" size={25} />
        </div>
      ),
    },

    {
      text: "Playstore Upload",
      starter: (
        <div className="flex justify-center border-l-[1px] border-y-[1px] border-gray-500 py-2">
          <p>No</p>
        </div>
      ),
      merchant: (
        <div className="flex justify-center  border-y-[1px] border-gray-500 py-2">
          <p>...</p>
        </div>
      ),
      venture: (
        <div className="flex justify-center  border-y-[1px] border-gray-500 py-2">
          <p>...</p>
        </div>
      ),
      telecom: (
        <div className="flex justify-center  border-y-[1px] border-gray-500 py-2">
          <BsFillCheckCircleFill color="#2ED173" size={25} />
        </div>
      ),
      unlimited: (
        <div className="border-r-[1px] border-y-[1px] border-gray-500 flex justify-center py-2">
          <BsFillCheckCircleFill color="#2ED173" size={25} />
        </div>
      ),
    },

    {
      text: "Appstore Upload",
      starter: (
        <div className="flex justify-center border-l-[1px] border-y-[1px] border-gray-500 py-2">
          <p>No</p>
        </div>
      ),
      merchant: (
        <div className="flex justify-center  border-y-[1px] border-gray-500 py-2">
          <p>No</p>
        </div>
      ),
      venture: (
        <div className="flex justify-center  border-y-[1px] border-gray-500 py-2">
          <p>...</p>
        </div>
      ),
      telecom: (
        <div className="flex justify-center border-y-[1px] border-gray-500 py-2">
          <p>No</p>
        </div>
      ),
      unlimited: (
        <div className="border-r-[1px] border-y-[1px] border-gray-500 flex justify-center py-2">
          <BsFillCheckCircleFill color="#2ED173" size={25} />
        </div>
      ),
    },

    {
      text: "Live Chat Integration",
      starter: (
        <div className="flex justify-center border-l-[1px] border-y-[1px] border-gray-500 py-2">
          <p>...</p>
        </div>
      ),
      merchant: (
        <div className="flex justify-center  border-y-[1px] border-gray-500 py-2">
          <p>...</p>
        </div>
      ),
      venture: (
        <div className="flex justify-center  border-y-[1px] border-gray-500 py-2">
          <BsFillCheckCircleFill color="#2ED173" size={25} />
        </div>
      ),
      telecom: (
        <div className="flex justify-center  border-y-[1px] border-gray-500 py-2">
          <BsFillCheckCircleFill color="#2ED173" size={25} />
        </div>
      ),
      unlimited: (
        <div className="border-r-[1px] border-y-[1px] border-gray-500 flex justify-center py-2">
          <BsFillCheckCircleFill color="#2ED173" size={25} />
        </div>
      ),
    },
    {
      text: "24/7 Support Channel",
      starter: (
        <div className="flex justify-center border-l-[1px] border-y-[1px] border-gray-500 py-2">
          <BsFillCheckCircleFill color="#2ED173" size={25} />
        </div>
      ),
      merchant: (
        <div className="flex justify-center  border-y-[1px] border-gray-500 py-2">
          <BsFillCheckCircleFill color="#2ED173" size={25} />
        </div>
      ),
      venture: (
        <div className="flex justify-center  border-y-[1px] border-gray-500 py-2">
          <BsFillCheckCircleFill color="#2ED173" size={25} />
        </div>
      ),
      telecom: (
        <div className="flex justify-center  border-y-[1px] border-gray-500 py-2">
          <BsFillCheckCircleFill color="#2ED173" size={25} />
        </div>
      ),
      unlimited: (
        <div className="border-r-[1px] border-y-[1px] border-gray-500 flex justify-center py-2">
          <BsFillCheckCircleFill color="#2ED173" size={25} />
        </div>
      ),
    },
    {
      text: "Dedicated Manager",
      starter: (
        <div className="flex justify-center border-l-[1px] border-y-[1px] border-gray-500 py-2">
          <p>...</p>
        </div>
      ),
      merchant: (
        <div className="flex justify-center  border-y-[1px] border-gray-500 py-2">
          <p>...</p>
        </div>
      ),
      venture: (
        <div className="flex justify-center  border-y-[1px] border-gray-500 py-2">
          <p>No</p>
        </div>
      ),
      telecom: (
        <div className="flex justify-center  border-y-[1px] border-gray-500 py-2">
          <BsFillCheckCircleFill color="#2ED173" size={25} />
        </div>
      ),
      unlimited: (
        <div className="border-r-[1px] border-y-[1px] border-gray-500 flex justify-center py-2">
          <BsFillCheckCircleFill color="#2ED173" size={25} />
        </div>
      ),
    },
  ];

  const keyFeatures = [
    {
      title: "Multi-Operator Integration:",
      content: " It ensures flexibility and wide coverage for customers.",
    },
    {
      title: "Payment Gateway Integration: ",
      content:
        "It allows users to make payments using various methods such as mobile wallets, or bank transfers.",
    },
    {
      title: "Real-Time Transactions:",
      content:
        "provides real-time transaction processing, ensuring immediate recharge or bill payment for customers.",
    },
    {
      title: "Reporting and Analytics:",
      content:
        "Users can generate detailed reports on transactions, revenues, and other metrics, providing valuable insights for business  decision-making.",
    },
    {
      title: "Mobile App and Web Interface:",
      content:
        "It develops user-friendly mobile applications for Android and iOS platforms, as well as a web-based interface.",
    },
    {
      title: "Customer Management:",
      content:
        "It includes functionalities for managing customer accounts, including user registration, login, and profile management.",
    },
    {
      title: "Admin Dashboard: ",
      content:
        "It incorporates a robust admin dashboard that allows system administrators to manage the entire VTU system effectively.",
    },
    {
      title: "API Integration:",
      content:
        "It facilitates API integration with external systems, allowing businesses to connect their VTU system with other applications..",
    },
    {
      title: "Scalability and Security: ",
      content:
        "The VTU system is designed to handle high volumes of transactions while ensuring data security and privacy.",
    },
  ];

  return (
    <div className="h-full w-full lg:mt-[-10%] mt-[-10%]">
      {/* HEADER */}
      <div className="bgClass px-[5%] md:py-40 py-20 h-auto flex flex-col 
      gap-10 justify-center  lg:gap-15 ">
         <div className="flex md:flex-row flex-col">
          <div className="flex flex-col lg:gap-10 gap-5 md:w-1/2 w-full">
            <h2 className="text-[30px] leading-[40px] font-bold md:text-left text-center 
    md:text-[26px] lg:text-[50px]  lg:leading-[60px] 
           text-[#04177F]" style={{
                color: primaryColor,
              }}>
              VTU Development
            </h2>
            <p className="text-[14px] md:text-left text-center font-bold
         text-black leading-[20px] 
      md:text-[11px] lg:text-[16px] lg:leading-[26px] opacity-80">
              AremxyPlug is a company that has a team of technical experts that
              can easily and quickly design and develop a VTU platform to start
              your telecom business with services like airtime top-up, data
              bundles, education pins, TV subscription, and bills payment
              platform.
            </p>
   </div>
{ /* Image */ }
  <div className="flex justify-center w-full h-auto md:w-1/2">
            <img
              src="./Images/vtu_dev/VTU_bg.avif"
              alt="background_image"
              className="w-[80%] md:w-[50%]"
            />
          </div>
 </div>
{/* Button */}
         
              <Link   className='w-full md:w-[197px] px-2 bg-primary text-[14px] leading-[18px]
              font-bold  text-white  py-[16px]  text-center
         rounded-[7px]  lg:text-[14px] lg:leading-[16px]' to="/OwnVTU">
                <Bluebutton text="Contact Sales" />
              </Link>
          
         {/* SubText below */}
                 {/* <div className="flex flex-col"> */}
          {/* <div className=" md:mt-[unset] rounded sm:rounded-md  lg:rounded-lg   md:col-span-2"> */}
            <p className=" md:text-left text-center text-[14px] leading-[20px] 
            font-bold lg:text-[16px] lg:leading-[24px]">
             - Own a VTU platform to start your telecom business
            </p>
            {/* <p className="text-[#000] text-justify text-[12px] md:text-[9.34px] lg:text-lg mt-4 sm:mt-6 md:mt-10 sm:text:lg  lg:mt-12 ">
              We put the needs of our users in a digital world first while
              prioritizing users experience, security, and scalability with a
              well-designed VTU system that can offer a secure and practical
              bills payments.
            </p> */}
          {/* </div> */}
        {/* </div> */}
        </div>


      
      {/* HEADER ENDS */}

      {/* 1 */}
      <div
        className="flex flex-col px-[5%] h-auto py-10
      gap-10 justify-center  lg:gap-15">
         <div className="flex md:flex-row flex-col h-full">
          <div className="flex flex-col  lg:gap-10 gap-5 md:w-1/2 w-full">
          <h2
           className="text-[30px] leading-[40px] font-bold md:text-left text-center 
    md:text-[26px] lg:text-[50px]  lg:leading-[60px] 
           text-[#04177F]">
            Start Your VTU Business
          </h2>
          <p className="text-[14px] md:text-left text-center font-bold
         text-black leading-[20px] 
      md:text-[11px] lg:text-[16px] lg:leading-[26px] opacity-80">
            Digital recharge is now a well-liked method of purchasing airtime,
            data bundles, and bills payments. We make it easy for you to start
            your telecom business without any hassle. You can start right away
            with any of our plans, very secured, convenient, flexible, and
            cost-effective. 
          </p>
          </div>
          {/* Image Container */}
             <div className="flex justify-center w-full h-full 
             md:w-1/2">
          <img
            src="./Images/vtu_dev/startVTU.avif"
            alt="background_image"
             className="w-full md:h-[300px] h-[150px]"
          />
        </div>
        
 {/*  Own your VTU Page*/}
       </div>
        <Link to="/OwnVTU" 
          className='w-full md:w-[197px] px-2 bg-primary text-[14px] leading-[18px]
          font-bold  text-white  py-[16px]  text-center
         rounded-[7px]  lg:text-[14px] lg:leading-[16px]'>
              <Bluebutton text="Start Now" />
            </Link>
    </div>
      {/* Setting Up a plan */}

       <div
        className="flex flex-col px-[5%] h-auto py-10
      gap-10 justify-center  lg:gap-15">
         <div className="flex md:flex-row flex-col">
          <div className="flex flex-col lg:gap-10 gap-5 md:w-1/2 w-full">
          <h2
             className="text-[30px] leading-[40px] font-bold md:text-left text-center 
    md:text-[26px] lg:text-[50px]  lg:leading-[60px] 
           text-[#04177F]"
            style={{
              color: primaryColor,
            }}
          >
            Setting up a VTU platform
          </h2>
          <p  className="text-[14px] md:text-left text-center font-bold
         text-black leading-[20px] md:text-[11px] lg:text-[16px] 
         lg:leading-[26px] opacity-80">
            With AremxyPlug’s robust API and software solutions, you can set up
            a VTU platform to manage your telecom business as an individual or
            business owner, student, or full house wife, you can vend all
            telecom products with services like airtime top-up, data bundles,
            and bills payment in just a few easy steps.
          </p>
          </div>
 {/* Image Container */}
    <div className="md:w-1/2 w-full">
          <img
            src="./Images/vtu_dev/settingsVTU.avif"
            alt="background_image"
            className="w-full md:h-[300px] h-[150px]"
          />
        </div>
        {/* Close Image Container */}
     
   </div>
        <Link className='w-full md:w-[197px] px-2 bg-primary text-[14px] leading-[18px]
              font-bold  text-white  py-[16px]  text-center
         rounded-[7px]  lg:text-[14px] lg:leading-[16px]' to="/OwnVTU">
              <Bluebutton text="Set-up Now" />
            </Link>
</div>

{/* CHHOSING PLAN */}
      <div className="lg:px-[8%]  px-[5%] flex flex-col lg:gap-10 gap-5 mt-20">
        <h2
         className="text-[30px] leading-[40px] font-bold text-center 
    md:text-[26px] lg:text-[50px]  lg:leading-[60px] 
           text-[#04177F]"
          style={{
            color: primaryColor,
          }}
        >
          Choose Plan
        </h2>
        {/* VTU Payment plans */}

        <div className=" grid md:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 gap-y-8 md:gap-y-14 
        lg:gap-y-8  justify-center">
          <div className="relative myCardShadow h-[500px] md:h-[800px] lg:h-[760px] 
          md:w-[86%] lg:w-[unset] bg-[#fff] rounded-lg gap-x-2 overflow-hidden">
            <VTU_PAY color="#90D7FF" />

            <div className="absolute top-0 bottom-0 right-0 left-0 ">
              <p className="text-center font-bold text-3xl my-8">
                Starter
                </p>

              <div className="flex justify-center">
                <p
                  className="myButtonShadow text-[#000] text-xl w-[150px] 
                  text-center rounded-lg py-2 font-semibold  cursor-pointer"
                  style={{
                    backgroundColor: "#fff",
                  }}
                >
                  Free
                </p>
              </div>

              <div className="flex justify-center my-8">
                <Link to="/OwnVTU">
                  <p
                    className="myButton2 text-[#fff] myButtonShadow  text-xl w-[150px] 
                    text-center rounded-lg py-2 font-semibold  cursor-pointer"
                    style={{
                      backgroundColor: "#fff",
                    }}
                  >
                    Get Started
                  </p>
                </Link>
              </div>

              <div className="flex ml-4 items-center my-4">
                <img
                  src="./Images/vtu_dev/blueCheck.png"
                  alt="blue check"
                  className="w-[25px]"
                />
                <p className="px-4 md:text-lg lg:text-xl" style={{}}>
                  Airtime Top-up
                </p>
              </div>
              <div className="flex ml-4 items-center my-4">
                <img
                  src="./Images/vtu_dev/blueCheck.png"
                  alt="blue check"
                  className="w-[25px] "
                />
                <p className="px-4 md:text-lg lg:text-xl" style={{}}>
                  Data Bundles
                </p>
              </div>
              <div className="flex ml-4 items-center my-4">
                <img
                  src="./Images/vtu_dev/blueCheck.png"
                  alt="blue check"
                  className="w-[25px] "
                />
                <p className="px-4 md:text-lg lg:text-xl" style={{}}>
                  Bills Payments
                </p>
              </div>
              <div className="flex ml-4 items-center my-4">
                <img
                  src="./Images/vtu_dev/blueCheck.png"
                  alt="blue check"
                  className="w-[25px] "
                />
                <p className="px-4 md:text-lg lg:text-xl" style={{}}>
                  Wallet System
                </p>
              </div>
              <div className="flex ml-4 items-center my-4">
                <img
                  src="./Images/vtu_dev/blueCheck.png"
                  alt="blue check"
                  className="w-[25px] "
                />
                <p className="px-4 md:text-lg lg:text-xl" style={{}}>
                  Automatic Pricing
                </p>
              </div>
            </div>
          </div>
          <div className="relative  myCardShadow h-[600px] md:h-[800px] lg:h-[760px] md:w-[86%] lg:w-[unset] bg-[#fff] rounded-lg gap-x-2 overflow-hidden">
            <VTU_PAY color="#dce4ff" />

            <div className="absolute top-0 bottom-0 right-0 left-0 ">
              <p className="text-center font-bold text-3xl my-8">Merchant</p>

              <div className="flex justify-center">
                <p
                  className="myButtonShadow text-[#000] text-xl w-[150px] text-center rounded-lg py-2 font-semibold  cursor-pointer"
                  style={{
                    backgroundColor: "#fff",
                  }}
                >
                  49,990
                </p>
              </div>

              <div className="flex justify-center my-8">
                <Link to="/OwnVTU">
                  <p
                    className="myButton2 text-[#fff] myButtonShadow  text-xl w-[150px] text-center rounded-lg py-2 font-semibold  cursor-pointer"
                    style={{
                      backgroundColor: "#fff",
                    }}
                  >
                    Get Started
                  </p>
                </Link>
              </div>

              <div className="flex ml-4 items-center my-4">
                <img
                  src="./Images/vtu_dev/blueCheck.png"
                  alt="blue check"
                  className="w-[25px] "
                />
                <p className="px-4 md:text-lg lg:text-xl" style={{}}>
                  Airtime Top-up
                </p>
              </div>
              <div className="flex ml-4 items-center my-4">
                <img
                  src="./Images/vtu_dev/blueCheck.png"
                  alt="blue check"
                  className="w-[25px] "
                />
                <p className="px-4 md:text-lg lg:text-xl" style={{}}>
                  Data Bundles
                </p>
              </div>
              <div className="flex ml-4 items-center my-4">
                <img
                  src="./Images/vtu_dev/blueCheck.png"
                  alt="blue check"
                  className="w-[25px] "
                />
                <p className="px-4 md:text-lg lg:text-xl" style={{}}>
                  Bills Payment
                </p>
              </div>
              <div className="flex ml-4 items-center my-4">
                <img
                  src="./Images/vtu_dev/blueCheck.png"
                  alt="blue check"
                  className="w-[25px] "
                />
                <p className="px-4 md:text-lg lg:text-xl" style={{}}>
                  Wallet System
                </p>
              </div>
              <div className="flex ml-4 items-center my-4">
                <img
                  src="./Images/vtu_dev/blueCheck.png"
                  alt="blue check"
                  className="w-[25px] "
                />
                <p className="px-4 md:text-lg lg:text-xl" style={{}}>
                  NGN Virtual Accounts
                </p>
              </div>
              <div className="flex ml-4 items-center my-4">
                <img
                  src="./Images/vtu_dev/blueCheck.png"
                  alt="blue check"
                  className="w-[25px] "
                />
                <p className="px-4 md:text-lg lg:text-xl" style={{}}>
                  24/7 Merchant Support
                </p>
              </div>
              <div className="flex ml-4 items-center my-4">
                <img
                  src="./Images/vtu_dev/blueCheck.png"
                  alt="blue check"
                  className="w-[25px] "
                />
                <p className="px-4 md:text-lg lg:text-xl" style={{}}>
                  Plus 1year .com Domain
                </p>
              </div>
            </div>
          </div>
          <div className="relative myCardShadow h-[600px] md:h-[800px] lg:h-[760px] md:w-[86%] lg:w-[unset] bg-[#fff] rounded-lg gap-x-2 overflow-hidden">
            <VTU_PAY color="#edd6ff" />

            <div className="absolute top-0 bottom-0 right-0 left-0 ">
              <p className="text-center font-bold text-3xl my-8">Venture</p>

              <div className="flex justify-center">
                <p
                  className="myButtonShadow text-[#000] text-xl w-[150px] text-center rounded-lg py-2 font-semibold  cursor-pointer"
                  style={{
                    backgroundColor: "#fff",
                  }}
                >
                  149,990
                </p>
              </div>

              <div className="flex justify-center my-8">
                <Link to="/OwnVTU">
                  <p
                    className="myButton2 text-[#fff] myButtonShadow text-xl w-[150px] text-center rounded-lg py-2 font-semibold  cursor-pointer"
                    style={{
                      backgroundColor: "#fff",
                    }}
                  >
                    Get Started
                  </p>
                </Link>
              </div>

              <div className="flex ml-4 items-center my-4">
                <img
                  src="./Images/vtu_dev/blueCheck.png"
                  alt="blue check"
                  className="w-[25px] "
                />
                <p className="px-4 md:text-lg lg:text-xl" style={{}}>
                  Everything in Merchant
                </p>
              </div>
              <div className="flex ml-4 items-center my-4">
                <img
                  src="./images/vtu_dev/blueCheck.png"
                  alt="blue check"
                  className="w-[25px] "
                />
                <p className="px-4 md:text-lg lg:text-xl" style={{}}>
                  TV Subscription
                </p>
              </div>
              <div className="flex ml-4 items-center my-4">
                <img
                  src="./images/vtu_dev/blueCheck.png"
                  alt="blue check"
                  className="w-[25px] "
                />
                <p className="px-4 md:text-lg lg:text-xl" style={{}}>
                  Education Pins
                </p>
              </div>
              <div className="flex ml-4 items-center my-4">
                <img
                  src="./Images/vtu_dev/blueCheck.png"
                  alt="blue check"
                  className="w-[25px] "
                />
                <p className="px-4 md:text-lg lg:text-xl" style={{}}>
                  Airtime Conversion
                </p>
              </div>
              <div className="flex ml-4 items-center my-4">
                <img
                  src="./Images/vtu_dev/blueCheck.png"
                  alt="blue check"
                  className="w-[25px] "
                />
                <p className="px-4 md:text-lg lg:text-xl" style={{}}>
                  Card Payment Option
                </p>
              </div>
              <div className="flex ml-4 items-center my-4">
                <img
                  src="./Images/vtu_dev/blueCheck.png"
                  alt="blue check"
                  className="w-[25px] "
                />
                <p className="px-4 md:text-lg lg:text-xl" style={{}}>
                  24/7 Venture Support
                </p>
              </div>
              <div className="flex ml-4 items-center my-4">
                <img
                  src="./Images/vtu_dev/blueCheck.png"
                  alt="blue check"
                  className="w-[25px] "
                />
                <p className="px-4 md:text-lg lg:text-xl" style={{}}>
                  Plus 1year .com Hosting & Domain
                </p>
              </div>
            </div>
          </div>
          <div className="relative  myCardShadow h-[550px]  md:h-[800px] lg:h-[760px] md:w-[86%] lg:w-[unset] bg-[#fff] rounded-lg gap-x-2 overflow-hidden lg:hidden">
            <VTU_PAY color="#feeebe" />

            <div className="absolute top-0 bottom-0 right-0 left-0 ">
              <p className="text-center font-bold text-3xl my-8">Telecom Pro</p>

              <div className="flex justify-center">
                <p
                  className="myButtonShadow text-[#000] text-xl w-[150px] text-center rounded-lg py-2 font-semibold  cursor-pointer"
                  style={{
                    backgroundColor: "#fff",
                  }}
                >
                  399,990
                </p>
              </div>

              <div className="flex justify-center my-8">
                <Link to="/OwnVTU">
                  <p
                    className="myButton2 text-[#fff] myButtonShadow text-xl w-[150px] text-center rounded-lg py-2 font-semibold  cursor-pointer"
                    style={{
                      backgroundColor: "#fff",
                    }}
                  >
                    Get Started
                  </p>
                </Link>
              </div>

              <div className="flex ml-4 items-center my-4">
                <img
                  src="./Images/vtu_dev/blueCheck.png"
                  alt="blue check"
                  className="w-[25px] "
                />
                <p className="px-4 md:text-lg lg:text-xl" style={{}}>
                  Everything in Venture
                </p>
              </div>
              <div className="flex ml-4 items-center my-4">
                <img
                  src="./Images/vtu_dev/blueCheck.png"
                  alt="blue check"
                  className="w-[25px] "
                />
                <p className="px-4 md:text-lg lg:text-xl" style={{}}>
                  Bulk SMS
                </p>
              </div>
              <div className="flex ml-4 items-center my-4">
                <img
                  src="./Images/vtu_dev/blueCheck.png"
                  alt="blue check"
                  className="w-[25px] "
                />
                <p className="px-4 md:text-lg lg:text-xl" style={{}}>
                  Smile Airtime & Data
                </p>
              </div>
              <div className="flex ml-4 items-center my-4">
                <img
                  src="./Images/vtu_dev/blueCheck.png"
                  alt="blue check"
                  className="w-[25px] "
                />
                <p className="px-4 md:text-lg lg:text-xl" style={{}}>
                  Mobile App & Playstore Upload
                </p>
              </div>
              <div className="flex ml-4 items-center my-4">
                <img
                  src="./Images/vtu_dev/blueCheck.png"
                  alt="blue check"
                  className="w-[25px] "
                />
                <p className="px-4 md:text-lg lg:text-xl" style={{}}>
                  Live Chat Integration
                </p>
              </div>
              <div className="flex ml-4 items-center my-4">
                <img
                  src="./Images/vtu_dev/blueCheck.png"
                  alt="blue check"
                  className="w-[25px] "
                />
                <p className="px-4 md:text-lg lg:text-xl" style={{}}>
                  24/7 Support Channel
                </p>
              </div>
              <div className="flex ml-4 items-center my-4">
                <img
                  src="./Images/vtu_dev/blueCheck.png"
                  alt="blue check"
                  className="w-[25px] "
                />
                <p className="px-4 md:text-lg lg:text-xl" style={{}}>
                  Plus 1year .com Hosting & Domain
                </p>
              </div>
            </div>
          </div>
          <div className=" md:hidden  relative myCardShadow h-[600px] md:h-[800px] lg:h-[760px] md:w-[86%] lg:w-[unset] bg-[#fff] rounded-lg gap-x-2 overflow-hidden lg:hidden">
            <VTU_PAY color="#dbffd2" />

            <div className="absolute top-0 bottom-0 right-0 left-0 ">
              <p className="text-center font-bold text-3xl my-8">Unlimited</p>

              <div className="flex justify-center">
                <p
                  className="myButtonShadow text-[#000] text-xl w-[150px] text-center rounded-lg py-2 font-semibold  cursor-pointer"
                  style={{
                    backgroundColor: "#fff",
                  }}
                >
                  599,990
                </p>
              </div>

              <div className="flex justify-center my-8">
                <Link to="/OwnVTU">
                  <p className="myButton2 myButtonShadow text-[#fff] text-xl w-[150px] text-center rounded-lg py-2 font-semibold  cursor-pointer">
                    Get Started
                  </p>
                </Link>
              </div>

              <div className="flex ml-4 items-center my-4">
                <img
                  src="./Images/vtu_dev/blueCheck.png"
                  alt="blue check"
                  className="w-[25px] "
                />
                <p className="px-4 md:text-lg lg:text-xl" style={{}}>
                  Everything in Telecom pro
                </p>
              </div>
              <div className="flex ml-4 items-center my-4">
                <img
                  src="./Images/vtu_dev/blueCheck.png"
                  alt="blue check"
                  className="w-[25px] "
                />
                <p className="px-4 md:text-lg lg:text-xl" style={{}}>
                  Spectranet Data
                </p>
              </div>
              <div className="flex ml-4 items-center my-4">
                <img
                  src="./Images/vtu_dev/blueCheck.png"
                  alt="blue check"
                  className="w-[25px] "
                />
                <p className="px-4 md:text-lg lg:text-xl" style={{}}>
                  Recharge Card Printing
                </p>
              </div>
              <div className="flex ml-4 items-center my-4">
                <img
                  src="./Images/vtu_dev/blueCheck.png"
                  alt="blue check"
                  className="w-[25px] "
                />
                <p className="px-4 md:text-lg lg:text-xl" style={{}}>
                  Android & iOS Mobile App
                </p>
              </div>
              <div className="flex ml-4 items-center my-4">
                <img
                  src="./Images/vtu_dev/blueCheck.png"
                  alt="blue check"
                  className="w-[25px] "
                />
                <p className="px-4 md:text-lg lg:text-xl" style={{}}>
                  Appstore Upload
                </p>
              </div>
              <div className="flex ml-4 items-center my-4">
                <img
                  src="./Images/vtu_dev/blueCheck.png"
                  alt="blue check"
                  className="w-[25px] "
                />
                <p className="px-4 md:text-lg lg:text-xl" style={{}}>
                  Dedicated Manager
                </p>
              </div>
              <div className="flex ml-4 items-center my-4">
                <img
                  src="./Images/vtu_dev/blueCheck.png"
                  alt="blue check"
                  className="w-[25px] "
                />
                <p className="px-4 md:text-lg lg:text-xl" style={{}}>
                  Plus 1year .com Hosting & Domain
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 
        *
        *
        * *
        * **
        * *
        *
        *
        *
        
        
        
        
        */}
        {/* Telecom and unlimited */}
        <div className="mt-8 flex justify-center">
          <div className="hidden  w-[66%] lg:flex">
            <div className=" relative  myCardShadow h-[760px] md:w-[86%] md:h-[800px] lg:h-[760px] lg:w-[unset] bg-[#fff] rounded-lg mr-8 overflow-hidden ">
              <VTU_PAY color="#feeebe" />

              <div className="absolute top-0 bottom-0 right-0 left-0 ">
                <p className="text-center font-bold text-3xl my-8">
                  Telecom Pro
                </p>

                <div className="flex justify-center">
                  <p
                    className="myButtonShadow text-[#000] text-xl w-[150px] text-center rounded-lg py-2 font-semibold  cursor-pointer"
                    style={{
                      backgroundColor: "#fff",
                    }}
                  >
                    399,990
                  </p>
                </div>

                <div className="flex justify-center my-8">
                  <Link to="/OwnVTU">
                    <p
                      className="myButton2 text-[#fff] myButtonShadow text-xl w-[150px] text-center rounded-lg py-2 font-semibold  cursor-pointer"
                      style={{
                        backgroundColor: "#fff",
                      }}
                    >
                      Get Started
                    </p>
                  </Link>
                </div>

                <div className="flex ml-4 items-center my-4">
                  <img
                    src="./Images/vtu_dev/blueCheck.png"
                    alt="blue check"
                    className="w-[25px] "
                  />
                  <p className="px-4 md:text-lg lg:text-xl" style={{}}>
                    Everything in Venture
                  </p>
                </div>
                <div className="flex ml-4 items-center my-4">
                  <img
                    src="./Images/vtu_dev/blueCheck.png"
                    alt="blue check"
                    className="w-[25px] "
                  />
                  <p className="px-4 md:text-lg lg:text-xl" style={{}}>
                    Bulk SMS
                  </p>
                </div>
                <div className="flex ml-4 items-center my-4">
                  <img
                    src="./Images/vtu_dev/blueCheck.png"
                    alt="blue check"
                    className="w-[25px] "
                  />
                  <p className="px-4 md:text-lg lg:text-xl" style={{}}>
                    Smile Airtime & Data
                  </p>
                </div>
                <div className="flex ml-4 items-center my-4">
                  <img
                    src="./Images/vtu_dev/blueCheck.png"
                    alt="blue check"
                    className="w-[25px] "
                  />
                  <p className="px-4 md:text-lg lg:text-xl" style={{}}>
                    Mobile App & Playstore Upload
                  </p>
                </div>
                <div className="flex ml-4 items-center my-4">
                  <img
                    src="./Images/vtu_dev/blueCheck.png"
                    alt="blue check"
                    className="w-[25px] "
                  />
                  <p className="px-4 md:text-lg lg:text-xl" style={{}}>
                    Live Chat Integration
                  </p>
                </div>
                <div className="flex ml-4 items-center my-4">
                  <img
                    src="./Images/vtu_dev/blueCheck.png"
                    alt="blue check"
                    className="w-[25px] "
                  />
                  <p className="px-4 md:text-lg lg:text-xl" style={{}}>
                    24/7 Support Channel
                  </p>
                </div>
                <div className="flex ml-4 items-center my-4">
                  <img
                    src="./Images/vtu_dev/blueCheck.png"
                    alt="blue check"
                    className="w-[25px] "
                  />
                  <p className="px-4 md:text-lg lg:text-xl" style={{}}>
                    Plus 1year .com Hosting & Domain
                  </p>
                </div>
              </div>
            </div>
            <div className="md:hidden  relative  myCardShadow h-[760px] md:h-[800px] lg:h-[760px] md:w-[86%] lg:w-[unset] bg-[#fff] rounded-lg gap-x-2 overflow-hidden hidden lg:block">
              <VTU_PAY color="#dbffd2" />

              <div className="absolute top-0 bottom-0 right-0 left-0 ">
                <p className="text-center font-bold text-3xl my-8">Unlimited</p>

                <div className="flex justify-center">
                  <p
                    className="myButtonShadow text-[#000] text-xl w-[150px] text-center rounded-lg py-2 font-semibold  cursor-pointer"
                    style={{
                      backgroundColor: "#fff",
                    }}
                  >
                    599,990
                  </p>
                </div>

                <div className="flex justify-center my-8">
                  <Link to="/OwnVTU">
                    <p className="myButton2 myButtonShadow text-[#fff] text-xl w-[150px] text-center rounded-lg py-2 font-semibold  cursor-pointer">
                      Get Started
                    </p>
                  </Link>
                </div>

                <div className="flex ml-4 items-center my-4">
                  <img
                    src="./Images/vtu_dev/blueCheck.png"
                    alt="blue check"
                    className="w-[25px] "
                  />
                  <p className="px-4 md:text-lg lg:text-xl" style={{}}>
                    Everything in Telecom pro
                  </p>
                </div>
                <div className="flex ml-4 items-center my-4">
                  <img
                    src="./Images/vtu_dev/blueCheck.png"
                    alt="blue check"
                    className="w-[25px] "
                  />
                  <p className="px-4 md:text-lg lg:text-xl" style={{}}>
                    Spectranet Data
                  </p>
                </div>
                <div className="flex ml-4 items-center my-4">
                  <img
                    src="./Images/vtu_dev/blueCheck.png"
                    alt="blue check"
                    className="w-[25px] "
                  />
                  <p className="px-4 md:text-lg lg:text-xl" style={{}}>
                    Recharge Card Printing
                  </p>
                </div>
                <div className="flex ml-4 items-center my-4">
                  <img
                    src="./Images/vtu_dev/blueCheck.png"
                    alt="blue check"
                    className="w-[25px] "
                  />
                  <p className="px-4 md:text-lg lg:text-xl" style={{}}>
                    Android & iOS Mobile App
                  </p>
                </div>
                <div className="flex ml-4 items-center my-4">
                  <img
                    src="./Images/vtu_dev/blueCheck.png"
                    alt="blue check"
                    className="w-[25px] "
                  />
                  <p className="px-4 md:text-lg lg:text-xl" style={{}}>
                    Appstore Upload
                  </p>
                </div>
                <div className="flex ml-4 items-center my-4">
                  <img
                    src="./Images/vtu_dev/blueCheck.png"
                    alt="blue check"
                    className="w-[25px] "
                  />
                  <p className="px-4 md:text-lg lg:text-xl" style={{}}>
                    Dedicated Manager
                  </p>
                </div>
                <div className="flex ml-4 items-center my-4">
                  <img
                    src="./Images/vtu_dev/blueCheck.png"
                    alt="blue check"
                    className="w-[25px] "
                  />
                  <p className="px-4 md:text-lg lg:text-xl" style={{}}>
                    Plus 1year .com Hosting & Domain
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 
        *
        *
        *
        *
        * *
        *
        * **
        * *
        
        */}

        {/* last plan */}
        <div className="mt-[18px] flex justify-center">
          <div className="hidden md:block  lg:hidden relative myCardShadow h-[760px] md:w-[42%] md:h-[800px] lg:h-[760px] lg:w-[unset] bg-[#fff] rounded-lg gap-x-2 overflow-hidden ml-[-40px]">
            <VTU_PAY color="#dbffd2" />

            <div className="absolute top-0 bottom-0 right-0 left-0 ">
              <p className="text-center font-bold text-3xl my-8">Unlimited</p>

              <div className="flex justify-center">
                <p
                  className="myButtonShadow text-[#000] text-xl w-[150px] text-center rounded-lg py-2 font-semibold  cursor-pointer"
                  style={{
                    backgroundColor: "#fff",
                  }}
                >
                  599,990
                </p>
              </div>

              <div className="flex justify-center my-8">
                <Link to="/OwnVTU">
                  <p className="myButton2 myButtonShadow text-[#fff] text-xl w-[150px] text-center rounded-lg py-2 font-semibold  cursor-pointer">
                    Get Started
                  </p>
                </Link>
              </div>

              <div className="flex ml-4 items-center my-4">
                <img
                  src="./Images/vtu_dev/blueCheck.png"
                  alt="blue check"
                  className="w-[25px] "
                />
                <p className="px-4 md:text-lg lg:text-xl" style={{}}>
                  Everything in Telecom pro
                </p>
              </div>
              <div className="flex ml-4 items-center my-4">
                <img
                  src="./Images/vtu_dev/blueCheck.png"
                  alt="blue check"
                  className="w-[25px] "
                />
                <p className="px-4 md:text-lg lg:text-xl" style={{}}>
                  Spectranet Data
                </p>
              </div>
              <div className="flex ml-4 items-center my-4">
                <img
                  src="./Images/vtu_dev/blueCheck.png"
                  alt="blue check"
                  className="w-[25px] "
                />
                <p className="px-4 md:text-lg lg:text-xl" style={{}}>
                  Recharge Card Printing
                </p>
              </div>
              <div className="flex ml-4 items-center my-4">
                <img
                  src="./Images/vtu_dev/blueCheck.png"
                  alt="blue check"
                  className="w-[25px] "
                />
                <p className="px-4 md:text-lg lg:text-xl" style={{}}>
                  Android & iOS Mobile App
                </p>
              </div>
              <div className="flex ml-4 items-center my-4">
                <img
                  src="./Images/vtu_dev/blueCheck.png"
                  alt="blue check"
                  className="w-[25px] "
                />
                <p className="px-4 md:text-lg lg:text-xl" style={{}}>
                  Appstore Upload
                </p>
              </div>
              <div className="flex ml-4 items-center my-4">
                <img
                  src="./Images/vtu_dev/blueCheck.png"
                  alt="blue check"
                  className="w-[25px] "
                />
                <p className="px-4 md:text-lg lg:text-xl" style={{}}>
                  Dedicated Manager
                </p>
              </div>
              <div className="flex ml-4 items-center my-4">
                <img
                  src="./Images/vtu_dev/blueCheck.png"
                  alt="blue check"
                  className="w-[25px] "
                />
                <p className="px-4 md:text-lg lg:text-xl" style={{}}>
                  Plus 1year .com Hosting & Domain
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* VTU Payment plans ends here*/}
      </div>

      {/*  Our Key Features Includes */}
      <div className=" lg:px-[8%] px-[5%]  ">
        <p
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold lg:tracking-wider  text-center mt-[70px] mb-[50px]"
          style={{
            color: primaryColor,
          }}
        >
          Our Key Features Includes
        </p>

        <div className="mt-14 grid grid-cols-1 gap-y-6">
          {keyFeatures.map((item, index) => (
            <div
              key={index.toString()}
              className="featuresShadow rounded-lg py-2"
              style={{
                backgroundColor: index % 2 === 0 ? "#f4e3ff" : "#fce9d1",
              }}
            >
              <div className="flex items-center pl-4">
                <RxDotFilled color="#000" size={15} />
                <p className="font-semibold ">{item.title}</p>
              </div>

              <p className="pl-8">{item.content}</p>
            </div>
          ))}
        </div>
      </div>

      {/*  Our Key Features Includes ends here */}

      {/*   Difference Key Features  starts here */}
      <div className=" lg:px-[8%] px-[5%]  ">
        <p
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold lg:tracking-wider  text-center mt-[70px] mb-[50px]"
          style={{
            color: primaryColor,
          }}
        >
          Differences Between Plan
        </p>

        <div className="overflow-x-scroll lg:overflow-visible">
          <div className="grid grid-cols-7 min-w-[800px]">
            {DifferenceHead.map((item, index) => (
              <p
                className={` font-bold text-lg text-zinc-900 ${
                  index === 0 ? "col-span-2" : "col-span-1 text-center"
                }`}
                key={index.toString()}
              >
                {item.text}
              </p>
            ))}
          </div>

          {differenceContent.map((item, index) => (
            <div
              className="mt-4 grid grid-cols-7 min-w-[800px]"
              key={index.toString()}
            >
              <p
                className={` font-bold text-lg text-zinc-900 col-span-2 text-center"}`}
              >
                {item.text}
              </p>
              {item.starter}
              {item.merchant}
              {item.venture}
              {item.telecom}
              {item.unlimited}
            </div>
          ))}
        </div>

        <p
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold lg:tracking-wider  text-center mt-[70px] mb-[50px]"
          style={{
            color: primaryColor,
          }}
        >
          Do you need help choosing a plan?
        </p>

        <div className="flex justify-center md:mb-[15%] mb-[25%]">
          <Link to="/OwnVTU">
            <Bluebutton text="Contact Sales" />
          </Link>
        </div>
      </div>

      {/*  Difference Key Features  ends here */}
    </div>
  );
}

export default VTU_DEV;
