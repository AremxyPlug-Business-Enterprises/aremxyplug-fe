import React from "react";
import Email from "../ProfileImages/Email.svg";
import "../My Profile Page/Profile.css";
import { useContext } from "react";
import { ContextProvider } from "../../Context";

const AccountUpgrade = () => {
    const { toggleSideBar } = useContext(ContextProvider);
   const {accountUpgrade} = useContext(ContextProvider);
    const {verificationOpen} = useContext(ContextProvider);
    
  return (
       <div>
        { accountUpgrade && (
          <div className= {`${verificationOpen
            ? 'block'  : 'hidden'}`}>
        <div className="px-20px flex flex-col h-full justify-between">
        <div className="flex items-center my-[10%] gap-[8px] md:my-[5%] md:text-[18px] lg:text-[px]">
          <p className="text-[#7c7c7c] text-[10px] leading-[130%] md:text-[14px] lg:text-[18px] 2xl:text-[28px]">
            My Accounts Limits And Levels
          </p>
          <img
            src={Email}
            alt=""
            className="w-[12px] h-[12px] md:w-[14.083px] md:h-[14.083px] lg:w-[24px] lg:h-[24px]"
          />
        </div>

        <div className="grid gap-[20px] md:grid-cols-2">
          <div className={`${toggleSideBar ? "md:h-[%]" : "md:h-full" } px-[0px] border-[1px] w-full  h-full rounded-tr-[10px] rounded-tl-[10px] rounded-br-[10px] rounded-bl-[10px]`}>
            <div className="top rounded-tr-[10px] h-[20%] rounded-tl-[10px] mx-auto text-center md:pt-[%] md:pb-[20%] lg:pb-[%] font-semibold">
              <p className="text-[10px] md:text-[14px] lg:text-[18px] pt-[5%]">Level 1 : End User</p>
              <button className="mt-[5%] text-[#FFFFFF] bg-[#04177F] rounded-[5px] px-[15px] py-[7.5px] md:px-[10px] md:py-[5px] text-[8px] md:text-[10px] lg:text-[12px]">
                Current Level
              </button>
            </div>

            <div className={`bottom ${toggleSideBar ? "md:text-[10px] md:pt-[%] " : "md:text-[14px]"} border-[1px] h-[80%] mb-[15%] md:mb-[-60%] lg:mb-[-3%] text-center md:text-start md:pl-[20px] text-[10px] lg:text-[18px] rounded-br-[10px] rounded-bl-[10px]`}>
              <div className="mt-[10%] flex flex-col gap-[10px]">
                <p className="font-semibold">To Others Banks</p>
                <p className="text-[#7E7E7E]">
                  Daily Transfer Limit:{" "}
                  <span className="text-[#04177F]">$ 2,000</span>{" "}
                  <span className="text-[#000000]">Equivalent</span>
                </p>
                <p className="text-[#7E7E7E]">
                  Wallet Top-up(Per Transaction):{" "}
                  <span className="text-[#04177F]">Unlimited</span>
                </p>
                <p className="text-[#7E7E7E]">
                  Maximum Wallet Balance:{" "}
                  <span className="text-[#04177F]">Unlimited</span>
                </p>
              </div>
              <div className="mt-[10%] mb-[10%] md:mb-[50%] flex flex-col gap-[10px] lg:mb-[-70px]">
                <p className="font-semibold">To AremxyPlug</p>
                <p className="text-[#7E7E7E]">
                  Daily Transfer Limit:{" "}
                  <span className="text-[#04177F]">Unlimited</span>
                </p>
                <p className="text-[#7E7E7E]">
                  Wallet Top-up(Per Transaction):{" "}
                  <span className="text-[#04177F]">Unlimited</span>
                </p>
                <p className="text-[#7E7E7E]">
                  Maximum Wallet Balance:{" "}
                  <span className="text-[#04177F]">Unlimited</span>
                </p>
                <p className="text-[#7E7E7E] mt-[20px] md:border-[1px] md:px-[5px] md:py-[5px] md:mr-[30px]">Requirement: Normal User</p>
              </div>
            </div>
          </div>

          <div className={`${toggleSideBar ? "md:h-[%]" : "md:h-full" } px-[0px] border-[1px] w-full  h-full rounded-tr-[10px] rounded-tl-[10px] rounded-br-[10px] rounded-bl-[10px]`}>
            <div className="top1 rounded-tr-[10px] h-[20%] rounded-tl-[10px] pt-[10%] pb-[5%] mx-auto text-center md:pt-[10%] font-semibold">
              <p className="text-[10px] md:text-[14px] lg:text-[18px]">Level 2 : Verified User</p>
            </div>

            <div className={`bottom ${toggleSideBar ? "md:text-[10px] md:pt-[%] " : "md:text-[14px]"} border-[1px] h-[80%] mb-[15%] md:mb-[-60%] lg:mb-[-3%] text-center md:text-start md:pl-[20px] text-[10px] lg:text-[18px] rounded-br-[10px] rounded-bl-[10px]`}>
              <div className="mt-[10%] flex flex-col gap-[10px]">
                <p className="font-semibold">To Others Banks</p>
                <p className="text-[#7E7E7E]">
                  Daily Transfer Limit:{" "}
                  <span className="text-[#04177F]">$ 2,000</span>{" "}
                  <span className="text-[#000000]">Equivalent</span>
                </p>
                <p className="text-[#7E7E7E]">
                  Wallet Top-up(Per Transaction):{" "}
                  <span className="text-[#04177F]">Unlimited</span>
                </p>
                <p className="text-[#7E7E7E]">
                  Maximum Wallet Balance:{" "}
                  <span className="text-[#04177F]">Unlimited</span>
                </p>
              </div>
              <div className="mt-[10%] mb-[15%] md:mb-[1%] flex flex-col gap-[10px] lg:mb-[-70px]">
                <p className="font-semibold">To AremxyPlug</p>
                <p className="text-[#7E7E7E]">
                  Daily Transfer Limit:{" "}
                  <span className="text-[#04177F]">Unlimited</span>
                </p>
                <p className="text-[#7E7E7E]">
                  Wallet Top-up(Per Transaction):{" "}
                  <span className="text-[#04177F]">Unlimited</span>
                </p>
                <p className="text-[#7E7E7E]">
                  Maximum Wallet Balance:{" "}
                  <span className="text-[#04177F]">Unlimited</span>
                </p>
                <p className="text-[#7E7E7E] mt-[20px] md:border-[1px] md:px-[5px] md:py-[5px] md:mr-[30px]">Requirement: ID Verification</p>
              </div>
            </div>
          </div>

          <div className={`${toggleSideBar ? "md:h-[%]" : "md:h-full" } px-[0px] border-[1px] w-full  h-full rounded-tr-[10px] rounded-tl-[10px] rounded-br-[10px] rounded-bl-[10px]`}>
            <div className="top2 rounded-tr-[10px] h-[20%] rounded-tl-[10px] pt-[10%] pb-[5%] mx-auto text-center md:pt-[10%] font-semibold">
              <p className="text-[10px] md:text-[14px] lg:text-[18px]">Level 3 : Business Account</p>
            </div>

            <div className={`bottom ${toggleSideBar ? "md:text-[10px] md:pt-[%] " : "md:text-[14px]"} border-[1px] h-[80%] mb-[15%] md:mb-[-3%] lg:mb-[-10%] text-center md:text-start md:pl-[20px] text-[10px] lg:text-[18px] rounded-br-[10px] rounded-bl-[10px]`}>
              <div className="mt-[10%] flex flex-col gap-[10px]">
                <p className="font-semibold">To Others Banks</p>
                <p className="text-[#7E7E7E]">
                  Daily Transfer Limit:{" "}
                  <span className="text-[#04177F]">$ 2,000</span>{" "}
                  <span className="text-[#000000]">Equivalent</span>
                </p>
                <p className="text-[#7E7E7E]">
                  Wallet Top-up(Per Transaction):{" "}
                  <span className="text-[#04177F]">Unlimited</span>
                </p>
                <p className="text-[#7E7E7E]">
                  Maximum Wallet Balance:{" "}
                  <span className="text-[#04177F]">Unlimited</span>
                </p>
              </div>
              <div className="mt-[10%] mb-[15%] md:mb-[20%%] flex flex-col gap-[10px]">
                <p className="font-semibold">To AremxyPlug</p>
                <p className="text-[#7E7E7E]">
                  Daily Transfer Limit:{" "}
                  <span className="text-[#04177F]">Unlimited</span>
                </p>
                <p className="text-[#7E7E7E]">
                  Wallet Top-up(Per Transaction):{" "}
                  <span className="text-[#04177F]">Unlimited</span>
                </p>
                <p className="text-[#7E7E7E]">
                  Maximum Wallet Balance:{" "}
                  <span className="text-[#04177F]">Unlimited</span>
                </p>
                <p className="text-[#7E7E7E] mt-[20px] md:border-[1px] md:px-[5px] md:py-[5px] md:mr-[30px]">Requirement: Business KYC/KYB</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
        )}
    </div>
  );
};

export default AccountUpgrade;
