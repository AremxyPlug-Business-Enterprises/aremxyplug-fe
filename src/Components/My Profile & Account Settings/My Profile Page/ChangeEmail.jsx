import React, { useState, useEffect } from "react";
import "../../../App.css";
import { DashBoardLayout } from "../../Dashboard/Layout/DashBoardLayout";
import ProfileHero from "../ProfileHero";
import Email from "../ProfileImages/Email.svg";
import { useContext } from "react";
import { ContextProvider } from "../../Context";
import { Link } from "react-router-dom";
import { Modal } from "../../Screens/Modal/Modal";
import styles from "../../../Components/Dashboard/DashboardComponents/TransferComponent/transfer.module.css";
import OtpInput from "react-otp-input";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import Cancel from "../ProfileImages/Cancel.svg";
import PopUpGreen from "../ProfileImages/PopUpGreen.svg";
import PopUpGreenTab from "../ProfileImages/PopUpGreenTab.svg";
import PopUpGreenDeskTop from "../ProfileImages/PopUpGreenDeskTop.svg";
import Success from "../ProfileImages/success.gif";

const ChangeEmail = () => {
  const { isDarkMode } = useContext(ContextProvider);
  const { emailId, setEmailId } = useContext(ContextProvider);

  const {
    toggleSideBar,
    inputPin,
    setInputPin,
    inputPinHandler,
    toggleVisibility,
    isVisible,
  } = useContext(ContextProvider);

  const [countdown, setCountdown] = useState(60);
  const [resendActive, setResendActive] = useState(false);

  useEffect(() => {
    let timer;

    const decrementCountdown = () => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    };

    timer = setInterval(() => {
      decrementCountdown();
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown]);

  const handleResendOTP = () => {
    setCountdown(60);
    setResendActive(false);
  };
  useEffect(() => {
    if (countdown === 0) {
      setResendActive(true);
    }
  }, [countdown]);

  const [update, setUpdate] = useState("");
  const [verify, setVerify] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [emailInputColor, setEmailInputColor] = useState("");

  const handleUpdate = (e) => {
    const isEmail = (input) => {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3,}$/i;
      return emailRegex.test(input);
    };

    if (isEmail(emailId)) {
      setErrorMessage("");
      setEmailInputColor("#2ED173");
      setUpdate(true);
      setCountdown(60);
    } else {
      setErrorMessage("Invalid email..");
      setEmailInputColor("#F95252");
      setUpdate(false);
    }
  };

  return (
    <DashBoardLayout>
      <div
        className={`bg-[#FFF] relative lg:ml-[20px] 2xl:ml-0 ${
          isDarkMode
            ? "bg-[#000] text-[#fff] border-[#fff]"
            : "bg-[#ffffff] text-[#000] "
        } flex flex-col justify-between h-full`}
      >
        <section>
          <ProfileHero></ProfileHero>

          {/* <Link to="/ChangePin"> */}
          <div className="flex items-center my-[10%] gap-[8px] md:my-[5%] md:text-[18px] lg:text-[px]">
            <p className="text-[#7c7c7c] text-[10px] leading-[130%] md:text-[14px] lg:text-[18px] 2xl:text-[28px]">
              Change Email
            </p>
            <img
              src={Email}
              alt=""
              className="w-[12px] h-[12px] md:w-[14.083px] md:h-[14.083px] lg:w-[24px] lg:h-[24px]"
            />
          </div>
          {/* </Link> */}

          <div>
            <p className="text-[#9C9C9C] text-[10px] md:text-[14px] lg:text-[18px] font-semibold">
              Kindly Input Your New Email
            </p>
          </div>

          <div className="mt-[30px]">
            <h2 className="text-[10px] text-[#7E7E7E] font-semibold md:text-[14px] lg:text-[18px]">
              New Email{" "}
            </h2>
            <div className="relative mt-[5px] lg:mt-[15px]">
              <input
                type="text"
                className="w-full md:w-[50%] lg:w-[40%] h-8 px-2 py-[20px] border-[1px] rounded-md text-[10px] md:text-[14px] lg:text-[18px] font-semibold focus:outline-none lg:h-[51px]"
                placeholder=""
                value={emailId}
                style={{ borderColor: emailInputColor }}
                onChange={(event) => {
                  setEmailId(event.target.value);
                  setEmailInputColor("");
                }}
              />
            </div>

            {errorMessage && (
              <p className="text-red-500 text-start text-[10px] mt-[5px]">
                {errorMessage}
              </p>
            )}
          </div>

          <div className="py-[30px] lg:py-[60px]">
            <button
              className={`w-full md:w-fit text-white rounded-md px-[28px] text-[10px] md:px-[30px] md:py-[10px] md:text-[13px] md:font-[600] leading-[15px] lg:text-[16px] lg:px-[60px] lg:py-[15px] 2xl:text-[20px] 2xl:px-[50px] 2xl:py-[10px] lg:leading-[24px] py-[15px] bg-primary
              `}
              onClick={handleUpdate}
            >
              Update
            </button>
          </div>
        </section>

        {update && (
          <Modal>
            <div
              className={` ${
                toggleSideBar ? "confirm02" : "confirm2"
              } bg-white md:mx-auto md:my-auto lg:mx-auto lg:my-auto rounded-[12px]`}
            >
              <img
                onClick={() => setUpdate(false)}
                className="absolute cursor-pointer right-2 w-[18px] h-[18px] my-[1%] md:w-[35px] md:h-[25px] lg:w-[45px] lg:h-[45px] "
                src={Cancel}
                alt=""
              />

              <hr className="h-[6px] bg-[#04177f] lg:mt-[10%] border-none mt-[8%] md:mt-[7%] md:h-[10px]" />
              <p className="md:mt-[15%] lg:mt-[10%] text-[10px] px-[20px] md:text-[14px] lg:text-[18px] font-extrabold text-center my-[5%] lg:my-[%]">
                Verification code has been sent to your email - {emailId}
              </p>
              <div className="flex flex-col gap-[10px] justify-center items-center font-extrabold mb-[7%]">
                <div className=" flex justify-center items-center ml-[5%] gap-[10px] md:ml-[5%] md:gap-[30px]">
                  {" "}
                  {isVisible ? (
                    <OtpInput
                      value={inputPin}
                      inputType="tel"
                      onChange={setInputPin}
                      numInputs={6}
                      shouldAutoFocus={true}
                      inputStyle={{
                        color: "#403f3f",
                        width: 30,
                        height: 30,
                        borderRadius: 3,
                      }}
                      renderInput={(props) => (
                        <input {...props} className="inputOTP mx-[3px]" />
                      )}
                    />
                  ) : (
                    <div className="text-[24px] md:text-[24px] mt-1">
                      * * * * * *{" "}
                    </div>
                  )}
                  <div
                    className="text-[#0003] text-xl md:text-3xl"
                    onClick={toggleVisibility}
                  >
                    {isVisible ? <AiFillEye /> : <AiFillEyeInvisible />}
                  </div>
                </div>
                <p className="flex justify-between w-[67%] md:w-[55%] lg:w-[45%] text-[8px] md:text-[12px] text-[#04177f]">
                  <p>{countdown > 0 ? `${countdown}sec` : "0sec"}</p>
                  <p
                    onClick={() => {
                      if (resendActive) {
                        handleResendOTP();
                      }
                    }}
                    style={{
                      cursor: resendActive ? "pointer" : "not-allowed",
                      color: resendActive ? "#04177f" : "#808080",
                    }}
                  >
                    Resend OTP
                  </p>
                </p>
              </div>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  setUpdate(false);
                  inputPinHandler(e);
                  setVerify(true);
                }}
                disabled={inputPin.length !== 6}
                className={`${
                  inputPin.length !== 6 ? "bg-[#0008]" : "bg-[#04177f]"
                } my-[5%] w-[225px] flex justify-center items-center mx-auto cursor-pointer text-[10px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[40%] md:rounded-[8px] md:text-[16px] lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
              >
                Verify
              </button>
            </div>
          </Modal>
        )}

        {verify && (
          <Modal className="">
            <div
              className={` ${
                toggleSideBar ? "confirm02" : "confirm2"
              } bg-white flex flex-col justify-between items-center pb-[10px] md:pb-[30px] lg:pb-[30px] md:mx-auto md:my-auto lg:mx-auto lg:my-auto rounded-[12px]`}
            >
              <div className="absolute z-0 right-0" style={{ zIndex: 0 }}>
                <img
                  src={PopUpGreen}
                  alt=""
                  className="md:hidden rounded-tr-[10px]"
                />
                <img
                  src={PopUpGreenTab}
                  alt=""
                  className="hidden md:block rounded-tr-[10px]"
                />
                <img
                  src={PopUpGreenDeskTop}
                  alt=""
                  className="hidden rounded-tr-[20px]"
                />
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
                  Your New Email has been updated successfully.
                </p>
              </div>

              <img src={Success} alt="" className="h-[50%] md:h-[40%]" />

              <button
                onClick={(e) => {
                  e.preventDefault();
                  setVerify(false);
                  setEmailId("");
                  setEmailInputColor("");
                }}
                className={`my-[%] mt-0  bg-[#04177f] w-[90%] flex justify-center items-center mx-auto cursor-pointer text-[10px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[40%] md:rounded-[8px] md:text-[16px] lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
              >
                Done
              </button>
            </div>
          </Modal>
        )}

        <div
          className={`${
            isDarkMode ? "" : ""
          } flex gap-[15px] justify-center items-center mt-[100%] pb-[25%] md:pb-[12%] md:mt-[40%] lg:mt-[40%] lg:pb-0`}
        >
          <div className="text-[10px] md:text-[12px] lg:text-[14px]">
            You need help ?
          </div>
          <Link to="/ContactUs">
            <div
              className={`${
                isDarkMode ? "border" : "bg-[#04177f]"
              } text-[10px] p-1 text-white rounded-[8px] lg:text-[18px]`}
            >
              Contact Us
            </div>
          </Link>
        </div>
      </div>
    </DashBoardLayout>
  );
};

export default ChangeEmail;
