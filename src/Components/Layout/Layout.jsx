import React from "react";
import { Router } from "../../Router";
import { Footer } from "./Footer/Footer";
import { NavBar } from "./Navigation/NavBar";
import ScrollToTop from "../scroll/scrollToTop";
import { useContext } from "react";
import { ContextProvider } from "../Context";
import { useLocation,} from "react-router-dom"


export const Layout = () => {
const locationObject = useLocation();
const pathname = locationObject.pathname;


  const { handleClickOutside} = useContext(ContextProvider);
  if(!pathname) return;

 
  return (
    <div className={`flex flex-col ${pathname === "/TestingPhase" ? "gap-[40px] md:gap-[50px]" 
      : "gap-[100px] md:gap-[160px]"} `} 
    onClick={handleClickOutside}>
      <NavBar />
      <ScrollToTop />
      {/* Contents */}
   <Router/>
      {/* Contents */}
      <Footer />
    </div>
  );
};
