import React from 'react'
import { ContextProvider } from '../../../../Context';
import { useContext } from "react";
import styles from './../DataTopUp.css'
import { DashBoardLayout } from '../../../Layout/DashBoardLayout';
import { Link } from 'react-router-dom';
import DataBundle from "../DataBundles/DataBundles-Images/DataBundles.svg"
import airtimestyles from "../../../../AirTimePage/AirtimeVtu.module.css";


const DataBundleSelectRecipient = () => {

    const { isDarkMode } = useContext(ContextProvider);

    // const {networkName, setNetworkName} = useContext(ContextProvider);
    // const {recipientName, setRecipientName} = useContext(ContextProvider);
    // const {recipientNumber, setRecipientNumber} = useContext(ContextProvider);
    // const {networkImage, setNetworkImage} = useContext(ContextProvider);

  return (
    <DashBoardLayout>
        <div className="AirtimeTops1">
            <div className={styles.airtimeTop}>
            <div
        className={`bg-[#FFF] relative lg:ml-[20px] 2xl:ml-0 ${
          isDarkMode
            ? "bg-[#000] text-[#fff] border-[#fff]"
            : "bg-[#ffffff] text-[#000] "
        } flex flex-col justify-between`}
      >
        <section
          className={`md:px-[0px] ${
            isDarkMode
              ? "bg-[#000] text-[#fff] border-[#fff]"
              : "bg-[#ffffff] text-[#000] "
          } `}
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
                Top up your mobile sim with our automated data bundles directly
                from network providers, enjoy discounts without any hassle or
                hidden fee.
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
                <div className="flex text-[#7c7c7c] mt-[5%] text-[10px] leading-[26px] items-center gap-[8px] md:text-[12px] lg:text-[20px]">
                    <p>Add Recipient Details </p>
                    <img
                    className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                    src="./Images/Dashboardimages/arrowright.png"
                    alt="/"
                    />
                </div>
                <div className={`${styles.mainGrid} mt-[5%]`}>
                    <div className={styles.mainGridCol}>
                        <div className="border rounded-[5px] h-[25px] flex justify-between items-center py-1 px-3 lg:h-[45px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]">
                            <input
                            className="text-[10px] w-[100%] h-[100%] outline-none lg:text-[14px]"
                            type="text" placeholder='Name Or Phone Number'
                            />
                            <img
                            className=" h-[13.3px] w-[13.3px] lg:w-[24px] lg:h-[24px] "
                            src="./Images/dashboardImages/search-status.png"
                            alt="dropdown"
                            />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-5 mt-[5%]'>
                    <div className='w-[100%] mx-auto flex justify-between border py-2 px-2 rounded-[7px] md:rounded-[7px] lg:py-2 lg:px-5'>
                        <div className='flex flex-col my-auto gap-[1.67px] md:gap-[2.93px]'>
                            <h2 className='lg:text-[16px] font-medium lg:leading-6 md:text-[9px] text-[9px]'>
                                MTN(08160955592)</h2>
                            <p className='lg:text-[14.05px] lg:font-medium lg:leading-[21.07px] text-[#7C7C7C] text-[9px] font-semibold leading-3 md:text-[8px]'>
                                Aremxyplug</p>
                        </div>
                        <div className='h-[16px] w-[16px] my-auto lg:w-[50px] lg:h-[25px]'>
                            <img src='./Images/airtimeTopUp/Frame.png' alt="" className='h-full'/>
                        </div>
                    </div>
                    <div className='w-[100%] mx-auto flex justify-between border py-2 px-2 rounded-[7px] md:rounded-[7px] lg:py-2 lg:px-5'>
                        <div className='flex flex-col my-auto gap-[1.67px] md:gap-[2.93px]'>
                            <h2 className='lg:text-[16px] font-medium lg:leading-6 md:text-[9px] text-[9px]'>
                                MTN(08160955592)</h2>
                            <p className='lg:text-[14.05px] lg:font-medium lg:leading-[21.07px] text-[#7C7C7C] text-[9px] font-semibold leading-3 md:text-[8px]'>
                                Aremxyplug</p>
                        </div>
                        <div className='h-[16px] w-[16px] my-auto lg:w-[50px] lg:h-[25px]'>
                            <img src='./Images/airtimeTopUp/Frame.png' alt="" className='h-full'/>
                        </div>
                    </div>
                    <div className='w-[100%] mx-auto flex justify-between border py-2 px-2 rounded-[7px] md:rounded-[7px] lg:py-2 lg:px-5'>
                        <div className='flex flex-col my-auto gap-[1.67px] md:gap-[2.93px]'>
                            <h2 className='lg:text-[16px] font-medium lg:leading-6 md:text-[9px] text-[9px]'>
                                MTN(08160955592)</h2>
                            <p className='lg:text-[14.05px] lg:font-medium lg:leading-[21.07px] text-[#7C7C7C] text-[9px] font-semibold leading-3 md:text-[8px]'>
                                Aremxyplug</p>
                        </div>
                        <div className='h-[16px] w-[16px] my-auto lg:w-[50px] lg:h-[25px]'>
                            <img src='./Images/airtimeTopUp/Frame.png' alt="" className='h-full'/>
                        </div>
                    </div>
                    <div className='w-[100%] mx-auto flex justify-between border py-2 px-2 rounded-[7px] md:rounded-[7px] lg:py-2 lg:px-5'>
                        <div className='flex flex-col my-auto gap-[1.67px] md:gap-[2.93px]'>
                            <h2 className='lg:text-[16px] font-medium lg:leading-6 md:text-[9px] text-[9px]'>
                                MTN(08160955592)</h2>
                            <p className='lg:text-[14.05px] lg:font-medium lg:leading-[21.07px] text-[#7C7C7C] text-[9px] font-semibold leading-3 md:text-[8px]'>
                                Aremxyplug</p>
                        </div>
                        <div className='h-[16px] w-[16px] my-auto lg:w-[50px] lg:h-[25px]'>
                            <img src='./Images/airtimeTopUp/Frame.png' alt="" className='h-full'/>
                        </div>
                    </div>
                </div>
                {/* {save && (
                    <Modal>
                        <div
                            className={`${styles.successfulThree} ${
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
                            Please Confirm
                            </h2>
                            <div className="bg-[#FFF0BA] mx-5 rounded-md h-[55px] my-5 flex justify-between items-center px-[4%] md:h-[75px] lg:h-[85px]">
                                <p className="text-[9px] text-center mx-auto w-[280px] md:text-[14px] md:w-[92%] lg:text-[14px] lg:w-[100%]">
                                Are you sure you want to add this details to your recipients? Please re-confirm the identity and be informed any successful transactions to a strange details can not be reversed.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 lg:gap-4">
                            <div className="flex text-[10px] md:text-[12px] w-[90%] mx-auto justify-between  lg:text-[14px]">
                                    <p className="text-[#0008]">Network</p>
                                    <span className='flex gap-1'>
                                        <div className="rounded-full w-[12.02px] h-[12.02px] flex items-center justify-center text-[10px] overflow-hidden md:w-[12.02px] lg:w-[25px] md:h-[12.02px] lg:h-[25px]">
                                        <img src={networkImage} alt="" className='w-full h-full object-cover'/>
                                        </div> 
                                        <h2 className="text-[10px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">{networkName}</h2>
                                    </span>
                                </div>
                                <div className="flex text-[10px] md:text-[12px] w-[90%] mx-auto justify-between  lg:text-[14px]">
                                    <p className="text-[#0008]">Phone Number</p>
                                    <span>{recipientNumber}</span>
                                </div>
                                <div className="flex text-[10px] md:text-[12px] w-[90%] mx-auto justify-between  lg:text-[14px]">
                                    <p className="text-[#0008]">Recipient Name</p>
                                    <span>{recipientName}</span>
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
                )} */}
                {/* {
                confirm && (
                    <Modal>
                        <div
                            className={`${styles.inputPin} ${
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
                            New recipient contact has been added successfully.
                            </p>
                           
                            <Link to="/airtime-vtu">
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
                } */}
                {/* <div className={styles.containFlex3}>
                    <button className={`${
                    recipientNumber.length < 11 ? "bg-[#0008]" : "bg-[#04177f]"
                    } w-full flex justify-center items-center mr-auto cursor-pointer text-[14px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[20px] lg:text-[16px] lg:h-[38px] lg:my-[4%]`} onClick={handleSave}>Save
                    </button>
                </div> */}
            </div>
            <div className={airtimestyles.help}>
          <h2>You need help?</h2>
          <Link to={`/ContactUs`} className={airtimestyles.btnContact}>
            Contact Us
          </Link>
        </div>
        </div>
    </DashBoardLayout>
  )
}

export default DataBundleSelectRecipient;
