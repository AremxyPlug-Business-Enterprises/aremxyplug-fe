import React from "react";
import WalletModal from "../../Wallet/WalletModal";
import { useContext } from "react";
import { ContextProvider } from "../../Context";
import BusinessKyc from "../ProfileImages/BusinessKyc.svg";
import "./Profile.css"

const BusinessKYC = () => {
  const { isDarkMode } = useContext(ContextProvider);
   const {businessPopUp, setBusinessPopUp} = useContext(ContextProvider);
  return (
    <div>
      {businessPopUp && (
      <WalletModal className="flex flex-col justify-between">
        <div className="text-center flex justify-center item-center md:mt-[-20px] lg:mt-[15px] 2xl:mt-[-15px]">
          <div
            className={`${isDarkMode ? "bg-[#000]" : "bg-[]"}
                    flex flex-col justify-center z-[100] lg:ml-[10px] md:w-full`}
          >
            <div>
              <p className="text-[10px] text-center pt-[5%] font-extrabold md:text-[16px] lg:text-[25px] lg:pt-[3%]">
                Business KYC / KYB
              </p>
            </div>
          </div>
        </div>
        <img
              src={BusinessKyc}
              alt=""
              className="business img mx-auto mt-[20px] md:mt-[10%] md:w-[30%] md:mx-auto w-[143px] h-[120px] lg:w-[40%] lg:h-[50px] lg:mx-[150px] lg:mt-[10%] 2xl:mt-[10%] 2xl:mx-[180px]"
            />
        <div className="mt-[20px] flex flex-col gap-[5px] pb-[5%] 2xl:mt-[1%] lg:mt-[1%] md:mt-[5%] md:pr-[10px]">
          <p className="text-[8px] font-extrabold text-end float-right ml-[60%] md:ml-[70%] md:text-[12px] mt-[10px] lg:text-[13px] 2xl:text-[15px]">
            Coming Soon...
          </p>
          <button onClick={() => {
            setBusinessPopUp(false);
          }}
            className={` ${
              isDarkMode ? "border" : "bg-[#04177f] "
            } cursor-pointer text-white text-[10px] h-[40px] rounded-[5px] md:rounded-[10px] flex items-center justify-center md:mx-auto md:w-[25%] md:h-[30px] md:text-[14px] lg:my-[3%] lg:h-[40px] lg:text-[20px] lg:w-[25%] lg:mx-auto`}
          >
            Okay
          </button>
        </div>
      </WalletModal>
      )}
    </div>
  );
};

export default BusinessKYC;
