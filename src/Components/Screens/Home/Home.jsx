import  { useState, useEffect } from "react";
import styles from "./Home.module.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import { AiFillMinusCircle } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import CookieBanner from "./Cookie/CookieBanner";
// import groupone from "./Images/groupone.svg?v=2";
import CrossBorder from "./Images/CrossBorder.svg";
import CurrencyConversion from "./Images/CurrencyConversion.svg";
import CurrencyConversion2 from "./Images/CurrencyConversion2.svg";
import MultiCurrency from "./Images/MultiCurrency.svg";
import BlockChain from "./Images/BlockChain.svg";
import VirtualSim from "./Images/VirtualSim.svg";
import API from "./Images/API.gif";
import CrossBorder2 from "./Images/CrossBorder.svg";
import MultiCurrency2 from "./Images/MultiCurrency2.svg";
import NewsLetter from "./Images/NewsLetter.svg";
import Successful from "./Images/Success.gif";
import FeedBack from "./Images/Feedback.svg";
import Quote1 from "./Images/Quote1.svg";
import { HashLink } from "react-router-hash-link";
import { RemoveLocalStorage } from "../../LocalStorage/LocalStorage";
import { motion } from "framer-motion";
import CustomerSupport from "./Images/CustomerSupport.svg";
import Security from "./Images/Security.svg";
import Sprint from "./Images/Sprint.svg";
import Affordable from "./Images/Afford.svg";
import Trust from "./Images/Trusted.svg";
import Reliable from "./Images/Reliable.svg";


// import HeroImage from "./Images/HeroImage.svg"
// import Hero from "./Images/desktop_phone.png"

const feedback = [
  <div className="h-[250px] w-[100%] md:h-[250px] md:w-[60%] md:mx-auto lg:h-[300px] lg:w-[50%]">
    <div className="h-[60%] bg-[#04177F] flex justify-center items-center">
      <div
        style={{ boxShadow: "0px 0px 5.187px 0px rgba(139, 67, 255, 0.50)" }}
        className="bg-[#EEEBEB] mt-[100px] h-[125px] rounded-[4px] w-[85%] flex flex-col justify-center items-center gap-[20px]"
      >
        <img src={FeedBack} alt="" className="w-[70px] h-[70px] mt-[-70px]" />
        <p className="px-[10px] flex items-start justify-start mx-auto">
          <img src={Quote1} alt="" className="w-[20px] h-[20px]" />
          <span className="text-[12px] px-[5px] text-center flex items-center mx-auto lg:text-[18px]">
            Lorem ipsum dolor sit amet consectetur. Laoreet cras turpis
            hendrerit a diam tristique scelerisque laoreet. Iaculis congue
            dignissim vitae ligula ultrice
          </span>
          <img
            src={Quote1}
            alt=""
            className="w-[20px] h-[20px] rotate-180 mt-[50px]"
          />
        </p>
      </div>
    </div>
    <div className="h-[40%] bg-[#EEEBEB] text-center pt-[50px]">
      <p className="text-[12px] font-semibold lg:text-[18px]">
        Savannah Nguyen
      </p>
      <p className="text-[12px] lg:text-[18px]">CEO SAM DATA SERVICES</p>
    </div>
  </div>,

  <div className="h-[250px] w-[100%] md:h-[250px] md:w-[60%] md:mx-auto lg:h-[300px] lg:w-[50%]">
    <div className="h-[60%] bg-[#04177F] flex justify-center items-center">
      <div
        style={{ boxShadow: "0px 0px 5.187px 0px rgba(139, 67, 255, 0.50)" }}
        className="bg-[#EEEBEB] mt-[100px] h-[125px] rounded-[4px] w-[85%] flex flex-col justify-center items-center gap-[20px]"
      >
        <img src={FeedBack} alt="" className="w-[70px] h-[70px] mt-[-70px]" />
        <p className="px-[10px] flex items-start justify-start mx-auto">
          <img src={Quote1} alt="" className="w-[20px] h-[20px]" />
          <span className="text-[12px] px-[5px] text-center flex items-center mx-auto lg:text-[18px]">
            Lorem ipsum dolor sit amet consectetur. Laoreet cras turpis
            hendrerit a diam tristique scelerisque laoreet. Iaculis congue
            dignissim vitae ligula ultrice
          </span>
          <img
            src={Quote1}
            alt=""
            className="w-[20px] h-[20px] rotate-180 mt-[50px]"
          />
        </p>
      </div>
    </div>
    <div className="h-[40%] bg-[#EEEBEB] text-center pt-[50px]">
      <p className="text-[12px] font-semibold lg:text-[18px]">
        Savannah Nguyen
      </p>
      <p className="text-[12px] lg:text-[18px]">CEO SAM DATA SERVICES</p>
    </div>
  </div>,

  <div className="h-[250px] w-[100%] md:h-[250px] md:w-[60%] md:mx-auto lg:h-[300px] lg:w-[50%]">
    <div className="h-[60%] bg-[#04177F] flex justify-center items-center">
      <div
        style={{ boxShadow: "0px 0px 5.187px 0px rgba(139, 67, 255, 0.50)" }}
        className="bg-[#EEEBEB] mt-[100px] h-[125px] rounded-[4px] w-[85%] flex flex-col justify-center items-center gap-[20px]"
      >
        <img src={FeedBack} alt="" className="w-[70px] h-[70px] mt-[-70px]" />
        <p className="px-[10px] flex items-start justify-start mx-auto">
          <img src={Quote1} alt="" className="w-[20px] h-[20px]" />
          <span className="text-[12px] px-[5px] text-center flex items-center mx-auto lg:text-[18px]">
            Lorem ipsum dolor sit amet consectetur. Laoreet cras turpis
            hendrerit a diam tristique scelerisque laoreet. Iaculis congue
            dignissim vitae ligula ultrice
          </span>
          <img
            src={Quote1}
            alt=""
            className="w-[20px] h-[20px] rotate-180 mt-[50px]"
          />
        </p>
      </div>
    </div>
    <div className="h-[40%] bg-[#EEEBEB] text-center pt-[50px]">
      <p className="text-[12px] font-semibold lg:text-[18px]">
        Savannah Nguyen
      </p>
      <p className="text-[12px] lg:text-[18px]">CEO SAM DATA SERVICES</p>
    </div>
  </div>,

  <div className="h-[250px] w-[100%] md:h-[250px] md:w-[60%] md:mx-auto lg:h-[300px] lg:w-[50%]">
    <div className="h-[60%] bg-[#04177F] flex justify-center items-center">
      <div
        style={{ boxShadow: "0px 0px 5.187px 0px rgba(139, 67, 255, 0.50)" }}
        className="bg-[#EEEBEB] mt-[100px] h-[125px] rounded-[4px] w-[85%] flex flex-col justify-center items-center gap-[20px]"
      >
        <img src={FeedBack} alt="" className="w-[70px] h-[70px] mt-[-70px]" />
        <p className="px-[10px] flex items-start justify-start mx-auto">
          <img src={Quote1} alt="" className="w-[20px] h-[20px]" />
          <span className="text-[12px] px-[5px] text-center flex items-center mx-auto lg:text-[18px]">
            Lorem ipsum dolor sit amet consectetur. Laoreet cras turpis
            hendrerit a diam tristique scelerisque laoreet. Iaculis congue
            dignissim vitae ligula ultrice
          </span>
          <img
            src={Quote1}
            alt=""
            className="w-[20px] h-[20px] rotate-180 mt-[50px]"
          />
        </p>
      </div>
    </div>
    <div className="h-[40%] bg-[#EEEBEB] text-center pt-[50px]">
      <p className="text-[12px] font-semibold lg:text-[18px]">
        Savannah Nguyen
      </p>
      <p className="text-[12px] lg:text-[18px]">CEO SAM DATA SERVICES</p>
    </div>
  </div>,

  <div className="h-[250px] w-[100%] md:h-[250px] md:w-[60%] md:mx-auto lg:h-[300px] lg:w-[50%]">
    <div className="h-[60%] bg-[#04177F] flex justify-center items-center">
      <div
        style={{ boxShadow: "0px 0px 5.187px 0px rgba(139, 67, 255, 0.50)" }}
        className="bg-[#EEEBEB] mt-[100px] h-[125px] rounded-[4px] w-[85%] flex flex-col justify-center items-center gap-[20px]"
      >
        <img src={FeedBack} alt="" className="w-[70px] h-[70px] mt-[-70px]" />
        <p className="px-[10px] flex items-start justify-start mx-auto">
          <img src={Quote1} alt="" className="w-[20px] h-[20px]" />
          <span className="text-[12px] px-[5px] text-center flex items-center mx-auto lg:text-[18px]">
            Lorem ipsum dolor sit amet consectetur. Laoreet cras turpis
            hendrerit a diam tristique scelerisque laoreet. Iaculis congue
            dignissim vitae ligula ultrice
          </span>
          <img
            src={Quote1}
            alt=""
            className="w-[20px] h-[20px] rotate-180 mt-[50px]"
          />
        </p>
      </div>
    </div>
    <div className="h-[40%] bg-[#EEEBEB] text-center pt-[50px]">
      <p className="text-[12px] font-semibold lg:text-[18px]">
        Savannah Nguyen
      </p>
      <p className="text-[12px] lg:text-[18px]">CEO SAM DATA SERVICES</p>
    </div>
  </div>,
];

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 4,
  },
};
const responsive2 = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1.5,
  },
};

export const Home = () => {
  const [firstDrop, setFirstDrop] = useState(false);
  const [secondDrop, setSecondDrop] = useState(false);
  const [thirdDrop, setThirdDrop] = useState(false);
  const [fourthDrop, setFourthDrop] = useState(false);
  const [fifthDrop, setFifthDrop] = useState(false);
  const [sixDrop, setSixDrop] = useState(false);
  const [seventhDrop, setSeventhDrop] = useState(false);
  const [eightDrop, setEightDrop] = useState(false);
  const [buttonText, setButtonText] = useState("More");
  const [buttonTextTwo, setButtonTextTwo] = useState("More");
  const [telecomIcon, setTelecomIcon] = useState(true);
  const [paymentIcon, setPaymentIcon] = useState(true);
  const [digitalIcon, setDigitalIcon] = useState(true);
  function handleClick() {
    setFirstDrop((prev) => !prev);
    setButtonText((prevText) => (prevText === "More" ? "Less" : "More"));
  }

  function handleClickTwo() {
    setSecondDrop((prev) => !prev);
    setButtonTextTwo((prevText) => (prevText === "More" ? "Less" : "More"));
  }

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const validateEmail = () => {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
      // Valid email format
      setIsSuccess(true);
      setError("");
      setEmail("");
    } else {
      setIsSuccess(false);
      setError("Invalid email");
    }
  };
