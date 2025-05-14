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

export default function IdVerification(Data) {
  const { verificationOpen } = useContext(ContextProvider);

  const {
    idVerificationOpen,
    state,
    verifyImage,
    setVerifyImage,
    idStatus,
    isDarkMode,
    setIdStatus,
  } = useContext(ContextProvider);
  const { dropDownGender, setDropDownGender, idButtonState, setIdButtonState } =
    useContext(ContextProvider);
  const [idDropDown, setIdDropDown] = useState(false);
  const { idAddress, setIdAddress } = useContext(ContextProvider);
  // const {idState, setIdState} = useContext(ContextProvider);
  const { idCity, setIdCity } = useContext(ContextProvider);
  const { idCountry, setIdCountry } = useContext(ContextProvider);
  // const {idLGA, setIdLGA} = useContext(ContextProvider);
  const { idNumber, setIdNumber } = useContext(ContextProvider);
  const { idPostalCode, setIdPostalCode } = useContext(ContextProvider);
  const [errorSubmit, setErrorSubmit] = useState(false);
  const [idFrontView, setIdFrontView] = useState(false);
  const [idBackView, setIdBackView] = useState(false);
  const [idPopVerified, setIdPopVerified] = useState(false);
  const [idCustomerQuery, setIdCustomerQuery] = useState(false);
  const [idDateOfBirth, setIdDateOfBirth] = useState("");
  const [loading, setLoading] = useState(false);
  const { toggleSideBar, customerDetail } = useContext(ContextProvider);
  const { full_name } = customerDetail;
  const { fullName } = state;
  // Genders
  const genderInfo = ["Male", "Female", "Others.."];
  const [genderResult, setGenderResult] = useState("");
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
  const validCountry = (e) => {
    const addCity = e.target.value;
    e.target.setCustomValidity(addCity ? "" : "Your City must be entered");
  };
  //  CUSTOM VALIDITY FOR CITY
  const validCity = (e) => {
    const addCity = e.target.value;
    e.target.setCustomValidity(addCity ? "" : "Your City must be entered");
  };
  // CUSTOM VALIDITY FOR STATE
  // const validState  = (e) => {
  //   const addState = e.target.value;
  //   e.target.setCustomValidity(addState ? '' : 'Your State must be entered')
  // }
  //CUSTOM VALIDITY FOR ID
  const validId = (e) => {
    const addId = e.target.value;
    e.target.setCustomValidity(
      addId ? "" : "Your ID must be inputed and must be 11 digits"
    );
  };
  //CUSTOM VALIDITY FOR LGA
  //  const validLGA = (e) => {
  //   const addLGA = e.target.value;
  //  e.target.setCustomValidity(addLGA ? '' : 'This is required to proceed');
  // }

  //Function to inform a user that account has previously been craeted
  // and set the following functions as stated bellow

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
    if (idButtonState === "Verify") {
      url = "https://aremxyplug.onrender.com/api/v1/verify";
      buttonStateSuccess = "Verified";
      ErrorMessage = "NIN Name Mismatch or Network failure";
      PendingImageFxn = () => setVerifyImage(Pending);
      PendingText = () => setIdStatus("Pending");
      verifyIdImage = () => setVerifyImage(idSuccess);
      statusId = () => setIdStatus("Verified");
      verifyPopId = () => setIdPopVerified(true);
      data = {
        nin: idNumber.toString(),
      };
    }
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
    const authToken = localStorage.getItem("authorisedLogin");
    const getToken = localStorage.getItem("getToken");
    // const AccCreated = localStorage.getItem("AccCreated")
    if (
      idNumber &&
      idResult &&
      idDateOfBirth &&
      genderResult &&
      idAddress &&
      idCity &&
      idCountry
    ) {
      setLoading(true);

      console.log("getToken", getToken);

      // console.log(data)
      try {
        if (idButtonState === "Verify") {
          setErrorSubmit(false);
          PendingImageFxn();
          PendingText();
        }
        const response = await axios.post(url, data, {
          headers: {
            "Content-Type": "application/json",
            Authorization: authToken || getToken,
          },
        });
        if (response.status === 201 || 200) {
          setIdNumber(idNumber);
          verifyIdImage();
          statusId();
          verifyPopId();
          setIdButtonState(buttonStateSuccess);
          localStorage.setItem("idVerification", "true");
        }
      } catch (error) {
        if (error.status === 401 || 400) {
          alert(ErrorMessage);
          console.log(`ERROR : ${error}`);

          setVerifyImage(NotVerifiedIcon);
          setIdStatus("Not Verified");
        } else if (error.status === 500) {
          alert("Error:", "INTERNAL_SERVER_ERROR");
          setIdStatus("Not Verified");
          setVerifyImage(NotVerifiedIcon);
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
  const IdNumberRef = useRef();
  const VerifyRef = useRef();
  Data = GetLocalStorage();
  useEffect(() => {
    VerifyRef.current = Data;
    IdNumberRef.current = idNumber;
    // eslint-disable-next-line
  }, [Data]);
  console.log(Data);
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
                  verifyImage &&
                  (Data.ConfirmId === "true" || Data.ConfirmBvn === "true" ? idSuccess : NotVerifiedIcon)
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
                  {idStatus &&
                    (Data.ConfirmId === "true" || Data.ConfirmBvn === "true" ? "Verified" : "Not Verified")}
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
            <div className="flex flex-col lg:gap-[25px] gap-[20px] w-full mb-[50px]">
              {/*  Full Name / Gender */}
              <div className="flex flex-col md:flex-row lg:gap-[22px] gap-[20px] w-[100%]">
                {/* Full Name */}
                <div className="flex flex-col md:w-[50%] w-full md:gap-[10px] gap-2.5">
                  <h2
                    className={`font-semibold text-[#7E7E7E] text-[13px] leading-[10.4px] lg:text-[16px] lg:leading-[20.8px] ${
                      isDarkMode ? "text-slate-50" : ""
                    }`}
                  >
                    Full Name
                  </h2>
                  <div
                    className={`py-[10.33px] pl-[5.867px] lg:py-[15.5px] lg:pl-[10px] border-[0.4px] md:py-[12px] md:pl-[8.67px] md:pr-[5.867px] text-[12px] leading-[18px] border-[#9C9C9C] lg:text-[16px] lg:leading-[20.8px] focus:outline-none placeholder:text-[12px] placeholder:leading-[10.4px] placeholder:lg:text-[16px] placeholder:lg:leading-[20.8px] rounded-[10px] h-full  ${
                      isDarkMode ? "border-slate-50 text-white " : ""
                    }`}
                  >
                    {!full_name && fullName.length > 1
                      ? fullName
                      : full_name
                      ? full_name
                      : Data.UserFullName
                      ? Data.UserFullName
                      : "Hi user"}
                  </div>
                </div>
                {/* Gender */}

                <div className="relative flex flex-col md:w-[50%] w-[100%] md:gap-[10px] gap-2.5">
                  <h2
                    className={`font-semibold text-[#7E7E7E] text-[13px] leading-[10.4px] lg:text-[16px] lg:leading-[20.8px] ${
                      isDarkMode ? "text-slate-50" : ""
                    }`}
                  >
                    Gender
                  </h2>
                  <div
                    onClick={()=> {
                      if(Data.ConfirmBvn === "false" && Data.Confirm.Id === "false"){
                      chooseGender();
                      } else{
                        return null;
                      }
                    }}
                    className={`flex justify-between items-center py-[10.33px] pl-[5.867px] pr-1 md:py-[9.257px] md:pl-[8.67px] md:pr-[5.867px] lg:py-[15.5px] lg:pl-[10px] border-[0.4px] text-sm leading-[18px] border-[#9C9C9C] lg:text-[16px] lg:leading-[20.8px] rounded-md md:rounded-[10px] ${
                      isDarkMode ? "border-slate-50" : ""
                    }`}
                  >
                    <h2
                      className={`text-[#000] font-[400] text-[12px] leading-[18px] lg:text-[16px] lg:leading-[20.8px] ${
                        isDarkMode ? "text-slate-50" : ""
                    }`}
                    >
                      {genderResult}
                    </h2>
                    <img
                      src={ArrowDown}
                      alt=""
                      className="genderDrop lg:w-[24px] lg:h-[24px] w-[14.083px] h-[14.083px]"
                    />
                  </div>
                  {dropDownGender && (
                    <div
                      className={`absolute lg:top-[90px] md:top-[60px] top-[70px] z-[5] flex flex-col w-[100%] ${
                        isDarkMode ? "bg-black border border-white" : "bg-white"
                      }`}
                    >
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
                            className={`font-medium text-[#7C7C7C] text-[12px] leading-[10.4px] lg:text-[16px] lg:leading-[20.8px] md:py-[20px] py-[15px] pl-[10px] lg:pl-[16px] shadow-[0px_3.30667px_8.26667px_0px_rgba(0,0,0,0.25)] md:shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)] cursor-pointer ${
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
              </div>
              {/* HOUSE ADDRESS AND STATE*/}
              <div className="flex flex-col md:flex-row lg:gap-[22px] gap-[20px] w-[100%]">
                {/* HOUSE ADDRESS */}
                <div className="flex flex-col md:w-[50%] w-[100%] md:gap-[10px] gap-2.5">
                  <h2
                    className={`font-semibold text-[#7E7E7E] text-[13px] leading-[10.4px] lg:text-[16px] lg:leading-[20.8px] ${
                      isDarkMode ? "text-white" : ""
                    }`}
                  >
                    House Address
                  </h2>
                  <input
                    value={idAddress}
                    onChange={(e) => {
                      setIdAddress(e.target.value);
                    }}
                    className={`py-[10.33px] pl-[5.867px] pr-1 md:py-[10] md:pl-[8.67px] md:pr-[5.867px] lg:py-[15.5px] lg:pl-[10px] border-[0.4px] text-[12px] leading-[18px] border-[#9C9C9C] lg:text-[16px] lg:leading-[20.8px] rounded-md md:rounded-[10px] focus:outline-none ${
                      isDarkMode
                        ? "bg-transparent text-slate-50 border-slate-50"
                        : ""
                    }`}
                    placeholder=""
                    type="text"
                    onInvalid={validAddress}
                   readOnly={Data.ConfirmId === "true" || Data.ConfirmBvn === "true"}
                    required
                  />
                </div>

                {/* Date of Birth / BVN */}
                <div className="flex flex-col md:w-[50%] w-[100%] md:gap-[10px] gap-2.5">
                  <h2
                    className={`font-semibold text-[#7E7E7E] text-[13px] leading-[10.4px] lg:text-[16px] lg:leading-[20.8px] ${
                      isDarkMode ? "text-slate-50" : ""
                    }`}
                  >
                    D.O.B
                  </h2>
                  <input
                    value={idDateOfBirth}
                    onChange={(e) => {
                      setIdDateOfBirth(e.target.value);
                    }}
                    className={`w-[100%] py-[10.33px] pl-[5.867px] lg:py-[15.5px] lg:pl-[10px] border-[0.4px] md:py-[9.257px] md:pl-[8.67px] md:pr-[5.867px] text-sm leading-[18px] lg:pr-[16px] pr-[9px] border-[#9C9C9C] lg:text-[16px] lg:leading-[20.8px] focus:outline-none cursor-pointer rounded-[10px] ${
                      isDarkMode ? "text-white border-white bg-black" : ""
                    }`}
                    type="date"
                    id="dob"
                    name="dob"
                    readOnly={Data.ConfirmId === "true" || Data.ConfirmBvn === "true"}
                  />
                </div>
                {/* STATE */}
                {/* <div className='flex flex-col md:w-[50%] w-[100%] md:gap-[10px] gap-2.5'>
   <h2 className='font-semibold text-[#7E7E7E] text-[13px] leading-[10.4px] 
   lg:text-[16px] lg:leading-[20.8px]'>
    State or Province
    </h2>
    <input 
    value={idState}
    onChange={(e) =>{
      setIdState(e.target.value)
    }}
    className='mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-[20px]  md:p-0 text-[12px] sm:p-3 sm:text-lg font-medium py-[10.33px] pl-[5.867px] 
    lg:py-[15.5px] lg:pl-[10px] border-[0.4px]
     leading-[10.4px] 
     border-[#9C9C9C] border-[solid] lg:text-[16px] lg:leading-[20.8px] focus:outline-none'
    placeholder='' 
    type="text" onInvalid={validState} required/>
   
    </div> */}
              </div>
              {/* CITY AND LGA */}
              <div className="flex flex-col md:flex-row lg:gap-[22px] gap-[20px] w-[100%]">
                {/* COUNTRY */}
                <div className="flex flex-col md:w-[50%] w-[100%] md:gap-[10px] gap-2.5">
                  <h2
                    className={`font-semibold text-[#7E7E7E] text-[13px] leading-[10.4px] lg:text-[16px] lg:leading-[20.8px] ${
                      isDarkMode ? "text-slate-50" : ""
                    }`}
                  >
                    Country
                  </h2>
                  <input
                    value={idCountry}
                    onChange={(e) => {
                      setIdCountry(e.target.value);
                    }}
                    className={`py-[10.33px] pl-[5.867px] pr-1 md:py-[9.257px] md:pl-[8.67px] md:pr-[5.867px] lg:py-[15.5px] lg:pl-[10px] border-[0.4px] text-[12px] leading-[18px] border-[#9C9C9C] lg:text-[16px] lg:leading-[20.8px] rounded-md md:rounded-[10px] focus:outline-none ${
                      isDarkMode ? "bg-black text-slate-50 border-slate-50" : ""
                    }`}
                    placeholder=""
                    type="text"
                    onInvalid={validCountry}
                    readOnly={Data.ConfirmId === "true" || Data.ConfirmBvn === "true"}
                    required
                  />
                </div>
                {/* CITY */}
                <div className="flex flex-col md:w-[50%] w-[100%] md:gap-[10px] gap-2.5">
                  <h2
                    className={`font-semibold text-[#7E7E7E] text-[13px] leading-[10.4px] lg:text-[16px] lg:leading-[20.8px] ${
                      isDarkMode ? "text-slate-50" : ""
                    }`}
                  >
                    City
                  </h2>
                  <input
                  readOnly ={Data.ConfirmBvn === "true" || Data.ConfirmId === "true"}
                    value={idCity}
                    onChange={(e) => {
                      setIdCity(e.target.value);
                    }}
                    className={`py-[10.33px] pl-[5.867px] pr-1 md:py-[9.257px] md:pl-[8.67px] md:pr-[5.867px] lg:py-[15.5px] lg:pl-[10px] border-[0.4px] text-[12px] leading-[18px] border-[#9C9C9C] lg:text-[16px] lg:leading-[20.8px] rounded-md md:rounded-[10px] focus:outline-none ${
                      isDarkMode
                        ? "bg-transparent text-slate-50 border-slate-50"
                        : ""
                    }`}
                    placeholder=""
                    type="text"
                    onInvalid={validCity}
                    required
                  />
                </div>
                {/* LGA */}
                {/* <div className='flex flex-col md:w-[50%] w-[100%] md:gap-[10px] gap-2.5'>
   <h2 className='font-semibold text-[#7E7E7E] text-[13px] leading-[10.4px] 
   lg:text-[16px] lg:leading-[20.8px]'>
     L.G.A
    </h2>
    <input 
    value={idLGA}
    onChange={(e) => {
      setIdLGA(e.target.value);
    }}
    className='mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-[20px]  md:p-0 text-[12px]  sm:p-3 sm:text-lg font-medium py-[10.33px] pl-[5.867px] 
    lg:py-[15.5px] lg:pl-[10px] border-[0.4px] 
     leading-[10.4px] 
     border-[#9C9C9C] border-[solid] lg:text-[16px] lg:leading-[20.8px]
      focus:outline-none'
    placeholder=''
    type="text"  onInvalid={validLGA}  required/>
   
    </div> */}
              </div>
              {/* POSTAL CODE */}

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
                  value={idPostalCode}
                  onChange={(e) => {
                    setIdPostalCode(e.target.value);
                  }}
                  readOnly={Data.ConfirmId === "true" || Data.ConfirmBvn === "true"}
                  className={` py-[10.33px] pl-[5.867px] pr-1 md:py-[9.257px] md:pl-[8.67px] md:pr-[5.867px] lg:py-[15.5px] lg:pl-[10px] border-[0.4px] text-[12px] leading-[18px] border-[#9C9C9C] lg:text-[16px] lg:leading-[20.8px] rounded-md md:rounded-[10px] focus:outline-none ${
                    isDarkMode
                      ? "bg-black text-slate-50 border-slate-50"
                      : "text-[#9C9C9C]"
                  }`}
                  placeholder=""
                  type="text"
                  inputMode="numeric"
                />
              </div>

    {/* ID TYPE & ID NUMBER */}
    <div className='flex flex-col md:flex-row lg:gap-[22px] gap-[20px] w-[100%]'>
        {/* ID TYPE */}
        <div className='relative flex flex-col md:w-[50%] w-[100%] md:gap-[10px] gap-[5.868px]'>
   <h2 className='font-[600] text-[#7E7E7E] text-[13px] leading-[10.4px] 
   lg:text-[16px] lg:leading-[20.8px]'>
     ID Type
    </h2>
    <div onClick={()=> {

      if(Data.ConfirmId === "false" && Data.ConfirmBvn === "false"){
       chooseId();

    }else{
     return null;
    }
    }}
    className='flex justify-between items-center font-[500] py-[10.33px] pl-[5.867px] pr-1 md:py-[9.257px] md:pl-[8.67px] md:pr-[5.867px] lg:py-[15.5px] lg:pl-[10px] border-[0.4px] text-[8px] leading-[10.4px] border-[#9C9C9C] lg:text-[16px] lg:leading-[20.8px] rounded-md md:rounded-[10px]'>
      <h2 className={`text-[#000] font-[400]  leading-[10.4px]
      lg:text-[16px] lg:leading-[20.8px] ${isDarkMode ? "text-white" : "text-black"}`}>
        {idResult || (Data.ConfirmId ==="true"  ? "National ID" : idResult)}
      </h2>
      <img src={ArrowDown} alt=""
      className='idDrop lg:w-[24px] lg:h-[24px] w-[14.083px] h-[14.083px]'/>
      </div>
      {idDropDown  && (
        <div 
        className=' absolute lg:top-[90px] md:top-[60px] top-[70px] z-[5] flex flex-col w-[100%]'>
      {idTypes.map(info => {
        return (
          <div 
           key={info.id} onClick={() => {
           setIdResult(()=> {
             if(Data.ConfirmId === "false" && Data.ConfirmBvn === "false" && idResult === "" && info.idType === 1){
            return info.idType;
            }
            else if(Data.ConfirmId === "true" && info.idType === 1){
              return "National ID"
              }else if( (info.id === 2 || info.id ===3 || info.id === 4) && Data.ConfirmId === "false"){
               return "National ID"
                }
           })
              setIdDropDown(()=>{
                if(info.idType ==="National ID"){
                  return false;
                }else{
                  return true;
                }
              });
                document.querySelector('.idDrop').classList.remove('DropIt');
      
            }}
        className ={`font-[500] px-2 flex justify-between text-[#7C7C7C] text-[8px] leading-[10.4px]
            lg:text-[16px] lg:leading-[20.8px] md:py-[20px] py-[15px] pl-[10px]
           lg:pl-[16px] shadow-[0px_3.30667px_8.26667px_0px_rgba(0,0,0,0.25)] md:shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)]  
           cursor-pointer ${info.Status === "Inactive" ? "bg-gray-300 cursor-not-allowed" : "bg-white"} `}>
            <h2 className="font-[500] text-[#7C7C7C] text-[8px] leading-[10.4px]
            lg:text-[16px] lg:leading-[20.8px]
            ">{idStatus === "Verified" && Data.ConfirmId === "true" ? "National ID" : ""}</h2>
            <p
             className={`font-[500] text-[#7C7C7C] text-[8px] leading-[10.4px]
            lg:text-[16px] lg:leading-[20.8px] ${info.Status === "Inactive" ? "text-red-500": "text-green-500"}`}>
     {info.Status}
            </p>
           </div>
         
         )
       })}
         </div>
      )}
      </div>
  
    {/*  */}
    <div className='flex flex-col md:w-[50%] w-[100%] md:gap-[10px] gap-[5.868px]'>
   <h2 className='font-[600] text-[#7E7E7E] text-[13px] leading-[10.4px] 
   lg:text-[16px] lg:leading-[20.8px]'>
     ID Number
    </h2>
    <input readOnly={idStatus=== "Verified"}
     onInput={( e => {
      const numbersOnly = e.target.value.replace(/\D/g, '');
      e.target.value = numbersOnly;
    })}
    value={idNumber && (idStatus === "Verified" ? IdNumberRef.current : idNumber)}
    onChange={(e) => {
      setIdNumber(e.target.value);
    }}
    className='flex justify-between items-center font-[500] py-[10.33px] pl-[5.867px] pr-1 md:py-[10px] md:pl-[8.67px] md:pr-[5.867px] lg:py-[15.5px] lg:pl-[10px] border-[0.4px] text-[8px] leading-[10.4px] border-[#9C9C9C] lg:text-[16px] lg:leading-[20.8px] rounded-md md:rounded-[10px] focus:outline-none'
    placeholder=''
    type="text" inputMode='numeric' maxLength={11} onInvalid={validId}  required/>
   
    </div>
      </div>
      {/* UPLOAD IMAGES OFOR ID VERIFICATION */}
      <div className='flex lg:gap-[40px] md:w-[60%] w-[100%] md:justify-start justify-between gap-[24px]'>
        {/* FRONT VIEW */}
    <div
  //    onClick={()=> {
  //    setIdFrontView(true);
  //  }} 
    className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-[20px]  md:p-0 text-[12px]  sm:p-3 sm:text-lg flex  lg:py-[14px] py-[8.771px] pr-[20.785px] pl-[20px]
     lg:pr-[28px] lg:pl-[16px] md:gap-[14px] gap-[8.21px]
    border-[0.4px] border-[solid] border-[#9C9C9C] cursor-pointer'>
   <h2 className='font-[600] text-[#7E7E7E]  leading-[14.4px] 
   lg:text-[16px] lg:leading-[20.8px] ${idResult === "National ID" ? "bg-gray-300" :"bg-white"}  `}>
  <h2 className='font-[600] text-[#7E7E7E] text-[11px] leading-[14.4px] 
   lg:text-[16px] lg:leading-[20.8px]'>
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
border-[0.4px] border-[solid] border-[#9C9C9C] cursor-pointer ${idResult === "National ID" ? "bg-gray-300" : "bg-white"}`}>
   <h2 className='font-[600] text-[#7E7E7E] text-[11px] leading-[14.4px] 
   lg:text-[16px] lg:leading-[20.8px]'>
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
        disabled={ Data.ConfirmId === "true"}
        onClick={() => {
          IdFunctionState()
        }}
         className={`lg:py-[13px] md:py-[5.868px] md:rounded-[7.042px] py-[16.531px] rounded-[4.241px] w-[100%] md:w-[150px] lg:w-[163px] lg:rounded-[12px] bg-[#04177F]
         font-[600] text-[13px] leading-[18px] lg:text-[16px] text-center text-white lg:leading-[24px

         ${(Data.ConfirmId === "true" || Data.ConfirmBvn=== "true") ?"bg-slate-400" : "bg-[#04177F]"}`}>
       {(idButtonState) && 
       (   Data.ConfirmId === "true"  || Data.ConfirmBvn=== "true" ? "Verified" : "Verify" )}

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
            <div className='idVerify  flex  flex-col bg-white shadow-[0px_0px_8.3274px_0px_rgba(0 0 0,0.25)] rounded-[8px] 
             shadow-[0px_0px_8.3274px_0px_rgba(0 0 0,0.25)] md:rounded-[11.736px]  lg:rounded-[20px]   md:w-[55%]
            md:shadow-[0px_0px_11.73611px_0px_rgba(0,0,0,0.25) lg:shadow-[0px_0px_20px_0px_rgba(0,0,0,0.25)] 
            justify-center lg:justify-normal items-center  px-[18px] md:px-[30px] md:h-[550px]   
            h-[430px]  md:mx-[0px] mx-[19px]  gap-[18px] md:gap-[40px] lg:gap-[70px] 
            overflow-y-scroll md:py-[30px] lg:pt-[30px]  md:pt-[180px] pt-[210px]'>
           
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
                    setIdCity(idCity);
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
      {loading && (
        <Modal>
          <Loader />
        </Modal>
      )}
    </div>
  );
}
