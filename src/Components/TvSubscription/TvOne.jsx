import React from "react";
import Joi from "joi";
import { DashBoardLayout } from "../Dashboard/Layout/DashBoardLayout";
import "../TvSubscription/TvSubscription.css";
import { useContext } from "react";
import { useState } from "react";
import arrowDown from '../EducationPins/imagesEducation/arrow-down.svg';
import { ContextProvider } from "../Context";
import { Link } from "react-router-dom";
import ConfirmGotvPopup from "./GotvPopups/confirmGotvPopup";
import { InputGotvPopup } from "./GotvPopups/inputPinGotv"
import GotvSuccessfulPopup from "./GotvPopups/GotvSuccessfulPopup";

 const GoTv = () => {

    const {
        setConfirmGotvPopup,
        selectedOptionGOTV,
        showDropdownGOTV,
        setShowDropdownGOTV,
        setSelectedOptionGOTV,
        formatNumberWithCommas,
        mobileNumber,
        setCardName,
        cardName,
        tvEmail,
        smartCard,
        setSmartCard,
        setTvEmail,
        setMobileNumber,
     } = useContext(ContextProvider) 
     
     const handleGotv = (event) =>{
      event.preventDefault();
      setConfirmGotvPopup(true)
   }

   const handleOptionClickGOTV = (option) => {
    setSelectedOptionGOTV(option);
    setShowDropdownGOTV(false);
  };
  
const getNumericValue = (option) => {
  const numericPart = option.match(/\d+/);
  if (numericPart) {
    return formatNumberWithCommas(parseInt(numericPart[0], numericPart[2], 10));
  }
  return '';
};

  const options = [
    `Gotv Smallie (₦1100) ~ Monthly`,
    `GOtv Jinja (₦2250) ~ Monthly`,
    `GOtv Jinja (₦4500) ~ 2 Months`,
    `GOtv Lite (₦2900) ~ 3 Months`,
    `GOtv Lite (₦8600) ~ Annually`,
    `GOtv Max (₦4850) ~ Monthly`,
    `GOtv Max (₦9700) ~ 2 Months`,
    `GOtv Joli (₦3300) ~ Monthly`,
    `GOtv Joli (₦6600) ~ 2 Months`,
    `GOtv SUPA (₦6400) ~ Monthly`,
    `GOtv SUPA (₦12800) ~ 2 Months`,
    `GOtv SUPA plus (₦21000) ~ 2 Months`,
  ]

  const decoders = [
    `Gotv`,
  ]

const [selectedDecoderGOTV, setSelectedDecoderGOTV] = useState('');

  const [confirmDecoderGOTV, setConfirmDecoderGOTV] = useState(false);
  const handleDecoderClickGOTV = (option, index) => {
    setSelectedDecoderGOTV(option);
  setConfirmDecoderGOTV(false);
  
};

const handleCardName = (e) => {
  const inputValue = e.target.value;
  setCardName(inputValue);
}
const handleSmartCard = (e) => {
  const inputValue = e.target.value;
  setSmartCard(inputValue);
}
const handleTvEmail = (e) => {
  const inputValue = e.target.value;
  setTvEmail(inputValue);
}
 
  const [GOTVErrorMessage, setGOTVErrorMessage] = useState('');

  const GOTVSchema = Joi.object({
    mobileNumber: Joi.string().regex(/^\d{11}$/).required(),
  });

  const handleGOTVMobileNumberChange = (e) => {
    const inputValue = e.target.value;
    setMobileNumber(inputValue);

    const validation = GOTVSchema.validate({ mobileNumber: inputValue });

    if (validation.error) {
      setGOTVErrorMessage('Incorrect Phone Number..');
    } else {
      setGOTVErrorMessage('');
    }
  };

  // const [methodOptions,setMethodOptions] = useState([
  //   {method : 'NGN Wallet', balance :" (50,000.00)", flag : nigerianFlag, id : 1},
  //  {method : 'USD Wallet ', balance :'(0.00)', flag : americaFlag, id : 2 },
  //  {method : 'EUR Wallet', balance :'(0.00)', flag : britainFlag, id : 3 },
  //  {method :  'GBP Wallet', balance :'(0.00)', flag : euroFlag, id : 4 },
  //  {method : 'AUD Wallet', balance :'(0.00)', flag : austriaFlag, id : 5 },
  //  {method : 'KES Wallet',balance :'(0.00)', flag : kenyaFlag, id: 6 }
  //  ])

    return(
        <div>
        <DashBoardLayout>
            
            <div id='tvBackground' className="h-[90px] lg:h-[196px] md:h-[112.29px] rounded-[6.6px] md:rounded-[11.46px] lg:rounded-[20px] mx-auto  flex gap-6 justify-between px-[16.51px] md:px-[28.65px] lg:px-[50px]">
                <div className="py-[9.57px] md:py-[16.61px] align-middle self-center flex flex-col gap-1.5 w-[70%]">
                    <p className="text-[9px] lg:text-[24px] md:text-[13.75px] font-semibold">
                        SUBSCRIBE YOUR TV CHANNELS WITH AREMXYPLUG.
                        </p>
                    <p className="text-[7.5px] lg:text-[20px] md:text-[11.46px]">
                    Never miss a beat! Subscribe your tv channels on our platform to watch and stream your favorite movies without any hassle.
                      </p>
                </div>
                <div className="flex w-[23%] h-[97%] pt-2 shrink-0">
                    <img src="./Images/TvSubscription/tv.svg" alt="" className="" />
                </div>
            </div>

            <div className=" mx-auto flex gap-1.5 py-[25.29px] lg:py-[37px] md:py-[28.64px]">
                <div className="text-[#7E7E7E] text-[8px] lg:text-[16px] md:text-[11.46px] font-medium">
                    <span>Subscribe Your</span>
                    <span>Gotv</span>
                    <span> GOTV Decoder Instantly</span>
                </div>                
                <img src="./Images/currencyImages/right.svg" alt="" className="lg:h-[24px] lg:w-[24px] md:h-[13.75px] md:w-[13.75px]" />     
            </div>

          <div className="flex flex-col gap-[20px] md:gap-0">
            <div className="flex flex-col md:flex-row gap-[20px] md:gap-[12px] lg:gap-[22px] md:my-2 lg:my-4">
                <div className="relative flex flex-col gap-[3px] lg:gap-[5px]">
                    <label htmlFor="decoderType" className="text-[#7E7E7E] text-[8px] lg:text-[16px] md:text-[11.46px] font-semibold">
                        Confirm Decoder Type</label>
                    {/* <button className="border-[0.23px] lg:border-[0.4px] w-full md:w-[220px] lg:w-[435px] h-[30px] md:h-[35px] lg:h-[50px] border-[#9C9C9C]">Gotv</button> */}
                    <div className="relative dropdown-toggle flex items-center cursor-pointer outline-0 border-[0.23px] lg:border-[0.4px] w-full md:w-[220px] lg:w-[435px] h-[30px] md:h-[35px] lg:h-[50px] border-[#9C9C9C] px-[11px] md:px-[6px] lg:px-[10px] text-[#7C7C7C] self-center" onClick={() => setConfirmDecoderGOTV(!confirmDecoderGOTV)}>
                        {selectedDecoderGOTV}
                        <img className="absolute left-[90%] self-center align-middle" src={arrowDown} alt="" />
                      </div>
                   
                    {confirmDecoderGOTV && (
                      <ul className="dropdown-options absolute top-[102%] w-full md:w-[220px] lg:w-[435px] bg-white cursor-pointer">
                        {decoders.map((option, index) => (
                        <li
                        className={`dropdownCSS h-[30px] md:h-[35px] lg:h-[50px] font-medium text-[12.93px] flex items-center text-[#7C7C7C] pl-[9px]`}
                          key={index}
                          
                        onClick={() => handleDecoderClickGOTV(option)}
                          >
                            {option}
                        </li>
                        ))}
                      </ul>
                    )}
                </div>
                
                <div className="relative flex flex-col gap-[3px] lg:gap-[5px]">
                    <label htmlFor="decoderType" className="text-[#7E7E7E] text-[8px] lg:text-[16px] md:text-[11.46px] font-semibold">
                    Select Package</label>
                   
                      <div className="dropdown-toggle flex items-center cursor-pointer outline-0 border-[0.23px] lg:border-[0.4px] w-full md:w-[220px] lg:w-[435px] h-[30px] md:h-[35px] lg:h-[50px] border-[#9C9C9C] px-[11px] md:px-[6px] lg:px-[10px] text-[#7C7C7C] self-center" onClick={() => setShowDropdownGOTV(!showDropdownGOTV)}>
                        {selectedOptionGOTV}
                        <img className="absolute left-[90%] self-center align-middle" src={arrowDown} alt="" />
                      </div>
                   
                    {showDropdownGOTV && (
                      <ul className="dropdown-options absolute top-[100%] w-full md:w-[220px] lg:w-[435px] bg-white cursor-pointer">
                        {options.map((option, index) => (
                        <li
                        className={`dropdownCSS h-[30px] md:h-[35px] lg:h-[50px] font-medium text-[12.93px] flex items-center text-[#7C7C7C] pl-[9px]`}
                          key={index}
                        onClick={() => handleOptionClickGOTV(option)}
                          >
                            {option}
                        </li>
                        ))}
                      </ul>
                    )}
                  
                </div>
            
        
            </div>
            <div className="flex flex-col md:flex-row gap-[20px] md:gap-[12px lg:gap-[22px]] md:my-2 lg:my-4">
                <div className="flex flex-col gap-[3px] lg:gap-[5px]">
                    <label htmlFor="decoderType" className="text-[#7E7E7E] text-[8px] lg:text-[16px] md:text-[11.46px] font-semibold">
                    Smart Card / IUC Number</label>
                  <input type="tel" style={ {backgroundColor: smartCard.length !== 10 ? '#FFD8D8' : 'white' }} maxLength={10} onChange={handleSmartCard} placeholder="1234567890" className="outline-0 border-[0.23px] lg:border-[0.4px] w-full md:w-[220px] lg:w-[435px] h-[30px] md:h-[35px] lg:h-[50px] border-[#9C9C9C] px-[11px] md:px-[6px] lg:px-[10px] "/>
                </div>
                
                <div className="flex flex-col gap-[3px] lg:gap-[5px]">
                    <label htmlFor="decoderType" className="text-[#7E7E7E] text-[8px] lg:text-[16px] md:text-[11.46px] font-semibold">
                        Card Name</label>
                    <input type="text"
                    onChange={handleCardName} placeholder="Aremxyplug" className="outline-0 border-[0.23px] lg:border-[0.4px] w-full md:w-[220px] lg:w-[435px] h-[30px] md:h-[35px] lg:h-[50px] border-[#9C9C9C] px-[11px] md:px-[6px] lg:px-[10px] "/>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-[20px] md:gap-[12px] lg:gap-[22px] md:my-2 lg:my-4">
                <div className="flex flex-col gap-[3px] lg:gap-[5px]">
                    <label htmlFor="decoderType" className="text-[#7E7E7E] text-[8px] lg:text-[16px] md:text-[11.46px] font-semibold">
                        Phone Number</label>
                        <input id="val" value={mobileNumber} onChange={handleGOTVMobileNumberChange}
                        style={{ backgroundColor: GOTVErrorMessage ? '#FFD8D8' : 'white' }}
                        type="tel" maxLength={11} placeholder="7744115566" className="outline-0 border-[0.23px] lg:border-[0.4px] w-full md:w-[220px] lg:w-[435px] h-[30px] md:h-[35px] lg:h-[50px] border-[#9C9C9C] px-[11px] md:px-[6px] lg:px-[10px] "/>
             {GOTVErrorMessage && <p className="text-[#F95252] text-[9px] md:text-[12px] lg:text-[14px] md:hidden font-semibold ">{GOTVErrorMessage}</p>}           
                
                </div>
                <div className="flex flex-col gap-[3px] lg:gap-[5px]">
                    <label htmlFor="Email" className="text-[#7E7E7E] text-[8px] lg:text-[16px] md:text-[11.46px] font-semibold">
                        Email</label>
                        <input type="email" onChange={handleTvEmail} required placeholder="Habib@aremxy.com" className="outline-0 border-[0.23px] lg:border-[0.4px] w-full md:w-[220px] lg:w-[435px] h-[30px] md:h-[35px] lg:h-[50px] border-[#9C9C9C] px-[11px] md:px-[6px] lg:px-[10px]"/>
                </div>
                
            </div>
            <div className="flex flex-col md:flex-row gap-[20px] md:gap-[12px] lg:gap-[22px] md:my-2 lg:my-4">
                <div className="flex flex-col gap-[3px] lg:gap-[5px]">
                    <label htmlFor="decoderType" className="text-[#7E7E7E] text-[8px] lg:text-[16px] md:text-[11.46px] font-semibold">
                        Amount</label>
                    
                
                <input
                  type="text"
                  className="text-[#7E7E7E] outline-0 border-[0.23px] lg:border-[0.4px] w-full md:w-[220px] lg:w-[435px] h-[30px] md:h-[35px] lg:h-[50px] border-[#9C9C9C] px-[11px] md:px-[6px] lg:px-[10px]"
                  value={'₦'+ getNumericValue(selectedOptionGOTV)}
                />
            
               </div>
                
                <div className="flex flex-col gap-[3px] lg:gap-[5px]">
                    <label htmlFor="decoderType" className="text-[#7E7E7E] text-[8px] lg:text-[16px] md:text-[11.46px] font-semibold">
                       Payment Method</label>
                    <button className="border-[0.23px] lg:border-[0.4px] w-full md:w-[220px] lg:w-[435px] h-[30px] md:h-[35px] lg:h-[50px] border-[#9C9C9C]">Gotv</button>
                </div>
            </div>
          </div>  

          {GOTVErrorMessage && <p className="text-[#F95252] text-[9px] md:text-[12px] lg:text-[14px] max-[500px]:hidden mt-3 font-semibold ">{GOTVErrorMessage}</p>}           

            <button onClick={handleGotv}
            disabled={mobileNumber.length !== 11 || !cardName || !tvEmail || !smartCard || !selectedDecoderGOTV || !selectedOptionGOTV }
             className= {`
             ${
              mobileNumber.length !== 11 || !cardName || !tvEmail || !smartCard || !selectedDecoderGOTV || !selectedOptionGOTV
                ? "bg-[#63616188] "
                : "bg-primary"
            }
            mt-[38px] md:mt-[30px] lg:mt-[25px] rounded-[6px] md:rounded-[10px] lg:rounded-[15px] bg-[#04177F] h-[43px] md:h-[30px] lg:h-[40px] flex items-center font-semibold text-[12px] md:text-[11px] lg:text-[16px] text-[#fff] w-full md:w-[100px] lg:w-[170px] justify-center`}>
                Proceed</button>
            
            <div className="flex gap-[15px] justify-center items-center mt-[68%] md:mt-[38%] lg:mt-[26%] max-[760px]:pb-[60px]">
                <div className="font-medium text-[10px] md:text-[10px] lg:text-[15px] self-center">You need help ?</div>
                <Link to="/ContactUs">
                  <div className="bluebutton flex bg-[#04177f] text-[8.5px] md:text-[8.5px] lg:text-[12px] text-white">
                    <p className="self-center mx-auto align-middle">Contact Us</p>
                  </div>
                </Link>
            </div>
        </DashBoardLayout>
        <ConfirmGotvPopup/>
        <InputGotvPopup/>
        <GotvSuccessfulPopup/>
        </div>
    )
}

export default GoTv