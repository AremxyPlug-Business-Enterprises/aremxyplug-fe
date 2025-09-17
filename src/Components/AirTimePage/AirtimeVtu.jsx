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
import axiosInstance from '../ApiCollection.jsx/apiClient';
import { Loader } from '../Loader/Loader';
import { VerifyTransPin, GetFunction, InternalLoginSession, RestrictionPopUp } from '../ApiCollection.jsx/ApiBuck';
import Select from  "../Dashboard/DashboardComponents/DataTopUpPage/DataBundles/DataBundles-Images/Select.svg";
import { GetLocalStorage } from '../LocalStorage/LocalStorage';


const AirtimeVtu = () => {
    const Data = GetLocalStorage()
    // const {  isDarkMode } = useContext(ContextProvider);
    const tFee = 0;
    const points = '+2.00';

    const { networkName, setNetworkName, newBalance, setNewBalance } = useContext(ContextProvider);
    const { selectedProduct, setSelectedProduct } = useContext(ContextProvider);
    const { recipientName, setRecipientName } = useContext(ContextProvider);
    const { recipientNumber, setRecipientNumber } = useContext(ContextProvider);
    const { amount, setAmount } = useContext(ContextProvider);
    const { networkImage, setNetworkImage } = useContext(ContextProvider);
    const { inputValues, setInputValues } = useContext(ContextProvider);
    const { networkId, setNetworkId } = useContext(ContextProvider);
    const [restrictUser, setRestrictUser] = useState(false)
   // const { productId, setProductId } = useContext(ContextProvider);


    const [addRecipient, setAddRecipient] = useState(false);
    const [discount, setDiscount] = useState('');
    const [proceed, setProceed] = useState(false);
    const [selected, setSelected] = useState(false);
    const [paymentSelected, setPaymentSelected] = useState(false);
    const [showList, setShowList] = useState(false);
    const [showPayment, setShowPayment] = useState(false);
   // const [showProduct, setShowProduct] = useState(false);
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
    const { isDarkMode } = useContext(ContextProvider);
   const [sessionModal, setSessionModal] = useState(false)
    const [errorMessage, setErrorMessage] = useState(false);
    const [passDataBalance, setPassDataBalance] = useState({});
    const [balanceStatus, setBalanceStatus] = useState("")
   const balanceStringToNum = Number(newBalance);
     let airtelDataAmount = Number(amount.replace(/\D/g, ""));
               const updateBalance = passDataBalance?.data ?  passDataBalance?.data?.data?.data?.balance : "";
                  const cleanUpBalanceToNumericOnly = Number(updateBalance.replace(/\D/g, ""));
                 let CheckSufficiency = airtelDataAmount  > (newBalance === "" || newBalance === null ? cleanUpBalanceToNumericOnly : balanceStringToNum);
                 useEffect(() => {
                           const GetBalance =   async()=> {
                               const SuccessHandler = ()=> {
                             //alert("Successful");
                        console.log("successfully retrieved balance");
                        //alert("Successful")
                          }
                         const FailedHandler = async(ErrorType)=> {
                           if(ErrorType === "unauthorised"){
                              await GetFunction("balance",
                                 setIsLoading, SuccessHandler,
                                  (ErrorType)=> {
                                    if(ErrorType === "unauthorised"){
                                    return setSessionModal(true);
                                    }
                                  },
                                  setPassDataBalance)
                           }
                         }
                         await GetFunction("balance",
                             setIsLoading, 
                             SuccessHandler, 
                             FailedHandler,
                             setPassDataBalance)
                           } 
                            // Simulate async data loading
                                              // Simulate async data loading
                      if (Data?.ConfirmAcc === "true"){                     // Simulate async data loading
                     if(newBalance === "" ||
       newBalance === null ||
        newBalance === undefined){
                        GetBalance();
          setNewBalance(passDataBalance?.data?.data?.data !== undefined
               ? passDataBalance?.data?.data?.data?.balance : "");
             }
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

            HandleBalanceStatus()
        },[CheckSufficiency])


   

    const handleAddRecipient = async () => {
        if(!navigator.onLine) return alert("Check your internet Connection")
        setIsLoading(true);
        setErrors({});
        try {

            const requestBody = {
                network: networkName,  // Changed from networkName
                name: recipientName,   // Changed from recipientName
                phone: recipientNumber // Changed from recipientNumber
            };

            const response = await fetch('https://aremxyplug.onrender.com/api/v1/airtime/recipient', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody)
            });

            if (!response.ok) {
                // Handle non-200 responses
                const errorData = await response.json();
                setErrors(errorData.errors || { server: 'An error occurred' });
                return;
            }

            // Handle successful response
            if(response.status === 200 || 201){
            const data = await response.json();
            console.log('Recipient added successfully:', data);
            }

        } catch (error) {
            console.error('Network error:', error);
            setErrors({ network: 'Network error, please try again later.' });
            if(error && error.response === undefined){
             alert("Check your internet Connection, then reload the page.")
          } else if(error && (error.response.status === 400 || 404)){
             alert("Couldn't save recipient,please try again later.")
          }else if(error && error.response.status === 500){
               alert("Couldn't save recipient,please try again later.")
          }else if(error && error.response.status === 401){
            alert("session expired")
          }else {
            alert("Error occured: Kindly check your network connection.")
          }
        } finally {
            setIsLoading(false);
        }
    };




    const networkList = [
        {
            id: 1,
            name: 'MTN',
            image: require('./Images/mtn.svg').default,
            discount: 3,
            networkId: "1",
        },
        {
            id: 2,
            name: 'AIRTEL',
            image: require('./Images/airtel.png'),
            discount: 4,
            networkId: "2",
        },
        {
            id: 3,
            name: 'GLO',
            image: require('./Images/glo.png'),
            discount: 3,
            networkId: "3",
        },
        {
            id: 4,
            name: '9MOBILE',
            image: require('./Images/9mobile.svg').default,
            discount: 3,
            networkId: "4",
        },
    ];

    const countryList = [
        {
            id: 1,
            name: 'Nigeria',
            code: 'NGN',
            flag: require('./Images/ng.svg').default,
            amount: newBalance === "" || newBalance === null ? updateBalance : newBalance,
        },
        {
            id: 2,
            name: 'United States',
            code: 'USD',
            flag: require('./Images/us.svg').default,
            amount: 0
        },
        {
            id: 3,
            name: 'United Kingdom',
            code: 'GBP',
            flag: require('./Images/gb.svg').default,
            amount: 0
        },
        {
            id: 4,
            name: 'European Union',
            code: 'EUR',
            flag: require('./Images/eu.svg').default,
            amount: 0
        },
        {
            id: 5,
            name: 'Australia',
            code: 'AUD',
            flag: require('./Images/au.svg').default,
            amount: 0
        },
        {
            id: 6,
            name: 'Kenya',
            code: 'KSH',
            flag: require('./Images/ke.svg').default,
            amount: 0
        }
    ];

   


    const Network = ({ name, image, onClick }) => {
        return (
            <li className="py-[10px]  border-[0.5px] flex items-center
         gap-[10px] pl-[7px]" onClick={onClick}>
                <div className={styles.netImage}>
                    <img src={image} alt="" className={styles.NoImage} />
                </div>
                <h2 className={styles.netName}>{name}</h2>
            </li>
        )
    }

    const Payment = ({ code, flag, amount, onClick, className }) => {
        return (
            <li className="py-[10px] flex items-center 
         gap-[10px] pl-[7px]" onClick={onClick}>
                <div className={styles.netImage}>
                    <img src={flag} alt="" className={styles.NoImage} />
                </div>
                <h2 className={styles.netName}>{code}</h2>
                <h2 className={styles.netName}>Wallet({amount})</h2>
            </li>
        )
    }

  

    const handleSelectNetwork = (name, image, val, netId) => {
        setNetworkName(name);
        setNetworkImage(image);
        setDiscount(val);
        setShowList(false);
        setSelected(true);
        setNetworkId(netId);
    }

    const calcAmount = (a, b) => {
        if (a === '' || b === '') {
            return ''
        } else {
            const totalAmount = ((1 - (a / 100)) * b)
            return totalAmount
        }
    }
    const newAmount = calcAmount(discount, amount).toLocaleString();

    const handleSelectPayment = (code, flag, amount) => {
        setName(code);
        setImage(flag);
        setPaymentAmount(amount);
        setShowPayment(false);
        setPaymentSelected(true);
    }

    // const handleSelectProduct = (val, proId) => {
    //     setSelectedProduct(val);
    //     setShowProduct(false);
    //     setProductId(proId);
    // }

    const handleShowList = () => {
        setShowList(!showList);
        setNetworkName('');
        setNetworkImage('');
        setDiscount('');
        setSelected(false);
    }

    // const handleShowProduct = () => {
    //     if (selected) {
    //         setShowProduct(!showProduct);
    //     }
    // };

    const handleShowPayment = () => {
        setShowPayment(!showPayment)
        setName('');
        setImage('');
        setPaymentAmount('');
        setPaymentSelected(false);
    }

    const schema = Joi.object({
        recipientNumber: Joi.string()
            .pattern(new RegExp(/^\d{11,}/))
            .required()
            .messages({
                "string.pattern.base": "Phone number should be 11 digits ",
            }),
        amount: Joi.string()
            .pattern(new RegExp(/\d{2,}/))
            .required()
            .messages({
                "string.pattern.base": "Amount can not be less than 10",
            }),
    });

    const canProceed =
  recipientNumber?.length === 11 &&
  amount?.length >= 2 &&
  networkName &&
  paymentSelected;


