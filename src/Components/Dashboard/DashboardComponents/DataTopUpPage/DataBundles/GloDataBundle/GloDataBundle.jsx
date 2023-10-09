import React from "react";
import { useState } from "react";
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
import GloLogo from "./GloLogo.svg";
import arrowDown from "../MtnDataTopUpBundle/MtnDataTopUpBundleImages/ArrowDown.svg";
import PhoneNumber from "../MtnDataTopUpBundle/MtnDataTopUpBundleImages/PhoneNumber.svg";
import Recipient3 from "../MtnDataTopUpBundle/MtnDataTopUpBundleImages/Recipient.svg";
import Amount from "../MtnDataTopUpBundle/MtnDataTopUpBundleImages/Amount.svg";
import Flag from "../MtnDataTopUpBundle/MtnDataTopUpBundleImages/NaijaFlag.svg";
import Cancel from "../MtnDataTopUpBundle/MtnDataTopUpBundleImages/Cancel.svg";
import NaijaFlag from "../MtnDataTopUpBundle/MtnDataTopUpBundleImages/NaijaFlag.svg";
import "../../../DataTopUpPage/DataTopUp.css";
import { Modal } from "../../../../../Screens/Modal/Modal";
import OtpInput from "react-otp-input";
import styles from "../../../TransferComponent/transfer.module.css";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { GloReceipt } from "./GloReceipt";
import Joi from "joi";

// import TransactFailedPopUp from "../../../TransferComponent/PopUps/TransactionFailedPopUp"
// import WalletModal from "../../../../../Wallet/WalletModal"
// import { RiFileCopyFill } from "react-icons/ri";

