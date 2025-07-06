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
import EtisalatLogo from "./EtisalatLogo.svg";
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
import Joi from "joi";
import airtimestyles from "../../../../../AirTimePage/AirtimeVtu.module.css";
import Failed from "../MtnDataTopUpBundle/MtnDataTopUpBundleImages/Failed.svg"
import axiosInstance from "../../../../../ApiCollection.jsx/apiClient";
import { VerifyTransPin } from "../../../../../ApiCollection.jsx/ApiBuck";
import { Loader } from "../../../../../Loader/Loader";
import { GetFunction } from "../../../../../ApiCollection.jsx/ApiBuck";



const EtisalatDataBundle = () => {
  const { isDarkMode, newBalance,setNewBalance } = useContext(ContextProvider);
 const {selectedOptionEtisalat,
    setSelectedOptionEtisalat,
   selectedNetworkProductEtisalat,
    setSelectedNetworkProductEtisalat,
    recipientPhoneNumberEtisalat,
    setRecipientPhoneNumberEtisalat,
    selectedAmountEtisalat,
    setSelectedAmountEtisalat,
    recipientNamesEtisalat,
    setRecipientNamesEtisalat,
    walletNameEtisalat,
    setWalletNameEtisalat,
      selectedProductEtisalat,
       toggleSideBar,
    inputPin,
    setInputPin,
    // inputPinHandler,
    toggleVisibility,
    isVisible,
    setSelectedProductEtisalat} = useContext(ContextProvider)
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
  const [etisalatpurchaseStatus, setEtisalatPurchaseStatus] = useState(null); // State to hold purchase status
  const [loading, setLoading] = useState("");
  const [products, setProducts] = useState([]);
  const [productPlans, setProductPlans] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(false);
  const [loadingPlans, setLoadingPlans] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false); 
  const [errorMessage, setErrorMessage] = useState("");
