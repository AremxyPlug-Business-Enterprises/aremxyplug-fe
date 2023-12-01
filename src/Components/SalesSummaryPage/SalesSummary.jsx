import React, {useState} from 'react';
import { DashBoardLayout } from '../Dashboard/Layout/DashBoardLayout';
import receiptA from "./assets/cash receipt from online shopping on mobile phone (3)A.png";
import arrowsales from "./assets/arrow-square-rightsales.png";
import flagsales from "./assets/Country Flags (5)sales.png";
import menusales from "./assets/menusales.png";
import arrow44 from "./assets/arrow-down@4x.png";
import arrow11 from "./assets/arrow-down@1x.png";
import arrow00 from "./assets/arrow-down@0x.png";
import flagpage from "./assets/Country Flagspage.png";
import flagpage1 from "./assets/Country Flagspage1.png";
import flagpage2 from "./assets/Countryflag2.svg";
import flagpage3 from "./assets/Countryflag3.svg";
import flagpage4 from "./assets/Countryflag4.svg";
import flagpage5 from "./assets/Countryflag5.svg";
import arrows from "./assets/arrow-downn.png";
import { useContext } from "react";
import { ContextProvider } from  "../Context";
import styles from "../Dashboard/DashboardComponents/./component.module.css";
import { Calender } from "../Dashboard/DashboardComponents/Calender";
import { Link } from "react-router-dom/dist/react-router-dom.development";



export default function SalesSummaryPage ()  {

    const [isOpen1, setIsOpen1] = useState(false); 
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false); 
    const [isOpen4, setIsOpen4] = useState(false);
    const [isOpen5, setIsOpen5] = useState(false);


    // const toggleDropdown1 = () => { setIsOpen1(true); };
// 
    // const toggleDropdown2 = () => { setIsOpen2(true); setIsOpen3(false); setIsOpen4(false);setIsOpen1(false); }; 
// 
    //  const toggleDropdown3 = () => { setIsOpen3(true); setIsOpen2(false); setIsOpen4(false); setIsOpen1(false); };
// 
    //   const toggleDropdown4 = () => { setIsOpen4(true);  setIsOpen3(false); setIsOpen2(false);setIsOpen1(false); };


    const [calender, setCalender] = useState(false);   




      const [selectedProduct, setSelectedProduct] = useState('Filter by product');
      const handleClick = (product) => {
        setSelectedProduct(product); };


        const [selectedCountry, setSelectedCountry] = useState(  <img
          src={flagsales}
          className="lg:w-[29.27px] lg:h-[29.27px]  ml-[-1.5px] left-[21px] lg:top-[0.91px]
           w-3 h-[10.41px] top-[8px] lg:left-[3px] md:w-[16.77px] md:h-[16.77px]
            // md:left-[12px] md:top-[12px] absolute"
          alt=""
        />
);
        const handleSelect = (product) => {
        setSelectedCountry(product); };

        const [selectedBalance, setSelectedBalance] = useState(<div>(₦50,000.00)</div>);
