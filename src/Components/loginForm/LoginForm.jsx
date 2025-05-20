import React, { useContext, useEffect, useState } from "react";
import "./LoginForm.css";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import FirstModal from "../Screens/CustomersPages/Password/FirstModal";
import {  ContextProvider } from "../Context";
import { primaryColor } from "../Screens/cardIssuing/cardIssuing";
import { Tooltip as ReactTooltip } from "react-tooltip";
import LoginPopUp from "./LoginPopUp";
import Joi from "joi";
import axios from "axios";
import { Loader } from "../Loader/Loader";
import { Modal } from "../Screens/Modal/Modal";
function LoginForm() {

  const { setOpenTranspin,
    // setOpenResetTranspin,
      setOpen2StepVerification,
    //  setLoginAuthorisation,
    //  customerDetail,
      setCustomerDetail,
      } = useContext(ContextProvider);



  const [usernameORemail, setUsernameORemail] = useState("username");
  const [loading, setLoading] = useState(false);
 

  // Check if login data exist starts here
  function checkUsername() {
    const getUsername = localStorage.getItem("aremxyUsername")
      ? JSON.parse(localStorage.getItem("aremxyUsername"))
      : "";
    return getUsername;
  }

  function checkEmail() {
    const getEmail = localStorage.getItem("aremxyEmail")
      ? JSON.parse(localStorage.getItem("aremxyEmail"))
      : "";
    return getEmail;
  }

  function checkPassword() {
    const getPassword = localStorage.getItem("aremxyPassword")
      ? JSON.parse(localStorage.getItem("aremxyPassword"))
      : "";
    return getPassword;
  }
  // Check if login data exist ends here

  const [username, setUsername] = useState(checkUsername());
  const [email, setEmail] = useState(checkEmail());
  const [password, setPassword] = useState(checkPassword());
  const [checkbox, setCheckbox] = useState(false);
 // const [cormfirmVirtualLoad, setConfirmVirtualLoad] = useState(false)
  const [passwordHidden, setPasswordHidden] = useState("password");
  const [isFocused, setIsFocused] = useState([]);
  const {showModal, setShowModal} = useContext(ContextProvider);

  const [toolTipWidth, setToolTipWidth] = useState("");
  const [toolTipOffset, setToolTipOffset] = useState("");
  const [errors, setErrors] = useState({});

  // const [redirect, setRedirect] = useState(false);
  // const navigate = useNavigate();
  
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let newSize = "";
      let newOffset = "";

      if (width < 1024) {
        newSize = "96%";
        newOffset = 30;
      } else {
        newSize = "50%";
        newOffset = 50;
      }

      setToolTipWidth(newSize);
      setToolTipOffset(newOffset);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
 
   // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let newSize = "";
      let newOffset = "";

      if (width < 1024) {
        newSize = "96%";
        newOffset = 30;
      } else {
        newSize = "50%";
        newOffset = 50;
      }

      setToolTipWidth(newSize);
      setToolTipOffset(newOffset);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const usernameHandler = (e) => {
    setUsername(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const checkBoxHandler = (e) => {
    setCheckbox(e.target.checked);
  };

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

  //SetLocalStorage for input Pin flow
 


// Function to Verify user's Virtual Account situation 2
 


  // ==========Login Handler===========
  const submitHandler = async (e) => {
    e.preventDefault();
if( !navigator.onLine) return alert("No internet Connection, Check your network connection to proceed ");
const ActiveSignUp = localStorage.getItem("ActiveSignUp");
if(ActiveSignUp === "true") return alert("You are not allowed to login, while an active sign up is present, if you don't wish to proceed with the sign up process, click on NO in the Sign up page popup")
    // ========Login form validation starts here=======
    if (usernameORemail === "username" && navigator.onLine && !ActiveSignUp) {
      try {
        const schema = Joi.object({
          username: Joi.string()
            .pattern(new RegExp(/^[a-zA-Z0-9_]{3,30}$/))
            .required()
            .messages({ "string.pattern.base": "Invalid Username" }),
        });
       

        const { error } = schema.validate({ username });
       
        if (error) {
          // Handle validation error
          setErrors(
            error.details.reduce((acc, curr) => {
              acc[curr.path[0]] = curr.message;
              return acc;
            }, {})
          );
        } else {
          setLoading(true);
          const loginData = { username: username, password: password};
          const config = {
            headers: { "Content-Type": "application/json" },
          };
          await axios
            .post(
              "https://aremxyplug.onrender.com/api/v1/login",
              loginData,
              config
            )
            .then((response) => {
              console.log(response);
              if (response.status === 202 && response.headers.hasAuthorization) {
                setOpenTranspin(true);
                console.log(`${response.data.data}`);
                const authToken = response.headers.get('Authorization');
                  const customer  =  response.data.data.customer;
              
                if(authToken){
                
                 localStorage.setItem("getToken", authToken);
                  if(customer){
                    console.log(customer)
                    setCustomerDetail(customer);
               }
                   }
     } else if(response.status === 200){
                  setOpen2StepVerification(true);
                  const customer  =  response.data.data.customer;
                  const authToken = response.headers.get('Authorization');
                  console.log(authToken)
                   if(authToken){
                localStorage.setItem("getToken", authToken);
              
                  if(customer){
               setCustomerDetail(customer);
               console.log(customer);
                  }
                   }
             }
            })
            .catch((error) => {
              if(error.status === 500){
              console.error(error);
              alert("A SERVER ERROR");
              }else if (error.status === 404) {
                alert("User not found");
              } else if ( error.status === 401 || 400) {
                alert("Incorrect Password or Username");
              }else if(error && error.status === 500){
                alert("Server error: try some other time");
          }else if(error && error.reponse.status === undefined){
                alert("Check your internet Connection");
          }else {
            alert("Check your internet connection")
          }
            });
          if (checkbox === true) {
            localStorage.setItem("aremxyPassword", JSON.stringify(password));
            localStorage.setItem("aremxyUsername", JSON.stringify(username))
          }
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false)
          }
    }

    if (usernameORemail === "email" && navigator.onLine) {
      try {
        const schema = Joi.object({
          email: Joi.string()
            .pattern(new RegExp(/^\S+@\S+\.\S+$/))
            .required()
            .messages({ "string.pattern.base": "Invalid email" }),
        });
        const { error } = schema.validate({ email });
        if (error) {
          // Handle validation error
          setErrors(
            error.details.reduce((acc, curr) => {
              acc[curr.path[0]] = curr.message;
              return acc;
            }, {})
          );
        } else {
          setLoading(true);
          const loginData = { email: email, password: password };
          const config = {
            headers: { "Content-Type": "application/json" },
          };
          await axios
            .post(
              "https://aremxyplug.onrender.com/api/v1/login",
              loginData,
              config
            )
            .then((response) => {
              console.log(response);
              if (response.status === 202  && response.headers.hasAuthorization) {
                setOpenTranspin(true);
                const authToken = response.headers.get('Authorization');
                 console.log(`${response.data.data}`);
                const customer = response.data.data.customer;
                if(authToken){
                 // localStorage.setItem("UserStatus",false)
                  localStorage.setItem("authorisedLogin", authToken);
                   if(customer){
                    console.log(customer);
               setCustomerDetail(customer);
                  }
              }
    }
  
               else if(response.status === 200){
                setOpen2StepVerification(true);
             const customer  =  response.data.data.customer;
             const authToken = response.headers.get('Authorization');
             console.log(customer)
            
           if(authToken){
             localStorage.setItem("authorisedLogin", authToken);
             if(customer){
              setCustomerDetail(customer);
             }
              }
         } 
            })
            .catch((error) => {
            if(error.status=== 500){
              console.error(error);
              alert("A SERVER ERROR");
              }else if(error.status === 404){
                alert("User not found")
                   }
                   else if (error.status === 401 || 400) {
                     alert("Incorrect Password or Email");
                   } else {
                     console.log(error);
                   }
            });
          if (checkbox === true) {
            localStorage.setItem("aremxyPassword", JSON.stringify(password));
          }
        }
      } catch (error) {
        console.log(error);
      } finally{
       setLoading(false);
      }
    }
  
  };



  
  return (
    <div
      className="relative overflow-hidden w-[100%] xl:w-[85%] md:mx-[unset]   loginForm p-[25px] rounded-lg md:rounded-xl xl:rounded-3xl "
      style={{
        zIndex: 950,
      }}
    >
      {showModal && <FirstModal />}

      {<LoginPopUp />}
      <Link to="/">
        <img
          src="./Images/login/arpLogo.png"
          alt="logo"
          className="w-[36.51px] h-[17.73px] lg:w-[63.73px] lg:h-[30.94px]"
        />
      </Link>

      <div className="mt-[30px]">
        {/* Email starts here 268455*/}
        <form onSubmit={submitHandler}>
          <div className="px-[15%] lg:px-[20%]">
            <div className=" mb-[14px] md:mb-[18px] lg:mb-[20px]">
              <p className="text-[12.93px] md:text-[14.58px] lg:text-[20px] font-[600] w-[70%] mb-[7px] lg:mb-[10px] tracking-wider">
                <span
                  className={`${
                    usernameORemail === "username" ? "text-[#04177F]" : ""
                  }  cursor-pointer hover:text-gray-700`}
                  onClick={() => setUsernameORemail("username")}
                >
                  Username
                </span>{" "}
                or{" "}
                <span
                  className={`${
                    usernameORemail === "email" ? "text-[#04177F]" : ""
                  }  cursor-pointer hover:text-gray-700`}
                  onClick={() =>{
                    setUsernameORemail("email");
                  } }
                >
                  {" "}
                  Email
                </span>
              </p>
              <div
                className={`inputBoxShadow w-[100%] h-[39.75px] lg:h-[42px]
                   rounded flex items-center lg:hover:border-[#b3b3b3] lg:duration-300 
            ${
              isFocused.includes(1)
                ? "border-[#2684fe] border-2"
                : "border-[#cdcdcd] border-[1px] "
            }`}
                onFocus={() => handleFocus(1)}
                onBlur={() => handleBlur(1)}
              >
                <input
                  className="w-full h-full text-[12.93px] 
                  md:text-[14.58px] lg:text-[16px] px-[7.5px] md:px-[10px] rounded  text-[#403f3f] outline-none "
                  type="text"
                  value={usernameORemail === "username" ? username : email}
                  onChange={
                    usernameORemail === "username"
                      ? usernameHandler
                      : emailHandler
                  }
                  placeholder={
                    usernameORemail === "username"
                      ? "Enter username"
                      : "Enter email"
                  }
                  data-tooltip-id={
                    usernameORemail === "username" ? "username" : "email"
                  }
                  data-tooltip-content={
                    usernameORemail === "username"
                      ? "Click on Email  to switch to email input"
                      : "Click on Username to switch to username input"
                  }
                />

                <ReactTooltip
                  id={usernameORemail === "username" ? "username" : "email"}
                  type="success"
                  offset={toolTipOffset}
                  style={{
                    backgroundColor: "rgb(4,23,127)",
                    width: toolTipWidth,
                    textAlign: "center",
                    color: "#fff",
                    fontWeight: "bold",
                    letterSpacing: "1px",
                    fontSize: 12,
                    zIndex: 999,
                  }}
                />
              </div>
              {errors.username && (
                <div className="text-[12px] text-red-500 italic lg:text-[14px]">
                  {errors.username}
                </div>
              )}
              {errors.email && (
                <div className="text-[12px] text-red-500 italic lg:text-[14px]">
                  {errors.email}
                </div>
              )}
            </div>
            {/* Email ends here*/}
            {/* Password starts here 268455*/}
            <div className="mb-[14px] md:mb-[18px] lg:mb-[20px]">
              <p className="text-[12.93px] md:text-[14.58px] lg:text-[20px] font-[600] w-[30%] mb-[7px] lg:mb-[10px] tracking-wider">
                Password
              </p>
              <div
                className={`relative inputBoxShadow w-[100%] h-[39.75px] lg:h-[42px]  rounded  flex items-center lg:hover:border-[#b3b3b3] lg:duration-300 
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
                      ? "text-[12.93px] md:text-[14px] lg:text-[16px]"
                      : "text-[12.93px] md:text-[14.58px] lg:text-[16px]"
                  }  pl-[7.5px] md:pl-[10px] pr-[40px] md:pr-[50px] rounded  text-[#403f3f] outline-none`}
                  value={password}
                  onChange={passwordHandler}
                  required
                  type={passwordHidden}
                  // placeholder="Enter your first name"
                />
              </div>
            </div>
            {/* Password ends here*/}
            <p
              className="text-[#04177F] lg:text-[16px] md:text-[14.02px] text-[12.02px]
              font-semibold my-2 cursor-pointer tracking-wider"
              onClick={() =>{
                setShowModal(true)
              }}
            >
              Forgot password ?
            </p>
            <div className="flex mb-[10px]">
              <input
                type="checkbox"
                name=""
                id=""
                checked={checkbox}
                onChange={checkBoxHandler}
              />
              <p className="ml-2 lg:text-[14px] md:text-[8.02px]  text-[8.02px] text-[#575757]  tracking-wider  ">
                Remember me next time!
              </p>
            </div>
          </div>
          <div className="w-full flex justify-center ">
            {usernameORemail === "username" ? (
              <button
                type="submit"
                disabled={username === "" || password === "" ? true : false}
                className={` ${
                  username === "" || password === ""
                    ? "opacity-50 cursor-not-allowed"
                    : "opacity-[unset] cursor-pointer"
                } inline-flex justify-center items-center text-[#fff]   text-center   
text-[10px] font-bold leading-[11.31px]  px-[25px] py-[8px] rounded-[3px] lg:rounded-[7px] lg:px-[37px] lg:py-[15px] lg:text-[14px]
`}
                style={{
                  backgroundColor: primaryColor,
                }}
              >
                <p> Signin</p>
              </button>
            ) : (
              <button
                type="submit"
                disabled={email === "" || password === "" ? true : false}
                className={` ${
                  email === "" || password === ""
                    ? "opacity-50 cursor-not-allowed"
                    : "opacity-[unset] cursor-pointer"
                } inline-flex justify-center items-center text-[#fff]   text-center   
text-[10px] font-bold leading-[11.31px]  px-[25px] py-[8px] rounded-[3px] lg:rounded-[7px] lg:px-[37px] lg:py-[15px] lg:text-[14px]
`}
                style={{
                  backgroundColor: primaryColor,
                }}
              >
                <p> Signin</p>
              </button>
            )}
          </div>
        </form>
        <p
          className="text-center text-[14px] font-semibold text-[#575757] my-4 cursor-pointer"
        >
          -OR-
        </p>
        <div className="flex justify-center">
          <div
           onClick ={()=> {
            alert("The use of Google as a third party authentication OAuth isn't available for now.")
          }} 
          //  onClick={() => setOpenResetTranspin(true)}
            className={`px-[10px] lg:px-[20px] py-[9px] rounded  flex items-center justify-center lg:hover:border-[#b3b3b3] lg:duration-300 border-[#cdcdcd] border-[1px] cursor-pointer `}
          >
            <img
              src="./Images/login/Google.png"
              alt="google"
              className="w-[11.46px] lg:w-[20px] "
            />
            <p  onClick ={()=> {
            alert("The use of Google as a third party authentication OAuth isn't available for now.")
          }} 
            className="lg:text-[14px] md:text-[8.02px] text-[8.02px]  pl-4 font-semibold tracking-wider">
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
      {loading && (
        <Modal>
          <Loader />
        </Modal>
      )}
    </div>
  );
}

export default LoginForm;
