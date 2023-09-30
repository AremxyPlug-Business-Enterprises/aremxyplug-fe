import React from "react";
import { DashBoardLayout } from "../../../Layout/DashBoardLayout";
import "../DataTopUp.css";
import { useContext } from "react";
import { ContextProvider } from "../../../../Context";
import DataBundle from "../DataBundles/DataBundles-Images/DataBundles.svg";
import Recipient from "../DataBundles/DataBundles-Images/Recipient.svg";
import Recipient2 from "../DataBundles/DataBundles-Images/Recipient2.svg";
import DataBalance from "../DataBundles/DataBundles-Images/DataBalance.svg";
import Select from "../DataBundles/DataBundles-Images/Select.svg";
import MTN from "../DataBundles/DataBundles-Images/MTN.svg";
import Airtel from "../DataBundles/DataBundles-Images/AIRTEL.svg";
import Glo from "../DataBundles/DataBundles-Images/GLO.svg";
import Mobile from "../DataBundles/DataBundles-Images/9MOBILE.svg";
import Smile from "../DataBundles/DataBundles-Images/SMILE.svg";
import Spectranet from "../DataBundles/DataBundles-Images/SPECTRANET.svg";
import { Link } from "react-router-dom";
import Mtn1 from "../DataBundles/DataBundles-Images/MTN1.svg";
import Airtel1 from "../DataBundles/DataBundles-Images/Airtel1.svg";
import Glo1 from "../DataBundles/DataBundles-Images/Glo1.svg";
import Mobile1 from "../DataBundles/DataBundles-Images/9Mobile1.svg";
import Smile1 from "../DataBundles/DataBundles-Images/Smile1.svg";
import Spectranet1 from "../DataBundles/DataBundles-Images/Spectranet1.svg";
import DataBalance2 from "../DataBundles/DataBundles-Images/DataBalance2.svg";

