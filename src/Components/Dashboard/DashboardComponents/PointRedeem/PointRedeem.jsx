import { useEffect, useState, useContext } from "react";
import { DashBoardLayout } from "../../Layout/DashBoardLayout";
import { Link } from "react-router-dom";
import cloud from "../PointRedeem/images/cloud storage convert.svg";
import icon from "../PointRedeem/images/receipt-add.svg";
import arrowdown from "../PointRedeem/images/arrow-down.svg";
import icon1 from "../PointRedeem/images/Group.svg";
import icon2 from "../PointRedeem/images/convert-card.svg";
import icon3 from "../PointRedeem/images/clock.svg";
import icon5 from "../PointRedeem/images/main-component.png";
import flag from "../PointRedeem/images/Country Flags.svg";
import { Modal } from "../../../Screens/Modal/Modal";
import { ContextProvider } from "../../../Context";
import styles from "../TransferComponent/transfer.module.css";
import icon4 from "../PointRedeem/images/Group 13102.png";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import OtpInput from "react-otp-input";
import Joi from "joi";
// import axios from 'axios';
import { GetFunction, 
 RestrictionPopUp, 
 InternalLoginSession,
  PostFunction, 
  VerifyTransPin } from "../../../../Components/ApiCollection.jsx/ApiBuck";
import { BalanceLoading, Loader } from "../../../Loader/Loader";
import { GetLocalStorage } from "../../../LocalStorage/LocalStorage";




const PointRedeem = () => {
 const Data = GetLocalStorage()

  const { 
    toggleSideBar, 
    toggleVisibility, isVisible,
    inputValue,
           setInputValue, 
           outputValue, 
           setOutputValue, 
           realinputValue,
           realoutputValue,
           setRealInputValue,
           setRealOutputValue,
            errorMessage,
           setErrorMessage,
  pointRateRedeemed,
         setPointRateRedeemed,
         setPointTransactionId,
       pointOrderId,  
       setPointOrderId,
        pointAmountRedeemed, 
        setPointAmountRedeemed,
         setPointTransactionProduct,
        setPointTransactionDescription,
         setPointFetchedResponse,
        setPointPointsRedeemed,
          authenticationOpen,
          pointPointsRedeemed,
          setNetworkIssue,
          pointTransactionProduct
          } = useContext(ContextProvider);
   


    const [isFocused, setIsFocused] = useState(false);
         const handleFocus = () => {
           setIsFocused(true);
         };
       
         const handleBlur = () => {
           setIsFocused(false);
         };
  

const [text, setText] =useState(false);
const [restrictUser, setRestrictUser] = useState(false);
  // const [transactionInfo, setTransactionInfo] = useState(null);
  const [isLoading, setLoading] = useState(false);
    const [InputPinPopUp, setInputPinPopUp] = useState(false);
  const [inputPin, setInputPin] = useState("");
  const [proceed, setProceed] = useState(false);
   const [successPopup, setSuccessPopup] = useState(false);
  const [errors, setErrors]  = useState({});
  const [failedPopup, setFailedPopup] = useState(false);
  
 // const [pointPostResponse, setPointPostResponse] = useState({});
  
const [userPoints, setUserPoints] = useState(0);
const [sessionModal, setSessionModal] = useState(false);

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    setOutputValue(newValue);
    setText(true);
  };

  const handleRealInputChange = (event) => {
    const newValue = event.target.value;

    setRealInputValue(newValue);
    setRealOutputValue(newValue);
    setText(true);
  };
  const pointsEarned = "+2.00";



  const handleSwitch = () => {
    setInputPinPopUp(true);
    setProceed(false);
  };

  const handle = () => {
    setInputPin("")
    setInputPinPopUp(false);
    setProceed(true);
  };
  // const handleProceed = () => {

  //     setProceed(true);

  // };



  
  const handlerealClear = () =>{
    setRealInputValue('');
    setRealOutputValue('');
    setText(true);
  }

const schema = Joi.object({
  inputValue: Joi.number()
    .min(10)
    .max(100)
    .required()
    .messages({
      "number.base": "Please enter a valid number",
      "number.min": "Minimum Point Redeem is 10 and maximum is 100",
      "any.required": "This field is required",
    }),
});


    //Fetch Points
  useEffect(() => {
    if(Data?.ConfirmAcc === "true"){
    const  successHandler = (response) => {
     if (!response?.data?.data) return;
    const available = response?.data?.data?.point?.available_points ?? 0;
    // const trxPoints = response?.data?.data?.point?.transaction_points ?? 0;
    // const referralPts = response?.data?.data?.point?.referral_points ?? 0;
    setUserPoints(available);
    
    };
    const FailedHandler = (error) => {  
      if(error === "unauthorised"){
       if(sessionModal) return;
       if(sessionModal === false) return setSessionModal(true)
      }else if(error === "Server error"){
    alert("Unable to retrieve points balance")
  }else if(error === "Network error" || error === "User error"){
    alert("Kindly Check your internet connection.")
  }
         
    };

   
      GetFunction("extra/point", 
        setLoading,  
        successHandler, 
        FailedHandler, 
        setPointFetchedResponse,
      setNetworkIssue)
  }else{
    setRestrictUser(true)
  }
   //eslint-disable-next-line
  }, []);

  
  
  const handleProceed = (e) => {
    e.preventDefault();

    const { error } = schema.validate({
      inputValue,
    });

     if (error) {
      setErrors(
        error.details.reduce((acc, curr) => {
          acc[curr.path[0]] = curr.message;
          return acc;
        }, {})
      );
    } else if (parseInt(inputValue) > userPoints) {
      setErrors({
        inputValue: "You don't have enough points to redeem this amount"
      });
    } else {
      setErrors({});
      setProceed(true);
    }
  };




