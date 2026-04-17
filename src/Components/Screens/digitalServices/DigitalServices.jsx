import React from "react";
import { primaryColor } from "../cardIssuing/cardIssuing";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
function DigitalServices() {

  // Digital Services
  const marketingServices = [
  {
    title: "Content Marketing",
    description: "Content marketing is a powerful tool for businesses looking to connect with their audience and drive engagement.",
    image: "./Images/digitalServices/contentMarketing.avif",
    link: "/content-marketing",
    side: "left"
  },
  {
    title: "Social Media Marketing",
    description: "Social media marketing can be an effective way to reach a wide audience and build brand awareness.",
    image: "./Images/digitalServices/Socialmediamarketing.avif",
    link: "/social-media-marketing",
    side: "right"
  },
  {
    title: "SEO Marketing",
    description: "SEO is the practice of optimizing your website and its content to improve its visibility and ranking on search engine results pages.",
    image: "./Images/digitalServices/SEO.avif",
    link: "/seo-marketing",
    side: "left"
  },
  {
    title: "Email Marketing",
    description: "Your business needs an email marketing strategy that boost sales and create a bond with your customers.",
    image: "./Images/digitalServices/emailMarketing.avif",
    link: "/EmailMarketing",
    side: "right"
  },
  {
    title: "Product Design",
    description: "Product design is the process of identifying a market opportunity, clearly defining the problem, and validating the solution.",
    image: "./Images/digitalServices/productDesign.avif",
    link: "/ProductDesign",
    side: "left"
  },
  {
    title: "Graphic Design",
    description: "Graphic design is the creation of visual compositions to solve problems and communicate ideas through typography and imagery.",
    image: "./Images/digitalServices/graphicDesign.avif",
    link: "/GraphicDesign",
    side: "right"
  }
];
  return (
    <div>
      {/* digitalServicesBG1 */}

      <div className="overflow-hidden h-[950px] sm:h-[1100px] md:h-[570px] lg:h-[600px]
       xl:h-[650px] 2xl:h-[900px]  mt-[-200px] md:mt-[-150px]  lg:mt-[-200px] w-full ">
        <div
          className="absolute w-full mt-[250px] md:mt-[180px] lg:mt-[230px] grid lg:grid-cols-2 
          lg:gap-x-4 gap-x-15 md:grid-cols-2 md:gap-x-4 grid-cols-1 gap-y-4 lg:px-[8%] px-[5%]">
          <div className=" py-4 sm:py-6 w-full flex flex-col gap-10 lg:py-8 md:py-6">
            <h1 className="text-[30px] leading-[40px]   font-bold md:text-left text-center 
    md:text-[26px] lg:text-[50px]  lg:leading-[60px] 
           text-[#04177F]"
              style={{
                color: primaryColor,
              }}
            >
              Digital Services
            </h1>
            <p className="text-[14px] md:text-left text-center font-bold text-black leading-[20px] 
      md:text-[11px] lg:text-[16px] lg:leading-[26px] opacity-80">
              We offer a variety of digital services that can be customized to
              fit your company's needs. Our services are affordable and designed
              to deliver outstanding results for your company. Our digital
              experts are devoted to developing your business and catering to
              your digital needs.
            </p>

        
              <Link className='w-full md:w-[197px] px-2 bg-primary text-[14px] leading-[18px]
              font-bold  text-white  py-[16px]  text-center
         rounded-[7px]  lg:text-[14px] lg:leading-[16px]' to="/contactUs">
                Contact Us
              </Link>
            
          </div>

          <div className="rounded-lg flex flex-col items-center  md:block ">
            <img
              src="./Images/digitalServices/digitalServicesImage2.avif"
              alt="background_image"
              className="w-[90%]  md:float-right"
            />
          </div>
        </div>

        {/* TAB AND DESKTOP BACKGROUND IMAGES */}
        <div
          className="hidden md:block h-[800px] w-[90%] lg:bg-right lg:h-[600px] md:w-[65%] lg:w-[65%]  bg-contain bg-no-repeat "
          style={{
            backgroundImage:
              "url(./Images/digitalServices/digitalServicesBG1.avif)",
            float: "right",
          }}
        ></div>
        {/* MOBILE BACKGROUND IMAGE */}
        <div
          className="md:hidden h-[600px] w-[90%] bg-contain bg-right bg-no-repeat"
          style={{
            backgroundImage:
              "url(./Images/digitalServices/digitalServicesBG2.png)",
            float: "right",
          }}
        ></div>
      </div>
{/* NEW */}
<div className="md:mt-[50px] lg:px-[8%] px-[5%] relative overflow-hidden">
  
  {/* Background Decoration */}
  <div 
    className="absolute bottom-0 left-0 h-[600px] w-full md:w-[65%] bg-contain bg-no-repeat opacity-30 pointer-events-none"
    style={{ 
      backgroundImage: "url(./Images/digitalServices/digitalServicesBG3.avif)",
      zIndex: -1 
    }}
  />

  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-y-0">
    {marketingServices.map((service, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, x: service.side === "left" ? -100 : 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`flex flex-col items-center p-4 md:p-10 
          ${service.side === "left" 
            ? "md:border-r md:border-gray-300 md:pr-[40px]" 
            : "md:border-l md:border-zinc-600 md:pl-[40px]"} 
          border-b md:border-b-0 border-gray-100 last:border-b-0`}
      >
        {/* Marketing Image */}
        <motion.img
          whileHover={{ scale: 1.05 }}
          src={service.image}
          alt={service.title}
          className="w-[90%] md:w-full h-auto object-contain mb-8"
        />

        {/* Text Window Card */}
        <div className="w-full p-6 lg:p-8 bg-[#dce4ff] rounded-lg lg:rounded-2xl flex
         flex-col justify-between h-[280px] md:h-[250px] lg:h-[300px] shadow-sm hover:shadow-md transition-shadow">
          <div className="w-full">
            <h3 className="text-[20px] leading-[30px]
       font-extrabold  lg:text-[24px] text-black">
              {service.title}
            </h3>
            <p className="text-[14px] text-left font-medium text-black leading-[20px] 
      md:text-[11px] lg:text-[16px] lg:leading-[26px]">
              {service.description}
            </p>
          </div>

          <Link to={service.link} className='w-full md:w-[197px] px-2 bg-primary text-[14x] leading-[18px]
              font-bold  text-white  py-[16px]  text-center
         rounded-md  lg:text-[14px] lg:leading-[16px]'>
             Explore
          </Link>
        </div>
      </motion.div>
    ))}
  </div>
</div>


    </div>
  );
}

export default DigitalServices;
