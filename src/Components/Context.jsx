import React, { createContext, useState, useRef } from "react";
import Joi from "joi";
import axios from "axios";
// import { BASE_URL } from "../config";

export const ContextProvider = createContext();

export const Context = ({ children }) => {
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
      setVerification(true);
      setState({
        country: "",
        fullName: "",
        userName: "",
        email: "",
        phoneNumber: "",
        IVcode: "",
        password: "",
        confirmPassword: "",
      });

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
        headers: { "Content-Type": "Application/json" },
      };

      const url = "https://aremxyplug.onrender.com/api/v1/users/signup";

      axios
        .post(url, data, config)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error.message);
        });

      setErrors({});
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
  const [isValue, SetIsValue] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const date = new Date();

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const volumeValueToggle = () => {
    SetIsValue(!isValue);
  };
  // =============End Dashboard====================

  // ==============Start Transfer pages=============
  const [noRecord, setNoRecord] = useState(true);
  const [personalAccount, setPersonalAccount] = useState(false);
  const [businessAccount, setBusinessAccount] = useState(false);
  const [image, setImage] = useState("");
  const [code, setCode] = useState("");
  const [activeButton, setActiveButtons] = useState([true, false]);
  const [showList, setShowList] = useState(false);
  const [selected, setSelected] = useState(false);
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
  // ==========End Transfer page=============

  const hold = {
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

    // =========Dashboard=========
    toggleSideBar,
    setToggleSideBar,
    isDarkMode,
    handleToggle,
    volumeValueToggle,
    isValue,

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
    image,
    setImage,
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
  };

  return (
    <div>
      <ContextProvider.Provider value={hold}>
        {children}
      </ContextProvider.Provider>
    </div>
  );
};
