import React, { useContext, useState } from 'react'
import styles from './AirtimeVtu.module.css'
import { DashBoardLayout } from '../Dashboard/Layout/DashBoardLayout';
import { Link } from 'react-router-dom';
import { ContextProvider } from '../Context';
import arrowDown from './Images/arrow-down.svg';
import Joi from "joi";
import call from './Images/call.svg';
import user from './Images/user.svg';
import { Modal } from "../Screens/Modal/Modal";

const AddRecipient = () => {

    const {networkName, setNetworkName} = useContext(ContextProvider);
    const {recipientName, setRecipientName} = useContext(ContextProvider);
    const {recipientNumber, setRecipientNumber} = useContext(ContextProvider);
    const {networkImage, setNetworkImage} = useContext(ContextProvider);

    const [errors, setErrors] = useState({});
    const [save, setSave] = useState(false);
    const [showList, setShowList] = useState(false);
    const [selected, setSelected] = useState(false);
    const [confirm, setConfirm] = useState(false);
    const [inputValue, setInputValue] = useState("");

    const networkList = [
        {
            id:1,
            name:'MTN',
            image: require('./Images/mtn.svg').default,
            discount: 3,
        },
        {
            id:2,
            name:'AIRTEL',
            image: require('./Images/airtel.png'),
            discount: 4,
        },
        {
            id:3,
            name:'GLO',
            image: require('./Images/glo.png'),
            discount: 3,
        },
        {
            id:4,
            name:'9MOBILE',
            image: require('./Images/9mobile.svg').default,
            discount: 3,
        }
    ];

    const Network =({name, image, onClick})=> {
        return (
          <li className={styles.netList} onClick={onClick}>
            <div className={styles.netImage}>
              <img src={image} alt="" className={styles.NoImage}/>
            </div> 
            <h2 className={styles.netName}>{name}</h2>
          </li>
        )
      }

    const handleSelectNetwork =(name, image, val)=> {
        setNetworkName(name);
        setNetworkImage(image);
        setShowList(false);
        setSelected(true);
    }

    const handleShowList =()=> {
        setShowList(!showList);
        setNetworkName('');
        setNetworkImage('');
    }

    const schema = Joi.object({
        recipientNumber: Joi.string()
          .pattern(new RegExp(/^\d{11,}/))
          .required()
          .messages({
            "string.pattern.base": "Phone number should be 11 digits ",
          })
      });

      const handleSave = (e) => {
        e.preventDefault();

        const { error } = schema.validate({
        recipientNumber,
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

    const handleChange = (e) => {
        const value = e.target.value;
    
        const numericValue = value.replace(/\D/g, "").slice(0, 11);
    
        setInputValue(numericValue);
    };

    const {
        toggleSideBar,
        // inputPin,
        // setInputPin,
        // toggleVisibility,
        // isVisible,
      } = useContext(ContextProvider);

      const handleConfirm =()=> {
        setSave(false);
        setConfirm(true);
      }

  return (
    <DashBoardLayout>
        <div className={styles.AirtimeTops1}>
            <div className={styles.airtimeTop}>
                <div className="w-full h-[90px] md:h-[112.29px] lg:h-[196px] rounded-[7px] md:rounded-[11.5px] bg-gradient-to-r from-[#73FF9A] to-[#6EDCFF] flex px-[16px] lg:px-[50px] justify-between items-center lg:rounded-[20px]">
                    <div className="w-[80%] pt-[19px] lg:pt-[20px]">
                        <h2 className="text-[10px] md:text-[13.75px] font-bold mb-2 lg:text-[24px] lg:mb-4">
                        AIRTIME VTU, FAST AND AUTOMATED.</h2>
                        <h2 className="text-[7px] md:text-[11.46px] lg:text-[20px] lg:leading-[26px] mb-3">
                        Top up your mobile sim using our automated airtime vending directly from network providers, enjoy discounts without any hassle or hidden fee.
                    </h2>
                    </div>
                    <div className="w-[91px] h-[66px] lg:w-[170px] lg:h-[150px]">
                        <img src="./Images/airtimeTopUp/young.png" className="h-full" alt="" />
                    </div>
                </div>
                <div className="flex text-[#7c7c7c] text-[10px] leading-[26px] items-center gap-[8px] md:text-[12px] lg:text-[20px]">
                    <p>Add Recipient Details </p>
                    <img
                    className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                    src="./Images/Dashboardimages/arrowright.png"
                    alt="/"
                    />
                </div>
                <div className={styles.mainGrid}>
                    <div className={styles.mainGridCol}>
                        <div>
                            <div className={styles.NetworkFlex}>
                                <h2 className={styles.head3}>Select Network</h2>
                                <div className={styles.input}>
                                    <div className={styles.output2}>
                                        { selected ? 
                                            <li onClick={handleShowList} className={styles.labelInput}>
                                                <div className={styles.network}>
                                                    { networkImage && <img src={networkImage} alt=""/>}
                                                </div> 
                                                <h2 className={styles.head2}>{networkName}</h2>
                                            </li>
                                        : 
                                            <h2 onClick={handleShowList} className={styles.head6}>Select Network</h2>
                                        }
                                        <button className={styles.btnDrop} onClick={handleShowList}>
                                            <img src={arrowDown} alt=""/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            { showList && 
                                <div className={styles.colDown}>
                                    {networkList.map((item) => (
                                        <Network key={item.id} image={item.image} name={item.name} onClick={()=>handleSelectNetwork(item.name, item.image, item.discount)}/>
                                    ))}
                                </div> 
                            }
                        </div>
                        <div>
                            <h2 className={styles.head3}>Phone Number <span className={styles.span3}>(Select Recipient)</span></h2>
                            <div className={styles.input}>
                                <div className={styles.output}>
                                    <input type='number' className={styles.phone} required placeholder='Add recipient phone number' onChange={(event) => {
                                    handleChange(event);
                                    setRecipientNumber(event.target.value);
                                    }} value={inputValue}/>
                                    <div className={styles.call}>
                                        <img src={call} alt=""/>
                                    </div>
                                </div>
                            </div>
                            {errors.recipientNumber && (
                                <div className="text-[12px] text-red-500 italic lg:text-[14px]">
                                {errors.recipientNumber}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className={styles.mainGridCol}>
                        <div>
                            <h2 className={styles.head3}>Recipient Name <span className={styles.span4}>(optional)</span></h2>
                            <div className={styles.input}>
                                <div className={styles.output}>
                                    <input type='text' className={styles.phone} required placeholder='Add recipient name' onChange={(event)=>setRecipientName(event.target.value)} value={recipientName}/>
                                    <div className={styles.call}>
                                        <img src={user} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {save && (
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
                )}
                {
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
                }
                <div className={styles.containFlex3}>
                    <button className={`${
                    recipientNumber.length < 11 ? "bg-[#0008]" : "bg-[#04177f]"
                    } w-full flex justify-center items-center mr-auto cursor-pointer text-[14px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[20px] lg:text-[16px] lg:h-[38px] lg:my-[4%]`} onClick={handleSave}>Save
                    </button>
                </div>
            </div>
            <div className={styles.help}>
                <h2>You need help?</h2>
                <Link to={`/ContactUs`} className={styles.btnContact}>Contact Us</Link>
            </div>
        </div>
    </DashBoardLayout>
  )
}

export default AddRecipient
