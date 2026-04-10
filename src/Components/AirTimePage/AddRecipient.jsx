import { useContext, useState } from 'react'
import styles from './AirtimeVtu.module.css'
import { DashBoardLayout } from '../Dashboard/Layout/DashBoardLayout';
import { Link } from 'react-router-dom';
import { ContextProvider } from '../Context';
import arrowDown from './Images/arrow-down.svg';
import Joi from "joi";
import call from './Images/call.svg';
import user from './Images/user.svg';
import { Modal } from "../Screens/Modal/Modal";
//import SelectRecipient from './SelectRecipient';
import { PostFunction } from '../ApiCollection.jsx/ApiBuck';
import { BalanceLoading } from '../Loader/Loader';


const AddRecipient = () => {

    const { networkName, setNetworkName,  setSelectRecipientDisplay  } = useContext(ContextProvider);
    const { recipientName, setRecipientName } = useContext(ContextProvider);
    const { recipientNumber, setRecipientNumber } = useContext(ContextProvider);
    const { networkImage, setNetworkImage, setSessionModal, sessionModal, networkIssue, setNetworkIssue } = useContext(ContextProvider);

    

    const [errors, setErrors] = useState({});
    const [save, setSave] = useState(false);
    const [showList, setShowList] = useState(false);
    const [selected, setSelected] = useState(false);
    const [confirm, setConfirm] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [saveRecipient, setSaveRecipient] = useState(false);
    
  const { isDarkMode } = useContext(ContextProvider);

    const networkList = [
        {
            id: 1,
            name: 'MTN',
            image: require('./Images/mtn.svg').default,
            discount: 3,
        },
        {
            id: 2,
            name: 'AIRTEL',
            image: require('./Images/airtel.png'),
            discount: 4,
        },
        {
            id: 3,
            name: 'GLO',
            image: require('./Images/glo.png'),
            discount: 3,
        },
        {
            id: 4,
            name: '9MOBILE',
            image: require('./Images/9mobile.svg').default,
            discount: 3,
        }
    ];

    const Network = ({ name, image, onClick }) => {
        return (
            <div className={`pb-[20px] pt-[20px] md:pb-[14px] 
                                md:pt-[14px] font-weight-bold text-[14px] leading-[18.4px] 
                                md:py-[15px]
                                 py-[8px] pl-[10px] font-[500]  
         md:text-[13.227px] md:leading-[17.195px] 
         shadow-[0px_3.30667px_8.26667px_0px_rgba(0,0,0,0.25)] 
         lg:text-[16px] lg:leading-[20.8px] cursor-pointer ${
           isDarkMode
             ? "bg-black text-white border border-white"
             : "hover:bg-[#EDEAEA] bg-white text-[#7C7C7C]"
         }`}
             onClick={onClick}>
                <div className= "flex gap-[5px] lg:gap-[10px] items-center">
                    <img src={image} alt=""
                     className="md:h-[29.27px] h-[14.27px]" />
               
                <h2 >{name}</h2>
                </div>
            </div>
        )
    }

    const handleSelectNetwork = (name, image, val) => {
        setNetworkName(name);
        setNetworkImage(image);
        setShowList(false);
        setSelected(true);
    }

    const handleShowList = () => {
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
        } else if (validateNigerianNumberByNetwork(recipientNumber) !== networkName) {
            setErrors({
                recipientNumber: `Invalid ${networkName} number. Please enter a valid ${networkName} number.`,
            });
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
  const [loadingRecipient, setLoadingRecipient] = useState(false)
    const handleConfirm = async () => {
    setErrors({});

const setFetchedResponse = ()=> {
    return;
}
        const body = {
            name  : recipientName,
            network : networkName,
            phone : recipientNumber
        }
       await PostFunction("airtime/recipient",
       setLoadingRecipient, 
        body, ()=> {
        alert("Saved Recipients Successfully.");
        setSave(false);
        setConfirm(true);
        setSelected("");
        setRecipientNumber("");
        setRecipientName("");

       }, async(ErrorType)=> {
          if(ErrorType === "unauthorised"){
          if (!sessionModal) return setSessionModal(true);
          if(sessionModal) return;
          }else if(ErrorType === "Network error" || ErrorType === "User error"){
           if(networkIssue) return;
           if(!networkIssue) return setNetworkIssue(true)
          }else if(ErrorType === "Server error"){
          alert("Unable to save recipients try again later.");
          setSave(false)
          }else {
            alert("Unable to save recipients try again later.")
          }
       }, setFetchedResponse, setNetworkIssue)
    };


    return (
        <DashBoardLayout>
            <div className={styles.AirtimeTops1}>
                <div className={styles.airtimeTop}>
                    <div 
                    className="min-h-[90px] py-[15px] lg:h-[196px] md:h-[112.29px] rounded-[6.6px] 
                    md:rounded-[11.46px] lg:rounded-[20px] mx-auto  flex gap-6 justify-between
                 px-[16.51px] md:px-[28.65px] lg:px-[50px] bg-gradient-to-r from-[#73FF9A] to-[#6EDCFF] ">
                        <div className="w-[80%] flex flex-col justify-center
                         pt-[19px] lg:pt-[20px] h-[100%] gap-[10px] lg:gap-[20px]">
                            <h2  className="text-[11px] leading-[14px]  lg:leading-[30px]
                   lg:text-[24px] md:text-[13.75px] font-semibold">
                                AIRTIME VTU, FAST AND AUTOMATED.</h2>
                            <h2 className="text-[10px] leading-[13px] lg:text-[20px]
                   lg:leading-[25px] md:text-[11.46px]">
                                Top up your mobile sim using our automated airtime vending directly from network providers, enjoy discounts without any hassle or hidden fee.
                            </h2>
                        </div>
                        <div className="flex w-[23%] h-[97%] pt-2 shrink-0">
                            <img src="./Images/airtimeTopUp/young.png" 
                            className="h-full" alt="" />
                        </div>
                    </div>
                    <div className={`flex ${isDarkMode ? "text-white" : "text-black"} text-[15px] leading-[26px] 
                    items-center gap-[8px] md:text-[12px] lg:text-[20px]`}>
                        <p>Add Recipient Details </p>
                        <img
                            className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                            src="./Images/dashboardImages/arrowright.png"
                            alt="/"
                        />
                    </div>
                    <div className="flex flex-col gap-[10px]">
                       <div className="flex flex-col  md:flex-row gap-[25px]
                 md:gap-[12px] lg:gap-[22px] ">
                   <div className="relative flex flex-col gap-[10px]
                   lg:gap-[15px] md:gap-15 w-full md:w-1/2">
                                    <h2 className={`lg:text-[18px]  ${isDarkMode ? "text-white" : "text-black"}  lg:leading-[24px]  text-[15px] md:text-[12px] md:font-[600] font-[400] leading-[12px]   ${isDarkMode 
                                              ? "text-white" : "text-[#7C7C7C]"
                                          }`}>Select Network</h2>
 <div className={`mt-2  md:mt-0 rounded-[10px] 
             md:rounded-0  md:p-0 text-base
         sm:p-3  flex gap-2 py-[8.803px]
         pr-[13px] pl-[10.876px] font-[400] 
         leading-[10.4px] md:text-[11px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] 
    md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]
      items-center cursor-pointer outline-0 border-[0.24px] 
      lg:border-[0.4px] w-full h-[45.927px] md:h-[35px] lg:h-[50px]
       border-[#9C9C9C] px-[11px] md:px-[6px] lg:px-[10px] text-[#7C7C7C] self-center  ${
      isDarkMode
        ? "bg-black text-white border border-white"
        : "hover:bg-[#EDEAEA]"
    }`} >
                                  
                          <div onClick={handleShowList} 
                          className={`flex justify-left  w-[100%] items-center`}>
                                   {networkName ? (
             <div onClick={handleShowList} 
             className={` items-center h-[100%] ${styles.labelInput}`}  >
             <div className={styles.network}>
                                                  {networkImage && <img className=""
                                              src={networkImage} alt="" />}
                                                                              </div>
                                       <h2 className={`text-left text-[13.2px]  font-[400] 
                                   leading-[17.4px] md:text-[11px] md:leading-[12.206px]
                                      lg:text-[16px] lg:leading-[20.8px] 
                                   ${isDarkMode ? "text-white" : "text-[#7E7E7E]" }`}>
                                                  {networkName}
                                                  </h2>
                                                                          </div>
                                                                      ) : (
                                                    
                           <div className="flex justify-between w-[100%]">
                              <h2 className="text-[#7E7E7E] text-[14px] lg:text-[17px]
                              md:text-[13px] md:font-[600] font-[400]
                                                              ">Select Network</h2>
                                                                <img className="decdrop  self-center
                                                                 align-middle md:h-[14.038px] md:w-[14.038px] 
                                          lg:h-[24px] lg:w-[24px] w-[14px] h-[16px]"
                                           src={arrowDown} alt="" />
                                           </div>
                                                  )}
                                                                   
                               </div>
                                        </div>
                                   
                            
                                
                                {showList &&
                                    // <div className={styles.colDown}>
                                    <div      className={`absolute lg:top-[90px] md:top-[60px] left-0 top-[74px] 
                          z-[2]  flex flex-col w-[100%] lg:h-225px md:h-[210px]  
          ${
            isDarkMode
              ? "bg-black text-white border border-white"
              : "hover:bg-[#EDEAEA]"
          }`}>
                                        {networkList.map((item) => (
                                            <div className='text-[#7C7C7C]'>
                                            <Network key={item.id} image={item.image} name={item.name} onClick={() => handleSelectNetwork(item.name, item.image, item.discount)} />
                                        </div>
                                        ))}
                                    </div>
                                }
                           
                          
                        </div>
                             <div className="relative flex flex-col gap-[10px]
                   md:gap-[15px]  w-full md:w-1/2"> 
                                <h2 className={`text-[15px] md:font-[600] font-[400] md:text-[12px] lg:text-[18px] ${
                                            isDarkMode 
                                              ? "text-white" : "text-black"
                                          }`}>Phone Number <Link to ="/airtime-vtu" onClick = {()=> {
                                           setSelectRecipientDisplay(true);
                                          }}
                                          className={`
                                          ${styles.span3} !text-[15px] md:!text-base`}>
                                            (Select Recipient)
                                            </Link></h2>
                          
                                    <div className={`relative h-full`}>
                    <input type='number'  className={`mt-2  md:mt-0 rounded-[10px] 
             md:rounded-0  md:p-0 text-base
         sm:p-3  flex gap-2 py-[8.803px]
         pr-[13px] pl-[10.876px] font-[400] 
         leading-[10.4px] md:text-[11px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] 
    md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]
      items-center cursor-pointer outline-0 border-[0.24px] 
      lg:border-[0.4px] w-full h-[45.927px] md:h-[35px] lg:h-[50px]
       border-[#9C9C9C] px-[11px] md:px-[6px] lg:px-[10px] text-[#7C7C7C] self-center  ${
      isDarkMode
        ? "bg-black text-white border border-white"
        : "hover:bg-[#EDEAEA]"
    }`} 
               required placeholder='Add recipient phone number' onChange={(event) => {
                                            handleChange(event);
                                            setRecipientNumber(event.target.value);
                                        }} value={inputValue} />
                                        
                                            <img className="absolute top-[40%] right-5" src={call} alt="" />
                                      
                              
                                </div>
                                
                                {errors.recipientNumber && (
                                    <div className={`
                                        ${
                                            isDarkMode 
                                                ? "!bg-black !text-[#7c7c7c]" 
                                                : ""
                                        }!text-[14px] text-red-500 italic lg:text-[14px]
                                        
                                        `}>
                                        {errors.recipientNumber}
                                    </div>
                                )}
                            </div>
                          </div>
                       
                              <div className='flex flex-col lg:gap-[14px] gap-[7px] md:w-1/2 w-full'>
                            
                                <h2 className={`text-[15px] md:font-[600] font-[400] md:text-[12px] lg:text-[18px] ${
                                            isDarkMode 
                                              ? "text-white" : "text-black"
                                          }
                                          `}>Recipient Name <span className={`${styles.span4} !text-[15px] md:!text-base`}>(optional)</span></h2>
                               
            <div className = "relative">                   
     <input type='text'   className={`mt-2  md:mt-0 rounded-[10px] 
             md:rounded-0  md:p-0 text-base
         sm:p-3  flex gap-2 py-[8.803px]
         pr-[13px] pl-[10.876px] font-[400] 
         leading-[10.4px] md:text-[11px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] 
    md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]
      items-center cursor-pointer outline-0 border-[0.24px] 
      lg:border-[0.4px] w-full h-[45.927px] md:h-[35px] lg:h-[50px]
       border-[#9C9C9C] px-[11px] md:px-[6px] lg:px-[10px] text-[#7C7C7C] self-center  ${
      isDarkMode
        ? "bg-black text-white border border-white"
        : "hover:bg-[#EDEAEA]"
    }`}  required placeholder='Add recipient name' onChange={(event) => setRecipientName(event.target.value)} value={recipientName} />
 <img className="absolute top-[40%] right-5" src={user} alt="" />
 </div>
     </div>
         </div>
   
                 
                    {save && (
                        <Modal>
                            <div className={`${styles.successfulThree} ${toggleSideBar ? "md:w-[45%] lg:ml-[20%] lg:w-[40%]" : "lg:w-[40%]"
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
                                                <img src={networkImage} alt="" className='w-full h-full object-cover' />
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
                                    onClick={() => { setSaveRecipient(!saveRecipient);
                                         if (!saveRecipient) handleConfirm(); }}
                                    className={`bg-[#04177f] my-[5%] w-[88%] flex justify-center items-center mx-auto cursor-pointer text-[14px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[16px] lg:text-[14px] lg:w-[163px] lg:h-[38px] lg:mt-[8%]`}
                                >
                                  {loadingRecipient === false ? "Confirmed" : <BalanceLoading/>}  
                                </button>
                               
                            </div>
                        </Modal>
                    )}
                    {
                        confirm && (
                            <Modal>
                                <div
                                    className={`${styles.inputPin} ${toggleSideBar ? "md:w-[45%] lg:w-[40%] lg:ml-[20%]" : "lg:w-[40%]"
                                        } md:w-[55%] w-[90%]`}
                                >
                                    <img
                                        onClick={() => {
                                            setConfirm(false);
                                            setSelected("");
                                            setRecipientName("");
                                            setRecipientNumber("");
                                        }}
                                        className="absolute cursor-pointer right-2 w-[18px] h-[18px] my-[1%] md:w-[35px] md:h-[35px] lg:w-[25px] lg:h-[25px]"
                                        src="/Images/transferImages/close-circle.png"
                                        alt=""
                                    />
                                    <hr className="h-[6px] bg-[#04177f] border-none mt-[8%] md:mt-[9%] md:h-[10px]" />
                                    <h2 className="text-[12px] font-bold my-[5%] text-center md:my-[3%] md:text-[15px] lg:my-[2%] lg:text-[16px]">
                                        Successful
                                    </h2>
                                    <img
                                        className="w-[50px] h-[50px] mx-auto lg:w-[70px] lg:h-[70px]"
                                        src="./Gif/checkMarkGif.gif"
                                        alt="/"
                                    />
                                    <p className="text-[10px] text-[#2ED173] md:text-[16px] font-bold text-center my-[4%] lg:my-[%]">
                                        New recipient contact has been added successfully.
                                    </p>

                                    <Link to="/airtime-vtu">
                                        <button
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
                        <button className={`${recipientNumber.length < 11 ? "bg-[#0008]" : "bg-[#04177f]"
                            } w-full flex justify-center items-center mr-auto cursor-pointer 
                            text-[14px] font-extrabold h-[40px] text-white rounded-[6px] 
                            md:w-[25%] md:rounded-[8px] md:text-[20px] lg:text-[16px] lg:h-[38px]
                             lg:my-[4%]`} onClick={handleSave}>Save
                        </button>
                    </div>
                </div>
                <div className={styles.help}>
                    <h2>You need help?</h2>
                    <Link to={`/ContactUs`} className={styles.btnContact}>Contact Us</Link>
                </div>
            </div>
            {/* {selectRecipientDisplay && (
                <SelectRecipient 
                loadingRecipient={loadingRecipient}
                  setSelectRecipientDisplay={setSelectRecipientDisplay}
                  />
            )} */}
            
        </DashBoardLayout>
    )
}

export default AddRecipient
