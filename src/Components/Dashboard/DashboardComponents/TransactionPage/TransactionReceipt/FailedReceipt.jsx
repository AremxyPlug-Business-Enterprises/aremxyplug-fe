import React from "react";
import { useContext} from "react";
import { ContextProvider } from "../../../../Context";
import { DashBoardLayout } from "../../../Layout/DashBoardLayout";
import { Link, useNavigate } from "react-router-dom";
// import jsPDF from "jspdf";
// import html2canvas from "html2canvas";
import { useLocation } from "react-router-dom";
import { Modal } from "../../../../Screens/Modal/Modal";
import AremxyPlugIcon from "../../../../EducationPins/imagesEducation/AremxyPlug.svg";
import closeIcon from "../../../../EducationPins/imagesEducation/close-circle.svg";
import eduFailed from "../../../../EducationPins/imagesEducation/WaecFailedTransaction.svg";

export const FailedReceipt = () => {
  const navigate = useNavigate();

  const {
    // toggleSideBar,
    // walletName,
    isDarkMode,
    setOrderIdResponse,
    // date,
  } = useContext(ContextProvider);

  // const contentRef = useRef(null);

  const location = useLocation();

  if (!location.state || !location.state.transaction) {
    return <div>Error: Transaction data not found</div>;
  }
  function handleClick() {
    setOrderIdResponse({});
    navigate("/TransactionPage");
  }


  return (
    <DashBoardLayout>
      <Modal>
        {/* ${
            toggleSideBar ? "" : "lg:w-[880px] "
          } */}
        <div
          className={`w-[90%] md:w-[70%] lg:w-[40%] mx-auto overflow-hidden ${
            isDarkMode
              ? "bg-black text-white border rounded-[10px] border-white"
              : "bg-white text-black rounded-lg"
          } `}
        >
          <div className="flex justify-between w-full items-center p-4">
            <img
              // className=" w-[18px] h-[18px] md:w-[35px] cursor-pointer md:h-[35px] lg:w-[35px] lg:h-[42px]"
              className="w-6 h-6"
              src={AremxyPlugIcon}
              alt=""
            />

            <img
              src={closeIcon}
              alt=""
              onClick={handleClick}
              className="w-[18px] h-[18px]  md:w-[25px] cursor-pointer md:h-[25px] lg:w-[35px] lg:h-[35px]"
            />
          </div>
          <hr className="h-1 bg-[#04177f] border-none" />
          {/* <div className="flex flex-col justify-between items-center h-[100%]">
                    <h2
                      className="lg:text-base lg:leading-6 text-center mb-1
                      text-xs md:text-[13px] md:leading-[20px] font-semibold mt-[20px] leading-[16px]"
                    > */}
          <div className="p-4 text-center">
            <h2 className="text-lg md:text-xl font-semibold my-4">
              Purchase Failed
            </h2>
            <img
              src={eduFailed}
              // className="w-[150px] md:w-[200px]"
              className="w-32 h-32 mx-auto my-6"
              alt="transaction failed"
            />
            <p
              className={`text-sm mb-8 ${
                isDarkMode ? "text-white" : "text-gray-600"
              }`}
            >
              {/* {purchaseEduErrorType} */}
              An unexpected error has occurred, please try again.
            </p>
            <div className="flex gap-[10px] justify-between w-full px-[10px]">
              <div
                onClick={handleClick}
                // className={`bg-[#04177f] w-[111px] flex justify-center
                //   items-center  cursor-pointer text-center text-xs font-extrabold h-[40px]
                //    text-white rounded-[6px] md:w-[150px] md:rounded-[8px]
                //    md:text-base lg:w-[163px] lg:h-[38px] lg:my-[2%] `}
                className="bg-[#04177f] w-[50%] max-w-xs mx-auto py-2 text-white rounded-md font-medium"
              >
                Done
              </div>
              <Link
                to="/FailedReceipt"
                style={{
                  boxShadow: "0px 0px 2.0368096828460693px 0px #00000040",
                }}
                // className={`bg-[#ffffff] border w-[111px] border-[#0003] flex justify-center items-center text-center cursor-pointer text-xs font-extrabold h-[40px] rounded-[6px] md:w-[150px] md:rounded-[8px] md:text-base lg:w-[163px] lg:h-[38px] lg:my-[2%] ${
                //   isDarkMode ? "text-black" : "text-black"
                // }`}
                className={`w-[50%] max-w-xs mx-auto border py-2  rounded-md font-medium transition-colors ${
                  isDarkMode ? "bg-black hover:bg-slate-800 " : "bg-white"
                }`}
              >
                Receipt
              </Link>
            </div>
          </div>
        </div>
      </Modal>
    </DashBoardLayout>
  );
};

