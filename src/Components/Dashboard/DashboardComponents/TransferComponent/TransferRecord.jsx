import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ContextProvider } from "../../../Context";
import styles from "../../DashboardComponents/component.module.css";

// ================Function for country select dropdown===================

const CountrySelect = ({ onSelect, selectedCountry, countries }) => {
  const countryList = [
    {
      id: 1,
      name: "Nigeria",
      code: "NGN",
      flag: require("../../DashboardComponents/flagsImages/nigeriaFlag.png"),
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
        className="text-[8px] text-[#0005] p-1 flex rounded-[5px] justify-between items-center w-[94px] h-[19.6px] border mb-[4%] md:w-[142px] md:h-[22px] md:text-[12px] lg:w-[231px] lg:h-[41px] lg:text-[16px] lg:rounded-[8px]"
      >
        {selected ? (
          <div className="flex gap-[5px] items-center md:gap-[8px]">
            <img
              className="w-[11px] h-[11px] lg:w-[29px] lg:h-[29px]"
              src={image}
              alt=""
            />
            {selectedCountry}
          </div>
        ) : (
          "Select Country"
        )}
        {selected ? (
          <img
            className=" h-[8.3px] w-[8.3px] lg:w-[24px] lg:h-[24px]"
            src="./Images/dashboardImages/arrow-down2.png"
            alt="dropdown"
          />
        ) : (
          <img
            className=" h-[16.3px] w-[16.3px] lg:w-[24px] lg:h-[24px]"
            src="./Images/dashboardImages/arrow-down2.png"
            alt="dropdown"
          />
        )}
      </button>
      {showList && (
        <div className={styles.countrySelect}>
          {countryList.map((country) => (
            <div
              className="cursor-pointer border-b flex items-center p-1 gap-[5px] text-[9px] bg-[#fff] md:text-[14px] lg:text-[16px]"
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
              {country.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// ===================Transfer To Account Page================
export const TransferRecord = () => {
  const { isDarkMode, handleActive, activeButton } =
    useContext(ContextProvider);
  const {
    noRecord,
    personalAccount,
    businessAccount,
    setPersonalAccount,
    setBusinessAccount,
    setNoRecord,
    image,
  } = useContext(ContextProvider);
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleCountrySelect = (country, id) => {
    setSelectedCountry(country);
  };

  return (
    <div>
      <div className=" flex items-end justify-between">
        <div className="flex text-[9px] gap-[15px] md:text-[14px] lg:text-[20px]">
          <div
            onClick={() => {
              handleActive(0);
              setBusinessAccount(false);
              setNoRecord(true);
            }}
            className={`${
              activeButton[0]
                ? "bg-[#E2F3FF] rounded-[2px] border-b-[2px] border-b-[#04177f] h-[16px] flex items-center p-[5px] md:h-[35px] lg:rounded-[6px] lg:border-b-[4px] lg:h-[50px]"
                : ""
            } w-[95.667px] rounded-[2px] md:w-[180px] md:rounded-[3px] md:justify-center md:items-center flex lg:w-[248px] lg:rounded-[6px]`}
          >
            Personal Accounts
          </div>
          <div
            onClick={() => {
              handleActive(1);
              setPersonalAccount(false);
              setNoRecord(true);
            }}
            className={`${
              activeButton[1]
                ? "bg-[#E2F3FF] rounded-[2px] border-b-[2px] border-b-[#04177f] h-[16px] flex items-center p-[5px]  md:h-[35px] lg:rounded-[6px] lg:border-b-[4px] lg:h-[50px]"
                : ""
            } w-[95.667px] rounded-[2px] md:w-[180px] md:rounded-[3px]  md:justify-center md:items-center flex lg:w-[248px] lg:rounded-[6px]`}
          >
            Business Accounts
          </div>
        </div>
        <CountrySelect
          onSelect={handleCountrySelect}
          selectedCountry={selectedCountry}
        />
      </div>

      <hr />
      {noRecord && (
        <div className={`${styles.accountRecords}`}>
          <div className="text-[7px] flex items-center justify-between w-[100%] h-[16px] bg-[#c3d9ff] p-2 md:h-[47px] md:text-[13px] lg:text-[16px] lg:h-[45px] lg:p-6">
            <h3 className="">Country</h3>
            <div className="w-[1px] h-[16px] md:h-[47px] bg-[#0003]"></div>
            <h3 className="">Currency</h3>
            <div className="w-[1px] h-[16px] md:h-[47px] bg-[#0003]"></div>
            <h3 className="">Bank Name</h3>
            <div className="w-[1px] h-[16px] md:h-[47px] bg-[#0003]"></div>
            <h3 className="">Account Name</h3>
            <div className="w-[1px] h-[16px] md:h-[47px] bg-[#0003]"></div>
            <h3 className="">Account Number</h3>
            <div className="w-[1px] h-[16px] md:h-[47px] bg-[#0003]"></div>
            <h3 className="">Reference No</h3>
          </div>

          <img
            className={styles.noTransactions}
            src="./Images/Dashboardimages/noTransactionFound.png"
            alt=""
          />
          <div
            className={`${
              isDarkMode ? "" : "text-[#0005] font-extrabold"
            } text-[15px] text-center md:text-[27px] lg:text-[40px]`}
          >
            No Record Found !
          </div>
        </div>
      )}

      {/* =======================Personal Account Table==================== */}
      {personalAccount && (
        <table className="text-[7px] md:text-[12px] lg:text-[16px]">
          <thead>
            <tr className="bg-[#c3d9ff] lg:h-[47px]">
              <th>Country</th>
              <th>Currency</th>
              <th>Bank Name</th>
              <th>Account Name</th>
              <th>Account Number</th>
              <th>Reference No</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="">
                <div className="flex gap-[3px] lg:gap-[10px]">
                  <img
                    className="w-[11px] h-[11px] lg:w-[24px] lg:h-[24px]"
                    src={image}
                    alt=""
                  />{" "}
                  <p>
                    {" "}
                    <Link to="/personal-account">Nigeria</Link>
                  </p>
                </div>
              </td>
              <td>
                <Link to="/personal-account">NGN</Link>
              </td>
              <td>
                <Link to="/personal-account">GT Bank</Link>
              </td>
              <td>
                <Link to="/personal-account">Habib Kamaldeen</Link>
              </td>
              <td>
                <Link to="/personal-account">01234*****</Link>
              </td>
              <td className="flex gap-[5px] lg:gap-[10px]">
                <p>
                  {" "}
                  <Link to="/personal-account">AP-2023 0703-001 </Link>
                </p>
                <img
                  className="w-[10px] h-[10px] md:w-[14px] md:h-[14px] lg:w-[20px] lg:h-[20px]"
                  src="./Images/Dashboardimages/arrowright.png"
                  alt="/"
                />
              </td>
            </tr>
          </tbody>
        </table>
      )}

      {/* =======================Business Account Table==================== */}
      {businessAccount && (
        <table className="text-[7px] md:text-[12px] lg:text-[16px]">
          <thead>
            <tr className="bg-[#c3d9ff] lg:h-[47px]">
              <th>Country</th>
              <th>Currency</th>
              <th>Bank Name</th>
              <th>Account Name</th>
              <th>Account Number</th>
              <th>Reference No</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="">
                <div className="flex gap-[3px] lg:gap-[10px]">
                  <img
                    className="w-[11px] h-[11px] lg:w-[24px] lg:h-[24px]"
                    src={image}
                    alt=""
                  />{" "}
                  <p>
                    {" "}
                    <Link to="/business-account">Nigeria</Link>
                  </p>
                </div>
              </td>
              <td>
                <Link to="/business-account">NGN</Link>
              </td>
              <td>
                <Link to="/business-account">Mercury Bank</Link>
              </td>
              <td>
                <Link to="/business-account">
                  AremxyPlug Business Ent, LTD.
                </Link>
              </td>
              <td>
                <Link to="/business-account">01234*****</Link>
              </td>
              <td className="flex gap-[5px] lg:gap-[10px]">
                <p>
                  {" "}
                  <Link to="/business-account">AP-2023 0703-001 </Link>
                </p>
                <img
                  className="w-[10px] h-[10px] md:w-[14px] md:h-[14px] lg:w-[20px] lg:h-[20px]"
                  src="./Images/Dashboardimages/arrowright.png"
                  alt="/"
                />
              </td>
            </tr>
          </tbody>
        </table>
      )}

      <div className="flex gap-[15px] justify-center items-center absolute top-[100%] left-[35%] lg:top-[220%] lg:left-[40%]">
        <div className="text-[8px] md:text-[12px] lg:text-[16px]">
          You need help ?
        </div>
        <Link to="/ContactUs">
          <div
            className={`${isDarkMode ? "border " : "bg-[#04177f]"} ${
              styles.contactus
            }`}
          >
            Contact Us
          </div>
        </Link>
      </div>
    </div>
  );
};
