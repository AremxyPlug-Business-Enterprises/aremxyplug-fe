import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ContextProvider } from "../../Context";
import { useLocation} from "react-router-dom"


export const NavBar = () => {

  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const currentLocation = location?.pathname
  const { hideNavbar,navOpen, setNavOpen} = useContext(ContextProvider);
  function handleScroll() {
    if (
      (document.documentElement && document.documentElement.scrollTop > 70) ||
      document.body.scrollTop > 70
    ) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
 return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

const userStatus= localStorage.getItem("cxccxfd");
const pathname = location?.pathname === "/DigitalServices" 
|| location?.pathname === "/VTU_DEV" || location?.pathname === "/businessDev" 
|| location?.pathname === "/ContactUs" || location?.pathname === "/pricing";
  return (
   
((!userStatus) || (userStatus && pathname)) && (
    <>
      <div className={`
       ${hideNavbar === true ? "hidden" : "flex "} relative z-[55]`}>
        {currentLocation !== "/TestingPhase" && (
         <Link to="/TestingPhase" className = "fixed bg-[#FFF8B0] w-full top-[0px] z-[55]">
       <div  className=" text-[12px] lg:text-[14px] py-[20px]
     text-center font-[500] leading-[18px] lg:leading-[20px] px-[20px]">
       🔔 AremxyPlug Testing Phase: <span className="font-[800]">Live from 22 April – 06 May {" "}</span>
         Click to view details, eligibility, terms & rewards. 
       </div>
            </Link>
        )}
        {/* MOBILE SCREENS */}
   
        
      <div 
        className={`${
          scrolled ? "bg-[#ffffff]" : "bg-transparent" 
        } fixed  ${currentLocation === "/TestingPhase" ? "top-[0px]" : "mt-[20px] top-[50px]"}
         flex w-full justify-between px-[5%] py-8 md:hidden
         lg:hidden h-[70px] 
        ${hideNavbar === true ? "hidden" : "flex md:hidden lg:hidden"}
        `}
        style={{
          zIndex: 999,
        }}
      >
          
        <Link to="/">
          {" "}
          <img
            className="w-[85px] h-[18px]"
            src="./Images/aremxy2.avif"
            alt="/aremxyplug"
          />
        </Link>
        <img
          onClick={() => setNavOpen((prev) => !prev)}
          className="w-[30px] h-[17px]"
          src="./Images/aremxyNav.png"
          alt="/aremxyplug"
        />
      </div>
   
      
      {navOpen && (
       
        <div onClick={()=> {
          if(navOpen === true){
            setNavOpen(false)
          }
        }}
          className={`px-4 py-[16px]  h-full  fixed z-[50] flex 
            justify-center ${currentLocation === "/TestingPhase" ? "top-[80px]":  "top-[120px]"} 
          text-center  w-full`}
        > 
          <ul className="flex flex-col w-full gap-[20px] h-1/2 bg-[#04177f] rounded-lg
           justify-center  text-[12px] text-center text-[#ffffff] p-6">
            <li onClick={() => setNavOpen((prev) => !prev)}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={() => setNavOpen((prev) => !prev)}>
              <Link to="/our-services">Services</Link>
            </li>

            <li onClick={() => setNavOpen((prev) => !prev)}>
              <Link to="/about-us">About us</Link>
            </li>
            <li onClick={() => setNavOpen((prev) => !prev)}>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li onClick={() => setNavOpen((prev) => !prev)}>
              <Link to="/solutions">Solutions</Link>
            </li>
            <li onClick={() => setNavOpen((prev) => !prev)}>
              <Link to="/faq">FAQs</Link>
            </li>
            <Link className="w-full" to="/ContactUs">
              <li
                onClick={() => setNavOpen((prev) => !prev)}
                className="bg-[#ffffff] py-[16px] text-[#04177f] 
                text-[14px] fomt-semibold p-2 rounded-md w-full"
              >
                Contact Us
              </li>
            </Link>
          </ul>
        </div>
       
     
      )}
      </div>
      
      {/* Tablet & Desktop View */}
     
     
      <div
        className={`${
          scrolled ? "bg-[#ffffff]" : "bg-transparent"
        }  ${currentLocation === "/TestingPhase"
           ? "top-[0px] " : "mt-[20px] top-[40px]"}
        fixed   w-full hidden z-50
        md:flex justify-between p-[3%] px-[6%] lg:flex lg:justify-between 
        lg:p-[2%] lg:px-[3%]
        ${hideNavbar === true ? "hidden md:hidden lg:hidden" : "md:flex"}
        `}
      >
        <Link  to="/">
          <img
            className="md:w-[94px] h-[20px] lg:w-[164px] lg:h-[30px]"
            src="./Images/aremxy2.avif"
            alt="/aremxyplug"
          />
        </Link>
        <ul className="flex gap-[31px] items-center lg:gap-[55px] w-full justify-center">
          <li className="text-[18px] leading-[26px] font-medium text-black 
          relative group">
            <Link to="/">Home</Link>
            <span className="absolute bottom-0 left-1/2 transform
             -translate-x-1/2 bg-[#04177F] rounded-[100px] md:h-[2.5px] md:w-[80%] lg:h-[4px] lg:w-[80%] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </li>
          <li className="text-[18px] leading-[26px] font-medium
           text-black relative group">
            <Link to="/our-services">Services</Link>
            <span className="absolute bottom-0 left-1/2 transform 
            -translate-x-1/2 bg-[#04177F] rounded-[100px] md:h-[2.5px] md:w-[80%] lg:h-[4px] lg:w-[80%] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </li>
          <li className="text-[18px] leading-[26px] font-medium
           text-black relative group">
            <Link to="/about-us">About us</Link>
            <span className="absolute bottom-0 left-1/2 transform
             -translate-x-1/2 bg-[#04177F] rounded-[100px] md:h-[2.5px] md:w-[80%] lg:h-[4px] lg:w-[80%] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </li>
          <li className="text-[18px] leading-[26px] font-medium
           text-black relative group">
            <Link to="/pricing">Pricing</Link>
            <span className="absolute bottom-0 left-1/2 transform 
            -translate-x-1/2 bg-[#04177F] rounded-[100px] md:h-[2.5px] md:w-[80%] 
            lg:h-[4px] lg:w-[80%] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </li>
          <li className="text-[18px] leading-[26px] font-medium
           text-black relative group">
            <Link to="/Solutions">Solutions</Link>
            <span  className="absolute bottom-0 left-1/2 transform 
            -translate-x-1/2 bg-[#04177F] rounded-[100px] md:h-[2.5px] md:w-[80%] 
            lg:h-[4px] lg:w-[80%] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </li>
          <li className="text-[18px] leading-[26px] font-medium
           text-black relative group">
            <Link to="/faq">FAQs</Link>
            <span className="absolute bottom-0 left-1/2 transform 
            -translate-x-1/2 bg-[#04177F] rounded-[100px] md:h-[2.5px] md:w-[80%] lg:h-[4px] lg:w-[80%] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="absolute bottom-0 left-1/2 transform
             -translate-x-1/2 bg-[#04177F] rounded-[100px] h-[4px] w-[38px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </li>
         
        </ul>

        <div className="flex justify-center bg-[#04177F] rounded-md 
         p-[1%] w-[14%] lg:w-[14.5%] lg:text-[13px]">
          <Link className="text-[18px] leading-[26px] font-medium text-white relative group"
           to="/ContactUs">Contact Us</Link>
        </div>
      </div>
      </>
    
        )
  )

};
