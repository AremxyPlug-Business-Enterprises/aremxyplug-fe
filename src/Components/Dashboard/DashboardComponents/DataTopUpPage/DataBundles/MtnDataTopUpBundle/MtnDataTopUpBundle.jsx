import React from "react";
import { useState, useEffect } from "react";
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
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { MtnReceipt } from "./MtnReceipt";
import Joi from "joi";
import airtimestyles from "../../../../../AirTimePage/AirtimeVtu.module.css";
import axios from "axios";
import Failed from "./MtnDataTopUpBundleImages/Failed.svg";
import Spinner from "./Spinner";
import { MtnFailedReceipt } from "./MtnFailedReceipt";

// import { DataBundleFailedPopUp } from "../../../TransferComponent/PopUps/TransactionFailedPopUp";

const countryList = [
  {
    id: 1,
    name: "Nigeria",
    code: "NGN",
    flag: require("../DataBundles-Images/ng.svg").default,
    amount: 0,
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

const productList = [
  {
    id: 1,
    name: "MTN SME & SME2",
    options: [
      { id: 6, name: "MTN SME & SME2 500MB", amount: "₦150", duration: "1 MONTH" },
      { id: 7, name: "MTN SME & SME2 1GB", amount: "₦275", duration: "1 MONTH" },
      { id: 8, name: "MTN SME & SME2 2GB", amount: "₦550", duration: "1 MONTH" },
      { id: 44, name: "MTN SME & SME2 3GB", amount: "₦825", duration: "1 MONTH" },
      { id: 11, name: "MTN SME & SME2 5GB", amount: "₦1375", duration: "1 MONTH" },
      { id: 43, name: "MTN SME & SME2 10GB", amount: "₦2750", duration: "1 MONTH" },
    ],
  },

  {
    id: 2,
    name: "MTN CG",
    options: [
      { id: 216, name: "MTN CG 50MB", amount: "₦40", duration: "1 MONTH" },
      { id: 217, name: "MTN CG 150MB", amount: "₦100", duration: "1 MONTH" },
      { id: 218, name: "MTN CG 250MB", amount: "₦130", duration: "1 MONTH" },
      { id: 219, name: "MTN CG 500MB", amount: "₦150", duration: "1 MONTH" },
      { id: 220, name: "MTN CG 1GB", amount: "₦285", duration: "1 MONTH" },
      { id: 221, name: "MTN CG 2GB", amount: "₦570", duration: "1 MONTH" },
      { id: 222, name: "MTN CG 3GB", amount: "₦855", duration: "1 MONTH" },
      { id: 223, name: "MTN CG 5GB", amount: "₦1425", duration: "1 MONTH" },
      { id: 224, name: "MTN CG 10GB", amount: "₦2850", duration: "1 MONTH" },
      { id: 225, name: "MTN CG 15GB", amount: "₦4275", duration: "1 MONTH" },
      { id: 226, name: "MTN CG 20GB", amount: "₦5700", duration: "1 MONTH" },
      { id: 227, name: "MTN CG 40GB", amount: "₦10000", duration: "1 MONTH" },
      { id: 228, name: "MTN CG 75GB", amount: "₦18750", duration: "1 MONTH" },
      {
        id: 229,
        name: "MTN CG 100GB",
        amount: "₦25000",
        duration: "1 MONTH",
      },
    ],
  },

  {
    id: 3,
    name: "MTN DIRECT COUPONS",
    options: [
      {
        id: 304,
        name: "MTN DIRECT COUPONS 500MB",
        amount: "₦200",
        duration: "WEEKLY",
      },
      {
        id: 264,
        name: "MTN DIRECT COUPONS 750MB",
        amount: "₦220",
        duration: "WEEKLY",
      },
      {
        id: 269,
        name: "MTN DIRECT COUPONS 1GB",
        amount: "₦260",
        duration: "WEEKLY",
      },
      {
        id: 265,
        name: "MTN DIRECT COUPONS 1.5GB",
        amount: "₦420",
        duration: "1 MONTH",
      },
      {
        id: 266,
        name: "MTN DIRECT COUPONS 2GB",
        amount: "₦550",
        duration: "1 MONTH",
      },
      {
        id: 267,
        name: "MTN DIRECT COUPONS 3GB",
        amount: "₦765",
        duration: "1 MONTH",
      },
      {
        id: 268,
        name: "MTN DIRECT COUPONS 4.5GB",
        amount: "₦1150",
        duration: "1 MONTH",
      },


      // NOT IN THE DATA DOCUMENTATION SO IT HAS NO ID

      {
        id: 268,
        name: "MTN DIRECT COUPONS 5GB",
        amount: "₦1275",
        duration: "1 MONTH",
      },

      {
        id: 268,
        name: "MTN DIRECT COUPONS 10GB",
        amount: "₦2550",
        duration: "1 MONTH",
      },
    ],
  },

  {
    id: 4,
    name: "MTN GIFTING",
    options: [
      {
        id: 312,
        name: "MTN GIFTING 40MB",
        amount: "₦50",
        duration: "DAILY",
      },
      {
        id: 310,
        name: "MTN GIFTING 100MB",
        amount: "₦100",
        duration: "DAILY",
      },
      {
        id: 306,
        name: "MTN GIFTING 200MB",
        amount: "₦100",
        duration: "DAILY DAY & NIGHT",
      },

      {
        id: 311,
        name: "MTN GIFTING 200MB",
        amount: "₦200",
        duration: "3 DAYS",
      },
      {
        id: 309,
        name: "MTN GIFTING 250MB",
        amount: "₦250",
        duration: "2 DAYS",
      },
      {
        id: 314,
        name: "MTN GIFTING 350MB",
        amount: "₦350",
        duration: "WEEKLY",
      },
      {
        id: 320,
        name: "MTN GIFTING 450MB",
        amount: "₦400",
        duration: "WEELY DAY & NIGHT",
      },
      {
        id: 308,
        name: "MTN GIFTING 750MB",
        amount: "₦350",
        duration: "3 DAYS",
      },

      {
        id: 315,
        name: "MTN GIFTING 750MB",
        amount: "₦500",
        duration: "WEEKLY",
      },

      {
        id: 321,
        name: "MTN GIFTING 750MB",
        amount: "₦500",
        duration: "2 WEEKS",
      },
      {
        id: 313,
        name: "MTN GIFTING 1GB",
        amount: "₦365",
        duration: "DAILY",
      },
      {
        id: 317,
        name: "MTN GIFTING 1GB",
        amount: "₦590",
        duration: "WEEKLY",
      },
      {
        id: 305,
        name: "MTN GIFTING 1GB",
        amount: "₦620",
        duration: "WEEKLY PLAN",
      },
      {
        id: 319,
        name: "MTN GIFTING 1.5GB",
        amount: "₦980",
        duration: "WEEKLY",
      },

      {
        id: 323,
        name: "MTN GIFTING 1.5GB",
        amount: "₦1200",
        duration: "1 MONTH",
      },

      {
        id: 316,
        name: "MTN GIFTING 2GB",
        amount: "₦980",
        duration: "WEEKLY",
      },

      {
        id: 322,
        name: "MTN GIFTING 2GB",
        amount: "₦1480",
        duration: "1 MONTH",
      },
      {
        id: 307,
        name: "MTN GIFTING 2.5GB",
        amount: "₦550",
        duration: "2 DAYS",
      },

      {
        id: 328,
        name: "MTN GIFTING 3GB",
        amount: "₦1550",
        duration: "1 MONTH",
      },

      {
        id: 324,
        name: "MTN GIFTING 4.5GB",
        amount: "₦2475",
        duration: "1 MONTH",
      },

      {
        id: 318,
        name: "MTN GIFTING 6GB",
        amount: "₦2100",
        duration: "WEEKLY",
      },

      {
        id: 330,
        name: "MTN GIFTING 6GB",
        amount: "₦3000",
        duration: "1 MONTH",
      },

      {
        id: 332,
        name: "MTN GIFTING 10GB",
        amount: "₦3500",
        duration: "1 MONTH",
      },

      {
        id: 325,
        name: "MTN GIFTING 12GB",
        amount: "₦4000",
        duration: "1 MONTH",
      },
      {
        id: 326,
        name: "MTN GIFTING 20GB",
        amount: "₦5500",
        duration: "1 MONTH",
      },

      {
        id: 329,
        name: "MTN GIFTING 25GB",
        amount: "₦6400",
        duration: "1 MONTH",
      },

      {
        id: 337,
        name: "MTN GIFTING 30GB",
        amount: "₦8000",
        duration: "2 MONTHS",
      },

      {
        id: 327,
        name: "MTN GIFTING 40GB",
        amount: "₦10750",
        duration: "1 MONTH",
      },
     
    
      {
        id: 331,
        name: "MTN GIFTING 75GB",
        amount: "₦15500",
        duration: "1 MONTH",
      },

      {
        id: 335,
        name: "MTN GIFTING 100GB",
        amount: "₦20000",
        duration: "2 MONTHS",
      },
   
      {
        id: 333,
        name: "MTN GIFTING 120GB",
        amount: "₦22000",
        duration: "1 MONTH",
      },

      {
        id: 336,
        name: "MTN GIFTING 160GB",
        amount: "₦30500",
        duration: "2 MONTHS",
      },
      {
        id: 334,
        name: "MTN GIFTING 200GB",
        amount: "₦30000",
        duration: "1 MONTH",
      },
    
      
      {
        id: 338,
        name: "MTN GIFTING 400GB",
        amount: "₦52000",
        duration: "3 MONTHS",
      },
      {
        id: 339,
        name: "MTN GIFTING 600GB",
        amount: "₦78000",
        duration: "3 MONTHS",
      },
      {
        id: 340,
        name: "MTN GIFTING 800GB",
        amount: "₦94200",
        duration: "6 MONTHS",
      },
      {
        id: 341,
        name: "MTN GIFTING 1TB",
        amount: "₦108000",
        duration: "1 YEAR",
      },
      {
        id: 342,
        name: "MTN GIFTING 2.5TB",
        amount: "₦257000",
        duration: "1 YEAR",
      },
      {
        id: 343,
        name: "MTN GIFTING 4.5TB",
        amount: "₦456000",
        duration: "1 YEAR",
      },
      {
        id: 344,
        name: "MTN GIFTING 25TB",
        amount: "₦5450000",
        duration: "1 YEAR",
      },
      // {
      //   id: 345,
      //   name: "MTN GIFTING 360MB",
      //   amount: "₦100000",
      //   duration: "1 MONTH",
      // },
    ],
  },

  {
    id: 6,
    name: "GENERAL BUNDLES ---",
    options: [],
  },
];

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
  const [errors, setErrors] = useState({});
  const [paymentSelected, setPaymentSelected] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [image, setImage] = useState("");
  const [paymentAmount, setPaymentAmount] = useState("");
  const [codes, setCodes] = useState(false);
  const [plan, setPlan] = useState("");
  const [purchaseStatus, setPurchaseStatus] = useState(null); // State to hold purchase status
  const [loading, setLoading] = useState("");
  const [proceedToShowReceipt] = useState(false);

  useEffect(() => {
    // Simulate async data loading
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const handleCodes = () => {
    setCodes(false);
    setCodes(true);
  };

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
    // inputPinHandler,
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

  // if (addRecipient) {
  //   console.log("recipient added");
  // } else {
  //   console.log("did not add recipient");
  // }

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
    setShowOptionList(false);
  };

  const handleSelectOption = (selectedOption, selectedAmount, duration, id) => {
    setPlan(id);
    console.log(id);
    setSelectedOption(selectedOption);
    setShowOptionList(false);
    setSelectedAmount(selectedAmount);
    // setDuration(duration);
  };

  const [inputValue, setInputValue] = useState("");

  // const proceedToShowReceipt = purchaseStatus === "paid" || purchaseStatus === "failed";


  const mtnRegex =
  /^(234|0)(703[0-9]|704[0-9]|706[0-9]|810[0-9]|813[0-9]|814[0-9]|816[0-9]|901[0-9]|903[0-9]|906[0-9]|913[0-9]|916[0-9])\d{6}$/;
  
  const validatePhoneNumber = (inputValue) => {
    if (!inputValue) {
      return "Phone number is required";
    }
  
    if (!mtnRegex.test(inputValue)) {
      return "Invalid MTN number. Please enter a valid MTN number.";
      
    }
    console.log("its me")
  
    return null;
  };


  const handleChange = (e) => {
    const value = e.target.value;
    const numericValue = value.replace(/\D/g, "").slice(0, 11);
    setInputValue(numericValue);
  
    // Validate phone number if it's complete
    if (numericValue.length === 11) {
      const error = validatePhoneNumber(numericValue);
      if (error) {
        setErrors({ recipientPhoneNumber: error });
      } else {
        setErrors({});
      }
    } else {
      // Clear any previous errors if the input length is less than 11
      setErrors({});
    }
  };

  const handleProceed = (e) => {

    console.log(recipientPhoneNumber)
    console.log(inputValue)



    e.preventDefault();

    function validateNigerianNumberByNetwork(inputValue) {
        const networks = {
            'MTN': ['0703', '0704', '0814', '0706', '0803', '0806', '0810', '0813', '0814', '0816', '0903', '0906', '0913', '0916'],
        };

        for (let network in networks) {
            for (let prefix of networks[network]) {
                if (inputValue.startsWith(prefix) && inputValue.length === prefix.length + 7) {
                    return network;
                }
            }
        }

        return 'Unknown network';
    }

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
    } else if (validateNigerianNumberByNetwork(recipientPhoneNumber) !== 'MTN') {
        setErrors({
            recipientPhoneNumber:
                `Invalid MTN number. Please enter a valid MTN number.`,
                
        });
        console.log("its me 2")
    } else {
        setProceed(true);
        setErrors({});
    }
};
  
  const handleRecipientNameChange = (e) => {
    setRecipientNames(e.target.value);
  };

  // console.log("confirm:", confirm);


    const [mtntransactionID, setMtnTransactionID] = useState("");
    const [mtnorderID, setMtnOrderID] = useState("");
    const [mtnrefNumber, setMtnRefNumber] = useState("");
    const [mtndescription, setMtnDescription] = useState("");


  const handleReceipt = () => {
    setTransactSuccessPopUp(false);
    // sendDataToBackend(1, recipientPhoneNumber, plan, recipientNames);
  };

  const inputPinHandler = async () => {
    async function buyData(network, mobileNumber, plan, name) {
      const url = 'https://aremxyplug.onrender.com/api/v1/data';

      const data = {
        network,
        mobile_number: mobileNumber,
        plan,
        name,
      };


      setLoading(true)


      console.log(data)
      console.log("its me")

      try {
          const response = await axios.post(url, data);
          console.log(response.data);
          console.log(response.status);
          // setSelectedNetworkProduct(response.data.product)
          // console.log(response.data.product)
          setPlan(response.data.plan_name)
          console.log(response.data.plan_name)
          setInputValue(response.data.Phone_Number)
          console.log(response.data.Phone_Number)
          setRecipientPhoneNumber(data.Phone_number)
          console.log(data.Phone_number)
          console.log(inputValue)
          console.log(recipientPhoneNumber)
          setRecipientNames(response.data.Name)
          console.log(response.data.Name)
          setSelectedAmount(response.data.plan_amount)
          console.log(response.data.plan_amount)
          setMtnTransactionID(response.data.transaction_id)
          console.log(response.data.transaction_id)
          setMtnRefNumber(response.data.reference_number)
          console.log(response.data.reference_number)
          setMtnOrderID(response.data.order_id)
          console.log(response.data.order_id)
          // setMtnDescription(response.data.description)
          // console.log(response.data.description)
          return { statusCode: response.status, data: response.data };
          // console.log(response.data);
      } catch (error) {
          console.error(error);
          return { statusCode: error.response.status, data: null };
      }
  }

  // usage
  const response = await buyData(
    1, recipientPhoneNumber, plan, recipientNames
  );

  console.log(response)
  console.log("its me 1")

  setLoading(false)



  setConfirm(false);
  if (response.statusCode === 200) {
      // Success response
      setTransactSuccessPopUp(true); // Show success popup
  } else {
      // Failure response
      setPurchaseStatus(true); // Show failure popup
  }

  };

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
          }`}
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
              <Link
                to="/DataBundleSelectRecipient"
                style={{ display: "inline-flex", width: "100%" }}
                className="justify-between"
              >
                <p className="font-semibold">Select Recipient</p>
                <img
                  className="w-[13px] h-[13px] lg:w-[29px] lg:h-[29px]"
                  src={Recipient}
                  alt=""
                />
              </Link>
            </div>
            <div className="w-full flex items-center justify-between border text-[10px] md:py-[15px] md:w-[40%] md:mr-[9%]  rounded-[5px] h-[25px] p-1 md:text-[14px] lg:h-[45px] lg:text-[16px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]">
              <Link
                to="/DataBundleAddRecipient"
                style={{ display: "inline-flex", width: "100%" }}
                className="justify-between"
              >
                <p className="font-semibold">Add Recipient</p>
                <img
                  className="w-[13px] h-[13px] lg:w-[29px] lg:h-[29px]"
                  src={Recipient2}
                  alt=""
                />
              </Link>
            </div>
          </div>

          <div
            onClick={handleCodes}
            className="flex mt-[35px] my-[30px] md:w-[100%] md:gap-[10%]"
          >
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
          <div className="flex gap-[15px]  justify-between md:w-full md:gap-[10%]">
            <div className="flex gap-[15px] md:w-[50%] md:justify-between">
              <p className="flex text-[#7c7c7c] gap-[7px] text-[10px] md:gap-[7px] leading-[130%] md:text-[12px] lg:text-[16px] 2xl:text-[20px]">
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

          {codes && (
            <Modal>
              (
              <div
                className={`code ${
                  toggleSideBar ? "code1" : "code01"
                } overflow-auto w-[90%]`}
              >
                <img
                  onClick={() => setCodes(false)}
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
                <h2 className="text-[12px] px-[5%] my-[5%] text-blue-600 text-center md:my-[3%] md:text-[15px] lg:my-[2%] lg:text-[16px]">
                  Tap the network Dial button to check data balance:
                </h2>
                <div className="flex flex-col gap-1 mb-5">
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
                </div>

                <button
                  onClick={() => setCodes(false)}
                  className={`bg-[#04177f] my-[5%] w-[88%] flex justify-center items-center mx-auto cursor-pointer text-[14px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[16px] lg:text-[14px] lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
                >
                  Okay
                </button>
              </div>
              )
            </Modal>
          )}

          {/* =========================PRODUCTS============================== */}

          <div className="grid grid-cols-1 mt-[25px] md:grid-cols-2 gap-y-[20px] md:gap-x-[58.68px] lg:gap-x-[100px] md:gap-y-[15px] lg:gap-y-[25px] pb-[30px] lg:py-[30px] md:mt-[20px]">
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
                    ?.options.map((option, index) => {
                      const amount = option.amount;
                      const duration = option.duration;
                      const id = option.id;

                      return (
                        <div
                          key={option.id}
                          className={`cursor-pointer border-b-[0.5px] md:rounded-[0px] text-[#7C7C7C] md:text-[12px] lg:text-[16px] lg:mt-2 py-[4px] text-[10px] pl-[5px] ${
                            selectedOption === option.id ? "bg-gray-200" : ""
                          }`}
                          onClick={() =>
                            handleSelectOption(
                              `${option.name} (${amount}) ~ ${duration}`,
                              amount,
                              duration,
                              id, // Pass the id here

                              console.log(id)
                            )
                          }
                        >
                          {`${option.name} (${amount}) ~ ${duration}`}
                        </div>
                      );
                    })}
                </div>
              )}
            </div>

            <div className="">
              <h2 className="text-[10px] font-[600] md:text-[12px] lg:text-[18px]">
                Phone Number{" "}
                <span className="text-[#04177F]">
                  <Link to="/DataBundleSelectRecipient">
                    (Select Recipient)
                  </Link>
                </span>{" "}
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

              {errors.recipientPhoneNumber && (
                <div className="text-[12px] text-red-500 italic lg:text-[14px]">
                  {errors.recipientPhoneNumber}
                </div>
              )}
            </div>

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
                <h2 className="lg:text-[18px] mt-[5px] lg:leading-[24px] mb-2 text-[10px] md:text-[12px] font-[600] leading-[12px]">
                  Payment Method
                </h2>
                <div className="input flex justify-between items-center border w-full h-8 px-2 rounded-md text-[10px] font-[600] focus:outline-none lg:h-[51px] lg:text-[16px]">
                  {paymentSelected ? (
                    <li
                      onClick={handleShowPayment}
                      className={airtimestyles.labelInput}
                    >
                      <h2 className="text-[#7C7C7C]">{walletName}</h2>
                      <h2 className="text-[#7C7C7C]">
                        Wallet ({paymentAmount.toLocaleString()}.00)
                      </h2>
                    </li>
                  ) : (
                    <h2
                      onClick={handleShowPayment}
                      className="text-[10px] lg:text-[14px]"
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
                <div
                  className={`border md:rounded-[10px] lg:mt-2 rounded-[4px] absolute ${
                    toggleSideBar
                      ? "w-full md:w-[44.5%] lg:w-[45%] 2xl:w-[46%]"
                      : "w-full md:w-[46%] 2xl:w-[46.5%]"
                  } bg-[#FFF] z-[100]`}
                >
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

          {loading && (
            <Modal>
              <Spinner size="large" />
            </Modal>
          )}

          {proceed && (
            <Modal>
              <div
                className={`scroll-bar ${
                  isDarkMode ? "border bg-[#000]" : "bg-[#fff]"
                } ${
                  toggleSideBar ? "confirm01" : "confirm"
                } grow pt-[10px] pb-[20px] rounded-tr-[8px] rounded-tl-[8px] relative md:rounded-[11.5px] md:mx-auto md:my-auto md:overflow-auto`}
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
                            className="w-full h-full object-cover md:h-[25px]"
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

          {purchaseStatus && (
            <Modal>
              <div
                className={` ${
                  toggleSideBar ? "confirm02" : "confirm2"
                } bg-white md:mx-auto md:my-auto lg:mx-auto lg:my-auto rounded-[12px]`}
              >
                <div className="flex justify-end px-2">
                  <img
                    onClick={() => setPurchaseStatus(null)}
                    className="cursor-pointer right-2 w-[18px] h-[18px] my-[1%] md:w-[35px] md:h-[25px] lg:w-[35px] lg:h-[35px] "
                    src={Cancel}
                    alt=""
                  />
                </div>

                <hr className="h-[6px] bg-[#04177f] lg:mt-[2%] border-none mt-[2%] md:mt-[2%] md:h-[10px]" />
                <div className="md:mt-[15%] lg:mt-[10%]">
                  <p className="text-[10px] md:text-[16px] lg:text-[18px] font-extrabold text-center my-[8%] md:my-[5%] lg:my-[3%]">
                    Transaction Failed
                  </p>
                  <div className="flex flex-col gap-[10px] justify-center items-center font-extrabold mb-[7%]">
                    <img src={Failed} alt="" />
                    <p className="text-[8px] md:text-[12px] text-[#04177f]">
                      An unexpected error has occurred, please try again.
                    </p>
                  </div>
                </div>

                <div className="flex justify-center items-center gap-[20px]">
                  <button
                    onClick={(e) => {
                      // e.preventDefault();
                      // setTransaction(false);
                      setPurchaseStatus(null);
                    }}
                    className="bg-[#04177f] my-[%] w-[100px] cursor-pointer text-[10px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[%] md:rounded-[8px] md:text-[16px] lg:w-[px] lg:h-[38px] lg:my-[2%]"
                  >
                    Done
                  </button>
                  
                  <Link to="/MtnFailedReceipt"
                  state={{
                    networkName: "MTN",
                    selectedNetworkProduct: selectedNetworkProduct,
                    selectedOption: selectedOption,
                    recipientPhoneNumber: recipientPhoneNumber,
                    inputValue: inputValue,
                    recipientNames: recipientNames,
                    selectedAmount: selectedAmount,
                    mtntransactionID: mtntransactionID,
                    mtnrefNumber: mtnrefNumber,
                    mtnorderID: mtnorderID,
                    mtndescription: mtndescription,
                }}
                  
                  >
                    <button
                      onClick={() => {
                        // e.preventDefault();
                        setPurchaseStatus(false);
                      }}
                      className="bg-white my-[%] w-[100px] cursor-pointer text-[10px] font-extrabold h-[px] rounded-[6px] md:w-[%] md:rounded-[8px] md:text-[16px] lg:w-[px] lg:h-[38px] lg:my-[2%]"
                    >
                      Receipt
                    </button>
                  </Link>
                </div>
              </div>
            </Modal>
          )}

          {confirm && (
            <Modal>
              <div
                className={` ${
                  toggleSideBar ? "confirm02" : "confirm2"
                } bg-white md:mx-auto md:my-auto lg:mx-auto lg:my-auto rounded-[12px]`}
              >
                <div className="flex justify-end px-2">
                  <img
                    onClick={() => setConfirm(false)}
                    className="cursor-pointer right-2 w-[18px] h-[18px] my-[1%] md:w-[35px] md:h-[25px] lg:w-[35px] lg:h-[35px] "
                    src={Cancel}
                    alt=""
                  />
                </div>

                <hr className="h-[6px] bg-[#04177f] lg:mt-[2%] border-none mt-[2%] md:mt-[2%] md:h-[10px]" />
                <div className="md:mt-[15%] lg:mt-[10%]">
                  <p className="text-[10px] md:text-[16px] lg:text-[18px] font-extrabold text-center my-[8%] md:my-[5%] lg:my-[3%]">
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
                </div>

                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setConfirm(false);
                    inputPinHandler();
                  }}
                  disabled={inputPin.length !== 4}
                  className={`${
                    inputPin.length !== 4 ? "bg-[#0008]" : "bg-[#04177f]"
                  } my-[5%] w-[225px] flex justify-center items-center mx-auto cursor-pointer text-[10px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[40%] md:rounded-[8px] md:text-[16px] lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
                >
                  Purchase
                </button>
              </div>
            </Modal>
          )}

          {transactSuccessPopUp && (
            <Modal>
              {/* <DataBundleFailedPopUp/> */}
              <div
                className={`scroll-bar ${
                  toggleSideBar ? "confirm01 w-[90%]" : "confirm w-[90%]"
                } bg-white rounded-[12px] md:my-auto mx-auto overflow-auto lg:mx-auto lg:my-auto`}
              >
                <div className="flex justify-between items-center mx-[3%] my-[2%] lg:my-[1%]">
                  <img
                    onClick={() => {
                      setTransactSuccessPopUp(false);
                      window.location.reload();
                    }}
                    className=" w-[18px] h-[15px] md:w-[35px] md:h-[32px] lg:w-[35px] lg:h-[22px]"
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
                  className="w-[50px] h-[50px] mx-auto mb-[2%] lg:w-[100px] lg:h-[100px]"
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
                      &#8358;{selectedAmount}
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
                        {mtnorderID}
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
                <div className="flex w-full justify-center mx-auto px-[50px] items-center gap-[5%] md:gap-[10%] mt-[30px] md:w-[50%] lg:gap-[10%] lg:mx-auto  lg:my-[5%] md:mt-[40px]">
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

                  <Link to="/MtnReceipt" state={{
                                        selectedNetworkProduct: selectedNetworkProduct,
                                        inputValue: inputValue,
                                        recipientPhoneNumber: recipientPhoneNumber,
                                        selectedOption: selectedOption,
                                        recipientNames: recipientNames,
                                        selectedAmount: selectedAmount,
                                        mtntransactionID: mtntransactionID,
                                        mtnrefNumber: mtnrefNumber,
                                        mtnorderID: mtnorderID,
                                        mtndescription: mtndescription,
                                    }}>
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
          
          {proceedToShowReceipt && (
            <MtnReceipt
            networkName='MTN'
            selectedNetworkProduct={selectedNetworkProduct}
            recipientPhoneNumber={recipientPhoneNumber}
            inputValue={inputValue}
            recipientNames={recipientNames}
            selectedAmount={selectedAmount}
            mtntransactionID={mtntransactionID}
            mtnrefNumber={mtnrefNumber}
            mtnorderID={mtnorderID}
            mtndescription={mtndescription}
            />
          )}

{proceedToShowReceipt && (
            <MtnFailedReceipt
            networkName='MTN'
            selectedNetworkProduct={selectedNetworkProduct}
            recipientPhoneNumber={recipientPhoneNumber}
            inputValue={inputValue}
            recipientNames={recipientNames}
            selectedAmount={selectedAmount}
            mtntransactionID={mtntransactionID}
            mtnrefNumber={mtnrefNumber}
            mtnorderID={mtnorderID}
            mtndescription={mtndescription}
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
        </section>
        {/* =======================FOOTER=================================== */}
        <div
          className={`${
            isDarkMode ? "" : ""
          } flex gap-[15px] justify-center items-center mt-[100%] pb-[25%] md:pb-[12%] md:mt-[40%] lg:mt-[40%] lg:pb-0`}
        >
          <div className="text-[10px] md:text-[12px] lg:text-[14px]">
            You need help ?
          </div>
          <Link to="/ContactUs">
            <div
              className={`${
                isDarkMode ? "border" : "bg-[#04177f]"
              } text-[10px] p-1 text-white rounded-[8px] lg:text-[18px]`}
            >
              Contact Us
            </div>
          </Link>
        </div>
      </div>
    </DashBoardLayout>
  );
};

export default MtnDataTopUpBundle;
