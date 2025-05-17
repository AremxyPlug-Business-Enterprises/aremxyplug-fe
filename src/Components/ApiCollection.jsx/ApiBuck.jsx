
import { SetLocalStorage } from '../LocalStorage/LocalStorage';
import axios from 'axios';

//To set the different states for  virtual account


export const SignInVirtualAccountState =(customerDetail, virtualAccCreated,setBankNameState, 
   setAccountNameState, setAccountNumberState)=>{
   const {email, full_name, phone, username, id} = customerDetail;
   const {bank_name, account_name, account_no} = virtualAccCreated;
  
   SetLocalStorage(email,full_name,phone, username, bank_name, account_name, account_no ,id)
//Checking if Virtual account is true

   if(bank_name.length > 1 && account_name.length > 1 && account_no.length > 1){
GetVirtualAccountValue(virtualAccCreated,
   setBankNameState, setAccountNameState, setAccountNumberState);
   }
 
}







export const GetVirtualAccountValue = ( virtualAccCreated,
   setBankNameState, setAccountNameState, setAccountNumberState
)=> {
   const {bank_name, account_name, account_no} = virtualAccCreated;
    if(virtualAccCreated){
    setBankNameState(bank_name);
    setAccountNameState(account_name.slice(11));
    setAccountNumberState(account_no)
   console.log("The GetVirtualAccountValue is running")
    }
 }


 
//Setting the bank Details after the creation of virtual accounts
  export const InActionVirtualAccountState =(virtualAccCreated,setBankNameState, setAccountNameState, setAccountNumberState
  )=>{
const {bank_name, account_no, account_name} = virtualAccCreated
 //LocalStorage Getting
 const email = JSON.parse(localStorage.getItem("userEmail"));
 const phone = JSON.parse(localStorage.getItem("userPhone"));
  const  full_name = JSON.parse(localStorage.getItem("userFullName"));
 const  username = JSON.parse(localStorage.getItem("aremxyUserName"));
 const id = JSON.parse(localStorage.getItem("aremxyUserId"));
 //Checking if Virtual account is true
 alert("In Action Virtual Running")
    
if(bank_name.length > 1 ){
 GetVirtualAccountValue( virtualAccCreated,
   setBankNameState, setAccountNameState, setAccountNumberState);
   // alert("IN ACTION IS RUNNING");
   SetLocalStorage(email, full_name,phone, username, bank_name, account_name, account_no, id)
  
 }
  }


