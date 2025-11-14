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
import {SignUp } from "./Components/Screens/CustomersPages/SignUp/SignUp";
import Verification from "./Components/VerificationCode/Verification";
import Login from "./Components/Screens/CustomersPages/login/Login";
import PasswordReset from "./Components/Screens/CustomersPages/Password/PasswordReset";
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
import AirTime from "./Components/AirTimePage/AirTime";
import AirtimeVtu from "./Components/AirTimePage/AirtimeVtu";
import { AddAccount } from "./Components/Dashboard/DashboardComponents/PersonalAccountPage/AddAccountPage/AddAccount";
import NgnVirtualAccount from "./Components/Screens/ngnVirtualAccount/NgnVirtualAccount";
import { CookiesSettings } from "./Components/Screens/Home/Cookie/CookiesSettings";
import { Receipt } from "./Components/Dashboard/DashboardComponents/PersonalAccountPage/Receipt";
//import { WithdrawPage } from "./Components/Dashboard/DashboardComponents/Withdrawal/WithdrawPage";
import { BusinessAccountPage } from "./Components/Dashboard/DashboardComponents/PersonalAccountPage/BusinessAccountPage";
import { WithdrawToMyAccountPage } from "./Components/Dashboard/DashboardComponents/Withdrawal/WithdrawToMyAccountPage";
import { WithdrawToPersonalAccountPage } from "./Components/Dashboard/DashboardComponents/Withdrawal/WithdrawToPersonalAccountPage";
import { WithdrawToBusinessAccountPage } from "./Components/Dashboard/DashboardComponents/Withdrawal/WithdrawToBusinessAccountPage";
import { WithdrawalReceipt } from "./Components/Dashboard/DashboardComponents/Withdrawal/WithdrawalPopUps/WithdrawalReceipt.";
import DigitalServices from "./Components/Screens/digitalServices/DigitalServices";
//import { ToOtherBanks } from "./Components/Dashboard/DashboardComponents/TransferComponent/TransferToOtherBankPages/ToOtherBanks";
//import { OtherBankReceipt } from "./Components/Dashboard/DashboardComponents/TransferComponent/TransferToOtherBankPages/OtherBankPopUp/OtherBankPopUp/OtherBankReceipt";
import GlobalTransfer from "./Components/Dashboard/DashboardComponents/TransferComponent/TransferToOtherBankPages/GlobalTransfer";
//import { InternationalReceipt } from "./Components/Dashboard/DashboardComponents/TransferComponent/TransferToOtherBankPages/OtherBankPopUp/InternationalPopUp/InternationalReceipt";
import FiatConversion from "./Components/CurrencyConversion/FiatConversion";
import DataTopUpPage from "./Components/Dashboard/DashboardComponents/DataTopUpPage/DataTopUpPage";
import CurrencyConversion from "./Components/CurrencyConversion/currencyConversion";
import PointRedeem from "./Components/Dashboard/DashboardComponents/PointRedeem/PointRedeem";
import Referral from "./Components/Referrals/Referral";
import { AirtimeVtuReceipt } from "./Components/AirTimePage/AirtimeVtuReceipt";
import DataBundlesPage from "./Components/Dashboard/DashboardComponents/DataTopUpPage/DataBundles/DataBundlesPage";
import MtnDataTopUpBundle from "./Components/Dashboard/DashboardComponents/DataTopUpPage/DataBundles/MtnDataTopUpBundle/MtnDataTopUpBundle";
//import WithdrawToOtherBanks from "./Components/Dashboard/DashboardComponents/Withdrawal/WithdrawToOtherBanks";
import WalletSummaryPage from "./Components/WalletSummaryPage/WalletSummary";
import SalesSummaryPage from "./Components/SalesSummaryPage/SalesSummary";
// import NotificationsPage from "./Components/NotificationsPage/Notifications";
import { WalletSuccessfulReceipt } from "./Components/WalletSummaryPage/WalletSuccessfulReceipt";
import { WalletFailedReceipt } from "./Components/WalletSummaryPage/WalletFailedReceipt";
import { WalletPendingReceipt } from "./Components/WalletSummaryPage/WalletPendingReceipt";
import { WalletCancelledReceipt } from "./Components/WalletSummaryPage/WalletCancelledReceipt";
import { WalletRefundedReceipt } from "./Components/WalletSummaryPage/WalletRefundedReceipt";
//import { WithdrawToOtherBankReceipt } from "./Components/Dashboard/DashboardComponents/Withdrawal/WithdrawToOtherBanksPopUp/WithdrawToOtherBankReceipt";
import AirtelDataBundle from "./Components/Dashboard/DashboardComponents/DataTopUpPage/DataBundles/AirtelDataBundle/AirtelDataBundle";
import GloDataBundle from "./Components/Dashboard/DashboardComponents/DataTopUpPage/DataBundles/GloDataBundle/GloDataBundle";
import EtisalatDataBundle from "./Components/Dashboard/DashboardComponents/DataTopUpPage/DataBundles/EtisalatDataBundle/EtisalatDataBundle";
import { MtnReceipt } from "./Components/Dashboard/DashboardComponents/DataTopUpPage/DataBundles/MtnDataTopUpBundle/MtnReceipt";
import { AirtelReceipt } from "./Components/Dashboard/DashboardComponents/DataTopUpPage/DataBundles/AirtelDataBundle/AirtelReceipt";
import { EtisalatReceipt } from "./Components/Dashboard/DashboardComponents/DataTopUpPage/DataBundles/EtisalatDataBundle/9MobileReceipt";
import { GloReceipt } from "./Components/Dashboard/DashboardComponents/DataTopUpPage/DataBundles/GloDataBundle/GloReceipt";
import EducationMain from "./Components/EducationPins/educationMain";
import WaecEducationPin from "./Components/EducationPins/waecEducationPin";
import NecoEducationPins from "./Components/EducationPins/NecoEducationPins";
//import JambEducationPin from "./Components/EducationPins/jambEducationPin";
import NabtebEducationPins from "./Components/EducationPins/nabtebEducationPins";
import WaecReceipt from "./Components/EducationPins/ReceiptEducationPins/waecReceipt";
import JambReceipt from "./Components/EducationPins/ReceiptEducationPins/jambReceipt";
import NecoReceipt from "./Components/EducationPins/ReceiptEducationPins/necoReceipt";
import NabtebReceipt from "./Components/EducationPins/ReceiptEducationPins/nabtebReceipt";
import { SuccessfulReceipt } from "./Components/CurrencyConversion/ConversionReceipts/SuccessConversionReceipt";
import { TvSubscription } from "./Components/TvSubscription/TvSubscriptionPage";
import GoTv from "./Components/TvSubscription/TvOne";
import DsTv from "./Components/TvSubscription/TvTwo";
import { RedeemReceipt } from "./Components/Dashboard/DashboardComponents/PointRedeem/RedeemReceipt";
import SmileDataBundle from "./Components/Dashboard/DashboardComponents/DataTopUpPage/DataBundles/SmileDataBundle/SmileDataBundle";
import { SmileReceipt } from "./Components/Dashboard/DashboardComponents/DataTopUpPage/DataBundles/SmileDataBundle/SmileReceipt";
import SpectranetDataBundle from "./Components/Dashboard/DashboardComponents/DataTopUpPage/DataBundles/SpectranetDataBundle/SpectranetDataBundle";
import { SpectranetReceipt } from "./Components/Dashboard/DashboardComponents/DataTopUpPage/DataBundles/SpectranetDataBundle/SpectranetReceipt";
import AddRecipient from "./Components/AirTimePage/AddRecipient";
import SelectRecipient from "./Components/AirTimePage/SelectRecipient";
import DataBundleSelectRecipient from "./Components/Dashboard/DashboardComponents/DataTopUpPage/DataBundles/DataBundleSelectRecipient";
import DataBundleAddRecipient from "./Components/Dashboard/DashboardComponents/DataTopUpPage/DataBundles/DataBundleAddRecipient";
import ElectricitySubscription from "./Components/Dashboard/DashboardComponents/ElectricitySubscription/ElectricitySubscription";
import IKEDC from "./Components/Dashboard/DashboardComponents/ElectricitySubscription/IKEDC";
import { IkedcReceipt } from "./Components/Dashboard/DashboardComponents/ElectricitySubscription/IkedcReceipt";
import AEDC from "./Components/Dashboard/DashboardComponents/ElectricitySubscription/AEDC";
import { AedcReceipt } from "./Components/Dashboard/DashboardComponents/ElectricitySubscription/aedcReceipt";
import EKEDC from "./Components/Dashboard/DashboardComponents/ElectricitySubscription/EKEDC";
import { EkedcReceipt } from "./Components/Dashboard/DashboardComponents/ElectricitySubscription/ekedcReceipt";
import KAEDCO from "./Components/Dashboard/DashboardComponents/ElectricitySubscription/KAEDCO";
import { KaedcoReceipt } from "./Components/Dashboard/DashboardComponents/ElectricitySubscription/kaedcoReceipt";
import { BedcReceipt } from "./Components/Dashboard/DashboardComponents/ElectricitySubscription/bedcReceipt";
import BEDC from "./Components/Dashboard/DashboardComponents/ElectricitySubscription/BEDC";
import EEDC from "./Components/Dashboard/DashboardComponents/ElectricitySubscription/EEDC";
import { EedcReceipt } from "./Components/Dashboard/DashboardComponents/ElectricitySubscription/eedcReceipt";
import { IbedcReceipt } from "./Components/Dashboard/DashboardComponents/ElectricitySubscription/ibedcReceipt";
import IBEDC from "./Components/Dashboard/DashboardComponents/ElectricitySubscription/IBEDC";
import JED from "./Components/Dashboard/DashboardComponents/ElectricitySubscription/JED";
import { JedReceipt } from "./Components/Dashboard/DashboardComponents/ElectricitySubscription/jedReceipt";
import { KedcoReceipt } from "./Components/Dashboard/DashboardComponents/ElectricitySubscription/kedcoReceipt";
import KEDCO from "./Components/Dashboard/DashboardComponents/ElectricitySubscription/KEDCO";
import PHED from "./Components/Dashboard/DashboardComponents/ElectricitySubscription/PHED";
import { PhedReceipt } from "./Components/Dashboard/DashboardComponents/ElectricitySubscription/phedReceipt";
import ProfileSettingsMain from "./Components/My Profile & Account Settings/ProfileSettingsMain";
import EditProfile from "./Components/My Profile & Account Settings/My Profile Page/EditProfile";
import TransactionPage from "./Components/Dashboard/DashboardComponents/TransactionPage/TransactionPage";
import { ElectricityReceipt } from "./Components/Dashboard/DashboardComponents/TransactionPage/TransactionReceipt/ElectricityReceipt";

