import React, { createContext, useState } from "react";
import Joi from "joi";

export const ContextProvider = createContext();

export const Context = ({ children }) => {
  // Hide navbar for authentication screens starts here
  const [hideNavbar, setHideNavbar] = useState(false);
  // Hide navbar for authentication screens ends here

  // TRANSACTION PIN POP UP STATE STARTS HERE
  const [openTranspin, setOpenTranspin] = useState(false);
  // TRANSACTION PIN POP UP STATE ENDS HERE

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
  });

  const handleCountryChange = (countryCode) => {
    setState({ ...state, country: countryCode });
  };

  const handlePhoneNumberChange = (value) => {
    setState({ ...state, phoneNumber: value });
  };

  function changeHandler(e) {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
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
      // IVcode,
      password,
      confirmPassword,
    } = state;

    const { error } = schema.validate({
      fullName,
      userName,
      email,
      phoneNumber,
      // IVcode,
      password,
      confirmPassword,
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
      console.log("Form submitted successfully");
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
      setErrors({});
    }
  };
  // ========End for SignUp.jsx======

  // ============Start For Verification.jsx ==========
  const [buttonColor, setButtonColor] = useState("#0003");
  const [smsborderColor, setSmsBorderColor] = useState("#0003");
  const [emailborderColor, setEmailBorderColor] = useState("#0003");
  const [viaEmail, setViaEmail] = useState(false);
  const [viaSms, setViaSms] = useState(false);
  const [sms, setSms] = useState(true);
  const [email, setEmail] = useState(true);

  const onClickSms = () => {
    setButtonColor("#04177f");
    setSmsBorderColor("#d166ff");
    setEmailBorderColor("#0003");
    setSms(true);
    setEmail(true);
  };
  const onClickEmail = () => {
    setButtonColor("#04177f");
    setSmsBorderColor("#0003");
    setEmailBorderColor("#d166ff");
    setSms(true);
    setEmail(true);
  };

  const submitHandler = () => {
    if (sms) {
      setViaSms(true);
    } else if (email) {
      setViaEmail(true);
    }
  };
  // ============end For Verification.jsx ==========

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

    // ======Verification.jsx=====
    buttonColor,
    smsborderColor,
    emailborderColor,
    viaEmail,
    viaSms,
    sms,
    email,
    onClickSms,
    onClickEmail,
    submitHandler,

    // ========SignUp.jsx========
    isFocused,
    showPassword,
    showPasswordTwo,
    errors,
    verification,
    state,
    handleCountryChange,
    handlePhoneNumberChange,
    changeHandler,
    handleFocus,
    handleBlur,
    handleSubmit,
    setShowPassword,
    setShowPasswordTwo,
  };

  return (
    <div>
      <ContextProvider.Provider value={hold}>
        {children}
      </ContextProvider.Provider>
    </div>
  );
};