const UserStatus = localStorage.getItem("cxccxfd");
useEffect(()=> {
  if(UserStatus){
  RemoveLocalStorage()
  }
})

//Animation For Why Choose Us
const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1, // Stagger effect
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};
const cookieState =  localStorage.getItem("cookieAccepted")

  return (
    <div className="flex flex-col gap-10">
      <div className="fixed top-[25.5%] left-0 right-0 z-50 md:top-[55%] 
      lg:top-[45%]">
       {(cookieState === undefined || !cookieState ) && (
       <CookieBanner />
       )}
      </div>
     
     <div className={`${styles.hero}  
     pt-[40%] pb-[20%] lg:pt-[25%] lg:pb-[10%] px-[5%] lg:px-[8%] md:pt-[10%] md:pb-[10%] `}>
      <div className=" w-full md:w-1/">
      <div className="text-left w-[100%] text-[#04177F] text-[20px] 
      font-extrabold md:text-[25px] 
      md:font-bold lg:text-[45px] lg:font-extrabold lg:leading-[px]">
            The One-Stop Shop for Individuals and Businesses for Telecom,
            Payments, and Digital Services.
          </div>
          <div className="text-left  font-medium text-base w-[100%] mt-[5%] lg:text-[18px] lg:leading-[30px] lg:w-[515px]">
            With AremxyPlug's robust APIs and software solutions intended to
            help you increase revenue, you can accept payments and transfer
            money internationally.
          </div>
          <div className="flex w-full md:flex-row flex-col md:gap-[6%] gap-[20px] mt-[5%]">
            <HashLink
              to="/signUp"
              className="bg-transparent border-2 border-[#04177F] text-[#04177F] md:p-[3%] py-[16px] 
              text-center rounded-lg w-full text-[16px] leading-[20px] font-bold lg:w-[25%] 
              lg:text-[20px] lg:py-[2%] "
            >
              Sign up
            </HashLink>

            <HashLink
              to="/Login"
              className="bg-[#04177F] text-[#ffffff] md:p-[3%] text-center py-[16px]
               rounded-lg w-full text-[16px] leading-[20px] font-medium
                lg:w-[25%] lg:text-[20px] lg:py-[2%] "
            >
              Sign in
            </HashLink>
          </div>
         
        </div>
          <img
          className="mx-auto mt-[12%] md:w-[40%]  md:h-[30%] 
           lg:w-[50%] lg:h-[40%] px-[20px] md:px-0 "
          src="./Images/desktop_phone.avif"
          alt="/"
        />
      </div>

      {/* WHY CHOOSE US */}
      {/* The Generated part */}
      <div 
       className="flex flex-col bg-[#04177F] h-auto  mt-[-40px]
       px-[5%] py-[20%] lg:py-[8%] md:py-[10%]  gap-[30px]  lg:px-[8%] overflow-hidden">
  {/* Header Section */}
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6 }}
  >
  
    <h1 className="mb-[5%] text-[30px] leading-[40px] font-bold text-center  text-white
    md:text-[26px] lg:text-[50px] lg:leading-[60px] tracking-tight">
      Why Choose Us?
    </h1>
    <p className="text-center font-medium mx-auto text-[14px] 
    leading-relaxed opacity-90 w-[95%]
     md:text-[12px] lg:text-[20px] lg:w-[70%] mb-10 text-white">
     The team at AremxyPlug is made up of a variety of individuals who
            share the traits of resilience and problem-solving abilities. As a
            result, we made the decision to pool our resources and develop a
            platform that offers services for your digital needs.
    </p>
  </motion.div>

  {/* Cards Grid */}
  <div className="flex flex-col gap-2 lg:gap-10 w-full">
    
    {/* Card 1: Reliable */}
  <div className={`flex md:flex-row flex-col w-full gap-4 md:h-[250px] h-auto`}>
    <motion.div
      custom={1}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={cardVariants}
      className="bg-white flex flex-col text-[#04177F] md:w-1/3 w-full p-6 justify-center h-full rounded-[20px] 
   shadow-lg hover:shadow-2xl transition-shadow duration-300 md:gap-4 gap-3">
     <div className="flex gap-2 w-full h-auto items-center justify-left">
      <img src={Reliable} alt="" />
      <h2 className="text-[20px] leading-[30px]
       font-extrabold  lg:text-[24px]">
        Reliable
      </h2>
      </div>
      <p className="text-[14px] font-bold text-black leading-[20px] 
      md:text-[11px] lg:text-[16px] opacity-80">
          We use technology to provide business solutions that open up new
              possibilities, and enhance company's productivity.
      </p>
    </motion.div>

    {/* Card 2: Trusted */}
   <motion.div
      custom={2}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={cardVariants}
      className="bg-white flex flex-col text-[#04177F] md:w-1/3 w-full p-6 justify-center h-full rounded-[20px] 
   shadow-lg hover:shadow-2xl transition-shadow duration-300 md:gap-4 gap-3"
    >
       <div className="flex gap-2 w-full h-auto items-center justify-left">
      <img src={Trust} alt="" />
      <h2 className="text-[20px] leading-[30px]
       font-extrabold  lg:text-[24px]">
        Trusted
      </h2>
      </div>
      <p className="text-[14px] font-bold text-black leading-[20px] 
      md:text-[11px] lg:text-[16px] opacity-80">
       We built reputation as a trusted service provider to deliver
              high-quality services with honesty, integrity, and transparency.
      </p>
    </motion.div>

    {/* Card 3: Affordable */}
    <motion.div
      custom={3}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={cardVariants}
    className="bg-white flex flex-col text-[#04177F] md:w-1/3 w-full p-6  justify-center h-full rounded-[20px] 
   shadow-lg hover:shadow-2xl transition-shadow duration-300 md:gap-4 gap-3"
    >
         <div className="flex gap-2 w-full h-auto items-center justify-start">
      <img src={Affordable} alt="" />
      <h2 className="text-[20px]  leading-[30px]
       font-extrabold  lg:text-[24px]">
        Affordable
      </h2>
      </div>
      <p className="text-[14px] font-bold text-black leading-[20px] 
      md:text-[11px] lg:text-[16px] opacity-80">
        We offer competitive and affordable pricing to ensure that our
              services are accessible to everyone.
      </p>
      
    </motion.div>
    </div>

    {/* Desktop/Tablet Only Grid Items (Hidden on Mobile unless firstDrop is true) */}
    <div className="hidden md:flex w-full gap-4 h-[250px]">
    <motion.div
      custom={4}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={cardVariants}
     className="hidden bg-white md:flex flex-col text-[#04177F] md:w-1/3 w-full p-6 justify-center h-full rounded-[20px] 
    shadow-lg md:gap-4"
    >
         <div className="flex gap-2 w-full h-auto items-center justify-left">
      <img src={Sprint} alt="" />
      <h2 className="text-[20px] leading-[30px]
       font-extrabold  lg:text-[24px] ">
        Swift 24/7 Delivery
      </h2>
      </div>
      <p className="text-[14px] font-bold text-black leading-[20px] 
      md:text-[11px] lg:text-[16px] opacity-80">
        We offer swift 24/7 delivery to ensure that your needs are met
        promptly and efficiently.
      </p>
    </motion.div>
     <motion.div
      custom={5}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={cardVariants}
     className="hidden bg-white md:flex flex-col text-[#04177F] 
     md:w-1/3 w-full p-6 justify-center h-full rounded-[20px] 
    shadow-lg md:gap-4"
    >
         <div className="flex gap-2 w-full h-auto items-center justify-left">
      <img src={Security} alt="" />
      <h2 className="text-[20px] leading-[30px]
       font-extrabold lg:text-[24px]">
        Secure and Automated
      </h2>
      </div>
      <p className="text-[14px] font-bold text-black leading-[20px] 
      md:text-[11px] lg:text-[16px] opacity-80">
        We use the latest security protocols and technologies to protect
        your data and sensitive information.
      </p>
    </motion.div>
      <motion.div
      custom={6}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={cardVariants}
     className="hidden bg-white md:flex flex-col text-[#04177F] md:w-1/3 
     w-full p-6 justify-center h-full rounded-[20px] 
    shadow-lg md:gap-4"
    >
         <div className="flex gap-2 w-full h-auto items-center justify-left">
      <img src={CustomerSupport} alt="" />
      <h2 className="text-[20px] leading-[30px]
       font-extrabold  lg:text-[24px]">
        Customer Support
      </h2>
      </div>
      <p className="text-[14px] font-bold text-black leading-[20px] 
      md:text-[11px] lg:text-[16px] opacity-80">
        We value your feedback and strive to provide exceptional customer
        support whenever you need assistance.
      </p>
    </motion.div>
  </div>
  </div>


  {/* Mobile Dropdown Content - Wrapped in Cards */}
  {firstDrop && (
    <div className="flex flex-col gap-4 h-auto md:hidden">
   <motion.div
      custom={4}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={cardVariants}
     className="bg-white flex flex-col text-[#04177F]  w-full p-6 justify-center rounded-[20px] 
    shadow-xl transform transition-all duration-500 hover:scale-105 delay-100 gap-3"
    >
         <div className="flex gap-2 w-full h-auto items-center justify-left">
      <img src={Sprint} alt="" />
        <h2 className="text-[20px] leading-[30px]
       font-extrabold">
        Swift 24/7 Delivery</h2>
        </div>
        <p className="text-[14px] font-bold text-black leading-[20px] 
     opacity-80">
         We offer swift 24/7 delivery to ensure that your needs are met
              promptly and efficiently.
           </p>
      </motion.div>
       <motion.div
      custom={5}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={cardVariants}
     className="bg-white flex flex-col text-[#04177F] w-full p-6 justify-center rounded-[20px] 
    shadow-xl transform transition-all duration-500 hover:scale-105 delay-100 gap-3"
    >
         <div className="flex gap-2 w-full items-center h-auto justify-left">
      <img src={Security} alt="" />
        <h2 className="text-[20px] leading-[30px]
       font-extrabold lg:text-[24px]">
          Secure and Automated
          </h2>
          </div>
        <p className="text-[14px] font-bold text-black leading-[20px] 
       opacity-80">
         We use the latest security protocols and technologies to protect
              your data and information.
          </p>
      </motion.div>
        <motion.div
      custom={4}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={cardVariants}
     className="bg-white flex flex-col text-[#04177F]  w-full p-6 justify-center rounded-[20px] 
    shadow-xl transform transition-all duration-500 hover:scale-105 delay-100 gap-3"
    >
         <div className="flex gap-2 w-full items-center h-auto justify-left">
      <img src={CustomerSupport} alt="" />
        <h2 className="text-[20px] leading-[30px]
       font-extrabold  lg:text-[24px]">
          Customer Support
          </h2>
          </div>
        <p className="text-[14px] font-bold text-black leading-[20px] 
      md:text-[11px] lg:text-[16px] opacity-80">
          We value your feedback and strive to provide exceptional customer
              support when you need help.
</p>
      </motion.div>
    </div>
  )}

  {/* Toggle Button */}
  <div
    className="md:hidden flex justify-center items-center font-bold text-[#04177F] bg-[#ffffff]
     w-[40%] mx-auto rounded-full py-3 shadow-lg active:scale-95 transition-transform"
    onClick={handleClick}
  >
    <div className="text-[14px]">{buttonText}</div>
    <div className="text-[24px]">
      {!firstDrop ? <RiArrowDropDownLine /> : <RiArrowDropUpLine />}
    </div>
  </div>
