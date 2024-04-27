import React, { useState, useEffect } from "react";
import { DashBoardLayout } from "../../Layout/DashBoardLayout";
import "./CardPayment.css";
import "../DataTopUpPage/DataTopUp.css";
import { useContext } from "react";
import { ContextProvider } from "../../../Context";
import ArrowRight from "./CardPaymentImages/ArrowRight.svg";
import { Link, useNavigate } from "react-router-dom";
import airtimestyles from "../../../AirTimePage/AirtimeVtu.module.css";
import ArrowDown from "./CardPaymentImages/ArrowDown.svg";
import Search from "./CardPaymentImages/search.svg";
import ExistingBankPage from "./CardPaymentImages/ExistingBankPage.svg";
import NoExistingcard from "./CardPaymentImages/NoExistingCard.svg";
import RoundArrowDown from "./CardPaymentImages/RoundArrowDown.svg";
import AddCardPopUp from "./CardPaymentImages/AddCardPopUp.svg";
import { Modal } from "../../../Screens/Modal/Modal";
import DefaultCard from "./CardPaymentImages/DefaultCard.svg";
import SuccessGif from "./CardPaymentImages/success.gif";
import DeleteCard from "./CardPaymentImages/DeleteCard.svg";
import { Context } from "../../../Context";
import { useLocation } from "react-router-dom";

