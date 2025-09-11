
import { Navigate } from 'react-router-dom';
export const ProtectedRoute = ({children}) => {
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
     return <Navigate to ="/login" replace/>
  }

 //Creating of auto Logout
 
// console.log(value);

//Check Session Activity

// let handleScrollMotion;
// let ValueTimer;
// let ControlValueTimer;
// const ScrollController = ()=> {
//   console.log("Runnimng scroll one time")
//      //clearTimeout(ControlValueTimer);
//        handleScrollMotion = false
//     if(handleScrollMotion === false){
// ControlValueTimer = setTimeout(()=>{
 
//    RemoveLocalStorage();
//    window.location.replace("/Login");
  
// }, 60000)
//     }
// console.log(ControlValueTimer);
// window.addEventListener("scroll", ()=> {
// clearTimeout(ControlValueTimer);

// })
// }
// //Handling the scroll one time
//  ScrollController();

// window.addEventListener("scroll", (event)=>{
  
//   //console.log(event);
// if(event.type === "scroll"){
//  // console.log(event);
//   handleScrollMotion = true;
 
//   if(handleScrollMotion === true){
//     console.log("Tunning here")
//  ValueTimer = setTimeout(()=>{
//   RemoveLocalStorage();
//    window.location.replace("/Login");
//   }, 60000)
// clearTimeout(ValueTimer);
//   }
// }})




 

//console.log(ControlValueTimer);
//console.log(holdEvent);


const value = document.cookie;
const checkSessionToken = value.split(";");
// console.log(holdEvent)
//const event = ["DOMContentLoaded", "pageshow", "focus"]

   
// const handleAutoLogOut =()=> {
//     RemoveLocalStorage();
//   return <Navigate to ="/Login" replace/>
// }

// if(children.type.name) {
//   // alert("You are under the child component of protected route")
//  if(UserStatus === "true"  && checkSessionToken?.length === 3){
//   //alert("Child returned")
// return children;
// }else if(UserStatus === "true" && checkSessionToken?.length < 3){
//    RemoveLocalStorage();
//   return <Navigate to ="/Login" replace/>
// }
// }
// else if(children.type.name && document.visibilityState === "hidden" && UserStatus === "true" ){
//   return handleAutoLogOut();
// }

// console.log(checkSessionToken[2]?.startsWith("sessionToken"))
// const handleAutoLogOut =()=> {
//     RemoveLocalStorage();
//   return <Navigate to ="/Login" replace/>
// }
// if(UserStatus === "true" && checkSessionToken?.length < 3){
//   return handleAutoLogOut();
//  }





//   <HandleUserSession/>

 

    // window.onload(()=> {

    // })
//     const handleAutoLogOut =()=> {
//     RemoveLocalStorage();
//   return <Navigate to ="/Login" replace/>
// }
//console.log(children)

 return children;
// console.log(children)

}
