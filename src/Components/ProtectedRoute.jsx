
import { Navigate } from 'react-router-dom';
import { RemoveLocalStorage } from './LocalStorage/LocalStorage';
 import { useEffect, useRef, useState, useContext } from 'react';
import { Modal } from './Screens/Modal/Modal';
import { HandleUserSession } from './ApiCollection.jsx/ApiBuck';
import { ContextProvider } from './Context';
export const ProtectedRoute = ({children}) => {
 const SessionIntervalHold = useRef(null);
  const {sessionExpiration, setSessionExpiration, sec, setSec} = useContext(ContextProvider);
  ;
// The aim is to create three different situation when the user will
// will be logged from the page
// 1. The point in which the authToken is not gotten through cookies after a request from
// an expitred token.The usage of user session expiration component must be 
//used here.
// 2. No user activity was detected within 20 minutes, a pop up for inactivity is created.
// 3. The user enters the dashboard or any protected-route through an openend tab
// for the opened tab a cookie present in the frontend is to check the time when it was created,
// then does it substraction to know if expired or not.
//4. The authorisedLogin, getToken and userStatus is not found in the local Storage.

//The immediate function below is to check for user activity
//    const CheckUserActivity =(timeoutValue)=>{
//   let TimeOut;
//   const [numberCount, setNumberCount] = useState(6000)
//     const events =["scroll", "click"];
//    events.forEach((event)=> {
//       console.log(event);
//   window.addEventListener(event, ()=> {
   
//  setNumberCount(60)
//    console.log(numberCount);
//   TimeOut =  setTimeout(()=> {
//      // console.log(window)
//   return <Navigate to = "/Login" replace/>
//    },numberCount)
//    console.log(TimeOut)
//    //return clearTimeout(TimeOut)

//   })
//  })
// }'

const TrackSessionExpiration = ()=> {
  const expiryTime = localStorage.getItem("SessionExpiration");
const getDifferenceForExpiration = Date.now()  > Number(expiryTime);
console.log(getDifferenceForExpiration)
//Checking for the last one minutes difference between the current time and the expiry date,
const HandleUserSessionPopUpTime = Number(expiryTime) - Date.now() <= 35000
if(HandleUserSessionPopUpTime && sessionExpiration === false){
  setSessionExpiration(true);
  setSec(30);
}
 return getDifferenceForExpiration;
}  
 
  

//Resets the timer on user activity using the event click as an example 
function ResetTimer(e){
    if(!localStorage.getItem("UserStatus")) return;
    if((e?.target?.innerText && e?.target ?
   e?.target?.innerText !== "Logout"   : true)  && TrackSessionExpiration() === false && sessionExpiration=== false){
    const Reset = 800  *  1000;
    const resetExpiration = Date.now() + Reset;
return localStorage.setItem("SessionExpiration", resetExpiration);
 }
}

useEffect (()=> {
const checkForIntervalCallBack = ()=> {
    console.log(sec);
     const sessionExpirationValue = TrackSessionExpiration();
    const clearSessionExpirationMemory = ()=> {
         RemoveLocalStorage();
      window.location.href="/Login"  
    }
    if(sessionExpirationValue === true && sec === 0 ){
    clearInterval(SessionIntervalHold.current);
    return clearSessionExpirationMemory() 
    }
  }
  checkForIntervalCallBack();
    SessionIntervalHold.current =  setInterval(checkForIntervalCallBack, 30000);
  return ()=> clearInterval(SessionIntervalHold.current);
      // eslint-disable-next-line
}, [])


  window.onclick = ResetTimer;
// window.onload = ResetTimer;
window.onkeyup = ResetTimer;
window.onkeydown = ResetTimer;
// window.onmousedown = ResetTimer;
// window.onmouseenter = ResetTimer;

// if(TrackSessionExpiration() === true){
//   window.location.href= "/Login"
//   localStorage.removeItem("SessionExpiration");
// }


 const authToken = localStorage.getItem("authorisedLogin")
 const getToken = localStorage.getItem("getToken");
const UserStatus = localStorage.getItem("UserStatus");
 if(((!authToken && !getToken) || !UserStatus)  ){
 RemoveLocalStorage();
 return <Navigate to ="/Login" replace/>
}

// useEffect(()=> {

//})
 
 



 return(
  <>
   {children}
    {sessionExpiration && (
      <HandleUserSession/>
     )
    }
    </>


)

// console.log(children)
}
