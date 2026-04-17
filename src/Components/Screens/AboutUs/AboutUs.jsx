import { useState } from "react";
import styles from "./aboutus.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { GrMail } from "react-icons/gr";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import Ameenat  from "./ImageAbout/Ameenat_CLO.avif"
import Habib  from "./ImageAbout/Founder & CEO.avif";
import Victory from "./ImageAbout/Victory_CTO.avif";
import pranay from "./ImageAbout/Pranay_CPO.avif";
import Habeebat from "./ImageAbout/Habibat CFO.jpg"
import Efficiency from "./ImageAbout/Efficiency.svg";
import Security from "../Home/Images/Security.svg";
import CustomerSupport from "../Home/Images/CustomerSupport.svg";
import Sprint from "../Home/Images/Sprint.svg";
import Affordable from "../Home/Images/Afford.svg";
import Trust from "../Home/Images/Trusted.svg";
import Reliable from "../Home/Images/Reliable.svg";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464},
    items:2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1.5,
  },
};

//Animations for Vision, Mission and Value
const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export const AboutUs = () => {
  const [firstDrop, setFirstDrop] = useState(false);
  const [buttonText, setButtonText] = useState("More");


  //AboutUs
  const Services = [
     {title : "Telecom Services", description :"We offer a secure and affordable airtime, data bundles, education pins, and bills payment platform to both individuals and businesses"},
  {
    title: "Card Issuing",
    description: "We issue both virtual and physical debit USD and NGN cards to businesses and individuals. You can keep track of your finances with transparent and seamless transactions with AremxyPlug."
  },
  {
    title: "Digital Services",
    description: "We have a team of professionals whose goal is dedicated to provide you with top-tier digital services. Build a world-class product and grow your business with AremxyPlug digital services."
  },
  {
    title: "VTU Development",
    description: "With just a few steps and line of codes, you can set up an airtime top-up and mobile data website with our responsive API to increase your business growth and revenue."
  },
  {
    title: "Business Development",
    description: "Make your business limitless with our catalog of business development services. Digitize your local, idea and existing business and build your next e-commerce platform without a compromise of resources."
  }
];
  function handleClick() {
    setFirstDrop((prev) => !prev);
    setButtonText((prevText) => (prevText === "More" ? "Less" : "More"));
  }

const theProfileArray = [
  { name : "Habib Kamaldeen", image : Habib,
     profession : "Founder & CEO", description : "Visionary leader and strategist, steering business development and innovation.", 
    linkedIn : " https://www.linkedin.com/in/habib-kamaldeen-876a8b221 ",
     email : "", twitter : " https://x.com/aremxy_"},

   { name : "Habibat Kamaldeen Raji", profession : "Chief Finance Officer (CFO)", image : Habeebat ,
    description : " Oversees financial planning, investment, and fiscal compliance.",
     linkedIn : " https://www.linkedin.com/in/habibat-kamaldeen-raji-2278b8254", 
    email : "", twitter : ": https://x.com/okeowo7525 "},

    { name : "Victory Otaghogho Agbabune", 
      profession : "Chief Technology Officer (CTO):", image : Victory,
      description : "Leads platform architecture, technology strategy, and infrastructure scaling.", 
      linkedIn : " https://www.linkedin.com/in/victory-agbabune ", email : "",
       twitter : " https://x.com/sadman_vick "},
     { name : "Pranay Mishra",
       profession : "Chief Product Officer (CPO)", image : pranay,
       description : "Leads product vision and  strategy, design development, and oversees the entire product lifecycle from planning to execution."
       , linkedIn : "https://www.linkedin.com/in/pm-ui-ux", email : "", twitter : "https://x.com/pranaymishra401"},
      { name : "Amina Abiola Abidemi", profession : "Chief Legal Officer (CLO)", image : Ameenat,
         description : " Oversees all legal affairs, regulatory compliance, and corporate governance.", 
         linkedIn : "https://www.linkedin.com/in/amina-abiola-a64483238", email : "", twitter : "https://x.com/meenahlawdesk"},]


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

  return (
  <div className="flex flex-col gap-10 lg:gap-20  h-full w-full">
      <div className={`${styles.hero2} min-h-screen w-full px-[5%] py-[20%] lg:pt-[30%] lg:pb-[20%]
    flex flex-col justify-center items-center relative overflow-hidden
    /* Adding the gradient background directly without structural changes */
    bg-gradient-to-br from-[#ffffff] via-[#f3f4f6] to-[#e5e7eb]
  `}>
  
  {/* Using motion.div for the container to keep your structure exactly as provided */}
  <motion.div 
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="flex flex-col gap-10 w-full md:w-2/3 z-10"
  >
    {/* Title Animation */}
    <motion.h1 
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-[30px] leading-[40px] font-bold text-center text-black
                 md:text-[26px] lg:text-[50px] lg:leading-[60px] tracking-tight"
    >
      About Us
    </motion.h1>
    
    {/* Paragraph Animation with a slight delay */}
    <motion.p 
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      className="text-[14px] text-center font-medium text-black leading-[20px] 
                 md:text-[11px] lg:text-[16px] lg:leading-[26px]"
    >
      AremxyPlug is a business enterprise and telecommunication service
      provider that offers individuals and businesses full access to
      quick, secure, and dependable solutions for their digital and
      telecommunication service needs.
      <br /><br />
      At AremxyPlug, we provide seamless and limitless digital living
      needs to our users. Our objectives are to operate transparent and
      secure transactions, provide quick and dependable services, and to
      ensure that our services take our customers to the pinnacle of their
      aspirations in order to be the best service provider.
    </motion.p>
  </motion.div>

  {/* Optional: Subtle Animated Gradient Blob (Keeps structure, adds "Aremxy" Vibe) */}
  <motion.div 
    animate={{ 
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.5, 0.3] 
    }}
    transition={{ duration: 8, repeat: Infinity }}
    className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-[#04177f10] rounded-full blur-[100px] pointer-events-none"
  />
</div>

      {/* OUR VISION */}
     <div className="flex flex-col gap-10 md:gap-12 w-full px-[5%] overflow-hidden">
  
  {/* OUR VISION */}
  <div className="flex md:flex-row gap-10 flex-col w-full md:justify-between md:items-center">
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={slideInLeft}
      className="flex flex-col gap-5 md:w-1/2 w-full"
    >
      <div className="flex gap-2 items-center md:justify-start justify-center w-full">
        <h2 className="text-[20px] font-bold text-center md:text-[25px] lg:text-[50px] text-black">
          Our Vision
        </h2>
      </div>
      <p className="text-[14px] md:text-left text-center font-medium text-black leading-[20px] md:text-[11px] lg:text-[16px] lg:leading-[26px]">
        Our vision define digital solutions beyond imagination. We take
        security seriously, and our customers are our top priority, we are
        curated to keep fostering solutions to individuals and businesses in
        the digital space over decades.
      </p>
    </motion.div>

    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={slideInRight}
      className="md:w-1/2 w-full"
    >
      <img
        className="w-full md:h-[200px] rounded-md lg:w-[500px] lg:h-[325px] shadow-lg"
        src="./Images/aboutimages/ourBus.avif"
        alt="Our Vision"
      />
    </motion.div>
  </div>

  {/* OUR MISSION */}
  <div className="flex md:flex-row-reverse gap-10 lg:gap-15 flex-col w-full md:justify-between md:items-center">
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={slideInRight}
      className="flex flex-col gap-5 md:w-1/2 w-full"
    >
      <div className="flex gap-2 items-center md:justify-start justify-center w-full">
        <h2 className="text-[20px] font-bold text-center md:text-[25px] lg:text-[50px] text-black">
          Our Mission
        </h2>
      </div>
      <p className="text-[14px] md:text-left text-center font-medium text-black leading-[20px] md:text-[11px] lg:text-[16px] lg:leading-[26px]">
        Our mission is to offer both individuals and businesses a
        trustworthy and secure platform for hassle-free telecom products,
        payment and card issuing, e-commerce, VTU, and business development
        solutions, as well as a range of digital services to develop capacity.
      </p>
    </motion.div>

    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={slideInLeft}
      className="md:w-1/2 w-full"
    >
      <img
        className="md:h-[200px] w-full lg:h-[325px] rounded-md shadow-lg"
        src="./Images/aboutimages/skyscrapper.avif"
        alt="Our Mission"
      />
    </motion.div>
  </div>

  {/* OUR VALUES */}
  <div className="flex flex-col-reverse md:flex-row-reverse md:justify-between gap-5 w-full mt-10">
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className="md:w-1/2 w-full"
    >
      <img
        className="w-full h-full rounded-lg shadow-xl"
        src="./Images/aboutimages/skytop.avif"
        alt="Our Values"
      />
    </motion.div>

    <div className="md:w-1/2 w-full flex flex-col gap-10">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-[20px] font-bold text-center md:text-[25px] lg:text-[50px] text-black"
      >
        Our Values
      </motion.h2>

      {/* Value Item: Efficiency */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="flex flex-col gap-[9px] text-center md:text-left items-center md:items-start"
      >
        <div className="flex gap-2 items-center">
          <img className="lg:h-[70px] lg:w-[70px]" src={Efficiency} alt="Efficiency Icon"/>
          <h2 className="text-[15px] text-black leading-[20px] font-bold lg:text-[18px]">Efficiency</h2>
        </div>
        <p className="text-[14px] text-[#04177f] font-semibold">Swift and Automated.</p>
        <p className="text-[14px] md:text-left text-center font-medium text-black">
          One of our core values is efficiency. We prioritize our customers' time and deliver faultless results.
        </p>
      </motion.div>

      {/* Value Item: Security */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        variants={fadeUp}
        className="flex flex-col gap-[9px] text-center md:text-left items-center md:items-start"
      >
        <div className="flex gap-2 items-center">
          <img className="lg:h-[70px] lg:w-[70px]" src={Security} alt="Security Icon"/>
          <h2 className="text-[15px] text-black leading-[20px] font-bold lg:text-[18px]">Security</h2>
        </div>
        <p className="text-[14px] text-[#04177f] font-semibold">Safe and Secure</p>
        <p className="text-[14px] text-black font-medium">
          Security is non-negotiable. We build platforms with impeccable security to protect customers' funds and privacy.
        </p>
      </motion.div>

      {/* Value Item: Transparency */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        variants={fadeUp}
        className="flex flex-col gap-[9px] text-center md:text-left items-center md:items-start"
      >
        <div className="flex gap-2 items-center">
          <img className="lg:h-[70px] lg:w-[70px]" src={Trust} alt="Transparency Icon"/>
          <h2 className="text-[15px] text-black font-bold lg:text-[18px]">Transparency</h2>
        </div>
        <p className="text-[14px] text-[#04177f] font-semibold">Trustworthy and Reliable.</p>
        <p className="text-[14px] text-black font-medium">
          What is business without trust? AremxyPlug is 100% devoted to rendering reliable and clear information.
        </p>
      </motion.div>
    </div>
  </div>
</div>
    

      {/* OUR TEAM */}
      <div className="flex flex-col gap-10 px-[5%] w-full">
        <div className="flex flex-col gap-5 w-full
        items-center ">
          <h2 className="text-[20px]
        font-bold  text-center md:text-[25px] lg:text-[50px]
          text-black">
            Our Team
          </h2>
           <div className="md:w-2/3 w-full ">
          <p className="text-[14px] text-center font-bold text-black leading-[20px] 
      md:text-[11px] lg:text-[16px] lg:leading-[26px] opacity-80">
            At AremxyPlug, we think that the success of our company is built on
            the strength of our team. We take great pride in having a skilled
            and experienced team of experts who are committed to giving our
            clients excellent services.
          </p>
          </div>
        </div>
       
        <div className="w-full  flex gap-[10px]  lg:min-h-[600px] ">
          <Carousel
            swipeable={true}
            draggable={true}
            responsive={responsive}
            autoPlay={true}
            infinite={true}
            keyBoardControl={true}
            removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
            transitionDuration={1000}
            showDots={false}
            className="w-full flex gap-[50px]  justify-between h-full  px-[20px]"
            customTransition="transform 1800ms ease-in-out"
          >
     
            {theProfileArray?.map((item)=> (
              <div className=" h-full md:w-full w-[200px]
               flex flex-col  rounded-t-[34px] pt-10
                lg:w-[486px]  lg:rounded-t-[100px] justify-end"  style={{
                boxShadow: "0px 0px 7.84859px rgba(0, 0, 0, 0.25)",
              }} >
           <div className="w-full flex h-[40%] items-end justify-center">
              <img
                className="z-50 h-[100%] w-[80%]  md:w-[143px] 
                rounded-full  lg:w-[248px] "
                src={item?.image}
                alt="/"
              />
              </div>
              <div className="flex flex-col pt-4 lg:pt-6 justify-between overflow-hidden h-[60%]
               bg-[#EEEBEB]   px-2 ">
                <h1  className="font-semibold text-[16px] text-[#04177f]
           text-center lg:text-[30px] leading-[30px] lg:leading-[40px]">
                 {item?.name}
                </h1>
                <h2  className="font-semibold text-[16px]
           text-center lg:text-[30px] leading-[30px] lg:leading-[40px] text-black">
                  {item?.profession}
                </h2>
                <p className="text-center text-[14px] leading-[20px]
           font-medium md:text-[10px] md:leading-2  lg:text-[18px]
            lg:leading-[26px] opacity-80">
                  {item?.description}
                </p>
                <div className="flex justify-center items-center  bg-[#04177f] text-[#ffffff]
                 py-3 px-0 gap-[20px] lg:h-[64px] lg:text-5xl lg:gap-[15px]">
                
                <a href={item?.linkedIn}>
                  <AiFillLinkedin />
                  </a>
                  <a href={item?.twitter} className="">
                  <AiOutlineTwitter href={item?.twitter} />
                  </a>
                  <GrMail />
                </div>
              </div>
            
          </div>
            ))}
              
 </Carousel>
        </div>
      </div>
     
      <div
        className=" mb-[10%] md:mb-[0%] flex ml-[5%] items-center gap-[2%] w-[15%] p-[1%] text-[12px] 
        rounded-md md:text-[20px] md:w-[13%] lg:ml-[8%] lg:gap-[10%] lg:w-[10%]"
        style={{
          boxShadow: "0px 0px 7.84859px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Link to='/team' className="flex items-center gap-[20px]">
          More
          <AiOutlineArrowRight />
        </Link>
      </div>

      {/* OUR STORY */}
      <div className="flex flex-col gap-6 items-center">
        <p className="text-[20px] text-center w-1/2
        font-bold  md:text-[25px] lg:text-[50px]
          text-black md:hidden">
            Our Story
          </p>
          <div className="flex-col flex md:flex-row-reverse md:justify-between">
          <div className="flex  md:w-1/2 w-full gap-[5%] justify-center lg:mx-[0]">
            <img
              className="w-[50%] mb-[40%] md:w-[40%] lg:w-[267px]"
              src="./Images/aboutimages/story1.avif"
              alt="/"
            />
            <img
              className="w-[50%] mt-[40%] md:w-[40%] lg:w-[267px]"
              src="./Images/aboutimages/story2.avif"
              alt="/"
            />
          </div>
        

        <div className="px-[5%] md:w-1/2 w-full items-start flex flex-col gap-10">
          <p  className="hidden md:block text-[20px] text-center w-1/2
        font-bold  md:text-[25px] lg:text-[50px]
          text-black">
            Our Story
          </p>
          <p className="text-[14px] font-bold text-black leading-[20px] 
      md:text-[11px] lg:text-[16px] opacity-80">
            In 2021, a young man with a vision to provide seamless digital
            living took action. Fed up with the unreliability of conventional
            service providers, he established AremxyPlug. With humble beginnings
            of providing Telecom services, this man spent years gathering data.
            <br></br>
            <br></br>
            Each enquiry exposed problems, and thus he began to build solutions.
            By offering reliable assistance to small business owners, he built a
            network that spanned globally.
            <br></br>
            <br></br>
            With time, a team of strong willed individuals was built. This
            team's objective is to provide quality service around the clock, to
            tackle problems which we’ve all had to face, and thus we are a
            solution-centered startup charged with making life easier.
            <br></br>
            <br></br>
            As at 2023, we launched our services on a bigger platform, tackling
            every problem within the digital and telecommunication ecosystem
            with excellent services for curated solutions.
            <br></br>
            <br></br>
            Our story is of no difference from the story of every establishment
            that has made significant change in the digital space. But what
            makes a difference, is our unwavering solutions to be the one-stop
            shop for individuals and businesses for telecom, payment, and
            digital service needs. 
          </p>
         </div>
        </div>
      </div>

      {/* WHY CHOOSE US? */}
      <div 
            className="flex flex-col bg-[#04177F] h-auto  
            px-[5%] py-[20%] lg:py-[8%] md:py-[10%]  gap-[30px]  lg:px-[8%] overflow-hidden">
       {/* Header Section */}
       <motion.div
         initial={{ opacity: 0, y: -20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, amount: 0.3 }}
         transition={{ duration: 0.6 }}
       >
       
         <h1 className="mb-[5%] text-[30px] leading-[40px]   font-bold text-center  text-white
         md:text-[26px] lg:text-[50px] lg:leading-[60px] tracking-tight">
           Why Choose Us?
         </h1>
         <div className="text-center font-medium mx-auto text-[14px] leading-relaxed opacity-90 w-[95%]
          md:text-[12px] lg:text-[20px] lg:w-[70%] mb-10 text-white">
          The team at AremxyPlug is made up of a variety of individuals who
                 share the traits of resilience and problem-solving abilities. As a
                 result, we made the decision to pool our resources and develop a
                 platform that offers services for your digital needs.
         </div>
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
         <div className="hidden md:flex w-full gap-4 h-[250px] ">
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
      {/* OUR SOLUTION */}
      {/* MID SCREEN */}
      <div className="hidden md:flex md:flex-row-reverse px-[5%] md:justify-between 
      md:items-center flex-col lg:gap-20 gap-10 ">
      <div className="flex flex-col  gap-5 md:w-1/2 w-full">
        <h1 className="text-[30px] leading-[40px]   font-bold text-center  text-black
         md:text-[26px] lg:text-[50px] lg:leading-[60px]">
          Our Solution
        </h1>
         <div className="flex flex-col gap-5">
       {Services.map((item, index)=> (
         <p key = {index} className="text-[14px] font-extrabold text-black leading-[20px] 
      md:text-[11px] lg:text-[16px] opacity-80">
          {item?.title}: {" "}<span className="font-medium">
         {item?.description}
          </span>
 </p>
       ))}
       </div>
        </div>

{/* Images */}
        <div className="w-full md:w-1/2">
          <img
            className="w-full"
            src="./Images/aboutimages/solution1.avif"
            alt="/"
          />
        </div>
      
       
      </div>
      {/* MOBILE */}
     
      <div className="flex flex-col gap-10 md:hidden px-[5%]">
        <h1 className="text-[30px] leading-[40px]   font-bold
         text-center  text-black md:text-[26px] lg:text-[50px] lg:leading-[60px]">
          Our Solution
        </h1>

          <div className="w-full">
          <img
            className="w-full"
            src="./Images/aboutimages/solution1.avif"
            alt="/"
          />
        </div>
         <div className="flex flex-col gap-5">
       {Services.map((item, index)=> (
         <p key = {index} className="text-[14px] font-extrabold text-black leading-[20px] 
      md:text-[11px] lg:text-[16px] lg:leading-[24px] opacity-80">
          {item?.title}: {" "}<span className="font-medium">
         {item?.description}
          </span>
 </p>
       ))}
       </div>
        </div>

{/* Images */}
      
      
       
      

      {/* OUR PRODUCT */}
      {/* MID SCREEN */}
  <div className="hidden md:flex md:flex-row px-[5%] md:justify-between 
      md:items-center flex-col lg:gap-20 gap-10 ">
      <div className="flex flex-col  gap-5 md:w-1/2 w-full">
        <h1 className="text-[30px] leading-[40px] md:text-left  font-bold text-center  text-black
         md:text-[26px] lg:text-[50px] lg:leading-[60px]">
          Our Product
        </h1>
         
<p className="text-[14px] font-medium text-black leading-[20px] 
      md:text-[11px] lg:text-[16px] lg:leading-[24px] opacity-80">
        We provide a varierty of products to meet the needs of both individuals and businesses,
        we are dedicated to offering products that are dependable, secure and simple to use at our company.
        We have the products you need, whether you are an individual or a busimess owner, to manage your money and
        accomplish your objects
        <br></br>
        To find out more about our products and how we can assist you, please get in touch today
 </p>
      
       
        </div>

{/* Images */}
        <div className="w-full md:w-1/2">
          <img
            className="w-full"
            src="./Images/aboutimages/solution2.avif"
            alt="/"
          />
        </div>
    </div>

    {/* MOBILE */}
       <div className="flex flex-col gap-10 md:hidden px-[5%]">
        <h1 className="text-[30px] leading-[40px]   font-bold
         text-center  text-black md:text-[26px] lg:text-[50px] lg:leading-[60px]">
          Our Product
        </h1>

          <div className="w-full">
          <img
            className="w-full"
            src="./Images/aboutimages/solution2.avif"
            alt="/"
          />
        </div>
      <p className="text-[14px] font-medium text-black leading-[20px] 
      md:text-[11px] lg:text-[16px] opacity-80">
        We provide a varierty of products to meet the needs of both individuals and businesses,
        we are dedicated to offering products that are dependable, secure and simple to use at our company.
        We have the products you need, whether you are an individual or a busimess owner, to manage your money and
        accomplish your objects
        <br></br>
        To find out more about our products and how we can assist you, please get in touch today
 </p>
      
        </div>

      <Link to="/ContactUs">
          <div className="mb-[25%] lg:mb-[15%] bg-[#04177f]
           w-[120px] text-white py-[8px] rounded-[8px] 
           mx-auto text-center mt-[7%] text-[12px] lg:p-0 lg:flex lg:justify-center 
            lg:items-center lg:mt-[5%] lg:w-[170.54px] lg:h-[47px] 
            lg:text-[13px] lg:rounded-md">
            Contact Us
          </div>
        </Link>
    </div>
  );
};

// #04177f
