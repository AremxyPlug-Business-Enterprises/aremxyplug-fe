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

    const [isOpen, setIsOpen] = useState(false); 
    const toggleDropdown = () => { setIsOpen((prevIsOpen) => !prevIsOpen); };
   
    


    return (

        <DashBoardLayout>
        <>
        <div class="flex gap-[25px] md:w-full ml-[4px] flex-col">
    <div class="w-[312px] h-[65.54px] pl-[16.72px] pr-[19.33px] py-[7.36px] md:w-full md:h-[112.29px] md:pl-[28.65px] md:pr-[34.82px] md:py-[12.60px] lg:w-full lg:h-[196px] lg:pl-[50px] lg:pr-[60.79px] lg:rounded-[20px] lg:gap-[75px] lg:py-[22px] bg-gradient-to-r from-yellow-300 to-rose-400 rounded-md justify-center items-start gap-[25.08px] md:gap-[42.97px] inline-flex">
        <div class="w-[197.63px] lg:w-full md:w-full lg:gap-[15px] self-stretch flex-col justify-start items-start md:gap-[8.59px] gap-[5.02px] flex">
            <div class="w-[160.85px] md:w-[275.57px] lg:w-[481px] text-black text-[8.08px] md:text-sm lg:text-2xl font-semibold font-['Poppins'] uppercase">MANAGE ALL YOUR TRANSACTIONS AT A TIME WITHOUT ANY HASSLE.</div>
            <div class="w-[209px] h-[21px] md:w-full md:h-[37.24px] lg:w-[588px] lg:h-[65px] text-black text-[7px] lg:text-lg md:text-[9.17px] font-normal font-['Poppins'] lg:leading-tight md:leading-3 leading-[9.10px]">Select, filter, and manage all your transactions at a time, download all transactions stats and keep a record track.<br/></div>
        </div>
        <img class="w-[53.24px] h-[50.16px] md:w-[91.21px] md:h-[85.94px] lg:w-[159.21px] lg:h-[150px]  " src={receiptA}  alt="" />
    </div>

    <div class="flex flex-row">
        <div class="text-neutral-500 text-[8px] lg:text-xl md:text-xs font-semibold font-['Poppins']">Wallet Summary</div>
        <div class="w-3 h-3 md:w-[13.75px] md:h-[13.75px] justify-center items-center inline-flex">
            <img src={arrowsales} class="w-3 h-3 lg:w-6 lg:h-6 md:w-[13.75px] md:h-[13.75px] relative"alt="" />
        
        </div>
    </div>
    <div class="w-[312px] h-10 pl-[63.15px] pr-[62.90px] pt-[8.38px] pb-[7.62px] lg:w-full lg:h-[120px] lg:px-[245px] lg:py-[25px] md:w-full md:h-[68.75px] md:px-[140.10px] md:py-[14.32px] bg-indigo-300 bg-opacity-20 rounded-[6.88px] md:rounded-[6.88px] justify-center items-center inline-flex">
        <div class="self-stretch justify-start items-center gap-[9.17px] md:gap-[9.17px] lg:gap-4 inline-flex">
            <div class="justify-start items-center md:gap-[5.73px] lg:gap-2.5 gap-[5.73px] flex">
                <div class="w-6 h-6 md:w-[40.10px] md:mt-[30px] md:h-[40.10px] lg:w-[70px] lg:h-[70px]  ">
                <img src={flagsales} alt="" />
                   
                    <div class="w-6 h-6 left-0 top-0 md:mt-[-20px] lg:w-[70px] lg:h-[70px] md:w-[40.10px] md:h-[40.10px]  bg-white rounded-full">
                    
                    </div>
                    <div class="w-2.5 h-2.5 left-[6.86px] top-[6.86px] md:w-[16.77px] md:h-[16.77px] md:left-[11.46px] md:top-[11.46px] lg:w-[29.27px] lg:h-[29.27px] lg:left-[20px] lg:top-[20px] absolute">
                        <div class="w-2.5 h-[9.41px] left-0 top-[0.31px] md:w-[16.77px] md:h-[15.73px] md:left-0 md:top-[0.52px] lg:w-[29.27px] lg:h-[27.45px] lg:left-0 lg:top-[0.91px] absolute">
                        </div>
                    </div>
                </div>
                <div class="justify-start items-start gap-[6.30px] lg:gap-[11px]  flex">
                    <div class="text-black text-[8px] lg:text-xl font-semibold font-['Poppins'] md:leading-[14.90px] lg:leading-relaxed leading-[10.40px]">Available Balance</div>
                    <div class="text-neutral-500 text-[8px] lg:text-xl md:text-xs font-medium font-['Poppins'] lg:leading-relaxed md:leading-[14.90px] leading-[10.40px]">(₦50,000.00)</div>
                </div>
            </div>
            <div class="w-[13.75px] h-[13.75px] lg:w-6 lg:h-6 justify-center items-center flex">
                <div class="lg:w-[13.75px] lg:h-[13.75px] relative">
                    <img src={downsales} alt="" />
                </div>
            </div>
        </div>
    </div>
    <div class="w-[312px] h-6 pl-[0.33px] pr-[86.66px] py-[2.67px] lg:w-full lg:h-[72px] lg:pl-4 lg:pr-[459.30px] lg:gap-[50.53px] lg:py-[11px] md:w-full md:h-[41.25px] md:pl-[9.17px] md:pr-[262.40px] md:pt-[6.39px] md:pb-[6.40px] bg-white shadow border-t border-b border-black border-opacity-30 justify-start items-center gap-[52.80px] inline-flex">
        <div class="self-stretch p-[3.33px] lg:p-2.5 md:p-[5.73px] bg-white rounded-sm lg:rounded-[5px] lg:gap-[6.62px]  shadow justify-start items-center md:rounded-[2.86px] md:gap-[3.79px] gap-[2.21px] inline-flex">
            <div class="text-blue-900 text-[8px] lg:text-xl whitespace-nowrap font-semibold font-['Poppins']">Filter by Date</div>
            <div class="w-3 h-3 md:w-[11.37px] md:h-[11.37px] lg:w-[19.85px] lg:h-[19.85px] justify-center items-center flex">
                <div class="w-3 h-3 md:w-[11.37px] md:h-[11.37px] lg:w-[19.85px] lg:h-[19.85px] relative">
                    <img src={filtersales} alt="" />
                </div>
            </div>
        </div>
        <div class="self-stretch justify-start items-center gap-[5.73px] lg:gap-2.5 inline-flex">
            <div class="justify-start items-center lg:gap-[5px] gap-[2.86px] flex">
                <div class="w-[11.37px] h-[11.37px] lg:w-[19.85px] lg:h-[19.85px] justify-center items-center flex">
                    <div class="w-[11.37px] h-[11.37px] lg:w-[19.85px] lg:h-[19.85px] relative">
                        <img src={menusales} alt="" />
                    </div>
                </div>
                <div  onClick={toggleDropdown} className="text-neutral-500 text-[8px] lg:text-xl font-semibold font-['Poppins']">Filter By Product</div>
            </div>
            <div class="w-[11.37px] h-[11.37px] lg:w-[19.85px] lg:h-[19.85px] justify-center items-center flex">
                <div class="w-[11.37px] h-[11.37px] lg:w-[19.85px] lg:h-[19.85px] relative">
                    <img src={salesA} alt="" />
                </div>
            </div>
        </div>
    </div>
    <div class="w-[312px] h-[53.49px] md:w-full lg:w-full  lg:h-[78px] md:h-[45.05px] lg:gap-[90.50px] justify-start items-center gap-[5px] md:gap-[51.85px] inline-flex">
        <div class="p-[1.86px] lg:p-[5.65px] md:p-[3.24px] bg-indigo-300 bg-opacity-20 lg:rounded-[14.70px] lg:gap-[11.31px] rounded-[4.83px] md:rounded-lg justify-start items-start md:gap-[6.48px] gap-[3.71px] flex">
            <div class="text-black text-[10px] md:text-[5.73px] lg:text-[10px]  font-semibold font-['Poppins']">NGN</div>
            <div class="w-[5.20px] h-[5.20px] lg:w-[15.83px] lg:h-[15.83px] md:w-[9.07px] md:h-[9.07px] justify-center items-center flex">
                <div class="w-[5.20px] h-[5.20px] lg:w-[15.83px] lg:h-[15.83px] md:w-[9.07px] md:h-[9.07px] relative">
                    <img src={salesB} alt="" />
                </div>
            </div>
        </div>
        <div class="h-[53px] lg:h-[78px] px-[5px] py-[4.92px] md:px-[22.92px] lg:rounded-md md:w-full md:py-[8.59px] bg-emerald-100 rounded-sm md:rounded flex-col justify-center items-center gap-[1.64px] md:gap-[2.86px] inline-flex">
            <div class="justify-start items-center md:gap-[2.86px] gap-[1.64px] inline-flex">
                <div class="text-black text-[10px] md:text-[12px] lg:text-[16px] font-medium font-['Poppins']">Total Inflows</div>
                <div class="w-[4.92px] h-[4.92px] md:w-[8.59px] md:h-[8.59px] justify-center items-center flex">
                    <div class="w-[4.92px] h-[4.92px] md:w-[8.59px] md:h-[8.59px] relative">
                    </div>
                </div>
            </div>
            <div class="justify-start items-start gap-[1.64px] md:gap-[2.86px]  inline-flex">
                <div class="text-black text-[10px] md:text-[12px] lg:text-[16px] font-semibold font-['Poppins'] md:leading-[11px] leading-3">₦</div>
                <div class="text-black text-[10px] md:text-[12px] lg:text-[16px] font-medium font-['Poppins'] md:leading-[11px] leading-3">96,001,55</div>
            </div>
        </div>
        <div class="w-[99px] px-[5px] py-[4.92px] md:w-full lg:rounded-md md:px-[22.92px] lg:px-0 md:py-[8.59px] lg:h-[78px] bg-indigo-300 bg-opacity-20 rounded-sm md:rounded flex-col justify-center items-center md:gap-[2.86px] gap-[1.64px] inline-flex">
            <div class="justify-start items-center gap-[1.64px] md:gap-[2.86px]  inline-flex">
                <div class="w-[76px] text-center text-black text-[10px] md:text-[12px] lg:text-[16px] lg:w-full font-medium font-['Poppins']">Total Transactions</div>
                <div class="w-[4.92px] h-[4.92px] md:w-[8.59px] md:h-[8.59px] justify-center items-center flex">
                    <div class="w-[4.92px] h-[4.92px] md:w-[8.59px] md:h-[8.59px]  relative">
                        <img src={salesC} alt="" />
                    </div>
                </div>
            </div>
            <div class="justify-start items-start gap-[1.64px] md:gap-[2.86px] inline-flex">
                <div class="text-black  text-[10px] md:text-[12px] lg:text-[16px] font-medium font-['Poppins'] md:leading-[11px] leading-3">10,000</div>
            </div>
        </div>
        <div class="w-[82px] h-[52px] lg:h-[78px] lg:rounded-md px-[13.13px] py-[4.92px] md:w-full md:px-[22.92px] md:py-[8.59px] bg-red-200 md:rounded rounded-sm flex-col md:gap-[2.86px] justify-center items-center gap-[1.64px] inline-flex">
            <div class="justify-start items-center  md:gap-[2.86px] gap-[1.64px] inline-flex">
                <div class="text-black text-[10px] md:text-[12px] lg:text-[16px] font-medium font-['Poppins']">Total Outflows</div>
                <div class="w-[4.92px] h-[4.92px] md:w-[8.59px] md:h-[8.59px] origin-top-left -rotate-180 justify-center items-center flex">
                    <div class="w-[4.92px] h-[4.92px] md:w-[8.59px] md:h-[8.59px] relative">
                        <img src={salesD} alt="" />
                    </div>
                </div>
            </div>
            <div class="justify-start items-start gap-[1.64px] md:gap-[2.86px] inline-flex">
                <div class="text-black text-[10px] md:text-[12px] lg:text-[16px] font-semibold font-['Poppins'] md:leading-[11px] leading-3">₦</div>
                <div class="text-black text-[10px] md:text-[12px] lg:text-[16px] font-medium font-['Poppins'] md:leading-[11px] leading-3">96,001,55</div>
            </div>
        </div>
    </div>
    <div class="flex flex-row">
        <div class="text-neutral-500 text-[8px] md:text-sm lg:text-xl  font-semibold font-['Poppins']">Sales Analysis</div>
        <div class="w-3 h-3 lg:h-6 lg:w-6 md:w-[13.75px] md:h-[13.75px] justify-center items-center inline-flex">
            <img src={squaresales} class="w-3 h-3lg:h-6 lg:w-6  md:w-[13.75px] md:h-[13.75px] relative" alt="" />

        
        </div>
    </div>
    <div class="flex  border-opacity-100 lg:w-full shadow border-black flex-col">
    <div class="w-[312px] h-[25px] lg:pr-0 pl-[8.67px] pr-[1.33px] pt-[8.17px] pb-[6.83px] md:w-full lg:w-full lg:pl-[23px] lg:h-[42px] md:h-[24.06px] md:pl-[14.90px] md:pr-[2.29px] md:pt-[6.32px] md:pb-[5.74px] bg-indigo-200 justify-end lg:justify-between items-center inline-flex">
        <div class="self-stretch lg:justify-between lg:gap-[300px]  lg:w-full justify-start items-start gap-[66px] md:gap-[113.44px] inline-flex">
            <div class="w-[56.33px] md:w-[96.82px] lg:w-full text-black text-[8px] md:text-[9.17px] lg:text-[16px] font-semibold font-['Inter'] md:leading-3 lg:leading-tight  leading-[10.40px]">Products</div>
            <div class="w-[53.33px] md:w-[91.67px] lg:w-full text-black text-[8px] md:text-[9.17px] lg:text-[16px] font-semibold font-['Inter'] md:leading-3 lg:leading-tight  leading-[10.40px]">Quality</div>
            <div class="w-[60.33px] md:w-[103.70px] lg:w-full text-black text-[8px] md:text-[9.17px] lg:text-[16px] font-semibold font-['Inter'] md:leading-3 lg:leading-tight leading-[10.40px]">Total Amount</div>
        </div>
    </div>
    <div class="w-[312px] lg:h-[101px]  h-[33.67px] md:w-full md:h-[57.86px] relative opacity-70 shadow bg-white"></div>
  </div>


{isOpen && (
  <div className="flex absolute left-[80px] md:left-[215px] md:h-[150px] h-[200px] md:top-[440px] lg:left-[300px] lg:top-[625px]  top-[285px] flex-col">
    <div class="w-44 h-[29px] md:w-[200px] md:h-[35px]  bg-white shadow">
        
        <div class="w-[199.37px] ml-[5px] md:w-[199.37px] justify-start items-center inline-flex">
            <div class="w-[186.20px] text-neutral-500 text-[8.06px] md:text-[9.17px] lg:text-[15px] font-medium font-['Inter'] md:leading-3 leading-[10.48px]">Airtime Top-up</div>
        </div>
    </div>
    <hr class="bg-slate-500 h-[1px] w-[175px]"></hr>
    <div class="w-44 h-[29px] md:w-[200px] md:h-[35pxpx] bg-white shadow">
        
        <div class="w-[199.37px] ml-[5px] md:w-[199.37px]  justify-start items-center inline-flex">
            <div class="w-[186.20px] text-neutral-500 text-[8.06px] md:text-[9.17px] lg:text-[15px] font-medium font-['Inter'] md:leading-3 leading-[10.48px]">Data Top-up</div>
        </div>
    </div>
    <hr class="bg-slate-500 h-[1px] w-[175px]"></hr>
    <div class="w-44 h-[29px] md:w-[200px] md:h-[35px] bg-white shadow">
        
        <div class="w-[199.37px] ml-[5px] md:w-[199.37px]  justify-start items-center inline-flex">
            <div class="w-[131.60px] text-neutral-500 text-[8.06px] md:text-[9.17px] lg:text-[15px] font-medium font-['Inter'] md:leading-3 leading-[10.48px]">Bills Payments</div>
        </div>
    </div>
    <hr class="bg-slate-500 h-[1px] w-[175px]"></hr>
  </div>
)}




  <div className="flex justify-center items-center gap-[20px] mt-[300px] md:mt-[200px] flex-row">
  <div class="text-black text-[8px] lg:text-[12px] font-medium font-['Inter'] md:leading-[8.94px]  leading-[10.40px]">You need help?</div>
  <div class="w-[60.19px] h-[15.73px] px-[8.59px] py-[2.86px] md:w-[42.19px] lg:w-[90px] md:h-[11.73px] md:px-[8.59px] md:py-[2.86px] md:rounded-[5.16px] bg-blue-900 rounded-[5.16px] justify-center items-center gap-[5.73px] inline-flex">
    <div class="text-white text-[8px] md:text-[4.58px] lg:text-[12px] md:leading-[5.96px] font-medium font-['Inter'] leading-[10.40px]">Contact Us</div>
</div>
  </div>
  </div>

        </>
        </DashBoardLayout>
        )
        }

