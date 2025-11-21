
import { Navigate } from 'react-router-dom';
import { RemoveLocalStorage } from './LocalStorage/LocalStorage';
 import { useEffect, useRef,  useContext } from 'react';

import { HandleUserSession, refreshToken} from './ApiCollection.jsx/ApiBuck';
import { ContextProvider } from './Context';
export const ProtectedRoute = ({children}) => {
 const SessionIntervalHold = useRef(null);
  const {sessionExpiration, 
    setSessionExpiration,
     sec, setSec} = useContext(ContextProvider);
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
    if(!localStorage.getItem("cxccxfd")) return;
    if((e?.target?.innerText && e?.target ?
   e?.target?.innerText !== "Logout"   : true)  && TrackSessionExpiration() === false && sessionExpiration=== false){
    const Reset = 800  *  1000;
    const resetExpiration = Date.now() + Reset;
return localStorage.setItem("SessionExpiration", resetExpiration);
 }
}
const refresh = useRef(null);

useEffect (()=> {
//Refresh Token Functiom
if(refresh.current) return clearInterval(refresh.current);
refresh.current = setInterval(async()=> {
 await refreshToken();
},300000);



const checkForIntervalCallBack = ()=> {
    
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
  return ()=> {
    clearInterval(SessionIntervalHold.current);
    clearInterval(refresh.current);
  }
      // eslint-disable-next-line
}, [])


  window.onclick = ResetTimer;
 window.onload = ResetTimer;
window.onkeyup = ResetTimer;
window.onkeydown = ResetTimer;
// window.onmousedown = ResetTimer;
 window.onmouseenter = ResetTimer;

// if(TrackSessionExpiration() === true){
//   window.location.href= "/Login"
//   localStorage.removeItem("SessionExpiration");
// }


 const authToken = localStorage.getItem("xcss{}")//On Username Login
 const emailToken = localStorage.getItem("xcss[]");// on Email Login
const UserStatus = localStorage.getItem("cxccxfd");//Tracking The UserStatus from the frontend
 if(((!authToken && !emailToken) || !UserStatus) 
  || ((!authToken && !emailToken) && !UserStatus)   ){
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
