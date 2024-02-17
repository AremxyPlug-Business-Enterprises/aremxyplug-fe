import React, { useState } from "react";
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
import CrossBorder2 from "./Images/CrossBorder2.svg";
import MultiCurrency2 from "./Images/MultiCurrency2.svg";
import NewsLetter from "./Images/NewsLetter.svg";
import Successful from "./Images/Success.gif";
import FeedBack from "./Images/Feedback.svg";
import Quote1 from "./Images/Quote1.svg";
import { HashLink } from "react-router-hash-link";

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

  return (
    <>
      <div className="fixed top-[9.5%] left-0 right-0 z-50 md:top-[55%] lg:top-[45%]">
        <CookieBanner />
      </div>
      {/* <div className={styles.hero}>
        <div className=" w-[90%] pt-[40%] mx-auto md:pt-[10%] md:w-[] lg:pt-[25%]">
          <div className="text-justify tracking-widest w-[100%] text-[#04177F] text-[20px] font-extrabold md:text-[25px] md:font-bold lg:tracking-wide lg:text-[45px] lg:font-extrabold lg:leading-[px]">
            The One-Stop Shop for Individuals and Businesses for Telecom,
            Payments, and Digital Services.
          </div>
          <div className="text-justify text-[16px] w-[100%] mt-[5%] lg:text-[18px] lg:w-[515px]">
            With AremxyPlug's robust APIs and software solutions intended to
            help you increase revenue, you can accept payments and transfer
            money internationally.
          </div>
          <div className="flex gap-[6%] mt-[5%]">
            <button className="bg-[#04177F] text-[#ffffff] p-[3%] rounded-lg w-[108px] text-[10px] lg:w-[25%] lg:text-[20px] lg:p-[1%] lg:h-[45px]">
              <Link to="/signUp">Sign up</Link>
            </button>

            <button className="bg-[#04177F] text-[#ffffff] p-[3%] rounded-lg w-[108px] text-[10px] lg:w-[25%] lg:text-[20px] lg:p-[1%] lg:h-[45px]">
              <Link to="/Login"> Sign in </Link>
            </button>
          </div>
        </div>
        <img
          className="mx-auto mt-[12%] md:w-[40%] md:h-[30%] lg:w-[50%] lg:h-[40%] lg:mt-[20%]"
          src={Hero}
          alt="/"
        />
      </div> */}

      <div className={styles.hero}>
      <div className=" w-[90%] pt-[40%] mx-auto md:pt-[10%] md:w-[] lg:pt-[25%]">
      <div className="text-justify w-[100%] text-[#04177F] text-[20px] font-extrabold md:text-[25px] md:font-bold lg:text-[45px] lg:font-extrabold lg:leading-[px]">
            The One-Stop Shop for Individuals and Businesses for Telecom,
            Payments, and Digital Services.
          </div>
          <div className="text-justify text-[16px] w-[100%] mt-[5%] lg:text-[18px] lg:w-[515px]">
            With AremxyPlug's robust APIs and software solutions intended to
            help you increase revenue, you can accept payments and transfer
            money internationally.
          </div>
          <div className="flex gap-[6%] mt-[5%]">
            <HashLink
              to="/signUp"
              className="bg-[#04177F] text-[#ffffff] p-[3%] text-center rounded-lg w-[108px] text-[10px] lg:w-[25%] lg:text-[20px] lg:p-[1%] lg:h-[45px]"
            >
              Sign up
            </HashLink>

            <HashLink
              to="/Login"
              className="bg-[#04177F] text-[#ffffff] p-[3%] text-center rounded-lg w-[108px] text-[10px] lg:w-[25%] lg:text-[20px] lg:p-[1%] lg:h-[45px]"
            >
              Sign in
            </HashLink>
          </div>
        </div>
        <img
          className="mx-auto mt-[12%] md:w-[40%] md:h-[30%] lg:w-[50%] lg:h-[40%] px-[20px] md:px-0 "
          src="./Images/desktop_phone.png"
          alt="/"
        />
      </div>

      {/* WHY CHOOSE US */}
      <div className="flex flex-col bg-[#04177F] text-[#ffffff] px-[5%] py-[15%] gap-[30px] md:py-[8%] lg:py-[8%] lg:px-[8%]">
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
      </div>

      {/* ABOUT US */}
      <div className="px-[5%] flex flex-col gap-[20px] py-[20%] md:flex-row md:justify-center md:items-center md:py-[10%] lg:py-[5%] lg:gap-[10px] lg:px-[8%]">
        <div className="flex flex-col gap-[15px]">
          <div className="mb-[5%] text-[20px] font-semibold text-center text-[#04177F] md:text-left md:text-[26px] lg:text-[45px]">
            About Us
          </div>
          <p className="text-justify text-[14px] md:text-[10px] lg:text-[16px] lg:w-[80%]">
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
          <Link to="/About-us">
            <div className="mx-auto flex text-[12px] bg-[#04177F] text-[#ffffff] w-[28%] h-[35px] justify-center items-center rounded-md md:mx-[0px] md:text-[14px] lg:w-[20%] lg:h-[45px]">
              Learn more
            </div>
          </Link>
        </div>
        <img
          className="w-[65%] mx-auto py-[5%] md:w-[50%]"
          src="./Images/illustration.png"
          alt="/"
        />
      </div>

      {/* OUR SERVICE */}
      <div className="bg-[#04177f] flex flex-col gap-[15px] py-[7%] h-[] lg:px-[8%]">
        <div className="mb-[5%] text-[20px] text-[#ffffff] font-semibold text-center md:text-[25px] lg:text-[45px]">
          Our Services
        </div>
        <div className="md:grid md:grid-cols-2 flex flex-col gap-[15px] md:gap-y-[35px]">
          <div className="flex items-center gap-[9%] bg-[#E2F3FF] p-[5%] mx-[5%] rounded-md">
            <img
              className="w-[28%] h-[80px] lg:w-[40%] lg:h-[120px]"
              src="./Images/telecom.png"
              alt="/"
            />
            <div>
              <div className="text-[13px] font-semibold lg:text-[24px]">
                Telecom
              </div>
              <div className="text-justify text-[10px] w-[80%] lg:text-[16px]">
                We offer secure VTU development, affordable airtime, and data
                purchase.
              </div>
              <div className="bg-[#04177f] mt-[10%] w-[35%] text-[9px] text-[#ffffff] p-[3%] text-center rounded-md lg:text-[14px] lg:h-[45px]">
                <Link to="/our-services/telecoms">Learn More</Link>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-[5%] bg-[#E2F3FF] p-[5%] mx-[5%] rounded-md">
            <img
              className="w-[34%] h-[75px] lg:w-[30%] lg:h-[90px]"
              src="./Images/payment.png"
              alt="/"
            />
            <div>
              <div className="text-[13px] font-semibold lg:text-[24px]">
                Payment
              </div>
              <div className="text-justify text-[10px] w-[80%] lg:text-[16px]">
                Our payment solutions ensure our clients have the utmost control
                of their finances.
              </div>
              <div className="bg-[#04177f] mt-[10%] w-[35%] text-[9px] text-[#ffffff] p-[3%] text-center rounded-md lg:text-[14px] lg:h-[45px]">
                <Link to="/our-services/payment">Learn More</Link>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-[9%] bg-[#E2F3FF] p-[5%] mx-[5%] rounded-md">
            <img
              className="w-[30%] h-[55px] lg:w-[30%] lg:h-[90px]"
              src="./Images/cardissuing.png"
              alt="/"
            />
            <div>
              <div className="text-[13px] font-semibold lg:text-[24px]">
                Card Issuing
              </div>
              <div className="text-justify text-[9px] w-[80%] lg:text-[16px]">
                We issue 3D secured virtual and physical debit USD and NGN cards
                to both individuals and businesses.
              </div>
              <div className="bg-[#04177f] mt-[10%] w-[35%] text-[9px] text-[#ffffff] p-[3%] text-center rounded-md lg:text-[14px] lg:h-[45px]">
                <Link to="CardIssuing">Learn More</Link>
              </div>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-[9%] bg-[#E2F3FF] p-[5%] mx-[5%] rounded-md">
            <img
              className="w-[28%] h-[80px] lg:w-[40%] lg:h-[120px]"
              src="./Images/digital.png"
              alt="/"
            />
            <div>
              <div className="text-[13px] font-semibold lg:text-[24px]">
                Digital Services
              </div>
              <div className="text-justify text-[10px] w-[80%] lg:text-[16px]">
                We offer a variety of digital services that can be customized to
                fit your company's needs.
              </div>
              <div className="bg-[#04177f] mt-[10%] w-[35%] text-[9px] text-[#ffffff] p-[3%] text-center rounded-md lg:text-[14px] lg:h-[45px]">
                <Link to="DigitalServices">Learn More</Link>
              </div>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-[9%] bg-[#E2F3FF] p-[5%] mx-[5%] rounded-md">
            <img
              className="w-[28%] h-[80px] md:h-[60px] lg:w-[30%] lg:h-[90px]"
              src="./Images/VTU.png"
              alt="/"
            />
            <div>
              <div className="text-[13px] font-semibold lg:text-[24px]">
                VTU Development
              </div>
              <div className="text-[9px] tracking-wide w-[100%] lg:text-[16px]">
                We develop a VTU website with services like airtime top-up, data
                bundles, and bills payment platform.
              </div>
              <div className="bg-[#04177f] mt-[10%] w-[35%] text-[9px] text-[#ffffff] p-[3%] text-center rounded-md lg:text-[14px] lg:h-[45px]">
                <Link to="VTU_DEV">Learn More</Link>
              </div>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-[9%] bg-[#E2F3FF] p-[5%] mx-[5%] rounded-md">
            <img
              className="w-[28%] h-[80px] lg:w-[30%] lg:h-[90px]"
              src="./Images/Business.png"
              alt="/"
            />
            <div>
              <div className="text-[13px] font-semibold lg:text-[24px]">
                Business Development
              </div>
              <div className="text-[9px] tracking-wide w-[100%] lg:text-[16px]">
                When it comes to business development, trust us to save you time
                and stress.
              </div>
              <div className="bg-[#04177f] mt-[10%] w-[35%] text-[9px] text-[#ffffff] p-[3%] text-center rounded-md lg:text-[14px] lg:h-[45px]">
                <Link to="/businessDev">Learn More</Link>
              </div>
            </div>
          </div>
        </div>

        {secondDrop && (
          <>
            <div className="flex items-center gap-[10%] bg-[#E2F3FF] p-[5%] mx-[5%] rounded-md">
              <img
                className="w-[30%] h-[80px]"
                src="./Images/digital.png"
                alt="/"
              />
              <div>
                <div className="text-[13px] font-semibold">
                  Digital Services
                </div>
                <div className="text-justify text-[9px] w-[80%]">
                  We offer a variety of digital services that can be customized
                  to fit your company's needs.
                </div>
                <div className="bg-[#04177f] mt-[10%] w-[35%] text-[9px] text-[#ffffff] p-[3%] text-center rounded-md">
                  <Link to="DigitalServices">Learn More</Link>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-[9%] bg-[#E2F3FF] p-[5%] mx-[5%] rounded-md">
              <img
                className="w-[28%] h-[60px]"
                src="./Images/vtu.png"
                alt="/"
              />
              <div>
                <div className="text-[13px] font-semibold">VTU Development</div>
                <div className="text-justify text-[9px] w-[80%]">
                  We develop a VTU website with services like airtime top-up,
                  data bundles, and bills payment platform.
                </div>
                <div className="bg-[#04177f] mt-[10%] w-[35%] text-[9px] text-[#ffffff] p-[3%] text-center rounded-md lg:h-[45px]">
                  <Link to="/VTU_DEV">Learn More</Link>
                </div>
              </div>
            </div>
            <div className="flex gap-[9%] bg-[#E2F3FF] p-[5%] mx-[5%] rounded-md">
              <img
                className="w-[28%] h-[80px]"
                src="./Images/Business.png"
                alt="/"
              />
              <div>
                <div className="text-[13px] font-semibold">
                  Business Development
                </div>
                <div className="text-justify text-[9px] w-[80%]">
                  When it comes to business development, trust us to save you
                  time and stress.
                </div>
                <div className="bg-[#04177f] mt-[10%] w-[35%] text-[9px] text-[#ffffff] p-[3%] text-center rounded-md lg:h-[45px]">
                  <Link to="/businessDev">Learn More</Link>
                </div>
              </div>
            </div>{" "}
          </>
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
            <div className=" items-center  font-semibold text-[20px] lg:text-[30px]">
              Telecom Services
            </div>
            <div
              className="lg:text-2xl"
              onClick={() => setTelecomIcon((prev) => !prev)}
            >
              {!telecomIcon ? <AiFillPlusCircle /> : <AiFillMinusCircle />}
            </div>
          </div>
          <div className="text-justify text-[12px] mt-[5%] w-[100%] md:w-[60%] lg:text-[18px] ">
            We are the telecom company you can trust, with affordable prices and
            excellent customer support. Sign up today and start enjoying
            seamless Telecom service!
          </div>
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
              <Link to="/our-services/telecoms">
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
              <Link to="/our-services/telecoms">
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
              <Link to="/our-services/telecoms">
                <div className="bg-[#04177f] w-[30%] text-[9px] mt-[10%] text-[#ffffff] p-[3%] text-center rounded-md lg:text-[14px] lg:font-bold lg:w-[50%] lg:p-[4%] lg:rounded-lg">
                  Buy Now
                </div>
              </Link>
            </div>

            <div
              className="flex flex-col justify-between gap-[10px] h-[190px] w-[209px] m-[2%] p-[5%] rounded-md bg-[#F2FAFF]  md:w-[206px] md:p-[3%] lg:w-[359px] lg:h-[276px] lg:gap-[18px]"
              style={{ boxShadow: "0px 0px 11.676px rgba(28, 12, 249, 0.5)" }}
            >
              <div className="font-medium lg:text-[24px] lg:mb-[-5%]">
                TV Subscription
              </div>
              <div className="text-justify text-[12px] lg:text-[16px]">
                Enjoy unlimited streaming on multiple channels. Sign up now and
                never miss your favorite show again!
              </div>
              <Link to="/our-services/telecoms">
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
              <Link to="/our-services/telecoms">
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
              <Link to="/our-services/telecoms">
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
              <Link to="/our-services/telecoms">
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
              <Link to="/our-services/telecoms">
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
            <div className=" items-center  font-semibold text-[20px] lg:text-[30px]">
              Payment Services
            </div>
            <div
              className="lg:text-2xl"
              onClick={() => setPaymentIcon((prev) => !prev)}
            >
              {!paymentIcon ? <AiFillPlusCircle /> : <AiFillMinusCircle />}
            </div>
          </div>
          <div className="text-justify text-[12px] mt-[5%] md:w-[60%] lg:text-[18px]">
            We offer quick and secure payment processing to make sure your
            transactions go off without a hitch, using our user-friendly
            interface to receive money both locally and internationally.
          </div>
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
              <Link to="/our-services/payment">
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
              <Link to="/our-services/payment">
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
              <Link to="/our-services/payment">
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
              <Link to="/our-services/payment">
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
              <Link to="/our-services/payment">
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
            <div className=" items-center  font-semibold text-[20px] lg:text-[30px]">
              Digital Services
            </div>
            <div
              className="lg:text-2xl"
              onClick={() => setDigitalIcon((prev) => !prev)}
            >
              {digitalIcon ? <AiFillMinusCircle /> : <AiFillPlusCircle />}
            </div>
          </div>
          <div className="text-justify text-[12px] mt-[5%] md:w-[60%] lg:text-[18px]">
            We offer a variety of digital services that can be customized to fit
            your company's needs. Our services are affordable and designed to
            deliver outstanding results for your company.
          </div>
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
      <div className="mb-[5%] flex flex-col gap-[50px] bg-[#04177f] px-[5%] text-[#ffffff] py-[15%] md:py-[5%] md:flex-row md:px-[8%] md:gap-[10px] lg:gap-[30px]">
        <div>
          <div className="text-[20px] font-medium text-center mb-[4%] md:text-[26px] md:text-left lg:text-[45px]">
            Card Issuing
          </div>
          <div className="text-justify text-[12px] md:text-[10px] md:leading-2 md:tracking-widest lg:text-[18px] ">
            Our card issuing service can be tailored to your specific needs as
            an Individual or business. we issue 3D secured virtual and physical
            debit USD and NGN cards to spend anywhere Verve, Visa, and
            Mastercard are accepted, both in-store and online, anytime,
            anywhere.
          </div>
        </div>
        <img
          className="md:w-[40%] h-[] lg:w-[50%]"
          src="./Images/cards.png"
          alt="/"
        />
      </div>

      {/* CROSS-BORDER PAYMENT */}

      <div
        id="crossborder"
        className="mt-[20%] md:mt-[5%] mb-[20%] md:mb-0 mx-[5%] lg:mx-[8%] flex flex-col gap-[20px] md:flex-row md:justify-between lg:mb-[5%]"
      >
        <img
          className="lg:w-[600px] lg:h-[500px] hidden md:block"
          src={CrossBorder2}
          alt="/"
        />
        <div className="md:flex md:flex-col md:justify-center">
          <div className="text-[20px] font-semibold text-[#04177f] text-center w-[250px] mx-auto leading-[30px] md:w-[100%] lg:text-[30px] md:text-left">
            Cross-border Payment
          </div>
          <br></br>
          <div className="text-[12px] text-justify md:w-[280px] md:text-[10px] lg:text-[18px] lg:w-[480px]">
            Our cross-border payment services make it simple and practical to
            send money to family and friends, receive money both locally and
            internationally.
          </div>
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
        className="mb-[20%] md:mb-[10%] md:mt-[5%] mx-[5%] lg:mx-[8%] flex flex-col gap-[20px] md:flex-row md:justify-between lg:mb-[10%]"
      >
        <div className="md:flex md:flex-col md:justify-center">
          <div className="text-[20px] font-semibold text-[#04177f] text-center w-full mx-auto leading-[30px] md:w-[100%] lg:text-[30px] md:text-left">
            Currency Conversion
          </div>
          <br></br>
          <div className="text-[12px] text-justify md:w-[280px] md:text-[10px] lg:text-[18px] lg:w-[480px]">
            With our currency conversion service, You can get the most
            convenient exchange rates and convert any currency in a matter of
            seconds with no hidden fees.
          </div>
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
        className="mb-[20%] md:mb-[10%] mx-[5%] lg:mx-[8%] flex flex-col gap-[20px] md:flex-row md:justify-between"
      >
        <div className="hidden md:block">
          <img
            className="md:w-[250px] lg:w-[600px] lg:h-[500px] hidden md:block"
            src={MultiCurrency2}
            alt="/"
          />
        </div>
        <div className="md:flex md:flex-col md:justify-center">
          <div className="text-[20px] font-semibold text-[#04177f] text-center w-[200px] mx-auto leading-[30px] md:w-[100%] lg:text-[30px] md:text-left">
            Multi-Currency Wallets
          </div>
          <br></br>
          <div className="text-[12px] text-justify md:w-[280px] md:text-[10px] lg:text-[18px] lg:w-[480px]">
            Our Multi-Currency Wallets services are the best way to manage all
            your currencies, keep a track and conveniently store, send, and
            receive digital assets in one location.
          </div>
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
        className="mb-[20%] md:mb-[10%] mx-[5%] lg:mx-[8%] flex flex-col gap-[20px] md:flex-row md:justify-between"
      >
        <div className="md:flex md:flex-col md:justify-center">
          <div className="text-[20px] font-semibold text-[#04177f] text-center w-[200px] mx-auto leading-[30px] md:w-[100%] lg:text-[30px] md:text-left">
            Blockchain Sim Card
          </div>
          <br></br>
          <div className="text-[12px] text-justify md:w-[280px] md:text-[10px] lg:text-[18px] lg:w-[480px]">
            The new type of SIM card that uses blockchain technology to provide
            several benefits over traditional SIM cards, including improved
            security, privacy, and fraud prevention.
          </div>
        </div>
        <div className="px-[20%] md:hidden">
          <img
            className="w-full h-full mt-[10%] mx-auto"
            src={BlockChain}
            alt="/"
          />
        </div>
        <div className="px-[10%] md:px-0 hidden md:block">
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
        className="mb-[20%] md:mb-[10%] mx-[5%] lg:mx-[8%] flex flex-col gap-[20px] md:flex-row md:justify-between"
      >
        <div className="px-[10%] md:px-0 hidden md:block">
          <img
            className="w-[248px] h-[162px] md:w-[200%] md:h-[200px] mx-auto md:mx-0 lg:w-[100%] lg:h-[300px] xl:h-[400px]"
            src={VirtualSim}
            alt="/"
          />
        </div>
        <div className="md:flex md:flex-col md:justify-center">
          <div className="text-[20px] font-semibold text-[#04177f] text-center w-[200px] mx-auto leading-[30px] md:w-[100%] lg:text-[30px] md:text-left">
            Virtual E-Sim
          </div>
          <br></br>
          <div className="text-[12px] text-justify md:w-[280px] md:text-[10px] lg:text-[18px] lg:w-[480px]">
            An eSIM is an industry-standard digital SIM that allows you to
            activate a cellular plan from your carrier without having to use a
            physical SIM.
          </div>
        </div>
        <div className="px-[20%] md:hidden">
          <img
            className="w-full h-full mt-[10%] mx-auto"
            src={VirtualSim}
            alt="/"
          />
        </div>
      </div>

      {/* BECOME AN AGENT */}
      <div
        id="becomeAgent"
        className=" mx-[5%] mb-[25%] mt-[5%] md:mb-[10%] md:flex md:flex-row md:justify-center md:items-center md:gap-[15%] md:mx-[8%] lg:gap-[10%]"
      >
        <div className="flex flex-col gap-[30px] md:gap-[15px] lg:gap-[40px] ">
          <div className="text-[20px] text-[#04177F] text-center font-medium md:text-[18px] md:text-left lg:text-[30px] lg:font-extrabold ">
            Become an Agent
          </div>
          <div className="text-justify tracking-widest text-[12px] md:text-[10.291px] lg:tracking-widest lg:text-[16px]">
            Becoming AremxyPlug agent will be a lucrative and rewarding
            opportunity. You will have the opportunity to make money while
            giving your clients beneficial services.
            <br />
            <br />
            Depending on your needs and goal, you can decide whether to work
            full- or part-time. You will assist clients in managing their
            accounts, making payments using digital tools that can simplify
            their lives and work at your own schedule. 
          </div>
          <div className="text-[10px] bg-[#04177f] w-[197px] text-center text-[#ffffff] p-[2%] rounded-md mx-auto md:mx-0 lg:text-[15px] lg:font-semibold lg:w-[247px]">
            Join Our Agent Program
          </div>
        </div>
        <img
          className=" w-[50%] mx-auto mt-[10%] md:w-[142.6px] md:h-[180.15px] md:mt-[0px] lg:mt-[0%] lg:w-[45%] lg:h-[280px]"
          src="./Images/agent.png"
          alt="/"
        />
      </div>

      <div className="bg-[#04177f] text-[#ffffff] py-[15%] px-[5%] flex flex-col gap-[50px] md:py-[10%] md:flex-row md:justify-center md:items-center">
        <img
          className="w-[80%] mx-auto md:w-[40%] md:h-[40%] lg:w-[30%]"
          src="./Images/chart.png"
          alt="/"
        />
        <div className="flex flex-col gap-[30px] lg:w-[50%]">
          <div className="text-center text-[20px] font-semibold md:text-left lg:text-[30px]">
            Earn on Our Platform
          </div>
          <div className="text-justify text-[12px] tracking-wide lg:text-[16px]">
            You have the opportunity to earn with AremxyPlug, The Nigeria's
            fastest-growing payment company to distribute in-demand services
            throughout your network and beyond.
            <br />
            <br />
            With services like airtime top-up, data bundles, education pins,
            among others, you can generate revenue using our API and Earn a 50%
            bonus on all of our services when you refer a friend.
          </div>
          <div className="mx-auto bg-[#ffffff] text-[#04177f] p-[3%] text-[10px] font-bold w-[35%] text-center rounded-md md:mx-[0px] lg:text-[14px] lg:w-[30%] lg:font-extrabold">
            Learn More
          </div>
        </div>
      </div>

      {/* OUR PARTNERS */}
      <div
        id="partners"
        className="flex flex-col gap-[20px] py-[20%] md:py-[5%]
      "
      >
        <div className="mb-[3%] text-[20px] text-[#04177f] text-center font-semibold lg:text-[30px] lg:font-bold">
          Partners & Businesses
        </div>

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
          <div className="text-[20px] text-center md:text-[17px] md:text-left lg:text-[30px] lg:font-bold">
            Are you a Developer?
          </div>
          <div className="text-justify text-[12px] tracking-widermd:text-[11px] lg:text-[18px] lg:w-[90%]">
            AremxyPlug API offers robust and comprehensive functionality that
            developers can use to build high-quality applications with several
            features, such as data access, integration with third-party
            services, and custom workflows. Our API is well-documented and it
            provides clear instructions for integration and usage, with
            easy-to-use integration with your existing workflows.
          </div>
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
        <div className="text-[#04177f] text-center font-semibold text-[20px] lg:text-[30px] lg:font-extrabold mb-[5%]">
          Feedbacks
        </div>
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
      <div className="bg-[#04177f] text-[#ffffff] py-[15%] px-[5%] flex flex-col gap-[50px] md:py-[10%] md:flex-col md:justify-center md:items-center mb-[20%] lg:mb-[5%]">
        <div className="text-center">
          <p className="text-[20px] font-semibold  md:text-[26px]  lg:text-[45px]">
            Subscribe to our Newsletter
          </p>
          <p className="text-[10px] mt-[5%] lg:text-[16px] lg:w-[80%] mx-auto">
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
    </>
  );
};

// #04177F
// {

// }
