import React, { useContext, useEffect } from "react";
import LoginForm from "../../../loginForm/LoginForm";
import { ContextProvider } from "../../../Context";

function Login() {
  const {setHideNavbar } = useContext(ContextProvider);

  const setNav = () => {
    setHideNavbar(true);
  };

  useEffect(() => {
    setNav();
    return () => {
      setHideNavbar(false);
      const ActiveSignUp = localStorage.getItem("ActiveSignUp");
      const phoneData = localStorage.getItem("userPhone");
      if(ActiveSignUp && !phoneData){
     localStorage.removeItem("ActiveSignUp");
      }
    };
    // eslint-disable-next-line
  }, []);
  return (
    <div className="relative h-[170vh] grid grid-cols-1">
      {/* --------------------------------BLUE AND WHITE BACKGROUND STARTS HERE-------------------------------- */}
      <div className="bg-[#04177F] "></div>
      <div className="bg-[#fff] "></div>

      {/* --------------------------------BLUE AND WHITE BACKGROUND ENDS HERE--------------------------- */}

      <div className="absolute top-0 bottom-0 right-0 left-0 md:grid md:grid-cols-2 flex flex-col justify-center md:justify-[unset] md:flex-[unset] md:items-center px-[10px] md:px-[70px]">
        <div className=" md:h-[100%] md:mb-[-23%] lg:mb-[unset] flex flex-col md:justify-center items-center ">
          {" "}
          <div className="mt-[10px]">
            <p className="text-[18.33px] lg:text-[32px] font-bold text-[#fff]">
              Welcome to AremxyPlug!{" "}
            </p>
            <p className="text-[9.17px] lg:text-[16px] text-[#fff]">
              The one-stop shop solution for all your digital needs.
            </p>
          </div>
          <img
            src="./Images/login/loginImage.avif"    
            alt="background_image"
            className="w-[70%] md:w-[95%] xl:w-[75%] md:h-[15%] lg:h-[25%] xl:h-[35%] mt-[50px] "
          />
          <div className="md:mt-[7%] lg:mt-[unset]  md:h-[25%] lg:h-[50%]  w-[100px] flex justify-center items-center "></div>
        </div>

        <div className="mt-[50px]  md:mt-[unset] md:h-[100%] flex items-center">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default Login;
