import  React, {useState} from 'react';
// import menu from "./assets/menu1.png";
// import square from "./assets/3square.png";
// import wallet from "./assets/wallet.png";
// import xport from "./assets/export.png";
// import translate from "./assets/translate.png";
// import transaction from "./assets/transaction-minus.png";
// import arrow from "./assets/arrow-down1.png";
// import align from "./assets/align-vertically.png";
// import arrow1 from "./assets/arrow-down.png";
// import card from "./assets/card.svg";
// import arrow2 from "./assets/arrow-down2.png";
// import pos from "./assets/card-pos.png";
// import arrow3 from "./assets/arrow-down3.png";
// import gameboy from "./assets/gameboy.png";
// import cpu from "./assets/cpu-setting.png";
// import status from "./assets/status-up.png";
// import coin from "./assets/coin.png";
// import trend from "./assets/trend-up.png";
// import arrow4 from "./assets/arrow-down4.svg";
// import attach from "./assets/attach-square.svg";
// import arrow5 from "./assets/arrow-down5.png";
// import profile from "./assets/profile-circle.png";
// import document from "./assets/document-text.png";
// import building from "./assets/building.png";
// import clipboard from "./assets/clipboard-tick.png";
// import messages from "./assets/messages.png";
// import sms from "./assets/sms.png";
// import whatsapp from "./assets/whatsapp.png";
// import call from "./assets/call-remove.png";
// import logout from "./assets/logout.png";
// import profileuser from "./assets/profile-2user.png";
// import arrow6 from "./assets/arrow-down6.png";
// import notification from "./assets/notification.svg";
// import logouts from "./assets/logout.svg";
// import drops from "./assets/arrow-down.svg";
import arrowsquare from "./assets/arrow-square-right.svg";
import arrowsquare1 from "./assets/arrow-square-right.png";
import group1 from "./assets/Group.png";
import arrow7 from "./assets/arrow-down7.svg";
import filter from "./assets/document-filter.svg";
import menus from "./assets/menu.png";
import arrow9 from "./assets/arrow-down9.svg";
import arrows from "./assets/arrow-square-right1.svg";
import arrows2 from "./assets/arrow-square-right2.png";
import arrows3 from "./assets/arrow-square-right3.svg";
import arrows4 from "./assets/arrow-square-right4.svg";
import arrows5 from "./assets/arrow-square-right5.svg";
import arrows6 from "./assets/arrow-square-right6.png";
import arrows7 from "./assets/arrow-square-right7.png";
import arrows8 from "./assets/arrow-down8.png";
import arrows9 from "./assets/arrow-down12.svg";
import arrows10 from "./assets/arrow-down11.svg";
import arrows11 from "./assets/arrow-down10.svg";
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
import { DashBoardLayout } from '../Dashboard/Layout/DashBoardLayout';
import cash from "./assets/cash receipt from online shopping on mobile phone (1).png"






