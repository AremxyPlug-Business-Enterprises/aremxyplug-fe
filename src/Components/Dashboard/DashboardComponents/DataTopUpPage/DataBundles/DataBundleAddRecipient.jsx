import React, { useContext, useState } from "react";
import airtimestyles from "../../../../AirTimePage/AirtimeVtu.module.css";
import { DashBoardLayout } from "../../../Layout/DashBoardLayout";
import { Link } from "react-router-dom";
import { ContextProvider } from "../../../../Context";
import arrowDown from "../../../../AirTimePage/Images/arrow-down.svg";
import Joi from "joi";
import call from "../../../../AirTimePage/Images/call.svg";
import user from "../../../../AirTimePage/Images/user.svg";
import { Modal } from "../../../../Screens/Modal/Modal";
import DataBundle from "../DataBundles/DataBundles-Images/DataBundles.svg";
import styles from "../../DataTopUpPage/DataTopUp.css";
import { BalanceLoading } from "../../../../Loader/Loader";
//import { DataBundleSelectRecipient } from "./DataBundleSelectRecipient";
const DataBundleAddRecipient = () => {
  const { networkName, setNetworkName, networkIssue, setAlertCustom, setNetworkIssue, 
    setSessionModal, sessionModal,  setDataRecipientDisplay } = useContext(ContextProvider);
  const { recipientName, setRecipientName } = useContext(ContextProvider);
  const { recipientNumber, setRecipientNumber } = useContext(ContextProvider);
  const { networkImage, setNetworkImage } = useContext(ContextProvider);
  const { isDarkMode } = useContext(ContextProvider);

  const [errors, setErrors] = useState({});
  const [save, setSave] = useState(false);
  const [showList, setShowList] = useState(false);
 const [confirmRecipient, setConfirmRecipient] = useState(false)
  const [confirm, setConfirm] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // For managing loading state

  const networkList = [
    {
      id: 1,
      name: "MTN",
      image: require("../../../../AirTimePage/Images/mtn.svg").default,
    
    },
    {
      id: 2,
      name: "AIRTEL",
      image: require("../../../../AirTimePage/Images/airtel.png"),
    },
    {
      id: 3,
      name: "GLO",
      image: require("../../../../AirTimePage/Images/glo.png"),
    },
    {
      id: 4,
      name: "9MOBILE",
      image: require("../../../../AirTimePage/Images/9mobile.svg").default,
    },
    {
      id: 5,
      name: "SMILE",
      image:
        require("../DataBundles/SmileDataBundle/SmileDataBundleImages/SmileLogo.svg")
          .default,
    
    },
    {
      id: 6,
      name: "SPECTRANET",
      image:
        require("../DataBundles/SpectranetDataBundle/SpectranetDataBundleImages/SpectranetLogo.svg")
          .default,
   },
  ];

  const Network = ({ name, image, onClick }) => {
    return (
     <div className={`pb-[20px] pt-[20px] md:pb-[14px] 
                                md:pt-[14px] font-weight-bold text-[14px] leading-[18.4px] 
                                md:py-[15px]
                                 py-[8px] pl-[10px] font-[500]  
         md:text-[13.227px] md:leading-[17.195px] 
         shadow-[0px_3.30667px_8.26667px_0px_rgba(0,0,0,0.25)] 
         lg:text-[16px] lg:leading-[20.8px] cursor-pointer ${
           isDarkMode
             ? "bg-black text-white border border-white"
             : "hover:bg-[#EDEAEA] bg-white text-[#7C7C7C]"
         }`}
                      
                               onClick={onClick}>
                <div className= "flex gap-[5px] lg:gap-[10px] items-center">
                    <img src={image} alt=""
                     className="md:h-[29.27px] h-[14.27px]" />
               
                <h2>{name}</h2>
                </div>
            </div>
    );
  };

  const handleSelectNetwork = (name, image, val) => {
    setNetworkName(name);
    setNetworkImage(image);
    setShowList(false);

  };

  const handleShowList = () => {
    setShowList(!showList);
    setNetworkName("");
    setNetworkImage("");
  };

  const schema = Joi.object({
    recipientNumber: Joi.string()
      .pattern(new RegExp(/^\d{11,}/))
      .required()
      .messages({
        "string.pattern.base": "Phone number should be 11 digits ",
      }),
  });

  const handleSave = (e) => {
    e.preventDefault();

    const { error } = schema.validate({
      recipientNumber,
    });

    if (error) {
      setErrors(
        error.details.reduce((acc, curr) => {
          acc[curr.path[0]] = curr.message;
          return acc;
        }, {})
      );
    } else {
      setSave(true);
      setErrors({});
    }
  };

  const {
    toggleSideBar,

  } = useContext(ContextProvider);


  const handleConfirm = async () => {
    setIsLoading(true);
    setErrors({});
   try {
      setConfirmRecipient(true)
      const requestBody = {
        network: networkName, // Changed from networkName
        name: recipientName, // Changed from recipientName
        phone: recipientNumber, // Changed from recipientNumber
      };
  const response = await fetch(
        "https://api.aremxyplug.com/api/v1/data/recipient",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
          credentials : "include" // Use the new object here
        }
      );
      if (!response.ok) {
        const errorData = await response.json();
        setErrors(errorData.errors || { server: "An error occurred" });
         setSave(false);
      setConfirm(true);
      setRecipientNumber("");
      setRecipientName("");
      
      }

      // Handle successful response

     
    } catch (error) {
     if(error && error.response === undefined){
      if(networkIssue) return;
      if(!networkIssue) return setNetworkIssue(true)
     }else if(error && error.response?.status === 401){
    if(sessionModal) return;
  if(!sessionModal) setSessionModal(true)
  }else if(error && error.status === 500){
  
if(error?.response?.data?.phone){
      setAlertCustom({
     message : `Failed to add recipient Phone Number: ${error.response?.data?.phone}`,
     type : "error",
     show : true
      })

  }
      setErrors({ network: "Network error, please try again later." });
    } }finally {
      setIsLoading(false);
    }
  };

 // const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
 const numericValue = value.replace(/\D/g, "").slice(0, 11);
