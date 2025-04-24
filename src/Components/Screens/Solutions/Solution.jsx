import React from "react";
import { Link } from "react-router-dom";

export const Solution = () => {
  return (
    <div className="mx-[5%] lg:mx-[8%]">
      {/* SOLUTIONS */}
      <div className="mb-[30%] md:flex md:justify-center md:items-center md:gap-[150px] md:mb-[20%]">
        <div className="pt-[15%] lg:pt-[5%]">
          <div className="mb-[5%] font-semibold text-[25px] text-[#04177f] text-semibold md:text-[26.6px] lg:text-[45px]">
            Solutions
          </div>

          <div className="text-[12px] text-justify mb-[20%] md:w-[290px] md:text-[10px] lg:text-[18px] lg:w-[500px]">
            We provide a variety of affordable and automated telecommunications
            and digital services that can be customized to fit your company's
            needs. Our services are designed to deliver outstanding results for
            individuals and businesses. To provide you with the best services
            for your digital needs, our team at AremxyPlug are made up of a
            variety of people who share traits of resilience and problem-solving
            skills.
          </div>
        </div>
        <div>
          <img
            className=" w-[80%] mx-auto md:w-[283px] md:h-[290px] lg:h-[500px] lg:w-[489.67px]"
            src="./Images/solutionImages/solutionImg.png"
            alt="/"
          />
        </div>
      </div>

      {/* WELCOME TO AREMZY PLUG */}
      <div id="baas" className="mb-[30%] md:flex md:flex-row-reverse md:justify-center md:items-center md:gap-[80px] md:mb-[20%]">
        <div>
          <div className="text-[20px] font-semibold md:text-[26px] md:w-[330px] lg:text-[45px] lg:w-[562px]">
            Welcome to AremxyPlug
          </div>
          <br></br>
          <div className="text-[12px] text-justify md:w-[335px] md:text-[10px] lg:text-[18px] lg:w-[573px]">
            Our solutions are focused and curated to help both individuals and
            businesses in the digital space. With our focus oriented solutions,
            we can help you to transform your vision and dreams in the digital
            space without any hassle.
          </div>
        </div>
        <img
          className="w-[80%] mx-auto my-[25%] md:h-[247px] md:w-[301px] md:my-[0] lg:h-[421px] lg:w-[514px]"
          src="./Images/solutionImages/solutionImg2.png"
          alt="/"
        />
      </div>

      {/* BAAS & SAAS */}
      <div className="mb-[25%] md:flex md:mb-[15%] md:gap-[25%]">
        <div className="mb-[25%] flex flex-col gap-[15px] lg:gap-[20px] md:mb-[0]">
          <div className="text-[20px] font-semibold text-center md:text-left lg:text-[30px]">
            Baas (Banking as a services)
          </div>
          <img
            className=" mx-auto w-[60px] h-[60px] md:mx-[0] lg:w-[100px] lg:h-[100px]"
            src="./Images/solutionImages/ba1.png"
            alt="/"
          />
          <div className="text-[12px] text-justify md:w-[273px] lg:w-[456px] lg:text-[18px]">
            For your business needs, we offer both local and international money
            transfers. Send and receive money globally, cater for your business,
            freelance, or personal use. We provide significant cost savings with
            the best exchange rates available with no additional fees or hidden
            commissions.
          </div>
        </div>
        <div id="saas" className="flex flex-col gap-[15px] lg:gap-[20px]">
          <div className="text-[20px] font-semibold text-center md:text-left lg:text-[30px]">
            Saas (Software as a services)
          </div>
          <img
            className="mx-auto w-[60px] h-[60px] md:mx-[0] lg:w-[100px] lg:h-[100px]"
            src="./Images/solutionImages/ba2.png"
            alt="/"
          />
          <div className="text-[12px] text-justify md:w-[273px] lg:w-[456px] lg:text-[18px]">
            Our VTU Development solutions are reliable SaaS provided to
            accelerate your business. Software as a Service from AremxyPlug
            enables a consistent revenue stream and offers much better business
            planning capabilities. 
          </div>
        </div>
      </div>

      {/* BUSINESSED AND INDIVIDUALS */}
      <div className="md:flex mb-[25%] md:mb-[20%] md:gap-[25%]">
        <div id="businesses" className="mb-[25%] flex flex-col gap-[15px] lg:gap-[20px] md:mb-[0]">
          <div className="text-[20px] font-semibold text-center md:text-left lg:text-[30px]">
            Businesses
          </div>
          <img
            className=" mx-auto w-[60px] h-[60px] md:mx-[0] lg:w-[100px] lg:h-[100px]"
            src="./Images/solutionImages/ba3.png"
            alt="/"
          />
          <div className="text-[12px] text-justify md:w-[273px] lg:w-[456px] lg:text-[18px]">
            AremxyPlug has an array of Telecom, Payments, and Digital service
            solutions curated to ensure your business is recognized as one of
            the best. AremxyPlug as a company engages in professional,
            commercial, and industrial business activities.
          </div>
        </div>
        <div id="individual" className="flex flex-col gap-[15px]">
          <div className="text-[20px] font-semibold text-center md:text-left lg:text-[30px]">
            Individuals
          </div>
          <img
            className="mx-auto w-[60px] h-[60px] md:mx-[0] lg:w-[100px] lg:h-[100px]"
            src="./Images/solutionImages/ba4.png"
            alt="/"
          />
          <div className="text-[12px] text-justify md:w-[273px] lg:w-[456px] lg:text-[18px]">
            Get professional assistance with the problems and opportunities that
            your business is facing. Engage with our team of experts for the
            best business solution. With our cutting-edge technology and
            innovative strategies, we can help you unlock your business full
            potential and achieve success beyond your wildest dreams. 
          </div>
        </div>
      </div>

      {/* ECOMMERCE */}
      <div id="ecommerce" className="bg-[#ffcc8997] mb-[30%] mx-[-6%] py-[10%] md:mb-[20%] md:flex md:justify-center md:items-center lg:mx-[-10%] lg:px-[5%] lg:py-[5%]">
        <img
          className="mb-[10%] h-[240px] w-[237px] mx-auto md:mb-[0] lg:w-[395px] lg:h-[400px]"
          src="./Images/solutionImages/Image.png"
          alt="/"
        />
        <div className="mx-[5%]">
          <div className="text-[30px] text-center font-bold text-[#b200ff] mb-[5%] md:text-left lg:text-[64px] lg:font-bold">
            Ecommerce
          </div>
          <div className="text-[18px] text-justify md:w-[433px] md:text-[11px] lg:text-[18px] lg:w-[696px]">
            For all of your e-commerce platform development requirements,
            AremxyPlug has solutions. Since its inception, online sales have
            undergone a great deal of change; e-commerce is fascinating and is
            currently developing at an even faster rate. Set up payment
            procedures and hire experts to help you build and promote your
            product from AremxyPlug.
          </div>
        </div>
      </div>

      {/* COLLECT & PURCHASE */}
      <div className="mb-[25%] md:flex md:mb-[15%] md:gap-[25%]">
        <div id="collect" className="mb-[25%] flex flex-col gap-[15px] lg:gap-[20px] md:mb-[0]">
          <div className="text-[20px] font-semibold text-center md:text-left lg:text-[30px]">
            Collect
          </div>
          <img
            className=" mx-auto w-[60px] h-[60px] md:mx-[0] lg:w-[100px] lg:h-[100px]"
            src="./Images/solutionImages/ba5.png"
            alt="/"
          />
          <div className="text-[12px] text-justify md:w-[273px] lg:w-[456px] lg:text-[18px]">
            Receive payment with AremxyPlug globally, without unnecessary
            charges or network inconveniences. AremxyPlug makes it easy to
            receive payments from anyone, anywhere. Plus our competitive
            exchange rates and low fees, you can keep more of your hard-earned
            money in your pocket.
          </div>
        </div>
        <div id="purchase" className="flex flex-col gap-[15px] lg:gap-[20px]">
          <div className="text-[20px] font-semibold text-center md:text-left lg:text-[30px]">
            Purchase
          </div>
          <img
            className="mx-auto w-[60px] h-[60px] md:mx-[0] lg:w-[100px] lg:h-[100px]"
            src="./Images/solutionImages/ba6.png"
            alt="/"
          />
          <div className="text-[12px] text-justify md:w-[273px] lg:w-[456px] lg:text-[18px]">
            You can make purchases online and offline without being worried.
            Thanks to our payment solutions. You can send money to friends and
            family anywhere in the world. Purchase all our telecom products with
            ease and automated, using your virtual cards to pay bills, and make
            purchases online, and in-store without any hassle. 
          </div>
        </div>
      </div>

      {/* AUTOMATE & TRANSFER */}
      <div id="automate" className="md:flex mb-[25%] md:mb-[20%] md:gap-[25%]">
        <div className="mb-[25%] flex flex-col gap-[15px] lg:gap-[20px] md:mb-[0]">
          <div className="text-[20px] font-semibold text-center md:text-left lg:text-[30px]">
            Automate
          </div>
          <img
            className=" mx-auto w-[60px] h-[60px] md:mx-[0] lg:w-[100px] lg:h-[100px]"
            src="./Images/solutionImages/ba7.png"
            alt="/"
          />
          <div className="text-[12px] text-justify md:w-[273px] lg:w-[456px] lg:text-[18px]">
            Breaking into wealth begins when your capacity to earn is not
            directly tied to your time. How is this possible? With automation!
            AremxyPlug automate solution can help you to fully automate your
            business, which will multiply your earning power, while giving you
            time to pursue other endeavours. 
          </div>
        </div>
        <div id="transfer" className="flex flex-col gap-[15px]">
          <div className="text-[20px] font-semibold text-center md:text-left lg:text-[30px]">
            Transfer
          </div>
          <img
            className="mx-auto w-[60px] h-[60px] md:mx-[0] lg:w-[100px] lg:h-[100px]"
            src="./Images/solutionImages/ba8.png"
            alt="/"
          />
          <div className="text-[12px] text-justify md:w-[273px] lg:w-[456px] lg:text-[18px]">
            Breakthrough currency barriers while performing seamless
            transactions with AremxyPlug. Whether you're looking to send money
            to family and friends abroad, pay international suppliers, or
            receive payments from overseas customers, our platform ensures that
            you can do so quickly, securely, and at a competitive exchange
            rate. 
          </div>
        </div>
      </div>

      {/* CONVERT */}
      <div id="convert" className="bg-[#0CBC8B] mb-[30%] mx-[-6%] py-[10%] md:mb-[20%] md:flex md:justify-center md:items-center lg:mx-[-10%] lg:px-[5%] lg:py-[5%]">
        <img
          className="mb-[10%] h-[240px] w-[237px] mx-auto md:mb-[0] lg:w-[395px] lg:h-[400px]"
          src="./Images/solutionImages/Image2.png"
          alt="/"
        />
        <div className="mx-[5%]">
          <div className="text-[30px] text-center font-bold text-[#b200ff] mb-[5%] md:text-left lg:text-[64px] lg:font-bold">
            Convert
          </div>
          <div className="text-[18px] text-justify md:w-[433px] md:text-[11px] lg:text-[18px] lg:w-[696px]">
            The most affordable, efficient, and trustworthy method of converting
            multiple currency and airtime to your preferred currency is offered
            on our platform. Our conversion system is backed by our team of
            experts who are dedicated to providing you with the best services
            possible without any hassle.
          </div>
        </div>
      </div>
      
      {/* LAST SECTION */}
      <div
        className="mb-[25%] w-[100%] rounded-xl h-[254px] flex flex-col gap-[40px] md:gap-[0px] md:w-[648px] md:h-[135px] md:mx-auto lg:w-[100%] lg:h-[227px] lg:gap-[50px] md:mb-[15%]"
        style={{ boxShadow: "0px 0px 11.5833px rgba(0, 0, 0, 0.25)" }}
      >
        <div className="text-[10px] text-center w-[294px] h-[97px] mx-auto pt-[10%] md:text-[10px] md:pt-[3%] md:w-[584px] lg:text-[18px] lg:w-[1009px] lg:h-[81px]">
          Our solutions are design with a cutting-edge technology in the digital
          space for telecom, payments, and digital services. Get in touch with
          us today, we have all the solutions you need to grow your business as
          an individual or company, let help you to increase your revenue!
        </div>
        <Link to="/ContactUs"><div className="bg-[#04177f] text-[#ffffff] h-[26px] w-[95px] text-[7px] mx-auto rounded-md flex justify-center items-center lg:w-[165px] lg:h-[45px] lg:text-[12px]">
          Contact sales
        </div></Link>
      </div>
    </div>
  );
};

// #04177f
// #ffcb89
