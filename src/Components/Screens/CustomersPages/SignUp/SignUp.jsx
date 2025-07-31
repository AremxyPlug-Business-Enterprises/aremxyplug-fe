import React, { useContext, useEffect } from "react";
import ReactFlagsSelect from "chima-flags-select";
import PhoneInput from "react-phone-input-2";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import "./SignUp.css";
import { Link } from "react-router-dom";
import { ContextProvider } from "../../../Context";
import Verification from "../../../VerificationCode/Verification";
import FirstModal from "../Password/FirstModal";
import { useState } from "react";
import { Loader } from "../../../Loader/Loader";
import { Modal } from "../../Modal/Modal";
import { RemoveLocalStorage } from "../../../LocalStorage/LocalStorage";


// import { number } from "joi";

export const SignUp = () => {
  const {
    // hideNavbar,
    setHideNavbar,
    isFocused,
    showPassword,
    showPasswordTwo,
    errors,
    state,
    setState,
    handleCountryChange,
    //handlePhoneNumberChange,
    changeHandler,
    handleFocus,
    handleBlur,
    handleSubmit,
    setShowPassword,
    setShowPasswordTwo,
    checkboxChecked,
    loadSignUp,
    setVerification
  } = useContext(ContextProvider);
  const [continueConsentModal, setContinueConsentModal] = useState(false)
  const [countryCode] = useState('ng')

   const handlePhoneNumberChange = (value)=> {
    //Allowing state to hold on to the value
    setState({...state,
     phoneNumber : value
  })

}

const setNav = () => {
    setHideNavbar(true);
  };
  // console.log(hideNavbar);

  useEffect(() => {
    setNav();
  
    const ActiveSignUp = localStorage.getItem("ActiveSignUp")
    const PhoneData = localStorage.getItem("userPhone");
  if(ActiveSignUp === "true" && PhoneData ){
    setContinueConsentModal(true);
    alert("Accounts without verification are only valid for 20 minutes after signing up, kindly click on NO, if exceeded.")
  }else if(ActiveSignUp === "true" && !PhoneData){
    localStorage.removeItem("ActiveSignUp")
  }
  
    return () => {
      setHideNavbar(false);
    };
    // eslint-disable-next-line
  }, []);

  const {
    country,
    fullName,
    userName,
    email,
    phoneNumber,
    IVcode,
    checkbox,
    password,
 
    // confirmPassword,
  } = state;
  const checkInput = country?.length > 1 && email?.length > 1 && phoneNumber?.length > 1 && userName?.length > 1
  && password?.length > 1 && fullName?.length > 1 && checkbox === true;
  console.log(checkboxChecked);
  console.log(state);

  const [showPassModal, setShowPassModal] = useState(false);



const RefusalToProceed =()=> {
  localStorage.removeItem("ActiveSignUp");
  setContinueConsentModal(false);
}

const ContinueSignUp = ()=> {
  setVerification(true);
  setContinueConsentModal(false);
}


  return (
    <div className="h-[240%] pb-[70px] lg:pb-[0px] lg:h-[200%] bg-[#04177f]
      md:flex md:justify-center md:items-center  md:h-[100vh] ">
      {/* =====Hero Image==== */}
      {showPassModal && <FirstModal />}
      {<Verification/>}
      <img
        className=" w-[286px] py-[15%] mx-auto md:absolute md:h-[%] md:w-[286.46px] md:top-[26%] md:left-[1%] lg:w-[500px] lg:top-[20%] lg:left-[2%]"
        src="./Images/signupimages/signUpImg.png"
        alt="/"
      />
      {/* =====Hero Image==== */}

      {/* =====Sign up Form==== */}
      <div className="md:h-[55%] pb-[2%] bg-[#ffffff]
       ml-[3%] rounded-bl-3xl rounded-tl-3xl px-[4%] md:pb-[5%] md:w-[573px] 
       md:ml-[30%] lg:min-h-[100%]  lg:w-[1024px] 
        min-h-[1300px] lg:ml-[%] lg:px-0 lg:rounded-bl-[52px] lg:rounded-tl-[52px]">
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
          Create an account now to get started...
        </p>
        <form className="pt-[10%] pb-[10%] md:grid md:grid-cols-2 md:gap-[2%] md:mx-[8%] lg:pt-[8%] lg:px-[10%] lg:pb-[6%]">
          {/* =====Country Input start======= */}
          <div className="flex flex-col gap-[5px] md:gap-[10px] mt-[8%]  lg:mt-[2%] md:mt-[3%]">
            <p className="text-[14px] leading-[18px] font-[600] mb-[5px] lg:text-[16px] lg:leading-[24px]">
              Country
            </p>
            <div
              className={`inputBorder px-[2%] flex justify-center items-center w-[98%] h-[42px] 
                rounded-[10px] lg:rounded-[15px] lg:w-[286px] border-black lg:h-[50px]`}
            >
           
                <ReactFlagsSelect
                  selected={state.country}
                  className="w-[100%] m-[0px] h-[40px] lg:h-[50px] text-[14px]
                   leading-[18px] lg:text-[16px] lg:leading-[24px]"
                  placeholder=" "
                  searchable
                  value={country}
                  name="country"
                  onSelect={handleCountryChange}
                />
       
            </div>
            {errors.country && (
              <div className="text-[12px] text-red-500 italic lg:text-[14px]">
                {errors.country}
              </div>
            )}
          </div>
          {/* ======Country Input end========= */}

          {/* =======FullName Input start=========== */}
          <div className="flex flex-col gap-[5px] md:gap-[10px] mt-[8%]  lg:mt-[2%] md:mt-[3%]">
            <p className="text-[14px] leading-[18px] font-[600] mb-[5px] lg:text-[16px] lg:leading-[24px]">
              Full Name
            </p>

            <div
              className={`inputBorder px-[2%] flex flex-col justify-center items-center w-[98%] h-[42px] 
                rounded-[10px] lg:rounded-[15px] lg:w-[286px] border-black lg:h-[50px] ${
                isFocused.includes(1) ? "border-[#2684fe] border" : " border-[1.5px] "
              }`}
              onFocus={() => handleFocus(1)}
              onBlur={() => handleBlur(1)}
            >
              <input title="fullname"
                className="outline-none flex justify-center items-center leading-[18px] lg:leading-[24px]
              font-[400] lg:font-[500] text-[14px] h-full w-full lg:h-full lg:text-[16px]"
                type="text"
          placeholder ="Enter your full legal name"
                value={state.fullName}
                name="fullname"
                onChange={changeHandler}
              />
             
            </div>
            {errors.fullName && (
              <div className="text-[12px] text-red-500 italic lg:text-[14px] font-[400] leading-[16px] lg:leading-[18px]">
                {errors.fullName}
              </div>
            )}
          </div>
          {/* =======FullName Input end========= */}

          {/* =========UserName Input start========  */}
          <div className="flex flex-col gap-[5px] md:gap-[10px] lg:mt-[2%] md:mt-[3%] mt-[8%]">
            <p className="text-[14px] leading-[18px] font-[600] mb-[5px] lg:text-[16px] lg:leading-[24px]">
              Username
            </p>
            <div
              className={`inputBorder px-[2%] flex justify-center items-center w-[98%] h-[42px] 
                rounded-[10px] lg:rounded-[15px] lg:w-[286px] border-black lg:h-[50px] ${
                isFocused.includes(2)
                  ? "border-[#2684fe] border"
                  : " border-[1.5px] "
              }`}
              onFocus={() => handleFocus(2)}
              onBlur={() => handleBlur(2)}
            >
              <input title ="username"
                className="outline-none flex justify-center items-center leading-[18px] lg:leading-[24px]
              font-[400] lg:font-[500] text-[14px] h-full w-full lg:text-[16px]"
                type="text"
                value={state.userName}
                name="userName"
                placeholder ="John"
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
          <div className="flex flex-col gap-[5px] md:gap-[10px] lg:mt-[2%] md:mt-[3%] mt-[8%]">
            <p className="text-[14px] leading-[18px] font-[600] mb-[5px] lg:text-[16px] lg:leading-[24px]">
              Email
            </p>
            <div
              className={`inputBorder px-[2%] flex justify-center items-center w-[98%] h-[42px] 
                rounded-[10px] lg:rounded-[15px] lg:w-[286px] border-black lg:h-[50px] ${
                isFocused.includes(3)
                  ? "border-[#2684fe] border"
                  : " border-[1.5px] "
              }`}
              onFocus={() => handleFocus(3)}
              onBlur={() => handleBlur(3)}
            >
              <input
              title ="email"
                className="outline-none flex justify-center items-center leading-[18px] lg:leading-[24px]
              font-[400] lg:font-[500] text-[14px] h-full w-full  lg:text-[16px]"
                type="email"
                value={email}
                placeholder ="example@gmail.com"
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
          <div className="flex flex-col gap-[5px] md:gap-[10px] lg:mt-[2%] md:mt-[3%] mt-[8%]">
            <p className="text-[14px] leading-[18px] font-[600]
            mb-[5px] lg:text-[16px] lg:leading-[24px]">
              Phone number
            </p>
            <div
              className={`inputBorder px-[2%] flex  items-center w-[98%] h-[42px] 
                rounded-[10px] lg:rounded-[15px] lg:w-[286px] border-black lg:h-[50px] ${
                isFocused.includes(4) ? "border-[#2684fe] border" : " border-[1.5px]"
              }`}
              
              onFocus={() => handleFocus(4)}
              onBlur={() => handleBlur(4)}
            >
              <PhoneInput
              country={countryCode}
                selected={phoneNumber}
                value={state.phoneNumber ? state.phoneNumber : '234'}
                name="phoneNumber"
                placeholder="xxxxxxxxxx (10 digits)"
                onChange={(value)=>handlePhoneNumberChange(value)}
                enableSearch
                disableSearchIcon
                inputProps={{
                  maxLength : 17
                } }
                
                className="inputClass bg-black"
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
                  color: "#000",
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
          <div className="flex flex-col gap-[5px] md:gap-[10px] lg:mt-[2%] md:mt-[3%] mt-[8%]">
            <p className="text-[14px] leading-[18px] font-[600] mb-[5px] 
            lg:text-[16px] lg:leading-[24px]">
              Referral Code (optional)
            </p>
            <div
              className={`inputBorder px-[2%] flex justify-center items-center w-[98%] h-[42px] 
                rounded-[10px] lg:rounded-[15px] lg:w-[286px] border-black lg:h-[50px] ${
                isFocused.includes(5) ? "border-[#2684fe] border" : "border-[1.5px] "
              }`}
              onFocus={() => handleFocus(5)}
              onBlur={() => handleBlur(5)}
            >
              <input
                className="outline-none flex justify-center items-center leading-[18px] lg:leading-[24px]
              font-[400] lg:font-[500] text-[14px] h-full w-full lg:text-[16px]"
                type="text"
                value={IVcode}
                name="IVcode"
                onChange={changeHandler}
              />
            </div>
          </div>
          {/* ===========Invitation code end=============  */}

          {/* ========== password start============= */}

          <div className="flex flex-col gap-[5px] md:gap-[10px] lg:mt-[2%] md:mt-[3%] mt-[8%]">
            <p className="text-[14px] leading-[18px] font-[600] mb-[5px]
             lg:text-[16px] lg:leading-[24px]">
               Password
            </p>
            <div
              className={`inputBorder px-[2%] flex justify-center items-center w-[98%] h-[42px] 
                rounded-[10px] lg:rounded-[15px] lg:w-[286px] border-black lg:h-[50px] ${
                isFocused.includes(6) ? "border-[#2684fe] border" : "border-[1.5px] "
              }`}
              onFocus={() => handleFocus(6)}
              onBlur={() => handleBlur(6)}
            >
              <input
              title="password"
                className="outline-none flex justify-center items-center leading-[18px] lg:leading-[24px]
              font-[400] lg:font-[500] text-[14px] h-full w-full lg:text-[16px]"
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
          <div className="flex flex-col gap-[5px] md:gap-[10px] lg:mt-[2%] mt-[8%]">
            <p className="text-[14px] leading-[18px] font-[600] mb-[5px] 
            lg:text-[16px] lg:leading-[24px]">
              Confirm Password
            </p>
            <div
              className={`inputBorder px-[2%] flex justify-center items-center w-[98%] h-[42px] 
                rounded-[10px] lg:rounded-[15px] lg:w-[286px] border-black lg:h-[50px] ${
                isFocused.includes(7) ? "border-[#2684fe] border" : "border-[1.5px] "
              }`}
              onFocus={() => handleFocus(7)}
              onBlur={() => handleBlur(7)}
            >
              <input
              title="password"
                className="outline-none flex justify-center items-center leading-[18px] lg:leading-[24px]
              font-[400] lg:font-[500] text-[14px] h-full w-full lg:text-[16px]"
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
            className="w-[25px] h-[25px] lg:w-[30px] lg:h-[30px]"
              type="checkbox"
              value={state.checkbox}
              name="checkbox"
              onChange={changeHandler}
            />
            <p className="text-[14px] leading-[20px] font-bold text-center
             text-[#00000060] lg:text-[16px] lg:leading-[24px]">
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
              className="mt-[9%] lg:mt-[2%] text-[14px] leading-[18px] lg:text-[16px] lg:leading-[24px] font-extrabold mx-auto w-[90%] text-[#04177f]"
              onClick={() => setShowPassModal(!showPassModal)}
            >
              Forgot password ?
            </p>
          </Link>
        </div>  
        
        <button
          onClick={(e)=>{
           handleSubmit(e);
         
          
          }}
          disabled={checkInput ? false : true}
          className={`${checkInput === true ? "hover:cursor-pointer w-full py-[20px]  flex justify-center mx-auto item-center mb-[5%] lg:mb-[2%] bg-[#04177F]  text-white  rounded-[4px] text-center  mt-[7%] text-[14px] leading-[18px] lg:px-[37px] lg:mt-[3%] lg:w-[140px] lg:text-[14px] font-[500] lg:py-[15px] lg:leading-[24px] lg:rounded-lg" : 
            "hover:cursor-not-allowed w-full mx-auto py-[20px] lg:py-[15px] flex justify-center item-center mb-[7%] lg:mb-[2%] bg-gray-300  text-white  rounded-[4px]  text-center  mt-[8%] text-[14px] leading-[18px] font-[500] lg:px-[37px] lg:mt-[2%] lg:w-[140px]  lg:text-[16px] lg:leading-[24px] lg:rounded-lg"
          }`}
        >
          Sign Up
        </button>
       
      
        <div className="flex text-[#00000057] justify-center items-center">
          <hr className="w-[1%]"></hr>{" "}
          <p className="text-[8px] lg:text-[14px]">OR</p>{" "}
          <hr className="w-[1%]"></hr>
        </div>
       <div className="flex justify-center mt-[20px]"
        >
          <div
           onClick ={()=> {
            alert("The use of Google as a third party authentication OAuth isn't available for now.")
          }} 
          //  onClick={() => setOpenResetTranspin(true)}
            className={`px-[5px] w-full lg:w-auto lg:px-[20px] py-[15px] 
              rounded  flex items-center justify-center
               lg:hover:border-[#b3b3b3] lg:duration-300 border-[#cdcdcd] border-[1px] cursor-pointer `}
          >
            <img
              src="./Images/login/Google.png"
              alt="google"
              className="w-[11.46px] lg:w-[20px] "
            />
            <p  onClick ={()=> {
            alert("The use of Google as a third party authentication OAuth isn't available for now.")
          }} 
            className="lg:text-[14px] md:text-[8.02px]
             text-[12.02px] leadig-[16px]  pl-4 font-semibold tracking-wider">
              Sign up with Google
            </p>
          </div>
        </div>
        <p className="text-[14px] leading-[18px]  text-center mt-[5%] md:pb-[1%] 
        lg:mt-[2%] lg:text-[16px] lg:leading-[24px]">
          Already have an account ?{" "}
          <span className="text-[#04177f]">
            <Link to="/Login">Sign In</Link>
          </span>
        </p>
      </div>

      {loadSignUp && (
        <Modal>
          <Loader />
        </Modal>
      )}
        { continueConsentModal && (
             <Modal>
              <div className="w-full flex  justify-center items-center">
            <div className ="flex flex-col justify-center items-center py-[20px] px-[12px] gap-[20px] w-[80%] md:w-[60%] lg:w-[30%] md:h-[300px] bg-white rounded-[10px]
             lg:rounded-[20px]">
              <p className ="text-[14px] font-[400] leading-[18px]
               text-black lg:text-[16px] lg:leading-[22px] ">
                We noticed you did not complete your sign up
                process, would you still like to proceed?</p>
             
              <div className="flex gap-[20px] justify-center">
                <button onClick ={()=> {
                  ContinueSignUp()
                }}
                 className="bg-[#04177f]  cursor-pointer mt-[5%] mx-auto w-[80px] py-[8px] flex justify-center items-center text-[#ffffff] 
                  text-[10px] font-[500] lg:font-[600] rounded-md md:w-[95px] md:h-[26px]
                   md:p-[2%] lg:w-[113px] lg:h-[38px] lg:text-[13px]">
                     Yes
                </button>
                <button onClick ={()=> {
                    RefusalToProceed()
                    RemoveLocalStorage();
                }}
                 className="bg-red-500  cursor-pointer mt-[5%] mx-auto w-[80px] py-[8px] flex justify-center items-center text-[#ffffff] 
                  text-[10px] font-[500] lg:font-[600] rounded-md md:w-[95px] md:h-[26px]
                   md:p-[2%] lg:w-[113px] lg:h-[38px] lg:text-[13px]">
                  No
                </button>
              </div>
              </div>
              </div>
             </Modal>
             )
          }
    </div>
  );
};