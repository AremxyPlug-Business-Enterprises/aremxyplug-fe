import { useState, useEffect } from 'react';
import styles from './AirtimeVtu.module.css'
import { DashBoardLayout } from '../Dashboard/Layout/DashBoardLayout';
import { Modal } from "../Screens/Modal/Modal";
import Joi from "joi";
import OtpInput from "react-otp-input";
import weight from './Images/weight.svg';
import add from './Images/add-square.svg';
import data from './Images/data.svg';
import arrowDown from './Images/arrow-down.svg';
import discountImg from './Images/discount-shape.svg';
import call from './Images/call.svg';
import user from './Images/user.svg';
import money from './Images/moneys.svg';
import { ContextProvider } from '../Context';
import { useContext } from 'react';
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { AirtimeVtuReceipt } from './AirtimeVtuReceipt';
import { AirtimeReceiptFailed } from './AirtimeReceiptFailed';
import { Loader } from '../Loader/Loader';
import { VerifyTransPin, 
    GetFunction, 
     RestrictionPopUp, PostFunction } from '../ApiCollection.jsx/ApiBuck';
import Select from  "../Dashboard/DashboardComponents/DataTopUpPage/DataBundles/DataBundles-Images/Select.svg";
import { GetLocalStorage } from '../LocalStorage/LocalStorage';
import { BalanceLoading } from '../Loader/Loader';
import airtimestyles from "./AirTime.module.css";
import SelectRecipient from './SelectRecipient';