//  <div className="flex flex-col gap-[35px] lg:gap-[85px]">
//         <div
//           className={`  ${
//             toggleSideBar ? "" : "lg:w-[880px] "
//           } w-full lg:mx-auto border-[2px] rounded-[10px]`}
//         >
//           <div className="flex justify-between items-center mx-[3%] my-[2%] lg:my-[1%]">
//             <Link to="/">
//               <img
//                 className=" w-[30px] h-[15px] md:w-[40px] md:h-[20px] lg:w-[50px] lg:h-[25px]"
//                 src="/Images/login/arpLogo.png"
//                 alt=""
//               />
//             </Link>
//             <Link to="/TransactionPage">
//               {" "}
//               <img
//                 className=" w-[18px] h-[18px] md:w-[35px] md:h-[35px] lg:w-[29px] lg:h-[29px]"
//                 src="/Images/transferImages/close-circle.png"
//                 alt=""
//               />
//             </Link>
//           </div>
//           <hr className="h-[6px] bg-[#04177f] border-none md:h-[10px]" />
//           <div ref={contentRef}>
//             {" "}
//             <h3 className="font-extrabold text-[12px] my-[2%] text-center md:text-[20px] md:my-[3%] lg:text-[16px] lg:my-[2%]">
//               Transaction Receipt
//             </h3>
//             <div className="w-full flex justify-center ">
//               <img
//                 className="absolute w-[250px] h-[450px] md:w-[70%] lg:w-[50%] lg:h-[550px]"
//                 src="./Images/transferImages/receipt-background.png"
//                 alt="/"
//               />
//             </div>
//             <h3 className="font-extrabold text-[12px] mt-[2%] text-center md:text-[20px] md:my-[3%] lg:text-[16px] lg:my-[2%]">
//             Purchase Failed  on
//             </h3>
//             <span className="text-[11px] text-[#0008] font-extrabold flex justify-center items-center">
//               {date.toLocaleDateString(undefined, {
//                 year: "numeric",
//                 month: "long",
//                 day: "numeric",
//                 hour: "numeric",
//                 minute: "numeric",
//                 second: "numeric",
//                 hour12: true,
//               })}
//             </span>
//             <p className="text-[9px] text-[#0008] px-[20px] text-center my-2 md:text-[14px] lg:text-[14px] bg-[#FDCECE] text-[#F95252] mx-[10px] border-[#F93232] border-[1px] rounded-[10px] py-[10px]">
//             Purchase Failed due to an unexpected error that occured. Please try again.{" "}
//             </p>
//             <div className="flex flex-col gap-3">
//               {/* ========================Recipient Info================== *
//               <div className="flex flex-col gap-[3px] w-[90%] mx-auto lg:gap-[5px]">
//                 <div className="flex gap-[5px] items-center text-[10px] lg:text-[16px] font-extrabold">
//                   <p>Recipient Info</p>
//                   <img
//                     className="w-[13px] h-[13px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
//                     src="./Images/dashboardImages/arrowright.png"
//                     alt="/"
//                   />
//                 </div>
//                 <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
//                   <p className="text-[#0008]">Network</p>
//                   <span>{transaction.network}</span>
//                 </div>
//                 <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
//                   <p className="text-[#0008]">Product</p>
//                   <span>{transaction.product}</span>
//                 </div>
//                 <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
//                   <p className="text-[#0008]">Plan</p>
//                   <span></span>
//                 </div>
//                 <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
//                   <p className="text-[#0008]">Recipient Name</p>
//                   <span>{transaction.recipientname}</span>
//                 </div>
//                 <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
//                   <p className="text-[#0008]">Phone Number</p>
//                   <span>{transaction.phonenumber}</span>
//                 </div>
//                 <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
//                   <p className="text-[#0008]">Amount</p>
//                   <span>{transaction.amount}</span>
//                 </div>
//               </div>

