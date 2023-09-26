import React, { useState, useEffect } from "react";
import { CountrySelector } from "../../CountrySelect/CountrySelector";
import Joi from "joi";
import { InternationalDetail } from "./OtherBankPopUp/InternationalPopUp/InternationalDetail";
import { useContext } from "react";
import { ContextProvider } from "../../../../Context";

export const InternationalTransfer = () => {
  const [errors, setErrors] = useState({});

  const {
    transfer,
    setTransfer,
    receive,
    setReceive,
    setInternationalDetailPopUp,
  } = useContext(ContextProvider);

  const transferHandler = (e) => {
    setTransfer(e.target.value);
  };
  const receiveHandler = (e) => {
    setReceive(e.target.value);
  };

  const schema = Joi.object({
    transfer: Joi.string()
      .pattern(new RegExp(/\d{4,}/))
      .required()
      .messages({
        "string.pattern.base": "Amount can not be less than 1000",
      }),
    receive: Joi.string()
      .pattern(new RegExp(/\d{4,}/))
      .required()
      .messages({
        "string.pattern.base": "Amount can not be less than 1000",
      }),
  });

  const handleProceed = (e) => {
    e.preventDefault();

    const { error } = schema.validate({
      transfer,
      receive,
    });

    if (error) {
      setErrors(
        error.details.reduce((acc, curr) => {
          acc[curr.path[0]] = curr.message;
          return acc;
        }, {})
      );
    } else {
      setErrors({});
      setInternationalDetailPopUp(true);
    }
  };

  const [selectedCountry, setSelectedCountry] = useState("");

  const handleCountrySelect = (country, id) => {
    setSelectedCountry(country);
  };

  const [exchangeRate, setExchangeRate] = useState(null);

  useEffect(() => {
    // Replace 'YOUR_API_KEY' with your actual API key or use a different exchange rate API.
    const apiUrl = `https://api.exchangerate-api.com/v4/latest/USD`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const nairaToDollarRate = data.rates["NGN"];
        setExchangeRate(nairaToDollarRate);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      {" "}
      <div className="bg-[#04177f] text-[#fff] text-[10px] h-[20px] flex justify-center items-center rounded-[2px] lg:text-[16px] lg:h-[38px] lg:w-[50%]">
        Real-time International Transfer Check Rate
      </div>
      <div className="font-extrabold flex text-[#7c7c7c] text-[10px] leading-[130%] items-center my-[7%] gap-[8px] md:my-[5%] md:text-[18px] lg:text-[20px]">
        <p>From</p>
        <img
          className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
          src="./Images/Dashboardimages/arrowright.png"
          alt="/"
        />
      </div>
      <div className={``}>
        <div className="border h-[25px] flex justify-between pl-[2%] lg:h-[45px] lg:border-[1px] lg:border-[#0003]">
          {" "}
          <input
            onChange={transferHandler}
            type="number"
            placeholder="Amount to Transfer"
            className="text-[10px] w-[90%] h-[100%] outline-none lg:text-[16px]"
          />
          <div className="h-[23.5px] w-[50px] flex justify-center gap-[20%] items-center bg-[#04177f] lg:w-[180px] lg:h-[44px]">
            {" "}
            <img
              className="w-[11px] h-[11px] lg:w-[29px] lg:h-[29px]"
              src="./Images/otherBanksImages/NAIJAFLAG.png"
              alt=""
            />
            <img
              className=" h-[8.3px] w-[8.3px] lg:w-[24px] lg:h-[24px]"
              src="./Images/dashboardImages/arrow-down2.png"
              alt="dropdown"
            />
          </div>
        </div>

        {errors.transfer && (
          <div className="text-[12px] text-red-500 italic lg:text-[14px]">
            {errors.transfer}
          </div>
        )}
      </div>
      <div className="border rounded-[3.3px] h-[20px] w-[50%] mx-auto my-[3%] flex justify-between items-center px-[2%] lg:h-[45px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]">
        <p className="text-[8px] text-[#0008] md:text-[14px] lg:text-[16px]">
          Available Balance(&#8358;50,000.00)
        </p>
        <img
          className="w-[13px] h-[13px] md:w-[24px] md:h-[24px] lg:w-[29px] lg:h-[29px]"
          src="./Images/otherBanksImages/NAIJAFLAG.png"
          alt="/"
        />
      </div>
      <div className="font-extrabold flex text-[#7c7c7c] text-[10px] leading-[130%] items-center my-[7%] gap-[8px] md:my-[5%] md:text-[18px] lg:text-[20px]">
        <p>To Recipient</p>
        <img
          className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
          src="./Images/Dashboardimages/arrowright.png"
          alt="/"
        />
      </div>
      <div className={``}>
        <div className="border rounded-[px] h-[25px] flex justify-between pl-[2%] lg:h-[45px] lg:border-[1px] lg:border-[#0003]">
          {" "}
          <input
            onChange={receiveHandler}
            type="number"
            placeholder="Recipient will Receive"
            className="text-[10px] w-[90%] h-[100%] outline-none lg:text-[16px]"
          />
          <CountrySelector
            onSelect={handleCountrySelect}
            selectedCountry={selectedCountry}
          />
        </div>

        {errors.receive && (
          <div className="text-[12px] text-red-500 italic lg:text-[14px]">
            {errors.receive}
          </div>
        )}
      </div>
      <div className="my-[5%] flex text-[6px] gap-[6%] text-[#7C7C7C] lg:text-[16px] lg:justify-between">
        <div className="flex gap-[2px] items-center lg:gap-[6px]">
          <img
            className="w-[8px] h-[8px] lg:w-[24px] lg:h-[24px]"
            src="./Images/transferImages/ticket.png"
            alt="conversion"
          />
          {exchangeRate !== null ? (
            <p>1 NGN ~ {exchangeRate} USD</p>
          ) : (
            <p>Loading exchange rate...</p>
          )}
        </div>
        <div className="flex gap-[2px] items-center lg:gap-[6px]">
          <img
            className="w-[8px] h-[8px] lg:w-[24px] lg:h-[24px]"
            src="./Images/transferImages/convert-card.png"
            alt="conversion"
          />
          <p>Transaction Fee - &#8358;50.00</p>
        </div>
        <div className="flex gap-[2px] items-center lg:gap-[6px]">
          <img
            className="w-[8px] h-[8px] lg:w-[24px] lg:h-[24px]"
            src="./Images/transferImages/clock.png"
            alt="conversion"
          />
          <p>Completion Time - 5-15 minutes</p>
        </div>
      </div>
      <button
        onClick={handleProceed}
        className={`${
          (transfer.length < 4 ? "bg-[#0008]" : "bg-[#04177f]",
          receive.length < 4 ? "bg-[#0008]" : "bg-[#04177f]")
        } mt-[15%] w-full flex justify-center items-center mx-auto cursor-pointer text-[14px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[20px] lg:text-[16px] lg:h-[38px] lg:mt-[10%]`}
      >
        Proceed
      </button>
      <InternationalDetail />
    </div>
  );
};
