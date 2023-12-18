import { React, useState, useEffect } from "react";
import { DashBoardLayout } from "../../Layout/DashBoardLayout";
import "./CardPayment.css";
import { useContext } from "react";
import { ContextProvider } from "../../../Context";
import FundWithCardSvg from "./CardPaymentImages/FundWithCard.svg";
import airtimestyles from "../../../AirTimePage/AirtimeVtu.module.css";
import ArrowDown from "./CardPaymentImages/ArrowDown.svg";
import Search from "./CardPaymentImages/search.svg";
import FundAmount from "./CardPaymentImages/FundAmount.svg";
import { Modal } from "../../../Screens/Modal/Modal";
import Cancel from "./CardPaymentImages/Cancel.svg";
import OtpInput from "react-otp-input";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import Logo from "./CardPaymentImages/AremxyLogo.svg";
import Success from "./CardPaymentImages/Tick.png";
import { Link } from "react-router-dom";
// import WalletModal from "../../../Wallet/WalletModal";
import AddCardPopUp from "./CardPaymentImages/AddCardPopUp.svg";
// import BankLogo from "./CardPaymentImages/BankLogo.svg";
import { useLocation } from "react-router-dom";

const FundWithCard = () => {
  const {
    isDarkMode,
    toggleSideBar,
    toggleVisibility,
    isVisible,
    inputPin,
    setInputPin,
    inputPinHandler,
    selectedCard,
  } = useContext(ContextProvider);
  const [showPayment, setShowPayment] = useState(false);
  const { walletName, setWalletName } = useContext(ContextProvider);
  const { cardPaymentAmount, setCardPaymentAmount } =
    useContext(ContextProvider);
  const { cardPaymentSelected, setCardPaymentSelected } =
    useContext(ContextProvider);
  const [showCard, setShowCard] = useState(false);
  const { cardSelected, setCardSelected } = useContext(ContextProvider);
  const { cardName, setCardName } = useContext(ContextProvider);
  const [proceed, setProceed] = useState("");
  const [confirm, setConfirm] = useState("");
  const [Successful, setSuccessful] = useState("");
  // const [image, setImage] = useState("");
  const [usd, setUsd] = useState("");
  const [error, setError] = useState("");

  const handleShowPayment = () => {
    setShowPayment(!showPayment);
    setWalletName("");
    setCardPaymentSelected(false);
    setShowCard(false);
  };

  const handleSelectPayment = (code, flag) => {
    setWalletName(code);
    setShowPayment(false);
    setCardPaymentSelected(true);
    // setImage(flag);

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
    setCardPaymentSelected(false);
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
    if (cardPaymentSelected && walletName === "NGN") {
      // Only show card selection if card payment is NGN
      setShowCard(!showCard);
    } else {
      // Hide card selection for other payment options
      setShowCard(false);
    }

    setCardName("");
    setCardSelected(true);
    setShowPayment(false);
    // setImage(flag)
  };

  const handleSelectCard = (code, flag) => {
    setCardName(code);
    setShowCard(false);
    setCardSelected(true);
    // setImage(flag);

    const selectedCard = cardList.find((card) => card.code === code);

    setSelectedCardName(selectedCard.name);
    setSelectedCardNumber(selectedCard.number);
  };

  const cardList = [
    {
      id: 1,
      short: "ZNT",
      code: "ZENITH",
      name: "Umolo Blessing",
      number: "**********5378",
      // flag: require("./CardPaymentImages/BankLogo.svg").default,
    },
    {
      id: 2,
      short: "KUD",
      code: "KUDA",
      name: "Umolo Blessing",
      number: "**********8262",
      // flag: require("./CardPaymentImages/BankLogo.svg").default,
    },
    {
      id: 3,
      short: "ECO",
      code: "ECOBANK",
      name: "Blessing Umolo",
      number: "**********2345",
      // flag: require("./CardPaymentImages/BankLogo.svg").default,
    },
    {
      id: 4,
      short: "GTB",
      code: "GTBANK",
      name: "Johnson",
      number: "**********9047",
      // flag: require("./CardPaymentImages/BankLogo.svg").default,
    },
    {
      id: 5,
      short: "FBN",
      code: "FIRST BANK",
      name: "Umolo",
      number: "**********0928",
      // flag: require("./CardPaymentImages/BankLogo.svg").default,
    },
    {
      id: 6,
      short: "UBA",
      code: "UNITED BANK OF AFRICA",
      name: "Blessing",
      number: "**********0909",
      // flag: require("./CardPaymentImages/BankLogo.svg").default,
    },
  ];

  const [selectedCardName, setSelectedCardName] = useState("");
  const [selectedCardNumber, setSelectedCardNumber] = useState("");

  console.log(selectedCardName, selectedCardNumber);

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

  const [filteredCountryList, setFilteredCountryList] = useState(countryList);

  const [filteredCardList, setFilteredCardList] = useState(cardList);

  const handleSearch = (searchValue) => {
    const filteredList = countryList.filter((country) =>
      country.code.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredCountryList(filteredList);
  };

  const handleCardSearch = (searchCardValue) => {
    const filteredList = cardList.filter((card) =>
      card.code.toLowerCase().includes(searchCardValue.toLowerCase())
    );
    setFilteredCardList(filteredList);
  };

  const handleAmount = (e) => {
    const value = e.target.value;

    const numericValue = value.replace(/\D/g, "").slice(0, 11);

    setCardPaymentAmount(numericValue);
  };

  const handleProceed = () => {
    if (parseInt(cardPaymentAmount, 10) < 1000) {
      setError("Amount should be above 1000");
      setProceed(false);
    } else {
      setError(""); // Clear any previous error
      setProceed(true);
      // Proceed with your logic here
      console.log("Proceeding with the amount:", cardPaymentAmount);
    }
  };

  const handleConfirm = () => {
    setProceed(false);
    setConfirm(true);
  };

  const handleSuccessful = () => {
    setSuccessful(true);
  };

  const handleDone = () => {
    setCardPaymentAmount("");
    setCardPaymentSelected("");
    setCardSelected("");
  };
  const location = useLocation();

  const codeValue = location?.search

    ? new URLSearchParams(location.search).get("codeValue")
    : null;

  const [code = null, name = null, number = null, flag = null] = codeValue
    ? codeValue.split(",")
    : [];

  useEffect(() => {
    // Read from the query parameter to check if card payment was selected
    const searchParams = new URLSearchParams(location.search);
    const cardPaymentSelectedFromQuery = searchParams.get('cardPaymentSelected');

    // Check if card payment was selected on the previous page
    if (cardPaymentSelectedFromQuery === 'true') {
      setCardPaymentSelected(true);
    } else {
      setCardPaymentSelected(false);
    }
  },);


  // console.log("code:", code);
  // console.log("number:", number);
  // console.log("name:", name);


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
              <p className="text-[7px] font-[400] leading-[9px] mb-3 md:text-[12px] md:leading-[12.2px] w-[90%] md:w-[65%] lg:w-[75%] 2xl:w-[85%] 2xl:mt-[5px] lg:mt-[20px] lg:text-[16px] lg:leading-[26px] 2xl:text-[20px] lg:mb-[20px]">
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
              <div className="flex justify-between items-center border w-[50%] md:w-[35%] lg:w-[35%] h-8 px-2 rounded-md text-[10px] font-[600] focus:outline-none lg:h-[51px] lg:text-[16px] mt-[10%] xl:w-[35%]">
                {cardPaymentSelected ? (
                  <li
                    onClick={() => {
                      handleShowPayment();
                    }}
                    className={`flex flex-row justify-between w-full`}
                  >

                    <h2 className="text-[#7C7C7C]">{walletName}</h2>
                  </li>
                ) : (
                  <h2
                    onClick={() => {
                      handleShowPayment();
                    }}
                    className="text-[10px] md:text-[12px] lg:text-[16px] text-[#929292]"
                  >
                    Select currency
                  </h2>
                )}
                {cardPaymentSelected ? (
                  <button
                    className="rounded-full w-[12.02px] h-[12.02px] flex items-center justify-center text-[6px] overflow-hidden md:w-[12.02px] lg:w-[25px] md:h-[12.02px] lg:h-[25px]"
                    onClick={handleShowPayment}
                  >
                    <img src={ArrowDown} alt="" className="" />
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

          {/* <div className="flex justify-between items-center border w-[50%] md:w-[35%] lg:w-[35%] h-8 px-2 rounded-md text-[10px] font-[600] focus:outline-none lg:h-[51px] lg:text-[16px] mt-[10%]">
            <h2 className="text-[#7C7C7C]">{walletName}</h2>

            <button
                    className="lg:w-6 lg:h-6 h-[11px] w-[11px]"
                  >
                    <img src={ArrowDown} alt="" className="w-full h-full" />
                  </button>
          </div> */}

          {/* <div className="flex justify-between items-center border w-full md:w-[50%] h-8 px-2 rounded-md text-[10px] font-[600] focus:outline-none lg:h-[51px] lg:text-[16px] mt-[5%] md:mt-[5%] lg:mt-[4%]">
            <div className="text-[10px] md:text-[13px] lg:text-[16px] text-[#929292] flex gap-[10px]">
              <img src={BankLogo} alt="" />
              {code}
            </div>

            <img src={ArrowDown} alt="" className="" />
          </div> */}

          <div>
            <div
              onClick={() => {
                handleShowCard();
              }}
            >
              <div className="flex justify-between items-center border w-full md:w-[50%] h-8 px-2 rounded-md text-[10px] font-[600] focus:outline-none lg:h-[51px] lg:text-[16px] mt-[5%] md:mt-[5%] lg:mt-[4%]">
                {cardSelected  ? (
                  <li
                    onClick={() => {
                      handleShowCard();
                    }}
                    className={`flex flex-row justify-between w-full`}
                  >
                    <div className="flex items-center gap-[10px]">
                    {/* <img src={BankLogo} alt="" /> */}
                    <img
                      src={flag}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                      <h2 className="text-[#7C7C7C]">{cardName}</h2>
                      <h2 className="text-[#7C7C7C]">{selectedCard.code}</h2>
                    </div>
                    <img src={ArrowDown} alt="" className="" />
                  </li>
                ) : (
                  <h2
                    onClick={() => {
                      handleShowCard();
                    }}
                    className="text-[10px] md:text-[13px] lg:text-[16px] text-[#929292] flex gap-[10px]"
                  >
                    {/* <img src={BankLogo} alt="" /> */}
                    {/* <img
                      src={flag}
                      alt=""
                      className="w-full h-full object-cover"
                    /> */}

                    <div>
                    {flag}
                    </div>
                   {code}
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
                  <input
                    type="text"
                    placeholder="Search"
                    className="text-[10px] text-[#7C7C7C] flex-grow-1 py-1 outline-none rounded-md focus:outline-none"
                    onChange={(e) => handleCardSearch(e.target.value)}
                  />
                  <img src={Search} alt="" />
                </div>
                <hr />
                {filteredCardList.map((card) => (
                  <Card
                    key={card.id}
                    flag={card.flag}
                    code={card.code}
                    onClick={() => {
                      handleSelectCard(card.code, card.flag);
                    }}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="border-[1px] w-full md:w-[50%] mt-[5%] rounded-[5px] flex justify-between py-[5px] px-[10px]">
            <input
              type="number"
              className="outline-none relative text-[14px] md:text-[16px] lg:text-[18px] pl-[4%] lg:pl-[3%]"
              value={cardPaymentAmount}
              placeholder=""
              onChange={handleAmount}
            />
            <div className="absolute text-[14px] md:text-[16px] lg:text-[20px] lg:mt-[5px]">
              ₦
            </div>
            <img
              src={FundAmount}
              alt=""
              className="h-[20px] md:h-[25px] lg:h-[40px]"
            />
          </div>

          {error && (
            <div className="text-red-500 text-[10px] md:text-[12px] lg:text-[14px]">
              {error}
            </div>
          )}

          <div
            className={`py-[30px] lg:py-[60px] mt-10  ${
              toggleSideBar ? "md:mx-[15%]" : "md:mx-[15%]"
            }`}
          >
            <button
              className={`w-full md:w-fit text-white rounded-md px-[28px] text-[10px] md:px-[30px] md:py-[10px] md:text-[13px] md:font-[600] leading-[15px] lg:text-[16px] lg:px-[60px] lg:py-[15px] 2xl:text-[20px] 2xl:px-[50px] 2xl:py-[10px] lg:leading-[24px] py-[15px] ${
                !cardPaymentSelected || !cardPaymentAmount || !codeValue
                  ? "bg-[#63616188] cursor-not-allowed"
                  : "bg-primary"
              }`}
              onClick={handleProceed}
              disabled={
                !cardPaymentSelected || !cardPaymentAmount || !codeValue
              }
            >
              Proceed
            </button>
          </div>

          {cardPaymentSelected && usd ? (
            <Modal>
              <div
                className={` ${
                  toggleSideBar ? "currencypopup1" : "currencypopup"
                } bg-white flex flex-col justify-between md:mx-auto md:my-auto lg:mx-auto lg:my-auto`}
              >
                <div
                  className={`${isDarkMode ? "bg-[#000]" : "bg-[]"} xl:pb-0`}
                >
                  <div>
                    <p className="text-[10px] text-[#04177F] text-center pt-[5%] md:pt-[0%] font-extrabold md:text-[16px] lg:text-[25px] lg:pt-[0%]">
                      This Currency is Currently Not Available.
                    </p>
                  </div>
                  <img
                    src={AddCardPopUp}
                    alt=""
                    className="popUp-style mx-auto mt-[20px] md:mt-[5%] md:w-[70%] md:h-[100%] md:mx-auto w-[143px] h-[100px] lg:mx-auto lg:mt-[0%] xl:h-[50%] xl:mt-[5%] 2xl:mt-[3%] xl:mx-auto"
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

          {proceed && (
            <Modal>
              <div
                className={`mx-[5%] popUp1 ${
                  isDarkMode ? "border bg-[#000]" : "bg-[#fff]"
                } ${
                  toggleSideBar ? "popUp01" : "popUp1"
                } grow pt-[10px] pb-[20px] rounded-tr-[8px] rounded-tl-[8px] relative md:rounded-[11.5px] md:mx-auto md:my-auto md:overflow-auto`}
              >
                <div className="w-full flex justify-end border-b-[8px] border-primary px-[12px] md:h-[25px] lg:border-b-[10px] lg:mt-[20px]">
                  <img
                    src={Cancel}
                    alt=""
                    onClick={() => {
                      setProceed(false);
                      // setCardPaymentAmount("");
                      // setCardSelected("");
                      // setCardPaymentSelected("");
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
                          ₦{cardPaymentAmount}.00
                        </h2>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <h2 className="text-[#7C7C7C] text-[12px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                        Funding Fee 1.5%
                      </h2>
                      <div className="flex gap-1">
                        <h2 className="text-[12px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                          ₦{(cardPaymentAmount * 0.015).toFixed(2)}
                        </h2>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <h2 className="text-[#7C7C7C] text-[12px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                        Vat Fee
                      </h2>
                      <div className="flex gap-1">
                        <h2 className="text-[12px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                          ₦{(cardPaymentAmount * 0.005).toFixed(2)}
                        </h2>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <h2 className="text-[#7C7C7C] text-[12px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                        Amount to Recieve
                      </h2>
                      <div className="flex gap-1">
                        <h2 className="text-[12px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                          ₦
                          {(
                            cardPaymentAmount -
                            cardPaymentAmount * 0.015 -
                            cardPaymentAmount * 0.005
                          ).toFixed(2)}
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

                    <div className="flex items-center justify-center">
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
                className={` ${
                  toggleSideBar ? "confirm02" : "confirm2"
                } bg-white md:mx-auto md:my-auto lg:mx-auto lg:my-auto rounded-[12px]`}
              >
                <div className="flex justify-end px-2">
                  <img
                    onClick={() => setConfirm(false)}
                    className="cursor-pointer right-2 w-[18px] h-[18px] my-[1%] md:w-[35px] md:h-[25px] lg:w-[35px] lg:h-[35px] "
                    src={Cancel}
                    alt=""
                  />
                </div>

                <hr className="h-[6px] bg-[#04177f] lg:mt-[2%] border-none mt-[2%] md:mt-[2%] md:h-[10px]" />
                <p className="text-[10px] md:text-[16px] lg:text-[18px] font-extrabold text-center my-[8%] md:my-[5%] lg:my-[3%]">
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
                    handleSuccessful();
                  }}
                  disabled={inputPin.length !== 4}
                  className={`${
                    inputPin.length !== 4 ? "bg-[#0008]" : "bg-[#04177f]"
                  } my-[5%] w-[225px] flex justify-center items-center mx-auto cursor-pointer text-[10px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[16px] lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
                >
                  Fund
                </button>
              </div>
            </Modal>
          )}

          {Successful && (
            <Modal>
              <div
                className={`mx-[5%] popUp1 ${
                  isDarkMode ? "border bg-[#000]" : "bg-[#fff]"
                } ${
                  toggleSideBar ? "popUp01" : "popUp1"
                } grow pt-[10px] pb-[20px] rounded-tr-[8px] rounded-tl-[8px] relative md:rounded-[11.5px] md:mx-auto md:my-auto md:overflow-auto`}
              >
                <div className="w-full flex justify-between px-[12px] md:h-[25px] lg:mt-[20px]">
                  <img
                    src={Logo}
                    alt=""
                    className="h-[15px] md:h-[100%] lg:h-[200%] lg:mt-[-25px] lg:pb-[20px]"
                  />
                  <img
                    src={Cancel}
                    alt=""
                    onClick={() => {
                      setProceed(false);
                      setCardPaymentAmount("");
                      // setCardSelected("");
                      setCardPaymentSelected("");
                      setSuccessful(false);
                    }}
                    className="h-[20px] md:h-[120%] lg:h-[230%] lg:mt-[-25px] lg:pb-[20px]"
                  />
                </div>

                <hr className="h-[6px] bg-[#04177f] lg:mt-[-1%] border-none md:mt-[3%] md:h-[10px]" />

                <div>
                  <h2 className="lg:text-[16px] lg:leading-[24px] text-center mb-1 text-[14px] md:text-[13px] font-[600] mt-[20px] leading-[12px]">
                    Transaction Successful
                  </h2>

                  <div className="flex flex-col justify-center items-center">
                    <img src={Success} alt="" className="" />
                    <p className="text-[10px] md:text-[12px] lg:text-[14px] text-[#2ED173] font-semibold">
                      Your NGN Wallet has been Credited Successfully With
                    </p>
                  </div>

                  <div className="flex flex-col gap-[25px] px-[20px] mt-[50px] md:gap-[25px]">
                    <div className="flex items-center justify-between">
                      <h2 className="text-[#7C7C7C] text-[12px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                        Amount
                      </h2>
                      <div className="flex gap-1">
                        <h2 className="text-[12px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                          ₦{cardPaymentAmount}.00
                        </h2>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <h2 className="text-[#7C7C7C] text-[12px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                        Funding Fee 1.5%
                      </h2>
                      <div className="flex gap-1">
                        <h2 className="text-[12px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                          ₦{(cardPaymentAmount * 0.015).toFixed(2)}
                        </h2>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <h2 className="text-[#7C7C7C] text-[12px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                        Vat Fee
                      </h2>
                      <div className="flex gap-1">
                        <h2 className="text-[12px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                          ₦{(cardPaymentAmount * 0.005).toFixed(2)}
                        </h2>
                      </div>
                    </div>

                    <div className="flex w-full justify-center mx-auto px-[50px] items-center gap-[5%] md:gap-[10%] md:w-[40%] lg:w-[60%] lg:gap-[10%] lg:mx-auto">
                      <Link to="/CardPayment">
                        <button
                          onClick={() => {
                            handleDone();
                            setSuccessful(false);
                            window.location.reload();
                          }}
                          className={`bg-[#04177f] w-[100px] px-[30%] flex justify-center items-center mx-auto cursor-pointer text-[10px] font-[600] h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[14px] lg:text-[16px] lg:w-[163px] lg:h-[38px] lg:my-[2%] md:px-[60px] md:h-[30px]`}
                        >
                          Done
                        </button>
                      </Link>

                      <Link
                        to={`/CardPaymentReceipt?name=${name}&number=${number}`}
                      >
                        <button
                          // onClick={handleReceipt}
                          className={`border-[1px] w-[100px] px-[30%] border-[#04177f] flex justify-center items-center mx-auto cursor-pointer text-[10px] font-[600] h-[40px] rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[14px] lg:text-[16px] lg:w-[163px] lg:h-[38px] lg:my-[2%] md:px-[60px] md:h-[30px]`}
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
  );
};

export default FundWithCard;
