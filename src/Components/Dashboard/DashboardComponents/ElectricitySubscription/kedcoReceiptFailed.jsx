import React from "react";
import { useContext, useRef } from "react";
import { ContextProvider } from "../../../Context";
import styles from "../TransferComponent/transfer.module.css";
import { DashBoardLayout } from "../../Layout/DashBoardLayout";
import { Link, useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import logo2 from "../ElectricitySubscription/Electricity-sub-images/kedco-logo 1.svg";
import { GetLocalStorage } from "../../../LocalStorage/LocalStorage";

export const KedcoReceiptFailed = () => {
  // const location = useLocation();
  // const navigate = useNavigate();
  // const { selectedNetworkProduct, meterNumber, phoneNumber, ikedcEmail, ikedcamount, serviceID, orderId, transactionId, showDescription  } = location.state

  const navigate = useNavigate();
  const data = GetLocalStorage();

  const {
    toggleSideBar,
    isDarkMode,
    date,
    kedcoVerifiedName,
    setKedcoVerifiedName,
    setSelectedKedcoMeterType,
    kedcoMeterNumber,
    setKedcoMeterNumber,
    kedcoPhoneNumber,
    setKedcoPhoneNumber,
    kedcoEmail,
    setKedcoEmail,
    kedcoAmount,
    setKedcoAmount,
    setKedcoCountry,
    setKedcoFlag,
    selectedKedcoMeterType,
    kedcoDiscoType,
    setKedcoDiscoType,
    kedcoPaymentResult,
    setKedcoPaymentResult,
    kedcoOrderId,
    setKedcoOrderId,
    kedcoTransactionId,
    setKedcoTransactionId,
    kedcoShowDescription,
    setKedcoShowDescription,
    // kedcoFullName,
    setKedcoFullName,
    kedcoTransactionProduct,
    setKedcoTransactionProduct,
    kedcoBillGenerate,
    setKedcoBillGenerate,
    purchaseElectricityErrorType,
    setPurchaseElectricityErrorType,
  } = useContext(ContextProvider);

  // const message = kedcoFetchedResponse.data;

  const networkProduct =
    selectedKedcoMeterType?.length > 0 ? selectedKedcoMeterType : "";
  const meterNo = kedcoMeterNumber?.length > 0 ? kedcoMeterNumber : "";
  const verifiedName = kedcoVerifiedName?.length > 0 ? kedcoVerifiedName : "";
  // const fullName = kedcoFullName?.length > 0 ? kedcoFullName : "";
  const phoneNo = kedcoPhoneNumber?.length > 0 ? kedcoPhoneNumber : "";
  const productEmail = kedcoEmail?.length > 0 ? kedcoEmail : "";
  const productAmount = kedcoAmount?.length > 0 ? kedcoAmount : "";
  const disco_type = kedcoDiscoType?.length > 0 ? kedcoDiscoType : "";
  const order_id = kedcoOrderId === undefined ? "" : kedcoOrderId;
  const transaction_id =
    kedcoTransactionId?.length > 0 ? kedcoTransactionId : "";
  const description =
    kedcoShowDescription?.length > 0 ? kedcoShowDescription : "";
  const transaction_product =
    kedcoTransactionProduct?.length > 0 ? kedcoTransactionProduct : "";
  const bill_generated = kedcoBillGenerate?.length > 0 ? kedcoBillGenerate : "";

  function handleClick() {
    setSelectedKedcoMeterType("");
    setKedcoMeterNumber("");
    setKedcoVerifiedName("");
    setKedcoPhoneNumber("");
    setKedcoEmail("");
    setKedcoAmount("");
    setKedcoCountry("");
    setKedcoFlag("");
    setKedcoPaymentResult("");
    setKedcoOrderId("");
    setKedcoDiscoType("");
    setKedcoTransactionId("");
    setKedcoShowDescription("");
    setKedcoFullName("");
    setKedcoTransactionProduct("");
    setKedcoBillGenerate("");
    setPurchaseElectricityErrorType("");
    navigate("/electricity-subscription");
  }

  const contentRef = useRef(null);

  // ==============Share pdf Function=============
  const handleShareClick = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Receipt",
          text: "Check out this receipt!",
          url: "https://example.com", // Replace with the actual URL of your receipt
        })
        .then(() => {return;})
        .catch((error) => {return;});
    } else {
    return;
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
        pdf.save("KEDCO-Success-Receipt.pdf");
      });
    }
  };
  return (
    <DashBoardLayout>
      <div
        className={`flex flex-col gap-[35px] lg:gap-[85px] ${
          isDarkMode ? "bg-black border border-white rounded-md" : ""
        }`}
      >
        <div
          className={` ${styles.receipt} ${
            toggleSideBar ? "" : "lg:w-[880px] "
          } w-full lg:mx-auto`}
        >
          <div className="flex justify-between items-center mx-[3%] my-[2%] lg:my-[1%]">
            <Link to="/">
              <img
                className=" w-[15px] h-[10px] md:w-[24px] md:h-[15px] lg:w-[42px] lg:h-[25px]"
                src="/Images/login/arpLogo.png"
                alt=""
              />
            </Link>
            <div onClick={handleClick}>
              {" "}
              <img
                className=" w-[18px] h-[18px] md:w-[35px] md:h-[35px] lg:w-[29px] lg:h-[29px]"
                src="/Images/transferImages/close-circle.png"
                alt=""
              />
            </div>
          </div>
          <hr className="h-[6px] bg-[#04177f] border-none md:h-[10px]" />
          <div ref={contentRef}>
            {" "}
            <h3 className="font-extrabold text-xs my-[2%] text-center md:text-[20px] md:my-[3%] lg:text-base lg:my-[2%]">
              Transaction Receipt
            </h3>
            <div className="w-full flex justify-center ">
              <img
                className="absolute w-[250px] h-[450px] md:w-[70%] lg:w-[50%] lg:h-[550px]"
                src="./Images/transferImages/receipt-background.png"
                alt="/"
              />
            </div>
            <h3 className="text-xs mt-[2%] text-center 
            md:text-[20px] md:my-[7px] lg:text-base font-extrabold lg:my-[10px]">
              Purchase Failed on
            </h3>
            <span
              className={`text-[11px] font-extrabold flex justify-center items-center `}
            >
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
            <p className="text-[10px] p-[5.729px] border-[0.573px] rounded-[6.302px] md:p-[5.868px] md:border-[0.578px] md:rounded-[6.455px]  lg:border lg:rounded-[11px] border-[#F95252] leading-[15px] md:leading-[20px] text-[#F95252] bg-[#FDCECE] lg:p-2.5 text-center my-2 md:text-sm lg:text-base lg:leading-6 font-medium md:mb-7">
              {purchaseElectricityErrorType}
            </p>
            <div className="flex flex-col gap-3">
              {/* ========================Recipient Info================== */}
              <div className="flex flex-col gap-[5px] w-[90%] mx-auto lg:gap-[10px]">
                <div className="flex gap-[5px] items-center text-[10px] lg:text-base font-extrabold">
                  <p>Recepient Info</p>
                  <img
                    className="w-[13px] h-[13px] lg:w-5 lg:h-5"
                    src="./Images/dashboardImages/arrowright.png"
                    alt="/"
                  />
                </div>
                <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between items-center lg:text-base">
                    <p
                      className={`font-medium ${
                        isDarkMode ? "text-white" : "text-[#7C7C7C]"
                      }`}
                    >
                      Disco Type
                    </p>
                    <div className="flex items-center gap-1 ">
                        <img className="w-[30px]" src={logo2} alt="" />
                      <span className="font-medium capitalize">{disco_type}</span>
                    </div>
                  </div>
                  <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between font-medium items-center lg:text-base">
                    <p
                      className={` ${
                        isDarkMode ? "text-white" : "text-[#7C7C7C]"
                      }`}
                    >
                      Meter Type
                    </p>
                    <span>{networkProduct} </span>
                  </div>
                  <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between items-center font-medium lg:text-base">
                    <p
                      className={` ${
                        isDarkMode ? "text-white" : "text-[#7C7C7C]"
                      }`}
                    >
                      Meter Number
                    </p>
                    <span>{meterNo} </span>
                  </div>

                  <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between items-center font-medium lg:text-base">
                    <p
                      className={` ${
                        isDarkMode ? "text-white" : "text-[#7C7C7C]"
                      }`}
                    >
                      Verified Name
                    </p>
                    <span>{verifiedName}</span>
                  </div>

                  <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between items-center font-medium lg:text-base">
                    <p
                      className={` ${
                        isDarkMode ? "text-white" : "text-[#7C7C7C]"
                      }`}
                    >
                      Phone Number
                    </p>
                    <span>{phoneNo}</span>
                  </div>
                  <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between items-center font-medium lg:text-base">
                    <p
                      className={` ${
                        isDarkMode ? "text-white" : "text-[#7C7C7C]"
                      }`}
                    >
                      Email
                    </p>
                    <span>{productEmail}</span>
                  </div>
                  <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between items-center font-medium lg:text-base">
                    <p
                      className={`${
                        isDarkMode ? "text-white" : "text-[#7C7C7C]"
                      }`}
                    >
                      Amount
                    </p>
                    <span className="font-medium">
                    {productAmount
                      ? `₦${Number(productAmount).toLocaleString()}.00`
                      : `₦`}
                  </span>
                    {/* <span>&#8358;{Number(productAmount).toLocaleString()}</span> */}
                  </div>
                </div>

                {/* ===================Sender Info====================== */}
              <div className="flex flex-col gap-[5px] w-[90%] mx-auto lg:gap-[10px]">
                <div className="flex gap-[5px] items-center mt-[10px] md:mt-[30px] text-[10px] lg:text-base font-extrabold">
                  <p>Sender Info</p>
                  <img
                    className="w-[13px] h-[13px] md:w-[] md:h-[] lg:w-6 lg:h-6"
                    src="./Images/dashboardImages/arrowright.png"
                    alt="/"
                  />
                </div>
                {/* <div className="flex flex-col gap-3 pt-[10px]"> */}
                  <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between font-medium items-center lg:text-base">
                    <p
                      className={` ${
                        isDarkMode ? "text-white" : "text-[#7C7C7C]"
                      }`}
                    >
                      Customer Name
                    </p>
                    <span>{data?.aremxyUsername ? data?.aremxyUsername : verifiedName}</span>
                  </div>

                  <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between font-medium items-center lg:text-base">
                    <p
                      className={` ${
                        isDarkMode ? "text-white" : "text-[#7C7C7C]"
                      }`}
                    >
                      Wallet Type
                    </p>
                    <span>Nigerian {kedcoPaymentResult.split(" (")[0]} </span>
                </div>
              </div>

              {/* ===================Transaction Info==================== */}
              <div className="flex flex-col gap-[5px] w-[90%] mx-auto lg:gap-[10px]">
                <div className="flex gap-[5px] items-center text-[10px] lg:text-base font-extrabold">
                  <p>Transaction Info</p>
                  <img
                    className="w-[13px] h-[13px] md:w-[] md:h-[] lg:w-5 lg:h-5"
                    src="./Images/dashboardImages/arrowright.png"
                    alt="/"
                  />
                </div>
                <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between font-medium items-center lg:text-base">
                  <p className={`${isDarkMode ? "text-white" : "[#7C7C7C]"}`}>Product</p>
                  {/* <span>Electricity Bills</span> */}
                  <span>{transaction_product}</span>
                </div>
                <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between font-medium items-center lg:text-base">
                  <p className={`${isDarkMode ? "text-white" : "[#7C7C7C]"}`}>Description</p>
                  <span>{description}</span>
                </div>
                <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between font-medium items-center lg:text-base">
                  <p className={`${isDarkMode ? "text-white" : "[#7C7C7C]"}`}>Bill / Token Generated</p>
                  {/* <span>Instantly</span> */}
                  {bill_generated}
                </div>
                <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between font-medium items-center lg:text-base">
                  <p className={`${isDarkMode ? "text-white" : "[#7C7C7C]"}`}>Order Number</p>
                  <span>{Number(order_id)}</span>
                </div>
                <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between font-medium items-center lg:text-base">
                  <p className={`${isDarkMode ? "text-white" : "[#7C7C7C]"}`}>Transaction ID</p>
                  <span>{transaction_id}</span>
                </div>
              </div>
            </div>
            <div className={`bg-[#F2FAFF] w-[90%] mx-auto p-2 my-5 flex justify-between items-center md:p-[9px] lg:p-2.5 rounded-[5px] lg:rounded-[10px]
              ${isDarkMode ? "bg-slate-800 " : "bg-[#F2FAFF]"}`}>
              <p className={`text-[10px] leading-[13px] text-center md:text-sm md:leading-[18px] font-semibold ${
                  isDarkMode ? "text-white" : "text-[#7C7C7C]"
                }`}>
                Earn free points on every successful transactions, redeem your earned points to real money, withdrawn to your bank account instantly.
              </p>
            </div>
          </div>

          <div className="flex w-[70%] mx-auto mb-[5%] md:w-[60%] ">
            <button
              onClick={() => {
                handleShareClick();
              }}
              className={`bg-[#04177f] w-[111px] flex justify-center items-center mx-auto cursor-pointer text-xs font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-base lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
            >
              Share Receipt
            </button>
            <button
              onClick={() => {
                handleSaveAsPDFClick();
              }}
              className={`bg-[#ffffff] border w-[111px] flex justify-center items-center mx-auto cursor-pointer text-xs font-extrabold  ${
                isDarkMode
                  ? " bg-black border-white"
                  : " bg-[#ffffff] border-[#0003]"
              } h-[40px] rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-base lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
            >
              Save as PDF
            </button>
          </div>
        </div>
        <div
          className={`${
            isDarkMode ? "mb-[1%]" : "mb-[5%]"
          } flex gap-[15px] justify-center items-center lg:mb-[20px] mt-[120px] mb-[50px] lg:mt-11`}
        >
          <div className="text-[10px] leading-3 lg:text-base">
            You need help ?
          </div>
          <Link to="/ContactUs">
            <div
              className={`${styles.contactus} bg-[#04177f] text-[8px] p-1 text-white rounded-[8px] lg:text-sm`}
            >
              Contact Us
            </div>
          </Link>
        </div>
      </div>
    </DashBoardLayout>
  );
};
