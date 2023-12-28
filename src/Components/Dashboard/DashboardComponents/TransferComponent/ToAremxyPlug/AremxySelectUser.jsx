import React, { useContext, useState } from "react";
import { ContextProvider } from "../../../../Context";
import '../../../../../App.css';
import style from "../../../../AirTimePage/AirtimeVtu.module.css";
import styled from "../../../../AirTimePage/AirTime.module.css"
import styles from "../../TransferComponent/transfer.module.css";
import stylish from "../../component.module.css";
import { DashBoardLayout } from "../../../Layout/DashBoardLayout";
import ArrowRight from '../../../../EducationPins/imagesEducation/educationArrowRight.svg';
import SearchIcon from '../../../../Add&SelectRecipient/RecipientImages/search-status.svg';
import Delete from "../../../../AirTimePage/Images/Deleted.svg";
import { Modal } from "../../../../Screens/Modal/Modal";
import { Link } from 'react-router-dom';
import Joi from "joi";

export default function AremxySelectUser() {

    const {
        isDarkMode,
        showList,
        setShowList,
        selected,
        setSelected,
        toggleSideBar,
        mainCountry,
        setMainCountry,
        mainTransferErrors,
      } = useContext(ContextProvider);

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
    const [activeTab, setActiveTab] = useState('tab_1');
    const [showPopup, setShowPopup] = useState(false);
    const [activeImage, setActiveImage] = useState(null);
    const [deleted, setdeleted] = useState(false);
    const [edit, setEdit] = useState("");
    const [save, setSave] = useState(false);
    const [successDeleted, setSuccessDeleted] = useState(false);
    const [add, setAdd] = useState(false);
    const [errors, setErrors] = useState({});
    const [remove, setRemove] = useState(false);
    const [confirm, setConfirm] = useState(false);
    const [userPhoneNumber, setUserPhoneNumber] =  useState('');
    const [emailUsername, setEmailUserName] = useState('');
    const [miniCountry, setMiniCountry] = useState("");
    const [select, setSelect] = useState(false);
    const [showDrop, setShowDrop] = useState(false);
    const [currencyAvailable, setCurrencyAvailable] = useState(false);
    const active = styled.active;
    const inactive = styled.inactive;

    const handleTab1 =()=> {
        setActiveTab('tab_1')
    }

    const handleTab2 =()=> {
        setActiveTab('tab_2')
    }

    const handleCountryClick = (name, flag, id, code) => {
        setFlag(flag);
        setShowList(false);
        setMainCountry(name);
        setSelected(true);
        setCurrencyAvailable(id !== 1);
    };

    const refresh = () => window.location.reload(true);

    const handleCountryPress = (name, flag, id, code) => {
        setFlag(flag);
        setShowDrop(false);
        setMiniCountry(name);
        setSelect(true);
        setCurrencyAvailable(id !== 1);
    };

    const handleRecipient = (index) => {
        if (activeImage === index) {
          // If the same image is clicked again, close the pop-up
          setActiveImage(null);
          setShowPopup(false);
        } else {
          setActiveImage(index);
          setShowPopup(true);
        }
    };

    const handleConfirm = () => {
        setConfirm(true);
        setSave(false);
    };

    const handleDelete = () => {
        setdeleted(true);
    };
    
    const handleSuccessDelete = () => {
        setSuccessDeleted(true);
        setdeleted(false);
    };

    const handleAdd = () => {
        setAdd(true);
    }

    const handleRemove = () => {
        setRemove(true);
    }

    const handleEdit = () => {
        setEdit(true);
    };

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
          setEdit(false);
          setErrors({});
        }
    };

  return (

  <DashBoardLayout>
        <div className={style.AirtimeTops}>
        <div className={style.airtimeTop}>
            <div
                style={{
                background:
                    "#B4BEFA",
                }}
                className="w-full mb-[10px] lg:mb-[10px] h-[90px] md:h-[112.29px] lg:h-[196px] rounded-[7px] md:rounded-[11.5px] flex px-[16px] lg:px-[50px] justify-between items-center lg:rounded-[20px]"
            >
                <div className="py-[13px] lg:py-[40px] ">
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
            <div className='flex md:gap-[10px] gap-[3.27px]'>
                <h2 className='text-[#7C7C7C] font-[500] text-[9px] leading-[12px] lg:text-[20px] lg:leading-[30px]'>
                    Select the user account below
                </h2>
                <img src={ArrowRight} alt="" 
                className='lg:w-[24px] lg:h-[24px] h-[10px] w-[10px] self-center'/>
            </div>
            <div className='relative md:w-[50%] w-[60%]  '>
                <input type="text" className='focusSearch w-[100%] font-[500] text-[9px] leading-[12px]
                lg:text-[16px] lg:leading-[20.8px] placeholder-[9px] placeholder:leading-[12px]
                placeholder:lg:text-[16px] placeholder:lg:leading-[20.8px] lg:p-[10px] lg:pr-[20px] p-[5.868px] pr-[20px] md:border-[1px]
                border-[0.338px]
                border-[solid] border-[#7C7C7C] rounded-[4.052px] lg:rounded-[10px] focus:outline-none'
                placeholder='Search Email or Username' />
                <img 
                onClick={(e) => {
                document.querySelector('.focusSearch').focus();
                console.log(e);
                }}
                src={SearchIcon} alt="" 
                className='absolute md:top-[10px] md:right-[10px] top-[7.997px] right-[7.997px] 
                lg:w-[20px] lg:h-[20px] h-[12px] w-[12px] cursor-pointer'/>
            </div>
            <div className=''>
            <h2 className=' font-[600] text-left lg:mb-[20px] mb-[5.868px] text-[9px] leading-[12px] lg:text-[16px] lg:leading-[20.8px] '>
                Select Country
            </h2>
            <div className="flex flex-col gap-[15px] md:flex-row lg:gap-[30px]">
                {/* =====================Country========================= */}
                <div className={styles.inputBox}>
                <div
                    onClick={() => setShowDrop(!showDrop)}
                    className="border rounded-[5px] h-[25px] flex justify-between items-center p-1 lg:h-[45px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]"
                >
                    {select ? (
                    <div className="flex gap-[7px] items-center">
                        <img
                        className="w-[13px] h-[13px] lg:w-[29px] lg:h-[29px]"
                        src={flag}
                        alt=""
                        />
                        <p className="text-[10px] font-extrabold lg:text-[14px]">
                        {" "}
                        {miniCountry}
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
                {showDrop && (
                    <div
                    className={`${
                        toggleSideBar
                        ? "lg:w-[31.5%] lg:top-[100.5%]"
                        : "lg:w-[38.5%] lg:top-[105.3%]"
                    }  ${
                        styles.countryDropDown
                    } rounded-br-[7px] rounded-bl-[7px] shadow-xl bg-[#fff] border w-[100%] lg:w-full md:w-[50%] lg:rounded-br-[14px] lg:rounded-bl-[14px]`}
                    >
                    {" "}
                    {countryList.map((country) => (
                        <div
                        className=" cursor-pointer border-b flex items-center p-2 gap-[5px] text-[9px]  md:text-[14px] lg:text-[16px]"
                        key={country.id}
                        onClick={() =>
                            handleCountryPress(
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

            <div className="w-full">
            <Link to="/aremxy-add-user">
            <div className="w-full flex items-center justify-between border text-[10px]  rounded-[5px] h-[25px] p-1 md:text-[14px] lg:h-[45px] lg:text-[16px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]">
                <p>Add User</p>
                <img
                className="w-[13px] h-[13px] lg:w-[29px] lg:h-[29px]"
                src="./Images/otherBanksImages/add-square.png"
                alt=""
                />
            </div>
            </Link>
            </div>          
       
            </div>
            </div>    

            <ul className={styled.localInter}>
                <li className={activeTab === 'tab_1' ? active : inactive} onClick={handleTab1}>Users</li>
                <li className={activeTab === 'tab_2' ? active : inactive} onClick={handleTab2}>Favorites</li>
            </ul>
            <div className="">
                { activeTab === 'tab_1' &&
                    <div className={styled.containAir}>
                        {[0, 1, 2, 3].map((index) => (
                        <div
                            key={index}
                            className="w-[100%] mx-auto flex justify-between border py-2 px-2 rounded-[10px] md:rounded-[10px] lg:py-2 lg:px-5"
                        >
                            <div className="flex md:justify-start justify-center gap-[7.042px] lg:gap-[12px]">
                                    <div className='relative'>
                                        <img src="/Images/transferImages/man-fold.png" className='h-[38px] w-[36.753px] rounded-[38px]
                                        lg:h-[80px] lg:w-[80px] 
                                        md:h-[68.801px]  md:w-[68.801px]
                                        md:rounded-[68.201px] lg:rounded-[80px]' alt="profilePic"/>
                                </div>
                                <div className="flex flex-col my-auto gap-[1.67px] md:gap-[2.93px]">
                                    <p className='font-[500] text-[12px] leading-[15px] md:text-[9.389px] md:leading-[12.206px] 
                                    lg:text-[18px] lg:leading-[20.8px]'>
                                        Habib Kamaldeen
                                    </p>
                                    <h2 className="lg:text-[14px] font-medium lg:leading-6 md:text-[9px] text-[9px] text-[#7C7C7C]">
                                        habib@aremxyplug.com
                                    </h2>
                                    <p className="lg:text-[14px] lg:font-medium lg:leading-[21.07px] text-[#7C7C7C] text-[9px] font-semibold leading-3 md:text-[8px]">
                                        0700000000
                                    </p>
                                </div>
                            </div>
                            <div
                            onClick={() => {
                                handleRecipient(index);
                            }}
                            className="relative h-[16px] w-[16px] my-auto lg:w-[50px] lg:h-[25px] cursor-pointer"
                            >
                            <img
                                src="./Images/airtimeTopUp/Frame.png"
                                alt=""
                                className="h-full"
                            />
                            {showPopup && activeImage === index && (
                                <div
                                className="input border absolute bg-white top-[8px] right-[17px] lg:top-[20px] lg:right-[50px] w-[150px] h-[100px] z-50 flex flex-col justify-center items-start py-[5px]"
                                style={{ boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)" }}
                                >
                                <div
                                    onClick={handleAdd}
                                    className="text-[10px] text-[#7C7C7C] px-[5px] py-[5px] cursor-pointer"
                                >
                                    Add to Favorites
                                </div>
                                <hr className="w-full h-[5px]" />
                                <div
                                    onClick={handleEdit}
                                    className="text-[10px] text-[#7C7C7C] px-[5px] py-[5px] cursor-pointer"
                                >
                                    Edit User
                                </div>
                                <hr className="w-full h-[5px]" />
                                <div
                                    onClick={handleDelete}
                                    className="text-[#FA6B6B] text-[10px] px-[5px] py-[5px] cursor-pointer"
                                >
                                    Delete User
                                </div>
                                </div>
                            )}
                            </div>
                        </div>
                        ))}
                    </div>   
                }
                { activeTab === 'tab_2' &&
                    <div className={styled.containAir}>
                        {[0, 1, 2, 3].map((index) => (
                        <div
                            key={index}
                            className="w-[100%] mx-auto flex justify-between border py-2 px-2 rounded-[10px] md:rounded-[10px] lg:py-2 lg:px-5"
                        >
                            <div className="flex md:justify-start justify-center gap-[7.042px] lg:gap-[12px]">
                                    <div className='relative'>
                                        <img src="/Images/transferImages/man-fold.png" className='h-[38px] w-[36.753px] rounded-[38px]
                                        lg:h-[80px] lg:w-[80px] 
                                        md:h-[68.801px]  md:w-[68.801px]
                                        md:rounded-[68.201px] lg:rounded-[80px]' alt="profilePic"/>
                                </div>
                                <div className="flex flex-col my-auto gap-[1.67px] md:gap-[2.93px]">
                                  <p className='font-[500] text-[12px] leading-[15px] md:text-[9.389px] md:leading-[12.206px] 
                                  lg:text-[18px] lg:leading-[20.8px]'>
                                      Habib Kamaldeen
                                  </p>
                                  <h2 className="lg:text-[14px] font-medium lg:leading-6 md:text-[9px] text-[9px] text-[#7C7C7C]">
                                      habib@aremxyplug.com
                                  </h2>
                                  <p className="lg:text-[14px] lg:font-medium lg:leading-[21.07px] text-[#7C7C7C] text-[9px] font-semibold leading-3 md:text-[8px]">
                                      0700000000
                                  </p>
                                </div>
                            </div>
                            <div className="flex">
                                <div
                                onClick={() => {
                                    handleRecipient(index);
                                }}
                                className="relative h-[16px] w-[16px] my-auto lg:w-[20px] lg:h-[25px] cursor-pointer"
                                >
                                    <img
                                        src="./Images/airtimeTopUp/Frame.png"
                                        alt=""
                                        className="h-full"
                                    />
                                    {showPopup && activeImage === index && (
                                        <div
                                        className="input border absolute bg-white top-[8px] right-[17px] lg:top-[20px] lg:right-[20px] w-[150px] h-[100px] z-50 flex flex-col justify-center items-start py-[5px]"
                                        style={{ boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)" }}
                                        >
                                        <div
                                            onClick={handleRemove}
                                            className="text-[10px] text-[#7C7C7C] px-[5px] py-[5px] cursor-pointer"
                                        >
                                            Remove from Favorites
                                        </div>
                                        <hr className="w-full h-[5px]" />
                                        <div
                                            onClick={handleEdit}
                                            className="text-[10px] text-[#7C7C7C] px-[5px] py-[5px] cursor-pointer"
                                        >
                                            Edit User
                                        </div>
                                        <hr className="w-full h-[5px]" />
                                        <div
                                            onClick={handleDelete}
                                            className="text-[#FA6B6B] text-[10px] px-[5px] py-[5px] cursor-pointer"
                                        >
                                            Delete User
                                        </div>
                                        </div>
                                    )}
                                </div>
                                <div className="relative bottom-3 h-[16px] w-[16px] my-auto lg:w-[35px] lg:h-[35px]">
                                    <img
                                        src="./Images/transferImages/star.png"
                                        alt=""
                                        className="h-full w-full"
                                    />
                                </div>
                            </div>
                        </div>
                        ))}
                    </div> 
                }   
            </div>
            {add && (
              <Modal>
                <div
                  className={`confirm2 ${styles.inputPin} ${
                    toggleSideBar
                      ? "md:w-[45%] md:ml-[20%] lg:w-[40%] lg:ml-[20%]"
                      : "lg:w-[40%]"
                  } md:w-[55%] w-[90%] lg:mt-[10px] md:mb-[0%] md:mx-auto md:my-auto lg:mx-auto lg:my-auto`}
                >
                  <div className="flex justify-between items-center mx-[3%] my-[2%] lg:mt-[3%] ">
                    <img
                      className=" w-[18px] h-[15px] md:w-[35px] md:h-[32px] lg:w-[35px] lg:h-[22px] "
                      src="/Images/login/arpLogo.png"
                      alt=""
                    />

                    <img
                      onClick={() => {
                        setAdd(false);
                        window.location.reload();
                      }}
                      className="absolute cursor-pointer right-2 w-[18px] h-[18px] my-[1%] md:w-[35px] md:h-[25px] lg:w-[35px] lg:h-[35px] "
                      src="/Images/transferImages/close-circle.png"
                      alt=""
                    />
                  </div>

                  <hr className="h-[6px] bg-[#04177f] lg:mt-[2%] border-none mt-[2%] md:mt-[2%] md:h-[10px]" />
                  <p className="text-[10px] md:text-[16px] lg:text-[18px] font-extrabold text-center my-[3%] lg:my-[%]">
                    Successful
                  </p>
                  <div className="flex flex-col gap-[10px] justify-center items-center font-extrabold mb-[7%]">
                    <img
                      className="w-[50px] h-[50px] mx-auto mb-[2%] lg:w-[125px] lg:h-[125px]"
                      src="./Gif/checkMarkGif.gif"
                      alt="/"
                    />

                    <p className="text-[10px] text-[#2ED173] font-semibold md:text-[14px]">
                        User has been successfully added to Favorites.
                    </p>
                  </div>

                  <div
                    className={`w-full h-[38px] mt-[40px] px-[20px] items-center`}
                  >
                    <button
                      className={`bg-[#04177F] w-full flex justify-center items-center my-auto mx-auto cursor-pointer text-[14px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[20px] lg:text-[16px] lg:mx-auto lg:h-[38px] lg:my-[4%]`}
                      onClick={() => {
                        setAdd(false);
                        window.location.reload();
                      }}
                    >
                      Okay
                    </button>
                  </div>
                </div>
              </Modal>
            )}
            {remove && (
              <Modal>
                <div
                  className={`confirm2 ${styles.inputPin} ${
                    toggleSideBar
                      ? "md:w-[45%] md:ml-[20%] lg:w-[40%] lg:ml-[20%]"
                      : "lg:w-[40%]"
                  } md:w-[55%] w-[90%] lg:mt-[10px] md:mb-[0%] md:mx-auto md:my-auto lg:mx-auto lg:my-auto`}
                >
                  <div className="flex justify-between items-center mx-[3%] my-[2%] lg:mt-[3%] ">
                    <img
                      className=" w-[18px] h-[15px] md:w-[35px] md:h-[32px] lg:w-[35px] lg:h-[22px] "
                      src="/Images/login/arpLogo.png"
                      alt=""
                    />

                    <img
                      onClick={() => {
                        setRemove(false);
                        window.location.reload();
                      }}
                      className="absolute cursor-pointer right-2 w-[18px] h-[18px] my-[1%] md:w-[35px] md:h-[25px] lg:w-[35px] lg:h-[35px] "
                      src="/Images/transferImages/close-circle.png"
                      alt=""
                    />
                  </div>

                  <hr className="h-[6px] bg-[#04177f] lg:mt-[2%] border-none mt-[2%] md:mt-[2%] md:h-[10px]" />
                  <p className="text-[10px] md:text-[16px] lg:text-[18px] font-extrabold text-center my-[3%] lg:my-[%]">
                    Successful
                  </p>
                  <div className="flex flex-col gap-[10px] justify-center items-center font-extrabold mb-[7%]">
                    <img
                      className="w-[50px] h-[50px] mx-auto mb-[2%] lg:w-[125px] lg:h-[125px]"
                      src="./Gif/checkMarkGif.gif"
                      alt="/"
                    />

                    <p className="text-[10px] text-[#04177F] font-semibold md:text-[14px]">
                        User has been successfully removed from Favorites.
                    </p>
                  </div>

                  <div
                    className={`w-full h-[38px] mt-[40px] px-[20px] items-center`}
                  >
                    <button
                      className={`bg-[#04177F] w-full flex justify-center items-center my-auto mx-auto cursor-pointer text-[14px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[20px] lg:text-[16px] lg:mx-auto lg:h-[38px] lg:my-[4%]`}
                      onClick={() => {
                        setRemove(false);
                        window.location.reload();
                      }}
                    >
                      Okay
                    </button>
                  </div>
                </div>
              </Modal>
            )}
            {edit && (
              <Modal>
                <div
                  className={`confirm mx-auto my-auto ${
                    isDarkMode ? "border bg-[#000]" : "bg-[#fff]"
                  } ${
                    toggleSideBar
                      ? "md:w-[45%] md:ml-[20%] lg:w-[40%] lg:ml-[20%]"
                      : "lg:w-[40%]"
                  } lg:ml-[10%] lg:mr-[10%] grow pt-[10px] bottom-[20px] md:top-auto md:bottom-auto lg:top-[5%] pb-[20px] rounded-tr-[8px] rounded-br-[8px] rounded-bl-[8px] rounded-tl-[8px] relative md:rounded-[11.5px] md:mx-auto md:my-auto md:overflow-auto lg:overflow-hidden`}
                >
                  <div className="flex justify-between items-center mx-[3%] my-[2%] lg:my-[1%]">
                    <img
                      onClick={() => {
                        setEdit(false);
                        //   window.location.reload();
                      }}
                      className=" w-[18px] h-[15px] md:w-[25px] md:h-[20px] lg:w-[35px] lg:h-[22px]"
                      src="/Images/login/arpLogo.png"
                      alt=""
                    />

                    <img
                      onClick={() => {
                        setEdit(false);
                        // window.location.reload();
                        setMainCountry("");
                        setUserPhoneNumber("");
                        setEmailUserName("");
                      }}
                      className=" w-[18px] cursor-pointer h-[18px] md:w-[25px] md:h-[25px] lg:w-[29px] lg:h-[29px]"
                      src="/Images/transferImages/close-circle.png"
                      alt=""
                    />
                  </div>
                  <hr className="h-[6px] bg-[#04177f] border-none md:h-[10px]" />

                  <div className="text-center mt-[20px] font-semibold text-[10px] md:text-[14px]">
                    Edit User Details to Save as Recipient
                  </div>

                    <div className='flex px-[20px] mb-4 mt-10 lg:mt-6 md:justify-start justify-center gap-[7.042px] lg:gap-[12px]'>      
                        <div className='relative'>
                            <img src="/Images/transferImages/man-fold.png" className='h-[38px] w-[36.753px] rounded-[38px]
                            lg:h-[60px] lg:w-[60px] 
                            md:h-[48.801px]  md:w-[48.801px]
                            md:rounded-[48.201px] lg:rounded-[60px]' alt="profilePic"/>
                        </div>
                        {/* Profile text */}
                        <div className='flex flex-col justify-center gap-[3.52px] lg:gap-[3px]'>
                        <p className='font-[500] text-[10px] leading-[15px] md:text-[9.389px] md:leading-[12.206px] 
                        lg:text-[14px] lg:leading-[20.8px]'>
                            Habib Kamaldeen
                            </p>
                        <p className='font-[500] text-[#7C7C7C] text-[8px] leading-[15px]
                        md:text-[7.042px] md:leading-[9.154px]
                        lg:text-[12px] lg:leading-[15.6px]'>
                            habib@aremxyplug.com
                            </p>
                        </div>  
                    </div>

                  <div
                    className={`${style.mainGrid} px-[20px] mt-[50px] flex flex-col justify-between h-[40%] lg:mt-[20px]`}
                  >
                    {/* =====================Country========================= */}
                    <div className={styles.inputBox}>
                    <p className="text-[10px] font-extrabold md:text-[10px] lg:text-[16px]">
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
                    {mainTransferErrors.country && (
                        <div className="text-[12px] text-red-500 italic lg:text-[14px]">
                        {mainTransferErrors.country}
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
                    <p className="text-[10px] font-extrabold md:text-[10px] lg:text-[16px]">
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
                    <p className="text-[10px] font-extrabold md:text-[10px] lg:text-[16px]">
                        Phone Number
                    </p>
                    <div className="border rounded-[5px] h-[25px] flex justify-between items-center p-1 lg:h-[45px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]">
                        <input
                        onChange={(e) => {
                          const value = e.target.value;
                          const numericValue = value.replace(/\D/g, "").slice(0, 11);
                          setUserPhoneNumber(numericValue);
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

                  <div
                    className={`w-full h-[38px] mt-[40px] px-[20px] mx-auto lg:mt-[5px]`}
                  >
                    <button
                      className={`${
                        userPhoneNumber.length < 11
                          ? "bg-[#0008]"
                          : "bg-[#04177f]"
                      } my-[5%] w-[88%] flex justify-center items-center mx-auto cursor-pointer text-[14px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[16px] lg:text-[14px] lg:w-[163px] lg:h-[38px] lg:mt-[2%]`}
                      onClick={handleSave}
                    >
                      Save User
                    </button>
                  </div>
                 </div>
                </div>
              </Modal>
            )}
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
            {deleted && (
              <Modal>
                <div
                  className={`confirm2 ${style.inputPin} ${
                    toggleSideBar
                      ? "md:w-[45%] md:ml-[20%] lg:w-[40%] lg:ml-[20%]"
                      : "lg:w-[40%]"
                  } md:w-[55%] w-[90%] md:mb-[0%] md:mx-auto md:my-auto lg:mx-auto lg:my-auto`}
                >
                  <div className="flex justify-between items-center mx-[3%] my-[2%] lg:my-[2%]">
                    <img
                      className=" w-[18px] h-[15px] md:w-[25px] md:h-[22px] lg:w-[35px] lg:h-[22px]"
                      src="/Images/login/arpLogo.png"
                      alt=""
                    />

                    <img
                      onClick={() => {
                        setdeleted(false);
                      }}
                      className="absolute cursor-pointer right-2 w-[18px] h-[18px] my-[1%] md:w-[35px] md:h-[25px] lg:w-[45px] lg:h-[45px] "
                      src="/Images/transferImages/close-circle.png"
                      alt=""
                    />
                  </div>

                  <hr className="h-[6px] bg-[#04177f] lg:mt-[2%] border-none mt-[2%] md:mt-[2%] md:h-[10px]" />
                  <p className="text-[10px] md:text-[14px] lg:text-[18px] font-extrabold text-center my-[3%] lg:my-[%]">
                    Are you sure you want to delete this user permanently?
                  </p>
                  <div className="flex flex-col gap-[10px] justify-center items-center font-extrabold mt-[6%] mb-[2%]">
                    <img
                      className="w-[70px] h-[70px] mx-auto lg:w-[120px] lg:h-[120px]"
                      src={Delete}
                      alt="/"
                    />
                  </div>

                  <div
                    className={`w-full h-[38px] mt-[40px] px-[20px] flex md:mx-[10%]`}
                  >
                    <button
                      className={`bg-[#04177F] w-full flex justify-center items-center mr-auto cursor-pointer text-[14px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[20px] lg:text-[16px] lg:h-[38px] lg:my-[4%]`}
                      onClick={() => {
                        handleSuccessDelete();
                      }}
                    >
                      Yes
                    </button>
                    <button
                      className={`bg-[#fff] w-full flex justify-center items-center mr-auto cursor-pointer text-[14px] font-extrabold h-[40px] text-[#F95252] rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[20px] lg:text-[16px] lg:h-[38px] lg:my-[4%]`}
                      onClick={() => {
                        setdeleted(false);
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </Modal>
            )}
            {successDeleted && (
              <Modal>
                <div
                  className={`confirm2 ${style.inputPin} ${
                    toggleSideBar
                      ? "md:w-[45%] md:ml-[20%] lg:w-[40%] lg:ml-[20%]"
                      : "lg:w-[40%]"
                  } md:w-[55%] w-[90%] md:mb-[0%] md:mx-auto md:my-auto lg:mx-auto lg:my-auto`}
                >
                  <div className="flex justify-between items-center mx-[3%] my-[2%] lg:my-[2%]">
                    <img
                      onClick={() => {
                        setSuccessDeleted(false);
                        //   window.location.reload();
                      }}
                      className=" w-[18px] h-[15px] md:w-[35px] md:h-[32px] lg:w-[35px] lg:h-[22px]"
                      src="/Images/login/arpLogo.png"
                      alt=""
                    />

                    <img
                      onClick={() => {
                        setSuccessDeleted(false);
                        window.location.reload();
                      }}
                      className="absolute cursor-pointer right-2 w-[18px] h-[18px] my-[1%] md:w-[35px] md:h-[25px] lg:w-[45px] lg:h-[45px] "
                      src="/Images/transferImages/close-circle.png"
                      alt=""
                    />
                  </div>

                  <hr className="h-[6px] bg-[#04177f] lg:mt-[2%] border-none mt-[2%] md:mt-[2%] md:h-[10px]" />
                  <p className="text-[10px] md:text-[16px] lg:text-[18px] font-extrabold text-center my-[3%] lg:my-[%]">
                    Successful
                  </p>
                  <p className="text-[10px] text-[#04177f] md:text-[14px] px-[20px] lg:text-[18px] font-extrabold text-center my-[1%] lg:my-[%]">
                    User *****2345 has been deleted successfully. You can
                    add user again anytime!
                  </p>
                  <div className="flex flex-col gap-[10px] justify-center items-center font-extrabold mb-[5%]">
                    <img
                      className="w-[50px] h-[50px] mx-auto mb-[2%] lg:w-[120px] lg:h-[120px]"
                      src="./Gif/checkMarkGif.gif"
                      alt="/"
                    />
                  </div>

                  <div
                    className={`w-full h-[38px] mt-[40px] px-[20px] md:mx-[35%] md:mt-[10px]`}
                  >
                    <button
                      className={`bg-[#04177F] w-full flex justify-center items-center mr-auto cursor-pointer text-[14px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[20px] lg:text-[16px] lg:h-[38px] lg:my-[4%]`}
                      onClick={() => {
                        setSuccessDeleted(false);
                        window.location.reload();
                      }}
                    >
                      Done
                    </button>
                  </div>
                </div>
              </Modal>
            )}
            {currencyAvailable && (
              <Modal>
                <div
                  className={` mt-6 ${
                    isDarkMode ? "border bg-[#000]" : "bg-[#fff]"
                  } ${stylish.cryptoTopUp} flex flex-col justify-between `}
                >
                  <div className="text-[10px] text-center pt-[2%] pb-[2%] text-[#04177f] font-extrabold md:text-[16px] lg:text-[25px] lg:pt-[2%] lg:pb-[0%]">
                    This Currency is Currently Not Available.
                  </div>
                  <img
                    className="w-[140px] h-[100px] mx-auto lg:w-[217px] lg:h-[187px]"
                    src="/Images/addAccountImages/account-unavailable.png"
                    alt="/"
                  />
                  <div className="mx-[6%] flex flex-col gap-[5px] pb-[5%]">
                    <div className="text-[8px] font-extrabold float-right ml-[70%] md:ml-[70%] md:text-[12px] lg:text-[13px] lg:ml-[80%]">
                      Coming soon...
                    </div>
                    <div
                      onClick={refresh}
                      className={` ${
                        isDarkMode ? "border" : "bg-[#04177f] "
                      } cursor-pointer text-white text-[10px] h-[40px] rounded-[5px] flex items-center justify-center md:mx-auto md:w-[20%] md:h-[30px] md:text-[14px] lg:my-[3%] lg:h-[40px] lg:text-[20px] lg:w-[30%] lg:mx-auto`}
                    >
                      Okay
                    </div>
                  </div>
                </div>
              </Modal>
            )}
        </div>
        <div className={style.help}>
            <h2>You need help?</h2>
            <Link to={`/ContactUs`} className={style.btnContact}>Contact Us</Link>
        </div>
      </div>
  </DashBoardLayout>
       
  )
}
