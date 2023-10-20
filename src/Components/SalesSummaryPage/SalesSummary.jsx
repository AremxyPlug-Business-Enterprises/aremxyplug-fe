import React, {useState} from 'react';
import { DashBoardLayout } from '../Dashboard/Layout/DashBoardLayout';
import receiptA from "./assets/cash receipt from online shopping on mobile phone (3)A.png";
import arrowsales from "./assets/arrow-square-rightsales.png";
import flagsales from "./assets/Country Flags (5)sales.png";
import filtersales from "./assets/document-filtersales.png";
// import downsales from "./assets/arrow-downsales.png";
import menusales from "./assets/menusales.png";
// import squaresales from "./assets/arrow-square-rightsalesA.png";
// import salesA from "./assets/arrow-downsalesA.png";
// import salesB from "./assets/arrow-downsalesB.png";
// import salesC from "./assets/arrow-downsalesC.png";
// import salesD from "./assets/arrow-downsalesD.svg";
import arrow44 from "./assets/arrow-down@4x.png";
import arrow11 from "./assets/arrow-down@1x.png";
import arrow00 from "./assets/arrow-down@0x.png";
// import flagpage from "./assets/Country Flagspage.png";
// import flagpage1 from "./assets/Country Flagspage1.png";
// import flagpage2 from "./assets/Countryflag2.svg";
// import flagpage3 from "./assets/Countryflag3.svg";
// import flagpage4 from "./assets/Countryflag4.svg";
// import flagpage5 from "./assets/Countryflag5.svg";
import { useContext } from "react";
import { ContextProvider } from  "../Context";
import styles from "../Dashboard/DashboardComponents/./component.module.css";



export default function SalesSummaryPage ()  {

    const [isOpen1, setIsOpen1] = useState(false); 
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false); 
    const [isOpen4, setIsOpen4] = useState(false);
    // const [isOpen5, setIsOpen5] = useState(false);


    // const toggleDropdown1 = () => { setIsOpen1(true); };
// 
    // const toggleDropdown2 = () => { setIsOpen2(true); setIsOpen3(false); setIsOpen4(false);setIsOpen1(false); }; 
// 
    //  const toggleDropdown3 = () => { setIsOpen3(true); setIsOpen2(false); setIsOpen4(false); setIsOpen1(false); };
// 
    //   const toggleDropdown4 = () => { setIsOpen4(true); setIsOpen3(false); setIsOpen2(false);setIsOpen1(false); };




      const [selectedProduct, setSelectedProduct] = useState('Filter by product');
      const handleClick = (product) => {
        setSelectedProduct(product); };



        const [ setBlur] = useState(false);
        const [selected, setSelected] = useState("");
        const { isDarkMode, toggleSideBar } =
  useContext(ContextProvider);
