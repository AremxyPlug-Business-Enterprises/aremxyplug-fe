import React from "react";
import Joi from "joi";
import { DashBoardLayout } from "../Dashboard/Layout/DashBoardLayout";
import "../TvSubscription/TvSubscription.css";
import { useContext } from "react";
import { useState } from "react";
import { ContextProvider } from "../Context";
import { Link } from "react-router-dom";
import ConfirmDstvPopup from "./DstvPopups/confirmDstvPopup";
import { InputGotvPopup } from "./GotvPopups/inputPinGotv"
import GotvSuccessfulPopup from "./GotvPopups/GotvSuccessfulPopup";

 const DsTv = () => {

    const {
        selectedOptionDstv,
        setSelectedOptionDstv,
        showDropdownDstv,
        setShowDropdownDstv,
        setCardName,
        setSmartCard,
        setTvEmail,
        setConfirmDstvPopup,
        formatNumberWithCommas,
        mobileNumber,
        setMobileNumber,
     } = useContext(ContextProvider) 
     
     const handleDstv = (event) =>{
      event.preventDefault();
      setConfirmDstvPopup(true)
   }

   const handleOptionClickDstv = (option) => {
    setSelectedOptionDstv(option);
    setShowDropdownDstv(false);
  };

  const options = [
    `Dstv Padi (₦2500)`,
    `Dstv Yanga (₦3500)`,
    `Dstv Confam (₦6300)`,
    `Dstv Padi Extra (₦5050) `,
    `Dstv Yanga Extra (₦5850) `,
    `Dstv Asia (₦8300)`,
    `Dstv Confam Extra (₦8200)`,
    `Dstv Compact (₦10500)`,
    `Dstv Compact Plus (₦16600)`,
    `Dstv Compact Extra View (₦23900)`,
    `Dstv Premium (₦24500)`,
    `Dstv Premium Asia (₦27500)`,
  ]

  const decoders = [
    `DStv`,
  ]

  const getNumericValue = (option) => {
    const numericPart = option.match(/\d+/);
    if (numericPart) {
      return formatNumberWithCommas(parseInt(numericPart[0], 10));
    }
    return '';
  };

const [selectedDecoderGOTV, setSelectedDecoderGOTV] = useState('');

  const [confirmDecoderGOTV, setConfirmDecoderGOTV] = useState(false);
  const handleDecoderClickGOTV = (option, index) => {
    setSelectedDecoderGOTV(false);
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

 
  const [dstvErrorMessage, setDstvErrorMessage] = useState('');

  const DstvSchema = Joi.object({
    mobileNumber: Joi.string().regex(/^\d{11}$/).required(),
  });

  const handleDstvMobileNumberChange = (e) => {
    const inputValue = e.target.value;
    setMobileNumber(inputValue);

    const validation = DstvSchema.validate({ mobileNumber: inputValue });

    if (validation.error) {
      setDstvErrorMessage('Incorrect Phone Number..');
    } else {
      setDstvErrorMessage('');
    }
  };

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

            <div className=" mx-auto flex gap-1.5 py-[25.29px] lg:py-[50px] md:py-[28.64px]">
                <div className="text-[#7E7E7E] text-[8px] lg:text-xl md:text-[11.46px] font-medium">
                    <span>Subscribe Your</span>
                    <span>Gotv</span>
                    <span> GOTV Decoder Instantly</span>
                </div>                
                <img src="./Images/currencyImages/right.svg" alt="" className="lg:h-[24px] lg:w-[24px] md:h-[13.75px] md:w-[13.75px]" />     
            </div>

          <div className="flex flex-col gap-[20px] md:gap-0">
            <div className="flex flex-col md:flex-row gap-[20px] md:gap-[12px] lg:gap-[22px] md:my-2 lg:my-4">
                <div className="relative flex flex-col gap-[3px] lg:gap-[5px]">
                    <label htmlFor="decoderType" className="text-[#7E7E7E] text-[8px] lg:text-[18px] md:text-[11.46px] font-semibold">
                        Confirm Decoder Type</label>
                    {/* <button className="border-[0.23px] lg:border-[0.4px] w-full md:w-[220px] lg:w-[375px] h-[30px] md:h-[35px] lg:h-[50px] border-[#9C9C9C]">Gotv</button> */}
                    <div className="dropdown-toggle flex items-center cursor-pointer outline-0 border-[0.23px] lg:border-[0.4px] w-full md:w-[220px] lg:w-[375px] h-[30px] md:h-[35px] lg:h-[50px] border-[#9C9C9C] px-[11px] md:px-[6px] lg:px-[10px] text-[#7C7C7C] self-center" onClick={() => setConfirmDecoderGOTV(!confirmDecoderGOTV)}>
                        {selectedDecoderGOTV || `DStv`}
                      </div>
                   
                    {confirmDecoderGOTV && (
                      <ul className="dropdown-options absolute top-[102%] w-[312px] bg-white cursor-pointer">
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
                    <label htmlFor="decoderType" className="text-[#7E7E7E] text-[8px] lg:text-[18px] md:text-[11.46px] font-semibold">
                    Select Package</label>
                   
                      <div className="dropdown-toggle flex items-center cursor-pointer outline-0 border-[0.23px] lg:border-[0.4px] w-full md:w-[220px] lg:w-[375px] h-[30px] md:h-[35px] lg:h-[50px] border-[#9C9C9C] px-[11px] md:px-[6px] lg:px-[10px] text-[#7C7C7C] self-center"
                       onClick={() => setShowDropdownDstv(!showDropdownDstv)}>
                        {selectedOptionDstv || `Dstv Padi (₦2,500)`}
                      </div>
                   
                    {showDropdownDstv && (
                      <ul className="dropdown-options absolute top-[100%] bg-white cursor-pointer">
                        {options.map((option, index) => (
                        <li
                        className={`dropdownCSS h-[30px] md:h-[35px] lg:h-[50px] font-medium text-[12.93px] flex items-center text-[#7C7C7C] pl-[9px]`}
                          key={index}
                        onClick={() => handleOptionClickDstv(option)}
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
                    <label htmlFor="decoderType" className="text-[#7E7E7E] text-[8px] lg:text-[18px] md:text-[11.46px] font-semibold">
                    Smart Card / IUC Number</label>
                    <input type="number" onChange={handleSmartCard} max='10' placeholder="1234567890" className="outline-0 border-[0.23px] lg:border-[0.4px] w-full md:w-[220px] lg:w-[375px] h-[30px] md:h-[35px] lg:h-[50px] border-[#9C9C9C] px-[11px] md:px-[6px] lg:px-[10px] "/>
                </div>
                
                <div className="flex flex-col gap-[3px] lg:gap-[5px]">
                    <label htmlFor="decoderType" className="text-[#7E7E7E] text-[8px] lg:text-[18px] md:text-[11.46px] font-semibold">
                        Card Name</label>
                    <input type="text" onChange={handleCardName} placeholder="Aremxyplug" className="outline-0 border-[0.23px] lg:border-[0.4px] w-full md:w-[220px] lg:w-[375px] h-[30px] md:h-[35px] lg:h-[50px] border-[#9C9C9C] px-[11px] md:px-[6px] lg:px-[10px] "/>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-[20px] md:gap-[12px] lg:gap-[22px] md:my-2 lg:my-4">
                <div className="flex flex-col gap-[3px] lg:gap-[5px]">
                    <label htmlFor="decoderType" className="text-[#7E7E7E] text-[8px] lg:text-[18px] md:text-[11.46px] font-semibold">
                        Phone Number</label>
                        <input id="val" value={mobileNumber} onChange={handleDstvMobileNumberChange}
                        style={{ backgroundColor: dstvErrorMessage ? '#FFD8D8' : 'white' }}
                        type="tel" maxLength={11} placeholder="7744115566" className="outline-0 border-[0.23px] lg:border-[0.4px] w-full md:w-[220px] lg:w-[375px] h-[30px] md:h-[35px] lg:h-[50px] border-[#9C9C9C] px-[11px] md:px-[6px] lg:px-[10px] "/>
             {dstvErrorMessage && <p className="text-[#F95252] text-[9px] md:text-[12px] lg:text-[14px] md:hidden font-semibold ">{dstvErrorMessage}</p>}           
                
                </div>
                <div className="flex flex-col gap-[3px] lg:gap-[5px]">
                    <label htmlFor="Email" className="text-[#7E7E7E] text-[8px] lg:text-[18px] md:text-[11.46px] font-semibold">
                        Email</label>
                        <input type="email" onChange={handleTvEmail} placeholder="Habib@aremxy.com" className="outline-0 border-[0.23px] lg:border-[0.4px] w-full md:w-[220px] lg:w-[375px] h-[30px] md:h-[35px] lg:h-[50px] border-[#9C9C9C] px-[11px] md:px-[6px] lg:px-[10px]"/>
                </div>
                
            </div>
            <div className="flex flex-col md:flex-row gap-[20px] md:gap-[12px] lg:gap-[22px]">
                <div className="flex flex-col gap-[3px] lg:gap-[5px]">
                    <label htmlFor="decoderType" className="text-[#7E7E7E] text-[8px] lg:text-[18px] md:text-[11.46px] font-semibold">
                        Amount</label>
                 
                <input
                  type="text"
                  className="text-[#7E7E7E] outline-0 border-[0.23px] lg:border-[0.4px] w-full md:w-[220px] lg:w-[375px] h-[30px] md:h-[35px] lg:h-[50px] border-[#9C9C9C] px-[11px] md:px-[6px] lg:px-[10px]"
                  value={'₦'+ getNumericValue(selectedOptionDstv)}
                />
            
               </div>
                
                <div className="flex flex-col gap-[3px] lg:gap-[5px]">
                    <label htmlFor="decoderType" className="text-[#7E7E7E] text-[8px] lg:text-[18px] md:text-[11.46px] font-semibold">
                       Payment Method</label>
                    <button className="border-[0.23px] lg:border-[0.4px] w-full md:w-[220px] lg:w-[375px] h-[30px] md:h-[35px] lg:h-[50px] border-[#9C9C9C]">Gotv</button>
                </div>
            </div>
          </div>  

          {dstvErrorMessage && <p className="text-[#F95252] text-[9px] md:text-[12px] lg:text-[14px] max-[500px]:hidden mt-3 font-semibold ">{dstvErrorMessage}</p>}           

            <button onClick={handleDstv}
            disabled={mobileNumber.length !== 11}
             className="mt-[38px] md:mt-[30px] lg:mt-[25px] rounded-[6px] md:rounded-[10px] lg:rounded-[15px] bg-[#04177F] h-[43px] md:h-[30px] lg:h-[40px] flex items-center font-semibold text-[12px] md:text-[11px] lg:text-[16px] text-[#fff] w-full md:w-[100px] lg:w-[170px] justify-center">
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
        <ConfirmDstvPopup/>
        <InputGotvPopup/>
        <GotvSuccessfulPopup/>
        </div>
    )
}

export default DsTv;