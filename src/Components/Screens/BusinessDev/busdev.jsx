import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import { Player } from "@lottiefiles/react-lottie-player";
import styles from "../BusinessDev/busdev.module.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
export const BusinessDev = () => {
  const [firstDrop, setFirstDrop] = useState(false);
  const [buttonText, setButtonText] = useState("More");
  const navigate = useNavigate()
  function handleClick() {
    setFirstDrop((prev) => !prev);
    setButtonText((prevText) => (prevText === "More" ? "Less" : "More"));
  }


  // Business Development Array
  const businessServices = [
  {
    title: "Critical and Innovative Thinking",
    description: "Innovative thinking benefits fostering a growth mindset, enhancing problem-solving abilities, and boosting adaptability and resilience, which all contribute to the success of businesses.",
    lottie: "https://assets3.lottiefiles.com/packages/lf20_o18imdcr.json",
  },
  {
    title: "Strategic Business Planning",
    description: "This is the systematic process used to articulate the objectives and actions required to achieve the future vision of purchasing habits of your business perspectives.",
    lottie: "https://assets5.lottiefiles.com/packages/lf20_NAl0oidcCj.json",
  },
  {
    title: "Strategic Partnerships",
    description: "The mutually beneficial business relationship called 'strategic partnership' are formal agreements between two companies with the main objective of accomplishing particular goals.",
    lottie: "https://assets2.lottiefiles.com/packages/lf20_ER8E6HKqBl.json",
  },
  {
    title: "Project Management",
    description: "This involves the discipline of planning, organizing, and controlling resources to achieve specific goals within defined constraints, ensuring successful outcomes.",
    lottie: "https://assets8.lottiefiles.com/packages/lf20_w98qte06.json",
  },
  {
    title: "Product Management",
    description: "The discipline of overseeing the development, strategy, and lifecycle of a product involves market research, prioritization, and delivering valuable solutions.",
    lottie: "https://assets2.lottiefiles.com/packages/lf20_yqoxehdn.json",
  },
  {
    title: "Marketing, Sales & Growth",
    description: "Marketing, sales, and growth synergistically fuel business success by attracting, converting, and expanding customer relationships through strategic integration.",
    lottie: "https://assets10.lottiefiles.com/packages/lf20_vLxVkbToAJ.json",
  },
  {
    title: "Cost Saving",
    description: "Strategic actions taken to reduce expenses, optimize resources, and improve efficiency, leading to financial benefits and increased profitability.",
    lottie: "https://assets9.lottiefiles.com/packages/lf20_uf2ng6jq.json",
  }
];
const userStatus = localStorage.getItem("cxccxfd")
  return (
    <div className="">
      {/* SECTION ONE */}
      <div className="h-auto flex flex-col pb-12 pt-14 lg:py-10
      gap-10 justify-center  lg:gap-15 px-[5%]">
          <div className="flex md:flex-row flex-col gap-5 items-center">
          <div className="flex flex-col lg:gap-10 gap-5 md:w-1/2 w-full">
           {userStatus && (
     <div className="my-2 flex ">
      <img src="/Images/ArrowBack.svg" alt ="ArrowBack"/>
      <p onClick={()=> {
        navigate(-1)
      }} className="text-base text-black font-semibold">
        Go Back
      </p>
      </div>
  )}
          <h1 className="text-[30px] leading-[40px]   font-bold md:text-left text-center 
    md:text-[26px] lg:text-[50px]  lg:leading-[60px] 
           text-[#04177F]">
            Business Development
          </h1 >
          <p className="text-[14px] md:text-left text-center font-bold
         text-black leading-[20px] 
      md:text-[11px] lg:text-[16px] lg:leading-[26px] opacity-80">
            Our team of business experts will develop the best strategies to
            assist you in developing, implementing, and enhancing your digital
            business capabilities within your company. When it comes to business
            development, trust us to save you time and stress.
          </p>
          </div>
          <div className="w-full md:w-1/2 flex md:justify-end justify-center">
            <img
          className="w-[270px] h-[185px] my-[20%] mx-auto md:my-[0] 
          md:w-[318px] md:h-[219px] lg:w-[550px] lg:h-[379px]"
          src="./Images/businessimages/busimg.avif"
          alt="/"
        />
        </div>
        </div>
     
       
    <Link to="/ContactUs"
           className='py-[16px] lg:px-4 text-center w-full  text-[14px] md:w-[179px]
      leading-[11.31px] rounded-[7px] lg:py-[15px]  bg-primary text-white
       lg:rounded-[8px] capitalize lg:text-[14px] lg:leading-[16px] font-bold'>
      
             Talk to an Expert Today!
            
          </Link>

      {/* <div className="mb-[20%] md:flex md:flex-col md:justify-center md:items-center"> */}
        <p className=" md:text-left text-center text-[14px] leading-[20px] 
            font-bold lg:text-[16px] lg:leading-[24px]">
          Let's take your strategic ideas into realities
        </p>

        {/* <br></br>
        <div className="text-[12px] w-[312px] text-justify md:text-[10.42px] md:text-center md:w-[434px] lg:text-[18px] lg:w-[750px]">
          Our aim is to provide comprehensive support to businesses across
          various stages of development with holistic approach to drive growth,
          increase profitability, and achieve a long-term success.
        </div> */}
      {/* </div> */}
      </div>
      

      {/* SECTION TWO */}
      <div
      className="special  px-[5%] py-[10%] md:px-[10%] "
      style={{
        backgroundImage: "url(./Images/businessimages/dottedBG.avif)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {businessServices.map((service, index) => {
        const isEven = index % 2 === 0;

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className={`flex flex-col md:flex-row ${
              isEven ? "" : "md:flex-row-reverse"
            } items-center justify-center gap-[40px] md:gap-[150px] lg:gap-[250px] mb-[15%] lg:mb-[10%]`}
          >
            {/* Text Content */}
            <div className="flex flex-col gap-[20px] max-w-[550px]">
              <h2 className="text-[30px] leading-[40px]   font-bold md:text-left text-center 
    md:text-[26px] lg:text-[50px]  lg:leading-[60px] 
           text-black">
                {service.title}
              </h2>
              <p className="text-[14px] md:text-left text-center font-bold
         text-black leading-[20px] 
      md:text-[11px] lg:text-[16px] lg:leading-[26px] opacity-80">
                {service.description}
              </p>
            </div>

            {/* Lottie Player */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <Player
                autoplay
                loop
                src={service.lottie}
                style={{ 
                  height: window.innerWidth > 768 ? "350px" : "280px", 
                  width: window.innerWidth > 768 ? "350px" : "280px" 
                }}
              />
            </motion.div>
          </motion.div>
        );
      })}
    </div>
      {/* <div
        className="special mx-[-6%] px-[5%] py-[10%] md:px-[10%] lg:mx-[-9.5%]"
        style={{
          backgroundImage: "url(./Images/businessimages/dottedBG.avif)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
       
        }}
      >
        <div className="md:flex mb-[20%] md:justify-center md:items-center md:gap-[250px] lg:gap-[300px] lg:mb-[10%]">
          <div className="flex flex-col gap-[20px]">
            <div className="text-[20px] font-semibold text-center w-[233px] mx-auto md:text-[17px] md:w-[286px] lg:text-[30px] lg:w-[494px] lg:text-left">
              Critical and Innovative Thinking
            </div>
            <div className="text-[12px] text-justify md:text-[10px] md:w-[300px] lg:text-[18px] lg:w-[554px]">
              Innovative thinking can benefits fostering a growth mindset,
              enhancing problem-solving abilities, and boosting adaptability and
              resilience, which all contribute to the success of businesses.
            </div>
          </div>

        
          <Player
            autoplay
            loop
            src="https://assets3.lottiefiles.com/packages/lf20_o18imdcr.json"
            style={{ height: "350px", width: "350px" }}
          ></Player>
        </div>

        <div className="md:flex md:flex-row-reverse mb-[20%] md:justify-center md:items-center md:gap-[250px] lg:gap-[350px] lg:mb-[10%]">
          <div className="flex flex-col gap-[20px]">
            <div className="text-[20px] font-semibold text-center w-[px] mx-auto md:text-17px lg:text-[30px] lg:w-[494px] lg:text-left">
              Strategic Business Planning
            </div>
            <div className="text-[12px] text-justify md:text-[10px] md:w-[300px] lg:text-[18px] lg:w-[554px]">
              This is the systematic process used to articulates the objectives
              and actions required to achieve the future vision of purchasing
              habits of your business perspectives.
            </div>
          </div>

      
          <Player
            autoplay
            loop
            src="https://assets5.lottiefiles.com/packages/lf20_NAl0oidcCj.json"
            style={{ height: "300px", width: "300px" }}
          ></Player>
        </div>

        <div className="md:flex mb-[20%] md:justify-center md:items-center md:gap-[250px] lg:gap-[350px] lg:mb-[10%]">
          <div className="flex flex-col gap-[20px]">
            <div className="text-[20px] font-semibold text-center w-[233px] mx-auto md:text-[17px] lg:text-[30px] lg:w-[494px] lg:text-left">
              Strategic Partnerships
            </div>
            <div className="text-[12px] text-justify md:text-[10px] md:w-[300px] lg:text-[18px] lg:w-[554px]">
              The mutually beneficial business relationship called "strategic
              partnership" are formal agreements between two companies with the
              main objective of accomplishing a particular goals.
            </div>
          </div>

        
          <Player
            autoplay
            loop
            src="https://assets2.lottiefiles.com/packages/lf20_ER8E6HKqBl.json"
            style={{ height: "300px", width: "300px" }}
          ></Player>
        </div>

        <div className="md:flex md:flex-row-reverse mb-[20%] md:justify-center md:items-center md:gap-[250px] lg:gap-[350px] lg:mb-[10%]">
          <div className="flex flex-col gap-[20px]">
            <div className="text-[20px] font-semibold text-center w-[233px] mx-auto md:text-[17px] lg:text-[30px] lg:w-[494px] lg:text-left">
              Project Management
            </div>
            <div className="text-[12px] text-justify md:text-[10px] md:w-[300px] lg:text-[18px] lg:w-[554px]">
              This evolves the discipline of planning, organizing, and
              controlling resources to achieve specific goals within defined
              constraints. It involves initiating, executing, monitoring, and
              closing projects, ensuring successful outcomes.
            </div>
          </div>

          <Player
            autoplay
            loop
            src="https://assets8.lottiefiles.com/packages/lf20_w98qte06.json"
            style={{ height: "300px", width: "300px" }}
          ></Player>
        </div>

        <div className="md:flex mb-[20%] md:justify-center md:items-center md:gap-[250px] lg:gap-[350px] lg:mb-[10%]">
          <div className="flex flex-col gap-[20px]">
            <div className="text-[20px] font-semibold text-center w-[233px] mx-auto md:text-[17px] lg:text-[30px] lg:w-[494px] lg:text-left">
              Product Management
            </div>
            <div className="text-[12px] text-justify md:text-[10px] md:w-[300px] lg:text-[18px] lg:w-[554px]">
              The discipline of overseeing the development, strategy, and
              lifecycle of a product is inevitably. It involves market research,
              prioritization, planning, collaboration, and delivering valuable
              solutions that meet customer needs.
            </div>
          </div>

          <Player
            speed={5}
            autoplay
            loop
            src="https://assets2.lottiefiles.com/packages/lf20_yqoxehdn.json"
            style={{ height: "300px", width: "300px" }}
          ></Player>
        </div>

        <div className="md:flex md:flex-row-reverse mb-[20%] md:justify-center md:items-center md:gap-[250px] lg:gap-[350px] lg:mb-[10%]">
          <div className="flex flex-col gap-[20px]">
            <div className="text-[20px] font-semibold text-center w-[px] mx-auto md:text-[17px] lg:text-[30px] lg:w-[494px] lg:text-left">
              Marketing, Sales & Growth
            </div>
            <div className="text-[12px] text-justify md:text-[10px] md:w-[300px] lg:text-[18px] lg:w-[554px]">
              Marketing, sales, and growth synergistically fuel business success
              by attracting, converting, and expanding customer relationships
              through strategic integration and optimization.
            </div>
          </div>

          <Player
            autoplay
            loop
            src="https://assets10.lottiefiles.com/packages/lf20_vLxVkbToAJ.json"
            style={{ height: "300px", width: "300px" }}
          ></Player>
        </div>

        <div className="md:flex mb-[20%] md:justify-center md:items-center md:gap-[250px] lg:gap-[350px] lg:mb-[10%]">
          <div className="flex flex-col gap-[20px]">
            <div className="text-[20px] font-semibold text-center w-[233px] mx-auto md:text-[17px] lg:text-[30px] lg:w-[494px] lg:text-left">
              Cost Saving
            </div>
            <div className="text-[12px] text-justify md:text-[10px] md:w-[300px] lg:text-[18px] lg:w-[554px]">
              It refers to the strategic actions and measures taken by
              individuals or businesses to reduce expenses, optimize resources,
              and improve efficiency, ultimately leading to financial benefits
              and increased profitability.
            </div>
          </div>


          <Player
            autoplay
            loop
            src="https://assets9.lottiefiles.com/packages/lf20_uf2ng6jq.json"
            style={{ height: "300px", width: "300px" }}
          ></Player>
        </div>
      </div> */}

      {/* SECTION THREE */}
      <div className="my-[15%] md:my-[10%] px-[5%]">
        <div className=" text-[20px] text-[#04177f] text-center lg:text-[30px]">
          Our Key Features
        </div>
        <div className="text-[12px] text-center lg:text-[18px]">
          Let's save you time and stress, so you can focus on your company's
          vision goals, and objectives.
        </div>
      </div>

      <div className="mb-[20%] md:mb-[10%] grid md:grid-cols-3 px-[5%] md:gap-x-[6%] gap-[80px]">
        {/* market research */}
        <div className={styles.img}>
          <img
            className="w-[240px] md:w-[200px] lg:w-[293px]"
            src="/Images/businessimages/market.png"
            alt="/"
          />
          <ul className="ml-[5%] list-disc flex flex-col gap-[15px] text-[12px] md:text-[7px] md:w-[222px] lg:text-[12px] lg:w-[330px]">
            <li>
              Conduct thorough market research to identify opportunities, target
              markets, and consumer trends.
            </li>
            <li>
              Perform competitor analysis to gain insights into market
              positioning and develop competitive strategies.
            </li>
            <li>
              Provide detailed reports and recommendations based on the research
              findings.
            </li>
          </ul>
        </div>

        {/* business strategy */}
        <div className={styles.img}>
          <img
            className="w-[240px] md:w-[200px] lg:w-[293px]"
            src="/Images/businessimages/2.BusinessStrategy.png"
            alt="/"
          />
          <ul className="text-justify ml-[5%] list-disc flex flex-col gap-[15px] text-[12px] md:text-[7px] md:w-[222px] lg:text-[12px] lg:w-[330px]">
            <li>
              Work closely with clients to develop customized business
              strategies aligned with your goals and objectives.
            </li>
            <li>
              Define value propositions, competitive advantages, and
              differentiation strategies.
            </li>
            <li>
              Identify growth areas and develop strategic plans for market
              expansion.
            </li>
          </ul>
        </div>

        {/* sales and marketing support  */}
        <div className={styles.img}>
          <img
            className="w-[240px] md:w-[200px] lg:w-[293px]"
            src="/Images/businessimages/3.SalesandMarketing.png"
            alt="/"
          />
          <ul className="text-justify ml-[5%] list-disc flex flex-col gap-[15px] text-[12px] w-[330px] md:text-[7px] md:w-[222px] lg:text-[12px] lg:w-[330px]">
            <li>
              Create comprehensive sales and marketing plans tailored to your
              target audience.
            </li>
            <li>
              Develop branding strategies, messaging frameworks, and marketing
              collateral.
            </li>
            <li>
              Assist in lead generation, customer acquisition, and conversion
              optimization.
            </li>
          </ul>
        </div>

        {/* partnership and collaboration */}
        <div className={styles.img}>
          <img
            className="w-[240px] md:w-[200px] lg:w-[293px]"
            src="/Images/businessimages/4.Partnership.png"
            alt="/"
          />
          <ul className="text-justify ml-[5%] list-disc flex flex-col gap-[15px] text-[12px] md:text-[7px] md:w-[222px] lg:text-[12px] lg:w-[330px]">
            <li>
              We help to identify potential strategic partnership and alliances
              to enhance business growth.
            </li>
            <li>
              Facilitate partnership negotiations and agreements where needed.
            </li>
            <li>
              Support collaboration initiatives to dive innovation and expand
              market reach.
            </li>
          </ul>
        </div>

        {/* product development */}
        <div className={styles.img2}>
          <img
            className="w-[270px] md:w-[200px] lg:w-[330px]"
            src="/Images/businessimages/5.png"
            alt="/"
          />
          <ul className="text-justify ml-[5%] list-disc flex flex-col gap-[15px] text-[12px] md:text-[7px] md:w-[222px] lg:text-[12px] lg:w-[330px]">
            <li>
              Evaluate existing products/services and provide recommendations
              for improvement or diversification.
            </li>
            <li>
              Conduct market feasibility studies for new product development.
            </li>
            <li>Assist in product launch planning and execution.</li>
          </ul>
        </div>

        {/* financial analysis */}
        <div className={styles.img2}>
          <img
            className="w-[240px] md:w-[200px] lg:w-[293px]"
            src="/Images/businessimages/6.png"
            alt="/"
          />
          <ul className="text-justify ml-[5%] list-disc flex flex-col gap-[15px] text-[12px] w-[330px] md:text-[7px] md:w-[222px] lg:text-[12px] lg:w-[330px]">
            <li>
              Perform financial analysis, including forecasting, budgeting, and
              ROI analysis.
            </li>
            <li>
              Develop financial models and metrics to measure business
              performance.
            </li>
            <li>
              Provide guidance on investment decisions and funding
              opportunities.
            </li>
          </ul>
        </div>

        {/* training and skill */}
        <div className={styles.img2}>
          <img
            className="w-[240px] md:w-[200px] lg:w-[293px]"
            src="/Images/businessimages/7.png"
            alt="/"
          />
          <ul className="text-justify ml-[5%] list-disc flex flex-col gap-[15px] text-[12px] md:text-[7px] md:w-[222px] lg:text-[12px] lg:w-[330px]">
            <li>
              Conduct workshops and training programs to enhance business
              development skills.
            </li>
            <li>Offer coaching and mentoring to key personnel.</li>
            <li>
              Provide ongoing support and guidance to ensure effective
              implementation of strategies.
            </li>
          </ul>
        </div>

        {/* performance monitoring */}
        <div className={styles.img2}>
          <img
            className="w-[260px] md:w-[200px] lg:w-[350px]"
            src="/Images/businessimages/8.png"
            alt="/"
          />
          <ul className="text-justify ml-[5%] list-disc flex flex-col gap-[15px] text-[12px] md:text-[7px] md:w-[222px] lg:text-[12px] lg:w-[330px]">
            <li>
              Establish key performance indicators (KPIs) and measurement
              frameworks.
            </li>
            <li>
              Monitor and evaluate the progress of implemented strategies.
            </li>
            <li>
              Provide regular reports and insights for continuous improvement.
            </li>
          </ul>
        </div>

        {firstDrop && (
          <div className="grid gap-[80px]">
            {/* product development */}
            <div className={styles.img}>
              <img
                className="w-[300px]"
                src="/Images/businessimages/5.png"
                alt="/"
              />
              <ul className="ml-[5%] list-disc flex flex-col gap-[15px] text-[12px]">
                <li>
                  Evaluate existing products/services and provide
                  recommendations for improvement or diversification.
                </li>
                <li>
                  Conduct market feasibility studies for new product
                  development.
                </li>
                <li>Assist in product launch planning and execution.</li>
              </ul>
            </div>

            {/* financial analysis */}
            <div className={styles.img}>
              <img
                className="w-[280px]"
                src="/Images/businessimages/6.png"
                alt="/"
              />
              <ul className="ml-[5%] list-disc flex flex-col gap-[15px] text-[12px]">
                <li>
                  Perform financial analysis, including forecasting, budgeting,
                  and ROI analysis.
                </li>
                <li>
                  Develop financial models and metrics to measure business
                  performance.
                </li>
                <li>
                  Provide guidance on investment decisions and funding
                  opportunities.
                </li>
              </ul>
            </div>

            {/* training and skill */}
            <div className={styles.img}>
              <img
                className="w-[280px]"
                src="/Images/businessimages/7.png"
                alt="/"
              />
              <ul className="ml-[5%] list-disc flex flex-col gap-[15px] text-[12px]">
                <li>
                  Conduct workshops and training programs to enhance business
                  development skills.
                </li>
                <li>Offer coaching and mentoring to key personnel.</li>
                <li>
                  Provide ongoing support and guidance to ensure effective
                  implementation of strategies.
                </li>
              </ul>
            </div>

            {/* performance monitoring */}
            <div className={styles.img}>
              <img
                className="w-[330px]"
                src="/Images/businessimages/8.png"
                alt="/"
              />
              <ul className="ml-[5%] list-disc flex flex-col gap-[15px] text-[12px]">
                <li>
                  Establish key performance indicators (KPIs) and measurement
                  frameworks.
                </li>
                <li>
                  Monitor and evaluate the progress of implemented strategies.
                </li>
                <li>
                  Provide regular reports and insights for continuous
                  improvement.
                </li>
              </ul>
            </div>
          </div>
        )}

        <div
          className="mt-[-10%] md:hidden flex justify-center items-center font-semibold bg-[#04177F] text-[#ffffff] w-[104px] h-[33px] mx-auto rounded-md p-[2%]"
          onClick={handleClick}
        >
          <div className="text-[12px]">{buttonText}</div>
          <div className="w-[15px] text-[30px]  ">
            {!firstDrop ? <RiArrowDropDownLine /> : <RiArrowDropUpLine />}
          </div>
        </div>
      </div>

      {/* SECTION FOUR  */}
      <img
        className="lg:hidden md:w-[80%] md:mx-auto mb-[25%]"
        src="./Images/businessimages/lastbg.avif"
        alt="/"
      />
      <img
        className="hidden lg:block md:w-[80%] md:mx-auto mb-[25%]"
        src="./Images/businessimages/lastbg2.avif"
        alt="/"
      />

      {/* LAST SECTION */}
      <div
        className="py-[8%] mx-auto mb-[25%] w-[312px] rounded-xl h-[312px] flex flex-col justify-center items-center gap-[30px] md:gap-[10px] md:w-[695px] md:h-[174px] md:mx-auto lg:w-[100%] lg:h-[298px] lg:gap-[35px] md:mb-[15%]"
        style={{ boxShadow: "0px 0px 11.5833px rgba(0, 0, 0, 0.25)" }}
      >
        <div className="w-[292px] text-[20px] leading-[30px] text-center font-semibold text-[#04177f] md:w-[375px] md:text-[17px] md:font-semibold lg:text-[30px] lg:w-[648px] ">
          AremxyPlug Business Consulting Services
        </div>
        <div className="w-[294px] h-[105px] text-[10px] text-center leading-[15px] md:w-[659px] md:text-[10px] lg:text-[18px] lg:w-[80%] lg:h-[108px] lg:leading-[27px]">
          At AremxyPlug, we are committed to providing a one-stop shop solution
          to individuals and businesses. Want to take your next big company to a
          milestone?
          <br></br>
          <br></br>
          Book a session with us, we are so keen to help you to crush the
          adventure!
        </div>
        <Link to="/ContactUs">
          <div className="w-[95px] h-[26px] bg-[#04177f] flex justify-center items-center text-[#ffffff] text-[7px] rounded-md md:w-[95px] md:h-[26px] md:p-[2%] lg:w-[169px] lg:h-[45px] lg:text-[13px]">
            Contact sales
          </div>
        </Link>
      </div>
    </div>
  );
};

// bg-[#04177f]
