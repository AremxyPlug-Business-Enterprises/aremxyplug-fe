import { React, useState } from "react";
import { DashBoardLayout } from "../../Layout/DashBoardLayout";
import "./CardPayment.css";
import { useContext } from "react";
import { ContextProvider } from "../../../Context";
import ArrowRight from "./CardPaymentImages/ArrowRight.svg";
import { Link } from "react-router-dom";
import airtimestyles from "../../../AirTimePage/AirtimeVtu.module.css";
import ArrowDown from "./CardPaymentImages/ArrowDown.svg";
import HeroImage2 from "./CardPaymentImages/HeroImage2.svg";
import Search from "./CardPaymentImages/search.svg";
import CardNumber from "./CardPaymentImages/CardNumber.svg";
import CVV from "./CardPaymentImages/CVV.svg";
import Question from "./CardPaymentImages/Question.svg";
import ExpiryDate from "./CardPaymentImages/Expirydate.svg";
import Pin from "./CardPaymentImages/Pin.svg";
import CardName from "./CardPaymentImages/Cardname.svg";
import Secure from "./CardPaymentImages/Secure.svg";
import { Modal } from "../../../Screens/Modal/Modal";
import styles from "../../../Dashboard/DashboardComponents/TransferComponent/transfer.module.css";
import PopUpGreen from "./CardPaymentImages/PopUpGreen.svg";
import PopUpGreenDeskTop from "./CardPaymentImages/PopUpGreenDeskTop.svg";
import PopUpGreenTab from "./CardPaymentImages/PopUpGreenTab.svg";
import Success from "./CardPaymentImages/success.gif";
import CvvPopUp from "./CardPaymentImages/CvvPopUp.svg";
import PinPopUp from "./CardPaymentImages/PinPopUp.svg";
import CardBackground from "./CardPaymentImages/CardBackground.svg";
// import WalletModal from "../../../Wallet/WalletModal";
import AddCardPopUp from "./CardPaymentImages/AddCardPopUp.svg";

