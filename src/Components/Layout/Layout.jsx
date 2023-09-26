import React from "react";
import { Router } from "../../Router";
import { Footer } from "./Footer/Footer";
import { NavBar } from "./Navigation/NavBar";
import ScrollToTop from "../scroll/scrollToTop";
import { useContext } from "react";
import { ContextProvider } from "../Context";

export const Layout = () => {
  const { handleClickOutside } = useContext(ContextProvider);
  return (
    <div onClick={handleClickOutside}>
      <NavBar />
      <ScrollToTop />
      {/* Contents */}
      <Router />
      {/* Contents */}
      <Footer />
    </div>
  );
};
