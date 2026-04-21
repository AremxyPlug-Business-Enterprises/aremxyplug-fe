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
        setMessageTransfer,
      transferAmount,
      setTransferAmount,
       setTransferResponse,
       setTransferValue,
       transferResponse,
       messageTransfer,
       isDarkMode,
       authenticationOpen,
       setNetworkIssue,
       networkIssue,
          setSessionModal,
          sessionModal
      } =
    useContext(ContextProvider);
  const [inputPin, setInputPin] = useState("");
  const [transactSuccessToOtherBank, setTransactSuccessToOtherBank] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
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
const ExitTheDoneButton = ()=> {
  //Shoukd Include the Fields you would like to clear
  //This happens either if the response returns a status that does not return a receipt or
  //The response returns a status either success or failed which returns the fields to check
  //The receipts, but also include the done button, if the user does not want to bother
  setTransferAmount(0);//Check if this should be an empty string or number
  setMessageTransfer("");
setTransferResponse({});
setFailedPopup(false);
setTransferValue("");


}
const ReceiptButton =()=> {}//Only if the transferResponse returns an status "success" | "failed"


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
      if(sessionModal) return;
      if(!sessionModal) return setSessionModal(true)
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
        //  setTransferErrorType("Failed to process your request, try again some other time")
     setFailedPopup(true);
       setOtherInputPinPopUp(false);
         setInputPin("")
        }else if(ErrorType === "Network error" || ErrorType === "User error"){
          setTransferErrorType("An internet connection error");
      setFailedPopup(true);
       setOtherInputPinPopUp(false);
         setInputPin("")
        }else if(ErrorType === "Bad request"){
          setTransferErrorType("Bad request Error");
      setFailedPopup(true);
       setOtherInputPinPopUp(false);
         setInputPin("")
        }else {
        setFailedPopup(true);
          setTransferErrorType("Unexpected error had occured");
           setOtherInputPinPopUp(false);
         setInputPin("")
        }
      }
      
      await PostFunction(
        Path,
        setIsLoading,
        requestData,
        successHandler,
        FailedHandler,
         setTransferResponse,
         setNetworkIssue
      );
    };
  
    const setFailedConfig= async(ErrorType)=> {
      if(ErrorType === "unauthorised"){
     if(sessionModal) return;
     if(!sessionModal) return setSessionModal(true)
   //Handling of user error or network error for the general
   //  conditional statement under the setPinFailed
  }else if(ErrorType === "Server error"){
     alert("PinVerification Failed")
      }else if( ErrorType === "User error"
    || ErrorType === "Network error" ){
   if(networkIssue) return;
      if(!networkIssue) setNetworkIssue(true)
  }
    }

    //The first run of the verifyTransPin
    await VerifyTransPin(
      inputPin,
       setFailedConfig,
      setIsLoading,
      setErrorMessage,
    DstvHandler,
    setNetworkIssue
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
              <div className={`flex flex-col lg:mb-[0px]  mb-[50px]
         lg:h-[350px] overflow-y-scroll h-[300px] bvnQuery  ${
                      toggleSideBar ? "md:w-[45%] lg:w-[40%]  " : "lg:w-[40%]"
                    } md:w-[55%] w-full   ${isDarkMode ? "text-white bg-black border-[1px] border-white rounded-[10px]" : "text-black bg-white rounded-[10px]"}`}
              >
                <div className="pr-3 lg:pr-2 py-[5px] 
                flex justify-end">
                  <img
                    onClick={cancelInputDstv}
                     className="w-[25px] h-[25px]  md:w-[35px] md:h-[35px] 
                lg:w-[25px] lg:h-[25px]"
                    src={"/Images/transferImages/close-circle.png"}
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
                    <div className="w-full justify-center flex items-center  gap-[10px]">
                      <OtpInput
                        value={inputPin}
                        inputType= {"tel"}
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
                         <input {...props} className={`inputOTP text-base mx-[2px] 
                              ${isFocused ? 'focused' : ''} ${isVisible ? 'otp-visible' : 'otp-hidden'}`} onFocus={handleFocus}
                                           onBlur={handleBlur}
                                       
                                     
                             style={{
                               ...props.style,
                               // Extra safety: force the color to stay consistent
                               color: isDarkMode ? "#ffffff" : "#000000",
                             }}
                           />
                         )}
                       />
                     
                       <div className="cursor-pointer" onClick={()=>  toggleVisibility()}>
                         {isVisible ? (
                           <AiFillEye className={isDarkMode ? "text-white" : "text-black"} />
                         ) : (
                           <AiFillEyeInvisible className={isDarkMode ? "text-white" : "text-black"} />
                         )}
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
                  onClick={VerifyPinHandler}
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

       {/* Failed Transaction Popup */}
            {failedPopup && (
              <Modal>
                <div className={`w-[90%] md:w-[50%] lg:w-[35%] mx-auto 
                 rounded-lg overflow-hidden
                  ${isDarkMode ? "bg-black border-[1px] rounded-[7px] border-white": "bg-white"}`}>
                  <div className="flex justify-between items-center p-4">
                    <img
                      onClick={() => setFailedPopup(false)}
                      className={`w-6 h-6  `}
                      src="/Images/login/arpLogo.png"
                      alt="Logo"
                    />
                    <img
                      onClick={() => setFailedPopup(false)}
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
                      {transferErrorType}
                    </p>
                    {transferResponse?.data?.status  ?
                     (
                    <div className="flex gap-[10px] justify-between w-full px-[10px]">
                      <button
                        onClick={() => ExitTheDoneButton()}
                        className="bg-[#04177f] w-[50%] max-w-xs mx-auto py-2
                 text-white rounded-md font-medium"
                      >
                        Done
                      </button>
                      <button
                        onClick={() => {
                          ReceiptButton();
                        }}
                        className={`w-[50%]  max-w-xs 
                        mx-auto py-2 
                 rounded-md font-medium ${isDarkMode ? "text-blue-900 bg-white border-[0.2px] rounded-[10px]" :  "bg-white border-[0.2px]  rounded-[2px] text-black border-blue-900"}`}
                      >
                        Receipt
                      </button>
                    </div>
               
                      ): (
                         <button
                        onClick={() => ExitTheDoneButton()}
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
        
      
      />
    </div>
  );
};