const AddNewCardPayment = () => {
  const { isDarkMode, toggleSideBar } = useContext(ContextProvider);
  const [showPayment, setShowPayment] = useState(false);
  const { walletName, setWalletName } = useContext(ContextProvider);
  const [paymentSelected, setPaymentSelected] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCVV] = useState("");
  const [pin, setPin] = useState("");
  const { cardHolderName, setCardHolderName } = useContext(ContextProvider);
  const [addCard, setAddCard] = useState("");
  const [cvvPopUp, setCvvPopUp] = useState("");
  const [pinPopUp, setPinPopUp] = useState("");
  const [image, setImage] = useState("");
  const [usd, setUsd] = useState("");

  const handleShowPayment = () => {
    setShowPayment(!showPayment);
    setWalletName("");
    setPaymentSelected(false);
    setImage("");
  };

  const handleSelectPayment = (code, flag) => {
    setWalletName(code);
    setShowPayment(false);
    setPaymentSelected(true);
    setImage(flag);

    if (
      code === "USD" ||
      code === "GBP" ||
      code === "EUR" ||
      code === "AUD" ||
      code === "KSH"
    ) {
      setUsd(true);
    } else {
      setUsd(false);
    }
  };

  const handleButtonClick = () => {
    setUsd(false);
    setPaymentSelected(false);
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

  const [filteredCountryList, setFilteredCountryList] = useState(countryList);

  const handleSearch = (searchValue) => {
    const filteredList = countryList.filter((country) =>
      country.code.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredCountryList(filteredList);
  };

  const handleCardNumberChange = (e) => {
    let inputVal = e.target.value.replace(/\s/g, ""); // Remove existing spaces
    inputVal = inputVal.replace(/(\d{4})(?=\d)/g, "$1 "); // Add space after every 4 digits, except the last 4
    setCardNumber(inputVal);
  };

  const handleExpiryDateChange = (e) => {
    // Remove non-digit characters from the input
    const inputValue = e.target.value.replace(/\D/g, "");

    // Format the input with a slash after the first two characters
    const formattedInput =
      inputValue.length <= 2
        ? inputValue
        : `${inputValue.slice(0, 2)}/${inputValue.slice(2, 4)}`;

    // Update the state with the formatted input (max length 5 to allow for the slash)
    setExpiryDate(formattedInput.slice(0, 5));
  };

  const handleCVVChange = (e) => {
    // Remove non-digit characters from the input
    const inputValue = e.target.value.replace(/\D/g, "");

    // Update the state with the input (max length 3 to allow for only 3 digits)
    setCVV(inputValue.slice(0, 3));
  };

  const handlePinChange = (e) => {
    // Remove non-digit characters from the input
    const inputValue = e.target.value.replace(/\D/g, "");

    // Update the state with the input (max length 3 to allow for only 3 digits)
    setPin(inputValue.slice(0, 4));
  };

  const handleCardNameChange = (e) => {
    // Update the state with the input value
    setCardHolderName(e.target.value);
  };

  const handleAddCard = (e) => {
    setAddCard(true);
  };

  const handleCvv = (e) => {
    setCvvPopUp(true);
  };

  const handlePin = (e) => {
    setPinPopUp(true);
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
              <p className="text-[7px] font-[400] leading-[9px] mb-3 md:text-[12px] md:leading-[12.2px] w-[90%] md:w-[80%] lg:w-[75%] 2xl:w-[85%] 2xl:mt-[5px] lg:mt-[20px] lg:text-[16px] lg:leading-[26px] 2xl:text-[20px] lg:mb-[20px]">
                Bind your bank card to add money to your wallet almost
                instantly.
              </p>
            </div>

            <div className="w-[91px] h-[66px] lg:w-[199px] lg:h-[199px] lg:mt-[40px]">
              <img
                src={HeroImage2}
                alt=""
                className="w-[55.482px] h-full md:w-[98px] md:h-[px] lg:w-[166.447px] lg:h-[150px]"
              />
            </div>
          </div>

          <div className="flex items-center mt-[10%] gap-[8px] md:mt-[5%] md:text-[18px] lg:text-[20px]">
            <p className="text-[#000000] font-semibold text-[12px] leading-[130%] md:text-[16px] lg:text-[20px] 2xl:text-[25px]">
              Card details
            </p>
            <img
              src={ArrowRight}
              alt=""
              className="w-[12px] h-[12px] md:w-[14.083px] md:h-[14.083px] lg:w-[24px] lg:h-[24px]"
            />
          </div>

          <div className="text-[10px] md:text-[12px] lg:text-[20px] font-semibold text-[#7C7C7C] mt-[2%]">
            <p>Please fill your correct card information</p>
          </div>

          <div>
            <div onClick={handleShowPayment}>
              <div className="flex justify-between items-center border w-[50%] md:w-[35%] lg:w-[35%] h-8 px-2 rounded-md text-[10px] font-[600] focus:outline-none lg:h-[51px] lg:text-[16px] mt-[5%] xl:w-[35%]">
                {paymentSelected ? (
                  <li
                    onClick={handleShowPayment}
                    className={airtimestyles.labelInput}
                  >
                    <h2 className="text-[#7C7C7C]">{walletName}</h2>
                  </li>
                ) : (
                  <h2
                    onClick={handleShowPayment}
                    className="text-[10px] md:text-[12px] lg:text-[16px] text-[#929292]"
                  >
                    Select currency
                  </h2>
                )}
                {paymentSelected ? (
                  <button
                    className="rounded-full w-[12.02px] h-[12.02px] flex items-center justify-center text-[6px] overflow-hidden md:w-[12.02px] lg:w-[25px] md:h-[12.02px] lg:h-[25px]"
                    onClick={handleShowPayment}
                  >
                    <img
                      src={image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </button>
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
                className={`border md:rounded-[10px] rounded-[4px] absolute ${
                  toggleSideBar
                    ? "w-[50%] md:w-[35%] lg:w-[35%] xl:w-[35%]"
                    : "w-[50%] md:w-[35%] lg:w-[35%] xl:w-[35%]"
                } bg-[#FFF] z-[100]`}
              >
                <div className="flex justify-between px-[10px] py-[7px]">
                  <input
                    type="text"
                    placeholder="Search"
                    className="text-[10px] md:text-[12px] lg:text-[14px] font-semibold text-[#7C7C7C] w-[50%] py-1 outline-none rounded-md focus:outline-none"
                    onChange={(e) => handleSearch(e.target.value)}
                  />
                  <img src={Search} alt="" classsName="" />
                </div>
                <hr />
                {filteredCountryList.map((country) => (
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

          <div className="relative">
            <img
              src={CardBackground}
              alt=""
              className={` ${
                toggleSideBar ? "card-background md:left-[60%]" : ""
              }
              absolute opacity-[20%] h-[70%] md:h-full md:opacity-100 right-[-5.5%] z-0`}
            />

            <div className="mt-[5%] flex flex-col gap-[5px]">
              <p className="text-[10px] md:text-[14px] lg:text-[18px] font-semibold">
                Card Number
              </p>
              <div
                className={`border-[1px] rounded-[5px] flex flex-row px-[10px] py-[8px] md:w-[60%] lg:py-[12px] ${
                  cardNumber.length === 19
                    ? "border-[#B200FF99] bg-opacity-60"
                    : ""
                }`}
              >
                <input
                  type="text"
                  value={cardNumber}
                  onChange={handleCardNumberChange}
                  className={`outline-none w-full text-[10px] md:text-[14px] lg:text-[18px]`}
                  placeholder="4444 4444 4444 4444"
                  maxLength="39"
                />
                <img
                  src={CardNumber}
                  alt=""
                  className="h-[20px] md:h-[30px] lg:h-[40px]"
                />
              </div>
            </div>

            <div className="flex flex-row gap-[10px] md:w-[60%]">
              <div className="mt-[5%] flex flex-col gap-[5px]">
                <p className="text-[10px] font-semibold md:text-[14px] lg:text-[18px]">
                  Expiry Date
                </p>
                <div alt="" className="md:hidden md:h-[30px] lg:h-[40px]"></div>
                <div
                  className={`expiry-date border-[1px] rounded-[5px] flex flex-row px-[10px] py-[8px] lg:py-[12px] md:mt-[7%] ${
                    expiryDate.length === 5
                      ? "border-[#B200FF99] bg-opacity-60"
                      : ""
                  }`}
                >
                  <input
                    type="text"
                    value={expiryDate}
                    onChange={handleExpiryDateChange}
                    className="outline-none w-full text-[10px] md:text-[14px] lg:text-[18px]"
                    placeholder="MM/YY"
                    maxLength={5} // Set max length to ensure only 5 characters are allowed
                  />
                  <img
                    src={ExpiryDate}
                    alt=""
                    className="h-[20px] md:h-[30px] lg:h-[40px]"
                  />
                </div>
              </div>

              <div className="mt-[5%] flex flex-col gap-[5px]">
                <div className="flex flex-row gap-[5px]">
                  <p className="text-[10px] font-semibold md:text-[14px] lg:text-[18px]">
                    CVV
                  </p>
                  <img
                    onClick={handleCvv}
                    src={Question}
                    alt=""
                    className="h-[20px] md:h-[30px] lg:h-[40px]"
                  />
                </div>
                <div
                  className={`border-[1px] rounded-[5px] flex flex-row px-[10px] py-[8px] lg:py-[12px] ${
                    cvv.length === 3 ? "border-[#B200FF99] bg-opacity-60" : ""
                  }`}
                >
                  <input
                    type="number"
                    className="outline-none w-full text-[10px] md:text-[14px] lg:text-[18px]"
                    placeholder=""
                    value={cvv}
                    onChange={handleCVVChange}
                    maxLength={3}
                  />
                  <img
                    src={CVV}
                    alt=""
                    className="h-[20px] md:h-[30px] lg:h-[40px]"
                  />
                </div>
              </div>

              <div className="mt-[5%] flex flex-col gap-[5px] z-[1]">
                <div className="flex flex-row gap-[5px]">
                  <p className="text-[10px] font-semibold md:text-[14px] lg:text-[18px]">
                    PIN
                  </p>
                  <img
                    onClick={handlePin}
                    src={Question}
                    alt=""
                    className="h-[20px] md:h-[30px] lg:h-[40px]"
                  />
                </div>
                <div
                  className={`border-[1px] rounded-[5px] flex flex-row px-[10px] py-[8px] lg:py-[12px] ${
                    pin.length === 4 ? "border-[#B200FF99] bg-opacity-60" : ""
                  }`}
                >
                  <input
                    type="number"
                    className="outline-none w-full text-[10px] md:text-[14px] lg:text-[18px]"
                    placeholder=""
                    value={pin}
                    onChange={handlePinChange}
                    maxLength={4}
                  />
                  <img
                    src={Pin}
                    alt=""
                    className="h-[20px] md:h-[30px] lg:h-[40px]"
                  />
                </div>
              </div>
            </div>

            <div className="mt-[5%]">
              <p className="font-semibold text-[10px] md:text-[14px] lg:text-[18px]">
                Card Name
              </p>
              <p className="text-[#7C7C7C] text-[10px] md:text-[12px] lg:text-[14px] md:w-[60%]">
                The name on your card must be the same with your verified name.
              </p>
              <div className="border-[1px] rounded-[5px] flex px-[10px] py-[10px] mt-[10px] md:w-[60%] lg:py-[12px]">
                <input
                  type="text"
                  value={cardHolderName}
                  className="outline-none w-full text-[10px] md:text-[12px] lg:text-[16px]"
                  placeholder=""
                  onChange={handleCardNameChange}
                />
                <img
                  src={CardName}
                  alt=""
                  className="h-[20px] md:h-[30px] lg:h-[40px]"
                />
              </div>
            </div>
          </div>

          <div className="py-[10px] lg:py-[30px] md:mx-[20%] md:mt-[5%]">
            <button
              className={`${
                !CardNumber ||
                !ExpiryDate ||
                !CVV ||
                !Pin ||
                !cardHolderName ||
                !paymentSelected
                  ? "bg-[#63616188] cursor-not-allowed"
                  : "bg-primary"
              } w-full md:w-fit text-white mt-[5px] rounded-md px-[28px] text-[10px] md:px-[30px] md:py-[10px] md:text-[14px] md:font-[600] leading-[15px] lg:text-[18px] lg:px-[60px] lg:py-[15px] 2xl:text-[20px] 2xl:px-[50px] 2xl:py-[10px] lg:leading-[24px] py-[15px]
              `}
              disabled={
                !CardNumber || !ExpiryDate || !CVV || !Pin || !cardHolderName
              }
              onClick={handleAddCard}
            >
              Add Card
            </button>
          </div>

          <div
            className={`flex flex-row justify-center text-[10px] gap-[5px] mt-[10px] md:text-[14px] lg:text-[20px] ${
              toggleSideBar ? "secure md:w-[61%]" : " secure1 md:w-[57%]"
            }`}
          >
            <img
              src={Secure}
              alt=""
              className="h-[18px] md:h-[25px] lg:h-[35px]"
            />
            <p className="font-semibold">Secured by AremxyPlug</p>
          </div>
        </section>

        {paymentSelected && usd ? (
          <Modal>
            <div
              className={` ${
                toggleSideBar ? "currencypopup1" : "currencypopup"
              } bg-white flex flex-col justify-between md:mx-auto md:my-auto lg:mx-auto lg:my-auto`}
            >
              <div className={`${isDarkMode ? "bg-[#000]" : "bg-[]"} xl:pb-0`}>
                <div>
                  <p className="text-[10px] text-[#04177F] text-center pt-[5%] md:pt-[0%] font-extrabold md:text-[16px] lg:text-[25px] lg:pt-[0%]">
                    This Currency is Currently Not Available.
                  </p>
                </div>
                <img
                  src={AddCardPopUp}
                  alt=""
                  className="popUp-style mx-auto mt-[20px] md:mt-[1%] md:w-[70%] md:h-[100%] md:mx-auto w-[143px] h-[100px] lg:mx-auto lg:mt-[0%] xl:h-[50%] xl:mt-[5%] 2xl:mt-[3%] xl:mx-auto"
                />
              </div>

              <div className="mobile-desktop mt-[30px] flex flex-col gap-[5px] pb-[5%] xl:mt-[-10%] 2xl:mt-[-20%] lg:mt-[0%] md:mt-[5%] md:pr-[10px]">
                <p className="text-[8px] font-extrabold text-end float-right ml-[60%] md:ml-[70%] md:text-[12px] mt-[10px] lg:text-[13px] 2xl:text-[15px]">
                  Coming Soon...
                </p>
                <button
                  className={`${
                    isDarkMode ? "border" : "bg-[#04177f] "
                  } cursor-pointer text-white text-[10px] h-[40px] rounded-[5px] md:rounded-[10px] flex items-center justify-center md:mx-auto md:w-[25%] md:h-[30px] md:text-[14px] lg:my-[3%] lg:h-[40px] lg:text-[20px] lg:w-[25%] lg:mx-auto`}
                  onClick={handleButtonClick}
                >
                  Okay
                </button>
              </div>
            </div>
          </Modal>
        ) : null}

        {addCard && (
          <Modal className="">
            <div
              className={`confirm2 ${styles.inputPin} ${
                toggleSideBar
                  ? "md:w-[45%] md:ml-[20%] lg:w-[40%] lg:ml-[20%]"
                  : "lg:w-[40%]"
              }relative md:w-[55%] w-[90%] flex flex-col justify-between md:mb-[0%] md:mx-auto md:my-auto lg:mx-auto lg:my-auto`}
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
                  Your card has been added successfully.
                </p>

                <p
                  className={`text-[10px] px-[20px] md:text-[16px] lg:text-[18px] font-semibold text-center mt-[4%] lg:my-[%] z-[1000] ${styles.overlayText}`}
                >
                  Kindly proceed to fund your wallet with your card.
                </p>
              </div>

              <div>
                <img
                  src={Success}
                  alt=""
                  className="absolute top-[25%] left-[32%] h-[50%] lg:left-[36.5%] md:top-[31%]"
                />
              </div>

              <Link to="/ExistingCardPage">
                <button
                  onClick={(e) => {
                    // e.preventDefault();
                    setAddCard(false);
                    setCardNumber("");
                    setExpiryDate("");
                    setCVV("");
                    setPin("");
                    setCardHolderName("");
                    setPaymentSelected("");
                    window.location.reload();
                  }}
                  className={`my-[5%] bg-[#04177f] w-[90%] flex justify-center items-center mx-auto cursor-pointer text-[10px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[16px] lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
                >
                  Proceed
                </button>
              </Link>
            </div>
          </Modal>
        )}

        {cvvPopUp && (
          <Modal>
            <div
              className={` ${
                toggleSideBar ? "cvvpop01" : "cvvpop"
              } bg-white flex flex-col justify-between md:mx-auto md:my-auto lg:mx-auto lg:my-auto`}
            >
              <div className="absolute z-0 right-0 top-0" style={{ zIndex: 0 }}>
                <img
                  src={PopUpGreen}
                  alt=""
                  className="md:hidden rounded-tr-[10px]"
                />
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
                  className={`text-[10px] px-[20px] md:text-[16px] lg:text-[18px] font-semibold text-center mt-[3%] lg:mt-[3%] z-[1000] ${styles.overlayText}`}
                >
                  How can I get my card CVV?
                </p>

                <p
                  className={`text-[10px] px-[20px] md:text-[14px] lg:text-[18px] font-semibold text-center mt-[4%] md:mt-[2%] lg:my-[%] z-[1000] ${styles.overlayText}`}
                >
                  Check the 3 digit Number at the back of your Bank ATM card.
                </p>
              </div>

              <div>
                <img
                  src={CvvPopUp}
                  alt=""
                  className="absolute cvvPopUp top-[35%] left-[32%] md:left-[25%] h-[30%] lg:left-[30%] md:top-[38%]"
                />
              </div>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  setCvvPopUp(false);
                }}
                className={`${
                  toggleSideBar ? "okay01" : "okay"
                } mt-[0%] bg-[#04177f] w-[100%] flex justify-center items-center mx-auto cursor-pointer text-[10px] font-extrabold h-[40px] text-white rounded-[6px] md:mt-[10%] md:w-[90%] md:rounded-[8px] md:text-[16px] lg:w-[80%] lg:h-[38px] lg:py-[5%]`}
              >
                Okay
              </button>
            </div>
          </Modal>
        )}

        {pinPopUp && (
          <Modal>
            <div
              className={` ${
                toggleSideBar ? "cvvpop01" : "cvvpop"
              } bg-white flex flex-col justify-between md:mx-auto md:my-auto lg:mx-auto lg:my-auto`}
            >
              <div className="absolute z-0 right-0 top-0" style={{ zIndex: 0 }}>
                <img
                  src={PopUpGreen}
                  alt=""
                  className="md:hidden rounded-tr-[10px]"
                />
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
                  className={`text-[10px] px-[20px] md:text-[16px] lg:text-[18px] font-semibold text-center mt-[3%] lg:mt-[3%] z-[1000] ${styles.overlayText}`}
                >
                  What is PIN?
                </p>

                <p
                  className={`text-[10px] px-[20px] md:text-[14px] lg:text-[18px] font-semibold text-center mt-[4%] md:mt-[2%] lg:my-[%] z-[1000] ${styles.overlayText}`}
                >
                  4 digit PIN to authorize payment from your bank ATM card to
                  fund your wallet.
                </p>
              </div>

              <div>
                <img
                  src={PinPopUp}
                  alt=""
                  className="absolute cvvPopUp md:w-[50%] top-[35%] left-[32%] md:left-[25%] h-[30%] lg:left-[%] md:top-[38%]"
                />
              </div>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  setPinPopUp(false);
                }}
                className={`${
                  toggleSideBar ? "okay01" : "okay"
                } mt-[0%] bg-[#04177f] w-[100%] flex justify-center items-center mx-auto cursor-pointer text-[10px] font-extrabold h-[40px] text-white rounded-[6px] md:mt-[10%] md:w-[90%] md:rounded-[8px] md:text-[16px] lg:w-[80%] lg:h-[38px] lg:py-[5%]`}
              >
                Okay
              </button>
            </div>
          </Modal>
        )}

        <div
          className={`${
            isDarkMode ? "" : ""
          } flex gap-[15px] justify-center items-center mt-[100%] pb-[25%] md:pb-[2%] md:mt-[40%] lg:mt-[40%] lg:pb-0`}
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

export default AddNewCardPayment;
