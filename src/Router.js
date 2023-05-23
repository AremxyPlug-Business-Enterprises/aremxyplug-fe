import React from "react";
import { Route, Routes, createBrowserRouter } from "react-router-dom";
import { Home } from "./Components/Screens/Home/Home"
import OurServices from "./Components/OurServices/OurServices";
import PaymentServices from "./Components/PaymentServices/PaymentServices";
import Telecoms from "./Components/Telecoms/Telecoms";
import CardIssuing from "./Components/Screens/cardIssuing/cardIssuing";
import DigitalServices from "./Components/Screens/digitalServices/DigitalServices";

export const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/our-services" element={<OurServices />} />
        <Route path="/our-services/payment" element={<PaymentServices />}/>
        <Route path="/our-services/telecoms" element={<Telecoms/>} />
        <Route path="/our-services/card-issuing" element={<CardIssuing/>} />
        <Route path="/our-services/digital-services" element={<DigitalServices/>} />
      </Routes>
    </div>
  );
};
