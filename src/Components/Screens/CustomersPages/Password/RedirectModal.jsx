import React from 'react';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import tickGif from './tick.gif'

const RedirectModal = () => {
    const [redirect, setRedirect] = useState(false);

    if (redirect) {
        return <Navigate to={`/Login`}/>
    }

  return (
    <>
        <div className='bg-black/[0.48] fixed top-0 left-0 w-full h-full flex items-center justify-center z-50'>
            <div className="w-[258px] h-[186px] lg:w-[450px] lg:h-[450px] md:ml-[45%] lg:ml-[45%] px-[17.19px] bg-white rounded-[10.3px] md:py-[34.96px] md:px-[17.6px] lg:py-[62px] lg:px-[31px] flex items-center justify-center">
                <div className=''>
                    <div className="flex items-center justify-center mb-[14.32px] lg:mb-[25px]">
                        <h2 className='text-[8.02px] leading-normal lg:text-[14px]'>You have successfully created a new password.</h2>
                        <div className='w-[28.65px] h-[28.65px] flex justify-center items-center'>
                            <img src={tickGif} alt="success_tick"/>
                        </div>
                    </div>
                    <h2 className="text-[9.167px] font-bold leading-normal lg:text-[14px] text-center">Sign in to your account to start operations!</h2>
                    <div className='flex justify-center mt-[28.65px] lg:mt-[50px]'>
                        <button className='py-[5.729px] px-[20.052px] border rounded-[4.583px] disabled:bg-[#ccc] font-bold text-white text-[6.875px] bg-primary lg:py-[10px] lg:px-[35px] lg:text-[12px] lg:rounded-[8px] leading-normal' onClick={() => setRedirect(!redirect)}>Continue</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default RedirectModal;
