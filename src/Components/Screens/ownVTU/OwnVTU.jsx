import React, { useState } from "react";
import "./ownVTU.css";
import Bluebutton from "../../bluebutton/Bluebutton";
import { primaryColor } from "../cardIssuing/cardIssuing";
import Select from "react-select";
import "./ownVTU.css";
import ReactFlagsSelect from "chima-flags-select";
import { AiOutlineCaretDown } from "react-icons/ai";
import PhoneInput from "react-phone-number-input";

function OwnVTU() {
  const [phoneNumber, setPhoneNumber] = useState(null);
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

  const [choosePlan, setChoosePlan] = useState(null);
  const [country, setCountry] = useState(null);

  const options = [
    { value: "Merchant", label: "Merchant - 49,990" },
    { value: "Venture", label: "Venture - 149,990 " },
    { value: "TelecomPro", label: "Telecom pro - 399,990" },
    { value: "Unlimited", label: "Unlimited - 599,990" },
  ];

  // const colorStyles ={
  //   control:(styles)=>({...styles,backgoundColor:"red"})
  // }

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
            Own a VTU Platform Today!
          </p>
          <p className="text-[#000] text-justify text-[12px] md:text-[9.34px] lg:text-lg sm:text:lg   mt-[14px] lg:mt-[25px]">
            Get in touch with us today to develop your new VTU platform for your
            telecom business.
          </p>
        </div>
      </div>

      {/*contact us form*/}

      <div
        className=" grid  md:gap-x-4  md:grid-cols-5     
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
          {/* Choose a plan starts here*/}
          <div className="flex items-center  justify-between mb-[20px] md:mb-[24px] lg:mb-[26px]">
            <p className="text-[8.93px] md:text-[11.58px] lg:text-[20px] font-[600] w-[30%]">
              Choose a plan
            </p>
            <div className="inputBoxShadow2 w-[67%] h-[38px] lg:h-[43px]  flex items-center">
              <div className="w-full ">
                <Select
                  defaultValue={choosePlan}
                  onChange={setChoosePlan}
                  options={options}
                  placeholder=""
                  className="text-[8.93px] md:text-[11.58px] lg:text-[20px] text-[#403f3f] outline-none"
                  styles={{
                    placeholder: (baseStyles, state) => ({
                      ...baseStyles,
                      color: "#403f3f",
                    }),
                    valueContainer: (baseStyles, state) => ({
                      ...baseStyles,
                      color: "#403f3f",
                    }),
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      color: "red",
                    }),
                  }}
                />
              </div>
            </div>
          </div>
          {/* Choose a plan ends here*/}
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
              className={`inputBoxShadow w-[67%] h-[40px] lg:h-[45px]   rounded  flex items-center lg:hover:border-[#b3b3b3] lg:duration-300 border-[#cdcdcd] border-[1px] `}
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
              className={`relative inputBoxShadow w-[67%] h-[40px] lg:h-[45px]   rounded  flex items-center lg:hover:border-[#b3b3b3] lg:duration-300 pl-2
                   ${
                     isFocused.includes(4)
                       ? "border-[#2684fe] border-2"
                       : "border-[#cdcdcd] border-[1px]  "
                   }`}
              onFocus={() => handleFocus(4)}
              onBlur={() => handleBlur(4)}
            >
              <AiOutlineCaretDown className="absolute w-4 h-4 ml-2 text-[#4d4d4d]" />
              <form>
                <PhoneInput
                  international
                  value={phoneNumber}
                  onChange={(val) => setPhoneNumber(val)}
                />
              </form>
            </div>
          </div>
          {/* Phone number ends here*/}

          {/* Comapany starts here*/}
          <div className="flex items-center justify-between mb-[20px] md:mb-[24px] lg:mb-[26px]">
            <p className="text-[8.93px] md:text-[11.58px] lg:text-[20px] font-[600] w-[30%]">
              Comapany
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
              Proposed website names
            </p>
            <div className="w-[67%] grid grid-cols-3 gap-x-[3px]">
              <div
                className={`inputBoxShadow  h-[40px] lg:h-[45px]   rounded  flex items-center lg:hover:border-[#b3b3b3] lg:duration-300 ${
                  isFocused.includes(7)
                    ? "border-[#2684fe] border-2"
                    : "border-[#cdcdcd] border-[1px] "
                }`}
                onFocus={() => handleFocus(7)}
                onBlur={() => handleBlur(7)}
              >
                <input
                  className="w-full h-full text-[8.93px] md:text-[11.58px] lg:text-[20px] px-[7.5px] md:px-[10px] rounded  text-[#403f3f] outline-none "
                  type="text"
                  placeholder="example.com"
                />
              </div>
              <div
                className={`inputBoxShadow  h-[40px] lg:h-[45px]   rounded  flex items-center lg:hover:border-[#b3b3b3] lg:duration-300 ${
                  isFocused.includes(8)
                    ? "border-[#2684fe] border-2"
                    : "border-[#cdcdcd] border-[1px] "
                }`}
                onFocus={() => handleFocus(8)}
                onBlur={() => handleBlur(8)}
              >
                <input
                  className="w-full h-full text-[8.93px] md:text-[11.58px] lg:text-[20px] px-[7.5px] md:px-[10px] rounded  text-[#403f3f] outline-none "
                  type="text"
                  placeholder="example.com"
                />
              </div>
              <div
                className={`inputBoxShadow  h-[40px] lg:h-[45px]   rounded  flex items-center lg:hover:border-[#b3b3b3] lg:duration-300 ${
                  isFocused.includes(9)
                    ? "border-[#2684fe] border-2"
                    : "border-[#cdcdcd] border-[1px] "
                }`}
                onFocus={() => handleFocus(9)}
                onBlur={() => handleBlur(9)}
              >
                <input
                  className="w-full h-full text-[8.93px] md:text-[11.58px] lg:text-[20px] px-[7.5px] md:px-[10px] rounded  text-[#403f3f] outline-none "
                  type="text"
                  placeholder="example.com"
                />
              </div>
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
                    isFocused.includes(10)
                      ? "border-[#2684fe] border-2"
                      : "border-[#cdcdcd] border-[1px] "
                  }`}
                  onFocus={() => handleFocus(10)}
                  onBlur={() => handleBlur(10)}
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

export default OwnVTU;
