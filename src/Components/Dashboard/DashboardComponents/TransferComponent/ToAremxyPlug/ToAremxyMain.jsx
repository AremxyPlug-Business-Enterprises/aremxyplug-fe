import { useContext, useState, useEffect, useRef } from "react";
import { ContextProvider } from "../../../../Context";
import styled from "../../../../AirTimePage/AirTime.module.css";
import { ToConfirmAremxyMain } from "./ToConfirmAremxyMain";
import { Modal } from "../../../../Screens/Modal/Modal";
import { BalanceLoading } from "../../../../Loader/Loader";
import { GetLocalStorage } from "../../../../LocalStorage/LocalStorage";
import { GetFunction } from "../../../../ApiCollection.jsx/ApiBuck";
import { Loader } from "../../../../Loader/Loader";
import { MainInputPinPop } from "./MainInputPinPop";
import { useNavigate } from "react-router-dom";
import nigerianFlag from "../../../../Dashboard/DashboardComponents/flagsImages/nigeriaFlag.png";
import usdFlag from  "../../../../Dashboard/DashboardComponents/flagsImages/americaFlag.png";
import kenyaFlag from"../../../../Dashboard/DashboardComponents/flagsImages/kenyaFlag.png";
import britainFlag from "../../../../Dashboard/DashboardComponents/flagsImages/ukFlag.png";
import audFlag from "../../../../Dashboard/DashboardComponents/flagsImages/australiaFlag.png";
import euroFlag from "../../../DashboardComponents/flagsImages/europeanFlag.png";
import currencyImage from  "../../../../EducationPins/imagesEducation/arrow-down.svg";
import AremxySelectUser from "./AremxySelectUser";
import { RestrictionPopUp } from "../../../../ApiCollection.jsx/ApiBuck";
// import { useNavigate } from "react-router-dom";

export default function ToAremxyMain() {
  const navigate = useNavigate()
//  identityMessage ="hello"
  const { showList,
    setShowList,
    selected,
    setSelected,
    toggleSideBar,
   // amtToTransfer,
   // setAmtToTransfer,
    mainCountry,
    setMainCountry,
    setEmailPhoneNumberConfirmation,
    mainTransferErrors,
    newBalance,
    setNewBalance,
    messageTransfer,
    setMessageTransfer,
    transferAmount,
    setTransferAmount,
    isDarkMode,
    transferValue,
    setTransferValue,
    setNetworkIssue,
    networkIssue,
       setSessionModal,
          sessionModal
  } = useContext(ContextProvider);

  const [addToRecipient, SetAddToRecipient] = useState(false);
  const [saveToFavorite, setSaveTofavorite] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [balanceLoader, setBalanceLoader] = useState(false)
  const [fetchedResponse, setFetchedResponse] = useState({});
  const [verifiedUser, setVerifiedUser] = useState(false);
  const [passDataBalance, setPassDataBalance] = useState({});
  const [currencyBalance,  setCurrencyBalance] = useState("");
  const [currencyImageState, setCurrencyImageState] = useState(currencyImage);
  const transferSetTime = useRef()
  const [selectRecipientPopup, setSelectRecipientPopUp] = useState(false);
  const [restrictUser, setRestrictUser] = useState(false);
  const [errorTransAmount, setErrorTransAmount] = useState(false);
  

const Data = GetLocalStorage();
  const updateBalance = passDataBalance?.data?.data?.data !== undefined
    ? passDataBalance?.data?.data?.data?.balance
    : "";
  const updateBalanceToNumber = Number(updateBalance)
  const newBalanceToNumber = Number(newBalance)
  const methodOptions = [
    {
      method: "Nigeria",
      balance:
        newBalance === "" || newBalance === null || newBalance === undefined
          ? `(${updateBalance?.length > 1 ? updateBalanceToNumber?.toLocaleString("en-NG", {
               style : "currency",
               currency : "NGN"
          }) : ""})`
          : `(${newBalance?.length > 1 ? newBalanceToNumber?.toLocaleString("en-Ng", {
            style : "currency",
            currency : "NGN"
          }) : ""})`,
      flag: nigerianFlag,
      id: 1,
      code : "NGN"
    },
    { method: "United States",
       balance: "($0.00)", 
       flag: usdFlag,
        id: 2, code : "" },
    { method: "United Kingdom",
       balance: "(€0.00)", 
       flag: britainFlag,
        id: 3,
        code : ""
      },
    { method: "Europe",
       balance: "(£0.00)", 
       flag: euroFlag,
        id: 4,
      code : "" },
    { method: "Australia", balance: "(AU$0.00)", flag: audFlag, id: 5 , code : ""},
    { method: "Kenya", balance: "(KSh0.00)", flag: kenyaFlag, id: 6, code : ""  },
  ];

   const testEmail = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]/);
const testUsername = new RegExp( /^[a-zA-Z0-9_]{3,20}$/);

