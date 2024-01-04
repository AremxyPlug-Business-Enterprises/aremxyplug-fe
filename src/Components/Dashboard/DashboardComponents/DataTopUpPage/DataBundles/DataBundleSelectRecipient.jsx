import React, { useState } from "react";
import { ContextProvider } from "../../../../Context";
import { useContext } from "react";
import "../DataTopUp.css";
import styles from "../../TransferComponent/transfer.module.css";
import { DashBoardLayout } from "../../../Layout/DashBoardLayout";
import { Link } from "react-router-dom";
import DataBundle from "../DataBundles/DataBundles-Images/DataBundles.svg";
import { Modal } from "../../../../Screens/Modal/Modal";
import airtimestyles from "../../../../AirTimePage/AirtimeVtu.module.css";
import Joi from "joi";
import arrowDown from "../../../../AirTimePage/Images/arrow-down.svg";
import call from "../../../../AirTimePage/Images/call.svg";
import user from "../../../../AirTimePage/Images/user.svg";
import Delete from "./DataBundles-Images/Deleted.svg";

const DataBundleSelectRecipient = () => {
  const { isDarkMode } = useContext(ContextProvider);
  const { toggleSideBar } = useContext(ContextProvider);
  const { networkName, setNetworkName } = useContext(ContextProvider);
  const { recipientName, setRecipientName } = useContext(ContextProvider);
  const { recipientNumber, setRecipientNumber } = useContext(ContextProvider);
  const { networkImage, setNetworkImage } = useContext(ContextProvider);

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

  const handleEdit = () => {
    setEdit(true);
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

  const handleConfirm = () => {
    setConfirm(true);
    setContinue(false);
  };

  const handleDelete = () => {
    setdeleted(true);
  };

  const handleSuccessDelete = () => {
    setSuccessDeleted(true);
    setdeleted(false);
  };

  const networkList = [
    {
      id: 1,
      name: "MTN",
      image: require("../../../../AirTimePage/Images/mtn.svg").default,
      discount: 3,
    },
    {
      id: 2,
      name: "AIRTEL",
      image: require("../../../../AirTimePage/Images/airtel.png"),
      discount: 4,
    },
    {
      id: 3,
      name: "GLO",
      image: require("../../../../AirTimePage/Images/glo.png"),
      discount: 3,
    },
    {
      id: 4,
      name: "9MOBILE",
      image: require("../../../../AirTimePage/Images/9mobile.svg").default,
      discount: 3,
    },
    {
      id: 4,
      name: "SMILE",
      image:
        require("../DataBundles/SmileDataBundle/SmileDataBundleImages/SmileLogo.svg")
          .default,
      discount: 3,
    },
    {
      id: 4,
      name: "SPECTRANET",
      image:
        require("../DataBundles/SpectranetDataBundle/SpectranetDataBundleImages/SpectranetLogo.svg")
          .default,
      discount: 3,
    },
  ];

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
    recipientNumber: Joi.string()
      .pattern(new RegExp(/^\d{11,}/))
      .required()
      .messages({
        "string.pattern.base": "Phone number should be 11 digits ",
      }),
  });

  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;

    const numericValue = value.replace(/\D/g, "").slice(0, 11);

    setInputValue(numericValue);
  };

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
              } flex flex-col justify-between`}
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
                    Top up your mobile sim with our automated data bundles
                    directly from network providers, enjoy discounts without any
                    hassle or hidden fee.
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
          <div className="flex text-[#7c7c7c] mt-[5%] text-[10px] leading-[26px] items-center gap-[8px] md:text-[12px] lg:text-[16px] 2xl:text-[20px]">
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
                  className="text-[10px] w-[100%] h-[100%] md: outline-none lg:text-[14px]"
                  type="text"
                  placeholder="Name Or Phone Number"
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
            {[0, 1, 2, 3].map((index) => (
              <div
                key={index}
                className="w-[100%] mx-auto flex justify-between border py-2 px-2 rounded-[7px] md:rounded-[7px] lg:py-2 lg:px-5"
              >
                <div className="flex flex-col my-auto gap-[1.67px] md:gap-[2.93px]">
                  <h2 className="lg:text-[16px] font-medium lg:leading-6 md:text-[12px] text-[10px]">
                    MTN(08160955592)
                  </h2>
                  <p className="lg:text-[14px] lg:font-medium lg:leading-[21.07px] text-[#7C7C7C] text-[9px] font-semibold leading-3 md:text-[10px]">
                    Aremxyplug
                  </p>
                </div>
                <div
                  onClick={() => {
                    handleRecipient(index);
                  }}
                  className="relative h-[16px] w-[16px] my-auto lg:w-[50px] lg:h-[25px]"
                >
                  <img
                    src="./Images/airtimeTopUp/Frame.png"
                    alt=""
                    className="h-full"
                  />
                  {showPopup && activeImage === index && (
                    <div
                      className="input border absolute bg-white top-[8px] right-[17px] w-[100px] h-[60px] md:h-[80px] md:w-[150px] lg:h-[90px] lg:w-[180px] lg:right-[50px] z-50 flex flex-col justify-center items-start py-[5px]"
                      style={{ boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)" }}
                    >
                      <div
                        onClick={handleEdit}
                        className="text-[10px] md:text-[14px] lg:text-[18px] text-[#7C7C7C] px-[5px] py-[5px]"
                      >
                        Edit Recipient
                      </div>
                      <hr className="w-full h-[5px]" />
                      <div
                        onClick={handleDelete}
                        className="text-[#FA6B6B] text-[10px] px-[5px] py-[5px] md:text-[14px] lg:text-[18px]"
                      >
                        Delete Recipient
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {edit && (
              <Modal>
                <div
                  className={` scroll-bar mx-[5%] ${
                    isDarkMode ? "border bg-[#000]" : "bg-[#fff]"
                  } ${
                    toggleSideBar
                      ? "confirmEdit01"
                      : "confirmEdit"
                  } grow pt-[10px] pb-[20px] rounded-tr-[8px] rounded-br-[8px] rounded-bl-[8px] rounded-tl-[8px] relative md:rounded-[11.5px] md:mx-auto md:my-auto md:overflow-auto`}
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
                        setSelected("");
                        setRecipientNumber("");
                        setRecipientName("");
                      }}
                      className=" w-[18px] h-[18px] md:w-[25px] md:h-[25px] lg:w-[29px] lg:h-[29px]"
                      src="/Images/transferImages/close-circle.png"
                      alt=""
                    />
                  </div>
                  <hr className="h-[6px] bg-[#04177f] border-none md:h-[10px]" />

                  <div className="text-center mt-[20px] font-semibold text-[10px] md:text-[14px]">
                    Edit Recipient Details
                  </div>

                  <div
                    className={`${airtimestyles.mainGrid} px-[20px] mt-[20px] flex flex-col justify-between h-[40%] lg:mt-[20px]`}
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
                          <div className="text-[10px] md:text-[14px] font-semibold text-[#7C7C7C] flex justify-between py-[8px] px-[10px]">
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

                    <div className="md:mt-[20px] mt-[10px]">
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
                            className="text-[10px] outline-none w-full md:text-[14px] font-semibold text-[#7C7C7C] flex justify-between py-[4px]"
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

                    <div className="md:mt-[20px] mt-[10px]">
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
                              className="text-[10px] md:text-[14px] outline-none w-full font-semibold text-[#7C7C7C] flex justify-between py-[4px]"
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
              </Modal>
            )}

            {continueState && (
              <Modal>
                <div
                  className={`mx-[5%] ${
                    isDarkMode ? "border bg-[#000]" : "bg-[#fff]"
                  } ${
                    toggleSideBar
                      ? "confirmEdit01"
                      : "confirmEdit"
                  } grow pt-[10px] pb-[20px] rounded-tr-[8px] rounded-tl-[8px] relative md:rounded-[11.5px] md:mx-auto md:my-auto md:overflow-auto`}
                >
                  <div className="flex justify-end items-end mx-[3%] my-[2%] lg:my-[1%] ">
                    <img
                      onClick={() => {
                        setContinue(false);
                        // window.location.reload();
                        setSelected("");
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
                        <h2 className="text-[10px] font-semibold">
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
                      Confirmed
                    </button>
                  </div>
                </div>
              </Modal>
            )}

            {confirm && (
              <Modal>
                <div
                  className={` ${
                    toggleSideBar
                    ? "confirm02"
                    : "confirm2"
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
                        window.location.reload();
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
                  toggleSideBar
                  ? "confirm02"
                  : "confirm2"
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
                    toggleSideBar
                    ? "confirm02"
                    : "confirm2"
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
                    Recipicient *****2345 has been deleted successfully. You can
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
                        window.location.reload();
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
        <div
          className={`${
            isDarkMode ? "" : ""
          } flex gap-[15px] justify-center items-center mt-[100%] pb-[25%] md:pb-[2%] md:mt-[40%] lg:mt-[40%] lg:pb-0`}
        >
          <div className="text-[10px] md:text-[12px] lg:text-[14px]">
            You need help ?
          </div>
          <Link to="/ContactUs">
            <div
              className={`${
                isDarkMode ? "border" : "bg-[#04177f]"
              } text-[10px] p-1 text-white rounded-[8px] lg:text-[18px]`}
            >
              Contact Us
            </div>
          </Link>
        </div>
      </div>
    </DashBoardLayout>
  );
};

export default DataBundleSelectRecipient;
