import React, { useContext, useState, useRef, useEffect } from "react";
import "../../../App.css";
import styles from "../../../Components/Dashboard/DashboardComponents/TransferComponent/transfer.module.css";
import { ContextProvider } from "../../Context";
import NotVerifiedIcon from "../ProfileImages/NotVerifiedIcon.svg";
import messageIcon from "../ProfileImages/message-question.svg";
import ArrowDown from "../ProfileImages/arrow-down.svg";
import UploadDoc from "../ProfileImages/document-upload.svg";
import Pending from "../ProfileImages/Pending.svg";
import { Modal } from "../../Screens/Modal/Modal";
import frontView from "../ProfileImages/UploadFront.svg";
import closeIcon from "../ProfileImages/Cancel.svg";
import BackView from "../ProfileImages/UploadBackView.svg";
import PopUpGreen from "../ProfileImages/PopUpGreen.svg";
import PopUpGreenTab from "../ProfileImages/PopUpGreenTab.svg";
import PopUpGreenDeskTop from "../ProfileImages/PopUpGreenDeskTop.svg";
import Success from "../ProfileImages/success.gif";
import QueryId from "../ProfileImages/IdCustomerQuery.svg";
import axios from "axios";
import { Loader } from "../../Loader/Loader";
import { GetLocalStorage } from "../../LocalStorage/LocalStorage";
import idSuccess from "../ProfileImages/user-tick.svg";
import countryImage from "../../EducationPins/imagesEducation/Nigeriaflag.svg";
import { InternalLoginSession } from "../../ApiCollection.jsx/ApiBuck";

