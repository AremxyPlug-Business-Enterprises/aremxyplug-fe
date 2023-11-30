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
import AirTime from "./Components/AirTimePage/AirTime";
import AirtimeVtu from "./Components/AirTimePage/AirtimeVtu";
import { AddAccount } from "./Components/Dashboard/DashboardComponents/PersonalAccountPage/AddAccountPage/AddAccount";
import NgnVirtualAccount from "./Components/Screens/ngnVirtualAccount/NgnVirtualAccount";
import { CookiesSettings } from "./Components/Screens/Home/Cookie/CookiesSettings";
import { Receipt } from "./Components/Dashboard/DashboardComponents/PersonalAccountPage/Receipt";
import { WithdrawPage } from "./Components/Dashboard/DashboardComponents/Withdrawal/WithdrawPage";
import { BusinessAccountPage } from "./Components/Dashboard/DashboardComponents/PersonalAccountPage/BusinessAccountPage";
import { WithdrawToMyAccountPage } from "./Components/Dashboard/DashboardComponents/Withdrawal/WithdrawToMyAccountPage";
import { WithdrawToPersonalAccountPage } from "./Components/Dashboard/DashboardComponents/Withdrawal/WithdrawToPersonalAccountPage";
import { WithdrawToBusinessAccountPage } from "./Components/Dashboard/DashboardComponents/Withdrawal/WithdrawToBusinessAccountPage";
import { WithdrawalReceipt } from "./Components/Dashboard/DashboardComponents/Withdrawal/WithdrawalPopUps/WithdrawalReceipt.";
import DigitalServices from "./Components/Screens/digitalServices/DigitalServices";
import { ToOtherBanks } from "./Components/Dashboard/DashboardComponents/TransferComponent/TransferToOtherBankPages/ToOtherBanks";
import { OtherBankReceipt } from "./Components/Dashboard/DashboardComponents/TransferComponent/TransferToOtherBankPages/OtherBankPopUp/OtherBankPopUp/OtherBankReceipt";
import GlobalTransfer from "./Components/Dashboard/DashboardComponents/TransferComponent/TransferToOtherBankPages/GlobalTransfer";
import { InternationalReceipt } from "./Components/Dashboard/DashboardComponents/TransferComponent/TransferToOtherBankPages/OtherBankPopUp/InternationalPopUp/InternationalReceipt";
import FiatConversion from "./Components/CurrencyConversion/FiatConversion";
import DataTopUpPage from "./Components/Dashboard/DashboardComponents/DataTopUpPage/DataTopUpPage";
import CurrencyConversion from "./Components/CurrencyConversion/currencyConversion";
import PointRedeem from "./Components/Dashboard/DashboardComponents/PointRedeem/PointRedeem"
import Referral from "./Components/Referrals/Referral"
import AirtimeVtuReceipt from "./Components/AirTimePage/AirtimeVtuReceipt"
import DataBundlesPage from "./Components/Dashboard/DashboardComponents/DataTopUpPage/DataBundles/DataBundlesPage";
import MtnDataTopUpBundle from "./Components/Dashboard/DashboardComponents/DataTopUpPage/DataBundles/MtnDataTopUpBundle/MtnDataTopUpBundle";
import WithdrawToOtherBanks from "./Components/Dashboard/DashboardComponents/Withdrawal/WithdrawToOtherBanks";
import WalletSummaryPage from "./Components/WalletSummaryPage/WalletSummary";
import SalesSummaryPage from "./Components/SalesSummaryPage/SalesSummary";
import NotificationsPage from "./Components/NotificationsPage/Notifications";
import { WalletSuccessfulReceipt} from "./Components/WalletSummaryPage/WalletSuccessfulReceipt";
import {WalletFailedReceipt} from "./Components/WalletSummaryPage/WalletFailedReceipt";
import {WalletPendingReceipt} from "./Components/WalletSummaryPage/WalletPendingReceipt";
import {WalletCancelledReceipt} from "./Components/WalletSummaryPage/WalletCancelledReceipt";
import {WalletRefundedReceipt} from "./Components/WalletSummaryPage/WalletRefundedReceipt";
import { WithdrawToOtherBankReceipt } from "./Components/Dashboard/DashboardComponents/Withdrawal/WithdrawToOtherBanksPopUp/WithdrawToOtherBankReceipt";
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
import JambEducationPin from "./Components/EducationPins/jambEducationPin";
import NabtebEducationPins from './Components/EducationPins/nabtebEducationPins';
import WaecReceipt from "./Components/EducationPins/ReceiptEducationPins/waecReceipt";
import JambReceipt from "./Components/EducationPins/ReceiptEducationPins/jambReceipt";
import NecoReceipt from "./Components/EducationPins/ReceiptEducationPins/necoReceipt";
import NabtebReceipt from "./Components/EducationPins/ReceiptEducationPins/nabtebReceipt";
import {SuccessfulReceipt} from "./Components/CurrencyConversion/ConversionReceipts/SuccessConversionReceipt";
import { TvSubscription } from "./Components/TvSubscription/TvSubscriptionPage";
import GoTv from "./Components/TvSubscription/TvOne";
import DsTv from "./Components/TvSubscription/TvTwo";
import { RedeemReceipt } from "./Components/Dashboard/DashboardComponents/PointRedeem/RedeemReceipt";
import SmileDataBundle from "./Components/Dashboard/DashboardComponents/DataTopUpPage/DataBundles/SmileDataBundle/SmileDataBundle";
import { SmileReceipt } from "./Components/Dashboard/DashboardComponents/DataTopUpPage/DataBundles/SmileDataBundle/SmileReceipt";
import SpectranetDataBundle from "./Components/Dashboard/DashboardComponents/DataTopUpPage/DataBundles/SpectranetDataBundle/SpectranetDataBundle";
import { SpectranetReceipt } from "./Components/Dashboard/DashboardComponents/DataTopUpPage/DataBundles/SpectranetDataBundle/SpectranetReceipt";
import AddRecipient from "./Components/AirTimePage/AddRecipient"
import SelectRecipient from "./Components/AirTimePage/SelectRecipient"
import DataBundleSelectRecipient from "./Components/Dashboard/DashboardComponents/DataTopUpPage/DataBundles/DataBundleSelectRecipient"
import DataBundleAddRecipient from "./Components/Dashboard/DashboardComponents/DataTopUpPage/DataBundles/DataBundleAddRecipient"
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
import { SuccessfullReceipt } from "./Components/Dashboard/DashboardComponents/TransactionPage/TransactionReceipt/SuccessfullReceipt";
import { FailedReceipt } from "./Components/Dashboard/DashboardComponents/TransactionPage/TransactionReceipt/FailedReceipt";
import { PendingReceipt } from "./Components/Dashboard/DashboardComponents/TransactionPage/TransactionReceipt/PendingReceipt";
import { RefundedReceipt } from "./Components/Dashboard/DashboardComponents/TransactionPage/TransactionReceipt/RefundedReceipt";
import { CancelledReceipt } from "./Components/Dashboard/DashboardComponents/TransactionPage/TransactionReceipt/CancelledReceipt";
import ChangeEmail from "./Components/My Profile & Account Settings/My Profile Page/ChangeEmail";
import ChangePhoneNumber from "./Components/My Profile & Account Settings/My Profile Page/ChangePhoneNumber";
import AirtimeConversion from "./Components/Dashboard/DashboardComponents/AirtimeConversion/AirtimeConversion";
import LaunchPage from "./Components/NotificationsPage/LaunchPage";
import ChangePin from "./Components/My Profile & Account Settings/My Profile Page/ChangePin";
import AccountUpgrade from "./Components/My Profile & Account Settings/My Profile Page/AccountUpgrade";

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
        <Route path="/airtime-topup" element={<AirTime />} />
        <Route path="/airtime-vtu" element={<AirtimeVtu />} />
        <Route path="/airtime-vtu-receipt" element={<AirtimeVtuReceipt />} />
        <Route path="/add-vtu-recipient" element={<AddRecipient />} /> 
        <Route path="/select-vtu-recipient" element={<SelectRecipient />} />
        <Route path="/add-account" element={<AddAccount />} />
        <Route path="/ngn-virtual-account" element={<NgnVirtualAccount />} />
        <Route path="/cookie-settings" element={<CookiesSettings />} />
        <Route path="/Receipt" element={<Receipt />} />
        <Route path="/withdraw" element={<WithdrawPage />} />
        <Route path="/wallet-summary" element={<WalletSummaryPage/>} />
        <Route path="/sales-summary" element={<SalesSummaryPage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/launch-page" element={<LaunchPage />} />

        <Route path="/wallet-successful-receipt" element={<WalletSuccessfulReceipt />} />
        <Route path="/wallet-failed-receipt" element={<WalletFailedReceipt />} />
        <Route path="/wallet-pending-receipt" element={<WalletPendingReceipt />} />
        <Route path="/wallet-cancelled-receipt" element={<WalletCancelledReceipt />} />
        <Route path="/wallet-refunded-receipt" element={<WalletRefundedReceipt />} />
        <Route
          path="/withdraw-to-account"
          element={<WithdrawToMyAccountPage />}
        />
        <Route
          path="/withdraw-to-personalaccount"
          element={<WithdrawToPersonalAccountPage />}
        />
        <Route
          path="/withdraw-to-businessaccount"
          element={<WithdrawToBusinessAccountPage />}
        />
        <Route path="/withdrawal-receipt" element={<WithdrawalReceipt />} />
        <Route path="/To-other-banks" element={<ToOtherBanks />} />
        <Route
          path="/withdraw-to-other-banks"
          element={<WithdrawToOtherBanks />}
        />
        <Route path="/other-bank-receipt" element={<OtherBankReceipt />} />
        <Route
          path="/other-bank-withdrawalreceipt"
          element={<WithdrawToOtherBankReceipt />}
        />
        <Route
          path="/international-bank-receipt"
          element={<InternationalReceipt />}
        />
       <Route path="/redeem-receipt"element={<RedeemReceipt />} />
       <Route path="/ikedec-receipt" element={<IkedcReceipt />} />
       <Route path="/aedc-receipt" element={<AedcReceipt />} />
       <Route path="/ekedc-receipt" element={<EkedcReceipt />} />
       <Route path="/eedc-receipt" element={<EedcReceipt />} />
       <Route path="/kaedco-receipt" element={<KaedcoReceipt />} />
       <Route path="/bedc-receipt" element={<BedcReceipt/>} />
       <Route path="/ibedc-receipt" element={<IbedcReceipt/>} />
       <Route path="/jed-receipt" element={<JedReceipt/>} />
       <Route path="/kedco-receipt" element={<KedcoReceipt/>} />
       <Route path="/phed-receipt" element={<PhedReceipt/>} />
       <Route path="/bedc" element={<BEDC />} />
       <Route path="/phed" element={<PHED />} />
       <Route path="/kedco" element={<KEDCO/>} />
       <Route path="/jed" element={<JED />} />
       <Route path="/ibedc" element={<IBEDC />} />
       <Route path="/eedc" element={<EEDC />} />
       <Route path="/kaedco" element={<KAEDCO />} />
        <Route path="/ikedc" element={<IKEDC />} />
        <Route path="/aedc" element={<AEDC />} />
        <Route path="/ekedc" element={<EKEDC />} />
        <Route path="/airtime-conversion" element={<AirtimeConversion />} />
        <Route path="/electricity-subscription" element={<ElectricitySubscription/>} />
        <Route path="/global-transfer" element={<GlobalTransfer />} />
        <Route path="/point-redeem" element={<PointRedeem />} />
        <Route path="/fiat" element={<FiatConversion />} />
        <Route path="/currencyConversion" element={<CurrencyConversion />} />
        <Route path="/data-top-up" element={<DataTopUpPage />} />
        <Route path="/data-bundles" element={<DataBundlesPage />} />
        <Route path="/My-Referral" element={<Referral />} />
        <Route path="/MtnDataTopUpBundle" element={<MtnDataTopUpBundle />} />
        <Route path="/SuccessfulConversion" element={<SuccessfulReceipt/>}/>
        <Route path="/MtnReceipt" element={<MtnReceipt/>} />
        <Route path="/AirtelDataBundle" element={<AirtelDataBundle/>} />
        <Route path="/GloDataBundle" element={<GloDataBundle/>} />
        <Route path="/EtisalatDataBundle" element={<EtisalatDataBundle/>} />
        <Route path="/AirtelReceipt" element={<AirtelReceipt/>} />
        <Route path="/EtisalatReceipt" element={<EtisalatReceipt/>} />
        <Route path="/GloReceipt" element={<GloReceipt/>} />
        <Route path="/DataBundleSelectRecipient" element={<DataBundleSelectRecipient/>} />
        <Route path="/DataBundleAddRecipient" element={<DataBundleAddRecipient/>} />
        <Route path="/TvSubscription" element={<TvSubscription/>} />
        <Route path="/GoTv" element={<GoTv/>} />
        <Route path="/EducationPins" element={<EducationMain/>}/>
        <Route path="/WaecEducationPin" element={<WaecEducationPin/>}/>
        <Route path="/NecoEducationPin" element={<NecoEducationPins/>}/>
        <Route path="/NabtebEducationPin" element={<NabtebEducationPins/>}/>
        <Route path="/JambEducationPin" element={<JambEducationPin/>}/>
        <Route path="/WaecReceipt" element={<WaecReceipt/>}/>
        <Route path="/JambReceipt" element={<JambReceipt/>}/>
        <Route path="/NecoReceipt" element={<NecoReceipt/>}/>
        <Route path="/NabtebReceipt" element={<NabtebReceipt/>}/>
        <Route path="/TvSubscription" element={<TvSubscription/>}/>
        <Route path="/GoTv" element={<GoTv/>}/>
        <Route path="/DsTv" element={<DsTv/>}/>
        <Route path="/SuccessfulConversion" element={<SuccessfulReceipt/>}/>
        <Route path="/SmileDataBundle" element={<SmileDataBundle/>} />
        <Route path="/Smilereceipt" element={<SmileReceipt/>} />
        <Route path="/SpectranetDataBundle" element={<SpectranetDataBundle/>} />
        <Route path="/SpectranetReceipt" element={<SpectranetReceipt/>} />
        <Route path="/DataBundleSelectRecipient" element={<DataBundleSelectRecipient/>} />
        <Route path="/DataBundleAddRecipient" element={<DataBundleAddRecipient/>} />
        <Route path="/ProfileSettingMain"element={<ProfileSettingsMain/>} />  
        <Route path="/EditProfile" element= {<EditProfile/>} />
        <Route path="/TransactionPage" element={<TransactionPage/>} />
        <Route path="/SuccessfullReceipt" element={<SuccessfullReceipt/>} />
        <Route path="/FailedReceipt" element={<FailedReceipt/>} />
        <Route path="/PendingReceipt" element={<PendingReceipt/>} />
        <Route path="/RefundedReceipt" element={<RefundedReceipt/>} />
        <Route path="/CancelledReceipt" element={<CancelledReceipt/>} />
        <Route path="/LaunchPage" element={<LaunchPage/>} />
        <Route path="/ChangeEmail" element={<ChangeEmail/>} />
        <Route path="/ChangePhoneNumber" element={<ChangePhoneNumber/>} />
        <Route path="/ChangePin" element={<ChangePin/>} />
        <Route path="/AccountUpgrade" element={<AccountUpgrade/>} />
      </Routes>
    </div>
  );
};
