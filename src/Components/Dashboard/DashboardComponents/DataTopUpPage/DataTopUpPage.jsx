import React, { useState } from "react";
import "./DataTopUp.css";
import DataTopUp from "./DataTopUp-Images/DataTopUp.svg";
import DataType from "./DataTopUp-Images/DataType.svg";
import DataBundles from "./DataTopUp-Images/DataBundles.svg";
import DataRoll from "./DataTopUp-Images/DataRoll.svg";
import DataVoucher from "./DataTopUp-Images/DataVoucher.svg";
import DataSchedule from "./DataTopUp-Images/DataSchedule.svg";
import BulkData from "./DataTopUp-Images/BulkData.svg";
import InternationalData from "./DataTopUp-Images/InternationalData.svg";
import { DashBoardLayout } from "../../Layout/DashBoardLayout";
import { useContext } from "react";
import { ContextProvider } from "../../../Context";
import styles from "../../DashboardComponents/component.module.css";
import { Modal } from "../../../Screens/Modal/Modal";

const DataTopUpPage = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const showPopup = () => {
    setPopupVisible(true);
  };

  const hidePopup = () => {
    setPopupVisible(false);
  };

  const [activeBtn, setActiveBtn] = useState([true, false]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    const clickedBtn = activeBtn.map((isActive, i) => i === index);
    setActiveBtn(clickedBtn);
    setActiveIndex(index);
  };

  const resetActiveButton = () => {
    handleClick(0);
    hidePopup();
  };

  const { isDarkMode } = useContext(ContextProvider);

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
          } `}
        >
          <div
            id="DataTopUp"
            className="w-full h-[90px] md:h-[112.29px] lg:h-[196px] md:rounded-[11.5px] rounded-[7px] md:mt-[-1px] px-[15px] lg:gap-[50px] pt-[10px] lg:px-[50px] lg:rounded-[20px] lg:py-[20px] pb-[16px] flex justify-between items-center"
          >
            <div className="w-[70%] pt-[19px] lg:pt-[20px]">
              <p className="text-[10px] mb-3 font-bold uppercase md:text-[14px] md:w-[90%] lg:w-[80%] lg:text-[24px] lg:mb-4">
                TOP UP DATA BUNDLES, UNLOCK GLOBAL CONNECTIVITY WITH AREMXYPLUG.
              </p>
              <p className="text-[7px] font-[400] leading-[9px] mb-3 md:text-[9.4px] md:leading-[12.2px] w-[87%] md:w-[95%] lg:w-[105%] 2xl:w-[90%] lg:mt-[20px] lg:text-[20px] lg:leading-[26px]">
                Top up your mobile sim with our automated data bundles, receive
                instantly, enjoy discount, purchase in bulk, send to friends,
                family, team, employees, and your loved ones without any hassle
                or hidden fee.
              </p>
            </div>

            <div className="w-[91px] h-[66px] lg:w-[199px] lg:h-[199px] lg:mt-[40px]">
              <img
                src={DataTopUp}
                alt=""
                className="w-[55.482px] h-full md:w-[98px] md:h-[88px] lg:w-[166.447px] lg:h-[150px]"
              />
            </div>
          </div>

          <div className="flex gap-[10px] mt-[40px] lg:mt-[50px]">
            <p className="text-[#7C7C7C] text-[8px] font-[500] leading-[10px] md:text-[12px] md:leading-[15px] lg:text-[20px] lg:mt-[5px]">
              Select Data Type
            </p>
            <img
              src={DataType}
              alt=""
              className="w-[12px] h-[12px] md:w-[14.083px] md:h-[14.083px] lg:w-[24px] lg:h-[24px]"
            />
          </div>

          <section className="md:mt-[30px] mt-[30px] lg:mt-[50px]">
            <div className="flex gap-[30px] mt-[10px] text-[8px] font-[700] text-center border-b-[1px]">
              <p
                className={`
                text-[8px] px-[50px] rounded-[5px] py-[5px] ${
                  activeBtn[0]
                    ? "bg-[#E2F3FF] border-b-[4px] border-b-[#04177F]"
                    : ""
                } md:text-[11.736px] font-[500] lg:text-[20px]`}
                onClick={() => {
                  handleClick(0);
                }}
              >
                Local Data
              </p>

              <p
                className={`py-[5px] md:text-[11.736px] font-[500] text-[8px] ${
                  activeBtn[1]
                    ? "bg-[#E2F3FF] border-b-[4px] border-b-[#04177F]"
                    : ""
                } px-[50px] rounded-[5px] lg:text-[20px]`}
                onClick={() => {
                  handleClick(1);
                  showPopup();
                }}
              >
                International Data
              </p>
            </div>

            <div className="flex justify-between md:justify-between border-[1px] rounded-[5px] pl-[8px] pr-[20px] py-[10px] gap-[8px] shadow-sm mt-[20px] md:mt-[30px]">
              <div className="flex gap-[10px]">
                <img
                  src={DataBundles}
                  alt=""
                  className="w-[20px] h-[20px] mt-[10px] md:w-[14.736px] md:h-[14.736px] lg:w-[20px] lg:h-[20px]"
                />

                <div className="">
                  <p className="text-[8px] font-[500] md:text-[9.389px] lg:text-[16px]">
                    Data Bundles
                  </p>
                  <p className="text-[7px] font-[500] text-[#7C7C7C] w-[80%] mt-[3px] md:text-[8.244px] md:w-[100%] lg:text-[14.05px]">
                    Top up your mobile sim with our automated data bundles
                    directly from network providers.
                  </p>
                </div>
              </div>

              <img
                src={DataType}
                alt=""
                className="w-[12px] h-[12px] mt-[15px] md:w-[14.083px] md:h-[14.083px] md:mt-[10px] lg:w-[24px] lg:h-[24px]"
              />
            </div>

            <div className="flex justify-between border-[1px] rounded-[5px] pl-[8px] pr-[20px] py-[10px] gap-[px] shadow-sm mt-[20px]">
              <div className="flex gap-[10px]">
                <img
                  src={DataRoll}
                  alt=""
                  className="w-[20px] h-[20px] mt-[10px] md:w-[14.736px] md:h-[14.736px] lg:w-[20px] lg:h-[20px]"
                />

                <div className="">
                  <p className="text-[8px] font-[500] md:text-[9.389px] lg:text-[16px]">
                    Data Roll
                  </p>
                  <p className="text-[7px] font-[500] text-[#7C7C7C] w-[90%] mt-[3px] md:text-[8.244px] md:w-[100%] lg:text-[14.05px]">
                    Add, manage, and send data to your team or employees without
                    any hassle.
                  </p>
                </div>
              </div>

              <img
                src={DataType}
                alt=""
                className="w-[12px] h-[12px] mt-[15px] md:w-[14.083px] md:h-[14.083px] md:mt-[10px] lg:w-[24px] lg:h-[24px]"
              />
            </div>

            <div className="flex justify-between border-[1px] rounded-[5px] pl-[8px] pr-[20px] py-[10px] gap-[8px] shadow-sm mt-[20px]">
              <div className="flex gap-[10px]">
                <img
                  src={DataVoucher}
                  alt=""
                  className="w-[20px] h-[20px] mt-[10px] md:w-[14.736px] md:h-[14.736px] lg:w-[20px] lg:h-[20px]"
                />

                <div className="">
                  <p className="text-[8px] font-[500] md:text-[9.389px] lg:text-[16px]">
                    Data Voucher
                  </p>
                  <p className="text-[7px] font-[500] text-[#7C7C7C] w-[90%] mt-[3px] md:text-[8.244px] md:w-[100%] lg:text-[14.05px]">
                    Generate all networks data token / pins and recharge your
                    mobile sim directly using ussd codes.
                  </p>
                </div>
              </div>

              <img
                src={DataType}
                alt=""
                className="w-[12px] h-[12px] mt-[15px] md:w-[14.083px] md:h-[14.083px] md:mt-[10px] lg:w-[24px] lg:h-[24px]"
              />
            </div>

            <div className="flex justify-between border-[1px] rounded-[5px] pl-[8px] pr-[20px] py-[10px] gap-[8px] shadow-sm mt-[20px]">
              <div className="flex gap-[10px]">
                <img
                  src={DataSchedule}
                  alt=""
                  className="w-[20px] h-[20px] mt-[10px] md:w-[14.736px] md:h-[14.736px] lg:w-[20px] lg:h-[20px]"
                />

                <div className="">
                  <p className="text-[8px] font-[500] md:text-[9.389px] lg:text-[16px]">
                    Data Schedule
                  </p>
                  <p className="text-[7px] font-[500] text-[#7C7C7C] w-[85%] mt-[3px] md:text-[8.244px] md:w-[100%] lg:text-[14.05px]">
                    Schedule sending of data for automatic vending to recipients
                    at your specified date and time.
                  </p>
                </div>
              </div>

              <img
                src={DataType}
                alt=""
                className="w-[12px] h-[12px] mt-[15px] md:w-[14.083px] md:h-[14.083px] md:mt-[10px] lg:w-[24px] lg:h-[24px]"
              />
            </div>

            <div className="flex justify-between border-[1px] rounded-[5px] pl-[8px] pr-[20px] py-[10px] gap-[8px] shadow-sm mt-[20px]">
              <div className="flex gap-[10px]">
                <img
                  src={BulkData}
                  alt=""
                  className="w-[20px] h-[20px] mt-[10px] md:w-[14.736px] md:h-[14.736px] lg:w-[20px] lg:h-[20px]"
                />

                <div className="">
                  <p className="text-[8px] font-[500] md:text-[9.389px] lg:text-[16px]">
                    Bulk Data
                  </p>
                  <p className="text-[7px] font-[500] text-[#7C7C7C] w-[80%] mt-[3px] md:text-[8.244px] md:w-[100%] lg:text-[14.05px]">
                    Send data to multiple recipients at a time and receive
                    instantly without any hassle.
                  </p>
                </div>
              </div>

              <img
                src={DataType}
                alt=""
                className="w-[12px] h-[12px] mt-[15px] md:w-[14.083px] md:h-[14.083px] md:mt-[10px] lg:w-[24px] lg:h-[24px]"
              />
            </div>
          </section>

          <footer className="flex justify-center text-center gap-[15px] mt-[150px]">
            <p className="text-[7.042px] font-[500] leading-[9.1px] mt-[2px] lg:text-[12px]">
              You need help?
            </p>

            <p
              className={`bg-[#04177F] rounded-[5.1px] lg:rounded-[9px] text-white text-[4.694px] font-[500] leading-[8px] px-[9px] py-[3px] lg:text-[8px] lg:px-[15px] lg:py-[5px] ${
                isDarkMode ? "border" : "bg-[#04177f]"
              }`}
            >
              Contact Us
            </p>
          </footer>

          {/* ================Popup======================= */}
          {popupVisible && (
            <Modal>
              <div className={`md:px-[px]`}>
                <div id="PopUp" className="popup">
                  <section className="text-center flex justify-center item-center z-100">
                    <div
                      className="absolute inset-0 top-0 bottom-0 bg-[#454545] opacity-[0.15] z-100 "
                      style={{
                        position: "absolute",
                        top: -200,
                        left: -75,
                        right: -75,
                        bottom: -200,
                        backgroundColor: "#454545",
                        opacity: 0.15,
                        zIndex: 100,
                      }}
                      onClick={hidePopup}
                    ></div>
                    <div
                      className={`${
                        isDarkMode ? "bg-[#000]" : "bg-[#ffffff]"
                      } ${styles.cryptoTopUp}
                    flex flex-col justify-between z-[100] lg:mt-[446px] lg:ml-[350px] md:mt-[10px] md:ml-[200px] 2xl:mt-[350px]`}
                    >
                      <div>
                      <p className="text-[10px] text-center pt-[5%] font-extrabold md:text-[16px] lg:text-[25px] lg:pt-[3%]">
                        International Data
                      </p>
                      <p className="text-[10px] md:text-[16px] font-[600] text-[#04177F] lg:text-[16px]">
                        This Feature is Currently Not Available.
                      </p>
                      </div>
                      <img
                        src={InternationalData}
                        alt=""
                        className="mx-auto mt-[40px] md:w-[220px] md:h-[200px] md:mt-[5%] w-[143px] h-[67px] lg:w-[237.171px] lg:h-[150px]"
                      />
                      <div className="mx-[6%] flex flex-col gap-[5px] pb-[5%]">
                        <p className="text-[8px] font-extrabold text-end float-right ml-[80%] md:ml-[70%] md:text-[12px] mt-[10px] lg:text-[10px] lg:font-extrabold">
                          Coming Soon...
                        </p>
                        <button
                          className={` ${
                            isDarkMode ? "border" : "bg-[#04177f] "
                          } cursor-pointer text-white text-[10px] h-[40px] rounded-[5px] flex items-center justify-center md:mx-auto md:w-[20%] md:h-[30px] md:text-[14px] lg:my-[3%] lg:h-[40px] lg:text-[20px] lg:w-[30%] lg:mx-auto`}
                          onClick={resetActiveButton}
                          handleClick={activeIndex}
                        >
                          Okay
                        </button>
                      </div>
                      </div>
                  </section>
                </div>
              </div>
            </Modal>
          )}
        </section>
      </div>
    </DashBoardLayout>
  );
};

export default DataTopUpPage;
