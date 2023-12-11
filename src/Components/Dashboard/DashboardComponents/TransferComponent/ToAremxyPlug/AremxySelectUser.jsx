import React, { useContext, useState } from "react";
import { ContextProvider } from "../../../../Context";
import '../../../../../App.css';
import style from "../../../../AirTimePage/AirtimeVtu.module.css";
import styles from "../../TransferComponent/transfer.module.css";
import { DashBoardLayout } from "../../../Layout/DashBoardLayout";
import ArrowRight from '../../../../EducationPins/imagesEducation/educationArrowRight.svg';
import SearchIcon from '../../../../Add&SelectRecipient/RecipientImages/search-status.svg';
import NoRecordImage from '../../../../Add&SelectRecipient/RecipientImages/NoRecordImage.svg';
import { Link } from 'react-router-dom';

export default function AremxySelectUser() {

    const {
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

    const handleCountryClick = (name, flag, id, code) => {
        setFlag(flag);
        setShowList(false);
        setMainCountry(name);
        setSelected(true);
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
                    onClick={() => setShowList(!showList)}
                    className="border rounded-[5px] h-[25px] flex justify-between items-center p-1 lg:h-[45px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]"
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
                    } rounded-br-[7px] rounded-bl-[7px] shadow-xl bg-[#fff] border w-[100%] lg:w-full lg:rounded-br-[14px] lg:rounded-bl-[14px]`}
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

            <div className='Tabs flex flex-col lg:gap-[30px] gap-[8.28px] my-[30px] md:mt-[60px] md:mb-[80px]'>
                <div className='flex w-[100%] lg:gap-[25px] border-b-[0.33pxpx] md:border-b-[3px] border-[#ECECEC]'>
                    <h2 className='w-[25%] font-[500] text-center text-[9px] leading-[12px] lg:text-[20px] lg:leading-[30px] py-[5.671px] lg:py-[10px]
                    bg-[#E2F3FF] md:border-b-[4px] border-b-[1.987px] border-[#04177F] lg:rounded-[6px] rounded-[1.325px]'>
                    Users
                    </h2>
                    <h2 className='w-[25%] font-[500] text-center text-[9px] leading-[12px] lg:text-[20px] 
                    lg:leading-[30px] lg:py-[10px] py-[5.671px]'>
                    Favorites
                    </h2>
                </div>
                <div className='flex justify-center '>
                    <img src={NoRecordImage} alt="" 
                    className='lg:w-[517px] lg:h-[456px] '/>
                </div>
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
