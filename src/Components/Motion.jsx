import { motion, AnimatePresence } from "framer-motion";
import { useContext, useMemo, useRef } from "react";
import { ContextProvider } from "./Context";
import { Link } from "react-router-dom";



 const TASKS = [
  {
    id: 1,
    logo : "signup",
    title: "Sign Up & Sign In",
    description: "Create an account and successfully log in",
  },
  {
    id: 2,
    logo : "kyc",
    title: "Complete KYC & Generate Virtual Account",
    description: "Verify identity and generate your virtual account",
  },
  {
    id: 3,
    logo : "fund_wallet",
    title: "Fund Your Wallet",
    description: "Fund wallet with a minimum of ₦100",
  },
  {
    id: 4,
    logo : "transaction_volume",
    title: "Make ₦1,000+ Transactions",
    description: "Accumulate at least ₦1,000 in transactions",
  },
  {
    id: 5,
    logo : "point_redeem",
    title: "Redeem Points",
    description: "Complete at least one point redemption",
  },
];



           



export const  TaskProgressModal =
 ({onHide,
   getUpdatedTask,
    webSocketMessage, 
    firstNotCompletedTask})=> {    
      const {isDarkMode} = useContext(ContextProvider)  
  const trueFilteredTask = Array.isArray(getUpdatedTask) ? getUpdatedTask?.filter((taskDone)=> {
    return taskDone?.completed === true
  }) : []
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale : 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      className={`fixed  top-[15%] lg:right-1/4 -translate-y-1/2 w-[360px]
      rounded-2xl shadow-xl p-5 z-40 ${isDarkMode ? "bg-[#0F0F0F] text-white rounded-xl" : "bg-white text-black"  }`}>
      <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? "text-white" : "text-black"}`}>
        Testing Phase Progress
      </h3>
    <ul className="space-y-3">
        {TASKS.map((task, index) =>{
          const completedTask
           = getUpdatedTask?.find((dataBaseRes)=>
             dataBaseRes?.task_code === task?.logo && dataBaseRes?.completed === true )
       return(
           <li key={task.id}
            className={` ${isDarkMode ? "text-white bg-[#2C2C2C] " : "text-black bg-gray-100"} flex items-start gap-3 p-3 rounded-xl `}
          >
            {/* Placeholder completion visual */}
           
            <div className="w-5 h-5 rounded-full border-[2px] self-center  border-gray-500 mt-1" >
              
            < div className = {`${(completedTask?.task_code === task?.logo || (webSocketMessage?.task === task?.logo && webSocketMessage?.completed === true))? "bg-green-500" : ""} 
            w-[100%] h-[100%] rounded-full font-[500] text-[12px]`}/>
     </div>
              
         <div>
         
              <p className="font-medium text-sm">{task.title}</p>
              <p className="text-xs text-gray-500"> 
                {task.description}
              </p>
            </div>
          </li>
      )})}
      </ul>
    <div className = {`flex justify-between mt-2
   ${trueFilteredTask?.length < 5 ? "text-black" : "text-green-600"}`}>
         <p className={`text-[12px] font-[800] leading-[16px] capitalize ${isDarkMode && trueFilteredTask?.length < 5 ? "text-white" : (isDarkMode || !isDarkMode) && trueFilteredTask?.length === 5 ? "text-green-500" : "text-black"}`}>
 {trueFilteredTask?.length < 5 ?   "Next Step: ": "Task Completed"}
  {webSocketMessage?.task && webSocketMessage?.completed  === false  ? webSocketMessage?.task  : 
    firstNotCompletedTask?.task_code === "signup" ? "Error: Completed signup not recorded" :  
    firstNotCompletedTask?.task_code !== "signup" && firstNotCompletedTask?.task_code ? firstNotCompletedTask?.task_code : ""}
 </p>
  
<p className={`text-[12px] font-[800] leading-[16px] capitalize ${isDarkMode ? "text-white" : "text-black" }`}>
    {webSocketMessage?.task === "transaction_volume" 
     && (webSocketMessage?.progress && webSocketMessage?.progress < 1000
      && typeof webSocketMessage?.progress === "number")? 
     `Progress : ${webSocketMessage?.progress?.toLocaleString("en-NG", {style : "currency",
      currency : "NGN",
    minimumFractionDigits : 0,
    maximumFractionDigits : 0
     })}`  :  firstNotCompletedTask?.task_code === "transaction_volume"   && firstNotCompletedTask?.progress < 1000
     && (firstNotCompletedTask?.progress && typeof firstNotCompletedTask?.progress === "number") ?  `Progress : ${firstNotCompletedTask?.progress?.toLocaleString("en-NG", {style : "currency",
         minimumFractionDigits : 0,
    maximumFractionDigits : 0,
      currency : "NGN"
     })}` : ""  }
     </p>
    </div>
       <div className="mt-5 flex justify-between">
        <Link to ={firstNotCompletedTask?.task_code === "kyc" 
        || (webSocketMessage?.task === "kyc" && webSocketMessage?.completed === true)
          ? "/ProfileSettingMain" : 
          firstNotCompletedTask?.task_code === "point_redeem"  || (webSocketMessage?.task === "point_redeem" && webSocketMessage.completed === true)
          ? "/point-redeem"  : "" } 
          className={`text-sm  ${isDarkMode ? "text-gray-200" : "text-gray-600"}`}>
          Continue Tasks
        </Link>

        <button
         onClick={onHide}
          className="text-sm font-medium text-blue-600"
        >
          Hide Summary
        </button>
      </div>
    </motion.div>
  );
}

//Floating Progress bar
export const FloatingProgressCircle = ({
  containerRef, onClick, progressNumber})=>  {
   // const containerRef = useRef(null)
  //  const windowHeight = window.innerHeight;
  //  const suitableScale =windowHeight / 2;
  //  const windowWidth = window.innerWidth;
  //  const suitableScaleWidth = windowWidth / 2
  //  console.log("windowScale", suitableScale)
  
     return (
    
    <motion.button
      onClick={onClick}
        drag
        dragConstraints={containerRef}
      dragMomentum={false}

      dragElastic={0.2}
      whileDrag={{ scale: 0.95, cursor: "grabbing" }}
      whileTap={{ scale: 0.9 }}
      className="fixed right-6 top-1/2 -translate-y-1/2 cursor-grab w-16 h-16 rounded-full bg-white shadow-lg 
      flex items-center justify-center z-50"
    >
       <p className = "absolute bottom-1/4 text-blue-500 text-[12px] text-center leading-[16px] font-[500]">
          {progressNumber}%</p>
   <svg width="48" height="48">
        <circle
          cx="24"
          cy="24"
          r="20"
          stroke="#E5E7EB"
          strokeWidth="4"
          fill="none"
        />
         
        <circle
          cx="24"
          cy="24"
          r="20"
          stroke="#2563EB"
          strokeWidth="4"
          fill="none"
          strokeDasharray={126}
          strokeDashoffset={126 - (progressNumber / 100) * 126}
          strokeLinecap="round"
        />
      
      </svg>
    </motion.button>
  
  );
}

 
export  const TaskProgressController = ()=> {
const refValue = useRef(null);
  /// Order set on the frontend to ensure consistency on the response the frontend is using
   const order = [
  "signup",
  "kyc",
  "fund_wallet",
  "transaction_volume",
  "point_redeem"
];
  const {progressTaskBarResponse,
     webSocketMessage, openTaskBar, setOpenTaskBar} = useContext(ContextProvider)
 const memoedProgress = useMemo(()=>  progressTaskBarResponse?.data?.data?.tasks, [progressTaskBarResponse])
 

   const orderedUpdatedTask = 
  progressTaskBarResponse?.data?.data?.tasks?.length > 1 ? 
   Array.from(memoedProgress)?.sort((a, b)=>{
return order.indexOf(a.task_code) - order.indexOf(b.task_code);
})  : [];

const filterTaskNotCompleted =  orderedUpdatedTask?.filter((dataBaseRes)=> dataBaseRes?.completed === false);
    const firstNotCompletedTask = Array.isArray(filterTaskNotCompleted) && filterTaskNotCompleted?.length ? 
     filterTaskNotCompleted?.find((_, index)=>  index === 0 ) : {};
   const getCompletedTask = orderedUpdatedTask?.filter((task)=> task?.completed === true)
   const progressNumber = Array?.isArray(getCompletedTask) ?  getCompletedTask?.length * 20 : 0;
   //Update the task progress
 const CheckCurrentUpdate = webSocketMessage?.completed === true
 ?   filterTaskNotCompleted?.find((value)=> value?.task_code === webSocketMessage?.meta?.task_code && webSocketMessage?.completed === true ) 
 : "Error"
const floatingProgressBarUpdate
 = CheckCurrentUpdate === undefined && CheckCurrentUpdate !== "Error" && progressTaskBarResponse?.length < 5
 ? progressNumber + 20
  : typeof CheckCurrentUpdate === "object" && CheckCurrentUpdate?.completed === true ? progressNumber : progressNumber;

 return (
    <div  ref={refValue}>
      <FloatingProgressCircle
        onClick={() => {
          if(openTaskBar === true){
          setOpenTaskBar(false)
          }else{
            setOpenTaskBar(true)
          }
        }}
      progressNumber = {floatingProgressBarUpdate}/>
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
             webSocketMessage={webSocketMessage}
            firstNotCompletedTask = {firstNotCompletedTask}/>
          )}
          
          </motion.div>
      </AnimatePresence>
    </div>
  );
}
//Fold and throw the modal
