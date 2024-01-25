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
            className="w-full mb-[20px] lg:mb-[40px] h-[90px] md:h-[112.29px] lg:h-[196px] rounded-[7px] md:rounded-[11.5px] flex px-[16px] lg:px-[50px] justify-between items-center lg:rounded-[20px]"
          >
            <div className="py-[13px] lg:py-[40px]">
              <h2 className="text-[10px] md:text-[13.75px] font-bold mb-3 lg:text-[24px] lg:mb-4">
                TRANSFER MONEY TO AREMXYPLUG USER.
              </h2>
              <h2 className="text-[7px] md:text-[11.46px] lg:text-[20px] lg:leading-[26px] mb-3">
                Transfer money from your wallets to any AremxyPlug user wallets for free, no any hidden fee, enjoy!!!
              </h2>
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
                <Link to={`/ContactUs`} className={style.btnContact}>Contact Us</Link>
        </div>
      </div>
    </DashBoardLayout>
  )
}

export default ToAremxyPlug