const handleProceed = (e) => {
  e.preventDefault();

  let newErrors = {};

  // Validate with Joi
  const { error } = schema.validate({
    recipientNumber,
    amount,
  });

  if (error) {
    newErrors = error.details.reduce((acc, curr) => {
      acc[curr.path[0]] = curr.message;
      return acc;
    }, {});
  }

  // Validate network
  if (!networkName) {
    newErrors.networkName = "Please select a network.";
  }

  // Validate payment option
  if (!paymentSelected) {
    newErrors.payment = "Please select a payment method.";
  }

  // Validate amount
  if (!amount || amount.length < 2) {
    newErrors.amount = "Please enter a valid amount.";
  }

  if (Object.keys(newErrors).length > 0) {
    console.log("Validation failed", newErrors);
    setErrors(newErrors);
    return;
  }

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

  const detectedNetwork = validateNigerianNumberByNetwork(recipientNumber);
  console.log("Detected network:", detectedNetwork);

  if (detectedNetwork !== networkName) {
    setErrors({
      recipientNumber: `Invalid ${networkName} number. Please enter a valid ${networkName} number.`,
    });
    return;
  }

  setProceed(true);
  setErrors({});
  console.log("All validation passed, proceeding...");
};



    const factorWalletName = (value) => {

        if (value === 'NGN') {
            return 'Nigerian NGN Wallet'
        }

        if (value === 'GBP') {
            return 'British GBP Wallet'
        }

        if (value === 'USD') {
            return 'American USD Wallet'
        }

        if (value === 'AUD') {
            return 'Australian AUD Wallet'
        }

        if (value === 'KSH') {
            return 'Kenyan KSH Wallet'
        }

        if (value === 'EUR') {
            return 'European EUR Wallet'
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

    console.log(confirm)

    const {
        transactSuccessPopUp,
        setTransactSuccessPopUp,
        transactFailedPopUp,
        setTransactFailedPopUp,
    } = useContext(ContextProvider);

    const handleTransactionSuccessClose = async () => {
        async function buyAirtime(network, mobileno, amount) {
            const path = '/airtime';

            const data = {
                network,
                mobileno,
                amount,
             };

            console.log(data);

            try {
                setIsLoading(true)
                const response = await axiosInstance.post(path, data);
                const result = response?.data?.data?.data; // Access the nested `data`
            
                console.log(result);
                console.log(response.status);
            
                setTransactionID(result?.transaction_id);
                setRefNumber(result?.reference_number);
                setOrderID(result?.order_id);
                setDescription(result?.description);
                setInputPin("")
                //   if (response.statusCode === 200) 
                  if (response.status === 200) 
                    {
            // Success response
            setTransactSuccessPopUp(true); 
            setConfirm(false);
             return { statusCode: response.status, data: response.data };
            // Show success popup
        }
               
                // console.log(response.data);
            } catch (error) {
                console.error(error);
                setInputPin("");
                  setTransactFailedPopUp(true); 
            setConfirm(false)// Show failure popup
             if(error && error.response === undefined){
             alert("Check your internet Connection, then reload the page.")
          } else if(error && (error.response.status === 400 || error.response.status === 404)){
             setInputPin("");
                  setTransactFailedPopUp(true); 
            setConfirm(false)// 
          }else if(error && error.response.status === 500){
             setInputPin("");
                  setTransactFailedPopUp(true); 
            setConfirm(false)// 
          }else if(error && error.response.status === 401){
            if(error.response.headers["x-new-auth-token"] || error.response.headers.get("x-new-auth-token")){
         setIsLoading(true)
         const newToken = error.response.headers.get("x-new-auth-token") ||error.response.headers["x-new-auth-token"];
        
         if(newToken !== "" && localStorage.getItem("authorisedLogin") === "true"){
           const setAuthorisedToken = localStorage.setItem("authorisedLogin", newToken);
           if(setAuthorisedToken){
            await handleTransactionSuccessClose()
           }
            }else{
    const setGetToken = localStorage.setItem("getToken", newToken);
      if(setGetToken){
        await handleTransactionSuccessClose();
      }
      }
            setInputPin("") 
          }else {
            alert("Error occured: Kindly check your network connection.")
          }
                return { statusCode: error.response.status, data: null };
        }
            }finally {
                setIsLoading(false)
            }
        }

        // Usage
     await buyAirtime(
            networkId, // Network (MTN)
            inputValues, // Mobile No
            amount, // Amount
         // Airtime Type (VTU)
        );


      
    };

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

        setInputValues(numericValue);
    };

//     const HandleAirtime = async()=> {
//         const setFailedPin = async(ErrorType)=> {
//         if(ErrorType === "unauthorised"){
//              await VerifyTransPin(inputPin,
//     (ErrorType)=> {
//         if(ErrorType === "unauthorised"){
//             return setSessionModal(true)
//         }
//     },
//       setIsLoading,
//        setErrorMessage,
//        handleTransactionSuccessClose)
//         }
//         }
//    await VerifyTransPin(inputPin,
//     setFailedPin,
//       setIsLoading,
//        setErrorMessage,
//        handleTransactionSuccessClose)
// }

const HandleAirtime = async () => {
  await VerifyTransPin(
    inputPin,
    (ErrorType) => {
      if (ErrorType === "unauthorised") {
        setSessionModal(true);
      }
    },
    setIsLoading,
    setErrorMessage,
    handleTransactionSuccessClose
  );
};

    return (
        <DashBoardLayout>
            <div className={styles.AirtimeTops}>
                <div className={styles.airtimeTop}>
                    <div className="w-full h-[90px] md:h-[112.29px] lg:h-[196px] rounded-[7px] md:rounded-[11.5px] bg-gradient-to-r from-[#73FF9A] to-[#6EDCFF] flex px-[16px] lg:px-[50px] justify-between items-center lg:rounded-[20px]">
                        <div className="w-[80%] pt-[19px] lg:pt-[20px]">
                            <h2 className={`text-[11px] md:text-[13.75px] font-bold mb-2 lg:text-[24px] lg:mb-4 
                                 ${
                                    isDarkMode ? "text-black" : ""
                                 }
                                `}>
                                AIRTIME VTU, FAST AND AUTOMATED.</h2>
                            <h2 className={`text-[8.4px] md:text-[11.46px] lg:text-[20px] lg:leading-[26px] mb-4
                              ${
                                    isDarkMode ? "text-black" : ""
                                 }
                            `
                            }>
                                Top up your mobile sim using our automated airtime vending directly from network providers, enjoy discounts without any hassle or hidden fee.
                            </h2>
                        </div>
                        <div className="w-[91px] h-[66px] lg:w-[170px] lg:h-[150px]">
                            <img src="./Images/airtimeTopUp/young.png" className="h-full" alt="" />
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
                            <Link to="/select-vtu-recipient">
                                <div className={`
                                ${styles.conPut} !relative !top-[12px] md:!relative md:!top-base !text-[12px] md:!text-base
                                `}>
                                    <h2>Select Recipient</h2>
                                    <div className={styles.FlexImg} 
                                  
                                    >
                                        <img src={weight} alt="" className='' />
                                    </div>
                                </div>
                            </Link>
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
                                ${styles.conPut} !relative !top-[12px] md:!relative md:!top-base !text-[12px] md:!text-base
                             
                                  `}>
                                    <h2>Add Recipient</h2>
                                    <div className={styles.FlexImg}
                                    
                                    >
                                        <img src={add} alt="" className='' />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>  
              {/* .containFlex1 */}
                    <div className={`flex mt-[35px] my-[30px] md:w-[100%] md:gap-[10%] !text-[15px] md:!text-base`}>
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
                         <div className="hidden md:w-[50%] md:block"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[20px] md:gap-x-[58.68px] lg:gap-x-[100px] md:gap-y-[15px] lg:gap-y-[25px]">
                    {/* <div className={styles.mainGrid}> */}
                        <div className="flex flex-col lg:gap-[14px] gap-[7px]">
                        {/* <div className={styles.mainGridCol}> */}
                            <div>
                                <div className={styles.NetworkFlex}>
                                    <h2 className={`lg:text-[18px] text-[#7c7c7c] lg:leading-[24px] mb-4 text-[15px] md:text-[12px] md:font-[600] font-[400] leading-[12px]   ${isDarkMode 
                                              ? "text-[#7c7c7c]" : "text-[#7c7c7c]"
                                          }`}>Select Network</h2>
                                    <div className={`
                                              ${
        isDarkMode 
            ? "!bg-black !text-white !border !border-solid !border-white !mt-2 md:!mt-0" 
            : "border border-solid border-[#0003] bg-white text-black !mt-2 md:!mt-0"
    }
                                    ${styles.input} !h-[44.927px] md:!h-[58px]
       `} >

                                        <div 
                                        
                                        className={`${styles.output2}
                                       

                                        !relative !top-[17px] md:!relative md:!top-base !text-[14px] md:!text-base
                                     `}>
                                            {networkName ? (
                                                <li onClick={handleShowList} 
                                                className={`${styles.labelInput}  
                                              `}
                                              >
                                                    <div className={styles.network}>
                                                        {networkImage && <img src={networkImage} alt="" />}
                                                    </div>
                                                    <h2 className={`
                                                    ${
                                                        isDarkMode ? "!text-[#7C7C7C] !bg-black !border-none !border-0 !border-width:0" : ""
                                                    }
                                                    ${styles.head2x}
                                                     !text-[13px] md:!text-[13px]`}>{networkName}</h2>
                                                </li>
                                            ) : (
                                                <h2 onClick={handleShowList} className={`
                                                    ${isDarkMode ? "!text-[#7C7C7C] " : ""}
                                                    ${styles.head6}
                                                 
                                                
                                                !text-[14px] md:!text-base`}>Select Network</h2>
                                            )}
                                            <button className={`
                                            ${isDarkMode ? "!text-[#7C7C7C] " : ""}
                                            ${styles.btnDrop} !text-[14px] md:!text-base
                                                     
                                            `} onClick={handleShowList}>
                                                <img src={arrowDown} alt="" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative">
                                {/* ${styles.colDown} */}
                                {showList &&
                                    <div className={`text-[16px] md:text-[12px]  bvnQuery text-[#7C7C7C]
                  shadow-[0px_3.30667px_8.26667px_0px_rgba(0,0,0,0.25)] 
                     
                   lg:text-[16px] lg:mt-2 rounded-[4px] absolute w-full bg-[#FFF] z-[10]
                 
                                      ${isDarkMode ? "!bg-black md:!bg-black  border-white border-2 rounded-[5px]" : "border border-none rounded-[5px] text-[#7C7C7C] bg-[#FFF]"}
        `}
                                    >
                                        {networkList.map((item) => (
                                             <div className='text-[#7C7C7C]'>
                                            <Network key={item.id} image={item.image} name={item.name} onClick={() => handleSelectNetwork(item.name, item.image, item.discount, item.networkId)}
                                            
                                            />
                                             </div>

                                        ))}
                                    </div>


                                }
                            </div>
                            </div>
                            
                            {/* <div className={styles.headPro}> */}
                            <div className="flex flex-col">
                                <h2 className={`
                                    ${
                                        isDarkMode 
                                            ? "!text-[#7E7E7E]" 
                                            : ""
                                    }
                                  mt-8 lg:text-[18px] md:text-[14px] lg:leading-[24px] mb-4 text-[16px] md:font-[600] font-[400] leading-[12px] text-[#7c7c7c]`}> Product</h2>
                                <div className={` 
                                           ${
                                            isDarkMode 
                                                ? "!mt-2 md:!mt-0 !bg-black !text-white !border !border-solid !border-white !rounded-[7px]" 
                                                : "!mt-2 md:!mt-0 border border-solid border-[#0003] bg-white  text-[#7c7c7c]"
                                        }                  ${styles.input1} !h-[44.927px] md:!h-[58px]
            `}
                                >
                                    
                                        <h2 className={`
                                           ${styles.span2} !relative !top-[5px] md:!relative 
                                            md:!top-base !text-[13px] md:!text-[13] !pr-[0] md:pr-[5px]`} required>VTU</h2>
                                        
                                         <button className={`
                                     ${isDarkMode ? "!text-[#7E7E7E]" : ""}
                                    ${styles.btnDrop} !relative !top-[0px] md:!relative md:!top-base !text-[14px] md:!text-base
                                     `} disabled={!selected}>
                                        <img src={arrowDown} alt="" />
                                    </button>
                                </div>
                                {/* {showProduct &&
                                    <div className={`
                                        ${isDarkMode ? "md:!bg-black md:!border md:!border-white md:!text-[#7E7E7E] !bg-black !border !border-white !text-[#7E7E7E]" : "border border-none rounded-[5px] text-black bg-[#FFF]"}
                                        ${styles.colDown} 
           
        `}>
                                 
                                            <Product product= "VNS" />
                                    
                                    </div>
                                } */}
                            </div>
                        </div>
                        <div className={styles.mainGridCol}>
                            <div className="flex flex-col lg:gap-0 gap-[2px] md:mt-0 mt-4">
                                <h2 className={` text-[#7c7c7c] lg:text-[18px] lg:leading-[24px] mb-2 md:mb-4 text-[15px] md:text-[12px] md:font-[600] font-[400] leading-[12px] md:text-base ${
                                            isDarkMode 
                                              ? "!text-[#7c7c7c]" : "!text-text-[#7E7E7E]"
                                          }`}>Discount</h2>
                                <div className={`${styles.input2} !h-[44.927px] md:!h-[57px] !mt-2 md:!mt-0
                                    ${
                                            isDarkMode 
                                                ? "!bg-black !text-[#7E7E7E] !border !border-solid !border-white !rounded-[7px]" 
                                                : "border border-solid border-[#0003] bg-white text-[#7c7c7c]"
                                        }`}>
                                    <h2 className={`!relative !top-[6px] md:!relative md:!top-base !text-[13px] md:!text-[13px]
                                         ${
                                            isDarkMode 
                                                ? "!bg-black !text-[#7E7E7E]" 
                                                : ""
                                        }
                                        `}>{discount ? `${networkName + ' ' + discount}%` : ''}</h2>
                                    <div className={`
                                        ${
                                            isDarkMode 
                                                ? "!bg-black !text-[#7E7E7E]" 
                                                : ""
                                        }
                                        ${styles.disc} !relative !top-[6px] md:!relative md:!top-base !text-[14px] md:text-[13px]`}>
                                        <img src={discountImg} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col lg:gap-[14px] gap-[7px] md:mt-12 mt-8"> 
                                <h2 className={`text-[15px] md:font-[600] font-[400] md:text-[12px] lg:text-[18px] ${
                                            isDarkMode 
                                              ? "!text-[#7E7E7E]]" : "!text-[#7E7E7E]"
                                          }`}>Phone Number <span
                                    className={`
                                       
                                       
                                    ${styles.span3} !text-[15px] md:!text-base`}><Link to="/select-vtu-recipient"> (Select Recipient) </Link>
                                </span></h2>
                                <div className={`!mt-2 md:!mt-0
                                   ${
                                            isDarkMode 
                                                ? "!bg-black !!text-[#7E7E7E]!border !border-solid !border-white" 
                                                : "border border-solid border-[#0003] bg-white !text-[#7E7E7E]"
                                        }
                                ${styles.input} !h-[48.927px] md:!h-[57px]
                                          `}>
                                    <div className={`
                                         ${
                                            isDarkMode 
                                                ? "!bg-black !text-[#7E7E7E]" 
                                                : "!text-[#7c7c7c]"
                                        }
                                        ${styles.output} !relative !top-[11px] md:!relative md:!top-[14px] !text-[14px] md:!text-base`}>
                                        <input type='number'
                                            className={`
                                                  ${
                                            isDarkMode 
                                                ? "!bg-black !text-[#7c7c7c]" 
                                                : "!text-[#7c7c7c]"
                                        }
                                                ${styles.phone} !text-[14px] md:!top-[14px] text-[#7c7c7c]`}  required
                                            placeholder='Add recipient phone number'
                                            onChange={(event) => {
                                                handleChange(event);
                                                setRecipientNumber(event.target.value);
                                            }} value={recipientNumber} />
                                        <div className={`${styles.call}
                                            ${
                                            isDarkMode 
                                                ? "!bg-black !text-[#7c7c7c]" 
                                                : "!text-[#7C7C7C]"
                                        }
                                        `}>
                                            <img src={call} alt="" />
                                        </div>
                                    </div>
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
                        </div>
                        {/* <div className={styles.mainGridCol}>
                            <div className='flex flex-col '> */}
                             <div className='grid grid-cols-1 lg:gap-[9.5vw] gap-[7px] md:grid-cols-2 lg-grid-cols-2 '>
                            <div className=''>
                                <h2 className={` text-[15px] md:font-[600] font-[400] md:text-[12px] lg:text-[18px] mb-2 md:mb-4 ${
                                            isDarkMode 
                                              ? "!text-[#7c7c7c]" : "!text-[#7c7c7c]"
                                          }
                                          `}>Recipient Name <span className={`${styles.span4} !text-[15px] md:!text-base`}>(optional)</span></h2>
                                <div className={`!mt-2 md:!mt-0
                                     ${
                                            isDarkMode 
                                                ? "!bg-black !text-[#7c7c7c] !border !border-solid !border-white" 
                                                : "border border-solid border-[#0003] bg-white text-[#7c7c7c]"
                                        }
                                    ${styles.input} !h-[44.927px] md:!h-[51px]`}>
                                    <div className={` ${
                                            isDarkMode 
                                                ? "!bg-black !text-[#7E7E7E]" 
                                                : ""
                                        }
                                        ${styles.output} !relative !top-[11px] md:!relative md:!top-base !text-[14px] md:!text-base`}>
                                        <input type='text' className={`
                                             ${
                                            isDarkMode 
                                                ? "!bg-black !text-[#7E7E7E]" 
                                                : "!text-[#7E7E7E]"
                                        }
                                            ${styles.phone} !text-[14px] md:!text-base`} required placeholder='Add recipient name' onChange={(event) => setRecipientName(event.target.value)} value={recipientName} />
                                        <div className={styles.call}>
                                            <img src={user} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='md:mt-0 mt-4'>
                            {/* <div className="flex flex-col lg:gap-[14px] gap-[7px] mt-8 md:mt-10"> */}
                                <h2 className={`text-[#7c7c7c] mb-2 md:mb-4 text-[15px] md:font-[600] font-[400] md:text-[12px] lg:text-[18px] ${
                                            isDarkMode 
                                              ? "!text-[#7E7E7E]" : "!text-text-[#7E7E7E]"
                                          }`}>Type Amount</h2>
                                <div className={`!mt-2 md:!mt-0
                                     ${
                                            isDarkMode 
                                                ? "!bg-black !text-[#7c7c7c] !border !border-solid !border-white" 
                                                : "border border-solid border-[#0003] bg-white text-[#7c7c7c]"
                                        }
                                    ${styles.input} !h-[44.927px] md:!h-[56px] `}>
                                    <div className={`
                                         ${
                                            isDarkMode 
                                                ? "!bg-black !text-[#7c7c7c]" 
                                                : ""
                                        }
                                        ${styles.output} !relative !top-[9px] md:!relative md:!top-base !text-[14px] md:!text-base`}>
                                        <span className={`text-gray-500 bottom-[1px] !relative !top-[7px] md:!relative md:!top-base !text-[14px] md:!text-base
                                             ${
                                            isDarkMode 
                                                ? "!bg-black !text-[#7c7c7c]" 
                                                : ""
                                        }
                                            `}>&#8358;</span>
                                        <input type='number' placeholder='Type amount' required className={`pl-[8px] md:pl-base
                                             ${
                                            isDarkMode 
                                                ? "!bg-black !text-[#7E7E7E]" 
                                                : "!text-[#7E7E7E]"
                                        }
                                            ${styles.phones} !relative !top-[5px] md:!relative md:!top-base !text-[14px] md:!text-base`} onChange={(event) => setAmount(event.target.value)} value={amount.toLocaleString()} />
                                        <div className={`${styles.call} !relative !top-[4px] md:!relative md:!top-base !text-[14px] md:!text-base`}>
                                            <img src={money} alt="" />
                                        </div>
                                    </div>
                                </div>
                                {errors.amount && (
                                    <div className="!text-[14px] text-red-500 italic lg:text-[14px]">
                                        {errors.amount}
                                    </div>
                                )}
                            </div>
                        </div>


                        {/* <div className={styles.mainGridCol}> */}
                            {/* <div className="flex flex-col lg:gap-[14px] gap-[6.6px] md:mt-4 mt-5">  */}
<div className='grid grid-cols-1 lg:gap-[9.5vw] gap-[7px] md:grid-cols-2 lg-grid-cols-2'>
                            <div>
                                <h2 className={`text-[#7c7c7c] text-[15px] mb-2 md:mb-4 md:font-[600] font-[400] md:text-[12px] lg:text-[18px]  ${
                                            isDarkMode 
                                              ? "!text-[#7c7c7c]" : "!text-[#7c7c7c]"
                                          }`}>Total Amount</h2>
                                <div className={`!mt-2 md:!mt-0
                                ${
        isDarkMode 
            ? "!bg-black !text-[#7c7c7c] !border !border-solid !border-white" 
            : "border border-solid border-[#0003] bg-white text-[#7c7c7c]"
    }
                                ${styles.input} !h-[44.927px] md:!h-[56px] `}>
                                    <div className={`
                                    ${
        isDarkMode 
            ? "!bg-black !text-[#7c7c7c]" 
            : ""
    }
                                    ${styles.output1} !relative !top-[17px] md:!relative md:!top-base !text-[14px] md:!text-base`}>
                                        <h2 className={`
                                        ${
        isDarkMode 
            ? "!bg-black !text-[#7c7c7c]" 
            : ""
    }
                                        !text-[14px] md:!text-[15px] text-[#7C7C7C] `}>{newAmount ? `NGN${newAmount}` : `Total Amount`}</h2>
                                        <div className={styles.disc}>
                                            <img src={money} alt="" className='w-full h-full' />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                            <div className='md:mt-0 mt-4'>
                                {/* <div className="flex flex-col lg:gap-[14px] gap-[7px] md:mt-10 mt-8"> */}
                                    <h2 className={`text-[#7c7c7c] text-[15px] mb-2 md:mb-4 md:font-[600] font-[400] md:text-[12px] lg:text-[18px]  ${
                                            isDarkMode 
                                              ? "!text-[#7c7c7c]" : "!text-[#7c7c7c]]"
                                          }`}>Payment Method</h2>
                                    <div className={`!mt-2 md:!mt-0
                                    ${
        isDarkMode 
            ? "!bg-black text-[#7c7c7c] !border !border-solid !border-white !rounded-[7px]"  
            : "border border-solid border-[#0003] bg-white text-[#7c7c7c]"
    }
                                    ${styles.input1} !h-[44.927px] md:!h-[58px]
                                  `}>
                                        {paymentSelected ?
                                            <li onClick={handleShowPayment} className={styles.labelInput}>
                                                <h2 className={`
                                                ${
        isDarkMode 
            ? "!bg-black !text-[#7c7c7c]" 
            : ""
    }
                                                ${styles.head4} !relative !top-[3.8px] md:!relative md:!top-base !text-[14px] md:!text-[15px]`}>{name}</h2>
                                                <h2 className={`${styles.head4} !relative !top-[3.8px] md:!relative md:!top-base !text-[14px] md:!text-[15px]`}>Wallet({paymentAmount.toLocaleString()})</h2>
                                            </li>
                                            :
                                            <h2 onClick={handleShowPayment} className={`
                                             ${
        isDarkMode 
            ? "!bg-black !text-[#7c7c7c]" 
            : ""
    }
                                            ${styles.head9} !relative !top-[5px] md:!relative md:!top-base !text-[14px] md:!text-base text-[#7C7C7C]`}>Select Payment Method</h2>}
                                        {paymentSelected ?
                                            <button className="rounded-full w-[12.02px] h-[12.02px] flex items-center justify-center text-[6px] overflow-hidden md:w-[12.02px] lg:w-[25px] md:h-[12.02px] lg:h-[25px] !relative !top-[4px] md:!relative md:!top-base md:!text-base" onClick={handleShowPayment}>
                                                <img src={image} alt="" className='w-full h-full object-cover ' />
                                            </button>
                                            :
                                            <button className='lg:w-6 lg:h-6 h-[11px] w-[11px] !relative !top-[5px] md:!relative md:!top-base !text-[14px] md:!text-base' onClick={handleShowPayment}>
                                                <img src={arrowDown} alt="" className='w-full h-full' />
                                            </button>
                                        }
                                    </div>
                                </div>
                                {/* <div className="relative"> */}
                                {showPayment &&
                                    <div className={`mt-[7px]
                                                 ${
                      isDarkMode
                        ? "bg-black border-white rounded-[7px] text-white"
                        : "text-[#7C7C7C] bg-white rounded-br-[7px] rounded-bl-[7px] lg:rounded-br-[14px] lg:rounded-bl-[14px]"
                    }
                    ${
                      toggleSideBar
                        ? "lg:w-[31.5%] lg:top-[100.5%]"
                        : "lg:w-[38.5%] lg:top-[105.3%]"
                    }  ${
                    styles.countryDropDown
                  }  shadow-xl border w-full lg:w-full  flex flex-col divide-y`}
               
    >
                                        {countryList.map((country) => (
                                              <div
    key={country.id}
    className={`py-[18px] md:py-[14px] font-normal px-2 flex items-center gap-[5px] text-[12px] md:text-[14px] lg:text-[16px] transition-all duration-300 hover:bg-slate-50 shadow-[0px_3.30667px_8.26667px_0px_rgba(0,0,0,0.25)]
                        ${
                          isDarkMode
                            ? "text-white hover:bg-slate-800 bg-black "
                            : "text-[#7C7C7C]"
                        } ${
                        country.code === "NGN"
                          ? "cursor-pointer"
                          : "cursor-not-allowed opacity-50"
                      }`}
    onClick={() => {
      if (country.code === "Nigerian NGN Wallet") {
        handleSelectPayment(country.code, country.flag, country.amount);
      }
    }}
  >

                                            <Payment key={country.id} flag={country.flag} code={country.code} amount={country.amount} onClick={() => handleSelectPayment(country.code, country.flag, country.amount)}  
                                            />
                                             </div>
                                        ))}
                                    </div>
                                }
                            </div>
                            </div>
                        {/* </div> */}
                    {/* </div> */}
                    <div className={styles.add}>
                        <h2 className='!text-[13px] md:!text-base'>Add to Recipient?</h2>
                        <div onClick={() => { setAddRecipient(!addRecipient); if (!addRecipient) handleAddRecipient(); }}
                            className={`w-[16px] h-[8.4px] md:w-[30px] md:h-[12px] lg:w-[50px] lg:h-[22px] lg:rounded-full rounded cursor-pointer ${addRecipient ? "bg-[#77ff60]" : "bg-[#b1b0b0]"}`}>
                            <div className={`rounded-full w-[8.5px] h-[7.4px] md:w-[14px] md:h-[12px] lg:h-[22px] lg:w-[21px] lg:drop-shadow-md bg-[#fff] ${addRecipient ? "float-right" : "float-left"}`}>
                            </div>
                        </div>
                        {isLoading && <p>Loading...</p>}
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
                            (
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
                                        <p className={`text-[#0008] ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>Recipient Name</p>
                                        <span>{recipientName}</span>
                                    </div>
                                    <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                                        <p className={`text-[#0008] ${isDarkMode ? "text-white" : "text-[#7C7C7C]"}`}>Payment Method</p>
                                        <span>{factorWalletName(name)}</span>
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
                                                                                    <div className="flex flex-col gap-2  ">
                                                                                      <div className="flex gap-[10px] justify-center items-center">
                                                                                        <img
                                                                                          className="w-[16px] h-[16px] bg-white"
                                                                                          src={image}
                                                                                          alt="/"
                                                                                        />
                                                                                        <div className="flex gap-[10px] items-center">
                                                                                            <p className={`text-[12px] md:text-[14px] leading-[20px] lg:leading-[22px]  lg:text-[16px] font-[500] ${isDarkMode ? "text-white" : "text-black"}`}>
                                                                                        Available Balance {"  "} 
                                                                                         </p>
                                                                                         <span className="text-black">
                                                                                          {`(${newBalance === "" || newBalance === null ? updateBalance : newBalance})`}
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
                            )
                        </Modal>
                    )}
                    {
                        confirm && (
                            <Modal>
                <div className="flex items-end justify-center lg:items-center lg:justify-center w-[100%] lg:px-[0px] rounded-[10px] h-[100%] px-[15px]">
            <div
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
                                        onClick={() => setConfirm(false)}
                                        className="w-[25px] h-[25px] md:w-[35px] md:h-[35px] lg:w-[25px] lg:h-[25px]"
                                        src="/Images/transferImages/close-circle.png"
                                        alt=""
                                    />
                                       </div>
                                    <hr  className="h-[6px] bg-[#04177f] border-none md:h-[10px]" />
                                    <div className="flex flex-col w-full justify-center py-[15px] lg:py-[0px] h-[100%] gap-[15px] ">
                                    <p className="text-[9px] md:text-[16px] font-extrabold text-center my-[8%] lg:my-[%]">
                                        Input PIN to complete transaction
                                    </p>
                                         <div

                  className="flex flex-col items-center lg:gap-[0px] gap-[5px] font-extrabold"
                >
                  <div
                    className="flex items-center gap-2.5"
                  >  {" "}
                                            {isVisible ? (
                                                <OtpInput
                                                    value={inputPin}
                                                    inputType="tel"
                                                    onChange={setInputPin}
                                                    numInputs={4}
                                                    shouldAutoFocus={true}
                                                    inputStyle={{
                                                        color: "#403f3f",
                                                        width: 30,
                                                        height: 30,
                                                        borderRadius: 3,
                                                        backgroundColor: isDarkMode ? "black" : "white",
                                                        border: isDarkMode ? "1px solid white" : "1px solid #ccc",
                                                    }}
                                                    renderInput={(props) => (
                                                        <input {...props} className="inputOTP mx-[3px]" />
                                                    )}
                                                />
                                            ) : (
                                                <div className="text-[24px] md:text-[24px] mt-1">
                                                    * * * *{" "}
                                                </div>
                                            )}
                                            <div
                                                className={`text-[#0003] text-xl md:text-3xl
                                                      ${
                            isDarkMode ? "text-[#7c7c7c7c]" :"inherit"
                        }`}
                                                onClick={toggleVisibility}
                                            >
                                                {isVisible ? <AiFillEye /> : <AiFillEyeInvisible />}
                                            </div>
                                        </div>
                                        <p className="text-[8px] md:text-[12px] text-[#04177f]">
                                            Forgot Pin ?
                                        </p>
                                        {errorMessage && (
                                            <p className='text-[14px] text-center text-red-500 leading-[18px] font-[500]
                                            lg:text-[16px] lg:leading-[24px] '>
                                           Incorrect pin
                                            </p>
                                        )}
                                    </div>
                                    <button
                                        onClick={()=> HandleAirtime()}
                                        disabled={inputPin.length !== 4 ? true : false}
                                        className={`${inputPin.length !== 4 ? "bg-[#0008]" : "bg-[#04177f]"
                                            } my-[5%] w-[225px] flex justify-center items-center mx-auto cursor-pointer text-[10px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[16px] lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
                                    >
                                        Purchase
                                    </button>
                                </div>
                                </div>
                                </div>
                            </Modal>
                        )
                    }
                    {transactSuccessPopUp && (
                        <Modal>
                            {/* <TransactFailedPopUp/> */}
                            <div
                                className={`${styles.successfulTwo} ${toggleSideBar ? "md:w-[45%] lg:ml-[20%] lg:w-[40%]" : "lg:w-[40%]"
                                    } w-[90%] md:w-[70%]  overflow-auto`}
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
                                            <h2 className="text-[10px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">{networkName}</h2>
                                        </span>
                                    </div>
                                    <div className="flex text-[10px] md:text-[12px] w-[90%] mx-auto justify-between  lg:text-[14px]">
                                        <p className="text-[#0008]">Product</p>
                                        <span>{networkName + ' ' + selectedProduct}</span>
                                    </div>
                                    <div className="flex text-[10px] md:text-[12px] w-[90%] mx-auto justify-between  lg:text-[14px]">
                                        <p className="text-[#0008]">Phone Number</p>
                                        <span>{inputValues}</span>
                                    </div>
                                    <div className="flex text-[10px] md:text-[12px] w-[90%] mx-auto justify-between  lg:text-[14px]">
                                        <p className="text-[#0008]">Recipient Name</p>
                                        <span>{recipientName}</span>
                                    </div>
                                    <div className="flex text-[10px] md:text-[12px] w-[90%] mx-auto justify-between  lg:text-[14px]">
                                        <p className="text-[#0008]">Payment Method</p>
                                        <span>{factorWalletName(name)}</span>
                                    </div>
                                    <div className="flex text-[10px] md:text-[12px] w-[90%] mx-auto justify-between  lg:text-[14px]">
                                        <p className="text-[#0008]">Amount</p>
                                        <span>&#8358;{amount}</span>
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
                                            setSelected("");
                                            setInputValues("");
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
                                        inputValues: inputValues,
                                        recipientName: recipientName,
                                        amount: amount,
                                        transactionID: transactionID,
                                        refNumber: refNumber,
                                        orderID: orderID,
                                        description: description,
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
                                <h2 className="text-[12px] my-[5%] text-center md:text-[20px] md:my-[3%] lg:text-[14px] lg:my-[2%]">
                                    Transaction Failed
                                </h2>
                                <img
                                    className="w-[120px] h-[120px] mx-auto my-[10%] lg:w-[150px] lg:h-[150px]"
                                    src="./Images/failed.png"
                                    alt="/"
                                />
                                <p className="text-[10px] text-[#0008] mx-[10px] text-center my-[60px] md:text-[14px] lg:text-[12px]">
                                    An unexpected error has occurred, please try again.
                                </p>

                                <div className="flex w-[70%] mx-auto items-center gap-[5%] md:w-[60%] lg:my-[5%]">
                                    <button
                                        onClick={() => {
                                            setTransactFailedPopUp(false);
                                            // window.location.reload();
                                            setNetworkName("");
                                            setSelected("");
                                            setInputValues("");
                                            setRecipientName("");
                                            setSelectedProduct("");
                                            setAmount("");
                                            setDiscount("");
                                            setPaymentSelected("");
                                        }}
                                        className={`bg-[#04177f] w-[111px] flex justify-center items-center mx-auto cursor-pointer text-[12px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[16px] lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
                                    >
                                        Done
                                    </button>
                                    <Link to="/airtime-receipt-failed" state={{
                                        networkName: networkName,
                                        selectedProduct: selectedProduct,
                                        inputValues: inputValues,
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
                    <div className={styles.containFlex2}>
                        <button className={`
                        ${
                        canProceed ? "bg-[#04177f]" : "bg-[#0008] cursor-not-allowed"
                        // ${amount.length < 2 ? "bg-[#0008]" : "bg-[#04177f]"
                            } w-full flex justify-center items-center mr-auto cursor-pointer text-[14px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[20px] lg:text-[16px] lg:h-[38px] lg:my-[4%]`}
                             disabled={!canProceed}
                            onClick={handleProceed}>Proceed
                        </button>
                    </div>
                </div>
                <div className={styles.help}>
                    <h2>You need help?</h2>
                    <Link to={`/ContactUs`} className={styles.btnContact}>Contact Us</Link>
                </div>
            </div>
            {isLoading && (
                <Modal>
                    <Loader/>
                </Modal>
            )}
            {sessionModal && (
                <InternalLoginSession setExpiredSessionLogin={setSessionModal}/>
            )}
            {restrictUser && <RestrictionPopUp/>}
        </DashBoardLayout>
    );
}

export default AirtimeVtu;
