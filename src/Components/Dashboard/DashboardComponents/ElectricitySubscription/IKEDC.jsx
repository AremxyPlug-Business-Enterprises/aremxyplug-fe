import { DashBoardLayout } from "../../Layout/DashBoardLayout";
import { useContext } from "react";
import { ContextProvider } from "../../../Context";
import { useState } from "react";
import styles from "../TransferComponent/transfer.module.css";
import bulb from "../ElectricitySubscription/Electricity-sub-images/Group 13115.svg"
import arrow from "../ElectricitySubscription/Electricity-sub-images/arrow-square-right.png"
import logo from "../ElectricitySubscription/Electricity-sub-images/315-3152211_ikeja-electric-logo 1.png"
import arrowDown from "../ElectricitySubscription/Electricity-sub-images/arrow-down.png";
import nig from "../ElectricitySubscription/Electricity-sub-images/nigeriaFlag.png";
import logo2 from "../ElectricitySubscription/Electricity-sub-images/pngaaa 1.svg"
import Joi from "joi";
import { Modal } from "../../../Screens/Modal/Modal";
const IKEDC = () => {

    const { isDarkMode,
      toggleSideBar,
      meterNumber,
      showList,
      setMeterNumber,
      setVerifiedName,
    setShowList,
    setSelected,
    selected,
    globalCountry,
    setGlobalCountry,
    globalTransferErrors,
    verifiedName,
    phoneNumber, 
    setPhoneNumber,
    ikedcEmail, 
    setEmail,
    ikedcamount,
     setIkedcamount,
    } = useContext(ContextProvider);
    const [flag, setFlag] = useState("");
 ;

    const { selectedNetworkProduct, setSelectedNetworkProduct } =
    useContext(ContextProvider);
    const [showProductList, setShowProductList] = useState(false);
    ;

    const pointsEarned = "+2.00";

    // const handleValidate = () => {

    //   if (isEmailOrNumberValid(email) || isEmailOrNumberValid(number)) {
    //     setErrorMessage('')
    //     setAccountId(email);
    //   setShowAccountId(true);;
    //   } else {
    //     setErrorMessage('Invalid Email or Smile Account ID')
    //   setShowAccountId(false);
    //   }
    // };
    const productList = [
        {
          id: 1,
          name: "Prepaid",
        
        },
    
        {
          id: 2,
          name: "Postpaid",
       
        },
        
      ];
      const handleSelectProduct = (productName) => {
        setSelectedNetworkProduct(productName);
        // setSelectedOption("");
        setShowProductList(false);
        // setShowOptionList(false);
      };
    //   const { selectedOption, setSelectedOption } = useContext(ContextProvider);
    //   const [showOptionList, setShowOptionList] = useState(false);
    const countryList = [
      {
        id: 1,
        name: "NGN Wallet(50,000.00)",
        code: "NGN",
        flag: require("../ElectricitySubscription/Electricity-sub-images/nigeriaFlag.png"),
      },
      {
        id: 2,
        name: "USD Wallet. (00)",
        code: "USD",
        flag: require("../ElectricitySubscription/Electricity-sub-images/americaFlag.png"),
      },
      {
        id: 3,
        name: " GBP Wallet. (00)",
        code: "GBP",
        flag: require("../ElectricitySubscription/Electricity-sub-images/ukFlag.png"),
      },
      {
        id: 4,
        name: "EUR Wallet. (00)",
        code: "EUR ",
        flag: require("../ElectricitySubscription/Electricity-sub-images/europeanFlag.png"),
      },
      {
        id: 5,
        name: "AUD Wallet. (00)",
        code: "AUD",
        flag: require("../ElectricitySubscription/Electricity-sub-images/australiaFlag.png"),
      },
      {
        id: 6,
        name: "KES Wallet. (00)",
        code: "KES",
        flag: require("../ElectricitySubscription/Electricity-sub-images/kenyaFlag.png"),
      },
    ];
    const [errors, setErrors] = useState({});
    const [proceed, setProceed] = useState(false);
    
    const handleProceed = (e) => {
      setProceed(true);
      // e.preventDefault();
  
      const { error } = schema.validate({
        phoneNumber,
      });
  
      if (error) {
        setErrors(
          error.details.reduce((acc, curr) => {
            acc[curr.path[0]] = curr.message;
            return acc;
          }, {})
        );
      } else {
        setProceed(true);
        setErrors({});
      }
    };
  
    const schema = Joi.object({
      recipientPhoneNumber: Joi.string()
        .pattern(new RegExp(/^\d{11,}/))
        .required()
        .messages({
          "string.pattern.base": "Phone number should be 11 digits ",
        }),
        meterNumber: Joi.string()
        .pattern(new RegExp(/^\d{10,}/))
        .required()
        .messages({
          "string.pattern.base": "Invalid meter number",
        }),
        ikedcEmail: Joi.string()
        .pattern(new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i))
        .required()
        .messages({
          "string.pattern.base": "Invalid Email",
        }),
        
    });
  
    // const isEmailValid = (input) => {
    //   const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      
  
    //   if (emailRegex.test(input) ) {
    //     return true; 
    //   }
    //   return false;
    // };
  
    
    const handleCountryClick = (name, flag, id, code) => {
      setFlag(flag);
      setShowList(false);
      setGlobalCountry(name);
      setSelected(true);
      // setCountryCode(code);
      // setCurrencyAvailable(id !== 1);
    
    };
    const handleVerifiedName = (event) => {
      const newValue = event.target.value;
      setVerifiedName(newValue);
       
    };
    const handleMeterNumber = (event) => {
      const newValue = event.target.value;
      setMeterNumber(newValue);
       
    };
    const handlePhoneNumber = (event) => {
      const newValue = event.target.value;
      setPhoneNumber(newValue);
       
    };
    const handleEmail = (event) => {
      const newValue = event.target.value;
      setEmail(newValue);
       
    };
    const handleIkedcAmount = (event) => {
      const newValue = event.target.value;
      // setIkedcamount(newValue);
      if (newValue.startsWith('₦')) {
        setIkedcamount(newValue);
      } else {
        setIkedcamount(`₦${newValue}`);
      }
       
    };
    

    return ( 

       <DashBoardLayout>
        <div  className={` ${
          isDarkMode
            ? "bg-[#000] text-[#fff] border-[#fff]"
            : "bg-[#ffffff] text-[#000] "
        }  flex flex-col w-full `}>

        {/* top part after nav bar */}
        <div className="flex flex-row w-full pt-[10px]  h-[90px] md:h-[112.29px] lg:h-[196px] lg:px-[50px]  px-[16px] rounded-lg md:rounded-[11.5px] lg:rounded-[20px] justify-between  py-0 bg-gradient-to-r from-[#FFA733] via-[#58FF4A] to-[#98B0FF]">
          <div className="flex flex-col gap-2  ">
            <div className="text-[8px] font-[600]  pt-[10px] md:text-[11px] md:leading-[20.63px] lg:pt-[25px] lg:text-[24px] lg:leading-[36px] text-[#000000] leading-[12px]">
            ELECTRICITY BILLS, PREPAID AND POSTPAID  <br /> PAYMENTS. 
            </div>
            <div className="text-[8px] font-[400] leading-[9px] md:text-[10px] md:leading-[14.9px] lg:text-[20px] lg:leading-[26px] text-[#000000] ">
            Recharge your metre and pay bills  with our electricity bills <br /> payment feature for both prepaid and postpaid metertypes.
            </div>
          </div>
          <div>
            <img
              className="w-[55px] h-[70px] md:w-[151.9px] md:h-[85.9px] lg:w-[265px] lg:h-[150px]"
              src={bulb}
              alt=""
            />{" "}
          </div>
        </div>  
        <div className=" flex lg:mt-[20px] text-[10px] lg:text-[16px] font-[600] pt-[30px] text-[#7E7E7E] items-center "> 
            <div>Recharge</div>
            <div><img className="w-[25px]" src={logo} alt="" /></div>
            <div className=" ml-1">Ikeja Electric Payment-IKEDC Meter Instantly</div>
            <div><img className="lg:w-[24px]" src={arrow} alt="" /></div>

            </div>  
            <div className="lg:flex lg:items-start ">
            <div className="bg-gradient-to-b mt-[10px] lg:mt-[15px] border-[1px] border-[] from-[#E2F3FF] font-[700] text-[10px] lg:text-[16px] lg:rounded-sm lg:py-2 text-center lg:px-3 py-1 to-[#FFF]">Ikeja Electric Covers: Ikeja IKEDC</div>
            </div>
                

        </div>
        <div className="text-[10px]  lg:text-[16px]  font-[600] mt-[20px] text-[#7E7E7E] "> Select <span className="text-[#04177F] font-[700]">Prepaid</span> MeterType if you load token on your meter.</div>
        <div className="text-[10px]  lg:text-[16px]  font-[600] mt-[10px] text-[#7E7E7E] "> Select <span className="text-[#04177F] font-[700]">Postpaid</span> MeterType if you get a bill at the end of the month.</div>

        {/* input sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-1 lg:gap-4 items-center lg:mt-[20px] ">
        <div className=" flex flex-col mt-[20px] gap-1">
            <div className="text-[#7E7E7E] text-[10px] lg:text-[16px]  font-[600]">Select Meter Type</div>
            <div
                className=" border-[1px] w-full h-[30px]  pl-[4px] pr-[8px] lg:h-[51px] lg:pl-[14px] lg:pr-[16px] flex items-center justify-between"
                onClick={() => setShowProductList(!showProductList)}
              >
                <h2 className="text-[10px] font-[600] leading-[12px] text-[#7C7C7C] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                  {selectedNetworkProduct}
                </h2>
                <button className="lg:w-6 lg:h-6 w-[11px] h-[11px]">
                  <img src={arrowDown} alt="" className="w-full h-full" />
                </button>
              </div>
              {showProductList && (
                <div className="border md:rounded-[10px] text-[10px] md:text-[12px] lg:text-[16px] lg:mt-2 rounded-[4px] absolute w-full bg-[#FFF] z-[10]">
                  {productList.map((item) => (
                    <div
                      key={item.name}
                      className={`cursor-pointer border-b-[0.5px] text-[#7C7C7C] md:text-[12px] lg:text-[16px]  md:rounded-[0px] lg:mt-2 py-[4px] text-[10px] pl-[5px] ${
                        selectedNetworkProduct === item.name ? "bg-white" : ""
                      }`}
                      onClick={() => handleSelectProduct(item.name)}
                    >
                      {item.name}
                    </div>
                  ))}
                </div>
              )}
        </div>

        <div className="flex flex-col mt-[10px] lg:mt-[23px]">
            <div className="text-[#7E7E7E] text-[10px] lg:text-[16px] font-[600] " >Meter Number</div>
            <div>
              <input type="number" value= { meterNumber } onChange={handleMeterNumber} className=" w-full text-[#7E7E7E] pl-[9px] lg:h-[51px] lg:text-[16px]  text-[10px] font-[500]  border-[1px] h-[30px]" />{" "}
            </div>
            {errors.meterNumber && (
              <div className="text-[12px] text-red-500 italic lg:text-[14px]">
                {errors.meterNumber}
              </div>
            )}
        </div>

        <div className="flex flex-col mt-[10px]">
            <div className="text-[#7E7E7E] text-[10px] lg:text-[16px] font-[600]" >Verified Name</div>
            <div>
              <input type="text" value={ verifiedName } onChange={handleVerifiedName} className=" w-full text-[#7E7E7E] lg:h-[51px] lg:text-[16px]  text-[10px] pl-[9px] font-[500]  border-[1px] h-[30px]" />{" "}
            </div>
        </div>
        <div className="flex flex-col mt-[10px]">
            <div className="text-[#7E7E7E] text-[10px] lg:text-[16px] font-[600]" >Phone Number</div>
            <div>
              <input type="number" value={phoneNumber} onChange={handlePhoneNumber}  className=" w-full text-[#7E7E7E] lg:h-[51px] lg:text-[16px]  pl-[9px] text-[10px] font-[500]  border-[1px] h-[30px]" />
            </div>
            {errors.phoneNumber && (
              <div className="text-[12px] text-red-500 italic lg:text-[14px]">
                {errors.phoneNumber}
              </div>
            )}
        </div>
        <div className="flex flex-col mt-[10px]">
            <div className="text-[#7E7E7E] text-[10px] lg:text-[16px]   font-[600]" >Email</div>
            <div>
              <input type="text" value={ikedcEmail} onChange={handleEmail}  className=" w-full lg:h-[51px] text-[#7E7E7E] pl-[9px] lg:text-[16px] text-[10px] font-[500]  border-[1px] h-[30px]" />
            </div>
            {errors.ikedcEmail && (
              <div className="text-[12px] text-red-500 italic lg:text-[14px]">
                {errors.ikedcEmail}
              </div>
            )}
        </div>
        <div className="flex flex-col mt-[10px]">
            <div className="text-[#7E7E7E] text-[10px] lg:text-[16px]  font-[600]" >Amount</div>
            <div>
              <input type="text"  value={ikedcamount} onChange={handleIkedcAmount} className=" w-full lg:h-[51px] lg:text-[16px]  text-[#7E7E7E] pl-[9px] text-[10px] font-[500]  border-[1px] h-[30px]" />
            </div>
        </div>

        <div className=" flex flex-col mt-[20px] gap-1">
            <div className="text-[#7E7E7E] text-[10px] lg:text-[16px]  font-[600]">Payment Method</div>
            <div
                className=" border-[1px] w-full h-[30px]  pl-[4px] pr-[8px] lg:h-[51px] lg:pl-[14px] lg:pr-[16px] flex items-center justify-between"
                onClick={() => setShowList(!showList)}
              >
                <p></p>
                 {selected ? (
              <div className="flex w-[100%] justify-between items-center">
                
                <p className="text-[10px] text-[#7E7E7E] font-extrabold lg:text-[14px]">
                  {" "}
                  {globalCountry}
                </p>
                <img
                  className="w-[13px] h-[13px] lg:w-[29px] lg:h-[29px]"
                  src={flag}
                  alt=""
                />
              </div>
            ) : (
              
              <img
              className=" h-[13.3px] w-[13.3px] lg:w-[24px] lg:h-[24px]  "
              src="./Images/dashboardImages/arrow-down2.png"
              alt="dropdown"
            />
              
            )}
            
           
          </div>
          {globalTransferErrors.country && (
            <div className="text-[12px] text-red-500 italic lg:text-[14px]">
              {globalTransferErrors.country}
            </div>
          )}
              {showList && (
            <div
              className={`${
                toggleSideBar
                  ? "lg:w-[31.5%] lg:top-[100.5%]"
                  : "lg:w-[38.5%] lg:top-[105.3%]"
              }  ${
                styles.countryDropDown
              } rounded-br-[7px] rounded-bl-[7px] shadow-xl bg-[#fff] border w-[100%] lg:w-full lg:rounded-br-[14px] lg:rounded-bl-[14px]`}
            >
              {" "}
              {countryList.map((country) => (
                <div
                  className=" cursor-pointer border-b flex items-center p-2 gap-[5px] text-[9px]  md:text-[14px] lg:text-[16px]"
                  key={country.id}
                  onClick={() =>
                    handleCountryClick(
                      country.name,
                      country.flag,
                      country.id,
                      country.code
                    )
                  }
                >
                  <img
                    className="w-[13px] h-[13px] lg:w-[29px] lg:h-[29px]"
                    src={country.flag}
                    alt="/"
                  />
                  {country.name}
                </div>
              ))}
            </div>
          )}
        </div>

        </div>
        <div
            onClick={handleProceed}
            className={`text-[12px] mt-[30px] md:mt-[40px] bg-[#0008] md:w-fit lg:px-12 lg:text-[16px] lg:px md:py-1 md:rounded-md md:px-6   py-3 rounded-md font-[600] text-center text-white
            ${
              !meterNumber ||
              !verifiedName ||
              !phoneNumber ||
              !ikedcEmail ||
              !selectedNetworkProduct ||
              !selected ||
              !ikedcamount
                ? "bg-[#63616188] cursor-not-allowed"
                : "bg-primary"
            }`}
            disabled={
              !meterNumber ||
              !verifiedName ||
              !phoneNumber ||
              !ikedcEmail ||
              !selectedNetworkProduct ||
              !selected ||
              !ikedcamount
            }
          >
            Proceed
          </div>

          {/* Confirmation Transaction Popup */}
          {proceed && (
            <Modal>
              <div
            className={`${styles.transferConfirmation} ${
              toggleSideBar ? " lg:ml-[20%] lg:w-[40%]" : "lg:w-[562px]"
            } w-[90%] overflow-auto`}
          >
            <img
              onClick={() => setProceed(false)}
              className="absolute right-2 w-[18px] h-[18px] my-[3%] md:w-[35px] md:h-[35px] lg:w-[25px] lg:h-[25px]"
              src="/Images/transferImages/close-circle.png"
              alt=""
            />
            <hr className="h-[6px] bg-[#04177f] border-none mt-[8%] md:mt-[6%] md:h-[10px]" />
            <h2 className="text-[12px] my-[5%] text-center md:my-[3%] md:text-[15px] lg:my-[2%] lg:text-[16px]">
              Confirm Transaction
            </h2>
            <p className="text-[10px] text-[#000] pt-[20px] text-center mb-2 md:text-[12px] lg:text-[14px]">
              You are about to Purchase{" "}
              <span className="text-[#000] font-extrabold text-[10px] md:text-[16px] lg:text-[12px]">
                {selectedNetworkProduct} Meter ({ikedcamount})
              </span>{" "}
              {/* Points to <br></br>
              <span className="text-[#000] font-extrabold text-[10px] md:text-[16px] lg:text-[12px]">
                &#8358;{}{" "}
              </span> */}
              From <br /> your NGN Wallet to{" "}
            </p>

            <div className="flex flex-col gap-3 pt-[10px]">
              <div className="flex text-[10px] md:text-[14px] pt-[10px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                <p className="text-[#0008]">Disco Type</p>
                <span className="flex items-center gap-1 ">
                  <div><img className="w-[12px]" src={logo2} alt="" /></div>
                  <div>Ikeja-IKEDC</div>
                  </span>
              </div>
              <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                <p className="text-[#0008]">Meter Type</p>
                <span>{selectedNetworkProduct} </span>
              </div>
              <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                <p className="text-[#0008]">Meter Number</p>
                <span>{meterNumber} </span>
              </div>

              <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                <p className="text-[#0008]">Verified Name</p>
                <span>{verifiedName}</span>
              </div>

              <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                <p className="text-[#0008]">Phone Number</p>
                <span>{phoneNumber}</span>
              </div>
              <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                <p className="text-[#0008]">Email</p>
                <span>{ikedcEmail}</span>
              </div>
              <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                <p className="text-[#0008]">Amount</p>
                <span>{ikedcamount}</span>
              </div>
              <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                <p className="text-[#0008]">Payment Method</p>
                <span>{selected}</span>
              </div>
              <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                <p className="text-[#0008]">Points Earned</p>
                <span className="text-[#00AA48]">{pointsEarned}</span>
              </div>
            </div>

            <div className="bg-[#0001] h-[45px] my-5 flex justify-between items-center px-[4%]">
              <div className="flex gap-2 items-center">
                <div className="bg-white rounded-full h-[27px] w-[27px] flex justify-center items-center">
                  <img className="w-[16px] h-[16px]" src={nig} alt="/" />
                </div>
                <p className="text-[10px] md:text-[14px]  lg:text-[16px]">
                  Available Balance{" "}
                  <span className="text-[#0003]">(&#8358;50,000.00)</span>
                </p>
              </div>
              <img
                className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                src="./Images/Dashboardimages/arrowright.png"
                alt="/"
              />
            </div>
            <button
              
              className={`bg-[#04177f] my-[5%] w-[88%] flex justify-center items-center mx-auto cursor-pointer text-[14px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[16px] lg:text-[14px] lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
            >
              Confirmed
            </button>
          </div>
            </Modal>
          )}

       </DashBoardLayout>
     );
}
 
export default IKEDC;