import React, { useState } from "react";
import { ContextProvider } from "../../Context";
import { useContext } from "react";
import { useEffect } from "react";
import { primaryColor } from "../cardIssuing/cardIssuing";
import "./topUp.css";

import { DashBoardLayout } from "../../Dashboard/Layout/DashBoardLayout";
import { Link } from "react-router-dom";
import TopupModal from "../../topup/TopupModal";
import CurrencyConversionModal from '../../CurrencyConversion/CurrencyConversionModal';

// FUNDING METHODS DATA STARTS HERE
const data = [

  {
    image: "./Images/top_up/user.png",
    title: "Virtual Accounts",
    content: "Fund your wallet using your dedicated virtual accounts.",
  },
  {
    image: "./Images/top_up/card-tick.png",
    title: "Card Payments",
    content: "Fund your wallet using your ATM / Bank card.",
  },
  {
    image: "./Images/top_up/bank.png",
    title: "Bank USSD",
    content: "Fund your wallet using other banks USSD code from your mobile.",
  },
  {
    image: "./Images/top_up/money-tick.png",
    title: "Request Money",
    content: "Request for money from any AremxyPlug user to fund your wallet.",
  },
  {
    image: "./Images/top_up/scan-barcode.png",
    title: "Payment Link",
    content: "Copy / create your payment link to receive money to your wallet.",
  },
];
// FUNDING METHODS DATA ENDS HERE

