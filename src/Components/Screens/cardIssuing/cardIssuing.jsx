import React, { useState } from "react";
import "./cardIssuing.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Bluebutton from "../../bluebutton/Bluebutton";
import { Link } from "react-router-dom";
import CurrencyConversionModal from "../../CurrencyConversion/CurrencyConversionModal";

export const primaryColor = "#04177F";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <div
    onDragStart={handleDragStart}
    role="presentation"
    className="w-[280px]   pr-4 md:pr-8 "
  >
    <div className="card_activation_boxshadow w rounded sm:rounded-md md:rounded-lg lg:rounded-lg border-[1px] border-[#92ABFE] p-4 h-[200px] md:h-[260px] lg:h-[350px] ">
      <div className="flex justify-center  h-[60px]">
        <div className="w-full flex pl-2 space-x-4 ">
          <img
            src="./Images/card_issuing_images/cardActivation.png"
            alt="icon"
            className="h-[23px] "
          />
          <p className=" font-bold tracking-wide text-[9.55px] md:text-[10.53px]  lg:text-[18px]">
            Card Activation
          </p>
        </div>
      </div>

      <p className="text-justify text-[9.55px] md:text-[10.53px]  lg:text-[18px]">
        Sign up on our platform, navigate the cards feature, provide the
        appropriate details as a business or individual, get verified, activate
        your cards, fund your cards, and start spending with your cards
        globally.
      </p>
    </div>
  </div>,
  <div
    onDragStart={handleDragStart}
    role="presentation"
    className="w-[280px]  pr-4 md:pr-8"
  >
    <div className="card_activation_boxshadow w rounded sm:rounded-md md:rounded-lg lg:rounded-lg border-[1px] border-[#92ABFE] p-4 h-[200px] md:h-[260px] lg:h-[350px]">
      <div className="flex justify-center  h-[60px]">
        <div className="w-full flex pl-2 space-x-4 ">
          <img
            src="./Images/card_issuing_images/cardTopUPIcon.png"
            alt="icon"
            className="h-[23px] "
          />
          <p className=" font-bold tracking-wide text-[9.55px] md:text-[10.53px]  lg:text-[18px]">
            Card Top Up
          </p>
        </div>
      </div>

      <p className="text-justify text-[9.55px] md:text-[10.53px]  lg:text-[18px]">
        You can seamlessly Top-Up your cards from your wallet. Our 3D secure
        virtual cards are accepted in all online platforms anywhere Verve, Visa,
        and Mastercard are accepted globally.
      </p>
    </div>
  </div>,
  <div
    onDragStart={handleDragStart}
    role="presentation"
    className="w-[280px] pr-4 md:pr-8"
  >
    <div className="card_activation_boxshadow w rounded sm:rounded-md md:rounded-lg lg:rounded-lg border-[1px] border-[#92ABFE] p-4 h-[200px] md:h-[260px] lg:h-[350px]">
      <div className="flex pl-2 space-x-4">
        <div className="flex justify-center  h-[60px]">
          <div className="w-full flex pl-2 space-x-4 ">
            <img
              src="./Images/card_issuing_images/paymentIcon.png"
              alt="icon"
              className="h-[23px] "
            />
            <div className="w-[60%] ">
              <p className="font-bold tracking-wide text-[9.55px] md:text-[10.53px]  lg:text-[18px]">
                Payment
              </p>
              <p className="font-bold tracking-wide text-[9.55px] md:text-[10.53px]  lg:text-[18px]">
                Authorization
              </p>
            </div>{" "}
          </div>
        </div>
      </div>

      <p className="text-justify text-[9.55px] md:text-[10.53px]  lg:text-[18px]">
        All your card payments will be deducted from your card balance, confirm
        each transaction with an OTP code via your phone number or email to
        authorize and complete each of the transactions.
      </p>
    </div>
  </div>,
  <div
    onDragStart={handleDragStart}
    role="presentation"
    className="w-[280px] pr-4 md:pr-8"
  >
    <div className="card_activation_boxshadow w rounded sm:rounded-md md:rounded-lg lg:rounded-lg border-[1px] border-[#92ABFE] p-4 h-[200px] md:h-[260px] lg:h-[350px]">
      <div className="flex justify-center  h-[60px]">
        <div className="w-full flex pl-2 space-x-4 ">
          <img
            src="./Images/card_issuing_images/automateIcon.png"
            alt="icon"
            className="h-[23px] "
          />
          <div className="w-[60%] ">
            <p className="font-bold tracking-wide text-[9.55px] md:text-[10.53px]  lg:text-[18px]">
              Automate{" "}
            </p>
            <p className="font-bold tracking-wide text-[9.55px] md:text-[10.53px]  lg:text-[18px]">
              Card Usage
            </p>
          </div>{" "}
        </div>
      </div>

      <p className="text-justify text-[9.55px] md:text-[10.53px]  lg:text-[18px]">
        Track your spendings by setting up your daily, weekly, and monthly
        spending limits on your cards, depending on your choice, you are free to
        seamlessly manage your card spending patterns.
      </p>
    </div>
  </div>,
  <div
    onDragStart={handleDragStart}
    role="presentation"
    className="w-[280px] pr-4 md:pr-8"
  >
    <div className="card_activation_boxshadow w rounded sm:rounded-md md:rounded-lg lg:rounded-lg border-[1px] border-[#92ABFE] p-4 h-[200px] md:h-[260px] lg:h-[350px]">
      <div className="flex justify-center  h-[60px]">
        <div className="w-full flex pl-2 space-x-4 ">
          <img
            src="./Images/card_issuing_images/cardStatementIcon.png"
            alt="icon"
            className="h-[23px] "
          />
          <p className=" font-bold tracking-wide text-[9.55px] md:text-[10.53px]  lg:text-[18px]">
            Card Statement
          </p>
        </div>
      </div>

      <p className="text-justify text-[9.55px] md:text-[10.53px]  lg:text-[18px]">
        You can always request for your card statements on our card issuing
        page, all your cards transactions are safe and secured, You can track
        all your spendings without any hassle.
      </p>
    </div>
  </div>,
];

