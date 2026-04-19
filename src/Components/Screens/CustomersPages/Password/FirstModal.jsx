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
        <div className="w-full mx-[24px] h-[270px] py-5
         lg:w-[450px] lg:h-[330px] md:ml-[42%] lg:ml-[38%] px-[17.19px] bg-white
         rounded-[10.3px] md:py-[34.96px] md:px-[17.6px] lg:py-[62px] lg:px-[31px] lg:gap-[20px] gap-[15px]  flex flex-col">
          <div 
          className='flex justify-end  items-center md:h-[40px] h-[60px] w-full'>
      <img onClick={()=>setShowModal(!showModal)} src={closeCircle} className='h-[25px] w-[25px]' alt="" />
          </div>
          <div className='flex flex-col items-center justify-start h-full'>
           <h2   className={`text-[14px] lg:text-[17px] leading-[20px] lg:leading-[24px]
                       md:text-[13px]
                      md:font-[600] font-[400`}>
            Input your email to reset password
            </h2>
           <form className='w-full'>
                <input type="email"  className={`mt-2 ${border}  md:mt-0 rounded-[10px] 
             md:rounded-0  md:p-0 text-base
         sm:p-3  flex justify-between py-[8.803px]
         pr-[13px] pl-[10.876px] font-[400] 
         leading-[10.4px] md:text-[11px] md:leading-[12.206px] 
    lg:text-[16px] lg:leading-[20.8px] md:pt-[8.802px] md:pb-[7.042px] 
    md:pr-[5.282px] md:pl-[5.867px] lg:pt-[15px] lg:pb-[12px] lg:pr-[9px] lg:pl-[10px]  items-center cursor-pointer outline-0 border-[0.24px] lg:border-[0.4px] w-full h-[45.927px] md:h-[35px] lg:h-[50px] border-[#9C9C9C] px-[11px]
     md:px-[6px] lg:px-[10px] text-[#7C7C7C] self-center `} 
                 value={inputForgetEmail} 
                 onChange={(event)=>setInputForgetEmail(event.target.value)} style={{boxShadow: `0px 0px 4px 0px rgba(0, 0, 0, 0.25)`}} placeholder='enter email address'/>
                <h2 className='text-red-500 text-[5.7px] text-center lg:text-[10px] leading-normal italic'>{error}</h2>
                <div className='flex justify-center my-[30px] lg:my-[35px]'>
                    <button className='py-[16.729px] w-full px-[20.052px] border 
                    rounded-[4.583px] disabled:bg-[#ccc] font-bold text-white
                     text-xs leading-normal bg-primary md:w-[179px]
                     lg:px-[35px] lg:text-[12px] lg:rounded-[8px]' disabled={!inputForgetEmail} onClick={handleSubmit}>
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
