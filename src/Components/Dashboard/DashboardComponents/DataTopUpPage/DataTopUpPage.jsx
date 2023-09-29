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
import { Modal } from "../../../Screens/Modal/Modal";
import { Link } from "react-router-dom";


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
            className="w-full h-[90px] md:h-[112.29px] lg:h-[196px] md:rounded-[11.5px] rounded-[7px] md:mt-[-1px] px-[10px] lg:gap-[50px] pt-[10px] lg:px-[30px] lg:rounded-[20px] lg:py-[20px] pb-[16px] flex justify-between items-center"
          >
            <div className="w-[100%] pt-[19px] lg:pt-[20px] pl-[8.5px] md:pl-[9px]">
              <p className="text-[10px] mb-2 font-bold uppercase w-[110%] md:text-[12px] md:w-[70%] lg:w-[70%] lg:text-[20px] 2xl:w-[80%] 2xl:text-[24px] lg:mb-4">
                TOP UP DATA BUNDLES, UNLOCK GLOBAL CONNECTIVITY WITH AREMXYPLUG.
              </p>
              <p className="text-[7px] font-[400] leading-[9px] mb-3 md:text-[9px] md:leading-[12.2px] w-[90%] md:w-[65%] lg:w-[75%] 2xl:w-[85%] 2xl:mt-[5px] lg:mt-[20px] lg:text-[16px] lg:leading-[26px] 2xl:text-[20px] lg:mb-[20px]">
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
                className="w-[55.482px] h-full md:w-[98px] md:h-[px] lg:w-[166.447px] lg:h-[150px]"
              />
            </div>
          </div>

          <div className="flex items-center my-[10%] gap-[8px] md:my-[5%] md:text-[18px] lg:text-[20px]">
            <p className="text-[#7c7c7c] text-[10px] leading-[130%] md:text-[18px] lg:text-[20px] 2xl:text-[28px]">
              Select Data Type
            </p>
            <img
              src={DataType}
              alt=""
              className="w-[12px] h-[12px] md:w-[14.083px] md:h-[14.083px] lg:w-[24px] lg:h-[24px]"
            />
          </div>

          <section className="md:mt-[30px] mt-[30px] lg:mt-[50px]">
            <div className="text-[8px] flex gap-[9%] md:text-[18px] lg:text-[20px] justify-between md:justify-start md:gap-[10%]">
              <div
                onClick={() => {
                  handleClick(0);
                }}
                className={`${
                  activeBtn[0]
                    ? "bg-[#E2F3FF] rounded-[2px] border-b-[2px] border-b-[#04177f] h-[25px] flex items-center p-[5px] md:h-[35px] lg:rounded-[6px] lg:border-b-[4px] lg:h-[60px]"
                    : ""
                } cursor-pointer w-[144px] justify-center rounded-[2px] md:w-[180px] md:rounded-[3px] md:justify-center md:items-center flex lg:w-[248px] lg:rounded-[6px] 2xl:text-[24px]`}
              >
                Local Data
              </div>
              <div
                onClick={() => {
                  handleClick(1);
                  showPopup();
                }}
                className={`${
                  activeBtn[1]
                    ? "bg-[#E2F3FF] rounded-[2px] border-b-[2px] border-b-[#04177f] h-[25px] flex items-center p-[5px]  md:h-[35px] lg:rounded-[6px] lg:border-b-[4px] lg:h-[60px] lg:py-[40px]"
                    : ""
                }cursor-pointer w-[144px] justify-center rounded-[2px] md:w-[180px] md:rounded-[3px] md:justify-center md:items-center flex lg:w-[248px] lg:rounded-[6px] 2xl:text-[24px]`}
              >
                International Data
              </div>
            </div>
            <hr />

            <div className="mt-[10%] flex flex-col gap-[20px] md:mt-[2%] md:gap-[0px] 2xl:mt-[5%]">
              <Link to="/data-bundles">
              <div className="Datatopup flex justify-between h-[50px] lg:h-[80px] md:justify-between border-[1px] rounded-[5px] pl-[8px] pr-[20px] py-[5px] gap-[8px] md:mt-[30px]">
                <div className="flex gap-[10px]">
                  <img
                    src={DataBundles}
                    alt=""
                    className="w-[20px] h-[20px] mt-[10px] md:w-[14.736px] md:h-[14.736px] lg:w-[20px] lg:mt-[20px] lg:h-[20px] 2xl:mt-[25px]"
                  />

                  <div className="">
                    <p className="text-[10px] md:text-[13px] font-[500] lg:text-[18px] 2xl:text-[22px]">
                      Data Bundles
                    </p>
                    <p className="text-[8px] text-[#7c7c7c] md:text-[10px] lg:text-[15px] font-[500] w-[95%] lg:w-[130%] mt-[3px] md:w-[100%] 2xl:text-[20px]">
                      Top up your mobile sim with our automated data bundles
                      directly from network providers.
                    </p>
                  </div>
                </div>

                <img
                  src={DataType}
                  alt=""
                  className="w-[12px] h-[12px] mb-[10px] md:w-[14.083px] md:h-[14.083px] md:mt-[10px] lg:w-[24px] lg:h-[24px] "
                />
              </div>
              </Link>

              <div className="Datatopup flex justify-between h-[50px] lg:h-[80px] md:justify-between border-[1px] rounded-[5px] pl-[8px] pr-[20px] py-[5px] gap-[8px] md:mt-[30px]">
                <div className="flex gap-[10px]">
                  <img
                    src={DataRoll}
                    alt=""
                    className="w-[20px] h-[20px] mt-[10px] md:w-[14.736px] md:h-[14.736px] lg:w-[20px] lg:h-[20px] 2xl:mt-[25px]"
                  />

                  <div className="">
                    <p className="text-[10px] md:text-[13px] font-[500] lg:text-[18px] 2xl:text-[22px]">
                      Data Roll
                    </p>
                    <p className="text-[8px] text-[#7c7c7c] md:text-[10px] lg:text-[15px] font-[500] w-[95%] mt-[3px] md:w-[100%] lg:w-[130%] 2xl:text-[20px]">
                      Add, manage, and send data to your team or employees
                      without any hassle.
                    </p>
                  </div>
                </div>

                <img
                  src={DataType}
                  alt=""
                  className="w-[12px] h-[12px] mb-[10px] md:w-[14.083px] md:h-[14.083px] md:mt-[10px] lg:w-[24px] lg:h-[24px]"
                />
              </div>

              <div className="Datatopup flex justify-between h-[50px] lg:h-[80px] md:justify-between border-[1px] rounded-[5px] pl-[8px] pr-[20px] py-[5px] gap-[8px] md:mt-[30px]">
                <div className="flex gap-[10px]">
                  <img
                    src={DataVoucher}
                    alt=""
                    className="w-[20px] h-[20px] mt-[10px] md:w-[14.736px] md:h-[14.736px] lg:w-[20px] lg:h-[20px] 2xl:mt-[25px]"
                  />

                  <div className="">
                    <p className="text-[10px] md:text-[13px] font-[500] lg:text-[18px] 2xl:text-[22px]">
                      Data Voucher
                    </p>
                    <p className="text-[8px] text-[#7c7c7c] md:text-[10px] font-[500] lg:text-[15px] w-[95%] lg:w-[130%] mt-[3px] md:w-[100%] 2xl:text-[20px]">
                      Generate all networks data token / pins and recharge your
                      mobile sim directly using ussd codes.
                    </p>
                  </div>
                </div>

                <img
                  src={DataType}
                  alt=""
                  className="w-[12px] h-[12px] mb-[10px] md:w-[14.083px] md:h-[14.083px] md:mt-[10px] lg:w-[24px] lg:h-[24px]"
                />
              </div>

              <div className="Datatopup flex justify-between h-[50px] lg:h-[80px] md:justify-between border-[1px] rounded-[5px] pl-[8px] pr-[20px] py-[5px] gap-[8px] md:mt-[30px]">
                <div className="flex gap-[10px]">
                  <img
                    src={DataSchedule}
                    alt=""
                    className="w-[20px] h-[20px] mt-[10px] md:w-[14.736px] md:h-[14.736px] lg:w-[20px] lg:h-[20px] 2xl:mt-[25px]"
                  />

                  <div className="">
                    <p className="text-[10px] md:text-[13px] font-[500] lg:text-[18px] 2xl:text-[22px]">
                      Data Schedule
                    </p>
                    <p className="text-[8px] text-[#7c7c7c] md:text-[10px] font-[500] lg:text-[15px] w-[95%] lg:w-[130%] mt-[3px] md:w-[100%] 2xl:text-[20px]">
                      Schedule sending of data for automatic vending to
                      recipients at your specified date and time.
                    </p>
                  </div>
                </div>

                <img
                  src={DataType}
                  alt=""
                  className="w-[12px] h-[12px] mb-[10px] md:w-[14.083px] md:h-[14.083px] md:mt-[10px] lg:w-[24px] lg:h-[24px]"
                />
              </div>

              <div className="Datatopup flex justify-between h-[50px] lg:h-[80px] md:justify-between border-[1px] rounded-[5px] pl-[8px] pr-[20px] py-[5px] gap-[8px] md:mt-[30px]">
                <div className="flex gap-[10px]">
                  <img
                    src={BulkData}
                    alt=""
                    className="w-[20px] h-[20px] mt-[10px] md:w-[14.736px] md:h-[14.736px] lg:w-[20px] lg:h-[20px] 2xl:mt-[25px]"
                  />

                  <div className="">
                    <p className="text-[10px] md:text-[13px] font-[500] lg:text-[18px] 2xl:text-[22px]">
                      Bulk Data
                    </p>
                    <p className="text-[8px] text-[#7c7c7c] md:text-[10px] font-[500] lg:text-[15px] w-[95%] lg:w-[130%] mt-[3px] md:w-[100%] 2xl:text-[20px]">
                      Send data to multiple recipients at a time and receive
                      instantly without any hassle.
                    </p>
                  </div>
                </div>

                <img
                  src={DataType}
                  alt=""
                  className="w-[12px] h-[12px] mb-[10px] md:w-[14.083px] md:h-[14.083px] md:mt-[10px] lg:w-[24px] lg:h-[24px]"
                />
              </div>
            </div>
          </section>

          <footer className="flex justify-center text-center gap-[20px] mt-[150px] mb-[50px] lg:mt-[500px]">
            <p className="text-[8px] md:text-[12px] lg:text-[20px]  font-[500] leading-[9.1px] mt-[5px] lg:mt-[13px]">
              You need help?
            </p>

            <Link to="/ContactUs">
              <div
                className={`${
                  isDarkMode ? "border " : "bg-[#04177f]"
                } text-[8px] p-1 text-white rounded-[8px] lg:text-[18px]`}
              >
                Contact Us
              </div>
            </Link>
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
                      } Datapopup
                    flex flex-col justify-between z-[100] lg:mt-[200px] lg:ml-[px] md:mt-[30px] md:w-[35%] md:ml-[50px] 2xl:mt-[270px] 2xl:ml-[]`}
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
                        <p className="text-[8px] font-extrabold text-end float-right ml-[70%] md:ml-[70%] md:text-[12px] mt-[10px] lg:text-[10px]">
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
