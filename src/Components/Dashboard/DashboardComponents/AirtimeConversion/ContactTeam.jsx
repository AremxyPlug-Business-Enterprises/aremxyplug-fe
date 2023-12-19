import React from 'react';
import { DashBoardLayout } from '../../Layout/DashBoardLayout';
import { ContextProvider } from '../../../Context';
import { useContext } from "react";
import cloud from "../AirtimeConversion/images/cloud storage convert (1).png";
import { Link } from 'react-router-dom'
import frame from '../AirtimeConversion/images/frame.png'
import sms from '../AirtimeConversion/images/sms.png'
import covert from '../AirtimeConversion/images/convertshape-2.png'
import home from '../AirtimeConversion/images/home-2.png'
import arrow from "../AirtimeConversion/images/arrow.png"
import { useState } from 'react'
import call from "../AirtimeConversion/images/call.png";
import receive from '../AirtimeConversion/images/received.png'
import { Modal } from "../../../Screens/Modal/Modal";
import styles from "../TransferComponent/transfer.module.css";

const ContactTeam = () => {

    const [showList, setShowList] = useState(false);
  const [networkImage, setNetworkImage] = useState('');
  const [selected, setSelected] = useState(false);
  const [networkName, setNetworkName] = useState('');
  const [success, setSuccess] = useState('');
   
  const handleSuccess = () =>{
    if (firstName && lastName && airEmail && homeAdress) {
      setSuccess(true);
    }
    else {
      setSuccess(false);
    }
  }
  
  
  
  const handlePhoneNumber = (event) => {
    const newValue = event.target.value;
    setRecipientNumberA(newValue);
     
  };

  const handlefirstName = (event) => {
    const newValue = event.target.value;
    setFirstName(newValue);
     
  };
  const handlelastName = (event) => {
    const newValue = event.target.value;
    setLastName(newValue);
     
  };

  const handleairEmail = (event) => {
    const newValue = event.target.value;
    setairEmail(newValue);
     
  };
  const handlehomeAdress = (event) => {
    const newValue = event.target.value;
    sethomeAdress(newValue);
     
  };

  const { 
    firstName,
    lastName,
    setInputValue, 
    inputValue, 
    resultValue,
    setResultValue,
    recipientNumberA, 
    setRecipientNumberA,
    toggleSideBar,
    setFirstName,
    setLastName,
    airEmail, 
    homeAdress,
    setairEmail,
   sethomeAdress,

   
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
          <img src={image} alt="" className='w-[25px] object-cover'/>
        </div> 
        <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">{name}</h2>
      </li>
    )
  }
  
  
    const { isDarkMode } = useContext(ContextProvider);
    return ( <DashBoardLayout>
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
        <div className='my-[20px] lg:my-[80px] md:my-[30px] flex gap-1'>
                    <h2 className='text-[8.62px] lg:text-[15px]'>Select Airtime Type</h2>
                    <div className='lg:w-6 lg:h-6 w-4 h-4'>
                        <img src='./Images/wallet/arrow-square-right.svg' alt="" className='h-full'/>
                    </div>
        </div>

        <div className='text-[10px] md:text-[12px] lg:text-[16px] flex flex-col gap-2 items-center md:items-start'>
            <div className='font-[600]'>The team incharge will reach out to you as soon as possible.</div>
            <div>Verified Email: <span className='text-[#04177F] font-[600]'>airtimeconversion@aremxyplug.com</span></div>
            <div>Completion Time 0 - 2 hours, from 09:00am - 10:00pm UTC+1.</div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 mt-4 md:mt-6 gap-5'>
        <div>
                    <div className='lg:text-[16px] lg:leading-[24px] items-center flex gap-2 mb-1 text-[8px] leading-[12px]' >
                      <div className='font-bold'>First Name </div>
                      
                    </div>
                    <div className="border w-full h-[30px] rounded-[4px] pr-[8px] pl-[4px] lg:h-[51px] md:rounded-[6px] lg:rounded-[10px] lg:pl-[14px] lg:pr-[16px] flex items-center justify-between">
                        <input type='text' className='lg:text-[16px] lg:leading-[24px] grow outline-none text-[8px] font-bold leading-[12px]' placeholder='First Name' onChange={handlefirstName} value={firstName} />
                        <div className='lg:w-6 lg:h-6 w-[11px] h-[11px]'>
                            <img src={frame} alt="" className='w-full h-full'/>
                        </div>
                        
                    </div>
        </div>

        <div>
                    <div className='lg:text-[16px] lg:leading-[24px] items-center flex gap-2 mb-1 text-[8px] leading-[12px]' >
                      <div className='font-bold'>Last Name </div>
                      
                    </div>
                    <div className="border w-full h-[30px] rounded-[4px] pr-[8px] pl-[4px] lg:h-[51px] md:rounded-[6px] lg:rounded-[10px] lg:pl-[14px] lg:pr-[16px] flex items-center justify-between">
                        <input type='text' className='lg:text-[16px] lg:leading-[24px] grow outline-none text-[8px] font-bold leading-[12px]' placeholder='Last Name' onChange={handlelastName} value={lastName} />
                        <div className='lg:w-6 lg:h-6 w-[11px] h-[11px]'>
                            <img src={frame} alt="" className='w-full h-full'/>
                        </div>
                        
                    </div>
        </div>

        <div>
                    <div className='lg:text-[16px] lg:leading-[24px] items-center flex gap-2 mb-1 text-[8px] leading-[12px]' >
                      <div className='font-bold'>Email Address </div>
                      
                    </div>
                    <div className="border w-full h-[30px] rounded-[4px] pr-[8px] pl-[4px] lg:h-[51px] md:rounded-[6px] lg:rounded-[10px] lg:pl-[14px] lg:pr-[16px] flex items-center justify-between">
                        <input type='text' className='lg:text-[16px] lg:leading-[24px] grow outline-none text-[8px] font-bold leading-[12px]' placeholder='Email Address ' onChange={handleairEmail} value={airEmail} />
                        <div className='lg:w-6 lg:h-6 w-[11px] h-[11px]'> 
                            <img src={sms} alt="" className='w-full h-full'/>
                        </div>
                        
                    </div>
        </div>

        <div>
                    <div className='lg:text-[16px] lg:leading-[24px] items-center flex gap-2 mb-1 text-[8px] leading-[12px]' >
                      <div className='font-bold'>Home Address </div>
                      
                    </div>
                    <div className="border w-full h-[30px] rounded-[4px] pr-[8px] pl-[4px] lg:h-[51px] md:rounded-[6px] lg:rounded-[10px] lg:pl-[14px] lg:pr-[16px] flex items-center justify-between">
                        <input type='text' className='lg:text-[16px] lg:leading-[24px] grow outline-none text-[8px] font-bold leading-[12px]' placeholder='Home Address' onChange={handlehomeAdress} value={ homeAdress}/>
                        <div className='lg:w-6 lg:h-6 w-[11px] h-[11px]'>
                            <img src={home} alt="" className='w-full h-full'/>
                        </div>
                        
                    </div>
        </div>

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
                      
                    </div>
                    <div className="border w-full h-[30px] rounded-[4px] pr-[8px] pl-[4px] lg:h-[51px] md:rounded-[6px] lg:rounded-[10px] lg:pl-[14px] lg:pr-[16px] flex items-center justify-between">
                        <input type='text' className='lg:text-[16px] lg:leading-[24px] grow outline-none text-[8px] leading-[12px]' placeholder='Add recipient phone number' onChange={handlePhoneNumber} value={recipientNumberA}/>
                        <div className='lg:w-6 lg:h-6 w-[11px] h-[11px]'>
                            <img src={call} alt="" className='w-full h-full'/>
                        </div>
                       
                    </div>
        </div>

        <div>
                    
                    <div className='lg:text-[16px] lg:leading-[24px] items-center flex gap-2 mb-1 text-[8px] leading-[12px]' >
                      <div className='font-bold'>Amount to Convert </div>
                      
                    </div>
                    <div className="border w-full h-[30px] rounded-[4px] pr-[8px] pl-[4px] lg:h-[51px] md:rounded-[6px] lg:rounded-[10px] lg:pl-[14px] lg:pr-[16px] flex items-center justify-between">
                        <input type='text' className='lg:text-[16px] lg:leading-[24px] grow outline-none text-[8px] leading-[12px]' placeholder='Amount to Convert' onChange={handleInputChange} value={inputValue}/>
                        <div className='lg:w-6 lg:h-6 w-[11px] h-[11px]'>
                            <img src={covert} alt="" className='w-[10px] h-[10px]'/>
                        </div>
                       
                    </div>
        </div>

        <div>
                    
                    <div className='lg:text-[16px] lg:leading-[24px] items-center flex gap-2 mb-1 text-[8px] leading-[12px]' >
                      <div className='font-bold'>Amount to Convert </div>
                      
                    </div>
                    <div className="border w-full h-[30px] rounded-[4px] pr-[8px] pl-[4px] lg:h-[51px] md:rounded-[6px] lg:rounded-[10px] lg:pl-[14px] lg:pr-[16px] flex items-center justify-between">
                        <input type='text' className='lg:text-[16px] lg:leading-[24px] grow outline-none text-[8px] leading-[12px]' placeholder='Amount to Receive' readonly value={resultValue}/>
                        <div className='lg:w-6 lg:h-6 w-[11px] h-[11px]'>
                            <img src={receive} alt="" className='w-full h-full'/>
                        </div>
                       
                    </div>
        </div>


        </div>
          <div className=' text-[#7C7C7C] text-[8px] lg:text-[12px] flex flex-col gap-2 mt-5 font-[500] items-center md:items-start'>
            <div className='flex gap-2 '>
                <div className=''> <input type="checkbox" id="myCheckbox" name="myCheckbox" className="form-checkbox h-3 w-3  text-black  " /></div>
                <div className='font-semibold'>I acknowledge that the details I provided above are correct, and I take the full <br /> responsibility for any inaccuracy.
</div>
            </div>
            <div className='flex gap-2'>
            <div className=''> <input type="checkbox" id="myCheckbox" name="myCheckbox" className="form-checkbox h-3 w-3 text-black  " /></div>
                <div className='font-semibold '>
                  <div>I have read and agreed to AremxyPlug <Link to="/privacy-policy"><span className='text-primary  font-bold'>Privacy Policy</span> and </Link><Link to="/terms-and-condition"><span className='text-primary font-bold'>Terms & Conditions.</span></Link> </div>
                  
                   </div>
            </div>

           

          </div>

          <div onClick={handleSuccess} className='text-white  bg-primary lg:text-[16px] lg:py-1 w-full md:w-[93px] lg:w-[163px] rounded-md md:py-1 md:rounded-lg md:px-1 py-3 text-center mt-[40px] text-[12px] font-[600]'
          disabled={
              
            !firstName ||
            !lastName ||
            !airEmail ||
            !homeAdress

          }
          >Contact Team</div>

        </div>

        <div className="flex flex-row items-center justify-center md:mt-[750px] mt-[190px] pb-[10%] lg:mt-[980px] gap-2">
          <div className="text-[8px] lg:text-[12px] font-[600] text-black">
            You need help?
          </div>
          <Link to="/ContactUs">
            <div className="bg-primary text-white lg:text-[8px] text-[7px] px-2 py-1 leading-[10.5px] rounded-lg text-center"
             
            >
              Contact us
            </div>
          </Link>
        </div>
        </div>

        {success && (
        <Modal>
          <div
            className={`${styles.successfulTwo} ${
              toggleSideBar ? "md:w-[45%] lg:ml-[20%] lg:w-[40%]" : "lg:w-[40%]"
            } md:w-[45%] w-[90%] overflow-auto`}
          >
            <div className="flex justify-between items-center mx-[3%] my-[2%] lg:my-[1%]">
              <img
                onClick={() => setSuccess(false)}
                className=" w-[18px]   md:w-[35px] md:h-[35px] lg:w-[35px] lg:h-[25px]"
                src="/Images/login/arpLogo.png"
                alt=""
              />

              <img
                onClick={() => setSuccess(false)}
                className=" w-[18px] h-[18px] md:w-[35px] md:h-[35px] lg:w-[29px] lg:h-[29px]"
                src="/Images/transferImages/close-circle.png"
                alt=""
              />
            </div>
            <hr className="h-[6px] bg-[#04177f] border-none md:h-[10px]" />
            <h2 className="text-[12px] my-[4%] text-center md:text-[20px] md:my-[3%] lg:text-[14px] lg:my-[2%]">
               Successful
            </h2>
            <img
              className="w-[50px] h-[50px] mx-auto mb-[2%] lg:w-[60px] lg:h-[60px]"
              src="./Gif/checkMarkGif.gif"
              alt="/"
            />
           <div className='text-[10px] md:text-[12px]  flex flex-col text-[#4A4A4A] gap-6 items-center text-center'>
                <div className='font-[600] text-[#000000]'>Your request has been sent successfully. <br /> The team incharge will reach out to you as soon as possible.</div>
                <div>Only expect a further email from the Verified Email <br /> "airtimeconversion@aremxyplug.com" to complete the Airtime <br /> conversion transaction.</div>
                <div>Please beware of falling into victim, no AremxyPlug team will <br /> never reach out to you via DM for your transaction PIN, or any <br /> personal transaction purpose. <br /> Please contact us if you have any further enquiry or need any immediate assistance.</div>
                <div className='flex flex-col gap-2'>
                  <div className='text-[#04177F] font-bold'>Email Us: support@aremxyplug.com,</div>
                  <div className='text-[#04177F] font-bold' >Phone: +2347066096932.</div>
                </div>
                <Link to="/airtime-receipt">
                <div  className='text-white  bg-primary lg:text-[16px] lg:py-1 w-[300px]  md:w-[93px] lg:w-[163px] rounded-md md:py-1 md:rounded-lg md:px-1 py-3 text-center mt-[20px] mb-[25px] text-[12px] font-[600]'
                
                >Done</div>
                </Link>
           </div>

            

          </div>
        </Modal>
      )}


    </DashBoardLayout> );
}
 
export default ContactTeam;