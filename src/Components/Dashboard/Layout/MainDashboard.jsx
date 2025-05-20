import React, { useState, useRef } from "react";
import { SideBar } from "../Layout/SideBar";
import { useEffect, useContext } from "react";
import { ContextProvider } from "../../Context";
import { TopBar } from "./TopBar";
import "react-multi-carousel/lib/styles.css";
import styles from "./Dashboard.module.css";
import style from "../DashboardComponents/component.module.css";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { RiFileCopyFill } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import QuickFeatures from "../DashboardComponents/QuickFeatures";
import { WalletInOutFlows } from "../DashboardComponents/WalletInOutFlows";
import { RecentTransaction } from "../DashboardComponents/RecentTransaction";
import { Link } from "react-router-dom";
import { Loader } from "../../Loader/Loader";
import { BalanceLoading } from "../../Loader/Loader";
import { GetLocalStorage } from "../../LocalStorage/LocalStorage";
import { CheckVirtualAcc } from "../../ApiCollection.jsx/ApiBuck";
import { useNavigate } from "react-router-dom";

import axios from "axios";
export const MainDashboard = (Data) => {
  const { setHideNavbar, toggleSideBar, isDarkMode,
    dashLoading, bankNameState, accountNameState, accountNumberState,
    customerDetail, setDashLoading, setVirtualAccCreated, 
    setBankNameState, setAccountNameState, setAccountNumberState, 
    twoStepVerificationSuccess,setTwoStepVerificationSuccess, networkStatus,  setNetworkStatus,
    newBalance, setNewBalance
  } = useContext(ContextProvider);
  //const {account_no, bank_name, account_name} = virtualAccCreated;
const navigate = useNavigate()
  const [visible, setVisibility] = useState(true);
  const [activeButtons, setActiveButtons] = useState([true, false, false]);
  const [blur, setBlur] = useState(false);
  const [blurTwo, setBlurTwo] = useState(false);
  
   //const [blurThree, setBlurThree] = useState(false);
  const textRef = useRef(null);
  const [selected, setSelected] = useState("");
  const [selected2, setSelected2] = useState("");
  const [symbol, setSymbol] = useState("₦");
 const [balanceLoading, setBalanceLoading] = useState(false)
 const [balanceValue, setBalanceValue] = useState(true);

  const handleCopyClick = () => {
    const text = textRef.current.innerText;
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("Copied to clipboard");
      })
      .catch((err) => {
        console.error("Error copying text: ", err);
      });
  };

  const visibilityHandler = () => {
    setVisibility(!visible);
  };

  const setNav = () => {
    setHideNavbar(true);
  };

 // Handling the getLocalStoarge information by passing it to data and making available through
 // the body of the  component
 
