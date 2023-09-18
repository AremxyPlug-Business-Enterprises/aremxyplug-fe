import { useState } from "react";
import { useContext } from "react";
import { ContextProvider } from "../../../../../../Context";
import { Modal } from "../../../../../../Screens/Modal/Modal";
import styles from "../../../../TransferComponent/transfer.module.css";
import Joi from "joi";
import { ConfirmInterTransactionPopUp } from "../InternationalPopUp/ConfirmInterTransactionPopUp";

export const InternationalDetail = ({
  InternationalDetailPopUp,
  setInternationalDetailPopUp,
  amountToTransfer,
  amountToReceive
}) => {
  const { isDarkMode, toggleSideBar, setInternationalBankConfirmation } =
    useContext(ContextProvider);

  const [state, setState] = useState({
    bankName: "",
    accountNumber: "",
    accountName: "",
    swiftCode: "",
    recipientAddress: "",
    purposeOfPayment: "",
    message: "",
  });

  const [purpose, setPurpose] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const inputValue = type === "checkbox" ? checked : value;
    setState({
      ...state,
      [name]: inputValue,
    });
  };

  // ========form validation using regex=======
  const schema = Joi.object({
    bankName: Joi.string()
      .required()
      .messages({ "string.pattern.base": "Bank name cannot be empty" }),
    accountNumber: Joi.string()
      .pattern(new RegExp(/^\d{10,}/))
      .required()
      .messages({
        "string.pattern.base": "Account number should be 10 digits ",
      }),
    accountName: Joi.string().required(),
    swiftCode: Joi.string().required(),
    recipientAddress: Joi.string().required(),
    purposeOfPayment: Joi.string().required(),
  });
  // ======end of form valdiation=====

  // ==========Submit Handler============
  const handleProceed = (e) => {
    e.preventDefault();

    const {
      bankName,
      accountNumber,
      accountName,
      swiftCode,
      recipientAddress,
      purposeOfPayment,
    } = state;

    const { error } = schema.validate({
      bankName,
      accountNumber,
      accountName,
      swiftCode,
      recipientAddress,
      purposeOfPayment,
    });

    if (error) {
      setErrors(
        error.details.reduce((acc, curr) => {
          acc[curr.path[0]] = curr.message;
          return acc;
        }, {})
      );
    } else {
      setInternationalDetailPopUp(false);
      setInternationalBankConfirmation(true);
    }

    // console.log(successful);
  };

  // const handlePurposePopUpOpen = () => {
  //   setInternationalDetailPopUp(false);
  //   setPurpose(true);
  // };

  // const handlePurposePopUpClose = () => {
  //   setPurpose(false);
  //   setInternationalDetailPopUp(true);
  // };

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
                <p className="text-[10px] font-extrabold lg:text-[16px]">
                  Bank Name
                </p>
                <div className="border rounded-[5px] h-[25px] flex justify-between items-center p-1 lg:h-[40px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]">
                  <input
                    onChange={handleInputChange}
                    name="bankName"
                    value={state.bankName}
                    className="text-[10px] w-[100%] h-[100%] outline-none lg:text-[14px]"
                    type="text"
                  />
                  <img
                    className=" h-[13.3px] w-[13.3px] lg:w-[24px] lg:h-[24px] "
                    src="./Images/dashboardImages/arrow-down2.png"
                    alt="dropdown"
                  />
                </div>
                {errors.bankName && (
                  <div className="text-[12px] text-red-500 italic lg:text-[14px]">
                    {errors.bankName}
                  </div>
                )}
              </div>

              {/* =========================Account Number / IBAN==================== */}
              <div className={styles.inputBox}>
                <p className="text-[10px] font-extrabold lg:text-[16px]">
                  Account Number / IBAN
                </p>
                <div className="border rounded-[5px] h-[25px] flex justify-between items-center p-1 lg:h-[40px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]">
                  <input
                    onChange={handleInputChange}
                    name="accountNumber"
                    value={state.accountNumber}
                    className="text-[10px] w-[100%] h-[100%] outline-none lg:text-[14px]"
                    type="number"
                  />
                </div>
                {errors.accountNumber && (
                  <div className="text-[12px] text-red-500 italic lg:text-[14px]">
                    {errors.accountNumber}
                  </div>
                )}
              </div>

              {/* ===========================Account Name============================ */}
              <div className={` ${styles.inputBox} lg:flex lg:justify-end`}>
                <p className="text-[10px] font-extrabold lg:text-[16px]">
                  Account Name
                </p>
                <div className="border rounded-[5px] h-[25px] flex justify-between items-center p-1 lg:h-[40px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]">
                  <input
                    onChange={handleInputChange}
                    name="accountName"
                    value={state.accountName}
                    className="text-[10px] w-[100%] h-[100%] outline-none lg:text-[14px]"
                    type="text"
                  />
                </div>
                {errors.accountName && (
                  <div className="text-[12px] text-red-500 italic lg:text-[14px]">
                    {errors.accountName}
                  </div>
                )}
              </div>

              {/* ===================Swift Code/ Sort Code / Routine Number ============ */}
              <div className={styles.inputBox}>
                <p className="text-[10px] font-extrabold lg:text-[16px]">
                  Swift Code/ Sort Code / Routine Number
                </p>
                <div className="border rounded-[5px] h-[25px] flex justify-between items-center p-1 lg:h-[40px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]">
                  <input
                    onChange={handleInputChange}
                    name="swiftCode"
                    value={state.swiftCode}
                    className="text-[10px] w-[100%] h-[100%] outline-none lg:text-[14px]"
                    type="text"
                  />
                </div>
                {errors.swiftCode && (
                  <div className="text-[12px] text-red-500 italic lg:text-[14px]">
                    {errors.swiftCode}
                  </div>
                )}
              </div>

              {/* =====================Recipient Address=========================== */}
              <div className={styles.inputBox}>
                <p className="text-[10px] font-extrabold lg:text-[16px]">
                  Recipient Address
                </p>
                <div className="border rounded-[5px] h-[25px] flex justify-between items-center p-1 lg:h-[40px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]">
                  <input
                    onChange={handleInputChange}
                    name="recipientAddress"
                    value={state.recipientAddress}
                    className="text-[10px] w-[100%] h-[100%] outline-none lg:text-[14px]"
                    type="text"
                  />
                </div>
                {errors.recipientAddress && (
                  <div className="text-[12px] text-red-500 italic lg:text-[14px]">
                    {errors.recipientAddress}
                  </div>
                )}
              </div>

              {/* =====================Purpose of Payment=========================== */}
              <div className={styles.inputBox}>
                <div className="flex items-center gap-[5px]">
                  <p className="text-[10px] font-extrabold lg:text-[16px]">
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
                      } w-[90%] bg-white shadow-lg rounded-[8px] h-[269px] flex flex-col items-center py-[4%] gap-[40px] md:h-[360px] lg:h-[404px] lg:py-[3%] lg:rounded-[20px]`}
                    >
                      <hr className="h-[6px] w-full bg-[#04177f] border-none mt-[5%] md:mt-[6%] md:h-[10px]" />

                      <div className="flex flex-col justify-between h-full">
                        <p className="leading-[11px] text-[9px] text-[#7C7C7C] text-center font-extrabold md:text-[10px] lg:w-[90%] lg:mx-auto lg:text-[16px] lg:flex lg:flex-col lg:gap-[5%] lg:leading-[19.5px]">
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
                <div className="border rounded-[5px] h-[25px] flex justify-between items-center p-1 lg:h-[40px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]">
                  <input
                    onChange={handleInputChange}
                    name="purposeOfPayment"
                    value={state.purposeOfPayment}
                    className="text-[10px] w-[100%] h-[100%] outline-none lg:text-[14px]"
                    type="text"
                  />
                </div>
                {errors.purposeOfPayment && (
                  <div className="text-[12px] text-red-500 italic lg:text-[14px]">
                    {errors.purposeOfPayment}
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
              {errors.message && (
                <div className="text-[12px] text-red-500 italic lg:text-[14px]">
                  {errors.message}
                </div>
              )}
            </div>

            <button
              onClick={handleProceed}
              className={`bg-[#04177f] my-[5%] w-[88%] flex justify-center items-center mx-auto cursor-pointer text-[14px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[20px] lg:mt-[15%] lg:text-[16px] lg:h-[38px] lg:my-`}
            >
              Proceed
            </button>
          </div>
        </Modal>
      )}

      <ConfirmInterTransactionPopUp
        bankName={state.bankName}
        accountNumber={state.accountNumber}
        accountName={state.accountName}
        swiftCode={state.swiftCode}
        recipientAddress={state.recipientAddress}
        purposeOfPayment={state.purposeOfPayment}
        amountToTransfer={amountToTransfer}
        amountToReceive={amountToReceive}
      />
    </div>
  );
};
