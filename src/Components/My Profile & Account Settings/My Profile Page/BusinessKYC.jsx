import React from "react";
import { Modal } from "../../Screens/Modal/Modal";
import { useContext } from "react";
import { ContextProvider } from "../../Context";
import BusinessKyc from "../ProfileImages/BusinessKyc.svg";
import "./Profile.css";

const BusinessKYC = () => {
  const { isDarkMode } = useContext(ContextProvider);
  const { businessPopUp, setBusinessPopUp, toggleSideBar } =
    useContext(ContextProvider);
  return (
    <div>
      {businessPopUp && (
        <Modal>
          <div
            className={`${
              toggleSideBar ? "datapopup011" : "datapopup1"
            } bg-white `}
          >
            <div
              className={`${isDarkMode ? "bg-[#000]" : "bg-[]"}
                    flex flex-col justify-center z-[100] lg:ml-[10px] items-center `}
            >
              <div>
                <p className="text-[10px] text-center pt-[5%] font-extrabold md:text-[16px] lg:text-[25px] lg:pt-[3%]">
                  Business KYC / KYB
                </p>
              </div>
              <img
                src={BusinessKyc}
                alt=""
                className="flex justify-center items-center mx-auto mt-[30px] md:mt-[3%] md:w-[180px] md:h-[180px] lg:w-[280px] lg:h-[280px] md:mx-auto lg:mx-auto lg:mt-[3%] 2xl:mx-auto"
              />
            </div>
            <div className="mt-[10px] flex flex-col gap-[5px] pb-[5%] 2xl:mt-[1%] lg:mt-[1%] md:mt-[5%] md:pr-[10px]">
              <p className="text-[8px] font-extrabold text-end float-right ml-[60%] md:ml-[70%] md:text-[12px] mt-[10px] lg:text-[13px] 2xl:text-[15px]">
                Coming Soon...
              </p>
              <button
                className={` ${
                  isDarkMode ? "border" : "bg-[#04177f] "
                } cursor-pointer text-white text-[10px] h-[40px] rounded-[5px] md:rounded-[10px] flex items-center justify-center md:mx-auto md:w-[25%] md:h-[30px] md:text-[14px] lg:my-[3%] lg:h-[40px] lg:text-[20px] lg:w-[25%] lg:mx-auto`}
                onClick={() => {
                  setBusinessPopUp(false);
                }}
              >
                Okay
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default BusinessKYC;
