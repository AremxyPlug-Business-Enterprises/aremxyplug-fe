import React from "react";
import "../../TvSubscription/TvSubscription.css";
import { useContext } from "react";
import { ContextProvider } from "../../Context";
import { Modal } from "../../Screens/Modal/Modal";
import { Link } from "react-router-dom";
import styles from "../../AirTimePage/AirtimeVtu.module.css";


 const StarTimesSuccessfulPopup = ({handleReceivedData, userVerifiedName}) => {
  
   const {
     starTimesSuccessful, 
     setStarTimesSuccessful,
     toggleSideBar,
     starTimesMobileNumber,
     flagResult,
    // cardName,
     starTimesSmartCard,
     starTimesEmail,
     selectedOptionStarTimes,
     isDarkMode, 
     starTimesFlagResult
  } = useContext(ContextProvider)

  
  const valueWithoutTilde = selectedOptionStarTimes.split(" ~ ")[0];
 
   const handleReceipt = ()=> {
    handleReceivedData();
     setStarTimesSuccessful(false)
    }

    return(
       <>
       {starTimesSuccessful &&
            (
            <Modal>
           <div className={`w-full flex justify-center h-full 
             py-[30px] px-[15px] lg:items-center
              items-end`}>
       <div className={` bvnQuery lg:rounded-[12px] rounded-[10px] 
              h-[520px] ${ toggleSideBar ? " lg:ml-[20%] lg:w-[40%]" : "lg:w-[40%]"
              } w-[100%] md:w-[60%] overflow-auto  ${isDarkMode ? "bg-black text-white border rounded-[10px] border-white": "bg-white text-black"} `}>
        <div className="flex justify-between items-center 
        mx-[3%] my-[2%] md:my-[1%]">
        <div>
              <img
                className=" w-[15px] h-[10px] md:w-[24px] md:h-[15px] lg:w-[42px] lg:h-[25px]"
                src="/Images/login/arpLogo.png"
                alt=""
              />
                </div>
          <div>
              <img
                    onClick={() => { setStarTimesSuccessful(false);}}
                className=" w-[18px] h-[18px] md:w-[35px] md:h-[35px] lg:w-[29px] lg:h-[29px]"
                src="/Images/transferImages/close-circle.png"
                alt=""
                  />
            </div>
        </div>
        <hr className="h-[6px] bg-[#04177f] border-none md:h-[10px]" />
        <div className="">
            <p className={`text-[12px] font-extrabold my-[4%] 
            text-center md:text-[20px] md:my-[3%] lg:text-[14px] lg:my-[2%] ${isDarkMode ? "text-white" : "text-[#000]"}`}
            > Subscription Successful</p>
            <img
              className="w-[50px] h-[50px] mx-auto mb-[2%]
               lg:w-[70px] lg:h-[70px]"
              src="./Gif/checkMarkGif.gif"
              alt="/"
            />
            <p className={`font-semibold w-[97%] mx-auto text-[10px] text-center
               mb-2 md:pb-2 lg:pb-3 md:text-[14px] lg:text-[14px]
               ${isDarkMode ? "text-white" : "text-black" }`}>
              You have successfully subscribed &nbsp;
                  <span className={` ${isDarkMode? "text-white" : "text-black"} font-bold 
                   md:text-[16px] lg:text-[14px]`}>{valueWithoutTilde}</span>&nbsp;
                  From Your {" "}
                  {starTimesFlagResult} {" "} to
            </p>
            <div className="flex mt-4 flex-col gap-2 lg:gap-4">
            <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between 
            lg:text-[15px] font-[500]">
                    <span className="text-[#7C7C7C]">Decoder Type</span>
                    <div className="flex">
                      <img src="./Images/TvSubscription/startimesIcon.svg" alt="" className="md:w-[74px] md:h-[27px] lg:w-[90px] lg:h-[35px]" />
                      <span className={`  ${isDarkMode ? "text-white" : "text-black"}`}>StarTimes</span>
                    </div>
                    
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between 
            lg:text-[15px] font-[500]">
                    <span className="text-[#7C7C7C]">Package</span>
                    <span className={`  ${isDarkMode ? "text-white" : "text-black"}`}>{selectedOptionStarTimes}</span>
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between 
            lg:text-[15px] font-[500]">
                    <span className="text-[#7C7C7C]">Smartcard / IUC Number</span>
                    <span className={`  ${isDarkMode ? "text-white" : "text-black"}`}>{starTimesSmartCard}</span>
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between 
            lg:text-[15px] font-[500]">
                    <span className="text-[#7C7C7C]">Card Name</span>
                    <span className={`  ${isDarkMode ? "text-white" : "text-black"}`}>{userVerifiedName}</span>
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between 
            lg:text-[15px] font-[500]">
                    <span className="text-[#7C7C7C]">Phone Number</span>
                    <span className={`  ${isDarkMode ? "text-white" : "text-black"}`}>{starTimesMobileNumber}</span>
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between 
            lg:text-[15px] font-[500]">
                    <span className="text-[#7C7C7C]">Email</span>
                    <span className={`  ${isDarkMode ? "text-white" : "text-black"}`}>{starTimesEmail}</span>
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between 
            lg:text-[15px] font-[500]">
                    <span className="text-[#7C7C7C]">Payment Method</span>
                    <span className={`  ${isDarkMode ? "text-white" : "text-black"}`}>{starTimesFlagResult}</span>
                </div>
                {/* <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between font-semibold lg:text-[15px]">
                    <span className="text-[#7C7C7C]">Order Number</span>
                    <span>0124yend44</span>
                </div> */}
            </div>
        </div>
      <div className={`bg-[#F2FAFF] w-[90%]   mx-auto p-[8px] my-5 flex justify-between 
        items-center md:p-[9px] lg:p-[10px] rounded-[5px] lg:rounded-[10px]
         ${
                isDarkMode ? "bg-slate-800 " : "bg-[#F2FAFF]"
              }`}>
            <p className={`text-[10px] leading-[13px] text-center
             md:text-[14px] md:leading-[18px] lg:text-[14px]  font-semibold 
             ${isDarkMode ? "text-white" : "text-black"}`}>
            The decoder has been subscribed successfully.
             Please kindly confirm from the smartcard / iuc.
              You can contact us for any further assistance.
            </p>
        </div>

        <div className="flex w-full justify-center items-center 
        gap-[10px] pb-4 md:gap-[8.59px] lg:gap-[15px] md:pb-2">
    
                <button
                    onClick={() => { setStarTimesSuccessful(false); 
                      window.location.reload();}} 
               className={`bg-[#04177f] w-[111px] lg:w-[200px] md:w-[99px]
                   h-[40px] md:h-[24px] lg:h-[42px] lg:my-[2%] flex justify-center 
                   items-center cursor-pointer text-[12px] md:text-[12px] lg:text-[16px]
                    font-semibold text-white rounded-[6px] md:rounded-[7px] 
                    lg:rounded-[12px]`}
              >
                Done
                  </button>
            
             
                <button onClick={()=> handleReceipt()}
                style={{boxShadow : '0px 0px 2.0368096828460693px 0px #00000040'}} 
                className={`border-[1px]  w-[111px] lg:w-[200px] md:w-[99px]
                   h-[40px] md:h-[24px] lg:h-[42px] lg:my-[2%] flex justify-center 
                   items-center cursor-pointer text-[12px] md:text-[12px] 
                   lg:text-[16px] font-semibold rounded-[6px] md:rounded-[7px] lg:rounded-[12px]`}
                >
                  Receipt
                </button>
         
        </div>
       </div>  
       </div> 
            </Modal>
          )}
       </>
    )
}


export default StarTimesSuccessfulPopup