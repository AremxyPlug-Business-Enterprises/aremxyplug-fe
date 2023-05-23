import React from "react";
import "./cardIssuing.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Bluebutton from "../../bluebutton/Bluebutton";
export const primaryColor = "#04177F";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <div
    onDragStart={handleDragStart}
    role="presentation"
    className="w-[280px]  pr-4"
  >
    <div className="card_activation_boxshadow w rounded sm:rounded-md md:rounded-lg lg:rounded-lg border-[1px] border-[#92ABFE] p-4 h-[320px] ">
      <div className="flex pl-2 space-x-4">
        <img
          src="./Images/card_issuing_images/cardActivation.png"
          alt="icon"
          className="w-[35px] "
        />
        <p className="font-bold tracking-wide">Card Activation</p>
      </div>

      <p className="mt-8 text-justify ">
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
    className="w-[280px]  pr-4"
  >
    <div className="card_activation_boxshadow w rounded sm:rounded-md md:rounded-lg lg:rounded-lg border-[1px] border-[#92ABFE] p-4 h-[320px]">
      <div className="flex pl-2 space-x-4">
        <img
          src="./Images/card_issuing_images/cardTopUPIcon.png"
          alt="icon"
          className="w-[35px] "
        />
        <p className="font-bold tracking-wide">Card Top Up</p>
      </div>

      <p className="mt-8 text-justify ">
        You can seamlessly Top-Up your cards from your wallet. Our 3D secure
        virtual cards are accepted in all online platforms anywhere Verve, Visa,
        and Mastercard are accepted globally.
      </p>
    </div>
  </div>,
  <div
    onDragStart={handleDragStart}
    role="presentation"
    className="w-[280px]  pr-4"
  >
    <div className="card_activation_boxshadow w rounded sm:rounded-md md:rounded-lg lg:rounded-lg border-[1px] border-[#92ABFE] p-4 h-[320px]">
      <div className="flex pl-2 space-x-4">
        <div>
          <img
            src="./Images/card_issuing_images/paymentIcon.png"
            alt="icon"
            className="w-[35px] "
          />
        </div>
        <div className="w-[60%] ">
          <p className="font-bold tracking-wide">Payment</p>
          <p className="font-bold tracking-wide">Authorization</p>
        </div>
      </div>

      <p className="mt-8 text-justify">
        All your card payments will be deducted from your card balance, confirm
        each transaction with an OTP code via your phone number or email to
        authorize and complete each of the transactions.
      </p>
    </div>
  </div>,
  <div
    onDragStart={handleDragStart}
    role="presentation"
    className="w-[280px]  pr-4"
  >
    <div className="card_activation_boxshadow w rounded sm:rounded-md md:rounded-lg lg:rounded-lg border-[1px] border-[#92ABFE] p-4 h-[320px]">
      <div className="flex pl-2 space-x-4">
        <div>
          <img
            src="./Images/card_issuing_images/automateIcon.png"
            alt="icon"
            className="w-[35px] "
          />
        </div>
        <div className="w-[60%] ">
          <p className="font-bold tracking-wide">Automate </p>
          <p className="font-bold tracking-wide">Card Usage</p>
        </div>
      </div>

      <p className="mt-8 text-justify">
        Track your spendings by setting up your daily, weekly, and monthly
        spending limits on your cards, depending on your choice, you are free to
        seamlessly manage your card spending patterns.
      </p>
    </div>
  </div>,
  <div onDragStart={handleDragStart} role="presentation" className="w-[280px] ">
    <div className="card_activation_boxshadow w rounded sm:rounded-md md:rounded-lg lg:rounded-lg border-[1px] border-[#92ABFE] p-4 h-[320px]">
      <div className="flex pl-2 space-x-4">
        <img
          src="./Images/card_issuing_images/cardStatementIcon.png"
          alt="icon"
          className="w-[35px] "
        />
        <p className="font-bold tracking-wide">Card Statement</p>
      </div>

      <p className="mt-8 text-justify">
        You can always request for your card statements on our card issuing
        page, all your cards transactions are safe and secured, You can track
        all your spendings without any hassle.
      </p>
    </div>
  </div>,
];

