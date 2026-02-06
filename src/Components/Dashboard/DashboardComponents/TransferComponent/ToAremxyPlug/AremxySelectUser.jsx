import  { useContext, useState, useEffect } from "react";
import { ContextProvider } from "../../../../Context";
import '../../../../../App.css';
import style from "../../../../AirTimePage/AirtimeVtu.module.css";
import styled from "../../../../AirTimePage/AirTime.module.css"
import styles from "../../TransferComponent/transfer.module.css";
import SearchIcon from '../../../../Add&SelectRecipient/RecipientImages/search-status.svg';
import Delete from "../../../../AirTimePage/Images/Deleted.svg";
import { Modal } from "../../../../Screens/Modal/Modal";
import { GetFunction, InternalLoginSession} from "../../../../ApiCollection.jsx/ApiBuck";
import { Loader} from "../../../../Loader/Loader";
import NoRecordImage  from "../../../../Add&SelectRecipient/RecipientImages/NoRecordImage.svg";
import { GetLocalStorage } from "../../../../LocalStorage/LocalStorage";
import cancelIcon from "../../../../EducationPins/imagesEducation/close-circle.svg";


export default function AremxySelectUser({setTransferValue, setSelectRecipientPopUp, HandleIdentifyCredentials}) {
const Data = GetLocalStorage();

    const {
     toggleSideBar,
       isDarkMode, networkIssue,
       recipientResponse,
        setRecipientResponse, setNetworkIssue
        } = useContext(ContextProvider);
  const [activeTab, setActiveTab] = useState('tab_1');
    const [showPopup, setShowPopup] = useState(false);
  const [activeImage, setActiveImage] = useState(null);
    const [deleted, setdeleted] = useState(false);
   // const [edit, setEdit] = useState("");

    const [successDeleted, setSuccessDeleted] = useState(false);
    const [add, setAdd] = useState(false);
  
    const [remove, setRemove] = useState(false);

  
//    const [emailUsername, setEmailUserName] = useState('');
    const HandleSelectedUser = (transferId)=> {
      setSelectRecipientPopUp(false);
      HandleIdentifyCredentials(transferId);
      setTransferValue(transferId)
    }

    const [loading, setLoading] = useState(false);
    const [sessionModal, setSessionModal] =useState(false);
   
    const active = styled.active;
    const inactive = styled.inactive;
    const [searchSelectRecipient, setSearchSelectRecipient] = useState("")

    const handleTab1 =()=> {
        setActiveTab('tab_1')
    }

    const handleTab2 =()=> {
        setActiveTab('tab_2')
    }

  

   

    // 

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

      const FirstUserIcon = "./Images/UserIcon/FirstUserIcon.png"
const SecondUserIcon = "./Images/UserIcon/ SecondUserIcon.png"
const  ThirdUserIcon = "./Images/UserIcon/ThirdUserIcon.png"
const FourthUserIcon = "./Images/UserIcon/FourthUserIcon.png"
const FifthUserIcon = "./Images/UserIcon/FifthUserIcon.png"
const SixthUserIcon = "./Images/UserIcon/SixthUserIcon.png"
const SeventhUserIcon ="./Images/UserIcon/SeventhUserIcon.png"
const EighthUserIcon = "./Images/UserIcon/EighthUserIcon.png"
const NinethUserIcon ="./Images/UserIcon/NinethUserIcon.png"
 
//const alphabetsName = "abcdefghijklmnopqrstuvwxyz".split("");
  
//     const UserIconFormat = (username)=> {

// const alphabetPlacementIndex = alphabetsName?.indexOf(firstCharacter);
// //default Value/ Image
// let UserImage; 
// if(alphabetPlacementIndex >= 0 && alphabetPlacementIndex < 3){
//    UserImage = FirstUserIcon;
// }else if(alphabetPlacementIndex >= 6 && alphabetPlacementIndex < 9){
//  UserImage = SecondUserIcon
// }else if(alphabetPlacementIndex >= 9 && alphabetPlacementIndex < 12){
//   UserImage = ThirdUserIcon
// }else if(alphabetPlacementIndex >=12 && alphabetPlacementIndex < 15){
//    UserImage =FourthUserIcon
// }else if(alphabetPlacementIndex >= 15  && alphabetPlacementIndex < 18){
//   UserImage = FifthUserIcon
// }else if(alphabetPlacementIndex >= 18 && alphabetPlacementIndex < 21){
//   UserImage =SixthUserIcon
// }else if(alphabetPlacementIndex >= 21 && alphabetPlacementIndex < 24){
//  UserImage = SeventhUserIcon
// }else if(alphabetPlacementIndex >=  24 && alphabetPlacementIndex <= 27){
//    UserImage = EighthUserIcon
// }else if(alphabetPlacementIndex >= 3 && alphabetPlacementIndex < 6){
//   UserImage = NinethUserIcon
// }else {
//  UserImage =FirstUserIcon
// }
//     }



const GetRecipient = async()=> {
  if(recipientResponse?.data?.data?.data === undefined){
      
      const FailedHandler = async(ErrorType)=> {
      if(ErrorType === "unauthorised"){
     setSessionModal(true)
      }else if(ErrorType === "Server error"){
         alert("Unable to get your saved recipients at the moment")
      }else if(ErrorType === "Network error" || ErrorType === "User error"){
      if(networkIssue) return;
      if(!networkIssue) setNetworkIssue(true)
      }
      }
await GetFunction("bank-recipient", 
setLoading, ()=> {},
 FailedHandler, setRecipientResponse, setNetworkIssue)
    }
  }
    useEffect(()=> {
   const fetchRecipient =async()=> {
 await GetRecipient()
    }
  if(Data?.ConfirmAcc === "true"){
    fetchRecipient();
    
  }
  
    //eslint-disable-next-line
    }, [])
const SearchFilter =
  (recipientResponse?.data?.data?.data !== undefined 
 && recipientResponse?.data?.data?.data !== null
  && recipientResponse?.data?.data?.data?.length > 0 && Array?.isArray(recipientResponse?.data?.data?.data)) 
? recipientResponse?.data?.data?.data?.filter(filterBySearch=> {
  

return (
  filterBySearch?.username?.toLowerCase().includes(searchSelectRecipient?.toLowerCase()) ||
  filterBySearch?.email?.toLowerCase().includes(searchSelectRecipient?.toLowerCase())
)

}): 
[];

 

  //DropDown Handling
   return (
    <div className="h-[100%] flex flex-col w-[100%]
               items-center justify-center px-[20px]">
 <div  className={`bvnQuery flex flex-col shadow-[0px_0px_8.3274px_0px_rgba(0 0 0,0.25)] 
 rounded-[8px] shadow-[0px_0px_8.3274px_0px_rgba(0,0,0,0.25)] md:rounded-[11.736px]  
 lg:rounded-[20px] md:w-[55%] w-[100%] md:shadow-[0px_0px_11.73611px_0px_rgba(0,0,0,0.25)]
 lg:shadow-[0px_0px_20px_0px_rgba(0,0,0,0.25)] justify-center  items-center px-[18px] 
   md:px-[30px]  gap-[10px] md:gap-[40px] lg:gap-[50px] lg:justify-normal 
     md:mx-[0px] mx-[19px]  lg:pt-[30px] h-auto pb-[20px] pt-[10px]  md:pt-[50px]  ${
              isDarkMode ? "bg-black border border-white" : "bg-white"
            }`}>
        <div className="flex flex-col w-[100%]
         h-[100%]  justify-center" >
         
                    <div className="flex flex-col gap-[15px]
                     w-[100%] ">
                <div onClick={()=> {
                  setSelectRecipientPopUp(false)
                }}
                className="flex justify-end items-center w-[100%] mb-[10px]">
      <img src={cancelIcon} className=" w-[25px] h-[25px] md:w-[35px] md:h-[35px] 
                lg:w-[26px] lg:h-[26px]" alt="" />
                </div>
            <div className="flex flex-col gap-[15px] lg:gap-[30px]">
            <div className='relative md:w-[50%] w-[100%] h-[100%]'>
                <input onClick={()=> {
                  if(activeTab === "tab_2"){
                     setActiveTab("tab_1")
                  }
                }}
                 type="text" 
                className={`focusSearch   rounded-[10px]
                   md:rounded-0 p-[20px] md:p-0 text-[13.8px] 
                  sm:p-3 sm:text-lg flex justify-between pt-[8.803px] 
                  pb-[7.794px] pr-[13px] pl-[10.876px] font-[400] 
                  leading-[10.4px] md:text-[11px] md:leading-[12.206px] 
                lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] 
                md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] 
                lg:pr-[9px] lg:pl-[10px]  items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[40.927px] md:h-[35px]
                 lg:h-[50px]  px-[11px] md:px-[6px] lg:px-[10px]  self-center ${
                  isDarkMode
                    ? "bg-black text-white border border-white"
                    : "border bg-white border-[#0003] hover:bg-[#EDEAEA] text-[#7C7C7C] border-[#9C9C9C]"
                }`}
                placeholder='Search Email or Username'
               
                onChange={(e)=> {
                  setSearchSelectRecipient(e.target.value);
                }} />
                <img 
                onClick={(e) => {
                document.querySelector('.focusSearch').focus();
                console.log(e);
                }}
                src={SearchIcon} alt="" 
                className='absolute md:top-[30%] md:right-[10px]
                 top-[30%] right-[7.997px] 
                lg:w-[25px] lg:h-[25px] h-[15px] w-[20px] cursor-pointer'/>
            </div>
            <div 
            className='flex flex-col gap-[15px] md:flex-row
             md:items-end lg:gap-[30px] w-[100%]'>
     

            {/* =====================Add User========================= */}
           
          
            </div>
       

            </div>    

            <ul className='flex w-[100%] lg:gap-[25px] border-b-[2px]
        border-[#D9D9D999]
       '>
                <li className={`w-1/2 md:py-[10px] py-[5.868px] font-medium text-center text-[12px] 
                leading-[14px] lg:text-[20px] lg:leading-[30px]
                   cursor-pointer ${activeTab === 'tab_1' ? active : inactive}`} onClick={handleTab1}>
                Users
                </li>
                <li className={`w-1/2 md:py-[10px] py-[5.868px] font-medium text-center text-[12px]
                 leading-[14px] lg:text-[20px] lg:leading-[30px]
                 cursor-pointer ${activeTab === 'tab_2' ? active : inactive}`}
                 onClick={handleTab2}>Favorites</li>
            </ul>
             <div className="">
          <div className="h-[200px] overflow-y-auto py-[20px]
          bvnQuery border-[0.1px] border-gray-100 rounded-[10px] px-[5px]">
                { activeTab === 'tab_1'  && (
                    <div className={styled.containAir}>
                      {SearchFilter?.length > 0 ?(
                     SearchFilter?.map(( recipient,index) => (
                       
                        <div
                         onClick={()=> {
                               HandleSelectedUser(recipient?.username)
                            }}
                            key={index}
                            className="w-[100%] mx-auto flex justify-between border
                             py-2 px-2 rounded-[10px] md:rounded-[10px] lg:py-2 lg:px-5"
                        >
                            <div
                             className="flex md:justify-start justify-center 
                             gap-[7.042px] lg:gap-[12px]">
                                    <div className={`relative ${ recipient?.username?.toLowerCase()?.startsWith("a" || "b" || "c" )
                                            ? "bg-[#228be6] bg-opacity-5 p-3 rounded-full" : recipient?.username?.toLowerCase()?.startsWith("d" || "e" || "f") 
                                           ?"bg-[#40c057] bg-opacity-5 p-3 rounded-full" : recipient?.username?.toLowerCase()?.startsWith("g" || "h" || "i") 
                                         ? "bg-[#fab005]  bg-opacity-5 p-3 rounded-full" : recipient?.username?.toLowerCase()?.startsWith("j" || "k" || "l")
                                        ? "bg-[#fa5252]  bg-opacity-5 p-3 rounded-full":  recipient?.username?.toLowerCase()?.startsWith("m" || "n" || "o")
                                      ? "bg-[#7850f2]  bg-opacity-5 p-3 rounded-full" : recipient?.username?.toLowerCase()?.startsWith("p" || "q" || "r")
                                   ? "bg-[#e70f0f]  bg-opacity-5 p-3 rounded-full" : recipient?.username?.toLowerCase()?.startsWith("s" || "t" || "u")
                                  ? "bg-[#804a4a]  bg-opacity-5 p-3 rounded-full": recipient?.username?.toLowerCase()?.startsWith("v" || "w" || "x") 
                              ? "bg-[#545893]  bg-opacity-5 p-3 rounded-full" : "bg-[#8a9354]  bg-opacity-5  p-3 rounded-full"}`} >
                                        <img src={recipient?.username?.toLowerCase()?.startsWith("a" || "b" || "c" )
                                            ? FirstUserIcon : recipient?.username?.toLowerCase()?.startsWith("d" || "e" || "f") 
                                           ? SecondUserIcon : recipient?.username?.toLowerCase()?.startsWith("g" || "h" || "i") 
                                         ? ThirdUserIcon : recipient?.username?.toLowerCase()?.startsWith("j" || "k" || "l")
                                        ? FourthUserIcon :  recipient?.username?.toLowerCase()?.startsWith("m" || "n" || "o")
                                      ? FifthUserIcon : recipient?.username?.toLowerCase()?.startsWith("p" || "q" || "r")
                                   ? SixthUserIcon : recipient?.username?.toLowerCase()?.startsWith("s" || "t" || "u")
                                  ? SeventhUserIcon : recipient?.username?.toLowerCase()?.startsWith("v" || "w" || "x") 
                              ? EighthUserIcon : NinethUserIcon } 
                                        className='h-[38px] w-[36.753px] rounded-[38px]
                                        lg:h-[80px] lg:w-[80px] 
                                        md:h-[68.801px]  md:w-[68.801px]
                                        md:rounded-[68.201px] lg:rounded-[80px]' alt="profilePic"/>
                                </div>
                                <div className="flex flex-col my-auto gap-[1.67px] md:gap-[2.93px]">
                                    <p className='font-[500] text-[12px] leading-[15px] md:text-[9.389px] md:leading-[12.206px] 
                                    lg:text-[18px] lg:leading-[20.8px]'>
                                        {recipient?.full_name}
                                    </p>
                                    <h2 className="lg:text-[14px] font-medium lg:leading-6 md:text-[9px] text-[9px] text-[#7C7C7C]">
                                        {recipient?.email?.slice(0,4)}********* {recipient?.email?.slice(recipient?.email?.length-10)}
                                    </h2>
                                    <p className="lg:text-[14px] lg:font-medium lg:leading-[21.07px] text-[#7C7C7C] text-[9px] font-semibold leading-3 md:text-[8px]">
                                      {recipient?.phone?.slice(0,5)}******
                                    </p>
                                </div>
                            </div>
                            <div
                            onClick={() => {
                                handleRecipient(index);
                            }}
                            className="relative h-[16px] w-[16px] my-auto 
                            lg:w-[50px] lg:h-[25px] cursor-pointer"
                            >
                            <img
                                src="./Images/airtimeTopUp/Frame.png"
                                alt=""
                                className="h-full"
                            />
                            {showPopup && activeImage === index && (
                                <div
                                className="input border absolute bg-white top-[8px]
                                 right-[17px] lg:top-[20px] lg:right-[50px] w-[150px] 
                                 h-[100px] z-50 flex flex-col justify-center items-start py-[5px]"
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
                                    onClick={()=> {}}
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
                        ))) : loading === false && (
                          <div className='flex justify-center '>
                            <img src={NoRecordImage} alt="" 
                                className='lg:w-[517px] lg:h-[456px]'/>
                                </div>
                        )}
                        </div>    
                )}
              
                { activeTab === 'tab_2' &&
                    <div className={styled.containAir}>
                    {  []?.length > 0 ?  (
                        [].map((index) => (
                        <div
                            key={index}
                            className="w-[100%] mx-auto flex justify-between
                             border py-2 px-2 rounded-[10px] 
                            md:rounded-[10px] lg:py-2 lg:px-5"
                        >
                            <div className="flex md:justify-start justify-center
                             gap-[7.042px] lg:gap-[12px]">
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
                            <div className="flex flex-col">
                                <div
                                onClick={() => {
                                    handleRecipient(index);
                                }}
                                className="relative h-[16px] w-[16px] my-auto lg:w-[20px] 
                                lg:h-[25px] cursor-pointer"
                                >
                                    <img
                                        src="./Images/airtimeTopUp/Frame.png"
                                        alt=""
                                        className="h-full"
                                    />
                                    {showPopup && activeImage === index && (
                                        <div
                                        className="input border absolute bg-white top-[8px]
                                         right-[17px] lg:top-[20px] lg:right-[20px] w-[150px] h-auto
                                          z-50 flex flex-col justify-center items-start py-[5px]"
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
                                            onClick={()=> {}}
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
                        ))
                      ) : (
                       <div className='flex justify-center '>
                            <img src={NoRecordImage} alt="" 
                                className='lg:w-[517px] lg:h-[456px]'/>
                                </div>
                        
                      )}
                    </div> 
                }   
                </div>
            </div> 
            {add && (
              <Modal>
                <div
                  className={`${style.inputPin} ${
                    toggleSideBar ? "md:w-[45%] lg:w-[40%] lg:ml-[20%]" : "lg:w-[40%]"
                    } md:w-[55%] w-[90%]`}
                >
                  <div className="flex justify-between items-center mx-[3%] my-[2%] lg:mt-[3%] ">
                    <img
                      className=" w-[18px] h-[15px] md:w-[35px] md:h-[32px] lg:w-[25px] lg:h-[12px] "
                      src="/Images/login/arpLogo.png"
                      alt=""
                    />

                    <img
                      onClick={() => {
                        setAdd(false);
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
                      className="w-[50px] h-[50px] mx-auto mb-[2%] lg:w-[120px] lg:h-[120px]"
                      src="./Gif/checkMarkGif.gif"
                      alt="/"
                    />

                    <p className="text-[10px] text-[#2ED173] md:text-[16px] font-bold text-center">
                        User has been successfully added to Favorites.
                    </p>
                  </div>

                  <div
                    className={`w-full h-[38px] mt-[40px] px-[20px] items-center`}
                  >
                    <button
                      className={`bg-[#04177F] w-full flex justify-center items-center my-auto mx-auto cursor-pointer text-[14px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[20px] lg:text-[16px] lg:mx-auto lg:h-[38px] lg:mt-[4%]`}
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
                  className={`${styles.inputPin} ${
                    toggleSideBar ? "md:w-[45%] lg:w-[40%] lg:ml-[20%]" : "lg:w-[40%]"
                    } md:w-[55%] w-[90%]`}
                >
                  <div className="flex justify-between items-center mx-[3%] my-[2%] lg:mt-[3%] ">
                    <img
                      className=" w-[18px] h-[15px] md:w-[35px] md:h-[32px] lg:w-[25px] lg:h-[12px] "
                      src="/Images/login/arpLogo.png"
                      alt=""
                    />

                    <img
                      onClick={() => {
                        setRemove(false);
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
                      className="w-[50px] h-[50px] mx-auto mb-[2%] lg:w-[120px] lg:h-[120px]"
                      src="./Gif/checkMarkGif.gif"
                      alt="/"
                    />

                    <p className="text-[10px] text-[#04177f] md:text-[16px] font-bold text-center">
                        User has been successfully removed from Favorites.
                    </p>
                  </div>

                  <div
                    className={`w-full h-[38px] mt-[40px] px-[20px] items-center`}
                  >
                    <button
                      className={`bg-[#04177F] w-full flex justify-center items-center my-auto mx-auto cursor-pointer text-[14px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[20px] lg:text-[16px] lg:mx-auto lg:h-[38px] lg:mt-[4%]`}
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
            {/* {edit && (
              <Modal>
                <div
                  className={`${style.successfulTwo} ${
                    toggleSideBar ? " lg:ml-[20%] lg:w-[40%]"
                    : "lg:w-[40%]"
                } w-[90%] md:w-[70%] overflow-auto`}
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
                      } my-[5%] w-[88%] flex justify-center items-center mx-auto cursor-pointer text-[14px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[16px] lg:text-[14px] lg:w-[163px] lg:h-[38px] lg:mt-[5%]`}
                      onClick={handleSave}
                    >
                      Save User
                    </button>
                  </div>
                 </div>
                </div>
              </Modal>
            )} */}
           
            
          
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
                        setSuccessDeleted(false);
                        window.location.reload();
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
                      className={`bg-[#04177F] w-full flex justify-center
                         items-center mr-auto cursor-pointer text-[14px] 
                         font-extrabold h-[40px] text-white rounded-[6px]
                          md:w-[25%] md:rounded-[8px] md:text-[20px]
                           lg:text-[16px] lg:h-[38px] lg:my-[4%]`}
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
       
     
       {sessionModal && (
              <InternalLoginSession
               setExpiredSessionLogin={ setSessionModal}/>
            )}
            {loading && (
              <Modal>
                <Loader/>
              </Modal>
            )}
</div>
</div>
       
  )
}