export default function WalletSummaryPage () {

    const [isOpen, setIsOpen] = useState(false); 
    const toggleDropdown = () => { setIsOpen((prevIsOpen) => !prevIsOpen); };
      

    return (


<DashBoardLayout>


        
<div className=" w-[360px] h-[1405px] lg:w-full md:w-full  bg-white">


<div className="h-[64.71px] lg:h-[196px] md:h-[112.29px] w-[312px]  md:rounded-[11.46px] lg:rounded-[20px] mx-auto md:w-full lg:w-full gap-6   px-[16.51px] md:px-[28.65px]  pl-[50px] pr-[60.79px] py-[22px] ml-[5px] bg-gradient-to-r from-yellow-300 to-rose-400 rounded-[6px] md:gap-[42.97px] justify-start lg:items-start flex">
    <div className="py-[11px] md:ml-[40px] md:py-[16.61px] lg:py-[29px] lg:align-middle flex flex-col md:gap-[8.59px] gap-1 lg:gap-1.5">
        <div className="lg:w-[481px] md:w-[275.57px] lg:ml-[0px] ml-[-35px] mt-[-25px] lg:mt-[0px] w-[160.85px] text-black lg:text-2xl md:text-sm text-[8.08px] font-semibold font-['Poppins'] uppercase">MANAGE ALL YOUR TRANSACTIONS AT A TIME WITHOUT ANY HASSLE.</div>

        <div className="lg:w-[588px] md:w-[336.88px] w-[209px] lg:ml-[0px] ml-[-35px] lg:h-[65px] md:h-[37.24px] h-[21px] text-black lg:text-base md:text-[10.17px] text-[8px] font-normal font-['Poppins'] leading-0.1 lg:leading-tight">Select, filter, and manage all your transactions at a time, download all transactions stats and keep a record track.<br/></div>
    </div>
    <img className="lg:w-[170.21px] mt-[-15px]  lg:mt-[0px] ml-[8px] lg:ml-[150px] md:ml-[90px] md:w-[91.21px] w-[53.24px] lg:h-[150px] md:h-[85.94px] h-[50.16px] " src= {cash} alt="" />
</div>
<div className=" lg:top-[780px] top-[410px] md:top-[680px] absolute mt-[20px]  lg:justify-start lg:items-center gap-[5px]  inline-flex">
    <div className="text-neutral-500 lg:text-xl md:text-[16px] text-[8px] font-semibold font-['Poppins']">Wallet History</div>
    <div className="lg:w-6 lg:h-6 w-3 h-3 md:w-[13.75px] md:h-[13.75px] lg:justify-center lg:items-center relative flex">
        
            <img src= {arrowsquare} alt="" />
        
    </div>
</div>
<div className=" lg:top-[400px] md:top-[280px] top-[151.82px] absolute lg:justify-start md:gap-[5px] lg:items-center lg:gap-[5px] inline-flex">
    <div className="text-neutral-500 lg:text-xl text-[8px] md:text-[16px] font-semibold font-['Poppins']">Wallet Summary</div>
    <div className="lg:w-6 lg:h-6 w-3 h-3 lg:justify-center md:w-[13.75px] md:h-[13.75px] md:mt-[6px] lg:items-center relative flex">
        
            <img src= {arrowsquare1} alt="" />
        
    </div>
</div>
<div className="lg:px-[] lg:py-[25px] py-[10px] lg:top-[455px] gap-[5px] mt-[15%] lg:mt-[150px] bg-indigo-300 bg-opacity-20 md:rounded-[11.46px] lg:rounded-[20px] rounded-[6px] justify-center lg:w-full w-[312px] md:w-full md:h-[68.75px] md:px-[140.10px] md:py-[14.32px]  items-center inline-flex">
    <div className="lg:self-stretch lg:justify-start lg:items-center lg:gap-4 md:gap-[9.17px] gap-[10px] inline-flex">
        <div className="lg:justify-start lg:items-center gap-[10px] md:gap-[5.73px] lg:gap-[5.73px] flex">
            <div className="lg:w-[70px] lg:h-[70px] w-6 h-6 md:w-[40.10px] md:h-[40.10px] lg:gap-[5.73px] relative">
                <div className="lg:w-[70px] lg:h-[70px] left-0 top-0 w-6 h-6 md:w-[40.10px] md:h-[40.10px]  absolute bg-white rounded-full"></div>
                <div className="lg:w-[29.27px] lg:h-[29.27px] left-[20px] lg:top-[20px] w-2.5 h-2.5 top-[6.86px] md:w-[16.77px] md:h-[16.77px] md:left-[11.46px] md:top-[11.46px]  absolute">
                    <img src= {group1} class="lg:w-[29.27px] lg:h-[27.45px] ml-[-12.5px] left-0 lg:top-[0.91px] w-2.5 h-[9.41px] top-[0.31px]  md:w-[16.77px] md:h-[15.73px] md:left-0 md:top-[0.52px] absolute" alt="" />
                
                </div>
            </div>
            <div  className="lg:justify-start lg:items-start mt-[5px] gap-[5.5px] lg:gap-[11px] md:gap-[6.30px]  flex">
                <div className="text-black lg:text-xl text-[10px] md:text-[16px] font-semibold font-['Poppins'] lg:leading-relaxed md:leading-[14.90px] leading-[10.40px] ">Available Balance</div>
                <div className="text-neutral-500 lg:text-xl text-[10px] md:text-[16px] font-medium font-['Poppins'] lg:leading-relaxed md:leading-[14.90px] leading-[10.40px]">(₦50,000.00)</div>
            </div>
        </div>
        <div onClick={toggleDropdown} className="lg:w-6 lg:h-6 w-[13.75px] mt-[5px] h-[13.75px] md:w-[13.75px] md:h-[13.75px] lg:justify-center lg:items-center flex">
            
                <img src={arrow7} alt="" />
            
        </div>
    </div>
</div>
<div className="lg:pl-[30px] pl-[0.33px] lg:pr-[484.30px] pr-[92.66px] lg:py-[11px] md:w-full h-[41.25px] md:pl-[9.17px] md:pr-[277.40px] md:pt-[6.39px] md:pb-[6.40px] py-[2.67px] lg:top-[632px] top-[243.82px] lg:w-full w-[312px] md:[536px] mt-[50px] bg-white shadow border-t border-b border-black border-opacity-30 lg:justify-start lg:items-center lg:gap-[50.53px]  md:gap-[28.72px]  inline-flex">
    <div className="lg:self-stretch lg:p-2.5 md:p-[5.73px] p-[3.33px] bg-white lg:rounded-[5px] rounded-sm md:rounded-[2.86px] shadow lg:justify-start lg:items-center lg:gap-[6.62px] mt-[8px] gap-[2.21px] md:gap-[4px] inline-flex">
        <div className="text-blue-900 lg:text-xl text-[8px] md:text-[15px] font-semibold font-['Poppins']">Filter by Date</div>
        <div className="lg:w-[19.85px] w-3 lg:h-[19.85px] h-3 md:w-[11.37px] md:h-[11.37px] relative lg:justify-center lg:items-center flex">
    
                <img src={filter} alt="" />
        </div>
    </div>
    <div className="lg:self-stretch lg:justify-start mt-[12px] lg:items-center lg:gap-2.5 gap-[5.73px] md:gap-[5.73px] inline-flex">
        <div className="lg:justify-start lg:items-center lg:gap-[5px] md:gap-[2.86px] gap-[2.86px] flex">
            <div className="lg:w-[19.85px] w-[11.37px] lg:h-[19.85px] h-[11.37px] lg:justify-center lg:items-center relative flex">
                
                    <img src= {menus} alt="" />
            </div>
            <div className="text-neutral-500 lg:text-xl text-[8px] md:text-[15px] font-semibold font-['Poppins']">Filter By Status</div>
        </div>
        <div className="lg:w-[19.85px] w-[11.37px] lg:h-[19.85px] h-[11.37px]  lg:justify-center lg:items-center relative flex">
                <img src= {arrow9} alt="" />
            </div>
    </div>
</div>
<div className="  lg:top-[736px] top-[287.82px] mt-[50px] w-[312px] lg:w-full md:w-full md:gap-[51.85px]  lg:justify-between lg:items-center lg:gap-[90.50px] gap-2.5 inline-flex">
     <div className="lg:p-[5.65px] md:p-[3.24px] md:py-[1px] p-[1px] bg-indigo-300 bg-opacity-20 md:rounded-lg lg:rounded-[14.70px] rounded-[4.83px] md:gap-[6.48px] lg:justify-start lg:items-start lg:gap-[11.31px] gap-[3.71px] flex">
         <div className="text-black lg:text-[20px] text-[10px] md:text-sm font-semibold font-['Poppins']">NGN</div>
         <div className="hidden md:block lg:w-[15.83px] w-[5.20px] lg:h-[15.83px] md:w-[9.07px] md;h-[9.07px] md:h-[5.20px] lg:justify-center lg:items-center relative ">
             
                 <img src= {arrows8} alt="" />
            
         </div>
     </div>
     <div className="lg:px-10 px-[5px] lg:py-[15px] md:w-full lg:w-[200px] md:px-[22px] md:py-[8.9px] py-[4.92px] md:gap-[2.86px] md:rounded  bg-emerald-100 lg:rounded-md rounded-sm flex-col lg:justify-center lg:items-center lg:gap-[5px] gap-[1.64px] inline-flex">
         <div className="lg:justify-start lg:items-center md:gap-[2.86px] lg:gap-[5px] inline-flex">
             <div className="text-black lg:text-base text-[10px] md:text-sm font-medium font-['Poppins']">Total Inflows</div>
             <div className="lg:w-[15px] w-[4.92px] lg:h-[15px] h-[4.92px] md:w-[8.59px] md:h-[8.59px] lg:justify-center lg:items-center relative flex">
                 
                     <img src={arrows9} alt="" />
                 
             </div>
         </div>
         <div className="lg:justify-start lg:items-start lg:gap-[5px] gap-[1.64px] md:gap-[2.86px] inline-flex">
             <div className="text-black lg:text-base text-[10px] md:text-[16px] font-semibold font-['Poppins'] md:leading-[11px] lg:leading-tight leading-3">₦</div>
             <div className="text-black lg:text-basetext-[10px] md:text-[16px]   font-medium font-['Poppins'] md:leading-[11px] lg:leading-tight leading-3">96,001,55</div>
         </div>
     </div>
     <div className="lg:w-[200px] w-[99px] lg:px-10 px-[5px] lg:py-[15px] py-[4.92px] bg-indigo-300 bg-opacity-20 md:w-full md:px-[22px] md:py-[8.9px] md:gap-[2.86px] lg:rounded-md rounded-sm flex-col lg:justify-center lg:items-center lg:gap-[5px]gap-[1.64px]  inline-flex">
         <div className="lg:justify-start lg:items-center lg:gap-[5px] gap-[1.64px] md:gap-[2.86px] inline-flex">
             <div className="text-black lg:whitespace-nowrap lg:text-base text-[10px] md:text-[16px] font-medium font-['Poppins']">Total Transactions</div>
             <div className="lg:w-[15px] w-[4.92px] lg:h-[15px] h-[4.92px] md:w-[8.59px] md:h-[8.59px] relative lg:justify-center lg:items-center flex">
                 
                     <img src={arrows10} alt="" />
                 
             </div>
         </div>
         <div className="lg:justify-start lg:items-start lg:gap-[5px] md:gap-[2.86px] gap-[1.64px] inline-flex">
             <div className="text-black lg:text-base text-[8px] md:text-[16px] font-medium font-['Poppins'] lg:leading-tight leading-3">10,000</div>
         </div>
     </div>
     <div className="lg:w-[200px] lg:px-10 lg:py-[15px] w-[82px]  px-[px] py-[4.92px] md:w-full md:px-[22px] md:py-[8.9px]  bg-red-200 lg:rounded-md rounded-sm flex-col lg:justify-center lg:items-center lg:gap-[5px] gap-[1.64px] inline-flex">
         <div className="lg:justify-start lg:items-center lg:gap-[5px] gap-[1.64px] md:gap-[2.86px] inline-flex">
             <div className="text-black lg:text-base text-[10px] md:text-[16px] font-medium font-['Poppins']">Total Outflows</div>
             <div className="lg:w-[15px] lg:h-[15px] w-[4.92px] h-[4.92px] md:w-[8.59px] md:h-[8.59px] origin-top-left -rotate-180 lg:justify-center relative lg:items-center flex">
                 
                     <img src={arrows11} alt="" />
                 
             </div>
         </div>
         <div className="lg:justify-start lg:items-start lg:gap-[5px] gap-[1.64px] md:gap-[2.86px] inline-flex">
             <div className="text-black lg:text-base text-[10px] md:text-[16px] font-semibold font-['Poppins'] md:leading-[11px] lg:leading-tight leading-3">₦</div>
             <div className="text-black lg:text-basetext-[10px]  font-medium font-['Poppins'] lg:leading-tight md:leading-[11px] leading-3">96,001,55</div>
         </div>
     </div>
 </div>

 {isOpen && (
 <div className="lg:left-[270px] lg:ml-[200px] lg:top-[520px] md:w-[300px] left-[58px] mt-[70px] w-[62%] lg:w-full  top-[154px] md:top-[360px] absolute flex-col lg:justify-start md:ml-[200px] lg:items-start inline-flex">
     <div className="lg:pl-2.5 pr-[px] lg:w-[370px] lg:pt-[7px] lg:pb-[7.73px]   pt-[3px] pb-[px] bg-white shadow lg:justify-start lg:items-center    md:pt-1 md:pb-[4.43px] inline-flex">
         <div className="lg:self-stretch lg:justify-start lg:items-center flex md:gap-[2.86px] md:h-[30px]  flex-row lg:gap-[5px] lg:flex">
             <div className="lg:w-[29.27px] lg:h-[29.27px] w-[px] h-[16.77px] md:w-[16.77px] md:h-[16.77px] relative bg-white">
                 <div className="lg:w-[29.27px] w-[15px] lg:h-[27.45px] h-[35px] lg:left-0 lg:top-[0.91px] md:w-[18px] md:h-[35px] md:left-0 md:top-[0.52px] absolute">
                     <img src= {group5} alt="" />
                 </div>
             </div>
             <div className="text-neutral-500 text-[8px] md:text-[16px] lg:text-base lg:font-medium font-['Inter'] md:leading-3 lg:leading-tight">NGN Wallet (50,000.00)</div>
         </div>
     </div>
     <div className="lg:pl-2.5  lg:pt-[7px] mt-[15px] lg:w-[370px] lg:pb-[7.73px] bg-white shadow lg:justify-start lg:items-center md:h-[30px] md:pl-[5.73px] md:pr-[84.48px] md:pt-1 md:pb-[4.43px]  inline-flex">
         <div className="lg:self-stretch lg:justify-start lg:items-center flex flex-row gap-[5px] md:gap-[2.86px] lg:gap-[5px] lg:flex">
             <div className="lg:w-[29.27px] lg:h-[29.27px] lg:relative md:w-[16.77px] md:h-[16.77px] bg-white">
                 <div className="lg:w-[28.77px] w-[15px] lg:h-[26.09px] h-[30px] lg:left-[0.50px] lg:top-[3.18px] md:w-[18px] md:h-[35px] md:left-0 md:top-[0.52px] lg:absolute">
                     <img src= {flags} alt="" />
                 </div>
             </div>
             <div className="text-neutral-500 lg:text-base md:text-[16px] text-[8px] font-medium font-['Inter'] md:leading-3 leading-tight">USD Wallet (0.00)</div>
         </div>
     </div>
     <div className="lg:pl-2.5  lg:pt-[7px] lg:w-[370px] lg:pb-[7.73px] bg-white shadow lg:justify-start lg:items-center md:h-[30px]  md:pl-[5.73px] md:pr-[84.48px] md:pt-1 md:pb-[4.43px] inline-flex">
         <div className="lg:self-stretch lg:justify-start lg:items-center flex flex-row gap-[5px] md:gap-[2.86px] lg:gap-[5px] lg:flex">
             <div className="lg:w-[29.27px] lg:h-[29.27px] md:w-[16.77px] md:h-[16.77px] relative bg-white">
                 <div className="lg:w-[28.26px] lg:h-[28.26px] lg:left-[0.50px] lg:top-[0.51px] md:w-[18px] md:h-[35px] md:left-0 md:top-[0.52px] absolute">
                 </div>
                 <img src={EUR} className="lg:w-[29.27px] w-[15px] mt-[-10px] lg:h-[29.27px] h-[30px] lg:left-0 lg:top-0 " alt="" />
                 
             </div>
             <div className="text-neutral-500 lg:text-base text-[8px] md:text-[16px] font-medium font-['Inter'] md:leading-3 leading-tight">EUR Wallet (0.00)</div>
         </div>
     </div>
     <div className="lg:pl-2.5 lg:w-[370px] lg:pt-[7px] lg:pb-[7.73px] bg-white shadow lg:justify-start lg:items-center md:h-[30px]  md:pl-[5.73px] md:pr-[84.48px] md:pt-1 md:pb-[4.43px] inline-flex">
         <div className="lg:self-stretch lg:justify-start lg:items-center flex-row gap-[5px] lg:gap-[5px] md:gap-[2.86px] inline-flex">
             <div className="lg:w-[29.27px] w-[15px] lg:h-[29.27px] h-[30px] md:w-[16.77px] md:h-[16.77px] relative bg-white">
             <div className="lg:w-[28.26px] lg:h-[28.26px] lg:left-[0.50px] lg:top-[0.51px] md:w-[18px] md:h-[35px] md:left-0 md:top-[0.52px] absolute">
                 </div>

                 <img src= {flags3} alt="" />
                 <div className="lg:w-[17.82px] lg:h-[17.82px] lg:left-[5.72px] lg:top-[5.73px] absolute">
                     
                 </div>
             </div>
             <div className="text-neutral-500 lg:text-base text-[8px] md:text-[15px] font-medium font-['Inter'] md:leading-3 leading-tight">GBP Wallet (0.00)</div>
         </div>
     </div>
     <div className="lg:pl-2.5  lg:pt-[7px] lg:pb-[7.73px] lg:w-[370px] bg-white shadow lg:justify-start lg:items-center md:h-[30px]  md:pl-[5.73px] md:pr-[84.48px] md:pt-1 md:pb-[4.43px]  inline-flex">
         <div className="lg:self-stretch lg:justify-start lg:items-center lg:gap-[5px] flex-row gap-[5px] md:gap-[2.86px] inline-flex">
             <div className="lg:w-[29.27px] w-[15px] lg:h-[29.27px] h-[30px] md:w-[16.77px] md:h-[16.77px] relative bg-white">
             <div className="lg:w-[28.26px] lg:h-[28.26px] lg:left-[0.50px] lg:top-[0.51px] md:w-[18px] md:h-[35px] md:left-0 md:top-[0.52px] absolute">
                 </div>

                 <img src= {group10} alt="" />
                 <div className="lg:w-[27.45px] w-[15px] lg:h-[29.27px] lg:left-[0.91px] lg:top-0 absolute">
                    
                 </div>
             </div>
             <div className="text-neutral-500 lg:text-base text-[8px] md:text-[15px] font-medium font-['Inter'] md:leading-3 leading-tight">AUD Wallet (0.00)</div>
         </div>
     </div>
     <div className="lg:pl-2.5  lg:pt-[7px] lg:w-[370px] lg:pb-[7.73px] bg-white shadow lg:justify-start lg:items-center md:h-[30px] md:pl-[5.73px] md:pr-[84.48px] md:pt-1 md:pb-[4.43px] inline-flex">
         <div className="lg:self-stretch lg:justify-start lg:items-center lg:gap-[5px] flex-row gap-[5px] md:gap-[2.86px] inline-flex">
             <div className="lg:w-[29.27px] w-[15px] lg:h-[29.27px] h-[30px] md:w-[16.77px] md:h-[16.77px] relative bg-white">
                 <img src={country5} alt="" />
                 <div className="lg:w-[28.26px] lg:h-[28.26px] lg:left-[0.50px] lg:top-[0.51px] md:w-[18px] md:h-[35px] md:left-0 md:top-[0.52px] absolute">
                 </div>

                 {/* <div className="lg:w-[9.11px] lg:h-[17.34px] lg:left-[10.07px] lg:top-[5.96px] absolute"> */}
                 {/* </div> */}
                 <div className="lg:w-[6.36px] lg:h-[14.71px] lg:left-[11.46px] lg:top-[7.28px] md:w-[16.77px] md:h-[15.73px] md:left-0 md:top-[0.52px]  absolute"></div>
                 
             </div>
             <div className="text-neutral-500 lg:text-base text-[8px] md:text-[16px] font-medium font-['Inter'] md:leading-3 leading-tight">KES Wallet (0.00)</div>
         </div>
     </div>
 </div>
 )}


 <div className=" lg:w-full w-[312px] lg:h-[60px]  lg:mt-[90px] md:mt-[120px]  bg-white mt-[40px] md:w-full md:h-[30.94px] md:pl-[9.17px]   border border-black border-opacity-30 "> 
     <div className='lg:items-center  justify-between flex'>
        <div>
     <div className="flex lg:gap-4 flex-row  ">
         <div className="lg:w-4 lg:h-4 md:w-[9.17px] md:h-[9.17px] lg:items-center flex">
             <div className="lg:w-4 mt-[5px] w-3 lg:h-4 md:w-[9.17px] md:h-[9.17px] ">
                 <img src= {normal} alt="" />
             </div>
         </div>
         <div className="text-neutral-400 text-[9px] lg:text-base mt-[5px] md:text-sm leading-3 whitespace-nowrap font-medium font-['Poppins'] lg:leading-tight">Search for Transactions, e.g; Order Number
     </div>
     </div>
     </div>
     <div className=" lg:px-[27.50px] md:pl-[15.59px] md:pr-[15.58px] md:py-[8.47px] lg:w-[100px] lg:py-[15px] bg-white shadow border-black border-opacity-50 md:w-[80.78px]   lg:items-center flex">
         <div className="lg:self-stretch md:gap-[2.86px] lg:ml-[-30px] lg:mt-[-3px]  lg:items-center lg:gap-[5px] flex">
             <div className="text-neutral-500 md:text-sm lg:text-base text-[9px] mt-[5px]  font-medium font-['Poppins']">Search</div>
             <div className="lg:w-6 lg:h-6 md:w-[13.75px] md:h-[13.75px] lg:items-center flex">
                 <div className="lg:w-6 mt-[5px] w-3 lg:h-6 md:w-[13.75px] md:h-[13.75px] ">
                     <img src= {refresh} alt="" />
                 </div>
             </div>
         </div>
     </div>
 </div>
 </div>
 <div className="hidden md:hidden lg:block  shadow-black shadow-lg lg:w-full lg:mt-[-30px] ">
    
        <table className="w-full lg:justify-between lg:items-center  flex flex-col bg-white shadow ">
            
               <div className=" "> <thead class="flex w-full  flex-row bg-indigo-200">
               <div> <tr className=" flex border-none flex-row ">
                   <div><th className="px-6 py-3 w-[202px] border-none  text-black text-base font-semibold font-['Inter'] leading-tight">Products</th></div> 
                    <div><th className="px-6 py-3 w-[202px] border-none text-black text-base font-semibold font-['Inter'] leading-tight">Description</th></div>
                    <div><th className="px-6 py-3 w-[202px] border-none text-black text-base font-semibold font-['Inter'] leading-tight">Order No</th></div>
                    <div><th className="px-6 py-3 w-[202px] border-none  text-black text-base font-semibold font-['Inter'] leading-tight">Amount</th></div>
                   <div><th className="px-6 py-3 w-[202px] text-black border-none text-base font-semibold font-['Inter'] leading-tight">Date & Time</th></div> 
                    <div><th className="px-6 py-3 w-[202px] text-black text-base border-none  font-semibold font-['Inter'] leading-tight">Status</th></div>
                </tr></div>
            </thead>
               </div>
                 
               
               
        
            <tbody className="h-[708px] flex flex-col bg-white ">
                <tr className="">
                    <td className="px-6 py-4 border-none w-[205px] text-black text-base font-medium font-['Inter'] leading-tight">
                        Virtual Account
                    </td>
                    <td className="px-6 py-4 border-none whitespace-nowrap w-[205px] text-neutral-500 text-base font-medium font-['Inter'] leading-tight"  >
                        NGN Wallet Top-up
                    </td>
                    <td className="px-6 py-4 w-[205px] border-none  text-neutral-500 text-base font-medium font-['Inter'] leading-tight">
                        0000000
                    </td>
                    <td className="px-6 py-4 w-[205px] border-none text-neutral-500 text-base font-medium font-['Inter'] leading-tight">₦1,000.00</td>
                    <td className="px-6 py-4 border-none whitespace-nowrap w-[205px] text-neutral-500 text-base font-medium font-['Inter'] leading-tight ">May 21st, 2023,<br/>07:21:00pm</td>
                    <td className="border-none"> <div class=" bg-white lg:gap-5 flex-row lg:justify-start lg:items-center flex"> <div className=" whitespace-nowrap text-white border-b px-2.5 py-[5px]  h-[31px] w-[120px]  bg-green-300 rounded-[5px] text-base font-medium font-['Inter'] flex lg:justify-center lg:items-center lg:gap-2.5 leading-tight ">Successful</div>
                    <div className="w-[15px] h-[15px] lg:justify-center lg:items-center flex"><img src= {arrows} alt="" /></div></div>
                    </td>
                </tr>
                
                <hr className='bg-[#7c7c7c] w-full h-[1.1px]'></hr>
                <tr>
                    <td className="whitespace-nowrap border-none  w-[205px] text-black px-6 py-4 text-base font-medium font-['Inter'] leading-tight">Withdrawal</td>
                    <td className=" text-neutral-500 border-none w-[205px] px-6 py-4 text-base font-medium font-['Inter'] leading-tight">From USD Wallet to Bank</td>
                    <td className="text-neutral-500 w-[205px] border-none text-base px-6 py-4  font-medium font-['Inter'] leading-tight">0000000</td>
                    <td className="text-neutral-500 w-[205px] border-none px-6 py-4 text-base font-medium font-['Inter'] leading-tight">₦25,000.00</td>
                    <td className=" px-6 py-4 w-[205px] text-neutral-500 border-none text-base font-medium font-['Inter'] leading-tight">May 21st, 2023,<br/>07:21:00pm</td>
                    <td className='border-none'><div className=" bg-white gap-5 flex-row lg:justify-start lg:items-center flex"><div className="text-white whitespace-nowrap text-base font-medium font-['Inter'] px-2.5 py-[5px]  h-[31px] w-[120px] bg-green-300 rounded-[5px] lg:justify-center lg:items-center lg:gap-2.5 flex leading-tight">Successful</div>
                     <div className="w-[15px] h-[15px] lg:justify-center lg:items-center flex "><img src= {arrows2} alt="" /></div></div>
                    </td>
                    </tr>
                    <hr className='bg-[#7c7c7c] w-full h-[1.1px]'></hr>
                    
                <tr>
                    <td className="w-[205px] border-none  text-black text-base px-6 py-4 font-medium font-['Inter'] leading-tight">Card Payment</td>
                    <td className="w-[205px] border-none text-neutral-500 text-base px-6 py-4 font-medium font-['Inter'] leading-tight">NGN Wallet Top-up</td>
                    <td className="text-neutral-500 w-[205px] border-none text-base px-6 py-4 font-medium font-['Inter'] leading-tight">0000000</td>
                    <td className="text-neutral-500 w-[205px] border-none text-base px-6 py-4 font-medium font-['Inter'] leading-tight">₦25,000.00</td>
                    <td className=" text-neutral-500 w-[205px] px-6 py-4 border-none text-base font-medium font-['Inter'] leading-tight">May 21st, 2023,<br/>07:21:00pm</td>
                    <td className='border-none'><div className=" bg-white gap-5 flex-row justify-start items-center flex"><div class="text-white whitespace-nowrap text-base font-medium font-['Inter'] px-2.5 py-[5px]  h-[31px] w-[120px] bg-green-300 rounded-[5px] lg:justify-center lg:items-center lg:gap-2.5 flex leading-tight">Successful</div>
                        <div className="w-[15px] h-[15px] justify-center items-center flex "><img src= {arrows3} alt="" /></div></div>

                    </td>


                </tr>
                <hr className='bg-[#7c7c7c] w-full h-[1px]'></hr>

                  
                <tr>
                    <td className="w-[205px] border-none text-black px-6 py-4 text-base font-medium font-['Inter'] leading-tight">Money Transfer</td>
                    <td className="w-[205px] border-none text-neutral-500 px-6 py-4 text-base font-medium font-['Inter'] leading-tight">From NGN Wallet to AremxyPlug</td>
                    <td className="text-neutral-500 border-none text-base w-[205px] px-6 py-4 font-medium font-['Inter'] leading-tight">0000000</td>
                    <td className="text-neutral-500 border-none text-base font-medium w-[205px] px-6 py-4 font-['Inter'] leading-tight">₦25,000.00</td>
                    <td className="w-[205px] border-none text-neutral-500 px-6 py-4 text-base font-medium font-['Inter'] leading-tight">May 21st, 2023,<br/>07:21:00pm</td>
                    <td className='border-none'><div className=" bg-white gap-5 flex-row lg:justify-start lg:items-center flex"><div className="text-white whitespace-nowrap text-base font-medium font-['Inter'] px-2.5 py-[5px]  h-[31px] w-[120px] bg-green-300 rounded-[5px] lg:justify-center lg:items-center lg:gap-2.5 flex leading-tight">Successful</div>
                        <div className="w-[15px] h-[15px] lg:justify-center lg:items-center flex "><img src= {arrows4} alt="" /></div></div>
                    </td>

                </tr>
                <hr className='bg-[#7c7c7c] w-full h-[1px]'></hr>
                
                <tr>
                    <td className="px-6 py-4 w-[205px] text-black border-none text-base font-medium font-['Inter'] leading-tight">Money Transfer</td>
                    <td className="px-6 py-4 w-[205px] text-neutral-500 border-none text-base font-medium font-['Inter'] leading-tight">From NGN Wallet to Bank</td>
                    <td className="text-neutral-500 px-6 py-4 w-[205px] border-none text-base font-medium font-['Inter'] leading-tight">0000000</td>
                    <td className="text-neutral-500 border-none text-base w-[205px] px-6 py-4 font-medium font-['Inter'] leading-tight">₦50,000.00</td>
                    <td className="w-[205px] text-neutral-500 px-6 py-4 border-none text-base font-medium font-['Inter'] leading-tight">May 21st, 2023,<br/>07:21:00pm</td>
                    <td className='border-none'><div className=" bg-white lg:gap-5 flex-row lg:justify-start lg:items-center flex"> <div className="text-white text-base font-medium font-['Inter'] leading-tight w-[120px] h-[31px] p-2.5 bg-amber-200 rounded-[5px] lg:justify-center lg:items-center lg:gap-2.5  flex">Pending</div>
                        <div className="w-[15px] h-[15px] lg:justify-center lg:items-center flex "><img src= {arrows5} alt="" /></div></div>
                    </td>
                    


                </tr>
                <hr className='bg-[#7c7c7c] w-full h-[1px]'></hr>
                
                <tr>
                    <td className="w-[205px]  text-black px-6 py-4 border-none text-base font-medium font-['Inter'] leading-tight">Money Transfer</td>
                    <td className="w-[205px] px-6 py-4 text-neutral-500 border-none  text-base font-medium font-['Inter'] leading-tight">From NGN Wallet to AremxyPlug</td>
                    <td className="text-neutral-500 border-none px-6 py-4 w-[205px] text-base font-medium font-['Inter'] leading-tight">0000000</td>
                    <td className="text-neutral-500 border-none text-base px-6 py-4 w-[205px] font-medium font-['Inter'] leading-tight">$60,000.00</td>
                    <td className=" text-neutral-500 border-none text-base px-6 py-4 w-[205px] font-medium font-['Inter'] leading-tight">May 21st, 2023,<br/>07:21:00pm</td>
                    
                    <td className='border-none'><div className=" bg-white lg:gap-5 flex-row lg:justify-start lg:items-center flex"> <div className="text-white text-base font-medium font-['Inter'] leading-tight w-[120px] h-[31px] p-2.5 bg-red-300 rounded-[5px] lg:justify-center lg:items-center lg:gap-2.5  flex">Pending</div>
                        <div className="w-[15px] h-[15px] lg:justify-center lg:items-center flex "><img src= {arrows6} alt="" /></div></div>
                    </td>



                </tr>
                
                <hr className= 'bg-[#7c7c7c] w-full h-[1px]'></hr>

                <tr>
                    <td className="px-6 py-4 w-[205px] border-none text-black text-base font-medium font-['Inter'] leading-tight">International Transfer</td>
                    <td className=" w-[205px] px-6 py-4 text-neutral-500 border-none text-base font-medium font-['Inter'] leading-tight">From USD Wallet to Bank</td>
                    <td className="text-neutral-500 px-6 py-4 w-[205px] text-base border-none font-medium font-['Inter'] leading-tight">0000000</td>
                    <td className="text-neutral-500 text-base px-6 py-4 w-[205px] border-none font-medium font-['Inter'] leading-tight" >₦10,000.00</td>
                    <td className="w-[205px] text-neutral-500 text-base px-6 py-4 font-medium border-none font-['Inter'] leading-tight">May 21st, 2023,<br/>07:21:00pm</td>
                   
                   <td className='border-none'><div className=" bg-white gap-5 flex-row lg:justify-start lg:items-center flex"> <div className="text-white text-base font-medium font-['Inter'] leading-tight w-[120px] h-[31px] p-2.5 bg-amber-200 rounded-[5px] lg:justify-center lg:items-center lg:gap-2.5  flex">Pending</div>
                    <div className="w-[15px] h-[15px] lg:justify-center lg:items-center flex "><img src= {arrows7} alt="" /></div></div>
                </td>



                </tr>
                <hr className='bg-[#7c7c7c] w-full h-[1px]'></hr>
                
                

            </tbody>
            <div className="flex h-10 w-[100%] flex-col lg:gap-5  lg:items-center lg:justify-center mt-[-50px]">
    <div className="px-1.5 py-[3px] bg-white shadow border border-black border-opacity-30 lg:justify-start lg:items-center gap-[5px] inline-flex">
     <div className="text-neutral-500 text-xs font-medium font-['Inter'] leading-none">---The End---</div>
    </div>
    <div className="lg:justify-start lg:items-center lg:gap-[26px] inline-flex">
     <div className="text-black text-xs font-medium font-['Inter'] leading-none">You need help?</div>
     <div className="px-[15px] py-[5px] bg-blue-900 rounded-[9px] lg:justify-center lg:items-center lg:gap-2.5 flex">
         <div className="text-white text-[8px] font-medium font-['Inter'] leading-[10.40px]">Contact Us</div>
         </div>
     </div>
    </div>

        </table>
    

        </div>

        <div className='shadow lg:hidden md:hidden border h-[1000px] w-[312px] justify-center  border-opacity-20'>


        <div className="w-full   md:hidden h-[868.35px] px-[5px] py-5 bg-white  mt-[120px] flex-col ml-[6px] justify-center items-center gap-[21px] flex">
        
    <div className="flex-col justify-center items-start gap-11 flex">
        <div className="justify-start items-start gap-[100px] flex">
            <div className="flex-col justify-start items-start gap-[7.65px] flex">
                <div className="text-neutral-500 text-[8px] font-medium font-['Inter'] leading-[10.40px]">Order No : 0000000</div>
                <div className="text-black text-[8px] font-medium font-['Inter'] leading-[10.40px]">Product : Virtual Account</div>
                <div className="text-neutral-500 text-[8px] font-medium font-['Inter'] leading-[10.40px]">Description : NGN Wallet Top-up</div>
                <div className="text-neutral-500 text-[8px] font-medium font-['Inter'] leading-[10.40px]">Amount : ₦1,000.00</div>
            </div>
            <div className="flex-col justify-center items-start gap-[11.47px] flex">
                <div className="justify-end items-center gap-0.5 flex">
                    <div className="text-neutral-500 text-[8px] font-medium font-['Inter'] leading-[10.40px]">Status :</div>
                    <div className="px-[4.24px] py-[2.12px] bg-green-300 rounded-sm justify-start items-start gap-[4.24px] flex">
                        <div className="text-white text-[8px] font-medium font-['Inter'] leading-[10.40px]">Successful</div>
                    </div>
                </div>
                <div className='flex flex-row'>
                <div className="text-neutral-500 text-[8px] font-medium font-['Inter'] leading-[10.40px]">Date & Time : <br/>May 21st, 2023,<br/>07:21:00pm</div>
                <div className="w-3 h-3 mt-[20px]">
                    <img src={arrowA} alt="" />
                </div>
            </div>
            </div>
        </div>
        <div className="w-[277px] mt-[-30px] h-[0px] border border-black border-opacity-20"></div>
        <div className="justify-center items-start gap-[100px] flex">
            <div className="flex-col justify-start items-start gap-[7.65px] flex">
                <div className="text-neutral-500 text-[8px] font-medium font-['Inter'] leading-[10.40px]">Order No : 0000000</div>
                <div className="text-black text-[8px] font-medium font-['Inter'] leading-[10.40px]">Product : Withdrawal</div>
                <div className="text-neutral-500 text-[8px] font-medium font-['Inter'] leading-[10.40px]">Description : From USD Wallet<br/>to Bank</div>
                <div className="text-neutral-500 text-[8px] font-medium font-['Inter'] leading-[10.40px]">Amount : ₦25,000.00</div>
            </div>
            <div className="flex-col justify-center items-start gap-[11.47px] flex">
                <div className="justify-end items-center gap-0.5 flex">
                    <div className="text-neutral-500 text-[8px] font-medium font-['Inter'] leading-[10.40px]">Status :</div>
                    <div className="px-[4.24px] py-[2.12px] bg-green-300 rounded-sm justify-start items-start gap-[4.24px] flex">
                        <div className="text-white text-[8px] font-medium font-['Inter'] leading-[10.40px]">Successful</div>
                    </div>
                </div>
                <div className='flex flex-row'>
                <div className="text-neutral-500 text-[8px] font-medium font-['Inter'] leading-[10.40px]">Date & Time : <br/>May 21st, 2023,<br/>07:21:00pm</div>
                <div className="w-3 h-3 mt-[20px]">
                    <img src={arrowB} alt="" />
                </div>
                </div>
            </div>
        </div>
        <div className="w-[277px] mt-[-30px] h-[0px] border border-black border-opacity-20"></div>
        <div className="justify-start items-start gap-[100px] flex">
            <div className="flex-col justify-start items-start gap-[7.65px] flex">
                <div className="text-neutral-500 text-[8px] font-medium font-['Inter'] leading-[10.40px]">Order No : 0000000</div>
                <div className="text-black text-[8px] font-medium font-['Inter'] leading-[10.40px]">Product : Card Payment</div>
                <div className="text-neutral-500 text-[8px] font-medium font-['Inter'] leading-[10.40px]">Description : NGN Wallet Top-up</div>
                <div className="text-neutral-500 text-[8px] font-medium font-['Inter'] leading-[10.40px]">Amount : ₦25,000.00</div>
            </div>
            <div className="flex-col justify-center items-start gap-[11.47px] flex">
                <div className="justify-end items-center gap-0.5 inline-flex">
                    <div className="text-neutral-500 text-[8px] font-medium font-['Inter'] leading-[10.40px]">Status :</div>
                    <div className="px-[4.24px] py-[2.12px] bg-green-300 rounded-sm justify-start items-start gap-[4.24px] flex">
                        <div className="text-white text-[8px] font-medium font-['Inter'] leading-[10.40px]">Successful</div>
                    </div>
                </div>
                <div className='flex flex-row'>
                <div className="text-neutral-500 text-[8px] font-medium font-['Inter'] leading-[10.40px]">Date & Time : <br/>May 21st, 2023,<br/>07:21:00pm</div>
                <div className="w-3 h-3 mt-[20px]">
                    <img src={arrowC} alt="" />
                </div>
            </div>
            </div>
        </div>
        <div className="w-[277px] mt-[-30px] h-[0px] border border-black border-opacity-20"></div>
        <div className="justify-center items-start gap-[100px] inline-flex">
            <div className="flex-col justify-start items-start gap-[7.65px] flex">
                <div className="text-neutral-500 text-[8px] font-medium font-['Inter'] leading-[10.40px]">Order No : 0000000</div>
                <div className="text-black text-[8px] font-medium font-['Inter'] leading-[10.40px]">Product : Money Transfer</div>
                <div className="text-neutral-500 text-[8px] font-medium font-['Inter'] leading-[10.40px]">Description : From NGN Wallet<br/>to AremxyPlug</div>
                <div className="text-neutral-500 text-[8px] font-medium font-['Inter'] leading-[10.40px]">Amount : ₦25,000.00</div>
            </div>
            <div className="flex-col justify-center items-start gap-[11.47px] flex">
                <div className="justify-end items-center gap-0.5 inline-flex">
                    <div className="text-neutral-500 text-[8px] font-medium font-['Inter'] leading-[10.40px]">Status :</div>
                    <div className="px-[4.24px] py-[2.12px] bg-green-300 rounded-sm justify-start items-start gap-[4.24px] flex">
                        <div className="text-white text-[8px] font-medium font-['Inter'] leading-[10.40px]">Successful</div>
                    </div>
                </div>
                <div className='flex flex-row'>
                <div className="text-neutral-500 text-[8px] font-medium font-['Inter'] leading-[10.40px]">Date & Time : <br/>May 21st, 2023,<br/>07:21:00pm</div>
                <div className="w-3 h-3 mt-[20px] relative">
                    <img src={arrowD} alt="" />
                </div>
                </div>
            </div>
        </div>
        <div className="w-[277px] h-[0px] mt-[-30px] border border-black border-opacity-20"></div>
        <div className="justify-center items-start gap-[100px] inline-flex">
            <div className="flex-col justify-start items-start gap-[7.65px] flex">
                <div className="text-neutral-500 text-[8px] font-medium font-['Inter'] leading-[10.40px]">Order No : 0000000</div>
                <div className="text-black text-[8px] font-medium font-['Inter'] leading-[10.40px]">Product : Money Transfer</div>
                <div className="text-neutral-500 text-[8px] font-medium font-['Inter'] leading-[10.40px]">Description : From NGN Wallet<br/>to Bank</div>
                <div className="text-neutral-500 text-[8px] font-medium font-['Inter'] leading-[10.40px]">Amount : ₦50,000.00</div>
            </div>
            <div className="w-[82.49px] flex-col justify-center items-start gap-[11.47px] flex">
                <div className="justify-end items-center gap-3 inline-flex">
                    <div className="text-neutral-500 text-[8px] font-medium font-['Inter'] leading-[10.40px]">Status :</div>
                    <div className="px-[4.24px] py-[2.12px] bg-amber-200 rounded-sm justify-start items-start gap-[4.24px] flex">
                        <div className="text-white text-[8px] font-medium font-['Inter'] leading-[10.40px]">Pending</div>
                    </div>
                </div>
                <div className='flex flex-row'>
                <div className="text-neutral-500 text-[8px] font-medium font-['Inter'] leading-[10.40px]">Date & Time : <br/>May 21st, 2023,<br/>07:21:00pm</div>
                <div className="w-[13.66px] mt-[20px] h-3 relative">
                    <img src={arrowE} alt="" />
                </div>
                </div>
            </div>
        </div>
        <div className="w-[277px] h-[0px] mt-[-30px] border border-black border-opacity-20"></div>
        <div className="justify-start items-start gap-[100px] flex">
            <div className="flex-col justify-start items-start gap-[7.65px] flex">
                <div className="text-neutral-500 text-[8px] font-medium font-['Inter'] leading-[10.40px]">Order No : 0000000</div>
                <div className="text-black text-[8px] font-medium font-['Inter'] leading-[10.40px]">Product : Money Transfer</div>
                <div className="text-neutral-500 text-[8px] font-medium font-['Inter'] leading-[10.40px]">Description : From USD Wallet<br/>to AremxyPlug</div>
                <div className="text-neutral-500 text-[8px] font-medium font-['Inter'] leading-[10.40px]">Amount : $60,000.00</div>
            </div>
            <div className="w-[82.49px] flex-col justify-center items-start gap-[11.47px] flex">
                <div className="justify-end items-center gap-5 flex">
                    <div className="text-neutral-500 text-[8px] font-medium font-['Inter'] leading-[10.40px]">Status :</div>
                    <div className="px-[4.24px] py-[2.12px] bg-red-300 rounded-sm justify-start items-start gap-[4.24px] flex">
                        <div className="text-white text-[8px] font-medium font-['Inter'] leading-[10.40px]">Failed</div>
                    </div>
                </div>
                <div className='flex flex-row'>
                <div className="text-neutral-500 text-[8px] font-medium font-['Inter'] leading-[10.40px]">Date & Time : <br/>May 21st, 2023,<br/>07:21:00pm</div>
                <div className="w-[13.66px] mt-[20px] h-3 relative">
                    <img src={arrowF} alt="" />
                </div>
                </div>
            </div>
        </div>
        <div className="w-[277px] h-[0px] mt-[-30px] border border-black border-opacity-20"></div>
        <div className="w-[278px] justify-start items-start gap-[100px] flex">
            <div className="flex-col justify-start items-start gap-[75px] flex">
                <div className="flex-col justify-start items-start gap-[7.65px] flex">
                    <div className="text-neutral-500 text-[8px] font-medium font-['Inter'] leading-[10.40px]">Order No : 0000000</div>
                    <div className="text-black text-[8px] font-medium font-['Inter'] leading-[10.40px]">Product : International Transfer</div>
                    <div className="text-neutral-500 text-[8px] font-medium font-['Inter'] leading-[10.40px]">Description : From USD Wallet <br/>to Bank</div>
                    <div className="text-neutral-500 text-[8px] font-medium font-['Inter'] leading-[10.40px]">Amount : $60,000.00</div>
                </div>
            </div>
            <div className="w-[81px] flex-col justify-center items-start gap-[87px] flex">
                <div className="h-[55.72px] flex-col justify-center items-start gap-[11.47px] flex">
                    <div className="justify-end items-center gap-[11px] flex">
                        <div className="text-neutral-500 text-[8px] font-medium font-['Inter'] leading-[10.40px]">Status :</div>
                        <div className="px-[4.24px] py-[2.12px] bg-amber-200 rounded-sm justify-start items-start gap-[4.24px] flex">
                            <div className="text-white text-[8px] font-medium font-['Inter'] leading-[10.40px]">Pending</div>
                        </div>
                    </div>
                    <div className='flex justify-between flex-row'>
                    <div className="text-neutral-500 text-[8px] font-medium font-['Inter'] leading-[10.40px]">Date & Time : <br/>May 21st, 2023,<br/>07:21:00pm</div>
                    <div className="w-[13.66px] h-[12.06px]  mt-[20px]">
                        <img src={arrowG} alt="" />
                    </div>
                    </div>
                </div>
                <div class="w-[13.41px] h-[12.06px] relative">
                </div>
            </div>
        </div>
    </div>
    </div>
    <div className='flex justify-center mt-[20px] lg:hidden md:hidden items-center gap-[30px] flex-col'>
    <div className="w-[66px] ml-[20px] h-4 px-1.5 py-[3px] bg-white shadow border border-black border-opacity-30 justify-start items-center gap-[5px] inline-flex">
    <div className="text-neutral-500 text-[8px] font-medium font-['Inter'] leading-[10.40px]">---The End---</div>
</div>
<div className="w-[134.08px] h-[15.73px] justify-start items-center gap-[14.90px] flex">
    <div className="text-black text-[8px] font-medium font-['Inter'] leading-[10.40px]">You need help?</div>
    <div className="px-[8.59px] py-[2.86px] bg-blue-900 rounded-[5.16px] justify-center items-center gap-[5.73px] flex">
        <div className="text-white text-[8px] font-medium font-['Inter'] leading-[10.40px]">Contact Us</div>
    </div>
</div>

</div>



</div>

 </div>
 

 </DashBoardLayout>




















  
    )
}



