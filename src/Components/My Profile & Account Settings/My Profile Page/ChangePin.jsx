import { React, useState, useEffect } from "react";
import { DashBoardLayout } from "../../Dashboard/Layout/DashBoardLayout";
import Email from "../ProfileImages/Email.svg";
import { Modal } from "../../Screens/Modal/Modal";
import styles from "../../../Components/Dashboard/DashboardComponents/TransferComponent/transfer.module.css";
import { useContext } from "react";
import { ContextProvider } from "../../Context";
import PopUpGreen from "../ProfileImages/PopUpGreen.svg";
import PopUpGreenTab from "../ProfileImages/PopUpGreenTab.svg";
import PopUpGreenDeskTop from "../ProfileImages/PopUpGreenDeskTop.svg";
import { Link } from "react-router-dom";
import OtpInput from "react-otp-input";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import Cancel from "../ProfileImages/Cancel.svg";
import ChangePassword from "./ChangePassword";
import Success from "../ProfileImages/success.gif"


const ChangePin = () => {
  const { toggleSideBar, isDarkMode } = useContext(ContextProvider);

  const [activeBtn, setActiveBtn] = useState([true, false, false]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [changePin, setChangePin] = useState(true);

  const handleClick = (index) => {
    setActiveBtn(activeBtn.map((_, i) => i === index));
    setActiveIndex(index);
    setChangePin(index === 0);
  };

  const handlePinInput = (value, setter) => {
    const numericValue = value.replace(/\D/g, "");
    const truncatedValue = numericValue.slice(0, 4);
    setter(truncatedValue);
  };

  const [newPin, setNewPin] = useState("");
  const [oldPin, setOldPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [update, setUpdate] = useState("");

  const handleUpdate = () => {
    if (newPin !== confirmPin) {
      setErrorMessage("PIN does not match...");
      document.getElementById("confirmPinInput").style.backgroundColor =
        "#FFD8D8";
    } else {
      setErrorMessage("");
      document.getElementById("confirmPinInput").style.backgroundColor = "";
      setUpdate(true);
    }
  };

  const [resetPin, setResetPin] = useState("");

  const {
    isVisible,
    toggleVisibility,
    inputPinHandler,
    inputPin,
    setInputPin,
  } = useContext(ContextProvider);

  const { emailId, setEmailId } = useContext(ContextProvider);
  const [emailInputColor, setEmailInputColor] = useState("");

  const [pin, setPin] = useState("");
  const [confirmResetPin, setConfirmResetPin] = useState("");
  const [resetPinErrorMessage, setResetPinErrorMessage] = useState("");
  const [resetPinUpdate, setResetPinUpdate] = useState("");
  const [verify, setVerify] = useState("");
  const [newResetPin, setNewResetPin] = useState("");

  const handleResetPinUpdate = (e) => {
    const isEmail = (input) => {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3,}$/i;
      return emailRegex.test(input);
    };

    if (isEmail(emailId)) {
      setResetPinErrorMessage("");
      setEmailInputColor("#2ED173");
      setResetPinUpdate(true);
      setCountdown(60);
    } else {
      setResetPinErrorMessage("Invalid email..");
      setEmailInputColor("#F95252");
      setResetPinUpdate(false);
    }
  };

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

  const [resetPin1, setResetPin1] = useState(false);
  const [createPin, setCreatePin] = useState("");
  const [confirmPinInputBgColor, setConfirmPinInputBgColor] = useState("");

  const handleCreatePin = () => {
    if (newResetPin !== confirmResetPin) {
      setResetPinErrorMessage("PIN does not match...");
      setConfirmPinInputBgColor("#FFD8D8");
    } else {
      setResetPinErrorMessage("");
      setConfirmPinInputBgColor("");
      setCreatePin(true);
    }
  };

  const [changePassword, setChangePassword] = useState("");

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
          <div className="flex items-center my-[10%] gap-[8px] md:my-[5%] md:text-[18px] lg:text-[px]">
            <p className="text-[#7c7c7c] text-[10px] leading-[130%] md:text-[14px] lg:text-[18px] 2xl:text-[28px]">
              Secure Your Account Privacy
            </p>
            <img
              src={Email}
              alt=""
              className="w-[12px] h-[12px] md:w-[14.083px] md:h-[14.083px] lg:w-[24px] lg:h-[24px]"
            />
          </div>

          <div className="text-[8px] flex gap-[2.5%] md:text-[18px] lg:text-[20px] justify-between md:justify-between md:gap-[5%]">
            <div
              onClick={() => {
                handleClick(0);
                setChangePin(true);
                setResetPin(false);
                setChangePassword(false);
                setResetPin1(false);
                setErrorMessage("");
                setResetPinErrorMessage("");
              }}
              className={`${
                activeBtn[0]
                  ? "bg-[#E2F3FF] rounded-[2px] border-b-[2px] border-b-[#04177f] h-[25px] flex items-center p-[5px] md:h-[35px] lg:rounded-[6px] lg:border-b-[4px] lg:h-[60px]"
                  : ""
              } cursor-pointer w-[144px] justify-center rounded-[2px] md:w-[180px] md:rounded-[3px] md:justify-center md:items-center flex lg:w-[248px] lg:rounded-[6px] 2xl:text-[24px]`}
            >
              Change PIN
            </div>
            <div
              onClick={() => {
                handleClick(1);
                setChangePin(false);
                setResetPin(true);
                setChangePassword(false);
                setErrorMessage("");
                setResetPinErrorMessage("");
                setConfirmResetPin("");
                setNewResetPin("");
              }}
              className={`${
                activeBtn[1]
                  ? "bg-[#E2F3FF] rounded-[2px] border-b-[2px] border-b-[#04177f] h-[25px] flex items-center p-[5px]  md:h-[35px] lg:rounded-[6px] lg:border-b-[4px] lg:h-[60px] lg:py-[40px]"
                  : ""
              }cursor-pointer w-[144px] justify-center rounded-[2px] md:w-[180px] md:rounded-[3px] md:justify-center md:items-center flex lg:w-[248px] lg:rounded-[6px] 2xl:text-[24px]`}
            >
              Reset PIN
            </div>

            <div
              onClick={() => {
                handleClick(2);
                setChangePin(false);
                setResetPin(false);
                setChangePassword(true);
                setResetPin1(false);
                setErrorMessage("");
                setResetPinErrorMessage("");
              }}
              className={`${
                activeBtn[2]
                  ? "bg-[#E2F3FF] rounded-[2px] border-b-[2px] border-b-[#04177f] h-[25px] flex items-center p-[5px]  md:h-[35px] lg:rounded-[6px] lg:border-b-[4px] lg:h-[60px] lg:py-[40px]"
                  : ""
              }cursor-pointer w-[144px] justify-center rounded-[2px] md:w-[180px] md:rounded-[3px] md:justify-center md:items-center flex lg:w-[248px] lg:rounded-[6px] 2xl:text-[24px]`}
            >
              Change Password
            </div>
          </div>
          <hr />

          {changePin && (
            <div>
              <div className="grid grid-cols-1 mt-[10px] md:grid-cols-2 gap-y-[10px] md:gap-x-[0px] lg:gap-x-[0px] md:gap-y-[0px] lg:gap-y-[25px] pb-[30px] lg:py-[30px] md:mt-[20px]">
                <div className="mt-[30px]">
                  <h2 className="text-[10px] text-[#7E7E7E] font-semibold md:text-[14px] lg:text-[18px]">
                    Old PIN{" "}
                  </h2>
                  <div className="relative mt-[5px] lg:mt-[15px]">
                    <input
                      type="number"
                      className="w-full md:w-[90%] lg:w-[80%] h-8 px-2 py-[10px] border-[1px] rounded-[2px] text-[10px] md:text-[14px] text-[#7E7E7E] lg:text-[18px] font-semibold focus:outline-none lg:h-[51px]"
                      placeholder=""
                      value={oldPin}
                      onChange={(event) =>
                        handlePinInput(event.target.value, setOldPin)
                      }
                    />
                  </div>
                </div>

                <div className="mt-[30px] md:ml-[-20px] lg:ml-[-50px]">
                  <h2 className="text-[10px] text-[#7E7E7E] font-semibold md:text-[14px] lg:text-[18px]">
                    New PIN{" "}
                  </h2>
                  <div className="relative mt-[5px] lg:mt-[15px]">
                    <input
                      type="number"
                      className="w-full md:w-[80%] text-[#7E7E7E] lg:w-[70%]  h-8 px-2 py-[10px] border-[1px] rounded-[2px] text-[10px] md:text-[14px] lg:text-[18px] font-semibold focus:outline-none lg:h-[51px]"
                      placeholder=""
                      value={newPin}
                      onChange={(event) =>
                        handlePinInput(event.target.value, setNewPin)
                      }
                    />
                  </div>
                </div>

                <div className="mt-[30px]">
                  <h2 className="text-[10px] text-[#7E7E7E] font-semibold md:text-[14px] lg:text-[18px]">
                    Confirm PIN{" "}
                  </h2>
                  <div className="relative mt-[5px] lg:mt-[15px]">
                    <input
                      id="confirmPinInput"
                      type="number"
                      className="w-full md:w-[90%] text-[#7E7E7E] lg:w-[80%] h-8 px-2 py-[10px] border-[1px] rounded-[2px] text-[10px] md:text-[14px] lg:text-[18px] font-semibold focus:outline-none lg:h-[51px]"
                      placeholder=""
                      value={confirmPin}
                      onChange={(event) =>
                        handlePinInput(event.target.value, setConfirmPin)
                      }
                    />
                  </div>

                  {errorMessage && (
                    <p className="text-red-500 text-start text-[10px] mt-[5px]">
                      {errorMessage}
                    </p>
                  )}
                </div>
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
            </div>
          )}

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
                  <img src={PopUpGreen} alt="" className="md:hidden rounded-tr-[10px]" />
                  <img
                    src={PopUpGreenTab}
                    alt=""
                    className="hidden md:block lg:hidden rounded-tr-[10px]"
                  />
                  <img
                    src={PopUpGreenDeskTop}
                    alt=""
                    className="hidden lg:block rounded-tr-[20px]"
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
                    You have successfully changed your transaction PIN.
                  </p>
                </div>

                <div>
                <img src={Success} alt="" className="absolute top-[25%] left-[32%] h-[50%] lg:left-[36.5%] md:top-[33%]"/>
              </div>

                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setUpdate(false);
                    setOldPin("");
                    setNewPin("");
                    setConfirmPin("");
                    handleClick(activeIndex);
                  }}
                  className={`my-[5%] bg-[#04177f] w-[90%] flex justify-center items-center mx-auto cursor-pointer text-[10px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[16px] lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
                >
                  Done
                </button>
              </div>
            </Modal>
          )}

          {resetPin && (
            <div
              className={`bg-[#FFF] relative lg:ml-[20px] 2xl:ml-0 ${
                isDarkMode
                  ? "bg-[#000] text-[#fff] border-[#fff]"
                  : "bg-[#ffffff] text-[#000] "
              } flex flex-col justify-between h-full`}
            >
              <section className="">
                <div className="mt-[30px]">
                  <h2 className="text-[10px] text-[#7E7E7E] font-semibold md:text-[14px] lg:text-[18px]">
                    New Email{" "}
                  </h2>
                  <div className="relative mt-[5px] lg:mt-[15px]">
                    <input
                      type="text"
                      className="w-full md:w-[45%] text-[#7E7E7E] lg:w-[40%] h-8 px-2 py-[10px] border-[1px] rounded-md text-[10px] md:text-[14px] lg:text-[18px] font-semibold focus:outline-none lg:h-[51px]"
                      placeholder=""
                      value={emailId}
                      style={{ borderColor: emailInputColor }}
                      onChange={(event) => {
                        setEmailId(event.target.value);
                        setEmailInputColor("");
                      }}
                    />
                  </div>

                  {resetPinErrorMessage && (
                    <p className="text-red-500 text-start text-[10px] mt-[5px]">
                      {resetPinErrorMessage}
                    </p>
                  )}
                </div>

                <div className="mt-[10%] md:mt-[5%]">
                  <h2 className="text-[10px] text-[#7E7E7E] font-semibold md:text-[14px] lg:text-[18px]">
                    Input PIN{" "}
                  </h2>
                  <div className="mt-[3%]">
                    <OtpInput
                      value={pin}
                      inputType="tel"
                      onChange={setPin}
                      numInputs={4}
                      shouldAutoFocus={true}
                      containerStyle="flex w-full justify-between md:justify-start md:gap-[30px] lg:gap-[50px]"
                      inputStyle={{
                        color: "#403f3f",
                        width: 40,
                        height: 40,
                        borderRadius: 3,
                        ...(window.innerWidth >= 768 &&
                          window.innerWidth < 1024 && {
                            width: "40px",
                            height: "40px",
                          }),
                        ...(window.innerWidth >= 1024 && {
                          width: "65px",
                          height: "65px",
                        }),

                        //   marginRight: "4px", 
                      }}
                      renderInput={(props) => (
                        <input
                          {...props}
                          className="inputOTP text-[10px] md:text-[14px] lg:text-[20px] text-[] mx-[3px]"
                        />
                      )}
                      isInputNum
                    />
                  </div>
                </div>

                <div className="py-[30px] lg:py-[60px]">
                  <button
                    className={`w-full md:w-fit text-white rounded-md px-[28px] text-[10px] md:px-[30px] md:py-[10px] md:text-[13px] md:font-[600] leading-[15px] lg:text-[16px] lg:px-[60px] lg:py-[15px] 2xl:text-[20px] 2xl:px-[50px] 2xl:py-[10px] lg:leading-[24px] py-[15px] bg-primary
                    `}
                    onClick={() => {
                      handleResetPinUpdate();
                    }}
                  >
                    Reset
                  </button>
                </div>
              </section>

              {resetPinUpdate && (
                <Modal>
                  <div
                    className={`confirm2 ${styles.inputPin} ${
                      toggleSideBar
                        ? "md:w-[45%] md:ml-[20%] lg:w-[40%] lg:ml-[20%]"
                        : "lg:w-[40%]"
                    } md:w-[55%] w-[90%] md:mb-[0%] md:mx-auto md:my-auto lg:mx-auto lg:my-auto`}
                  >
                    <img
                      onClick={() => setUpdate(false)}
                      className="absolute cursor-pointer right-2 w-[18px] h-[18px] my-[1%] md:w-[35px] md:h-[25px] lg:w-[45px] lg:h-[45px] "
                      src={Cancel}
                      alt=""
                    />

                    <hr className="h-[6px] bg-[#04177f] lg:mt-[10%] border-none mt-[8%] md:mt-[7%] md:h-[10px]" />
                    <p className="text-[10px] px-[20px] md:text-[14px] lg:text-[18px] font-extrabold text-center my-[5%] lg:my-[%]">
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
                              ...(window.innerWidth >= 768 &&
                                window.innerWidth < 1024 && {
                                  width: "40px",
                                  height: "40px",
                                }),
                              ...(window.innerWidth >= 1024 && {
                                width: "60px",
                                height: "60px",
                              }),
                            }}
                            renderInput={(props) => (
                              <input
                                {...props}
                                className="inputOTP text-[10px] md:text-[14px] lg:text-[20px] mx-[3px]"
                              />
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
                      <p className="flex justify-between w-[67%] md:w-[70%] lg:w-[70%] text-[8px] md:text-[12px] text-[#04177f]">
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
                        setResetPinUpdate(false);
                        inputPinHandler(e);
                        setVerify(true);
                      }}
                      disabled={inputPin.length !== 6}
                      className={`${
                        inputPin.length !== 6 ? "bg-[#0008]" : "bg-[#04177f]"
                      } my-[5%] w-[225px] flex justify-center items-center mx-auto cursor-pointer text-[10px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[16px] lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
                    >
                      Verify
                    </button>
                  </div>
                </Modal>
              )}

              {verify && (
                <Modal className="">
                  <div
                    className={`confirm2 ${styles.inputPin} ${
                      toggleSideBar
                        ? "md:w-[45%] md:ml-[20%] lg:w-[40%] lg:ml-[20%]"
                        : "lg:w-[40%]"
                    }relative md:w-[55%] w-[90%] flex flex-col justify-between md:mb-[0%] md:mx-auto md:my-auto lg:mx-auto lg:my-auto`}
                  >
                    <div className="absolute z-0 right-0" style={{ zIndex: 0 }}>
                      <img src={PopUpGreen} alt="" className="md:hidden rounded-tr-[10px]" />
                      <img
                        src={PopUpGreenTab}
                        alt=""
                        className="hidden md:block lg:hidden rounded-tr-[10px]"
                      />
                      <img
                        src={PopUpGreenDeskTop}
                        alt=""
                        className="hidden lg:block rounded-tr-[20px]"
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
                        Your transaction PIN has been reset successfully.
                      </p>
                    </div>

                    <div>
                <img src={Success} alt="" className="absolute top-[25%] left-[32%] h-[50%] lg:left-[36.5%]"/>
              </div>

                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setVerify(false);
                        setEmailId("");
                        setEmailInputColor("");
                        setPin("");
                        setResetPin(false);
                        setResetPin1(true);
                      }}
                      className={`my-[5%] bg-[#04177f] w-[90%] flex justify-center items-center mx-auto cursor-pointer text-[10px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[35%] md:rounded-[8px] md:text-[16px] lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
                    >
                      Create New PIN
                    </button>
                  </div>
                </Modal>
              )}
            </div>
          )}

          {resetPin1 && (
            <div
              className={`bg-[#FFF] relative lg:ml-[20px] 2xl:ml-0 ${
                isDarkMode
                  ? "bg-[#000] text-[#fff] border-[#fff]"
                  : "bg-[#ffffff] text-[#000] "
              } flex flex-col justify-between h-full`}
            >
              <section className="">
                <div className="mt-[30px]">
                  <h2 className="text-[10px] text-[#04177F] font-semibold md:text-[14px] lg:text-[18px] text-center md:text-start">
                    Create New Transaction PIN to Continue Operations!
                  </h2>
                </div>

                <div className="mt-[10%] lg:mt-[3%]">
                  <h2 className="text-[10px] text-[#7E7E7E] font-semibold md:text-[14px] lg:text-[18px]">
                    Input PIN{" "}
                  </h2>
                  <div className="mt-[3%]">
                    <OtpInput
                      value={newResetPin}
                      inputType="tel"
                      onChange={setNewResetPin}
                      numInputs={4}
                      shouldAutoFocus={true}
                      containerStyle="flex w-full justify-between md:justify-start md:gap-[30px] lg:gap-[50px]"
                      inputStyle={{
                        color: "#403f3f",
                        width: 40,
                        height: 40,
                        borderRadius: 3,
                        ...(window.innerWidth >= 768 &&
                          window.innerWidth < 1024 && {
                            width: "40px",
                            height: "40px",
                          }),
                        ...(window.innerWidth >= 1024 && {
                          width: "65px",
                          height: "65px",
                        }),
                        //   marginRight: "4px", 
                      }}
                      renderInput={(props) => (
                        <input
                          {...props}
                          className="inputOTP text-[10px] md:text-[14px] lg:text-[20px] mx-[3px]"
                        />
                      )}
                      isInputNum
                    />
                  </div>
                </div>

                <div className="mt-[10%] lg:mt-[5%]">
                  <h2 className="text-[10px] text-[#7E7E7E] font-semibold md:text-[14px] lg:text-[18px]">
                    Confirm PIN{" "}
                  </h2>
                  <div className="mt-[3%]">
                    <OtpInput
                      id="confirmResetPinInput"
                      value={confirmResetPin}
                      inputType="tel"
                      onChange={setConfirmResetPin}
                      numInputs={4}
                      shouldAutoFocus={true}
                      containerStyle="flex w-full justify-between md:justify-start md:gap-[30px] lg:gap-[50px]"
                      inputStyle={{
                        color: "#403f3f",
                        width: 40,
                        height: 40,
                        borderRadius: 3,
                        backgroundColor: confirmPinInputBgColor,
                        ...(window.innerWidth >= 768 &&
                          window.innerWidth < 1024 && {
                            width: "40px",
                            height: "40px",
                          }),
                        ...(window.innerWidth >= 1024 && {
                          width: "65px",
                          height: "65px",
                        }),
                        //   marginRight: "4px", 
                      }}
                      renderInput={(props) => (
                        <input
                          {...props}
                          className="inputOTP text-[10px] md:text-[14px] lg:text-[20px] mx-[3px]"
                        />
                      )}
                      isInputNum
                    />
                    {resetPinErrorMessage && (
                      <p className="text-red-500 text-start text-[10px] mt-[10px]">
                        {resetPinErrorMessage}
                      </p>
                    )}
                  </div>
                </div>

                <div className="py-[30px] lg:py-[60px]">
                  <button
                    className={`w-full md:w-fit text-white rounded-md px-[28px] text-[10px] md:px-[30px] md:py-[10px] md:text-[13px] md:font-[600] leading-[15px] lg:text-[16px] lg:px-[60px] lg:py-[15px] 2xl:text-[20px] 2xl:px-[50px] 2xl:py-[10px] lg:leading-[24px] py-[15px] bg-primary
        `}
                    onClick={() => {
                      handleCreatePin();
                    }}
                  >
                    Create
                  </button>
                </div>
              </section>
            </div>
          )}

          {createPin && (
            <Modal className="">
              <div
                className={`confirm2 ${styles.inputPin} ${
                  toggleSideBar
                    ? "md:w-[45%] md:ml-[20%] lg:w-[40%] lg:ml-[20%]"
                    : "lg:w-[40%]"
                }relative md:w-[55%] w-[90%] flex flex-col justify-between md:mb-[0%] md:mx-auto md:my-auto lg:mx-auto lg:my-auto`}
              >
                <div className="absolute z-0 right-0" style={{ zIndex: 0 }}>
                  <img src={PopUpGreen} alt="" className="md:hidden rounded-tr-[10px]" />
                  <img
                    src={PopUpGreenTab}
                    alt=""
                    className="hidden md:block lg:hidden rounded-tr-[10px]"
                  />
                  <img
                    src={PopUpGreenDeskTop}
                    alt=""
                    className="hidden lg:block rounded-tr-[20px]"
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
                    You have successfully changed your transaction PIN.
                  </p>
                </div>

                <div>
                <img src={Success} alt="" className="absolute top-[25%] left-[32%] h-[50%] lg:left-[36.5%] md:top-[33%]"/>
              </div>

                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setNewResetPin("");
                    setConfirmPin("");
                    setConfirmResetPin("");
                    setResetPin(true);
                    handleClick(activeIndex);
                    setCreatePin(false);
                    setResetPin1(false);
                  }}
                  className={`my-[5%] bg-[#04177f] w-[90%] flex justify-center items-center mx-auto cursor-pointer text-[10px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[16px] lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
                >
                  Done
                </button>
              </div>
            </Modal>
          )}

          {changePassword && <ChangePassword></ChangePassword>}
        </section>

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

export default ChangePin;