setRecipientNumber(numericValue);
  };

  return (
    <DashBoardLayout>
      <div className={airtimestyles.AirtimeTops1}>
        <div className={airtimestyles.airtimeTop}>
          <div
            className={`bg-[#FFF] relative lg:ml-[20px] 2xl:ml-0 ${
              isDarkMode
                ? "bg-[#000] text-[#fff] border-[#fff]"
                : "bg-[#ffffff] text-[#000] "
            } flex flex-col justify-between h-full`}
          >
            <section
              className={`md:px-[0px] ${
                isDarkMode
                  ? "bg-[#000] text-[#fff] border-[#fff]"
                  : "bg-[#ffffff] text-[#000] "
              }  flex flex-col justify-between h-full`}
            >
              <div
                id="DataBundle"
                className="w-full h-[90px] gap-[5px] md:h-[112.29px] lg:h-[196px] md:rounded-[11.5px] rounded-[7px] md:mt-[-1px] px-[10px] lg:gap-[50px] pt-[10px] lg:px-[30px] lg:rounded-[20px] lg:py-[20px] pb-[16px] flex justify-between items-center lg:ml-[-20px] lg:w-[102%] 2xl:w-full 2xl:ml-0"
              >
                <div className="w-[100%] pt-[19px] lg:pt-[20px] pl-[8.5px] md:pl-[9px]">
                  <p className="text-[10px] mb-2 font-bold uppercase w-[100%] md:text-[16px] md:w-[70%] lg:w-[70%] lg:text-[20px] 2xl:w-[80%] 2xl:text-[24px] lg:mb-4">
                    DATA BUNDLES, AFFORDABLE AND AUTOMATED.
                  </p>
                  <p className="text-[7px] font-[400] leading-[9px] mb-3 md:text-[10px] md:leading-[12.2px] w-[90%] md:w-[75%] lg:w-[75%] 2xl:w-[85%] 2xl:mt-[5px] lg:mt-[20px] lg:text-[16px] lg:leading-[26px] 2xl:text-[20px] lg:mb-[20px]">
                    Top up your mobile sim with our automated data bundles
                    directly from network providers, enjoy discounts without any
                    hassle or hidden fee.
                  </p>
                </div>

                <div className="w-[91px] h-[66px] lg:w-[199px] lg:h-[199px] lg:mt-[40px]">
                  <img
                    src={DataBundle}
                    alt=""
                    className="w-[55.482px] h-full md:w-[98px] md:h-[px] lg:w-[166.447px] lg:h-[150px]"
                  />
                </div>
              </div>
            </section>
          </div>
          <div className="flex text-[#7c7c7c] text-[10px] leading-[26px] items-center gap-[8px] md:text-[12px] lg:text-[16px] 2xl:text-[20px]">
            <p>Add Recipient Details </p>
            <img
              className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
              src="./Images/dashboardImages/arrowright.png"
              alt="/"
            />
          </div>
        
         
            <div className="flex flex-col gap-[20px]  lg:mb-[100px] md:gap-0">
              <div className="flex flex-col  md:flex-row gap-[20px]
                 md:gap-[12px] lg:gap-[22px] md:my-2 lg:my-4">
                  {/* Start network */}
                <div className="relative flex flex-col gap-[3px]
                   lg:gap-[5px] w-full md:w-1/2">
                  <h2 className={` ${isDarkMode ? "text-white" : "text-black"} text-[14px] lg:text-[17px]
                       md:text-[13px]
                      md:font-[600] font-[400`}>Select Network</h2>
                       <div  className={`mt-2  md:mt-0 rounded-[10px] 
             md:rounded-0  md:p-0 text-base
         sm:p-3  flex justify-between py-[8.803px]
         pr-[13px] pl-[10.876px] font-[400] 
         leading-[10.4px] md:text-[11px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] 
    md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[45.927px] md:h-[35px] lg:h-[50px] border-[#9C9C9C] px-[11px] md:px-[6px] lg:px-[10px] text-[#7C7C7C] self-center  ${
      isDarkMode
        ? "bg-black text-white border border-white"
        : "hover:bg-[#EDEAEA]"
    }`}
    >
              <div onClick={handleShowList} 
              className={`flex justify-left  w-[100%] items-center`}>
                       {networkName ? (
                           <div onClick={handleShowList} 
                           className={` items-center flex h-[100%] ${styles.labelInput}  
                       `}
                                   >
            
                                      {networkImage && <img className="h-5 w-5"
                                  src={networkImage} alt="" />}
                                                                  
                           <h2 className={`text-left text-[13.2px]  font-[400] 
                       leading-[17.4px] md:text-[11px] md:leading-[12.206px]
                          lg:text-[16px] lg:leading-[20.8px] 
                       ${isDarkMode ? "text-white" : "text-[#7E7E7E]" }`}>
                                      {networkName}
                                      </h2>
                                                              </div>
                                                          ) : (
                                        
               <div className="flex justify-between w-[100%]">
                  <h2 className="text-[#7E7E7E] text-[14px] lg:text-[17px]
                  md:text-[13px] md:font-[600] font-[400]
                                                  ">Select Network</h2>
                                                    <img className="decdrop  self-center
                                                     align-middle md:h-[14.038px] md:w-[14.038px] 
                              lg:h-[24px] lg:w-[24px] w-[14px] h-[16px]"
                               src={arrowDown} alt="" />
                               </div>
                                      )}
                                                       
                   </div>
               
                {/* End */}
                {showList && (
               <div 
                       className={`absolute lg:top-[90px] md:top-[60px] left-0 top-[74px] 
                          z-[2]  flex flex-col w-[100%] lg:h-225px md:h-[210px]  
          ${
            isDarkMode
              ? "bg-black text-white border border-white"
              : "hover:bg-[#EDEAEA]"
          }`}>
                                        {networkList.map((item) => (
                                             <div className='text-[#7C7C7C]'>
                                            <Network key={item.id} 
                                            image={item.image} 
                                            name={item.name} 
                                            onClick={() => {
                                              handleSelectNetwork(item.name, item.image, item.discount)
                                            }}
                                            
                                            />
                                             </div>
                                        ))}
                                    </div>
                )}
              </div>
              </div>
              <div  className="relative z-0 flex flex-col gap-[3px]
                   lg:gap-[5px] w-full md:w-1/2">
                <h2  className={` ${isDarkMode ? "text-white" : "text-black"} text-[14px] lg:text-[17px]
                       md:text-[13px]
                      md:font-[600] font-[400`}>
                  Phone Number{" "}
                 <Link   onClick = {()=> {
                  setDataRecipientDisplay(true);
                   }}
                     className={`${styles.span3} text-blue-800 !text-[15px] md:!text-base`}>
                      (Select Recipients)
                     </Link>
                </h2>
            
                 <div className="relative">
                    <input
                      type="number"
                      className={`mt-2  md:mt-0 rounded-[10px] 
             md:rounded-0  md:p-0 text-base
         sm:p-3  flex justify-between py-[8.803px]
         pr-[13px] pl-[10.876px] font-[400] 
         leading-[10.4px] md:text-[11px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] 
    md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[45.927px] md:h-[35px] lg:h-[50px] border-[#9C9C9C] px-[11px] md:px-[6px] lg:px-[10px] text-[#7C7C7C] self-center  ${
      isDarkMode
        ? "bg-black text-white border border-white"
        : "hover:bg-[#EDEAEA]"
    }`}
                      required
                      placeholder="Add recipient phone number"
                      value={recipientNumber}
                      onChange={(event) => {
                        handleChange(event);
                        setRecipientNumber(event.target.value);
                      }}
                    />
                   
                      <img  className="absolute left-[90%] top-[40%] md:top-[30%]
                         lg:left-[94%] self-center align-middle md:h-[14.038px] md:w-[14.038px] 
      lg:h-[24px] lg:w-[24px] w-[14px] h-[16px] " src={call} alt="" />
                  </div>
                  </div>
                  </div>
            
                {errors.recipientNumber && (
                  <div className="text-[12px] text-red-500 italic lg:text-[14px]">
                    {errors.recipientNumber}
                  </div>
                )}
             
          
            <div className=" flex flex-col gap-[3px]
                   lg:gap-[5px] w-full md:w-1/2">
           
                <h2  className={` ${isDarkMode ? "text-white" : "text-black"} text-[14px] lg:text-[17px]
                       md:text-[13px]
                      md:font-[600] font-[400`}>
                  Recipient Name{" "}
                  <span className={`${styles.span4} !text-[15px] md:!text-base`}>
                    (optional)
                    </span>
                </h2>
                <div className={`relative `}>
                
                    <input
                      type="text"
                      className={`mt-2  md:mt-0 rounded-[10px] 
             md:rounded-0  md:p-0 text-base
         sm:p-3  flex justify-between py-[8.803px]
         pr-[13px] pl-[10.876px] font-[400] 
         leading-[10.4px] md:text-[11px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] 
    md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[45.927px] md:h-[35px] lg:h-[50px] border-[#9C9C9C] px-[11px] md:px-[6px] lg:px-[10px] text-[#7C7C7C] self-center  ${
      isDarkMode
        ? "bg-black text-white border border-white"
        : "hover:bg-[#EDEAEA]"
    }`}
                      required
                      placeholder="Add recipient name"
                      onChange={(event) => setRecipientName(event.target.value)}
                      value={recipientName}
                    />
                   
                      <img className=" absolute left-[90%] top-[40%] md:top-[30%]
                         lg:left-[94%] self-center align-middle md:h-[14.038px] md:w-[14.038px] 
      lg:h-[24px] lg:w-[24px] w-[14px] h-[16px] " src={user} alt="" />
                   
              </div>
            </div>
          </div>
         
          {save && (
            <Modal>
                <div className={`w-full flex justify-center h-full 
                         py-[30px] px-[15px] lg:px-[0px] lg:items-center
                          items-end`}>
                <div className={` bvnQuery lg:rounded-[12px] rounded-[10px]  pb-3
                          h-[400px] ${ toggleSideBar ? " lg:ml-[20%] lg:w-[40%]" : "lg:w-[40%]"
                          } w-[100%] md:w-[60%] overflow-auto  ${isDarkMode ? "bg-black text-white border rounded-[10px] border-white": "bg-white text-black"} `}
                          >
                <div className="flex justify-between items-end mx-[3%] my-[2%] lg:my-[1%] ">
                  <img
                    onClick={() => setSave(false)}
                    className=" w-[18px] h-[18px] md:w-[25px] md:h-[25px] lg:w-[35px] lg:h-[25px]"
                    src="/Images/login/arpLogo.png"
                    alt=""
                  />

                  <img
                    onClick={() => {
                      setSave(false);
                      // window.location.reload();
                   
                      setRecipientNumber("");
                      setRecipientName("");
                    }}
                    className=" w-[18px] h-[18px] md:w-[25px] md:h-[25px] lg:w-[29px] lg:h-[29px]"
                    src="/Images/transferImages/close-circle.png"
                    alt=""
                  />
                </div>
                <hr className="h-[6px] bg-[#04177f] border-none md:h-[10px]" />

                <div className="text-center mt-[20px] font-semibold text-[10px] md:text-[12px] lg:text-[16px]">
                  Please Confirm
                </div>

                <div className="bg-[#FFF0BA] mx-5 h-[80px] my-5 flex justify-between items-center px-[5%] md:h-[75px] md:mx-[20px] md:rounded-[15px] lg:h-[75px]">
                  <p className="text-[10px] text-[#4A4A4A] font-semibold text-center mx-auto w-[250px] md:text-[9px] md:w-full lg:text-[14px]">
                    Are you sure you want to add this details to your
                    recipients? Please re-confirm the identity and be informed
                    any successful transactions to a strange details can not be
                    reversed.
                  </p>
                </div>

                <div className="flex flex-col gap-5 mt-[30px] lg:gap-4 px-[20px]">
                  <div className="flex items-center justify-between">
                    <h2 className="text-[#7C7C7C] text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                      Network
                    </h2>
                    <div className="flex gap-2">
                      <div className="h-[15px] w-[15px]">
                        {networkImage && <img src={networkImage} alt="" />}
                      </div>
                      <h2 className="text-[10px] font-semibold">
                        {networkName}
                      </h2>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <h2 className="text-[#7C7C7C] text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                      Phone Number
                    </h2>
                    <div className="flex gap-1">
                      <h2 className="text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                        {recipientNumber}
                      </h2>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <h2 className="text-[#7C7C7C] text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                      Recipient Name
                    </h2>
                    <div className="flex gap-1">
                      <h2 className="text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                        {recipientName}
                      </h2>
                    </div>
                  </div>
                </div>

                <div
                  className={`w-full h-[38px] mt-[35px] md:mt-[20%] px-[20px] mx-auto lg:mt-[5%] xl:mt-[10%]`}
                >
                  <button
                    className={` bg-[#04177f] w-full flex justify-center items-center mr-auto cursor-pointer text-[14px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[40%] md:h-[50px] md:mx-auto md:px-[10%] md:rounded-[8px] md:text-[20px] lg:text-[16px] lg:h-[38px] xl:h-[50px] lg:my-[4%]`}
                    onClick={handleConfirm}
                  >
                   {confirmRecipient === false ? "Confirmed" : <BalanceLoading/>} 
                  </button>
                  {isLoading && <p>Loading...</p>}
                </div>
              </div>
              </div>
            </Modal>
          )}
          {confirm && (
            <Modal>
                 <div className={`w-full flex justify-center h-full 
                         py-[30px] px-[15px] lg:px-[0px] lg:items-center
                          items-end`}>
                <div className={` bvnQuery lg:rounded-[12px] rounded-[10px] 
                          h-[270px] ${ toggleSideBar ? " lg:ml-[20%] lg:w-[40%]" : "lg:w-[40%]"
                          } w-[100%] md:w-[60%] overflow-auto  ${isDarkMode ? "bg-black text-white border rounded-[10px] border-white": "bg-white text-black"} `}
                          >
                <div className="flex justify-between items-center mx-[3%] my-[2%] lg:mt-[3%] xl:mt-0 ">
                  <img
                    onClick={() => {
                      setConfirm(false);
                      //   window.location.reload();
                    }}
                    className=" w-[18px] h-[15px] md:w-[25px] md:h-[15px] lg:w-[35px] lg:h-[22px] "
                    src="/Images/login/arpLogo.png"
                    alt=""
                  />

                  <img
                    onClick={() => {
                      setConfirm(false);
                      window.location.reload();
                    }}
                    className="cursor-pointer right-2 w-[18px] h-[18px] my-[1%] md:w-[35px] md:h-[25px] lg:w-[35px] lg:h-[35px] "
                    src="/Images/transferImages/close-circle.png"
                    alt=""
                  />
                </div>

                <hr className="h-[6px] bg-[#04177f] lg:mt-[2%] border-none mt-[2%] md:mt-[3%] md:h-[10px]" />
                <p className="text-[10px] md:text-[16px] lg:text-[18px] font-extrabold text-center my-[3%] lg:my-[%]">
                  Successful
                </p>
                <div className="flex flex-col gap-[10px] justify-center items-center font-extrabold mb-[7%]">
                  <img
                    className="w-[50px] h-[50px] mx-auto mb-[2%] lg:w-[100px] lg:h-[100px]"
                    src="./Gif/checkMarkGif.gif"
                    alt="/"
                  />

                  <p className="text-[10px] text-[#2ED173] font-semibold md:text-[14px] text-center">
                    New recipient contact has been added successfully.
                  </p>
                </div>

                <div
                  className={`w-full h-[38px] mt-[35px] md:mt-[10%] px-[20px] mx-auto lg:mt-[5%] xl:mt-[5%]`}
                >
                  <Link to="/data-bundles">
                    <button
                      className={`bg-[#04177f] w-full flex justify-center items-center mr-auto cursor-pointer text-[14px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[40%] md:mx-auto md:px-[10%] md:rounded-[8px] md:text-[20px] lg:text-[16px] lg:h-[38px] lg:my-[4%]`}
                      onClick={() => {
                        setConfirm(false);
                        
                      }}
                    >
                      Done
                    </button>
                  </Link>
                </div>
              </div>
              </div>
            </Modal>
          )}
          <div className={airtimestyles.containFlex3}>
            <button
              className={`${
                recipientNumber.length < 11 ? "bg-[#0008]" : "bg-[#04177f]"
              } w-full flex justify-center items-center mr-auto cursor-pointer text-[14px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[20px] lg:text-[16px] lg:h-[38px] lg:my-[4%]`}
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </div>
        <div
          className={`${
            isDarkMode ? "" : ""
          } flex gap-[15px] justify-center items-center mt-[100%] pb-[25%] md:pb-[2%] md:mt-[40%] lg:mt-[40%] lg:pb-0`}
        >
          <div className="text-[10px] md:text-[12px] lg:text-[14px]">
            You need help ?
          </div>
          <Link to="/ContactUs">
            <div
              className={`${
                isDarkMode ? "border" : "bg-[#04177f]"
              } text-[10px] p-1 text-white rounded-[8px] lg:text-[18px]`}
            >
              Contact Us
            </div>
          </Link>
        </div>
      </div>
    </DashBoardLayout>
  );
};

export default DataBundleAddRecipient;
