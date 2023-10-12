import React from "react";
import { useContext } from "react";
import { ContextProvider } from "../../../../Context";
import { Modal } from "../../../../Screens/Modal/Modal";
// import { Link } from "react-router-dom";
import styles from "../../TransferComponent/transfer.module.css";

export const TransactFailedPopUp = () => {
  const { toggleSideBar, transactSuccessPopUp, setTransactSuccessPopUp } =
    useContext(ContextProvider);

  const handleTransactionSuccessClose = () => {
    setTransactSuccessPopUp(false);
  };

  return (
    <div>
      {transactSuccessPopUp && (
        <Modal>
          <div
            className={`${styles.failed} ${
              toggleSideBar ? "md:w-[45%] lg:ml-[20%] lg:w-[40%]" : "lg:w-[40%]"
            } md:w-[45%] w-[90%] overflow-auto`}
          >
            <div className="flex justify-between items-center mx-[3%] my-[2%] lg:my-[1%]">
              <img
                onClick={() => setTransactSuccessPopUp(false)}
                className=" w-[18px] h-[12px] md:w-[35px] md:h-[35px] lg:w-[35px] lg:h-[25px]"
                src="/Images/login/arpLogo.png"
                alt=""
              />

              <img
                onClick={() => setTransactSuccessPopUp(false)}
                className=" w-[18px] h-[18px] md:w-[35px] md:h-[35px] lg:w-[29px] lg:h-[29px]"
                src="/Images/transferImages/close-circle.png"
                alt=""
              />
            </div>
            <hr className="h-[6px] bg-[#04177f] border-none md:h-[10px]" />
            <h2 className="text-[12px] my-[4%] text-center md:text-[20px] md:my-[3%] lg:text-[14px] lg:my-[2%]">
              Transaction Failed
            </h2>
            <img
              className="w-[44px] h-[44px] mx-auto mb-[2%] lg:w-[60px] lg:h-[60px]"
              src="/Images/failed.png"
              alt="/"
            />

            <p className="font-extrabold text-[8px] text-[#F95252] text-center mb-2 md:text-[14px] lg:text-[12px]">
              An unexpected error has occurred, please try again.
            </p>
            <div className="mt-[15%] flex w-[70%] mx-auto items-center gap-[5%] md:w-[60%] lg:my-[5%]">
              <button
                onClick={handleTransactionSuccessClose}
                className={`bg-[#04177f] w-[111px] flex justify-center items-center mx-auto cursor-pointer text-[12px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[16px] lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
              >
                Done
              </button>
              {/* <Link to="/Receipt"> */}
                <button
                  onClick={handleTransactionSuccessClose}
                  className={`border-[1px] w-[111px] border-[#04177f] flex justify-center items-center mx-auto cursor-pointer text-[12px] font-extrabold h-[40px] rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[16px] lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
                >
                  Receipt
                </button>
              {/* </Link> */}
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};
