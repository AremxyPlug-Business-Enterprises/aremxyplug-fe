import React, {useState} from "react";
import { Link } from "react-router-dom";
import { DashBoardLayout } from "../Dashboard/Layout/DashBoardLayout";
import { AiFillEyeInvisible } from "react-icons/ai";
import "../CurrencyConversion/currencyConversion.css";
import OtpInput from "react-otp-input";
import { AiFillEye } from "react-icons/ai";
import { useContext, useEffect } from "react";
import { ContextProvider } from "../Context";
import { Modal } from "../Screens/Modal/Modal";
import styles from "../Dashboard/DashboardComponents/TransferComponent/transfer.module.css";
import { CountrySelector } from "../Dashboard/DashboardComponents/CountrySelect/CountrySelector";
import { FiatSelector } from "./currencyPopups/countryselectorFiat";


const FiatConversion = () => {

    const [exchangeRate, setExchangeRate] = useState(null);
    useEffect(() => {
      // Replace 'YOUR_API_KEY' with your actual API key or use a different exchange rate API.
      const apiUrl = `https://api.exchangerate-api.com/v4/latest/USD`;
  
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          const nairaToDollarRate = data.rates["NGN"];
          setExchangeRate(nairaToDollarRate);
        })
        .catch((error) => console.error("Error fetching data:", error));
    }, []);


    const [conversionRate, setConversionRate] = useState(false);
  

  const [selectedCountry, setSelectedCountry] = useState("");

  const handleCountrySelect = (country, id) => {
    setSelectedCountry(country);
  };
  const [selectedCountryTwo, setSelectedCountryTwo] = useState("");

  const handleCountrySelectTwo = (country, id) => {
    setSelectedCountryTwo(country);
  };

  
        
    const CopyButton = ({ textToCopy }) => {
    const handleCopyClick = () => {
      navigator.clipboard.writeText(textToCopy)
        .then(() => {
          // Handle successful copy, e.g., show a success message
          alert('Copied to clipboard');
        })
        .catch((error) => {
          // Handle error, e.g., show an error message
          console.error('Copy failed: ' + error);
        });
    };
    return (
        <button onClick={handleCopyClick}>
          <img src="./Images/currencyImages/copy.svg" alt="" className="md:w-[13px] md:h-[15px] lg:w-[21px] lg:h-[27px]"/>
        </button>
      );
    };
    const cvRate = (1/ exchangeRate).toFixed(4)
    const {
        toggleSideBar,
        inputPin,
        isDarkMode,
        setHideNavbar,
        convertedAmount,
        setConvertedAmount,
        initialValue,
        setInitialValue,
        setInputPin,
        toggleVisibility,
        isVisible,    
      } = useContext(ContextProvider);

      const convertHandler = (e) => {
        setConvertedAmount(e.target.value);
      };
      const initialHandler = (e) => {
        setInitialValue(e.target.value);
      };

     

      const [confirm, setConfirm] = useState(false);

      const handleConfirm = (event) => {
    event.preventDefault();
      setConfirm(true)
  };
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


      const [pinInput, setPinInput] = useState(false);
      const handlePinInput = () =>{
        setPinInput(true);
        setConfirm(false);
      }

      const [conversionSuccessful, setConversionSuccessful] = useState(false)
       const handleConversionSuccessful = () =>{
        setPinInput(false);
        setConversionSuccessful(true);
       }
      

    const availableBalance = (`${50},000`);

      const [isFocused, setIsFocused] = useState(false);
      const handleFocus = () => {
        setIsFocused(true);
      };
    
      const handleBlur = () => {
        setIsFocused(false);
      };
    return(
    <div>
        <DashBoardLayout>
            <div
        className={`${isDarkMode ? "" : ""} scroll-none mx-[%] ${
          toggleSideBar ? "lg:mt-[1%]" : "lg:mt-[4%]" } flex flex-col justify-between md:mt-[-4%]`}>
          </div>
            <div className="">
                <div id='fiatBackground' className="h-[90px] lg:h-[196px] md:h-[112.29px] rounded-[6.6px] md:rounded-[11.46px] lg:rounded-[20px] mx-auto  flex gap-6 justify-between px-[16.51px] md:px-[28.65px] lg:px-[50px]">
                    <div className="py-[9.57px] md:py-[16.61px] lg:py-[29px] align-middle self-center flex flex-col gap-1.5 w-[70%]">
                        <p className="text-[9px] lg:text-[24px] md:text-[13.75px] font-semibold ">CONVERT FIAT CURRENCY WITH AREMXYPLUG.</p>
                        <p className="text-[7.5px] lg:text-[20px] md:text-[11.46px]">Convert from one fiat currency to another without any hassle, enjoy competitive exchange rate with no any hidden fee.</p>
                    </div>
                    <div className="flex w-[23%] h-[97%] pt-2 shrink-0">
                        <img src="./Images/currencyImages/cash.svg" alt="" className="" />
                    </div>
                </div>
                <div className=" mx-auto flex gap-1.5 py-[25.29px] lg:py-[50px] md:py-[28.64px]">
                   <div className="text-[8px] lg:text-xl md:text-[11.46px] font-medium text-[#7C7C7C]">Select the below fiat currency to convert</div>
                   <div>
                      <img src="./Images/currencyImages/right.svg" alt="" className="lg:h-[24px] lg:w-[24px] md:h-[13.75px] md:w-[13.75px]" />
                   </div>
                </div>

                <div className="flex mx-auto cursor-pointer" onClick={() => setConversionRate(true)}>
                    <div className="bg-[#04177F] text-white rounded-[2px] md:rounded-[3.5px] lg:rounded-[6px] text-[7px] md:text-[10px] lg:text-[16px] text-center font-semibold w-full md:w-[210.83px] lg:w-[368px] py-[5px] lg:py-[11px] md:py-[8px]">
                        Real-time Fiat Conversion Check Rate
                    </div>
                </div>
      {conversionRate && (
        <Modal>
          <div
            className={`${styles.conversionrate} ${
              toggleSideBar
                ? "md:w-[45%] lg:ml-[20%] lg:w-[40%]"
                : "md:w-[80%] lg:w-[562px]"
            } w-[90%] relative overflow-auto bg-red-500`}
          >
            {" "}
            <img
              onClick={() => setConversionRate(false)}
              className="absolute left-[89%] w-[18px] h-[18px] my-[1%] md:w-[40px] md:h-[40px] lg:h-[35px] lg:w-[35px]"
              src="/Images/transferImages/close-circle.png"
              alt=""
            />
            <hr className="h-[6px] bg-[#04177f] border-none mt-[8%] md:mt-[8%] md:h-[15px]" />
            <div className="bg-[#04177f] font-medium py-3 lg:py-5 text-[#fff] mt-[60px] lg:mt-[50px] text-[10px] my-[2%] h-[20px] flex justify-center items-center rounded-[2px] lg:rounded-[8px] md:my-[5%] md:h-[30px] md:text-[15px] lg:text-[16px] lg:mx-auto lg:my-[5%] lg:h-[38px] lg:w-[60%]">
              Real-time fiat Conversion Check Rate
            </div>
            
            <div className="mx-[5%]">
              <div className="font-extrabold flex text-[#000] text-[10px] leading-[130%] items-center my-[7%] mt-[30px] gap-[8px] md:my-[3%] md:text-[18px] lg:text-[20px]">
                <p>Sender</p>
                <img
                  className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                  src="./Images/Dashboardimages/arrowright.png"
                  alt="/"
                />
              </div>
              <div className={``}>
                
                <div className="border h-[25px] flex justify-between pl-[2%] md:h-[40px] lg:h-[45px] lg:border-[1px] lg:border-[#0003]">
                  {" "}
                  <input
                    type="number"
                    placeholder="Amount to Convert"
                    className="text-[10px] text-[#000] w-[90%] h-[100%] outline-none md:text-[15px] lg:text-[16px]"
                  />
                  <FiatSelector
                      onSelectOne={handleCountrySelectTwo}
                      selectedCountryOne={selectedCountryTwo}
                     />
                </div>

              </div>
              
              <div className="text-[9px] text-[#29B8FC] border-[0.9px] drop-shadow-3xl border-[#0003] rounded-[7px] w-[55%] mx-auto my-[7%] flex justify-center items-center py-[7px] gap-1 lg:my-[5%] md:my-[3%] md:h-[40px] md:text-[14px] md:gap-2 lg:h-[45px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]">
                <img
                  className="w-[14px] h-[14px] md:w-[20px] md:h-[20px] lg:w-[24px] lg:h-[24px]"
                  src="./Images/transferImages/ticket-discount.png"
                  alt="conversion"
                />
                {exchangeRate !== null ? (
                  <p>{exchangeRate} NGN ~ 1 USD</p>
                ) : (
                  <p>Loading exchange rate...</p>
                )}
              </div>
              <div className="font-extrabold flex text-[#000] text-[10px] leading-[130%] items-center my-[7%] mt-9 gap-[8px] md:my-[5%] md:text-[18px] lg:text-[20px]">
                <p>To Recipient</p>
                <img
                  className="w-[15px] h-[15px] md:h-[24px] md:w-[24px] lg:w-[20px] lg:h-[20px]"
                  src="./Images/Dashboardimages/arrowright.png"
                  alt="/"
                />
              </div>
              <div className={``}>
                <div className="border h-[23.5px] md:h-[45px] lg:h-[44px] flex justify-between pl-[2%] lg:border-[1px] lg:border-[#0003]">
                  {" "}
                  <input
                    type="number"
                    placeholder="Recipient will Receive"
                    className="text-[10px] w-[90%] h-[100%] outline-none md:text-[15px] lg:text-[16px]"
                  />
                  <div className="">
                    <CountrySelector
                      onSelect={handleCountrySelect}
                      selectedCountry={selectedCountry}
                    />
                  </div>
                </div>

                
              </div>
              <button
                  onClick={() => setConversionRate(false)}
                  className={`bg-[#04177f] my-[5%] w-[88%] flex justify-center mt-14 items-center mx-auto cursor-pointer text-[14px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[16px] lg:text-[14px] lg:w-[163px] lg:h-[38px] lg:mt-[40px]`}
                >
                  Okay
                </button>
            </div>
          </div>
        </Modal>
      )}

                <div className="mx-auto ">
                    <div className="flex gap-1 lg:gap-2 lg:my-[40px] md:my-[30px] my-[20px]">
                        <p className="text-[8px] md:text-[11.46px] lg:text-xl font-medium">From</p>
                        <img src="./Images/currencyImages/right.svg" alt="" className="lg:h-[24px] lg:w-[24px] md:h-[13.75px] md:w-[13.75px]" />
                    </div>
                {/* value={numeric} onChange={NumericChange} */}
                   <div className="input border h-[25px] flex justify-between pl-[2%] md:h-[45px] lg:h-[45px] lg:border-[1px] lg:border-[#0003] ">
                    <input type="number"
                    onChange={initialHandler}
                     placeholder="Amount To Convert" className="text-[10px] w-[90%] h-[100%] outline-none md:text-[16px] lg:text-[16px]" />
                    
                     <FiatSelector
                      onSelectOne={handleCountrySelectTwo}
                      selectedCountryOne={selectedCountryTwo}
                     />
                    
                   </div>

                   <div className="available flex justify-between w-[160px] md:w-[210px] lg:w-[360px] h-[16px] lg:h-[41px] md:h-[20px] border-[#000000] border-opacity-30 rounded-[4px] md:rounded-[6px] lg:rounded-[8px] border-[0.8px] mx-auto my-7 px-2">
                    <input type="button" value="Available Balance (50,000.00)" className="text-[7px] text-[#7C7C7C] md:text-[12px] lg:text-[16px] font-medium "/>
                    <div className="flex self-center"><img src="./Images/currencyImages/nigeria.svg" alt="" className="lg:h-[24px] lg:w-[24px] md:h-[16px] md:w-[16px] flex" /></div>
                   </div>

                    <div className="flex gap-1 lg:gap-2 lg:my-[40px] md:my-[30px] my-[20px]">
                        <p className="text-[8px] md:text-[11.46px] lg:text-xl font-medium">To Recipient</p>
                        <img src="./Images/currencyImages/right.svg" alt="" className="lg:h-[24px] lg:w-[24px] md:h-[13.75px] md:w-[13.75px]" />
                    </div>
                    {/* value={numeric2}  */}
                   <div className="input border h-[25px] flex justify-between pl-[2%] md:h-[45px] lg:h-[45px] lg:border-[1px] lg:border-[#0003]">
                    <input type="number" 
                    onChange={convertHandler}  placeholder="Amount To Recieve" className="text-[10px] w-[90%] h-[100%] outline-none md:text-[16px] lg:text-[16px]" />
                    <div className="">
                    <div>
                     <CountrySelector
                      onSelect={handleCountrySelect}
                      selectedCountry={selectedCountry}
                     />
                    </div>
                  
                  </div>
                   </div> 

                   <div className="flex justify-between gap-3 my-6 px-2">
                       <div className="flex gap-[2px]">
                        <img src="./Images/currencyImages/rate.svg" alt="" className="lg:h-[24px] lg:w-[24px] md:h-[13.75px] md:w-[13.75px]" />
                        {exchangeRate !== null ? (
                        <p className="text-[6px] whitespace-nowrap lg:text-[16px] md:text-[10px] font-semibold text-[#7C7C7C]" >{exchangeRate} NGN ~ 1 USD</p>
                        ) : (
                        <p>Loading exchange rate...</p>
                        )}
                        {/* <span className="text-[6px] whitespace-nowrap lg:text-[16px] md:text-[10px] font-semibold text-[#7C7C7C]"> 1 NGN ~ 0.001 USD</span> */}
                       </div>
                       <div className="flex gap-[2px]">
                        <img src="./Images/currencyImages/fee.svg" alt="" className="lg:h-[24px] lg:w-[24px] md:h-[13.75px] md:w-[13.75px]" />
                        <span className="text-[6px] whitespace-nowrap lg:text-[16px] md:text-[10px] font-semibold text-[#7C7C7C]"> Transaction Fee - ₦00.00 </span>
                       </div>
                       <div className="flex gap-[2px]">
                        <img src="./Images/currencyImages/clock.svg" alt="" className="lg:h-[24px] lg:w-[24px] md:h-[13.75px] md:w-[13.75px]" />
                        <span className="text-[6px] whitespace-nowrap lg:text-[16px] md:text-[10px] font-semibold text-[#7C7C7C]"> Completion Time - instantly</span>
                       </div>
                   </div>

                   <div className="flex mx-auto ">
                    <button onClick={handleConfirm} id="button" className={`${
                convertedAmount.length < 4 ? "bg-[#0008]" : "bg-[#04177f]"
              } my-[40px] lg:my-[80px] md:my-[55px] mx-auto text-white text-[12px] md:text-[12px] lg:text-[16px] rounded md:rounded-[7px] lg:rounded-[12px] text-center font-semibold w-full md:w-[210.83px] lg:w-[163px] h-[40px] lg:h-[38px] md:h-[25px]`}>
                        Proceed
                    </button>
                </div>
                </div>

                
                <footer className="flex justify-center text-center pb-[10%] gap-[20px] mt-[200px]  md:mt-[750px]  lg:mt-[850px]">
             <div className="font-medium text-[10px] md:text-[10px] lg:text-[15px] self-center">You need help ?</div>
             <Link to="/ContactUs">
               <div className="bluebutton flex bg-[#04177f] text-[8.5px] md:text-[8.5px] lg:text-[12px] text-white">
                 <p className="self-center mx-auto align-middle">Contact Us</p>
                </div>
              </Link>
          </footer>
        </div>

        {confirm &&
            (
            <Modal >
              
       <div 
            className={`confirmConversion mx-auto  ${
              toggleSideBar ? " lg:ml-[20%] lg:w-[40%]" : "lg:w-[40%]"
            } w-[90%]`}
          >
        <div className="flex justify-end pr-2 mt-1 mb-3 md:mt-2 md:mb-2 lg:mb-0 lg:mt-1">
        <img  onClick={()=>setConfirm(false)}
                className=" w-[18px] h-[18px] md:w-[35px] md:h-[35px] lg:w-[26px] lg:h-[26px]"
                src="/Images/transferImages/close-circle.png"
                alt=""
              />
        </div>
        <hr className="h-[6px] bg-[#04177f] border-none md:h-[10px]" />
        <div className="mx-auto">
            <div className="text-[12px] my-[5%] font-medium text-center md:my-[3%] md:text-[15px] lg:my-[2%] lg:text-[16px]">
              Confirm Transaction</div>
            <div className="text-[8px] text-[#0008] text-center mb-2 md:text-[12px] lg:text-[14px]">
              You are about to convert &nbsp;
               <span className="text-[#000] font-extrabold text-[10px] md:text-[16px] lg:text-[12px]">{initialValue}.00</span>&nbsp;
             from your NGN wallet to
            </div>
            
            <div className="flex flex-col gap-3 mt-4 md:mt-6 lg:mt-7">

                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                    <span className="text-[#7C7C7C]">Wallet Type</span>
                    <span>United S. USD Wallet</span>
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                    <span className="text-[#7C7C7C]">Amount To Convert</span>
                    <span>{initialValue}.00</span>
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                    <span className="text-[#7C7C7C]">Amount To Receive</span>
                    <span>${convertedAmount}</span>
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                    <span className="text-[#7C7C7C]">Conversion Rate</span>
                    <span>1 NGN ~ {cvRate} USD</span>
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                    <span className="text-[#7C7C7C]">Transaction Fee</span>
                    <span>0.00</span>
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                    <span className="text-[#7C7C7C]">Completion Time </span>
                    <span>Instantly</span>
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                    <span className="text-[#7C7C7C]">Points Earned</span>
                    <span className="text-[#2ED173]">+2.00</span>
                </div>
            </div>
        </div>

        <div className="bg-[#F6F7F7] h-[45px] my-5 lg:my-8 flex justify-between items-center px-[4%]">
              <div className="flex gap-2 items-center">
                <div className="bg-white rounded-full h-[27px] w-[27px] flex justify-center items-center">
                  <img className="w-[16px] h-[16px]" src="./Images/currencyImages/nigeria.svg" alt="/" />
                </div>
                <p className="text-[10px] md:text-[14px]  lg:text-[16px]">
                  Available Balance{" "}
                  <span className="text-[#0003]">{availableBalance}</span>
                </p>
              </div>
              <img
                className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                src="./Images/currencyImages/right.svg"
                alt="/"
              />
            </div>
       
        <button
              onClick={handlePinInput}
              className={`bg-[#04177f] my-[5%] w-[88%] flex justify-center items-center mx-auto cursor-pointer text-[14px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] lg:rounded-[12px] md:text-[16px] lg:text-[14px] lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
            >
              Confirmed
            </button>
       </div> 
            </Modal>
          )}

            {pinInput &&
            (
            <Modal>
         
        <div className={`InputPinToConvert ${
              toggleSideBar ? "md:w-[45%] lg:w-[40%] lg:ml-[20%]" : "lg:w-[40%]"
            } md:w-[55%] w-[90%]`}
            >
            <div className=" pr-3 lg:pr-5 flex justify-end">
            <img  onClick={()=>setPinInput(false)}
                className="w-[18px] h-[18px] my-[1%] md:w-[35px] md:h-[35px] lg:w-[25px] lg:h-[25px] self-center"
                src="/Images/transferImages/close-circle.png"
                alt=""
              />
            </div>
            <hr className="h-[6px] bg-[#04177f] border-none md:h-[10px]" />
            <div className="font-extrabold text-[8px] md:text-[10px] lg:text-[16px] text-center my-[8%]
            ">Input PIN to complete transaction</div>
            <div className="flex flex-col items-center gap-[1px] font-extrabold mb-[7%]">
              <div className=" flex items-center ml-[5%] md:ml-[5%] gap-[10px]">
                {" "}
                {isVisible ? (
                  <OtpInput
                    value={inputPin}
                    inputType="tel"
                    onChange={setInputPin}
                    numInputs={4}
                    shouldAutoFocus={true}
                    inputStyle={{
                      color: "#000000",
                      fontSize: '14px',
                      fontWeight: 700,
                      borderRadius: 4,
                      height: '35px',
                      width: '35px',
                    }
                }
                    
                    renderInput={(props) => (
                      <input {...props} className={`inputOTP mx-[2px] ${isFocused ? 'focused' : ''}`} onFocus={handleFocus}
                      onBlur={handleBlur}/>
                    )}
                  />
                ) : (
                  <div className="text-[24px] md:text-[24px] mt-1">
                    * * * *{" "}
                  </div>
                )}
                <div
                  className="text-[#0003]"
                  onClick={toggleVisibility}
                >
                  {isVisible ? <AiFillEye className="w-[16px] h-[16px] lg:w-[24px] lg:h-[24px]" /> : <AiFillEyeInvisible  className="w-[16px] h-[16px] lg:w-[24px] lg:h-[24px]"/>}
                </div>
              </div>
              <p className="text-[8px] md:text-[12px] leading-[5px] my-3 text-[#04177f]">
                Forgot Pin ?
              </p>
            </div>
            <button
              onClick={handleConversionSuccessful}
              disabled={inputPin.length !== 4 ? true : false}
              className={`${
                inputPin.length !== 4 ? "bg-[#0008]" : "bg-[#04177f]"
              } lg:my-[52px] w-[225px] md:w-[94px] lg:w-[163px] flex justify-center items-center mx-auto cursor-pointer text-[12px] md:text-[10px] lg:text-[16px] font-extrabold h-[40px] lg:h-[38px] md:h-[22px] text-white rounded-[6px] md:rounded-[6.88px] lg:rounded-[12px]`}
            >
              Convert
            </button>
        </div>
           </Modal>
          )} 

     {conversionSuccessful &&
            (
            <Modal>
           
       <div className={`confirmConversion mx-auto  ${
              toggleSideBar ? " lg:ml-[20%] lg:w-[40%]" : "lg:w-[40%]"
            } w-[90%]`}>
        <div className="flex justify-between items-center mx-[3%] my-[2%] md:my-[1%]">
        <Link to="/">
              <img
                onClick={()=>setConversionSuccessful(false)}
                className=" w-[15px] h-[10px] md:w-[24px] md:h-[15px] lg:w-[42px] lg:h-[25px]"
                src="/Images/login/arpLogo.png"
                alt=""
              />
            </Link>
              <img
                onClick={()=>setConversionSuccessful(false)}
                className=" w-[18px] h-[18px] md:w-[35px] md:h-[35px] lg:w-[29px] lg:h-[29px]"
                src="/Images/transferImages/close-circle.png"
                alt=""
              />
        </div>
        <hr className="h-[6px] bg-[#04177f] border-none md:h-[10px]" />
        <div className="">
            <div className="text-[12px] my-[4%] font-medium text-center md:text-[20px] md:my-[3%] lg:text-[14px] lg:my-[2%]"
            >Conversion Successful</div>
            <img
              className="w-[50px] h-[50px] mx-auto mb-[2%] lg:w-[250px] lg:h-[250px] md:w-[78px] md:h-[78px]"
              src="./Gif/checkMarkGif.gif"
              alt="/"
            />
            <div className="text-[#7C7C7C] text-[8px] text-center mb-2 md:pb-2 lg:pb-3 md:text-[14px] lg:text-[12px]">You have successfully converted &nbsp;
               <span className="text-black font-extrabold text-[10px] md:text-[16px] lg:text-[14px]">{initialValue}.00</span>&nbsp;
               from your NGN wallet to
            </div>
            <div className="flex flex-col gap-2 lg:gap-4 ">
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[14px]">
                    <span className="text-[#7C7C7C]">Wallet Type</span>
                    <span>United S. USD Wallet</span>
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[14px]">
                    <span className="text-[#7C7C7C]">Amount To Convert</span>
                    <span>{initialValue}.00</span>
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[14px]">
                    <span className="text-[#7C7C7C]">Amount To Receive</span>
                    <span>${convertedAmount}</span>
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[14px]">
                    <span className="text-[#7C7C7C]">Conversion Rate</span>
                    <span>1 NGN ~ {cvRate} USD</span>
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[14px]">
                    <span className="text-[#7C7C7C]">Transaction Fee</span>
                    <span>0.00</span>
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[14px]">
                    <span className="text-[#7C7C7C]">Order Number</span>
                    <span>12255566464564</span>
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[14px]">
                    <span className="text-[#7C7C7C]">Session ID</span>
                    <div>
                        <span id="CopySessionIdNumber">12255566464564<br/>12255566464564</span>
                        <CopyButton 
                        // textToCopy={SessionNumber} 
                        />
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-[#F2FAFF] mx-10 h-[45px] my-5 flex justify-between items-center px-[4%] md:h-[65px] lg:h-[75px]">
            <div className="text-[6px] text-center mx-auto w-[171px] md:text-[14px] md:w-[80%] lg:text-[14px]">
            The conversion has been sent successfully. Please check the correspondent wallet to view the value.
            </div>
        </div>

        <div className="flex w-full justify-center items-center gap-[10px] md:gap-[8.59px] lg:gap-[15px] md:pb-2">
              
                <button
                onClick={()=>setConversionSuccessful(false)} 
                className={`bg-[#04177f] w-[111px] lg:w-[200px] md:w-[99px] h-[40px] md:h-[24px] lg:h-[42px] lg:my-[2%] flex justify-center items-center cursor-pointer text-[12px] md:text-[12px] lg:text-[16px] font-semibold text-white rounded-[6px] md:rounded-[7px] lg:rounded-[12px]`}
              >
                Done
              </button>
              <Link to='/SuccessfulConversion'>
                <button
                style={{boxShadow : '0px 0px 2.0368096828460693px 0px #00000040'}} className={`border-[1px]  w-[111px] lg:w-[200px] md:w-[99px] h-[40px] md:h-[24px] lg:h-[42px] lg:my-[2%] flex justify-center items-center cursor-pointer text-[12px] md:text-[12px] lg:text-[16px] font-semibold rounded-[6px] md:rounded-[7px] lg:rounded-[12px]`}
                >
                  Receipt
                </button>
                </Link>
        </div>
       </div>   
            </Modal>
          )}

        </DashBoardLayout>

        </div>
    )
    
}

export default FiatConversion