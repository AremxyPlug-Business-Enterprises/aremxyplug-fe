import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Components/Screens/Home/Home";
import OurServices from "./Components/Screens/OurServices/OurServices";
import PaymentServices from "./Components/Screens/PaymentServices/PaymentServices";
import Telecoms from "./Components/Screens/Telecoms/Telecoms";
import CardIssuing from "./Components/Screens/cardIssuing/cardIssuing";
import VTU_DEV from "./Components/Screens/vtu_dev/VTU_DEV";
import { BusinessDev } from "./Components/Screens/BusinessDev/busdev";
import SocialMediaMarketing from "./Components/Screens/SocialMediaMarketing/SocialMediaMarketing";
import { Pricing } from "./Components/Screens/pricings/Pricing";
import { Faq } from "./Components/Screens/FAQs/Faq";
import ContactUs from "./Components/Screens/contactUs/ContactUs";
import OwnVTU from "./Components/Screens/ownVTU/OwnVTU";
import TermsAndCondition from "./Components/Screens/TermsAndCondition/TermsAndCondition";
import PrivacyPolicy from "./Components/Screens/PrivacyPolicy/PrivacyPolicy";
import Team from "./Components/Screens/Team/Team";
import { SignUp } from "./Components/Screens/CustomersPages/SignUp/SignUp";
import Login from "./Components/Screens/CustomersPages/login/Login";
import PasswordReset from "./Components/Screens/CustomersPages/Password/PasswordReset";
import { VerifyViaEmail } from "./Components/VerificationCode/VeirifyViaEmail/VerifyViaEmail";
import { VerifyViaSms } from "./Components/VerificationCode/VerifyViaSms/VerifyViaSms";
import NewPassword from "./Components/Screens/CustomersPages/Password/NewPassword";
import { MainDashboard } from "./Components/Dashboard/Layout/MainDashboard";
import Wallet from "./Components/Wallet/Wallet";
import FiatWallet from "./Components/Wallet/FiatWallet";
import { AboutUs } from "./Components/Screens/AboutUs/AboutUs";
import { Solution } from "./Components/Screens/Solutions/Solution";
import NewWallet from "./Components/Wallet/NewWallet";
import TopUpScreen from "./Components/Screens/topUP/TopUpScreen";
import { TransferPage } from "./Components/Dashboard/DashboardComponents/TransferComponent/TransferPage";
import { ToMyAccountPage } from "./Components/Dashboard/DashboardComponents/TransferComponent/ToMyAccountPage";
import PointBalance from "./Components/Wallet/PointBalance";
import VirtualAccount from "./Components/Screens/virtualAccount/VirtualAccount";
import { PersonalAccountPage } from "./Components/Dashboard/DashboardComponents/PersonalAccountPage/PersonalAccountPage";
import AirtimeTopUp from "./Components/AirtimeTopUp/AirtimeTopUp";
import AirtimeVtu from "./Components/AirtimeTopUp/AirtimeVtu";
import { AddAccount } from "./Components/Dashboard/DashboardComponents/PersonalAccountPage/AddAccountPage/AddAccount";
import NgnVirtualAccount from "./Components/Screens/ngnVirtualAccount/NgnVirtualAccount";
import { CookiesSettings } from "./Components/Screens/Home/Cookie/CookiesSettings";
import { Receipt } from "./Components/Dashboard/DashboardComponents/PersonalAccountPage/Receipt";
import { WithdrawPage } from "./Components/Dashboard/DashboardComponents/Withdrawal/WithdrawPage";
import { BusinessAccountPage } from "./Components/Dashboard/DashboardComponents/PersonalAccountPage/BusinessAccountPage";

export const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About-us" element={<AboutUs />} />
        <Route path="/Solutions" element={<Solution />} />
        <Route path="/our-services" element={<OurServices />} />
        <Route path="/VTU_DEV" element={<VTU_DEV />} />
        <Route path="/CardIssuing" element={<CardIssuing />} />
        <Route path="/our-services/payment" element={<PaymentServices />} />
        <Route path="/our-services/telecoms" element={<Telecoms />} />
        <Route
          path="/social-media-marketing"
          element={<SocialMediaMarketing />}
        />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/businessDev" element={<BusinessDev />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/OwnVTU" element={<OwnVTU />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/terms-and-condition" element={<TermsAndCondition />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/team" element={<Team />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/passwordReset" element={<PasswordReset />} />
        <Route path="/newPassword" element={<NewPassword />} />
        <Route path="/emailRoute" element={<VerifyViaEmail />} />
        <Route path="/smsRoute" element={<VerifyViaSms />} />
        <Route path="/dashboard" element={<MainDashboard />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/top-up" element={<TopUpScreen />} />
        <Route path="/fiat-wallet" element={<FiatWallet />} />
        <Route path="/new-wallet" element={<NewWallet />} />
        <Route path="/point-balance" element={<PointBalance />} />
        <Route path="/money-transfer" element={<TransferPage />} />
        <Route path="/to-my-account" element={<ToMyAccountPage />} />
        <Route path="/virtual-account" element={<VirtualAccount />} />
        <Route path="/personal-account" element={<PersonalAccountPage />} />
        <Route path="/business-account" element={<BusinessAccountPage />} />
        <Route path="/airtime-topup" element={<AirtimeTopUp />} />
        <Route path="/airtime-vtu" element={<AirtimeVtu />} />
        <Route path="/add-account" element={<AddAccount />} />
        <Route path="/ngn-virtual-account" element={<NgnVirtualAccount />} />
        <Route path="/cookie-settings" element={<CookiesSettings />} />
        <Route path="/Receipt" element={<Receipt />} />
        <Route path="/withdraw" element={<WithdrawPage />} />
      </Routes>
    </div>
  );
};
