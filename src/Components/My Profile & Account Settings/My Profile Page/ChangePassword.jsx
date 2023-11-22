import React, { useState } from "react";
import { useContext } from "react";
import { ContextProvider } from "../../Context";
import PopUpGreen from "../ProfileImages/PopUpGreen.svg";
import PopUpGreenTab from "../ProfileImages/PopUpGreenTab.svg";
import PopUpGreenDeskTop from "../ProfileImages/PopUpGreenDeskTop.svg";
import { Modal } from "../../Screens/Modal/Modal";
import styles from "../../../Components/Dashboard/DashboardComponents/TransferComponent/transfer.module.css";

const ChangePassword = () => {
  const { toggleSideBar } = useContext(ContextProvider);

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [update, setUpdate] = useState("");

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleUpdate = () => {
    if (newPassword !== confirmPassword) {
      setErrorMessage("Password Does Not Match!");
      document.getElementById("confirmPinInput").style.backgroundColor =
        "#FFD8D8";
    } else if (!validatePassword(newPassword)) {
      setErrorMessage(
        "Password must have at least one alphabetical character, at least one digit, contain at least one special character (e.g., !@#$%^&*), and have a minimum length of 8 characters."
      );
      document.getElementById("confirmPinInput").style.backgroundColor =
        "#FFD8D8";
    } else {
      setErrorMessage("");
      document.getElementById("confirmPinInput").style.backgroundColor = "";
      setUpdate(true);
    }
  };

  return (
    <div>
      <div>
        <div className="grid grid-cols-1 mt-[10px] md:grid-cols-2 gap-y-[10px] md:gap-x-[0px] lg:gap-x-[0px] md:gap-y-[0px] lg:gap-y-[25px] pb-[30px] lg:py-[30px] md:mt-[20px]">
          <div className="mt-[30px]">
            <h2 className="text-[10px] text-[#7E7E7E] font-semibold md:text-[14px] lg:text-[18px]">
              Old Password{" "}
            </h2>
            <div className="relative mt-[5px] lg:mt-[15px]">
              <input
                type="text"
                className="w-full md:w-[90%] lg:w-[80%] h-8 px-2 py-[10px] border-[1px] rounded-[2px] text-[10px] md:text-[14px] text-[#7E7E7E] lg:text-[18px] font-semibold focus:outline-none lg:h-[51px]"
                placeholder=""
                value={oldPassword}
                onChange={(event) => setOldPassword(event.target.value)}
              />
            </div>
          </div>

          <div className="mt-[30px] md:ml-[-20px] lg:ml-[-50px]">
            <h2 className="text-[10px] text-[#7E7E7E] font-semibold md:text-[14px] lg:text-[18px]">
              New Password{" "}
            </h2>
            <div className="relative mt-[5px] lg:mt-[15px]">
              <input
                type="text"
                className="w-full md:w-[80%] text-[#7E7E7E] lg:w-[70%]  h-8 px-2 py-[10px] border-[1px] rounded-[2px] text-[10px] md:text-[14px] lg:text-[18px] font-semibold focus:outline-none lg:h-[51px]"
                placeholder=""
                value={newPassword}
                onChange={(event) => setNewPassword(event.target.value)}
              />
            </div>
          </div>

          <div className="mt-[30px]">
            <h2 className="text-[10px] text-[#7E7E7E] font-semibold md:text-[14px] lg:text-[18px]">
              Confirm Password{" "}
            </h2>
            <div className="relative mt-[5px] lg:mt-[15px]">
              <input
                id="confirmPinInput"
                type="text"
                className="w-full md:w-[90%] text-[#7E7E7E] lg:w-[80%] h-8 px-2 py-[10px] border-[1px] rounded-[2px] text-[10px] md:text-[14px] lg:text-[18px] font-semibold focus:outline-none lg:h-[51px]"
                placeholder=""
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
              />
            </div>

            <div>
              <p className="text-[10px] font-semibold text-[#04177F] md:text-[14px] lg:text-[18px] text-start mt-[5%]">
                Forgot Password?
              </p>
            </div>

            {errorMessage && (
              <p className="text-red-500 text-start font-semibold text-[10px] mt-[5px] md:mt-[10px] md:text-[12px] lg:text-[14px] md:w-[70%] lg:w-[50%]">
                {errorMessage}
              </p>
            )}
          </div>
        </div>

        <div className="py-[10px] lg:py-[30px]">
          <button
            className={`w-full md:w-fit text-white rounded-md px-[28px] text-[10px] md:px-[30px] md:py-[10px] md:text-[13px] md:font-[600] leading-[15px] lg:text-[16px] lg:px-[60px] lg:py-[15px] 2xl:text-[20px] 2xl:px-[50px] 2xl:py-[10px] lg:leading-[24px] py-[15px] bg-primary
              `}
            onClick={handleUpdate}
          >
            Update
          </button>
        </div>
      </div>

      {update && (
        <Modal className="">
          <div
            className={`confirm2 ${styles.inputPin} ${
              toggleSideBar
                ? "md:w-[45%] md:ml-[20%] lg:w-[40%] lg:ml-[20%]"
                : "lg:w-[40%]"
            }relative md:w-[55%] w-[90%] flex flex-col justify-between md:mb-[0%] md:mx-auto md:my-auto lg:mx-auto lg:my-auto`}
          >
            <div className="absolute z-0 right-0" style={{ zIndex: 0 }}>
              <img src={PopUpGreen} alt="" className="md:hidden" />
              <img
                src={PopUpGreenTab}
                alt=""
                className="hidden md:block lg:hidden"
              />
              <img src={PopUpGreenDeskTop} alt="" className="hidden lg:block" />
            </div>

            <div className="relative z-10">
              <p
                className={`text-[10px] px-[20px] md:text-[16px] lg:text-[18px] font-semibold text-center mt-[8%] lg:mt-[3%] z-[1000] ${styles.overlayText}`}
              >
                Successful
              </p>

              <p
                className={`text-[10px] px-[20px] md:text-[16px] lg:text-[18px] font-semibold text-center mt-[4%] lg:my-[%] z-[1000] ${styles.overlayText}`}
              >
                You have successfully changed your Password.
              </p>
            </div>

            <button
              onClick={(e) => {
                e.preventDefault();
                setUpdate(false);
                setOldPassword("");
                setNewPassword("");
                setConfirmPassword("");
              }}
              className={`my-[5%] bg-[#04177f] w-[90%] flex justify-center items-center mx-auto cursor-pointer text-[10px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[16px] lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
            >
              Done
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ChangePassword;