const AirtimeVtu = () => {
    const Data = GetLocalStorage()
    // const {  isDarkMode } = useContext(ContextProvider);
    const tFee = 0;
    const points = '+2.00';
      
    const { networkName, setNetworkName, newBalance, setNewBalance, discount, setDiscount,
            setSessionModal,
          sessionModal, airtimeResponse, setAirtimeResponse } = useContext(ContextProvider);
    const { selectedProduct, setSelectedProduct, recipientsAirtime, setRecipientsAirtime } = useContext(ContextProvider);
    const { recipientName, setRecipientName, networkIssue } = useContext(ContextProvider);
    const { recipientNumber, setRecipientNumber } = useContext(ContextProvider);
    const { amount, setAmount } = useContext(ContextProvider);
    const { networkImage, setNetworkImage } = useContext(ContextProvider);
    const { networkId, setNetworkId, authenticationOpen } = useContext(ContextProvider);
    const [restrictUser, setRestrictUser] = useState(false)
    const [balanceLoader, setBalanceLoader] = useState(false);
    const [loadingRecipient, setLoadingRecipient] = useState(false);
    const [proceed, setProceed] = useState(false);
     const [discountPercentage, setDiscountPercentage] = useState("%")
    const [paymentSelected, setPaymentSelected] = useState(false);
    const [showList, setShowList] = useState(false);
    const [showPayment, setShowPayment] = useState(false);
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [paymentAmount, setPaymentAmount] = useState('');
    const [confirm, setConfirm] = useState(false);
    const [errors, setErrors] = useState({});
    const [codes, setCodes] = useState(false);
    const [transactionID, setTransactionID] = useState("");
    const [orderID, setOrderID] = useState("");
    const [refNumber, setRefNumber] = useState("");
    const [description, setDescription] = useState("");
    const [isLoading, setIsLoading] = useState(false); // For managing loading state
    const { isDarkMode, setNetworkIssue } = useContext(ContextProvider);
 
    const [errorMessage, setErrorMessage] = useState(false);
    const [passDataBalance, setPassDataBalance] = useState({});
    const [balanceStatus, setBalanceStatus] = useState("");
    const [selectRecipientDisplay, setSelectRecipientDisplay] = useState(false);
    const [discountLoader, setDiscountLoader] = useState(false)
   const balanceStringToNum = Number(newBalance);
 
   const [airtimeTransactionNetwork, setAirtimeTransactionNetwork] = useState(false)


   const GetRecipientList = async()=> {
      const successHandler = (response)=> {
setRecipientsAirtime(response?.data?.data?.recipients?.recipients);
      }
      const failedHandler = async(errorType)=> {
   
        if(errorType === "Network error" || errorType === "User error"){
             if(!networkIssue) return  setNetworkIssue(true)
                        if(networkIssue) return;
        }else if(errorType === "unauthorised"){
        await GetFunction("airtime/recipient", 
            setLoadingRecipient, 
            successHandler, 
            failedHandler
            ,setRecipientsAirtime, setNetworkIssue)
        }else if(errorType === "Server error"){
    alert("Unable to fetch your recipient List try again later.")
        }
      }
   await GetFunction("airtime/recipient", 
    setLoadingRecipient, 
    successHandler, 
    failedHandler,()=> {}, setNetworkIssue)
   }
    
      const calcAmount = (a, b) => {
        if (a === '' || b === '') {
            return ''
        } else {
            const totalAmount = (Math.floor((1 - (a / 100)) * b))
            return totalAmount;
        }
     }
      const newAmount = calcAmount(discount, amount) ;  
     // console.log(newAmount);   
     //Balance state Handling
             const updateBalance = typeof newBalance === "string" && newBalance !== undefined && newBalance !== null
              && newBalance?.length > 0
             ? balanceStringToNum  : ((typeof newBalance === "string" &&  newBalance?.length < 1) || (typeof newBalance !== "string" &&
               newBalance === undefined
             )) && typeof passDataBalance?.data?.data?.data?.balance === "string"  ? 
 Number(passDataBalance?.data?.data?.data?.balance) :  passDataBalance?.data?.data?.data?.balance  
             && typeof passDataBalance?.data?.data?.data?.balance  === "string" && passDataBalance?.data?.data?.data?.balance?.length > 0
             ? Number(passDataBalance?.data?.data?.data?.balance)   : "";
             
                 let CheckSufficiency = newAmount  >  updateBalance
                 

//Getting The User Balance of the application.
                 const GetBalance =   async()=> {
                    if(!navigator){
                      if(!networkIssue) return  setNetworkIssue(true)
                        if(networkIssue) return;
                     }
                               const SuccessHandler = (response)=> {
                            setPassDataBalance(response)
                          }
                         const FailedHandler = async(ErrorType)=> {
                           if(ErrorType === "unauthorised"){
                             if(sessionModal) return;
                             if(!sessionModal) return setSessionModal(true);
                         }else if(ErrorType === "Server error"){
                         alert("Failed to retrieve balance")
                         }else if (ErrorType === "Network error" || ErrorType === "User error"){
                                 if(!networkIssue) return  setNetworkIssue(true)
                        if(networkIssue) return;
                         }else{
                            alert("An unexpected has occured")
                         }
                        }
                         await GetFunction("balance",
                             setBalanceLoader, 
                             SuccessHandler, 
                             FailedHandler,
                            ()=>{}, setNetworkIssue)
                           } 


                 useEffect(() => {
                    setRecipientNumber("");
                    setRecipientName("");
                    setNetworkName("")
                  
            if (Data?.ConfirmAcc === "true"){                    
             GetBalance();
             GetRecipientList();
          setNewBalance(passDataBalance?.data?.data?.data !== undefined
               ? passDataBalance?.data?.data?.data?.balance : "");
             }else {
                      setRestrictUser(true);
                    }
                       
                  //eslint-disable-next-line
                          }, []);
                     
   useEffect(()=> {
  const HandleBalanceStatus = ()=> {
              if(CheckSufficiency){
               setBalanceStatus("Insufficient fund")
              }else{
                setBalanceStatus("");
               }
            }
 HandleBalanceStatus();
        },[CheckSufficiency]);

        //Getting Recipient Details
       //Endpoint to get the discount percentage
       const [discountObj, setDiscountObj] = useState({})
       const getDiscountPercentage = async(network)=> {
        setDiscountObj({});
        console.log(network);
         const successHandler = (response)=> {
            setDiscountObj(response);
            setDiscount(response?.data?.data?.discount_percent);
         }
         const FailedHandler = (ErrorType)=> {
            if(ErrorType === "Network Error" || ErrorType === "User error"){
                setNetworkIssue(true)
            }
         }
const path = `products/telecom/airtime/${network === "MTN" ? "mtn"  
    : network === "AIRTEL" ? "airtel" 
    : network === "GLO" ? "glo" 
    : network === "9MOBILE" ? "9mobile" : ""}`
         await GetFunction(path,
             setDiscountLoader,
               successHandler, FailedHandler,
               setDiscountObj,
                setNetworkIssue)
       }

 const networkList = [
        {
            id: 1,
            name: 'MTN',
            image: require('./Images/mtn.svg').default,
            networkId: "1",
        },
        {
            id: 2,
            name: 'AIRTEL',
            image: require('./Images/airtel.png'),
            networkId: "2",
        },
        {
            id: 3,
            name: 'GLO',
            image: require('./Images/glo.png'),
            networkId: "3",
        },
        {
            id: 4,
            name: '9MOBILE',
            image: require('./Images/9mobile.svg').default,
            networkId: "4",
        },
    ];

 
    const methodOptions = [
      {
        method: "Nigeria",
        balance: `(${ updateBalance?.toLocaleString("en-NG", {
                 style : "currency",
                 currency : "NGN"
            })})`, 
           flag:  require("./Images/ng.svg").default,
        id: 1,
        code : "NGN Wallet"
      },
      { method: "United States",
         balance: "($0.00)", 
         flag: require("./Images/us.svg").default,
          id: 2, code : "USD Wallet" },
      { method: "United Kingdom",
         balance: "(€0.00)", 
         flag:   require("./Images/gb.svg").default,
          id: 3,
          code : "GBP Wallet"
        },
      { method: "European Union",
         balance: "(£0.00)", 
         flag:  require("./Images/eu.svg").default,
          id: 4,
        code : "EUR Wallet" },
      { method: "Australia", balance: "(AU$0.00)",
         flag:   require("./Images/au.svg").default,
          id: 5 , code : "AUD Wallet"},
      { method: "Kenya", balance: "(KSh0.00)"
        , flag:   require("./Images/ke.svg").default, id: 6, code : "KSH Wallet"  },
    ];


   


    const Network = ({ name, image, onClick }) => {
        return (
            <div  className={`pb-[20px] pt-[20px] md:pb-[14px] 
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
               
                <h2 >{name}</h2>
                </div>
            </div>
        )
    }


    const handleShowList = () => {
        setShowList(!showList);
        setNetworkName('');
        setNetworkImage('');
        setDiscount('');
        //setSelected(false);
    }

   
    const handleShowPayment = () => {
        setShowPayment(!showPayment)
        setName('');
        setImage('');
        setPaymentAmount('');
        setPaymentSelected(false);
    }
const amountToNumber = Number(amount) 
    const schema = Joi.object({
        recipientNumber: Joi.string()
            .pattern(new RegExp(/^\d{11,}/))
            .required()
            .messages({
                "string.pattern.base": "Phone number should be 11 digits ",
            }),
        amountToNumber: Joi.number()
 .required()
  .messages({
                 "number.min" : "Amount can not be less than 50"
            }).min(50)
           // .min(50)
        
    });
    //console.log(typeof amount)
   //console.log(amount);

    const canProceed =
  recipientNumber?.length === 11 &&
  amount?.length >= 2 && amountToNumber >= 50 &&
  networkName &&
  paymentSelected;

   //validating the prefix of Nigeria network providers with the
    // network name selected
     // Nigerian number validate
     
  function validateNigerianNumberByNetwork(number) {
    const networks = {
      'AIRTEL': ['0701', '0708', '0802', '0808', '0812', '0901', '0902', '0904', '0907', '0912', '0911'],
      'MTN': ['07025', '07026', '0703', '0704', '0706', '0803', '0806', '0810', '0813', '0814', '0816', '0903', '0906', '0913', '0916'],
      'GLO': ['0705', '0805', '0807', '0811', '0815', '0905', '0915'],
      '9MOBILE': ['0809', '0817', '0818', '0909', '0908']
    };
 
    for (let network in networks) {
      for (let prefix of networks[network]) {
        if (number.startsWith(prefix) && number.length === prefix.length + 7) {
          return network;
        }
      }
    }
    return 'Unknown network';
  }
const DetectAndErrorNetFunc = (name, value)=> {
if(value?.length < 11){
    setErrors({})
  }
   if(value?.length === 11){
    const detectedNetwork = validateNigerianNumberByNetwork(value);
 if ((detectedNetwork !== name) && name?.length > 1) {
   setErrors({
      recipientNumber: `Invalid ${name} number. Please enter a valid ${name} number.`,
    });
   return true
   
  }else if(name?.length < 1){
       setErrors({
      recipientNumber: `Select Network Type`,
    });
    return true
  
  } else{
    setErrors({})
    return false
  }
  }
}


const CheckRecipientInfoInList =(value)=> {
   if(value && value?.length === 11){
   const findingRecipient = recipientsAirtime?.length > 0 && recipientsAirtime !== null && recipientsAirtime !== undefined ? 
     recipientsAirtime?.find((item)=>{ 
    return value === item?.phone
   }
) : []
  return findingRecipient
  }
}
const RecipientExistCheck = CheckRecipientInfoInList(recipientNumber)


 const handleProceed = (e) => {
  e.preventDefault();
// Validate with Joi
  const { error } = schema.validate({
    recipientNumber,
    amountToNumber,
  });

  if (error) {
    setErrors(error.details.reduce((acc, curr) => {
      acc[curr.path[0]] = curr.message;
      return acc;
    }, {}))
  }else{
 setProceed(true);
  setErrors({});
  }

};
const [airtimeReceiptDiscountValue, setAirtimeReceiptDiscountValue] = useState({})
  const handleAddRecipient = async() => {

      const successHandler = (response)=> {
       GetRecipientList()
            alert("Recipients saved successfully");
            setFetchedResponse(response)
        }
  const failedHandler = async(ErrorType)=> {
 if(ErrorType === "Server error"){
  alert("Unable to save recipients at the moment")
 }else if(ErrorType === "unauthorised"){
 await PostFunction("airtime/recipient",
     setIsLoading, 
     requestBody,
     successHandler, 
     failedHandler, 
     setFetchedResponse, setNetworkIssue)
            }else if(ErrorType === "User error" || ErrorType === "Network error"){
              setAirtimeTransactionNetwork(true)
              setNetworkIssue(true)
            }else {
              alert("Unable to save recipients at the moment.")
            }
        }
        const setFetchedResponse = ()=> {
           return;
        }
         const requestBody = {
                network: networkName ? networkName?.toLowerCase() : "",  // Changed from networkName
                name: recipientName,   // Changed from recipientName
                phone: recipientNumber // Changed from recipientNumber
            };
  await PostFunction("airtime/recipient",
     setIsLoading, 
     requestBody,
     successHandler, 
     failedHandler, 
     setFetchedResponse, setNetworkIssue)
    };

//Setting the network on the user interface
 const handleSelectNetwork = (name, image, val, netId) => {
  setErrors({});
  getDiscountPercentage(name)
        setNetworkName(name)
        setNetworkImage(image);
        setDiscount(val);
        setShowList(false);
        setNetworkId(netId);
         if(recipientNumber?.length > 1 && recipientNumber?.length === 11){
        DetectAndErrorNetFunc(name, recipientNumber)
         }
    }

    

    const {
        toggleSideBar,
        inputPin,
        setInputPin,
        toggleVisibility,
        isVisible,
    } = useContext(ContextProvider);

    const handleConfirm = () => {
        setProceed(false);
        setConfirm(true);
        setInputPin('')
    }


    const {
        transactSuccessPopUp,
        setTransactSuccessPopUp,
        transactFailedPopUp,
        setTransactFailedPopUp,
    } = useContext(ContextProvider);



const [airtimePurchaseError, setAirtimePurchaseError] = useState("")
const handleTransactionSuccessClose = async()=> {
  const requestBody = {
   network : networkId, 
  mobileno : recipientNumber,
  amount : amount,
   discount : `${discount}%`,
  discounted_amount : newAmount,
  recipient : recipientName
 }
  const successHandler = (response)=> {
    console.log(response?.data?.data?.data?.status)
        const result = response?.data?.data?.data;
    if(response?.data?.data?.data?.status === "success" 
        || response?.data?.data?.data?.status === "successful"){
 // Access the nested `data`
           setTransactionID(result?.transaction_id);
           setAirtimeReceiptDiscountValue(result?.discount_amount)
          setRefNumber(result?.reference_number);
           setOrderID(result?.order_id);
           setDescription(result?.transaction_description);
           setDiscountPercentage(result?.discount_percentage)
           setInputPin("");
           setTransactSuccessPopUp(true); 
           setConfirm(false);
           setAirtimeResponse(response)
           return response;
    }else if(response?.data?.data?.data?.status === "failed"|| response?.data?.data?.data?.status === "Failed"){
        setAirtimePurchaseError("Internal Server error")
        setInputPin("")
        setConfirm(false)
         setAirtimeResponse(response);
          setTransactFailedPopUp(true); 
           setTransactionID(result?.transaction_id);
           setAirtimeReceiptDiscountValue(result?.discount_amount)
          setRefNumber(result?.reference_number);
           setOrderID(result?.order_id);
           setDescription(result?.transaction_description);
           setDiscountPercentage(result?.discount_percentage)
    }
  }
  const FailedHandler = (ErrorType)=> {
      setInputPin("");
if(ErrorType === "Network error" || ErrorType === "User error"){
        setInputPin("");
          setAirtimePurchaseError("Network Error")
           setTransactFailedPopUp(true); 
                 setConfirm(false)// 
}else if(ErrorType === "Server error" ) {
   setInputPin("");
     setAirtimePurchaseError("Server error")
  setTransactFailedPopUp(true); 
  setConfirm(false)//
}else if(ErrorType === "unauthorised"){
 if(sessionModal) return;
 if(sessionModal === false) return setSessionModal(true)
}else{
  //alert("Purchase Failed")
    setAirtimePurchaseError("an unxpected error has occured");
    setTransactFailedPopUp(true);
}
  }
  await PostFunction("airtime",  setIsLoading, requestBody,
    successHandler, FailedHandler, 
    ()=> {}, setNetworkIssue);

}
    const [receipt] = useState(false);
    const [receiptFailed] = useState(false);

    const handleReceipt = () => {
        setTransactSuccessPopUp(false);
    }

    const handleReceiptFailed = () => {
        setTransactFailedPopUp(false);
    }

    const handleCodes = () => {
        setCodes(false);
        setCodes(true);
    }

    const handleChange = (e) => {
        const value = e.target.value;

        const numericValue = value.replace(/\D/g, "");

        setRecipientNumber(numericValue);
    };

 const HandleAirtime = async () => {
    if(!canProceed) return
    if(canProceed){
  await VerifyTransPin(
    inputPin,
    async(ErrorType) => {
      if (ErrorType === "unauthorised") {
   if(sessionModal) return;
   if(!sessionModal) return setSessionModal(true)
      }else if(ErrorType === "Server error"){
            alert("Pin Verification Failed")
      }else if(ErrorType === "Network error" || ErrorType === "User error"){
        setNetworkIssue(true)
        setAirtimeTransactionNetwork(true);
      }
    },
    setIsLoading,
    setErrorMessage,
    handleTransactionSuccessClose, setNetworkIssue
  );
}
};


if(Data?.ConfirmAcc === "true"){
  window.addEventListener("online", async()=> {
    if(airtimeTransactionNetwork === true && recipientsAirtime?.length < 1){
   await  GetRecipientList();
  }
  if(airtimeTransactionNetwork === true && (newBalance === ""|| newBalance === undefined || newBalance === null) ){
     await GetBalance()
    } 
  })
}


    return (
        <DashBoardLayout>
            <div className={styles.AirtimeTops}>
                <div className={styles.airtimeTop}>
                    <div 
                    className="min-h-[90px] py-[15px] lg:h-[196px] md:h-[112.29px] rounded-[6.6px] 
                    md:rounded-[11.46px] lg:rounded-[20px] mx-auto  flex gap-6 justify-between
                 px-[16.51px] md:px-[28.65px] lg:px-[50px] bg-gradient-to-r from-[#73FF9A] to-[#6EDCFF] ">
                        <div className="w-[80%] flex flex-col justify-center
                         pt-[19px] lg:pt-[20px] h-[100%] gap-[10px] lg:gap-[20px]">
                            <h2  className="text-[11px] leading-[14px]  lg:leading-[30px]
                   lg:text-[24px] md:text-[13.75px] font-semibold">
                                AIRTIME VTU, FAST AND AUTOMATED.</h2>
                            <h2 className="text-[10px] leading-[13px] lg:text-[20px]
                   lg:leading-[25px] md:text-[11.46px]">
                                Top up your mobile sim using our automated airtime vending directly from network providers, enjoy discounts without any hassle or hidden fee.
                            </h2>
                        </div>
                        <div className="flex w-[23%] h-[97%] pt-2 shrink-0">
                            <img src="./Images/airtimeTopUp/young.png" 
                            className="h-full" alt="" />
                        </div>
                    </div>
                    <div className={`${styles.containFlex} !text-[12px] md:!text-base`}>
                        <div className={`
                                    ${
                                        isDarkMode 
                                            ? "!bg-black !text-white !border !border-solid !border-white" 
                                            : "border border-solid border-[#0003] bg-white text-black"
                                    }
                        ${styles.FlexPut} !h-[36.927px] md:!h-[51px]
                  `}>
                            <div className='flex justify-between p-[4px] h-full items-center cursor-pointer'
                             onClick={()=> {
                                setSelectRecipientDisplay(true);
                            }}>
                             <h2>
                                Select Recipient
                                </h2>
                                    <div className={styles.FlexImg} 
                                  
                                    >
                                        <img src={weight} alt="" className='' />
                                    </div>
                            
                            </div>
                        </div>
                        <div className={`
                                        ${
                                        isDarkMode 
                                            ? "!bg-black !text-white !border !border-solid !border-white" 
                                            : "border border-solid border-[#0003] bg-white text-black"
                                    }
                        ${styles.FlexPut} !h-[36.927px] md:!h-[51px]
                                  `}>
                            <Link to="/add-vtu-recipient">
                                <div className={`
                                ${styles.conPut} !relative !top-[12px] md:!relative 
                                md:!top-base !text-[12px] md:!text-base
                             
                                  `}>
                                    <h2>Add Recipient</h2>
                                    <div className={styles.FlexImg}>
                                        <img src={add} alt="" className='' />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>  
              {/* .containFlex1 */}
                    <div className={`flex mt-[35px] my-[30px] 
                        md:w-[100%] md:gap-[10%] !text-[15px] md:!text-base`}>
                        {/* </div><div className={styles.FlexPut1} onClick={handleCodes}> */}
                        <div className="rounded-[4px] w-full bg-primary text-white md:w-[50%] h-[30px] lg:h-[51px] md:rounded-[6px] lg:rounded-[10px] lg:pl-[14px] lg:pr-[16px] flex items-center justify-center md:justify-between gap-[10px] px-[5px]" onClick={handleCodes}>
                            {/* <div className={styles.conPut1}> */}
                                 <h2 className="lg:text-[16px] lg:leading-[24px] text-[14px] md:text-[12px] leading-[12px]">
              Airtime Balance USSD Codes</h2>
                                {/* <div className={styles.FlexImg1}> */}
                                <div className="lg:w-6 lg:h-6 w-[11px] h-[11px]">
                                    <img src={data} alt="" className="w-full h-full hidden md:block" />
                                {/* </div> */}
                            </div>
                            
                        </div>
                         {/* <div className="hidden md:w-[50%] md:block"></div> */}
                    </div>
                    <div  className="flex flex-col gap-[20px]  lg:mb-[100px] md:gap-0">
                    {/* <div className={styles.mainGrid}> */}
                        <div className="flex flex-col  md:flex-row gap-[20px]
                 md:gap-[12px] lg:gap-[22px] md:my-2 lg:my-4">
                        {/* <div className={styles.mainGridCol}> */}
                            <div className="relative flex flex-col gap-[3px]
                   lg:gap-[5px] w-full md:w-1/2">
       <h2     className={` ${isDarkMode ? "text-white" : "text-black"} text-[14px] lg:text-[17px]
                       md:text-[13px]
                      md:font-[600] font-[400`}>
                        Select Network</h2>
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
             className={` items-center h-[100%] ${styles.labelInput}  
         `}
                     >
    <div className={styles.network}>
                        {networkImage && <img className=""
                    src={networkImage} alt="" />}
                                                    </div>
             <h2 className={`text-left text-base  font-[400] 
         leading-[20px] md:text-[11px] md:leading-[12.206px]
            lg:text-[16px] lg:leading-[20.8px] 
         ${isDarkMode ? "text-white" : "text-[#7E7E7E]" }`}>
                        {networkName}
                        </h2>
                                                </div>
                                            ) : (
                          
 <div className="flex justify-between w-[100%]">
    <h2 className="text-[#7E7E7E] text-base leading-[20px] lg:text-[17px]
    md:text-[13px] md:font-[600] font-[400]
                                    ">Select Network</h2>
                                      <img className="decdrop  self-center
                                       align-middle md:h-[14.038px] md:w-[14.038px] 
                lg:h-[24px] lg:w-[24px] w-[14px] h-[16px]"
                 src={arrowDown} alt="" />
                 </div>
                        )}
                                         
     </div>
                                     
     {/* ${styles.colDown} */}
                                {showList &&
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
                                              handleSelectNetwork(item.name, item.image, item.discount, item.networkId)
                                            }}
                                            
                                            />
                                             </div>
                                        ))}
                                    </div>


                                }
                            </div>
                            </div>
                            
                            {/* <div className={styles.headPro}> */}
                        <div className="relative z-0 flex flex-col gap-[3px]
                   lg:gap-[5px] w-full md:w-1/2">
                                <h2    className={` ${isDarkMode ? "text-white" : "text-black"} text-[14px] lg:text-[17px]
                       md:text-[13px]
                      md:font-[600] font-[400`}> Product</h2>
                                <div 
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
    }`} >
                                    
                        <h2 className="text-green-600 className={`text-left text-[13.2px]  font-[400] 
         leading-[17.4px] md:text-[11px] md:leading-[12.206px]
            lg:text-[16px] lg:leading-[20.8px] 
        ">VTU</h2>
                                         <img className="self-center align-middle
                                         md:h-[14.038px] md:w-[14.038px] 
                lg:h-[24px] lg:w-[24px] w-[14px] h-[16px]" src={arrowDown} alt="" />
                                
                                </div>
                                
                            </div>
                        </div>
                        <div className="flex flex-col  md:flex-row gap-[20px]
                 md:gap-[12px] lg:gap-[22px] md:my-2 lg:my-4">
                            <div  className="relative flex flex-col gap-[3px]
                   lg:gap-[5px] w-full md:w-1/2">
 <h2     className={` ${isDarkMode ? "text-white" : "text-black"} text-[14px] lg:text-[17px]
                       md:text-[13px]  md:font-[600] font-[400`}>Discount</h2>
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
    }`}>
<h2 className={`text-left text-[13.2px]  font-[400] 
         leading-[17.4px] md:text-[11px] md:leading-[12.206px]
            lg:text-[16px] lg:leading-[20.8px] 
         ${isDarkMode ? "text-white" : "text-[#7E7E7E]" }`}>
             {discountLoader === true  ? <BalanceLoading/>
              :  networkName?.length > 0 && discountObj?.data?.data?.discount_percent && discountLoader=== false 
              ? `${networkName + ' ' + discountObj?.data?.data?.discount_percent}%` : ''}
           

                       </h2>
                                 
                                   
                                        <img className="self-center align-middle
                                         md:h-[14.038px] md:w-[14.038px] 
                lg:h-[24px] lg:w-[24px] w-[14px] h-[16px]"
                                        src={discountImg} alt="" />
                                    </div>
                               
                            </div>
                 

                            
                    <div className="relative flex flex-col gap-[3px]
                   lg:gap-[5px] w-full md:w-1/2"> 
          <h2  
          className={` ${isDarkMode ? "text-white" : "text-black"}
          text-[14px] lg:text-[17px] md:text-[13px]  md:font-[600] font-[400`}>
            Phone Number <span onClick={()=> {
            setSelectRecipientDisplay(true)                        
            }} className = "text-blue-800 cursor-pointer">
                (Select Recipient)
                    </span>
                                </h2>
            <div className="relative flex flex-col h-full 
            gap-[3px] lg:gap-[5px] w-full ">
                 <input type='number'
                 maxLength={11}
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
 required placeholder='Add recipient phone number' onChange={(event) => {
     handleChange(event);
      setRecipientNumber(event.target.value);
               DetectAndErrorNetFunc(networkName, event.target.value);
              CheckRecipientInfoInList(event.target.value)
                     
        }} value={recipientNumber} />
                                       
                                            <img
                                               className=" absolute left-[90%] top-[40%] md:top-[30%]
                         lg:left-[94%] self-center align-middle md:h-[14.038px] md:w-[14.038px] 
      lg:h-[24px] lg:w-[24px] w-[14px] h-[16px] "
                                             src={call} alt="" />
                                       
                                    </div>
                                      {errors.recipientNumber && (
                                    <div className={`
                                        ${
                                            isDarkMode 
                                                ? "!bg-black !text-[#7c7c7c]" 
                                                : "!text-[#7c7c7c]"
                                        }!text-[14px] text-red-500 italic lg:text-[14px]
                                        
                                        `}>
                                        {errors.recipientNumber}
                                    </div>
                                )}
                                </div>
                              
                            </div>
                        
                    
                       
                        {/* <div className={styles.mainGridCol}>
                            <div className='flex flex-col '> */}
                             <div className="flex flex-col  md:flex-row gap-[20px]
                 md:gap-[12px] lg:gap-[22px] md:my-2 lg:my-4">
                            <div className=" flex flex-col gap-[3px]
                   lg:gap-[5px] w-full md:w-1/2"> 
                                <h2 className={` ${isDarkMode ? "text-white" : "text-black"} text-[14px] lg:text-[17px]
                       md:text-[13px]
                      md:font-[600] font-[400`}>Recipient Name 
                    <span className={`${styles.span4} !text-[15px] md:!text-base`}>(optional)</span></h2>
                 
                                <div className={`relative `}>
                                   
               <input type='text'  className={`mt-2  md:mt-0 rounded-[10px] 
             md:rounded-0  md:p-0 text-base
         sm:p-3  flex justify-between py-[8.803px]
         pr-[13px] pl-[10.876px] font-[400] 
         leading-[10.4px] md:text-[11px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] 
    md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[45.927px] md:h-[35px] lg:h-[50px] border-[#9C9C9C] px-[11px] md:px-[6px] lg:px-[10px] text-[#7C7C7C] self-center  ${
      isDarkMode
        ? "bg-black text-white border border-white"
        : "hover:bg-[#EDEAEA]"
    }`}   required placeholder='Add recipient name'
                  onChange={(event) => setRecipientName(event.target.value)} value={recipientName} />
                                      
              <img  className=" absolute left-[90%] top-[40%] md:top-[30%]
                         lg:left-[94%] self-center align-middle md:h-[14.038px] md:w-[14.038px] 
      lg:h-[24px] lg:w-[24px] w-[14px] h-[16px] "
               src={user} alt="" />
                                   
                                
                                </div>
                            </div>
                            {/* Type Amount */}
                            <div  className="relative flex flex-col gap-[3px]
                   lg:gap-[5px] w-full md:w-1/2"> 
                            {/* <div className="flex flex-col lg:gap-[14px] gap-[7px] mt-8 md:mt-10"> */}
                                <h2     className={` ${isDarkMode ? "text-white" : "text-black"} text-[14px] lg:text-[17px]
                       md:text-[13px]
                      md:font-[600] font-[400`}>
                        Type Amount</h2>
                              
                                    <div className={`relative
                                `}>
                                        <input 
                                        onInput={(e)=> {
                                        const value = e.target.value;
                                        const numericValue = value.replace(/\D/g, "");
                                        e.target.value = numericValue;
                                        }}
                                        type='tel' 
                                        placeholder='Type amount' 
                                        required 
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
    }`}   onChange={(event) => setAmount(event.target.value)} value={amount} />     
                                            <img className="absolute left-[90%] top-[40%] md:top-[30%]
                         lg:left-[94%] self-center align-middle md:h-[14.038px] md:w-[14.038px] 
      lg:h-[24px] lg:w-[24px] w-[14px] h-[16px]"
                                             src={money} alt="" />
                                        </div>
                                {errors.amountToNumber && (
                                    <div className="text-[14px] text-red-500 italic lg:text-[14px]">
                                        {errors.amountToNumber}
                                   </div>
                                )}
                                  {(!errors.amountToNumber && networkName === "" && amount?.length > 1) && (
                     <p className="text-[#F95252] text-[13px] 
                      md:text-[12px] lg:text-[14px] font-[400] italic">
                           Select Network Type
                                            </p>

                                        )}
                        </div>
                        </div>


                        {/* <div className={styles.mainGridCol}> */}
                            {/* <div className="flex flex-col lg:gap-[14px] gap-[6.6px] md:mt-4 mt-5">  */}
<div className="flex flex-col  md:flex-row gap-[20px]
                 md:gap-[12px] lg:gap-[22px] md:my-2 lg:my-4">

      <div className="relative flex flex-col gap-[3px] 
      lg:gap-[5px] w-full md:w-1/2">
      <h2     className={` ${isDarkMode ? "text-white" : "text-black"} text-[14px] lg:text-[17px]
                       md:text-[13px]
                      md:font-[600] font-[400`}>
                        Total Amount
                      </h2>
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
    }`}>

     <h2 className={`text-left text-[13.2px]  font-[400] 
         leading-[17.4px] md:text-[11px] md:leading-[12.206px]
            lg:text-[16px] lg:leading-[20.8px] 
         ${isDarkMode ? "text-white" : "text-[#7E7E7E]" }`}>{newAmount? `NGN${newAmount}` : `Total Amount`}
                      </h2>
                       <img src={money} alt="" 
                                          className="self-center align-middle md:h-[14.038px]
                                           md:w-[14.038px] lg:h-[24px] lg:w-[24px] w-[14px] h-[16px]" />
                                
 </div>
      </div>

                            <div  className="relative flex flex-col gap-[3px] 
      lg:gap-[5px] w-full md:w-1/2">
                                {/* <div className="flex flex-col lg:gap-[14px] gap-[7px] md:mt-10 mt-8"> */}
                                    <h2     className={` ${isDarkMode ? "text-white" : "text-black"} text-[14px] lg:text-[17px]
                       md:text-[13px]
                      md:font-[600] font-[400`}>Payment Method</h2>
                        <div onClick={handleShowPayment}
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
                >
                                       {paymentSelected ? (
                   <div className={airtimestyles.labelInput}
                                                          >
                             <h2  className={`text-left text-[13.2px] font-[400] 
         leading-[17.4px] md:text-[11px] md:leading-[12.206px]
            lg:text-[16px] lg:leading-[20.8px] 
         ${isDarkMode ? "text-white" : "text-[#7E7E7E]" }`}>
                                  {name} {" "} {paymentAmount}
                                         </h2>
                                                          </div>
                                                        ) : (
             <h2 className={`text-left text-base  font-[400] 
         leading-[20px] md:text-[11px] md:leading-[12.206px]
            lg:text-[16px] lg:leading-[20.8px] 
         ${isDarkMode ? "text-white" : "text-[#7E7E7E]" }`}>
                                                            Select Payment Method
                                                          </h2>
                                                        )}
                                       {paymentSelected ? (
                                                          <button
                                                            className={`rounded-full w-[12.02px] h-[12.02px] flex 
                                                              items-center justify-center text-[16px] leading-[20px] overflow-hidden md:w-[12.02px] lg:w-[25px] md:h-[12.02px] lg:h-[25px] 
                                                               ${isDarkMode ? "bg-black text-white" : ""}`}
                                                            onClick={handleShowPayment}
                                                          >
                                                            <img
                                                              src={image}
                                                              alt=""
                                                               className="decdrop absolute left-[92%] lg:left-[94%]
                                                    self-center align-middle md:h-[14.038px] md:w-[14.038px] 
                                            lg:h-[24px] lg:w-[24px] w-[14px] h-[16px]"
                                                            />
                                                          </button>
                                                        ) : (
                                                          <button
                                                            className="lg:w-6 lg:h-6 h-[11px] w-[11px]"
                                                            onClick={handleShowPayment}
                                                          >
                                                            <img src={arrowDown} alt="" 
                                                            className="decdrop  left-[92%] lg:left-[94%]
                                                    self-center align-middle md:h-[14.038px] md:w-[14.038px] 
                                            lg:h-[24px] lg:w-[24px] w-[14px] h-[16px]" />
                                                          </button>
                                                        )}
                                    </div>
                               
                                
                                {/* <div className="relative"> */}
                               
                                {showPayment &&
                                    
                           <div
                             className={`absolute top-[102%] z-[3] flex flex-col w-[100%]  
                                         cursor-pointer border-[1px]  border-gray-100 rounded-[3px]  
                                               ${
                                   isDarkMode
                                     ? "bg-black border-white rounded-[7px] text-white"
                                     : "text-[#7C7C7C] bg-white rounded-br-[7px] rounded-bl-[7px] lg:rounded-br-[14px] lg:rounded-bl-[14px]"
                                 }
                                 ${
                                   toggleSideBar
                                     ? "lg:w-[31.5%] lg:top-[100.5%]"
                                     : "lg:w-[38.5%] lg:top-[105.3%]"
                                 }  shadow-xl border w-full lg:w-full flex flex-col divide-y absolute top-20`}
                               >
               
    
                                     {methodOptions.map((methodOption) => {
                                         return (
                                           <div
                                             onClick={(e) => {
                                           setName(methodOption.id === 1
                                                   ? methodOption.code
                                                   : name === "NGN Wallet" &&
                                                     methodOption.id !== 1
                                                   ? "NGN Wallet"
                                                   : ""
                                               );
                                setPaymentAmount(methodOption.id === 1 && paymentAmount === "" && name !== "NGN Wallet" ? 
                                methodOption.balance : methodOption.id !== 1 && name === "NGN Wallet"
                                 ?  paymentAmount : "");
               
                          setShowPayment(() => {
                              if (methodOption.id === 1) {
                               setPaymentSelected(true);
                                    setShowPayment(false);
                                       document.querySelector(".decdrop")
                                        .classList.remove("DropIt");
                                                 } else {
                                                    setPaymentSelected(false);
                                                   setShowPayment(true);
                                                   document
                                                     .querySelector(".decdrop")
                                                     .classList.add("DropIt");
                                                 }
                                               });
                                             
                                                       
                                              setImage(methodOption.flag);
                                              
                                             }}
                                            className={`py-[18px] md:py-[14px] font-normal px-2 flex
                                        items-center gap-[5px] text-[12px] md:text-[14px] 
                                        lg:text-[16px] shadow-[0px_3.30667px_8.26667px_0px_rgba(0,0,0,0.25)]
                                         transition-all duration-300 hover:bg-slate-50
                                      ${
                                        isDarkMode
                                          ? "text-white hover:bg-slate-800 bg-black "
                                          : "text-[#7E7E7E]"
                                      } ${
                                       methodOption.method === "Nigeria"
                                         ? "cursor-pointer"
                                         : "cursor-not-allowed opacity-50"
                                     }`}
                                     
                                             key={methodOption.id}
                                           >
                                             <img
                                               className="md:h-[29.27px]  h-[14.27px]"
                                               src={methodOption.flag}
                                               alt=""
                                             />
                                 {methodOption.code}
                                               {""}   {balanceLoader === true && methodOption.id === 1 ? <BalanceLoading/> :  methodOption.balance}
                                             
                                           </div>
                                         );
                                       })}
                                    </div>
                                }
                               </div>
                            </div>
                          
                            
                           
                         
                        {/* </div> */}
                    {/* </div> */}
                    <div className={styles.add}>
                        <h2 className='!text-[13px] md:!text-base'>
                          {RecipientExistCheck?.phone === recipientNumber 
                           && networkName?.length > 1
                          && !errors?.recipientNumber
                         
                           ? "Exists in recipients" : "Add to recipients"}
                        </h2>
                        {isLoading === false  ? (
                            
                        <div onClick={() => { 
                      if(networkName?.length > 1 && 
                         recipientNumber?.length > 1 && recipientNumber?.length === 11
                            && RecipientExistCheck?.phone === undefined && RecipientExistCheck?.phone !== recipientNumber
                           &&   !errors?.recipientNumber) {
                               handleAddRecipient();
                            }else if(recipientNumber?.length < 11 && recipientName?.length < 1) {
                                alert("Input the recipient Number and the recipient Name");
                            }
                         }}
                            className={`w-[16px] h-[8.4px] md:w-[30px] md:h-[12px]
                             lg:w-[50px] lg:h-[22px] lg:rounded-full 
                             rounded cursor-pointer 
                             ${
                             (RecipientExistCheck?.phone === recipientNumber
                               && !errors?.recipientNumber) 
                             ? "bg-[#77ff60]" : "bg-[#b1b0b0]"}`}>
                            <div className={`rounded-full w-[8.5px]
                                 h-[7.4px] md:w-[14px] md:h-[12px] lg:h-[22px] lg:w-[21px] lg:drop-shadow-md bg-[#fff]
                                  ${
                                    ( RecipientExistCheck?.phone === recipientNumber &&
                               (networkName?.length > 1 || networkName !== undefined)    && !errors?.recipientNumber)
                            ? "float-right" : "float-left"}`}>
                            </div>
                        </div>
                           
                        ) : (
                    <BalanceLoading/>
                        )}
                        
                    </div>
           
                    {codes && (
                        <Modal>
                            (
                            <div
                                className={`${styles.balanceMoneyPop} ${toggleSideBar ? "xl:w-[65%] xl:ml-[17%] lg:ml-[20%] lg:w-[40%]"
                                    : "lg:w-[40%]"
                                    } w-[90%] xl:w-[40%] md:w-[60%] overflow-auto`}
                            >
                                <img
                                    onClick={() => setCodes(false)}
                                    className="absolute cursor-pointer right-2 w-[18px] h-[18px] my-[1%] md:w-[35px] md:h-[35px] lg:w-[25px] lg:h-[25px]"
                                    src="/Images/transferImages/close-circle.png"
                                    alt=""
                                />
                                <hr className="h-[6px] bg-[#04177f] border-none mt-[8%] md:mt-[8%] lg:mt-[6%] md:h-[10px]" />

                                <button
                                    className={`bg-[#04177f] my-[5%] w-[88%] flex justify-center items-center mx-auto cursor-pointer text-[12px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[50%] md:rounded-[8px] md:text-[16px] lg:text-[14px] lg:w-[350px] lg:h-[38px] lg:my-[3%]`}
                                >
                                    Airtime Balace USSD Codes
                                </button>
                                <h2 className="text-[12px] my-[5%] text-center md:my-[3%] md:text-[15px] lg:my-[2%] lg:text-[16px]">
                                    Airtime Balance check ussd codes.
                                </h2>
                                <h2 className="text-[12px] my-[5%] text-blue-600 text-center md:my-[3%] md:text-[15px] lg:my-[2%] lg:text-[16px]">
                                    Tap the network Dial button to check airtime balance:
                                </h2>
                                <div className='flex flex-col gap-2 mb-5'>
                                    <button
                                        className={`bg-[#FAF8F8] my-[5%] w-[88%] flex justify-center items-center mx-auto cursor-pointer text-[14px] font-semibold h-[44px] shadow-md text-black rounded-[6px] md:w-[55%] md:rounded-[8px] md:text-[16px] lg:text-[16px] lg:w-[410px] lg:h-[51px] lg:my-[2%] xl:my-[1%]`}
                                    >
                                        MTN Airtime Balance Code - *310#
                                    </button>
                                    <button
                                        className={`bg-[#FAF8F8] my-[5%] w-[88%] flex justify-center items-center mx-auto cursor-pointer text-[14px] font-semibold h-[44px] shadow-md text-black rounded-[6px] md:w-[55%] md:rounded-[8px] md:text-[16px] lg:text-[16px] lg:w-[410px] lg:h-[51px] lg:my-[2%] xl:my-[1%]`}
                                    >
                                        AIRTEL Airtime Balance Code - *310#
                                    </button>
                                    <button
                                        className={`bg-[#FAF8F8] my-[5%] w-[88%] flex justify-center items-center mx-auto cursor-pointer text-[14px] font-semibold h-[44px] shadow-md text-black rounded-[6px] md:w-[55%] md:rounded-[8px] md:text-[16px] lg:text-[16px] lg:w-[410px] lg:h-[51px] lg:my-[2%] xl:my-[1%]`}
                                    >
                                        GLO Airtime Balance Code - *310#
                                    </button>
                                    <button
                                        className={`bg-[#FAF8F8] my-[5%] w-[88%] flex justify-center items-center mx-auto cursor-pointer text-[14px] font-semibold h-[44px] shadow-md text-black rounded-[6px] md:w-[55%] md:rounded-[8px] md:text-[16px] lg:text-[16px] lg:w-[410px] lg:h-[51px] lg:my-[2%] xl:my-[1%]`}
                                    >
                                        9MOBILE Airtime Balance Code - *310#
                                    </button>
                                </div>

                                <button
                                    onClick={() => setCodes(false)}
                                    className={`bg-[#04177f] my-[5%] w-[88%] flex justify-center items-center mx-auto cursor-pointer text-[14px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[16px] lg:text-[14px] lg:w-[163px] lg:h-[38px] lg:mt-[8%]`}
                                >
                                    Okay
                                </button>
                            </div>
                            )
                        </Modal>
                    )}
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
                    <div className="flex justify-end lg:py-[10px] pr-2 py-[7px] relative">
 
                                <img
                                    onClick={() => setProceed(false)}
                                    className="absolute cursor-pointer right-2 w-[18px] h-[18px] my-[1%] md:w-[35px] md:h-[35px] lg:w-[25px] lg:h-[25px]"
                                    src="/Images/transferImages/close-circle.png"
                                    alt=""
                                />
                                </div>
                                <hr className="h-[6px] bg-[#04177f] border-none mt-[8%] md:mt-[8%] md:h-[10px]" />
                                <h2 className="text-[10px] my-[5%] text-center md:my-[3%] md:text-[15px] lg:my-[2%] lg:text-[16px]">
                                    Confirm Transaction
                                </h2>
                                <p className={`text-[10px] mx-[10px] text-[#0008] text-center mb-4 md:text-[12px] lg:text-[14px]
                                  ${isDarkMode ? "text-white" : "text-black"}`}>
                                    You are about to purchase{" "}
                                    <span className={`text-[#000] font-extrabold text-[10px] md:text-[16px] lg:text-[12px]  ${isDarkMode ? "text-white" : "text-black"}`}>
                                        {networkName + ' ' + selectedProduct} Airtime &#8358;{amount}.00{" "}
                                    </span>
                                    from your NGN wallet to{" "}
                                </p>

                                <div className="flex flex-col gap-2 mt-3">
                                    <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                                        <p className={`text-[#0008] ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>Network</p>
                                        <span className='flex gap-1'>
                                            <div className="rounded-full w-[12.02px] h-[12.02px] flex items-center justify-center text-[10px] overflow-hidden md:w-[12.02px] lg:w-[25px] md:h-[12.02px] lg:h-[25px]">
                                                <img src={networkImage} alt="" className='w-full h-full object-cover' />
                                            </div>
                                            <h2 className="text-[10px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">{networkName}</h2>
                                        </span>
                                    </div>
                                    <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                                        <p className={`text-[#0008] ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>Product</p>
                                        <span>{` ${networkName + ' ' + selectedProduct} VTU`}</span>
                                    </div>
                                    <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                                        <p className={`text-[#0008] ${isDarkMode ? "text-white" : "text-[#7C7C7C]"} `}>Discount</p>
                                        <span>{discount}%</span>
                                    </div>
                                    <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                                        <p className={`text-[#0008] ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>Phone Number</p>
                                        <span>{recipientNumber}</span>
                                    </div>
                                    <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                                        <p className={`text-[#0008] ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>Recipient Name</p>
                                        <span>{ recipientName?.length < 1 ? "NIL" : recipientName}</span>
                                    </div>
                                    <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                                        <p className={`text-[#0008] ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>Payment Method</p>
                                        <span>{name}</span>
                                    </div>
                                    <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                                        <p className={`text-[#0008] ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>Total Amount</p>
                                        <span className={` ${isDarkMode ? "text-white" : "text-black"}`}>&#8358;{newAmount}</span>
                                    </div>
                                    <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                                        <p className={`text-[#0008] ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>Transaction Fee</p>
                                        <span className={`${isDarkMode ? "text-white" : "text-black"}`}>&#8358;{tFee}.00</span>
                                    </div>
                                    <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                                        <p className={`text-[#0008] ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>Points Earned</p>
                                        <span className="text-[#00AA48]">{points}</span>
                                    </div>
                                </div>

                                  <div className={`bg-[#F6F7F7] w-[95%] h-auto my-5 lg:my-8 flex py-[7px] 
                                  justify-between items-center px-[4%] mx-auto rounded-[10px]
                                    ${isDarkMode ? "bg-black border rounded-[10px]  border-white" : "bg-[#F6F7F7] "}`}>
                                     <div className="flex flex-col gap-2 ">
                                    <div className="flex gap-[10px] justify-center items-center">
                 <img className="w-[16px] h-[16px] bg-white" src={image}
                                                                                          alt="/"
                                                                                        />
                                                                                        <div className="flex gap-[10px] items-center">
                                                                                            <p className={`text-[12px] md:text-[14px] leading-[20px] lg:leading-[22px]  lg:text-[16px] font-[500] ${isDarkMode ? "text-white" : "text-black"}`}>
                                                                                        Available Balance {"  "} 
                                                                                         </p>
                                                                                         <span className="text-black">
                                                                                          {`(${typeof updateBalance === "number" ? 
                                                                                          updateBalance?.toLocaleString("en-NG", {
                                                                                            style : "currency",
                                                                                            currency : "NGN"
                                                                                          }) : ""})`}
                                                                                        </span>
                                                                                        </div>
                                                                                      </div>
                                                                                    <span className="text-gray-500 text-[14px] font-[400] leading-[20px]
                                                                                         lg:text-[16px] lg:leading-[22px] text-left">
                                                                                           {balanceStatus}
                                                                                           </span>
                                                                                    </div>
                                                                    
                                                                                    <img
                                                                                      src={Select}
                                                                                      alt=""
                                                                                      className="w-[12px] h-[12px] md:w-[50px] md:h-[20px] lg:w-[80px] lg:h-[30px]"
                                                                                    />
                                                                                  </div>
                                <button
                                    onClick={handleConfirm}
                                    disabled={CheckSufficiency}
                                    className={` my-[5%] w-[88%] flex justify-center
                                         items-center mx-auto cursor-pointer text-[14px] font-extrabold
                                          h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px]
                                           md:text-[16px] lg:text-[14px] lg:w-[163px] lg:h-[38px] 
                                           lg:my-[2%] ${CheckSufficiency ?" bg-gray-400" : "bg-[#04177f]"}`}
                                >
                                    Confirmed
                                </button>
                            </div>
                            </div>
                            
                        </Modal>
                    )}
                    {
                        confirm && (
                            <Modal>
               <div className="flex items-end justify-center
             lg:items-center lg:justify-center 
   w-[100%] lg:px-[0px] rounded-[10px] h-[100%] px-[15px]">
        <div className={`  flex flex-col lg:mb-[0px]  mb-[50px]
         lg:h-[350px] overflow-scroll h-[300px] bvnQuery  ${
                      toggleSideBar ? "md:w-[45%] lg:w-[40%]  " : "lg:w-[40%]"
                    } md:w-[55%] w-full   ${isDarkMode ? "text-white bg-black border-[1px] border-white rounded-[10px]" : "text-black bg-white rounded-[10px]"}`}
            >
            <div className="pr-3 lg:pr-2 py-[5px] flex justify-end">
            <img  onClick={()=> setConfirm(false)}
                className="w-[25px] h-[25px]  md:w-[35px] md:h-[35px] 
                lg:w-[25px] lg:h-[25px]"
                src="/Images/transferImages/close-circle.png"
                alt=""
              />
            </div>
            <div className="h-[6px] bg-[#04177f] border-none md:h-[10px]" />
            <div className="flex flex-col w-full  justify-center 
             py-[15px] lg:py-[0px]
             h-[100%] gap-[15px] ">
            <p className="font-extrabold text-[12px] leading-[16px] 
            pb-[20px]
             md:text-[10px]
             lg:text-[16px] text-center 
            ">Input PIN to complete transaction</p>
            <div className="flex flex-col items-center lg:gap-[0px]
             gap-[5px] font-extrabold">
              <div className=" flex items-center  gap-[10px]">
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
                        border: isDarkMode
                          ? "1px solid white"
                          : "1px solid #ccc",
                    }
                }
                    
                    renderInput={(props) => (
                      <input {...props} className={`text-base inputOTP mx-[2px] 
                      `}/>
                    )}
                  />
                <div
                  className="text-[#0003]"
                  onClick={toggleVisibility}
                >
                    {isVisible ? <AiFillEye className={`w-[16px] h-[16px]
                  lg:w-[24px] lg:h-[24px]  ${isDarkMode ? " text-white" : "text-black" }`}/> : <AiFillEyeInvisible  
                    className={`w-[16px] h-[16px] lg:w-[24px] lg:h-[24px]
                 ${isDarkMode ? " text-white" : "text-black" }`}/>}
                </div>
              </div>
              <Link  to = {{
               pathname : "/ProfileSettingMain",
                state :  authenticationOpen
              }} className="text-[10px] leading-[14px] font-extrabold 
              md:text-[12px]
                my-2 text-[#04177f]">
                Forgot Pin ?
              </Link>
            </div>
            {errorMessage && (
              <p className="font-bold text-[14px]  lg:text-[16px] md:font-[500] 
              text-center leading-[18px] lg:leading-[20px]   text-red-600">
                 Incorrect Pin
              </p>
            ) 
            }
             <div className="flex flex-col gap-[10px] px-[20px]" >
            <button
              onClick={HandleAirtime}
              disabled={inputPin.length !== 4 ? true : false}
              className={`${
                inputPin.length !== 4 && !isDarkMode ? "bg-[#0008]" : 
                 inputPin.length !== 4 && isDarkMode ? "bg-gray-300" : "bg-[#04177f]"
              }  w-full  md:w-[94px] lg:w-[163px] flex 
              justify-center items-center mx-auto cursor-pointer text-[12px]
               md:text-[10px] lg:text-[16px] font-extrabold h-[50px] 
               lg:h-[38px] md:h-[22px] text-white rounded-[6px] md:rounded-[6.88px]
                lg:rounded-[12px]`}
            >
              Purchase
            </button>
            {/* {errorMessage && (
              <p className="text-[10px] leading-[16px] font-[400]
              lg:text-[12px] lg:leading-[18px] lg:font-[500] text-red-500">
                Incorrect Pin
                </p>

            )} */}
            </div>
             </div>
           
        </div>
        </div>
                            </Modal>
                        )
                    }
                    {transactSuccessPopUp && (
                        <Modal>
                            {/* <TransactFailedPopUp/> */}
                       <div  className={`w-full flex justify-center h-full 
             py-[30px] px-[15px] lg:px-[0px] lg:items-center
              items-end`}>
              <div
               className={` bvnQuery lg:rounded-[12px] rounded-[10px] 
              h-[520px] ${ toggleSideBar ? " lg:ml-[20%] lg:w-[40%]" : "lg:w-[40%]"
              } w-[100%] md:w-[60%] overflow-auto  ${isDarkMode ? "bg-black text-white border rounded-[10px] border-white": "bg-white text-black"} `}
              >
                                <div className="flex justify-between items-center mx-[3%] my-[2%] lg:my-[1%]">
                                    <img
                                        onClick={() => setTransactSuccessPopUp(false)}
                                        className=" w-[18px] h-[18px] md:w-[35px] md:h-[35px] lg:w-[35px] lg:h-[25px]"
                                        src="/Images/login/arpLogo.png"
                                        alt=""
                                    />

                                    <img
                                        onClick={() => setTransactSuccessPopUp(false)}
                                        className=" w-[18px] h-[18px] md:w-[35px] md:h-[35px] lg:w-[29px] lg:h-[29px]"
                                        src="/Images/transferImages/close-circle.png"
                                        alt=""
                                    />
                                </div>
                                <hr className="h-[6px] bg-[#04177f] border-none md:h-[10px]" />
                                <h2 className="text-[12px] my-[3%] text-center md:text-[20px] md:my-[3%] lg:text-[14px] lg:my-[2%]">
                                    Transaction Successful
                                </h2>
                                <img
                                    className="w-[50px] h-[50px] mx-auto mb-[2%] lg:w-[70px] lg:h-[70px]"
                                    src="./Gif/checkMarkGif.gif"
                                    alt="/"
                                />
                                <p className="text-[10px] text-[#0008] mx-[10px] text-center mb-5 md:text-[14px] lg:text-[12px]">
                                    You have successfully purchased{" "}
                                    <span className="text-[#000] font-extrabold text-[10px] md:text-[14px] lg:text-[12px]">
                                        {networkName + ' ' + selectedProduct} Airtime &#8358;{amount}.00{" "}
                                    </span>
                                    from your NGN wallet to{" "}
                                </p>

                                <div className="flex flex-col gap-1 lg:gap-4">
                                    <div className="flex text-[10px] md:text-[12px] w-[90%] mx-auto justify-between  lg:text-[14px]">
                                        <p className="text-[#0008]">Network</p>
                                        <span className='flex gap-1'>
                                            <div className="rounded-full w-[12.02px] h-[12.02px] flex items-center justify-center text-[6px] overflow-hidden md:w-[12.02px] lg:w-[25px] md:h-[12.02px] lg:h-[25px]">
                                                <img src={networkImage} alt="" className='w-full h-full object-cover' />
                                            </div>
                                            <h2 className="text-[10px] leading-[12px]
                                             capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">{networkName}</h2>
                                        </span>
                                    </div>
                                    <div className="flex text-[10px] md:text-[12px] w-[90%] mx-auto justify-between  lg:text-[14px]">
                                        <p className="text-[#0008]">Product</p>
                                        <span>{networkName + ' ' + selectedProduct}</span>
                                    </div>
                                    <div className="flex text-[10px] md:text-[12px] w-[90%] mx-auto justify-between  lg:text-[14px]">
                                        <p className="text-[#0008]">Phone Number</p>
                                        <span>{recipientNumber}</span>
                                    </div>
                                    <div className="flex text-[10px] md:text-[12px] w-[90%] mx-auto justify-between  lg:text-[14px]">
                                        <p className="text-[#0008]">Recipient Name</p>
                                        <span>{ recipientName?.length < 1 ? "NIL" : recipientName}</span>
                                    </div>
                                    <div className="flex text-[10px] md:text-[12px] w-[90%] mx-auto justify-between  lg:text-[14px]">
                                        <p className="text-[#0008]">Payment Method</p>
                                        <span>{name}</span>
                                    </div>
                                    <div className="flex text-[10px] md:text-[12px] w-[90%] mx-auto justify-between  lg:text-[14px]">
                                        <p className="text-[#0008]">Amount</p>
                                        <span>&#8358;{newAmount}</span>
                                    </div>
                                    <div className="flex text-[10px] md:text-[12px] w-[90%] mx-auto justify-between  lg:text-[12px]">
                                        <p className="text-[#0008]">Order Number</p>
                                        <span>{orderID}</span>
                                    </div>
                                </div>

                                <div className="bg-[#F2FAFF] mx-5 rounded-md h-[55px] my-5 flex justify-between items-center px-[4%] md:h-[75px] lg:h-[85px]">
                                    <p className="text-[8px] text-center mx-auto w-[201px] md:text-[14px] md:w-[92%] lg:text-[14px]">
                                        The airtime purchase has been sent successfully to the recipient phone number. Please kindly engage the recipient to check his/her balance to confirm the value. You can contact us for any further assistance.
                                    </p>
                                </div>
                                <div className="flex w-[70%] mx-auto items-center gap-[5%] md:w-[60%] lg:my-[5%]">
                                    <button
                                        onClick={() => {
                                            setTransactSuccessPopUp(false);
                                            // window.location.reload();
                                            setNetworkName("");
                                            setRecipientNumber("");
                                            setRecipientName("");
                                            setSelectedProduct("");
                                            setAmount("");
                                            setDiscount("");
                                            setPaymentSelected("");
                                        }}
                                        className={`bg-[#04177f] w-[111px] flex justify-center items-center mx-auto cursor-pointer text-[12px] font-extrabold h-[40px] text-white rounded-[6px] md:px-[50px] md:w-[70%] md:rounded-[8px] md:text-[16px] lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
                                    >
                                        Done
                                    </button>
                                    <Link to="/airtime-vtu-receipt" state={{
                                        networkName: networkName,
                                        selectedProduct: selectedProduct,
                                        recipientNumber: recipientNumber,
                                        recipientName: recipientName,
                                        amount: amount,
                                        transactionID: transactionID,
                                        refNumber: refNumber,
                                        orderID: orderID,
                                        description: description,
                                     discount_amount : airtimeReceiptDiscountValue,
                                     discountPercentage : discountPercentage
                                    }}>
                                        <button
                                            onClick={handleReceipt}
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
                    {transactFailedPopUp && (
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
                                        onClick={() => setTransactFailedPopUp(false)}
                                        className=" w-[18px] h-[18px] md:w-[35px] md:h-[35px] lg:w-[35px] lg:h-[25px]"
                                        src="/Images/login/arpLogo.png"
                                        alt=""
                                    />
    </div>   
                                    <img
                                        onClick={() => setTransactFailedPopUp(false)}
                                        className=" w-[18px] h-[18px] md:w-[35px] md:h-[35px] lg:w-[29px] lg:h-[29px]"
                                        src="/Images/transferImages/close-circle.png"
                                        alt=""
                                    />
                                </div>
                                <hr className="h-[6px] bg-[#04177f] border-none md:h-[10px]" />
                                <h2 className="text-[14px] my-[5%] text-center font-[600] leading-[19px]
                                md:text-[20px] md:my-[3%] lg:text-[14px] lg:my-[2%]">
                                    Transaction Failed
                                </h2>
                                <img
                                    className="w-[120px] h-[120px] mx-auto my-[10%] 
                                    lg:w-[150px] lg:h-[150px]"
                                    src="./Images/failed.png"
                                    alt="/"
                                />
                                <p className="text-[14px] text-red-500 font-[600]
                                 mx-[10px] text-center my-[60px] md:text-[14px] lg:text-[12px]">
                                    {airtimePurchaseError}
                                </p>
 {airtimeResponse?.data?.data?.data?.status === "failed"
 || airtimeResponse?.data?.data?.data?.status === "Failed" ?  (
                                <div className="flex w-[70%] mx-auto items-center gap-[5%] md:w-[60%] lg:my-[5%]">
                                 
                                    <button
                                        onClick={() => {
                                            setTransactFailedPopUp(false);
                                            // window.location.reload();
                                            setNetworkName("");
                                            setRecipientNumber("");
                                            setRecipientName("");
                                            setSelectedProduct("");
                                            setAmount("");
                                            setDiscount("");
                                            setPaymentSelected("");
                                        }}
                                        className={`
                                          bg-[#04177f] w-[111px] 
                                          flex justify-center items-center 
                                          mx-auto cursor-pointer text-[12px]
                                           font-extrabold h-[40px] text-white
                                            rounded-[6px] md:w-[25%] md:rounded-[8px] 
                                            md:text-[16px] lg:w-[163px] lg:h-[38px] 
                                            lg:my-[2%]`
                                          }
                                    >
                                        Done
                                    </button>
                                    
                                    <Link to="/airtime-receipt-failed" state={{
                                        networkName: networkName,
                                        selectedProduct: selectedProduct,
                                          recipientNumber: recipientNumber,
                                        recipientName: recipientName,
                                        amount: amount,
                                    }}>
                                     
                                        <button
                                            onClick={handleReceiptFailed}
                                            className={`border-[1px] w-[111px] border-[#04177f] flex justify-center items-center mx-auto cursor-pointer text-[12px] font-extrabold h-[40px] rounded-[6px] md:w-[110px] md:rounded-[8px] md:text-[16px] lg:w-[163px] lg:h-[38px] lg:my-[2%]`}>
                                            Receipt
                                        </button>
                                    </Link>
                                    </div>
                                   ): (
                                         <button
                                        onClick={() => {
                                            setTransactFailedPopUp(false);
                                            // window.location.reload();
                                            setNetworkName("");
                                            setRecipientNumber("");
                                            setRecipientName("");
                                            setSelectedProduct("");
                                            setAmount("");
                                            setDiscount("");
                                            setPaymentSelected("");
                                        }}
                                        className={`
                                          bg-[#04177f] w-[90%] mx-auto 
                                          flex justify-center items-center 
                                           cursor-pointer text-[12px]
                                           font-extrabold h-[40px] text-white
                                            rounded-[6px] md:w-[25%] md:rounded-[8px] 
                                            md:text-[16px] lg:w-[163px] lg:h-[38px] 
                                            lg:my-[2%]`
                                          }
                                    >
                                        Done
                                    </button>
                                  
                                    
 )}
                            </div>
                            </div>
                        </Modal>
                    )}
                    {receipt && (
                        <AirtimeVtuReceipt
                            networkName={networkName}
                            selectedProduct={selectedProduct}
                            recipientNumber={recipientNumber}
                            recipientName={recipientName}
                            amount={amount}
                            transactionID={transactionID}
                            refNumber={refNumber}
                            orderID={orderID}
                            description={description}
                        />
                    )}
                    {receiptFailed && (
                        <AirtimeReceiptFailed
                            networkName={networkName}
                            selectedProduct={selectedProduct}
                            recipientNumber={recipientNumber}
                            recipientName={recipientName}
                            amount={amount}
                            transactionID={transactionID}
                            refNumber={refNumber}
                            orderID={orderID}
                            description={description}
                        />
                    )}
                  
                </div>
                
                        <button className={`
                        ${
                        canProceed  ? "bg-[#04177f]" : "bg-[#63616188] cursor-not-allowed"
                    }  md:mt-[30px] lg:mt-[25px] rounded-[6px] mt-[30px]
             md:rounded-[10px] lg:rounded-[15px] 
             h-[43px] md:h-[30px] lg:h-[40px] flex items-center 
             font-semibold text-[12px] md:text-[11px] lg:text-[16px] 
             text-[#fff] w-full md:w-[100px] lg:w-[170px] justify-center`}
                            // disabled={!canProceed}
                            onClick={handleProceed}>
                                Proceed
                        </button>
             
                </div>
                   <div className={styles.help}>
                    <h2>You need help?</h2>
                    <Link to={`/contactUs`} className={styles.btnContact}>Contact Us</Link>
                </div>
                </div>
          
            {isLoading && (
                <Modal>
                    <Loader/>
                </Modal>
            )}
        
            {restrictUser && <RestrictionPopUp/>}
            {selectRecipientDisplay && <SelectRecipient 
            loadingRecipient ={loadingRecipient}
             setSelectRecipientDisplay = {setSelectRecipientDisplay}/>}
        </DashBoardLayout>
    );
}

export default AirtimeVtu;