//               {/* ===================Sender Info======================
//               <div className="flex flex-col gap-[3px] w-[90%] mx-auto lg:gap-[5px]">
//                 <div className="flex gap-[5px] items-center text-[10px] lg:text-[16px] font-extrabold">
//                   <p>Sender Info</p>
//                   <img
//                     className="w-[13px] h-[13px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
//                     src="./Images/dashboardImages/arrowright.png"
//                     alt="/"
//                   />
//                 </div>
//                 <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
//                   <p className="text-[#0008]">Customer Name</p>
//                   <span>Aremxyplug</span>
//                 </div>
//                 <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
//                   <p className="text-[#0008]">Wallet Type</p>
//                   <span>{walletName + " Wallet"}</span>
//                 </div>
//               </div>

//               {/* ===================Transaction Info====================
//               <div className="flex flex-col gap-[3px] w-[90%] mx-auto lg:gap-[5px]">
//                 <div className="flex gap-[5px] items-center text-[10px] lg:text-[16px] font-extrabold">
//                   <p>Transaction Info</p>
//                   <img
//                     className="w-[13px] h-[13px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
//                     src="./Images/dashboardImages/arrowright.png"
//                     alt="/"
//                   />
//                 </div>
//                 <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
//                   <p className="text-[#0008]">Product</p>
//                   <span>{transaction.product}</span>
//                 </div>
//                 <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
//                   <p className="text-[#0008]">Description</p>
//                   <span>{transaction.description}</span>
//                 </div>
//                 <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
//                   <p className="text-[#0008]">Order Number</p>
//                   <span>{transaction.orderNo}</span>
//                 </div>
//                 <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
//                   <p className="text-[#0008]">Transaction ID</p>
//                   <span>0331njokdhtf55</span>
//                 </div>
//               </div>
//             </div>
//             <div className="rounded-[8px] bg-[#E2F3FF] mx-4 h-[45px] my-5 flex justify-between items-center px-[4%] md:h-[65px] lg:h-[75px]">
//               <p className="text-[8px] text-center mx-auto w-[200px] md:text-[14px] md:w-[80%] lg:text-[16px]">
//               Earn free points on every successful transactions, redeem your earned points to real money, withdrawn to your bank account instantly.
//               </p>
//             </div>
//           </div>

//           <div className="flex w-full px-[20px] mx-auto mb-[5%] md:w-[60%] ">
//             <button
//               onClick={() => {
//                 handleShareClick();
//               }}
//               className={`bg-[#04177f] w-[111px] flex justify-center items-center mx-auto cursor-pointer text-[12px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[16px] lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
//             >
//               Share Receipt
//             </button>
//             <button
//               onClick={() => {
//                 handleSaveAsPDFClick();
//               }}
//               className={`bg-[#ffffff] border-[1px] w-[111px] border-[#0003] flex justify-center items-center mx-auto cursor-pointer text-[12px] font-extrabold h-[40px] rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[16px] lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
//             >
//               Save as PDF
//             </button>
//           </div>
//         </div>

//         <div
//           className={`${
//             isDarkMode ? "mb-[1%]" : "mb-[5%]"
//           } flex gap-[15px] justify-center items-center lg:mb-[%]`}
//         >

//          {/* ===============FOOTER===========
//          <div className="flex gap-2 justify-center items-center mb-[15%] md:mt-40 mt-[50%] lg:mt-[50%]">
//             <h2 className="text-[8px] leading-[12px] lg:text-[16px]">
//               You need help?
//             </h2>
//             <Link
//               to={`/ContactUs`}
//               className="text-[8px] leading-[12px] text-white bg-primary px-2 py-1 rounded-full lg:text-[16px] lg:px-[10px] lg:py-[10px]"
//             >
//               Contact Us
//             </Link>
//           </div>
//         </div>
//       </div>
