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

const DataTopUpPage = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const showPopup = () => {
    setPopupVisible(true);
  };

  const hidePopup = () => {
    setPopupVisible(false);
  };

  const [activeBtn, setActiveBtn] = useState([true, false]);
  const [localData, setLocalData] = useState(true);
  const [internationalData, setinternationalData] = useState(false);

  const handleClick = (index) => {
    const clickedBtn = activeBtn.map((isActive, i) => i === index);
    setActiveBtn(clickedBtn);
  };

  return (
    <DashBoardLayout>
      <div className="bg-[#FFF] relative 2xl:px-[90px]">
        <section className="md:px-[20px]">
          <div
            id="DataTopUp"
            className="rounded-[20px] mt-[30px] md:mt-[-40px] lg:mt-[30px] px-[20px] lg:px-[40px] lg:gap-[50px] pt-[10px] lg:py-[20px] pb-[5px] flex justify-between"
          >
            <div className="w-[70%] ">
              <p className="text-[8px] font-[600] uppercase md:text-[14px] lg:text-[24px]">
                TOP UP DATA BUNDLES, UNLOCK GLOBAL CONNECTIVITY WITH AREMXYPLUG.
              </p>
              <p className="text-[7px] font-[400] leading-[9px] mt-[8px] md:text-[9.4px] md:leading-[12.2px] md:w-[105%] lg:text-[16px] lg:leading-[20.8px] lg:w-[85%] lg:mt-[20px]">
                Top up your mobile sim with our automated data bundles, receive
                instantly, enjoy discount, purchase in bulk, send to friends,
                family, team, employees, and your loved ones without any hassle
                or hidden fee.
              </p>
            </div>

            <div className="">
              <img
                src={DataTopUp}
                alt=""
                className="w-[55.482px] h-[50px] md:w-[98px] md:h-[88px] lg:w-[166.447px] lg:h-[150px]"
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
                className={`text-[7px] px-[50px] rounded-[5px] py-[5px] ${
                  activeBtn[0]
                    ? "bg-[#E2F3FF] border-b-[4px] border-b-[#04177F]"
                    : ""
                } md:text-[11.736px] font-[500] lg:text-[20px]`}
              >
                <a
                  href="#"
                  onClick={() => {
                    handleClick(0);
                    setLocalData(false);
                    setinternationalData(true);
                  }}
                >
                  Local Data
                </a>
              </p>

              <p
                className={`py-[5px] md:text-[11.736px] font-[500] text-[7px] ${
                  activeBtn[1] 
                    ? "bg-[#E2F3FF] border-b-[4px] border-b-[#04177F]"
                    : ""
                } px-[50px] rounded-[5px] lg:text-[20px]`}
              >
                <a
                  href="#"
                  onClick={() => {
                    handleClick(1);
                    setLocalData(false);
                    setinternationalData(true);
                    showPopup();
                  }}
                >
                  International Data
                </a>
              </p>
            </div>

            <div className="flex justify-between md:justify-between border-[1px] rounded-[5px] pl-[8px] pr-[20px] py-[10px] gap-[8px] shadow-sm mt-[20px] md:mt-[30px]">
              <div className="flex gap-[10px]">
                <img src={DataBundles} alt="" className="w-[20px] h-[20px] mt-[10px] md:w-[14.736px] md:h-[14.736px] lg:w-[20px] lg:h-[20px]" />

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
                <img src={DataRoll} alt="" className="w-[20px] h-[20px] mt-[10px] md:w-[14.736px] md:h-[14.736px] lg:w-[20px] lg:h-[20px]"/>

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
                <img src={DataVoucher} alt="" className="w-[20px] h-[20px] mt-[10px] md:w-[14.736px] md:h-[14.736px] lg:w-[20px] lg:h-[20px]"/>

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
                <img src={DataSchedule} alt="" className="w-[20px] h-[20px] mt-[10px] md:w-[14.736px] md:h-[14.736px] lg:w-[20px] lg:h-[20px]"/>

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
                <img src={BulkData} alt="" className="w-[20px] h-[20px] mt-[10px] md:w-[14.736px] md:h-[14.736px] lg:w-[20px] lg:h-[20px]" />

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

          <footer className="flex justify-center text-center gap-[15px] mt-[170px]">
            <p className="text-[7.042px] font-[500] leading-[9.1px] mt-[2px] lg:text-[12px]">
              You need help?
            </p>

            <p className="bg-[#04177F] rounded-[5.1px] lg:rounded-[9px] text-white text-[4.694px] font-[500] leading-[8px] px-[9px] py-[3px] lg:text-[8px] lg:px-[15px] lg:py-[5px]">
              Contact Us
            </p>
          </footer>

          {/* ================Popup======================= */}

          <div className="md:px-[px]">
            {popupVisible && (
              <div id="PopUp" className="popup">
                <section className="text-center flex justify-center item-center z-100">
                  <div
                    class="absolute inset-0 top-0 bottom-0 bg-[#454545] opacity-[0.15] z-100 "
                    style={{
                      position: "absolute",
                      top: -200,
                      left: -75,
                      right: -50,
                      bottom: -200,
                      backgroundColor: "#454545",
                      opacity: 0.15,
                      zIndex: 100,
                    }}
                    onClick={hidePopup}
                  ></div>
                  <div className="fixed top-[23%] md:top-[35%] lg:top-[45.5%] bg-white shadow-lg w-[82.5%] h-[225px] py-[15px] md:w-[329.785px] md:h-[237.069px] lg:w-[562px] lg:h-[360px] rounded-[10px] z-[1000]">
                    <p className="text-[10px] font-[900] md:text-[9.389px] lg:text-[16px]">
                      International Data
                    </p>
                    <p className="text-[8px] md:text-[9.389px] font-[600] text-[#04177F] lg:text-[16px]">
                      This Currency is Currently Not Available.
                    </p>
                    <img
                      src={InternationalData}
                      alt=""
                      className="mx-auto mt-[20px] md:mt-[30px] w-[143px] h-[67px] lg:w-[237.171px] lg:h-[150px]"
                    />
                    <div className="md:flex md:justify-center md:items-center md:flex-row-reverse md:ml-[110px] md:gap-[40px] lg:ml-[160px] lg:gap-[70px] md:mt-[30px]">
                      <p className="text-[6px] font-[600] text-end mx-[55px] md:text-[5.868px] mt-[10px] md:ml-[-1px] lg:text-[10px] lg:font-extrabold">
                        Coming Soon...
                      </p>
                      <button
                        className="text-white bg-[#04177F] font-[600] py-[8px] px-[95px] text-center mt-[20px] rounded-[5px] md:px-[14.67px] md:text-[9.389px] md:py-[2.934px] lg:text-[16px] md:rounded-[5px]"
                        onClick={hidePopup}
                      >
                        Okay
                      </button>
                    </div>
                  </div>
                </section>
              </div>
            )}
          </div>
        </section>
      </div>
    </DashBoardLayout>
  );
};

export default DataTopUpPage;
