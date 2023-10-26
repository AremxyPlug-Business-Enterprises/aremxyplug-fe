import { DashBoardLayout } from "../../Layout/DashBoardLayout";
import { useContext } from "react";
import { ContextProvider } from "../../../Context";
import { useState } from "react";
import styles from "../TransferComponent/transfer.module.css";
import bulb from "../ElectricitySubscription/Electricity-sub-images/Group 13115.svg"
import arrow from "../ElectricitySubscription/Electricity-sub-images/arrow-square-right.png"
import logo from "../ElectricitySubscription/Electricity-sub-images/315-3152211_ikeja-electric-logo 1.png"
import arrowDown from "../ElectricitySubscription/Electricity-sub-images/arrow-down.png"

const IKEDC = () => {

    const { isDarkMode,
      toggleSideBar,
      meterNumber,
      showList,
      // setMeterNumber,
      // setVerifiedName,
    setShowList,
    setSelected,
    selected,
    globalCountry,
    setGlobalCountry,
    globalTransferErrors,
    verifiedName,
    phoneNumber, 
    // setPhoneNumber,
    // ikedcEmail, 
    // setEmail,
    } = useContext(ContextProvider);
    const [flag, setFlag] = useState("");
  // const [countryCode, setCountryCode] = useState("");
  // const [currencyAvailable, setCurrencyAvailable] = useState(false);

    const { selectedNetworkProduct, setSelectedNetworkProduct } =
    useContext(ContextProvider);
    const [showProductList, setShowProductList] = useState(false);
    // const handleInputChange = (event) => {
    //   const newValue = event.target.value;
    //   setVerifiedName(newValue);
    //   setMeterNumber(newValue);
    //   setPhoneNumber(newValue);
    //   setEmail(newValue);
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
    
    const handleCountryClick = (name, flag, id, code) => {
      setFlag(flag);
      setShowList(false);
      setGlobalCountry(name);
      setSelected(true);
      // setCountryCode(code);
      // setCurrencyAvailable(id !== 1);
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
        <div className=" flex text-[10px] font-[600] pt-[30px] text-[#7E7E7E] items-center "> 
            <div>Recharge</div>
            <div><img className="w-[25px]" src={logo} alt="" /></div>
            <div className=" ml-1">Ikeja Electric Payment-IKEDC Meter Instantly</div>
            <div><img src={arrow} alt="" /></div>

            </div>  
                <div className="bg-gradient-to-b mt-[10px] border-[1px] border-[] from-[#E2F3FF] font-[700] text-[8px] text-center py-1 to-[#FFF]">Ikeja Electric Covers: Ikeja IKEDC</div>

        </div>
        <div className="text-[10px] font-[600] mt-[20px] text-[#7E7E7E] "> Select <span className="text-[#04177F] font-[700]">Prepaid</span> MeterType if you load token on your meter.</div>
        <div className="text-[10px] font-[600] mt-[10px] text-[#7E7E7E] "> Select <span className="text-[#04177F] font-[700]">Postpaid</span> MeterType if you get a bill at the end of the month.</div>

        {/* input sections */}
        <div className="grid grid-cols-1 gap-1 ">
        <div className=" flex flex-col mt-[20px] gap-1">
            <div className="text-[#7E7E7E] text-[10px] font-[600]">Select Meter Type</div>
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

        <div className="flex flex-col mt-[10px]">
            <div className="text-[#7E7E7E] text-[10px] font-[600] " >Meter Number</div>
            <div>
              <input type="number" value= { meterNumber }  className=" w-full text-[#7E7E7E] pl-[9px] text-[10px] font-[500]  border-[1px] h-[30px]" />{" "}
            </div>
        </div>

        <div className="flex flex-col mt-[10px]">
            <div className="text-[#7E7E7E] text-[10px] font-[600]" >Verified Name</div>
            <div>
              <input type="text" value={ verifiedName }  className=" w-full text-[#7E7E7E] text-[10px] pl-[9px] font-[500]  border-[1px] h-[30px]" />{" "}
            </div>
        </div>
        <div className="flex flex-col mt-[10px]">
            <div className="text-[#7E7E7E] text-[10px] font-[600]" >Phone Number</div>
            <div>
              <input type="number" value={phoneNumber}  className=" w-full text-[#7E7E7E] pl-[9px] text-[10px] font-[500]  border-[1px] h-[30px]" />
            </div>
        </div>
        <div className="flex flex-col mt-[10px]">
            <div className="text-[#7E7E7E] text-[10px] font-[600]" >Email</div>
            <div>
              <input type="text"   className=" w-full text-[#7E7E7E] pl-[9px] text-[10px] font-[500]  border-[1px] h-[30px]" />
            </div>
        </div>
        <div className="flex flex-col mt-[10px]">
            <div className="text-[#7E7E7E] text-[10px] font-[600]" >Amount</div>
            <div>
              <input type="text"  className=" w-full text-[#7E7E7E] pl-[9px] text-[10px] font-[500]  border-[1px] h-[30px]" />
            </div>
        </div>

        <div className=" flex flex-col mt-[20px] gap-1">
            <div className="text-[#7E7E7E] text-[10px] font-[600]">Payment Method</div>
            <div
                className=" border-[1px] w-full h-[30px]  pl-[4px] pr-[8px] lg:h-[51px] lg:pl-[14px] lg:pr-[16px] flex items-center justify-between"
                onClick={() => setShowList(!showList)}
              >
                 {selected ? (
              <div className="flex gap-[7px] items-center">
                <img
                  className="w-[13px] h-[13px] lg:w-[29px] lg:h-[29px]"
                  src={flag}
                  alt=""
                />
                <p className="text-[10px] font-extrabold lg:text-[14px]">
                  {" "}
                  {globalCountry}
                </p>
              </div>
            ) : (
              <p></p>
            )}
            <img
              className=" h-[13.3px] w-[13.3px] lg:w-[24px] lg:h-[24px] "
              src="./Images/dashboardImages/arrow-down2.png"
              alt="dropdown"
            />
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
            // onClick={handleProceed}
            className="text-[12px] mt-[30px] md:mt-[40px] bg-[#0008] md:w-fit lg:px-12 lg:text-[16px] lg:px md:py-1 md:rounded-md md:px-6   py-3 rounded-md font-[600] text-center text-white"
          >
            Proceed
          </div>

       </DashBoardLayout>
     );
}
 
export default IKEDC;