const GetUserDetails = async(value, transferIdentity)=> {
  const valueTransfer = value?.toLowerCase();
  const customerUsername = Data?.aremxyUsername?.toString()?.toLowerCase();
  const customerEmail = Data?.UserEmail?.toString()?.toLowerCase();
  
   
if(((transferIdentity === "email" && valueTransfer !== customerEmail)
   ||( transferIdentity === "username" && customerUsername !== valueTransfer) )
  && value?.length > 2 ){
  const SuccessHandler =()=> {
setVerifiedUser(true);
setErrorMessage("");
  }
  const FailedHandler= async(Error)=> {
  if(Error === "Server error" ){
   //  setVerificationPinError(true);
    setErrorMessage("Account does not exist");
    setVerifiedUser(false)
    setFetchedResponse({})
        }else if(Error  === "Network error" || Error === "User error"){
         setErrorMessage("Kindly check your internet connection.");
            setVerifiedUser(false);
        }else if(Error  === "Bad request"){
      setErrorMessage("Account does not exist.")
         setVerifiedUser(false);
           setFetchedResponse({});
      }else if(Error === "unauthorised"){
     await GetFunction(`search?${transferIdentity}=${value}`,
      setLoading, 
      SuccessHandler, ()=> {
        setSessionModal(true);
      }, setFetchedResponse, setNetworkIssue); 
      }else if(Error === undefined){
       setErrorMessage("Your internet connection is quite unstable.")
          setVerifiedUser(false)
      }
        else{
        setErrorMessage("An unexpected error occured, please try again later.")
         setVerifiedUser(false)
      }
      setTimeout(()=> {
  if(errorMessage?.length > 1 && value?.length < 1){
    setErrorMessage("");
  }
}, 1500)
  }
  await GetFunction(`search?${transferIdentity}=${value}`,
    setLoading,
     SuccessHandler,
      FailedHandler,
       setFetchedResponse, setNetworkIssue);
}else if(valueTransfer=== customerUsername || valueTransfer === customerEmail){
 setErrorMessage(`${value} is your transfer identity, you can only send to other aremxyplug wallet.`)
  setVerifiedUser(false);
}}
 const timer = useRef()
const HandleIdentifyCredentials = async(value)=> {
const TestingTransferIdentify = async(transferIdentity)=> {
if(value?.length < 2){
  setTimeout(()=> {
    setErrorMessage("");
  setFetchedResponse({});
    setVerifiedUser(false);
  },500)
  // setErrorMessage("");

}else if(testEmail.test(value) && value?.endsWith(".com") && value?.length > 7 ){
   setErrorMessage("")
   setVerifiedUser(false);
 transferIdentity = "email";
}else if(testUsername.test(value) === true && value?.length > 2 && value?.includes("@")=== false ){
setErrorMessage("");
 transferIdentity = "username";
}else if(testEmail.test(value) === true && 
testUsername.test(value) === false && value?.endsWith(".com") === false
 && value?.length > 7){
     setVerifiedUser(false);
  setErrorMessage(`Your email address does not include the '${`${".com"}`}' extension `)
setFetchedResponse({})
transferIdentity = null;
}else if(testEmail.test(value) === false && 
testUsername.test(value) === false && value?.endsWith(".com") === true
 && value?.length > 7){
  setErrorMessage("Your email address is not valid.")
    transferIdentity = null;
   setFetchedResponse({})
 }else{
  if(value?.length > 2) {
       setVerifiedUser(false)
      setErrorMessage("Your transfer Identity is neither a recognized email nor an username.")
      setFetchedResponse({})
  }else{
    setErrorMessage("")
       setVerifiedUser(false)
       setFetchedResponse({})
  } }


      GetUserDetails(value, transferIdentity);
    };
    TestingTransferIdentify();
  };
  const ProceedTransfer = () => {
    if (
      fetchedResponse?.data?.data?.userDetails?.phone &&
      transferValue?.length > 1 &&
      transferAmount?.toString()?.length > 1 &&
      (newBalance !== null | newBalance !== undefined 
        || passDataBalance?.data?.data?.data?.balance !== null 
        || passDataBalance?.data?.data?.data?.balance !== undefined )
        && mainCountry?.length > 1
    ) {
      setEmailPhoneNumberConfirmation(true);
    }
  };

  const checkParametersTransfer =  fetchedResponse?.data?.data?.userDetails?.phone &&
      transferValue?.length > 1 &&
   (isNaN(transferAmount) && transferAmount?.length ? 
   transferAmount?.toString()?.length > 3 : transferAmount?.length > 2 )   &&
      (newBalance !== null | newBalance !== undefined 
        || passDataBalance?.data?.data?.data?.balance !== null 
        || passDataBalance?.data?.data?.data?.balance !== undefined)
        && mainCountry?.length > 1; 

  // const  HandleAmountFormat=(amount)=> {
  //   const RequireNumericChange = Number(amount)
  //   if(RequireNumericChange !== null || RequireNumericChange!== undefined ||RequireNumericChange!== ""){
  // return RequireNumericChange?.toLocaleString("en-NG", {
  //   style : "currency",
  //   currency : "NGN"
  // })
  //   }else {
  //     return amount
  //   }
  // }

  //Verification Pin handler to help verify users pin
  //then carry transaction if verified successfully'
