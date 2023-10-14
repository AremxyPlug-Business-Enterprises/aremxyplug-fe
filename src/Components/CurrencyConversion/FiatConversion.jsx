import React, {useState} from "react";
import { Link } from "react-router-dom";
import { DashBoardLayout } from "../Dashboard/Layout/DashBoardLayout";
import { AiFillEyeInvisible } from "react-icons/ai";
import OtpInput from "react-otp-input";
import { AiFillEye } from "react-icons/ai";
import { useContext, useEffect } from "react";
import { ContextProvider } from "../Context";
import { Modal } from "../Screens/Modal/Modal";
import styles from "../Dashboard/DashboardComponents/TransferComponent/transfer.module.css";
import { CountrySelectorFiat } from "./currencyPopups/currencySelectorFiat";
import { CountrySelector } from "../Dashboard/DashboardComponents/CountrySelect/CountrySelector";
import { PointRedeemSelector } from "../Dashboard/DashboardComponents/CountrySelect/PointRedeemSelector";
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

    const [errors] = useState({});
    const [conversionRate, setConversionRate] = useState(false);
  

    // const transferHandler = (e) => {
    //   setTransfer(e.target.value);
    // };
    // const receiveHandler = (e) => {
    //   setReceive(e.target.value);
    // };

    
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleCountrySelect = (country, id) => {
    setSelectedCountry(country);
  };

    const [buttonColor, setButtonColor] = useState('#0008'); // Default color
    // const [isValid, setIsValid] = useState(false);
  
        
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

    const {
        toggleSideBar,
        inputPin,
        isDarkMode,
        setHideNavbar,
        // setTransfer,
        // setReceive,
        setInputPin,
        toggleVisibility,
        isVisible,    
      } = useContext(ContextProvider);

      
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

      // console.log(hideNavbar);
      const [confirm, setConfirm] = useState(false);
      const handleConfirm = () => {
        setConfirm(true)
      }

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


  const [nairaAmount, setNairaAmount] = useState("");
  const rate = exchangeRate;

  const handleAmountChange = (e) => {
    const inputAmount = parseFloat(e.target.value);
    setNairaAmount(inputAmount);



  if (parseInt(inputAmount) > 5) {
    setButtonColor('#04177f'); // Change color if input is greater than 4
    document.querySelector('#button').disabled = false;
  } else {
    setButtonColor('#0008'); // Reset to default color if input is 4 or less
    document.querySelector('#button').disabled = true;
  }

  };

  const convertedAmount = (nairaAmount / rate).toFixed(2);

  const [nairaAmountTwo, setNairaAmountTwo] = useState("");

  const handleAmountChangeTwo = (e) => {
    const inputAmountTwo = parseFloat(e.target.value);
    setNairaAmountTwo(inputAmountTwo);
  };

  const convertedAmountTwo = (nairaAmountTwo / rate).toFixed(2);

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
                    <div className="py-[9.57px] md:py-[16.61px] lg:py-[29px] align-middle flex flex-col gap-1.5">
                        <p className="text-[9px] lg:text-[24px] md:text-[13.75px] font-semibold w-[194.12px] lg:w-[600px] md:w-[450px]">CONVERT FIAT CURRENCY WITH AREMXYPLUG.</p>
                        <p className="text-[7.5px] lg:text-[20px] md:text-[11.46px] w-[180px] lg:w-[539px] md:w-[350.8px]">Convert from one fiat currency to another without any hassle, enjoy competitive exchange rate with no any hidden fee.</p>
                    </div>
                    <div className="flex w-[25%] h-[97%] pt-2">
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
            <div className="bg-[#04177f] text-[#fff] text-[10px] my-[2%] h-[20px] flex justify-center items-center rounded-[2px] md:my-[5%] md:h-[30px] md:text-[15px] lg:text-[16px] lg:mx-auto lg:my-[5%] lg:h-[38px] lg:w-[60%]">
              Real-time fiat Transfer Check Rate
            </div>
            <div className="mx-[5%]">
              <div className="font-extrabold flex text-[#000] text-[10px] leading-[130%] items-center my-[7%] gap-[8px] md:my-[3%] md:text-[18px] lg:text-[20px]">
                <p>Sender</p>
                <img
                  className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                  src="./Images/Dashboardimages/arrowright.png"
                  alt="/"
                />
              </div>
              <div className={``}>
                <div className="border h-[23.5px] md:h-[45px] lg:h-[44px] flex justify-between pl-[2%] lg:border-[1px] lg:border-[#0003]">
                  {" "}
                  <input
                    value={nairaAmountTwo}
                    onChange={handleAmountChangeTwo}
                    type="number"
                    placeholder="Amount to Transfer"
                    className="text-[10px] text-[#000] h-[100%] outline-none md:text-[15px] lg:text-[16px]"
                  />
                  <button class="dropdown bg-[#04177F]">
                        <div class="dropbtn flex gap-[7.2px] lg:gap-[18px] justify-center w-[50px] md:w-[160px] lg:w-[180px]">
                            <img src="./Images/currencyImages/nigeria.svg" alt=""  className="lg:h-[32px] lg:w-[32px] md:h-[18px] md:w-[18px]" />
                            <img src="./Images/currencyImages/drop.svg" alt=""  className="lg:h-[32px] lg:w-[32px] md:h-[18px] md:w-[18px]"/>
                        </div>
                    </button>
                
                </div>

                {errors.transfer && (
                  <div className="text-[12px] text-red-500 italic lg:text-[14px]">
                    {errors.transfer}
                  </div>
                )}
              </div>
              <div className="text-[9px] text-[#29B8FC] border-[0.9px] drop-shadow-3xl border-[#0003] rounded-[7px] w-[55%] mx-auto my-[3%] flex justify-center items-center py-[7px] gap-1 md:my-[5%] md:h-[40px] md:text-[14px] md:gap-2 lg:h-[45px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]">
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
              <div className="font-extrabold flex text-[#000] text-[10px] leading-[130%] items-center my-[7%] gap-[8px] md:my-[5%] md:text-[18px] lg:text-[20px]">
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
                    value={convertedAmountTwo}
                    readOnly
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

                {errors.receive && (
                  <div className="text-[12px] text-red-500 italic lg:text-[14px]">
                    {errors.receive}
                  </div>
                )}
              </div>
              <button
                onClick={() => setConversionRate(false)}
                className="bg-[#04177f] mt-[25%] w-full flex justify-center items-center mx-auto cursor-pointer text-[14px] font-extrabold h-[40px] text-white rounded-[6px] md:my-[10%] md:w-[25%] md:rounded-[8px] md:text-[20px] lg:text-[16px] lg:h-[38px] lg:mt-[10%]"
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
                   <div className="flex ">
                    <input type="number" value={nairaAmount} onChange={handleAmountChange} placeholder="Amount To Convert" className="input text-[8px] flex md:text-[12px] lg:text-[16px] pl-[5px] md:pl-[12px] lg:pl-[20px] font-semibold w-full h-[24.24px] md:h-[41.82px] lg:h-[70px]" />
                    <button class="dropdown bg-[#04177F]">
                        <div class="dropbtn flex gap-[7.2px] lg:gap-[18px] justify-center w-[50px] md:w-[160px] lg:w-[180px]">
                            <img src="./Images/currencyImages/nigeria.svg" alt=""  className="lg:h-[32px] lg:w-[32px] md:h-[18px] md:w-[18px]" />
                            <img src="./Images/currencyImages/drop.svg" alt=""  className="lg:h-[32px] lg:w-[32px] md:h-[18px] md:w-[18px]"/>
                        </div>
                    </button>
                    
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
                   <div className="flex h-6 md:h-10 lg:h-[74px]">
                    <input type="number" readOnly value={convertedAmount} placeholder="Amount To Recieve" className="input text-[8px] md:text-[12px] lg:text-[16px] pl-[5px] md:pl-[12px] lg:pl-[20px] font-semibold w-full h-[24.24px] md:h-[41.82px] lg:h-[70px]" />
                    <div className="">
                    <div>
                     <CountrySelectorFiat
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
                    <button onClick={handleConfirm} style={{ backgroundColor: buttonColor }} id="button" className="bg-[#04177F] my-[40px] lg:my-[80px] md:my-[55px] mx-auto text-white text-[12px] md:text-[12px] lg:text-[16px] rounded md:rounded-[7px] lg:rounded-[12px] text-center font-semibold w-full md:w-[210.83px] lg:w-[163px] h-[40px] lg:h-[38px] md:h-[25px]">
                        Proceed
                    </button>
                </div>
                </div>

                
                <div className="flex justify-center items-center mt-[62.3%] md:mt-[38%] lg:mt-[30%] gap-2">
           <div className="font-medium text-[10px] md:text-[10px] lg:text-[15px] self-center">You need help ?</div>
            <Link to="/ContactUs">
                <div className="bluebutton flex bg-[#04177f] text-[8.5px] md:text-[8.5px] lg:text-[12px] text-white">
                  <p className="self-center mx-auto align-middle">Contact Us</p>
                </div>
            </Link>
         </div>
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
            <div className="text-[12px] my-[5%] text-center md:my-[3%] md:text-[15px] lg:my-[2%] lg:text-[16px]">
              Confirm Transaction</div>
            <div className="text-[8px] text-[#0008] text-center mb-2 md:text-[12px] lg:text-[14px]">
              You are about to convert &nbsp;
               <span className="text-[#000] font-extrabold text-[10px] md:text-[16px] lg:text-[12px]">{nairaAmount}.00</span>&nbsp;
             from your NGN wallet to
            </div>
            
            <div className="flex flex-col gap-3 mt-4 md:mt-6 lg:mt-7">

                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                    <span className="text-[#7C7C7C]">Wallet Type</span>
                    <span>United S. USD Wallet</span>
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                    <span className="text-[#7C7C7C]">Amount To Convert</span>
                    <span>{nairaAmount}.00</span>
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                    <span className="text-[#7C7C7C]">Amount To Receive</span>
                    <span>${convertedAmount}</span>
                </div>
                <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                    <span className="text-[#7C7C7C]">Conversion Rate</span>
                    <span>1 NGN ~ {1/exchangeRate} USD</span>
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
                      fontSize: '10px',
                      fontWeight: 600,
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
           
       <div className="confirmConversion shrink-0 mx-auto w-[312px] h-[423px] lg:w-[880px] md:w-[504.5px] md:h-[610px] lg:h-[1000px]">
        <div className="flex justify-between items-center mx-[3%] lg:h-[60px] md:h-[35px] h-[18px]">
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
        <hr className="h-[6px] bg-[#04177f] border-none md:h-[10px] lg:h-[12px]" />
        <div className="shrink-0 mx-auto w-[270px] md:w-[474px] lg:w-[830px]">
            <div className="text-center font-semibold text-[9px] md:text-[9.17px] lg:text-[16px] pt-[23px] md:pt-[15px]"
            >Conversion Successful</div>
            <img
              className="w-[50px] h-[50px] mx-auto mb-[2%] lg:w-[150px] lg:h-[150px] md:w-[78px] md:h-[78px]"
              src="./Gif/checkMarkGif.gif"
              alt="/"
            />
            <div className="text-[#7C7C7C] text-[6px] md:text-[9.12px] lg:text-[16px] font-medium text-center  pb-1 md:pb-3">You have successfully converted &nbsp;
               <span className="text-black text-[8px] md:text-[11.46px] lg:text-[20px] font-semibold">{nairaAmount}.00</span>&nbsp;
               from your NGN wallet to
            </div>
            <div className="flex flex-col gap-[8.86px] pt-[9px] md:pt-[15px] lg:pt-[25px] md:gap-[15px] lg:gap-[25px]">
                <div className="flex justify-between font-medium text-[8px] md:text-[11.5px] lg:text-[20px]">
                    <span className="text-[#7C7C7C]">Wallet Type</span>
                    <span>United S. USD Wallet</span>
                </div>
                <div className="flex justify-between font-medium text-[8px] md:text-[11.5px] lg:text-[20px]">
                    <span className="text-[#7C7C7C]">Amount To Convert</span>
                    <span>{nairaAmount}.00</span>
                </div>
                <div className="flex justify-between font-medium text-[8px] md:text-[11.5px] lg:text-[20px]">
                    <span className="text-[#7C7C7C]">Amount To Receive</span>
                    <span>${convertedAmount}</span>
                </div>
                <div className="flex justify-between font-medium text-[8px] md:text-[11.5px] lg:text-[20px]">
                    <span className="text-[#7C7C7C]">Conversion Rate</span>
                    <span>1 NGN ~ {1/exchangeRate} USD</span>
                </div>
                <div className="flex justify-between font-medium text-[8px] md:text-[11.5px] lg:text-[20px]">
                    <span className="text-[#7C7C7C]">Transaction Fee</span>
                    <span>0.00</span>
                </div>
                <div className="flex justify-between font-medium text-[8px] md:text-[11.5px] lg:text-[20px]">
                    <span className="text-[#7C7C7C]">Order Number</span>
                    <span>12255566464564</span>
                </div>
                <div className="flex justify-between font-medium text-[8px] md:text-[11.5px] lg:text-[20px]">
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
        <div className="bg-[#F2FAFF] rounded-[6px] md:rounded-[9.17px] lg:rounded-[16px] mx-auto h-[34px] md:h-[32px] lg:h-[56px] w-[250px] md:w-[474px] lg:w-[830px] flex my-[19px] md:my-[38px]">
            <div className="mx-auto self-center text-[#7C7C7C] text-[6px] md:text-[7px] lg:text-[12px] font-medium w-[171.46px] md:w-[270.99px] lg:w-[473px] text-center">
            The conversion has been sent successfully. Please check the correspondent wallet to view the value.
            </div>
        </div>

        <div className="flex w-full justify-center items-center gap-[10px] md:gap-[8.59px] lg:gap-[15px]">
              
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