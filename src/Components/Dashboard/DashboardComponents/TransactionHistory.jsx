import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextProvider } from "../../Context";
import "../DashboardComponents/DataTopUpPage/DataTopUp.css";
import NoRecordImage from "../../Add&SelectRecipient/RecipientImages/NoRecordImage.svg";
import { Loader } from "../../Loader/Loader";

const TransactionHistory = ({transactionResponse, transactionHistoryError, loading}) => {
  const { isDarkMode, toggleSideBar } = useContext(ContextProvider);



  const getBackgroundColor = (status) => {
    if (status === "Successful" || status === "delivered") {
      return "#97E8B9";
    } else if (status === "Failed") {
      return "#FB9393";
    } else if (status === "Pending") {
      return "#FFD98F";
    } else if (status === "Refunded") {
      return "#A6D9FF";
    } else if (status === "Cancelled") {
      return "#EFC6BE";
    } else {
      return "";
    }
  };

  

  const filteredTransactions = transactionResponse?.data?.data?.data?.transactions?.filter((transaction, index) => {
    console.log(transaction);
 return index < 4;
     });

//Variable types to handle the filtering of the recent transaction history
//which is viewed or displays the transaction receipt





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
 ${isDarkMode ? "border-white": "border-gray-500 "}`}
                       >
                         {loading === true ? (
                         <div className="h-[150px] flex items-center justify-center">
                     <Loader/>
                     </div>
                         ) : (
                     filteredTransactions && filteredTransactions?.length > 1 ? (
                filteredTransactions?.map((transaction, index) => (
                           <div className={`${index < 3 ? "border-b-[1.2px] border-gray-500" : ""}`}
                            key={index}>
                             <Link
                               to={`/${
                                 transaction.status === "delivered"
                                   ? "SuccessfullReceipt"
                                   : transaction.status === "Failed"
                                   ? "FailedReceipt"
                                   : transaction.status === "Pending"
                                   ? "PendingReceipt"
                                   : transaction.status === "Refunded"
                                   ? "RefundedReceipt"
                                   : transaction.status === "Cancelled"
                                   ? "CancelledReceipt"
                                   : ""
                               }`}
                               state={{ transaction }}
                             >
                               <div
                                 key={index}
                                 className="flex justify-between py-[20px]"
                               >
                                 <div className="flex flex-col gap-[7.648px]">
                                   <h2 className={`font-medium  text-[9.167px] leading-[11.167px]
                                    ${isDarkMode ? "text-white" : "text-neutral-500"}`}>
                                     Order No : {transaction?.order_id}
                                   </h2>
                                   <h2 className={`font-medium text-black text-[9.167px] 
                                   leading-[11.167px] ${isDarkMode ? "text-white" : "text-neutral-500"}`}>
                                     Product : {transaction?.product}
                                   </h2>
                                   <p className={ `font-medium text-neutral-500 text-[9.167px] 
                                   leading-[11.167px] ${isDarkMode ? "text-white" : "text-neutral-500"}`}>
                                     Description : {transaction.description}
                                   </p>
           
                                   <p className={`font-medium text-neutral-500  
                                   text-[9.167px] leading-[11.167px] ${isDarkMode ? "text-white" : "text-neutral-500"}`}>
                                     Amount : {transaction.amount ? transaction.amount?.toLocaleString("en-NG", {
                                      style : "currency",
                                      currency : "NGN"
                                     }): ""}
                                   </p>
           
                                   <div className="hidden">
                                     <p className={`font-medium text-neutral-500 
                                      text-[9.167px] leading-[11.167px] ${isDarkMode ?"text-white" : "text-neutral-500"  }`}>
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
                                     <p className={`font-medium 
                                    text-[9.167px] leading-[11.167px] cursor-pointer ${isDarkMode ? "text-white" : "text-neutral-500"}`}>
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
                                         {transaction?.status === "delivered" ? "Successful" : "unknown"}
                                       </p>
                                    
                                   </div>
           
                                   <div className="flex flex-row">
                                     <div>
                                       <p className={`font-medium text-[10px] 
                                        leading-[13px] ${isDarkMode ? "text-white" : "text-neutral-500"}`}>
                                         <span className="block">Date & Time:</span>
                                         <span className="block"> {transaction?.created_at?.slice(0,10)} </span>
                                         <span className="block">{ transaction?.created_at?.slice(14,19)}</span>
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
                             </Link>
                           </div>
                         ))) : (
                           ((filteredTransactions && filteredTransactions?.length < 1)|| transactionResponse?.data?.data?.data?.transactions?.length < 1 ) ? (
                         <img className="lg:w-[517px] lg:h-[456px]" src={NoRecordImage} alt="No record found"/> 
                         ) : 
                         transactionHistoryError === "Network error"  ? (
                          <p className={`text-[20px]  font-[500] ${isDarkMode ? "text-white" : "text-black"}`}>
                   An internet connection error has occured,
                    kindly check your internet connection.
                          </p>
                  ):  transactionHistoryError === "Server error" ? (
                        <p className={`text-[20px] t font-[500]
                         ${isDarkMode ? "text-white" : "text-black"}`}>
                       Our server is currently facing a downtime, you would receive your transactions shortly.     
                          </p>
                  ) : transactionHistoryError === "unauthorised" && transactionResponse?.data?.data?.data?.transactions === undefined ? (
                       <div className="h-[150px] flex items-center justify-center">
                     <Loader/>
                     </div>
                  ) : loading === false && transactionHistoryError === null  &&   <p className ={`text-[20px] font-[500] 
                   ${isDarkMode ? "text-white" : "text-black"}`}>
                   An Error has occured try again later.
                          </p>))}
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
                ? "transaction-table21 lg:text-[15px] md:gap-[8.3%] md:h-[50px] lg:h-[60px]"
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
          <Loader/>
          </div>
              ) : (
          filteredTransactions && filteredTransactions?.length > 1 ? (
     filteredTransactions?.map((transaction, index) => (
                 <div key={index}>
                <Link
                  to={`/${
                    transaction.status === "delivered"
                      ? "SuccessfullReceipt"
                      : transaction.status === "Failed"
                      ? "FailedReceipt"
                      : transaction.status === "Pending"
                      ? "PendingReceipt"
                      : transaction.status === "Refunded"
                      ? "RefundedReceipt"
                      : transaction.status === "Cancelled"
                      ? "CancelledReceipt"
                      : "" // Add a default case or handle it as per your requirement
                  }`}
                  state={{ transaction }}
                >
                  <div
                    className={`${
                      toggleSideBar
                        ? "lg:text-[15px] md:gap-[%] md:text-[8.5px] "
                        : "lg:text-[15px] md:gap-[%] md:text-[10px] lg:md:gap-[%]"
                    }  hidden  font-semibold md:flex md:h-[60px] lg:h-[85px] md:justify-start md:px-[20px] md:items-center  md:mt-[20px] md:pb-[2%] border-b-[1px]`}
                  >
                    <p
                      className={`md:text-[#000000] ${
                        toggleSideBar ? "md:w-[16.5%]" : "md:w-[17%]"
                      } ${isDarkMode ? "text-white" : "text-neutral-500" }`}
                    >
                      {transaction?.product}
                    </p>
                    <p
                      className={`md:text-[#7C7C7C] ${
                        toggleSideBar ? "md:w-[18.5%]" : "md:w-[18.5%]"
                      } ${isDarkMode ? "text-white" : "text-neutral-500" }`}
                    >
                      {transaction?.description}
                    </p>
                    <p
                      className={`md:text-[#7C7C7C]  ${
                        toggleSideBar ? "md:w-[16%]" : "md:w-[16%]"
                      } ${isDarkMode ? "text-white" : "text-neutral-500" }`}
                    >
                      {transaction?.order_id}
                    </p>
                    <p
                      className={`md:text-[#7C7C7C]  ${
                        toggleSideBar ? "md:w-[16%]" : "md:w-[17%]"
                      } ${isDarkMode ? "text-white" : "text-neutral-500" }`}
                    >
                      {transaction.amount ? transaction.amount?.toLocaleString("en-NG", {
                                      style : "currency",
                                      currency : "NGN"
                                     }): ""}
                    </p>

                    <p
                      className={`md:text-[#7C7C7C]  ${
                        toggleSideBar ? "md:w-[16.5%] " : "md:w-[16.5%]"
                      } ${isDarkMode ? "text-white" : "text-neutral-500" }`}
                    >
                      <span>{transaction?.created_at?.slice(0,10)}</span>
                      <br />
                      <span>{ transaction?.created_at?.slice(14,19)}</span>
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
                        className={`${isDarkMode ? "text-white" : "text-neutral-500" } ${
                          toggleSideBar ? "md:w-[100%]" : "md:w-[100%]"
                        } md:px-[10px] md:py-[5px] md:text-[#FFFFFF] md:rounded-[5px]`}
                      >
                        {" "}
                        {transaction.status === "delivered" ? "Successful" : ""}
                      </p>
                      <img
                        className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                        src="./Images/dashboardImages/arrowright.png"
                        alt="/"
                      />
                    </div>
                  </div>
                </Link>
              </div>
              ))) : (
                ((filteredTransactions && filteredTransactions?.length < 1)|| transactionResponse?.data?.data?.data?.transactions?.length < 1 ) ? (
              <img className="lg:w-full lg:h-[456px] flex self-center w-[" src={NoRecordImage} alt="No record found"/> 
              ) : 
              transactionHistoryError === "Network error"  ? (
               <p className={`text-[20px] text-black font-[500]`}>
        An internet connection error has occured,
         kindly check your internet connection.
               </p>
       ):  transactionHistoryError === "Server error" ? (
             <p className={`text-[20px] text-black font-[500]`}>
            Our server is currently facing a downtime, you would receive your transactions shortly.     
               </p>
       ) : transactionHistoryError === "unauthorised" && transactionResponse?.data?.data?.data?.transactions === undefined ? (
            <div className="h-[150px] flex items-center justify-center">
          <Loader/>
          </div>
       ) : loading === false && transactionHistoryError === null  &&   <p className ={`text-[20px] text-black font-[500]`}>
        An Error has occured try again later.
               </p>))}

       

          
        
        </div>
      </div>
    </>
  );
};

export default TransactionHistory;

// #97E8B9
// #FFD98F
// #FB9393
// #92ABFE
