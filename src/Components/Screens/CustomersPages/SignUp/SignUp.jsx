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
import { useParams } from "react-router-dom";
export const SignUp = () => {
  //params
 const {refName} = useParams()
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
    errorSpecialCharacterUsername,
    setErrorSpecialCharacterUsername,
    loadSignUp,
  } = useContext(ContextProvider);
  
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
 

  useEffect(() => {
    setNav();
 if(localStorage.getItem("PasswordResetActive")){
      localStorage.removeItem("PasswordResetActive")
  }
//Every time they leave the page with changes saved the, The check Box to agree
//That they have read the terms and condition, still holds true,
//There are probabilities and possibilities that the user could change information
//So from our code base we need to have enough proof to back that irrespective,
// of the flow mixup, we make on every new request to signup
//They have clicked the checkbox, not exclusing cases of the multiple users
// on a single computer...
  setState((value)=> ({...value, checkbox : false}))
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
  && password?.length > 1 && fullName?.length > 1 && checkbox === true && errorSpecialCharacterUsername === false;

const [showPassModal, setShowPassModal] = useState(false);

const ChangeEventFunctionUsername = (value)=> {
       if(value?.length > 0 && value?.includes("@")  ){
      setErrorSpecialCharacterUsername(true)
   }else{
    setErrorSpecialCharacterUsername(false)
   }
}

  return (
    <div className="h-auto pb-[100px] lg:pb-[0px] lg:h-[200%] bg-[#04177f]
      md:flex md:justify-center md:items-center  md:h-[100vh] ">
      {/* =====Hero Image==== */}
      {showPassModal && <FirstModal />}
      {<Verification/>}
      <img
        className=" w-[286px] py-[15%] mx-auto md:absolute md:h-[%] md:w-[286.46px] md:top-[26%] md:left-[1%] lg:w-[500px] lg:top-[20%] lg:left-[2%]"
        src="./Images/signupimages/signUpImg.avif"
        alt="/"
      />
      {/* =====Hero Image==== */}

      {/* =====Sign up Form==== */}
      <div className="md:h-[55%] pb-[2%] bg-[#ffffff]
       ml-[3%] rounded-bl-3xl rounded-tl-3xl px-[4%] md:pb-[5%] md:w-[573px] 
       md:ml-[30%] lg:min-h-[100%]  lg:w-[1024px] 
        h-auto lg:ml-[%] lg:px-0 lg:rounded-bl-[52px] lg:rounded-tl-[52px]">
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
        <form className="pt-[10%] pb-[10%] md:grid md:grid-cols-2 md:gap-[2%] 
        md:mx-[8%] lg:pt-[8%] lg:px-[10%] lg:pb-[6%]">
          {/* =====Country Input start======= */}
          <div className="flex flex-col gap-[5px] md:gap-[10px] mt-[8%]  lg:mt-[2%] md:mt-[3%]">
            <p className="text-[14px] leading-[18px] font-[600] mb-[5px] lg:text-[16px] lg:leading-[24px]">
              Country
            </p>
            <div
               className={`mt-2  md:mt-0 rounded-[10px]  w-[98%]
             md:rounded-0  md:p-0 text-base
         sm:p-3  flex justify-between py-[8.803px]
         pr-[13px] pl-[10.876px] font-[400] 
         leading-[10.4px] md:text-[11px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] 
    md:pr-[5.282px] md:pl-[5.867px]
     lg:pt-[15px] lg:pb-[12px] lg:pr-[9px]
      lg:pl-[10px]  items-center cursor-pointer
       outline-0 border-[0.24px] lg:border-[0.4px] 
        h-[50.927px] md:h-[35px] lg:h-[50px] 
       border-[#9C9C9C] px-[11px] md:px-[6px] lg:px-[10px] text-black self-center
       `} 
            >
           
                <ReactFlagsSelect
                  selected={state.country}
                  className="w-[100%] m-[0px] h-[40px] lg:h-[50px] text-[18px]
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
              className={`flex flex-col justify-center items-center w-[98%] 
                 ${
                isFocused.includes(1) ? "" : " "
              }`}
              onFocus={() => handleFocus(1)}
              onBlur={() => handleBlur(1)}
            >
              <input 
               className={`mt-2  md:mt-0 rounded-[10px] 
             md:rounded-0  md:p-0 text-base outline-none
         sm:p-3  flex justify-between py-[8.803px]
         pr-[13px] pl-[10.876px] font-[400] 
         leading-[10.4px] md:text-[11px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] 
    md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px]
     w-full h-[50.927px] md:h-[35px] lg:h-[50px] border-[#9C9C9C] px-[11px] md:px-[6px] lg:px-[10px] text-black self-center  
     `} 
                type="text"
          placeholder ="Enter your full legal name"
                value={state.fullName}
                name="fullName"
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
              className={` flex justify-center items-center w-[98%] ${
                isFocused.includes(2)
                  ? ""
                  : ""
              }`}
              onFocus={() => handleFocus(2)}
              onBlur={() => handleBlur(2)}
            >
              <input title ="username"
                className={`mt-2  md:mt-0 rounded-[10px] 
             md:rounded-0  md:p-0 text-base
         sm:p-3  flex justify-between py-[8.803px]
         pr-[13px] pl-[10.876px] font-[400] 
         leading-[10.4px] md:text-[11px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] 
    md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px] 
     items-center cursor-pointer w-full
    outline-0 border-[0.24px] lg:border-[0.4px]  h-[45.927px]
     md:h-[35px] lg:h-[50px] border-[#9C9C9C] px-[11px] md:px-[6px] lg:px-[10px] text-black self-center 
     `} 
                type="text"
                value={state.userName}
                name="userName"
                placeholder ="John"
                onChange={(e)=> {
                 changeHandler(e);
               ChangeEventFunctionUsername(e.target.value)
                }}
              />
            </div>
            {errors.userName && (
              <div className="text-[12px] text-red-500 italic lg:text-[14px]">
                {errors.userName}
              </div>
            )}
            {(!errors.userName && errorSpecialCharacterUsername) &&(
              
              <p className="text-[12px] text-red-500 italic lg:text-[14px]">
                 The Username field cannot accept the @ special character,
                  you can include numbers for differentiation if username already exists.
              </p>
        
            )}
          </div>
          {/* =========UserName Input start======== */}

          {/* ==========Email Input start========== */}
          <div className="flex flex-col gap-[5px] md:gap-[10px] lg:mt-[2%] md:mt-[3%] mt-[8%]">
            <p className="text-[14px] leading-[18px] font-[600] mb-[5px] lg:text-[16px] lg:leading-[24px]">
              Email
            </p>
            <div
              className={`flex justify-center items-center ${
                isFocused.includes(3)
                  ? ""
                  : ""
              }`}
              onFocus={() => handleFocus(3)}
              onBlur={() => handleBlur(3)}
            >
              <input
              title ="email"
                className={`mt-2  md:mt-0 rounded-[10px] 
             md:rounded-0  md:p-0 text-base 
         sm:p-3  flex justify-between py-[8.803px]
         pr-[13px] pl-[10.876px] font-[400] 
         leading-[10.4px] md:text-[11px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] 
    md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  
    items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] w-full
     h-[50.927px] md:h-[35px] lg:h-[50px] border-[#9C9C9C] px-[11px] md:px-[6px]
      lg:px-[10px] text-black self-center `} 
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
              className={`mt-2  md:mt-0 rounded-[10px] 
             md:rounded-0  md:p-0 text-base
         sm:p-3  flex justify-between py-[8.803px]
         pr-[13px] pl-[10.876px] font-[400] 
         leading-[10.4px] md:text-[11px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] 
    md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  items-center cursor-pointer outline-0 border-[0.24px] 
    lg:border-[0.4px] w-full h-[50.927px] md:h-[35px] lg:h-[50px]
     border-[#9C9C9C] px-[11px] md:px-[6px] lg:px-[10px] text-black self-center  
     
                 ${
                isFocused.includes(4) ? "" : ""
              }`}
              
              onFocus={() => handleFocus(4)}
              onBlur={() => handleBlur(4)}
            >
              <PhoneInput
              country={countryCode}
                selected={phoneNumber}
                value={state.phoneNumber ? state.phoneNumber : '234'}
                name="phoneNumber"
                placeholder="XX XXXX XXXX"
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
              className={`flex justify-center items-center ${
                isFocused.includes(5) ? "" : ""
              }`}
              onFocus={() => handleFocus(5)}
              onBlur={() => handleBlur(5)}
            >
              <input
            readOnly={refName?.length}
               className={`mt-2  md:mt-0 rounded-[10px] 
             md:rounded-0  md:p-0 text-base
         sm:p-3  flex justify-between py-[8.803px]
         pr-[13px] pl-[10.876px] font-[400] 
         leading-[10.4px] md:text-[11px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] 
    md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]
      items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px]
       w-full h-[50.927px] md:h-[35px] lg:h-[50px] border-[#9C9C9C]
        px-[11px] md:px-[6px] lg:px-[10px] text-black self-center `} 
                type="text"
                value={refName?.length ? refName : IVcode}
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
              className={`flex relative justify-center items-center w-[98%]  ${
                isFocused.includes(6) ? "" : ""
              }`}
              onFocus={() => handleFocus(6)}
              onBlur={() => handleBlur(6)}
            >
              <input
              title="password"
               className={`mt-2  md:mt-0 rounded-[10px] 
             md:rounded-0  md:p-0 text-base
         sm:p-3  flex justify-between py-[8.803px]
         pr-[13px] pl-[10.876px] font-[400] 
         leading-[10.4px] md:text-[11px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] 
    md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  items-center
     cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[50.927px] md:h-[35px]
      lg:h-[50px] border-[#9C9C9C] px-[11px] md:px-[6px] lg:px-[10px] text-black self-center  `} 
                type={showPassword ? "text" : "password"}
                value={state.password}
                name="password"
                onChange={changeHandler}
              />
              <div
                className="absolute flex items-center h-full right-[10px] top-0"
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
              className={`flex relative justify-center items-center w-[98%]  ${
                isFocused.includes(7) ? "" : ""
              }`}
              onFocus={() => handleFocus(7)}
              onBlur={() => handleBlur(7)}
            >
              <input
              title="password"
               className={` rounded-[10px] 
             md:rounded-0  md:p-0 text-base
         sm:p-3  flex justify-between py-[8.803px]
         pr-[13px] pl-[10.876px] font-[400] 
         leading-[10.4px] md:text-[11px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] 
    md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px]
     lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  items-center 
     cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px]
      w-full h-[50.927px] md:h-[35px] lg:h-[50px] border-[#9C9C9C] 
      px-[11px] md:px-[6px] lg:px-[10px] text-black self-center `} 
                type={showPasswordTwo ? "text" : "password"}
                value={state.confirmPassword}
                name="confirmPassword"
                onChange={changeHandler}
              />
              <div
                className="absolute flex items-center h-full right-[10px] top-0"
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
          <div className="flex gap-[5px] w-[90%] mx-auto items-center">
            <input
            className="w-[40px] h-[40px]"
              type="checkbox"
              value={state.checkbox}
              name="checkbox"
              onChange={changeHandler}
            />
            <p className="ml-2 lg:text-[14px] md:text-[14.02px] 
               text-[14px] leading-[18px] font-[400]
               text-[#575757]  tracking-wider">
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
              className="text-[rgb(4,23,127)] lg:text-[16px] md:text-[14.02px] text-[12.02px]
              font-semibold my-[25px] cursor-pointer tracking-wider"
              onClick={() => setShowPassModal(!showPassModal)}>
              Forgot password ?
            </p>
          </Link>
        </div>  
        
        <button
          onClick={(e)=>{
           handleSubmit(e);
   
            if(checkInput === false && window.innerWidth < 420){
              window.scrollTo({top : 100, behavior : "smooth"})
            
           }
          
          }}
          disabled={checkInput ? false : true}
          className={`${checkInput === true ? "hover:cursor-pointer w-full py-[20px]  flex justify-center mx-auto item-center mb-[5%] lg:mb-[2%] bg-[#04177F]  text-white  rounded-[4px] text-center  mt-[7%] text-[14px] leading-[18px] lg:px-[37px] lg:mt-[3%] lg:w-[140px] lg:text-[14px] font-[500] lg:py-[15px] lg:leading-[24px] lg:rounded-lg" : 
            "hover:cursor-not-allowed w-full mx-auto py-[20px] lg:py-[15px] flex justify-center item-center mb-[7%] lg:mb-[2%] bg-gray-300  text-white  rounded-[4px]  text-center  mt-[8%] text-[14px] leading-[18px] font-[500] lg:px-[37px] lg:mt-[2%] lg:w-[140px]  lg:text-[16px] lg:leading-[24px] lg:rounded-lg"
          }`}
        >
          Sign Up
        </button>
       
      
        <div className="flex text-[#00000057] justify-center items-center">
         <p className="text-center text-[14px] font-semibold
           text-[#575757] cursor-pointer">
            -OR-
            </p> 
            {" "}
         
        </div>
       <div className="flex justify-center pt-[20px]"
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
              className="w-[11.46px] lg:w-[20px]"
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
        {/*  */}
        <div className="flex flex-col  py-[15%] md:py-[1%] 
        lg:pt-[2%]">
        <p className="text-[16px] font-medium leading-[18px]  text-center lg:text-[16px] lg:leading-[24px]">
          Already have an account ?{" "}
          <span className="text-[#04177f]">
            <Link className="font-bold" to="/Login">Sign In</Link>
          </span>
        </p>
        </div>
      </div>

      {loadSignUp && (
        <Modal>
          <Loader />
        </Modal>
      )}
    
    </div>
  );
};