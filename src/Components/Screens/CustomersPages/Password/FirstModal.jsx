import React from 'react';
import { Modal } from '../../Modal/Modal';
import { Link, Navigate } from 'react-router-dom';
import { useState} from 'react';
import { useContext } from 'react';
import { ContextProvider } from "../../../Context";
import closeCircle from "../../../EducationPins/imagesEducation/close-circle.svg";

const FirstModal = () => {
    const { setResetEmail } = useContext(ContextProvider);
    const {inputForgetEmail, setInputForgetEmail} = useContext(ContextProvider);
    const [error, setError] = useState('')
    const [border, setBorder] = useState('');
    const [redirect, setRedirect] = useState(false);
    const {showModal, setShowModal} = useContext(ContextProvider);

    const handleSubmit =(event)=> {
      event.preventDefault();
      const regEx = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
        if (regEx.test(inputForgetEmail)) {
            setRedirect(true);
            setResetEmail(inputForgetEmail);
            setError('');
            setBorder('');
          //  setShowModal(!showModal);
          
        } else {
          setRedirect(false);
          setBorder('border-red-500');
          setError('input a valid email address');
        }
    }
if(redirect){
  return <Navigate to={'/passwordReset'}/>
}
return (
    <div>
   <Modal>
        <div className="w-full mx-[24px] h-[270px] lg:w-[450px] lg:h-[330px] md:ml-[42%] lg:ml-[38%] px-[17.19px] bg-white
         rounded-[10.3px] md:py-[34.96px] md:px-[17.6px] lg:py-[62px] lg:px-[31px] lg:gap-[20px] gap-[15px]  flex flex-col">
          <div 
          className='flex justify-end  items-center md:h-[40px] h-[60px] w-full'>
      <img onClick={()=>setShowModal(!showModal)} src={closeCircle} className='h-[25px] w-[25px]' alt="" />
          </div>
          <div className='flex flex-col items-center justify-start h-full'>
           <h2 className="text-xs lg:text-base lg:leading-[24px] mb-1">Input your email to reset password</h2>
           <form className='w-full'>
                <input type="email" className={`${border} mx-auto w-full lg:w-full lg:px-[10px] lg:py-[12px] border mt-[3px] p-2 text-xs lg:text-[15px] rounded-[5px] focus:outline-none leading-normal`} value={inputForgetEmail} onChange={(event)=>setInputForgetEmail(event.target.value)} style={{boxShadow: `0px 0px 4px 0px rgba(0, 0, 0, 0.25)`}} placeholder='enter email address'/>
                <h2 className='text-red-500 text-[5.7px] text-center lg:text-[10px] leading-normal italic'>{error}</h2>
                <div className='flex justify-center my-[30px] lg:my-[35px]'>
                    <button className='py-[5.729px] px-[20.052px] border rounded-[4.583px] disabled:bg-[#ccc] font-bold text-white text-xs leading-normal bg-primary lg:py-[10px] lg:px-[35px] lg:text-[12px] lg:rounded-[8px]' disabled={!inputForgetEmail} onClick={handleSubmit}>
                      Reset
                    </button>
                </div>
                <div className="flex justify-between items-center leading-normal">
                    <h2 className='text-[#677A8C] text-xs lg:text-[14px]'>You need help?</h2>
                    <Link className='text-primary text-xs font-bold lg:text-[14px]' to={`/contactUs`}>Contact us</Link>
                </div>
           </form>
           </div>
        </div>
      </Modal>
    </div>
  );
}

export default FirstModal;
