import React from "react";
import "../../CurrencyConversion/currencyConversion.css";
import copy from "../Images/copy.svg"
import { useState, Link } from "react";
import { Modal } from "../../Screens/Modal/Modal";
// import { useContext } from "react";
// import { ContextProvider } from "../../Context";


const SuccessfulConversion = () => {

  // const {
  //   conversionSuccessful,
  //   setConversionSuccessful,
  //   handleReceipt,
  // } = useContext(ContextProvider)

  const [conversionSuccessful, setConversionSuccessful] = useState(true)

    const amtToConvert = (`${10},000`);
    const amtToReceive = 10;
    // const availableBalance = (`${50},000`);
    
const CopyButton = ({ textToCopy }) => {
    const handleCopyClick = () => {
      navigator.clipboard.writeText(textToCopy)
        .then(() => {
          // Handle successful copy, e.g., show a success message
          alert('Copied to clipboard');
        })
        .catch((error) => {
          // Handle error, e.g., show an error message
          console.error('Copy failed: ' + error);
        });
    };
  
    return (
      <button onClick={handleCopyClick}>
        <img src={copy} alt="" className="md:w-[13px] md:h-[15px] lg:w-[21px] lg:h-[27px]"/>
      </button>
    );
  };


//   const SessionNumber = document.getElementById("CopySessionIdNumber").innerHTML;

    return(
       <div>
        {conversionSuccessful &&
            (
            
            <Modal>
           
              <div className="confirmConversion shrink-0 mx-auto w-[312px] h-[423px] lg:w-[880px] md:w-[504.5px] md:h-[610px] lg:h-[1000px]">
               <div className="flex justify-between items-center mx-[3%] lg:h-[60px] md:h-[35px] h-[18px]">
               <Link to="/">
                     <img
                       className=" w-[15px] h-[10px] md:w-[24px] md:h-[15px] lg:w-[42px] lg:h-[25px]"
                       src="/Images/login/arpLogo.png"
                       alt=""
                     />
                   </Link>
               <img onClick={()=>setConversionSuccessful(false)}
                       className=" w-[18px] h-[18px] md:w-[35px] md:h-[35px] lg:w-[29px] lg:h-[29px]"
                       src="/Images/transferImages/close-circle.png"
                       alt=""
                     />
               </div>
               <hr className="h-[6px] bg-[#04177f] border-none md:h-[10px] lg:h-[12px]" />
               <div className="shrink-0 mx-auto w-[270px] md:w-[474px] lg:w-[830px]">
                   <div className="text-center font-semibold text-[9px] md:text-[9.17px] lg:text-[16px] pt-[23px] md:pt-[15px]"
                   >Conversion Successful</div>
                   <img
                     className="w-[50px] h-[50px] mx-auto mb-[2%] lg:w-[70px] lg:h-[70px]"
                     src="./Gif/checkMarkGif.gif"
                     alt="/"
                   />
                   <div className="text-[#7C7C7C] text-[6px] md:text-[9.12px] lg:text-[16px] font-medium text-center  pb-1 md:pb-3">You have successfully converted &nbsp;
                      <span className="text-black text-[8px] md:text-[11.46px] lg:text-[20px] font-semibold">{amtToConvert}.00</span>&nbsp;
                      from your NGN wallet to
                   </div>
                   <div className="flex flex-col gap-[8.86px] pt-[9px] md:pt-[15px] lg:pt-[25px] md:gap-[15px] lg:gap-[25px]">
                       <div className="flex justify-between font-medium text-[8px] md:text-[11.5px] lg:text-[20px]">
                           <span className="text-[#7C7C7C]">Wallet Type</span>
                           <span>United S. USD Wallet</span>
                       </div>
                       <div className="flex justify-between font-medium text-[8px] md:text-[11.5px] lg:text-[20px]">
                           <span className="text-[#7C7C7C]">Amount To Convert</span>
                           <span>{amtToConvert}.00</span>
                       </div>
                       <div className="flex justify-between font-medium text-[8px] md:text-[11.5px] lg:text-[20px]">
                           <span className="text-[#7C7C7C]">Amount To Receive</span>
                           <span>${amtToReceive}</span>
                       </div>
                       <div className="flex justify-between font-medium text-[8px] md:text-[11.5px] lg:text-[20px]">
                           <span className="text-[#7C7C7C]">Conversion Rate</span>
                           <span>1 NGN ~ 0.001 USD</span>
                       </div>
                       <div className="flex justify-between font-medium text-[8px] md:text-[11.5px] lg:text-[20px]">
                           <span className="text-[#7C7C7C]">Transaction Fee</span>
                           <span>0.00</span>
                       </div>
                       <div className="flex justify-between font-medium text-[8px] md:text-[11.5px] lg:text-[20px]">
                           <span className="text-[#7C7C7C]">Order Number</span>
                           <span>12255566464564</span>
                       </div>
                       <div className="flex justify-between font-medium text-[8px] md:text-[11.5px] lg:text-[20px]">
                           <span className="text-[#7C7C7C]">Session ID</span>
                           <div>
                               <span id="CopySessionIdNumber">12255566464564<br/>12255566464564</span>
                               <CopyButton 
                               // textToCopy={SessionNumber} 
                               />
                           </div>
                       </div>
                   </div>
               </div>
               <div className="bg-[#F2FAFF] rounded-[6px] md:rounded-[9.17px] lg:rounded-[16px] mx-auto h-[34px] md:h-[32px] lg:h-[56px] w-[250px] md:w-[474px] lg:w-[830px] flex my-[19px] md:my-[38px]">
                   <div className="mx-auto self-center text-[#7C7C7C] text-[6px] md:text-[7px] lg:text-[12px] font-medium w-[171.46px] md:w-[270.99px] lg:w-[473px] text-center">
                   The conversion has been sent successfully. Please check the correspondent wallet to view the value.
                   </div>
               </div>
       
               <div className="flex w-full justify-center items-center gap-[10px] md:gap-[8.59px] lg:gap-[15px]">
                     
                       <button
                       onClick={()=>setConversionSuccessful(false)} 
                       className={`bg-[#04177f] w-[111px] lg:w-[200px] md:w-[99px] h-[40px] md:h-[24px] lg:h-[42px] lg:my-[2%] flex justify-center items-center cursor-pointer text-[12px] md:text-[12px] lg:text-[16px] font-semibold text-white rounded-[6px] md:rounded-[7px] lg:rounded-[12px]`}
                     >
                       Done
                     </button>
                     <Link to='/SuccessfulConversion'>
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
       </div>
    )
}

export default SuccessfulConversion;