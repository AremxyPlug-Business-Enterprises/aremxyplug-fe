import React from "react";
import { useContext } from "react";
import { ContextProvider } from "../../Context";


export const CountrySelectorFiat = ({ onSelect, selectedCountry }) => {
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
        className="border h-[24.24px] md:h-[41.82px] lg:h-[70px] w-[50px] flex justify-center gap-[20%] items-center bg-[#04177f] md:w-[120px]"
      >
        {selected ? (
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
              src="./Images/otherBanksImages/USFLAG.png"
              alt=""
            />
        )}
        {selected ? (
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
        <div className="" style={{boxShadow:"0px 1.60656px 4.01639px 0px rgba(0, 0, 0, 0.25)",}}>
          {countryList.map((country) => (
            <div
              className=" cursor-pointer border-b flex items-center p-1 gap-[5px] text-[9px] bg-[#fff] md:text-[14px] lg:text-[16px] lg:justify-between lg:px-[25%]"
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
