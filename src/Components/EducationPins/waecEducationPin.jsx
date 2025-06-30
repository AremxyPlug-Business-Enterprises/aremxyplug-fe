import React, { useEffect } from "react";
import { DashBoardLayout } from "../Dashboard/Layout/DashBoardLayout";
import { useContext } from "react";
import "../../App.css";
import HeroComponent from "./heroComponent";
import WaecImg from "../EducationPins/imagesEducation/WaecImg.svg";
import arrowRight from "../EducationPins/imagesEducation/educationArrowRight.svg";
import arrowDown from "../EducationPins/imagesEducation/arrow-down.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import nigerianFlag from "./imagesEducation/Nigeriaflag.svg";
import americaFlag from "./imagesEducation/Usa.svg";
import britainFlag from "./imagesEducation/Britain.svg";
import euroFlag from "./imagesEducation/GBP.svg";
import austriaFlag from "./imagesEducation/Austria.svg";
import kenyaFlag from "./imagesEducation/Kenya.svg";
import closeIcon from "./imagesEducation/close-circle.svg";
import { ContextProvider } from "../Context";
import Joi from "joi";
import styles from "../Dashboard/DashboardComponents/TransferComponent/transfer.module.css";
import OtpInput from "react-otp-input";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { Modal } from "../Screens/Modal/Modal";
import AremxyPlugIcon from "./imagesEducation/AremxyPlug.svg";
import WaecReceipt from "./ReceiptEducationPins/waecReceipt";
import axios from "axios";
import "../Dashboard/DashboardComponents/DataTopUpPage/DataTopUp.css";
import eduFailed from "./imagesEducation/WaecFailedTransaction.svg";
import { GetFunction, PostFunction } from "../ApiCollection.jsx/ApiBuck";
import { BalanceLoading, Loader } from "../Loader/Loader";

