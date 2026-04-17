import React, { useState } from "react";
import "./cardIssuing.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Bluebutton from "../../bluebutton/Bluebutton";
import { Link } from "react-router-dom";
import CurrencyConversionModal from "../../CurrencyConversion/CurrencyConversionModal";
import {motion} from "framer-motion";


export const primaryColor = "#04177F";





// For the Card grid
const cardServices = [
  {
    title: "Virtual Card",
    description: "Our virtual cards defy currency barriers globally. Clear all your shopping carts, pay for your subscriptions, and live without the fear of failed transactions.",
    image: "./Images/card_issuing_images/virtualCard.avif",
    shadow: "card_activation_boxshadow2"
  },
  {
    title: "Physical Card",
    description: "Our physical card gives you confidence while you are out and about. Be it grocery shopping or a romantic dinner, be rest assured, your bills will be cleared without any hassle.",
    image: "./Images/card_issuing_images/physicalCard.avif",
    shadow: "card_activation_boxshadow3"
  },
  {
    title: "Card Maintenance",
    description: "At AremxyPlug, we believe it is critical to provide comprehensive card maintenance services to ensure that your cards are always in good condition. Spend conveniently and worry-free.",
    image: "./Images/card_issuing_images/cardMaintainance.avif",
    shadow: "card_activation_boxshadow2"
  },
  {
    title: "Card Management",
    description: "Our system gives you the ability to block cards in the event of loss or theft. Monitor, set limitations, activate, and manage your usage from a single secure location.",
    image: "./Images/card_issuing_images/cardManagement.avif",
    shadow: "card_activation_boxshadow3"
  }
];


const carouselData = [
  {
    title: "Card Activation",
    icon: "./Images/card_issuing_images/cardActivation.png",
    description: "Sign up on our platform, navigate the cards feature, provide appropriate details, get verified, fund your cards, and start spending globally."
  },
  {
    title: "Card Top Up",
    icon: "./Images/card_issuing_images/cardTopUPIcon.png",
    description: "Seamlessly Top-Up your cards from your wallet. Our 3D secure virtual cards are accepted everywhere Verve, Visa, and Mastercard are used."
  },
  {
    title: "Payment Authorization",
    icon: "./Images/card_issuing_images/paymentIcon.png",
    description: "Payments are deducted from your balance. Confirm each transaction with an OTP via phone or email to authorize and complete transactions."
  },
  {
    title: "Automate Card Usage",
    icon: "./Images/card_issuing_images/automateIcon.png",
    description: "Track spendings by setting daily, weekly, and monthly limits. Seamlessly manage your card spending patterns according to your choice."
  },
  {
    title: "Card Statement",
    icon: "./Images/card_issuing_images/cardStatementIcon.png",
    description: "Request card statements anytime. All transactions are safe and secured, allowing you to track spendings without any hassle."
  }
];


