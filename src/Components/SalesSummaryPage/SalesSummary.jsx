import  {useState, useEffect} from 'react';
import { DashBoardLayout } from '../Dashboard/Layout/DashBoardLayout';
import receiptA from "./assets/cash receipt from online shopping on mobile phone (3)A.png";
import arrowsales from "./assets/arrow-square-rightsales.png";
import flagsales from "./assets/Country Flags (5)sales.png";
import menusales from "./assets/menusales.png";
import arrow44 from "./assets/arrow-down@4x.png";
import arrow11 from "./assets/arrow-down@1x.png";
import arrow00 from "./assets/arrow-down@0x.png";
import flagpage from "./assets/Country Flagspage.png";
import flagpage1 from "./assets/Country Flagspage1.png";
import flagpage2 from "./assets/Countryflag2.svg";
import flagpage3 from "./assets/Countryflag3.svg";
import flagpage4 from "./assets/Countryflag4.svg";
import flagpage5 from "./assets/Countryflag5.svg";
import arrows from "../EducationPins/imagesEducation/arrow-down.svg";
import { useContext } from "react";
import { ContextProvider } from  "../Context";
import styles from "../Dashboard/DashboardComponents/./component.module.css";
import { Calender } from "../Dashboard/DashboardComponents/Calender";
import { Link } from "react-router-dom/dist/react-router-dom.development";
import { GetFunction, HandleUserSession } from '../ApiCollection.jsx/ApiBuck';
import { Loader } from '../Loader/Loader';
import { Modal } from '../Screens/Modal/Modal';

export default function SalesSummaryPage ()  {

    const [isOpen1, setIsOpen1] = useState(false); 
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false); 
    const [isOpen4, setIsOpen4] = useState(false);
    const [isOpen5, setIsOpen5] = useState(false);
    const [loading, setLoading] = useState(false);
    const [sessionModal, setSessionModal] = useState(false);
    const [transactionHistoryError, setTransactionHistoryError] = useState("");
    const [salesResponse, setSalesResponse] = useState({})
    const {newBalance, setNewBalance} = useContext(ContextProvider);
    const [passDataBalance, setPassDataBalance] = useState({});
    const [selected, setSelected] = useState("NGN");
    const [methodImage, setMethodImage] = useState(flagpage);
    const [methodBalance, setMethodBalance] = useState(false);
 
         const { isDarkMode, toggleSideBar } =
  useContext(ContextProvider);
    // const toggleDropdown1 = () => { setIsOpen1(true); };
// 
    // const toggleDropdown2 = () => { setIsOpen2(true); setIsOpen3(false); setIsOpen4(false);setIsOpen1(false); }; 
// 
    //  const toggleDropdown3 = () => { setIsOpen3(true); setIsOpen2(false); setIsOpen4(false); setIsOpen1(false); };
// 
    //   const toggleDropdown4 = () => { setIsOpen4(true);  setIsOpen3(false); setIsOpen2(false);setIsOpen1(false); };


    const [calender, setCalender] = useState(false);   




      const [selectedProduct, setSelectedProduct] = useState('Filter by product');
      
           
 const GetTransactionInformation = async(product)=> {
      if(!navigator.onLine) return setTransactionHistoryError("Network error")
      const path =`transactions/sales-summary?category=${product}`
      const SuccessHandler =()=>{
       console.log("Sales Summary fetched");
       console.log(product)
          if(product === "airtime"){
             setSelectedProduct("Airtime Top-up")
          }else if(product === "data"){
          setSelectedProduct("Data Top-up")
          }else if(product === "bills"){
           setSelectedProduct("Bills payment")
          }
      
}
      const FailedHandler = async(ErrorType)=> {
    if(ErrorType === "unauthorised"){
      setTransactionHistoryError("unauthorised");
      await GetFunction(path, setLoading, SuccessHandler, (ErrorType)=> {
        if(ErrorType === "unauthorised"){
       setSessionModal(true);
        }
      }, setSalesResponse)
    }else if(ErrorType === "Network error" || ErrorType === "User error" || ErrorType === "Bad request"){
     setTransactionHistoryError("Network error")
    }else if(ErrorType === "Server error"){
      setTransactionHistoryError("Server error")
    }else {
      setTransactionHistoryError(null)
    }
      }   
      await GetFunction(path, 
        setLoading, 
        SuccessHandler,
         FailedHandler,
          setSalesResponse)}

          const GetBalance =   async()=> {
                                  const SuccessHandler = ()=> {
                                //alert("Successful");
                           console.log("successfully retrieved balance");
                           //alert("Successful")
                             }
                            const FailedHandler = async(ErrorType)=> {
                              console.log(`Failed to retrieve balance`)
                              if(ErrorType === "unauthorised"){
                              await GetFunction("balance", 
                                setLoading, 
                                SuccessHandler,
                                (ErrorType)=> {
                                  if(ErrorType === "unauthorised"){
                                return setSessionModal(true)
                                  }
                               },
                                 setPassDataBalance)
                              }
                            
                            }
                            await GetFunction("balance",
                               setLoading,
                                SuccessHandler,
                                 FailedHandler,
                                 setPassDataBalance)
                              } 
                               // Simulate async data loading
                              
   
  
 window.addEventListener("online", ()=> {
   if(transactionHistoryError === "Network error"){
    GetTransactionInformation();
   }
 })

 //HandleDropDown
  const updateBalance = passDataBalance?.data?.data  ? passDataBalance?.data?.data?.data?.balance : "";
   const updateBalanceToNumber = Number(updateBalance);
   const newBalanceToNumber = Number(newBalance);
    const [selectedBalance, setSelectedBalance] = useState("")   
   const methodOptions = [
     { method: 'NGN Wallet', 
        balance : newBalance === "" || newBalance === null || newBalance === undefined  ? `(${updateBalanceToNumber?.toLocaleString("en-NG",{
         style : "currency",
         currency : "NGN"
        })})` : `(${ newBalanceToNumber?.toLocaleString("en-NG",{
         style : "currency",
         currency : "NGN"
        }) })`, 
        flag: flagpage, id: 1 },
     { method: 'USD Wallet ', balance: '(0.00)', flag: flagpage1, id: 2 },
     { method: 'EUR Wallet', balance: '(0.00)', flag: flagpage2, id: 3 },
     { method: 'GBP Wallet', balance: '(0.00)', flag: flagpage3, id: 4 },
     { method: 'AUD Wallet', balance: '(0.00)', flag: flagpage4, id: 5 },
     { method: 'KES Wallet', balance: '(0.00)', flag: flagpage5, id: 6 }
   ];

   useEffect(()=> {
//     if(salesResponse?.data?.data?.data === undefined){
//  GetTransactionInformation()
//     }
    setSelected("NGN");
    if(newBalance === "" || newBalance === null || newBalance === undefined){
                                  GetBalance();
                                  if(GetBalance){
                                   
                                   setNewBalance(passDataBalance?.data?.data?.data !== undefined ? passDataBalance?.data?.data?.data?.balance : "");
                                
                                  }
                                }

 //eslint-disable-next-line
 }, [])
 

    //Filtering the sales Summary data
  //    const filteredSalesSummary = salesResponse?.data?.data?.data?.transactions.filter((transaction) => {
  // if(selected === ""){
  //     return transaction
  //   }else{
  //     return transaction.product === selectedStatus;
  //   }
   
  // });

// const BalanceValue = newBalance === "" || newBalance === null 
// || newBalance === undefined 
// ? Number(passDataBalance?.data?.data?.data?.balance) : Number(newBalance) 


const symbolValue = selected === "USD" ? "$" : selected === "AUD" ? 
 "AU$" : selected === "KES" ?   "KSh" : selected === "EUR" ? "€" : selected === "GBP" ? "£" : "₦";
// const handleSelectedOption = ()=> {
 
