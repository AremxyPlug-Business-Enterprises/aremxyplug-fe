import { GetLocalStorage, SetLocalStorage } from "../LocalStorage/LocalStorage";
import { RemoveLocalStorage } from "../LocalStorage/LocalStorage";
import axios from "axios";
import { BASE_URL } from "../../config";
import { Modal } from "../Screens/Modal/Modal";
import { useNavigate } from "react-router-dom";
import { BalanceLoading } from "../Loader/Loader";
import { useState, useEffect, useRef, useContext} from "react";
import { ContextProvider } from "../Context";
import { X } from 'lucide-react';



//To set the different states for  virtual account

export const SignInVirtualAccountState = (
  customerDetail,
  virtualAccCreated,
  setBankNameState,
  setAccountNameState,
  setAccountNumberState
) => {
  const { email, full_name, phone, username, id } = customerDetail;
  const { bank_name, account_name, account_no } = virtualAccCreated;

  SetLocalStorage(
    email,
    full_name,
    phone,
    username,
    bank_name,
    account_name,
    account_no,
    id
  );
  //Checking if Virtual account is true

  if (
    bank_name?.length > 1 &&
    account_name?.length > 1 &&
    account_no?.length > 1
  ) {
    GetVirtualAccountValue(
      virtualAccCreated,
      setBankNameState,
      setAccountNameState,
      setAccountNumberState
    );
  }
};

export const GetVirtualAccountValue = (
  virtualAccCreated,
  setBankNameState,
  setAccountNameState,
  setAccountNumberState
) => {
  const { bank_name, account_name, account_no } = virtualAccCreated;
  const trimAccountName 
  = account_name?.includes("AP/") && account_name?.length 
  ? account_name?.slice(3) : account_name?.length && account_name ? account_name : ""
  if (virtualAccCreated) {
    setBankNameState(bank_name);
    setAccountNameState(trimAccountName);
    setAccountNumberState(account_no);
  }
};

//Setting the bank Details after the creation of virtual accounts
export const InActionVirtualAccountState = (
  virtualAccCreated,
  setBankNameState,
  setAccountNameState,
  setAccountNumberState
) => {
  const { bank_name, account_no, account_name } = virtualAccCreated;
  //LocalStorage Getting
  const email = JSON.parse(localStorage.getItem("userEmail"));
  const phone = JSON.parse(localStorage.getItem("userPhone"));
  const full_name = JSON.parse(localStorage.getItem("userFullName"));
  const username = JSON.parse(localStorage.getItem("aremxyUserName"));
  const id = JSON.parse(localStorage.getItem("aremxyUserId"));
  //Checking if Virtual account is true

  if (bank_name?.length > 1) {
    GetVirtualAccountValue(
      virtualAccCreated,
      setBankNameState,
      setAccountNameState,
      setAccountNumberState
    );

    SetLocalStorage(
      email,
      full_name,
      phone,
      username,
      bank_name,
      account_name,
      account_no,
      id
    );
  }
};

//ws Socket


//Modal For Application

 // Or any icon library you use

