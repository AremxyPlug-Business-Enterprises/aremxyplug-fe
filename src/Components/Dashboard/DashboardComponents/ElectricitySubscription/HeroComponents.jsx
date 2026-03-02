import bulb from "../ElectricitySubscription/Electricity-sub-images/Group 13115.svg";
export const ElecHeroComponents = () => {
  return (
     <div className="flex flex-row w-full pt-[10px] min-h-[110px]
      md:h-[112.29px] lg:h-[196px] lg:px-[50px]  px-[16px] rounded-lg md:rounded-[11.5px] 
      lg:rounded-[20px] justify-between  py-0 bg-gradient-to-r from-[#FFA733] via-[#58FF4A] to-[#98B0FF]">
                <div className="flex flex-col gap-2 ">
                  <div className="text-[11px] font-semibold pt-[10px] md:text-xs md:leading-[20.63px] lg:pt-[25px] lg:text-[24px] lg:leading-[36px] text-[#000000] leading-[12px]">
                    ELECTRICITY BILLS, PREPAID AND POSTPAID <br /> PAYMENTS.
                  </div>
                  <div className="text-[9px] font-normal leading-[12px] md:text-[10px] md:leading-[14.9px] lg:text-[20px] lg:leading-[26px] text-[#000000]">
                    Recharge your metre and pay bills with our electricity bills
                    payment feature for both prepaid and postpaid metertypes.
                  </div>
                </div>
                <div>
                  <img
                    className="w-[55px] h-[70px] md:w-[151.9px] md:h-[85.9px] lg:w-[265px] lg:h-[150px]"
                    src={bulb}
                    alt=""
                  />
                </div>
              </div>
  )
}