const DataBundlesPage = () => {
  const { isDarkMode } = useContext(ContextProvider);

  return (
    <DashBoardLayout>
      <div
        className={`bg-[#FFF] relative lg:ml-[20px] 2xl:ml-0 ${
          isDarkMode
            ? "bg-[#000] text-[#fff] border-[#fff]"
            : "bg-[#ffffff] text-[#000] "
        } flex flex-col justify-between h-full`}
      >
        <section
          className={`md:px-[0px] ${
            isDarkMode
              ? "bg-[#000] text-[#fff] border-[#fff]"
              : "bg-[#ffffff] text-[#000] "
          } `}
        >
          <div
            id="DataBundle"
            className="w-full h-[90px] gap-[5px] md:h-[112.29px] lg:h-[196px] md:rounded-[11.5px] rounded-[7px] md:mt-[-1px] px-[10px] lg:gap-[50px] pt-[10px] lg:px-[30px] lg:rounded-[20px] lg:py-[20px] pb-[16px] flex justify-between items-center"
          >
            <div className="w-[100%] pt-[19px] lg:pt-[20px] pl-[8.5px] md:pl-[9px]">
              <p className="text-[10px] mb-2 font-bold uppercase w-[100%] md:text-[16px] md:w-[70%] lg:w-[70%] lg:text-[20px] 2xl:w-[80%] 2xl:text-[24px] lg:mb-4">
                DATA BUNDLES, AFFORDABLE AND AUTOMATED.
              </p>
              <p className="text-[7px] font-[400] leading-[9px] mb-3 md:text-[10px] md:leading-[12.2px] w-[90%] md:w-[75%] lg:w-[75%] 2xl:w-[85%] 2xl:mt-[5px] lg:mt-[20px] lg:text-[16px] lg:leading-[26px] 2xl:text-[20px] lg:mb-[20px]">
                Top up your mobile sim with our automated data bundles directly
                from network providers, enjoy discounts without any hassle or
                hidden fee.
              </p>
            </div>

            <div className="w-[91px] h-[66px] lg:w-[199px] lg:h-[199px] lg:mt-[40px]">
              <img
                src={DataBundle}
                alt=""
                className="w-[55.482px] h-full md:w-[98px] md:h-[px] lg:w-[166.447px] lg:h-[150px]"
              />
            </div>
          </div>

          {/* =========================Select/Add Recipient===================== */}
          <div className="flex gap-[10%] md:gap-[8%] lg:gap-[7%] mt-[40px] lg:mt-[60px]">
            <div className="w-full flex items-center justify-between border text-[10px] md:w-[117%] lg:w-[132.5%] rounded-[5px] h-[25px] p-1 md:text-[14px] lg:h-[45px] lg:text-[16px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]">
              <p className="font-extrabold">Select Recipient</p>
              <img
                className="w-[13px] h-[13px] lg:w-[29px] lg:h-[29px]"
                src={Recipient}
                alt=""
              />
            </div>
            <div className="w-full flex items-center justify-between border text-[10px] md:mr-[50px] lg:mr-[150px] rounded-[5px] h-[25px] p-1 md:text-[14px] lg:h-[45px] lg:text-[16px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]">
              <p className="font-extrabold">Add Recipient</p>
              <img
                className="w-[13px] h-[13px] lg:w-[29px] lg:h-[29px]"
                src={Recipient2}
                alt=""
              />
            </div>
          </div>

          <div className="flex mt-[35px] md:gap-[58.68px] lg:gap-[100px] lg:mt-[60px] my-[30px]">
            <div className="rounded-[4px] w-full bg-primary text-white md:w-[50%] h-[30px] lg:h-[51px] md:rounded-[6px] lg:rounded-[10px] lg:pl-[14px] lg:pr-[16px] flex items-center justify-center md:justify-between gap-[10px] px-[5px]">
              <h2 className="lg:text-[16px] lg:leading-[24px] text-[10px] md:text-[12px] leading-[12px]">
                Data Balance USSD Codes
              </h2>
              <div className="lg:w-6 lg:h-6 w-[11px] h-[11px]">
                <img
                  src={DataBalance}
                  alt=""
                  className="w-full h-full md:hidden"
                />
                <img
                  src={DataBalance2}
                  alt=""
                  className="w-full h-full hidden md:block"
                />
              </div>
            </div>
            <div className="hidden md:w-1/2 md:block"></div>
          </div>

          <div className="flex items-center my-[10%] gap-[8px] md:my-[5%] md:text-[18px] lg:text-[20px]">
            <p className="text-[#7c7c7c] text-[10px] leading-[130%] md:text-[18px] lg:text-[20px] 2xl:text-[28px]">
              Select Network Type
            </p>
            <img
              src={Select}
              alt=""
              className="w-[12px] h-[12px] md:w-[50px] md:h-[20px] lg:w-[80px] lg:h-[30px]"
            />
          </div>

          {/* ======================NETWORK============================ */}

          <div className="grid grid-cols-2 gap-[30px] md:gap-[50px] sm:grid-cols-2 lg:gap-[90px] ">
            <div
              id="Network"
              className="rounded-[4px] relative flex flex-col justify-center items-center"
            >
              <img src={MTN} alt="" className="w-full" />
              <img
                src={Mtn1}
                alt=""
                className="absolute self-center md:w-[20%] lg:w-[25%]"
              />
            </div>

            <div
              id="Network"
              className="rounded-[4px] relative flex flex-col justify-center items-center"
            >
              <img src={Airtel} alt="" className="w-full" />
              <img
                src={Airtel1}
                alt=""
                className="absolute self-center md:w-[20%] lg:w-[25%]"
              />
            </div>

            <div
              id="Network"
              className="rounded-[4px] relative flex flex-col justify-center items-center"
            >
              <img src={Glo} alt="" className="w-full" />
              <img
                src={Glo1}
                alt=""
                className="absolute self-center md:w-[20%] lg:w-[25%]"
              />
            </div>

            <div
              id="Network"
              className="rounded-[4px] relative flex flex-col justify-center items-center"
            >
              <img src={Mobile} alt="" className="w-full" />
              <img
                src={Mobile1}
                alt=""
                className="absolute self-center md:w-[20%] lg:w-[25%]"
              />
            </div>

            <div
              id="Network"
              className="rounded-[4px] relative flex flex-col justify-center items-center"
            >
              <img src={Smile} alt="" className="w-full" />
              <img
                src={Smile1}
                alt=""
                className="absolute self-center md:w-[20%] lg:w-[25%]"
              />
            </div>

            <div
              id="Network"
              className="rounded-[4px] relative flex flex-col justify-center items-center"
            >
              <img src={Spectranet} alt="" className="w-full" />
              <img
                src={Spectranet1}
                alt=""
                className="absolute self-center md:w-[20%] lg:w-[25%]"
              />
            </div>
          </div>

          <footer className="flex justify-center text-center gap-[20px] mt-[265px] mb-[50px] lg:mt-[500px]">
            <p className="text-[8px] md:text-[12px] lg:text-[20px]  font-[500] leading-[9.1px] mt-[5px] lg:mt-[13px]">
              You need help?
            </p>

            <Link to="/ContactUs">
              <div
                className={`${
                  isDarkMode ? "border " : "bg-[#04177f]"
                } text-[8px] p-1 text-white rounded-[8px] lg:text-[18px]`}
              >
                Contact Us
              </div>
            </Link>
          </footer>
        </section>
      </div>
    </DashBoardLayout>
  );
};

export default DataBundlesPage;