export default function IdVerification(Data) {
  const { verificationOpen } = useContext(ContextProvider);
  const dateInputRef = useRef(null);

  const {
    idVerificationOpen,
    verifyImage,
    setVerifyImage,
    idStatus,
    isDarkMode,
    setIdStatus,
    verificationResponse,
    verificationReason
  } = useContext(ContextProvider);
  const { dropDownGender, setDropDownGender, idButtonState, setIdButtonState } =
    useContext(ContextProvider);
  const [idDropDown, setIdDropDown] = useState(false);
  const { idAddress, setIdAddress } = useContext(ContextProvider);
  const [sessionModal, setSessionModal] = useState(false);
  // const {idState, setIdState} = useContext(ContextProvider);
  const { 
    // idCountry, 
    setIdCountry } = useContext(ContextProvider);
  // const {idLGA, setIdLGA} = useContext(ContextProvider);
  const { idNumber, setIdNumber } = useContext(ContextProvider);
  const { idPostalCode, setIdPostalCode } = useContext(ContextProvider);
  const [errorSubmit, setErrorSubmit] = useState(false);
  const [idFrontView, setIdFrontView] = useState(false);
  const [idBackView, setIdBackView] = useState(false);
  const [idPopVerified, setIdPopVerified] = useState(false);
  const [idCustomerQuery, setIdCustomerQuery] = useState(false);
  const {idDateOfBirth, setIdDateOfBirth}= useContext(ContextProvider);
  const [loading, setLoading] = useState(false);
  const { toggleSideBar, customerDetail } = useContext(ContextProvider);
  const { full_name } = customerDetail;

  // Genders
  const genderInfo = ["Male", "Female", "Others.."];
  const {genderResult, setGenderResult} = useContext(ContextProvider);
  const chooseGender = () => {
    setDropDownGender(!dropDownGender);
    document.querySelector(".genderDrop").classList.toggle("DropIt");
  };

  // ID
  const idTypes = [
    { idType: "National ID", Status: "Active", id: 1 },
    { idType: "International Passport", Status: "Inactive", id: 2 },
    { idType: "Permanent Voters Card", Status: "Inactive", id: 3 },
    { idType: "Driver’s License", Status: "Inactive", id: 4 },
  ];

  const [idResult, setIdResult] = useState("");
  const chooseId = () => {
    setIdDropDown(!idDropDown);
    document.querySelector(".idDrop").classList.toggle("DropIt");
  };
  //  CUSTOM VALIDITY FOR HOUSE ADDRESS
  const validAddress = (e) => {
    const addAddress = e.target.value;
    e.target.setCustomValidity(
      addAddress ? "" : "Your Address must be entered"
    );
  };
  //  CUSTOM VALIDITY FOR COUNTRY
  
  
  const validId = (e) => {
    const addId = e.target.value;
    e.target.setCustomValidity(
      addId ? "" : "Your ID must be inputed and must be 11 digits"
    );
  };
  
  const IdFunctionState = async (
    url,
    data,
    buttonStateSuccess,
    ErrorMessage,
    PendingImageFxn,
    PendingText,
    verifyIdImage,
    statusId,
    verifyPopId
  ) => {
     if(!navigator.onLine) return alert("Check your internet connection");
    if (idButtonState === "Verify" && navigator.onLine) {
      url = "https://aremxyplug.onrender.com/api/v1/verify";
      buttonStateSuccess = "Verified";
      ErrorMessage = "NIN Name Mismatch or Network Failure";
      PendingImageFxn = () => setVerifyImage(Pending);
      PendingText = () => setIdStatus("Pending");
      verifyIdImage = () => setVerifyImage(idSuccess);
      statusId = () => setIdStatus("Verified");
      verifyPopId = () => setIdPopVerified(true);
      data = {
        nin: idNumber.toString(),
        dob: idDateOfBirth,
        address:idAddress,
        gender:genderResult,
      };
    
  
    CheckIdForm(
      url,
      data,
      buttonStateSuccess,
      ErrorMessage,
      PendingImageFxn,
      PendingText,
      verifyIdImage,
      statusId,
      verifyPopId
    );
    }
  };


  //The main function to verify the Id Number and create the virtual account
  const CheckIdForm = async (
    url,
    data,
    buttonStateSuccess,
    ErrorMessage,
    PendingImageFxn,
    PendingText,
    verifyIdImage,
    statusId,
    verifyPopId
  ) => {
   
    // const AccCreated = localStorage.getItem("80pcs")
    
    if (
      idNumber &&
       idResult &&
      idDateOfBirth &&
      genderResult &&
      idAddress 
      // idCountry
    ) {
     
    
     // console.log(data)
      try {
         setLoading(true);
          setErrorSubmit(false);
          PendingImageFxn();
          PendingText();
        
        const response = await axios.post(url, data, {
          headers: {
            "Content-Type": "application/json",
           
          },withCredentials : true
        });
        if (response.status === 201 || response.status === 200) {
          setIdNumber(idNumber);
          verifyIdImage();
          statusId();
          verifyPopId();
          setIdButtonState(buttonStateSuccess);
           localStorage.setItem("Zxfer", "true");// Bvn Verification
            localStorage.setItem("Qhfde", "true"); // Id Verification
        }
      } catch (error) {
        if(error && (error.response === undefined)){
          alert("Your network is quite unstable.");
        } else if (error.response.status === 400) {
          alert(ErrorMessage);
          console.log(`ERROR : ${error}`);
         setVerifyImage(NotVerifiedIcon);
          setIdStatus("Not Verified");
         // alert("Please check your ID Number and try again.")
        } else if (error.response.status === 500) {
          alert("SERVER_ERROR, Try again some other time.");
          setIdStatus("Not Verified");
          setVerifyImage(NotVerifiedIcon);
        }else if( error.response.status === 401){
          setSessionModal(true)
        }else {
          alert("Check your internet connection.")
        }
      } finally {
        setLoading(false);
        //alert("success")
      }
    } else {
      setErrorSubmit(true);
    }
  };
  // UseEffect to retain the current data object of getLocalStorage data()
 
  const VerifyRef = useRef();
  Data = GetLocalStorage();
  useEffect(() => {
    VerifyRef.current = Data;
   if(verificationResponse?.data?.data){
    setIdNumber(verificationResponse?.data?.data?.nin)
  }
    // eslint-disable-next-line
  }, [Data]);
 // console.log(Data);

  

  return (
    <div className="flex flex-col ">
      {idVerificationOpen && (
        <div
          className={`flex flex-col  ${verificationOpen ? "block" : "hidden"}
           `}
        >
          <div className="flex md:gap-[25px] gap-[11px] lg:pt-[50px]  pt-[35px] lg:mb-[50px] mb-[35px] ">
            {/* ICON == NOT VERIFIED */}
            <div className=" flex gap-[5px] py-[23px] pr-[12px] pl-[12px] md:py-[25px] md:pr-[41px] md:pl-[16px] bg-white shadow-[0px_2.34722px_5.86806px_0px_rgba(0,0,0,0.25)] md:shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)]">
              <img
                src={
                  verifyImage ===  NotVerifiedIcon
                   && (Data.ConfirmId === "true" || Data.ConfirmBvn === "true") ? idSuccess 
                   :   verifyImage ===  NotVerifiedIcon
                   && (Data.ConfirmId === "false" && Data.ConfirmBvn === "false") ? NotVerifiedIcon :   
                   verifyImage ===  idSuccess
                   || (Data.ConfirmId === "true" || Data.ConfirmBvn === "true") ? idSuccess : NotVerifiedIcon   
                }
                alt=""
                className={`h-[24px] w-[24px] md:h-[44px] md:w-[44px] lg:h-[62px] lg:w-[62px]`}
              />
              <div
                className={`flex flex-col gap-[4.694px] md:gap-[8px] justify-center ${
                  isDarkMode ? "text-stone-800" : ""
                }`}
              >
                <h2 className="font-medium lg:text-[12px] lg:leading-[15.6px] text-[9.042px] leading-[12.45px]">
                  ID Status
                </h2>
                <h2 className="font-medium lg:text-[12px] lg:leading-[15.6px] text-[8.042px] leading-[12.45px]">
                 { idStatus ===  "Not Verified"
                   && (Data.ConfirmId === "true" || Data.ConfirmBvn === "true") ? "Verified" 
                   :   idStatus ===  "Not Verified"
                   && (Data.ConfirmId === "false" && Data.ConfirmBvn === "false") ? "Not Verified" :   
                   idStatus === "Verified"
                   || (Data.ConfirmId === "true" || Data.ConfirmBvn === "true") ? "Verified":  "Not Verified" }
                </h2>
              </div>
            </div>
            {/*  */}
            <div className="flex md:gap-[14px] gap-[11px] items-center">
              <h2
                className={`font-medium text-[#7E7E7E] text-[11px] leading-[14.4px] lg:text-[16px] lg:leading-[20.8px] ${
                  isDarkMode ? "text-slate-50" : ""
                }`}
              >
                Why Account Verification with my ID Document?
              </h2>
              <img
                onClick={() => {
                  setIdCustomerQuery(true);
                }}
                src={messageIcon}
                alt=""
                className="h-[14.083px] w-[14.083px] lg:h-[24px] lg:w-[24px] cursor-pointer"
              />
            </div>
          </div>
          {/* Forms */}

          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            action=""
          >
            {/* Container for all Forms */}
            <div className="flex flex-col lg:gap-[25px] gap-[35px] w-full mb-[50px]">
            
              <div className="flex flex-col md:flex-row lg:gap-[22px] gap-[35px] w-[100%]">
                  {/*  Country / Fullname */}
 {/* COUNTRY */}
                 <div className="flex flex-col md:w-[50%] w-[100%] md:gap-[10px] gap-2.5">
                                 <h2
                                   className={`font-semibold text-[#7E7E7E] text-[13px] leading-[10.4px] lg:text-[16px] lg:leading-[20.8px] ${
                                     isDarkMode ? "text-slate-50" : ""
                                   }`}
                                 >
                                   Country
                                 </h2>
                                 <div  className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-[20px] md:p-0 text-[13.2px] 
                         sm:p-3 sm:text-lg relative  flex gap-[5px] pt-[8.803px]
                          pb-[7.794px] pr-[13px] pl-[10.876px] font-[400] 
                          leading-[10.4px] md:text-[11px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[40.927px] md:h-[35px] lg:h-[50px] border-[#9C9C9C] px-[11px] md:px-[6px] lg:px-[10px] text-[#7C7C7C] self-center  ${
      isDarkMode
        ? "bg-black text-white border border-white"
        : "hover:bg-[#EDEAEA]"
    }`}>
                                      <img className=" md:h-[20.27px]  h-[14.27px]"
                                 src={countryImage} alt="Country flag" />
                                 <p className={`text-[12px] leading-[18px] 
                                  lg:text-[16px] lg:leading-[20.8px] ${
                                     isDarkMode ? " text-slate-50 " : "text-black"
                                   }`}>Nigeria</p>
                                
                               </div>
                               </div>
              {/* Country ends here  */}
                {/* Full Name */}
                <div className="flex flex-col md:w-[50%] w-full md:gap-[10px] gap-2.5">
                  <h2
                    className={`font-semibold text-[#7E7E7E] 
                      text-[13px] leading-[10.4px] lg:text-[16px] lg:leading-[20.8px] ${
                      isDarkMode ? "text-slate-50" : ""
                    }`}
                  >
                    Full Name
                  </h2>
                  <p
                    className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-[20px] md:p-0 text-[13.2px] 
                         sm:p-3 sm:text-lg relative  flex justify-between pt-[8.803px]
                          pb-[7.794px] pr-[13px] pl-[10.876px] font-[400] 
                          leading-[10.4px] md:text-[11px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px]
     md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  items-center cursor-pointer 
     outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[40.927px] md:h-[35px] lg:h-[50px] border-[#9C9C9C] px-[11px] md:px-[6px] lg:px-[10px] text-[#000] self-center  ${
      isDarkMode
        ? "bg-black text-white border border-white"
        : "hover:bg-[#EDEAEA]"
    }`}>
                  {full_name ? full_name : Data.UserFullName }
                  </p>
                </div>
               


              </div>
              {/* Gender and date of birth*/}
              <div className="flex flex-col md:flex-row lg:gap-[22px] gap-[35px] w-[100%]">
                {/* HOUSE ADDRESS */}
                              <div className="relative flex flex-col md:w-[50%]
                               w-[100%] md:gap-[10px] gap-2.5">
                  <h2
                    className={`font-semibold text-[#7E7E7E] text-[13px] leading-[10.4px] lg:text-[16px] lg:leading-[20.8px] ${
                      isDarkMode ? "text-slate-50" : ""
                    }`}
                  >
                    Gender
                  </h2>
                  <div
                    onClick={()=> {
                      if((Data.ConfirmBvn === "false" && Data.ConfirmId === "false") || (!Data.ConfirmBvn && !Data.ConfirmId)){
                      chooseGender();
                      } else{
                        return null;
                      }
                    }}
                    className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-[20px] md:p-0 text-[13.2px] 
                         sm:p-3 sm:text-lg relative  flex justify-between pt-[8.803px]
                          pb-[7.794px] pr-[13px] pl-[10.876px] font-[400] 
                          leading-[10.4px] md:text-[11px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px]
     md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px] 
      items-center cursor-pointer outline-0 border-[0.24px] 
      lg:border-[0.4px] w-full h-[40.927px] md:h-[35px] lg:h-[50px]
       border-[#9C9C9C] px-[11px] md:px-[6px] lg:px-[10px] text-[#000] self-center  ${
      isDarkMode
        ? "bg-black text-white border border-white"
        : "hover:bg-[#EDEAEA]"
    }`}
                  >
                    <h2
                      className={`text-[#000] font-[400] text-[12px] leading-[18px] lg:text-[16px] lg:leading-[20.8px] ${
                        isDarkMode ? "text-slate-50" : ""
                    }`}
                    >
                      {((Data?.ConfirmId === "false" || Data?.ConfirmBvn === "false") || (!Data?.ConfirmId  || !Data?.ConfirmBvn ))
                       && verificationResponse?.data?.data?.gender === undefined ?
                        genderResult : verificationResponse?.data?.data?.gender}
                    </h2>
                    <img
                      src={ArrowDown}
                      alt=""
                      className="genderDrop lg:w-[24px] lg:h-[24px] w-[14.083px] h-[14.083px]"
                    />
                  </div>
                  {dropDownGender && (
                    <div
                      className={`absolute lg:top-[90px] md:top-[60px] top-[70px] 
          z-[5] flex flex-col w-[100%]
            ${
                    isDarkMode
                      ? "bg-black border-white rounded-[7px] text-white"
                      : "text-[#7C7C7C] bg-white rounded-br-[7px] rounded-bl-[7px] lg:rounded-br-[14px] lg:rounded-bl-[14px]"
                  }
                  ${
                    toggleSideBar
                      ? "lg:w-[31.5%] lg:top-[100.5%]"
                      : "lg:w-[38.5%] lg:top-[105.3%]"
                  }  shadow-xl border w-full lg:w-full  flex flex-col divide-y absolute top-20`}>

                      {genderInfo.map((info) => {
                        return (
                          <h2
                            onClick={() => {
                              setGenderResult(info);
                              setDropDownGender(false);
                              document
                                .querySelector(".genderDrop")
                                .classList.remove("DropIt");
                            }}
                            className = {`py-[18px] md:py-[14px]  font-normal px-2 flex
                         items-center gap-[5px] text-[12px] md:text-[14px] 
                         lg:text-[16px] shadow-[0px_3.30667px_8.26667px_0px_rgba(0,0,0,0.25)]
                          transition-all duration-300 hover:bg-slate-50 ${
                              isDarkMode
                                ? "bg-black text-white border-b border-white hover:bg-slate-800"
                                : "bg-white"
                            }`}
                          >
                            {info}
                          </h2>
                        );
                      })}
                    </div>
                  )}
                </div>
                {/* Date of Birth*/}
                <div className="flex flex-col md:w-[50%] w-[100%] md:gap-[10px] gap-2.5">
                  <h2
                    className={`font-semibold text-[#7E7E7E] text-[13px] leading-[10.4px] lg:text-[16px] lg:leading-[20.8px] ${
                      isDarkMode ? "text-slate-50" : ""
                    }`}
                  >
                    D.O.B
                  </h2>
                  <div className={`w-[100%] 
                      ${
                      isDarkMode ? " border-white " : "border-[#9C9C9C]"
                    }`}
                    onClick={() => {
                      const input = dateInputRef.current;
                      if (input) {
                        input.showPicker ? input.showPicker() : input.click();
                      }
                    }}>
                  <input

                    value={((Data?.ConfirmId === "false" || Data?.ConfirmBvn === "false") || (!Data?.ConfirmId && !Data?.ConfirmBvn ))
                       && verificationResponse?.data?.data?.dob === undefined ? idDateOfBirth : verificationResponse?.data?.data?.dob}
                    ref={dateInputRef}
                    onChange={(e) => {
                      // const dobValue = dateInputRef.current ? dateInputRef.current.value : "";
                      // setIdDateOfBirth(dobValue);
                      if((Data?.ConfirmId === "false" || Data?.ConfirmBvn === "false") || (!Data?.ConfirmId && !Data?.ConfirmBvn)){
                      setIdDateOfBirth(e.target.value);
                      }
                    }}
                   className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-[20px] md:p-0 text-[13.2px] 
                         sm:p-3 sm:text-lg relative  flex justify-between pt-[8.803px]
                          pb-[7.794px] pr-[13px] pl-[10.876px] font-[400] 
                          leading-[10.4px] md:text-[11px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px] 
    md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  items-center cursor-pointer
     outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[40.927px]
      md:h-[35px] lg:h-[50px] border-[#9C9C9C] px-[11px] 
      md:px-[6px] lg:px-[10px] text-[#000] self-center  ${
      isDarkMode
        ? "bg-black text-white border border-white"
        : "hover:bg-[#EDEAEA]"
    }`}
                    type="date"
                    id="dob"
                    name="dob"
                    readOnly={Data.ConfirmId === "true" || Data.ConfirmBvn === "true"}
                    disabled={Data.ConfirmId === "true" || Data.ConfirmBvn === "true"}
                  />
                  </div>
                </div>
    
              </div>
             

  <div className="flex flex-col md:flex-row lg:gap-[22px] gap-[35px] w-[100%]">
    {/*House Address and postal code  */}
  <div className="flex flex-col md:w-[50%] w-[100%] md:gap-[10px] gap-2.5">
                  <h2
                    className={`font-semibold text-[#7E7E7E] text-[13px] leading-[10.4px] lg:text-[16px] lg:leading-[20.8px] ${
                      isDarkMode ? "text-white" : ""
                    }`}
                  >
                    House Address
                  </h2>
                  <input
                    value={((Data?.ConfirmId === "false" || Data?.ConfirmBvn === "false") || (!Data?.ConfirmId && !Data?.ConfirmBvn))
                       && verificationResponse?.data?.data?.address === undefined ? idAddress : verificationResponse?.data?.data?.address}
                    onChange={(e) => {
                      if(((Data.ConfirmId === "false" || Data.ConfirmBvn === "false") || (!Data?.ConfirmId && !Data?.ConfirmBvn)) ){
                      setIdAddress(e.target.value);
                      }
                    }}
                   className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-[20px] md:p-0 text-[13.2px] 
                         sm:p-3 sm:text-lg relative  flex justify-between pt-[8.803px]
                          pb-[7.794px] pr-[13px] pl-[10.876px] font-[400] 
                          leading-[10.4px] md:text-[11px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px] 
    md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  items-center cursor-pointer
     outline-0 border-[0.24px] lg:border-[0.4px] w-full 
     h-[40.927px] md:h-[35px] lg:h-[50px] border-[#9C9C9C]
     ${ verificationResponse?.data?.data?.address === undefined && 
      ((Data?.ConfirmId === "false" || Data?.ConfirmBvn === "false" ) || (!Data?.ConfirmId && !Data?.ConfirmBvn)) 
      ? "" : "uppercase"}
      px-[11px] md:px-[6px] lg:px-[10px] text-[#000] self-center  ${
      isDarkMode
        ? "bg-black text-white border border-white"
        : "hover:bg-[#EDEAEA]"
    }`}
                    placeholder=""
                    type="text"
                    onInvalid={validAddress}
                   readOnly={Data.ConfirmId === "true" || Data.ConfirmBvn === "true"}
                    required
                  />
                </div>

              {/* Postal code starts here */}
             <div className="flex flex-col md:w-[49%] w-[100%] md:gap-[10px] gap-2.5">
                <h2
                  className={`font-semibold text-[#7E7E7E] text-[13px] leading-[10.4px] lg:text-[16px] lg:leading-[20.8px] ${
                    isDarkMode ? "text-slate-50" : ""
                  }`}
                >
                  Postal Code(optional)
                </h2>
                <input
                  onInput={(e) => {
                    const numbersOnly = e.target.value.replace(/\D/g, "");
                    e.target.value = numbersOnly;
                  }}
                  value={((Data?.ConfirmId === "false" || Data?.ConfirmBvn === "false") || (!Data?.ConfirmId && !Data?.ConfirmBvn)) 
                       && verificationResponse?.data?.data?.postalcode === undefined ? idPostalCode : (Data?.ConfirmId === "true" || Data?.ConfirmBvn === "true") && 
                       verificationResponse?.data?.data?.postalcode === undefined && (Data?.ConfirmId === "true" || Data?.ConfirmBvn === "true") ? "NO POSTAL CODE" : verificationResponse?.data?.data?.postalcode}
                  onChange={(e) => {
                    setIdPostalCode(e.target.value);
                  }}
                  readOnly={Data.ConfirmId === "true" || Data.ConfirmBvn === "true"}
                  className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-[20px] md:p-0 text-[13.2px] 
                         sm:p-3 sm:text-lg relative  flex justify-between pt-[8.803px]
                          pb-[7.794px] pr-[13px] pl-[10.876px] font-[400] 
                          leading-[10.4px] md:text-[11px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] 
    md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] 
    lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  items-center cursor-pointer 
    outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[40.927px]
     md:h-[35px] lg:h-[50px] border-[#9C9C9C] px-[11px] md:px-[6px]
      lg:px-[10px] text-[#000] self-center  ${
      isDarkMode
        ? "bg-black text-white border border-white"
        : "hover:bg-[#EDEAEA]"
    }`}
                  placeholder=""
                  type="text"
                  inputMode="numeric"
                />
              </div>
              </div>
              {/* POS */}

             

    {/* ID TYPE & ID NUMBER */}
    <div className='flex flex-col md:flex-row lg:gap-[22px] gap-[35px] w-[100%]'>
        {/* ID TYPE */}
        <div className='relative flex flex-col md:w-[50%] w-[100%] md:gap-[10px] gap-[5.868px]'>
   <h2 className='font-[600] text-[#7E7E7E] text-[13px] leading-[10.4px] 
   lg:text-[16px] lg:leading-[20.8px]'>
     ID Type
    </h2>
    <div onClick={()=> {

      if((Data.ConfirmBvn === "false" && Data.ConfirmId === "false") || (!Data.ConfirmBvn && !Data.ConfirmId)){
       chooseId();

    }else{
     return null;
    }
    }}
    className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-[20px] md:p-0 text-[13.2px] 
                         sm:p-3 sm:text-lg relative  flex justify-between pt-[8.803px]
                          pb-[7.794px] pr-[13px] pl-[10.876px] font-[400] 
                          leading-[10.4px] md:text-[11px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px]
     md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px] 
      items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] 
      w-full h-[40.927px] md:h-[35px] lg:h-[50px] border-[#9C9C9C]
       px-[11px] md:px-[6px] lg:px-[10px] text-[#000] self-center  ${
      isDarkMode
        ? "bg-black text-white border border-white"
        : "hover:bg-[#EDEAEA]"
    }`}>
      <h2 className={`text-[#000] font-[400]  leading-[10.4px]
      lg:text-[16px] lg:leading-[20.8px] ${isDarkMode ? "text-white" : "text-black"}`}>
        {idResult || (Data.ConfirmId ==="true"   ? "National ID" : idResult)}
      </h2>
      <img src={ArrowDown} alt=""
      className='idDrop lg:w-[24px] lg:h-[24px] w-[14.083px] h-[14.083px]'/>
      </div>
      {idDropDown  && (
        <div 
        className={`absolute lg:top-[90px] md:top-[60px] top-[70px] 
          z-[5] flex flex-col w-[100%]
            ${
                    isDarkMode
                      ? "bg-black border-white rounded-[7px] text-white"
                      : "text-[#7C7C7C] bg-white rounded-br-[7px] rounded-bl-[7px] lg:rounded-br-[14px] lg:rounded-bl-[14px]"
                  }
                  ${
                    toggleSideBar
                      ? "lg:w-[31.5%] lg:top-[100.5%]"
                      : "lg:w-[38.5%] lg:top-[105.3%]"
                  }  shadow-xl border w-full lg:w-full  flex flex-col 
                  divide-y absolute top-20`}>

      {idTypes.map(info => {
        return (
          <div 
           key={info.id} onClick={() => {
           setIdResult(()=> {
             if(((Data.ConfirmBvn === "false" && Data.ConfirmId === "false") 
               || (!Data.ConfirmId && !Data.ConfirmBvn ))
              &&  info.id === 1 ){
               // alert("One");
             return  "National ID";
              }else if(((Data.ConfirmId === "false" && Data.ConfirmBvn === "false") || (!Data.ConfirmId && !Data.ConfirmBvn))
                 && info.id !==1 && idResult === ""){
              return "";
              }
                 else if((Data.ConfirmId === "true"  ||  Data.ConfirmBvn === "true") && idNumber.length < 1){
             return "";
              } else if((Data.ConfirmId === "true"  ||  Data.ConfirmBvn === "true") && idNumber.length > 1){
             return "National ID";
              } else {
               return "National ID";
                }
               })
               setIdDropDown(false);
              // setIdDropDown(()=>{
              //   if(info.idType ==="National ID" && info.id === 1){
              //     return false;
              //   }else{
              //     return true;
              //   }
              // });
                document.querySelector('.idDrop').classList.remove('DropIt');
      }}
          className={`py-[18px] md:py-[14px]  font-normal px-2 flex
                         items-center gap-[5px] text-[12px] md:text-[14px] 
                         lg:text-[16px] shadow-[0px_3.30667px_8.26667px_0px_rgba(0,0,0,0.25)]
                          transition-all duration-300 hover:bg-slate-50
                       ${
                         isDarkMode
                           ? "text-white hover:bg-slate-800 bg-black"
                           : "text-[#7E7E7E]"
                       } ${
                        info.idType === "National ID"
                          ? "cursor-pointer"
                          : "cursor-not-allowed opacity-50"
                      }`}>
            <h2 className={`font-[500] text-[#7C7C7C] text-[12px] leading-[17.4px]
            lg:text-[16px] lg:leading-[20.8px] ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>{info.idType}</h2>
            <p
             className={`font-[500] text-[#7C7C7C] text-[10px] leading-[14.4px]
            lg:text-[16px] lg:leading-[20.8px] ${info.Status === "Inactive" ? "text-red-500": "text-green-500"}
           `}>
     {info.Status}
            </p>
           </div>
         
         )
       })}
         </div>
      )}
      </div>
  
    {/*  */}
    <div className="flex flex-col md:w-[50%] w-[100%] md:gap-[10px] gap-[5.868px]">
   <h2 className="font-[600] text-[#7E7E7E] text-[13px] leading-[10.4px] 
   lg:text-[16px] lg:leading-[20.8px]">
     ID Number
    </h2>
    <input readOnly={ (Data.ConfirmId === "true" || Data.ConfirmBvn === "true")}
     onInput={( e => {
      const numbersOnly = e.target.value.replace(/\D/g, '');
      e.target.value = numbersOnly;
    })}
    value={  (verificationResponse?.data?.data?.nin !== undefined && Data.ConfirmId === "true")
                        ? `${idNumber?.slice(0, 4)}*******`
                        : verificationResponse?.data?.data?.nin === undefined  && (Data?.ConfirmId === "true" || Data?.ConfirmBvn === "true")
                         ? "NO ID" :  idNumber}
    
    onChange={(e) => {
      if((Data.ConfirmBvn === "false" && Data.ConfirmId === "false") || (!Data.ConfirmBvn && !Data.ConfirmId)){
      setIdNumber(e.target.value);
      }
    }}
     className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-[20px] md:p-0 text-[13.2px] 
    sm:p-3 sm:text-lg relative  flex justify-between pt-[8.803px]
     pb-[7.794px] pr-[13px] pl-[10.876px] font-[400] 
      leading-[10.4px] md:text-[11px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px]
     md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]
       items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px]
        w-full h-[40.927px] md:h-[35px] lg:h-[50px] border-[#9C9C9C] 
        px-[11px] md:px-[6px] lg:px-[10px] text-[#000] self-center  ${
      isDarkMode
        ? "bg-black text-white border border-white"
        : "hover:bg-[#EDEAEA]"
    }`}
    placeholder=''
    type="text" inputMode='numeric' maxLength={11} onInvalid={validId}  required/>
    {(verificationReason?.length > 1 ) && (
  <p  className="text-[12px] font-[600] leading-[12px] text-red-500
  capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
  {verificationReason}
  </p>

    )}
    </div>
      </div>
      {/* UPLOAD IMAGES OFOR ID VERIFICATION */}
      <div className='flex lg:gap-[40px] md:w-[60%] w-[100%] md:justify-start justify-between gap-[24px]'>
        {/* FRONT VIEW */}
    <div
  //    onClick={()=> {
  //    setIdFrontView(true);
  //  }} 
   className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-[20px]  md:p-0 text-[12px]  sm:p-3 sm:text-lg flex py-[8.771px] pr-[20.785px] pl-[20px]
  lg:py-[14px] lg:pr-[28px] lg:pl-[16px] gap-[8.21px] md:gap-[14px]
border-[0.4px]  border-[#7E7E7E] opacity-50 cursor-pointer ${isDarkMode ? "bg-black  border-white" : "bg-white border-[#7E7E7E]"}`}>
   <h2 className={`font-[600] text-gray-400 text-[11px] leading-[14.4px] 
   lg:text-[16px] lg:leading-[20.8px] ${isDarkMode ? "text-white": "text-gray-400"}`}>
  Upload Front View
   </h2>
   
   <img src={UploadDoc} alt="" 
   className='lg:h-[24px] lg:w-[24px] h-[12px] w-[12px]'/>
   </div>
    
