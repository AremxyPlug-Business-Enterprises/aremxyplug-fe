import { DashBoardLayout } from "../../Layout/DashBoardLayout";
import { useContext } from "react";
import { ContextProvider } from "../../../Context";
import { Link } from "react-router-dom";
import bulb from "../ElectricitySubscription/Electricity-sub-images/Group 13115.svg"
import bill1 from "../ElectricitySubscription/Electricity-sub-images/pngaaa 1.svg"
import bill2 from "../ElectricitySubscription/Electricity-sub-images/1584714918161-ekedc-logo 1.svg"
import bill3 from "../ElectricitySubscription/Electricity-sub-images/AEDC1 1.svg"
import bill4 from "../ElectricitySubscription/Electricity-sub-images/kedco-logo 1.svg"
import bill5 from "../ElectricitySubscription/Electricity-sub-images/PHED 1.svg"
import bill6 from "../ElectricitySubscription/Electricity-sub-images/Jos-Electric-JED 1.svg"
import bill7 from "../ElectricitySubscription/Electricity-sub-images/34-341783_kaduna-electricity-distribution-company-kaduna-electricity-distribution-company 1.svg"
import bill8 from "../ElectricitySubscription/Electricity-sub-images/eedclogo 1.svg"
import bill9 from "../ElectricitySubscription/Electricity-sub-images/ibedc-logo 1.svg"
import bill10 from "../ElectricitySubscription/Electricity-sub-images/BEDC-Logo-new-dark-1 1.svg"