const [balanceStatus,setBalanceStatus ] = useState("");
const [selectProductWarn, setSelectProductWarn] = useState(false);
const [selectPlanWarn, setSelectPlanWarn]  = useState(false);
const [passDataBalance, setPassDataBalance] = useState({});
const [etisalatReceiptInfo, setEtisalatReceiptInfo] = useState("");
   let balanceStringToNum = Number(newBalance);

  let etisalatDataAmount = Number(selectedAmountEtisalat.replace(/\D/g, ""));
   let updateBalance = passDataBalance.data ? passDataBalance.data.data.data.balance : "";
   let cleanUpBalanceToNumeric = Number(updateBalance.replace(/\D/g, ""));
             let CheckSufficiency =  etisalatDataAmount > ( newBalance === "" ?  cleanUpBalanceToNumeric : balanceStringToNum  )

  useEffect(() => {
    const fetchProducts = async () => {
      setLoadingProducts(true);
      try {
        const response = await axiosInstance.get(
          '/products/telecom/list/3'
        );
        setProducts(response.data.data.products || []);
      } catch (error) {
        console.error("Error fetching products:", error);
           if(error && error.response === undefined){
             alert("Check your internet Connection, then reload the page.")
          } else if(error && error.response.status === 400){
             alert("Service for etisalat is currently not available, Try again later.")
          }else if(error && error.response.status === 500){
             alert("Service for etisalat is currently not available, Try again later.")
          }
      } finally {

        setLoadingProducts(false);
      }
    };

    fetchProducts();
       const HandleBalanceStatus = ()=> {
              if(CheckSufficiency){
               setBalanceStatus("Insufficient fund")
              }else{
                setBalanceStatus("");
               }
            }

            HandleBalanceStatus()

          },[CheckSufficiency])

  // Fetch plans when product is selected
  const fetchPlans = async (productId) => {
    setLoadingPlans(true);
    try {
      const response = await axiosInstance.get(
        `/products/telecom/${productId}`
      );
      setProductPlans(response.data.data.plans || []);
    } catch (error) {
      console.error("Error fetching plans:", error);
       if(error && error.response === undefined){
             alert("Your internet connection is quite unstable.")
        }else if(error && (error.response.status ===  401)){
        alert("Session expired")
      }else if(error && error.response.status ===  400){
        setSelectProductWarn(true);
      }else if(error && error.response.status ===  500){
       setSelectProductWarn(true);
      }else {
        alert("Check your internet connection.")
      }
    } finally {
      setLoadingPlans(false);
    }
  };

  const handleSelectProduct = (product) => {
    if(!navigator.onLine) return alert("Check your internet connection");
    if(navigator.onLine){
    setSelectedProductEtisalat(`${product.Plan_Type}`);
    setShowProductList(false);
    fetchPlans(product.Product_ID);
    setShowOptionList(true); // Show options after selecting a product
    }
  };

  const handleSelectOption = (plan) => {
    setSelectedOptionEtisalat(`${plan.Size} ~ ${plan.Validity} ~ ₦${plan.Amount}`);
    setEtisalatReceiptInfo(plan.PlanType + " " + plan.Size)
    setSelectedAmountEtisalat(`₦${plan.Amount}`);
    setSelectedPlan(plan);
    setShowOptionList(false);
    setShowProductList(false);
  };

  const handleCodes = () => {
    setCodes(false);
    setCodes(true);
  };

  const handleShowPayment = () => {
    setShowPayment(!showPayment);
    setWalletNameEtisalat("");
    setImage("");
    setPaymentAmount("");
    setPaymentSelected(false);
  };

  const handleSelectPayment = (code, flag, amount, id) => {
    if(code === "NGN" && id ===1){
    setWalletNameEtisalat(code);
    setImage(flag);
    setPaymentAmount(amount);
    setShowPayment(false);
    setPaymentSelected(true);
    }
  };

  const countryList = [
    {
      id: 1,
      name: "Nigeria",
      code: "NGN",
      flag: require("../DataBundles-Images/ng.svg").default,
      amount: newBalance === "" || newBalance === null ? updateBalance : newBalance,
        status : "Active"
    
    },
    {
      id: 2,
      name: "United States",
      code: "USD",
      flag: require("../DataBundles-Images/us.svg").default,
      amount: 0,
        status : "Inactive"
    
    },
    {
      id: 3,
      name: "United Kingdom",
      code: "GBP",
      flag: require("../DataBundles-Images/gb.svg").default,
      amount: 0,
        status : "Inactive"
    
    },
    {
      id: 4,
      name: "European Union",
      code: "EUR",
      flag: require("../DataBundles-Images/eu.svg").default,
      amount: 0,
        status : "Inactive"
    },
    
    {
      id: 5,
      name: "Australia",
      code: "AUD",
      flag: require("../DataBundles-Images/au.svg").default,
      amount: 0,
      status : "Inactive"
    },
    {
      id: 6,
      name: "Kenya",
      code: "KSH",
      flag: require("../DataBundles-Images/ke.svg").default,
      amount: 0,
      status : "Inactive"
    },
  ];

  const Payment = ({ code, flag, amount, onClick, paymentMethod }) => {
      return (
        <div
         className={`font-[500] flex px-2  gap-[10px] text-[#7C7C7C] text-[8px] leading-[10.4px]
              lg:text-[16px] lg:leading-[20.8px] md:py-[20px] py-[15px] pl-[10px]
             lg:pl-[16px] shadow-[0px_3.30667px_8.26667px_0px_rgba(0,0,0,0.25)] md:shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)] 
              ${isDarkMode ?  "border-y-[0.5px] border-x-[0.6px] border-white" : "boder-none"} 
             cursor-pointer ${paymentMethod  === "Inactive" && !isDarkMode  ? "bg-gray-300 cursor-not-allowed" : 
              paymentMethod === "Inactive" && isDarkMode ? "bg-black" : paymentMethod === "Active" && !isDarkMode ? "bg-white" : "bg-black" } 
             `} onClick={onClick}>
          <div className={` ${airtimestyles.netImage}`}>
            <img src={flag} alt="" className={airtimestyles.NoImage} />
          </div>
          <h2 className={`font-[500] text-[#7C7C7C] text-[12px] leading-[16.4px]
              lg:text-[16px] lg:leading-[20.8px] ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>{code}</h2>
          <p className={`font-[500] text-[#7C7C7C] text-[12px] leading-[16.4px]
              lg:text-[16px] lg:leading-[20.8px] ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>
            Wallet({amount.toLocaleString()})
          </p>
        </div>
      );
    };
 
     useEffect(() => {
         const GetBalance =   async()=> {
             const SuccessHandler = ()=> {
           //alert("Successful");
      console.log("successfully retrieved balance");
      //alert("Successful")
        }
       const FailedHandler = ()=> {
         console.log(`Failed to retrieve balance`)
       }
       await GetFunction("balance", setLoading, SuccessHandler, FailedHandler,setPassDataBalance)
         } 
          // Simulate async data loading
         
          if(newBalance === "" || newBalance === null || newBalance === undefined){
             GetBalance();
             if(GetBalance){
              setNewBalance(passDataBalance.data ? passDataBalance.data.data.data.balance : "");
             }
       
          }
         //eslint-disable-next-line
        }, []);
   
       

 

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
    recipientPhoneNumberEtisalat: Joi.string()
      .pattern(new RegExp(/^\d{11,}/))
      .required()
      .messages({
        "string.pattern.base": "Phone number should be 11 digits ",
      }),
  });

  const [inputValue, setInputValue] = useState("");

  const mtnRegex =
    /^(234|0)(809[0-9]|817[0-9]|818[0-9]|909[0-9]|908[0-9])\d{6}$/;

  const validatePhoneNumber = (inputValue) => {
    if (!inputValue) {
      return "Phone number is required";
    }

    if (!mtnRegex.test(inputValue)) {
      return "Invalid 9MOBILE number. Please enter a valid 9MOBILE number.";

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
        setErrors({ recipientPhoneNumberEtisalat: error });
      } else {
        setErrors({});
      }
    } else {
      // Clear any previous errors if the input length is less than 11
      setErrors({});
    }
  };

  const handleProceed = (e) => {
    e.preventDefault();

    function validateNigerianNumberByNetwork(inputValue) {
      const networks = {
        '9MOBILE': ['0809', '0817', '0818', '0909', '0908']
      };

      for (let network in networks) {
        for (let prefix of networks[network]) {
          if (inputValue.startsWith(prefix) && inputValue.length === prefix.length + 7){
            return network;
          }
        }
      }

      return 'Unknown network';
    }

    const { error } = schema.validate({
      recipientPhoneNumberEtisalat,
    });

    if (error) {
      setErrors(
        error.details.reduce((acc, curr) => {
          acc[curr.path[0]] = curr.message;
          return acc;
        }, {})
      );
    } else if (validateNigerianNumberByNetwork(recipientPhoneNumberEtisalat) !== '9MOBILE') {
      setErrors({
        recipientPhoneNumber:
          `Invalid 9MOBILE number. Please enter a valid 9MOBILE number.`,

      });
      console.log("its me 2")
    } else {
      setProceed(true);
      setErrors({});
    }
  };

  const handleRecipientNameChange = (e) => {
    setRecipientNamesEtisalat(e.target.value);
  };

  const handleReceipt = () => {
    setTransactSuccessPopUp(false);
  };

  // console.log("confirm:", confirm);

  const [etisalattransactionID, setEtisalatTransactionID] = useState("");
  const [etisalatorderID, setEtisalatOrderID] = useState("");
  const [etisalatrefNumber, setEtisalatRefNumber] = useState("");
  const [etisalatdescription, setEtisalatDescription] = useState("");


  const inputPinHandler = async () => {
    async function buyData(network, mobileNumber, planID, name) {
      if (!selectedPlan) {
        console.error("No plan selected");
        return;
      }

      console.log(selectedPlan)
      console.log(selectedPlan.PlanID)

      const path = '/data';

      const data = {
        network,
        mobile_number: mobileNumber,
        plan: planID,
        name,
      };
   setLoading(true);
     console.log(data);
      console.log("its me");

      try {
        const response = await axiosInstance.post(path, data);
        console.log(response.data);
        console.log(response.status);

        const resData = response.data.data.data; // Accessing the nested `data` object

        console.log(response.status);
        setPlan(resData.plan_name);
        console.log(resData.plan_name);

        setInputValue(resData.Phone_Number);
        console.log(resData.Phone_Number);

        setEtisalatTransactionID(resData.transaction_id);
        console.log(resData.transaction_id);

        setEtisalatRefNumber(resData.reference_number);
        console.log(resData.reference_number);

        setEtisalatOrderID(resData.order_id); // No `order_id`, using `id` instead
        console.log(resData.order_id);

        setEtisalatDescription(`${resData.network} - ${resData.plan_name}`); // Fabricated description

       
         if (response.statusCode === 200) {
      // Success response
      setTransactSuccessPopUp(true); // Show success popup
      setConfirm(false);
      setInputPin("")
    } 
        // console.log(response.data);
      } catch (error) {
        console.error(error);
          setEtisalatPurchaseStatus(true); // Show failure popup
      setConfirm(false);
      setInputPin("");
        return { statusCode: error.response.status, data: null };
      }finally{
        setLoading(false);
      }
    }

    // usage
  await buyData(
      3, // Network ID for MTN
      inputValue, // Use inputValue instead of recipientPhoneNumber
      selectedPlan.PlanID,
      recipientNamesEtisalat
    );
// The Done handler for the done Changing the 
  };

  const DoneChangeHandler = () => {
    setSelectedProductEtisalat("");
    setSelectedOptionEtisalat(false);
    setSelectedAmountEtisalat("");
    setRecipientNamesEtisalat("");
    setWalletNameEtisalat("");
    setRecipientPhoneNumberEtisalat("");
    setEtisalatPurchaseStatus(null);
    setRecipientPhoneNumberEtisalat("");
    setInputValue("");
 };

  return (
    <DashBoardLayout>
      <div
        className={`bg-[#FFF] relative lg:ml-[20px] 2xl:ml-0 ${isDarkMode
          ? "bg-[#000] text-[#fff] border-[#fff]"
          : "bg-[#ffffff] text-[#000] "
          } flex flex-col justify-between h-full`}
      >
        <section
          className={`md:px-[0px] ${isDarkMode
            ? "bg-[#000] text-[#fff] border-[#fff]"
            : "bg-[#ffffff] text-[#000] "
            } `}
        >
          <div
            id="DataBundle"
            className="w-full min-h-[90px] gap-[5px] md:h-[112.29px] lg:h-[196px] md:rounded-[11.5px] rounded-[7px] md:mt-[-1px] px-[10px] lg:gap-[50px]  lg:px-[30px] lg:rounded-[20px] lg:py-[20px]  flex justify-between items-center lg:ml-[-20px] lg:w-[102%] 2xl:w-full 2xl:ml-0"
          >
            <div className="w-[100%] pt-[19px] lg:pt-[20px] pl-[8.5px] md:pl-[9px]">
              <p className="text-[11px] mb-2 font-bold uppercase w-[100%] md:text-[16px] md:w-[70%] lg:w-[70%] lg:text-[20px] 2xl:w-[80%] 2xl:text-[24px] lg:mb-4">
                DATA BUNDLES, AFFORDABLE AND AUTOMATED.
              </p>
              <p className="text-[9px] font-[400] leading-[13.4px] mb-4 md:text-[10px] md:leading-[12.2px] w-[90%] md:w-[75%] lg:w-[75%] 2xl:w-[85%] 2xl:mt-[5px] lg:mt-[20px] lg:text-[16px] lg:leading-[26px] 2xl:text-[20px] lg:mb-[20px]">
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
            <div className={`w-full flex items-center justify-between border text-[10px] md:py-[15px] md:w-[50%] rounded-[5px] h-[25px] p-1 md:text-[14px] lg:h-[45px] lg:text-[16px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]
               ${isDarkMode
                ? "bg-black text-white border !border-white"
                : "border border-[#0003]"
              }`}
            >
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
            <div className={`w-full flex items-center justify-between border text-[10px] md:py-[15px] md:w-[40%] md:mr-[9%]  rounded-[5px] h-[25px] p-1 md:text-[14px] lg:h-[45px] lg:text-[16px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]
              ${isDarkMode
                ? "bg-black text-white border !border-white"
                : "border border-[#0003]"
              }`}
            >
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
              <h2 className="lg:text-[16px] lg:leading-[24px] text-[12px] md:text-[12px] leading-[12px]">
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
              <p className="flex text-[#7c7c7c] gap-[7px] text-[14px] md:gap-[7px] leading-[130%] md:text-[12px] lg:text-[16px] 2xl:text-[20px]">
                Purchase
                <span>
                  <img
                    src={EtisalatLogo}
                    alt=""
                    className="md:w-[20px] md:h-[15px] mt-[px] lg:w-[30px] lg:h-[25px] 2xl:mt-[5px]"
                  />
                </span>{" "}
                9MOBILE Data Instantly
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
                className={`code ${toggleSideBar ? "code1" : "code01"
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
                <h2 className="text-[12px] px-[2%] my-[5%] text-blue-600 text-center 
                md:my-[3%] md:text-[15px] lg:my-[2%] lg:text-[16px]">
                  Tap the network Dial button to check data balance:
                </h2>
                <div className="flex flex-col gap-1 mb-5">
                  <button
                    className={`bg-[#FAF8F8] mt-[0%] mb-[2%] w-[88%] flex justify-center 
                      items-center mx-auto cursor-pointer text-[14px] font-semibold
                       h-[44px] shadow-md text-black rounded-[6px] md:w-[55%] 
                       md:mt-[0%] md:rounded-[8px] md:text-[16px] lg:text-[16px]
                        lg:w-[410px] lg:h-[51px] lg:my-[2%] xl:mt-[0%] xl:mb-[1%]`}
                  >
                    9MOBILE Data Balance Code - *323#
                  </button>
                  <button
                    className={`bg-[#FAF8F8] my-[2%] w-[88%] flex justify-center items-center mx-auto 
                      cursor-pointer text-[14px] font-semibold h-[44px]
                       shadow-md text-black rounded-[6px] md:w-[55%] 
                       md:rounded-[8px] md:text-[16px] lg:text-[16px] 
                       lg:w-[410px] lg:h-[51px] lg:my-[2%] xl:mt-[1%]`}
                  >
                    9MOBILE Data Share Code - *321#
                  </button>
                </div>

                <button
                  onClick={() => setCodes(false)}
                  className={`bg-[#04177f] my-[5%] mt-[40%] md:mt-[10%] w-[88%] flex justify-center items-center mx-auto cursor-pointer text-[14px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[16px] lg:text-[14px] lg:w-[163px] lg:h-[38px] lg:my-[2%] xl:mt-[9%]`}
                >
                  Okay
                </button>
              </div>
              )
            </Modal>
          )}

          {/* =========================PRODUCTS============================== */}

          <div className="grid grid-cols-1 mt-[25px] md:grid-cols-2 gap-y-[20px] md:gap-x-[58.68px] lg:gap-x-[100px] md:gap-y-[15px] lg:gap-y-[25px] pb-[30px] lg:py-[30px] md:mt-[20px]">
            <div className="flex flex-col lg:gap-[12px] gap-[7px]">
              <h2 className={`lg:text-[18px] lg:leading-[24px] mb-1 text-[14px]
               md:text-[12px] md:font-[600] font-[400] leading-[12px] ${isDarkMode
                ? "!text-[#7E7E7E]" : "!text-text-[#7E7E7E]"
                }`}>
                Select Product
              </h2>
              <div
                className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-[20px] md:p-0 text-[13.8px]
                 sm:p-3 sm:text-lg flex justify-between pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px] font-[400] 
                   leading-[10.4px] md:text-[11px] md:leading-[12.206px] 
                lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[40.927px] md:h-[35px] lg:h-[50px]  px-[11px] md:px-[6px] lg:px-[10px]  self-center ${
                  isDarkMode 
                    ? "bg-black text-white border border-white" 
                    : "border border-[#0003] hover:bg-[#EDEAEA] text-[#7C7C7C] border-[#9C9C9C]"
                }
  `}
                onClick={() => {
                  setShowOptionList(false);
                  setShowProductList(!showProductList);
                }}
              >
                <h2 className="text-[12px] font-[400] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                  {selectedProductEtisalat}
                </h2>
                <button className="lg:w-6 lg:h-6 w-[11px] h-[12px]">
                  <img src={arrowDown} alt="" className="w-full h-full" />
                </button>
              </div>
              <div className ="relative">
              {showProductList && (
                <div className={`border md:rounded-[10px] text-[10px] md:text-[12px]
                   bvnQuery shadow-[0px_3.30667px_8.26667px_0px_rgba(0,0,0,0.25)]
                 lg:text-[16px] lg:mt-2 rounded-[4px] absolute w-full ${products.length > 1 ? "h-[300px] overflow-y-scroll " : "h-[0px]"}
                  bg-[#FFF] z-[10] `}>
                  {loadingProducts ? (
                    <div>Loading products...</div>
                  ) : (
                    products.map((product) => (
                      <div
                        key={product.Product_ID}
                        className={`pb-[15px] md:pb-[6px] pt-[15px] md:pt-[6px] 
                          font-weight-bold text-[13px] cursor-pointer border-b-[0.5px]
                           text-[#7C7C7C] md:text-[12px] lg:text-[16px]  md:rounded-[0px]
                            lg:mt-2 py-[4px]  pl-[5px]  
                            ${selectedProductEtisalat === product.Plan_Type ? "" : ""}
                          ${isDarkMode
                            ? "bg-black text-white "
                            : ""
                          }
                          `}
                        onClick={() => {
                          handleSelectProduct(product);
                          setShowOptionList(false);
                          setSelectPlanWarn(false);
                          if(product.plan === null){
                           setShowOptionList(false);
                           setSelectProductWarn(true)
                          }else {
                            setSelectProductWarn(false)
                          }
                        }}
                      >
                        {`${product.Plan_Type}`}
                      </div>
                    ))
                  )}
                </div>
              )}
              {selectProductWarn && (
            <p className="absolute text-red-500 p-[10px] bg-white  
                    text-left font-[500] text-[14px] border-[1px]  border-gray-300 
                     rounded-[10px] lg:rounded-[20px]
            leading-[18px] lg:text-[16px] lg:leading-[22px]">
         Plans unavailable,kindly select another etisalat product.
            </p>
              )}
            </div>
            </div>


            <div className="flex flex-col lg:gap-[12px] gap-[7px]">
              <h2 className={`lg:text-[18px] md:text-[14px] lg:leading-[24px] mb-1 text-[12px] md:font-[600] font-[400] leading-[12px] ${isDarkMode
                ? "!text-[#7E7E7E]" : "!text-black"
                }`}>
                Select Plan
              </h2>
              <div
                className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-[20px] md:p-0 text-[13.8px]
                 sm:p-3 sm:text-lg flex justify-between pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px] font-[400] 
                   leading-[10.4px] md:text-[11px] md:leading-[12.206px] 
                lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[40.927px] md:h-[35px] lg:h-[50px]  px-[11px] md:px-[6px] lg:px-[10px]  self-center ${
                  isDarkMode 
                    ? "bg-black text-white border border-white" 
                    : "border border-[#0003] hover:bg-[#EDEAEA] text-[#7C7C7C] border-[#9C9C9C]"
                }
  `}
                onClick={() =>{
                  if(selectedProductEtisalat.length > 1){
                   setShowOptionList(!showOptionList);
                   setSelectPlanWarn(false)
                }else {
                  setSelectPlanWarn(true)
                }
              }
                  }
              >
                <h2 className="text-[12px] font-[400] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                  {selectedOptionEtisalat}
                </h2>
                <button className="lg:w-6 lg:h-6 w-[11px] h-[12px]">
                  <img src={arrowDown} alt="" className="w-full h-full" />
                </button>
              </div>
          <div className="relative">
              {showOptionList && (
                <div className={`border md:rounded-[10px] lg:mt-2 
                   bvnQuery shadow-[0px_3.30667px_8.26667px_0px_rgba(0,0,0,0.25)]
                  ${productPlans.length > 1 ? "h-[300px] overflow-y-scoll" : "h-[0px]"}
                  rounded-[4px] absolute w-full bg-[#FFF] z-[100]
                  ${isDarkMode
                    ? "bg-black text-white border !border-white"
                    : "border border-[#0003]"
                  }
                `}>
                  {loadingPlans ? (
                    <div>Loading plans...</div>
                  ) : (
                    productPlans.map((plan) => (
                      <div
                        key={plan.PlanID}
                        className={`pb-[18px] md:pb-[6px] pt-[18px] md:pt-[6px] 
                          font-weight-bold text-[13px] cursor-pointer border-b-[0.5px] 
                          md:rounded-[0px] text-[#7C7C7C] md:text-[12px]
                           lg:text-[16px] lg:mt-2 py-[4px]  pl-[5px]
                            ${selectedOptionEtisalat === plan.PlanID ? "bg-gray-200" : ""
                          }
                                                 ${isDarkMode
                            ? "bg-black text-white "
                            : ""
                          }
                                              `}
                        onClick={() => handleSelectOption(plan)}
                      >
                          {`${plan.PlanType} ${plan.Size} (₦${plan.Amount}) ~ ${plan.Validity ? plan.Validity.toUpperCase() : ""}`} 
                      </div>
                    ))
                  )}
                </div>
              )}
              {selectPlanWarn && (
                <p className="absolute text-[14px] leading-[18px] text-red-500
                 text-left font-[500] lg:text-[16px] lg:leading-[22px]">
        Select product
         </p>
              )}
            </div>
      </div>
            <div className="flex flex-col lg:gap-[12px] gap-[7px]">
              <h2 className={`text-[15px] md:font-[600] font-[400] md:text-[12px] lg:text-[18px] ${isDarkMode
                ? "!text-[#7E7E7E]" : "!text-text-[#7E7E7E]"
                }`}>
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
                  className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-[20px] md:p-0 text-[13.8px]
                 sm:p-3 sm:text-lg flex justify-between pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px] font-[400] 
                   leading-[10.4px] md:text-[11px] md:leading-[12.206px] 
                lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[40.927px] md:h-[35px] lg:h-[50px]  px-[11px] md:px-[6px] lg:px-[10px]  self-center ${
                  isDarkMode 
                    ? "bg-black text-white border border-white" 
                    : "border border-[#0003] hover:bg-[#EDEAEA] text-[#7C7C7C] border-[#9C9C9C]"
                }
  `}

                  placeholder="11 digits phone number"
                  value={inputValue}
                  onChange={(event) => {
                    handleChange(event);
                    setRecipientPhoneNumberEtisalat(event.target.value);
                  }}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <img
                    src={PhoneNumber}
                    alt=""
                    className="lg:w-[100%] lg:h-[72%]"
                  />
                </div>
              </div>

              {errors.recipientPhoneNumberEtisalat && (
                <div className="text-[14px] text-red-500 italic lg:text-[14px]">
                  {errors.recipientPhoneNumberEtisalat}
                </div>
              )}
            </div>

            <div className="flex flex-col lg:gap-[12px] gap-[7px]">
              <h2 className={`text-[15px] md:font-[600] font-[400] md:text-[12px] lg:text-[18px] ${isDarkMode
                ? "!text-[#7E7E7E]" : "!text-text-[#7E7E7E]"
                }`}>
                Recipient Name<span className="text-[#7C7C7C]">(optional)</span>{" "}
              </h2>
              <div className="relative mt-[5px]">
                <input
                  type="text"
                  className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-[20px] md:p-0 text-[13.8px]
                 sm:p-3 sm:text-lg flex justify-between pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px] font-[400] 
                   leading-[10.4px] md:text-[11px] md:leading-[12.206px] 
                lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[40.927px] md:h-[35px] lg:h-[50px]  px-[11px] md:px-[6px] lg:px-[10px]  self-center ${
                  isDarkMode 
                    ? "bg-black text-white border border-white" 
                    : "border border-[#0003] hover:bg-[#EDEAEA] text-[#7C7C7C] border-[#9C9C9C]"
                }
  `}
                  placeholder=""
                  value={recipientNamesEtisalat}
                  onChange={handleRecipientNameChange}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <img
                    src={Recipient3}
                    alt=""
                    className="lg:w-[100%] lg:h-[72%]"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-[7px] lg:gap-[12px]">
              <h2 className={`text-[15px] md:font-[600] font-[400] md:text-[12px] lg:text-[18px] ${isDarkMode
                ? "!text-[#7E7E7E]" : "!text-text-[#7E7E7E]"
                }`}>
                Amount
              </h2>
              <div className="relative mt-[5px]">
                <input
                  type="text"
                  className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-[20px] md:p-0 text-[13.8px]
                 sm:p-3 sm:text-lg flex justify-between pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px] font-[400] 
                   leading-[10.4px] md:text-[11px] md:leading-[12.206px] 
                lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[40.927px] md:h-[35px] lg:h-[50px]  px-[11px] md:px-[6px] lg:px-[10px]  self-center ${
                  isDarkMode 
                    ? "bg-black text-white border border-white" 
                    : "border border-[#0003] hover:bg-[#EDEAEA] text-[#7C7C7C] border-[#9C9C9C]"
                }
  `}
                  // placeholder="&#8358;100"
                  value={`${selectedAmountEtisalat}`}
                  onChange={(event) => {
                    // handleChanges(event);
                    // handleSelectOption({};
                    // setSelectedAmount(event.target.value);
                  }}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <img src={Amount} alt="" className="lg:w-[100%] lg:h-[72%]" />
                </div>
              </div>
            </div>

            <div>
              <div onClick={handleShowPayment}>
                <h2 className={`lg:text-[18px] mt-[5px] lg:leading-[24px] mb-2 text-[15px] md:text-[12px] md:font-[600] font-[400] leading-[12px] ${isDarkMode
                  ? "!text-[#7E7E7E]" : "!text-text-[#7E7E7E]"
                  }`}>
                  Payment Method
                </h2>
                <div className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-[20px] md:p-0 text-[13.8px]
                 sm:p-3 sm:text-lg flex justify-between pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px] font-[400] 
                   leading-[10.4px] md:text-[11px] md:leading-[12.206px] 
                lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[40.927px] md:h-[35px] lg:h-[50px]  px-[11px] md:px-[6px] lg:px-[10px]  self-center ${
                  isDarkMode 
                    ? "bg-black text-white border border-white" 
                    : "border border-[#0003] hover:bg-[#EDEAEA] text-[#7C7C7C] border-[#9C9C9C]"
                }
  `}
                >
                  {paymentSelected ? (
                    <li
                      onClick={handleShowPayment}
                      className={airtimestyles.labelInput}
                    >
                      <h2 className="text-[#7C7C7C]">{walletNameEtisalat}</h2>
                      <h2 className="text-[#7C7C7C]">
                        Wallet ({paymentAmount.toLocaleString()})
                      </h2>
                    </li>
                  ) : (
                    <h2
                      onClick={handleShowPayment}
                      className="text-[13px] lg:text-[14px]"
                    >
                      Select Payment Method
                    </h2>
                  )}
                  {paymentSelected ? (
                    <button
                      className="rounded-full w-[12.02px] h-[12.02px] flex items-center justify-center text-[8px] overflow-hidden md:w-[12.02px] lg:w-[25px] md:h-[12.02px] lg:h-[25px]"
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
            <div className="relative">
                          {showPayment && (
                <div
                  className={`pb-[13px] w-full md:pb-[6px] pt-[13px] md:pt-[6px] font-weight-bold text-[13px] border md:rounded-[10px] lg:mt-2 rounded-[4px] absolute ${isDarkMode
                    ? "bg-black text-white border !border-white"
                    : "border border-[#0003]"
                    }
                bg-[#FFF] z-[100]`}
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
                          country.amount,
                          country.id
                        )
                      }
                      paymentMethod ={country.status}
                    />
                  ))}
                </div>
              )}
            </div>
            </div>
          </div>

          <div className="flex items-center gap-2 lg:mt-[30px]">
            <h2 className="text-[13px] font-[400] leading-[12px] lg:leading-[24px] md:text-[12px] lg:text-[18px]">
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
                className={`${isDarkMode ? "border bg-[#000]" : "bg-[#fff]"} ${toggleSideBar ? "confirm01" : "confirm"
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
                  <h2 className="lg:text-[16px] lg:leading-[24px] text-center mb-1 text-[10px] md:text-[13px] font-[400] mt-[20px] leading-[12px]">
                    Confirm Transaction
                  </h2>
                  <h2 className="lg:text-[16px] md:text-[12px] md:px-[30px] lg:leading-[24px] text-[10px] leading-[12px] text-center mt-[26px] mx-[10px] mb-[20px]">
                    You are about to purchase{" "}
                    <span className="font-[400]">{selectedProductEtisalat + " " + selectedOptionEtisalat}</span> from
                    your {walletNameEtisalat + " Wallet"} to
                  </h2>

                  <div className="flex flex-col gap-[15px] px-[20px] mt-[50px] md:gap-[25px]">
                    <div className="flex items-center justify-between">
                      <h2 className="text-[#7C7C7C] text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                        Network
                      </h2>
                      <div className="flex gap-1">
                        <div className="rounded-full w-[12.02px] h-[12.02px] flex items-center justify-center text-[6px] overflow-hidden md:w-[12.02px] lg:w-[25px] md:h-[12.02px] lg:h-[25px]">
                          <img
                            src={EtisalatLogo}
                            alt=""
                            className="w-full h-full object-cover md:h-[15px]"
                          />
                        </div>
                        <h2 className="text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                          9MOBILE
                        </h2>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <h2 className="text-[#7C7C7C] text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                        Product
                      </h2>
                      <div className="flex gap-1">
                        <h2 className="text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                          {selectedProductEtisalat}
                        </h2>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <h2 className="text-[#7C7C7C] text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                        Plan
                      </h2>
                      <div className="flex gap-1">
                        <h2 className="text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                          {selectedProductEtisalat + " " + selectedOptionEtisalat}
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
                          {recipientNamesEtisalat}
                        </h2>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <h2 className="text-[#7C7C7C] text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                        Payment Method
                      </h2>
                      <div className="flex gap-1">
                        <h2 className="text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                          {walletNameEtisalat + " Wallet"}
                        </h2>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <h2 className="text-[#7C7C7C] text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                        Total Amount
                      </h2>
                      <div className="flex gap-1">
                        <h2 className="text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                          {selectedAmountEtisalat}
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

                      <div className="bg-[#F6F7F7] w-[95%] h-auto my-5 lg:my-8 flex py-[7px] 
                                             justify-between items-center px-[4%] mx-auto rounded-[10px]">
                                                     <div className="flex flex-col gap-2  ">
                                                       <div className="flex gap-[10px] justify-center items-center">
                                                         <img
                                                           className="w-[16px] h-[16px] bg-white"
                                                           src={image}
                                                           alt="/"
                                                         />
                                                         <div className="flex gap-[10px] items-center">
                                                             <p className="text-[12px] md:text-[14px] leading-[20px] lg:leading-[22px]  lg:text-[16px] font-[500]">
                                                         Available Balance {"  "} 
                                                          </p>
                                                          <span className="text-black">
                                                           {`(${newBalance === "" || newBalance === null ? updateBalance : newBalance })`}
                                                         </span>
                                                         </div>
                                                       </div>
                                                     <span className="text-gray-500 text-[14px] font-[400] leading-[20px]
                                                          lg:text-[16px] lg:leading-[22px] text-left">
                                                            {balanceStatus}
                                                            </span>
                                                     </div>
                                     
                                                     <img
                                                       src={Select}
                                                       alt=""
                                                       className="w-[12px] h-[12px] md:w-[50px] md:h-[20px] lg:w-[80px] lg:h-[30px]"
                                                     />
                                                   </div>

                    <div className="flex items-center justify-center">
                      <button disabled ={CheckSufficiency}
                        className={`w-full md:w-fit text-white rounded-md px-[28px] text-[10px] md:text-[12px]
                           leading-[15px] lg:text-[16px] lg:leading-[24px] py-[15px] md:py-[10px]
                            ${CheckSufficiency ? "bg-gray-400"   : "bg-primary" } `}
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
                className={` ${toggleSideBar ? "confirm02" : "confirm2"
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
                        className="text-[#0003] text-[13px] md:text-3xl"
                        onClick={toggleVisibility}
                      >
                        {isVisible ? <AiFillEye /> : <AiFillEyeInvisible />}
                      </div>
                    </div>
                    <p className="text-[8px] md:text-[12px] text-[#04177f]">
                      Forgot Pin ?
                    </p>
                    {errorMessage && (
                      <p className ="text-center text-[14px] text-red-500 lg:text-[16px]
                       font-[500] leading-[18px] lg:leading-[20px]">
                        Incorrect pin
                      </p>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => {
                    console.log("inputPin", inputPin);
                    const EtisalatHandler =  () => {
                      
                        inputPinHandler(); // Proceed with purchase
                      }
                    VerifyTransPin(
                      inputPin,
                      setSuccess,
                      setFailed,
                      setLoading,
                      setErrorMessage,
                     EtisalatHandler
                    );
                  }}
                  disabled={inputPin.length !== 4}
                  className={`${inputPin.length !== 4 ? "bg-[#0008]" : "bg-[#04177f]"
                    } my-[5%] w-[225px] flex justify-center items-center mx-auto cursor-pointer text-[10px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[40%] md:rounded-[8px] md:text-[16px] lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
                >
                  Purchase
                </button>
              </div>
            </Modal>
          )}


          {etisalatpurchaseStatus && (
            <Modal>
              <div
                className={` ${toggleSideBar ? "confirm02" : "confirm2"
                  } bg-white md:mx-auto md:my-auto lg:mx-auto lg:my-auto rounded-[12px] my-[20px]
                  h-[200px] overflow-y-scroll md:overflow-y-auto md:h-auto`}
              >
               

                <hr className="h-[8px] bg-[#04177f] lg:mt-[30px] border-none  
                md:mt-[2%] mt-[30px] md:h-[10px]"/>
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
                    onClick={() => {
                      DoneChangeHandler()
                    }}
                    className="bg-[#04177f] my-[%] w-[100px] cursor-pointer text-[10px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[%] md:rounded-[8px] md:text-[16px] lg:w-[px] lg:h-[38px] lg:my-[2%]"
                  >
                    Done
                  </button>

                  <Link to="/EtisalatFailedReceipt"
                    state={{
                      networkName: "9MOBILE",
                      selectedProduct: selectedProductEtisalat,
                      selectedOption: selectedOptionEtisalat,
                      recipientPhoneNumber: recipientPhoneNumberEtisalat,
                      inputValue: inputValue,
                      recipientNames: recipientNamesEtisalat,
                      selectedAmount: selectedAmountEtisalat,
                      etisalattransactionID: etisalattransactionID,
                      etisalatrefNumber: etisalatrefNumber,
                      etisalatorderID: etisalatorderID,
                      etisalatdescription: etisalatdescription,
                      etisalatReceiptInfo : etisalatReceiptInfo

                    }}

                  >
                    <button
                      onClick={() => {
                        // e.preventDefault();
                        setEtisalatPurchaseStatus(false);
                      }}
                      className="bg-white my-[%] w-[100px] cursor-pointer 
                      text-[10px] font-extrabold h-[px] rounded-[6px] 
                      md:w-[%] md:rounded-[8px] md:text-[16px] lg:w-[px] 
                      lg:h-[38px] lg:my-[2%]"
                    >
                      Receipt
                    </button>
                  </Link>
                </div>
              </div>
            </Modal>
          )}

          {transactSuccessPopUp && (
            <Modal>
              {/* <TransactFailedPopUp/> */}
              <div
                className={`${toggleSideBar ? "confirm01 w-[90%]" : "confirm w-[90%]"
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
                      {selectedProductEtisalat + " " + selectedOptionEtisalat}{" "}
                    </span>
                    from your{walletNameEtisalat + "Wallet"} to{" "}
                  </p>

                  <div className="flex items-center justify-between">
                    <h2 className="text-[#7C7C7C] text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                      Network
                    </h2>
                    <div className="flex gap-1">
                      <div className="rounded-full w-[12.02px] h-[12.02px] flex items-center justify-center text-[6px] overflow-hidden md:w-[12.02px] lg:w-[25px] md:h-[12.02px] lg:h-[25px]">
                        <img
                          src={EtisalatLogo}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h2 className="text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                        9MOBILE
                      </h2>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <h2 className="text-[#7C7C7C] text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                      Product
                    </h2>
                    <div className="flex gap-1">
                      <h2 className="text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                        {selectedProductEtisalat}
                      </h2>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <h2 className="text-[#7C7C7C] text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                      Plan
                    </h2>
                    <div className="flex gap-1">
                      <h2 className="text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                        {selectedProductEtisalat + " " + selectedOptionEtisalat}
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
                        {recipientNamesEtisalat}
                      </h2>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <h2 className="text-[#7C7C7C] text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                      Amount
                    </h2>
                    <div className="flex gap-1">
                      <h2 className="text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                        {selectedAmountEtisalat}
                      </h2>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <h2 className="text-[#7C7C7C] text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                      Payment Method
                    </h2>
                    <div className="flex gap-1">
                      <h2 className="text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                        {walletNameEtisalat + " Wallet"}
                      </h2>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <h2 className="text-[#7C7C7C] text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                      Order Number
                    </h2>
                    <div className="flex gap-1">
                      <h2 className="text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                        {etisalatorderID}
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
                  <Link to="/EtisalatDataBundle">
                    <button
                      onClick={() => {
                        handleTransactionSuccessClose();
                        window.location.reload();
                      }}
                      className={`bg-[#04177f] w-[111px] flex justify-center items-center mx-auto cursor-pointer text-[10px] font-[400] h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[12px] lg:w-[163px] lg:h-[38px] lg:my-[2%] md:px-[60px] md:h-[30px]`}
                    >
                      Done
                    </button>
                  </Link>

                  <Link to="/EtisalatReceipt"
                    state={{
                      networkName: "9MOBILE",
                      selectedProduct: selectedProductEtisalat,
                      selectedOption: selectedOptionEtisalat,
                      recipientPhoneNumber: recipientPhoneNumberEtisalat,
                      inputValue: inputValue,
                      recipientNames: recipientNamesEtisalat,
                      selectedAmount: selectedAmountEtisalat,
                      etisalattransactionID: etisalattransactionID,
                      etisalatrefNumber: etisalatrefNumber,
                      etisalatorderID: etisalatorderID,
                      etisalatdescription: etisalatdescription,
                      etisaltReceiptInfo : etisalatReceiptInfo

                    }}
                  >
                    <button
                      onClick={handleReceipt}
                      className={`border-[1px] w-[100px] border-[#04177f] flex justify-center items-center mx-auto cursor-pointer text-[10px] font-[400] h-[40px] rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[12px] lg:w-[163px] lg:h-[38px] lg:my-[2%] md:px-[60px] md:h-[30px]`}
                    >
                      Receipt
                    </button>
                  </Link>
                </div>
              </div>
            </Modal>
          )}

         

          <div className="py-[30px] lg:py-[60px] mt-10">
            <button
              className={`w-full md:w-fit text-white rounded-md px-[28px] 
                text-[10px] md:px-[30px] md:py-[10px] md:text-[13px] md:font-[400] 
                leading-[15px] lg:text-[16px] lg:px-[60px] lg:py-[15px]
                 2xl:text-[20px] 2xl:px-[50px] 2xl:py-[10px] lg:leading-[24px]
                  py-[15px] ${!selectedProductEtisalat ||
                !selectedOptionEtisalat ||
                !inputValue ||
                !selectedAmountEtisalat ||
                !paymentSelected
                ? "bg-[#63616188] cursor-not-allowed"
                : "bg-primary"
                }`}
              onClick={handleProceed}
              disabled={
                !selectedProductEtisalat ||
                !selectedOptionEtisalat ||
                !inputValue ||
                !selectedAmountEtisalat ||
                !paymentSelected
              }
            >
              Proceed
            </button>
          </div>
        </section>

        {/* =======================FOOTER=================================== */}
        <div
          className={`${isDarkMode ? "bg-black text-white flex gap-[15px] justify-center items-center  pb-[25%] md:pb-[12%] lg:pb-0 py-[40%]" : "flex gap-[15px] justify-center items-center mt-[100%] pb-[25%] md:pb-[12%] md:mt-[40%] lg:mt-[40%] lg:pb-0"
            } `}
        >
          <div className="text-[10px] md:text-[12px] lg:text-[14px]">
            You need help ?
          </div>
          <Link to="/ContactUs">
            <div
              className={`${isDarkMode ? "bg-[#04177f]" : "bg-[#04177f]"
                } text-[10px] p-1 text-white rounded-[8px] lg:text-[18px]`}
            >
              Contact Us
            </div>
          </Link>
        </div>
      </div>
        {loading && (
            <Modal>
          <Loader />
            </Modal>
          )}
    </DashBoardLayout>
  );
};

export default EtisalatDataBundle;
