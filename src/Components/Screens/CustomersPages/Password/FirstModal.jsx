import React from 'react';
import { Modal } from '../../Modal/Modal';
import { Link, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import { ContextProvider } from "../../../Context";

const FirstModal = () => {
    const { setResetEmail } = useContext(ContextProvider);
    const [email, setEmail] = useState('');
    const [error, setError] = useState('')
    const [border, setBorder] = useState('');
    const [redirect, setRedirect] = useState(false);

    const handleSubmit =(event)=> {
      event.preventDefault();
      const regEx = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
        if (regEx.test(email)) {
            setRedirect(true);
            setResetEmail(email);
            setError('');
            setBorder('')
        } else {
          setRedirect(false);
          setBorder('border-red-500');
          setError('input a valid email address');
        }
    }
    if (redirect) {
        return <Navigate to={`/passwordReset`}/>
    };


  return (
    <div>
      <Modal>
      
        <div className="md:ml-[40%] md:-mt-[20%] lg:-mb-[30%] px-[17.609px] py-[35.536px] bg-white rounded-[10.3px] md:py-[34.96px] md:px-[17.6px] lg:py-[62px] lg:px-[31px]">
           <h2 className="text-[9.16px] leading-[13.74px] lg:text-[16px] lg:leading-[24px]">Input your email to reset password</h2>
           <form>
                <input type="email" className={`${border} w-[163.85px] lg:w-[276px] lg:px-[10px] lg:py-[12px] border mt-[3px] py-[6.9px] px-[5.71px] text-[9px] lg:text-[15px] rounded-[5px] focus:outline-none leading-normal`} value={email} onChange={(event)=>setEmail(event.target.value)} style={{boxShadow: `0px 0px 4px 0px rgba(0, 0, 0, 0.25)`}}/>
                <h2 className='text-red-500 text-[5.7px] text-center lg:text-[10px] leading-normal'>{error}</h2>
                <div className='flex justify-center my-[14.32px] lg:my-[35px]'>
                    <button className='py-[5.729px] px-[20.052px] border rounded-[4.583px] disabled:bg-[#ccc] font-bold text-white text-[6.875px] leading-normal bg-primary lg:py-[10px] lg:px-[35px] lg:text-[12px] lg:rounded-[8px]' disabled={!email} onClick={handleSubmit}>
                      Reset
                    </button>
                </div>
                <div className="flex justify-between items-center leading-normal'">
                    <h2 className='text-[#677A8C] text-xs lg:text-[14px]'>You need help?</h2>
                    <Link className='text-primary text-xs font-bold lg:text-[14px]' to={`/contactUs`}>Contact us</Link>
                </div>
           </form>
        </div>
      </Modal>
    </div>
  );
}

export default FirstModal;
