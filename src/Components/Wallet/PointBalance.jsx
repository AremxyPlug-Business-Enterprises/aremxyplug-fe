import React from 'react';
import { useState } from 'react';
import { DashBoardLayout } from '../Dashboard/Layout/DashBoardLayout';
import { BsEyeFill } from 'react-icons/bs'
import FaqCard from './FaqCard';
import './faq.css'
import { Link } from 'react-router-dom';
import { GetFunction} from "../../Components/ApiCollection.jsx/ApiBuck";
import { useEffect } from 'react';



const PointBalance = () => {
      const [isLoading, setLoading] = useState(false);
   
const [userPoints, setUserPoints] = useState(0);
 const [transactionPoints, setTransactionPoints] = useState(0);
const [referralPoints, setReferralPoints] = useState(0);
const [fetchedResponse, setFetchedResponse] = useState([]);


       
    //Fetch Points
   useEffect(() => {
    
     const  successHandler = (response) => {
        if (!response?.data?.data) return;
        // console.log("fetch points succefully");
     const total = response?.data?.data?.point?.earned_points ?? 0;
     const trxPoints = response?.data?.data?.point?.transaction_points ?? 0;
     const referralPts = response?.data?.data?.point?.referral_points ?? 0;
      console.log("fetch points succefully", total);
     setUserPoints(total);
     setTransactionPoints(trxPoints);
     setReferralPoints(referralPts);
     };
     const FailedHandler = (error) => {
       console.error("Failed to fetch points,", error);
     };
 
    
       GetFunction("extra/point", setLoading,  successHandler, FailedHandler, setFetchedResponse)
    
   }, []);

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
      question: "How does the point system work?",
      answer: "Our point system rewards users for engagement and activities on the platform. You can earn points through sign-ups, referrals, verification, and transactions."
    },
    {
      id: 2,
      question: "How many points do I get when I sign up?",
      answer: " Every new user automatically receives 100 points upon registration."
    },
    {
      id: 3,
      question: "What do I earn for verifying my account?",
      answer: " Once your account is successfully verified, you’ll earn an additional 100 points."
    },
     {
      id: 4,
      question: "How does the referral bonus work?",
      answer: " You’ll earn 100 points for every user you refer — but only when the referred user verifies their account."
    },
     {
      id: 5,
      question: " Do I earn points for transactions?",
      answer: " Yes! You’ll automatically earn 2 points for every successful transaction you carry out."
    },
     {
      id: 6,
      question: "What is the minimum number of points I can redeem?",
      answer: "You can start redeeming your points once you reach 1,000 points."
    },
     {
      id: 7,
      question: "What currency can I redeem my points in?",
      answer: " All earned points are redeemed in Nigerian Naira (NGN) only."
    },
     {
      id: 8,
      question: " What is the point conversion ratio?",
      answer: " Our conversion rate is 1:1 — which means 1 PTS = 1 NGN."
    },
     {
      id: 9,
      question: "How fast will I receive my redeemed points?",
      answer: " Your redeemed points are instantly settled into your NGN wallet once you redeem them."
    },
     {
      id: 10,
      question: "Can the point system change over time?",
      answer: "Yes. Points and reward structures are subject to change to support marketing and promotional campaigns"
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
                    <div className='h-[66px] lg:h-[170px]'>
                        <img src='./Images/wallet/fiatBanner.png' alt="" className='h-full'/>
                    </div>
                </div>
                <div className='lg:my-14 md:my-9 my-8 flex items-center gap-1'>
                    <h2 className='md:text-[18px] lg:text-[20px] md:leading-[24px] font-[500]
                     lg:leading-[26px] text-[#7c7c7c] 
                    text-[13px] leading-[18px]'>Points Analysis</h2>
                    <div className='lg:w-6 lg:h-6 w-4 h-4'>
                        <img src='./Images/wallet/arrow-square-right.svg' alt="" className='h-full'/>
                    </div>
                </div>
                <div className="w-full h-[102.28px] lg:h-[186px] flex flex-col justify-between md:h-[106.5px]">
                <div className='w-full grid grid-cols-3 gap-[10px] lg:gap-5 h-[78px] md:h-[90px] lg:h-[160px]'>
                    <div className='rounded-[5px] md:rounded-[8px] md:p-2 px-[3px] py-2 bg-[#ced9ff] lg:rounded-[12px] lg:py-4 flex flex-col justify-between'>
                        <h2 className='text-center text-[8.5px] leading-[13.5px] lg:text-[16px] lg:leading-[24px]'>Total Transaction Points</h2>
                        <div className='flex gap-2 items-center justify-center mt-1 lg:mt-5'>
                        { refPoints ? <h2 className='text-[8.5px] leading-[13.5px] lg:text-[16px] lg:leading-[24px]'>{transactionPoints}</h2> : <h2 className='text-[8.5px] leading-[13.5px] lg:text-[16px] lg:leading-[24px] mt-1'>******</h2>}
                            <BsEyeFill className='text-[10px] lg:text-[17px] lg:leading-[25.5px] text-[#92abfe] cursor-pointer' onClick={()=>setRefPoints(!refPoints)}/>
                        </div>
                        <div className='text-center mt-2 lg:mt-7'>
                            <Link to="/TransactionPage" className='inline-block py-[2px] px-1 rounded-[3px] bg-primary text-white text-[8px] leading-[12px] lg:text-[12px] lg:leading-[18px] lg:px-2 md:rounded-[6px]'>View Transaction</Link>
                        </div>
                    </div>
                    <div className='rounded-[5px] md:rounded-[8px] md:p-2 px-[3px] py-2 bg-[#ffe7c9] lg:rounded-[12px] lg:py-4 flex flex-col justify-between'>
                        <h2 className='text-center text-[8.5px] leading-[13.5px] lg:text-[16px] lg:leading-[24px]'>Total Referral Points</h2>
                        <div className='flex gap-2 items-center justify-center mt-1 lg:mt-5'>
                        {transPoints ? <h2 className='text-[8.5px] leading-[13.5px] lg:text-[16px] lg:leading-[24px]'>{referralPoints}</h2> : <h2 className='text-[8.5px] leading-[13.5px] lg:text-[16px] lg:leading-[24px] mt-1'>******</h2>}
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
                            {earnPoints ? <h2 className='text-[8.5px] leading-[13.5px] lg:text-[16px] lg:leading-[24px]'>{isLoading ? "Loading..." : userPoints}</h2> : <h2 className='text-[8.5px] leading-[13.5px] lg:text-[16px] lg:leading-[24px] mt-1'>******</h2>}
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
                        <h2 className='md:text-[18px] lg:text-[20px] md:leading-[24px] lg:leading-[26px]
                         text-[#7c7c7c] text-[12px] leading-[16px] font-[500]'>
                            Referral and Point Redeem FAQ's</h2>
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