import { motion } from "framer-motion";
import { useContext } from "react";
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







export const  TaskProgressModal = ({onHide, getUpdatedTask, webSocketMessage, firstNotCompletedTask})=> {
  console.log(webSocketMessage)
  const trueFilteredTask = Array.isArray(getUpdatedTask) ? getUpdatedTask?.filter((taskDone)=> {
    return taskDone?.completed === true
  }) : []
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale : 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      className="fixed  top-[15%] lg:right-1/4 -translate-y-1/2 w-[360px]
       bg-white rounded-2xl shadow-xl p-5 z-40">
      <h3 className="text-lg font-semibold mb-4">
        Testing Phase Progress
      </h3>
    <ul className="space-y-3">
        {TASKS.map((task, index) =>{
          const completedTask
           = getUpdatedTask?.find((dataBaseRes)=>
             dataBaseRes?.task_code === task?.logo && dataBaseRes?.completed === true )
       return(
           <li key={task.id}
            className="flex items-start gap-3 p-3 rounded-xl bg-gray-50"
          >
            {/* Placeholder completion visual */}
           
            <div className="w-5 h-5 rounded-full border-[2px] self-center  border-gray-500 mt-1" >
              
            < div className = {`${(completedTask?.task_code === task?.logo || (webSocketMessage?.task === task?.logo && webSocketMessage?.completed === true))? "bg-green-600" : ""} 
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
    <p className = {`text-[12px] font-[800] leading-[16px] capitalize
      ${trueFilteredTask?.length < 5 ? "text-black" : "text-green-600"}`}>
 {trueFilteredTask?.length < 5 ?   "Next Step: ": "Task Completed"}
   {webSocketMessage?.task && webSocketMessage?.completed === true  ? webSocketMessage?.task  : 
    firstNotCompletedTask?.task_code ?  firstNotCompletedTask?.task_code : "" }
    </p>
      <div className="mt-5 flex justify-between">
        <Link to ={firstNotCompletedTask?.task_code === "kyc" 
        || (webSocketMessage?.task === "kyc" && webSocketMessage?.completed === true)
          ? "/ProfileSettingMain" : 
          firstNotCompletedTask?.task_code === "point_redeem"  || (webSocketMessage?.task === "point_redeem" && webSocketMessage.completed === true)
          ? "/point-redeem"  : "" } className="text-sm text-gray-600">
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
  onClick, progressNumber})=>  {
     return (
    <motion.button
      onClick={onClick}
      whileTap={{ scale: 0.9 }}
      className="fixed right-6 top-3/4 -translate-y-1/2 w-16 h-16 rounded-full bg-white shadow-lg 
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

//Fold and throw the modal
