import React from "react";
import { useState, useEffect } from "react";
import { useContext, useRef } from "react";
import { ContextProvider } from '../Context';
import styles from './AirtimeVtu.module.css'
import { DashBoardLayout } from '../Dashboard/Layout/DashBoardLayout';
import { Link } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import buyAirtime from "../AirTimePage/AirtimeVtu";
import handleTransactionSuccessClose from "../AirTimePage/AirtimeVtu"; 

const AirtimeVtuReceipt = () => {

  // const {
  //   networkName,
  //   selectedProduct,
  //   recipientName,
  //   recipientNumber,
  //   amount
  // }
  //  = useContext(ContextProvider);

  const {
    inputValues,
    networkId,
    productId,
    amount
  } 
  = useContext(ContextProvider);

  const [data, setData] = useState(null); // Initialize data state
  const [statusCode, setStatusCode] = useState(null); // Initialize statusCode state

  useEffect(() => {
    async function fetchData() {
      // Call buyAirtime function and store the response in data state
      const { data, statusCode } = await buyAirtime(networkId, inputValues, amount, productId);
      setData(data);
      setStatusCode(statusCode);
      handleTransactionSuccessClose(statusCode);
    }
    fetchData();
  }, [amount, inputValues, networkId, productId]);

  const {
    toggleSideBar,
    isDarkMode,
    date, } =
    useContext(ContextProvider);

  const contentRef = useRef(null);

  // const airtimeResponse = {
  //   "status": "success",
  //   "network": "Example Network",
  //   "amount": "100",
  //   "phone_no": "123456789",
  //   "name": "John Doe",
  //   "product": "Airtime",
  //   "recipient": "Jane Doe",
  //   "order_id": 123,
  //   "description": "Airtime recharge",
  //   "transaction_id": "ABC123",
  //   "reference_number": "XYZ789"
  // };

  // ===============Copy to Clipboard Function============
  // const handleCopyClick = () => {
  //   const text = textRef.current.innerText;
  //   navigator.clipboard
  //     .writeText(text)
  //     .then(() => {
  //       alert("Copied to clipboard");
  //     })
  //     .catch((err) => {
  //       console.error("Error copying text: ", err);
  //     });
  // };

  // ==============Share pdf Function=============
  const handleShareClick = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Receipt",
          text: "Check out this receipt!",
          url: "https://example.com", // Replace with the actual URL of your receipt
        })
        .then(() => console.log("Shared successfully"))
        .catch((error) => console.error("Error sharing:", error));
    } else {
      console.log("Web Share API not supported.");
      // Handle sharing fallback for unsupported browsers
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
  return (
    <DashBoardLayout>
      <div className="flex flex-col gap-[35px] lg:gap-[85px]">
        {statusCode === 200 ? (
          <div>
            {data && (
              <div
                className={` ${styles.receipt} ${toggleSideBar ? "" : "lg:w-[880px] "
                  } w-full lg:mx-auto`}
              >
                <div className="flex justify-between items-center mx-[3%] my-[2%] lg:my-[1%]">
                  <Link to="/">
                    <img
                      className=" w-[18px] h-[18px] md:w-[35px] md:h-[35px] lg:w-[35px] lg:h-[29px]"
                      src="/Images/login/arpLogo.png"
                      alt=""
                    />
                  </Link>
                  <Link to="/airtime-topup">
                    {" "}
                    <img
                      className=" w-[18px] h-[18px] md:w-[35px] md:h-[35px] lg:w-[29px] lg:h-[29px]"
                      src="/Images/transferImages/close-circle.png"
                      alt=""
                    />
                  </Link>
                </div>
                <hr className="h-[6px] bg-[#04177f] border-none md:h-[10px]" />
                <div ref={contentRef}>
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
                    Transaction Successful on
                  </h3>
                  <span className="text-[11px] text-[#0008] font-extrabold flex justify-center items-center">
                    {date.toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "numeric",
                      minute: "numeric",
                      second: "numeric",
                      hour12: true,
                    })}
                  </span>
                  <p className="text-[9px] text-[#27AE60] bg-[#D5F6E3] rounded-[11px] border py-[15px] px-[10px] text-center mx-[10px] my-2 md:text-[14px] lg:text-[14px]">
                    You have successfully purchased{" "}
                    <span className="text-[#000] font-extrabold text-[10px] md:text-[16px] lg:text-[16px]">
                      {data.network + ' ' + data.product} Airtime &#8358;{data.amount}.00{" "}
                    </span>
                    from your NGN wallet to{" "}
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
                        <span>{data.network}</span>
                      </div>
                      <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                        <p className="text-[#0008]">Product</p>
                        <span>{data.network + ' ' + data.product}</span>
                      </div>
                      <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                        <p className="text-[#0008]">Phone Number</p>
                        <span>{data.phone_no}</span>
                      </div>
                      <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                        <p className="text-[#0008]">Recipient Name</p>
                        <span>{data.name}</span>
                      </div>
                      <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                        <p className="text-[#0008]">Amount</p>
                        <span>&#8358;{data.amount}</span>
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
                        <span>Aremxyplug</span>
                      </div>
                      <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                        <p className="text-[#0008]">Wallet Type</p>
                        <span>Nigerian NGN Wallet</span>
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
                        <span>Airtime Top-up</span>
                      </div>
                      <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                        <p className="text-[#0008]">Description</p>
                        <span>{data.network + ' ' + data.product}</span>
                      </div>
                      <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                        <p className="text-[#0008]">Order Number</p>
                        <span>1256464564</span>
                      </div>
                      <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                        <p className="text-[#0008]">Transaction ID</p>
                        <span>{data.transaction_id}</span>
                      </div>
                      <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                        <p className="text-[#0008]">Reference Number</p>
                        <span>{data.reference_number}</span>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-[8px] bg-[#E2F3FF] mx-4 h-[45px] my-5 flex justify-between items-center px-[4%] md:h-[65px] lg:h-[75px]">
                    <p className="text-[8px] text-center mx-auto w-[200px] md:text-[14px] md:w-[80%] lg:text-[16px]">
                      Earn free points on every successful transactions, redeem your earned points to real money, withdrawn to your bank account instantly.
                    </p>
                  </div>
                </div>

                <div className="flex w-[70%] mx-auto mb-[5%] md:w-[60%] ">
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
            )}
          </div>
        ) : (
          <div>
            {data && (
              <div
                className={` ${styles.receipt} ${toggleSideBar ? "" : "lg:w-[880px] "
                  } w-full lg:mx-auto`}
              >
                <div className="flex justify-between items-center mx-[3%] my-[2%] lg:my-[1%]">
                  <Link to="/">
                    <img
                      className=" w-[18px] h-[18px] md:w-[35px] md:h-[35px] lg:w-[35px] lg:h-[29px]"
                      src="/Images/login/arpLogo.png"
                      alt=""
                    />
                  </Link>
                  <Link to="/airtime-topup">
                    {" "}
                    <img
                      className=" w-[18px] h-[18px] md:w-[35px] md:h-[35px] lg:w-[29px] lg:h-[29px]"
                      src="/Images/transferImages/close-circle.png"
                      alt=""
                    />
                  </Link>
                </div>
                <hr className="h-[6px] bg-[#04177f] border-none md:h-[10px]" />
                <div ref={contentRef}>
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
                    Purchase failed on
                  </h3>
                  <span className="text-[11px] text-[#0008] font-extrabold flex justify-center items-center">
                    {date.toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "numeric",
                      minute: "numeric",
                      second: "numeric",
                      hour12: true,
                    })}
                  </span>
                  <p className="text-[9px] text-[#F95252] bg-[#FDCECE] rounded-[11px] border py-[15px] px-[10px] text-center mx-[10px] my-2 md:text-[14px] lg:text-[14px]">
                    Purchase Failed due to an unexpected error that occured. Please try again.
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
                        <span>{data.network}</span>
                      </div>
                      <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                        <p className="text-[#0008]">Product</p>
                        <span>{data.network + ' ' + data.product}</span>
                      </div>
                      <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                        <p className="text-[#0008]">Phone Number</p>
                        <span>{data.phone_no}</span>
                      </div>
                      <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                        <p className="text-[#0008]">Recipient Name</p>
                        <span>{data.name}</span>
                      </div>
                      <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                        <p className="text-[#0008]">Amount</p>
                        <span>&#8358;{data.amount}</span>
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
                        <span>Aremxyplug</span>
                      </div>
                      <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                        <p className="text-[#0008]">Wallet Type</p>
                        <span>Nigerian NGN Wallet</span>
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
                        <span>Airtime Top-up</span>
                      </div>
                      <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                        <p className="text-[#0008]">Description</p>
                        <span>{data.network + ' ' + data.product}</span>
                      </div>
                      <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                        <p className="text-[#0008]">Order Number</p>
                        <span>1256464564</span>
                      </div>
                      <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                        <p className="text-[#0008]">Transaction ID</p>
                        <span>{data.transaction_id}</span>
                      </div>
                      <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                        <p className="text-[#0008]">Reference Number</p>
                        <span>{data.reference_number}</span>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-[8px] bg-[#E2F3FF] mx-4 h-[45px] my-5 flex justify-between items-center px-[4%] md:h-[65px] lg:h-[75px]">
                    <p className="text-[8px] text-center mx-auto w-[200px] md:text-[14px] md:w-[80%] lg:text-[16px]">
                      Earn free points on every successful transactions, redeem your earned points to real money, withdrawn to your bank account instantly.
                    </p>
                  </div>
                </div>

                <div className="flex w-[70%] mx-auto mb-[5%] md:w-[60%] ">
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
            )}
          </div>
        )}
        <div
          className={`${isDarkMode ? "mb-[1%]" : "mb-[5%]"
            } flex gap-[15px] justify-center items-center lg:mb-[%]`}
        >
          <div className={styles.help}>
            <h2>You need help?</h2>
            <Link to={`/ContactUs`} className={styles.btnContact}>Contact Us</Link>
          </div>
        </div>
      </div>
    </DashBoardLayout>
  );
}

export default AirtimeVtuReceipt;
