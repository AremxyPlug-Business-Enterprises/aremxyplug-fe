import React, { useContext, useEffect } from "react";
import ReactFlagsSelect from "chima-flags-select";
import PhoneInput from "react-phone-input-2";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import "./SignUp.css";
import { Link } from "react-router-dom";
import { ContextProvider } from "../../../Context";
import { Verification } from "../../../VerificationCode/Verification";
import { Modal } from "../../Modal/Modal";
import FirstModal from "../Password/FirstModal";
import { useState } from "react";

export const SignUp = () => {
  const {
    // hideNavbar,
    setHideNavbar,
    isFocused,
    showPassword,
    showPasswordTwo,
    errors,
    verification,
    state,
    handleCountryChange,
    handlePhoneNumberChange,
    changeHandler,
    handleFocus,
    handleBlur,
    handleSubmit,
    setShowPassword,
    setShowPasswordTwo,
    checkboxChecked,
  } = useContext(ContextProvider);

  const setNav = () => {
    setHideNavbar(true);
  };
  // console.log(hideNavbar);

  useEffect(() => {
    setNav();
    return () => {
      setHideNavbar(false);
    };
    // eslint-disable-next-line
  }, []);

  const {
    country,
    // fullName,
    // userName,
    email,
    phoneNumber,
    IVcode,
    // checkboxChecked,
    // password,
    // confirmPassword,
  } = state;

  console.log(checkboxChecked);
  console.log(state);

  const [showPassModal, setShowPassModal] = useState(false);

  return (
    <div className="h-[1237px] bg-[#04177f] md: pb-[%] md:flex md:justify-center md:items-center md:pb-0 md:h-[100vh] lg:h-[170vh]">
      {/* =====Hero Image==== */}
      {showPassModal && <FirstModal />}
      <img
        className=" w-[286px] py-[15%] mx-auto md:absolute md:h-[%] md:w-[286.46px] md:top-[26%] md:left-[1%] lg:w-[500px] lg:top-[20%] lg:left-[2%]"
        src="./Images/signupimages/signUpImg.png"
        alt="/"
      />
      {/* =====Hero Image==== */}

      {/* =====Sign up Form==== */}
      <div className="md:h-[55%] pb-[10%] bg-[#ffffff] ml-[3%] rounded-bl-3xl rounded-tl-3xl px-[4%] md:pb-[5%] md:w-[573px]  md:ml-[30%] lg:h-[1024px] lg:w-[1001px]  lg:ml-[%] lg:px-0 lg:rounded-bl-[52px] lg:rounded-tl-[52px]">
        <Link to="/">
          <img
            className="w-[36px] py-[5%] lg:w-[93px] lg:h-[] lg:py-[2%] lg:pl-[3%]"
            src="./Images/signupimages/ap.png"
            alt="/"
          />
        </Link>
        <p className="text-[18px] font-extrabold text-center lg:text-[32px]">
          Welcome to <span className="text-[#04177f]">AremxyPlug!</span>
        </p>
        <p className="text-[11px] font-bold text-center text-[#00000056] lg:text-[20px]">
          Create an account Now to get started...
        </p>
        <form className="pt-[5%] pb-[10%] md:grid md:grid-cols-2 md:gap-[5%] md:mx-[8%] lg:pt-[13%] lg:px-[10%] lg:pb-[6%]">
          {/* =====Country Input start======= */}
          <div>
            <p className="text-[9px] font-semibold mb-[5px] lg:text-[16px]">
              Country
            </p>
            <div
              className={`inputBorder px-[2%] w-[98%] border h-[22px] rounded-[2.9px] lg:w-[286px] lg:h-[39px]`}
            >
              <div className="mt-[-3%] md:mt-[-1%] ">
                <ReactFlagsSelect
                  selected={state.country}
                  className="w-[100%]"
                  placeholder=" "
                  searchable
                  value={country}
                  name="country"
                  onSelect={handleCountryChange}
                />
              </div>
            </div>
            {errors.country && (
              <div className="text-[12px] text-red-500 italic lg:text-[14px]">
                {errors.country}
              </div>
            )}
          </div>
          {/* ======Country Input end========= */}

          {/* =======FullName Input start=========== */}
          <div>
            <p className="text-[9px] font-semibold py-[5px] md:pt-[0%] lg:text-[16px]">
              Full Name
            </p>

            <div
              className={`inputBorder px-[2%] flex justify-center items-center w-[98%] h-[22px] rounded-[2.9px] lg:w-[286px] lg:h-[39px] ${
                isFocused.includes(1) ? "border-[#2684fe] border" : " border "
              }`}
              onFocus={() => handleFocus(1)}
              onBlur={() => handleBlur(1)}
            >
              <input
                className="outline-none flex justify-center items-center text-[12px] h-[15px] w-full lg:h-[25px] lg:text-[16px]"
                type="text"
                value={state.fullName}
                name="fullName"
                onChange={changeHandler}
              />
            </div>
            {errors.fullName && (
              <div className="text-[12px] text-red-500 italic lg:text-[14px]">
                {errors.fullName}
              </div>
            )}
          </div>
          {/* =======FullName Input end========= */}

          {/* =========UserName Input start========  */}
          <div>
            <p className="text-[9px] font-semibold py-[5px] lg:text-[16px]">
              Username
            </p>
            <div
              className={`inputBorder px-[2%] flex justify-center items-center w-[98%] h-[22px] rounded-[2.9px] lg:w-[286px] lg:h-[39px] ${
                isFocused.includes(2)
                  ? "border-[#2684fe] border"
                  : " border-[1px] "
              }`}
              onFocus={() => handleFocus(2)}
              onBlur={() => handleBlur(2)}
            >
              <input
                className="outline-none flex justify-center items-center text-[12px] h-[15px] 
                w-full lg:h-[25px] lg:text-[16px]"
                type="text"
                value={state.userName}
                name="userName"
                onChange={changeHandler}
              />
            </div>
            {errors.userName && (
              <div className="text-[12px] text-red-500 italic lg:text-[14px]">
                {errors.userName}
              </div>
            )}
          </div>
          {/* =========UserName Input start======== */}

          {/* ==========Email Input start========== */}
          <div>
            <p className="text-[9px] font-semibold py-[5px] lg:text-[16px]">
              Email
            </p>
            <div
              className={`inputBorder px-[2%] flex justify-center items-center w-[98%] h-[22px] rounded-[2.9px] lg:w-[286px] lg:h-[39px] ${
                isFocused.includes(3)
                  ? "border-[#2684fe] border"
                  : " border-[1px] "
              }`}
              onFocus={() => handleFocus(3)}
              onBlur={() => handleBlur(3)}
            >
              <input
                className="outline-none flex justify-center items-center text-[12px] h-[15px] w-full lg:h-[25px] lg:text-[16px]"
                type="email"
                value={email}
                name="email"
                onChange={changeHandler}
              />
            </div>
            {errors.email && (
              <div className="text-[12px] text-red-500 italic lg:text-[14px]">
                {errors.email}
              </div>
            )}
          </div>
          {/* ===============Email Input end============ */}

          {/* =============Phone Number start=========== */}
          <div>
            <p className="text-[9px] font-semibold py-[5px] lg:text-[16px]">
              Phone number
            </p>
            <div
              className={`inputBorder relative px-[2%] flex justify-center items-center w-[98%] h-[22px] rounded-[2.9px] lg:w-[286px] lg:h-[39px] ${
                isFocused.includes(4) ? "border-[#2684fe] border" : " border "
              }`}
              onFocus={() => handleFocus(4)}
              onBlur={() => handleBlur(4)}
            >
              <PhoneInput
                selected={phoneNumber}
                value={state.phoneNumber}
                name="phoneNumber"
                placeholder=""
                onChange={handlePhoneNumberChange}
                enableSearch
                disableSearchIcon
                className="inputClass bg-black "
                inputStyle={{
                  fontSize: "16px",
                  color: "#403f3f",
                  border: "none",
                  height: "19px",
                  width: "100%",
                }}
                containerStyle={{
                  backgroundColor: "transparent",
                }}
                dropdownStyle={{
                  color: "#403f3f",
                  fontSize: "18px",
                }}
              />
            </div>
            {errors.phoneNumber && (
              <div className="text-[12px] text-red-500 italic lg:text-[14px]">
                {errors.phoneNumber}
              </div>
            )}
          </div>
          {/* ==============Phone Number end=========== */}

          {/* ===========Invitation code start============= */}
          <div>
            <p className="text-[9px] font-semibold py-[5px] lg:text-[16px]">
              Invitation Code (optional)
            </p>
            <div
              className={`inputBorder px-[2%] flex justify-center items-center w-[98%] h-[22px] rounded-[2.9px] lg:w-[286px] lg:h-[39px] ${
                isFocused.includes(5) ? "border-[#2684fe] border" : "border "
              }`}
              onFocus={() => handleFocus(5)}
              onBlur={() => handleBlur(5)}
            >
              <input
                className="outline-none flex justify-center items-center text-[12px] h-[15px] w-full lg:h-[25px] lg:text-[16px]"
                type="text"
                value={IVcode}
                name="IVcode"
                onChange={changeHandler}
              />
            </div>
          </div>
          {/* ===========Invitation code end=============  */}

          {/* ========== password start============= */}

          <div>
            <p className="text-[9px] font-semibold py-[5px] lg:text-[16px]">
              New Password
            </p>
            <div
              className={`inputBorder px-[2%] flex justify-center items-center w-[98%] h-[22px] rounded-[2.9px] lg:w-[286px] lg:h-[39px] ${
                isFocused.includes(6) ? "border-[#2684fe] border" : "border "
              }`}
              onFocus={() => handleFocus(6)}
              onBlur={() => handleBlur(6)}
            >
              <input
                className="outline-none text-[12px] h-[15px] w-full lg:h-[25px] lg:text-[16px]"
                type={showPassword ? "text" : "password"}
                value={state.password}
                name="password"
                onChange={changeHandler}
              />
              <div
                className="float-right"
                onClick={() => setShowPassword(!showPassword)}
              >
                {!showPassword ? (
                  <div className="text-[#00000046]">
                    <AiFillEyeInvisible />
                  </div>
                ) : (
                  <div className="text-[#04177f]">
                    <AiFillEye />
                  </div>
                )}
              </div>
            </div>
            {errors.password && (
              <div className="text-[12px] text-red-500 italic lg:text-[14px]">
                {errors.password}
              </div>
            )}
          </div>
          {/* ========== password end============= */}

          {/* ==========Confirm password start============= */}
          <div>
            <p className="text-[9px] font-semibold py-[5px] lg:text-[16px]">
              Confirm Password
            </p>
            <div
              className={`inputBorder px-[2%] flex justify-center items-center w-[98%] h-[22px] rounded-[2.9px] lg:w-[286px] lg:h-[39px] ${
                isFocused.includes(7) ? "border-[#2684fe] border" : "border "
              }`}
              onFocus={() => handleFocus(7)}
              onBlur={() => handleBlur(7)}
            >
              <input
                className="outline-none text-[12px] h-[15px] w-full lg:h-[25px] lg:text-[16px]"
                type={showPasswordTwo ? "text" : "password"}
                value={state.confirmPassword}
                name="confirmPassword"
                onChange={changeHandler}
              />
              <div
                className="float-right"
                onClick={() => setShowPasswordTwo(!showPasswordTwo)}
              >
                {!showPasswordTwo ? (
                  <div className="text-[#00000046]">
                    <AiFillEyeInvisible />
                  </div>
                ) : (
                  <div className="text-[#04177f]">
                    <AiFillEye />
                  </div>
                )}
              </div>
            </div>
            {errors.confirmPassword && (
              <div className="text-[12px] text-red-500 italic lg:text-[14px]">
                {errors.confirmPassword}
              </div>
            )}
          </div>
          {/* ==========Confirm password end============= */}
        </form>

        <div className="md:ml-[4%] lg:ml-[14%]">
          <div className="flex gap-[5px] w-[90%] mx-auto">
            <input
              type="checkbox"
              value={state.checkbox}
              name="checkbox"
              onChange={changeHandler}
            />
            <p className="text-[8px] font-bold text-center text-[#00000060] lg:text-[14px]">
              I have read and agreed to the{" "}
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
          {errors.checkbox && (
            <p className="text-red-500 italic text-[10px] font-bold mx-auto w-[90%] lg:text-[14px]">
              {errors.checkbox}
            </p>
          )}

          <Link>
            {" "}
            <p
              className="mt-[2%] text-[8px] font-extrabold mx-auto w-[90%] text-[#04177f] lg:text-[14px]"
              onClick={() => setShowPassModal(!showPassModal)}
            >
              Forgot password ?
            </p>
          </Link>
        </div>

        <button
          onClick={handleSubmit}
          // disabled={true}
          className="hover:cursor-pointer px-[35px] py-[10px] flex justify-center item-center mb-[5%] lg:mb-[2%] bg-[#0003]  text-white p-[%] rounded-[4px] mx-auto text-center mt-[7%] text-[9px] lg:px-[37px] lg:mt-[3%] lg:w-[140px] lg:h-[42px] lg:text-[14px] lg:rounded-lg"
        >
          Sign Up
        </button>
        <div className="flex text-[#00000057] justify-center items-center">
          <hr className="w-[1%]"></hr>{" "}
          <p className="text-[8px] lg:text-[14px]">OR</p>{" "}
          <hr className="w-[1%]"></hr>
        </div>
        <div
          className={`inputBorder flex justify-center items-center gap-[5px] font-semibold mb-[%] lg:mb-[%] border-[0.57px] w-[118px] h-[22px] p-[1%] rounded-sm mx-auto text-center mt-[7%] text-[9px] lg:mt-[5%] lg:w-[207px] lg:h-[40px] lg:text-[16px] lg:rounded-md`}
        >
          <FcGoogle />
          Sign Up with Google
        </div>
        <p className="text-[8px] text-center mt-[5%] md:pb-[1%] lg:mt-[3%] lg:text-[14px]">
          Already have an account ?{" "}
          <span className="text-[#04177f]">
            <Link to="/Login">Sign In</Link>
          </span>
        </p>
      </div>

      {verification && (
        <Modal>
          <Verification />
        </Modal>
      )}
    </div>
  );
};
