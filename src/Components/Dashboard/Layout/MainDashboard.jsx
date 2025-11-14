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
import { Link } from "react-router-dom";
import { Loader } from "../../Loader/Loader";
import { BalanceLoading } from "../../Loader/Loader";
import { GetLocalStorage } from "../../LocalStorage/LocalStorage";
import { CheckVirtualAcc, InternalLoginSession} from "../../ApiCollection.jsx/ApiBuck";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { GetFunction} from "../../../Components/ApiCollection.jsx/ApiBuck";
//import { useImageHook } from "../../useImageHook";


export const MainDashboard = (Data) => {
//   const DashBoardImages = [
//     "./Images/dashboardImages/hero1image.png",
//     "./Images/dashboardImages/hero2image.png",
//     "./Images/dashboardImages/hero3image.png",
//     "./Images/dashboardImages/topup.png",
//     "./Images/dashboardImages/withdraw.png",
//     "./Images/dashboardImages/transfer.png",
//     "./Images/dashboardImages/convert.png",
//     "./Images/dashboardImages/arrowright.png",
//     "./Images/dashboardImages/feature1.png",
//     "./Images/dashboardImages/feature2.png",
//     "./Images/dashboardImages/feature3.png",
//     "./Images/dashboardImages/feature4.png",
//     "./Images/dashboardImages/feature5.png",
//     "./Images/dashboardImages/feature6.png",
//     "./Images/dashboardImages/feature7.png",
//     "./Images/dashboardImages/feature8.png",
//     "./Images/dashboardImages/feature9.png",
//     "./Images/dashboardImages/feature10.png",
// ]
// const ImageLoadingExecution = useImageHook(DashBoardImages);

     const [loading, setLoading] = useState(false)
    const [userPoints, setUserPoints] = useState(null);
   
   
  

  const { setHideNavbar, toggleSideBar, isDarkMode,
    dashLoading, bankNameState, accountNameState, accountNumberState,
    customerDetail, setDashLoading, setVirtualAccCreated, 
    setBankNameState, setAccountNameState, setAccountNumberState, 
    twoStepVerificationSuccess,setTwoStepVerificationSuccess, setDateEdit,
    newBalance, setNewBalance,  
  } = useContext(ContextProvider);
  //const {account_no, bank_name, account_name} = virtualAccCreated;
const navigate = useNavigate()
  const [visible, setVisibility] = useState(true);
  const [activeButtons, setActiveButtons] = useState([true, false, false]);
  const [blur, setBlur] = useState(false);
  const [blurTwo, setBlurTwo] = useState(false);
  
   //const [blurThree, setBlurThree] = useState(false);
  const [selected, setSelected] = useState("");
  const [selected2, setSelected2] = useState("");
  const [symbol, setSymbol] = useState("₦");
 const [balanceLoading, setBalanceLoading] = useState(false)
 const [balanceValue, setBalanceValue] = useState("");
 const [sessionModal, setSessionModal] = useState(false)

  const handleCopyClick = () => {
    const text = Data.aremxyAccountNumber;
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
if((clickedoption === "NGN")){
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
   
    }
   
    return;
  };

  

  //Generating an account in the dashboard
  const GenerateVirtualAccount = async(AuthUsed)=>{
      const authToken = localStorage.getItem("authorisedLogin")
      const getToken = localStorage.getItem("getToken");
     if(!navigator.onLine) return alert("Check your internet connection")
      if((authToken || getToken) && navigator.onLine){
      try{
      setDashLoading(true)
      const body =""
      const url = "https://aremxyplug.onrender.com/api/v1/virtualacc";
       const response = await axios.post(url,body,{ headers : {"Content-Type" : "application/json",
         Authorization : authToken || getToken},  withCredentials : true
      })
        if(response.status === 200 || response.status === 201){
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
        if(error && error.response === undefined){
          alert("Your internet connection is quite unstable.")
        } else if( error.response && error.response.status === 400){
          alert("Virtual Account Creation failed")
          setDashLoading(false);
        }else if(error.response.status === 404){
       alert("Check your Network connection")
       setDashLoading(false)
        }else if(error.response.status === 401){
      if(error?.response?.headers.get("x-new-auth-token") || error?.response?.headers["x-new-auth-token"]){
             setDashLoading(true)
         const newToken = error?.response?.headers.get("x-new-auth-token") ||error?.response?.headers["x-new-auth-token"];
        
         if(newToken !== "" && localStorage.getItem("authorisedLogin") ){
             console.log(newToken)
    localStorage.setItem("authorisedLogin", newToken);
     
           GenerateVirtualAccount();
             if(GenerateVirtualAccount){
               setDashLoading(false)
            }
  
           }else{
      localStorage.setItem("getToken", newToken);
    
   
             GenerateVirtualAccount();
            if(GenerateVirtualAccount){
               setDashLoading(false)
            }
         
        }
      }else{
      setDashLoading(false)
          return setSessionModal(true)
      }
      
        }else if(error.response &&error.response.status === 500){
          alert("SERVER ERROR");
          setDashLoading(false);
        }else if(error && error.response.status === undefined){
           setDashLoading(false);
           alert("Network connection unstable, kindly check your network connection")
            alert("Virtual Account Creation failed");
        }else {
            setDashLoading(false);
            alert("Virtual Account Creation failed");
        }
      }}
      }

      //Code to get the balance
      const GenerateAccountBalance = async()=>{
        const authToken = localStorage.getItem("authorisedLogin")
        const getToken = localStorage.getItem("getToken")
        if(!navigator.onLine) return setBalanceValue("Check your internet connection.");
        if((authToken || getToken) && navigator.onLine){
        try{
          setBalanceLoading(true);
         const url = "https://aremxyplug.onrender.com/api/v1/balance";
         const response = await axios.get(url,{ headers : {"Content-Type" : "application/json",
           Authorization : authToken || getToken},withCredentials :true
        })
           if(response){
            console.log(response)
          if(response.status && (response.status === 200 || response.status === 201)){
             setBalanceValue("");
           const checkBal =  response?.data?.data?.data?.balance;
           setNewBalance(checkBal)
             }
        }
        }catch(error){
           if((error.response === undefined || error.response === null) ) {
           setBalanceValue("Your internet connection is quite unstable.");
           }else if(error && error.response.status === 401){
           if(error.response?.headers.get("x-new-auth-token") || error.response?.headers["x-new-auth-token"]){
             setBalanceLoading(true)
         const newToken = error.response.headers.get("x-new-auth-token") ||error.response.headers["x-new-auth-token"];
        
         if(newToken !== "" && localStorage.getItem("authorisedLogin") ){
             console.log(newToken)
          localStorage.setItem("authorisedLogin", newToken);
          return GenerateAccountBalance();
      
           }else{
      localStorage.setItem("getToken", newToken);
       console.log(getToken);
       return GenerateAccountBalance();
          
      }}else{
        return setSessionModal(true);
      }
        }
        else if(error?.response?.status === 404){
     setBalanceValue("Check your internet connection.");
     
          } else if(error && error?.response?.status === 400){
     setBalanceValue("An unexpected error occured.");
     
          }else if (error && error?.response?.status === 500){
            setNewBalance("");
            setBalanceValue("Could not refresh balance.")
    }else if(error && error.response === undefined){
        setBalanceLoading(false);
        setBalanceValue("Check your internet connection.")
 }else{
  setBalanceValue("Check your internet connection.");
      }
          }finally {
          setBalanceLoading(false);
        }
      }
 }
      
const ValueRef = useRef()
 Data = GetLocalStorage()
 
  useEffect(() => {
    ValueRef.current = Data;
    if(Data?.ConfirmAcc === "true"){
    GenerateAccountBalance();
    setDateEdit((value)=>{
      const valueReset = new Date()
   const valueIsoFormat =
     valueReset !== undefined || valueReset !== null ?
        valueReset?.toLocaleString("sv-SE", {
          timeZone : "Africa/Lagos",
          hour12 : false
        }) : value
        return valueIsoFormat !== undefined ? valueIsoFormat?.slice(0,10) : ""
    }) 
  
    
    }
    setNav();
    setSelected("NGN"); 
    setSelected2("NGN");
    
   // HandleNetworkStatus()
  //    let resetInActivityTimer;
  //   const resetInactivityOnSession = ()=> {
  //    clearTimeout(resetInActivityTimer);
  //     resetInActivityTimer = setTimeout(()=> {
  //    alert("Safety and security precautions: You have been logged out of your session due to inactivity.");
  //    navigate("/Login", {replace : true});
  //    RemoveLocalStorage();
  //     }, 1200000)
  //  }
  //    resetInactivityOnSession();
  //    const event = ["mousemove","mousedown", "keydown", "scroll", "touchstart"];
  //    event.forEach(event=> {
  //     window.addEventListener(event, resetInactivityOnSession)
  //    })
    
     return () => {
      setHideNavbar(false);
    //  if(resetInActivityTimer) return clearTimeout(resetInActivityTimer);
    //  event.forEach(event => {
    //   window.removeEventListener(event, resetInactivityOnSession)
    //  })
       }
    //eslint-disable-next-line
   }, [])



  const ExecutePointFunction = async()=> {
  if(!navigator.onLine) return setUserPoints("Connection error.")
 
     const  successHandler = (response) => {
        if (!response?.data?.data) return;
        // console.log("fetch points succefully");
   const available = response?.data?.data?.point?.available_points ?? "Points refresh failed";
    setUserPoints(available);
     };
     const FailedHandler = (ErrorType) => {
      if(ErrorType === "unauthorised"){
      GetFunction("extra/point",
         setPointsLoading,  
         successHandler,
          (ErrorType)=> {
            if(ErrorType ==="Server error"){
             alert("Failed to retrieve points balance at the moment.")
            }else if(ErrorType === "unauthorised"){
             return setSessionModal(true)
             }
          },
           ()=> {})
      }else if(ErrorType === "Network error" || ErrorType === "User error"){
       setUserPoints("Connection error")
      }else if(ErrorType === "Server error"){
        alert("Points refresh failed");
      }
     };
      await GetFunction("extra/point",
         setPointsLoading,  
         successHandler,
          FailedHandler,
           ()=> {})
       
 }
  //Fetch Points
  const [pointsLoading, setPointsLoading] = useState(false)
   useEffect(() => {
 if(Data?.ConfirmAcc === "true"){
      ExecutePointFunction();
      }
        
           //eslint-disable-next-line
    }, []);

    window.addEventListener("online", ()=> {
  if((balanceValue === "Check your internet connection." ||  balanceValue === "Your internet connection is quite unstable.")
  &&  Data?.ConfirmAcc === "true"){
    GenerateAccountBalance();
     ExecutePointFunction()
  }

  
})
// if(!ImageLoadingExecution) {
//     return (
// <div className ="h-[100%] w-[100%] items-center justify-center">
//   Loading.....
// </div>
//   )
// }

return (
    <div className="relative h-[150%] w-[100%]">
 {/* ============SIDE BAR========= */}
        {toggleSideBar && (
         <div className="absolute top-0 left-0 z-[50]">
            <SideBar fullname ={Data.UserFullName} userId ={Data.aremxyUserId}
            BvnVerify ={Data.ConfirmBvn} NinVerify={Data.ConfirmId}/>
            </div>
        )}
              {/* ==============TOP BAR========== */}
      <TopBar />
 <div
          className={`pt-[100px] ${toggleSideBar  ? "lg:w-[73%] lg:float-right" : ""}
         mx-[5%]  lg:mt-[3%] h-[150%] mb-[5%]`}>
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
            className=""
            speed={2000}
            loop={true}
          >
            <SwiperSlide>
              {" "}
              <div className="w-[99%]   min-h-[120px] md:h-[112.29px] lg:h-[196px] 
              rounded-[7px] md:rounded-[11.5px] bg-[#FFC589] flex 
              px-[16px] lg:px-[50px] justify-between items-center lg:rounded-[20px] ">
                <div className="py-[20px] lg:py-[40px]">
                  <h2 className="text-[11px] leading-[14px] md:text-[13.75px]
                   font-bold mb-3 lg:text-[24px] lg:mb-4">
                    Welcome TO AREMXYPLUG!
                  </h2>
                  <h2 className="text-[10px] leading-[13px] md:text-[11.46px]
                   lg:text-[20px] lg:leading-[26px] mb-3">
                    The most Reliable Platform for Telecom, Payments, and
                    Digital Services.
                  </h2>
                </div>
     <div className="w-[91px] h-[66px] lg:w-[288px] lg:h-[200px]">
                <img
                  className="h-full"
                  src="./Images/dashboardImages/hero1image.png"
                  alt=""
                />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[99%] min-h-[120px] md:h-[112.29px] lg:h-[196px] rounded-[7px]
                 md:rounded-[11.5px] bg-[#BAC5F4] flex px-[16px] lg:px-[50px] justify-between
                  items-center lg:rounded-[20px]">
                <div className="py-[20px] lg:py-[40px]">
                  <h2 className="text-[11px] leading-[14px] md:text-[13.75px] 
                  font-bold mb-3 lg:text-[24px] lg:mb-4">
                    SPEND GLOBALLY WITH AREMXYPLUG!
                  </h2>
                  <h2 className="text-[10px] leading-[13px] md:text-[11.46px] lg:text-[20px] lg:leading-[26px] mb-3">
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
              <div className="w-[99%] min-h-[120px] md:h-[112.29px] lg:h-[196px] rounded-[7px]
               md:rounded-[11.5px] bg-[rgb(63,189,241)] flex px-[16px] lg:px-[50px] justify-between items-center lg:rounded-[20px]">
                <div className="py-[14px] lg:py-[40px]">
                  <h2 className="text-[11px] leading-[14px]  md:text-[13.75px]
                   font-bold mb-3 lg:text-[24px] lg:mb-4">
                    OUR PLATFORM IS PROTECTED AND SECURED.
                  </h2>
                  <h2 className="text-[10px] leading-[13px] md:text-[11.46px] 
                  lg:text-[20px] lg:leading-[26px] mb-3">
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
        
          <div className={` flex flex-col md:flex-row gap-5 mt-[5%] md:mt-4
            lg:mt-12 lg:rounded-[16.32px]  w-full`}>
             
            <div
              className={`  w-[100%] md:w-1/2 flex flex-col h-auto rounded-[8px] md:rounded-[10px] lg:rounded-[16.32px]
              lg:p-[20px] md:p-[15px] p-[10px] justify-between ${
                isDarkMode ? "bg-[#000] border " : "bg-[#e9edfb]"} 
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
                  className={`text-[#04177f] ${
                    isDarkMode ? " text-[#fff] bg-black" : "text-[#04177f]"
                  } ${
                    toggleSideBar
                      ? "bg-[#e9edfb] font-bold text-[13px] pt-[4%] md:absolute md:w-[30%]  md:ml-[3%] md:text-[19px] md:text-center lg:absolute  lg:mt-[3%] lg:w-[30%] lg:text-[24px]  text-[#04177f] lg:pb-[50px]"
                      : " bg-[#e9edfb] absolute w-[75%] md:w-[30%] text-[13px] font-bold text-center mt-[9.5%] md:mt-[3%] pt-[4%] md:pt-[4%] md:text-[15px]  md:pb-[6%] lg:pb-[5%]  md:text-extrabold lg:text-[24px] lg:mt-[1%]  lg:w-[33%] lg:pt-[%]  "}
                    ${activeButtons[1] 
                    ? "h-[100px] md:h-[100px] lg:h-[200px] md:pt-[8%]" :"h-[50px]  md:h-[40px] lg:h-[60px] md:pt-[2%]"}`}>
                  This feature is currently not available...
                </div>
             
              )}
            
              {/* ================= */}
             
              {!activeButtons[2]  ? (
                balanceValue?.length < 1 && Data.ConfirmAcc === "true" ? (
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
                    value={selected2}>
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
                      
                        symbol === "₦" && newBalance !== "" ?
                         `${Number(newBalance).toLocaleString("en-NG",{
                          style : "currency",
                          currency : "NGN"
                        })}` : symbol !==   "₦" ? `${symbol}0.00` :  ""
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
                  <div className="w-full flex justify-center backdrop-blur-[6px] lg:mt-[9px] lg:h-[40px]">
       <p className="lg:text-[16px] text-[10px] leading-[16px] lg:leading-[24px] font-[400] lg:font-[500] mt-[5px]">
       {balanceValue === "" && Data?.ConfirmAcc === "false" ? "Create your virtual account." : balanceValue }

       </p>
                    </div>
                 )
                // Fiat Wallets
              ) : (
                 userPoints === "Connection error." ? (
                 <p className=" text-[10px] leading-[16px] text-center
                  lg:leading-[24px] font-[400] lg:font-[500] mt-[5px]">
               {userPoints}
                 </p>
                 
                  ) : (
                <div
                  className={`${toggleSideBar ? "lg:pt-[7%]" : ""} ${
                    styles.viewBalance
                  }`}
                >
                
                  { visible ? (
                    
                    <span
                      className={` ${
                        toggleSideBar ? "lg:text-[19px]" : "lg:text-[37px]"
                      } text-[19px] leading-normal `}
                    >
                      ******
                    </span>
                  ) : (
                     <span className="flex items-center text-[19px] leading-normal lg:text-[37px]">
                      {pointsLoading === true ? (
                        <BalanceLoading/>
                      ): (
                    userPoints  !== undefined ? userPoints : ""
                   
                      )}
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
              ))}
              {/* ==================== */}
              <div
                className={`${toggleSideBar ? "lg:mt-[20%]" : ""} ${
                  styles.fcp
                } flex justify-between items-center mt-[10%] md:mt-[9%] `}
              >
                <div
                  onClick={() => {
                    handleClick(0);
                    setBlur(false);
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
                    isDarkMode ? " border" : ""
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
              <Link to="/virtual-account" className="w-full h-[15%]">
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
     <div className="relative h-[100%] w-[100%]">
              {blurTwo && (
                <div
                  className={`flex justify-center lg:w-[100%] lg:h-[100%] ${
                    isDarkMode ? " text-[#fff] bg-black" : "text-[#04177f]"
                  } ${
                    toggleSideBar
                      ? " bg-[#e9edfb] font-extrabold absolute   lg:flex lg:justify-start lg:mt-[2%] lg:pt-[2%] lg:text-[25px]"
                      : "bg-[#e9edfb] absolute text-[14px] h-[90%] w-[100%] mt-[4%] lg:mt-[0%] font-extrabold flex justify-start pt-[7%] md:h-[11%] md:text-[25px] md:pt-[5%] lg:pt-[3%] lg:h-[100%]"
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
                  <h2 className="font-semibold w-1/2 text-[11px] leading-[16px]  md:text-[11px] lg:text-[12px]">Bank Name</h2>
               <p className="text-[11px] leading-[16px] font-[400] text-right w-1/2 md:text-[11px] lg:text-[12px] ">{bankNameState ? bankNameState : Data.aremxyBankName ?Data.aremxyBankName : "" }</p> 
                </div>
                <div
                  className={`${styles.virtualaccounttxt} ${
                    toggleSideBar ? "lg:text-[10px]" : ""
                  }  flex text-[10px] gap-[20px] md:text-[15px] `}
                >
                  <h2 className="font-semibold w-1/2 text-[11px] leading-[18px]  md:text-[11px] lg:text-[12px]">Account Name</h2>
                  <p className="text-[11px] leading-[16px] font-[400] w-1/2 md:text-[11px] text-right lg:text-[12px] ">{accountNameState ? accountNameState :Data.aremxyAccountName ? Data.aremxyAccountName.slice(11) : ""}</p>
                </div>
               
                <div
                className={`${styles.virtualaccounttxt} ${
                    toggleSideBar ? "lg:text-[10px]" : ""
                  }  flex text-[10px] gap-[20px] md:text-[15px] `}
                >
                  <h2 className="font-semibold w-1/2 text-[11px] leading-[16px]  md:text-[11px] lg:text-[12px]">Account Number</h2>
                  <div className="flex justify-end items-center w-1/2 gap-[10px]">
                    <p className="text-[11px] leading-[16px] md:text-[11px] lg:text-[12px] font-[400]" >{accountNumberState ? accountNumberState : Data.aremxyAccountNumber ? `${Data.aremxyAccountNumber}` : ""}</p>
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
                   {(Data.ConfirmId === "true" || Data.ConfirmBvn === "true") && Data.ConfirmAcc === "false" ? "Your account has been verified successfully. Please click the button below to generate your virtual account."
                    : (Data.ConfirmId === "true" || Data.ConfirmBvn === "true") && Data.ConfirmAcc === "true" ? "You now have an account" : "Please verify your account to generate your virtual account." }
                {/* This is Collected for secure and cyber-attack-free transactions among AremxyPlug's users*/}
                </p>
                </div>
                <div className="flex w-[100%] justify-end">

  <Link  to={ (!Data.ConfirmId &&  !Data.ConfirmBvn) || (Data.ConfirmId === "false" && Data.ConfirmBvn === "false") ?  {
    pathname: "/ProfileSettingMain",
    state: { verificationOpen: true } 
  } : null } onClick={()=> {
    if((Data.ConfirmId === "true" ||  Data.ConfirmBvn === "true") && Data.ConfirmAcc === "false" && selected === "NGN"){
     GenerateVirtualAccount()
    }
  } }   disabled={selected !== "NGN"}
                  className={`text-[10px] w-[100px] py-[10px] text-center lg:py-[13px] lg:w-[100px]
                     rounded-[15px] lg:rounded-[30px] text-white md:text-[11px] lg:text-[12px] font-[600]   ${
                    isDarkMode ? "border bg-black" : "bg-[#04177f]"
                  } ${selected !== "NGN" && (Data.ConfirmId === "true" || Data.ConfirmBvn === "true") ? "bg-gray-400" : "bg-[#04177f]"}`}
               >
              {(Data.ConfirmId === "true" ||  Data.ConfirmBvn === "true") && Data.ConfirmAcc === "false"  ? "Generate" : "Verify"
               }
              
           </Link>
           </div>
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
            <div
        
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
            
            </div>
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
          
        </div>
        <div
        className={`w-full flex justify-center gap-[5px] py-[40px] lg:pt-[0px] lg:pb-[20px]`}
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
    
      {sessionModal && (
     <InternalLoginSession setExpiredSessionLogin={setSessionModal}/>
      )}
      
      </div>
  
  );
};
