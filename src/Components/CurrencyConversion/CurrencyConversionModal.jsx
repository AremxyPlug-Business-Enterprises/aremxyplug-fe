import { Modal } from '../Screens/Modal/Modal';
import "../CurrencyConversion/currencyConversion.css";

const CurrencyConversionModal = ({title, image, onClick, tag}) => {
  return (
    <Modal>
      <div className="modal-content">
        <p className="text-center font-bold text-[10px] md:text-[12px] lg:text-[20px] py-2.5 lg:py-7 md:py-4">{title}</p>
        <p className="text-[#04177F] text-[10px] md:text-[12px] lg:text-[20px] text-center font-bold">{tag}</p>

        <div className="flex justify-center relative my-[28px] md:my-[25px] ">
          <div className='lg:h-[200px] md:w-[150px] lg:w-[204.4px] md:h-[150px] h-[100px]'>
            <img src={image} alt=""  className="h-full"/>
          </div>
        </div>
        <div className="mx-[6%] flex flex-col gap-[5px] pb-[5%]">
          <div className="text-[8px] font-extrabold float-right ml-[76%] md:ml-[70%] md:text-[12px] lg:text-[13px] lg:ml-[80%]">
            Coming soon...
          </div>
          <div onClick={onClick} className={`bg-[#04177f] cursor-pointer text-white text-[10px] h-[40px] rounded-[5px] flex items-center justify-center md:mx-auto md:w-[20%] md:h-[30px] md:text-[14px] lg:my-[3%] lg:h-[40px] lg:text-[20px] lg:w-[30%] lg:mx-auto`}>
            Okay
          </div>
        </div>
      </div> 
    </Modal>
  )
}

export default CurrencyConversionModal;