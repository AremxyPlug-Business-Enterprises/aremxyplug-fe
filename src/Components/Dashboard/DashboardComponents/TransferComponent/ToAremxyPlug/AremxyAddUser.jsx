import  { useContext, useState, useRef, useEffect } from "react";
import { ContextProvider } from "../../../../Context";
import { DashBoardLayout } from "../../../Layout/DashBoardLayout";
import { Link } from "react-router-dom";
import style from "../../../../AirTimePage/AirtimeVtu.module.css";
import styled from "../../../../AirTimePage/AirTime.module.css";
import { Modal } from "../../../../Screens/Modal/Modal";
import {GetFunction, PostFunction, HandleUserSession } from "../../../../ApiCollection.jsx/ApiBuck";
import { Loader } from "../../../../Loader/Loader";
import { GetLocalStorage } from "../../../../LocalStorage/LocalStorage";
import nigerianFlag from "../../../../Dashboard/DashboardComponents/flagsImages/nigeriaFlag.png";
import usdFlag from  "../../../../Dashboard/DashboardComponents/flagsImages/americaFlag.png";
import kenyaFlag from"../../../../Dashboard/DashboardComponents/flagsImages/kenyaFlag.png";
import britainFlag from "../../../../Dashboard/DashboardComponents/flagsImages/ukFlag.png";
import audFlag from "../../../../Dashboard/DashboardComponents/flagsImages/australiaFlag.png";
import euroFlag from "../../../DashboardComponents/flagsImages/europeanFlag.png";
//import currencyImage from  "../../../../EducationPins/imagesEducation/arrow-down.svg";
const AremxyAddUser = (Data) => {
  const { toggleSideBar, isDarkMode, newBalance, setNewBalance} = useContext(ContextProvider);
//  const [emailUsername, setEmailUserName] = useState("");
  const [mainCountry, setMainCountry] = useState("");
  const [selected, setSelected] = useState(false);
  const [showList, setShowList] = useState(false);
  const [save, setSave] = useState(false);
  const [errors, setErrors] = useState({});
 const [errorMessage, setErrorMessage]  = useState("")
 const [verifiedUser, setVerifiedUser] = useState(false);
 const [fetchedResponse, setFetchedResponse] = useState({});
 const [loading, setLoading] = useState(false);
 const [sessionModal, setSessionModal] = useState(false);
 const [transferValue, setTransferValue] = useState("");

 const [recipientResponse, setRecipientResponse] = useState({})
 Data = GetLocalStorage()


  const [passDataBalance, setPassDataBalance] = useState({})
      const [currencyBalance,  setCurrencyBalance] = useState("");
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


  const [flag, setFlag] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [currencyAvailable, setCurrencyAvailable] = useState(false);

  const handleCountryClick = (name, flag, id, code) => {
    setFlag(flag);
    setShowList(false);
    setMainCountry(name);
    setSelected(true);
    setCurrencyAvailable(id !== 1);
  };

  const refresh = () => window.location.reload(true);

  const handleConfirm = () => {
    setSave(false);
    setConfirm(true);
  };



  //Confirming user through the function
     const testEmail = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]/)
  const testUsername = new RegExp( /^[a-zA-Z0-9_]{3,20}$/);
  const GetUserDetails =async(value, transferIdentity)=> {
  if(((transferIdentity === "email" 
    && value !== Data?.UserEmail) ||( transferIdentity === "username" && Data?.aremxyUsername !== value) )
    && value?.length > 2 ){
    const SuccessHandler =()=> {
  setVerifiedUser(true);
  setErrorMessage("");
    }
    const FailedHandler= async(Error)=> {
     if(Error === "Server error" ){
     //  setVerificationPinError(true);
      setErrorMessage("Account does not exist");
      setVerifiedUser(false);
      setFetchedResponse({});
          }else if(Error  === "Network error" || Error === "User error"){
           setErrorMessage("Kindly Check your internet connection.");
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
        }, setFetchedResponse);
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
    ()=> {
      console.log("loading")
    },
       SuccessHandler,
        FailedHandler,
         setFetchedResponse);
  }else if(value === Data?.aremxyUsername || value === Data?.UserEmail){
   setErrorMessage(`${value} is your transfer identity, you can only send to other aremxyplug wallet.`)
    setVerifiedUser(false);
  }}
   const timer = useRef()
    
  // console.log(timer);
  const HandleIdentifyCredentials = async(value)=> {
  
  const TestingTransferIdentify = async(transferIdentity)=> {
  if(value?.length < 3){
    setTimeout(()=> {
      setErrorMessage("");
      setVerifiedUser(false);
      setFetchedResponse({})
    },1000)
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
    setErrorMessage(`Your email address does not include the ${`${".com"}`} extension `)
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
    }
   }
  // console.log(identityMessage);
  //console.log(transferIdentity)
  
  GetUserDetails(value, transferIdentity);
  }
  TestingTransferIdentify();
  }

  const AddRecipientPostFunction = async()=> {
     //Recipient fUllname
    const recipientFullname = fetchedResponse?.data?.data?.userDetails?.full_name !== undefined 
    || fetchedResponse?.data?.data?.userDetails?.full_name !== null 
    ? fetchedResponse?.data?.data?.userDetails?.full_name : "";
// Recipient Email
      const recipientEmail= fetchedResponse?.data?.data?.userDetails?.email !== undefined 
    || fetchedResponse?.data?.data?.userDetails?.email !== null 
    ? fetchedResponse?.data?.data?.userDetails?.email : "";
  //Recipient Phone Number
    const recipientPhone = fetchedResponse?.data?.data?.userDetails?.phone !== undefined 
    || fetchedResponse?.data?.data?.userDetails?.phone !== null 
    ? fetchedResponse?.data?.data?.userDetails?.phone: "";
 // Recipient Username
    const recipientUsername = fetchedResponse?.data?.data?.userDetails?.username !== undefined 
    || fetchedResponse?.data?.data?.userDetails?.username !== null 
    ? fetchedResponse?.data?.data?.userDetails?.username : "";

    const SuccessHandler =()=> {
     handleConfirm();
    }
    const body ={
      username : recipientUsername,
      email : recipientEmail,
      phone : recipientPhone,
      fullName : recipientFullname
    }
    const FailedHandler =async(ErrorType)=> {
      if(ErrorType === "unauthorised"){
        await PostFunction("bank-recipient", setLoading,body ,
      SuccessHandler, (ErrorType)=> {
        if(ErrorType === "unauthorised"){
          setSessionModal(true)
        }
}, setRecipientResponse
    )
      }else if(ErrorType === "Network error" || ErrorType === "User error"){
     alert("Kindly check your internet connection");
    }else {
      alert("An unexpected error has occured, please try again later.")
    }
   }
   await PostFunction("bank-recipient", setLoading,body,
      SuccessHandler, FailedHandler, setRecipientResponse
    )
}

