import React, { createContext, useState, useRef, useEffect } from "react";
import Joi from "joi";
import axios from "axios";
import arrowDown from "../../src/Components/EducationPins/imagesEducation/arrow-down.svg";
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
  const [isFocused, setIsFocused] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordTwo, setShowPasswordTwo] = useState(false);
  const [errors, setErrors] = useState({});
  const [verification, setVerification] = useState(false);
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
          if (response.status === 201) {
            setVerification(true);
            setState({
              country: "",
              fullName: "",
              userName: "",
              email: "",
              phoneNumber: "",
              password: "",
              confirmPassword: "",
            });
            setErrors({});
          } else if (response.status === 200) {
            alert("User Exist Already");
          } else if (response.status === 409) {
            alert("Input already in use: " + response.data);
          } else {
            console.log(response.data);
          }
        })
        .catch((error) => {
          console.error(error);
          alert(error.response.data.error);
        });
    }
  };
  // ========End for SignUp.jsx======

  // ============Start For Verification.jsx ==========
  const [buttonColor, setButtonColor] = useState("#0003");
  const [smsborderColor, setSmsBorderColor] = useState("#0003");
  const [emailborderColor, setEmailBorderColor] = useState("#0003");
  const [viaEmailOrSms, setViaEmailOrSms] = useState("");
  const [viaSms, setViaSms] = useState(false);
  const [viaEmail, setViaEmail] = useState(false);
  const [sms] = useState(true);
  const [email] = useState(true);
  const [success, setSuccess] = useState("");

  const onClickSms = () => {
    setButtonColor("#04177f");
    setSmsBorderColor("#d166ff");
    setEmailBorderColor("#0003");
    setViaEmailOrSms("sms");
  };
  const onClickEmail = () => {
    setButtonColor("#04177f");
    setSmsBorderColor("#0003");
    setEmailBorderColor("#d166ff");
    setViaEmailOrSms("email");
  };

  const submitHandler = () => {
    if (viaEmailOrSms === "sms") {
      setViaSms(true);
    } else if (viaEmailOrSms === "email") {
      setViaEmail(true);
    }
  };

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

  // =====================DATABUNDLE========================
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedNetworkProduct, setSelectedNetworkProduct] = useState("");
  const [recipientPhoneNumber, setRecipientPhoneNumber] = useState("");
  const [selectedAmount, setSelectedAmount] = useState("");
  const [recipientNames, setRecipientNames] = useState("");
  const [walletName, setWalletName] = useState("initialWalletName");

  const [accountId, setAccountId] = useState("");
  const [numberPins, setNumberPins] = useState("");
  const [emailId, setEmailId] = useState("");

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
  const [requestID, setRequestID] = useState("");
  const [serviceID, setServiceID] = useState("");

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

  //==========GOTV===========
  const [confirmGotvPopup, setConfirmGotvPopup] = useState(false);
  const [inputPinGotv, setInputPinGotv] = useState(false);
  const [gotvSuccessful, setGotvSuccessful] = useState(false);
  const [selectedOptionGOTV, setSelectedOptionGOTV] = useState("");
  const [showDropdownGOTV, setShowDropdownGOTV] = useState(false);
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

  //==========DSTV===========
  const [selectedOptionDstv, setSelectedOptionDstv] = useState("");
  const [showDropdownDstv, setShowDropdownDstv] = useState(false);
  const [confirmDstvPopup, setConfirmDstvPopup] = useState(false);
  const [inputPinDstv, setInputPinDstv] = useState(false);
  const [dstvSuccessful, setDstvSuccessful] = useState(false);

  //=========SHOWMAX===========
  const [selectedOptionShowmax, setSelectedOptionShowmax] = useState("");
  const [showDropdownShowmax, setShowDropdownShowmax] = useState(false);
  const [confirmShowmaxPopup, setConfirmShowmaxPopup] = useState(false);
  const [inputPinShowmax, setInputPinShowmax] = useState(false);
  const [showmaxSuccessful, setShowmaxSuccessful] = useState(false);

  //=========STARTIMES===========
  const [selectedOptionStarTimes, setSelectedOptionStarTimes] = useState("");
  const [showDropdownStarTimes, setShowDropdownStarTimes] = useState(false);
  const [confirmStarTimesPopup, setConfirmStarTimesPopup] = useState(false);
  const [inputPinStarTimes, setInputPinStarTimes] = useState(false);
  const [starTimesSuccessful, setStarTimesSuccessful] = useState(false);

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

  //========== BUSINESS KYC =============
  const [businessPopUp, setBusinessPopUp] = useState(false);

  // ========  ACCOUNT UPGRADE ===========
  const [accountUpgrade, setAccountUpgrade] = useState(false);

  //============ AUTHETICATION SETTINGS ========
  const [authenticationOpen, setAuthenticationOpen] = useState(false);

  //============== API COLLECTION FOR EDUCATION PINS
  const [eduResponse, setEduResponse] = useState(null);
  const hold = {
    handleRefresh,
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
    buttonColor,
    smsborderColor,
    emailborderColor,
    viaEmail,
    viaSms,
    setViaEmail,
    setViaSms,
    sms,
    email,
    onClickSms,
    onClickEmail,
    submitHandler,
    emailorsmsHandler,
    success,
    setSuccess,

    // ========SignUp.jsx========
    isFocused,
    showPassword,
    showPasswordTwo,
    errors,
    verification,
    setVerification,
    state,
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

    // ============Dashboard=============
    toggleSideBar,
    setToggleSideBar,
    isDarkMode,
    handleToggle,
    volumeValueToggle,
    isValue,
    logout,
    setLogout,

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

    // ==============DataBundle===============
    selectedOption,
    setSelectedOption,
    selectedNetworkProduct,
    setSelectedNetworkProduct,
    recipientPhoneNumber,
    setRecipientPhoneNumber,
    selectedAmount,
    setSelectedAmount,
    recipientNames,
    setRecipientNames,
    walletName,
    setWalletName,
    accountId,
    setAccountId,
    numberPins,
    setNumberPins,
    emailId,
    setEmailId,

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
    requestID,
    setRequestID,
    serviceID,
    setServiceID,

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
    setGotvSuccessful,
    selectedOptionGOTV,
    setSelectedOptionGOTV,
    showDropdownGOTV,
    setShowDropdownGOTV,

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
    // ==========  BVN ========

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
    setEduResponse
  };

  return (
    <div>
      <ContextProvider.Provider value={hold}>
        {children}
      </ContextProvider.Provider>
    </div>
  );
};
