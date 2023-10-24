import React from 'react';
import './bg.css'
import passBanner from './passwordBanner.svg';
import aremxyPlug from './aremxyPlug.svg'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ContextProvider } from "../../../Context";
import { useEffect } from 'react';
import { useState } from 'react';
import hideIcon from './eyeIcon2.png'
import showIcon from './eyeIcon1.png'
import RedirectModal from './RedirectModal';

const NewPassword = () => {
    const [passHide, setPassHide] = useState("password");
    const [password, setPassword] = useState('');
    const [passError, setPassError] = useState('')
    const [cpassword, setCpassword] = useState('');
    const [cpassHide, setCpassHide] = useState("password");
    const [submit, setSubmit] = useState(false);
    const [border, setBorder] = useState('');
    const [error, setError] = useState('')
    const { hideNavbar, setHideNavbar } = useContext(ContextProvider);

    const setNav = () => {
        setHideNavbar(true);
      };
      console.log(hideNavbar);
    
      useEffect(() => {
        setNav();
        return () => {
          setHideNavbar(false);
        };
        // eslint-disable-next-line
      }, []);

      const handleSubmit =(event)=> {
         event.preventDefault();
         const regEx = new RegExp(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[^a-zA-Z\d\s]).{8,}$/);
         if (!regEx.test(password)) {
            setBorder('border-red-500');
            setSubmit(false);
            setPassError('Password must have At least one alphabetical character, At least one digit, Contains at least one special character (e.g., !@#$%^&*) and Minimum length of 8 characters')
         } else if (password !== cpassword) {
            setBorder('border-red-500');
            setSubmit(false);
            setError('Passwords do not match!!!')
         } else {
            setBorder('');
            setSubmit(true);
         }
      }
  return (
        <div>
            <>
                {/* mobile screen view  start here*/}
                <div className='md:hidden h-[150vh] relative w-[100%] xl:w-[85%] md:mx-[unset] '>
                    <div className='pt-[27%] pb-[33%] bg-primary'>
                        <h2 className='text-white font-bold text-[18.33px] leading-[27.5px] text-center'>Welcome to AremxyPlug!</h2>
                        <p className='text-white text-[9.17px] leading-[13.75px] text-center'>The one-stop shop solution for all your digital needs.</p>
                        <div className="w-[80%] mx-auto h-auto">
                            <img src={passBanner} alt="pass_banner"/>
                        </div>
                    </div>
                    <div className="relative w-[96%] h-[432px] mx-auto rounded-[14.33px] px-[32px] bg-white -mt-[32%] flex items-center justify-center" style={{boxShadow: `0px 0px 11.5px 0px rgba(0, 0, 0, 0.25)`}}>
                        <Link to={`/`} className="absolute top-[14.3px] left-[14.3px] w-[36.51px] h-[17.73px]">
                            <img src={aremxyPlug} alt="brand_logo" className='h-full w-full object-cover'/>
                        </Link>
                        <div className='w-[90%] mx-auto'>
                            <h2 className='text-center text-[11.45px] leading-normal font-[600] mb-[57.29px]'>Create a new password</h2>
                            <div className='my-[10px]'>
                                <p className="text-[9.17px] md:text-[11.58px] lg:text-[16px] font-[600] lg:mb-[10px] tracking-wider leading-normal">Password</p>
                                <div className='relative w-[100%] h-[22.75px] lg:h-[39px]  rounded  flex items-center'>
                                    {passHide === 'password' ? (
                                        <img src={hideIcon} alt="icon" className="absolute right-2 w-[13.75px] lg:w-[24px] cursor-pointer" onClick={() => setPassHide("text")}/>
                                    ): 
                                    (
                                        <img src={showIcon} alt="icon" className="absolute right-2 w-[13.75px] lg:w-[24px] cursor-pointer" onClick={() => setPassHide("password")}/>
                                    )}
                                    <input className={`${border} border w-full h-full text-[8.93px] md:text-[11.58px] lg:text-[20px] pl-[7.5px] md:pl-[10px] pr-[40px] md:pr-[50px] rounded text-[#403f3f] outline-none py-1 lg:py-2`} type={passHide} value={password} onChange={(event) => setPassword(event.target.value)} placeholder='enter new password'/>
                                </div>
                                <h2 className='text-red-500 text-[5.7px] text-center leading-normal mt-[3px] italic'>{passError}</h2>
                            </div>
                            <div className=''>
                                <p className="text-[9.17px] md:text-[11.58px] lg:text-[16px] font-[600] lg:mb-[10px] tracking-wider leading-normal">Confirm Password</p>
                                <div className='relative w-[100%] h-[22.75px] lg:h-[39px]  rounded  flex items-center'>
                                    {cpassHide === 'password' ? (
                                        <img src={hideIcon} alt="icon" className="absolute right-2 w-[13.75px] lg:w-[24px] cursor-pointer" onClick={() => setCpassHide("text")}/>
                                    ): 
                                    (
                                        <img src={showIcon} alt="icon" className="absolute right-2 w-[13.75px] lg:w-[24px] cursor-pointer" onClick={() => setCpassHide("password")}/>
                                    )}
                                    <input className={`${border} border w-full h-full text-[8.93px] md:text-[11.58px] lg:text-[20px] pl-[7.5px] md:pl-[10px] pr-[40px] md:pr-[50px] rounded text-[#403f3f] outline-none py-1 lg:py-2`} type={passHide} value={cpassword} onChange={(event) => setCpassword(event.target.value)} placeholder='confirm password'/>
                                </div>
                                <h2 className='text-red-500 text-[5.7px] text-center leading-normal mt-[3px] italic'>{error}</h2>
                            </div>
                            <div className='flex justify-center my-[30px] lg:my-[35px]'>
                                <button className='py-[5.729px] px-[20.052px] border rounded-[4.583px] disabled:bg-[#ccc] font-bold text-white text-[10px] leading-normal bg-primary lg:py-[10px] lg:px-[35px] lg:text-[12px] lg:rounded-[8px]' disabled={!password || !cpassword} onClick={handleSubmit}>Continue</button>
                            </div>
                        </div>
                    </div>
                    { submit && <RedirectModal/> }
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
                        <div className="relative w-[347px] h-[432px] mx-auto lg:w-[606px] lg:h-[754px] rounded-[14.33px] px-[31px] lg:px-[60px] bg-white shadow-md lg:pb-[86.5px] lg:pt-[126.5px] flex flex-col justify-center">
                            <Link to={`/`} className="absolute top-[14.3px] left-[14.3px] w-[36.51px] h-[17.73px] lg:w-[63.73px] lg:h-[30.94px]">
                                <img src={aremxyPlug} alt="brand_logo" className='h-full w-full object-cover'/>
                            </Link>
                            <div className=''>
                                <h2 className='text-center text-[11.45px] leading-normal font-[600] mb-[57.29px] lg:text-[20px]'>Create a new password</h2>
                                <div className='my-[10px]'>
                                    <p className="text-[9.17px] md:text-[11.58px] lg:text-[16px] font-[600] lg:mb-[10px] tracking-wider leading-normal">Password</p>
                                    <div className='relative w-[100%] h-[22.75px] lg:h-[39px]  rounded  flex items-center'>
                                        {passHide === 'password' ? (
                                            <img src={hideIcon} alt="icon" className="absolute right-2 w-[13.75px] lg:w-[24px] cursor-pointer" onClick={() => setPassHide("text")}/>
                                        ): 
                                        (
                                            <img src={showIcon} alt="icon" className="absolute right-2 w-[13.75px] lg:w-[24px] cursor-pointer" onClick={() => setPassHide("password")}/>
                                        )}
                                        <input className={`${border} border w-full h-full text-[8.93px] md:text-[11.58px] lg:text-[20px] pl-[7.5px] md:pl-[10px] pr-[40px] md:pr-[50px] rounded  text-[#403f3f] outline-none`} type={passHide} value={password} onChange={(event) => setPassword(event.target.value)} placeholder='enter new password'/>
                                    </div>
                                    <h2 className='text-red-500 text-[5.7px] text-center lg:text-[10px] leading-normal italic' >{passError}</h2>
                                </div>
                                <div className=''>
                                    <p className="text-[9.17px] md:text-[11.58px] lg:text-[16px] font-[600] lg:mb-[10px] tracking-wider leading-normal">Confirm Password</p>
                                    <div className='relative w-[100%] h-[22.75px] lg:h-[39px]  rounded  flex items-center'>
                                        {cpassHide === 'password' ? (
                                            <img src={hideIcon} alt="icon" className="absolute right-2 w-[13.75px] lg:w-[24px] cursor-pointer" onClick={() => setCpassHide("text")}/>
                                        ): 
                                        (
                                            <img src={showIcon} alt="icon" className="absolute right-2 w-[13.75px] lg:w-[24px] cursor-pointer" onClick={() => setCpassHide("password")}/>
                                        )}
                                        <input className={`${border} border w-full h-full text-[8.93px] md:text-[11.58px] lg:text-[20px] pl-[7.5px] lg:p-[12px] md:pl-[10px] pr-[40px] md:pr-[50px] rounded  text-[#403f3f] outline-none`} type={cpassHide} value={cpassword} onChange={(event) => setCpassword(event.target.value)} placeholder='confirm password'/>
                                    </div>
                                    <h2 className='text-red-500 text-[5.7px] text-center lg:text-[10px] leading-normal italic'>{error}</h2>
                                </div>
                                <div className='flex justify-center my-[14.32px] lg:my-[35px]'>
                                    <button className='py-[5.729px] px-[20.052px] border rounded-[4.583px] disabled:bg-[#ccc] font-bold text-white text-[6.875px] leading-normal bg-primary lg:py-[10px] lg:px-[35px] lg:text-[12px] lg:rounded-[8px]' disabled={!password || !cpassword} onClick={handleSubmit}>Continue</button>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
                {/* tab and large screen view ends here */}
            </>
        </div>
  );
}

export default NewPassword;
