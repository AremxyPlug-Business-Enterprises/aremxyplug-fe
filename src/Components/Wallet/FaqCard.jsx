import React from 'react';
import {HiChevronDown} from 'react-icons/hi';
import {HiChevronUp} from 'react-icons/hi'

const FaqCard = ({faqItem: {question, answer}, onToggle, active}) => {
  return (
    <div className={`faq-item margin-y-sm button-curved ${active ? 'active' : ''} mb-5 rounded-[6px] lg:rounded-[11px] lg:mb-8`} style={{boxShadow:`0px 0px 11.495177268981934px 0px #00000040`}}>
      <div className="faq-question border rounded-[6px] lg:rounded-[11px] lg:h-[41.36px] h-[37px] px-1 gap-1 items-center lg:px-2 lg:py-2" onClick={onToggle} style={{boxShadow:`0px 0px 11.495177268981934px 0px #00000040`}}>
        <h2 className="text-[9.69px] text-center lg:text-[17px] font-bold">{question}</h2><span className='lg:text-2xl'>{active ? <HiChevronUp/> : <HiChevronDown/>}</span>
      </div>
      <div className={`faq-answer ${ active ? 'open' : ''}`}>
        <h3 className="text-[8.62px] px-2 py-3 lg:text-[15px] lg:px-3 lg:py-4">{answer}</h3>
      </div>
    </div>
  );
}

export default FaqCard;