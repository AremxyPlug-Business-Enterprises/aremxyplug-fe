import React from "react";
import { useState, useContext } from "react";
import { ContextProvider } from "../../../../Context";
import { Modal } from "../../../../Screens/Modal/Modal";
import styles from "../../TransferComponent/transfer.module.css";
import Joi from "joi";

export const TransferMoneyToAccountPopUp = () => {
  const {
    toggleSideBar,
    image,
    amtToTransfer,
    tfPopUp,
    setTfPopUp,
    setAmtToTransfer,
    setConfirmationPopUp,
  } = useContext(ContextProvider);

  const [errors, setErrors] = useState({});
  const amountHandler = (e) => {
    setAmtToTransfer(e.target.value);
  };

  const schema = Joi.object({
    amtToTransfer: Joi.string()
      .pattern(new RegExp(/\d{4,}/))
      .required()
      .messages({
        "string.pattern.base": "Amount can not be less than 1000",
      }),
  });

  const handleProceed = (event) => {
    event.preventDefault();

    const { error } = schema.validate({
      amtToTransfer,
    });

    if (error) {
      setErrors(
        error.details.reduce((acc, curr) => {
          acc[curr.path[0]] = curr.message;
          return acc;
        }, {})
      );
    } else {
      setTfPopUp(false);
      setConfirmationPopUp(true);
      // console.log(confirmationPopUp);
      setErrors({});
    }
  };

  return (
    <div>
      {tfPopUp && (
        <Modal>
          (
          <div
            className={` ${styles.transferMoneyPop} ${
              toggleSideBar ? "md:w-[45%] lg:ml-[20%] lg:w-[40%]" : "md:w-[80%] lg:w-[40%]"
            } w-[90%]`}
          >
            <img
              onClick={() => setTfPopUp(false)}
              className="absolute right-2 w-[18px] h-[18px] my-[1%] md:w-[35px] md:h-[35px] lg:w-[25px] lg:h-[25px]"
              src="/Images/transferImages/close-circle.png"
              alt=""
            />
            <hr className="h-[6px] bg-[#04177f] border-none mt-[8%] md:mt-[6%] md:h-[10px]" />
            <h2 className="text-[12px] my-[5%] text-center md:text-[20px] lg:text-[16px] md:my-[4%]">
              Transfer Money to Account
            </h2>
            <div className="w-[90%] mx-auto flex flex-col gap-[10px] md:grid md:grid-cols-2 lg:gap-[30px]">
              <div>
                <p className="text-[10px] font-extrabold md:text-[16px] lg:text-[14px]">
                  Bank Name
                </p>
                <div className="border-[0.55px] h-[18px] flex items-center p-[1%] rounded-[4px] md:p-[3%] md:rounded-[8px] md:h-[40px] md:border-[1.5px] lg:h-[30px]">
                  <p className="text-[8px] text-[#0008] md:text-[14px] lg:text-[12px]">
                    GT Bank
                  </p>
                </div>
              </div>
              <div>
                <p className="text-[10px] font-extrabold md:text-[16px] lg:text-[14px]">
                  Account Name
                </p>
                <div className="border-[0.55px] h-[18px] flex items-center p-[1%] rounded-[4px] md:p-[3%]  md:rounded-[8px] md:h-[40px] md:border-[1.5px] lg:h-[30px]">
                  <p className="text-[8px] text-[#0008] md:text-[14px] lg:text-[12px]">
                    Habib Kamaldeen
                  </p>
                </div>
              </div>
              <div>
                <p className="text-[10px] font-extrabold md:text-[16px] lg:text-[14px]">
                  Account Number
                </p>
                <div className="border-[0.55px] h-[18px] flex items-center p-[1%] rounded-[4px] md:p-[3%] md:rounded-[8px] md:h-[40px] md:border-[1.5px] lg:h-[30px]">
                  <p className="text-[8px] text-[#0008] md:text-[14px] lg:text-[12px]">
                    0123456789
                  </p>
                </div>
              </div>
              <div>
                <p className="text-[10px] font-extrabold md:text-[16px] lg:text-[14px]">
                  Amount To Transfer
                </p>
                <input
                  onChange={amountHandler}
                  type="number"
                  className="outline-none text-[10px] text-[#0008] border-[0.55px] w-full h-[18px] flex flex-col justify-between p-[1%] rounded-[4px] md:text-[14px] md:p-[3%] md:rounded-[8px] md:h-[40px] md:border-[1.5px] lg:h-[30px] lg:text-[12px]"
                />
                {errors.amtToTransfer && (
                  <div className="text-[12px] text-red-500 italic lg:text-[14px]">
                    {errors.amtToTransfer}
                  </div>
                )}
              </div>
              <div>
                <p className="text-[10px] font-extrabold md:text-[16px] lg:text-[14px]">
                  Available Balance
                </p>
                <div className="border-[0.55px] h-[20px] flex justify-between items-center p-[1%] rounded-[4px] md:p-[3%] md:rounded-[8px] md:h-[40px] md:border-[1.5px] lg:h-[30px]">
                  <p className="text-[8px] text-[#0008] md:text-[14px] lg:text-[12px]">
                    &#8358;50,000.00
                  </p>
                  <img
                    className="w-[13px] h-[13px] md:w-[24px] md:h-[24px] lg:w-[29px] lg:h-[29px]"
                    src={image}
                    alt="/"
                  />
                </div>
              </div>
            </div>
            <div className="w-[90%] mx-auto mt-[15px] md:w-[50%] md:ml-[5%] md:mx-0">
              <p className="text-[10px] font-extrabold md:text-[16px] lg:text-[14px]">
                Message
              </p>
              <textarea
                placeholder="Optional"
                className="text-[10px] outline-none w-full border-[0.55px] h-[80px] flex flex-col justify-between p-[1%] rounded-[4px] md:h-[100px] md:text-[14px] md:rounded-[8px] md:border-[1.5px] lg:h-[80px] lg:w-[90%]"
              ></textarea>
            </div>
            <button
              onClick={handleProceed}
              className={`${
                amtToTransfer < 4 ? "bg-[#0008]" : "bg-[#04177f]"
              } my-[5%] w-[88%] flex justify-center items-center mx-auto cursor-pointer text-[14px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[20px] lg:text-[16px] lg:h-[38px] lg:my-[4%]`}
            >
              Proceed
            </button>
          </div>
          )
        </Modal>
      )}
    </div>
  );
};
