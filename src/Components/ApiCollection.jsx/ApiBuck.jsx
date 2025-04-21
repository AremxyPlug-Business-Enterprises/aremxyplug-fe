
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
//To set the different states for  virtual account
