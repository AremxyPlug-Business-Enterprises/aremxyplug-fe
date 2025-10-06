
import { Navigate } from 'react-router-dom';
import { RemoveLocalStorage } from './LocalStorage/LocalStorage';
import { useLocation } from 'react-router-dom';
export const ProtectedRoute = ({children}) => {
  const locationObj = useLocation();
const pathname = locationObj.pathname;
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
// }
  const authToken = localStorage.getItem("authorisedLogin")
 const getToken = localStorage.getItem("getToken");
const UserStatus = localStorage.getItem("UserStatus");
 if((!authToken && !getToken) || !UserStatus  ){
    RemoveLocalStorage();
     return <Navigate to ="/login" replace/>
  }


    
// const TrackSessionActicty = ()=> {
//     const expiryTime = localStorage.getItem("SessionExpiration");
//     if(!expiryTime) return false;
   
// return Date.now() > Number(expiryTime)
// }

// const AutoLogOut = ()=> {
//     if(TrackSessionActicty()){
//        alert("Session Expired: You have been logged out of your session due to inactivity")
//         RemoveLocalStorage();
//         localStorage.removeItem("SessionExpiration")
//         window.location.href= "/Login" ;
// }}

// setInterval(AutoLogOut, 60000)
// function ResetTimer(){
//     const Reset = 900  *  1000;
//     const resetExpiration = Date.now() + Reset;
//    return localStorage.setItem("SessionExpiration", resetExpiration);
// }


// window.onclick = ResetTimer;
// window.onload = ResetTimer;
// window.onkeyup = ResetTimer;
// window.onkeydown = ResetTimer;
// window.onmousedown = ResetTimer;
// window.onmouseenter = ResetTimer;






 return children;
// console.log(children)
}
