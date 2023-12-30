import React, { useContext } from 'react';
import { ContextProvider } from '../Context';



const TopupModal = ({children}) => {
  const {   toggleSideBar } = useContext(ContextProvider);

  return (
    <div className={`fixed top-0 left-0 w-full h-full bg-black/[0.3] z-[300] flex justify-center items-center ${toggleSideBar ? "md:pl-[20%]":""}`}>
      {children}
    </div>
  );
}

export default TopupModal;