import { SuccessfullReceipt } from "./Components/Dashboard/DashboardComponents/TransactionPage/TransactionReceipt/SuccessfullReceipt";
import { FailedReceipt } from "./Components/Dashboard/DashboardComponents/TransactionPage/TransactionReceipt/FailedReceipt";
import { PendingReceipt } from "./Components/Dashboard/DashboardComponents/TransactionPage/TransactionReceipt/PendingReceipt";
import { RefundedReceipt } from "./Components/Dashboard/DashboardComponents/TransactionPage/TransactionReceipt/RefundedReceipt";
import { CancelledReceipt } from "./Components/Dashboard/DashboardComponents/TransactionPage/TransactionReceipt/CancelledReceipt";
import ChangeEmail from "./Components/My Profile & Account Settings/My Profile Page/ChangeEmail";
import ChangePhoneNumber from "./Components/My Profile & Account Settings/My Profile Page/ChangePhoneNumber";
import AirtimeConversion from "./Components/Dashboard/DashboardComponents/AirtimeConversion/AirtimeConversion";
import LaunchPage from "./Components/NotificationsPage/LaunchPage";
import LaunchPage2 from "./Components/NotificationsPage/LaunchPage2";
import LaunchPage3 from "./Components/NotificationsPage/LaunchPage3";

