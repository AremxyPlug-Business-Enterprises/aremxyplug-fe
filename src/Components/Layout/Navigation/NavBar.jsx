import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ContextProvider } from "../../Context";

export const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { hideNavbar } = useContext(ContextProvider);

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

  return (
    <>
      {/* Mobile View */}
      <div
        className={`${
          scrolled ? "bg-[#ffffff]" : "bg-transparent"
        } sticky top-0 flex justify-between p-[5%] md:hidden lg:hidden h-[70px]
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
            src="./Images/aremxy2.png"
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
        <div
          className={` bg-[#04177f] fixed z-[50] left-[60%] text-[12px] text-center text-[#ffffff] p-6 w-[35%]   `}
        >
          <ul className="flex flex-col gap-[20px]">
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
            <Link to="/ContactUs">
              <li
                onClick={() => setNavOpen((prev) => !prev)}
                className="bg-[#ffffff] text-[#04177f] text-[8px] p-2 rounded-md"
              >
                Contact Us
              </li>
            </Link>
          </ul>
        </div>
      )}

      {/* Tablet & Desktop View */}
      <div
        className={`${
          scrolled ? "bg-[#ffffff]" : "bg-transparent"
        } z-[55] sticky top-0 hidden md:flex justify-between p-[3%] px-[6%] lg:flex lg:justify-between lg:p-[2%] lg:px-[8%]
        ${hideNavbar === true ? "hidden md:hidden lg:hidden" : "md:flex "}
        `}
      >
        <Link to="/">
          <img
            className="md:w-[94px] h-[20px] lg:w-[164px] lg:h-[30px]"
            src="./Images/aremxy2.png"
            alt="/aremxyplug"
          />
        </Link>
        <ul className="flex gap-[31px] items-center lg:gap-[55px]">
          <li className="text-[9px] lg:text-[16px] relative group">
            <Link to="/">Home</Link>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-[#04177F] rounded-[100px] md:h-[2.5px] md:w-[80%] lg:h-[4px] lg:w-[80%] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </li>
          <li className="text-[9px] lg:text-[16px] relative group">
            <Link to="/our-services">Services</Link>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-[#04177F] rounded-[100px] md:h-[2.5px] md:w-[80%] lg:h-[4px] lg:w-[80%] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </li>
          <li className="text-[9px] lg:text-[16px] relative group">
            <Link to="/about-us">About us</Link>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-[#04177F] rounded-[100px] md:h-[2.5px] md:w-[80%] lg:h-[4px] lg:w-[80%] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </li>
          <li className="text-[9px] lg:text-[16px] relative group">
            <Link to="/pricing">Pricing</Link>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-[#04177F] rounded-[100px] md:h-[2.5px] md:w-[80%] lg:h-[4px] lg:w-[80%] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </li>
          <li className="text-[9px] lg:text-[16px] relative group">
            <Link to="/Solutions">Solutions</Link>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-[#04177F] rounded-[100px] md:h-[2.5px] md:w-[80%] lg:h-[4px] lg:w-[80%] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </li>
          <li className="text-[9px] lg:text-[16px] relative group">
            <Link to="/faq">FAQs</Link>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-[#04177F] rounded-[100px] md:h-[2.5px] md:w-[80%] lg:h-[4px] lg:w-[80%] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </li>
        </ul>

        <div className="flex justify-center bg-[#04177F] rounded-md text-[#ffffff] text-[7px] p-[1%] w-[14%] lg:w-[14.5%] lg:text-[13px]">
          <Link to="/ContactUs">Contact Us</Link>
        </div>
      </div>
    </>
  );
};
