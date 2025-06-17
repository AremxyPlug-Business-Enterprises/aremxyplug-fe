import React, { createContext, useState, useRef, useEffect } from "react";
import Joi from "joi";
import axios from "axios";
import arrowDown from "../../src/Components/EducationPins/imagesEducation/arrow-down.svg";
import NotVerifiedIcon from "../Components/My Profile & Account Settings/ProfileImages/NotVerifiedIcon.svg";
import { GetFunction } from "./ApiCollection.jsx/ApiBuck";
// import { BASE_URL } from "../config";

export const ContextProvider = createContext();

export const Context = ({ children }) => {
  const handleRefresh = () => {
    window.location.reload(true);
    // new
  };
  
  // Select username or email starts here
  const [hideNavbar, setHideNavbar] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [resetNumber, setResetNumber] = useState("");
  const [errorMessage, setErrorMessage] =useState('');

  // TRANSACTION PIN POP UP STATE STARTS HERE
  const [openTranspin, setOpenTranspin] = useState(false);
  // TRANSACTION PIN POP UP STATE ENDS HERE

  // TRANSACTION PIN SUCCESSFULL POP UP STATE STARTS HERE
  const [openTranspinSuccessful, setOpenTranspinSuccessful] = useState(false);
  // TRANSACTION PIN SUCCESSFULL UP STATE ENDS HERE

  // RESET TRANSACTION PIN  POP UP STATE STARTS HERE
  const [openResetTranspin, setOpenResetTranspin] = useState(false);
  // RESET TRANSACTION SUCCESSFULL POP UP STATE ENDS HERE

  // 2 STEP VERIFICATION  POP UP STATE STARTS HERE
  const [open2StepVerification, setOpen2StepVerification] = useState(false);
  // 2 STEP VERIFICATION POP UP STATE ENDS HERE

  // 2 STEP OTP VERIFICATION  POP UP STATE STARTS HERE
  const [open2StepOTP, setOpen2StepOTP] = useState(false);
  // 2 STEP OTP VERIFICATION POP UP STATE ENDS HERE

  // ======== For FAQ dropdown ===========
  const [firstDrop, setFirstDrop] = useState(false);
  const [secondDrop, setSecondDrop] = useState(false);
  const [thirdDrop, setThirdDrop] = useState(false);
  const [fourthDrop, setFourthDrop] = useState(false);
  const [fifthDrop, setFifthDrop] = useState(false);
  const [sixthDrop, setSixthDrop] = useState(false);
  const [seventhDrop, setSeventhDrop] = useState(false);
  const [eigthDrop, setEigthDrop] = useState(false);
  const [ninethDrop, setNinethDrop] = useState(false);
  const [tenthDrop, setTenthDrop] = useState(false);
  const [eleventhDrop, setEleventhDrop] = useState(false);
  const [twelvethDrop, setTwelvethDrop] = useState(false);
  const [thirteenDrop, setThirteenDrop] = useState(false);
  const [fourteenDrop, setFourteenDrop] = useState(false);
  const [fiftheenDrop, setFiftheenDrop] = useState(false);
  const [sixteenthDrop, setSixteenthDrop] = useState(false);
  const [seventeenthDrop, setSeventeenthDrop] = useState(false);
  const [eighteenthDrop, setEighteenthDrop] = useState(false);
  const [ninteenthDrop, setNinteenthDrop] = useState(false);
  const [twentiethDrop, setTwentiethDrop] = useState(false);

  function setDropHandler() {
    setFirstDrop((prev) => !prev);
  }
  function setDropHandler2() {
    setSecondDrop((prev) => !prev);
  }
  function setDropHandler3() {
    setThirdDrop((prev) => !prev);
  }
  function setDropHandler4() {
    setFourthDrop((prev) => !prev);
  }
  function setDropHandler5() {
    setFifthDrop((prev) => !prev);
  }
  function setDropHandler6() {
    setSixthDrop((prev) => !prev);
  }
  function setDropHandler7() {
    setSeventhDrop((prev) => !prev);
  }
  function setDropHandler8() {
    setEigthDrop((prev) => !prev);
  }
  function setDropHandler9() {
    setNinethDrop((prev) => !prev);
  }
  function setDropHandler10() {
    setTenthDrop((prev) => !prev);
  }
  function setDropHandler11() {
    setEleventhDrop((prev) => !prev);
  }
  function setDropHandler12() {
    setTwelvethDrop((prev) => !prev);
  }
  function setDropHandler13() {
    setThirteenDrop((prev) => !prev);
  }
  function setDropHandler14() {
    setFourteenDrop((prev) => !prev);
  }
  function setDropHandler15() {
    setFiftheenDrop((prev) => !prev);
  }
  function setDropHandler16() {
    setSixteenthDrop((prev) => !prev);
  }
  function setDropHandler17() {
    setSeventeenthDrop((prev) => !prev);
  }
  function setDropHandler18() {
    setEighteenthDrop((prev) => !prev);
  }
  function setDropHandler19() {
    setNinteenthDrop((prev) => !prev);
  }
  function setDropHandler20() {
    setTwentiethDrop((prev) => !prev);
  }
  // ============= End of FAQ drop down===========

  // ==========IMages======
  const [tfImage, settfImage] = useState("");
  const [withdrawImage, setWithdrawImage] = useState("");

  // =========Start For SignUp.jsx==========
  const [otpVerifyEmailSignup,setOtpVerifyEmailSignup] = useState("");
  const [otpVerifySmsSignup,setOtpVerifySmsSignup] = useState("")
  const [isFocused, setIsFocused] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordTwo, setShowPasswordTwo] = useState(false);
  const [errors, setErrors] = useState({});
  const [loadSignUp, setLoadSignUp] = useState(false);
  const [verification, setVerification] = useState(false);
  const [getCountry, setGetCountry] = useState('')
  const [state, setState] = useState({
    country: "",
    fullName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    IVcode: "",
    password: "",
    confirmPassword: "",
    checkbox: false,
  });
  const [checkboxChecked, setCheckboxChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    const { checked } = event.target;
    setCheckboxChecked(checked);
    if (checked) {
      console.log("true");
    }
  };

  const handleCountryChange = (countryCode) => {
    setState({ ...state, country: countryCode });
  };

  const handlePhoneNumberChange = (value) => {
    setState({ ...state, phoneNumber: value });
  };

  function changeHandler(e) {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;
    setState({ ...state, [name]: inputValue });
  }

  const handleFocus = (index) => {
    if (!isFocused.includes(index)) {
      setIsFocused([...isFocused, index]);
    }
  };

  const handleBlur = (index) => {
    if (isFocused.includes(index)) {
      setIsFocused(isFocused.filter((item) => item !== index));
    }
  };

  // ========form validation using regex=======
  const schema = Joi.object({
    country: Joi.string().required(),

    fullName: Joi.string()
      .pattern(new RegExp(/^[A-Za-z]+(?:\s[A-Za-z]+)+$/))
      .required()
      .messages({
        "string.pattern.base": "Please enter your First name and last name",
      }),

    userName: Joi.string()
      .pattern(new RegExp(/^[A-Za-z\s]+$/))
      .required()
      .messages({ "string.pattern.base": "Invalid Username" }),

    email: Joi.string()
      .pattern(new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      .required()
      .messages({ "string.pattern.base": "Invalid email " }),

    phoneNumber: Joi.string().required(),

    password: Joi.string()
      .pattern(new RegExp(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[^a-zA-Z\d\s]).{8,}$/))
      .required()
      .messages({
        "string.pattern.base":
          "Password must have At least one alphabetical character, At least one digit, Contains at least one special character (e.g., !@#$%^&*) and Minimum length of 8 characters",
      }),

    confirmPassword: Joi.string()
      .pattern(new RegExp(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[^a-zA-Z\d\s]).{8,}$/))
      .required()
      .messages({
        "string.pattern.base":
          "Password must have At least one alphabetical character, At least one digit, Contains at least one special character (e.g., !@#$%^&*) and Minimum length of 8 characters",
      }),

    checkbox: Joi.boolean().required().invalid(false).messages({
      "any.invalid":
        "Please ensure you agree to the privacy policy, terms and condition",
    }),
  });
  // ======end of form valdiation=====

  // ======on submit function=======
  const handleSubmit = (event) => {
    
    event.preventDefault();
  
    const {
      country,
      fullName,
      userName,
      email,
      phoneNumber,
      password,
      confirmPassword,
      checkbox,
    } = state;


   
    if (password !== confirmPassword) {
      setErrors({
        confirmPassword: "Password and Confirm Password do not match",
      });
      return;
    }

    const { error } = schema.validate({
      fullName,
      userName,
      email,
      phoneNumber,
      password,
      confirmPassword,
      checkbox,
      country,
    });

    if (error) {
      // Handle validation error
      setErrors(
        error.details.reduce((acc, curr) => {
          acc[curr.path[0]] = curr.message;
          return acc;
        }, {})
      );
    } else {
      setErrors({});
      setLoadSignUp(true);
      const data = {
        fullname: fullName,
        username: userName,
        phone_number: phoneNumber,
        // iv_code : IVCode,
        email: email,
        password: password,
        country: country,
      };
      const config = {
        headers: { "Content-Type": "application/json" },
      };
      const url = "https://aremxyplug.onrender.com/api/v1/signup";
      axios
        .post(url, data, config)
        .then((response) => {
          console.log(response);
          if (response.status === 201 || 200) {
           setVerification(true);
          } 
        })
        .catch(error => {
       if (error && error.response.data.status === 409) {
            alert("Input already in use: " + error.response.data.data.data);
          } else if (error && error.response.data.status === 404) {
            alert("An error has occured on your end");
            console.log(error.response.data.data.data);
          }else if(error && error.reponse.status === 500){
                alert("Server error:, Try some other time");
          }else if(error && error.reponse.status === undefined){
                alert("Check your internet Connection");
          } else {
            console.log(error.json());
            alert("Check your internet connection");
          }
        })
        .finally(() => {
          setLoadSignUp(false);
        });
      }
    }

  // ========End for SignUp.jsx======

  // ============Start For Verification.jsx ==========

  const [showModal, setShowModal] = useState(false);
  const [inputForgetEmail, setInputForgetEmail] = useState("");
  const [viaEmailOrSms, setViaEmailOrSms] = useState("");
  const [viaSms, setViaSms] = useState(false);
  const [viaEmail, setViaEmail] = useState(false);
  const [sms] = useState(true);
  const [email] = useState(true);
  const [success, setSuccess] = useState("");
  const [otpSent, setOtpSent] = useState('');
  const [forgetPassVerificationPinError, setForgetPassVerificationPinError] = useState("");
  const [forgetPassCountdown, setForgetPassCountdown] = useState(60);
  const [forgetPassCanResend, setForgetPassCanResend] = useState(false);
  const [submission, setSubmission] = useState(null);
  const [checked, setChecked] = useState(false);
  const[passwordAuthorisation, setPasswordAuthorisation] = useState("")
  

 

  const emailorsmsHandler = () => {
    if (!viaEmail) {
      setViaEmail(true);
      setViaSms(false);
    } else {
      setViaEmail(false);
      setViaSms(true);
    }
  };

  // ============end For Verification.jsx ==========

  // =============Start Dashboard=============
  const [toggleSideBar, setToggleSideBar] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isValue, SetIsValue] = useState(true);
  const [showModal2, setShowModal2] = useState(false);
  const [logout, setLogout] = useState(false);
  const date = new Date();
  const sidebarRef = useRef(null);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const volumeValueToggle = () => {
    SetIsValue(!isValue);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setToggleSideBar(false);
    }
  };

  // =============End Dashboard====================

  // ==============Start Transfer pages=============
  const [noRecord, setNoRecord] = useState(true);
  const [personalAccount, setPersonalAccount] = useState(false);
  const [businessAccount, setBusinessAccount] = useState(false);
  const [code, setCode] = useState("");
  const [activeButton, setActiveButtons] = useState([true, false]);
  const [showList, setShowList] = useState(false);
  const [selected, setSelected] = useState(false);
  const [selectedCurr, setSelectedCurr] = useState(false);
  const [amtToTransfer, setAmtToTransfer] = useState("");
  const [confirmationPopUp, setConfirmationPopUp] = useState(false);
  const [inputPinPopUp, setInputPinPopUp] = useState(false);
  const [transactSuccessPopUp, setTransactSuccessPopUp] = useState(false);
  const [tfPopUp, setTfPopUp] = useState(false);
  const [deletePopUp, setDeletePopUp] = useState(false);
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const [inputPin, setInputPin] = useState("");
  const textRef = useRef(null);
  const transferFee = 50;

  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  // =============Copy to Clipboard function=============
  const handleCopyClick = () => {
    const text = textRef.current.innerText;
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("Copied to clipboard");
      })
      .catch((err) => {
        console.error("Error copying text: ", err);
      });
  };

  const inputPinHandler = (e) => {
    setInputPin(e.target.value);
    setInputPinPopUp(false);
    setTransactSuccessPopUp(true);
  };

  const handleActive = (index) => {
    const updatedButtons = activeButton.map((isActive, i) => i === index);
    setActiveButtons(updatedButtons);
  };
  // ========================End Transfer page==========================

  // ===================Start of Aremxyplug pages====================
  const [emailPhoneNumberConfirmation, setEmailPhoneNumberConfirmation] =
    useState(false);
  const [mainCountry, setMainCountry] = useState("");
  const [mainTransferErrors, setMainTransferErrors] = useState({});
  const [mainTransferState, setMainTransferState] = useState({
    emailUsername: "",
    userPhoneNumber: "",
  });

  const handleMainInputChange = (e) => {
    const { name, value } = e.target;
    const limitedValue =
      name === "userPhoneNumber" ? value.replace(/\D/g, "").slice(0, 11) : value;


    setMainTransferState({
      ...mainTransferState,
      [name]: limitedValue,
    });
  };

  const mainTransferSchema = Joi.object({
    mainCountry: Joi.string().required(),
    userPhoneNumber: Joi.string()
      .pattern(new RegExp(/^\d{11}$/)) 
      .required()
      .max(11)
      .messages({
        "string.pattern.base": "Phone number should be 11 digits",
        "any.max": "Phone number should be at most 11 digits",
      }),
    emailUsername: Joi.alternatives()
      .try(
        Joi.string()
          .lowercase()
          .email({ tlds: { allow: false } }),
        Joi.string().alphanum().min(5).max(10)
      )
      .required(),
    amtToTransfer: Joi.string()
      .pattern(new RegExp(/\d{3,}/))
      .required()
      .messages({
        "string.pattern.base": "Amount can not be less than 100",
      }),
  });

  const ProceedToMainTransfer = (e) => {
    e.preventDefault();

    const { emailUsername, userPhoneNumber } = mainTransferState;

    const { error } = mainTransferSchema.validate({
      emailUsername,
      userPhoneNumber,
      amtToTransfer,
      mainCountry,
    });

    if (error) {
      setMainTransferErrors(
        error.details.reduce((acc, curr) => {
          acc[curr.path[0]] = curr.message;
          return acc;
        }, {})
      );
    } else {
      setEmailPhoneNumberConfirmation(true);
      setMainTransferErrors({});
    }
  };

  const mainEmailUsername = mainTransferState.emailUsername;
  const mainUserPhoneNumber = mainTransferState.userPhoneNumber;

  // ===================End of Aremxyplug pages======================

  // ===================Start of Global Transfer====================
  const [otherBanksConfirmation, setOtherBankConfirmation] = useState(false);
  const [globalCountry, setGlobalCountry] = useState("");
  const [globalTransferErrors, setGlobalTransferErrors] = useState({});
  const [globalTransferState, setGlobalTransferState] = useState({
    accountName: "",
    accountNumber: "",
    bankName: "",
  });

  const handleGlobalInputChange = (e) => {
    const { name, value } = e.target;
    const limitedValue =
      name === "accountNumber" ? value.replace(/\D/g, "").slice(0, 10) : value;

    setGlobalTransferState({
      ...globalTransferState,
      [name]: limitedValue,
    });
  };

  // const handleInputChange = (event) => {
  //   const { name, value, type, checked } = event.target;
  //   if (name === "accountNumber" && type === "number") {
  //     // If the input is of type 'number', limit it to 10 digits
  //     const inputValue = value.replace(/\D/g, "").slice(0, 10);
  //     setState({
  //       ...state,
  //       [name]: inputValue,
  //     });
  //   } else {
  //     // Handle other types of inputs as before
  //     const inputValue = type === "checkbox" ? checked : value;
  //     setState({
  //       ...state,
  //       [name]: inputValue,
  //     });
  //   }
  // };

  const globalTransferSchema = Joi.object({
    globalCountry: Joi.string().required(),
    bankName: Joi.string().required(),
    accountNumber: Joi.string()
      .pattern(new RegExp(/^\d{10,}/))
      .required()
      .messages({
        "string.pattern.base": "Account number should be 10 digits ",
      }),
    accountName: Joi.string().required(),
    amtToTransfer: Joi.string()
      .pattern(new RegExp(/\d{4,}/))
      .required()
      .messages({
        "string.pattern.base": "Amount can not be less than 1000",
      }),
  });

  const ProceedToGlobalTransfer = (e) => {
    e.preventDefault();
    const { accountNumber, accountName, bankName } = globalTransferState;

    const { error } = globalTransferSchema.validate({
      globalCountry,
      bankName,
      accountNumber,
      accountName,
      amtToTransfer,
    });

    if (error) {
      setGlobalTransferErrors(
        error.details.reduce((acc, curr) => {
          acc[curr.path[0]] = curr.message;
          return acc;
        }, {})
      );
    } else {
      setOtherBankConfirmation(true);
      setGlobalTransferErrors({});
    }
  };

  const globalBankName = globalTransferState.bankName;
  const globalAccountNumber = globalTransferState.accountNumber;
  const globalAccountName = globalTransferState.accountName;

  // ===================End of Global Transfer======================

  // ================Start of Transfer To International Banks =====================
  const [internationalBankConfirmation, setInternationalBankConfirmation] =
    useState(false);
  const [InternationalDetailPopUp, setInternationalDetailPopUp] =
    useState(false);
  const [transfer, setTransfer] = useState("");
  const [receive, setReceive] = useState("");
  const [internationalDetails, setInternationalDetails] = useState({
    bankName: "",
    accountNumber: "",
    accountName: "",
    swiftCode: "",
    recipientAddress: "",
    purposeOfPayment: "",
    message: "",
  });
  const [purpose, setPurpose] = useState(false);
  const [internErrors, setInternErrors] = useState({});
  const [CurrImage, setCurrImage] = useState("");

  const handleInternationalInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (name === "accountNumber" && type === "number") {
      // If the input is of type 'number', limit it to 10 digits
      const inputValue = value.replace(/\D/g, "").slice(0, 10);
      setInternationalDetails({
        ...state,
        [name]: inputValue,
      });
    } else {
      const inputValue = type === "checkbox" ? checked : value;
      setInternationalDetails({
        ...internationalDetails,
        [name]: inputValue,
      });
    }
  };

  const schemaForInternationalDetails = Joi.object({
    bankName: Joi.string()
      .required()
      .messages({ "string.pattern.base": "Bank name cannot be empty" }),
    accountNumber: Joi.string()
      .pattern(new RegExp(/^\d{10,}/))
      .required()
      .messages({
        "string.pattern.base": "Account number should be 10 digits ",
      }),
    accountName: Joi.string().required(),
    swiftCode: Joi.string().required(),
    recipientAddress: Joi.string().required(),
    purposeOfPayment: Joi.string().required(),
  });

  const handleProceedButton = (e) => {
    e.preventDefault();

    const {
      bankName,
      accountNumber,
      accountName,
      swiftCode,
      recipientAddress,
      purposeOfPayment,
    } = internationalDetails;

    const { error } = schemaForInternationalDetails.validate({
      bankName,
      accountNumber,
      accountName,
      swiftCode,
      recipientAddress,
      purposeOfPayment,
    });

    if (error) {
      setInternErrors(
        error.details.reduce((acc, curr) => {
          acc[curr.path[0]] = curr.message;
          return acc;
        }, {})
      );
    } else {
      setInternationalDetailPopUp(false);
      setInternationalBankConfirmation(true);
    }
  };
  const bankName = internationalDetails.bankName;
  const accountNumber = internationalDetails.accountNumber;
  const accountName = internationalDetails.accountName;
  const swiftCode = internationalDetails.swiftCode;
  const recipientAddress = internationalDetails.recipientAddress;
  const purposeOfPayment = internationalDetails.purposeOfPayment;

  // ================End of Transfer To International Banks =======================

  // =======================Start of WithdrawalPage=========================
  const [withrawalDeletePopUp, setWithdrawlDeletePopUp] = useState(false);
  const [withdrawDeleteSuccess, setWithdrawalDeleteSuccess] = useState(false);
  const [wthPopUp, setWthPopUp] = useState(false);
  const [withdrawPinPopUp, setWithdrawPinPopUp] = useState(false);
  const [withdrawalPin, setWithdrawalPin] = useState("");
  const withdrawPinHandler = (e) => {
    setWithdrawalPin(e.target.value);
    setWithdrawPinPopUp(false);
    setTransactSuccessPopUp(true);
  };
  // ========================End of Withdrawal page=========================

  // ==================Start for withdraw To Other Banks====================
  const [wOtherBanksConfirmation, setWOtherBankConfirmation] = useState(false);
  const [wGlobalCountry, setWGlobalCountry] = useState("");
  const [wGlobalWithdrawErrors, setWGlobalWithdrawErrors] = useState({});
  const [amtToWithdraw, setAmtToWithdraw] = useState("");
  const [withdrawalInputPin, setWithdrawalInputPin] = useState(false);
  const [otherWithdrawalConfirmation, setOtherWithdrawalConfirmation] =
    useState("");
  const [OtherBankWithdrawalSuccess, setOtherBankWithdrawalSuccess] =
    useState(false);
  const [wGlobalWithdrawState, setWGlobalWithdrawState] = useState({
    accountName: "",
    accountNumber: "",
    bankName: "",
  });

  const handleWithdrawGlobalInputChange = (e) => {
    const { name, value } = e.target;
    setWGlobalWithdrawState({
      ...wGlobalWithdrawState,
      [name]: value,
    });
  };

  const wGlobalWithdrawSchema = Joi.object({
    wGlobalCountry: Joi.string().required(),
    bankName: Joi.string().required(),
    accountNumber: Joi.string()
      .pattern(new RegExp(/^\d{10,}/))
      .required()
      .messages({
        "string.pattern.base": "Account number should be 10 digits ",
      }),
    accountName: Joi.string().required(),
    amtToWithdraw: Joi.string()
      .pattern(new RegExp(/\d{4,}/))
      .required()
      .messages({
        "string.pattern.base": "Amount can not be less than 1000",
      }),
  });

  const ProceedToGlobalWithdrawal = (e) => {
    e.preventDefault();
    const { accountNumber, accountName, bankName } = wGlobalWithdrawState;

    const { error } = wGlobalWithdrawSchema.validate({
      wGlobalCountry,
      bankName,
      accountNumber,
      accountName,
      amtToWithdraw,
    });

    if (error) {
      setWGlobalWithdrawErrors(
        error.details.reduce((acc, curr) => {
          acc[curr.path[0]] = curr.message;
          return acc;
        }, {})
      );
    } else {
      setOtherWithdrawalConfirmation(true);
      setWGlobalWithdrawErrors({});
    }
  };

  const wGlobalBankName = wGlobalWithdrawState.bankName;
  const wGlobalAccountNumber = wGlobalWithdrawState.accountNumber;
  const wGlobalAccountName = wGlobalWithdrawState.accountName;
  // ==================End for withdraw to other banks====================

  // ======================ExchangeRate===============================
  const [exchangeRate, setExchangeRate] = useState(null);

  useEffect(() => {
    // Replace 'YOUR_API_KEY' with your actual API key or use a different exchange rate API.
    const apiUrl = `https://api.exchangerate-api.com/v4/latest/USD`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const nairaToDollarRate = data.rates["NGN"];
        setExchangeRate(nairaToDollarRate);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // =====================AirtimeVTU========================
  const [networkName, setNetworkName] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [recipientName, setRecipientName] = useState("");
  const [recipientNumber, setRecipientNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [networkImage, setNetworkImage] = useState("");
  const [transactFailedPopUp, setTransactFailedPopUp] = useState("");
  const [inputValues, setInputValues] = useState("");
  const [networkId, setNetworkId] = useState("");
  const [productId, setProductId] = useState("");

  // ===================== MTN  DATABUNDLE========================
  const [selectedOptionMtn, setSelectedOptionMtn] = useState("");
  const [selectedNetworkProduct, setSelectedNetworkProduct] = useState("");
  const [recipientPhoneNumberMtn, setRecipientPhoneNumberMtn] = useState("");
  const  [selectedProductMtn, setSelectedProductMtn] = useState("");
  const [selectedAmountMtn, setSelectedAmountMtn] = useState("");
  const [recipientNamesMtn , setRecipientNamesMtn] = useState("");
  const [walletNameMtn, setWalletNameMtn] = useState("initialWalletName");
  const [accountId, setAccountId] = useState("");
  const [numberPins, setNumberPins] = useState("");
  const [emailId, setEmailId] = useState("");

  //==================GLO DataBundle ===============
   const [selectedOptionGlo, setSelectedOptionGlo] = useState("");
   const  [selectedProductGlo, setSelectedProductGlo] = useState("");
  const [selectedNetworkProductGlo, setSelectedNetworkProductGlo] = useState("");
  const [recipientPhoneNumberGlo, setRecipientPhoneNumberGlo] = useState("");
  const [selectedAmountGlo, setSelectedAmountGlo] = useState("");
  const [recipientNamesGlo , setRecipientNamesGlo] = useState("");
  const [walletNameGlo, setWalletNameGlo] = useState("initialWalletName");

  //================Etisalat =====================
    const [selectedOptionEtisalat, setSelectedOptionEtisalat] = useState("");
  const [selectedNetworkProductEtisalat, setSelectedNetworkProductEtisalat] = useState("");
  const [recipientPhoneNumberEtisalat, setRecipientPhoneNumberEtisalat] = useState("");
  const [selectedAmountEtisalat, setSelectedAmountEtisalat] = useState("");
  const [recipientNamesEtisalat , setRecipientNamesEtisalat] = useState("");
  const [walletNameEtisalat, setWalletNameEtisalat] = useState("initialWalletName");
  const  [selectedProductEtisalat, setSelectedProductEtisalat] = useState("");

  // ================ Airtel ================
   const [selectedOptionAirtel, setSelectedOptionAirtel] = useState("");
  const [selectedNetworkProductAirtel, setSelectedNetworkProductAirtel] = useState("");
  const [recipientPhoneNumberAirtel, setRecipientPhoneNumberAirtel] = useState("");
  const [selectedAmountAirtel, setSelectedAmountAirtel] = useState("");
  const [recipientNamesAirtel, setRecipientNamesAirtel] = useState("");
  const [walletNameAirtel, setWalletNameAirtel] = useState("initialWalletName");
  const  [selectedProductAirtel, setSelectedProductAirtel] = useState("");

  // ==================Card Payment===============================
  const [cardPaymentAmount, setCardPaymentAmount] = useState("");
  const [cardPaymentSelected, setCardPaymentSelected] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");
  const [cardSelected, setCardSelected] = useState("");
  const [selectedCard, setSelectedCard] = useState("");
  const [paymentSelected, setPaymentSelected] = useState("");

  //=============point redeem==============
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");
  const [realinputValue, setRealInputValue] = useState("");
  const [realoutputValue, setRealOutputValue] = useState("");

  //==============electricity subscrition===========
  const [meterNumber, setMeterNumber] = useState("");
  const [verifiedName, setVerifiedName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [ikedcEmail, setEmail] = useState("");
  const [ikedcamount, setIkedcamount] = useState("");
  const [billGenerate, setBillGenerate] = useState("");
  const [serviceID, setServiceID] = useState("");
  const [flag, setFlag] = useState("");

  //------------Airtime Conversion---------
  const [inputValueA, setInputValueA] = useState("");
  const [resultValue, setResultValue] = useState("");
  const [recipientNumberA, setRecipientNumberA] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [airEmail, setairEmail] = useState("");
  const [homeAdress, sethomeAdress] = useState("");
  
  
  //=============Currency conversion==============
  const [convertedAmount, setConvertedAmount] = useState("");
  const [initialValue, setInitialValue] = useState("");
  const [showListOne, setShowListOne] = useState(false);
  const [selectedOne, setSelectedOne] = useState(false);
  const [activeButtonOne, setActiveButtonsOne] = useState([true, false]);

  //=============TV-subscription==============

  const formatNumberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  const [mobileNumber, setMobileNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [smartCard, setSmartCard] = useState("");
  const [tvEmail, setTvEmail] = useState("");
  const [tvAmount, setTvAmount] = useState("");
  const [flagResult, setFlagResult] = useState("");
  const [methodPayment, setMethodPayment] = useState(false);
  const [methodImage, setMethodImage] = useState(arrowDown);
  const [tvWalletBalance, setTvWalletBalance] = useState("");
  const [decoderType, setDecoderType] = useState("");
  const [decoderActive, setDecoderActive] = useState(false);

  //==========GOTV===========
  const [confirmGotvPopup, setConfirmGotvPopup] = useState(false);
  const [inputPinGotv, setInputPinGotv] = useState(false);
  const [gotvSuccessful, setGotvSuccessful] = useState(false);
  const [selectedOptionGOTV, setSelectedOptionGOTV] = useState("");
  const [showDropdownGOTV, setShowDropdownGOTV] = useState(false);
  const [fetchedGotvPlans, setFetchedGotvPlans] = useState([]);
  const [tvSubscriptionResponse, setTvSubscriptionResponse] = useState({})
 const [ gotvOrderId, setGotvOrderId] = useState("")
  const [gotvTransactionId, setGotvTransactionId] = useState("")
     const [gotvRequestId, setGotvRequestId] = useState("")
       const [gotvDescription, setGotvDescription] = useState("");
        const [packageGotv, setPackageGotv] = useState("");

  //==========DSTV===========
  const [selectedOptionDstv, setSelectedOptionDstv] = useState("");
  const [showDropdownDstv, setShowDropdownDstv] = useState(false);
  const [confirmDstvPopup, setConfirmDstvPopup] = useState(false);
  const [inputPinDstv, setInputPinDstv] = useState(false);
  const [dstvSuccessful, setDstvSuccessful] = useState(false);
  const [fetchedDstvPlans, setFetchedDstvPlans] = useState([]);
  const [dstvAmount, setDstvAmount] = useState("₦");
  const [dstvEmail, setDstvEmail] = useState();
 const [ packageDstv, setPackageDstv] = useState("");
 const [dstvSmartCard, setDstvSmartCard] = useState("");
 const [dstvDecoderType, setDstvDecoderType] = useState("");
  const [dstvMobileNumber, setDstvMobileNumber] = useState("")
  const [dstvSubscriptionResponse, setDstvSubscriptionResponse] = useState({});
  const [dstvOrderId, setDstvOrderId] = useState("");
  const [dstvTransactionId, setDstvTransactionId] = useState("");
  const [dstvDescription, setDstvDescription] = useState("")
   const [dstvRequestId, setDstvRequestId] = useState("")
   const [dstvWalletBalance, setDstvWalletBalance] = useState("")


  //=========SHOWMAX===========
  const [selectedOptionShowmax, setSelectedOptionShowmax] = useState("");
  const [showDropdownShowmax, setShowDropdownShowmax] = useState(false);
  const [confirmShowmaxPopup, setConfirmShowmaxPopup] = useState(false);
  const [inputPinShowmax, setInputPinShowmax] = useState(false);
  const [showmaxSuccessful, setShowmaxSuccessful] = useState(false);
  const [fetchedShowMaxPlans, setFetchedShowMaxPlans] = useState([]);
  const [showMaxAmount, setShowMaxAmount] = useState("₦");
  const [showMaxEmail, setShowMaxEmail] = useState("");
   const [ packageShowMax, setPackageShowMax] = useState("");
    const [showMaxSmartCard, setShowMaxSmartCard] = useState("");
     const [showMaxDecoderType, setShowMaxDecoderType] = useState("")
      const [showMaxSubscriptionResponse, setShowMaxSubscriptionResponse] = useState({})
      const [showMaxOrderId, setShowMaxOrderId] = useState("");
  const [showMaxTransactionId, setShowMaxTransactionId] = useState("");
  const [showMaxDescription, setShowMaxDescription] = useState("");
    const [showMaxMobileNumber, setShowMaxMobileNumber] = useState("")
    const [showMaxWalletBalance,setShowMaxWalletBalance] = useState("");


  //=========STARTIMES===========
  const [selectedOptionStarTimes, setSelectedOptionStarTimes] = useState("");
  const [showDropdownStarTimes, setShowDropdownStarTimes] = useState(false);
  const [confirmStarTimesPopup, setConfirmStarTimesPopup] = useState(false);
  const [inputPinStarTimes, setInputPinStarTimes] = useState(false);
  const [starTimesSuccessful, setStarTimesSuccessful] = useState(false);
  const [fetchedStarTimesPlans, setFetchedStarTimesPlans] = useState([]);
  const [starTimesAmount, setStarTimesAmount] = useState("₦");
  const [starTimesEmail, setStarTimesEmail] = useState("");
   const [ packageStarTimes, setPackageStarTimes] = useState("");
    const [starTimesSmartCard, setStarTimesSmartCard] = useState("");
     const [starTimesDecoderType, setStarTimesDecoderType] = useState("");
         const [starTimesMobileNumber, setStarTimesMobileNumber] = useState("");
       const [starTimesSubscriptionResponse, setStarTimesSubscriptionResponse] = useState({});
       const [starTimesOrderId, setStarTimesOrderId] = useState("");
  const [starTimesTransactionId, setStarTimesTransactionId] = useState("");
  const [starTimesDescription, setStarTimesDescription] = useState("");
 const [starTimesWalletBalance, setStarTimesWalletBalance] = useState("");


  //============= EDUCATION PINS ========================
  //===============WAEC PINS================
  const [quantityResult, setQuantityResult] = useState("");
  const [quantityActive, setQuantityActive] = useState(false);
  const [paymentResult, setPaymentResult] = useState("");
  const [methodActive, setMethodActive] = useState(false);
  const [examType, setExamType] = useState("");
  const [examActive, setExamActive] = useState(false);
  const [educationPinPhone, setEducationPinPhone] = useState("");
  const [educationPinEmail, setEducationPinEmail] = useState("");
  const [educationAmount, setEducationAmount] = useState("₦");
  const [walletBalance, setWalletBalance] = useState("");

  //==============  NECO PINS  ================
  const [necoQuantityResult, setNecoQuantityResult] = useState("");
  const [necoQuantityActive, setNecoQuantityActive] = useState(false);
  const [necoPaymentResult, setNecoPaymentResult] = useState("");
  const [necoMethodActive, setNecoMethodActive] = useState(false);
  const [necoExamType, setNecoExamType] = useState("");
  const [necoExamActive, setNecoExamActive] = useState(false);
  const [necoEducationPinPhone, setNecoEducationPinPhone] = useState("");
  const [necoEducationPinEmail, setNecoEducationPinEmail] = useState("");
  const [necoEducationAmount, setNecoEducationAmount] = useState("₦");
  const [necoWalletBalance, setNecoWalletBalance] = useState("");

  // ============== JAMB PINS ================
  const [jambQuantityResult, setJambQuantityResult] = useState("");
  const [jambQuantityActive, setJambQuantityActive] = useState(false);
  const [jambPaymentResult, setJambPaymentResult] = useState("");
  const [jambMethodActive, setJambMethodActive] = useState(false);
  const [jambExamType, setJambExamType] = useState("");
  const [jambExamActive, setJambExamActive] = useState(false);
  const [jambEducationPinPhone, setJambEducationPinPhone] = useState("");
  const [jambEducationPinEmail, setJambEducationPinEmail] = useState("");
  const [jambEducationAmount, setJambEducationAmount] = useState("₦");
  const [jambWalletBalance, setJambWalletBalance] = useState("");

  // ============== NABTEB PINS =============
  const [nabtebQuantityResult, setNabtebQuantityResult] = useState("");
  const [nabtebQuantityActive, setNabtebQuantityActive] = useState(false);
  const [nabtebPaymentResult, setNabtebPaymentResult] = useState("");
  const [nabtebMethodActive, setNabtebMethodActive] = useState(false);
  const [nabtebExamType, setNabtebExamType] = useState("");
  const [nabtebExamActive, setNabtebExamActive] = useState(false);
  const [nabtebEducationPinPhone, setNabtebEducationPinPhone] = useState("");
  const [nabtebEducationPinEmail, setNabtebEducationPinEmail] = useState("");
  const [nabtebEducationAmount, setNabtebEducationAmount] = useState("₦");
  const [nabtebWalletBalance, setNabtebWalletBalance] = useState("");
 const [newBalance, setNewBalance] = useState("");
  // PROFILE & ACCOUNT SETTINGS =========
  //============ Profile Page =========
  const [openImage, setOpenImage] = useState(false);
  const [profilePage, setProfilePage] = useState(true);

  // ======== Account Verification Page ============
  const [verificationOpen, setVerificationOpen] = useState(false);
  const [idVerificationOpen, setIdVerificationOpen] = useState(true);
  const [bvnVerificationOpen, setBvnVerificationOpen] = useState(false);
  const [accountUpgradeOpen, setAccountUpgradeOpen] = useState(false);
  const [dropDownGender, setDropDownGender] = useState(false);
  const [idAddress, setIdAddress] = useState("");
  const [idState, setIdState] = useState("");
  const [idCity, setIdCity] = useState("");
  const [idLGA, setIdLGA] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [idPostalCode, setIdPostalCode] = useState("");
  const [bvnNumber, setBvnNumber] = useState("");
  const [bvnVerifyImage, setBvnVerifyImage] = useState(NotVerifiedIcon);
 const [bvnStatus, setBvnStatus] = useState('Not Verified');
const [dashLoading, setDashLoading] = useState(false);
const [bvnButtonState, setBvnButtonState] = useState("Verify")
const [virtualAccCreated, setVirtualAccCreated] = useState(false);
const [idCountry, setIdCountry] = useState("");
const [verifyImage, setVerifyImage] = useState(NotVerifiedIcon);
   const [idStatus, setIdStatus] = useState('Not Verified');
  //========== BUSINESS KYC =============
  const [businessPopUp, setBusinessPopUp] = useState(false);

  // ========  ACCOUNT UPGRADE ===========
  const [accountUpgrade, setAccountUpgrade] = useState(false);

  //============ AUTHETICATION SETTINGS ========
  const [authenticationOpen, setAuthenticationOpen] = useState(false);

  //============== API COLLECTION FOR EDUCATION PINS
  const [eduResponse, setEduResponse] = useState(null);
  const [nabtebEduResponse,setNabtebEduResponse] = useState(null);
  const [necoEduResponse,setNecoEduResponse] =useState(null);

  //============= LOGIN FORM ==========
  const [loginAuthorisation, setLoginAuthorisation] = useState(false);
  const [twoStepVerificationSuccess, setTwoStepVerificationSuccess]= useState(false);
 const [customerDetail, setCustomerDetail] = useState({});
const [airtimeStatus, setAirtimeStatus] = useState(false);
const [dataStatus, setDataStatus] = useState(false);
 const [educationPinStatus, setEducationPinStatus] = useState(false);
 const [subscriptionStatus, setSubscriptionStatus] = useState(false);
  const [networkStatus, setNetworkStatus] = useState(false);
 // Use Ref hook for user Deatils

  const [bankNameState, setBankNameState] = useState("");
  const [accountNameState, setAccountNameState] = useState("");
  const [accountNumberState, setAccountNumberState] = useState("");
  const [userStatus, setUserStatus] = useState(false);
  const [idButtonState, setIdButtonState] = useState("Verify");

  // Session Management Function for all the Api requests method
  // const handleUnauthorisedGetMethod = async()=> {

  // }


  const hold = {
    tvSubscriptionResponse,
     setTvSubscriptionResponse,
      gotvOrderId, setGotvOrderId,
          gotvTransactionId, setGotvTransactionId,
          gotvRequestId, setGotvRequestId,
          gotvDescription, setGotvDescription,
    customerDetail,
    setCustomerDetail,
    handleRefresh,
   bankNameState, 
   setBankNameState,
      accountNameState,
       setAccountNameState,
        accountNumberState, 
       setAccountNumberState, 
       userStatus,
        setUserStatus,
        setIdButtonState,
        idButtonState,
        verifyImage,
         setVerifyImage,
         idStatus,
         setIdStatus,
         networkStatus,
          setNetworkStatus,
             

           



       
    // ==================
    tfImage, settfImage,
    withdrawImage,
    setWithdrawImage,
    // ====================
    firstDrop,
    secondDrop,
    thirdDrop,
    fourthDrop,
    fifthDrop,
    sixthDrop,
    seventhDrop,
    eigthDrop,
    ninethDrop,
    tenthDrop,
    eleventhDrop,
    twelvethDrop,
    thirteenDrop,
    fourteenDrop,
    fiftheenDrop,
    sixteenthDrop,
    seventeenthDrop,
    eighteenthDrop,
    ninteenthDrop,
    twentiethDrop,
    setDropHandler,
    setDropHandler2,
    setDropHandler3,
    setDropHandler4,
    setDropHandler5,
    setDropHandler6,
    setDropHandler7,
    setDropHandler8,
    setDropHandler9,
    setDropHandler10,
    setDropHandler11,
    setDropHandler12,
    setDropHandler13,
    setDropHandler14,
    setDropHandler15,
    setDropHandler16,
    setDropHandler17,
    setDropHandler18,
    setDropHandler19,
    setDropHandler20,

    // *****************************************
    openTranspin,
    setOpenTranspin,
    // *****************************************

    // *****************************************
    hideNavbar,
    setHideNavbar,
    // *****************************************

    // *****************************************
    setOpenTranspinSuccessful,
    openTranspinSuccessful,
    // *****************************************

    // *****************************************
    openResetTranspin,
    setOpenResetTranspin,
    // *****************************************

    // *****************************************
    open2StepVerification,
    setOpen2StepVerification,
    // *****************************************

    // *****************************************
    open2StepOTP,
    setOpen2StepOTP,
    // *****************************************

    // ======Verification.jsx=====
   
    showModal,
     setShowModal,
    viaEmail,
    viaSms,
    viaEmailOrSms,
     setViaEmailOrSms,
    setViaEmail,
    setViaSms,
    sms,
    email,
    emailorsmsHandler,
    success, 
    setSuccess,
    otpSent, 
    setOtpSent,
    forgetPassVerificationPinError, 
    setForgetPassVerificationPinError,
   forgetPassCountdown, setForgetPassCountdown,
   forgetPassCanResend, setForgetPassCanResend,
   inputForgetEmail, 
   setInputForgetEmail,
   submission, setSubmission,
   checked, setChecked,
   passwordAuthorisation, setPasswordAuthorisation,
  

    // ========SignUp.jsx========
    otpVerifyEmailSignup,
    setOtpVerifyEmailSignup,
    otpVerifySmsSignup,
    setOtpVerifySmsSignup,
    isFocused,
    showPassword,
    showPasswordTwo,
    errors,
    verification,
    setVerification,
    state,
    setState,
    handleCountryChange,
    handlePhoneNumberChange,
    changeHandler,
    handleFocus,
    handleBlur,
    handleSubmit,
    setShowPassword,
    setShowPasswordTwo,
    checkboxChecked,
    handleCheckboxChange,
    resetEmail,
    setResetEmail,
    resetNumber,
    setResetNumber,
    loadSignUp,
     setLoadSignUp,
     getCountry,
      setGetCountry,

    // ============Dashboard=============
    toggleSideBar,
    setToggleSideBar,
    isDarkMode,
    handleToggle,
    volumeValueToggle,
    isValue,
    logout,
    setLogout,
    newBalance, setNewBalance,

    // Login
    showModal2,
    setShowModal2,

    // =========transferpages===========
    noRecord,
    setNoRecord,
    personalAccount,
    setPersonalAccount,
    businessAccount,
    setBusinessAccount,
    code,
    setCode,
    activeButton,
    setActiveButtons,
    handleActive,
    showList,
    setShowList,
    selected,
    setSelected,
    amtToTransfer,
    setAmtToTransfer,
    textRef,
    transferFee,
    date,
    useRef,
    confirmationPopUp,
    setConfirmationPopUp,
    inputPinPopUp,
    setInputPinPopUp,
    transactSuccessPopUp,
    setTransactSuccessPopUp,
    handleCopyClick,
    tfPopUp,
    setTfPopUp,
    deletePopUp,
    setDeletePopUp,
    deleteSuccess,
    setDeleteSuccess,
    inputPin,
    setInputPin,
    inputPinHandler,
    handleClickOutside,
    toggleVisibility,
    isVisible,

    // ==================Aremxyplug pages==============
    mainTransferErrors,
    mainCountry,
    setMainCountry,
    handleMainInputChange,
    mainEmailUsername,
    mainUserPhoneNumber,
    emailPhoneNumberConfirmation,
    setEmailPhoneNumberConfirmation,
    ProceedToMainTransfer,

    // ==================GLobal Transfer==============
    otherBanksConfirmation,
    setOtherBankConfirmation,
    globalTransferErrors,
    globalCountry,
    setGlobalCountry,
    ProceedToGlobalTransfer,
    globalBankName,
    globalAccountNumber,
    globalAccountName,
    handleGlobalInputChange,

    // ===========International transfer ==============
    internationalBankConfirmation,
    setInternationalBankConfirmation,
    InternationalDetailPopUp,
    setInternationalDetailPopUp,
    internationalDetails,
    setInternationalDetails,
    purpose,
    setPurpose,
    internErrors,
    setInternErrors,
    handleInternationalInputChange,
    handleProceedButton,
    bankName,
    accountNumber,
    accountName,
    swiftCode,
    recipientAddress,
    purposeOfPayment,
    selectedCurr,
    setSelectedCurr,
    CurrImage,
    setCurrImage,
    transfer,
    setTransfer,
    receive,
    setReceive,

    // ============withdrawal=============
    withdrawalPin,
    setWithdrawalPin,
    withrawalDeletePopUp,
    setWithdrawlDeletePopUp,
    wthPopUp,
    setWthPopUp,
    withdrawDeleteSuccess,
    setWithdrawalDeleteSuccess,
    withdrawPinPopUp,
    setWithdrawPinPopUp,
    withdrawPinHandler,

    // ===============withdraw to other banks=========
    wOtherBanksConfirmation,
    setWOtherBankConfirmation,
    wGlobalWithdrawErrors,
    wGlobalCountry,
    setWGlobalCountry,
    wGlobalWithdrawState,
    ProceedToGlobalWithdrawal,
    wGlobalBankName,
    wGlobalAccountNumber,
    wGlobalAccountName,
    handleWithdrawGlobalInputChange,
    amtToWithdraw,
    setAmtToWithdraw,
    otherWithdrawalConfirmation,
    setOtherWithdrawalConfirmation,
    withdrawalInputPin,
    setWithdrawalInputPin,
    OtherBankWithdrawalSuccess,
    setOtherBankWithdrawalSuccess,
    // ==============exchangeRate=============
    exchangeRate,

    // ==============AirtimeVTU===============
    networkName,
    setNetworkName,
    selectedProduct,
    setSelectedProduct,
    recipientName,
    setRecipientName,
    recipientNumber,
    setRecipientNumber,
    amount,
    setAmount,
    networkImage,
    setNetworkImage,
    transactFailedPopUp,
    setTransactFailedPopUp,
    networkId,
    setNetworkId,
    inputValues,
    setInputValues,
    productId,
    setProductId,

    // ==============MTN DataBundle===============
    selectedOptionMtn,
    setSelectedOptionMtn,
    selectedProductMtn,
    setSelectedProductMtn,
    selectedNetworkProduct,
    setSelectedNetworkProduct,
    recipientPhoneNumberMtn,
    setRecipientPhoneNumberMtn,
    selectedAmountMtn,
    setSelectedAmountMtn,
    recipientNamesMtn,
    setRecipientNamesMtn,
    walletNameMtn,
    setWalletNameMtn,
    accountId,
    setAccountId,
    numberPins,
    setNumberPins,
    emailId,
    setEmailId,

    //================GLO ============
    selectedOptionGlo,
    setSelectedOptionGlo,
    recipientPhoneNumberGlo,
    setRecipientPhoneNumberGlo,
    selectedAmountGlo,
    setSelectedAmountGlo,
    recipientNamesGlo,
    setRecipientNamesGlo,
    walletNameGlo,
    setWalletNameGlo,
    selectedNetworkProductGlo,
     setSelectedNetworkProductGlo,
       selectedProductGlo,
    setSelectedProductGlo,

    // =============== Etisalat ==========
    selectedOptionEtisalat,
    setSelectedOptionEtisalat,
   selectedNetworkProductEtisalat,
    setSelectedNetworkProductEtisalat,
    recipientPhoneNumberEtisalat,
    setRecipientPhoneNumberEtisalat,
    selectedAmountEtisalat,
    setSelectedAmountEtisalat,
    recipientNamesEtisalat,
    setRecipientNamesEtisalat,
    walletNameEtisalat,
    setWalletNameEtisalat,
      selectedProductEtisalat,
    setSelectedProductEtisalat,

    //============ Airtel ==============
     selectedOptionAirtel,
    setSelectedOptionAirtel,
   selectedNetworkProductAirtel,
    setSelectedNetworkProductAirtel,
    setSelectedProductAirtel,
    selectedProductAirtel,
    recipientPhoneNumberAirtel,
    setRecipientPhoneNumberAirtel,
    selectedAmountAirtel,
    setSelectedAmountAirtel,
    recipientNamesAirtel,
    setRecipientNamesAirtel,
    walletNameAirtel,
    setWalletNameAirtel,
    //===============Card payment==============
    cardPaymentAmount,
    setCardPaymentAmount,
    cardPaymentSelected,
    setCardPaymentSelected,
    cardHolderName,
    setCardHolderName,
    cardSelected,
    setCardSelected,
    selectedCard,
    setSelectedCard,
    paymentSelected,
    setPaymentSelected,

    //point redeem
    inputValue,
    setInputValue,
    outputValue,
    setOutputValue,
    realinputValue,
    setRealInputValue,
    realoutputValue,
    setRealOutputValue,

    //electricity subscription
    meterNumber,
    setMeterNumber,
    verifiedName,
    setVerifiedName,
    phoneNumber,
    setPhoneNumber,
    ikedcEmail,
    setEmail,
    ikedcamount,
    setIkedcamount,
    billGenerate,
    setBillGenerate,
    serviceID,
    setServiceID,
    flag,
    setFlag,

    //Airtime Conversion
    inputValueA,
    setInputValueA,
    resultValue,
    setResultValue,
    recipientNumberA,
    setRecipientNumberA,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    airEmail,
    setairEmail,
    homeAdress,
    sethomeAdress,

    //currency
    convertedAmount,
    setConvertedAmount,
    initialValue,
    setInitialValue,
    showListOne,
    setShowListOne,
    selectedOne,
    setSelectedOne,
    setActiveButtonsOne,
    activeButtonOne,

    //=====TV-subscription
    //=====general
    formatNumberWithCommas,
    mobileNumber,
    setMobileNumber,
    cardName,
    setCardName,
    smartCard,
    setSmartCard,
    tvEmail,
    setTvEmail,
    tvAmount,
    setTvAmount,
    methodPayment,
    setMethodPayment,
    flagResult,
    setFlagResult,
    tvWalletBalance,
    setTvWalletBalance,
    methodImage,
    setMethodImage,
    decoderType,
    setDecoderType,
    decoderActive,
    setDecoderActive,

    //=======GOTV
    confirmGotvPopup,
    setConfirmGotvPopup,
    inputPinGotv,
    setInputPinGotv,
    gotvSuccessful,
    errorMessage, setErrorMessage,
    setGotvSuccessful,
    selectedOptionGOTV,
    setSelectedOptionGOTV,
    showDropdownGOTV,
    setShowDropdownGOTV,
    fetchedGotvPlans,
    setFetchedGotvPlans,
    packageGotv,
     setPackageGotv,

    //=======DSTV
    confirmDstvPopup,
    setConfirmDstvPopup,
    inputPinDstv,
    setInputPinDstv,
    dstvSuccessful,
    setDstvSuccessful,
    selectedOptionDstv,
    setSelectedOptionDstv,
    showDropdownDstv,
    setShowDropdownDstv,
    fetchedDstvPlans,
    setFetchedDstvPlans,
    dstvAmount,
    setDstvAmount,
    dstvEmail,
    setDstvEmail,
    packageDstv,
    setPackageDstv,
    dstvSmartCard,
    setDstvSmartCard,
    dstvDecoderType,
     setDstvDecoderType,
     dstvMobileNumber,
      setDstvMobileNumber,
      dstvSubscriptionResponse, 
      setDstvSubscriptionResponse,
      dstvOrderId, setDstvOrderId,
dstvTransactionId, setDstvTransactionId,
dstvDescription, setDstvDescription,
dstvRequestId, setDstvRequestId,
dstvWalletBalance,
 setDstvWalletBalance,

    //=======SHOWMAX
    confirmShowmaxPopup,
    setConfirmShowmaxPopup,
    inputPinShowmax,
    setInputPinShowmax,
    showmaxSuccessful,
    setShowmaxSuccessful,
    selectedOptionShowmax,
    setSelectedOptionShowmax,
    showDropdownShowmax,
    setShowDropdownShowmax,
    fetchedShowMaxPlans,
    setFetchedShowMaxPlans,
    showMaxAmount,
    setShowMaxAmount,
    showMaxEmail,
    setShowMaxEmail,
    packageShowMax,
    setPackageShowMax,
    showMaxSmartCard,
    setShowMaxSmartCard,
    showMaxDecoderType, 
    setShowMaxDecoderType,
    showMaxMobileNumber,
    setShowMaxMobileNumber,
    showMaxSubscriptionResponse,
   setShowMaxSubscriptionResponse,
   showMaxOrderId, setShowMaxOrderId,
 showMaxTransactionId, setShowMaxTransactionId,
  showMaxDescription, setShowMaxDescription,
  showMaxWalletBalance,
 setShowMaxWalletBalance,

    //=======STARTIMES
    confirmStarTimesPopup,
    setConfirmStarTimesPopup,
    inputPinStarTimes,
    setInputPinStarTimes,
    starTimesSuccessful,
    setStarTimesSuccessful,
    selectedOptionStarTimes,
    setSelectedOptionStarTimes,
    showDropdownStarTimes,
    setShowDropdownStarTimes,
    fetchedStarTimesPlans,
    setFetchedStarTimesPlans,
    starTimesAmount,
    setStarTimesAmount,
       starTimesEmail,
       setStarTimesEmail,
       packageStarTimes,
       setPackageStarTimes,
       starTimesSmartCard,
       setStarTimesSmartCard,
       starTimesDecoderType, 
       setStarTimesDecoderType,
       starTimesMobileNumber,
        setStarTimesMobileNumber,
        starTimesSubscriptionResponse,
         setStarTimesSubscriptionResponse,
         starTimesOrderId, setStarTimesOrderId,
  starTimesTransactionId, setStarTimesTransactionId,
 starTimesDescription, setStarTimesDescription,
 starTimesWalletBalance,
 setStarTimesWalletBalance,




    //====== EDUCATION PINS
    //=======WAEC PINS
    quantityResult,
    setQuantityResult,
    quantityActive,
    setQuantityActive,
    paymentResult,
    setPaymentResult,
    methodActive,
    setMethodActive,
    examType,
    setExamType,
    examActive,
    setExamActive,
    educationPinPhone,
    setEducationPinPhone,
    educationPinEmail,
    setEducationPinEmail,
    educationAmount,
    setEducationAmount,
    walletBalance,
    setWalletBalance,

    //======NECO PINS ==========
    necoQuantityResult,
    setNecoQuantityResult,
    necoQuantityActive,
    setNecoQuantityActive,
    necoPaymentResult,
    setNecoPaymentResult,
    necoMethodActive,
    setNecoMethodActive,
    necoExamType,
    setNecoExamType,
    necoExamActive,
    setNecoExamActive,
    necoEducationPinPhone,
    setNecoEducationPinPhone,
    necoEducationPinEmail,
    setNecoEducationPinEmail,
    necoEducationAmount,
    setNecoEducationAmount,
    necoWalletBalance,
    setNecoWalletBalance,
    airtimeStatus, setAirtimeStatus,
    educationPinStatus, setEducationPinStatus,
    subscriptionStatus, setSubscriptionStatus,
    dataStatus, setDataStatus,


    //==========   JAMB PINS =========
    jambQuantityResult,
    setJambQuantityResult,
    jambQuantityActive,
    setJambQuantityActive,
    jambPaymentResult,
    setJambPaymentResult,
    jambMethodActive,
    setJambMethodActive,
    jambExamType,
    setJambExamType,
    jambExamActive,
    setJambExamActive,
    jambEducationPinPhone,
    setJambEducationPinPhone,
    jambEducationPinEmail,
    setJambEducationPinEmail,
    jambEducationAmount,
    setJambEducationAmount,
    jambWalletBalance,
    setJambWalletBalance,

    //========= NABTEB PINS =======
    nabtebQuantityResult,
    setNabtebQuantityResult,
    nabtebQuantityActive,
    setNabtebQuantityActive,
    nabtebPaymentResult,
    setNabtebPaymentResult,
    nabtebMethodActive,
    setNabtebMethodActive,
    nabtebExamType,
    setNabtebExamType,
    nabtebExamActive,
    setNabtebExamActive,
    nabtebEducationPinPhone,
    setNabtebEducationPinPhone,
    nabtebEducationPinEmail,
    setNabtebEducationPinEmail,
    nabtebEducationAmount,
    setNabtebEducationAmount,
    nabtebWalletBalance,
    setNabtebWalletBalance,

    // ========= PROFILE & ACCOUNT SETTINGS ===========
    // ========== Profile Page ========
    openImage,
    setOpenImage,
    profilePage,
    setProfilePage,

    // ========= Account verification Page =====
    verificationOpen,
    setVerificationOpen,
    idVerificationOpen,
    setIdVerificationOpen,
    bvnVerificationOpen,
    setBvnVerificationOpen,
    accountUpgradeOpen,
    setAccountUpgradeOpen,
    dropDownGender,
    setDropDownGender,
    idAddress,
    setIdAddress,
    idCity,
    setIdCity,
    idState,
    setIdState,
    idLGA,
    setIdLGA,
    idNumber,
    setIdNumber,
    idPostalCode,
    setIdPostalCode,
    idCountry,
     setIdCountry,
    // ==========  BVN ========

bvnNumber, 
setBvnNumber,
bvnVerifyImage, 
setBvnVerifyImage,
bvnStatus,
setBvnStatus,
dashLoading, 
setDashLoading,
virtualAccCreated,
setVirtualAccCreated,
bvnButtonState,
 setBvnButtonState,
    //========== Business PopUp =======
    businessPopUp,
    setBusinessPopUp,

    // ========== Account upgrade ========
    accountUpgrade,
    setAccountUpgrade,

    //======== AUTHENTICATION  SETTING =======
    authenticationOpen,
    setAuthenticationOpen,
    //========API COLLECTION FOR EDUCATION PINS =====\
    eduResponse, 
    setEduResponse,
    nabtebEduResponse,
    setNabtebEduResponse,
    necoEduResponse,
    setNecoEduResponse,
    // ====Login Authorisation
    loginAuthorisation,
    setLoginAuthorisation,
    twoStepVerificationSuccess, 
    setTwoStepVerificationSuccess,
   
  }
return (
    <div>
      <ContextProvider.Provider value={hold}>
        {children}
      </ContextProvider.Provider>
    </div>
  );
};
