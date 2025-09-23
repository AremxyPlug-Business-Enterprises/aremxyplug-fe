import React from "react";
import { Modal } from "../../../../Screens/Modal/Modal";
import OtpInput from "react-otp-input";
import { useContext } from "react";
import { ContextProvider } from "../../../../Context";
import { useState } from "react";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { AremxyMainSuccess } from "./AremxyMainSuccess";
import { VerifyTransPin, PostFunction, HandleUserSession} from "../../../../ApiCollection.jsx/ApiBuck";
import { Loader } from "../../../../Loader/Loader";
import { Link } from "react-router-dom";

export const MainInputPinPop = ({fetchedResponse}) => {
  const {
     toggleSideBar,
     toggleVisibility,
      isVisible, 
       otherInputPinPopUp,
        setOtherInputPinPopUp,
      transferAmount,
       setTransferResponse,
       messageTransfer,
       isDarkMode,
       authenticationOpen
      } =
    useContext(ContextProvider);

  const [inputPin, setInputPin] = useState("");
  const [transactSuccessToOtherBank, setTransactSuccessToOtherBank] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [sessionModal, setSessionModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);
    const [transferErrorType, setTransferErrorType] = useState("");
    const [failedPopup, setFailedPopup] = useState(false);
  

     const [isFocused, setIsFocused] = useState(false);
        const handleFocus = () => {
          setIsFocused(true);
        };
      
        const handleBlur = () => {
          setIsFocused(false);
        };
  
        const cancelInputDstv = () => {
          setOtherInputPinPopUp(false);
          window.location.reload()
        }



const amountUsable  = transferAmount === "" || transferAmount?.length > 1? transferAmount?.slice(1)?.replaceAll(",", "") : "";

const transformAmountToNumber = Number(amountUsable)
  const VerifyPinHandler = async () => {
    //Recipient fUllname
    const recipentFullname = fetchedResponse?.data?.data?.userDetails?.full_name !== undefined 
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

const DstvHandler = async () => {
const requestData = {
         amount : transformAmountToNumber,
         reason : messageTransfer,
         name :  recipentFullname,
         email : recipientEmail,
         phone : recipientPhone,
         username : recipientUsername
};

      const Path = "bank/trf-aremxy";
      const successHandler = () =>{
      setTransactSuccessToOtherBank(true);
        setOtherInputPinPopUp(false);
          setInputPin("")
      //  handleReceivedData()
      }
      const FailedHandler = async(ErrorType) =>{
        //Then for the Failed Handler all we have to do is create a state
        // to handle which set to the ErrorType then placed into the faiked popup
        if(ErrorType === "unauthorised"){
         await PostFunction(
        Path,
        setIsLoading,
        requestData,
        successHandler,
        (ErrorType)=> {
          if(ErrorType === "unauthorised"){
            return setSessionModal(true);
          }
        },
        setTransferResponse
      );
        }else if(ErrorType === "Server error"){
          //Why a repition did not occur here,
          //We dont want it to be only about User experience here,
          //There are several things that could happen to the backend,
          // and there is also a possibility that the server was able to process and 
          //initiate the transaction but still returned 500,
          //so we need to prevent the case of carrying two transaction for a user,
          //which doesn't only affect us through service of the platform we are using,
          //but also unrest and panic to the user and the amount for purchase and 
          //been removed twice without a result or successful output.
          setTransferErrorType("Failed to process your request, try again some other time")
       setFailedPopup(true);
       setOtherInputPinPopUp(false);
         setInputPin("")
        }else if(ErrorType === "Network error" || ErrorType === "User error"){
          setTransferErrorType("An internet connection error");
          setFailedPopup(true);
       setOtherInputPinPopUp(false);
         setInputPin("")
        }else {

        }
      }
      
      await PostFunction(
        Path,
        setIsLoading,
        requestData,
        successHandler,
        FailedHandler,
         setTransferResponse
      );
    };
  
    const setFailedConfig= async(ErrorType)=> {
      if(ErrorType === "unauthorised"){
        //The concept behind this code : A user session is regulated by tokens,
        // the moment we notice it expires we try to get the token for the user before
        // a transaction completed(i.e we get it during a transaction process), when unauthorised
        //we get the necessary tokens, then re-run the transaction, there are different errors that 
        //could occur, when re-running such as: it could return same unauthorised errorType,
        //a server error and even network connection issue or an unexpected error
        //hence, the reason we account for other types of errors even while re-running,
        //due to the inpredictability of the output of the transaction.
    await VerifyTransPin(
      inputPin,
       async(ErrorType)=> {
        if(ErrorType === "unauthorised"){
          return setSessionModal(true)
        }else if(ErrorType === "Server error"){
         await VerifyTransPin(
      inputPin,
      (ErrorType)=> {
        if(ErrorType === "Server error"){
        alert("Failed to process your request, try again some other time")
        }else if(ErrorType === "Network error" || ErrorType === "User error"){
          alert("Kindly check your internet connection.")
        }else{
          alert("Failed to process your request, try some other time.")
        }
      },
      setIsLoading,
      setErrorMessage,
    DstvHandler,
   );
        }
       },
      setIsLoading,
      setErrorMessage,
    DstvHandler,
   );
   //Handling of user error or network error for the general
   //  conditional statement under the setPinFailed
  }else if(ErrorType === "Server error"){
    //The server could return a 500 then be successful
    //  on next call, so let us try twice.
     await VerifyTransPin(
      inputPin,
      async(ErrorType)=> {
if(ErrorType === "Server error"){
 alert("Failed to process your request try some other time.")
}else if(ErrorType === "unauthorised"){
// Error When "Server error" occured on first try then the server notices 
// an "unauthorised" ErrorType.
   await VerifyTransPin(
      inputPin,
       (ErrorType)=> {
        //handling of ErrorTypes after unauthorisation occurs in server error re-try
        if(ErrorType === "unauthorised"){
          return setSessionModal(true);
        }else if(ErrorType === "Server error"){
          alert("The server is currently experiencing a downtime, try again some other time.")
        }else if(ErrorType === "User error" || ErrorType === "Network error"){
          alert("Kindly check your internet connection")
        }
       },
      setIsLoading,
      setErrorMessage,
    DstvHandler,
   );
   //End of the "unauthorised" ErrorType handling on "server error"
   //  ErrorType re-run.

}else if(ErrorType === "User error" || ErrorType === "Network error"){
  //A network error occured  during trying to re-try the code on server error
  alert("Kindly check your internet connection");
}
      },
      setIsLoading,
      setErrorMessage,
    DstvHandler,
   );
       //The general error message on an "Network error, User error" ErrorType
      }else if( ErrorType === "User error"
    || ErrorType === "Network error" ){
  alert("Kindly check your internet connection")
  }
    }

    //The first run of the verifyTransPin
    await VerifyTransPin(
      inputPin,
       setFailedConfig,
      setIsLoading,
      setErrorMessage,
    DstvHandler,
   );
  }


  return (
    <div>
      {" "}
      {otherInputPinPopUp && (
        <Modal>
          <div className="flex items-end justify-center
             lg:items-center lg:justify-center 
   w-[100%] lg:px-[0px] rounded-[10px] h-[100%] px-[15px]">
        <div className={`  flex flex-col lg:mb-[0px]  mb-[50px]  '
         lg:h-[350px] overflow-scroll h-[300px] bvnQuery  ${
                      toggleSideBar ? "md:w-[45%] lg:w-[40%]  " : "lg:w-[40%]"
                    } md:w-[55%] w-full   ${isDarkMode ? "text-white bg-black border-[1px] border-white rounded-[10px]" : "text-black bg-white rounded-[10px]"}`}
            >
            <div className="pr-3 lg:pr-2 py-[5px] flex justify-end">
            <img  onClick={cancelInputDstv}
                className="w-[25px] h-[25px]  md:w-[35px] md:h-[35px] 
                lg:w-[25px] lg:h-[25px]"
                src="/Images/transferImages/close-circle.png"
                alt=""
              />
            </div>
            <div className="h-[6px] bg-[#04177f] border-none md:h-[10px]" />
            <div className="flex flex-col w-full  justify-center 
             py-[15px] lg:py-[0px]
             h-[100%] gap-[15px] ">
            <p className="font-extrabold text-[12px] leading-[16px] 
            pb-[20px]
             md:text-[10px]
             lg:text-[16px] text-center 
            ">Input PIN to complete transaction</p>
            <div className="flex flex-col items-center lg:gap-[0px]
             gap-[5px] font-extrabold">
              <div className=" flex items-center  gap-[10px]">
                {" "}
                {isVisible ? (
                  <OtpInput
                    value={inputPin}
                    inputType="tel"
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
                    }
                }
                    
                    renderInput={(props) => (
                      <input {...props} className={`inputOTP mx-[2px] 
                        ${isFocused ? 'focused' : ''}`} onFocus={handleFocus}
                      onBlur={handleBlur}/>
                    )}
                  />
                ) : (
                  <div className="text-[24px] md:text-[24px] mt-1">
                    * * * *{" "}
                  </div>
                )}
                <div
                  className="text-[#0003]"
                  onClick={toggleVisibility}
                >
 {isVisible ? <AiFillEye className={`w-[16px] h-[16px]
                  lg:w-[24px] lg:h-[24px]  ${isDarkMode ? " text-white" : "text-black" }`}/> : <AiFillEyeInvisible  
                    className={`w-[16px] h-[16px] lg:w-[24px] lg:h-[24px]
                 ${isDarkMode ? " text-white" : "text-black" }`}/>}
                </div>
              </div>
              <Link  to = {{
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
              text-center leading-[18px] lg:leading-[20px]   text-red-600">
                 Incorrect Pin
              </p>
            ) 
            }
             <div className="flex flex-col gap-[10px] px-[20px]" >
            <button
              onClick={VerifyPinHandler}
              disabled={inputPin.length !== 4 ? true : false}
              className={`${
                inputPin.length !== 4 && !isDarkMode ? "bg-[#0008]" : 
                 inputPin.length !== 4 && isDarkMode ? "bg-gray-300" : "bg-[#04177f]"
              }  w-full  md:w-[94px] lg:w-[163px] flex 
              justify-center items-center mx-auto cursor-pointer text-[12px]
               md:text-[10px] lg:text-[16px] font-extrabold h-[50px] 
               lg:h-[38px] md:h-[22px] text-white rounded-[6px] md:rounded-[6.88px]
                lg:rounded-[12px]`}
            >
              Purchase
            </button>
            {/* {errorMessage && (
              <p className="text-[10px] leading-[16px] font-[400]
              lg:text-[12px] lg:leading-[18px] lg:font-[500] text-red-500">
                Incorrect Pin
                </p>

            )} */}
            </div>
             </div>
           
        </div>
        </div>
        </Modal>
      )}
       {isLoading && (
        <Modal>
              <Loader/>
              </Modal>
            )}
            {sessionModal && (
           <HandleUserSession/>
            )}
      <AremxyMainSuccess
        transactSuccessToOtherBank={transactSuccessToOtherBank}
        setTransactSuccessToOtherBank={setTransactSuccessToOtherBank}
        emailUsername={fetchedResponse?.data?.data?.data?.userDetails?.username}
        userPhoneNumber={fetchedResponse?.data?.data?.data?.userDetails?.phone}
      />
    </div>
  );
};