import ChangePin from "./Components/My Profile & Account Settings/My Profile Page/ChangePin";
import AccountUpgrade from "./Components/My Profile & Account Settings/My Profile Page/AccountUpgrade";
import PaymentPage from "./Components/Screens/paymentPage/PaymentPage";
import CardPayment from "./Components/Dashboard/DashboardComponents/CardPaymentPage/Cardpayment";
import AddNewCardPayment from "./Components/Dashboard/DashboardComponents/CardPaymentPage/AddNewCardPayment";
import ExistingCardPage from "./Components/Dashboard/DashboardComponents/CardPaymentPage/ExistingCardPage";
import StarTimes from "./Components/TvSubscription/TvThree";
import Showmax from "./Components/TvSubscription/TvFour";
import ToAremxyPlug from "./Components/Dashboard/DashboardComponents/TransferComponent/ToAremxyPlug/ToAremxyPlug";
import { GotvReceipt } from "./Components/TvSubscription/Receipts/GotvReceipt";
import { DstvReceipt } from "./Components/TvSubscription/Receipts/DstvReceipt";
import { StarTimesReceipt } from "./Components/TvSubscription/Receipts/StarTimesReceipt";
import { ShowmaxReceipt } from "./Components/TvSubscription/Receipts/ShowmaxReceipt";
import FundWithCard from "./Components/Dashboard/DashboardComponents/CardPaymentPage/FundWithCard";
import { CardPaymentReceipt } from "./Components/Dashboard/DashboardComponents/CardPaymentPage/CardPaymentReceipt";
import GlobalTransferSelectRecipient from "./Components/Add&SelectRecipient/GlobalSelectRecipient/GlobalTransferSelectRecipient";
import GlobalTransferAddRecipient from "./Components/Add&SelectRecipient/GlobalAddRecipient/GlobalTransferAddRecipient";
import ContactTeam from "./Components/Dashboard/DashboardComponents/AirtimeConversion/ContactTeam";
import ToAremxyMain from "./Components/Dashboard/DashboardComponents/TransferComponent/ToAremxyPlug/ToAremxyMain";
import { AremxyMainReceipt } from "./Components/Dashboard/DashboardComponents/TransferComponent/ToAremxyPlug/AremxyMainReceipt";
import AremxyAddUser from "./Components/Dashboard/DashboardComponents/TransferComponent/ToAremxyPlug/AremxyAddUser";
import { AirtimeReceipt } from "./Components/Dashboard/DashboardComponents/AirtimeConversion/AirtimeReceipt";
import EditSelectRecipient from "./Components/Add&SelectRecipient/GlobalSelectRecipient/EditSelectRecipient";
import ContentMarketing from "./Components/Screens/ContentMarketing/ContentMarketing";
import SEOMarketing from "./Components/Screens/SEOMarketing/SEOMarketing";
import EmailMarketing from "./Components/Screens/emailMarketing/EmailMarketing";
import ProductDesign from "./Components/Screens/productDesign/ProductDesign";
import GraphicDesign from "./Components/Screens/graphicDesign/GraphicDesign";
import NotificationsPage2 from "./Components/NotificationsPage/Notifications2";
import { WaecFailedReceipt } from "./Components/EducationPins/ReceiptEducationPins/WaecFailedReceipt";
import { NecoFailedReceipt } from "./Components/EducationPins/ReceiptEducationPins/NecoFailedReceipt";
import { NabtebFailedReceipt } from "./Components/EducationPins/ReceiptEducationPins/NabtebFailedReceipt";
import { AirtimeReceiptFailed } from "./Components/AirTimePage/AirtimeReceiptFailed";
import { MtnFailedReceipt } from "./Components/Dashboard/DashboardComponents/DataTopUpPage/DataBundles/MtnDataTopUpBundle/MtnFailedReceipt";
import { AirtelFailedReceipt } from "./Components/Dashboard/DashboardComponents/DataTopUpPage/DataBundles/AirtelDataBundle/AirtelFailedReceipt";
import { GloFailedReceipt } from "./Components/Dashboard/DashboardComponents/DataTopUpPage/DataBundles/GloDataBundle/GloFailedReceipt";
import { EtisalatFailedReceipt } from "./Components/Dashboard/DashboardComponents/DataTopUpPage/DataBundles/EtisalatDataBundle/9MobileFailedReceipt";
import { BedcReceiptFailed } from "./Components/Dashboard/DashboardComponents/ElectricitySubscription/bedcReceiptFailed";
import { AedcReceiptFailed } from "./Components/Dashboard/DashboardComponents/ElectricitySubscription/aedcReceiptFailed";
import { EedcReceiptFailed } from "./Components/Dashboard/DashboardComponents/ElectricitySubscription/eedcReceiptFailed";
import { EkedcReceiptFailed } from "./Components/Dashboard/DashboardComponents/ElectricitySubscription/ekedcReceiptFailed";
import { IbedcReceiptFailed } from "./Components/Dashboard/DashboardComponents/ElectricitySubscription/ibedcReceiptFailed";
import { IkedcReceiptFailed } from "./Components/Dashboard/DashboardComponents/ElectricitySubscription/IkedcReceiptFailed";
import { JedReceiptFailed } from "./Components/Dashboard/DashboardComponents/ElectricitySubscription/jedReceiptFailed";
import { KaedcoReceiptFailed } from "./Components/Dashboard/DashboardComponents/ElectricitySubscription/kaedcoReceiptFailed";
import { KedcoReceiptFailed } from "./Components/Dashboard/DashboardComponents/ElectricitySubscription/kedcoReceiptFailed";
import { PhedReceiptFailed } from "./Components/Dashboard/DashboardComponents/ElectricitySubscription/phedReceiptFailed";
import BvnVerification from "./Components/My Profile & Account Settings/Account Verification/BvnVerification";
import AccountVerficationPage from "./Components/My Profile & Account Settings/Account Verification/AccountVerficationPage";
import { ProtectedRoute } from "./Components/ProtectedRoute";
import EduReceipt from "./Components/Dashboard/DashboardComponents/TransactionPage/TransactionReceipt/EduReceipt";
import { TvSubReceipt } from "./Components/Dashboard/DashboardComponents/TransactionPage/TransactionReceipt/Tv_SubReceipt";
import { AirtimeTransReceipt } from "./Components/Dashboard/DashboardComponents/TransactionPage/TransactionReceipt/AirtimeTransReceipt";
import { DataTransReceipt } from "./Components/Dashboard/DashboardComponents/TransactionPage/TransactionReceipt/DataTransReceipt";
import { TransferReceipt } from "./Components/Dashboard/DashboardComponents/TransactionPage/TransactionReceipt/TransferReceipt";
import { VirtualAccountReceipt } from "./Components/Dashboard/DashboardComponents/TransactionPage/TransactionReceipt/VirtualAccountReceipt";
import { ThemeHandler } from "./Components/ApiCollection.jsx/ApiBuck";
import { PointRedeemReceipt } from "./Components/Dashboard/DashboardComponents/TransactionPage/TransactionReceipt/PointRedeemReceipt";

