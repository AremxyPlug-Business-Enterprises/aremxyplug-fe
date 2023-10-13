import React, {useState} from "react";
import { Link } from "react-router-dom";
import { DashBoardLayout } from "../Dashboard/Layout/DashBoardLayout";
import { AiFillEyeInvisible } from "react-icons/ai";
import OtpInput from "react-otp-input";
import { AiFillEye } from "react-icons/ai";
import right from "./Images/right.svg"
import nigeria from "./Images/nigeria.svg"
import down from "./Images/drop.svg"
import clock from './Images/clock.svg'
import rate from "./Images/rate.svg"
import fee from "./Images/fee.svg"
import cash from "./Images/cash.svg"
import copy from "./Images/copy.svg"
import { useContext, useEffect } from "react";
import { ContextProvider } from "../Context";
import { Modal } from "../../Components/Screens/Modal/Modal";
import styles from "../Dashboard/DashboardComponents/TransferComponent/transfer.module.css";
import { CountrySelectorFiat } from "./currencyPopups/currencySelectorFiat";



const FiatConversion = () => {
    // const confirmationPopUp = {ConfirmConversion}

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

    const transferHandler = (e) => {
      setTransfer(e.target.value);
    };
    const receiveHandler = (e) => {
      setReceive(e.target.value);
    };

    
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleCountrySelect = (country, id) => {
    setSelectedCountry(country);
  };

    const [numeric, setNumeric] = useState('');
    const [numeric2, setInputValue1] = useState('');
    const [buttonColor, setButtonColor] = useState('#0008'); // Default color
    const [isValid, setIsValid] = useState(false);


    const NumericChange = (event) => {
      const inputValue = event.target.value;
      // Use a regular expression to remove non-numeric characters
      const numericInput = inputValue.replace(/[^0-9]/g, '');
      setNumeric(numericInput);
      const numbersCount = (inputValue.match(/\d/g) || []).length;
    setIsValid(numbersCount > 3);

    const value = event.target.value;
    setInputValue1(value);

    if (parseInt(value) > 4) {
      setButtonColor('#04177f'); // Change color if input is greater than 4
      document.querySelector('#button').disabled = false;
    } else {
      setButtonColor('#0008'); // Reset to default color if input is 4 or less
      document.querySelector('#button').disabled = true;
    }
    };
    // const [numeric2, setNumeric2] = useState('');

    // const NumericChange2 = (event) => {
    //   const inputValue = event.target.value;
    //   // Use a regular expression to remove non-numeric characters
    //   const numericInput2 = inputValue.replace(/[^0-9]/g, '');
    //   setNumeric2(numericInput2);
    // };
  
        
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
          <img src={copy} alt="" className="md:w-[13px] md:h-[15px] lg:w-[21px] lg:h-[27px]"/>
        </button>
      );
    };

    const {
        toggleSideBar,
        inputPin,
        isDarkMode,
        setHideNavbar,
        setTransfer,
        setReceive,
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
      

      const amtToConvert = (`${10},000`);
    const amtToReceive = 10;
    const availableBalance = (`${50},000`);

  //   const [conversionAmount, setConversionAmount] = useState("");

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   alert(`The name you entered was: ${conversionAmount}`)
  // }

  // return (
  //   <form onSubmit={handleSubmit}>
  //     <label>Enter your name:
  //       <input 
  //         type="text" 
  //         value={name}
  //         onChange={(e) => setName(e.target.value)}
  //       />
  //     </label>
  //     <input type="submit" />
  //   </form>)

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
                        <img src={cash} alt="" className="" />
                    </div>
                </div>
                <div className=" mx-auto flex gap-1.5 py-[25.29px] lg:py-[50px] md:py-[28.64px]">
                   <div className="text-[8px] lg:text-xl md:text-[11.46px] font-medium text-[#7C7C7C]">Select the below fiat currency to convert</div>
                   <div>
                      <img src={right} alt="" className="lg:h-[24px] lg:w-[24px] md:h-[13.75px] md:w-[13.75px]" />
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
            } w-[90%] overflow-auto bg-red-500`}
          >
            {" "}
            <img
              onClick={() => setConversionRate(false)}
              className="absolute left-[87%] md:left-[83%] lg:left-[81%] w-[18px] h-[18px] my-[1%] md:w-[40px] md:h-[40px] lg:h-[35px] lg:w-[35px]"
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
                <div className="border h-[24.24px] md:h-[41.82px] lg:h-[70px] flex justify-between pl-[2%] lg:border-[1px] lg:border-[#0003]">
                  {" "}
                  <input
                    onChange={transferHandler}
                    type="number"
                    placeholder="Amount to Transfer"
                    className="text-[10px] text-[#000] w-[90%] h-[100%] outline-none md:text-[15px] lg:text-[16px]"
                  />
                  <div className="h-[100%] w-[50px] flex justify-center gap-[20%] items-center bg-[#04177f] md:w-[120px] lg:w-[130px]">
                    {" "}
                    <img
                      className="w-[11px] h-[11px] md:h-[24px] md:w-[24px] lg:w-[29px] lg:h-[29px]"
                      src="./Images/otherBanksImages/NAIJAFLAG.png"
                      alt=""
                    />
                    <img
                      className=" h-[8.3px] w-[8.3px] md:h-[25px] md:w-[25px] lg:w-[24px] lg:h-[24px]"
                      src="./Images/dashboardImages/arrow-down2.png"
                      alt="dropdown"
                    />
                  </div>
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
                <div className="border h-[24.24px] md:h-[41.82px] lg:h-[70px] flex justify-between pl-[2%] lg:border-[1px] lg:border-[#0003]">
                  {" "}
                  <input
                    onChange={receiveHandler}
                    type="number"
                    placeholder="Recipient will Receive"
                    className="text-[10px] w-[90%] h-[100%] outline-none md:text-[15px] lg:text-[16px]"
                  />
                  <div className="">
                    <CountrySelectorFiat
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
                        <img src={right} alt="" className="lg:h-[24px] lg:w-[24px] md:h-[13.75px] md:w-[13.75px]" />
                    </div>
                
                   <div className="flex ">
                    <input type="number" value={numeric} onChange={NumericChange} placeholder="Amount To Convert" className="input text-[8px] flex md:text-[12px] lg:text-[16px] pl-[5px] md:pl-[12px] lg:pl-[20px] font-semibold w-full h-[24.24px] md:h-[41.82px] lg:h-[70px]" />
                    <button class="dropdown bg-[#04177F]">
                        <div class="dropbtn flex gap-[7.2px] lg:gap-[18px] justify-center w-[40px] md:w-[63px] lg:w-[123px]">
                            <img src={nigeria} alt=""  className="lg:h-[32px] lg:w-[32px] md:h-[18px] md:w-[18px]" />
                            <img src={down} alt=""  className="lg:h-[32px] lg:w-[32px] md:h-[18px] md:w-[18px]"/>
                        </div>
                    </button>
                   </div>

                   <div className="available flex justify-between w-[160px] md:w-[210px] lg:w-[360px] h-[16px] lg:h-[41px] md:h-[20px] border-[#000000] border-opacity-30 rounded-[4px] md:rounded-[6px] lg:rounded-[8px] border-[0.8px] mx-auto my-7 px-2">
                    <input type="button" value="Available Balance (50,000.00)" className="text-[7px] text-[#7C7C7C] md:text-[12px] lg:text-[16px] font-medium "/>
                    <div className="flex self-center"><img src={nigeria} alt="" className="lg:h-[24px] lg:w-[24px] md:h-[16px] md:w-[16px] flex" /></div>
                   </div>

                    <div className="flex gap-1 lg:gap-2 lg:my-[40px] md:my-[30px] my-[20px]">
                        <p className="text-[8px] md:text-[11.46px] lg:text-xl font-medium">To Recipient</p>
                        <img src={right} alt="" className="lg:h-[24px] lg:w-[24px] md:h-[13.75px] md:w-[13.75px]" />
                    </div>
                   <div className="flex">
                    <input type="number" value={numeric2} placeholder="Amount To Recieve" className="input text-[8px] md:text-[12px] lg:text-[16px] pl-[5px] md:pl-[12px] lg:pl-[20px] font-semibold w-full h-[24.24px] md:h-[41.82px] lg:h-[70px]" />
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
                        <img src={rate} alt="" className="lg:h-[24px] lg:w-[24px] md:h-[13.75px] md:w-[13.75px]" />
                        {exchangeRate !== null ? (
                        <p className="text-[6px] whitespace-nowrap lg:text-[16px] md:text-[10px] font-semibold text-[#7C7C7C]" >{exchangeRate} NGN ~ 1 USD</p>
                        ) : (
                        <p>Loading exchange rate...</p>
                        )}
                        {/* <span className="text-[6px] whitespace-nowrap lg:text-[16px] md:text-[10px] font-semibold text-[#7C7C7C]"> 1 NGN ~ 0.001 USD</span> */}
                       </div>
                       <div className="flex gap-[2px]">
                        <img src={fee} alt="" className="lg:h-[24px] lg:w-[24px] md:h-[13.75px] md:w-[13.75px]" />
                        <span className="text-[6px] whitespace-nowrap lg:text-[16px] md:text-[10px] font-semibold text-[#7C7C7C]"> Transaction Fee - ₦50.00 </span>
                       </div>
                       <div className="flex gap-[2px]">
                        <img src={clock} alt="" className="lg:h-[24px] lg:w-[24px] md:h-[13.75px] md:w-[13.75px]" />
                        <span className="text-[6px] whitespace-nowrap lg:text-[16px] md:text-[10px] font-semibold text-[#7C7C7C]"> Completion Time - instantly</span>
                       </div>
                   </div>

                   <div className="flex mx-auto ">
                    <button onClick={handleConfirm} disabled={!isValid} style={{ backgroundColor: buttonColor }} id="button" className="bg-[#04177F] my-[40px] lg:my-[80px] md:my-[55px] mx-auto text-white text-[12px] md:text-[12px] lg:text-[16px] rounded md:rounded-[7px] lg:rounded-[12px] text-center font-semibold w-full md:w-[210.83px] lg:w-[163px] h-[40px] lg:h-[38px] md:h-[25px]">
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
              
       <div className="confirmConversion bg-white mx-auto w-[95%] md:w-[92%] lg:w-[85%] h-[392px] md:h-[573px] lg:h-full">
        <div className="lg:h-[60px] md:h-[35px] h-[18px] flex justify-end pr-2 lg:pr-5">
        <img  onClick={()=>setConfirm(false)}
                className=" w-[18px] h-[18px] md:w-[35px] md:h-[35px] lg:w-[29px] lg:h-[29px] self-center"
                src="/Images/transferImages/close-circle.png"
                alt=""
              />
        </div>
        <hr className="h-[6px] bg-[#04177f] border-none md:h-[12px] lg:h-[22px]" />
        <div className="mx-auto w-[95%] md:w-[92%] lg:w-[88%]">
            <div className="text-center font-semibold text-[9px] md:text-[9.17px] lg:text-[16px] pt-[23px] md:pt-[13px] lg:pt-[19px]">Confirm Transaction</div>
            <div className="text-[#7C7C7C] text-[6px] md:text-[9.12px] lg:text-[16px] font-medium text-center pt-[22px] lg:pt-[40px] pb-1 md:pb-3">You are about to convert &nbsp;
               <span className="text-black text-[8px] md:text-[11.46px] lg:text-[20px] font-semibold">{amtToConvert}.00</span>&nbsp;
             from your NGN wallet to
            </div>
            <div className="flex flex-col gap-[8.86px] pt-[9px] md:pt-[15px] lg:pt-[25px] md:gap-[15px] lg:gap-[25px]">
                <div className="flex justify-between font-medium text-[8px] md:text-[11.5px] lg:text-[20px]">
                    <span className="text-[#7C7C7C]">Wallet Type</span>
                    <span>United S. USD Wallet</span>
                </div>
                <div className="flex justify-between font-medium text-[8px] md:text-[11.5px] lg:text-[20px]">
                    <span className="text-[#7C7C7C]">Amount To Convert</span>
                    <span>{amtToConvert}.00</span>
                </div>
                <div className="flex justify-between font-medium text-[8px] md:text-[11.5px] lg:text-[20px]">
                    <span className="text-[#7C7C7C]">Amount To Receive</span>
                    <span>${amtToReceive}</span>
                </div>
                <div className="flex justify-between font-medium text-[8px] md:text-[11.5px] lg:text-[20px]">
                    <span className="text-[#7C7C7C]">Conversion Rate</span>
                    <span>1 NGN ~ 0.001 USD</span>
                </div>
                <div className="flex justify-between font-medium text-[8px] md:text-[11.5px] lg:text-[20px]">
                    <span className="text-[#7C7C7C]">Transaction Fee</span>
                    <span>0.00</span>
                </div>
                <div className="flex justify-between font-medium text-[8px] md:text-[11.5px] lg:text-[20px]">
                    <span className="text-[#7C7C7C]">Completion Time </span>
                    <span>Instantly</span>
                </div>
                <div className="flex justify-between font-medium text-[8px] md:text-[11.5px] lg:text-[20px]">
                    <span className="text-[#7C7C7C]">Points Earned</span>
                    <span className="text-[#2ED173]">+2.00</span>
                </div>
            </div>
        </div>
        <div className="bg-[#F6F7F7] h-[36px] md:h-[57.29px] lg:h-[100px] flex my-[19px] md:my-[38px] lg:my-[70px]">
            <div className="mx-auto w-[95%] md:w-[88%] lg:w-[84%] flex justify-between align-middle self-center content-center">
                <div className="flex gap-[3.5px]">
                    <div className="relative">
                        <img src={nigeria} alt="" className='md:w-[16px] md:h-[16px] lg:w-[24px] lg:h-[24px]'/>
                    </div>
                    <div className="font-semibold text-[8px] md:text-[12px] lg:text-[20px]">Available Balance</div>
                    <div className="text-[#7C7C7C] font-medium text-[8px] md:text-[12px] lg:text-[20px]">(&#x20A6;{availableBalance})</div>
                </div>
                <div>
                    <img src={right} alt="" className='md:w-[16px] md:h-[16px] lg:w-[24px] lg:h-[24px]'/>
                </div>
            </div>
        </div>
        <div className="bg-[#04177F] md:mt-3 lg:mt-4 h-[40px] md:h-[23px] w-[255px] md:w-[93.39px] lg:w-[163px] lg:h-[38px] mx-auto rounded-[5px] md:rounded-[6.88px] lg:rounded-[12px] flex justify-center">
            <button onClick={handlePinInput}  className="self-center text-[#fff] font-semibold text-[12px] md:text-[10px] lg:text-[16px]">Confirmed</button>
        </div>
       </div> 
            </Modal>
          )}

            {pinInput &&
            (
            <Modal>
         
        <div className="InputPinToConvert bg-white mx-auto w-[312px] md:w-[483px] lg:w-[840px] h-[250px] md:h-[267px] lg:h-[465px]">
            <div className="lg:h-[60px] md:h-[35px] h-[18px]  pr-3 lg:pr-5 flex justify-end">
            <img  onClick={()=>setPinInput(false)}
                className=" w-[18px] h-[18px] md:w-[35px] md:h-[35px] lg:w-[29px] lg:h-[29px] self-center"
                src="/Images/transferImages/close-circle.png"
                alt=""
              />
            </div>
            <hr className="h-[6px] bg-[#04177f] border-none md:h-[15px] lg:h-[22px]" />
            <div className="font-semibold text-[8px] md:text-[10px] lg:text-[16px] text-center pt-[33px]
             md:pt-[16px] lg:pt-[20px] pb-4 lg:pb-[70px]">Input PIN to complete transaction</div>
            <div className="flex flex-col gap-[20px] items-center lg:gap-[25px] font-extrabold mb-[7%]">
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
                  {isVisible ? <AiFillEye color="#04177F" className="w-[16px] h-[16px] lg:w-[24px] lg:h-[24px]" /> : <AiFillEyeInvisible  className="w-[16px] h-[16px] lg:w-[24px] lg:h-[24px]" color="#04177F"/>}
                </div>
              </div>
              <p className="text-[8px] md:text-[12px] lg:text-[14px] my-3 text-[#04177f]">
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
                className=" w-[15px] h-[10px] md:w-[24px] md:h-[15px] lg:w-[42px] lg:h-[25px]"
                src="/Images/login/arpLogo.png"
                alt=""
              />
            </Link>
        <img onClick={()=>setConversionSuccessful(false)}
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
               <span className="text-black text-[8px] md:text-[11.46px] lg:text-[20px] font-semibold">{amtToConvert}.00</span>&nbsp;
               from your NGN wallet to
            </div>
            <div className="flex flex-col gap-[8.86px] pt-[9px] md:pt-[15px] lg:pt-[25px] md:gap-[15px] lg:gap-[25px]">
                <div className="flex justify-between font-medium text-[8px] md:text-[11.5px] lg:text-[20px]">
                    <span className="text-[#7C7C7C]">Wallet Type</span>
                    <span>United S. USD Wallet</span>
                </div>
                <div className="flex justify-between font-medium text-[8px] md:text-[11.5px] lg:text-[20px]">
                    <span className="text-[#7C7C7C]">Amount To Convert</span>
                    <span>{amtToConvert}.00</span>
                </div>
                <div className="flex justify-between font-medium text-[8px] md:text-[11.5px] lg:text-[20px]">
                    <span className="text-[#7C7C7C]">Amount To Receive</span>
                    <span>${amtToReceive}</span>
                </div>
                <div className="flex justify-between font-medium text-[8px] md:text-[11.5px] lg:text-[20px]">
                    <span className="text-[#7C7C7C]">Conversion Rate</span>
                    <span>1 NGN ~ 0.001 USD</span>
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