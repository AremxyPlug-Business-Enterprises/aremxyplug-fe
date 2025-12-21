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
// import { WithdrawPage } from "./Components/Dashboard/DashboardComponents/Withdrawal/WithdrawPage";
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
import { TestingDesign } from "./Components/TestingPhase/TestingDesign";
import NotFound from "./Components/NotFound";
export   const RoutingObjectLimitScope = [
     { id: 1, Routepath: "/", RouteComponent: <Home /> },
  { id: 2, Routepath: "/About-us", RouteComponent: <AboutUs /> },
  { id: 3, Routepath: "/Solutions", RouteComponent: <Solution /> },
  { id: 4, Routepath: "/our-services", RouteComponent: <OurServices /> },
  { id: 5, Routepath: "/VTU_DEV", RouteComponent: <VTU_DEV /> },
  { id: 6, Routepath: "/CardIssuing", RouteComponent: <CardIssuing /> },
  { id: 7, Routepath: "/our-services/payment", RouteComponent: <PaymentServices /> },
  { id: 8, Routepath: "/our-services/telecoms", RouteComponent: <Telecoms /> },
  { id: 9, Routepath: "/social-media-marketing", RouteComponent: <SocialMediaMarketing /> },
  { id: 10, Routepath: "/content-marketing", RouteComponent: <ContentMarketing /> },
  { id: 11, Routepath: "/seo-marketing", RouteComponent: <SEOMarketing /> },
  { id: 12, Routepath: "/EmailMarketing", RouteComponent: <EmailMarketing /> },
  { id: 13, Routepath: "/ProductDesign", RouteComponent: <ProductDesign /> },
  { id: 14, Routepath: "/GraphicDesign", RouteComponent: <GraphicDesign /> },
  { id: 15, Routepath: "/ContactUs", RouteComponent: <ContactUs /> },
  { id: 16, Routepath: "/businessDev", RouteComponent: <BusinessDev /> },
  { id: 17, Routepath: "/DigitalServices", RouteComponent: <DigitalServices /> },
  { id: 18, Routepath: "/OwnVTU", RouteComponent: <OwnVTU /> },
  { id: 19, Routepath: "/pricing", RouteComponent: <Pricing /> },
  { id: 20, Routepath: "/faq", RouteComponent: <Faq /> },
   { id: 21, Routepath: "/terms-and-condition", RouteComponent: <TermsAndCondition /> },
  { id: 22, Routepath: "/privacy-policy", RouteComponent: <PrivacyPolicy /> },
  { id: 23, Routepath: "/Login", RouteComponent: <Login /> },
  { id: 24, Routepath: "/team", RouteComponent: <Team /> },
  { id: 25, Routepath: "/signUp", RouteComponent: <SignUp /> },
  { id: 26, Routepath: "/Verification", RouteComponent: <Verification /> },
  { id: 27, Routepath: "/passwordReset", RouteComponent: <PasswordReset /> },
  { id: 28, Routepath: "/newPassword", RouteComponent: <NewPassword /> },
  { id: 29, Routepath: "/dashboard", RouteComponent: <ProtectedRoute><MainDashboard /></ProtectedRoute> },
  { id: 30, Routepath: "/wallet", RouteComponent: <ProtectedRoute><Wallet /></ProtectedRoute> },
  { id: 31, Routepath: "/top-up", RouteComponent: <ProtectedRoute><TopUpScreen /></ProtectedRoute> },
  { id: 32, Routepath: "/fiat-wallet", RouteComponent: <ProtectedRoute><FiatWallet /></ProtectedRoute> },
  { id: 33, Routepath: "/new-wallet", RouteComponent: <ProtectedRoute><NewWallet /></ProtectedRoute> },
  { id: 34, Routepath: "/point-balance", RouteComponent: <ProtectedRoute><PointBalance /></ProtectedRoute> },
  { id: 35, Routepath: "/money-transfer", RouteComponent: <ProtectedRoute><TransferPage /></ProtectedRoute> },
  { id: 36, Routepath: "/to-my-account", RouteComponent: <ProtectedRoute><ToMyAccountPage /></ProtectedRoute> },
  { id: 37, Routepath: "/virtual-account", RouteComponent: <ProtectedRoute><VirtualAccount /></ProtectedRoute> },
  { id: 38, Routepath: "/personal-account", RouteComponent: <ProtectedRoute><PersonalAccountPage /></ProtectedRoute> },
  { id: 39, Routepath: "/business-account", RouteComponent: <ProtectedRoute><BusinessAccountPage /></ProtectedRoute> },
  { id: 40, Routepath: "/to-aremxyplug", RouteComponent: <ProtectedRoute><ToAremxyPlug /></ProtectedRoute> },
  { id: 41, Routepath: "/to-aremxymain", RouteComponent: <ProtectedRoute><ToAremxyMain /></ProtectedRoute> },
  { id: 42, Routepath: "/to-aremxymain-receipt", RouteComponent: <ProtectedRoute><AremxyMainReceipt /></ProtectedRoute> },
  { id: 43, Routepath: "/aremxy-add-user", RouteComponent: <ProtectedRoute><AremxyAddUser /></ProtectedRoute> },
  { id: 44, Routepath: "/airtime-topup", RouteComponent: <ProtectedRoute><AirTime /></ProtectedRoute> },
   { id: 45, Routepath: "/airtime-vtu", RouteComponent: <ProtectedRoute><AirtimeVtu /></ProtectedRoute> },
  { id: 46, Routepath: "/airtime-vtu-receipt", RouteComponent: <ProtectedRoute><AirtimeVtuReceipt /></ProtectedRoute> },
  { id: 47, Routepath: "/airtime-receipt-failed", RouteComponent: <ProtectedRoute><AirtimeReceiptFailed /></ProtectedRoute> },
  { id: 48, Routepath: "/add-vtu-recipient", RouteComponent: <ProtectedRoute><AddRecipient /></ProtectedRoute> },
  { id: 49, Routepath: "/add-account", RouteComponent: <ProtectedRoute><AddAccount /></ProtectedRoute> },
  { id: 50, Routepath: "/ngn-virtual-account", RouteComponent: <ProtectedRoute><NgnVirtualAccount /></ProtectedRoute> },
  { id: 51, Routepath: "/cookie-settings", RouteComponent: <CookiesSettings /> },
  { id: 52, Routepath: "/Receipt", RouteComponent: <ProtectedRoute><Receipt /></ProtectedRoute> },
  { id: 53, Routepath: "/wallet-summary", RouteComponent: <ProtectedRoute><WalletSummaryPage /></ProtectedRoute> },
  { id: 54, Routepath: "/sales-summary", RouteComponent: <ProtectedRoute><SalesSummaryPage /></ProtectedRoute> },
  { id: 55, Routepath: "/notifications", RouteComponent: <ProtectedRoute><NotificationsPage2 /></ProtectedRoute> },
  { id: 56, Routepath: "/launch-page", RouteComponent: <LaunchPage /> },
  { id: 57, Routepath: "/launch-page2", RouteComponent: <LaunchPage2 /> },
  { id: 58, Routepath: "/launch-page3", RouteComponent: <LaunchPage3 /> },
  { id: 59, Routepath: "/wallet-successful-receipt", RouteComponent: <ProtectedRoute><WalletSuccessfulReceipt /></ProtectedRoute> },
  { id: 60, Routepath: "/wallet-failed-receipt", RouteComponent: <ProtectedRoute><WalletFailedReceipt /></ProtectedRoute> },
  { id: 61, Routepath: "/wallet-pending-receipt", RouteComponent: <ProtectedRoute><WalletPendingReceipt /></ProtectedRoute> },
  { id: 62, Routepath: "/wallet-cancelled-receipt", RouteComponent: <ProtectedRoute><WalletCancelledReceipt /></ProtectedRoute> },
  { id: 63, Routepath: "/wallet-refunded-receipt", RouteComponent: <ProtectedRoute><WalletRefundedReceipt /></ProtectedRoute> },
  { id: 64, Routepath: "/withdraw-to-account", RouteComponent: <ProtectedRoute><WithdrawToMyAccountPage /></ProtectedRoute> },
  { id: 65, Routepath: "/withdraw-to-personalaccount", RouteComponent: <ProtectedRoute><WithdrawToPersonalAccountPage /></ProtectedRoute> },
  { id: 66, Routepath: "/withdraw-to-businessaccount", RouteComponent: <ProtectedRoute><WithdrawToBusinessAccountPage /></ProtectedRoute> },
  { id: 67, Routepath: "/withdrawal-receipt", RouteComponent: <ProtectedRoute><WithdrawalReceipt /></ProtectedRoute> },
   { id: 68, Routepath: "/redeem-receipt", RouteComponent: <RedeemReceipt /> },
  { id: 69, Routepath: "/ikedc-receipt", RouteComponent: <ProtectedRoute><IkedcReceipt /></ProtectedRoute> },
  { id: 70, Routepath: "/ikedc-receipt-failed", RouteComponent: <ProtectedRoute><IkedcReceiptFailed /></ProtectedRoute> },
  { id: 71, Routepath: "/aedc-receipt", RouteComponent: <ProtectedRoute><AedcReceipt /></ProtectedRoute> },
  { id: 72, Routepath: "/aedc-receipt-failed", RouteComponent: <ProtectedRoute><AedcReceiptFailed /></ProtectedRoute> },
  { id: 73, Routepath: "/ekedc-receipt", RouteComponent: <ProtectedRoute><EkedcReceipt /></ProtectedRoute> },
  { id: 74, Routepath: "/ekedc-receipt-failed", RouteComponent: <ProtectedRoute><EkedcReceiptFailed /></ProtectedRoute> },
  { id: 75, Routepath: "/eedc-receipt", RouteComponent: <ProtectedRoute><EedcReceipt /></ProtectedRoute> },
  { id: 76, Routepath: "/eedc-receipt-failed", RouteComponent: <ProtectedRoute><EedcReceiptFailed /></ProtectedRoute> },
  { id: 77, Routepath: "/kaedco-receipt", RouteComponent: <ProtectedRoute><KaedcoReceipt /></ProtectedRoute> },
  { id: 78, Routepath: "/kaedco-receipt-failed", RouteComponent: <ProtectedRoute><KaedcoReceiptFailed /></ProtectedRoute> },
  { id: 79, Routepath: "/bedc-receipt", RouteComponent: <ProtectedRoute><BedcReceipt /></ProtectedRoute> },
  { id: 80, Routepath: "/bedc-receipt-failed", RouteComponent: <ProtectedRoute><BedcReceiptFailed /></ProtectedRoute> },
  { id: 81, Routepath: "/ibedc-receipt", RouteComponent: <ProtectedRoute><IbedcReceipt /></ProtectedRoute> },
 { id: 82, Routepath: "/ibedc-receipt-failed", RouteComponent: <ProtectedRoute><IbedcReceiptFailed /></ProtectedRoute> },
  { id: 83, Routepath: "/jed-receipt", RouteComponent: <ProtectedRoute><JedReceipt /></ProtectedRoute> },
  { id: 84, Routepath: "/jed-receipt-failed", RouteComponent: <ProtectedRoute><JedReceiptFailed /></ProtectedRoute> },
  { id: 85, Routepath: "/kedco-receipt", RouteComponent: <ProtectedRoute><KedcoReceipt /></ProtectedRoute> },
  { id: 86, Routepath: "/kedco-receipt-failed", RouteComponent: <ProtectedRoute><KedcoReceiptFailed /></ProtectedRoute> },
  { id: 87, Routepath: "/phed-receipt", RouteComponent: <ProtectedRoute><PhedReceipt /></ProtectedRoute> },
  { id: 88, Routepath: "/phed-receipt-failed", RouteComponent: <ProtectedRoute><PhedReceiptFailed /></ProtectedRoute> },
  { id: 89, Routepath: "/bedc", RouteComponent: <ProtectedRoute><BEDC /></ProtectedRoute> },
  { id: 90, Routepath: "/phed", RouteComponent: <ProtectedRoute><PHED /></ProtectedRoute> },
  { id: 91, Routepath: "/kedco", RouteComponent: <ProtectedRoute><KEDCO /></ProtectedRoute> },
  { id: 92, Routepath: "/jed", RouteComponent: <ProtectedRoute><JED /></ProtectedRoute> },
  { id: 93, Routepath: "/ibedc", RouteComponent: <ProtectedRoute><IBEDC /></ProtectedRoute> },
  { id: 94, Routepath: "/eedc", RouteComponent: <ProtectedRoute><EEDC /></ProtectedRoute> },
  { id: 95, Routepath: "/kaedco", RouteComponent: <ProtectedRoute><KAEDCO /></ProtectedRoute> },
  { id: 96, Routepath: "/ikedc", RouteComponent: <ProtectedRoute><IKEDC /></ProtectedRoute> },
  { id: 97, Routepath: "/aedc", RouteComponent: <ProtectedRoute><AEDC /></ProtectedRoute> },
  { id: 98, Routepath: "/ekedc", RouteComponent: <ProtectedRoute><EKEDC /></ProtectedRoute> },
  { id: 99, Routepath: "/airtime-conversion", RouteComponent: <ProtectedRoute><AirtimeConversion /></ProtectedRoute> },
  { id: 100, Routepath: "/airtime-receipt", RouteComponent: <ProtectedRoute><AirtimeReceipt /></ProtectedRoute> },
  { id: 101, Routepath: "/contact-team", RouteComponent: <ContactTeam /> },
  { id: 102, Routepath: "/electricity-subscription", RouteComponent: <ProtectedRoute><ElectricitySubscription /></ProtectedRoute> },
  { id: 103, Routepath: "/global-transfer", RouteComponent: <ProtectedRoute><GlobalTransfer /></ProtectedRoute> },
  { id: 104, Routepath: "/point-redeem", RouteComponent: <ProtectedRoute><PointRedeem /></ProtectedRoute> },
  { id: 105, Routepath: "/fiat", RouteComponent: <ProtectedRoute><FiatConversion /></ProtectedRoute> },
  { id: 106, Routepath: "/currencyConversion", RouteComponent: <ProtectedRoute><CurrencyConversion /></ProtectedRoute> },
  { id: 107, Routepath: "/data-top-up", RouteComponent: <ProtectedRoute><DataTopUpPage /></ProtectedRoute> },
  { id: 108, Routepath: "/data-bundles", RouteComponent: <ProtectedRoute><DataBundlesPage /></ProtectedRoute> },
  { id: 109, Routepath: "/My-Referral", RouteComponent: <ProtectedRoute><Referral /></ProtectedRoute> },
  { id: 110, Routepath: "/MtnDataTopUpBundle", RouteComponent: <ProtectedRoute><MtnDataTopUpBundle /></ProtectedRoute> },
  { id: 111, Routepath: "/SuccessfulConversion", RouteComponent: <ProtectedRoute><SuccessfulReceipt /></ProtectedRoute> },
  { id: 112, Routepath: "/MtnReceipt", RouteComponent: <ProtectedRoute><MtnReceipt /></ProtectedRoute> },
  { id: 113, Routepath: "/AirtelDataBundle", RouteComponent: <ProtectedRoute><AirtelDataBundle /></ProtectedRoute> },
  { id: 114, Routepath: "/GloDataBundle", RouteComponent: <ProtectedRoute><GloDataBundle /></ProtectedRoute> },
  { id: 115, Routepath: "/EtisalatDataBundle", RouteComponent: <ProtectedRoute><EtisalatDataBundle /></ProtectedRoute> },
  { id: 116, Routepath: "/AirtelReceipt", RouteComponent: <ProtectedRoute><AirtelReceipt /></ProtectedRoute> },
  { id: 117, Routepath: "/EtisalatReceipt", RouteComponent: <ProtectedRoute><EtisalatReceipt /></ProtectedRoute> },
  { id: 118, Routepath: "/GloReceipt", RouteComponent: <ProtectedRoute><GloReceipt /></ProtectedRoute> },
  { id: 119, Routepath: "/DataBundleSelectRecipient", RouteComponent: <ProtectedRoute><DataBundleSelectRecipient /></ProtectedRoute> },
  { id: 120, Routepath: "/DataBundleAddRecipient", RouteComponent: <ProtectedRoute><DataBundleAddRecipient /></ProtectedRoute> },
  { id: 121, Routepath: "/TvSubscription", RouteComponent: <ProtectedRoute><TvSubscription /></ProtectedRoute> },
  { id: 122, Routepath: "/GoTv", RouteComponent: <ProtectedRoute><GoTv /></ProtectedRoute> },
  { id: 123, Routepath: "/EducationPins", RouteComponent: <ProtectedRoute><EducationMain /></ProtectedRoute> },
  { id: 124, Routepath: "/WaecEducationPin", RouteComponent: <ProtectedRoute><WaecEducationPin /></ProtectedRoute> },
  { id: 125, Routepath: "/NecoEducationPin", RouteComponent: <ProtectedRoute><NecoEducationPins /></ProtectedRoute> },
  { id: 126, Routepath: "/NabtebEducationPin", RouteComponent: <ProtectedRoute><NabtebEducationPins /></ProtectedRoute> },
  { id: 127, Routepath: "/WaecReceipt", RouteComponent: <ProtectedRoute><WaecReceipt /></ProtectedRoute> },
  { id: 128, Routepath: "/JambReceipt", RouteComponent: <ProtectedRoute><JambReceipt /></ProtectedRoute> },
  { id: 129, Routepath: "/NecoReceipt", RouteComponent: <ProtectedRoute><NecoReceipt /></ProtectedRoute> },
  { id: 130, Routepath: "/NabtebReceipt", RouteComponent: <ProtectedRoute><NabtebReceipt /></ProtectedRoute> },
  { id: 131, Routepath: "/DsTv", RouteComponent: <ProtectedRoute><DsTv /></ProtectedRoute> },
  { id: 132, Routepath: "/StarTimes", RouteComponent: <ProtectedRoute><StarTimes /></ProtectedRoute> },
  { id: 133, Routepath: "/Showmax", RouteComponent: <ProtectedRoute><Showmax /></ProtectedRoute> },
  { id: 134, Routepath: "/GotvReceipt", RouteComponent: <ProtectedRoute><GotvReceipt /></ProtectedRoute> },
  { id: 135, Routepath: "/DstvReceipt", RouteComponent: <ProtectedRoute><DstvReceipt /></ProtectedRoute> },
  { id: 136, Routepath: "/StarTimesReceipt", RouteComponent: <ProtectedRoute><StarTimesReceipt /></ProtectedRoute> },
  { id: 137, Routepath: "/ShowmaxReceipt", RouteComponent: <ProtectedRoute><ShowmaxReceipt /></ProtectedRoute> },
  { id: 138, Routepath: "/SmileDataBundle", RouteComponent: <ProtectedRoute><SmileDataBundle /></ProtectedRoute> },
  { id: 139, Routepath: "/Smilereceipt", RouteComponent: <ProtectedRoute><SmileReceipt /></ProtectedRoute> },
  { id: 140, Routepath: "/SpectranetDataBundle", RouteComponent: <ProtectedRoute><SpectranetDataBundle /></ProtectedRoute> },
  { id: 141, Routepath: "/SpectranetReceipt", RouteComponent: <ProtectedRoute><SpectranetReceipt /></ProtectedRoute> },
  { id: 142, Routepath: "/ProfileSettingMain", RouteComponent: <ProtectedRoute><ProfileSettingsMain /></ProtectedRoute> },
  { id: 143, Routepath: "/EditProfile", RouteComponent: <ProtectedRoute><EditProfile /></ProtectedRoute> },
  { id: 144, Routepath: "/TransactionPage", RouteComponent: <ProtectedRoute><TransactionPage /></ProtectedRoute> },
  { id: 145, Routepath: "/SuccessfullReceipt", RouteComponent: <ProtectedRoute><SuccessfullReceipt /></ProtectedRoute> },
  { id: 146, Routepath: "/ElectricityReceipt", RouteComponent: <ProtectedRoute><ElectricityReceipt /></ProtectedRoute> },
  { id: 147, Routepath: "/EduReceipt", RouteComponent: <ProtectedRoute><EduReceipt /></ProtectedRoute> },
  { id: 148, Routepath: "/TvSubReceipt", RouteComponent: <ProtectedRoute><TvSubReceipt /></ProtectedRoute> },
  { id: 149, Routepath: "/PointRedeemReceipt", RouteComponent: <ProtectedRoute><PointRedeemReceipt /></ProtectedRoute> },
  { id: 150, Routepath: "/AirtimeTransReceipt", RouteComponent: <ProtectedRoute><AirtimeTransReceipt /></ProtectedRoute> },
  { id: 151, Routepath: "/DataTransReceipt", RouteComponent: <ProtectedRoute><DataTransReceipt /></ProtectedRoute> },
  { id: 152, Routepath: "/TransferReceipt", RouteComponent: <ProtectedRoute><TransferReceipt /></ProtectedRoute> },
  { id: 153, Routepath: "/VirtualAccountReceipt", RouteComponent: <ProtectedRoute><VirtualAccountReceipt /></ProtectedRoute> },
  { id: 154, Routepath: "/FailedReceipt", RouteComponent: <ProtectedRoute><FailedReceipt /></ProtectedRoute> },
  { id: 155, Routepath: "/PendingReceipt", RouteComponent: <ProtectedRoute><PendingReceipt /></ProtectedRoute> },
  { id: 156, Routepath: "/RefundedReceipt", RouteComponent: <ProtectedRoute><RefundedReceipt /></ProtectedRoute> },
  { id: 157, Routepath: "/CancelledReceipt", RouteComponent: <ProtectedRoute><CancelledReceipt /></ProtectedRoute> },
  { id: 158, Routepath: "/LaunchPage", RouteComponent: <ProtectedRoute><LaunchPage /></ProtectedRoute> },
  { id: 159, Routepath: "/ChangeEmail", RouteComponent: <ProtectedRoute><ChangeEmail /></ProtectedRoute> },
  { id: 160, Routepath: "/ChangePhoneNumber", RouteComponent: <ProtectedRoute><ChangePhoneNumber /></ProtectedRoute> },
  { id: 161, Routepath: "/ChangePin", RouteComponent: <ProtectedRoute><ChangePin /></ProtectedRoute> },
  { id: 162, Routepath: "/AccountUpgrade", RouteComponent: <ProtectedRoute><AccountUpgrade /></ProtectedRoute> },
  { id: 163, Routepath: "/payment-page", RouteComponent: <ProtectedRoute><PaymentPage /></ProtectedRoute> },
  { id: 164, Routepath: "/CardPayment", RouteComponent: <ProtectedRoute><CardPayment /></ProtectedRoute> },
  { id: 165, Routepath: "/AddNewCardPayment", RouteComponent: <ProtectedRoute><AddNewCardPayment /></ProtectedRoute> },
  { id: 166, Routepath: "/ExistingCardPage", RouteComponent: <ProtectedRoute><ExistingCardPage /></ProtectedRoute> },
  { id: 167, Routepath: "/FundWithCard", RouteComponent: <ProtectedRoute><FundWithCard /></ProtectedRoute> },
  { id: 168, Routepath: "/CardPaymentReceipt", RouteComponent: <ProtectedRoute><CardPaymentReceipt /></ProtectedRoute> },
  { id: 169, Routepath: "/MtnfailedReceipt", RouteComponent: <ProtectedRoute><MtnFailedReceipt /></ProtectedRoute> },
  { id: 170, Routepath: "/AirtelFailedReceipt", RouteComponent: <ProtectedRoute><AirtelFailedReceipt /></ProtectedRoute> },
  { id: 171, Routepath: "/GloFailedReceipt", RouteComponent: <ProtectedRoute><GloFailedReceipt /></ProtectedRoute> },
  { id: 172, Routepath: "/EtisalatFailedReceipt", RouteComponent: <ProtectedRoute><EtisalatFailedReceipt /></ProtectedRoute> },
  { id: 173, Routepath: "/GlobalTransferSelectRecipient", RouteComponent: <ProtectedRoute><GlobalTransferSelectRecipient /></ProtectedRoute> },
  { id: 174, Routepath: "/GlobalTransferAddRecipient", RouteComponent: <ProtectedRoute><GlobalTransferAddRecipient /></ProtectedRoute> },
  { id: 175, Routepath: "/EditSelectRecipient", RouteComponent: <ProtectedRoute><EditSelectRecipient /></ProtectedRoute> },
  { id: 176, Routepath: "/BVNVerification", RouteComponent: <ProtectedRoute><BvnVerification /></ProtectedRoute> },
  { id: 177, Routepath: "/AccountVerification", RouteComponent: <ProtectedRoute><AccountVerficationPage /></ProtectedRoute> },
  { id: 178, Routepath: "/ProfileSettingMain/AccountVerification", RouteComponent: <ProtectedRoute><ProfileSettingsMain /></ProtectedRoute> },
  { id: 179, Routepath: "/WaecFailedReceipt", RouteComponent: <ProtectedRoute><WaecFailedReceipt /></ProtectedRoute> },
  { id: 180, Routepath: "/NecoFailedReceipt", RouteComponent: <ProtectedRoute><NecoFailedReceipt /></ProtectedRoute> },
  { id: 181, Routepath: "/NabtebFailedReceipt", RouteComponent: <ProtectedRoute><NabtebFailedReceipt /></ProtectedRoute> },
  {id : 182, Routepath : "/TestingPhase", RouteComponent : <TestingDesign/>},
     {id : 183, Routepath : "*", RouteComponent : <NotFound/>}
  ];
export const Router = () => {
 return (
    <div>
      <ThemeHandler />
      <Routes>
        {RoutingObjectLimitScope.map(({ id, Routepath, RouteComponent }) => (
          <Route key={id} path={Routepath} element={RouteComponent} />
        ))}

        {/* Protected Routes */}
  
      
        
         
      </Routes>
    </div>
  );
};
