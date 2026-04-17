import React from 'react'
import PaymentServiceHeader from './PaymentServiceHeader';
import banking from  './images/Banking.svg'
import onlineBanking from './images/Online money.svg'
import ImageHolder from './ImageHolder';
import PaymentCard from './PaymentCard';
import bgImg from './images/PaymentBg.avif';
import { Link } from 'react-router-dom';

const PaymentServices = () => {
  return (
    <div className='flex  flex-col pt-[15%] lg:pt-[5%] md:pt-[5%] w-full '>
      <PaymentServiceHeader/>
      <div className="w-full py-10 flex flex-col gap-[80px] bg-center
       bg-cover md:p-[20px] lg:p-[25px] md:gap-[120px] " style={{backgroundImage: `url(${bgImg})`}}>
        {/* row 1 start here*/}
        <div className="flex flex-col  gap-[80px] md:flex-row px-[5%] lg:gap-[127px] md:gap-[73.55px] md:text-left">
          <PaymentCard 
            title={'Wallet System'}
            message={'You can conveniently store, send, and receive money without any hassle by using our user-friendly wallet system.'}
          />
          <PaymentCard
            title={'Global Virtual Accounts'}
            message={'Try our global virtual accounts services today and experience hassle-free banking at your fingertips.'}
          />
        </div>
        {/* row 1 ends here */}

        {/* row 2 start here*/}
        <div className="flex justify-center">
          <ImageHolder image={banking}/>
        </div>
        {/* row 2 ends here */}

        {/* row 3  starts here*/}
        <div className="flex flex-col gap-[80px] 
        md:flex-row lg:gap-[127px] md:gap-[73.55px] px-[5%] md:text-left">
          <PaymentCard
            title={'Money Transfer'}
            message={'With our dependable money transfer services, you can send and receive money without any hassle.'}
          />
          <PaymentCard
            title={'Card Payment'}
            message={"Whether you're shopping online or in-store, our card payment solutions offer fast and hassle-free transactions."}
          />
        </div>
        {/* row 3 ends here */}

        {/* row-4 starts here */}
        <div className="w-full flex flex-col md:items-center gap-[80px] ">
      <PaymentCard 
            title={'International Payment'}
            message={'With our international payment structure, you can send and receive money from anywhere in the world.'}
          />
          <ImageHolder image={onlineBanking}/>
        </div>
        {/* row-4 ends here */}

        {/* cta link */}
       <div className='flex justify-center'>
             <Link to='/pricing'className='rounded-[7px] 
                          inline-block px-[25px] py-[12px] text-white font-bold 
                          text-[10px] leading-[11.31px] bg-primary md:px-[21px] 
                          lg:px-[37px] lg:py-[15px] lg:text-[14px] lg:leading-[16px]'>Explore Pricing</Link>
                        
                      </div>
      </div>
    </div>
  )
}

export default PaymentServices;