// 
// 
        // 
        // 
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
      //  
        





    return (

        <DashBoardLayout>
        <>
        <div class="flex gap-[25px] md:w-full w-full flex-col">
    <div class="w-full h-[88.53px] pl-[16.72px] pr-[19.33px] py-[7.36px] md:w-full md:h-[112.29px] 
    md:pl-[28.65px] md:pr-[34.82px] md:py-[12.60px] lg:w-full lg:h-[196px] 
    lg:pl-[50px] lg:pr-[60.79px] lg:rounded-[20px] lg:gap-[75px] lg:py-[22px]
     bg-gradient-to-r from-yellow-300 to-rose-400 rounded-md justify-center 
     items-center gap-[20.08px] md:gap-[42.97px] flex-row flex">
        <div class="w-full lg:w-full md:w-full lg:gap-[15px] self-stretch justify-center items-start
         flex-col md:gap-[8.59px] gap-[5.02px] flex">
            <div class="w-[160.85px] md:w-[275.57px] lg:w-[481px]
             text-black text-[8.08px] md:text-sm lg:text-2xl font-bold  
              uppercase"><span className='whitespace-nowrap'>MANAGE ALL YOUR TRANSACTIONS AT A</span>
             <br /> TIME WITHOUT ANY HASSLE.</div>
            <div class="w-[209px] h-[21px] md:w-full md:h-[37.24px] lg:w-[588px]
             lg:h-[65px] text-black text-[7px] lg:text-lg md:text-[9.17px]
              font-normal whitespace-nowrap  lg:leading-tight
               md:leading-3
                leading-[9.10px]"><span className='lg:whitespace-nowrap'>Select, filter, and manage all your transactions at a time,
                <br/> download all</span>  transactions stats and keep a record track.</div>
        </div>
        <img className="w-[55.24px] h-[53.16px] md:w-[91.21px] md:h-[85.94px] lg:w-[159.21px] lg:h-[150px]  " src={receiptA}  alt="" />
    </div>



{/* Sales summary */}
    <div class="flex gap-[8px] md:gap-[10px] lg:mt-[30px] mt-[8px] flex-row">
        <div class="text-neutral-500 text-[11px] lg:text-[20px] md:text-[14px] font-semibold ">Sales Summary</div>
        <div class="w-4 h-4 lg:h-6 lg:mt-1 lg:w-6 md:w-[15.75px] md:h-[15.75px] justify-center items-center inline-flex">
            <img src={arrowsales} class="w-4 h-4 lg:h-6 lg:w-6 md:mt-[8px] mt-1  md:w-[15.75px] md:h-[15.75px] relative" alt="" />

        
        </div>

        </div>
        {/* available balance */}
    <div class="w-full h-10 pl-[63.15px] pr-[62.90px] mt-[8px] lg:mt-[20px] pt-[8.38px] pb-[7.62px] lg:w-full 
    lg:h-[120px] lg:px-[245px] lg:py-[25px] md:w-full md:h-[68.75px] md:px-[140.10px] 
    md:py-[14.32px] bg-indigo-300 bg-opacity-20 rounded-[6.88px] md:rounded-[6.88px] 
    justify-center items-center inline-flex">
        <div class="self-stretch justify-start items-center gap-[9.17px] md:gap-[9.17px] lg:gap-4 inline-flex">
            <div class="justify-start items-center md:gap-[5.73px] lg:gap-2.5 gap-[5.73px] flex">
                <div class="w-2.5 h-[9.41px]  md:w-[40.10px] md:mt-[30px] md:h-[40.10px]   ">
                <img className='lg:h-[29.27px] ml-[-7px] lg:w-[29.27px] md:w-[16.77px] md:h-[16.77px] md:ml-[-4px] w-2.5 h-2.5 lg:ml-[-20px]' src={flagsales} alt="" />
                   
                    <div class="w-6 h-6 left-0 ml-[-13px] top-0 md:mt-[-30px] md:ml-[-12px] mt-[-15px] lg:ml-[-40px] lg:w-[70px] lg:h-[70px] lg:mt-[-50px] md:w-[40.10px] md:h-[40.10px]  bg-white rounded-full">
                    
                    </div>
                    <div class="w-2.5 h-2.5 left-[6.86px] top-[6.86px] md:w-[16.77px] md:h-[16.77px] md:left-[11.46px] md:top-[11.46px] lg:w-[29.27px] lg:h-[29.27px] lg:left-[20px] lg:top-[20px] absolute">
                        <div class="w-2.5 h-[9.41px] left-0 top-[0.31px] md:w-[16.77px] md:h-[15.73px] md:left-0 md:top-[0.52px] lg:w-[29.27px] lg:h-[27.45px] lg:left-0 lg:top-[0.91px] absolute">
                        </div>
                    </div>
                </div>


                
                <div class="justify-start items-start gap-[6.30px] lg:gap-[11px]  flex">
                    <div class="text-black text-[8px] md:text-xs lg:text-xl font-semibold  md:leading-[14.90px] lg:leading-relaxed leading-[10.40px]">Available Balance</div>
                    <div class="text-neutral-500 text-[8px] lg:text-xl md:text-xs font-medium  lg:leading-relaxed md:leading-[14.90px] leading-[10.40px]">(₦50,000.00)</div>
                </div>
            </div>
            <div class="w-[13.75px] h-[13.75px] lg:w-6 lg:h-6 justify-center items-center flex">
                <div onClick={() => {
  // setIsOpen5((prev) => !prev);
}} 

                  class=" ">
                    <img className='w-3 h-3 md:w-[11.37px] md:h-[11.37px] lg:w-[19.85px] lg:h-[19.85px]' src={arrow00} alt="" />
                </div>
            </div>
        </div>
    </div>


    {/* filter by date */}
    <div class="w-full h-6 pl-[0.33px] mt-[2px] lg:mt-[30px] md:mt-[10px] pr-[86.66px] py-[2.67px] lg:w-full
     lg:h-[72px] lg:pl-4 lg:pr-[459.30px] lg:gap-[50.53px] lg:py-[11px]
      md:w-full md:h-[41.25px] md:pl-[9.17px] md:pr-[262.40px] md:pt-[6.39px]
       md:pb-[6.40px] bg-white shadow border-t border-b border-black
        border-opacity-30 justify-start items-center gap-[52.80px] inline-flex">
        <div class="self-stretch p-[3.33px] lg:p-2.5 md:p-[5.73px] bg-white rounded-sm lg:rounded-[5px] lg:gap-[6.62px]  shadow justify-start items-center md:rounded-[2.86px] md:gap-[3.79px] gap-[2.21px] inline-flex">
            <div class="text-blue-900 text-[9px] md:text-[13px] lg:text-[20px] whitespace-nowrap font-semibold ">Filter by Date</div>
            <div class="w-3 h-3 md:w-[11.37px] md:h-[11.37px] lg:w-[19.85px] lg:h-[19.85px] justify-center items-center flex">
                <div class="w-3 h-3 md:w-[11.37px] md:h-[11.37px] lg:w-[19.85px] lg:h-[19.85px] relative">
                    <img className='w-3 h-3 md:w-[11.37px] md:h-[11.37px] lg:w-[19.85px] lg:h-[20px]' src={filtersales} alt="" />
                </div>
            </div>
        </div>

        {/* filter by status */}
        <div class="self-stretch relative justify-start items-center gap-[5.73px] lg:gap-2.5 inline-flex">
            <div class="justify-start items-center lg:gap-[5px] gap-[2.86px] flex">
                <div class="w-[11.37px] h-[11.37px] lg:w-[19.85px] lg:h-[19.85px] justify-center items-center flex">
                    <div class="w-[11.37px] h-[11.37px] lg:w-[19.85px] lg:h-[19.85px] relative">
                        <img className='w-[11.37px] h-[11.37px] lg:w-[19.85px] lg:h-[19.85px]' src={menusales} alt="" />
                    </div>
                </div>
                <div   className="text-neutral-500 md:text-[13px] text-[9px] lg:text-[20px] md:whitespace-nowrap font-semibold ">{selectedProduct}</div>
            </div>
            <div class="w-[11.37px] h-[11.37px] lg:w-[19.85px] lg:h-[19.85px] justify-center items-center flex">
                <div onClick={() => {
  setIsOpen1((prev) => !prev);
}} class="w-[11.37px] h-[11.37px] lg:w-[19.85px] lg:h-[19.85px] relative">
                                    {isOpen1 ? (
   <img src={arrow44} alt="Arrow44" />
 ) : (
   <img src={arrow11} alt="arrow11" />
 )}

                    
                </div>
            </div>
        </div>
    </div>




    <div className="mt-[-13%] lg:mt-[-3%] md:mt-[-10%]  mb-[10%]">

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

      <div className="flex lg:mt-[-48px] mt-[-10px] md:mt-[-50px] items-center text-neutral-500 gap-[10px]">
        <p className={styles.InOutText}>Sales Analysis</p>
        <img
          className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
          src="./Images/Dashboardimages/arrowright.png"
          alt="/"
        />
      </div>

      </div>


 {/* product, quality and total amount */}
    <div class="flex md:w-full w-full border-opacity-100 lg:mt-[-80px] mt-[-30px] md:mt-[-60px] lg:w-full shadow border-black flex-col">
    <div class="w-full h-[25px] lg:pr-0 pl-[8.67px] pr-[1.33px] pt-[8.17px] pb-[6.83px] md:w-full lg:w-full lg:pl-[23px] lg:h-[42px] md:h-[24.06px]  md:pl-[14.90px] md:pr-[2.29px] md:pt-[6.32px] md:pb-[5.74px] bg-indigo-200 justify-end lg:justify-between md:justify-evenly items-center inline-flex">
        <div class="self-stretch md:justify-between md:w-full lg:justify-between lg:gap-[300px]  lg:w-full justify-start items-start gap-[66px] md:gap-[113.44px] inline-flex">
            <div class="w-[56.33px] md:w-[96.82px] lg:w-full text-black text-[8px] md:text-[9.17px] lg:text-[16px] font-semibold  md:leading-3 lg:leading-tight  leading-[10.40px]">Products</div>
            <div class="w-[53.33px] md:w-[91.67px] lg:w-full text-black text-[8px] md:text-[9.17px] lg:text-[16px] font-semibold  md:leading-3 lg:leading-tight  leading-[10.40px]">Quality</div>
            <div class="w-[60.33px] md:w-[103.70px] lg:w-full text-black text-[8px] md:text-[9.17px] lg:text-[16px] font-semibold md:leading-3 lg:leading-tight leading-[10.40px]">Total Amount</div>
        </div>
    </div>
    <div class="w-[312px] lg:h-[101px]  h-[33.67px] md:w-full md:h-[57.86px] "></div>
  </div>





{/* main dropdown */}

{isOpen1 && (
  <div className="flex absolute lg:h-[300px] md:ml-[100px] left-[80px] md:left-[225px]
   lg:w-full md:h-[150px] h-[200px] md:top-[480px] lg:ml-[550px] lg:left-[10px] lg:top-[710px]  top-[332px] flex-col">
    <div class="w-44 h-[29px] md:w-[200px] md:h-[35px] lg:h-[40px]  bg-white shadow">
        
        <div class="w-[199.37px] ml-[5px] md:w-[199.37px] justify-start items-center inline-flex">
            <div onClick={() => {
    setIsOpen2((prev) => !prev);
  handleClick('Airtime Top-up'); }}class="w-[186.20px] text-neutral-500 md:w-[131px] items-center text-[8.06px] md:text-[9.17px] lg:text-[15px] font-medium  md:leading-3 leading-[10.48px]">Airtime Top-up</div>
        </div>
    </div>
    <hr class="bg-slate-500 h-[1px] w-[175px]"></hr>
    <div class="w-44 h-[29px] md:w-[200px] md:h-[35pxpx] lg:h-[40px] bg-white shadow">
        
        <div class="w-[199.37px] ml-[5px] md:w-[199.37px]  justify-start items-center inline-flex">
            <div onClick={() => {
    setIsOpen3((prev) => !prev);
handleClick('Data Top-up'); }} class="w-[186.20px] text-neutral-500 text-[8.06px] md:text-[9.17px] md:w-[131px] items-center lg:text-[15px] font-medium  md:leading-3 leading-[10.48px]">Data Top-up</div>
        </div>
    </div>
    <hr class="bg-slate-500 h-[1px] w-[175px]"></hr>
    <div class="w-44 h-[29px] md:w-[200px] lg:h-[40px] md:h-[35px] bg-white shadow">
        
        <div class="w-[199.37px] ml-[5px] md:w-[199.37px]  justify-start items-center inline-flex">
            <div onClick={() => {
    setIsOpen4((prev) => !prev);
                handleClick('Bills Payment'); }}  class="w-[131.60px] text-neutral-500 text-[8.06px] md:text-[9.17px] md:w-[131px] items-center lg:text-[15px] font-medium  md:leading-3 leading-[10.48px]">Bills Payments</div>
        </div>
    </div>
    <hr class="bg-slate-500 h-[1px] w-[175px]"></hr>
  </div>
)}



{/* contact us */}
  <div className="lg:flex md:flex justify-center items-center gap-[20px] hidden md:mt-[200px] flex-row">
  <div class="text-black text-[8px] lg:text-[12px] font-medium md:leading-[8.94px]  leading-[10.40px]">You need help?</div>
  <div class="w-[60.19px] h-[15.73px] px-[8.59px] py-[2.86px] md:w-[42.19px] lg:w-[90px] md:h-[11.73px] md:px-[8.59px] md:py-[2.86px] md:rounded-[5.16px] bg-blue-900 rounded-[5.16px] justify-center items-center gap-[5.73px] inline-flex">
    <div class="text-white text-[8px] md:text-[4.58px] lg:text-[8px] md:leading-[5.96px] font-medium leading-[10.40px]">Contact Us</div>
</div>
  </div>

  {/* {isOpen5 && ( */}
  {/* // <div className="lg:ml-[510px]  lg:top-[360px] md:w-[300px] lg:pl-[-500px] left-[65px] w-[62%] lg:w-full  top-[265px] md:top-[175px] absolute flex-col md:mt-[260px] md:ml-[300px] lg:items-start inline-flex"> */}
            {/* <div className="lg:pl-2.5 lg:w-[370px] md:w-[214.84px] lg:pt-[7px] lg:h-[40px] h-[30px] justify-start items-center pt-[3px] pb-[px] bg-white shadow   md:pt-1 md:pb-[4.43px] inline-flex"> */}
              {/* <div className="lg:self-stretch lg:justify-start lg:items-center flex md:gap-[2.86px] md:h-[30px]  flex-row  "> */}
                {/* <div className="lg:w-[29.27px] lg:h-[29.27px] h-[16.77px] md:w-[16.77px] md:h-[16.77px] relative bg-white"> */}
                  {/* <div className="lg:w-[29.27px] w-[16.77px] lg:h-[27.45px] h-[16.77px] lg:left-0 lg:top-[0.91px] md:w-[16.77px] md:h-[16.77px] md:left-1 md:top-[0.52px] absolute"> */}
                    {/* <img src={flagpage} alt="" /> */}
                  {/* </div> */}
                {/* </div> */}
                {/* <div className="text-neutral-500 text-[8px] md:text-[9.17px] lg:text-base lg:font-medium md:ml-1 ml-5  md:leading-3 lg:leading-tight"> */}
                  {/* NGN Wallet (50,000.00) */}
                {/* </div> */}
              {/* </div> */}
            {/* </div> */}
            {/* <div className="lg:pl-2.5 md:w-[214.84px]  mt-[0.0px] justify-start items-center */}
            {/* //  h-[30px] lg:h-[45px] lg:w-[370px] lg:pb-[7.73px] bg-white shadow  */}
            {/* //  lg:justify-start lg:items-center md:h-[30px] lg:mt-[-3px] md:pl-[5.73px] */}
              {/* // md:mt-[-5px] md:pr-[84.48px] md:pt-1 md:pb-[4.43px]  inline-flex"> */}
              {/* <div className="lg:self-stretch lg:justify-start lg:items-center flex flex-row gap-[5px] md:gap-[2.86px] lg:gap-[5px] lg:flex"> */}
                {/* <div className="lg:w-[29.27px] lg:h-[29.27px] lg:relative md:w-[16.77px] md:h-[16.77px] bg-white"> */}
                  {/* <div className="lg:w-[28.77px] w-[16.77px] lg:h-[26.09px] h-[16.77px] lg:left-[0.50px] lg:top-[3.18px] md:w-[16.77px] md:h-[16.77px] md:left-0 md:top-[0.52px] lg:absolute"> */}
                    {/* <img src={flagpage1} alt="" /> */}
                  {/* </div> */}
                {/* </div> */}
                {/* <div className="text-neutral-500 lg:text-base md:text-[9.17px] text-[8px] font-medium  md:leading-3 leading-tight"> */}
                  {/* USD Wallet (0.00) */}
                {/* </div> */}
              {/* </div> */}
            {/* </div> */}
            {/* <div className="lg:pl-2.5 lg:h-[45px] md:w-[214.84px] h-[30px] justify-start items-center lg:pt-[7px] lg:w-[370px] lg:pb-[7.73px] bg-white shadow lg:justify-start lg:items-center md:h-[30px]  md:pl-[5.73px] md:pr-[84.48px] md:pt-1 md:pb-[4.43px] inline-flex"> */}
              {/* <div className="lg:self-stretch lg:justify-start lg:items-center flex flex-row gap-[5px] md:gap-[2.86px] lg:gap-[5px] lg:flex"> */}
                {/* <div className="lg:w-[29.27px] lg:h-[29.27px] md:w-[16.77px] md:h-[16.77px] relative bg-white"> */}
                  {/* <img */}
                    {/* // src={flagpage2} */}
                    {/* // className="lg:w-[29.27px] w-[16.77px] md:h-[16.77px] md:w-[16.77px] lg:mt-[-1px] lg:h-[29.27px] h-[16.77px] lg:left-0 lg:top-0 " */}
                    {/* // alt="" */}
                  {/* // /> */}
                  {/* <div className="lg:w-[28.26px] lg:h-[28.26px] lg:left-[0.50px] lg:top-[0.51px] md:w-[18px] md:h-[35px] md:left-0 md:top-[0.52px] absolute"></div> */}
                {/* </div> */}
                {/* <div className="text-neutral-500 lg:text-base text-[8px] md:text-[9.17px] font-medium  md:leading-3 leading-tight"> */}
                  {/* EUR Wallet (0.00) */}
                {/* </div> */}
              {/* </div> */}
            {/* </div> */}
            {/* <div className="lg:pl-2.5 lg:w-[370px] md:w-[214.84px] lg:h-[45px] h-[30px] justify-start items-center lg:pt-[7px] lg:pb-[7.73px] bg-white shadow lg:justify-start lg:items-center md:h-[30px]  md:pl-[5.73px] md:pr-[84.48px] md:pt-1 md:pb-[4.43px] inline-flex"> */}
              {/* <div className="lg:self-stretch lg:justify-start lg:items-center flex-row gap-[5px] lg:gap-[5px] md:gap-[2.86px] inline-flex"> */}
                {/* <div className="lg:w-[29.27px] w-[16.77px] lg:h-[29.27px] h-[16.77px] md:w-[16.77px] md:h-[16.77px] relative bg-white"> */}
                  {/* <img src={flagpage3} alt="" /> */}
                  {/* <div className="lg:w-[28.26px] lg:h-[28.26px] lg:left-[0.50px] lg:top-[0.51px] md:w-[18px] md:h-[35px] md:left-0 md:top-[0.52px] absolute"></div> */}
{/*  */}
                  {/* <div className="lg:w-[17.82px] lg:h-[17.82px] lg:left-[5.72px] lg:top-[5.73px] absolute"></div> */}
                {/* </div> */}
                {/* <div className="text-neutral-500 lg:text-base text-[8px] md:text-[9.17px] font-medium  md:leading-3 leading-tight"> */}
                  {/* GBP Wallet (0.00) */}
                {/* </div> */}
              {/* </div> */}
            {/* </div> */}
            {/* <div className="lg:pl-2.5 md:w-[214.84px] lg:pt-[7px] lg:pb-[7.73px] lg:h-[45px] h-[30px] justify-start items-center  lg:w-[370px] bg-white shadow lg:justify-start lg:items-center md:h-[30px]  md:pl-[5.73px] md:pr-[84.48px] md:pt-1 md:pb-[4.43px]  inline-flex"> */}
              {/* <div className="lg:self-stretch lg:justify-start lg:items-center lg:gap-[5px] flex-row gap-[5px] md:gap-[2.86px] inline-flex"> */}
                {/* <div className="lg:w-[29.27px] w-[16.77px] lg:h-[29.27px] h-[16.77px] md:w-[16.77px] md:h-[16.77px] relative bg-white"> */}
                  {/* <div className="lg:w-[28.26px] lg:h-[28.26px] lg:left-[0.50px] lg:top-[0.51px] md:w-[18px] md:h-[35px] md:left-0 md:top-[0.52px] absolute"></div> */}
{/*  */}
                  {/* <img src={flagpage4} alt="" /> */}
                  {/* <div className="lg:w-[27.45px] w-[15px] lg:h-[29.27px] lg:left-[0.91px] lg:top-0 absolute"> */}
                  
                  </div>
                {/* </div> */}
                {/* <div className="text-neutral-500 lg:text-base text-[8px] md:text-[9.17px] font-medium  md:leading-3 leading-tight"> */}
                  {/* AUD Wallet (0.00) */}
                {/* </div> */}
              {/* </div> */}
            {/* </div> */}
            {/* <div className="lg:pl-2.5 md:w-[214.84px] lg:pt-[7px] lg:w-[370px] lg:h-[45px] h-[30px] justify-start items-center lg:pb-[7.73px] bg-white shadow lg:justify-start lg:items-center md:h-[30px] md:pl-[5.73px] md:pr-[84.48px] md:pt-1 md:pb-[4.43px] inline-flex"> */}
              {/* <div className="lg:self-stretch lg:justify-start  lg:items-center lg:gap-[5px] flex-row gap-[5px] md:gap-[2.86px] inline-flex"> */}
                {/* <div className="lg:w-[29.27px] w-[16.77px] lg:h-[29.27px] h-[16.77px] md:w-[16.77px] md:h-[16.77px] relative bg-white"> */}
                  {/* <img src={flagpage5} alt="" /> */}
                  {/* <div className="lg:w-[28.26px] lg:h-[28.26px] lg:left-[0.50px] lg:top-[0.51px] md:w-[18px] md:h-[35px] md:left-0 md:top-[0.52px] absolute"></div> */}
{/*  */}
                  {/* <div className="lg:w-[9.11px] lg:h-[17.34px] lg:left-[10.07px] lg:top-[5.96px] absolute"> */}
                  {/* </div> */}
                  {/* <div className="lg:w-[6.36px] lg:h-[14.71px] lg:left-[11.46px] lg:top-[7.28px] md:w-[16.77px] md:h-[15.73px] md:left-0 md:top-[0.52px]  absolute"></div> */}
                {/* </div> */}
                {/* <div className="text-neutral-500 lg:text-base text-[8px] md:text-[9.17px] font-medium  md:leading-3 leading-tight"> */}
                  {/* KES Wallet (0.00) */}
                {/* </div> */}
              {/* </div> */}
            {/* </div> */}
          {/* </div> */}
{/* // )} */}
{/*  */}
{/*  */}




{/* airtime top-up dropdown */}
{isOpen2 && (
  <div className=" flex w-full md:w-full justify-between lg:mt-[-350px] mt-[-50px] md:mt-[-310px] items-center lg:w-full gap-[30px] flex-col">
<div class="lg:w-full lg:h-[101px] lg:pl-[26px] lg:pr-1  w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.67px] md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] bg-white justify-between items-center inline-flex">
    
        <div class="w-[56.33px] text-black text-[8px] font-medium md:w-[96.82px] md:text-[9.17px] lg:w-[169px] lg:text-base lg:leading-tight md:leading-3 leading-[10.40px]">MTN VTU</div>
        <div class="w-[53.33px] text-black text-[8px] font-medium md:w-[91.67px] md:text-[9.17px] md:leading-3 lg:w-40 lg:text-base lg:leading-tight leading-[10.40px]">100</div>
        <div class="w-[60.33px] text-black text-[8px] font-medium md:w-[103.70px] md:text-[9.17px] lg:w-[181px] lg:text-base lg:leading-tight  md:leading-3 leading-[10.40px]">(₦10,000.00)</div>
    
</div>
<div class="w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.66px] md:w-full md:h-[57.86px] lg:w-full lg:h-[101px] lg:pl-[26px] lg:pr-1 md:pl-[14.90px] md:pr-[2.29px] bg-white justify-between items-center inline-flex">
    
        <div class="w-[56.33px] text-black text-[8px] font-medium md:w-[96.82px] md:text-[9.17px] lg:w-[169px] lg:text-base lg:leading-tight md:leading-3 leading-[10.40px]">MTN SNS</div>
        <div class="w-[53.33px] text-black text-[8px] font-medium md:w-[91.67px] md:text-[9.17px] md:leading-3 leading-[10.40px] lg:w-40 lg:text-base lg:leading-tight ">100</div>
        <div class="w-[60.33px] text-black text-[8px] font-medium md:w-[103.70px] md:text-[9.17px] md:leading-3 leading-[10.40px] lg:w-[181px] lg:text-base lg:leading-tight">(₦10,000.00)</div>
    
</div>
<div class="w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.67px] md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] bg-white lg:w-full lg:h-[101px] lg:pl-[26px] lg:pr-1 justify-between  items-center inline-flex">
    
        <div class="w-[56.33px] text-black text-[8px] font-medium md:w-[96.82px] md:text-[9.17px] lg:w-[169px] lg:text-base lg:leading-tight md:leading-3 leading-[10.40px]">AIRTEL VTU</div>
        <div class="w-[53.33px] text-black text-[8px] font-medium md:w-[91.67px] md:text-[9.17px] md:leading-3 lg:w-40 lg:text-base lg:leading-tight leading-[10.40px]">100</div>
        <div class="w-[60.33px] text-black text-[8px] font-medium md:w-[103.70px] md:text-[9.17px] md:leading-3 leading-[10.40px] lg:w-[181px] lg:text-base lg:leading-tight ">(₦10,000.00)</div>
    
</div>
<div class="w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.67px] md:w-full md:h-[57.86px] md:pl-[14.90px] lg:w-full lg:h-[101px] lg:pl-[26px] lg:pr-1 md:pr-[2.29px] bg-white justify-between items-center inline-flex">
    
        <div class="w-[56.33px] text-black text-[8px] font-medium md:w-[96.82px] md:text-[9.17px] lg:w-[169px] lg:text-base lg:leading-tight md:leading-3 leading-[10.40px]">AIRTEL SNS</div>
        <div class="w-[53.33px] text-black text-[8px] font-medium md:w-[91.67px] md:text-[9.17px] md:leading-3 lg:w-40 lg:text-base lg:leading-tight leading-[10.40px]">100</div>
        <div class="w-[60.33px] text-black text-[8px] font-medium md:w-[103.70px] md:text-[9.17px] md:leading-3 lg:w-[181px] lg:text-base lg:leading-tight leading-[10.40px]">(₦10,000.00)</div>
    
</div>
<div class="w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.66px] md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] bg-white justify-between items-center lg:w-full lg:h-[101px]  lg:pl-[26px] lg:pr-1 inline-flex">
    
        <div class="w-[56.33px] text-black text-[8px] font-medium md:w-[96.82px] md:text-[9.17px] md:leading-3 lg:w-[169px] lg:text-base lg:leading-tight leading-[10.40px]">GLO VTU</div>
        <div class="w-[53.33px] text-black text-[8px] font-medium md:w-[91.67px] md:text-[9.17px] md:leading-3 lg:w-40 lg:text-base lg:leading-tight leading-[10.40px]">100</div>
        <div class="w-[60.33px] text-black text-[8px] md:w-[103.70px] md:text-[9.17px] md:leading-3 font-medium lg:w-[181px] lg:text-base lg:leading-tight leading-[10.40px]">(₦10,000.00)</div>
    
</div>
<div class="w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.67px] md:w-full md:h-[57.86px] md:pl-[14.90px] lg:w-full lg:h-[101px] lg:pl-[26px] lg:pr-1 md:pr-[2.29px] bg-white justify-between items-center inline-flex">
    
        <div class="w-[56.33px] text-black text-[8px] font-medium md:w-[96.82px] md:text-[9.17px] lg:w-[169px] lg:text-base lg:leading-tight md:leading-3 leading-[10.40px]">GLO SNS</div>
        <div class="w-[53.33px] text-black text-[8px] font-medium md:w-[91.67px] md:text-[9.17px] md:leading-3 lg:w-40 lg:text-base lg:leading-tight leading-[10.40px]">100</div>
        <div class="w-[60.33px] text-black text-[8px] font-medium md:w-[103.70px] md:text-[9.17px] md:leading-3 lg:w-[181px] lg:text-base lg:leading-tight leading-[10.40px]">(₦10,000.00)</div>
    
</div>
<div class="w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.67px] md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] bg-white lg:w-full lg:h-[101px] lg:pl-[26px] lg:pr-1 justify-between items-center inline-flex">
    
        <div class="w-[56.33px] text-black text-[8px] font-medium md:w-[96.82px] md:text-[9.17px] lg:w-[169px] lg:text-base lg:leading-tight md:leading-3 leading-[10.40px]">9MOBILE VTU</div>
        <div class="w-[53.33px] text-black text-[8px] font-medium md:w-[91.67px] md:text-[9.17px] md:leading-3 lg:w-40 lg:text-base lg:leading-tight leading-[10.40px]">100</div>
        <div class="w-[60.33px] text-black text-[8px] font-medium md:w-[103.70px] md:text-[9.17px] md:leading-3 lg:w-[181px] lg:text-base lg:leading-tight leading-[10.40px]">(₦10,000.00)</div>
    
</div>
<div class="w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.67px] md:w-full md:h-[57.86px] md:pl-[14.90px] lg:w-full lg:h-[101px] lg:pl-[26px] lg:pr-1 md:pr-[2.29px] bg-white justify-between items-center inline-flex">
    
        <div class="w-[56.33px] text-black text-[8px] md:w-[96.82px] md:text-[9.17px] md:leading-3 lg:w-[169px] lg:text-base lg:leading-tight  font-medium leading-[10.40px]">9MOBILE SNS</div>
        <div class="w-[53.33px] text-black text-[8px] font-medium md:w-[91.67px] md:text-[9.17px] md:leading-3 lg:w-40 lg:text-base lg:leading-tight leading-[10.40px]">100</div>
        <div class="w-[60.33px] text-black text-[8px] md:w-[103.70px] md:text-[9.17px] md:leading-3 font-medium lg:w-[181px] lg:text-base lg:leading-tight  leading-[10.40px]">(₦10,000.00)</div>
    
</div>
<div class="w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-[7px] pb-[6.66px] md:w-full md:h-[57.86px] md:pl-[14.90px] lg:w-full lg:h-[101px] lg:pl-[26px] lg:pr-1 md:pr-[2.29px] bg-white justify-between items-center inline-flex">
    
        <div class="w-[56.33px] text-black text-[8px] font-medium md:w-[96.82px] md:text-[9.17px] md:leading-3 lg:w-[169px] lg:text-base lg:leading-tight leading-[10.40px]">SMILE AIRTIME</div>
        <div class="w-[53.33px] text-black text-[8px] font-medium md:w-[91.67px] md:text-[9.17px] md:leading-3 lg:w-40 lg:text-base lg:leading-tight  leading-[10.40px]">100</div>
        <div class="w-[60.33px] text-black text-[8px] font-medium md:w-[103.70px] md:text-[9.17px] md:leading-3 lg:w-[181px] lg:text-base lg:leading-tight leading-[10.40px]">(₦10,000.00)</div>
    
</div>
<div class="w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-[7px] pb-[6.67px] md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] bg-white lg:w-full lg:h-[101px] lg:pl-[26px] lg:pr-1 justify-between items-center inline-flex">
    
        <div class="w-[56.33px] text-black text-[8px] font-medium md:w-[96.82px] md:text-[9.17px] md:leading-3 lg:w-[169px] lg:text-base lg:leading-tight leading-[10.40px]">INTERNATIONAL AIRTIME</div>
        <div class="w-[53.33px] text-black text-[8px] font-medium md:w-[91.67px] md:text-[9.17px] md:leading-3 lg:w-40 lg:text-base lg:leading-tight leading-[10.40px]">100</div>
        <div class="w-[60.33px] text-black text-[8px] font-medium md:w-[103.70px] md:text-[9.17px] md:leading-3 lg:w-[181px] lg:text-base lg:leading-tight leading-[10.40px]">(₦10,000.00)</div>
    
</div>

<div class="lg:w-[187px] lg:h-[52px] lg:py-4 md:ml-[-80px] lg:gap-[26px] md:w-[108.08px] md:h-[30.06px] md:py-[9.17px] md:gap-[14.90px] ml-[-30px]  mt-[20px] w-[134.08px] h-[15.73px] lg:ml-[-100px] justify-center  items-center gap-[14.90px] flex">
    <div class="text-black lg:text-xs md:text-[6.88px] md:leading-[8.94px]  lg:leading-none text-[8px] font-medium leading-[10.40px]">You need help?</div>
    <div class="lg:px-[15px] lg:py-[5px] md:px-[8.59px] md:py-[2.86px] md:rounded-[5.16px] md:gap-[5.73px] lg:rounded-[9px] lg:gap-2.5 px-[8.59px] py-[1.86px] bg-blue-900 rounded-[5.16px] justify-center items-center gap-[5.73px] flex">
        <div class="text-white text-[8px] md:text-[4.58px] md:leading-[5.96px] font-medium leading-[10.40px] lg:text-[8px] lg:leading-[10.40px] ">Contact Us</div>
    </div>
</div>


  </div>
)}





{/* data top-up dropdown */}
{isOpen3 && (
<div className="flex md:mt-[900px] mt-[350px] flex-col">
<div class="lg:w-full justify-between items-center lg:h-[101px] w-full md:w-full md:mt-[-1210px] lg:mt-[-1240px] 
md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] mt-[-400px] 
lg:pl-[26px] lg:pr-1   h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.67px] bg-white flex-row flex">
    
        <div class=" w-[56.33px] text-black text-[8px] font-medium lg:w-[169px] lg:text-base lg:leading-tight md:w-[96.82px]  md:text-[9.17px] md:leading-3 leading-[10.40px]">MTN SME</div>
        <div class="w-[53.33px] text-black text-[8px] font-medium lg:w-40 lg:text-base md:w-[91.67px]  md:text-[9.17px] md:leading-3 lg:leading-tight leading-[10.40px]">100GB</div>
        <div class="w-[60.33px] text-black text-[8px] font-medium lg:w-[181px] lg:text-base  lg:leading-tight md:w-[103.70px] md:text-[9.17px] md:leading-3 leading-[10.40px]">(₦10,000.00)</div>
    
</div>


<div class="lg:w-full lg:h-[101px] lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.67px] bg-white md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] justify-between items-center inline-flex">
    
        <div class="w-[56.33px] text-black text-[8px] font-medium lg:w-[169px] lg:text-base lg:leading-tight md:w-[96.82px]  md:text-[9.17px] md:leading-3 leading-[10.40px]">MTN SME2</div>
        <div class="w-[53.33px] text-black text-[8px] font-medium lg:w-40 lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[9.17px] md:leading-3 leading-[10.40px]">100GB</div>
        <div class="w-[60.33px] text-black text-[8px] font-medium lg:w-[181px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[9.17px] md:leading-3 leading-[10.40px]">(₦10,000.00)</div>
    </div>


<div class="lg:w-full lg:h-[101px] lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.66px] bg-white justify-between md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px]  items-center inline-flex">
    
        <div class="w-[56.33px] text-black text-[8px] font-medium lg:w-[169px] lg:text-base lg:leading-tight md:w-[96.82px]  md:text-[9.17px] md:leading-3 leading-[10.40px]">MTN CG</div>
        <div class="w-[53.33px] text-black text-[8px] font-medium lg:w-40 lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[9.17px] md:leading-3 leading-[10.40px]">100GB</div>
        <div class="w-[60.33px] text-black text-[8px] font-medium lg:w-[181px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[9.17px] md:leading-3  leading-[10.40px]">(₦10,000.00)</div>
    </div>


<div class="lg:w-full lg:h-[101px] lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px]  pt-3 pb-[11.66px] bg-white justify-between items-center inline-flex">
    
        <div class="w-[56.33px] text-black text-[8px] font-medium lg:w-[169px] lg:text-base lg:leading-tight md:w-[96.82px]  md:text-[9.17px] md:leading-3 leading-[10.40px]">MTN GIFTING</div>
        <div class="w-[53.33px] text-black text-[8px] font-medium lg:w-40 lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[9.17px] md:leading-3 leading-[10.40px]">100GB</div>
        <div class="w-[60.33px] text-black text-[8px] font-medium lg:w-[181px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[9.17px] md:leading-3 leading-[10.40px]">(₦10,000.00)</div>
</div>
<div class="lg:w-full lg:h-[101px] lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px]  pt-[7px] pb-[6.66px] bg-white justify-between items-center inline-flex">
    
        <div class="w-[56.33px] text-black text-[8px] lg:w-[169px] lg:text-base lg:leading-tight font-medium md:w-[96.82px] md:text-[9.17px] md:leading-3 leading-[10.40px]">MTN DIRECT COUPON</div>
        <div class="w-[53.33px] text-black text-[8px] font-medium lg:w-40 lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[9.17px] md:leading-3  leading-[10.40px]">100GB</div>
        <div class="w-[60.33px] text-black text-[8px] font-medium lg:w-[181px] lg:text-base md:w-[91.67px]  md:text-[9.17px] md:leading-3 lg:leading-tight leading-[10.40px]">(₦10,000.00)</div>
    
</div>
<div class="lg:w-full lg:h-[101px] lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] justify-between items-center lg:gap-[198px] md:w-full pl-[8.67px] pr-[1.33px] md:h-[57.86px] pt-[7px] pb-[6.66px] md:pl-[14.90px] md:pr-[2.29px] gap-[66px] inline-flex">

    <div class="w-[56.33px] text-black text-[8px] lg:w-[169px] lg:text-base lg:leading-tight font-medium md:w-[96.82px] md:text-[9.17px] md:leading-3 leading-[10.40px]">MTN GENERAL BUNDLES</div>
    <div class="w-[53.33px] text-black text-[8px] font-medium lg:w-40 lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[9.17px] md:leading-3 leading-[10.40px]">100GB</div>
    <div class="w-[60.33px] text-black text-[8px] font-medium lg:w-[181px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[9.17px] md:leading-3 leading-[10.40px]">(₦10,000.00)</div>

</div>
<div class="lg:w-full lg:h-[101px] lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] pt-3 pb-[11.67px] bg-white justify-between items-center inline-flex">
    
        <div class="w-[56.33px] text-black text-[8px] lg:w-[169px] lg:text-base lg:leading-tight md:w-[96.82px] md:text-[9.17px] md:leading-3 font-medium leading-[10.40px]">AIRTEL CG</div>
        <div class="w-[53.33px] text-black text-[8px] font-medium lg:w-40 lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[9.17px] md:leading-3 leading-[10.40px]">100GB</div>
        <div class="w-[60.33px] text-black text-[8px] font-medium lg:w-[181px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[9.17px] md:leading-3 leading-[10.40px]">(₦10,000.00)</div>
    
</div>
<div class="lg:w-full lg:h-[101px] lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-[7px] md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] pb-[6.67px] bg-white justify-between items-center inline-flex">
    
        <div class="w-[56.33px] text-black text-[8px] font-medium lg:w-[169px] lg:text-base lg:leading-tight md:w-[96.82px] md:text-[9.17px] md:leading-3 leading-[10.40px]">AIRTEL GIFTING</div>
        <div class="w-[53.33px] text-black text-[8px] font-medium lg:w-40 lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[9.17px] md:leading-3 leading-[10.40px]">100GB</div>
        <div class="w-[60.33px] text-black text-[8px] font-medium lg:w-[181px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[9.17px] md:leading-3 leading-[10.40px]">(₦10,000.00)</div>
    
</div>
<div class="lg:w-full lg:h-[101px] lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] justify-between items-center md:w-full pl-[8.67px] pr-[1.33px]  md:h-[57.86px] pt-[7px] pb-[6.66px] md:pl-[14.90px] md:pr-[2.29px] gap-[66px] inline-flex">

    <div class="w-[56.33px] text-black text-[8px] font-medium lg:w-[169px] lg:text-base lg:leading-tight md:w-[96.82px] md:text-[9.17px] md:leading-3 leading-[10.40px]">AIRTEL GENERAL BUNDLE</div>
    <div class="w-[53.33px] text-black text-[8px] font-medium lg:w-40 lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[9.17px] md:leading-3 leading-[10.40px]">100GB</div>
    <div class="w-[60.33px] text-black text-[8px] font-medium lg:w-[181px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[9.17px] md:leading-3 leading-[10.40px]">(₦10,000.00)</div>

</div>
<div class="lg:w-full lg:h-[101px] lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] pb-[11.67px] bg-white justify-between items-center inline-flex">
    
        <div class="w-[56.33px] text-black text-[8px] lg:w-[169px] lg:text-base lg:leading-tight md:w-[96.82px] md:text-[9.17px] md:leading-3 font-medium leading-[10.40px]">GLO CG</div>
        <div class="w-[53.33px] text-black text-[8px] lg:w-40 lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[9.17px] md:leading-3 font-medium leading-[10.40px]">100GB</div>
        <div class="w-[60.33px] text-black text-[8px] lg:w-[181px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[9.17px] md:leading-3 font-medium leading-[10.40px]">(₦10,000.00)</div>
    
</div>
<div class="lg:w-full lg:h-[101px] lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] pt-3 pb-[11.66px] bg-white justify-between items-center inline-flex">
    
        <div class="w-[56.33px] text-black text-[8px] lg:w-[169px] lg:text-base lg:leading-tight md:w-[96.82px] md:text-[9.17px] md:leading-3 font-medium leading-[10.40px]">GLO GIFTING</div>
        <div class="w-[53.33px] text-black text-[8px] lg:w-40 lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[9.17px] md:leading-3  font-medium leading-[10.40px]">100GB</div>
        <div class="w-[60.33px] text-black text-[8px] font-medium lg:w-[181px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[9.17px] md:leading-3 leading-[10.40px]">(₦10,000.00)</div>
    
</div>
<div class="lg:w-full lg:h-[101px] lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-[7px] pb-[6.67px] bg-white  md:w-full md:h-[57.86px]  md:pl-[14.90px] md:pr-[2.29px] justify-between items-center inline-flex">
    
        <div class="w-[56.33px] text-black text-[8px] lg:w-[169px] lg:text-base lg:leading-tight md:w-[96.82px] md:text-[9.17px] md:leading-3 font-medium leading-[10.40px]">GLO GENERAL BUNDLES</div>
        <div class="w-[53.33px] text-black text-[8px] lg:w-40 lg:text-base lg:leading-tight font-medium md:w-[91.67px]  md:text-[9.17px] md:leading-3 leading-[10.40px]">100GB</div>
        <div class="w-[60.33px] text-black text-[8px] font-medium lg:w-[181px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[9.17px] md:leading-3 leading-[10.40px]">(₦10,000.00)</div>
    
</div>
<div class="lg:w-full lg:h-[101px] lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.66px] bg-white justify-between md:w-full  md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] items-center inline-flex">
    
        <div class="w-[56.33px] text-black text-[8px] lg:w-[169px] lg:text-base lg:leading-tight font-medium md:w-[96.82px] md:text-[9.17px] md:leading-3 leading-[10.40px]">9MOBILE SME</div>
        <div class="w-[53.33px] text-black text-[8px] lg:w-40 lg:text-base lg:leading-tight font-medium md:w-[91.67px]  md:text-[9.17px] md:leading-3 leading-[10.40px]">100GB</div>
        <div class="w-[60.33px] text-black text-[8px] font-medium lg:w-[181px] lg:text-base lg:leading-tight md:w-[91.67px] md:text-[9.17px] md:leading-3  leading-[10.40px]">(₦10,000.00)</div>
    
</div>
<div class="lg:w-full lg:h-[101px] lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.66px] bg-white justify-between md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] items-center inline-flex">
    
        <div class="w-[56.33px] text-black text-[8px] lg:w-[169px] lg:text-base lg:leading-tight md:w-[96.82px] md:text-[9.17px] md:leading-3 font-medium leading-[10.40px]">9MOBILE CG</div>
        <div class="w-[53.33px] text-black text-[8px] font-medium lg:w-40 lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[9.17px] md:leading-3 leading-[10.40px]">100GB</div>
        <div class="w-[60.33px] text-black text-[8px] font-medium lg:w-[181px] lg:text-base lg:leading-tight md:w-[91.67px] md:text-[9.17px] md:leading-3 leading-[10.40px]">(₦10,000.00)</div>

</div>
<div class="lg:w-full lg:h-[101px] lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] justify-between items-center gap-[66px] md:w-full md:h-[57.86px] pl-[8.67px] pr-[1.33px] pt-[7px] pb-[6.66px] md:pl-[14.90px] md:pr-[2.29px] inline-flex">

    <div class="w-[56.33px] text-black text-[8px] font-medium lg:w-[169px] lg:text-base lg:leading-tight md:w-[96.82px] md:text-[9.17px] md:leading-3 leading-[10.40px]">9MOBILE GENERAL BUNDLES</div>
    <div class="w-[53.33px] text-black text-[8px] font-medium lg:w-40 lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[9.17px] md:leading-3 leading-[10.40px]">100GB</div>
    <div class="w-[60.33px] text-black text-[8px] font-medium lg:w-[181px] lg:text-base lg:leading-tight md:w-[91.67px] md:text-[9.17px] md:leading-3 leading-[10.40px]">(₦10,000.00)</div>
 
</div>
<div class="lg:w-full lg:h-[101px] lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.66px] bg-white md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] justify-between items-center inline-flex">
    
        <div class="w-[56.33px] text-black text-[8px] lg:w-[169px] lg:text-base lg:leading-tight font-medium md:w-[96.82px] md:text-[9.17px] md:leading-3 leading-[10.40px]">SMILE BIGGA</div>
        <div class="w-[53.33px] text-black text-[8px] font-medium lg:w-40 lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[9.17px] md:leading-3 leading-[10.40px]">100GB</div>
        <div class="w-[60.33px] text-black text-[8px] font-medium lg:w-[181px] lg:text-base lg:leading-tight md:w-[91.67px] md:text-[9.17px] md:leading-3 leading-[10.40px]">(₦10,000.00)</div>
    
</div>
<div class="lg:w-full lg:h-[101px] lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-[7px] pb-[6.66px] bg-white justify-between md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] items-center inline-flex">
    
        <div class="w-[56.33px] text-black text-[8px] lg:w-[169px] lg:text-base lg:leading-tight font-medium md:w-[96.82px] md:text-[9.17px] md:leading-3 leading-[10.40px]">SMILE UNLIMITED</div>
        <div class="w-[53.33px] text-black text-[8px] font-medium lg:w-40 lg:text-base md:w-[91.67px]  md:text-[9.17px] md:leading-3 lg:leading-tight leading-[10.40px]">100GB</div>
        <div class="w-[60.33px] text-black text-[8px] font-medium lg:w-[181px] lg:text-base lg:leading-tight md:w-[91.67px] md:text-[9.17px] md:leading-3 leading-[10.40px]">(₦10,000.00)</div>
    
</div>
<div class="lg:w-full lg:h-[101px] lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.66px] bg-white justify-between md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] items-center inline-flex">
    
        <div class="w-[56.33px] text-black text-[8px] lg:w-[169px] lg:text-base lg:leading-tight font-medium md:w-[96.82px] md:text-[9.17px] md:leading-3 leading-[10.40px]">SMILE DAILY</div>
        <div class="w-[53.33px] text-black text-[8px] font-medium lg:w-40 lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[9.17px] md:leading-3 leading-[10.40px]">100GB</div>
        <div class="w-[60.33px] text-black text-[8px] font-medium lg:w-[181px] lg:text-base lg:leading-tight md:w-[91.67px] md:text-[9.17px] md:leading-3 leading-[10.40px]">(₦10,000.00)</div>
    
</div>
<div class="lg:w-full lg:h-[101px] lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-[7px] pb-[6.67px] bg-white justify-between md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] items-center inline-flex">
    
        <div class="w-[56.33px] text-black text-[8px] lg:w-[169px] lg:text-base lg:leading-tight font-medium md:w-[96.82px] md:text-[9.17px] md:leading-3 leading-[10.40px]">SMILE WEEKLY</div>
        <div class="w-[53.33px] text-black text-[8px] lg:w-40 lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[9.17px] md:leading-3 font-medium leading-[10.40px]">100GB</div>
        <div class="w-[60.33px] text-black text-[8px] font-medium lg:w-[181px] lg:text-base lg:leading-tight md:w-[91.67px] md:text-[9.17px] md:leading-3 leading-[10.40px]">(₦10,000.00)</div>
    
</div>
<div class="lg:w-full lg:h-[101px] lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.67px] bg-white justify-between md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] items-center inline-flex">
    
        <div class="w-[56.33px] text-black text-[8px] lg:w-[169px] lg:text-base lg:leading-tight md:w-[96.82px] md:text-[9.17px] md:leading-3 font-medium leading-[10.40px]">SMILE NIGHT</div>
        <div class="w-[53.33px] text-black text-[8px] lg:w-40 lg:text-base lg:leading-tight font-medium md:w-[91.67px]  md:text-[9.17px] md:leading-3 leading-[10.40px]">100GB</div>
        <div class="w-[60.33px] text-black text-[8px] font-medium lg:w-[181px] lg:text-base lg:leading-tight md:w-[91.67px] md:text-[9.17px] md:leading-3  leading-[10.40px]">(₦10,000.00)</div>
    
</div>
<div class="lg:w-full lg:h-[101px] lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-[7px] pb-[6.66px] bg-white justify-between md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px]  items-center inline-flex">
    
        <div class="w-[56.33px] text-black text-[8px] lg:w-[169px] lg:text-base lg:leading-tight md:w-[96.82px] md:text-[9.17px] md:leading-3 font-medium leading-[10.40px]">SMILEVOICE ONLY</div>
        <div class="w-[53.33px] text-black text-[8px] lg:w-40 lg:text-base lg:leading-tight font-medium md:w-[91.67px]  md:text-[9.17px] md:leading-3 leading-[10.40px]">100GB</div>
        <div class="w-[60.33px] text-black text-[8px] font-medium lg:w-[181px] lg:text-base lg:leading-tight md:w-[91.67px] md:text-[9.17px] md:leading-3 leading-[10.40px]">(₦10,000.00)</div>
    </div>

<div class="lg:w-full lg:h-[101px] lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-[7px] pb-[6.67px] bg-white justify-between md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] items-center inline-flex">
    
        <div class="w-[56.33px] text-black text-[8px] lg:w-[169px] lg:text-base lg:leading-tight font-medium md:w-[96.82px] md:text-[9.17px] md:leading-3 leading-[10.40px]">SMILE FREEDOM</div>
        <div class="w-[53.33px] text-black text-[8px] font-medium lg:w-40 lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[9.17px] md:leading-3 leading-[10.40px]">100GB</div>
        <div class="w-[60.33px] text-black text-[8px] font-medium lg:w-[181px] lg:text-base lg:leading-tight md:w-[91.67px] md:text-[9.17px] md:leading-3 leading-[10.40px]">(₦10,000.00)</div>
    </div>

<div class="lg:w-full lg:h-[101px] lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[7px] pr-[3px] pt-[7.02px] pb-[6.64px] bg-white justify-between md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] items-center inline-flex">
    
        <div class="w-[56.33px] text-black text-[8px] font-medium lg:w-[169px] lg:text-base lg:leading-tight md:w-[96.82px] md:text-[9.17px] md:leading-3 leading-[10.40px]">SPECTRANET DATA</div>
        <div class="w-[53.33px] text-black text-[8px] font-medium lg:w-40 lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[9.17px] md:leading-3 leading-[10.40px]">100GB</div>
        <div class="w-[60.33px] text-black text-[8px] font-medium lg:w-[181px] lg:text-base lg:leading-tight md:w-[91.67px] md:text-[9.17px] md:leading-3 leading-[10.40px]">(₦10,000.00)</div>
    </div>

<div class="lg:w-full lg:h-[101px] lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[7px] pr-[3px] pt-[7.02px] pb-[6.64px] bg-white justify-between md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] items-center inline-flex">
    
        <div class="w-[56.33px] text-black text-[8px] font-medium lg:w-[169px] lg:text-base lg:leading-tight md:w-[96.82px] md:text-[9.17px] md:leading-3 leading-[10.40px]">SPECTRANET DATA</div>
        <div class="w-[53.33px] text-black text-[8px] font-medium  lg:w-40 lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[9.17px] md:leading-3 leading-[10.40px]">100GB</div>
        <div class="w-[60.33px] text-black text-[8px] font-medium lg:w-[181px] lg:text-base lg:leading-tight md:w-[91.67px] md:text-[9.17px] md:leading-3 leading-[10.40px]">(₦10,000.00)</div>
    </div>

<div class=" w-[134.08px] h-[15.73px] justify-start lg:ml-[500px] items-center ml-[75px] mt-[30px] gap-[14.90px] lg:w-[187px] md:ml-[310px] lg:h-[52px] lg:py-4 lg:gap-[26px] md:w-[108.08px] md:h-[30.06px] md:py-[9.17px] md:gap-[14.90px] inline-flex">
    <div class="text-black text-[8px] font-medium leading-[10.40px] lg:text-xs md:text-[6.88px] md:leading-[8.94px] lg:leading-none ">You need help?</div>
    <div class="px-[8.59px] py-[2.86px] bg-blue-900 rounded-[5.16px] justify-center items-center gap-[5.73px]lg:px-[15px] md:px-[8.59px] md:py-[2.86px] md:rounded-[5.16px] md:gap-[5.73px] lg:py-[5px] lg:rounded-[9px] lg:gap-2.5  flex">
        <div class="text-white text-[8px] font-medium leading-[10.40px] lg:text-[8px] md:text-[4.58px] md:leading-[5.96px] lg:leading-[10.40px] ">Contact Us</div>
    </div>
</div>
</div>
)}



