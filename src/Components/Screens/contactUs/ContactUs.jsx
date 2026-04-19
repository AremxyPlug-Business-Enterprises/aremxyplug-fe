import "react-phone-input-2/lib/style.css";
import React, { useEffect, useState } from "react";
import "./contactUs.css";
import Bluebutton from "../../bluebutton/Bluebutton";
import { primaryColor } from "../cardIssuing/cardIssuing";
import ReactFlagsSelect from "chima-flags-select";
import PhoneInput from "react-phone-input-2";

// import { BiSolidDownArrow } from "react-icons/b";
// import { AiOutlineCaretDown } from "react-icons/ai";

function ContactUs() {
  const [textSize, setTextSize] = useState("");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let newSize = "";

      if (width < 768) {
        newSize = 8.93;
      } else if (width >= 768 && width < 1024) {
        newSize = 11.58;
      } else {
        newSize = 20;
      }

      setTextSize(newSize);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [country, setCountry] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("234");
  const [isFocused, setIsFocused] = useState([]);
  const handleFocus = (index) => {
    if (!isFocused.includes(index)) {
      setIsFocused([...isFocused, index]);
    }
  };

  const handleBlur = (index) => {
    if (isFocused.includes(index)) {
      setIsFocused(isFocused.filter((item) => item !== index));
    }
  };

  return (
    <div className="lg:px-[8%] px-[5%]">
      {/* Do you want to reach us?*/}
      <div className=" grid  md:grid-cols-5  grid-cols-1  mt-[40px] md:mt-[50px] lg:mt-[80px]">
        <div className="  md:col-span-3 ">
          <p
            className="text-[15px] md:text-[13.9px] lg:text-[24px] font-bold lg:tracking-wider  "
            style={{
              color: "#000",
            }}
          >
            Do you want to reach us?
          </p>
          <p className="text-[#000] text-justify text-[12px] md:text-[9.34px] lg:text-lg sm:text:lg   mt-[14px] lg:mt-[25px]">
            Using our unlimited digital support services and APIs, you can start
            growing your business and increase more revenue.
          </p>
        </div>
      </div>

      {/*contact us form*/}

      <div
        className=" grid  lg:gap-x-4  md:grid-cols-5 md:gap-x-4    
       grid-cols-1 gap-y-4 mt-[70px] md:mt-[110px] lg:mt-[140px]
        "
      >
        <div className="rounded-lg flex flex-col items-center  md:col-span-2 ">
          <img
            src="./Images/contactUs/contactUsImage.png"
            alt="background_image "
            className="w-[100%]  md:float-left"
          />
        </div>
        <div className=" md:col-span-3">
          {/* First name starts here 268455*/}
          <div className="flex items-center justify-between mb-[20px] md:mb-[24px] lg:mb-[26px]">
            <p className="text-[8.93px] md:text-[11.58px] lg:text-[20px] font-[600] w-[30%]">
              First Name
            </p>
            <div
              className={`inputBoxShadow w-[67%] h-[40px] lg:h-[45px]    rounded  flex items-center lg:hover:border-[#b3b3b3] lg:duration-300 
            ${
              isFocused.includes(1)
                ? "border-[#2684fe] border-2"
                : "border-[#cdcdcd] border-[1px] "
            }`}
              onFocus={() => handleFocus(1)}
              onBlur={() => handleBlur(1)}
            >
              <input
                className="w-full h-full text-[8.93px] md:text-[11.58px] lg:text-[20px] px-[7.5px] md:px-[10px] rounded  text-[#403f3f] outline-none "
                type="text"
                // placeholder="Enter your first name"
              />
            </div>
          </div>
          {/* First name ends here*/}

          {/* Last name starts here*/}
          <div className="flex items-center justify-between mb-[20px] md:mb-[24px] lg:mb-[26px]">
            <p className="text-[8.93px] md:text-[11.58px] lg:text-[20px] font-[600] w-[30%]">
              Last Name
            </p>
            <div
              className={`inputBoxShadow w-[67%] h-[40px] lg:h-[45px]   rounded  flex items-center lg:hover:border-[#b3b3b3] lg:duration-300
             ${
               isFocused.includes(2)
                 ? "border-[#2684fe] border-2"
                 : "border-[#cdcdcd] border-[1px] "
             }`}
              onFocus={() => handleFocus(2)}
              onBlur={() => handleBlur(2)}
            >
              <input
                className="w-full h-full text-[8.93px] md:text-[11.58px] lg:text-[20px] px-[7.5px] md:px-[10px] rounded  text-[#403f3f] outline-none "
                type="text"
                // placeholder="Enter your last name"
              />
            </div>
          </div>
          {/* Last name ends here*/}

          {/* Country starts here*/}
          <div className="flex items-center justify-between mb-[20px] md:mb-[24px] lg:mb-[26px]">
            <p className="text-[8.93px] md:text-[11.58px] lg:text-[20px] font-[600] w-[30%]">
              Country
            </p>
            <div
              className={`inputBoxShadow w-[67%] h-[40px] lg:h-[45px]   rounded  flex items-center lg:hover:border-[#b3b3b3] lg:duration-300 border-[#cdcdcd] border-[1px]
              `}
            >
              <div className="w-full pt-[5px]">
                <ReactFlagsSelect
                  selected={country}
                  onSelect={(value) => setCountry(value)}
                  className="w-[95%]"
                  placeholder=" "
                  searchable
                />
              </div>
            </div>
          </div>
          {/* Country ends here*/}

          {/* Phone number starts here*/}
          <div className="flex items-center justify-between mb-[20px] md:mb-[24px] lg:mb-[26px]">
            <p className="text-[8.93px] md:text-[11.58px] lg:text-[20px] font-[600] w-[30%]">
              Phone No
            </p>
            <div
              className={` inputBoxShadow w-[67%] h-[40px] lg:h-[45px]   rounded  flex items-center lg:hover:border-[#b3b3b3] lg:duration-300  border-[#cdcdcd] border-[1px] `}
            >
              {/* <AiOutlineCaretDown className="absolute w-4 h-4 ml-2 text-[#4d4d4d]" /> */}
              <form>
                <PhoneInput
                  value={phoneNumber}
                  placeholder=""
                  onChange={(val) => setPhoneNumber(val)}
                  enableSearch
                  disableSearchIcon
                  className="inputClass"
                  searchNotFound
                  inputStyle={{
                    fontSize: textSize,
                    color: "#403f3f",
                    border: "none",
                    width: "100%",
                    paddingTop: 2,
                  }}
                  buttonStyle={{
                    border: "none",
                    backgroundColor: "#fff",
                  }}
                  dropdownStyle={{
                    color: "#403f3f",
                    fontSize: textSize,
                  }}
                />
              </form>
            </div>
          </div>
          {/* Phone number ends here*/}

          {/* Comapany starts here*/}
          <div className="flex items-center justify-between mb-[20px] md:mb-[24px] lg:mb-[26px]">
            <p className="text-[8.93px] md:text-[11.58px] lg:text-[20px] font-[600] w-[30%]">
              Company
            </p>
            <div
              className={`inputBoxShadow w-[67%] h-[40px] lg:h-[45px]   rounded  flex items-center lg:hover:border-[#b3b3b3] lg:duration-300
                   ${
                     isFocused.includes(5)
                       ? "border-[#2684fe] border-2"
                       : "border-[#cdcdcd] border-[1px] "
                   }`}
              onFocus={() => handleFocus(5)}
              onBlur={() => handleBlur(5)}
            >
              <input
                className="w-full h-full text-[8.93px] md:text-[11.58px] lg:text-[20px] px-[7.5px] md:px-[10px] rounded  text-[#403f3f] outline-none "
                type="text"
                // placeholder="Enter Company name"
              />
            </div>
          </div>
          {/* Comapany  ends here*/}

          {/* Work email starts here*/}
          <div className="flex items-center justify-between mb-[20px] md:mb-[24px] lg:mb-[26px]">
            <p className="text-[8.93px] md:text-[11.58px] lg:text-[20px] font-[600] w-[30%]">
              Work Email
            </p>
            <div
              className={`inputBoxShadow w-[67%] h-[40px] lg:h-[45px]   rounded  flex items-center lg:hover:border-[#b3b3b3] lg:duration-300
                   ${
                     isFocused.includes(6)
                       ? "border-[#2684fe] border-2"
                       : "border-[#cdcdcd] border-[1px] "
                   }`}
              onFocus={() => handleFocus(6)}
              onBlur={() => handleBlur(6)}
            >
              <input
                className="w-full h-full text-[8.93px] md:text-[11.58px] lg:text-[20px] px-[7.5px] md:px-[10px] rounded  text-[#403f3f] outline-none "
                type="text"
                // placeholder="First name"
              />
            </div>
          </div>
          {/* Work email ends here*/}

          {/* Website starts here*/}
          <div className="flex items-center justify-between mb-[20px] md:mb-[24px] lg:mb-[26px]">
            <p className="text-[8.93px] md:text-[11.58px] lg:text-[20px] font-[600] w-[30%]">
              Website
            </p>
            <div
              className={`inputBoxShadow w-[67%] h-[40px] lg:h-[45px]    rounded  flex items-center lg:hover:border-[#b3b3b3] lg:duration-300
            
            ${
              isFocused.includes(7)
                ? "border-[#2684fe] border-2"
                : "border-[#cdcdcd] border-[1px] "
            }`}
              onFocus={() => handleFocus(7)}
              onBlur={() => handleBlur(7)}
            >
              <input
                className="w-full h-full text-[8.93px] md:text-[11.58px] lg:text-[20px] px-[10px] rounded 
                 text-[#403f3f] outline-none"
                type="text"
                // placeholder="Enter Company's website"
              />
            </div>
          </div>
          {/* Website ends here*/}

          {/* Mesage starts here*/}

          <div className="flex  justify-between mb-[20px] md:mb-[24px] lg:mb-[26px]">
            <p className="text-[8.93px] md:text-[11.58px] lg:text-[20px] font-[600] w-[30%]">
              Message
            </p>
            <div className=" w-[67%]    flex flex-col justify-center">
              <div>
                {" "}
                <textarea
                  id="message"
                  name="message"
                  className={`inputBoxShadow resize-none w-[100%] h-[150px] md:h-[170px] lg:h-[220px] text-[8.93px] md:text-[11.58px] lg:text-[20px] p-[10px] rounded  text-[#403f3f] outline-none lg:hover:border-[#b3b3b3] lg:duration-300 ${
                    isFocused.includes(8)
                      ? "border-[#2684fe] border-2"
                      : "border-[#cdcdcd] border-[1px] "
                  }`}
                  onFocus={() => handleFocus(8)}
                  onBlur={() => handleBlur(8)}
                />
              </div>
              <div className="flex justify-center mt-[20px] lg:mt-[25px]">
                <Bluebutton text="Submit" />
              </div>
            </div>
          </div>

          {/* Message ends here*/}
        </div>
      </div>

      {/*General Communication*/}
      <div className=" grid  md:grid-cols-5  grid-cols-1  mt-[40px] md:mt-[50px] lg:mt-[80px]">
        <div className="  md:col-span-3 ">
          <p
            className="text-[15px] md:text-[13.9px] lg:text-[24px] font-bold lg:tracking-wider  "
            style={{
              color: "#000",
            }}
          >
            General Communication
          </p>
          <p className="text-[#000] text-justify text-[12px] md:text-[9.34px] lg:text-lg sm:text:lg   mt-[14px] lg:mt-[25px]">
            We offer a variety of channels for communication with our customers,
            including phone, email, live chat, and social media. You can choose
            the channel that works best for you and your preferred mode of
            communication.
          </p>
        </div>
      </div>

      {/* /////////////////////////////////////////////////////////////////////// */}
      <div className=" grid grid-cols-2 md:grid-cols-4 gap-y-[20px] mt-[50px] lg:mt-[100px] md:mb-[15%] mb-[25%]">
        <div>
          <p
            className="text-[14.13px] font-[600] md:text-[15.2px] lg:text-[24px]"
            style={{ color: primaryColor }}
          >
            Technical Support
          </p>
          <p className="mt-[4.5px] md:mt-[7px] lg:mt-[10px]  lg:text-[18px] md:text-[11.45px] text-[10.01px]">
            developer@aremxyplug.com
          </p>
        </div>
        <div>
          <p
            className="text-[14.13px] font-[600] md:text-[15.2px] lg:text-[24px]"
            style={{ color: "#000" }}
          >
            Customer Support
          </p>
          <p className="mt-[4.5px] md:mt-[7px] lg:mt-[10px]  lg:text-[18px] md:text-[11.45px] text-[10.01px]">
            support@aremxyplug.com
          </p>
        </div>
        <div>
          <p
            className="text-[14.13px] font-[600] md:text-[15.2px] lg:text-[24px]"
            style={{ color: primaryColor }}
          >
            Partnership
          </p>
          <p className="mt-[4.5px] md:mt-[7px] lg:mt-[10px]  lg:text-[18px] md:text-[11.45px] text-[10.01px]">
            partnership@aremxyplug.com
          </p>
        </div>
        <div>
          <p
            className="text-[14.13px] font-[600] md:text-[15.2px] lg:text-[24px]"
            style={{ color: "#000" }}
          >
            General Inquiry
          </p>
          <p className="mt-[4.5px] md:mt-[7px] lg:mt-[10px]  lg:text-[18px] md:text-[11.45px] text-[10.01px]">
            hello@aremxyplug.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
