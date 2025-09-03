import React from 'react'
import { SideBar } from '../Layout/SideBar'
import { useEffect, useContext, useRef } from 'react'
import { ContextProvider } from "../../Context";
import { TopBar } from './TopBar';
import { GetLocalStorage } from '../../LocalStorage/LocalStorage';
export const DashBoardLayout = ({children}, Data) => {
  const {setHideNavbar,toggleSideBar} = useContext(ContextProvider)
  

  const setNav = () => {
    setHideNavbar(true)
  }

  const ValueRef = useRef()
  
    Data = GetLocalStorage()
    useEffect(() => {
      ValueRef.current = Data;
    //console.log(Data);
      setNav();
      return () => {
        setHideNavbar(false);
      }})
  return (
    <div>
       {toggleSideBar && (<div className='absolute top-0 left-0 z-[1000]'><SideBar fullname ={Data.UserFullName} userId ={Data.aremxyUserId}  BvnVerify ={Data.ConfirmBvn} NinVerify={Data.ConfirmId}/></div>)}
       <TopBar/>
       <div className={`${toggleSideBar ? "lg:w-[73.5%] lg:float-right md:w-[68.5%] md:float-right pl-[8.5rem] md:pl-0" : "" } mx-[5%] mt-[8%] lg:mt-[3%] pb-[15%] h-screen lg:h-full md:pb-[5%]`}>
        {children}
       </div>
    </div>
  )
}

