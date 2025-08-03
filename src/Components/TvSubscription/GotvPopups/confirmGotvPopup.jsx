import "../../TvSubscription/TvSubscription.css";
import { useContext, useState, useEffect } from "react";
import { ContextProvider } from "../../Context";
import { Modal } from "../../Screens/Modal/Modal";
import arrowRight from "../../../Components/EducationPins/imagesEducation/educationArrowRight.svg";

const ConfirmGotvPopup = ({passDataBalance, userVerifiedName}) => {

  const {
    confirmGotvPopup,
    setConfirmGotvPopup,
    toggleSideBar,
    setInputPinGotv,
    mobileNumber,
    tvEmail,
    smartCard,
    selectedOptionGOTV,
    cardName,
    methodImage,
    isDarkMode,
    //tvWalletBalance,

    flagResult,
    newBalance,
   tvAmount
 } = useContext(ContextProvider)



  const handleInputGotv = (event) => {
    event.preventDefault();
    setConfirmGotvPopup(false);
    setInputPinGotv(true);
  }
 
  const valueWithoutTilde = selectedOptionGOTV.split(" ~ ");

   const [balanceStatus, setBalanceStatus] = useState("");
  
     const balanceStringToNum = Number(newBalance);
              let GotvNumericAmount = Number(tvAmount);
           const updateBalance = passDataBalance?.data?.data?.data && (passDataBalance?.status === 200 || passDataBalance?.status === 201) && newBalance === ""  ?  passDataBalance?.data?.data?.data?.balance : newBalance;
              const cleanUpBalanceToNumericOnly = Number(updateBalance?.replace(/\D/g, ""));
             let CheckSufficiency =  GotvNumericAmount > (newBalance === "" || newBalance === null ? cleanUpBalanceToNumericOnly : balanceStringToNum);
    useEffect(()=> {
      const HandleBalanceStatus = ()=> {
        if(CheckSufficiency){
         setBalanceStatus("Insufficient fund")
        }else{
          setBalanceStatus("");
         }
      }
      HandleBalanceStatus()
    },[CheckSufficiency])
      //console.log(balanceStringToNum, GotvNumericAmount)
 // console.log(passDataBalance)

  return (
    <>
      {confirmGotvPopup &&
        (
          <Modal>
       <div className={`w-full flex justify-center h-full 
             py-[30px] px-[15px] lg:px-[0px] lg:items-center
              items-end`}>
            <div
              className={` bvnQuery lg:rounded-[12px] rounded-[10px] 
              h-[520px] ${ toggleSideBar ? " lg:ml-[20%] lg:w-[40%]" : "lg:w-[40%]"
              } w-[100%] md:w-[60%] overflow-auto  ${isDarkMode ? "bg-black text-white border rounded-[10px] border-white": "bg-white text-black"} `}
          >
              <div className="flex justify-end pr-2 lg:py-[10px] py-[7px]">
              <img onClick={() => { setConfirmGotvPopup(false);}}
                  className={`w-[25px] h-[25px] md:w-[35px] md:h-[35px] 
                lg:w-[26px] lg:h-[26px]`}
                  src="/Images/transferImages/close-circle.png"
                  alt=""
                />
              </div>
              <hr className="h-[6px] bg-[#04177f] border-none md:h-[10px]" />
              <div className="mx-auto">
                <p className="text-[12px] font-extrabold my-[5%] text-center md:my-[3%] md:text-[15px] 
            lg:my-[2%] lg:text-[16px]">
                  Confirm Transaction</p>
                <div className={`text-[10px] font-semibold text-center mb-2
               md:text-[12px] lg:text-[14px] mx-2 ${isDarkMode ? "text-white" : "text-black"}`}>
                  You are about to purchase&nbsp;
                  <span className={`font-extrabold text-[10px] md:text-[16px]
                     lg:text-[12px] ${isDarkMode ? "text-white" : "text-black"}`}>{valueWithoutTilde}</span>&nbsp;
                from your {" "}
                {flagResult} {" "} to
                </div>

                <div className="flex flex-col gap-3 mt-5 md:mt-6 lg:mt-7">

                  <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto 
                  justify-between font-semibold lg:text-[16px]">
                    <span className={`text-[#0008]  ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>Decoder Type</span>
                    <span className={`${isDarkMode ? "text-white" : "text-black"}`}>GOtv</span>
                  </div>
                  <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between font-semibold lg:text-[16px]">
                    <span className={`text-[#0008]  ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>Package</span>
                    <span className={`${isDarkMode ? "text-white" : "text-black"}`}>{selectedOptionGOTV}</span>
                  </div>
                  <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between font-semibold lg:text-[16px]">
                    <span className={`text-[#0008]  ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>Smartcard / IUC Number</span>
                    <span className={`${isDarkMode ? "text-white" : "text-black"}`}>{smartCard}</span>
                  </div>
                  <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between font-semibold lg:text-[16px]">
                    <span className={`text-[#0008]  ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>Card Name</span>
                    <span className={`${isDarkMode ? "text-white" : "text-black"}`}>{userVerifiedName}</span>
                  </div>
                  <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between font-semibold lg:text-[16px]">
                    <span className={`text-[#0008]  ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>Phone Number</span>
                    <span className={`${isDarkMode ? "text-white" : "text-black"}`}>{mobileNumber}</span>
                  </div>
                  <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between font-semibold lg:text-[16px]">
                    <span className={`text-[#0008]  ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>Email</span>
                    <span className= {`${isDarkMode ? "text-white" : "text-black"}`}>{tvEmail}</span>
                  </div>
                  <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between font-semibold lg:text-[16px]">
                    <span className={`text-[#0008]  ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>Amount</span>
                    <span className= {`${isDarkMode ? "text-white" : "text-black"}`}> {`${(tvAmount !== "" || tvAmount !== undefined) ? tvAmount?.toLocaleString("en-Ng",{
                      style : "currency",
                      currency : "NGN"
                    }): "₦"}`}</span>
                  </div>
                  <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between font-semibold lg:text-[16px]">
                    <span className={`text-[#0008]  ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>Payment Method</span>
                    <span className= {`${isDarkMode ? "text-white" : "text-black"}`}>{flagResult}</span>
                  </div>
                  <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between font-semibold lg:text-[16px]">
                    <span className={`text-[#0008]  ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>Transaction Fee</span>
                    <span className= {`${isDarkMode ? "text-white" : "text-black"}`}>₦0.00</span>
                  </div>
                  <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between font-semibold lg:text-[16px]">
                    <span className={`text-[#0008]  ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>Points Earned</span>
                    <span className="text-[#2ED173]">+2.00</span>
                  </div>
                </div>
              </div>

              <div className={` w-[95%] h-auto my-5 lg:my-8 flex py-[7px] 
                     justify-between items-center px-[4%] mx-auto rounded-[10px] ${isDarkMode ? "bg-black border-[1px] border-white" : "bg-[#F6F7F7]"} `}>
                             <div className="flex flex-col gap-2  ">
                               <div className="flex gap-[10px] justify-center items-center">
                                 <img
                                   className="w-[16px] h-[16px] bg-white"
                                   src={methodImage}
                                   alt="/"
                                 />
                                 <div className={`flex gap-[10px] items-center `}>
                                     <p className={`text-[12px] md:text-[14px] leading-[20px] 
                        lg:leading-[22px]  lg:text-[16px] font-[500 ${isDarkMode ? "text-white" : "text-black"}`}>
                                 Available Balance {"  "} 
                                  </p>
                                  <span className={`text-[#0008]  ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>
                                   {`(${updateBalance !== undefined ? updateBalance?.toLocaleString("en-Ng", {
                                    style : "currency",
                                    currency : "NGN"
                                   }) : "₦"})`}
                                 </span>
                                 </div>
                               </div>
                             <span className={`text-gray-500 text-[14px] font-bold leading-[20px]
                     lg:text-[16px] lg:leading-[22px] text-left `}>
                                    {balanceStatus}
                                    </span>
                             </div>
             
                             <img
                               src={arrowRight}
                               alt=""
                               className="w-[12px] h-[12px] md:w-[50px] md:h-[20px] lg:w-[80px] lg:h-[30px]"
                             />
                           </div>
              <button
              disabled ={CheckSufficiency}
                onClick={handleInputGotv}
                className={`bg-[#04177f] my-[5%] w-[95%] flex justify-center items-center mx-auto 
                  cursor-pointer text-[14px] font-extrabold
                   h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] lg:rounded-[12px] md:text-[16px] lg:text-[14px] lg:w-[163px] lg:h-[38px] lg:my-[2%]
                   ${CheckSufficiency ? "bg-gray-400" : "bg-primary"}`}
              >
                Confirmed
              </button>
            </div>
            </div>
          </Modal>
        )}
    </>
  )
}


export default ConfirmGotvPopup