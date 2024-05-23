import React from 'react';
import WalletModal from './WalletModal';

const CryptoModal = () => {
  return (
    <WalletModal>
    <div className='w-full h-full flex flex-col justify-between'>
      <h2 className='text-[10px] text-center pt-[5%] text-[#04177f] font-extrabold md:text-[16px] lg:text-[25px] md:pt-[3%]'>This Feature is Currently Not Available.</h2>
      <div className='flex justify-center items-center mt-[10%] lg:mt-[5%]'>
        <div className='mx-auto mt-[] w-[135px] h-[96px] md:w-[220px] md:h-[200px] md:mt-[5%] lg:w-[350px] lg:h-[280px] lg:mt-[5%]'>
          <img src="./Images/wallet/comingSoon.png" alt=""/>
        </div>
      </div>
      <div className='flex md:justify-center md:items-center flex-col gap-0 md:pb-[5%] mt-[3%]' >
        <h2 className='text-[8px] font-extrabold float-right ml-[80%] md:ml-[70%] md:text-[12px] lg:text-[13px] lg:ml-[80%] mb-1 md:mb-0'>Coming soon...</h2>
        <button className='bg-primary text-white text-[10px] h-[40px] rounded-[5px] flex items-center justify-center md:mx-auto md:w-[20%] md:h-[30px] md:text-[14px] lg:my-[3%] lg:h-[40px] lg:text-[20px] lg:w-[30%] lg:mx-auto' onClick={()=>setShowCryptoModal(false)}>Okay</button>
      </div>
    </div>
  </WalletModal>
  );
}

export default CryptoModal;
