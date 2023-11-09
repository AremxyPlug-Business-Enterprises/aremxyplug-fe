import React from 'react';
import { BsEyeFill } from 'react-icons/bs';
import { DashBoardLayout } from '../Dashboard/Layout/DashBoardLayout';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const NewWallet = () => {
  const [showMoney, setShowMoney] = useState(false);
  const money = 10000;

  return (
    <DashBoardLayout>
        <div className='flex flex-col justify-between h-full'>
          <div>
            <div className="w-full h-[90px] md:h-[112.29px] lg:h-[196px] rounded-[7px] md:rounded-[11.5px] bg-[#92abfe]/[0.5] flex px-[16px] lg:px-[50px] justify-between lg:rounded-[20px]">
              <div className='py-[10px] lg:py-[40px] flex flex-col justify-between items-center w-full h-full'>
                <h2 className='md:text-[12px] md:leading-[18px] text-[10px] leading-[15px] lg:text-lg lg:leading-[24px]'>Available Balance</h2>
                <div className='flex gap-1 lg:gap-2 items-center'>
                  { showMoney ? <h2 className='md:text-[16px] md:leading-[20px] font-bold text-[9.33px] leading-[12px] lg:text-[28px] lg:leading-[36px]'>&#8358;{money.toLocaleString()}:00</h2> : <h2 className='md:text-[16px] md:leading-[20px] font-bold text-[9.33px] leading-[12px] lg:text-[28px] lg:leading-[36px] lg:mt-2 mt-1'>******</h2>}
                  <BsEyeFill className='text-[#92abfe] text-[10px] lg:text-[20px] cursor-pointer' onClick={()=> setShowMoney(!showMoney)}/>
                </div>
                <h2 className='md:text-[12px] md:leading-[18px] text-[10px] leading-[15px] lg:text-lg lg:leading-[24px]'>currency: NGN</h2>
              </div>
            </div>
            <div className="md:mt-9 mt-8 lg:mt-14">
              <div className='lg:mb-8 flex items-center gap-1 mb-5'>
                <h2 className='md:text-[18px] lg:text-[20px] text-[#7c7c7c] text-[10px] leading-[130%]'>Wallets Features</h2>
                <div className='lg:w-6 lg:h-6 w-4 h-4'>
                  <img src='./Images/wallet/arrow-square-right.svg' alt="" className='h-full'/>
                </div>
              </div>
              <div className='flex flex-col gap-2 md:gap-3 md:mt-9 mt-8 lg:mt-14'>
                <Link to='/top-up' className='md:py-3 md:px-1 md:rounded-[7px] flex items-center gap-[3px] p-[5px] rounded-[4px] cursor-pointer lg:py-5 lg:gap-1 lg:px-3'style={{boxShadow:`0px 0px 11.495177268981934px 0px #00000040`}}>
                  <div className='w-[6.67px] h-[6.67px] md:w-[11.46px] md:h-[11.46px] lg:h-[25px] lg:w-[25px]'>
                    <img src="./Images/wallet/add-square@3x.png" alt="" className='w-full'/>
                  </div>
                  <h2 className='md:text-[10px] md:leading-[15px] text-[8px] leading-[12px] lg:text-[16px] lg:leading-[24px]'>Add Money</h2>
                </Link>
                <Link to='/money-transfer' className='md:py-3 md:px-1 md:rounded-[7px] flex items-center gap-[3px] p-[5px] rounded-[4px] cursor-pointer lg:py-5 lg:gap-1 lg:px-3'style={{boxShadow:`0px 0px 11.495177268981934px 0px #00000040`}}>
                  <div className='w-[6.67px] h-[6.67px] md:w-[11.46px] md:h-[11.46px] lg:h-[25px] lg:w-[25px]'>
                    <img src="./Images/wallet/translate.png" alt="" className='w-full'/>
                  </div>
                  <h2 className='md:text-[10px] md:leading-[15px] text-[8px] leading-[12px] lg:text-[16px] lg:leading-[24px]'>Money Transfer</h2>
                </Link>
                <Link to='/currencyConversion' className='md:py-3 md:px-1 md:rounded-[7px] flex items-center gap-[3px] p-[5px] rounded-[4px] cursor-pointer lg:py-5 lg:gap-1 lg:px-3'style={{boxShadow:`0px 0px 11.495177268981934px 0px #00000040`}}>
                  <div className='w-[6.67px] h-[6.67px] md:w-[11.46px] md:h-[11.46px] lg:h-[25px] lg:w-[25px]'>
                    <img src="./Images/wallet/note-favorite.png" alt="" className='w-full'/>
                  </div>
                  <h2 className='md:text-[10px] md:leading-[15px] text-[8px] leading-[12px] lg:text-[16px] lg:leading-[24px]'>Convert Currency</h2>
                </Link>
              </div>
            </div>
            <div className='md:mt-9 mt-8 lg:mt-14'>
              <Link className='flex' to={`/fiat-wallet`}>
                <h2 className='text-[9px] leading-[13.5px] lg:text-base lg:leading-[20px]'> {`< <`} Previous page</h2>
              </Link>
            </div>
          </div>
          <div className='flex gap-2 justify-center items-center lg:mt-40'>
            <h2 className='text-[6.88px] lg:text-[12px]'>You need help?</h2>
            <Link to={`/ContactUs`} className='text-[4.58px] text-white bg-primary px-2 py-1 rounded-full lg:text-[8px]'>Contact Us</Link>
          </div>
        </div>
    </DashBoardLayout>
  );
}

export default NewWallet;
