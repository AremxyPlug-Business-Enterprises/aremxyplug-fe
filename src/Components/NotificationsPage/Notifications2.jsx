import React, { useEffect, useReducer, useRef, useState } from "react";
import { DashBoardLayout } from "../Dashboard/Layout/DashBoardLayout";
import stack from "./assets/stack.svg";
import starbox from "./assets/startbox.svg";
import arrangebox from "./assets/arrangebox.svg";
import wallet from "./assets/walletbox.svg";
import cards from "./assets/cardbox.svg";
import charts from "./assets/chartbox.svg";
import { Link } from "react-router-dom/dist/react-router-dom.development";
import "./Notifications.css";
import faq from "./assets/faq.svg";
import file from "./assets/file.svg";
import folder from "./assets/folder.svg";
import envelope from "./assets/envelope.svg";
import bin from "./assets/bin.svg";
import style from "../../Components/AirTimePage/AirtimeVtu.module.css";
import deletingfiles from "./assets/deletingfile.svg";
import SuccessGif from "../../Components/Dashboard/DashboardComponents/CardPaymentPage/CardPaymentImages/success.gif";
import { Modal } from "../Screens/Modal/Modal";
import { useContext } from "react";
import { ContextProvider } from "../Context";

const Notifications = [
  {
    title: "General",
    image: starbox,
    number: 6,
    notifications: [
      {
        hook: "New Launch!!",
        title:
        (
          <div>
            We are excited to launch our global platform for all
            <br />
            things telecom, payments, and Digital services.
          </div>
        ),
        time: "August 10th, 2023 12 :00:00am",
        link: "Learn more...",
        image: faq,
        read: false,
        linkTo: "/launch-page",
      },
      {
        hook: "New Launch!!",
        title:
        (
          <div>
            We are excited to launch our global platform for all
            <br />
            things telecom, payments, and Digital services.
          </div>
        ),
        time: "August 10th, 2023 12 :00:00am",
        link: "Learn more...",
        image: faq,
        read: false,
        linkTo: "/launch-page",
      },
      {
        hook: "New Launch!!",
        title:
        (
          <div>
            We are excited to launch our global platform for all
            <br />
            things telecom, payments, and Digital services.
          </div>
        ),
        time: "August 10th, 2023 12 :00:00am",
        link: "Learn more...",
        image: faq,
        read: false,
        linkTo: "/launch-page",
      },
      {
        hook: "New Launch!!",
        title:
        (
          <div>
            We are excited to launch our global platform for all
            <br />
            things telecom, payments, and Digital services.
          </div>
        ),
        time: "August 10th, 2023 12 :00:00am",
        link: "Learn more...",
        image: faq,
        read: false,
        linkTo: "/launch-page",
      },
      {
        hook: "New Launch!!",
        title:
        (
          <div>
            We are excited to launch our global platform for all
            <br />
            things telecom, payments, and Digital services.
          </div>
        ),
        time: "August 10th, 2023 12 :00:00am",
        link: "Learn more...",
        image: faq,
        read: false,
        linkTo: "/launch-page",
      },
      {
        hook: "New Launch!!",
        title:
        (
          <div>
            We are excited to launch our global platform for all
            <br />
            things telecom, payments, and Digital services.
          </div>
        ),
        time: "August 10th, 2023 12 :00:00am",
        link: "Learn more...",
        image: faq,
        read: false,
        linkTo: "/launch-page",
      },
    ],
  },
  {
    title: "Telecom",
    image: arrangebox,
    number: 5,
    notifications: [
      {
        hook: "New Launch!!",
        title:
        (
          <div>
            We are excited to launch our Airtime Top-up and Data Top-up features
            <br />
            for all local networks including MTN, AIRTEL, GLO, and 9MOBILE.
          </div>
        ),
        time: "August 10th, 2023 12 :00:00am",
        link: "Buy Now...",
        image: file,
        read: false,
        linkTo: "/launch-page2",
      },
      {
        hook: "New Launch!!",
        title:
        (
          <div>
            We are excited to launch our Airtime Top-up and Data Top-up features
            <br />
            for all local networks including MTN, AIRTEL, GLO, and 9MOBILE.
          </div>
        ),
        time: "August 10th, 2023 12 :00:00am",
        link: "Buy Now...",
        image: file,
        read: false,
        linkTo: "/launch-page2",
      },
      {
        hook: "New Launch!!",
        title:
        (
          <div>
            We are excited to launch our Airtime Top-up and Data Top-up features
            <br />
            for all local networks including MTN, AIRTEL, GLO, and 9MOBILE.
          </div>
        ),
        time: "August 10th, 2023 12 :00:00am",
        link: "Buy Now...",
        image: file,
        read: false,
        linkTo: "/launch-page2",
      },
      {
        hook: "New Launch!!",
        title:
        (
          <div>
            We are excited to launch our Airtime Top-up and Data Top-up features
            <br />
            for all local networks including MTN, AIRTEL, GLO, and 9MOBILE.
          </div>
        ),
        time: "August 10th, 2023 12 :00:00am",
        link: "Buy Now...",
        image: file,
        read: false,
        linkTo: "/launch-page2",
      },
      {
        hook: "New Launch!!",
        title:
        (
          <div>
            We are excited to launch our Airtime Top-up and Data Top-up features
            <br />
            for all local networks including MTN, AIRTEL, GLO, and 9MOBILE.
          </div>
        ),
        time: "August 10th, 2023 12 :00:00am",
        link: "Buy Now...",
        image: file,
        read: false,
        linkTo: "/launch-page2",
      },
    ],
  },
  {
    title: "Payments",
    image: wallet,
    number: 5,
    notifications: [
      {
        hook: "New Launch!!",
        title:
        (
          <div>
            We are excited to launch our Local Money Transfer product with features like
            <br />
            Transfer to Personal Account, and Transfer to any Nigerian Bank Account.
          </div>
        ),
        time: "August 10th, 2023 12 :00:00am",
        link: "Transfer Money...",
        image: folder,
        read: false,
        linkTo: "/launch-page3",
      },
      {
        hook: "New Launch!!",
        title:
        (
          <div>
            We are excited to launch our Local Money Transfer product with features like
            <br />
            Transfer to Personal Account, and Transfer to any Nigerian Bank Account.
          </div>
        ),
        time: "August 10th, 2023 12 :00:00am",
        link: "Transfer Money...",
        image: folder,
        read: false,
        linkTo: "/launch-page3",
      },
      {
        hook: "New Launch!!",
        title:
        (
          <div>
            We are excited to launch our Local Money Transfer product with features like
            <br />
            Transfer to Personal Account, and Transfer to any Nigerian Bank Account.
          </div>
        ),
        time: "August 10th, 2023 12 :00:00am",
        link: "Transfer Money...",
        image: folder,
        read: false,
        linkTo: "/launch-page3",
      },
      {
        hook: "New Launch!!",
        title:
        (
          <div>
            We are excited to launch our Local Money Transfer product with features like
            <br />
            Transfer to Personal Account, and Transfer to any Nigerian Bank Account.
          </div>
        ),
        time: "August 10th, 2023 12 :00:00am",
        link: "Transfer Money...",
        image: folder,
        read: false,
        linkTo: "/launch-page3",
      },
      {
        hook: "New Launch!!",
        title:
        (
          <div>
            We are excited to launch our Local Money Transfer product with features like
            <br />
            Transfer to Personal Account, and Transfer to any Nigerian Bank Account.
          </div>
        ),
        time: "August 10th, 2023 12 :00:00am",
        link: "Transfer Money...",
        image: folder,
        read: false,
        linkTo: "/launch-page3",
      },
    ],
  },
  {
    title: "Digital Services",
    image: cards,
    number: 0,
    notifications: {
      image: "./Images/Dashboardimages/noTransactionFound.png"
    },
  },
  {
    title: "Reports",
    image: charts,
    number: 0,
    notifications: {
      image: "./Images/Dashboardimages/noTransactionFound.png"
    },
  },
];

