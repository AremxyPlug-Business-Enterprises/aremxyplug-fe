import React, { useContext, useState } from "react";
import { ContextProvider } from "../../../../Context";
import { DashBoardLayout } from "../../../Layout/DashBoardLayout";
import { Link } from "react-router-dom";
import style from "../../../../AirTimePage/AirtimeVtu.module.css";
import styles from "../../TransferComponent/transfer.module.css";
import { Modal } from "../../../../Screens/Modal/Modal";
import Joi from "joi";


const AremxyAddUser = () => {

    const {
        toggleSideBar,
      } = useContext(ContextProvider);

    const [userPhoneNumber, setUserPhoneNumber] =  useState('');
    const [emailUsername, setEmailUserName] = useState('');
    const [mainCountry, setMainCountry] = useState("");
    const [selected, setSelected] = useState(false);
    const [showList, setShowList] = useState(false);
    const [save, setSave] = useState(false);
    const [errors, setErrors] = useState({});

    const firmTransferSchema = Joi.object({
        mainCountry: Joi.string().required(),
        userPhoneNumber: Joi.string()
        .pattern(new RegExp(/^\d{11}$/)) // Exactly 10 digits, you can adjust as needed
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
      });

      const handleSave = (e) => {
        e.preventDefault();
      
        const { error } = firmTransferSchema.validate({
          emailUsername,
          userPhoneNumber,
          mainCountry,
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

      const countryList = [
        {
          id: 1,
          name: "Nigeria",
          code: "NGN",
          flag: require("../../../../Dashboard/DashboardComponents/flagsImages/nigeriaFlag.png"),
        },
        {
          id: 2,
          name: "United States",
          code: "USD",
          flag: require("../../../../Dashboard/DashboardComponents/flagsImages/americaFlag.png"),
        },
        {
          id: 3,
          name: "United Kingdom",
          code: "GBP",
          flag: require("../../../../Dashboard/DashboardComponents/flagsImages/ukFlag.png"),
        },
        {
          id: 4,
          name: "European",
          code: "EUR",
          flag: require("../../../../Dashboard/DashboardComponents/flagsImages/europeanFlag.png"),
        },
        {
          id: 5,
          name: "Australia",
          code: "AUD",
          flag: require("../../../../Dashboard/DashboardComponents/flagsImages/australiaFlag.png"),
        },
        {
          id: 6,
          name: "Kenya",
          code: "KES",
          flag: require("../../../../Dashboard/DashboardComponents/flagsImages/kenyaFlag.png"),
        },
      ];

    const [flag, setFlag] = useState("");
    const [confirm, setConfirm] = useState(false);

    const handleCountryClick = (name, flag, id, code) => {
        setFlag(flag);
        setShowList(false);
        setMainCountry(name);
        setSelected(true);
    };

    const handleConfirm =()=> {
        setSave(false);
        setConfirm(true);
    }

  return (
    <DashBoardLayout>
      <div className={style.AirtimeTops}>
        <div className={style.airtimeTop}>
          <div
            style={{
              background:
                "#B4BEFA",
            }}
            className="w-full mb-[0px] lg:mb-[20px] h-[90px] md:h-[112.29px] lg:h-[196px] rounded-[7px] md:rounded-[11.5px] flex px-[16px] lg:px-[50px] justify-between items-center lg:rounded-[20px]"
          >
            <div className="py-[13px] lg:pb-[40px] ">
              <h2 className="text-[10px] md:text-[13.75px] font-bold mb-3 lg:text-[24px] lg:mb-4">
                TRANSFER MONEY TO AREMXYPLUG USER.
              </h2>
              <h2 className="text-[7px] md:text-[11.46px] lg:text-[20px] lg:leading-[26px] mb-3">
                Transfer money from your wallets to any AremxyPlug user wallets for free, no any hidden fee, enjoy!!!
              </h2>
            </div>
            <div className="w-[100px] h-[66px] lg:w-[230px] lg:h-[150px]">
              <img
                src="./Images/transferImages/flying-coin-notes.png"
                alt=""
                className="h-full w-full"
              />
            </div>
          </div>
            <div className="flex text-[#7c7c7c] text-[10px] leading-[26px] items-center gap-[8px] md:text-[12px] lg:text-[20px]">
                    <p>Add a user details to save as recipient</p>
                    <img
                    className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                    src="./Images/Dashboardimages/arrowright.png"
                    alt="/"
                    />
            </div>
            <div className='flex md:justify-start justify-center gap-[7.042px] lg:gap-[12px]'>      
            <div className='relative'>
                <img src="/Images/transferImages/man-fold.png" className='h-[48px] w-[46.753px] rounded-[48px]
                lg:h-[100px] lg:w-[100px] 
                md:h-[68.801px]  md:w-[68.801px]
                md:rounded-[68.201px] lg:rounded-[100px]' alt="profilePic"/>
              </div>
                {/* Profile text */}
              <div className='flex flex-col justify-center gap-[3.52px] lg:gap-[12px]'>
                <p className='font-[500] text-[10px] leading-[15px] md:text-[9.389px] md:leading-[12.206px] 
                lg:text-[16px] lg:leading-[20.8px]'>
                  Habib Kamaldeen
                  </p>
                <p className='font-[500] text-[#7C7C7C] text-[10px] leading-[15px]
                md:text-[7.042px] md:leading-[9.154px]
                lg:text-[12px] lg:leading-[15.6px]'>
                  habib@aremxyplug.com
                  </p>
              </div>  
            </div>
            {/* =====================Country========================= */}
            <div className={styles.inputBox}>
            <p className="text-[10px] font-extrabold md:text-[14px] lg:text-[20px]">
                Select Country
            </p>
            <div
                onClick={() => setShowList(!showList)}
                className="border rounded-[5px] h-[25px] flex justify-between items-center p-1 lg:h-[45px] lg:rounded-[10px] lg:w-[50%] md:w-[50%] lg:border-[1px] lg:border-[#0003]"
            >
                {selected ? (
                <div className="flex gap-[7px] items-center">
                    <img
                    className="w-[13px] h-[13px] lg:w-[29px] lg:h-[29px]"
                    src={flag}
                    alt=""
                    />
                    <p className="text-[10px] font-extrabold lg:text-[14px]">
                    {" "}
                    {mainCountry}
                    </p>
                </div>
                ) : (
                <p></p>
                )}
                <img
                className=" h-[13.3px] w-[13.3px] lg:w-[24px] lg:h-[24px] "
                src="./Images/dashboardImages/arrow-down2.png"
                alt="dropdown"
                />
            </div>
            {errors.country && (
                <div className="text-[12px] text-red-500 italic lg:text-[14px]">
                {errors.country}
                </div>
            )}
            {showList && (
                <div
                className={`${
                    toggleSideBar
                    ? "lg:w-[31.5%] lg:top-[100.5%]"
                    : "lg:w-[38.5%] lg:top-[105.3%]"
                }  ${
                    styles.countryDropDown
                } rounded-br-[7px] rounded-bl-[7px] shadow-xl bg-[#fff] border w-[100%] lg:w-[50%] md:w-[50%] lg:rounded-br-[14px] lg:rounded-bl-[14px]`}
                >
                {" "}
                {countryList.map((country) => (
                    <div
                    className=" cursor-pointer border-b flex items-center p-2 gap-[5px] text-[9px]  md:text-[14px] lg:text-[16px]"
                    key={country.id}
                    onClick={() =>
                        handleCountryClick(
                        country.name,
                        country.flag,
                        country.id,
                        country.code
                        )
                    }
                    >
                    <img
                        className="w-[13px] h-[13px] lg:w-[29px] lg:h-[29px]"
                        src={country.flag}
                        alt="/"
                    />
                    {country.name}
                    </div>
                ))}
                </div>
            )}
            </div>
            <div className="flex flex-col gap-[15px] md:flex-row lg:gap-[30px]">
                {/* =====================Email or Username=================== */}

                <div className={` ${styles.inputBox}`}>
                <p className="text-[10px] font-extrabold md:text-[14px] lg:text-[20px]">
                    Email or Username
                </p>
                <div className="border rounded-[5px] h-[25px] flex justify-between items-center p-1 lg:h-[45px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]">
                    <input
                    name="emailUsername"
                    onChange={(e) => {
                        setEmailUserName(e.target.value);
                    }} 
                    value={emailUsername}
                    className="text-[10px] w-[100%] h-[100%] outline-none lg:text-[14px]"
                    type="text"
                    />
                    <img
                      className=" h-[13.3px] w-[13.3px] lg:w-[24px] lg:h-[24px] "
                      src="/Images/transferImages/frame.png"
                      alt="dropdown"
                    />
                </div>
                {errors.emailUsername && (
                    <div className="text-[12px] text-red-500 italic lg:text-[14px]">
                    {errors.emailUsername}
                    </div>
                )}
                </div>

                 {/* ======================Phone Number================== */}
                <div className={styles.inputBox}>
                <p className="text-[10px] font-extrabold md:text-[14px] lg:text-[20px]">
                    Phone Number
                </p>
                <div className="border rounded-[5px] h-[25px] flex justify-between items-center p-1 lg:h-[45px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]">
                    <input
                    onChange={(e) => {
                        setUserPhoneNumber(e.target.value);
                       }} 
                    name="userPhoneNumber"
                    value={userPhoneNumber}
                    className="text-[10px] w-[100%] h-[100%] outline-none lg:text-[14px]"
                    type="number"
                    />
                    <img
                      className=" h-[13.3px] w-[13.3px] lg:w-[24px] lg:h-[24px] "
                      src="/Images/transferImages/call.png"
                      alt="dropdown"
                    />
                </div>
                {errors.userPhoneNumber && (
                    <div className="text-[12px] text-red-500 italic lg:text-[14px]">
                    {errors.userPhoneNumber}
                    </div>
                )}
                </div>
            </div>
            {save && (
                <Modal>
                    <div
                        className={`${style.successfulFour} ${
                        toggleSideBar ? "md:w-[45%] lg:ml-[20%] lg:w-[40%]" : "lg:w-[40%]"
                        } md:w-[45%] w-[90%] overflow-auto`}
                    >
                    <div className="flex justify-between items-center mx-[3%] my-[2%] lg:my-[1%]">
                        <img
                            onClick={() => setSave(false)}
                            className=" w-[18px] h-[18px] md:w-[35px] md:h-[35px] lg:w-[35px] lg:h-[25px]"
                            src="/Images/login/arpLogo.png"
                            alt=""
                        />

                        <img
                            onClick={() => setSave(false)}
                            className=" w-[18px] h-[18px] md:w-[35px] md:h-[35px] lg:w-[29px] lg:h-[29px]"
                            src="/Images/transferImages/close-circle.png"
                            alt=""
                        />
                    </div>
                        <hr className="h-[6px] bg-[#04177f] border-none mt-[2%] md:mt-[2%] md:h-[10px]" />
                        <h2 className="text-[12px] my-[5%] text-center md:my-[3%] md:text-[15px] lg:my-[2%] lg:text-[16px]">
                        Please Confirm!!!
                        </h2>
                        <div className="bg-[#FFF0BA] mx-5 rounded-md h-[55px] my-5 flex justify-between items-center px-[4%] md:h-[75px] lg:h-[85px]">
                            <p className="text-[9px] text-center mx-auto w-[280px] md:text-[14px] md:w-[92%] lg:text-[14px] lg:w-[100%]">
                            Are you sure you want to add this user? Kindly re-confirm the identity, and be informed any funds transfer to any strange accounts cannot be reversed.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 lg:gap-4">
                            <div className="flex text-[10px] md:text-[12px] w-[90%] mx-auto justify-between  lg:text-[14px]">
                                <p className="text-[#0008]">Country</p>
                                <span>{mainCountry}</span>
                            </div>
                            <div className="flex text-[10px] md:text-[12px] w-[90%] mx-auto justify-between  lg:text-[14px]">
                                <p className="text-[#0008]">Customer Name</p>
                                <span>Habib Kamaldeen</span>
                            </div>
                            <div className="flex text-[10px] md:text-[12px] w-[90%] mx-auto justify-between  lg:text-[14px]">
                                <p className="text-[#0008]">Email or Username</p>
                                <span>{emailUsername}</span>
                            </div>
                            <div className="flex text-[10px] md:text-[12px] w-[90%] mx-auto justify-between  lg:text-[14px]">
                                <p className="text-[#0008]">Phone Number</p>
                                <span>{userPhoneNumber}</span>
                            </div>
                        </div>

                        <button
                            onClick={handleConfirm}
                            className={`bg-[#04177f] my-[5%] w-[88%] flex justify-center items-center mx-auto cursor-pointer text-[14px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[16px] lg:text-[14px] lg:w-[163px] lg:h-[38px] lg:mt-[8%]`}
                            >
                            Confirmed
                        </button>
                    </div>
                </Modal>
            )}
            {
            confirm && (
                <Modal>
                    <div
                        className={`${style.inputPin} ${
                        toggleSideBar ? "md:w-[45%] lg:w-[40%] lg:ml-[20%]" : "lg:w-[40%]"
                        } md:w-[55%] w-[90%]`}
                    >
                        <img
                        onClick={() => setConfirm(false)}
                        className="absolute cursor-pointer right-2 w-[18px] h-[18px] my-[1%] md:w-[35px] md:h-[35px] lg:w-[25px] lg:h-[25px]"
                        src="/Images/transferImages/close-circle.png"
                        alt=""
                        />
                        <hr className="h-[6px] bg-[#04177f] border-none mt-[8%] md:mt-[6%] md:h-[10px]" />
                        <h2 className="text-[12px] font-bold my-[5%] text-center md:my-[3%] md:text-[15px] lg:my-[2%] lg:text-[16px]">
                        Successful
                        </h2>
                        <img
                        className="w-[50px] h-[50px] mx-auto lg:w-[70px] lg:h-[70px]"
                        src="./Gif/checkMarkGif.gif"
                        alt="/"
                        />
                        <p className="text-[9px] text-[#2ED173] md:text-[16px] font-bold text-center my-[4%] lg:my-[%]">
                        New User account has been added successfully.
                        </p>
                        
                        <Link to="/to-aremxyplug">
                            <button
                                onClick={handleConfirm}
                                className={`bg-[#04177f] mt-[10%] w-[88%] flex justify-center items-center mx-auto cursor-pointer text-[14px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[16px] lg:text-[14px] lg:w-[163px] lg:h-[38px] lg:mt-[20%]`}
                                >
                                Continue
                            </button>
                        </Link>
                    </div>
                </Modal>
                )
            }
            <div className={style.containFlex3}>
                <button className={`${
                userPhoneNumber.length < 11 ? "bg-[#0008]" : "bg-[#04177f]"
                } w-full flex justify-center items-center mr-auto cursor-pointer text-[14px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[20px] lg:text-[16px] lg:h-[38px] lg:my-[4%]`} onClick={handleSave}>Save User
                </button>
            </div>
        </div>
        <div className={style.help}>
                <h2>You need help?</h2>
                <Link to={`/ContactUs`} className={style.btnContact}>Contact Us</Link>
        </div>
      </div>
    </DashBoardLayout>
  )
}

export default AremxyAddUser