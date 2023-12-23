import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ContextProvider } from "../../../../Context";
import styles from "../../TransferComponent/transfer.module.css";
import { Modal } from "../../../../Screens/Modal/Modal";
import { useNavigate } from "react-router-dom";
import Joi from "joi";
// import axios from "axios";

export const PersonalAccountForm = () => {
  const countryList = [
    {
      id: 1,
      name: "Nigeria",
      code: "NGN",
      flag: require("../../../../Dashboard/DashboardComponents/flagsImages/nigeriaFlag.png"),
    },
    {
      id: 2,
      name: "United States",
      code: "USD",
      flag: require("../../../../Dashboard/DashboardComponents/flagsImages/americaFlag.png"),
    },
    {
      id: 3,
      name: "United Kingdom",
      code: "GBP",
      flag: require("../../../../Dashboard/DashboardComponents/flagsImages/ukFlag.png"),
    },
    {
      id: 4,
      name: "European",
      code: "EUR",
      flag: require("../../../../Dashboard/DashboardComponents/flagsImages/europeanFlag.png"),
    },
    {
      id: 5,
      name: "Australia",
      code: "AUD",
      flag: require("../../../../Dashboard/DashboardComponents/flagsImages/australiaFlag.png"),
    },
    {
      id: 6,
      name: "Kenya",
      code: "KES",
      flag: require("../../../../Dashboard/DashboardComponents/flagsImages/kenyaFlag.png"),
    },
  ];

  const {
    showList,
    setShowList,
    selected,
    setSelected,
    isDarkMode,
    toggleSideBar,
  } = useContext(ContextProvider);
  const [flag, setFlag] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [country, setCountry] = useState("");
  const [currencyAvailable, setCurrencyAvailable] = useState(false);
  const [successful, setSuccessful] = useState(false);
  const [checkbox, setCheckBox] = useState({
    checkbox1: false,
    checkbox2: false,
  });
  const [state, setState] = useState({
    email: "",
    houseAddress: "",
    accountName: "",
    accountNumber: "",
    swiftCode: "",
    bankName: "",
    beneficiaryAddress: "",
    beneficiaryCity: "",
    stateOrProvince: "",
    zipCode: "",
  });

  const [errors, setErrors] = useState({});
  console.log(state, countryCode, country, checkbox);

  const navigate = useNavigate();

  const handleCheckBox = (event) => {
    const { name, checked } = event.target;
    setCheckBox((prevState) => {
      return {
        ...prevState,
        [name]: checked,
      };
    });
  };

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (name === "accountNumber" && type === "number") {
      // If the input is of type 'number', limit it to 10 digits
      const inputValue = value.replace(/\D/g, "").slice(0, 10);
      setState({
        ...state,
        [name]: inputValue,
      });
    } else {
      // Handle other types of inputs as before
      const inputValue = type === "checkbox" ? checked : value;
      setState({
        ...state,
        [name]: inputValue,
      });
    }
  };

  const handleCountryClick = (name, flag, id, code) => {
    setFlag(flag);
    setShowList(false);
    setCountry(name);
    setSelected(true);
    setCountryCode(code);
    setCurrencyAvailable(id !== 1);
  };

  // ========form validation using regex=======
  const schema = Joi.object({
    country: Joi.string().required(),
    email: Joi.string()
      .pattern(new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      .required()
      .messages({ "string.pattern.base": "Invalid email " }),
    houseAddress: Joi.string().required(),
    accountNumber: Joi.string()
      .pattern(new RegExp(/^\d+$/))
      .required()
      .messages({
        "string.pattern.base": "Account number should be 10 digits ",
      }),
    swiftCode: Joi.string().required(),
    accountName: Joi.string().required(),
    bankName: Joi.string().required(),
    beneficiaryAddress: Joi.string().required(),
    beneficiaryCity: Joi.string().required(),
    stateOrProvince: Joi.string().required(),
    zipCode: Joi.number().integer().min(-30587).max(+30587),
    checkbox1: Joi.boolean().required().invalid(false).messages({
      "any.invalid": "Please ensure you acknowledge",
    }),
    checkbox2: Joi.boolean().required().invalid(false).messages({
      "any.invalid":
        "Please ensure you agree to the privacy policy, terms and condition",
    }),
  });
  // ======end of form valdiation=====

  // ==========Submit Handler============
  const handleAddAccount = (e) => {
    e.preventDefault();

    const {
      email,
      houseAddress,
      accountNumber,
      swiftCode,
      accountName,
      bankName,
      beneficiaryAddress,
      beneficiaryCity,
      stateOrProvince,
      zipCode,
    } = state;

    const { checkbox2, checkbox1 } = checkbox;

    const { error } = schema.validate({
      country,
      email,
      houseAddress,
      accountNumber,
      swiftCode,
      accountName,
      bankName,
      beneficiaryAddress,
      beneficiaryCity,
      stateOrProvince,
      zipCode,
      checkbox1,
      checkbox2,
    });

    if (error) {
      setErrors(
        error.details.reduce((acc, curr) => {
          acc[curr.path[0]] = curr.message;
          return acc;
        }, {})
      );
    } else {
      setSuccessful(true);
    }

    console.log(successful);
  };

  return (
    <>
      <div className="mt-[4%] flex flex-col gap-[10px] md:grid md:grid-cols-2 md:gap-[5%] h-[] lg:w-[90%] ">
        {/* =====================Country Input========================= */}
        <div className={styles.inputBox}>
          <p className="text-[10px] font-extrabold lg:text-[20px]">
            Select Country
          </p>
          <div
            onClick={() => setShowList(!showList)}
            className="border rounded-[5px] h-[25px] flex justify-between items-center p-1 lg:h-[45px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]"
          >
            {selected ? (
              <div className="flex gap-[7px] items-center">
                <img
                  className="w-[11px] h-[11px] lg:w-[29px] lg:h-[29px]"
                  src={flag}
                  alt=""
                />
                <p className="text-[10px] lg:text-[14px]"> {country}</p>
              </div>
            ) : (
              <p></p>
            )}
            <img
              className=" h-[13.3px] w-[13.3px] lg:w-[24px] lg:h-[24px] "
              src="./Images/dashboardImages/arrow-down2.png"
              alt="dropdown"
            />
          </div>
          {errors.country && (
            <div className="text-[12px] text-red-500 italic lg:text-[14px]">
              {errors.country}
            </div>
          )}
          {showList && (
            <div
              className={`${
                toggleSideBar
                  ? "lg:w-[31.5%] lg:top-[100.5%]"
                  : "lg:w-[38.5%] lg:top-[105.3%]"
              }  ${
                styles.countryDropDown
              } rounded-br-[7px] rounded-bl-[7px] shadow-xl bg-[#fff] border w-[100%] lg:w-full lg:rounded-br-[14px] lg:rounded-bl-[14px]`}
            >
              {" "}
              {countryList.map((country) => (
                <div
                  className=" cursor-pointer border-b flex items-center p-2 gap-[5px] text-[9px]  md:text-[14px] lg:text-[16px]"
                  key={country.id}
                  onClick={() =>
                    handleCountryClick(
                      country.name,
                      country.flag,
                      country.id,
                      country.code
                    )
                  }
                >
                  <img
                    className="w-[13px] h-[13px] lg:w-[29px] lg:h-[29px]"
                    src={country.flag}
                    alt="/"
                  />
                  {country.name}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ==================Currency============================ */}
        <div className={styles.inputBox}>
          <p className="text-[10px] font-extrabold lg:text-[20px]">
            Select Currency
          </p>
          <div className="border text-[10px] rounded-[5px] h-[25px] flex justify-between items-center p-1 lg:h-[45px] lg:text-[14px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]">
            {countryCode}
          </div>
          {errors.currency && (
            <div className="text-[12px] text-red-500 italic lg:text-[14px]">
              {errors.currency}
            </div>
          )}
        </div>

        {/* ========================Email Address Input ================ */}
        <div className={styles.inputBox}>
          <p className="text-[10px] font-extrabold lg:text-[20px]">
            Email Address
          </p>
          <div className="border rounded-[5px] h-[25px] flex justify-between items-center p-1 lg:h-[45px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]">
            <input
              onChange={handleInputChange}
              name="email"
              value={state.email}
              className="text-[10px] w-[100%] h-[100%] outline-none lg:text-[14px]"
              type="email"
            />
            <svg
              className="h-[13.3px] w-[13.3px] lg:h-[24px] lg:w-[24px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 12 13"
              fill="none"
            >
              <path
                d="M8.5 10.998H3.5C2 10.998 1 10.248 1 8.49805V4.99805C1 3.24805 2 2.49805 3.5 2.49805H8.5C10 2.49805 11 3.24805 11 4.99805V8.49805C11 10.248 10 10.998 8.5 10.998Z"
                fill="#FFF"
                stroke="#92ABFE"
                stroke-width="0.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <g opacity="0.4">
                <path
                  d="M8.5 5.24805L6.935 6.49805C6.42 6.90805 5.575 6.90805 5.06 6.49805L3.5 5.24805"
                  fill="#FFF"
                />
                <path
                  d="M8.5 5.24805L6.935 6.49805C6.42 6.90805 5.575 6.90805 5.06 6.49805L3.5 5.24805"
                  stroke="#92ABFE"
                  stroke-width="0.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
          </div>
          {errors.email && (
            <div className="text-[12px] text-red-500 italic lg:text-[14px]">
              {errors.email}
            </div>
          )}
        </div>

        {/* ==========================House Address====================== */}
        <div className={styles.inputBox}>
          <p className="text-[10px] font-extrabold lg:text-[20px]">
            House Address
          </p>
          <div className="border rounded-[5px] h-[25px] flex justify-between items-center p-1 lg:h-[45px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]">
            <input
              onChange={handleInputChange}
              name="houseAddress"
              value={state.houseAddress}
              className="text-[10px] w-[100%] h-[100%] outline-none lg:text-[14px]"
              type="text"
            />
            <svg
              className="h-[13.3px] w-[13.3px] lg:h-[24px] lg:w-[24px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 12 13"
              fill="none"
            >
              <path
                d="M4.51 2.16715L1.815 4.26715C1.365 4.61715 1 5.36215 1 5.92715V9.63215C1 10.7922 1.945 11.7422 3.105 11.7422H8.895C10.055 11.7422 11 10.7922 11 9.63715V5.99715C11 5.39215 10.595 4.61715 10.1 4.27215L7.01 2.10715C6.31 1.61715 5.185 1.64215 4.51 2.16715Z"
                fill="#FFF"
                stroke="#92ABFE"
                stroke-width="0.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path d="M6 9.74219V8.24219V9.74219Z" fill="#FFF" />
              <path
                d="M6 9.74219V8.24219"
                stroke="#92ABFE"
                stroke-width="0.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          {errors.houseAddress && (
            <div className="text-[12px] text-red-500 italic lg:text-[14px]">
              {errors.houseAddress}
            </div>
          )}
        </div>

        {/* ============================Bank Name====================== */}

        <div className={` ${styles.inputBox}`}>
          <p className="text-[10px] font-extrabold lg:text-[20px]">Bank Name</p>
          <div className="border rounded-[5px] h-[25px] flex justify-between items-center p-1 lg:h-[45px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]">
            <input
              onChange={handleInputChange}
              name="bankName"
              value={state.bankName}
              className="text-[10px] w-[100%] h-[100%] outline-none lg:text-[14px]"
              type="text"
            />
            <img
              className=" h-[13.3px] w-[13.3px] lg:w-[24px] lg:h-[24px] "
              src="./Images/dashboardImages/arrow-down2.png"
              alt="dropdown"
            />
          </div>
          {errors.bankName && (
            <div className="text-[12px] text-red-500 italic lg:text-[14px]">
              {errors.bankName}
            </div>
          )}
        </div>

        {/* =========================Account Number / IBAN==================== */}
        <div className={styles.inputBox}>
          <p className="text-[10px] font-extrabold lg:text-[20px]">
            Account Number / IBAN
          </p>
          <div className="border rounded-[5px] h-[25px] flex justify-between items-center p-1 lg:h-[45px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]">
            <input
              onChange={handleInputChange}
              name="accountNumber"
              value={state.accountNumber}
              className={`${styles.hideArrows} hide-arrows text-[10px] w-[100%] h-[100%] outline-none lg:text-[14px]`}
              type="number"
            />
            <svg
              className="h-[13.3px] w-[13.3px] lg:h-[24px] lg:w-[24px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 12 13"
              fill="none"
            >
              <path
                d="M6.0793 6.18305C6.0293 6.17805 5.9693 6.17805 5.9143 6.18305C4.7243 6.14305 3.7793 5.16805 3.7793 3.96805C3.7793 2.74305 4.7693 1.74805 5.9993 1.74805C7.2243 1.74805 8.2193 2.74305 8.2193 3.96805C8.2143 5.16805 7.2693 6.14305 6.0793 6.18305Z"
                fill="#FFf"
                stroke="#92ABFE"
                stroke-width="0.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.57938 8.02805C2.36937 8.83805 2.36937 10.158 3.57938 10.963C4.95438 11.883 7.20938 11.883 8.58438 10.963C9.79438 10.153 9.79438 8.83305 8.58438 8.02805C7.21438 7.11305 4.95938 7.11305 3.57938 8.02805Z"
                fill="#FFF"
                stroke="#92ABFE"
                stroke-width="0.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          {errors.accountNumber && (
            <div className="text-[12px] text-red-500 italic lg:text-[14px]">
              {errors.accountNumber}
            </div>
          )}
        </div>

        {/* ===================Swift Code/ Sort Code / Routine Number ============ */}
        <div className={styles.inputBox}>
          <p className="text-[10px] font-extrabold lg:text-[20px]">
            Swift Code/ Sort Code / Routine Number
          </p>
          <div className="border rounded-[5px] h-[25px] flex justify-between items-center p-1 lg:h-[45px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]">
            <input
              onChange={handleInputChange}
              name="swiftCode"
              value={state.swiftCode}
              className="text-[10px] w-[100%] h-[100%] outline-none lg:text-[14px]"
              type="text"
            />
            <svg
              className="h-[13.3px] w-[13.3px] lg:h-[24px] lg:w-[24px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 12 13"
              fill="none"
            >
              <path
                d="M8.5 10.998H3.5C2 10.998 1 10.248 1 8.49805V4.99805C1 3.24805 2 2.49805 3.5 2.49805H8.5C10 2.49805 11 3.24805 11 4.99805V8.49805C11 10.248 10 10.998 8.5 10.998Z"
                fill="#FFF"
                stroke="#92ABFE"
                stroke-width="0.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3 4.74805V8.74805"
                stroke="#92ABFE"
                stroke-width="0.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4.5 4.74805V6.74805"
                stroke="#92ABFE"
                stroke-width="0.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4.5 8.24805V8.74805"
                stroke="#92ABFE"
                stroke-width="0.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.5 4.74805V5.24805"
                stroke="#92ABFE"
                stroke-width="0.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6 4.74805V8.74805"
                stroke="#92ABFE"
                stroke-width="0.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.5 6.74805V8.74805"
                stroke="#92ABFE"
                stroke-width="0.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9 4.74805V8.74805"
                stroke="#92ABFE"
                stroke-width="0.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          {errors.swiftCode && (
            <div className="text-[12px] text-red-500 italic lg:text-[14px]">
              {errors.swiftCode}
            </div>
          )}
        </div>

        {/* ===========================Account Name============================ */}

        <div className={` ${styles.inputBox}`}>
          <p className="text-[10px] font-extrabold lg:text-[20px]">
            Account Name
          </p>
          <div className="border rounded-[5px] h-[25px] flex justify-between items-center p-1 lg:h-[45px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]">
            <input
              onChange={handleInputChange}
              name="accountName"
              value={state.accountName}
              className="text-[10px] w-[100%] h-[100%] outline-none lg:text-[14px]"
              type="text"
            />
            <svg
              className="h-[13.3px] w-[13.3px] lg:h-[24px] lg:w-[24px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 12 13"
              fill="none"
            >
              <path
                d="M6 7.00977C4.415 7.00977 3.125 5.71977 3.125 4.13477C3.125 2.54977 4.415 1.25977 6 1.25977C7.585 1.25977 8.875 2.54977 8.875 4.13477C8.875 5.71977 7.585 7.00977 6 7.00977ZM6 2.00977C4.83 2.00977 3.875 2.96477 3.875 4.13477C3.875 5.30477 4.83 6.25977 6 6.25977C7.17 6.25977 8.125 5.30477 8.125 4.13477C8.125 2.96477 7.17 2.00977 6 2.00977Z"
                fill="#92ABFE"
              />
              <path
                d="M10.2951 12.0098C10.0901 12.0098 9.92007 11.8398 9.92007 11.6348C9.92007 9.90977 8.16008 8.50977 6.00008 8.50977C3.84008 8.50977 2.08008 9.90977 2.08008 11.6348C2.08008 11.8398 1.91008 12.0098 1.70508 12.0098C1.50008 12.0098 1.33008 11.8398 1.33008 11.6348C1.33008 9.49977 3.42508 7.75977 6.00008 7.75977C8.57508 7.75977 10.6701 9.49977 10.6701 11.6348C10.6701 11.8398 10.5001 12.0098 10.2951 12.0098Z"
                fill="#92ABFE"
              />
            </svg>
          </div>
          {errors.accountName && (
            <div className="text-[12px] text-red-500 italic lg:text-[14px]">
              {errors.accountName}
            </div>
          )}
        </div>
        {/* =====================Beneficiary Address=========================== */}
        <div className={styles.inputBox}>
          <p className="text-[10px] font-extrabold lg:text-[20px]">
            Beneficiary Address
          </p>
          <div className="border rounded-[5px] h-[25px] flex justify-between items-center p-1 lg:h-[45px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]">
            <input
              onChange={handleInputChange}
              name="beneficiaryAddress"
              value={state.beneficiaryAddress}
              className="text-[10px] w-[100%] h-[100%] outline-none lg:text-[14px]"
              type="text"
            />
            <svg
              className="h-[13.3px] w-[13.3px] lg:h-[24px] lg:w-[24px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 12 13"
              fill="none"
            >
              <path
                d="M4.51 2.16715L1.815 4.26715C1.365 4.61715 1 5.36215 1 5.92715V9.63215C1 10.7922 1.945 11.7422 3.105 11.7422H8.895C10.055 11.7422 11 10.7922 11 9.63715V5.99715C11 5.39215 10.595 4.61715 10.1 4.27215L7.01 2.10715C6.31 1.61715 5.185 1.64215 4.51 2.16715Z"
                fill="#FFF"
                stroke="#92ABFE"
                stroke-width="0.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path d="M6 9.74219V8.24219V9.74219Z" fill="#FFF" />
              <path
                d="M6 9.74219V8.24219"
                stroke="#92ABFE"
                stroke-width="0.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          {errors.beneficiaryAddress && (
            <div className="text-[12px] text-red-500 italic lg:text-[14px]">
              {errors.beneficiaryAddress}
            </div>
          )}
        </div>

        {/* ===========================Beneficiary City======================= */}
        <div className={styles.inputBox}>
          <p className="text-[10px] font-extrabold lg:text-[20px]">
            Beneficiary City
          </p>
          <div className="border rounded-[5px] h-[25px] flex justify-between items-center p-1 lg:h-[45px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]">
            <input
              onChange={handleInputChange}
              name="beneficiaryCity"
              value={state.beneficiaryCity}
              className="text-[10px] w-[100%] h-[100%] outline-none lg:text-[14px]"
              type="text"
            />
            <svg
              className="h-[13.3px] w-[13.3px] lg:h-[24px] lg:w-[24px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 12 13"
              fill="none"
            >
              <path
                d="M11.4999 8.3205V9.41553C11.4999 10.6355 10.6099 11.7855 9.39992 12.1205C9.31492 12.1405 9.22493 12.1405 9.14493 12.1205C8.55493 11.9605 8.03492 11.6005 7.66992 11.1355C7.27492 10.6455 7.04492 10.0405 7.04492 9.41553V8.3205C7.04492 8.1105 7.19992 7.88048 7.38992 7.80048L8.77992 7.23047C9.09492 7.10547 9.44492 7.10547 9.75992 7.23047L10.2599 7.43549L11.1549 7.80048C11.3449 7.88048 11.4999 8.1105 11.4999 8.3205Z"
                fill="#FFF"
                stroke="#92ABFE"
                stroke-width="0.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                opacity="0.4"
                d="M10.4756 6.14041L10.2606 7.43539L9.76062 7.23037C9.44562 7.10537 9.09563 7.10537 8.78063 7.23037L7.39063 7.80038C7.20063 7.88038 7.04563 8.1104 7.04563 8.3204V9.41543C7.04563 10.0404 7.27563 10.6454 7.67063 11.1354H3.09063C2.40563 11.1354 1.76063 10.5904 1.64563 9.91543L1.01563 6.14041C0.935629 5.67541 1.17062 5.0504 1.54062 4.7554L4.83063 2.12539C5.33563 1.72039 6.15563 1.7204 6.66063 2.1304L9.95063 4.7554C10.3156 5.0504 10.5556 5.67541 10.4756 6.14041Z"
                fill="#FFF"
                stroke="#92ABFE"
                stroke-width="0.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          {errors.beneficiaryCity && (
            <div className="text-[12px] text-red-500 italic lg:text-[14px]">
              {errors.beneficiaryCity}
            </div>
          )}
        </div>

        {/* ================================State or Province======================== */}
        <div className={styles.inputBox}>
          <p className="text-[10px] font-extrabold lg:text-[20px]">
            State or Province
          </p>
          <div className="border rounded-[5px] h-[25px] flex justify-between items-center p-1 lg:h-[45px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]">
            <input
              onChange={handleInputChange}
              name="stateOrProvince"
              value={state.stateOrProvince}
              className="text-[10px] w-[100%] h-[100%] outline-none lg:text-[14px]"
              type="text"
            />
            <svg
              className="h-[13.3px] w-[13.3px] lg:h-[24px] lg:w-[24px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 12 13"
              fill="none"
            >
              <path
                d="M6.88023 9.50977H5.11523C4.56523 9.50977 4.13023 9.23977 3.88523 8.74977L3.44023 7.85477C3.33523 7.63977 3.12023 7.50977 2.88023 7.50977H0.990234C0.785234 7.50977 0.615234 7.33977 0.615234 7.13477C0.615234 6.92977 0.785234 6.75977 0.990234 6.75977H2.88523C3.41023 6.75977 3.88023 7.04977 4.11523 7.51977L4.56023 8.41477C4.67523 8.64477 4.86023 8.75977 5.12023 8.75977H6.88523C7.12523 8.75977 7.34023 8.62977 7.44523 8.41477L7.89023 7.51977C8.12523 7.04977 8.59523 6.75977 9.12023 6.75977H10.9902C11.1952 6.75977 11.3652 6.92977 11.3652 7.13477C11.3652 7.33977 11.1952 7.50977 10.9902 7.50977H9.12023C8.88023 7.50977 8.66523 7.63977 8.56024 7.85477L8.11523 8.74977C7.87523 9.21977 7.40523 9.50977 6.88023 9.50977Z"
                fill="#92ABFE"
              />
              <path
                d="M9.5 5.00977C8.465 5.00977 7.625 4.16977 7.625 3.13477C7.625 2.09977 8.465 1.25977 9.5 1.25977C10.535 1.25977 11.375 2.09977 11.375 3.13477C11.375 4.16977 10.535 5.00977 9.5 5.00977ZM9.5 2.00977C8.88 2.00977 8.375 2.51477 8.375 3.13477C8.375 3.75477 8.88 4.25977 9.5 4.25977C10.12 4.25977 10.625 3.75477 10.625 3.13477C10.625 2.51477 10.12 2.00977 9.5 2.00977Z"
                fill="#92ABFE"
              />
              <path
                d="M7.5 12.0098H4.5C1.785 12.0098 0.625 10.8498 0.625 8.13477V5.13477C0.625 2.41977 1.785 1.25977 4.5 1.25977H7C7.205 1.25977 7.375 1.42977 7.375 1.63477C7.375 1.83977 7.205 2.00977 7 2.00977H4.5C2.195 2.00977 1.375 2.82977 1.375 5.13477V8.13477C1.375 10.4398 2.195 11.2598 4.5 11.2598H7.5C9.805 11.2598 10.625 10.4398 10.625 8.13477V5.63477C10.625 5.42977 10.795 5.25977 11 5.25977C11.205 5.25977 11.375 5.42977 11.375 5.63477V8.13477C11.375 10.8498 10.215 12.0098 7.5 12.0098Z"
                fill="#92ABFE"
              />
            </svg>
          </div>
          {errors.stateOrProvince && (
            <div className="text-[12px] text-red-500 italic lg:text-[14px]">
              {errors.stateOrProvince}
            </div>
          )}
        </div>

        {/* ============================ZIP / Postcode=============================== */}
        <div className={styles.inputBox}>
          <p className="text-[10px] font-extrabold lg:text-[20px]">
            ZIP / Postcode
          </p>
          <div className="border rounded-[5px] h-[25px] flex justify-between items-center p-1 lg:h-[45px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]">
            <input
              onChange={handleInputChange}
              name="zipCode"
              value={state.zipCode}
              className={`${styles.hideArrows} text-[10px] w-[100%] h-[100%] outline-none lg:text-[14px]`}
              type="number"
            />
            <svg
              className="h-[13.3px] w-[13.3px] lg:h-[24px] lg:w-[24px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 12 13"
              fill="none"
            >
              <path
                d="M6.51478 1.63391H4.47978C4.27978 1.63391 4.08977 1.70391 3.93477 1.82391L2.83977 2.69891C2.39977 3.04891 2.39977 3.7139 2.83977 4.0639L3.93477 4.9389C4.08977 5.0639 4.28478 5.12891 4.47978 5.12891H8.60975C9.09475 5.12891 9.48475 4.73891 9.48475 4.25391V2.50391C9.48475 2.01891 9.09475 1.62891 8.60975 1.62891"
                fill="#FFF"
              />
              <path
                d="M6.51478 1.63391H4.47978C4.27978 1.63391 4.08977 1.70391 3.93477 1.82391L2.83977 2.69891C2.39977 3.04891 2.39977 3.7139 2.83977 4.0639L3.93477 4.9389C4.08977 5.0639 4.28478 5.12891 4.47978 5.12891H8.60975C9.09475 5.12891 9.48475 4.73891 9.48475 4.25391V2.50391C9.48475 2.01891 9.09475 1.62891 8.60975 1.62891"
                stroke="#92ABFE"
                stroke-width="0.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.40039 6.63477H7.5304C7.7304 6.63477 7.92041 6.70477 8.07541 6.82477L9.17041 7.69977C9.61041 8.04977 9.61041 8.71476 9.17041 9.06476L8.07541 9.93976C7.92041 10.0648 7.7254 10.1298 7.5304 10.1298H3.40039C2.91539 10.1298 2.52539 9.73976 2.52539 9.25476V7.50476C2.52539 7.02476 2.91539 6.63477 3.40039 6.63477Z"
                fill="#FFF"
                stroke="#92ABFE"
                stroke-width="0.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6 6.63477V5.13477"
                stroke="#92ABFE"
                stroke-width="0.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6 11.6348V10.1348"
                stroke="#92ABFE"
                stroke-width="0.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4.5 11.6348H7.5"
                stroke="#92ABFE"
                stroke-width="0.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          {errors.zipCode && (
            <div className="text-[12px] text-red-500 italic lg:text-[14px]">
              {errors.zipCode}
            </div>
          )}
        </div>

        {/* ==============================Acknowledgement Checks========================= */}
        <div className=" col-span-2">
          <div className=" flex flex-col  gap-[10px]">
            {" "}
            <div className="flex gap-[15px] w-full">
              <input
                className="text-[#0006]"
                type="checkbox"
                value={checkbox.checkbox1}
                name="checkbox1"
                onChange={handleCheckBox}
              />
              <p className="text-[8px] w-full font-bold text-[#00000080] lg:text-[14px]">
                {" "}
                I acknowledge that the details i provide above are correct, and
                i take the full responsibility for any inaccuracy.
              </p>
            </div>
            {errors.checkbox1 && (
              <div className="text-[12px] text-red-500 italic lg:text-[14px]">
                {errors.checkbox1}
              </div>
            )}
            <div className="flex gap-[15px] w-full">
              <input
                type="checkbox"
                value={checkbox.checkbox2}
                name="checkbox2"
                onChange={handleCheckBox}
              />
              <p className="text-[8px] w-full font-bold text-[#00000080] lg:text-[14px]">
                I have read and agreed to AremxyPlug{" "}
                <Link
                  to="/privacy-policy"
                  className="text-[#04177f] hover:underline"
                >
                  Privacy Policy{" "}
                </Link>
                and{" "}
                <Link
                  to="/terms-and-condition"
                  className="text-[#04177f] hover:underline"
                >
                  Terms & Conditions
                </Link>
              </p>
            </div>
            {errors.checkbox2 && (
              <div className="text-[12px] text-red-500 italic lg:text-[14px]">
                {errors.checkbox2}
              </div>
            )}
          </div>

          {/* ========================Add and Cancel Button================== */}

          <div className="flex ">
            <button
              onClick={handleAddAccount}
              type="submit"
              className={`${
                checkbox.checkbox2 ? "bg-[#04177f]" : "bg-[#0008]"
              } hover:cursor-pointer px-[20px] py-1 flex justify-center items-center mb-[5%] lg:mb-[2%]  text-white p-[%] rounded-[6px] mx-auto mt-[7%] text-[9px] lg:px-[5%] lg:mt-[3%] lg:w-[] lg:h-[42px] lg:text-[14px] lg:rounded-lg`}
            >
              Add Account
            </button>
            <Link
              to="/dashboard"
              type="submit"
              className="hover:cursor-pointer font-extrabold px-[35px] flex justify-center item-center mb-[5%] lg:mb-[2%]  text-[#F95252] mx-auto text-center mt-[7%] text-[12px] lg:mt-[3%] lg:w-[140px] lg:h-[42px] lg:text-[16px] lg:rounded-lg"
            >
              Cancel
            </Link>
          </div>
        </div>

        {currencyAvailable && (
          <Modal>
            <div className="bg-white shadow-lg w-[90%] rounded-[5px] flex flex-col items-center py-[4%] gap-[40px] lg:w-[40%] lg:py-[3%] lg:rounded-[7px]">
              <p className="text-[12px] text-[#04177f] font-extrabold">
                This Currency is Currently Not Available.
              </p>
              <img
                className="w-[50%] h-[50%]"
                src="/Images/addAccountImages/account-unavailable.png"
                alt=""
              />
              <p className="absolute top-[59%] right-[15%] text-[8px] lg:text-[12px] lg:right-[35%]">
                Coming Soon...
              </p>
              <div
                onClick={() => navigate("/to-my-account")}
                className={` ${
                  isDarkMode ? "border" : "bg-[#04177f] "
                } cursor-pointer text-white text-[12px] h-[35px] w-[80%] rounded-[5px] flex items-center justify-center md:mx-auto md:w-[20%] md:h-[30px] md:text-[14px] lg:my-[3%] lg:h-[40px] lg:text-[20px] lg:w-[30%] lg:mx-auto`}
              >
                Okay
              </div>
            </div>
          </Modal>
        )}

        {successful && (
          <Modal>
            <div
              className={`${styles.successful} ${
                toggleSideBar
                  ? "md:w-[45%] lg:ml-[20%] lg:w-[40%]"
                  : "lg:w-[40%]"
              } md:w-[45%] w-[90%]`}
            >
              <img
                className="m-2 w-[19.9px] h-[11.81px] lg:w-[41px] lg:h-[25px]"
                src="/Images/addAccountImages/aremxyAddLogo.png"
                alt="/"
              />
              <hr className="h-[6px] bg-[#04177f] border-none lg:h-[22px]" />
              <div className="my-[3%] flex flex-col justify-between h-[70%]">
                <div className="text-center">
                  <p className="text-[11px] font-extrabold lg:text-[16px]">
                    Successful
                  </p>
                  <p className="text-[11px] font-extrabold text-[#00AA48] lg:text-[16px]">
                    Your Account has been added successfully.
                  </p>
                </div>
                <img
                  className="w-[50px] h-[50px] mx-auto mb-[2%] lg:w-[60px] lg:h-[60px]"
                  src="./Gif/checkMarkGif.gif"
                  alt="/"
                />
                <div
                  onClick={() => navigate("/to-my-account")}
                  className={` ${
                    isDarkMode ? "border" : "bg-[#04177f] "
                  } mx-auto cursor-pointer text-white text-[12px] h-[35px] w-[80%] rounded-[5px] flex items-center justify-center md:mx-auto md:w-[20%] md:h-[30px] md:text-[14px] lg:my-[3%] lg:h-[40px] lg:text-[20px] lg:w-[163px] lg:mx-auto`}
                >
                  Done
                </div>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </>
  );
};
