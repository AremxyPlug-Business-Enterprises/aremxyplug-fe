import {useContext, useEffect, useRef} from 'react';
import { useLocation } from 'react-router-dom';
import { ContextProvider } from './Context';
import { GetFunction , NetworkPopUp, InternalLoginSession} from './ApiCollection.jsx/ApiBuck';
import { TaskProgressController } from './Motion';


export const RealTimeUpdates = ({children}) => {
     const {setProgressTaskBarResponse, setNetworkIssue, networkIssue,
         setWebSocketMessage,  progressTaskBarResponse, sessionModal, setSessionModal} = useContext(ContextProvider)
  
         const locationObj = useLocation()
          
           const  Page = typeof locationObj.pathname === "string" ? locationObj?.pathname?.slice(1) : ""
          const CreateWebSocket = ()=> {
    let connectionSocket = false;
    if(connectionSocket.readyState === WebSocket.OPEN 
      || connectionSocket.readyState === WebSocket.CONNECTING){
      return;
    }
     connectionSocket = new WebSocket(`wss://api.aremxyplug.com/api/v1/ws/events`);
      connectionSocket.onopen =()=> {
     //   console.log("Socket running")
      }
    
      connectionSocket.onmessage = (event)=>{
        try{
         const data = JSON.parse(event.data)
           setWebSocketMessage(data);
         return data;
        }catch(error){
          throw new Error("Error connecting to the websocket")
        }
      } 
      }

    //   Request to retrieve updated task response
      const handleTaskProgress = async()=> {
      let path = `tasks/progress`
        await GetFunction(path, ()=> {},
        //Function At Success
         (response)=> {
          setProgressTaskBarResponse(response)
         // if(!navigator.onLine && networkIssue ===false) return setNetworkIssue(true)
     
        }, (ErrorType)=> {
          if(ErrorType === "unauthorised"){
            if(sessionModal) return;
            if(!sessionModal) setSessionModal(true)
          }
        },()=> {}, setNetworkIssue)
      }
       if(progressTaskBarResponse?.data?.data === undefined && navigator.onLine){
  
  handleTaskProgress();
  }
    const realTimeUpdate = useRef(null)
    useEffect(()=> {
 realTimeUpdate.current = setInterval(()=> {
      window.addEventListener("online", ()=> {
    if(navigator.onLine && networkIssue === true) setNetworkIssue(false);
      } ) 
}, 2000)
 
//Functions we dont necessarily have to run every 2 seconds
 
CreateWebSocket()
return ()=> clearInterval(realTimeUpdate.current)
//eslint-disable-next-line
    }, [])
   
    
   
  return (
    <div className="flex flex-col h-full  w-full">
      {children}
       {(progressTaskBarResponse?.data?.data) && (
        <div className="relative">
           <TaskProgressController/>
           </div>
           )} 
           {networkIssue === true && <NetworkPopUp Page ={Page}  />}
           {sessionModal  && <InternalLoginSession/>}
        </div>
  )
}

