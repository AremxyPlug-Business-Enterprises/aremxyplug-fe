import { useState } from 'react';
import OtpInput from "react-otp-input";
import { Navigate } from 'react-router-dom';
import tickGif from './tick.gif'
import { useContext } from 'react';
import { ContextProvider } from "../../../Context";
import axios from 'axios';
import { Modal } from '../../Modal/Modal';
import { Loader } from '../../../Loader/Loader';

const SecondModal = ({value, userForgetPasswordSystem}) => {
    const { inputForgetEmail } = useContext(ContextProvider);
    const {otpSent, setOtpSent} = useContext(ContextProvider);
   // const {clickResend,setClickResend} = useContext(ContextProvider)

   const {forgetPassCountdown,
    forgetPassVerificationPinError, 
    setForgetPassVerificationPinError,
     setForgetPassCountdown,
      forgetPassCanResend,
       setForgetPassCanResend,
       submission, setSubmission,
      // passwordAuthorisation,
       setPasswordAuthorisation
    } = useContext(ContextProvider);
     const [loading, setLoading] = useState(false);
    const {checked, setChecked} = useContext(ContextProvider);
    const [redirect, setRedirect] = useState(false);

    if (redirect) {
        return <Navigate to={`/newPassword`}/>
    }
 
  const successVerifyPassword =()=> {
   setRedirect(true);
     setSubmission(null);
  }

const dateAsAtAllocation =  Date.now();



    const VerifyOtpFunction = async()=>{
        setLoading(true);
        const body = {
            otp : otpSent
        }
        try{
            const url =  `https://api.aremxyplug.com/api/v1/verify-otp/resetpassword?email=${inputForgetEmail}`
       const response = await axios.post(url,body,{ headers : {"Content-Type" : "application/json"}})
      
          if((response.status === 200 || response.status === 201)  && response.headers.hasAuthorization){
            const getAuthorisation = response.headers.get("Authorization");
 localStorage.setItem("PasswordResetActive", dateAsAtAllocation)
 alert("You are being redirected to a page where you reset your password, and have a limited time of 5 minutes, kindly make use of the allocated time or you will be redirected to the login.")
              setPasswordAuthorisation(getAuthorisation);
          successVerifyPassword();
          setOtpSent('');
          } 
        }catch(error){
          if( error.response  && error.response.status === 400 ){
            setForgetPassVerificationPinError(true);
          } if( error.response  && error.response.status === 404){
            alert(`ERROR: ${error.message}`,)
          }else if(error.response &&error.response.status === 500){
            alert("INTERNAL_SERVER_ERROR");
          }else{
            return ()=> <Navigate to ={`/newPassword`}/>
          }
        }finally{
          setLoading(false);
        }
        }
    

   // TO HANDLE RESEND OF OTP 
 const handleResendOTP = async()=> {
    await userForgetPasswordSystem();
    setForgetPassVerificationPinError(false);
    setOtpSent("")


    if(userForgetPasswordSystem){
        setForgetPassCountdown(60)
        setForgetPassCanResend(false)
    }
 }






  return (
    <>
        {/* this is such that whatever is selected determines the kind of modal that shows and it contents */}
        { value === 'otp' ?         
        <div className='bg-black/[0.48] fixed top-0 bottom-0 right-0 left-0 flex items-center lg:justify-end justify-center lg:pr-[170px] z-50 '>
            {/* if submision is true, it will display next content but if submission is not true then next content is not displayed. this prevents me from using two modals */}
            { submission ? 
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

                <div className="w-[100%] mx-[24px] flex flex-col lg:mx-[0px] 
                 rounded-[8.6px] h-auto bg-white py-6  lg:gap-[18px] p-4 lg:h-[301px] lg:w-[348px] lg:rounded-[15px]">
                    <p className="text-[12px] lg:text-[14px] font-[500] lg:font-[700] mb-[20px]">Verification code has been sent to your email - {inputForgetEmail?.length ?
                     `${inputForgetEmail?.slice(0,4)}******` : ""}</p>               
                    <div className=' flex flex-col  gap-[20px] lg:gap-[30px]'>
                        <div className="flex flex-col ">
                            <OtpInput 
                                value={otpSent} 
                                onChange={setOtpSent}
                                inputType='tel'
                                numInputs={6}
                                inputStyle={{
                                    color: "#403f3f",
                                    width: 35,
                                    height: 35,
                                    borderRadius: 3,
                                    columnGap : 7
                                  }}
                                  renderInput={(props) => (
                                    <input 
                                    type="password"
                                    {...props} className="inputOTP mx-[3px]  text-base" />
                                  )}/>
                          
                      
                      
                        {forgetPassVerificationPinError === true ? (
                    <p className="text-center text-[12px] lg:text-[14px] lg:leading-[18px] font-bold text-red-500 md:font-[500]
                      mt-[3px] lg:mt-[15px]">
                     Incorrect otp provided
                    </p>
                  ) : (
                    ""
                  )}
      </div>

 <div className="w-[100%] flex justify-between">
                    <p className="text-[#04177F] font-[400] lg:font-[600] text-[10.729px] lg:text-[12px]">
                      {forgetPassCountdown}
                      <span>sec</span>
                    </p>
                    {forgetPassCanResend ? (
                      <p
                        className="text-[#04177F] font-[400] lg:font-[600] text-[10.729px] lg:text-[12px] cursor-pointer"
                        onClick={handleResendOTP}
                      >
                        Resend OTP
                      </p>
                    ) : (
                      <p className="text-gray-400 font-[400] lg:font-[600] text-[10.729px] lg:text-[12px] cursor-not-allowed">
                        Resend OTP
                      </p>
                    )}
                  </div>
            

     <button
     onClick={VerifyOtpFunction}
          disabled={ otpSent.length < 6 ? true : false}
          className={`${
             otpSent.length < 6 ? "bg-[#0003]" : "bg-[#04177f]"
          } inline-flex justify-center items-center text-[#fff] text-center font-bold
                 w-full py-[20px] text-[14px] leading-[18px] rounded-[4px]
                  lg:text-[14px] lg:leading-[24px] lg:py-[5px]  lg:w-[140px] 
                   lg:rounded-[7px] lg:px-[37px]
`}
        >
          Continue
        </button>
                    </div>
                    {loading && (
        <Modal>
          <Loader />
        </Modal>
      )}
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
                            <a href={`https://mail.google.com/mail/${inputForgetEmail}`} target="_blank" rel="noopener noreferrer" className='py-[5.729px] px-[20.052px] border rounded-[4.583px] disabled:bg-[#ccc] font-bold text-white text-[6.875px] leading-normal bg-primary lg:py-[10px] lg:px-[35px] lg:text-[12px] lg:rounded-[8px]' onClick={() => setChecked(true)}>Check</a>
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