const GloDataBundle = () => {
  const { isDarkMode } = useContext(ContextProvider);

  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [showProductList, setShowProductList] = useState(false);
  const [showOptionList, setShowOptionList] = useState(false);
  const [addRecipient, setAddRecipient] = useState(false);
  const [proceed, setProceed] = useState(false);
  const [recipientName, setRecipientName] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [receipt] = useState(false);
  const [errors, setErrors] = useState({});
  const [recipientNumber, setRecipientNumber] = useState('');
  // const [showInputPinPopup, setShowInputPinPopup] = useState(false);

  const {
    toggleSideBar,
    inputPin,
    setInputPin,
    inputPinHandler,
    toggleVisibility,
    isVisible,
  } = useContext(ContextProvider);

  const handleConfirm = () => {
    setProceed(false);
    setConfirm(true);
  };

  const { transactSuccessPopUp, setTransactSuccessPopUp } =
    useContext(ContextProvider);

  const handleTransactionSuccessClose = () => {
    setTransactSuccessPopUp(false);
  };

  if (addRecipient) {
    console.log("recipient added");
  } else {
    console.log("did not add recipient");
  }

  const productList = [
    {
      id: 1,
      name: "GLO CG",
      options: [
        "GLO CG 100MB (₦100) ~ 1 MONTH",
        "GLO CG 200MB (₦100) ~ 1 MONTH",
        "GLO CG 300MB (₦100) ~ 1 MONTH",
        "GLO CG 500MB (₦100) ~ 1 MONTH",
        "GLO CG 1GB (₦100) ~ 1 MONTH",
        "GLO CG 2GB (₦100) ~ 1 MONTH",
        "GLO CG 3GB (₦100) ~ 1 MONTH",
        "GLO CG 5GB (₦100) ~ 1 MONTH",
        "GLO CG 10GB (₦100) ~ 1 MONTH",
      ],
    },
    {
      id: 2,
      name: "GLO GIFTING",
      options: [
        "GLO GIFTING 1.05GB (₦100) ~ 1 MONTH",
        "GLO GIFTING 2.9GB (₦100) ~ 1 MONTH",
        "GLO GIFTING 4.1GB (₦100) ~ 1 MONTH",
        "GLO GIFTING 5.8GB (₦100) ~ 1 MONTH",
        "GLO GIFTING 7.7GB (₦100) ~ 1 MONTH",
        "GLO GIFTING 10GB (₦100) ~ 1 MONTH",
        "GLO GIFTING 13.25GB (₦100) ~ 1 MONTH",
        "GLO GIFTING 18.25GB (₦100) ~ 1 MONTH",
        "GLO GIFTING 29.5GB (₦100) ~ 1 MONTH",
        "GLO GIFTING 50GB (₦100) ~ 1 MONTH",
        "GLO GIFTING 93GB (₦100) ~ 1 MONTH",
      ],
    },
    {
      id: 3,
      name: "GLO GENERAL BUNDLES ---",
      options: [
        
      ],
    },

  ];

  const handleProceed = () => {
    // setProceed(true);

    const { error } = schema.validate({
        recipientNumber,
        });
  
        if (error) {
        setErrors(
            error.details.reduce((acc, curr) => {
            acc[curr.path[0]] = curr.message;
            return acc;
            }, {})
        );
        } else {
        setProceed(true);
        setErrors({});
        }
  };

  const schema = Joi.object({
    recipientNumber: Joi.string()
      .pattern(new RegExp(/^\d{11,}/))
      .required()
      .messages({
        "string.pattern.base": "Phone number should be 11 digits ",
      }),
    
  });

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

          <div className="flex gap-[10%] mt-[40px] md:w-full md:justify-between md:gap-[10%] ">
            <div className="w-full flex items-center justify-between border text-[10px] md:py-[15px] md:w-[50%] rounded-[5px] h-[25px] p-1 md:text-[14px] lg:h-[45px] lg:text-[16px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]">
              <p className="font-extrabold">Select Recipient</p>
              <img
                className="w-[13px] h-[13px] lg:w-[29px] lg:h-[29px]"
                src={Recipient}
                alt=""
              />
            </div>
            <div className="w-full flex items-center justify-between border text-[10px] md:py-[15px] md:w-[40%] md:mr-[9%]  rounded-[5px] h-[25px] p-1 md:text-[14px] lg:h-[45px] lg:text-[16px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]">
              <p className="font-extrabold">Add Recipient</p>
              <img
                className="w-[13px] h-[13px] lg:w-[29px] lg:h-[29px]"
                src={Recipient2}
                alt=""
              />
            </div>
          </div>

          <div className="flex mt-[35px] my-[30px] md:w-[100%] md:gap-[10%]">
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
            <div className="hidden md:w-[50%] md:block"></div>
          </div>

          <div className="flex items-center my-[10%] gap-[8px] md:my-[5%] md:text-[18px] lg:text-[20px] md:hidden">
            <p className="text-[#7c7c7c] text-[10px] leading-[130%] md:text-[18px] lg:text-[20px] 2xl:text-[28px]">
              Select Network Type
            </p>
            <img
              src={Select}
              alt=""
              className="w-[12px] h-[12px] md:w-[50px] md:h-[20px] lg:w-[80px] lg:h-[30px]"
            />
          </div>

          <div className="flex gap-[15px]  justify-between md:w-full md:gap-[10%]">
            <div className="flex gap-[15px] md:w-[50%] md:justify-between">
              <p className="flex text-[#7c7c7c] gap-[7px] text-[10px] md:gap-[7px] leading-[130%] md:text-[12px] lg:text-[20px] 2xl:text-[28px]">
                Purchase
                <span>
                  <img
                    src={GloLogo}
                    alt=""
                    className="md:w-[20px] md:h-[15px] mt-[px] lg:w-[30px] lg:h-[25px] 2xl:mt-[5px]"
                  />
                </span>{" "}
                GLO Data Instantly
              </p>
              <img
                src={Select}
                alt=""
                className="md:w-[20px] md:h-[18px] lg:w-[30px] lg:h-[30px]"
              />
            </div>
            <div className="md:w-[50%]"></div>
          </div>

          {/* =========================PRODUCTS============================== */}

          <div className="grid grid-cols-1 mt-[50px] md:grid-cols-2 gap-y-[20px] md:gap-x-[58.68px] lg:gap-x-[100px] md:gap-y-[15px] lg:gap-y-[25px] pb-[30px] lg:py-[30px] md:mt-[40px]">
            <div className="relative">
              <h2 className="lg:text-[18px] lg:leading-[24px] mb-1 text-[10px] md:text-[12px] font-[600] leading-[12px]">
                Select Product
              </h2>
              <div
                className="border w-full h-[30px] rounded-[4px] pl-[4px] pr-[8px] lg:h-[51px] md:rounded-[6px] lg:rounded-[10px] lg:pl-[14px] lg:pr-[16px] flex items-center justify-between"
                onClick={() => setShowProductList(!showProductList)}
              >
                <h2 className="text-[10px] font-[600] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                  {selectedProduct}
                </h2>
                <button className="lg:w-6 lg:h-6 w-[11px] h-[11px]">
                  <img src={arrowDown} alt="" className="w-full h-full" />
                </button>
              </div>
              {showProductList && (
                <div className="border md:rounded-[10px] text-[10px] md:text-[12px] lg:text-[16px] lg:mt-2 rounded-[4px] absolute w-full bg-[#FFF] z-[10]">
                  {productList.map((item) => (
                    <div
                      key={item.name}
                      className={`cursor-pointer border-b-[0.5px] text-[#7C7C7C] md:text-[12px] lg:text-[16px]  md:rounded-[0px] lg:mt-2 py-[4px] text-[10px] pl-[5px] ${
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
              <h2 className="lg:text-[18px] md:text-[12px] lg:leading-[24px] mb-1 text-[10px] font-[600] leading-[12px]">
                Select Network
              </h2>
              <div
                className="border w-full h-[30px] rounded-[4px] pl-[4px] pr-[8px] lg:h-[51px] md:rounded-[6px] lg:rounded-[10px] lg:pl-[14px] lg:pr-[16px] flex items-center justify-between"
                onClick={() => setShowOptionList(!showOptionList)}
              >
                <h2 className="text-[10px] font-[600] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
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
                        className={`cursor-pointer border-b-[0.5px] md:rounded-[0px] text-[#7C7C7C] md:text-[12px] lg:text-[16px] lg:mt-2 py-[4px] text-[10px] pl-[5px] ${
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
              <h2 className="text-[10px] font-[600] md:text-[12px] lg:text-[18px]">
                Phone Number{" "}
                <span className="text-[#04177F]">(Select Recipient)</span>{" "}
              </h2>
              <div className="relative mt-[5px]">
                <input
                  type="number"
                  className="border w-full h-8 px-4 rounded-md text-[10px] lg:text-[16px] font-[600] focus:outline-none lg:h-[51px]"
                  placeholder="7745631289"
                  value={inputValue}
                  onChange={(event) => {
                    handleChange(event); 
                    setRecipientNumber(event.target.value); 
                  }}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <img
                    src={PhoneNumber}
                    alt=""
                    className="lg:w-[100%] lg:h-[50%]"
                  />
                </div>
              </div>
            </div>

            {errors.recipientNumber && (
                            <div className="text-[12px] text-red-500 italic lg:text-[14px]">
                            {errors.recipientNumber}
                            </div>
                        )}

            <div className="">
              <h2 className="text-[10px] font-[600] md:text-[12px] lg:text-[18px]">
                Recipient Name<span className="text-[#7C7C7C]">(optional)</span>{" "}
              </h2>
              <div className="relative mt-[5px]">
                <input
                  type="text"
                  className="border w-full h-8 px-4 rounded-md text-[10px] font-[600] focus:outline-none lg:h-[51px] lg:text-[16px]"
                  placeholder=""
                  value={recipientName}
                  onChange={handleRecipientNameChange}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <img
                    src={Recipient3}
                    alt=""
                    className="lg:w-[100%] lg:h-[50%]"
                  />
                </div>
              </div>
            </div>

            <div className="">
              <h2 className="text-[10px] font-[600] md:text-[12px] lg:text-[18px]">
                Amount{" "}
              </h2>
              <div className="relative mt-[5px]">
                <input
                  type="text"
                  className="border w-full h-8 px-4 rounded-md text-[10px] font-[600] focus:outline-none lg:h-[51px] lg:text-[16px]"
                  placeholder="&#8358;100"
                  value={amountValue}
                  onChange={handleChanges}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <img src={Amount} alt="" className="lg:w-[100%] lg:h-[50%]" />
                </div>
              </div>
            </div>

            <div className="">
              <h2 className="text-[10px] font-[600] md:text-[12px] lg:text-[18px]">
                Payment Method
              </h2>
              <div className="relative mt-[5px]">
                <input
                  type="text"
                  className="border w-full h-8 px-4 text-[#7C7C7C] rounded-md text-[10px] lg:text-[16px] font-[600] focus:outline-none lg:h-[51px]"
                  placeholder=""
                  value="NGN Wallet (50,000.00)"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <img src={Flag} alt="" className="lg:w-[100%] lg:h-[50%]" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 lg:mt-[30px]">
            <h2 className="text-[10px] font-[600] leading-[12px] lg:leading-[24px] md:text-[12px] lg:text-[18px]">
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
            <Modal>
              {/* <div className="fixed top-0 left-0 w-full h-full bg-black/[0.3] z-[300] flex justify-center items-center"> */}
              <div
                className={`confirm mx-[5%] ${
                  isDarkMode ? "border bg-[#000]" : "bg-[#fff]"
                } ${
                  toggleSideBar ? "md:w-[45%] lg:w-[40%] lg:ml-[20%]" : "lg:w-[40%]"
                } lg:ml-[10%] lg:mr-[10%] grow pt-[10px] mb-0 pb-[20px] rounded-tr-[8px] rounded-tl-[8px] relative md:rounded-[11.5px] md:mx-auto md:my-auto md:mb-[18%] md:overflow-auto`}
              >
                <div className="w-full flex justify-end border-b-[6px] border-primary px-[12px] md:h-[25px] lg:border-b-[10px] lg:mt-[20px]">
                  <img src={Cancel} alt="" onClick={() => setProceed(false)}  className="md:h-[120%] lg:h-[400%] lg:mt-[-25px] lg:pb-[20px]"/>
                </div>

                <div>
                  <h2 className="lg:text-[16px] lg:leading-[24px] text-center mb-1 text-[10px] md:text-[13px] font-[600] mt-[20px] leading-[12px]">
                    Confirm Transaction
                  </h2>
                  <h2 className="lg:text-[16px] md:text-[12px] md:px-[30px] lg:leading-[24px] text-[10px] leading-[12px] text-center mt-[26px] mx-[10px] mb-[20px]">
                    You are about to purchase{" "}
                    <span className="font-[600]">{selectedOption}</span> from
                    your NGN Wallet to
                  </h2>

                  <div className="flex flex-col gap-[15px] px-[20px] mt-[50px] md:gap-[25px]">
                    <div className="flex items-center justify-between">
                      <h2 className="text-[#7C7C7C] text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                        Network
                      </h2>
                      <div className="flex gap-1">
                        <div className="rounded-full w-[12.02px] h-[12.02px] flex items-center justify-center text-[6px] overflow-hidden md:w-[12.02px] lg:w-[25px] md:h-[12.02px] lg:h-[25px]">
                          <img
                            src={GloLogo}
                            alt=""
                            className="w-full h-full object-cover md:h-[15px]"
                          />
                        </div>
                        <h2 className="text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                          GLO
                        </h2>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <h2 className="text-[#7C7C7C] text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                        Product
                      </h2>
                      <div className="flex gap-1">
                        <h2 className="text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                          {selectedProduct}
                        </h2>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <h2 className="text-[#7C7C7C] text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                        Plan
                      </h2>
                      <div className="flex gap-1">
                        <h2 className="text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                          {selectedOption}
                        </h2>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <h2 className="text-[#7C7C7C] text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                        Phone Number
                      </h2>
                      <div className="flex gap-1">
                        <h2 className="text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                          {inputValue}
                        </h2>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <h2 className="text-[#7C7C7C] text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                        Recipient Name
                      </h2>
                      <div className="flex gap-1">
                        <h2 className="text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                          {recipientName}
                        </h2>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <h2 className="text-[#7C7C7C] text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                        Payment Method
                      </h2>
                      <div className="flex gap-1">
                        <h2 className="text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                          Nigerian NGN Wallet
                        </h2>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <h2 className="text-[#7C7C7C] text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                        Total Amount
                      </h2>
                      <div className="flex gap-1">
                        <h2 className="text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                          {amountValue}
                        </h2>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <h2 className="text-[#7C7C7C] text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                        Transaction Fee
                      </h2>
                      <div className="flex gap-1">
                        <h2 className="text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
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
                        <h2 className="text-[10px] font-[600] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
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
                        className="w-full md:w-fit bg-primary text-white rounded-md px-[28px] text-[10px] md:text-[12px] leading-[15px] lg:text-[16px] lg:leading-[24px] py-[15px] md:py-[10px]"
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
              {/* </div> */}
            </Modal>
          )}

          {confirm && (
            <Modal>
              <div
                className={`confirm2 ${styles.inputPin} ${
                  toggleSideBar
                    ? "md:w-[45%] lg:w-[40%] lg:ml-[20%]"
                    : "lg:w-[40%]"
                } md:w-[55%] w-[90%] md:mb-[0%] md:mx-auto md:my-auto lg:mx-auto lg:my-auto`}
              >
                <img
                  onClick={() => setConfirm(false)}
                  className="absolute cursor-pointer right-2 w-[18px] h-[18px] my-[1%] md:w-[35px] md:h-[25px] lg:w-[45px] lg:h-[45px] "
                  src={Cancel}
                  alt=""
                
                />

                <hr className="h-[6px] bg-[#04177f] lg:mt-[10%] border-none mt-[8%] md:mt-[6%] md:h-[10px]" />
                <p className="text-[10px] md:text-[16px] lg:text-[18px] font-extrabold text-center my-[8%] lg:my-[%]">
                  Input PIN to complete transaction
                </p>
                <div className="flex flex-col gap-[10px] justify-center items-center font-extrabold mb-[7%]">
                  <div className=" flex justify-center items-center ml-[5%] gap-[10px] md:ml-[5%] md:gap-[30px]">
                    {" "}
                    {isVisible ? (
                      <OtpInput
                        value={inputPin}
                        inputType="tel"
                        onChange={setInputPin}
                        numInputs={4}
                        shouldAutoFocus={true}
                        inputStyle={{
                          color: "#403f3f",
                          width: 30,
                          height: 30,
                          borderRadius: 3,
                        }}
                        renderInput={(props) => (
                          <input {...props} className="inputOTP mx-[3px]" />
                        )}
                      />
                    ) : (
                      <div className="text-[24px] md:text-[24px] mt-1">
                        * * * *{" "}
                      </div>
                    )}
                    <div
                      className="text-[#0003] text-xl md:text-3xl"
                      onClick={toggleVisibility}
                    >
                      {isVisible ? <AiFillEye /> : <AiFillEyeInvisible />}
                    </div>
                  </div>
                  <p className="text-[8px] md:text-[12px] text-[#04177f]">
                    Forgot Pin ?
                  </p>
                </div>

                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setConfirm(false);
                    inputPinHandler(e);
                  }}
                  disabled={inputPin.length !== 4}
                  className={`${
                    inputPin.length !== 4 ? "bg-[#0008]" : "bg-[#04177f]"
                  } my-[5%] w-[225px] flex justify-center items-center mx-auto cursor-pointer text-[10px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[16px] lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
                >
                  Purchase
                </button>
              </div>
            </Modal>
          )}

          {transactSuccessPopUp && (
            <Modal>
              {/* <TransactFailedPopUp/> */}
              <div
                className={`confirm ${styles.successfulTwo} ${
                  toggleSideBar
                    ? "md:w-[45%] lg:ml-[20%] lg:w-[40%]"
                    : "lg:w-[40%]"
                } md:w-[45%] w-[90%] overflow-auto md:mb-[18%] lg:mx-auto lg:my-auto`}
              >
                <div className="flex justify-between items-center mx-[3%] my-[2%] lg:my-[1%]">
                  <img
                    onClick={() => {
                      setTransactSuccessPopUp(false);
                      window.location.reload(); 
                    }}
                    className=" w-[18px] h-[18px] md:w-[35px] md:h-[35px] lg:w-[35px] lg:h-[25px]"
                    src="/Images/login/arpLogo.png"
                    alt=""
                  />

                  <img
                  onClick={() => {
                      setTransactSuccessPopUp(false);
                      window.location.reload(); 
                    }}
                    className=" w-[18px] h-[18px] md:w-[35px] md:h-[35px] lg:w-[29px] lg:h-[29px]"
                    src="/Images/transferImages/close-circle.png"
                    alt=""
                  />
                </div>
                <hr className="h-[6px] bg-[#04177f] border-none md:h-[10px]" />
                <h2 className="text-[12px] my-[4%] text-center md:text-[20px] md:my-[3%] lg:text-[14px] lg:my-[2%]">
                  Purchase Successful
                </h2>
                <img
                  className="w-[50px] h-[50px] mx-auto mb-[2%] lg:w-[250px] lg:h-[250px]"
                  src="./Gif/checkMarkGif.gif"
                  alt="/"
                />

                <div className="flex flex-col gap-2 lg:gap-4 px-[20px]">
                  <p className="text-[8px] text-[#0008] text-center mb-2 md:text-[14px] lg:text-[12px]">
                    You have successfully purchased{" "}
                    <span className="text-[#000] font-extrabold text-[10px] md:text-[16px] lg:text-[14px]">
                      {selectedOption}{" "}
                    </span>
                    from your NGN wallet to{" "}
                  </p>

                  <div className="flex items-center justify-between">
                    <h2 className="text-[#7C7C7C] text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                      Network
                    </h2>
                    <div className="flex gap-1">
                      <div className="rounded-full w-[12.02px] h-[12.02px] flex items-center justify-center text-[6px] overflow-hidden md:w-[12.02px] lg:w-[25px] md:h-[12.02px] lg:h-[25px]">
                        <img
                          src={GloLogo}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h2 className="text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                        GLO
                      </h2>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <h2 className="text-[#7C7C7C] text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                      Product
                    </h2>
                    <div className="flex gap-1">
                      <h2 className="text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                        {selectedProduct}
                      </h2>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <h2 className="text-[#7C7C7C] text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                      Plan
                    </h2>
                    <div className="flex gap-1">
                      <h2 className="text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                        {selectedOption}
                      </h2>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <h2 className="text-[#7C7C7C] text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                      Phone Number
                    </h2>
                    <div className="flex gap-1">
                      <h2 className="text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                        {inputValue}
                      </h2>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <h2 className="text-[#7C7C7C] text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                      Recipient Name
                    </h2>
                    <div className="flex gap-1">
                      <h2 className="text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                        {recipientName}
                      </h2>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <h2 className="text-[#7C7C7C] text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                      Amount
                    </h2>
                    <div className="flex gap-1">
                      <h2 className="text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                        {amountValue}
                      </h2>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <h2 className="text-[#7C7C7C] text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                      Payment Method
                    </h2>
                    <div className="flex gap-1">
                      <h2 className="text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                        Nigerian NGN Wallet
                      </h2>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <h2 className="text-[#7C7C7C] text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                      Order Number
                    </h2>
                    <div className="flex gap-1">
                      <h2 className="text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                        0124yend44
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="bg-[#F2FAFF] mx-10 h-[45px] my-5 flex justify-between items-center px-[4%] md:h-[75px] md:mx-[20px] md:rounded-[15px] lg:h-[75px]">
                  <p className="text-[6px] text-center mx-auto w-[171px] md:text-[9px] md:w-full lg:text-[14px]">
                    The data purchase has been sent successfully to the
                    recipient phone number. Please kindly engage the recipient
                    to check his/her balance to confirm the value. You can
                    contact us for any further assistance.
                  </p>
                </div>
                <div className="flex w-full justify-center mx-auto px-[50px] items-center gap-[5%] md:gap-0 mt-[50px] md:w-[50%] lg:gap-[10%] lg:mx-auto  lg:my-[5%] md:mt-[40px]">
                  <Link to="/GloDataBundle">
                    <button
                      onClick={() => {
                        handleTransactionSuccessClose(); 
                        window.location.reload(); 
                      }}
                      className={`bg-[#04177f] w-[111px] flex justify-center items-center mx-auto cursor-pointer text-[10px] font-[600] h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[12px] lg:w-[163px] lg:h-[38px] lg:my-[2%] md:px-[60px] md:h-[30px]`}
                    >
                      Done
                    </button>
                  </Link>
                  <Link to="/GloReceipt">
                    <button
                      onClick={handleTransactionSuccessClose}
                      className={`border-[1px] w-[100px] border-[#04177f] flex justify-center items-center mx-auto cursor-pointer text-[10px] font-[600] h-[40px] rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[12px] lg:w-[163px] lg:h-[38px] lg:my-[2%] md:px-[60px] md:h-[30px]`}
                    >
                      Receipt
                    </button>
                  </Link>
                </div>
              </div>
            </Modal>
          )}

{receipt && (
                <GloReceipt
                networkName="9MOBILE"
                selectedProduct={selectedProduct}
                selectedOption={selectedOption}
                recipientNumber={inputValue}
                amount={amountValue}
                recipientName={recipientName}
                />
            )}

          <div className="py-[30px] lg:py-[60px] mt-10">
            <button
              className={`w-full md:w-fit text-white rounded-md px-[28px] text-[10px] md:px-[30px] md:py-[10px] md:text-[13px] md:font-[600] leading-[15px] lg:text-[16px] 2xl:text-[20px] 2xl:px-[50px] 2xl:py-[10px] lg:leading-[24px] py-[15px] ${
                !selectedProduct ||
                !selectedOption ||
                !inputValue ||
                !amountValue
                  ? "bg-[#63616188] cursor-not-allowed"
                  : "bg-primary"
              }`}
              onClick={handleProceed}
              disabled={
                !selectedProduct ||
                !selectedOption ||
                !inputValue ||
                !amountValue
              }
            >
              Proceed
            </button>
          </div>

          {/* =======================FOOTER=================================== */}
          <div className="flex gap-2 justify-center items-center mb-[15%] md:mt-40 mt-[50%] lg:mt-[50%]">
            <h2 className="text-[8px] leading-[12px] lg:text-[16px]">
              You need help?
            </h2>
            <Link
              to={`/ContactUs`}
              className="text-[8px] leading-[12px] text-white bg-primary px-2 py-1 rounded-full lg:text-[16px] lg:px-[10px] lg:py-[10px]"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </DashBoardLayout>
  );
};

export default GloDataBundle;
