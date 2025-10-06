import React from 'react';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import tickGif from './tick.gif'

const RedirectModal = () => {
    const [redirect, setRedirect] = useState(false);

    if (redirect) {
        return <Navigate to={`/Login`}/>
    }
    const HandleNavigateLogin =()=> {
        localStorage.removeItem("PasswordResetActive")
       
            setRedirect(true)
        
    }

  return (
    <>
        <div className='bg-black/[0.48] fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 px-[20px]'>
            <div className="w-[100%] px-[7px] h-[200px] lg:w-[450px] lg:h-[450px] md:ml-[45%] lg:ml-[45%] 
             bg-white rounded-[10.3px] md:py-[34.96px] md:px-[17.6px] lg:py-[62px] lg:px-[31px] flex items-center justify-center">
                <div className=''>
                    <div className="flex items-center justify-center mb-[14.32px] lg:mb-[25px]">
                        <h2 className='text-[12.02px] leading-[16px] font-[500] md:text-[14px]
                         md:leading-[17px]'>
                            You have successfully created a new password.
                            </h2>
                        <div className='w-[28.65px] h-[28.65px] flex justify-center items-center'>
                            <img src={tickGif} alt="success_tick"/>
                        </div>
                    </div>
                    <h2 className="text-[9.167px] font-bold leading-normal lg:text-[14px] text-center">Sign in to your account to start operations!</h2>
                    <div className='flex justify-center mt-[28.65px] lg:mt-[50px]'>
                        <button className={`bg-[#04177F] w-full flex justify-center
                         items-center  cursor-pointer text-[14px] 
                         font-extrabold h-[40px] text-white rounded-[6px]
                          md:w-[30%] md:rounded-[8px] md:text-[20px]
                           lg:text-[16px] lg:h-[38px] lg:my-[4%] disabled:bg-[#ccc]`}
                           onClick={() =>{
                         HandleNavigateLogin()
                           }}>Continue</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default RedirectModal;
