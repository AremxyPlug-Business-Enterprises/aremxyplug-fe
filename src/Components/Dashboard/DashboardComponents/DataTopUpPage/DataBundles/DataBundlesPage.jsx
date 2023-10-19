import React from "react";
import { useState } from "react";
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
import { Modal } from "../../../../Screens/Modal/Modal";

const DataBundlesPage = () => {
  const { isDarkMode } = useContext(ContextProvider);

  const [codes, setCodes] = useState(false);

  const {
    setSelectedNetworkProduct,
    setSelectedOption,
    setSelectedAmount,
    setRecipientNames,
    toggleSideBar,
  }
   = useContext(ContextProvider);


  const handleChange = () => {
    setSelectedNetworkProduct(false);
    setSelectedOption(false);
    setSelectedAmount('');
    setRecipientNames('');
  }

  const handleCodes =()=> {
    setCodes(false);
    setCodes(true);
  }
  
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
            className="w-full h-[90px] gap-[5px] md:h-[112.29px] lg:h-[196px] md:rounded-[11.5px] rounded-[7px] md:mt-[-1px] px-[10px] lg:gap-[50px] pt-[10px] lg:px-[30px] lg:rounded-[20px] lg:py-[20px] pb-[16px] flex justify-between items-center lg:ml-[-20px] lg:w-[102%] 2xl:w-full 2xl:ml-0"
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
              <Link to="/DataBundleSelectRecipient" style={{ display: 'inline-flex', width: '100%',}} className="justify-between">
              <p className="font-semibold">Select Recipient</p>
              <img
                className="w-[13px] h-[13px] md:w-[20px] md:h-[20px] lg:w-[29px] lg:h-[29px]"
                src={Recipient}
                alt=""
              />
              </Link>
            </div>
            
            <div className="w-full flex items-center justify-between border text-[10px] md:mr-[50px] lg:mr-[150px] rounded-[5px] h-[25px] p-1 md:text-[14px] lg:h-[45px] lg:text-[16px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]">
            <Link to="/DataBundleAddRecipient" style={{ display: 'inline-flex', width: '100%' }} className="justify-between">
              <p className="font-semibold">Add Recipient</p>
              <img
                className="w-[13px] h-[13px] md:w-[20px] md:h-[20px] lg:w-[29px] lg:h-[29px]"
                src={Recipient2}
                alt=""
              />
              </Link>
            </div>
            
          </div>

          <div onClick={handleCodes} className="flex mt-[35px] md:gap-[58.68px] lg:gap-[100px] lg:mt-[60px] my-[30px]">
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

            <Link to="/MtnDataTopUpBundle">
            <div
              id="Network"
              className="rounded-[4px] relative flex flex-col justify-center items-center"
              onClick={() => {
                handleChange();
              }}            >
              <img src={MTN} alt="" className="w-full" />
              <img
                src={Mtn1}
                alt=""
                className="absolute self-center md:w-[20%] lg:w-[25%]"
              />
            </div>
            </Link>
            
            <Link to="/AirtelDataBundle">
            <div
              id="Network"
              className="rounded-[4px] relative flex flex-col justify-center items-center"
              onClick={() => {
                handleChange();
              }}
            >
              <img src={Airtel} alt="" className="w-full" />
              <img
                src={Airtel1}
                alt=""
                className="absolute self-center md:w-[20%] lg:w-[25%]"
              />
            </div>
            </Link>

            <Link to="/GloDataBundle">
            <div
              id="Network"
              className="rounded-[4px] relative flex flex-col justify-center items-center"
              onClick={() => {
                handleChange();
              }}
            >
              <img src={Glo} alt="" className="w-full" />
              <img
                src={Glo1}
                alt=""
                className="absolute self-center md:w-[20%] lg:w-[25%]"
              />
            </div>
            </Link>

            <Link to="/EtisalatDataBundle">
            <div
              id="Network"
              className="rounded-[4px] relative flex flex-col justify-center items-center"
              onClick={() => {
                handleChange();
              }}
            >
              <img src={Mobile} alt="" className="w-full" />
              <img
                src={Mobile1}
                alt=""
                className="absolute self-center md:w-[20%] lg:w-[25%]"
              />
            </div>
            </Link>

              <Link to="/SmileDataBundle" >
            <div
              id="Network"
              className="rounded-[4px] relative flex flex-col justify-center items-center"
              onClick={() => {
                handleChange();
              }}
            >
              <img src={Smile} alt="" className="w-full" />
              <img
                src={Smile1}
                alt=""
                className="absolute self-center md:w-[20%] lg:w-[25%]"
              />
            </div>
            </Link>
            
            <Link to="/SpectranetdataBundle">
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
            </Link>
          </div>

          {codes && (
                <Modal>
                (
                <div
                    className={`code ${
                    toggleSideBar ? "xl:w-[65%] xl:ml-[17%] lg:ml-[20%] lg:w-[40%]" : "lg:w-[40%]"
                    } w-[90%] xl:w-[80%] overflow-auto`}
                >
                    <img
                    onClick={()=> setCodes(false)}
                    className="absolute cursor-pointer right-2 w-[18px] h-[18px] my-[1%] md:w-[35px] md:h-[35px] lg:w-[25px] lg:h-[25px] xl:h-[35px] xl:w-[35px]"
                    src="/Images/transferImages/close-circle.png"
                    alt=""
                    />
                    <hr className="h-[6px] bg-[#04177f] border-none mt-[8%] md:mt-[6%] md:h-[10px]" />

                    <button
                    className={`bg-[#04177f] my-[5%] w-[88%] flex justify-center items-center mx-auto cursor-pointer text-[12px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[50%] md:rounded-[8px] md:text-[16px] lg:text-[14px] xl:text-[20px] lg:w-[350px] lg:h-[38px] lg:my-[2%]`}
                    >
                    Data Balance USSD Codes
                    </button>
                    <h2 className="text-[12px] my-[5%] text-center md:my-[3%] md:text-[15px] lg:my-[2%] lg:text-[16px]">
                    Data balance / share ussd codes.
                    </h2>
                    <h2 className="text-[12px] px-[2%] my-[5%] text-blue-600 text-center md:my-[3%] md:text-[15px] lg:my-[2%] lg:text-[16px]">
                    Tap the network Dial button to check data balance:
                    </h2>
                    <div className='flex flex-col gap-1 mb-5'>
                        <button
                            className={`bg-[#FAF8F8] my-[2%] w-[88%] flex justify-center items-center mx-auto cursor-pointer text-[14px] font-semibold h-[44px] shadow-md text-black rounded-[6px] md:w-[55%] md:rounded-[8px] md:text-[16px] lg:text-[16px] lg:w-[410px] lg:h-[51px] lg:my-[2%] xl:my-[1%]`}
                            >
                            MTN Data Balance Code - *323#
                        </button>
                        <button
                            className={`bg-[#FAF8F8] my-[2%] w-[88%] flex justify-center items-center mx-auto cursor-pointer text-[14px] font-semibold h-[44px] shadow-md text-black rounded-[6px] md:w-[55%] md:rounded-[8px] md:text-[16px] lg:text-[16px] lg:w-[410px] lg:h-[51px] lg:my-[2%] xl:my-[1%]`}
                            >
                            MTN SME Data Balance Code - *461*4#
                        </button>
                        <button
                            className={`bg-[#FAF8F8] my-[2%] w-[88%] flex justify-center items-center mx-auto cursor-pointer text-[14px] font-semibold h-[44px] shadow-md text-black rounded-[6px] md:w-[55%] md:rounded-[8px] md:text-[16px] lg:text-[16px] lg:w-[410px] lg:h-[51px] lg:my-[2%] xl:my-[1%]`}
                            >
                            MTN CG Data Balance Code - *460*260#
                        </button>
                        <button
                            className={`bg-[#FAF8F8] my-[2%] w-[88%] flex justify-center items-center mx-auto cursor-pointer text-[14px] font-semibold h-[44px] shadow-md text-black rounded-[6px] md:w-[55%] md:rounded-[8px] md:text-[16px] lg:text-[16px] lg:w-[410px] lg:h-[51px] lg:my-[2%] xl:my-[1%]`}
                            >
                            MTN Direct Coupon Balance Code - *323*4#
                        </button>
                        <button
                            className={`bg-[#FAF8F8] my-[2%] w-[88%] flex justify-center items-center mx-auto cursor-pointer text-[14px] font-semibold h-[44px] shadow-md text-black rounded-[6px] md:w-[55%] md:rounded-[8px] md:text-[16px] lg:text-[16px] lg:w-[410px] lg:h-[51px] lg:my-[2%] xl:my-[1%]`}
                            >
                            MTN Data Share Code - *321#
                        </button>
                        <button
                            className={`bg-[#FAF8F8] mt-[10%] mb-[2%] w-[88%] flex justify-center items-center mx-auto cursor-pointer text-[14px] font-semibold h-[44px] shadow-md text-black rounded-[6px] md:w-[55%] md:mt-[5%] md:rounded-[8px] md:text-[16px] lg:text-[16px] lg:w-[410px] lg:h-[51px] lg:my-[2%] xl:mt-[5%] xl:mb-[1%]`}
                            >
                            AIRTEL Data Balance Code - *323#
                        </button>
                        <button
                            className={`bg-[#FAF8F8] my-[2%] w-[88%] flex justify-center items-center mx-auto cursor-pointer text-[14px] font-semibold h-[44px] shadow-md text-black rounded-[6px] md:w-[55%] md:rounded-[8px] md:text-[16px] lg:text-[16px] lg:w-[410px] lg:h-[51px] lg:my-[2%] xl:my-[1%]`}
                            >
                            AIRTEL Data Share Code - *321#
                        </button>
                        <button
                            className={`bg-[#FAF8F8] mt-[10%] mb-[2%] w-[88%] flex justify-center items-center mx-auto cursor-pointer text-[14px] font-semibold h-[44px] shadow-md text-black rounded-[6px] md:w-[55%] md:mt-[5%] md:rounded-[8px] md:text-[16px] lg:text-[16px] lg:w-[410px] lg:h-[51px] lg:my-[2%] xl:mt-[5%] xl:mb-[1%]`}
                            >
                            GLO Data Balance Code - *323#
                        </button>
                        <button
                            className={`bg-[#FAF8F8] my-[2%] w-[88%] flex justify-center items-center mx-auto cursor-pointer text-[14px] font-semibold h-[44px] shadow-md text-black rounded-[6px] md:w-[55%] md:rounded-[8px] md:text-[16px] lg:text-[16px] lg:w-[410px] lg:h-[51px] lg:my-[2%] xl:my-[1%]`}
                            >
                            GLO Data Share Code - *321#
                        </button>
                        <button
                            className={`bg-[#FAF8F8] mt-[10%] mb-[2%] w-[88%] flex justify-center items-center mx-auto cursor-pointer text-[14px] font-semibold h-[44px] shadow-md text-black rounded-[6px] md:w-[55%] md:mt-[5%] md:rounded-[8px] md:text-[16px] lg:text-[16px] lg:w-[410px] lg:h-[51px] lg:my-[2%] xl:mt-[5%] xl:mb-[1%]`}
                            >
                            9MOBILE Data Balance Code - *323#
                        </button>
                        <button
                            className={`bg-[#FAF8F8] my-[2%] w-[88%] flex justify-center items-center mx-auto cursor-pointer text-[14px] font-semibold h-[44px] shadow-md text-black rounded-[6px] md:w-[55%] md:rounded-[8px] md:text-[16px] lg:text-[16px] lg:w-[410px] lg:h-[51px] lg:my-[2%] xl:mt-[1%]`}
                            >
                            9MOBILE Data Share Code - *321#
                        </button>
                        <button
                            className={`bg-[#FAF8F8] mt-[10%] mb-[2%] w-[88%] flex justify-center items-center mx-auto cursor-pointer text-[14px] font-semibold h-[44px] shadow-md text-black rounded-[6px] md:w-[55%] md:mt-[5%] md:rounded-[8px] md:text-[16px] lg:text-[16px] lg:w-[410px] lg:h-[51px] lg:my-[2%] xl:mt-[5%] xl:mb-[1%]`}
                            >
                            SMILE Mobile USSD Code - *4504#
                        </button>
                    </div>

                    <button
                    onClick={()=> setCodes(false)}
                    className={`bg-[#04177f] my-[5%] w-[88%] flex justify-center items-center mx-auto cursor-pointer text-[14px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[16px] lg:text-[14px] lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
                    >
                    Okay
                    </button>
                </div>
                )
                </Modal>
            )}

          <footer className="flex justify-center text-center gap-[20px] mt-[320px] mb-[50px] md:mt-[750px] lg:mb-[30px] 2xl:mt-[500px]">
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