//GetBalance Function
  useEffect(()=> {

const GetBalance = async () => {
      const SuccessHandler = () => {
        //alert("Successful");
        console.log("successfully retrieved balance");
        //alert("Successful")
      };
      const FailedHandler = async (ErrorType) => {
        if (ErrorType === "unauthorised") {
          await GetFunction(
            `balance`,
            setLoading,
            SuccessHandler,
            //Handling the error Use Cases of the Unauthorised inside
            // of the statement.
            async(ErrorType) => {
              if (ErrorType === "unauthorised") {
                return setSessionModal(false);
              }else if(ErrorType === "Server error"){
                  await GetFunction(
        "balance",
        setLoading,
        SuccessHandler,
       async(ErrorType)=> {
        if(ErrorType === "Server error"){
          alert("Failed to retrieve the balance.")
        }else if(ErrorType === "Network error" || ErrorType === "User error"){
              alert("Kindly check your internet connection to retrieve balance.")
        }else {
          alert("An unexpected error has occured on attempt to retrieve balance.")
        }
       },
        setPassDataBalance
      );
       }else if(ErrorType === "Network error" || ErrorType === "User error"){
           alert("Kindly check your internet connection to retrieve balance")
       }else {
        alert("An unexpected error has occured on attempt to retrieve the balance")
       }
            },
             setPassDataBalance
          );
        }else if(ErrorType === "Server error"){
            await GetFunction(
        "balance",
        setLoading,
        SuccessHandler,
       async(ErrorType)=> {
         if(ErrorType === "unauthorised"){
            await GetFunction(
        "balance",
        setLoading,
        SuccessHandler,
        async(ErrorType)=> {
          if(ErrorType === "unauthorised"){
            return setSessionModal(false);
          }else if(ErrorType === "Server error"){
               await GetFunction(
        "balance",
        setLoading,
        SuccessHandler,
       async(ErrorType)=> {
        //if Statements
      //We run again cause the previous one was interrupted by 401
      //Let us re-run server error
      if(ErrorType === "Server error"){
        alert("Failed to retrieve the balance")
      }else if(ErrorType === "unauthorised"){
        return sessionModal(true)
      }else if(ErrorType === "Network error" || ErrorType === "User error"){
       alert("Kindly check your internet connection to retrieve balance")
      }else{
        alert("An Unexpected error occured in attempt to retrieve balance")
      }

       },
        setPassDataBalance
      );
          }else if(ErrorType === "Network error" || ErrorType === "User error"){
            alert("Kindly check your internet connection to retrieve the balance")
          }else{
            alert("An Unexpected error occured in attempt to retrieve balance")
          }
        },
        setPassDataBalance
      );
    }
          else if(ErrorType === "Network error" || ErrorType === "User error"){
            //The operation was interrupted by a network error
            alert("Kindly check your internet connection to retrieve balance.")
         }else {
          //An alien error has occured with the re-run of the "Server error" ErrorType
          alert("An unexpected error occured in attempt to retrieve the balance.")
         }
       },
        setPassDataBalance
      );
        }else if(ErrorType === "Network error" || ErrorType === "User error"){

        }else{
          alert("An unexpected error occured in attempt to retrieve balance.")
        }
      }
      await GetFunction(
        "balance",
        setLoading,
        SuccessHandler,
        FailedHandler,
        setPassDataBalance
      );
    };
                     // Simulate async data loading
                    if((newBalance === "" ||
       newBalance === null ||
        newBalance === undefined) && Data?.ConfirmAcc === "true"){
                        GetBalance();
                        if(GetBalance){
                         setNewBalance(passDataBalance?.data?.data?.data !== undefined
                           ? passDataBalance?.data?.data?.data?.balance : "");
                        }
                      }else{
                        console.log("Create an account to access this feature.")
    
                      }
                      //eslint-disable-next-line
  }, [])
  
 function currencyDropDown() {
    if(showList === false){
    setShowList(true);
    document.querySelector(".decdrop").classList.add("DropIt");
    }else {
     setShowList(false);
     document.querySelector(".decdrop").classList.remove("DropIt");
    }
  }


  return (
    <DashBoardLayout>
      <div className={style.AirtimeTops}>
        <div className={style.airtimeTop}>
         <div
                   style={{
                     background:
                       "#B4BEFA",
                   }}
                  className="min-h-[90px] py-[15px] lg:h-[196px] 
                    md:h-[112.29px] rounded-[6.6px] md:rounded-[11.46px] 
                    lg:rounded-[20px] mx-auto  flex gap-6 justify-between
                     px-[16.51px] md:px-[28.65px] lg:px-[50px]"
                 >
                   <div  className="py-[9.57px] md:py-[16.61px] 
                                   align-middle self-center flex flex-col gap-1.5 w-[70%]">
                     <h2 className="text-[11px] leading-[13px] lg:leading-[30px]
                                        lg:text-[24px] md:text-[13.75px] font-semibold">
                       TRANSFER MONEY TO AREMXYPLUG USER.
                     </h2>
                     <p className="text-[10px] leading-[13px] lg:leading-[25px]
                                        lg:text-[20px] md:text-[11.46px]">
                       Transfer money from your wallets to any 
                       AremxyPlug user wallets for free, no any hidden fee,
                        enjoy!!!
                     </p>
                   </div>
                   <div className="w-[100px] h-[66px] lg:w-[230px] lg:h-[150px]">
                     <img
                       src="./Images/transferImages/flying-coin-notes.png"
                       alt=""
                       className="h-full w-full"
                     />
                   </div>
                 </div>
          <div className="flex text-[#7c7c7c] text-[10px] leading-[26px] items-center gap-[8px] md:text-[12px] lg:text-[20px]">
            <p  className="text-[#7E7E7E] text-[15px] lg:text-[17px]
                       md:text-[13px] md:font-[600] font-[400]">

         Add a user details to save as recipient</p>
            <img
              className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
              src="./Images/dashboardImages/arrowright.png"
              alt="/"
            />
          </div>
          <div className="flex md:justify-start justify-center gap-[7.042px] lg:gap-[12px]">
            <div className="relative">
              <img
                src="/Images/transferImages/man-fold.png"
                className="h-[48px] w-[46.753px] rounded-[48px]
                lg:h-[100px] lg:w-[100px] 
                md:h-[68.801px]  md:w-[68.801px]
                md:rounded-[68.201px] lg:rounded-[100px]"
                alt="profilePic"
              />
            </div>
            {/* Profile text */}
            <div className="flex flex-col justify-center gap-[3.52px] lg:gap-[12px]">
              <p
                className="font-[500] text-[10px] leading-[15px] md:text-[9.389px] md:leading-[12.206px] 
                lg:text-[16px] lg:leading-[20.8px]"
              >
                {Data?.UserFullName}
              </p>
              <p
                className="font-[500] text-[#7C7C7C] text-[10px] leading-[15px]
                md:text-[7.042px] md:leading-[9.154px]
                lg:text-[12px] lg:leading-[15.6px]"
              >
               {Data?.UserEmail}
              </p>
            </div>
          </div>
          {/* =====================Country========================= */}
          {/* <div className={styles.inputBox}> */}
          <div className="flex flex-col md:w-[50%] w-[100%]
             md:gap-[10px] gap-[5.868px] relative">
            <p  className="text-[#7E7E7E] text-[15px] lg:text-[17px]
                       md:text-[13px] md:font-[600] font-[400]">
                Select Country
            </p>
            <div
                    onClick={() => setShowList(!showList)}
                     className={`mt-2 md:mt-0 rounded-[10px] 
     md:rounded-0 p-[20px] md:p-0 text-[13.2px]
      sm:p-3 sm:text-lg flex justify-between pt-[8.803px] 
     pb-[7.794px] pr-[13px] pl-[10.876px] font-[400] 
     leading-[10.4px] md:text-[11px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] 
    md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] 
    lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  
    items-center cursor-pointer outline-0 border-[0.24px]
     lg:border-[0.4px] w-full h-[40.927px] md:h-[35px] lg:h-[50px]  px-[11px] md:px-[6px] lg:px-[10px]  self-center ${
      isDarkMode
        ? "bg-black text-white border border-white"
        : "border border-[#0003] border-[#9C9C9C] text-[#7C7C7C]"
    }`}>
                    {selected ? (
                    <div className="flex gap-[7px] items-center">
                        <img
                        className="w-[13px] h-[13px] lg:w-[29px] lg:h-[29px]"
                        src={flag}
                        alt=""
                        />
                        <p className="text-[10px] font-extrabold lg:text-[14px]">
                        {mainCountry}
                        </p>
                    </div>
                    ) : (
                    <p></p>
                    )}
                    <img
                    className="decdrop absolute left-[92%] lg:left-[94%]
              self-center align-middle md:h-[14.038px] md:w-[14.038px] 
      lg:h-[24px] lg:w-[24px] w-[14px] h-[16px]"
                    src="./Images/dashboardImages/arrow-down2.png"
                    alt="dropdown"
                    />
                </div>
            {errors.country && (
              <div className="text-[12px] text-red-500 italic lg:text-[14px]">
                {errors.country}
              </div>
            )}
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
                                                               setMainCountry( methodOption.id === 1
                                                                     ? methodOption.method
                                                                     : mainCountry === "Nigeria" &&
                                                                       methodOption.id !== 1
                                                                     ? "Nigeria"
                                                                     : ""
                                                                 )
                                                                 setSelected(true)
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
                                                                   currencyDropDown()
                                                                //            setCurrencyImageState(
                                                                //    methodOption.id === 1
                                                                //      ? methodOption.flag
                                                                //      : currencyImage
                                                                //  );
                                                                setFlag(methodOption.flag);
                                                               
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
                                 
                                                             
                                                               
                                                                 {methodOption.method +
                                                                   " " +
                                                                   methodOption.balance}
                                                               
                                                             </div>
                                                           );
                                                         })}
              </div>
            )}
          </div>
          <div className="flex flex-col gap-[15px] md:flex-row lg:gap-[30px]">
            {/* =====================Email or Username=================== */}

            <div className="flex flex-col md:w-[50%] w-full md:gap-[10px] gap-[5.868px]">
           <p className="text-[#7E7E7E] text-[15px] lg:text-[17px]
                       md:text-[13px] md:font-[600] font-[400]">
            Email or Username
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
    className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-[20px] 
     md:p-0 text-[13.2px]  sm:p-3 sm:text-lg flex justify-between pt-[8.803px] 
     pb-[7.794px] pr-[13px] pl-[10.876px] font-[400] 
     leading-[10.4px] md:text-[11px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] 
    md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] 
    lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  
    items-center cursor-pointer outline-0 border-[0.24px]
     lg:border-[0.4px] w-full h-[40.927px] md:h-[35px] lg:h-[50px]  px-[11px] md:px-[6px] lg:px-[10px]  self-center ${
      isDarkMode
        ? "bg-black text-white border border-white"
        : "border border-[#0003] border-[#9C9C9C] text-[#7C7C7C]"
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
            <div className="flex flex-col md:w-1/2 w-full md:gap-[10px] gap-[5.868px]">
                <p
            // className="text-[10px] font-extrabold md:text-[14px] lg:text-[20px]"
          className="text-[#7E7E7E] text-[15px] lg:text-[17px]
                       md:text-[13px] md:font-[600] font-[400]"
          >
            Phone Number
          </p>
             <div
            // className="border rounded-[5px] h-[25px] flex justify-between items-center p-1 lg:h-[45px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]"
          className="relative flex flex-col h-full 
            gap-[3px] lg:gap-[5px] w-full ">
            <input
           //   onChange={handleMainInputChange}
              name="userPhoneNumber"
              maxLength={11}
              readOnly
              value={fetchedResponse?.data?.data?.userDetails?.phone !== undefined ?
                fetchedResponse?.data?.data?.userDetails?.phone : "" }
              className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-[20px] 
     md:p-0 text-[13.2px]  sm:p-3 sm:text-lg flex justify-between pt-[8.803px] 
     pb-[7.794px] pr-[13px] pl-[10.876px] font-[400] 
          leading-[10.4px] md:text-[11px] md:leading-[12.206px
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] 
    md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] 
    lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  
    items-center cursor-pointer outline-0 border-[0.24px]
     lg:border-[0.4px] w-full h-[40.927px] md:h-[35px] lg:h-[50px]  px-[11px] md:px-[6px] lg:px-[10px]  self-center ${
      isDarkMode
        ? "bg-black text-white border border-white"
        : "border border-[#0003] border-[#9C9C9C] text-[#7C7C7C]"
    }`}
              type="number"
            />
            <img
             className=" absolute left-[90%] top-[40%] md:top-[30%]
                         lg:left-[94%] self-center align-middle md:h-[14.038px] md:w-[14.038px] 
      lg:h-[24px] lg:w-[24px] w-[14px] h-[16px] "
              src="/Images/transferImages/call.png"
              alt="dropdown"
            />
          </div>
              {errors.userPhoneNumber && (
                <div className="text-[12px] text-red-500 italic lg:text-[14px]">
                  {errors.userPhoneNumber}
                </div>
              )}
            </div>
          </div>
          {save && (
            <Modal>
              <div
                className={`${style.successfulFour} ${
                  toggleSideBar
                    ? "md:w-[45%] lg:ml-[20%] lg:w-[40%]"
                    : "lg:w-[40%]"
                } md:w-[45%] w-[90%] overflow-auto`}
              >
                <div className="flex justify-between items-center mx-[3%] my-[2%] lg:my-[1%]">
                  <img
                    onClick={() => setSave(false)}
                    className=" w-[18px] h-[18px] md:w-[35px] md:h-[35px] lg:w-[35px] lg:h-[25px]"
                    src="/Images/login/arpLogo.png"
                    alt=""
                  />

                  <img
                    onClick={() => setSave(false)}
                    className=" w-[18px] h-[18px] md:w-[35px] md:h-[35px] lg:w-[29px] lg:h-[29px]"
                    src="/Images/transferImages/close-circle.png"
                    alt=""
                  />
                </div>
                <hr className="h-[6px] bg-[#04177f] border-none mt-[2%] md:mt-[2%] md:h-[10px]" />
                <h2 className="text-[12px] my-[5%] text-center md:my-[3%] md:text-[15px] lg:my-[2%] lg:text-[16px]">
                  Please Confirm!!!
                </h2>
                <div className="bg-[#FFF0BA] mx-5 rounded-md h-[55px] my-5 flex justify-between items-center px-[4%] md:h-[75px] lg:h-[85px]">
                  <p className="text-[9px] text-center mx-auto w-[280px] md:text-[14px] md:w-[92%] lg:text-[14px] lg:w-[100%]">
                    Are you sure you want to add this user? Kindly re-confirm
                    the identity, and be informed any funds transfer to any
                    strange accounts cannot be reversed.
                  </p>
                </div>
                <div className="flex flex-col gap-2 lg:gap-4">
                  <div className="flex text-[10px] md:text-[12px] w-[90%] mx-auto justify-between  lg:text-[14px]">
                    <p className="text-[#0008]">Country</p>
                    <span>{mainCountry}</span>
                  </div>
                  <div className="flex text-[10px] md:text-[12px] w-[90%] mx-auto justify-between  lg:text-[14px]">
                    <p className="text-[#0008]">Customer Name</p>
                    <span>{fetchedResponse?.data?.data?.userDetails?.full_name}</span>
                  </div>
                  <div className="flex text-[10px] md:text-[12px] w-[90%] mx-auto justify-between  lg:text-[14px]">
                    <p className="text-[#0008]">Email or Username</p>
                    <span>{transferValue}</span>
                  </div>
                  <div className="flex text-[10px] md:text-[12px] w-[90%] mx-auto justify-between  lg:text-[14px]">
                    <p className="text-[#0008]">Phone Number</p>
                    <span>{fetchedResponse?.data?.data?.userDetails?.phone !== undefined ?
               `+${fetchedResponse?.data?.data?.userDetails?.phone}` : ""}</span>
                  </div>
                </div>

                <button
                  onClick={AddRecipientPostFunction}
                  className={`bg-[#04177f] my-[5%] w-[88%] flex justify-center items-center mx-auto cursor-pointer text-[14px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[16px] lg:text-[14px] lg:w-[163px] lg:h-[38px] lg:mt-[8%]`}
                >
                  Confirmed
                </button>
              </div>
            </Modal>
          )}
          {confirm && (
            <Modal>
              <div
                className={`${style.inputPin} ${
                  toggleSideBar
                    ? "md:w-[45%] lg:w-[40%] lg:ml-[20%]"
                    : "lg:w-[40%]"
                } md:w-[55%] w-[90%]`}
              >
                <img
                  onClick={() => setConfirm(false)}
                  className="absolute cursor-pointer right-2 w-[18px] h-[18px] my-[1%] md:w-[35px] md:h-[35px] lg:w-[25px] lg:h-[25px]"
                  src="/Images/transferImages/close-circle.png"
                  alt=""
                />
                <hr className="h-[6px] bg-[#04177f] border-none mt-[8%] md:mt-[8%] md:h-[10px]" />
                <h2 className="text-[12px] font-bold my-[5%] text-center md:my-[3%] md:text-[15px] lg:my-[2%] lg:text-[16px]">
                  Successful
                </h2>
                <img
                  className="w-[50px] h-[50px] mx-auto lg:w-[70px] lg:h-[70px]"
                  src="./Gif/checkMarkGif.gif"
                  alt="/"
                />
                <p className="text-[9px] text-[#2ED173] md:text-[16px] font-bold text-center my-[4%] lg:my-[%]">
                  New User account has been added successfully.
                </p>

                <Link to="/to-aremxyplug">
                  <button
                    onClick={handleConfirm}
                    className={`bg-[#04177f] mt-[10%] w-[88%] flex justify-center items-center mx-auto cursor-pointer text-[14px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[16px] lg:text-[14px] lg:w-[163px] lg:h-[38px] lg:mt-[20%]`}
                  >
                    Continue
                  </button>
                </Link>
              </div>
            </Modal>
          )}
          <div className={style.containFlex3}>
            <button
              className={`${
                fetchedResponse?.data?.data?.userDetails?.username === undefined ? "bg-[#0008]" : "bg-[#04177f]"
              } w-full flex justify-center items-center mr-auto cursor-pointer text-[14px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[20px] lg:text-[16px] lg:h-[38px] lg:my-[4%]`}
              onClick={()=> {
                setSave(true);
              }}
            >
              Save User
            </button>
          </div>
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
                  <button className={styled.btnOkX} onClick={refresh}>
                    Okay
                  </button>
                </div>
              </div>
            </Modal>
          )}
          {loading && (
            <Modal>
           <Loader/>
            </Modal>
          )}
          {sessionModal && (
            <HandleUserSession/>
          )}
        </div>
        <div className={style.help}>
          <h2>You need help?</h2>
          <Link to={`/ContactUs`} className={style.btnContact}>
            Contact Us
          </Link>
        </div>
      </div>
    </DashBoardLayout>
  );
};

export default AremxyAddUser;
