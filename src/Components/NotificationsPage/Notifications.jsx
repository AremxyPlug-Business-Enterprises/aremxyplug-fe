import React from 'react';
import { DashBoardLayout } from '../Dashboard/Layout/DashBoardLayout';
import firstpic from "./assets/smartphone notifications stacked on top of each other.png";
import star from './assets/star.png';
import arrange from './assets/arrange-square-2.png';
import wallet from './assets/wallet.png';
import cards from './assets/cards.png';
import charts from './assets/favorite-chart.png';




export default function NotificationsPage ()  {

return (

    <DashBoardLayout>
    <>
    <div class="flex gap-[25px] lg:w-full lg:h-[1850px] md:h-[1200px] h-[800px] md:w-full w-full flex-col">
    <div className="w-full h-[90px] md:h-[112.29px] lg:h-[196px] rounded-[7px] md:rounded-[11.5px]
     bg-gradient-to-r from-indigo-300 via-fuchsia-500 to-rose-500 flex px-[16px] lg:px-[50px]
      justify-between items-center lg:rounded-[20px]">
                <div className="py-[13px] mt-2 lg:py-[40px]">
                  <h2 className="text-[9px] md:text-[13.75px] font-bold mb-3 lg:text-[24px] lg:mb-4">
                  GET NOTIFIED AND STAY UP TO DATE WITH <br/> AREMXYPLUG.
                  </h2>
                  <h2 className="text-[7px] md:text-[11.46px] lg:text-[20px] lg:leading-[26px] mb-3">
                  Be extraordinaire updated, never miss out on any of our<br/> official updates, trends, news, 
                  announcements, and<br/> opportunities.
                </h2>
                </div>
                <div className="md:w-24 md:h-16 w-14 h-10 lg:w-44 lg:h-28">
                  <img
                    src={firstpic}
                    alt=""
                    className="md:w-24 md:h-16 w-14 h-10 lg:w-44 lg:h-28 "
                  />
                 </div>
              </div>

              <div className="Frame758532592 lg:w-full lg:h-28 lg:gap-16 md:w-full md:h-16 md:gap-10 w-full
               h-12 justify-start items-start gap-5 inline-flex">
  <div className="Frame758532587 w-14 h-12  md:w-20 md:h-16 lg:w-40 lg:h-28 lg:rounded-xl relative bg-indigo-400 rounded md:rounded-lg">
    <div className="Frame758532588 left-[15.21px] top-[5.08px] absolute flex-col justify-start
     items-end gap-1.5 md:gap-2.5 lg:gap-4 inline-flex">
      
        <img className='Star w-5 h-5 md:w-8 md:h-8 lg:w-12 lg:h-12' src={star} alt="" />
        
      
      <div className="General text-white text-[6px] md:text-[8px] lg:text-[10px] font-semibold ">General</div>
    </div>
    <div className="Group13108 w-2 h-2 md:w-3 md:h-3 lg:w-5 lg:h-5  left-[44.04px] top-[1.22px] absolute">
      <div className="Ellipse147 w-2 h-2 md:w-3 md:h-3 lg:w-5 lg:h-5  left-0 top-0 absolute bg-red-400 rounded-full" />
      <div className=" left-[2.86px] top-[1.22px] absolute text-white text-[5px] md:text-[7px] lg:text-[9px] font-semibold ">5</div>
    </div>
  </div>
  <div className="Frame758532588 w-14 h-12 md:w-20 md:h-16 lg:w-40 lg:h-28 lg:rounded-xl relative bg-purple-500 rounded md:rounded-lg">
    <div className="Frame758532588 left-[14.21px] top-[5.08px] absolute flex-col justify-start items-center lg:gap-4 md:gap-2.5 gap-1.5 inline-flex">
    <img className='arrange w-5 h-5 md:w-8 md:h-8 lg:w-12 lg:h-12' src={arrange} alt="" />
      <div className="Telecom text-white text-[6px] md:text-[8px] lg:text-[10px] font-semibold ">Telecom</div>
    </div>
  </div>
  <div className="Frame758532589 w-14 h-12 md:w-20 md:h-16 lg:w-40 lg:h-28 lg:rounded-xl relative bg-green-400 rounded md:rounded-lg">
    <div className="Frame758532588 left-[11.71px] top-[5.08px] absolute flex-col justify-start items-center lg:gap-4 md:gap-2.5 gap-1.5 inline-flex">
    <img className='wallet w-5 h-5 md:w-8 md:h-8 lg:w-12 lg:h-12' src={wallet} alt="" />
      <div className="Payments text-white text-[6px] md:text-[8px] lg:text-[10px] font-semibold ">Payments</div>
    </div>
  </div>
  <div className="Frame758532590 w-14 h-12 md:w-20 md:h-16 lg:w-40 lg:h-28 lg:rounded-xl relative bg-amber-300 rounded md:rounded-lg">
    <div className="Frame758532588 left-[8.21px] top-[5.08px] absolute flex-col justify-start items-center lg:gap-4 md:gap-2.5 gap-1.5 inline-flex">
    <img className='cards w-5 h-5 md:w-8 md:h-8 lg:w-12 lg:h-12' src={cards} alt="" />
      <div className="CardIssuing text-white text-[6px] md:text-[8px] lg:text-[10px] font-semibold">Card Issuing</div>
    </div>
  </div>
  <div className="Frame758532591 w-14 h-12 md:w-20 md:h-16 lg:w-40 lg:h-28 lg:rounded-xl relative bg-teal-300 rounded md:rounded-lg">
    <div className="Frame758532588 left-[4.21px] top-[5.08px] absolute flex-col justify-start items-center lg:gap-4 md:gap-2.5 gap-1.5 inline-flex">
    <img className='charts w-5 h-5 md:w-8 md:h-8 lg:w-12 lg:h-12 ' src={charts} alt="" />
      <div className="NewsUpdate text-white text-[6px] md:text-[8px] lg:text-[10px] font-semibold ">News & Update</div>
    </div>
  </div>
</div>


        {/* <div className='flex flex-row'> */}
            {/* <div></div> */}
            {/* <div></div> */}
            {/* <div></div> */}
            {/* <div></div> */}
            {/* <div></div> */}
            {/*  */}
            {/* </div>       */}

    </div>
    
    </>


    </DashBoardLayout>


)
}