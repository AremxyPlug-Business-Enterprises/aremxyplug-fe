import React, { useContext, useState } from "react";
import { DashBoardLayout } from "../../Dashboard/Layout/DashBoardLayout";
import { ContextProvider } from "../../Context";
import { Link } from "react-router-dom";

function NgnVirtualAccount() {
  const { isDarkMode } = useContext(ContextProvider);

  const [pastedText, setPastedText] = useState('');

  const accountNumber = '1234567890';
  const formatAccountNumber = (text) => {
    if ( text !== '') {
      return text.substring(0, 4) + ' xxxx xxxx'
    }
  }
  console.log(accountNumber.length);



  const handleCopyText = (text) => {
    navigator.clipboard.writeText(text)
    .then(() => {
      console.log('Text successfully copied')})
    .catch((error) => console.log('Unable to copy text', error));
  }
  const handlePasteText = () => {
    navigator.clipboard.readText()
    .then((text) => {
      setPastedText(text);
      console.log('Text successfully pasted from clipboard');})
    .catch((error) => console.log('Text not successfully copied from clipboard', error))
  }
  return (
    <DashBoardLayout>
      <div className="flex flex-col justify-between h-full">
        <div>
          {/* HERO HEADER STARTS HERE */}
          <div className="w-full h-[90px] md:h-[112.29px] lg:h-[196px] rounded-[7px] md:rounded-[11.5px] bg-[#ff4343]/[0.5] flex px-[16px] lg:px-[50px] justify-between items-center lg:rounded-[20px] bg-[#4cb133]">
            <div className="py-[13px] lg:py-[40px]">
              <h2 className="text-[10px] md:text-[13.75px] font-bold mb-3 lg:text-[24px] lg:mb-4">NIGERIAN NGN ACCOUNT.</h2>
              <h2 className="text-[7px] md:text-[11.46px] lg:text-[20px] lg:leading-[26px] mb-3">The below account details is reserved to fund your NGN Wallet almost instantly with 1% funding fee only.</h2>
            </div>
            <div className="h-[66px] lg:h-[170px]">
              <img
                src="./Images/virtual-account/phone2.png"
                alt=""
                className="h-full"
              />
            </div>
          </div>
          {/* HERO HEADER ENDS HERE */}

          <div className="mt-[25.39px] md:mt-[35px] lg:mt-[60px] ">
            <div className="flex items-center">
              <p
                className=" text-[#7c7c7c] text-[10px]  md:text-[18px] lg:text-[20px]
           "
              >
                Funding Methods
              </p>
              <img
                src="Images/top_up/arrowR.png"
                alt=" "
                className="ml-[1%] w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center mt-[25.39px] md:mt-[35px] lg:mt-[60px] w-full h-[65.33px] md:h-[112.29px] lg:h-[196px] rounded-[7px] md:rounded-[11.5px] bg-[#92abfe]/[0.5] px-[16px] lg:px-[50px] lg:rounded-[20px]">
            <div className="">
              <div className="mb-[8px] lg:mb-[15px] flex lg:gap-x-[20px] gap-x-[15px] font-semibold">
                <p className="md:text-[10px] text-[8px] lg:text-[16px] lg:w-[15%] md:w-[20%] w-[25%] text-right">BANK NAME</p>
                <p className="md:text-[10px] text-[8px] lg:text-[16px] lg:w-[85%] md:w-[20%] w-[75%]">SBI</p>
              </div>
              <div className="mb-[8px] lg:mb-[15px] flex lg:gap-x-[20px] gap-x-[15px] font-semibold">
                <p className="md:text-[10px] text-[8px] lg:text-[16px] lg:w-[15%] md:w-[20%] w-[25%] text-right">ACCOUNT NAME</p> 
                <p className="md:text-[10px] text-[8px] lg:text-[16px] lg:w-[85%] md:w-[20%] w-[75%]">Habib Kamaldeen</p>
              </div>
              <div className=" flex lg:gap-x-[20px] gap-x-[15px] font-semibold">
                <p className="md:text-[10px] text-[8px] lg:text-[16px] lg:w-[15%] md:w-[20%] w-[25%] text-right">ACCOUNT NUMBER</p>{" "}
                <div className="flex items-center lg:w-[85%] md:w-[20%] w-[75%]">
                  <p className="md:text-[10px] text-[8px] lg:text-[16px]">{formatAccountNumber(accountNumber)}</p>
                  <button onClick={handleCopyText(accountNumber)}>
                    <img
                      src="Images/virtual-account/copy.png"
                      alt=" "
                      className="ml-[2px] w-[15px] h-[15px] md:w-[18px] md:h-[18px] lg:w-[24px] lg:h-[24px]"
                    />
                  </button>
                </div>
              </div>
              <div>
                <h2 className='lg:text-base text-xs' onClick={handlePasteText}>Paste It Here: {pastedText}</h2>
              </div>
            </div>
          </div>

          <div className='mt-[25.39px] md:mt-[35px] lg:mt-[60px] flex items-center justify-between'>
              <button className='bg-primary text-white text-[7px] leading-[10.5px] rounded-[4px] md:rounded-[7px] md:text-[9.17px] md:leading-[13.75px] flex items-center lg:text-[16px] lg:leading-[24px] justify-center py-[5px] w-[85.5px] md:w-[124px] lg:w-[231px] lg:py-[10px]'>
                <div className='mr-1 w-[11.38px] h-[11.38px] md:w-[19.48px] md:h-[19.48px] lg:w-[34px] lg:h-[34px]'>
                  <img src="./Images/wallet/card-add.png" alt="" className='object-cover w-full'/>
                </div>
                <h2>Fund with card</h2>
              </button>
              <button className='bg-primary text-white text-[7px] leading-[10.5px] md:text-[9.17px] md:leading-[13.75px] rounded-[4px] md:rounded-[7px] flex items-center lg:text-[16px] lg:leading-[24px] justify-center py-[5px] w-[85.5px] md:w-[124px] lg:w-[231px] lg:py-[10px]' >
                <div className='mr-1 w-[11.38px] h-[11.38px] md:w-[19.48px] md:h-[19.48px] lg:w-[34px] lg:h-[34px]'>
                  <img src="./Images/wallet/wallet-add.png" alt="" className='object-cover w-full'/>
                </div>
                <h2>Copy</h2>
              </button>
              <button className='bg-primary text-white text-[7px] leading-[10.5px] md:text-[9.17px] md:leading-[13.75px] rounded-[4px] md:rounded-[7px] flex items-center lg:text-[16px] lg:leading-[24px] justify-center py-[5px] w-[85.5px] md:w-[124px] lg:w-[231px] lg:py-[10px]'>
                <div className='mr-1 w-[11.38px] h-[11.38px] md:w-[19.48px] md:h-[19.48px] lg:w-[34px] lg:h-[34px]'>
                  <img src="./Images/wallet/recovery-convert.png" alt="" className='object-cover w-full'/>
                </div>
                <h2>Share</h2>
              </button>
              
            </div>



        </div>






        <div className="flex gap-2 justify-center items-center md:mt-40 ">
          <h2 className="leading-[12px]  text-[10px] md:text-[12px] lg:text-[14px]">
            You need help?
          </h2>
          <Link
            to={`/ContactUs`}
            className={` ${
              isDarkMode ? "border" : "bg-primary"
            } text-[8px] leading-[12px] text-white  px-2 py-1 rounded-full md:text-[10px] lg:text-[12px]`}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </DashBoardLayout>
  );
}

export default NgnVirtualAccount;