export default function NotificationsPage2() {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  const [showOptions, setShowOptions] = useState(false);
  const optionsRef = useRef(null);
  const optionsTriggerRef = useRef(null);
  const unreadOptionRef = useRef(null);
  const readOptionRef = useRef(null);
  const deleteOptionRef = useRef(null);
  const [isOpen, setIsOpen] = useState(() => {
    // Get the initial state from local storage or set to false
    const savedIsOpen = localStorage.getItem("isOpen");
    return savedIsOpen !== null ? JSON.parse(savedIsOpen) : 0;
  });

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click was on the options trigger
      if (
        optionsTriggerRef.current &&
        optionsTriggerRef.current.contains(event.target)
      ) {
        return;
      }

      // Check if the click was on any of the options
      if (
        unreadOptionRef.current &&
        unreadOptionRef.current.contains(event.target)
      ) {
        return;
      }

      if (
        readOptionRef.current &&
        readOptionRef.current.contains(event.target)
      ) {
        return;
      }

      if (
        deleteOptionRef.current &&
        deleteOptionRef.current.contains(event.target)
      ) {
        return;
      }

      if (optionsRef.current && !optionsRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    };

    document.addEventListener("mouseup", handleClickOutside);
    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Save the isOpen state to local storage whenever it changes
    localStorage.setItem("isOpen", JSON.stringify(isOpen));
  }, [isOpen]);

  function handleClick() {
    forceUpdate();
  }

  const handleSuccessDelete = () => {
    setSuccessDeleted(true);
    setdeleted(false);
  };
  const handleSuccessDeletes = () => {
    setSuccessDeleteds(true);
    setdeleteds(false);
  };

  const handleDelete = () => {
    setdeleted(true);
  };
  const handleDeletes = () => {
    setdeleteds(true);
  };

  const [deleted, setdeleted] = useState(false);
  const [deleteds, setdeleteds] = useState(false);
  const [successDeleted, setSuccessDeleted] = useState(false);
  const [successDeleteds, setSuccessDeleteds] = useState(false);

  const { toggleSideBar, isDarkMode } = useContext(ContextProvider);
  

  return (
    <DashBoardLayout>
      <div className={style.AirtimeTops}>
        <div className={style.airtimeTop}>
          {/* Hero Section */}
          <div className="w-full h-[90px] md:h-[112.29px] lg:h-[196px] rounded-[7px] md:rounded-[11.5px] bg-gradient-to-r from-indigo-300 via-fuchsia-500 to-rose-500 flex px-[16px] lg:px-[50px] justify-between items-center lg:rounded-[20px]">
            <div className="py-[13px] mt-2 lg:py-[40px]">
              <h2 className="text-[10px] mb-2 font-bold uppercase w-[110%] md:text-[12px] md:w-[70%] lg:w-[70%] lg:text-[20px]  2xl:w-[80%] 2xl:text-[24px] lg:mb-4">
                GET NOTIFIED AND STAY UP TO DATE WITH <br /> AREMXYPLUG.
              </h2>
              <h2 className="text-[7px] font-[400] leading-[9px] mb-3 md:text-[9px] md:leading-[12.2px] w-[100%] md:w-[80%] lg:w-[75%] 2xl:w-[85%] 2xl:mt-[5px] lg:mt-[20px] lg:text-[16px] lg:leading-[26px] 2xl:text-[20px] lg:mb-[20px]">
                Be extraordinaire updated, never miss out on any of our official
                updates, trends, news, announcements, and opportunities.
              </h2>
            </div>
            <div className="md:w-24 md:h-16 w-14 h-10 lg:w-44 lg:h-28">
              <img
                src={stack}
                alt=""
                className="md:w-24 md:h-16 w-14 h-10 lg:w-44 lg:h-28 "
              />
            </div>
          </div>

          <div className="flex flex-col relative">
            {/* Notification Heading Section */}
            <div className="Frame758532592 w-full justify-between gap-3 flex">
              {Notifications.map((notification, index) => (
                <div
                  onClick={() => setIsOpen(index)}
                  className="flex flex-col"
                  key={index}
                >
                  <div className="cursor-pointer relative">
                    <img
                      className="lg:w-32  lg:h-28 md:w-20 md:h-16 w-14 h-12  flex"
                      src={notification.image}
                      alt=""
                    />
                    {isOpen === index ? (
                      <div className="Group13108 lg:w-5 lg:h-5 lg:mt-[-109px] lg:ml-[107px] md:mt-[-61px] md:ml-[67px] mt-[-46px] ml-[45px] flex flex-col ">
                        {notification.notifications.length > 0 && (
                          <div className="absolute right-1 top-1">
                            <div className="Ellipse147 relative lg:w-5 lg:h-5 w-[9px] h-[9px]  bg-red-400 rounded-full">
                              <div className="absolute top-1/2 right-1/2 translate-x-1/2 translate-y-[55%] lg:ml-[6px] lg:mt-[-17px] mt-[-8px] ml-[4px] md:ml-[3px] text-white lg:text-xs text-[5px] font-semibold font-['Poppins']">
                                {notification.notifications.length}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                  {isOpen === index && (
                    <div className="w-[55px] h-px bg-[#04177f] rounded-[5.87px] lg:w-[127px] lg:h-[2px] lg:mt-[145px]  md:w-[79px] mt-[69.555px] md:mt-[92.255px] lg:rounded-[10px]" />
                  )}
                </div>
              ))}
            </div>

            {/* Notification Divider */}
            <div className=" lg:w-full lg:h-[2px] absolute w-full md:w-full h-px top-[70px] md:top-[96px]  left-[3px] bg-[#d9d9d999] lg:top-[168px] lg:left-[2px] md:left-[5px] lg:rounded-[10px] rounded-[5.87px]"></div>

            {/* Notification Section */}
            {isOpen != null && Notifications[isOpen].notifications.length > 0 && (
              <div className="flex flex-col relative w-full lg:w-full md:w-full mt-[50px] lg:mt-[100px] md:mt-[70px] md:gap-[45px] lg:gap-10 gap-[20.64px] ">
                <div className="flex  lg:gap-[35px] lg:mt-[-80px] mt-[-40px] gap-[15px] md:gap-[25px] md:mt-[-60px] justify-end items-end  ">
                  {Notifications[isOpen].notifications.length > 0 &&
                  Notifications[isOpen].notifications.every(
                    (notification) => notification.read
                  ) ? (
                    <div
                      className="flex flex-col lg:w-[187px] cursor-pointer items-start lg:gap-[7px] lg:p-[8px] bg-white border-neutral-400 lg:rounded-[6px] lg:border-[0.2px] border-solid p-1 w-24 md:w-[120px]   border shadow  rounded gap-1.5 lg:shadow-[0px_0px_1px_#00000040]"
                      onClick={() => {
                        Notifications[isOpen].notifications.forEach((item) => {
                          item.read = false;
                        });
                        handleClick();
                      }}
                    >
                      <div className="flex lg:w-[171px] items-center lg:gap-[14px] gap-2  flex-[0_0_auto]">
                        <img
                          className=" lg:w-[24px] lg:h-[18.67px] md:w-[14px] md:h-[11px] w-[10px] h-[8px]"
                          alt="Vector"
                          src={envelope}
                        />
                        <div className="lg:w-[133px] w-[67px] md:w-[78px] mt-[-1.00px] font-medium text-zinc-500  text-text-color-fade lg:text-[15px] tracking-[0] text-[7px] md:text-[9px] whitespace-nowrap leading-[normal]">
                          Mark all as Unread
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div
                      className="flex flex-col lg:w-[187px]  cursor-pointer items-start lg:gap-[10px] lg:p-[8px] bg-white border-neutral-400 lg:rounded-[6px] lg:border-[0.2px] border-solid p-1 w-24 md:w-[120px]   border shadow rounded gap-1.5 lg:shadow-[0px_0px_1px_#00000040]"
                      onClick={() => {
                        Notifications[isOpen].notifications.forEach((item) => {
                          item.read = true;
                        });
                        handleClick();
                      }}
                    >
                      <div className="flex lg:w-[171px] items-center lg:gap-[14px] gap-2  flex-[0_0_auto]">
                        <img
                          className=" lg:w-[24px] lg:h-[18.67px] md:w-[14px] md:h-[11px] w-[10px] h-[8px]"
                          alt="Vector"
                          src={envelope}
                        />
                        <div className="lg:w-[133px] w-[67px] md:w-[78px] mt-[-1.00px] font-medium text-zinc-500  text-text-color-fade lg:text-[15px] tracking-[0] text-[7px] md:text-[9px] leading-[normal]">
                          Mark all as Read
                        </div>
                      </div>
                    </div>
                  )}

                  {Notifications[isOpen].notifications.length > 0 && (
                    <div
                      onClick={() => {
                        handleDelete();
                      }}
                      className="flex items-center lg:gap-[14px] cursor-pointer    lg:p-[8px] flex-[0_0_auto] bg-white lg:rounded-[6px]  border-red-500  lg:border-[0.2px] border-solid border-variable-collection- text-danger p-1 rounded shadow border gap-2 lg:shadow-[0px_0px_1px_#00000040]"
                    >
                      <img
                        className=" lg:w-[16px] lg:h-[20.57px] w-[8px] h-[9px] md:w-[9px] md:h-[12px]"
                        alt="Vector"
                        src={bin}
                      />
                      <div className=" lg:w-fit w-[38px]  md:w-[44px] mt-[-0.20px] font-medium text-variable-collection-text-danger text-red-500 lg:text-[15px] text-[7px] md:text-[9px] tracking-[0] leading-[normal]">
                        Delete all
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {isOpen != null && (
              <div>
                {Notifications.map((notification, index) => (
                  <div key={index}>
                    {isOpen === index && (
                      <div className="flex flex-col lg:gap-7 gap-3 md:gap-5">
                        {notification.notifications.length ? (
                          notification.notifications.map(
                            (notification, index) => (
                              <div
                                id="colorReset"
                                className={`flex justify-between  items-center w-full  border-b lg:h-[230px] h-[100px] md:h-[150px] lg:p-5 p-[7px] md:p-3 rounded-md md:rounded-md lg:rounded-xl shadow  border-[#d9d9d999]  ${
                                  notification.read ? "bg-white" : "bg-sky-100"
                                }`}
                                key={index}
                              >
                                <div className="w-full" onClick={() => {
                                  Notifications[
                                    isOpen
                                  ].notifications[
                                    index
                                  ].read = true;
                                  handleClick();
                                }}
                                >
                                  <Link to={notification.linkTo}>
                                    <div className="w-7/12 flex flex-wrap gap-2 lg:gap-4 md:gap-2.5 justify-start text-start flex-col">
                                      <div className="font-semibold text-text-color-fade text-zinc-500 lg:text-base md:text-xs  text-[6.5px] md:text-[10px] lg:text-[10px] ">
                                        {notification.hook}
                                      </div>
                                      <p className="font-bold text-wrap text-zinc-500 text-color-fade md:text-xs text-[6.5px] md:text-[10px] lg:text-[10px] lg:text-lg whitespace-nowrap tracking-[0] leading-[normal] line-clamp-2 text-ellipsis">
                                        {notification.title}
                                      </p>
                                      <p className="font-medium text-[#9c9c9c] md:text-xs md:font-medium text-[8px] lg:text-xs tracking-[0.09px] leading-[normal]">
                                        {notification.time}
                                      </p>
                                      <div className="font-semibold text-main md:text-xs md:font-semibold text-[8px] lg:text-sm text-blue-900 tracking-[0] leading-[normal]">
                                        {notification.link}
                                      </div>
                                    </div>
                                  </Link>
                                </div>

                                <div className="flex lg:gap-4 md:gap-3 gap-2 justify-between">
                                  <Link to={notification.linkTo}>
                                    <div className="flex flex-col">
                                      <img
                                        className="lg:w-[150px] relative lg:h-[150px] mt-[5px] w-[50px] h-[50px] md:w-[100px] flex justify-center  md:h-[100px]"
                                        src={notification.image}
                                        alt={notification.title}
                                      />
                                    </div>
                                  </Link>

                                  {/* Options */}
                                  <div className="flex justify-end  items-center lg:gap-[65px] md:gap-[40px] gap-[30px] flex-col-reverse">
                                    <div
                                      className="flex relative"
                                      ref={optionsRef}
                                    >
                                      {showOptions === index && (
                                        <div className="Frame758532672 absolute w-[100px] md:w-[180px] lg:w-[190px]  shadow flex-col top-[7px] md:top-[5px] left-[-100px] md:left-[-182px] lg:left-[-191px] lg:top-[10px] justify-start items-start flex">
                                          {notification.read ? (
                                            <div
                                              ref={unreadOptionRef}
                                              onClick={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                Notifications[
                                                  isOpen
                                                ].notifications[
                                                  index
                                                ].read = false;
                                                setShowOptions(false);
                                              }}
                                              className="Frame758532670 px-4 py-1 bg-white cursor-pointer border-b border-neutral-400 lg:w-[190px] w-[100px] md:w-[180px] h-[23px] justify-center md:h-[40px] lg:h-[41px] items-center gap-1.5 flex"
                                            >
                                              <div className="MarkAsRead text-zinc-500 text-[8px] md:text-xs font-normal lg:text-sm whitespace-nowrap ">
                                                Mark as unread
                                              </div>
                                            </div>
                                          ) : (
                                            <div
                                              ref={readOptionRef}
                                              onClick={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                Notifications[
                                                  isOpen
                                                ].notifications[
                                                  index
                                                ].read = true;
                                                setShowOptions(false);
                                              }}
                                              className="Frame758532670 px-4 py-1 bg-white cursor-pointer border-b border-neutral-400 lg:w-[190px] w-[100px] md:w-[180px] h-[23px] justify-center md:h-[40px] lg:h-[41px] items-center gap-1.5 flex"
                                            >
                                              <div className="MarkAsRead text-zinc-500 text-[8px] md:text-xs font-normal lg:text-sm whitespace-nowrap ">
                                                Mark as read
                                              </div>
                                            </div>
                                          )}

                                          <div
                                            ref={deleteOptionRef}
                                            onClick={(e) => {
                                              e.preventDefault();
                                              e.stopPropagation();
                                              setShowOptions(false);
                                              handleDeletes();
                                            }}
                                            className="Frame758532672 px-4 py-1 bg-white h-[23px] cursor-pointer lg:h-[41px] md:h-[40px] lg:w-[190px] w-[100px] md:w-[180px] border-b justify-center items-center gap-1.5 flex"
                                          >
                                            <div className="Delete text-red-500 text-[8px] md:text-xs lg:text-sm font-normal ">
                                              Delete
                                            </div>
                                          </div>
                                        </div>
                                      )}

                                      {/* Options trigger */}
                                      <div
                                        className="Frame758532418 cursor-pointer flex-col justify-center items-start gap-0.5 flex"
                                        onClick={(e) => {
                                          e.preventDefault();
                                          e.stopPropagation();
                                          setShowOptions(index);
                                        }}
                                        ref={optionsTriggerRef}
                                      >
                                        <div className="Ellipse141 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                                        <div className="Ellipse142 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                                        <div className="Ellipse143 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                                      </div>
                                    </div>
                                    <div
                                      className={`Ellipse147 w-1.5 h-1.5 md:w-3 md:h-3 lg:mt-[-25px] md:mt-[-10px] mt-[-15px] lg:w-5 lg:h-5 flex  bg-red-400 rounded-full ${
                                        notification.read
                                          ? "bg-white"
                                          : "bg-red-400"
                                      }`}
                                    />
                                  </div>
                                </div>
                              </div>
                            )
                          )) : (
                            <div
                              id="colorReset"
                              className="mt-[100px] text-center mx-auto flex flex-col gap-5"
                            >
                              <div className="w-full mx-auto text-center">
                                <img
                                  className="lg:w-[500px] relative lg:h-[500px] w-[150px] h-[150px] md:w-[300px] flex justify-center md:h-[300px] text-center mx-auto"
                                  src="./Images/Dashboardimages/noTransactionFound.png"
                                  alt={notification.title}
                                />
                              </div>
                              <div
                                className={`${
                                  isDarkMode ? "" : "text-[#0003]"
                                } text-lg   text-opacity-30 mt-[-20px] lg:text-2xl  font-semibold `}
                              >
                                No Notification Found !
                              </div>
                            </div>
                          )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
          {deleted && (
              <Modal>
                <div
                  className={`${style.inputPin} ${
                    toggleSideBar
                    ? "md:w-[45%] lg:w-[40%] lg:ml-[20%]" : "lg:w-[40%]"
                  } md:w-[55%] w-[90%]`}
                >
                  <div className="flex justify-between items-center mx-[3%] my-[2%] lg:my-[2%]">
                    <img
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

                  <hr className="h-[6px] bg-[#04177f] lg:mt-[2%] border-none mt-[2%] md:mt-[2%] md:h-[10px]" />
                  <p className="text-[10px] md:text-[14px] lg:text-[18px] font-extrabold text-center my-[3%] lg:my-[%]">
                    Are you sure you want to delete all notifications?
                  </p>
                  <div className="flex flex-col gap-[10px] justify-center items-center font-extrabold mt-[6%] mb-[2%]">
                    <img
                      className="w-[70px] h-[70px] mx-auto lg:w-[120px] lg:h-[120px]"
                      src={deletingfiles}
                      alt="/"
                    />
                  </div>

                  <div
                    className={`w-full h-[38px] mt-[40px] px-[20px] flex md:mx-[10%]`}
                  >
                    <button
                      className={`bg-[#04177F] w-full flex justify-center items-center mr-auto cursor-pointer text-[14px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[20px] lg:text-[16px] lg:h-[38px] lg:my-[4%]`}
                      onClick={() => {
                        Notifications[isOpen].notifications = [];
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
          {deleteds && (
              <Modal>
                <div
                  className={`${style.inputPin} ${
                    toggleSideBar
                    ? "md:w-[45%] lg:w-[40%] lg:ml-[20%]" : "lg:w-[40%]"
                  } md:w-[55%] w-[90%]`}
                >
                  <div className="flex justify-between items-center mx-[3%] my-[2%] lg:my-[2%]">
                    <img
                      className=" w-[18px] h-[15px] md:w-[25px] md:h-[22px] lg:w-[25px] lg:h-[12px]"
                      src="/Images/login/arpLogo.png"
                      alt=""
                    />

                    <img
                      onClick={() => {
                        setdeleteds(false);
                      }}
                      className="absolute cursor-pointer right-2 w-[18px] h-[18px] my-[1%] md:w-[35px] md:h-[25px] lg:w-[25px] lg:h-[25px] "
                      src="/Images/transferImages/close-circle.png"
                      alt=""
                    />
                  </div>

                  <hr className="h-[6px] bg-[#04177f] lg:mt-[2%] border-none mt-[2%] md:mt-[2%] md:h-[10px]" />
                  <p className="text-[10px] md:text-[14px] lg:text-[18px] font-extrabold text-center my-[3%] lg:my-[%]">
                    Are you sure you want to delete this notification?
                  </p>
                  <div className="flex flex-col gap-[10px] justify-center items-center font-extrabold mt-[6%] mb-[2%]">
                    <img
                      className="w-[70px] h-[70px] mx-auto lg:w-[120px] lg:h-[120px]"
                      src={deletingfiles}
                      alt="/"
                    />
                  </div>

                  <div
                    className={`w-full h-[38px] mt-[40px] px-[20px] flex md:mx-[10%]`}
                  >
                    <button
                      className={`bg-[#04177F] w-full flex justify-center items-center mr-auto cursor-pointer text-[14px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[20px] lg:text-[16px] lg:h-[38px] lg:my-[4%]`}
                      onClick={(index) => {
                        Notifications[
                          isOpen
                        ].notifications.splice(index, 1);
                        handleSuccessDeletes();
                      }}
                    >
                      Yes
                    </button>
                    <button
                      className={`bg-[#fff] w-full flex justify-center items-center mr-auto cursor-pointer text-[14px] font-extrabold h-[40px] text-[#F95252] rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[20px] lg:text-[16px] lg:h-[38px] lg:my-[4%]`}
                      onClick={() => {
                        setdeleteds(false);
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
                    ? "md:w-[45%] lg:w-[40%] lg:ml-[20%]" : "lg:w-[40%]"
                  } md:w-[55%] w-[90%]`}
                >
                  <div className="flex justify-between items-center mx-[3%] my-[2%] lg:my-[2%]">
                    <img
                      onClick={() => {
                        setSuccessDeleted(false);
                      }}
                      className=" w-[18px] h-[15px] md:w-[35px] md:h-[32px] lg:w-[25px] lg:h-[12px]"
                      src="/Images/login/arpLogo.png"
                      alt=""
                    />

                    <img
                      onClick={() => {
                        setSuccessDeleted(false);
                      }}
                      className="absolute cursor-pointer right-2 w-[18px] h-[18px] my-[1%] md:w-[35px] md:h-[25px] lg:w-[25px] lg:h-[25px] "
                      src="/Images/transferImages/close-circle.png"
                      alt=""
                    />
                  </div>

                  <hr className="h-[6px] bg-[#04177f] lg:mt-[2%] border-none mt-[2%] md:mt-[2%] md:h-[10px]" />
                  <p className="text-[10px] md:text-[16px] lg:text-[18px] font-extrabold text-center my-[3%] lg:my-[%]">
                    Successful
                  </p>
                  <p className="text-[10px] text-[#00AA48] md:text-[14px] px-[20px] lg:text-[18px] font-extrabold text-center my-[1%] lg:my-[%]">
                    All notifications have been deleted successfully.
                  </p>
                  <div className="flex flex-col gap-[10px] justify-center items-center font-extrabold mb-[5%]">
                    <img
                      className="w-[50px] h-[50px] mx-auto mb-[2%] lg:w-[120px] lg:h-[120px]"
                      src={SuccessGif}
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
            {successDeleteds && (
              <Modal>
                <div
                  className={`confirm2 ${style.inputPin} ${
                    toggleSideBar
                    ? "md:w-[45%] lg:w-[40%] lg:ml-[20%]" : "lg:w-[40%]"
                  } md:w-[55%] w-[90%]`}
                >
                  <div className="flex justify-between items-center mx-[3%] my-[2%] lg:my-[2%]">
                    <img
                      onClick={() => {
                        setSuccessDeleteds(false);
                      }}
                      className=" w-[18px] h-[15px] md:w-[35px] md:h-[32px] lg:w-[25px] lg:h-[12px]"
                      src="/Images/login/arpLogo.png"
                      alt=""
                    />

                    <img
                      onClick={() => {
                        setSuccessDeleteds(false);
                      }}
                      className="absolute cursor-pointer right-2 w-[18px] h-[18px] my-[1%] md:w-[35px] md:h-[25px] lg:w-[25px] lg:h-[25px] "
                      src="/Images/transferImages/close-circle.png"
                      alt=""
                    />
                  </div>

                  <hr className="h-[6px] bg-[#04177f] lg:mt-[2%] border-none mt-[2%] md:mt-[2%] md:h-[10px]" />
                  <p className="text-[10px] md:text-[16px] lg:text-[18px] font-extrabold text-center my-[3%] lg:my-[%]">
                    Successful
                  </p>
                  <p className="text-[10px] text-[#00AA48] md:text-[14px] px-[20px] lg:text-[18px] font-extrabold text-center my-[1%] lg:my-[%]">
                    This notification has been deleted successfully.
                  </p>
                  <div className="flex flex-col gap-[10px] justify-center items-center font-extrabold mb-[5%]">
                    <img
                      className="w-[50px] h-[50px] mx-auto mb-[2%] lg:w-[120px] lg:h-[120px]"
                      src={SuccessGif}
                      alt="/"
                    />
                  </div>

                  <div
                    className={`w-full h-[38px] mt-[40px] px-[20px] md:mx-[35%] md:mt-[10px]`}
                  >
                    <button
                      className={`bg-[#04177F] w-full flex justify-center items-center mr-auto cursor-pointer text-[14px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[20px] lg:text-[16px] lg:h-[38px] lg:my-[4%]`}
                      onClick={() => {
                        setSuccessDeleteds(false);
                      }}
                    >
                      Done
                    </button>
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
  );
}