// }
const product = ["Airtime Top-up", "Data Top-up", "Bills payment"]
    return (

        <DashBoardLayout>
        <>
        <div className="flex flex-col gap-[20px]">

          <div
            // id="Transaction"
            className="min-h-[99px]   bg-gradient-to-r
             from-yellow-300 to-rose-400 lg:h-[196px] md:h-[112.29px] rounded-[6.6px] md:rounded-[11.46px] lg:rounded-[20px]
                           mx-auto  flex gap-6 justify-between px-[16.51px] md:px-[28.65px] lg:px-[50px]"
          >
            <div className="py-[9.57px] md:py-[16.61px] align-middle self-center 
                            flex flex-col gap-1.5 w-[70%]">
              <p className="text-[11px] leading-[13px] lg:leading-[30px]
                                 lg:text-[24px] md:text-[13.75px] font-semibold">
                MANAGE ALL YOUR TRANSACTIONS AT A TIME WITHOUT ANY HASSLE.
              </p>
              <p className="text-[10px] leading-[13px] lg:leading-[25px] lg:text-[20px]
                                 md:text-[11.46px]">
                Select, filter, and manage all your transactions at a time,
                download all transactions stats and keep a record track.
              </p>
            </div>

            <div className="flex w-[23%] h-[97%] pt-2 shrink-0">
              <img
                src={receiptA}
                alt=""
                className="w-[100%] h-[100%]"
              />
            </div>
          </div>




{/* Sales summary */}
    <div className=" flex gap-[8px] md:gap-[10px] lg:mt-[25px] mt-[6px] md:mt-[10] flex-row">
        <div class="text-neutral-500 text-[11px] lg:text-[20px] md:text-[14px] font-semibold ">Sales Summary</div>
        <div class="w-4 h-4 lg:h-6 lg:mt-1 lg:w-6 md:w-[15.75px] 
        md:h-[15.75px] justify-center items-center inline-flex">
            <img src={arrowsales} class="w-4 h-4 lg:h-6 lg:w-6 md:mt-[8px] mt-1 
             md:w-[15.75px] md:h-[15.75px] " alt="" />

        
        </div>

        </div>
        {/* available balance */}
        <div className='flex flex-col gap-[20px] relative '>
        <div className="lg:px-[] lg:py-[25px] lg:h-[120px] py-[10px] lg:gap-2.5  
gap-[5px] lg:mt-[25px] bg-indigo-300 
 bg-opacity-20 md:rounded-[11.46px] lg:rounded-[20px] rounded-[6px]
  justify-center lg:w-full w-full md:w-full md:mt-[9px] md:h-[68.75px] 
  md:px-[140.10px] md:py-[14.32px]  items-center flex-col flex">
    <div className=" w-full flex flex-col gap-[100px]">
 <div onClick={()=> {
           setMethodBalance(true);
                          setCalender(false);
                          setIsOpen1(false);
                         
                           if(methodBalance === false){
                            setMethodBalance(true)
                                document.querySelector('.methodDrop').classList.add('DropIt'); 
                           }else{
                            setMethodBalance(false)
                              document.querySelector('.methodDrop').classList.remove('DropIt');
                           }
                        }
       }
       className="justify-center items-start mt-[5px] 
              md:mt-[12px] gap-[5.5px] cursor-pointer  lg:gap-[11px] md:gap-[6.30px]  flex">
<img className="h-[16px] w-[14px] 
    md:h-[14.038px] md:w-[14.038px] lg:h-[24px] lg:w-[24px]"
 src={methodImage} alt="" />
                <p className="text-black lg:text-[20px] 
                text-[10px] md:text-[13px] md:whitespace-nowrap font-semibold lg:leading-relaxed md:leading-[14.90px] leading-[10.40px] ">
                  Available Balance
                </p>
                <p className="text-neutral-500 lg:text-[20px] text-[10px] md:text-[13px] font-medium  lg:leading-relaxed md:leading-[14.90px] leading-[10.40px]">
                {selectedBalance?.length < 1 ? newBalance === "" || newBalance === null || newBalance === undefined  ? `(${updateBalanceToNumber?.toLocaleString("en-NG",{
         style : "currency",
         currency : "NGN"
        })})` : `(${ newBalanceToNumber?.toLocaleString("en-NG",{
         style : "currency",
         currency : "NGN"
        }) })` : selectedBalance }
                </p>
            
            

              
    <img className="methodDrop h-[16px] w-[14px] 
    md:h-[14.038px] md:w-[14.038px] lg:h-[24px] lg:w-[24px]"
     src={arrows} alt="Arrow " />
 </div>
    
       {methodBalance && (
                <div className={`absolute top-[60%] z-[2] flex
                   flex-col w-[100%] lg:w-[30%] md:w-[50%]  cursor-pointer 
                   justify-center bg-slate-600   ${
                    isDarkMode 
        ? "bg-black text-white border border-white" 
        : "bg-white"
                  }`}>
            {methodOptions.map((method)=> (
             <div onClick ={()=> {
               setSelectedBalance(method.id === 1   ? 
                            method.balance : method.option === "NGN Wallet" ?
                            ( newBalance === "" || newBalance === null ? `(${updateBalance})` :
                            `(${newBalance})`) : method.balance);
                          setMethodImage(method.flag);
                          setMethodBalance(false);
                          setCalender(false);
                          setIsOpen1(false);
                          setMethodBalance(false);
                            document.querySelector('.methodDrop').classList.remove('DropIt');
               }}
             className={`pb-[20px] pt-[20px] z-[100px] md:pb-0 md:pt-0 justify-start
                           flex gap-[10px] lg:py-[15px] py-[10px] pl-[10px]
        cursor-pointer  items-center shadow-[0px_3.30667px_8.26667px_0px_rgba(0,0,0,0.25)]  

           ${method.id !== 1 && !isDarkMode  ? "bg-gray-300 cursor-not-allowed" : 
            method.id !== 1 && isDarkMode ? "bg-black" : method.id === 1 && !isDarkMode ? "bg-white" : "bg-black" }
                  `}
                        key={method.id}>
      <img className='lg:w-[29.27px] w-3 lg:h-[29.45px]
                    h-3 lg:left-0 lg:top-[0.91px] md:w-[16.77px]
                    md:h-[16.77px] ' src={method.flag} alt="" />
                  
     <p className="text-neutral-500 text-[9px] md:text-[13px] lg:text-xl lg:font-medium 
                  md:leading-3 lg:leading-tight">
                 {method.method} : {method.balance}
                </p>
              
            </div>
            
          
             ))}
             </div>
)}
</div> 
</div>
            



    {/* filter by date and product*/}
    <div className={`${toggleSideBar
  ? " md:w-[550px]"
  : "  md:w-full"} w-full h-[50px] py-[5px] px-[5px]  mt-[2px] lg:mt-[30px]  md:py-[11px]
    lg:h-[72px] lg:pl-4 lg:pr-[459.30px] lg:gap-[50.53px] lg:py-[11px]
    md:h-[41.25px] md:pl-[9.17px] md:pr-[277.40px] md:pt-[8.39px] lg:w-full
    md:pb-[6.40px] bg-white shadow-md border-[1px] border-black rounded-[7px]
    border-opacity-30 justify-start items-center gap-[52.80px] flex relative`}>
  {/* filter by date */}

  <div onClick={() => {
  setCalender((prev) => !prev);
  setIsOpen5(false)
  setIsOpen1(false)
}}  className={`cursor-pointer ${styles.filter}  ${
  isDarkMode ? "border" : ""} flex  md:gap-[6px] items-center
   justify-center md:w-[145px] h-[100%] w-[100%]
  lg:w-[300px] gap-[1px]
   px-[2px] rounded-[3px] md:px-[8px] flex-row`}>
        <p className="text-[#04177f] text-[11px] 
                leading-[14px] font-[500] 
                  lg:text-[16px] ">Filter by Date</p>
      
            <img src="./Images/dashboardImages/dateImg.png" 
            className="w-[12px] h-[12px] md:w-[17px] md:h-[17px] lg:w-[20px] lg:h-[20px]" alt="" />

 </div>

    {/* filter by product */}
        <div  onClick={() => {
 
   setCalender(false)
   setIsOpen5(false)
   if(isOpen1 === false){
    setIsOpen1(true)
   }else{
    setIsOpen1(false);
   }
 }} className={`flex flex-col cursor-pointer h-[100%] w-[100%] lg:w-[50%] ${styles.filter}`}>
       <div class="h-[100%] w-[100%] justify-center items-center
             lg:gap-[5px] gap-[2.86px] flex">
        <img className='w-[11.37px] h-[11.37px]  md:w-[20px] md:h-[19px]
                     lg:w-[19.85px] lg:h-[19.85px]' src={menusales} alt="" />
                   
                
                <p
                  className="text-[#04177f] text-[11px] 
                leading-[14px] font-[500] 
                  lg:text-[16px]">{selectedProduct}</p>
            
            
                <div  class="w-[11.37px] h-[11.37px] md:w-[17px] 
                md:h-[17px] lg:w-[19.85px] lg:h-[19.85px] justify-center items-center flex">
                                    {isOpen1 ? (
   <img src={arrow44} className="h-[100%] w-[100%]" alt="Arrow44" />
 ) : (
   <img classname="h-[100%] w-[100%]" src={arrow11} alt="arrow11" />
 )}

            </div>
            </div>
       
       

        {/*filter by product dropdown */}
          {    isOpen1 && (
                <ul className={`dropdown-options z-[2] absolute left-0 md:left-auto top-[100%]
                 w-full md:w-[50%] lg:w-[30%] bg-white cursor-pointer`}>
                  {product?.map((option, index) => (
                    <li
                      className={`pb-[20px] pt-[20px] md:pb-[14px] 
                        md:pt-[14px] font-weight-bold text-[14px] leading-[10.4px] 
                        md:py-[15px] py-[8px] pl-[10px] font-[500] 
                      md:text-[13.227px] md:leading-[17.195px] 
                      shadow-[0px_3.30667px_8.26667px_0px_rgba(0,0,0,0.25)]
                      lg:text-[16px] lg:leading-[20.8px] cursor-pointer  dropdownCSS ${
                        isDarkMode 
                          ? "bg-black text-white border border-white" 
                          : "hover:bg-[#EDEAEA] border-[#9C9C9C]  bg-white text-[#7C7C7C] "
                      }`}
                      key={index}
                      onClick={() =>{
                        
                        if(option === "Airtime Top-up"){
                        
                          GetTransactionInformation("airtime")
                          setIsOpen1(false);
                          setIsOpen2(true);
                          setIsOpen3(false);
                          setIsOpen4(false);
                        }else if(option === "Data Top-up"){
                         
                          GetTransactionInformation("data")
                             setIsOpen1(false);
                          setIsOpen2(false);
                          setIsOpen3(true);
                          setIsOpen4(false)
                        }else if(option === "Bills payment"){
                         
                           GetTransactionInformation("bills")
                          setIsOpen1(false);
                          setIsOpen2(false);
                          setIsOpen3(false);
                          setIsOpen4(true)
                        }
                      }
                      }
                    >
                   {option}
                    </li>
                  ))}
                </ul>
              )}
       
    </div>
    </div>
    


    { calender && <div className=" absolute top-[100%]  z-50 "><Calender/></div> }
    </div>
   
    <div className="">


    
    
      {/* ==============================Sale Analysis Indicator====================== */}


      
      {/* The flow start here */}
     <div>
                <div
                  className={` flex w-full gap-[5px] h-[70px] lg:h-[100px] md:items-center 
                  lg:mt-[5%] lg:items-center my-[30px]`}>
                  <select
                    name="curr"
                    id="curr"
                   // onChange={handleSelectedOption}
                    value={selected}
                    className={`${styles.selected} w-[25%]`}
                  >
                    <option value="NGN">NGN</option>
                    <option value="USD">USD</option>
                    <option value="GBP">GBP</option>
                    <option value="EUR">EUR</option>
                    <option value="AUD">AUD</option>
                    <option value="KES">KES</option>
                  </select>
    
                  <div
                    className={`w-[33.3%] rounded-[3px] lg:rounded-[5px] flex flex-col h-full justify-center items-center
                       gap-[3px] ${
                      isDarkMode ? "border " : " bg-[#D5F6E3]"
                    }   ${
                      toggleSideBar ? "lg:text-[14px]" : "lg:text-[px]"
                    }`}
                  >
                    <div className="flex gap-1  justify-center items-center  ">
                      <p className={` text-[11px] text-center leading-[14px] font-[500] 
                      lg:text-[18px] lg:leading-[24px]
                        ${toggleSideBar ? "lg:text-[18px]" : ""}`}>
                        Total Inflows
                      </p>
                      <img
                        className="h-[10.3px] w-[10.3px] md:h-[18px] md:w-[18px] lg:w-[24px] lg:h-[24px]"
                        src="./Images/dashboardImages/newarrow-down.png"
                        alt="dropdown"
                      />
                    </div>
                    <p className="text-center text-[10px] leading-[13px] font-[500] 
                      lg:text-[18px] lg:leading-[24px]">
                      {selected === "NGN" ?  salesResponse?.data?.data?.data ?
           salesResponse?.data?.data?.data?.total_inflow?.toLocaleString("en-NG", {
              style : "currency",
              currency : "NGN"
            }) :   "₦"  : `${symbolValue}0.00` }
                    </p>
                  </div>
    
                  <div
                    className={`w-[33.3%] rounded-[3px] lg:rounded-[5px]  flex flex-col h-full justify-center items-center
                       gap-[3px] ${
                      isDarkMode ? "border " : " bg-[#92abfe81]"
                    }  text-[7px] md:text-[12px]`}
                  >
                    <div className="flex gap-1 justify-center items-center ">
                      <p className={`  text-[11px] text-center leading-[14px] font-[500] 
                      lg:text-[18px] lg:leading-[24px] ${toggleSideBar ? "lg:text-[18px]" : ""}`}>
                        Total Transactions{" "}
                      </p>
                      <img
                        className="h-[10.3px] w-[10.3px] md:h-[18px] md:w-[18px] lg:w-[24px] lg:h-[24px]"
                        src="./Images/dashboardImages/newarrow-down.png"
                        alt="dropdown"
                      />
                    </div>
                    <p className="text-center  text-[10px] leading-[13px] font-[500] 
                      lg:text-[18px] lg:leading-[24px]">{selected === "NGN" ? 
                      salesResponse?.data?.data?.data?.total_count
                       || salesResponse?.data?.status === 200  ?
                        salesResponse?.data?.data?.data?.total: "" : 0}  </p>
                  </div>
    
                  <div
                    className={`w-[33.3%] rounded-[3px] lg:rounded-[5px] flex flex-col h-full justify-center items-center
                       gap-[3px] ${
                      isDarkMode ? "border " : " bg-[#FDCECE]"
                    } text-[7px] md:text-[12px]`}
                  >
                    <div className="flex gap-1 justify-center items-center">
                      <p className={`text-[11px] text-center leading-[14px] font-[500] 
                      lg:text-[18px] lg:leading-[24px] ${toggleSideBar ? "lg:text-[18px]" : ""}`}>
                        Total Outflows
                      </p>
                      <img
                        className="h-[10.3px] w-[10.3px] md:h-[18px] md:w-[18px] lg:w-[24px] lg:h-[24px]"
                        src="./Images/dashboardImages/newarrow-up.png"
                        alt="dropdown"
                      />
                    </div>
                    <p className="text-center  text-[10px] leading-[13px] font-[500] 
                      lg:text-[18px] lg:leading-[24px]">
                      {selected === "NGN"  ? salesResponse?.data?.data?.data ?
            salesResponse?.data?.data?.data?.total_outflow?.toLocaleString("en-NG", {
              style : "currency",
              currency : "NGN"
            }) :   "₦"  : `${symbolValue}0.00`}
                    </p>
                  </div>
                </div>
              </div>
      {/* The flow ends here */}

      <div className="flex items-center text-neutral-500 gap-[10px]">
        <p className={styles.InOutText}>Sales Analysis</p>
        <img
          className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
          src="./Images/dashboardImages/arrowright.png"
          alt="/"
        />
      </div>

      </div>

     
 {/* product, quantity and total amount */}
    <div className="flex md:w-full w-full border-opacity-100 
      lg:w-full shadow border-black flex-col">
    <div class="w-full h-[25px] lg:pr-0 pl-[8.67px] pr-[1.33px] pt-[8.17px] pb-[6.83px]
     md:w-full lg:w-full lg:pl-[23px]
     lg:h-[42px] md:h-[24.06px]  md:pl-[14.90px] md:pr-[2.29px]
      md:pt-[6.32px] md:pb-[5.74px] bg-indigo-200 justify-evenly
       lg:justify-between md:justify-evenly items-center inline-flex">
        <div className="self-stretch md:justify-between md:w-full lg:justify-between 
        lg:gap-[300px]  lg:w-full justify-start items-start gap-[66px] md:gap-[113.44px] inline-flex">
            <div className="w-[56.33px] md:w-[96.82px] lg:w-full text-black text-[8px] md:text-[12px] lg:text-[16px] font-semibold  md:leading-3 lg:leading-tight  leading-[10.40px]">Products</div>
            <div className="w-[53.33px] md:w-[91.67px] lg:w-full text-black text-[8px] md:text-[12px] lg:text-[16px] font-semibold  md:leading-3 lg:leading-tight  leading-[10.40px]">Quantity</div>
            <div className="w-[60.33px] md:w-[103.70px] lg:w-full text-black text-[8px] md:text-[12px] lg:text-[16px] font-semibold md:leading-3 lg:leading-tight leading-[10.40px]">Total Amount</div>
        </div>
    </div>
    <div className="w-[312px] lg:h-[101px]  h-[33.67px] md:w-full md:h-[0px] "></div>
  </div>










