import React from "react";
import { useState } from "react";
// import styles from '../../MtnDataTopUp.module.css'
import { DashBoardLayout } from "../../../../Layout/DashBoardLayout";
import { ContextProvider } from "../../../../../Context";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Select from "../DataBundles-Images/Select.svg";
import DataBundle from "../DataBundles-Images/DataBundles.svg";
import Recipient from "../DataBundles-Images/Recipient.svg";
import Recipient2 from "../DataBundles-Images/Recipient2.svg";
import DataBalance from "../DataBundles-Images/DataBalance.svg";
import DataBalance2 from "../DataBundles-Images/DataBalance2.svg";
import MtnLogo from "..//MtnDataTopUpBundle/MtnDataTopUpBundleImages/MtnLogo.svg";
import arrowDown from "../MtnDataTopUpBundle/MtnDataTopUpBundleImages/ArrowDown.svg";
import PhoneNumber from "../MtnDataTopUpBundle/MtnDataTopUpBundleImages/PhoneNumber.svg";
import Recipient3 from "../MtnDataTopUpBundle/MtnDataTopUpBundleImages/Recipient.svg";
import Amount from "../MtnDataTopUpBundle/MtnDataTopUpBundleImages/Amount.svg";
import Flag from "../MtnDataTopUpBundle/MtnDataTopUpBundleImages/NaijaFlag.svg";
import Cancel from "../MtnDataTopUpBundle/MtnDataTopUpBundleImages/Cancel.svg";
import NaijaFlag from "../MtnDataTopUpBundle/MtnDataTopUpBundleImages/NaijaFlag.svg";
import  InputPinPopUp  from "../InputPinPopUp";
import "../../../DataTopUpPage/DataTopUp.css";