//const ConfirmAcc = localStorage.getItem("ConfirmAcc")
//console.log(Data)
  const handleClick = (index) => {
    const updatedButtons = activeButtons.map((isActive, i) => i === index);
    setActiveButtons(updatedButtons);
  };

  const handleSelectedOption = (event) => {
    const clickedoption = event.target.value;
    setSelected(clickedoption);
    setBlurTwo(
      clickedoption === "USD" ||
        clickedoption === "GBP" ||
        clickedoption === "AUD" ||
        clickedoption === "KES" ||
        clickedoption === "EUR"
    );

    return;
  };

  const handleSelectedOption2 = (event) => {
    const clickedoption = event.target.value;
    setSelected2(clickedoption);
console.log(clickedoption)
if((clickedoption === "NGN") && blur === true){
     setBlur(false);
     setSymbol("₦")
     
    }else if(clickedoption !== "NGN"){
      setSymbol(clickedoption === "USD"
       ? "$" : clickedoption === "GBP"
        ? "£" : clickedoption === "AUD"
        ? "AU$" : clickedoption === "EUR"
        ? "€" : clickedoption === "KES"
        ? "KSh" : ""
      )
      setBlur(true);
    }
    // setBlurTwo(
    //   clickedoption === "USD" ||
    //     clickedoption === "GBP" ||
    //     clickedoption === "AUD" ||
    //     clickedoption === "KES" ||
    //     clickedoption === "EUR" 
    // );
    // clickedoption === "NGN"
    //   ? setSymbol("₦")
    //   : clickedoption === "USD"
    //   ? setSymbol("$")
    //   : clickedoption === "GBP"
    //   ? setSymbol("£")
    //   : clickedoption === "AUD"
    //   ? setSymbol("AU$")
    //   : clickedoption === "KES"
    //   ? setSymbol("KSh")
    //   : clickedoption === "EUR"
    //   ? setSymbol("€")
    //   : setSymbol("");
    return;
  };

  //Connectio check Code
  
  //   const [networkType, setNetworkType] = useState('');
  //   const [downlink, setDownlink] = useState('');
  //   const [rtt, setRtt] = useState('');
  
  //   useEffect(() => {
  //     const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  // console.log(connection)
  //     if (connection) {
  //       setNetworkType(connection.effectiveType);
  //       setDownlink(connection.downlink);
  //       setRtt(connection.rtt);
  
  //       const handleConnectionChange = () => {
  //         setNetworkType(connection.effectiveType);
  //         setDownlink(connection.downlink);
  //         setRtt(connection.rtt);
  //       };
  //       connection.addEventListener('change', handleConnectionChange);

  //       return () => {
  //         connection.removeEventListener('change', handleConnectionChange);
  //       };
  //     }
  //     //eslint-disable-next-line
  //   }, []);
  


  //Generating an account in the dashboard
  const GenerateVirtualAccount = async(AuthUsed)=>{
      const authToken = localStorage.getItem("authorisedLogin")
      const getToken = localStorage.getItem("getToken");
     if(!navigator.onLine) return alert("Check your internet connection")
      if((authToken || getToken) && navigator.onLine){
      try{
      setDashLoading(true)
      const body =""
      const url = "https://aremxyplug.onrender.com/api/v1/virtualacc"
       const response = await axios.post(url,body,{ headers : {"Content-Type" : "application/json",
         Authorization : authToken || getToken},
      })
        if(response.status === 200 || 201){
           alert("Virtual Account Created")
           localStorage.setItem("AccCreated","true")
           AuthUsed = authToken || getToken;
           await CheckVirtualAcc(AuthUsed, customerDetail, setDashLoading, setVirtualAccCreated, 
            setBankNameState, setAccountNameState, setAccountNumberState, 
           twoStepVerificationSuccess,setTwoStepVerificationSuccess)
           } 
           if(CheckVirtualAcc && Data.ConfirmAcc === "true"){
            setDashLoading(false);
           }

      }catch(error){
        if( error.response && error.response.status === 400){
          alert("Virtual Account Creation failed")
          setDashLoading(false);
        }else if(error.response.status === 404){
       alert("Check your Network connection")
       setDashLoading(false)
        }else if(error.response.status === 401){
       alert("Your session has timed out.")
       setDashLoading(false)
        }else if(error.response &&error.response.status === 500){
          alert("SERVER ERROR");
          setDashLoading(false);
        }
      }}
      }

      //Code to gget the balance
      const GenerateAccountBalance = async()=>{
        const authToken = localStorage.getItem("authorisedLogin")
        const getToken = localStorage.getItem("getToken")
        if((authToken || getToken) && navigator.onLine){
        try{
          setBalanceLoading(true)
         const url = "https://aremxyplug.onrender.com/api/v1/balance"
         const response = await axios.get(url,{ headers : {"Content-Type" : "application/json",
           Authorization : authToken || getToken},
        })
           if(response){
            console.log(response)
          if(response.status && (response.status === 200 || 201)){
             setBalanceValue(true);
           const checkBal =  response.data.data.data.balance;
           console.log(checkBal);
           setNewBalance(checkBal)
             


          }
        }else if((response === undefined || null) || !response) {
           setBalanceValue(false);
       
        }
        }catch(error){
          if( error.response && (error.response.status === 400 || error.response.status === 401)){
           setBalanceValue(false);
       
         }else if(error.response.status === 404){
     setBalanceValue(false);
     
          }else if(error.response.status === undefined) {
     setBalanceValue(false)

          }else if (error && error.response.status ===500){
            setNewBalance(0);
      }
        
        }finally {
          setBalanceLoading(false)
        }
      }
       
        }

      //  const RunVirtualBalance = async()=> {
      //     if(dataStatus === true || educationPinStatus === true || subscriptionStatus === true || airtimeStatus === true){
      //     await  GenerateAccountBalance();
      //     }
      //   }
      const HandleNetworkStatus =()=> {
        if(navigator.onLine){
          alert("You are now Online")
        }else{
          setNetworkStatus(false)
          setBalanceValue(false);
          alert("You are Offline");
        }
      }
      

     const ValueRef = useRef()
   
 Data = GetLocalStorage()
  useEffect(() => {
    ValueRef.current = Data;
    GenerateAccountBalance();
    setNav();
    setSelected("NGN");
    HandleNetworkStatus()
    return () => {
      setHideNavbar(false);
    };
    //eslint-disable-next-line
   }, [networkStatus]); 
        //To help check the balance when transaction has been carried out
      //   const  PassedCondition = (dataStatus || educationPinStatus || subscriptionStatus || airtimeStatus)
      //   useEffect(()=> {
      // GenerateAccountBalance();
      //    },[PassedCondition])
      // alert(navigator.onLine);
