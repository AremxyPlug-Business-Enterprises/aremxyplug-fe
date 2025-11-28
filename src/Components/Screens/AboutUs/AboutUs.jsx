import React, { useState } from "react";
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
import Ameenat  from "./ImageAbout/Ameenat CLO (1).jpg"
import Habib  from "./ImageAbout/Founder & CEO.jpg";
import Victory from "./ImageAbout/Victory CTO.jpg";
import pranay from "./ImageAbout/Pranay CPO.jpg";
import Habeebat from "./ImageAbout/Habibat CFO.jpg"


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
    items:2.5,
  },
  mobile: {
    breakpoint: { max: 375, min: 0 },
    items: 1.5,
  },
};

export const AboutUs = () => {
  const [firstDrop, setFirstDrop] = useState(false);
  const [buttonText, setButtonText] = useState("More");

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


  return (
    <>
      <div className={styles.hero2}>
        <div className="mx-[10%] md:mx-[15%] leading-5 lg:leading-6">
          <div className="mb-[5%] font-semibold text-[25px] flex justify-center pt-[40%] md:text-[26.06px] md:pt-[] lg:pt-[40%] lg:text-[45px]">
            About Us
          </div>
          <br></br>
          <div className="text-[12px] text-extrabold text-justify lg:text-[18px]">
            AremxyPlug is a business enterprise and telecommunication service
            provider that offers individuals and businesses full access to
            quick, secure, and dependable solutions for their digital and
            telecommunication service needs.
            <br></br>
            <br></br>
            At AremxyPlug, we provide seamless and limitless digital living
            needs to our users. Our objectives are to operate transparent and
            secure transactions, provide quick and dependable services, and to
            ensure that our services take our customers to the pinnacle of their
            aspirations in order to be the best service provider.
          </div>
        </div>
      </div>

      {/* OUR VISION */}
      <div className="mb-[20%] mx-[5%] mt-[6%] md:flex md:gap-[15%] md:justify-center md:items-center lg:mx-[8%] lg:mb-[15%]">
        <div className="md:h-[150px] leading-5 lg:leading-7">
          <div className="font-semibold text-[20px] text-center md:text-left md:text-[17px] lg:text-[30px]">
            Our Vision
          </div>
          <br></br>
          <div className="text-justify text-[12px] mb-[25%] md:text-[10px] lg:text-[18px] lg:w-[] ">
            Our vision define digital solutions beyond imagination. We take
            security seriously, and our customers are our top priority, we are
            curated to keep fostering solutions to individuals and businesses in
            the digital space over decades.
          </div>
        </div>
        <img
          className="md:w-[45%] md:h-[200px] lg:w-[500px] lg:h-[325px]"
          src="./Images/aboutimages/ourBus.png"
          alt="/"
        />
      </div>

      {/* OUR MISSION */}
      <div className="mb-[20%] mx-[5%] mt-[6%] md:flex md:flex-row-reverse md:gap-[15%] md:justify-center md:items-center lg:mx-[8%] lg:mb-[15%]">
        <div className="md:h-[150px] leading-5 lg:leading-7">
          <div className="font-semibold text-[20px] text-center md:text-left md:text-[17px] lg:text-[30px]">
            Our Mission
          </div>
          <br></br>
          <div className="text-justify text-[12px] mb-[25%] md:text-[10px] lg:text-[18px]">
            Our mission is to offer both individuals and businesses a
            trustworthy and secure platform for hassle-free telecom products,
            payment and card issuing, e-commerce, VTU, and business development
            solutions, as well as a range of digital services to develop
            capacity.
          </div>
        </div>
        <img
          className="md:w-[45%] md:h-[200px] lg:w-[500px] lg:h-[325px]"
          src="./Images/aboutimages/skyscrapper.png"
          alt="/"
        />
      </div>

      {/* OUR VALUES */}
      <div className=" md:flex md:flex-row-reverse md:ml-[%] leading-3 lg:flex lg:justify-center lg:items-center">
        <div className="mb-[20%] mx-[5%] mt-[6%] md:mt-[0%] lg:mb-[0%]">
          <div className="mb-[20%] font-semibold text-[20px] text-center md:hidden ">
            Our Values
          </div>

          <img
            className="w-[700px] h-[250px] lg:w-[1350px] lg:h-[440px]"
            src="./Images/aboutimages/skytop.png"
            alt="/"
          />
        </div>

        <div className=" lg:h-[420px] mx-[5%]">
          <div className="hidden font-semibold text-[20px] text-center md:text-[17px] md:block md:text-left md:mx-[5%] lg:block lg:text-[30px] lg:mb-10">
            Our Values
          </div>
          <br></br>
          <br></br>
          <div className="flex flex-col gap-[9px] mx-[5%] mb-[15%] text-center md:text-left md:flex md:flex-col md:gap-[5px] md:mb-[5%] lg:flex lg:flex-col lg:gap-[12px]">
            <div className="text-15px font-bold md:text-[10px] lg:text-[18px]">
              Efficiency
            </div>
            <div className="text-[10px] text-[#04177f] lg:text-[12px]">
              Swift and Automated.
            </div>
            <div className="leading-4 text-justify text-[10px] md:text-[6.95px] lg:text-[12px] lg:leading-4">
              One of our core value at AremxyPlug is efficiency. We prioritize
              our customers time, and pride ourselves with delivering swift and
              faultless results at all time.
            </div>
          </div>

          <div className="flex flex-col gap-[9px] mx-[5%] mb-[15%] text-center md:text-left md:flex md:flex-col md:gap-[5px] md:mb-[5%] lg:flex lg:flex-col lg:gap-[12px]">
            <div className="text-15px font-bold md:text-[10px] lg:text-[18px]">
              Security
            </div>
            <div className="text-[10px] text-[#04177f] lg:text-[12px]">
              Safe and Secure
            </div>
            <div className="leading-4 text-justify text-[10px]  md:text-[6.95px] lg:text-[12px] lg:leading-4">
              As a business solution provider, security is non negotiable. We
              have built the best platforms with impeccable security to protect
              our customers’ funds, information, and privacy.
            </div>
          </div>

          <div className="flex flex-col gap-[9px] mx-[5%] mb-[30%] text-center md:text-left md:flex md:flex-col md:gap-[5px] md:mb-[5%] lg:flex lg:flex-col lg:gap-[12px] lg:mb-[2%]">
            <div className="text-15px font-bold md:text-[10px] lg:text-[18px]">
              Transparency
            </div>
            <div className="text-[10px] text-[#04177f] lg:text-[12px]">
              Trusthworthy and Reliable.
            </div>
            <div className="leading-4 text-justify text-[10px]  md:text-[6.95px] lg:text-[12px] lg:leading-4">
              The heart of our core value is transparency. As a business, we
              ensure you obtain a clear information pertaining to the solutions
              we provide for your needs. What is business without trust?
              AremxyPlug is 100% devoted to rendering reliable services.
            </div>
          </div>
        </div>
      </div>

      {/* OUR TEAM */}
      <div className="lg:mt-[10%]">
        <div className="mx-[5%] lg:mx-[8%]">
          <div className="font-semibold text-[20px] text-center md:text-left lg:text-left lg:text-[30px]">
            Our Team
          </div>
          <br></br>
          <div className="leading-6 text-[12px] text-justify md:w-[50%] lg:w-[50%] lg:text-[18px] lg:leading-8">
            At AremxyPlug, we think that the success of our company is built on
            the strength of our team. We take great pride in having a skilled
            and experienced team of experts who are committed to giving our
            clients excellent services.
          </div>
        </div>
        <br></br>
        <br></br>
        <div className="mx-[5%] md:mx-[5%] lg:mx-[8%]">
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
            className="w-full flex gap-[10px] px-[20px]"
            customTransition="transform 1800ms ease-in-out"
          >
     
            {theProfileArray?.map((item)=> (
              <div className="flex gap-[30px] w-full overflow-hidden">
            <div
              className="w-[169px]  my-[5%]  pt-[10%] pb-[5%]
               shrink-0 flex flex-col gap-[6px] rounded-t-[34px]
                lg:w-[486px] lg:rounded-t-[100px]"
              style={{
                boxShadow: "0px 0px 7.84859px rgba(0, 0, 0, 0.25)",
              }}
            >
              <img
                className="z-50 h-[86px] w-[86x] mx-auto md:w-[143px] 
                rounded-full md:h-[143px] lg:w-[248px] lg:h-[248px]"
                src={item?.image}
                alt="/"
              />
              <div className="flex flex-col gap-[5px] bg-[#EEEBEB] mt-[-18%] pt-[16%] lg:gap-[15px]">
                <div className="font-semibold text-[9.42px] text-[#04177f] text-center md:text-[13px] lg:text-[24px]">
                 {item?.name}
                </div>
                <div className="font-semibold text-[9.42px] text-center md:text-[13px] lg:text-[24px]">
                  {item?.profession}
                </div>
                <div className="mb-[7%] text-[7.06px] text-justify w-[90%] mx-auto md:text-[10px] md:w-[80%] lg:text-[18px] lg:w-[421px] lg:leading-[30px]">
                  {item?.description}
                </div>
                <div className="flex justify-center items-center  bg-[#04177f] text-[#ffffff]
                 p-1 gap-[20px] lg:h-[64px] lg:text-5xl lg:gap-[15px]">
                
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
          </div>
            ))}
              
 </Carousel>
        </div>
      </div>
      <br></br>
      <div
        className=" mb-[10%] md:mb-[0%] flex ml-[5%] items-center gap-[2%] w-[15%] p-[1%] text-[12px] rounded-md md:text-[20px] md:w-[13%] lg:ml-[8%] lg:gap-[10%] lg:w-[10%]"
        style={{
          boxShadow: "0px 0px 7.84859px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Link to='/team' className="flex items-center gap-[20px]">
          More
          <AiOutlineArrowRight />
        </Link>
      </div>
      <br></br>
      <br></br>
      {/* OUR STORY */}
      <div className="mb-[20%] md:flex md:flex-row-reverse md:gap-[5%] md:mx-[5%] md:items-center lg:flex lg:justify-center lg:mx-[0] lg:mb-[] lg:items-center lg:gap-[10%] ">
        <div>
          <div className="font-semibold mb-[20%] text-[20px] text-center md:text-[17px] md:hidden lg:text-[30px]">
            Our Story
          </div>
          <div className="flex mx-[8%] gap-[5%] justify-center lg:mx-[0]">
            <img
              className="w-[50%] mb-[40%] md:w-[40%] lg:w-[267px]"
              src="./Images/aboutimages/story1.png"
              alt="/"
            />
            <img
              className="w-[50%] mt-[40%] md:w-[40%] lg:w-[267px]"
              src="./Images/aboutimages/story2.png"
              alt="/"
            />
          </div>
        </div>

        <div className="mt-[15%] md:mt-[10%] lg:mt-[12%]">
          <div className="font-semibold hidden md:flex mb-[10%] text-[20px] text-center md:text-[17px] md:mb-[3%] md:mx-[%] lg:text-[30px]">
            Our Story
          </div>
          <div className="text-[12px] mx-[5%] text-justify md:text-[10px] md:mx-[0] md:w-[281px] lg:text-[18px] lg:w-[486px] lg:mx-[]">
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
          </div>
        </div>
      </div>

      {/* WHY CHOOSE US? */}
      <div className="flex flex-col bg-[#04177F] text-[#ffffff] px-[5%] py-[15%] gap-[30px] md:py-[8%] lg:py-[8%] lg:px-[8%]">
        <div>
          <p className="mb-[5%] text-[20px] font-semibold text-center md:text-[26px] lg:text-[45px]">
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
            <p className="text-[20px] font-semibold text-center md:text-left md:text-[14px] md:mb-[5%] lg:text-[24px]">
              Reliable
            </p>
            <div className="text-[12px] text-center w-[95%] md:w-[200px] md:text-[10px] md:text-justify lg:text-[16px] lg:w-[100%]">
              We use technology to provide business solutions that open up new
              possibilities, and enhance company's productivity.
            </div>
          </div>
          <div className="mb-[20px]">
            <p className="text-[20px] font-semibold text-center md:text-left md:text-[14px] md:mb-[5%] lg:text-[24px]">
              Trusted
            </p>
            <div className="text-[12px] text-center w-[95%] md:text-justify md:w-[200px] md:text-[10px] lg:text-[16px] lg:w-[100%]">
              We built reputation as a trusted service provider to deliver
              high-quality services with honesty, integrity, and transparency.
            </div>
          </div>
          <div>
            <p className="text-[20px] font-semibold text-center md:text-left md:text-[14px] md:mb-[5%] lg:text-[24px]">
              Affordable
            </p>
            <div className="text-[12px] text-center w-[95%] md:text-justify md:w-[200px] md:text-[10px] lg:text-[16px] lg:w-[100%]">
              We offer competitive and affordable pricing to ensure that our
              services are accessible to everyone.
            </div>
          </div>
          <div>
            <p className="hidden md:block lg:block text-[20px] font-semibold text-center md:text-left md:text-[14px] md:mb-[5%] lg:text-[24px]">
              Swift 24/7 Delivery
            </p>
            <div className="hidden md:block lg:block text-[12px] text-center w-[95%] md:text-justify md:w-[200px] md:text-[10px] lg:text-[16px] lg:w-[100%] ">
              We offer swift 24/7 delivery to ensure that your needs are met
              promptly and efficiently.
            </div>
          </div>
          <div>
            <p className="hidden md:block lg:block text-[20px] font-semibold text-center md:text-left md:text-[14px] md:mb-[5%] lg:text-[24px]">
              Secure and Automated
            </p>
            <div className="hidden md:block lg:block text-[12px] text-center w-[95%] md:text-justify md:w-[200px] md:text-[10px] lg:text-[16px] lg:w-[100%]">
              We use the latest security protocols and technologies to protect
              your data and information.
            </div>
          </div>
          <div>
            <p className="hidden md:block lg:block text-[20px] font-semibold text-center md:text-left md:text-[14px] md:mb-[5%] lg:text-[24px]">
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
              <p className="text-[20px] font-semibold text-center">
                Swift 24/7 Delivery
              </p>
              <div className="text-[12px] text-center w-[95%]">
                We offer swift 24/7 delivery to ensure that your needs are met
                promptly and efficiently.
              </div>
            </div>
            <div>
              <p className="text-[20px] font-semibold text-center">
                Secure and Automated
              </p>
              <div className="text-[12px] text-center w-[95%]">
                We use the latest security protocols and technologies to protect
                your data and information.
              </div>
            </div>
            <div>
              <p className="text-[20px] font-semibold text-center">
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

      {/* OUR SOLUTION */}
      <div className="mt-[15%] mb-[15%] md:flex md:flex-row-reverse md:justify-center md:items-center lg:mt-[12%] lg:ml-[5%] lg:gap-[%]">
        <div className="font-semibold text-[20px] text-center md:hidden">
          Our Solution
        </div>
        <div>
          <img
            className="w-[80%] mx-auto mt-[10%] md:w-[70%] lg:w-[60%] lg:mr-[8%]"
            src="./Images/aboutimages/solution1.png"
            alt="/"
          />
        </div>
        <div>
          <div className="font-semibold hidden text-[20px] text-center md:block md:text-[20px] md:text-left md:mx-[8%] lg:text-[30px]">
            Our Solution
          </div>
          <img
            className="mt-[10%] mx-[5%] w-[90%] md:mt-[5%] lg:h-[900px] lg:ml-[8%] lg:w-[100%]"
            src="/Images/aboutimages/copy.png"
            alt="/"
          />
        </div>
      </div>

      {/* OUR PRODUCT */}
      <div className="md:flex md:flex-row md:mx-[5%] md:gap-[10%] md:justify-center md:items-center">
        <div className="font-semibold text-[20px] text-center md:hidden">
          Our Product
        </div>
        <div>
          <img
            className="w-[90%] mx-auto mt-[10%]"
            src="./Images/aboutimages/solution2.png"
            alt="/"
          />
        </div>
        <div>
          <div className="font-semibold hidden text-[31px] text-center md:block md:text-[20px] md:text-left md:ml-[8%] lg:ml-[0] lg:text-[30px]">
            Our Product
          </div>
          <img
            className="mt-[10%] w-[90%] mx-auto md:w-[80%] md:mt-[5%] lg:w-[95%] lg:mr-[5%]"
            src="./Images/aboutimages/producttext.png"
            alt="/"
          />
        </div>
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
    </>
  );
};

// #04177f
