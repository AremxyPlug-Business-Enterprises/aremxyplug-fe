import React from 'react';
import './bg.css'
import passBanner from './passwordBanner.svg';
import aremxyPlug from './aremxyPlug.svg'
import { Link, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { ContextProvider } from "../../../Context";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Loader } from '../../../Loader/Loader';
import SecondModal from './SecondModal';
import { Modal } from '../../Modal/Modal';

const PasswordReset = () => {
    const { setHideNavbar } = useContext(ContextProvider);
   
    const {inputForgetEmail,
        forgetPassCountdown,
         setForgetPassCountdown,
           setForgetPassCanResend,
           submission, setSubmission
        } = useContext(ContextProvider);
  

    const [select, setSelect] = useState(false);
    const [selectionType, setSelectionType] = useState('');
    const [showSecondModal, setShowSecondModal] = useState(false);
   const [loading, setLoading] = useState(false)
 
   // TO SET THE VALUE TO OTP
    const handleSubmitNumber = ()=> {
        setSelect(true);
        setSelectionType('otp');
    }
 // TO SET THE VALUE TO LINK
  // const handleSubmitEmail =()=> {
  //       setSelect(true);
  //       setSelectionType('link');
  //   }

// FUNCTION TO START THRE COUNTDOWN TO RESND OTP

 useEffect(()=> {
   if (selectionType === "otp" && submission === false ) {
           let timer;
           if (forgetPassCountdown > 0  ) {
             timer = setInterval(() => {
               setForgetPassCountdown((prevCountdown) => {
                  if(prevCountdown > 1){
                    return prevCountdown -1
                  }else{
                     clearInterval(timer);
                    setForgetPassCanResend(true)
                  }
               }) 
             }, 1000);
         } else  {
             setForgetPassCanResend(true);
           }
          }
         
       },[selectionType === "otp",submission === false])
//console.log(forgetPassCountdown)


    const setNav = () => {
        setHideNavbar(true);
      };
    
    
      useEffect(() => {
        setNav();
        return () => {
          setHideNavbar(false);
        };
        // eslint-disable-next-line
      }, []);

      if (!inputForgetEmail) {
        return <Navigate to={'/Login'}/>
      }

// TO CHECK IF THE USER WANTS TO GET OTP VIA LINK OR OTP
const userForgetPasswordSystem = async(url, alertMessage)=>{
if(selectionType ==="otp"){
  url = "https://api.aremxyplug.com/api/v1/send-otp/resetpassword"
  alertMessage = "An otp has been sent to your email"
}else if(selectionType === "link"){
url = "https://api.aremxyplug.com/api/v1/forgot-password"
alertMessage = "A link has been sent to your email"
}
resetPasswordOtp(url, alertMessage)
}

// TO HANDLE IF THE API COMES TRUE
const handleSubmit =()=> {
    setShowSecondModal(true);
    setSubmission(false)
}



    // Getting both the Link and Otp reset password
const resetPasswordOtp = async(url, alertMessage)=> {
    setLoading(true);
   const body = {
    email : inputForgetEmail
   }
   if(!navigator.onLine) return alert("Kindly check your internet connection.")
   if(navigator.onLine){
    try{
    const response = await axios.post(url, body)
if(response.status === 200 || response.status ===  201){
 handleSubmit();
 alert(alertMessage)
} 
 }catch(error){
 if(error && error.response === undefined ){
        alert("Your internet connection is quite unstable.")
    }else if(error.response && error.response.status === 404){
  alert("User Account not found");
  } else if(error.response && error.response.status === 500){
    alert(`INTERNAL_SERVER_ERROR`)
  }else{
    alert(`ERROR: ${error.message}`)
   console.log(error)
  }
  }finally{
    setLoading(false);
    setForgetPassCountdown(60)
  }
}
}



if(inputForgetEmail?.length < 1){
  return window.location.href ="/Login"
}




// TO RESEND OTP FOR THE VERIFICATION UI

  return (
    <>
        {/* tmobile screen view */}
        <div className='md:hidden h-[150vh] relative w-[100%] xl:w-[85%] md:mx-[unset]'>
            {showSecondModal && <SecondModal value={selectionType}  userForgetPasswordSystem={userForgetPasswordSystem}/>}
            {loading && (
        <Modal>
          <Loader />
        </Modal>
      )}
            <div className='pt-[27%] pb-[33%] bg-primary'>
                <h2 className='text-white font-bold text-[18.33px] leading-[27.5px] text-center'>Welcome to AremxyPlug!</h2>
                <p className='text-white text-[9.17px] leading-[13.75px] text-center'>The one-stop shop solution for all your digital needs.</p>
                <div className="w-[80%] mx-auto h-auto">
                    <img src={passBanner} alt="pass_banner"/>
                </div>
            </div>
            <div className="relative w-[96%] h-[432px] mx-auto rounded-[14.33px] px-[32px] -mt-[80px] bg-white mb-[25%] flex items-center" style={{boxShadow: `0px 0px 11.5px 0px rgba(0, 0, 0, 0.25)`}}>
                <Link to={`/`} className="absolute top-[14.3px] left-[14.3px] w-[36.51px] h-[17.73px]">
                    <img src={aremxyPlug} alt="brand_logo" className='h-full w-full object-cover'/>
                </Link>
                <div className='w-full text-center flex flex-col gap-[28.65px]'>
                    <h2 className='text-[11.5px] font-bold leading-normal '>Reset Password</h2>
                    <h2 className='text-[9.16px] font-bold leading-normal'>Select how you want to reset your password ?</h2>
                    <div className='flex flex-col gap-[14.32px]'>
                        <button  onClick ={()=> {
                              alert("The reset Password via link to your email is disabled for now")
                            }}
                         className={selectionType === 'link' ? `text-[9.16px] py-[9.17px] px-[5px] rounded border-[#d166ff] border` : `text-[9.16px] py-[9.17px] px-[5px] rounded`}  style={{boxShadow: `0px 0px 11.5px 0px rgba(0, 0, 0, 0.25)`}} >Send a verification link to my email- {inputForgetEmail}</button>
                        <button className={selectionType === 'otp' ? `text-[9.16px] py-[9.17px] px-[5px] rounded border-[#d166ff] border` : `text-[9.16px] py-[9.17px] px-[5px] rounded`} style={{boxShadow: `0px 0px 11.5px 0px rgba(0, 0, 0, 0.25)`}} onClick={handleSubmitNumber}>Send a verification code to email- {inputForgetEmail}</button>
                    </div>
                    <div className='flex justify-center my-[14.32px] lg:my-[35px]'>
                        <button 
                       className={`bg-[#04177F] w-full flex justify-center
                         items-center mr-auto cursor-pointer text-[14px] 
                         font-extrabold h-[40px] text-white rounded-[6px]
                          md:w-[25%] md:rounded-[8px] md:text-[20px]
                           lg:text-[16px] lg:h-[38px] lg:my-[4%] disabled:bg-[#ccc]`} disabled={!select} onClick={userForgetPasswordSystem}>Send</button>
                    </div>
                </div>
            </div>
        </div>
        {/* tab and large screen view */}
        <div className="hidden md:grid grid-cols-1 md:h-[150vh] lg:h-[150vh] relative">
            <div className="bg-primary"></div>
            <div className="bg-[#ffff]"></div>
            <div className="absolute left-0 top-0 right-0 bottom-0 grid grid-cols-2 px-[70px] items-center z-30">
                {showSecondModal && <SecondModal value={selectionType}/>}
                {loading && (
        <Modal>
          <Loader />
        </Modal>
      )}
                <div className="h-[100%] md:mb-[-23%] lg:mb-[unset] flex flex-col md:justify-center items-center">
                    <div className="mt-[10px]">
                        <p className="text-[18.33px] lg:text-[32px] font-bold text-[#fff]">Welcome to AremxyPlug!{" "}</p>
                        <p className="text-[9.17px] lg:text-[16px] text-[#fff]">The one-stop shop solution for all your digital needs.</p>
                    </div>
                    <img src="./Images/login/loginImage.png" alt="background_image" className="w-[70%] md:w-[95%] xl:w-[75%] md:h-[15%] lg:h-[25%] xl:h-[35%] mt-[50px] "/>
                    <div className="md:mt-[20%] lg:mt-[unset] md:h-[25%] lg:h-[50%]  w-[100px] flex justify-center items-center "></div>
                </div>
                <div className="relative w-[347px] h-[432px] mx-auto lg:w-[606px] lg:h-[754px] rounded-[14.33px] px-[31px] lg:px-[60px] bg-white shadow-md lg:pb-[86.5px] lg:pt-[126.5px] flex flex-col justify-center">
                    <Link to={`/`} className="absolute top-[14.3px] left-[14.3px] w-[36.51px] h-[17.73px] lg:w-[63.73px] lg:h-[30.94px]">
                        <img src={aremxyPlug} alt="brand_logo" className='h-full w-full object-cover'/>
                    </Link>
                    <div className='w-full text-center flex flex-col gap-[28.65px] lg:gap-[50px]'>
                        <h2 className='text-[11.5px] font-bold leading-normal lg:text-[20px]'>Reset Password</h2>
                        <h2 className='text-[9.16px] font-bold leading-normal lg:text-[16px]'>Select how you want to reset your password ?</h2>
                        <div className='flex flex-col gap-[14.32px]'>
                            <button
                            onClick ={()=> {
                              alert("The reset Password via link to your email is disabled for now")
                            }}

                  className={selectionType === 'link' ? `text-[9.16px] py-[9.17px] lg:text-[16px] px-[5px] rounded border-[#d166ff] border` : `text-[9.16px] py-[9.17px] lg:text-[16px] px-[5px] rounded`}  style={{boxShadow: `0px 0px 11.5px 0px rgba(0, 0, 0, 0.25)`}} >
                    Send a verification link to my email-{inputForgetEmail}</button>
                            <button
                              className={selectionType === 'otp' ? `text-[9.16px] py-[9.17px] lg:text-[16px] 
                              px-[5px] rounded border-[#d166ff] border` : `text-[9.16px] py-[9.17px] lg:text-[16px] px-[5px] rounded`}  style={{boxShadow: `0px 0px 11.5px 0px rgba(0, 0, 0, 0.25)`}} onClick={handleSubmitNumber}>Send a verification code to my email-{inputForgetEmail}</button>
                        </div>
                        <div className='flex justify-center my-[14.32px] lg:my-[35px]'>
                            <button className={`bg-[#04177F] w-full flex justify-center
                         items-center mr-auto cursor-pointer text-[14px] 
                         font-extrabold h-[40px] text-white rounded-[6px]
                          md:w-[25%] md:rounded-[8px] md:text-[20px]
                           lg:text-[16px] lg:h-[38px] lg:my-[4%] disabled:bg-[#ccc]`} disabled={!select} onClick={userForgetPasswordSystem}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);
}

export default PasswordReset;