// const handleRedeemPoints = async (e) => {
//   e.preventDefault();
// ...existing code...

const VerifyPinHandler = async () => {
  const RedeemPointsHandler = async () => {
    const Path = "extra/point";
    const payload = { points: parseInt(inputValue) };
    const payloadJson = JSON.stringify(payload);

    // Validate input
    if (!inputValue || parseInt(inputValue) < 10) {
      alert("Minimum redemption is 10 points");
      return;
    }
    if (parseInt(inputValue) > userPoints) {
      alert("You don't have enough points");
      return;
    }


    const successHandler = (response) => {
  // response
const redemptionData = response?.data?.data?.data;

  if (!redemptionData || Object.keys(redemptionData).length === 0) {
    setErrorMessage("Redemption failed: invalid server response");
    return;
  }

   setPointPointsRedeemed(redemptionData.points_redeemed ?? 0);
   setPointAmountRedeemed(redemptionData.amount_redeemed ?? 0);

  setPointRateRedeemed(redemptionData.redeemed_rate ?? "1 PTS - 1 NGN");
  setPointTransactionId(redemptionData.transaction_id ?? "");
  setPointOrderId(redemptionData.order_id ?? "");
  setPointTransactionProduct(redemptionData.transaction_product ?? "");
  setPointTransactionDescription(redemptionData.transaction_description ?? "");




  //  setRedeemResponse(redemptionData);
  setSuccessPopup(true);
  setInputPinPopUp(false);
  setProceed(false);
  setInputPin("");
  setInputValue("");
  setOutputValue("");

  refreshPoints();
};

 const failedHandler = (ErrorType) => {
    if (ErrorType === "unauthorised") {
        setSessionModal(true);
      } else if (ErrorType === "Server error") {
        setFailedPopup(true)
        setErrorMessage("Redeem point exceeded or internal server error");
      } else if (ErrorType === "Network error" || ErrorType === "User error") {
        setErrorMessage("Network Error: Redemption Failed");
      } else {
        setErrorMessage("An Unexpected error has occurred");
      }

  setInputPinPopUp(false);
  setInputPin("");
};
 await PostFunction(Path, 
      setLoading, 
      payloadJson,
       successHandler, 
       failedHandler,
        ()=> {}, setNetworkIssue);
  };


  const refreshPoints = () => {
  GetFunction("extra/point", setLoading, (res) => {
    const available = res?.data?.data?.point?.available_points ?? 0;
    setUserPoints(available);
    
  }, (err) => {
   if(err === "unauthorised"){
        GetFunction("extra/point", setLoading, (res) => {
    const available = res?.data?.data?.point?.available_points ?? 0;
    setUserPoints(available);
    
  }, (err) => {
   if(err === "unauthorised"){
      setSessionModal(true)
   }else if(err === "Server error"){
    alert("Failed to retrieve points balance.")
   }else if(err === "Network error" || err === "User error"){
   setNetworkIssue(true)
   }
  }, setPointFetchedResponse)
   }else if(err === "Server error"){
    alert("Failed to retrieve points balance.")
   }else if(err === "Network error" || err=== "User error"){
   setNetworkIssue(true)
   }
  }, setPointFetchedResponse, setNetworkIssue);
};


  // ...VerifyTransPin logic...
  await VerifyTransPin(
    inputPin,
    (ErrorType) => {
   if (ErrorType === "unauthorised") {
         if(sessionModal) return;
       if(!sessionModal) return setSessionModal(true)
     }else if(ErrorType === "Server error"){
          alert("Pin Verification Failed")
      }
    },
    setLoading,
    setErrorMessage,
    RedeemPointsHandler,
    setNetworkIssue
  );
};



  
  const [realPop, setRealPop] = useState(false);

  const handleRealPop = () => {
    setRealPop(true);
    setSuccessPopup(false);
    setInputPinPopUp(false);
    setProceed(false);
  };

  const { isDarkMode } = useContext(ContextProvider);
