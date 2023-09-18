import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextProvider } from "../../Context";
import styles from "./Dashboard.module.css";

export const SideBar = () => {
  const { setToggleSideBar, isDarkMode, handleClickOutside } = useContext(ContextProvider);
  const [dropDownOpen, setDropDownOpen] = useState({
    dropdown1: false,
    dropdown2: false,
    dropdown3: false,
    dropdown4: false,
    dropdown5: false,
    dropdown6: false,
  });

  const dropHandler = (dropdownName) => {
    setDropDownOpen((prevState) => ({
      dropdown1: dropdownName === "dropdown1" ? !prevState.dropdown1 : false,
      dropdown2: dropdownName === "dropdown2" ? !prevState.dropdown2 : false,
      dropdown3: dropdownName === "dropdown3" ? !prevState.dropdown3 : false,
      dropdown4: dropdownName === "dropdown4" ? !prevState.dropdown4 : false,
      dropdown5: dropdownName === "dropdown5" ? !prevState.dropdown5 : false,
      dropdown6: dropdownName === "dropdown6" ? !prevState.dropdown6 : false,
    }));
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, );

  return (
    <div
      className={`${styles.sidebar}  fixed overflow-auto ${
        isDarkMode ? "bg-[#000] border" : " bg-[#04177f]"
      } flex flex-col  justify-between  leading-normal text-white  w-[145px] h-[] rounded-tr-[11.17px] rounded-br-[11.17px] md:w-[178px] md:rounded-tr-[18px] md:rounded-br-[18px] lg:w-[300px] lg:rounded-br-[32px] lg:rounded-tr-[32px] lg:h-[100vh]`}
    >
      {/* =======Nav Bar========= */}
      <div>
        <div
          className={`border-b-[0.3px] ${
            isDarkMode ? "bg-[#000]" : "bg-[#04177f]"
          } sticky top-0 `}
        >
          <div
            className={`${styles.navSide} ${
              isDarkMode
                ? "border-b-[0.3px]"
                : "border-b-[0.3px] border-b-[#fff]"
            } flex w-[100%] gap-[45px] h-[13.97px] justify-center items-center mx-auto py-[13%] md:gap-[55px] lg:py-[15%] `}
          >
            <img
              className="w-[59px] h-[10.23px] md:h-[10px] md:w-[67px] lg:w-[125px] lg:h-[25px]"
              src="./Images/dashboardImages/aremxylogo.png"
              alt="Logo"
            />
            <img
              onClick={() => setToggleSideBar(false)}
              className="cursor-pointer w-[13.97px] h-[13.97px] md:w-[22px] md:h-[22px] lg:h-[40px] lg:w-[40px]"
              src="./Images/dashboardImages/menumenu.png"
              alt="Menu"
            />
          </div>

          <div className="px-[5%] pt-[5%] ">
            {/* ======Profile picture and name======== */}
            <div className="sticky top-0">
              <div className="flex gap-[3px] md:gap-[5px] items-center">
                <img
                  className="w-[13.97px] h-[13.97px] md:w-[22px] md:h-[22px] lg:w-[40px] lg:h-[40px]"
                  src="./Images/dashboardImages/habib.png"
                  alt="DP"
                />
                <div className="flex flex-col gap-[3px] justify-center mt-[4%]">
                  <p className="text-[8px] font-semibold md:text-[8px] lg:text-[14px]">
                    Habib Kamaldeen
                  </p>
                  <div className="flex gap-[3px] lg:gap-[5px]">
                    <div className=" rounded-[1px] px-[4px] py-[1px] font-semibold text-[6px] bg-[#b4b4b4] md:text-[6px] lg:text-[12px] lg:rounded-[2px]">
                      Verified
                    </div>
                    <div className="rounded-[1px] px-[4px] py-[1px] font-semibold text-[6px] bg-[#b4b4b4] md:text-[6px] lg:text-[12px] lg:rounded-[2px]">
                      KYCed
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ======Dashboard nav======= */}
          <Link to="/dashboard">
            <div className={styles.dashboard}>
              <img
                className="w-[8.38px] h-[8.38px] md:w-[13px] md:h-[13px] lg:h-[24px] lg:w-[24px]"
                src="./Images/dashboardImages/dashboardimg.png"
                alt="3squares"
              />
              <p className=" text-[7px] font-semibold md:text-[8px] lg:text-[14px] ">
                Dashboard
              </p>
            </div>
          </Link>
        </div>

        <div className=" flex flex-col">
          <div className=" mt-[9%] px-[8%] flex flex-col gap-[10px] ">
            {/* ========COLLECTIONS========= */}
            <div>
              <p
                className={`${styles.sidebartxt} text-[7px] md:text-[7px] lg:text-[14px] font-extrabold`}
              >
                COLLECTIONS
              </p>

              <div
                className={`${styles.sidebartxt} flex flex-col gap-[10px] text-[7px] font-semibold ml-[%] my-[7%] md:text-[8px] lg:text-[14px] lg:gap-[15px]`}
              >
                <Link
                  to={`/wallet`}
                  className="flex gap-[3.4px] items-center cursor-pointer lg:gap-[11px]"
                >
                  <img
                    className="w-[8.3px] h-[8.3px] md:w-[13.75px] md:h-[13.75px] lg:h-[24px] lg:w-[24px]"
                    src="./Images/dashboardImages/wallet.png"
                    alt="icon"
                  />
                  <p>Wallet</p>
                </Link>
                <Link to="/top-up">
                  <div className="flex gap-[3.4px] items-center cursor-pointer lg:gap-[11px]">
                    <img
                      className="w-[8.3px] h-[8.3px] md:w-[13.75px] md:h-[13.75px] lg:w-[24px] lg:h-[24px]"
                      src="./Images/dashboardImages/topup.png"
                      alt="icon"
                    />
                    <p>Top Up</p>
                  </div>
                </Link>
                <Link to="/money-transfer">
                  <div className="flex gap-[3.4px] items-center cursor-pointer lg:gap-[11px]">
                    <img
                      className="w-[8.3px] h-[8.3px] md:w-[13.75px] md:h-[13.75px] lg:w-[24px] lg:h-[24px]"
                      src="./Images/dashboardImages/transfer.png"
                      alt="icon"
                    />
                    <p>Transfer</p>
                  </div>
                </Link>
                <div
                  onClick={() => dropHandler("dropdown1")}
                  className="flex justify-between items-center"
                >
                  <div className="flex gap-[3.4px] items-center cursor-pointer lg:gap-[11px]">
                    <img
                      className="w-[8.3px] h-[8.3px] md:w-[13.75px] md:h-[13.75px] lg:w-[24px] lg:h-[24px]"
                      src="./Images/dashboardImages/transaction.png"
                      alt="icon"
                    />
                    <p>Transaction</p>
                  </div>
                </div>
              </div>
            </div>

            {/* =========PRODUCTS======== */}
            <div>
              <p
                className={`${styles.sidebartxt} text-[7px] md:text-[7px] lg:text-[14px] font-extrabold`}
              >
                PRODUCTS
              </p>

              <div
                className={`${styles.sidebartxt} flex flex-col gap-[10px] text-[7px] font-semibold ml-[%] my-[7%] md:text-[8px] lg:text-[14px] lg:gap-[15px]`}
              >
                <div
                  onClick={() => dropHandler("dropdown2")}
                  className="flex justify-between gap-[3.4px]"
                >
                  <div className="flex gap-[3.4px] items-center cursor-pointer lg:gap-[11px]">
                    <img
                      className="w-[8.3px] h-[8.3px] md:w-[13.75px] md:h-[13.75px] lg:w-[24px] lg:h-[24px]"
                      src="./Images/dashboardImages/telecom.png"
                      alt="icon"
                    />
                    <p>Telecom</p>
                  </div>
                  {!dropDownOpen.dropdown2 ? (
                    <img
                      className="h-[8.3px] w-[8.3px] lg:w-[24px] lg:h-[24px]"
                      src="./Images/dashboardImages/arrow-down.png"
                      alt="dropdown"
                    />
                  ) : (
                    <img
                      className="h-[8.3px] w-[8.3px] lg:w-[24px] lg:h-[24px]"
                      src="./Images/dashboardImages/arrow-up.png"
                      alt="dropup"
                    />
                  )}
                </div>
                {dropDownOpen.dropdown2 && (
                  <ul className=" mt-[-5px] rounded-[2.5px]  bg-[#f2faff10] w-[100px] md:top-[36.5%] md:w-[114px] lg:w-[220px] lg:rounded-[6px] lg:top-[36.5%]">
                    <li className="flex gap-[5%] hover:underline text-[#fff] pt-1 pb-1 font-medium md:text-[8px] lg:pt-[6%] lg:pb-[6%] lg:pl-[%] lg:text-[14px] ">
                      <img
                        className="w-[8.5px] h-[8.5px] md:w-[13.75px] md:h-[13.75px] lg:w-[24px] lg:h-[24px]"
                        src="./Images/dashboardImages/sideArrow.png"
                        alt="/"
                      />
                      <Link to={"/airtime-topup"}>Airtime Top-up</Link>
                    </li>
                    <li className="flex gap-[5%] hover:underline text-[#fff] pt-1 pb-1 font-medium md:text-[8px] lg:pt-[6%] lg:pb-[6%] lg:pl-[%] lg:text-[14px] ">
                      <img
                        className="w-[8.5px] h-[8.5px] md:w-[13.75px] md:h-[13.75px] lg:w-[24px] lg:h-[24px]"
                        src="./Images/dashboardImages/sideArrow.png"
                        alt="/"
                      />
                      <div>Data Top-up</div>
                    </li>
                    <li className="flex gap-[5%] hover:underline text-[#fff] pt-1 pb-1  font-medium md:text-[8px] lg:pt-[6%] lg:pb-[6%] lg:pl-[%] lg:text-[14px] ">
                      <img
                        className="w-[8.5px] h-[8.5px] md:w-[13.75px] md:h-[13.75px] lg:w-[24px] lg:h-[24px]"
                        src="./Images/dashboardImages/sideArrow.png"
                        alt="/"
                      />
                      <div>Education pins</div>
                    </li>
                    <li className="flex gap-[5%] hover:underline text-[#fff] pt-1 pb-1 font-medium md:text-[8px] lg:pt-[6%] lg:pb-[6%] lg:pl-[%] lg:text-[14px] ">
                      <img
                        className="w-[8.5px] h-[8.5px] md:w-[13.75px] md:h-[13.75px] lg:w-[24px] lg:h-[24px]"
                        src="./Images/dashboardImages/sideArrow.png"
                        alt="/"
                      />
                      <div>Tv Subscription</div>
                    </li>
                    <li className="flex gap-[5%] hover:underline text-#fff] pt-1 pb-1 font-medium md:text-[8px] lg:pt-[6%] lg:pb-[6%] lg:pl-[%] lg:text-[14px] ">
                      <img
                        className="w-[8.5px] h-[8.5px] md:w-[13.75px] md:h-[13.75px] lg:w-[24px] lg:h-[24px]"
                        src="./Images/dashboardImages/sideArrow.png"
                        alt="/"
                      />
                      <div>Electricity Bills</div>
                    </li>
                    <li className="flex gap-[5%] hover:underline text-[#fff] pt-1 pb-1 font-medium md:text-[8px] lg:pt-[6%] lg:pb-[6%] lg:pl-[%] lg:text-[14px] ">
                      <img
                        className="w-[8.5px] h-[8.5px] md:w-[13.75px] md:h-[13.75px] lg:w-[24px] lg:h-[24px]"
                        src="./Images/dashboardImages/sideArrow.png"
                        alt="/"
                      />
                      <div>Airtime Conversion</div>
                    </li>
                    <li className="flex gap-[5%] hover:underline text-[#fff] pt-1 pb-1 font-medium md:text-[8px] lg:pt-[6%] lg:pb-[6%] lg:pl-[%] lg:text-[14px] ">
                      <img
                        className="w-[8.5px] h-[8.5px] md:w-[13.75px] md:h-[13.75px] lg:w-[24px] lg:h-[24px]"
                        src="./Images/dashboardImages/sideArrow.png"
                        alt="/"
                      />
                      <div>Bulk SMS</div>
                    </li>
                    <li className="flex gap-[5%] hover:underline text-[#fff] pt-1 pb-1 font-medium md:text-[8px] lg:pt-[6%] lg:pb-[6%] lg:pl-[%] lg:text-[14px] ">
                      <img
                        className="w-[8.5px] h-[8.5px] md:w-[13.75px] md:h-[13.75px] lg:w-[24px] lg:h-[24px]"
                        src="./Images/dashboardImages/sideArrow.png"
                        alt="/"
                      />
                      <div>Recharge Card Printing</div>
                    </li>
                  </ul>
                )}

                <div
                  onClick={() => dropHandler("dropdown3")}
                  className="flex gap-[3.5px] items-center cursor-pointer justify-between"
                >
                  <div className="flex gap-1 lg:gap-[11px]">
                    <img
                      className="w-[8.3px] h-[8.3px] md:w-[13.75px] md:h-[13.75px] lg:w-[24px] lg:h-[24px]"
                      src="./Images/dashboardImages/payments.png"
                      alt="icon"
                    />
                    <p>Payments</p>
                  </div>
                  {!dropDownOpen.dropdown3 ? (
                    <img
                      className="h-[8.3px] w-[8.3px] lg:w-[24px] lg:h-[24px]"
                      src="./Images/dashboardImages/arrow-down.png"
                      alt="dropdown"
                    />
                  ) : (
                    <img
                      className="h-[8.3px] w-[8.3px] lg:w-[24px] lg:h-[24px]"
                      src="./Images/dashboardImages/arrow-up.png"
                      alt="dropdown"
                    />
                  )}
                </div>
                {dropDownOpen.dropdown3 && (
                  <ul className=" mt-[px] rounded-[2.5px]  bg-[#f2faff19] w-[100px] md:top-[42%] md:w-[114px] lg:rounded-[6px] lg:top-[41.5%] lg:w-[220px]">
                    <li className="flex gap-[5%] hover:underline text-[#fff] pt-1 pb-1 font-medium md:text-[8px] lg:pt-[6%] lg:pb-[6%] lg:pl-[%] lg:text-[14px] ">
                      <img
                        className="w-[8.5px] h-[8.5px] md:w-[13.75px] md:h-[13.75px] lg:w-[24px] lg:h-[24px]"
                        src="./Images/dashboardImages/sideArrow.png"
                        alt="/"
                      />
                      <div>Wallets</div>
                    </li>
                    <li className="flex gap-[5%] hover:underline text-[#fff] pt-1 pb-1 font-medium md:text-[8px] lg:pt-[6%] lg:pb-[6%] lg:pl-[%] lg:text-[14px] ">
                      <img
                        className="w-[8.5px] h-[8.5px] md:w-[13.75px] md:h-[13.75px] lg:w-[24px] lg:h-[24px]"
                        src="./Images/dashboardImages/sideArrow.png"
                        alt="/"
                      />
                      <div>Virtual Accounts</div>
                    </li>
                    <Link to="/money-transfer">
                      <li className="flex gap-[5%] hover:underline text-[#fff] pt-1 pb-1 font-medium md:text-[8px] lg:pt-[6%] lg:pb-[6%] lg:pl-[%] lg:text-[14px] ">
                        <img
                          className="w-[8.5px] h-[8.5px] md:w-[13.75px] md:h-[13.75px] lg:w-[24px] lg:h-[24px]"
                          src="./Images/dashboardImages/sideArrow.png"
                          alt="/"
                        />
                        <div>Money Transfer</div>
                      </li>
                    </Link>
                    <li className="flex gap-[5%] hover:underline text-[#fff] pt-1 pb-1 font-medium md:text-[8px] lg:pt-[6%] lg:pb-[6%] lg:pl-[%] lg:text-[14px] ">
                      <img
                        className="w-[8.5px] h-[8.5px] md:w-[13.75px] md:h-[13.75px] lg:w-[24px] lg:h-[24px]"
                        src="./Images/dashboardImages/sideArrow.png"
                        alt="/"
                      />
                      <div>Card Payments</div>
                    </li>
                    <li className="flex gap-[5%] hover:underline text-[#fff] pt-1 pb-1 font-medium md:text-[8px] lg:pt-[6%] lg:pb-[6%] lg:pl-[%] lg:text-[14px] ">
                      <img
                        className="w-[8.5px] h-[8.5px] md:w-[13.75px] md:h-[13.75px] lg:w-[24px] lg:h-[24px]"
                        src="./Images/dashboardImages/sideArrow.png"
                        alt="/"
                      />
                      <div>International Payments</div>
                    </li>
                  </ul>
                )}

                <div
                  onClick={() => dropHandler("dropdown4")}
                  className="flex justify-between"
                >
                  <div className="flex items-center gap-[3.4px] cursor-pointer lg:gap-[11px]">
                    <img
                      className="w-[8.3px] h-[8.3px] md:w-[13.75px] md:h-[13.75px] lg:w-[24px] lg:h-[24px]"
                      src="./Images/dashboardImages/cardissuing.png"
                      alt="icon"
                    />
                    <p>Card Issuing</p>
                  </div>
                  {!dropDownOpen.dropdown4 ? (
                    <img
                      className="h-[8.3px] w-[8.3px] lg:w-[24px] lg:h-[24px]"
                      src="./Images/dashboardImages/arrow-down.png"
                      alt="dropdown"
                    />
                  ) : (
                    <img
                      className="h-[8.3px] w-[8.3px] lg:w-[24px] lg:h-[24px]"
                      src="./Images/dashboardImages/arrow-up.png"
                      alt="dropdown"
                    />
                  )}
                </div>
                {dropDownOpen.dropdown4 && (
                  <ul className=" mt-[px] rounded-[2.5px]  bg-[#f2faff19] w-[100px] md:top-[42%] md:w-[114px] lg:rounded-[6px] lg:top-[41.5%] lg:w-[220px]">
                    <li className="flex gap-[5%] hover:underline text-[#fff] pt-1 pb-1 font-medium md:text-[8px] lg:pt-[6%] lg:pb-[6%] lg:pl-[%] lg:text-[14px] ">
                      <img
                        className="w-[8.5px] h-[8.5px] md:w-[13.75px] md:h-[13.75px] lg:w-[24px] lg:h-[24px]"
                        src="./Images/dashboardImages/sideArrow.png"
                        alt="/"
                      />
                      <div>Virtual USD Card</div>
                    </li>
                    <li className="flex gap-[5%] hover:underline text-[#fff] pt-1 pb-1 font-medium md:text-[8px] lg:pt-[6%] lg:pb-[6%] lg:pl-[%] lg:text-[14px] ">
                      <img
                        className="w-[8.5px] h-[8.5px] md:w-[13.75px] md:h-[13.75px] lg:w-[24px] lg:h-[24px]"
                        src="./Images/dashboardImages/sideArrow.png"
                        alt="/"
                      />
                      <div>Virtual NGN Card</div>
                    </li>
                    <li className="flex gap-[5%] hover:underline text-[#fff] pt-1 pb-1 font-medium md:text-[8px] lg:pt-[6%] lg:pb-[6%] lg:pl-[%] lg:text-[14px] ">
                      <img
                        className="w-[8.5px] h-[8.5px] md:w-[13.75px] md:h-[13.75px] lg:w-[24px] lg:h-[24px]"
                        src="./Images/dashboardImages/sideArrow.png"
                        alt="/"
                      />
                      <div>Physical USD Card</div>
                    </li>
                    <li className="flex gap-[5%] hover:underline text-[#fff] pt-1 pb-1 font-medium md:text-[8px] lg:pt-[6%] lg:pb-[6%] lg:pl-[%] lg:text-[14px] ">
                      <img
                        className="w-[8.5px] h-[8.5px] md:w-[13.75px] md:h-[13.75px] lg:w-[24px] lg:h-[24px]"
                        src="./Images/dashboardImages/sideArrow.png"
                        alt="/"
                      />
                      <div>Physical NGN Card</div>
                    </li>
                  </ul>
                )}
                <div className="flex gap-[3.4px] cursor-pointer lg:gap-[11px]">
                  <img
                    className="w-[8.3px] h-[8.3px] md:w-[13.75px] md:h-[13.75px] lg:w-[24px] lg:h-[24px]"
                    src="./Images/dashboardImages/digitalServices.png"
                    alt="icon"
                  />
                  <p>Digital Services</p>
                </div>
                <div className="flex gap-[3.4px] cursor-pointer lg:gap-[11px]">
                  <img
                    className="w-[8.3px] h-[8.3px] md:w-[13.75px] md:h-[13.75px] lg:w-[24px] lg:h-[24px]"
                    src="./Images/dashboardImages/vtuDevelopment.png"
                    alt="icon"
                  />
                  <p>VTU Development</p>
                </div>
                <div className="flex gap-[3.4px] cursor-pointer items-center lg:gap-[11px]">
                  <img
                    className="w-[8.3px] h-[8.3px] md:w-[13.75px] md:h-[13.75px] lg:w-[24px] lg:h-[24px]"
                    src="./Images/dashboardImages/businessdev.png"
                    alt="icon"
                  />
                  <p>Business Development</p>
                </div>
              </div>
            </div>

            {/* =======FEATURES======== */}
            <div>
              <p
                className={`${styles.sidebartxt} text-[7px] md:text-[7px] lg:text-[14px] font-extrabold`}
              >
                FEATURES
              </p>

              <div
                className={`${styles.sidebartxt} flex flex-col gap-[10px] text-[7px] font-semibold ml-[%] my-[7%] md:text-[8px] lg:text-[14px] lg:gap-[15px]`}
              >
                <div className="flex gap-[3.4px] cursor-pointer lg:gap-[11px]">
                  <img
                    className="w-[8.3px] h-[8.3px] md:w-[13.75px] md:h-[13.75px] lg:w-[24px] lg:h-[24px]"
                    src="./Images/dashboardImages/productPricing.png"
                    alt="icon"
                  />
                  <p>Product Pricing</p>
                </div>
                <div
                  onClick={() => dropHandler("dropdown5")}
                  className="flex justify-between"
                >
                  <div className="flex gap-[3.4px] items-center cursor-pointer lg:gap-[11px]">
                    <img
                      className="w-[8.3px] h-[8.3px] md:w-[13.75px] md:h-[13.75px] lg:w-[24px] lg:h-[24px]"
                      src="./Images/dashboardImages/accountUpgrade.png"
                      alt="icon"
                    />
                    <p>Account Upgrade</p>
                  </div>
                </div>
                <div
                  onClick={() => dropHandler("dropdown6")}
                  className="flex justify-between"
                >
                  <div className="flex gap-[3.4px] items-center cursor-pointer lg:gap-[11px]">
                    <img
                      className="w-[8.3px] h-[8.3px] md:w-[13.75px] md:h-[13.75px] lg:w-[24px] lg:h-[24px]"
                      src="./Images/dashboardImages/referrals.png"
                      alt="icon"
                    />
                    <p>My Referrals</p>
                  </div>
                </div>
                <div className="flex gap-[3.4px] cursor-pointer lg:gap-[11px]">
                  <img
                    className="w-[8.3px] h-[8.3px] md:w-[13.75px] md:h-[13.75px] lg:w-[24px] lg:h-[24px]"
                    src="./Images/dashboardImages/profileSettings.png"
                    alt="icon"
                  />
                  <p>Profile Settings</p>
                </div>
                <div className="flex gap-[3.4px] cursor-pointer lg:gap-[11px]">
                  <img
                    className="w-[8.3px] h-[8.3px] md:w-[13.75px] md:h-[13.75px] lg:w-[24px] lg:h-[24px]"
                    src="./Images/dashboardImages/developersApi.png"
                    alt="icon"
                  />
                  <p>Develop's API </p>
                </div>
                <div className="flex gap-[3.4px] cursor-pointer lg:gap-[11px]">
                  <img
                    className="w-[8.3px] h-[8.3px] md:w-[13.75px] md:h-[13.75px] lg:w-[24px] lg:h-[24px]"
                    src="./Images/dashboardImages/contactSupport.png"
                    alt="icon"
                  />
                  <p>Contact Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ===========Logout========= */}

      <div
        className={`${styles.logout} pl-[5%] mt-[%] border-t-[0.3px] ml-[%] flex gap-[4%] md:mt-[%] md:border-t-[1.5px] py-[10%] lg:pb-[10%] lg:text-[14px]`}
      >
        <img
          className="w-[11px] h-[11px] md:w-[13.75px] md:h-[13.75px] lg:w-[24px] lg:h-[24px]"
          src="/Images/dashboardImages/logout.png"
          alt="logout"
        />
        <p
          className={`${styles.logouttxt} cursor-pointer text-[7px] md:text-[7px] lg:text-[14px]`}
        >
          <Link to="/Login">Logout</Link>
        </p>
      </div>
    </div>
  );
};