const ExistingCardPage = () => {
  const { isDarkMode, toggleSideBar } = useContext(ContextProvider);
  const [showPayment, setShowPayment] = useState("");
  const { walletName, setWalletName } = useContext(ContextProvider);
  // const { cardPaymentSelected, setCardPaymentSelected } = useContext(ContextProvider);
  const { paymentSelected, setPaymentSelected } = useContext(ContextProvider);
  const [usd, setUsd] = useState("");
  const [ngn, setNgn] = useState("");
  const [noCurrencySelected, setNoCurrencySelected] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [activeImage, setActiveImage] = useState(null);
  const [defaultcard, setDefaultCard] = useState("");
  const [sucessdefaultCard, setSuccessDefaultCard] = useState("");
  const [deleteCard, setDeleteCard] = useState("");
  const [confirmDeleteCard, setConfirmDeleteCard] = useState("");
  const location = useLocation();
  const [localPaymentSelected, setLocalPaymentSelected] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.paymentSelected !== undefined) {
      setLocalPaymentSelected(location.state.paymentSelected);
    }
  }, [location.state]);

  const handleShowPayment = (code) => {
    setShowPayment(!showPayment);

    if (!localPaymentSelected) {
      setWalletName("");
      setPaymentSelected(false);
      setNoCurrencySelected(true);
    } else {
      setNoCurrencySelected(false);
      if (localPaymentSelected === "NGN") {
        setWalletName(code);
        setPaymentSelected(true);
        setShowPayment(false);
        setNgn(code === "NGN");
        setNgn(true);
        setNoCurrencySelected(!(code === "NGN"));
      } else {
        setWalletName(true);
        setPaymentSelected(true);
      }
    }
  };

  const handleSelectPayment = (code) => {
    setWalletName(code);
    setPaymentSelected(true);
    setShowPayment(false);
    setNgn(code === "NGN");
    setNoCurrencySelected(!(code === "NGN"));

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

  const cardList = [
    {
      id: 1,
      short: "ZNT",
      code: "ZENITH",
      name: "Umolo Blessing",
      number: "**********5378",
      flag: require("./CardPaymentImages/BankLogo.svg").default,
    },
    {
      id: 2,
      short: "KUD",
      code: "KUDA",
      name: "Umolo Blessing",
      number: "**********8262",
      flag: require("./CardPaymentImages/BankLogo.svg").default,
    },
    {
      id: 3,
      short: "ECO",
      code: "ECOBANK",
      name: "Blessing Umolo",
      number: "**********2345",
      flag: require("./CardPaymentImages/BankLogo.svg").default,
    },
    {
      id: 4,
      short: "GTB",
      code: "GTBANK",
      name: "Johnson",
      number: "**********9047",
      flag: require("./CardPaymentImages/BankLogo.svg").default,
    },
    {
      id: 5,
      short: "FBN",
      code: "FIRST BANK",
      name: "Umolo",
      number: "**********0928",
      flag: require("./CardPaymentImages/BankLogo.svg").default,
    },
    {
      id: 6,
      short: "UBA",
      code: "UNITED BANK OF AFRICA",
      name: "Blessing",
      number: "**********0909",
      flag: require("./CardPaymentImages/BankLogo.svg").default,
    },
  ];

  const [filteredCountryList, setFilteredCountryList] = useState(countryList);

  const handleSearch = (searchValue) => {
    const filteredList = countryList.filter((country) =>
      country.code.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredCountryList(filteredList);
  };

  const handleButtonClick = () => {
    setUsd(false);
    setPaymentSelected(false);
  };

  const handleBank = (index) => {
    if (activeImage === index) {
      setActiveImage(null);
      setShowPopup(false);
    } else {
      setActiveImage(index);
      setShowPopup(true);
    }
  };

  const handleDefaultCard = () => {
    setDefaultCard(true);
    setShowPopup(false);
  };

  const handleSuccessDefaultCard = () => {
    setSuccessDefaultCard(true);
  };

  const handleDeleteCard = () => {
    setDeleteCard(true);
    setShowPopup(false);
  };

  const handleConfirmDeleteCard = () => {
    setConfirmDeleteCard(true);
  };

  return (
    <DashBoardLayout>
      <Context cardList={cardList} />
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
            id="ExistingBankPage"
            className="w-full h-[90px] md:h-[112.29px] lg:h-[196px] md:rounded-[11.5px] rounded-[7px] md:mt-[-1px] px-[10px] lg:ml-[-20px] lg:w-[102%] 2xl:w-full 2xl:ml-0 lg:gap-[50px] pt-[10px] lg:px-[30px] lg:rounded-[20px] lg:py-[20px] pb-[16px] flex justify-between items-center"
          >
            <div className="w-[100%] pt-[19px] lg:pt-[20px] pl-[8.5px] md:pl-[9px]">
              <p className="text-[10px] mb-2 font-bold uppercase w-[110%] md:text-[14px] md:w-[70%] lg:w-[70%] lg:text-[20px] 2xl:w-[80%] 2xl:text-[24px] lg:mb-4">
                Existing bank card.
              </p>
              <p className="text-[7px] font-[400] leading-[9px] mb-3 md:text-[12px] md:leading-[12.2px] w-[90%] md:w-[65%] lg:w-[75%] 2xl:w-[85%] 2xl:mt-[5px] lg:mt-[20px] lg:text-[16px] lg:leading-[26px] 2xl:text-[20px] lg:mb-[20px]">
                The below are your existing binded bank card to fund your
                wallet.
              </p>
            </div>

            <div className="w-[91px] h-[66px] lg:w-[199px] lg:h-[199px] lg:mt-[40px]">
              <img
                src={ExistingBankPage}
                alt=""
                className="w-[55.482px] h-full md:w-[98px] md:h-[px] lg:w-[166.447px] lg:h-[150px]"
              />
            </div>
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
                    <img src={ArrowDown} alt="" className="w-full h-full" />
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

          <div className="flex items-center mt-[5%] gap-[8px] md:my-[5%] md:text-[18px] lg:text-[20px]">
            <p className="text-[#000] font-semibold text-[10px] leading-[130%] md:text-[18px] lg:text-[20px] 2xl:text-[28px]">
              Select Card
            </p>
            <img
              src={ArrowRight}
              alt=""
              className="w-[12px] h-[12px] md:w-[14.083px] md:h-[14.083px] lg:w-[24px] lg:h-[24px]"
            />
          </div>

          {noCurrencySelected && (
            <div className="flex flex-col justify-center items-center mt-[30%] md:mt-[5%]">
              <img src={NoExistingcard} alt="" className="w-[80%] md:w-[70%]" />
              <p className="text-center text-[#000000] opacity-[30%] text-[15px] md:text-[25px] lg:text-[30px] font-semibold">
                No Existing Card Found !
              </p>
            </div>
          )}

          {paymentSelected && usd ? (
            <Modal>
              <div
                className={`${
                  toggleSideBar ? "datapopup011" : "datapopup1"
                } bg-white `}
              >
                <div
                  className={`${isDarkMode ? "bg-[#000]" : "bg-[]"}
                    flex flex-col justify-center z-[100] lg:ml-[10px] items-center md:mt-[5%] lg:mt-0
                     
                    ${toggleSideBar ? "" : "xl:mt-[0%]"}`}
                >
                  <div>
                    <p className="text-[10px] text-[#04177F] text-center pt-[5%] md:pt-[0%] font-extrabold md:text-[16px] lg:text-[25px] lg:pt-[0%]">
                      This Currency is Currently Not Available.
                    </p>
                  </div>
                  <img
                    src={AddCardPopUp}
                    alt=""
                    className="currency-img mx-auto mt-[20px] md:mt-[5%] md:mx-auto w-[143px] h-[100px] lg:mx-auto lg:mt-[8%] 2xl:mt-[5%] 2xl:mx-auto"
                  />
                </div>
                <div className="mt-[30px] flex flex-col gap-[5px] pb-[5%] 2xl:mt-[1%] lg:mt-[1%] md:mt-[5%] md:pr-[10px]">
                  <p className="text-[8px] font-extrabold text-end float-right ml-[60%] md:ml-[70%] md:text-[12px] mt-[10px] lg:text-[13px] 2xl:text-[15px]">
                    Coming Soon...
                  </p>
                  <button
                    className={` ${
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

          {(localPaymentSelected || paymentSelected || walletName === "NGN") &&
            ngn && (
              <div className="mt-[5%] lg:mt-0 text-[10px] md:text-[12px] lg:text-[14px] flex flex-col gap-[10px]">
                {cardList.map((card, index) => (
                  <div
                    id="USD"
                    className="rounded-[5px] flex justify-between py-[10px] px-[10px] lg:mt-[2%]"
                    // style={{ zIndex: 10000, position: 'relative' }}
                  >
                    <div className="w-full z-0">
                      <Link
                        to={`/FundWithCard?codeValue=${encodeURIComponent(
                          `${card.code}, ${card.name}, ${card.number}, ${card.flag}`
                        )}`}
                        onClick={(e) => {
                          console.log(card.code);
                          console.log(card.flag);

                          if (paymentSelected) {
                            navigate("/FundWithCard", {
                              state: {
                                paymentSelected: true,
                                localPaymentSelected: true,
                              },
                            });
                          }

                          console.log("paymentSelected:", paymentSelected);
                        }}
                        key={index}
                        className=""
                      >
                        <div className="flex flex-row gap-[10px]">
                          <div className="mt-[%]">
                            <img
                              src={card.flag}
                              alt=""
                              className="md:h-[20px] lg:h-[30px]"
                            />
                            <p className="text-[8px] md:text-[10px] lg:text-[12px] text-center">
                              {card.short}
                            </p>
                          </div>
                          <div className="text-[#7C7C7C] text-[10px] md:text-[14px] lg:text-[20px]">
                            <p>{card.code}</p>
                            <p>{card.number}</p>
                          </div>
                        </div>
                      </Link>
                    </div>

                    <div
                      className="relative right-[5px]"
                      style={{ zIndex: 30, position: "relative" }}
                      onMouseDown={(e) => {
                        if (e.target === e.currentTarget) {
                          // Handle div click logic
                          handleBank(index);
                          setShowPayment(false);
                        }
                      }}
                      onClick={() => {
                        handleBank(index);
                        setShowPayment(false);
                      }}
                    >
                      <img
                        src={RoundArrowDown}
                        alt=""
                        className="mt-[-5%] h-[20px] md:h-[30px] lg:h-[40px]"
                      />

                      {showPopup && activeImage === index && (
                        <div
                          className="border absolute cursor-pointer bg-white top-[15px] right-[15px] w-[100px] md:top-[20px] md:right-[22px] lg:right-[30px] lg:top-[25px] h-[75px] md:h-[100px] md:w-[150px] rounded-[5px] flex flex-col justify-center items-start py-[5px]"
                          style={{
                            boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
                            zIndex: 40,
                            position: "absolute",
                          }}
                        >
                          <Link
                            to={`/FundWithCard?codeValue=${encodeURIComponent(
                              `${card.code}, ${card.name}, ${card.number}, ${card.flag}`
                            )}`}
                            onClick={(e) => {
                              console.log(card.code);
                              console.log(card.flag);
                            }}
                            key={index}
                          >
                            <div className="text-[10px] md:text-[12px] lg:text-[14px] text-[#000000] px-[5px] py-[5px] z-[10000]">
                              Fund with Card
                            </div>
                          </Link>
                          <hr className="w-full h-[5px]" />
                          <div
                            onClick={handleDefaultCard}
                            className="text-[#000000] text-[10px] md:text-[12px] lg:text-[14px] px-[5px] py-[5px] z-[10000000]"
                          >
                            Make Card Default
                          </div>
                          <hr className="w-full h-[5px]" />
                          <div
                            onClick={handleDeleteCard}
                            className="text-[#000000] text-[10px] md:text-[12px] lg:text-[14px] px-[5px] py-[5px] z-[10000]"
                          >
                            Delete Card
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                {defaultcard && (
                  <Modal>
                    <div
                      className={` ${
                        toggleSideBar ? "confirm02" : "confirm2"
                      } bg-white md:mx-auto md:my-auto lg:mx-auto lg:my-auto xl:pb-[20px] rounded-[12px]`}
                    >
                      <hr className="h-[6px] bg-[#04177f] lg:mt-[5%] border-none mt-[6%] md:mt-[6%] md:h-[10px]" />
                      <p className="text-[10px] px-[20px] md:text-[14px] lg:text-[18px] font-extrabold text-center my-[3%] lg:my-[%]">
                        Are you sure you want to make this card as your default
                        card to fund your wallet?
                      </p>
                      <div className="flex flex-col gap-[10px] justify-center items-center font-extrabold mb-[7%]">
                        <img
                          className="w-[75px] h-[80px] mx-auto mb-[2%] md:w-[140px] md:h-[140px] lg:w-[170px] lg:h-[170px] xl:w-[150px] xl:h-[150px] 2xl:h-[120px]"
                          src={DefaultCard}
                          alt="/"
                        />
                      </div>

                      <div
                        className={`flex flex-row gap-[10px] justify-center items-center w-full h-[38px] mt-[20px] md:mt-[10px] px-[20px] md:justify-center md:items-center mx-auto md:w-[80%]`}
                      >
                        <button
                          className={`bg-[#04177F] w-full flex justify-center items-center mr-auto cursor-pointer text-[14px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[40%] md:rounded-[8px] md:text-[20px] lg:text-[16px] lg:h-[38px] lg:my-[4%] xl:py-[30px]`}
                          onClick={() => {
                            handleSuccessDefaultCard();
                            setDefaultCard(false);
                          }}
                        >
                          Yes
                        </button>
                        <button
                          className={`bg-[#fff] w-full flex justify-center items-center mr-auto cursor-pointer text-[14px] font-extrabold h-[40px] text-[#F95252] rounded-[6px] md:w-[40%] md:rounded-[8px] md:text-[20px] lg:text-[16px] lg:h-[38px] lg:my-[4%]`}
                          onClick={() => {
                            setDefaultCard(false);
                          }}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </Modal>
                )}

                {sucessdefaultCard && (
                  <Modal>
                    <div
                      className={` ${
                        toggleSideBar ? "confirm02" : "confirm2"
                      } bg-white md:mx-auto pb-[20px] md:my-auto lg:mx-auto lg:my-auto rounded-[12px]`}
                    >
                      <hr className="h-[6px] bg-[#04177f] lg:mt-[5%] border-none mt-[6%] md:mt-[5%] md:h-[10px]" />
                      <p className="text-[10px] md:text-[16px] lg:text-[18px] font-extrabold text-center my-[3%] lg:my-[%]">
                        Successful
                      </p>
                      <p className="text-[10px] text-[#00AA48] md:text-[14px] px-[20px] lg:text-[18px] font-extrabold text-center my-[1%] lg:my-[%]">
                        Your card *****5488 has been set as your default card.
                      </p>
                      <div className="flex flex-col gap-[10px] justify-center items-center font-extrabold mb-[5%]">
                        <img
                          className="w-[80px] h-[80px] mx-auto mb-[2%] md:w-[130px] md:h-[130px]  lg:w-[150px] lg:h-[150px]"
                          src={SuccessGif}
                          alt="/"
                        />
                      </div>

                      <div
                        className={`w-full h-[38px] mt-[20px] px-[20px] md:mt-[10px]`}
                      >
                        <button
                          className={`bg-[#04177F] w-full flex justify-center items-center mr-auto cursor-pointer text-[14px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[40%] md:rounded-[8px] md:text-[20px] lg:text-[16px] md:mx-auto lg:h-[38px] lg:my-[4%]`}
                          onClick={() => {
                            setSuccessDefaultCard(false);
                            // window.location.reload();
                          }}
                        >
                          Done
                        </button>
                      </div>
                    </div>
                  </Modal>
                )}

                {deleteCard && (
                  <Modal>
                    <div
                      className={` ${
                        toggleSideBar ? "confirm02" : "confirm2"
                      } bg-white md:mx-auto md:my-auto lg:mx-auto lg:my-auto md:overflow-auto rounded-[12px]`}
                    >
                      <hr className="h-[6px] bg-[#04177f] lg:mt-[5%] border-none mt-[6%] md:mt-[6%] md:h-[10px]" />
                      <p className="text-[10px] px-[20px] md:text-[14px] lg:text-[18px] font-extrabold text-center my-[3%] lg:my-[%]">
                        Are you sure you want to delete this card permanently?
                      </p>
                      <div className="flex flex-col gap-[10px] justify-center items-center font-extrabold mb-[7%]">
                        <img
                          className="w-[100px] h-[100px] mx-auto mb-[2%] md:w-[150px] md:h-[150px] lg:w-[190px] lg:h-[190px] xl:w-[170px] xl:h-[170px]"
                          src={DeleteCard}
                          alt="/"
                        />
                      </div>

                      <div
                        className={`flex flex-row gap-[10px] justify-center items-center w-full h-[38px] mt-[20px] md:mt-[10px] px-[20px] md:justify-center md:items-center mx-auto md:w-[80%]`}
                      >
                        <button
                          className={`bg-[#04177F] w-full flex justify-center items-center mr-auto cursor-pointer text-[14px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[40%] md:rounded-[8px] md:text-[20px] lg:text-[16px] lg:h-[38px] lg:my-[4%]`}
                          onClick={() => {
                            handleConfirmDeleteCard();
                            setDeleteCard(false);
                          }}
                        >
                          Yes
                        </button>
                        <button
                          className={`bg-[#fff] w-full flex justify-center items-center mr-auto cursor-pointer text-[14px] font-extrabold h-[40px] text-[#F95252] rounded-[6px] md:w-[40%] md:rounded-[8px] md:text-[20px] lg:text-[16px] lg:h-[38px] lg:my-[4%]`}
                          onClick={() => {
                            setDeleteCard(false);
                          }}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </Modal>
                )}

                {confirmDeleteCard && (
                  <Modal>
                    <div
                      className={` ${
                        toggleSideBar ? "confirm02" : "confirm2"
                      } bg-white md:mx-auto pb-[20px] md:my-auto lg:mx-auto lg:my-auto rounded-[12px]`}
                    >
                      <hr className=" h-[6px] bg-[#04177f] lg:mt-[5%] border-none mt-[6%] md:mt-[5%] md:h-[10px]" />
                      <p className="text-[10px] md:text-[16px] lg:text-[18px] font-extrabold text-center my-[3%] lg:my-[%]">
                        Successful
                      </p>
                      <p className="text-[10px] text-[#04177F] md:text-[14px] px-[20px] lg:text-[18px] font-extrabold text-center">
                        Your card *****5488 has been permanently deleted. You
                        can add your card again anytime!
                      </p>
                      <div className="flex flex-col gap-[10px] justify-center items-center font-extrabold mb-[5%]">
                        <img
                          className="w-[80px] h-[80px] mx-auto mb-[2%] md:w-[130px] md:h-[130px]  lg:w-[150px] lg:h-[150px] 2xl:h-[130px] 2xl:w-[130px]"
                          src={SuccessGif}
                          alt="/"
                        />
                      </div>

                      <div
                        className={`w-full h-[38px] mt-[20px] px-[20px] md:mt-[10px]`}
                      >
                        <button
                          className={`bg-[#04177F] w-full flex justify-center items-center mr-auto cursor-pointer text-[14px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[40%] md:rounded-[8px] md:text-[20px] lg:text-[16px] md:mx-auto lg:h-[38px] lg:my-[4%]`}
                          onClick={() => {
                            setConfirmDeleteCard(false);
                            // window.location.reload();
                          }}
                        >
                          Done
                        </button>
                      </div>
                    </div>
                  </Modal>
                )}
              </div>
            )}
        </section>

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

export default ExistingCardPage;
