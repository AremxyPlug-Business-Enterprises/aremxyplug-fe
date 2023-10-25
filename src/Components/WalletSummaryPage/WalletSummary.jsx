import React, { useState } from "react";
import arrowsquare1 from "./assets/arrow-square-right.png";

import arrow7 from "./assets/arrow-down7.svg";
// import filter from "./assets/document-filter.svg";
import menus from "./assets/menu.png";
import arrow9 from "./assets/arrow-down9.svg";
import arrows from "./assets/arrow-square-right1.svg";
import arrows2 from "./assets/arrow-square-right2.png";
import arrows3 from "./assets/arrow-square-right3.svg";
import arrows4 from "./assets/arrow-square-right4.svg";
import arrows5 from "./assets/arrow-square-right5.svg";
import arrows6 from "./assets/arrow-square-right6.png";
import arrows7 from "./assets/arrow-square-right7.png";
import arrowA from "./assets/arrow-square-rightA.png";
import arrowB from "./assets/arrow-square-rightB.png";
import arrowC from "./assets/arrow-square-rightC.png";
import arrowD from "./assets/arrow-square-rightD.png";
import arrowE from "./assets/arrow-square-right20.png";
import arrowF from "./assets/arrow-square-rightF.png";
import arrowG from "./assets/arrow-square-rightH.png";
import group5 from "./assets/Group (5).svg";
import flags from "./assets/Country Flags.png";
// import group4 from "./assets/Group (1).png";
import EUR from "./assets/EUR.svg";
import flags3 from "./assets/Country Flags (3).png";
import group10 from "./assets/Group (2).png";
import country5 from "./assets/Country Flags (4).png";
import normal from "./assets/search-normal.png";
import refresh from "./assets/refresh-2.svg";
import { DashBoardLayout } from "../Dashboard/Layout/DashBoardLayout";
import cash from "./assets/cash receipt from online shopping on mobile phone (1).png";
// import { useContext } from "react"; 
// import {ContextProvider} from "../Context";
import { Link } from "react-router-dom/dist/react-router-dom.development";
import arrowdown33 from "./assets/arrow-down@3x.png";
import arrowdown22 from "./assets/arrow-down@2x.png";
import { useContext } from "react";
import { ContextProvider } from  "../Context";
import styles from "../Dashboard/DashboardComponents/./component.module.css";
import { Calender } from "../Dashboard/DashboardComponents/Calender";
import group1 from "./assets/Group.png";