export default function WaecEducationPin() {
  const {
    isDarkMode,
    quantityResult,
    setQuantityResult,
    quantityActive,
    setQuantityActive,
    paymentResult,
    setPaymentResult,
    methodActive,
    setMethodActive,
    examType,
    setExamType,
    examActive,
    setExamActive,
    transactSuccessPopUp,
    setTransactSuccessPopUp,
    educationPinPhone,
    setEducationPinPhone,
    educationAmount,
    setEducationAmount,
    quantityAmount,
    setQuantityAmount,
    walletBalance,
    setWalletBalance,
    setEducationPinStatus,
    educationPinEmail,
    setEducationPinEmail,
    eduResponse,
    setEduResponse,
    newBalance,
  } = useContext(ContextProvider);

  // UseStates
  const [imageState, setImageState] = useState(arrowDown);
  const [educationProceed, setEducationProceed] = useState(false);
  const [errors, setErrors] = useState({});
  const [educationConfirm, setEducationConfirm] = useState(false);
  const [receipt] = useState(false);
  const [waecFailedTransaction, setWaecFailedTransaction] = useState(false);

  //==========  QUANTITY RESULT SLIP CHECKERS ==============
  function waecQuantityDropDown() {
    setQuantityActive(!quantityActive);
    document.querySelector(".imgdrop").classList.toggle("DropIt");
  }
  const options = [
    { quantity: "1 Piece Of Result Checker", Amount: "₦3400", id: 1 },
    { quantity: "2 Piece Of Result Checker", Amount: "₦6800", id: 2 },
    { quantity: "3 Piece Of Result Checker", Amount: "₦10200", id: 3 },
    { quantity: "4 Piece Of Result Checker", Amount: "₦13600", id: 4 },
    { quantity: "5 Piece Of Result Checker", Amount: "₦17000", id: 5 },
  ];

  // WALLET

  function waecMethodDropDown() {
    setMethodActive(!methodActive);
    document.querySelector(".methodDrop").classList.toggle("DropIt");
  }
  const methodOptions = [
    {
      method: "NGN Wallet",
      balance: `(${newBalance})`,
      flag: nigerianFlag,
      id: 1,
    },
    { method: "USD Currency", balance: "(0.00)", flag: americaFlag, id: 2 },
    { method: "EUR Wallet", balance: "(0.00)", flag: britainFlag, id: 3 },
    { method: "GBP Wallet", balance: "(0.00)", flag: euroFlag, id: 4 },
    { method: "AUD Wallet", balance: "(0.00)", flag: austriaFlag, id: 5 },
    { method: "KES Wallet", balance: "(0.00)", flag: kenyaFlag, id: 6 },
  ];

  // CONFIRM EXAM TYPE
  const Exams = [
    { examType: "WAEC", id: 1 },
    { examType: "NECO", path: "/NecoEducationPin", id: 2 },
    { examType: "NABTEB", path: "/NabtebEducationPin", id: 3 },
    { examType: "JAMB", path: "/JambEducationPin", id: 4 },
  ];
  function waecExamDropDown() {
    setExamActive(!examActive);
    document.querySelector(".Examdrop").classList.toggle("DropIt");
  }
  // FUNCTION OTP FOR THE POPPINS
  const { toggleSideBar, inputPin, setInputPin, toggleVisibility, isVisible } =
    useContext(ContextProvider);

  const waecProceed = () => {
    const { error } = schema.validate({
      educationPinPhone,
      educationPinEmail,
    });
    if (error) {
      setErrors(
        error.details.reduce((acc, curr) => {
          acc[curr.path[0]] = curr.message;
          return acc;
        }, {})
      );
    } else {
      setEducationProceed(true);
      setErrors({});
    }
  };

  const schema = Joi.object({
    educationPinPhone: Joi.string()
      .pattern(new RegExp(/^\d{11,}/))
      .required()
      .messages({
        "string.pattern.base": "Phone number should be 11 digits ",
      }),
    educationPinEmail: Joi.string()
      .pattern(new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      .required()
      .messages({ "string.pattern.base": "Invalid email " }),
  });

  // Get Amount
  const [isFailedAmount, setIsFailedAmount] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isAmountLoading, setIsAmountLoading] = useState(false);

  const getAmount = async function handleGetAmount() {
    const id = 1;
    const path = `products/edu/${id}`;
    // const SuccessHandler = () => {
    //   setIsFailedAmount(false);
    //   function handleReceivedAmount() {
    //     if (eduResponse?.data?.data?.data?.Amount) {
    //       setQuantityAmount(eduResponse?.data?.data?.data?.Amount);
    //     } else {
    //       setQuantityAmount("");
    //     }
    //   }
    //   handleReceivedAmount();
    // };

    const SuccessHandler = () => {
      setEduResponse((response) => {
        const amount = response?.data?.data?.data?.Amount;
        if (amount) {
          setQuantityAmount(amount);
        } else {
          setQuantityAmount("");
        }
        return response;
      });
    };

    const FailedHandler = () => {
      setIsFailedAmount(true);
    };

    await GetFunction(
      path,
      setIsLoading,
      SuccessHandler,
      FailedHandler,
      setEduResponse
    );
  };
  // get the amount on entering the page
  useEffect(() => {
    getAmount();
    handleResetFields();
    // eslint-disable-next-line
  }, []);

  // function to reset the fields
  function handleResetFields() {
    setExamType("");
    setQuantityResult("");
    setEducationPinPhone("");
    setEducationPinEmail("");
    setEducationAmount("");
    setPaymentResult("");
  }

  function handleCalculatedAmount(quantity) {
    setIsAmountLoading(true);
    const amountCalculated =
      quantityAmount > 0 ? Number(quantityAmount) * quantity : "";

    setTimeout(() => {
      setIsAmountLoading(false);
      setEducationAmount(amountCalculated);
    }, 1000);
  }

  const [balanceStatus, setBalanceStatus] = useState("");
  let balanceStringToNum = Number(newBalance);
  let educationAmountToNumber = Number(educationAmount);
  let CheckSufficiency = educationAmountToNumber > balanceStringToNum;
  useEffect(() => {
    const HandleBalanceStatus = () => {
      if (CheckSufficiency) {
        setBalanceStatus("Insufficient fund");
      } else {
        setBalanceStatus("");
      }
    };
    HandleBalanceStatus();
  }, [CheckSufficiency]);

  const confirmButton = () => {
    setEducationProceed(false);
    setEducationConfirm(true);
  };

  const waecTransactionSuccessClose = () => {
    setTransactSuccessPopUp(false);
  };
  const waecReceipt = () => {
    setTransactSuccessPopUp(false);
  };

  const eduPinSuccess = () => {
    setTransactSuccessPopUp(true);
    setEducationConfirm(false);
    setInputPin("");
  };
  const waecEduPinFailed = () => {
    setEducationConfirm(false);
    setWaecFailedTransaction(true);
    setInputPin("");
  };
  // const handleWaecSubmitPost = async (e) => {
  //   e.preventDefault();
  //   const getToken = localStorage.getItem("getToken");
  //   const authToken = localStorage.getItem("authorisedLogin");
  //   if (authToken || getToken) {
  //     try {
  // const sendWaecForm = {
  //   exam_type: examType.toLowerCase(),
  //   quantity: parseInt(quantityResult.slice(0, 1)),
  //   phone_no: educationPinPhone,
  //   email: educationPinEmail,
  //   amount: educationAmount.slice(1),
  //   wallet_type: "",
  // };
  //       console.log(sendWaecForm);
  //       const response = await axios.post(
  //         "https://aremxyplug.onrender.com/api/v1/edu",
  //         sendWaecForm,
  //         {
  //           headers: {
  //             "Content-Type": "application/json",
  //             Authorization: authToken || getToken,
  //           },
  //         }
  //       );
  //       if (response.status === "success" || 201 || "Successful" || 200) {
  // eduPinSuccess();
  // setEducationPinStatus(true);
  //       }
  //       alert("submitted");
  //     } catch (error) {
  //       if (error && (error.response.status === 404 || 400)) {
  //         console.error(`The Data brought back an error Of ${error}`);
  //         waecEduPinFailed();
  //       } else if (error && error.response.status === 500) {
  //         console.error(`The Data brought back an error Of ${error}`);
  //         waecEduPinFailed();
  //       } else {
  //         alert(error);
  //       }
  //     }
  //   }
  // };

  const handleWaecSubmitPost = async (e) => {
    e.preventDefault();
    // const id = 1;
    const path = `edu`;
    const body = {
      exam_type: examType.toLowerCase(),
      quantity: parseInt(quantityResult.slice(0, 1)),
      phone_no: educationPinPhone,
      email: educationPinEmail,
      // amount: educationAmount.slice(1),
      amount: String(educationAmount),
      wallet_type: "",
    };
    const SuccessHandler = () => {
      eduPinSuccess();
      setEducationPinStatus(true);
    };
    const FailedHandler = () => {
      waecEduPinFailed();
    };

    await PostFunction(
      path,
      setIsLoading,
      body,
      SuccessHandler,
      FailedHandler,
      setEduResponse
    );
  };

  // GET RESPONSE SUCCESSFUL
  const requestEducationPin = async (e) => {
    try {
      const EducationResponse = await axios.get(
        "https://aremxyplug.onrender.com/api/v1/edu"
      );
      return EducationResponse.data;
    } catch (error) {
      console.error("There was error fetching the Education Pins", error);
      return null;
    }
  };

  // useEffect(() => {
  //   const acceptData = async () => {
  //     try {
  //       const dataCollected = await requestEducationPin();
  //       if (dataCollected) {
  //         setEduResponse(dataCollected);
  //       }
  //     } catch (error) {
  //       console.error("There was an error trying to get the token:", error);
  //     }
  //   };

  //   acceptData();
  //   // eslint-disable-next-line
  // }, []);

  return (
    <DashBoardLayout>

    <div className='flex flex-col lg:h-[150%] h-[115%] justify-between '>
 <div className="">
          {/* Hero-section */}
          <HeroComponent />
          <div className="flex lg:gap-[8px] items-center md:gap-[5.868px] gap-[4.694px] mb-[20px] lg:mb-[50px] md:mb-[30px]">
            <h2
              className={`font-semibold text-sm leading-[12px] md:text-xs md:leading-[11.267px] lg:text-base lg:leading-[20.2px] ${
                isDarkMode ? "text-white" : "text-[#7E7E7E]"
              } `}
    Purchase
      </h2>
 <img className='h-[12px] w-[12px] md:h-[14.083px] md-w-[14.083px] lg:h-[24px] lg:w-[24px] self-center'
      src={WaecImg} alt="" />

      <h2 className='font-[600] text-[14px] leading-[12px] md:text-[9.389px]
       md:leading-[11.267px] lg:text-[16px] text-[#7E7E7E] lg:leading-[19.2px]'>
      WAEC E-PINs Instantly
      </h2>
      <img className='md:h-[14.083px] md:w-[14.083px] lg:h-[24px] lg:w-[24px] h-[14px] w-[14px]'
      src={arrowRight} alt="" />
    </div>
    {/* Input for Request of examination pins  */}
    <form onSubmit={handleWaecSubmitPost}
    action='POST'>
    <div  className='flex flex-col gap-[20px]  md:h-[172.73px] md:gap-[14.67px] 
     lg:gap-[25px] lg:h-[296px] lg:mb-[30px] mb-[30px]'>
      {/* container for the first two input */}
      <div className=' w-[100%]
      flex flex-col md:flex-row gap-[20px] 
      md:gap-[12.91px] lg:gap-[22px]'>

        {/* First Step Confirm exam type */}
   <div className='relative flex flex-col w-[100%] gap-[5.868px] md:w-1/2 md:gap-[5.868px]  
   lg:gap-[10px]'>
    {/* header */}
    <label className='md:font-[600] font-[400] text-[#7E7E7E] text-[14px] leading-[10.4px]  
     md:text-[9.389px] md:leading-[12.206px]
    lg:text-[16px] lg:leading-[20.8px]'>
    Confirm Exam Type
    </label>
    {/* input */}
    <div className='w-[100%] relative'
onClick={(e) => {
  waecExamDropDown();
  }}>
  <input type="text"
 value={examType}
   onChange={(e) => {
    setExamType(e.target.value)
   }}
className={`pt-[10.803px] pb-[13.794px] pr-[13px] pl-[10.876px] mt-2 md:mt-0
 md:pt-[8.802px] md:pb-[7.042px] w-full
md:pr-[5.282px] md:pl-[5.867px]
lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px] 
font-[400] leading-[10.4px] md:text-[9.389px] md:leading-[12.206px]
    lg:text-[16px] text-black lg:leading-[20.8px] cursor-pointer  border md:border-[0.4px] rounded-[10px] md:rounded-0 p-[20px] md:p-0 shadow-sm md:shadow-0 focus:outline-none focus:ring-2 text-[13.5px] sm:p-3 sm:text-lg 
    ${isDarkMode 
      ? "bg-black text-white border border-white" 
      : "border-[#9C9C9C] hover:bg-[#EDEAEA] bg-white"
  }`} readOnly/>
   <img 
       className='absolute lg:top-[15px] lg:right-[9px] md:top-[8.802px] md:right-[5.282px]
        top-[21.802px] right-[13px]
        Examdrop md:h-[14.038px] md:w-[14.038px] 
      lg:h-[24px] lg:w-[24px] w-[16px] h-[16px]'
      src={arrowDown} alt="" />
       </div>
       {examActive && (
         <div className={`absolute lg:top-[90px] md:top-[60px] top-[70px] z-[2]  flex flex-col w-[100%] lg:h-225px md:h-[210px] rounded-[10px]  md:rounded-0
            ${isDarkMode 
      ? "bg-black text-white border border-white" 
      : ""
  }`}
        >
          {(Exams.map(exam => {
            return (
               <a href={exam.path}
               onClick={(e =>{
          setExamType(exam.examType);
                 setExamActive(false);
             document.querySelector('.Examdrop').classList.remove('DropIt');
             console.log(e);
              })}
              className={`pb-[20px] pt-[20px] md:pb-[14px] md:pt-[14px] font-[400] text-[13.2px] leading-[10.4px] md:py-[15px] py-[8px] pl-[10px] 
         md:text-[13.227px] md:leading-[17.195px] 
         shadow-[0px_3.30667px_8.26667px_0px_rgba(0,0,0,0.25)]
         lg:text-[16px] lg:leading-[20.8px] cursor-pointer
           ${isDarkMode 
      ? "bg-black text-white border border-white" 
      : "border-[#9C9C9C] text-[#7C7C7C] hover:bg-[#EDEAEA] bg-white"
  }`} 
         key= {exam.id}>
      <h2>{exam.examType}   </h2>
         </a>
        
            )
          }))}


             </div>
      )}
    </div>

    {/* Quantity input Two / RightSide */}
    <div className='relative gap-[5.868px] flex flex-col w-[100%] md:w-1/2  
    md:gap-[5.868px] lg:gap-[10px] '>
    {/* header */}
    <label className='md:font-[600] font-[400] text-[#7E7E7E] text-[14px] leading-[10.4px]
      md:text-[9.389px] md:leading-[12.206px]
     lg:text-[16px] lg:leading-[20.8px]'>
    Quantity
    </label>
    {/* input */}
<div className='w-[100%] relative'
onClick={(e) => {
  waecQuantityDropDown();
 }}>
  <input type="text"
 onChange={(e)=>{
  setQuantityResult(e.target.value)
  }}
  value={quantityResult}
className={`pt-[10.803px] pb-[13.794px] pr-[13px] pl-[10.876px] mt-2 md:mt-0
 md:pt-[8.802px] md:pb-[7.042px] w-[100%]
md:pr-[5.282px] md:pl-[5.867px]
lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px] 
border-[0.4px]  
font-[400] leading-[10.4px]  md:text-[9.389px] md:leading-[12.206px]
    lg:text-[16px] lg:leading-[20.8px] cursor-pointer  md:border-[0.4px] rounded-[10px] md:rounded-0 p-[20px] md:p-0 shadow-sm md:shadow-0 focus:outline-none focus:ring-2 text-[13.5px] sm:p-3 sm:text-lg   
    ${isDarkMode 
      ? "bg-black text-white border border-white" 
      : "bg-white text-black border-[#9C9C9C]"
  }`}   readOnly/>
   
      <img 
       className='absolute lg:top-[15px] lg:right-[9px] md:top-[8.802px] md:right-[5.282px]
        top-[21.802px] right-[13px]
        imgdrop md:h-[14.038px] md:w-[14.038px] 
      lg:h-[24px] lg:w-[24px] w-[16px] h-[16px]'
      src={arrowDown} alt=""  />
       </div>
       {/* drop down */}
       
      {quantityActive && (
         <div className={`absolute lg:top-[90px] md:top-[60px] top-[70px] z-[1] 
         flex flex-col w-[100%] lg:h-225px md:h-[210px] rounded md:rounded-0
           ${isDarkMode 
      ? "bg-black text-white border border-white" 
      : ""
  }`} >
          {(options.map(option => {
            return (
              <h2 onClick={(e =>{
                setQuantityResult(option.quantity)
                setQuantityActive(false);
                setEducationAmount(option.Amount)
              document.querySelector('.imgdrop').classList.remove('DropIt');
         
              })}
              className={`pb-[20px] md:pb-[14px] md:pt-[14px] pt-[20px]  font-[400] text-[13.5px] leading-[10.4px] md:py-[15px] py-[8px] pl-[10px] 
         md:text-[13.227px] md:leading-[17.195px] w-[100%]  
       shadow-[0px_3.30667px_8.26667px_0px_rgba(0,0,0,0.25)]
         lg:text-[16px] lg:leading-[20.8px] cursor-pointer  
         ${isDarkMode 
      ? "bg-black text-white border border-white" 
      : "text-[#7C7C7C] hover:bg-[#EDEAEA] bg-white"
  }`} 
         key={option.id}>
        {option.quantity}
         </h2>
            )
          }))}
         
          
             </div>
      )}
    </div>
   </div>
  {/* container for Phone number and Email */}
   <div className=' w-[100%] 
   flex flex-col  md:flex-row gap-[20px] md:gap-[12.91px] lg:gap-[22px] z-0'>
    {/* LeftSide */}
     <div className=' container-phone gap-[5.868px] 
     flex flex-col md:w-1/2 md:gap-[10px] z-0'>
   <label className='md:font-[600] font-[400] text-[#7E7E7E] text-[15px] leading-[10.4px]
     md:text-[9.389px] md:leading-[12.206px]
   lg:text-[16px] lg:leading-[20.8px] '>
  Phone Number

   </label>
   
   <input onInput={(e =>{
  
  const numericValue = e.target.value.replace(/\D/g, '');
      e.target.value = numericValue
     if(numericValue.length === 11){
      e.target.style.border = '2px solid green';
    }
    else if(e.target.value.length < 11){
    e.target.style.border = '2px solid red';
  } })}
   className={`font-[410] h-[40.927px] lg:h-[51px]  md:h-[29.93px] w-[100%] mt-2 md:mt-0
    border-[0.4px] 
   lg:text-[16px] lg:leading-[20.8px] 
      leading-[16.206px]
   pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px]
   focus:outline-none
   md:pt-[8.802px] md:pb-[7.042px] 
   md:pr-[5.282px] md:pl-[5.867px] 
   lg:pt-[14px] lg:pb-[15.5px] lg:pr-[16px] lg:pl-[10px]
   placeholder:text-[14.389px] placeholder:leading-[18.809.4px] 
   lg:placeholder:text-[16px] lg:placeholder:leading-[20.8px]
   md:placeholder:text-[14.389px] md:placeholder:leading-[18.206px]  rounded-[10px] md:rounded-0 p-[20px] md:p-0 text-[13.5px] sm:p-3 sm:text-lg
   ${isDarkMode 
    ? "bg-black text-white border border-white" 
    : "border-[#9C9C9C] text-[#7C7C7C] hover:bg-[#EDEAEA]  bg-white placeholder:text-[#7E7E7E] border md:border-[0.4px]"
}`} 
    type="tel" name='Waec-Phone' id='phone' maxLength={11} placeholder=''
    value={educationPinPhone}
     onChange={(e)=>{
      setEducationPinPhone(e.target.value);
    
     }}/>
     {errors.educationPinPhone && (
            <div className="text-[12px] text-red-500 italic lg:text-[14px]">
              {errors.educationPinPhone}
            </div>
          )}
   </div>
   
        
   {/* right-side */}
   <div className='flex flex-col gap-[5.868px] md:w-1/2 md:gap-[10px]'>
   <label className='md:font-[600] font-[400] text-[15px] leading-[10.4px]
   text-[#7E7E7E]  md:text-[9.389px] md:leading-[12.206px]
   lg:text-[16px] lg:leading-[20.8px]'>
   Email
   </label>
   
   <input className ={`EmailPins font-[400]  flex h-[41.927px] lg:h-[51px] md:h-[29.93px] w-[100%] mt-2 md:mt-0
   lg:text-[16px] lg:leading-[21.8px] 
   text-[14px] leading-[18.206px] tracking-[0.4px]
   pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px] 
    border-[0.4px] focus:outline-none self-center
   md:pt-[8.802px] md:pb-[7.042px] 
   md:pr-[5.282px] md:pl-[5.867px] 
   lg:pt-[14px] lg:pb-[15.5px] lg:pr-[16px] lg:pl-[10px] 
   placeholder:text-[14.389px] placeholder:leading-[18.809.4px] 
   lg:placeholder:text-[16px] lg:placeholder:leading-[20.8px] 
   md:placeholder:text-[14.389px] md:placeholder:leading-[18.206px] md:border-[0.4px] rounded-[10px] md:rounded-0 p-[20px] md:p-0 sm:p-3 sm:text-lg   
   ${isDarkMode 
    ? "bg-black text-white border border-white" 
    : "placeholder:text-[#7E7E7E] border-[#9C9C9C] text-black"
}`}
   name='Waec-Email'
    value={educationPinEmail}
   onChange={(e) =>{
    setEducationPinEmail(e.target.value);
   }}
    type="Email" 
    placeholder='example@gmail.com'/>
    
    {errors.educationPinEmail && (
            <div className="text-[12px] text-red-500 italic lg:text-[14px]">
              {errors.educationPinEmail}
            </div>
          )}
   </div>
   
   </div>

   {/* Conatiner for Amount and Payment method */}
   <div className='flex w-[100%]
   flex-col gap-[20px] md:flex-row md:gap-[12.91px] lg:gap-[22px]'>
{/* Amount Step /Leftside */}
   <div className='flex flex-col gap-[5.868px] w-[100%] md:w-1/2 md:gap-[10px]'>
    {/* header */}
    <label className='md:font-[600] font-[400] text-[15px] leading-[10.4px]
     md:text-[9.389px] md:leading-[12.206px]
     text-[#7E7E7E] lg:text-[16px] lg:leading-[20.8px]'>
    Amount
    </label>
    {/* input */}
    <input 
     className={`h-[41.927px]  lg:h-[51px] md:h-[29.93px] mt-2 md:mt-0
        md:pt-[8.802px] md:pb-[7.042px] 
       pt-[12.803px] pb-[7.794px] pr-[13px] pl-[10.876px]
     md:pr-[5.282px] md:pl-[5.867px]
  lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px] border-[0.4px]
  focus:outline-none text-start
     leading-[10.4px]
   font-[400]  md:text-[9.389px] md:leading-[12.206px]
  lg:text-[16px] lg:leading-[20.8px] md:border-[0.4px] rounded-[10px] md:rounded-0 p-[20px] md:p-0 text-[13.5px]  sm:p-3 sm:text-lg 
  ${isDarkMode 
    ? "bg-black text-white border border-white" 
    : "placeholder:text-[#7E7E7E] border-[#9C9C9C] text-black"
}`}
  maxLength={7} value={educationAmount}
  onChange={(e)=>{
   setEducationAmount(e.target.value);
  }} readOnly/>
 </div>
    {/* payment method */}
    <div className='relative payment-parent gap-[5.868px]
     flex w-[100%] flex-col md:w-1/2 md:gap-[10px]'>
    {/* header */}
    <label className='md:font-[600] font-[400] text-[15px] leading-[10.4px]
     text-[#7E7E7E]  md:text-[9.389px] md:leading-[12.206px]
     lg:text-[16px] lg:leading-[20.8px]'>
    Payment Method
    </label>
    {/* input */}
    <div className='w-[100%] relative'
onClick={(e) => {
  waecMethodDropDown();
}}>
  <input type="text" 
  onChange={(e)=> {
  setPaymentResult(e.target.value)
  }}
  value={paymentResult}
className={`pt-[10.803px] pb-[13.794px] pr-[13px] pl-[10.876px] mt-2 md:mt-0
 md:pt-[8.802px] md:pb-[7.042px] w-[100%]
md:pr-[5.282px] md:pl-[5.867px]
lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px] 
border-[0.4px] 
font-[400] leading-[10.4px]  md:text-[9.389px] md:leading-[12.206px]
    lg:text-[16px] lg:leading-[20.8px] cursor-pointer   md:border-[0.4px] rounded-[10px] md:rounded-0 p-[20px] md:p-0 shadow-sm md:shadow-0 focus:outline-none focus:ring-2 text-[13.5px] sm:p-3 sm:text-lg
    ${isDarkMode 
      ? "bg-black text-white border border-white" 
      : "placeholder:text-[#7E7E7E] border-[#9C9C9C] text-black bg-white hover:bg-[#EDEAEA]"
  }`}
  readOnly/>
   
      <img 
       className='absolute lg:top-[15px] lg:right-[9px] md:top-[8.802px] md:right-[5.282px]
        top-[21.802px] right-[13px]
        methodDrop md:h-[14.038px] md:w-[14.038px] 
      lg:h-[24px] lg:w-[24px] w-[16px] h-[16px]'
      src={imageState} alt="" />
       </div>
       {/* drop down */}
       
      {methodActive && (
         <div className='absolute lg:top-[90px] md:top-[60px] top-[72px] z-0 flex flex-col w-[100%] rounded md:rounded-0  
         '>

        {(methodOptions.map(methodOption => {
            return (
        <div 
        onClick={(e =>{
        onchange={setMethodOptions}
          setPaymentResult(methodOption.method);
          setWalletBalance(methodOption.balance)
          setImageState(methodOption.flag);
          setMethodActive(false);
       document.querySelector('.methodDrop').classList.remove('DropIt');
        })}
        className={`flex gap-[10px] lg:py-[15px] py-[10px] pl-[10px]
        cursor-pointer  items-center 
        shadow-[0px_3.30667px_8.26667px_0px_rgba(0,0,0,0.25)] 
         ${isDarkMode 
          ? "bg-black text-white border border-white" 
          : "bg-white hover:bg-[#EDEAEA]"
      }`}
        key={ methodOption.id }>

          <img className='md:h-[29.27px]  h-[14.27px]' src={methodOption.flag} alt=""/>

            <h2 
              className={`pb-[20px] md:pb-0 md:pt-0 pt-[20px] font-[400] text-[13.5px] leading-[10.4px]
         md:text-[13.227px] md:leading-[17.195px] 
         lg:text-[16px] lg:leading-[20.8px] self-center cursor-pointer
         ${isDarkMode 
          ? "bg-black text-white" 
          : "text-[#7C7C7C]"
      }`} >
        {methodOption.method + ' ' + methodOption.balance}
         </h2>
        </div>
              
            )
          }))}
         
          
             </div>
      )}
    </div>
    </div>
    {/* end of */}
    </div>
    {educationProceed && (
          <Modal>
         
            <div
              className={`deleteRecipientSuccess  mx-[5%]  ${
                isDarkMode ? "border bg-[#000]" : "bg-[#fff]"
              } ${
                toggleSideBar
                  ? "confirm01"
                  : "confirm"
              } grow pt-[10px] pb-[20px] rounded-tr-[8px] rounded-tl-[8px] relative 
              md:rounded-[11.5px] md:mx-auto md:my-auto md:overflow-auto`}

            >
              Purchase
            </h2>
            <img
              className="h-[12px] w-[12px] md:h-[14.083px] md-w-[14.083px] lg:h-[24px] lg:w-[24px] self-center"
              src={WaecImg}
              alt=""
            />

            <h2
              className={`font-semibold text-sm leading-[12px] md:text-xs md:leading-[11.267px] lg:text-base  lg:leading-[20.2px] ${
                isDarkMode ? "text-white" : "text-[#7E7E7E]"
              }`}
            >
              WAEC E-PINs Instantly
            </h2>
            <img
              className="md:h-[14.083px] md:w-[14.083px] lg:h-[24px] lg:w-[24px] h-[14px] w-[14px]"
              src={arrowRight}
              alt=""
            />
          </div>
          {/* Input for Request of examination pins  */}
          <form onSubmit={handleWaecSubmitPost} action="POST">
            <div className="flex flex-col gap-[20px] md:h-[172.73px] md:gap-[14.67px] lg:gap-[25px] lg:h-[296px] lg:mb-[30px] mb-[30px]">
              {/* container for the first two input */}
              <div className=" w-full flex flex-col md:flex-row gap-[20px] md:gap-[12.91px] lg:gap-[22px]">
                {/* First Step Confirm exam type */}
                <div className="relative flex flex-col w-full gap-2 md:w-1/2 lg:gap-2.5">
                  {/* header */}
                  <label
                    className={`md:font-semibold font-normal  text-sm leading-[10.4px] md:text-xs md:leading-[12.206px] lg:text-base lg:leading-[20.8px] ${
                      isDarkMode ? "text-white" : "text-[#7E7E7E]"
                    }`}
                  >
                    Confirm Exam Type
                  </label>
                  {/* input */}
                  <div
                    className={`relative flex items-center justify-between py-3 pl-[5.867px] lg:py-[14px] lg:pl-[10px] border md:py-3 md:pl-[8.67px] pr-1 md:pr-[5.867px] text-xs leading-[18px] lg:text-base lg:leading-[20.8px] rounded-lg sm:rounded-[10px] h-full w-full shadow-sm md:shadow-0 focus:outline-none ${
                      isDarkMode
                        ? "bg-black text-white border-white"
                        : "border-[#9C9C9C] hover:bg-[#EDEAEA] "
                    }`}
                    onClick={() => {
                      waecExamDropDown();
                      setMethodActive(false);
                      setQuantityActive(false);
                    }}
                  >
                    <input
                      type="text"
                      value={examType}
                      onChange={(e) => {
                        setExamType(e.target.value);
                      }}
                      className={`placeholder:text-xs placeholder:leading-[10.4px] placeholder:lg:text-base placeholder:lg:leading-[20.8px] bg-transparent
                        text-xs font-normal leading-[12px] capitalize md:text-xs md:leading-[11.92px] lg:text-base focus:outline-none lg:leading-[24px]
                      ${
                        isDarkMode
                          ? "bg-black text-white"
                          : " text-[#7C7C7C] hover:bg-[#EDEAEA] "
                      }`}
                      // pt-[10.803px] pb-[13.794px] pr-[13px] pl-[10.876px] mt-2 md:mt-0 md:pt-[8.802px] md:pb-[7.042px] w-full md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px] font-normal leading-[10.4px] md:text-[9.389px] md:leading-[12.206px] lg:text-base text-black lg:leading-[20.8px] cursor-pointer border md:border-[0.4px] rounded-[10px] md:rounded-0 p-[20px] md:p-0 shadow-sm md:shadow-0 focus:outline-none focus:ring-2 text-[13.5px] sm:p-3 sm:text-lg
                      readOnly
                    />
                    <img
                      className="lg:w-6 lg:h-6 w-4 h-4 cursor-pointer Examdrop"
                      // className="absolute lg:top-[15px] lg:right-[9px] md:top-[8.802px] md:right-[5.282px]
                      //   top-[21.802px] right-[13px]
                      //   Examdrop md:h-[14.038px] md:w-[14.038px]
                      // lg:h-[24px] lg:w-[24px] w-[16px] h-[16px]"
                      src={arrowDown}
                      alt=""
                    />
                  </div>
                  {examActive && (
                    <div
                      className={`absolute lg:top-[90px] md:top-[75px] top-[70px] z-[2] flex flex-col w-full border divide-y rounded-[10px] md:rounded-0
                      ${
                        isDarkMode
                          ? "bg-black text-white divide-gray-50 border-white"
                          : "text-[#7C7C7C]"
                      }`}
                    >
                      {Exams.map((exam) => {
                        return (
                          <a
                            href={exam.path}
                            onClick={() => {
                              setExamType(exam.examType);
                              setExamActive(false);
                              document
                                .querySelector(".Examdrop")
                                .classList.remove("DropIt");
                              // console.log(e);
                            }}
                            className={`pb-[20px] pt-[20px] md:pb-[14px] md:pt-[14px] text-[13.2px] leading-[10.4px] md:py-[15px] py-[8px] pl-[10px] font-medium md:text-[13.227px] md:leading-[17.195px] shadow-[0px_3.30667px_8.26667px_0px_rgba(0,0,0,0.25)] lg:text-base lg:leading-[20.8px] cursor-pointer transition-colors duration-300 
                            ${
                              isDarkMode
                                ? "bg-black text-white  hover:bg-gray-800"
                                : " text-[#7C7C7C] hover:bg-[#EDEAEA] bg-white"
                            }`}
                            key={exam.id}
                          >
                            <h2>{exam.examType} </h2>
                          </a>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Quantity input Two / RightSide */}
                <div className="relative gap-[5.868px] flex flex-col w-full md:w-1/2 md:gap-[5.868px] lg:gap-2.5 ">
                  {/* header */}
                  <label
                    className={`md:font-semibold font-normal  text-sm leading-[10.4px] md:text-xs md:leading-[12.206px] lg:text-base lg:leading-[20.8px] ${
                      isDarkMode ? "text-white" : "text-[#7E7E7E]"
                    }`}
                  >
                    Quantity
                  </label>
                  {/* input */}
                  <div
                    className={`relative flex items-center justify-between py-3 pl-[5.867px] lg:py-[14px] lg:pl-[10px] border md:py-3 md:pl-[8.67px] pr-1 md:pr-[5.867px] text-xs leading-[18px] lg:text-base lg:leading-[20.8px] rounded-lg sm:rounded-[10px] h-full w-full shadow-sm md:shadow-0 ${
                      isDarkMode
                        ? "bg-black text-white border-white"
                        : "border-[#9C9C9C] hover:bg-[#EDEAEA] "
                    }`}
                    onClick={() => {
                      waecQuantityDropDown();
                      setMethodActive(false);
                      setExamActive(false);
                    }}
                  >
                    <input
                      type="text"
                      onChange={(e) => {
                        setQuantityResult(e.target.value);
                      }}
                      value={quantityResult}
                      //                   className={`pt-[10.803px] pb-[13.794px] pr-[13px] pl-[10.876px] mt-2 md:mt-0 md:pt-[8.802px] md:pb-[7.042px] w-full md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px] border-[0.4px] font-normal leading-[10.4px]  md:text-[9.389px] md:leading-[12.206px] lg:text-base lg:leading-[20.8px] cursor-pointer md:border-[0.4px] rounded-[10px] md:rounded-0 p-[20px] md:p-0 shadow-sm md:shadow-0 focus:outline-none focus:ring-2 text-[13.5px] sm:p-3 sm:text-lg
                      // ${
                      //   isDarkMode
                      //     ? "bg-black text-white border border-white"
                      //     : "bg-white text-black border-[#9C9C9C]"
                      // }`}
                      className={`placeholder:text-xs placeholder:leading-[10.4px] placeholder:lg:text-base placeholder:lg:leading-[20.8px] bg-transparent
                        text-xs font-normal leading-[12px] capitalize md:text-xs md:leading-[11.92px] lg:text-base focus:outline-none lg:leading-[24px]
                      ${
                        isDarkMode
                          ? "bg-black text-white "
                          : " text-[#7C7C7C] hover:bg-[#EDEAEA] "
                      }`}
                      readOnly
                    />

                    <img
                      className="lg:w-6 lg:h-6 w-4 h-4 cursor-pointer imgdrop"
                      src={arrowDown}
                      alt=""
                    />
                  </div>
                  {/* drop down */}

                  {quantityActive && (
                    <div
                      className={`absolute lg:top-[90px] md:top-[75px] top-[70px] z-[1] flex flex-col w-full border divide-y rounded
                      ${
                        isDarkMode
                          ? "bg-black text-white divide-gray-50  border-white"
                          : "text-[#7C7C7C]"
                      }`}
                    >
                      {options.map((option) => {
                        return (
                          <h2
                            onClick={() => {
                              setQuantityResult(option.quantity);
                              setQuantityActive(false);
                              // setEducationAmount(option.Amount);
                              document
                                .querySelector(".imgdrop")
                                .classList.remove("DropIt");
                              handleCalculatedAmount(option.id);
                            }}
                            className={`pb-[20px] md:pb-[14px] md:pt-[14px] pt-[20px] text-[13.5px] leading-[10.4px] md:py-[15px] py-[8px] pl-[10px] font-medium md:text-[13.227px] md:leading-[17.195px] w-full shadow-[0px_3.30667px_8.26667px_0px_rgba(0,0,0,0.25)] lg:text-base lg:leading-[20.8px] cursor-pointer transition-colors duration-300    
                            ${
                              isDarkMode
                                ? "bg-black text-white hover:bg-gray-800 "
                                : " hover:bg-[#EDEAEA] bg-[white] text-[#7C7C7C]"
                            }`}
                            key={option.id}
                          >
                            {option.quantity}
                          </h2>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
              {/* container for Phone number and Email */}
              <div className=" w-full flex flex-col  md:flex-row gap-[20px] md:gap-[12.91px] lg:gap-[22px] ">
                {/* LeftSide */}
                <div className=" container-phone gap-2 flex flex-col md:w-1/2 md:gap-2.5 z-0">
                  <label
                    className={`md:font-semibold font-normal  text-sm leading-[10.4px] md:text-xs md:leading-[12.206px] lg:text-base lg:leading-[20.8px] ${
                      isDarkMode ? "text-white" : "text-[#7E7E7E]"
                    }`}
                  >
                    Phone Number
                  </label>

                  <input
                    onInput={(e) => {
                      const numericValue = e.target.value.replace(/\D/g, "");
                      e.target.value = numericValue;
                      if (numericValue.length === 11) {
                        e.target.style.border = "2px solid green";
                      } else if (e.target.value.length < 11) {
                        e.target.style.border = "2px solid red";
                      }
                    }}
                    className={`font-normal py-3 pl-[5.867px] lg:py-[14px] lg:pl-[10px] border md:py-3 md:pl-[8.67px] pr-1 md:pr-[5.867px] text-xs leading-[18px] lg:text-base lg:leading-[20.8px] focus:outline-none placeholder:text-xs placeholder:leading-[10.4px] placeholder:lg:text-base placeholder:lg:leading-[20.8px] sm:rounded-[10px] h-full w-full md:placeholder:text-[14.389px] md:placeholder:leading-[18.206px] rounded-[10px]
                    ${
                      isDarkMode
                        ? "bg-black text-white border-white"
                        : "border-[#9C9C9C] text-[#7C7C7C] hover:bg-[#EDEAEA] bg-white placeholder:text-[#7E7E7E] border md:border-[0.4px]"
                    }`}
                    //  md:rounded-0 p-[20px] md:p-0 text-[13.5px] sm:p-3 sm:text-lg
                    type="tel"
                    name="Waec-Phone"
                    id="phone"
                    maxLength={11}
                    placeholder=""
                    value={educationPinPhone}
                    onChange={(e) => {
                      setEducationPinPhone(e.target.value);
                    }}
                  />
                  {errors.educationPinPhone && (
                    <div className="text-xs text-red-500 italic lg:text-sm">
                      {errors.educationPinPhone}
                    </div>
                  )}
                </div>

                {/* right-side */}
                <div className="flex flex-col gap-2 md:w-1/2 md:gap-2.5">
                  <label
                    className={`md:font-semibold font-normal  text-sm md:text-xs leading-[10.4px] md:leading-[12.206px] lg:text-base lg:leading-[20.8px] ${
                      isDarkMode ? "text-white" : "text-[#7E7E7E]"
                    }`}
                  >
                    Email
                  </label>

                  <input
                    className={`EmailPins font-normal py-3 pl-[5.867px] lg:py-[14px] lg:pl-[10px] border md:py-3 md:pl-[8.67px] pr-1 md:pr-[5.867px] text-xs leading-[18px] lg:text-base lg:leading-[20.8px] focus:outline-none placeholder:text-xs placeholder:leading-[10.4px] placeholder:lg:text-base placeholder:lg:leading-[20.8px] sm:rounded-[10px] h-full w-full md:placeholder:text-[14.389px] md:placeholder:leading-[18.206px] rounded-[10px]  
                    ${
                      isDarkMode
                        ? "bg-black text-white border-white"
                        : "placeholder:text-[#7E7E7E] border-[#9C9C9C] text-[#7C7C7C]"
                    }`}
                    name="Waec-Email"
                    value={educationPinEmail}
                    onChange={(e) => {
                      setEducationPinEmail(e.target.value);
                    }}
                    type="Email"
                    placeholder="example@gmail.com"
                  />

                  {errors.educationPinEmail && (
                    <div className="text-xs text-red-500 italic lg:text-sm">
                      {errors.educationPinEmail}
                    </div>
                  )}
                </div>
              </div>

              {/* Conatiner for Amount and Payment method */}
              <div className="flex w-full flex-col gap-[20px] md:flex-row md:gap-[12.91px] lg:gap-[22px]">
                {/* Amount Step /Leftside */}
                <div className="flex flex-col gap-2 w-full md:w-1/2 md:gap-2.5 relative">
                  {/* header */}
                  <label
                    className={`md:font-semibold font-normal  text-sm md:text-xs leading-[10.4px] md:leading-[12.206px] lg:text-base lg:leading-[20.8px] ${
                      isDarkMode ? "text-white" : "text-[#7E7E7E]"
                    }`}
                  >
                    Amount
                  </label>
                  {/* input */}
                  <input
                    className={`font-normal py-3 pl-[5.867px] lg:py-[14px] lg:pl-[10px] border md:py-3 md:pl-[8.67px] pr-1 md:pr-[5.867px] text-xs leading-[18px] lg:text-base lg:leading-[20.8px] focus:outline-none placeholder:text-xs placeholder:leading-[10.4px] placeholder:lg:text-base placeholder:lg:leading-[20.8px] sm:rounded-[10px] h-full w-full md:placeholder:text-[14.389px] md:placeholder:leading-[18.206px] rounded-[10px]  
                    ${
                      isDarkMode
                        ? "bg-black text-white border-white"
                        : "placeholder:text-[#7E7E7E] border-[#9C9C9C] text-[#7C7C7C]"
                    }`}
                    maxLength={7}
                    value={isAmountLoading ? "" : educationAmount}
                    // onChange={(e) => {
                    //   setEducationAmount(e.target.value);
                    // }}
                    readOnly
                  />
                  {isAmountLoading && (
                    <p className="left-4 absolute top-7 md:top-9 lg:top-12">
                      <BalanceLoading />
                    </p>
                  )}
                </div>
                {/* payment method */}
                <div className="relative payment-parent gap-[5.868px] flex w-full flex-col md:w-1/2 md:gap-2.5">
                  {/* header */}
                  <label
                    className={`md:font-semibold font-normal  text-sm md:text-xs leading-[10.4px] md:leading-[12.206px] lg:text-base lg:leading-[20.8px] ${
                      isDarkMode ? "text-white" : "text-[#7E7E7E]"
                    }`}
                  >
                    Payment Method
                  </label>
                  {/* input */}
                  <div
                    className={`relative flex items-center justify-between py-3 pl-[5.867px] lg:py-[14px] lg:pl-[10px] border md:py-3 md:pl-[8.67px] pr-1 md:pr-[5.867px] text-xs leading-[18px] lg:text-base lg:leading-[20.8px] rounded-lg sm:rounded-[10px] h-full w-full shadow-sm md:shadow-0 focus:outline-none ${
                      isDarkMode
                        ? "bg-black text-white border-white"
                        : "border-[#9C9C9C] hover:bg-[#EDEAEA] "
                    }`}
                    onClick={() => {
                      waecMethodDropDown();
                      setExamActive(false);
                      setQuantityActive(false);
                    }}
                  >
                    <input
                      type="text"
                      onChange={(e) => {
                        setPaymentResult(e.target.value);
                      }}
                      value={paymentResult}
                      //                       className={`pt-[10.803px] pb-[13.794px] pr-[13px] pl-[10.876px] mt-2 md:mt-0
                      //  md:pt-[8.802px] md:pb-[7.042px] w-full
                      // md:pr-[5.282px] md:pl-[5.867px]
                      // lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]
                      // border-[0.4px]
                      // font-normal leading-[10.4px]  md:text-[9.389px] md:leading-[12.206px]
                      //     lg:text-base lg:leading-[20.8px] cursor-pointer border-0 md:border-[0.4px] rounded-[10px] md:rounded-0 p-[20px] md:p-0 shadow-sm md:shadow-0 focus:outline-none focus:ring-2 text-[13.5px] sm:p-3 sm:text-lg
                      //     ${
                      //       isDarkMode
                      //         ? "bg-black text-white border border-white"
                      //         : "placeholder:text-[#7E7E7E] border-[#9C9C9C] text-black bg-white hover:bg-[#EDEAEA]"
                      //     }`}
                      className={`placeholder:text-xs placeholder:leading-[10.4px] placeholder:lg:text-base placeholder:lg:leading-[20.8px] bg-transparent focus:outline-none
                      ${
                        isDarkMode
                          ? "bg-black text-white border border-white"
                          : "border-[#9C9C9C] hover:bg-[#EDEAEA] "
                      }`}
                      readOnly
                    />

                    <img
                      className="lg:w-6 lg:h-6 w-4 h-4 cursor-pointer methodDrop"
                      src={imageState}
                      alt=""
                    />
                  </div>
                  {/* drop down */}

                  {methodActive && (
                    <div
                      className={`absolute lg:top-[90px] md:top-[75px] top-[72px] border divide-y z-[5] rounded flex flex-col w-full  
                      ${
                        isDarkMode
                          ? "bg-black text-white divide-gray-50  border-white"
                          : "text-[#7C7C7C]"
                      }`}
                    >
                      {methodOptions.map((methodOption) => {
                        return (
                          <div
                            onClick={() => {
                              // setPaymentResult(
                              //   `${methodOption.method} ${methodOption.balance}`
                              // );
                              setPaymentResult(methodOption.method);
                              setWalletBalance(methodOption.balance);
                              setImageState(methodOption.flag);
                              setMethodActive(false);
                              document
                                .querySelector(".methodDrop")
                                .classList.remove("DropIt");
                            }}
                            className={`flex gap-2.5 lg:py-[15px] py-[10px] pl-[10px] cursor-pointer transition-colors duration-300 items-center shadow-[0px_3.30667px_8.26667px_0px_rgba(0,0,0,0.25)] 
                            ${
                              isDarkMode
                                ? "bg-black text-white hover:bg-gray-800"
                                : "bg-white hover:bg-[#EDEAEA]"
                            }`}
                            key={methodOption.id}
                          >
                            <img
                              className="md:h-[29.27px]  h-[14.27px]"
                              src={methodOption.flag}
                              alt=""
                            />

                            <h2
                              className={`pb-[20px] md:pb-0 md:pt-0 pt-[20px] font-normal text-[13.5px] leading-[10.4px] md:text-[13.227px] md:leading-[17.195px] lg:text-base lg:leading-[20.8px] self-center cursor-pointer
                              ${
                                isDarkMode
                                  ? "bg-black text-white"
                                  : "text-[#7C7C7C]"
                              }`}
                            >
                              {methodOption.method + " " + methodOption.balance}
                            </h2>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
              {/* end of */}
            </div>
            {educationProceed && (
              <Modal>
                <div
                  className={`deleteRecipientSuccess mx-[5%]  ${
                    isDarkMode ? "border bg-[#000]" : "bg-[#fff]"
                  } ${
                    toggleSideBar ? "confirm01" : "confirm"
                  } grow pt-[10px] pb-[20px] rounded-tr-[8px] rounded-tl-[8px] relative
                  md:rounded-[11.5px] md:mx-auto md:my-auto md:overflow-auto`}
                  // className={`${
                  //   isDarkMode
                  //     ? "absolute h-[505px] shrink-0 bottom-0 shadow-[0px_0px_7.068181991577148px_0px_rgba(0,0,0,0.25)] rounded-[8px] md:h-[620px] md:rounded-xl md:bottom-[30%] lg:h-[550px] lg:rounded-[20px] lg:bottom-[7%] bg-black border border-white text-white"
                  //     : styles.transferMoneyPop
                  // } ${
                  //   toggleSideBar ? " lg:ml-[20%] lg:w-[40%]" : "lg:w-[40%]"
                  // } w-[90%] md:w-[60%] overflow-auto`}
                >
                  <div className="w-full flex justify-end border-b-[6px] items-center border-primary px-[12px] h-[35px] md:h-[45px] lg:h-[60px] :border-b-[10px] ">
                    <img
                      src={closeIcon}
                      alt=""
                      onClick={() => setEducationProceed(false)}
                      className="w-[18px] h-[18px]  md:w-[25px] cursor-pointer md:h-[25px] lg:w-[35px] lg:h-[35px]"
                    />
                  </div>

                  <div>
                    <h2
                      className="lg:text-base lg:leading-[24px] text-center mb-1
                text-[10px] md:text-[13px] md:leading-[20px] font-semibold mt-[20px] leading-[12px]"
                    >
                      Confirm Transaction
                    </h2>
                    <h2
                      className="lg:text-base md:text-xs md:px-[30px] lg:leading-[24px] md:leading-[20px] text-[10px] leading-[12px] text-center mt-[26px] mx-[10px] mb-[20px] font-medium text-black"
                    >
                      You are about to purchase{" "}
                      <span className="font-semibold">{examType}</span> PIN (
                      ₦{educationAmount}) from your {paymentResult} to
                    </h2>

                    <div className="flex flex-col gap-[15px] px-[20px] mt-[50px] md:gap-[25px]">
                      <div className="flex items-center justify-between">
                        <h2
                          className="text-[#7C7C7C] text-[10px] leading-[12px]
                     md:text-xs md:leading-[11.92px] lg:text-base lg:leading-[24px] font-medium"
                        >
                          Exam Type
                        </h2>
                        <div className="flex gap-1">
                          <div
                            className="rounded-full w-[12.02px] h-[12.02px]
                       flex items-center justify-center text-[6px] overflow-hidden 
                       md:w-[12.02px] lg:w-[25px] md:h-[12.02px] lg:h-[25px]"
                          >
                            <img
                              src={WaecImg}
                              alt=""
                              className="w-full h-full object-cover md:h-[15px]"
                            />
                          </div>
                          <h2
                            className="text-[10px] leading-[12px] capitalize md:text-xs md:leading-[11.92px] lg:text-base lg:leading-[24px] font-medium"
                          >
                            {examType}
                          </h2>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <h2
                          className="text-[#7C7C7C] text-[10px] leading-[12px] md:text-xs md:leading-[11.92px] lg:text-base lg:leading-[24px] font-medium"
                        >
                          Quantity
                        </h2>
                        <div className="flex gap-1">
                          <h2
                            className={`text-[10px] leading-[12px] md:text-xs md:leading-[11.92px] lg:text-base lg:leading-[24px] font-medium ${
                              isDarkMode ? "text-[#7C7C7C]" : ""
                            }`}
                          >
                            {quantityResult}
                          </h2>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <h2
                          className="text-[#7C7C7C] text-[10px] leading-[12px] md:text-xs md:leading-[11.92px] lg:text-base lg:leading-[24px] font-medium"
                        >
                          Phone Number
                        </h2>
                        <div className="flex gap-1">
                          <h2
                            className="text-[10px] leading-[12px] md:text-xs md:leading-[11.92px] lg:text-base lg:leading-[24px] font-medium"
                          >
                            {educationPinPhone}
                          </h2>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <h2
                          className="text-[#7C7C7C] text-[10px] leading-[12px] md:text-xs md:leading-[11.92px] lg:text-base lg:leading-[24px] font-medium"
                        >
                          Email
                        </h2>
                        <div className="flex gap-1">
                          <h2
                            className="text-[10px] leading-[12px] md:text-xs md:leading-[11.92px] lg:text-base lg:leading-[24px] font-medium"
                          >
                            {educationPinEmail}
                          </h2>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <h2
                          className="text-[#7C7C7C] text-[10px] leading-[12px] md:text-xs md:leading-[11.92px] lg:text-base lg:leading-[24px] font-medium"
                        >
                          Amount
                        </h2>
                        <div className="flex gap-1">
                          <h2
                            className="text-[10px] leading-[12px] md:text-xs md:leading-[11.92px] lg:text-base lg:leading-[24px] font-medium"
                          >
                            ₦{educationAmount}
                          </h2>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <h2
                          className="text-[#7C7C7C] text-[10px] leading-[12px] md:text-xs md:leading-[11.92px] lg:text-base lg:leading-[24px] font-medium"
                        >
                          Payment Method
                        </h2>
                        <div className="flex gap-1">
                          <h2
                            className="text-[10px] leading-[12px] md:text-xs md:leading-[11.92px] lg:text-base lg:leading-[24px] font-medium"
                          >
                            {paymentResult}
                          </h2>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <h2
                          className="text-[#7C7C7C] text-[10px] leading-[12px] md:text-xs md:leading-[11.92px] lg:text-base lg:leading-[24px] font-medium"
                        >
                          Transaction Fee
                        </h2>
                        <div className="flex gap-1">
                          <h2
                            className="text-[10px] leading-[12px] md:text-xs md:leading-[11.92px] lg:text-base lg:leading-[24px] font-medium"
                          >
                            ₦0.00
                          </h2>
                        </div>
                      </div>

                      {/* POINTS EARNED */}
                      <div className="flex items-center justify-between">
                        <h2
                          className="text-[#7C7C7C] text-[10px] leading-[12px] md:text-xs md:leading-[11.92px] lg:text-base lg:leading-[24px] font-medium"
                        >
                          Points Earned
                        </h2>
                        <div className="flex gap-1">
                          <h2
                            className="text-[10px] text-[#2ED173] leading-[12px] md:text-xs md:leading-[11.92px] lg:text-base lg:leading-[24px] font-medium"
                          >
                            +2.00
                          </h2>
                        </div>
                      </div>

                      {/* WALLET */}
                      <div
                        className="my-[5px] relative flex justify-between items-center gap-2 
                  bg-slate-200 -mx-[20px] px-[15px] h-[55px] py-[18px]"
                      >
                        <div className="flex gap-2 items-center">
                          <div className="bg-white rounded-full h-[27px] w-[27px] flex justify-center items-center">
                            <img
                              className="w-[16px] h-[16px]"
                              src={imageState}
                              alt="/"
                            />
                          </div>
                          <p className="text-[10px] md:text-sm  lg:text-base">
                            Available Balance{" "}
                            <span className="text-[#00000063] font-medium">
                              (₦{walletBalance})
                            </span>
                          </p>
                        </div>
                        <img
                          src={arrowRight}
                          alt=""
                          className="w-[12px] h-[12px] md:w-[50px] md:h-[20px] lg:w-[80px] lg:h-[30px]"
                        />
                        <span className="text-gray-500 text-xs font-normal leading-[20px] lg:text-[16px] lg:leading-[22px] text-left absolute left-[3.2rem] top-8 ">
                          {balanceStatus}
                        </span>
                      </div>

                      <div className="flex items-center justify-center mb-[60px]">
                        <button
                          className={`w-full md:w-fit text-white rounded-md px-[28px] text-[10px] md:text-xs leading-[15px] lg:text-base lg:leading-[24px] py-[15px] md:py-[10px] font-extrabold   ${
                            CheckSufficiency ? "bg-gray-400" : "bg-primary"
                          }`}
                          onClick={() => {
                            confirmButton();
                          }}
                          disabled={CheckSufficiency}
                        >
                          Confirmed
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Modal>
            )}

            {/* CONFIRM TRANSACTION */}
            {educationConfirm && (
              <Modal>
                <div
                  className={`confirm2 ${styles.inputPin} ${
                    toggleSideBar
                      ? "md:w-[45%] md:ml-[20%] lg:w-[40%] lg:ml-[20%]"
                      : "lg:w-[40%]"
                  } md:w-[55%] w-[90%] md:mb-[0%] md:mx-auto md:my-auto lg:mx-auto lg:my-auto`}
                >
                  <img
                    onClick={() => setEducationConfirm(false)}
                    className="absolute cursor-pointer top-[5.5px] 
                right-2 w-[18px] h-[18px] 
                md:w-[35px] md:h-[25px] lg:w-[45px] lg:h-[45px]"
                    src={closeIcon}
                    alt=""
                  />

                  <hr className="h-[6px] bg-[#04177f] lg:mt-[10%] border-none mt-[8%] md:mt-[6%] md:h-[10px]" />
                  <p className="text-[10px] md:text-base lg:text-[18px] font-extrabold text-center my-[8%] lg:my-[%]">
                    Input PIN to complete transaction
                  </p>
                  <div className="flex flex-col gap-2.5 justify-center items-center font-extrabold mb-[7%]">
                    <div className=" flex justify-center items-center ml-[5%] gap-2.5 md:ml-[5%] md:gap-[30px]">
                      {" "}
                      {isVisible ? (
                        <OtpInput
                          value={inputPin}
                          inputType="tel"
                          onChange={(e) => {
                            setInputPin(e);
                            console.log(setInputPin);
                          }}
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
                    <p className="text-[8px] md:text-xs text-[#04177f]">
                      Forgot Pin ?
                    </p>
                  </div>

                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleWaecSubmitPost(e);
                    }}
                    disabled={inputPin.length !== 4}
                    className={`${
                      inputPin.length !== 4 ? "bg-[#0008]" : "bg-[#04177f]"
                    } my-[5%] w-[225px] flex justify-center items-center
                 mx-auto cursor-pointer text-[10px] font-extrabold h-[40px] 
                 text-white rounded-[6px] md:w-[150px] md:rounded-[8px] md:text-base 
                 lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
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
                  } md:w-[45%] w-[90%] md:my-auto md:mt-[.5%] mx-auto 
              overflow-auto md:mb-[18%] lg:mx-auto lg:my-auto`}
                >
                  <div className="flex justify-between items-center mx-[3%] my-[2%] lg:my-[1%]">
                    <img
                      onClick={() => {
                        setTransactSuccessPopUp(false);
                        window.location.reload();
                      }}
                      className=" w-[18px] h-[18px] md:w-[35px] cursor-pointer
                  md:h-[35px] lg:w-[35px] lg:h-[42px]"
                      src={AremxyPlugIcon}
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
                  <h2 className="text-xs my-[4%] font-semibold text-center md:text-[20px] md:my-[3%] lg:text-sm lg:my-[2%]">
                    Purchase Successful
                  </h2>
                  <img
                    className="w-[50px] h-[50px] mx-auto mb-[2%] lg:w-[100px] lg:h-[100px]"
                    src="./Gif/checkMarkGif.gif"
                    alt="/"
                  />

                  <div className="flex flex-col gap-[15px] md:gap-[20px] lg:gap-[30px]  px-[20px]">
                    <p
                      className="text-[8px] font-semibold text-black text-center mb-2 
                md:text-sm lg:text-base"
                    >
                      You have successfully purchased{" "}
                      <span className="text-[#000] font-extrabold text-[10px] md:text-sm lg:text-base">
                        {/* WAEC (₦100){" "} */} {examType}
                      </span>
                      from your {paymentResult} to{" "}
                    </p>

                    <div className="flex items-center justify-between">
                      <h2
                        className="text-[#7C7C7C] text-[10px] leading-[12px] font-medium
                   md:text-xs md:leading-[11.92px] lg:text-base lg:leading-[24px]"
                      >
                        Exam Type
                      </h2>
                      <div className="flex gap-1">
                        <div
                          className="rounded-full w-[12.02px] h-[12.02px] 
                    flex items-center justify-center text-[6px] overflow-hidden md:w-[12.02px] 
                    lg:w-[25px] md:h-[12.02px] lg:h-[25px]"
                        >
                          <img
                            src={WaecImg}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h2
                          className="text-[10px] leading-[12px] font-medium
                     md:text-xs md:leading-[11.92px] lg:text-base lg:leading-[24px]"
                        >
                          WAEC
                        </h2>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <h2
                        className="text-[#7C7C7C] text-[10px] leading-[12px]  font-medium
                  md:text-xs md:leading-[11.92px] lg:text-base lg:leading-[24px]"
                      >
                        Quantity
                      </h2>
                      <div className="flex gap-1">
                        <h2
                          className="text-[10px] leading-[12px] font-medium
                     md:text-xs md:leading-[11.92px] lg:text-base lg:leading-[24px]"
                        >
                          {quantityResult}
                        </h2>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <h2
                        className="text-[#7C7C7C] text-[10px] leading-[12px] font-medium
                   md:text-xs md:leading-[11.92px] lg:text-base lg:leading-[24px]"
                      >
                        Phone Number
                      </h2>
                      <div className="flex gap-1">
                        <h2
                          className="text-[10px] leading-[12px] font-medium
                     md:text-xs md:leading-[11.92px] lg:text-base lg:leading-[24px]"
                        >
                          {educationPinPhone}
                        </h2>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <h2
                        className="text-[#7C7C7C] text-[10px] leading-[12px]  font-medium
                  md:text-xs md:leading-[11.92px] lg:text-base lg:leading-[24px]"
                      >
                        Email
                      </h2>
                      <div className="flex gap-1">
                        <h2
                          className="text-[10px] font-medium leading-[12px]  md:text-xs 
                    md:leading-[11.92px] lg:text-base lg:leading-[24px] "
                        >
                          {educationPinEmail}
                        </h2>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <h2
                        className="text-[#7C7C7C] text-[10px] leading-[12px] font-medium
                   md:text-xs md:leading-[11.92px] lg:text-base lg:leading-[24px]"
                      >
                        Payment Method
                      </h2>
                      <div className="flex gap-1">
                        <h2
                          className="text-[10px] leading-[12px] font-medium
                     md:text-xs md:leading-[11.92px] lg:text-base lg:leading-[24px]"
                        >
                          {paymentResult}
                        </h2>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <h2
                        className="text-[#7C7C7C] text-[10px] leading-[12px] font-medium
                   md:text-xs md:leading-[11.92px] lg:text-base lg:leading-[24px]"
                      >
                        Order Number
                      </h2>
                      <div className="flex gap-1">
                        <h2
                          className="text-[10px] leading-[12px] font-medium md:text-xs
                     md:leading-[11.92px] lg:text-base lg:leading-[24px] "
                        >
                          0124yend44
                        </h2>
                      </div>
                    </div>
                  </div>

                  <div
                    className="bg-[#F2FAFF] mx-5 h-[45px] my-5 flex p-[10.193px] 
              items-center justify-center   
              md:mx-[20px] md:rounded-[15px] lg:rounded-[16.308px] lg:h-[75px]"
                  >
                    <p
                      className="text-[9px] text-[#7C7C7C] text-center  md:text-[11px] 
                lg:text-[14.231px] lg:leading-[20px]"
                    >
                      <span className="md:block">
                        The e-pins purchase has been generated successfully.
                        Please kindly check
                      </span>
                      <span className="md:block">
                        {" "}
                        receipt to confirm the pin / token. You can contact us
                        for any further{" "}
                      </span>{" "}
                      assistance.
                    </p>
                  </div>
                  <div
                    className="flex  justify-center  w-full 
              items-center gap-[15px] md:gap-[20px] mt-[50px]  lg:gap-[20px] 
              lg:my-[5%] md:mt-[20px] mb-[20px]"
                  >
                    <Link
                      to="/WaecEducationPin"
                      onClick={() => {
                        waecTransactionSuccessClose();
                        window.location.reload();
                      }}
                      className={`bg-[#04177f] w-[111px] flex justify-center 
                    items-center  cursor-pointer text-center text-xs font-extrabold h-[40px]
                     text-white rounded-[6px] md:w-[150px] md:rounded-[8px] 
                     md:text-base lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
                    >
                      Done
                    </Link>

                    <Link
                      to="/WaecReceipt"
                      onClick={waecReceipt}
                      className={`bg-[#ffffff] border-[1px] w-[111px] border-[#0003] 
                     flex justify-center items-center text-center  cursor-pointer text-xs 
                     font-extrabold h-[40px] rounded-[6px] md:w-[150px] md:rounded-[8px] 
                     md:text-base lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
                    >
                      Receipt
                    </Link>
                  </div>
                </div>
              </Modal>
            )}

            {/* =========== RECEIPT ============*/}
            {receipt && (
              <WaecReceipt
                Exam="WAEC"
                ExamType={examType}
                ListOfResultCheckers={quantityResult}
                PhoneNumber={educationPinPhone}
                Email={educationPinEmail}
                Amount={educationAmount}
                walletbalance={walletBalance}
                walletName={paymentResult}
              />
            )}

            <div className="py-[30px] lg:py-[60px] mt-10 lg:mb-[80px] mb-[50px] md:mb-[100px]">
              <button
                className={`font-extrabold h-[43px] w-full py-[3.534px] px-[5.301px] md:mb-[0px] rounded-[4.241px] md:w-[95.649px] text-white md:py-[5.868px] md:px-[8.802px] md:h-auto md:text-xs md:leading-[14px] md:rounded-[7.042px]
           lg:text-base lg:leading-[24px] lg:py-[10px] lg:px-[15px] lg:w-[163px] lg:rounded-[12px] ${
             !examType ||
             !quantityResult ||
             !educationPinPhone ||
             !educationPinEmail ||
             !paymentResult ||
             !educationAmount
               ? "bg-[#63616188] cursor-not-allowed"
               : "bg-primary"
           }`}
                onClick={(e) => {
                  waecProceed();
                  e.preventDefault();
                }}
                disabled={
                  !examType ||
                  !quantityResult ||
                  !educationPinPhone ||
                  !educationPinEmail ||
                  !paymentResult ||
                  !educationAmount
                }
              >
                Proceed
              </button>
            </div>
          </form>
        </div>

        {waecFailedTransaction && (
          <Modal>
            <div
              className={`deleteRecipientSuccess  mx-[5%]  ${
                isDarkMode ? "border bg-[#000]" : "bg-[#fff]"
              } ${
                toggleSideBar ? "confirm01" : "confirm"
              } grow  pb-[20px] rounded-tr-[8px] rounded-tl-[8px] relative 
              md:rounded-[11.5px] md:mx-auto md:my-auto md:overflow-auto`}
            >
              <div
                className="w-full flex justify-between border-b-[6px] items-center
               border-primary px-[12px] h-[45px] md:h-[55px] lg:h-[70px]  lg:border-b-[10px] "
              >
                <img
                  className=" w-[18px] h-[18px] md:w-[35px] cursor-pointer
                  md:h-[35px] lg:w-[35px] lg:h-[42px]"
                  src={AremxyPlugIcon}
                  alt=""
                />

                <img
                  src={closeIcon}
                  alt=""
                  onClick={() => {
                    setWaecFailedTransaction(false);
                    handleResetFields();
                    // window.location.reload();
                  }}
                  className="w-[18px] h-[18px]  md:w-[25px] cursor-pointer
               md:h-[25px] lg:w-[35px] lg:h-[35px]"
                />
              </div>

              <div className="flex flex-col justify-between items-center h-[100%]">
                <h2
                  className="lg:text-base lg:leading-[24px] text-center mb-1
                text-xs md:text-[13px] md:leading-[20px] font-semibold mt-[20px] leading-[16px]"
                >
                  Purchase Failed
                </h2>
                <img
                  src={eduFailed}
                  className="w-[150px] md:w-[200px]"
                  alt="transaction failed"
                />

                <p
                  className="text-center text-[#F95252]  lg:text-base lg:leading-[20.8px] font-semibold
                text-xs md:text-[13px] md:leading-[20px] leading-[16px]"
                >
                  An unexpected error has occurred, please try again.
                </p>
                <div
                  className="flex  justify-center  w-full 
              items-center gap-[15px] md:gap-[20px] mt-[50px]  lg:gap-[20px] 
              lg:my-[5%] md:mt-[20px] mb-[20px] "
                >
                  <Link
                    to="/WaecEducationPin"
                    onClick={() => {
                      setWaecFailedTransaction(false);
                      handleResetFields();
                      // window.location.reload();
                    }}
                    className={`bg-[#04177f] w-[111px] flex justify-center 
                    items-center  cursor-pointer text-center text-xs font-extrabold h-[40px]
                     text-white rounded-[6px] md:w-[150px] md:rounded-[8px] 
                     md:text-base lg:w-[163px] lg:h-[38px] lg:my-[2%] `}
                  >
                    Done
                  </Link>
                  <Link
                    to="/WaecFailedReceipt"
                    onClick={() => {
                      setWaecFailedTransaction(false);
                    }}
                    className={`bg-[#ffffff] border-[1px] w-[111px] border-[#0003] 
                 flex justify-center items-center text-center  cursor-pointer text-xs 
                 font-extrabold h-[40px] rounded-[6px] md:w-[150px] md:rounded-[8px] 
                 md:text-base lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
                  >
                    Receipt
                  </Link>
                </div>
              </div>
            </div>
          </Modal>
        )}

        <div
          className=" flex gap-[8.729px]  md:gap-[14.896px] 
     justify-center px-[8.594px] mb-[50px]"
        >
          <p
            className="font-medium text-[11px] text-black 
              leading-[10.4px] lg:text-base lg:leading-[15.6px] md:leading-[12.938px] self-center"
          >
            You need help?
          </p>
          <Link
            to="/contactUs"
            className="font-medium text-white text-[11px] px-[10.594px] rounded-[8px] bg-[#04177F] lg:text-xs lg:leading-[14.4px] py-1.5 md:px-[14.594px]  lg:py-[10px] lg:px-[16px] lg:rounded-[9px]"
          >
            Contact Us
          </Link>
        </div>
      </div>
      {isLoading && (
        <Modal>
          <Loader />
        </Modal>
      )}
    </DashBoardLayout>
  );
}