export const Router = () => {

  return (
    <div>
      <ThemeHandler/>
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
        <Route path="/content-marketing" element={<ContentMarketing/>}/>
        <Route path="/seo-marketing" element={<SEOMarketing/>}/>
        <Route path="/EmailMarketing" element={<EmailMarketing/>}/>
        <Route path="/ProductDesign" element={<ProductDesign/>}/>
        <Route path="/GraphicDesign" element={<GraphicDesign/>}/>
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/businessDev" element={<BusinessDev />} />
        <Route path="/DigitalServices" element={<DigitalServices />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/OwnVTU" element={<OwnVTU />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/terms-and-condition" element={<TermsAndCondition />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/team" element={<Team />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/Verification" element={<Verification/>}/>
        <Route path="/passwordReset" element={<PasswordReset />} />
        <Route path="/newPassword" element={<NewPassword />} />
        <Route path="/dashboard" element={
          <ProtectedRoute>
          <MainDashboard />
          </ProtectedRoute>
          } />
        {/* To redirect the user back to the login page if there is attempt without login or authoorisation Token */}

        <Route path="/wallet" element={
          <ProtectedRoute>
          <Wallet />
          </ProtectedRoute>
          } />
        <Route path="/top-up" element={
          <ProtectedRoute>
          <TopUpScreen />
          </ProtectedRoute>
          } />
        <Route path="/fiat-wallet" element={
          <ProtectedRoute>
          <FiatWallet />
          </ProtectedRoute>
          } />
        <Route path="/new-wallet" element={<ProtectedRoute>
          <NewWallet />
          </ProtectedRoute>
          } />
        <Route path="/point-balance" element={<ProtectedRoute>
          <PointBalance />
          </ProtectedRoute>
         } />
        <Route path="/money-transfer" element={
          <ProtectedRoute>
          <TransferPage />
          </ProtectedRoute>
          } />
        <Route path="/to-my-account" element={
          <ProtectedRoute>
          <ToMyAccountPage/>
          </ProtectedRoute>} />
        <Route path="/virtual-account" element={
          <ProtectedRoute>
          <VirtualAccount/>
          </ProtectedRoute>
          } />
        <Route path="/personal-account" element={
          <ProtectedRoute>
              <PersonalAccountPage />
          </ProtectedRoute>
        
          } />
        <Route path="/business-account" element={
          <ProtectedRoute>
          <BusinessAccountPage />
          </ProtectedRoute>
          } />
        <Route path="/to-aremxyplug" element={
          <ProtectedRoute>
          <ToAremxyPlug />
          </ProtectedRoute>
          } />
        <Route path="/to-aremxymain" element={
          <ProtectedRoute>
          <ToAremxyMain />
          </ProtectedRoute>} />
        <Route path="/to-aremxymain-receipt" element={
          <ProtectedRoute>
          <AremxyMainReceipt />
          </ProtectedRoute>
          } />
        <Route path="/aremxy-add-user" element={
          <ProtectedRoute>
          <AremxyAddUser />
          </ProtectedRoute>
          } />
        {/* <Route path="/aremxy-select-user" element={
          <ProtectedRoute>
          <AremxySelectUser />
          </ProtectedRoute>} /> */}
        <Route path="/airtime-topup" element={
          <ProtectedRoute>
          <AirTime />
          </ProtectedRoute>
          } />
        <Route path="/airtime-vtu" element={
          <ProtectedRoute>
          <AirtimeVtu />
          </ProtectedRoute>
          } />
        <Route path="/airtime-vtu-receipt" element={
          <ProtectedRoute>
          <AirtimeVtuReceipt />
          </ProtectedRoute>
          } />
        <Route path="/airtime-receipt-failed" element={
          <ProtectedRoute>
          <AirtimeReceiptFailed />
          </ProtectedRoute>
          } />
        <Route path="/add-vtu-recipient" element={
          <ProtectedRoute>
          <AddRecipient />
          </ProtectedRoute>
          } />
        {/* <Route path="/select-vtu-recipient" element={
          <ProtectedRoute>
          <SelectRecipient />
          </ProtectedRoute>
          } /> */}
        <Route path="/add-account" element={
          <ProtectedRoute>
          <AddAccount />
          </ProtectedRoute>
          } />
        <Route path="/ngn-virtual-account" element={
          <ProtectedRoute>
          <NgnVirtualAccount />
          </ProtectedRoute>
          } />
        <Route path="/cookie-settings" element={
          <CookiesSettings />
          } />
        <Route path="/Receipt" element={
          <ProtectedRoute>
          <Receipt />
          </ProtectedRoute>} />
        {/* <Route path="/withdraw" element={
          <ProtectedRoute>
          <WithdrawPage />
          </ProtectedRoute>} /> */}
        <Route path="/wallet-summary" element={
          <ProtectedRoute>
          <WalletSummaryPage/>
          </ProtectedRoute>} />
        <Route path="/sales-summary" element={
          <ProtectedRoute>
          <SalesSummaryPage />
          </ProtectedRoute>
          } />
        {/* <Route path="/notifications" element={<NotificationsPage />} /> */}
        <Route path="/notifications" element={
          <ProtectedRoute>
          <NotificationsPage2 />
          </ProtectedRoute>} />
        <Route path="/launch-page" element={<LaunchPage />} />
        <Route path="/launch-page2" element={<LaunchPage2 />} />
        <Route path="/launch-page3" element={<LaunchPage3 />} />
        <Route
          path="/wallet-successful-receipt"
          element={
            <ProtectedRoute>
          <WalletSuccessfulReceipt />
          </ProtectedRoute>
        }
        />
        <Route
          path="/wallet-failed-receipt"
          element={
            <ProtectedRoute>
          <WalletFailedReceipt />
          </ProtectedRoute>
        }
        />
        <Route
          path="/wallet-pending-receipt"
          element={
            <ProtectedRoute>
               <WalletPendingReceipt />
    </ProtectedRoute>}
        />
        <Route
          path="/wallet-cancelled-receipt"
          element={
            <ProtectedRoute>
          <WalletCancelledReceipt />
          </ProtectedRoute>
        }
        />
        <Route
          path="/wallet-refunded-receipt"
          element={<ProtectedRoute>
          <WalletRefundedReceipt />
          </ProtectedRoute>}
        />
        <Route
          path="/withdraw-to-account"
          element={<ProtectedRoute>
          <WithdrawToMyAccountPage />
          </ProtectedRoute>}
        />

        <Route
          path="/withdraw-to-personalaccount"
          element={
            <ProtectedRoute>
          <WithdrawToPersonalAccountPage />
          </ProtectedRoute>}
        />
        <Route
          path="/withdraw-to-businessaccount"
          element={
            <ProtectedRoute>
          <WithdrawToBusinessAccountPage />
          </ProtectedRoute>}
        />
        <Route path="/withdrawal-receipt" element={
          <ProtectedRoute>
          <WithdrawalReceipt />
          </ProtectedRoute>} />
        {/* <Route path="/To-other-banks" element={
          <ProtectedRoute>
          <ToOtherBanks />
          </ProtectedRoute>} /> */}
        {/* <Route
          path="/withdraw-to-other-banks"
          element={
            <ProtectedRoute>
          <WithdrawToOtherBanks />
          </ProtectedRoute>}
        /> */}
        {/* <Route path="/other-bank-receipt" element={
          <ProtectedRoute>
          <OtherBankReceipt />
          </ProtectedRoute>
          } /> */}
        {/* <Route
          path="/other-bank-withdrawalreceipt"
          element={<ProtectedRoute>
          <WithdrawToOtherBankReceipt />
          </ProtectedRoute>}
        /> */}
        {/* <Route
          path="/international-bank-receipt"
          element={<ProtectedRoute>
          <InternationalReceipt />
          </ProtectedRoute>}
        /> */}
        <Route path="/redeem-receipt" element={<RedeemReceipt />} />
        <Route path="/ikedc-receipt" element={<ProtectedRoute>
          <IkedcReceipt />
          </ProtectedRoute>} />
        <Route path="/ikedc-receipt-failed" element={
          <ProtectedRoute>
          <IkedcReceiptFailed />
          </ProtectedRoute>
          } />
        <Route path="/aedc-receipt" element={
          <ProtectedRoute>
          <AedcReceipt />
          </ProtectedRoute>} />
        <Route path="/aedc-receipt-failed" element={
          <ProtectedRoute>
          <AedcReceiptFailed />
          </ProtectedRoute>} />
        <Route path="/ekedc-receipt" element={
          <ProtectedRoute>
          <EkedcReceipt />
          </ProtectedRoute>} />
        <Route path="/ekedc-receipt-failed" element={
          <ProtectedRoute>
          <EkedcReceiptFailed />
          </ProtectedRoute>} />
        <Route path="/eedc-receipt" element={
          <ProtectedRoute>
          <EedcReceipt />
          </ProtectedRoute>} />
        <Route path="/eedc-receipt-failed" element={
          <ProtectedRoute>
          <EedcReceiptFailed />
          </ProtectedRoute>} />
        <Route path="/kaedco-receipt" element={
          <ProtectedRoute>
          <KaedcoReceipt />
          </ProtectedRoute>} />
        <Route path="/kaedco-receipt-failed" element={
          <ProtectedRoute>
          <KaedcoReceiptFailed />
          </ProtectedRoute>} />
        <Route path="/bedc-receipt" element={
          <ProtectedRoute>
          <BedcReceipt />
          </ProtectedRoute>} />
        <Route path="/bedc-receipt-failed" element={
          <ProtectedRoute>
          <BedcReceiptFailed />
          </ProtectedRoute>} />
        <Route path="/ibedc-receipt" element={
          <ProtectedRoute>
          <IbedcReceipt />
          </ProtectedRoute>} />
        <Route path="/ibedc-receipt-failed" element={
          <ProtectedRoute>
          <IbedcReceiptFailed />
          </ProtectedRoute>} />
        <Route path="/jed-receipt" element={
          <ProtectedRoute>
          <JedReceipt />
          </ProtectedRoute>} />
        <Route path="/jed-receipt-failed" element={
          <ProtectedRoute>
          <JedReceiptFailed />
          </ProtectedRoute>
          } />
        <Route path="/kedco-receipt" element={
          <ProtectedRoute>
          <KedcoReceipt />
          </ProtectedRoute>
          } />
        <Route path="/kedco-receipt-failed" element={
          <ProtectedRoute>
          <KedcoReceiptFailed />
          </ProtectedRoute>
          } />
        <Route path="/phed-receipt" element={
          <ProtectedRoute>
          <PhedReceipt />
          </ProtectedRoute>
          } />
        <Route path="/phed-receipt-failed" element={
          <ProtectedRoute>
          <PhedReceiptFailed />
          </ProtectedRoute>} />
        <Route path="/bedc" element={
          <ProtectedRoute>
          <BEDC />
          </ProtectedRoute>
          } />
        <Route path="/phed" element={
          <ProtectedRoute>
          <PHED />
          </ProtectedRoute>} />
        <Route path="/kedco" element={
          <ProtectedRoute>
          <KEDCO />
          </ProtectedRoute>} />
        <Route path="/jed" element={
          <ProtectedRoute>
          <JED />
          </ProtectedRoute>
          } />
        <Route path="/ibedc" element={
          <ProtectedRoute>
          <IBEDC />
          </ProtectedRoute>} />
        <Route path="/eedc" element={
          <ProtectedRoute>
          <EEDC />
          </ProtectedRoute>} />
        <Route path="/kaedco" element={
          <ProtectedRoute>
          <KAEDCO />
          </ProtectedRoute>
          } />
        <Route path="/ikedc" element={
          <ProtectedRoute>
          <IKEDC />
          </ProtectedRoute>} />
        <Route path="/aedc" element={
          <ProtectedRoute>
          <AEDC />
          </ProtectedRoute>} />
        <Route path="/ekedc" element={
          <ProtectedRoute>
          <EKEDC />
          </ProtectedRoute>
          } />
        <Route path="/airtime-conversion" element={
          <ProtectedRoute>
          <AirtimeConversion />
          </ProtectedRoute>} />
        <Route path="/airtime-receipt" element={
          <ProtectedRoute>
          <AirtimeReceipt />
          </ProtectedRoute>} />
        <Route path="/contact-team" element={<ContactTeam />} />
        <Route
          path="/electricity-subscription"
          element={
            <ProtectedRoute>
          <ElectricitySubscription />
          </ProtectedRoute>
        }
        />
        <Route path="/global-transfer" element={
          <ProtectedRoute>
          <GlobalTransfer />
          </ProtectedRoute>
          } />
        <Route path="/point-redeem" element={
          <ProtectedRoute>
          <PointRedeem />
          </ProtectedRoute>
          } />
        <Route path="/fiat" element={
          <ProtectedRoute>
          <FiatConversion />
          </ProtectedRoute>
          } />
        <Route path="/currencyConversion" element={
          <ProtectedRoute>
          <CurrencyConversion />
          </ProtectedRoute>
          } />
        <Route path="/data-top-up" element={
          <ProtectedRoute>
          <DataTopUpPage />
          </ProtectedRoute>
          } />
        <Route path="/data-bundles" element={
          <ProtectedRoute>
          <DataBundlesPage />
          </ProtectedRoute>
          } />
        <Route path="/My-Referral" element={
          <ProtectedRoute>
          <Referral />

          </ProtectedRoute>
          } />
        <Route path="/MtnDataTopUpBundle" element={
          <ProtectedRoute>
          <MtnDataTopUpBundle />
          </ProtectedRoute>
          } />
        <Route path="/SuccessfulConversion" element={
          <ProtectedRoute>
          <SuccessfulReceipt />
          </ProtectedRoute>} />
        <Route path="/MtnReceipt" element={
          <ProtectedRoute>
          <MtnReceipt />
          </ProtectedRoute>
          } />
        <Route path="/AirtelDataBundle" element={
      <ProtectedRoute>
          <AirtelDataBundle />
          </ProtectedRoute>
          } />
        <Route path="/GloDataBundle" element={
          <ProtectedRoute>
          <GloDataBundle />
          </ProtectedRoute>
          } />
        <Route path="/EtisalatDataBundle" element={
          <ProtectedRoute>
          <EtisalatDataBundle />
          </ProtectedRoute>
          } />
        <Route path="/AirtelReceipt" element={
          <ProtectedRoute>
          <AirtelReceipt />
          </ProtectedRoute>} />
        <Route path="/EtisalatReceipt" element={
          <ProtectedRoute>
          <EtisalatReceipt />
          </ProtectedRoute>
          } />
        <Route path="/GloReceipt" element={
          <ProtectedRoute>
          <GloReceipt />
          </ProtectedRoute>
          } />
        <Route
          path="/DataBundleSelectRecipient"
          element={
            <ProtectedRoute>
          <DataBundleSelectRecipient />
          </ProtectedRoute>
        }
        />
        <Route
          path="/DataBundleAddRecipient"
          element={
            <ProtectedRoute>
          <DataBundleAddRecipient />
          </ProtectedRoute>}
        />
        <Route path="/TvSubscription" element={
          <ProtectedRoute>
            <TvSubscription />
            </ProtectedRoute>
          
          } />
        <Route path="/GoTv" element={
          <ProtectedRoute>
          <GoTv />
          </ProtectedRoute>} />
        <Route path="/EducationPins" element={
          <ProtectedRoute>
          <EducationMain />
          </ProtectedRoute>
          } />
        <Route path="/WaecEducationPin" element={
          <ProtectedRoute>
          <WaecEducationPin />
          </ProtectedRoute>
          } />
        <Route path="/NecoEducationPin" element={
          <ProtectedRoute>
          <NecoEducationPins />
          </ProtectedRoute>
          } />
        <Route path="/NabtebEducationPin" element={
          <ProtectedRoute>
          <NabtebEducationPins />
          </ProtectedRoute>
          } />
        {/* <Route path="/JambEducationPin" element={
          <ProtectedRoute>
          <JambEducationPin />
          </ProtectedRoute>
          } /> */}
        <Route path="/WaecReceipt" element={
          <ProtectedRoute>
          <WaecReceipt />
          </ProtectedRoute>} />
        <Route path="/JambReceipt" element={
          <ProtectedRoute>
          <JambReceipt />
          </ProtectedRoute>

          } />
        <Route path="/NecoReceipt" element={
          <ProtectedRoute>
          <NecoReceipt />
          </ProtectedRoute>} />
        <Route path="/NabtebReceipt" element={
          <ProtectedRoute>
          <NabtebReceipt />
          </ProtectedRoute>} />
        <Route path="/TvSubscription" element={
          <ProtectedRoute>
          <TvSubscription />
          </ProtectedRoute>
          } />
        <Route path="/GoTv" element={
          <ProtectedRoute>
          <GoTv />
          </ProtectedRoute>} />
        <Route path="/DsTv" element={
          <ProtectedRoute>
          <DsTv />
          </ProtectedRoute>
          } />
        <Route path="/StarTimes" element={
          <ProtectedRoute>
          <StarTimes />
          </ProtectedRoute>
          } />
        <Route path="/Showmax" element={
          <ProtectedRoute>
          <Showmax />
          </ProtectedRoute>
          } />
        <Route path="/GotvReceipt" element={
          <ProtectedRoute>
          <GotvReceipt />
          </ProtectedRoute>} />
        <Route path="/DstvReceipt" element={
          <ProtectedRoute>
          <DstvReceipt />
          </ProtectedRoute>
          } />
        <Route path="/StarTimesReceipt" element={
          <ProtectedRoute>
          <StarTimesReceipt />
          </ProtectedRoute>} />
        <Route path="/ShowmaxReceipt" element={
          <ProtectedRoute>
          <ShowmaxReceipt />
          </ProtectedRoute>
          } />
        <Route path="/SuccessfulConversion" element={
          <ProtectedRoute>
          <SuccessfulReceipt />
          </ProtectedRoute>
          } />
        <Route path="/SmileDataBundle" element={
          <ProtectedRoute>
          <SmileDataBundle />
          </ProtectedRoute>
          } />
        <Route path="/Smilereceipt" element={
          <ProtectedRoute>
          <SmileReceipt />
          </ProtectedRoute>
          } />
        <Route
          path="/SpectranetDataBundle"
          element={
            <ProtectedRoute>
          <SpectranetDataBundle />
          </ProtectedRoute>
        }
        />
        <Route path="/SpectranetReceipt" element={
          <ProtectedRoute>
          <SpectranetReceipt />
          </ProtectedRoute>
          } />
        <Route
          path="/DataBundleSelectRecipient"
          element={
            <ProtectedRoute>
          <DataBundleSelectRecipient />
          </ProtectedRoute>}
        />
        <Route
          path="/DataBundleAddRecipient"
          element={
            <ProtectedRoute>
          <DataBundleAddRecipient />
          </ProtectedRoute>}
        />
        <Route path="/ProfileSettingMain" element={
          <ProtectedRoute>
          <ProfileSettingsMain />
        </ProtectedRoute>
          } />
        <Route path="/EditProfile" element={
          <ProtectedRoute>
          <EditProfile />
          </ProtectedRoute>
          } />
        <Route path="/TransactionPage" element={
          <ProtectedRoute>
          <TransactionPage />
          </ProtectedRoute>
          } />
        <Route path="/SuccessfullReceipt" element={
          <ProtectedRoute>
          <SuccessfullReceipt />
          </ProtectedRoute>
          } />
        <Route path="/ElectricityReceipt" element={
          <ProtectedRoute>
          <ElectricityReceipt />
          </ProtectedRoute>
          } />
        <Route path="/EduReceipt" element={
          <ProtectedRoute>
          <EduReceipt />
          </ProtectedRoute>
          } />
        <Route path="/TvSubReceipt" element={
          <ProtectedRoute>
          <TvSubReceipt/>
          </ProtectedRoute>
          } />
            <Route path="/PointRedeemReceipt" element={
          <ProtectedRoute>
          <PointRedeemReceipt/>
          </ProtectedRoute>
          } />
        <Route path="/AirtimeTransReceipt" element={
          <ProtectedRoute>
          <AirtimeTransReceipt/>
          </ProtectedRoute>
          } />
        <Route path="/DataTransReceipt" element={
          <ProtectedRoute>
          <DataTransReceipt/>
          </ProtectedRoute>
          } />
        <Route path="/TransferReceipt" element={
          <ProtectedRoute>
          <TransferReceipt/>
          </ProtectedRoute>
          } />
        <Route path="/VirtualAccountReceipt" element={
          <ProtectedRoute>
          <VirtualAccountReceipt/>
          </ProtectedRoute>
          } />
        <Route path="/FailedReceipt" element={
          <ProtectedRoute>
          <FailedReceipt />
          </ProtectedRoute>
          } />
        <Route path="/PendingReceipt" element={
          <ProtectedRoute>
          <PendingReceipt />
          </ProtectedRoute>
          } />
        <Route path="/RefundedReceipt" element={
          <ProtectedRoute>
          <RefundedReceipt />
          </ProtectedRoute>
          } />
        <Route path="/CancelledReceipt" element={
          <ProtectedRoute>
          <CancelledReceipt />
          </ProtectedRoute>
          } />
        <Route path="/LaunchPage" element={
          <ProtectedRoute>
          <LaunchPage />
          </ProtectedRoute>
          } />
        <Route path="/ChangeEmail" element={
          <ProtectedRoute>
          <ChangeEmail />
          </ProtectedRoute>
          } />
        <Route path="/ChangePhoneNumber" element={
          <ProtectedRoute>
          <ChangePhoneNumber />
          </ProtectedRoute>
          } />
        <Route path="/ChangePin" element={
          <ProtectedRoute>
          <ChangePin />
          </ProtectedRoute>
          } />
        <Route path="/AccountUpgrade" element={
          <ProtectedRoute>
          <AccountUpgrade />
          </ProtectedRoute>
          } />
        <Route path="/payment-page" element={
          <ProtectedRoute>
          <PaymentPage />
          </ProtectedRoute>
          } />
        <Route path="/CardPayment" element={
          <ProtectedRoute>
          <CardPayment />
          </ProtectedRoute>
          } />
        <Route path="/AddNewCardPayment" element={
          <ProtectedRoute>
          <AddNewCardPayment />
          </ProtectedRoute>
          } />
        <Route path="/ExistingCardPage" element={
          <ProtectedRoute>
          <ExistingCardPage />
          </ProtectedRoute>
          } />
        <Route path="/FundWithCard" element={
          <ProtectedRoute>
          <FundWithCard />
          </ProtectedRoute>
          } />
        <Route path="/CardPaymentReceipt" element={
          <ProtectedRoute>
          <CardPaymentReceipt />
          </ProtectedRoute>
          } />
        <Route path="/MtnfailedReceipt" element={
          <ProtectedRoute>
          <MtnFailedReceipt/>
          </ProtectedRoute>
          }/>
        <Route path="/AirtelFailedReceipt" element={
          <ProtectedRoute>
          <AirtelFailedReceipt/>
          </ProtectedRoute>
          }/>
        <Route path="GloFailedReceipt" element={
          <ProtectedRoute>
          <GloFailedReceipt/>
          </ProtectedRoute>
          }/>
        <Route path="EtisalatFailedReceipt" element={
          <ProtectedRoute>
          <EtisalatFailedReceipt/>
          </ProtectedRoute>
          }/>
        <Route
          path="/GlobalTransferSelectRecipient"
          element={
            <ProtectedRoute>
          <GlobalTransferSelectRecipient />
          </ProtectedRoute>
        }
        />
        <Route
          path="/GlobalTransferAddRecipient"
          element={
            <ProtectedRoute>
          <GlobalTransferAddRecipient />
          </ProtectedRoute>
        }
        />
        <Route path="/EditSelectRecipient" element={
          <ProtectedRoute>
          <EditSelectRecipient />
          </ProtectedRoute>
          } />
        <Route path="/BVNVerification" element={
          <ProtectedRoute>
          <BvnVerification/>
          </ProtectedRoute>
          } />
        <Route path="/AccountVerification" element={
          <ProtectedRoute>
          <AccountVerficationPage/>
          </ProtectedRoute>} />
        <Route path="/ProfileSettingMain/AccountVerification" element={
          <ProtectedRoute>
          <ProfileSettingsMain />
          </ProtectedRoute>
          } />


        <Route path ="/WaecFailedReceipt" element={
          <ProtectedRoute>
          <WaecFailedReceipt/>
          </ProtectedRoute>
          }/>
        <Route path = "/NecoFailedReceipt" element = {
          <ProtectedRoute>
          <NecoFailedReceipt/>
          </ProtectedRoute>
          }/>
        <Route path="/NabtebFailedReceipt" element= {
          <ProtectedRoute>
          <NabtebFailedReceipt/>
          </ProtectedRoute>}/>
        
      </Routes>
    </div>
  );
};
