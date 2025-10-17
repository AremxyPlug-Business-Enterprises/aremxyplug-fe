import React, { useState } from "react";
import { useContext } from "react";
import { ContextProvider } from "../../Context";
import PopUpGreen from "../ProfileImages/PopUpGreen.svg";
import PopUpGreenTab from "../ProfileImages/PopUpGreenTab.svg";
import PopUpGreenDeskTop from "../ProfileImages/PopUpGreenDeskTop.svg";
import { Modal } from "../../Screens/Modal/Modal";
import styles from "../../../Components/Dashboard/DashboardComponents/TransferComponent/transfer.module.css";
import Success from "../ProfileImages/success.gif";
import axios from "axios";
import { Loader } from "../../Loader/Loader";
import { InternalLoginSession } from "../../ApiCollection.jsx/ApiBuck";
const ChangePassword = () => {
  const { toggleSideBar, isDarkMode } = useContext(ContextProvider);

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [update, setUpdate] = useState("");
const [loading, setLoading] = useState(false);
const [sessionModal, setSessionModal] = useState(false)
  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  //Function to Change the password
  const ChangeUserPin = async()=> {
    const getToken = localStorage.getItem("getToken");
    const authToken = localStorage.getItem("authorisedLogin");
    if(!navigator.onLine) return alert("Check your internet connection");
    if((authToken || getToken) && navigator.onLine){
      setLoading(true)
    try{
    const data ={
      old_password : oldPassword,
      new_password : newPassword
     }
     const url = "https://aremxyplug.onrender.com/api/v1/update-password";
     const response = await axios.patch(url,data,{headers : {"Content-Type":"application/json",
      Authorization : getToken || authToken
     }})
     if(response.status === 200 || response.status === 201){
      setUpdate(true);
     }
  
     }catch(error){
       if(error.response.status === 400){
        alert("Invalid Old Password")
       }else if(error && error.response.status === 401){
        if(error.response?.headers.get("x-new-auth-token") || error.response?.headers["x-new-auth-token"]){
             setLoading(true)
         const newToken = error.response.headers.get("x-new-auth-token") ||error.response.headers["x-new-auth-token"];
        
         if(newToken !== "" && localStorage.getItem("authorisedLogin")){
             console.log(newToken)
          localStorage.setItem("authorisedLogin", newToken);
          
          if( localStorage.getItem("authorisedLogin")?.length > 1){
            return ChangeUserPin();
          }
           }else{
      localStorage.setItem("getToken", newToken);
       console.log(getToken);
          if(localStorage.getItem("getToken")?.length > 1){
            return ChangeUserPin();
          }
      }}else{
        return setSessionModal(true);
      }
        
       }else if(error.response.status === 404){
        alert("Check your internet connection")
       }else if(error.response.status === 500){
        alert("SERVER ERROR");
       }else if(error.response.status === undefined){
        alert("Check your internet connection")
       }else{
      alert("Check your internet connection");
       }
     }finally{
      setLoading(false);
     }
    }
  }
  const handleUpdate = async() => {
    if(!oldPassword || !newPassword || !confirmPassword){
setErrorMessage("Please fill in all fields");
    }else if(!validatePassword(newPassword)){
      setErrorMessage(
        "Password must have at least one alphabetical character, at least one digit, contain at least one special character (e.g., !@#$%^&*), and have a minimum length of 8 characters."
      );
    }else if (newPassword !== confirmPassword) {
      setErrorMessage("Password does not match...");
      document.getElementById("confirmPinInput").style.backgroundColor =
        "#FFD8D8";
    } else {
      setErrorMessage("");
      document.getElementById("confirmPinInput").style.backgroundColor = "";
      await ChangeUserPin()
      
    }
  };


  return (
    <div>
      <div>
        {/* <div className="grid grid-cols-1 mt-[10px] md:grid-cols-2 gap-y-[10px] md:gap-x-[0px] lg:gap-x-[0px] md:gap-y-[0px] lg:gap-y-[25px] pb-[30px] lg:py-[30px] md:mt-[20px]"> */}
        <div className="flex flex-col mt-[10px] lg:gap-[25px] gap-[20px] w-full pb-[30px] lg:py-[30px] md:mt-[20px]">
          <div className="mt-[10px] flex flex-col md:flex-row lg:gap-[22px] gap-[20px] md:items-center w-full">
          <div className="flex flex-col md:w-1/2 w-full md:gap-[10px] gap-2.5">
            <h2 className={`text-[12px] text-[#7E7E7E] font-semibold md:text-[14px] lg:text-[18px] ${isDarkMode ? "text-white" : "" }`}>
              Old Password
            </h2>
            {/* <div className="relative mt-[5px] lg:mt-[15px]"> */}
            <div className="relative">
              <input
                type="text"
                className={`w-full py-[10.33px] pl-[5.867px] pr-1 md:pl-[8.67px] md:pr-[5.867px] lg:py-[15.5px] lg:pl-[10px] border text-[12px] leading-[18px] lg:leading-[20.8px] text-[#7E7E7E] focus:outline-none rounded-[10px] lg:text-[16px] border-[#9C9C9C]  ${
                  isDarkMode
                    ? "border-slate-50 text-slate-50 bg-black"
                    : "bg-white"
                }`}
                placeholder="Password at login"
                value={oldPassword}
                onChange={(event) => setOldPassword(event.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-col md:w-1/2 w-full md:gap-[10px] gap-2.5">
            <h2 className={`text-[12px] text-[#7E7E7E] font-semibold md:text-[14px] lg:text-[18px] ${isDarkMode ? "text-white" : "" }`}>
              New Password
            </h2>
            <div className="relative ">
              <input
                type="text"
                placeholder="Password different from the old one"
                className={`w-full py-[10.33px] pl-[5.867px] pr-1 md:py-[10] md:pl-[8.67px] md:pr-[5.867px] lg:py-[15.5px] lg:pl-[10px] border text-sm leading-[18px] lg:leading-[20.8px] text-[#7E7E7E] focus:outline-none rounded-[10px] lg:text-[16px] border-[#9C9C9C]  ${
                  isDarkMode
                    ? "border-slate-50 border text-slate-50 bg-black"
                    : "bg-white"
                }`}
                
                value={newPassword}
                onChange={(event) => setNewPassword(event.target.value)}
              />
            </div>
          </div>
          </div>

          <div className="flex flex-col md:w-[50%] w-full md:gap-[10px] gap-2.5">
            <h2 className={`text-[12px] text-[#7E7E7E] font-semibold md:text-[14px] lg:text-[18px] ${isDarkMode ? "text-white" : "" }`}>
              Confirm Password
            </h2>
            <div className="relative">
              <input
                id="confirmPinInput"
                type="text"
                placeholder="Confirm your new password"
                className={`w-full py-[10.33px] pl-[5.867px] pr-1 md:py-[10] md:pl-[8.67px] md:pr-[5.867px] lg:py-[15.5px] lg:pl-[10px] border text-sm leading-[18px] lg:leading-[20.8px] text-[#7E7E7E] focus:outline-none rounded-[10px] lg:text-[16px] border-[#9C9C9C]  ${
                  isDarkMode
                    ? "border-slate-50 text-slate-50 focus:bg-black bg-black"
                    : "bg-white"
                }`}
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
              />
            </div>

            <div>
              <p className={`text-[12px] font-semibold text-[#04177F] md:text-[14px] lg:text-[18px] text-start mt-[5%]  ${isDarkMode ? "text-white" : ""}`}>
                Forgot Password?
              </p>
            </div>

            {errorMessage && (
              <p className="text-red-500 text-start font-semibold text-[12px] mt-[5px] md:mt-[10px] md:text-[12px] lg:text-[14px] md:w-[70%] lg:w-[50%]">
                {errorMessage}
              </p>
            )}
          </div>
        </div>

        <div className="py-[10px] lg:py-[30px]">
          <button
            className={`${
              !oldPassword || !newPassword || !confirmPassword
                ? "bg-[#63616188] cursor-not-allowed"
                : "bg-primary"
            } w-full md:w-fit text-white rounded-md px-[28px] text-[12px] md:px-[30px] md:py-[10px] md:text-[13px] md:font-[600] leading-[15px] lg:text-[16px] lg:px-[60px] lg:py-[15px] 2xl:text-[20px] 2xl:px-[50px] 2xl:py-[10px] lg:leading-[24px] py-[15px]
              `}
            onClick={handleUpdate}
            disabled={!oldPassword || !newPassword || !confirmPassword}
          >
            Update
          </button>
        </div>
      </div>

      {update && (
        <Modal className="">
          <div
            className={` ${
              toggleSideBar ? "absolute w-[90%] md:w-[45%] lg:w-[40%] md:h-[350px] md:ml-[20%] h-[250px] lg:h-[405px] shrink-0 rounded-[8px] shadow-[0px_0px_7.068181991577148px_0px_rgba(0,0,0,0.25)] top-[0%]" : "absolute w-[90%] md:w-[45%] lg:w-[40%] md:h-[350px] h-[250px] lg:h-[405px]  shrink-0 rounded-[8px] shadow-[0px_0px_7.068181991577148px_0px_rgba(0,0,0,0.25)]"
            }  flex flex-col justify-between items-center pb-[10px] md:pb-[30px] lg:pb-[30px] md:mx-auto md:my-auto lg:mx-auto lg:my-auto rounded-[12px] ${isDarkMode ? "bg-stone-950 border-white border": "bg-white"}`}
          >
            <div className="absolute z-0 right-0" style={{ zIndex: 0 }}>
              <img
                src={PopUpGreen}
                alt=""
                className="md:hidden rounded-tr-[10px]"
              />
              <img
                src={PopUpGreenTab}
                alt=""
                className="hidden md:block rounded-tr-[10px]"
              />
              <img
                src={PopUpGreenDeskTop}
                alt=""
                className="hidden rounded-tr-[20px]"
              />
            </div>

            <div className="relative z-10">
              <p
                className={`text-[12px] px-[20px] md:text-[16px] lg:text-[18px] font-semibold text-center mt-[8%] lg:mt-[3%] z-[1000] ${styles.overlayText}`}
              >
                Successful
              </p>

              <p
                className={`text-[12px] px-[20px] md:text-[16px] lg:text-[18px] font-semibold text-center mt-[4%] lg:my-[%] z-[1000] ${styles.overlayText}`}
              >
                You have successfully changed your Password.
              </p>
            </div>

            <img src={Success} alt="" className="h-[50%] md:h-[40%]" />

            <button
              onClick={(e) => {
                e.preventDefault();
                setUpdate(false);
                setOldPassword("");
                setNewPassword("");
                setConfirmPassword("");
              }}
              className={`my-[%] mt-0  bg-[#04177f] w-[90%] flex justify-center items-center mx-auto cursor-pointer text-[12px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[40%] md:rounded-[8px] md:text-[16px] lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
            >
              Done
            </button>
          </div>
        </Modal>
      )}
      { loading &&(
        <Modal>
        <Loader/>
        </Modal>
      )}
      {sessionModal && (
        <InternalLoginSession 
        setExpiredSessionModal = {setSessionModal}/>
      )}
    </div>
  );
};

export default ChangePassword;