</div>




      {/* The main Code  */}
      {/* <div className="flex flex-col bg-[#04177F] text-[#ffffff] px-[5%] py-[15%] gap-[30px]
       md:py-[8%] lg:py-[8%] lg:px-[8%]">
        <div>
          <p className="mb-[5%] text-[20px] font-semibold text-center md:text-[26px] lg:text-[35px]">
            Why Choose Us?
          </p>
          <div className="text-justify md:text-center text-[12px] w-[95%] md:text-[10.33px] lg:text-[18px]">
            The team at AremxyPlug is made up of a variety of individuals who
            share the traits of resilience and problem-solving abilities. As a
            result, we made the decision to pool our resources and develop a
            platform that offers services for your digital needs.
          </div>
        </div>
        <div className="md:grid md:grid-cols-3 md:my-[3%] md:gap-y-[25%] lg:gap-x-[10%]">
          <div className="mb-[20px]">
            <p className="text-[20px] font-semibold text-center md:text-left md:text-[14px] mb-[5%] lg:text-[24px]">
              Reliable
            </p>
            <div className="text-[12px] text-center w-[95%] md:w-[200px] md:text-[10px] md:text-justify lg:text-[16px] lg:w-[100%]">
              We use technology to provide business solutions that open up new
              possibilities, and enhance company's productivity.
            </div>
          </div>
          <div className="mb-[20px]">
            <p className="text-[20px] font-semibold text-center md:text-left md:text-[14px] mb-[5%] lg:text-[24px]">
              Trusted
            </p>
            <div className="text-[12px] text-center w-[95%] md:text-justify md:w-[200px] md:text-[10px] lg:text-[16px] lg:w-[100%]">
              We built reputation as a trusted service provider to deliver
              high-quality services with honesty, integrity, and transparency.
            </div>
          </div>
          <div>
            <p className="text-[20px] font-semibold text-center md:text-left md:text-[14px] mb-[5%] lg:text-[24px]">
              Affordable
            </p>
            <div className="text-[12px] text-center w-[95%] md:text-justify md:w-[200px] md:text-[10px] lg:text-[16px] lg:w-[100%]">
              We offer competitive and affordable pricing to ensure that our
              services are accessible to everyone.
            </div>
          </div>
          <div>
            <p className="hidden md:block lg:block text-[20px] font-semibold text-center md:text-left md:text-[14px] mb-[5%] lg:text-[24px]">
              Swift 24/7 Delivery
            </p>
            <div className="hidden md:block lg:block text-[12px] text-center w-[95%] md:text-justify md:w-[200px] md:text-[10px] lg:text-[16px] lg:w-[100%] ">
              We offer swift 24/7 delivery to ensure that your needs are met
              promptly and efficiently.
            </div>
          </div>
          <div>
            <p className="hidden md:block lg:block text-[20px] font-semibold text-center md:text-left md:text-[14px] mb-[5%] lg:text-[24px]">
              Secure and Automated
            </p>
            <div className="hidden md:block lg:block text-[12px] text-center w-[95%] md:text-justify md:w-[200px] md:text-[10px] lg:text-[16px] lg:w-[100%]">
              We use the latest security protocols and technologies to protect
              your data and information.
            </div>
          </div>
          <div>
            <p className="hidden md:block lg:block text-[20px] font-semibold text-center md:text-left md:text-[14px] mb-[5%] lg:text-[24px]">
              Customer Support
            </p>
            <div className="hidden md:block lg:block text-[12px] text-center w-[95%] md:text-justify md:w-[200px] md:text-[10px] lg:text-[16px] lg:w-[100%]">
              We value your feedback and strive to provide exceptional customer
              support when you need help.
            </div>
          </div>
        </div>
        {firstDrop && (
          <>
            <div>
              <p className="mb-[5%] text-[20px] font-semibold text-center">
                Swift 24/7 Delivery
              </p>
              <div className="text-[12px] text-center w-[95%]">
                We offer swift 24/7 delivery to ensure that your needs are met
                promptly and efficiently.
              </div>
            </div>
            <div>
              <p className="mb-[5%] text-[20px] font-semibold text-center">
                Secure and Automated
              </p>
              <div className="text-[12px] text-center w-[95%]">
                We use the latest security protocols and technologies to protect
                your data and information.
              </div>
            </div>
            <div>
              <p className="mb-[5%] text-[20px] font-semibold text-center">
                Customer Support
              </p>
              <div className="text-[12px] text-center w-[95%]">
                We value your feedback and strive to provide exceptional
                customer support when you need help.
              </div>
            </div>
          </>
        )}
        <div
          className="md:hidden flex justify-center items-center font-semibold text-[#04177F] bg-[#ffffff] w-[25%] mx-auto rounded-md p-[2%]"
          onClick={handleClick}
        >
          <div className="text-[12px]">{buttonText}</div>
          <div className="w-[11px] text-[20px]  ">
            {!firstDrop ? <RiArrowDropDownLine /> : <RiArrowDropUpLine />}
          </div>
        </div>
      </div> */}

      {/* ABOUT US */}

