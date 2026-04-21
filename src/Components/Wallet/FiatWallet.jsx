import React, { useContext, useEffect, useState } from "react";
import { DashBoardLayout } from "../Dashboard/Layout/DashBoardLayout";
import { Link } from "react-router-dom";
import { BsEyeFill } from "react-icons/bs";
import CurrencyConversionModal from "../CurrencyConversion/CurrencyConversionModal";
import ImageCurrencyNotAvailable from "../Add&SelectRecipient/RecipientImages/CurrencyNotAvaliable.svg";
import { Modal } from "../Screens/Modal/Modal";
import { ContextProvider } from "../Context";
import { GetFunction, HandleUserSession } from "../ApiCollection.jsx/ApiBuck";
import { Loader } from "../Loader/Loader";
const FiatWallet = () => {
  const [showModal, setShowModal] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [currentId, setCurrentId] = useState(null);
 // const [selection, setSelection] = useState("");
  const [currencyNotAvailable, setCurrencyNotAvailable] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const {
    // isDarkMode,
    newBalance,
    setNewBalance, setNetworkIssue
  } = useContext(ContextProvider);

  const [loading, setLoading] = useState(false);
  const [passDataBalance, setPassDataBalance] = useState({});
  const [sessionModal, setSessionModal] = useState(false);

  useEffect(() => {
    const GetBalance = async () => {
     
      const FailedHandler = async (ErrorType) => {
        if (ErrorType === "unauthoriesed") {
          await GetFunction(
            "balance",
            setLoading,
            ()=> {},
            (ErrorType) => {
              if (ErrorType === "unauthorised") {
                setSessionModal(true);
              }
            },
            setPassDataBalance, setNetworkIssue
          );
        }
      };
      await GetFunction(
        "balance",
        setLoading,
        ()=> {},
        FailedHandler,
        setPassDataBalance,
        setNetworkIssue
      );
    };
    // Simulate async data loading

    if (newBalance === "" || newBalance === null || newBalance === undefined) {
      GetBalance();
      if (GetBalance && passDataBalance?.data) {
        setNewBalance(passDataBalance?.data?.data?.data?.balance);
      }
    }
    //eslint-disable-next-line
  }, []);
  const updateBalance = passDataBalance?.data
    ? passDataBalance?.data?.data?.data?.balance
    : "";
  const cleanUpBalanceToNumericOnly = Number(updateBalance?.replace(/\D/g, ""));
  const balanceStringToNum = Number(newBalance);

  const countryList = [
    {
      id: 1,
      name: "Nigeria",
      code: "NGN",
      flag: require("./Images/ng.svg").default,
      balance :     `(${
                          newBalance === "" || newBalance === null
                            ? `${
                                cleanUpBalanceToNumericOnly > 1
                                  ? cleanUpBalanceToNumericOnly?.toLocaleString(
                                      "en-NG",
                                      {
                                        style: "currency",
                                        currency: "NGN",
                                      }
                                    )
                                  : "₦"
                              }`
                            : `${
                                balanceStringToNum > 1
                                  ? balanceStringToNum?.toLocaleString(
                                      "en-NG",
                                      {
                                        style: "currency",
                                        currency: "NGN",
                                      }
                                    )
                                  : "₦"
                              }`
                        })`
    },
    {
      id: 2,
      name: "United States",
      code: "USD",
      flag: require("./Images/us.svg").default,
      balance : "($0.00)"
    },
    {
      id: 3,
      name: "United Kingdom",
      code: "GBP",
      flag: require("./Images/gb.svg").default,
      balance : "(€0.00)"
    },
    {
      id: 4,
      name: "European Union",
      code: "EUR",
      flag: require("./Images/eu.svg").default,
      balance : "(£0.00)"
    },
    {
      id: 5,
      name: "Australia",
      code: "AUD",
      flag: require("./Images/au.svg").default,
      balance : "(AU$0.00)"
    },
    {
      id: 6,
      name: "Kenya",
      code: "KSH",
      flag: require("./Images/ke.svg").default,
      balance : "(KSh0.00)"
    },
  ];

  const handleSelection = () => {
  //  setSelection(value);
    setShowModal(true);
  };

  const displayMoney = (index) => {
    setCurrentId(index);
    setClicked(!clicked);
  };

  const refresh = () => {
    window.location.reload();
  };

  const closeModal = () => {
    setShowModal(false);
  };
  // check if the countries in the list is among the already existing countries

  return (
    <DashBoardLayout>
      <div className="flex flex-col justify-between h-full">
        <div>
          <div className="w-full h-[90px] md:h-[112.29px] lg:h-[196px] rounded-[7px] md:rounded-[11.5px] bg-[#ff4343]/[0.5] flex px-[16px] lg:px-[50px] justify-between items-center lg:rounded-[20px]">
            <div className="py-[13px] lg:py-[40px]">
              <h2 className="text-[8px] md:text-[13.75px] md:leading-[20.63px] font-bold mb-2 lg:text-[24px] lg:mb-4">
                FIAT WALLETS
              </h2>
              <h2 className='text-[7px] md:text-[11.46px] lg:text-[20px] lg:leading-[26px] mb-3"'>
                The below Fiat Currency Wallets are reserved for your account
                only.
              </h2>
            </div>
            <div className="h-[66px] lg:h-[170px]">
              <img
                src="./Images/wallet/fiatBanner.png"
                alt=""
                className="h-full"
              />
            </div>
          </div>
          <div className="md:mt-9 mt-8 lg:mt-14 flex items-center w-full gap-[28px]">
            <div className="w-[60%] lg:w-[65%] h-[22px] md:h-[25px] lg:h-[51px]">
              <div className="w-full relative">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(event) => setInputValue(event.target.value)}
                  placeholder="Search for Wallets, e.g; NGN or Nigeria"
                  className="text-[7px] leading-[10.5px] p-[4px] md:text-[9.17px] md:leading-[11.97px] w-full h-full outline-none placeholder:text-[7px] placeHolder:leading-[10.5px] rounded-[4px] border block px-1 md:placeholder:text-[9.17px] lg:placeholder:text-base lg:placeholder:leading-[20px] lg:rounded-[12px] lg:text-base lg:leading-[20px] lg:p-3"
                />
                <div className="absolute right-[4px] bottom-[3px] lg:right-[7px] lg:bottom-[10px] w-[12px] h-[12px] md:w-[11.46px] md:h-[11.46px] md:bottom-1 lg:w-[20px] lg:h-[20px]">
                  <img
                    src="./Images/wallet/search-status.svg"
                    alt="searchIcon"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
            <div
              className="w-[40%] lg:w-[35%] border flex h-[20px] md:h-[23px] lg:h-[48px] rounded-[4px] items-center justify-between px-1 lg:rounded-[12px] lg:px-3 cursor-pointer"
              onClick={refresh}
            >
              <button className="text-[7px] leading-[10.5px] block md:text-[9.17px] lg:rounded-[12px] lg:text-base lg:leading-[20px] h-full">
                Refresh Wallet Balances
              </button>
              <div className="w-[12px] h-[12px] md:w-[11.46px] md:h-[11.46px] lg:w-[20px] lg:h-[20px]">
                <img
                  src="./Images/wallet/refresh-square-2.svg"
                  alt="searchIcon"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="  md:mt-9 mt-8 lg:mt-14 flex items-center w-full justify-between gap-[10px] lg:gap-[15px]">
            {/* ADD MONEY BUTTON */}
            <Link
              to="/top-up"
              className="bg-primary text-white rounded-[4px] md:rounded-[12px] flex items-center 
            justify-center py-[10px] w-1/3"
            >
              <div className="mr-1 w-[11.38px] h-[11.38px] md:w-[19.48px] md:h-[19.48px] lg:w-[34px] lg:h-[34px]">
                <img
                  src="./Images/wallet/card-add.png"
                  alt=""
                  className="object-cover w-full"
                />
              </div>
              <h2
                className="text-white font-[400] md:font-[500] text-[10px] leading-[14.5px] lg:text-[16px]
                md:text-[11px] md:leading-[16.75px] lg:leading-[24px]"
              >
                Add Money
              </h2>
            </Link>
            {/* ADD WALLET BUTTON  */}
            <button
              className="bg-primary text-white  rounded-[4px] md:rounded-[7px] flex items-center 
              justify-center py-[10px] w-1/3 lg:py-[10px]"
              onClick={() => setCurrencyNotAvailable(true)}
            >
              <div className="mr-1 w-[11.38px] h-[11.38px] md:w-[19.48px] md:h-[19.48px] lg:w-[34px] lg:h-[34px]">
                <img
                  src="./Images/wallet/wallet-add.png"
                  alt=""
                  className="object-cover w-full"
                />
              </div>
              <h2
                className="text-white text-[10px] leading-[14.5px] lg:text-[16px]
                md:text-[11px] md:leading-[16.75px] lg:leading-[24px] font-[400] md:font-[500]"
              >
                Add Wallets
              </h2>
            </button>

            {/* CONVERT CURRENCY BUTTON */}
            <button
              onClick={() => {
                setCurrencyNotAvailable(true);
              }}
              className="bg-primary text-white 
                rounded-[4px] md:rounded-[7px] flex
                  items-center  justify-center
                   py-[10px] w-1/3 lg:py-[10px]"
            >
              <div
                className="mr-1 w-[11px] h-[11px]  md:w-[19.48px] md:h-[19.48px] 
                lg:w-[34px] lg:h-[34px] flex items-center"
              >
                <img
                  src="./Images/wallet/recovery-convert.png"
                  alt=""
                  className=" w-full h-full object-cover"
                />
              </div>
              <h2
                className="text-white text-[10px] leading-[14.5px] lg:text-[16px]
                md:text-[11px] md:leading-[16.75px] lg:leading-[24px] font-[400] md:font-[500]"
              >
                Convert Currency
              </h2>
            </button>
          </div>
          <div
            className="mt-[25.39px] md:mt-[35px] lg:mt-[60px] px-2 py-2 flex flex-col gap-2"
            style={{
              boxShadow: `0px 0px 6.666667461395264px 0px rgba(0, 0, 0, 0.25)`,
            }}
          >
            <div
              className="flex justify-between items-baseline font-bold border-b
               py-4 lg:text-[16px] lg:leading-[24px]"
            >
              <h2 className=" text-[13px] font-bold md:text-[14.5px] md:font-[500]">
                Country
              </h2>
              <h2 className="text-[13px] font-bold md:text-[14.5px] md:font-[500]">
                Currency
              </h2>
              <h2 className="text-[13px] font-bold md:text-[14.5px] md:font-[500]">
                Balance
              </h2>
            </div>
            <div className="flex flex-col gap-2">
              {countryList.map((country) => (
                <div
                  className={`${
                    country.name
                      .toLowerCase()
                      .startsWith(inputValue.toLowerCase()) ||
                    country.code
                      .toLowerCase()
                      .startsWith(inputValue.toLowerCase())
                      ? "grid"
                      : "hidden"
                  } grid-cols-3 text-[7px] leading-[10.5px] pb-[8px] md:text-[10px] md:leading-[15px] border-b last:border-b-0 last:pb-0 lg:text-[16px] lg:leading-[24px] cursor-pointer lg:pb-3 lg:pt-2`}
                  key={country.id}
                >
                  <div className="flex items-center">
                    <h2 className="text-slate-400 text-[12px] font-[400] md:text-[13px] md:font-[500]">
                      {country.name}
                    </h2>
                  </div>
                  <Link
                    to={country.name === "Nigeria" ? "/new-wallet" : false}
                    className="flex gap-1 items-center justify-center lg:gap-2"
                    onClick={() => {
                      handleSelection(country.name);
                      if (country.name !== "Nigeria") {
                        setShowModal(true);
                      }
                    }}
                  >
                    <div className="w-[10px] h-[35px] md:w-[15px] md:h-[15px] lg:w-[20px] lg:h-[20px] rounded-full overflow-hidden flex items-center justify-center">
                      <img
                        src={country.flag}
                        alt=""
                        className="h-[24px] w-[24px] md:w-[30px] md:h-[30px]"
                      />
                    </div>
                    <h2 className="text-right text-[12px] font-[400] md:text-[13px] md:font-[500]">
                      {country.code}
                    </h2>
                  </Link>
                  <div className="flex gap-1 justify-end items-center text-slate-400">
                    {currentId === country.id && clicked ? (
                      <h2 className="text-[12px] font-[400] md:text-[14px] md:font-[500]">
                        {country.code}
                       {country.balance}
                      </h2>
                    ) : (
                      <h2>*****</h2>
                    )}
                    <button onClick={() => displayMoney(country.id)}>
                      <BsEyeFill className="text-[#92abfe]" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t -mx-2 px-2 text-right pt-1 md:pt-2 lg:pt-3 lg:pb-2 flex justify-end cursor-pointer gap-2 items-center">
              <div className="text-[7px] leading-[10.5px] md:text-[10px] md:leading-[15px] lg:text-[15px] lg:leading-[22.5px] flex items-center gap-1">
                <span>{"<"}</span>
                <h2>1</h2>
                <h2>2</h2>
                <h2>3</h2>
                <h2>4</h2>
                <h2>5</h2>
                <h2>6</h2>
                <span>{">"}</span>
              </div>
              <div className="border text-[7px] md:text-[10px] md:leading-[15px] leading-[10.5px] lg:text-[15px] lg:leading-[22.5px] p-[3px] rounded-[4px]">
                <h2>10</h2>
              </div>
              <h2 className="text-[7px] leading-[10.5px] md:text-[10px] md:leading-[15px] lg:text-[15px] lg:leading-[22.5px]">
                Goto
              </h2>
              <div className="border text-[7px] leading-[10.5px] p-[3px] rounded-[4px] md:text-[10px] md:leading-[15px] lg:text-[15px] lg:leading-[22.5px]">
                <h2>10</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-2 justify-center items-center md:mt-40">
          <h2 className="text-[8px] leading-[12px] lg:text-[12px]">
            You need help?
          </h2>
          <Link
            to={`/ContactUs`}
            className="text-[7px] leading-[10.5px] text-white bg-primary px-2 py-1 rounded-full lg:text-[8px]"
          >
            Contact Us
          </Link>
        </div>
      </div>
      {currencyNotAvailable && (
        <Modal>
          <div
            className="h-[100%] w-[100%] md:justify-center flex 
              items-center  md:mx-[0px] mx-[19px]"
          >
            <div
              className="flex flex-col  lg:w-[38%] md:w-[45%] h-[269px]  w-[100%] lg:h-[420px] bg-white lg:rounded-[20px]
          shadow-[0px_0px_6.933px_0px_rgba(0,0,0,0.25)] md:rounded-[7.153px] rounded-[8px]
          md:shadow-[0px_0px_11.922px_0px_rgba(0, 0, 0, 0.25)] 
          lg:shadow-[0px_0px_20px_0px_rgba(0,0,0,0.25)] lg:py-[23px] lg:px-[0px] py-[10px] px-[24px]"
            >
              <div
                className="flex flex-col lg:w-[100%] lg:gap-[20px] gap-[10px]  justify-between 
           items-center h-[100%]"
              >
                <h2 className="font-[600] text-[#04177F] text-center text-[10px] leading-[14px] lg:text-[16.647px] lg:leading-[24px]">
                  This Feature is Currently Not Available.
                </h2>
                <img
                  src={ImageCurrencyNotAvailable}
                  alt=""
                  className="lg:w-[217.263px] lg:h-[187.283px] h-[100px] w-[100px]"
                />

                <div
                  className="flex flex-col-reverse md:flex-row lg:gap-[125px] md:gap-[60px] w-[100%] 
  justify-end gap-[20px] lg:pr-[30px]"
                >
                  <button
                    onClick={() => {
                      setCurrencyNotAvailable(false);
                    }}
                    className="bg-[#04177F] w-[100%] lg:py-[10px] md:py-[9px] py-[13px] md:w-[97.02px]
 text-white text-center rounded-[4.41px]
 lg:rounded-[12px] font-[600] lg:text-[16px] lg:leading-[24px]"
                  >
                    Okay
                  </button>
                  <p
                    className="font-[600] text-center text-[10px] leading-[14px] 
lg:text-[16px] lg:leading-[24px] md:self-start self-end"
                  >
                    Coming Soon...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
      {showModal && (
        <CurrencyConversionModal
          title="Fiat Wallet"
          tag="This Currency is currently not available"
          onClick={closeModal}
          image="./Images/wallet/businessAccount.png"
        />
      )}
      {loading && (
        <Modal>
          <Loader />
        </Modal>
      )}
      {sessionModal && <HandleUserSession />}
    </DashBoardLayout>
  );
};

export default FiatWallet;