return (
    <div className="h-[150%]">
      {/* ==============TOP BAR========== */}
      <TopBar />

      <div className="w-[100%] h-[200%]">
        {/* ============SIDE BAR========= */}
        {toggleSideBar && (
          <div className="absolute top-0 left-0 z-50">
            <SideBar fullname ={Data.UserFullName} userId ={Data.aremxyUserId}
            BvnVerify ={Data.ConfirmBvn} NinVerify={Data.ConfirmId}/>
          </div>
        )}
        <div
          className={`${
            toggleSideBar ? "lg:w-[73.5%] lg:float-right" : ""
          } w-[] mx-[5%] mt-[8%] lg:mt-[3%] h-[150%] mb-[5%] `}
        >
          {/* ==============HERO SECTION========== */}
          <Swiper
            autoplay={{
              delay: 3000, 
              disableOnInteraction: false,
            }}
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
            speed="2000"
            loop="true"
          >
            <SwiperSlide>
              {" "}
              <div className="w-full h-[90px] md:h-[112.29px] lg:h-[196px] rounded-[7px] md:rounded-[11.5px] bg-[#FFC589] flex px-[16px] lg:px-[50px] justify-between items-center lg:rounded-[20px] ">
                <div className="py-[13px] lg:py-[40px]">
                  <h2 className="text-[9px] md:text-[13.75px] font-bold mb-3 lg:text-[24px] lg:mb-4">
                    Welcome TO AREMXYPLUG!
                  </h2>
                  <h2 className="text-[7px] md:text-[11.46px] lg:text-[20px] lg:leading-[26px] mb-3">
                    The most Reliable Platform for Telecom, Payments, and
                    Digital Services.
                  </h2>
                </div>

                <img
                  className="w-[91px] h-[66px] lg:w-[288px] lg:h-[200px]"
                  src="./Images/dashboardImages/hero1image.png"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[90px] md:h-[112.29px] lg:h-[196px] rounded-[7px] md:rounded-[11.5px] bg-[#BAC5F4] flex px-[16px] lg:px-[50px] justify-between items-center lg:rounded-[20px]">
                <div className="py-[13px] lg:py-[40px]">
                  <h2 className="text-[9px] md:text-[13.75px] font-bold mb-3 lg:text-[24px] lg:mb-4">
                    SPEND GLOBALLY WITH AREMXYPLUG!
                  </h2>
                  <h2 className="text-[7px] md:text-[11.46px] lg:text-[20px] lg:leading-[26px] mb-3">
                    Send, Receive, and Store Money Securely without any Hassle.
                  </h2>
                </div>
                <div className="w-[91px] h-[66px] lg:w-[275px] lg:h-[200px]">
                  <img
                    src="./Images/dashboardImages/hero2image.png"
                    alt=""
                    className="h-full"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[90px] md:h-[112.29px] lg:h-[196px] rounded-[7px] md:rounded-[11.5px] bg-[#3FBDF1] flex px-[16px] lg:px-[50px] justify-between items-center lg:rounded-[20px]">
                <div className="py-[13px] lg:py-[40px]">
                  <h2 className="text-[9px] md:text-[13.75px] font-bold mb-3 lg:text-[24px] lg:mb-4">
                    OUR PLATFORM IS PROTECTED AND SECURED.
                  </h2>
                  <h2 className="text-[7px] md:text-[11.46px] lg:text-[20px] lg:leading-[26px] mb-3">
                    We use Industry-Standard Security Protocols and Advanced
                    Encryption to Protect your Data.
                  </h2>
                </div>
                <div className="w-[91px] h-[66px] lg:w-[220px] lg:h-[180px]">
                  <img
                    src="./Images/dashboardImages/hero3image.png"
                    alt=""
                    className="h-full"
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          {/* ==============HERO SECTION CLOSE========== */}

          {/* ==========AVAILABLE BALANCE=========== */}
        
          <div className={` flex flex-col md:flex-row gap-5 mt-[10%] md:mt-4
            lg:mt-12 lg:rounded-[16.32px]  w-full`}>
             
            <div
              className={`  w-[100%] md:w-1/2 flex flex-col h-auto rounded-[8px] md:rounded-[10px] lg:rounded-[16.32px]
              lg:p-[20px] md:p-[15px] p-[10px] justify-between ${
                isDarkMode ? "bg-[#000] border border-[#fff]" : "bg-[#e9edfb]"} 
               `}>
              <div className ="flex justify-end w-full items-center">
                <Link to="/wallet"
                  className={`text-[10px] md:text-[11px] lg:text-[12px] font-[600] ${
                    isDarkMode ? "border bg-black" : "bg-[#04177f]"
                  } ${styles.viewWallet}`}
                >
                  View Wallets
                </Link>
              
              </div>
              <p 
                className={`cursor-pointer ${
                  toggleSideBar ? "lg:text-[18px]" : "lg:text-[24px]"
                } ${styles.walletText} `}
              >
                Available Balance
              </p>

              {blur && (
                <div
                  className={`${
                    isDarkMode ? " text-[#fff]" : "text-[#04177f]"
                  } ${
                    toggleSideBar
                      ? "backdrop-blur-[6px] font-bold text-[13px] pt-[4%] md:absolute md:w-[30%]  md:ml-[3%] md:text-[19px] md:text-center lg:absolute  lg:mt-[3%] lg:ml-[2%] lg:w-[33%] lg:text-[24px]  text-[#04177f] lg:pb-[50px]"
                      : "backdrop-blur-[6px] absolute w-[75%] md:w-[30%] text-[13px] font-bold text-center mt-[9.5%] md:mt-[3%] ml-[6%] pt-[4%] md:pt-[4%] md:text-[15px] md:pb-[6%] lg:pb-[5%]  md:text-extrabold lg:text-[24px] lg:mt-[3%] lg:ml-[4%] lg:w-[37%] lg:pt-[%] "}
                    ${activeButtons[1] 
                    ? "h-[100px] md:h-[100px] lg:h-[200px] md:pt-[8%]" :"h-[50px]  md:h-[40px] lg:h-[60px] md:pt-[2%]"}`}>
                  This feature is currently not available...
                </div>
              )}
            
              {/* ================= */}
             
              {!activeButtons[2] ? (
                balanceValue === true ? (
                <div
                  className={`${toggleSideBar ? "lg:pt-[7%]" : ""} ${
                    styles.viewBalance
                  }`}
                >
                  <select
                    className={`${styles.selected}`}
                    name="curr"
                    id="curr"
                    onChange={handleSelectedOption2}
                    value={selected2}
                       
                  >
                    <option value="NGN">NGN</option>
                    <option  value="USD">USD</option>
                    <option  value="GBP">GBP</option>
                    <option  value="EUR">EUR</option>
                    <option  value="AUD">AUD</option>
                    <option  value="KES">KES</option>
                  </select>
                 
                  
                   {visible ? (
                    <span
                      className={` ${
                        toggleSideBar ? "lg:text-[19px]" : "lg:text-[37px]"
                      } text-[19px] leading-normal `}
                    >
                      ******
                    </span>
                  ) : (
                    <span className="text-[19px] leading-normal lg:text-[37px]">
                      {balanceLoading === true ? (
  <div className="flex justify-center items-center">
  <BalanceLoading/>
      </div>
                      ) :(
                      
                        symbol === "₦" ? `${symbol+newBalance}` : `${symbol}0.00`
                      )}
                    </span>
                    )}

                  <div onClick={visibilityHandler} className=" text-[#92ABFE]">
                    {visible ? (
                      <div className={`lg:text-[40px] ${styles.eye}`}>
                        <AiFillEye />
                      </div>
                    ) : (
                      <div className={`lg:text-[40px] ${styles.eye}`} 
                      >
                        <AiFillEyeInvisible />
                      </div>
                    )}
                  </div>
                </div>) :  (
                  <div className=" w-full flex justify-center backdrop-blur-[6px] lg:mt-[9px] lg:h-[40px]">
       <p className="lg:text-[16px] text-[10px] leading-[16px] lg:leading-[24px] font-[400] lg:font-[500] mt-[5px]">
         Check your network connection
       </p>
                    </div>
                 )
                // Fiat Wallets
              ) : (
                <div
                  className={`${toggleSideBar ? "lg:pt-[7%]" : ""} ${
                    styles.viewBalance
                  }`}
                >
                  {visible ? (
                    <span
                      className={` ${
                        toggleSideBar ? "lg:text-[19px]" : "lg:text-[37px]"
                      } text-[19px] leading-normal `}
                    >
                      ******
                    </span>
                  ) : (
                    <span className="flex items-center text-[19px] leading-normal lg:text-[37px]">
                      0.00
                    </span>
                  )}
                  <div onClick={visibilityHandler} className=" text-[#92ABFE]">
                    {visible ? (
                      <div className={`lg:text-[40px] ${styles.eye}`}>
                        <AiFillEye />
                      </div>
                    ) : (
                      <div className={`lg:text-[40px] ${styles.eye}`}>
                        <AiFillEyeInvisible />
                      </div>
                    )}
                  </div>
                </div>
              )}
              {/* ==================== */}
              <div
                className={`${toggleSideBar ? "lg:mt-[20%]" : ""} ${
                  styles.fcp
                } flex justify-between items-center mt-[10%] md:mt-[9%] `}
              >
                <div
                  onClick={() => {
                    handleClick(0);
                    if(selected2 === "NGN"){
                    setBlur(false);
                    }else{
                    setBlur(true);
                    }
                    // setBlurThree();
                  }}
                  value="fiat"
                  className={`${styles.fcp2}  ${
                    activeButtons[0]
                      ? "bg-[#04177f] text-[#fff]"
                      : " bg-[#92ABFE2E]"
                  } ${
                    isDarkMode ? " border" : " "
                  } cursor-pointer flex  justify-center
                   items-center text-[10px] md:text-[11px] lg:text-[12px] font-[600] leading-normal 
                   rounded-[10px] py-[10px] px-[20px] lg:w-[16%] lg:py-[10.47px] lg:px-[15px] lg:rounded-[19px] `}
                >
                  Fiat
                </div>

                <div
                  onClick={() => {
                    handleClick(1);
                    setBlur(true);
                    // setBlurThree();
                  }}
                  className={`${styles.fcp2} ${
                    isDarkMode ? " border" : " "
                  } cursor-pointer flex  justify-center
                   items-center text-[10px] md:text-[11px] lg:text-[12px] font-[600] leading-normal 
                   rounded-[10px] py-[10px] px-[20px] lg:w-[16%] lg:py-[10.47px] lg:px-[15px] lg:rounded-[19px] ${
                    activeButtons[1]
                      ? "bg-[#04177f] text-[#fff]"
                      : "bg-[#92ABFE2E]"
                  } `}
                >
                  Crypto
                </div>

                <div
                  onClick={() => {
                    handleClick(2);
                    setBlur(false);
                    // setBlurThree();
                  }}
                  className={`${styles.fcp2} ${
                    isDarkMode ? " border" : " "
                  }  cursor-pointer flex  justify-center
                   items-center text-[10px] md:text-[11px] lg:text-[12px] font-[600] leading-normal 
                   rounded-[10px] py-[10px] px-[20px] lg:w-[16%] lg:py-[10.47px] lg:px-[15px] lg:rounded-[19px] ${
                    activeButtons[2]
                      ? "bg-[#04177f] text-[#fff]"
                      : "bg-[#92ABFE2E]"
                  } `}
                >
                  Points
                </div>
              </div>
            </div>
            
            
               

            {/* ==========VIRTUAL ACCOUNTS============= */}
            {dashLoading ? (<div className=" flex justify-center items-center md:w-1/2  lg:h-[200px] w-[100%] h-[100px]">
             <Loader/>
            </div>):
            (
            <div
            className={`${
                isDarkMode ? "bg-[#000] border border-[#fff]" : "bg-[#e9edfb]"
              } w-full h-auto md:w-1/2 rounded-[8.32px] lg:rounded-[16.32px] md:rounded-[10px]
              flex flex-col justify-between lg:p-[20px] md:p-[15px] p-[10px]`} >
                <div className="h-full w-full">
         {Data.ConfirmAcc === "true" ? (
          <div className="h-full gap-[15px] jsutify-between w-full flex flex-col">
              <Link to="/virtual-account" className="w-full h-[15%">
                {" "}
                <button
                  className={`text-[10px] md:text-[11px] mb-[15px] md:mt-[0px] lg:text-[12px] font-[600]  ${
                    isDarkMode ? "border bg-black" : "bg-[#04177f]"
                  } ${styles.viewWallet}`}
                >
                  View Accounts
                </button> 
              </Link>
              {/* <div> */}
              <div className=" w-full justify-center  flex flex-col h-[85%] gap-[10px]">
                <div className="flex flex-col md:gap-[10px] gap-[5px]">
                <div className="flex w-full items-center md:w-auto  gap-[30px] ">
                  <p 
                    className={`${styles.GVA} ${
                      toggleSideBar ? "lg:text-[16px]" : "lg:text-[24px]"
                    } text-[11px] font-extrabold cursor-pointer`}
                  >
                    Global Virtual Accounts
                  </p>

                  <select
                    className={`${styles.selected}`}
                    name="curr"
                    id="curr"
                    onChange={handleSelectedOption}
                    value={selected}
                  >
                    <option value="NGN">NGN</option>
                    <option  value="USD">USD</option>
                    <option value="GBP">GBP</option>
                    <option value="EUR">EUR</option>
                    <option value="AUD">AUD</option>
                    <option value="KES">KES</option>
                  </select>
              </div>
                <p className="w-[50%] text-[8px] md:text-[10px] text-[#04177f] leading-normal font-bold lg:text-[11px]">
                  The below accounts are reserved for your wallet only.
                </p>
           </div>
     <div className="">
              {blurTwo && (
                <div
                  className={`flex justify-center ${
                    isDarkMode ? " text-[#fff]" : "text-[#04177f]"
                  } ${
                    toggleSideBar
                      ? "backdrop-blur-[5px]  font-extrabold absolute lg:h-[21%] lg:w-[35%] lg:ml-[-8px] lg:flex lg:justify-start lg:mt-[2%] lg:pt-[2%] lg:text-[25px]"
                      : "backdrop-blur-[4.5px] absolute text-[14px] h-[13%] w-[85%] mt-[4%] lg:mt-[0%] font-extrabold flex justify-start pt-[7%] md:h-[11%] md:text-[25px] md:pt-[5%] lg:pt-[3%] lg:w-[43%] lg:h-[22%] lg:ml-[-1%]"
                  } `}
                >
                  Coming Soon...
                </div>
              )}

              <div
                className={`${
                  toggleSideBar ? "lg:gap-[20px]" : "lg:gap-[30px]"
                } mt-[5%] flex flex-col gap-[10px] `}
              >
                <div
                  className={`${styles.virtualaccounttxt} ${
                    toggleSideBar ? "lg:text-[10px] lg:mt-[1%]" : ""
                  } flex text-[10px] gap-[20px]  md:text-[15px]`}
                >
                  <h2 className="font-semibold w-1/2 text-[10px]  md:text-[11px] lg:text-[12px]">Bank Name</h2>
               <p className="text-[10px] text-right w-1/2 md:text-[11px] lg:text-[12px] font-[400]">{bankNameState ? bankNameState : Data.aremxyBankName ?Data.aremxyBankName : "" }</p> 
                </div>
                <div
                  className={`${styles.virtualaccounttxt} ${
                    toggleSideBar ? "lg:text-[10px]" : ""
                  }  flex text-[10px] gap-[20px] md:text-[15px] `}
                >
                  <h2 className="font-semibold w-1/2 text-[10px]  md:text-[11px] lg:text-[12px]">Account Name</h2>
                  <p className="text-[10px] w-1/2 md:text-[11px] text-right lg:text-[12px] font-[400]">{accountNameState ? accountNameState :Data.aremxyAccountName ? Data.aremxyAccountName.slice(11) : ""}</p>
                </div>
               
                <div
                className={`${styles.virtualaccounttxt} ${
                    toggleSideBar ? "lg:text-[10px]" : ""
                  }  flex text-[10px] gap-[20px] md:text-[15px] `}
                >
                  <h2 className="font-semibold w-1/2 text-[10px] md:text-[11px] lg:text-[12px]">Account Number</h2>
                  <div className="flex justify-end items-center w-1/2 gap-[10px]">
                    <p className="text-[10px]  md:text-[11px] lg:text-[12px] font-[400]" >{accountNumberState ? accountNumberState : Data.aremxyAccountNumber ? `${Data.aremxyAccountNumber}` : ""}</p>
                    <div
                      onClick={handleCopyClick}
                      className="text-[#92abfec3] text-[13px] font-extrabold lg:text-[16px]"
                    >
                      <RiFileCopyFill />
                    </div>
                  </div>
                
                </div>
               
                </div>
                </div>
                </div>
                </div>
                
                ): (
                  <div className="md:h-[100%] gap-[30px]  md:gap-[0px] h-auto  w-full  flex flex-col justify-between">
                     <div onClick ={()=> {
                      navigate("/virtual-account")
                     }} className="w-full py-[10px] flex justify-end">
                {" "}
                <button
                  className={`text-[10px] md:text-[11px] mb-[15px] md:mt-[0px] lg:text-[12px] font-[600]  ${
                    isDarkMode ? "border bg-black" : "bg-[#04177f]"
                  } ${styles.viewWallet}`}
                >
                  View Accounts
                </button> 
              </div>
                   <div className="md:h-[30%] flex flex-col gap-[15px]  md:gap-[15%]">
                <div className="flex w-full  md:items-center items-end  gap-[10%]">
                 <p 
                    className={`${styles.GVA} ${
                      toggleSideBar ? "lg:text-[20px]" : "lg:text-[24px]"
                    } text-[11px] font-extrabold cursor-pointer`}
                  >
                    Global Virtual Accounts
                  </p>
                  <select
                    className={`${styles.selected}`}
                    name="curr"
                    id="curr"
                    onChange={handleSelectedOption}
                    value={selected}
                  >
                    <option value="NGN">NGN</option>
                    <option  value="USD">USD</option>
                    <option value="GBP">GBP</option>
                    <option value="EUR">EUR</option>
                    <option value="AUD">AUD</option>
                    <option value="KES">KES</option>
                  </select>
                </div>
                <p className={`text-[11px] md:text-[13px] lg:text-[14px] leading-[16px] 
                 md:leading-[18px] lg:leading-[22px] font-[500] 
                text-left
               ${isDarkMode ? "text-white" : "text-blue-950"}`}>
        {(Data.ConfirmId === "true" || Data.ConfirmBvn === "true") && Data.ConfirmAcc === "false" ? "Create a virtual account dedicated to your wallet." : "The below accounts are reserved for your wallets only."}
              </p>
              </div>
                      <div className="flex flex-col gap-[8px] md:h-[30%]  md:gap-[10%]">
             
              <p className={`lg:text-[16px] font-[400] lg:leading-[24px]
               text-[12px] md:text-[14px] md:leading-[18px]
                 ${isDarkMode ? "text-white" : "text-black"}`}>
                   {(Data.ConfirmId === "true" || Data.ConfirmBvn === "true") && Data.ConfirmAcc === "false" ? "Your account has been verified successfully. Please click the button below to generate your virtual account." : (Data.ConfirmId === "true" || Data.ConfirmBvn === "true") && Data.ConfirmAcc === "true" ? "You now have an account" : "Please verify your account to generate your virtual account." }
                {/* This is Collected for secure and cyber-attack-free transactions among AremxyPlug's users*/}
                </p>
                </div>
                <Link to={ (!Data.ConfirmId &&  !Data.ConfirmBvn) || (Data.ConfirmId === "false" && Data.ConfirmBvn === "false") ?  {
    pathname: "/ProfileSettingMain",
    state: { verificationOpen: true } 
  } : null } >
                {" "}

                <button
                onClick={()=> {
    if((Data.ConfirmId === "true" ||  Data.ConfirmBvn === "true") && Data.ConfirmAcc === "false" && selected === "NGN"){
     GenerateVirtualAccount()
    }
  } }
                 disabled={selected !== "NGN"}
                  className={`text-[10px] md:text-[11px] lg:text-[12px] font-[600]   ${
                    isDarkMode ? "border bg-black" : "bg-[#04177f]"
                  } ${styles.viewWallet} ${selected !== "NGN" ? "bg-gray-400" : "bg-[#04177f]"}`}
                >
               {(Data.ConfirmId === "true" ||  Data.ConfirmBvn === "true") && Data.ConfirmAcc === "false"  ? "Generate" : "Verify"
               }
              
               
                </button>
              </Link>
                </div>
                )}
                </div>
                {/* Point of implementation */}
             
            </div>
                )}
            {/* Stop*/}
            </div>
          
          {/* ================VIRTUAL ACCOUNT CLOSE=============== */}

          <div
            className={`flex justify-between w-[100%] ${
              toggleSideBar ? "lg:gap-[63px]" : "lg:gap-[80px]"
            } flex mt-[5%] gap-[10px] md:gap-[50px] `}
          >
            <Link
              to="/top-up"
              className={`${
                isDarkMode ? " border bg-[#000]" : "bg-[#04177f]"
              } w-[25%] rounded-[10px] lg:rounded-[19px] lg:py-[15px]
               py-[12px] flex items-center px-[10px] gap-[10%]
                `}
            >
              <img
                className="w-[11px] h-[11px] md:h-[20px] md:w-[20px] lg:w-[51px] lg:h-[51px]"
                src="./Images/dashboardImages/topup.png"
                alt="topup"
              />
              <p className="text-white text-[10px] md:text-[12px] lg:text-[16px] 
                font-[500] lg:font-[600]">Topup</p>
            </Link>
            <Link
              to="/money-transfer"
              className={`${
                isDarkMode ? " border bg-[#000]" : "bg-[#04177f] "
              } w-[25%] py-[12px] px-[10px] lg:py-[15px]
               flex items-center gap-[10%] rounded-[10px] lg:rounded-[19px]`}
            >
                <img
                  className="w-[11px] h-[11px] md:h-[20px] md:w-[20px] lg:w-[51px] lg:h-[51px]"
                  src="./Images/dashboardImages/transfer.png"
                  alt="topup"
                />
                <p className="text-white text-[10px] md:text-[12px] lg:text-[16px] 
                font-[500] lg:font-[600]">Transfer</p>
            </Link>
            <Link
              to="/withdraw"
              className={`${
                isDarkMode ? " border bg-[#000]" : "bg-[#04177f]"
              } w-[25%] py-[12px] px-[10px] lg:py-[15px]
              flex items-center gap-[10%] rounded-[10px] lg:rounded-[19px]`}
            >
              {" "}
                <img
                  className="w-[11px] h-[11px] md:h-[20px] md:w-[20px] lg:w-[51px] lg:h-[51px]"
                  src="./Images/dashboardImages/withdraw.png"
                  alt="topup"
                />
                <p className="text-white text-[10px] md:text-[12px] lg:text-[16px] 
                font-[500] lg:font-[600]">Withdraw</p>
            
            </Link>
            <Link
              to="/currencyConversion"
              className={`${
                isDarkMode ? " border bg-[#000]" : "bg-[#04177f]"
              } w-[25%] py-[12px] flex items-center gap-[10%] 
              rounded-[10px] lg:py-[15px] lg:rounded-[19px] px-[10px]`}
            >
                <img
                  className="w-[11px] h-[11px]
                   md:h-[20px] md:w-[20px] lg:w-[51px] lg:h-[51px]"
                  src="./Images/dashboardImages/convert.png"
                  alt="topup"
                />
                <p className="text-white text-[10px] md:text-[14px] lg:text-[16px] 
                font-[500] lg:font-[600]">Convert</p>
              
            </Link>
          </div>

          <QuickFeatures />
          <WalletInOutFlows className={styles.selected} />
          <RecentTransaction />
        </div>
        <div
        className={`transaction2 flex justify-center pb-[10%]`}
          >
            <div className="flex gap-[15px] items-center md:mt-[40px]">
              <div className="text-[8px] md:text-[12px] lg:text-[14px]">
                You need help ?
              </div>
              <Link to="/ContactUs">
                <div
                  className={`${isDarkMode ? "border " : "bg-[#04177f]"} ${
                    style.contactus
                  }`}
                >
                  Contact Us
                </div>
              </Link>
            </div>
          </div> 
      </div>
      </div>
  
  );
};
