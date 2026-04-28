import React from "react";
import { Link } from "react-router-dom";
import style from "../pricings/pricing.module.css";
import { useNavigate } from "react-router-dom";
export const Pricing = () => {
  const navigate = useNavigate()
  const userStatus = localStorage.getItem("cxccxfd");
  return (
    <>
      <div className="mx-[5%] lg:mx-[8%]">
        {/* ======================HERO SECTION====================== */}

        <div className={style.bg}>
          {/* ====================== HEADING ================= */}
          <div className="flex flex-col gap-[8px] pt-[30%] pb-[10%] text-center">
            <div className="text-[20px] font-semibold md:text-[23px] lg:text-[45px]">
                {userStatus && (
     <div className="my-2 flex ">
      <img src="/Images/ArrowBack.svg" alt ="ArrowBack"/>
      <p onClick={()=> {
        navigate(-1)
      }} className="text-base text-black font-semibold">
        Go Back
      </p>
      </div>
  )}
              Pricing
            </div>
            <div className="text-[12px] md:text-[18px] md:mb-[5%] lg:text-[32px]">
              Welcome to our pricing page
            </div>
            <div className="text-[10px] text-[#04177f] font-semibold md:text-[16px] lg:text-[30px] ">
              Telecom pricing
            </div>
          </div>

          <div className="flex flex-col gap-[15px] mb-[5%]">
            <div className="text-[10px] font-semibold lg:text-[24px]">
              &#x2022; Airtime Top Up
            </div>
            <div className="text-[8px] lg:text-[18px]">
              Earn{" "}
              <span className="text-[#04177f] font-extrabold">
                2-5% commission
              </span>{" "}
              on every airtime top-up on all networks.
            </div>
          </div>
          {/* ========================== HEADING CLOSE ==================== */}

          <div>
            <div className="text-[8px] font-semibold mb-[10%] md:mb-[3%] md:text-[13px] lg:text-[24px]">
              Products:
            </div>

            <div className="grid grid-cols-3 gap-y-6 w-[313px] gap-[55px] md:w-[620px] md:h-[329px] md:gap-x-[85px] lg:gap-[60px] lg:gap-x-[400px]">
              {/* ================= MTN ================ */}
              <div
                className="flex flex-col justify-center items-center gap-[7px] py-[7px] px-[14px] bg-[#ffffff] w-[80px] h-[76px] rounded md:w-[159px] md:h-[150px] md:gap-[14px] lg:w-[283px] lg:h-[267px] lg:gap-[25px] lg:rounded-xl"
                style={{ boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.25)" }}
              >
                <p className="text-[5px] md:text-[10px] lg:text-[18px]">
                  MTN Airtime Top-Up
                </p>
                <img
                  className="w-[28px] h-[28px] md:w-[50px] md:h-[50px] lg:w-[100px] lg:h-[100px]"
                  src="./Images/pricngimages/mtn.logo.png"
                  alt="/"
                />
                <div className="rounded-[2px] flex justify-center items-center text-[3px] font-bold text-[#ffffff] bg-[#04177f] w-[35px] h-[13px] md:w-[70px] md:h-[25px] md:text-[7px] lg:w-[125px] lg:h-[45px] lg:text-[12px] lg:rounded-md">
                  Buy Now
                </div>
              </div>

              {/* ======================== AIRTEL ===================== */}
              <div
                className="flex flex-col justify-center items-center gap-[7px] py-[7px] px-[14px] bg-[#ffffff] w-[80px] h-[76px] rounded md:w-[159px] md:h-[150px] md:gap-[14px] lg:w-[283px] lg:h-[267px] lg:gap-[25px] lg:rounded-xl"
                style={{ boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.25)" }}
              >
                <p className="text-[5px] md:text-[10px] lg:text-[18px]">
                  Airtel Airtime Top-Up
                </p>
                <img
                  className="w-[28px] h-[28px] md:w-[50px] md:h-[50px] lg:w-[100px] lg:h-[100px]"
                  src="./Images/pricngimages/airtel.logo.png"
                  alt="/"
                />
                <div className="rounded-[2px] flex justify-center items-center text-[3px] font-bold text-[#ffffff] bg-[#04177f] w-[35px] h-[13px] md:w-[70px] md:h-[25px] md:text-[7px] lg:w-[125px] lg:h-[45px] lg:text-[12px] lg:rounded-md">
                  Buy Now
                </div>
              </div>

              {/* ======================= GLO ======================= */}
              <div
                className="flex flex-col justify-center items-center gap-[7px] py-[7px] px-[14px] bg-[#ffffff] w-[80px] h-[76px] rounded md:w-[159px] md:h-[150px] md:gap-[14px] lg:w-[283px] lg:h-[267px] lg:gap-[25px] lg:rounded-xl"
                style={{ boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.25)" }}
              >
                <p className="text-[5px] md:text-[10px] lg:text-[18px]">
                  Glo Airtime Top-Up
                </p>
                <img
                  className="w-[28px] h-[28px] md:w-[50px] md:h-[50px] lg:w-[100px] lg:h-[100px]"
                  src="./Images/pricngimages/glo.logo.png"
                  alt="/"
                />
                <div className="rounded-[2px] flex justify-center items-center text-[3px] font-bold text-[#ffffff] bg-[#04177f] w-[35px] h-[13px] md:w-[70px] md:h-[25px] md:text-[7px] lg:w-[125px] lg:h-[45px] lg:text-[12px] lg:rounded-md">
                  Buy Now
                </div>
              </div>

              {/* ======================== 9 MOBILE ==================== */}
              <div
                className="flex flex-col justify-center items-center gap-[7px] py-[7px] px-[14px] bg-[#ffffff] w-[80px] h-[76px] rounded md:w-[159px] md:h-[150px] md:gap-[14px] lg:w-[283px] lg:h-[267px] lg:gap-[25px] lg:rounded-xl"
                style={{ boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.25)" }}
              >
                <p className="text-[5px] md:text-[10px] lg:text-[18px] w-[60px] lg:w-[250px]">
                  9mobile Airtime Top-Up
                </p>
                <img
                  className="w-[28px] h-[28px] md:w-[50px] md:h-[50px] lg:w-[100px] lg:h-[100px]"
                  src="./Images/pricngimages/9mobile.logo.png"
                  alt="/"
                />
                <div className="rounded-[2px] flex justify-center items-center text-[3px] font-bold text-[#ffffff] bg-[#04177f] w-[35px] h-[13px] md:w-[70px] md:h-[25px] md:text-[7px] lg:w-[125px] lg:h-[45px] lg:text-[12px] lg:rounded-md">
                  Buy Now
                </div>
              </div>

              {/* ============================== SMILE =================== */}
              <div
                className="flex flex-col justify-center items-center gap-[7px] py-[7px] px-[14px] bg-[#ffffff] w-[80px] h-[76px] rounded md:w-[159px] md:h-[150px] md:gap-[14px] lg:w-[283px] lg:h-[267px] lg:gap-[25px] lg:rounded-xl"
                style={{ boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.25)" }}
              >
                <p className="text-[5px] md:text-[10px] lg:text-[18px]">
                  Smile Airtime Top-Up
                </p>
                <img
                  className="w-[28px] h-[28px] md:w-[50px] md:h-[50px] lg:w-[100px] lg:h-[100px]"
                  src="./Images/pricngimages/smile.logo.png"
                  alt="/"
                />
                <div className="rounded-[2px] flex justify-center items-center text-[3px] font-bold text-[#ffffff] bg-[#04177f] w-[35px] h-[13px] md:w-[70px] md:h-[25px] md:text-[7px] lg:w-[125px] lg:h-[45px] lg:text-[12px] lg:rounded-md">
                  Buy Now
                </div>
              </div>

              {/* ================================ INTERNATIONAL PAYMENT ================= */}
              <div
                className="flex flex-col justify-center items-center gap-[7px] py-[7px] px-[14px] bg-[#ffffff] w-[80px] h-[76px] rounded md:w-[159px] md:h-[150px] md:gap-[14px] lg:w-[283px] lg:h-[267px] lg:gap-[25px] lg:rounded-xl"
                style={{ boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.25)" }}
              >
                <p className="text-[5px] w-[70px] md:text-[10px] lg:text-[18px] lg:w-[250px]">
                  International Airtime Top-Up
                </p>
                <img
                  className="w-[28px] h-[28px] md:w-[50px] md:h-[50px] lg:w-[100px] lg:h-[100px]"
                  src="./Images/pricngimages/international.logo.png"
                  alt="/"
                />
                <div className="rounded-[2px] flex justify-center items-center text-[3px] font-bold text-[#ffffff] bg-[#04177f] w-[35px] h-[13px]  md:w-[70px] md:h-[25px] md:text-[7px] lg:w-[125px] lg:h-[45px] lg:text-[12px] lg:rounded-md">
                  Buy Now
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ======================SECTION TWO===================== */}

        <div className="">
          {/* ===================DATA BUNDLES=================== */}
          <div className="flex flex-col mt-[6%] gap-[7px]">
            <div className="text-[10px] font-semibold md:text-[13px] lg:text-[24px] lg:font-bold">
              &#x2022; Data bundles
            </div>
            <p className="text-[8px] md:text-[10px] lg:text-[18px]">
              Reliable and affordable data plans:
            </p>
          </div>

          <div className={style.pricebg}>
            {/* ===========================MTN==================== */}
            <div className="grid grid-cols-3 pt-[10%] mx-[4%] gap-[15px] lg:mx-[8%] lg:pt-[4%] lg:gap-[20px]">
              <div
                className="mt-[] flex flex-col gap-[6px] w-[98px] h-[140px] px-[13px] py-[7px] rounded-md md:w-[212px] md:h-[290px] md:gap-[14px] lg:w-[376px] lg:h-[550px] lg:gap-[25px] lg:rounded-xl lg:border-[1px] lg:border-[#00000095] lg:py-[25px] lg:px-[50px]"
                style={{ boxShadow: "0px 0px 25.20828px rgba(0, 0, 0, 0.25)" }}
              >
                <ul className="flex flex-col gap-[6px] justify-center items-center md:gap-[14px] lg:gap-[25px]">
                  <li className="flex gap-[5px] lg:gap-[10px] justify-center items-center">
                    <img
                      className="w-[26px] h-[26px] md:w-[56px] md:h-[56px] lg:w-[100px] lg:h-[100px]"
                      src="./Images/pricngimages/mtn.logo.png"
                      alt="/"
                    />
                    <p className="font-medium text-[5px] md:text-[10px] lg:text-[18px]">
                      MTN Data
                    </p>
                  </li>
                  <li className="text-[5px] font-medium md:text-[10px] lg:text-[18px]">
                    Product: SME - CG
                  </li>
                  <li className="text-[5px] font-medium md:text-[10px] lg:text-[18px]">
                    Price:{" "}
                    <span className="text-[7px] md:text-[16px] text-[#04177f] lg:text-[30px]">
                      &#8358;215
                    </span>
                  </li>
                  <li className="text-[5px] font-medium md:text-[10px] lg:text-[18px]">
                    Validity: Monthly
                  </li>
                  <li className="text-[5px] font-medium md:text-[10px] lg:text-[18px]">
                    Network: 4G-5G LITE
                  </li>
                  <li className="text-[5px] font-medium md:text-[10px] lg:text-[18px]">
                    Hotspot: Accessible
                  </li>
                  <li className="text-[5px] font-medium md:text-[10px] w-[82px] md:w-[156px] lg:w-[276px] lg:text-[18px]">
                    Usage: Desktop, Tablet, Mobile
                  </li>
                </ul>
                <div className="mx-auto text-[#ffffff] text-[3.77px] font-bold bg-[#04177f] w-[42px] h-[11.81px] py-[4px] flex justify-center items-center rounded-sm md:text-[7px] md:w-[92px] md:h-[25px] lg:w-[164px] lg:h-[45px] lg:text-[13px] md:rounded-md">
                  Subscribe Now
                </div>
              </div>

              {/* ======================AIRTEL======================= */}
              <div
                className=" bg-[#ffffff] flex flex-col gap-[6px] w-[98px] h-[140px] px-[13px] py-[7px] rounded-md md:w-[212px] md:h-[290px] md:gap-[14px] lg:w-[376px] lg:h-[550px] lg:gap-[25px] lg:rounded-xl lg:border-[1px] lg:border-[#00000095] lg:py-[25px] lg:px-[50px]"
                style={{ boxShadow: "0px 0px 25.20828px rgba(0, 0, 0, 0.25)" }}
              >
                <ul className="flex flex-col gap-[6px] justify-center items-center md:gap-[14px] lg:gap-[25px]">
                  <li className="flex gap-[5px] lg:gap-[10px] justify-center items-center">
                    <img
                      className="w-[26px] h-[26px] md:w-[56px] md:h-[56px] lg:w-[100px] lg:h-[100px]"
                      src="./Images/pricngimages/airtel.logo.png"
                      alt="/"
                    />
                    <p className="font-medium text-[5px] md:text-[10px] lg:text-[18px]">
                      Airtel Data
                    </p>
                  </li>
                  <li className="text-[5px] font-medium md:text-[10px] lg:text-[18px]">
                    Product: Gifting - CG
                  </li>
                  <li className="text-[5px] font-medium md:text-[10px] lg:text-[18px]">
                    Price:{" "}
                    <span className="text-[7px] md:text-[16px] text-[#04177f] lg:text-[30px]">
                      &#8358;215
                    </span>
                  </li>
                  <li className="text-[5px] font-medium md:text-[10px] lg:text-[18px]">
                    Validity: Monthly
                  </li>
                  <li className="text-[5px] font-medium md:text-[10px] lg:text-[18px]">
                    Network: 4G-5G LITE
                  </li>
                  <li className="text-[5px] font-medium md:text-[10px] lg:text-[18px]">
                    Hotspot: Accessible
                  </li>
                  <li className="text-[5px] font-medium md:text-[10px] w-[82px] md:w-[156px] lg:w-[276px] lg:text-[18px]">
                    Usage: Desktop, Tablet, Mobile
                  </li>
                </ul>
                <div className="mx-auto text-[#ffffff] text-[3.77px] font-bold bg-[#04177f] w-[42px] h-[11.81px] py-[4px] flex justify-center items-center rounded-sm md:text-[7px] md:w-[92px] md:h-[25px] lg:w-[164px] lg:h-[45px] lg:text-[13px] md:rounded-md">
                  Subscribe Now
                </div>
              </div>

              {/* =======================GLO===================== */}
              <div
                className=" bg-[#ffffff] flex flex-col gap-[6px] w-[98px] h-[140px] px-[13px] py-[7px] rounded-md md:w-[212px] md:h-[290px] md:gap-[14px] lg:w-[376px] lg:h-[550px] lg:gap-[25px] lg:rounded-xl lg:border-[1px] lg:border-[#00000095] lg:py-[25px] lg:px-[50px]"
                style={{ boxShadow: "0px 0px 25.20828px rgba(0, 0, 0, 0.25)" }}
              >
                <ul className="flex flex-col gap-[6px] justify-center items-center md:gap-[14px] lg:gap-[25px]">
                  <li className="flex gap-[5px] lg:gap-[10px] justify-center items-center">
                    <img
                      className="w-[26px] h-[26px] md:w-[56px] md:h-[56px] lg:w-[100px] lg:h-[100px]"
                      src="./Images/pricngimages/glo.logo.png"
                      alt="/"
                    />
                    <p className="font-medium text-[5px] md:text-[10px] lg:text-[18px]">
                      Glo Data
                    </p>
                  </li>
                  <li className="text-[5px] font-medium md:text-[10px] lg:text-[18px]">
                    Product Gifting - CG
                  </li>
                  <li className="text-[5px] font-medium md:text-[10px] lg:text-[18px]">
                    Price:{" "}
                    <span className="text-[7px] md:text-[16px] text-[#04177f] lg:text-[30px]">
                      &#8358;225
                    </span>
                  </li>
                  <li className="text-[5px] font-medium md:text-[10px] lg:text-[18px]">
                    Validity: Monthly
                  </li>
                  <li className="text-[5px] font-medium md:text-[10px] lg:text-[18px]">
                    Network: 4G-5G LITE
                  </li>
                  <li className="text-[5px] font-medium md:text-[10px] lg:text-[18px]">
                    Hotspot: Accessible
                  </li>
                  <li className="text-[5px] font-medium md:text-[10px] w-[82px] md:w-[156px] lg:w-[276px] lg:text-[18px]">
                    Usage: Desktop, Tablet, Mobile
                  </li>
                </ul>
                <div className="mx-auto text-[#ffffff] text-[3.77px] font-bold bg-[#04177f] w-[42px] h-[11.81px] py-[4px] flex justify-center items-center rounded-sm md:text-[7px] md:w-[92px] md:h-[25px] lg:w-[164px] lg:h-[45px] lg:text-[13px] md:rounded-md">
                  Subscribe Now
                </div>
              </div>

              {/* ========================9MOBILE======================== */}
              <div
                className=" bg-[#ffffff] flex flex-col gap-[6px] w-[98px] h-[140px] px-[13px] py-[7px] rounded-md md:w-[212px] md:h-[290px] md:gap-[14px] lg:w-[376px] lg:h-[550px] lg:gap-[25px] lg:rounded-xl lg:border-[1px] lg:border-[#00000095] lg:py-[25px] lg:px-[50px]"
                style={{ boxShadow: "0px 0px 25.20828px rgba(0, 0, 0, 0.25)" }}
              >
                <ul className="flex flex-col gap-[6px] justify-center items-center md:gap-[14px] lg:gap-[25px]">
                  <li className="flex gap-[px] lg:gap-[10px] justify-center items-center">
                    <img
                      className="w-[26px] h-[26px] md:w-[56px] md:h-[56px] lg:w-[100px] lg:h-[100px]"
                      src="./Images/pricngimages/9mobile.logo.png"
                      alt="/"
                    />
                    <p className="font-medium text-[5px] md:text-[10px] lg:text-[18px]">
                      9mobile Data
                    </p>
                  </li>
                  <li className="text-[5px] font-medium md:text-[10px] lg:text-[18px]">
                    Product SME - CG
                  </li>
                  <li className="text-[5px] font-medium md:text-[10px] lg:text-[18px]">
                    Price:{" "}
                    <span className="text-[7px] md:text-[16px] text-[#04177f] lg:text-[30px]">
                      &#8358;195
                    </span>
                  </li>
                  <li className="text-[5px] font-medium md:text-[10px] lg:text-[18px]">
                    Validity: Monthly
                  </li>
                  <li className="text-[5px] font-medium md:text-[10px] lg:text-[18px]">
                    Network: 4G-5G LITE
                  </li>
                  <li className="text-[5px] font-medium md:text-[10px] lg:text-[18px]">
                    Hotspot: Accessible
                  </li>
                  <li className="text-[5px] font-medium md:text-[10px] w-[82px] md:w-[156px] lg:w-[276px] lg:text-[18px]">
                    Usage: Desktop, Tablet, Mobile
                  </li>
                </ul>
                <div className="mx-auto text-[#ffffff] text-[3.77px] font-bold bg-[#04177f] w-[42px] h-[11.81px] py-[4px] flex justify-center items-center rounded-sm md:text-[7px] md:w-[92px] md:h-[25px] lg:w-[164px] lg:h-[45px] lg:text-[13px] md:rounded-md">
                  Subscribe Now
                </div>
              </div>

              {/* =============================SMILE=============================== */}
              <div
                className=" bg-[#ffffff] flex flex-col gap-[6px] w-[98px] h-[140px] px-[13px] py-[7px] rounded-md md:w-[212px] md:h-[290px] md:gap-[14px] lg:w-[376px] lg:h-[550px] lg:gap-[25px] lg:rounded-xl lg:border-[1px] lg:border-[#00000095] lg:py-[25px] lg:px-[50px]"
                style={{ boxShadow: "0px 0px 25.20828px rgba(0, 0, 0, 0.25)" }}
              >
                <ul className="flex flex-col gap-[6px] justify-center items-center md:gap-[14px] lg:gap-[25px]">
                  <li className="flex gap-[5px] lg:gap-[10px] justify-center items-center">
                    <img
                      className="w-[26px] h-[26px] md:w-[56px] md:h-[56px] lg:w-[100px] lg:h-[100px]"
                      src="./Images/pricngimages/smile.logo.png"
                      alt="/"
                    />
                    <p className="font-medium text-[5px] md:text-[10px] lg:text-[18px]">
                      Smile Data
                    </p>
                  </li>
                  <li className="text-[5px] font-medium md:text-[10px] lg:text-[18px]">
                    Product Jumbo - Bigga
                  </li>
                  <li className="text-[5px] font-medium md:text-[10px] lg:text-[18px]">
                    Price:{" "}
                    <span className="text-[7px] md:text-[16px] text-[#04177f] lg:text-[30px]">
                      &#8358;250
                    </span>
                  </li>
                  <li className="text-[5px] font-medium md:text-[10px] lg:text-[18px]">
                    Validity: Monthly
                  </li>
                  <li className="text-[5px] font-medium md:text-[10px] lg:text-[18px]">
                    Network: 4G-5G LITE
                  </li>
                  <li className="text-[5px] font-medium md:text-[10px] lg:text-[18px]">
                    Hotspot: Accessible
                  </li>
                  <li className="text-[5px] font-medium md:text-[10px] w-[82px] md:w-[156px] lg:w-[276px] lg:text-[18px]">
                    Usage: Desktop, Tablet, Mobile
                  </li>
                </ul>
                <div className="mx-auto text-[#ffffff] text-[3.77px] font-bold bg-[#04177f] w-[42px] h-[11.81px] py-[4px] flex justify-center items-center rounded-sm md:text-[7px] md:w-[92px] md:h-[25px] lg:w-[164px] lg:h-[45px] lg:text-[13px] md:rounded-md">
                  Subscribe Now
                </div>
              </div>

              {/* ====================================SPECTRANET================================= */}
              <div
                className=" bg-[#ffffff] flex flex-col gap-[6px] w-[98px] h-[140px] px-[13px] py-[7px] rounded-md md:w-[212px] md:h-[290px] md:gap-[14px] lg:w-[376px] lg:h-[550px] lg:gap-[25px] lg:rounded-xl lg:border-[1px] lg:border-[#00000095] lg:py-[25px] lg:px-[50px]"
                style={{ boxShadow: "0px 0px 25.20828px rgba(0, 0, 0, 0.25)" }}
              >
                <ul className="flex flex-col gap-[6px] justify-center items-center md:gap-[14px] lg:gap-[25px]">
                  <li className="flex gap-[5px] lg:gap-[10px] justify-center items-center">
                    <img
                      className="w-[26px] h-[26px] md:w-[56px] md:h-[56px] lg:w-[100px] lg:h-[100px]"
                      src="./Images/pricngimages/spectra.png"
                      alt="/"
                    />
                    <p className="font-medium text-[5px] md:text-[10px] lg:text-[18px]">
                      Spectranet Data
                    </p>
                  </li>
                  <li className="text-[5px] font-medium md:text-[10px] lg:text-[18px]">
                    Product Spectranet
                  </li>
                  <li className="text-[5px] font-medium md:text-[10px] lg:text-[18px]">
                    Price:{" "}
                    <span className="text-[7px] md:text-[16px] text-[#04177f] lg:text-[30px]">
                      &#8358;1000
                    </span>
                  </li>
                  <li className="text-[5px] font-medium md:text-[10px] lg:text-[18px]">
                    Validity: Monthly
                  </li>
                  <li className="text-[5px] font-medium md:text-[10px] lg:text-[18px]">
                    Network: 4G-5G LITE
                  </li>
                  <li className="text-[5px] font-medium md:text-[10px] lg:text-[18px]">
                    Hotspot: Accessible
                  </li>
                  <li className="text-[5px] font-medium md:text-[10px] w-[82px] md:w-[156px] lg:w-[276px] lg:text-[18px]">
                    Usage: Desktop, Tablet, Mobile
                  </li>
                </ul>
                <div className="mx-auto text-[#ffffff] text-[3.77px] font-bold bg-[#04177f] w-[42px] h-[11.81px] py-[4px] flex justify-center items-center rounded-sm md:text-[7px] md:w-[92px] md:h-[25px] lg:w-[164px] lg:h-[45px] lg:text-[13px] md:rounded-md">
                  Subscribe Now
                </div>
              </div>
            </div>

            {/* ==================EDUCATION PIN================== */}
            <div className="mx-[4%] mt-[12%] lg:mt-[5%] lg:ml-[8%] lg:w-[1085px]">
              <div className="mb-[5%] text-[10px] font-semibold md:text-[13px] lg:text-[24px]">
                &#x2022; Education Pin
              </div>
              <div className="grid grid-cols-4 gap-[10px] lg:gap-[0px]">
                {/* ====================WAEC========================= */}
                <div
                  className="bg-[#ffffff] flex justify-center items-center w-[70px] h-[34px] border-[0.5px] md:w-[138px] md:h-[67px] lg:w-[245px] lg:h-[120px] lg:border-[1px] lg:border-[#00000065]"
                  style={{
                    boxShadow: "0px 1px 3.15023px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  <img
                    className="w-[28px] h-[28px] md:w-[56px] md:h-[56px] lg:w-[100px] lg:h-[100px]"
                    src="./Images/pricngimages/waec.png"
                    alt="/"
                  />
                  <p className="text-[5px] md:text-[10px] lg:text-[18px]">
                    WAEC:
                    <span className="text-[#04177f] font-bold">
                      &#8358;2,700
                    </span>
                  </p>
                </div>

                {/* ======================NECO==================== */}
                <div
                  className="bg-[#ffffff] flex justify-center items-center w-[70px] h-[34px] border-[0.5px] md:w-[138px] md:h-[67px] lg:w-[245px] lg:h-[120px] lg:border-[1px] lg:border-[#00000065]"
                  style={{
                    boxShadow: "0px 0.287558px 1.15023px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  <img
                    className="w-[28px] h-[28px] md:w-[56px] md:h-[56px] lg:w-[100px] lg:h-[100px]"
                    src="./Images/pricngimages/neco.png"
                    alt="/"
                  />
                  <p className="text-[5px] md:text-[10px] lg:text-[18px]">
                    NECO:
                    <span className="text-[#04177f] font-bold">&#8358;750</span>
                  </p>
                </div>

                {/* ============================NABTEB===================== */}
                <div
                  className="bg-[#ffffff] flex justify-center items-center w-[70px] h-[34px] border-[0.5px] md:w-[138px] md:h-[67px] lg:w-[245px] lg:h-[120px] lg:border-[1px] lg:border-[#00000065]"
                  style={{
                    boxShadow: "0px 0.287558px 1.15023px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  <img
                    className="w-[28px] h-[28px] md:w-[56px] md:h-[56px] lg:w-[100px] lg:h-[100px]"
                    src="./Images/pricngimages/nabteb.png"
                    alt="/"
                  />
                  <p className="text-[5px] md:text-[10px] lg:text-[18px]">
                    NABTEB:
                    <span className="text-[#04177f] font-bold">&#8358;800</span>
                  </p>
                </div>

                {/* ================================JAMB========================= */}
                <div
                  className="bg-[#ffffff] flex justify-center items-center w-[70px] h-[34px] border-[0.5px] md:w-[138px] md:h-[67px] lg:w-[245px] lg:h-[120px] lg:border-[1px] lg:border-[#00000065]"
                  style={{
                    boxShadow: "0px 0.287558px 1.15023px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  <img
                    className="w-[28px] h-[28px] md:w-[56px] md:h-[56px] lg:w-[100px] lg:h-[100px]"
                    src="./Images/pricngimages/jamb.png"
                    alt="/"
                  />
                  <p className="text-[5px] md:text-[10px] lg:text-[18px]">
                    JAMB:
                    <span className="text-[#04177f] font-bold">
                      &#8358;4,700
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ========================TV SUBSCRIPTION======================= */}
          <div className="mt-[5%] flex flex-col gap-[7px] mb-[5%] md:mt-[-5%] lg:mt-[-25%]">
            <div className="text-[10px] font-semibold lg:font-bold lg:text-[24px]">
              &#x2022; Tv Subscription
            </div>
            <div className="text-[8px] lg:text-[18px]">
              Earn{" "}
              <span className="text-[#04177f] font-extrabold lg:font-black">
                1-5% commission
              </span>{" "}
              on every Tv Subscription on all bouquets.
            </div>
          </div>

          <div className="lg:hidden grid grid-cols-4 gap-x-[10px]">
            <img
              className="w-[70px] h-[52px] md:w-[112px] md:h-[90px]"
              src="./Images/pricngimages/gotv.png"
              alt="/"
            />
            <img
              className="w-[70px] h-[52px] md:w-[112px] md:h-[90px]"
              src="./Images/pricngimages/dstv.png"
              alt="/"
            />
            <img
              className="w-[70px] h-[52px] md:w-[112px] md:h-[90px]"
              src="./Images/pricngimages/startimes.png"
              alt="/"
            />
            <img
              className="w-[70px] h-[52px] md:w-[112px] md:h-[90px]"
              src="./Images/pricngimages/showmax.png"
              alt="/"
            />
          </div>

          <div className="hidden lg:grid grid-cols-4 gap-0 w-[950px]">
            <img
              className="w-[200px] h-[160px] "
              src="./Images/pricngimages/gotv2.png"
              alt="/"
            />
            <img
              className="w-[200px] h-[160px] "
              src="./Images/pricngimages/dstv2.png"
              alt="/"
            />
            <img
              className="w-[200px] h-[160px] "
              src="./Images/pricngimages/startimes2.png"
              alt="/"
            />
            <img
              className="w-[200px] h-[160px] "
              src="./Images/pricngimages/showmax2.png"
              alt="/"
            />
          </div>
        </div>

        {/* ====================ELECTRICIY BILLS===================== */}
        <div className="mt-[12%] flex flex-col gap-[7px] mb-[5%]">
          <div className="text-[10px] font-semibold lg:font-bold lg:text-[24px]">
            &#x2022; Electricity Bills
          </div>
          <div className="text-[8px] lg:text-[18px] leading-[9.6px] w-[312px] lg:w-[100%]">
            Earn{" "}
            <span className="text-[#04177f] font-extrabold lg:font-black">
              1-5% commission
            </span>{" "}
            on every Electricity Bills payments, Prepaid and Postpaid.
          </div>
        </div>

        <img
          className="w-[100%] lg:w-[1195px]"
          src="./Images/pricngimages/electricitybill.png"
          alt="/"
        />

        {/* =========================AIRTIME CONVERSION=================== */}
        <div className="mt-[12%] flex flex-col gap-[7px] mb-[5%]">
          <div className="text-[10px] font-semibold lg:font-bold lg:text-[24px]">
            &#x2022; Airtime Conversion
          </div>
          <div className="text-[8px] lg:text-[18px] leading-[9.6px] w-[312px] lg:w-[100%]">
            Convert your gifted or excess airtime to cash conveniently, 0
            additional fee incurred.
          </div>
        </div>

        <img
          className="lg:w-[1173px]"
          src="./Images/pricngimages/airtimeconversion.png"
          alt="/"
        />

        {/* ===========================BULK SMS================================ */}
        <div className="mt-[12%] flex flex-col gap-[7px] mb-[5%] lg:mb-5 lg:gap-[20px]">
          <div className="text-[10px] font-semibold lg:font-bold lg:text-[24px]">
            &#x2022; Bulk SMS
          </div>
          <div className="text-[8px] lg:text-[18px] leading-[9.6px] w-[312px] lg:w-[100%]">
            Reach thousands of your audience conveniently with super fast
            message delivery at a time.
          </div>
        </div>

        <p className="text-[8px] lg:text-[18px]">
          Pricing:{" "}
          <span className="font-extrabold text-[#04177f]">Coming soon...</span>
        </p>

        {/* ===========================REACHARGE CARD PRINTING========================= */}
        <div className="mt-[12%] flex flex-col gap-[7px] mb-[5%] lg:gap-[25px]">
          <div className="text-[10px] font-semibold lg:font-bold lg:text-[24px]">
            &#x2022; Recharge Card Printing
          </div>
          <div className="text-[8px] lg:text-[18px] leading-[9.6px] w-[312px] lg:w-[100%]">
            Print out customize recharge card with your business name and
            increase your revenue.
          </div>
        </div>
      </div>
      <img
        className="z-[0px] w-[481px] h-[473px] mt-[16%] md:w-[1078px] md:h-[1062px] lg:w-[1910px] lg:h-[1881px] lg:mt-[5%]"
        src="/Images/pricngimages/section2bg.png"
        alt="/"
      />
      <div className="mt-[-135%] mx-[5%] lg:mx-[8%]">
        <img
          className="z-50 bg-[#ffffff]"
          src="/Images/pricngimages/reachargecard.png"
          alt="/"
        />
        <br></br>
        <p className="z-50 text-[8px] lg:text-[18px]">
          Pricing:{" "}
          <span className="font-extrabold text-[#04177f]">Coming soon...</span>
        </p>

        <div className="text-center text-[10px] text-[#04177f] font-semibold md:text-[16px] lg:text-[30px] mt-[10%]">
          Payment Pricing
        </div>
        {/* ==========================WALLET SYSTEM=================== */}
        <div className="mt-[12%] flex flex-col gap-[7px] mb-[5%]">
          <div className="text-[10px] font-semibold lg:font-bold lg:text-[24px]">
            &#x2022; Wallet System{" "}
          </div>
        </div>
        <img className="z-50 " src="/Images/pricngimages/wallet.png" alt="/" />

        {/* ===================GLOBAL VIRTUAL ACCOUNTS==================== */}
        <div className="mt-[12%] flex flex-col gap-[7px] mb-[5%]">
          <div className="text-[10px] font-semibold lg:font-bold lg:text-[24px]">
            &#x2022; Global Virtual Accounts{" "}
          </div>
          <div className="flex items-center justify-between">
            <img
              className="w-[103px] h-[93px] md:w-[220px] md:h-[190px] lg:w-[411px] lg:h-[370px]"
              src="/Images/pricngimages/globalframe.png"
              alt="/"
            />
            <img
              className="w-[100px] h-[103px] mr-[4%] md:w-[220px] md:h-[200px] lg:w-[400px] lg:h-[409px]"
              src="/Images/pricngimages/globalframe2.png"
              alt="/"
            />
          </div>
        </div>

        {/* ================CARD PAYMENT=================== */}
        <div className="mt-[12%] flex flex-col gap-[7px] mb-[5%]">
          <div className="text-[10px] font-semibold lg:font-bold lg:text-[24px]">
            &#x2022; Card Payment{" "}
          </div>
          <img
            className="w-[88px] h-[56px] mx-auto md:w-[150px] md:h-[100px] lg:w-[352px] lg:h-[223px]"
            src="/Images/pricngimages/cardpayment.png"
            alt="/"
          />
        </div>

        {/* =========================MONEY TRANSFER================= */}
        <div className="mt-[12%] flex flex-col gap-[7px] mb-[5%]">
          <div className="flex flex-col lg:gap-[25px]">
            <div className="text-[10px] font-semibold lg:font-bold lg:text-[24px]">
              &#x2022; Money Transfer
            </div>
            <div className="text-[8px] lg:text-[18px] leading-[9.6px] w-[312px] lg:w-[100%]">
              Currency: NGN
            </div>
          </div>
          <div className="flex justify-between lg:mt-[5%]">
            <img
              className="w-[117px] h-[90px] md:w-[254px] md:h-[189px] lg:w-[450px] lg:h-[340px]"
              src="./Images/pricngimages/moneytransfer1.png"
              alt="/"
            />
            <img
              className="mt-[-10%] w-[118px] h-[118px] md:w-[257px] md:h-[257px] lg:w-[456px] lg:h-[456px]"
              src="./Images/pricngimages/moneytransfer2.png"
              alt="/"
            />
          </div>
        </div>

        {/* =========================INTERNATIONAL PAYMENT=============== */}
        <div className="mt-[12%] flex items-center gap-[7px] mb-[5%]">
          <div className="text-[10px] font-semibold lg:font-bold lg:text-[24px]">
            &#x2022; International Payments{" "}
          </div>
          <img
            className="w-[11px] h-[12px] lg:w-[50px] lg:h-[50px]"
            src="./Images/pricngimages/ball.png"
            alt="/"
          />
        </div>

        <img
          className="w-[330px] h-[65px] lg:hidden"
          src="Images/pricngimages/itpayment.png"
          alt="/"
        />
        <img
          className="hidden lg:block w-[330px] h-[65px] lg:w-[1200px] lg:h-[270px]"
          src="Images/pricngimages/itpayment2.png"
          alt="/"
        />

        {/* ==========================CARD ISSUING PRICING====================== */}
        <div className="text-center mt-[10%] text-[10px] text-[#04177f] font-semibold md:text-[16px] lg:text-[30px] ">
          Card Issuing Pricing
        </div>

        {/* ================PRODUCTS================= */}
        <div className="mt-[12%] flex flex-col gap-[7px] mb-[5%]">
          <div className="text-[10px] font-semibold lg:font-bold lg:text-[24px]">
            &#x2022; Products:{" "}
          </div>
        </div>
        <img
          className="w-[230px] h-[88px] mx-auto lg:hidden"
          src="./Images/pricngimages/products.png"
          alt="/"
        />
        <img
          className="hidden w-[917px] h-[349px] mx-auto lg:block"
          src="./Images/pricngimages/product2.png"
          alt="/"
        />
        {/* ======================PRICING===================== */}
        <div className="mt-[12%] flex flex-col gap-[7px] mb-[5%]">
          <div className="text-[10px] font-semibold lg:font-bold lg:text-[24px]">
            &#x2022; Pricing:{" "}
          </div>
        </div>

        <img
          className="hidden w-[739px] h-[517px] mx-auto lg:block"
          src="./Images/pricngimages/pricingtable.png"
          alt="/"
        />
        <img
          className="w-[185px] h-[130px] mx-auto lg:hidden"
          src="./Images/pricngimages/pricingtable.png"
          alt="/"
        />

        <Link to="/ContactUs">
          <div className="mb-[25%] lg:mb-[15%] bg-[#04177f] w-[65px] h-[17px] text-white p-[1%] rounded-sm mx-auto text-center mt-[7%] text-[7px] lg:mt-[5%] lg:w-[164.54px] lg:h-[45px] lg:text-[13px] lg:rounded-md">
            Contact Sales
          </div>
        </Link>
      </div>
    </>
  );
};

// &#x2022;

// &#8358
