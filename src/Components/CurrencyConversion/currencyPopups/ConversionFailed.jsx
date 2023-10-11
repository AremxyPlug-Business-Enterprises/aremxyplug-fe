import React from "react";
import { Link } from "react-router-dom";
import "../../CurrencyConversion/currencyConversion.css"

const ConversionFailed = () =>{
    
        return(
            <div className="confirmConversion bg-blue-200 mx-auto w-[312px] h-[250px] lg:w-[860px] md:w-[504.5px] md:h-[573px] lg:h-[860px]">
             <div className="flex justify-between items-center mx-[3%] my-[2%] lg:my-[1%]">
            <Link to="/">
              <img
                className=" w-[18px] h-[18px] md:w-[35px] md:h-[35px] lg:w-[35px] lg:h-[29px]"
                src="/Images/login/arpLogo.png"
                alt=""
              />
            </Link>
            <Link to="/withdraw-to-personalaccount">
              {" "}
              <img
                className=" w-[18px] h-[18px] md:w-[35px] md:h-[35px] lg:w-[29px] lg:h-[29px]"
                src="/Images/transferImages/close-circle.png"
                alt=""
              />
            </Link>
          </div>
          <hr className="h-[6px] bg-[#04177f] lg:h-[22px] border-none mt-[8px] md:mt-[6px] md:h-[10px]" />
             <div className="mx-auto w-[270px] md:w-[474px] lg:w-[830px]">
                 <div className="text-center font-semibold text-[9px] md:text-[9.17px] lg:text-[16px] pt-[23px] md:pt-[15px]"
                 >Conversion Failed</div>
            </div>
            <img src="/Images/failed.png" alt="" className="mx-auto my-[30px] lg:my-[150px] h-[45px] w-[45px] md:h-[143px] md:w-[143px] lg:w-[250px] lg:h-[250px]"/>
            <div className="font-semibold text-center text-[8px] md:text-[10px] lg:text-[16px] text-[#F95252]">An unexpected error has occurred, please try again.</div>
           
            <div className="flex w-[226.46px] md:w-[195.36px] lg:w-[341px] mx-auto items-center gap-[10px] md:gap-[8.59px] lg:gap-[15px] lg:mt-[80px]">
              <button
                // onClick={handleTransactionSuccessClose}
                className={`bg-[#04177f] w-[111px] lg:w-[200px] md:w-[99px] h-[40px] md:h-[24px] lg:h-[42px] lg:my-[2%] flex justify-center items-center mx-auto cursor-pointer text-[12px] md:text-[12px] lg:text-[16px] font-semibold text-white rounded-[6px] md:rounded-[7px] lg:rounded-[12px]`}
              >
                Done
              </button>
                <button
                //   onClick={handleTransactionSuccessClose}
                style={{boxShadow : '0px 0px 2.0368096828460693px 0px #00000040'}} className={`border-[1px]  w-[111px] lg:w-[200px] md:w-[99px] h-[40px] md:h-[24px] lg:h-[42px] lg:my-[2%] flex justify-center items-center mx-auto cursor-pointer text-[12px] md:text-[12px] lg:text-[16px] font-semibold rounded-[6px] md:rounded-[7px] lg:rounded-[12px]`}
                >
                  Receipt
                </button>
            </div>
       </div> 

    )
}

export default ConversionFailed