// Mapping the Carousel data
const items = carouselData.map((item, index) => (
  <div key={index} className="w-[280px] pr-4 md:pr-8 select-none">
    <div className="card_activation_boxshadow rounded-[15px] border-[1px] border-[#92ABFE] p-5 h-[200px] md:h-[260px] lg:h-[350px] bg-white transition-all duration-300 hover:shadow-lg">
      <div className="flex items-start gap-3 h-[60px] mb-2">
        <img src={item.icon} alt="icon" className="h-[23px] object-contain" />
        <h3 className="font-bold tracking-wide text-[11px] md:text-[13px] 
        lg:text-[18px] text-black leading-tight">
          {item.title}
        </h3>
      </div>
      <p className="text-justify text-[10px] md:text-[11px] lg:text-[16px] leading-relaxed text-gray-700">
        {item.description}
      </p>
    </div>
  </div>
));
function CardIssuing() {
  // const [activeSlide, setActiveSlide] = useState(null);
  const [showPopup, setShowPopup] = useState(false)
  const handleShowPopup = () => {
    setShowPopup(!showPopup)
  }

  return (
    <>
      <div className="page_overall_root_background_gradient mt-[-100px] md:mt-[-170px] lg:mt-[-200px] pt-[180px]  md:pt-[280px]  lg:pt-[300px] md:pb-[15%] pb-[25%]  w-full lg:px-[8%] px-[5%] ">
        <div
          className=" grid lg:grid-cols-2 lg:gap-x-8  md:grid-cols-2 md:gap-x-4    
       grid-cols-1 gap-y-4 
        "
        >
          <div className=" flex flex-col gap-6  rounded xl:h-[350px] sm:rounded-md p-6  
          lg:rounded-lg bg-[#f2f5ff] lg:p-8 md:p-6">
            <h1
              className="text-[30px] leading-[40px]   font-bold md:text-left text-center 
    md:text-[26px] lg:text-[50px]  lg:leading-[60px] 
           text-[#04177F]"
              style={{
                color: primaryColor,
              }}
            >
              Card Issuing
            </h1>
            <p className="text-[14px] md:text-left text-center font-medium text-black leading-[20px] 
      md:text-[11px] lg:text-[16px] lg:leading-[26px]"
            >
              Our card issuing service can be tailored to your specific needs as
              an Individual or business. we issue 3D secured virtual and
              physical debit USD and NGN cards to spend anywhere Verve, Visa,
              and Mastercard are accepted, both in-store and online, anytime,
              anywhere.
            </p>
          </div>

          <div className="w-full flex justify-center md:flex md:justify-end mt-[50px] md:mt-0">
            <img
              src="./Images/card_issuing_images/cardIssuingBG.avif"
              alt="backgroundImage"
              className="w-[70%] md:w-[90%] lg:w-[95%]"
            />
          </div>
        </div>

        <div className="grid mt-12 w-full  md:mt-16 lg:mt-20 grid-cols-1 
        md:grid-cols-2 lg:grid-cols-3 ">
          <div className="grid lg:col-span-2">
            <h2
               className="text-[30px] leading-[40px]   font-bold  text-center 
    md:text-[26px] lg:text-[50px]  lg:leading-[60px] 
           text-[#04177F]"
              style={{
                color: primaryColor,
              }}
            >
              How The Card Works
            </h2>
            <p className="text-[14px] text-left md:text-center font-medium text-black leading-[20px] 
      md:text-[11px] lg:text-[16px] lg:leading-[26px] opacity-80">
              You can manage your cards spending limits, spending patterns,
              automate and reload your cards seamlessly to make global purchase,
              pay bills and spend both online and in-store, offline channels.
            </p>
          </div>
        </div>

        <p className="text-[#000] text-[10.53px] md:text-[12px] lg:text-lg font-bold mt-16 mb-8">
          Below are the five easy steps:
        </p>



        {/* Carousel For the mapped Carousel Data before the function was returned */}
        <AliceCarousel
  animationDuration={1000} // Smoother transition
  autoPlayInterval={3000}
  autoPlay={true}
  mouseTracking
  items={items}
  autoWidth
  infinite
  touchTracking
  disableButtonsControls
  keyboardNavigation={true}
  renderDotsItem={({ isActive }) => (
    <motion.div
      initial={false}
      animate={{ 
        scale: isActive ? 1.5 : 1,
        width: isActive ? "12px" : "8px" 
      }}
      className="h-[8px] rounded-full mx-2 cursor-pointer transition-colors duration-300"
      style={{ 
        backgroundColor: isActive ? primaryColor : "#b1b9c2",
      }}
    />
  )}
/>

        {/* <AliceCarousel
          animationDuration={2000}
          autoPlayInterval={2000}
          autoPlay={true}
          mouseTracking
          items={items}
          autoWidth
          infinite
          touchTracking
          touchMoveDefaultEvents={false}
          disableButtonsControls
          keyboardNavigation={true}
          renderDotsItem={(e) => {
            const { isActive, activeIndex } = e;

            console.log(isActive, activeIndex);
            return isActive === true ? (
              <div
                className="w-[8px] h-[8px] rounded-full mx-[4px] md:mx-[8px]  lg:mx-[10px]"
                style={{ backgroundColor: primaryColor }}
              ></div>
            ) : (
              <div
                className="w-[8px] h-[8px] rounded-full mx-[4px] md:mx-[8px]  lg:mx-[10px]"
                style={{ backgroundColor: "#b1b9c2" }}
              ></div>
            );
          }}
          // renderDotsItem(e: DotsItem)
        /> */}
        {/* 
        <div className="card_activation_boxshadow w-[280px] h-[320px] rounded sm:rounded-md md:rounded-lg lg:rounded-lg border-[1px] border-[#92ABFE] p-4">
          <div className="flex pl-2 space-x-4">
            <img
              src="./Images/card_issuing_images/cardActivation.png"
              alt="icon"
              className="w-[35px] "
            />
            <p>Card Activation</p>
          </div>

          <p className="mt-8 text-justify">
            Sign up on our platform, navigate the cards feature, provide the
            appropriate details as a business or individual, get verified,
            activate your cards, fund your cards, and start spending with your
            cards globally.
          </p>
        </div> */}

        <div className="flex justify-center my-14">
          <Bluebutton text="Get Your Card Now" onClick={handleShowPopup} />
        </div>
        {showPopup && (
          <CurrencyConversionModal
            title="Card Issuing"
            image="./Images/wallet/comingSoon.png"
            onClick={() => setShowPopup(false)}
            tag="This Feature is Currently Not Available."
          />
        )}
{/* NEW */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-x-10 lg:gap-x-16 px-[5%] py-10">
  {cardServices.map((service, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }} // Subtle Zoom on Hover
      className={`${service.shadow} bg-white rounded-[20px] lg:rounded-[35px] border-[1px] border-[#92ABFE] 
                  flex flex-col overflow-hidden min-h-[500px] md:min-h-[550px] lg:min-h-[680px] transition-shadow duration-300`}
    >
      {/* Image Container - Fixed height to force vertical orientation */}
      <div className="w-full h-[220px] md:h-[280px] lg:h-[350px] overflow-hidden flex justify-center items-center bg-gray-50">
        <motion.img
          whileHover={{ scale: 1.1 }} // Inner image zoom
          transition={{ duration: 0.5 }}
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="flex flex-col p-6 lg:p-10 gap-4">
        <h2 className="text-[22px] leading-[30px] font-extrabold text-black lg:text-[30px]">
          {service.title}
        </h2>

        <p className="text-[14px] text-left font-medium text-black leading-[22px] md:text-[12px] lg:text-[18px] lg:leading-[28px] opacity-90">
          {service.description}
        </p>
      </div>

      {/* Optional: Visual accent to push the "Tall" look */}
      <div className="mt-auto p-6 opacity-20 text-[#92ABFE] font-bold text-right">
        AremxyPlug Secure
      </div>
    </motion.div>
  ))}
</div>

{/*  */}








 
     

        <div className="flex justify-center mt-14">
          <Link to="/pricing">
            <Bluebutton text="Explore Pricing" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default CardIssuing;