const handleBalance = (product) => {
  setSelectedBalance(product); };

        



        
        const [selected, setSelected] = useState("NGN");
        const { isDarkMode, toggleSideBar } =
  useContext(ContextProvider);


 
        const handleSelectedOption = (event) => {
          const clickedoption = event.target.value;
          setSelected(clickedoption);
          // (
            // clickedoption === "USD" ||
              // clickedoption === "GBP" ||
              // clickedoption === "AUD" ||
              // clickedoption === "KES" ||
              // clickedoption === "EUR"
          // );
          return;
        };
      //  
        





    return (

        <DashBoardLayout>
        <>
        <div class="flex gap-[25px] lg:w-full lg:h-[1850px] md:h-[1200px] h-[800px] md:w-full w-full flex-col">

          <div
            // id="Transaction"
            className="w-full h-[90px] md:h-[112.29px] bg-gradient-to-r from-yellow-300 to-rose-400  lg:h-[196px] md:rounded-[11.5px] rounded-[7px] md:mt-[-1px] px-[5px] lg:ml-[-20px] lg:w-[102%] 2xl:w-full 2xl:ml-0 lg:gap-[50px] pt-[10px] lg:px-[30px] lg:rounded-[20px] lg:py-[20px] pb-[16px] flex justify-between items-center"
          >
            <div className="w-[100%] pt-[19px] lg:pt-[20px] pl-[8.5px] md:pl-[9px]">
              <p className="text-[10px] mb-2 font-bold uppercase w-[100%] md:text-[12px] md:w-[70%] lg:w-[70%] lg:text-[20px] 2xl:w-[80%] 2xl:text-[24px] lg:mb-4">
                MANAGE ALL YOUR TRANSACTIONS AT A TIME WITHOUT ANY HASSLE.
              </p>
              <p className="text-[7px] font-[400] leading-[9px] mb-3 md:text-[9px] md:leading-[12.2px] w-[90%] md:w-[80%] lg:w-[75%] 2xl:w-[85%] 2xl:mt-[5px] lg:mt-[20px] lg:text-[16px] lg:leading-[26px] 2xl:text-[20px] lg:mb-[20px]">
                Select, filter, and manage all your transactions at a time,
                download all transactions stats and keep a record track.
              </p>
            </div>

            <div className="w-[91px] h-[66px] lg:w-[199px] lg:h-[199px] lg:mt-[40px]">
              <img
                src={receiptA}
                alt=""
                className="w-[67.482px] h-[60px] md:w-[98px] md:h-[px] lg:w-[196.447px] lg:h-[150px]"
              />
            </div>
          </div>




{/* Sales summary */}
    <div className="flex gap-[8px] md:gap-[10px] lg:mt-[25px] mt-[6px] md:mt-[10] flex-row">
        <div class="text-neutral-500 text-[11px] lg:text-[20px] md:text-[14px] font-semibold ">Sales Summary</div>
        <div class="w-4 h-4 lg:h-6 lg:mt-1 lg:w-6 md:w-[15.75px] md:h-[15.75px] justify-center items-center inline-flex">
            <img src={arrowsales} class="w-4 h-4 lg:h-6 lg:w-6 md:mt-[8px] mt-1  md:w-[15.75px] md:h-[15.75px] relative" alt="" />

        
        </div>

        </div>
        {/* available balance */}
        <div 
             className="lg:px-[] lg:py-[25px] lg:h-[120px] py-[10px] lg:gap-2.5  
gap-[5px] mt-[-0%] lg:mt-[25px] bg-indigo-300
 bg-opacity-20 md:rounded-[11.46px] lg:rounded-[20px] rounded-[6px]
  justify-center lg:w-full w-full md:w-full md:mt-[9px] md:h-[68.75px] 
  md:px-[140.10px] md:py-[14.32px]  items-center flex-col flex">


        <div onClick={() => {
                          setIsOpen5((prev) => !prev);
                          setCalender(false)
                          setIsOpen1(false)
                        }}
        className="lg:justify-start lg:items-center cursor-pointer relative gap-[10px] md:gap-[5.73px] lg:gap-[5.73px] flex">
              <div className="lg:w-[70px] lg:h-[70px] w-6 h-6 md:w-[40.10px] md:h-[40.10px] lg:gap-[5.73px]
                bg-white rounded-full relative">
                <div className="lg:w-[70px] lg:h-[70px] left-0 top-0 w-6 h-6 md:w-[40.10px] md:h-[40.10px]
                  absolute bg-white rounded-full"></div>
                <div className="lg:w-[29.27px] lg:h-[29.27px]  top-[-1px] lg:left-[20px]
                  ml-[-1.5px] left-[-12px] lg:top-[20px] w-3 h-[10.41px] md:w-[16.77px] md:h-[16.77px]
                 md:left-[2px] md:top-[0.52px] absolute">
                 
                {selectedCountry }
      
      
                  
                </div>
                  
              </div>
              <div  className="justify-start items-start mt-[5px] md:mt-[12px] gap-[5.5px] lg:gap-[11px] md:gap-[6.30px]  flex">
                <div className="text-black lg:text-[20px] text-[10px] md:text-[13px] md:whitespace-nowrap font-semibold lg:leading-relaxed md:leading-[14.90px] leading-[10.40px] ">
                  Available Balance
                </div>
                <div className="text-neutral-500 lg:text-[20px] text-[10px] md:text-[13px] font-medium  lg:leading-relaxed md:leading-[14.90px] leading-[10.40px]">
                {selectedBalance}
                </div>
              </div>
            
            <div
              className="lg:w-6 lg:h-6 w-[13.75px] md:mt-[5px] mt-[4px] h-[13.75px] md:w-[13.75px] md:h-[13.75px] lg:justify-center lg:items-center flex"
            >
               {isOpen5 ? (
    <img src={arrows} alt="Arrow " />
  ) : (
    <img src={arrow00} alt="Arrows" />
  )}
            </div>
            {isOpen5 && (
               
 
          <div className="
            
              lg:top-[95px] z-20  
            w-full md:w-full lg:w-full cursor-pointer
           top-[34px] md:top-[54.35px] absolute flex-col lg:items-start flex">

            <div 
            onClick={() => {
              setIsOpen5((prev) => !prev);
              if (isOpen5) {
      // Set isOpen5 to false when it's true
      setIsOpen5(true);
    }
              
              handleSelect( <img className='lg:w-[29.27px] w-3 lg:h-[29.45px]
            h-3 lg:left-0 lg:top-[0.91px] ml-[19px] lg:mt-[2px] lg:ml-[2px] mt-[7px] md:w-[16.77px]
            md:h-[16.77px] md:ml-[11px] md:mt-[12px] ' src={flagpage} alt="" />
);   
          handleBalance(    <div className="text-neutral-500 text-[9px] lg:mt-[5px] md:text-[13px] lg:text-xl lg:font-medium 
          md:leading-3 lg:leading-tight">
         (50,000.00)
        </div>
)
          }}

            className="lg:pl-2.5 lg:w-[370px] border border-b md:w-[214.84px] 
            lg:pt-[7px] md:h-[35px] lg:h-[47px] h-[30px] 
            justify-start items-center pt-[3px] pb-[px] bg-white shadow gap-[5px] pl-2 md:pl-2 md:gap-[5px] 
              flex-row  md:pt-1 md:pb-[4.43px] inline-flex">
              
                <img className='lg:w-[29.27px] w-3 lg:h-[29.45px]
                    h-3 lg:left-0 lg:top-[0.91px] md:w-[16.77px]
                    md:h-[16.77px] ' src={flagpage} alt="" />
                  
                
                <div className="text-neutral-500 text-[9px] md:text-[13px] lg:text-xl lg:font-medium 
                  md:leading-3 lg:leading-tight">
                  NGN Wallet (50,000.00)
                </div>
              
            </div>
            <div 
            onClick={() => {
              setIsOpen5((prev) => !prev);
              if (isOpen5) {
                // Set isOpen5 to false when it's true
                setIsOpen5(true);
              }
          
              handleSelect(   <img className='lg:w-[28.77px] w-3 lg:h-[26.09px]
            h-3 lg:left-[0.50px] lg:top-[3.18px] md:w-[16.77px]
            md:h-[16.77px] md:ml-[11px] ml-[19px] mt-[7px] lg:mt-[2px] lg:ml-[2px] md:mt-[12px]' src={flagpage1} alt="" />
); 
          handleBalance(<div className="text-neutral-500 lg:text-xl md:text-[13px] text-[9px]
          font-medium  md:leading-3 leading-tight">
           (0.00)
         </div>
)
          }}
            className="lg:pl-2.5 md:w-[214.84px] border border-b mt-[0.0px] 
             h-[30px] lg:h-[45px] lg:w-[370px] lg:pb-[7.73px] bg-white shadow 
             justify-start items-center md:h-[35px] lg:mt-[-3px] flex-row pl-2 md:pl-2 gap-[5px] 
               md:gap-[5px] lg:gap-[5px] md:pt-1   inline-flex">
              
                
                  
                  
                  
                    <img className='lg:w-[28.77px] w-3 lg:h-[26.09px]
                    h-3 lg:left-[0.50px] lg:top-[3.18px] md:w-[16.77px]
                    md:h-[16.77px] ' src={flagpage1} alt="" />
                  
                
                <div className="text-neutral-500 lg:text-xl md:text-[13px] text-[9px]
                 font-medium  md:leading-3 leading-tight">
                  USD Wallet (0.00)
                </div>
              
            </div>
            <div onClick={() => {
              setIsOpen5((prev) => !prev);
              if (isOpen5) {
                // Set isOpen5 to false when it's true
                setIsOpen5(true);
              }
          
              handleSelect(                  <img
                    src={flagpage2}
                    className="lg:w-[29.27px] w-3 md:h-[16.77px] md:w-[16.77px]
                      lg:h-[29.27px] ml-[19px] mt-[7px] md:ml-[11px] md:mt-[12px] h-3 lg:mt-[2px] lg:ml-[2px] "
                    alt=""
                  />
); 
            handleBalance(                 <div className="text-neutral-500 lg:text-xl text-[9px] md:text-[13px]
            font-medium  md:leading-3 leading-tight">
            (0.00)
           </div>
)
          }} 
            className="lg:pl-2.5 lg:h-[45px] border border-b md:w-[214.84px] pl-2 md:pl-2 h-[30px] 
            justify-start items-center lg:pt-[7px] lg:w-[370px] lg:pb-[7.73px] bg-white 
            shadow md:h-[35px]  gap-[5px] md:gap-[5px] lg:gap-[5px] flex-row 
             md:pt-1  inline-flex">
              
                <div>
                  <img
                    src={flagpage2}
                    className="lg:w-[29.27px] w-3 md:h-[16.77px] md:w-[16.77px]
                     lg:mt-[-1px] lg:h-[29.27px] h-3 lg:left-0 lg:top-0 "
                    alt=""
                  />
                  </div>

                 <div className="text-neutral-500 lg:text-xl text-[9px] md:text-[13px]
                 font-medium  md:leading-3 leading-tight">
                  EUR Wallet (0.00)
                </div>
              
            </div>
            <div onClick={() => {
              setIsOpen5((prev) => !prev);
              if (isOpen5) {
                // Set isOpen5 to false when it's true
                setIsOpen5(true);
              }
          
              handleSelect(                  <img  className="lg:w-[29.27px] w-3 h-3
                   lg:h-[29.27px] lg:left-[0.50px] lg:top-[0.51px]
                   md:w-[16.77px] md:h-[16.77px] ml-[19px] mt-[7px]
                   lg:mt-[2px] lg:ml-[2px] md:ml-[11px] md:mt-[12px] " src={flagpage3} alt="" />
); 
            handleBalance(                <div className="text-neutral-500 lg:text-xl text-[9px] md:text-[13px] font-medium 
            md:leading-3 leading-tight">
            (0.00)
           </div>
)
          }} className="lg:pl-2.5
             lg:w-[370px] md:w-[214.84px] pl-2 md:pl-2 border border-b lg:h-[45px] h-[30px]
             justify-start items-center lg:pt-[7px] lg:pb-[7.73px] bg-white shadow 
               md:h-[35px] flex-row gap-[5px]
                lg:gap-[5px] md:gap-[5px] md:pt-1 inline-flex">
              
                
                  <img  className="lg:w-[29.27px] w-3 h-3
                   lg:h-[29.27px] lg:left-[0.50px] lg:top-[0.51px]
                   md:w-[16.77px] md:h-[16.77px]  " src={flagpage3} alt="" />
                  

                
                <div className="text-neutral-500 lg:text-xl text-[9px] md:text-[13px] font-medium 
                 md:leading-3 leading-tight">
                  GBP Wallet (0.00)
                </div>
              
            </div>
            <div onClick={() => {
              setIsOpen5((prev) => !prev);
              if (isOpen5) {
                // Set isOpen5 to false when it's true
                setIsOpen5(true);
              }
          
              handleSelect( <img className='lg:w-[29.27px] ml-[19px] mt-[7px] lg:h-[29.27px] lg:left-[0.50px] 
                  lg:top-[0.51px] h-3 w-3 md:w-[16.77px] md:h-[16.77px]
                  md:ml-[11px] md:mt-[12px] lg:mt-[2px] lg:ml-[2px]' src={flagpage4} alt="" />
); 
            handleBalance(                <div className="text-neutral-500 lg:text-xl text-[9px] md:text-[13px] font-medium 
            md:leading-3 leading-tight">
            (0.00)
           </div>
)
          }} className="lg:pl-2.5 md:w-[214.84px] border border-b lg:pt-[7px] lg:pb-[7.73px]
             lg:h-[45px] h-[30px] justify-start items-center lg:gap-[5px] lg:w-[370px] bg-white shadow
              md:h-[35px] pl-2 md:pl-2
               md:pt-1  flex-row gap-[5px] md:gap-[5px] inline-flex">
              

                  <img className='lg:w-[29.27px] lg:h-[29.27px] lg:left-[0.50px] 
                  lg:top-[0.51px] h-3 w-3 md:w-[16.77px] md:h-[16.77px]
                  ' src={flagpage4} alt="" />
                
                <div className="text-neutral-500 lg:text-xl text-[9px] md:text-[13px] font-medium 
                 md:leading-3 leading-tight">
                  AUD Wallet (0.00)
                </div>
              
            </div>
            <div onClick={() => {
              setIsOpen5((prev) => !prev);
              if (isOpen5) {
                // Set isOpen5 to false when it's true
                setIsOpen5(true);
              }
          
              handleSelect(  <img className="lg:w-[29.27px] ml-[19px] mt-[7px] md:w-[16.77px] 
              md:h-[16.77px] w-3 h-3 lg:mt-[2px] lg:ml-[2px]
                   lg:h-[29.27px]
                   md:ml-[11px] md:mt-[12px]  " src={flagpage5} alt="" />
); 
            handleBalance( <div className="text-neutral-500 lg:text-xl text-[9px] md:text-[13px] font-medium  md:leading-3 leading-tight">
            (0.00)
          </div>
)
          }} className="lg:pl-2.5 md:w-[214.84px] border border-b lg:pt-[7px] lg:w-[370px] lg:h-[45px] h-[30px]
             justify-start items-center lg:pb-[7.73px] bg-white shadow lg:gap-[5px] md:h-[35px]
               flex-row gap-[5px] md:gap-[5px] md:pt-1 pl-2 md:pl-2 inline-flex">
              
                
                  <img className="lg:w-[29.27px]  md:w-[16.77px] md:h-[16.77px] w-3 h-3 
                   lg:h-[29.27px] lg:left-[0.50px] 
                  lg:top-[0.51px] md:left-0 md:top-[0.52px]  " src={flagpage5} alt="" />

                <div className="text-neutral-500 lg:text-xl text-[9px] md:text-[13px] font-medium  md:leading-3 leading-tight">
                  KES Wallet (0.00)
                </div>
                
            </div>
            
          </div>
)}
{/* </div> */}

            </div>
          
            </div>
            



    {/* filter by date and product*/}
    <div className={`${toggleSideBar
  ? " md:w-[550px] "
  : "  md:w-full"} w-full h-6 pl-[0.33px] mt-[2px] lg:mt-[30px]  md:py-[11px] pr-[86.66px] py-[2.67px]
    lg:h-[72px] lg:pl-4 lg:pr-[459.30px] lg:gap-[50.53px] lg:py-[11px]
    md:h-[41.25px] md:pl-[9.17px] md:pr-[277.40px] md:pt-[8.39px] lg:w-full
    md:pb-[6.40px] bg-white shadow border-t border-b border-black
    border-opacity-30 justify-start items-center gap-[52.80px] inline-flex`}>
    

  
  
  {/* filter by date */}

  <div onClick={() => {
  setCalender((prev) => !prev);
  setIsOpen5(false)
  setIsOpen1(false)
}}  className={`cursor-pointer ${styles.filter}  ${
  isDarkMode ? "border" : ""} flex  md:gap-[6px] items-center justify-center md:w-[145px] 
  lg:w-[170px] lg:mt-[1px] gap-[1px]  relative
   px-[2px] rounded-[3px] md:px-[8px] mt-[-1px] md:mt-[1px] flex-row`}>
        <div class="text-[#04177f] text-[9px] lg:text-[20px] flex items-center md:text-[16px] 
        whitespace-nowrap font-bold relative">Filter by Date</div>
        <div class="w-4 h-4 lg:h-6 lg:mt-1 lg:w-6 md:w-[15.75px] md:h-[15.75px] justify-center items-center inline-flex">
            <img src="./Images/Dashboardimages/dateImg.png" className=" md:mt-[1px] lg:mt-[-2px]
             mt-[-2px] w-[12px] h-[12px] md:w-[17px] md:h-[17px] lg:w-[20px] lg:h-[20px] relative" alt="" />

        
        </div>

        </div>

    
    

        {/* filter by product */}
        <div className='flex flex-col cursor-pointer relative'>
        <div  onClick={() => {
   setIsOpen1((prev) => !prev);
   setCalender(false)
   setIsOpen5(false)
 }} class=" relative justify-start items-center gap-[5.73px] lg:gap-2.5 inline-flex">
            <div class="justify-start items-center lg:gap-[5px] gap-[2.86px] flex">
                <div class="w-[11.37px] h-[11.37px] lg:w-[19.85px] lg:h-[19.85px] justify-center items-center flex">
                    <div class="w-[11.37px] h-[11.37px]  md:w-[20px] md:h-[19px] lg:w-[19.85px] lg:h-[19.85px] relative">
                        <img className='w-[11.37px] h-[11.37px] md:w-[20px] md:h-[19px] lg:w-[19.85px] lg:h-[19.85px]' src={menusales} alt="" />
                    </div>
                </div>
                <div   className="text-neutral-500 whitespace-nowrap lg:whitespace-nowrap lg:text-[20px]
                 md:mt-[-1px] text-[10px] md:text-[16px] md:whitespace-nowrap font-semibold ">{selectedProduct}</div>
            </div>
            <div class="w-[11.37px] h-[11.37px] md:w-[18px] md:h-[18px] lg:w-[19.85px] lg:h-[19.85px] justify-center items-center flex">
                <div  class="w-[11.37px] h-[11.37px] md:w-[17px] md:h-[17px] lg:w-[19.85px] lg:h-[19.85px] relative">
                                    {isOpen1 ? (
   <img src={arrow44} alt="Arrow44" />
 ) : (
   <img src={arrow11} alt="arrow11" />
 )}

                    
                </div>
            </div>
        </div>

        {/*filter by product dropdown */}
        {isOpen1 && (
  <div className="flex absolute cursor-pointer lg:h-[300px]  md:h-[150px] h-[200px] md:top-[32px] 
   lg:top-[43px]  top-[19px] flex-col">
    <div class="w-44 h-[29px] md:w-[200px] lg:w-[230px] md:h-[35px] lg:h-[40px]  bg-white shadow">
        
        <div class="w-[199.37px] ml-[5px] md:w-[199.37px] lg:w-[196px] justify-start items-center inline-flex">
            <div onClick={() => {
             
    setIsOpen2((prev) => !prev);
    setIsOpen3(false); setIsOpen4(false);setIsOpen1(false);
  handleClick('Airtime Top-up'); }}class="w-[186.20px] text-neutral-500 justify-start md:w-[131px] 
   items-center text-[9px] md:text-[12px] lg:text-[16px] font-medium  md:leading-3 leading-[10.48px] flex">Airtime Top-up</div>
        </div>
    </div>
    <hr class="bg-slate-500 h-[1px] w-[176px] Lg:w-[198px]"></hr>
    <div class="w-44 h-[29px] md:w-[200px] md:h-[35px] lg:w-[230px] lg:h-[40px] bg-white shadow">
        
        <div class="w-[199.37px] ml-[5px] md:w-[199.37px]  justify-start items-center inline-flex">
            <div onClick={() => {
    setIsOpen3((prev) => !prev);
    setIsOpen2(false); setIsOpen4(false); setIsOpen1(false);
handleClick('Data Top-up'); }} class="w-[186.20px] text-neutral-500 text-[9px] md:text-[12px] md:w-[131px] items-center lg:text-[16px] font-medium  md:leading-3 leading-[10.48px]">Data Top-up</div>
        </div>
    </div>
    <hr class="bg-slate-500 h-[1px] w-[176px] lg:w-[198px]"></hr>
    <div class="w-44 h-[29px] md:w-[200px] lg:h-[40px] lg:w-[230px] md:h-[35px] bg-white shadow">
        
        <div class="w-[199.37px] ml-[5px] md:w-[199.37px]  justify-start items-center inline-flex">
            <div onClick={() => {
    setIsOpen4((prev) => !prev);
    setIsOpen3(false); setIsOpen2(false); setIsOpen1(false);
                handleClick('Bills Payment'); }}  class="w-[131.60px] text-neutral-500 text-[9px] md:text-[12px] md:w-[131px] items-center lg:text-[16px] font-medium  md:leading-3 leading-[10.48px]">Bills Payments</div>
        </div>
    </div>
    <hr class="bg-slate-500 h-[1px] w-[176px] lg:w-[198px]"></hr>
  </div>
)}

        </div>
    </div>
    


    { calender && <div className="mt-[257px] md:mt-[336px] absolute  z-50 lg:mt-[557px]"><Calender/></div> }
   
    <div className="mt-[-17%] lg:mt-[-3%] md:mt-[-13%]  mb-[10%]">


    
    
      {/* ==============================Sale Analysis Indicator====================== */}


      
      
      <div
        className={`${styles.INnOUT} my-[10%] mt-[55px] md:mt-[100px] flex lg:mt-[5%] lg:items-center`}
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
          <div className="text-center">
                {selected === "NGN" ? "₦0.00" : "0.00"}
                </div>
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
          <div className="text-center">0</div>
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
          <div className="text-center">
                {selected === "NGN" ? "₦0.00" : "0.00"}
                </div>
        </div>
      </div>

      <div className="flex lg:mt-[-48px] mt-[-0px] md:mt-[-20px] items-center text-neutral-500 gap-[10px]">
        <p className={styles.InOutText}>Sales Analysis</p>
        <img
          className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
          src="./Images/Dashboardimages/arrowright.png"
          alt="/"
        />
      </div>

      </div>

     
 {/* product, quantity and total amount */}
    <div class="flex md:w-full w-full border-opacity-100 lg:mt-[-80px] mt-[-22px]
     md:mt-[-45px] lg:w-full shadow border-black flex-col">
    <div class="w-full h-[25px] lg:pr-0 pl-[8.67px] pr-[1.33px] pt-[8.17px] pb-[6.83px]
     md:w-full lg:w-full lg:pl-[23px]
     lg:h-[42px] md:h-[24.06px]  md:pl-[14.90px] md:pr-[2.29px]
      md:pt-[6.32px] md:pb-[5.74px] bg-indigo-200 justify-evenly
       lg:justify-between md:justify-evenly items-center inline-flex">
        <div class="self-stretch md:justify-between md:w-full lg:justify-between 
        lg:gap-[300px]  lg:w-full justify-start items-start gap-[66px] md:gap-[113.44px] inline-flex">
            <div class="w-[56.33px] md:w-[96.82px] lg:w-full text-black text-[8px] md:text-[12px] lg:text-[16px] font-semibold  md:leading-3 lg:leading-tight  leading-[10.40px]">Products</div>
            <div class="w-[53.33px] md:w-[91.67px] lg:w-full text-black text-[8px] md:text-[12px] lg:text-[16px] font-semibold  md:leading-3 lg:leading-tight  leading-[10.40px]">Quantity</div>
            <div class="w-[60.33px] md:w-[103.70px] lg:w-full text-black text-[8px] md:text-[12px] lg:text-[16px] font-semibold md:leading-3 lg:leading-tight leading-[10.40px]">Total Amount</div>
        </div>
    </div>
    <div class="w-[312px] lg:h-[101px]  h-[33.67px] md:w-full md:h-[57.86px] "></div>
  </div>










{/*main contact us */}
<div className=' '>
<footer className="
 flex  justify-center   text-center gap-[20px] 
 mt-[370px] mb-[50px] md:mt-[480px] lg:mb-[30px]  
  z-index-2 onset-[500px] lg:mt-[760px]">
            <p className="text-[8px] md:text-[12px] lg:text-[12px]  font-[500] leading-[9.1px] mt-[5px] lg:mt-[13px]">
              You need help?
            </p>

            <Link to="/ContactUs">
              <div
                className={`${
                  isDarkMode ? "border " : "bg-[#04177f]"
                } text-[8px] p-1 text-white rounded-[7px] w-[70px] lg:w-[100px] lg:text-[12px]`}
              >
                Contact Us
              </div>
            </Link>
          </footer>
          </div>









{/* airtime top-up dropdown */}
{isOpen2 && (
  <div className='h-[1110px] lg:h-full'>
  <div
  className={`${styles.viewTransact} ${
    isDarkMode ? "bg-black border" : "bg-white"
  }`}
  >
  
  
  <div className="flex  justify-start items-center lg:w-full relative bg-white  md:mt-[-655px]
    lg:mt-[-967px] mt-[-526px] lg:h-[1100px] md:h-[700px] h-[453px] lg:mb-80 md:mb-40 mb-40 border-b-[1.2px] flex-col">
  <div className={`${  
    toggleSideBar
  ? "lg:gap-[325px]"
  : "lg:gap-[400px]"}
  lg:w-full md:w-full md:h-[70.86px] md:pl-[14.90px]  md:pr-[9.29px]  lg:h-[101px] 
  lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px]  pr-[1.33px] pt-3 pb-[11.67px] bg-white 
  justify-between md:justify-between
   lg:justify-start 
  items-center inline-flex`}>
      
          <div class="lg:w-[100px] lg:text-base md:w-[96.82px] md:whitespace-nowrap  md:text-[12px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[8px] font-medium leading-[10.40px]">MTN VTU</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium leading-[10.40px]">100</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[60.33px] text-black text-[8px] font-medium leading-[10.40px]">(₦10,000.00)</div>
      
  </div>
  <div class={`${
      toggleSideBar
      ? "lg:gap-[325px]"
      : "lg:gap-[400px]"}
    lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[9.29px] lg:h-[101px]
   lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.66px] bg-white 
   justify-between md:justify-between lg:justify-start  items-center inline-flex`}>
      
          <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[12px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[8px] font-medium leading-[10.40px]">MTN SNS</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium leading-[10.40px]">100</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[60.33px] text-black text-[8px] font-medium leading-[10.40px]">(₦10,000.00)</div>
      
  </div>
  <div class={`${
      toggleSideBar
      ? "lg:gap-[325px]"
      : "lg:gap-[400px]"}
    lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[9.29px]
   lg:h-[101px] lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px]
    pt-3 pb-[11.67px] bg-white justify-between md:justify-between  md:whitespace-nowrap lg:justify-start  items-center inline-flex`}>
      
          <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[12px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[8px] font-medium  leading-[10.40px]">AIRTEL VTU</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium  leading-[10.40px]">100</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[60.33px] text-black text-[8px] font-medium  leading-[10.40px]">(₦10,000.00)</div>
      </div>
  
  <div class={`${
      toggleSideBar
      ? "lg:gap-[325px]"
      : "lg:gap-[400px]"}
    lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[9.29px]
   lg:h-[101px] lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px]
    pt-3 pb-[11.67px] bg-white justify-between md:justify-between lg:justify-start md:whitespace-nowrap
     items-center inline-flex`}>
      
          <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[12px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[8px] font-medium  leading-[10.40px]">AIRTEL SNS</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium  leading-[10.40px]">100</div>
          <div class="lg:w-[100px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[12px] md:leading-3 w-[60.33px] text-black text-[8px] font-medium  leading-[10.40px]">(₦10,000.00)</div>
      
  </div>
  <div class={`${
      toggleSideBar
      ? "lg:gap-[325px]"
      : "lg:gap-[400px]"}
    lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[9.29px] lg:h-[101px]
   lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-2 pb-[7.66px] bg-white
    justify-between md:justify-between lg:justify-start  md:whitespace-nowrap items-center inline-flex`}>
      
          <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[12px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[7px] font-medium  leading-[9.10px]">GLO VTU</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium  leading-[10.40px]">100</div>
          <div class="lg:w-[100px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[12px] md:leading-3 w-[60.33px] text-black text-[8px] font-medium  leading-[10.40px]">(₦10,000.00)</div>
      
  </div>
  <div class={`${
      toggleSideBar
      ? "lg:gap-[325px]"
      : "lg:gap-[400px]"}
    lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[9.29px] lg:h-[101px]
   lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] lg:justify-start  pr-[1.33px] pt-2 pb-[7.67px] bg-white
    justify-between md:justify-between md:whitespace-nowrap items-center inline-flex`}>
      
          <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[12px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[7px] font-medium leading-[9.10px]">GLO SNS</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium leading-[10.40px]">100</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[60.33px] text-black text-[8px] font-medium leading-[10.40px]">(₦10,000.00)</div>
      
  </div>
  <div class={`${
      toggleSideBar
      ? "lg:gap-[325px]"
      : "lg:gap-[400px]"}
    lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[9.29px] lg:h-[101px] 
  lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-2 pb-[7.67px] bg-white
   justify-between md:justify-between items-center lg:justify-start  md:whitespace-nowrap inline-flex`}>
      
          <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[12px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[7px] font-medium  leading-[9.10px]">9MOBILE VTU</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium  leading-[10.40px]">100</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[60.33px] text-black text-[8px] font-medium  leading-[10.40px]">(₦10,000.00)</div>
      
  </div>
  <div class={`${
      toggleSideBar
      ? "lg:gap-[325px]"
      : "lg:gap-[400px]"}
    lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[9.29px] lg:h-[101px]
   lg:pl-[26px] lg:pr-1  w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-2 pb-[7.67px] bg-white
    justify-between md:justify-between lg:justify-start  md:whitespace-nowrap items-center inline-flex`}>
      
          <div class="lg:w-[100px] lg:text-base lg:leading-tight md:w-[96.82px]  md:text-[12px] md:leading-3 w-[56.33px] text-black text-[7px] font-medium leading-[9.10px]">9MOBILE SNS</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium leading-[10.40px]">100</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[60.33px] text-black text-[8px] font-medium leading-[10.40px]">(₦10,000.00)</div>
      
  </div>
  <div class={`${
      toggleSideBar
      ? "lg:gap-[325px]"
      : "lg:gap-[400px]"}
    lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[9.29px] lg:h-[101px] lg:pl-[26px]
   lg:pr-1  w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-[7px] pb-[6.67px] bg-white justify-between
   md:justify-between lg:justify-start  md:whitespace-nowrap items-center inline-flex`}>
      
          <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[12px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[8px] font-medium leading-[10.40px]">SMILE AIRTIME</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium leading-[10.40px]">100</div>
          <div class="lg:w-[100px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[12px] md:leading-3 w-[60.33px] text-black text-[8px] font-medium leading-[10.40px]">(₦10,000.00)</div>
      
  </div>
  <div class={`${
      toggleSideBar
      ? "lg:gap-[325px]"
      : "lg:gap-[400px]"}
    lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[9.29px] lg:h-[101px] lg:pl-[26px]
   lg:pr-1  w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.66px] bg-white justify-between
   md:justify-between lg:justify-start items-center inline-flex `}>
      
          <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[11px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[8px] font-medium leading-[10.40px]">INTERNATIONAL AIRTIME</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium leading-[10.40px]">100</div>
          <div class="lg:w-[100px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[12px] md:leading-3 w-[60.33px] text-black text-[8px] font-medium leading-[10.40px]">(₦10,000.00)</div>
      </div>
  
  
  
      <footer className="flex justify-center  text-center gap-[20px] mt-[100px] mb-[50px]
       md:mt-[200px] lg:mb-[30px] lg:mt-[185px]">
              <p className="text-[8px] md:text-[12px] lg:text-[12px]  font-[500] leading-[9.1px] mt-[5px] lg:mt-[13px]">
                You need help?
              </p>
  
              <Link to="/ContactUs">
                <div
                  className={`${
                    isDarkMode ? "border " : "bg-[#04177f]"
                  } text-[8px] p-1 text-white md:text-[10px] rounded-[8px] lg:w-[100px] w-[70px] lg:text-[12px]`}
                >
                  Contact Us
                </div>
              </Link>
            </footer>
            </div>
  </div>
  </div>
  
)}





{/* data top-up dropdown */}
{isOpen3 && (
  <div className=' bg-white  lg:h-full  w-full '>


  <div className="flex  justify-start items-center lg:w-full shadow relative bg-white  md:mt-[-658px]
    lg:mt-[-967px] mt-[-527px] lg:h-[1590px] md:h-[1390px]  h-[1050px]
     border lg:mb-80 md:mb-60 mb-40 border-b-[1.2px] flex-col">
  <div className={`${  
    toggleSideBar
  ? "lg:gap-[325px]"
  : "lg:gap-[400px]"}
  lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px]  lg:h-[101px] 
  lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px]  pr-[1.33px] pt-3 pb-[11.67px] bg-white 
  justify-between md:justify-between
   lg:justify-start 
  items-center inline-flex`}>
      
          <div class="lg:w-[100px] lg:text-base md:w-[96.82px] md:whitespace-nowrap  md:text-[12px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[8px] font-medium leading-[10.40px]">MTN SME</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium leading-[10.40px]">100GB</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[60.33px] text-black text-[8px] font-medium leading-[10.40px]">(₦10,000.00)</div>
      
  </div>
  <div class={`${
      toggleSideBar
      ? "lg:gap-[325px]"
      : "lg:gap-[400px]"}
    lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] lg:h-[101px]
   lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.66px] bg-white 
   justify-between md:justify-between lg:justify-start  items-center inline-flex`}>
      
          <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[12px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[8px] font-medium leading-[10.40px]">MTN SME2</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium leading-[10.40px]">100GB</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[60.33px] text-black text-[8px] font-medium leading-[10.40px]">(₦10,000.00)</div>
      
  </div>
  <div class={`${
      toggleSideBar
      ? "lg:gap-[325px]"
      : "lg:gap-[400px]"}
    lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px]
   lg:h-[101px] lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px]
    pt-3 pb-[11.67px] bg-white justify-between md:justify-between  md:whitespace-nowrap lg:justify-start  items-center inline-flex`}>
      
          <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[12px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[8px] font-medium  leading-[10.40px]">MTN CG</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium  leading-[10.40px]">100GB</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[60.33px] text-black text-[8px] font-medium  leading-[10.40px]">(₦10,000.00)</div>
      </div>
  
  <div class={`${
      toggleSideBar
      ? "lg:gap-[325px]"
      : "lg:gap-[400px]"}
    lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px]
   lg:h-[101px] lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px]
    pt-3 pb-[11.67px] bg-white justify-between md:justify-between lg:justify-start md:whitespace-nowrap
     items-center inline-flex`}>
      
          <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[12px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[8px] font-medium  leading-[10.40px]">MTN GIFTING</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium  leading-[10.40px]">100GB</div>
          <div class="lg:w-[100px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[12px] md:leading-3 w-[60.33px] text-black text-[8px] font-medium  leading-[10.40px]">(₦10,000.00)</div>
      
  </div>
  <div class={`${
      toggleSideBar
      ? "lg:gap-[325px]"
      : "lg:gap-[400px]"}
    lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] lg:h-[101px]
   lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-2 pb-[7.66px] bg-white
    justify-between md:justify-between lg:justify-start  md:whitespace-nowrap items-center inline-flex`}>
      
          <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[12px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[7px] font-medium whitespace-nowrap leading-[9.10px]">MTN DIRECT <br/> COUPON</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium  leading-[10.40px]">100GB</div>
          <div class="lg:w-[100px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[12px] md:leading-3 w-[60.33px] text-black text-[8px] font-medium  leading-[10.40px]">(₦10,000.00)</div>
      
  </div>
  <div class={`${
      toggleSideBar
      ? "lg:gap-[325px]"
      : "lg:gap-[400px]"}
    lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] lg:h-[101px]
   lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] lg:justify-start  pr-[1.33px] pt-2 pb-[7.67px] bg-white
    justify-between md:justify-between md:whitespace-nowrap items-center inline-flex`}>
      
          <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[12px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[7px] font-medium whitespace-nowrap leading-[9.10px]">MTN GENERAL<br /> BUNDLES</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium leading-[10.40px]">100GB</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[60.33px] text-black text-[8px] font-medium leading-[10.40px]">(₦10,000.00)</div>
      
  </div>
  <div class={`${
      toggleSideBar
      ? "lg:gap-[325px]"
      : "lg:gap-[400px]"}
    lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] lg:h-[101px] 
  lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-2 pb-[7.67px] bg-white
   justify-between md:justify-between items-center lg:justify-start  md:whitespace-nowrap inline-flex`}>
      
          <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[12px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[7px] font-medium  leading-[9.10px]">AIRTEL CG</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium  leading-[10.40px]">100GB</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[60.33px] text-black text-[8px] font-medium  leading-[10.40px]">(₦10,000.00)</div>
      
  </div>
  <div class={`${
      toggleSideBar
      ? "lg:gap-[325px]"
      : "lg:gap-[400px]"}
    lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] lg:h-[101px] lg:pl-[26px]
   lg:pr-1  w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.66px] bg-white justify-between
   md:justify-between lg:justify-start items-center inline-flex `}>
      
          <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[11px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[8px] font-medium whitespace-nowrap leading-[10.40px]">AIRTEL GIFTING</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium leading-[10.40px]">100GB</div>
          <div class="lg:w-[100px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[12px] md:leading-3 w-[60.33px] text-black text-[8px] font-medium leading-[10.40px]">(₦10,000.00)</div>
      </div>
  
      <div class={`${
      toggleSideBar
      ? "lg:gap-[325px]"
      : "lg:gap-[400px]"}
    lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] lg:h-[101px] lg:pl-[26px]
   lg:pr-1  w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.66px] bg-white justify-between
   md:justify-between lg:justify-start items-center inline-flex `}>
      
          <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[11px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[8px] font-medium whitespace-nowrap leading-[10.40px]">AIRTEL GENERAL<br/> BUNDLE</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium leading-[10.40px]">100GB</div>
          <div class="lg:w-[100px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[12px] md:leading-3 w-[60.33px] text-black text-[8px] font-medium leading-[10.40px]">(₦10,000.00)</div>
      </div>

      <div class={`${
      toggleSideBar
      ? "lg:gap-[325px]"
      : "lg:gap-[400px]"}
    lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] lg:h-[101px] lg:pl-[26px]
   lg:pr-1  w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.66px] bg-white justify-between
   md:justify-between lg:justify-start items-center inline-flex `}>
      
          <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[11px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[8px] font-medium leading-[10.40px]">GLO CG</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium leading-[10.40px]">100GB</div>
          <div class="lg:w-[100px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[12px] md:leading-3 w-[60.33px] text-black text-[8px] font-medium leading-[10.40px]">(₦10,000.00)</div>
      </div>

      <div class={`${
      toggleSideBar
      ? "lg:gap-[325px]"
      : "lg:gap-[400px]"}
    lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] lg:h-[101px] lg:pl-[26px]
   lg:pr-1  w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.66px] bg-white justify-between
   md:justify-between lg:justify-start items-center inline-flex `}>
      
          <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[11px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[8px] font-medium whitespace-nowrap leading-[10.40px]">GLO GIFTING</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium leading-[10.40px]">100GB</div>
          <div class="lg:w-[100px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[12px] md:leading-3 w-[60.33px] text-black text-[8px] font-medium leading-[10.40px]">(₦10,000.00)</div>
      </div>

      <div class={`${
      toggleSideBar
      ? "lg:gap-[325px]"
      : "lg:gap-[400px]"}
    lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] lg:h-[101px] lg:pl-[26px]
   lg:pr-1  w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.66px] bg-white justify-between
   md:justify-between lg:justify-start items-center inline-flex `}>
      
          <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[11px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[8px] font-medium whitespace-nowrap leading-[10.40px]">GLO GENERAL<br/> BUNDLES</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium leading-[10.40px]">100GB</div>
          <div class="lg:w-[100px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[12px] md:leading-3 w-[60.33px] text-black text-[8px] font-medium leading-[10.40px]">(₦10,000.00)</div>
      </div>

      <div class={`${
      toggleSideBar
      ? "lg:gap-[325px]"
      : "lg:gap-[400px]"}
    lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] lg:h-[101px] lg:pl-[26px]
   lg:pr-1  w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.66px] bg-white justify-between
   md:justify-between lg:justify-start items-center inline-flex `}>
      
          <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[11px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[8px] font-medium whitespace-nowrap leading-[10.40px]">9MOBILE SME</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium leading-[10.40px]">100GB</div>
          <div class="lg:w-[100px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[12px] md:leading-3 w-[60.33px] text-black text-[8px] font-medium leading-[10.40px]">(₦10,000.00)</div>
      </div>

      <div class={`${
      toggleSideBar
      ? "lg:gap-[325px]"
      : "lg:gap-[400px]"}
    lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] lg:h-[101px] lg:pl-[26px]
   lg:pr-1  w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.66px] bg-white justify-between
   md:justify-between lg:justify-start items-center inline-flex `}>
      
          <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[11px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[8px] font-medium whitespace-nowrap leading-[10.40px]">9MOBILE CG</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium leading-[10.40px]">100GB</div>
          <div class="lg:w-[100px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[12px] md:leading-3 w-[60.33px] text-black text-[8px] font-medium leading-[10.40px]">(₦10,000.00)</div>
      </div>

      <div class={`${
      toggleSideBar
      ? "lg:gap-[325px]"
      : "lg:gap-[400px]"}
    lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] lg:h-[101px] lg:pl-[26px]
   lg:pr-1  w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.66px] bg-white justify-between
   md:justify-between lg:justify-start items-center inline-flex `}>
      
          <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[11px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[8px] font-medium whitespace-nowrap leading-[10.40px]">9MOBILE GENERAL<br/> BUNDLES</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium leading-[10.40px]">100GB</div>
          <div class="lg:w-[100px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[12px] md:leading-3 w-[60.33px] text-black text-[8px] font-medium leading-[10.40px]">(₦10,000.00)</div>
      </div>

      <div class={`${
      toggleSideBar
      ? "lg:gap-[325px]"
      : "lg:gap-[400px]"}
    lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] lg:h-[101px] lg:pl-[26px]
   lg:pr-1  w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.66px] bg-white justify-between
   md:justify-between lg:justify-start items-center inline-flex `}>
      
          <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[11px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[8px] font-medium whitespace-nowrap leading-[10.40px]">SMILE BIGGA</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium leading-[10.40px]">100GB</div>
          <div class="lg:w-[100px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[12px] md:leading-3 w-[60.33px] text-black text-[8px] font-medium leading-[10.40px]">(₦10,000.00)</div>
      </div>

      <div class={`${
      toggleSideBar
      ? "lg:gap-[325px]"
      : "lg:gap-[400px]"}
    lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] lg:h-[101px] lg:pl-[26px]
   lg:pr-1  w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.66px] bg-white justify-between
   md:justify-between lg:justify-start items-center inline-flex `}>
      
          <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[11px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[8px] font-medium whitespace-nowrap leading-[10.40px]">SMILE UNLIMITED</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium leading-[10.40px]">100GB</div>
          <div class="lg:w-[100px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[12px] md:leading-3 w-[60.33px] text-black text-[8px] font-medium leading-[10.40px]">(₦10,000.00)</div>
      </div>

      <div class={`${
      toggleSideBar
      ? "lg:gap-[325px]"
      : "lg:gap-[400px]"}
    lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] lg:h-[101px] lg:pl-[26px]
   lg:pr-1  w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.66px] bg-white justify-between
   md:justify-between lg:justify-start items-center inline-flex `}>
      
          <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[11px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[8px] font-medium whitespace-nowrap leading-[10.40px]">SMILE DAILY</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium leading-[10.40px]">100GB</div>
          <div class="lg:w-[100px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[12px] md:leading-3 w-[60.33px] text-black text-[8px] font-medium leading-[10.40px]">(₦10,000.00)</div>
      </div>

      <div class={`${
      toggleSideBar
      ? "lg:gap-[325px]"
      : "lg:gap-[400px]"}
    lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] lg:h-[101px] lg:pl-[26px]
   lg:pr-1  w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.66px] bg-white justify-between
   md:justify-between lg:justify-start items-center inline-flex `}>
      
          <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[11px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[8px] font-medium whitespace-nowrap leading-[10.40px]">SMILE WEEKLY</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium leading-[10.40px]">100GB</div>
          <div class="lg:w-[100px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[12px] md:leading-3 w-[60.33px] text-black text-[8px] font-medium leading-[10.40px]">(₦10,000.00)</div>
      </div>

      <div class={`${
      toggleSideBar
      ? "lg:gap-[325px]"
      : "lg:gap-[400px]"}
    lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] lg:h-[101px] lg:pl-[26px]
   lg:pr-1  w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.66px] bg-white justify-between
   md:justify-between lg:justify-start items-center inline-flex `}>
      
          <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[11px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[8px] font-medium whitespace-nowrap leading-[10.40px]">SMILE NIGHT</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium leading-[10.40px]">100GB</div>
          <div class="lg:w-[100px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[12px] md:leading-3 w-[60.33px] text-black text-[8px] font-medium leading-[10.40px]">(₦10,000.00)</div>
      </div>

      <div class={`${
      toggleSideBar
      ? "lg:gap-[325px]"
      : "lg:gap-[400px]"}
    lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] lg:h-[101px] lg:pl-[26px]
   lg:pr-1  w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.66px] bg-white justify-between
   md:justify-between lg:justify-start items-center inline-flex `}>
      
          <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[11px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[8px] font-medium whitespace-nowrap leading-[10.40px]">SMILEVOICE ONLY</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium leading-[10.40px]">100GB</div>
          <div class="lg:w-[100px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[12px] md:leading-3 w-[60.33px] text-black text-[8px] font-medium leading-[10.40px]">(₦10,000.00)</div>
      </div>

      <div class={`${
      toggleSideBar
      ? "lg:gap-[325px]"
      : "lg:gap-[400px]"}
    lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] lg:h-[101px] lg:pl-[26px]
   lg:pr-1  w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.66px] bg-white justify-between
   md:justify-between lg:justify-start items-center inline-flex `}>
      
          <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[11px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[8px] font-medium whitespace-nowrap leading-[10.40px]">SMILE FREEDOM</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium leading-[10.40px]">100GB</div>
          <div class="lg:w-[100px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[12px] md:leading-3 w-[60.33px] text-black text-[8px] font-medium leading-[10.40px]">(₦10,000.00)</div>
      </div>

      <div class={`${
      toggleSideBar
      ? "lg:gap-[325px]"
      : "lg:gap-[400px]"}
    lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] lg:h-[101px] lg:pl-[26px]
   lg:pr-1  w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.66px] bg-white justify-between
   md:justify-between lg:justify-start items-center inline-flex `}>
      
          <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[11px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[8px] font-medium whitespace-nowrap leading-[10.40px]">SPECTRANET DATA</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium leading-[10.40px]">100GB</div>
          <div class="lg:w-[100px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[12px] md:leading-3 w-[60.33px] text-black text-[8px] font-medium leading-[10.40px]">(₦10,000.00)</div>
      </div>

      <div class={`${
      toggleSideBar
      ? "lg:gap-[325px]"
      : "lg:gap-[400px]"}
    lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] lg:h-[101px] lg:pl-[26px]
   lg:pr-1  w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.66px] bg-white justify-between
   md:justify-between lg:justify-start items-center inline-flex `}>
      
          <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[11px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[8px] font-medium leading-[10.40px]">INTERNATIONAL<br /> DATA</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium leading-[10.40px]">100GB</div>
          <div class="lg:w-[100px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[12px] md:leading-3 w-[60.33px] text-black text-[8px] font-medium leading-[10.40px]">(₦10,000.00)</div>
      </div>


      
      <footer className="flex justify-center  text-center  gap-[20px] mt-[100px] mb-[50px]
       md:mt-[200px] lg:mb-[30px] lg:mt-[150px]">
              <p className="text-[8px] md:text-[12px] lg:text-[12px]  font-[500] leading-[9.1px] mt-[5px] lg:mt-[13px]">
                You need help?
              </p>
  
              <Link to="/ContactUs">
                <div
                  className={`${
                    isDarkMode ? "border " : "bg-[#04177f]"
                  } text-[8px] p-1 text-white rounded-[8px] lg:w-[100px] w-[70px] lg:text-[12px]`}
                >
                  Contact Us
                </div>
              </Link>
            </footer>
            </div>
  
  


</div>

)}



{/* bills payment dropdown */}
{isOpen4 && (

<div className='h-[1110px] lg:h-full'>
<div
className={`${styles.viewTransact} ${
  isDarkMode ? "bg-black border" : "bg-white"
}`}
>


<div className="flex  justify-start items-center lg:h-[1030px] md:h-[700px] h-[480px] lg:mb-80 md:mb-40  mb-40 border-b-[1.2px]
 lg:w-full relative bg-white  md:mt-[-655px]  lg:mt-[-968px] mt-[-524px] flex-col">
<div className={`${  
  toggleSideBar
? "lg:gap-[325px]"
: "lg:gap-[400px]"}
lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[9.29px]  lg:h-[101px] 
lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.67px] bg-white justify-between md:justify-between
 lg:justify-start 
items-center inline-flex`}>
    
        <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[11px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[8px] font-medium leading-[10.40px]">WAEC PIN</div>
        <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[11px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium leading-[10.40px]">100</div>
        <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[11px] md:leading-3 lg:leading-tight w-[60.33px] text-black text-[8px] font-medium leading-[10.40px]">(₦10,000.00)</div>
    
</div>
<div class={`${
    toggleSideBar
    ? "lg:gap-[325px]"
    : "lg:gap-[400px]"}
  lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[9.29px] lg:h-[101px]
 lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.66px] bg-white 
 justify-between md:justify-between lg:justify-start  items-center inline-flex`}>
    
        <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[11px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[8px] font-medium leading-[10.40px]">NECO PIN</div>
        <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[11px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium leading-[10.40px]">100</div>
        <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[11px] md:leading-3 lg:leading-tight w-[60.33px] text-black text-[8px] font-medium leading-[10.40px]">(₦10,000.00)</div>
    
</div>
<div class={`${
    toggleSideBar
    ? "lg:gap-[325px]"
    : "lg:gap-[400px]"}
  lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[9.29px]
 lg:h-[101px] lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px]
  pt-3 pb-[11.67px] bg-white justify-between md:justify-between lg:justify-start  items-center inline-flex`}>
    
        <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[11px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[8px] font-medium  leading-[10.40px]">JAMB PIN</div>
        <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[11px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium  leading-[10.40px]">100</div>
        <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[11px] md:leading-3 lg:leading-tight w-[60.33px] text-black text-[8px] font-medium  leading-[10.40px]">(₦10,000.00)</div>
    </div>

<div class={`${
    toggleSideBar
    ? "lg:gap-[325px]"
    : "lg:gap-[400px]"}
  lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[9.29px]
 lg:h-[101px] lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px]
  pt-3 pb-[11.67px] bg-white justify-between md:justify-between lg:justify-start  items-center inline-flex`}>
    
        <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[11px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[8px] font-medium  leading-[10.40px]">NABTEB PIN</div>
        <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[11px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium  leading-[10.40px]">100</div>
        <div class="lg:w-[100px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[11px] md:leading-3 w-[60.33px] text-black text-[8px] font-medium  leading-[10.40px]">(₦10,000.00)</div>
    
</div>
<div class={`${
    toggleSideBar
    ? "lg:gap-[325px]"
    : "lg:gap-[400px]"}
  lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[9.29px] lg:h-[101px]
 lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-2 pb-[7.66px] bg-white
  justify-between md:justify-between lg:justify-start  items-center inline-flex`}>
    
        <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[11px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[7px] font-medium  leading-[9.10px]">GOTV SUBSCRIPTION</div>
        <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[11px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium  leading-[10.40px]">100</div>
        <div class="lg:w-[100px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[11px] md:leading-3 w-[60.33px] text-black text-[8px] font-medium  leading-[10.40px]">(₦10,000.00)</div>
    
</div>
<div class={`${
    toggleSideBar
    ? "lg:gap-[325px]"
    : "lg:gap-[400px]"}
  lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[9.29px] lg:h-[101px]
 lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] lg:justify-start  pr-[1.33px] pt-2 pb-[7.67px] bg-white
  justify-between md:justify-between items-center inline-flex`}>
    
        <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[11px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[7px] font-medium leading-[9.10px]">DSTV SUBSCRIPTION</div>
        <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[11px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium leading-[10.40px]">100</div>
        <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[11px] md:leading-3 lg:leading-tight w-[60.33px] text-black text-[8px] font-medium leading-[10.40px]">(₦10,000.00)</div>
    
</div>
<div class={`${
    toggleSideBar
    ? "lg:gap-[325px]"
    : "lg:gap-[400px]"}
  lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[9.29px] lg:h-[101px] 
lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-2 pb-[7.67px] bg-white
 justify-between md:justify-between items-center lg:justify-start  inline-flex`}>
    
        <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[11px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[7px] font-medium  leading-[9.10px]">STARTIME SUBSCRIPTION</div>
        <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[11px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium  leading-[10.40px]">100</div>
        <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[11px] md:leading-3 lg:leading-tight w-[60.33px] text-black text-[8px] font-medium  leading-[10.40px]">(₦10,000.00)</div>
    
</div>
<div class={`${
    toggleSideBar
    ? "lg:gap-[325px]"
    : "lg:gap-[400px]"}
  lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[9.29px] lg:h-[101px]
 lg:pl-[26px] lg:pr-1  w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-2 pb-[7.67px] bg-white
  justify-between md:justify-between lg:justify-start  items-center inline-flex`}>
    
        <div class="lg:w-[100px] lg:text-base lg:leading-tight md:w-[96.82px]  md:text-[11px] md:leading-3 w-[56.33px] text-black text-[7px] font-medium leading-[9.10px]">SHOWMAX SUBSCRIPTION</div>
        <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[11px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium leading-[10.40px]">100</div>
        <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[11px] md:leading-3 lg:leading-tight w-[60.33px] text-black text-[8px] font-medium leading-[10.40px]">(₦10,000.00)</div>
    
</div>
<div class={`${
    toggleSideBar
    ? "lg:gap-[325px]"
    : "lg:gap-[400px]"}
  lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[9.29px] lg:h-[101px] lg:pl-[26px]
 lg:pr-1  w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-[7px] pb-[6.67px] bg-white justify-between
 md:justify-between lg:justify-start  items-center inline-flex`}>
    
        <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[11px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[8px] font-medium leading-[10.40px]">ELECTRICITY BILLS</div>
        <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[11px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium leading-[10.40px]">100</div>
        <div class="lg:w-[100px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[11px] md:leading-3 w-[60.33px] text-black text-[8px] font-medium leading-[10.40px]">(₦10,000.00)</div>
    
</div>
<div class={`${
    toggleSideBar
    ? "lg:gap-[325px]"
    : "lg:gap-[400px]"}
  lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[9.29px] lg:h-[101px] lg:pl-[26px]
 lg:pr-1  w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.66px] bg-white justify-between
 md:justify-between lg:justify-start  items-center inline-flex `}>
    
        <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[11px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[8px] font-medium leading-[10.40px]">BULK SMS</div>
        <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[11px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium leading-[10.40px]">100</div>
        <div class="lg:w-[100px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[11px] md:leading-3 w-[60.33px] text-black text-[8px] font-medium leading-[10.40px]">(₦10,000.00)</div>
    </div>

<div class={`${
    toggleSideBar
    ? "lg:gap-[325px]"
    : "lg:gap-[400px]"}
  lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[9.29px] lg:h-[101px] lg:pl-[26px] lg:pr-1
 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] lg:justify-start  pt-2 pb-[7.67px] bg-white
  justify-between md:justify-between items-center inline-flex`}>
    
        <div class="lg:w-[100px] lg:text-base lg:leading-tight md:w-[96.82px]  md:text-[11px] md:leading-3 w-[56.33px] text-black text-[7px] font-medium leading-[9.10px]">RECHARGE CARD PRINTING</div>
        <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[11px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium leading-[10.40px]">100</div>
        <div class="lg:w-[100px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[11px] md:leading-3 w-[60.33px] text-black text-[8px] font-medium leading-[10.40px]">(₦10,000.00)</div>
    </div>


    <footer className="flex justify-center  text-center gap-[20px] mt-[70px] mb-[50px]
     md:mt-[200px] lg:mb-[30px] lg:mt-[200px]">
            <p className="text-[8px] md:text-[12px] lg:text-[12px]  font-[500] leading-[9.1px] mt-[5px] lg:mt-[13px]">
              You need help?
            </p>

            <Link to="/ContactUs">
              <div
                className={`${
                  isDarkMode ? "border " : "bg-[#04177f]"
                } text-[8px] p-1 text-white rounded-[8px] lg:w-[100px] w-[70px] lg:text-[12px]`}
              >
                Contact Us
              </div>
            </Link>
          </footer>
          </div>
</div>
</div>
)}
  </div>

        </>
        </DashBoardLayout>
        )
        }