function CardIssuing() {
  // const [activeSlide, setActiveSlide] = useState(null);

  return (
    <>
      <div className="page_overall_root_background_gradient mt-[-100px] md:mt-[-170px] lg:mt-[-200px] pt-36  md:pt-44  lg:pt-64      pb-16 sm:pb-24 md:pb-28 lg:pb-32 w-full lg:px-32  px-6 sm:px-16 ">
        <div
          className=" grid lg:grid-cols-2 lg:gap-x-4  md:grid-cols-2 md:gap-x-4    
       grid-cols-1 gap-y-4 
        "
        >
          <div className="rounded sm:rounded-md p-4 sm:p-6 lg:rounded-lg bg-[#fff] lg:p-8 md:p-6">
            <p
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold lg:tracking-wider  "
              style={{
                color: primaryColor,
              }}
            >
              Card Issuing
            </p>
            <p className="text-[#000] text-justify text-md mt-4 sm:mt-6 md:mt-10 sm:text:lg lg:text-lg lg:mt-12 ">
              Our card issuing service can be tailored to your specific needs as
              an Individual or business. we issue 3D secured virtual and
              physical debit USD and NGN cards to spend anywhere Verve, Visa,
              and Mastercard are accepted, both in-store and online, anytime,
              anywhere.
            </p>
          </div>

          <div className="rounded-lg bg-[#fff]">
            <p
              className=""
              style={{
                color: primaryColor,
              }}
            >
              Card Issuing
            </p>
          </div>
        </div>

        <div className="grid mt-12  md:mt-16 lg:mt-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          <div className="grid lg:col-span-2">
            <p
              className="text-md  md:text-xl lg:text-2xl font-bold lg:tracking-wider  "
              style={{
                color: primaryColor,
              }}
            >
              How The Card Works
            </p>
            <p className="text-[#000] text-justify text-md mt-4 sm:mt-6 md:mt-10 g:mt-12 sm:text:lg lg:text-lg l ">
              You can manage your cards spending limits, spending patterns,
              automate and reload your cards seamlessly to make global purchase,
              pay bills and spend both online and in-store, offline channels.
            </p>
          </div>
        </div>

        <p className="text-[#000] font-bold mt-16 mb-8">
          Below are the five easy steps:
        </p>

        <AliceCarousel
          mouseTracking
          items={items}
          autoWidth
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
          <Bluebutton text="Get Your Card Now"
          
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 sm:gap-y-14 lg:gap-y-20  md:gap-x-14 lg:gap-x-20">
          <div
            className="card_activation_boxshadow2 bg-[#fff] w rounded sm:rounded-md md:rounded-lg lg:rounded-lg border-[1px] border-[#92ABFE] p-4 h-[520px] md:h-[570px]   lg:h-[630px] 
        
        "
          >
            <div className="flex justify-center mt-4 md:mt-6">
              <img
                src="./Images/card_issuing_images/virtualCard.png"
                alt="icon"
                className="w-[150px] sm:w-[180px] md:w-[200px] "
              />
            </div>

            <p className="text-xl my-4 tracking-wider font-bold text-[#000] text-center sm:my-6   lg:my-8   lg:text-3xl">
              Virtual Card
            </p>

            <div className="flex justify-center">
              <p className="text-justify   lg:text-lg ">
                Our virtual cards defies currency barriers globally. Clear all
                your shopping carts, pay for your subscriptions, and live
                without the fear of failed transactions.
              </p>
            </div>
          </div>
          <div
            className="card_activation_boxshadow3 bg-[#fff] w rounded sm:rounded-md md:rounded-lg lg:rounded-lg border-[1px] border-[#92ABFE] p-4 h-[520px] md:h-[570px]   lg:h-[630px] 
        
        "
          >
            <div className="flex justify-center mt-4 md:mt-6">
              <img
                src="./Images/card_issuing_images/physicalCard.png"
                alt="icon"
                className="w-[150px] sm:w-[180px] md:w-[200px] "
              />
            </div>

            <p className="text-xl my-4 tracking-wider font-bold text-[#000] text-center sm:my-6   lg:my-8   lg:text-3xl">
              Physical Card
            </p>

            <div className="flex justify-center">
              <p className="text-justify   lg:text-lg ">
                Our physical card gives you confidence while you are out and
                about. Be it grocery shopping or a romantic dinner, be rest
                assured, your bills will be cleared without any hassle.
              </p>
            </div>
          </div>
          <div
            className="card_activation_boxshadow2 bg-[#fff] w rounded sm:rounded-md md:rounded-lg lg:rounded-lg border-[1px] border-[#92ABFE] p-4 h-[520px] md:h-[570px]   lg:h-[630px] 
        
        "
          >
            <div className="flex justify-center mt-4 md:mt-6">
              <img
                src="./Images/card_issuing_images/cardMaintainance.png"
                alt="icon"
                className="w-[150px] sm:w-[180px] md:w-[200px] "
              />
            </div>

            <p className="text-xl my-4 tracking-wider font-bold text-[#000] text-center sm:my-6   lg:my-8   lg:text-3xl">
              Card Maintenance
            </p>

            <div className="flex justify-center">
              <p className="text-justify   lg:text-lg ">
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
            className="card_activation_boxshadow3 bg-[#fff] w rounded sm:rounded-md md:rounded-lg lg:rounded-lg border-[1px] border-[#92ABFE] p-4 h-[520px] md:h-[570px]   lg:h-[630px] 
        
        "
          >
            <div className="flex justify-center mt-4 md:mt-6">
              <img
                src="./Images/card_issuing_images/cardManagement.png"
                alt="icon"
                className="w-[150px] sm:w-[180px] md:w-[200px] "
              />
            </div>

            <p className="text-xl my-4 tracking-wider font-bold text-[#000] text-center sm:my-6   lg:my-8   lg:text-3xl">
              Card Mangement
            </p>

            <div className="flex justify-center">
              <p className="text-justify   lg:text-lg ">
                Our card management system gives you the ability to block your
                cards in the event of loss or theft, and your private data are
                secured. You can simply monitor, set limitations, activate,
                deactivate, and manage your cards usage with the aid of our card
                management service from a single location.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center my-14">
        <Bluebutton text="Explore Pricing" />
        </div>
      </div>
    </>
  );
}

export default CardIssuing;
