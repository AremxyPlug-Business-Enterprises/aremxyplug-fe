import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CookieBanner = () => {
  const [accepted, setAccepted] = useState(
    localStorage.getItem("cookieAccepted") === "true"
  );

  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    const showBannerTimer = setTimeout(() => setShowBanner(true), 2000); // Show the banner after 5 seconds
    return () => clearTimeout(showBannerTimer);
  }, []);

  const acceptCookie = () => {
    localStorage.setItem("cookieAccepted", "true");
    setAccepted(true);
    setShowBanner(false);
  };

  const declineCookie = () => {
    localStorage.setItem("cookieAccepted", "false");
    setAccepted(false);
    setShowBanner(false);
  };

  const closeBanner = () => {
    setShowBanner(!showBanner);
  };
  
  return showBanner && !accepted ? (
    <div className="cookie-banner bg-white py-[9%] text-[10px] px-[5%] text-justify w-[95%] md:w-[90%] lg:w-[85%] md:text-[12px] lg:text-[14px] mx-auto border-[3px] border-[#04177f] rounded-[16px] md:py-[5%] lg:py-[2%]">
      <img
        onClick={closeBanner}
        className="absolute top-[2%] right-[4%] w-[30px] h-[30px] md:right-[7%] lg:right-[10%]"
        src="./Images/cancel.png"
        alt="/"
      />
      <p>
        Welcome to AremxyPlug, where every byte counts! 🍪 We use cookies to
        make your browsing experience as smooth as a gigabit connection. Our
        cookies are small, yet powerful, helping us analyze site traffic,
        personalize content, and improve performance. {" "}
      </p>
      <br />
      <p>
        By clicking "Accept," you unlock the full potential of our website.
        However, if you prefer a cookie-free experience, click "Decline" and
        we'll respect your privacy. To learn more about our deliciously
        effective cookies and how they can supercharge your visit, check out our
        <Link to="/privacy-policy">
          <span className="text-[#04177f] font-extrabold hover:underline cursor-pointer">
            {" "}
            Privacy Policy
          </span>
        </Link>
        . Ready to take a byte? Accept or Decline, the choice is yours!
      </p>
      <div className="flex justify-between my-[8%] md:my-[3%]">
        <button
          className="bg-[#04177f] text-white text-[10px] px-[6%] py-[3%] rounded-[6px] md:px-[4%] md:py-[2%] md:text-[14px]  lg:py-0 lg:h-[50px] lg:px-[3%]"
          onClick={acceptCookie}
        >
          Accept Cookies
        </button>
        <button
          onClick={declineCookie}
          className="bg-[#04177f] text-white text-[10px] px-[6%] py-[3%] rounded-[6px]  md:px-[4%] md:py-[2%] md:text-[14px] lg:py-0 lg:h-[50px] lg:px-[3%]"
        >
          Decline Cookies
        </button>
      </div>
      <Link to="/cookie-settings">
        <div className="flex justify-center ">
          <button className=" bg-[#04177f] text-white text-[10px] px-[6%] py-[3%] rounded-[6px]  md:px-[4%] md:py-[2%] md:text-[14px] lg:py-0 lg:h-[50px] lg:px-[3%]">
            Cookies Settings
          </button>
        </div>
      </Link>
    </div>
  ) : null;
};

export default CookieBanner;
