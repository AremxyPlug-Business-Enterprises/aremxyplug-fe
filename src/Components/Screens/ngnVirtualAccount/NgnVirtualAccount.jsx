import React, { useContext, useState } from "react";
import { DashBoardLayout } from "../../Dashboard/Layout/DashBoardLayout";
import { ContextProvider } from "../../Context";
import { Link } from "react-router-dom";
import { GetLocalStorage } from "../../LocalStorage/LocalStorage";
import { CheckVirtualAcc } from "../../ApiCollection.jsx/ApiBuck";
import axios from "axios";
import { Loader } from "../../Loader/Loader";
import { BASE_URL } from "../../../config";


function NgnVirtualAccount() {
  const Data = GetLocalStorage()
  const { isDarkMode,
    bankNameState,
    accountNameState,
    accountNumberState ,
  customerDetail,setVirtualAccCreated, setBankNameState, setAccountNumberState, setAccountNameState,
           twoStepVerificationSuccess,setTwoStepVerificationSuccess, sessionModal, networkIssue, 
           setNetworkIssue, setSessionModal, setAlertCustom} = useContext(ContextProvider)

  //const accNoRef = useRef(null);
 // const accNameRef = useRef(null);
//  const bankNameRef = useRef(null);
  const [loading, setLoading]= useState(false);


   const GenerateVirtualAccount = async(AuthUsed)=>{
      const usernameToken = localStorage.getItem("xcss{}")
      const emailToken  = localStorage.getItem("xcss[]");
     if(!navigator.onLine){
      if(networkIssue) return;
      if(!networkIssue) return setNetworkIssue(true)
     }
      if((usernameToken|| emailToken ) && navigator.onLine){
      try{
      setLoading(true)
      const body =""
      const url = `${BASE_URL}/virtualacc`
       const response = await axios.post(url,body,
        { headers : {"Content-Type" : "application/json"},
        withCredentials : true
      })
        if(response.status === 200 || response.status === 201){
           alert("Virtual Account Created")
           localStorage.setItem("80pcs","true")
           AuthUsed = usernameToken || emailToken;
           await CheckVirtualAcc(AuthUsed, customerDetail, setLoading, setVirtualAccCreated, 
            setBankNameState, setAccountNameState, setAccountNumberState, 
           twoStepVerificationSuccess,setTwoStepVerificationSuccess, setNetworkIssue, setAlertCustom)
           } 
            if(CheckVirtualAcc  && Data.ConfirmAcc === "true"){
        setLoading(false);
        }

      }catch(error){
        if(error && error.response === undefined){
           if(networkIssue) return;
      if(!networkIssue) return setNetworkIssue(true)
        }
       else  if( error.response && error.response.status === 400){
    
    setAlertCustom({
    message : "Virtual Account Creation Failed",
    type : "error",
    show : true
  })
   
          setLoading(false)
        }else if(error.response &&error.response.status === 401){
          if(sessionModal) return ;
      if(!sessionModal) return  setSessionModal(true)
        }else if(error.response.status === 404){
 setLoading(false)
       return;
        }else if(error.response &&error.response.status === 500){
          setAlertCustom({
    message : "SERVER_ERROR: Virtual Account Creation Failed",
    type : "error",
    show : true
  })
          setLoading(false)
        }else {
         setAlertCustom({
    message : "Virtual Account Creation Failed",
    type : "error",
    show : true
  })
            setLoading(false);
        }
      }
    }
   }

  // const formatAccountNumber = (text) => {
  //   if ( text !== '') {
  //     return text.substring(0, 4) + ' xxxx xxxx'
  //   }
  // }

  const handleCopyCombineText = () => {

   const value_1 = Data.aremxyBankName;
    const value_2 =  Data.aremxyAccountName;
    const value_3 =  Data.aremxyAccountNumber;
   
    const text_1 = `Bank Name: ${value_1}`
    const text_2 = `Account Name: ${value_2}`;
    const text_3 = `Account Number: ${value_3}`;
    const combineText = `${text_1}\n${text_2}\n${text_3}`

    navigator.clipboard.writeText(combineText)
      .then(() => {
        alert('Copied to clipboard')
      })
      .catch((error) =>{});
  }

  const handleShareCombineText = () => {

    const value_1 = Data.aremxyBankName;
    const value_2 =  Data.aremxyAccountName;
    const value_3 =  Data.aremxyAccountNumber;

    const combineText = {
      Bank_Name: value_1,
      Account_Name: value_2,
      Account_Number: value_3
    };

    if (navigator.share) {
      navigator.share(combineText)
        .then(() => {})
        .catch(() => {})
    } else {
     return;
    }
  }

  const handleCopyText = () => {
    const text = Data.aremxyAccountNumber;

    navigator.clipboard.writeText(text)
      .then(() => {
        alert('Copied to clipboard')
      })
      .catch((error) => {});
  }
  // To get Data from LocalStorage
  


  const storageAccountName = Data?.aremxyAccountName?.length && Data?.aremxyAccountName?.includes("AP/")
 ?  Data?.aremxyAccountName?.slice(3) :  Data?.aremxyAccountName?.length ? Data?.aremxyAccountName : '';  
  return (
    <DashBoardLayout>
      
      <div className="flex flex-col justify-between h-full">
        <div>
          {/* HERO HEADER STARTS HERE */}
          <div className="min-h-[90px] py-[15px]
                         lg:h-[196px] md:h-[112.29px] rounded-[6.6px] md:rounded-[11.46px] lg:rounded-[20px]
                          mx-auto  flex gap-6 justify-between px-[16.51px] md:px-[28.65px] lg:px-[50px] bg-[#4cb133]">
            <div className="py-[13px] lg:py-[40px] gap-[5px] flex flex-col">
              <h2 className="text-[11px] leading-[16px] lg:leading-[30px]
                                 lg:text-[24px] md:text-[13.75px] font-semibold">NIGERIAN NGN ACCOUNT.</h2>
              <h2 className="text-[10px] leading-[13px] 
                                lg:leading-[25px] lg:text-[20px]
                                 md:text-[11.46px]">The below account details is reserved to fund your NGN Wallet almost instantly with 1% funding fee only.</h2>
            </div>
            <div className="h-[66px] lg:h-[170px]">
              <img
                src="./Images/virtual-account/phone2.png"
                alt=""
                className="h-full"
              />
            </div>
          </div>
          {/* HERO HEADER ENDS HERE */}

          <div className="mt-[25.39px] md:mt-[35px] lg:mt-[60px] ">
            <div className="flex items-center">
              <p
                className=" text-[#7c7c7c] font-[500] text-[14px] leading-[18px] 
                  md:text-[18px] md:leading-[24px] lg:text-[20px] lg:leading-[24px]"
              >
                Funding Methods
              </p>
              <img
                src="Images/top_up/arrowR.png"
                alt=" "
                className="ml-[1%] w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
              />
            </div>
          </div>
           
          <div className="flex flex-col justify-center mt-[25.39px] py-[16px]
           md:mt-[35px] lg:mt-[60px] w-full h-[250px] md:h-[300px] lg:h-[300px] rounded-[7px]
           md:rounded-[11.5px] bg-[#92abfe]/[0.5] px-[16px] lg:px-[50px]
            lg:rounded-[20px]">
           {loading === true ?  (
            <div className="flex w-full h-[70px] items-center justify-center">
              <Loader/>
              </div>
           ) : (
          Data.ConfirmAcc === "true" ?  (
            <div className="flex flex-col gap-[20px]">
              <div className="mb-[8px] lg:mb-[15px] flex lg:gap-x-[20px] gap-x-[15px] font-semibold">
                <p className="md:text-[13px] text-[12px] lg:text-[16px] lg:w-[15%] leading-[18px] lg:leading-[22px] 
                md:w-[20%] w-[30%]">BANK NAME</p>
                <p className="md:text-[13px] text-[12px] lg:text-[16px]  leading-[18px] lg:leading-[22px] 
                lg:w-[85%] md:w-[20%] w-[70%]">{bankNameState ? bankNameState : Data.aremxyBankName ? Data.aremxyBankName : ""}</p>
              </div>
              <div className="mb-[8px] lg:mb-[15px] flex lg:gap-x-[20px] gap-x-[15px] font-semibold">
                <p className="md:text-[13px] text-[12px] lg:text-[16px] lg:w-[15%] leading-[18px] lg:leading-[22px]   md:w-[20%] w-[30%]">ACCOUNT NAME</p>
                <p className="md:text-[13px] text-[12px] lg:text-[16px]  leading-[18px] lg:leading-[22px]  lg:w-[85%] md:w-[20%] w-[70%]" >
                  {accountNameState ? accountNameState : 
                  Data.aremxyAccountName ? storageAccountName :
                   ""}
                  </p>
              </div>
              <div className=" flex lg:gap-x-[20px] gap-x-[15px] font-semibold">
                <p className="md:text-[13px] text-[12px] lg:text-[16px] lg:w-[15%] leading-[18px] lg:leading-[22px] 
                 md:w-[20%] w-[30%]">ACCOUNT NUMBER</p>{" "}
                <div className="flex items-center lg:w-[85%] md:w-[20%] w-[70%]">
                  <p className="md:text-[13px] text-[12px] lg:text-[16px]  leading-[18px] lg:leading-[22px] ">
                    {accountNumberState ? accountNumberState : Data.aremxyAccountNumber ? Data.aremxyAccountNumber : ""}</p>
                  <button onClick={handleCopyText}>
                    <img
                      src="Images/virtual-account/copy.png"
                      alt=" "
                      className="ml-[2px] w-[15px] h-[15px] md:w-[18px] md:h-[18px] lg:w-[24px] lg:h-[24px]"
                    />
                  </button>
                </div>
              </div>
              
            </div>
          ) : (
        <div className="flex flex-col justify-between py-[15px] lg:py-[20px] gap-[30px]"> 
        <h2 className={`text-[14px] leading-[20px] font-[500] lg:text-[16px] lg:leading-[22px] text-start ${isDarkMode ? "text-white" : "text-black"}`}>
       { (Data.ConfirmId === "true" || Data.ConfirmBvn === "true") && ( Data.ConfirmAcc === "false" || !Data?.ConfirmAcc) ?`Brilliant, Now we know who you are, kindly generate a NGN Virtual account.` : "To generate a virtual account, kindly verify your account in the profile settings page or your dashboard." }
       </h2>
       <div onClick={()=> {
        if((Data.ConfirmId === "true" || Data.ConfirmBvn === "true") && (Data.ConfirmAcc === "false" || !Data?.ConfirmAcc)){
        GenerateVirtualAccount()
        }
       }}
        className={`flex md:justify-end w-full`}>
          <button className={`text-[12px] text-white w-full text-center  leading-[20px] font-[400] lg:text-[14px] lg:leading-[22px]
           py-[14px] rounded-[14px] md:rounded-[20px]  md:w-[300px]  md:py-[16px] md:px-[13px] 
          ${(Data.ConfirmId === "true" || Data.ConfirmBvn === "true") && (Data.ConfirmAcc === "false" || !Data?.ConfirmAcc) ? "bg-primary" : "bg-gray-300"}
        `}>
            Generate
            </button>
         
       </div>
        </div>
          )
        )}
          </div>

          <div className='mt-[25.39px] md:mt-[35px] w-[100%] flex
           lg:mt-[60px] items-center
           justify-between gap-[7px] md:gap-[10px] lg:gap-[20px]'>
            <Link to= { Data.ConfirmAcc === "false"  || !Data.ConfirmAcc  ? null : '/CardPayment'} 
            className={`text-white text-[7px]
             leading-[10.5px] rounded-[4px] md:rounded-[7px] md:text-[9.17px]
             md:leading-[13.75px] flex items-center lg:text-[16px]
              lg:leading-[24px] justify-center py-[10px] w-1/3 
 lg:py-[10px]  ${Data.ConfirmAcc === "false"  || !Data.ConfirmAcc   ? "bg-gray-400" : "bg-primary"}`}>
              <div className='mr-1 w-[11.38px] h-[11.38px] md:w-[19.48px] md:h-[19.48px] lg:w-[34px] lg:h-[34px]'>
                <img src="./Images/wallet/card-add.png" alt="" className='object-cover w-full' />
              </div>
              <h2 className="text-[10px] leading-[14px] font-[400] md:text-[12px] 
              md:leading-[16px] lg:text-[14px] lg:leading-[18px]">Fund with card</h2>
            </Link>
            <button
             disabled ={Data.ConfirmAcc === "false"  || !Data.ConfirmAcc }
              onClick={handleCopyCombineText}
              className= {` text-white text-[7px] leading-[10.5px] md:text-[9.17px] 
                md:leading-[13.75px] rounded-[4px] md:rounded-[7px] 
                flex items-center lg:text-[16px] lg:leading-[24px]
                 justify-center   py-[10px] w-1/3 
                  lg:w-[231px] lg:py-[10px]  ${Data.ConfirmAcc === "false" || !Data.ConfirmAcc   ? "bg-gray-400" : "bg-primary"}`}
            >
              <div className='mr-1 w-[11.38px] h-[11.38px] md:w-[19.48px] md:h-[19.48px] lg:w-[34px] lg:h-[34px]'>
                <img src="./Images/wallet/wallet-add.png" alt="" className='object-cover w-full' />
              </div>
              <h2 className="text-[10px] leading-[14px] font-[400] md:text-[12px] 
              md:leading-[16px] lg:text-[14px] lg:leading-[18px]">Copy</h2>
            </button>
            <button
            disabled ={Data.ConfirmAcc=== "false" || !Data.ConfirmAcc }
              onClick={handleShareCombineText}
              className = {` text-white rounded-[4px] md:rounded-[7px] flex items-center
                 lg:text-[16px] lg:leading-[24px] justify-center 
                md:w-[124px]  py-[10px] w-1/3 
                   lg:w-[231px] lg:py-[10px]  ${Data.ConfirmAcc === "false" || !Data.ConfirmAcc   ? "bg-gray-400" : "bg-primary"}`}
            >
              <div className='mr-1 w-[11.38px] h-[11.38px] md:w-[19.48px] md:h-[19.48px] lg:w-[34px] lg:h-[34px]'>
                <img src="./Images/wallet/recovery-convert.png" alt="" className='object-cover w-full' />
              </div>
              <h2 className="text-[10px] leading-[14px] font-[400] md:text-[12px] 
              md:leading-[16px] lg:text-[14px] lg:leading-[18px]">Share</h2>
            </button>
          </div>
        </div>






        <div className="flex gap-2 justify-center items-center mt-40 ">
          <h2 className="leading-[12px]  text-[10px] md:text-[12px] lg:text-[14px]">
            You need help?
          </h2>
          <Link
            to={`/ContactUs`}
            className={` ${isDarkMode ? "border" : "bg-primary"
              } text-[8px] leading-[12px] text-white  px-2 py-1 rounded-full md:text-[10px] lg:text-[12px]`}
          >
            Contact Us
          </Link>
        </div>
      </div>
    
    </DashBoardLayout>
  );
}

export default NgnVirtualAccount;
