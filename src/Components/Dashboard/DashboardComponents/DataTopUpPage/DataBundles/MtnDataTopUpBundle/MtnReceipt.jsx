import React, { useState, useEffect } from "react";
import { useContext, useRef } from "react";
import { ContextProvider } from "../../../../../Context";
import { DashBoardLayout } from "../../../../Layout/DashBoardLayout";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import axios from "axios"; // Import axios for making HTTP requests



// const ReceiptDetails = ({ receiptData, purchaseStatus }) => {
//   const getStatusText = () => {
//     switch (purchaseStatus) {
//       case "success":
//         return "Purchase Successful";
//       case "failed":
//         return "Purchase Failed";
//       case "pending":
//         return "Purchase Pending";
//       case "refunded":
//         return "Purchase Refunded";
//       case "cancelled":
//         return "Purchase Cancelled";
//       default:
//         return "";
//     }
//   };

//   const getBackgroundColor = () => {
//     switch (purchaseStatus) {
//       case "success":
//         return "#D5F6E3";
//       case "failed":
//         return "#FDCECE";
//       case "pending":
//         return "#FFF1D6";
//       case "refunded":
//         return "#A6D9FF";
//       case "cancelled":
//         return "#EFC6BE";
//       default:
//         return "";
//     }
//   };

