import React, { useState, useEffect } from "react";
import { ContextProvider } from '../Context';
import { useContext } from "react";
import "../Dashboard/DashboardComponents/DataTopUpPage/DataTopUp.css"
import styles from "../Dashboard/DashboardComponents/TransferComponent/transfer.module.css";
import { Modal } from "../Screens/Modal/Modal";
import airtimestyles from "./AirtimeVtu.module.css";
import Joi from "joi";
import { useNavigate } from 'react-router-dom';
import arrowDown from "../AirTimePage/Images/arrow-down.svg";
import call from "../AirTimePage/Images/call.svg";
import user from "../AirTimePage/Images/user.svg";
import Delete from "../AirTimePage/Images/Deleted.svg";
import { Loader } from "../Loader/Loader";
import cancelIcon from "../EducationPins/imagesEducation/close-circle.svg";
import NoRecordImage  from "../Add&SelectRecipient/RecipientImages/NoRecordImage.svg";
// import { Oval } from 'react-loader-spinner';


const SelectRecipient = ({loadingRecipient,
   setSelectRecipientDisplay}) => {

  const { networkIssue, setNetworkIssue, setSessionModal,  recipientsAirtime, setRecipientsAirtime,
    sessionModal,  } = useContext(ContextProvider);
  const { toggleSideBar } = useContext(ContextProvider);
  const { networkName, setNetworkName } = useContext(ContextProvider);
  const { recipientName, setRecipientName } = useContext(ContextProvider);
  const { recipientNumber, setRecipientNumber } = useContext(ContextProvider);
  const { networkImage, setNetworkImage } = useContext(ContextProvider);
   const [recipientToDelete, setRecipientToDelete] = useState(null);
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});
  const [showList, setShowList] = useState(false);
  const [selected, setSelected] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [deleted, setdeleted] = useState(false);
  const [successDeleted, setSuccessDeleted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [activeImage, setActiveImage] = useState(null);
  const [edit, setEdit] = useState("");
  const [continueState, setContinue] = useState("");
  const [editingRecipientId, setEditingRecipientId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // const [loading, setLoading] = useState(true);
  const [inputValue, setInputValue] = useState("");

  

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    // Fetch initial recipients data from the backend or database
    fetchRecipients();
  }, []);

  const fetchRecipients = async () => {
    
    // finally {
    //   setLoading(false);
    // }
  };

  // }

  const updateRecipient = async (recipientId) => {

    const requestBody = {
      id: recipientId,
      network: networkName,  // Changed from networkName
      name: recipientName,   // Changed from recipientName
      phone: recipientNumber // Changed from recipientNumber
    };

    try {
      const response = await fetch(`https://api.aremxyplug.com/api/v1/airtime/recipient`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();

      if (response.ok && data.status === 200) {
        console.log('Recipient updated successfully:', data);
        return true;
      } else {
        console.error('Error updating recipient:', data.message);
        return false;
      }
    } catch (error) {
      if(error && error?.response === undefined){
        if(networkIssue) return;
        if(!networkIssue) return setNetworkIssue(true)
      }
      else if(error && error.response?.status === 401){
        if(sessionModal) return;
       if(!sessionModal) return setSessionModal(true)
      }else if (error && error?.response?.status === 404){
     return;
    }else if(error && error?.response?.status ===500){
      alert("An internal Server error")
    }else {
      alert("An unexpected error has occured.")
    }
    }
  };

  const deleteRecipient = async (recipientId) => {
    try {

      const requestBody = {
        id: recipientId,
      };

      const response = await fetch(`https://api.aremxyplug.com/api/v1/airtime/recipient`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
          // Add any authentication headers if required
        },
        body: JSON.stringify(requestBody)
      });

     

      if (response.ok && response?.data.status === 200) {
        return true; // Indicate successful deletion
      } else {
        
        return false; // Indicate failed deletion
      }
    } catch (error) {
      if(error && error?.response === undefined){
        if(networkIssue) return;
        if(!networkIssue) return setNetworkIssue(true)
      }
      else if(error && error.response?.status === 401){
        if(sessionModal) return;
       if(!sessionModal) return setSessionModal(true)
      }else if (error && error?.response?.status === 404){
     return;
    }else if(error && error?.response?.status ===500){
      alert("An internal Server error")
    }else {
      alert("An unexpected error has occured.")
    }
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
    setEditingRecipientId(recipient.id);
    setNetworkName(recipient.network);
    setRecipientName(recipient.name);
    setRecipientNumber(recipient.phone);
    // setInputValue(recipient.phone);
  };

  const handleConfirm = async () => {
    if (!editingRecipientId) {
      console.error('No recipient selected for editing');
      return;
    }

    const updatedRecipient = {
      network: networkName,
      name: recipientName,
      phone: recipientNumber
    };

    const success = await updateRecipient(editingRecipientId, updatedRecipient);

    if (success) {
      setRecipientsAirtime(prevRecipients =>
        prevRecipients.map(recipient =>
          recipient.id === editingRecipientId ? { ...recipient, ...updatedRecipient } : recipient
        )
      );
      setConfirm(true);
      setContinue(false);
      setEdit(false);
      setEditingRecipientId(null);
      // Reset form fields
      setNetworkName('');
      setRecipientName('');
      setRecipientNumber('');
      setInputValue('');
    } else {
      // Handle error (e.g., show error message to user)
      console.error('Failed to update recipient');
    }
  };
  
  const handleDelete = (recipientId) => {
    setRecipientToDelete(recipientId);
    setdeleted(true);
  };

  const handleSuccessDelete = async (recipientId) => {
    console.log('Attempting to delete recipient with id:', recipientId);
    if (recipientToDelete !== null) {
      const success = await deleteRecipient(recipientToDelete);
      if (success) {
        setRecipientsAirtime(prevRecipients =>
          prevRecipients.filter(recipient => recipient.id !== recipientToDelete)
        );
        setSuccessDeleted(true);
      } else {
        // Handle deletion failure
        console.error('Failed to delete recipient');
      }
    }
    setdeleted(false);
    setRecipientToDelete(null);
  };

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

  const networkImages = {
    'MTN': './Images/pricngimages/mtn.logo.png',
    'AIRTEL': './Images/pricngimages/airtel.logo.png',
    'GLO': './Images/pricngimages/glo.logo.png',
    '9MOBILE': './Images/pricngimages/9mobile.Logo.png',
  };

  const Network = ({ name, image, onClick }) => {
    return (
      <li className={airtimestyles.netList} onClick={onClick}>
        <div className={airtimestyles.netImage}>
          <img src={image} alt="" className={styles.NoImage} />
        </div>
        <h2 className={airtimestyles.netName}>{name}</h2>
      </li>
    );
  };

  const handleSelectNetwork = (name, image, val) => {
    setNetworkName(name);
    setNetworkImage(image);
    setShowList(false);
    setSelected(true);
  };

  const handleShowList = () => {
    setShowList(!showList);
    setNetworkName("");
    setNetworkImage("");
  };

  const schema = Joi.object({
    networkName: Joi.string().required(),
    recipientNumber: Joi.string()
      .pattern(new RegExp(/^\d{11,}/))
      .required()
      .messages({
        "string.pattern.base": "Phone number should be 11 digits ",
      }),
  });

  const handleContinue = (e) => {
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
      networkName,
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
      setContinue(true);
      setEdit(false);
      setErrors({});
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;

    const numericValue = value.replace(/\D/g, "").slice(0, 11);

    setInputValue(numericValue);
  };

   const filteredRecipients = recipientsAirtime !== null && 
   recipientsAirtime !== undefined && recipientsAirtime?.length 
        ?   recipientsAirtime.filter((recipient) =>
          recipient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          recipient.phone.includes(searchQuery)
        ) : []

  return (
  
   <div className="h-full w-full px-[15px] 
   bg-white">
    <Modal>
  <div className="pt-[15px] w-[90%] px-[20px] h-[450px]
   bg-white rounded-[15px] lg:w-[40%] md:w-[50%] ">
        <img onClick=  {()=> {
          setSelectRecipientDisplay(false);
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
            {loadingRecipient === true  ? (
              <div className="w-[100%] h-[200px] flex justify-center items-center">
                <Loader/>
                </div>
            ) :  filteredRecipients?.length > 0 ?  (
            Array.isArray(filteredRecipients)
            && filteredRecipients.map((recipient) => (
              <div
                key={recipient.id}
                className="w-[100%] mx-auto flex justify-between 
                border cursor-pointer py-2 px-2 rounded-[7px] 
                 md:rounded-[7px] lg:py-2 lg:px-5"
              >
                <div
                  onClick={() => {
                    setSelectRecipientDisplay(false);
                    setNetworkName(recipient.network);
                    setNetworkImage(networkImages[recipient.network]);
                    setRecipientName(recipient.name);
                    setRecipientNumber(recipient.phone);
                    navigate('/airtime-vtu');
                  }}
                  className="flex flex-col my-auto gap-[1.67px] md:gap-[2.93px]">
                  <h2 className="lg:text-[16px] font-medium lg:leading-6 md:text-[9px] text-[9px]">
                    <span className ="capitalize"></span>({recipient.phone})
                  </h2>
                  <p className="lg:text-[14.05px] lg:font-medium lg:leading-[21.07px] text-[#7C7C7C] text-[9px] font-semibold leading-3 md:text-[8px]">
                    {recipient.name}
                  </p>
                </div>
                <div
                  onClick={() => handleRecipient(recipient.id)}
                  className="relative h-[16px] cursor-pointer w-[16px] my-auto lg:w-[50px] lg:h-[25px]"
                >
                  <img
                    src="./Images/airtimeTopUp/Frame.png"
                    alt=""
                    className="h-full"
                  />
                  {showPopup && activeImage === recipient.id && (
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
                          e.stopPropagation(); // Prevent event from bubbling up
                          handleDelete(recipient.id);
                        }}
                        className="text-[#FA6B6B] text-[10px] px-[5px] py-[5px]"
                      >
                        Delete Recipient
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))) : loadingRecipient === false && filteredRecipients?.length < 1 && (
              <div className='flex justify-center '>
                                          <img  src={NoRecordImage} alt="" 
                                          className='lg:w-[517px] lg:h-[456px]'/>
                                              </div>
            )  }
            </div>

            {edit && (
              <Modal>
                <div
                  className={`${airtimestyles.successfulTwo} ${toggleSideBar ? " lg:ml-[20%] lg:w-[40%]"
                    : "lg:w-[40%]"
                    } w-[90%] xl:w-[40%] md:w-[70%] overflow-auto`}
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
                        
                        setSelected("");
                        setRecipientNumber("");
                        setRecipientName("");
                      }}
                      className=" w-[18px] cursor-pointer h-[18px] md:w-[25px] md:h-[25px] lg:w-[29px] lg:h-[29px]"
                      src="/Images/transferImages/close-circle.png"
                      alt=""
                    />
                  </div>
                  <hr className="h-[6px] bg-[#04177f] border-none md:h-[10px]" />

                  <div className="text-center mt-[20px] font-semibold text-[10px] md:text-[14px]">
                    Edit Recipient Details
                  </div>

                  <div
                    className={`${airtimestyles.mainGrid} px-[20px] mt-[50px] flex flex-col justify-between h-[40%] lg:mt-[20px]`}
                  >
                    <div className="">
                      <div className="relative w-full">
                        <h2 className="text-[10px] font-semibold mb-1 md:text-[14px]">
                          Select Network
                        </h2>
                        <div
                          onClick={handleShowList}
                          className={`input border`}
                        >
                          <div className="text-[10px] md:text-[14px] font-semibold text-[#000] flex justify-between py-[8px] px-[10px]">
                            {selected ? (
                              <li
                                onClick={handleShowList}
                                className={airtimestyles.labelInput}
                              >
                                <div className={airtimestyles.network}>
                                  {networkImage && (
                                    <img src={networkImage} alt="" />
                                  )}
                                </div>
                                <h2 className={airtimestyles.head2}>
                                  {networkName}
                                </h2>
                              </li>
                            ) : (
                              <h2
                                onClick={handleShowList}
                                className={airtimestyles.head6}
                              >
                                Select Network
                              </h2>
                            )}
                            <button
                              className={airtimestyles.btnDrop}
                              onClick={handleShowList}
                            >
                              <img src={arrowDown} alt="" />
                            </button>
                          </div>
                        </div>
                        {showList && (
                          <div className="network w-full">
                            {networkList.map((item) => (
                              <Network
                                key={item.id}
                                image={item.image}
                                name={item.name}
                                onClick={() =>
                                  handleSelectNetwork(
                                    item.name,
                                    item.image,
                                    item.discount
                                  )
                                }
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="md:mt-[20px]">
                      <h2 className="text-[10px] font-semibold mb-1 md:text-[14px]">
                        Phone Number{" "}
                        <span className="text-[8px] text-[#04177F] font-semibold mb-1 md:text-[12px]">
                          (Select Recipient)
                        </span>
                      </h2>
                      <div className="input border">
                        <div className="text-[10px] font-semibold text-[#7C7C7C] flex justify-between py-[8px] px-[10px]">
                          <input
                            type="number"
                            className="text-[10px] outline-none w-full md:text-[14px] font-semibold text-[#000] flex justify-between py-[4px]"
                            required
                            placeholder="Add recipient phone number"
                            value={inputValue}
                            onChange={(event) => {
                              handleChange(event);
                              setRecipientNumber(event.target.value);
                            }}
                          />
                          <div className={airtimestyles.call}>
                            <img src={call} alt="" />
                          </div>
                        </div>
                      </div>
                      {errors.recipientNumber && (
                        <div className="text-[12px] text-red-500 italic lg:text-[14px]">
                          {errors.recipientNumber}
                        </div>
                      )}
                    </div>

                    <div className="md:mt-[20px]">
                      <div>
                        <h2 className="text-[10px] font-semibold mb-1 md:text-[14px]">
                          Recipient Name{" "}
                          <span className={airtimestyles.span4}>
                            (optional)
                          </span>
                        </h2>
                        <div className="input border">
                          <div className="text-[10px] font-semibold text-[#7C7C7C] flex justify-between py-[8px] px-[10px]">
                            <input
                              type="text"
                              className="text-[10px] md:text-[14px] outline-none w-full font-semibold text-[#000] flex justify-between py-[4px]"
                              required
                              placeholder="Add recipient name"
                              onChange={(event) =>
                                setRecipientName(event.target.value)
                              }
                              value={recipientName}
                            />
                            <div className={airtimestyles.call}>
                              <img src={user} alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`w-full h-[38px] mt-[80px] px-[20px] mx-auto lg:mt-[110px]`}
                  >
                    <button
                      className={`${inputValue.length < 11
                        ? "bg-[#0008]"
                        : "bg-[#04177f]"
                        } w-full flex justify-center items-center mr-auto cursor-pointer text-[14px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:mx-auto md:rounded-[8px] md:text-[20px] lg:text-[16px] lg:h-[38px] lg:my-[4%]`}
                      onClick={handleContinue}
                    >
                      Continue
                    </button>
                  </div>
                </div>
              </Modal>
            )}

            {continueState && (
              <Modal>
                <div
                  className={`${airtimestyles.successfulThree} ${toggleSideBar ? "md:w-[45%] lg:ml-[20%] lg:w-[40%]" : "lg:w-[40%]"
                    } md:w-[45%] w-[90%] overflow-auto`}
                >
                  <div className="flex justify-end items-end my-[2%] lg:my-[1%] ">
                    <img
                      onClick={() => {
                        setContinue(false);
                        // window.location.reload();
                        setSelected("");
                        setRecipientNumber("");
                        setRecipientName("");
                      }}
                      className=" w-[18px] cursor-pointer h-[18px] md:w-[35px] md:h-[35px] lg:w-[25px] lg:h-[25px]"
                      src="/Images/transferImages/close-circle.png"
                      alt=""
                    />
                  </div>
                  <hr className="h-[6px] bg-[#04177f] border-none mt-[2%] md:mt-[1%] md:h-[10px]" />

                  <div className="text-[12px] my-[5%] text-center md:my-[3%] md:text-[15px] lg:my-[2%] lg:text-[16px]">
                    Please Confirm
                  </div>

                  <div className="bg-[#FFF0BA] mx-5 rounded-md h-[55px] my-5 flex justify-between items-center px-[4%] md:h-[75px] lg:h-[85px]">
                    <p className="text-[10px] text-[#4A4A4A] font-semibold text-center mx-auto w-[250px] md:text-[9px] md:w-full lg:text-[14px]">
                      Are you sure you want to add this details to your
                      recipients? Please re-confirm the identity and be informed
                      any successful transactions to a strange details can not
                      be reversed.
                    </p>
                  </div>

                  <div className="flex flex-col gap-2 lg:gap-4">
                    <div className="flex text-[10px] md:text-[12px] w-[90%] mx-auto justify-between  lg:text-[14px]">
                      <h2 className="text-[#7C7C7C] text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                        Network
                      </h2>
                      <div className="flex gap-2">
                        <div className="h-[15px] w-[15px] lg:h-[18px] lg:w-[18px]">
                          {networkImage && <img src={networkImage} alt="" />}
                        </div>
                        <h2 className="text-[10px] relative font-semibold lg:text-[16px] lg:font-medium lg:bottom-1">
                          {networkName}
                        </h2>
                      </div>
                    </div>

                    <div className="flex text-[10px] md:text-[12px] w-[90%] mx-auto justify-between  lg:text-[14px]">
                      <h2 className="text-[#7C7C7C] text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                        Phone Number
                      </h2>
                      <div className="flex gap-1">
                        <h2 className="text-[10px] leading-[12px] capitalize md:text-[12px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                          {recipientNumber}
                        </h2>
                      </div>
                    </div>

                    <div className="flex text-[10px] md:text-[12px] w-[90%] mx-auto justify-between  lg:text-[14px]">
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

                  <button
                    className={`${inputValue.length < 11
                      ? "bg-[#0008]"
                      : "bg-[#04177f]"
                      } bg-[#04177f] my-[5%] w-[88%] flex justify-center items-center mx-auto cursor-pointer text-[14px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[16px] lg:text-[14px] lg:w-[163px] lg:h-[38px] lg:mt-[8%]`}
                    onClick={handleConfirm}
                    disabled={inputValue.length < 11}
                  >
                    Confirmed
                  </button>
                </div>
              </Modal>
            )}

            {confirm && (
              <Modal>
                <div
                  className={`${airtimestyles.inputPin} ${toggleSideBar
                    ? "md:w-[45%] lg:w-[40%] lg:ml-[20%]" : "lg:w-[40%]"
                    } md:w-[55%] w-[90%]`}
                >
                  <div className="flex justify-between items-center mx-[3%] my-[2%] lg:mt-[3%] ">
                    <img
                      onClick={() => {
                        setEdit(false);
                        //   window.location.reload();
                      }}
                      className=" w-[18px] h-[15px] md:w-[35px] md:h-[32px] lg:w-[25px] lg:h-[12px] "
                      src="/Images/login/arpLogo.png"
                      alt=""
                    />

                    <img
                      onClick={() => {
                        setConfirm(false);
                        window.location.reload();
                      }}
                      className="absolute cursor-pointer right-2 w-[18px] h-[18px] my-[1%] md:w-[35px] md:h-[25px] lg:w-[25px] lg:h-[25px] "
                      src="/Images/transferImages/close-circle.png"
                      alt=""
                    />
                  </div>

                  <hr className="h-[6px] bg-[#04177f] border-none mt-[3%] md:mt-[3%] md:h-[10px]" />
                  <p className="text-[10px] md:text-[16px] lg:text-[18px] font-extrabold text-center my-[3%] lg:my-[%]">
                    Successful
                  </p>
                  <div className="flex flex-col gap-[10px] justify-center items-center font-extrabold mb-[7%]">
                    <img
                      className="w-[50px] h-[50px] mx-auto lg:w-[70px] lg:h-[70px]"
                      src="./Gif/checkMarkGif.gif"
                      alt="/"
                    />

                    <p className="text-[10px] text-[#2ED173] md:text-[16px] font-bold text-center my-[4%] lg:my-[%]">
                      New recipient contact has been added successfully.
                    </p>
                  </div>

                  <div
                    className={`w-full h-[38px] mt-[30px] px-[20px] items-center`}
                  >
                    <button
                      className={`bg-[#04177F] w-full mt-[5%] flex justify-center items-center my-auto cursor-pointer text-[14px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:mx-auto md:rounded-[8px] md:text-[20px] lg:text-[16px] lg:mx-auto lg:h-[38px] lg:mt-[10%]`}
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

            {deleted && recipientToDelete !== null && (
              <Modal>
                <div
                  className={`${airtimestyles.inputPin} ${toggleSideBar
                    ? "md:w-[45%] lg:w-[40%] lg:ml-[20%]" : "lg:w-[40%]"
                    } md:w-[55%] w-[90%]`}
                >
                  <div className="flex justify-between items-center mx-[3%] my-[2%] lg:my-[2%]">
                    <img
                      onClick={() => {
                        setEdit(false);
                        //   window.location.reload();
                      }}
                      className=" w-[18px] h-[15px] md:w-[25px] md:h-[22px] lg:w-[25px] lg:h-[12px]"
                      src="/Images/login/arpLogo.png"
                      alt=""
                    />

                    <img
                      onClick={() => {
                        setdeleted(false);
                      }}
                      className="absolute cursor-pointer right-2 w-[18px] h-[18px] my-[1%] md:w-[35px] md:h-[25px] lg:w-[25px] lg:h-[25px] "
                      src="/Images/transferImages/close-circle.png"
                      alt=""
                    />
                  </div>

                  <hr className="h-[6px] bg-[#04177f] border-none mt-[3%] md:mt-[3%] md:h-[10px]" />
                  <p className="text-[10px] md:text-[14px] lg:text-[18px] font-extrabold text-center my-[3%] lg:my-[%]">
                    Are you sure you want to delete this recipient permanently?
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
                      onClick={handleSuccessDelete}
                    >
                      Yes
                    </button>
                    <button
                      className={`bg-[#fff] w-full flex justify-center items-center mr-auto cursor-pointer text-[14px] font-extrabold h-[40px] text-[#F95252] rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[20px] lg:text-[16px] lg:h-[38px] lg:my-[4%]`}
                      onClick={() => {
                        setdeleted(false);
                        setRecipientToDelete(null);
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
                  className={`${airtimestyles.inputPin} ${toggleSideBar
                    ? "md:w-[45%] lg:w-[40%] lg:ml-[20%]" : "lg:w-[40%]"
                    } md:w-[55%] w-[90%]`}
                >
                  <div className="flex justify-between items-center mx-[3%] my-[2%] lg:my-[2%]">
                    <img
                      onClick={() => {
                        setSuccessDeleted(false);
                        //   window.location.reload();
                      }}
                      className=" w-[18px] h-[15px] md:w-[35px] md:h-[32px] lg:w-[25px] lg:h-[12px]"
                      src="/Images/login/arpLogo.png"
                      alt=""
                    />

                    <img
                      onClick={() => {
                        setConfirm(false);
                        window.location.reload();
                      }}
                      className="absolute cursor-pointer right-2 w-[18px] h-[18px] my-[1%] md:w-[35px] md:h-[25px] lg:w-[25px] lg:h-[25px] "
                      src="/Images/transferImages/close-circle.png"
                      alt=""
                    />
                  </div>

                  <hr className="h-[6px] bg-[#04177f] border-none mt-[3%] md:mt-[3%] md:h-[10px]" />
                  <p className="text-[10px] md:text-[16px] lg:text-[18px] font-extrabold text-center my-[3%] lg:my-[%]">
                    Successful
                  </p>
                  <p className="text-[10px] text-[#04177f] md:text-[14px] px-[20px] lg:text-[18px] font-extrabold text-center my-[1%] lg:my-[%]">
                    Recipient *****2345 has been deleted successfully. You can
                    add recipient again anytime!
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

export default SelectRecipient;
