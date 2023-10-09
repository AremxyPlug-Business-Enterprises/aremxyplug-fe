import React from 'react';
import { DashBoardLayout } from '../Dashboard/Layout/DashBoardLayout';
import { useState } from 'react'
import WalletModal from '../Wallet/WalletModal'
import { Link } from 'react-router-dom'

const AirtimeTopUp = () => {
    const [activeTab, setActiveTab] = useState('tab_1');
    const [showRoll, setShowRoll] = useState(false);
    const [showVoucher, setShowVoucher] = useState(false);
    const [showSchedule, setShowSchedule] = useState(false);
    const [showBulk, setShowBulk] = useState(false);
    const active = 'md:text-[12px] md:leading-[18px] lg:text-[20px] lg:leading-[30px] lg:w-[248px] md:w-[145.5px] md:h-[23px] lg:h-[50px] md:flex md:justify-center md:items-center md:flex-none bg-[#E2F3FF] flex-1 text-[8px] leading-[12px] text-center py-1 border-b-2 border-primary rounded-[3px]';
    const inactive = 'md:text-[12px] md:leading-[18px] lg:text-[20px] lg:leading-[30px] lg:w-[248px] md:w-[145.5px] md:h-[23px] lg:h-[50px] md:flex md:justify-center md:items-center md:flex-none flex-1 text-[8px] leading-[12px] text-center py-1'

    const handleTab1 =()=> {
        setActiveTab('tab_1')
    }

    const handleTab2 =()=> {
        setActiveTab('tab_2')
    }
    
    const TabOneItem =({title,text, icon, link, onClick})=> {
        return (
            <Link className=' lg:h-[90px] border flex justify-between items-center py-[3px] md:py-[8px] md:pl-[8px] pl-[3px] lg:pl-[15px] pr-4 rounded-[7px]' to={link} onClick={onClick} style={{boxShadow: `0px 0px 2.347222328186035px 0px rgba(0, 0, 0, 0.25)`}}>
                <div className='flex gap-1 items-center md:gap-2'>
                    <div className='lg:w-6 lg:h-6 w-4 h-4'>
                        <img src={icon} alt="" className='w-full h-full'/>
                    </div>
                    <div className='w-[221px] lg:w-[661px] md:w-[500px]'>
                        <h2 className='mb-1 text-[9px] leading-[13.5px] lg:text-[16px] lg:leading-[24px] font-semibold'>{title}</h2>
                        <p className='text-[8px] leading-[12px] lg:text-[14px] lg:leading-[21px] md:text-[9px] md:leading-[13.5px]'>{text}</p>
                    </div>
                </div>
                <div className='lg:w-6 lg:h-6 w-4 h-4'>
                    <img src='./Images/wallet/arrow-square-right.svg' alt="" className='h-full'/>
                </div>
            </Link>
        )
    }
  return (
    <DashBoardLayout>
        <div className="flex flex-col justify-between h-full">
            <div>
                <div className="h-[65.33px] md:h-[112.29px] lg:h-[196px] rounded-[7px] md:rounded-[11.5px] w-full">
                    <img src="./Images/airtimeTopUp/blue_banner.png" alt="" className='w-full h-full'/>
                </div>
                <div className='my-[20px] lg:my-[80px] md:my-[40px] flex gap-1'>
                    <h2 className='text-[8.62px] lg:text-[15px]'>Select Airtime Type</h2>
                    <div className='lg:w-6 lg:h-6 w-4 h-4'>
                        <img src='./Images/wallet/arrow-square-right.svg' alt="" className='h-full'/>
                    </div>
                </div>
                <ul className='flex items-center w-full mb-6 border-b md:mb-8'>
                    <li className={activeTab === 'tab_1' ? active : inactive} onClick={handleTab1}>Local Airtime</li>
                    <li className={activeTab === 'tab_2' ? active : inactive} onClick={handleTab2}>International Airtime</li>
                </ul>
                <div className=''>
                    { activeTab === 'tab_1' ? 
                        <div className='flex flex-col gap-[20px]'>
                           <TabOneItem
                             title='Airtime VTU'
                             text='Top up your mobile sim using our automated airtime vending directly from network providers.'
                             link='/airtime-vtu'
                             onClick='/airtime-vtu'
                             icon='./Images/airtimeTopUp/simcard.svg'
                           />
                            <TabOneItem
                             title='Airtime Roll'
                             text='Add, manage, and send airtime to your team or employees without any hassle.'
                             link=''
                             onClick={()=> setShowRoll(true)}
                             icon='./Images/airtimeTopUp/people.svg'
                           />
                            <TabOneItem
                             title='Airtime Voucher'
                             text='Generate all networks airtime token / pins and recharge your mobile sim directly using ussd codes.'
                             link=''
                             onClick={()=> setShowVoucher(true)}
                             icon='./Images/airtimeTopUp/document-code-2.svg'
                           />
                            <TabOneItem
                             title='Airtime Schedule'
                             text='Schedule sending of airtime for automatic vending to recipients at your specified date and time.'
                             link=''
                             onClick={()=> setShowSchedule(true)}
                             icon='./Images/airtimeTopUp/timer-pause.svg'
                           />
                            <TabOneItem
                             title='Bulk Airtime'
                             text='Send airtime to multiple recipients at a time and receive instantly without any hassle.'
                             link=''
                             onClick={()=> setShowBulk(true)}
                             icon='./Images/airtimeTopUp/math.svg'
                           />
                        </div> :
                        <div></div>
                    }
                    { activeTab === 'tab_2' && 
                        <WalletModal>
                            <div className='rounded-[8px] h-[250px] relative lg:rounded-[11.5px] md:rounded-[6px] flex flex-col justify-between' >
                                <h2 className='text-center text-[10px] leading-[15px] mb-[30px] md:text-[12px] md:leading-[18px] lg:text-base lg:leading-[24px]'>International Airtime.</h2>
                                <h2 className='text-center text-[10px] leading-[15px] mb-[10px] font-semibold md:text-[12px] md:leading-[18px] lg:text-base lg:leading-[24px] text-primary'>This Feature is Currently Not Available.</h2>
                                <div className='flex justify-center items-center mt-[8%] lg:mt-[5%]'>
                                    <div className='w-[170px] lg:w-[270px] lg:h-[220px] mb-[5%] md:mb-0'>
                                        <img src="./Images/airtimeTopUp/international-airtime.png" alt="" className='w-full'/>
                                    </div>
                                </div>
                                <div className='w-[100%] md:flex md:flex-row-reverse bottom-[0px] md:gap-[20px] lg:w-[93%] lg:gap-[30px] flex-col md:justify-center' >
                                    <h2 className='w-full md:w-fit text-right text-[10px] leading-[15px] py-[10px] md:text-[12px] md:leading-[18px] lg:text-base lg:leading-[24px]'>Coming soon...</h2>
                                    <button className='w-full text-[10px] md:w-fit leading-[15px] bg-primary px-[28.6px] py-[10px] text-white rounded-[7px] md:text-[12px] md:leading-[18px] lg:text-base lg:leading-[24px]' onClick={handleTab1}>Okay</button>
                                </div>
                            </div>
                        </WalletModal>
                    }
                    { showRoll && 
                        <WalletModal>
                            <div className='rounded-[8px] relative lg:rounded-[11.5px] md:rounded-[6px] flex-col justify-between' >
                                <h2 className='mb-3 text-center text-[10px] leading-[15px] md:text-[12px] md:leading-[18px] lg:text-base lg:leading-[24px] md:mb-[20px] '>Airtime Roll.</h2>
                                <h2 className='text-center text-[10px] leading-[15px] font-semibold md:text-[12px] md:leading-[18px] lg:text-base lg:leading-[24px] text-primary'>This Feature is Currently Not Available.</h2>
                                <div className='flex justify-center items-center my-[4%] lg:mt-[10%]'>
                                    <div className='h-[140px] lg:h-[180px] md:h-[120px]'>
                                        <img src="./Images/airtimeTopUp/airtime-roll.png" alt="" className='mx-auto h-full'/>
                                    </div>
                                </div>
                                <div className='w-[100%] md:flex md:flex-row-reverse md:gap-[20px] lg:gap-[30px] flex-col md:justify-center' >
                                    <h2 className='w-full md:w-fit text-right text-[10px] leading-[15px] py-[10px] md:text-[12px] md:leading-[18px] lg:text-base lg:leading-[24px]'>Coming soon...</h2>
                                    <button className='w-full text-[10px] md:w-fit leading-[15px] bg-primary px-[28.6px] py-[10px] text-white rounded-[7px] md:text-[12px] md:leading-[18px] lg:text-base lg:leading-[24px]' onClick={()=>setShowRoll(false)}>Okay</button>
                                </div>
                            </div>
                        </WalletModal>
                    }
                    { showVoucher && 
                        <WalletModal>
                            <div className='rounded-[8px] relative lg:rounded-[11.5px] md:rounded-[6px] flex-col justify-between' >
                                <h2 className='mb-3 text-center text-[10px] leading-[15px] md:text-[12px] md:leading-[18px] lg:text-base lg:leading-[24px] md:mb-[20px] '>Airtime Voucher.</h2>
                                <h2 className='text-center text-[10px] leading-[15px] font-semibold md:text-[12px] md:leading-[18px] lg:text-base lg:leading-[24px] text-primary'>This Feature is Currently Not Available.</h2>
                                <div className='flex justify-center items-center my-[4%] lg:mt-[10%]'>
                                    <div className='h-[140px] lg:h-[180px] md:h-[120px]'>
                                        <img src="./Images/airtimeTopUp/airtime-voucher.png" alt="" className='mx-auto h-full'/>
                                    </div>
                                </div>
                                <div className='w-[100%] md:flex md:flex-row-reverse md:gap-[20px] lg:gap-[30px] flex-col md:justify-center' >
                                    <h2 className='w-full md:w-fit text-right text-[10px] leading-[15px] py-[10px] md:text-[12px] md:leading-[18px] lg:text-base lg:leading-[24px]'>Coming soon...</h2>
                                    <button className='w-full text-[10px] md:w-fit leading-[15px] bg-primary px-[28.6px] py-[10px] text-white rounded-[7px] md:text-[12px] md:leading-[18px] lg:text-base lg:leading-[24px]' onClick={()=>setShowVoucher(false)}>Okay</button>
                                </div>
                            </div>
                        </WalletModal>
                    }
                    { showSchedule && 
                        <WalletModal>
                            <div className='rounded-[8px] relative lg:rounded-[11.5px] md:rounded-[6px] flex-col justify-between' >
                                <h2 className='mb-3 text-center text-[10px] leading-[15px] md:text-[12px] md:leading-[18px] lg:text-base lg:leading-[24px] md:mb-[20px] '>Airtime Schedule.</h2>
                                <h2 className='text-center text-[10px] leading-[15px] font-semibold md:text-[12px] md:leading-[18px] lg:text-base lg:leading-[24px] text-primary'>This Feature is Currently Not Available.</h2>
                                <div className='flex justify-center items-center my-[4%] lg:mt-[10%]'>
                                    <div className='h-[140px] lg:h-[180px] md:h-[120px]'>
                                        <img src="./Images/airtimeTopUp/airtime-schedule.png" alt="" className='mx-auto h-full'/>
                                    </div>
                                </div>
                                <div className='w-[100%] md:flex md:flex-row-reverse md:gap-[20px] lg:gap-[30px] flex-col md:justify-center' >
                                    <h2 className='w-full md:w-fit text-right text-[10px] leading-[15px] py-[10px] md:text-[12px] md:leading-[18px] lg:text-base lg:leading-[24px]'>Coming soon...</h2>
                                    <button className='w-full text-[10px] md:w-fit leading-[15px] bg-primary px-[28.6px] py-[10px] text-white rounded-[7px] md:text-[12px] md:leading-[18px] lg:text-base lg:leading-[24px]' onClick={()=>setShowSchedule(false)}>Okay</button>
                                </div>
                            </div>
                        </WalletModal>
                    }
                    { showBulk && 
                        <WalletModal>
                            <div className='rounded-[8px] relative lg:rounded-[11.5px] md:rounded-[6px] flex-col justify-between' >
                                <h2 className='mb-3 text-center text-[10px] leading-[15px] md:text-[12px] md:leading-[18px] lg:text-base lg:leading-[24px] md:mb-[20px] '>Bulk Airtime.</h2>
                                <h2 className='text-center text-[10px] leading-[15px] font-semibold md:text-[12px] md:leading-[18px] lg:text-base lg:leading-[24px] text-primary'>This Feature is Currently Not Available.</h2>
                                <div className='flex justify-center items-center my-[4%] lg:mt-[10%]'>
                                    <div className='h-[140px] lg:h-[180px] md:h-[120px]'>
                                        <img src="./Images/airtimeTopUp/bulk-airtime.png" alt="" className='mx-auto h-full'/>
                                    </div>
                                </div>
                                <div className='w-[100%] md:flex md:flex-row-reverse md:gap-[20px] lg:gap-[30px] flex-col md:justify-center' >
                                    <h2 className='w-full md:w-fit text-right text-[10px] leading-[15px] py-[10px] md:text-[12px] md:leading-[18px] lg:text-base lg:leading-[24px]'>Coming soon...</h2>
                                    <button className='w-full text-[10px] md:w-fit leading-[15px] bg-primary px-[28.6px] py-[10px] text-white rounded-[7px] md:text-[12px] md:leading-[18px] lg:text-base lg:leading-[24px]' onClick={()=>setShowBulk(false)}>Okay</button>
                                </div>
                            </div>
                        </WalletModal>
                    }
                </div>
            </div>
            <div className='flex gap-2 justify-center items-center md:mt-40'>
                <h2 className='text-[8px] leading-[12px] lg:text-[12px] lg:leading-[18px]'>You need help?</h2>
                <Link to={`/ContactUs`} className='text-[7px] leading-[10.5px] text-white bg-primary px-2 py-1 rounded-full lg:text-[8px]'>Contact Us</Link>
            </div>
        </div>
    </DashBoardLayout>
  );
}

export default AirtimeTopUp;
