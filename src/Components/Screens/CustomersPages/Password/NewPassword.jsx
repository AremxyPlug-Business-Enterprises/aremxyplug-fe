import React from 'react';
import './bg.css'
import passBanner from './passwordBanner.svg';
import aremxyPlug from './aremxyPlug.svg'
import { Link } from 'react-router-dom';
import { useContext, useRef} from 'react';
import { ContextProvider } from "../../../Context";
import { useEffect } from 'react';
import { useState } from 'react';
import hideIcon from './eyeIcon2.png'
import showIcon from './eyeIcon1.png'
import RedirectModal from './RedirectModal';
import { Loader } from '../../../Loader/Loader';
import axios from 'axios';
import { BASE_URL } from '../../../../config';
import { Modal } from '../../Modal/Modal';
import { useLocation } from 'react-router-dom';
import { RemoveLocalStorage } from '../../../LocalStorage/LocalStorage';


const NewPassword = () => {
    const locationObj = useLocation()
  const pathname = locationObj.pathname
    const [passHide, setPassHide] = useState("password");
    const [password, setPassword] = useState('');
    const [passError, setPassError] = useState('')
    const [cpassword, setCpassword] = useState('');
    const [cpassHide, setCpassHide] = useState("password");
    const [submit, setSubmit] = useState(false);
    const [border, setBorder] = useState('');
    const [error, setError] = useState('')
    const { setHideNavbar, passwordAuthorisation, inputForgetEmail } = useContext(ContextProvider);
    const [loading , setLoading] = useState(false)

  const HandleValidityPasswordReset =()=> {
    const PasswordResetActiveValidity = localStorage.getItem("PasswordResetActive");
    const timeAllowedForReset = 300 * 1000;//5 minutes given to the user.
    const getCurrentDate =  Date.now();
  const checkPasswordResetValidity = 
   (getCurrentDate - PasswordResetActiveValidity) > timeAllowedForReset;
  
if(checkPasswordResetValidity === true){
    window.location.href="/Login";
}
  }

  



const updatePassword = async()=> {
     setLoading(true)
   const body ={
    password : password
   }
   try{
    const url = `${BASE_URL}/reset-password?email=${inputForgetEmail}`
    const response = await axios.patch(url, body, {headers : {"Authorization" : passwordAuthorisation}})
    if(response.status === 201 || response.status === 200){
        setBorder('');
        setSubmit(true);
    }
   }catch(error){
    if(error && error.response === undefined ){
        alert("Your internet connection is quite unstable.")
    }else if(error.response === 500 && error ){
        alert("INTERNAL_SERVER_ERROR")
     }else if(error.response === 404 && error){
        alert("ERROR","An error has occurred on your end")
     }else if(error.response === 403 && error){
        alert("Not Allowed")
     }else{
        alert("An unexpected error has occured.")
     }
   }finally{
    setLoading(false)
   }
}









    const setNav = () => {
        setHideNavbar(true);
      };
    

        let Interval = useRef();
      useEffect(() => {
      Interval.current  = setInterval(()=> {
      HandleValidityPasswordReset()
          
         return ()=> clearInterval(Interval.current);
  }, 30000);
        setNav();
        return () => {
          setHideNavbar(false);
        };
        // eslint-disable-next-line
      }, []);

      const handleSubmit = async(e)=> {
         e.preventDefault();
         const regEx = new RegExp(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[^a-zA-Z\d\s]).{8,}$/);
         if (!regEx.test(password)) {
            setBorder('border-red-500');
            setSubmit(false);
            setPassError('Password must have At least one alphabetical character, At least one digit, Contains at least one special character (e.g., !@#$%^&*) and Minimum length of 8 characters')
         } else if (password !== cpassword) {
            setBorder('border-red-500');
            setSubmit(false);
            setError('Passwords do not match!!!');
            setPassError('')
         } else{
            setError('');
            setPassError('')
            if(!navigator.onLine) return alert("Kindy check your internet connection.")
            if(navigator.onLine && localStorage.getItem("PasswordResetActive"))
            await updatePassword();
         }
      }

