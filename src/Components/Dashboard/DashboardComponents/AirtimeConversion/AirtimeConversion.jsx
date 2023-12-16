import React from 'react';
import { DashBoardLayout } from '../../Layout/DashBoardLayout';
import { useState } from 'react'
import { Link } from 'react-router-dom'
import arrowdown from "../AirtimeConversion/images/arrow-down.png"
import { ContextProvider } from '../../../Context';
import { useContext } from "react";
import cloud from "../AirtimeConversion/images/cloud storage convert (1).png";
import WalletModal from '../../../Wallet/WalletModal';
import message from "../AirtimeConversion/images/message-question.png";
import call from "../AirtimeConversion/images/call.png";
import flag from "../AirtimeConversion/images/Country Flags (1).png"
import flow from "../AirtimeConversion/images/Frame (5).png"
import { Modal } from "../../../Screens/Modal/Modal";
import flow1 from "../AirtimeConversion/images/convert-card.png"
import clock from "../AirtimeConversion/images/clock.png"
import Joi from "joi";
import arrow from "../AirtimeConversion/images/arrow.png"
import boy from "../AirtimeConversion/images/Digital banking and online currency exchange.png"
import styles from "../TransferComponent/transfer.module.css";
// import mtn from "../AirtimeConversion/images/mtn.svg"
import { AirtimeSelector } from './airtimeselector';
// import { image } from 'html2canvas/dist/types/css/types/image';

