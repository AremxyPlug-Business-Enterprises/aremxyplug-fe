import { useContext, useRef, useState } from "react";
import styles from "../../TransferComponent/transfer.module.css";
import { Link, useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
// import logo2 from "../../ElectricitySubscription/Electricity-sub-images/AEDC1 1.svg";
import { GetLocalStorage } from "../../../../LocalStorage/LocalStorage";
import { ContextProvider } from "../../../../Context";
import { DashBoardLayout } from "../../../Layout/DashBoardLayout";

// format date function
export function formatDate(isoString) {
  if (!isoString) return "";

  const date = new Date(isoString);

  const datePart = date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const timePart = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });

  return `${datePart} at ${timePart}`;
}

export const ElectricityReceipt = () => {
  const navigate = useNavigate();
  const [showReceipt, setShowReceipt] = useState(true);
  const data = GetLocalStorage();

  const { toggleSideBar, isDarkMode, orderIdResponse, setOrderIdResponse } =
    useContext(ContextProvider);

  function handleClick() {
    setOrderIdResponse({});
    setShowReceipt(false);
    navigate(-1);
    // navigate("/TransactionPage");
  }

  const contentRef = useRef(null);

  const receiptData = orderIdResponse?.data
    ? orderIdResponse?.data?.data?.data
    : {};

  const networkProduct =
    receiptData?.meter_type?.length > 0 ? receiptData?.meter_type : "";
  const meterNo =
    receiptData?.meter_number?.length > 0 ? receiptData?.meter_number : "";
  const verifiedName =
    receiptData?.verified_name?.length > 0 ? receiptData?.verified_name : "";
  const phoneNo = receiptData?.phone?.length > 0 ? receiptData?.phone : "";
  const productEmail = receiptData?.email?.length > 0 ? receiptData?.email : "";
  const productAmount =
    receiptData?.amount?.length > 0 ? receiptData?.amount : "";
  const disco_type =
    receiptData?.disco_type?.length > 0 ? receiptData?.disco_type : "";
  const order_id =
    receiptData?.order_id === undefined ? "" : receiptData?.order_id;
  const transaction_id =
    receiptData?.transaction_id?.length > 0 ? receiptData?.transaction_id : "";
  const description =
    receiptData?.transaction_description?.length > 0
      ? receiptData?.transaction_description
      : "";
  const bill_generated =
    receiptData?.bill_generated?.length > 0 ? receiptData?.bill_generated : "";
  // const fullName = aedcFullName?.length > 0 ? aedcFullName : "";
  const transaction_product =
    receiptData?.transaction_product?.length > 0
      ? receiptData?.transaction_product
      : "";

  // const location = useLocation();

  // if (!location.state || !location.state.orderData) {
  //   return <div>Error: Transaction data not found</div>;
  // }

  // const transaction = location.state.transaction;
  // console.log("transaction", transaction);

  const title =
    disco_type === "abuja-electric"
      ? "Abuja"
      : disco_type === "benin-electric"
      ? "Benin"
      : disco_type === "enugu-electric"
      ? "Enugu"
      : disco_type === "eko-electric"
      ? "Eko"
      : disco_type === "ibadan-electric"
      ? "Ibadan"
      : disco_type === "ikeja-electric"
      ? "Ikeja"
      : disco_type === "jos-electric"
      ? "Jos"
      : disco_type === "kaduna-electric"
      ? "Kaduna"
      : disco_type === "kano-electric"
      ? "Kano"
      : disco_type === "portharcourt-electric"
      ? "Port-Harcourt"
      : disco_type;

  const logo =
    disco_type === "abuja-electric"
      ? "../../ElectricitySubscription/Electricity-sub-images/AEDC1 1.svg"
      : disco_type === "benin-electric"
      ? "../../ElectricitySubscription/Electricity-sub-images/BEDC-Logo-new-dark-1 1.svg"
      : disco_type === "enugu-electric"
      ? "../../ElectricitySubscription/Electricity-sub-images/eedclogo 1.svg"
      : disco_type === "eko-electric"
      ? "../../ElectricitySubscription/Electricity-sub-images/1584714918161-ekedc-logo 1.svg"
      : disco_type === "ibadan-electric"
      ? "../../ElectricitySubscription/Electricity-sub-images/ibedc-logo 1.svg"
      : disco_type === "ikeja-electric"
      ? "../../ElectricitySubscription/Electricity-sub-images/pngaaa 1.svg"
      : disco_type === "jos-electric"
      ? "../../ElectricitySubscription/Electricity-sub-images/Jos-Electric-JED 1.svg"
      : disco_type === "kaduna-electric"
      ? "../../ElectricitySubscription/Electricity-sub-images/34-341783_kaduna-electricity-distribution-company-kaduna-electricity-distribution-company 1.svg"
      : disco_type === "kano-electric"
      ? "../../ElectricitySubscription/Electricity-sub-images/kedco-logo 1.svg"
      : disco_type === "portharcourt-electric"
      ? "../../ElectricitySubscription/Electricity-sub-images/PHED 1.svg"
      : "";

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
        pdf.save(`${description} Receipt.pdf`);
      });
    }
  };
  return (
    <DashBoardLayout>
      {showReceipt && (
        <div className="flex flex-col gap-[35px] lg:gap-[85px]">
          <div
            className={` ${styles.receipt} ${
              toggleSideBar ? "" : "lg:w-[880px] "
            } ${
              isDarkMode
                ? "bg-black text-white border border-white"
                : "bg-white"
            } w-full lg:mx-auto`}
          >
            <div className="flex justify-between items-center mx-[3%] my-[2%] lg:my-[1%]">
              <Link to="/">
                <img
                  // className="w-[18px] h-[18px] md:w-[35px] md:h-[35px] lg:w-[35px] lg:h-[29px]"
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
              <h3
                // className="font-medium text-xs mt-[2%] text-center md:text-[20px] md:my-[3%] lg:text-base lg:my-[2%]"
                className="text-xs mt-[2%] text-center 
            md:text-[20px] md:my-[7px] lg:text-base font-medium lg:my-[10px]"
              >
                {["delivered", "successful", "success", ""].includes(
                  receiptData?.status.toLowerCase()
                )
                  ? "Purchase Successful on"
                  : receiptData?.status === "pending"
                  ? "Purchase Pending on"
                  : receiptData?.status === "refunded"
                  ? "Purchase Refunded on"
                  : receiptData?.status === "cancelled"
                  ? "Purchase Cancelled on"
                  : "Purchase Failed on"}
              </h3>
              <span
                // className={`text-[8px] md:text-xs pt-1 font-medium flex justify-center items-center ${
                //   isDarkMode ? "text-white" : "text-[#0008]"
                // }`}
                className={`text-[11px] font-medium flex justify-center items-center ${
                  isDarkMode ? "text-white" : "text-[#7C7C7C]"
                }`}
              >
                {formatDate(receiptData?.created_at)}
              </span>
              {/* <p className="text-[9px] text-[#27AE60] bg-[#D5F6E3] rounded-[11px] border-2 border-[#27AE60] py-[5px] lg:py-[10px] px-[2px] text-center mx-[5px] lg:mx-[100px] md:mx-[70px] my-2 md:text-sm lg:text-sm"> */}
              <p
                className={`text-[10px] p-[5.729px] border-[0.573px] rounded-[6.302px] md:p-[5.868px] md:border-[0.578px] md:rounded-[6.455px] lg:border lg:rounded-[11px] leading-[15px] md:leading-[20px] lg:p-2.5 text-center my-2 md:text-sm lg:text-base lg:leading-6 font-medium md:mb-7
             ${
               ["delivered", "successful", "success", ""].includes(
                 receiptData?.status.toLowerCase()
               )
                 ? "border-[#27AE60] text-[#27AE60] bg-[#D5F6E3]"
                 : receiptData?.status === "pending"
                 ? "bg-[#FFF1D6] text-[#F09E00] border-[#FFC24C]"
                 : receiptData?.status === "refunded"
                 ? "bg-[#A6D9FF] text-[#04177F] border-[#04177F]"
                 : receiptData?.status === "cancelled"
                 ? "bg-[#EFC6BE] text-[#E62E05] border-[#E62E05]"
                 : "bg-[#FDCECE] text-[#F95252] border-[#F93232]"
             }`}
              >
                {["delivered", "successful", "success", ""].includes(
                  receiptData?.status.toLowerCase()
                )
                  ? "You have successfully purchased "
                  : receiptData?.status === "pending"
                  ? "Your purchase is under process please wait while the system confirm."
                  : receiptData?.status === "refunded"
                  ? "Purchase was unsuccessful and your wallet has been refunded. Please try again."
                  : receiptData?.status === "cancelled"
                  ? "Purchase Cancelled due to an unexpected error that occur. Please try again."
                  : "Purchase Failed due to an unexpected error that occured. Please try again."}
                {/* <span className="text-[#000] font-medium text-[10px] md:text-sm"> */}
                {["delivered", "successful", "success", ""].includes(
                  receiptData?.status.toLowerCase()
                ) && (
                  <span className="">
                    <span className=" font-medium text-[10.9px] md:text-[14.9px] lg:text-[16.9px]">
                      {title} {networkProduct} Meter &#8358;
                      {Number(productAmount).toLocaleString()}.00{" "}
                    </span>
                    {/* from your {aedcPaymentResult.split(" (")[0]} to{" "} */}
                    from your NGN Wallet to{" "}
                  </span>
                )}
              </p>
              {/* gap-5 */}
              <div className="flex flex-col gap-3">
                {/* ========================Recipient Info================== */}
                <div
                  // className="flex flex-col gap-[3px] w-[90%] mx-auto lg:gap-[5px]"
                  className="flex flex-col gap-[5px] w-[90%] mx-auto lg:gap-[10px]"
                >
                  <div
                    // className="flex gap-[5px] mt-1 items-center text-xs lg:text-base font-medium"
                    className="flex gap-[5px] items-center text-[10px] lg:text-base font-medium"
                  >
                    <p>Recepient Info</p>
                    <img
                      // className="w-[13px] h-[13px] md:w-[1rem] md:h-[1rem] lg:w-[20px] lg:h-[20px]"
                      className="w-[13px] h-[13px] md:w-[] md:h-[] lg:w-5 lg:h-5"
                      src="./Images/dashboardImages/arrowright.png"
                      alt="/"
                    />
                  </div>

                  <div
                    // className="flex text-[10px] md:text-sm pt-[10px] w-[90%] mx-auto justify-between lg:text-base"
                    className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between font-medium lg:text-base"
                  >
                    <p
                      className={`${
                        isDarkMode ? "text-white" : "text-[#7C7C7C]"
                      }`}
                    >
                      Disco Type
                    </p>
                    <div className="flex items-center gap-1 ">
                      <img className="w-[30px]" src={logo} alt="" />

                      <span className="capitalize font-medium">
                        {disco_type}
                      </span>
                    </div>
                  </div>
                  <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between font-medium lg:text-base">
                    <p
                      className={`${
                        isDarkMode ? "text-white" : "text-[#7C7C7C]"
                      }`}
                    >
                      Meter Type
                    </p>
                    <span className="">{networkProduct} </span>
                  </div>
                  <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between font-medium lg:text-base">
                    <p
                      className={` ${
                        isDarkMode ? "text-white" : "text-[#7C7C7C]"
                      }`}
                    >
                      Meter Number
                    </p>
                    <span className="">{meterNo} </span>
                  </div>

                  <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between font-medium lg:text-base">
                    <p
                      className={`${
                        isDarkMode ? "text-white" : "text-[#7C7C7C]"
                      }`}
                    >
                      Verified Name
                    </p>
                    <span className="">{verifiedName}</span>
                  </div>

                  <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between font-medium lg:text-base">
                    <p
                      className={`${
                        isDarkMode ? "text-white" : "text-[#7C7C7C]"
                      }`}
                    >
                      Phone Number
                    </p>
                    <span className="">{phoneNo}</span>
                  </div>
                  <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between font-medium lg:text-base">
                    <p
                      className={` ${
                        isDarkMode ? "text-white" : "text-[#7C7C7C]"
                      }`}
                    >
                      Email
                    </p>
                    <span className="">{productEmail}</span>
                  </div>
                  <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between font-medium lg:text-base">
                    <p
                      className={` ${
                        isDarkMode ? "text-white" : "text-[#7C7C7C]"
                      }`}
                    >
                      Amount
                    </p>
                    <span className="">
                      {/* &#8358; */}
                      {productAmount
                        ? `₦${Number(productAmount).toLocaleString()}.00`
                        : `₦`}
                    </span>
                  </div>
                </div>

                {/* ===================Sender Info====================== */}
                <div className="flex flex-col gap-[5px] w-[90%] mx-auto lg:gap-[10px]">
                  <div className="flex gap-[5px] items-center text-[10px] lg:text-base font-medium">
                    <p>Sender Info</p>
                    <img
                      // className="w-[13px] h-[13px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                      className="w-[13px] h-[13px] lg:w-6 lg:h-6"
                      src="./Images/dashboardImages/arrowright.png"
                      alt="/"
                    />
                  </div>
                  <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between  lg:text-base ">
                    <p
                      className={`font-medium ${
                        isDarkMode ? "text-white" : "text-[#7C7C7C]"
                      }`}
                    >
                      Customer Name
                    </p>
                    <span className="font-medium">
                      {data?.aremxyUsername
                        ? data?.aremxyUsername
                        : verifiedName}
                    </span>
                  </div>

                  <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between lg:text-base">
                    <p
                      className={`font-medium ${
                        isDarkMode ? "text-white" : "text-[#7C7C7C]"
                      }`}
                    >
                      Wallet Type
                    </p>
                    <span className="font-medium">Nigerian NGN Wallet </span>
                    {/* <span className="font-medium">Nigerian {aedcPaymentResult.split(" (")[0]} </span> */}
                  </div>
                </div>

                {/* ===================Transaction Info==================== */}
                <div
                  // className="flex flex-col gap-[3px] w-[90%] mx-auto lg:gap-[5px]"
                  className="flex flex-col gap-[5px] w-[90%] mx-auto lg:gap-[10px]"
                >
                  <div className="flex gap-[5px] items-center text-[10px] lg:text-base font-medium">
                    <p>Transaction Info</p>
                    <img
                      className="w-[13px] h-[13px] md:w-[] md:h-[] lg:w-5 lg:h-5"
                      src="./Images/dashboardImages/arrowright.png"
                      alt="/"
                    />
                  </div>
                  <div className="flex font-medium text-[10px] md:text-sm w-[90%] mx-auto justify-between lg:text-base">
                    <p
                      className={`${
                        isDarkMode ? "text-white" : "text-[#7C7C7C]"
                      }`}
                    >
                      Product
                    </p>
                    <span>{transaction_product}</span>
                  </div>
                  <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between lg:text-base font-medium">
                    <p
                      className={`${
                        isDarkMode ? "text-white" : "text-[#7C7C7C]"
                      }`}
                    >
                      Description
                    </p>
                    <span className="capitalize">{description}</span>
                  </div>
                  <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between lg:text-base font-medium">
                    <p
                      className={`${
                        isDarkMode ? "text-white" : "text-[#7C7C7C]"
                      }`}
                    >
                      Bill / Token Generated
                    </p>
                    <span>{bill_generated}</span>
                  </div>
                  <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between lg:text-base font-medium">
                    <p
                      className={`${
                        isDarkMode ? "text-white" : "text-[#7C7C7C]"
                      }`}
                    >
                      Order Number
                    </p>
                    <span>{order_id}</span>
                  </div>
                  <div className="flex text-[10px] md:text-sm w-[90%] mx-auto justify-between  lg:text-base font-medium">
                    <p
                      className={`${
                        isDarkMode ? "text-white" : "text-[#7C7C7C]"
                      }`}
                    >
                      Transaction ID
                    </p>
                    <span>{transaction_id}</span>
                  </div>
                </div>
              </div>
              <div
                // className={`rounded-[8px] bg-[#E2F3FF] mx-4 h-[45px] my-5 flex justify-between items-center px-[4%] md:h-[65px] lg:h-[75px] ${
                //   isDarkMode ? "bg-slate-800" : "bg-[#E2F3FF]"
                // }`}
                className={`bg-[#F2FAFF] w-[90%] mx-auto p-2 my-5 flex justify-between items-center md:p-[9px] lg:p-2.5 rounded-[5px] lg:rounded-[10px]
              ${isDarkMode ? "bg-slate-800 " : "bg-[#F2FAFF]"}`}
              >
                <p
                  // className={`text-[8px] text-center mx-auto w-[200px] md:text-sm md:w-[80%] lg:text-base font-medium ${
                  //   isDarkMode ? "text-white" : "text-[#7C7C7C]"
                  // }`}
                  className={`text-[10px] leading-[13px] text-center md:text-sm md:leading-[18px] font-semibold ${
                    isDarkMode ? "text-white" : "text-[#7C7C7C]"
                  }`}
                >
                  Earn free points on every successful transactions, redeem your
                  earned points to real money, withdrawn to your bank account
                  instantly.
                </p>
              </div>
            </div>

            <div
              // className="flex w-[70%] mx-auto gap-x-3 mb-[5%] md:w-[70%] "
              className="flex w-[70%] mx-auto mb-[5%] md:w-[60%] "
            >
              <button
                onClick={() => {
                  handleShareClick();
                }}
                // className={`bg-[#04177f] w-[111px] flex justify-center items-center mx-auto cursor-pointer text-xs font-medium h-[40px] text-white rounded-[6px] md:w-[8.5rem] md:rounded-[8px] md:text-base lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
                className={`bg-[#04177f] w-[111px] flex justify-center items-center mx-auto cursor-pointer text-xs font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-base lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
              >
                Share Receipt
              </button>
              <button
                onClick={() => {
                  handleSaveAsPDFClick();
                }}
                // className={` border w-[111px] flex justify-center items-center mx-auto cursor-pointer text-xs font-extrabold h-[40px] md:w-[8.5rem] rounded-[6px] md:rounded-[8px] md:text-base lg:w-[163px] lg:h-[38px] lg:my-[2%] ${
                //   isDarkMode
                //     ? "bg-black border-white"
                //     : "bg-[#ffffff] border-[#0003]"
                // }`}
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
            // className={`${
            //   isDarkMode ? "mb-[1%]" : "mb-[5%]"
            // } flex gap-[15px] justify-center items-center mt-[80px]`}
            className={`${
              isDarkMode ? "mb-[1%]" : "mb-[5%]"
            } flex gap-[15px] justify-center items-center lg:mb-[20px] mt-[120px] mb-[50px] lg:mt-11`}
          >
            {/* md:text-xs  */}
            <h2 className="text-[10px] leading-[12px] lg:text-base">
              You need help ?
            </h2>
            <Link to="/ContactUs">
              <div
                // className={`${isDarkMode ? "" : "bg-[#04177f]"} ${
                //   styles.contactus
                // } text-xs p-1 text-white rounded-[8px] lg:text-sm`}
                className={`${styles.contactus} bg-[#04177f] text-[8px] p-1 text-white rounded-[8px] lg:text-sm`}
              >
                Contact Us
              </div>
            </Link>
          </div>
        </div>
      )}
    </DashBoardLayout>
  );
};
