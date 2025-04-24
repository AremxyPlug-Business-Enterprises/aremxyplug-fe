
import { SetLocalStorage } from '../LocalStorage/LocalStorage';
import axios from 'axios';

//To set the different states for  virtual account


export const SignInVirtualAccountState =(customerDetail, virtualAccCreated,setBankNameState, 
   setAccountNameState, setAccountNumberState)=>{
   const {email, full_name, phone, username, id} = customerDetail;
   const {bank_name, account_name, account_no} = virtualAccCreated;
   
//Checking if Virtual account is true

   if(bank_name.length > 1 && account_name.length > 1 && account_no.length > 1){
GetVirtualAccountValue(virtualAccCreated,
   setBankNameState, setAccountNameState, setAccountNumberState);
   SetLocalStorage(email,full_name,phone, username, bank_name, account_name, account_no ,id)

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
     
  if (authToken) {
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
            // console.log(`CustomerDetail : ${customerDetail}`)
            // console.log(`virtualAccCreated : ${virtualAccCreated}`)
            // const {bank_name} = virtualAccCreated
          //  const UserStatus = localStorage.getItem("UserStatus")
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
               alert("Action running")
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
 const sendDataToBackend = async (decoder_type, plan, iuc_number, email, amount, phone, setErrorPurchase, setSuccessPurchase) => {
   const apiUrl = "https://aremxyplug.onrender.com/api/v1/tvsub";

   // Prepare the data to be sent in the request body
   const requestData = {
     decoder_type,
     plan,
     iuc_number,
     email,
     amount,
     phone, 
   };

   console.log(requestData);

   try {
     // Send a POST request to the backend API using Axios
     const response = await axios.post(apiUrl, requestData, {
       headers: {
         "Content-Type": "application/json",
       },
     });
if(response.status === 201 || 200){
  setSuccessPurchase(true);
}
     // Handle the response from the backend
     console.log("Backend response:", response.data);
   } catch (error) {
     if(error && error.response.status === 400){
        setErrorPurchase(true)
     }else if(error  && error.response.status === 401){
        alert("Session expired")
        setErrorPurchase(true)
     }else if (error && error.response.status === 500){
        alert("Server Error: Try again some other time")
        setErrorPurchase(true)
     }else{
        console.error("Error sending data to backend:", error);
     }
     // Handle any errors that occurred during the request
   }
 };
 

// THE CUSTOM API REQUEST FUNCTION HELP VERIFY USERS TRANSACTION PIN
// FOR EACH PAGE
 

export const VerifyTransPin = async(otp, setSuccess,
    setFailed, setLoading, setErrorMessage,
    decoder_type, plan, iuc_number, email, amount, phone,
     )=> {
   const authToken = localStorage.getItem("authorisedLogin");
   const getToken = localStorage.getItem("getToken")
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
       setErrorMessage("");
     await sendDataToBackend(decoder_type, plan, iuc_number,
          email, amount, phone)
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
      }
   }finally{
      if(sendDataToBackend){
      setLoading(false)
      }
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


