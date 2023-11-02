import React, { useContext } from 'react';
import { ContextProvider } from '../Context';



const WalletModal = ({children}) => {
  const {  isDarkMode } = useContext(ContextProvider);

  return (
    <div className='fixed top-0 left-0 w-full h-full bg-black/[0.3] z-[300] flex justify-center items-center'>
      <div className={` mx-[5%] ${ isDarkMode ? "border bg-[#000]" : "bg-[#fff]"} lg:mx-[30%] md:mx-[25%] grow pt-[15px] pb-[15px] px-[22px] rounded-[8px] h-[280px] md:h-[300px] relative md:rounded-[11.5px] lg:h-[520px]`}>
        {children}
      </div>
    </div>
  );
}

export default WalletModal;
