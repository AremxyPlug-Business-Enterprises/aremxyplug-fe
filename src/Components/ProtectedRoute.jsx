
import { Navigate } from 'react-router-dom';
 import { useEffect, useRef,  useContext} from 'react';
import {  refreshToken} from './ApiCollection.jsx/ApiBuck';
import { ContextProvider } from './Context';
import { ActivityWrapper } from './ActivityWrapper';
import { RealTimeUpdates } from './RealTimeUpdates';
  const ProtectedRoutes = ({children}) => {

const {
 setNetworkIssue, setSessionModal,  } 
   = useContext(ContextProvider);
      const refresh = useRef(null);

useEffect(()=> {
 
  refresh.current = setInterval(()=> {
    refreshToken(setNetworkIssue ? setNetworkIssue : ()=> {}, 
    setSessionModal ? setSessionModal : ()=> {})
  }, 240000)

 return ()=> clearInterval(refresh.current)
 //eslint-disable-next-line
 },[])

 const SessionExpiration = localStorage.getItem("SessionExpiration")
const authToken = localStorage.getItem("xcss{}")//On Username Login
 const emailToken = localStorage.getItem("xcss[]");// on Email Login
const UserStatus = localStorage.getItem("cxccxfd");//Tracking The UserStatus from the frontend
 if(((!authToken && !emailToken  ) || !UserStatus || !SessionExpiration) 
  || (((!authToken && !emailToken) && !UserStatus) || !SessionExpiration)){
 //RemoveLocalStorage();
 return <Navigate to ="/Login" replace/>
}

return(
  <ActivityWrapper>
    <RealTimeUpdates>
        {children}
        </RealTimeUpdates>
 </ActivityWrapper>
)}
export default ProtectedRoutes;

