import React, { useContext, useState } from "react";
import "./LoginForm.css";
import { Link } from "react-router-dom";
import FirstModal from "../Screens/CustomersPages/Password/FirstModal";
import { ContextProvider } from "../Context";
import { primaryColor } from "../Screens/cardIssuing/cardIssuing";
import OtpInput from "react-otp-input";

function LoginForm() {
  const { setOpenTranspin, openTranspin } = useContext(ContextProvider);

  const [otp, setOtp] = useState("");
  const [otp2, setOtp2] = useState("");
  const [passwordHidden, setPasswordHidden] = useState("password");
  const [isFocused, setIsFocused] = useState([]);
  const [showModal, setShowModal] = useState(false);
  // const [isFocused_otp, setIsFocused_otp] = useState(null);

  // const handleFocused_otp = () => {
  //   setIsFocused_otp(true);
  // };

  // const handleBlur_otp = () => {
  //   setIsFocused_otp(false);
  // };
  const handleFocus = (index) => {
    if (!isFocused.includes(index)) {
      setIsFocused([...isFocused, index]);
    }
  };

  const handleBlur = (index) => {
    if (isFocused.includes(index)) {
      setIsFocused(isFocused.filter((item) => item !== index));
    }
  };

  return (
    <div className="mx-[20px] md:mx-[unset] w-[100%] md:w-[80%] loginForm p-[25px]">
      { showModal &&  <FirstModal/>}
      <img
        src="./Images/login/arpLogo.png"
        alt="logo"
        className="w-[36.51px] h-[17.73px] lg:w-[63.73px] lg:h-[30.94px]"
      />
    <div
      className="relative overflow-hidden w-[100%] xl:w-[85%] md:mx-[unset]   loginForm p-[25px] rounded-lg md:rounded-xl xl:rounded-3xl "
      style={{
        zIndex: 950,
      }}
    >
      {/* FORM OVERLAY AND CHILD INPUT STARTS HERE */}
      {openTranspin === true && (
        <div
          className="absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center"
          style={{
            backgroundColor: "rgba(0,0,0,0.4)",
            zIndex: 999,
          }}
        >
          <div className="transPin p-4">
            <p className="lg:text-[16px] text-[9.167px] text-[#000] mb-[30px]">
              Create your transaction pin to continue operations!
            </p>
            <p className="lg:text-[16px] text-[9.167px] text-[#000] my-4 text-center">
              Input pin
            </p>
            {/* OTP INPUT STARTS HERE */}
            <div className="flex justify-center">
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={4}
                // onFocus={() => handleFocused_otp()}
                // onBlur={() => handleBlur_otp()}
                inputStyle={{
                  color: "#403f3f",
                  width: 30,
                  height: 30,
                  borderRadius: 3,
                }}
                renderInput={(props) => (
                  <input {...props} className="inputOTP mx-[3px] " />
                )}
              />
            </div>
            {/* OTP INPUT ENDS HERE */}

            <p className="lg:text-[16px] text-[9.167px] text-[#000] my-4 text-center">
              Confirm pin
            </p>

            {/* OTP INPUT STARTS HERE */}
            <div className="flex justify-center ">
              <OtpInput
                value={otp2}
                onChange={setOtp2}
                numInputs={4}
                // onFocus={() => handleFocused_otp()}
                // onBlur={() => handleBlur_otp()}
                inputStyle={{
                  color: "#403f3f",
                  width: 30,
                  height: 30,
                  borderRadius: 3,
                }}
                renderInput={(props) => (
                  <input {...props} className="inputOTP mx-[3px] " />
                )}
              />
            </div>
            {/* OTP INPUT ENDS HERE */}

            <div className="w-full flex justify-center mt-[20px] mb-[10px] lg:mb-[10px] lg:mt-[50px]">
              <div
                onClick={() => setOpenTranspin(false)}
                className=" inline-flex justify-center items-center text-[#fff]   text-center  cursor-pointer 
      text-[10px] font-bold leading-[11.31px]  px-[35px] py-[12px]  rounded-[7px] lg:px-[37px] lg:py-[15px] lg:text-[14px]
      "
                style={{
                  backgroundColor: primaryColor,
                }}
              >
                <p> Create</p>
              </div>
            </div>
            {/* <p
            className="text-[#fff] cursor-pointer"
            onClick={() => setOpenTranspin(false)}
          >
            The King is here
          </p> */}
          </div>
        </div>
      )}
      {/* FORM OVERLAY AND CHILD INPUT ENDS HERE*/}
      <Link to="/">
        <img
          src="./Images/login/arpLogo.png"
          alt="logo"
          className="w-[36.51px] h-[17.73px] lg:w-[63.73px] lg:h-[30.94px]"
        />
      </Link>

      <div className="mt-[30px]">
        {/* Email starts here 268455*/}
        <div className="px-[15%] lg:px-[20%]">
          <div className=" mb-[14px] md:mb-[18px] lg:mb-[20px]">
            <p className="text-[8.93px] md:text-[11.58px] lg:text-[16px] font-[600] w-[70%] mb-[7px] lg:mb-[10px] tracking-wider">
              Username or Email
            </p>
            <div
              className={`inputBoxShadow w-[100%] h-[22.75px] lg:h-[39px] rounded flex items-center lg:hover:border-[#b3b3b3] lg:duration-300 
            ${
              isFocused.includes(1)
                ? "border-[#2684fe] border-2"
                : "border-[#cdcdcd] border-[1px] "
            }`}
              onFocus={() => handleFocus(1)}
              onBlur={() => handleBlur(1)}
            >
              <input
                className="w-full h-full text-[8.93px] md:text-[11.58px] lg:text-[20px] px-[7.5px] md:px-[10px] rounded  text-[#403f3f] outline-none "
                type="email"
                // placeholder="Enter your first name"
              />
            </div>
          </div>
          {/* Email ends here*/}
          {/* Password starts here 268455*/}
          <div className="mb-[14px] md:mb-[18px] lg:mb-[20px]">
            <p className="text-[8.93px] md:text-[11.58px] lg:text-[16px] font-[600] w-[30%] mb-[7px] lg:mb-[10px] tracking-wider">
              Password
            </p>
            <div
              className={`relative inputBoxShadow w-[100%] h-[22.75px] lg:h-[39px]  rounded  flex items-center lg:hover:border-[#b3b3b3] lg:duration-300 
            ${
              isFocused.includes(2)
                ? "border-[#2684fe] border-2"
                : "border-[#cdcdcd] border-[1px] "
            }`}
              onFocus={() => handleFocus(2)}
              onBlur={() => handleBlur(2)}
            >
              {passwordHidden === "password" ? (
                <img
                  src="./Images/login/eyeIcon2.png"
                  alt="icon"
                  className="absolute right-2 w-[13.75px] lg:w-[24px] cursor-pointer"
                  onClick={() => setPasswordHidden("text")}
                />
              ) : (
                <img
                  src="./Images/login/eyeIcon1.png"
                  alt="icon"
                  className="absolute right-2 w-[13.75px] lg:w-[24px] cursor-pointer"
                  onClick={() => setPasswordHidden("password")}
                />
              )}
              <input
                className={`w-full h-full ${
                  passwordHidden === "password"
                    ? "text-[8.93px] md:text-[8px] lg:text-[13px]"
                    : "text-[8.93px] md:text-[11.58px] lg:text-[20px]"
                }  pl-[7.5px] md:pl-[10px] pr-[40px] md:pr-[50px] rounded  text-[#403f3f] outline-none`}
                type={passwordHidden}
                // placeholder="Enter your first name"
              />
            </div>
          </div>
          {/* Password ends here*/}
            <p className="text-[#04177F] lg:text-[14px] md:text-[8.02px] text-[8.02px] font-semibold my-4 cursor-pointer tracking-wider" onClick={() => setShowModal(!showModal)}>
              Forgot password ?
            </p>
          <div className="flex">
          <Link to="/passwordReset">
            <p className="text-[#04177F] lg:text-[14px] md:text-[8.02px] text-[8.02px] font-semibold my-2 cursor-pointer tracking-wider">
              Forget password ?
            </p>
          </Link>
          <div className="flex items-center mb-4 mt-2">
            <input type="checkbox" name="" id="" />
            <p className="ml-2 lg:text-[14px] md:text-[8.02px] text-[8.02px] text-[#575757]  tracking-wider  ">
              Remember me next time!
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center ">
          <div
            onClick={() => setOpenTranspin(true)}
            className=" inline-flex justify-center items-center text-[#fff]   text-center  cursor-pointer 
      text-[10px] font-bold leading-[11.31px]  px-[35px] py-[12px]  rounded-[7px] lg:px-[37px] lg:py-[15px] lg:text-[14px]
      "
            style={{
              backgroundColor: primaryColor,
            }}
          >
            <p> Signin</p>
          </div>
        </div>
        <p className="text-center text-[14px] font-semibold text-[#575757] my-4">
          -OR-
        </p>
        <div className="flex justify-center">
          <div
            className={`px-[10px] lg:px-[20px] py-[9px] rounded  flex items-center justify-center lg:hover:border-[#b3b3b3] lg:duration-300 border-[#cdcdcd] border-[1px] cursor-pointer `}
          >
            <img
              src="./Images/login/Google.png"
              alt="google"
              className="w-[11.46px] lg:w-[20px] "
            />
            <p className="lg:text-[14px] md:text-[8.02px] text-[8.02px]  pl-4 font-semibold tracking-wider">
              Signin with Google
            </p>
          </div>
        </div>
        <div className="flex justify-center mb-[20px] mt-[25px] lg:mb-[50px] lg:mt-[50px]">
          <p className="text-[9.17px] lg:text-[16px] font-semibold tracking-wider">
            Don’t have an account yet{" "}
          </p>
          <Link to="/signup">
            <p className="pl-2 text-[9.17px] lg:text-[16px] font-semibold  text-[#04177F] cursor-pointer tracking-wider">
              ? Signup
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
