import React from 'react';
import { DashBoardLayout } from '../../Layout/DashBoardLayout';
import { useState } from 'react'
import { Link } from 'react-router-dom'
import arrowdown from "../AirtimeConversion/images/arrow-down.png"
import { ContextProvider } from '../../../Context';
import { useContext } from "react";
import cloud from "../AirtimeConversion/images/cloud storage convert.png";
import WalletModal from '../../../Wallet/WalletModal';
import message from "../AirtimeConversion/images/message-question.png";
import call from "../AirtimeConversion/images/call.png";
import flag from "../AirtimeConversion/images/Country Flags.png"
import flow from "../AirtimeConversion/images/Frame 758532433.png"
import mtn from "../AirtimeConversion/images/mtn.svg"
import flow1 from "../AirtimeConversion/images/convert-card.png"
import clock from "../AirtimeConversion/images/clock.png"
import Joi from "joi";

const AirtimeConversion = () => {
  const [activeTab, setActiveTab] = useState('tab_1');
  const active = 'md:text-[12px] md:leading-[18px] lg:text-[20px] lg:leading-[30px] lg:w-[248px] md:w-[145.5px] md:h-[23px] lg:h-[50px] md:flex md:justify-center md:items-center md:flex-none bg-[#E2F3FF] flex-1 text-[8px] leading-[12px] text-center py-1 border-b-2 border-primary rounded-[3px]';
  const inactive = 'md:text-[12px] md:leading-[18px] lg:text-[20px] lg:leading-[30px] lg:w-[248px] md:w-[145.5px] md:h-[23px] lg:h-[50px] md:flex md:justify-center md:items-center md:flex-none flex-1 text-[8px] leading-[12px] text-center py-1'
  const [showList, setShowList] = useState(false);
  const [networkImage, setNetworkImage] = useState('');
  const [selected, setSelected] = useState(false);
  const [networkName, setNetworkName] = useState('');
  const [recipientNumber, setRecipientNumber] = useState('');
  const [text, setText] = useState(false);
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
        image: require('../AirtimeConversion/images/Airtel_logo-01 2.png'),
        discount: 4,
    },
    {
        id:3,
        name:'GLO',
        image: require('../AirtimeConversion/images/640px-Glo_button 1.png'),
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
const handleSelectNetwork =(name, image, val)=> {
  setNetworkName(name);
  setNetworkImage(image);
  setShowList(false);
  setSelected(true);
}
const Network =({name, image, onClick})=> {
  return (
    <li className="pl-[4px] lg:pl-[14px] lg:pr-[16px] border-b flex items-center py-[3px] gap-1 last:border-b-0 md:py-[6px] cursor-pointer lg:gap-2 lg:h-[45px]" onClick={onClick}>
      <div className="rounded-full w-[12.02px] h-[12.02px] flex items-center justify-center text-[6px] overflow-hidden md:w-[12.02px] lg:w-[25px] md:h-[12.02px] lg:h-[25px]">
        <img src={image} alt="" className='w-full h-full object-cover'/>
      </div> 
      <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">{name}</h2>
    </li>
  )
}

const [errors, setErrors] = useState({});
const handlePhoneNumber = (event) => {
  const newValue = event.target.value;
  setRecipientNumber(newValue);
   
};
// const [proceed, setProceed] = useState(false);

const handleProceed = (e) => {
  
  // e.preventDefault();

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
    // setProceed(true);
    setErrors({});
  }
};

const schema = Joi.object({
  phoneNumber: Joi.string()
    .pattern(new RegExp(/^\d{11,}/))
    .required()
    .messages({
      "string.pattern.base": "Phone number should be 11 digits ",
    }),
    inputValue: Joi.string()
    .pattern(new RegExp(/^\d{4,}/))
    .required()
    .messages({
      "string.pattern.base": "Minimum amount to convert is 1000",
    }),
    
});

