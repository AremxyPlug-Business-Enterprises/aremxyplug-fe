import React, { useState } from "react";
import { DashBoardLayout } from "../Dashboard/Layout/DashBoardLayout";
import stack from "./assets/stack.svg";
import starbox from "./assets/startbox.svg";
import arrangebox from "./assets/arrangebox.svg";
import wallet from "./assets/walletbox.svg";
import cards from "./assets/cardbox.svg";
import charts from "./assets/chartbox.svg";
import { Link } from "react-router-dom/dist/react-router-dom.development";
import styles from "../Dashboard/DashboardComponents/./component.module.css";
import { useContext } from "react";
import { ContextProvider } from "../Context";
import "./Notifications.css";
import faq from "./assets/faq.svg";
import file from "./assets/file.svg";
import folder from "./assets/folder.svg";
import five from "./assets/five.svg";
import envelope from "./assets/envelope.svg";
import bin from "./assets/bin.svg";
import deletingfiles from "./assets/deletingfile.svg";
import VuesaxBoldEye from "./assets/cancel.svg";
import { Modal } from "../Screens/Modal/Modal";
import SuccessGif from "../../Components/Dashboard/DashboardComponents/CardPaymentPage/CardPaymentImages/success.gif";
import style from "../../Components/AirTimePage/AirtimeVtu.module.css";





export default function NotificationsPage() {
  


 const [isOpen1, setIsOpen1] = useState(true);   
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen8, setIsOpen8] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen9, setIsOpen9] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen10, setIsOpen10] = useState(false);
  const [isOpen11, setIsOpen11] = useState(false);
  const [isOpen12, setIsOpen12] = useState(false);
  const [isOpen13, setIsOpen13] = useState(false);
  const [isOpen14, setIsOpen14] = useState(false);
  const [isOpen15, setIsOpen15] = useState(false);
  const [isOpen16, setIsOpen16] = useState(false);
  const [isOpen17, setIsOpen17] = useState(false);
  const [isOpen18, setIsOpen18] = useState(false);
  const [isOpen19, setIsOpen19] = useState(false);
  const [isOpen20, setIsOpen20] = useState(false);
  const [isOpen21, setIsOpen21] = useState(false);

  const { isDarkMode, toggleSideBar } = useContext(ContextProvider);



