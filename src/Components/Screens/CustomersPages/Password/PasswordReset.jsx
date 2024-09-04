import React from 'react';
import './bg.css'
import passBanner from './passwordBanner.svg';
import aremxyPlug from './aremxyPlug.svg'
import { Link, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { ContextProvider } from "../../../Context";
import { useEffect } from 'react';
import { useState } from 'react';
import SecondModal from './SecondModal';

const PasswordReset = () => {
    const { hideNavbar, setHideNavbar } = useContext(ContextProvider);
    const { resetEmail } = useContext(ContextProvider);
    const [selectNumber, setSelectNumber] = useState('');
    const [selectEmail, setSelectEmail] = useState('');
    const [select, setSelect] = useState(false);
    const [selectionType, setSelectionType] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleSubmitNumber = ()=> {
        setSelectNumber('07034445523');
        setSelect(true);
        setSelectionType('number');
    }

    const handleSubmitEmail =()=> {
        setSelectEmail('onome@gmail.com');
        setSelect(true);
        setSelectionType('email');
    }
    const handleSubmit =(event)=> {
        event.preventDefault();
        setShowModal(true);
    }
    
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

      if (!resetEmail) {
        return <Navigate to={'/Login'}/>
      }

  return (
    <>
        {/* tmobile screen view */}
        <div className='md:hidden h-[150vh] relative w-[100%] xl:w-[85%] md:mx-[unset]'>
            {showModal && <SecondModal value={selectionType} />}
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
                        <button className={selectionType === 'email' ? `text-[9.16px] py-[9.17px] px-[5px] rounded border-[#d166ff] border` : `text-[9.16px] py-[9.17px] px-[5px] rounded`} value={selectEmail} style={{boxShadow: `0px 0px 11.5px 0px rgba(0, 0, 0, 0.25)`}} onClick={handleSubmitEmail}>Send a verification link to my email- {resetEmail}</button>
                        <button className={selectionType === 'number' ? `text-[9.16px] py-[9.17px] px-[5px] rounded border-[#d166ff] border` : `text-[9.16px] py-[9.17px] px-[5px] rounded`} value={selectNumber} style={{boxShadow: `0px 0px 11.5px 0px rgba(0, 0, 0, 0.25)`}} onClick={handleSubmitNumber}>Send a verification code to email- {resetEmail}</button>
                    </div>
                    <div className='flex justify-center my-[14.32px] lg:my-[35px]'>
                        <button className='py-[5.729px] px-[20.052px] border rounded-[4.583px] disabled:bg-[#ccc] font-bold text-white text-[6.875px] leading-normal bg-primary lg:py-[10px] lg:px-[35px] lg:text-[12px] lg:rounded-[8px]' disabled={!select} onClick={handleSubmit}>Send</button>
                    </div>
                </div>
            </div>
        </div>
        {/* tab and large screen view */}
        <div className="hidden md:grid grid-cols-1 md:h-[150vh] lg:h-[150vh] relative">
            <div className="bg-primary"></div>
            <div className="bg-[#ffff]"></div>
            <div className="absolute left-0 top-0 right-0 bottom-0 grid grid-cols-2 px-[70px] items-center z-30">
                {showModal && <SecondModal value={selectionType}/>}
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
                            <button className={selectionType === 'email' ? `text-[9.16px] py-[9.17px] lg:text-[16px] px-[5px] rounded border-[#d166ff] border` : `text-[9.16px] py-[9.17px] lg:text-[16px] px-[5px] rounded`} value={selectEmail} style={{boxShadow: `0px 0px 11.5px 0px rgba(0, 0, 0, 0.25)`}} onClick={handleSubmitEmail}>Send a verification link to my email-{resetEmail}</button>
                            <button className={selectionType === 'number' ? `text-[9.16px] py-[9.17px] lg:text-[16px] px-[5px] rounded border-[#d166ff] border` : `text-[9.16px] py-[9.17px] lg:text-[16px] px-[5px] rounded`} value={selectNumber} style={{boxShadow: `0px 0px 11.5px 0px rgba(0, 0, 0, 0.25)`}} onClick={handleSubmitNumber}>Send a verification code to my email-{resetEmail}</button>
                        </div>
                        <div className='flex justify-center my-[14.32px] lg:my-[35px]'>
                            <button className='py-[5.729px] px-[20.052px] border rounded-[4.583px] disabled:bg-[#ccc] font-bold text-white text-[6.875px] lg:text-[12px]leading-normal bg-primary lg:py-[10px] lg:px-[35px] lg:text-[12px] lg:rounded-[8px]' disabled={!select} onClick={handleSubmit}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>

  );
}

export default PasswordReset;
