import React, { useContext, useState } from "react";

export const CookiesSettings = () => {
  const [accepted, setAccepted] = useState(
    localStorage.getItem("cookieAccepted") === "true"
  );

  const acceptCookie = () => {
    localStorage.setItem("cookieAccepted", "true");
    setAccepted(true);
  };

  console.log(accepted);

  const {toggleDarkMode} = useContext

  return (
    <div className="h-[1000px] border-t-[1px] border-t-[#0003] px-[5%] py-[3%]">
      <p className="text-[15px] text-[#8e8a8a] font-extrabold">
        Privacy Preference Center
      </p>
      <div className="text-[12px] text-justify my-[5%]">
        <p>
          {" "}
          Welcome to our website, where we strive to provide you with a seamless
          online experience. As you navigate through our digital domain, we may
          utilize cookies to store and retrieve information on your browser.
          These cookies play a vital role in ensuring our site functions
          smoothly and delivers a personalized touch.{" "}
        </p>
        <br />{" "}
        <p>
          Rest assured, the data collected through cookies is anonymous and does
          not directly identify you. Rather, it assists us in understanding your
          preferences, allowing us to improve our services. We respect your
          privacy and offer you the flexibility to choose which types of cookies
          you wish to enable.
        </p>
        <br />
        <p>
          {" "}
          To customize your browsing experience, simply click on the different
          category headings below. Explore the specifics of each cookie type and
          modify our default settings to align with your preferences. It's
          important to note that disabling certain cookies may impact your
          overall website experience. Keep in mind that your privacy is our
          priority, and we are here to empower you every step of the way.
        </p>
      </div>
      <p className="text-[15px] text-[#8e8a8a] font-extrabold">
        Manage Your Consent Preferences
      </p>
      <div>
        <div className="flex mt-[25px] border-[1px] py-[10px] px-[10px] justify-between">
          <div className="flex gap-[10px]">
            <img
              className="w-[10px] h-[10px] mt-[3px]"
              src="./Images/minus.png"
              alt="/"
            />
            <p className="text-[12px] text-[#0008] font-semibold">
              Allow Necessary Cookies
            </p>
          </div>
          <div
            onClick={toggleDarkMode}
            className={`border-[1.5px] mt-[3px] flex items-center border-[#04177f] bg-[#04177f30]  w-[18px] h-[10px] md:w-[30px] md:h-[12px] lg:w-[50px] lg:h-[22px] lg:rounded-full rounded
            }`}
          >
            <div
              className={`bg-[#04177f] rounded-full w-[7.5px] flex h-[8px] md:w-[14px] md:h-[12px] lg:h-[22px] lg:w-[21px] lg:drop-shadow-md
              }`}
            ></div>
          </div>
        </div>
        <div className="flex border-[1px] py-[10px] px-[10px] justify-between">
          <div className="flex gap-[10px]">
            <img
              className="w-[10px] h-[10px] mt-[3px]"
              src="./Images/minus.png"
              alt="/"
            />
            <p className="text-[12px] text-[#0008] font-semibold">
              Allow Functional Cookies
            </p>
          </div>
          <div
            onClick={toggleDarkMode}
            className={`border-[1.5px] mt-[3px] flex items-center border-[#04177f] bg-[#04177f30]  w-[18px] h-[10px] md:w-[30px] md:h-[12px] lg:w-[50px] lg:h-[22px] lg:rounded-full rounded
            }`}
          >
            <div
              className={`bg-[#04177f] rounded-full w-[7.5px] flex h-[8px] md:w-[14px] md:h-[12px] lg:h-[22px] lg:w-[21px] lg:drop-shadow-md
              }`}
            ></div>
          </div>
        </div>
        <div className="flex border-[1px] py-[10px] px-[10px] justify-between">
          <div className="flex gap-[10px]">
            <img
              className="w-[10px] h-[10px] mt-[3px]"
              src="./Images/minus.png"
              alt="/"
            />
            <p className="text-[12px] text-[#0008] font-semibold">
              Allow Performance Cookies
            </p>
          </div>
          <div
            onClick={toggleDarkMode}
            className={`border-[1.5px] mt-[3px] flex items-center border-[#04177f] bg-[#04177f30]  w-[18px] h-[10px] md:w-[30px] md:h-[12px] lg:w-[50px] lg:h-[22px] lg:rounded-full rounded
            }`}
          >
            <div
              className={`bg-[#04177f] rounded-full w-[7.5px] flex h-[8px] md:w-[14px] md:h-[12px] lg:h-[22px] lg:w-[21px] lg:drop-shadow-md
              }`}
            ></div>
          </div>
        </div>
        <div className="flex border-[1px] py-[10px] px-[10px] justify-between">
          <div className="flex gap-[10px]">
            <img
              className="w-[10px] h-[10px] mt-[3px]"
              src="./Images/minus.png"
              alt="/"
            />
            <p className="text-[12px] text-[#0008] font-semibold">
              Allow Targeting Cookies
            </p>
          </div>
          <div
            onClick={toggleDarkMode}
            className={`border-[1.5px] mt-[3px] flex items-center border-[#04177f] bg-[#04177f30]  w-[18px] h-[10px] md:w-[30px] md:h-[12px] lg:w-[50px] lg:h-[22px] lg:rounded-full rounded
            }`}
          >
            <div
              className={`bg-[#04177f] rounded-full w-[7.5px] flex h-[8px] md:w-[14px] md:h-[12px] lg:h-[22px] lg:w-[21px] lg:drop-shadow-md
              }`}
            ></div>
          </div>
        </div>

        <div className="mt-[30px] flex justify-center gap-[70px]">
          <button
            onClick={acceptCookie}
            className="text-[#FFFFFF] bg-[#04177F] text-[12px] py-[10px] px-[30px] rounded-[5px] font-semibold"
          >
            Confirm
          </button>
          <button className="text-[#FFFFFF] bg-[#04177F] text-[12px] py-[10px] px-[30px] rounded-[5px] font-semibold">
            Allow All
          </button>
        </div>
      </div>
    </div>
  );
};
