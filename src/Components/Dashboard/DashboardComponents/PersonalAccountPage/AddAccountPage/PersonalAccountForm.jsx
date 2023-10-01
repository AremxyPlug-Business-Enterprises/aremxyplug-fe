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
    const inputValue = type === "checkbox" ? checked : value;
    setState({
      ...state,
      [name]: inputValue,
    });
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
                <p className="text-[10px] font-extrabold lg:text-[14px]">
                  {" "}
                  {country}
                </p>
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
              className="text-[10px] w-[100%] h-[100%] outline-none lg:text-[14px]"
              type="number"
            />
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
              className="text-[10px] w-[100%] h-[100%] outline-none lg:text-[14px]"
              type="number"
            />
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