const ExitTheDoneButton =()=> {
  setFailedPopup(false);
    setPointPointsRedeemed("");
   setPointAmountRedeemed("");
setPointRateRedeemed("");
  setPointTransactionId("");
  setPointOrderId("");
  setPointTransactionProduct("");
  setPointTransactionDescription("");
  setOutputValue("");
  setInputValue("")
}
 
  return (
    <DashBoardLayout>
      <div
        className={` ${
          isDarkMode
            ? "bg-[#000] text-[#fff] border-[#fff]"
            : "bg-[#ffffff] text-[#000] "
        }  flex flex-col justify-between w-full h-full`}
      >
        <div>
        {/* top part after nav bar */}
        <div className="min-h-[90px] py-[15px]
                         lg:h-[196px] md:h-[112.29px] rounded-[6.6px] md:rounded-[11.46px] lg:rounded-[20px]
                          mx-auto   gap-6 justify-between px-[16.51px] 
                          md:px-[28.65px] lg:px-[50px] flex items-center
                          bg-gradient-to-r from-[#92ABFE] to-[#FFF741]">
          <div className="flex flex-col gap-2  ">
            <div className="text-[11px] leading-[13px] lg:leading-[30px]
                                 lg:text-[24px] md:text-[13.75px] font-semibold">
              REDEEM YOUR EARNED POINTS WITH <br /> AREMXYPLUG.
            </div>
            <div className="text-[10px] leading-[13px] 
                                lg:leading-[25px] lg:text-[20px]
                                 md:text-[11.46px]">
              Redeem all your earned points to real money, withdrawn to <br />
              your bank account instantly without any hassle, free and enjoy!
            </div>
          </div>
          <div>
            <img
              className="w-[88.38px] md:w-[151.9px] md:h-[85.9px] lg:w-[265px] lg:h-[150px]"
              src={cloud}
              alt=""
            />{" "}
          </div>
        </div>

        {/* text lines after top part */}
        <div className = "flex flex-col gap-[20px]">
         <p className="text-[12px] leading-[16px] font-[500]
 mt-[30px] md:mt-[30px] lg:mt-[50px]   lg:text-[20px] lg:leading-[26px]
  text-[#7C7C7C]">How much points would you like to redeem to real money?</p> 
       
        <div
          onClick={handleRealPop}
          className="text-[14px] leading-[18px] font-[500] py-3 mt-[30px] md:mt-[30px]
           lg:mt-[50px] text-center px-4 lg:text-[16px] lg:leading-[20.8px] lg:px-6 lg:w-fit  md:flex md:flex-row md:w-fit md:py-1
            lg:py-3 rounded-sm md:rounded-sm 
            lg:rounded-md md:leading-[11.5px] bg-primary text-white"
        >
          Real-time Points Redeem Tracker
        </div>

        {/* Section with input boxes */}
        <div className="mt-[20px] md:mt-[30px] lg:mt-[50px] flex flex-row w-[100%]">
      <input type="tel"
         value={inputValue}
        onChange={handleInputChange}
        className=" outline-none text-[12px] leading-[16px] 
        lg:text-[16px] lg:leading-[22px] bg-transparent placeholder:text-[#7C7C7C] 
        font-[600] text-[#7C7C7C] border-[1px] w-[80%] md:w-[85%] rounded-l-[10px] 
         h-[50px] md:h-[40px] lg:h-[60px] px-2 py-0 md:pt-1 lg:pt-4 border-slate-200"
         placeholder="Amount to Redeem"
            />{" "}
              {/* {!text ? <p>Amount to Redeem</p> : <div
              onChange={handleInputChange}
              type="number"
              >&#8358;{inputValue}
                
                </div>} */}
        
         
          <div className="h-[50px] md:h-[40px] lg:h-[60px] py-[10px] md:py-[10px]
           w-[20%] rounded-r-[10px] md:w-[8%] justify-between lg:gap-4
            flex flex-row px-[5px] lg:px-2  bg-primary items-center">
          
              {" "}
              <img
                src={icon}
                className="h-full "
                alt=""
              />{" "}
          
         
              {" "}
              <img
                src={arrowdown}
                className=" h-full w-[20px] md:w-[20.75px] md:h-[20.75px] lg:w-[24px] lg:h-[24px]"
                alt=""
              />{" "}
           
          </div>
        </div>
        <div className="flex flex-col items-center mt-[8px] md:mt-[8px] lg:mt-[20px]
         text-[#7C7C7C] lg:text-[16px] leading-[20.8px] gap-3 lg:gap-4 font-[500]
          text-[7px] md:text-[9.2px] ">
          {/* <div className="flex flex-row justify-between gap-[7.7vw]"> */}
          <p className="border-[1px] border-slate-200 p-2 rounded-[10px]
           text-[12px] font-[400] leading-[16px] lg:text-[16px] lg:leading-[22px]">
            Minimum 10 PTS
          </p>
          
          <p className="border-[1px] border-slate-200 p-2  rounded-[10px]
           text-[12px] font-[400] leading-[16px]">
            Available Points Balance: {isLoading ? "Loading..." : userPoints}
          </p>
            {/* I aded this new line to it */}
  {/* <div className="border-[1px] border-slate-200 pl-1 pr-3 py-0 rounded-sm">
    Transaction Points: {isLoading ? "Loading..." : transactionPoints}
  </div> */}
  {/* <div className="border-[1px] border-slate-200 pl-1 pr-3 py-0 rounded-sm">
    Referral Points: {isLoading ? "Loading..." : referralPoints} */}
  {/* </div> */}
  {/* </div> */}
        </div>
        <div className="mt-[7px] flex flex-row lg:mt-[20px]">
         
            <input
              type="tel"
              readOnly
              value={outputValue}
             className=" outline-none text-[12px] leading-[16px] 
        lg:text-[16px] lg:leading-[22px] bg-transparent placeholder:text-[#7C7C7C] 
        font-[600] text-[#7C7C7C] border-[1px] w-[80%] md:w-[85%] rounded-l-[10px] 
         h-[50px] md:h-[40px] lg:h-[60px] px-2 py-0 md:pt-1 lg:pt-4 border-slate-200"
              placeholder="Amount to Receive"
            />{" "}
           {/* {!text ? <p>Amount to Receive</p> : <div>&#8358;{outputValue}</div>} */}
          
          <div  className="h-[50px] md:h-[40px] lg:h-[60px] py-[10px] md:py-[10px]
           w-[20%] rounded-r-[10px] md:w-[8%] justify-between lg:gap-4
            flex flex-row px-[5px] lg:px-2  bg-primary items-center">
            <div>
              {" "}
              <img
                src={flag}
                className="h-full w-[30px]"
                alt="flag"
              />{" "}
            </div>
            <div>
              {" "}
              <img
                src={arrowdown}
                className=" h-full w-[20px] md:w-[20.75px] md:h-[20.75px] lg:w-[24px] lg:h-[24px]"
                alt="arrow"
              />{" "}
            </div>
          </div>
        </div>

        {/* Section after input boxes */}
        <div className="flex flex-row mt-[20px]  justify-between text-[#7C7C7C] font-[600] md:text-[9.17px] text-[8px] lg:text-[16px]">
          <div className="flex flex-row items-center gap-1">
            <div>
              {" "}
              <img src={icon1} className="lg:w-[20px] md:w-[11px] " alt="" />
            </div>
            <div><span className={`
              ${isDarkMode ? "text-white" : "text-black"}`
              }>
  {isLoading
    ? "Loading..."
    : pointRateRedeemed && pointRateRedeemed !== 0
      ? pointRateRedeemed
      : "1 PTS - 1 NGN"}
</span></div>
          </div>
          <div className="flex flex-row items-center gap-1">
            <div>
              {" "}
              <img
                src={icon2}
                className="lg:w-[20px] md:w-[11px]  "
                alt=""
              />{" "}
            </div>
            <div>Transaction Fee - ₦0.00 </div>
          </div>
          <div className="flex flex-row items-center gap-1">
            <div>
              {" "}
              <img
                src={icon3}
                className="lg:w-[20px] md:w-[11px]  "
                alt=""
              />{" "}
            </div>
            <div>Completion Time - Instantly.</div>
          </div>
        </div>

        {errors.inputValue && (
          <div className="text-[12px] text-red-500 italic lg:text-[14px]">
            {errors.inputValue}
          </div>
        )}
        <div className="flex flex-col justify-center md:items-center">
          <div
            onClick={handleProceed}
            className={` ${
               parseInt(inputValue) >= 10  ? "bg-[#04177f]" : "bg-gray-300 cursor-not-allowed"
              // (inputValue.length < 1000 ? "bg-[#0008]" : "bg-[#04177f]",
              // outputValue.length < 1000 ? "bg-[#0008]" : "bg-[#04177f]")
            } text-[12px] mt-[50px] md:mt-[40px] md:w-fit lg:px-12 lg:text-[16px]
             lg:px md:py-1 md:rounded-md md:px-6 cursor-pointer py-3 rounded-md font-[600]
              text-center text-white`}
          >
            Proceed
          </div>
        </div>
        </div>
        </div>

        <div className="flex flex-row items-center justify-center md:mt-[750px] mt-[190px] pb-[10%] lg:mt-[980px] gap-2">
          <div className="text-[8px] lg:text-[12px] font-[600] text-black">
            You need help?
          </div>
          <Link to="/ContactUs">
            <div className="bg-primary text-white lg:text-[8px] text-[7px] px-2 py-1 leading-[10.5px] rounded-lg text-center">
              Contact us
            </div>
          </Link>
        </div>
      </div>
      {/* real time tracker pop-up */}
      {realPop && (
        <Modal>
          <div
            className={`${styles.redeemrate} ${
              toggleSideBar
                ? " lg:ml-[20%] lg:w-[40%] "
                : "lg:w-[562px] md:w-[500px]"
            } w-[90%] overflow-auto flex flex-col gap-0`}
          >
            <img
              onClick={() => {setRealPop(false);
              handlerealClear(); }
              
               } className="absolute right-6 md:right-[25%] lg:right-[33%] w-[18px] h-[18px] my-[1%] md:w-[30px] md:h-[30px] lg:w-[25px] lg:h-[25px]"
              src="/Images/transferImages/close-circle.png"
              alt=""
            />
           <div>
              <hr className="h-[6px] bg-[#04177f] border-none mt-[8%] md:mt-[8%] lg:mt-[6%] md:h-2" />
           </div>
            <div className="flex flex-col text-center items-center justify-center pt-[30px] md:pt-[20px] lg:pt-[1px]">
              <div className="font-[500] flex items-center justify-center w-[100%] text-center text-[10px] py-1 mt-[30px] md:mt-[20px] lg:mt-[50px]   md:text-[9.17px] lg:text-[16px] leading-[20.8px] lg:px-6 lg:w-fit  md:flex md:flex-row md:w-fit md:py-1 md:px-4 lg:py-3 rounded-sm md:rounded-sm lg:rounded-md md:leading-[11.5px] bg-primary text-white">
                Real-time Points Redeem Tracker
              </div>
              <div></div>
            </div>
            <div className="flex flex-col px-3  md:px-6 ">
              <div className=" pt-[30px] md:pt-[40px]">
                <div className="font-bold flex text-[#000] text-[10px] leading-[130%] items-center  gap-[8px]  md:text-[12px] lg:text-[15px]">
                  <p>Amount</p>
                  <img
                    className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                    src="./Images/dashboardImages/arrowright.png"
                    alt="/"
                  />
                </div>
                <div className="mt-[20px] md:mt-[30px] lg:mt-[10px] flex flex-row ">
                  <div className="border-[1px] w-[85%] md:w-[85%] h-[30px] md:h-[40px] lg:h-[50px] px-2 py-0 md:pt-1 lg:pt-4 border-slate-200">
                    <input
                      type="tel"
                      value={realinputValue}
                      onChange={handleRealInputChange}
                      className="w-[100%] outline-none text-[10px] lg:text-[16px] leading-[20.8px  font-[600]  text-[#000]"
                      placeholder="Amount to Redeem"
                    />{" "}
                  </div>
                  <div className="h-[30px] md:h-[40px] lg:h-[50px] w-[15%] md:w-[15%] gap-2 lg:gap-4 flex flex-row px-3 py-2 bg-primary items-center   ">
                    <div>
                      {" "}
                      <img
                        src={icon}
                        className="w-[20px] h-[11px] md:w-[15px] md:h-[15px] lg:w-[24px] lg:h-[24px]"
                        alt=""
                      />{" "}
                    </div>
                    <div>
                      {" "}
                      <img
                        src={arrowdown}
                        className=" h-[9px] w-[9px] md:w-[15px] md:h-[15px] lg:w-[24px] lg:h-[24px] "
                        alt=""
                      />{" "}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center mt-[20px] md:mt-[8px] lg:mt-[20px] text-[#7C7C7C] lg:text-[16px] leading-[20.8px] gap-2 lg:gap-4 font-[500] text-[10px] md:text-[9.2px] ">
                  <div className="flex flex-row items-center border-[1px] py-0 px-8 md:py-2 md:px-2 rounded-md md:rounded-xl border-[#29B8FC] text-[#29B8FC] gap-1">
                    <div>
                      {" "}
                      <img
                        src={icon5}
                        className="lg:w-[20px] md:w-[11px] "
                        alt=""
                      />
                    </div>
                    <div><span className={`  ${isDarkMode ? "text-white" : "text-black"}`}>
  {isLoading
    ? "Loading..."
    : pointRateRedeemed && pointRateRedeemed !== 0
      ? pointRateRedeemed
      : "1 PTS - 1 NGN"}
</span></div>
                  </div>
                </div>
                <div className="font-bold flex mt-8 text-[#000] text-[10px] leading-[130%] items-center  gap-[8px]  md:text-[12px] lg:text-[15px]">
                  <p>To</p>
                  <img
                    className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                    src="./Images/dashboardImages/arrowright.png"
                    alt="/"
                  />
                </div>
                <div className="mt-[7px] flex flex-row lg:mt-[10px]">
                  <div className="border-[1px] w-[85%] md:w-[85%]  text-[10px] lg:text-[16px] h-[30px] md:h-[40px] font-[600] text-[#7C7C7C] lg:h-[50px] px-2 py-0 pt-2 md:pt-3 lg:pt-4 border-slate-200">
                    {/* <input
                      type="number"
                      readOnly
                      value={outputValue}
                      className=" w-[100%] outline-none text-[10px] lg:text-[16px] leading-[20.8px] font-[600] text-[#000]"
                      placeholder="Amount to Receive"
                    />{" "} */}
                    {!text ? <p>Receipient will Receive</p> : <div>&#8358;{realoutputValue}</div>}
                  </div>
                  <div className="h-[30px] md:h-[40px] lg:h-[50px] w-[15%] md:w-[15%] gap-2 lg:gap-4 flex flex-row px-3 py-2 bg-primary items-center   ">
                    <div>
                      {" "}
                      <img
                        src={flag}
                        className="w-[20px] h-[11px] md:w-[15px] md:h-[15px] lg:w-[24px] lg:h-[24px]"
                        alt="flag"
                      />{" "}
                    </div>
                    <div>
                      {" "}
                      <img
                        src={arrowdown}
                        className=" h-[9px] w-[9px]  md:w-[15px] md:h-[15px] lg:w-[24px] lg:h-[24px]"
                        alt="arrow"
                      />{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <button
                  onClick={() => {setRealPop(false); handlerealClear();}}
                  className={`bg-[#04177f] my-[5%] w-[88%] flex justify-center mt-14 items-center mx-auto cursor-pointer text-[14px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[16px] lg:text-[14px] lg:w-[163px] lg:h-[38px] lg:mt-[30px]`}
                >
                  Okay
                </button>
              </div>
            </div>
          </div>
        </Modal>
      )}

      {/* Confirmation Transaction Popup */}
      {proceed && (
        <Modal>
                       <div className={`w-full flex justify-center h-full 
             py-[30px] px-[15px] lg:px-[0px] lg:items-center
              items-end`}>
            <div 
            className={` bvnQuery lg:rounded-[12px] rounded-[10px] 
              h-[520px] ${ toggleSideBar ? " lg:ml-[20%] lg:w-[40%]" : "lg:w-[40%]"
              } w-[100%] md:w-[60%] overflow-auto  ${isDarkMode ? "bg-black text-white border rounded-[10px] border-white": "bg-white text-black"} `}
          >
          {/* <div
            className={`${styles.aremxyMoneyPop} ${
              toggleSideBar ? " lg:ml-[20%] lg:w-[40%]" : "lg:w-[40%]"
            } w-[90%] md:w-[60%] overflow-auto`}
          > */}
         <div className="flex justify-end lg:py-[10px] pr-2 py-[7px] relative">
  <img
    onClick={() => setProceed(false)}
    className="w-[25px] h-[25px] md:w-[35px] md:h-[35px] lg:w-[26px] lg:h-[26px] cursor-pointer"
    src="/Images/transferImages/close-circle.png"
    alt="Close"
  />
</div>
          
  <hr className="h-[6px] bg-[#04177f] border-none md:h-[10px]"/>
          <div className="mx-auto">
            <h2 className="text-[12px] my-[5%] text-center md:my-[3%] md:text-[15px] lg:my-[2%] lg:text-[16px] font-extrabold">
              Confirm Transaction
            </h2>
            <p className={`text-[10px] text-[#000] pt-[20px] font-semibold text-center mb-2 md:text-[12px] lg:text-[14px]
            ${isDarkMode ? "text-white" : "text-black"}`}>
              You are about to redeem{" "}
              <span className={`text-[#000] font-extrabold text-[10px] md:text-[16px] lg:text-[12px]
             ${isDarkMode ? "text-white" : "text-black"}`}>{isLoading ? "Loading..." : inputValue}.00{" "}
              </span>{" "}
              Points to{" "}
                <span className={`text-[#000] font-extrabold text-[10px] md:text-[16px] lg:text-[12px]
             ${isDarkMode ? "text-white" : "text-black"}`}>&#8358;{isLoading ? "Loading..." : outputValue}.00{" "}
              </span>{" "}
              from your PTS balance to {" "}
            </p>
</div>
            <div className="flex flex-col gap-3 pt-[10px]">
              <div className="flex text-[10px] md:text-[14px] pt-[10px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                <p className={`text-[#0008]  ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>Wallet Type</p>
                <span className={`${isDarkMode ? "text-white" : "text-black"}`}>Nigeria NGN Wallet</span>
              </div>
              <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                <p className={`text-[#0008]  ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>Amount To Redeem</p>
                <span className={` ${isDarkMode ? "text-white" : "text-black"}`}>   {isLoading ? "Loading..." : inputValue}.00 PTS</span>
              </div>
              <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                <p className={`text-[#0008]  ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>Account To Receive</p>
                <span className={` ${isDarkMode ? "text-white" : "text-black"}`}>&#8358;{isLoading ? "Loading..." : inputValue}.00</span>
              </div>

              <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                <p className={`text-[#0008] ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>Redeem Rate</p>
                <span className={` ${isDarkMode ? "text-white" : "text-black"}`}>1 PTS - 1 NGN</span>
              </div>

              <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                <p className={`text-[#0008]  ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>Transfaction fee</p>
                <span className={` ${isDarkMode ? "text-white" : "text-black"}`}>&#8358;0</span>
                {/* <span className={` ${isDarkMode ? "text-white" : "text-black"}`}>&#8358;{transferFee}.00</span> */}
              </div>
              <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                <p className={`text-[#0008]  ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`} >Completion Time</p>
                <span className={` ${isDarkMode ? "text-white" : "text-black"}`}>Instantly</span>
              </div>
              <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                <p className={`text-[#0008]  ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>Points Earned</p>
                <span className="text-[#00AA48]">{pointsEarned}</span>
              </div>
            </div>

     
        <div className={`bg-[#F6F7F7] w-[95%] h-auto my-5 lg:my-8 flex py-[7px] 
        justify-between items-center px-[4%] mx-auto rounded-[10px]  
        ${isDarkMode ? "bg-black border rounded-[10px]  border-white" : "bg-[#F6F7F7] "}`}>
              <div className="flex gap-2 items-center">
                  <div className="flex gap-[10px] justify-center items-center">
                  <img className="w-[16px] h-[16px] bg-white" src={icon4} alt="/" />
                </div>
  <div className="flex gap-[10px] items-center">
                        <p className={`text-[12px] md:text-[14px] leading-[20px] 
                        lg:leading-[22px]  lg:text-[16px] font-[500] ${isDarkMode ? "text-white" : "text-black"}`}>
                    
                 Available Points: {isLoading ? <BalanceLoading/> 
                 : userPoints 
                 }
                </p>
              </div>
              </div>
              <img
                className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                src="./Images/dashboardImages/arrowright.png"
                alt="/"
              />
            </div>
            <button
              onClick={handleSwitch}
              className={`bg-[#04177f] my-[5%] w-[90%] flex 
                justify-center items-center mx-auto cursor-pointer 
                text-[14px] font-extrabold h-[50px] text-white rounded-[6px]
                 md:w-[25%] md:rounded-[8px] lg:rounded-[12px] md:text-[16px]
                 lg:text-[14px] lg:w-[163px] lg:h-[38px] lg:my-[2%] `}>
              Confirmed
            </button>
          </div>
          </div>
        </Modal>
      )}

      {/* Input pin pop up */}
      {InputPinPopUp && (
  <Modal>
          <div className="flex items-end justify-center lg:items-center lg:justify-center w-[100%] lg:px-[0px] rounded-[10px] h-[100%] px-[15px]">
            <div
              // className={`${
              //   isDarkMode
              //     ? "bg-black absolute pt-4 h-[250px] shrink-0 rounded-lg shadow border border-white md:h-[350px] w-[481.25px] md:bottom-auto md:top-auto lg:h-[450px] lg:rounded-[20px] "
              //     : styles.inputPin
              // }
              //    ${
              //      toggleSideBar
              //        ? "md:w-[45%] lg:w-[40%] lg:ml-[20%]"
              //        : "lg:w-[40%]"
              //    } md:w-[55%] w-[90%] `}
              className={`flex flex-col lg:mb-[0px] mb-[50px] lg:h-[350px] overflow-scroll h-[300px] bvnQuery ${
                toggleSideBar ? "md:w-[45%] lg:w-[40%]  " : "lg:w-[40%]"
              } md:w-[55%] w-full ${
                isDarkMode
                  ? "text-white bg-black border border-white rounded-[10px]"
                  : "text-black bg-white rounded-[10px]"
              }`}
            >
              <div className="pr-3 lg:pr-2 py-[5px] flex justify-end">
                <img
                  onClick={handle}
                  // className={`absolute right-2 w-[18px] h-[18px] my-[1%] md:w-5 md:h-5 lg:w-[25px] lg:h-[25px] ${
                  //   isDarkMode ? "my-7" : ""
                  // }`}
                  className="w-[25px] h-[25px] md:w-[35px] md:h-[35px] lg:w-[25px] lg:h-[25px]"
                  src="/Images/transferImages/close-circle.png"
                  alt=""
                />
              </div>
              <hr
                // className={`h-[6px] bg-[#04177f] border-none mt-[8%] md:mt-[6%] md:h-[10px] ${
                //   isDarkMode ? "md:mt-10" : ""
                // }`}
                className="h-[6px] bg-[#04177f] border-none md:h-[10px]"
              />
              {/* <p className="text-xs md:text-base font-extrabold text-center my-[10%] lg:my-[%] "> */}
              <div className="flex flex-col w-full justify-center py-[15px] lg:py-[0px] h-[100%] gap-[15px] ">
                <p className="font-extrabold text-[12px] leading-[16px] pb-[20px] md:text-[10px] lg:text-[16px] text-center">
                  Input PIN to complete transaction
                </p>
                <div
                  // className="flex flex-col gap-[10px] justify-center items-center font-extrabold mb-[8%]"
                  className="flex flex-col items-center lg:gap-[0px] gap-[5px] font-extrabold"
                >
                  <div
                    // className=" flex justify-center  ml-[5%] gap-[10px] md:ml-[5%] md:gap-[30px]"
                    className="flex items-center gap-2.5"
                  >
        <OtpInput
  value={inputPin}
  inputType={!isVisible ? "tel" : "password"}
  onChange={setInputPin}
  numInputs={4}
  shouldAutoFocus={true}
  inputStyle={{
    color: isDarkMode ? "#ffffff" : "#000000",
    fontWeight: 700,
    borderRadius: 4,
    height: "35px",
    width: "35px",
    backgroundColor: isDarkMode ? "black" : "white",
    border: isDarkMode ? "1px solid white" : "1px solid #ccc",
  }}
  renderInput={(props) => (
    <input
      {...props}
      className={`inputOTP mx-[2px] ${isFocused ? "focused" : ""}`}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  )}
/>
{/* 
                    ) : (
                      <div className="text-[24px] md:text-[24px] mt-1">
                        * * * *
                      </div>
                    )} */}
                    <div className={`text-[#0003]
                     ${
                            isDarkMode ? "text-[#7c7c7c7c]" :"inherit"
                        }`} onClick={toggleVisibility}>
                      {isVisible ? (
                        <AiFillEye className="w-[16px] h-[16px] lg:w-[24px] lg:h-[24px]" />
                      ) : (
                        <AiFillEyeInvisible className="w-[16px] h-[16px] lg:w-[24px] lg:h-[24px]" />
                      )}
                    </div>
                  </div>
                  <Link
                    to={{
                      pathname: "/ProfileSettingMain",
                      state: authenticationOpen,
                    }}
                    className="text-[10px] leading-[14px] font-extrabold md:text-xs my-2 text-[#04177f]"
                    // className="text-[10px] md:text-xs text-[#04177f]"
                  >
                    Forgot Pin ?
                  </Link>
                </div>
                {errorMessage && (
                  <p className="font-bold text-sm  lg:text-base md:font-medium text-center leading-[18px] lg:leading-[20px] text-red-600">
                    Incorrect Pin
                  </p>
                )}

                <div className="flex flex-col gap-[10px] px-[20px]">
                  <button
                    disabled={inputPin.length !== 4 ? true : false}
                    onClick={VerifyPinHandler}
                    // className={`${
                    //   inputPin.length !== 4 ? "bg-[#0008]" : "bg-[#04177f]"
                    // } my-[5%] w-[225px] flex justify-center items-center mx-auto cursor-pointer text-[10px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-base lg:w-[163px] lg:h-[38px] lg:my-[2%] ${
                    //   isDarkMode ? "border border-white" : ""
                    // }`}
                    className={`${
                      inputPin.length !== 4 && !isDarkMode
                        ? "bg-[#0008]"
                        : inputPin.length !== 4 && isDarkMode
                        ? "bg-gray-300"
                        : "bg-[#04177f]"
                    }  w-full  md:w-[94px] lg:w-[163px] flex justify-center items-center mx-auto cursor-pointer text-xs md:text-[10px] lg:text-base font-extrabold h-[50px] lg:h-[38px] md:h-[22px] text-white rounded-[6px] md:rounded-[6.88px] lg:rounded-[12px]`}
                  >
                    Purchase
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}

      {/* Redeem Successful Popup */}
      {successPopup && (
        <Modal>
   <div className={`w-full flex justify-center h-full 
             py-[30px] px-[15px] lg:items-center
              items-end`}>
           <div className={` bvnQuery lg:rounded-[12px] rounded-[10px] 
              h-[520px] ${ toggleSideBar ? " lg:ml-[20%] lg:w-[40%]" : "lg:w-[40%]"
              } w-[100%] md:w-[60%] overflow-auto  ${isDarkMode ? "bg-black text-white border rounded-[10px] border-white": "bg-white text-black"} `}>
        <div className="flex justify-between items-center 
        mx-[3%] my-[2%] md:my-[1%]">
        <div>
             <img
                onClick={() => setSuccessPopup(false)}
                className=" w-[15px] h-[15px] md:w-[24px] md:h-[15px] lg:w-[42px] lg:h-[25px]"
                src="/Images/login/arpLogo.png"
                alt=""
              />
            </div>   
              <img
                onClick={() => setSuccessPopup(false)}
                className=" w-[18px] h-[18px] my-[1%] md:w-[35px] md:h-[35px] lg:w-[29px] lg:h-[29px] cursor-pointer"
                src="/Images/transferImages/close-circle.png"
                alt=""
              />
            </div>
            <hr className="h-[6px] bg-[#04177f] border-none md:h-[10px]" />
            <h2 className="text-[12px] font-extrabold my-[4%] text-center md:text-[20px] md:my-[3%] lg:text-[14px] lg:my-[2%]">
              Redeem Successful
            </h2>
            <img
              className="w-[50px] h-[50px] mx-auto mb-[2%] lg:w-[60px] lg:h-[60px]"
              src="./Gif/checkMarkGif.gif"
              alt="/"
            />
            <p className={`font-semibold text-[10px] text-[#0008] text-center mb-2 md:text-[14px] lg:text-[14px]
               ${isDarkMode ? "text-white" : "text-black" }
              `}>
              You have successfully redeemed{" "}
              <span className={` ${isDarkMode? "text-white" : "text-black"} text-[#000] font-bold text-[10px] md:text-[16px] lg:text-[14px]`}>
                   {isLoading ? "Loading..." : pointAmountRedeemed} .00
              </span>{" "}
              Points to{" "}
             <span className={` ${isDarkMode? "text-white" : "text-black"} text-[#000] font-bold text-[10px] md:text-[16px] lg:text-[14px]`}>
                   &#8358;{isLoading ? "Loading..." : pointAmountRedeemed}.00<br></br>
              </span>
              from your PTS balance{" "} to
            </p>

            <div className="flex flex-col gap-2 lg:gap-4">
              <div className="flex text-[10px] md:text-[14px] pt-[10px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                <p className={`  ${isDarkMode ? "text-white" : "text-[#7C7C7C]"} text-[#0008]`}>Wallet Type</p>
                <span className={`${isDarkMode ? "text-white" : "text-black"}`}>Nigeria NGN Wallet</span>
              </div>
              <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                <p className={` ${isDarkMode ? "text-white" : "text-[#7C7C7C]"} text-[#0008]`}>Amount To Redeem</p>
                <span className={`  ${isDarkMode ? "text-white" : "text-black"}`}> {isLoading ? "Loading..." : pointAmountRedeemed} PTS</span>
              </div>
              <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                <p className={`  ${isDarkMode ? "text-white" : "text-[#7C7C7C]"} text-[#0008]`}>Account To Receive</p>
                <span className={`  ${isDarkMode ? "text-white" : "text-black"}`}>&#8358;{isLoading ? "Loading..." : pointPointsRedeemed}</span>
              </div>

              <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                <p className={`  ${isDarkMode ? "text-white" : "text-[#7C7C7C]"} text-[#0008]`}>Redeem Rate</p>
                <span className={`  ${isDarkMode ? "text-white" : "text-black"}`}>
                 {isLoading ? "Loading..." : pointRateRedeemed}
</span>
              </div>

              <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                <p className={`  ${isDarkMode ? "text-white" : "text-[#0008]"}`}>Transaction fee</p>
                <span className={`  ${isDarkMode ? "text-white" : "text-black"}`}>&#8358;0</span>
                {/* <span className={`  ${isDarkMode ? "text-white" : "text-black"}`}>{transferFee}.00</span> */}
              </div>
              <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[14px]">
                <p className= {`  ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>Order Number</p>
                <span className={`  ${isDarkMode ? "text-white" : "text-black"}
                `}>
                          {isLoading ? "Loading..." : pointOrderId}
                  </span>
              </div>
            </div>

            <div className={`bg-[#F2FAFF] w-[90%]   mx-auto p-[8px] my-5 flex justify-between 
        items-center md:p-[9px] lg:p-[10px] rounded-[5px] lg:rounded-[10px]
              ${
                isDarkMode ? "bg-slate-800 " : "bg-[#F2FAFF]"
              }`}>
              <p className={`text-[10px] leading-[13px] text-center
             md:text-[14px] md:leading-[18px] lg:text-[14px]  font-semibold 
             ${isDarkMode ? "text-white" : "text-black"}`}>
              The redeem has been sent successfully. Please check the correspondent wallet to view the value.
              </p>
            </div>
            <div className="flex w-[70%] mx-auto items-center gap-[5%] md:gap-[20px] justify-center md:w-[20%] lg:my-[5%]">
              <button
                onClick={() => {
                  setSuccessPopup(false);
                }}
                className={`bg-[#04177f] w-[111px] flex justify-center items-center mx-auto cursor-pointer text-[12px] font-extrabold h-[40px] text-white rounded-[6px] md:px-[50px] md:w-[70%] md:rounded-[8px] md:text-[16px] lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
              >
                Done
              </button>
              <Link to="/redeem-receipt">
                <button
                  onClick={() => {
                    setSuccessPopup(false);
                  }}
                  className={`border-[1px] w-[111px] border-[#04177f] flex justify-center items-center mx-auto cursor-pointer text-[12px] font-extrabold h-[40px] rounded-[6px] md:w-[80px] md:rounded-[8px] md:text-[16px] lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
                >
                  Receipt
                </button>
              </Link>
            </div>
          </div>
          </div>
        </Modal>
      )}
    

     {failedPopup && (
        <Modal>
           <div  className={`w-[90%] md:w-[50%] lg:w-[35%] mx-auto 
               rounded-lg overflow-hidden
                ${isDarkMode ? "bg-black border-[1px] rounded-[7px] border-white": "bg-white"}`}>
             <div className="flex justify-between items-center p-4">
               <img
              className={`w-6 h-6  `}
                    src="/Images/login/arpLogo.png"
                    alt="Logo"
                  />
                  <img
                    onClick={() => setFailedPopup(false)}
                    className="w-6 h-6 cursor-pointer"
                    src="/Images/transferImages/close-circle.png"
                    alt="Close"
                  />
              
             </div>
             <hr className="h-1 bg-[#04177f] border-none" />
             <div className="p-4 text-center">
               <h2 className="text-lg md:text-xl font-semibold my-4">
                 Transaction Failed
               </h2>
               <img
                  className={`w-32 h-32 mx-auto my-6 
                       ${isDarkMode ? "bg-black rounded-full border-[0.1px] border-black"
                        : "bg-white"}`}
                 src="./Images/failed.png"
                 alt="Failed"
               />
               <p className="text-sm text-red-500 font-[600] mb-8">
                 {errorMessage}
               </p>
               
                       <button
                      onClick={() => ExitTheDoneButton()}
                      className="bg-[#04177f] w-[100%] max-w-xs mx-auto py-2
               text-white rounded-md font-medium"
                    >
                      Done
                    </button>
                     
    
             </div>
           </div>
           </Modal>
       )}
               {isLoading && (
                    <Modal>
                        <Loader/>
         
                    </Modal>
               ) } 
               {sessionModal && (
                <InternalLoginSession setExpiredSessionLogin={setSessionModal}/>
               )}
               {restrictUser && sessionModal === false && (
        <RestrictionPopUp/>
      ) }
    </DashBoardLayout>
  );
};

export default PointRedeem;