export default function WalletSummaryPage() {


  const handleButton = () => {
    const searchInput = document.querySelector('.searchInput');
    alert('Searching for: ' + searchInput.value);
  };
  
  
  const [calender, setCalender] = useState(false);

 
 
 const [isOpen1, setIsOpen1] = useState("");

  const [isOpen2, setIsOpen2] = useState("");



  const [ setBlur] = useState(false);
  const [selected, setSelected] = useState("");
  const { isDarkMode, toggleSideBar } =
useContext(ContextProvider);







const handleSelectedOption = (event) => {
  const clickedoption = event.target.value;
  setSelected(clickedoption);
  setBlur(
    clickedoption === "USD" ||
      clickedoption === "GBP" ||
      clickedoption === "AUD" ||
      clickedoption === "KES" ||
      clickedoption === "EUR"
  );
  return;
};

const [selectedCountry, setSelectedCountry] = useState(<img
  src={group1} alt="" />);
const handleSelect = (product) => {
setSelectedCountry(product); };

const [selectedProduct, setSelectedProduct] = useState('Filter By Status');
const handleClick = (product) => {
  setSelectedProduct(product); };


  // const toggleDropdown1 = () => {
    // setIsOpen1(true);
    // setIsOpen2(false);
  // };
// 
  // const toggleDropdown2 = () => {
    // setIsOpen2(true);
    // setIsOpen1(false);
  // };

  return (
    <DashBoardLayout>


<div className='w-full h-full'>

<div className="w-full h-[90px] md:h-[112.29px] lg:h-[196px] 
rounded-[7px] md:rounded-[11.5px] bg-gradient-to-r from-yellow-300 to-rose-400 flex 
px-[16px] lg:px-[50px] justify-between items-center lg:rounded-[20px]">
                <div className="py-[13px] lg:py-[40px]">
                  <h2 className="text-[9px] md:text-[13.75px] font-bold mb-3 lg:text-[24px] lg:mb-4">
                  MANAGE ALL YOUR TRANSACTIONS AT A <br /> TIME WITHOUT ANY HASSLE.
                  </h2>
                  <h2 className="text-[7px] md:text-[11.46px] lg:text-[20px] lg:leading-[26px] mb-3">
                  Select, filter, and manage all your transactions at a time,
                   download all  <br/> transactions stats and keep a record track.
                    
                  </h2>
                </div>
                <div className="w-[91px] h-[66px] lg:w-[220px] lg:h-[180px]">
                  <img
                    src={cash}
                    alt=""
                    className="h-full"
                  />
                </div>
              </div>



      
        <div className=" lg:top-[385px] md:top-[283px] top-[188px] gap-[8px]
         absolute lg:justify-start md:gap-[7px] lg:items-center lg:gap-[5px] inline-flex">
          {/* <div className="text-neutral-500 lg:text-[20px] text-[11px] md:mt-[5px] md:text-[13px] font-semibold "> */}
            {/* Wallet Summary */}
          {/* </div> */}
          <p className={styles.InOutText}>Wallet Summary</p>
          <div className="lg:w-6 lg:h-6 w-[13px] h-[13px] lg:justify-center md:w-[13.75px]
           md:h-[13.75px] md:mt-[6px] mt-[3%] lg:items-center relative flex">
            <img src={arrowsquare1} alt="" />
          </div>
        </div>
        <div className="lg:px-[] lg:py-[25px] lg:h-[120px] py-[10px] lg:gap-2.5 lg:top-[455px] 
        gap-[5px] mt-[20%] lg:mt-[150px] bg-indigo-300
         bg-opacity-20 md:rounded-[11.46px] lg:rounded-[20px] rounded-[6px]
          justify-center lg:w-full w-full md:w-full md:mt-[100px] md:h-[68.75px] 
          md:px-[140.10px] md:py-[14.32px]  items-center inline-flex">

        
          
            <div className="lg:justify-start lg:items-center gap-[10px] md:gap-[5.73px] lg:gap-[5.73px] flex">
              <div className="lg:w-[70px] lg:h-[70px] w-6 h-6 md:w-[40.10px] md:h-[40.10px] lg:gap-[5.73px] relative">
                <div className="lg:w-[70px] lg:h-[70px] left-0 top-0 w-6 h-6 md:w-[40.10px] md:h-[40.10px]  absolute bg-white rounded-full"></div>
                <div className="lg:w-[29.27px] lg:h-[29.27px]  lg:top-[20px]
                 w-4 h-4 top-[6.86px] md:w-[16.77px] lg:left-[20px] md:h-[16.77px]
                  md:left-[11.46px]  md:top-[11.46px] left-[7px] absolute">
                 
                
                {selectedCountry}
        
      
                  {/* <img */}
                    {/* // src={group1} */}
                    {/* // className="lg:w-[29.27px] lg:h-[29.27px] ml-[-1.5px] left-[-11px] */}
                    {/* //  lg:top-[0.91px] w-2.5 h-[9.41px] top-[0.31px] lg:left-[10px]  */}
                      {/* // md:w-[16.77px] md:h-[15.73px] md:left-0 md:top-[0.52px] absolute" */}
                    {/* // alt="" */}
                  {/* // /> */}
      
                  
                </div>
                  
              </div>
              <div  className="justify-start items-start mt-[5px] md:mt-[12px] gap-[5.5px] lg:gap-[11px] md:gap-[6.30px]  flex">
                <div className="text-black lg:text-[20px] text-[10px] md:text-[13px] md:whitespace-nowrap font-semibold lg:leading-relaxed md:leading-[14.90px] leading-[10.40px] ">
                  Available Balance
                </div>
                <div className="text-neutral-500 lg:text-[20px] text-[10px] md:text-[13px] font-medium  lg:leading-relaxed md:leading-[14.90px] leading-[10.40px]">
                  (₦50,000.00)
                </div>
              </div>
            </div>
            <div
               onClick={() => {
                setIsOpen1((prev) => !prev);
                setCalender(false)
                setIsOpen2(false)

              }}
              className="lg:w-6 lg:h-6 w-[13.75px] md:mt-[5px] mt-[0px] h-[13.75px] md:w-[13.75px] md:h-[13.75px] lg:justify-center lg:items-center flex"
            >
               {isOpen1 ? (
    <img src={arrowdown33} alt="Arrow Down 33" />
  ) : (
    <img src={arrow7} alt="Arrow 7" />
  )}
            </div>
          
        </div>
        <div class="w-full h-6 pl-[0.33px] mt-[10px] lg:mt-[30px] md:mt-[12px] pr-[86.66px] py-[2.67px]
lg:h-[72px] lg:pl-4 lg:pr-[459.30px] lg:gap-[50.53px] lg:py-[11px]
md:w-full md:h-[41.25px] md:pl-[9.17px] md:py-[px] md:pr-[262.40px] md:pt-[6.39px] lg:w-full
md:pb-[6.40px] bg-white shadow border-t border-b border-black
border-opacity-30 justify-start items-center gap-[52.80px] inline-flex">

<div
  className={`${
    toggleSideBar
      ? "lg:gap-[px] lg:text-[20px]"
      : "lg:gap-[118px] lg:text-[23px]"
  } my-[10%] flex text-[9px] font-extrabold gap-[8px] mt-[25px]
   lg:mt-9 md:mt-6 md:my-[5%] md:whitespace-nowrap md:text-[16px] md:gap-[39px] `}
>
  <div
    onClick={() => {
      setCalender((prev) => !prev);
      setIsOpen1(false)
      setIsOpen2(false)
    }}
    className={`cursor-pointer ${styles.filter} ${
      isDarkMode ? "border" : ""
    } flex items-center gap-[1px]  px-[2px] rounded-[3px] md:px-[8px]`}
  >
    <div className={`text-[#04177f]`}>Filter by Date </div>
    <img
      className="w-[15px] h-[15px] md:w-[17px] md:h-[17px] lg:w-[20px] lg:h-[20px]"
      src="./Images/Dashboardimages/dateImg.png"
      alt=""
    />
  </div>
  
</div>
          <div
           onClick={() => {
            setIsOpen2((prev) => !prev);
            setCalender(false)
            setIsOpen1(false)

          }}
          className="lg:self-stretch justify-start lg:mt-[7px] mt-[5px] items-center lg:gap-2.5 gap-[5.73px] md:gap-[5.73px] inline-flex">
            <div className="lg:justify-start lg:items-center lg:gap-[5px] md:gap-[2.86px] gap-[2.86px] flex">
              <div className="lg:w-[20.85px] w-[13.37px] lg:h-[20.85px] h-[13.37px]
              md:w-[19px] md:h-[19px] md:mt-[4px] justify-center items-center relative flex">
                <img src={menus} alt="" />
              </div>
              <div className="text-neutral-500 whitespace-nowrap lg:whitespace-nowrap lg:text-[20px] md:mt-[-2px] text-[10px] md:text-[18px] md:whitespace-nowrap font-semibold ">
                {selectedProduct}
              </div>
            </div>

            
            <div
               
               
               
              className="lg:w-[19.85px] w-[11.37px] lg:h-[19.85px] h-[11.37px] md:w-[18px] md:h-[18px] lg:justify-center lg:items-center relative flex"
            >
                             {isOpen2 ? (
    <img src={arrowdown22} alt="Arrow Down 22" />
  ) : (
    <img src={arrow9} alt="Arrow 9" />
  )}
            </div>
          </div>
          
        </div>
        { calender && <div className="mt-[30px] lg:mt-[50px]"><Calender/></div> }
        

        
        <div className="mt-[-5%] lg:mt-[1%] md:mt-[-6%]   mb-[10%]">

{/* ==============================Sale Analysis Indicator====================== */}
<div
  className={`${styles.INnOUT} my-[10%] flex lg:mt-[5%] lg:items-center`}
>
  <select
    name="curr"
    id="curr"
    onChange={handleSelectedOption}
    value={selected}
  >
    <option value="NGN">NGN</option>
    <option value="USD">USD</option>
    <option value="GBP">GBP</option>
    <option value="EUR">EUR</option>
    <option value="AUD">AUD</option>
    <option value="KES">KES</option>
  </select>

  <div
    className={`${styles.inflowOutflow} ${
      isDarkMode ? "border " : " bg-[#D5F6E3]"
    }  text-[7px] ${toggleSideBar ? "lg:text-[14px]" : "lg:text-[px]"}`}
  >
    <div className="flex gap-1 md:items-center ">
      <p className={`${toggleSideBar ? "lg:text-[18px]" : ""}`}>
        Total Inflows
      </p>
      <img
        className="h-[8.3px] w-[8.3px] md:h-[18px] md:w-[18px] lg:w-[24px] lg:h-[24px]"
        src="./Images/dashboardImages/newarrow-down.png"
        alt="dropdown"
      />
    </div>
    <div className="text-center">&#8358;96,001,55</div>
  </div>

  <div
    className={`${styles.inflowOutflow} ${
      isDarkMode ? "border " : " bg-[#92abfe81]"
    }  text-[7px]`}
  >
    <div className="flex gap-1 md:items-center">
      <p className={`${toggleSideBar ? "lg:text-[18px]" : ""}`}>
        Total Transactions{" "}
      </p>
      <img
        className="h-[8.3px] w-[8.3px] md:h-[18px] md:w-[18px] lg:w-[24px] lg:h-[24px]"
        src="./Images/dashboardImages/newarrow-down.png"
        alt="dropdown"
      />
    </div>
    <div className="text-center">10,000</div>
  </div>

  <div
    className={`${styles.inflowOutflow} ${
      isDarkMode ? "border " : " bg-[#FDCECE]"
    } text-[7px]`}
  >
    <div className="flex gap-1 md:items-center">
      <p className={`${toggleSideBar ? "lg:text-[18px]" : ""}`}>
        Total Outflows
      </p>
      <img
        className="h-[8.3px] w-[8.3px] md:h-[18px] md:w-[18px] lg:w-[24px] lg:h-[24px]"
        src="./Images/dashboardImages/newarrow-up.png"
        alt="dropdown"
      />
    </div>
    <div className="text-center">&#8358;96,001,55</div>
  </div>
</div>

<div className="flex lg:mt-[-48px] mt-[-5px] md:mt-[-20px] items-center text-neutral-500 gap-[10px]">
  <p className={styles.InOutText}>Wallet History</p>
  <img
    className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
    src="./Images/Dashboardimages/arrowright.png"
    alt="/"
  />
</div>

</div>



 {isOpen1 && (
          <div className="lg:ml-[510px] pl-[-50px] lg:top-[610px] md:w-[300px] lg:pl-[-500px]
           left-[65px] w-[62%] lg:w-full 
           top-[279px] md:top-[420px] absolute flex-col md:ml-[300px] lg:items-start inline-flex">
            <div onClick={() => handleSelect(<img className="" src={group5} alt="" />)} className="lg:pl-2.5 lg:w-[370px] border border-b md:w-[214.84px] 
            lg:pt-[7px] md:h-[35px] lg:h-[47px] h-[30px] 
            justify-start items-center pt-[3px] pb-[px] bg-white shadow gap-[5px] pl-2 md:pl-2 md:gap-[5px] 
              flex-row  md:pt-1 md:pb-[4.43px] inline-flex">
              
                
                  <div className="lg:w-[29.27px] w-[16.77px] lg:h-[27.45px]
                   h-[16.77px] lg:left-0 lg:top-[0.91px] md:w-[16.77px]
                    md:h-[16.77px] md:left-1 md:top-[0.52px]">
                    <img src={group5} alt="" />
                  </div>
                
                <div className="text-neutral-500 text-[9px] md:text-[13px] lg:text-xl lg:font-medium 
                  md:leading-3 lg:leading-tight">
                  NGN Wallet (50,000.00)
                </div>
              
            </div>
            <div
            onClick={() => handleSelect(<img src={flags} alt="" />)}
            className="lg:pl-2.5 md:w-[214.84px] border border-b mt-[0.0px] 
             h-[30px] lg:h-[45px] lg:w-[370px] lg:pb-[7.73px] bg-white shadow 
             justify-start items-center md:h-[35px] lg:mt-[-3px] flex-row pl-2 md:pl-2 gap-[5px] 
               md:gap-[5px] lg:gap-[5px] md:pt-1   inline-flex">
              
                
                  <div className="lg:w-[28.77px] w-[16.77px] lg:h-[26.09px]
                   h-[16.77px] lg:left-[0.50px] lg:top-[3.18px] md:w-[16.77px]
                    md:h-[16.77px] md:left-0 md:top-[0.52px] ">
                    <img src={flags} alt="" />
                  </div>
                
                <div className="text-neutral-500 lg:text-xl md:text-[13px] text-[9px]
                 font-medium  md:leading-3 leading-tight">
                  USD Wallet (0.00)
                </div>
              
            </div>
            <div onClick={() => handleSelect(<img src={EUR}   alt="" />)} className="lg:pl-2.5 lg:h-[45px]
             border border-b md:w-[214.84px] pl-2 md:pl-2 h-[30px] 
            justify-start items-center lg:pt-[7px] lg:w-[370px] lg:pb-[7.73px] bg-white 
            shadow md:h-[35px]  gap-[5px] md:gap-[5px] lg:gap-[5px] flex-row 
             md:pt-1  inline-flex">
              

                  <img  className="lg:w-[29.27px] w-[16.77px] h-[16.77px]
                   lg:h-[29.27px] lg:left-0 lg:top-0 lg:mt-[-1px]
                   md:w-[16.77px] md:h-[16.77px] md:left-0 md:top-[0.52px] " src={EUR} alt="" />



                 <div className="text-neutral-500 lg:text-xl text-[9px] md:text-[13px]
                 font-medium  md:leading-3 leading-tight">
                  EUR Wallet (0.00)
                </div>
              
            </div>
            <div onClick={() => handleSelect(<img src={flags3} alt="" />)}
             className="lg:pl-2.5 lg:w-[370px] md:w-[214.84px] pl-2 md:pl-2 border border-b lg:h-[45px] h-[30px]
             justify-start items-center lg:pt-[7px] lg:pb-[7.73px] bg-white shadow 
               md:h-[35px] flex-row gap-[5px]
                lg:gap-[5px] md:gap-[5px] md:pt-1 inline-flex">
              
                
                  <img  className="lg:w-[29.27px] w-[16.77px] h-[16.77px]
                   lg:h-[29.27px] lg:left-[0.50px] lg:top-[0.51px]
                   md:w-[16.77px] md:h-[16.77px] md:left-0 md:top-[0.52px] " src={flags3} alt="" />
                  

                
                <div className="text-neutral-500 lg:text-xl text-[9px] md:text-[13px] font-medium 
                 md:leading-3 leading-tight">
                  GBP Wallet (0.00)
                </div>
              
            </div>
            <div onClick={() => handleSelect( <img src={group10} alt="" />)} className="lg:pl-2.5 md:w-[214.84px]
             border border-b lg:pt-[7px] lg:pb-[7.73px]
             lg:h-[45px] h-[30px] justify-start items-center lg:gap-[5px] lg:w-[370px] bg-white shadow
              md:h-[35px] pl-2 md:pl-2
               md:pt-1  flex-row gap-[5px] md:gap-[5px] inline-flex">
              
                
                  <div className="lg:w-[29.27px] lg:h-[29.27px] lg:left-[0.50px] 
                  lg:top-[0.51px] h-[16.77px] w-[16.77px] md:w-[16.77px] md:h-[16.77px]
                   md:left-0 md:top-[0.52px]">

                  <img src={group10} alt="" /></div>
                
                <div className="text-neutral-500 lg:text-xl text-[9px] md:text-[13px] font-medium 
                 md:leading-3 leading-tight">
                  AUD Wallet (0.00)
                </div>
              
            </div>
            <div onClick={() => handleSelect(<img src={country5} alt="" />)} className="lg:pl-2.5 md:w-[214.84px] border border-b lg:pt-[7px] lg:w-[370px] lg:h-[45px] h-[30px]
             justify-start items-center lg:pb-[7.73px] bg-white shadow lg:gap-[5px] md:h-[35px]
               flex-row gap-[5px] md:gap-[5px] md:pt-1 pl-2 md:pl-2 inline-flex">
              
                
                  <img className="lg:w-[29.27px]  md:w-[16.77px] md:h-[16.77px] w-[16.77px] h-[16.77px] 
                   lg:h-[29.27px] lg:left-[0.50px] 
                  lg:top-[0.51px]  md:left-0 md:top-[0.52px]" src={country5} alt="" />

                <div className="text-neutral-500 lg:text-xl text-[9px] md:text-[13px] font-medium  md:leading-3 leading-tight">
                  KES Wallet (0.00)
                </div>
              
            </div>
          </div>
        )}


<div className={styles.mainGrid}>
                    <div className={styles.mainGridCol}>
                        <div className="border md:h-[35px] mt-[-5px]  h-[25px] lg:mt-[-55px] md:mt-[-25px] flex justify-between
                         items-center py-1 px-3 lg:h-[45px] lg:border-[1px] lg:border-[#0003]">
                          
        <img  className="justify-center items-center lg:w-5 mt-[0px]
       md:mt-[0px] lg:mt-[0px] 
w-3 h-3 lg:h-5 md:w-[13px]  md:h-[13px]" onClick={handleButton} src={normal} alt="" /> 

                            <input
                            className="searchInput text-[10px] w-[100%] h-[100%] md:text-[13px] ml-4 outline-none lg:text-[20px]"
                            type="text"  name="search" placeholder='Search for Transactions, e.g; Order Number'
                            />
                            

                            <div className="border md:gap-2 gap-1 flex flex-row
                             lg:gap-2 lg:h-[45px] md:h-[35px] h-[25px] justify-between items-center
                             shadow border-r-0 bg-white border-opacity-50">
                             <button className="text-neutral-500 md:text-[13px] 
                             lg:text-[20px] text-[9px] mt-[4px] ml-3  font-medium " >Search</button>
                            <button className=" h-[13.3px] w-[13.3px] mt-[3px] md:mt-0 md:h-[15px] md:w-[15px] lg:w-[24px] lg:h-[24px]"><img
                            className=" h-[13.3px] w-[13.3px] mt-[-2px] md:mt-[3px] md:h-[15px] md:w-[15px] lg:w-[24px] lg:h-[24px] "
                            src={refresh}
                            alt="dropdown"
                            /></button>
                        </div>
                    </div>
                </div>
                </div>


{/* table for large screens */}
        <div className='mt-[30px] hidden md:flex '>
         <table
            className="mt-[0px] lg:h-[700px] md:h-[401.04px]  
     md:shadow-lg border-collapse "
          >
            
            <tr
              className="flex  w-[100%] md:pl-[16.038px] md:pr-[15.473px] md:gap-[36.67px]  
              md:pt-[6.316px] md:pb-[5.746px] lg:pl-[28px] lg:pr-[27px] lg:gap-[64px] 
              lg:pt-[11px] lg:pb-[10px]
               bg-[#CED9FF]"
            >
              <th className="text-left lg:text-[16px] lg:leading-[20.8px]  
              w-1/5  md:text-[9.167px] md:leading-[11.917px] border-none">
                Products
              </th>
              <th
                className="text-left w-1/5 md:text-[9.167px] md:leading-[11.917px] 
        lg:text-[16px] lg:leading-[20.8px] border-none"
              >
                Description
              </th>
              <th
                className="text-left w-1/5 md:text-[9.167px] md:leading-[11.917px] 
        lg:text-[16px] lg:leading-[20.8px] border-none"
              >
                Order No
              </th>
              <th
                className="text-left w-1/5 md:text-[9.167px] md:leading-[11.917px] 
        lg:text-[16px] lg:leading-[20.8px] border-none"
              >
                Amount
              </th>
              <th
                className="text-left w-1/5 md:text-[9.167px] md:leading-[11.917px] 
        lg:text-[16px] lg:leading-[20.8px] border-none"
              >
                Date & Time
              </th>
              <th
                className="text-left w-1/5  md:text-[9.167px] md:leading-[11.917px]
        lg:text-[16px] lg:leading-[20.8px] border-none"
              >
                Status
              </th>
            </tr>
            <tr className="flex w-[100%] md:pl-[16.038px] md:pr-[15.473px] md:gap-[36.67px]
            lg:pl-[28px] lg:pr-[27px] lg:gap-[64px] border-b-2">


              <td
                className="w-1/5 flex-start   md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px] "
                >
                  Virtual Account
                </p>
              </td>
            <td
                className="w-1/5 flex-start   md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px] "
                >
                  NGN Wallet Top-up
                </p>
              </td>
          <td
                className="w-1/5 flex-start   md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px]"
                >
                  0000000
                </p>
              </td>
       <td
                className="w-1/5 flex-start   md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px]"
                >
                  ₦1,000.00 
                </p>
              </td>
    
    
              <td
                className="w-1/5 lg:pt-[30.5px] lg:pb-[28.5px]    
    md:pt-[17.51px] md:pb-[16.36px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className=" text-left font-[600] leading-[20.8px] border-none
      md:text-[9.167px] md:leading-[11.917px] lg:text-[16px] lg:leading-[20.8px]"
                >
                  <span className="md:block">May 21, 2023,</span>
                  <span className="md:block">07:21:00pm</span>
                </p>
              </td>
              
              <td
                className="w-1/5 flex justify-start items-center
        md:pt-[17.51px] md:pb-[16.36px] lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] text-[#7C7C7C] gap-2  border-none"
              >
                <p
                  className="lg:text-[16px] font-[600] lg:leading-[20.8px] justify-start items-center  flex md:w-[65.729px] md:h-[17.76px]
        py-[4px] px-[12px] text-white bg-green-300 md:text-[9.167px] lg:w-[104px] lg:h-[31px] md:leading-[11.917px] md:rounded-[3.438px]"
                >
                  Successful
                </p>
                <img
  className="w-[10px] h-[10px] md:w-[10px] text-end md:h-[10px] lg:w-[15px] lg:h-[15px]"
  src={arrows}
  alt="/"
/>
              </td>
            </tr>
            


        <tr className="flex w-[100%] md:pl-[16.038px] md:pr-[15.473px] md:gap-[36.67px]
            lg:pl-[28px] lg:pr-[27px] lg:gap-[64px] border-b-2">


              <td
                className="w-1/5 flex-start   md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px]"
                >
                  Withdrawal
                </p>
              </td>
            <td
                className="w-1/5 flex-start   md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px]"
                >
                  From USD Wallet to <br /> Bank
                </p>
              </td>
          <td
                className="w-1/5 flex-start   md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px]"
                >
                  0000000
                </p>
              </td>
       <td
                className="w-1/5 flex-start   md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px]"
                >
                   ₦25,000.00  
                </p>
              </td>
    
    
              <td
                className="w-1/5 lg:pt-[30.5px] lg:pb-[28.5px]    
    md:pt-[17.51px] md:pb-[16.36px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className=" text-left font-[600] leading-[20.8px] border-none
      md:text-[9.167px] md:leading-[11.917px] lg:text-[16px] lg:leading-[20.8px]"
                >
                  <span className="md:block">May 21, 2023,</span>
                  <span className="md:block">07:21:00pm</span>
                </p>
              </td>
              
              <td
                className="w-1/5 flex justify-start items-center
        md:pt-[17.51px] md:pb-[16.36px] lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] text-[#7C7C7C] gap-2  border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] md:w-[65.729px] md:h-[17.76px]
        py-[4px] px-[12px] text-white bg-green-300 md:text-[9.167px] lg:w-[104px] lg:h-[31px] md:leading-[11.917px] md:rounded-[3.438px]"
                >
                  Successful
                </p>
        <img
  className="w-[10px] h-[10px] md:w-[10px] md:h-[10px] lg:w-[15px] lg:h-[15px]"
  src={arrows2}
  alt="/"
/>
              </td>
            </tr>


            <tr className="flex w-[100%] md:pl-[16.038px] md:pr-[15.473px] md:gap-[36.67px]
            lg:pl-[28px] lg:pr-[27px] lg:gap-[64px] border-b-2">


              <td
                className="w-1/5 flex-start   md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px]"
                >
                  Card Payment
                </p>
              </td>
            <td
                className="w-1/5 flex-start   md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px]"
                >
                  NGN Wallet Top-up
                </p>
              </td>
          <td
                className="w-1/5 flex-start   md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px]"
                >
                  0000000
                </p>
              </td>
       <td
                className="w-1/5 flex-start   md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px]"
                >
                   ₦25,000.00  
                </p>
              </td>
    
    
              <td
                className="w-1/5 lg:pt-[30.5px] lg:pb-[28.5px]    
    md:pt-[17.51px] md:pb-[16.36px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className=" text-left font-[600] leading-[20.8px] border-none
      md:text-[9.167px] md:leading-[11.917px] lg:text-[16px] lg:leading-[20.8px]"
                >
                  <span className="md:block">May 21, 2023,</span>
                  <span className="md:block">07:21:00pm</span>
                </p>
              </td>
              
              <td
                className="w-1/5 flex justify-start items-center
        md:pt-[17.51px] md:pb-[16.36px] lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] text-[#7C7C7C] gap-2 border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] md:w-[65.729px] md:h-[17.76px]
        py-[4px] px-[12px] text-white bg-green-300 md:text-[9.167px] md:leading-[11.917px] lg:w-[104px] lg:h-[31px] md:rounded-[3.438px]"
                >
                  Successful
                </p>
           <img
  className="w-[10px] h-[10px] md:w-[10px] md:h-[10px] lg:w-[15px] lg:h-[15px] "
  src={arrows3}
  alt="/"
/>
              </td>
            </tr>





 <tr className="flex w-[100%] md:pl-[16.038px] md:pr-[15.473px] md:gap-[36.67px]
            lg:pl-[28px] lg:pr-[27px] lg:gap-[64px] border-b-2">


              <td
                className="w-1/5 flex-start   md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px] "
                >
                  Money Transfer
                </p>
              </td>
            <td
                className="w-1/5 flex-start   md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px]"
                >
                  From NGN Wallet to <br /> AremxyPlug 
                </p>
              </td>
          <td
                className="w-1/5 flex-start   md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px]"
                >
                  0000000
                </p>
              </td>
       <td
                className="w-1/5 flex-start   md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px]"
                >
                   ₦25,000.00  
                </p>
              </td>
    
    
              <td
                className="w-1/5 lg:pt-[30.5px] lg:pb-[28.5px]    
    md:pt-[17.51px] md:pb-[16.36px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className=" text-left font-[600] leading-[20.8px] border-none
      md:text-[9.167px] md:leading-[11.917px] lg:text-[16px] lg:leading-[20.8px]"
                >
                  <span className="md:block">May 21, 2023,</span>
                  <span className="md:block">07:21:00pm</span>
                </p>
              </td>
              
              <td
                className="w-1/5 flex justify-start items-center
        md:pt-[17.51px] md:pb-[16.36px] lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] text-[#7C7C7C] gap-2  border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] md:w-[65.729px] md:h-[17.76px]
        py-[4px] px-[12px]  text-white bg-green-300 md:text-[9.167px] lg:w-[104px] lg:h-[31px] md:leading-[11.917px] md:rounded-[3.438px]"
                >
                  Successful
                </p>
           <img
  className="w-[10px] h-[10px] md:w-[10px] md:h-[10px] lg:w-[15px] lg:h-[15px] "
  src={arrows4}
  alt="/"
/>
              </td>
            </tr>


<tr className="flex w-[100%] md:pl-[16.038px] md:pr-[15.473px] md:gap-[36.67px]
            lg:pl-[28px] lg:pr-[27px] lg:gap-[64px] border-b-2">


              <td
                className="w-1/5 flex-start border-none  md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px]"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px] "
                >
                  Money Transfer
                </p>
              </td>
            <td
                className="w-1/5 flex-start   md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px] text-[#7C7C7C] "
                >
                  From NGN Wallet to <br /> Bank 
                </p>
              </td>
          <td
                className="w-1/5 flex-start   md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px]"
                >
                  0000000
                </p>
              </td>
       <td
                className="w-1/5 flex-start   md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px]"
                >
                   ₦50,000.00  
                </p>
              </td>
    
    
              <td
                className="w-1/5 lg:pt-[30.5px] lg:pb-[28.5px]    
    md:pt-[17.51px] md:pb-[16.36px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className=" text-left font-[600] leading-[20.8px] border-none
      md:text-[9.167px] md:leading-[11.917px] lg:text-[16px] lg:leading-[20.8px]"
                >
                  <span className="md:block">May 21, 2023,</span>
                  <span className="md:block">07:21:00pm</span>
                </p>
              </td>
              
              <td
                className="w-1/5 flex justify-start items-center
        md:pt-[17.51px] md:pb-[16.36px] lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] text-[#7C7C7C] gap-2 border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] md:w-[65.729px] md:h-[17.76px]
        py-[4px] px-[12px] text-white bg-amber-200 md:text-[9.167px] lg:w-[104px] lg:h-[31px] md:leading-[11.917px] md:rounded-[3.438px]"
                >
                  Pending
                </p>
           <img
  className="w-[10px] h-[10px] md:w-[10px] md:h-[10px] lg:w-[15px] lg:h-[15px] "
  src={arrows5}
  alt="/"
/>
              </td>
            </tr>



<tr className="flex w-[100%] md:pl-[16.038px] md:pr-[15.473px] md:gap-[36.67px]
            lg:pl-[28px] lg:pr-[27px] lg:gap-[64px] border-b-2">


              <td
                className="w-1/5 flex-start border-none  md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px]"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px] "
                >
                  Money Transfer
                </p>
              </td>
            <td
                className="w-1/5 flex-start   md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px]"
                >
                  From NGN Wallet to <br /> AremxyPlug 
                </p>
              </td>
          <td
                className="w-1/5 flex-start   md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px]"
                >
                  0000000
                </p>
              </td>
       <td
                className="w-1/5 flex-start   md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px]"
                >
                   $60,000.00  
                </p>
              </td>
    
    
              <td
                className="w-1/5 lg:pt-[30.5px] lg:pb-[28.5px]    
    md:pt-[17.51px] md:pb-[16.36px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className=" text-left font-[600] leading-[20.8px] border-none
      md:text-[9.167px] md:leading-[11.917px] lg:text-[16px] lg:leading-[20.8px]"
                >
                  <span className="md:block">May 21, 2023,</span>
                  <span className="md:block">07:21:00pm</span>
                </p>
              </td>
              
              <td
                className="w-1/5 flex justify-start items-center
        md:pt-[17.51px] md:pb-[16.36px] lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] text-[#7C7C7C] gap-2 border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] md:w-[65.729px] md:h-[17.76px]
        py-[4px] px-[12px] text-white bg-red-300 md:text-[9.167px] lg:w-[104px] lg:h-[31px] md:leading-[11.917px] md:rounded-[3.438px]"
                >
                  Failed
                </p>
           <img
  className="w-[10px] h-[10px] md:w-[10px] md:h-[10px] lg:w-[15px] lg:h-[15px] "
  src={arrows6}
  alt="/"
/>
              </td>
            </tr>


<tr className="flex w-[100%] md:pl-[16.038px] md:pr-[15.473px] md:gap-[36.67px]
            lg:pl-[28px] lg:pr-[27px] lg:gap-[64px] border-b-2">


              <td
                className="w-1/5 flex-start border-none  md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px]"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px] "
                >
                  International Transfer
                </p>
              </td>
            <td
                className="w-1/5 flex-start   md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px]"
                >
                  From USD Wallet to <br /> Bank 
                </p>
              </td>
          <td
                className="w-1/5 flex-start   md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px]"
                >
                  0000000
                </p>
              </td>
       <td
                className="w-1/5 flex-start   md:pt-[17.51px] md:pb-[16.36px]
    lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px] 
    md:text-[9.167px] md:leading-[11.917px]"
                >
                    ₦10,000.00  
                </p>
              </td>
    
    
              <td
                className="w-1/5 lg:pt-[30.5px] lg:pb-[28.5px]    
    md:pt-[17.51px] md:pb-[16.36px] p-[0px] text-[#7C7C7C]  border-none"
              >
                <p
                  className=" text-left font-[600] leading-[20.8px] border-none
      md:text-[9.167px] md:leading-[11.917px] lg:text-[16px] lg:leading-[20.8px]"
                >
                  <span className="md:block">May 21, 2023,</span>
                  <span className="md:block">07:21:00pm</span>
                </p>
              </td>
              
              <td
                className="w-1/5 flex justify-start items-center
        md:pt-[17.51px] md:pb-[16.36px] lg:pt-[30.5px] lg:pb-[28.5px] p-[0px] text-[#7C7C7C] gap-2 border-none"
              >
                <p
                  className="lg:text-[16px] text-left font-[600] lg:leading-[20.8px]
                   md:w-[65.729px] md:h-[17.76px] lg:w-[104px] lg:h-[31px]
        py-[4px] px-[12px] bg-amber-200 text-white md:text-[9.167px] md:leading-[11.917px] md:rounded-[3.438px]"
                >
                  Pending
                </p>
           <img
  className="w-[10px] h-[10px] md:w-[10px] md:h-[10px] lg:w-[15px] lg:h-[15px] "
  src={arrows7}
  alt="/"
/>
              </td>
            </tr>

    
            {/* CONTACT US */}
            <div className="flex md:gap-[14.896px] py-[10.865px] items-center mt-10 justify-center px-[8.594px]">
              <p
                className="font-[500]  lg:text-[12px] lg:leading-[15.6px]  md:text-[6.875px]
  text-[#707070] md:leading-[8.938px]"
              >
                You need help?
              </p>
              <Link to = "/contactUs"
               className="font-[500] text-white lg:text-[8px] lg:leading-[10.4px] 
  md:text-[4.583px]  py-[2.865px] 
 px-[8.594px] md:leading-[5.985px] rounded-[5.156px] lg:py-[5px]
 lg:px-[15px] lg:rounded-  bg-[#04177F]"
              >
                Contact Us
              </Link>
            </div>         
</table>


</div>
















        {/* <div className="flex lg:h-7 lg:w-[100%] flex-col lg:gap-5 md:gap-3 md:mt-[10px]  items-center justify-center lg:mt-[30px]"> */}
              {/* <div className="md:w-[52.88px] hidden lg:h-10 md:h-[15.44px] md:px-[3.44px] md:py-[1.72px] lg:ml-[-70px] lg:w-[100px] md:gap-[2.86px] lg:px-1.5 lg:py-[3px] bg-white shadow border border-black border-opacity-30 justify-start items-center lg:gap-[5px]  md:flex lg:flex"> */}
                {/* <div className="text-neutral-500 lg:text-xs md:text-[6.88px] md:leading-[8.94px] md:mt-[10px] font-medium lg:leading-none"> */}
                  {/* ---The End--- */}
                {/* </div> */}
              {/* </div> */}
              {/* <div className="justify-start items-center hidden md:block lg:w-[100%] lg:ml-[950px]  lg:gap-[26px] md:w-[108.08px] md:h-[11.73px] md:gap-[14.90px] lg:flex"> */}
                {/* <div className="text-black lg:text-xs md:text-[6.88px] md:leading-[8.94px]  font-medium lg:leading-none"> */}
                  {/* You need help? */}
                {/* </div> */}
                {/* <div className="lg:px-[15px] hidden  lg:py-[5px] bg-blue-900 lg:rounded-[9px] justify-center items-center lg:gap-2.5 md:px-[8.59px] md:py-[2.86px] md:rounded-[5.16px] md:gap-[5.73px] md:flex"> */}
                  {/* <div className="text-white lg:text-[8px] font-medium lg:leading-[10.40px] md:text-[4.58px] md:leading-[5.96px]"> */}
                    {/* Contact Us */}
{/* </div> */}
{/* </div> */}
{/* </div> */}
{/* </div> */}




        {/* table for mobile view */}

        {/* <div */}
        {/* // className={`${styles.viewTransact} ${ */}
          {/* // isDarkMode ? "bg-black border" : "bg-white" */}
        {/* // }`} */}
      {/* // > */}
<div className=" h-[1110px]">
        <div
            className="md:hidden flex flex-col h-[1030px] mt-9  w-full p-[20px] border-x-[1.2px] border-b-[1.2px]
 border-gray-500 border-opacity-[25%] my-[50px] shadow-md"
          >
            
            <div
              className="flex justify-between pb-[31.5px] border-b-[1px] border-b-[black]
   border-opacity-[20%]"
            >
              
              <div className="flex flex-col gap-[7.648px]">
                <h2 className="font-medium text-neutral-500 text-[9.167px] leading-[11.167px]">
                  Order No : 0000000
                </h2>
                <h2 className="font-medium text-black text-[9.167px] leading-[11.167px]">
                  Product : Virtual Account
                </h2>
                <p className="font-medium text-neutral-500 text-[9.167px] leading-[11.167px]">
                  Description : NGN Wallet Top-up
                </p>
                <p className="font-medium text-neutral-500  text-[9.167px] leading-[11.167px]">
                  Amount : ₦1,000.00
                </p>

              </div>
              {/* rightSide */}
              <div className="flex flex-col gap-[13.473px]">
                <div className="flex flex-row justify-end gap-[5px] items-center">
                <p
                  className="font-medium text-neutral-500 self-start text-[9.167px] leading-[11.167px] cursor-pointer"
                >
                  Status: </p>
                  <div className="mt-[-8px]">
                  <span className="font-medium text-white self-end text-[9.167px] leading-[11.167px] cursor-pointer
                  py-[2.122px] px-[4.245px]  rounded-sm bg-green-300">Successful</span> 
                </div>
                </div>

                <div className="flex flex-row">
                <div><p className="font-medium text-[10px] text-neutral-500 leading-[13px]">
                  <span className="block">Date & Time:</span>
                  <span className="block">May 21st, 2023,</span>
                  <span className="block">07:21:00pm</span>
                </p>
                </div>
              <div className="w-[13.41px] mt-7 h-[12.06px]">
              <img className="w-[13.41px] h-[12.06px]" src={arrowA} alt="" /> 
              </div>
              </div>
              </div>
            </div>

            
            <div
              className="flex justify-between py-[31.5px] border-b-[1px] border-b-[black]
   border-opacity-[20%]"
            >
              {/* left */}
              <div className="flex flex-col gap-[7.648px]">
                <h2 className="font-medium text-neutral-500 text-[9.167px] leading-[11.167px]">
                   Order No : 0000000
                </h2>
                <h2 className="font-medium text-black text-[9.167px] leading-[11.167px]">
                  Product : Withdrawal
                </h2>
                <p className="font-medium text-neutral-500 text-[9.167px] leading-[11.167px]">
                  Description : From USD Wallet <br />
                  to Bank
                </p>
                <h2 className="font-medium text-neutral-500 text-[9.167px] leading-[11.167px]">
                  Amount : ₦25,000.00
                </h2>
              </div>
              {/* rightSide */}
              <div className="flex flex-col gap-[15.473px]">
                <div className="flex flex-row gap-[5px]">
                  <div>
                <p
                  className="font-medium text-neutral-500 mt-0 self-end text-[9.167px] leading-[11.167px] cursor-pointer"
                >
                   Status: </p></div>
                   <div className="mt-0 font-medium text-white self-end  text-[9.167px] leading-[11.167px] cursor-pointer
                   py-[2.122px] px-[4.245px] rounded-sm bg-green-300">Successful</div>
                   </div>
                
                <div className="flex flex-row">
                <p className="font-medium text-neutral-500 text-[10px] leading-[13px]">
                <span className="block">Date & Time:</span>
                  <span className="block">May 21st, 2023,</span>
                  <span className="block">07:21:00pm</span>
                </p>

                <img className="w-3 mt-7 h-3" src={arrowB} alt="" />
              </div>
            </div>
            </div>

            
            <div
              className=" flex justify-between py-[31.5px] border-b-[1px]
               border-b-[black]   border-opacity-[20%]"
            >
              {/* left */}
              <div className="flex flex-col gap-[7.648px]">
                <h2 className="font-medium text-neutral-500 text-[9.167px] leading-[11.167px]">
                 Order No : 0000000
                </h2>
                <h2 className="font-medium text-black text-[9.167px] leading-[11.167px]">
                  Product : Card Payment
                </h2>
                <p className="font-medium text-neutral-500 text-[9.167px] leading-[11.167px]">
                   Description : NGN Wallet Top-up
                </p>
                <h2 className="font-medium text-neutral-500 text-[9.167px] leading-[11.167px]">
                  Amount : ₦25,000.00
                </h2>
              </div>
              {/* rightSide */}
              <div className="flex flex-col gap-[13.473px]">
                <div className="flex flex-row justify-end items-center gap-[5px]">
                  <div>
                <p
                  className="font-medium  self-end text-[9.167px] text-neutral-500 leading-[11.167px] cursor-pointer"
                >
                  Status:
                  </p>
                  </div>

                  <div className="font-medium text-white self-end text-[9.167px] leading-[11.167px] cursor-pointer
                  py-[2.122px] px-[4.245px] rounded-sm bg-green-300">Successful</div>
                
                </div>
                <div className="flex flex-row">
                <p className="font-medium text-[10px] text-neutral-500 leading-[13px]">
                <span className="block">Date & Time:</span>
                  <span className="block">May 21st, 2023,</span>
                  <span className="block">07:21:00pm</span>
                  </p>
                  <img className="w-3 mt-7 h-3" src={arrowC} alt="" />
              </div>
            </div>
            </div>
            
            <div
              className="flex justify-between py-[31.5px] border-b-[1px] border-b-[black]
   border-opacity-[20%]"
            >
              {/* left */}
              <div className="flex flex-col gap-[7.648px]">
                <h2 className="font-medium text-neutral-500 text-[9.167px] leading-[11.167px]">
                  Order No : 0000000
                </h2>
                <h2 className="font-medium text-black text-[9.167px] leading-[11.167px]">
                Product : Money Transfer
                </h2>
                <p className="font-medium text-neutral-500 text-[9.167px] leading-[11.167px]">
                  Description : From NGN Wallet <br />
                     to AremxyPlug
                </p>
                  <h2 className="font-medium text-neutral-500 text-[9.167px] leading-[11.167px]">
                Amount : ₦25,000.00
                </h2>
              </div>
              {/* rightSide */}
              <div className="flex flex-col gap-[13.473px]">
                <div className="flex flex-row justify-end items-center gap-[5px]">
                  <div>
                <p
                  className="font-medium text-neutral-500 self-end text-[9.167px] leading-[11.167px] cursor-pointer">
                   Status:</p></div>
                   
                   <div className="font-medium text-white self-end text-[9.167px] leading-[11.167px] cursor-pointer
                   py-[2.122px] px-[4.245px] rounded-sm bg-green-300">Successful</div>
                
                </div>
                <div className="flex flex-row">
                <p className="font-[500] text-[10px] text-neutral-500 leading-[13px]">
                <span className="block">Date & Time:</span>
                  <span className="block">May 21st, 2023,</span>
                  <span className="block">07:21:00pm</span>
                </p>
                <img className="w-3 mt-7 h-3" src={arrowD} alt="" />
              </div>
            </div>
            </div>
            
            <div
              className="flex justify-between py-[31.5px] border-b-[1px] border-b-[black]
   border-opacity-[20%]"
            >
              {/* left */}
              <div className="flex flex-col gap-[7.648px]">
                <h2 className="font-medium text-neutral-500 text-[9.167px] leading-[11.167px]">
                  Order No : 0000000
                </h2>
                <h2 className="font-medium text-black text-[9.167px] leading-[11.167px]">
                  Product : Money Transfer
                </h2>
                <p className="font-medium text-neutral-500 text-[9.167px] leading-[11.167px]">
                   Description : From NGN Wallet
                   <br />
                   to Bank
                </p>
                 <h2 className="font-medium text-neutral-500 text-[9.167px] leading-[11.167px]">
                   Amount : ₦50,000.00
                </h2>
              </div>
              {/* rightSide */}
              <div className="flex flex-col gap-[13.473px]">

                <div className="flex flex-row justify-end items-center gap-[12px]">
                  <div className="mt-[5px">
                <p
                  className="font-medium text-neutral-500 justify-start  flex  text-[9.167px] leading-[11.167px] cursor-pointer"
                >
                   Status:</p> </div>
                   <div className="font-medium text-white self-end text-[9.167px] leading-[11.167px] cursor-pointer
                  py-[2.122px] px-[4.245px] bg-amber-200 rounded-sm  ">Pending</div>
                  </div>
                  
                
                <div className="flex flex-row">
                <p className="font-medium text-[10px] text-neutral-500 leading-[13px]">
                <span className="block">Date & Time:</span>
                  <span className="block">May 21st, 2023,</span>
                  <span className="block">07:21:00pm</span>
                </p>
                <div>
<img className="w-3 mt-7 h-3" src={arrowE} alt="" />
</div>
              </div>
              
              
              
            </div>
            </div>
            
            <div
              className="flex justify-between py-[31.5px] border-b-[1px] border-b-[black]
   border-opacity-[20%]"
            >
              {/* left */}
              <div className="flex flex-col gap-[7.648px]">
                <h2 className="font-medium text-neutral-500 text-[9.167px] leading-[11.167px]">
                   Order No : 0000000
                </h2>
                <h2 className="font-medium text-black text-[9.167px] leading-[11.167px]">
                  Product : Money Transfer
                </h2>
                <p className="font-medium text-neutral-500 text-[9.167px] leading-[11.167px]">
                  Description : From USD Wallet
                  <br />
                  to AremxyPlug
                </p>
                <h2 className="font-medium text-neutral-500 text-[9.167px] leading-[11.167px]">
                  Amount : $60,000.00
                </h2>
              </div>
              {/* rightSide */}
              <div className="flex flex-col gap-[13.473px]">
                <div className="flex flex-row justify-end items-center gap-[20px]">
                  <div>
                <p
                  className="font-medium text-neutral-500 text-[9.167px] leading-[11.167px] cursor-pointer"
                >
                   Status:</p> </div>
                   <div className="font-medium text-white self-end text-[9.167px]
                    leading-[11.167px] cursor-pointer
                  py-[2.122px] px-[4.245px] bg-red-300 rounded-sm ">Failed</div>
                
                </div>
                <div className="flex flex-row">
                <p className="font-medium text-[10px] text-neutral-500 leading-[13px]">
                <span className="block">Date & Time:</span> 
                  <span className="block">May 21st, 2023,</span>
                  <span className="block">07:21:00pm</span>
                </p>
                <img className="w-3 mt-7 h-3" src={arrowF} alt="" />
              </div>
            </div>
            </div>
            
            <div
              className="flex justify-between py-[31.5px] border-b-[black]
   border-opacity-[20%]"
            >
              {/* left */}
              <div className="flex flex-col gap-[7.648px]">
                <h2 className="font-medium text-neutral-500 text-[9.167px] leading-[11.167px]">
                  Order No : 0000000
                </h2>
                <h2 className="font-medium text-black text-[9.167px] leading-[11.167px]">
                  Product : International Transfer
                </h2>
                <p className="font-medium text-neutral-500 text-[9.167px] leading-[11.167px]">
                   Description : From USD Wallet <br />
                   to Bank
                </p>
                <h2 className="font-medium text-neutral-500 text-[9.167px] leading-[11.167px]">
                  Amount : $60,000.00
                </h2>
              </div>
              {/* rightSide */}
              <div className="flex flex-col gap-[13.473px]">
                <div className="flex flex-row justify-end items-center gap-[11px]">
                  <div>
                <p
                  className="font-medium text-neutral-500 self-end text-[9.167px] leading-[11.167px] cursor-pointer" >
                  Status: </p> </div>
                  <div className="font-medium text-white self-end items-center text-[9.167px] 
                  leading-[11.167px] cursor-pointer
                  py-[2.122px] px-[4.245px] bg-amber-200 rounded-sm ">Pending</div> 
               
                </div>
                <div className="flex flex-row">
                <p className="font-medium text-[10px] text-neutral-500 leading-[13px]">
                <span className="block">Date & Time:</span>
                  <span className="block">May 21st, 2023,</span>
                  <span className="block">07:21:00pm</span>
                </p>
                <img className="w-3 mt-7 h-3" src={arrowG} alt="" />
              </div>
            </div>
            </div>

            <div className="flex justify-center text-center gap-[20px] mt-[15px] mb-[30px]">
            <p className="text-[8px]  font-[500] leading-[9.1px] mt-[5px]">
              You need help?
            </p>

            <Link to="/ContactUs">
              <div
                className={`${
                  isDarkMode ? "border " : "bg-[#04177f]"
                } text-[8px] p-1 text-white rounded-[8px]`}
              >
                Contact Us
              </div>
            </Link>
          </div>
          </div>
</div>

            
           
        {/* filter by status dropdown */}
        {isOpen2 && (
          <div className="flex absolute lg:top-[705px] top-[310px] md:top-[470px] 
           ml-[50px] md:ml-[40px]  lg:ml-[60px] flex-col">
            
            <div  
          
          className="border border-b bg-white lg:w-[375px] lg:h-[53px] md:w-[250.84px] md:h-[39.22px]
           w-[189px] h-[25.70px] justify-around items-center flex relative shadow">
              <div onClick={() => { handleClick('All Transactions'); }} className="lg:w-[325px] text-neutral-500 lg:text-xl font-medium 
              lg:leading-tight md:w-[186.20px] md:text-[16px] md:leading-3 w-[163.80px]
               text-[10px] leading-[10.48px] ">
                All Transactions
              </div>
              
            </div>
            <div onClick={() => { handleClick('Successful'); }} className="lg:w-[375px] lg:h-[53px] border border-b  md:w-[250.84px] md:h-[39.22px] w-[189px] h-[25.70px] justify-around items-center flex relative bg-white shadow">
              <div class="lg:w-[325px] text-neutral-500 lg:text-xl 
              font-medium lg:leading-tight md:w-[186.20px]  md:text-[16px]
               md:leading-3 w-[163.80px] text-[10px] leading-[10.48px]">
                Successful
              </div>
            </div>

            <div onClick={() => { handleClick('Failed'); }} className="lg:w-[375px] lg:h-[53px] border border-b md:w-[250.84px] md:h-[39.22px] w-[189px] h-[25.70px] justify-around items-center flex relative bg-white shadow">
              <div class="lg:w-[325px] text-neutral-500 lg:text-xl font-medium 
              lg:leading-tight md:w-[186.20px]  md:text-[16px] md:leading-3 w-[163.80px]
               text-[10px] leading-[10.48px]">
                Failed
              </div>
            </div>
            <div onClick={() => { handleClick('Pending'); }} className="lg:w-[375px] lg:h-[53px] border border-b md:w-[250.84px] md:h-[39.22px] w-[189px] h-[25.70px]  justify-around items-center flex relative bg-white shadow">
              <div class="lg:w-[325px] text-neutral-500 lg:text-xl
               font-medium lg:leading-tight md:w-[186.20px]  md:text-[16px]
                md:leading-3 w-[163.80px] text-[10px] leading-[10.48px]">
                Pending
              </div>
            </div>
            <div onClick={() => { handleClick('Refunded'); }} className="lg:w-[375px] lg:h-[53px] border border-b md:w-[250.84px] md:h-[39.22px] w-[189px] h-[25.70px] justify-around items-center flex relative bg-white shadow">
              <div class="lg:w-[325px] text-neutral-500 lg:text-xl
               font-medium lg:leading-tight md:w-[186.20px]  md:text-[16px] 
               md:leading-3 w-[163.80px] text-[10px] leading-[10.48px]">
                Refunded
              </div>
            </div>
            <div onClick={() => { handleClick('Canceled'); }} className="lg:w-[375px] lg:h-[53px] border border-b md:w-[250.84px] md:h-[39.22px] w-[189px] h-[25.70px] justify-around items-center flex relative bg-white shadow">
              <div class="lg:w-[325px] text-neutral-500 lg:text-xl
               font-medium lg:leading-tight md:w-[186.20px]  md:text-[16px] md:leading-3 w-[163.80px] text-[10px] 
               leading-[10.48px]">
                Canceled
              </div>
            </div>
          </div>
          
        )}
      </div>
    </DashBoardLayout>
  );
}
