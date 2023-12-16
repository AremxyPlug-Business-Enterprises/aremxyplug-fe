import React from "react";
import { ContextProvider } from "../../Context";
import { useContext } from "react";
import { useEffect } from "react";
import { DashBoardLayout } from "../../Dashboard/Layout/DashBoardLayout";
import { Link } from "react-router-dom";
import "./payment.css";

// FUNDING METHODS DATA STARTS HERE
const cardPaymentData = [
  {
    image: "./Images/paymentPage/paymentWallet.svg",
    title: "Wallets",
    content: "Conveniently store and receive money to your dedicated wallet.",
    link: '/wallet'
  },
  {
    image: "./Images/paymentPage/virtualAccounts.svg",
    title: "Virtual Accounts",
    content: "Experience hassle-free banking at your fingertips.",
    link: '/virtual-account'
  },
  {
    image: "./Images/paymentPage/moneyTransfer.svg",
    title: "Money Transfer",
    content: "Send and receive money securely without any hassle.",
    link: '/money-transfer'
  },
  {
    image: "./Images/paymentPage/cardPayment.svg",
    title: "Card Payments",
    content: "Shop online or in-store, fund your wallet with card without any hassle.",
    link: '/CardPayment'
  },
  {
    image: "./Images/paymentPage/internationalPayment.svg",
    title: "International Payments",
    content: "Send and receive money internationally without any hassle",
    link: '/To-other-banks'
  }
];
// FUNDING METHODS DATA ENDS HERE

const PaymentPage =() => {
  const { setHideNavbar, isDarkMode } = useContext(ContextProvider);

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
      <Link to={`${data.link}`}>
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
      </Link>
    )
  }

  return (
    <DashBoardLayout>
      <div className="flex flex-col justify-between h-full">
        <div>
          {/* TOP BANNER STARTS HERE */}
          <div className="w-full h-[90px] md:h-[112.29px] lg:h-[196px] rounded-[7px] md:rounded-[11.5px] flex px-[16px] lg:px-[50px] justify-between items-center lg:rounded-[20px] backgroundImage">
            <div className='py-[13px] lg:py-[40px] flex flex-col justify-center h-full pr-[25px] md:pr-[50px] lg:pr-[75px]'>
              <div>
                <h2 className='text-[10px] md:text-[13.75px] font-bold mb-3 lg:text-[24px] lg:mb-4'>ENJOY QUICK AND SECURE PAYMENT PROCESSING.</h2>
                <h2 className='text-[7px] md:text-[11.46px] lg:text-[20px] lg:leading-[26px]'>To make sure your transactions go off without a hitch, using our user-friendly interface to receive money both locally and internationally.</h2>
              </div>
            </div>
            <div className='h-[80px] lg:h-[170px] flex items-center justify-end overflow-hidden lg:justify-end'>
              <img src='./Images/paymentPage/paymentBanner.png' alt="" className='h-full -mb-4 -mr-2'/>
            </div>
          </div>
          {/* TOP BANNER ENDS HERE */}
          <div className="mt-[25.39px] md:mt-[35px] lg:mt-[60px] ">
            <div className="flex items-center">
              <p className=" text-[#7c7c7c] text-[10px]  md:text-[18px] lg:text-[20px]">Select Payment Type</p>
              <img src="Images/top_up/arrowR.png" alt="/" className="ml-[1%] w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"/>
            </div>
          </div>
          <div className="mt-[25.39px] md:mt-[35px] lg:mt-[60px]">
            {
              cardPaymentData.map((d, index) => (
                <Element 
                  isDarkMode={isDarkMode} 
                  data={d} 
                  key={index}
                />
              ))
            }
          </div>
        </div>
        <div className="flex gap-2 justify-center items-center md:mt-40 ">
          <h2 className="leading-[12px]  text-[10px] md:text-[12px] lg:text-[14px]">
            You need help?
          </h2>
          <Link to={`/ContactUs`} className={`${ isDarkMode ? "border":"bg-primary"} text-[8px] leading-[12px] text-white  px-2 py-1 rounded-full md:text-[10px] lg:text-[12px]`}>
            Contact Us
          </Link>
        </div>
      </div>
    </DashBoardLayout>
  );
}

export default PaymentPage;