const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [showSuccessMessage1, setShowSuccessMessage1] = useState(false);


  const openModal1 = () => {
    setIsModalOpen1(true);
  };

  const closeModal1 = () => {
    setIsModalOpen1(false);
  };

      const handleDelete1 = () => {
      setFinalDelete(false);
      setFinalDelete1(false);
      setFinalDelete2(false);
      setFinalDelete3(false);
      setFinalDelete4(false);
      setFinalDelete5(false);
      setFinalDelete6(false);
      setFinalDelete7(false);


      setIsModalOpen1(false); // Close the modal immediately
      setShowSuccessMessage1(true);
      
    };

    const [isModalOpen2, setIsModalOpen2] = useState(false);
    const [showSuccessMessage2, setShowSuccessMessage2] = useState(false);
          
          const [deleteAll, setDeleteAll ] = useState(true);

  
  
    const openModal2 = () => {
      setIsModalOpen2(true);
    };
  
    const closeModal2 = () => {
      setIsModalOpen2(false);
    };
  
        const handleDelete2 = () => {
          setDeleteAll(false)
  
  
        setIsModalOpen2(false); // Close the modal immediately
        setShowSuccessMessage2(true);
      };

      const [isModalOpen3, setIsModalOpen3] = useState(false);
      const [showSuccessMessage3, setShowSuccessMessage3] = useState(false);
            
            const [deleteAll1, setDeleteAll1 ] = useState(true);
  
    
    
      const openModal3 = () => {
        setIsModalOpen3(true);
      };
    
      const closeModal3 = () => {
        setIsModalOpen3(false);
      };
    
          const handleDelete3 = () => {
            setDeleteAll1(false)
    
    
          setIsModalOpen3(false); // Close the modal immediately
          setShowSuccessMessage3(true);
        };
  
  const [isModalOpen, setIsModalOpen] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [finalDelete, setFinalDelete] = useState(true);
    const [finalDelete1, setFinalDelete1] = useState(true);
    const [finalDelete2, setFinalDelete2] = useState(true);
    const [finalDelete3, setFinalDelete3] = useState(true);
    const [finalDelete4, setFinalDelete4] = useState(true);
    const [finalDelete5, setFinalDelete5] = useState(true);
    const [finalDelete6, setFinalDelete6] = useState(true);
    const [finalDelete7, setFinalDelete7] = useState(true);


  
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    // const handleDelete = () => {
      // setFinalDelete(false);
      // setFinalDelete1(false);
      // setFinalDelete2(false);
      // setFinalDelete3(false);
      // setFinalDelete4(false);
      // setFinalDelete5(false);
      const handleDelete = (deleteType) => {
        if (deleteType === 'finalDelete') {
          setFinalDelete(false);
          setFinalDelete1(true); 
          setFinalDelete2(true);
          setFinalDelete3(true);
          setFinalDelete4(true);
          setFinalDelete5(true);
    // Ensure finalDelete1 is true if finalDelete is set to false
        } else if (deleteType === 'finalDelete1') {
          setFinalDelete1(false);
          setFinalDelete(true); 
          setFinalDelete2(true);
          setFinalDelete3(true);
          setFinalDelete4(true);
          setFinalDelete5(true);
// Ensure finalDelete is true if finalDelete1 is set to false
        }
      setIsModalOpen(false); // Close the modal immediately
      setShowSuccessMessage(true);
    };

    const [showPicture, setShowPicture] = useState(false);
    const [showPicture1, setShowPicture1] = useState(false);
    const [showPicture2, setShowPicture2] = useState(false);




    const [isRead, setIsRead] = useState(false);
    

  const handleClick = () => {
    setIsRead(!isRead);
    this.props.history.push('/LaunchPage.jsx'); // Navigate to another page
  };

  const [isRead1, setIsRead1] = useState(false);


  
  const handleClick1 = () => {
    setIsRead1(!isRead1);
  };
  
  const [isRead2, setIsRead2] = useState(false);

  const handleClick2 = () => {
    setIsRead2(!isRead2);
  };

  const [isRead3, setIsRead3] = useState(false);

  const handleClick3 = () => {
    setIsRead3(!isRead3);
  };

  const [isRead4, setIsRead4] = useState(false);

  const handleClick4 = () => {
    setIsRead4(!isRead4);
  };
  const [isRead5, setIsRead5] = useState(false);

  const handleClick5 = () => {
    setIsRead5(!isRead5);
  };



  const [isRead7, setIsRead7] = useState(false);

  const handleClick7 = () => {
    setIsRead7(!isRead7);
  };

  const [isRead8, setIsRead8] = useState(false);

  const handleClick8 = () => {
    setIsRead8(!isRead8);
  };

  const [isRead9, setIsRead9] = useState(false);

  const handleClick9 = () => {
    setIsRead9(!isRead9);
  };

  const [isRead10, setIsRead10] = useState(false);

  const handleClick10 = () => {
    setIsRead10(!isRead10);
  };
  const [isRead11, setIsRead11] = useState(false);

  const handleClick11 = () => {
    setIsRead11(!isRead11);
  };


  const [isRead13, setIsRead13] = useState(false);

  const handleClick13 = () => {
    setIsRead13(!isRead13);
  };

  const [isRead14, setIsRead14] = useState(false);

  const handleClick14 = () => {
    setIsRead14(!isRead14);
  };

  const [isRead15, setIsRead15] = useState(false);

  const handleClick15 = () => {
    setIsRead15(!isRead15);
  };

  const [isRead16, setIsRead16] = useState(false);

  const handleClick16 = () => {
    setIsRead16(!isRead16);
  };
  const [isRead17, setIsRead17] = useState(false);

  const handleClick17 = () => {
    setIsRead17(!isRead17);
  };




  const handleClick6 = () => {
    setIsRead(!isRead);
    setIsRead1(!isRead1); 
    setIsRead2(!isRead2); 
    setIsRead3(!isRead3) ;
    setIsRead4(!isRead4) ;
    setIsRead5(!isRead5);
  };

  const handleClick12 = () => {
    setIsRead7(!isRead7); 
    setIsRead8(!isRead8); 
    setIsRead9(!isRead9); 
    setIsRead10(!isRead10);
    setIsRead11(!isRead11);
  
  };

  const handleClick18 = () => {
    setIsRead13(!isRead13); 
    setIsRead14(!isRead14); 
    setIsRead15(!isRead15); 
    setIsRead16(!isRead16);
    setIsRead17(!isRead17);
  
  };


  // const [notifications, setNotifications] = useState([
    // { id: 1, content: 'Notification 1' },
    // { id: 2, content: 'Notification 2' },
    // ... other notifications
  // ]);

  // const handleDeleteNotification = (id) => {
    // Filter out the notification with the specified id
    // const updatedNotifications = notifications.filter((notification) => notification.id !== id);
    // Update the state with the filtered array
    // setNotifications(updatedNotifications);
  // };






  


  
  return (
    <DashBoardLayout>
      <>
        <div class="flex gap-[25px] lg:w-full lg:h-[1850px] md:h-[1200px] h-[800px] md:w-full w-full flex-col">
          <div
            className="w-full h-[90px] md:h-[112.29px] lg:h-[196px] rounded-[7px] md:rounded-[11.5px]
     bg-gradient-to-r from-indigo-300 via-fuchsia-500 to-rose-500 flex px-[16px] lg:px-[50px]
      justify-between items-center lg:rounded-[20px]"
          >
            <div className="py-[13px] mt-2 lg:py-[40px]">
              <h2
                className="text-[10px] mb-2 font-bold uppercase w-[110%] md:text-[12px] md:w-[70%] lg:w-[70%] lg:text-[20px] 
              2xl:w-[80%] 2xl:text-[24px] lg:mb-4"
              >
                GET NOTIFIED AND STAY UP TO DATE WITH <br /> AREMXYPLUG.
              </h2>
              <h2
                className="text-[7px] font-[400] leading-[9px] mb-3 md:text-[9px] md:leading-[12.2px]
               w-[100%] md:w-[80%] lg:w-[75%] 2xl:w-[85%] 2xl:mt-[5px] lg:mt-[20px] lg:text-[16px]
               lg:leading-[26px] 2xl:text-[20px] lg:mb-[20px]"
              >
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
            <div className="Frame758532592 w-full justify-between gap-3 flex">
              <div className="flex flex-col">
                <div
                  onClick={() => {
                    setIsOpen1(true);
                    setIsOpen2(false);
                    setIsOpen3(false);
                    setIsOpen4(false);
                    setIsOpen5(false);
                  }}
                  className="cursor-pointer"
                >
                  <img
                    className="lg:w-32  lg:h-28 md:w-20 md:h-16 w-14 h-12  flex"
                    src={starbox}
                    alt=""
                  />
                  {isOpen1 && (
                    <div
                      className="Group13108 lg:w-5 lg:h-5 lg:mt-[-109px] lg:ml-[107px] md:mt-[-61px] md:ml-[67px]
                  mt-[-46px] ml-[45px] flex flex-col "
                    >
                      <div className="Ellipse147 lg:w-5 lg:h-5 w-[9px] h-[9px] left-0 top-0  bg-red-400 rounded-full" />
                      <div
                        className=" lg:ml-[6px] lg:mt-[-17px] mt-[-8px] ml-[4px] md:ml-[3px] text-white lg:text-xs text-[5px]
                  font-semibold font-['Poppins']"
                      >
                        6
                      </div>
                    </div>
                  )}
                </div>
                {isOpen1 && (
                  <div
                    className="w-[55px] h-px bg-[#04177f] rounded-[5.87px] lg:w-[127px] lg:h-[2px]
            lg:mt-[145px]  md:w-[79px] mt-[59.555px] md:mt-[84.255px] lg:rounded-[10px]"
                  />
                )}
              </div>
              <div
                onClick={() => {
                  setIsOpen2(true);
                  setIsOpen1(false);
                  setIsOpen3(false);
                  setIsOpen4(false);
                  setIsOpen5(false);
                }}
                className="flex  flex-col"
              >
                <div className=" cursor-pointer">
                  <img
                    className="lg:w-32 lg:h-28 md:w-20 md:h-16 w-14 h-12 flex"
                    src={arrangebox}
                    alt=""
                  />
                  {isOpen2 && (
                    <img
                      className=" lg:w-[20px] lg:h-[20px]  lg:top-[4px] w-[9px] h-[9px] ml-[45px] mt-[-47px]
                lg:mt-[-110px] lg:ml-[106px] md:mt-[-62px] md:ml-[67px] "
                      src={five}
                      alt=""
                    />
                  )}
                </div>
                {isOpen2 && (
                  <div
                    className="w-[55px]  h-px bg-[#04177f] rounded-[5.87px] lg:w-[127px] lg:h-[2px]
            lg:mt-[146px]  md:w-[79px] mt-[60px] md:mt-[85px] lg:rounded-[10px]"
                  />
                )}
              </div>

              <div className="flex flex-col">
                <div
                  onClick={() => {
                    setIsOpen3(true);
                    setIsOpen2(false);
                    setIsOpen1(false);
                    setIsOpen4(false);
                    setIsOpen5(false);
                  }}
                  className="cursor-pointer"
                >
                  <img
                    className="lg:w-32 lg:h-28 md:w-20  md:h-16 w-14 h-12 flex"
                    src={wallet}
                    alt=""
                  />
                  {isOpen3 && (
                    <img
                      className="lg:mt-[-110px] lg:ml-[106px] lg:w-[20px] lg:h-[20px] 
                 md:mt-[-62px] md:ml-[67px] w-[9px] h-[9px] ml-[45px] mt-[-47px] "
                      src={five}
                      alt=""
                    />
                  )}
                </div>
                {isOpen3 && (
                  <div
                    className="w-[55px] h-px bg-[#04177f] rounded-[5.87px] lg:w-[127px] lg:h-[2px]
            lg:mt-[146px]  md:w-[79px]  mt-[60px] md:mt-[85px] lg:rounded-[10px]"
                  />
                )}
              </div>

              <div className="flex flex-col">
                <div
                  onClick={() => {
                    setIsOpen4(true);
                    setIsOpen2(false);
                    setIsOpen3(false);
                    setIsOpen1(false);
                    setIsOpen5(false);
                  }}
                  className="cursor-pointer"
                >
                  <img
                    className="lg:w-32 lg:h-28 md:w-20 md:h-16 w-14 h-12 flex"
                    src={cards}
                    alt=""
                  />
                </div>
                {isOpen4 && (
                  <div
                    className="w-[55px]  h-px bg-[#04177f] rounded-[5.87px] lg:w-[127px] lg:h-[2px]
            lg:mt-[56px] md:w-[79px] mt-[22px] md:mt-[32px] lg:rounded-[10px]"
                  />
                )}
              </div>

              <div className="flex flex-col">
                <div
                  onClick={() => {
                    setIsOpen5(true);
                    setIsOpen2(false);
                    setIsOpen3(false);
                    setIsOpen4(false);
                    setIsOpen1(false);
                  }}
                  className="cursor-pointer"
                >
                  <img
                    className="lg:w-32 lg:h-28 md:w-20 md:h-16 w-14 h-12 flex"
                    src={charts}
                    alt=""
                  />
                </div>
                {isOpen5 && (
                  <div
                    className="w-[55px] h-px bg-[#04177f] rounded-[5.87px] lg:w-[127px] lg:h-[2px]
            lg:mt-[56px] md:w-[79px] mt-[22px] md:mt-[32px] lg:rounded-[10px]"
                  />
                )}
              </div>
            </div>
            <div
              className=" lg:w-full lg:h-[2px] absolute w-full md:w-full h-px top-[70px] md:top-[96px] 
               left-[3px] bg-[#d9d9d999]
           lg:top-[168px] lg:left-[2px] md:left-[5px] lg:rounded-[10px] rounded-[5.87px]"
            ></div>


            {/* first flow */}
            {isOpen1 &&  (
              <div
                className="flex flex-col relative w-full lg:w-full md:w-full mt-[50px] lg:mt-[100px]
         md:mt-[70px] md:gap-[45px] lg:gap-10 gap-[20.64px] "
              >
                { finalDelete7 && (
                <div
                  className="flex  lg:gap-[35px] lg:mt-[-80px] mt-[-40px] gap-[15px] md:gap-[25px] md:mt-[-60px] justify-end 
items-end  "
                >
                  {isRead && isRead1 && isRead2 && isRead3 && isRead4 && isRead5 ? (
                  <div
                    className="flex flex-col lg:w-[187px] cursor-pointer items-start lg:gap-[7px] lg:p-[8px]
              bg-white border-neutral-400
             lg:rounded-[6px] lg:border-[0.2px] border-solid p-1 w-24 md:w-[120px]   border shadow 
             rounded gap-1.5 lg:shadow-[0px_0px_1px_#00000040]"
                  >
                    <div
                                          onClick={handleClick6}
                      
                      className="flex lg:w-[171px] items-center lg:gap-[14px] gap-2  flex-[0_0_auto]"
                    >
                      <img
                        className=" lg:w-[24px] lg:h-[18.67px] md:w-[14px] md:h-[11px] w-[10px] h-[8px]"
                        alt="Vector"
                        src={envelope}
                      />
                      <div
                        className="lg:w-[133px] w-[67px] md:w-[78px] mt-[-1.00px] font-medium text-zinc-500  text-text-color-fade
                 lg:text-[15px] tracking-[0] text-[7px] md:text-[9px] whitespace-nowrap leading-[normal]"
                      >
                        Mark all as Unread
                      </div>
                    </div>
                  </div>

                    ) : (

                  <div
                    className="flex flex-col lg:w-[187px]  cursor-pointer items-start lg:gap-[10px] lg:p-[8px]
              bg-white border-neutral-400
             lg:rounded-[6px] lg:border-[0.2px] border-solid p-1 w-24 md:w-[120px]   border shadow rounded gap-1.5 lg:shadow-[0px_0px_1px_#00000040]"
                  >
                    <div
                                          onClick={handleClick6}
                      
                      className="flex lg:w-[171px] items-center lg:gap-[14px] gap-2  flex-[0_0_auto]"
                    >
                      <img
                        className=" lg:w-[24px] lg:h-[18.67px] md:w-[14px] md:h-[11px] w-[10px] h-[8px]"
                        alt="Vector"
                        src={envelope}
                      />
                      <div
                        className="lg:w-[133px] w-[67px] md:w-[78px] mt-[-1.00px] font-medium text-zinc-500  text-text-color-fade
                 lg:text-[15px] tracking-[0] text-[7px] md:text-[9px] leading-[normal]"
                      >
                        Mark all as Read
                      </div>
                    </div>
                  </div>
                  )}

  
                  <div
                  onClick={openModal1}
                    className="flex items-center lg:gap-[14px] cursor-pointer    lg:p-[8px]
              flex-[0_0_auto] bg-white lg:rounded-[6px]  border-red-500 
               lg:border-[0.2px] border-solid border-variable-collection- text-danger p-1
                rounded shadow border gap-2 lg:shadow-[0px_0px_1px_#00000040]"
                  >
                    <img
                      className=" lg:w-[16px] lg:h-[20.57px] w-[8px] h-[9px] md:w-[9px] md:h-[12px]"
                      alt="Vector"
                      src={bin}
                    />
                    <div
                      className=" lg:w-fit w-[38px]  md:w-[44px] mt-[-0.20px] font-medium text-variable-collection-text-danger
               text-red-500 lg:text-[15px] text-[7px] md:text-[9px] tracking-[0] leading-[normal]"
                    >
                      Delete all
                    </div>
                  </div>
                </div>
)}

<div className="flex flex-col lg:gap-7 gap-3 md:gap-5">
{finalDelete && (
 
                <div
                
                id="colorReset"
                  className={`flex justify-between  items-center w-full 
                  border-b lg:h-[230px] h-[100px] md:h-[150px] lg:p-5 p-[7px] md:p-3 rounded-md md:rounded-md
                   lg:rounded-xl shadow  border-[#d9d9d999]  ${isRead5 ? 'bg-white' :  'bg-sky-100'}`}
                >
                  <div className="w-full">
                   <Link to="/launch-page">
                  <div className="flex gap-2 lg:gap-4 md:gap-2.5 justify-start  text-start flex-col">
                    <div className="font-semibold text-text-color-fade text-zinc-500 lg:text-base md:text-xs  text-[8px] ">
                      New Launch!!
                    </div>

                    <p className="font-bold text-zinc-500 text-color-fade md:text-xs text-[8px] lg:text-lg whitespace-nowrap tracking-[0] leading-[normal]">
                      We are excited to lunch our global platform for all<br /> things
                      telecom,
                       payments, and Digital services.
                    </p>
                    <p className="font-medium text-[#9c9c9c] md:text-xs md:font-medium text-[6px] lg:text-xs tracking-[0.09px] leading-[normal]">
                      August 10th, 2023 12 :00:00am
                    </p>
                    <div className="font-semibold text-main md:text-xs md:font-semibold text-[6px] lg:text-sm text-blue-900 tracking-[0] leading-[normal]">
                      Learn more..
                    </div>
                  </div>
                  </Link>
                  </div>
                  <div className="flex lg:gap-4 md:gap-3 gap-2 justify-between ">
                    <div className="w-full">
                  <Link to="/launch-page">
                    <div className="flex flex-col">
                      <img
                        className="lg:w-[150px] relative lg:h-[150px] mt-[5px] w-[50px] h-[50px] md:w-[100px]
                   flex justify-center 
                   md:h-[100px]"
                        src={faq}
                        alt=""
                      />

                    </div>
</Link>
       </div>             
                    <div className="flex justify-end  items-center lg:gap-[65px] md:gap-[40px] gap-[30px] flex-col-reverse">
                      <div className="flex relative">
                      <div
                        onClick={() => {
                          setIsOpen6((prev) => !prev);
                          setIsOpen7(false);
                          setIsOpen8(false);
                          setIsOpen9(false);
                          setIsOpen10(false);
                          setIsOpen11(false);
                        }}
                        className="Frame758532418 relative cursor-pointer flex-col justify-center items-start gap-0.5 flex"
                      >
                        <div className="Ellipse141 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                        <div className="Ellipse142 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                        <div className="Ellipse143 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                      </div>

                      {isOpen6 && (
                        <div
                          className="Frame758532672 absolute w-[100px] md:w-[180px] lg:w-[190px]
                           top-[7px] md:top-[5px] 
                    left-[-100px] md:left-[-182px] lg:left-[-191px] shadow flex-col lg:top-[10px]
               justify-start items-start flex"
                        >

{isRead5 ? (
                          <div
                              onClick={handleClick5}
                            
                            className="Frame758532670 px-4 py-1 bg-white cursor-pointer border-b border-neutral-400 lg:w-[190px] w-[100px] md:w-[180px]
         h-[23px] justify-center md:h-[40px] lg:h-[41px]
        items-center gap-1.5 flex"
                          >
                            <div className="MarkAsRead text-zinc-500 text-[8px] md:text-xs font-normal lg:text-sm whitespace-nowrap ">
                              Mark as unread
                            </div>
                            
                          </div>
                          
                          ) : (
                          <div
                              onClick={handleClick5}
                            
                            className="Frame758532670 px-4 py-1 bg-white cursor-pointer border-b border-neutral-400 lg:w-[190px] w-[100px] md:w-[180px]
         h-[23px] justify-center md:h-[40px] lg:h-[41px]
        items-center gap-1.5 flex"
                          >
                            <div className="MarkAsRead text-zinc-500 text-[8px] md:text-xs font-normal lg:text-sm whitespace-nowrap ">
                              Mark as read
                            </div>
                            
                          </div>
                          )}

                          
                          <div
                        
                          onClick={openModal}
                            className="Frame758532672 px-4 py-1 bg-white h-[23px] cursor-pointer lg:h-[41px] md:h-[40px] lg:w-[190px] w-[100px] md:w-[180px] border-b
          justify-center items-center gap-1.5 flex"
                          >
                            <div className="Delete text-red-500 text-[8px] md:text-xs lg:text-sm font-normal ">
                              Delete
                            </div>
                          </div>
                        </div>
                      )}

</div>
                      <div
                        className={`Ellipse147 w-1.5 h-1.5 relative md:w-3 md:h-3 lg:mt-[-25px] md:mt-[-10px] mt-[-15px] lg:w-5 lg:h-5 flex 
               bg-red-400 rounded-full  ${isRead5 ? 'bg-white' :  'bg-red-400'}`}
                      />
                    </div>
                  </div>

                </div>
)}



{isModalOpen && (
                <Modal>
                  <div
                   className={` ${
                    toggleSideBar ? "confirm02"
                    : "confirm2"
                  } bg-white md:mx-auto md:my-auto w-[300px] md:w-[600px] md:h-[330px] 
                    lg:mx-auto lg:w-[1000px] lg:h-[500px]
                   lg:my-auto
                   rounded-[12px]`}
                  >
                                          <img 
                      onClick={closeModal}
                      className=" lg:w-[25px] w-[15px] h-[15px] lg:h-[25px] mt-[3px] ml-[280px]
                       md:ml-[575px] md:mt-[5px] md:w-[20px] md:h-[20px]
                      lg:mt-[5px] 
                      lg:ml-[970px] flex "  src={VuesaxBoldEye} alt=""/>

                    <hr className="h-[6px] bg-[#04177f] lg:mt-[3%] border-none mt-[3%] md:mt-[3%] lg:h-[20px] md:h-[10px]" />
                    <p className="text-[10px] px-[20px] md:text-[14px] lg:text-[18px] font-extrabold text-center my-[3%] lg:my-[%]">
                      Are you sure you want to delete this notifications?
                    </p>
                    <div className="flex flex-col gap-[10px] justify-center items-center font-extrabold mb-[7%]">
                      <img
                        className="default-card w-[100px] h-[100px] mx-auto mb-[2%] md:h-[100px] md:w-[150px]"
                        src={deletingfiles}
                        alt="/"
                      />
                    </div>

                    <div
                      className={`flex flex-row lg:gap-[3px] gap-[-30px] justify-center items-center h-[38px]
                       mt-[20px] md:mt-[10px] px-[20px] lg:mt-[-30px] md:justify-center md:items-center mx-auto 
                       md:px-[40px]`}
                    >
                      <button
                        className={`bg-[#04177F] flex justify-center items-center lg:ml-[210px] ml-[50px] cursor-pointer 
                        lg:w-[20%] w-[40%] md:w-[20%] md:ml-[140px] md:h-[30px]
                        text-[14px] font-extrabold h-[20px] text-white rounded-[6px] md:rounded-[8px]
                         md:text-[20px] lg:text-[16px] lg:h-[38px] lg:my-[4%]`}

                        onClick={() => {
                          handleDelete('finalDelete')
      
      
      
      
                          
                          
                        }}
      
                      >
                        Yes
                      </button>
                      <button
                        className={`bg-[#fff] w-full flex justify-center items-center mr-auto cursor-pointer 
                        text-[14px] font-extrabold h-[40px] text-[#F95252] rounded-[6px] md:w-[40%] md:rounded-[8px]
                         md:text-[20px] lg:text-[16px] lg:h-[38px] lg:my-[4%]`}
                        onClick={closeModal}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </Modal>
)}

{showSuccessMessage && (
                <Modal>
                  <div
                   className="
                     
          
                   bg-white md:mx-auto md:my-auto lg:mx-auto lg:w-[1000px] lg:h-[500px] w-[300px] md:w-[600px] md:h-[330px] lg:my-auto md:overflow-auto rounded-[12px]"
                  >
                                                              <img 
                      onClick={closeModal}
                      className=" lg:w-[25px] lg:h-[25px] w-[15px] md:ml-[575px] md:mt-[5px] md:w-[20px] md:h-[20px]
                      h-[15px] lg:mt-[5px] mt-[3px] lg:ml-[970px] ml-[280px] flex "  src={VuesaxBoldEye} alt=""/>

                    <hr className="h-[6px] bg-[#04177f] lg:mt-[3%] border-none mt-[3%] md:mt-[5%] lg:h-[20px] md:h-[10px]" />
                    <p className="text-[10px] md:text-[16px] lg:text-[18px] font-extrabold text-center my-[3%] lg:my-[%]">
                      Successful
                    </p>
                    <p className="text-[10px] text-[#00AA48] md:text-[14px] px-[20px] lg:text-[18px] font-extrabold text-center my-[1%] lg:my-[%]">
                    Notification has been deleted successfully.
                    </p>
                    <div className="flex flex-col gap-[10px] justify-center items-center font-extrabold mb-[5%]">
                      <img
                        className="success-default-card w-[100px] h-[100px] md:w-[90px] md:h-[90px] mx-auto mb-[2%] lg:w-[150px] lg:h-[120px]"
                        src={SuccessGif}
                        alt="/"
                      />
                    </div>

                    <div
                      className={`w-full h-[38px] mt-[20px] px-[20px] md:mt-[10px]`}
                    >
                      <button
                        className={`bg-[#04177F] w-[80px] lg:w-[20%] flex justify-center items-center mr-auto 
                        cursor-pointer ml-[90px] md:ml-[225px] md:w-[20%] md:h-[35px]
                        text-[14px] font-extrabold h-[30px] text-white rounded-[6px] md:rounded-[8px]
                         md:text-[20px] lg:text-[16px] md:mx-auto lg:h-[40px] lg:ml-[380px] lg:my-[4%]`}
                        onClick={() => {
                          setShowSuccessMessage(false);
                          
                        }}
      
                      >
                        Done
                      </button>
                    </div>
                  </div>
                </Modal>
)}






                {isModalOpen1 && (
                <Modal>
                  <div
                   className=" bg-white md:mx-auto md:my-auto w-[300px] md:w-[600px] md:h-[330px] 
                    lg:mx-auto lg:w-[1000px] lg:h-[500px]
                   lg:my-auto
                   rounded-[12px] "
                  >
                                          <img 
                      onClick={closeModal1}
                      className=" lg:w-[25px] w-[15px] h-[15px] lg:h-[25px] mt-[3px] ml-[280px]
                       md:ml-[575px] md:mt-[5px] md:w-[20px] md:h-[20px]
                      lg:mt-[5px] 
                      lg:ml-[970px] flex "  src={VuesaxBoldEye} alt=""/>

                    <hr className="h-[6px] bg-[#04177f] lg:mt-[3%] border-none mt-[3%] md:mt-[3%] lg:h-[20px] md:h-[10px]" />
                    <p className="text-[10px] px-[20px] md:text-[14px] lg:text-[18px] font-extrabold text-center my-[3%] lg:my-[%]">
                      Are you sure you want to delete all notifications?
                    </p>
                    <div className="flex flex-col gap-[10px] justify-center items-center font-extrabold mb-[7%]">
                      <img
                        className="default-card w-[100px] h-[100px] mx-auto mb-[2%] md:h-[100px] md:w-[150px]"
                        src={deletingfiles}
                        alt="/"
                      />
                    </div>

                    <div
                      className={`flex flex-row lg:gap-[3px] gap-[-30px] justify-center items-center h-[38px]
                       mt-[20px] md:mt-[10px] px-[20px] lg:mt-[-30px] md:justify-center md:items-center mx-auto 
                       md:px-[40px]`}
                    >
                      <button
                        className={`bg-[#04177F] flex justify-center items-center lg:ml-[210px] ml-[50px] cursor-pointer 
                        lg:w-[20%] w-[40%] md:w-[20%] md:ml-[140px] md:h-[30px]
                        text-[14px] font-extrabold h-[20px] text-white rounded-[6px] md:rounded-[8px]
                         md:text-[20px] lg:text-[16px] lg:h-[38px] lg:my-[4%]`}

                        onClick={() => {
                          handleDelete1('finalDelete')
                          handleDelete1('finalDelete1')
                          handleDelete1('finalDelete2')
                          handleDelete1('finalDelete3')
                          handleDelete1('finalDelete4')
                          handleDelete1('finalDelete5')
                          handleDelete1('finalDelete6')
                          handleDelete1('finalDelete7')
      
      
      
      
                          
                          
                        }}
      
                      >
                        Yes
                      </button>
                      <button
                        className={`bg-[#fff] w-full flex justify-center items-center mr-auto cursor-pointer 
                        text-[14px] font-extrabold h-[40px] text-[#F95252] rounded-[6px] md:w-[40%] md:rounded-[8px]
                         md:text-[20px] lg:text-[16px] lg:h-[38px] lg:my-[4%]`}
                        onClick={closeModal1}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </Modal>
)}





 {showSuccessMessage1 && (
                <Modal>
                  <div
                   className="
                     
          
                   bg-white md:mx-auto md:my-auto lg:mx-auto lg:w-[1000px] lg:h-[500px] w-[300px] md:w-[600px] md:h-[330px] lg:my-auto md:overflow-auto rounded-[12px]"
                  >
                                                              <img 
                      onClick={closeModal1}
                      className=" lg:w-[25px] lg:h-[25px] w-[15px] md:ml-[575px] md:mt-[5px] md:w-[20px] md:h-[20px]
                      h-[15px] lg:mt-[5px] mt-[3px] lg:ml-[970px] ml-[280px] flex "  src={VuesaxBoldEye} alt=""/>

                    <hr className="h-[6px] bg-[#04177f] lg:mt-[3%] border-none mt-[3%] md:mt-[5%] lg:h-[20px] md:h-[10px]" />
                    <p className="text-[10px] md:text-[16px] lg:text-[18px] font-extrabold text-center my-[3%] lg:my-[%]">
                      Successful
                    </p>
                    <p className="text-[10px] text-[#00AA48] md:text-[14px] px-[20px] lg:text-[18px] font-extrabold text-center my-[1%] lg:my-[%]">
                    All notifications has been deleted successfully.
                    </p>
                    <div className="flex flex-col gap-[10px] justify-center items-center font-extrabold mb-[5%]">
                      <img
                        className="success-default-card w-[100px] h-[100px] md:w-[90px] md:h-[90px] mx-auto mb-[2%] lg:w-[150px] lg:h-[120px]"
                        src={SuccessGif}
                        alt="/"
                      />
                    </div>

                    <div
                      className={`w-full h-[38px] mt-[20px] px-[20px] md:mt-[10px]`}
                    >
                      <button
                        className={`bg-[#04177F] w-[80px] lg:w-[20%] flex justify-center items-center mr-auto 
                        cursor-pointer ml-[90px] md:ml-[225px] md:w-[20%] md:h-[35px]
                        text-[14px] font-extrabold h-[30px] text-white rounded-[6px] md:rounded-[8px]
                         md:text-[20px] lg:text-[16px] md:mx-auto lg:h-[40px] lg:ml-[380px] lg:my-[4%]`}
                        onClick={() => {
                          setShowSuccessMessage1(false);
                          setShowPicture(true);
                        }}
      
                      >
                        Done
                      </button>
                    </div>
                  </div>
                </Modal>
)}





                
{ finalDelete1 && (
                <div
                  className={` flex w-full justify-between items-center lg:h-[230px] h-[100px] md:h-[150px]
                   lg:p-5 p-[7px] md:p-3 rounded-md md:rounded-md lg:rounded-xl shadow   border-b 
                    border-[#d9d9d999]  ${isRead ? 'bg-white' : 'bg-sky-100'} `}
                >
                  <div className="w-full">
  <Link to="/launch-page">

                  <div className="flex gap-2 lg:gap-4 md:gap-2.5 justify-start text-start flex-col">
                    <div className="font-semibold text-text-color-fade text-zinc-500 lg:text-base md:text-xs  text-[8px] ">
                      New Launch!!
                    </div>

                    <p className="font-bold text-text-color-fade  text-zinc-500 md:text-xs text-[8px] whitespace-nowrap lg:text-lg tracking-[0] leading-[normal]">
                      We are excited to lunch our global platform for all <br />things
                      telecom, payments, and Digital services.
                    </p>
                    <p className="font-medium text-[#9c9c9c] md:text-xs md:font-medium text-[6px] lg:text-xs tracking-[0.09px] leading-[normal]">
                      August 10th, 2023 12 :00:00am
                    </p>
                    <div className="font-semibold text-main md:text-xs md:font-semibold text-[6px] lg:text-sm text-blue-900 tracking-[0] leading-[normal]">
                      Learn more..
                    </div>
                  </div>
</Link>
</div>
                  <div className="flex lg:gap-4 md:gap-3 gap-2 justify-between">
                    <div className="flex flex-col">
                      <img
                        className="lg:w-[150px] relative lg:h-[150px] mt-[5px] w-[50px] h-[50px] md:w-[100px]
                   flex justify-center 
                   md:h-[100px]"
                        src={faq}
                        alt=""
                      />
                    </div>
                    <div className="flex justify-end cursor-pointer  items-center lg:gap-[65px] md:gap-[40px] gap-[30px] flex-col-reverse">
                      <div className="flex relative">
                      <div
                        onClick={() => {
                          setIsOpen7((prev) => !prev);
                          setIsOpen6(false);
                          setIsOpen8(false);
                          setIsOpen9(false);
                          setIsOpen10(false);
                          setIsOpen11(false);
                        }}
                        className="Frame758532418  flex-col justify-center items-start gap-0.5 cursor-pointer flex"
                      >
                        <div className="Ellipse141 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                        <div className="Ellipse142 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                        <div className="Ellipse143 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                      </div>
                      {isOpen7 && (
                        <div
                          className="Frame758532672 w-[100px] absolute md:w-[180px] lg:w-[190px]  
                          top-[7px] md:top-[5px] left-[-100px] md:left-[-182px] lg:left-[-191px] lg:top-[10px] shadow flex-col 
               justify-start items-start flex"
                        >

{isRead ? (
                          <div
                              onClick={handleClick}
                            
                            className="Frame758532670 px-4 py-1 bg-white cursor-pointer border-b border-neutral-400 lg:w-[190px] w-[100px] md:w-[180px]
         h-[23px] justify-center md:h-[40px] lg:h-[41px]
        items-center gap-1.5 flex"
                          >
                            <div className="MarkAsRead text-zinc-500 text-[8px] md:text-xs font-normal lg:text-sm whitespace-nowrap ">
                              Mark as unread
                            </div>
                            
                          </div>
                          
                          ) : (
                          <div
                              onClick={handleClick}
                                                        
                                                        
                                                        
                                                        
                            
                            className="Frame758532670 px-4 py-1 bg-white cursor-pointer border-b border-neutral-400 lg:w-[190px] w-[100px] md:w-[180px]
         h-[23px] justify-center md:h-[40px] lg:h-[41px]
        items-center gap-1.5 flex"
                          >
                            <div className="MarkAsRead text-zinc-500 text-[8px] md:text-xs font-normal lg:text-sm whitespace-nowrap ">
                              Mark as read
                            </div>
                            
                          </div>
                          )}
                          <div
                           onClick={openModal}
                            className="Frame758532672 px-4 py-1 bg-white h-[23px] cursor-pointer lg:h-[41px] md:h-[40px] lg:w-[190px] w-[100px] md:w-[180px] border-b
          justify-center items-center gap-1.5 flex"
                          >
                            <div className="Delete text-red-500 text-[8px] md:text-xs lg:text-sm font-normal ">
                              Delete
                            </div>
                          </div>
                        </div>
                      )}


</div>
                      <div
                        className={`Ellipse147  w-1.5 h-1.5 md:w-3 md:h-3 lg:mt-[-25px] md:mt-[-10px] mt-[-15px] lg:w-5 lg:h-5 flex 
               bg-red-400 rounded-full  ${isRead ? 'bg-white' :  'bg-red-400'}`}
                      />
                    </div>
                  </div>
                </div>
              )}


  
{ finalDelete2 && (
                <div
                  className={`flex  border-b  lg:h-[230px] h-[100px] md:h-[150px] lg:p-5 p-[7px] md:p-3 
                  rounded-md md:rounded-md lg:rounded-xl shadow   border-[#d9d9d999]  
                  ${isRead1 ? 'bg-white' : 'bg-sky-100'}
                   w-full justify-between 
                  items-center `}
                >
                   <div className="w-full">
  <Link to="/launch-page">

                  <div className="flex gap-2 lg:gap-4 md:gap-2.5 justify-start text-start flex-col">
                    <div className="font-semibold text-text-color-fade text-zinc-500 lg:text-base md:text-xs  text-[8px] ">
                      New Launch!!
                    </div>

                    <p className="font-bold text-text-color-fade md:text-xs text-zinc-500 text-[8px] lg:text-lg tracking-[0] whitespace-nowrap leading-[normal]">
                      We are excited to lunch our global platform for all <br />things
                      telecom,
                       payments, and Digital services.
                    </p>
                    <p className="font-medium text-[#9c9c9c] md:text-xs md:font-medium text-[6px] lg:text-xs tracking-[0.09px] leading-[normal]">
                      August 10th, 2023 12 :00:00am
                    </p>
                    <div className="font-semibold text-main md:text-xs md:font-semibold text-[6px] lg:text-sm text-blue-900 tracking-[0] leading-[normal]">
                      Learn more..
                    </div>
                  </div>
</Link>
</div>
                  <div className="flex lg:gap-4 md:gap-3 gap-2 justify-between">
                    <div className="flex flex-col">
                      <img
                        className="lg:w-[150px] relative lg:h-[150px] mt-[5px] w-[50px] h-[50px] md:w-[100px]
                   flex justify-center 
                   md:h-[100px]"
                        src={faq}
                        alt=""
                      />

                    </div>
                    <div className="flex justify-end  items-center lg:gap-[65px] md:gap-[40px] gap-[30px] flex-col-reverse">
                     <div className="flex relative">
                     {isOpen8 && (
                        <div
                          className="Frame758532672 absolute w-[100px] md:w-[180px] lg:w-[190px] 
                          top-[7px] md:top-[5px] left-[-100px] md:left-[-182px] lg:left-[-191px] lg:top-[10px]
                           shadow flex-col 
               justify-start items-start flex"
                        >

{isRead1 ? (
                          <div
                              onClick={handleClick1}
                            
                            className="Frame758532670 px-4 py-1 bg-white cursor-pointer border-b border-neutral-400 lg:w-[190px] w-[100px] md:w-[180px]
         h-[23px] justify-center md:h-[40px] lg:h-[41px]
        items-center gap-1.5 flex"
                          >
                            <div className="MarkAsRead text-zinc-500 text-[8px] md:text-xs font-normal lg:text-sm whitespace-nowrap ">
                              Mark as unread
                            </div>
                            
                          </div>
                          
                          ) : (
                          <div
                              onClick={handleClick1}
                            
                            className="Frame758532670 px-4 py-1 bg-white cursor-pointer border-b border-neutral-400 lg:w-[190px] w-[100px] md:w-[180px]
         h-[23px] justify-center md:h-[40px] lg:h-[41px]
        items-center gap-1.5 flex"
                          >
                            <div className="MarkAsRead text-zinc-500 text-[8px] md:text-xs font-normal lg:text-sm whitespace-nowrap ">
                              Mark as read
                            </div>
                            
                          </div>
                          )}


                          <div
                          onClick={openModal}
                            className="Frame758532672 px-4 py-1 bg-white h-[23px] cursor-pointer lg:h-[41px] md:h-[40px] lg:w-[190px] w-[100px] md:w-[180px] border-b
          justify-center items-center gap-1.5 flex"
                          >
                            <div className="Delete text-red-500 text-[8px] md:text-xs lg:text-sm font-normal ">
                              Delete
                            </div>
                          </div>
                        </div>
                      )}

                      <div
                        onClick={() => {
                          setIsOpen8((prev) => !prev);
                          setIsOpen6(false);
                          setIsOpen7(false);
                          setIsOpen9(false);
                          setIsOpen10(false);
                          setIsOpen11(false);
                        }}
                        className="Frame758532418 cursor-pointer  flex-col justify-center items-start gap-0.5 flex"
                      >
                        <div className="Ellipse141 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                        <div className="Ellipse142 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                        <div className="Ellipse143 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                      </div>
</div>
                      <div
                        className={`Ellipse147 w-1.5 h-1.5 md:w-3 md:h-3 lg:mt-[-25px] md:mt-[-10px] mt-[-15px] lg:w-5 lg:h-5 flex 
               bg-red-400 rounded-full  ${isRead1 ? 'bg-white' : 'bg-red-400'}`}
                      />
                    </div>
                  </div>
                </div>
)}        



  
{ finalDelete3 && (
                <div
                  className={`flex border-b lg:h-[230px] h-[100px] md:h-[150px] lg:p-5 p-[7px] md:p-3 rounded-md
                   md:rounded-md lg:rounded-xl shadow  border-[#d9d9d999]  
                    ${isRead2 ? 'bg-white' : 'bg-sky-100'} w-full justify-between
                   items-center`}
                >
                   <div className="w-full">
  <Link to="/launch-page">

                  <div className="flex gap-2 lg:gap-4 md:gap-2.5 justify-start text-start flex-col">
                    <div className="font-semibold text-text-color-fade text-zinc-500 lg:text-base md:text-xs  text-[8px] ">
                      New Launch!!
                    </div>

                    <p className="font-bold text-text-color-fade md:text-xs text-zinc-500 whitespace-nowrap text-[8px] lg:text-lg tracking-[0] leading-[normal]">
                      We are excited to lunch our global platform for all <br />things
                      telecom,
                       payments, and Digital services.
                    </p>
                    <p className="font-medium text-[#9c9c9c] md:text-xs md:font-medium text-[6px] lg:text-xs tracking-[0.09px] leading-[normal]">
                      August 10th, 2023 12 :00:00am
                    </p>
                    <div className="font-semibold text-main md:text-xs md:font-semibold text-[6px] lg:text-sm text-blue-900 tracking-[0] leading-[normal]">
                      Learn more..
                    </div>
                  </div>
</Link>
</div>
                  <div className="flex lg:gap-4 md:gap-3 gap-2 justify-between">
                    <div className="flex flex-col">
                      <img
                        className="lg:w-[150px] relative lg:h-[150px] mt-[5px] w-[50px] h-[50px] md:w-[100px]
                   flex justify-center 
                   md:h-[100px]"
                        src={faq}
                        alt=""
                      />

                    </div>
                    <div className="flex justify-end  items-center lg:gap-[65px] md:gap-[40px] gap-[30px] flex-col-reverse">
                     <div className="flex relative">
                     {isOpen9 && (
                        <div
                          className="Frame758532672 absolute w-[100px] md:w-[180px] lg:w-[190px]
                          top-[7px] md:top-[5px] left-[-100px] md:left-[-182px] lg:left-[-191px] lg:top-[10px]
                           shadow flex-col 
               justify-start items-start flex"
                        >


{isRead2 ? (
                          <div
                              onClick={handleClick2}
                            
                            className="Frame758532670 px-4 py-1 bg-white cursor-pointer border-b border-neutral-400 lg:w-[190px] w-[100px] md:w-[180px]
         h-[23px] justify-center md:h-[40px] lg:h-[41px]
        items-center gap-1.5 flex"
                          >
                            <div className="MarkAsRead text-zinc-500 text-[8px] md:text-xs font-normal lg:text-sm whitespace-nowrap ">
                              Mark as unread
                            </div>
                            
                          </div>
                          
                          ) : (
                          <div
                              onClick={handleClick2}
                            
                            className="Frame758532670 px-4 py-1 bg-white cursor-pointer border-b border-neutral-400 lg:w-[190px] w-[100px] md:w-[180px]
         h-[23px] justify-center md:h-[40px] lg:h-[41px]
        items-center gap-1.5 flex"
                          >
                            <div className="MarkAsRead text-zinc-500 text-[8px] md:text-xs font-normal lg:text-sm whitespace-nowrap ">
                              Mark as read
                            </div>
                            
                          </div>
                          )}


                          <div
                          onClick={openModal}
                            className="Frame758532672 px-4 py-1 bg-white h-[23px] cursor-pointer lg:h-[41px] md:h-[40px] lg:w-[190px] w-[100px] md:w-[180px] border-b
          justify-center items-center gap-1.5 flex"
                          >
                            <div className="Delete text-red-500 text-[8px] md:text-xs lg:text-sm font-normal ">
                              Delete
                            </div>
                          </div>
                        </div>
                      )}


                      <div
                        onClick={() => {
                          setIsOpen9((prev) => !prev);
                          setIsOpen6(false);
                          setIsOpen7(false);
                          setIsOpen8(false);
                          setIsOpen10(false);
                          setIsOpen11(false);
                        }}
                        className="Frame758532418 cursor-pointer  flex-col justify-center items-start gap-0.5 flex"
                      >
                        <div className="Ellipse141 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                        <div className="Ellipse142 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                        <div className="Ellipse143 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                      </div>
</div>
                      <div
                        className={`Ellipse147 w-1.5 h-1.5 md:w-3 md:h-3 lg:mt-[-25px] md:mt-[-10px] mt-[-15px] lg:w-5 lg:h-5 flex 
               bg-red-400 rounded-full  ${isRead2 ? 'bg-white' : 'bg-red-400'}`}
                      />
                    </div>
                  </div>
                </div>
)}             



  
{ finalDelete4 && (
                <div
                  className={`flex lg:h-[230px] h-[100px] md:h-[150px] lg:p-5 p-[7px] md:p-3 rounded-md md:rounded-md 
                  lg:rounded-xl shadow   border-b  border-[#d9d9d999]  ${isRead3 ? 'bg-white' : 'bg-sky-100'} w-full justify-between
                   items-center`}
                >
                   <div className="w-full">
  <Link to="/launch-page">

                  <div className="flex gap-2 lg:gap-4 md:gap-2.5 justify-start text-start flex-col">
                    <div className="font-semibold text-text-color-fade text-zinc-500 lg:text-base md:text-xs  text-[8px] ">
                      New Launch!!
                    </div>

                    <p className="font-bold text-text-color-fade md:text-xs text-zinc-500 text-[8px] whitespace-nowrap lg:text-lg tracking-[0] leading-[normal]">
                      We are excited to lunch our global platform for all <br />things
                      telecom,
                       payments, and Digital services.
                    </p>
                    <p className="font-medium text-[#9c9c9c] md:text-xs md:font-medium text-[6px] lg:text-xs tracking-[0.09px] leading-[normal]">
                      August 10th, 2023 12 :00:00am
                    </p>
                    <div className="font-semibold text-main md:text-xs md:font-semibold text-[6px] lg:text-sm text-blue-900 tracking-[0] leading-[normal]">
                      Learn more..
                    </div>
                  </div>
</Link>
</div>
                  <div className="flex lg:gap-4 md:gap-3 gap-2 justify-between">
                    <div className="flex flex-col">
                      <img
                        className="lg:w-[150px] relative lg:h-[150px] mt-[5px] w-[50px] h-[50px] md:w-[100px]
                   flex justify-center 
                   md:h-[100px]"
                        src={faq}
                        alt=""
                      />

                    </div>
                    <div className="flex justify-end  items-center lg:gap-[65px] md:gap-[40px] gap-[30px] 
                    flex-col-reverse">
                      <div className="flex relative">
                      <div
                        onClick={() => {
                          setIsOpen10((prev) => !prev);
                          setIsOpen6(false);
                          setIsOpen7(false);
                          setIsOpen8(false);
                          setIsOpen9(false);
                          setIsOpen11(false);
                        }}
                        className="Frame758532418 cursor-pointer  flex-col justify-center items-start gap-0.5 flex"
                      >
                        <div className="Ellipse141 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                        <div className="Ellipse142 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                        <div className="Ellipse143 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                      </div>
                      {isOpen10 && (
                        <div
                          className="Frame758532672 w-[100px] absolute md:w-[180px] lg:w-[190px] 
                          top-[7px] md:top-[5px] left-[-100px] md:left-[-182px] lg:left-[-191px] lg:top-[10px]
                           shadow flex-col 
               justify-start items-start flex"
                        >


{isRead3 ? (
                          <div
                              onClick={handleClick3}
                                                       
                                                       
                                                       
                                                       
                            
                            className="Frame758532670 px-4 py-1 bg-white cursor-pointer border-b border-neutral-400 lg:w-[190px] w-[100px] md:w-[180px]
         h-[23px] justify-center md:h-[40px] lg:h-[41px]
        items-center gap-1.5 flex"
                          >
                            <div className="MarkAsRead text-zinc-500 text-[8px] md:text-xs font-normal lg:text-sm whitespace-nowrap ">
                              Mark as unread
                            </div>
                            
                          </div>
                          
                          ) : (
                          <div
                              onClick={handleClick3}
                                                        
                                                        
                                                        
                                                        
                            
                            className="Frame758532670 px-4 py-1 bg-white cursor-pointer border-b border-neutral-400 lg:w-[190px] w-[100px] md:w-[180px]
         h-[23px] justify-center md:h-[40px] lg:h-[41px]
        items-center gap-1.5 flex"
                          >
                            <div className="MarkAsRead text-zinc-500 text-[8px] md:text-xs font-normal lg:text-sm whitespace-nowrap ">
                              Mark as read
                            </div>
                            
                          </div>
                          )}



                          <div
                          onClick={openModal}
                            className="Frame758532672 px-4 py-1 bg-white h-[23px] cursor-pointer lg:h-[41px] md:h-[40px] lg:w-[190px] w-[100px] md:w-[180px] border-b
          justify-center items-center gap-1.5 flex"
                          >
                            <div className="Delete text-red-500 text-[8px] md:text-xs lg:text-sm font-normal ">
                              Delete
                            </div>
                          </div>
                        </div>
                      )}

</div>
                      <div
                        className={`Ellipse147 w-1.5 h-1.5 md:w-3 md:h-3 lg:mt-[-25px] md:mt-[-10px] mt-[-15px] lg:w-5 lg:h-5 flex 
               bg-red-400 rounded-full  ${isRead3 ? 'bg-white' : 'bg-red-400'}`}
                      />
                    </div>
                  </div>
                </div>
)}             



  
{ finalDelete5 && (
                <div
                  className={`flex lg:h-[230px] h-[100px] md:h-[150px] lg:p-5 p-[7px] md:p-3 rounded-md md:rounded-md
                   lg:rounded-xl shadow  border-b  border-[#d9d9d999] ${isRead4 ? 'bg-white' : 'bg-sky-100'} w-full justify-between
                   items-center`}
                >
                   <div className="w-full">
  <Link to="/launch-page">

                  <div className="flex gap-2 lg:gap-4 md:gap-2.5 justify-start text-start flex-col">
                    <div className="font-semibold text-text-color-fade text-zinc-500 lg:text-base md:text-xs  text-[8px] ">
                      New Launch!!
                    </div>

                    <p className="font-bold text-text-color-fade md:text-xs  text-zinc-500 text-[8px] whitespace-nowrap lg:text-lg tracking-[0] leading-[normal]">
                      We are excited to lunch our global platform for all <br />things
                      telecom,
                       payments, and Digital services.
                    </p>
                    <p className="font-medium text-[#9c9c9c] md:text-xs md:font-medium text-[6px] lg:text-xs tracking-[0.09px] leading-[normal]">
                      August 10th, 2023 12 :00:00am
                    </p>
                    <div className="font-semibold text-main md:text-xs md:font-semibold text-[6px] lg:text-sm text-blue-900 tracking-[0] leading-[normal]">
                      Learn more..
                    </div>
                  </div>
</Link>
</div>
                  <div className="flex lg:gap-4 md:gap-3 gap-2 justify-between">
                    <div className="flex flex-col">
                      <img
                        className="lg:w-[150px] relative lg:h-[150px] mt-[5px] w-[50px] h-[50px] md:w-[100px]
                   flex justify-center 
                   md:h-[100px]"
                        src={faq}
                        alt=""
                      />

                    </div>
                    <div className="flex justify-end items-center lg:gap-[65px] md:gap-[40px] gap-[30px] flex-col-reverse">
                     <div className="flex relative">
                      <div
                        onClick={() => {
                          setIsOpen11((prev) => !prev);
                          setIsOpen6(false);
                          setIsOpen7(false);
                          setIsOpen8(false);
                          setIsOpen9(false);
                          setIsOpen10(false);
                        }}
                        className="Frame758532418 cursor-pointer flex-col justify-center items-start gap-0.5 flex"
                      >
                        <div className="Ellipse141 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                        <div className="Ellipse142 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                        <div className="Ellipse143 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                      </div>
                      {isOpen11 && (
                        <div
                          className="Frame758532672 absolute w-[100px]
                           md:w-[180px] lg:w-[190px] 
                           top-[7px] md:top-[5px] left-[-100px] md:left-[-182px] lg:left-[-191px] lg:top-[10px] 
                           shadow flex-col 
               justify-start items-start flex"
                        >
{isRead4 ? (
                          <div
                              onClick={handleClick4}
                                                       
                                                       
                                                       
                                                       
                            
                            className="Frame758532670 px-4 py-1 bg-white cursor-pointer border-b border-neutral-400 lg:w-[190px] w-[100px] md:w-[180px]
         h-[23px] justify-center md:h-[40px] lg:h-[41px]
        items-center gap-1.5 flex"
                          >
                            <div className="MarkAsRead text-zinc-500 text-[8px] md:text-xs font-normal lg:text-sm whitespace-nowrap ">
                              Mark as unread
                            </div>
                            
                          </div>
                          
                          ) : (
                          <div
                              onClick={handleClick4}
                                                        
                                                        
                                                        
                                                        
                            
                            className="Frame758532670 px-4 py-1 bg-white cursor-pointer border-b border-neutral-400 lg:w-[190px] w-[100px] md:w-[180px]
         h-[23px] justify-center md:h-[40px] lg:h-[41px]
        items-center gap-1.5 flex"
                          >
                            <div className="MarkAsRead text-zinc-500 text-[8px] md:text-xs font-normal lg:text-sm whitespace-nowrap ">
                              Mark as read
                            </div>
                            
                          </div>
                          )}


                          <div
                          onClick={openModal}
                            className="Frame758532672 px-4 py-1 bg-white h-[23px] cursor-pointer lg:h-[41px] md:h-[40px] lg:w-[190px] w-[100px] md:w-[180px] border-b
          justify-center items-center gap-1.5 flex"
                          >
                            <div className="Delete text-red-500 text-[8px] md:text-xs lg:text-sm font-normal ">
                              Delete
                            </div>
                          </div>
                        </div>
                      )}

</div>
                      <div
                        className={`Ellipse147 w-1.5 h-1.5 md:w-3 md:h-3 lg:mt-[-25px] md:mt-[-10px] mt-[-15px] lg:w-5 lg:h-5 flex 
               bg-red-400 rounded-full ${isRead4 ? 'bg-white' : 'bg-red-400'}`}
                      />
                    </div>
                  </div>
                </div>
)}
    {finalDelete6 && (
                <div className="flex gap-[15px] mt-[150px] lg:mt-[300px] mb-10 md:mt-[200px] justify-center items-center">
                  <div className="text-xs font-medium ">You need help ?</div>
                  <Link to="/ContactUs">
                    <div
                      className={`${isDarkMode ? "border " : "bg-[#04177f]"} ${
                        styles.contactus
                      }`}
                    >
                      Contact Us
                    </div>
                  </Link>
                </div>
)}

{showPicture && (
<div className={`${styles.viewTransactions} mt-[50px] `}>
                <img
                  className={styles.noTransactions}
                  src="./Images/Dashboardimages/noTransactionFound.png"
                  alt=""
                />
                <div
                  className={`${
                    isDarkMode ? "" : "text-[#0003]"
                  } text-lg   text-opacity-30 mt-[-20px] lg:text-2xl  font-semibold `}
                >
                  No Notification Found !
                </div>
                <div className="flex gap-[15px] mt-[390px] lg:mt-[1050px] lg:mb-10 mb-5 md:mt-[700px] items-center">
                  <div className="text-xs font-medium ">You need help ?</div>
                  <Link to="/ContactUs">
                    <div
                      className={`${isDarkMode ? "border " : "bg-[#04177f]"} ${
                        styles.contactus
                      }`}
                    >
                      Contact Us
                    </div>
                  </Link>
                </div>
              </div>
)}

              </div>
              </div>
            )}

            {/* second flow */}
            {isOpen2 &&  (
              <div
                className="flex flex-col w-full lg:w-full md:w-full mt-[50px] lg:mt-[100px]
         md:mt-[70px] md:gap-[45px] lg:gap-10 gap-[20.64px] "
              >

{deleteAll && (
                <div className="flex  lg:gap-[35px] lg:mt-[-80px] mt-[-40px] gap-[15px] md:gap-[25px] md:mt-[-60px] 
                justify-end items-end  ">
                                  {isRead7 && isRead8 && isRead9 && isRead10 && isRead11 ? (
                  <div
                    className="flex flex-col lg:w-[187px] cursor-pointer items-start lg:gap-[7px] lg:p-[8px]
              bg-white border-neutral-400
             lg:rounded-[6px] lg:border-[0.2px] border-solid p-1 w-24 md:w-[120px]   border shadow 
             rounded gap-1.5 lg:shadow-[0px_0px_1px_#00000040]"
                  >
                    <div
                                          onClick={handleClick12}
                      
                      className="flex lg:w-[171px] items-center lg:gap-[14px] gap-2  flex-[0_0_auto]"
                    >
                      <img
                        className=" lg:w-[24px] lg:h-[18.67px] md:w-[14px] md:h-[11px] w-[10px] h-[8px]"
                        alt="Vector"
                        src={envelope}
                      />
                      <div
                        className="lg:w-[133px] w-[67px] md:w-[78px] mt-[-1.00px] font-medium text-zinc-500  text-text-color-fade
                 lg:text-[15px] tracking-[0] text-[7px] md:text-[9px] whitespace-nowrap leading-[normal]"
                      >
                        Mark all as Unread
                      </div>
                    </div>
                  </div>

                    ) : (

                  <div
                    className="flex flex-col lg:w-[187px]  cursor-pointer items-start lg:gap-[10px] lg:p-[8px]
              bg-white border-neutral-400
             lg:rounded-[6px] lg:border-[0.2px] border-solid p-1 w-24 md:w-[120px]   border shadow rounded gap-1.5 lg:shadow-[0px_0px_1px_#00000040]"
                  >
                    <div
                                          onClick={handleClick12}
                      
                      className="flex lg:w-[171px] items-center lg:gap-[14px] gap-2  flex-[0_0_auto]"
                    >
                      <img
                        className=" lg:w-[24px] lg:h-[18.67px] md:w-[14px] md:h-[11px] w-[10px] h-[8px]"
                        alt="Vector"
                        src={envelope}
                      />
                      <div
                        className="lg:w-[133px] w-[67px] md:w-[78px] mt-[-1.00px] font-medium text-zinc-500  text-text-color-fade
                 lg:text-[15px] tracking-[0] text-[7px] md:text-[9px] leading-[normal]"
                      >
                        Mark all as Read
                      </div>
                    </div>
                  </div>
                  )}

                  <div
                  onClick={openModal2}
                    className="flex items-center lg:gap-[14px] cursor-pointer    lg:p-[8px]
              flex-[0_0_auto] bg-white lg:rounded-[6px]  border-red-500 
               lg:border-[0.2px] border-solid border-variable-collection- text-danger p-1
                rounded shadow border gap-2 lg:shadow-[0px_0px_1px_#00000040]"
                  >
                    <img
                      className=" lg:w-[16px] lg:h-[20.57px] w-[8px] h-[9px] md:w-[9px] md:h-[12px]"
                      alt="Vector"
                      src={bin}
                    />
                    <div
                      className=" lg:w-fit w-[38px]  md:w-[44px] mt-[-0.20px] font-medium text-variable-collection-text-danger
               text-red-500 lg:text-[15px] text-[7px] md:text-[9px] tracking-[0] leading-[normal]"
                    >
                      Delete all
                    </div>
                  </div>
                </div>
)}


{isModalOpen2 && (
                <Modal>
                  <div
                   className=" bg-white md:mx-auto md:my-auto w-[370px] lg:w-[1000px] lg:h-[500px] md:w-[690px]
                    md:h-[350px] lg:mx-auto lg:my-auto h-[250px]
                    md:overflow-auto rounded-[12px] "
                  >
                                          <img 
                      onClick={closeModal2}
                      className=" lg:w-[25px] w-[15px] lg:ml-[970px] h-[15px] lg:h-[25px] mt-[3px] md:ml-[665px] 
                      md:mt-[5px] md:w-[20px] md:h-[20px] ml-[350px] lg:mt-[5px] flex "  src={VuesaxBoldEye} alt=""/>

                    <hr className="h-[6px] bg-[#04177f] lg:mt-[3%] border-none mt-[3%] md:mt-[6%] md:h-[10px] lg:h-[20px]" />
                    <p className="text-[10px] px-[20px] md:text-[14px] lg:text-[18px] font-extrabold text-center my-[3%] lg:my-[%]">
                      Are you sure you want to delete all notifications?
                    </p>
                    <div className="flex flex-col gap-[10px] justify-center items-center font-extrabold mb-[7%]">
                      <img
                        className="default-card w-[100px] h-[100px] mx-auto mb-[2%] md:h-[100px] md:w-[150px]"
                        src={deletingfiles}
                        alt="/"
                      />
                    </div>

                    <div
                      className={`flex flex-row lg:gap-[3px] gap-[-30px] justify-center items-center h-[38px]
                       mt-[20px] md:mt-[10px] px-[20px] lg:mt-[-30px] md:justify-center md:items-center mx-auto 
                       md:px-[40px]`}
                    >
                      <button
                        className={`bg-[#04177F] flex justify-center items-center lg:ml-[210px] ml-[50px] cursor-pointer 
                        lg:w-[20%] w-[40%] md:w-[20%] md:ml-[140px] md:h-[30px] 
                        text-[14px] font-extrabold h-[20px] text-white rounded-[6px]  md:rounded-[8px]
                         md:text-[20px] lg:text-[16px] lg:h-[38px] lg:my-[4%]`}

                        onClick={() => {
                          handleDelete2('deleteAll')
      
      
      
      
                          
                          
                        }}
      
                      >
                        Yes
                      </button>
                      <button
                        className={`bg-[#fff] w-full flex justify-center items-center mr-auto cursor-pointer 
                        text-[14px] font-extrabold h-[40px] text-[#F95252] rounded-[6px] md:w-[40%] md:rounded-[8px]
                         md:text-[20px] lg:text-[16px] lg:h-[38px] lg:my-[4%]`}
                        onClick={closeModal2}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </Modal>
)}








{showSuccessMessage2 && (
                <Modal>
                  <div
                  
                  
                  
                  // className="
                    //  
          // 
                  //  bg-white md:mx-auto md:my-auto lg:mx-auto md:w-[690px] lg:w-[1000px] lg:h-[500px]
                    // md:h-[350px] w-[370px] lg:my-auto md:overflow-auto rounded-[12px] h-[250px]"


                    className={`${style.inputPin} ${
                      toggleSideBar ? "md:w-[45%] lg:w-[40%] lg:ml-[20%]" : "lg:w-[40%]"
                      } md:w-[55%] w-[90%] relative `}
                  >
                                                              <img 
                      onClick={closeModal2}
                      className=" lg:w-[25px] md:w-[20px] justify-end items-end md:h-[20px] z-[1000] md:ml-[665px] md:mt-[5px] 
                       lg:h-[25px] w-[15px] h-[15px] lg:mt-[5px] mt-[3px] lg:ml-[970px]
                       ml-[320px] flex "  src={VuesaxBoldEye} alt=""/>

                    <hr className="h-[6px] bg-[#04177f] lg:h-[20px] lg:mt-[3%] border-none 
                    
 mt-[3%]" />
                    <p className="text-[10px] md:text-[16px] lg:text-[18px] font-extrabold text-center my-[3%] lg:my-[%]">
                      Successful
                    </p>
                    <p className="text-[10px] text-[#00AA48] md:text-[14px] px-[20px] lg:text-[18px] font-extrabold text-center my-[1%] lg:my-[%]">
                    All notifications has been deleted successfully.
                    </p>
                    <div className="flex flex-col gap-[10px] justify-center items-center font-extrabold mb-[5%]">
                      <img
                        className="success-default-card w-[100px] h-[100px] md:w-[90px] md:h-[90px] mx-auto mb-[2%] lg:w-[150px] lg:h-[120px]"
                        src={SuccessGif}
                        alt="/"
                      />
                    </div>

                    <div
                      className={`w-full h-[38px] mt-[-10px] px-[20px] md:mt-[10px]`}
                    >
                      <button
                        className={`bg-[#04177F] mt-[10%] w-[88%] flex justify-center 
                        items-center mx-auto cursor-pointer text-[14px] font-extrabold h-[40px] text-white
                         rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[16px] lg:text-[14px] lg:w-[163px] 
                         lg:h-[38px] lg:mt-[5%]`}
                        
                        onClick={() => {
                          setShowSuccessMessage2(false);
                          setShowPicture1(true);
                        }}
      
                      >
                        Done
                      </button>
                    </div>
                  </div>
                </Modal>
)}






  {deleteAll && (
                <div  className="flex flex-col lg:gap-7 gap-3 md:gap-5">

                <div
                  className={`flex lg:h-[230px] h-[100px] md:h-[150px] lg:p-5 p-[7px] md:p-3 rounded-md md:rounded-md
                   lg:rounded-xl shadow  border-b  border-[#d9d9d999] ${isRead7 ? 'bg-white' : 'bg-sky-100'} w-full justify-between
                   items-center`}
                >
                   <div className="w-full">
  <Link to="/launch-page2">


                  <div className="flex gap-2 lg:gap-4 md:gap-2.5 justify-start text-start flex-col">
                    <div className="font-semibold text-text-color-fade text-zinc-500 lg:text-base md:text-xs  text-[8px] ">
                      New Launch!!
                    </div>

                    <p className="font-bold text-zinc-500 text-color-fade md:text-xs text-[7px] whitespace-nowrap lg:text-lg tracking-[0] leading-[normal]">
                      We are excited to launch our Airtime Top-up and
                       Data Top-up  features<br /> for all local networks
                       including MTN, AIRTEL, GLO, and 9MOBILE.
                    </p>
                    <p className="font-medium text-[#9c9c9c] md:text-xs md:font-medium text-[5px] lg:text-xs tracking-[0.09px] leading-[normal]">
                      August 10th, 2023 12 :00:00am
                    </p>
                    <div className="font-semibold text-main md:text-xs md:font-semibold text-[5px] lg:text-sm text-blue-900 tracking-[0] leading-[normal]">
                      Buy Now..
                    </div>
                  </div>
</Link>
</div>
                  <div className="flex lg:gap-4 md:gap-3 gap-2 justify-between">
                    <div className="flex flex-col">
                      <img
                        className="lg:w-[150px] lg:h-[150px] relative mt-[5px] w-[50px] h-[50px] md:w-[100px]
                   flex justify-center 
                   md:h-[100px]"
                        src={file}
                        alt=""
                      />

                    </div>
                    <div className="flex justify-end  items-center lg:gap-[65px] md:gap-[40px] gap-[30px] flex-col-reverse">
                      <div className="flex relative">
                      {isOpen12 && (
                        <div
                          className="Frame758532672 absolute w-[100px] md:w-[180px] lg:w-[190px] 
                           top-[7px] md:top-[5px] left-[-100px] md:left-[-182px] lg:left-[-191px] lg:top-[10px] shadow flex-col 
               justify-start items-start flex"
                        >


                    {isRead7 ? (
                          <div
                              onClick={handleClick7}
                                                       
                                                       
                                                       
                                                       
                            
                            className="Frame758532670 px-4 py-1 bg-white cursor-pointer border-b border-neutral-400 lg:w-[190px] w-[100px] md:w-[180px]
         h-[23px] justify-center md:h-[40px] lg:h-[41px]
        items-center gap-1.5 flex"
                          >
                            <div className="MarkAsRead text-zinc-500 text-[8px] md:text-xs font-normal lg:text-sm whitespace-nowrap ">
                              Mark as unread
                            </div>
                            
                          </div>
                          
                          ) : (
                          <div
                              onClick={handleClick7}
                                                        
                                                        
                                                        
                                                        
                            
                            className="Frame758532670 px-4 py-1 bg-white cursor-pointer border-b border-neutral-400 lg:w-[190px] w-[100px] md:w-[180px]
         h-[23px] justify-center md:h-[40px] lg:h-[41px]
        items-center gap-1.5 flex"
                          >
                            <div className="MarkAsRead text-zinc-500 text-[8px] md:text-xs font-normal lg:text-sm whitespace-nowrap ">
                              Mark as read
                            </div>
                            
                          </div>
                          )}


                          <div
                          
                            className="Frame758532672 px-4 py-1 bg-white h-[23px] cursor-pointer lg:h-[41px] md:h-[40px] lg:w-[190px] w-[100px] md:w-[180px] border-b
          justify-center items-center gap-1.5 flex"
                          >
                            <div className="Delete text-red-500 text-[8px] md:text-xs lg:text-sm font-normal ">
                              Delete
                            </div>
                          </div>
                        </div>
                      )}


                      <div
                        onClick={() => {
                          setIsOpen12((prev) => !prev);
                          setIsOpen13(false);
                          setIsOpen14(false);
                          setIsOpen15(false);
                          setIsOpen16(false);
                        }}
                        className="Frame758532418 cursor-pointer  flex-col justify-center items-start gap-0.5 flex"
                      >
                        <div className="Ellipse141 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                        <div className="Ellipse142 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                        <div className="Ellipse143 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                      </div>
</div>
                      <div
                        className={`Ellipse147 w-1.5 h-1.5 md:w-3 md:h-3 lg:mt-[-25px] md:mt-[-10px] mt-[-15px] lg:w-5 lg:h-5 flex 
               bg-red-400 rounded-full ${isRead7 ? 'bg-white' : 'bg-red-400'}`}
                      />
                    </div>
                  </div>
                </div>
            






                <div
                  className={`flex lg:h-[230px] h-[100px] md:h-[150px] lg:p-5 p-[7px] md:p-3 rounded-md md:rounded-md
                   lg:rounded-xl shadow  border-b  border-[#d9d9d999] ${isRead8 ? 'bg-white' : 'bg-sky-100'} w-full justify-between
                   items-center`}
                >
                   <div className="w-full">
  <Link to="/launch-page2">


                  <div className="flex gap-2 lg:gap-4 md:gap-2.5 justify-start text-start flex-col">
                    <div className="font-semibold text-text-color-fade text-zinc-500 lg:text-base md:text-xs 
                     text-[8px] ">
                      New Launch!!
                    </div>

                    <p className="font-bold text-text-color-fade  text-zinc-500 md:text-xs text-[7px] lg:text-lg tracking-[0] whitespace-nowrap leading-[normal]">
                                           We are excited to launch our Airtime Top-up and     
                                            Data Top-up features  <br /> for all local networks 
                                            including MTN, AIRTEL, GLO, and 9MOBILE.     
                    </p>
                    <p className="font-medium text-[#9c9c9c] md:text-xs md:font-medium text-[5px] lg:text-xs tracking-[0.09px] leading-[normal]">
                      August 10th, 2023 12 :00:00am
                    </p>
                    <div className="font-semibold text-main md:text-xs md:font-semibold text-[5px] lg:text-sm text-blue-900 tracking-[0] leading-[normal]">
                      Buy Now..
                    </div>
                  </div>
</Link>
</div>
                  <div className="flex lg:gap-4 md:gap-3 gap-2 justify-between">
                    <div className="flex flex-col">
                      <img
                        className="lg:w-[150px] relative lg:h-[150px] mt-[5px] w-[50px] h-[50px] md:w-[100px]
                   flex justify-center 
                   md:h-[100px]"
                        src={file}
                        alt=""
                      />
                    </div>
                    <div className="flex justify-end  items-center lg:gap-[65px] md:gap-[40px] gap-[30px] flex-col-reverse">
                      <div className="flex relative">
                      {isOpen13 && (
                        <div
                          className="Frame758532672 absolute w-[100px] md:w-[180px] lg:w-[190px]
                           top-[7px] md:top-[5px] left-[-100px] md:left-[-182px] lg:left-[-191px] lg:top-[10px] shadow flex-col 
               justify-start items-start flex"
                        >

                        {isRead8 ? (
                          <div
                              onClick={handleClick8}
                                                       
                                                       
                                                       
                                                       
                            
                            className="Frame758532670 px-4 py-1 bg-white cursor-pointer border-b border-neutral-400 lg:w-[190px] w-[100px] md:w-[180px]
         h-[23px] justify-center md:h-[40px] lg:h-[41px]
        items-center gap-1.5 flex"
                          >
                            <div className="MarkAsRead text-zinc-500 text-[8px] md:text-xs font-normal lg:text-sm whitespace-nowrap ">
                              Mark as unread
                            </div>
                            
                          </div>
                          
                          ) : (
                          <div
                              onClick={handleClick8}
                                                        
                                                        
                                                        
                                                        
                            
                            className="Frame758532670 px-4 py-1 bg-white cursor-pointer border-b border-neutral-400 lg:w-[190px] w-[100px] md:w-[180px]
         h-[23px] justify-center md:h-[40px] lg:h-[41px]
        items-center gap-1.5 flex"
                          >
                            <div className="MarkAsRead text-zinc-500 text-[8px] md:text-xs font-normal lg:text-sm whitespace-nowrap ">
                              Mark as read
                            </div>
                            
                          </div>
                          )}

                          <div
                            className="Frame758532672 px-4 py-1 bg-white h-[23px] cursor-pointer lg:h-[41px] md:h-[40px] lg:w-[190px] w-[100px] md:w-[180px] border-b
          justify-center items-center gap-1.5 flex"
                          >
                            <div className="Delete text-red-500 text-[8px] md:text-xs lg:text-sm font-normal ">
                              Delete
                            </div>
                          </div>
                        </div>
                      )}


                      <div
                        onClick={() => {
                          setIsOpen13((prev) => !prev);
                          setIsOpen14(false);
                          setIsOpen15(false);
                          setIsOpen12(false);
                          setIsOpen16(false);
                        }}
                        className="Frame758532418 cursor-pointer flex-col justify-center items-start gap-0.5 flex"
                      >
                        <div className="Ellipse141 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                        <div className="Ellipse142 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                        <div className="Ellipse143 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                      </div>
</div>
                      <div
                        className={`Ellipse147 w-1.5 h-1.5 md:w-3 md:h-3 lg:mt-[-25px] md:mt-[-10px] mt-[-15px] lg:w-5 lg:h-5 flex 
               bg-red-400 rounded-full ${isRead8 ? 'bg-white' : 'bg-red-400'}`}
                      />
                    </div>
                  </div>
                </div>






                <div
                  className={`flex lg:h-[230px] h-[100px] md:h-[150px] lg:p-5 p-[7px] md:p-3 rounded-md md:rounded-md
                   lg:rounded-xl shadow  border-b  border-[#d9d9d999] ${isRead9 ? 'bg-white' : 'bg-sky-100'} w-full justify-between
                   items-center`}
                >
                   <div className="w-full">
  <Link to="/launch-page2">


                  <div className="flex gap-2 lg:gap-4 md:gap-2.5 justify-start text-start flex-col">
                    <div className="font-semibold text-text-color-fade text-zinc-500 lg:text-base md:text-xs  text-[8px] ">
                      New Launch!!
                    </div>

                    <p className="font-bold text-text-color-fade md:text-xs text-zinc-500 whitespace-nowrap text-[7px] lg:text-lg tracking-[0] leading-[normal]">
                                           We are excited to launch our Airtime Top-up and     
                                            Data Top-up features <br />  for all local networks 
                                            including MTN, AIRTEL, GLO, and 9MOBILE.     
                    </p>
                    <p className="font-medium text-[#9c9c9c] md:text-xs md:font-medium text-[5px] lg:text-xs tracking-[0.09px] leading-[normal]">
                      August 10th, 2023 12 :00:00am
                    </p>
                    <div className="font-semibold text-main md:text-xs md:font-semibold text-[5px] lg:text-sm text-blue-900 tracking-[0] leading-[normal]">
                      Buy Now..
                    </div>
                  </div>
</Link>
</div>
                  <div className="flex lg:gap-4 md:gap-3 gap-2 justify-between">
                    <div className="flex flex-col">
                      <img
                        className="lg:w-[150px] relative lg:h-[150px] mt-[5px] w-[50px] h-[50px] md:w-[100px]
                   flex justify-center 
                   md:h-[100px]"
                        src={file}
                        alt=""
                      />

                    </div>
                    <div className="flex justify-end items-center lg:gap-[65px] md:gap-[40px] gap-[30px] flex-col-reverse">
                      <div className="flex relative">

                      {isOpen14 && (
                        <div
                          className="Frame758532672 absolute w-[100px] md:w-[180px] lg:w-[190px] 
                       shadow flex-col top-[7px] md:top-[5px] left-[-100px] md:left-[-182px] lg:left-[-191px] lg:top-[10px]
               justify-start items-start flex"
                        >

                        {isRead9 ? (
                          <div
                              onClick={handleClick9}
                                                       
                                                       
                                                       
                                                       
                            
                            className="Frame758532670 px-4 py-1 bg-white cursor-pointer border-b border-neutral-400 lg:w-[190px] w-[100px] md:w-[180px]
         h-[23px] justify-center md:h-[40px] lg:h-[41px]
        items-center gap-1.5 flex"
                          >
                            <div className="MarkAsRead text-zinc-500 text-[8px] md:text-xs font-normal lg:text-sm whitespace-nowrap ">
                              Mark as unread
                            </div>
                            
                          </div>
                          
                          ) : (
                          <div
                              onClick={handleClick9}
                                                        
                                                        
                                                        
                                                        
                            
                            className="Frame758532670 px-4 py-1 bg-white cursor-pointer border-b border-neutral-400 lg:w-[190px] w-[100px] md:w-[180px]
         h-[23px] justify-center md:h-[40px] lg:h-[41px]
        items-center gap-1.5 flex"
                          >
                            <div className="MarkAsRead text-zinc-500 text-[8px] md:text-xs font-normal lg:text-sm whitespace-nowrap ">
                              Mark as read
                            </div>
                            
                          </div>
                          )}

                          <div
                            className="Frame758532672 px-4 py-1 bg-white h-[23px] cursor-pointer lg:h-[41px] md:h-[40px] lg:w-[190px] w-[100px] md:w-[180px] border-b
          justify-center items-center gap-1.5 flex"
                          >
                            <div className="Delete text-red-500 text-[8px] md:text-xs lg:text-sm font-normal ">
                              Delete
                            </div>
                          </div>
                        </div>
                      )}

                      <div
                        onClick={() => {
                          setIsOpen14((prev) => !prev);
                          setIsOpen15(false);
                          setIsOpen16(false);
                          setIsOpen13(false);
                          setIsOpen12(false);
                        }}
                        className="Frame758532418 cursor-pointer  flex-col justify-center items-start gap-0.5 flex"
                      >
                        <div className="Ellipse141 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                        <div className="Ellipse142 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                        <div className="Ellipse143 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                      </div>
</div>
                      <div
                        className={`first-letter:Ellipse147 w-1.5 h-1.5 md:w-3 md:h-3 lg:mt-[-25px] md:mt-[-10px] mt-[-15px] lg:w-5 lg:h-5 flex 
               bg-red-400 rounded-full ${isRead9 ? 'bg-white' : 'bg-red-400'}`}
                      />
                    </div>
                  </div>
                </div>
                




  

<div
                  className={`flex lg:h-[230px] h-[100px] md:h-[150px] lg:p-5 p-[7px] md:p-3 rounded-sm md:rounded-md
                   lg:rounded-xl shadow  border-b  border-[#d9d9d999] ${isRead10 ? 'bg-white' : 'bg-sky-100'} w-full justify-between
                   items-center`}
                >
                   <div className="w-full">
  <Link to="/launch-page2">

                  <div className="flex gap-2 lg:gap-4 md:gap-2.5 justify-start text-start flex-col">
                    <div className="font-semibold text-text-color-fade text-zinc-500 lg:text-base md:text-xs  text-[8px] ">
                      New Launch!!
                    </div>

                    <p className="font-bold text-text-color-fade md:text-xs text-zinc-500 whitespace-nowrap text-[7px] lg:text-lg tracking-[0] leading-[normal]">
                                           We are excited to launch our Airtime Top-up and     
                                            Data Top-up features <br />  for all local networks 
                                            including MTN, AIRTEL, GLO, and 9MOBILE.     
                    </p>
                    <p className="font-medium text-[#9c9c9c] md:text-xs md:font-medium text-[5px] lg:text-xs tracking-[0.09px] leading-[normal]">
                      August 10th, 2023 12 :00:00am
                    </p>
                    <div className="font-semibold text-main md:text-xs md:font-semibold text-[5px] lg:text-sm text-blue-900 tracking-[0] leading-[normal]">
                      Buy Now..
                    </div>
                  </div>
</Link>
</div>
                  <div className="flex lg:gap-4 md:gap-3 gap-2 justify-between">
                    <div className="flex flex-col">
                      <img
                        className="lg:w-[150px] relative lg:h-[150px] mt-[5px] w-[50px] h-[50px] md:w-[100px]
                   flex justify-center 
                   md:h-[100px]"
                        src={file}
                        alt=""
                      />

                    </div>
                    <div className="flex justify-end items-center lg:gap-[65px] md:gap-[40px] gap-[30px] flex-col-reverse">
                      
                      <div className="flex relative">
                      {isOpen15 && (
                        <div
                          className="Frame758532672 absolute w-[100px] md:w-[180px] lg:w-[190px] 
                       shadow flex-col top-[7px] md:top-[5px] left-[-100px] md:left-[-182px] lg:left-[-191px] lg:top-[10px]
               justify-start items-start flex"
                        >

                        {isRead10 ? (
                          <div
                              onClick={handleClick10}
                                                       
                                                       
                                                       
                                                       
                            
                            className="Frame758532670 px-4 py-1 bg-white cursor-pointer border-b border-neutral-400 lg:w-[190px] w-[100px] md:w-[180px]
         h-[23px] justify-center md:h-[40px] lg:h-[41px]
        items-center gap-1.5 flex"
                          >
                            <div className="MarkAsRead text-zinc-500 text-[8px] md:text-xs font-normal lg:text-sm whitespace-nowrap ">
                              Mark as unread
                            </div>
                            
                          </div>
                          
                          ) : (
                          <div
                              onClick={handleClick10}
                                                        
                                                        
                                                        
                                                        
                            
                            className="Frame758532670 px-4 py-1 bg-white cursor-pointer border-b border-neutral-400 lg:w-[190px] w-[100px] md:w-[180px]
         h-[23px] justify-center md:h-[40px] lg:h-[41px]
        items-center gap-1.5 flex"
                          >
                            <div className="MarkAsRead text-zinc-500 text-[8px] md:text-xs font-normal lg:text-sm whitespace-nowrap ">
                              Mark as read
                            </div>
                            
                          </div>
                          )}

                          <div
                            className="Frame758532672 px-4 py-1 bg-white h-[23px] cursor-pointer lg:h-[41px] md:h-[40px] lg:w-[190px] w-[100px] md:w-[180px] border-b
          justify-center items-center gap-1.5 flex"
                          >
                            <div className="Delete text-red-500 text-[8px] md:text-xs lg:text-sm font-normal ">
                              Delete
                            </div>
                          </div>
                        </div>
                      )}

                      <div
                        onClick={() => {
                          setIsOpen15((prev) => !prev);
                          setIsOpen16(false);
                          setIsOpen14(false);
                          setIsOpen13(false);
                          setIsOpen12(false);
                        }}
                        className="Frame758532418 cursor-pointer flex-col justify-center items-start gap-0.5 flex"
                      >
                        <div className="Ellipse141 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                        <div className="Ellipse142 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                        <div className="Ellipse143 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                      </div>
</div>
                      <div
                        className={`Ellipse147 w-1.5 h-1.5 md:w-3 md:h-3 lg:mt-[-25px] md:mt-[-10px] mt-[-15px] lg:w-5 lg:h-5 flex 
               bg-red-400 rounded-full ${isRead10 ? 'bg-white' : 'bg-red-400'}`}
                      />
                    </div>
                  </div>
                </div>






<div
                  className={`flex lg:h-[230px] h-[100px] md:h-[150px] lg:p-5 p-[7px] md:p-3 rounded-md md:rounded-md
                   lg:rounded-xl shadow  border-b  border-[#d9d9d999] ${isRead11 ? 'bg-white' : 'bg-sky-100'} w-full justify-between
                   items-center`}
                >
                   <div className="w-full">
  <Link to="/launch-page2">


                  <div className="flex gap-2 lg:gap-4 md:gap-2.5 justify-start text-start flex-col">
                    <div className="font-semibold text-text-color-fade text-zinc-500 lg:text-base md:text-xs  text-[8px] ">
                      New Launch!!
                    </div>

                    <p className="font-bold text-text-color-fade md:text-xs text-zinc-500 text-[7px] whitespace-nowrap lg:text-lg tracking-[0] leading-[normal]">
                    We are excited to launch our Airtime Top-up and
                       Data Top-up features <br />  for all local networks
                       including MTN, AIRTEL, GLO, and 9MOBILE.
                    </p>
                    <p className="font-medium text-[#9c9c9c] md:text-xs md:font-medium text-[5px] lg:text-xs tracking-[0.09px] leading-[normal]">
                      August 10th, 2023 12 :00:00am
                    </p>
                    <div className="font-semibold text-main md:text-xs md:font-semibold text-[5px] lg:text-sm text-blue-900 tracking-[0] leading-[normal]">
                      Buy Now..
                    </div>
                  </div>
</Link>
</div>
                  <div className="flex lg:gap-4 md:gap-3 gap-2 justify-between">
                    <div className="flex flex-col">
                      <img
                        className="lg:w-[150px] relative lg:h-[150px] mt-[5px] w-[50px] h-[50px] md:w-[100px]
                   flex justify-center 
                   md:h-[100px]"
                        src={file}
                        alt=""
                      />

                    </div>
                    <div className="flex justify-end  items-center lg:gap-[65px] md:gap-[40px] gap-[30px] flex-col-reverse">
                      <div className="flex relative">
                      {isOpen16 && (
                        <div
                          className="Frame758532672 absolute w-[100px] md:w-[180px] lg:w-[190px] 
                       shadow flex-col top-[7px] md:top-[5px] left-[-100px] md:left-[-182px] lg:left-[-191px] lg:top-[10px]
               justify-start items-start flex"
                        >

                        {isRead11 ? (
                          <div
                              onClick={handleClick11}
                                                       
                                                       
                                                       
                                                       
                            
                            className="Frame758532670 px-4 py-1 bg-white cursor-pointer border-b border-neutral-400 lg:w-[190px] w-[100px] md:w-[180px]
         h-[23px] justify-center md:h-[40px] lg:h-[41px]
        items-center gap-1.5 flex"
                          >
                            <div className="MarkAsRead text-zinc-500 text-[8px] md:text-xs font-normal lg:text-sm whitespace-nowrap ">
                              Mark as unread
                            </div>
                            
                          </div>
                          
                          ) : (
                          <div
                              onClick={handleClick11}
                                                        
                                                        
                                                        
                                                        
                            
                            className="Frame758532670 px-4 py-1 bg-white cursor-pointer border-b border-neutral-400 lg:w-[190px] w-[100px] md:w-[180px]
         h-[23px] justify-center md:h-[40px] lg:h-[41px]
        items-center gap-1.5 flex"
                          >
                            <div className="MarkAsRead text-zinc-500 text-[8px] md:text-xs font-normal lg:text-sm whitespace-nowrap ">
                              Mark as read
                            </div>
                            
                          </div>
                          )}

                          <div
                            className="Frame758532672 px-4 py-1 bg-white h-[23px] cursor-pointer lg:h-[41px] md:h-[40px] lg:w-[190px] w-[100px] md:w-[180px] border-b
          justify-center items-center gap-1.5 flex"
                          >
                            <div className="Delete text-red-500 text-[8px] md:text-xs lg:text-sm font-normal ">
                              Delete
                            </div>
                          </div>
                        </div>
                      )}

                      <div
                        onClick={() => {
                          setIsOpen16((prev) => !prev);
                          setIsOpen15(false);
                          setIsOpen14(false);
                          setIsOpen13(false);
                          setIsOpen12(false);
                        }}
                        className="Frame758532418 cursor-pointer flex-col justify-center items-start gap-0.5 flex"
                      >
                        <div className="Ellipse141 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                        <div className="Ellipse142 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                        <div className="Ellipse143 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                      </div>
</div>
                      <div
                        className={`Ellipse147 w-1.5 h-1.5 md:w-3 md:h-3 lg:mt-[-25px] md:mt-[-10px] mt-[-15px] lg:w-5 lg:h-5 flex 
               bg-red-400 rounded-full ${isRead11 ? 'bg-white' : 'bg-red-400'}`}
                      />
                    </div>
                  </div>
                </div>


                <div className="flex gap-[15px]  mt-[150px] lg:mt-[300px] mb-10 md:mt-[200px] justify-center items-center">
                  <div className="text-xs font-medium ">You need help ?</div>
                  <Link to="/ContactUs">
                    <div
                      className={`${isDarkMode ? "border " : "bg-[#04177f]"} ${
                        styles.contactus
                      }`}
                    >
                      Contact Us
                    </div>
                  </Link>
                </div>

              </div>
              )}
              {showPicture1 && (
<div className={`${styles.viewTransactions} mt-[50px] `}>
                <img
                  className={styles.noTransactions}
                  src="./Images/Dashboardimages/noTransactionFound.png"
                  alt=""
                />
                <div
                  className={`${
                    isDarkMode ? "" : "text-[#0003]"
                  } text-lg   text-opacity-30 mt-[-20px] lg:text-2xl  font-semibold `}
                >
                  No Notification Found !
                </div>
                <div className="flex gap-[15px] mt-[390px] lg:mt-[1050px] lg:mb-10 mb-5 md:mt-[700px] items-center">
                  <div className="text-xs font-medium ">You need help ?</div>
                  <Link to="/ContactUs">
                    <div
                      className={`${isDarkMode ? "border " : "bg-[#04177f]"} ${
                        styles.contactus
                      }`}
                    >
                      Contact Us
                    </div>
                  </Link>
                </div>
              </div>
)}

              </div>
            )}
            {/* third flow */}
            {isOpen3 && (
              <div
                className="flex flex-col w-full lg:w-full  md:w-full mt-[50px] lg:mt-[100px] md:mt-[70px]
              md:gap-[45px] lg:gap-10 gap-[20.64px] "
              >
{deleteAll1 && (
                <div className="flex  lg:gap-[35px] lg:mt-[-80px] mt-[-40px] gap-[15px] md:gap-[25px] md:mt-[-60px] justify-end items-end  ">
                  { isRead13 && isRead14 && isRead15 && isRead16 && isRead17 ? (
                  <div
                    className="flex flex-col lg:w-[187px] cursor-pointer items-start lg:gap-[7px] lg:p-[8px]
              bg-white border-neutral-400
             lg:rounded-[6px] lg:border-[0.2px] border-solid p-1 w-24 md:w-[120px]   border shadow 
             rounded gap-1.5 lg:shadow-[0px_0px_1px_#00000040]"
                  >
                    <div
                                          onClick={handleClick18}
                      
                      className="flex lg:w-[171px] items-center lg:gap-[14px] gap-2  flex-[0_0_auto]"
                    >
                      <img
                        className=" lg:w-[24px] lg:h-[18.67px] md:w-[14px] md:h-[11px] w-[10px] h-[8px]"
                        alt="Vector"
                        src={envelope}
                      />
                      <div
                        className="lg:w-[133px] w-[67px] md:w-[78px] mt-[-1.00px] font-medium text-zinc-500  text-text-color-fade
                 lg:text-[15px] tracking-[0] text-[7px] md:text-[9px] whitespace-nowrap leading-[normal]"
                      >
                        Mark all as Unread
                      </div>
                    </div>
                  </div>

                    ) : (

                  <div
                    className="flex flex-col lg:w-[187px]  cursor-pointer items-start lg:gap-[10px] lg:p-[8px]
              bg-white border-neutral-400
             lg:rounded-[6px] lg:border-[0.2px] border-solid p-1 w-24 md:w-[120px]   border shadow rounded gap-1.5 lg:shadow-[0px_0px_1px_#00000040]"
                  >
                    <div
                                          onClick={handleClick18}
                      
                      className="flex lg:w-[171px] items-center lg:gap-[14px] gap-2  flex-[0_0_auto]"
                    >
                      <img
                        className=" lg:w-[24px] lg:h-[18.67px] md:w-[14px] md:h-[11px] w-[10px] h-[8px]"
                        alt="Vector"
                        src={envelope}
                      />
                      <div
                        className="lg:w-[133px] w-[67px] md:w-[78px] mt-[-1.00px] font-medium text-zinc-500  text-text-color-fade
                 lg:text-[15px] tracking-[0] text-[7px] md:text-[9px] leading-[normal]"
                      >
                        Mark all as Read
                      </div>
                    </div>
                  </div>
                  )}

                  <div
                  onClick={openModal3}

                    className="flex items-center lg:gap-[14px] cursor-pointer    lg:p-[8px]
              flex-[0_0_auto] bg-white lg:rounded-[6px]  border-red-500 
               lg:border-[0.2px] border-solid border-variable-collection- text-danger p-1
                rounded shadow border gap-2 lg:shadow-[0px_0px_1px_#00000040]"
                  >
                    <img
                      className=" lg:w-[16px] lg:h-[20.57px] w-[8px] h-[9px] md:w-[9px] md:h-[12px]"
                      alt="Vector"
                      src={bin}
                    />
                    <div
                      className=" lg:w-fit w-[38px]  md:w-[44px] mt-[-0.20px] font-medium text-variable-collection-text-danger
               text-red-500 lg:text-[15px] text-[7px] md:text-[9px] tracking-[0] leading-[normal]"
                    >
                      Delete all
                    </div>
                  </div>
                </div>
)}



{isModalOpen3 && (
                <Modal>
                  <div
                   className=" bg-white md:mx-auto md:my-auto lg:w-[1000px] lg:h-[500px] md:w-[600px] md:h-[330px] 
                   w-[300px] lg:mx-auto lg:my-auto
                    md:overflow-auto rounded-[12px] "
                  >
                                          <img 
                      onClick={closeModal3}
                      className=" lg:w-[25px] w-[15px] md:ml-[575px] md:mt-[5px] md:w-[20px] md:h-[20px] h-[15px] 
                      lg:h-[25px] mt-[3px] ml-[280px] lg:mt-[5px] lg:ml-[970px] flex "  src={VuesaxBoldEye} alt=""/>

                    <hr className="h-[6px] bg-[#04177f] lg:mt-[3%] border-none mt-[3%] md:mt-[6%] lg:h-[20px] md:h-[10px]" />
                    <p className="text-[10px] px-[20px] md:text-[14px] lg:text-[18px] font-extrabold text-center my-[3%] lg:my-[%]">
                      Are you sure you want to delete all notifications?
                    </p>
                    <div className="flex flex-col gap-[10px] justify-center items-center font-extrabold mb-[7%]">
                      <img
                        className="default-card w-[100px] h-[100px] mx-auto mb-[2%] md:h-[100px] md:w-[150px]"
                        src={deletingfiles}
                        alt="/"
                      />
                    </div>

                    <div
                      className={`flex flex-row lg:gap-[3px] gap-[-30px] justify-center items-center h-[38px]
                       mt-[20px] md:mt-[10px] px-[20px] lg:mt-[-30px] md:justify-center md:items-center mx-auto 
                       md:px-[40px]`}
                    >
                      <button
                        className={`bg-[#04177F] flex md:w-[20%] md:ml-[140px] md:h-[30px] justify-center items-center lg:ml-[210px] ml-[50px] cursor-pointer 
                        lg:w-[20%] w-[40%]
                        text-[14px] font-extrabold h-[20px] text-white rounded-[6px] md:rounded-[8px]
                         md:text-[20px] lg:text-[16px] lg:h-[38px] lg:my-[4%]`}

                        onClick={() => {
                          handleDelete3('deleteAll1')
                          
                          
                          
                          
                          
                          
                          
      
      
      
      
                          
                          
                        }}
      
                      >
                        Yes
                      </button>
                      <button
                        className={`bg-[#fff] w-full flex justify-center items-center mr-auto cursor-pointer 
                        text-[14px] font-extrabold h-[40px] text-[#F95252] rounded-[6px] md:w-[40%] md:rounded-[8px]
                         md:text-[20px] lg:text-[16px] lg:h-[38px] lg:my-[4%]`}
                        onClick={closeModal3}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </Modal>
)}

{showSuccessMessage3 && (
                <Modal>
                  <div
                   className="
                     
          
                   bg-white md:mx-auto md:my-auto md:w-[600px] lg:w-[1000px] lg:h-[500px] md:h-[330px] lg:mx-auto 
                   w-[300px] lg:my-auto md:overflow-auto rounded-[12px]"
                  >
                                                              <img 
                      onClick={closeModal3}
                      className=" lg:w-[25px] lg:h-[25px] md:ml-[575px] md:mt-[5px] md:w-[20px] md:h-[20px]
                      w-[15px] h-[15px] lg:mt-[5px] mt-[3px] lg:ml-[970px] ml-[280px] flex "  src={VuesaxBoldEye} alt=""/>

                    <hr className="h-[6px] bg-[#04177f] lg:mt-[3%] border-none lg:h-[20px] mt-[3%] md:mt-[5%] md:h-[10px]" />
                    <p className="text-[10px] md:text-[16px] lg:text-[18px] font-extrabold text-center my-[3%] lg:my-[%]">
                      Successful
                    </p>
                    <p className="text-[10px] text-[#00AA48] md:text-[14px] px-[20px] lg:text-[18px] font-extrabold text-center my-[1%] lg:my-[%]">
                    All notifications has been deleted successfully.
                    </p>
                    <div className="flex flex-col gap-[10px] justify-center items-center font-extrabold mb-[5%]">
                      <img
                        className="success-default-card w-[100px] h-[100px] md:w-[90px] md:h-[90px] mx-auto mb-[2%] lg:w-[150px] lg:h-[120px]"
                        src={SuccessGif}
                        alt="/"
                      />
                    </div>

                    <div
                      className={`w-full h-[38px] mt-[20px] px-[20px] md:mt-[10px]`}
                    >
                      <button
                        className={`bg-[#04177F] md:ml-[225px] md:w-[20%] md:h-[35px]


                        w-[80px] lg:w-[20%] flex justify-center items-center mr-auto 
                        cursor-pointer ml-[90px] lg:ml-[380px]
                        text-[14px] font-extrabold h-[30px] text-white rounded-[6px] md:rounded-[8px]
                         md:text-[20px] lg:text-[16px] md:mx-auto lg:h-[38px] lg:my-[4%]`}
                        onClick={() => {
                          setShowSuccessMessage3(false);
                          setShowPicture2(true);
                        }}
      
                      >
                        Done
                      </button>
                    </div>
                  </div>
                </Modal>
)}





    

{deleteAll1 && (           
<div  className="flex flex-col lg:gap-7 gap-3 md:gap-5">
                <div
                  className={`flex lg:h-[230px] h-[100px] md:h-[150px] lg:p-5 p-[7px] md:p-3 rounded-md md:rounded-md 
                  lg:rounded-xl shadow  border-b  border-[#d9d9d999] ${isRead13 ? 'bg-white' : 'bg-sky-100'} w-full justify-between
                   items-center`}
                >
                   <div className="w-full">
  <Link to="/launch-page3">


                  <div className="flex gap-2 lg:gap-4 md:gap-2.5 justify-start text-start flex-col">
                    <div className="font-semibold text-text-color-fade text-zinc-500 lg:text-base md:text-xs  
                    text-[8px] ">
                      New Launch!!
                    </div>

                    <p className="font-bold text-text-color-fade md:text-xs  text-zinc-500 whitespace-nowrap
                     text-[6.5px] lg:text-lg tracking-[0] leading-[10px]">
                      We are excited to launch our Local Money Transfer
                       product with features like <br /> Transfer to Personal
                       Account, and Transfer to any Nigerian Bank Account
                    </p>
                    <p className="font-medium text-[#9c9c9c] md:text-xs md:font-medium text-[5px] lg:text-xs
                     tracking-[0.09px] leading-[normal]">
                      August 10th, 2023 12 :00:00am
                    </p>
                    <div className="font-semibold text-main md:text-xs md:font-semibold text-[5px] lg:text-sm text-blue-900 tracking-[0] leading-[normal]">
                      Transfer Money..
                    </div>
                  </div>
</Link>
</div>
                  <div className="flex lg:gap-4 md:gap-3 gap-2 justify-between">
                    <div className="flex flex-col">
                      <img
                        className="lg:w-[150px] relative lg:h-[150px] mt-[5px] w-[50px] h-[50px] md:w-[100px]
                   flex justify-center 
                   md:h-[100px]"
                        src={folder}
                        alt=""
                      />

                    </div>
                    

                    <div className="flex justify-end  items-center lg:gap-[65px] md:gap-[40px] gap-[30px] flex-col-reverse">
                     <div className="flex relative">
                     {isOpen17 && (
                        <div
                          className="Frame758532672 absolute w-[100px] md:w-[180px] lg:w-[190px] 
                       shadow flex-col top-[7px] md:top-[5px] left-[-100px] md:left-[-182px] lg:left-[-191px] lg:top-[10px]
               justify-start items-start flex"
                        >

                        {isRead13 ? (
                          <div
                              onClick={handleClick13}
                                                       
                                                       
                                                       
                                                       
                            
                            className="Frame758532670 px-4 py-1 bg-white cursor-pointer border-b border-neutral-400 lg:w-[190px] w-[100px] md:w-[180px]
         h-[23px] justify-center md:h-[40px] lg:h-[41px]
        items-center gap-1.5 flex"
                          >
                            <div className="MarkAsRead text-zinc-500 text-[8px] md:text-xs font-normal lg:text-sm whitespace-nowrap ">
                              Mark as unread
                            </div>
                            
                          </div>
                          
                          ) : (
                          <div
                              onClick={handleClick13}
                                                        
                                                        
                                                        
                                                        
                            
                            className="Frame758532670 px-4 py-1 bg-white cursor-pointer border-b border-neutral-400 lg:w-[190px] w-[100px] md:w-[180px]
         h-[23px] justify-center md:h-[40px] lg:h-[41px]
        items-center gap-1.5 flex"
                          >
                            <div className="MarkAsRead text-zinc-500 text-[8px] md:text-xs font-normal lg:text-sm whitespace-nowrap ">
                              Mark as read
                            </div>
                            
                          </div>
                          )}

                          <div
                            className="Frame758532672 px-4 py-1 bg-white h-[23px] cursor-pointer lg:h-[41px] md:h-[40px] lg:w-[190px] w-[100px] md:w-[180px] border-b
          justify-center items-center gap-1.5 flex"
                          >
                            <div className="Delete text-red-500 text-[8px] md:text-xs lg:text-sm font-normal ">
                              Delete
                            </div>
                          </div>
                        </div>
                      )}


                      <div
                        onClick={() => {
                          setIsOpen17((prev) => !prev);
                          setIsOpen18(false);
                          setIsOpen19(false);
                          setIsOpen20(false);
                          setIsOpen21(false);
                        }}
                        className="Frame758532418 cursor-pointer flex-col justify-center items-start gap-0.5 flex"
                      >
                        <div className="Ellipse141 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                        <div className="Ellipse142 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                        <div className="Ellipse143 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                      </div>
</div>
                      <div
                        className={`Ellipse147 w-1.5 h-1.5 md:w-3 md:h-3 lg:mt-[-25px] md:mt-[-10px] mt-[-15px] lg:w-5 lg:h-5 flex 
               bg-red-400 rounded-full ${isRead13 ? 'bg-white' : 'bg-red-400'}`}
                      />
                    </div>
                  </div>
                </div>
                

  

<div
                  className={`flex lg:h-[230px] h-[100px] md:h-[150px] lg:p-5 p-[7px] md:p-3 rounded-md md:rounded-md
                   lg:rounded-xl shadow  border-b  border-[#d9d9d999] ${isRead14 ? 'bg-white' : 'bg-sky-100'} w-full justify-between
                   items-center`}
                >
                   <div className="w-full">
  <Link to="/launch-page3">

                  <div className="flex gap-2 lg:gap-4 md:gap-2.5 justify-start text-start flex-col">
                    <div className="font-semibold text-text-color-fade text-zinc-500 lg:text-base md:text-xs  text-[8px] ">
                      New Launch!!
                    </div>

                    <p className="font-bold text-text-color-fade md:text-xs  text-zinc-500 text-[6.5px] lg:text-lg 
                    whitespace-nowrap tracking-[0] leading-[10px]">
                      We are excited to launch our Local Money Transfer
                       product with features like<br />  Transfer to Personal
                       Account, and Transfer to any Nigerian Bank Account
                    </p>
                    <p className="font-medium text-[#9c9c9c] md:text-xs md:font-medium text-[5px] lg:text-xs tracking-[0.09px] leading-[normal]">
                      August 10th, 2023 12 :00:00am
                    </p>
                    <div className="font-semibold text-main md:text-xs md:font-semibold text-[5px] lg:text-sm text-blue-900 tracking-[0] leading-[normal]">
                      Transfer Money..
                    </div>
                  </div>
</Link>
</div>
                  <div className="flex lg:gap-4 md:gap-3 gap-2 justify-between">
                    <div className="flex flex-col">
                      <img
                        className="lg:w-[150px] relative lg:h-[150px] mt-[5px] w-[50px] h-[50px] md:w-[100px]
                   flex justify-center 
                   md:h-[100px]"
                        src={folder}
                        alt=""
                      />

                    </div>
                    <div className="flex justify-end  items-center lg:gap-[65px] md:gap-[40px] gap-[30px] flex-col-reverse">
                     <div className="flex relative">
                     {isOpen18 && (
                        <div
                          className="Frame758532672 absolute w-[100px] md:w-[180px] lg:w-[190px] 
                       shadow flex-col top-[7px] md:top-[5px] left-[-100px] md:left-[-182px] lg:left-[-191px] lg:top-[10px]
               justify-start items-start flex"
                        >

                        {isRead14 ? (
                          <div
                              onClick={handleClick14}
                                                       
                                                       
                                                       
                                                       
                            
                            className="Frame758532670 px-4 py-1 bg-white cursor-pointer border-b border-neutral-400 lg:w-[190px] w-[100px] md:w-[180px]
         h-[23px] justify-center md:h-[40px] lg:h-[41px]
        items-center gap-1.5 flex"
                          >
                            <div className="MarkAsRead text-zinc-500 text-[8px] md:text-xs font-normal lg:text-sm whitespace-nowrap ">
                              Mark as unread
                            </div>
                            
                          </div>
                          
                          ) : (
                          <div
                              onClick={handleClick14}
                                                        
                                                        
                                                        
                                                        
                            
                            className="Frame758532670 px-4 py-1 bg-white cursor-pointer border-b border-neutral-400 lg:w-[190px] w-[100px] md:w-[180px]
         h-[23px] justify-center md:h-[40px] lg:h-[41px]
        items-center gap-1.5 flex"
                          >
                            <div className="MarkAsRead text-zinc-500 text-[8px] md:text-xs font-normal lg:text-sm whitespace-nowrap ">
                              Mark as read
                            </div>
                            
                          </div>
                          )}

                          <div
                            className="Frame758532672 px-4 py-1 bg-white h-[23px] cursor-pointer lg:h-[41px] md:h-[40px] lg:w-[190px] w-[100px] md:w-[180px] border-b
          justify-center items-center gap-1.5 flex"
                          >
                            <div className="Delete text-red-500 text-[8px] md:text-xs lg:text-sm font-normal ">
                              Delete
                            </div>
                          </div>
                        </div>
                      )}


                      <div
                        onClick={() => {
                          setIsOpen18((prev) => !prev);
                          setIsOpen17(false);
                          setIsOpen19(false);
                          setIsOpen20(false);
                          setIsOpen21(false);
                        }}
                        className="Frame758532418 cursor-pointer flex-col justify-center items-start gap-0.5 flex"
                      >
                        <div className="Ellipse141 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                        <div className="Ellipse142 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                        <div className="Ellipse143 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                      </div>
</div>
                      <div
                        className={`Ellipse147 w-1.5 h-1.5 md:w-3 md:h-3 lg:mt-[-25px] md:mt-[-10px] mt-[-15px] lg:w-5 lg:h-5 flex 
               bg-red-400 rounded-full ${isRead14 ? 'bg-white' : 'bg-red-400'}`}
                      />
                    </div>
                  </div>
                </div>
                

 

<div
                  className={`flex lg:h-[230px] h-[100px] md:h-[150px] lg:p-5 p-[7px] md:p-3 rounded-md md:rounded-md 
                  lg:rounded-xl shadow  border-b  border-[#d9d9d999] ${isRead15 ? 'bg-white' : 'bg-sky-100'} w-full justify-between
                   items-center`}
                >
                   <div className="w-full">
 <Link to="/launch-page3">
                  <div className="flex gap-2 lg:gap-4 md:gap-2.5 justify-start text-start flex-col">
                    <div className="font-semibold text-text-color-fade text-zinc-500 lg:text-base md:text-xs  text-[8px] ">
                      New Launch!!
                    </div>

                    <p className="font-bold text-text-color-fade md:text-xs text-zinc-500 text-[6.5px]
             whitespace-nowrap lg:text-lg tracking-[0] leading-[10px]">
                      We are excited to launch our Local Money Transfer
                      product with features like <br /> Transfer to Personal
                       Account, and Transfer to any Nigerian Bank Account
                    </p>
                    <p className="font-medium text-[#9c9c9c] md:text-xs md:font-medium text-[5px] lg:text-xs tracking-[0.09px] leading-[normal]">
                      August 10th, 2023 12 :00:00am
                    </p>
                    <div className="font-semibold text-main md:text-xs md:font-semibold text-[5px] lg:text-sm text-blue-900 tracking-[0] leading-[normal]">
                      Transfer Money..
                    </div>
                  </div>
</Link>
</div>
                  <div className="flex lg:gap-4 md:gap-3 gap-2 justify-between">
                    <div className="flex flex-col">
                      <img
                        className="lg:w-[150px] relative lg:h-[150px] mt-[5px] w-[50px] h-[50px] md:w-[100px]
                   flex justify-center 
                   md:h-[100px]"
                        src={folder}
                        alt=""
                      />

                    </div>
                   
                    <div className="flex justify-end  items-center lg:gap-[65px] md:gap-[40px] gap-[30px] flex-col-reverse">
                     <div className="flex relative">
                     {isOpen19 && (
                        <div
                          className="Frame758532672 absolute w-[100px] md:w-[180px] lg:w-[190px] 
                          top-[7px] md:top-[5px] left-[-100px] md:left-[-182px] lg:left-[-191px] lg:top-[10px]
                           shadow flex-col
               justify-start items-start flex"
                        >
                          {isRead15 ? (
                          <div
                              onClick={handleClick15}
                                                       
                                                       
                                                       
                                                       
                            
                            className="Frame758532670 px-4 py-1 bg-white cursor-pointer border-b border-neutral-400 lg:w-[190px] w-[100px] md:w-[180px]
         h-[23px] justify-center md:h-[40px] lg:h-[41px]
        items-center gap-1.5 flex"
                          >
                            <div className="MarkAsRead text-zinc-500 text-[8px] md:text-xs font-normal lg:text-sm whitespace-nowrap ">
                              Mark as unread
                            </div>
                            
                          </div>
                          
                          ) : (
                          <div
                              onClick={handleClick15}
                                                        
                                                        
                                                        
                                                        
                            
                            className="Frame758532670 px-4 py-1 bg-white cursor-pointer border-b border-neutral-400 lg:w-[190px] w-[100px] md:w-[180px]
         h-[23px] justify-center md:h-[40px] lg:h-[41px]
        items-center gap-1.5 flex"
                          >
                            <div className="MarkAsRead text-zinc-500 text-[8px] md:text-xs font-normal lg:text-sm whitespace-nowrap ">
                              Mark as read
                            </div>
                            
                          </div>
                          )}


                          <div
                            className="Frame758532672 px-4 py-1 bg-white h-[23px] cursor-pointer lg:h-[41px] md:h-[40px] lg:w-[190px] w-[100px] md:w-[180px] border-b
          justify-center items-center gap-1.5 flex"
                          >
                            <div className="Delete text-red-500 text-[8px] md:text-xs lg:text-sm font-normal ">
                              Delete
                            </div>
                          </div>
                        </div>
                      )}

                      <div
                        onClick={() => {
                          setIsOpen19((prev) => !prev);
                          setIsOpen17(false);
                          setIsOpen18(false);
                          setIsOpen20(false);
                          setIsOpen21(false);
                        }}
                        className="Frame758532418 cursor-pointer flex-col justify-center items-start gap-0.5 flex"
                      >
                        <div className="Ellipse141 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                        <div className="Ellipse142 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                        <div className="Ellipse143 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                      </div>
</div>
                      <div
                        className={`Ellipse147 w-1.5 h-1.5 md:w-3 md:h-3 lg:mt-[-25px] md:mt-[-10px] mt-[-15px] lg:w-5 lg:h-5 flex 
               bg-red-400 rounded-full ${isRead15 ? 'bg-white' : 'bg-red-400'}`}
                      />
                    </div>
                  </div>
                </div>
                

  

<div
                  className={`flex lg:h-[230px] h-[100px] md:h-[150px] lg:p-5 p-[7px] md:p-3 rounded-md md:rounded-md 
                  lg:rounded-xl shadow  border-b  border-[#d9d9d999] ${isRead16 ? 'bg-white' : 'bg-sky-100'} w-full justify-between
                   items-center`}
                >
                   <div className="w-full">
                   <Link to="/launch-page3">

                  <div className="flex gap-2 lg:gap-4 md:gap-2.5 justify-start text-start flex-col">
                    <div className="font-semibold text-text-color-fade text-zinc-500 lg:text-base md:text-xs  text-[8px] ">
                      New Launch!!
                    </div>

                    <p className="font-bold text-text-color-fade md:text-xs  text-zinc-500 text-[6.5px] 
                    whitespace-nowrap lg:text-lg tracking-[0] leading-[10px]">
                      We are excited to launch our Local Money Transfer
                       product with features like <br />Transfer to Personal
                      Account, and Transfer to any Nigerian Bank Account
                    </p>
                    <p className="font-medium text-[#9c9c9c] md:text-xs md:font-medium text-[5px] lg:text-xs tracking-[0.09px] leading-[normal]">
                      August 10th, 2023 12 :00:00am
                    </p>
                    <div className="font-semibold text-main md:text-xs md:font-semibold text-[5px] lg:text-sm text-blue-900 tracking-[0] leading-[normal]">
                      Transfer Money..
                    </div>
                  </div>
</Link>
</div>
                  <div className="flex lg:gap-4 md:gap-3 gap-2 justify-between">
                    <div className="flex flex-col">
                      <img
                        className="lg:w-[150px] relative lg:h-[150px] mt-[5px] w-[50px] h-[50px] md:w-[100px]
                   flex justify-center 
                   md:h-[100px]"
                        src={folder}
                        alt=""
                      />

                    </div>
                    <div className="flex justify-end relative  items-center lg:gap-[65px] md:gap-[40px] gap-[30px] flex-col-reverse">
                      <div className="flex relative">
                      {isOpen20 && (
                        <div
                          className="Frame758532672 absolute w-[100px] md:w-[180px] lg:w-[190px] 
                          top-[7px] md:top-[5px] left-[-100px] md:left-[-182px] lg:left-[-191px] lg:top-[10px]
                           shadow flex-col
               justify-start items-start flex"
                        >
                          {isRead16 ? (
                          <div
                              onClick={handleClick16}
                                                       
                                                       
                                                       
                                                       
                            
                            className="Frame758532670 px-4 py-1 bg-white cursor-pointer border-b border-neutral-400 lg:w-[190px] w-[100px] md:w-[180px]
         h-[23px] justify-center md:h-[40px] lg:h-[41px]
        items-center gap-1.5 flex"
                          >
                            <div className="MarkAsRead text-zinc-500 text-[8px] md:text-xs font-normal lg:text-sm whitespace-nowrap ">
                              Mark as unread
                            </div>
                            
                          </div>
                          
                          ) : (
                          <div
                              onClick={handleClick16}
                                                        
                                                        
                                                        
                                                        
                            
                            className="Frame758532670 px-4 py-1 bg-white cursor-pointer border-b border-neutral-400 lg:w-[190px] w-[100px] md:w-[180px]
         h-[23px] justify-center md:h-[40px] lg:h-[41px]
        items-center gap-1.5 flex"
                          >
                            <div className="MarkAsRead text-zinc-500 text-[8px] md:text-xs font-normal lg:text-sm whitespace-nowrap ">
                              Mark as read
                            </div>
                            
                          </div>
                          )}


                          <div
                            className="Frame758532672 px-4 py-1 bg-white h-[23px] cursor-pointer lg:h-[41px] md:h-[40px] lg:w-[190px] w-[100px] md:w-[180px] border-b
          justify-center items-center gap-1.5 flex"
                          >
                            <div className="Delete text-red-500 text-[8px] md:text-xs lg:text-sm font-normal ">
                              Delete
                            </div>
                          </div>
                        </div>
                      )}

                      <div
                        onClick={() => {
                          setIsOpen20((prev) => !prev);
                          setIsOpen21(false);
                          setIsOpen17(false);
                          setIsOpen18(false);
                          setIsOpen19(false);
                        }}
                        className="Frame758532418 cursor-pointer flex-col justify-center items-start gap-0.5 flex"
                      >
                        <div className="Ellipse141 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                        <div className="Ellipse142 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                        <div className="Ellipse143 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                      </div>
</div>
                      <div
                        className={`Ellipse147 w-1.5 h-1.5 md:w-3 md:h-3 lg:mt-[-25px] md:mt-[-10px] mt-[-15px] lg:w-5 lg:h-5 flex 
               bg-red-400 rounded-full ${isRead16 ? 'bg-white' : 'bg-red-400'}`}
                      />
                    </div>
                  </div>
                </div>
                

  

<div
                  className={`flex lg:h-[230px] h-[100px] md:h-[150px] lg:p-5 p-[7px] md:p-3 rounded-md md:rounded-md
                   lg:rounded-xl shadow  border-b  border-[#d9d9d999] ${isRead17 ? 'bg-white' : 'bg-sky-100'} w-full justify-between
                   items-center`}
                >
                   <div className="w-full">
 <Link to="/launch-page3">
 
                  <div className="flex gap-2 lg:gap-4 md:gap-2.5 justify-start text-start flex-col">
                    <div className="font-semibold text-text-color-fade text-zinc-500 lg:text-base md:text-xs  text-[8px] ">
                      New Launch!!
                    </div>

                    <p className="font-bold text-text-color-fade md:text-xs text-zinc-500 text-[6.5px] 
                    whitespace-nowrap lg:text-lg tracking-[0] leading-[10px]">
                      We are excited to launch our Local Money Transfer
                       product with features like<br /> Transfer to Personal
                       Account, and Transfer to any Nigerian Bank Account
                    </p>
                    <p className="font-medium text-[#9c9c9c] md:text-xs md:font-medium text-[5px] lg:text-xs tracking-[0.09px] leading-[normal]">
                      August 10th, 2023 12 :00:00am
                    </p>
                    <div className="font-semibold text-main md:text-xs md:font-semibold text-[5px] lg:text-sm text-blue-900 tracking-[0] leading-[normal]">
                      Transfer Money..
                    </div>
                  </div>
                  </Link>
                  </div>
                  <div className="flex lg:gap-4 md:gap-3 gap-2 justify-between">
                    <div className="flex flex-col">
                      <img
                        className="lg:w-[150px] relative lg:h-[150px] mt-[5px] w-[50px] h-[50px] md:w-[100px]
                   flex justify-center 
                   md:h-[100px]"
                        src={folder}
                        alt=""
                      />
                    </div>
                    <div className="flex justify-end relative  items-center lg:gap-[65px] md:gap-[40px] gap-[30px] flex-col-reverse">
                      <div className="flex relative">
                      {isOpen21 && (
                        <div
                          className="Frame758532672 absolute w-[100px] md:w-[180px] lg:w-[190px] 
                          top-[7px] md:top-[5px] left-[-100px] md:left-[-182px] lg:left-[-191px] lg:top-[10px]
                           shadow flex-col
               justify-start items-start flex"
                        >
                          {isRead17 ? (
                          <div
                              onClick={handleClick17}
                                                       
                                                       
                                                       
                                                       
                            
                            className="Frame758532670 px-4 py-1 bg-white cursor-pointer border-b border-neutral-400 lg:w-[190px] w-[100px] md:w-[180px]
         h-[23px] justify-center md:h-[40px] lg:h-[41px]
        items-center gap-1.5 flex"
                          >
                            <div className="MarkAsRead text-zinc-500 text-[8px] md:text-xs font-normal lg:text-sm whitespace-nowrap ">
                              Mark as unread
                            </div>
                            
                          </div>
                          
                          ) : (
                          <div
                              onClick={handleClick17}
                                                        
                                                        
                                                        
                                                        
                            
                            className="Frame758532670 px-4 py-1 bg-white cursor-pointer border-b border-neutral-400 lg:w-[190px] w-[100px] md:w-[180px]
         h-[23px] justify-center md:h-[40px] lg:h-[41px]
        items-center gap-1.5 flex"
                          >
                            <div className="MarkAsRead text-zinc-500 text-[8px] md:text-xs font-normal lg:text-sm whitespace-nowrap ">
                              Mark as read
                            </div>
                            
                          </div>
                          )}


                          <div
                            className="Frame758532672 px-4 py-1 bg-white h-[23px] cursor-pointer lg:h-[41px] md:h-[40px] lg:w-[190px] w-[100px] md:w-[180px] border-b
          justify-center items-center gap-1.5 flex"
                          >
                            <div className="Delete text-red-500 text-[8px] md:text-xs lg:text-sm font-normal ">
                              Delete
                            </div>
                          </div>
                        </div>
                      )}

                      <div
                        onClick={() => {
                          setIsOpen21((prev) => !prev);
                          setIsOpen20(false);
                          setIsOpen17(false);
                          setIsOpen18(false);
                          setIsOpen19(false);
                        }}
                        className="Frame758532418 cursor-pointer flex-col justify-center items-start gap-0.5 flex"
                      >
                        <div className="Ellipse141 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                        <div className="Ellipse142 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                        <div className="Ellipse143 w-1 h-1 lg:w-2 lg:h-2 bg-neutral-500 rounded-full" />
                      </div>
</div>
                      <div
                        className={`Ellipse147 w-1.5 h-1.5 md:w-3 md:h-3 lg:mt-[-25px] md:mt-[-10px] mt-[-15px] lg:w-5 lg:h-5 flex 
               bg-red-400 relative rounded-full ${isRead17 ? 'bg-white' : 'bg-red-400'}`}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex gap-[15px]  mt-[150px] lg:mt-[300px] mb-10 md:mt-[200px] justify-center items-center">
                  <div className="text-xs font-medium ">You need help ?</div>
                  <Link to="/ContactUs">
                    <div
                      className={`${isDarkMode ? "border " : "bg-[#04177f]"} ${
                        styles.contactus
                      }`}
                    >
                      Contact Us
                    </div>
                  </Link>
                </div>

              </div>
)}
              {showPicture2 && (
<div className={`${styles.viewTransactions} mt-[50px] `}>
                <img
                  className={styles.noTransactions}
                  src="./Images/Dashboardimages/noTransactionFound.png"
                  alt=""
                />
                <div
                  className={`${
                    isDarkMode ? "" : "text-[#0003]"
                  } text-lg   text-opacity-30 mt-[-20px] lg:text-2xl  font-semibold `}
                >
                  No Notification Found !
                </div>
                <div className="flex gap-[15px] mt-[390px] lg:mt-[1050px] lg:mb-10 mb-5 md:mt-[700px] items-center">
                  <div className="text-xs font-medium ">You need help ?</div>
                  <Link to="/ContactUs">
                    <div
                      className={`${isDarkMode ? "border " : "bg-[#04177f]"} ${
                        styles.contactus
                      }`}
                    >
                      Contact Us
                    </div>
                  </Link>
                </div>
              </div>
)}

              </div>
            )}

            {/* fourth flow */}
            {isOpen4 && (
              <div className={`${styles.viewTransactions} mt-[50px] `}>
                <img
                  className={styles.noTransactions}
                  src="./Images/Dashboardimages/noTransactionFound.png"
                  alt=""
                />
                <div
                  className={`${
                    isDarkMode ? "" : "text-[#0003]"
                  } text-lg   text-opacity-30 mt-[-20px] lg:text-2xl  font-semibold `}
                >
                  No Notification Found !
                </div>
                <div className="flex gap-[15px] mt-[390px] lg:mt-[1050px] lg:mb-10 mb-5 md:mt-[700px] items-center">
                  <div className="text-xs font-medium ">You need help ?</div>
                  <Link to="/ContactUs">
                    <div
                      className={`${isDarkMode ? "border " : "bg-[#04177f]"} ${
                        styles.contactus
                      }`}
                    >
                      Contact Us
                    </div>
                  </Link>
                </div>
              </div>
            )}
            {/* fifth flow */}
            {isOpen5 && (
              <div
                className={`${styles.viewTransactions} mt-[50px] justify-end items-end flex `}
              >
                <img
                  className={styles.noTransactions}
                  src="./Images/Dashboardimages/noTransactionFound.png"
                  alt=""
                />
                {/* <div className={styles.viewAll}> */}
                {/* <div className={styles.viewText}>View all transactions</div> */}
                {/* <img */}
                {/* // className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]" */}
                {/* // src="./Images/Dashboardimages/empty-wallet-add.png" */}
                {/* // alt="" */}
                {/* // /> */}
                {/* </div> */}
                <div
                  className={`${
                    isDarkMode ? "" : "text-[#0003]"
                  } text-lg   text-opacity-30 mt-[-20px] lg:text-2xl  font-semibold `}
                >
                  No Notification Found !
                </div>
                <div className="flex gap-[15px] mt-[390px] lg:mt-[1050px] lg:mb-10 mb-5 md:mt-[700px] items-center">
                  <div className="text-xs font-medium ">You need help ?</div>
                  <Link to="/ContactUs">
                    <div
                      className={`${isDarkMode ? "border " : "bg-[#04177f]"} ${
                        styles.contactus
                      }`}
                    >
                      Contact Us
                    </div>
                  </Link>
                </div>
              </div>
            )}



          </div>
        </div>
      </>
    </DashBoardLayout>
  );
};

                  
