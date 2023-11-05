import React, { useState } from "react";
import { DashBoardLayout } from "../../Layout/DashBoardLayout";
import { Link } from "react-router-dom";
import cloud from "../PointRedeem/images/cloud storage convert.svg";
import icon from "../PointRedeem/images/receipt-add.svg";
import arrowdown from "../PointRedeem/images/arrow-down.svg";
import icon1 from "../PointRedeem/images/Group.svg";
import icon2 from "../PointRedeem/images/convert-card.svg";
import icon3 from "../PointRedeem/images/clock.svg";
import icon5 from "../PointRedeem/images/main-component.png";
import flag from "../PointRedeem/images/Country Flags.svg";
import { Modal } from "../../../Screens/Modal/Modal";
import { useContext } from "react";
import { ContextProvider } from "../../../Context";
import styles from "../TransferComponent/transfer.module.css";
import icon4 from "../PointRedeem/images/Group 13102.png";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import OtpInput from "react-otp-input";
import Joi from "joi";

const PointRedeem = () => {
  const { toggleSideBar, transferFee, toggleVisibility, isVisible } =
    useContext(ContextProvider);

  const { inputValue,
           setInputValue, 
           outputValue, 
           setOutputValue, 
           realinputValue,
           realoutputValue,
           setRealInputValue,
           setRealOutputValue,
   } = useContext(ContextProvider);
  
const [text, setText] =useState(false);
  const handleInputChange = (event) => {
    const newValue = event.target.value;

    setInputValue(newValue);
    setOutputValue(newValue);
    setText(true);
  };

  const handleRealInputChange = (event) => {
    const newValue = event.target.value;

    setRealInputValue(newValue);
    setRealOutputValue(newValue);
    setText(true);
  };
  const pointsEarned = "+2.00";

  const [InputPinPopUp, setInputPinPopUp] = useState(false);
  const [inputPin, setInputPin] = useState("");

  const handleSwitch = () => {
    setInputPinPopUp(true);
    setProceed(false);
  };

  const handle = () => {
    setInputPinPopUp(false);
    setProceed(true);
  };
  const [proceed, setProceed] = useState(false);

  // const handleProceed = () => {

  //     setProceed(true);

  // };
  const handlerealClear = () =>{
    setRealInputValue('');
    setRealOutputValue('');
    setText(true);
  }

  const schema = Joi.object({
    inputValue: Joi.string()
      .pattern(new RegExp(/\d{3,}/))
      .required()
      .messages({
        "string.pattern.base": "Minimum Point Redeem is 100 and Above",
      }),
  });
  const [errors, setErrors] = useState({});

  const handleProceed = (e) => {
    e.preventDefault();

    const { error } = schema.validate({
      inputValue,
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
      setProceed(true);
      
    }
  };

  const [successPopup, setSuccessPopup] = useState(false);

  const handleSuccess = () => {
    setSuccessPopup(true);
    setInputPinPopUp(false);
    setProceed(false);
  };

  const [realPop, setRealPop] = useState(false);

  const handleRealPop = () => {
    setRealPop(true);
    setSuccessPopup(false);
    setInputPinPopUp(false);
    setProceed(false);
  };

  const { isDarkMode } = useContext(ContextProvider);
  return (
    <DashBoardLayout>
      <div
        className={` ${
          isDarkMode
            ? "bg-[#000] text-[#fff] border-[#fff]"
            : "bg-[#ffffff] text-[#000] "
        }  flex flex-col w-full`}
      >
        {/* top part after nav bar */}
        <div className="flex flex-row w-full pt-[20px]  h-[90px] md:h-[112.29px] lg:h-[196px] lg:px-[50px]  px-[16px] rounded-lg md:rounded-[11.5px] lg:rounded-[20px] justify-between  py-2 bg-gradient-to-r from-[#92ABFE] to-[#FFF741]">
          <div className="flex flex-col gap-2  ">
            <div className="text-[8px] font-[600]  md:text-[13.75px] md:leading-[20.63px] lg:pt-[25px] lg:text-[24px] lg:leading-[36px] text-[#000000] leading-[12px]">
              REDEEM YOUR EARNED POINTS WITH <br /> AREMXYPLUG.
            </div>
            <div className="text-[6.67px] font-[400] md:text-[11.46px] md:leading-[14.9px] lg:text-[20px] lg:leading-[26px] text-[#000000] leading-[8.67px]">
              Redeem all your earned points to real money, withdrawn to <br />
              your bank account instantly without any hassle, free and enjoy!
            </div>
          </div>
          <div>
            <img
              className="w-[88.38px] md:w-[151.9px] md:h-[85.9px] lg:w-[265px] lg:h-[150px]"
              src={cloud}
              alt=""
            />{" "}
          </div>
        </div>

        {/* text lines after top part */}
        <div className="text-[10px] font-[500] mt-[30px] md:mt-[30px] lg:mt-[50px] md:text-[11.46px] md:leading-[14.9px] lg:text-[20px] lg:leading-[26px] text-[#7C7C7C]">
          How much points would you like to redeem to real money?
        </div>
        <div
          onClick={handleRealPop}
          className="font-[500] text-[10px] py-1 mt-[30px] md:mt-[30px] lg:mt-[50px] text-center px-4 md:text-[9.17px] lg:text-[16px] leading-[20.8px] lg:px-6 lg:w-fit  md:flex md:flex-row md:w-fit md:py-1 lg:py-3 rounded-sm md:rounded-sm lg:rounded-md md:leading-[11.5px] bg-primary text-white"
        >
          Real-time Points Redeem Tracker
        </div>

        {/* Section with input boxes */}
        <div className="mt-[20px] md:mt-[30px] lg:mt-[50px] flex flex-row ">
          <div className="border-[1px] w-[85%] md:w-[92%] h-[30px] md:h-[40px] lg:h-[60px] px-2 py-0 md:pt-1 lg:pt-4 border-slate-200">
            <input
              type="number"
              value={inputValue}
              onChange={handleInputChange}
              className="w-[100%] outline-none text-[10px] lg:text-[16px] leading-[20.8px  font-[600]  text-[#000]"
              placeholder="Amount to Redeem"
            />{" "}
          </div>
          <div className="h-[30px] md:h-[40px] lg:h-[60px] w-[15%] md:w-[8%] gap-2 lg:gap-4 flex flex-row px-3 py-2 bg-primary items-center   ">
            <div>
              {" "}
              <img
                src={icon}
                className="md:w-[13.75px] md:h-[13.75px] lg:w-[24px] lg:h-[24px]"
                alt=""
              />{" "}
            </div>
            <div>
              {" "}
              <img
                src={arrowdown}
                className="md:w-[13.75px] md:h-[13.75px] lg:w-[24px] lg:h-[24px] "
                alt=""
              />{" "}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-[8px] md:mt-[8px] lg:mt-[20px] text-[#7C7C7C] lg:text-[16px] leading-[20.8px] gap-2 lg:gap-4 font-[500] text-[7px] md:text-[9.2px] ">
          <div className="border-[1px] border-slate-200 px-1 py-0 rounded-sm">
            Minimum 100 PTS
          </div>
          <div className="border-[1px] border-slate-200 pl-1 pr-3 py-0 rounded-sm">
            Available Points Balance (50,000.00)
          </div>
        </div>
        <div className="mt-[7px] flex flex-row lg:mt-[20px]">
          <div className="border-[1px] w-[85%] md:w-[92%]  text-[10px] lg:text-[16px] h-[30px] md:h-[40px] font-[600] text-[#7C7C7C] lg:h-[50px] px-2 py-0 pt-2 md:pt-3 lg:pt-4 border-slate-200">
            {/* <input
              type="number"
              readOnly
              value={outputValue}
              className=" w-[100%] outline-none text-[10px] lg:text-[16px] leading-[20.8px] font-[600] text-[#000]"
              placeholder="Amount to Receive"
            />{" "} */}
            {!text ? <p>Amount to Receive</p> : <div>&#8358;{outputValue}</div>}
          </div>
          <div className="h-[30px] md:h-[40px] lg:h-[50px] w-[15%] md:w-[8%] gap-2 lg:gap-4 flex flex-row px-3 py-2 bg-primary items-center   ">
            <div>
              {" "}
              <img
                src={flag}
                className="md:w-[13.75px] md:h-[13.75px] lg:w-[24px] lg:h-[24px]"
                alt="flag"
              />{" "}
            </div>
            <div>
              {" "}
              <img
                src={arrowdown}
                className="md:w-[13.75px] md:h-[13.75px] lg:w-[24px] lg:h-[24px]"
                alt="arrow"
              />{" "}
            </div>
          </div>
        </div>

        {/* Section after input boxes */}
        <div className="flex flex-row mt-[20px]  justify-between text-[#7C7C7C] font-[600] md:text-[9.17px] text-[8px] lg:text-[16px]">
          <div className="flex flex-row items-center gap-1">
            <div>
              {" "}
              <img src={icon1} className="lg:w-[20px] md:w-[11px] " alt="" />
            </div>
            <div>1 PTS ~ 1 NGN</div>
          </div>
          <div className="flex flex-row items-center gap-1">
            <div>
              {" "}
              <img
                src={icon2}
                className="lg:w-[20px] md:w-[11px]  "
                alt=""
              />{" "}
            </div>
            <div>Transaction Fee - ₦0.00 </div>
          </div>
          <div className="flex flex-row items-center gap-1">
            <div>
              {" "}
              <img
                src={icon3}
                className="lg:w-[20px] md:w-[11px]  "
                alt=""
              />{" "}
            </div>
            <div>Completion Time - Instantly.</div>
          </div>
        </div>
        {errors.inputValue && (
          <div className="text-[12px] text-red-500 italic lg:text-[14px]">
            {errors.inputValue}
          </div>
        )}
        <div className="flex flex-col justify-center md:items-center">
          <div
            onClick={handleProceed}
            className={` ${
              (inputValue.length < 3 ? "bg-[#0008]" : "bg-[#04177f]",
              outputValue.length < 3 ? "bg-[#0008]" : "bg-[#04177f]")
            } text-[12px] mt-[50px] md:mt-[40px] md:w-fit lg:px-12 lg:text-[16px] lg:px md:py-1 md:rounded-md md:px-6   py-3 rounded-md font-[600] text-center text-white`}
          >
            Proceed
          </div>
        </div>

        <div className="flex flex-row items-center justify-center md:mt-[750px] mt-[190px] mb-[60px] lg:mt-[980px] gap-2">
          <div className="text-[8px] lg:text-[12px] font-[600] text-black">
            You need help?
          </div>
          <Link to="/ContactUs">
            <div className="bg-primary text-white lg:text-[8px] text-[7px] px-2 py-1 leading-[10.5px] rounded-lg text-center">
              Contact us
            </div>
          </Link>
        </div>
      </div>
      {/* real time tracker pop-up */}
      {realPop && (
        <Modal>
          <div
            className={`${styles.redeemrate} ${
              toggleSideBar
                ? " lg:ml-[20%] lg:w-[40%] "
                : "lg:w-[562px] md:w-[500px]"
            } w-[90%] overflow-auto flex flex-col gap-0`}
          >
            <img
              onClick={() => {setRealPop(false);
              handlerealClear(); }
              
               } className="absolute right-6 md:right-[23%] lg:right-[33%] w-[18px] h-[18px] my-[1%] md:w-[30px] md:h-[30px] lg:w-[25px] lg:h-[25px]"
              src="/Images/transferImages/close-circle.png"
              alt=""
            />
            <hr className="h-[6px] bg-[#04177f] border-none mt-[8%] md:mt-[8%] md:h-[10px] lg:h-[10px] lg:mt-[8%]" />
            <div className="flex flex-col text-center items-center justify-center pt-[30px] md:pt-[30px] lg:pt-[1px]">
              <div className="font-[500] flex items-center justify-center w-[100%] text-center text-[10px] py-1 mt-[30px] md:mt-[30px] lg:mt-[50px]   md:text-[9.17px] lg:text-[16px] leading-[20.8px] lg:px-6 lg:w-fit  md:flex md:flex-row md:w-fit md:py-1 md:px-4 lg:py-3 rounded-sm md:rounded-sm lg:rounded-md md:leading-[11.5px] bg-primary text-white">
                Real-time Points Redeem Tracker
              </div>
              <div></div>
            </div>
            <div className="flex flex-col px-3  md:px-6 ">
              <div className=" pt-[30px] md:pt-[70px]">
                <div className="font-bold flex text-[#000] text-[10px] leading-[130%] items-center  gap-[8px]  md:text-[12px] lg:text-[15px]">
                  <p>Amount</p>
                  <img
                    className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                    src="./Images/Dashboardimages/arrowright.png"
                    alt="/"
                  />
                </div>
                <div className="mt-[20px] md:mt-[30px] lg:mt-[10px] flex flex-row ">
                  <div className="border-[1px] w-[85%] md:w-[85%] h-[30px] md:h-[40px] lg:h-[50px] px-2 py-0 md:pt-1 lg:pt-4 border-slate-200">
                    <input
                      type="number"
                      value={realinputValue}
                      onChange={handleRealInputChange}
                      className="w-[100%] outline-none text-[10px] lg:text-[16px] leading-[20.8px  font-[600]  text-[#000]"
                      placeholder="Amount to Redeem"
                    />{" "}
                  </div>
                  <div className="h-[30px] md:h-[40px] lg:h-[50px] w-[15%] md:w-[15%] gap-2 lg:gap-4 flex flex-row px-3 py-2 bg-primary items-center   ">
                    <div>
                      {" "}
                      <img
                        src={icon}
                        className="w-[20px] h-[11px] md:w-[15px] md:h-[15px] lg:w-[24px] lg:h-[24px]"
                        alt=""
                      />{" "}
                    </div>
                    <div>
                      {" "}
                      <img
                        src={arrowdown}
                        className=" h-[9px] w-[9px] md:w-[15px] md:h-[15px] lg:w-[24px] lg:h-[24px] "
                        alt=""
                      />{" "}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center mt-[20px] md:mt-[8px] lg:mt-[20px] text-[#7C7C7C] lg:text-[16px] leading-[20.8px] gap-2 lg:gap-4 font-[500] text-[10px] md:text-[9.2px] ">
                  <div className="flex flex-row items-center border-[1px] py-0 px-8 md:py-2 md:px-2 rounded-md md:rounded-xl border-[#29B8FC] text-[#29B8FC] gap-1">
                    <div>
                      {" "}
                      <img
                        src={icon5}
                        className="lg:w-[20px] md:w-[11px] "
                        alt=""
                      />
                    </div>
                    <div>1 PTS ~ 1 NGN</div>
                  </div>
                </div>
                <div className="font-bold flex mt-8 text-[#000] text-[10px] leading-[130%] items-center  gap-[8px]  md:text-[12px] lg:text-[15px]">
                  <p>To</p>
                  <img
                    className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                    src="./Images/Dashboardimages/arrowright.png"
                    alt="/"
                  />
                </div>
                <div className="mt-[7px] flex flex-row lg:mt-[10px]">
                  <div className="border-[1px] w-[85%] md:w-[85%]  text-[10px] lg:text-[16px] h-[30px] md:h-[40px] font-[600] text-[#7C7C7C] lg:h-[50px] px-2 py-0 pt-2 md:pt-3 lg:pt-4 border-slate-200">
                    {/* <input
                      type="number"
                      readOnly
                      value={outputValue}
                      className=" w-[100%] outline-none text-[10px] lg:text-[16px] leading-[20.8px] font-[600] text-[#000]"
                      placeholder="Amount to Receive"
                    />{" "} */}
                    {!text ? <p>Receipient will Receive</p> : <div>&#8358;{realoutputValue}</div>}
                  </div>
                  <div className="h-[30px] md:h-[40px] lg:h-[50px] w-[15%] md:w-[15%] gap-2 lg:gap-4 flex flex-row px-3 py-2 bg-primary items-center   ">
                    <div>
                      {" "}
                      <img
                        src={flag}
                        className="w-[20px] h-[11px] md:w-[15px] md:h-[15px] lg:w-[24px] lg:h-[24px]"
                        alt="flag"
                      />{" "}
                    </div>
                    <div>
                      {" "}
                      <img
                        src={arrowdown}
                        className=" h-[9px] w-[9px]  md:w-[15px] md:h-[15px] lg:w-[24px] lg:h-[24px]"
                        alt="arrow"
                      />{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <button
                  onClick={() => {setRealPop(false); handlerealClear();}}
                  className={`bg-[#04177f] my-[5%] w-[88%] flex justify-center mt-14 items-center mx-auto cursor-pointer text-[14px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[16px] lg:text-[14px] lg:w-[163px] lg:h-[38px] lg:mt-[30px]`}
                >
                  Okay
                </button>
              </div>
            </div>
          </div>
        </Modal>
      )}

      {/* Confirmation Transaction Popup */}
      {proceed && (
        <Modal>
          <div
            className={`${styles.transferConfirmation} ${
              toggleSideBar ? " lg:ml-[20%] lg:w-[40%]" : "lg:w-[562px]"
            } w-[90%] overflow-auto`}
          >
            <img
              onClick={() => setProceed(false)}
              className="absolute right-2 w-[18px] h-[18px] my-[3%] md:w-[35px] md:h-[35px] lg:w-[25px] lg:h-[25px]"
              src="/Images/transferImages/close-circle.png"
              alt=""
            />
            <hr className="h-[6px] bg-[#04177f] border-none mt-[8%] md:mt-[6%] md:h-[10px]" />
            <h2 className="text-[12px] my-[5%] text-center md:my-[3%] md:text-[15px] lg:my-[2%] lg:text-[16px]">
              Confirm Transaction
            </h2>
            <p className="text-[10px] text-[#000] pt-[20px] text-center mb-2 md:text-[12px] lg:text-[14px]">
              You are about to redeem{" "}
              <span className="text-[#000] font-extrabold text-[10px] md:text-[16px] lg:text-[12px]">
                {inputValue}.00{" "}
              </span>{" "}
              Points to <br></br>
              <span className="text-[#000] font-extrabold text-[10px] md:text-[16px] lg:text-[12px]">
                &#8358;{outputValue}{" "}
              </span>
              from your PTS balance to{" "}
            </p>

            <div className="flex flex-col gap-3 pt-[10px]">
              <div className="flex text-[10px] md:text-[14px] pt-[10px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                <p className="text-[#0008]">Wallet Type</p>
                <span>Nigeria NGN Wallet</span>
              </div>
              <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                <p className="text-[#0008]">Amount To Redeem</p>
                <span>{outputValue} PTS</span>
              </div>
              <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                <p className="text-[#0008]">Account To Receive</p>
                <span>&#8358;{inputValue} </span>
              </div>

              <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                <p className="text-[#0008]">Redeem Rate</p>
                <span>1 PTS - 1 NGN</span>
              </div>

              <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                <p className="text-[#0008]">Transfaction fee</p>
                <span>&#8358;{transferFee}.00</span>
              </div>
              <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                <p className="text-[#0008]">Completion Time</p>
                <span>Instantly</span>
              </div>
              <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                <p className="text-[#0008]">Points Earned</p>
                <span className="text-[#00AA48]">{pointsEarned}</span>
              </div>
            </div>

            <div className="bg-[#0001] h-[45px] my-5 flex justify-between items-center px-[4%]">
              <div className="flex gap-2 items-center">
                <div className="bg-white rounded-full h-[27px] w-[27px] flex justify-center items-center">
                  <img className="w-[16px] h-[16px]" src={icon4} alt="/" />
                </div>
                <p className="text-[10px] md:text-[14px]  lg:text-[16px]">
                  Available Balance{" "}
                  <span className="text-[#0003]">(&#8358;50,000.00)</span>
                </p>
              </div>
              <img
                className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                src="./Images/Dashboardimages/arrowright.png"
                alt="/"
              />
            </div>
            <button
              onClick={handleSwitch}
              className={`bg-[#04177f] my-[5%] w-[88%] flex justify-center items-center mx-auto cursor-pointer text-[14px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[16px] lg:text-[14px] lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
            >
              Confirmed
            </button>
          </div>
        </Modal>
      )}

      {/* Input pin pop up */}
      {InputPinPopUp && (
        <Modal>
          <div
            className={`${styles.inputPin} ${
              toggleSideBar ? "md:w-[45%] lg:w-[40%] lg:ml-[20%]" : "lg:w-[40%]"
            } md:w-[55%] w-[90%]`}
          >
            <img
              onClick={handle}
              className="absolute right-2 w-[18px] h-[18px] my-[1%] md:w-[35px] md:h-[35px] lg:w-[25px] lg:h-[25px]"
              src="/Images/transferImages/close-circle.png"
              alt=""
            />
            <hr className="h-[6px] bg-[#04177f] border-none mt-[8%] md:mt-[6%] md:h-[10px]" />
            <p className="text-[9px] md:text-[16px] font-extrabold text-center my-[10%] lg:my-[%]">
              Input PIN to complete transaction
            </p>
            <div className="flex flex-col gap-[10px] justify-center items-center font-extrabold mb-[8%]">
              <div className=" flex justify-center items-center ml-[5%] gap-[10px] md:ml-[5%] md:gap-[30px]">
                {" "}
                {isVisible ? (
                  <OtpInput
                    value={inputPin}
                    inputType="tel"
                    onChange={setInputPin}
                    numInputs={4}
                    shouldAutoFocus={true}
                    inputStyle={{
                      color: "#403f3f",
                      width: 30,
                      height: 30,
                      borderRadius: 3,
                    }}
                    renderInput={(props) => (
                      <input {...props} className="inputOTP mx-[3px]" />
                    )}
                  />
                ) : (
                  <div className="text-[24px] md:text-[24px] mt-1">
                    * * * *{" "}
                  </div>
                )}
                <div
                  className="text-[#0003] text-xl md:text-3xl"
                  onClick={toggleVisibility}
                >
                  {isVisible ? <AiFillEye /> : <AiFillEyeInvisible />}
                </div>
              </div>
              <p className="text-[8px] md:text-[12px] text-[#04177f]">
                Forgot Pin ?
              </p>
            </div>
            <button
              disabled={inputPin.length !== 4 ? true : false}
              onClick={handleSuccess}
              className={`${
                inputPin.length !== 4 ? "bg-[#0008]" : "bg-[#04177f]"
              } my-[5%] w-[225px] flex justify-center items-center mx-auto cursor-pointer text-[10px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[16px] lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
            >
              Redeem
            </button>
          </div>
        </Modal>
      )}

      {/* Redeem Successful Popup */}
      {successPopup && (
        <Modal>
          <div
            className={`${styles.successfulTwo} ${
              toggleSideBar ? "md:w-[45%] lg:ml-[20%] lg:w-[40%]" : "lg:w-[40%]"
            } md:w-[45%] w-[90%] overflow-auto`}
          >
            <div className="flex justify-between items-center mx-[3%] my-[2%] lg:my-[1%]">
              <img
                onClick={() => setSuccessPopup(false)}
                className=" w-[18px]   md:w-[35px] md:h-[35px] lg:w-[35px] lg:h-[25px]"
                src="/Images/login/arpLogo.png"
                alt=""
              />

              <img
                onClick={() => setSuccessPopup(false)}
                className=" w-[18px] h-[18px] md:w-[35px] md:h-[35px] lg:w-[29px] lg:h-[29px]"
                src="/Images/transferImages/close-circle.png"
                alt=""
              />
            </div>
            <hr className="h-[6px] bg-[#04177f] border-none md:h-[10px]" />
            <h2 className="text-[12px] my-[4%] text-center md:text-[20px] md:my-[3%] lg:text-[14px] lg:my-[2%]">
              Redeem Successful
            </h2>
            <img
              className="w-[50px] h-[50px] mx-auto mb-[2%] lg:w-[60px] lg:h-[60px]"
              src="./Gif/checkMarkGif.gif"
              alt="/"
            />
            <p className="text-[8px] text-[#0008] text-center mb-2 md:text-[14px] lg:text-[12px]">
              You have successfully redeemed{" "}
              <span className="text-[#000] font-extrabold text-[10px] md:text-[16px] lg:text-[14px]">
                {inputValue}.00
              </span>{" "}
              Points to <br></br>
              <span className="text-[#000] font-extrabold text-[10px] md:text-[16px] lg:text-[14px]">
                &#8358;{outputValue}{" "}
              </span>
              from your PTS balance to{" "}
            </p>

            <div className="flex flex-col gap-2 lg:gap-4">
              <div className="flex text-[10px] md:text-[14px] pt-[10px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                <p className="text-[#0008]">Wallet Type</p>
                <span>Nigeria NGN Wallet</span>
              </div>
              <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                <p className="text-[#0008]">Amount To Redeem</p>
                <span>{outputValue} PTS</span>
              </div>
              <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                <p className="text-[#0008]">Account To Receive</p>
                <span>&#8358;{inputValue}</span>
              </div>

              <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                <p className="text-[#0008]">Redeem Rate</p>
                <span>1 PTS - 1 NGN</span>
              </div>

              <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                <p className="text-[#0008]">Transfaction fee</p>
                <span>&#8358;{transferFee}.00</span>
              </div>
              <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[14px]">
                <p className="text-[#0008]">Order Number</p>
                <span>122555556464564</span>
              </div>
            </div>

            <div className="bg-[#F2FAFF] mx-10 h-[45px] my-5 flex justify-between items-center px-[4%] md:h-[65px] lg:h-[75px]">
              <p className="text-[6px] text-center mx-auto w-[171px] md:text-[14px] md:w-[80%] lg:text-[14px]">
                The Redeemed points has been sent successfully. Please contact
                the recipient bank with the Session ID if payment not received
                within 5-15 minutes.
              </p>
            </div>
            <div className="flex w-[70%] mx-auto items-center gap-[5%] md:gap-[20px] justify-center md:w-[20%] lg:my-[5%]">
              <button
                onClick={() => {
                  setSuccessPopup(false);
                }}
                className={`bg-[#04177f] w-[111px] flex justify-center items-center mx-auto cursor-pointer text-[12px] font-extrabold h-[40px] text-white rounded-[6px] md:px-[50px] md:w-[70%] md:rounded-[8px] md:text-[16px] lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
              >
                Done
              </button>
              <Link to="/redeem-receipt">
                <button
                  onClick={() => {
                    setSuccessPopup(false);
                  }}
                  className={`border-[1px] w-[111px] border-[#04177f] flex justify-center items-center mx-auto cursor-pointer text-[12px] font-extrabold h-[40px] rounded-[6px] md:w-[80px] md:rounded-[8px] md:text-[16px] lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
                >
                  Receipt
                </button>
              </Link>
            </div>
          </div>
        </Modal>
      )}
    </DashBoardLayout>
  );
};

export default PointRedeem;