{/*main contact us */}
<div className=' '>
<footer className="
 flex  justify-center   text-center gap-[20px] 
 mt-[370px] mb-[20px] md:mt-[580px] lg:mb-[30px]  
  z-index-2 onset-[500px] lg:mt-[760px]">
            <p className="text-[8px] md:text-[12px] lg:text-[12px]  font-[500] leading-[9.1px] mt-[5px] lg:mt-[13px]">
              You need help?
            </p>

            <Link to="/ContactUs">
              <div
                className={`${
                  isDarkMode ? "border " : "bg-[#04177f]"
                } text-[8px] p-1 text-white rounded-[7px] w-[70px] lg:w-[100px] lg:text-[12px]`}
              >
                Contact Us
              </div>
            </Link>
          </footer>
          </div>









{/* airtime top-up dropdown */}
{isOpen2 && (
  <div className=''>
  <div
  className={`${styles.viewTransact} ${
    isDarkMode ? "bg-black border" : "bg-white"
  }`}
  >
  
  
  <div className="flex  justify-start items-center lg:w-full absolute bg-white  md:mt-[-665px]
    lg:mt-[-967px] mt-[-492px] lg:h-[1100px] md:h-[1000px] h-[653px] mb-5 border-b-[1.2px] flex-col">
  <div className={`${  
    toggleSideBar
    ? "lg:gap-[360px]"
    : "lg:gap-[445px]"}
  lg:w-full md:w-full md:h-[70.86px] md:pl-[14.90px]  md:pr-[9.29px]  lg:h-[101px] 
  lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px]  pr-[1.33px] pt-3 pb-[11.67px] bg-white 
  justify-between md:justify-between
   lg:justify-start 
  items-center inline-flex`}>
      
          <div class="lg:w-[100px] lg:text-base md:w-[96.82px] md:whitespace-nowrap  md:text-[12px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[8px] font-medium leading-[10.40px]">MTN VTU</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium leading-[10.40px]">100</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[60.33px] text-black text-[8px] font-medium leading-[10.40px]">(₦10,000.00)</div>
      
  </div>
  <div class={`${
      toggleSideBar
      ? "lg:gap-[360px]"
      : "lg:gap-[445px]"}
    lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[9.29px] lg:h-[101px]
   lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.66px] bg-white 
   justify-between md:justify-between lg:justify-start  items-center inline-flex`}>
      
          <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[12px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[8px] font-medium leading-[10.40px]">MTN SNS</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium leading-[10.40px]">100</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[60.33px] text-black text-[8px] font-medium leading-[10.40px]">(₦10,000.00)</div>
      
  </div>
  <div class={`${
      toggleSideBar
      ? "lg:gap-[360px]"
      : "lg:gap-[445px]"}
    lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[9.29px]
   lg:h-[101px] lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px]
    pt-3 pb-[11.67px] bg-white justify-between md:justify-between  md:whitespace-nowrap lg:justify-start  items-center inline-flex`}>
      
          <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[12px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[8px] font-medium  leading-[10.40px]">AIRTEL VTU</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium  leading-[10.40px]">100</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[60.33px] text-black text-[8px] font-medium  leading-[10.40px]">(₦10,000.00)</div>
      </div>
  
  <div class={`${
      toggleSideBar
      ? "lg:gap-[360px]"
      : "lg:gap-[445px]"}
    lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[9.29px]
   lg:h-[101px] lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px]
    pt-3 pb-[11.67px] bg-white justify-between md:justify-between lg:justify-start md:whitespace-nowrap
     items-center inline-flex`}>
      
          <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[12px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[8px] font-medium  leading-[10.40px]">AIRTEL SNS</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium  leading-[10.40px]">100</div>
          <div class="lg:w-[100px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[12px] md:leading-3 w-[60.33px] text-black text-[8px] font-medium  leading-[10.40px]">(₦10,000.00)</div>
      
  </div>
  <div class={`${
      toggleSideBar
      ? "lg:gap-[360px]"
      : "lg:gap-[445px]"}
    lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[9.29px] lg:h-[101px]
   lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-2 pb-[7.66px] bg-white
    justify-between md:justify-between lg:justify-start  md:whitespace-nowrap items-center inline-flex`}>
      
          <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[12px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[7px] font-medium  leading-[9.10px]">GLO VTU</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium  leading-[10.40px]">100</div>
          <div class="lg:w-[100px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[12px] md:leading-3 w-[60.33px] text-black text-[8px] font-medium  leading-[10.40px]">(₦10,000.00)</div>
      
  </div>
  <div class={`${
      toggleSideBar
      ? "lg:gap-[360px]"
      : "lg:gap-[445px]"}
    lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[9.29px] lg:h-[101px]
   lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] lg:justify-start  pr-[1.33px] pt-2 pb-[7.67px] bg-white
    justify-between md:justify-between md:whitespace-nowrap items-center inline-flex`}>
      
          <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[12px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[7px] font-medium leading-[9.10px]">GLO SNS</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium leading-[10.40px]">100</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[60.33px] text-black text-[8px] font-medium leading-[10.40px]">(₦10,000.00)</div>
      
  </div>
  <div class={`${
      toggleSideBar
      ? "lg:gap-[360px]"
      : "lg:gap-[445px]"}
    lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[9.29px] lg:h-[101px] 
  lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-2 pb-[7.67px] bg-white
   justify-between md:justify-between items-center lg:justify-start  md:whitespace-nowrap inline-flex`}>
      
          <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[12px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[7px] font-medium  leading-[9.10px]">9MOBILE VTU</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium  leading-[10.40px]">100</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[60.33px] text-black text-[8px] font-medium  leading-[10.40px]">(₦10,000.00)</div>
      
  </div>
  <div class={`${
      toggleSideBar
      ? "lg:gap-[360px]"
      : "lg:gap-[445px]"}
    lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[9.29px] lg:h-[101px]
   lg:pl-[26px] lg:pr-1  w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-2 pb-[7.67px] bg-white
    justify-between md:justify-between lg:justify-start  md:whitespace-nowrap items-center inline-flex`}>
      
          <div class="lg:w-[100px] lg:text-base lg:leading-tight md:w-[96.82px]  md:text-[12px] md:leading-3 w-[56.33px] text-black text-[7px] font-medium leading-[9.10px]">9MOBILE SNS</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium leading-[10.40px]">100</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[60.33px] text-black text-[8px] font-medium leading-[10.40px]">(₦10,000.00)</div>
      
  </div>
  <div class={`${
      toggleSideBar
      ? "lg:gap-[360px]"
      : "lg:gap-[445px]"}
    lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[9.29px] lg:h-[101px] lg:pl-[26px]
   lg:pr-1  w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-[7px] pb-[6.67px] bg-white justify-between
   md:justify-between lg:justify-start  md:whitespace-nowrap items-center inline-flex`}>
      
          <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[12px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[8px] font-medium leading-[10.40px]">SMILE AIRTIME</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium leading-[10.40px]">100</div>
          <div class="lg:w-[100px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[12px] md:leading-3 w-[60.33px] text-black text-[8px] font-medium leading-[10.40px]">(₦10,000.00)</div>
      
  </div>
  <div class={`${
      toggleSideBar
      ? "lg:gap-[360px]"
      : "lg:gap-[445px]"}
    lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[9.29px] lg:h-[101px] lg:pl-[26px]
   lg:pr-1  w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.66px] bg-white justify-between
   md:justify-between lg:justify-start items-center inline-flex `}>
      
          <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[11px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[8px] font-medium leading-[10.40px]">INTERNATIONAL AIRTIME</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium leading-[10.40px]">100</div>
          <div class="lg:w-[100px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[12px] md:leading-3 w-[60.33px] text-black text-[8px] font-medium leading-[10.40px]">(₦10,000.00)</div>
      </div>
  
  
  
      <footer className="flex justify-center  text-center gap-[20px] mt-[270px] mb-[10px]
       md:mt-[350px] lg:mb-[30px] lg:mt-[185px]">
              <p className="text-[8px] md:text-[12px] lg:text-[12px]  font-[500] leading-[9.1px] mt-[5px] lg:mt-[13px]">
                You need help?
              </p>
  
              <Link to="/ContactUs">
                <div
                  className={`${
                    isDarkMode ? "border " : "bg-[#04177f]"
                  } text-[8px] p-1 text-white md:text-[10px] rounded-[8px] lg:w-[100px] w-[70px] lg:text-[12px]`}
                >
                  Contact Us
                </div>
              </Link>
            </footer>
            </div>
  </div>
  </div>
  
)}





{/* data top-up dropdown */}
{isOpen3 && (
  <div className=' bg-white'>


  <div className="flex  justify-start items-center lg:w-full shadow relative bg-white  md:mt-[-670px]
    lg:mt-[-967px] mt-[-492px] lg:h-[1590px] md:h-[1390px]  h-[1050px]
     border mb-5 border-b-[1.2px] flex-col">
  <div className={`${  
    toggleSideBar
    ? "lg:gap-[360px]"
    : "lg:gap-[445px]"}
  lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px]  lg:h-[101px] 
  lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px]  pr-[1.33px] pt-3 pb-[11.67px] bg-white 
  justify-between md:justify-between
   lg:justify-start 
  items-center inline-flex`}>
      
          <div class="lg:w-[100px] lg:text-base md:w-[96.82px] md:whitespace-nowrap  md:text-[12px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[8px] font-medium leading-[10.40px]">MTN SME</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium leading-[10.40px]">100GB</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[60.33px] text-black text-[8px] font-medium leading-[10.40px]">(₦10,000.00)</div>
      
  </div>
  <div class={`${
      toggleSideBar
      ? "lg:gap-[360px]"
      : "lg:gap-[445px]"}
    lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] lg:h-[101px]
   lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.66px] bg-white 
   justify-between md:justify-between lg:justify-start  items-center inline-flex`}>
      
          <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[12px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[8px] font-medium leading-[10.40px]">MTN SME2</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium leading-[10.40px]">100GB</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[60.33px] text-black text-[8px] font-medium leading-[10.40px]">(₦10,000.00)</div>
      
  </div>
  <div class={`${
      toggleSideBar
      ? "lg:gap-[360px]"
      : "lg:gap-[445px]"}
    lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px]
   lg:h-[101px] lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px]
    pt-3 pb-[11.67px] bg-white justify-between md:justify-between  md:whitespace-nowrap lg:justify-start  items-center inline-flex`}>
      
          <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[12px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[8px] font-medium  leading-[10.40px]">MTN CG</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium  leading-[10.40px]">100GB</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[60.33px] text-black text-[8px] font-medium  leading-[10.40px]">(₦10,000.00)</div>
      </div>
  
  <div class={`${
      toggleSideBar
      ? "lg:gap-[360px]"
      : "lg:gap-[445px]"}
    lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px]
   lg:h-[101px] lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px]
    pt-3 pb-[11.67px] bg-white justify-between md:justify-between lg:justify-start md:whitespace-nowrap
     items-center inline-flex`}>
      
          <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[12px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[8px] font-medium  leading-[10.40px]">MTN GIFTING</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium  leading-[10.40px]">100GB</div>
          <div class="lg:w-[100px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[12px] md:leading-3 w-[60.33px] text-black text-[8px] font-medium  leading-[10.40px]">(₦10,000.00)</div>
      
  </div>
  <div class={`${
      toggleSideBar
      ? "lg:gap-[360px]"
      : "lg:gap-[445px]"}
    lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] lg:h-[101px]
   lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-2 pb-[7.66px] bg-white
    justify-between md:justify-between lg:justify-start  md:whitespace-nowrap items-center inline-flex`}>
      
          <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[12px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[7px] font-medium whitespace-nowrap leading-[9.10px]">MTN DIRECT <br/> COUPON</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium  leading-[10.40px]">100GB</div>
          <div class="lg:w-[100px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[12px] md:leading-3 w-[60.33px] text-black text-[8px] font-medium  leading-[10.40px]">(₦10,000.00)</div>
      
  </div>
  <div class={`${
      toggleSideBar
      ? "lg:gap-[360px]"
      : "lg:gap-[445px]"}
    lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] lg:h-[101px]
   lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] lg:justify-start  pr-[1.33px] pt-2 pb-[7.67px] bg-white
    justify-between md:justify-between md:whitespace-nowrap items-center inline-flex`}>
      
          <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[12px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[7px] font-medium whitespace-nowrap leading-[9.10px]">MTN GENERAL<br /> BUNDLES</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium leading-[10.40px]">100GB</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[60.33px] text-black text-[8px] font-medium leading-[10.40px]">(₦10,000.00)</div>
      
  </div>
  <div class={`${
      toggleSideBar
      ? "lg:gap-[360px]"
      : "lg:gap-[445px]"}
    lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] lg:h-[101px] 
  lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-2 pb-[7.67px] bg-white
   justify-between md:justify-between items-center lg:justify-start  md:whitespace-nowrap inline-flex`}>
      
          <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[12px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[7px] font-medium  leading-[9.10px]">AIRTEL CG</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium  leading-[10.40px]">100GB</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[60.33px] text-black text-[8px] font-medium  leading-[10.40px]">(₦10,000.00)</div>
      
  </div>
  <div class={`${
      toggleSideBar
      ? "lg:gap-[360px]"
      : "lg:gap-[445px]"}
    lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] lg:h-[101px] lg:pl-[26px]
   lg:pr-1  w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.66px] bg-white justify-between
   md:justify-between lg:justify-start items-center inline-flex `}>
      
          <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[11px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[8px] font-medium whitespace-nowrap leading-[10.40px]">AIRTEL GIFTING</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium leading-[10.40px]">100GB</div>
          <div class="lg:w-[100px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[12px] md:leading-3 w-[60.33px] text-black text-[8px] font-medium leading-[10.40px]">(₦10,000.00)</div>
      </div>
  
      <div class={`${
      toggleSideBar
      ? "lg:gap-[360px]"
      : "lg:gap-[445px]"}
    lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] lg:h-[101px] lg:pl-[26px]
   lg:pr-1  w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.66px] bg-white justify-between
   md:justify-between lg:justify-start items-center inline-flex `}>
      
          <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[11px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[8px] font-medium whitespace-nowrap leading-[10.40px]">AIRTEL GENERAL<br/> BUNDLE</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium leading-[10.40px]">100GB</div>
          <div class="lg:w-[100px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[12px] md:leading-3 w-[60.33px] text-black text-[8px] font-medium leading-[10.40px]">(₦10,000.00)</div>
      </div>

      <div class={`${
      toggleSideBar
      ? "lg:gap-[360px]"
      : "lg:gap-[445px]"}
    lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] lg:h-[101px] lg:pl-[26px]
   lg:pr-1  w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.66px] bg-white justify-between
   md:justify-between lg:justify-start items-center inline-flex `}>
      
          <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[11px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[8px] font-medium leading-[10.40px]">GLO CG</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium leading-[10.40px]">100GB</div>
          <div class="lg:w-[100px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[12px] md:leading-3 w-[60.33px] text-black text-[8px] font-medium leading-[10.40px]">(₦10,000.00)</div>
      </div>

      <div class={`${
      toggleSideBar
      ? "lg:gap-[360px]"
      : "lg:gap-[445px]"}
    lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] lg:h-[101px] lg:pl-[26px]
   lg:pr-1  w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.66px] bg-white justify-between
   md:justify-between lg:justify-start items-center inline-flex `}>
      
          <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[11px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[8px] font-medium whitespace-nowrap leading-[10.40px]">GLO GIFTING</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium leading-[10.40px]">100GB</div>
          <div class="lg:w-[100px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[12px] md:leading-3 w-[60.33px] text-black text-[8px] font-medium leading-[10.40px]">(₦10,000.00)</div>
      </div>

      <div class={`${
      toggleSideBar
      ? "lg:gap-[360px]"
      : "lg:gap-[445px]"}
    lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] lg:h-[101px] lg:pl-[26px]
   lg:pr-1  w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.66px] bg-white justify-between
   md:justify-between lg:justify-start items-center inline-flex `}>
      
          <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[11px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[8px] font-medium whitespace-nowrap leading-[10.40px]">GLO GENERAL<br/> BUNDLES</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium leading-[10.40px]">100GB</div>
          <div class="lg:w-[100px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[12px] md:leading-3 w-[60.33px] text-black text-[8px] font-medium leading-[10.40px]">(₦10,000.00)</div>
      </div>

      <div class={`${
      toggleSideBar
      ? "lg:gap-[360px]"
      : "lg:gap-[445px]"}
    lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] lg:h-[101px] lg:pl-[26px]
   lg:pr-1  w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.66px] bg-white justify-between
   md:justify-between lg:justify-start items-center inline-flex `}>
      
          <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[11px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[8px] font-medium whitespace-nowrap leading-[10.40px]">9MOBILE SME</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium leading-[10.40px]">100GB</div>
          <div class="lg:w-[100px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[12px] md:leading-3 w-[60.33px] text-black text-[8px] font-medium leading-[10.40px]">(₦10,000.00)</div>
      </div>

      <div class={`${
      toggleSideBar
      ? "lg:gap-[360px]"
      : "lg:gap-[445px]"}
    lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] lg:h-[101px] lg:pl-[26px]
   lg:pr-1  w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.66px] bg-white justify-between
   md:justify-between lg:justify-start items-center inline-flex `}>
      
          <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[11px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[8px] font-medium whitespace-nowrap leading-[10.40px]">9MOBILE CG</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium leading-[10.40px]">100GB</div>
          <div class="lg:w-[100px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[12px] md:leading-3 w-[60.33px] text-black text-[8px] font-medium leading-[10.40px]">(₦10,000.00)</div>
      </div>

      <div class={`${
      toggleSideBar
      ? "lg:gap-[360px]"
      : "lg:gap-[445px]"}
    lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] lg:h-[101px] lg:pl-[26px]
   lg:pr-1  w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.66px] bg-white justify-between
   md:justify-between lg:justify-start items-center inline-flex `}>
      
          <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[11px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[8px] font-medium whitespace-nowrap leading-[10.40px]">9MOBILE GENERAL<br/> BUNDLES</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium leading-[10.40px]">100GB</div>
          <div class="lg:w-[100px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[12px] md:leading-3 w-[60.33px] text-black text-[8px] font-medium leading-[10.40px]">(₦10,000.00)</div>
      </div>

      <div class={`${
      toggleSideBar
      ? "lg:gap-[360px]"
      : "lg:gap-[445px]"}
    lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] lg:h-[101px] lg:pl-[26px]
   lg:pr-1  w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.66px] bg-white justify-between
   md:justify-between lg:justify-start items-center inline-flex `}>
      
          <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[11px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[8px] font-medium whitespace-nowrap leading-[10.40px]">SMILE BIGGA</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium leading-[10.40px]">100GB</div>
          <div class="lg:w-[100px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[12px] md:leading-3 w-[60.33px] text-black text-[8px] font-medium leading-[10.40px]">(₦10,000.00)</div>
      </div>

      <div class={`${
      toggleSideBar
      ? "lg:gap-[360px]"
      : "lg:gap-[445px]"}
    lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] lg:h-[101px] lg:pl-[26px]
   lg:pr-1  w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.66px] bg-white justify-between
   md:justify-between lg:justify-start items-center inline-flex `}>
      
          <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[11px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[8px] font-medium whitespace-nowrap leading-[10.40px]">SMILE UNLIMITED</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium leading-[10.40px]">100GB</div>
          <div class="lg:w-[100px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[12px] md:leading-3 w-[60.33px] text-black text-[8px] font-medium leading-[10.40px]">(₦10,000.00)</div>
      </div>

      <div class={`${
      toggleSideBar
      ? "lg:gap-[360px]"
      : "lg:gap-[445px]"}
    lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] lg:h-[101px] lg:pl-[26px]
   lg:pr-1  w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.66px] bg-white justify-between
   md:justify-between lg:justify-start items-center inline-flex `}>
      
          <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[11px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[8px] font-medium whitespace-nowrap leading-[10.40px]">SMILE DAILY</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium leading-[10.40px]">100GB</div>
          <div class="lg:w-[100px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[12px] md:leading-3 w-[60.33px] text-black text-[8px] font-medium leading-[10.40px]">(₦10,000.00)</div>
      </div>

      <div class={`${
      toggleSideBar
      ? "lg:gap-[360px]"
      : "lg:gap-[445px]"}
    lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] lg:h-[101px] lg:pl-[26px]
   lg:pr-1  w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.66px] bg-white justify-between
   md:justify-between lg:justify-start items-center inline-flex `}>
      
          <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[11px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[8px] font-medium whitespace-nowrap leading-[10.40px]">SMILE WEEKLY</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium leading-[10.40px]">100GB</div>
          <div class="lg:w-[100px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[12px] md:leading-3 w-[60.33px] text-black text-[8px] font-medium leading-[10.40px]">(₦10,000.00)</div>
      </div>

      <div class={`${
      toggleSideBar
      ? "lg:gap-[360px]"
      : "lg:gap-[445px]"}
    lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] lg:h-[101px] lg:pl-[26px]
   lg:pr-1  w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.66px] bg-white justify-between
   md:justify-between lg:justify-start items-center inline-flex `}>
      
          <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[11px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[8px] font-medium whitespace-nowrap leading-[10.40px]">SMILE NIGHT</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium leading-[10.40px]">100GB</div>
          <div class="lg:w-[100px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[12px] md:leading-3 w-[60.33px] text-black text-[8px] font-medium leading-[10.40px]">(₦10,000.00)</div>
      </div>

      <div class={`${
      toggleSideBar
      ? "lg:gap-[360px]"
      : "lg:gap-[445px]"}
    lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] lg:h-[101px] lg:pl-[26px]
   lg:pr-1  w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.66px] bg-white justify-between
   md:justify-between lg:justify-start items-center inline-flex `}>
      
          <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[11px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[8px] font-medium whitespace-nowrap leading-[10.40px]">SMILEVOICE ONLY</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium leading-[10.40px]">100GB</div>
          <div class="lg:w-[100px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[12px] md:leading-3 w-[60.33px] text-black text-[8px] font-medium leading-[10.40px]">(₦10,000.00)</div>
      </div>

      <div class={`${
      toggleSideBar
      ? "lg:gap-[360px]"
      : "lg:gap-[445px]"}
    lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] lg:h-[101px] lg:pl-[26px]
   lg:pr-1  w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.66px] bg-white justify-between
   md:justify-between lg:justify-start items-center inline-flex `}>
      
          <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[11px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[8px] font-medium whitespace-nowrap leading-[10.40px]">SMILE FREEDOM</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium leading-[10.40px]">100GB</div>
          <div class="lg:w-[100px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[12px] md:leading-3 w-[60.33px] text-black text-[8px] font-medium leading-[10.40px]">(₦10,000.00)</div>
      </div>

      <div class={`${
      toggleSideBar
      ? "lg:gap-[360px]"
      : "lg:gap-[445px]"}
    lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] lg:h-[101px] lg:pl-[26px]
   lg:pr-1  w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.66px] bg-white justify-between
   md:justify-between lg:justify-start items-center inline-flex `}>
      
          <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[11px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[8px] font-medium whitespace-nowrap leading-[10.40px]">SPECTRANET DATA</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium leading-[10.40px]">100GB</div>
          <div class="lg:w-[100px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[12px] md:leading-3 w-[60.33px] text-black text-[8px] font-medium leading-[10.40px]">(₦10,000.00)</div>
      </div>

      <div class={`${
      toggleSideBar
      ? "lg:gap-[360px]"
      : "lg:gap-[445px]"}
    lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[2.29px] lg:h-[101px] lg:pl-[26px]
   lg:pr-1  w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.66px] bg-white justify-between
   md:justify-between lg:justify-start items-center inline-flex `}>
      
          <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[11px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[8px] font-medium leading-[10.40px]">INTERNATIONAL<br /> DATA</div>
          <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[12px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium leading-[10.40px]">100GB</div>
          <div class="lg:w-[100px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[12px] md:leading-3 w-[60.33px] text-black text-[8px] font-medium leading-[10.40px]">(₦10,000.00)</div>
      </div>


      
      <footer className="flex justify-center  text-center  gap-[20px] mt-[190px] mb-[30px]
       md:mt-[200px] lg:mb-[30px] lg:mt-[150px]">
              <p className="text-[8px] md:text-[12px] lg:text-[12px]  font-[500] leading-[9.1px] mt-[5px] lg:mt-[13px]">
                You need help?
              </p>
  
              <Link to="/ContactUs">
                <div
                  className={`${
                    isDarkMode ? "border " : "bg-[#04177f]"
                  } text-[8px] p-1 text-white rounded-[8px] lg:w-[100px] w-[70px] lg:text-[12px]`}
                >
                  Contact Us
                </div>
              </Link>
            </footer>
            </div>
  
  


</div>

)}



{/* bills payment dropdown */}
{isOpen4 && (

<div className=''>
<div
className={`${styles.viewTransact} ${
  isDarkMode ? "bg-black border" : "bg-white"
}`}
>


<div className="flex  justify-start items-center lg:h-[1030px] md:h-[800px] h-[580px] mb-5 border-b-[1.2px]
 lg:w-full relative bg-white  md:mt-[-670px]  lg:mt-[-968px] mt-[-492px] flex-col">
<div className={`${  
  toggleSideBar
  ? "lg:gap-[360px]"
  : "lg:gap-[445px]"}
lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[9.29px]  lg:h-[101px] 
lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.67px] bg-white justify-between md:justify-between
 lg:justify-start 
items-center inline-flex`}>
    
        <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[11px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[8px] font-medium leading-[10.40px]">WAEC PIN</div>
        <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[11px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium leading-[10.40px]">100</div>
        <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[11px] md:leading-3 lg:leading-tight w-[60.33px] text-black text-[8px] font-medium leading-[10.40px]">(₦10,000.00)</div>
    
</div>
<div class={`${
    toggleSideBar
    ? "lg:gap-[360px]"
    : "lg:gap-[445px]"}
  lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[9.29px] lg:h-[101px]
 lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.66px] bg-white 
 justify-between md:justify-between lg:justify-start  items-center inline-flex`}>
    
        <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[11px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[8px] font-medium leading-[10.40px]">NECO PIN</div>
        <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[11px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium leading-[10.40px]">100</div>
        <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[11px] md:leading-3 lg:leading-tight w-[60.33px] text-black text-[8px] font-medium leading-[10.40px]">(₦10,000.00)</div>
    
</div>
<div class={`${
    toggleSideBar
    ? "lg:gap-[360px]"
    : "lg:gap-[445px]"}
  lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[9.29px]
 lg:h-[101px] lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px]
  pt-3 pb-[11.67px] bg-white justify-between md:justify-between lg:justify-start  items-center inline-flex`}>
    
        <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[11px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[8px] font-medium  leading-[10.40px]">JAMB PIN</div>
        <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[11px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium  leading-[10.40px]">100</div>
        <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[11px] md:leading-3 lg:leading-tight w-[60.33px] text-black text-[8px] font-medium  leading-[10.40px]">(₦10,000.00)</div>
    </div>

<div class={`${
    toggleSideBar
    ? "lg:gap-[360px]"
    : "lg:gap-[445px]"}
  lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[9.29px]
 lg:h-[101px] lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px]
  pt-3 pb-[11.67px] bg-white justify-between md:justify-between lg:justify-start  items-center inline-flex`}>
    
        <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[11px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[8px] font-medium  leading-[10.40px]">NABTEB PIN</div>
        <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[11px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium  leading-[10.40px]">100</div>
        <div class="lg:w-[100px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[11px] md:leading-3 w-[60.33px] text-black text-[8px] font-medium  leading-[10.40px]">(₦10,000.00)</div>
    
</div>
<div class={`${
    toggleSideBar
    ? "lg:gap-[360px]"
    : "lg:gap-[445px]"}
  lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[9.29px] lg:h-[101px]
 lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-2 pb-[7.66px] bg-white
  justify-between md:justify-between lg:justify-start  items-center inline-flex`}>
    
        <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[11px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[7px] font-medium  leading-[9.10px]">GOTV SUBSCRIPTION</div>
        <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[11px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium  leading-[10.40px]">100</div>
        <div class="lg:w-[100px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[11px] md:leading-3 w-[60.33px] text-black text-[8px] font-medium  leading-[10.40px]">(₦10,000.00)</div>
    
</div>
<div class={`${
    toggleSideBar
    ? "lg:gap-[360px]"
    : "lg:gap-[445px]"}
  lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[9.29px] lg:h-[101px]
 lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] lg:justify-start  pr-[1.33px] pt-2 pb-[7.67px] bg-white
  justify-between md:justify-between items-center inline-flex`}>
    
        <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[11px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[7px] font-medium leading-[9.10px]">DSTV SUBSCRIPTION</div>
        <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[11px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium leading-[10.40px]">100</div>
        <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[11px] md:leading-3 lg:leading-tight w-[60.33px] text-black text-[8px] font-medium leading-[10.40px]">(₦10,000.00)</div>
    
</div>
<div class={`${
    toggleSideBar
    ? "lg:gap-[360px]"
    : "lg:gap-[445px]"}
  lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[9.29px] lg:h-[101px] 
lg:pl-[26px] lg:pr-1 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-2 pb-[7.67px] bg-white
 justify-between md:justify-between items-center lg:justify-start  inline-flex`}>
    
        <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[11px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[7px] font-medium  leading-[9.10px]">STARTIME SUBSCRIPTION</div>
        <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[11px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium  leading-[10.40px]">100</div>
        <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[11px] md:leading-3 lg:leading-tight w-[60.33px] text-black text-[8px] font-medium  leading-[10.40px]">(₦10,000.00)</div>
    
</div>
<div class={`${
    toggleSideBar
    ? "lg:gap-[360px]"
    : "lg:gap-[445px]"}
  lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[9.29px] lg:h-[101px]
 lg:pl-[26px] lg:pr-1  w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-2 pb-[7.67px] bg-white
  justify-between md:justify-between lg:justify-start  items-center inline-flex`}>
    
        <div class="lg:w-[100px] lg:text-base lg:leading-tight md:w-[96.82px]  md:text-[11px] md:leading-3 w-[56.33px] text-black text-[7px] font-medium leading-[9.10px]">SHOWMAX SUBSCRIPTION</div>
        <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[11px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium leading-[10.40px]">100</div>
        <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[11px] md:leading-3 lg:leading-tight w-[60.33px] text-black text-[8px] font-medium leading-[10.40px]">(₦10,000.00)</div>
    
</div>
<div class={`${
    toggleSideBar
    ? "lg:gap-[360px]"
    : "lg:gap-[445px]"}
  lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[9.29px] lg:h-[101px] lg:pl-[26px]
 lg:pr-1  w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-[7px] pb-[6.67px] bg-white justify-between
 md:justify-between lg:justify-start  items-center inline-flex`}>
    
        <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[11px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[8px] font-medium leading-[10.40px]">ELECTRICITY BILLS</div>
        <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[11px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium leading-[10.40px]">100</div>
        <div class="lg:w-[100px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[11px] md:leading-3 w-[60.33px] text-black text-[8px] font-medium leading-[10.40px]">(₦10,000.00)</div>
    
</div>
<div class={`${
    toggleSideBar
    ? "lg:gap-[360px]"
    : "lg:gap-[445px]"}
  lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[9.29px] lg:h-[101px] lg:pl-[26px]
 lg:pr-1  w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] pt-3 pb-[11.66px] bg-white justify-between
 md:justify-between lg:justify-start  items-center inline-flex `}>
    
        <div class="lg:w-[100px] lg:text-base md:w-[96.82px]  md:text-[11px] md:leading-3 lg:leading-tight w-[56.33px] text-black text-[8px] font-medium leading-[10.40px]">BULK SMS</div>
        <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[11px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium leading-[10.40px]">100</div>
        <div class="lg:w-[100px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[11px] md:leading-3 w-[60.33px] text-black text-[8px] font-medium leading-[10.40px]">(₦10,000.00)</div>
    </div>

<div class={`${
    toggleSideBar
    ? "lg:gap-[360px]"
    : "lg:gap-[445px]"}
  lg:w-full md:w-full md:h-[57.86px] md:pl-[14.90px] md:pr-[9.29px] lg:h-[101px] lg:pl-[26px] lg:pr-1
 w-[312px] h-[33.67px] pl-[8.67px] pr-[1.33px] lg:justify-start  pt-2 pb-[7.67px] bg-white
  justify-between md:justify-between items-center inline-flex`}>
    
        <div class="lg:w-[100px] lg:text-base lg:leading-tight md:w-[96.82px]  md:text-[11px] md:leading-3 w-[56.33px] text-black text-[7px] font-medium leading-[9.10px]">RECHARGE CARD PRINTING</div>
        <div class="lg:w-[100px] lg:text-base md:w-[91.67px]  md:text-[11px] md:leading-3 lg:leading-tight w-[53.33px] text-black text-[8px] font-medium leading-[10.40px]">100</div>
        <div class="lg:w-[100px] lg:text-base lg:leading-tight md:w-[91.67px]  md:text-[11px] md:leading-3 w-[60.33px] text-black text-[8px] font-medium leading-[10.40px]">(₦10,000.00)</div>
    </div>


    <footer className="flex justify-center  text-center gap-[20px] mt-[160px] mb-[20px]
     md:mt-[200px] lg:mb-[30px] lg:mt-[200px]">
            <p className="text-[8px] md:text-[12px] lg:text-[12px]  font-[500] leading-[9.1px] mt-[5px] lg:mt-[13px]">
              You need help?
            </p>

            <Link to="/ContactUs">
              <div
                className={`${
                  isDarkMode ? "border " : "bg-[#04177f]"
                } text-[8px] p-1 text-white rounded-[8px] lg:w-[100px] w-[70px] lg:text-[12px]`}
              >
                Contact Us
              </div>
            </Link>
          </footer>
          </div>
</div>
</div>
)}
{loading && (
  <Modal>
  <Loader/>
  </Modal>

)}
{sessionModal && (
  <HandleUserSession/>
)}
  </div>

        </>
        </DashBoardLayout>
        )
        }

//                 {isOpen1 && (
//   <div className="flex absolute  top-[100%] cursor-pointer lg:h-[300px]
//     md:h-[150px] h-[200px] 
//      flex-col">
//     <div class="w-44 h-[29px] md:w-[200px] lg:w-[230px] md:h-[35px] lg:h-[40px]  bg-white shadow">
        
//         <div  onClick={() => {
            
//     setIsOpen2((prev) => !prev);
//     setIsOpen3(false); setIsOpen4(false); setIsOpen1(false);
//   handleClick('Airtime Top-up'); }}
//         className="w-[199.37px] ml-[5px] md:w-[199.37px] lg:w-[196px] justify-start items-center inline-flex">
//             <div className="w-[186.20px] text-neutral-500 justify-start md:w-[131px] 
//    items-center text-[9px] md:text-[12px] lg:text-[16px] font-medium  md:leading-3 leading-[10.48px] flex">Airtime Top-up</div>
//         </div>
//     </div>
//     <hr class="bg-slate-500 h-[1px] w-[176px] Lg:w-[198px]"></hr>
//     <div class="w-44 h-[29px] md:w-[200px] md:h-[35px] lg:w-[230px] lg:h-[40px] bg-white shadow">
        
//         <div  onClick={() => {
//     setIsOpen3((prev) => !prev);
   
//     setIsOpen2(false); setIsOpen4(false); setIsOpen1(false);
// handleClick('Data Top-up'); }} 
//          class="w-[199.37px] ml-[5px] md:w-[199.37px]  justify-start items-center inline-flex">
//             <p className="w-[186.20px] text-neutral-500 text-[9px] md:text-[12px]
//  md:w-[131px] items-center lg:text-[16px] font-medium 
//   md:leading-3 leading-[10.48px]">Data Top-up</p>
//         </div>
//     </div>
    
//     <div class="w-44 h-[29px] md:w-[200px] lg:h-[40px] lg:w-[230px] md:h-[35px] bg-white shadow">
        
//         <div onClick={() => {
//     setIsOpen4((prev) => !prev);
//     setIsOpen3(false); setIsOpen2(false); setIsOpen1(false);
//                 handleClick('Bills Payment'); }} 
//         className="w-[199.37px] ml-[5px] md:w-[199.37px]  justify-start items-center inline-flex">
//             <div  className="w-[131.60px] text-neutral-500 text-[9px] md:text-[12px] md:w-[131px] items-center lg:text-[16px] font-medium  md:leading-3 leading-[10.48px]">Bills Payments</div>
//         </div>
//     </div>
  
//   </div>
// )}

