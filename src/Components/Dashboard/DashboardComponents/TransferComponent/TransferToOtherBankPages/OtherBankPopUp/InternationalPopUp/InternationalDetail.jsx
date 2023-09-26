// import { useState } from "react";
import { useContext } from "react";
import { ContextProvider } from "../../../../../../Context";
import { Modal } from "../../../../../../Screens/Modal/Modal";
import styles from "../../../../TransferComponent/transfer.module.css";
import { ConfirmInterTransactionPopUp } from "./ConfirmInterTransactionPopUp";

export const InternationalDetail = () => {
  const {
    isDarkMode,
    toggleSideBar,
    InternationalDetailPopUp,
    setInternationalDetailPopUp,
    internationalDetails,
    purpose,
    setPurpose,
    internErrors,
    handleInternationalInputChange,
    handleProceedButton,
  } = useContext(ContextProvider);

  return (
    <div>
      {InternationalDetailPopUp && (
        <Modal>
          <div
            className={` ${styles.transferMoneyPop} ${
              toggleSideBar
                ? "md:w-[45%] lg:ml-[20%] lg:w-[40%]"
                : "md:w-[80%] lg:w-[562px]"
            } w-[90%] overflow-auto`}
          >
            <img
              onClick={() => setInternationalDetailPopUp(false)}
              className="absolute right-2 w-[18px] h-[18px] my-[1%] md:w-[35px] md:h-[35px] lg:w-[25px] lg:h-[25px]"
              src="/Images/transferImages/close-circle.png"
              alt=""
            />

            <hr className="h-[6px] bg-[#04177f] border-none mt-[8%] md:mt-[6%] md:h-[10px]" />

            <h2 className="text-[12px] my-[5%] text-center md:text-[20px] lg:text-[20px] md:my-[4%]">
              Recipient Details
            </h2>

            <div className="mx-[5%] mt-[4%] flex flex-col gap-[10px] md:grid md:grid-cols-2 md:gap-[5%] h-[] lg:w-[90%]">
              {/* ============================Bank Name====================== */}
              <div className={` ${styles.inputBox}`}>
                <p className="text-[10px] font-extrabold md:text-[14px] lg:text-[16px]">
                  Bank Name
                </p>
                <div className="border rounded-[5px] h-[25px] flex justify-between items-center p-1 md:h-[35px] lg:h-[40px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]">
                  <input
                    onChange={handleInternationalInputChange}
                    name="bankName"
                    value={internationalDetails.bankName}
                    className="text-[10px] w-[100%] h-[100%] outline-none lg:text-[14px]"
                    type="text"
                  />
                  <img
                    className=" h-[13.3px] w-[13.3px] lg:w-[24px] lg:h-[24px] "
                    src="./Images/dashboardImages/arrow-down2.png"
                    alt="dropdown"
                  />
                </div>
                {internErrors.bankName && (
                  <div className="text-[12px] text-red-500 italic lg:text-[14px]">
                    {internErrors.bankName}
                  </div>
                )}
              </div>

              {/* =========================Account Number / IBAN==================== */}
              <div className={styles.inputBox}>
                <p className="text-[10px] font-extrabold md:text-[14px] lg:text-[16px]">
                  Account Number / IBAN
                </p>
                <div className="border rounded-[5px] h-[25px] flex justify-between items-center p-1 md:h-[35px] lg:h-[40px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]">
                  <input
                    onChange={handleInternationalInputChange}
                    name="accountNumber"
                    value={internationalDetails.accountNumber}
                    className="text-[10px] w-[100%] h-[100%] outline-none lg:text-[14px]"
                    type="number"
                  />
                </div>
                {internErrors.accountNumber && (
                  <div className="text-[12px] text-red-500 italic lg:text-[14px]">
                    {internErrors.accountNumber}
                  </div>
                )}
              </div>

              {/* ===========================Account Name============================ */}
              <div className={` ${styles.inputBox} lg:flex lg:justify-end`}>
                <p className="text-[10px] font-extrabold md:text-[14px] lg:text-[16px]">
                  Account Name
                </p>
                <div className="border rounded-[5px] h-[25px] flex justify-between items-center p-1 md:h-[35px] lg:h-[40px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]">
                  <input
                    onChange={handleInternationalInputChange}
                    name="accountName"
                    value={internationalDetails.accountName}
                    className="text-[10px] w-[100%] h-[100%] outline-none lg:text-[14px]"
                    type="text"
                  />
                </div>
                {internErrors.accountName && (
                  <div className="text-[12px] text-red-500 italic lg:text-[14px]">
                    {internErrors.accountName}
                  </div>
                )}
              </div>

              {/* ===================Swift Code/ Sort Code / Routine Number ============ */}
              <div className={styles.inputBox}>
                <p className="text-[10px] font-extrabold md:text-[14px] lg:text-[16px]">
                  Swift Code/ Sort Code / Routine Number
                </p>
                <div className="border rounded-[5px] h-[25px] flex justify-between items-center p-1 md:h-[35px] lg:h-[40px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]">
                  <input
                    onChange={handleInternationalInputChange}
                    name="swiftCode"
                    value={internationalDetails.swiftCode}
                    className="text-[10px] w-[100%] h-[100%] outline-none lg:text-[14px]"
                    type="text"
                  />
                </div>
                {internErrors.swiftCode && (
                  <div className="text-[12px] text-red-500 italic lg:text-[14px]">
                    {internErrors.swiftCode}
                  </div>
                )}
              </div>

              {/* =====================Recipient Address=========================== */}
              <div className={styles.inputBox}>
                <p className="text-[10px] font-extrabold md:text-[14px] lg:text-[16px]">
                  Recipient Address
                </p>
                <div className="border rounded-[5px] h-[25px] flex justify-between items-center p-1 md:h-[35px] lg:h-[40px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]">
                  <input
                    onChange={handleInternationalInputChange}
                    name="recipientAddress"
                    value={internationalDetails.recipientAddress}
                    className="text-[10px] w-[100%] h-[100%] outline-none lg:text-[14px]"
                    type="text"
                  />
                </div>
                {internErrors.recipientAddress && (
                  <div className="text-[12px] text-red-500 italic lg:text-[14px]">
                    {internErrors.recipientAddress}
                  </div>
                )}
              </div>

              {/* =====================Purpose of Payment=========================== */}
              <div className={styles.inputBox}>
                <div className="flex items-center gap-[5px]">
                  <p className="text-[10px] font-extrabold md:text-[14px] lg:text-[16px]">
                    Purpose of payment
                  </p>
                  <img
                    onClick={() => setPurpose(true)}
                    className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                    src="./Images/transferImages/message-question.png"
                    alt="/"
                  />
                </div>

                {purpose && (
                  <Modal>
                    <div
                      className={`${
                        toggleSideBar
                          ? "md:w-[45%] lg:ml-[20%] lg:w-[40%]"
                          : "md:w-[80%] lg:w-[562px]"
                      } w-[90%] bg-white shadow-lg rounded-[8px] h-[269px] flex flex-col items-center py-[4%] gap-[20px] md:h-[370px] lg:h-[404px] lg:py-[1%] lg:rounded-[20px]`}
                    >
                      <hr className="h-[6px] w-full bg-[#04177f] border-none mt-[5%] md:mt-[3%] md:h-[12px] lg:mt-[5%] lg:h-[10px]" />

                      <div className="flex flex-col justify-between h-full ">
                        <p className="leading-[11px] text-[9px] text-[#7C7C7C] text-center font-extrabold md:text-[14px] lg:w-[90%] lg:mx-auto lg:text-[16px] lg:flex lg:flex-col lg:gap-[5%] lg:leading-[19.5px]">
                          <span className="text-[#04177f] font-extrabold">
                            Purpose of Payments can be any of the following,
                            E.g;
                          </span>
                          <br />
                          <br />
                          <p>
                            For Bills Payment, For Goods & Services, For
                            Financial, For Education, For Healthcare, and etc...
                          </p>
                        </p>

                        <img
                          className="w-[86px] h-[86px] md:w-[120px] md:h-[120px] mx-auto lg:w-[150px] lg:h-[150px]"
                          src="./Images/transferImages/payment.gif"
                          alt="conversion"
                        />
                        <div
                          onClick={() => setPurpose(false)}
                          className={` ${
                            isDarkMode ? "border" : "bg-[#04177f] "
                          } cursor-pointer mx-auto text-white text-[10px] h-[40px] w-[80%] rounded-[5px] flex items-center justify-center md:mx-auto md:w-[20%] md:h-[30px] md:text-[14px] lg:my-[3%] lg:h-[40px] lg:text-[20px] lg:w-[30%] lg:mx-auto`}
                        >
                          Okay
                        </div>
                      </div>
                    </div>
                  </Modal>
                )}
                <div className="border rounded-[5px] h-[25px] flex justify-between items-center p-1 md:h-[35px] lg:h-[40px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]">
                  <input
                    onChange={handleInternationalInputChange}
                    name="purposeOfPayment"
                    value={internationalDetails.purposeOfPayment}
                    className="text-[10px] w-[100%] h-[100%] outline-none lg:text-[14px]"
                    type="text"
                  />
                </div>
                {internErrors.purposeOfPayment && (
                  <div className="text-[12px] text-red-500 italic lg:text-[14px]">
                    {internErrors.purposeOfPayment}
                  </div>
                )}
              </div>

              {/* =====================Message=========================== */}

              <div className="w-full mx-auto mt-[15px] md:w-[100%] ">
                <p className="text-[10px] font-extrabold md:text-[16px] lg:text-[14px]">
                  Messages
                </p>
                <textarea
                  placeholder="Optional"
                  className="text-[10px] outline-none w-full border-[1px] h-[40px] flex flex-col justify-between p-[1%] rounded-[4px] md:h-[100px] md:text-[14px] md:rounded-[8px] md:border-[1px] lg:border-[#0003] lg:h-[80px] lg:w-[100%]"
                ></textarea>
              </div>
              {internErrors.message && (
                <div className="text-[12px] text-red-500 italic lg:text-[14px]">
                  {internErrors.message}
                </div>
              )}
            </div>

            <button
              onClick={handleProceedButton}
              className={`bg-[#04177f] my-[5%] w-[88%] flex justify-center items-center mx-auto cursor-pointer text-[14px] font-extrabold h-[40px] text-white rounded-[6px] md:mt-[10%] md:w-[25%] md:rounded-[8px] md:text-[20px] lg:mt-[15%] lg:text-[16px] lg:h-[38px] lg:my-`}
            >
              Proceed
            </button>
          </div>
        </Modal>
      )}

      <ConfirmInterTransactionPopUp />
    </div>
  );
};