const [inputValue, setInputValue] = useState('');
  const [resultValue, setResultValue] = useState('');

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
            CONVERT AIRTIME TO REAL MONEY WITH AREMXYPLUG. <br /> AREMXYPLUG.
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
                    { activeTab === 'tab_1' ? 
                        <div className='flex flex-col gap-[0px]'>
                          <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-0'>
                                     <div className="font-[500] text-[10px] py-1 mt-[30px] md:mt-[30px] lg:mt-[50px] text-center px-4 md:text-[9.17px] lg:text-[16px] leading-[20.8px] lg:px-6 lg:w-fit  md:flex md:flex-row md:w-fit md:py-1 lg:py-3 rounded-sm md:rounded-sm lg:rounded-md md:leading-[11.5px] bg-primary text-white">
                                     Real-time Airtime Conversion Check Rate
                                     </div>
        <div
         
          className="font-[500] text-[10px] py-1 mt-[30px] md:mt-[30px] lg:mt-[50px] text-center px-4 md:text-[9.17px] lg:text-[16px] leading-[20.8px] lg:px-6 lg:w-fit  md:flex md:flex-row md:w-fit md:py-1 lg:py-3 rounded-sm md:rounded-sm lg:rounded-md md:leading-[11.5px] bg-primary text-white"
        >
          Airtime Transfer USSD Codes
        </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-[20px]'>
        <div>
                    <div>
                        <h2 className='lg:text-[16px] lg:leading-[24px] font-bold mb-1 text-[8px] leading-[12px]'>Select Network</h2>
                        <div className="border w-full h-[30px] rounded-[4px] pl-[4px] pr-[8px] lg:h-[51px] md:rounded-[6px] lg:rounded-[10px] lg:pl-[14px] lg:pr-[16px] flex items-center justify-between">
                            { selected ? 
                                <li className="flex items-center py-[3px] gap-1 md:py-[6px] cursor-pointer lg:gap-2 lg:h-[45px]">
                                    <div className="rounded-full w-[12.02px] h-[12.02px] flex items-center justify-center text-[6px] overflow-hidden md:w-[12.02px] lg:w-[25px] md:h-[12.02px] lg:h-[25px]">
                                        { networkImage && <img src={networkImage} alt="" className='w-full h-full object-cover'/>}
                                    </div> 
                                    <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">{networkName}</h2>
                                </li>
                            : 
                                <h2 className='lg:text-[16px]  lg:leading-[24px] text-[#7C7C7C] text-[8px] leading-[12px]'>Select Network</h2>
                            }
                            <button className='lg:w-6 lg:h-6 w-[11px] h-[11px]' onClick={handleShowList}>
                                <img src={arrowdown} alt="" className='w-full h-full'/>
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
                    
                    <div className='lg:text-[16px] lg:leading-[24px] flex gap-2 mb-1 text-[8px] leading-[12px]' >
                      <div className='font-bold'>Phone Number </div>
                      <div> <img src={message} alt="" /></div>
                    </div>
                    <div className="border w-full h-[30px] rounded-[4px] pr-[8px] pl-[4px] lg:h-[51px] md:rounded-[6px] lg:rounded-[10px] lg:pl-[14px] lg:pr-[16px] flex items-center justify-between">
                        <input type='text' className='lg:text-[16px] lg:leading-[24px] grow outline-none text-[8px] leading-[12px]' placeholder='Add recipient phone number' onChange={handlePhoneNumber} value={recipientNumber}/>
                        <div className='lg:w-6 lg:h-6 w-[11px] h-[11px]'>
                            <img src={call} alt="" className='w-full h-full'/>
                        </div>
                        {errors.phoneNumber && (
              <div className="text-[12px] text-red-500 italic lg:text-[14px]">
                {errors.recipientNumber}
              </div>
            )}
                    </div>
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
            {errors.inputValue && (
              <div className="text-[12px] text-red-500 italic lg:text-[14px]">
                {errors.inputValue}
              </div>
            )}
          </div>
          <div className="h-[30px] md:h-[40px] lg:h-[60px]  w-[15%] md:w-[8%] gap-2 lg:gap-4 flex flex-row pl-[17px] lg:pl-[35px] py-2 bg-primary items-center   ">
            <div>
              {" "}
              <img
                src={flow}
                className="md:w-[13.75px]  md:h-[13.75px] lg:w-[24px] lg:h-[24px]"
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
          <div>  </div>
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
            <div><img src={mtn} className='w-[8px] h-[8px] lg:w-[15px] lg:h-[15px]' alt="" /></div>
            <div> ₦1,000 MTN ~ 90%</div>
            <div className='flex '> 
              <div><img src={flow1} alt="" /></div>
              <div>Transaction Fee - ₦0.00 </div>
            </div>
          </div>
          <div className='flex gap-1 '>
            <div><img src={clock} className='w-[8px] h-[8px] lg:w-[15px] lg:h-[15px]' alt="" /></div>
            <div className='leading-[8px]'>Completion Time - 2 hr, 09:00am - 10:00pm UTC+1.</div>
          </div>
        </div>

        <div className="flex flex-col justify-center md:items-center">
          <div
            onClick={handleProceed}
            className={` ${
              (inputValue.length < 4 ? "bg-[#0008]" : "bg-[#04177f]",
              resultValue.length < 4 ? "bg-[#0008]" : "bg-[#04177f]")
              
            } text-[12px] mt-[50px] md:mt-[40px] md:w-fit lg:px-12 lg:text-[16px] lg:px md:py-1 md:rounded-md md:px-6   py-3 rounded-md font-[600] text-center text-white
            ${
              !recipientNumber ||
              !inputValue ||
              !selected 
                ? "bg-[#63616188] cursor-not-allowed"
                : "bg-primary"
            }`
          }
          disabled={
            !recipientNumber ||
              !inputValue ||
              !selected 
          }
          >
            Proceed
          </div>
        </div>
                        </div> :
                        <div></div>
                    }
                    { activeTab === 'tab_2' && 
                        <WalletModal>
                        <div className='rounded-[8px] px-3 relative lg:rounded-[11.5px] md:rounded-[6px] flex md:mt-8 flex-col ' >
                            <h2 className='text-center text-[10px] leading-[15px] mb-[10px] md:text-[12px] md:leading-[18px] lg:text-base lg:leading-[24px]'>International Airtime.</h2>
                            <h2 className='text-center text-[10px] leading-[15px] mb-[10px] font-semibold md:text-[12px] md:leading-[18px] lg:text-base lg:leading-[24px] text-primary'>This Feature is Currently Not Available.</h2>
                            <div className='flex justify-center items-center mt-[5%] lg:mt-[5%]'>
                                <div className='w-[170px] lg:w-[270px] lg:h-[220px] mb-[5%] md:mb-0'>
                                    <img src="./Images/airtimeTopUp/international-airtime.png" alt="" className='w-full'/>
                                </div>
                            </div>
                            <div className='w-[100%] mb-5 md:flex md:flex-row-reverse bottom-[0px] md:gap-[20px] lg:w-[93%] lg:gap-[30px] flex-col md:justify-center' >
                                <h2 className='w-full md:w-fit text-right text-[10px] leading-[15px] py-[10px] md:text-[12px] md:leading-[18px] lg:text-base lg:leading-[24px]'>Coming soon...</h2>
                                <button className='w-full text-[10px] md:w-fit leading-[15px] bg-primary px-[28.6px] py-[10px] text-white rounded-[7px] md:text-[12px] md:leading-[18px] lg:text-base lg:leading-[24px]' onClick={handleTab1}>Okay</button>
                            </div>
                        </div>
                    </WalletModal>
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

        </DashBoardLayout>
        
     );
}
 
export default AirtimeConversion;