import React from 'react';
import { useState } from 'react';
import OTPInput, { ResendOTP } from "otp-input-react";
import { Navigate } from 'react-router-dom';
import tickGif from './tick.gif'
import { useContext } from 'react';
import { ContextProvider } from "../../../Context";

const SecondModal = ({value}) => {
    const { resetEmail } = useContext(ContextProvider);
    const [OTP, setOTP] = useState("");
    const presetNum = 123456;
    const [error, setError] = useState('');
    const [border, setBorder] = useState('border');
    const [submision, setSubmission] = useState(false);
    const [checked, setChecked] = useState(false);

    const [redirect, setRedirect] = useState(false);

    if (redirect) {
        return <Navigate to={`/newPassword`}/>
    }

    const renderButton = (buttonProps) => {
        return <button {...buttonProps} className='disabled:text-[#ccc] text-primary lg:text-sm text-xs'>Resend</button>
    }

    const renderTime =(remainingTime)=> {
        return <span className='lg:text-sm text-xs text-primary'>{remainingTime}</span>
    }
    const handleSubmit =(event)=> {
        event.preventDefault();
        if (+OTP !== presetNum) {
            setError('Incorrect verification code');
            setBorder('border border-red-500')
            setSubmission(false);
        } else {
            setError('');
            setBorder('');
            setSubmission(true);
        }
    }
    console.log(+OTP);
  return (
    <>
        {/* this is such that whatever is selected determines the kind of modal that shows and it contents */}
        { value === 'number' ?         
        <div className='bg-black/[0.48] fixed top-0 bottom-0 right-0 left-0 flex items-center justify-center z-50'>
            {/* if submision is true, it will display next content but if submission is not true then next content is not displayed. this prevents me from using two modals */}
            { submision ? 
                <div className="w-[285px] h-[190px] lg:w-[450px] lg:h-[280px] md:ml-[45%] px-[17.609px] py-[35.536px] bg-white rounded-[10.3px] md:py-[34.96px] md:px-[17.6px] lg:py-[62px] lg:px-[31px]">
                    <div className=''>
                        <div className="flex items-center justify-center mb-[14.32px]">
                            <h2 className='text-[8.02px] leading-normal lg:text-[14px]'>Your Password has been reset successfully.</h2>
                            <div className='w-[28.65px] h-[28.65px] flex justify-center items-center'>
                                <img src={tickGif} alt="success_tick"/>
                            </div>
                        </div>
                        <h2 className="text-[9.167px] font-bold leading-normal lg:text-[14px]">Create a New Password to Log in to your Account.</h2>
                        <div className='flex justify-center mt-[28.65px] lg:mt-[50px]'>
                            <button className='py-[5.729px] px-[20.052px] border rounded-[4.583px] disabled:bg-[#ccc] font-bold text-white text-[6.875px] leading-normal bg-primary lg:py-[10px] lg:px-[35px] lg:rounded-[8px] lg:text-[14px]' onClick={() => setRedirect(!redirect)}>Continue</button>
                        </div>
                    </div>
                </div> : 
                <div className="w-[285px] h-[240px] lg:w-[450px] lg:h-[330px] md:ml-[42%] lg:ml-[45%] lg:mt-[10%] px-[17.19px] pt-[30px] pb-[35px] bg-white rounded-[10.3px] md:px-[17.6px] lg:py-[62px] lg:px-[31px] flex flex-col gap-[41.32px]">
                    <h2 className="text-xs lg:text-[14px] lg:leading-normal">Verification code has been sent to your email - {resetEmail}</h2>               
                    <form>
                        <div className="lg:hidden">
                            <OTPInput 
                                value={OTP} 
                                onChange={setOTP}
                                autoFocus
                                OTPLength={6}
                                otpType="number"
                                disabled={false}
                                resendOTP={true}
                                inputClassName={`${border} rounded focus:outline-none p-[5px] text-[12px] `}
                                style={{justifyContent: 'space-between', display: 'flex'}}
                                inputStyles={{width: 30, height: 30, marginRight: 0}}
                            />
                        </div> 
                        <div className="hidden lg:block">
                            <OTPInput 
                                value={OTP} 
                                onChange={setOTP}
                                autoFocus
                                OTPLength={6}
                                otpType="number"
                                disabled={false}
                                resendOTP={true}
                                inputClassName={`${border} rounded focus:outline-none p-[5px] text-[12px]`}
                                style={{justifyContent: 'space-between', display: 'flex'}}
                                inputStyles={{width: 45, height: 45, marginRight: 0}}
                            />
                        </div>
                        <h2 className='text-red-500 text-[5.7px] text-center leading-normal lg:text-[10px] mt-[3px]'>{error}</h2>
                        <ResendOTP renderButton={renderButton} renderTime={renderTime}/>
                        <div className='flex justify-center mt-[20.65px]'>
                            <button className='py-[5.729px] px-[20.052px] border rounded-[4.583px] disabled:bg-[#ccc] font-bold text-white text-xs leading-normal bg-primary lg:py-[10px] lg:px-[35px] lg:text-[12px] lg:rounded-[8px]' disabled={OTP.length !==6 } onClick={handleSubmit}>Continue</button>
                        </div>
                    </form>
                </div>
            }
        </div> : 

        <div className='bg-black/[0.48] fixed top-0 bottom-0 right-0 left-0 flex items-center justify-center z-50'>
            {/* if checked is true, it will display next content but if submission is not true then next content is not displayed. this prevents me from using two modals */}
            { checked ? 
                <div className="w-[285px] h-[240px] lg:w-[450px] lg:h-[330px] md:ml-[44.5%] lg:ml-[45%] px-[17.609px] py-[35.536px] bg-white rounded-[10.3px] md:py-[34.96px] md:px-[17.6px] lg:py-[62px] lg:px-[31px]">
                    <div className=''>
                        <div className="flex items-center justify-center mb-[14.32px]">
                            <h2 className='text-[8.02px] leading-[13.74px] lg:text-[14px] lg:leading-[24px]'>Your Password has been reset successfully.</h2>
                            <div className='w-[28.65px] h-[28.65px] flex justify-center items-center'>
                                <img src={tickGif} alt="success_tick"/>
                            </div>
                        </div>
                        <h2 className="text-[9.167px] font-bold leading-normal lg:text-[14px]">Create a New Password to Log in to your Account.</h2>
                        <div className='flex justify-center mt-[28.65px] lg:mt-[50px]'>
                            <button className='py-[5.729px] px-[20.052px] border rounded-[4.583px] disabled:bg-[#ccc] font-bold text-white text-[6.875px] leading-normal bg-primary lg:py-[10px] lg:px-[35px] lg:rounded-[8px] lg:text-[14px]' onClick={() => setRedirect(!redirect)}>Continue</button>
                        </div>
                    </div>
                </div> : 
                <div className="w-[285px] h-[240px] lg:w-[450px] lg:h-[330px] md:ml-[45%] lg:ml-[45%] lg:mt-[10%] px-[17.19px] lg:px-[27px] bg-white rounded-[10.3px] md:py-[34.96px] md:px-[17.6px] flex items-center justify-center">
                    <div className=''>
                        <h2 className="text-[8.02px] leading-[13.74px] lg:text-[14px] lg:leading-[24px]">Your reset password link has been sent to your email. Please kindly confirm the link to reset your password.</h2>
                        <div className='flex justify-center mt-[28.65px] lg:mt-[50px]'>
                            <a href={`https://mail.google.com/mail/${resetEmail}`} target="_blank" rel="noopener noreferrer" className='py-[5.729px] px-[20.052px] border rounded-[4.583px] disabled:bg-[#ccc] font-bold text-white text-[6.875px] leading-normal bg-primary lg:py-[10px] lg:px-[35px] lg:text-[12px] lg:rounded-[8px]' onClick={() => setChecked(true)}>Check</a>
                        </div>
                    </div>
                </div>
            }
        </div>
        }
    </>
  );
}

export default SecondModal;