const MtnDataTopUpBundle = () => {
  const { isDarkMode } = useContext(ContextProvider);

  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [showProductList, setShowProductList] = useState(false);
  const [showOptionList, setShowOptionList] = useState(false);
  const [addRecipient, setAddRecipient] = useState(false);
  const [proceed, setProceed] = useState(false);
  const [recipientName, setRecipientName] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [showInputPinPopup, setShowInputPinPopup] = useState(false);


  



  if (addRecipient) {
    console.log("recipient added");
  } else {
    console.log("did not add recipient");
  }

  const productList = [
    {
      id: 1,
      name: "MTN SME",
      options: [
        "MTN SME 500MB (₦100) ~ 1 MONTH",
        "MTN SME 1GB (₦100) ~ 1 MONTH",
        "MTN SME 2GB (₦100) ~ 1 MONTH",
        "MTN SME 3GB (₦100) ~ 1 MONTH",
        "MTN SME 4GB (₦100) ~ 1 MONTH",
        "MTN SME 5GB (₦100) ~ 1 MONTH",
        "MTN SME 10GB (₦100) ~ 1 MONTH",
      ],
    },
    {
      id: 2,
      name: "MTN SME2",
      options: [
        "MTN SME2 500MB (₦100) ~ 1 MONTH",
        "MTN SME2 1GB (₦100) ~ 1 MONTH",
        "MTN SME2 2GB (₦100) ~ 1 MONTH",
        "MTN SME2 3GB (₦100) ~ 1 MONTH",
        "MTN SME2 4GB (₦100) ~ 1 MONTH",
        "MTN SME2 5GB (₦100) ~ 1 MONTH",
        "MTN SME2 10GB (₦100) ~ 1 MONTH",
      ],
    },
    {
      id: 3,
      name: "MTN CG",
      options: [
        "MTN CG 500MB (₦100) ~ 1 MONTH",
        "MTN CG 1GB (₦100) ~ 1 MONTH",
        "MTN CG 2GB (₦100) ~ 1 MONTH",
        "MTN CG 3GB (₦100) ~ 1 MONTH",
        "MTN CG 5GB (₦100) ~ 1 MONTH",
        "MTN CG 10GB (₦100) ~ 1 MONTH",
      ],
    },

    {
      id: 4,
      name: "MTN GIFTING",
      options: [
        "MTN 100MB (₦100) ~ 1 MONTH",
        "MTN 200MB (₦100) ~ 1 MONTH",
        "MTN 300MB (₦100) ~ 1 MONTH",
        "MTN 500MB (₦100) ~ 1 MONTH",
        "MTN 1GB (₦100) ~ 1 MONTH",
        "MTN 2GB (₦100) ~ 1 MONTH",
        "MTN 3GB (₦100) ~ 1 MONTH",
        "MTN 5GB (₦100) ~ 1 MONTH",
        "MTN 10GB (₦100) ~ 1 MONTH",
        "MTN 15GB (₦100) ~ 1 MONTH",
        "MTN 20GB (₦100) ~ 1 MONTH",
        "MTN 50GB (₦100) ~ 1 MONTH",
        "MTN 75GB (₦100) ~ 1 MONTH",
        "MTN 120GB (₦100) ~ 1 MONTH",
      ],
    },

    {
      id: 4,
      name: "MTN DIRECT COUPON",
      options: [
        "MTN DIRECT COUPON 500MB (₦100) ~ 1 MONTH",
        "MTN DIRECT COUPON 750MB (₦100) ~ 1 MONTH",
        "MTN DIRECT COUPON 1GB (₦100) ~ 1 MONTH",
        "MTN DIRECT COUPON 1.5GB (₦100) ~ 1 MONTH ",
        "MTN DIRECT COUPON 2GB (₦100) ~ 1 MONTH ",
        "MTN DIRECT COUPON 3GB (₦100) ~ 1 MONTH ",
        "MTN DIRECT COUPON 5GB (₦100) ~ 1 MONTH",
        "MTN DIRECT COUPON 10GB (₦100) ~ 1 MONTH",
      ],
    },
  ];

  const handleProceed = () => {
    setProceed(true);
  };

  const handleSelectProduct = (productName) => {
    setSelectedProduct(productName);
    setSelectedOption("");
    setShowProductList(false);
    setShowOptionList(true);
  };

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setShowOptionList(false);
  };

  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;

    const numericValue = value.replace(/\D/g, "").slice(0, 11);

    setInputValue(numericValue);
  };

  const [amountValue, setAmountValue] = useState("");

  const handleChanges = (e) => {
    const value = e.target.value;

    const numericAmountValue = value.replace(/\D/g, "").slice(0, 50);

    setAmountValue(`₦${numericAmountValue}`);
  };

  const handleRecipientNameChange = (e) => {
    setRecipientName(e.target.value);
  };

  const handleConfirm = () => {
    setProceed(false);
    setConfirm(true);
  };

  console.log("confirm:", confirm);



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

          <div className="flex gap-[15px]">
            <p className="flex text-[#7c7c7c] gap-[7px] text-[10px] leading-[130%] md:text-[18px] lg:text-[20px] 2xl:text-[28px]">
              Purchase
              <span>
                <img src={MtnLogo} alt="" />
              </span>{" "}
              MTN Data Instantly
            </p>
            <img src={Select} alt="" />
          </div>

          {/* =========================PRODUCTS============================== */}

          <div className="grid grid-cols-1 mt-[50px] md:grid-cols-2 gap-y-[20px] md:gap-x-[58.68px] lg:gap-x-[100px] md:gap-y-[15px] lg:gap-y-[25px] pb-[30px] lg:py-[60px]">
            <div className="relative">
              <h2 className="lg:text-[16px] lg:leading-[24px] mb-1 text-[10px] font-[600] leading-[12px]">
                Select Product
              </h2>
              <div
                className="border w-full h-[30px] rounded-[4px] pl-[4px] pr-[8px] lg:h-[51px] md:rounded-[6px] lg:rounded-[10px] lg:pl-[14px] lg:pr-[16px] flex items-center justify-between"
                onClick={() => setShowProductList(!showProductList)}
              >
                <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                  {selectedProduct}
                </h2>
                <button className="lg:w-6 lg:h-6 w-[11px] h-[11px]">
                  <img src={arrowDown} alt="" className="w-full h-full" />
                </button>
              </div>
              {showProductList && (
                <div className="border md:rounded-[10px] text-[10px] lg:mt-2 rounded-[4px] absolute w-full bg-[#FFF] z-[10]">
                  {productList.map((item) => (
                    <div
                      key={item.name}
                      className={`cursor-pointer border-y-[0.5px]  md:rounded-[10px] lg:mt-2 py-[4px] text-[10px] pl-[5px] ${
                        selectedProduct === item.name ? "bg-white" : ""
                      }`}
                      onClick={() => handleSelectProduct(item.name)}
                    >
                      {item.name}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="relative">
              <h2 className="lg:text-[16px] lg:leading-[24px] mb-1 text-[10px] font-[600] leading-[12px]">
                Select Network
              </h2>
              <div
                className="border w-full h-[30px] rounded-[4px] pl-[4px] pr-[8px] lg:h-[51px] md:rounded-[6px] lg:rounded-[10px] lg:pl-[14px] lg:pr-[16px] flex items-center justify-between"
                onClick={() => setShowOptionList(!showOptionList)}
              >
                <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                  {selectedOption}
                </h2>
                <button className="lg:w-6 lg:h-6 w-[11px] h-[11px]">
                  <img src={arrowDown} alt="" className="w-full h-full" />
                </button>
              </div>
              {showOptionList && (
                <div className="border md:rounded-[10px] lg:mt-2 rounded-[4px] absolute w-full bg-[#FFF] z-[100]">
                  {productList
                    .find((item) => item.name === selectedProduct)
                    ?.options.map((option, index) => (
                      <div
                        key={index}
                        className={`cursor-pointer border-y-[0.5px] md:rounded-[10px] lg:mt-2 py-[4px] text-[10px] pl-[5px] ${
                          selectedOption === option ? "bg-gray-200" : ""
                        }`}
                        onClick={() => handleSelectOption(option)}
                      >
                        {option}
                      </div>
                    ))}
                </div>
              )}
            </div>

            <div className="">
              <h2 className="text-[10px] font-[600]">
                Phone Number{" "}
                <span className="text-[#04177F]">(Select Recipient)</span>{" "}
              </h2>
              <div className="relative mt-[5px]">
                <input
                  type="number"
                  className="border w-full h-8 px-4 rounded-md text-[10px] font-[600] focus:outline-none"
                  placeholder="7745631289"
                  value={inputValue}
                  onChange={handleChange}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <img src={PhoneNumber} alt="" />
                </div>
              </div>
            </div>

            <div className="">
              <h2 className="text-[10px] font-[600]">
                Recipient Name<span className="text-[#7C7C7C]">(optional)</span>{" "}
              </h2>
              <div className="relative mt-[5px]">
                <input
                  type="text"
                  className="border w-full h-8 px-4 rounded-md text-[10px] font-[600] focus:outline-none"
                  placeholder=""
                  value={recipientName}
                  onChange={handleRecipientNameChange}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <img src={Recipient3} alt="" />
                </div>
              </div>
            </div>

            <div className="">
              <h2 className="text-[10px] font-[600]">Amount </h2>
              <div className="relative mt-[5px]">
                <input
                  type="text"
                  className="border w-full h-8 px-4 rounded-md text-[10px] font-[600] focus:outline-none"
                  placeholder="&#8358;100"
                  value={amountValue}
                  onChange={handleChanges}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <img src={Amount} alt="" />
                </div>
              </div>
            </div>

            <div className="">
              <h2 className="text-[10px] font-[600]">Payment Method</h2>
              <div className="relative mt-[5px]">
                <input
                  type="text"
                  className="border w-full h-8 px-4 text-[#7C7C7C] rounded-md text-[10px] font-[600] focus:outline-none"
                  placeholder=""
                  value="NGN Wallet (50,000.00)"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <img src={Flag} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <h2 className="text-[10px] font-[600] leading-[12px] lg:text-[16px] lg:leading-[24px]">
              Add to Recipient?
            </h2>
            <div
              onClick={() => setAddRecipient(!addRecipient)}
              className={` w-[20px] h-[8.4px] md:w-[30px] md:h-[12px] lg:w-[50px] lg:h-[22px] lg:rounded-full rounded 
                    ${addRecipient ? "bg-[#77ff60]" : "bg-[#b1b0b0]"}`}
            >
              <div
                className={`rounded-full w-[9.5px] h-[8.4px] md:w-[14px] md:h-[12px] lg:h-[22px] lg:w-[21px] lg:drop-shadow-md bg-[#fff] 
                    ${addRecipient ? "float-right" : "float-left"}`}
              ></div>
            </div>
          </div>

          {/* ================Proceed=================== */}

          {proceed && (
            <div className="fixed top-0 left-0 w-full h-full bg-black/[0.3] z-[300] flex justify-center items-center">
              <div
                className={`confirm mx-[5%] ${
                  isDarkMode ? "border bg-[#000]" : "bg-[#fff]"
                } lg:ml-[25%] lg:mr-[10%] md:mx-[25%] grow pt-[10px] mb-0 pb-[20px] rounded-tr-[8px] rounded-tl-[8px] relative md:rounded-[11.5px]`}
              >
                <div className="w-full flex justify-end border-b-[6px] border-primary px-[12px]">
                  <img src={Cancel} alt="" onClick={() => setProceed(false)} />
                </div>

                <div>
                  <h2 className="lg:text-[16px] lg:leading-[24px] text-center mb-1 text-[10px] font-[600] mt-[20px] leading-[12px]">
                    Confirm Transaction
                  </h2>
                  <h2 className="lg:text-[16px] lg:leading-[24px] text-[10px] leading-[12px] text-center mt-[26px] mx-[10px] mb-[20px]">
                    You are about to purchase{" "}
                    <span className="font-[600]">{selectedOption}</span> from
                    your NGN Wallet to
                  </h2>

                  <div className="flex flex-col gap-[15px] px-[20px] mt-[50px]">
                    <div className="flex items-center justify-between">
                      <h2 className="text-[#7C7C7C] text-[10px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                        Network
                      </h2>
                      <div className="flex gap-1">
                        <div className="rounded-full w-[12.02px] h-[12.02px] flex items-center justify-center text-[6px] overflow-hidden md:w-[12.02px] lg:w-[25px] md:h-[12.02px] lg:h-[25px]">
                          <img
                            src={MtnLogo}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h2 className="text-[10px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                          MTN
                        </h2>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <h2 className="text-[#7C7C7C] text-[10px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                        Product
                      </h2>
                      <div className="flex gap-1">
                        <h2 className="text-[10px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                          {selectedProduct}
                        </h2>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <h2 className="text-[#7C7C7C] text-[10px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                        Plan
                      </h2>
                      <div className="flex gap-1">
                        <h2 className="text-[10px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                          {selectedOption}
                        </h2>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <h2 className="text-[#7C7C7C] text-[10px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                        Phone Number
                      </h2>
                      <div className="flex gap-1">
                        <h2 className="text-[10px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                          {inputValue}
                        </h2>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <h2 className="text-[#7C7C7C] text-[10px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                        Recipient Name
                      </h2>
                      <div className="flex gap-1">
                        <h2 className="text-[10px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                          {recipientName}
                        </h2>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <h2 className="text-[#7C7C7C] text-[10px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                        Payment Method
                      </h2>
                      <div className="flex gap-1">
                        <h2 className="text-[10px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                          Nigerian NGN Wallet
                        </h2>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <h2 className="text-[#7C7C7C] text-[10px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                        Total Amount
                      </h2>
                      <div className="flex gap-1">
                        <h2 className="text-[10px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                          {amountValue}
                        </h2>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <h2 className="text-[#7C7C7C] text-[10px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                        Transaction Fee
                      </h2>
                      <div className="flex gap-1">
                        <h2 className="text-[10px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                          0.00
                        </h2>
                      </div>
                    </div>

                    <div className="my-[5px] flex justify-between items-center gap-2 bg-slate-200 -mx-[20px] px-[15px] h-[49px] py-[20px]">
                      <div className="flex items-center gap-[10px]">
                        <div className="w-[31px] h-[31px] rounded-full overflow-hidden p-2 bg-white">
                          <img
                            src={NaijaFlag}
                            alt=""
                            className="w-full h-full object-cover rounded-full"
                          />
                        </div>
                        <h2 className="text-[10px] font-[600] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                          Available Balance (₦50,000.00)
                        </h2>
                      </div>
                      <img
                        src={Select}
                        alt=""
                        className="w-[12px] h-[12px] md:w-[50px] md:h-[20px] lg:w-[80px] lg:h-[30px]"
                      />
                    </div>

                    <div className="flex items-center justify-center">
                    
                      <button
                        className="w-full md:w-fit bg-primary text-white rounded-md px-[28px] text-[10px] leading-[15px] lg:text-[16px] lg:leading-[24px] py-[15px]"
                        onClick={() => {
                          handleConfirm();
                        }}
                      >
                        Confirmed
                      </button>
                      
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

{/* {showInputPinPopup && <InputPinPopUp onClose={() => setShowInputPinPopup(false)} />} */}

          {confirm && 
          <InputPinPopUp onClose={() => setConfirm(false)}  />
          }
          


          <div className="py-[30px] lg:py-[60px] mt-10">
            <button
              className="w-full md:w-fit bg-primary text-white rounded-md px-[28px] text-[10px] leading-[15px] lg:text-[16px] lg:leading-[24px] py-[15px]"
              onClick={handleProceed}
            >
              Proceed
            </button>
          </div>




          {/* =======================FOOTER=================================== */}
          <div className="flex gap-2 justify-center items-center mb-[15%] md:mt-40 mt-[50%]">
            <h2 className="text-[8px] leading-[12px] lg:text-[12px]">
              You need help?
            </h2>
            <Link
              to={`/ContactUs`}
              className="text-[8px] leading-[12px] text-white bg-primary px-2 py-1 rounded-full lg:text-[8px]"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </DashBoardLayout>
  );
};

export default MtnDataTopUpBundle;
