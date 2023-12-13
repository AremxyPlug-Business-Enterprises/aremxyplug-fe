import React from "react";
import "../../TvSubscription/TvSubscription.css";
import { useContext } from "react";
import { ContextProvider } from "../../Context";
import { Modal } from "../../Screens/Modal/Modal";
import { Link } from "react-router-dom";


 const StarTimesSuccessfulPopup = () => {
  
   const {
     starTimesSuccessful, 
     setStarTimesSuccessful,
     toggleSideBar,
     mobileNumber,
     flagResult,
     cardName,
     smartCard,
     tvEmail,
     selectedOptionStarTimes,
  } = useContext(ContextProvider)

  
  const valueWithoutTilde = selectedOptionStarTimes.split(" ~ ")[0];
  // const trimmedValue = valueWithoutTilde.trim();
  
  // const CopyButton = ({ textToCopy }) => {
  //   const handleCopyClick = () => {
  //     navigator.clipboard.writeText(textToCopy)
  //       .then(() => {
  //         // Handle successful copy, e.g., show a success message
  //         alert('Copied to clipboard');
  //       })
  //       .catch((error) => {
  //         // Handle error, e.g., show an error message
  //         console.error('Copy failed: ' + error);
  //       });
  //   };
  //   return (
  //       <button onClick={handleCopyClick}>
  //         <img src="./Images/currencyImages/copy.svg" alt="" className="md:w-[13px] md:h-[15px] lg:w-[21px] lg:h-[27px]"/>
  //       </button>
  //     );
  //   };

    return(
       <>
       {starTimesSuccessful &&
            (
            <Modal>
           
       <div className={`confirmTV mx-auto  ${
              toggleSideBar ? " lg:ml-[20%] lg:w-[40%]" : "lg:w-[40%]"
            } w-[90%]`}>
        <div className="flex justify-between items-center mx-[3%] my-[2%] md:my-[1%]">
        <Link to="/">
              <img
                onClick={()=>setStarTimesSuccessful(false)}
                className=" w-[15px] h-[10px] md:w-[24px] md:h-[15px] lg:w-[42px] lg:h-[25px]"
                src="/Images/login/arpLogo.png"
                alt=""
              />
                </Link>
          <Link to='/TvSubscription'>
              <img
                    onClick={() => { setStarTimesSuccessful(false);}}
                className=" w-[18px] h-[18px] md:w-[35px] md:h-[35px] lg:w-[29px] lg:h-[29px]"
                src="/Images/transferImages/close-circle.png"
                alt=""
                  />
            </Link>
        </div>
        <hr className="h-[6px] bg-[#04177f] border-none md:h-[10px]" />
        <div className="">
            <div className="text-[12px] my-[4%] font-medium text-center md:text-[20px] md:my-[3%] lg:text-[14px] lg:my-[2%]"
            >Subscription Successful</div>
            <img
              className="w-[50px] h-[50px] mx-auto mb-[2%] lg:w-[120px] lg:h-[120px] md:w-[78px] md:h-[78px]"
              src="./Gif/checkMarkGif.gif"
              alt="/"
            />
            <div className="text-[#7C7C7C] w-[97%] mx-auto text-[10px] font-bold text-center mb-2 md:pb-2 lg:pb-3 md:text-[14px] lg:text-[14px]">You have successfully subscribed &nbsp;
                  <span className="text-black font-bold text-[10px] md:text-[16px] lg:text-[14px]">{valueWithoutTilde}</span>&nbsp;
                  From Your {" "}
                  {flagResult} {" "} to
            </div>
            <div className="flex flex-col gap-2 lg:gap-4 ">
            <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between lg:text-[15px] font-semibold">
                    <span className="text-[#7C7C7C]">Decoder Type</span>
                    <div className="flex">
                      <img src="./Images/TvSubscription/startimesIcon.svg" alt="" className="md:w-[74px] md:h-[27px] lg:w-[90px] lg:h-[35px]" />
                      <span>StarTimes</span>
                    </div>
                    
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between lg:text-[15px] font-semibold">
                    <span className="text-[#7C7C7C]">Package</span>
                    <span>{selectedOptionStarTimes}</span>
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between lg:text-[15px] font-semibold">
                    <span className="text-[#7C7C7C]">Smartcard / IUC Number</span>
                    <span>{smartCard}</span>
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between lg:text-[15px] font-semibold">
                    <span className="text-[#7C7C7C]">Card Name</span>
                    <span>{cardName}</span>
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between lg:text-[15px] font-semibold">
                    <span className="text-[#7C7C7C]">Phone Number</span>
                    <span>{mobileNumber}</span>
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between lg:text-[15px] font-semibold">
                    <span className="text-[#7C7C7C]">Email</span>
                    <span>{tvEmail}</span>
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between font-semibold lg:text-[15px]">
                    <span className="text-[#7C7C7C]">Payment Method</span>
                    <span>{flagResult}</span>
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between font-semibold lg:text-[15px]">
                    <span className="text-[#7C7C7C]">Order Number</span>
                    <span>0124yend44</span>
                </div>
            </div>
        </div>
        <div className="bg-[#F2FAFF] mx-10 h-[45px] my-5 flex justify-between items-center px-[4%] md:h-[65px] lg:h-[75px]">
            <div className="text-[7px] text-center mx-auto w-[171px] md:text-[14px] md:w-[80%] lg:text-[14px] font-semibold">
            The decoder has been subscribed successfully. Please kindly confirm from the smartcard / iuc. You can contact us for any further assistance.
            </div>
        </div>

        <div className="flex w-full justify-center items-center gap-[10px] md:gap-[8.59px] lg:gap-[15px] pb-4 md:pb-2">
        <Link to='/TvSubscription'>
                <button
                    onClick={() => { setStarTimesSuccessful(false); 
                      window.location.reload();}} 
                className={`bg-[#04177f] w-[111px] lg:w-[200px] md:w-[99px] h-[40px] md:h-[24px] lg:h-[42px] lg:my-[2%] flex justify-center items-center cursor-pointer text-[12px] md:text-[12px] lg:text-[16px] font-semibold text-white rounded-[6px] md:rounded-[7px] lg:rounded-[12px]`}
              >
                Done
                  </button>
              </Link>
              <Link to='/StarTimesReceipt'>
                <button
                style={{boxShadow : '0px 0px 2.0368096828460693px 0px #00000040'}} className={`border-[1px]  w-[111px] lg:w-[200px] md:w-[99px] h-[40px] md:h-[24px] lg:h-[42px] lg:my-[2%] flex justify-center items-center cursor-pointer text-[12px] md:text-[12px] lg:text-[16px] font-semibold rounded-[6px] md:rounded-[7px] lg:rounded-[12px]`}
                >
                  Receipt
                </button>
                </Link>
        </div>
       </div>   
            </Modal>
          )}
       </>
    )
}


export default StarTimesSuccessfulPopup