const AirtimeConversion = () => {
  const [activeTab, setActiveTab] = useState('tab_1');
  const active = 'md:text-[12px] md:leading-[18px] lg:text-[20px] lg:leading-[30px] lg:w-[248px] md:w-[145.5px] md:h-[23px] lg:h-[50px] md:flex md:justify-center md:items-center md:flex-none bg-[#E2F3FF] flex-1 text-[8px] leading-[12px] text-center py-1 border-b-2 border-primary rounded-[3px]';
  const inactive = 'md:text-[12px] md:leading-[18px] lg:text-[20px] lg:leading-[30px] lg:w-[248px] md:w-[145.5px] md:h-[23px] lg:h-[50px] md:flex md:justify-center md:items-center md:flex-none flex-1 text-[8px] leading-[12px] text-center py-1'
  const [showList, setShowList] = useState(false);
  const [networkImage, setNetworkImage] = useState('');
  const [selected, setSelected] = useState(false);
  const [networkName, setNetworkName] = useState('');
  const [Pop, setPop] = useState('');
  // const [showListR, setShowListR] = useState(false);
 const [ussd, setUssd] = useState('');

 const handleussdPop = () => {
   setUssd(true);
 }
  const handlePop = () =>{
   setPop(true);
  }
  const handleClear =() =>{
    setPop(false);
    setRInputValue(false);
    setRResultValue(false);
    setUssd(false);
  }

  
  const [proceed, setProceed] = useState(false);
  
  const networkList = [
    {
        id:1,
        name:'MTN',
        image: require('../AirtimeConversion/images/mtn.svg').default,
        discount: 3,
    },
    {
        id:2,
        name:'AIRTEL',
        image: require('../AirtimeConversion/images/Airtel_logo-01 2 (2).png'),
        discount: 4,
    },
    {
        id:3,
        name:'GLO',
        image: require('../AirtimeConversion/images/640px-Glo_button 1 (1).png'),
        discount: 3,
    },
    {
        id:4,
        name:'9MOBILE',
        image: require('../AirtimeConversion/images/9mobile.svg').default,
        discount: 3,
    }
];

  const handleTab1 =()=> {
    setActiveTab('tab_1')
}

const handleTab2 =()=> {
    setActiveTab('tab_2')
}
const handleShowList =()=> {
  setShowList(!showList);
  setNetworkName('');
  setNetworkImage('');
  setSelected(false);
}
// const [selectedCountry, setSelectedCountry] = useState("");

// const handleCountrySelect = (country, id) => {
//   setSelectedCountry(country);
// };
const [selectedCountryTwo, setSelectedCountryTwo] = useState("");

const handleCountrySelectTwo = (country, id) => {
  setSelectedCountryTwo(country);
};
const handleSelectNetwork =(name, image, val)=> {
  setNetworkName(name);
  setNetworkImage(image);
  setShowList(false);
  setSelected(true);
}
// const handleShowListR =()=> {
//   setShowListR(!showList);
//   setNetworkName('');
//   setNetworkImage('');
//   setSelected(false);
// }

const [RInputValue, setRInputValue ] = useState('');
const [ResultValue, setRResultValue ] = useState('');
const handleRealInputChange = (event) => {
  const value = event.target.value;

  // Update the input value
  setRInputValue(value);

  // Calculate 90% of the input value and update the result value
  const ninetyPercent = (parseFloat(value) * 0.9).toFixed(2);
  setRResultValue(ninetyPercent);
};

const Network =({name, image, onClick})=> {
  return (
    <li className="pl-[4px] lg:pl-[14px] lg:pr-[16px] border-b flex items-center py-[3px] gap-1 last:border-b-0 md:py-[6px] cursor-pointer lg:gap-2 lg:h-[45px]" onClick={onClick}>
      <div className="rounded-full w-[12.02px] h-[12.02px] flex items-center justify-center text-[6px] overflow-hidden md:w-[12.02px] lg:w-[25px] md:h-[12.02px] lg:h-[25px]">
        <img src={image} alt="" className='w-[25px] object-cover'/>
      </div> 
      <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">{name}</h2>
    </li>
  )
}

const [errors, setErrors] = useState({});
const handlePhoneNumber = (event) => {
  const newValue = event.target.value;
  setRecipientNumberA(newValue);
   
};


const handleProceed = () => {
  
  

  const { error } = schema.validate({
    recipientNumberA,
    inputValue,
    
    
  });

  if (error) {
    setErrors(
      error.details.reduce((acc, curr) => {
        acc[curr.path[0]] = curr.message;
        return acc;
      }, {})
    );
  } else {
    setProceed(true);
    setErrors({});
    
  }
};

const schema = Joi.object({

  recipientNumberA: Joi.string()
    .pattern(new RegExp(/^\d{11,}/))
    .required()
    .messages({
      "string.pattern.base": "Phone number should be 11 digits ",
    }),
   inputValue: Joi.string()
    .pattern(new RegExp(/^\d{3,}/))
    .required()
    .messages({
      "string.pattern.base": "Minimum amount to convert is 1000 ",
    }),
    
});

const { 
  toggleSideBar,
  setInputValue, 
  inputValue, 
  resultValue,
  setResultValue,
  recipientNumberA, 
  // selectedOne,
  setRecipientNumberA
} = useContext(ContextProvider);

  // Function to handle input changes
  const handleInputChange = (event) => {
    const value = event.target.value;

    // Update the input value
    setInputValue(value);

    // Calculate 90% of the input value and update the result value
    const ninetyPercent = (parseFloat(value) * 0.9).toFixed(2);
    setResultValue(ninetyPercent);
  };


    const { isDarkMode } = useContext(ContextProvider);
    return ( 
        <DashBoardLayout>
            <div className={` ${
          isDarkMode
            ? "bg-[#000] text-[#fff] border-[#fff]"
            : "bg-[#ffffff] text-[#000] "
        }  flex flex-col justify-between w-full h-full`}>

            <div>

            <div className="flex flex-row w-full pt-[20px]  h-[90px] md:h-[112.29px] lg:h-[196px] lg:px-[50px]  px-[16px] rounded-lg md:rounded-[11.5px] lg:rounded-[20px] justify-between  py-2 bg-gradient-to-r from-[#FFBE6E] to-[#FFF741]">
          <div className="flex flex-col gap-2  ">
            <div className="text-[8px] font-[600]  md:text-[13.75px] md:leading-[20.63px] lg:pt-[25px] lg:text-[24px] lg:leading-[36px] text-[#000000] leading-[12px]">
            CONVERT AIRTIME TO REAL MONEY WITH AREMXYPLUG. <br /> 
            </div>
            <div className="text-[6.67px] font-[400] md:text-[11.46px] md:leading-[14.9px] lg:text-[20px] lg:leading-[26px] text-[#000000] leading-[8.67px]">
            Convert your bulk airtime to real money, withdrawn to your <br />
             bank account instantly without any hassle or hidden fee.
            </div>
          </div>
          <div>
            <img
              className="w-[88.38px] md:w-[151.9px] md:h-[85.9px] lg:w-[265px] lg:h-[150px]"
              src={cloud}
              alt=""
            />{" "}
          </div>
        </div>
        <div className='my-[20px] lg:my-[80px] md:my-[40px] flex gap-1'>
                    <h2 className='text-[8.62px] lg:text-[15px]'>Select Airtime Type</h2>
                    <div className='lg:w-6 lg:h-6 w-4 h-4'>
                        <img src='./Images/wallet/arrow-square-right.svg' alt="" className='h-full'/>
                    </div>
        </div>
        <ul className='flex items-center w-full mb-0 border-b md:mb-8'>
                    <li className={activeTab === 'tab_1' ? active : inactive} onClick={handleTab1}>Local Airtime</li>
                    <li className={activeTab === 'tab_2' ? active : inactive} onClick={handleTab2}>International Airtime</li>
        </ul>

        <div className=''>
                    
                        <div className='flex flex-col gap-[0px]'>
                          <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-0'>
                                     <div onClick={handlePop} className="font-[500] text-[10px] py-1 mt-[30px] md:mt-[30px] lg:mt-[50px] text-center px-4 md:text-[9.17px] lg:text-[16px] leading-[20.8px] lg:px-6 lg:w-fit  md:flex md:flex-row md:w-fit md:py-1 lg:py-3 rounded-sm md:rounded-sm lg:rounded-md md:leading-[11.5px] bg-primary text-white">
                                     Real-time Airtime Conversion Check Rate
                                     </div>
        <div
         onClick={handleussdPop}
          className="font-[500] text-[10px] py-1 mt-[30px] md:mt-[30px] lg:mt-[50px] text-center px-4 md:text-[9.17px] lg:text-[16px] leading-[20.8px] lg:px-6 lg:w-fit  md:flex md:flex-row md:w-fit md:py-1 lg:py-3 rounded-sm md:rounded-sm lg:rounded-md md:leading-[11.5px] bg-primary text-white"
        >
          Airtime Transfer USSD Codes
        </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-[20px]'>
        <div>
                    <div>
                        <h2 className='lg:text-[16px] lg:leading-[24px] font-bold mb-1 text-[8px] leading-[12px]'>Select Network</h2>
                        <div onClick={handleShowList} className="border w-full h-[30px] rounded-[4px] pl-[4px] pr-[8px] lg:h-[51px] md:rounded-[6px] lg:rounded-[10px] lg:pl-[14px] lg:pr-[16px] flex items-center justify-between">
                            { selected ? 
                                <li className="flex items-center py-[3px] gap-1 md:py-[6px] cursor-pointer lg:gap-2 lg:h-[45px]">
                                    <div className="rounded-full w-[12.02px] h-[12.02px] flex items-center justify-center text-[6px] overflow-hidden md:w-[12.02px] lg:w-[25px] md:h-[12.02px] lg:h-[25px]">
                                        { networkImage && <img src={networkImage} alt="" className='w-[20px] object-cover'/>}
                                    </div> 
                                    <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">{networkName}</h2>
                                </li>
                            : 
                                <h2 className='lg:text-[16px]  lg:leading-[24px] text-[#7C7C7C] text-[8px] leading-[12px]'>Select Network</h2>
                            }
                            <button className='lg:w-6 lg:h-6 w-[11px] h-[11px]' onClick={handleShowList}>
                                <img src={arrow} alt="" className='w-full h-full'/>
                            </button>
                        </div>
                    </div>
                    { showList && 
                        <div className='border md:rounded-[10px] lg:mt-2 mt-1 rounded-[4px]'>
                            {networkList.map((item) => (
                                <Network key={item.id} image={item.image} name={item.name} onClick={()=>handleSelectNetwork(item.name, item.image, item.discount)}/>
                            ))}
                        </div> 
                    }
        </div>
        <div>
                    
                    <div className='lg:text-[16px] lg:leading-[24px] items-center flex gap-2 mb-1 text-[8px] leading-[12px]' >
                      <div className='font-bold'>Phone Number </div>
                      <div> <img src={message} alt="" /></div>
                    </div>
                    <div className="border w-full h-[30px] rounded-[4px] pr-[8px] pl-[4px] lg:h-[51px] md:rounded-[6px] lg:rounded-[10px] lg:pl-[14px] lg:pr-[16px] flex items-center justify-between">
                        <input type='text' className='lg:text-[16px] lg:leading-[24px] grow outline-none text-[8px] leading-[12px]' placeholder='Add recipient phone number' onChange={handlePhoneNumber} value={recipientNumberA}/>
                        <div className='lg:w-6 lg:h-6 w-[11px] h-[11px]'>
                            <img src={call} alt="" className='w-full h-full'/>
                        </div>
                        
                    </div>
                    {errors.recipientNumberA && (
              <div className="text-[12px] text-red-500 italic lg:text-[14px]">
                {errors.recipientNumberA}
              </div>
            )}
                </div>
        </div>
        <div className="mt-[20px] md:mt-[30px] lg:mt-[50px] flex flex-row ">
          <div className="border-[1px] w-[85%] md:w-[92%] h-[30px] md:h-[40px] lg:h-[60px] px-2 py-0 md:pt-1 lg:pt-4 border-slate-200">
            <input
              type="number"
              value={inputValue}
              onChange={handleInputChange}
              className="w-[100%] outline-none text-[8px] lg:text-[16px] leading-[20.8px  font-[600]  text-[#000]"
              placeholder="Amount to Convert"
            />{" "}
            
          </div>
          <div className="h-[30px] md:h-[40px] lg:h-[60px]  w-[15%] md:w-[8%] gap-2 lg:gap-4 flex flex-row pl-[17px] lg:pl-[35px] py-2 bg-primary items-center   ">
            <div>
              {" "}
              <img
                src={flow}
                className=" w-[11px] h-[11px] md:w-[13.75px]  md:h-[13.75px] lg:w-[24px] lg:h-[24px]"
                alt=""
              />{" "}
            </div>
           
          </div>
        </div>
        <div className='flex flex-col items-center'>
        <div className="flex flex-row items-center border-[1px] border-slate-200 px-1 py-0 rounded-sm justify-center mt-[15px] md:mt-[15px] lg:mt-[20px]  text-[#7C7C7C] lg:text-[16px] leading-[20.8px] gap-2 lg:gap-4 font-[500] text-[7px] md:text-[9.2px] ">
          <div className="">
            Minimum 1000
          </div>
          <div> 
          { networkImage && <img src={networkImage} alt="" className='w-[20px]  object-cover'/>}
          </div>
        </div>
        </div>
        <div className="mt-[15px] flex flex-row lg:mt-[20px]">
          <div className="border-[1px] w-[85%] md:w-[92%]  text-[8px] lg:text-[16px] h-[30px] md:h-[40px] font-[400] text-[#7C7C7C] lg:h-[50px] px-2 py-0 pt-2 md:pt-3 lg:pt-4 border-slate-200">
          <input
              type="number"
              value={resultValue}
              readOnly          
              className="w-[100%] outline-none text-[8px] lg:text-[16px] leading-[20.8px  font-[600]  text-[#000]"
              placeholder="Amount to Receive"
            />{" "}
            {/* {!resultValue ? <p>Amount to Receive</p> : <div>&#8358;{}</div>} */}
          </div>
          <div className="h-[30px] md:h-[40px] lg:h-[50px] w-[15%] md:w-[8%] gap-2 lg:gap-4 flex flex-row px-3 py-2 bg-primary items-center   ">
            <div>
              {" "}
              <img
                src={flag}
                className="md:w-[13.75px] md:h-[13.75px] lg:w-[24px] lg:h-[24px]"
                alt="flag"
              />{" "}
            </div>
            <div>
              {" "}
              <img
                src={arrowdown}
                className="md:w-[13.75px] md:h-[13.75px] lg:w-[24px] lg:h-[24px]"
                alt="arrow"
              />{" "}
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-2 mt-3 text-[#7C7C7C] items-center text-[8px] lg:text-[16px]'>
          <div className='flex items-center gap-2 '>
            <div>{ networkImage && <img src={networkImage} alt="" className='w-[20px] object-cover'/>}</div>
            <div> ₦1,000 MTN ~ 90%</div>
            <div className='flex items-center'> 
              <div><img src={flow1} alt="" /></div>
              <div>Transaction Fee - ₦0.00 </div>
            </div>
          </div>
          <div className='flex gap-1 '>
            <div><img src={clock} className='w-[8px] h-[8px] lg:w-[15px] lg:h-[15px]' alt="" /></div>
            <div className='leading-[8px]'>Completion Time 0- 2 hr, 09:00am - 10:00pm UTC+1.</div>
          </div>
          {errors.inputValue && (
              <div className="text-[10px] text-red-500 italic lg:text-[14px]">
                {errors.inputValue}
              </div>
            )}

        </div>
        
        <div className="flex flex-col justify-center md:items-center">
          <div
            onClick ={ () => {
              handleProceed()
            } }
            className={` ${
              !inputValue.length || resultValue.length < 4 ? "bg-[#0008]" : "bg-[#04177f]"
             
            } text-[12px] mt-[50px] md:mt-[40px] md:w-fit lg:px-12 lg:text-[16px] lg:px md:py-1 md:rounded-md md:px-6   py-3 rounded-md font-[600] text-center text-white
           `
          }
          >
            Proceed
          </div>
        </div>
       

                    </div> 
                        <div></div>
                    
                    { activeTab === 'tab_2' && 
                    <WalletModal>
                    <div className="text-center flex justify-center item-center md:mt-[-20px] lg:mt-[15px] 2xl:mt-[-15px]">
                      <div
                        className={`${isDarkMode ? "bg-[#000]" : "bg-[]"}
                          flex flex-col justify-center z-[100] lg:ml-[10px] md:w-full`}
                      >
                        <div>
                          <p className="text-[10px] text-center pt-[5%] font-extrabold md:text-[16px] lg:text-[25px] lg:pt-[3%]">
                            International Data
                          </p>
                          <p className="text-[10px] md:text-[16px] font-[600] text-[#04177F] lg:text-[16px]">
                            This Feature is Currently Not Available.
                          </p>
                        </div>
                        <img
                          src="./Images/airtimeTopUp/international-airtime.png"
                          alt=""
                          className="img mx-auto mt-[30px] md:mt-[15%] md:w-[200px] md:mx-[100px] w-[143px] h-[67px] lg:w-[300px] lg:h-[200px] lg:mx-[150px] lg:mt-[10%] 2xl:mt-[10%] 2xl:mx-[180px]"
                        />
                      </div>
                    </div>
                    <div className="mt-[40px] flex flex-col gap-[5px] pb-[5%] 2xl:mt-[1%] lg:mt-[1%] md:mt-[5%] md:pr-[10px]">
                      <p className="text-[8px] font-extrabold text-end float-right ml-[60%] md:ml-[70%] md:text-[12px] mt-[10px] lg:text-[13px] 2xl:text-[15px]">
                        Coming Soon...
                      </p>
                      <button
                        className={` ${
                          isDarkMode ? "border" : "bg-[#04177f] "
                        } cursor-pointer text-white text-[10px] h-[40px] rounded-[5px] md:rounded-[10px] flex items-center justify-center md:mx-auto md:w-[25%] md:h-[30px] md:text-[14px] lg:my-[3%] lg:h-[40px] lg:text-[20px] lg:w-[25%] lg:mx-auto`}
                        onClick={handleTab1}
                        
                      >
                        Okay
                      </button>
                    </div>
                  </WalletModal>
                    //     <WalletModal>
                    //     <div className='rounded-[8px] px-3 relative lg:rounded-[11.5px] md:rounded-[6px] flex md:mt-8 flex-col ' >
                    //         <h2 className='text-center text-[10px] leading-[15px] mb-[10px] md:text-[12px] md:leading-[18px] lg:text-base lg:leading-[24px]'>International Airtime.</h2>
                    //         <h2 className='text-center text-[10px] leading-[15px] mb-[10px] font-semibold md:text-[12px] md:leading-[18px] lg:text-base lg:leading-[24px] text-primary'>This Feature is Currently Not Available.</h2>
                    //         <div className='flex justify-center items-center mt-[5%] lg:mt-[5%]'>
                    //             <div className='w-[170px] lg:w-[270px] lg:h-[220px] mb-[5%] md:mb-0'>
                    //                 <img src="./Images/airtimeTopUp/international-airtime.png" alt="" className='w-full'/>
                    //             </div>
                    //         </div>
                    //         <div className='w-[100%] mb-5 md:flex md:flex-row-reverse gap-[5px] bottom-[0px]   lg:w-[93%] md:mt-12  flex-col ' >
                    //             <h2 className='text-[8px] font-extrabold md:text-[12px] lg:text-[13px] w-full text-right md:mb-[-20px] lg:mb-[-80px]'>Coming soon...</h2>
                    //             <button className='w-full text-[10px]  leading-[15px] bg-primary px-[28.6px] py-[10px] text-white rounded-[7px] md:text-[12px] md:leading-[18px] md:w-fit lg:text-base lg:leading-[24px]' onClick={handleTab1}>Okay</button>
                    //         </div>
                            
                    //     </div>
                    // </WalletModal>
                    }
                    
                   
                </div>

            </div>

           
            <div>
            <div className="flex flex-row items-center justify-center md:mt-[750px] mt-[190px] pb-[10%] lg:mt-[980px] gap-2">
          <div className="text-[8px] lg:text-[12px] font-[600] text-black">
            You need help?
          </div>
          <Link to="/ContactUs">
            <div className="bg-primary text-white lg:text-[8px] text-[7px] px-2 py-1 leading-[10.5px] rounded-lg text-center">
              Contact us
            </div>
          </Link>
        </div>
            </div>

            </div>
            
            {proceed && (
          <Modal>
            <div  className={`${styles.contactTeam} ${
              toggleSideBar
              ? ""
              : "text-red h-[320px] w-[300px] md:w-[321px] md:h-[300px] lg:w-[562px] lg:h-[420px] bg-white rounded-tl-md rounded-tr-md  flex flex-col items-center gap-4"
              }`}>
               
                  <div className='text-[10px] mt-4 font-[600] md:text-[12px] lg:text-[16px] text-[#000000] '>Airtime Conversion</div>
                  <div className='text-[10px] lg:text-[12px] mt-1 text-[#04177F]'>Note!!!</div>
                  <div className='text-[8px] lg:text-[12px] font-[600] text-center w-[280px] lg:w-[409px] text-[#000000] rounded-md border-[0.5px] border-[
#7C7C7C] bg-[#FFF0BA] py-2 px-3 '>Kindly Contact Airtime Team to Complete Airtime Conversion  Transaction.</div>
                  <div><img src={boy} className='w-[85px] h-[85px] lg:w-[150px] lg:h-[150px]' alt="" /></div>
                  <Link to="/contact-team">
                  <div className='text-white mt-3 bg-primary lg:text-[16px] lg:py-1 w-[250px] md:w-[93px] lg:w-[163px] rounded-md md:py-1 md:rounded-lg md:px-1 py-3 text-center  text-[12px] font-[600]'>Contact Team</div>
                  </Link>
                
                </div>              
          </Modal>
        )}
           
           {Pop && (
        <Modal>
          <div
            className={`${styles.redeemrate} ${
              toggleSideBar
                ? " lg:ml-[20%] lg:w-[40%] "
                : "lg:w-[562px] md:w-[500px]"
            } w-[90%] overflow-auto flex flex-col gap-0`}
          >
            <img
              onClick={handleClear}
                className="absolute right-6 md:right-[23%] lg:right-[35%] w-[18px] h-[18px] my-[1%] md:w-[30px] md:h-[30px] lg:w-[25px] lg:h-[25px]"
              src="/Images/transferImages/close-circle.png"
              alt=""
            />
            <hr className="h-[6px] md: bg-[#04177f] w-full border-none mt-[8%] md:mt-[8%] md:h-[8px] lg:h-[10px] lg:mt-[8%]" />
            <div className="flex flex-col text-center items-center justify-center pt-[30px] md:pt-[30px] lg:pt-[1px]">
              <div className="font-[500] flex items-center justify-center w-[100%] text-center text-[10px] py-1 mt-[30px] md:mt-[30px] lg:mt-[50px]   md:text-[9.17px] lg:text-[16px] leading-[20.8px] lg:px-6 lg:w-fit  md:flex md:flex-row md:w-fit md:py-1 md:px-4 lg:py-3 rounded-sm md:rounded-sm lg:rounded-md md:leading-[11.5px] bg-primary text-white">
                Real-time Airtime Conversion Tracker
              </div>
              <div></div>
            </div>
            <div className="flex flex-col px-3  md:px-6 ">
              <div className=" pt-[30px] md:pt-[70px]">
                <div className="font-bold flex text-[#000] text-[10px] leading-[130%] items-center  gap-[8px]  md:text-[12px] lg:text-[15px]">
                  <p>Amount</p>
                  <img
                    className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                    src="./Images/Dashboardimages/arrowright.png"
                    alt="/"
                  />
                </div>
                <div className="mt-[20px] md:mt-[30px] lg:mt-[10px] flex flex-row ">
                  <div className="border-[1px] w-[85%] md:w-[85%] h-[30px] md:h-[40px] lg:h-[50px] px-2 py-0 md:pt-1 lg:pt-4 border-slate-200">
                    <input
                      type="number"
                      value={RInputValue}
                      onChange={handleRealInputChange}
                      className="w-[100%] outline-none text-[10px] lg:text-[16px] leading-[20.8px  font-[600]  text-[#000]"
                      placeholder="Amount to Convert"
                    />{" "}
                  </div>
                  {/* <div className="h-[30px] md:h-[40px] lg:h-[50px] w-[15%] md:w-[15%] gap-2 lg:gap-4 flex flex-row justify-center px-3 py-2 bg-primary items-center   ">
                    <div>
                    <img className=" h-[15px] w-[15px] md:w-[15px] md:h-[15px] lg:w-[24px] lg:h-[24px] " src={mtn} alt="" />
                    </div>
                    <div onClick={handleShowListR}>
                      {" "}
                      <img
                        src={arrowdown}
                        className=" h-[9px] w-[9px] md:w-[15px] md:h-[15px] lg:w-[24px] lg:h-[24px] "
                        alt=""
                      />{" "}
                      { showListR && 
                        <div className='border md:rounded-[10px] lg:mt-2 mt-1 rounded-[4px]'>
                            {networkList.map((item) => (
                                <Network key={item.id} image={item.image}  onClick={()=>handleSelectNetwork(item.name, item.image, item.discount)}/>
                            ))}
                        </div> 
                    }
                    </div>
                    
                  </div> */}
                  <div className='h-[30px] md:h-[40px] lg:h-[50px]'><AirtimeSelector 
                  onSelectOne={handleCountrySelectTwo}
                  selectedCountryOne={selectedCountryTwo}
                  /></div>
                </div>
                <div className="flex flex-col items-center mt-[20px] md:mt-[20px] lg:mt-[20px] text-[#7C7C7C] lg:text-[16px] leading-[20.8px] gap-2 lg:gap-4 font-[500] text-[10px] md:text-[9.2px] ">
                  <div className="flex flex-row gap-2 items-center border-[1px] py-0 px-8 md:py-2 md:px-2 rounded-md md:rounded-xl border-[#000000] text-[#29B8FC] ">
                    <div>
                    MTN ₦1,000 ~ 90% 
                    </div>
                    <div>
                   
                    </div>
                  </div>
                </div>
                <div className="font-bold flex mt-8 text-[#000] text-[10px] leading-[130%] items-center  gap-[8px]  md:text-[12px] lg:text-[15px]">
                  <p>Receiver</p>
                  <img
                    className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                    src="./Images/Dashboardimages/arrowright.png"
                    alt="/"
                  />
                </div>
                <div className="mt-[7px] flex flex-row lg:mt-[10px]">
                <div className="border-[1px] w-[85%] md:w-[92%]  text-[8px] lg:text-[16px] h-[30px] md:h-[40px] font-[400] text-[#7C7C7C] lg:h-[50px] px-2 py-0 pt-2 md:pt-3 lg:pt-4 border-slate-200">
          <input
              type="number"
              value={ResultValue}
              readOnly          
              className="w-[100%] outline-none text-[8px] lg:text-[16px] leading-[20.8px  font-[600]  text-[#000]"
              placeholder="Amount to Receive"
            />{" "}
            {/* {!resultValue ? <p>Amount to Receive</p> : <div>&#8358;{}</div>} */}
          </div>
                  <div className="h-[30px] md:h-[40px] lg:h-[50px] w-[15%] md:w-[15%] gap-2 lg:gap-4 flex flex-row px-3 py-2 bg-primary items-center   ">
                    <div>
                      {" "}
                      <img
                        src={flag}
                        className=" h-[14px] w-[15px] md:w-[15px] md:h-[15px] lg:w-[24px] lg:h-[24px]"
                        alt="flag"
                      />{" "}
                    </div>
                    <div>
                      {" "}
                      <img
                        src={arrowdown}
                        className=" h-[14px] w-[14px]  md:w-[15px] md:h-[15px] lg:w-[24px] lg:h-[24px]"
                        alt="arrow"
                      />{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <button
                  onClick={handleClear}
                  className={`bg-[#04177f] my-[5%] w-[88%] flex justify-center mt-14 items-center mx-auto cursor-pointer text-[14px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[16px] lg:text-[14px] lg:w-[163px] lg:h-[38px] lg:mt-[30px]`}
                >
                  Okay
                </button>
              </div>
            </div>
          </div>
        </Modal>
      )}

        
{ussd && (
        <Modal>
          <div
            className={`${styles.redeemrate} ${
              toggleSideBar
                ? " lg:ml-[20%] lg:w-[40%] "
                : "lg:w-[562px] md:w-[500px]"
            } w-[90%] overflow-auto flex flex-col gap-0`}
          >
            <img
              onClick={handleClear}
                className="absolute right-6 md:right-[23%] lg:right-[35%] w-[18px] h-[18px] my-[1%] md:w-[30px] md:h-[30px] lg:w-[25px] lg:h-[25px]"
              src="/Images/transferImages/close-circle.png"
              alt=""
            />
            <hr className="h-[6px] bg-[#04177f] w-full border-none mt-[8%] md:mt-[8%] md:h-[8px] lg:h-[10px] lg:mt-[8%]" />
            <div className="flex flex-col text-center items-center justify-center pt-[30px] md:pt-[30px] lg:pt-[1px]">
              <div className="font-[500] flex items-center justify-center w-[100%] text-center text-[10px] py-1 mt-[30px] md:mt-[20px] lg:mt-[50px]   md:text-[12px] lg:text-[16px] leading-[20.8px] lg:px-6 lg:w-fit  md:flex md:flex-row md:w-fit md:py-1 md:px-4 lg:py-3 rounded-sm md:rounded-sm lg:rounded-md md:leading-[11.5px] bg-primary text-white">
              Airtime Transfer USSD Codes
              </div>
              <div></div>
            </div>
            <div className="flex flex-col px-3  md:px-6 ">
              <div className='flex flex-col gap-2 items-center mt-3'>
              <div className='text-[10px] '>Airtime transfer/send ussd codes.</div>
              <div className='text-[10px] font-bold text-primary'>Tap the Dial button to transfer/send airtime:</div>
              </div>
              <div className=' flex flex-col gap-3'>
              <div>
                <button
                  
                  className={`bg-slate-100  w-[88%] flex justify-center mt-5 items-center mx-auto cursor-pointer text-[14px] font-[500] h-[40px] text-[#000000] rounded-[6px] md:rounded-[8px] md:text-[16px] lg:text-[14px]  lg:mt-[30px]`}
                >
                  MTN Airtime Transfer Code - *321*1#
                </button>
              </div>
              <div>
                <button
                  
                  className={`bg-slate-100  w-[88%] flex justify-center  items-center mx-auto cursor-pointer text-[14px] font-[500] h-[40px] text-[#000000] rounded-[6px]  md:rounded-[8px]  lg:text-[14px]  lg:mt-[30px]`}
                >
                  AIRTEL Airtime Transfer Code - *321# 
                </button>
              </div>
              <div>
                <button
                  
                  className={`bg-slate-100  w-[88%] flex justify-center  items-center mx-auto cursor-pointer text-[14px] font-[500] h-[40px] text-[#000000] rounded-[6px]  md:rounded-[8px]  lg:text-[14px]  lg:mt-[30px]`}
                >
                  GLO Airtime Transfer Code - *321# 
                </button>
              </div>
              <div>
                <button
                  
                  className={`bg-slate-100  w-[88%] flex justify-center  items-center mx-auto cursor-pointer text-[12px]  font-[500] h-[40px] text-[#000000] rounded-[6px]  md:rounded-[8px] lg:text-[14px]  lg:mt-[30px]`}
                >
                  9MOBILE Airtime Transfer Code - *321#
                </button>
              </div>
              </div>
              <div>
                <button
                  onClick={handleClear}
                  className={`bg-[#04177f] my-[5%] w-[88%] flex justify-center mt-10 items-center mx-auto md:w-[25%] cursor-pointer text-[14px] font-extrabold h-[40px] text-white rounded-[6px]  md:rounded-[8px]  lg:text-[14px] lg:w-[163px] lg:h-[38px] lg:mt-[30px]`}
                >
                  Okay
                </button>
              </div>
            </div>
          </div>
        </Modal>
      )}
        </DashBoardLayout>
        
     );
}
 
export default AirtimeConversion;