export const CustomAlert = ({ message, type , onClose }) => {
  // Auto-close after 4 seconds
  useEffect(() => {
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  // Dynamic colors based on message type
  const statusStyles = {
    success: "bg-green-50 border-green-500 text-green-800",
    error: "bg-red-50 border-red-500 text-red-800",
  info: "bg-blue-50 border-blue-500 text-blue-800"
  };

  return (
    <div className={`fixed top-5 right-5 z-[9999] flex items-center justify-between 
      w-[320px] p-4 rounded-lg border-l-4 shadow-lg animate-in fade-in slide-in-from-right-4
      ${statusStyles[type]}`}>
      
      <p className="text-sm font-medium">{message}</p>
      
      <button onClick={onClose} className="ml-4 hover:opacity-70 transition-opacity">
        <X size={18} />
      </button>
    </div>
  );
};

//Unverified SignUp
export const UnverifiedSignUp = ()=> {
  const { setUnverifiedSignupInfo, setVerification} = useContext(ContextProvider);
  const navigate = useNavigate()
  const RefusalToProceed =()=> {
  setUnverifiedSignupInfo(false);
}



const ContinueSignUp = ()=> {
  navigate("/signUp")
   setUnverifiedSignupInfo(false);
  setVerification(true)
}


  return (
      <Modal>
                  <div className="w-full flex  justify-center items-center">
                <div className ="flex flex-col justify-center items-center py-[20px] px-[12px] gap-[20px] w-[80%] md:w-[60%] lg:w-[30%] md:h-[300px] bg-white rounded-[10px]
                 lg:rounded-[20px]">
                  <p className ="text-[14px] font-[400] leading-[18px]
                   text-black lg:text-[16px] lg:leading-[22px] ">
                    We noticed you did not complete your sign up
                    process, would you still like to proceed?</p>
                 
                  <div className="flex gap-[20px] justify-center">
                    <button onClick ={()=> {
                      ContinueSignUp()
                    }}
                     className="bg-[#04177f]  cursor-pointer mt-[5%] mx-auto w-[80px] py-[8px] flex justify-center items-center text-[#ffffff] 
                      text-[10px] font-[500] lg:font-[600] rounded-md md:w-[95px] md:h-[26px]
                       md:p-[2%] lg:w-[113px] lg:h-[38px] lg:text-[13px]">
                         Yes
                    </button>
                    <button onClick ={()=> {
                        RefusalToProceed()
                        RemoveLocalStorage();
                    }}
                     className="bg-red-500  cursor-pointer mt-[5%] mx-auto w-[80px] py-[8px] flex justify-center items-center text-[#ffffff] 
                      text-[10px] font-[500] lg:font-[600] rounded-md md:w-[95px] md:h-[26px]
                       md:p-[2%] lg:w-[113px] lg:h-[38px] lg:text-[13px]">
                      No
                    </button>
                  </div>
                  </div>
                  </div>
                 </Modal>
  )
}
  




  // A reusable component to handle user session management.
  export const HandleUserSession = ({sec, setSec})=> {
    const { setSessionExpiration, setOpenTaskBar, isDarkMode}= useContext(ContextProvider)
     setOpenTaskBar(false)
    const holdSecRef = useRef(null);
   
    useEffect(()=> {   
    if(holdSecRef.current) return clearInterval(holdSecRef.current)
    if(sec > 0){
     holdSecRef.current = setInterval(()=> {
    setSec((prev)=> {
    return prev > 0 ? prev -1 : prev;
      })
     }, 1000)
    }
   return ()=> clearInterval(holdSecRef.current);
  //eslint-disable-next-line
   }, [])

   //Resets the timer on user activity using the event click as an example 
function ResetTimer(e){
    if(!localStorage.getItem("cxccxfd")) return;
  const Reset = 800  *  1000;
    const resetExpiration = Date.now() + Reset;
return localStorage.setItem("SessionExpiration", resetExpiration);
 }
  return (
   
   <div className={`w-full h-full flex-col justify-center items-center flex`}>
    <Modal>
              <div className = {`flex flex-col h-[300px] justify-center items-center
             py-[20px] px-[12px] gap-[20px] w-[90%] md:w-[60%] lg:w-[30%] md:h-[300px] 
              rounded-[10px] lg:rounded-[20px]  
               ${isDarkMode  ? "bg-black border border-white rounded-[10px]" 
               : "bg-white"}`}>
               <div className ="flex flex-col  gap-[20px]">
               <h2 className={`text-[14px] text-center font-[600] leading-[18px]
               text-black lg:text-[16px] lg:leading-[22px]  ${isDarkMode   ? "text-white" : "text-black"}`}>
                  Warning⚠️
                  </h2>
              <p className ={`text-[14px] text-center font-[400] leading-[18px]
               text-black lg:text-[16px] lg:leading-[22px] ${isDarkMode ? "text-white" : "text-black"}`}>
          You are being logged out of your session due to inactivity,
           for your safety we carry this out to reduce or prevent unauthorised access,
           click on "<b>Stay</b>" to avoid being logged out.

    <p className = "text-[14px] font-[700] text-end leading-[20px]" > {sec  > 1 ? `${sec}secs` : `${sec}sec`} </p>
        </p>
        </div>
                <div className = "flex flex-col gap-[10px]  w-full">
            <button onClick ={(e)=> {
                   ResetTimer(e);
                   if(ResetTimer){
                    setSessionExpiration(false);
                   }
                }}
                 className="bg-[#04177f]  cursor-pointer 
                 mx-auto w-full py-[12px] flex justify-center items-center text-[#ffffff] 
               text-[14px] font-[700] rounded-md md:w-[95px] md:h-[26px] 
                   md:p-[2%] lg:w-[113px] lg:h-[38px] lg:text-[13px]">
            Stay
           </button>
        </div>
     </div>
  </Modal>
    </div>
  
  );

  
};

///Login Session =======//
export const InternalLoginSession = ()=> {
  const [password, setPassword] = useState();
  const {setNetworkIssue, networkIssue, setSessionModal, isDarkMode, setAlertCustom} = useContext(ContextProvider)
  const [loading, setLoading] = useState(false)

   const getUsername = JSON.parse(localStorage.getItem("aremxyUserName"));
   const UserEmail = JSON.parse(localStorage.getItem("userEmail"))
   const emailToken = localStorage.getItem("xcss[]");
   const usernameToken = localStorage.getItem("xcss{}");
   const HoldValue = usernameToken && !emailToken ? getUsername : UserEmail;
   if(networkIssue === true){
    setNetworkIssue(false)
   }

 const functionAtSuccess = async(response)=> {
     setAlertCustom({
            message : "Session Renewed Successfully",
            type : "success",
            show : true
           })
  setSessionModal(false);
     setTimeout(()=> {
      window.location.reload();
     },3000)
      }
    const  functionAtFailed =(ErrorType)=> {
     if(ErrorType === "unauthorised" ){
       setAlertCustom({
            message : "Password Incorrect: You are only allowed to attempt 5 times",
            type : "error",
            show : true
           })
     }else if(ErrorType === "Server error"){
        setAlertCustom({
            message : "Failed to Process your request",
            type : "error",
            show : true
           })
     }else if(ErrorType === "User Blocked"){
        setAlertCustom({
            message : "User Blocked: Try again in the next one hour",
            type : "error",
            show : true
           })
     window.location.replace("/Login")
     RemoveLocalStorage()
     }else if(ErrorType === "Network error"){
      setSessionModal(false);
      if(!networkIssue)  setNetworkIssue(true);
     }else {
       setAlertCustom({
            message : "An Unexpected error has occured",
            type : "error",
            show : true
           })
   }
   }
  


const SubmitUserLoginDetails = ()=> {
     const body = {
    username : getUsername,
    password : password
  }
    PostFunction("login",
  setLoading,
  body,
  functionAtSuccess,
  functionAtFailed,
  ()=> {}, setNetworkIssue)
  }


  return (
   
   <div className={`w-full h-full justify-center items-center
   flex`}>
    <Modal>
              <div className={`w-full flex px-[17px] lg:px-[20px] justify-center items-center 
             `}>
            <div className = {`flex flex-col justify-left items-center
             py-[20px] px-[10px] gap-[20px] w-[100%] md:w-[60%] md:h-auto lg:w-[30%]  rounded-[10px]
             lg:rounded-[20px]   ${isDarkMode  ? "bg-black border border-white rounded-[10px]" 
               : "bg-white"}`}>
               <div className ="flex flex-col  gap-[20px]">
               <h2 className={`text-[14px] text-center font-[600] leading-[18px]
               text-black lg:text-[16px] lg:leading-[22px] ${isDarkMode ? "text-white" : "text-black"}`}>
                  Your Session has expired.
                  </h2>
              <p className ={`text-[14px] text-center font-[600] leading-[18px] text-[#04177f]
               lg:text-[16px] lg:leading-[22px] ${isDarkMode  ? "text-white" : "text-[#04177f]"}`}>
           Login to renew your session to continue transactions 
            and operations.
               </p>
               </div>
               <div className="flex flex-col gap-[20px]
                w-[100%] md:w-[50%] lg:w-[100%]">
                {/* Username */}
               <div className="flex flex-col gap-[5px] lg:gap-[10px] ">
               <p className={`text-[14px] text-start font-[600] leading-[18px]
               text-black lg:text-[16px] lg:leading-[22px] ${isDarkMode  ? "text-white" : "text-black"}`}>
                {usernameToken && !emailToken ? "Username" : "Email"}
               </p>
             
               <input
             className={`mt-2 md:mt-0 rounded-[10px] 
        md:rounded-0  md:p-0 text-base
        sm:p-3  flex gap-2 py-[8.803px]
         pr-[13px] pl-[10.876px] font-[400] 
         leading-[10.4px] md:text-[11px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] 
    md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px]
     lg:pl-[10px]  items-center cursor-pointer outline-0 border-[0.24px]
      lg:border-[0.4px] w-full h-[45.927px] md:h-[35px] lg:h-[50px]
       border-[#9C9C9C] px-[11px] md:px-[6px] lg:px-[10px] text-[#7C7C7C] self-center  ${
      isDarkMode
        ? "bg-black text-white border border-white"
        : "hover:bg-[#EDEAEA]"
    }`}
  readOnly
  value={HoldValue}
   type="text" />
            </div>
                {/* Password */}
               <div className="flex flex-col gap-[5px] lg:gap-[10px] ">
              <p className={`text-[14px] text-start font-[600] leading-[18px]
               text-black lg:text-[16px] lg:leading-[22px] ${isDarkMode  ? "text-white" : "text-black"}`}>
                Password
               </p>
             
               <input
                className={`mt-2 md:mt-0 rounded-[10px] 
        md:rounded-0  md:p-0 text-base
        sm:p-3  flex gap-2 py-[8.803px]
         pr-[13px] pl-[10.876px] font-[400] 
         leading-[10.4px] md:text-[11px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] 
    md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px]
     lg:pl-[10px]  items-center cursor-pointer outline-0 border-[0.24px]
      lg:border-[0.4px] w-full h-[45.927px] md:h-[35px] lg:h-[50px]
       border-[#9C9C9C] px-[11px] md:px-[6px] lg:px-[10px] text-[#7C7C7C] self-center  ${
      isDarkMode
        ? "bg-black text-white border border-white"
        : "hover:bg-[#EDEAEA]"
    }`}
  placeholder="Your Current Password"

  value={password}
  onChange={(e)=> setPassword(e.target.value)}
                type="password"
               />

               </div>
               </div>
             
              <button onClick ={(e)=> {
                SubmitUserLoginDetails()
                
                }}
         disabled={loading === true}
                 className="bg-[#04177f]  cursor-pointer mt-[5%] mx-auto w-full py-[18px] flex justify-center items-center text-[#ffffff] 
               text-[14px] font-[600] rounded-md md:w-[95px] md:h-[26px]
                   md:p-[2%] lg:w-[113px] lg:h-[38px] lg:text-[13px]"
            >
             {loading === true ? <BalanceLoading/> : "Continue"}
            </button>
          </div>
        </div>
      
      </Modal>
    </div>
  );
};


//RefreshTojen EndPoint
export const refreshToken = async(setNetworkIssue, setSessionModal)=> {
    const setLoading = ()=> {}
  await GetFunction("refresh-token",setLoading, ()=> {
  }, (ErrorType)=> {
    if(ErrorType === "Network error" || ErrorType === "User error"){
     //
      }else if(ErrorType === "Server error"){
    return;
    }else if(ErrorType === "unauthorised"){
    setSessionModal ??   setSessionModal(true) 
    }
  }, ()=> {}, setNetworkIssue ? setNetworkIssue : ()=> {})
}

//============Network issue ============//
export const NetworkPopUp = ({Page})=> {
const {setNetworkIssue, isDarkMode} = useContext(ContextProvider);

  return (
  <div className="`w-full h-full justify-center items-center
   flex">
    <Modal>
    <div className="w-full flex  justify-center items-center">
     <div className = {`flex flex-col justify-center items-center
             py-[20px] px-[12px] gap-[20px] w-[80%] md:w-[60%] lg:w-[30%] md:h-[300px]  rounded-[10px]
             lg:rounded-[20px]   ${isDarkMode  ? "bg-black border border-white rounded-[10px]" 
               : "bg-white"}`}>
         <h2 className={`text-[14px] text-center font-[600] leading-[18px]
               text-black lg:text-[16px] lg:leading-[22px] ${isDarkMode  ? "text-white" : "text-black"}`}>
             No network connection or unstable internet connection
         </h2>
       
         <div className="flex flex-col items-center justify-center gap-2 w-full">
          <p className ={`text-[14px] text-center font-[400] leading-[18px]
               text-black lg:text-[16px] lg:leading-[22px] ${isDarkMode  ? "text-white" : "text-black"}`}>
               Failed to retrieve <span className="font-bold capitalize">{Page}</span> {" "} 
               information 
              </p>
                {!isDarkMode ? (
              <img src={"./Images/NetworkBlack.svg"} className="w-20 h-20" alt="Network Icon" />
                ) : (
                  <img src={"./Images/NetworkWhite.svg"} className="w-20 h-20" alt="Network Icon" />
                )}
              </div>
                <button 
                 onClick = {()=> setNetworkIssue(false)}
                 className="bg-[#04177f]  cursor-pointer mt-[5%] mx-auto 
                  py-[12px] flex justify-center items-center text-[#ffffff] 
 text-[11px] font-[600] rounded-md md:w-[95px] md:h-[26px] w-full
                   md:p-[2%] lg:w-[200px] lg:h-[38px] lg:text-[13px]"
            >
             Okay
                 </button>
     </div>
    </div>
    </Modal>
    </div>
  )
}
// ======  The Restriction-PopUp for Users that doesn't have an account
  export const RestrictionPopUp = ()=> {
     const navigate = useNavigate()
   
    const {setVerificationOpen,
       setProfilePage, 
       setBvnVerificationOpen,
        setIdVerificationOpen, 
        setAccountUpgrade,
      setAuthenticationOpen,
      isDarkMode
     } = useContext(ContextProvider)
     const Data = GetLocalStorage();
     const VerificationNavigationAndState = ()=> {
         setVerificationOpen(true);
       setProfilePage(false);
       setBvnVerificationOpen(false);
        setIdVerificationOpen(true)
        setAccountUpgrade(false)
      setAuthenticationOpen(false)
     navigate("/ProfileSettingMain")
     }
          //id Verification
  // const isDarkMode = localStorage.getItem("darkModeEnabled")
  return (
  <div className={`w-full h-full justify-center items-center
   flex`}>
    <Modal>
     <div className={`w-full flex  justify-center items-center `}>
            <div className = {`flex flex-col justify-center items-center
             py-[20px] px-[12px] gap-[20px] w-[80%] md:w-[60%] lg:w-[30%] md:h-[300px]  rounded-[10px]
             lg:rounded-[20px]   ${isDarkMode ? "bg-black border border-white rounded-[10px]" 
               : "bg-white"}`}>
               <div className ="flex flex-col  gap-[20px]">
               <h2 className={`text-[14px] text-center font-[600] leading-[18px]
               text-black lg:text-[16px] lg:leading-[22px] ${isDarkMode  ? "text-white" : "text-black"}`}>
                   You are restricted from accessing this page.
                  </h2>
             
                {(Data?.ConfirmId === "false" || Data?.ConfirmBvn === "false") 
                || (!Data?.ConfirmId || !Data?.ConfirmBvn) ? (
                   <p className ={`text-[14px] text-center font-[400] leading-[18px]
               text-black lg:text-[16px] lg:leading-[22px] ${isDarkMode  ? "text-white" : "text-black"}`}>
                Your Identity matters, kindly verify
                your user account to continue with smooth operations.
              </p>
                ) : (
                      <p className ={`text-[14px] text-center font-[400] leading-[18px]
               text-black lg:text-[16px] lg:leading-[22px] ${isDarkMode  ? "text-white" : "text-black"}`}>
                 Create an account to access this feature,
              navigate to dashboard to generate an account.
              </p>
                )}
            
          
               </div>
             
             
               {(Data?.ConfirmId === "false" || Data?.ConfirmBvn === "false")
               || (!Data?.ConfirmId || !Data?.ConfirmBvn)
               ?(
                 <button 
                 onClick = {()=> VerificationNavigationAndState()}
                 className="bg-[#04177f]  cursor-pointer mt-[5%] mx-auto w-full
                  py-[12px] flex justify-center items-center text-[#ffffff] 
 text-[11px] font-[600] rounded-md md:w-[95px] md:h-[26px]
                   md:p-[2%] lg:w-[200px] lg:h-[38px] lg:text-[13px]"
            >
             Verify 
                 </button>
               ): (
             <button
             onClick = {()=> navigate("/dashboard")}
            className="bg-[#04177f]  cursor-pointer mt-[5%] mx-auto w-full
         py-[12px] flex justify-center items-center text-[#ffffff] 
 text-[11px] font-[600] rounded-md md:w-[95px] md:h-[26px]
                   md:p-[2%] lg:w-[200px] lg:h-[38px] lg:text-[13px]"
            >
            Generate
                 </button>
               )
               }
          
          </div>
        </div>
      </Modal>
    </div>
  );
};

//Function to help check user virtual bank account details and set in the main dashboard \
// as necessary


//Generate a random variable for authStorage


export const CheckVirtualAcc = async(
  authToken,
   customerDetail,
    setLoading,
    setVirtualAccCreated, 
    setBankNameState,
     setAccountNameState, 
     setAccountNumberState,
     TwoStep,
     setTwoStepVerificationSuccess,
    confirmVirtualState,
  setNetworkIssue,
setAlertCustom) => {
     if(!navigator.onLine ) setNetworkIssue(true)
  if (authToken  && navigator.onLine) {
    const url = `${BASE_URL}/virtualacc`;
     try{
    setLoading(true);
          const response = await axios.get(url, {headers : {"Content-Type" : "application/json",
      }, withCredentials : true})
        if (response.status === 201 || response.status === 200 ) {
      const virtualAccCreated = response?.data?.data?.acc_details;
    setVirtualAccCreated(virtualAccCreated);
            if(TwoStep === true){
              if(virtualAccCreated){
              SignInVirtualAccountState(
                customerDetail, virtualAccCreated
                ,setBankNameState, setAccountNameState, setAccountNumberState);
                if(SignInVirtualAccountState){
                  localStorage.setItem("cxccxfd",true)
                  await confirmVirtualState();
                  }
                }}else{
            InActionVirtualAccountState(virtualAccCreated,setBankNameState, 
               setAccountNameState, setAccountNumberState);
           
               
            
         }
          
         }
        }catch(error){
         if(error.status === 400){
      setAlertCustom({
        message : "An error occured while trying to get your details",
        type :  "error",
        status : true
      })
         }
      else if(error.status === 401){
         setAlertCustom({
        message : "You were timed out while trying to login, kindly restart the login process",
        type :  "error",
        status : true
      })
      } else if (error.status === 404) {
        setAlertCustom({
        message : "User error",
        type :  "error",
        status : true
      })
      } else if (error.status === 500) {
        setAlertCustom({
        message : "SERVER_ERROR",
        type :  "error",
        status : true
      })
      } else if (error.response === undefined) {
        setNetworkIssue(true)
      } else {
         setAlertCustom({
        message : "An Unexpected error has occured",
        type :  "error",
        status : true
      })
      }
    } finally {
      if (confirmVirtualState) {
        setLoading(false);
        setTwoStepVerificationSuccess(false);

        //  return <Navigate to ={`/dashboard`}/>
      } else if (InActionVirtualAccountState) {
        setLoading(false);
      }
    }
  }
};


export const ImageLoader =(ImageUrl)=> {
  return Promise.allSettled(
    ImageUrl.map((imageUrl)=> {
      return new Promise((resolve, reject)=> {
      const imageInstance = new Image();
       imageUrl  = imageInstance.src;
       imageInstance.onload = resolve;
       imageInstance.onerror = reject
       
      })
    })
  )

}









//API TO GET TO PURCAHSE TV SUBSCRIPTION
//CUSTOM FUNCTION FOR PURCHASE O ANY PLAN

// THE CUSTOM API REQUEST FUNCTION HELP VERIFY USERS TRANSACTION PIN
// FOR EACH PAGE
//DESCRIPTION
//the function below is the function to verify user's transaction pin before
//a transaction is successful, it includes the necessary authorization tokens to be carried out,
// make sure to always check your dev tools to know the behaviour of the api request
// it could return a status code of 200, 201, 202, 400, 500 if 500 make sure to always reach out to
// our amiable backend developer.
//This function has parameters in which was passed into it on creation, this parameters
//should be named accordingly, text by text, in a chronological manner according to the function
// they are  carrying out according to their function e.g otp must be called first, followed by setSuccess()
//state not setFailed.
//This function is a module (a reusable funtion component) that can be called
// with curly braces on import.
//e.g import {VerifyTransPin} from "../ApiCollection/ApiBuck" (Not the original path)
//if the loading components hasn't be called on the function to run after success of the
// of the verifyPin kindly add it.The loading is added to your files also as a module
// you call a useState const [loading, setLoading] = useState(false) ,then pass
//if the loading is true in your components.
//import both Loader and Modal as a module function
//e.g {loading && (<Modal><Loader/></Modal>)}
//Lastly the asyncFuncAtSuccess is to pass the function to actually use to get the service the
//is requesting for, so understand this Api request isn't meant to be called initially until then
// this function i.e "VerifyTransPin" is to be called under at the verify popup button then if it is successful it now retrieves
// the information the user is trying to get.
//For any questions message victory

export const VerifyTransPin = async (
  otp,
  //setSuccess,
  setFailed,
  setLoading,
  setErrorMessage,
  asyncFuncAtSuccess,
  setNetworkIssue
) => {
  const usernameToken = localStorage.getItem("xcss{}");
  const emailToken = localStorage.getItem("xcss[]");
  if (!navigator.onLine) return setNetworkIssue(true);
  if ((usernameToken || emailToken) && navigator.onLine) {
    try {
      setLoading(true);
      const body = {
         pin : otp
      }
      const url = `${BASE_URL}/pin/verify`
      const response = await axios.post(url, body, {headers: {"Content-Type" :"application/json",
      },withCredentials : true
   })
      if(response.status === 201 || response.status ===  200){
       setErrorMessage(false);
     await asyncFuncAtSuccess()
      }
      
   }catch(error){
        if(error && error.response === undefined){
       setNetworkIssue(true)
     setFailed("Network error");
      } else if(error && error.response.status === 400){
         setFailed("Bad request");
    
         setErrorMessage(true);
      }else if(error && error.response.status === 401){
        setFailed("unauthorised")
         
      }else if(error && error.response.status === 500){
   setFailed("Server error")
   setErrorMessage(true);
      }else if(error && error.response.status === 404){
   setFailed("User error");
    alert("Kindly check your internet connection")
   setErrorMessage(true);
      }else if(error && error.response.status === 403){
   setFailed("User Blocked");
   alert("Purchase blocked due to many retries")
   setErrorMessage(true);
      }else {
   alert("Check your internet connection and try again")
      }
   }finally{
      if(asyncFuncAtSuccess){
      setLoading(false);
}}
};
}

//A general post function
export const PostFunction = async (
  path,
  setLoading,
  body,
  functionAtSuccess,
  functionAtFailed,
  setFetchedResponse,
  setNetworkIssue
) => {
  const usernameToken = localStorage.getItem("xcss{}");
  const emailToken = localStorage.getItem("xcss[]");
  if (!navigator.onLine) return setNetworkIssue(true);
  if ((usernameToken || emailToken ) && navigator.onLine){
    try {
      setLoading(true);
      const url = `${BASE_URL}/${path}`;
      const response = await axios.post(url, body, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      
      if (response.status === 201 || response.status === 200) {
        functionAtSuccess(response);
        setNetworkIssue(false);
        if (functionAtSuccess) {
          setFetchedResponse(response?.data?.data);

        }
      }
   }catch(error){
        if(error && error.response === undefined){
      setNetworkIssue(true)
      functionAtFailed("Network error");
      }  else  if(error && error.response.status === 400){
       functionAtFailed("Bad request");
          if(functionAtFailed) {
            setFetchedResponse(error?.response?.data?.data)
           // alert("Invalid request")
         }
        
    }else if(error && error.response.status === 404){
         functionAtFailed("User error")
           if(functionAtFailed) {
            setFetchedResponse(error?.response?.data?.data)
         }
      }else if(error && error.response.status === 403){
         functionAtFailed("User Blocked")
          if(functionAtFailed) {
            setFetchedResponse(error?.response?.data?.data)
            
         }
      }else if(error && error.response.status === 401){
    functionAtFailed("unauthorised")
      } else if (error && error.response.status === 500) {
        functionAtFailed("Server error");
      //  alert("Server error: Try some other time");
        if (functionAtFailed) {
          setFetchedResponse(error?.response?.data?.data);
        }
      } else {
        alert("An unexpected error has occured");
      }
    } finally {
      setLoading(false);
    }
  }
};


// A general Function to get useful data from the backend
export const GetFunction = async(path, setLoading, functionAtSuccess,
  functionAtFailed,setFetchedResponse, setNetworkIssue)=> {
   const usernameToken = localStorage.getItem("xcss{}");
   const emailToken = localStorage.getItem("xcss[]");
   if(!navigator.onLine) return setNetworkIssue(true);
   if((usernameToken || emailToken) && navigator.onLine){
      try{
         setLoading(true);
    const url = `${BASE_URL}/${path}`
      const response = await axios.get(url, {headers: {"Content-Type" :"application/json",
         }, withCredentials : true})
    if(response.status === 201 || response.status ===  200){
      setNetworkIssue(false)
     functionAtSuccess(response);
     if(functionAtSuccess){
     setFetchedResponse(response);
     }
      }
   }catch(error){
      if(error && error.response === undefined){
        setNetworkIssue(true)
     functionAtFailed("Network error");
      } else if(error && error.response.status === 400){
         functionAtFailed("Bad request", error.response)
      } else if(error && error.response.status === 401){
    functionAtFailed("unauthorised");
} else if (error && error.response.status === 404) {
        functionAtFailed("User error");
        alert("Check your internet connection");
      } else if (error && error.response.status === 500) {
        functionAtFailed("Server error");

       // alert("Server error: Try some other time");
      } else if (error && error.response.status === undefined) {
      setNetworkIssue(true)
      } else {
        
        // alert("An unexpected error has occured")
      }
    } finally {
      setLoading(false);
    }
  }
};

export const PutFunction = async (
  path,
  setLoading,
  body,
  functionAtSuccess,
  functionAtFailed,
  setNetworkIssue 
) => {
  const usernameToken = localStorage.getItem("xcss{}");
  const emailToken = localStorage.getItem("xcss[]");
  if (!navigator.onLine) return setNetworkIssue(true);
  if ((usernameToken || emailToken) && navigator.onLine) {
    try {
      setLoading(true);
      const url = `${BASE_URL}/${path}`;
      const response = await axios.put(url, body, {
        headers: {
          "Content-Type": "application/json",
         
        }, withCredentials : true
      });
      if (response.status === 201 || response.status === 200) {
        setNetworkIssue(false)
        functionAtSuccess();
      }
   }catch(error){
      if(error && error.response === undefined){
       setNetworkIssue(true)
          functionAtFailed("Network error")
      }else if(error && error.response.status === 400){
         functionAtFailed("Bad request");
     
      }else if(error && error.response.status === 401){
    functionAtFailed("unauthorised");
  }else if(error && error.response.status === 404){
         functionAtFailed("User error")
       
      }else if(error && error.response.status === 500){
        functionAtFailed("Server error")
  
      }else if(error && error.response === undefined){
               setNetworkIssue(true)
          }else {
       return;

      }
    } finally {
      setLoading(false);
    }
  }
};

export const ThemeHandler =()=> {
    const isDarkMode = localStorage.getItem("darkModeEnabled");
    const UserStatus = localStorage.getItem("cxccxfd")
    const metaname = document.querySelector("meta[name=theme-color]");
      useEffect(()=> {
  if(!UserStatus){
     metaname.setAttribute("content", "#04177f")
   }else if(  isDarkMode === "false" && UserStatus === "true"){
      metaname.setAttribute("content", "#fff");
   }
    else if(  isDarkMode === "true" &&  UserStatus === "true"){
      metaname.setAttribute("content", "#000");
   }
  }, [ UserStatus, isDarkMode, metaname])
  return null;
}

