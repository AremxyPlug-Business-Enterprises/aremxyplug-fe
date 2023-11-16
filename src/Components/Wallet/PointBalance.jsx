import React from 'react';
import { useState } from 'react';
import { DashBoardLayout } from '../Dashboard/Layout/DashBoardLayout';
import { BsEyeFill } from 'react-icons/bs'
import FaqCard from './FaqCard';
import './faq.css'
import { Link } from 'react-router-dom';

const PointBalance = () => {
  const [clicked, setClicked] = useState(true);
  const [refPoints, setRefPoints] = useState(false);
  const [transPoints, setTransPoints] = useState(false);
  const [earnPoints, setEarnPoints] = useState(false);
  
  const handleToggle =(index)=> {
    if (clicked === index) {
      return setClicked(true)
    }
    setClicked(index)
  }

  const faqList = [
    {
      id: 1,
      question: "Are there any benefits to upgrading my account?",
      answer: "Yes, upgrading your AremxyPlug account gives you access to additional features and services, such as higher transaction limits and lower fees."
    },
    {
      id: 2,
      question: "What are the benefits of becoming an agent?",
      answer: "As an AremxyPlug agent, you can earn commissions on transactions made by your customers and increase your revenue streams."
    },
    {
      id: 3,
      question: "Do I need a bank account to carry out any transactions?",
      answer: "No, you don't need a bank account to carry out transactions on AremxyPlug. However, you can link your bank account to your AremxyPlug account to make transactions more convenient."
    },
  ]
  
  return (
    <DashBoardLayout>
        <div className="flex flex-col justify-between h-full">
            <div>
                <div>
                <div className="w-full h-[90px] md:h-[112.29px] lg:h-[196px] rounded-[7px] md:rounded-[11.5px] bg-[#94C1FF] flex items-center px-[16px] lg:px-[50px] justify-between lg:rounded-[20px]">
                    <div className='py-[13px] lg:py-[40px]'>
                        <h2 className='text-[8px] md:text-[13.75px] font-bold mb-3 lg:text-[24px] lg:mb-4'>POINT BALANCE.</h2>
                        <h2 className='text-[7.5px] md:text-[11.46px] lg:text-[20px] lg:leading-[26px] mb-3'>The below point balances are your total earned points from all your transactions and referrals.</h2>
                    </div>
                    <div className='w-[91px] h-[66px] lg:w-[254px] lg:h-[170px] grow'>
                        <img src='./Images/wallet/fiatBanner.png' alt="" className='h-full'/>
                    </div>
                </div>
                <div className='lg:my-14 md:my-9 my-8 flex items-center gap-1'>
                    <h2 className='md:text-[18px] lg:text-[20px] text-[#7c7c7c] text-[10px] leading-[130%]'>Points Analysis</h2>
                    <div className='lg:w-6 lg:h-6 w-4 h-4'>
                        <img src='./Images/wallet/arrow-square-right.svg' alt="" className='h-full'/>
                    </div>
                </div>
                <div className="w-full h-[102.28px] lg:h-[186px] flex flex-col justify-between md:h-[106.5px]">
                <div className='w-full grid grid-cols-3 gap-[10px] lg:gap-5 h-[78px] md:h-[90px] lg:h-[160px]'>
                    <div className='rounded-[5px] md:rounded-[8px] md:p-2 px-[3px] py-2 bg-[#ced9ff] lg:rounded-[12px] lg:py-4 flex flex-col justify-between'>
                        <h2 className='text-center text-[8.5px] leading-[13.5px] lg:text-[16px] lg:leading-[24px]'>Total Transaction Points</h2>
                        <div className='flex gap-2 items-center justify-center mt-1 lg:mt-5'>
                        { refPoints ? <h2 className='text-[8.5px] leading-[13.5px] lg:text-[16px] lg:leading-[24px]'>10,000.00</h2> : <h2 className='text-[8.5px] leading-[13.5px] lg:text-[16px] lg:leading-[24px] mt-1'>******</h2>}
                            <BsEyeFill className='text-[10px] lg:text-[17px] lg:leading-[25.5px] text-[#92abfe] cursor-pointer' onClick={()=>setRefPoints(!refPoints)}/>
                        </div>
                        <div className='text-center mt-2 lg:mt-7'>
                            <Link to="/TransactionPage" className='inline-block py-[2px] px-1 rounded-[3px] bg-primary text-white text-[8px] leading-[12px] lg:text-[12px] lg:leading-[18px] lg:px-2 md:rounded-[6px]'>View Transaction</Link>
                        </div>
                    </div>
                    <div className='rounded-[5px] md:rounded-[8px] md:p-2 px-[3px] py-2 bg-[#ffe7c9] lg:rounded-[12px] lg:py-4 flex flex-col justify-between'>
                        <h2 className='text-center text-[8.5px] leading-[13.5px] lg:text-[16px] lg:leading-[24px]'>Total Referral Points</h2>
                        <div className='flex gap-2 items-center justify-center mt-1 lg:mt-5'>
                        {transPoints ? <h2 className='text-[8.5px] leading-[13.5px] lg:text-[16px] lg:leading-[24px]'>10,000.00</h2> : <h2 className='text-[8.5px] leading-[13.5px] lg:text-[16px] lg:leading-[24px] mt-1'>******</h2>}
                            <BsEyeFill className='text-[10px] lg:text-[17px] lg:leading-[25.5px] text-[#92abfe] cursor-pointer' onClick={()=>setTransPoints(!transPoints)}/>
                        </div>
                        <div className='text-center mt-2 lg:mt-7'>
                            <Link to='/My-Referral'
                            className='inline-block py-[2px] px-1 rounded-[3px] bg-primary text-white 
                            text-[8px] leading-[12px]
                             lg:text-[12px] lg:leading-[18px] lg:px-2 md:rounded-[6px]'>View Referrals</Link>
                        </div>
                    </div>
                    <div className='rounded-[5px] md:rounded-[8px] md:p-2 px-[3px] py-2 bg-[#a5ffcb] lg:py-4 lg:rounded-[12px] flex flex-col justify-between'>
                        <h2 className='text-center text-[8.5px] leading-[13.5px] lg:text-[16px] lg:leading-[24px]'>Total Earned Points</h2>
                        <div className='flex gap-2 items-center justify-center mt-1 lg:mt-5'>
                            {earnPoints ? <h2 className='text-[8.5px] leading-[13.5px] lg:text-[16px] lg:leading-[24px]'>10,000.00</h2> : <h2 className='text-[8.5px] leading-[13.5px] lg:text-[16px] lg:leading-[24px] mt-1'>******</h2>}
                            <BsEyeFill className='text-[10px] text-[#92abfe] lg:text-[17px] lg:leading-[25.5px] cursor-pointer' onClick={()=>setEarnPoints(!earnPoints)}/>
                        </div>

                        <div className='text-center mt-2 lg:mt-7'>
                            <Link to="/point-redeem" className='inline-block py-[2px] px-1 rounded-[3px] bg-primary text-white text-[8px] leading-[12px] lg:text-[12px] lg:leading-[18px] lg:px-2 md:rounded-[6px]'>Redeem Points</Link>
                        </div>
                    </div>
                </div>
                </div>
                <div className='mt-4 lg:mt-12'>
                    <div className='lg:mb-8 flex items-center gap-1 mb-5'>
                        <h2 className='md:text-[18px] lg:text-[20px] text-[#7c7c7c] text-[10px] leading-[130%]'>Quick FAQs</h2>
                        <div className='lg:w-6 lg:h-6 w-4 h-4'>
                            <img src='./Images/wallet/arrow-square-right.svg' alt="" className='h-full'/>
                        </div>
                    </div>
                <div className='mt-8 md:mt-9 lg:mt-14'>
                    {faqList.map((faqItem) => (
                    <FaqCard 
                        key={faqItem.id} 
                        faqItem={faqItem}
                        onToggle={()=> handleToggle(faqItem.id)}
                        active={clicked === faqItem.id}
                    />
                    ))}
                </div>
                </div>
            </div>
            </div>
            <div className='flex gap-2 justify-center items-center md:mt-40'>
                <h2 className='text-[8px] leading-[12px] lg:text-[12px] lg:leading-[18px]'>You need help?</h2>
                <Link to={`/ContactUs`} className='text-[7px] leading-[10.5px] text-white bg-primary px-2 py-1 rounded-full lg:text-[8px]'>Contact Us</Link>
            </div>
        </div>
    </DashBoardLayout>
  );
}

export default PointBalance;