function TopUpScreen() {
  const { setHideNavbar, isDarkMode } = useContext(ContextProvider);

  const [paymentType, setPaymentType] = useState("fiat");
  const [showCryptoModal1, setShowCryptoModal1] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const setNav = () => {
    setHideNavbar(true);
  };

  useEffect(() => {
    setNav();
    return () => {
      setHideNavbar(false);
    };
    // eslint-disable-next-line
  }, []);

  const Element = ({isDarkMode, data}) => {
    return (
      <div className={` ${isDarkMode ? "Style11 ":"Style1 "} mt-[25px] lg:mt-[27px] cursor-pointer`}>
        <div className="flex items-center">
          <img src={data.image} alt="." className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"/>
          <div className="lg:ml-[10px] md:ml-[7px] ml-[4px]">
            <p className="text-[10px] md:text-[18px]">{data.title}</p>
            <p className={`${isDarkMode ? "text-[#fff]":"text-[#7c7c7c]"} text-[8px]  md:text-[16px]`}>{data.content}</p>
          </div>
        </div>
        <img src="Images/top_up/arrowR.png" alt="/" className="ml-[1%] w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]" />
      </div>
    )
  }

  return (
    <DashBoardLayout>
      <div className="flex flex-col justify-between h-full">
        <div>
          {/* TOP BANNER STARTS HERE */}
          <div className="w-full h-[90px] md:h-[112.29px] lg:h-[196px] rounded-[7px] md:rounded-[11.5px] bg-[#61CCFF] flex items-center px-[16px] lg:px-[50px] justify-between lg:rounded-[20px] bg-[#a1e8ff]">
            <div className='py-[13px] lg:py-[40px]'>
              <h2 className='text-[10px] md:text-[13.75px] font-bold mb-3 lg:text-[24px] lg:mb-4'>TOP UP YOUR WALLET</h2>
              <h2 className='text-[7px] md:text-[11.46px] lg:text-[20px] lg:leading-[26px] mb-3'>Please select the available funding methods to add money to your wallets.</h2>
            </div>
            <div className='h-[66px] lg:h-[170px]'>
              <img src='./Images/top_up/phone.png' alt="" className='h-full'/>
            </div>
          </div>
          {/* TOP BANNER ENDS HERE */}

          {/* FIAT AND CRYPTO BUTTON STARTS HERE */}
          <div className="flex justify-center md:justify-start py-[20px] md:py-[28.65px] lg:py-[50px] ">
            { paymentType === "fiat" ? (
              <div
                className="inline-flex lg:rounded-tr-[12px] lg:rounded-br-[12px] lg:rounded-bl-[12px] 
             rounded-tr-[4.902px] cursor-pointer py-[8.17px] px-[14%] rounded-tr-[5px] rounded-br-[5px] 
             rounded-bl-[5px] md:py-[14px] md:px-[5%] md:rounded-tr-[10px] md:rounded-br-[10px] md:rounded-bl-[10px] lg:px-[3%] lg:py-[18px]
              "
                style={{
                  backgroundColor: primaryColor,
                }}
              >
                <p className="text-[#fff] text-[8px]  md:text-[18px] lg:text-[20px]">
                  Fiat Topup
                </p>
              </div>
            ) : (
              <div
                onClick={() => setPaymentType("fiat")}
                className="inline-flex lg:rounded-tr-[12px] lg:rounded-br-[12px] lg:rounded-bl-[12px] 
             ounded-tr-[4.902px] cursor-pointer py-[8.17px] px-[14%] rounded-tr-[5px] rounded-br-[5px] 
             rounded-bl-[5px] md:py-[14px] md:px-[5%] md:rounded-tr-[10px] md:rounded-br-[10px] md:rounded-bl-[10px] lg:px-[3%] lg:py-[18px]
              "
                style={{
                  backgroundColor: "rgba(146, 171, 254, 0.18)",
                }}
              >
                <p className="text-[#000] text-[8px]  md:text-[18px] lg:text-[20px]">
                  Fiat Topup
                </p>
              </div>
            )}

            {paymentType === "crypto" ? (
              <div
                className=" lg:ml-[100px] md:ml-[57.28px]  ml-[40.85px]  inline-flex lg:rounded-tr-[12px] lg:rounded-br-[12px] lg:rounded-bl-[12px] 
             ounded-tr-[4.902px] cursor-pointer py-[8.17px] px-[14%] rounded-tr-[5px] rounded-br-[5px] 
             rounded-bl-[5px] md:py-[14px] md:px-[5%] md:rounded-tr-[10px] md:rounded-br-[10px] md:rounded-bl-[10px] lg:px-[3%] lg:py-[18px]
              "
                style={{
                  backgroundColor: primaryColor,
                }}
              >
                <p className="text-[#fff] text-[8px]  md:text-[18px] lg:text-[20px]">
                  Crypto Topup
                </p>
              </div>
            ) : (
              <div
                onClick={() => {
                  setPaymentType("crypto");
                  setShowCryptoModal1((prev) => !prev);
                }}
                className=" inline-flex lg:rounded-tr-[12px] lg:rounded-br-[12px] lg:rounded-bl-[12px]  lg:ml-[100px] md:ml-[57.28px] ml-[40.85px] 
cursor-pointer py-[8.17px] px-[14%] rounded-tr-[5px] rounded-br-[5px] rounded-bl-[5px] md:py-[14px] md:px-[5%] md:rounded-tr-[10px] md:rounded-br-[10px] md:rounded-bl-[10px] lg:px-[3%] lg:py-[18px]
"
                style={{
                  backgroundColor: "rgba(146, 171, 254, 0.18)",
                }}
              >
                <p className="text-[#000] text-[8px]  md:text-[18px] lg:text-[20px]">
                  Crypto Topup
                </p>
              </div>
            )}
          </div>
          {/* FIAT AND CRYPTO BUTTON ENDS HERE */}

          <div className="flex items-center">
            <p
              className=" text-[#7c7c7c] text-[10px]  md:text-[18px] lg:text-[20px]
            "
            >
              Funding Methods
            </p>
            <img
              src="Images/top_up/arrowR.png"
              alt="/"
              className="ml-[1%] w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
            />
          </div>

         
            <div>
              {/* FUNDING METHODS STARTS HERE */}
              <Link to='/virtual-account'>
                <Element
                  data={data[0]}
                  isDarkMode={isDarkMode}
                />
              </Link>
              <Element
                data={data[1]}
                isDarkMode={isDarkMode}
              />
              <div className='cursor-pointer' onClick={() => setShowModal(true)}>
                <Element
                  data={data[2]}
                  isDarkMode={isDarkMode}
                />
              </div>
              <div className='cursor-pointer' onClick={() => setShowModal(true)}>
                <Element
                  data={data[3]}
                  isDarkMode={isDarkMode}
                />
              </div>
              <div className='cursor-pointer' onClick={() => setShowModal(true)}>
                <Element
                  data={data[4]}
                  isDarkMode={isDarkMode}
                />
              </div>
              { showModal && 
                <CurrencyConversionModal
                  title='Top Up'
                  image='./Images/wallet/comingSoon.png'
                  onClick={()=> setShowModal(false)}
                  tag='This meathod is currently not available    '
                />
              }
              {/* FUNDING METHODS ENDS HERE */}
            </div>
            </div>
            <div className="flex gap-2 justify-center items-center md:mt-40 ">
              <h2 className="leading-[12px]  text-[10px] md:text-[12px] lg:text-[14px]">
                You need help?
              </h2>
              <Link
                to={`/ContactUs`}
                className={` ${ isDarkMode ? "border":"bg-primary"} text-[8px] leading-[12px] text-white  px-2 py-1 rounded-full md:text-[10px] lg:text-[12px]`}
              >
                Contact Us
              </Link>
            </div>
          
            </div>
        {showCryptoModal1 && (
          <TopupModal>
            <div className={`${isDarkMode ? "bg-[#000] border":"bg-[#fff]"} w-[90%] md:w-[70%] lg:w-[50%] pb-[33px] rounded-[8px] md:rounded-[11.5px]`} >
              <h2 className="text-center text-[10px] leading-[15px] mb-[10px] font-semibold md:text-[12px] md:leading-[18px] lg:text-base lg:leading-[24px] text-primary
              mt-[20px]
              ">
                This Feature is Currently Not Available.
              </h2>
              <div className="flex justify-center items-center mt-[16%] lg:mt-[10%] ">
                <div className="w-[110px] h-[110px] md:w-[260px] md:h-[260px]">
                  <img src="./Images/wallet/comingSoon.png" alt="" />
                </div>
              </div>
       
              <div className="mx-[6%] flex flex-col gap-[5px] ">
                <div className="text-[8px] font-extrabold md:text-[12px] lg:text-[13px] w-full text-right md:mb-[-20px] lg:mb-[-40px] ">
                  Coming soon...
                </div>
                <div
                  onClick={() => {
                    setShowCryptoModal1((prev) => !prev);
                    setPaymentType("fiat");
                  }}
                  className={` ${
                    isDarkMode ? "border" : "bg-[#04177f] "
                  } cursor-pointer     text-white text-[10px] h-[40px] rounded-[5px] flex items-center justify-center md:mx-auto md:w-[40%] md:h-[30px] md:text-[14px] lg:my-[3%] lg:h-[40px] lg:text-[20px] lg:w-[30%] lg:mx-auto`}
                >
                  Okay
                </div>
              </div>


            </div>
          </TopupModal>
        )}
    
    </DashBoardLayout>
  );
}

export default TopUpScreen;
