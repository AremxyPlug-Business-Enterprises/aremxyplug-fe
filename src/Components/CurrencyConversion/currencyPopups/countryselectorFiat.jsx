import React from "react";
import { useContext } from "react";
import { ContextProvider } from "../../Context";
import flag from '../../Dashboard/DashboardComponents/flagsImages/nigeriaFlag.png'

export const FiatSelector = ({ onSelectOne, selectedCountryOne }) => {
  const countryListOne = [
    {
      id: 1,
      name: "Nigeria",
      code: "NGN",
      flag: require("../../Dashboard/DashboardComponents/flagsImages/nigeriaFlag.png"),
    },
    {
      id: 2,
      name: "United States",
      code: "USD",
      flag: require("../../Dashboard/DashboardComponents/flagsImages/americaFlag.png"),
    },
    {
      id: 3,
      name: "United Kingdom",
      code: "GBP",
      flag: require("../../Dashboard/DashboardComponents/flagsImages/ukFlag.png"),
    },
    {
      id: 4,
      name: "European",
      code: "EUR",
      flag: require("../../Dashboard/DashboardComponents/flagsImages/europeanFlag.png"),
    },
    {
      id: 5,
      name: "Australia",
      code: "AUR",
      flag: require("../../Dashboard/DashboardComponents/flagsImages/australiaFlag.png"),
    },
    {
      id: 6,
      name: "Kenya",
      code: "KES",
      flag: require("../../Dashboard/DashboardComponents/flagsImages/kenyaFlag.png"),
    },
  ];

  const {
    setNoRecord,
    setPersonalAccount,
    setBusinessAccount,
    image,
    setImage,
    setCode,
    showListOne,
    setShowListOne,
    selectedOne,
    setSelectedOne,
    activeButtonOne,
  } = useContext(ContextProvider);

  const handleOptionClickOne = (country, flag, id, code) => {
    onSelectOne(country);
    setImage(flag);
    setCode(code);
    setShowListOne(false);
    setSelectedOne(true);
    setNoRecord(id !== 1);
    if (activeButtonOne[0]) {
      setPersonalAccount(id === 1);
      // setBusinessAccount(false);
    } else if (activeButtonOne[1]) {
      setBusinessAccount(id === 1);
      // setPersonalAccount(false);
    }

    console.log(id);
  };

  return (
    <div>
      <button
        onClick={() => setShowListOne(!showListOne)}
        className="text-[8px] text-[#0005] h-[23.5px] w-[50px] flex justify-center gap-[20%] items-center bg-[#04177f] mb-[4%] md:h-[45px] md:w-[160px] md:text-[12px] lg:w-[180px] lg:h-[44px] lg:text-[16px] "
      >
        {selectedOne ? (
          <div className="flex gap-[5px] items-center md:gap-[8px]">
            <img
              className="w-[11px] h-[11px] md:w-[20px] md:h-[20px] lg:w-[29px] lg:h-[29px]"
              src={image}
              alt=""
            />
            {/* {selectedCountry} */}
          </div>
        ) : (
          <img
              className="w-[11px] h-[11px] md:w-[20px] md:h-[20px] lg:w-[29px] lg:h-[29px]"
              src={flag}
              alt=""
            />
        )}
        {selectedOne ? (
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
      {showListOne && (
        <div className="" style={{boxShadow:"0px 1.60656px 4.01639px 0px rgba(0, 0, 0, 0.25)",}}>
          {countryListOne.map((country) => (
            <div
              className="cursor-pointer border-b flex items-center p-1 gap-[5px] text-[9px] bg-[#fff] md:text-[14px] lg:text-[16px] lg:justify-between lg:px-[25%]"
              key={country.id}
              onClick={() =>
                handleOptionClickOne(
                  country.name,
                  country.flag,
                  country.id,
                  country.code
                )
              }
            >
              <img
                className="w-[11px] h-[11px] lg:w-[29px] lg:h-[29px]"
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
