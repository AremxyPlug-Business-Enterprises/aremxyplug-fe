
import { Navigate } from 'react-router-dom';
import { RemoveLocalStorage } from './LocalStorage/LocalStorage';
 import { useEffect, useRef,  useContext, useMemo } from 'react';
import { HandleUserSession, refreshToken} from './ApiCollection.jsx/ApiBuck';
import { ContextProvider } from './Context';
import { FloatingProgressCircle, TaskProgressModal } from './Motion';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import { GetFunction } from './ApiCollection.jsx/ApiBuck';

export const ProtectedRoute = ({children}) => {
 
 const SessionIntervalHold = useRef(null);
  const {sessionExpiration, 
    setSessionExpiration, openTaskBar, setOpenTaskBar, setProgressTaskBarResponse, progressTaskBarResponse,
     sec, setSec} = useContext(ContextProvider);
       
  ;//Handling getting the data from the mongo data base before the websocket linking
const handleTaskProgress = async()=> {
  let path = `tasks/progress`
    await GetFunction(path, ()=> {},
    //Function At Success
     (response)=> {
      setProgressTaskBarResponse(response)
      if(!navigator.onLine) return alert("Your internet connection is quite unstable")
 
    }, ()=> {},()=> {})
}
//The Modal Handling for the user Task Progress Bar
//Array to help organise taskBar Progress according to the way frontend requires it.
const order = [
  "signup",
  "kyc",
  "fund_wallet",
  "transaction_volume",
  "point_redeem"
];




    //Filter the task not completed/ done
 
  const memoedProgress = useMemo(()=>  progressTaskBarResponse?.data?.data?.tasks, [progressTaskBarResponse])
 

   const orderedUpdatedTask = 
  progressTaskBarResponse?.data?.data?.tasks?.length > 1 ? 
   Array.from(memoedProgress)?.sort((a, b)=>{
return order.indexOf(a.task_code) - order.indexOf(b.task_code);
})  : [];

const filterTaskNotCompleted =  orderedUpdatedTask?.filter((dataBaseRes)=> dataBaseRes?.completed === false);
    const firstNotCompletedTask = Array.isArray(filterTaskNotCompleted) && filterTaskNotCompleted?.length < 1 ? 
     filterTaskNotCompleted?.find((_, index)=>  index === 0 ) : {};
       
      //Declarations for floating progress circle
   const getCompletedTask = orderedUpdatedTask?.filter((task)=> task?.completed === true)

//Progress
const progressNumber = Array?.isArray(getCompletedTask) ?  getCompletedTask?.length * 20 : 0;
//Ends here
 const TaskProgressController = ()=> {
return (
    <>
      <FloatingProgressCircle
        onClick={() => {
          if(openTaskBar === true){
          setOpenTaskBar(false)
          }else{
            setOpenTaskBar(true)
          }
        }}
      progressNumber = {progressNumber}/>
      <AnimatePresence>
          <motion.div
            initial={{ scale: 1 }}
            exit={{
              scaleY: 0.6,
              scaleX: 0.8,
              opacity: 0,
              x: 60,
              rotate: 8,
              transition: { duration: 0.7, ease: "easeInOut" },
            }}
          >
          {openTaskBar && (
            <TaskProgressModal 
            onHide={() => {
              setOpenTaskBar(false)
            } 
            } getUpdatedTask ={memoedProgress} 
            firstNotCompletedTask = {firstNotCompletedTask}/>
          )}
          
          </motion.div>
      </AnimatePresence>
    </>
  );
}

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
   e?.target?.innerText !== "Logout"   : true) 
    && TrackSessionExpiration() === false
     && sessionExpiration=== false){
    const Reset = 800  *  1000;
    const resetExpiration = Date.now() + Reset;
return localStorage.setItem("SessionExpiration", resetExpiration);
 }
}
const refresh = useRef(null);

useEffect (()=> {
  setOpenTaskBar(true);
handleTaskProgress();
//Refresh Token Function
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

 const authToken = localStorage.getItem("xcss{}")//On Username Login
 const emailToken = localStorage.getItem("xcss[]");// on Email Login
const UserStatus = localStorage.getItem("cxccxfd");//Tracking The UserStatus from the frontend
 if(((!authToken && !emailToken) || !UserStatus) 
  || ((!authToken && !emailToken) && !UserStatus)){
 RemoveLocalStorage();
 return <Navigate to ="/Login" replace/>
}
return(
  <>
        {children}
  {sessionExpiration && (
      <HandleUserSession/>
     )}
     {(progressTaskBarResponse?.data?.data ) && (
   <TaskProgressController/>   
     )} 
    </>
)


}
