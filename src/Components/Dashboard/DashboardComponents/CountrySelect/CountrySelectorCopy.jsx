import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { ContextProvider } from "../../../Context";


export const CountrySelectorCopy = ({
  onSelect,
  className,
  w = "w-[110px]",
}) => {
  const countryList = [
    {
      id: 1,
      name: "Nigeria",
      code: "NGN",
      flag: require("../flagsImages/nigeriaFlag.png"),
    },
    {
      id: 2,
      name: "United States",
      code: "USD",
      flag: require("../../DashboardComponents/flagsImages/americaFlag.png"),
    },
    {
      id: 3,
      name: "United Kingdom",
      code: "GBP",
      flag: require("../../DashboardComponents/flagsImages/ukFlag.png"),
    },
    {
      id: 4,
      name: "European",
      code: "EUR",
      flag: require("../../DashboardComponents/flagsImages/europeanFlag.png"),
    },
    {
      id: 5,
      name: "Australia",
      code: "AUR",
      flag: require("../../DashboardComponents/flagsImages/australiaFlag.png"),
    },
    {
      id: 6,
      name: "Kenya",
      code: "KES",
      flag: require("../../DashboardComponents/flagsImages/kenyaFlag.png"),
    },
  ];

  const {
    setNoRecord,
    setCode,
    selectedCurr,
    setSelectedCurr,
    CurrImage,
    setCurrImage,
  } = useContext(ContextProvider);

  const [showList, setShowList] = useState(false);

  const handleOptionClick = (country, flag, id, code) => {
    onSelect(country);
    setCurrImage(flag);
    setCode(code);
    setShowList(false);
    setSelectedCurr(true);
    setNoRecord(id !== 1);

    console.log(id);
  };

  const dynamicClassName = `${w} ${className || ""}`;

  return (
    <div>
      <button
        onClick={() => setShowList(!showList)}
        className={`text-[8px] text-[#0005] h-[23.5px] w-[50px] flex justify-center gap-[20%] items-center bg-[#04177f] mb-[4%] md:h-[45px] md:w-[160px] md:text-[12px] ${dynamicClassName} lg:h-[44px] lg:text-[16px]`}
      >
        {selectedCurr ? (
          <div className="flex gap-[5px] items-center md:gap-[8px]">
            <img
              className="w-[11px] h-[11px] md:w-[20px] md:h-[20px] lg:w-[29px] lg:h-[29px]"
              src={CurrImage}
              alt=""
            />
            {/* {selectedCountry} */}
          </div>
        ) : (
          <img
            className="w-[11px] h-[11px] md:w-[20px] md:h-[20px] lg:w-[29px] lg:h-[29px]"
            src="./Images/otherBanksImages/NAIJAFLAG.png"
            alt=""
          />
        )}
        {selectedCurr ? (
          <img
            className=" h-[8.3px] w-[8.3px] md:h-[15px] md:w-[15px] lg:w-[24px] lg:h-[24px]"
            src="./Images/dashboardImages/arrow-down2.png"
            alt="dropdown"
          />
        ) : (
          <img
            className=" h-[8.3px] w-[8.3px] md:h-[15px] md:w-[15px] lg:w-[24px] lg:h-[24px]"
            src="./Images/dashboardImages/arrow-down2.png"
            alt="dropdown"
          />
        )}
      </button>

      {showList && (
       
          <div
            className="absolute bg-[#fff]"
            style={{
              boxShadow: "0px 1.60656px 4.01639px 0px rgba(0, 0, 0, 0.25)",
            }}
          >
            {countryList.map((country) => (
              <div
                className=" cursor-pointer border-b flex items-center p-[7px] gap-[5px] text-[9px] justify-center md:p-[12px] md:gap-[20px] md:w-[160px] md:text-[14px] lg:w-[165px] lg:gap-[20px] lg:text-[16px]"
                key={country.id}
                onClick={() =>
                  handleOptionClick(
                    country.name,
                    country.flag,
                    country.id,
                    country.code
                  )
                }
              >
                <img
                  className="w-[11px] h-[11px] md:w-[20px] md:h-[20px] lg:w-[29px] lg:h-[29px]"
                  src={country.flag}
                  alt="/"
                />
                {country.code}
              </div>
            ))}
          </div>
       
      )}
    </div>
  );
};