const ElectricitySubscription = () => {

    const { isDarkMode , toggleSideBar, } = useContext(ContextProvider);
    return ( 
        <DashBoardLayout>

        <div
        className={` ${
          isDarkMode
            ? "bg-[#000] text-[#fff] border-[#fff]"
            : "bg-[#ffffff] text-[#000] "
        }  flex flex-col w-full `}
        >

         {/* top part after nav bar */}
        <div className="flex flex-row  w-full pt-[10px]  h-[90px] md:h-[112.29px] lg:h-[196px] lg:px-[50px]  px-[16px] rounded-lg md:rounded-[11.5px] lg:rounded-[20px] justify-between  py-0 bg-gradient-to-r from-[#FFA733] via-[#58FF4A] to-[#98B0FF]">
          <div className="flex flex-col gap-2  ">
            <div className="text-[8px] font-[600]  pt-[10px] md:text-[11px] md:leading-[20.63px] lg:pt-[25px] lg:text-[24px] lg:leading-[36px] text-[#000000] leading-[12px]">
            ELECTRICITY BILLS, PREPAID AND POSTPAID  <br /> PAYMENTS. 
            </div>
            <div className="text-[7px] font-[400] leading-[9px] md:text-[10px] md:leading-[14.9px] lg:text-[20px] lg:leading-[26px] text-[#000000] ">
            Recharge your metre and pay bills  with our electricity bills <br /> payment feature for both prepaid and postpaid metertypes.
            </div>
          </div>
          <div>
            <img
              className="w-[55px] h-[70px] md:w-[151.9px] md:h-[85.9px] lg:w-[265px] lg:h-[150px]"
              src={bulb}
              alt=""
            />{" "}
          </div>
        </div>   

        <div className="text-[10px] flex gap-2 font-[500] mt-[20px] md:mt-[30px] lg:mt-[70px] md:text-[11.46px] md:leading-[14.9px] lg:text-[20px] lg:leading-[26px] text-[#7C7C7C]">
                  <p>Select Disco Type</p>
                  <img
                    className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                    src="./Images/Dashboardimages/arrowright.png"
                    alt="/"
                  />
                </div>

      <div className={` ${toggleSideBar ? "lg:gap-[97px] md:gap-[27px]" : "lg:gap-[130px] md:gap-[70px]"} grid grid-cols-2  md:grid-cols-5 pt-[20px] lg:mt-[70px]  gap-8   lg:leading-[19px] text-[#000000]`}>
            <Link to= "/ikedc"  >
            <div className="flex flex-col justify-between items-center rounded-md border-[1px] pb-3 lg:pb-5 px-4 w-[144px]  h-[94px] md:w-[94px] md:h-[94px] lg:w-[160px] lg:h-[160px]">
                <div><img className="w-[42.9px] lg:w-[82px] lg:h-[100px] h-[53px] pt-2" src={bill1} alt="" /></div>
                <div className="text-[9px] lg:text-[16px]   font-[500] leading-[11.27px]">IKEDC</div>
            </div>
            </Link>
            <Link to="/ekedc">
            <div className="flex flex-col justify-between items-center rounded-md border-[1px] pt-2 pb-3 lg:pb-5 px-4 w-[144px] h-[94px] md:w-[94px] md:h-[94px] lg:w-[160px] lg:h-[160px]">
                <div><img className="w-[58.7px] lg:w-[100px] pt-3 " src={bill2} alt="" /></div>
                <div className="text-[9px] lg:text-[16px] font-[500] leading-[11.27px]">EKEDC</div>
            </div>
            </Link>
           
            <Link to= "/aedc">
            <div className="flex flex-col justify-between items-center rounded-md border-[1px] pt-1 pb-3 lg:pb-5 px-4 w-[144px] h-[94px] md:w-[94px] md:h-[94px] lg:w-[160px] lg:h-[160px]">
                <div><img className="w-[60px] lg:w-[100px] pt-4" src={bill3} alt="" /></div>
                <div className="text-[9px] lg:text-[16px] font-[500] leading-[11.27px]">AEDC</div>
            </div>
            </Link>
           <Link to="/kedco">
            <div className="flex flex-col justify-between items-center rounded-md border-[1px] pt-1 pb-3 lg:pb-5 px-4 w-[144px] h-[94px] md:w-[94px] md:h-[94px] lg:w-[160px] lg:h-[160px]">
                <div><img className="w-[42.9px] lg:w-[73px] " src={bill4} alt="" /></div>
                <div className="text-[9px] lg:text-[16px] font-[500] leading-[11.27px]"> KEDCO</div>
            </div>
            </Link>
            <Link to="/phed">
            <div className="flex flex-col justify-between items-center rounded-md border-[1px] pt-1 pb-3 lg:pb-5  px-4 w-[144px] h-[94px] md:w-[94px] md:h-[94px] lg:w-[160px] lg:h-[160px]">
                <div><img className="w-[89px] lg:w-[100px]  " src={bill5} alt="" /></div>
                <div className="text-[9px] lg:text-[16px] font-[500] leading-[11.27px]">PHED</div>
            </div>
            </Link>
            <Link to="/jed">
            <div className="flex flex-col justify-between items-center rounded-md border-[1px] pt-0 pb-3 lg:pb-5 px-4 w-[144px] h-[94px] md:w-[94px] md:h-[94px] lg:w-[160px] lg:h-[160px]">
                <div><img className="w-[70px] lg:w-[80px]  " src={bill6} alt="" /></div>
                <div className="text-[9px] lg:text-[16px] font-[500] leading-[11.27px]">JED</div>
            </div>
            </Link>
            <Link to="/kaedco">
            <div className="flex flex-col justify-between items-center rounded-md border-[1px] pt-0 pb-3 lg:pb-5 px-4 w-[144px] h-[94px] md:w-[94px] md:h-[94px] lg:w-[160px] lg:h-[160px]">
                <div><img className="w-[70px] lg:w-[100px] pt-2 " src={bill7} alt="" /></div>
                <div className="text-[9px] lg:text-[16px] font-[500] leading-[11.27px]">KAEDCO</div>
            </div>
            </Link>
            <Link to="/eedc">
            <div className="flex flex-col justify-between items-center rounded-md border-[1px] pt-0 pb-3 lg:pb-5 px-4 w-[144px] h-[94px] md:w-[94px] md:h-[94px] lg:w-[160px] lg:h-[160px]">
                <div><img className="w-[70px] lg:w-[100px] pt-2  " src={bill8} alt="" /></div>
                <div className="text-[9px] lg:text-[16px] font-[500] leading-[11.27px]">EEDC</div>
            </div>
            </Link>
            <Link to="/ibedc">
            <div className="flex flex-col justify-between items-center rounded-md border-[1px] pt-0 pb-3 lg:pb-5 px-4 w-[144px] h-[94px] md:w-[94px] md:h-[94px] lg:w-[160px] lg:h-[160px]">
                <div><img className="w-[70px] lg:w-[80px] pt-2  " src={bill9} alt="" /></div>
                <div className="text-[9px] lg:text-[16px] font-[500] leading-[11.27px]">IBEDC</div>
            </div>
            </Link>
            <Link to="/bedc">
            <div className="flex flex-col justify-between items-center rounded-md border-[1px] pt-0 pb-3 lg:pb-5 px-4 w-[144px] h-[94px] md:w-[94px] md:h-[94px] lg:w-[160px] lg:h-[160px]">
                <div><img className="w-[90px] lg:w-[120px] pt-4  " src={bill10} alt="" /></div>
                <div className="text-[9px] lg:text-[16px] font-[500] leading-[11.27px]">BEDC</div>
            </div>
            </Link>
        </div>
        <div className="flex flex-row items-center justify-center mt-[200px] md:mt-[38%] lg:mt-[75%] gap-2">
          <div className="text-[8px] lg:text-[12px] font-[600] text-black">
            You need help?
          </div>
          <Link to="/ContactUs">
            <div className="bg-primary text-white lg:text-[8px] text-[7px] px-2 py-1 leading-[10.5px] rounded-lg text-center">
              Contact us
            </div>
          </Link>
        </div>

        </div>

        </DashBoardLayout>
     );
}
 
export default ElectricitySubscription;