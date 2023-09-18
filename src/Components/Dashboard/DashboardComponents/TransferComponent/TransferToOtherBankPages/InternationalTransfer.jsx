import React, { useState } from "react";
import { CountrySelector } from "../../CountrySelect/CountrySelector";
import Joi from "joi";
import { InternationalDetail } from "./OtherBankPopUp/OtherBankPopUp/InternationalDetail";

export const InternationalTransfer = () => {
  const [transfer, setTransfer] = useState("");
  const [receive, setReceive] = useState("");
  const [errors, setErrors] = useState({});
  const [InternationalDetailPopUp, setInternationalDetailPopUp] =
    useState(false);

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
      <button
        onClick={handleProceed}
        className={`${
          (transfer.length < 4 ? "bg-[#0008]" : "bg-[#04177f]",
          receive.length < 4 ? "bg-[#0008]" : "bg-[#04177f]")
        } my-[5%] w-full flex justify-center items-center mx-auto cursor-pointer text-[14px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[20px] lg:text-[16px] lg:h-[38px] lg:my-[4%]`}
      >
        Proceed
      </button>
      <InternationalDetail
        InternationalDetailPopUp={InternationalDetailPopUp}
        setInternationalDetailPopUp={setInternationalDetailPopUp}
      />
    </div>
  );
};
