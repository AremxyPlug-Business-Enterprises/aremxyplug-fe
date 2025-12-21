import { GetLocalStorage, SetLocalStorage } from "../LocalStorage/LocalStorage";
import { RemoveLocalStorage } from "../LocalStorage/LocalStorage";
import axios from "axios";
import { Modal } from "../Screens/Modal/Modal";
import { useNavigate } from "react-router-dom";
import { BalanceLoading } from "../Loader/Loader";
import { useState, useEffect, useRef, useContext} from "react";
import { ContextProvider } from "../Context";



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
  if (virtualAccCreated) {
    setBankNameState(bank_name);
    setAccountNameState(account_name?.slice(11));
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
    // alert("IN ACTION IS RUNNING");
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


export const createWebSocket = ()=> {
const  connectionSocket = new WebSocket(`wss://api.aremxyplug.com/api/v1/ws/events`);
  connectionSocket.onopen =()=> {
    console.log("Socket running")
  }

  connectionSocket.onmessage = (event)=>{
    try{
     const data = JSON.parse(event)
       console.log(data)
    }catch(error){
      console.log("unable to fetch realtime update")
    }
  } 
  
}




  // A reusable component to handle user session management.
  export const HandleUserSession = ()=> {
    const {sec, setSec, setSessionExpiration}= useContext(ContextProvider)
    const holdSecRef = useRef(null);
    const isDarkMode = localStorage.getItem("darkModeEnabled");
    console.log(sec);
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
               ${isDarkMode === "true" ? "bg-black border border-white rounded-[10px]" 
               : "bg-white"}`}>
               <div className ="flex flex-col  gap-[20px]">
               <h2 className={`text-[14px] text-center font-[600] leading-[18px]
               text-black lg:text-[16px] lg:leading-[22px]  ${isDarkMode === "true"  ? "text-white" : "text-black"}`}>
                  Warning⚠️
                  </h2>
              <p className ={`text-[14px] text-center font-[400] leading-[18px]
               text-black lg:text-[16px] lg:leading-[22px] ${isDarkMode === "true" ? "text-white" : "text-black"}`}>
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
export const InternalLoginSession = ({ setExpiredSessionLogin})=> {
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false)
   const isDarkMode = localStorage.getItem("darkModeEnabled");
   const getUsername = JSON.parse(localStorage.getItem("aremxyUserName"));
   const UserEmail = JSON.parse(localStorage.getItem("userEmail"))
   const emailToken = localStorage.getItem("xcss[]");
   const usernameToken = localStorage.getItem("xcss{}");
   const HoldValue = usernameToken && !emailToken ? getUsername : UserEmail;
 

 const functionAtSuccess = async(response)=> {
   alert("Successful");
  setExpiredSessionLogin(false);
     
    // await RequestReRun();
      
}
    const  functionAtFailed =(ErrorType)=> {
     if(ErrorType === "unauthorised" ){
      alert("Incorrect Password: You are only allowed to try 5 times.");
     }else if(ErrorType === "Server error"){
      alert("Failed to process your request")
     }else if(ErrorType === "User Blocked"){
      alert("Account Blocked try after one hour");
     window.location.replace("/Login")
     RemoveLocalStorage()
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
  ()=> {})
  }
//console.log(requestObjectConfirm)


  return (
   
   <div className={`w-full h-full justify-center items-center
   flex`}>
    <Modal>
              <div className={`w-full flex px-[17px] lg:px-[20px] justify-center items-center 
             `}>
            <div className = {`flex flex-col justify-left items-center
             py-[20px] px-[10px] gap-[20px] w-[100%] md:w-[60%] md:h-auto lg:w-[30%]  rounded-[10px]
             lg:rounded-[20px]   ${isDarkMode === "true" ? "bg-black border border-white rounded-[10px]" 
               : "bg-white"}`}>
               <div className ="flex flex-col  gap-[20px]">
               <h2 className={`text-[14px] text-center font-[600] leading-[18px]
               text-black lg:text-[16px] lg:leading-[22px] ${isDarkMode === "true" ? "text-white" : "text-black"}`}>
                  Your Session has expired.
                  </h2>
              <p className ={`text-[14px] text-center font-[600] leading-[18px]
               lg:text-[16px] lg:leading-[22px] ${isDarkMode === "true" ? "text-white" : "text-[#04177f]"}`}>
           Login to renew your session to continue transactions 
            and operations.
               </p>
               </div>
               <div className="flex flex-col gap-[20px]
                w-[100%] md:w-[50%] lg:w-[100%]">
                {/* Username */}
               <div className="flex flex-col gap-[5px] lg:gap-[10px] ">
               <p className={`text-[14px] text-start font-[600] leading-[18px]
               text-black lg:text-[16px] lg:leading-[22px] ${isDarkMode === "true" ? "text-white" : "text-black"}`}>
                {usernameToken && !emailToken ? "Username" : "Email"}
               </p>
             
               <input
               className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-[20px] 
                md:p-0 text-[14px]  sm:p-3 sm:text-lg flex justify-between 
                pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px] font-[400]  
                leading-[10.4px] md:text-[12px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px]
     md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] 
     lg:pr-[9px] lg:pl-[10px] items-center cursor-pointer 
     outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[50.927px]
      md:h-[35px] lg:h-[50px]  px-[11px] md:px-[6px] lg:px-[10px]  self-center ${
      isDarkMode === "true" 
      ? "bg-black text-white border border-white" 
      : "hover:bg-[#EDEAEA] border-[#9C9C9C] bg-white text-[#7C7C7C] "
  }`} 
  readOnly
  value={HoldValue}
   type="text" />
              
              
                </div>
                {/* Password */}
               <div className="flex flex-col gap-[5px] lg:gap-[10px] ">
              <p className={`text-[14px] text-start font-[600] leading-[18px]
               text-black lg:text-[16px] lg:leading-[22px] ${isDarkMode === "true" ? "text-white" : "text-black"}`}>
                Password
               </p>
             
               <input
               className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-[20px] 
                md:p-0 text-[14px]  sm:p-3 sm:text-lg flex justify-between 
                pt-[8.803px] pb-[7.794px] pr-[13px] pl-[10.876px] font-[400]  
                leading-[10.4px] md:text-[12px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px]
     md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px] 
     items-center cursor-pointer outline-0 border-[0.24px]
      lg:border-[0.4px] w-full h-[50.927px] md:h-[35px] lg:h-[50px]  px-[11px] md:px-[6px] lg:px-[10px]  self-center ${
      isDarkMode === "true"
      ? "bg-black text-white border border-white" 
      : "hover:bg-[#EDEAEA] border-[#9C9C9C] bg-white text-[#7C7C7C] "
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
                 className="bg-[#04177f]  cursor-pointer mt-[5%] mx-auto w-full py-[12px] flex justify-center items-center text-[#ffffff] 
               text-[11px] font-[600] rounded-md md:w-[95px] md:h-[26px]
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
export const refreshToken = async()=> {
    const setLoading = ()=> {}
  await GetFunction("refresh-token",setLoading, ()=> {
    console.log("Token refreshed successfully")
  }, (ErrorType)=> {
    if(ErrorType === "Network error" || ErrorType === "User error"){
      alert("Your internet connection is quite unstable.")
      }else if(ErrorType === "Server error"){
    return;
    }else if(ErrorType === "unauthorised"){
   console.log("Unauthorised issue");
    }
  }, ()=> {} )
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
     } = useContext(ContextProvider)
     const Data = GetLocalStorage();
     const VerificationNavigationAndState = ()=> {
         setVerificationOpen(true)
       setProfilePage(false)
       setBvnVerificationOpen(false)
        setIdVerificationOpen(true)
        setAccountUpgrade(false)
      setAuthenticationOpen(false)
     navigate("/ProfileSettingMain")
     }
          //id Verification
   const isDarkMode = localStorage.getItem("darkModeEnabled")
  return (
  <div className={`w-full h-full justify-center items-center
   flex`}>
    <Modal>
     <div className={`w-full flex  justify-center items-center `}>
            <div className = {`flex flex-col justify-center items-center
             py-[20px] px-[12px] gap-[20px] w-[80%] md:w-[60%] lg:w-[30%] md:h-[300px]  rounded-[10px]
             lg:rounded-[20px]   ${isDarkMode === "true" ? "bg-black border border-white rounded-[10px]" 
               : "bg-white"}`}>
               <div className ="flex flex-col  gap-[20px]">
               <h2 className={`text-[14px] text-center font-[600] leading-[18px]
               text-black lg:text-[16px] lg:leading-[22px] ${isDarkMode === "true" ? "text-white" : "text-black"}`}>
                   You are restricted from accessing this page.
                  </h2>
             
                {Data?.ConfirmId === "false" || Data?.ConfirmBvn === "false" ? (
                   <p className ={`text-[14px] text-center font-[400] leading-[18px]
               text-black lg:text-[16px] lg:leading-[22px] ${isDarkMode === "true" ? "text-white" : "text-black"}`}>
                Your Identity matters, kindly verify
                your user account to continue smooth operation.
              </p>
                ) : (
                      <p className ={`text-[14px] text-center font-[400] leading-[18px]
               text-black lg:text-[16px] lg:leading-[22px] ${isDarkMode === "true" ? "text-white" : "text-black"}`}>
                 Create an account to access this feature,
              navigate to dashboard to generate an account.
              </p>
                )}
            
          
               </div>
             
             
               {Data?.ConfirmId === "false" || Data?.ConfirmBvn === "false"
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
    confirmVirtualState) => {
     if(!navigator.onLine) return alert("Check your internet Connection")
  if (authToken  && navigator.onLine) {
    const url = 'https://api.aremxyplug.com/api/v1/virtualacc';
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
             //  alert("Action running")
            //alert("InAction Virtual is running")
               
            
         }
          
         }
        }catch(error){
         if(error.status === 400){
        alert("We had an error trying to get your details, click okay to repeat the login process");
         }
      else if(error.status === 401){
         alert("You were timed out, kindly login again to continue")
      } else if (error.status === 404) {
        alert("Network Error, Please Check your Connection and try again");
        console.log(`ERROR: ${error}`);
      } else if (error.status === 500) {
        alert("Error:", "SERVER ERROR");
      } else if (error.response === undefined) {
        alert("Check your internet Connection");
      } else {
        alert("Check your internet connection");
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
  asyncFuncAtSuccess
) => {
  const usernameToken = localStorage.getItem("xcss{}");
  const emailToken = localStorage.getItem("xcss[]");
  if (!navigator.onLine) return alert("Check your internet connection");
  if ((usernameToken || emailToken) && navigator.onLine) {
    try {
      setLoading(true);
      const body = {
         pin : otp
      }
      const url = "https://api.aremxyplug.com/api/v1/pin/verify"
      const response = await axios.post(url, body, {headers: {"Content-Type" :"application/json",
      },withCredentials : true
   })
      if(response.status === 201 || response.status ===  200){
       setErrorMessage(false);
     await asyncFuncAtSuccess()
      }
      
   }catch(error){
        if(error && error.response === undefined){
     alert("Kindly check your internet connection")
     setFailed("Network error");
      } else if(error && error.response.status === 400){
         setFailed("Bad request");
         alert("You are allowed to attempt 5 times, kindly ensure your pin is correct.")
         setErrorMessage(true);
      }else if(error && error.response.status === 401){
        setFailed("unauthorised")
         
      }else if(error && error.response.status === 500){
   setFailed("Server error")
   setErrorMessage(true);
      }else if(error && error.response.status === 404){
   setFailed("User error");
   // alert("Kindly check your internet connection")
   setErrorMessage(true);
      }else if(error && error.response.status === 403){
   setFailed("User Blocked");
   alert("Purchase blocked due to many retries")
  // setErrorMessage(true);
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
  setFetchedResponse
) => {
  const usernameToken = localStorage.getItem("xcss{}");
  const emailToken = localStorage.getItem("xcss[]");
  if (!navigator.onLine) return alert("Check your internet connection");
  if ((usernameToken || emailToken ) && navigator.onLine){
    try {
      setLoading(true);
      const url = `https://api.aremxyplug.com/api/v1/${path}`;
      const response = await axios.post(url, body, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      
      if (response.status === 201 || response.status === 200) {
        functionAtSuccess(response);
        if (functionAtSuccess) {
          setFetchedResponse(response?.data?.data);

        }
      }
   }catch(error){
        if(error && error.response === undefined){
     alert("Kindly check your internet connection")
      functionAtFailed("Network error");
      }  else  if(error && error.response.status === 400){
       functionAtFailed("Bad request");
          if(functionAtFailed) {
            setFetchedResponse(error?.response?.data?.data)
              console.log(error?.response?.data?.data)
           // alert("Invalid request")
         }
        
    }else if(error && error.response.status === 404){
         functionAtFailed("User error")
         alert("Check your internet connection");
           if(functionAtFailed) {
            setFetchedResponse(error?.response?.data?.data)
              console.log(error?.response?.data?.data)
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
      } else if (error && error.response.status === undefined) {
        alert("Check your internet Connection");
      } else {
        alert("Check your network connection");
      }
    } finally {
      setLoading(false);
    }
  }
};


// A general Function to get useful data from the backend
export const GetFunction = async(path, setLoading, functionAtSuccess,
  functionAtFailed,setFetchedResponse)=> {
   const usernameToken = localStorage.getItem("xcss{}");
   const emailToken = localStorage.getItem("xcss[]");
   if(!navigator.onLine) return alert("Check your internet connection");
   if((usernameToken || emailToken) && navigator.onLine){
      try{
         setLoading(true);
    const url = `https://api.aremxyplug.com/api/v1/${path}`
      const response = await axios.get(url, {headers: {"Content-Type" :"application/json",
         }, withCredentials : true})
    if(response.status === 201 || response.status ===  200){
     functionAtSuccess(response);
     if(functionAtSuccess){
     setFetchedResponse(response);
     }
      }
   }catch(error){
      if(error && error.response === undefined){
     alert("Kindly check your internet connection");
     functionAtFailed("Network error");
      } else if(error && error.response.status === 400){
         functionAtFailed("Bad request")
      } else if(error && error.response.status === 401){
    functionAtFailed("unauthorised");
} else if (error && error.response.status === 404) {
        functionAtFailed("User error");
        alert("Check your internet connection");
      } else if (error && error.response.status === 500) {
        functionAtFailed("Server error");
       // alert("Server error: Try some other time");
      } else if (error && error.response.status === undefined) {
        alert("Check your internet Connection");
      } else {
        alert("Check your internet connection");
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
  functionAtFailed
) => {
  const usernameToken = localStorage.getItem("xcss{}");
  const emailToken = localStorage.getItem("xcss[]");
  if (!navigator.onLine) return alert("Check your internet connection");
  if ((usernameToken || emailToken) && navigator.onLine) {
    try {
      setLoading(true);
      const url = `https://api.aremxyplug.com/api/v1/${path}`;
      const response = await axios.put(url, body, {
        headers: {
          "Content-Type": "application/json",
         
        }, withCredentials : true
      });
      if (response.status === 201 || response.status === 200) {
        functionAtSuccess();
      }
   }catch(error){
      if(error && error.response === undefined){
         alert("Check your internet connection");
          functionAtFailed("Network error")
      }else if(error && error.response.status === 400){
         functionAtFailed("Bad request");
       alert("Invalid request");
      }else if(error && error.response.status === 401){
    functionAtFailed("unauthorised");
  }else if(error && error.response.status === 404){
         functionAtFailed("User error")
         alert("Check your internet connection")
      }else if(error && error.response.status === 500){
        functionAtFailed("Server error")
   alert("Server error: Try some other time")
      }else if(error && error.response === undefined){
                alert("Check your internet Connection");
          }else {
         alert("Check your internet connection")

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