{/* UPLOAD BACK VIEW */}
<div 
// onClick={() => {
//   if(idResult !== "National ID"){
//     setIdBackView(true);
//   }
//    }}
 className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-[20px]  md:p-0 text-[12px]  sm:p-3 sm:text-lg flex py-[8.771px] pr-[20.785px] pl-[20px]
  lg:py-[14px] lg:pr-[28px] lg:pl-[16px] gap-[8.21px] md:gap-[14px]
border-[0.4px]  border-[#7E7E7E] opacity-50 cursor-pointer ${isDarkMode ? "bg-black  border-white" : "bg-white border-[#7E7E7E]"}`}>
   <h2 className={`font-[600] text-gray-400 text-[11px] leading-[14.4px] 
   lg:text-[16px] lg:leading-[20.8px] ${isDarkMode ? "text-white": "text-gray-400"}`}>
   Upload Back View
   </h2>
   <img src={UploadDoc} alt="" 
   className='lg:h-[24px] lg:w-[24px] h-[12px] w-[12px]'/>
  
    </div>

      </div>

        </div>
        {/* SUBMIT BUTTON */}
        <div className='flex flex-col md:gap-[15px] gap-[10px] justify-start'>
        <button 
        disabled={ Data.ConfirmId === "true" || Data.ConfirmBvn === "true"}
        onClick={() => {
          IdFunctionState()
        }}
         className={`lg:py-[13px] md:py-[5.868px] md:rounded-[7.042px] py-[16.531px] rounded-[4.241px] w-[100%] md:w-[150px] lg:w-[163px] lg:rounded-[12px] bg-[#04177F]
         font-[600] text-[13px] leading-[18px] lg:text-[16px] text-center text-white lg:leading-[24px

         ${(Data.ConfirmId === "true" || Data.ConfirmBvn=== "true") ?"bg-slate-400" : "bg-[#04177F]"}`}>
       {( Data.ConfirmId === "true"  || Data.ConfirmBvn=== "true" ? "Verified" : "Verify" )}

        </button>
       { errorSubmit  && (
        <h2 className={`font-[500] lg:text-[14px] lg:leading-[18px] md:text-[14px] md:leading-[18px] 
        text-[13px] leading-[16px] text-red-600` }>
          Fill the forms complete to proceed
       </h2>
       )}
       
       
        </div>
        {idCustomerQuery && (
          <Modal>
             <div className='h-[100%] flex flex-col w-[100%] items-center justify-center  pb-[30px]'>
            <div className={`idVerify  flex  flex-col  shadow-[0px_0px_8.3274px_0px_rgba(0 0 0,0.25)] rounded-[8px] 
             shadow-[0px_0px_8.3274px_0px_rgba(0 0 0,0.25)] md:rounded-[11.736px]  lg:rounded-[20px]   md:w-[55%]
            md:shadow-[0px_0px_11.73611px_0px_rgba(0,0,0,0.25) lg:shadow-[0px_0px_20px_0px_rgba(0,0,0,0.25)] 
            justify-center lg:justify-normal items-center  px-[18px] md:px-[30px] md:h-[550px]   
            h-[430px]  md:mx-[0px] mx-[19px]  gap-[18px] md:gap-[40px] lg:gap-[70px] 
            overflow-y-scroll md:py-[30px] lg:pt-[30px]  md:pt-[180px] pt-[210px]
             ${
              isDarkMode ? "bg-black border border-white" : "bg-white"
            }`}>
           
          <div className='flex flex-col lg:gap-[25px] gap-[10px] md:gap-[15px] items-center'>
       <p className='font-[400] text-[13px] text-center leading-[16.206px] 
   lg:text-[16px] lg:leading-[20.8px]'>
    ID Verification confirms your identity using a Government-issued ID document. 
    </p>
    <p className='font-[400] text-[13px] text-center leading-[16.206px] 
   lg:text-[16px] lg:leading-[20.8px]'>
This verification protects you and us from fraudulent activities.
 Your information remains confidential and is used solely for verification.
 </p>
 <img src={QueryId} alt="" 
          className='lg:w-[294px] lg:h-[234px] md:w-[172px]
           md:h-[135.893px] w-[172.521px] h-[135.893px]' />
          </div>
          {/*  */}
          
          <div className='flex flex-col gap-[20px] lg:gap-[40px] md:gap-[23.47px] mb-[50px] mt-[18px]'>
            {/* Header */}
   <h2 className='font-[700] lg:text-[16px] lg:leading-[19.2px] text-[13px] leading-[16.206px] 
   text-center'>
   Why do we need your ID document for account verification?
   </h2>
   {/* Paragraph */}
   <div className='flex flex-col gap-[10px]  md:gap-[20px]'>
  <p className='font-[500] lg:text-[16px] lg:leading-[19.2px] 
  text-left  text-[13px] leading-[16.206px]'>
  <span className='font-[700]'>1. Security: </span>Your safety is our priority. Verifying your ID helps us
   protect your account from unauthorized access and potential fraud.
</p>
<p className='font-[500] lg:text-[16px] lg:leading-[19.2px]
 text-left   text-[13px] leading-[16.206px]'>
   <span className='font-[700]'>2. Trust:</span> We want to build a trusted relationship with you. 
Confirming your identity ensures that the person accessing the account is indeed you.
</p>
   </div>

          </div>
          <div className='flex w-[100%] md:justify-center'>
   <button onClick={() => {
    setIdCustomerQuery(false);
   }} 
   className='font-[600] bg-[#04177F] w-[100%] md:w-[163px] md:py-[5.868px] lg:py-[13px]
    text-white lg:rounded-[12px] py-[16.531px] md:mb-[40px] mb-[20px]
   lg:text-[16px] lg:leading-[24px] md:rounded-[7.042px] rounded-[4.61px]'>
    Okay
   </button>
          </div>
          </div>
 </div>
          
          
            
          </Modal>
        )}
    {idFrontView && (
<Modal>
  <div className={`flex flex-col rounded-[8px] w-[100%]   h-[257.07px]  md:h-[350px] 
  lg:h-[404px] bg-white lg:w-[45%] md:w-[60%] lg:rounded-[12px] mx-[19px] 
  shadow-[0px_0px_11.73611px_0px_rgba(0,0,0,0.25)] md:mx-[0px]
   lg:shadow-[0px_0px_20px_0_px_rgba(0 0,0,0.25)] ${
     isDarkMode ? "bg-black border border-white" : "bg-white"
   }`}
                >
                  <div className="flex justify-end p-[10px]">
                    <img
                      onClick={() => {
                        setIdFrontView(false);
                      }}
                      src={closeIcon}
                      alt=""
                      className="h-[32px] w-[32px]  cursor-pointer"
                    />
                  </div>
                  <div className="flex flex-col h-[100%]   md:gap-[30px] gap-[20px] justify-center items-center">
                    <h2 className=" font-medium text-center text-[12px] leading-[14.4px] lg:text-[16px] lg:leading-[20.8px]">
                      Upload ID Front View
                    </h2>
                    <img
                      className="lg:h-[200px] lg:w-[197px] md:w-[115.339px] md:h-[117.361px] h-[91px] w-[89px]"
                      src={frontView}
                      alt=""
                    />
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      className="font-semibold text-white md:w-[150px] text-[12px] leading-[18px] lg:text-[16px] lg:leading-[24px] bg-[#04177F]  w-[80%] py-[10px]lg:rounded-[12px] lg:py-[10px] rounded-[4.61px]"
                    >
                      Upload
                    </button>
                  </div>
                </div>
              </Modal>
            )}
            {idBackView && (
              <Modal>
                <div
                  className={`flex flex-col rounded-[8px] w-[100%] h-[257.07px]  md:h-[350px] lg:h-[404px] md:w-[60%] lg:w-[45%] lg:rounded-[12px] mx-[19px] md:mx-[0px]
        shadow-[0px_0px_11.73611px_0px_rgba(0,0,0,0.25)]
         lg:shadow-[0px_0px_20px_0_px_rgba(0 0,0,0.25)] ${
           isDarkMode ? "bg-black border border-white" : "bg-white"
         }`}
                >
                  <div className="flex justify-end p-[10px]">
                    <img
                      onClick={() => {
                        setIdBackView(false);
                      }}
                      src={closeIcon}
                      alt=""
                      className="h-[32px] w-[32px]  cursor-pointer"
                    />
                  </div>
                  <div className="flex flex-col h-[100%]  md:gap-[30px] gap-[20px] justify-center items-center ">
                    <h2 className=" font-medium text-center text-[12px] leading-[14.4px] lg:text-[16px] lg:leading-[20.8px]">
                      Upload ID Back View
                    </h2>
                    <img
                      className="lg:h-[200px] lg:w-[197px] md:w-[115.339px] md:h-[117.361px]  h-[91px] w-[89px]"
                      src={BackView}
                      alt=""
                    />
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      className="font-semibold text-white  md:w-[150px] text-[12px] leading-[18px] lg:text-[16px] lg:leading-[24px] bg-[#04177F]  w-[80%] py-[10px] lg:rounded-[12px] lg:py-[10px] rounded-[4.61px]"
                    >
                      Upload
                    </button>
                  </div>
                </div>
              </Modal>
            )}
          </form>

          {idPopVerified && (
            <Modal>
              <div
                className={`confirm2 ${styles.inputPin} ${
                  toggleSideBar
                    ? "md:w-[45%] md:ml-[20%] lg:w-[40%] lg:ml-[20%]"
                    : "lg:w-[40%]"
                }
               relative md:w-[55%] w-[90%] flex flex-col justify-between md:mb-[0%] md:mx-auto md:my-auto lg:mx-auto lg:my-auto`}
              >
                <div className="absolute z-0 right-0" style={{ zIndex: 0 }}>
                  <img
                    src={PopUpGreen}
                    alt=""
                    className="md:hidden rounded-tr-[10px]"
                  />
                  <img
                    src={PopUpGreenTab}
                    alt=""
                    className="hidden md:block lg:hidden rounded-tr-[10px]"
                  />
                  <img
                    src={PopUpGreenDeskTop}
                    alt=""
                    className="hidden lg:block rounded-tr-[20px]"
                  />
                </div>

                <div className="relative z-10">
                  <p
                    className={`text-[12px] px-[20px] md:text-[16px] lg:text-[18px] font-semibold text-center mt-[4%] lg:my-[%] z-[1000] ${styles.overlayText}`}
                  >
                    Your request has been submitted successfully. You can check
                    your ID Status in the next 24 hours.
                  </p>
                </div>

                <div>
                  <img
                    src={Success}
                    alt=""
                    className="absolute top-[25%] left-[32%] h-[50%] lg:left-[36.5%]"
                  />
                </div>

                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setIdPopVerified(false);
                    setGenderResult(genderResult);
                    setIdAddress(idAddress);
                    setIdCountry("");
                    // setIdState('')
                    // setIdLGA('')
                    setIdPostalCode(idPostalCode);
                    setIdNumber(idNumber);
                    setIdResult(idResult);
                  }}
                  className={`my-[5%] bg-[#04177f] w-[90%] flex justify-center items-center mx-auto cursor-pointer text-[10px] 
                font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[16px] lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
                >
                  Done
                </button>
              </div>
            </Modal>
          )}
        </div>
      )}
      {sessionModal && (
        <InternalLoginSession 
        setExpiredSessionLogin ={setSessionModal}/>
      )}
      {loading && (
        <Modal>
          <Loader />
        </Modal>
      )}
    </div>
  );
}