if(pathname === "/newPassword" && !localStorage.getItem("PasswordResetActive")){
    RemoveLocalStorage()
    return  window.location.href= "/Login";
    }

  return (
        <div>
            <>
                {/* mobile screen view  start here*/}
                <div className='md:hidden h-[150vh] relative w-[100%] xl:w-[85%] md:mx-[unset] '>
                    <div className='pt-[27%] pb-[33%] bg-primary'>
                        <h2 className='text-white font-bold text-[18.33px] leading-[27.5px] text-center'>Welcome to AremxyPlug!</h2>
                        <p className='text-white text-[9.17px] leading-[13.75px] text-center'>The one-stop shop solution for all your digital needs.</p>
                        <div className="w-[90%]  h-auto">
                            <img src={passBanner} alt="pass_banner"/>
                        </div>
                    </div>
                    <div className="relative w-[96%] h-[432px] mx-auto rounded-[14.33px] 
                    px-[32px] bg-white -mt-[32%] flex items-center justify-center" style={{boxShadow: `0px 0px 11.5px 0px rgba(0, 0, 0, 0.25)`}}>
                        <Link to={`/`} className="absolute top-[14.3px]  left-[14.3px] w-[36.51px] h-[17.73px]">
                            <img src={aremxyPlug} alt="brand_logo" className='h-full w-full object-cover'/>
                        </Link>
                        <div className="w-[100%]">
                            <h2 className='text-center text-[14.45px] leading-[18px] font-[600]
                             mb-[57.29px]'>Create a new password</h2>
                            <div className='my-[10px] flex flex-col gap-[10px] '>
                                <p className="text-[12.17px] md:text-[12.58px] font-[500]
                                  tracking-wider 
                                 leading-[16px]">Password</p>
                                <div className='relative w-[100%] h-[40.75px] lg:h-[50px] 
                                 rounded  flex items-center'>
                                    {passHide === 'password' ? (
                                        <img src={hideIcon} alt="icon" className="absolute right-2 w-[13.75px] lg:w-[24px] cursor-pointer" onClick={() => setPassHide("text")}/>
                                    ): 
                                    (
                                        <img src={showIcon} alt="icon" className="absolute right-2 w-[13.75px] lg:w-[24px] cursor-pointer" onClick={() => setPassHide("password")}/>
                                    )}
                                    <input className={`${border} border w-full h-full text-[11.93px] font-[400]
                                     md:text-[11.58px] lg:text-[16px] pl-[7.5px] leading-[15px] lg:leading-[24px]
                                     md:pl-[10px] pr-[40px] md:pr-[50px] rounded text-[#403f3f] outline-none py-1 lg:py-2`}
                                      type={passHide} value={password}
                                       onChange={(event) => setPassword(event.target.value)} placeholder='enter new password'/>
                                </div>
                                <h2 className='text-red-500 text-[10.7px] font-[400] text-center leading-normal mt-[3px] italic'>{passError}</h2>
                            </div>
                            <div className='flex flex-col gap-[10px]'>
                                <p className="text-[12px] font-[500] md:text-[12.58px]
                                 lg:text-[18px] lg:font-[600]  tracking-wider leading-[16px]">Confirm Password</p>
                                <div className='relative w-[100%] h-[40.75px] lg:h-[50px]  rounded  flex items-center'>
                                    {cpassHide === 'password' ? (
                                        <img src={hideIcon} alt="icon" className="absolute right-2 w-[13.75px] lg:w-[24px] cursor-pointer" onClick={() => setCpassHide("text")}/>
                                    ): 
                                    (
                                        <img src={showIcon} alt="icon" className="absolute right-2 w-[13.75px] lg:w-[24px] cursor-pointer" onClick={() => setCpassHide("password")}/>
                                    )}
                                    <input className={`${border} border w-full font-[400] h-full text-[11.93px]
                                     md:text-[11.58px] lg:text-[16px] pl-[7.5px] leading-[14px] lg:leading-[24px]
                                     md:pl-[10px] pr-[40px] md:pr-[50px] rounded text-[#403f3f] outline-none py-1 lg:py-2`}  
                                     type={passHide} value={cpassword} onChange={(event) => setCpassword(event.target.value)} placeholder='confirm password'/>
                                </div>
                                <h2 className='text-red-500 text-[10.7px] font-[400] text-center leading-normal mt-[3px] italic'>{error}</h2>
                            </div>
                            <div className='flex justify-center my-[30px] w-fll lg:my-[35px]'>
                                <button className={`bg-[#04177F] w-full flex justify-center
                         items-center mr-auto cursor-pointer text-[14px] 
                         font-extrabold h-[40px] text-white rounded-[6px]
                          md:w-[25%] md:rounded-[8px] md:text-[20px]
                           lg:text-[16px] lg:h-[38px] lg:my-[4%] disabled:bg-[#ccc]`} disabled={!password || !cpassword} onClick={handleSubmit}>Continue</button>
                            </div>
                        </div>
                    </div>
                    { submit && <RedirectModal/> }
                    {loading && (
        <Modal>
          <Loader />
        </Modal>
      )}
                </div>
                {/* mobile screen view ends here */}


                {/* tab and large screen view start here*/}
                <div className="hidden md:grid grid-cols-1 md:h-[150vh] lg:h-[150vh] relative">
                    <div className="bg-primary"></div>
                    <div className="bg-[#ffff]"></div>
                    <div className="absolute left-0 top-0 right-0 bottom-0 grid grid-cols-2 px-[70px] items-center z-30">
                        { submit && <RedirectModal/> }
                        <div className="h-[100%] md:mb-[-23%] lg:mb-[unset] flex flex-col md:justify-center items-center">
                            <div className="mt-[10px]">
                                <p className="text-[18.33px] lg:text-[32px] font-bold text-[#fff]">Welcome to AremxyPlug!{" "}</p>
                                <p className="text-[9.17px] lg:text-[16px] text-[#fff]">The one-stop shop solution for all your digital needs.</p>
                            </div>
                            <img src="./Images/login/loginImage.png" alt="background_image" className="w-[70%] md:w-[95%] xl:w-[75%] md:h-[15%] lg:h-[25%] xl:h-[35%] mt-[50px] "/>
                            <div className="md:mt-[20%] lg:mt-[unset] md:h-[25%] lg:h-[50%]  w-[100px] flex justify-center items-center "></div>
                        </div>
                        <div className="relative w-[347px] h-[432px] mx-auto lg:w-[606px]
                         lg:h-[754px] rounded-[14.33px] px-[31px] lg:px-[60px]
                          bg-white shadow-md lg:pb-[86.5px] lg:pt-[126.5px]
                           flex flex-col justify-center">
                            <Link to={`/`} className="absolute top-[14.3px] left-[14.3px] w-[36.51px] h-[17.73px] lg:w-[63.73px] lg:h-[30.94px]">
                                <img src={aremxyPlug} alt="brand_logo" className='h-full w-full object-cover'/>
                            </Link>
                             
                            <div className='flex flex-col gap-[20px]'>
                               <h2 className='text-center text-[11.45px] my-[10px] leading-normal 
                                font-[600] mb-[57.29px] lg:text-[20px]'>Create a new password</h2>
                                <div className=' flex flex-col md:gap-[10px] lg:gap-[15px]'>
                                    <p className="md:text-[12.58px] lg:text-[16px] font-[500]
                                     tracking-wider leading-normal">Password</p>
                                    <div className='relative w-[100%] h-[40.75px] lg:h-[45px]  rounded  flex items-center'>
                                        {passHide === 'password' ? (
                                            <img src={hideIcon} alt="icon" className="absolute right-2 w-[13.75px] lg:w-[24px] cursor-pointer" onClick={() => setPassHide("text")}/>
                                        ): 
                                        (
                                            <img src={showIcon} alt="icon" className="absolute right-2 w-[13.75px] lg:w-[24px] cursor-pointer" onClick={() => setPassHide("password")}/>
                                        )}
                                        <input className={`${border} border w-full h-full 
                                         md:text-[11.58px] lg:text-[16px] pl-[7.5px] font-[400]
                                         md:pl-[10px] pr-[40px] md:pr-[50px] rounded 
                                          text-[#403f3f] outline-none`} type={passHide} value={password} onChange={(event) => setPassword(event.target.value)} placeholder='enter new password'/>
                                            {passError && (
                                    <h2 className='absolute text-red-500 mt-[10px] text-[5.7px] text-center lg:text-[10px] leading-normal italic' >
                                        {passError}
                                        </h2>
                                    )}
                                    </div>
                                  
                                </div>
                                <div className='flex flex-col md:gap-[10px] lg:gap-[15px]'>
                                    <p className="text-[10.17px] md:text-[12.58px] lg:text-[18px]
                                     font-[500] tracking-wider leading-normal">Confirm Password</p>
                                    <div className='relative w-[100%] h-[40.75px] lg:h-[45px]  rounded  flex items-center'>
                                        {cpassHide === 'password' ? (
                                            <img src={hideIcon} alt="icon" className="absolute right-2 w-[13.75px] lg:w-[24px] cursor-pointer" onClick={() => setCpassHide("text")}/>
                                        ): 
                                        (
                                            <img src={showIcon} alt="icon" className="absolute right-2 w-[13.75px] lg:w-[24px] cursor-pointer" onClick={() => setCpassHide("password")}/>
                                        )}
                                        <input className={`${border} border w-full h-full text-[9.93px]
                                         md:text-[11.58px] lg:text-[16px] pl-[7.5px] lg:p-[12px]  font-[400]
                                         md:pl-[10px] pr-[40px] md:pr-[50px] rounded  text-[#403f3f] outline-none`} type={cpassHide} value={cpassword} onChange={(event) => setCpassword(event.target.value)} placeholder='confirm password'/>
                                    </div>
                                    <h2 className='text-red-500 text-[13px] font-[500] text-center lg:text-[10px] leading-normal italic'>{error}</h2>
                                </div>
                                <div className='flex justify-center my-[14.32px] w-[100%] lg:my-[35px]'>
                                    <button  className={`bg-[#04177F] w-full flex justify-center
                         items-center  cursor-pointer text-[14px] 
                         font-extrabold h-[40px] text-white rounded-[6px]
                          md:w-[25%] md:rounded-[8px] md:text-[20px]
                           lg:text-[16px] lg:h-[38px] lg:my-[4%] disabled:bg-[#ccc]`}
                           disabled={!password || !cpassword} onClick={handleSubmit}>Continue</button>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
                {/* tab and large screen view ends here */}
            </>
            {loading && (
        <Modal>
          <Loader />
        </Modal>
      )}
        </div>
  );
}

export default NewPassword;
