import  { useState} from "react";
import { ContextProvider } from "../../../../Context";
import { useContext } from "react";
import "../DataTopUp.css";
import styles from "../../TransferComponent/transfer.module.css";
import cancelIcon from "../../../../EducationPins/imagesEducation/close-circle.svg"
import { Modal } from "../../../../Screens/Modal/Modal";
import airtimestyles from "../../../../AirTimePage/AirtimeVtu.module.css";
import Joi from "joi";
import call from "../../../../AirTimePage/Images/call.svg";
import user from "../../../../AirTimePage/Images/user.svg";
import Delete from "./DataBundles-Images/Deleted.svg";
import { Loader } from "../../../../Loader/Loader";
import { useLocation } from "react-router-dom";
import { BalanceLoading } from "../../../../Loader/Loader";
import NoRecordImage from "../../../../Add&SelectRecipient/RecipientImages/NoRecordImage.svg";
export const DataBundleSelectRecipient = ({loadingRecipient, setDataRecipientsDisplay, setDataRecipient,
   setRecipientPhoneNumber}) => {
const locationObject = useLocation();
const pathname = locationObject?.pathname
  const { isDarkMode,  recipientsData, 
    setRecipientsData,
   } = useContext(ContextProvider);
  const { toggleSideBar } = useContext(ContextProvider);
  const { networkName, setNetworkName } = useContext(ContextProvider);
 const { recipientName, setRecipientName } = useContext(ContextProvider);
  const { recipientNumber, setRecipientNumber } = useContext(ContextProvider);
  const { networkImage, setNetworkImage } = useContext(ContextProvider);
  //const [recipients, setRecipients] = useState([]);
  const [recipientToDelete, setRecipientToDelete] = useState(null);
 // const navigate = useNavigate();

  const [errors, setErrors] = useState({});
  
  //const [selected, setSelected] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [deleted, setdeleted] = useState(false);
  const [successDeleted, setSuccessDeleted] = useState(false);
const [showPopup, setShowPopup] = useState(false);
  const [activeImage, setActiveImage] = useState(null);
  const [edit, setEdit] = useState("");
  const [continueState, setContinue] = useState("");
  const [editingRecipientId, setEditingRecipientId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");



  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  
const [confirmRecipient, setConfirmRecipient] = useState(false)
  const updateRecipient = async (recipientId) => {
    setConfirmRecipient(true)
    const requestBody = {
      id: recipientId,
      network: networkName, // Changed from networkName
      name: recipientName, // Changed from recipientName
      phone: recipientNumber, // Changed from recipientNumber
    };

    try {
      const response = await fetch(
        `https://api.aremxyplug.com/api/v1/data/recipient`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
          credentials : "include"
        }
      );

      const data = await response.json();

      if (response.ok && data.status === 200) {
        alert("Recipient updated successfully:");
        return true;
      } else {
        alert("Error updating recipient");
        return false;
      }
    } catch (error) {
     alert("Error updating recipient:");
     setConfirmRecipient(false);
      return false;
    }
  };

  const deleteRecipient = async (recipientId) => {
    try {
      const requestBody = {
        id: recipientId,
      };

      const response = await fetch(
        `https://api.aremxyplug.com/api/v1/data/recipient`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            // Add any authentication headers if required
          },
          body: JSON.stringify(requestBody),
          credentials : "include"
        }
      );

      const data = await response.json();

      if (response.ok && data.status === 200) {
        return true; // Indicate successful deletion
      } else {
        return false; // Indicate failed deletion
      }
    } catch (error) {
 return false; // Indicate failed deletion
    }
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

  const handleEdit = (recipient) => {
    setEdit(true);
       setEditingRecipientId(recipient?.id);
       setNetworkName(recipient?.network);
  };

  const handleContinue = () => {
    // setEdit(false);
    // setContinue(true);

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
      setContinue(true);
      setEdit(false);
      setErrors({});
    }
  };

  // const handleConfirm = () => {
  //   setConfirm(true);
  //   setContinue(false);
  // };

  const handleConfirm = async () => {
    if (!editingRecipientId) {
      return;
    }

    const updatedRecipient = {
      network: networkName,
      name: recipientName,
      phone: recipientNumber,
    };

    const success = await updateRecipient(editingRecipientId, updatedRecipient);

    if (success) {
      setRecipientsData((prevRecipients) =>
        prevRecipients.map((recipient) =>
          recipient.id === editingRecipientId
            ? { ...recipient, ...updatedRecipient }
            : recipient
        )
      );
      setConfirm(true);
      setContinue(false);
      setEdit(false);
      setEditingRecipientId(null);
      // Reset form fields
      setNetworkName("");
      setRecipientName("");
      setRecipientNumber("");
     // setInputValue("");
    } else {
      // Handle error (e.g., show error message to user)
     return;
    }
  };

  // const handleDelete = () => {
  //   setdeleted(true);
  // };

  const handleDelete = (recipient) => {
    setRecipientToDelete(recipient?.id);
    setRecipientNumber(recipient?.phone)
    setdeleted(true);
  };

  const handleSuccessDelete = async (recipientId) => {
    if (recipientToDelete !== null) {
      const success = await deleteRecipient(recipientToDelete);
      if (success) {
        setRecipientsData((prevRecipients) =>
          prevRecipients.filter(
            (recipient) => recipient.id !== recipientToDelete
          )
        );
        setSuccessDeleted(true);
      } else {
        // Handle deletion failure
       return;
      }
    }
    setdeleted(false);
    setRecipientToDelete(null);
  };



  // const networkList = [
  //   {
  //     id: 1,
  //     name: "MTN",
  //     image: require("../../../../AirTimePage/Images/mtn.svg").default,
  //     discount: 3,
  //   },
  //   {
  //     id: 2,
  //     name: "AIRTEL",
  //     image: require("../../../../AirTimePage/Images/airtel.png"),
  //     discount: 4,
  //   },
  //   {
  //     id: 3,
  //     name: "GLO",
  //     image: require("../../../../AirTimePage/Images/glo.png"),
  //     discount: 3,
  //   },
  //   {
  //     id: 4,
  //     name: "9MOBILE",
  //     image: require("../../../../AirTimePage/Images/9mobile.svg").default,
  //     discount: 3,
  //   },
  //   {
  //     id: 4,
  //     name: "SMILE",
  //     image:
  //       require("../DataBundles/SmileDataBundle/SmileDataBundleImages/SmileLogo.svg")
  //         .default,
  //     discount: 3,
  //   },
  //   {
  //     id: 4,
  //     name: "SPECTRANET",
  //     image:
  //       require("../DataBundles/SpectranetDataBundle/SpectranetDataBundleImages/SpectranetLogo.svg")
  //         .default,
  //     discount: 3,
  //   },
  // ];

  // const Network = ({ name, image, onClick }) => {
  //   return (
  //     <li className={airtimestyles.netList} onClick={onClick}>
  //       <div className={airtimestyles.netImage}>
  //         <img src={image} alt="" className={styles.NoImage} />
  //       </div>
  //       <h2 className={airtimestyles.netName}>{name}</h2>
  //     </li>
  //   );
  // };



 

  const schema = Joi.object({
    recipientNumber: Joi.string()
      .pattern(new RegExp(/^\d{11,}/))
      .required()
      .messages({
        "string.pattern.base": "Phone number should be 11 digits ",
      }),
  });

  // const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;

    const numericValue = value.replace(/\D/g, "").slice(0, 11);

    setRecipientNumber(numericValue);
  };

  //Filtering recipients
   const filteredRecipients = recipientsData !== null && 
   recipientsData !== undefined && recipientsData?.length 
        ?   recipientsData?.filter((recipient) =>
          (recipient?.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          recipient?.phone.includes(searchQuery)) && pathname === "/AirtelDataBundle" 
          ?  (recipient?.network === "airtel" || recipient?.network === "AIRTEL")
           :  pathname === "/MtnDataTopUpBundle" ?  
           (recipient?.network === "mtn" || recipient?.network === "MTN") 
           : pathname === "/GloDataBundle" ?  (recipient?.network === "glo" || recipient?.network === "GLO")
           :  pathname === "/EtisalatDataBundle"  ?  (recipient?.network === "9mobile" ||
             recipient?.network === "9MOBILE") : ""
        ) : []


  return (
  
         <div className="h-full w-full px-[15px] 
           bg-white">
            <Modal>
          <div className={`pt-[15px] w-[90%] px-[20px] h-[450px]
           rounded-[15px] lg:w-[40%] md:w-[50%] ${isDarkMode ? "bg-black" : "bg-white"} `}>
                <img onClick=  {()=> {
                  setDataRecipientsDisplay(false);
                }}
                src={cancelIcon} className = "h-[30px] w-[30px]" alt="" />
              <div className="flex text-[#7c7c7c] mt-[5%] text-[10px]
               leading-[26px] items-center gap-[8px] md:text-[12px] lg:text-[20px]">
                 <p className = "text-[12px] font-[500] leading-[16px] lg:text-[13px] lg:leading-[18px]">
                  Select Recipient Details 
                  </p>
                 <img className="w-[15px] h-[15px] md:w-[]
                  md:h-[] lg:w-[20px] lg:h-[20px]"
                      src="./Images/dashboardImages/arrowright.png"
                      alt="/"
                    />
                  </div>
                  <div className={`${styles.mainGrid} mt-[5%]`}>
                    <div className={styles.mainGridCol}>
                      <div className="border rounded-[5px] h-[40px] flex 
                      justify-between items-center py-1 px-3 
                      lg:h-[45px] lg:rounded-[10px] lg:border-[1px] 
                      lg:border-[7C7C7C]">
                        <input
                          className="text-[12px] leading-[20px] w-[100%] 
                          h-[100%] outline-none lg:text-[14px] 
                          bg-transparent placeholder:text-[7C7C7C]"
                          type="text"
                          placeholder="Name Or Phone Number"
                          value={searchQuery}
                          onChange={handleSearchChange}
                        />
                        <img
                          className=" h-[13.3px] w-[13.3px] lg:w-[24px] lg:h-[24px] "
                          src="./Images/dashboardImages/search-status.png"
                          alt="dropdown"
                        />
                      </div>
                    </div>
                  </div>
          <div className="flex flex-col gap-5 mt-[5%]">
    <div className="flex flex-col h-[200px] w-full 
            overflow-y-auto py-[20px] gap-[10px] bvnQuery border-[0.1px] border-gray-100 rounded-[10px] px-[5px]">
            {loadingRecipient === true ?  (
                 
             <div className="w-[100%] h-[200px] flex justify-center items-center">
                            <Loader/>
                            </div>
            ) :  filteredRecipients?.length > 0 &&   Array?.isArray(filteredRecipients) ?  (
           filteredRecipients.map((recipient) => (
                <div
                  key={recipient?.id}
                  className="w-[100%] mx-auto flex justify-between
                   border cursor-pointer py-2 px-2 rounded-[7px] 
                   md:rounded-[7px] lg:py-2 lg:px-5">
                  <div
                    onClick={() => {
                      setNetworkName(recipient?.network);
                      console.log(recipient?.phone);
                      // setNetworkImage(networkImages[recipient.network]);
                      setDataRecipient(recipient?.name);
                      setRecipientPhoneNumber(recipient?.phone);
                      setDataRecipientsDisplay(false);
                    //  navigate("/data-bundles");
                    }}
                    className="flex flex-col w-full my-auto gap-[1.67px] md:gap-[2.93px]"
                  >
                    <h2 className="lg:text-[16px] uppercase font-medium lg:leading-6 md:text-[9px] text-[9px]">
                      {recipient?.network}({recipient?.phone})
                    </h2>
                    <p className="lg:text-[14.05px] lg:font-medium lg:leading-[21.07px] text-[#7C7C7C] text-[9px] font-semibold leading-3 md:text-[8px]">
                      {recipient?.name}
                    </p>
                  </div>
                  <div
                    onClick={() => handleRecipient(recipient?.id)}
                    className="relative h-[16px] cursor-pointer w-[16px] p-0.5 my-auto lg:w-[50px] lg:h-[25px]"
                  >
                    <img
                      src="./Images/airtimeTopUp/Frame.png"
                      alt=""
                      className="h-full"
                    />
                    {showPopup && activeImage === recipient?.id && (
                      <div
                        className="input border absolute bg-white top-[8px] right-[17px] lg:top-[20px] lg:right-[50px] w-[100px] h-[60px] z-50 flex flex-col justify-center items-start py-[5px]"
                        style={{ boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)" }}
                      >
                        <div
                          onClick={() => handleEdit(recipient)}
                          className="text-[10px] text-[#7C7C7C] px-[5px] py-[5px]"
                        >
                          Edit Recipient
                        </div>
                        <hr className="w-full h-[5px]" />
                        <div
                          onClick={(e) => {
                            e?.stopPropagation(); // Prevent event from bubbling up
                            handleDelete(recipient);
                          }}
                          className="text-[#FA6B6B] text-[10px] px-[5px] py-[5px]"
                        >
                          Delete Recipient
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))
   ) : (
             <div className='flex justify-center '>
                                       <img src={NoRecordImage} alt="" 
                                           className='lg:w-[517px] lg:h-[456px]'/>
                                           </div>
            )
    
            }
            </div>
           
          

            {edit && (
              <Modal>
                <div className={`w-full flex justify-center h-full 
                         py-[30px] px-[15px] lg:px-[0px] lg:items-center
                          items-end`}>
                <div className={` bvnQuery lg:rounded-[12px] rounded-[10px] 
                          h-[520px] ${ toggleSideBar ? " lg:ml-[20%] lg:w-[40%]" : "lg:w-[40%]"
                          } w-[100%] md:w-[60%] overflow-auto  ${isDarkMode ? "bg-black text-white border rounded-[10px] border-white": "bg-white text-black"} `}
                          >
                  <div className="flex justify-between items-center mx-[3%] my-[2%] lg:my-[1%]">
                    <img
                      onClick={() => {
                        setEdit(false);
                      }}
                      className=" w-[18px] h-[15px] md:w-[25px] md:h-[20px] lg:w-[35px] lg:h-[22px]"
                      src="/Images/login/arpLogo.png"
                      alt=""
                    />

                    <img
                      onClick={() => {
                        setEdit(false);
                        setRecipientNumber("");
                        setRecipientName("");
                      }}
                      className=" w-[18px] h-[18px] md:w-[25px] md:h-[25px] lg:w-[29px] lg:h-[29px]"
                      src="/Images/transferImages/close-circle.png"
                      alt=""
                    />
                  </div>
                  <hr className="h-[6px] bg-[#04177f] border-none md:h-[10px]" />

                  <div className="text-center my-[20px] font-semibold text-[15px] leading-[20px] md:text-[14px]">
                    Edit Recipient Details
                  </div>

                  <div className="flex flex-col gap-5 px-2">
                  
                      <div className="relative w-full flex flex-col gap-2">
                        <h2 className="text-[14px] leading-[20px]  font-semibold mb-1 md:text-[14px]">
                          Select Network
                        </h2>
                       
                          <div  className={`mt-2 uppercase md:mt-0 rounded-[10px] md:rounded-0 p-[20px] md:p-0 text-[13.8px]
                 sm:p-3 sm:text-lg flex justify-between pt-[8.803px] pb-[7.794px] 
                 pr-[13px] pl-[10.876px] font-[400] leading-[10.4px] md:text-[11px] md:leading-[12.206px] 
                lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[40.927px] md:h-[35px] lg:h-[50px]  px-[11px] md:px-[6px] lg:px-[10px]  self-center ${
                  isDarkMode
                    ? "bg-black text-white border border-white"
                    : "border border-[#0003] hover:bg-[#EDEAEA] text-[#7C7C7C] border-[#9C9C9C]"
                }
  `}>
                           {networkName}
                          
                     </div>
                      
                         
                  
                    </div>

                    <div className="md:mt-[20px] mt-[10px]">
                      <h2 className="text-[14px] leading-[20px] font-semibold mb-1 md:text-[14px]">
                        Phone Number{" "}
                        <span onClick={()=> {
                          setEdit(false)
                        }} className="text-[10px] cursor-pointer text-[#04177F] font-semibold mb-1 md:text-[12px]">
                          (Select Recipient)
                        </span>
                      </h2>
                   
                        <div className="relative flex">
                          <input
                            type="number"
                              className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-[20px] md:p-0 text-[13.8px]
                 sm:p-3 sm:text-lg flex justify-between pt-[8.803px] pb-[7.794px] 
                 pr-[13px] pl-[10.876px] font-[400] leading-[10.4px] md:text-[11px] md:leading-[12.206px] 
                lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[40.927px] md:h-[35px] lg:h-[50px]  px-[11px] md:px-[6px] lg:px-[10px]  self-center ${
                  isDarkMode
                    ? "bg-black text-white border border-white"
                    : "border border-[#0003] hover:bg-[#EDEAEA] text-[#7C7C7C] border-[#9C9C9C]"
                }
  `}
                            required
                            placeholder="Add recipient phone number"
                            value={recipientNumber}
                            onChange={(event) => {
                              handleChange(event);
                              setRecipientNumber(event.target.value);
                            }}
                          />
                          
                            <img className="absolute top-[40%] right-5" src={call} alt="" />
                     
                        </div>
                 
                      {errors.recipientNumber && (
                        <div className="text-[12px] text-red-500 italic lg:text-[14px]">
                          {errors.recipientNumber}
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col gap-2">
                 
                        <h2 className="text-[14px] leading-[20px] font-semibold mb-1 md:text-[14px]">
                          Recipient Name{" "}
                          <span className={airtimestyles.span4}>
                            (optional)
                          </span>
                        </h2>
                        <div className="relative flex flex-col ">
                    
                            <input
                              type="text"
                            className={`mt-2 md:mt-0 rounded-[10px] md:rounded-0 p-[20px] md:p-0 text-[13.8px]
                 sm:p-3 sm:text-lg flex justify-between pt-[8.803px] pb-[7.794px] 
                 pr-[13px] pl-[10.876px] font-[400] leading-[10.4px] md:text-[11px] md:leading-[12.206px] 
                lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[40.927px] md:h-[35px] lg:h-[50px]  px-[11px] md:px-[6px] lg:px-[10px]  self-center ${
                  isDarkMode
                    ? "bg-black text-white border border-white"
                    : "border border-[#0003] hover:bg-[#EDEAEA] text-[#7C7C7C] border-[#9C9C9C]"
                }
  `}
                              required
                              placeholder="Add recipient name"
                              onChange={(event) =>
                                setRecipientName(event?.target?.value)
                              }
                              value={recipientName}
                            />
                           
                              <img src={user} className="absolute top-[40%] right-5" alt="" />
                        
                          </div>
                       
                      </div>
                    </div>
                 

                  <div
                    className={`w-full h-[38px] mt-[80px] md:mt-[25%] px-[20px] mx-auto lg:mt-[20%] xl:mt-[18%]`}
                  >
                    <button
                      className={`${
                        recipientNumber.length < 11
                          ? "bg-[#0008]"
                          : "bg-[#04177f]"
                      } w-full flex justify-center items-center mr-auto cursor-pointer text-[14px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[40%] md:mx-auto md:px-[10%] md:rounded-[8px] md:text-[20px] lg:text-[16px] lg:h-[38px] lg:my-[4%]`}
                      onClick={handleContinue}
                    >
                      Continue
                    </button>
                  </div>
                </div>
                </div>
              </Modal>
            )}

            {continueState && (
              <Modal>
                <div
                  className={`mx-[5%] ${
                    isDarkMode ? "border bg-[#000]" : "bg-[#fff]"
                  } ${
                    toggleSideBar ? "confirmEdit01" : "confirmEdit"
                  } grow pt-[10px] pb-[20px] rounded-tr-[8px] rounded-tl-[8px] relative md:rounded-[11.5px] md:mx-auto md:my-auto md:overflow-auto`}
                >
                  <div className="flex justify-end items-end mx-[3%] my-[2%] lg:my-[1%] ">
                    <img
                      onClick={() => {
                        setContinue(false);
                        setRecipientNumber("");
                        setRecipientName("");
                      }}
                      className=" w-[18px] h-[18px] md:w-[25px] md:h-[25px] lg:w-[29px] lg:h-[29px]"
                      src="/Images/transferImages/close-circle.png"
                      alt=""
                    />
                  </div>
                  <hr className="h-[6px] bg-[#04177f] border-none md:h-[10px]" />

                  <div className="text-center mt-[20px] font-semibold text-[10px] md:text-[12px] lg:text-[16px]">
                    Please Confirm
                  </div>

                  <div className="bg-[#FFF0BA] mx-5 h-[80px] my-5 flex justify-between items-center px-[5%] md:h-[75px] md:mx-[20px] md:rounded-[15px] lg:h-[75px]">
                    <p className="text-[10px] text-[#4A4A4A] font-semibold text-center mx-auto w-[250px] md:text-[9px] md:w-full lg:text-[14px]">
                      Are you sure you want to add this details to your
                      recipients? Please re-confirm the identity and be informed
                      any successful transactions to a strange details can not
                      be reversed.
                    </p>
                  </div>

                  <div className="flex flex-col gap-5 mt-[30px] lg:gap-4 px-[20px]">
                    <div className="flex items-center justify-between">
                      <h2 className="text-[#7C7C7C] text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                        Network
                      </h2>
                      <div className="flex gap-2">
                        <div className="h-[15px] w-[15px]">
                          {networkImage && <img src={networkImage} alt="" />}
                        </div>
                        <h2 className="text-[10px] font-semibold uppercase">
                          {networkName}
                        </h2>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <h2 className="text-[#7C7C7C] text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                        Phone Number
                      </h2>
                      <div className="flex gap-1">
                        <h2 className="text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                          {recipientNumber}
                        </h2>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <h2 className="text-[#7C7C7C] text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                        Recipient Name
                      </h2>
                      <div className="flex gap-1">
                        <h2 className="text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                          {recipientName}
                        </h2>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`w-full h-[38px] mt-[35px] md:mt-[20%] px-[20px] mx-auto lg:mt-[5%] xl:mt-[10%]`}
                  >
                    <button
                      className={` bg-[#04177f] w-full flex justify-center items-center mr-auto cursor-pointer text-[14px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[40%] md:h-[50px] md:mx-auto md:px-[10%] md:rounded-[8px] md:text-[20px] lg:text-[16px] lg:h-[38px] xl:h-[50px] lg:my-[4%]`}
                      onClick={handleConfirm}
                    >
                   {confirmRecipient === false ? "Confirmed" : <BalanceLoading/>} 
                    </button>
                  </div>
                </div>
              </Modal>
            )}

            {confirm && (
              <Modal>
                <div
                  className={` ${
                    toggleSideBar ? "confirm02" : "confirm2"
                  } bg-white md:mx-auto md:my-auto lg:mx-auto lg:my-auto rounded-[12px]`}
                >
                  <div className="flex justify-between items-center mx-[3%] my-[2%] lg:mt-[3%] xl:mt-0 ">
                    <img
                      onClick={() => {
                        setEdit(false);
                        //   window.location.reload();
                      }}
                      className=" w-[18px] h-[15px] md:w-[25px] md:h-[15px] lg:w-[35px] lg:h-[22px] "
                      src="/Images/login/arpLogo.png"
                      alt=""
                    />

                    <img
                      onClick={() => {
                        setConfirm(false);
                        window.location.reload();
                      }}
                      className="cursor-pointer right-2 w-[18px] h-[18px] my-[1%] md:w-[35px] md:h-[25px] lg:w-[35px] lg:h-[35px] "
                      src="/Images/transferImages/close-circle.png"
                      alt=""
                    />
                  </div>

                  <hr className="h-[6px] bg-[#04177f] lg:mt-[2%] border-none mt-[2%] md:mt-[3%] md:h-[10px]" />
                  <p className="text-[10px] md:text-[16px] lg:text-[18px] font-extrabold text-center my-[3%] lg:my-[%]">
                    Successful
                  </p>
                  <div className="flex flex-col gap-[10px] justify-center items-center font-extrabold mb-[7%]">
                    <img
                      className="w-[50px] h-[50px] mx-auto mb-[2%] lg:w-[100px] lg:h-[100px]"
                      src="./Gif/checkMarkGif.gif"
                      alt="/"
                    />

                    <p className="text-[10px] text-[#2ED173] font-semibold md:text-[14px] text-center">
                      New recipient contact has been added successfully.
                    </p>
                  </div>

                  <div
                    className={`w-full h-[38px] mt-[35px] md:mt-[10%] px-[20px] mx-auto lg:mt-[5%] xl:mt-[5%]`}
                  >
                    <button
                      className={`bg-[#04177f] w-full flex justify-center items-center mr-auto cursor-pointer text-[14px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[40%] md:mx-auto md:px-[10%] md:rounded-[8px] md:text-[20px] lg:text-[16px] lg:h-[38px] lg:my-[4%]`}
                      onClick={() => {
                        setConfirm(false);
                      }}
                    >
                      Done
                    </button>
                  </div>
                </div>
              </Modal>
            )}

            {deleted && (
              <Modal>
                <div
                  className={` ${
                    toggleSideBar ? "confirm02" : "confirm2"
                  } bg-white md:mx-auto md:my-auto lg:mx-auto lg:my-auto md:overflow-auto rounded-[12px]`}
                >
                  <div className="flex justify-between items-center mx-[3%] my-[2%] lg:my-[2%] xl:mt-[3%]">
                    <img
                      onClick={() => {
                        setEdit(false);
                        //   window.location.reload();
                      }}
                      className=" w-[18px] h-[15px] md:w-[25px] md:h-[22px] lg:w-[35px] lg:h-[22px]"
                      src="/Images/login/arpLogo.png"
                      alt=""
                    />

                    <img
                      onClick={() => {
                        setConfirm(false);
                        window.location.reload();
                      }}
                      className="absolute cursor-pointer right-2 w-[18px] h-[18px] my-[1%] md:w-[35px] md:h-[25px] lg:w-[45px] lg:h-[45px] "
                      src="/Images/transferImages/close-circle.png"
                      alt=""
                    />
                  </div>

                  <hr className="h-[6px] bg-[#04177f] lg:mt-[2%] border-none mt-[2%] md:mt-[2%] md:h-[10px]" />
                  <p className="text-[10px] md:text-[14px] lg:text-[18px] font-extrabold text-center md:px-[20px] my-[3%] lg:my-[%]">
                    Are you sure you want to delete this recipient permanently?
                  </p>
                  <div className="flex flex-col gap-[10px] justify-center items-center font-extrabold mb-[7%]">
                    <img
                      className="w-[70px] h-[70px] mx-auto mb-[2%] md:w-[120px] md:h-[120px] lg:w-[120px] lg:h-[120px]"
                      src={Delete}
                      alt="/"
                    />
                  </div>

                  <div
                    className={`h-[38px] mt-[40px] px-[20px] flex md:mx-[10%]`}
                  >
                    <button
                      className={`bg-[#04177F] w-full flex justify-center items-center mr-auto cursor-pointer text-[14px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[40%] md:rounded-[8px] md:text-[20px] lg:text-[16px] lg:h-[38px] lg:my-[4%]`}
                      onClick={() => {
                        handleSuccessDelete();
                      }}
                    >
                      Yes
                    </button>
                    <button
                      className={`bg-[#fff] w-full flex justify-center items-center mr-auto cursor-pointer text-[14px] font-extrabold h-[40px] text-[#F95252] rounded-[6px] md:w-[40%] md:rounded-[8px] md:text-[20px] lg:text-[16px] lg:h-[38px] lg:my-[4%]`}
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
                  className={` ${
                    toggleSideBar ? "confirm02" : "confirm2"
                  } bg-white md:mx-auto md:my-auto lg:mx-auto lg:my-auto md:overflow-auto rounded-[12px]`}
                >
                  <div className="flex justify-between items-center mx-[3%] my-[2%] lg:my-[2%]">
                    <img
                      onClick={() => {
                        setSuccessDeleted(false);
                        //   window.location.reload();
                      }}
                      className=" w-[18px] h-[15px] md:w-[25px] md:h-[22px] lg:w-[35px] lg:h-[22px]"
                      src="/Images/login/arpLogo.png"
                      alt=""
                    />

                    <img
                      onClick={() => {
                        setConfirm(false);
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
                  <p className="text-[10px] text-[#04177F] md:text-[14px] px-[20px] lg:text-[18px] font-extrabold text-center my-[1%] lg:my-[%]">
                    Recipicient *****{recipientNumber?.slice(7)} has been deleted successfully. You can
                    add recipient again anytime!
                  </p>
                  <div className="flex flex-col gap-[10px] justify-center items-center font-extrabold mb-[5%] xl:mb-[1%]">
                    <img
                      className="w-[50px] h-[50px] mx-auto mb-[2%] md:w-[100px] md:h-[100px]  lg:w-[120px] lg:h-[120px]"
                      src="./Gif/checkMarkGif.gif"
                      alt="/"
                    />
                  </div>

                  <div
                    className={`h-[38px] mt-[40px] px-[20px] md:mx-[30%] md:mt-[10px] 2xl:mt-[2px]`}
                  >
                    <button
                      className={`bg-[#04177F] w-full flex justify-center items-center mr-auto cursor-pointer text-[14px] font-extrabold h-[40px] text-white rounded-[6px] md:w-full md:px-[50px] md:rounded-[8px] md:text-[20px] lg:text-[16px] lg:h-[38px] lg:my-[4%]`}
                      onClick={() => {
                        setSuccessDeleted(false);
                 
                      }}
                    >
                      Done
                    </button>
                  </div>
                </div>
              </Modal>
            )}
          </div>
        </div>

      
         </Modal>
        </div>

  );
};