<section id="About" className="flex flex-col overflow-x-hidden
 gap-6 md:gap-10 md:py-[10%] lg:py-[5%] px-[5%] lg:px-[8%] py-[20%]">
    <h1 className="text-[30px] leading-[40px]   font-bold text-center  
    md:text-[26px] lg:text-[50px] lg:leading-[60px] tracking-tight
           text-[#04177F]">
            About Us
          </h1>
      <div className="flex flex-col gap-[20px] md:items-center  md:flex-row md:justify-between   ">

        <motion.div
    initial={{ x: -100, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="flex flex-col md:items-start gap-7 md:gap-10 w-full md:w-1/2 bg-[#E2F3FF] px-4 py-6 rounded-l-lg">
       
      <p className="text-center md:text-left  font-medium text-[16px] leading-[25px]
          md:text-[10px] lg:text-[18px] lg:leading-[24px] lg:w-[80%]">
            AremxyPlug is a business enterprise and telecommunication service
            provider that offers individuals and businesses full access to
            quick, secure, and dependable solutions for their digital and
            telecommunication service needs.
            <br />
            <br />
            At AremxyPlug, we provide seamless and limitless digital living
            needs to our users. Our objectives are to operate transparent and
            secure transactions, provide quick and dependable services, and to
            ensure that our services take our customers to the pinnacle of their
            aspirations in order to be the best service provider.
          </p>
          <Link to="/About-us" className="flex text-[14px] font-bold bg-[#04177F] text-[#ffffff]
             md:w-[30%] w-full md:py-4 py-4 justify-center items-center lg:w-[20%] lg:h-[45px] rounded-md">
            <p className="flex text-[14px] font-bold text-[#ffffff]
           rounded-md md:mx-[0px] md:text-[14px]">
              Learn more
            </p>
          </Link>
        </motion.div>
       
 <motion.div
    initial={{ x: 100, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="w-full md:w-1/2 flex justify-center "
  >
        
           <img
          className="w-full lg:w-full h-full"
          src="./Images/illustration.avif"
          alt="/"
        />
        </motion.div>
       </div>
       </section>
      

      {/* OUR SERVICE */}
      <div className="bg-[#04177f] flex flex-col gap-[15px] py-[20%] lg:py-[8%] h-auto lg:px-[8%]">
        <h1 className="mb-[5%] text-[20px] text-[#ffffff] 
        font-bold text-center md:text-[25px] lg:text-[50px]">
          Our Services
        </h1>
        <div className="md:grid md:grid-cols-2 flex flex-col px-[5%] md:gap-[30px] gap-10 md:gap-y-[35px]">
          <div className="flex flex-col w-full gap-5  bg-[#E2F3FF]
           p-[5%]  rounded-md">
          <div className="flex items-center w-full gap-[9%]">
            <img
              className="w-[28%] h-[80px] lg:w-[40%] lg:h-[120px]"
              src="/Images/telecom.avif"
              alt="/"
            />
            <div className="flex flex-col gap-[10px]">
              <h2 className="text-[20px]  leading-[30px]
       font-extrabold  lg:text-[24px]">
                Telecom
              </h2>
              <p className="text-[14px] font-bold text-black leading-[20px] 
      md:text-[11px] lg:text-[16px] opacity-80">
                We offer secure VTU development, affordable airtime, and data
                purchase.
              </p>
              
            </div>
            </div>
            <div className="flex justify-center md:w-full w-full">
                <Link className="bg-[#04177f] text-[14px] md:p-[3%]
                 font-bold py-[16px] md:w-[35%] w-full rounded-md
             text-[#ffffff] text-center lg:text-[14px] lg:leading-[20px]"
              to="/telecoms">Learn More</Link>
              </div>
              </div>

          {/* Payment */}
          <div  className="flex flex-col w-full gap-5  bg-[#E2F3FF]
           p-[5%]  rounded-md">
          <div className="flex items-center w-full gap-[9%]">
            <img
              className="w-[34%] h-[75px] lg:w-[30%] lg:h-[90px]"
              src="/Images/payment.avif"
              alt="/"
            />
            <div className="flex flex-col gap-[10px]">
              <h2 className="text-[20px] leading-[30px]
       font-extrabold  lg:text-[24px]">
                Payment
              </h2>
              <p className="text-[14px] font-bold text-black leading-[20px] 
      md:text-[11px] lg:text-[16px] opacity-80">
                Our payment solutions ensure our clients have the utmost control
                of their finances.
              </p>
              </div>
              </div>
              <div className="flex justify-center md:w-full w-full">
                <Link className="bg-[#04177f] text-[14px] md:p-[3%]
                 font-bold py-[16px] md:w-[35%] w-full rounded-md
             text-[#ffffff] text-center lg:text-[14px] lg:leading-[20px]"
              to="/payment">Learn More</Link>
              
            </div>
          </div>


          
          
           {/* Card issuing */}
           <div className="flex flex-col w-full gap-5  bg-[#E2F3FF]
           p-[5%]  rounded-md">
          <div  className="flex items-center w-full gap-[9%]">
            <img
              className="w-[30%] h-[55px] lg:w-[30%] lg:h-[90px]"
              src="/Images/cardissuing.avif"
              alt="/"
            />
            <div>
            <h2 className="text-[20px]  leading-[30px]
       font-extrabold  lg:text-[24px]">
                Card Issuing
              </h2>
              <p className="text-[14px] font-bold text-black leading-[20px] 
      md:text-[11px] lg:text-[16px] opacity-80">
                We issue 3D secured virtual and physical debit USD and NGN cards
                to both individuals and businesses.
              </p>
              </div>
              </div>
              <div className="flex justify-center md:w-full w-full">
                <Link className="bg-[#04177f] text-[14px] md:p-[3%]
                 font-bold py-[16px] md:w-[35%] w-full rounded-md
             text-[#ffffff] text-center lg:text-[14px] lg:leading-[20px]"
              to="CardIssuing">Learn More</Link>
              
            </div>
         </div>

{/* Digital Services */}
<div className="hidden sm:flex flex-col w-full gap-5  bg-[#E2F3FF]
           p-[5%]  rounded-md">
          <div className="flex items-center w-full gap-[9%]">
            <img
              className="w-[28%] h-[80px] lg:w-[40%] lg:h-[120px]"
              src="/Images/digital.avif"
              alt="/"
            />
            <div className="flex flex-col gap-[10px]">
              <h2 className="text-[20px]  leading-[30px]
       font-extrabold  lg:text-[24px]">
                Digital Services
              </h2>
              <p className="text-[14px] font-bold text-black leading-[20px] 
      md:text-[11px] lg:text-[16px] opacity-80">
                We offer a variety of digital services that can be customized to
                fit your company's needs.
              </p>
              </div>
              </div>
              <div className="flex justify-center md:w-full w-full">
                <Link className="bg-[#04177f] text-[14px] md:p-[3%]
                 font-bold py-[16px] md:w-[35%] w-full rounded-md
             text-[#ffffff] text-center lg:text-[14px] lg:leading-[20px]"
              to="DigitalServices">Learn More</Link>
              </div>
           
          
          </div>
          {/* VTU Development */}
          <div className="hidden sm:flex flex-col w-full gap-5  bg-[#E2F3FF]
           p-[5%]  rounded-md">
            <div className="flex items-center w-full gap-[9%]">
            <img
              className="w-[28%] h-[80px] md:h-[60px] lg:w-[30%] lg:h-[90px]"
              src="/Images/VTU.avif"
              alt="/"
            />
            <div className="flex flex-col gap-[10px]">
              <h2 className="text-[20px]  leading-[30px]
       font-extrabold  lg:text-[24px]">
                VTU Development
              </h2>
              <p className="text-[14px] font-bold text-black leading-[20px] 
      md:text-[11px] lg:text-[16px] opacity-80">
                We develop a VTU website with services like airtime top-up, data
                bundles, and bills payment platform.
              </p>
              </div>
              </div>
              <div className="flex justify-center md:w-full w-full">
                <Link className="bg-[#04177f] text-[14px] md:p-[3%]
                 font-bold py-[16px] md:w-[35%] w-full rounded-md
             text-[#ffffff] text-center lg:text-[14px] lg:leading-[20px]" to="/VTU_DEV">Learn More</Link>
              </div>
            
          </div>

          {/* Business Development */}
          <div className="hidden sm:flex flex-col w-full gap-5  bg-[#E2F3FF]
           p-[5%]  rounded-md">
          <div className="flex items-center w-full gap-[9%]">
            <img
              className="w-[28%] h-[80px] lg:w-[30%] lg:h-[90px]"
              src="/Images/Business.avif"
              alt="/"
            />
            <div className="flex flex-col gap-[10px]">
              <h2 className="text-[20px]  leading-[30px]
       font-extrabold  lg:text-[24px]">
                Business Development
              </h2>
              <p className="text-[14px] font-bold text-black leading-[20px] 
      md:text-[11px] lg:text-[16px] opacity-80">
                When it comes to business development, trust us to save you time
                and stress.
              </p>
              </div>
              </div>
              <div className="flex justify-center md:w-full w-full">
                <Link className="bg-[#04177f] text-[14px] md:p-[3%]
                 font-bold py-[16px] md:w-[35%] w-full rounded-md
             text-[#ffffff] text-center lg:text-[14px] lg:leading-[20px]" to="/businessDev">Learn More</Link>
              </div>
          
          </div>
        </div>

        {secondDrop && (
          <div className="flex flex-col gap-10 px-[5%]   md:gap-[35px]">
          <div className="flex md:hidden flex-col w-full gap-5  bg-[#E2F3FF]
           p-[5%]  rounded-md">
            <div className="flex items-center w-full gap-[9%]">
           
              <img
                className="w-[30%] h-[80px]"
                src="./Images/digital.avif"
                alt="/"
              />
              <div className="flex flex-col gap-[10px]">
                <h2 className="text-[20px]  leading-[30px]
       font-extrabold  lg:text-[24px]">
                  Digital Services
                </h2>
                <p className="text-[14px] font-bold text-black leading-[20px] 
      md:text-[11px] lg:text-[16px] opacity-80">
                  We offer a variety of digital services that can be customized
                  to fit your company's needs.
                </p>
                </div>
                </div>
                <div className="flex justify-center md:w-full w-full">
                <Link className="bg-[#04177f] text-[14px] md:p-[3%]
                 font-bold py-[16px] md:w-[35%] w-full rounded-md
             text-[#ffffff] text-center lg:text-[14px] lg:leading-[20px]" to="/DigitalServices">Learn More</Link>
                </div>
            </div> 

            {/* VTU Development */}
            <div  className="md:hidden flex flex-col w-full gap-5  bg-[#E2F3FF]
           p-[5%]  rounded-md">
            <div className="flex items-center w-full gap-[9%]">
              <img
                className="w-[28%] h-[60px]"
                src="./Images/vtu.avif"
                alt="/"
              />
              <div className="flex flex-col gap-[10px]">
                <h2 className="text-[20px]  leading-[30px]
       font-extrabold  lg:text-[24px]">VTU Development</h2>
                <p className="text-[14px] font-bold text-black leading-[20px] 
      md:text-[11px] lg:text-[16px] opacity-80">
                  We develop a VTU website with services like airtime top-up,
                  data bundles, and bills payment platform.
                </p>
                </div>
                </div>
                <div className="flex justify-center md:w-full w-full">
                <Link className="bg-[#04177f] text-[14px] md:p-[3%]
                 font-bold py-[16px] md:w-[35%] w-full rounded-md
             text-[#ffffff] text-center lg:text-[14px] lg:leading-[20px]"to="/VTU_DEV">Learn More</Link>
                </div>
              </div>
            

            {/* Business Development */}
            <div  className="md:hidden flex flex-col w-full gap-5  bg-[#E2F3FF]
           p-[5%]  rounded-md">
            <div className="flex items-center w-full gap-[9%]">
              <img
                className="w-[28%] h-[80px]"
                src="./Images/Business.avif"
                alt="/"
              />
              <div>
                <h2 className="text-[20px]  leading-[30px]
       font-extrabold  lg:text-[24px]">
                  Business Development
                </h2>
                <p className="text-[14px] font-bold text-black leading-[20px] 
      md:text-[11px] lg:text-[16px] opacity-80">
                  When it comes to business development, trust us to save you
                  time and stress.
                </p>
                </div>
                </div>
                <div className="flex justify-center md:w-full w-full">
                <Link className="bg-[#04177f] text-[14px] md:p-[3%]
                 font-bold py-[16px] md:w-[35%] w-full rounded-md
             text-[#ffffff] text-center lg:text-[14px] lg:leading-[20px]"
              to="/businessDev">Learn More</Link>
              
            </div>{" "}
          </div>
          </div>
        )}
        <div
          className="md:hidden lg:hidden flex justify-center items-center font-semibold text-[#04177F] bg-[#ffffff] w-[25%] mx-auto rounded-md p-[2%]"
          onClick={handleClickTwo}
        >
          <div className="text-[12px]">{buttonTextTwo}</div>
          <div className="w-[11px] text-[20px]  ">
            {!secondDrop ? <RiArrowDropDownLine /> : <RiArrowDropUpLine />}
          </div>
        </div>
      </div>

      {/* SERVICES CONTINUED */}
      <div className="px-[5%] pt-[10%] lg:px-[8%] lg:pt-[5%] ">
        <div className="">
          <div className="flex justify-between md:justify-start items-center md:space-x-5 lg:space-x-[44px] text-[#04177f]">
            <h1  className="text-[20px] text-[#04177F]
        font-bold text-center md:text-[25px] lg:text-[50px]">
              Telecom Services
            </h1>
            <div
              className="lg:text-2xl"
              onClick={() => setTelecomIcon((prev) => !prev)}
            >
              {!telecomIcon ? <AiFillPlusCircle /> : <AiFillMinusCircle />}
            </div>
          </div>
          <p className="text-left text-[14px] leading-[18px] font-medium
           mt-[5%] md:w-[60%] lg:text-[18px] lg:leading-[26px]">
            We are the telecom company you can trust, with affordable prices and
            excellent customer support. Sign up today and start enjoying
            seamless Telecom service!
          </p>
        </div>
        {/* <br /> */}
        <br />

        {telecomIcon && (
          <Carousel
            swipeable={true}
            draggable={true}
            responsive={responsive2}
            autoPlay={true}
            infinite={true}
            keyBoardControl={true}
            removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
            transitionDuration={1000}
            showDots={true}
            customTransition="transform 1800ms ease-in-out"
          >
            <div
              className="flex flex-col justify-between h-[190px] m-[2%] w-[209px] p-[5%] rounded-md bg-[#F2FAFF] md:w-[206px] md:p-[3%] lg:w-[359px] lg:h-[276px]"
              style={{ boxShadow: "0px 0px 11.676px rgba(28, 12, 249, 0.5)" }}
            >
              <div className="font-medium lg:text-[24px]">Airtime Top Up</div>
              <div className="text-justify text-[12px] lg:text-[16px]">
                With just a few clicks. Never run out of airtime. Simply top up
                your phone online from the comfort of your home.
              </div>
              <Link to="/telecoms">
                <div className="bg-[#04177f] w-[30%] text-[9px] mt-[10%] text-[#ffffff] p-[3%] text-center rounded-md lg:text-[14px] lg:font-bold lg:w-[50%] lg:p-[4%] lg:rounded-lg">
                  Buy Now
                </div>
              </Link>
            </div>

            <div
              className="flex flex-col justify-between gap-[10px] h-[190px] w-[209px] m-[2%] p-[5%] rounded-md bg-[#F2FAFF]  md:w-[206px] md:p-[3%] lg:w-[359px] lg:h-[276px]"
              style={{ boxShadow: "0px 0px 11.676px rgba(28, 12, 249, 0.5)" }}
            >
              <div className="font-medium lg:text-[24px]">Data Bundles</div>
              <div className="text-justify text-[12px] lg:text-[16px]">
                Our Data Bundles service has got you covered with flexible plans
                to suit your needs and stream like never before!
              </div>
              <Link to="/telecoms">
                <div className="bg-[#04177f] w-[30%] text-[9px] mt-[10%] text-[#ffffff] p-[3%] text-center rounded-md lg:text-[14px] lg:font-bold lg:w-[50%] lg:p-[4%] lg:rounded-lg">
                  Buy Now
                </div>
              </Link>
            </div>

            <div
              className="flex flex-col justify-between gap-[10px] h-[190px] w-[209px] m-[2%] p-[5%] rounded-md bg-[#F2FAFF]  md:w-[206px] md:p-[3%] lg:h-[276px] lg:w-[359px]"
              style={{ boxShadow: "0px 0px 11.676px rgba(28, 12, 249, 0.5)" }}
            >
              <div className="font-medium lg:text-[24px] lg:mb-[-5%]">
                Education Pins
              </div>
              <div className="mt-[-7%] md:mt-0 text-justify text-[12px] lg:text-[16px]">
                With our Education Pins service, you can access your exam
                results in just a few clicks.
              </div>
              <Link to="/telecoms">
                <div className="bg-[#04177f] w-[30%] text-[9px] mt-[10%] text-[#ffffff] p-[3%] text-center rounded-md lg:text-[14px] lg:font-bold lg:w-[50%] lg:p-[4%] lg:rounded-lg">
                  Buy Now
                </div>
              </Link>
            </div>

            <div
              className="flex flex-col justify-between gap-[10px] h-[190px] w-[209px] m-[2%] p-[5%] rounded-md bg-[#F2FAFF]  
              md:w-[206px] md:p-[3%] lg:w-[359px] lg:h-[276px] lg:gap-[18px]"
              style={{ boxShadow: "0px 0px 11.676px rgba(28, 12, 249, 0.5)" }}
            >
              <div className="font-medium lg:text-[24px] lg:mb-[-5%]">
                TV Subscription
              </div>
              <div className="text-justify text-[12px] lg:text-[16px]">
                Enjoy unlimited streaming on multiple channels. Sign up now and
                never miss your favorite show again!
              </div>
              <Link to="/telecoms">
                <div className="bg-[#04177f] w-[30%] text-[9px] mt-[10%] text-[#ffffff] p-[3%] text-center rounded-md lg:text-[14px] lg:font-bold lg:w-[50%] lg:p-[4%] lg:rounded-lg">
                  Buy Now
                </div>
              </Link>
            </div>

            <div
              className="flex flex-col justify-between h-[190px] w-[209px] m-[2%] p-[5%] rounded-md bg-[#F2FAFF] md:w-[206px] md:p-[3%] lg:w-[359px] lg:h-[276px] "
              style={{ boxShadow: "0px 0px 11.676px rgba(28, 12, 249, 0.5)" }}
            >
              <div className="font-medium lg:text-[24px]">
                Electricity Bills
              </div>
              <div className="mt-[7%] md:mt-0 text-justify text-[12px] lg:text-[16px]">
                Keep track of your bills and make sure you never miss a payment.
                Try our bills payment service right away to make life easier.
              </div>
              <Link to="/telecoms">
                <div className="bg-[#04177f] w-[30%] text-[9px] mt-[10%] text-[#ffffff] p-[3%] text-center rounded-md lg:text-[14px] lg:font-bold lg:w-[50%] lg:p-[4%] lg:rounded-lg">
                  Buy Now
                </div>
              </Link>
            </div>

            <div
              className="flex flex-col justify-between gap-[10px] h-[190px] w-[209px] m-[2%] p-[5%] rounded-md bg-[#F2FAFF]  md:w-[206px] md:p-[3%] lg:w-[359px] lg:h-[276px]"
              style={{ boxShadow: "0px 0px 11.676px rgba(28, 12, 249, 0.5)" }}
            >
              <div className="font-medium lg:text-[24px] lg:mb-[-5%]">
                Airtime Conversion
              </div>
              <div className="text-justify text-[12px] lg:text-[16px]">
                You can quickly convert your bulk airtime to get cash to your
                wallet or bank account in just few minutes.
              </div>
              <Link to="/telecoms">
                <div className="bg-[#04177f] w-[30%] text-[9px] mt-[10%] text-[#ffffff] p-[3%] text-center rounded-md lg:text-[14px] lg:font-bold lg:w-[50%] lg:p-[4%] lg:rounded-lg">
                  Buy Now
                </div>
              </Link>
            </div>

            <div
              className="flex flex-col justify-between gap-[10px] h-[190px] w-[209px] m-[2%] p-[5%] rounded-md bg-[#F2FAFF]  md:w-[206px] md:p-[3%] lg:w-[359px] lg:h-[276px] "
              style={{ boxShadow: "0px 0px 11.676px rgba(28, 12, 249, 0.5)" }}
            >
              <div className="font-medium lg:text-[24px] lg:mb-[-5%]">
                Bulk SMS
              </div>
              <div className="mt-[-7%] md:mt-0 text-justify text-[12px] lg:text-[16px]">
                Try our bulk SMS service now and take your communication to the
                next level.
              </div>
              <Link to="/telecoms">
                <div className="bg-[#04177f] w-[30%] text-[9px] mt-[10%] text-[#ffffff] p-[3%] text-center rounded-md lg:text-[14px] lg:font-bold lg:w-[50%] lg:p-[4%] lg:rounded-lg">
                  Buy Now
                </div>
              </Link>
            </div>

            <div
              className="flex flex-col justify-between gap-[10px] h-[190px] w-[209px] m-[2%] p-[5%] rounded-md bg-[#F2FAFF]  md:w-[206px] md:p-[3%] lg:w-[359px] lg:h-[276px] "
              style={{ boxShadow: "0px 0px 11.676px rgba(28, 12, 249, 0.5)" }}
            >
              <div className="font-medium lg:text-[24px]">
                Recharge Card Printing
              </div>
              <div className="text-justify text-[12px] lg:text-[16px]">
                Try our RCP service today, print recharge cards with your
                business name and make a resell without any hassle.
              </div>
              <Link to="/telecoms">
                <div className="bg-[#04177f] w-[30%] text-[9px] mt-[10%] text-[#ffffff] p-[3%] text-center rounded-md lg:text-[14px] lg:font-bold lg:w-[50%] lg:p-[4%] lg:rounded-lg">
                  Buy Now
                </div>
              </Link>
            </div>
          </Carousel>
        )}
      </div>

      <div className="px-[5%] pt-[20%] lg:px-[8%] lg:pt-[5%]">
        <div className="">
          <div className="flex justify-between md:justify-start items-center md:space-x-5 lg:space-x-10 text-[#04177f]">
            <h1  className="text-[20px] text-[#04177F]
        font-bold text-center md:text-[25px] lg:text-[50px]">
              Payment Services
            </h1>
            <div
              className="lg:text-2xl"
              onClick={() => setPaymentIcon((prev) => !prev)}
            >
              {!paymentIcon ? <AiFillPlusCircle /> : <AiFillMinusCircle />}
            </div>
          </div>
          <p className="text-left text-[14px] leading-[18px] font-medium
           mt-[5%] md:w-[60%] lg:text-[18px] lg:leading-[26px]">
            We offer quick and secure payment processing to make sure your
            transactions go off without a hitch, using our user-friendly
            interface to receive money both locally and internationally.
          </p>
        </div>
        <br />
        {/* <br /> */}
        {paymentIcon && (
          <Carousel
            swipeable={true}
            draggable={true}
            responsive={responsive2}
            autoPlay={true}
            infinite={true}
            keyBoardControl={true}
            removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
            transitionDuration={1000}
            showDots={true}
            customTransition="transform 1800ms ease-in-out"
          >
            <div
              className="flex flex-col justify-between h-[190px] m-[2%] w-[209px] p-[5%] rounded-md bg-[#F2FAFF] md:p-[3%] md:w-[206px] lg:w-[359px] lg:h-[276px]"
              style={{ boxShadow: "0px 0px 11.676px rgba(28, 12, 249, 0.5)" }}
            >
              <div className="font-medium lg:text-[24px]">Wallet System</div>
              <div className="text-justify text-[12px] lg:text-[16px]">
                You can conveniently store, send, and receive money without any
                hassle by using our user-friendly wallet system.
              </div>
              <Link to="/payment">
                <div className="bg-[#04177f] w-[30%] text-[9px] mt-[10%] text-[#ffffff] p-[3%] text-center rounded-md lg:text-[14px] lg:font-bold lg:w-[50%] lg:p-[4%] lg:rounded-lg">
                  Explore
                </div>
              </Link>
            </div>
            <div
              className="flex flex-col justify-between h-[190px] m-[2%] w-[209px] p-[5%] rounded-md bg-[#F2FAFF] md:p-[3%] md:w-[206px] lg:w-[359px] lg:h-[276px] "
              style={{ boxShadow: "0px 0px 11.676px rgba(28, 12, 249, 0.5)" }}
            >
              <div className="font-medium lg:text-[24px]">
                Global Virtual Accounts
              </div>
              <div className="text-justify text-[12px] lg:text-[16px]">
                Try our global virtual accounts services today and experience
                hassle-free banking at your fingertips.
              </div>
              <Link to="/payment">
                <div className="bg-[#04177f] w-[30%] text-[9px] mt-[10%] text-[#ffffff] p-[3%] text-center rounded-md lg:text-[14px] lg:font-bold lg:w-[50%] lg:p-[4%] lg:rounded-lg">
                  Explore
                </div>
              </Link>
            </div>
            <div
              className="flex flex-col justify-between h-[190px] m-[2%] w-[209px] p-[5%] rounded-md bg-[#F2FAFF]  md:p-[3%] md:w-[206px] lg:w-[359px] lg:h-[276px]"
              style={{ boxShadow: "0px 0px 11.676px rgba(28, 12, 249, 0.5)" }}
            >
              <div className="font-medium lg:text-[24px]">Card Payment</div>
              <div className="text-justify text-[12px] lg:text-[16px]">
                Whether you're shopping online or in-store, our card payment
                solutions offer fast and hassle-free transactions.
              </div>
              <Link to="/payment">
                <div className="bg-[#04177f] w-[30%] text-[9px] mt-[10%] text-[#ffffff] p-[3%] text-center rounded-md lg:text-[14px] lg:font-bold lg:w-[50%] lg:p-[4%] lg:rounded-lg">
                  Explore
                </div>
              </Link>
            </div>
            <div
              className="flex flex-col justify-between h-[190px] m-[2%] w-[209px] p-[5%] rounded-md bg-[#F2FAFF] md:p-[3%] md:w-[206px] lg:w-[359px] lg:h-[276px]"
              style={{ boxShadow: "0px 0px 11.676px rgba(28, 12, 249, 0.5)" }}
            >
              <div className="font-medium lg:text-[24px] lg:mb-[-5%]">
                Money Transfer
              </div>
              <div className="text-justify text-[12px] lg:text-[16px]">
                With our dependable money transfer services, you can send and
                receive money without any hassle.
              </div>
              <Link to="/payment">
                <div className="bg-[#04177f] w-[30%] text-[9px] mt-[10%] text-[#ffffff] p-[3%] text-center rounded-md lg:text-[14px] lg:font-bold lg:w-[50%] lg:p-[4%] lg:rounded-lg">
                  Explore
                </div>
              </Link>
            </div>
            <div
              className="flex flex-col justify-between h-[190px] m-[2%] w-[209px] p-[5%] rounded-md bg-[#F2FAFF] md:p-[3%] md:w-[206px] lg:w-[359px] lg:h-[276px]"
              style={{ boxShadow: "0px 0px 11.676px rgba(28, 12, 249, 0.5)" }}
            >
              <div className="font-medium lg:text-[24px] lg:mb-[-5%]">
                International Payment
              </div>
              <div className="text-justify text-[12px] lg:text-[16px]">
                With our international payment structure, you can send and
                receive money from anywhere in the world.
              </div>
              <Link to="/payment">
                <div className="bg-[#04177f] w-[30%] text-[9px] mt-[10%] text-[#ffffff] p-[3%] text-center rounded-md lg:text-[14px] lg:font-bold lg:w-[50%] lg:p-[4%] lg:rounded-lg">
                  Explore
                </div>
              </Link>
            </div>
          </Carousel>
        )}
      </div>

      <div className="px-[5%] pt-[20%] pb-[25%] lg:pb-[5%] md:pb-[20%]  lg:px-[8%] lg:pt-[5%]">
        <div className="">
          <div className="flex justify-between md:justify-start items-center md:space-x-5 lg:space-x-[75px] text-[#04177f]">
            <h1  className=" text-[20px] text-[#04177F]
        font-bold text-center md:text-[25px] lg:text-[50px]">
              Digital Services
            </h1>
            <div
              className="lg:text-2xl"
              onClick={() => setDigitalIcon((prev) => !prev)}
            >
              {digitalIcon ? <AiFillMinusCircle /> : <AiFillPlusCircle />}
            </div>
          </div>
          <p className="text-left text-[14px] leading-[18px] font-medium
           mt-[5%] md:w-[60%] lg:text-[18px] lg:leading-[26px]">
            We offer a variety of digital services that can be customized to fit
            your company's needs. Our services are affordable and designed to
            deliver outstanding results for your company.
          </p>
        </div>
        <br />
        {/* <br /> */}
        {digitalIcon && (
          <Carousel
            swipeable={true}
            draggable={true}
            responsive={responsive2}
            autoPlay={true}
            infinite={true}
            keyBoardControl={true}
            removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
            transitionDuration={1000}
            showDots={true}
            customTransition="transform 1800ms ease-in-out"
          >
            <div
              className="flex flex-col justify-between h-[190px] m-[2%] w-[209px] p-[5%] rounded-md bg-[#F2FAFF] md:w-[206px] lg:w-[359px] md:p-[3%] lg:h-[276px]  "
              style={{ boxShadow: "0px 0px 11.676px rgba(28, 12, 249, 0.5)" }}
            >
              <div className="font-medium lg:text-[24px]">
                Content Marketing
              </div>
              <div className="text-justify text-[12px] lg:text-[16px]">
                Content marketing is a powerful tool for businesses looking to
                connect with their audience and drive engagement.
              </div>
              <div className="bg-[#04177f] w-[40%] text-[9px] mt-[10%] text-[#ffffff] p-[3%] text-center rounded-md lg:text-[14px] lg:font-bold lg:w-[50%] lg:p-[4%] lg:rounded-lg">
                <Link to="/content-marketing">Learn More...</Link>
              </div>
            </div>
            <div
              className="flex flex-col justify-between  h-[190px] m-[2%] w-[209px] p-[5%] rounded-md bg-[#F2FAFF] md:p-[3%] md:w-[206px] lg:w-[359px] lg:h-[276px] "
              style={{ boxShadow: "0px 0px 11.676px rgba(28, 12, 249, 0.5)" }}
            >
              <div className="font-medium lg:text-[24px]">
                Social Media Marketing
              </div>
              <div className="text-justify text-[12px] lg:text-[16px]">
                Social media marketing can be an effective way to reach a wide
                audience and build brand awareness.
              </div>
              <div className="bg-[#04177f] w-[40%] text-[9px] mt-[10%] text-[#ffffff] p-[3%] text-center rounded-md lg:text-[14px] lg:font-bold lg:w-[50%] lg:p-[4%] lg:rounded-lg">
                <Link to="/social-media-marketing">Learn More...</Link>
              </div>
            </div>
            <div
              className="flex flex-col justify-between  h-[190px] m-[2%] w-[209px] p-[5%] rounded-md bg-[#F2FAFF] md:p-[3%] md:w-[206px] lg:w-[359px] lg:h-[276px]"
              style={{ boxShadow: "0px 0px 11.676px rgba(28, 12, 249, 0.5)" }}
            >
              <div className="font-medium lg:text-[24px] lg:mb-[5%]">
                SEO Marketing
              </div>
              <div className="text-justify text-[12px] lg:text-[16px]">
                SEO is the practice of optimizing your website and its content
                to improve its visibility and ranking on search engine results
                pages.
              </div>
              <div className="bg-[#04177f] w-[40%] text-[9px] mt-[10%] text-[#ffffff] p-[3%] text-center rounded-md lg:text-[14px] lg:font-bold lg:w-[50%] lg:p-[4%] lg:rounded-lg">
                <Link to="/seo-marketing">Learn More...</Link>
              </div>
            </div>
            <div
              className="flex flex-col justify-between h-[190px] m-[2%] w-[209px] p-[5%] rounded-md bg-[#F2FAFF] md:p-[3%] md:w-[206px] lg:w-[359px] lg:h-[276px] "
              style={{ boxShadow: "0px 0px 11.676px rgba(28, 12, 249, 0.5)" }}
            >
              <div className="font-medium lg:text-[24px]">Email Marketing</div>
              <div className="text-justify text-[12px] lg:text-[16px]">
                Your business needs an email marketing strategy that boost sales
                and create a bond with your customers.
              </div>
              <div className="bg-[#04177f] w-[40%] text-[9px] mt-[10%] text-[#ffffff] p-[3%] text-center rounded-md lg:text-[14px] lg:font-bold lg:w-[50%] lg:p-[4%] lg:rounded-lg">
                <Link to="/EmailMarketing">Learn More...</Link>
              </div>
            </div>
            <div
              className="flex flex-col justify-between h-[190px] m-[2%] w-[209px] p-[5%] rounded-md bg-[#F2FAFF] md:p-[3%] md:w-[206px] lg:w-[359px] lg:h-[276px]"
              style={{ boxShadow: "0px 0px 11.676px rgba(28, 12, 249, 0.5)" }}
            >
              <div className="font-medium lg:text-[24px]">Product Design</div>
              <div className="mt-[7%] md:mt-0 text-justify text-[12px] lg:text-[16px] lg:mb-[-5%]">
                Product design is the process of identifying a market
                opportunity, clearly defining the problem, and validating the
                solution with real user interfaces.
              </div>
              <div className="bg-[#04177f] w-[40%] text-[9px] mt-[10%] text-[#ffffff] p-[3%] text-center rounded-md lg:text-[14px] lg:font-bold lg:w-[50%] lg:p-[4%] lg:rounded-lg">
                <Link to="/ProductDesign">Learn More...</Link>
              </div>
            </div>
            <div
              className="flex flex-col justify-between h-[190px] m-[2%] w-[209px] p-[5%] rounded-md bg-[#F2FAFF]  md:p-[3%] md:w-[206px] lg:w-[359px] lg:h-[276px]"
              style={{ boxShadow: "0px 0px 11.676px rgba(28, 12, 249, 0.5)" }}
            >
              <div className="font-medium lg:text-[24px] lg:mb-[5%]">
                Graphic Design
              </div>
              <div className="mt-[7%] md:mt-0 tracking- text-justify text-[12px] lg:text-[16px]">
                Graphic design is the creation of visual compositions to solve
                problems and communicate ideas through typography, imagery,
                color, and form.
              </div>
              <div className="bg-[#04177f] w-[40%] text-[9px] mt-[10%] text-[#ffffff] p-[3%] text-center rounded-md lg:text-[14px] lg:font-bold lg:w-[50%] lg:p-[4%] lg:rounded-lg">
                <Link to="/GraphicDesign">Learn More...</Link>
              </div>
            </div>
          </Carousel>
        )}
      </div>

      {/* CARD ISSUING */}
      <div className="mb-[5%] flex flex-col gap-[50px] bg-[#04177f] px-[5%]
       text-[#ffffff] py-[15%] md:py-[5%] md:flex-row md:px-[8%] md:gap-[10px] lg:gap-[30px]">
        <div className="flex flex-col gap-10">
          <h1 className="text-[20px] text-white
        font-bold md:text-left  text-center md:text-[25px] lg:text-[50px]">
            Card Issuing
          </h1>
          <p className="md:text-left text-center text-[14px] leading-[20px] font-medium
           md:text-[10px] md:leading-2 md:tracking-widest lg:text-[18px] lg:leading-[26px]">
            Our card issuing service can be tailored to your specific needs as
            an Individual or business. we issue 3D secured virtual and physical
            debit USD and NGN cards to spend anywhere Verve, Visa, and
            Mastercard are accepted, both in-store and online, anytime,
            anywhere.
          </p>
        </div>
        <img
          className="md:w-[40%] h-[] lg:w-[50%]"
          src="./Images/cards.avif"
          alt="/"
        />
      </div>

      {/* CROSS-BORDER PAYMENT */}

      <div
        id="crossborder"
        className="mt-[20%] md:mt-[5%] mb-[20%]
         md:mb-0 mx-[5%] lg:mx-[8%] flex flex-col gap-[20px]
          md:flex-row md:justify-between lg:mb-[5%]"
      >
        <img
          className="lg:w-[600px] lg:h-[500px] hidden md:block"
          src={CrossBorder2}
          alt="/"
        />
        <div className="md:flex md:flex-col md:justify-center">
          <h1 className="text-[20px]
        font-bold md:text-left  text-center md:text-[25px] lg:text-[50px]
          text-[#04177f] ">
            Cross-border Payment
          </h1>
          <br></br>
          <p className="md:text-left text-center text-[14px] leading-[20px]
           font-medium md:text-[10px] md:leading-2  lg:text-[18px] lg:leading-[26px]">
            Our cross-border payment services make it simple and practical to
            send money to family and friends, receive money both locally and
            internationally.
          </p>
        </div>

        <img
          className="w-full h-full mt-[10%] md:hidden"
          src={CrossBorder}
          alt="/"
        />
      </div>

      {/* CURRENCY CONVERSION */}

      <div
        id="currencyconvert"
        className="mb-[20%] md:mb-[3%] md:mt-[5%] mx-[5%] lg:mx-[8%] flex flex-col gap-[20px] md:flex-row md:justify-between lg:mb-[10%]"
      >
        <div className="md:flex md:flex-col md:justify-center">
          <h1 className="text-[20px]
        font-bold md:text-left  text-center md:text-[25px] lg:text-[50px]
          text-[#04177f] ">
            Currency Conversion
         </h1>
          <br></br>
          <p className="md:text-left text-center text-[14px] leading-[20px]
           font-medium md:text-[10px] md:leading-2  lg:text-[18px] lg:leading-[26px]">
            With our currency conversion service, You can get the most
            convenient exchange rates and convert any currency in a matter of
            seconds with no hidden fees.
          </p>
        </div>
        <img
          className="w-full h-full mt-[10%] mx-auto md:hidden"
          src={CurrencyConversion}
          alt="/"
        />

        <img
          className="lg:w-[600px] lg:h-[500px] hidden md:block"
          src={CurrencyConversion2}
          alt="/"
        />
      </div>

      {/* MULTI-CURRENCY WALLETS */}

      <div
        id="multicurrency"
        className="mb-[20%] md:mb-[7%] mx-[5%]
         lg:mx-[8%] flex flex-col gap-[20px] md:flex-row md:justify-between"
      >
        <div className="hidden md:block md:w-1/2 w-full ">
          <img
            className="md:w-[250px] lg:w-[600px] lg:h-[350px] hidden md:block"
            src={MultiCurrency2}
            alt="/"
          />
        </div>
        <div className="md:flex md:flex-col md:justify-center md:w-1/2 w-full">
          <h1  className="text-[20px]
        font-bold md:text-left  text-center md:text-[25px] lg:text-[50px]
          text-[#04177f]">
            Multi-Currency Wallets
          </h1>
          <br></br>
          <p className="md:text-left text-center text-[14px] leading-[20px]
           font-medium md:text-[10px] md:leading-2  lg:text-[18px] lg:leading-[26px]">
            Our Multi-Currency Wallets services are the best way to manage all
            your currencies, keep a track and conveniently store, send, and
            receive digital assets in one location.
          </p>
        </div>
        <div className="md:hidden">
          <img
            className="w-full h-full mt-[10%] mx-auto"
            src={MultiCurrency}
            alt="/"
          />
        </div>
      </div>

      {/* BLOCKCHAIN SIM CARD */}

      <div
        id="multicurrency"
        className="mb-[20%] md:mb-[7%]  mx-[5%] lg:mx-[8%] flex flex-col gap-[20px] md:flex-row md:justify-between"
      >
        <div className="md:flex md:flex-col md:w-1/2 w-full
         md:justify-center">
          <h1  className="text-[20px]
        font-bold md:text-left  text-center md:text-[25px] lg:text-[50px]
          text-[#04177f] ">
            Blockchain Sim Card
          </h1>
          <br></br>
          <p className="md:text-left text-center text-[14px] leading-[20px]
           font-medium md:text-[10px] md:leading-2  lg:text-[18px] lg:leading-[26px]">
            The new type of SIM card that uses blockchain technology to provide
            several benefits over traditional SIM cards, including improved
            security, privacy, and fraud prevention.
          </p>
        </div>
        <div className="px-[20%] md:hidden">
          <img
            className="w-full h-full  mx-auto"
            src={BlockChain}
            alt="/"
          />
        </div>
        <div className="px-[10%] md:px-0 hidden md:block md:w-1/2 w-full ">
          <img
            className="w-[248px] h-[162px] md:w-[200%] md:h-[200px] mx-auto md:mx-0 lg:w-[100%] lg:h-[300px] xl:h-[400px]"
            src={BlockChain}
            alt="/"
          />
        </div>
      </div>

      {/* VIRTUAL E-SIM */}

      <div
        id="multicurrency"
        className="mb-[20%] md:mb-[7%] mx-[5%] lg:mx-[8%] flex flex-col gap-[20px] md:flex-row md:justify-between"
      >
        <div className="px-[10%] md:px-0 hidden md:block md:w-1/2 w-full">
          <img
            className="w-[248px] h-[162px] md:w-[200%] md:h-[200px] mx-auto md:mx-0 lg:w-[100%] lg:h-[300px] xl:h-[400px]"
            src={VirtualSim}
            alt="/"
          />
        </div>
        <div className="md:flex md:flex-col md:justify-center md:w-1/2 w-full">
          <h1  className="text-[20px]
        font-bold md:text-left  text-center md:text-[25px] lg:text-[50px]
          text-[#04177f] ">
            Virtual E-Sim
          </h1>
          <br></br>
          <p className="md:text-left text-center text-[14px] leading-[20px]
           font-medium md:text-[10px] md:leading-2  lg:text-[18px] lg:leading-[26px]">
            An eSIM is an industry-standard digital SIM that allows you to
            activate a cellular plan from your carrier without having to use a
            physical SIM.
          </p>
        </div>
        <div className="px-[20%] md:hidden w-full">
          <img
            className="w-full h-full mt-[10%] mx-auto"
            src={VirtualSim}
            alt="/"
          />
        </div>
      </div>

      {/* BECOME AN AGENT */}
      <div className="flex flex-col gap-10 lg:gap-15 px-[5%] 
      lg:px-[8%] py-[5%] "
        id="becomeAgent">

      <div className=" md:flex md:flex-row h-full
      md:justify-center md:items-center md:gap-[15%]  lg:gap-[10%]">
        <div className="flex flex-col gap-[30px] md:gap-[15px] lg:gap-[40px] ">
          <h1  className="text-[20px]
        font-bold md:text-left  text-center md:text-[25px] lg:text-[50px]
          text-[#04177f] ">
            Become an Agent
          </h1>
          <p className="md:text-left text-center text-[14px] leading-[20px]
           font-medium md:text-[10px] md:leading-2  lg:text-[18px] lg:leading-[26px]">
            Becoming AremxyPlug agent will be a lucrative and rewarding
            opportunity. You will have the opportunity to make money while
            giving your clients beneficial services.
            <br />
            <br />
            Depending on your needs and goal, you can decide whether to work
            full- or part-time. You will assist clients in managing their
            accounts, making payments using digital tools that can simplify
            their lives and work at your own schedule. 
          </p>
        
        </div>
        <img
          className=" w-[50%] mx-auto mt-[10%] md:w-[142.6px] md:h-[180.15px] md:mt-[0px] lg:mt-[0%] lg:w-[45%] lg:h-[280px]"
          src="./Images/agent.png"
          alt="/"
        />
      </div>
        <div className="text-[14px] bg-[#04177f] w-full py-[16px]
           text-center text-[#ffffff] p-[2%] rounded-md mx-auto md:mx-0
            lg:text-[15px] font-bold lg:w-[247px]">
            Join Our Agent Program
          </div>
      </div>

      <div className="bg-[#04177f] text-[#ffffff] py-[15%] px-[5%] flex flex-col gap-[50px] md:py-[10%] md:flex-row md:justify-center md:items-center">
        <img
          className="w-[80%] mx-auto md:w-[40%] md:h-[40%] lg:w-[30%]"
          src="./Images/chart.png"
          alt="/"
        />
        <div className="flex flex-col gap-[30px] lg:w-[50%]">
          <h1  className="text-[20px]
        font-bold md:text-left  text-center md:text-[25px] lg:text-[50px]
          text-white ">
            Earn on Our Platform
          </h1>
          <p className="md:text-left text-center text-[14px] leading-[20px]
           font-medium md:text-[10px] md:leading-2  lg:text-[18px] lg:leading-[26px]">
            You have the opportunity to earn with AremxyPlug, The Nigeria's
            fastest-growing payment company to distribute in-demand services
            throughout your network and beyond.
            <br />
            <br />
            With services like airtime top-up, data bundles, education pins,
            among others, you can generate revenue using our API and Earn a 50%
            bonus on all of our services when you refer a friend.
          </p>
          <div className="mx-auto bg-[#ffffff] text-[#04177f] p-[3%] text-[10px] font-bold w-[35%] text-center rounded-md md:mx-[0px] lg:text-[14px] lg:w-[30%] lg:font-extrabold">
            Learn More
          </div>
        </div>
      </div>

      {/* OUR PARTNERS */}
      <div
        id="partners"
        className="flex flex-col gap-[20px] px-[5%] py-[20%] md:py-[5%]
      "
      >
        <h1  className="text-[20px]
        font-bold md:text-left  text-center md:text-[25px] lg:text-[50px]
          text-[#04177f] ">
          Partners & Businesses
        </h1>

        <Carousel
          swipeable={true}
          draggable={true}
          responsive={responsive}
          autoPlay
          infinite={true}
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          transitionDuration={1000}
        >
          <img
            className="w-[40.11px] h-[41.83px] md:w-[70px] md:h-[70px] lg:w-[100px] lg:h-[100px] mx-auto "
            src="./Images/mtn.png"
            alt="/"
          />
          <img
            className="w-[40.11px] h-[41.83px] md:w-[70px] md:h-[70px] lg:w-[100px] lg:h-[100px] mx-auto "
            src="./Images/airtel.png"
            alt="/"
          />
          <img
            className="w-[40.11px] h-[41.83px] md:w-[70px] md:h-[70px] lg:w-[100px] lg:h-[100px] mx-auto "
            src="./Images/glo.png"
            alt="/"
          />
          <img
            className="w-[38px] h-[41px] md:w-[70px] md:h-[70px] lg:w-[100px] lg:h-[100px] mx-auto"
            src="./Images/9mobile.png"
            alt="/"
          />
        </Carousel>
      </div>

      <div className="px-[5%] py-[20%] flex flex-col gap-[20px] bg-[#04177f] text-[#ffffff] md:py-[10%] md:flex-row md:gap-[70px] md:jsutfiy-center md:items-center lg:gap-[90px] lg:tracking-widest ">
        <div className="flex flex-col gap-[25px]">
          <h1  className="text-[20px]
        font-bold md:text-left  text-center md:text-[25px] lg:text-[50px]
          text-white ">
            Are you a Developer?
          </h1>
          <p className="md:text-left text-center text-[14px] leading-[20px]
           font-medium md:text-[10px] md:leading-2  lg:text-[18px] lg:leading-[26px]">
            AremxyPlug API offers robust and comprehensive functionality that
            developers can use to build high-quality applications with several
            features, such as data access, integration with third-party
            services, and custom workflows. Our API is well-documented and it
            provides clear instructions for integration and usage, with
            easy-to-use integration with your existing workflows.
          </p>
          <div className="text-[20px] mx-auto w-[60%] my-[10%] md:mx-0 lg:text-[30px] lg:font-bold lg:w-[40%]">
            A Well Documented Easy-to-use API
          </div>
        </div>
        <img
          className="md:w-[40%] md:h-[40%] lg:w-[30%] lg:h-[30%]"
          src={API}
          alt="/"
        />
      </div>

      {/* FEEDBACK */}
      <div className="py-[20%] mx-[5%] md:py-[10%]">
        <h1  className="text-[20px]
        font-bold   text-center md:text-[25px] lg:text-[50px]
          text-[#04177f]">
          Feedbacks
        </h1>
        <AliceCarousel
          mouseTracking
          disableButtonsControls
          items={feedback}
          autoPlay
          autoPlayInterval={1900}
          infinite
          // swipeExtraPadding
          // touchTracking
        />
      </div>

      {/* Subscribe to our Newsletter */}
      <div className="bg-[#04177f] text-[#ffffff] py-[15%] px-[5%] flex flex-col gap-[50px] 
      md:py-[10%] md:flex-col md:justify-center md:items-center mb-[20%] lg:mb-[5%] w-full">
        <div className="flex flex-col w-full gap-5 items-center">
          <h1 className="text-[20px]
        font-bold   text-center md:text-[25px] lg:text-[50px]
          text-white">
            Subscribe to our Newsletter
          </h1 >
          <p className="text-center text-[14px] leading-[20px]
           font-medium md:text-[10px] md:leading-2  lg:text-[18px] lg:leading-[26px]">
            Get the latest updates, exclusive offers, and expert insights
            delivered right to your inbox. Subscribe to our newsletter today and
            never miss out on what's happening in the tech industry!
          </p>
        </div>

        <div className="w-full md:w-[60%] lg:w-[40%]">
          <div className="flex gap-[10px]">
            <div className="relative w-4/5">
              <input
                type="text"
                placeholder="Enter your email..."
                value={isSuccess ? "  " : email}
                onChange={(e) => setEmail(e.target.value)}
                className={`${
                  error ? "bg-[#F9BBBB]" : "bg-[#D6DCFF]"
                } h-[45px] w-full pl-[10px] outline-none text-black`}
              />
              {isSuccess && (
                <div className="absolute inset-y-0 left-0 pl-2 flex items-center justify-between w-full">
                  <p className="text-sm text-[#696969]">Successful</p>
                  <img
                    src={Successful}
                    alt="Success"
                    className="ml-1 h-[40px] w-[40px]"
                  />
                </div>
              )}
            </div>
            <img
              src={NewsLetter}
              alt=""
              className="h-[55px] w-1/5 mt-[-5px] cursor-pointer"
              onClick={validateEmail}
            />
          </div>
          {error && (
            <div className="text-[9px] pl-[20px]" style={{ color: "#F93232" }}>
              {error}
            </div>
          )}
        </div>
      </div>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <div className="mx-[5%] mb-[25%] md:mb-[15%] lg:mb-[5%] lg:mx-[8%] ">
        <div className="text-[#04177f] text-[20px] font-bold text-center md:text-[20px] lg:text-[30px]">
          Frequently Asked Questions
        </div>
        <br />
        <div className="flex flex-col gap-[10px] md:gap-[20px]">
          <div
            className="flex flex-col p-1 rounded-md md:p-4 "
            style={{ boxShadow: "0px 0px 11.14427px rgba(28, 12, 249, 0.5)" }}
          >
            <div
              className="flex "
              onClick={() => setThirdDrop((prev) => !prev)}
            >
              <div className="text-[#04177f] text-2xl md:text-4xl">
                {!thirdDrop ? <RiArrowDropDownLine /> : <RiArrowDropUpLine />}
              </div>

              <div className="flex font-semibold text-[12px] md:text-[18px] ">
                What are Global Virtual Accounts?
              </div>
            </div>
            {thirdDrop && (
              <div className="text-[10px] mt-[5%] mb-[5%] text-justify mx-[5%] md:text-[14px] lg:text-[16px]">
                Global Virtual Accounts are virtual bank accounts that allow
                users to send, receive, and store money securely, without having
                to open a physical bank account. They are designed to simplify
                cross-border payments and reduce transaction costs for
                businesses and individuals.
              </div>
            )}
          </div>
          <div
            className="flex flex-col p-1 rounded-md md:p-4 "
            style={{ boxShadow: "0px 0px 11.14427px rgba(28, 12, 249, 0.5)" }}
          >
            <div
              className="flex "
              onClick={() => setFourthDrop((prev) => !prev)}
            >
              <div className="text-[#04177f] text-2xl md:text-4xl">
                {!fourthDrop ? <RiArrowDropDownLine /> : <RiArrowDropUpLine />}
              </div>

              <div className="flex font-semibold text-[12px] md:text-[18px] ">
                Can I receive local and international bank transfers to my
                global virtual accounts?
              </div>
            </div>
            {fourthDrop && (
              <div className="text-[10px] mt-[5%] mb-[5%] text-justify mx-[5%] md:text-[14px] lg:text-[16px]">
                Yes, you can receive both local and international bank transfers
                to your global virtual account.
              </div>
            )}
          </div>
          <div
            className="flex flex-col p-1 rounded-md md:p-4 "
            style={{ boxShadow: "0px 0px 11.14427px rgba(28, 12, 249, 0.5)" }}
          >
            <div
              className="flex "
              onClick={() => setFifthDrop((prev) => !prev)}
            >
              <div className="text-[#04177f] text-2xl md:text-4xl">
                {!fifthDrop ? <RiArrowDropDownLine /> : <RiArrowDropUpLine />}
              </div>

              <div className="flex font-semibold text-[12px] md:text-[18px] ">
                How Automated is AremxyPlug's wallet to reflect payments
                instantly?
              </div>
            </div>
            {fifthDrop && (
              <div className="text-[12px] mt-[5%] mb-[5%] text-justify mx-[5%] md:text-[14px] lg:text-[16px]">
                AremxyPlug's wallet system is fully automated and designed to
                reflect payments instantly. Once a payment is made, it is
                immediately reflected in your wallet balance.
              </div>
            )}
          </div>
          <div
            className="flex flex-col p-1 rounded-md md:p-4 "
            style={{ boxShadow: "0px 0px 11.14427px rgba(28, 12, 249, 0.5)" }}
          >
            <div className="flex " onClick={() => setSixDrop((prev) => !prev)}>
              <div className="text-[#04177f] text-2xl md:text-4xl">
                {!sixDrop ? <RiArrowDropDownLine /> : <RiArrowDropUpLine />}
              </div>

              <div className="flex font-semibold text-[12px] md:text-[18px] ">
                How does the wallet system work?
              </div>
            </div>
            {sixDrop && (
              <div className="text-[10px] mt-[5%] mb-[5%] text-justify mx-[5%] md:text-[14px] lg:text-[16px]">
                The wallet system allows you to store funds securely and make
                payments for goods and services. You can fund your wallet using
                various payment methods, such as bank transfer, card payment, or
                cash deposit.
              </div>
            )}
          </div>
          <div
            className="flex flex-col p-1 rounded-md md:p-4 "
            style={{ boxShadow: "0px 0px 11.14427px rgba(28, 12, 249, 0.5)" }}
          >
            <div
              className="flex "
              onClick={() => setSeventhDrop((prev) => !prev)}
            >
              <div className="text-[#04177f] text-2xl md:text-4xl">
                {!seventhDrop ? <RiArrowDropDownLine /> : <RiArrowDropUpLine />}
              </div>

              <div className="flex font-semibold text-[12px] md:text-[18px]">
                Can I send money from my wallet to another AremxyPlug user's
                wallet?
              </div>
            </div>
            {seventhDrop && (
              <div className="text-[10px] mt-[5%] mb-[5%] text-justify mx-[5%] md:text-[14px] lg:text-[16px]">
                Yes, you can send money from your wallet to another AremxyPlug
                user's wallet instantly and free of charge.
              </div>
            )}
          </div>
          <div
            className="flex flex-col p-1 rounded-md md:p-4 "
            style={{ boxShadow: "0px 0px 11.14427px rgba(28, 12, 249, 0.5)" }}
          >
            <div
              className="flex "
              onClick={() => setEightDrop((prev) => !prev)}
            >
              <div className="text-[#04177f] text-2xl md:text-4xl ">
                {!eightDrop ? <RiArrowDropDownLine /> : <RiArrowDropUpLine />}
              </div>

              <div className="flex font-semibold text-[12px] md:text-[18px]">
                How can I fulfill airtime top-ups, data bundles, and bill
                payments after funding my wallet?
              </div>
            </div>
            {eightDrop && (
              <div className="text-[10px] mt-[5%] mb-[5%] text-justify mx-[5%] md:text-[14px] lg:text-[16px]">
                You can fulfill airtime top-ups, data bundles, and bill payments
                by selecting the appropriate service from the AremxyPlug app or
                website and entering the necessary information. The payment will
                be deducted from your wallet balance.
              </div>
            )}
          </div>
        </div>
        <Link to="/faq">
          <div className="bg-[#04177f] mt-[5%] w-[35%] text-[9px] text-[#ffffff] p-[3%] font-bold rounded-md md:text-[18px] md:p-[2%] lg:text-[16px] lg:w-[15%] lg:p-[1%]">
            <div className="flex justify-center items-center gap-[10px] ">
              More
              <AiOutlineArrowRight />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

// #04177F
// {

// }
