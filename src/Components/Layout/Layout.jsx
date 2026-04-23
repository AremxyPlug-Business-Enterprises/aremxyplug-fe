import React from "react";
import { Router } from "../../Router";
import { Footer } from "./Footer/Footer";
import { NavBar } from "./Navigation/NavBar";
import ScrollToTop from "../scroll/scrollToTop";
import { useContext } from "react";
import { ContextProvider } from "../Context";
import { useLocation,} from "react-router-dom"
import { CustomAlert } from "../ApiCollection.jsx/ApiBuck";

export const Layout = () => {
const locationObject = useLocation();
const pathname = locationObject.pathname;


  const { handleClickOutside, hideNavbar, alertCustom, setAlertCustom} = useContext(ContextProvider);
  if(!pathname) return;

 
  return (
    <div className={`flex flex-col ${pathname === "/TestingPhase" ? "gap-[40px] md:gap-[50px]" 
      : pathname !== "/TestingPhase" && hideNavbar === false?  "md:pt-[160px] pt-[100px]" : ""} `} 
    onClick={handleClickOutside}>
      <NavBar />
      <ScrollToTop />
      {/* Contents */}
   <Router/>
      {/* Contents */}
       {alertCustom.show === true && (
        <CustomAlert message ={alertCustom.message}
         type={alertCustom?.type} 
         onClose={()=> {
          setAlertCustom((value)=>({...value, show : false}))}
         }/>
       )}
      <Footer />
    </div>
  );
};
