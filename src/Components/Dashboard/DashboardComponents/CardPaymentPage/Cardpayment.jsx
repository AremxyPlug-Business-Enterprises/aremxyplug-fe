import React from "react";
import { DashBoardLayout } from "../../Layout/DashBoardLayout";
import "./CardPayment.css";
import { useContext } from "react";
import { ContextProvider } from "../../../Context";
import HeroImage from "./CardPaymentImages/HeroImage.svg";
import ArrowRight from "./CardPaymentImages/ArrowRight.svg";
import AddNewCard from "./CardPaymentImages/AddNewCard.svg";
import FundCard from "./CardPaymentImages/FundCard.svg";
import Card from "./CardPaymentImages/CardPayment.svg"
import { Link } from "react-router-dom";

const CardPayment = () => {
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
          }`}
        >
          <div
            id="CardPayment"
            className="w-full h-[90px] md:h-[112.29px] lg:h-[196px] md:rounded-[11.5px] rounded-[7px] md:mt-[-1px] px-[10px] lg:ml-[-20px] lg:w-[102%] 2xl:w-full 2xl:ml-0 lg:gap-[50px] pt-[10px] lg:px-[30px] lg:rounded-[20px] lg:py-[20px] pb-[16px] flex justify-between items-center"
          >
            <div className="w-[100%] pt-[19px] lg:pt-[20px] pl-[8.5px] md:pl-[9px]">
              <p className="text-[10px] mb-2 font-bold uppercase w-[110%] md:text-[12px] md:w-[70%] lg:w-[70%] lg:text-[20px] 2xl:w-[80%] 2xl:text-[24px] lg:mb-4">
                card payments.
              </p>
              <p className="text-[7px] font-[400] leading-[9px] mb-3 md:text-[9px] md:leading-[12.2px] w-[90%] md:w-[65%] lg:w-[75%] 2xl:w-[85%] 2xl:mt-[5px] lg:mt-[20px] lg:text-[16px] lg:leading-[26px] 2xl:text-[20px] lg:mb-[20px]">
                Please add new card or select your existing card to add money to
                your wallet.
              </p>
            </div>

            <div className="w-[91px] h-[66px] lg:w-[199px] lg:h-[199px] lg:mt-[40px]">
              <img
                src={HeroImage}
                alt=""
                className="w-[55.482px] h-full md:w-[98px] md:h-[px] lg:w-[166.447px] lg:h-[150px]"
              />
            </div>
          </div>

          <div className="flex items-center my-[10%] gap-[8px] md:my-[5%] md:text-[18px] lg:text-[20px]">
            <p className="text-[#7c7c7c] text-[10px] leading-[130%] md:text-[18px] lg:text-[20px] 2xl:text-[28px]">
              Select Option
            </p>
            <img
              src={ArrowRight}
              alt=""
              className="w-[12px] h-[12px] md:w-[14.083px] md:h-[14.083px] lg:w-[24px] lg:h-[24px]"
            />
          </div>
          
          <Link to="/AddNewCardPayment">
          <div
            id="Card"
            className="flex justify-center py-[10px] gap-[5px] rounded-[5px]"
          >
            <img src={AddNewCard} alt="" />
            <p className="text-[10px] md:text-[14px] lg:text-[16px] font-semibold ">Add New Card</p>
          </div>
          </Link>

          <Link to="/ExistingCardpage">
          <div
            id="Card"
            className="flex justify-center py-[10px] gap-[5px] rounded-[5px] mt-[10px]"
          >
            <img src={FundCard} alt="" />
            <p className="text-[10px] md:text-[14px] lg:text-[16px] font-semibold ">
              Fund with Existing Card
            </p>
          </div>
          </Link>


          <div className="mt-[40px] flex justify-center">
            <img src={Card} alt="" />
          </div>

          

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

export default CardPayment;
