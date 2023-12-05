import { React, useState } from "react"
import { DashBoardLayout } from "../../Layout/DashBoardLayout";
import "./CardPayment.css";
import { useContext } from "react";
import { ContextProvider } from "../../../Context";
import FundWithCardSvg from "./CardPaymentImages/FundWithCard.svg";
import airtimestyles from "../../../AirTimePage/AirtimeVtu.module.css";
import ArrowDown from "./CardPaymentImages/ArrowDown.svg";
import Search from "./CardPaymentImages/search.svg";
import FundAmount from "./CardPaymentImages/FundAmount.svg"
import { Modal } from "../../../Screens/Modal/Modal";
import Cancel from "./CardPaymentImages/Cancel.svg"
import styles from "../../../Dashboard/DashboardComponents/TransferComponent/transfer.module.css";
import OtpInput from "react-otp-input";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import Logo from "./CardPaymentImages/AremxyLogo.svg"
import Success from "./CardPaymentImages/Tick.png"
import { Link } from "react-router-dom";



const FundWithCard = () => {

    const { isDarkMode, toggleSideBar, toggleVisibility, isVisible, inputPin, setInputPin, inputPinHandler } = useContext(ContextProvider);
    const [showPayment, setShowPayment] = useState(false);
  const { walletName, setWalletName } = useContext(ContextProvider);
  const [paymentSelected, setPaymentSelected] = useState("");
  const [showCard, setShowCard] = useState(false);
  const [cardSelected, setCardSelected] = useState("");
  const { cardName, setCardName } = useContext(ContextProvider);
  const [amount, setAmount] = useState("")
  const [proceed, setProceed] = useState("")
  const [confirm, setConfirm] = useState("")
  const [Successful, setSuccessful] = useState("")

  const handleShowPayment = () => {
    setShowPayment(!showPayment);
    setWalletName("");
    setPaymentSelected(false);
  };

  const handleSelectPayment = (code) => {
    setWalletName(code);
    setShowPayment(false);
    setPaymentSelected(true);
  };

  const countryList = [
    {
      id: 1,
      name: "Nigeria",
      code: "NGN",
      flag: require("./CardPaymentImages/ng.svg").default,
      amount: 50000,
    },
    {
      id: 2,
      name: "United States",
      code: "USD",
      flag: require("./CardPaymentImages/us.svg").default,
      amount: 0,
    },
    {
      id: 3,
      name: "United Kingdom",
      code: "GBP",
      flag: require("./CardPaymentImages/gb.svg").default,
      amount: 0,
    },
    {
      id: 4,
      name: "European Union",
      code: "EUR",
      flag: require("./CardPaymentImages/eu.svg").default,
      amount: 0,
    },
    {
      id: 5,
      name: "Australia",
      code: "AUD",
      flag: require("./CardPaymentImages/au.svg").default,
      amount: 0,
    },
    {
      id: 6,
      name: "Kenya",
      code: "KSH",
      flag: require("./CardPaymentImages/ke.svg").default,
      amount: 0,
    },
  ];

  const Payment = ({ code, flag, onClick }) => {
    return (
      <li className={airtimestyles.netList} onClick={onClick}>
        <div className={airtimestyles.netImage}>
          <img src={flag} alt="" className={airtimestyles.NoImage} />
        </div>
        <h2 className={airtimestyles.netName}>{code}</h2>
      </li>
    );
  };
  


  const handleShowCard = () => {
    setShowCard(!showPayment);
    setCardName("");
    setCardSelected(false);
  };

  const handleSelectCard = (code) => {
    setCardName(code);
    setShowCard(false);
    setCardSelected(true);
  };



  const cardList = [
    {
      id: 1,
      code: "SPORTA",
      flag: require("./CardPaymentImages/BankLogo.svg").default,
    },
    {
      id: 2,
      code: "SPORTA",
      flag: require("./CardPaymentImages/BankLogo.svg").default,
    },
    {
      id: 3,
      code: "SPORTA",
      flag: require("./CardPaymentImages/BankLogo.svg").default,
    },
    {
      id: 4,
      code: "SPORTA",
      flag: require("./CardPaymentImages/BankLogo.svg").default,
    },
    {
      id: 5,
      code: "SPORTA",
      flag: require("./CardPaymentImages/BankLogo.svg").default,
    },
    {
      id: 6,
      code: "SPORTA",
      flag: require("./CardPaymentImages/BankLogo.svg").default,
    },
  ];

  const Card = ({ code, flag, onClick }) => {
    return (
      <li className={airtimestyles.netList} onClick={onClick}>
        <div className={airtimestyles.netImage}>
          <img src={flag} alt="" className={airtimestyles.NoImage} />
        </div>
        <h2 className={airtimestyles.netName}>{code}</h2>
      </li>
    );
  };







  const handleAmount = (e) => {
    const value = e.target.value;

    const numericValue = value.replace(/\D/g, "").slice(0, 11);

    setAmount(numericValue);
  }



  const handleProceed = () => {
    setProceed(true)
  }




  const handleConfirm = () => {
    setProceed(false);
    setConfirm(true);
  };


  
  const handleSuccessful = () => {
    setSuccessful(true);
  }








    return (
        <DashBoardLayout>
        <div
          className={`bg-[#FFF] relative lg:ml-[20px] 2xl:ml-0 ${
            isDarkMode
              ? "bg-[#000] text-[#fff] border-[#fff]"
              : "bg-[#ffffff] text-[#000] "
          } flex flex-col justify-between h-full`}
        >
          <section
            className={`md:px-[0px] ${
              isDarkMode
                ? "bg-[#000] text-[#fff] border-[#fff]"
                : "bg-[#ffffff] text-[#000] "
            }`}
          >
            <div
              id="AddNewCard"
              className="w-full h-[90px] md:h-[112.29px] lg:h-[196px] md:rounded-[11.5px] rounded-[7px] md:mt-[-1px] px-[10px] lg:ml-[-20px] lg:w-[102%] 2xl:w-full 2xl:ml-0 lg:gap-[50px] pt-[10px] lg:px-[30px] lg:rounded-[20px] lg:py-[20px] pb-[16px] flex justify-between items-center"
            >
              <div className="w-[100%] pt-[19px] lg:pt-[20px] pl-[8.5px] md:pl-[9px]">
                <p className="text-[10px] mb-2 font-bold uppercase w-[110%] md:text-[14px] md:w-[70%] lg:w-[70%] lg:text-[20px] 2xl:w-[80%] 2xl:text-[24px] lg:mb-4">
                  ADD NEW CARD.
                </p>
                <p className="text-[7px] font-[400] leading-[9px] mb-3 md:text-[10px] md:leading-[12.2px] w-[90%] md:w-[65%] lg:w-[75%] 2xl:w-[85%] 2xl:mt-[5px] lg:mt-[20px] lg:text-[16px] lg:leading-[26px] 2xl:text-[20px] lg:mb-[20px]">
                  Bind your bank card to add money to your wallet almost
                  instantly.
                </p>
              </div>
  
              <div className="w-[91px] h-[66px] lg:w-[199px] lg:h-[199px] lg:mt-[40px]">
                <img
                  src={FundWithCardSvg}
                  alt=""
                  className="w-[55.482px] h-full md:w-[98px] md:h-[px] lg:w-[166.447px] lg:h-[150px]"
                />
              </div>
            </div>

            <div>
            <div
              onClick={() => {
                handleShowPayment();
              }}
            >
              <div className="flex justify-between items-center border w-[50%] h-8 px-2 rounded-md text-[10px] font-[600] focus:outline-none lg:h-[51px] lg:text-[16px] mt-[10%]">
                {paymentSelected ? (
                  <li
                    onClick={() => {
                      handleShowPayment();
                    }}
                    className={`flex flex-row justify-between w-full`}
                  >

                    <h2 className="text-[#7C7C7C]">{walletName}</h2>
                    <img src={ArrowDown} alt="" className="" />
                  </li>
                ) : (
                  <h2
                    onClick={() => {
                      handleShowPayment();
                    }}
                    className="text-[10px] md:text-[12px] lg:text-[14px] text-[#929292]"
                  >
                    Select currency
                  </h2>
                )}
                {paymentSelected ? (
                  <button
                    className="rounded-full w-[12.02px] h-[12.02px] flex items-center justify-center text-[6px] overflow-hidden md:w-[12.02px] lg:w-[25px] md:h-[12.02px] lg:h-[25px]"
                    onClick={handleShowPayment}
                  ></button>
                ) : (
                  <button
                    className="lg:w-6 lg:h-6 h-[11px] w-[11px]"
                    onClick={handleShowPayment}
                  >
                    <img src={ArrowDown} alt="" className="w-full h-full" />
                  </button>
                )}
              </div>
            </div>
            {showPayment && (
              <div
                className={`border md:rounded-[10px] lg:mt-2 rounded-[4px] absolute ${
                  toggleSideBar
                    ? "w-[50%] md:w-[44.5%] lg:w-[45%] 2xl:w-[46%]"
                    : "w-[50%] md:w-[46%] 2xl:w-[46.5%]"
                } bg-[#FFF] z-[100]`}
              >
                <div className="flex flex-row justify-between px-[10px] py-[7px]">
                  <p className="text-[10px] text-[#7C7C7C]">Search</p>
                  <img src={Search} alt="" />
                </div>
                <hr />
                {countryList.map((country) => (
                  <Payment
                    key={country.id}
                    flag={country.flag}
                    code={country.code}
                    amount={country.amount}
                    onClick={() =>
                      handleSelectPayment(
                        country.code,
                        country.flag,
                        country.amount
                      )
                    }
                  />
                ))}
              </div>
            )}
          </div>


          <div>
            <div
              onClick={() => {
                handleShowCard();
              }}
            >
              <div className="flex justify-between items-center border w-full h-8 px-2 rounded-md text-[10px] font-[600] focus:outline-none lg:h-[51px] lg:text-[16px] mt-[10%]">
                {cardSelected ? (
                  <li
                    onClick={() => {
                        handleShowCard();
                    }}
                    className={`flex flex-row justify-between w-full`}
                  >
                    <div className="flex items-center">
                    <img src={cardList[0].flag} alt="" />
                    <h2 className="text-[#7C7C7C]">{cardName}</h2>
                    </div>
                    <img src={ArrowDown} alt="" className="" />
                  </li>
                ) : (
                  <h2
                    onClick={() => {
                        handleShowCard();
                    }}
                    className="text-[10px] md:text-[12px] lg:text-[14px] text-[#929292]"
                  >
                    Select Card
                  </h2>
                )}
                {cardSelected ? (
                  <button
                    className="rounded-full w-[12.02px] h-[12.02px] flex items-center justify-center text-[6px] overflow-hidden md:w-[12.02px] lg:w-[25px] md:h-[12.02px] lg:h-[25px]"
                    onClick={handleShowCard}
                  ></button>
                ) : (
                  <button
                    className="lg:w-6 lg:h-6 h-[11px] w-[11px]"
                    onClick={handleShowCard}
                  >
                    <img src={ArrowDown} alt="" className="w-full h-full" />
                  </button>
                )}
              </div>
            </div>
            {showCard && (
              <div
                className={`border md:rounded-[10px] lg:mt-2 rounded-[4px] absolute ${
                  toggleSideBar
                    ? "w-[50%] md:w-[44.5%] lg:w-[45%] 2xl:w-[46%]"
                    : "w-[50%] md:w-[46%] 2xl:w-[46.5%]"
                } bg-[#FFF] z-[100]`}
              >
                <div className="flex flex-row justify-between px-[10px] py-[7px]">
                  <p className="text-[10px] text-[#7C7C7C]">Search</p>
                  <img src={Search} alt="" />
                </div>
                <hr />
                {cardList.map((card) => (
                  <Card
                    key={card.id}
                    flag={card.flag}
                    code={card.code}
                    onClick={() =>
                      handleSelectCard(
                        card.code,
                        card.flag,
                      )
                    }
                  />
                ))}
              </div>
            )}
          </div>

          <div className="border-[1px] w-full mt-[5%] rounded-[5px] flex justify-between py-[5px] px-[10px]">
            <input type="number" className="outline-none relative text-[14px] pl-[4%]" value={amount} placeholder="10,000" onChange={handleAmount}/>
            <div className="absolute text-[14px]">₦</div>
            <img src={FundAmount} alt="" />
          </div>


          <div className="py-[30px] lg:py-[60px] mt-10">
            <button
              className={`w-full md:w-fit text-white rounded-md px-[28px] text-[10px] md:px-[30px] md:py-[10px] md:text-[13px] md:font-[600] leading-[15px] lg:text-[16px] lg:px-[60px] lg:py-[15px] 2xl:text-[20px] 2xl:px-[50px] 2xl:py-[10px] lg:leading-[24px] py-[15px] ${
                !paymentSelected ||
                !cardSelected ||
                !amount
                  ? "bg-[#63616188] cursor-not-allowed"
                  : "bg-primary"
              }`}
              onClick={handleProceed}
              disabled={
                !paymentSelected ||
                !cardSelected ||
                !amount
              }
            >
              Proceed
            </button>
          </div>


          { proceed && (
            <Modal>
            <div
              className={`confirm mx-[5%] ${
                isDarkMode ? "border bg-[#000]" : "bg-[#fff]"
              } ${
                toggleSideBar
                  ? "md:w-[40%] md:ml-[20%] lg:w-[40%] lg:ml-[20%]"
                  : "lg:w-[40%]"
              } lg:ml-[10%] lg:mr-[10%] grow pt-[10px] md:mt-[1%] mb-0 pb-[20px] rounded-tr-[8px] rounded-tl-[8px] relative md:rounded-[11.5px] md:mx-auto md:my-auto md:mb-[18%] md:overflow-auto`}
            >
              <div className="w-full flex justify-end border-b-[8px] border-primary px-[12px] md:h-[25px] lg:border-b-[10px] lg:mt-[20px]">
                <img
                  src={Cancel}
                  alt=""
                  onClick={() => {
                    setProceed(false);
                    setAmount("");
                    setCardSelected("");
                    setPaymentSelected("");
                  }}
                  className="h-[30px] md:h-[120%] lg:h-[400%] lg:mt-[-25px] lg:pb-[20px]"
                />
              </div>

              <div>
                <h2 className="lg:text-[16px] lg:leading-[24px] text-center mb-1 text-[14px] md:text-[13px] font-[600] mt-[20px] leading-[12px]">
                  Confirm Transaction
                </h2>
                

                <div className="flex flex-col gap-[25px] px-[20px] mt-[50px] md:gap-[25px]">
                  
                  <div className="flex items-center justify-between">
                    <h2 className="text-[#7C7C7C] text-[12px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                    Amount to Fund
                    </h2>
                    <div className="flex gap-1">
                      <h2 className="text-[12px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                        ₦{amount}.00
                      </h2>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <h2 className="text-[#7C7C7C] text-[12px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                    Funding Fee 1.5%
                    </h2>
                    <div className="flex gap-1">
                      <h2 className="text-[12px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                      ₦{(amount * 0.015).toFixed(2)}
                      </h2>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <h2 className="text-[#7C7C7C] text-[12px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                    Vat Fee
                    </h2>
                    <div className="flex gap-1">
                      <h2 className="text-[12px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                      ₦{(amount * 0.005).toFixed(2)}
                      </h2>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <h2 className="text-[#7C7C7C] text-[12px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                    Amount to Recieve
                    </h2>
                    <div className="flex gap-1">
                      <h2 className="text-[12px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                      ₦{(amount - (amount * 0.015) - (amount * 0.005)).toFixed(2)}
                      </h2>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <h2 className="text-[#7C7C7C] text-[12px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                    Points Earned
                    </h2>
                    <div className="flex gap-1">
                      <h2 className="text-[12px] text-[#00AA48] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                      +2.00
                      </h2>
                    </div>
                  </div>

                  <div className="flex items-center justify-center mt-[50%]">
                    <button
                      className="w-full md:w-fit bg-primary text-white rounded-md px-[28px] text-[10px] md:text-[12px] leading-[15px] lg:text-[16px] lg:leading-[24px] py-[15px] md:py-[10px]"
                      onClick={() => {
                        handleConfirm();
                      }}
                    >
                      Confirmed
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
          )}


{confirm && (
            <Modal>
              <div
                className={`confirm2 ${styles.inputPin} ${
                  toggleSideBar
                    ? "md:w-[45%] md:ml-[20%] lg:w-[40%] lg:ml-[20%]"
                    : "lg:w-[40%]"
                } md:w-[55%] w-[90%] md:mb-[0%] md:mx-auto md:my-auto lg:mx-auto lg:my-auto`}
              >
                <img
                  onClick={() => setConfirm(false)}
                  className="absolute cursor-pointer right-2 w-[18px] h-[18px] my-[1%] md:w-[35px] md:h-[25px] lg:w-[45px] lg:h-[45px] "
                  src={Cancel}
                  alt=""
                />

                <hr className="h-[6px] bg-[#04177f] lg:mt-[10%] border-none mt-[8%] md:mt-[6%] md:h-[10px]" />
                <p className="text-[10px] md:text-[16px] lg:text-[18px] font-extrabold text-center my-[8%] lg:my-[%]">
                  Input PIN to complete transaction
                </p>
                <div className="flex flex-col gap-[10px] justify-center items-center font-extrabold mb-[7%]">
                  <div className=" flex justify-center items-center ml-[5%] gap-[10px] md:ml-[5%] md:gap-[30px]">
                    {" "}
                    {isVisible ? (
                      <OtpInput
                        value={inputPin}
                        inputType="tel"
                        onChange={setInputPin}
                        numInputs={4}
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
                        * * * *{" "}
                      </div>
                    )}
                    <div
                      className="text-[#0003] text-xl md:text-3xl"
                      onClick={toggleVisibility}
                    >
                      {isVisible ? <AiFillEye /> : <AiFillEyeInvisible />}
                    </div>
                  </div>
                  <p className="text-[8px] md:text-[12px] text-[#04177f]">
                    Forgot Pin ?
                  </p>
                </div>

                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setConfirm(false);
                    inputPinHandler(e);
                    handleSuccessful()
                  }}
                  disabled={inputPin.length !== 4}
                  className={`${
                    inputPin.length !== 4 ? "bg-[#0008]" : "bg-[#04177f]"
                  } my-[5%] w-[225px] flex justify-center items-center mx-auto cursor-pointer text-[10px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[16px] lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
                >
                  Purchase
                </button>
              </div>
            </Modal>
          )}


          {Successful &&(
            <Modal>
            <div
              className={`confirm mx-[5%] ${
                isDarkMode ? "border bg-[#000]" : "bg-[#fff]"
              } ${
                toggleSideBar
                  ? "md:w-[40%] md:ml-[20%] lg:w-[40%] lg:ml-[20%]"
                  : "lg:w-[40%]"
              } lg:ml-[10%] lg:mr-[10%] grow pt-[10px] md:mt-[1%] mb-0 pb-[20px] rounded-tr-[8px] rounded-tl-[8px] relative md:rounded-[11.5px] md:mx-auto md:my-auto md:mb-[18%] md:overflow-auto`}
            >


              <div className="w-full flex justify-between border-b-[8px] border-primary px-[12px] md:h-[25px] lg:border-b-[10px] lg:mt-[20px]">

                <img src={Logo} alt="" />
                <img
                  src={Cancel}
                  alt=""
                  onClick={() => {
                    setProceed(false);
                    setAmount("");
                    setCardSelected("");
                    setPaymentSelected("");
                  }}
                  className="h-[30px] md:h-[120%] lg:h-[400%] lg:mt-[-25px] lg:pb-[20px]"
                />
              </div>

              <div>
                <h2 className="lg:text-[16px] lg:leading-[24px] text-center mb-1 text-[14px] md:text-[13px] font-[600] mt-[20px] leading-[12px]">
                Transaction Successful
                </h2>

                <div className="flex flex-col justify-center items-center">
                  <img src={Success} alt="" className=""/>
                  <p className="text-[10px] text-[#2ED173] font-semibold">Your NGN Wallet has been Credited Successfully With</p>
                </div>
                

                <div className="flex flex-col gap-[25px] px-[20px] mt-[50px] md:gap-[25px]">
                  
                  <div className="flex items-center justify-between">
                    <h2 className="text-[#7C7C7C] text-[12px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                    Amount
                    </h2>
                    <div className="flex gap-1">
                      <h2 className="text-[12px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                        ₦{amount}.00
                      </h2>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <h2 className="text-[#7C7C7C] text-[12px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                    Funding Fee 1.5%
                    </h2>
                    <div className="flex gap-1">
                      <h2 className="text-[12px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                      ₦{(amount * 0.015).toFixed(2)}
                      </h2>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <h2 className="text-[#7C7C7C] text-[12px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                    Vat Fee
                    </h2>
                    <div className="flex gap-1">
                      <h2 className="text-[12px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                      ₦{(amount * 0.005).toFixed(2)}
                      </h2>
                    </div>
                  </div>

                  {/* <div className="flex items-center justify-between">
                    <h2 className="text-[#7C7C7C] text-[12px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                    Amount to Recieve
                    </h2>
                    <div className="flex gap-1">
                      <h2 className="text-[12px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                      ₦{(amount - (amount * 0.015) - (amount * 0.005)).toFixed(2)}
                      </h2>
                    </div>
                  </div> */}

                  {/* <div className="flex items-center justify-between">
                    <h2 className="text-[#7C7C7C] text-[12px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                    Points Earned
                    </h2>
                    <div className="flex gap-1">
                      <h2 className="text-[12px] text-[#00AA48] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                      +2.00
                      </h2>
                    </div>
                  </div> */}

<div className="flex w-full justify-center mx-auto px-[50px] items-center gap-[5%] md:gap-[10%] mt-[50%] md:w-[50%] lg:gap-[10%] lg:mx-auto  lg:my-[5%] md:mt-[40px]">
                  {/* <Link to="/MtnDataTopUpBundle"> */}
                    <button
                      onClick={() => {
                        setSuccessful(false);
                        window.location.reload();
                      }}
                      className={`bg-[#04177f] w-[111px] flex justify-center items-center mx-auto cursor-pointer text-[10px] font-[600] h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[12px] lg:w-[163px] lg:h-[38px] lg:my-[2%] md:px-[60px] md:h-[30px]`}
                    >
                      Done
                    </button>
                  {/* </Link> */}

                  <Link to="/CardPaymentReceipt">
                    <button
                      // onClick={handleReceipt}
                      className={`border-[1px] w-[100px] border-[#04177f] flex justify-center items-center mx-auto cursor-pointer text-[10px] font-[600] h-[40px] rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[12px] lg:w-[163px] lg:h-[38px] lg:my-[2%] md:px-[60px] md:h-[30px]`}
                    >
                      Receipt
                    </button>
                  </Link>
                </div>
                </div>
              </div>
            </div>
          </Modal>
          )}






            </section>
            </div>
            </DashBoardLayout>

    )
}

export default FundWithCard;