//Function to help check user virtual bank account details and set in the main dashboard \
// as necessary
export const CheckVirtualAcc = async(authToken, customerDetail, setLoading,
    setVirtualAccCreated, setBankNameState, setAccountNameState, setAccountNumberState,TwoStep,setTwoStepVerificationSuccess,
    confirmVirtualState) => {
     if(!navigator.onLine) return alert("Check your internet Connection")
  if (authToken && navigator.onLine ) {
    const url = 'https://aremxyplug.onrender.com/api/v1/virtualacc';
     // console.log(data)
     try{
    setLoading(true)
          const response = await axios.get(url, {headers : {"Content-Type" : "application/json",
      Authorization : authToken
      }})
    
        if (response.status === 201 || 200 ) {
             const virtualAccCreated = response.data.data.acc_details;
            setVirtualAccCreated(virtualAccCreated);
            if(TwoStep === true){
               console.log(TwoStep)
              if(virtualAccCreated){
              SignInVirtualAccountState(customerDetail, virtualAccCreated
                ,setBankNameState, setAccountNameState, setAccountNumberState);
                // alert("Sign in virtual running")
                if(SignInVirtualAccountState){
                  localStorage.setItem("UserStatus",true)
                  await confirmVirtualState();
                  }
               //  console.log(response)
                }}else{
            InActionVirtualAccountState(virtualAccCreated,setBankNameState, 
               setAccountNameState, setAccountNumberState);
             //  alert("Action running")
            //alert("InAction Virtual is running")
               
            
         }
          
         }
        }catch(error){
       if(error.status === 401 || 400){
        alert("We had an error trying to get your details, click okay to repeat the login process");
        console.log(`ERROR: ${error}`)
       }
        else if(error.status === 404){
         alert("Network Error, Please Check your Connection and try again");
         console.log(`ERROR: ${error}`)
       
     }else if(error.status === 500){
                alert('Error:', "SERVER ERROR");
          }else {
            alert("Check your internet connection")
          }
        }finally{
         if(confirmVirtualState){
          setLoading(false);
          setTwoStepVerificationSuccess(false);

      //  return <Navigate to ={`/dashboard`}/>
         }else if(InActionVirtualAccountState){
            setLoading(false);
    }
        }
}
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

export const VerifyTransPin = async(otp, setSuccess,
    setFailed, setLoading, setErrorMessage, asyncFuncAtSuccess
     )=> {
   const authToken = localStorage.getItem("authorisedLogin");
   const getToken = localStorage.getItem("getToken");
   if(!navigator.onLine) return alert("Check your internet connection")
   if((authToken || getToken) && navigator.onLine){
      try{
         setLoading(true)
      const body = {
         pin : otp
      }
      const url = "https://aremxyplug.onrender.com/api/v1/pin/verify"
      const response = await axios.post(url, body, {headers: {"Content-Type" :"application/json",
         Authorization : authToken || getToken
      }})
      if(response.status === 201 || 200){
         setSuccess(true);
       setErrorMessage(false);
     await asyncFuncAtSuccess()
      }
   }catch(error){
      if(error && error.response.status === 400){
         setFailed(true)
         setErrorMessage(true)
      }else if(error && error.response.status === 401){
         setFailed(true)
      }else if(error && error.response.status === 500){
   setFailed(true)
   setErrorMessage("Server error: Try some other time")
      }else {
   alert("Check your internet connection and try again")
      }
   }finally{
      if(asyncFuncAtSuccess){
      setLoading(false);
      }
   }
   }
}

//A general post function 
export const PostFunction = async(path, setLoading, body, functionAtSuccess, functionAtFailed, setFetchedResponse)=> {
   const authToken = localStorage.getItem("authorisedLogin");
   const getToken = localStorage.getItem("getToken")
   if(!navigator.onLine) return alert("Check your internet connection");
   if((authToken || getToken) && navigator.onLine){
      try{
         setLoading(true)
    const url = `https://aremxyplug.onrender.com/api/v1/${path}`
      const response = await axios.post(url, body, {headers: {"Content-Type" :"application/json",
         Authorization : authToken || getToken
      }})
      if(response.status === 201 || 200){
    functionAtSuccess()
         if(functionAtSuccess) {
            setFetchedResponse(response.data.data)
         }
         console.log(response.data)
      }

   }catch(error){
      if(error && error.response.status === 400){
         functionAtFailed()
          if(functionAtFailed) {
            setFetchedResponse(error.response.data.data)
              console.log(error.response.data.data)
            alert("Invalid request")
         }
        
    }else if(error && error.response.status === 404){
         functionAtFailed()
         alert("Check your internet connection");
           if(functionAtFailed) {
            setFetchedResponse(error.response.data.data)
              console.log(error.response.data.data)
         }
      }else if(error && error.response.status === 401){
         functionAtFailed()
         alert("Your Session has timed out");
           if(functionAtFailed) {
            setFetchedResponse(error.response.data.data)
              console.log(error.response.data.data)
         }
      }else if(error && error.response.status === 500){
        functionAtFailed();
   alert("Server error: Try some other time");
     if(functionAtFailed) {
            setFetchedResponse(error.response.data.data)
              console.log(error.response.data.data)
            
         }
      }else{
         alert("Check your network connection")
      }
   }finally{
  setLoading(false);
     }
   }
}

// A general Function to get useful data from the backend
export const GetFunction = async(path, setLoading, functionAtSuccess,functionAtFailed,setFetchedResponse)=> {
   const authToken = localStorage.getItem("authorisedLogin");
   const getToken = localStorage.getItem("getToken");
   if(!navigator.onLine) return alert("Check your internet connection");
   if((authToken || getToken) && navigator.onLine){
      try{
         setLoading(true)
    const url = `https://aremxyplug.onrender.com/api/v1/${path}`
      const response = await axios.get(url, {headers: {"Content-Type" :"application/json",
         Authorization : authToken || getToken
      }})
      if(response.status === 201 || 200){
     functionAtSuccess();
     if(functionAtSuccess){
     setFetchedResponse(response);
     }
      }
   }catch(error){
      if(error && error.response.status === 400){
         functionAtFailed()
       alert("Invalid request")
      }else if(error && error.response.status === 401){
         functionAtFailed()
         alert("Your Session has timed out")
      }else if(error && error.response.status === 404){
         functionAtFailed();
         alert("Check your internet connection")
      }else if(error && error.response.status === 500){
  
   alert("Server error: Try some other time")
      }else {
      alert("Check your internet connection")
      }
   }finally{
  setLoading(false);
     }
   }
}

export const PutFunction = async(path, setLoading,body, functionAtSuccess,functionAtFailed)=> {
   const authToken = localStorage.getItem("authorisedLogin");
   const getToken = localStorage.getItem("getToken");
   if(!navigator.onLine) return alert("Check your internet connection");
   if((authToken || getToken) && navigator.onLine){
      try{
        
         setLoading(true)
    const url = `https://aremxyplug.onrender.com/api/v1/${path}`
      const response = await axios.put(url,body, {headers: {"Content-Type" :"application/json",
         Authorization : authToken || getToken
      }})
      if(response.status === 201 || 200){
     functionAtSuccess();
      }
   }catch(error){
      if(error && error.response.status === 400){
         functionAtFailed()
       alert("Invalid request")
      }else if(error && error.response.status === 401){
         functionAtFailed()
         alert("Your Session has timed out")
      }else if(error && error.response.status === 404){
         functionAtFailed()
         alert("Check your internet connection")
      }else if(error && error.response.status === 500){
  
   alert("Server error: Try some other time")
      }else {
         alert("Check your internet connection")
      }
   }finally{
  setLoading(false);
     }
   }
}



//To set the different states for  virtual account
// This function is to assist the custom api to fetch the page location set it to
// to know the following product type that comes with such location(service) then eventually
// provides the url for the custm api to get 
// const handleServiceProduct = (ErrorHandling,location, productType, url)=> {
//    //TV SUBSCRIPTIONS
  
//    if(location === "/TvSubscription"){
//       if(productType === "GOTV"){
//     url = `https://aremxyplug.onrender.com/api/v1/products/tvsubs/${productType}`
   
//       }
      
//       else if(productType === "DSTV"){
//           url = `https://aremxyplug.onrender.com/api/v1/products/tvsubs/${productType}`
         
//       }
//    else if(productType === "SHOWMAX"){
//        url = `https://aremxyplug.onrender.com/api/v1/products/tvsubs/${productType}`
//  }
// else if(productType === "STARTIMES"){
//     url = `https://aremxyplug.onrender.com/api/v1/products/tvsubs/${productType}`
//    }
//    // DATA BUNDLES
//       }else if(location === "/data-bundles"){
//          if(productType === "MTN"){
//             url = `https://aremxyplug.onrender.com/api/v1/products/tvsubs/${productType}`
//               }
//               else if(productType === "AIRTEL"){
//                   url = `https://aremxyplug.onrender.com/api/v1/products/tvsubs/${productType}`
//               }
//            else if(productType === "GLO"){
//                url = `https://aremxyplug.onrender.com/api/v1/products/tvsubs/${productType}`
//          }
//         else if(productType === "9MOBILE"){
//             url = `https://aremxyplug.onrender.com/api/v1/products/tvsubs/${productType}`
//            } else if(productType === "SMILE"){
//             url = `https://aremxyplug.onrender.com/api/v1/products/tvsubs/${productType}`
//            } else if(productType === "SPECTRANET"){
//             url = `https://aremxyplug.onrender.com/api/v1/products/tvsubs/${productType}`
//            }
//            // EDUCATION PINs
//       }else if(location === "/EducationPins"){
//          if(productType === "WAEC"){
//             url = `https://aremxyplug.onrender.com/api/v1/products/tvsubs/${productType}`
//               }
//               else if(productType === "NECO"){
//                   url = `https://aremxyplug.onrender.com/api/v1/products/tvsubs/${productType}`
//               }
//            else if(productType === "NABTEB"){
//                url = `https://aremxyplug.onrender.com/api/v1/products/tvsubs/${productType}`
//          }
//         else if(productType === "JAMB"){
//             url = `https://aremxyplug.onrender.com/api/v1/products/tvsubs/${productType}`
//            } 
          
//       }
// }

// const handleResponseStatus = (productType, setConfirmGotvPopup)=> {
//    if(productType === "GOTV"){
//      setConfirmGotvPopup(true)
//    } else if(productType === "DSTV"){
//       setConfirmGotvPopup(true)
//     } else if(productType === "STARTIMES"){
//       setConfirmGotvPopup(true)
//     } else if(productType === "SHOWMAX"){
//       setConfirmGotvPopup(true)
//     } else if(productType === "MTN"){
//       setConfirmGotvPopup(true)
//     }else if(productType === "AIRTEL"){
//       setConfirmGotvPopup(true)
//     }else if(productType === "GLO"){
//       setConfirmGotvPopup(true)
//     }else if(productType === "9MOBILE"){
//       setConfirmGotvPopup(true)
//     }else if(productType === "SMILE"){
//       setConfirmGotvPopup(true)
//     }else if(productType === "SPECTRANET"){
//       setConfirmGotvPopup(true)
//     }else if(productType === "WAEC"){
//       setConfirmGotvPopup(true)
//     }else if(productType === "NECO"){
//       setConfirmGotvPopup(true)
//     }else if(productType === "NABTEB"){
//       setConfirmGotvPopup(true)
//     }else if(productType === "JAMB"){
//       setConfirmGotvPopup(true)
//     } 
//    }

// // AXIOS CUSTOM API REQUEST FOR TV SUBSCRIPTIONS,DATA AND EDUCATIONPINS
// const RequestServiceDrop = async(location,productType, url,)=> {
//    const getToken = localStorage.getItem("getToken")
//    const authToken = localStorage.getItem("authorisedLogin")
//    if((authToken || getToken ) && navigator.onLine){
//       try{
//          const response = await axios.get(url, {headers: {"Content-Type" : "application/json",
//             Authorization : authToken || getToken
//          }})
//          if(response.status == 201 || 200){
//          alert(` In ${productType}`)
//          }
//       }catch(error){
//          if(error && error.response.status == 404 || 400){
//             alert(`Check network connection to get ${productType}`)
//             }else if(error && error.response.status === 401){
//           alert(`Your session has expired`)
//             }else if(error && error.response.status === 500){
//                alert(`Couldn't get ${productType} due to server error `)
//                  }
//       }
//    }
// }


