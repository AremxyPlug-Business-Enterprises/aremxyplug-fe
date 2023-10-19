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
import MtnLogo from "..//MtnDataTopUpBundle/MtnDataTopUpBundleImages/MtnLogo.svg";
import arrowDown from "../MtnDataTopUpBundle/MtnDataTopUpBundleImages/ArrowDown.svg";
import PhoneNumber from "../MtnDataTopUpBundle/MtnDataTopUpBundleImages/PhoneNumber.svg";
import Recipient3 from "../MtnDataTopUpBundle/MtnDataTopUpBundleImages/Recipient.svg";
import Amount from "../MtnDataTopUpBundle/MtnDataTopUpBundleImages/Amount.svg";
import Cancel from "../MtnDataTopUpBundle/MtnDataTopUpBundleImages/Cancel.svg";
import "../../../DataTopUpPage/DataTopUp.css";
import { Modal } from "../../../../../Screens/Modal/Modal";
import OtpInput from "react-otp-input";
import styles from "../../../TransferComponent/transfer.module.css";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { MtnReceipt } from "./MtnReceipt";
import Joi from "joi";
import airtimestyles from "../../../../../AirTimePage/AirtimeVtu.module.css";

const MtnDataTopUpBundle = () => {
  const { isDarkMode } = useContext(ContextProvider);
  const { selectedOption, setSelectedOption } = useContext(ContextProvider);
  const { selectedNetworkProduct, setSelectedNetworkProduct } =
    useContext(ContextProvider);
  const { recipientPhoneNumber, setRecipientPhoneNumber } =
    useContext(ContextProvider);
  const { selectedAmount, setSelectedAmount } = useContext(ContextProvider);
  const { recipientNames, setRecipientNames } = useContext(ContextProvider);
  const { walletName, setWalletName } = useContext(ContextProvider);

  const [showProductList, setShowProductList] = useState(false);
  const [showOptionList, setShowOptionList] = useState(false);
  const [addRecipient, setAddRecipient] = useState(false);
  const [proceed, setProceed] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [receipt] = useState(false);
  const [errors, setErrors] = useState({});
  const [paymentSelected, setPaymentSelected] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [image, setImage] = useState("");
  const [paymentAmount, setPaymentAmount] = useState("");

  const handleShowPayment = () => {
    setShowPayment(!showPayment);
    setWalletName("");
    setImage("");
    setPaymentAmount("");
    setPaymentSelected(false);
  };

  const handleSelectPayment = (code, flag, amount) => {
    setWalletName(code);
    setImage(flag);
    setPaymentAmount(amount);
    setShowPayment(false);
    setPaymentSelected(true);
  };

  const countryList = [
    {
      id: 1,
      name: "Nigeria",
      code: "NGN",
      flag: require("../DataBundles-Images/ng.svg").default,
      amount: 50000,
    },
    {
      id: 2,
      name: "United States",
      code: "USD",
      flag: require("../DataBundles-Images/us.svg").default,
      amount: 0,
    },
    {
      id: 3,
      name: "United Kingdom",
      code: "GBP",
      flag: require("../DataBundles-Images/gb.svg").default,
      amount: 0,
    },
    {
      id: 4,
      name: "European Union",
      code: "EUR",
      flag: require("../DataBundles-Images/eu.svg").default,
      amount: 0,
    },
    {
      id: 5,
      name: "Australia",
      code: "AUD",
      flag: require("../DataBundles-Images/au.svg").default,
      amount: 0,
    },
    {
      id: 6,
      name: "Kenya",
      code: "KSH",
      flag: require("../DataBundles-Images/ke.svg").default,
      amount: 0,
    },
  ];

  const Payment = ({ code, flag, amount, onClick }) => {
    return (
      <li className={airtimestyles.netList} onClick={onClick}>
        <div className={airtimestyles.netImage}>
          <img src={flag} alt="" className={airtimestyles.NoImage} />
        </div>
        <h2 className={airtimestyles.netName}>{code}</h2>
        <h2 className={airtimestyles.netName}>
          Wallet({amount.toLocaleString()}.00)
        </h2>
      </li>
    );
  };

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
      name: "MTN SME",
      options: [
        "MTN SME 500MB",
        "MTN SME 1GB",
        "MTN SME 2GB",
        "MTN SME 3GB",
        "MTN SME 4GB",
        "MTN SME 5GB",
        "MTN SME 10GB",
      ],

      amount: ["₦100", "₦200", "₦300", "₦500", "₦500", "₦800", "₦900"],

      duration: [
        "1 MONTH",
        "1 MONTH",
        "1 MONTH",
        "1 MONTH",
        "1 MONTH",
        "1 MONTH",
        "1 MONTH",
      ],
    },

    {
      id: 2,
      name: "MTN SME2",
      options: [
        "MTN SME2 500MB",
        "MTN SME2 1GB",
        "MTN SME2 2GB",
        "MTN SME2 3GB",
        "MTN SME2 4GB",
        "MTN SME2 5GB",
        "MTN SME2 10GB",
      ],
      amount: ["₦1050", "₦2500", "₦3500", "₦5800", "₦5300", "₦8100", "₦9500"],

      duration: [
        "1 MONTH",
        "1 MONTH",
        "1 MONTH",
        "1 MONTH",
        "1 MONTH",
        "1 MONTH",
        "1 MONTH",
      ],
    },
    {
      id: 3,
      name: "MTN CG",
      options: [
        "MTN CG 500MB",
        "MTN CG 1GB",
        "MTN CG 2GB",
        "MTN CG 3GB",
        "MTN CG 5GB",
        "MTN CG 10GB",
      ],

      amount: ["₦1000", "₦2050", "₦3030", "₦5600", "₦8900", "₦1900"],

      duration: [
        "1 MONTH",
        "1 MONTH",
        "1 MONTH",
        "1 MONTH",
        "1 MONTH",
        "1 MONTH",
      ],
    },

    {
      id: 4,
      name: "MTN GIFTING",
      options: [
        "MTN 100MB",
        "MTN 200MB",
        "MTN 300MB",
        "MTN 500MB",
        "MTN 1GB",
        "MTN 2GB",
        "MTN 3GB",
        "MTN 5GB",
        "MTN 10GB",
        "MTN 15GB",
        "MTN 20GB",
        "MTN 50GB",
        "MTN 75GB",
        "MTN 120GB",
      ],

      amount: [
        "₦1500",
        "₦2200",
        "₦3800",
        "₦5200",
        "₦5800",
        "₦8500",
        "₦9900",
        "₦1060",
        "₦2300",
        "₦3800",
        "₦5900",
        "₦5300",
        "₦8400",
        "₦9000",
      ],

      duration: [
        "1 MONTH",
        "1 MONTH",
        "6 MONTH",
        "1 MONTH",
        "1 MONTH",
        "1 MONTH",
        "1 MONTH",
        "1 MONTH",
        "1 MONTH",
        "1 MONTH",
        "1 MONTH",
        "1 MONTH",
        "1 MONTH",
        "1 MONTH",
      ],
    },

    {
      id: 4,
      name: "MTN DIRECT COUPON",
      options: [
        "MTN DIRECT COUPON 500MB",
        "MTN DIRECT COUPON 750MB",
        "MTN DIRECT COUPON 1GB",
        "MTN DIRECT COUPON 1.5GB",
        "MTN DIRECT COUPON 2GB",
        "MTN DIRECT COUPON 3GB",
        "MTN DIRECT COUPON 5GB",
        "MTN DIRECT COUPON 10GB",
      ],

      amount: [
        "₦1200",
        "₦2200",
        "₦3200",
        "₦5200",
        "₦5200",
        "₦8200",
        "₦9200",
        "₦9000",
      ],

      duration: [
        "1 MONTH",
        "1 MONTH",
        "1 MONTH",
        "1 MONTH",
        "1 MONTH",
        "1 MONTH",
        "1 MONTH",
        "1 MONTH",
      ],
    },

    {
      id: 3,
      name: "MTN GENERAL BUNDLES ---",
      options: [],
      amount: [],

      duration: [],
    },
  ];

  const handleProceed = (e) => {
    // setProceed(true);
    // e.preventDefault();

    const { error } = schema.validate({
      recipientPhoneNumber,
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
    recipientPhoneNumber: Joi.string()
      .pattern(new RegExp(/^\d{11,}/))
      .required()
      .messages({
        "string.pattern.base": "Phone number should be 11 digits ",
      }),
  });

  const handleSelectProduct = (productName) => {
    setSelectedNetworkProduct(productName);
    setSelectedOption("");
    setShowProductList(false);
    setShowOptionList(true);
  };

  const handleSelectOption = (selectedOption, selectedAmount, duration) => {
    setSelectedOption(selectedOption);
    setShowOptionList(false);
    setSelectedAmount(selectedAmount);
    // setDuration(duration);
  };

  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;

    const numericValue = value.replace(/\D/g, "").slice(0, 11);

    setInputValue(numericValue);
  };

  const handleRecipientNameChange = (e) => {
    setRecipientNames(e.target.value);
  };

  const handleReceipt = () => {
    setTransactSuccessPopUp(false);
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
                    src={MtnLogo}
                    alt=""
                    className="md:w-[20px] md:h-[15px] mt-[px] lg:w-[30px] lg:h-[25px] 2xl:mt-[5px]"
                  />
                </span>{" "}
                MTN Data Instantly
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
                className="input border w-full h-[30px] rounded-[4px] pl-[4px] pr-[8px] lg:h-[51px] md:rounded-[6px] lg:rounded-[10px] lg:pl-[14px] lg:pr-[16px] flex items-center justify-between"
                onClick={() => setShowProductList(!showProductList)}
              >
                <h2 className="text-[10px] font-[600] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                  {selectedNetworkProduct}
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
                        selectedNetworkProduct === item.name ? "bg-white" : ""
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
                Select Plan
              </h2>
              <div
                className="input border w-full h-[30px] rounded-[4px] pl-[4px] pr-[8px] lg:h-[51px] md:rounded-[6px] lg:rounded-[10px] lg:pl-[14px] lg:pr-[16px] flex items-center justify-between"
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
                    .find((item) => item.name === selectedNetworkProduct)
                    ?.options.map((optionItem, index) => {
                      const optionIndex = productList
                        .find((item) => item.name === selectedNetworkProduct)
                        ?.options.indexOf(optionItem);

                      if (optionIndex !== -1) {
                        const amount = productList.find(
                          (item) => item.name === selectedNetworkProduct
                        )?.amount[optionIndex];
                        const duration = productList.find(
                          (item) => item.name === selectedNetworkProduct
                        )?.duration[optionIndex];

                        return (
                          <div
                            key={index}
                            className={`cursor-pointer border-b-[0.5px] md:rounded-[0px] text-[#7C7C7C] md:text-[12px] lg:text-[16px] lg:mt-2 py-[4px] text-[10px] pl-[5px] ${
                              selectedOption === optionItem ? "bg-gray-200" : ""
                            }`}
                            onClick={() =>
                              handleSelectOption(
                                `${optionItem} (${amount}) ~ ${duration}`,
                                amount
                              )
                            }
                          >
                            {`${optionItem} (${amount}) ~ ${duration}`}
                          </div>
                        );
                      }

                      return null;
                    })}
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
                  className="input border w-full h-8 px-4 rounded-md text-[10px] lg:text-[16px] font-[600] focus:outline-none lg:h-[51px]"
                  placeholder=""
                  value={inputValue}
                  onChange={(event) => {
                    handleChange(event);
                    setRecipientPhoneNumber(event.target.value);
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

            {errors.recipientPhoneNumber && (
              <div className="text-[12px] text-red-500 italic lg:text-[14px]">
                {errors.recipientPhoneNumber}
              </div>
            )}

            <div className="">
              <h2 className="text-[10px] font-[600] md:text-[12px] lg:text-[18px]">
                Recipient Name<span className="text-[#7C7C7C]">(optional)</span>{" "}
              </h2>
              <div className="relative mt-[5px]">
                <input
                  type="text"
                  className="input border w-full h-8 px-4 rounded-md text-[10px] font-[600] focus:outline-none lg:h-[51px] lg:text-[16px]"
                  placeholder=""
                  value={recipientNames}
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
                Amount
              </h2>
              <div className="relative mt-[5px]">
                <input
                  type="text"
                  className="input border w-full h-8 px-4 rounded-md text-[10px] font-[600] focus:outline-none lg:h-[51px] lg:text-[16px]"
                  // placeholder="&#8358;100"
                  value={`${selectedAmount}`}
                  onChange={(event) => {
                    // handleChanges(event);
                    // handleSelectOption({};
                    // setSelectedAmount(event.target.value);
                  }}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <img src={Amount} alt="" className="lg:w-[100%] lg:h-[50%]" />
                </div>
              </div>
            </div>

            <div>
              <div onClick={handleShowPayment}>
                <h2 className={airtimestyles.head3}>Payment Method</h2>
                <div className={airtimestyles.input1}>
                  {paymentSelected ? (
                    <li
                      onClick={handleShowPayment}
                      className={airtimestyles.labelInput}
                    >
                      <h2 className={airtimestyles.head4}>{walletName}</h2>
                      <h2 className={airtimestyles.head4}>
                        Wallet({paymentAmount.toLocaleString()}.00)
                      </h2>
                    </li>
                  ) : (
                    <h2
                      onClick={handleShowPayment}
                      className={airtimestyles.head9}
                    >
                      Select Payment Method
                    </h2>
                  )}
                  {paymentSelected ? (
                    <button
                      className="rounded-full w-[12.02px] h-[12.02px] flex items-center justify-center text-[6px] overflow-hidden md:w-[12.02px] lg:w-[25px] md:h-[12.02px] lg:h-[25px]"
                      onClick={handleShowPayment}
                    >
                      <img
                        src={image}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ) : (
                    <button
                      className="lg:w-6 lg:h-6 h-[11px] w-[11px]"
                      onClick={handleShowPayment}
                    >
                      <img src={arrowDown} alt="" className="w-full h-full" />
                    </button>
                  )}
                </div>
              </div>
              {showPayment && (
                <div className={airtimestyles.colDown}>
                  {countryList.map((country) => (
                    <Payment
                      key={country.id}
                      flag={country.flag}
                      code={country.code}
                      amount={country.amount}
                      onClick={() =>
                        handleSelectPayment(
                          country.code,
                          country.flag,
                          country.amount
                        )
                      }
                    />
                  ))}
                </div>
              )}
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
              <div
                className={`confirm mx-[5%] ${
                  isDarkMode ? "border bg-[#000]" : "bg-[#fff]"
                } ${
                  toggleSideBar
                    ? "md:w-[45%] md:ml-[20%] lg:w-[40%] lg:ml-[20%]"
                    : "lg:w-[40%]"
                } lg:ml-[10%] lg:mr-[10%] grow pt-[10px] md:mt-[1%] mb-0 pb-[20px] rounded-tr-[8px] rounded-tl-[8px] relative md:rounded-[11.5px] md:mx-auto md:my-auto md:mb-[18%] md:overflow-auto`}
              >
                <div className="w-full flex justify-end border-b-[6px] border-primary px-[12px] md:h-[25px] lg:border-b-[10px] lg:mt-[20px]">
                  <img
                    src={Cancel}
                    alt=""
                    onClick={() => setProceed(false)}
                    className="md:h-[120%] lg:h-[400%] lg:mt-[-25px] lg:pb-[20px]"
                  />
                </div>

                <div>
                  <h2 className="lg:text-[16px] lg:leading-[24px] text-center mb-1 text-[10px] md:text-[13px] font-[600] mt-[20px] leading-[12px]">
                    Confirm Transaction
                  </h2>
                  <h2 className="lg:text-[16px] md:text-[12px] md:px-[30px] lg:leading-[24px] text-[10px] leading-[12px] text-center mt-[26px] mx-[10px] mb-[20px]">
                    You are about to purchase{" "}
                    <span className="font-[600]">{selectedOption}</span> from
                    your {walletName + " Wallet"} to
                  </h2>

                  <div className="flex flex-col gap-[15px] px-[20px] mt-[50px] md:gap-[25px]">
                    <div className="flex items-center justify-between">
                      <h2 className="text-[#7C7C7C] text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                        Network
                      </h2>
                      <div className="flex gap-1">
                        <div className="rounded-full w-[12.02px] h-[12.02px] flex items-center justify-center text-[6px] overflow-hidden md:w-[12.02px] lg:w-[25px] md:h-[12.02px] lg:h-[25px]">
                          <img
                            src={MtnLogo}
                            alt=""
                            className="w-full h-full object-cover md:h-[15px]"
                          />
                        </div>
                        <h2 className="text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                          MTN
                        </h2>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <h2 className="text-[#7C7C7C] text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                        Product
                      </h2>
                      <div className="flex gap-1">
                        <h2 className="text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                          {selectedNetworkProduct}
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
                          {recipientNames}
                        </h2>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <h2 className="text-[#7C7C7C] text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                        Payment Method
                      </h2>
                      <div className="flex gap-1">
                        <h2 className="text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                          {walletName + " Wallet"}
                        </h2>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <h2 className="text-[#7C7C7C] text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                        Total Amount
                      </h2>
                      <div className="flex gap-1">
                        <h2 className="text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                          {selectedAmount}
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
                      <div className="flex gap-2 items-center">
                        <div className="bg-white rounded-full h-[27px] w-[27px] flex justify-center items-center">
                          <img
                            className="w-[16px] h-[16px]"
                            src={image}
                            alt="/"
                          />
                        </div>
                        <p className="text-[10px] md:text-[14px]  lg:text-[16px]">
                          Available Balance{" "}
                          <span className="text-[#0003]">
                            ( {walletName + paymentAmount}.00 )
                          </span>
                        </p>
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
            </Modal>
          )}

          {confirm && (
            <Modal>
              <div
                className={`confirm2 ${styles.inputPin} ${
                  toggleSideBar
                    ? "md:w-[45%] md:ml-[20%] lg:w-[40%] lg:ml-[20%]"
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
                    ? "md:w-[45%] md:ml-[20%] lg:ml-[20%] lg:w-[40%]"
                    : "lg:w-[40%]"
                } md:w-[45%] w-[90%] md:my-auto md:mt-[.5%] mx-auto overflow-auto md:mb-[18%] lg:mx-auto lg:my-auto`}
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
                    from your {walletName + " Wallet"} to{" "}
                  </p>

                  <div className="flex items-center justify-between">
                    <h2 className="text-[#7C7C7C] text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
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
                      <h2 className="text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                        MTN
                      </h2>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <h2 className="text-[#7C7C7C] text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                      Product
                    </h2>
                    <div className="flex gap-1">
                      <h2 className="text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                        {selectedNetworkProduct}
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
                        {recipientNames}
                      </h2>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <h2 className="text-[#7C7C7C] text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                      Amount
                    </h2>
                    <div className="flex gap-1">
                      <h2 className="text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                        {selectedAmount}
                      </h2>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <h2 className="text-[#7C7C7C] text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                      Payment Method
                    </h2>
                    <div className="flex gap-1">
                      <h2 className="text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                        {walletName + " Wallet"}
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
                <div className="flex w-full justify-center mx-auto px-[50px] items-center gap-[5%] md:gap-[10%] mt-[50px] md:w-[50%] lg:gap-[10%] lg:mx-auto  lg:my-[5%] md:mt-[40px]">
                  <Link to="/MtnDataTopUpBundle">
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

                  <Link to="/MtnReceipt">
                    <button
                      onClick={handleReceipt}
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
            <MtnReceipt
              networkName="MTN"
              selectedOption={selectedOption}
              selectedNetworkProduct={selectedNetworkProduct}
              recipientNumber={inputValue}
              selectedAmount={selectedAmount}
              recipientNames={recipientNames}
              walletName={walletName}
            />
          )}

          <div className="py-[30px] lg:py-[60px] mt-10">
            <button
              className={`w-full md:w-fit text-white rounded-md px-[28px] text-[10px] md:px-[30px] md:py-[10px] md:text-[13px] md:font-[600] leading-[15px] lg:text-[16px] lg:px-[60px] lg:py-[15px] 2xl:text-[20px] 2xl:px-[50px] 2xl:py-[10px] lg:leading-[24px] py-[15px] ${
                !selectedNetworkProduct ||
                !selectedOption ||
                !inputValue ||
                !selectedAmount ||
                !paymentSelected
                  ? "bg-[#63616188] cursor-not-allowed"
                  : "bg-primary"
              }`}
              onClick={handleProceed}
              disabled={
                !selectedNetworkProduct ||
                !selectedOption ||
                !inputValue ||
                !selectedAmount ||
                !paymentSelected
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

export default MtnDataTopUpBundle;
