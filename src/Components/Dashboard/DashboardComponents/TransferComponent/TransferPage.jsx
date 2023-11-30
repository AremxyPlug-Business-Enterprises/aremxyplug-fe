import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { useState } from "react";
import { ContextProvider } from "../../../Context";
import { DashBoardLayout } from "../../Layout/DashBoardLayout";
import styles from "../../DashboardComponents/component.module.css";
import { Modal } from "../../../Screens/Modal/Modal";

export const TransferPage = () => {
  const { isDarkMode, toggleSideBar } = useContext(ContextProvider);
  const [activeBtn, setActiveBtn] = useState([true, false]);
  const [fiatTransfer, setFiatTransfer] = useState(true);
  const [cryptoTransfer, setCryptoTransfer] = useState(false);
  const [bulkTransfer, setBulkTransfer] = useState(false);

  const handleClick = (index) => {
    const clickedBtn = activeBtn.map((isActive, i) => i === index);
    setActiveBtn(clickedBtn);
  };
  return (
    <DashBoardLayout>
      <div
        className={`${isDarkMode ? "" : ""} scroll-none mx-[%] ${
          toggleSideBar ? "" : ""
        } flex flex-col justify-between h-full`}
      >
        <div className="">
          <div className="w-full h-[90px] md:h-[112.29px] lg:h-[196px] rounded-[7px] md:rounded-[11.5px] bg-[#0DEF6C] flex px-[16px] lg:px-[50px] justify-between items-center lg:rounded-[20px]">
            <div className="py-[13px] lg:py-[40px]">
              <h2 className="text-[10px] md:text-[13.75px] font-bold mb-3 lg:text-[24px] lg:mb-4">
                SPEND GLOBALLY WITH AREMXYPLUG!
              </h2>
              <h2 className="text-[7px] md:text-[11.46px] lg:text-[20px] lg:leading-[26px] mb-3">
                Send, Receive, and Store Money Securely without any Hassle.
              </h2>
            </div>
            <div className="w-[91px] h-[66px]  lg:w-[199px] lg:h-[199px]">
              <img
                src="./Images/transferImages/transferHero.png"
                alt=""
                className="h-full"
              />
            </div>
          </div>
          <div className="flex text-[#7c7c7c] text-[10px] leading-[130%] items-center my-[10%] gap-[8px] md:my-[5%] md:text-[18px] lg:text-[20px]">
            <p>Select Transfer type </p>
            <img
              className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
              src="./Images/Dashboardimages/arrowright.png"
              alt="/"
            />
          </div>

          {/* ================Fiat and Crypto TopUp button=========== */}
          <div className="text-[8px] flex gap-[9%] md:text-[18px] lg:text-[20px]">
            <div
              onClick={() => {
                handleClick(0);
                setCryptoTransfer(false);
                setFiatTransfer(true);
              }}
              className={`font-extrabold ${
                activeBtn[0] ? "bg-[#04177f] text-white" : "bg-[#92abfe18]"
              } cursor-pointer py-[8.17px] px-[14%] rounded-tr-[5px] rounded-br-[5px] rounded-bl-[5px] md:py-[14px] md:px-[5%] md:rounded-tr-[10px] md:rounded-br-[10px] md:rounded-bl-[10px] lg:px-[3%] lg:py-[18px]`}
            >
              Fiat Transfer
            </div>
            <div
              onClick={() => {
                handleClick(1);
                // setFiatTopUp(false);
                setCryptoTransfer(true);
              }}
              className={`font-extrabold ${
                activeBtn[1] ? "bg-[#04177f] text-white" : "bg-[#92abfe18]"
              } cursor-pointer py-[8.17px] px-[14%] rounded-tr-[5px] rounded-br-[5px] rounded-bl-[5px] md:py-[14px] md:px-[5%] md:rounded-tr-[10px] md:rounded-br-[10px] md:rounded-bl-[10px] lg:px-[3%] lg:py-[18px]`}
            >
              Crypto Transfer
            </div>
          </div>

          {/* =================Transfer buttons==================== */}
          {fiatTransfer && (
            <div className="mt-[10%] flex flex-col gap-[20px] md:mt-[8%] md:gap-[30px]">
              <Link to="/to-my-account">
                <div
                  className={`${isDarkMode ? "border" : "bg-[#fff]"} ${
                    styles.toMyAcct
                  }`}
                >
                  <div className="flex gap-[5px] items-center">
                    <img
                      className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                      src="Images/Dashboardimages/tf1.png"
                      alt="/"
                    />

                    <div>
                      <p className="text-[10px] md:text-[18px]">
                        To My Account
                      </p>
                      <p className="text-[8px] text-[#7c7c7c] md:text-[16px]">
                        Transfer money from your wallets to your personal bank
                        account.
                      </p>
                    </div>
                  </div>
                  <img
                    className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                    src="./Images/Dashboardimages/arrowright.png"
                    alt="/"
                  />
                </div>
              </Link>
              <Link to="/To-other-banks">
                <div
                  className={`${isDarkMode ? "border" : "bg-[#fff]"} ${
                    styles.toMyAcct
                  }`}
                >
                  <div className="flex gap-[5px] items-center">
                    <img
                      className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                      src="Images/Dashboardimages/tf2.png"
                      alt="/"
                    />
                    <div>
                      <p className="text-[10px] md:text-[18px]">
                        To Other Banks
                      </p>
                      <p className="text-[8px] text-[#7c7c7c] md:text-[16px]">
                        Transfer money from your wallets to any bank accounts.
                      </p>
                    </div>
                  </div>
                  <img
                    className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                    src="./Images/Dashboardimages/arrowright.png"
                    alt="/"
                  />
                </div>
              </Link>
              <Link to="/to-aremxyplug">
                <div
                  className={`${isDarkMode ? "border" : "bg-[#fff]"} ${
                    styles.toMyAcct
                  }`}
                >
                  <div className="flex gap-[5px] items-center">
                    <img
                      className="w-[18px] h-[13px] md:w-[] md:h-[] lg:w-[30px] lg:h-[20px]"
                      src="Images/Dashboardimages/tf3.png"
                      alt="/"
                    />
                    <div>
                      <p className="text-[10px] md:text-[18px]">To AremxyPlug</p>
                      <p className="text-[8px] text-[#7c7c7c] md:text-[16px]">
                        Transfer money from your wallets to any AremxyPlug user.
                      </p>
                    </div>
                  </div>
                  <img
                    className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                    src="./Images/Dashboardimages/arrowright.png"
                    alt="/"
                  />
                </div>
              </Link>  
              <div
                onClick={()=> setBulkTransfer(true)}
                className={`${isDarkMode ? "border" : "bg-[#fff]"} ${
                  styles.toMyAcct
                }`}
              >
                <div className="flex gap-[5px] items-center">
                  <img
                    className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                    src="Images/Dashboardimages/tf4.png"
                    alt="/"
                  />
                  <div>
                    <p className="text-[10px] md:text-[18px]">Bulk Transfer</p>
                    <p className="text-[8px] text-[#7c7c7c] md:text-[16px]">
                      Transfer money from your wallets to multiple recipients at
                      a time.
                    </p>
                  </div>
                </div>
                <img
                  className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                  src="./Images/Dashboardimages/arrowright.png"
                  alt="/"
                />
              </div>
            </div>
          )}
        </div>

        {/* ============crypto transfer modal============= */}
        {cryptoTransfer && (
          <Modal>
            <div
              className={` mt-6 ${
                isDarkMode ? "border bg-[#000]" : "bg-[#fff]"
              } ${styles.cryptoTopUp} flex flex-col justify-between `}
            >
              <div className="text-[10px] text-center pt-[5%] text-[#04177f] font-extrabold md:text-[16px] lg:text-[25px] lg:pt-[3%]">
                This Feature is Currently Not Available.
              </div>
              <img
                className="mx-auto mt-[] w-[135px] h-[96px] md:w-[220px] md:h-[200px] md:mt-[5%] lg:w-[350px] lg:h-[280px] lg:mt-[5%]"
                src="./Images/Dashboardimages/Cryptocomingsoon.png"
                alt="/"
              />
              <div className="mx-[6%] flex flex-col gap-[5px] pb-[5%]">
                <div className="text-[8px] font-extrabold float-right ml-[80%] md:ml-[70%] md:text-[12px] lg:text-[13px] lg:ml-[80%]">
                  Coming soon...
                </div>
                <div
                  onClick={() => {
                    setCryptoTransfer(false);
                    handleClick(0);
                  }}
                  className={` ${
                    isDarkMode ? "border" : "bg-[#04177f] "
                  } cursor-pointer text-white text-[10px] h-[40px] rounded-[5px] flex items-center justify-center md:mx-auto md:w-[20%] md:h-[30px] md:text-[14px] lg:my-[3%] lg:h-[40px] lg:text-[20px] lg:w-[30%] lg:mx-auto`}
                >
                  Okay
                </div>
              </div>
            </div>
          </Modal>
        )}

        {/* ============Bulk transfer modal============= */}
        {bulkTransfer && (
          <Modal>
            <div
              className={` mt-6 ${
                isDarkMode ? "border bg-[#000]" : "bg-[#fff]"
              } ${styles.cryptoTopUp} flex flex-col justify-between `}
            >
              <div className="text-[10px] text-center pt-[4%] text-[#000] font-extrabold md:text-[16px] lg:text-[25px] lg:pt-[5%]">
                Bulk Transfer
              </div>
              <div className="text-[10px] text-center pt-[1%] pb-[2%] text-[#04177f] font-extrabold md:text-[16px] lg:text-[25px] lg:pt-[1%] lg:pb-[0%]">
                This Feature is Currently Not Available.
              </div>
              <img
                className="mx-auto mt-[] w-[90px] h-[115px] md:w-[100px] md:h-[150px] md:mt-[4%] lg:w-[150px] lg:h-[200px] lg:mt-[4%]"
                src="./Images/transferImages/messages.png"
                alt="/"
              />
              <div className="mx-[6%] flex flex-col gap-[5px] pb-[5%]">
                <div className="text-[8px] font-extrabold float-right ml-[80%] md:ml-[70%] md:text-[12px] lg:text-[13px] lg:ml-[80%]">
                  Coming soon...
                </div>
                <div
                  onClick={() => {
                    setBulkTransfer(false);
                    handleClick(0);
                  }}
                  className={` ${
                    isDarkMode ? "border" : "bg-[#04177f] "
                  } cursor-pointer text-white text-[10px] h-[40px] rounded-[5px] flex items-center justify-center md:mx-auto md:w-[20%] md:h-[30px] md:text-[14px] lg:my-[3%] lg:h-[40px] lg:text-[20px] lg:w-[30%] lg:mx-auto`}
                >
                  Okay
                </div>
              </div>
            </div>
          </Modal>
        )}

        {/* ===========Contact Us==================== */}
        <div
          className={`${
            isDarkMode ? "" : ""
          } flex gap-[15px] justify-center items-center md:mt-[38%] lg:mt-[26%] lg:mb-[%]`}
        >
          <div className="text-[10px] md:text-[12px] lg:text-[14px]">
            You need help ?
          </div>
          <Link to="/ContactUs">
            <div
              className={`${isDarkMode ? "border" : "bg-[#04177f]"} ${
                styles.contactus
              }`}
            >
              Contact Us
            </div>
          </Link>
        </div>
      </div>
    </DashBoardLayout>
  );
};