//Verification Pin handler to help verify users pin
//then carry transaction if verified successfully'
   
     

 
  const [flag, setFlag] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [currencyAvailable, setCurrencyAvailable] = useState(false);

  
  // const handleCountryClick = (name, flag, id, code) => {
  //   setFlag(flag);
  //   setShowList(false);
  //   setMainCountry(name);
  //   setSelected(true);
  //   setCountryCode(code);
  //   setCurrencyAvailable(id !== 1);
  // };
const AppendValueWithPlus = ()=> {
const splitValue = fetchedResponse?.data?.data ?
 fetchedResponse?.data?.data?.userDetails?.phone
: "";
const holdSplitValueArrayValue = splitValue.split("");
if(Array.isArray(holdSplitValueArrayValue)){
 holdSplitValueArrayValue.unshift("+")
if(holdSplitValueArrayValue?.length === 14){
return holdSplitValueArrayValue.join("");
 }
}
}
const standardPhoneNumber = AppendValueWithPlus()
 
  useEffect(()=> {
    
    
const GetBalance = async () => {
      const SuccessHandler = (response) => {
        //alert("Successful");
        setPassDataBalance(response)
       
      };
      const FailedHandler = async (ErrorType) => {
        if (ErrorType === "unauthorised") {
            if(sessionModal) return;
            if(!sessionModal) return setSessionModal(true)
        }else if(ErrorType === "Server error"){
         alert("Unable to retrieve balance");
      } else if (
          ErrorType === "Network error" ||
          ErrorType === "User error"
        ) {
            if(networkIssue) return;
             if(!networkIssue) return setNetworkIssue(true)
        } else {
          alert("An unexpected error occured in attempt to retrieve balance.");
        }
      };
      await GetFunction(
        "balance",
        setBalanceLoader,
        SuccessHandler,
        FailedHandler,
        ()=> {},
        setNetworkIssue
      );
    };
      if (Data?.ConfirmAcc === "true"){                     // Simulate async data loading
        GetBalance();
       setNewBalance(passDataBalance?.data?.data?.data !== undefined
               ? passDataBalance?.data?.data?.data?.balance : "");
                        }else {
                    setRestrictUser(true);
                    }
                      //eslint-disable-next-line
  }, [])
  

  function currencyDropDown() {
    if(showList === false){
    setShowList(true);
    document.querySelector(".decdrop").classList.toggle("DropIt");
    }else {
     setShowList(false);
       document.querySelector(".decdrop").classList.remove("DropIt");
    }
  }

  const selectCountryInputRef=  useRef(null);
  const [highlightedText, setHighlightedText] = useState("")
  //Function to handle the timing of the animation.
  const handleScrollAndHighlight = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  setTimeout(() => {
    if (selectCountryInputRef.current) {
      selectCountryInputRef.current.classList.add("highlight-animate");
       setHighlightedText("Click here to select country")
      setTimeout(() => {
        selectCountryInputRef.current.classList.remove("highlight-animate");
        setHighlightedText("")
      }, 1000); // Remove after animation
    }
  }, 500); // Wait for scroll to finish
};


  return (
   
    <div
      className="flex flex-col gap-[20px] 
    lg:gap-x-[40px] w-full"
    >
         {/* ==========================Select/Add Recipient====================== */}
      <div className="flex flex-col gap-[15px] md:flex-row lg:gap-[30px]">
        <div className="w-full">
          
            <div onClick={()=> {
             // navigate("/aremxy-select-user");
             setSelectRecipientPopUp(true)
            }}
          className={`mt-2  md:mt-0 rounded-[10px] 
             md:rounded-0  md:p-0 text-base
         sm:p-3  flex justify-between py-[8.803px]
         pr-[13px] pl-[10.876px] font-[400] 
         leading-[10.4px] md:text-[11px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] 
    md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[45.927px] md:h-[35px] lg:h-[50px] border-[#9C9C9C] px-[11px] md:px-[6px] lg:px-[10px] text-[#7C7C7C] self-center  ${
      isDarkMode
        ? "bg-black text-white border border-white"
        : "hover:bg-[#EDEAEA]"
    }`} >
              <p className={`text-[15px] lg:text-[17px]
                       md:text-[13px] md:font-[600] font-[400]
                       ${isDarkMode ? "text-white" : "text-[#7E7E7E]"}
                       `}>Select User</p>
              <img
                className="w-[13px] h-[13px] lg:w-[29px] lg:h-[29px]"
                src="./Images/otherBanksImages/weight.png"
                alt=""
              />
            
          </div>
        </div>
        <div className="w-full">
         
            <div  className={`mt-2  md:mt-0 rounded-[10px] 
             md:rounded-0  md:p-0 text-base
         sm:p-3  flex justify-between py-[8.803px]
         pr-[13px] pl-[10.876px] font-[400] 
         leading-[10.4px] md:text-[11px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] 
    md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[45.927px] md:h-[35px] lg:h-[50px] border-[#9C9C9C] px-[11px] md:px-[6px] lg:px-[10px] text-[#7C7C7C] self-center  ${
      isDarkMode
        ? "bg-black text-white border border-white"
        : "hover:bg-[#EDEAEA]"
    }`}  onClick ={()=> {
       navigate("/aremxy-add-user")
    }}>
              <p className="text-[#7E7E7E] text-[15px] lg:text-[17px]
                       md:text-[13px] md:font-[600] font-[400]">Add User</p>
              <img
                className="w-[13px] h-[13px] lg:w-[29px] lg:h-[29px]"
                src="./Images/otherBanksImages/add-square.png"
                alt=""
              />
            </div>
      </div>
      </div>
      <div
        className="flex flex-col gap-[15px] 
      md:flex-row lg:gap-[30px]"
      >
        {/* =====================Country========================= */}
        {/* <div className={styles.inputBox}> */}
        <div className="flex flex-col md:w-[50%] w-full md:gap-[10px] gap-[5.868px] relative">
          {/* <p className="text-[10px] font-extrabold md:text-[14px] lg:text-[20px]"> */}
          <p
            id ="selectCountry"
            className={` text-[15px] lg:text-[17px]
                       md:text-[13px] md:font-[600] font-[400]
                       ${isDarkMode ? "text-white" : "text-black"}`}>
            Select Country
          </p>
          <div
            onClick={() =>{
               setShowList(!showList)
               currencyDropDown()
              } }
            
            // className="border rounded-[5px] h-[25px] flex justify-between items-center p-1 lg:h-[45px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]"
          className={`mt-2  md:mt-0 rounded-[10px] 
             md:rounded-0  md:p-0 text-base
         sm:p-3  flex justify-between py-[8.803px]
         pr-[13px] pl-[10.876px] font-[400] 
         leading-[10.4px] md:text-[11px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] 
    md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[45.927px] md:h-[35px] lg:h-[50px] border-[#9C9C9C] px-[11px] md:px-[6px] lg:px-[10px] text-[#7C7C7C] self-center  ${
      isDarkMode
        ? "bg-black text-white border border-white"
        : "hover:bg-[#EDEAEA]"
    }`} >
         {mainCountry}
       
          <img
             className="decdrop absolute left-[92%] lg:left-[94%]
              self-center align-middle md:h-[14.038px] md:w-[14.038px] 
      lg:h-[24px] lg:w-[24px] w-[14px] h-[16px]"
              src={currencyImageState}
              alt="dropdown"
            />
              <div ref={selectCountryInputRef}

               className="absolute top-[]text-[13.2px] italic   sm:text-lg  pt-[8.803px] 
                        pb-[7.794px] pr-[13px] pl-[10.876px] font-[400] leading-[10.4px] 
                        md:text-[11px] md:leading-[12.206px] lg:text-[16px] lg:leading-[20.8px]">
          {mainCountry === "" && (
            highlightedText
         )}
          </div>
          </div>
        
          {showList && (
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

                                setMainCountry(
                                  methodOption.id === 1
                                    ? methodOption.method
                                    : mainCountry === "Nigeria" &&
                                      methodOption.id !== 1
                                    ? "Nigeria"
                                    : ""
                                );
                                setCurrencyBalance(methodOption.id === 1 && currencyBalance === ""? 
                                newBalance === "" || newBalance === null || newBalance === undefined
          ? `(${updateBalance?.length > 1 ? updateBalanceToNumber?.toLocaleString("en-NG", {
               style : "currency",
               currency : "NGN"
          }) : ""})`
          : `(${newBalance?.length > 1 ? newBalanceToNumber?.toLocaleString("en-NG", {
            style : "currency",
            currency : "NGN"
          }) : ""})` : mainCountry === "Nigeria" ?  newBalance === "" || newBalance === null || newBalance === undefined
          ? `(${updateBalance?.length > 1 ? updateBalanceToNumber?.toLocaleString("en-NG", {
               style : "currency",
               currency : "NGN"
          }) : ""})`
          : `(${newBalance?.length > 1 ? newBalanceToNumber?.toLocaleString("en-NG", {
            style : "currency",
            currency : "NGN"
          }) : ""})` : "");

           setShowList(() => {
               if (methodOption.id === 1) {
                setSelected(true);
                     setShowList(false);
                        document.querySelector(".decdrop")
                         .classList.remove("DropIt");
                                  } else {
                                     setSelected(false);
                                    setShowList(true);
                                    document
                                      .querySelector(".decdrop")
                                      .classList.add("DropIt");
                                  }
                                });
                                  setCurrencyAvailable(methodOption.id !== 1);
                                          setCurrencyImageState(
                                  methodOption.id === 1
                                    ? methodOption.flag
                                    : currencyImage
                                );
                               setFlag(methodOption.flag);
                                setCountryCode(methodOption.id === 1 ? methodOption.code : "")
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

                              {methodOption.method} {" "}
                                  {balanceLoader === true && methodOption.id === 1 ? <BalanceLoading/> : methodOption.balance}
                               </div>
                          );
                        })}
            </div>
          )}
        
        </div>

        {/* =======================Currency============================ */}
        {/* <div className={styles.inputBox}> */}
        <div  className=" flex flex-col gap-[3px] lg:gap-[5px] 
                  w-full md:w-1/2">
          
          <p
            // className="text-[10px] font-extrabold md:text-[14px] lg:text-[20px]"
             className={`text-[15px] lg:text-[17px]
                       md:text-[13px] md:font-[600] font-[400]
                       ${isDarkMode ? "text-white" : "text-black"}`}
          >
            Country's Currency
          </p>
          <div
            // className="border text-[10px]  rounded-[5px] h-[25px] p-1 lg:h-[45px] lg:text-[14px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]"
              className={`mt-2  md:mt-0 rounded-[10px] 
             md:rounded-0  md:p-0 text-base
         sm:p-3  flex justify-between py-[8.803px]
         pr-[13px] pl-[10.876px] font-[400] 
         leading-[10.4px] md:text-[11px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] 
    md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[45.927px] md:h-[35px] lg:h-[50px] border-[#9C9C9C] px-[11px] md:px-[6px] lg:px-[10px] text-[#7C7C7C] self-center  ${
      isDarkMode
        ? "bg-black text-white border border-white"
        : "hover:bg-[#EDEAEA]"
    }`} 
          >
            {selected ? (
              <div className="flex items-center gap-[7px]">
                <img
                  className="w-[13px] h-[13px] lg:w-[29px] lg:h-[29px]"
                  src={mainCountry === "Nigeria" ? nigerianFlag : flag}
                  alt="/"
                />
                {mainCountry === "Nigeria"? "NGN" : countryCode}
              </div>
            ) : (
              ""
            )}
          </div>
          {mainTransferErrors.currency && (
            <div className="text-[12px] text-red-500 italic lg:text-[14px]">
              {mainTransferErrors.currency}
            </div>
          )}
        </div>
      </div>
  


      <div className='flex flex-col lg:gap-[25px] gap-[20px] w-[100%] mb-[50px]'>
      <div className="flex flex-col md:flex-row lg:gap-[22px] gap-[20px] w-full">
        <div className="flex flex-col md:w-[50%] w-[100%] md:gap-[10px] gap-[5.868px]">
          <p     className={` text-[15px] lg:text-[17px]
                       md:text-[13px] md:font-[600] font-[400]
                       ${isDarkMode ? "text-white" : "text-black"}`}>
            Email\Username\UID
          </p>
            <div className="relative flex flex-col h-full 
            gap-[3px] lg:gap-[5px] w-full ">
            <input
              onChange={(e)=> {
                setTransferValue(e.target.value)
           if(timer.current) clearTimeout(timer.current)   
                timer.current = setTimeout(()=> {
                HandleIdentifyCredentials(e.target.value);
                    
  },500)
  }}
          value={transferValue}
      placeholder="Username29 / name@email.com"
     disabled={Data?.ConfirmAcc === "false"}
    className={`mt-2  md:mt-0 rounded-[10px] 
             md:rounded-0  md:p-0 text-base
         sm:p-3  flex justify-between py-[8.803px]
         pr-[13px] pl-[10.876px] font-[400] 
         leading-[10.4px] md:text-[11px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] 
    md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[45.927px] md:h-[35px] lg:h-[50px] border-[#9C9C9C] px-[11px] md:px-[6px] lg:px-[10px] text-[#7C7C7C] self-center  ${
      isDarkMode
        ? "bg-black text-white border border-white"
        : "hover:bg-[#EDEAEA]"
    }`} 
    type="text"
            />
            <img
              className=" absolute left-[90%] top-[40%] md:top-[30%]
                         lg:left-[94%] self-center align-middle md:h-[14.038px] md:w-[14.038px] 
      lg:h-[24px] lg:w-[24px] w-[14px] h-[16px] "
              src="/Images/transferImages/frame.png"
              alt="dropdown"
            />
          </div>
          {errorMessage?.length > 1 && (
            <p className={`text-[12px] text-red-500 italic
               lg:text-[14px] `}>
              {errorMessage}
            </p>
          )}
          {verifiedUser === true  && errorMessage === "" ? (
             <p className={`text-[12px] text-green-500 italic
               lg:text-[14px]  `}>
             Verified User
            </p>
          ) : ""}
         
        
        </div>

        {/* ======================Phone Number================== */}
        {/* <div className={styles.inputBox}> */}
          <div className="flex flex-col md:w-[50%]
         w-[100%] md:gap-[10px] gap-[5.868px]">
          <p
            // className="text-[10px] font-extrabold md:text-[14px] lg:text-[20px]"
          className={` text-[15px] lg:text-[17px]
                       md:text-[13px] md:font-[600] font-[400]
                       ${isDarkMode ? "text-white" : "text-black"}`}
          >
           FullName
          </p>
          <div
            // className="border rounded-[5px] h-[25px] flex justify-between items-center p-1 lg:h-[45px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]"
          className="relative flex flex-col h-full 
            gap-[3px] lg:gap-[5px] w-full ">
            <input
            //  onChange={handleMainInputChange}
              name="userFullName"
               readOnly
              value={fetchedResponse?.data?.data?.userDetails?.full_name !== undefined ?
            fetchedResponse?.data?.data?.userDetails?.full_name : "" }
       className={`mt-2  md:mt-0 rounded-[10px] 
             md:rounded-0  md:p-0 text-base
         sm:p-3  flex justify-between py-[8.803px]
         pr-[13px] pl-[10.876px] font-[400] 
         leading-[10.4px] md:text-[11px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] 
    md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[45.927px] md:h-[35px] lg:h-[50px] border-[#9C9C9C] px-[11px] md:px-[6px] lg:px-[10px] text-[#7C7C7C] self-center  ${
      isDarkMode
        ? "bg-black text-white border border-white"
        : "hover:bg-[#EDEAEA]"
    }`} 
  type="text"
            />
            <img
             className=" absolute left-[90%] top-[40%] md:top-[30%]
                         lg:left-[94%] self-center align-middle md:h-[14.038px] md:w-[14.038px] 
      lg:h-[24px] lg:w-[24px] w-[14px] h-[16px] "
              src="/Images/transferImages/call.png"
              alt="dropdown"
            />
          </div>
         
          </div>
    
          </div>

        {/* =========================Amount To Transfer==================== */}
        
        <div className="flex flex-col md:flex-row lg:gap-[22px] 
        gap-[20px] w-[100%]">
          {/* Phone Number */}
      <div className="flex flex-col md:w-[50%]
         w-[100%] md:gap-[10px] gap-[5.868px]">
          <p
            // className="text-[10px] font-extrabold md:text-[14px] lg:text-[20px]"
          className={`text-[15px] lg:text-[17px]
                       md:text-[13px] md:font-[600] font-[400]
                       ${isDarkMode ? "text-white" : "text-black"}`}
          >
            Phone Number
          </p>
          <div
            // className="border rounded-[5px] h-[25px] flex justify-between items-center p-1 lg:h-[45px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]"
          className="relative flex flex-col h-full 
            gap-[3px] lg:gap-[5px] w-full ">
            <input
            //  onChange={handleMainInputChange}
              name="userPhoneNumber"
            
              readOnly
              value={standardPhoneNumber?.length > 1
                 && standardPhoneNumber !== undefined && fetchedResponse?.data?.data
                 ?  standardPhoneNumber: ""}
        className={`mt-2  md:mt-0 rounded-[10px] 
             md:rounded-0  md:p-0 text-base
         sm:p-3  flex justify-between py-[8.803px]
         pr-[13px] pl-[10.876px] font-[400] 
         leading-[10.4px] md:text-[11px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] 
    md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[45.927px] md:h-[35px] lg:h-[50px] border-[#9C9C9C] px-[11px] md:px-[6px] lg:px-[10px] text-[#7C7C7C] self-center  ${
      isDarkMode
        ? "bg-black text-white border border-white"
        : "hover:bg-[#EDEAEA]"
    }`} 
    
  type="text"
            />
            <img
             className=" absolute left-[90%] top-[40%] md:top-[30%]
                         lg:left-[94%] self-center align-middle md:h-[14.038px] md:w-[14.038px] 
      lg:h-[24px] lg:w-[24px] w-[14px] h-[16px] "
              src="/Images/transferImages/call.png"
              alt="dropdown"
            />
          </div>
          {mainTransferErrors.userPhoneNumber && (
            <div className="text-[12px] text-red-500 italic lg:text-[14px]">
              {mainTransferErrors.userPhoneNumber}
            </div>
          )}
          </div>

          {/* Phone Number end */}
            <div className="flex flex-col md:w-[50%] w-[100%] md:gap-[10px] gap-[5.868px] ">
            <p    className={` text-[15px] lg:text-[17px]
                       md:text-[13px] md:font-[600] font-[400]
                       ${isDarkMode ? "text-white" : "text-black"}`}>
          {/* <p className="text-[10px] font-extrabold md:text-[16px] lg:text-[20px]"> */}
            Amount To Transfer
          </p>
          <div className="relative flex flex-col h-full 
            gap-[3px] lg:gap-[5px] w-full ">
           
            <input
             placeholder = "100 - Unlimited Amount"
            onInput={(e)=> {
             const amountInput = e.target.value;
        const formatInput =  amountInput.replace(/\D/g, "");
          e.target.value = formatInput;
    }}
  className={`mt-2  md:mt-0 rounded-[10px] 
             md:rounded-0  md:p-0 text-base
         sm:p-3  flex justify-between py-[8.803px]
         pr-[13px] pl-[10.876px] font-[400] 
         leading-[10.4px] md:text-[11px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] 
    md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[45.927px] md:h-[35px] lg:h-[50px] border-[#9C9C9C] px-[11px] md:px-[6px] lg:px-[10px] text-[#7C7C7C] self-center  ${
      isDarkMode
        ? "bg-black text-white border border-white"
        : "hover:bg-[#EDEAEA]"
    }`} 
              onChange={(e)=> {
             setErrorTransAmount(false);
       setTransferAmount(e.target.value);
       if(transferSetTime.current) clearTimeout(transferSetTime.current)
         transferSetTime.current = setTimeout(()=> {
        if(e.target.value !== "" && e.target.value?.length > 0 
          &&e.target.value?.length  < 3 ){
        setErrorTransAmount(true)
        }
        return e.target.value === ""  && e.target.value?.length < 1
         ? setTransferAmount("") :
         e.target.value?.length > 1 &&
         e.target.value!== undefined && e.target.value !==null 
          ? setTransferAmount(()=> Number(e.target.value)?.toLocaleString("en-NG", {
          style : "currency",
          currency : "NGN",
          maximumFractionDigits : 0
  }))  :  e.target.value !== undefined && 
  e.target.value !==null 
 && e.target.value !== "" ? 
  setTransferAmount(()=> e.target.value?.toLocaleString("en-NG", {
          style : "currency",
          currency : "NGN",
          maximumFractionDigits : 0
           
  })) : setTransferAmount("")
 }, 1000)
      return ()=> clearTimeout(transferSetTime.current)
  }}
 
              type="tel"
          
               
              value={transferAmount}
            />
            <img
            className=" absolute left-[90%] top-[40%] md:top-[30%]
                         lg:left-[94%] self-center align-middle md:h-[14.038px] md:w-[14.038px] 
      lg:h-[24px] lg:w-[24px] w-[14px] h-[16px] "
              src="/Images/transferImages/cycle.png"
              alt="dropdown"
            />
          </div>
          {errorTransAmount &&  (
            <p className="text-red-500 text-[12px] font-[500] leading-[16px] lg:text-[13px] lg:leading-[17px]">
            Amount should be equal to or greater than 100 
            </p>
          )}
          {mainTransferErrors.amtToTransfer && (
            <div className="text-[12px] text-red-500 italic lg:text-[14px]">
              {mainTransferErrors.amtToTransfer}
            </div>
          )}
          </div>

       
           
            
        
       </div>
 {/* ===========================Available Balance===================== */}
       
          <div className="flex flex-col md:flex-row lg:gap-[22px] 
        gap-[20px] w-[100%]">
          <div className="flex flex-col md:w-[50%] 
            w-[100%] md:gap-[10px] gap-[5.868px]">
          <p    className={` text-[15px] lg:text-[17px]
                       md:text-[13px] md:font-[600] font-[400]
                       ${isDarkMode ? "text-white" : "text-black"}`}>
            Available Balance
          </p>
          <div onClick={()=> {
            if(mainCountry ===""){
           handleScrollAndHighlight()
               }
        }}
         className={` relative mt-2  md:mt-0 rounded-[10px] 
             md:rounded-0  md:p-0 text-base
         sm:p-3  flex justify-between py-[8.803px]
         pr-[13px] pl-[10.876px] font-[400] 
         leading-[10.4px] md:text-[11px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] 
    md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[45.927px] md:h-[35px] lg:h-[50px] border-[#9C9C9C] px-[11px] md:px-[6px] lg:px-[10px] text-[#7C7C7C] self-center  ${
      isDarkMode
        ? "bg-black text-white border border-white"
        : "hover:bg-[#EDEAEA]"
    }`} >
      {mainCountry === "Nigeria" ?  (
           <p className="text-[13.2px]  sm:p-3 sm:text-lg
            font-[400] leading-[10.4px] md:text-[11px]
            md:leading-[12.206px]  lg:text-[16px] lg:leading-[20.8px]">
             {(newBalance === "" || 
                newBalance=== undefined) ?
                 Number(passDataBalance?.data?.data?.data?.balance)?.toLocaleString("en-NG", {
                  style : "currency", 
                currency : "NGN",
              }) 
                 : Number(newBalance)?.toLocaleString("en-NG", {
                  style : "currency", 
                currency : "NGN"})  }
           </p>
              ) : (
                  <p >{"Select Country to get your balance "}</p>
                 )}
           
           {mainCountry === "Nigeria"  ?  (
            <img
              className="align-middle md:h-[14.038px] md:w-[14.038px] 
      lg:h-[24px] lg:w-[24px] w-[14px] h-[16px]"
              src="/Images/transferImages/nigeria.png"
              alt="dropdown"
            />
           ) : (
            <p>{"  "}</p>
           )}
          </div>
        </div>

  <div className="flex flex-col md:w-[50%] w-[100%] 
        md:gap-[10px] gap-[5.868px]">
          <p
            className={`text-[#7E7E7E] text-base lg:text-[17px]
                       md:text-[13px] md:font-[600] font-[400]
                       ${isDarkMode ? "text-white" : "text-black"}`}
          >
            Message
          </p>
          <textarea
          rows={10}
            placeholder="Optional"
            onChange={(e) => setMessageTransfer(e.target.value)}
            value={messageTransfer}
           className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-[20px] 
                        md:p-0 text-[13.2px]  sm:p-3 sm:text-lg flex justify-between pt-[8.803px] 
                        pb-[7.794px] pr-[13px] pl-[10.876px] font-[400] leading-[10.4px] md:text-[11px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px]
     md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] 
     lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  
     items-center cursor-pointer outline-0 border-[0.24px]
      lg:border-[0.4px] w-full px-[11px] md:px-[6px] lg:px-[10px]  self-center ${
      isDarkMode
 ? "bg-black text-white border border-white"
        : "border border-[#0003] border-[#9C9C9C] text-[#7C7C7C]"
    }`}
          ></textarea>
        </div>
        </div>
      </div>

      {/* =========================Add to recipient ? ======================= */}
      <div className="flex gap-[10px]">
        <div className="flex items-center gap-[10px]">
          <div className="text-[11px] lg:text-[16px]">
            Add to recipient ?</div>
          <div
            onClick={() => {
              SetAddToRecipient(!addToRecipient);
              // handleButtonClick();
            }}
            className={` w-[17px] h-[8.4px] md:w-[30px] md:h-[12px] lg:w-[50px] lg:h-[22px] lg:rounded-full rounded ${
              addToRecipient ? "bg-[#58DA8F]" : "bg-[#b1b0b0]"
            }`}
          >
            <div
              className={`rounded-full w-[9.5px] h-[8.4px] md:w-[14px] md:h-[12px] lg:h-[22px] lg:w-[21px] lg:drop-shadow-md bg-[#fff] ${
                addToRecipient ? "float-right" : "float-left"
              }`}
            ></div>
          </div>
        </div>
        <div className="flex items-center gap-[10px]">
          <div className="text-[11px] lg:text-[16px]">Save to favorities</div>
          <div
            onClick={() => {
              setSaveTofavorite(!saveToFavorite);
              // handleButtonClick();
            }}
            className={` w-[17px] h-[8.4px] md:w-[30px] md:h-[12px] lg:w-[50px] lg:h-[22px] lg:rounded-full rounded ${
              saveToFavorite ? "bg-[#58DA8F]" : "bg-[#b1b0b0]"
            }`}
          >
            <div
              className={`rounded-full w-[9.5px] h-[8.4px] md:w-[14px] md:h-[12px] lg:h-[22px] lg:w-[21px] lg:drop-shadow-md bg-[#fff] ${
                saveToFavorite ? "float-right" : "float-left"
              }`}
            ></div>
          </div>
        </div>
      </div>
      <button
      disabled ={checkParametersTransfer === false}
        onClick={() => ProceedTransfer()}
        className={`${
        checkParametersTransfer && (!isDarkMode || isDarkMode)  ? "bg-[#04177f]" : 
         !checkParametersTransfer && !isDarkMode ?  "bg-[#0008]"  : 
          "bg-gray-500" 
         } my-[5%] w-full flex justify-center items-center mx-auto 
        cursor-pointer text-[14px] font-extrabold h-[40px]
         text-white rounded-[6px] md:w-[25%] md:rounded-[8px]
          md:text-[20px] lg:text-[16px] lg:h-[38px] lg:my-[4%]
          `}
      >
        Proceed
      </button>
     {selectRecipientPopup && (
       <Modal> 
        <AremxySelectUser 
        setTransferValue={setTransferValue}
        setSelectRecipientPopUp={setSelectRecipientPopUp}
        HandleIdentifyCredentials ={HandleIdentifyCredentials }
        />
       </Modal>
     )}
      {currencyAvailable && (
        <Modal>
          <div className={styled.NotInterX}>
            <div className={styled.timeAbleK}>
              <h3>This Currency is Currently Not Available.</h3>
            </div>
            <div className={styled.InterAirtimeX}>
              <img
                src="/Images/addAccountImages/account-unavailable.png"
                alt=""
              />
            </div>
            <div className={styled.comingX}>
              <h2>Coming soon...</h2>
              <button className={styled.btnOkX} onClick={()=> setCurrencyAvailable(false)}>
                Okay
              </button>
            </div>
          </div>
        </Modal>
      )}
      
      <ToConfirmAremxyMain
        transferValue={transferValue}
        fetchedResponse={fetchedResponse}
        passDataBalance={passDataBalance}
      />
      <MainInputPinPop fetchedResponse={fetchedResponse} />
      {loading && <Loader />}
      {(restrictUser && sessionModal === false ) && <RestrictionPopUp/>}
  
     

       
       
    
    </div>
  );
}