function CardIssuing() {
  // const [activeSlide, setActiveSlide] = useState(null);
  const [showPopup, setShowPopup] = useState(false)
  const handleShowPopup = () => {
    setShowPopup(!showPopup)
  }

  return (
    <>
      <div className="page_overall_root_background_gradient mt-[-100px] md:mt-[-170px] lg:mt-[-200px] pt-[180px]  md:pt-[280px]  lg:pt-[300px] md:pb-[15%] pb-[25%]  w-full lg:px-[8%] px-[5%] ">
        <div
          className=" grid lg:grid-cols-2 lg:gap-x-8  md:grid-cols-2 md:gap-x-4    
       grid-cols-1 gap-y-4 
        "
        >
          <div className="rounded xl:h-[350px] sm:rounded-md p-4 sm:p-6 lg:rounded-lg bg-[#f2f5ff] lg:p-8 md:p-6">
            <p
              className="text-[20px]  md:text-[26.06px] lg:text-[45px] font-bold lg:tracking-wider  "
              style={{
                color: primaryColor,
              }}
            >
              Card Issuing
            </p>
            <p
              className="text-[#000] text-justify  
            text-[10.53px] md:text-[12px] lg:text-lg
            mt-4 sm:mt-6 md:mt-10   lg:mt-12 "
            >
              Our card issuing service can be tailored to your specific needs as
              an Individual or business. we issue 3D secured virtual and
              physical debit USD and NGN cards to spend anywhere Verve, Visa,
              and Mastercard are accepted, both in-store and online, anytime,
              anywhere.
            </p>
          </div>

          <div className="w-full flex justify-center md:flex md:justify-end mt-[50px] md:mt-0">
            <img
              src="./Images/card_issuing_images/cardIssuingBG.png"
              alt="backgroundImage"
              className="w-[70%] md:w-[90%] lg:w-[95%] "
            />
          </div>
        </div>

        <div className="grid mt-12  md:mt-16 lg:mt-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          <div className="grid lg:col-span-2">
            <p
              className="text-[20px]  md:text-[17.38px] lg:text-[30px] font-bold lg:tracking-wider  "
              style={{
                color: primaryColor,
              }}
            >
              How The Card Works
            </p>
            <p className="text-[#000] text-justify text-[10.53px] md:text-[12px] lg:text-lg mt-4 sm:mt-6 md:mt-10 g:mt-12   ">
              You can manage your cards spending limits, spending patterns,
              automate and reload your cards seamlessly to make global purchase,
              pay bills and spend both online and in-store, offline channels.
            </p>
          </div>
        </div>

        <p className="text-[#000] text-[10.53px] md:text-[12px] lg:text-lg font-bold mt-16 mb-8">
          Below are the five easy steps:
        </p>

        <AliceCarousel
          animationDuration={2000}
          autoPlayInterval={2000}
          autoPlay={true}
          mouseTracking
          items={items}
          autoWidth
          infinite
          touchTracking
          touchMoveDefaultEvents={false}
          disableButtonsControls
          keyboardNavigation={true}
          renderDotsItem={(e) => {
            const { isActive, activeIndex } = e;

            console.log(isActive, activeIndex);
            return isActive === true ? (
              <div
                className="w-[8px] h-[8px] rounded-full mx-[4px] md:mx-[8px]  lg:mx-[10px]"
                style={{ backgroundColor: primaryColor }}
              ></div>
            ) : (
              <div
                className="w-[8px] h-[8px] rounded-full mx-[4px] md:mx-[8px]  lg:mx-[10px]"
                style={{ backgroundColor: "#b1b9c2" }}
              ></div>
            );
          }}
          // renderDotsItem(e: DotsItem)
        />
        {/* 
        <div className="card_activation_boxshadow w-[280px] h-[320px] rounded sm:rounded-md md:rounded-lg lg:rounded-lg border-[1px] border-[#92ABFE] p-4">
          <div className="flex pl-2 space-x-4">
            <img
              src="./Images/card_issuing_images/cardActivation.png"
              alt="icon"
              className="w-[35px] "
            />
            <p>Card Activation</p>
          </div>

          <p className="mt-8 text-justify">
            Sign up on our platform, navigate the cards feature, provide the
            appropriate details as a business or individual, get verified,
            activate your cards, fund your cards, and start spending with your
            cards globally.
          </p>
        </div> */}

        <div className="flex justify-center my-14">
          <Bluebutton text="Get Your Card Now" onClick={handleShowPopup} />
        </div>
        {showPopup && (
          <CurrencyConversionModal
            title="Card Issuing"
            image="./Images/wallet/comingSoon.png"
            onClick={() => setShowPopup(false)}
            tag="This Feature is Currently Not Available."
          />
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 sm:gap-y-14 lg:gap-y-20  md:gap-x-14 lg:gap-x-20">
          <div
            className="card_activation_boxshadow2 bg-[#fff] w rounded sm:rounded-md md:rounded-lg lg:rounded-lg border-[1px] border-[#92ABFE] p-4 h-[400px] md:h-[500px]   lg:h-[630px] 
        
        "
          >
            <div className="flex justify-center mt-4 md:mt-6">
              <img
                src="./Images/card_issuing_images/virtualCard.png"
                alt="icon"
                className="w-[150px] sm:w-[180px] md:w-[200px] "
              />
            </div>

            <p className="text-xl my-4 tracking-wider font-bold text-[#000] text-center sm:my-6   lg:my-8   lg:text-[30px] md:text-[17.38px] text-[20px] ">
              Virtual Card
            </p>

            <div className="flex justify-center">
              <p className="text-justify   text-[10.97px] md:text-[10.43px] lg:text-[18px]">
                Our virtual cards defies currency barriers globally. Clear all
                your shopping carts, pay for your subscriptions, and live
                without the fear of failed transactions.
              </p>
            </div>
          </div>
          <div
            className="card_activation_boxshadow3 bg-[#fff] w rounded sm:rounded-md md:rounded-lg lg:rounded-lg border-[1px] border-[#92ABFE] p-4 h-[400px] md:h-[500px]   lg:h-[630px] 
        
        "
          >
            <div className="flex justify-center mt-4 md:mt-6">
              <img
                src="./Images/card_issuing_images/physicalCard.png"
                alt="icon"
                className="w-[150px] sm:w-[180px] md:w-[200px] "
              />
            </div>

            <p className="text-xl my-4 tracking-wider font-bold text-[#000] text-center sm:my-6   lg:my-8   lg:text-[30px] md:text-[17.38px] text-[20px]">
              Physical Card
            </p>

            <div className="flex justify-center">
              <p className="text-justify   text-[10.97px] md:text-[10.43px] lg:text-[18px] ">
                Our physical card gives you confidence while you are out and
                about. Be it grocery shopping or a romantic dinner, be rest
                assured, your bills will be cleared without any hassle.
              </p>
            </div>
          </div>
          <div
            className="card_activation_boxshadow2 bg-[#fff] w rounded sm:rounded-md md:rounded-lg lg:rounded-lg border-[1px] border-[#92ABFE] p-4 h-[400px] md:h-[500px]   lg:h-[630px] 
        
        "
          >
            <div className="flex justify-center mt-4 md:mt-6">
              <img
                src="./Images/card_issuing_images/cardMaintainance.png"
                alt="icon"
                className="w-[150px] sm:w-[180px] md:w-[200px] "
              />
            </div>

            <p className="text-xl my-4 tracking-wider font-bold text-[#000] text-center sm:my-6   lg:my-8   lg:text-[30px] md:text-[17.38px] text-[20px]">
              Card Maintenance
            </p>

            <div className="flex justify-center">
              <p className="text-justify   text-[10.97px] md:text-[10.43px] lg:text-[18px] ">
                At AremxyPlug, we believe it is critical to provide
                comprehensive card maintenance services to ensure that your
                cards are always in a good condition. Your cards should always
                be free of any hassle, Spend with your cards conveniently, We
                recognize the value of keeping your cards in excellent
                condition.
              </p>
            </div>
          </div>
          <div
            className="card_activation_boxshadow3 bg-[#fff] w rounded sm:rounded-md md:rounded-lg lg:rounded-lg border-[1px] border-[#92ABFE] p-4 h-[400px] md:h-[500px]   lg:h-[630px] 
        
        "
          >
            <div className="flex justify-center mt-4 md:mt-6">
              <img
                src="./Images/card_issuing_images/cardManagement.png"
                alt="icon"
                className="w-[150px] sm:w-[180px] md:w-[200px] "
              />
            </div>

            <p className="text-xl my-4 tracking-wider font-bold text-[#000] text-center sm:my-6   lg:my-8   lg:text-[30px] md:text-[17.38px] text-[20px]">
              Card Mangement
            </p>

            <div className="flex justify-center">
              <p className="text-justify   text-[10.97px] md:text-[10.43px] lg:text-[18px] ">
                Our card management system gives you the ability to block your
                cards in the event of loss or theft, and your private data are
                secured. You can simply monitor, set limitations, activate,
                deactivate, and manage your cards usage with the aid of our card
                management service from a single location.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-14">
          <Link to="/pricing">
            <Bluebutton text="Explore Pricing" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default CardIssuing;
