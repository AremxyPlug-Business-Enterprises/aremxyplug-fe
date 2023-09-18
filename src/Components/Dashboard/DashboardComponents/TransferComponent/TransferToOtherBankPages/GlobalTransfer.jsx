import React, { useContext, useState } from "react";
import { ContextProvider } from "../../../../Context";
import styles from "../../TransferComponent/transfer.module.css";
import Joi from "joi";
import { ConfirmOtherTransaction } from "./OtherBankPopUp/OtherBankPopUp/ConfirmOtherTransaction";
import { Modal } from "../../../../Screens/Modal/Modal";
// import { useNavigate } from "react-router-dom";

export default function GlobalTransfer() {
  const {
    showList,
    setShowList,
    selected,
    setSelected,
    isDarkMode,
    toggleSideBar,
    amtToTransfer,
    setAmtToTransfer,
  } = useContext(ContextProvider);

  const [addToRecipient, SetAddToRecipient] = useState(false);
  const [saveToFavorite, setSaveTofavorite] = useState(false);

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

  const [flag, setFlag] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [country, setCountry] = useState("");
  const [errors, setErrors] = useState({});
  const [state, setState] = useState({
    accountName: "",
    accountNumber: "",
    bankName: "",
  });
  const [otherBanksConfirmation, setOtherBankConfirmation] = useState(false);
  const [currencyAvailable, setCurrencyAvailable] = useState(false);
  // const navigate = useNavigate();

  const schema = Joi.object({
    country: Joi.string().required(),
    bankName: Joi.string().required(),
    accountNumber: Joi.string()
      .pattern(new RegExp(/^\d{10,}/))
      .required()
      .messages({
        "string.pattern.base": "Account number should be 10 digits ",
      }),
    accountName: Joi.string().required(),
    amtToTransfer: Joi.string()
      .pattern(new RegExp(/\d{4,}/))
      .required()
      .messages({
        "string.pattern.base": "Amount can not be less than 1000",
      }),
  });

  const handleProceed = (e) => {
    e.preventDefault();

    const { accountNumber, accountName, bankName } = state;

    const { error } = schema.validate({
      country,
      bankName,
      accountNumber,
      accountName,
      amtToTransfer,
    });

    if (error) {
      setErrors(
        error.details.reduce((acc, curr) => {
          acc[curr.path[0]] = curr.message;
          return acc;
        }, {})
      );
    } else {
      setOtherBankConfirmation(true);
      setErrors({});
    }

    // console.log(successful);
  };

  const amountHandler = (e) => {
    setAmtToTransfer(e.target.value);
  };

  const handleCountryClick = (name, flag, id, code) => {
    setFlag(flag);
    setShowList(false);
    setCountry(name);
    setSelected(true);
    setCountryCode(code);
    setCurrencyAvailable(id !== 1);
  };

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const inputValue = type === "checkbox" ? checked : value;
    setState({
      ...state,
      [name]: inputValue,
    });
  };

  const refresh = () => window.location.reload(true);

  return (
    <div className="flex flex-col gap-[20px] lg:gap-[40px]">
      {" "}
      <div className="flex flex-col gap-[15px] md:flex-row lg:gap-[30px]">
        {/* =====================Country========================= */}
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
                  className="w-[13px] h-[13px] lg:w-[29px] lg:h-[29px]"
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

        {/* =======================Currency============================ */}
        <div className={styles.inputBox}>
          <p className="text-[10px] font-extrabold lg:text-[20px]">
            Select Currency
          </p>
          <div className="border text-[10px]  rounded-[5px] h-[25px] p-1 lg:h-[45px] lg:text-[14px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]">
            {selected ? (
              <div className="flex items-center gap-[7px]">
                {" "}
                <img
                  className="w-[13px] h-[13px] lg:w-[29px] lg:h-[29px]"
                  src={flag}
                  alt="/"
                />
                {countryCode}
              </div>
            ) : (
              ""
            )}
          </div>
          {errors.currency && (
            <div className="text-[12px] text-red-500 italic lg:text-[14px]">
              {errors.currency}
            </div>
          )}
        </div>
      </div>
      {/* ==========================Select/Add Recipient====================== */}
      <div className="flex gap-[10%] lg:gap-[3%]">
        <div className="w-full flex items-center justify-between border text-[10px]  rounded-[5px] h-[25px] p-1 lg:h-[45px] lg:text-[16px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]">
          <p>Select Recipient</p>
          <img
            className="w-[13px] h-[13px] lg:w-[29px] lg:h-[29px]"
            src="./Images/otherBanksImages/weight.png"
            alt=""
          />
        </div>
        <div className="w-full flex items-center justify-between border text-[10px]  rounded-[5px] h-[25px] p-1 lg:h-[45px] lg:text-[16px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]">
          <p>Add Recipient</p>
          <img
            className="w-[13px] h-[13px] lg:w-[29px] lg:h-[29px]"
            src="./Images/otherBanksImages/add-square.png"
            alt=""
          />
        </div>
      </div>
      <div className="bg-[#04177f] text-[#fff] text-[10px] h-[20px] flex justify-center items-center rounded-[2px] lg:w-[45%] lg:h-[38px] lg:text-[16px]">
        Real-time Bank Network Tracker
      </div>
      <div className="flex flex-col gap-[20px] md:grid md:grid-cols-2">
        {/* =====================Bank Name=================== */}

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

        {/* ======================Account Number================== */}
        <div className={styles.inputBox}>
          <p className="text-[10px] font-extrabold lg:text-[20px]">
            Account Number
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

        {/* =======================Account Name==================== */}
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

        {/* <p>{state.accountName}</p> */}

        {/* =========================Amount To Transfer==================== */}
        <div className={` ${styles.inputBox}`}>
          <p className="text-[10px] font-extrabold md:text-[16px] lg:text-[20px]">
            Amount To Transfer
          </p>
          <div className="border rounded-[5px] h-[25px] flex justify-between items-center p-1 lg:h-[45px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]">
            {" "}
            <input
              onChange={amountHandler}
              type="number"
              className="text-[10px] w-[100%] h-[100%] outline-none lg:text-[14px]"
            />
          </div>

          {errors.amtToTransfer && (
            <div className="text-[12px] text-red-500 italic lg:text-[14px]">
              {errors.amtToTransfer}
            </div>
          )}
        </div>

        {/* ===========================Available Balance===================== */}
        <div className={` ${styles.inputBox}`}>
          <p className="text-[10px] font-extrabold md:text-[16px] lg:text-[20px]">
            Available Balance
          </p>
          <div className="border rounded-[5px] h-[25px] flex justify-between items-center p-1 lg:h-[45px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]">
            <p className="text-[8px] text-[#0008] md:text-[14px] lg:text-[16px]">
              &#8358;50,000.00
            </p>
            {/* <img
                    className="w-[13px] h-[13px] md:w-[24px] md:h-[24px] lg:w-[29px] lg:h-[29px]"
                    src={flag}
                    alt="/"
                  /> */}
          </div>
        </div>

        {/* =============================Message======================= */}
        <div className="w-[100%] mx-auto mt-[15px] md:mt-0 ">
          <p className="text-[10px] font-extrabold md:text-[16px] lg:text-[20px]">
            Message
          </p>
          <textarea
            placeholder="Optional"
            className="text-[10px] outline-none w-full border-[1px] h-[80px] flex flex-col justify-between p-[1%] rounded-[4px] md:h-[100px] md:text-[14px] md:rounded-[8px] md:border-[1px] lg:border-[#0003] lg:h-[120px] lg:w-[100%]"
          ></textarea>
        </div>
      </div>


        {/* =========================Add to recipient ? ======================= */}
        <div className="flex gap-[10px]">
          <div className="flex items-center gap-[10px]">
            <div className="text-[11px] lg:text-[16px]">Add to recipient ?</div>
            <div
              onClick={() => {
                SetAddToRecipient(!addToRecipient);
                // handleButtonClick();
              }}
              className={` w-[17px] h-[8.4px] md:w-[30px] md:h-[12px] lg:w-[50px] lg:h-[22px] lg:rounded-full rounded ${
                addToRecipient ? "bg-[#58DA8F]" : "bg-[#b1b0b0]"
              }`}
            >
              <div
                className={`rounded-full w-[9.5px] h-[8.4px] md:w-[14px] md:h-[12px] lg:h-[22px] lg:w-[21px] lg:drop-shadow-md bg-[#fff] ${
                  addToRecipient ? "float-right" : "float-left"
                }`}
              ></div>
            </div>
          </div>
          <div className="flex items-center gap-[10px]">
            <div className="text-[11px] lg:text-[16px]">Save to favorities</div>
            <div
              onClick={() => {
                setSaveTofavorite(!saveToFavorite);
                // handleButtonClick();
              }}
              className={` w-[17px] h-[8.4px] md:w-[30px] md:h-[12px] lg:w-[50px] lg:h-[22px] lg:rounded-full rounded ${
                saveToFavorite ? "bg-[#58DA8F]" : "bg-[#b1b0b0]"
              }`}
            >
              <div
                className={`rounded-full w-[9.5px] h-[8.4px] md:w-[14px] md:h-[12px] lg:h-[22px] lg:w-[21px] lg:drop-shadow-md bg-[#fff] ${
                  saveToFavorite ? "float-right" : "float-left"
                }`}
              ></div>
            </div>
          </div>
        </div>

      <button
        onClick={handleProceed}
        className={`${
          amtToTransfer.length < 4 ? "bg-[#0008]" : "bg-[#04177f]"
        } my-[5%] w-full flex justify-center items-center mx-auto cursor-pointer text-[14px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[20px] lg:text-[16px] lg:h-[38px] lg:my-[4%]`}
      >
        Proceed
      </button>
      {currencyAvailable && (
        <Modal>
          <div className="bg-white shadow-lg w-[90%] rounded-[8px] h-[269px] flex flex-col items-center py-[4%] gap-[40px] md:h-[360px] lg:w-[562px] lg:h-[500px] lg:py-[3%] lg:rounded-[px]">
            <p className="text-[10px] text-[#04177f] font-extrabold md:text-[16px] lg:text-[25px]">
              This Currency is Currently Not Available.
            </p>
            <img
              className="w-[135px] h-[96px]"
              src="/Images/addAccountImages/account-unavailable.png"
              alt=""
            />
            <p className="absolute top-[58%] right-[15%] text-[8px] md:text-[12px] md:ml-[70%] lg:text-[13px] lg:right-[35%] lg:ml-[80%]">
              Coming Soon...
            </p>

            <div
              onClick={refresh}
              className={` ${
                isDarkMode ? "border" : "bg-[#04177f] "
              } cursor-pointer text-white text-[10px] h-[40px] w-[80%] rounded-[5px] flex items-center justify-center md:mx-auto md:w-[20%] md:h-[30px] md:text-[14px] lg:my-[3%] lg:h-[40px] lg:text-[20px] lg:w-[30%] lg:mx-auto`}
            >
              Okay
            </div>
          </div>
        </Modal>
      )}
      <ConfirmOtherTransaction
        otherBanksConfirmation={otherBanksConfirmation}
        setOtherBankConfirmation={setOtherBankConfirmation}
        bankname={state.bankName}
        accountname={state.accountName}
        accountnumber={state.accountNumber}
        transferamount={amtToTransfer}
      />
    </div>
  );
}
