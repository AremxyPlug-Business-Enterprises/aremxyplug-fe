import React, { useContext, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import { SiLinkedin } from "react-icons/si";
import { ImFacebook2 } from "react-icons/im";
import { ImInstagram } from "react-icons/im";
import { SiTwitter } from "react-icons/si";
import { GrMail } from "react-icons/gr";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { ContextProvider } from "../../Context";

export const Footer = () => {
  const { hideNavbar } = useContext(ContextProvider);

  const [firstDrop, setFirstDrop] = useState(false);
  const [secondDrop, setSecondDrop] = useState(false);
  const [thirdDrop, setThirdDrop] = useState(false);
  const [buttonText, setButtonText] = useState("More");
  const [buttonText2, setButtonText2] = useState("More");
  const [buttonText3, setButtonText3] = useState("More");
  function handleClick() {
    setFirstDrop((prev) => !prev);
    setButtonText((prevText) => (prevText === "More" ? "Less" : "More"));
  }
  function handleClick2() {
    setSecondDrop((prev) => !prev);
    setButtonText2((prevText) => (prevText === "More" ? "Less" : "More"));
  }
  function handleClick3() {
    setThirdDrop((prev) => !prev);
    setButtonText3((prevText) => (prevText === "More" ? "Less" : "More"));
  }
  return (
    <>
      {/* MOBILE VIEW */}
      <div
        className={`md:hidden bg-[#04177F] text-[#ffffff] pb-[20%]
      ${hideNavbar === true ? "hidden" : "block md:hidden"}
      `}
      >
        <img
          className="w-[30%] p-[4%]"
          src="./Images/newaremxy.png"
          alt="/aremxyplug"
        />
        <hr />
        <div className="flex flex-wrap gap-[20%] h-[] w-[261px] pt-[15px] mx-auto ">
          <div className="flex flex-col gap-[15px] mb-[10%]">
            <div className="w-[81px] h-[16px] text-[13px] font-semibold">
              <Link to="/">AremxyPlug</Link>
            </div>
            <div className="w-[40px] h-[13px] text-[9px]">
              <Link to="/about-us">About us</Link>
            </div>
            <div className="w-[40px] h-[13px] text-[9px]">Careers</div>
            <div className="w-[40px] h-[13px] text-[9px]">Customers</div>
            <div className="w-[40px] h-[13px] text-[9px]">
              <HashLink to="/#partners">Partners</HashLink>
            </div>
            <div className="w-[80px] h-[13px] text-[9px]">
              <HashLink to="/#becomeAgent">Become an Agent</HashLink>
            </div>
            {firstDrop && (
              <div className="flex flex-col gap-[20px]">
                <div className="w-[90px] h-[13px] text-[9px]">
                  Become a Merchant
                </div>
                <div className="w-[80px] h-[13px] text-[9px]">
                  Become a Partner
                </div>
              </div>
            )}
            <div className="flex" onClick={handleClick}>
              <div className="text-[9px] font-bold">{buttonText}</div>
              <div className="w-[11px] ">
                {!firstDrop ? <RiArrowDropDownLine /> : <RiArrowDropUpLine />}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[15px] mb-[15%]">
            <div className="w-[81px] h-[16px] text-[13px] font-semibold ">
              Product
            </div>
            <div className="w-[40px] h-[13px] text-[9px]">
              <Link to="/our-services/telecoms">Telecom</Link>
            </div>
            <div className="w-[40px] h-[13px] text-[9px]">
              <Link to="/our-services/payment">Payment</Link>
            </div>
            <Link to="/CardIssuing">
              <div className="w-[80px] h-[13px] text-[9px] cursor-pointer">
                Card issuing
              </div>
            </Link>
            <Link to="/DigitalServices">
              <div className="w-[80px] h-[13px] text-[9px]">
                Digital Service
              </div>
            </Link>
            <div className="w-[80px] h-[13px] text-[9px]">
              <Link to="/our-services/payment">Virtual Account</Link>
            </div>
            {secondDrop && (
              <div className="flex flex-col gap-[20px]">
                <div className="w-[96px] h-[13px] text-[9px]">
                  <HashLink to="#currencyconvert">Currency conversion</HashLink>
                </div>
                <div className="w-[100px] h-[13px] text-[9px]">
                  <HashLink to="#multicurrency">Multi-Currency Wallet</HashLink>
                </div>
                <div className="w-[96px] h-[13px] text-[9px]">
                  <Link to="/our-services/payment">International Payment</Link>
                </div>
                <div className="w-[94px] h-[13px] text-[9px]">
                  <Link to="/VTU_DEV">VTU development</Link>
                </div>
                <div className="w-[100px] h-[13px] text-[9px]">
                  <Link to="/businessDev">Business Development</Link>
                </div>
              </div>
            )}
            <div className="flex" onClick={handleClick2}>
              <div className="text-[9px] font-bold">{buttonText2}</div>
              <div className="w-[11px] ">
                {!secondDrop ? <RiArrowDropDownLine /> : <RiArrowDropUpLine />}
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-[15px] mb-[15%]">
            <div className="w-[81px] h-[16px] text-[13px] font-semibold">
              <Link to="/solutions">Solutions</Link>
            </div>
            <div className="w-[40px] h-[13px] text-[9px]">
              <HashLink to="/solutions#baas">Baas</HashLink>
            </div>
            <div className="w-[40px] h-[13px] text-[9px]">
              <HashLink to="/solutions#saas">Saas</HashLink>
            </div>
            <div className="w-[40px] h-[13px] text-[9px]">
              <HashLink to="/solutions#saas">Businesses</HashLink>
            </div>
            <div className="w-[40px] h-[13px] text-[9px]">
              <HashLink to="/solutions#businesses">Individuals</HashLink>
            </div>
            <div className="w-[40px] h-[13px] text-[9px]">
              <HashLink to="/solutions#ecommerce">Ecommerce</HashLink>
            </div>
            {thirdDrop && (
              <div className="flex flex-col gap-[20px]">
                <div className="w-[96px] h-[13px] text-[9px]">
                  <HashLink to="/solutions#collect">Collect</HashLink>
                </div>
                <div className="w-[100px] h-[13px] text-[9px]">
                  <HashLink to="/solutions#collect">Purchase</HashLink>
                </div>
                <div className="w-[96px] h-[13px] text-[9px]">
                  <HashLink to="/solutions#purchase">Automate</HashLink>
                </div>
                <div className="w-[100px] h-[13px] text-[9px]">
                  <HashLink to="/solutions/#transfer">Transfer</HashLink>
                </div>
                <div className="w-[94px] h-[13px] text-[9px]">
                  <HashLink to="/solutions/#convert">Convert</HashLink>
                </div>
              </div>
            )}
            <div className="flex" onClick={handleClick3}>
              <div className="text-[9px] font-bold">{buttonText3}</div>
              <div className="w-[11px] ">
                {!thirdDrop ? <RiArrowDropDownLine /> : <RiArrowDropUpLine />}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[15px] ">
            <div className="w-[81px] h-[16px] text-[13px] font-semibold">
              Resources
            </div>
            <div className="w-[40px] h-[13px] text-[9px]">
              <Link to="/pricing">Pricing</Link>
            </div>
            <div className="w-[40px] h-[13px] text-[9px]">Support</div>
            <div className="w-[40px] h-[13px] text-[9px]">Blog</div>
            <div className="w-[40px] h-[13px] text-[9px]">
              <Link to="/faq">FAQs</Link>
            </div>
          </div>

          <div className="flex flex-col gap-[15px] mb-[15%]">
            <div className="w-[81px] h-[16px] text-[13px] lg:text-[25px] font-semibold">
              <Link to="/ContactUs">Contact us</Link>
            </div>
            <div className="w-[80px] h-[13px] text-[9px]">Live Chat</div>
            <div className="w-[80px] h-[13px] text-[9px]">
              <Link to="/ContactUs">Contact Sales</Link>
            </div>
            <div className="w-[80px] h-[13px] text-[9px]">
              <Link to="/ContactUS">Phone</Link>
            </div>
            <div className="w-[80px] h-[13px] text-[9px]">
              <Link>Email</Link>
            </div>
          </div>

          <div className="flex flex-col gap-[15px]">
            <div className="w-[81px] h-[16px] text-[13px] font-semibold">
              Developer
            </div>
            <div className="w-[90px] h-[13px] text-[9px]">
              API Documentation
            </div>
            <div className="w-[80px] h-[13px] text-[9px]">API Reference</div>
            <div className="w-[80px] h-[13px] text-[9px]">API Changelog</div>
            <div className="w-[80px] h-[13px] text-[9px]">API status</div>
          </div>

          <div className="flex flex-col gap-[15px] ">
            <div className="w-[81px] h-[16px] text-[13px] lg:text-[25px] font-semibold">
              Legal
            </div>
            <div className="w-[90px] h-[13px] text-[9px]">
              <Link to="/privacy-policy">Privacy Policy</Link>
            </div>
            <div className="w-[100px] h-[13px] text-[9px]">
              <Link to="/terms-and-condition">Terms & Conditions</Link>
            </div>
          </div>
        </div>

        <div className=" flex gap-[30px] justify-center mt-[10%] ml-[8%]">
          <div className="flex flex-col h-[52px] gap-[15px]">
            <div className="text-[10px]">Follow Us on</div>
            <div className="flex gap-[12px]">
              <div className="text-lg">
                <a
                  href="https://www.linkedin.com/company/aremxyplug-business-enterprises/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <SiLinkedin />
                </a>
              </div>
              <div className="text-lg">
                <a
                  href="https://m.facebook.com/102536649209580/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ImFacebook2 />
                </a>
              </div>
              <div className="text-lg">
                <a
                  href="https://www.instagram.com/aremxyplug"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ImInstagram />
                </a>
              </div>
              <div className="text-lg">
                <a
                  href="https://twitter.com/aremxyplugs?t=WpUYIAyIyHGlliPCqO9a4Q&s=09"
                  target="_blank"
                  rel="noreferrer"
                >
                  <SiTwitter />
                </a>
              </div>
              <div className="text-lg">
                <a
                  href="mailto:hello@aremxyplug.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GrMail />
                </a>
              </div>
            </div>
            <div className="text-[8px]">Email us at: hello@aremxyplug.com</div>
          </div>

          <div className="flex flex-col gap-[10px]">
            <div className="text-[10px]">Download Our App</div>
            <div className="text-[6px] w-[143px]">
              Discover exclusive deals and accounts with our mobile experience.
            </div>
            <div className="flex gap-[15px]">
              <img className="w-[35%]" src="./Images/google2.png" alt="/" />
              <img className="w-[35%]" src="./Images/apple2.png" alt="/" />
            </div>
          </div>
        </div>

        <div className="mx-auto mt-[10%] w-[312px] h-[40px] text-[6px]">
          AremxyPlug is a business enterprise and telecommunication service
          provider company, not a bank. We offer telecom products, payments, and
          digital services. Banking services are provided by AremxyPlug’s
          payment partners and banks who are duly licensed by CBN, FCA, FDIC,
          and other regulatory bodies. Debit Card Services are issued by our
          partners who are authorized by VISA and MasterCard to carry out card
          payment services.
        </div>
        <div className="mt-[10%] text-center text-[6px] ">
          ©AremxyPlug 2023. All Rights Reserved.
        </div>
      </div>

      {/* TABLET & DESKTOP VIEW */}
      <div
        className={`hidden md:block bg-[#04177F] text-[#ffffff] pb-[5%] w-[]
       ${hideNavbar === true ? "hidden md:hidden" : "hidden md:block "}
      `}
      >
        <img
          className="w-[20%] p-[4%] ml-9 lg:p-[3%] lg:ml-[4%] lg:w-[19%]"
          src="./Images/newaremxy.png"
          alt="/aremxyplug"
        />
        <hr />

        <div className="flex gap-[10%] w-[85%] pt-[15px] ml-[%] lg:gap-[100px] mx-auto">
          <div className="flex flex-col gap-[15px] lg:gap-[25px]">
            <div className="w-[81px] h-[16px] text-[14px] font-semibold lg:text-[25px]">
              <Link to="/">AremxyPlug</Link>
            </div>
            <div className="w-[40px] h-[13px] text-[9px] lg:w-[71px] lg:text-[16px]">
              <Link to="/about-us">About us</Link>
            </div>
            <div className="w-[40px] h-[13px] text-[9px] lg:w-[71px] lg:text-[16px]">
              Careers
            </div>
            <div className="w-[40px] h-[13px] text-[9px] lg:w-[71px] lg:text-[16px]">
              Customers
            </div>
            <div className="w-[40px] h-[13px] text-[9px] lg:w-[71px] lg:text-[16px]">
              <HashLink to="/#partners">Partners</HashLink>
            </div>
            <div className="w-[80px] h-[13px] text-[9px] lg:w-[166px] lg:text-[16px]">
              <HashLink to="/#becomeAgent">Become an Agent</HashLink>
            </div>

            <div className="flex flex-col gap-[20px]">
              <div className="w-[90px] h-[13px] text-[9px] lg:w-[166px] lg:text-[16px]">
                Become a Merchant
              </div>
              <div className="w-[80px] h-[13px] text-[9px] lg:w-[166px] lg:text-[16px]">
                Become a Partner
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[15px] lg:gap-[25px] ">
            <div className="w-[81px] h-[16px] text-[14px] font-semibold lg:text-[25px]">
              Product
            </div>
            <div className="w-[40px] h-[13px] text-[9px] lg:w-[71px] lg:text-[16px]">
              <Link to="/our-services/telecoms">Telecom</Link>
            </div>
            <div className="w-[40px] h-[13px] text-[9px] lg:w-[71px] lg:text-[16px]">
              <Link to="/our-services/payment">Payment</Link>
            </div>
            <div className="w-[80px] h-[13px] text-[9px] lg:w-[166px] lg:text-[16px]">
              <Link to="/CardIssuing">Card issuing</Link>
            </div>
            <div className="w-[80px] h-[13px] text-[9px] lg:w-[166px] lg:text-[16px]">
              <Link to="/DigitalServices">Digital Service</Link>
            </div>
            <div className="w-[80px] h-[13px] text-[9px] lg:w-[166px] lg:text-[16px]">
              <Link to="/our-services/payment">Virtual Account</Link>
            </div>
            <div className="flex flex-col gap-[20px]">
              <div className="w-[96px] h-[13px] text-[9px] lg:w-[166px] lg:text-[16px]">
                <HashLink to="/#crossborder">Currency conversion</HashLink>
              </div>

              <div className="w-[100px] h-[13px] text-[9px] lg:w-[166px] lg:text-[16px]">
                <HashLink to="/#currencyconvert">
                  Multi-Currency Wallet
                </HashLink>
              </div>

              <div className="w-[96px] h-[13px] text-[9px] lg:w-[166px] lg:text-[16px]">
                <Link to="/our-servcies/payment">International Payment</Link>
              </div>
              <div className="w-[94px] h-[13px] text-[9px] lg:w-[166px] lg:text-[16px]">
                <Link to="/VTU_DEV">VTU development</Link>
              </div>
              <div className="w-[100px] h-[13px] text-[9px] lg:w-[166px] lg:text-[16px]">
                <Link to="/businessDev">Business Development</Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[15px] lg:gap-[25px]">
            <div className="w-[81px] h-[16px] text-[14px] font-semibold lg:text-[25px]">
              <Link to="/solutions">Solutions</Link>
            </div>
            <div className="w-[40px] h-[13px] text-[9px] lg:w-[71px] lg:text-[16px]">
              <HashLink to="/solutions/#baas">Baas</HashLink>
            </div>
            <div className="w-[40px] h-[13px] text-[9px] lg:w-[71px] lg:text-[16px]">
              <HashLink to="/solutions/#baas">saas</HashLink>
            </div>
            <div className="w-[40px] h-[13px] text-[9px] lg:w-[71px] lg:text-[16px]">
              <HashLink to="/solutions/#saas">Businesses</HashLink>
            </div>
            <div className="w-[40px] h-[13px] text-[9px] lg:w-[71px] lg:text-[16px]">
              <HashLink to="/solutions/#saas">Individuals</HashLink>
            </div>
            <div className="w-[40px] h-[13px] text-[9px] lg:w-[71px] lg:text-[16px]">
              <HashLink to="/solutions/#ecommerce">Ecommerce</HashLink>
            </div>

            <div className="flex flex-col gap-[20px]">
              <div className="w-[96px] h-[13px] text-[9px] lg:w-[71px] lg:text-[16px]">
                <HashLink to="/solutions/#collect">Collect</HashLink>
              </div>
              <div className="w-[100px] h-[13px] text-[9px] lg:w-[71px] lg:text-[16px]">
                <HashLink to="/solutions/#collect">Purchase</HashLink>
              </div>
              <div className="w-[96px] h-[13px] text-[9px] lg:w-[71px] lg:text-[16px]">
                <HashLink to="/solutions/#automate">Automate</HashLink>
              </div>
              <div className="w-[100px] h-[13px] text-[9px] lg:w-[71px] lg:text-[16px]">
                <HashLink to="/solutions/#automate">Transfer</HashLink>
              </div>
              <div className="w-[94px] h-[13px] text-[9px] lg:w-[71px] lg:text-[16px]">
                <HashLink to="/solutions/#convert">Convert</HashLink>
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-[15px] mb-[5%] lg:gap-[25px] lg:mb-[25%]">
              <div className="w-[81px] h-[16px] text-[14px] font-semibold lg:text-[25px]">
                Resources
              </div>
              <div className="w-[40px] h-[13px] text-[9px] lg:w-[71px] lg:text-[16px]">
                <Link to="/pricing">Pricing</Link>
              </div>
              <div className="w-[40px] h-[13px] text-[9px] lg:w-[71px] lg:text-[16px]">
                Support
              </div>
              <div className="w-[40px] h-[13px] text-[9px] lg:w-[71px] lg:text-[16px]">
                Blog
              </div>
              <div className="w-[40px] h-[13px] text-[9px] lg:w-[71px] lg:text-[16px]">
                <Link to="/faq">FAQs</Link>
              </div>
            </div>
            <div className="flex flex-col gap-[15px] lg:gap-[20px]">
              <div className="w-[81px] h-[13px] text-[14px] font-semibold lg:text-[25px] mb-[10px]">
                Legal
              </div>
              <div className="w-[90px] h-[13px] text-[9px] lg:w-[100%] lg:text-[16px]">
                <Link to="/privacy-policy">Privacy Policy</Link>
              </div>
              <div className="w-[80px] h-[13px] text-[9px] lg:w-[166px] lg:text-[16px]">
                <Link to="/terms-and-condition">Terms & Condition</Link>
              </div>
            </div>
          </div>

          <div className="">
            <div className="flex flex-col gap-[15px] mb-[15%] lg:gap-[25px] lg:mb-[25%]">
              <div className="w-[81px] h-[16px] text-[14px] font-semibold lg:text-[25px]">
                Developer
              </div>
              <div className="w-[90px] h-[13px] text-[9px] lg:w-[166px] lg:text-[16px]">
                API Documentation
              </div>
              <div className="w-[80px] h-[13px] text-[9px] lg:w-[166px] lg:text-[16px]">
                API Reference
              </div>
              <div className="w-[80px] h-[13px] text-[9px] lg:w-[166px] lg:text-[16px]">
                API Changelog
              </div>
              <div className="w-[80px] h-[13px] text-[9px] lg:w-[166px] lg:text-[16px]">
                API status
              </div>
            </div>
            <div className="flex flex-col gap-[15px]">
              <Link to="/ContactUs">
                <div className="w-[81px] h-[16px] text-[14px] font-semibold lg:text-[25px] lg:w-[166px] mb-[10px]">
                  Contact us
                </div>
              </Link>
              <div className="w-[80px] h-[13px] text-[9px] lg:w-[100px] lg:text-[16px]">
                <Link to="/ContactUs">Live Chat</Link>
              </div>
              <Link to="/ContactUs">
                <div className="w-[80px] h-[13px] text-[9px] lg:w-[166px] lg:text-[16px]">
                  Contact Sales
                </div>
              </Link>
              <div className="w-[80px] h-[13px] text-[9px] lg:w-[71px] lg:text-[16px]">
                <Link to="/ContactUs">Phone</Link>
              </div>
              <div className="w-[80px] h-[13px] text-[9px] lg:w-[71px] lg:text-[16px]">
                <Link to="/ContactUs">Email</Link>
              </div>
            </div>
          </div>
        </div>

        <div className=" right- flex gap-[90px] ml-[8%] mt-[10%]  lg:gap-[120px]">
          <div className="flex flex-col h-[52px] gap-[15px] ">
            <div className="text-[14px] lg:text-[25px]">Follow Us on</div>
            <div className="flex gap-[12px] lg:gap-[15px]">
              <div className="text-lg lg:text-3xl">
                <a
                  href="https://www.linkedin.com/company/aremxyplug-business-enterprises/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <SiLinkedin />
                </a>
              </div>
              <div className="text-lg lg:text-3xl">
                <a
                  href="https://m.facebook.com/102536649209580/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ImFacebook2 />
                </a>
              </div>
              <div className="text-lg lg:text-3xl">
                <a
                  href="https://www.instagram.com/aremxyplug"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ImInstagram />
                </a>
              </div>
              <div className="text-lg lg:text-3xl">
                <a
                  href="https://twitter.com/aremxyplugs?t=WpUYIAyIyHGlliPCqO9a4Q&s=09"
                  target="_blank"
                  rel="noreferrer"
                >
                  <SiTwitter />
                </a>
              </div>
              <div className="text-[20px] lg:text-3xl">
                <a
                  href="mailto:hello@aremxyplug.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GrMail />
                </a>
              </div>
            </div>
            <div className="text-[11px] lg:text-[20px] lg:w-[356px]">
              Email us at: hello@aremxyplug.com
            </div>
          </div>

          <div className="flex flex-col gap-[10px] ">
            <div className="text-[14px] lg:text-[25px]">Download Our App</div>
            <div className="text-[8px] w-[245px] lg:text-[15px] lg:w-[424px] lg:h-[36px]">
              Discover exclusive deals and accounts with our mobile experience.
            </div>
            <div className="flex gap-[10px]">
              <img
                className="w-[68px] h-[22px] lg:w-[119px] lg:h-[39px]"
                src="./Images/google2.png"
                alt="/"
              />
              <img
                className="w-[68px] h-[22px] lg:w-[119px] lg:h-[39px]"
                src="./Images/apple2.png"
                alt="/"
              />
            </div>
          </div>
        </div>
        <div className=" text-[9px] mx-[30%] mt-[5%] w-[%] lg:text-[16px] ">
          ©AremxyPlug 2023. All Rights Reserved.
        </div>
        <div className=" w-[] h-[30px] text-[7px] mx-[8%] mt-[2%] lg:text-[12px] lg:w-[px]">
          AremxyPlug is a business enterprise and telecommunication service
          provider company, not a bank. We offer telecom products, payments, and
          digital services. Banking services are provided by AremxyPlug’s
          payment partners and banks who are duly licensed by CBN, FCA, FDIC,
          and other regulatory bodies. Debit Card Services are issued by our
          partners who are authorized by VISA and MasterCard to carry out card
          payment services.
        </div>
      </div>
    </>
  );
};

// md:flex-nowrap md:gap-[10%] md:w-[100%]
