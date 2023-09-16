import React from "react";
import { useContext } from "react";
import { ContextProvider } from "../../../Context";

export const CountrySelector = ({ onSelect, selectedCountry }) => {
  const countryList = [
    // {
    //   id: 1,
    //   name: "Nigeria",
    //   code: "NGN",
    //   flag: require("../flagsImages/nigeriaFlag.png"),
    // },
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
      code: "GBP",
      flag: require("../../DashboardComponents/flagsImages/europeanFlag.png"),
    },
    {
      id: 5,
      name: "Australia",
      code: "GBP",
      flag: require("../../DashboardComponents/flagsImages/australiaFlag.png"),
    },
    {
      id: 6,
      name: "Kenya",
      code: "GBP",
      flag: require("../../DashboardComponents/flagsImages/kenyaFlag.png"),
    },
  ];

  const {
    setNoRecord,
    setPersonalAccount,
    setBusinessAccount,
    image,
    setImage,
    setCode,
    showList,
    setShowList,
    selected,
    setSelected,
    activeButton,
  } = useContext(ContextProvider);

  const handleOptionClick = (country, flag, id, code) => {
    onSelect(country);
    setImage(flag);
    setCode(code);
    setShowList(false);
    setSelected(true);
    setNoRecord(id !== 1);
    if (activeButton[0]) {
      setPersonalAccount(id === 1);
      // setBusinessAccount(false);
    } else if (activeButton[1]) {
      setBusinessAccount(id === 1);
      // setPersonalAccount(false);
    }

    console.log(id);
  };

  return (
    <div>
      <button
        onClick={() => setShowList(!showList)}
        className="text-[8px] text-[#0005] h-[23.5px] w-[50px] flex justify-center gap-[20%] items-center bg-[#04177f] mb-[4%] md:w-[142px] md:h-[22px] md:text-[12px] lg:w-[180px] lg:h-[44px] lg:text-[16px] "
      >
        {selected ? (
          <div className="flex gap-[5px] items-center md:gap-[8px]">
            <img
              className="w-[11px] h-[11px] lg:w-[29px] lg:h-[29px]"
              src={image}
              alt=""
            />
            {/* {selectedCountry} */}
          </div>
        ) : (
          <img
              className="w-[11px] h-[11px] lg:w-[29px] lg:h-[29px]"
              src="./Images/otherBanksImages/USFLAG.png"
              alt=""
            />
        )}
        {selected ? (
          <img
            className=" h-[8.3px] w-[8.3px] lg:w-[24px] lg:h-[24px]"
            src="./Images/dashboardImages/arrow-down2.png"
            alt="dropdown"
          />
        ) : (
          <img
            className=" h-[8.3px] w-[8.3px] lg:w-[24px] lg:h-[24px]"
            src="./Images/dashboardImages/arrow-down2.png"
            alt="dropdown"
          />
        )}
      </button>
      {showList && (
        <div className="" style={{boxShadow:"0px 1.60656px 4.01639px 0px rgba(0, 0, 0, 0.25)",}}>
          {countryList.map((country) => (
            <div
              className="cursor-pointer border-b flex items-center p-1 gap-[5px] text-[9px] bg-[#fff] md:text-[14px] lg:text-[16px] lg:justify-between lg:px-[25%]"
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
