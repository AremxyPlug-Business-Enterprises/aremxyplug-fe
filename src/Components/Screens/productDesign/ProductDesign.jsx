import React from "react";
import Bluebutton from "../../bluebutton/Bluebutton";
import { primaryColor } from "../cardIssuing/cardIssuing";
import "./ProductDesign.css";
import { Link } from "react-router-dom";
function ProductDesign() {
  return (
    <>
      <div
        className="bg-contain bg-top bg-no-repeat  mt-[-130px] md:mt-[-170px] lg:mt-[-200px]"
        style={{
          backgroundImage: "url(./Images/product_design/productDesignBg2.png)",
        }}
      >
        {/* header bg */}
        <div
          className=" mt-[40px] md:mt-[50px] lg:mt-[80px] grid lg:grid-cols-2 lg:gap-x-4  md:grid-cols-2 md:gap-x-4    
       grid-cols-1 gap-y-4 
       lg:px-[8%] px-[5%] 
        "
        >
          <div
            className=" pt-4 sm:py-6  lg:py-8 md:py-6   mt-[150px] md:mt-[150px] lg:mt-[180px]
     
          "
          >
            <p
              className="text-[20px]  md:text-[26.06px] lg:text-[45px] font-bold lg:tracking-wider  "
              style={{
                color: primaryColor,
              }}
            >
              Product Design
            </p>
            <p className="text-[#000] text-justify text-[10.53px] md:text-[12px] lg:text-lg mt-4 sm:mt-6 md:mt-10  lg:mt-12 ">
              Product design is the process of identifying a market opportunity,
              clearly defining the problem, and validating the solution with
              real user interfaces. Our experts are skilled in designing
              user-centered products that are visually appealing, easy to use,
              and provide seamless interactions across various platforms.
            </p>
            <div className="mt-6">
              <Link to="/ContactUs">
                <Bluebutton text="Contact Sales" />
              </Link>
            </div>
          </div>
          {/* MAN IN SUIT */}
          <div className="rounded-lg flex flex-col items-center  md:block md:mt-[150px] lg:mt-[180px]">
            <img
              src="./Images/product_design/manInSuitImage.png"
              alt="background_image "
              className="w-[100%]   "
            />
          </div>
        </div>

        {/*  Experience a well-designed captivating products.*/}
        <div
          className="  lg:px-[8%] px-[5%] 
     "
        >
          <div className="grid grid-cols-1  md:grid-cols-5 ">
            <div className="md:col-span-3 ">
              {/* class="text-[20px] leading-[30px] font-bold mx-auto text-center                  w-[80%] md:px-0 md:text-left md:mx-0 md:w-full lg:text-[30px] lg:w-[70%] " */}
              <p
                className="text-[15px] md:text-[13.9px] lg:text-[24px] font-bold lg:tracking-wider  "
                style={{
                  color: "#000",
                }}
              >
                Experience a well-designed captivating products.
              </p>
              <p className="text-[#000] text-justify text-[12px] md:text-[9.34px] lg:text-lg mt-[14px] lg:mt-[25px] ">
                Product design is a combination of improving the aesthetics of a
                product, its functionality, and its performance. Below are some
                key functions where product design could add value to your
                business growth:
              </p>
            </div>
          </div>
        </div>

        <div
          className="bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(./Images/product_design/gradientBackground1.png)",
          }}
        >
          {/*  Visual Appealing*/}
          <div
            className=" grid  lg:gap-x-4 md:grid-cols-2 lg:grid-cols-5 md:gap-x-4    
    grid-cols-1 gap-y-4 
    lg:px-[8%] px-[5%] mt-[50px]  md:mt-[80px] lg:mt-[100px]
     "
          >
            <div className=" py-4 sm:py-6  lg:py-8 md:py-6 lg:col-span-3 ">
              <p
                className="text-[15px] md:text-[13.9px] lg:text-[24px] font-bold lg:tracking-wider  "
                style={{
                  color: "#000",
                }}
              >
                Visual Appealing
              </p>
              <p className="text-[#000] text-justify text-[12px] md:text-[9.34px] lg:text-lg mt-[14px] lg:mt-[25px]">
                Improve the sale-ability of your product by modernizing its
                design, and increasing its appeal to your target market. You are
                a lot more likely to establish a long-lasting relationship with
                customers if they can relate to your website, which is obviously
                the ultimate goal.
              </p>
            </div>

            <div
              // className="rounded-lg flex flex-col items-center  md:block lg:col-span-2"
              className="  h-[350px] md:h-[unset]  bg-contain bg-center bg-no-repeat lg:col-span-2"
              style={{
                backgroundImage:
                  "url(./Images/product_design/visualAppealingImage.png)",
              }}
            ></div>
          </div>

          {/*   Improved Performance*/}

          <div
            className="grid  xl:gap-x-4  md:grid-cols-2 md:gap-x-4    
        grid-cols-1 gap-y-4 
        lg:px-[8%] px-[5%]  mt-[50px]  md:mt-[80px] lg:mt-[100px] 
       
     "
          >
            {/* Background image */}
            <div
              className="row-start-2 md:row-start-1 h-[350px] md:h-[unset]  bg-contain bg-center bg-no-repeat"
              style={{
                backgroundImage:
                  "url(./Images/product_design/improvedPerformanceImage.png)",
              }}
            ></div>

            <div className=" py-4 sm:py-6  lg:py-8 md:py-6  ">
              {/* Text content 1 */}
              <div>
                <p
                  className="text-[15px] md:text-[13.9px] lg:text-[24px] font-bold lg:tracking-wider  "
                  style={{
                    color: "#000",
                  }}
                >
                  Improved Performance
                </p>
                <p className="text-[#000] text-justify text-[12px] md:text-[9.34px] lg:text-lg mt-[14px] lg:mt-[25px] ">
                  A high-performing product provides an edge over your
                  competitors. In order to prevent any challenges during the
                  development process, our experts will carefully review your
                  product to improve its performance for a user-friendly use.
                </p>
              </div>
            </div>
          </div>

          {/* Flexibility and Scalability*/}

          <div
            className=" grid  lg:gap-x-4  md:grid-cols-2  xl:gap-x-4    
        grid-cols-1 gap-y-4 
        lg:px-[8%] px-[5%]  mt-[50px]  md:mt-[80px] lg:mt-[100px] 
       
     "
          >
            <div className=" py-4 sm:py-6  lg:py-8 md:py-6  ">
              {/* Text content 1 */}
              <div>
                <p
                  className="text-[15px] md:text-[13.9px] lg:text-[24px] font-bold lg:tracking-wider  "
                  style={{
                    color: "#000",
                  }}
                >
                  Flexibility and Scalability
                </p>
                <p className="text-[#000] text-justify text-[12px] md:text-[9.34px] lg:text-lg mt-[14px] lg:mt-[25px] ">
                  Being able to quickly adapt to a changing environment is
                  essential for remaining afloat and staying one step ahead of
                  your rivals. We offer a variety of creative solutions that
                  tailored to your product perspectives with designs.
                </p>
              </div>
            </div>

            {/* Background image */}
            <div
              className=" h-[350px] md:h-[unset]  bg-contain bg-center bg-no-repeat"
              style={{
                backgroundImage:
                  "url(./Images/product_design/flexibilityImage.png)",
              }}
            ></div>
          </div>

          {/*     Increase sales */}

          <div
            className="grid  xl:gap-x-4  md:grid-cols-2 md:gap-x-4    
        grid-cols-1 gap-y-4 
        lg:px-[8%] px-[5%]  mt-[50px]  md:mt-[80px] lg:mt-[100px] 
       
     "
          >
            {/* Background image */}
            <div
              className="row-start-2 md:row-start-1 h-[350px] md:h-[unset]  bg-contain bg-center bg-no-repeat"
              style={{
                backgroundImage:
                  "url(./Images/product_design/increaseSalesImage.png)",
              }}
            ></div>

            <div className=" py-4 sm:py-6  lg:py-8 md:py-6  ">
              {/* Text content 1 */}
              <div>
                <p
                  className="text-[15px] md:text-[13.9px] lg:text-[24px] font-bold lg:tracking-wider  "
                  style={{
                    color: "#000",
                  }}
                >
                  Increase Sales
                </p>
                <p className="text-[#000] text-justify text-[12px] md:text-[9.34px] lg:text-lg mt-[14px] lg:mt-[25px] ">
                  Customers are frequently willing to pay more for products that
                  are well-designed and offer better usability, functionality,
                  and a pleasant visual experience. This result in increasing
                  sales, raising your brand credibility, and differentiates your
                  brand from your competitors.
                </p>
              </div>
            </div>
          </div>

          {/*     Influences Customer Behavior*/}

          <div
            className=" grid  lg:gap-x-4  md:grid-cols-2  xl:gap-x-4    
        grid-cols-1 gap-y-4 
        lg:px-[8%] px-[5%]  mt-[50px]  md:mt-[80px] lg:mt-[100px] 
       
     "
          >
            <div className=" py-4 sm:py-6  lg:py-8 md:py-6  ">
              {/* Text content 1 */}
              <div>
                <p
                  className="text-[15px] md:text-[13.9px] lg:text-[24px] font-bold lg:tracking-wider  "
                  style={{
                    color: "#000",
                  }}
                >
                  Influences Customer Behavior
                </p>
                <p className="text-[#000] text-justify text-[12px] md:text-[9.34px] lg:text-lg mt-[14px] lg:mt-[25px] ">
                  It is well known that product design has a significant impact
                  on customers behavior. Brands that make greater design
                  investments in their products and involve or include their
                  customers in the design process are likely to see a much
                  higher return on investment.
                </p>
              </div>
            </div>

            {/* Background image */}
            <div
              className=" h-[350px] md:h-[unset]  bg-contain bg-center bg-no-repeat"
              style={{
                backgroundImage:
                  "url(./Images/product_design/influenceImage.png)",
              }}
            ></div>
          </div>

          {/*     Lower costs */}

          <div
            className=" grid  lg:gap-x-4  md:grid-cols-2  xl:gap-x-4    
        grid-cols-1 gap-y-4 
        lg:px-[8%] px-[5%]  mt-[50px]  md:mt-[80px] lg:mt-[100px] 
       
     "
          >
            {/* Background image */}
            <div
              className="row-start-2 md:row-start-1 h-[350px] md:h-[unset]  bg-contain bg-center bg-no-repeat"
              style={{
                backgroundImage:
                  "url(./Images/product_design/lowerCostImage.png)",
              }}
            ></div>

            <div className=" py-4 sm:py-6  lg:py-8 md:py-6  ">
              {/* Text content 1 */}
              <div>
                <p
                  className="text-[15px] md:text-[13.9px] lg:text-[24px] font-bold lg:tracking-wider  "
                  style={{
                    color: "#000",
                  }}
                >
                  Lower Costs
                </p>
                <p className="text-[#000] text-justify text-[12px] md:text-[9.34px] lg:text-lg mt-[14px] lg:mt-[25px] ">
                  The ability to spend less on advertising to attract new
                  customers is a crucial component of product design. Your
                  budget may be used in other areas if you know how to make your
                  process with more affordable and effective product
                  materials.s.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Key Features */}
        <div className=" my-[50px] md:my-[70px]">
          <p
            className="text-[30px] font-bold md:text-[18.16px] lg:text-[32px] text-center pt-[50px]
           "
            style={{
              color: primaryColor,
            }}
          >
            Our Key Features
          </p>

          <div
            className="grid  md:grid-cols-2 md:gap-x-12    
        grid-cols-1 gap-y-4 
        lg:px-[8%] px-[5%]  mt-[10px]  md:mt-[30px] lg:mt-[50px] 
       
     "
          >
            <div className="row-start-2 md:row-start-1 py-4 sm:py-6  lg:py-8 md:py-6  ">
              {/* Text content 1 */}
              <div className="mb-[20px] md:mb-[35px]">
                <p
                  className="text-[15px] md:text-[10.42px] lg:text-lg font-bold lg:tracking-wider  "
                  style={{
                    color: "#000",
                  }}
                >
                  Ideation and Conceptualization
                </p>
                <p className="text-[#000] text-justify text-[12px] md:text-[9.34px] lg:text-lg mt-[5px] md:mt-[10px]   lg:mt-[15px] ">
                  Help you to collaborate with businesses to generate innovative
                  product ideas and conceptualize your product design.
                </p>
              </div>

              {/* Text content 2 */}
              <div className="mb-[20px] md:mb-[35px]">
                <p
                  className="text-[15px] md:text-[10.42px] lg:text-lg font-bold lg:tracking-wider  "
                  style={{
                    color: "#000",
                  }}
                >
                  Prototyping and Wireframing
                </p>
                <p className="text-[#000] text-justify text-[12px] md:text-[9.34px] lg:text-lg mt-[5px] md:mt-[10px]   lg:mt-[15px]  ">
                  Creating of prototypes and wireframes to visualize and refine
                  your product design.
                </p>
              </div>

              {/* Text content 3 */}
              <div className="mb-[20px] md:mb-[35px]">
                <p
                  className="text-[15px] md:text-[10.42px] lg:text-lg font-bold lg:tracking-wider  "
                  style={{
                    color: "#000",
                  }}
                >
                  User Experience (UX) Design
                </p>
                <p className="text-[#000] text-justify text-[12px] md:text-[9.34px] lg:text-lg mt-[5px] md:mt-[10px]   lg:mt-[15px] ">
                  We focus on creating intuitive and user-friendly interfaces to
                  enhance the overall user experience of your product.
                </p>
              </div>

              {/* Text content 4 */}
              <div className="mb-[20px] md:mb-[35px]">
                <p
                  className="text-[15px] md:text-[10.42px] lg:text-lg font-bold lg:tracking-wider  "
                  style={{
                    color: "#000",
                  }}
                >
                  Iterative Design and Testing
                </p>
                <p className="text-[#000] text-justify text-[12px] md:text-[9.34px] lg:text-lg mt-[5px] md:mt-[10px]   lg:mt-[15px]     ">
                  We conducts iterative design cycles and user testing to gather
                  feedback and refine the design of your product.
                </p>
              </div>
            </div>
            {/* Background image */}
            <div
              className="h-[350px] md:h-[unset]  bg-contain bg-center bg-no-repeat"
              style={{
                backgroundImage:
                  "url(./Images/product_design/keyFeaturesImage3.png)",
              }}
            ></div>
          </div>
        </div>
        {/*  Let’s Manage your Brand visibility with Captivating Graphic Designs */}

        <div className="lg:px-[8%] px-[5%] md:mb-[15%] mb-[25%]">
          <div className="px-4 sm:px-6  lg:px-8 py-4 sm:py-6 bg-[#fff] rounded-lg lg:rounded-2xl mt-[50px] md:mt-[70px] xl:mt-[100px]  EmailBoxShadow">
            <p
              className="text-center  text-[20px]  lg:text-[30px] font-black tracking-wide lg:tracking-wider"
              style={{
                color: primaryColor,
              }}
            >
              Take your Next Big Product to a Milestone
            </p>
            <p className="text-[#000] text-justify  mt-4 sm:mt-6 md:mt-10 text-[11.23px] md:text-[10.44px] lg:text-[18px] lg:mt-12 ">
              Product design is ought to be integrated into business strategy
              for user-friendly and flows. Let’s take your product to a
              milestone. The best product experts are waiting for you at
              AremxyPlug.
            </p>
            <div className="mt-6  flex justify-center">
              <Link to="/ContactUs">
                <Bluebutton text="Contact Sales" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDesign;
