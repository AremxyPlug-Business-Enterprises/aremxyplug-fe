import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ContextProvider } from "../../Context";
import "../DashboardComponents/DataTopUpPage/DataTopUp.css";
import NoRecordImage from "../../Add&SelectRecipient/RecipientImages/NoRecordImage.svg";
import { Loader } from "../../Loader/Loader";
import {
  GetFunction,
  InternalLoginSession,
} from "../../ApiCollection.jsx/ApiBuck";
import { Modal } from "../../Screens/Modal/Modal";

const TransactionHistory = ({
  transactionResponse,
  transactionHistoryError,
  loading,
 stateDateEdit
}) => {
  const {
    isDarkMode,
    toggleSideBar,
    setOrderIdResponse,
    setElectricityTransErrorType,
    dateEdit
  } = useContext(ContextProvider);

  const navigate = useNavigate();

  const getBackgroundColor = (status) => {
    if (
      status === "delivered" ||
      status === "Successful" ||
      status === "success" ||
      status === ""
    ) {
      return "#97E8B9";
    } else if (status === "failed") {
      return "#FB9393";
    } else if (status === "pending") {
      return "#FFD98F";
    } else if (status === "refunded") {
      return "#A6D9FF";
    } else if (status === "cancelled") {
      return "#EFC6BE";
    } else {
      return "";
    }
  };

  const [orderLoading, setOrderLoading] = useState(false);
  const [sessionModal, setSessionModal] = useState(false);
  
  const getTransactionByOrderId = async (orderId, product) => {
    if (!orderId || !product) return;
    const productType =
      product === "Airtime Top-up"
        ? "airtime"
        : product === "Data Top-up"
        ? "data"
        : product === "TV Subscription"
        ? "tv-sub"
        : product === "Education Pins"
        ? "edu"
        : product === "Electricity Bills"
        ? "electric-sub"
        : product === "Internal Deposit"
        ? "deposit"
        : product === "Internal Transfer"
        ? "transfer"
        : "";

    const path = `transactions/${orderId}?product=${productType}`;
    let result;
    const SuccessHandler = (response) => {
      result = response;
      console.log("Transaction fetched successfully");
    };
    const FailedHandler = async (ErrorType) => {
      // if (!navigator.online) alert("Kindly check your internet connection");
      if (ErrorType === "unauthorised") {
        await GetFunction(
          path,
          setOrderLoading,
          SuccessHandler,
          (ErrorType) => {
            if (ErrorType === "Server error") {
           alert("A server error occured, please try again later");
            }else if(ErrorType === "Network error" || ErrorType === "User error"){
              alert("Your internet connection is quite unstable.")
            }
          },
          setOrderIdResponse
        );
      } else if (ErrorType === "Server error") {
        await GetFunction(
          path,
          setOrderLoading,
          SuccessHandler,
          (ErrorType) => {
            if (ErrorType === "Server error") {
              alert("Failed to process your request");
              setElectricityTransErrorType(
                "Failed to process your request, try again some other time"
              );
            }
          },
          setOrderIdResponse
        );
      } else if (ErrorType === "Network error" || ErrorType === "User error") {
        setElectricityTransErrorType("An internet connection error");
      }
    };

    await GetFunction(
      path,
      setOrderLoading,
      SuccessHandler,
      FailedHandler,
      setOrderIdResponse
    );
    return result;
  };

  const filteredTransactions =
    transactionResponse?.data?.data?.data?.transactions !== null
    && stateDateEdit === "Filter By Date"
      ? transactionResponse?.data?.data?.data?.transactions?.filter(
          (transaction, index) => {
         //   console.log(transaction);
            return index < 10;
          }
        )
      :  transactionResponse?.data?.data?.data?.transactions !== null
       &&  stateDateEdit !== "Filter By Date" ? transactionResponse?.data?.data?.data?.transactions.filter( transaction => (
      transaction?.created_at?.slice(0,10) === dateEdit?.slice(0,10)
      )) : [];

  //Variable types to handle the filtering of the recent transaction history
  //which is viewed or displays the transaction receipt
// Format Date ======
const FormatDate =(DateValue)=> {
  if(!DateValue)  return "";
  const date = new Date(DateValue);
  return date?.toISOString()?.slice(0,10)

}
const FormatTime =(DateValue)=> {
  if(!DateValue) return ""
  const date = new Date(DateValue);
  const TimePart = date?.toLocaleTimeString("en-Us", {
    hour : "numeric",
    minute: "numeric",
    second : "numeric",
    hour12 : true
  })
  return TimePart;
}
  return (
    <>
      {/* ======Mobile View==== */}
      <div className="text-[12px]">
        <div
          className="md:pt-6"
          // style={{
          //   boxShadow: "0px 0px 6.666667461395264px 0px rgba(0, 0, 0, 0.45)",
          // }}
        >
          <div>
            <div
              className={`h-full md:hidden flex flex-col mt-9  w-full  border-x-[1.2px]
 px-[20px] border-opacity-[25%] shadow-md border-b-[1.2px]
 ${isDarkMode ? "border-white" : "border-gray-500 "}`}
            >
              {loading === true ? (
                <div className="h-[150px] flex items-center justify-center">
                  <Loader />
                </div>
              ) : filteredTransactions && filteredTransactions?.length > 0 ? (
                filteredTransactions?.map((transaction, index) => (
                  <div
                    className={`cursor-pointer ${
                      index < 9 ? "border-b-[1.2px] border-gray-500" : ""
                    }`}
                    key={index}
                  >
                    <div
                      // to={`/${
                      //   transaction.status === "delivered"
                      //     ? "SuccessfullReceipt"
                      //     : transaction.status === "Failed"
                      //     ? "FailedReceipt"
                      //     : transaction.status === "Pending"
                      //     ? "PendingReceipt"
                      //     : transaction.status === "Refunded"
                      //     ? "RefundedReceipt"
                      //     : transaction.status === "Cancelled"
                      //     ? "CancelledReceipt"
                      //     : ""
                      // }`}
                      // state={{ transaction }}
                      onClick={async () => {
                        const response = await getTransactionByOrderId(
                          transaction?.order_id,
                          transaction?.product
                        );

                        const orderData = response?.data?.data?.data;

                        if (response?.data?.status === 200) {
                          navigate(
                            transaction?.product === "Electricity Bills"
                              ? "/ElectricityReceipt"
                              : transaction?.product === "Education Pins"
                              ? "/EduReceipt"
                              : transaction?.product === "TV Subscription"
                              ? "/TvSubReceipt"
                              : transaction?.product === "Airtime Top-up"
                              ? "/AirtimeTransReceipt"
                              : transaction?.product === "Data Top-up"
                              ? "/DataTransReceipt"
                              : transaction?.product === "Internal Transfer"
                              ? "/TransferReceipt"
                              : transaction?.product === "Internal Deposit"
                              ? "/VirtualAccountReceipt"
                              : "/SuccessfullReceipt",
                            { state: { orderData, transaction } }
                          );
                        }
                      }}
                    >
                      <div
                        key={index}
                        className="flex justify-between py-[20px]"
                      >
                        <div className="flex flex-col gap-[7.648px]">
                          <h2
                            className={`font-medium  text-[9.167px] leading-[11.167px]
                                    ${
                                      isDarkMode
                                        ? "text-white"
                                        : "text-neutral-500"
                                    }`}
                          >
                            Order No : {transaction?.order_id}
                          </h2>
                          <h2
                            className={`font-medium text-black text-[9.167px] 
                                   leading-[11.167px] ${
                                     isDarkMode
                                       ? "text-white"
                                       : "text-neutral-500"
                                   }`}
                          >
                            Product : {transaction?.product}
                          </h2>
                          <p
                            className={`font-medium capitalize text-neutral-500 text-[9.167px] 
                                   leading-[11.167px] ${
                                     isDarkMode
                                       ? "text-white"
                                       : "text-neutral-500"
                                   }`}
                          >
                            Description : {transaction?.description}
                          </p>

                          <p
                            className={`font-medium text-neutral-500  
                                   text-[9.167px] leading-[11.167px] ${
                                     isDarkMode
                                       ? "text-white"
                                       : "text-neutral-500"
                                   }`}
                          >
                            Amount :{" "}
                            {transaction?.amount
                              ? transaction.amount?.toLocaleString("en-NG", {
                                  style: "currency",
                                  currency: "NGN",
                                })
                              : ""}
                          </p>

                          <div className="hidden">
                            <p
                              className={`font-medium text-neutral-500 
                                      text-[9.167px] leading-[11.167px] ${
                                        isDarkMode
                                          ? "text-white"
                                          : "text-neutral-500"
                                      }`}
                            >
                              Network : {transaction?.network}
                            </p>

                            <p className="font-medium text-neutral-500  text-[9.167px] leading-[11.167px]">
                              recipientname : {transaction?.recipientname}
                            </p>

                            <p className="font-medium text-neutral-500  text-[9.167px] leading-[11.167px]">
                              phonenumber : {transaction?.phonenumber}
                            </p>

                            <p className="font-medium text-neutral-500  text-[9.167px] leading-[11.167px]">
                              wallet : {transaction?.wallet}
                            </p>
                          </div>
                        </div>
                        {/* rightSide */}
                        <div className="flex flex-col gap-[13.473px]">
                          <div className="flex flex-row justify-between gap-[5px] items-center">
                            <p
                              className={`font-medium 
                                    text-[9.167px] leading-[11.167px] cursor-pointer ${
                                      isDarkMode
                                        ? "text-white"
                                        : "text-neutral-500"
                                    }`}
                            >
                              Status:{" "}
                            </p>

                            <p
                              style={{
                                backgroundColor: getBackgroundColor(
                                  transaction?.status
                                ),
                              }}
                              className="font-medium text-white self-center text-[9.167px] leading-[11.167px] cursor-pointer
                             py-[2.122px] px-[4.245px]  rounded-sm"
                            >
                              {[
                                "delivered",
                                "success",
                                "Successful",
                                "",
                              ].includes(transaction?.status)
                                ? "Successful"
                                : transaction?.status === "failed"
                                ? "Failed"
                                : transaction?.status === "pending"
                                ? "Pending"
                                : transaction?.status === "refunded"
                                ? "Refunded"
                                : transaction?.status === "cancelled"
                                ? "Cancelled"
                                : "Unknown"}
                            </p>
                          </div>

                          <div className="flex flex-row">
                            <div>
                              <p
                                className={`font-medium text-[10px] 
                                        leading-[13px] ${
                                          isDarkMode
                                            ? "text-white"
                                            : "text-neutral-500"
                                        }`}
                              >
                                <span className="block">Date & Time:</span>
                                <span className="block">
                                  {" "}
                                  {FormatDate(transaction?.created_at)}{" "}
                                </span>
                                <span className="block">
                                 {FormatTime(transaction?.created_at)}{" "}
                                </span>
                              </p>
                            </div>
                            <div className="w-[13.41px] mt-7 h-[12.06px]">
                              <img
                                className="w-[13.41px] h-[12.06px]"
                                src="./Images/dashboardImages/arrowright.png"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (filteredTransactions && filteredTransactions?.length < 1) ||
                transactionResponse?.data?.data?.data?.transactions?.length <
                  1 || transactionResponse?.data?.data?.data?.transactions === null ||
                  transactionResponse?.data?.data?.data?.transactions === undefined ? (
                <img
                  className="lg:w-[517px] lg:h-[456px]"
                  src={NoRecordImage}
                  alt="No record found"
                />
              ) : transactionHistoryError === "Network error" ? (
                <p
                  className={`text-[20px]  font-[500] ${
                    isDarkMode ? "text-white" : "text-black"
                  }`}
                >
                  An internet connection error has occured, kindly check your
                  internet connection.
                </p>
              ) : transactionHistoryError === "Server error" ? (
                <p
                  className={`text-[20px] t font-[500]
                         ${isDarkMode ? "text-white" : "text-black"}`}
                >
                  Our server is currently facing a downtime, you would receive
                  your transactions shortly.
                </p>
              ) : transactionHistoryError === "unauthorised" &&
                transactionResponse?.data?.data?.data?.transactions ===
                  undefined ? (
                <p className={`text-[20px] text-black font-medium`}>
                Hold on we are trying to process your request.  
                </p>
              ) : (
                loading === false &&
                transactionHistoryError === null && (
                  <p
                    className={`text-[20px] font-[500] 
                   ${isDarkMode ? "text-white" : "text-black"}`}
                  >
                    An Error has occured try again later.
                  </p>
                )
              )}
            </div>
          </div>
        </div>

        {/* LARGER SCREENS */}

        <div
          style={{
            boxShadow: "0px 0px 6.666667461395264px 0px rgba(0, 0, 0, 0.45)",
          }}
          className={` ${isDarkMode ? "bg-black border" : "bg-white"} ${
            toggleSideBar ? "md:px-[0px]" : "md:px-[px]"
          } hidden md:block  md:mt-[-33px]`}
        >
          <div
            className={`transaction ${
              toggleSideBar
                ? "transaction-table21 lg:text-[15px] md:gap-[7%] lg:gap-[8.3%] md:h-[50px] lg:h-[60px]"
                : "transaction-table lg:text-[20px] md:gap-[8.6%] md:h-[50px] lg:h-[60px]"
            } ${
              isDarkMode ? "bg-black border" : " bg-[#ced9ff] "
            } hidden md:text-[12px] font-semibold md:flex md:justify-start md:px-[20px] md:items-center`}
          >
            <div>Products</div>
            <div>Description</div>
            <div>Order No</div>
            <div className={` ${toggleSideBar ? "amount" : "amount1"}`}>
              Amount
            </div>
            <div>Date & Time</div>
            <div>Status</div>
          </div>

          {loading === true ? (
            <div className="h-[150px] flex items-center justify-center">
              <Loader />
            </div>
          ) : filteredTransactions && filteredTransactions?.length > 0 ? (
            filteredTransactions?.map((transaction, index) => (
              <div key={index}>
                <div
                  onClick={async () => {
                    const response = await getTransactionByOrderId(
                      transaction?.order_id,
                      transaction?.product
                    );

                    const orderData = response?.data?.data?.data;
                    if (response?.data?.status === 200) {
                      navigate(
                        transaction?.product === "Electricity Bills"
                          ? "/ElectricityReceipt"
                          : transaction?.product === "Education Pins"
                          ? "/EduReceipt"
                          : transaction?.product === "TV Subscription"
                          ? "/TvSubReceipt"
                          : transaction?.product === "Airtime Top-up"
                          ? "/AirtimeTransReceipt"
                          : transaction?.product === "Data Top-up"
                          ? "/DataTransReceipt"
                          : transaction?.product === "Internal Transfer"
                          ? "/TransferReceipt"
                          : transaction?.product === "Internal Deposit"
                          ? "/VirtualAccountReceipt"
                          : "/SuccessfullReceipt",
                        { state: { orderData, transaction } }
                      );
                    }
                  }}
                >
                  <div
                    className={`${
                      toggleSideBar
                        ? "lg:text-[15px] md:gap-[4%] lg:gap-0 md:text-[8.5px] "
                        : "lg:text-[15px] md:gap-[%] md:text-[10px] lg:md:gap-[%]"
                    }  hidden cursor-pointer font-semibold md:flex md:h-[60px] lg:h-[85px] md:justify-start md:px-[20px] md:items-center  md:mt-[20px] md:pb-[2%] border-b-[1px]`}
                  >
                    <p
                      className={`md:text-[#7C7C7C] ${
                        toggleSideBar ? "md:w-[16.5%]" : "md:w-[17%]"
                      } `}
                    >
                      {transaction?.product}
                    </p>
                    <p
                      className={`md:text-[#7C7C7C] capitalize ${
                        toggleSideBar ? "md:w-[18.5%]" : "md:w-[18.5%]"
                      } `}
                    >
                      {transaction?.description}
                    </p>
                    <p
                      className={`md:text-[#7C7C7C]  ${
                        toggleSideBar ? "md:w-[16%]" : "md:w-[16%]"
                      } `}
                    >
                      {transaction?.order_id}
                    </p>
                    <p
                      className={`md:text-[#7C7C7C]  ${
                        toggleSideBar ? "md:w-[16%]" : "md:w-[17%]"
                      }`}
                    >
                      {transaction.amount
                        ? transaction.amount?.toLocaleString("en-NG", {
                            style: "currency",
                            currency: "NGN",
                          })
                        : ""}
                    </p>

                    <p
                      className={`md:text-[#7C7C7C]  ${
                        toggleSideBar ? "md:w-[16.5%] " : "md:w-[16.5%]"
                      }`}
                    >
                      <span> {FormatDate(transaction?.created_at)}{" "}</span>
                      <br />
                      <span> {FormatTime(transaction?.created_at)}{" "}</span>
                    </p>

                    <div
                      className={`md:flex md:items-center md:justify-between md:text-center ${
                        toggleSideBar
                          ? "md:gap-[7px] md:w-[17%]"
                          : "md:gap-[10px] md:w-[14.5%]"
                      }`}
                    >
                      <p
                        style={{
                          backgroundColor: getBackgroundColor(
                            transaction.status
                          ),
                        }}
                        className={` ${
                          toggleSideBar ? "md:w-[100%]" : "md:w-[100%]"
                        } md:px-[10px] md:py-[5px] md:text-[#FFFFFF] md:rounded-[5px]`}
                      >
                        {" "}
                        {["delivered", "success", "Successful", ""].includes(
                          transaction?.status
                        )
                          ? "Successful"
                          : transaction?.status === "failed"
                          ? "Failed"
                          : transaction?.status === "pending"
                          ? "Pending"
                          : transaction?.status === "refunded"
                          ? "Refunded"
                          : transaction?.status === "cancelled"
                          ? "Cancelled"
                          : "Unknown"}
                      </p>
                      <img
                        className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                        src="./Images/dashboardImages/arrowright.png"
                        alt="/"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : filteredTransactions?.length < 1 ||
            transactionResponse?.data?.data?.data?.transactions?.length < 1 ||
            transactionResponse?.data?.data?.data?.transactions === null ||
            transactionResponse?.data?.data?.data?.transactions ===
              undefined ? (
            <img
              className="lg:w-full lg:h-[456px] flex self-center"
              src={NoRecordImage}
              alt="No record found"
            />
          ) : transactionHistoryError === "Network error" ? (
            <p className={`text-[20px] text-black font-[500]`}>
              An internet connection error has occured, kindly check your
              internet connection.
            </p>
          ) : transactionHistoryError === "Server error" ? (
            <p className={`text-[20px] text-black font-[500]`}>
              Our server is currently facing a downtime, you would receive your
              transactions shortly.
            </p>
          ) : transactionHistoryError === "unauthorised" &&
            transactionResponse?.data?.data?.data?.transactions ===
              undefined ? (
            <p className={`text-[20px] text-black font-medium`}>
                Hold on we are trying to process your request.  
                </p>
          ) : (
            loading === false &&
            transactionHistoryError === null && (
              <p className={`text-[20px] text-black font-[500]`}>
                An Error has occured try again later.
              </p>
            )
          )}
        </div>
      </div>
      {orderLoading && (
        <Modal>
          <Loader />
        </Modal>
      )}
      {sessionModal && <InternalLoginSession
       setExpiredSessionLogin={setSessionModal} />}
    </>
  );
};

export default TransactionHistory;

// #97E8B9
// #FFD98F
// #FB9393
// #92ABFE
