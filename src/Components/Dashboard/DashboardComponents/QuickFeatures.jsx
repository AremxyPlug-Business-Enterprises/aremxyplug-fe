import React from "react";
import { useContext } from "react";
import { ContextProvider } from "../../Context";
import styles from "./component.module.css";
import { Link } from "react-router-dom";
const QuickFeatures = () => {
  const { isDarkMode } = useContext(ContextProvider);
  return (
    <div className={styles.quickbody}>
      <div className="flex items-center gap-[10px]">
        <p className={`${styles.QuickFeaturetext} text-[11px] lg:text-[21px] `}>
          Quick Features
        </p>
        <img
          className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
          src="./Images/Dashboardimages/arrowright.png"
          alt="/"
        />
      </div>
      <div className={`${styles.quickgrid} grid grid-cols-5 gap-y-2 mt-[3%]`}>
        <Link to="/airtime-topup">
          <div
            className={`${isDarkMode ? " border text-white" : "bg-[#fff] "} ${
              styles.feature
            }`}
          >
            <img
              className="h-[25px] w-[25px] md:w-[] md:h-[] lg:h-[79px] lg:w-[79px]"
              src="./Images/Dashboardimages/feature1.png"
              alt="/"
            />
            <p>Airtime Topup</p>
          </div>
        </Link>

        <Link
          to="/data-top-up"
          className={`${isDarkMode ? " border text-white" : "bg-[#fff] "} ${
            styles.feature
          }`}
        >
          {" "}
          <img
            className=" h-[25px] w-[25px] md:w-[] md:h-[] lg:h-[79px] lg:w-[79px]"
            src="./Images/Dashboardimages/feature2.png"
            alt="/"
          />{" "}
          <p>Data Topup</p>
        </Link>
<<<<<<< HEAD

        <div
          className={`${isDarkMode ? " border text-white" : "bg-[#fff] "} ${
            styles.feature
          }`}
        >
          <img
            className="h-[25px] w-[25px] md:w-[] md:h-[] lg:h-[85px] lg:w-[85px]"
            src="./Images/Dashboardimages/feature3.png"
            alt="/"
          />
          <p>Education Pins</p>
        </div>
        <Link to= "/TvSubscription">
        <div
          className={`${isDarkMode ? " border text-white" : "bg-[#fff] "} ${
            styles.feature
          }`}
        >
          <img
            className="h-[25px] w-[25px] md:w-[] md:h-[] lg:h-[79px] lg:w-[79px]"
            src="./Images/Dashboardimages/feature4.png"
            alt="/"
          />
          <p>TV Subscriptions</p>
        </div>
=======
        <Link to="/EducationPins">
          <div
            className={`${isDarkMode ? " border text-white" : "bg-[#fff] "} ${
              styles.feature
            }`}
          >
            <img
              className="h-[25px] w-[25px] md:w-[] md:h-[] lg:h-[85px] lg:w-[85px]"
              src="./Images/Dashboardimages/feature3.png"
              alt="/"
            />
            <p>Education Pins</p>
          </div>
        </Link>
        <Link to="/TvSubscription">
          <div
            className={`${isDarkMode ? " border text-white" : "bg-[#fff] "} ${
              styles.feature
            }`}
          >
            <img
              className="h-[25px] w-[25px] md:w-[] md:h-[] lg:h-[79px] lg:w-[79px]"
              src="./Images/Dashboardimages/feature4.png"
              alt="/"
            />
            <p>TV Subscriptions</p>
          </div>
>>>>>>> 6e9b9d85138c916aebfa1f63dcf23a0596800d3a
        </Link>
        <Link to="/electricity-subscription">
          <div
            className={`${isDarkMode ? " border text-white" : "bg-[#fff] "} ${
              styles.feature
            }`}
          >
            <img
              className="h-[25px] w-[25px] md:w-[] md:h-[] lg:h-[79px] lg:w-[79px]"
              src="./Images/Dashboardimages/feature5.png"
              alt="/"
            />
            <p>Electricity Bills</p>
          </div>
        </Link>
        <Link to="/payment-page"
            className={`${isDarkMode ? " border text-white" : "bg-[#fff] "} ${
              styles.feature
            }`}
          >
          <img
            className="h-[25px] w-[25px] md:w-[] md:h-[] lg:h-[79px] lg:w-[79px]"
            src="./Images/Dashboardimages/feature6.png"
            alt="/"
          />
          <p>Payments</p>
        </Link>
        <Link
          to="/Cardissuing"
          className={`${isDarkMode ? " border text-white" : "bg-[#fff] "} ${
            styles.feature
          }`}
        >
          <img
            className="h-[25px] w-[25px] md:w-[] md:h-[] lg:h-[79px] lg:w-[79px]"
            src="./Images/Dashboardimages/feature7.png"
            alt="/"
          />
          <p>Card Issuing</p>
        </Link>
        <Link
          to="/DigitalServices"
          className={`${isDarkMode ? " border text-white" : "bg-[#fff] "} ${
            styles.feature
          }`}
        >
          <img
            className="h-[25px] w-[25px] md:w-[] md:h-[] lg:h-[79px] lg:w-[79px]"
            src="./Images/Dashboardimages/feature8.png"
            alt="/"
          />
          <p>Digital Services</p>
        </Link>
        <Link
          to="/My-Referral"
          className={`${isDarkMode ? " border text-white" : "bg-[#fff] "} ${
            styles.feature
          }`}
        >
          <img
            className="h-[25px] w-[25px] md:w-[] md:h-[] lg:h-[79px] lg:w-[79px]"
            src="./Images/Dashboardimages/feature9.png"
            alt="/"
          />
          <p>Referrals</p>
        </Link>
        <Link
          to="/ProfileSettingMain"
          className={`${
            isDarkMode ? " border text-white" : "text-[#000] bg-[#fff] "
          } ${styles.feature}`}
        >
          <img
            className="h-[25px] w-[25px] md:w-[] md:h-[] lg:h-[79px] lg:w-[79px]"
            src="./Images/Dashboardimages/feature10.png"
            alt="/"
          />
          <p>My Profile</p>
        </Link>
      </div>
    </div>
  );
};
export default QuickFeatures;
