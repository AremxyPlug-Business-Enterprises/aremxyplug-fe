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
import axiosInstance from "../../../../../ApiCollection.jsx/apiClient";
import { InternalLoginSession, VerifyTransPin } from "../../../../../ApiCollection.jsx/ApiBuck";
import { Loader } from "../../../../../Loader/Loader";
import {
  GetFunction,RestrictionPopUp
} from "../../../../../ApiCollection.jsx/ApiBuck";
import { GetLocalStorage } from "../../../../../LocalStorage/LocalStorage";
import { BalanceLoading } from "../../../../../Loader/Loader";


const EtisalatDataBundle = () => {
  const Data = GetLocalStorage()
  const { isDarkMode,
     newBalance,
      setNewBalance,
    authenticationOpen} = useContext(ContextProvider);
  const {
    selectedOptionEtisalat,
    setSelectedOptionEtisalat,
    // selectedNetworkProductEtisalat,
    //setSelectedNetworkProductEtisalat,
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
    setSelectedProductEtisalat,
    etisalatPurchaseErrorType,
    setEtisalatPurchaseErrorType
  } = useContext(ContextProvider);
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
  const [etisalatpurchaseStatus, setEtisalatPurchaseStatus] = useState(null); // State to hold purchase status
  const [loading, setLoading] = useState("");
  const [products, setProducts] = useState([]);
  const [productPlans, setProductPlans] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(false);
  const [loadingPlans, setLoadingPlans] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [balanceStatus, setBalanceStatus] = useState("");
  const [selectProductWarn, setSelectProductWarn] = useState(false);
  const [selectPlanWarn, setSelectPlanWarn] = useState(false);
  const [passDataBalance, setPassDataBalance] = useState({});
  const [etisalatReceiptInfo, setEtisalatReceiptInfo] = useState("");
  const [sessionModal, setSessionModal] = useState(false);
  const [restrictUser, setRestrictUser] = useState(false);
  const [checkNetworkError, setCheckNetworkError] = useState(false)
const [balanceLoader, setBalanceLoader] = useState(false)
const [etisalatSuccessfulResponse,
   setEtisalatSuccessfulResponse] = useState({})
const assumedString = selectedAmountEtisalat?.toString()
  let etisalatDataAmount = Number(selectedAmountEtisalat?.toString()
  ?.slice(0, assumedString?.length - 3)
  ?.replace(/\D/g, ""));
   

  const balanceStringToNum= Number(newBalance);
const Balance = newBalance !== null &&
 newBalance !== undefined && newBalance !== "" ? balanceStringToNum
 : passDataBalance?.data?.data && (newBalance === "" 
  || newBalance === undefined || newBalance === null) ?
   Number(passDataBalance?.data?.data?.data?.balance) : undefined;
  
  let CheckSufficiency = etisalatDataAmount > Balance;


    //Fetch product for Etisalat
     const fetchProducts = async () => {
      setLoadingProducts(true);
      try {
        const response = await axiosInstance.get("/products/telecom/list/3");
        setProducts(response?.data?.data?.products || []);
      } catch (error) {
        console.error("Error fetching products:", error);
        if (error && error.response === undefined) {
          alert("Check your internet Connection, then reload the page.");
        } else if (error && error.response.status === 400) {
          alert(
            "Service for 9 mobile is currently not available, Try again later."
          );
        } else if (error && error.response.status === 500) {
          alert(
            "Service for 9 mobile is currently not available, Try again later."
          );
        }
      } finally {
        setLoadingProducts(false);
      }
    };
  useEffect(() => {
    //fetch product for 9 mobile
    if(Data?.ConfirmAcc === "true"){
   fetchProducts();
    }
    const HandleBalanceStatus = () => {
      if (CheckSufficiency) {
        setBalanceStatus("Insufficient fund");
      } else {
        setBalanceStatus("");
      }
    };

    HandleBalanceStatus();
    //eslint-disable-next-line
  }, [CheckSufficiency]);

  // Fetch plans when product is selected
  const fetchPlans = async (productId) => {
    setLoadingPlans(true);
    try {
      const response = await axiosInstance.get(
        `/products/telecom/${productId}`
      );
      if (response && (response.status === 200 || response.status === 201)) {
        setProductPlans(response?.data?.data?.plans || []);
        if (response?.data?.data?.plans === null) {
          setSelectProductWarn(true);
        } else {
          setSelectProductWarn(false);
        }
      }
    } catch (error) {
      console.error("Error fetching plans:", error);
      if (error && error.response === undefined) {
        alert("Your internet connection is quite unstable.");
      }  else if (error && error.response.status === 400) {
        setSelectProductWarn(true);
      } else if (error && error.response.status === 500) {
        setSelectProductWarn(true);
      } else {
        alert("Check your internet connection.");
      }
    } finally {
      setLoadingPlans(false);
    }
  };

  const handleSelectProduct = (product) => {
    if (!navigator.onLine) {
      alert("Check your internet connection");
      setCheckNetworkError(true);
    }
    if (navigator.onLine) {
      setSelectedProductEtisalat(`${product.Plan_Type}`);
      setShowProductList(false);
      fetchPlans(product.Product_ID);
      setShowOptionList(true);
    
       // Show options after selecting a product
    }
  };

  const handleSelectOption = (plan) => {
    setSelectedOptionEtisalat(
      `${plan?.Size} ~ ${plan?.Validity} ~ ₦${plan?.Amount}`
    );
    setEtisalatReceiptInfo(plan?.PlanType + " " + plan?.Size);
     setSelectedAmountEtisalat(`${plan?.Amount !== null || plan?.Amount !== undefined
          ? plan?.Amount?.toLocaleString("en-NG", {
           style : "currency", 
           currency : "NGN"
          }) : plan?.Amount === "" ? Number(plan?.Amount)?.toLocaleString("en-NG", {
           style : "currency", 
           currency : "NGN"
          }) : selectedAmountEtisalat}`);
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



    const methodOptions = [
      {
        method: "Nigeria",
        balance:
           Balance !== undefined && Balance !== null 
            ? `(${Balance?.toLocaleString("en-NG", {
                 style : "currency",
                 currency : "NGN"
            })})` : "()",
        flag:  require("../DataBundles-Images/ng.svg").default,
        id: 1,
        code : "NGN Wallet"
      },
      { method: "United States",
         balance: "($0.00)", 
         flag: require("../DataBundles-Images/us.svg").default,
          id: 2, code : "USD Wallet" },
      { method: "United Kingdom",
         balance: "(€0.00)", 
         flag:   require("../DataBundles-Images/gb.svg").default,
          id: 3,
          code : "GBP Wallet"
        },
      { method: "European Union",
         balance: "(£0.00)", 
         flag:  require("../DataBundles-Images/eu.svg").default,
          id: 4,
        code : "EUR Wallet" },
      { method: "Australia", balance: "(AU$0.00)",
         flag:   require("../DataBundles-Images/au.svg").default,
          id: 5 , code : "AUD Wallet"},
      { method: "Kenya", balance: "(KSh0.00)"
        , flag:   require("../DataBundles-Images/ke.svg").default, id: 6, code : "KSH Wallet"  },
    ];


  
  //Function to get user's account balance
     const GetBalance = async () => {
    if(!navigator.onLine) return setCheckNetworkError(true)
      const SuccessHandler = () => {
        //alert("Successful");
        console.log("successfully retrieved balance");
        //alert("Successful")
      };
      const FailedHandler = async (ErrorType) => {
        if (ErrorType === "unauthorised") {
         setSessionModal(true)
    }else if(ErrorType ==="Server error"){
    alert("An Unexpected error has occured")
    } else if(ErrorType === "Network error" || ErrorType === "User error"){
            setCheckNetworkError(true);
        }else{
           
          alert("An unexpected error occured in attempt to retrieve balance.")
        }
      }
      await GetFunction(
        "balance",
        setBalanceLoader,
        SuccessHandler,
        FailedHandler,
        setPassDataBalance
      );
    };
  useEffect(() => {
    // Simulate async data loading
 if (Data?.ConfirmAcc === "true"){    
           GetBalance();
    setNewBalance(passDataBalance?.data?.data?.data !== undefined
               ? passDataBalance?.data?.data?.data?.balance : "");
                 
                    }else {
                      setRestrictUser(true);
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
 

    return null;
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const numericValue = value.replace(/\D/g, "");
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
    setInputPin("")
    e.preventDefault();

    function validateNigerianNumberByNetwork(inputValue) {
      const networks = {
        "9MOBILE": ["0809", "0817", "0818", "0909", "0908"],
      };
for (let network in networks) {
        for (let prefix of networks[network]) {
          if (
            inputValue.startsWith(prefix) &&
            inputValue.length === prefix.length + 7
          ) {
            return network;
          }
       }
    }

      return "Unknown network";
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
    } else if (
      validateNigerianNumberByNetwork(recipientPhoneNumberEtisalat) !==
      "9MOBILE"
    ) {
      setErrors({
        recipientPhoneNumber: `Invalid 9MOBILE number. Please enter a valid 9MOBILE number.`,
      });
      console.log("its me 2");
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
  const path = "/data";
   const data = {
        network,
        mobile_number: mobileNumber,
        plan: planID,
        name,
      };
      setLoading(true);

      try {
        setLoading(true);
        const response = await axiosInstance.post(path, data);
        const resData = response?.data?.data?.data; // Accessing the nested `data` object
        setInputValue(resData?.Phone_Number);
        setEtisalatTransactionID(resData?.transaction_id);
        setEtisalatRefNumber(resData?.reference_number);
        setEtisalatOrderID(resData?.order_id); // No `order_id`, using `id` instead
        setEtisalatDescription(`${resData?.network} - ${resData?.plan_name}`); // Fabricated description
        if (response.status === 200 || response.status === 201) {
          setEtisalatSuccessfulResponse(response?.data?.data?.data);
          if(response?.data?.data?.data?.status === "success"
            || response?.data?.data?.data?.status === "successfull"
            || response?.data?.data?.data?.status === "delivered"
            || response?.data?.data?.data?.status === "successfully"
          ){
            setEtisalatPurchaseErrorType("");
            setTransactSuccessPopUp(true); // Show success popup
          setConfirm(false);
          setInputPin("");
          }else if(response?.data?.data?.data?.status === "failed"
            || response?.data?.data?.data?.status === "Failed"
            || response?.data?.data?.data?.status === "unsuccess"
            || response?.data?.data?.data?.status === "unsuccessful"){
               setEtisalatPurchaseErrorType("Plan Available: Purchase Failed")
            setEtisalatPurchaseStatus(true); // Show success popup
          setConfirm(false);
          setInputPin("");
          }
          // Success response
       
        }
        // console.log(response.data);
      } catch (error) {
        if(error && error.response === undefined){
          setEtisalatPurchaseStatus(true); // Show failure popup
          setConfirm(false);
          setInputPin("");
          setEtisalatPurchaseErrorType("'Network error: Purchase Failed")
        }
       else if (
          error &&
          error.response.status === 500)
        {
          setEtisalatPurchaseErrorType("Server error: Purchase Failed")
          setEtisalatPurchaseStatus(true); // Show failure popup
          setConfirm(false);
          setInputPin("");
            return { statusCode: error?.response?.status, data: null };
        }   else if (
          error &&
          error.response.status === 404)
        {
          setEtisalatPurchaseErrorType("Network error: Purchase Failed")
          setEtisalatPurchaseStatus(true); // Show failure popup
          setConfirm(false);
          setInputPin("");
            return { statusCode: error?.response?.status, data: null };
        } else if (error && error.response.status === 401) {
          setSessionModal(true)
        }else if (
          error &&
          error.response.status === 400)
        {
          setEtisalatPurchaseErrorType("Unexpected error: Purchase Failed")
          setEtisalatPurchaseStatus(true); // Show failure popup
          setConfirm(false);
          setInputPin("");
            return { statusCode: error?.response?.status, data: null };
        }  else {
             setEtisalatPurchaseErrorType("Unexpected error: Purchase Failed")
          setEtisalatPurchaseStatus(true); // Show failure popup
          setConfirm(false);
          setInputPin("");
        }
        
      } finally {
        setLoading(false);
      }
    }

    // usage
    await buyData(
      3, // Network ID for MTN
      inputValue, // Use inputValue instead of recipientPhoneNumber
      selectedPlan.ID,
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

//Function for Getting balance and fetchProduct()
if(Data?.ConfirmAcc === "true"){
   window.addEventListener("online", ()=> {
   if(checkNetworkError === true &&
     (Balance === undefined || Balance === null )
    && (newBalance === null || newBalance === undefined || newBalance === "") ){
   return GetBalance()
   }
   if(checkNetworkError === true && products?.length < 1  ) {
    return fetchProducts()
   }
  })
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
            <div
              className={`w-full flex items-center justify-between border text-[10px] md:py-[15px] md:w-[50%] rounded-[5px] h-[25px] p-1 md:text-[14px] lg:h-[45px] lg:text-[16px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]
               ${
                 isDarkMode
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
            <div
              className={`w-full flex items-center justify-between border text-[10px] md:py-[15px] md:w-[40%] md:mr-[9%]  rounded-[5px] h-[25px] p-1 md:text-[14px] lg:h-[45px] lg:text-[16px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]
              ${
                isDarkMode
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
                <h2
                  className="text-[12px] px-[2%] my-[5%] text-blue-600 text-center 
                md:my-[3%] md:text-[15px] lg:my-[2%] lg:text-[16px]"
                >
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
              <h2
                className={`lg:text-[18px] lg:leading-[24px] mb-1 text-[14px] md:text-[12px] md:font-[600] font-[400] leading-[12px] ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
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
                    setSelectedOptionEtisalat("");
                }}
              >
                <h2 className="text-[12px] font-[400] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                  {selectedProductEtisalat}
                </h2>
                <button className="lg:w-6 lg:h-6 w-[11px] h-[12px]">
                  <img src={arrowDown} alt="" className="w-full h-full" />
                </button>
              </div>
              <div className="relative">
                {showProductList && (
                  <div
                    className={`border md:rounded-[10px] text-[10px] md:text-[12px]
                   bvnQuery shadow-[0px_3.30667px_8.26667px_0px_rgba(0,0,0,0.25)]
                 lg:text-[16px] lg:mt-2 rounded-[4px] absolute w-full ${
                   products.length > 5 ? "h-[300px] overflow-y-scroll" : ""
                 }
                  bg-[#FFF] z-[10] `}
                  >
                    {loadingProducts ? (
                      <p className={`"bg-white text-black`}>Loading products...</p>
                    ) : (
                      products.map((product) => (
                        <div
                          key={product.Product_ID}
                          className={`font-[400] text-[13px] leading-[18px] lg:leading-[20px] cursor-pointer border-b-[0.5px]
                           text-[#7C7C7C] md:text-[12px] lg:text-[16px]  md:rounded-[0px]
                            lg:mt-2 py-[15px] lg:py-[20px]  pl-[5px]  
                            ${
                              selectedProductEtisalat === product.Plan_Type
                                ? ""
                                : ""
                            }
                          ${isDarkMode ? "bg-black text-white " : ""}
                          `}
                          onClick={() => {
                            handleSelectProduct(product);
                            setShowOptionList(false);
                            setSelectPlanWarn(false);
                            if (product?.plan === null) {
                              setShowOptionList(false);
                              setSelectProductWarn(true);
                            } else {
                              setSelectProductWarn(false);
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
                  <p
                    className="absolute text-red-500 p-[10px] bg-white  
                    text-left font-[500] text-[14px] border-[1px]  border-gray-300 
                     rounded-[10px] lg:rounded-[20px]
            leading-[18px] lg:text-[16px] lg:leading-[22px]"
                  >
                    Plans unavailable, kindly select another 9 mobile product.
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col lg:gap-[12px] gap-[7px]">
              <h2
               className={`lg:text-[18px] lg:leading-[24px] mb-1 text-[14px] md:text-[12px] md:font-[600] font-[400] leading-[12px] ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
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
                onClick={() => {
                  if (selectedProductEtisalat.length > 1) {
                    setShowOptionList(!showOptionList);
                    setSelectPlanWarn(false);
                  } else {
                    setSelectPlanWarn(true);
                  }
                }}
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
                  <div
                    className={`border md:rounded-[10px] lg:mt-2 
                   bvnQuery shadow-[0px_3.30667px_8.26667px_0px_rgba(0,0,0,0.25)]
                  ${productPlans.length > 1 ? "h-[300px] overflow-y-scoll" : ""}
                  rounded-[4px] absolute w-full bg-[#FFF] z-[100]
                  ${
                    isDarkMode
                      ? "bg-black text-white border !border-white"
                      : "border border-[#0003]"
                  }
                `}
                  >
                    {loadingPlans ? (
                      <div>Loading plans...</div>
                    ) : (
                      productPlans.map((plan) => (
                        <div
                          key={plan.PlanID}
                          className={`
                          font-[400] text-[13px] leading-[18px] lg:leading-[20px] cursor-pointer border-b-[0.5px] 
                          md:rounded-[0px] text-[#7C7C7C] md:text-[12px]
                           lg:text-[16px] lg:mt-2 py-[15px] lg:py-[20px]  pl-[5px]
                            ${
                              selectedOptionEtisalat === plan.PlanID
                                ? "bg-gray-200"
                                : ""
                            }
                                                 ${
                                                   isDarkMode
                                                     ? "bg-black text-white "
                                                     : ""
                                                 }
                                              `}
                          onClick={() => handleSelectOption(plan)}
                        >
                          {`${plan.PlanType} ${plan.Size} (₦${plan.Amount}) ~ ${
                            plan.Validity ? plan.Validity?.toUpperCase() : ""
                          }`}
                        </div>
                      ))
                    )}
                  </div>
                )}
                {selectPlanWarn && (
                  <p
                    className="absolute text-[14px] leading-[18px] text-red-500
                 text-left font-[500] lg:text-[16px] lg:leading-[22px]"
                  >
                    Select product
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-col lg:gap-[12px] gap-[7px]">
              <h2
                 className={`lg:text-[18px] lg:leading-[24px] mb-1 text-[14px] md:text-[12px] md:font-[600] font-[400] leading-[12px] ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
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
              <h2
                 className={`lg:text-[18px] lg:leading-[24px] mb-1 text-[14px] md:text-[12px] md:font-[600] font-[400] leading-[12px] ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
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
              <h2
                className={`lg:text-[18px] lg:leading-[24px] mb-1 text-[14px] md:text-[12px] md:font-[600] font-[400] leading-[12px] ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
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
              <div className="flex flex-col gap-[7px] lg:gap-[12px]"
               onClick={handleShowPayment}>
                <h2
                  className={`lg:text-[18px] lg:leading-[24px] mb-1 text-[14px] md:text-[12px] md:font-[600] font-[400] leading-[12px] ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
                >
                  Payment Method
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
                >
                  {paymentSelected ? (
                                    <li
                                      onClick={handleShowPayment}
                                      className={airtimestyles.labelInput}
                                    >
                                      <h2 className="text-[#7C7C7C]">{walletNameEtisalat}</h2>
                                      <h2 className="text-[#7C7C7C]">
                                       {paymentAmount.toLocaleString()}
                                      </h2>
                                    </li>
                                  ) : (
                                    <h2
                                      onClick={handleShowPayment}
                                      className="text-[13.2px] text-[#7C7C7C] lg:text-[14px]"
                                    >
                                      Select Payment Method
                                    </h2>
                                  )}
               
                                    {paymentSelected ? (
                                      <button
                                        className={`rounded-full w-[12.02px] h-[12.02px] flex 
                                          items-center justify-center text-[15px] overflow-hidden md:w-[12.02px] lg:w-[25px] md:h-[12.02px] lg:h-[25px] 
                                           ${isDarkMode ? "bg-black text-white" : ""}`}
                                        onClick={handleShowPayment}
                                      >
                                        <img
                                          src={image}
                                          alt=""
                                           className="decdrop absolute left-[92%] lg:left-[94%]
                                self-center align-middle md:h-[14.038px] md:w-[14.038px] 
                        lg:h-[24px] lg:w-[24px] w-[14px] h-[16px]"
                                        />
                                      </button>
                                    ) : (
                                      <button
                                        className="lg:w-6 lg:h-6 h-[11px] w-[11px]"
                                        onClick={handleShowPayment}
                                      >
                                        <img src={arrowDown} alt="" 
                                        className="decdrop absolute left-[92%] lg:left-[94%]
                                self-center align-middle md:h-[14.038px] md:w-[14.038px] 
                        lg:h-[24px] lg:w-[24px] w-[14px] h-[16px]" />
                                      </button>
                                    )}
                </div>
              </div>
              <div className="relative">
               {showPayment && (
                           <div
                             className={`absolute top-[102%] z-[3] flex flex-col w-[100%]  
                                         cursor-pointer border-[1px]  border-gray-100 rounded-[3px]  
                                               ${
                                   isDarkMode
                                     ? "bg-black border-white rounded-[7px] text-white"
                                     : "text-[#7C7C7C] bg-white rounded-br-[7px] rounded-bl-[7px] lg:rounded-br-[14px] lg:rounded-bl-[14px]"
                                 }
                                 ${
                                   toggleSideBar
                                     ? "lg:w-[31.5%] lg:top-[100.5%]"
                                     : "lg:w-[38.5%] lg:top-[105.3%]"
                                 }  shadow-xl border w-full lg:w-full flex flex-col divide-y absolute top-20`}
                               >
                           {methodOptions.map((methodOption) => {
                                         return (
                                           <div
                                             onClick={(e) => {
                                               //onchange = { setMethodOptions }
               
                                               setWalletNameEtisalat(
                                                 methodOption.id === 1
                                                   ? methodOption.code
                                                   : walletNameEtisalat === "NGN Wallet" &&
                                                     methodOption.id !== 1
                                                   ? "NGN Wallet"
                                                   : ""
                                               );
                                 setPaymentAmount(methodOption.id === 1 
                            && paymentAmount === "" && 
                             Balance !== null 
                           && Balance !== undefined
                         ?  `(${Balance?.toLocaleString("en-NG", {
                              style : "currency",
                              currency : "NGN"
                                 })})` :  walletNameEtisalat === "NGN Wallet" 
                           &&
                        Balance !== null && Balance !== undefined
                          ?   `(${Balance?.toLocaleString("en-NG", {
                              style : "currency",
                              currency : "NGN"
                         })}`  :  "");
               
                          setShowPayment(() => {
                              if (methodOption.id === 1) {
                               setPaymentSelected(true);
                                    setShowPayment(false);
                                       document.querySelector(".decdrop")
                                        .classList.remove("DropIt");
                                                 } else {
                                                    setPaymentSelected(false);
                                                   setShowPayment(true);
                                                   document
                                                     .querySelector(".decdrop")
                                                     .classList.add("DropIt");
                                                 }
                                               });
                                             
                                                       
                                              setImage(methodOption.flag);
                                              
                                             }}
                                            className={`py-[18px] md:py-[14px] font-normal px-2 flex
                                        items-center gap-[5px] text-[12px] md:text-[14px] 
                                        lg:text-[16px] shadow-[0px_3.30667px_8.26667px_0px_rgba(0,0,0,0.25)]
                                         transition-all duration-300 hover:bg-slate-50
                                      ${
                                        isDarkMode
                                          ? "text-white hover:bg-slate-800 bg-black "
                                          : "text-[#7E7E7E]"
                                      } ${
                                       methodOption.method === "Nigeria"
                                         ? "cursor-pointer"
                                         : "cursor-not-allowed opacity-50"
                                     }`}
                                     
                                             key={methodOption.id}
                                           >
                                             <img
                                               className="md:h-[29.27px]  h-[14.27px]"
                                               src={methodOption.flag}
                                               alt=""
                                             />
               
                                           
                                             
                                               {methodOption.code} {" "} 
                                               {balanceLoader === true && methodOption.id === 1 ? <BalanceLoading/> : methodOption.balance}
                                             
                                           </div>
                                         );
                                       })}
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
              <div className={`w-full flex justify-center h-full 
                          py-[30px] px-[15px] lg:px-[0px] lg:items-center
                           items-end`}>
                        <div
                             className={` bvnQuery lg:rounded-[12px] rounded-[10px] 
                           h-[520px] ${ toggleSideBar ? " lg:ml-[20%] lg:w-[40%]" : "lg:w-[40%]"
                           } w-[100%] md:w-[60%] overflow-auto  ${isDarkMode ? "bg-black text-white border rounded-[10px] border-white": "bg-white text-black"} `}
                           >
                             <div className= "flex justify-end pr-2 lg:py-[10px] py-[7px]">
                               <img
                                 src={Cancel}
                                 alt=""
                                 onClick={() => setProceed(false)}
                                   className=" w-[25px] h-[25px] md:w-[35px] md:h-[35px] 
                             lg:w-[26px] lg:h-[26px]"
                               />
                             </div>
                             <hr className="h-[6px] bg-[#04177f] border-none md:h-[10px]"/>
                             <div className="mx-auto">
                               <p className="text-[12px] font-extrabold
                          my-[5%] text-center md:my-[3%] md:text-[15px] 
                         lg:my-[2%] lg:text-[16px]">
                                 Confirm Transaction
                               </p>
                               <div className={`text-[10px] font-semibold text-center mb-2
                            md:text-[12px] lg:text-[14px] mx-2 
                            ${isDarkMode ? "text-white" : "text-black"}`}>
                                 You are about to purchase{" "}
                                 <span className={`font-extrabold text-[10px] md:text-[16px]
                                  lg:text-[12px] ${isDarkMode ? "text-white" : "text-black"}`}>
                                   {selectedProductEtisalat + " " + selectedOptionEtisalat}
                                 </span>{" "}
                                 from your {walletNameEtisalat} to
                               </div>
             
                               <div className="flex flex-col gap-3 mt-5 md:mt-6 lg:mt-7">
                                 <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto 
                      justify-between font-[500] lg:text-[16px]">
                                   <span className={`text-[#0008]  ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>
                                     Network
                                   </span>
                                   <div className="flex gap-1">
                                     <div className="rounded-full w-[12.02px] h-[12.02px] flex items-center justify-center text-[6px] overflow-hidden md:w-[12.02px] lg:w-[25px] md:h-[12.02px] lg:h-[25px]">
                                       <img
                                         src={EtisalatLogo}
                                         alt=""
                                         className="w-full h-full object-cover md:h-[25px]"
                                       />
                                     </div>
                                     <span className={`text-[#0008]  ${isDarkMode ? "text-white" : "text-black"}`}>
                                       9 Mobile
                                     </span>
                                   </div>
                                 </div>
             
                                 <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto 
                      justify-between font-[500] lg:text-[16px]">
                                   <span className={`text-[#0008]  ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>
                                     Product
                                   </span>
                                   <div className="flex gap-1">
                                     <span className={`text-[#0008]  ${isDarkMode ? "text-white" : "text-black"}`}>
                                       {selectedProductEtisalat}
                                     </span>
                                   </div>
                                 </div>
             
                                 <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto 
                      justify-between font-[500] lg:text-[16px]">
                                   <span className={`text-[#0008]  ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>
                                     Plan
                                   </span>
                                   <div className="flex gap-1">
                                     <span className={`text-[#0008]  ${isDarkMode ? "text-white" : "text-black"}`}>
                                       {selectedProductEtisalat + " " + selectedOptionEtisalat}
                                     </span>
                                   </div>
                                 </div>
             
                                 <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto 
                      justify-between font-[500] lg:text-[16px]">
                                   <span className={`text-[#0008]  ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>
                                     Phone Number
                                   </span>
                                   <div className="flex gap-1">
                                     <span className={`text-[#0008]  ${isDarkMode ? "text-white" : "text-black"}`}>
                                       {inputValue}
                                     </span>
                                   </div>
                                 </div>
             
                                 <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto 
                      justify-between font-[500] lg:text-[16px]">
                                   <span className={`text-[#0008]  ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>
                                     Recipient Name
                                   </span>
                                   <div className="flex gap-1">
                                     <span className={`text-[#0008]  ${isDarkMode ? "text-white" : "text-black"}`}>
                                       {recipientNamesEtisalat}
                                     </span>
                                   </div>
                                 </div>
             
                                 <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto 
                      justify-between font-[500] lg:text-[16px]">
                                   <span className={`text-[#0008]  ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>
                                     Payment Method
                                   </span>
                                   <div className="flex gap-1">
                                     <span className={`text-[#0008]  ${isDarkMode ? "text-white" : "text-black"}`}>
                                       {walletNameEtisalat}
                                     </span>
                                   </div>
                                 </div>
             
                                 <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto 
                      justify-between font-[500] lg:text-[16px]">
                                   <span className={`text-[#0008]  ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>
                                     Total Amount
                                   </span>
                                   <div className="flex gap-1">
                                     <span className={`text-[#0008]  ${isDarkMode ? "text-white" : "text-black"}`}>
                                       {selectedAmountEtisalat}
                                     </span>
                                   </div>
                                 </div>
             
                                 <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto 
                      justify-between font-[500] lg:text-[16px]">
                                   <span className={`text-[#0008]  ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>
                                     Transaction Fee
                                   </span>
                                   <div className="flex gap-1">
                                     <span className={`text-[#0008]  ${isDarkMode ? "text-white" : "text-black"}`}>
                                       0.00
                                     </span>
                                   </div>
                                 </div>
                                 <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto 
                      justify-between font-[500] lg:text-[16px]">
                                   <span className={`  ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>Points Earned</span>
                                   <span className="text-[#2ED173]">+2.00</span>
                                 </div>
                               </div>
                               </div>
                                  <div className={`bg-[#F6F7F7] w-[95%] h-auto my-5 lg:my-8 flex py-[7px] 
                                       justify-between items-center px-[4%] mx-auto rounded-[10px]  
                                       ${isDarkMode ? "bg-black border rounded-[10px]  border-white" : "bg-[#F6F7F7] "}`}>
                                               <div className="flex flex-col gap-2 ">
                                                 <div className="flex gap-[10px] justify-center items-center">
                                                   <img
                                                     className="w-[16px] h-[16px] bg-white"
                                                     src={image}
                                                     alt="/"
                                                   />
                                                   <div className="flex gap-[10px] items-center">
                                                       <p className={`text-[12px] md:text-[14px] leading-[20px] 
                                                       lg:leading-[22px]  lg:text-[16px] font-[500] ${isDarkMode ? "text-white" : "text-black"}`}>
                                                   Available Balance {"  "} 
                                                    </p>
                                                    <span className={`font-medium ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>
                                                     {`(${Balance !== undefined || Balance !==null 
                                                     ? Balance?.toLocaleString("en-NG", {
                                                       style : "currency",
                                                       currency : "NGN"
                                                     }) : "₦"})`}
                                                   </span>
                                                   </div>
                                                 </div>
                                               <span className="text-gray-500 text-[14px] font-bold leading-[20px]
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
                                <button
                        disabled={CheckSufficiency}
                         onClick={handleConfirm}
                           className={`bg-[#04177f] my-[5%] w-[90%] flex 
                             justify-center items-center mx-auto cursor-pointer 
                             text-[14px] font-extrabold h-[50px] text-white rounded-[6px]
                              md:w-[25%] md:rounded-[8px] lg:rounded-[12px] md:text-[16px]
                              lg:text-[14px] lg:w-[163px] lg:h-[38px] lg:my-[2%] 
                              ${CheckSufficiency ? "bg-gray-400" : "bg-primary"} `}
                         > Confirmed
                         </button>
                               </div>
                             </div>
                           
            </Modal>
          )}

          {confirm && (
            <Modal>
               <div className="flex items-end justify-center
             lg:items-center lg:justify-center 
   w-[100%] lg:px-[0px] rounded-[10px] h-[100%] px-[15px]">
              <div className={`flex flex-col lg:mb-[0px]  mb-[50px]
         lg:h-[350px] overflow-y-scroll h-[300px] bvnQuery  ${
                      toggleSideBar ? "md:w-[45%] lg:w-[40%]  " : "lg:w-[40%]"
                    } md:w-[55%] w-full   ${isDarkMode ? "text-white bg-black border-[1px] border-white rounded-[10px]" : "text-black bg-white rounded-[10px]"}`}
              >
                <div className="pr-3 lg:pr-2 py-[5px] 
                flex justify-end">
                  <img
                    onClick={() => setConfirm(false)}
                     className="w-[25px] h-[25px]  md:w-[35px] md:h-[35px] 
                lg:w-[25px] lg:h-[25px]"
                    src={Cancel}
                    alt=""
                  />
                </div>
                 <div className="h-[6px] bg-[#04177f] border-none md:h-[10px]" />
                  <div className="flex flex-col w-full  justify-center 
             py-[15px] lg:py-[0px]
             h-[100%] gap-[15px]">
                  <p className="font-extrabold text-[12px] leading-[16px] 
            pb-[20px]
             md:text-[10px]
             lg:text-[16px] text-center 
            ">
                 Input PIN to complete transaction
                  </p>
                  <div className="flex flex-col items-center lg:gap-[0px]
             gap-[5px] font-extrabold">
                    <div className=" flex items-center  gap-[10px]">
                      <OtpInput
                        value={inputPin}
                        inputType= {!isVisible ? "tel" : "password"} 
                        onChange={setInputPin}
                        numInputs={4}
                        shouldAutoFocus={true}
                       inputStyle={{
                       color: isDarkMode ? "#ffffff" : "#000000",
                        // width: 30,
                        // height: 30,
                        // borderRadius: 3,
                        fontWeight: 700,
                        borderRadius: 4,
                        height: "35px",
                        width: "35px",
                        backgroundColor: isDarkMode ? "black" : "white",
                        border: isDarkMode
                          ? "1px solid white"
                          : "1px solid #ccc",
                    }}
                        renderInput={(props) => (
                          <input {...props} className="inputOTP mx-[3px]" />
                        )}
                      />
                      <div
                        className="text-[#0003] text-[13px] md:text-3xl"
                        onClick={toggleVisibility}
                      >
                       {isVisible ? <AiFillEye className={`w-[16px] h-[16px]
                                          lg:w-[24px] lg:h-[24px]  ${isDarkMode ? " text-white" : "text-black" }`}/> : <AiFillEyeInvisible  
                                          className={`w-[16px] h-[16px] lg:w-[24px] lg:h-[24px]
                                          ${isDarkMode ? " text-white" : "text-black" }`}/>}
                      </div>
                    </div>
                     <Link to={{
                                  pathname : "/ProfileSettingMain",
                                   state :  authenticationOpen
                                 }} className="text-[10px] leading-[14px] font-extrabold 
                                 md:text-[12px]
                                   my-2 text-[#04177f]">
                                   Forgot Pin ?
                                 </Link>
                  </div>
                  {errorMessage && (
                    <p className="font-bold text-[14px]  lg:text-[16px] md:font-[500] 
              text-center leading-[18px] lg:leading-[20px]  text-red-600">
                      Incorrect pin
                    </p>
                  )}
            
     <div className="flex flex-col gap-[10px] px-[20px]" >
                <button
                  onClick={() => {
                    const DataHandler = async() => {
                      // Close modal on PIN success
                     await inputPinHandler(); // Proceed with purchase
                    };
                    const setFailed = (ErrorType) => {
                      if (ErrorType === "unauthorised") {
                        VerifyTransPin(
                          inputPin,
                          (ErrorType) => {
                            if (ErrorType === "unauthorised") {
                              return setSessionModal(true);
                            }
                          },
                          setLoading,
                          setErrorMessage,
                          DataHandler
                        );
                      }
                    };
                    //Run the function to check user's pin
                    // and proceed with purchase
                    VerifyTransPin(
                      inputPin,
                      setFailed,
                      setLoading,
                      setErrorMessage,
                      DataHandler
                    );
                  }}
                  disabled={inputPin.length !== 4}
                  className={`${
                inputPin.length !== 4 && !isDarkMode ? "bg-[#0008]" : 
                 inputPin.length !== 4 && isDarkMode ? "bg-gray-300" : "bg-[#04177f]"
              } w-full  md:w-[94px] lg:w-[163px] flex 
              justify-center items-center mx-auto cursor-pointer text-[12px]
               md:text-[10px] lg:text-[16px] font-extrabold h-[50px] 
               lg:h-[38px] md:h-[22px] text-white rounded-[6px] md:rounded-[6.88px]
                lg:rounded-[12px]`}
                >
                  Purchase
                </button>
                </div>
              </div>
              </div>
              </div>
              </Modal>
          )}

          {etisalatpurchaseStatus && (
           <Modal>
          <div className={`w-[90%] md:w-[50%] lg:w-[35%] mx-auto 
           rounded-lg overflow-hidden
            ${isDarkMode ? "bg-black border-[1px] rounded-[7px] border-white": "bg-white"}`}>
            <div className="flex justify-between items-center p-4">
              <img
              
                className={`w-6 h-6  `}
                src="/Images/login/arpLogo.png"
                alt="Logo"
              />
              <img
                onClick={() => setEtisalatPurchaseStatus(false)}
                className="w-6 h-6 cursor-pointer"
                src="/Images/transferImages/close-circle.png"
                alt="Close"
              />
            </div>
            <hr className="h-1 bg-[#04177f] border-none" />
            <div className="p-4 text-center">
              <h2 className="text-lg md:text-xl font-semibold my-4">
                Transaction Failed
              </h2>
              <img
                className={`w-32 h-32 mx-auto my-6 
                   ${isDarkMode ? "bg-black rounded-full border-[0.1px] border-black": "bg-white"}`}
                src="./Images/failed.png"
                alt="Failed"
              />
              <p className="text-sm text-red-500 font-[600] mb-8">
                {etisalatPurchaseErrorType}
              </p>
              {etisalatSuccessfulResponse?.status  ?
               (
              <div className="flex gap-[10px] justify-between w-full px-[10px]">
                <button
                  onClick={() => DoneChangeHandler()}
                  className="bg-[#04177f] w-[50%] max-w-xs mx-auto py-2
           text-white rounded-md font-medium"
                >
                  Done
                </button>
              <Link
                    to="/EtisalatFailedReceipt"
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
                      etisalatReceiptInfo: etisalatReceiptInfo,
                    }}
                  
                  className={`w-[50%]  max-w-xs 
                  mx-auto py-2 
           rounded-md font-medium ${isDarkMode 
            ? "text-white bg-black border-[0.2px] border-blue-900 rounded-[10px]"
             :  "bg-white border-[0.2px]  rounded-[2px] text-black border-blue-900"}`}
                >
                  Receipt
                </Link>
              </div>
         
                ): (
                   <button
                  onClick={() => DoneChangeHandler()}
                  className="bg-[#04177f] w-[100%] max-w-xs mx-auto py-2
           text-white rounded-md font-medium"
                >
                  Done
                </button>
                 )}
                 </div>
                
          </div>
        </Modal>
          )}
        
          {transactSuccessPopUp && (
            <Modal>
              {/* <TransactFailedPopUp/> */}
              <div className={`w-full flex justify-center h-full 
             py-[30px] px-[15px] lg:px-[0px] lg:items-center
              items-end`}>
              <div
               className={` bvnQuery lg:rounded-[12px] rounded-[10px] 
              h-[520px] ${ toggleSideBar ? " lg:ml-[20%] lg:w-[40%]" : "lg:w-[40%]"
              } w-[100%] md:w-[60%] overflow-auto  ${isDarkMode ? "bg-black text-white border rounded-[10px] border-white": "bg-white text-black"} `}
              
              >
                 <div className="flex justify-end pr-2 lg:py-[10px] py-[7px]">
                  <img onClick={() => {
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
                <p className={`text-[12px] font-extrabold my-[4%] 
            text-center md:text-[20px] md:my-[3%] lg:text-[14px] lg:my-[2%] 
            ${isDarkMode ? "text-white" : "text-[#000]"}`}>
                  Purchase Successful
                </p>
                <img
                  className="w-[50px] h-[50px] mx-auto mb-[2%] lg:w-[100px] lg:h-[100px]"
                  src="./Gif/checkMarkGif.gif"
                  alt="/"
                />

                <div className={`font-semibold w-[97%] mx-auto text-[10px] text-center
               mb-2 md:pb-2 lg:pb-3 md:text-[14px] lg:text-[14px]
               ${isDarkMode ? "text-white" : "text-black" }`}>
                      You have successfully purchased{" "}
                    <span className={` ${isDarkMode? "text-white" : "text-black"} font-bold 
                   md:text-[16px] lg:text-[14px]`}>
                        {selectedProductEtisalat + " " + selectedOptionEtisalat}{" "}
                      </span>
                  from your {walletNameEtisalat} to{" "}
               </div>
               <div className="flex mt-4 flex-col gap-2 lg:gap-4 ">
                       <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto
                  justify-between font-[500] lg:text-[16px]">
                    <span className={`text-[#0008]  ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`} >
                    Network
                    </span>
                     
                    <div className="rounded-full w-[12.02px]
                       h-[12.02px] flex items-center justify-center 
                         overflow-hidden md:w-[12.02px] lg:w-[25px] 
                       md:h-[12.02px] lg:h-[25px]">
                     <img  src={EtisalatLogo}
                      alt="" className="w-full h-full object-cover"  />
                                </div>
                   <span className={`text-[#0008]  ${isDarkMode ? "text-white" : "text-[black]"}`}>
                            Airtel
                          </span>
                     
                     </div>
                                                                             
               <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto
                   justify-between font-[500] lg:text-[16px]">
                <span className={`text-[#0008]  ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>
                           Product
                   </span>
                   <span className={`text-[#0008]  ${isDarkMode ? "text-white" : "text-black"}`}>
                   {selectedProductEtisalat}
                    </span>
               </div>
          <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto
          justify-between font-[500] lg:text-[16px]">
            <span className={`text-[#0008]  ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>
                        Plan
                     </span>
                      <span className={`text-[#0008]  ${isDarkMode ? "text-white" : "text-black"}`}>
                    {selectedProductEtisalat + " " + selectedOptionEtisalat}
                     </span>
                       </div>
                      <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto
               justify-between font-[500] lg:text-[16px]">
                    <span className={`text-[#0008]  ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>
                          Phone Number
                                                 </span>
                                                
                                                   <span className={`text-[#0008]  ${isDarkMode ? "text-white" : "text-black"}`}>
                                                            {inputValue}
                                                           </span>
                                                       
                                                 </div>
                                                                             
                                                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto
                                                        justify-between font-[500] lg:text-[16px]">
                                               <span className={`text-[#0008]  ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>
                                                    Recipient Name
                                                   </span>
                                         
                                           <span className={`text-[#0008]  ${isDarkMode ? "text-white" : "text-black"}`}>
                                                  {recipientNamesEtisalat}
                                                  </span>
                                                  
                                          </div>
                                     <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto
                                     justify-between font-[500] lg:text-[16px]">
                                     <span
                                       className={`text-[#0008]  ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>
                                          Amount
                                              </span>
                                                                                                 
                                                        <span className={`text-[rgba(0,0,0,0.53)]  ${isDarkMode ? "text-white" : "text-black"}`}>
                                                               {selectedAmountEtisalat}
                                                               </span>
                                                                                             
                                                          </div>
                                                                             
                                               <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto
                                               justify-between font-[500] lg:text-[16px]">
                                         <span className={`text-[#0008]  ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>
                                                      Payment Method
                                                     </span>
                                                                                                
                                                      <span className={`text-[#0008]  ${isDarkMode ? "text-white" : "text-black"}`}>
                                                   {walletNameEtisalat}
                                        </span>
                                                                                              
                                          </div>
                                                                             
                                                    <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto
                                                           justify-between font-[500] lg:text-[16px]">
                                                    <span className={`text-[#0008]  ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>
                                                              Order Number
                                                                     </span>
                                                                                                 
                                                      <span className={`text-[#0008]  ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>
                                                            {etisalatorderID}
                                             </span>
                                                                                                
                                             </div>
                                                </div>
                                            
                                                

                <div
                  className="w-full h-auto my-10 flex
                 justify-center items-center 
                 md:rounded-[15px] "
                >
                  <div className={`bg-[#F2FAFF] w-[90%]   mx-auto p-[8px] my-5 flex justify-between 
        items-center md:p-[9px] lg:p-[10px] rounded-[5px] lg:rounded-[10px]
         ${
                isDarkMode ? "bg-slate-800 " : "bg-[#F2FAFF]"
              }`}>
            <p className={`text-[10px] leading-[13px] text-center
             md:text-[14px] md:leading-[18px] lg:text-[14px]  font-semibold 
             ${isDarkMode ? "text-white" : "text-black"}`}>
            The decoder has been subscribed successfully.
             Please kindly confirm from the smartcard / iuc.
              You can contact us for any further assistance.
            </p>
        </div>
                </div>
                <div  className="flex w-full justify-center mx-auto 
                px-[50px] items-center gap-[5%] md:gap-[10%]
                 mt-[30px] md:w-[50%] lg:gap-[10%] lg:mx-auto 
                  lg:my-[5%] md:mt-[40px]">
                  <Link to="/EtisalatDataBundle">
                    <button
                      onClick={() => {
                        handleTransactionSuccessClose();
                        window.location.reload();
                      }}
                      className={`bg-[#04177f] w-[111px] flex 
                        justify-center items-center mx-auto
                         cursor-pointer text-[10px] font-[400] 
                         h-[40px] text-white rounded-[6px] 
                         md:w-[25%] md:rounded-[8px] md:text-[12px] 
                         lg:w-[163px] lg:h-[38px] lg:my-[2%] 
                         md:px-[60px] md:h-[30px]`}
                    >
                      Done
                    </button>
                  </Link>

                  <Link
                    to="/EtisalatReceipt"
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
                      etisaltReceiptInfo: etisalatReceiptInfo,
                    }}
                  >
                    <button
                      onClick={handleReceipt}
                     className={`border-[1px] w-[100px]
                         border-[#04177f] flex justify-center
                          items-center mx-auto cursor-pointer
                           text-[10px] font-[400] h-[40px] 
                           rounded-[6px] md:w-[25%] 
                           md:rounded-[8px] md:text-[12px]
                            lg:w-[163px] lg:h-[38px] 
                            lg:my-[2%] md:px-[60px] md:h-[30px]`}
                    >
                      Receipt
                    </button>
                  </Link>
                </div>
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
                  py-[15px] ${
                    !selectedProductEtisalat ||
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
          className={`${
            isDarkMode
              ? "bg-black text-white flex gap-[15px] justify-center items-center  pb-[25%] md:pb-[12%] lg:pb-0 py-[40%]"
              : "flex gap-[15px] justify-center items-center mt-[100%] pb-[25%] md:pb-[12%] md:mt-[40%] lg:mt-[40%] lg:pb-0"
          } `}
        >
          <div className="text-[10px] md:text-[12px] lg:text-[14px]">
            You need help ?
          </div>
          <Link to="/ContactUs">
            <div
              className={`${
                isDarkMode ? "bg-[#04177f]" : "bg-[#04177f]"
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
      {sessionModal && <InternalLoginSession setExpiredSessionLogin ={setSessionModal} />}
       {restrictUser && sessionModal === false  && <RestrictionPopUp/>}
  
    </DashBoardLayout>
  );
};

export default EtisalatDataBundle;
