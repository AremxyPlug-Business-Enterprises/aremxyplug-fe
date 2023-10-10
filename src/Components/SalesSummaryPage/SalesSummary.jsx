import React, {useState} from 'react';
import { DashBoardLayout } from '../Dashboard/Layout/DashBoardLayout';
import receiptA from "./assets/cash receipt from online shopping on mobile phone (3)A.png";
import arrowsales from "./assets/arrow-square-rightsales.png";
import flagsales from "./assets/Country Flags (5)sales.png";
import filtersales from "./assets/document-filtersales.png";
import downsales from "./assets/arrow-downsales.png";
import menusales from "./assets/menusales.png";
import squaresales from "./assets/arrow-square-rightsalesA.png";
import salesA from "./assets/arrow-downsalesA.png";
import salesB from "./assets/arrow-downsalesB.png";
import salesC from "./assets/arrow-downsalesC.png";
import salesD from "./assets/arrow-downsalesD.svg";




export default function SalesSummaryPage ()  {

    const [isOpen1, setIsOpen1] = useState(false); 
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false); 
    const [isOpen4, setIsOpen4] = useState(false);


    const toggleDropdown1 = () => { setIsOpen1(true); };

    const toggleDropdown2 = () => { setIsOpen2(true); setIsOpen3(false); setIsOpen4(false);setIsOpen1(false); }; 

     const toggleDropdown3 = () => { setIsOpen3(true); setIsOpen2(false); setIsOpen4(false); setIsOpen1(false); };

      const toggleDropdown4 = () => { setIsOpen4(true); setIsOpen3(false); setIsOpen2(false);setIsOpen1(false); };




      const [selectedProduct, setSelectedProduct] = useState('Filter by product');
      const handleClick = (product) => {
        setSelectedProduct(product); };





    return (

        <DashBoardLayout>
        <>
        <div class="flex gap-[25px] md:w-full ml-[4px] flex-col">
    <div class="w-[312px] h-[65.54px] pl-[16.72px] pr-[19.33px] py-[7.36px] md:w-full md:h-[112.29px] md:pl-[28.65px] md:pr-[34.82px] md:py-[12.60px] lg:w-full lg:h-[196px] lg:pl-[50px] lg:pr-[60.79px] lg:rounded-[20px] lg:gap-[75px] lg:py-[22px] bg-gradient-to-r from-yellow-300 to-rose-400 rounded-md justify-center items-start gap-[25.08px] md:gap-[42.97px] inline-flex">
        <div class="w-[197.63px] lg:w-full md:w-full lg:gap-[15px] self-stretch flex-col justify-start items-start md:gap-[8.59px] gap-[5.02px] flex">
            <div class="w-[160.85px] md:w-[275.57px] lg:w-[481px] text-black text-[8.08px] md:text-sm lg:text-2xl font-semibold whitespace-nowrap  uppercase">MANAGE ALL YOUR TRANSACTIONS AT A <br /> TIME WITHOUT ANY HASSLE.</div>
            <div class="w-[209px] h-[21px] md:w-full md:h-[37.24px] lg:w-[588px] lg:h-[65px] text-black text-[7px] lg:text-lg md:text-[9.17px] font-normal  lg:leading-tight md:leading-3 leading-[9.10px]">Select, filter, and manage all your transactions at a time, download all <br /> transactions stats and keep a record track.</div>
        </div>
        <img className="w-[53.24px] h-[50.16px] md:w-[91.21px] md:h-[85.94px] lg:w-[159.21px] lg:h-[150px]  " src={receiptA}  alt="" />
    </div>



{/* sales summary */}
    <div class="flex gap-[10px] flex-row">
        <div class="text-neutral-500 text-[8px] lg:text-xl md:text-xs font-semibold ">Sales Summary</div>
        <div class="w-3 h-3 md:w-[13.75px] md:h-[13.75px] justify-center items-center inline-flex">
            <img src={arrowsales} className="w-3 h-3 lg:w-10 lg:h-6 md:w-[13.75px] md:mt-[3px] md:h-[13.75px] lg:mt-[20px] relative"alt="" />
        
        </div>
    </div>
    <div class="w-[312px] h-10 pl-[63.15px] pr-[62.90px] pt-[8.38px] pb-[7.62px] lg:w-full lg:h-[120px] lg:px-[245px] lg:py-[25px] md:w-full md:h-[68.75px] md:px-[140.10px] md:py-[14.32px] bg-indigo-300 bg-opacity-20 rounded-[6.88px] md:rounded-[6.88px] justify-center items-center inline-flex">
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


                {/* available balance */}
                <div class="justify-start items-start gap-[6.30px] lg:gap-[11px]  flex">
                    <div class="text-black text-[8px] md:text-xs lg:text-xl font-semibold  md:leading-[14.90px] lg:leading-relaxed leading-[10.40px]">Available Balance</div>
                    <div class="text-neutral-500 text-[8px] lg:text-xl md:text-xs font-medium  lg:leading-relaxed md:leading-[14.90px] leading-[10.40px]">(₦50,000.00)</div>
                </div>
            </div>
            <div class="w-[13.75px] h-[13.75px] lg:w-6 lg:h-6 justify-center items-center flex">
                <div class="lg:w-[13.75px] lg:h-[13.75px] relative">
                    <img className='w-3 h-3 md:w-[11.37px] md:h-[11.37px] lg:w-[19.85px] lg:h-[19.85px]' src={downsales} alt="" />
                </div>
            </div>
        </div>
    </div>


    {/* filter by date */}
    <div class="w-[312px] h-6 pl-[0.33px] pr-[86.66px] py-[2.67px] lg:w-full lg:h-[72px] lg:pl-4 lg:pr-[459.30px] lg:gap-[50.53px] lg:py-[11px] md:w-full md:h-[41.25px] md:pl-[9.17px] md:pr-[262.40px] md:pt-[6.39px] md:pb-[6.40px] bg-white shadow border-t border-b border-black border-opacity-30 justify-start items-center gap-[52.80px] inline-flex">
        <div class="self-stretch p-[3.33px] lg:p-2.5 md:p-[5.73px] bg-white rounded-sm lg:rounded-[5px] lg:gap-[6.62px]  shadow justify-start items-center md:rounded-[2.86px] md:gap-[3.79px] gap-[2.21px] inline-flex">
            <div class="text-blue-900 text-[8px] md:text-xs lg:text-xl whitespace-nowrap font-semibold ">Filter by Date</div>
            <div class="w-3 h-3 md:w-[11.37px] md:h-[11.37px] lg:w-[19.85px] lg:h-[19.85px] justify-center items-center flex">
                <div class="w-3 h-3 md:w-[11.37px] md:h-[11.37px] lg:w-[19.85px] lg:h-[19.85px] relative">
                    <img className='w-3 h-3 md:w-[11.37px] md:h-[11.37px] lg:w-[19.85px] lg:h-[20px]' src={filtersales} alt="" />
                </div>
            </div>
        </div>
        <div class="self-stretch relative justify-start items-center gap-[5.73px] lg:gap-2.5 inline-flex">
            <div class="justify-start items-center lg:gap-[5px] gap-[2.86px] flex">
                <div class="w-[11.37px] h-[11.37px] lg:w-[19.85px] lg:h-[19.85px] justify-center items-center flex">
                    <div class="w-[11.37px] h-[11.37px] lg:w-[19.85px] lg:h-[19.85px] relative">
                        <img className='w-[11.37px] h-[11.37px] lg:w-[19.85px] lg:h-[19.85px]' src={menusales} alt="" />
                    </div>
                </div>
                <div   className="text-neutral-500 md:text-xs text-[8px] lg:text-xl md:whitespace-nowrap font-semibold ">{selectedProduct}</div>
            </div>
            <div class="w-[11.37px] h-[11.37px] lg:w-[19.85px] lg:h-[19.85px] justify-center items-center flex">
                <div onClick={toggleDropdown1} class="w-[11.37px] h-[11.37px] lg:w-[19.85px] lg:h-[19.85px] relative">
                    <img className='w-[11.37px] h-[11.37px] lg:w-[19.85px] lg:h-[19.85px] ' src={salesA} alt="" />
                </div>
            </div>
        </div>
    </div>


    {/* NGN, inflows, transactions and outflows */}
    <div class="w-[312px] h-[53.49px] md:w-full lg:w-full  lg:h-[78px] md:h-[45.05px] lg:gap-[90.50px] justify-start items-center gap-[5px] md:gap-[51.85px] inline-flex">
        <div class="p-[1.86px] lg:p-[5.65px] md:p-[3.24px] bg-indigo-300 bg-opacity-20 lg:rounded-[14.70px] lg:gap-[11.31px] rounded-[4.83px] md:rounded-lg justify-start items-start md:gap-[6.48px] gap-[3.71px] flex">
            <div class="text-black text-[10px] md:text-[5.73px] lg:text-[10px]  font-semibold ">NGN</div>
            <div class="w-[5.20px] h-[5.20px] lg:w-[15.83px] lg:h-[15.83px] md:w-[9.07px] md:h-[9.07px] justify-center items-center flex">
                <div class="w-[5.20px] h-[5.20px] lg:w-[15.83px] lg:h-[15.83px] md:w-[9.07px] md:h-[9.07px] relative">
                    <img className='w-[5.20px] h-[5.20px] lg:w-[15.83px] lg:h-[15.83px] md:w-[9.07px] md:h-[9.07px]' src={salesB} alt="" />
                </div>
            </div>
        </div>
        <div class="h-[53px] lg:h-[78px] px-[5px] py-[4.92px] md:px-[22.92px] lg:rounded-md md:w-full md:py-[8.59px] bg-emerald-100 rounded-sm md:rounded flex-col justify-center items-center gap-[1.64px] md:gap-[2.86px] inline-flex">
            <div class="justify-start items-center md:gap-[2.86px] gap-[1.64px] inline-flex">
                <div class="text-black text-[10px] md:text-[9.17px] lg:text-[16px] md:whitespace-nowrap font-medium ">Total Inflows</div>
                <div class="w-[4.92px] h-[4.92px] md:w-[8.59px] md:h-[8.59px] justify-center items-center flex">
                    <div class="w-[4.92px] h-[4.92px] md:w-[8.59px] md:h-[8.59px] relative">
                    </div>
                </div>
            </div>
            <div class="justify-start items-start gap-[1.64px] md:gap-[2.86px]  inline-flex">
                <div class="text-black text-[10px] md:text-[9.17px] lg:text-[16px] font-semibold md:leading-[11px] leading-3">₦</div>
                <div class="text-black text-[10px] md:text-[9.17px] lg:text-[16px] font-medium  md:leading-[11px] leading-3">96,001,55</div>
            </div>
        </div>
        <div class="w-[99px] px-[5px] py-[4.92px] md:w-full lg:rounded-md md:px-[22.92px] lg:px-0 md:py-[8.59px] lg:h-[78px] bg-indigo-300 bg-opacity-20 rounded-sm md:rounded flex-col justify-center items-center md:gap-[2.86px] gap-[1.64px] inline-flex">
            <div class="justify-start items-center gap-[1.64px] md:gap-[2.86px]  inline-flex">
                <div class="w-[76px] text-center text-black text-[10px] md:text-[9.17px] lg:text-[16px] md:whitespace-nowrap lg:w-full font-medium ">Total Transactions</div>
                <div class="w-[4.92px] h-[4.92px] md:w-[8.59px] md:h-[8.59px] justify-center items-center flex">
                    <div class="w-[4.92px] h-[4.92px] md:w-[8.59px] md:h-[8.59px]  relative">
                        <img className='w-[4.92px] h-[4.92px] md:w-[8.59px] md:h-[8.59px] lg:w-[15.83px] lg:h-[15.83px] ' src={salesC} alt="" />
                    </div>
                </div>
            </div>
            <div class="justify-start items-start gap-[1.64px] md:gap-[2.86px] inline-flex">
                <div class="text-black  text-[10px] md:text-[9.17px] lg:text-[16px] font-medium  md:leading-[11px] leading-3">10,000</div>
            </div>
        </div>
        <div class="w-[82px]  h-[52px] lg:h-[78px] lg:rounded-md px-[13.13px] py-[4.92px] md:w-full md:px-[22.92px] md:py-[8.59px] bg-red-200 md:rounded rounded-sm flex-col md:gap-[2.86px] justify-center items-center gap-[1.64px] inline-flex">
            <div class="justify-start items-center  md:gap-[2.86px] gap-[1.64px] inline-flex">
                <div class="text-black text-[10px] md:text-[9.17px] lg:text-[16px] md:whitespace-nowrap font-medium ">Total Outflows</div>
                <div class="w-[4.92px] h-[4.92px] md:w-[8.59px] md:h-[8.59px] origin-top-left -rotate-180 justify-center items-center flex">
                    <div class="w-[4.92px] h-[4.92px] md:w-[8.59px] md:h-[8.59px] relative">
                        <img className='w-[4.92px] h-[4.92px] md:w-[8.59px] md:h-[8.59px] lg:w-[15.83px] lg:h-[15.83px]' src={salesD} alt="" />
                    </div>
                </div>
            </div>
            <div class="justify-start items-start gap-[1.64px] md:gap-[2.86px] inline-flex">
                <div class="text-black text-[10px] md:text-[9.17px] lg:text-[16px] font-semibold md:leading-[11px] leading-3">₦</div>
                <div class="text-black text-[10px] md:text-[9.17px] lg:text-[16px] font-medium  md:leading-[11px] leading-3">96,001,55</div>
            </div>
        </div>
    </div>


    {/* sales analysis */}
    <div class="flex gap-[10px] flex-row">
        <div class="text-neutral-500 text-[8px] md:text-xs lg:text-xl  font-semibold">Sales Analysis</div>
        <div class="w-3 h-3 lg:h-6 lg:w-6 md:w-[13.75px] md:h-[13.75px] justify-center items-center inline-flex">
            <img src={squaresales} class="w-3 h-3 lg:h-6 lg:w-6 md:mt-[5px]  md:w-[13.75px] md:h-[13.75px] relative" alt="" />

        
        </div>
    </div>

    {/* product, quality and total amount */}
    <div class="flex md:w-full  border-opacity-100 lg:w-full shadow border-black flex-col">
    <div class="w-[312px] h-[25px] lg:pr-0 pl-[8.67px] pr-[1.33px] pt-[8.17px] pb-[6.83px] md:w-full lg:w-full lg:pl-[23px] lg:h-[42px] md:h-[24.06px]  md:pl-[14.90px] md:pr-[2.29px] md:pt-[6.32px] md:pb-[5.74px] bg-indigo-200 justify-end lg:justify-between md:justify-evenly items-center inline-flex">
        <div class="self-stretch md:justify-between md:w-full lg:justify-between lg:gap-[300px]  lg:w-full justify-start items-start gap-[66px] md:gap-[113.44px] inline-flex">
            <div class="w-[56.33px] md:w-[96.82px] lg:w-full text-black text-[8px] md:text-[9.17px] lg:text-[16px] font-semibold  md:leading-3 lg:leading-tight  leading-[10.40px]">Products</div>
            <div class="w-[53.33px] md:w-[91.67px] lg:w-full text-black text-[8px] md:text-[9.17px] lg:text-[16px] font-semibold  md:leading-3 lg:leading-tight  leading-[10.40px]">Quality</div>
            <div class="w-[60.33px] md:w-[103.70px] lg:w-full text-black text-[8px] md:text-[9.17px] lg:text-[16px] font-semibold md:leading-3 lg:leading-tight leading-[10.40px]">Total Amount</div>
        </div>
    </div>
    <div class="w-[312px] lg:h-[101px]  h-[33.67px] md:w-full md:h-[57.86px] opacity-70 shadow"></div>
  </div>





{/* main dropdown */}

{isOpen1 && (
  <div className="flex absolute lg:h-[300px] md:ml-[100px] left-[80px] md:left-[225px] lg:w-full md:h-[150px] h-[200px] md:top-[450px] lg:ml-[550px] lg:left-[10px] lg:top-[630px]  top-[285px] flex-col">
    <div class="w-44 h-[29px] md:w-[200px] md:h-[35px] lg:h-[40px]  bg-white shadow">
        
        <div class="w-[199.37px] ml-[5px] md:w-[199.37px] justify-start items-center inline-flex">
            <div onClick={() => {
  toggleDropdown2();
  handleClick('Airtime Top-up'); }}class="w-[186.20px] text-neutral-500 md:w-[131px] items-center text-[8.06px] md:text-[9.17px] lg:text-[15px] font-medium  md:leading-3 leading-[10.48px]">Airtime Top-up</div>
        </div>
    </div>
    <hr class="bg-slate-500 h-[1px] w-[175px]"></hr>
    <div class="w-44 h-[29px] md:w-[200px] md:h-[35pxpx] lg:h-[40px] bg-white shadow">
        
        <div class="w-[199.37px] ml-[5px] md:w-[199.37px]  justify-start items-center inline-flex">
            <div onClick={() => {toggleDropdown3();
handleClick('Data Top-up'); }} class="w-[186.20px] text-neutral-500 text-[8.06px] md:text-[9.17px] md:w-[131px] items-center lg:text-[15px] font-medium  md:leading-3 leading-[10.48px]">Data Top-up</div>
        </div>
    </div>
    <hr class="bg-slate-500 h-[1px] w-[175px]"></hr>
    <div class="w-44 h-[29px] md:w-[200px] lg:h-[40px] md:h-[35px] bg-white shadow">
        
        <div class="w-[199.37px] ml-[5px] md:w-[199.37px]  justify-start items-center inline-flex">
            <div onClick={() => {toggleDropdown4();handleClick('Bills Payment'); }}  class="w-[131.60px] text-neutral-500 text-[8.06px] md:text-[9.17px] md:w-[131px] items-center lg:text-[15px] font-medium  md:leading-3 leading-[10.48px]">Bills Payments</div>
        </div>
    </div>
    <hr class="bg-slate-500 h-[1px] w-[175px]"></hr>
  </div>
)}



{/* contact us */}
  <div className="flex justify-center items-center gap-[20px] mt-[300px] md:mt-[200px] flex-row">
  <div class="text-black text-[8px] lg:text-[12px] font-medium md:leading-[8.94px]  leading-[10.40px]">You need help?</div>
  <div class="w-[60.19px] h-[15.73px] px-[8.59px] py-[2.86px] md:w-[42.19px] lg:w-[90px] md:h-[11.73px] md:px-[8.59px] md:py-[2.86px] md:rounded-[5.16px] bg-blue-900 rounded-[5.16px] justify-center items-center gap-[5.73px] inline-flex">
    <div class="text-white text-[8px] md:text-[4.58px] lg:text-[8px] md:leading-[5.96px] font-medium leading-[10.40px]">Contact Us</div>
</div>
  </div>






{/* airtime top-up dropdown */}
{isOpen2 && (
  <div className=" flex w-full md:w-full justify-between md:left-[100px] lg:mt-[-350px] mt-[-390px] md:mt-[-310px] items-center lg:w-full gap-[30px] flex-col">
    <div className='flex w-full md:w-full lg:w-full flex-col'>
<div class="lg:w-full lg:h-[101px] lg:pl-[26px] lg:pr-1  w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.67px] md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] bg-white justify-between items-center inline-flex">
    <div class="self-stretch justify-center items-center md:gap-[135px] lg:gap-[250px] gap-[66px] inline-flex">
        <div class="w-[56.33px] text-black text-[8px] font-medium md:w-[96.82px] md:text-[9.17px] lg:w-[169px] lg:text-base lg:leading-tight md:leading-3 leading-[10.40px]">MTN VTU</div>
        <div class="w-[53.33px] text-black text-[8px] font-medium md:w-[91.67px] md:text-[9.17px] md:leading-3 lg:w-40 lg:text-base lg:leading-tight leading-[10.40px]">100</div>
        <div class="w-[60.33px] text-black text-[8px] font-medium md:w-[103.70px] md:text-[9.17px] lg:w-[181px] lg:text-base lg:leading-tight  md:leading-3 leading-[10.40px]">(₦10,000.00)</div>
    </div>
</div>
<div class="w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.66px] md:w-full md:h-[57.86px] lg:w-full lg:h-[101px] lg:pl-[26px] lg:pr-1 md:pl-[14.90px] md:pr-[2.29px] bg-white justify-between items-center inline-flex">
    <div class="self-stretch justify-center items-center md:gap-[135px] gap-[66px] lg:gap-[250px] inline-flex">
        <div class="w-[56.33px] text-black text-[8px] font-medium md:w-[96.82px] md:text-[9.17px] lg:w-[169px] lg:text-base lg:leading-tight md:leading-3 leading-[10.40px]">MTN SNS</div>
        <div class="w-[53.33px] text-black text-[8px] font-medium md:w-[91.67px] md:text-[9.17px] md:leading-3 leading-[10.40px] lg:w-40 lg:text-base lg:leading-tight ">100</div>
        <div class="w-[60.33px] text-black text-[8px] font-medium md:w-[103.70px] md:text-[9.17px] md:leading-3 leading-[10.40px] lg:w-[181px] lg:text-base lg:leading-tight">(₦10,000.00)</div>
    </div>
</div>
<div class="w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.67px] md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] bg-white lg:w-full lg:h-[101px] lg:pl-[26px] lg:pr-1 justify-between  items-center inline-flex">
    <div class="self-stretch justify-center items-center gap-[66px] md:gap-[135px] lg:gap-[250px] inline-flex">
        <div class="w-[56.33px] text-black text-[8px] font-medium md:w-[96.82px] md:text-[9.17px] lg:w-[169px] lg:text-base lg:leading-tight md:leading-3 leading-[10.40px]">AIRTEL VTU</div>
        <div class="w-[53.33px] text-black text-[8px] font-medium md:w-[91.67px] md:text-[9.17px] md:leading-3 lg:w-40 lg:text-base lg:leading-tight leading-[10.40px]">100</div>
        <div class="w-[60.33px] text-black text-[8px] font-medium md:w-[103.70px] md:text-[9.17px] md:leading-3 leading-[10.40px] lg:w-[181px] lg:text-base lg:leading-tight ">(₦10,000.00)</div>
    </div>
</div>
<div class="w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.67px] md:w-full md:h-[57.86px] md:pl-[14.90px] lg:w-full lg:h-[101px] lg:pl-[26px] lg:pr-1 md:pr-[2.29px] bg-white justify-between items-center inline-flex">
    <div class="self-stretch justify-center items-center gap-[66px] md:gap-[135px] lg:gap-[250px] inline-flex">
        <div class="w-[56.33px] text-black text-[8px] font-medium md:w-[96.82px] md:text-[9.17px] lg:w-[169px] lg:text-base lg:leading-tight md:leading-3 leading-[10.40px]">AIRTEL SNS</div>
        <div class="w-[53.33px] text-black text-[8px] font-medium md:w-[91.67px] md:text-[9.17px] md:leading-3 lg:w-40 lg:text-base lg:leading-tight leading-[10.40px]">100</div>
        <div class="w-[60.33px] text-black text-[8px] font-medium md:w-[103.70px] md:text-[9.17px] md:leading-3 lg:w-[181px] lg:text-base lg:leading-tight leading-[10.40px]">(₦10,000.00)</div>
    </div>
</div>
<div class="w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.66px] md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] bg-white justify-between items-center lg:w-full lg:h-[101px]  lg:pl-[26px] lg:pr-1 inline-flex">
    <div class="self-stretch justify-center items-center gap-[66px] md:gap-[135px] lg:gap-[250px] inline-flex">
        <div class="w-[56.33px] text-black text-[8px] font-medium md:w-[96.82px] md:text-[9.17px] md:leading-3 lg:w-[169px] lg:text-base lg:leading-tight leading-[10.40px]">GLO VTU</div>
        <div class="w-[53.33px] text-black text-[8px] font-medium md:w-[91.67px] md:text-[9.17px] md:leading-3 lg:w-40 lg:text-base lg:leading-tight leading-[10.40px]">100</div>
        <div class="w-[60.33px] text-black text-[8px] md:w-[103.70px] md:text-[9.17px] md:leading-3 font-medium lg:w-[181px] lg:text-base lg:leading-tight leading-[10.40px]">(₦10,000.00)</div>
    </div>
</div>
<div class="w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.67px] md:w-full md:h-[57.86px] md:pl-[14.90px] lg:w-full lg:h-[101px] lg:pl-[26px] lg:pr-1 md:pr-[2.29px] bg-white justify-between items-center inline-flex">
    <div class="self-stretch justify-center items-center gap-[66px] md:gap-[135px] lg:gap-[250px] inline-flex">
        <div class="w-[56.33px] text-black text-[8px] font-medium md:w-[96.82px] md:text-[9.17px] lg:w-[169px] lg:text-base lg:leading-tight md:leading-3 leading-[10.40px]">GLO SNS</div>
        <div class="w-[53.33px] text-black text-[8px] font-medium md:w-[91.67px] md:text-[9.17px] md:leading-3 lg:w-40 lg:text-base lg:leading-tight leading-[10.40px]">100</div>
        <div class="w-[60.33px] text-black text-[8px] font-medium md:w-[103.70px] md:text-[9.17px] md:leading-3 lg:w-[181px] lg:text-base lg:leading-tight leading-[10.40px]">(₦10,000.00)</div>
    </div>
</div>
<div class="w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.67px] md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] bg-white lg:w-full lg:h-[101px] lg:pl-[26px] lg:pr-1 justify-between items-center inline-flex">
    <div class="self-stretch justify-center items-center gap-[66px] md:gap-[135px] lg:gap-[250px] inline-flex">
        <div class="w-[56.33px] text-black text-[8px] font-medium md:w-[96.82px] md:text-[9.17px] lg:w-[169px] lg:text-base lg:leading-tight md:leading-3 leading-[10.40px]">9MOBILE VTU</div>
        <div class="w-[53.33px] text-black text-[8px] font-medium md:w-[91.67px] md:text-[9.17px] md:leading-3 lg:w-40 lg:text-base lg:leading-tight leading-[10.40px]">100</div>
        <div class="w-[60.33px] text-black text-[8px] font-medium md:w-[103.70px] md:text-[9.17px] md:leading-3 lg:w-[181px] lg:text-base lg:leading-tight leading-[10.40px]">(₦10,000.00)</div>
    </div>
</div>
<div class="w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.67px] md:w-full md:h-[57.86px] md:pl-[14.90px] lg:w-full lg:h-[101px] lg:pl-[26px] lg:pr-1 md:pr-[2.29px] bg-white justify-between items-center inline-flex">
    <div class="self-stretch justify-center items-center gap-[66px] md:gap-[135px] lg:gap-[250px] inline-flex">
        <div class="w-[56.33px] text-black text-[8px] md:w-[96.82px] md:text-[9.17px] md:leading-3 lg:w-[169px] lg:text-base lg:leading-tight  font-medium leading-[10.40px]">9MOBILE SNS</div>
        <div class="w-[53.33px] text-black text-[8px] font-medium md:w-[91.67px] md:text-[9.17px] md:leading-3 lg:w-40 lg:text-base lg:leading-tight leading-[10.40px]">100</div>
        <div class="w-[60.33px] text-black text-[8px] md:w-[103.70px] md:text-[9.17px] md:leading-3 font-medium lg:w-[181px] lg:text-base lg:leading-tight  leading-[10.40px]">(₦10,000.00)</div>
    </div>
</div>
<div class="w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-[7px] pb-[6.66px] md:w-full md:h-[57.86px] md:pl-[14.90px] lg:w-full lg:h-[101px] lg:pl-[26px] lg:pr-1 md:pr-[2.29px] bg-white justify-between items-center inline-flex">
    <div class="self-stretch justify-center items-center gap-[66px] md:gap-[135px] lg:gap-[250px] inline-flex">
        <div class="w-[56.33px] text-black text-[8px] font-medium md:w-[96.82px] md:text-[9.17px] md:leading-3 lg:w-[169px] lg:text-base lg:leading-tight leading-[10.40px]">SMILE AIRTIME</div>
        <div class="w-[53.33px] text-black text-[8px] font-medium md:w-[91.67px] md:text-[9.17px] md:leading-3 lg:w-40 lg:text-base lg:leading-tight  leading-[10.40px]">100</div>
        <div class="w-[60.33px] text-black text-[8px] font-medium md:w-[103.70px] md:text-[9.17px] md:leading-3 lg:w-[181px] lg:text-base lg:leading-tight leading-[10.40px]">(₦10,000.00)</div>
    </div>
</div>
<div class="w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-[7px] pb-[6.67px] md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] bg-white lg:w-full lg:h-[101px] lg:pl-[26px] lg:pr-1 justify-between items-center inline-flex">
    <div class="self-stretch justify-around items-center gap-[66px] md:gap-[135px] lg:gap-[250px] inline-flex">
        <div class="w-[56.33px] text-black text-[8px] font-medium md:w-[96.82px] md:text-[9.17px] md:leading-3 lg:w-[169px] lg:text-base lg:leading-tight leading-[10.40px]">INTERNATIONAL AIRTIME</div>
        <div class="w-[53.33px] text-black text-[8px] font-medium md:w-[91.67px] md:text-[9.17px] md:leading-3 lg:w-40 lg:text-base lg:leading-tight leading-[10.40px]">100</div>
        <div class="w-[60.33px] text-black text-[8px] font-medium md:w-[103.70px] md:text-[9.17px] md:leading-3 lg:w-[181px] lg:text-base lg:leading-tight leading-[10.40px]">(₦10,000.00)</div>
    </div>
</div>
</div>
<div class="lg:w-[187px] lg:h-[52px] lg:py-4 md:ml-[-80px] lg:gap-[26px] md:w-[108.08px]  hidden md:h-[30.06px] md:py-[9.17px] md:gap-[14.90px]  mt-[20px] w-[134.08px] h-[15.73px] lg:ml-[-100px] justify-center ml-[90px] items-center gap-[14.90px] lg:flex md:flex">
    <div class="text-black lg:text-xs md:text-[6.88px] md:leading-[8.94px]  lg:leading-none text-[8px] font-medium leading-[10.40px]">You need help?</div>
    <div class="lg:px-[15px] lg:py-[5px] md:px-[8.59px] md:py-[2.86px] md:rounded-[5.16px] md:gap-[5.73px] lg:rounded-[9px] lg:gap-2.5 px-[8.59px] py-[2.86px] bg-blue-900 rounded-[5.16px] justify-center items-center gap-[5.73px] flex">
        <div class="text-white text-[8px] md:text-[4.58px] md:leading-[5.96px] font-medium leading-[10.40px] lg:text-[8px] lg:leading-[10.40px] ">Contact Us</div>
    </div>
</div>


  </div>
)}





{/* data top-up dropdown */}
{isOpen3 && (
<div className="flex md:mt-[900px] flex-col">
<div class="lg:w-full justify-between items-center lg:h-[101px] md:w-[536.25px] md:mt-[-1210px] lg:mt-[-1240px] md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] mt-[-400px] lg:pl-[26px] lg:pr-1 w-[312px]  h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.67px] bg-white flex-row flex">
    <div class="self-stretch justify-between items-center md:gap-[135px] lg:gap-[250px] flex-row  gap-[66px] inline-flex">
        <div class=" w-[56.33px] text-black text-[8px] font-medium lg:w-[169px] lg:text-base lg:leading-tight md:w-[96.82px]  md:text-[9.17px] md:leading-3 leading-[10.40px]">MTN SME</div>
        <div class="w-[53.33px] text-black text-[8px] font-medium lg:w-40 lg:text-base md:w-[91.67px]  md:text-[9.17px] md:leading-3 lg:leading-tight leading-[10.40px]">100GB</div>
        <div class="w-[60.33px] text-black text-[8px] font-medium lg:w-[181px] lg:text-base  lg:leading-tight md:w-[103.70px] md:text-[9.17px] md:leading-3 leading-[10.40px]">(₦10,000.00)</div>
    </div>
</div>


<div class="lg:w-full lg:h-[101px] lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.67px] bg-white md:w-[536.25px] md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] justify-between items-center inline-flex">
    <div class="self-stretch justify-center items-center lg:gap-[250px] gap-[66px] md:gap-[135px] inline-flex">
        <div class="w-[56.33px] text-black text-[8px] font-medium lg:w-[169px] lg:text-base lg:leading-tight md:w-[96.82px]  md:text-[9.17px] md:leading-3 leading-[10.40px]">MTN SME2</div>
        <div class="w-[53.33px] text-black text-[8px] font-medium lg:w-40 lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[9.17px] md:leading-3 leading-[10.40px]">100GB</div>
        <div class="w-[60.33px] text-black text-[8px] font-medium lg:w-[181px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[9.17px] md:leading-3 leading-[10.40px]">(₦10,000.00)</div>
    </div>
</div>

<div class="lg:w-full lg:h-[101px] lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.66px] bg-white justify-between md:w-[536.25px] md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px]  items-center inline-flex">
    <div class="self-stretch justify-center items-center lg:gap-[250px] gap-[66px]  md:gap-[135px] inline-flex">
        <div class="w-[56.33px] text-black text-[8px] font-medium lg:w-[169px] lg:text-base lg:leading-tight md:w-[96.82px]  md:text-[9.17px] md:leading-3 leading-[10.40px]">MTN CG</div>
        <div class="w-[53.33px] text-black text-[8px] font-medium lg:w-40 lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[9.17px] md:leading-3 leading-[10.40px]">100GB</div>
        <div class="w-[60.33px] text-black text-[8px] font-medium lg:w-[181px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[9.17px] md:leading-3  leading-[10.40px]">(₦10,000.00)</div>
    </div>
</div>

<div class="lg:w-full lg:h-[101px] lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] md:w-[536.25px] md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px]  pt-3 pb-[11.66px] bg-white justify-between items-center inline-flex">
    <div class="self-stretch justify-center items-center lg:gap-[250px] gap-[66px] md:gap-[135px] inline-flex">
        <div class="w-[56.33px] text-black text-[8px] font-medium lg:w-[169px] lg:text-base lg:leading-tight md:w-[96.82px]  md:text-[9.17px] md:leading-3 leading-[10.40px]">MTN GIFTING</div>
        <div class="w-[53.33px] text-black text-[8px] font-medium lg:w-40 lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[9.17px] md:leading-3 leading-[10.40px]">100GB</div>
        <div class="w-[60.33px] text-black text-[8px] font-medium lg:w-[181px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[9.17px] md:leading-3 leading-[10.40px]">(₦10,000.00)</div>
    </div>
</div>
<div class="lg:w-full lg:h-[101px] lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] md:w-[536.25px] md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px]  pt-[7px] pb-[6.66px] bg-white justify-between items-center inline-flex">
    <div class="self-stretch justify-center items-center lg:gap-[250px] gap-[66px] md:gap-[135px] inline-flex">
        <div class="w-[56.33px] text-black text-[8px] lg:w-[169px] lg:text-base lg:leading-tight font-medium md:w-[96.82px] md:text-[9.17px] md:leading-3 leading-[10.40px]">MTN DIRECT COUPON</div>
        <div class="w-[53.33px] text-black text-[8px] font-medium lg:w-40 lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[9.17px] md:leading-3  leading-[10.40px]">100GB</div>
        <div class="w-[60.33px] text-black text-[8px] font-medium lg:w-[181px] lg:text-base md:w-[91.67px]  md:text-[9.17px] md:leading-3 lg:leading-tight leading-[10.40px]">(₦10,000.00)</div>
    </div>
</div>
<div class="lg:w-full lg:h-[101px] lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] justify-between items-center lg:gap-[198px] md:w-[536.25px] pl-[8.67px] pr-[1.33px] md:h-[57.86px] pt-[7px] pb-[6.66px] md:pl-[14.90px] md:pr-[2.29px] gap-[66px] inline-flex">
<div class="self-stretch justify-center items-center lg:gap-[250px] gap-[66px] md:gap-[135px] inline-flex">
    <div class="w-[56.33px] text-black text-[8px] lg:w-[169px] lg:text-base lg:leading-tight font-medium md:w-[96.82px] md:text-[9.17px] md:leading-3 leading-[10.40px]">MTN GENERAL BUNDLES</div>
    <div class="w-[53.33px] text-black text-[8px] font-medium lg:w-40 lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[9.17px] md:leading-3 leading-[10.40px]">100GB</div>
    <div class="w-[60.33px] text-black text-[8px] font-medium lg:w-[181px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[9.17px] md:leading-3 leading-[10.40px]">(₦10,000.00)</div>
</div>
</div>
<div class="lg:w-full lg:h-[101px] lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] md:w-[536.25px] md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] pt-3 pb-[11.67px] bg-white justify-between items-center inline-flex">
    <div class="self-stretch justify-center items-center lg:gap-[250px] gap-[66px] md:gap-[135px] inline-flex">
        <div class="w-[56.33px] text-black text-[8px] lg:w-[169px] lg:text-base lg:leading-tight md:w-[96.82px] md:text-[9.17px] md:leading-3 font-medium leading-[10.40px]">AIRTEL CG</div>
        <div class="w-[53.33px] text-black text-[8px] font-medium lg:w-40 lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[9.17px] md:leading-3 leading-[10.40px]">100GB</div>
        <div class="w-[60.33px] text-black text-[8px] font-medium lg:w-[181px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[9.17px] md:leading-3 leading-[10.40px]">(₦10,000.00)</div>
    </div>
</div>
<div class="lg:w-full lg:h-[101px] lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-[7px] md:w-[536.25px] md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] pb-[6.67px] bg-white justify-between items-center inline-flex">
    <div class="self-stretch justify-center items-center lg:gap-[250px] gap-[66px] md:gap-[135px]  inline-flex">
        <div class="w-[56.33px] text-black text-[8px] font-medium lg:w-[169px] lg:text-base lg:leading-tight md:w-[96.82px] md:text-[9.17px] md:leading-3 leading-[10.40px]">AIRTEL GIFTING</div>
        <div class="w-[53.33px] text-black text-[8px] font-medium lg:w-40 lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[9.17px] md:leading-3 leading-[10.40px]">100GB</div>
        <div class="w-[60.33px] text-black text-[8px] font-medium lg:w-[181px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[9.17px] md:leading-3 leading-[10.40px]">(₦10,000.00)</div>
    </div>
</div>
<div class="lg:w-full lg:h-[101px] lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] justify-between items-center md:w-[536.25px] pl-[8.67px] pr-[1.33px]  md:h-[57.86px] pt-[7px] pb-[6.66px] md:pl-[14.90px] md:pr-[2.29px] gap-[66px] inline-flex">
<div class="self-stretch justify-center items-center lg:gap-[250px] gap-[66px] md:gap-[135px] inline-flex">
    <div class="w-[56.33px] text-black text-[8px] font-medium lg:w-[169px] lg:text-base lg:leading-tight md:w-[96.82px] md:text-[9.17px] md:leading-3 leading-[10.40px]">AIRTEL GENERAL BUNDLE</div>
    <div class="w-[53.33px] text-black text-[8px] font-medium lg:w-40 lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[9.17px] md:leading-3 leading-[10.40px]">100GB</div>
    <div class="w-[60.33px] text-black text-[8px] font-medium lg:w-[181px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[9.17px] md:leading-3 leading-[10.40px]">(₦10,000.00)</div>
</div>
</div>
<div class="lg:w-full lg:h-[101px] lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 md:w-[536.25px] md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] pb-[11.67px] bg-white justify-between items-center inline-flex">
    <div class="self-stretch justify-center items-center  lg:gap-[250px] gap-[66px] md:gap-[135px] inline-flex">
        <div class="w-[56.33px] text-black text-[8px] lg:w-[169px] lg:text-base lg:leading-tight md:w-[96.82px] md:text-[9.17px] md:leading-3 font-medium leading-[10.40px]">GLO CG</div>
        <div class="w-[53.33px] text-black text-[8px] lg:w-40 lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[9.17px] md:leading-3 font-medium leading-[10.40px]">100GB</div>
        <div class="w-[60.33px] text-black text-[8px] lg:w-[181px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[9.17px] md:leading-3 font-medium leading-[10.40px]">(₦10,000.00)</div>
    </div>
</div>
<div class="lg:w-full lg:h-[101px] lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] md:w-[536.25px] md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] pt-3 pb-[11.66px] bg-white justify-between items-center inline-flex">
    <div class="self-stretch justify-center items-center lg:gap-[250px] gap-[66px] md:gap-[135px] inline-flex">
        <div class="w-[56.33px] text-black text-[8px] lg:w-[169px] lg:text-base lg:leading-tight md:w-[96.82px] md:text-[9.17px] md:leading-3 font-medium leading-[10.40px]">GLO GIFTING</div>
        <div class="w-[53.33px] text-black text-[8px] lg:w-40 lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[9.17px] md:leading-3  font-medium leading-[10.40px]">100GB</div>
        <div class="w-[60.33px] text-black text-[8px] font-medium lg:w-[181px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[9.17px] md:leading-3 leading-[10.40px]">(₦10,000.00)</div>
    </div>
</div>
<div class="lg:w-full lg:h-[101px] lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-[7px] pb-[6.67px] bg-white  md:w-[536.25px] md:h-[57.86px]  md:pl-[14.90px] md:pr-[2.29px] justify-between items-center inline-flex">
    <div class="self-stretch justify-center items-center lg:gap-[250px] gap-[66px] md:gap-[135px] inline-flex">
        <div class="w-[56.33px] text-black text-[8px] lg:w-[169px] lg:text-base lg:leading-tight md:w-[96.82px] md:text-[9.17px] md:leading-3 font-medium leading-[10.40px]">GLO GENERAL BUNDLES</div>
        <div class="w-[53.33px] text-black text-[8px] lg:w-40 lg:text-base lg:leading-tight font-medium md:w-[91.67px]  md:text-[9.17px] md:leading-3 leading-[10.40px]">100GB</div>
        <div class="w-[60.33px] text-black text-[8px] font-medium lg:w-[181px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[9.17px] md:leading-3 leading-[10.40px]">(₦10,000.00)</div>
    </div>
</div>
<div class="lg:w-full lg:h-[101px] lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.66px] bg-white justify-between md:w-[536.25px]  md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] items-center inline-flex">
    <div class="self-stretch justify-center items-center lg:gap-[250px] gap-[66px] md:gap-[135px] inline-flex">
        <div class="w-[56.33px] text-black text-[8px] lg:w-[169px] lg:text-base lg:leading-tight font-medium md:w-[96.82px] md:text-[9.17px] md:leading-3 leading-[10.40px]">9MOBILE SME</div>
        <div class="w-[53.33px] text-black text-[8px] lg:w-40 lg:text-base lg:leading-tight font-medium md:w-[91.67px]  md:text-[9.17px] md:leading-3 leading-[10.40px]">100GB</div>
        <div class="w-[60.33px] text-black text-[8px] font-medium lg:w-[181px] lg:text-base lg:leading-tight md:w-[91.67px] md:text-[9.17px] md:leading-3  leading-[10.40px]">(₦10,000.00)</div>
    </div>
</div>
<div class="lg:w-full lg:h-[101px] lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.66px] bg-white justify-between md:w-[536.25px] md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] items-center inline-flex">
    <div class="self-stretch justify-center items-center lg:gap-[250px] gap-[66px] md:gap-[135px] inline-flex">
        <div class="w-[56.33px] text-black text-[8px] lg:w-[169px] lg:text-base lg:leading-tight md:w-[96.82px] md:text-[9.17px] md:leading-3 font-medium leading-[10.40px]">9MOBILE CG</div>
        <div class="w-[53.33px] text-black text-[8px] font-medium lg:w-40 lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[9.17px] md:leading-3 leading-[10.40px]">100GB</div>
        <div class="w-[60.33px] text-black text-[8px] font-medium lg:w-[181px] lg:text-base lg:leading-tight md:w-[91.67px] md:text-[9.17px] md:leading-3 leading-[10.40px]">(₦10,000.00)</div>
    </div>
</div>
<div class="lg:w-full lg:h-[101px] lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] justify-between items-center gap-[66px] md:w-[536.25px] md:h-[57.86px] pl-[8.67px] pr-[1.33px] pt-[7px] pb-[6.66px] md:pl-[14.90px] md:pr-[2.29px] inline-flex">
<div class="self-stretch justify-center items-center lg:gap-[250px] gap-[66px] md:gap-[135px] inline-flex">
    <div class="w-[56.33px] text-black text-[8px] font-medium lg:w-[169px] lg:text-base lg:leading-tight md:w-[96.82px] md:text-[9.17px] md:leading-3 leading-[10.40px]">9MOBILE GENERAL BUNDLES</div>
    <div class="w-[53.33px] text-black text-[8px] font-medium lg:w-40 lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[9.17px] md:leading-3 leading-[10.40px]">100GB</div>
    <div class="w-[60.33px] text-black text-[8px] font-medium lg:w-[181px] lg:text-base lg:leading-tight md:w-[91.67px] md:text-[9.17px] md:leading-3 leading-[10.40px]">(₦10,000.00)</div>
 </div>
</div>
<div class="lg:w-full lg:h-[101px] lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.66px] bg-white md:w-[536.25px] md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] justify-between items-center inline-flex">
    <div class="self-stretch justify-center items-center lg:gap-[250px] gap-[66px] md:gap-[135px] inline-flex">
        <div class="w-[56.33px] text-black text-[8px] lg:w-[169px] lg:text-base lg:leading-tight font-medium md:w-[96.82px] md:text-[9.17px] md:leading-3 leading-[10.40px]">SMILE BIGGA</div>
        <div class="w-[53.33px] text-black text-[8px] font-medium lg:w-40 lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[9.17px] md:leading-3 leading-[10.40px]">100GB</div>
        <div class="w-[60.33px] text-black text-[8px] font-medium lg:w-[181px] lg:text-base lg:leading-tight md:w-[91.67px] md:text-[9.17px] md:leading-3 leading-[10.40px]">(₦10,000.00)</div>
    </div>
</div>
<div class="lg:w-full lg:h-[101px] lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-[7px] pb-[6.66px] bg-white justify-between md:w-[536.25px] md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] items-center inline-flex">
    <div class="self-stretch justify-center items-center lg:gap-[250px] gap-[66px] md:gap-[135px] inline-flex">
        <div class="w-[56.33px] text-black text-[8px] lg:w-[169px] lg:text-base lg:leading-tight font-medium md:w-[96.82px] md:text-[9.17px] md:leading-3 leading-[10.40px]">SMILE UNLIMITED</div>
        <div class="w-[53.33px] text-black text-[8px] font-medium lg:w-40 lg:text-base md:w-[91.67px]  md:text-[9.17px] md:leading-3 lg:leading-tight leading-[10.40px]">100GB</div>
        <div class="w-[60.33px] text-black text-[8px] font-medium lg:w-[181px] lg:text-base lg:leading-tight md:w-[91.67px] md:text-[9.17px] md:leading-3 leading-[10.40px]">(₦10,000.00)</div>
    </div>
</div>
<div class="lg:w-full lg:h-[101px] lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.66px] bg-white justify-between md:w-[536.25px] md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] items-center inline-flex">
    <div class="self-stretch justify-center items-center lg:gap-[250px] gap-[66px] md:gap-[135px] inline-flex">
        <div class="w-[56.33px] text-black text-[8px] lg:w-[169px] lg:text-base lg:leading-tight font-medium md:w-[96.82px] md:text-[9.17px] md:leading-3 leading-[10.40px]">SMILE DAILY</div>
        <div class="w-[53.33px] text-black text-[8px] font-medium lg:w-40 lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[9.17px] md:leading-3 leading-[10.40px]">100GB</div>
        <div class="w-[60.33px] text-black text-[8px] font-medium lg:w-[181px] lg:text-base lg:leading-tight md:w-[91.67px] md:text-[9.17px] md:leading-3 leading-[10.40px]">(₦10,000.00)</div>
    </div>
</div>
<div class="lg:w-full lg:h-[101px] lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-[7px] pb-[6.67px] bg-white justify-between md:w-[536.25px] md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] items-center inline-flex">
    <div class="self-stretch justify-center items-center lg:gap-[250px] gap-[66px] md:gap-[135px] inline-flex">
        <div class="w-[56.33px] text-black text-[8px] lg:w-[169px] lg:text-base lg:leading-tight font-medium md:w-[96.82px] md:text-[9.17px] md:leading-3 leading-[10.40px]">SMILE WEEKLY</div>
        <div class="w-[53.33px] text-black text-[8px] lg:w-40 lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[9.17px] md:leading-3 font-medium leading-[10.40px]">100GB</div>
        <div class="w-[60.33px] text-black text-[8px] font-medium lg:w-[181px] lg:text-base lg:leading-tight md:w-[91.67px] md:text-[9.17px] md:leading-3 leading-[10.40px]">(₦10,000.00)</div>
    </div>
</div>
<div class="lg:w-full lg:h-[101px] lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.67px] bg-white justify-between md:w-[536.25px] md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] items-center inline-flex">
    <div class="self-stretch justify-center items-center lg:gap-[250px] gap-[66px] md:gap-[135px] inline-flex">
        <div class="w-[56.33px] text-black text-[8px] lg:w-[169px] lg:text-base lg:leading-tight md:w-[96.82px] md:text-[9.17px] md:leading-3 font-medium leading-[10.40px]">SMILE NIGHT</div>
        <div class="w-[53.33px] text-black text-[8px] lg:w-40 lg:text-base lg:leading-tight font-medium md:w-[91.67px]  md:text-[9.17px] md:leading-3 leading-[10.40px]">100GB</div>
        <div class="w-[60.33px] text-black text-[8px] font-medium lg:w-[181px] lg:text-base lg:leading-tight md:w-[91.67px] md:text-[9.17px] md:leading-3  leading-[10.40px]">(₦10,000.00)</div>
    </div>
</div>
<div class="lg:w-full lg:h-[101px] lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-[7px] pb-[6.66px] bg-white justify-between md:w-[536.25px] md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px]  items-center inline-flex">
    <div class="self-stretch justify-center items-center lg:gap-[250px] gap-[66px] md:gap-[135px] inline-flex">
        <div class="w-[56.33px] text-black text-[8px] lg:w-[169px] lg:text-base lg:leading-tight md:w-[96.82px] md:text-[9.17px] md:leading-3 font-medium leading-[10.40px]">SMILEVOICE ONLY</div>
        <div class="w-[53.33px] text-black text-[8px] lg:w-40 lg:text-base lg:leading-tight font-medium md:w-[91.67px]  md:text-[9.17px] md:leading-3 leading-[10.40px]">100GB</div>
        <div class="w-[60.33px] text-black text-[8px] font-medium lg:w-[181px] lg:text-base lg:leading-tight md:w-[91.67px] md:text-[9.17px] md:leading-3 leading-[10.40px]">(₦10,000.00)</div>
    </div>
</div>
<div class="lg:w-full lg:h-[101px] lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-[7px] pb-[6.67px] bg-white justify-between md:w-[536.25px] md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] items-center inline-flex">
    <div class="self-stretch justify-center items-center lg:gap-[250px] gap-[66px] md:gap-[135px] inline-flex">
        <div class="w-[56.33px] text-black text-[8px] lg:w-[169px] lg:text-base lg:leading-tight font-medium md:w-[96.82px] md:text-[9.17px] md:leading-3 leading-[10.40px]">SMILE FREEDOM</div>
        <div class="w-[53.33px] text-black text-[8px] font-medium lg:w-40 lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[9.17px] md:leading-3 leading-[10.40px]">100GB</div>
        <div class="w-[60.33px] text-black text-[8px] font-medium lg:w-[181px] lg:text-base lg:leading-tight md:w-[91.67px] md:text-[9.17px] md:leading-3 leading-[10.40px]">(₦10,000.00)</div>
    </div>
</div>
<div class="lg:w-full lg:h-[101px] lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[7px] pr-[3px] pt-[7.02px] pb-[6.64px] bg-white justify-between md:w-[536.25px] md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] items-center inline-flex">
    <div class="self-stretch justify-center items-center lg:gap-[250px] gap-[66px] md:gap-[135px] inline-flex">
        <div class="w-[56.33px] text-black text-[8px] font-medium lg:w-[169px] lg:text-base lg:leading-tight md:w-[96.82px] md:text-[9.17px] md:leading-3 leading-[10.40px]">SPECTRANET DATA</div>
        <div class="w-[53.33px] text-black text-[8px] font-medium lg:w-40 lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[9.17px] md:leading-3 leading-[10.40px]">100GB</div>
        <div class="w-[60.33px] text-black text-[8px] font-medium lg:w-[181px] lg:text-base lg:leading-tight md:w-[91.67px] md:text-[9.17px] md:leading-3 leading-[10.40px]">(₦10,000.00)</div>
    </div>
</div>
<div class="lg:w-full lg:h-[101px] lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[7px] pr-[3px] pt-[7.02px] pb-[6.64px] bg-white justify-between md:w-[536.25px] md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] items-center inline-flex">
    <div class="self-stretch justify-center items-center lg:gap-[250px] gap-[66px] md:gap-[135px] inline-flex">
        <div class="w-[56.33px] text-black text-[8px] font-medium lg:w-[169px] lg:text-base lg:leading-tight md:w-[96.82px] md:text-[9.17px] md:leading-3 leading-[10.40px]">SPECTRANET DATA</div>
        <div class="w-[53.33px] text-black text-[8px] font-medium  lg:w-40 lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[9.17px] md:leading-3 leading-[10.40px]">100GB</div>
        <div class="w-[60.33px] text-black text-[8px] font-medium lg:w-[181px] lg:text-base lg:leading-tight md:w-[91.67px] md:text-[9.17px] md:leading-3 leading-[10.40px]">(₦10,000.00)</div>
    </div>
</div>
<div class=" w-[134.08px] h-[15.73px] justify-start lg:ml-[350px] items-center ml-[75px] mt-[30px] gap-[14.90px] lg:w-[187px] md:ml-[210px] lg:h-[52px] lg:py-4 lg:gap-[26px] md:w-[108.08px] md:h-[30.06px] md:py-[9.17px] md:gap-[14.90px] inline-flex">
    <div class="text-black text-[8px] font-medium leading-[10.40px] lg:text-xs md:text-[6.88px] md:leading-[8.94px] lg:leading-none ">You need help?</div>
    <div class="px-[8.59px] py-[2.86px] bg-blue-900 rounded-[5.16px] justify-center items-center gap-[5.73px]lg:px-[15px] md:px-[8.59px] md:py-[2.86px] md:rounded-[5.16px] md:gap-[5.73px] lg:py-[5px] lg:rounded-[9px] lg:gap-2.5  flex">
        <div class="text-white text-[8px] font-medium leading-[10.40px] lg:text-[8px] md:text-[4.58px] md:leading-[5.96px] lg:leading-[10.40px] ">Contact Us</div>
    </div>
</div>
</div>
)}



{/* bills payment dropdown */}
{isOpen4 && (
<div className="flex  justify-start items-center lg:w-full  md:mt-[-300px]  lg:mt-[-300px] mt-[-390px] flex-col">
<div class="lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px]  lg:h-[101px] lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.67px] bg-white justify-evenly items-center inline-flex">
    <div class="self-stretch justify-start items-start md:gap-[150px] lg:gap-[330px] gap-[66px] inline-flex">
        <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[9.17px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[8px] font-medium leading-[10.40px]">WAEC PIN</div>
        <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[9.17px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium leading-[10.40px]">100</div>
        <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[9.17px] md:leading-3 lg:leading-tight w-[60.33px] text-black text-[8px] font-medium leading-[10.40px]">(₦10,000.00)</div>
    </div>
</div>
<div class="lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] lg:h-[101px] lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.66px] bg-white justify-evenly items-center inline-flex">
    <div class="self-stretch justify-between items-start md:gap-[150px] gap-[66px] lg:gap-[330px] inline-flex">
        <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[9.17px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[8px] font-medium leading-[10.40px]">NECO PIN</div>
        <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[9.17px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium leading-[10.40px]">100</div>
        <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[9.17px] md:leading-3 lg:leading-tight w-[60.33px] text-black text-[8px] font-medium leading-[10.40px]">(₦10,000.00)</div>
    </div>
</div>
<div class="lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] lg:h-[101px] lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.67px] bg-white justify-evenly items-center inline-flex">
    <div class="self-stretch justify-start items-start md:gap-[150px] lg:gap-[330px] gap-[66px] inline-flex">
        <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[9.17px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[8px] font-medium  leading-[10.40px]">JAMB PIN</div>
        <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[9.17px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium  leading-[10.40px]">100</div>
        <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[9.17px] md:leading-3 lg:leading-tight w-[60.33px] text-black text-[8px] font-medium  leading-[10.40px]">(₦10,000.00)</div>
    </div>
</div>
<div class="lg:w-full md:w-[536.25px] md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] lg:h-[101px] lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.67px] bg-white justify-evenly items-center inline-flex">
    <div class="self-stretch justify-start items-start md:gap-[150px] lg:gap-[330px] gap-[66px] inline-flex">
        <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[9.17px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[8px] font-medium  leading-[10.40px]">NABTEB PIN</div>
        <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[9.17px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium  leading-[10.40px]">100</div>
        <div class="lg:w-[100px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[9.17px] md:leading-3 w-[60.33px] text-black text-[8px] font-medium  leading-[10.40px]">(₦10,000.00)</div>
    </div>
</div>
<div class="lg:w-full md:w-[536.25px] md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] lg:h-[101px] lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-2 pb-[7.66px] bg-white justify-evenly items-center inline-flex">
    <div class="self-stretch justify-start items-start lg:gap-[330px] md:gap-[150px] gap-[66px] inline-flex">
        <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[9.17px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[7px] font-medium  leading-[9.10px]">GOTV SUBSCRIPTION</div>
        <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[9.17px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium  leading-[10.40px]">100</div>
        <div class="lg:w-[100px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[9.17px] md:leading-3 w-[60.33px] text-black text-[8px] font-medium  leading-[10.40px]">(₦10,000.00)</div>
    </div>
</div>
<div class="lg:w-full md:w-[536.25px] md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] lg:h-[101px] lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-2 pb-[7.67px] bg-white justify-evenly items-center inline-flex">
    <div class="self-stretch justify-start items-start lg:gap-[330px] md:gap-[150px] gap-[66px] inline-flex">
        <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[9.17px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[7px] font-medium leading-[9.10px]">DSTV SUBSCRIPTION</div>
        <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[9.17px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium leading-[10.40px]">100</div>
        <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[9.17px] md:leading-3 lg:leading-tight w-[60.33px] text-black text-[8px] font-medium leading-[10.40px]">(₦10,000.00)</div>
    </div>
</div>
<div class="lg:w-full md:w-[536.25px] md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] lg:h-[101px] lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-2 pb-[7.67px] bg-white justify-evenly items-center inline-flex">
    <div class="self-stretch justify-start items-start lg:gap-[330px] md:gap-[150px] gap-[66px] inline-flex">
        <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[9.17px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[7px] font-medium  leading-[9.10px]">STARTIME SUBSCRIPTION</div>
        <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[9.17px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium  leading-[10.40px]">100</div>
        <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[9.17px] md:leading-3 lg:leading-tight w-[60.33px] text-black text-[8px] font-medium  leading-[10.40px]">(₦10,000.00)</div>
    </div>
</div>
<div class="lg:w-full md:w-[536.25px] md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] lg:h-[101px] lg:pl-[26px] lg:pr-1  w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-2 pb-[7.67px] bg-white justify-evenly items-center inline-flex">
    <div class="self-stretch justify-start items-start lg:gap-[330px] gap-[66px] md:gap-[150px] inline-flex">
        <div class="lg:w-[100px] lg:text-base lg:leading-tight md:w-[96.82px]  md:text-[9.17px] md:leading-3 w-[56.33px] text-black text-[7px] font-medium leading-[9.10px]">SHOWMAX SUBSCRIPTION</div>
        <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[9.17px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium leading-[10.40px]">100</div>
        <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[9.17px] md:leading-3 lg:leading-tight w-[60.33px] text-black text-[8px] font-medium leading-[10.40px]">(₦10,000.00)</div>
    </div>
</div>
<div class="lg:w-full md:w-[536.25px] md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] lg:h-[101px] lg:pl-[26px] lg:pr-1  w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-[7px] pb-[6.67px] bg-white justify-evenly items-center inline-flex">
    <div class="self-stretch justify-start items-start lg:gap-[330px] md:gap-[150px]  gap-[66px] inline-flex">
        <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[9.17px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[8px] font-medium leading-[10.40px]">ELECTRICITY BILLS</div>
        <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[9.17px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium leading-[10.40px]">100</div>
        <div class="lg:w-[100px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[9.17px] md:leading-3 w-[60.33px] text-black text-[8px] font-medium leading-[10.40px]">(₦10,000.00)</div>
    </div>
</div>
<div class="lg:w-full md:w-[536.25px] md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] lg:h-[101px] lg:pl-[26px] lg:pr-1  w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.66px] bg-white justify-evenly items-center inline-flex">
    <div class="self-stretch justify-start items-start gap-[66px] md:gap-[150px] lg:gap-[330px] inline-flex">
        <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[9.17px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[8px] font-medium leading-[10.40px]">BULK SMS</div>
        <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[9.17px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium leading-[10.40px]">100</div>
        <div class="lg:w-[100px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[9.17px] md:leading-3 w-[60.33px] text-black text-[8px] font-medium leading-[10.40px]">(₦10,000.00)</div>
    </div>
</div>
<div class="lg:w-full md:w-[536.25px] md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] lg:h-[101px] lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-2 pb-[7.67px] bg-white justify-evenly items-center inline-flex">
    <div class="self-stretch justify-start items-start lg:gap-[330px] md:gap-[150px] gap-[66px] inline-flex">
        <div class="lg:w-[100px] lg:text-base lg:leading-tight md:w-[96.82px]  md:text-[9.17px] md:leading-3 w-[56.33px] text-black text-[7px] font-medium leading-[9.10px]">RECHARGE CARD PRINTING</div>
        <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[9.17px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium leading-[10.40px]">100</div>
        <div class="lg:w-[100px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[9.17px] md:leading-3 w-[60.33px] text-black text-[8px] font-medium leading-[10.40px]">(₦10,000.00)</div>
    </div>
</div>
<div class="lg:w-full lg:h-[52px] lg:py-4 md:ml-[-80px] lg:gap-[26px] md:w-[108.08px] md:h-[30.06px] md:py-[9.17px] md:gap-[14.90px]  mt-[20px] w-[134.08px] h-[15.73px] lg:ml-[-70px] justify-center ml-[-35px] items-center gap-[14.90px] inline-flex">
    <div class="text-black lg:text-xs md:text-[6.88px] md:leading-[8.94px]  lg:leading-none text-[8px] font-medium leading-[10.40px]">You need help?</div>
    <div class="lg:px-[15px] lg:py-[5px] md:px-[8.59px] md:py-[2.86px] md:rounded-[5.16px] md:gap-[5.73px] lg:rounded-[9px] lg:gap-2.5 px-[8.59px] py-[2.86px] bg-blue-900 rounded-[5.16px] justify-center items-center gap-[5.73px] flex">
        <div class="text-white text-[8px] md:text-[4.58px] md:leading-[5.96px] font-medium leading-[10.40px] lg:text-[8px] lg:leading-[10.40px] ">Contact Us</div>
    </div>
</div>
</div>
)}
  </div>

        </>
        </DashBoardLayout>
        )
        }

