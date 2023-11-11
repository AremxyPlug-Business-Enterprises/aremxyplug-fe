import React from 'react';

const AddAccount = ({onClick}) => {
  return (
    <div className='fixed top-0 left-0 w-full h-full bg-black/[0.4] z-[900] flex items-center justify-center'>
      <div className='bg-white p-5 mx-[5%] md:mx-[30%] grow pt-[15px] pb-[33px] px-[22px] rounded-[8px] h-[250px] relative md:rounded-[11.5px] lg:h-[500px]' >
        <h2 className='text-center text-[10px] leading-[15px] mb-[10px] font-semibold md:text-[12px] md:leading-[18px] lg:text-base lg:leading-[24px] text-primary'>This Currency is Currently Not Available.</h2>
        <div className='flex justify-center items-center mt-[15%] lg:mt-[20%]'>
          <div className='w-[110px] h-[110px] lg:w-[220px] lg:h-[220px]'>
            <img src="./Images/wallet/businessAccount.png" alt=""/>
          </div>
        </div>
        <div className='w-[86%] md:flex md:flex-row-reverse absolute bottom-[22px] md:gap-[20px] lg:w-[93%] lg:gap-[30px] flex-col md:justify-center' >
          <h2 className='w-full md:w-fit text-right text-[10px] leading-[15px] py-[10px] md:text-[12px] md:leading-[18px] lg:text-base lg:leading-[24px]'>Coming soon...</h2>
          <button className='w-full text-[10px] md:w-fit leading-[15px] bg-primary px-[28.6px] py-[10px] text-white rounded-[7px] md:text-[12px] md:leading-[18px] lg:text-base lg:leading-[24px]' onClick={onClick}>Okay</button>
        </div>
      </div>
    </div>
  );
}

export default AddAccount;
