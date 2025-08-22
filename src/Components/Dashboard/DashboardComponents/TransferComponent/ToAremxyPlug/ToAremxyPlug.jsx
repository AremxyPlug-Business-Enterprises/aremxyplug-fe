import React from "react";
import { DashBoardLayout } from "../../../Layout/DashBoardLayout";
import { Link } from "react-router-dom";
import style from "../../../../AirTimePage/AirtimeVtu.module.css";
import ToAremxyMain from "./ToAremxyMain";


const ToAremxyPlug = () => {

  return (
    <DashBoardLayout>
      <div className={style.AirtimeTops}>
        <div className={style.airtimeTop}>
          <div
            style={{
              background:
                "#B4BEFA",
            }}
           className="min-h-[90px] py-[15px] lg:h-[196px] 
             md:h-[112.29px] rounded-[6.6px] md:rounded-[11.46px] 
             lg:rounded-[20px] mx-auto  flex gap-6 justify-between
              px-[16.51px] md:px-[28.65px] lg:px-[50px]"
          >
            <div  className="py-[9.57px] md:py-[16.61px] 
                            align-middle self-center flex flex-col gap-1.5 w-[70%]">
              <h2 className="text-[11px] leading-[13px] lg:leading-[30px]
                                 lg:text-[24px] md:text-[13.75px] font-semibold">
                TRANSFER MONEY TO AREMXYPLUG USER.
              </h2>
              <p className="text-[10px] leading-[13px] lg:leading-[25px]
                                 lg:text-[20px] md:text-[11.46px]">
                Transfer money from your wallets to any 
                AremxyPlug user wallets for free, no any hidden fee,
                 enjoy!!!
              </p>
            </div>
            <div className="w-[100px] h-[66px] lg:w-[230px] lg:h-[150px]">
              <img
                src="./Images/transferImages/flying-coin-notes.png"
                alt=""
                className="h-full w-full"
              />
            </div>
          </div>
          <ToAremxyMain/>
        </div>
        <div className={style.help}>
                <h2>You need help?</h2>
                <Link to={`/ContactUs`} className={style.btnContact}>
                Contact Us
                </Link>
        </div>
      </div>
    </DashBoardLayout>
  )
}

export default ToAremxyPlug