//   return (
//     <div className="receipt-details">
//       <h3 className="font-extrabold text-[12px] my-[2%] text-center md:text-[20px] md:my-[3%] lg:text-[16px] lg:my-[2%]">
//         Transaction Receipt
//       </h3>
//       <div className="w-full flex justify-center">
//         <img
//           className="absolute w-[250px] h-[450px] md:w-[70%] lg:w-[50%] lg:h-[550px]"
//           src="./Images/transferImages/receipt-background.png"
//           alt="/"
//         />
//       </div>
//       <h3 className="font-extrabold text-[12px] mt-[2%] text-center md:text-[20px] md:my-[3%] lg:text-[16px] lg:my-[2%]">
//         {getStatusText()} on
//       </h3>
//       <span className="text-[11px] text-[#0008] font-extrabold flex justify-center items-center">
//         {receiptData.created_at}
//       </span>
//       <p
//         className={`text-[9px] text-[#0008] px-[20px] text-center my-2 md:text-[14px] lg:text-[14px] bg-[${getBackgroundColor()}] mx-[10px] border-[#${purchaseStatus === 'success' ? '27AE60' : purchaseStatus === 'failed' ? 'F93232' : purchaseStatus === 'pending' ? 'FFC24C' : purchaseStatus === 'refunded' ? '04177F' : 'E62E05'}] border-[1px] rounded-[10px] py-[10px]`}
//       >
//         {purchaseStatus === "pending"
//           ? "Your transaction is under process please wait while the system are confirm."
//           : purchaseStatus === "failed"
//           ? "Purchase Failed due to an unexpected error that occured. Please try again."
//           : purchaseStatus === "refunded"
//           ? "Transaction was unsuccessful and your wallet has been refunded. Please try again."
//           : purchaseStatus === "cancelled"
//           ? "Purchase Cancelled due to an unexpected error that occur. Please try again."
//           : `You have successfully purchased ${receiptData.network} ${receiptData.plan_name} ${receiptData.plan_amount} from your ${receiptData.walletName} Wallet to`}
//       </p>
//       <div className="flex flex-col gap-3">
//         {/* ========================Recipient Info================== */}
//         <div className="flex flex-col gap-[3px] w-[90%] mx-auto lg:gap-[5px]">
//           <div className="flex gap-[5px] items-center text-[10px] lg:text-[16px] font-extrabold">
//             <p>Recipient Info</p>
//             <img
//               className="w-[13px] h-[13px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
//               src="./Images/Dashboardimages/arrowright.png"
//               alt="/"
//             />
//           </div>
//           <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
//             <p className="text-[#0008]">Network</p>
//             <span>{receiptData.network}</span>
//           </div>
//           <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
//             <p className="text-[#0008]">Product</p>
//             <span>{receiptData.plan_name}</span>
//           </div>
//           <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
//             <p className="text-[#0008]">Plan</p>
//             <span>
//               {receiptData.network} {receiptData.plan_name}{" "}
//               {receiptData.plan_amount}
//             </span>
//           </div>
//           <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
//             <p className="text-[#0008]">Recipient Name</p>
//             <span>{receiptData.name}</span>
//           </div>
//           <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
//             <p className="text-[#0008]">Phone Number</p>
//             <span>{receiptData.phone_number}</span>
//           </div>
//           <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
//             <p className="text-[#0008]">Amount</p>
//             <span>{receiptData.amount}</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
  return (
    <div className="receipt-details">
      <h3 className="font-extrabold text-[12px] my-[2%] text-center md:text-[20px] md:my-[3%] lg:text-[16px] lg:my-[2%]">
        Transaction Receipt
      </h3>
      <div className="w-full flex justify-center">
        <img
          className="absolute w-[250px] h-[450px] md:w-[70%] lg:w-[50%] lg:h-[550px]"
          src="./Images/transferImages/receipt-background.png"
          alt="/"
        />
      </div>
      <h3 className="font-extrabold text-[12px] mt-[2%] text-center md:text-[20px] md:my-[3%] lg:text-[16px] lg:my-[2%]">
        {getStatusText()} on
      </h3>
      <span className="text-[11px] text-[#0008] font-extrabold flex justify-center items-center">
        {receiptData.created_at}
      </span>
      <p
        className={`text-[9px] text-[#0008] px-[20px] text-center my-2 md:text-[14px] lg:text-[14px] bg-[${getBackgroundColor()}] mx-[10px] border-[#${purchaseStatus === 'success' ? '27AE60' : purchaseStatus === 'failed' ? 'F93232' : purchaseStatus === 'pending' ? 'FFC24C' : purchaseStatus === 'refunded' ? '04177F' : 'E62E05'}] border-[1px] rounded-[10px] py-[10px]`}
      >
        {purchaseStatus === "pending"
          ? "Your transaction is under process please wait while the system are confirm."
          : purchaseStatus === "failed"
            ? "Purchase Failed due to an unexpected error that occured. Please try again."
            : purchaseStatus === "refunded"
              ? "Transaction was unsuccessful and your wallet has been refunded. Please try again."
              : purchaseStatus === "cancelled"
                ? "Purchase Cancelled due to an unexpected error that occur. Please try again."
                : `You have successfully purchased ${receiptData.network} ${receiptData.plan_name} ${receiptData.plan_amount} from your ${receiptData.walletName} Wallet to`}
      </p>
      <div className="flex flex-col gap-3">
        {/* ========================Recipient Info================== */}
        <div className="flex flex-col gap-[3px] w-[90%] mx-auto lg:gap-[5px]">
          <div className="flex gap-[5px] items-center text-[10px] lg:text-[16px] font-extrabold">
            <p>Recipient Info</p>
            <img
              className="w-[13px] h-[13px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
              src="./Images/Dashboardimages/arrowright.png"
              alt="/"
            />
          </div>
          <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
            <p className="text-[#0008]">Network</p>
            <span>{receiptData.network}</span>
          </div>
          <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
            <p className="text-[#0008]">Product</p>
            <span>{receiptData.plan_name}</span>
          </div>
          <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
            <p className="text-[#0008]">Plan</p>
            <span>
              {receiptData.network} {receiptData.plan_name}{" "}
              {receiptData.plan_amount}
            </span>
          </div>
          <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
            <p className="text-[#0008]">Recipient Name</p>
            <span>{receiptData.name}</span>
          </div>
          <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
            <p className="text-[#0008]">Phone Number</p>
            <span>{receiptData.phone_number}</span>
          </div>
          <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
            <p className="text-[#0008]">Amount</p>
            <span>{receiptData.amount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};




export const MtnReceipt = (
  receiptData,
  purchaseStatus
) => {
  const {
    // selectedNetworkProduct,
    // selectedOption,
    // recipientPhoneNumber,
    // recipientNames,
    // selectedAmount,
    walletName,
    setSelectedNetworkProduct,
    setSelectedOption,
    setSelectedAmount,
    setRecipientNames,
  } = useContext(ContextProvider);

  const {
    toggleSideBar,
    isDarkMode,
    // date,
  } = useContext(ContextProvider);

  const contentRef = useRef(null);

  const handleChange = () => {
    setSelectedNetworkProduct(false);
    setSelectedOption(false);
    setSelectedAmount("");
    setRecipientNames("");
  };

  // ===============Copy to Clipboard Function============
  //   const handleCopyClick = () => {
  //     const text = textRef.current.innerText;
  //     navigator.clipboard
  //       .writeText(text)
  //       .then(() => {
  //         alert("Copied to clipboard");
  //       })
  //       .catch((err) => {
  //         console.error("Error copying text: ", err);
  //       });
  //   };

  // ==============Share pdf Function=============
  const handleShareClick = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Receipt",
          text: "Check out this receipt!",
          url: "https://example.com",
        })
        .then(() => console.log("Shared successfully"))
        .catch((error) => console.error("Error sharing:", error));
    } else {
      console.log("Web Share API not supported.");
    }
  };

  // ==============Save Pdf Function==============
  const handleSaveAsPDFClick = () => {
    const content = contentRef.current;
    if (content) {
      const pdf = new jsPDF();
      html2canvas(content).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        pdf.addImage(imgData, "PNG", 10, 10, 190, 0);
        pdf.save("page.pdf");
      });
    }
  };
  
  const receiptTitle = () => {
    switch (purchaseStatus) {
      case "paid":
        // show this
        return <div> </div>
      case "failed":
        return <div><h1>transaction failed!</h1></div>
      default: 
        return
    }
  }

  // useEffect(() => {
  //   // Fetch receipt details from the backend API
  //   axios.get("https://aremxyplug.onrender.com/api/v1/data").then((response) => {
  //     setReceiptData(response.data.receiptData);
  //     setPurchaseStatus(response.data.purchaseStatus);
  //   }).catch((error) => {
  //     console.error("Error fetching receipt details:", error);
  //   });
    
  //   // Reset selected options
  //   // setSelectedNetworkProduct(false);
  //   // setSelectedOption(false);
  //   // setSelectedAmount("");
  //   // setRecipientNames("");
  // }, []);
  const [receiptData, setReceiptData] = useState(null); // State to hold receipt data
  const [purchaseStatus, setPurchaseStatus] = useState(null); // State to hold purchase status


  useEffect(() => {
    // Fetch receipt details from the backend API
    axios.get("your_backend_api_endpoint").then((response) => {
      setReceiptData(response.data.receiptData);
      setPurchaseStatus(response.data.purchaseStatus);
    }).catch((error) => {
      console.error("Error fetching receipt details:", error);
    });

    // Reset selected options
    // setSelectedNetworkProduct(false);
    // setSelectedOption(false);
    // setSelectedAmount("");
    // setRecipientNames("");
  }, []);


  // useEffect(() => {
  //   // Fetch data from backend API
  //   fetch("your-backend-api-url")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // Set received data into state
  //       setReceiptData(data);
  //       // Set purchase status based on data received
  //       setPurchaseStatus(data.status);
  //     })
  //     .catch((error) => console.error("Error fetching receipt data:", error));
  // }, []); // Empty dependency array ensures this effect runs only once on component mount

  return (
    <DashBoardLayout>
      <div className="flex flex-col gap-[35px] lg:gap-[85px]">
        <div
          className={`  ${toggleSideBar ? "" : "lg:w-[880px] "
            } w-full lg:mx-auto border-[2px] rounded-[10px]`}
        >
          <div className="flex justify-between items-center mx-[3%] my-[2%] lg:my-[1%]">
            <Link to="/">
              <img
                className=" w-[30px] h-[15px] md:w-[40px] md:h-[20px] lg:w-[50px] lg:h-[25px]"
                src="/Images/login/arpLogo.png"
                alt=""
              />
            </Link>
            <Link to="/MtnDataTopUpBundle">
              {" "}
              <img
                className=" w-[18px] h-[18px] md:w-[35px] md:h-[35px] lg:w-[29px] lg:h-[29px]"
                src="/Images/transferImages/close-circle.png"
                alt=""
                onClick={handleChange}
              />
            </Link>
          </div>
          <hr className="h-[6px] bg-[#04177f] border-none md:h-[10px]" />
          <div ref={contentRef}>



          {/* {receiptData && purchaseStatus && (
            <ReceiptDetails
              receiptData={receiptData}
              purchaseStatus={purchaseStatus}
            />
          )} */}
            {receiptData && purchaseStatus && (
              <ReceiptDetails
                receiptData={receiptData}
                purchaseStatus={purchaseStatus}
              />
            )}





            {purchaseStatus === "paid" && receiptData && (
              <div className="receipt-details">
                {" "}
                <h3 className="font-extrabold text-[12px] my-[2%] text-center md:text-[20px] md:my-[3%] lg:text-[16px] lg:my-[2%]">
                  Transaction Receipt
                </h3>
                {receiptTitle()}
                <div className="w-full flex justify-center ">
                  <img
                    className="absolute w-[250px] h-[450px] md:w-[70%] lg:w-[50%] lg:h-[550px]"
                    src="./Images/transferImages/receipt-background.png"
                    alt="/"
                  />
                </div>
                <h3 className="font-extrabold text-[12px] mt-[2%] text-center md:text-[20px] md:my-[3%] lg:text-[16px] lg:my-[2%]">
                  Purchase Successful on
                </h3>
                <span className="text-[11px] text-[#0008] font-extrabold flex justify-center items-center">
                  {/* {date.toLocaleDateString(undefined, {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                hour12: true,
              })} */}
                  {receiptData.created_at}
                </span>
                <p className="text-[9px] text-[#0008] px-[20px] text-center my-2 md:text-[14px] lg:text-[14px] bg-[#D5F6E3] text-[#27AE60] mx-[10px] border-[#27AE60] border-[1px] rounded-[10px] py-[10px]">
                  You have successfully purchased{" "}
                  <span className="text-[#000] font-extrabold text-[10px] md:text-[16px] lg:text-[16px]">
                    {/* {selectedOption} {" "} */} {receiptData.network}{" "}
                    {receiptData.plan_name} {receiptData.plan_amount}
                  </span>
                  from your {walletName + " Wallet"} to{" "}
                </p>
                <div className="flex flex-col gap-3">
                  {/* ========================Recipient Info================== */}
                  <div className="flex flex-col gap-[3px] w-[90%] mx-auto lg:gap-[5px]">
                    <div className="flex gap-[5px] items-center text-[10px] lg:text-[16px] font-extrabold">
                      <p>Recipient Info</p>
                      <img
                        className="w-[13px] h-[13px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                        src="./Images/Dashboardimages/arrowright.png"
                        alt="/"
                      />
                    </div>
                    <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                      <p className="text-[#0008]">Network</p>
                      <span>{receiptData.network}</span>
                    </div>
                    <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                      <p className="text-[#0008]">Product</p>
                      <span>{receiptData.plan_name}</span>
                    </div>
                    <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                      <p className="text-[#0008]">Plan</p>
                      <span>
                        {receiptData.network} {receiptData.plan_name}{" "}
                        {receiptData.plan_amount}
                      </span>
                    </div>
                    <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                      <p className="text-[#0008]">Recipient Name</p>
                      <span>{receiptData.name}</span>
                    </div>
                    <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                      <p className="text-[#0008]">Phone Number</p>
                      <span>{receiptData.phone_number}</span>
                    </div>
                    <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                      <p className="text-[#0008]">Amount</p>
                      <span>{receiptData.amount}</span>
                    </div>
                  </div>

                  {/* ===================Sender Info====================== */}
                  <div className="flex flex-col gap-[3px] w-[90%] mx-auto lg:gap-[5px]">
                    <div className="flex gap-[5px] items-center text-[10px] lg:text-[16px] font-extrabold">
                      <p>Sender Info</p>
                      <img
                        className="w-[13px] h-[13px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                        src="./Images/Dashboardimages/arrowright.png"
                        alt="/"
                      />
                    </div>
                    <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                      <p className="text-[#0008]">Customer Name</p>
                      <span>{receiptData.username}</span>
                    </div>
                    <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                      <p className="text-[#0008]">Wallet Type</p>
                      <span>{walletName + " Wallet"}</span>
                    </div>
                  </div>

                  {/* ===================Transaction Info==================== */}
                  <div className="flex flex-col gap-[3px] w-[90%] mx-auto lg:gap-[5px]">
                    <div className="flex gap-[5px] items-center text-[10px] lg:text-[16px] font-extrabold">
                      <p>Transaction Info</p>
                      <img
                        className="w-[13px] h-[13px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                        src="./Images/Dashboardimages/arrowright.png"
                        alt="/"
                      />
                    </div>
                    <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                      <p className="text-[#0008]">Product</p>
                      <span>Data Top-up</span>
                    </div>
                    <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                      <p className="text-[#0008]">Description</p>
                      <span>{receiptData.plan_name}</span>
                    </div>
                    <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                      <p className="text-[#0008]">Order Number</p>
                      <span>{receiptData.order_id}</span>
                    </div>
                    <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                      <p className="text-[#0008]">Transaction ID</p>
                      <span>{receiptData.transaction_id}</span>
                    </div>
                  </div>
                </div>
                <div className="rounded-[8px] bg-[#E2F3FF] mx-4 h-[45px] my-5 flex justify-between items-center px-[4%] md:h-[65px] lg:h-[75px]">
                  <p className="text-[8px] text-center mx-auto w-[200px] md:text-[14px] md:w-[80%] lg:text-[16px]">
                    Earn free points on every successful transactions, redeem
                    your earned points to real money, withdrawn to your bank
                    account instantly.
                  </p>
                </div>
              </div>
            )}

            {purchaseStatus === "failed" && (
              <div className="receipt-details">
                {" "}
                <h3 className="font-extrabold text-[12px] my-[2%] text-center md:text-[20px] md:my-[3%] lg:text-[16px] lg:my-[2%]">
                  Transaction Receipt
                </h3>
                <div className="w-full flex justify-center ">
                  <img
                    className="absolute w-[250px] h-[450px] md:w-[70%] lg:w-[50%] lg:h-[550px]"
                    src="./Images/transferImages/receipt-background.png"
                    alt="/"
                  />
                </div>
                <h3 className="font-extrabold text-[12px] mt-[2%] text-center md:text-[20px] md:my-[3%] lg:text-[16px] lg:my-[2%]">
                  Purchase Failed on
                </h3>
                <span className="text-[11px] text-[#0008] font-extrabold flex justify-center items-center">
                  {/* {date.toLocaleDateString(undefined, {
       year: "numeric",
       month: "long",
       day: "numeric",
       hour: "numeric",
       minute: "numeric",
       second: "numeric",
       hour12: true,
     })} */}
                  {receiptData.created_at}
                </span>
                <p className="text-[9px] text-[#0008] px-[20px] text-center my-2 md:text-[14px] lg:text-[14px] bg-[#FDCECE] text-[#F95252] mx-[10px] border-[#F93232] border-[1px] rounded-[10px] py-[10px]">
                  Purchase Failed due to an unexpected error that occured.
                  Please try again.{" "}
                </p>
                <div className="flex flex-col gap-3">
                  {/* ========================Recipient Info================== */}
                  <div className="flex flex-col gap-[3px] w-[90%] mx-auto lg:gap-[5px]">
                    <div className="flex gap-[5px] items-center text-[10px] lg:text-[16px] font-extrabold">
                      <p>Recipient Info</p>
                      <img
                        className="w-[13px] h-[13px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                        src="./Images/Dashboardimages/arrowright.png"
                        alt="/"
                      />
                    </div>
                    <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                      <p className="text-[#0008]">Network</p>
                      <span>{receiptData.network}</span>
                    </div>
                    <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                      <p className="text-[#0008]">Product</p>
                      <span>{receiptData.plan_name}</span>
                    </div>
                    <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                      <p className="text-[#0008]">Plan</p>
                      <span>
                        {receiptData.network} {receiptData.plan_name}{" "}
                        {receiptData.plan_amount}
                      </span>
                    </div>
                    <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                      <p className="text-[#0008]">Recipient Name</p>
                      <span>{receiptData.name}</span>
                    </div>
                    <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                      <p className="text-[#0008]">Phone Number</p>
                      <span>{receiptData.phone_number}</span>
                    </div>
                    <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                      <p className="text-[#0008]">Amount</p>
                      <span>{receiptData.amount}</span>
                    </div>
                  </div>

                  {/* ===================Sender Info====================== */}
                  <div className="flex flex-col gap-[3px] w-[90%] mx-auto lg:gap-[5px]">
                    <div className="flex gap-[5px] items-center text-[10px] lg:text-[16px] font-extrabold">
                      <p>Sender Info</p>
                      <img
                        className="w-[13px] h-[13px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                        src="./Images/Dashboardimages/arrowright.png"
                        alt="/"
                      />
                    </div>
                    <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                      <p className="text-[#0008]">Customer Name</p>
                      <span>{receiptData.username}</span>
                    </div>
                    <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                      <p className="text-[#0008]">Wallet Type</p>
                      <span>{walletName + " Wallet"}</span>
                    </div>
                  </div>

                  {/* ===================Transaction Info==================== */}
                  <div className="flex flex-col gap-[3px] w-[90%] mx-auto lg:gap-[5px]">
                    <div className="flex gap-[5px] items-center text-[10px] lg:text-[16px] font-extrabold">
                      <p>Transaction Info</p>
                      <img
                        className="w-[13px] h-[13px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                        src="./Images/Dashboardimages/arrowright.png"
                        alt="/"
                      />
                    </div>
                    <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                      <p className="text-[#0008]">Product</p>
                      <span>Data Top-up</span>
                    </div>
                    <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                      <p className="text-[#0008]">Description</p>
                      <span>{receiptData.plan_name}</span>
                    </div>
                    <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                      <p className="text-[#0008]">Order Number</p>
                      <span>{receiptData.order_id}</span>
                    </div>
                    <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                      <p className="text-[#0008]">Transaction ID</p>
                      <span>{receiptData.transaction_id}</span>
                    </div>
                  </div>
                </div>
                <div className="rounded-[8px] bg-[#E2F3FF] mx-4 h-[45px] my-5 flex justify-between items-center px-[4%] md:h-[65px] lg:h-[75px]">
                  <p className="text-[8px] text-center mx-auto w-[200px] md:text-[14px] md:w-[80%] lg:text-[16px]">
                    Earn free points on every successful transactions, redeem
                    your earned points to real money, withdrawn to your bank
                    account instantly.
                  </p>
                </div>
              </div>
            )}

            {purchaseStatus === "pending" && (
              <div className="receipt-details">
                {" "}
                <h3 className="font-extrabold text-[12px] my-[2%] text-center md:text-[20px] md:my-[3%] lg:text-[16px] lg:my-[2%]">
                  Transaction Receipt
                </h3>
                <div className="w-full flex justify-center ">
                  <img
                    className="absolute w-[250px] h-[450px] md:w-[70%] lg:w-[50%] lg:h-[550px]"
                    src="./Images/transferImages/receipt-background.png"
                    alt="/"
                  />
                </div>
                <h3 className="font-extrabold text-[12px] mt-[2%] text-center md:text-[20px] md:my-[3%] lg:text-[16px] lg:my-[2%]">
                  Purchase Pending on
                </h3>
                <span className="text-[11px] text-[#0008] font-extrabold flex justify-center items-center">
                  {/* {date.toLocaleDateString(undefined, {
       year: "numeric",
       month: "long",
       day: "numeric",
       hour: "numeric",
       minute: "numeric",
       second: "numeric",
       hour12: true,
     })} */}
                  {receiptData.created_at}
                </span>
                <p className="text-[9px] text-[#0008] px-[20px] text-center my-2 md:text-[14px] lg:text-[14px] bg-[#FFF1D6] text-[#F09E00] mx-[10px] border-[#FFC24C] border-[1px] rounded-[10px] py-[10px]">
                  Your transaction is under process please wait while the system
                  are confirm.{" "}
                </p>
                <div className="flex flex-col gap-3">
                  {/* ========================Recipient Info================== */}
                  <div className="flex flex-col gap-[3px] w-[90%] mx-auto lg:gap-[5px]">
                    <div className="flex gap-[5px] items-center text-[10px] lg:text-[16px] font-extrabold">
                      <p>Recipient Info</p>
                      <img
                        className="w-[13px] h-[13px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                        src="./Images/Dashboardimages/arrowright.png"
                        alt="/"
                      />
                    </div>
                    <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                      <p className="text-[#0008]">Network</p>
                      <span>{receiptData.network}</span>
                    </div>
                    <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                      <p className="text-[#0008]">Product</p>
                      <span>{receiptData.plan_name}</span>
                    </div>
                    <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                      <p className="text-[#0008]">Plan</p>
                      <span>
                        {receiptData.network} {receiptData.plan_name}{" "}
                        {receiptData.plan_amount}
                      </span>
                    </div>
                    <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                      <p className="text-[#0008]">Recipient Name</p>
                      <span>{receiptData.name}</span>
                    </div>
                    <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                      <p className="text-[#0008]">Phone Number</p>
                      <span>{receiptData.phone_number}</span>
                    </div>
                    <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                      <p className="text-[#0008]">Amount</p>
                      <span>{receiptData.amount}</span>
                    </div>
                  </div>

                  {/* ===================Sender Info====================== */}
                  <div className="flex flex-col gap-[3px] w-[90%] mx-auto lg:gap-[5px]">
                    <div className="flex gap-[5px] items-center text-[10px] lg:text-[16px] font-extrabold">
                      <p>Sender Info</p>
                      <img
                        className="w-[13px] h-[13px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                        src="./Images/Dashboardimages/arrowright.png"
                        alt="/"
                      />
                    </div>
                    <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                      <p className="text-[#0008]">Customer Name</p>
                      <span>{receiptData.username}</span>
                    </div>
                    <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                      <p className="text-[#0008]">Wallet Type</p>
                      <span>{walletName + " Wallet"}</span>
                    </div>
                  </div>

                  {/* ===================Transaction Info==================== */}
                  <div className="flex flex-col gap-[3px] w-[90%] mx-auto lg:gap-[5px]">
                    <div className="flex gap-[5px] items-center text-[10px] lg:text-[16px] font-extrabold">
                      <p>Transaction Info</p>
                      <img
                        className="w-[13px] h-[13px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                        src="./Images/Dashboardimages/arrowright.png"
                        alt="/"
                      />
                    </div>
                    <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                      <p className="text-[#0008]">Product</p>
                      <span>Data Top-up</span>
                    </div>
                    <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                      <p className="text-[#0008]">Description</p>
                      <span>{receiptData.plan_name}</span>
                    </div>
                    <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                      <p className="text-[#0008]">Order Number</p>
                      <span>{receiptData.order_id}</span>
                    </div>
                    <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                      <p className="text-[#0008]">Transaction ID</p>
                      <span>{receiptData.transaction_id}</span>
                    </div>
                  </div>
                </div>
                <div className="rounded-[8px] bg-[#E2F3FF] mx-4 h-[45px] my-5 flex justify-between items-center px-[4%] md:h-[65px] lg:h-[75px]">
                  <p className="text-[8px] text-center mx-auto w-[200px] md:text-[14px] md:w-[80%] lg:text-[16px]">
                    Earn free points on every successful transactions, redeem
                    your earned points to real money, withdrawn to your bank
                    account instantly.
                  </p>
                </div>
              </div>
            )}

            {purchaseStatus === "refunded" && (
              <div className="receipt-details">
                {" "}
                <h3 className="font-extrabold text-[12px] my-[2%] text-center md:text-[20px] md:my-[3%] lg:text-[16px] lg:my-[2%]">
                  Transaction Receipt
                </h3>
                <div className="w-full flex justify-center ">
                  <img
                    className="absolute w-[250px] h-[450px] md:w-[70%] lg:w-[50%] lg:h-[550px]"
                    src="./Images/transferImages/receipt-background.png"
                    alt="/"
                  />
                </div>
                <h3 className="font-extrabold text-[12px] mt-[2%] text-center md:text-[20px] md:my-[3%] lg:text-[16px] lg:my-[2%]">
                  Purchase Refunded on
                </h3>
                <span className="text-[11px] text-[#0008] font-extrabold flex justify-center items-center">
                  {/* {date.toLocaleDateString(undefined, {
       year: "numeric",
       month: "long",
       day: "numeric",
       hour: "numeric",
       minute: "numeric",
       second: "numeric",
       hour12: true,
     })} */}
                  {receiptData.created_at}
                </span>
                <p className="text-[9px] text-[#0008] px-[20px] text-center my-2 md:text-[14px] lg:text-[14px] bg-[#A6D9FF] text-[#04177F] mx-[10px] border-[#04177F] border-[1px] rounded-[10px] py-[10px]">
                  Transaction was unsuccessful and your wallet has been
                  refunded. Please try again.{" "}
                </p>
                <div className="flex flex-col gap-3">
                  {/* ========================Recipient Info================== */}
                  <div className="flex flex-col gap-[3px] w-[90%] mx-auto lg:gap-[5px]">
                    <div className="flex gap-[5px] items-center text-[10px] lg:text-[16px] font-extrabold">
                      <p>Recipient Info</p>
                      <img
                        className="w-[13px] h-[13px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                        src="./Images/Dashboardimages/arrowright.png"
                        alt="/"
                      />
                    </div>
                    <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                      <p className="text-[#0008]">Network</p>
                      <span>{receiptData.network}</span>
                    </div>
                    <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                      <p className="text-[#0008]">Product</p>
                      <span>{receiptData.plan_name}</span>
                    </div>
                    <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                      <p className="text-[#0008]">Plan</p>
                      <span>
                        {receiptData.network} {receiptData.plan_name}{" "}
                        {receiptData.plan_amount}
                      </span>
                    </div>
                    <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                      <p className="text-[#0008]">Recipient Name</p>
                      <span>{receiptData.name}</span>
                    </div>
                    <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                      <p className="text-[#0008]">Phone Number</p>
                      <span>{receiptData.phone_number}</span>
                    </div>
                    <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                      <p className="text-[#0008]">Amount</p>
                      <span>{receiptData.amount}</span>
                    </div>
                  </div>

                  {/* ===================Sender Info====================== */}
                  <div className="flex flex-col gap-[3px] w-[90%] mx-auto lg:gap-[5px]">
                    <div className="flex gap-[5px] items-center text-[10px] lg:text-[16px] font-extrabold">
                      <p>Sender Info</p>
                      <img
                        className="w-[13px] h-[13px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                        src="./Images/Dashboardimages/arrowright.png"
                        alt="/"
                      />
                    </div>
                    <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                      <p className="text-[#0008]">Customer Name</p>
                      <span>{receiptData.username}</span>
                    </div>
                    <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                      <p className="text-[#0008]">Wallet Type</p>
                      <span>{walletName + " Wallet"}</span>
                    </div>
                  </div>

                  {/* ===================Transaction Info==================== */}
                  <div className="flex flex-col gap-[3px] w-[90%] mx-auto lg:gap-[5px]">
                    <div className="flex gap-[5px] items-center text-[10px] lg:text-[16px] font-extrabold">
                      <p>Transaction Info</p>
                      <img
                        className="w-[13px] h-[13px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                        src="./Images/Dashboardimages/arrowright.png"
                        alt="/"
                      />
                    </div>
                    <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                      <p className="text-[#0008]">Product</p>
                      <span>Data Top-up</span>
                    </div>
                    <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                      <p className="text-[#0008]">Description</p>
                      <span>{receiptData.plan_name}</span>
                    </div>
                    <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                      <p className="text-[#0008]">Order Number</p>
                      <span>{receiptData.order_id}</span>
                    </div>
                    <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                      <p className="text-[#0008]">Transaction ID</p>
                      <span>{receiptData.transaction_id}</span>
                    </div>
                  </div>
                </div>
                <div className="rounded-[8px] bg-[#E2F3FF] mx-4 h-[45px] my-5 flex justify-between items-center px-[4%] md:h-[65px] lg:h-[75px]">
                  <p className="text-[8px] text-center mx-auto w-[200px] md:text-[14px] md:w-[80%] lg:text-[16px]">
                    Earn free points on every successful transactions, redeem
                    your earned points to real money, withdrawn to your bank
                    account instantly.
                  </p>
                </div>
              </div>
            )}

            {purchaseStatus === "cancelled" && (
              <div className="receipt-details">
                {" "}
                <h3 className="font-extrabold text-[12px] my-[2%] text-center md:text-[20px] md:my-[3%] lg:text-[16px] lg:my-[2%]">
                  Transaction Receipt
                </h3>
                <div className="w-full flex justify-center ">
                  <img
                    className="absolute w-[250px] h-[450px] md:w-[70%] lg:w-[50%] lg:h-[550px]"
                    src="./Images/transferImages/receipt-background.png"
                    alt="/"
                  />
                </div>
                <h3 className="font-extrabold text-[12px] mt-[2%] text-center md:text-[20px] md:my-[3%] lg:text-[16px] lg:my-[2%]">
                  Purchase Cancelled on
                </h3>
                <span className="text-[11px] text-[#0008] font-extrabold flex justify-center items-center">
                  {/* {date.toLocaleDateString(undefined, {
       year: "numeric",
       month: "long",
       day: "numeric",
       hour: "numeric",
       minute: "numeric",
       second: "numeric",
       hour12: true,
     })} */}
                  {receiptData.created_at}
                </span>
                <p className="text-[9px] text-[#0008] px-[20px] text-center my-2 md:text-[14px] lg:text-[14px] bg-[#EFC6BE] text-[#E62E05] mx-[10px] border-[#E62E05] border-[1px] rounded-[10px] py-[10px]">
                  Purchase Cancelled due to an unexpected error that occur.
                  Please try again.{" "}
                </p>
                <div className="flex flex-col gap-3">
                  {/* ========================Recipient Info================== */}
                  <div className="flex flex-col gap-[3px] w-[90%] mx-auto lg:gap-[5px]">
                    <div className="flex gap-[5px] items-center text-[10px] lg:text-[16px] font-extrabold">
                      <p>Recipient Info</p>
                      <img
                        className="w-[13px] h-[13px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                        src="./Images/Dashboardimages/arrowright.png"
                        alt="/"
                      />
                    </div>
                    <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                      <p className="text-[#0008]">Network</p>
                      <span>{receiptData.network}</span>
                    </div>
                    <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                      <p className="text-[#0008]">Product</p>
                      <span>{receiptData.plan_name}</span>
                    </div>
                    <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                      <p className="text-[#0008]">Plan</p>
                      <span>
                        {receiptData.network} {receiptData.plan_name}{" "}
                        {receiptData.plan_amount}
                      </span>
                    </div>
                    <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                      <p className="text-[#0008]">Recipient Name</p>
                      <span>{receiptData.name}</span>
                    </div>
                    <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                      <p className="text-[#0008]">Phone Number</p>
                      <span>{receiptData.phone_number}</span>
                    </div>
                    <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                      <p className="text-[#0008]">Amount</p>
                      <span>{receiptData.amount}</span>
                    </div>
                  </div>

                  {/* ===================Sender Info====================== */}
                  <div className="flex flex-col gap-[3px] w-[90%] mx-auto lg:gap-[5px]">
                    <div className="flex gap-[5px] items-center text-[10px] lg:text-[16px] font-extrabold">
                      <p>Sender Info</p>
                      <img
                        className="w-[13px] h-[13px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                        src="./Images/Dashboardimages/arrowright.png"
                        alt="/"
                      />
                    </div>
                    <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                      <p className="text-[#0008]">Customer Name</p>
                      <span>{receiptData.username}</span>
                    </div>
                    <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                      <p className="text-[#0008]">Wallet Type</p>
                      <span>{walletName + " Wallet"}</span>
                    </div>
                  </div>

                  {/* ===================Transaction Info==================== */}
                  <div className="flex flex-col gap-[3px] w-[90%] mx-auto lg:gap-[5px]">
                    <div className="flex gap-[5px] items-center text-[10px] lg:text-[16px] font-extrabold">
                      <p>Transaction Info</p>
                      <img
                        className="w-[13px] h-[13px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                        src="./Images/Dashboardimages/arrowright.png"
                        alt="/"
                      />
                    </div>
                    <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                      <p className="text-[#0008]">Product</p>
                      <span>Data Top-up</span>
                    </div>
                    <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                      <p className="text-[#0008]">Description</p>
                      <span>{receiptData.plan_name}</span>
                    </div>
                    <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                      <p className="text-[#0008]">Order Number</p>
                      <span>{receiptData.order_id}</span>
                    </div>
                    <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                      <p className="text-[#0008]">Transaction ID</p>
                      <span>{receiptData.transaction_id}</span>
                    </div>
                  </div>
                </div>
                <div className="rounded-[8px] bg-[#E2F3FF] mx-4 h-[45px] my-5 flex justify-between items-center px-[4%] md:h-[65px] lg:h-[75px]">
                  <p className="text-[8px] text-center mx-auto w-[200px] md:text-[14px] md:w-[80%] lg:text-[16px]">
                    Earn free points on every successful transactions, redeem
                    your earned points to real money, withdrawn to your bank
                    account instantly.
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="flex w-full px-[20px] mx-auto mb-[5%] md:w-[60%] ">
            <button
              onClick={() => {
                handleShareClick();
              }}
              className={`bg-[#04177f] w-[111px] flex justify-center items-center mx-auto cursor-pointer text-[12px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[16px] lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
            >
              Share Receipt
            </button>
            <button
              onClick={() => {
                handleSaveAsPDFClick();
              }}
              className={`bg-[#ffffff] border-[1px] w-[111px] border-[#0003] flex justify-center items-center mx-auto cursor-pointer text-[12px] font-extrabold h-[40px] rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[16px] lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
            >
              Save as PDF
            </button>
          </div>
        </div>


        {/* ===============FOOTER=========== */}
        <div
          className={`${isDarkMode ? "mb-[1%]" : "mb-[5%]"
            } flex gap-[15px] justify-center items-center lg:mb-[%]`}
        >
          <div className="flex gap-2 justify-center items-center mb-[15%] md:mt-40 mt-[50%] lg:mt-[50%]">
            <h2 className="text-[8px] leading-[12px] lg:text-[16px]">
              You need help?
            </h2>
            <Link
              to={`/ContactUs`}
              className="text-[8px] leading-[12px] text-white bg-primary px-2 py-1 rounded-full lg:text-[16px] lg:px-[10px] lg:py-[10px]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </DashBoardLayout>
  );
};