{/* bills payment dropdown */}
{isOpen4 && (
<div className="flex  justify-start items-center lg:w-full  md:mt-[-300px]  lg:mt-[-350px] mt-[-50px] flex-col">
<div class="lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px]  lg:h-[101px] lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.67px] bg-white justify-between items-center inline-flex">
    
        <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[9.17px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[8px] font-medium leading-[10.40px]">WAEC PIN</div>
        <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[9.17px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium leading-[10.40px]">100</div>
        <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[9.17px] md:leading-3 lg:leading-tight w-[60.33px] text-black text-[8px] font-medium leading-[10.40px]">(₦10,000.00)</div>
    
</div>
<div class="lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] lg:h-[101px] lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.66px] bg-white justify-between items-center inline-flex">
    
        <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[9.17px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[8px] font-medium leading-[10.40px]">NECO PIN</div>
        <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[9.17px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium leading-[10.40px]">100</div>
        <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[9.17px] md:leading-3 lg:leading-tight w-[60.33px] text-black text-[8px] font-medium leading-[10.40px]">(₦10,000.00)</div>
    
</div>
<div class="lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] lg:h-[101px] lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.67px] bg-white justify-between items-center inline-flex">
    
        <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[9.17px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[8px] font-medium  leading-[10.40px]">JAMB PIN</div>
        <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[9.17px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium  leading-[10.40px]">100</div>
        <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[9.17px] md:leading-3 lg:leading-tight w-[60.33px] text-black text-[8px] font-medium  leading-[10.40px]">(₦10,000.00)</div>
    </div>

<div class="lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] lg:h-[101px] lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.67px] bg-white justify-between items-center inline-flex">
    
        <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[9.17px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[8px] font-medium  leading-[10.40px]">NABTEB PIN</div>
        <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[9.17px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium  leading-[10.40px]">100</div>
        <div class="lg:w-[100px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[9.17px] md:leading-3 w-[60.33px] text-black text-[8px] font-medium  leading-[10.40px]">(₦10,000.00)</div>
    
</div>
<div class="lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] lg:h-[101px] lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-2 pb-[7.66px] bg-white justify-between items-center inline-flex">
    
        <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[9.17px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[7px] font-medium  leading-[9.10px]">GOTV SUBSCRIPTION</div>
        <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[9.17px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium  leading-[10.40px]">100</div>
        <div class="lg:w-[100px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[9.17px] md:leading-3 w-[60.33px] text-black text-[8px] font-medium  leading-[10.40px]">(₦10,000.00)</div>
    
</div>
<div class="lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] lg:h-[101px] lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-2 pb-[7.67px] bg-white justify-between items-center inline-flex">
    
        <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[9.17px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[7px] font-medium leading-[9.10px]">DSTV SUBSCRIPTION</div>
        <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[9.17px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium leading-[10.40px]">100</div>
        <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[9.17px] md:leading-3 lg:leading-tight w-[60.33px] text-black text-[8px] font-medium leading-[10.40px]">(₦10,000.00)</div>
    
</div>
<div class="lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] lg:h-[101px] lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-2 pb-[7.67px] bg-white justify-between items-center inline-flex">
    
        <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[9.17px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[7px] font-medium  leading-[9.10px]">STARTIME SUBSCRIPTION</div>
        <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[9.17px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium  leading-[10.40px]">100</div>
        <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[9.17px] md:leading-3 lg:leading-tight w-[60.33px] text-black text-[8px] font-medium  leading-[10.40px]">(₦10,000.00)</div>
    
</div>
<div class="lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] lg:h-[101px] lg:pl-[26px] lg:pr-1  w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-2 pb-[7.67px] bg-white justify-between items-center inline-flex">
    
        <div class="lg:w-[100px] lg:text-base lg:leading-tight md:w-[96.82px]  md:text-[9.17px] md:leading-3 w-[56.33px] text-black text-[7px] font-medium leading-[9.10px]">SHOWMAX SUBSCRIPTION</div>
        <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[9.17px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium leading-[10.40px]">100</div>
        <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[9.17px] md:leading-3 lg:leading-tight w-[60.33px] text-black text-[8px] font-medium leading-[10.40px]">(₦10,000.00)</div>
    
</div>
<div class="lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] lg:h-[101px] lg:pl-[26px] lg:pr-1  w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-[7px] pb-[6.67px] bg-white justify-between items-center inline-flex">
    
        <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[9.17px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[8px] font-medium leading-[10.40px]">ELECTRICITY BILLS</div>
        <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[9.17px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium leading-[10.40px]">100</div>
        <div class="lg:w-[100px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[9.17px] md:leading-3 w-[60.33px] text-black text-[8px] font-medium leading-[10.40px]">(₦10,000.00)</div>
    
</div>
<div class="lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] lg:h-[101px] lg:pl-[26px] lg:pr-1  w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.66px] bg-white justify-between items-center inline-flex">
    
        <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[9.17px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[8px] font-medium leading-[10.40px]">BULK SMS</div>
        <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[9.17px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium leading-[10.40px]">100</div>
        <div class="lg:w-[100px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[9.17px] md:leading-3 w-[60.33px] text-black text-[8px] font-medium leading-[10.40px]">(₦10,000.00)</div>
    </div>

<div class="lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] lg:h-[101px] lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-2 pb-[7.67px] bg-white justify-between items-center inline-flex">
    
        <div class="lg:w-[100px] lg:text-base lg:leading-tight md:w-[96.82px]  md:text-[9.17px] md:leading-3 w-[56.33px] text-black text-[7px] font-medium leading-[9.10px]">RECHARGE CARD PRINTING</div>
        <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[9.17px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium leading-[10.40px]">100</div>
        <div class="lg:w-[100px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[9.17px] md:leading-3 w-[60.33px] text-black text-[8px] font-medium leading-[10.40px]">(₦10,000.00)</div>
    </div>

<div class="lg:w-full lg:h-[52px] lg:py-4 md:ml-[-80px] lg:gap-[26px] md:w-[108.08px] md:h-[30.06px] md:py-[9.17px] md:gap-[14.90px]  mt-[20px] w-[134.08px] h-[15.73px] lg:ml-[-70px] justify-center ml-[-35px] items-center gap-[14.90px] inline-flex">
    <div class="text-black lg:text-xs md:text-[6.88px] md:leading-[8.94px]  lg:leading-none text-[8px] font-medium leading-[10.40px]">You need help?</div>
    <div class="lg:px-[15px] lg:py-[5px] md:px-[8.59px] md:py-[2.86px] md:rounded-[5.16px] md:gap-[5.73px] lg:rounded-[9px] lg:gap-2.5 px-[8.59px] py-[2.86px] bg-blue-900 rounded-[5.16px] justify-center items-center gap-[5.73px] flex">
        <div class="text-white text-[8px] md:text-[4.58px] md:leading-[5.96px] font-medium leading-[10.40px] lg:text-[8px] lg:leading-[10.40px] ">Contact Us</div>
    </div>
</div>
</div>
)}
  {/* </div> */}

        </>
        </DashBoardLayout>
        )
        }

