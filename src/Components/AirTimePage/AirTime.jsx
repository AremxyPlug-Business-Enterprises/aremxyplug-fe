import React from 'react'
import { DashBoardLayout } from '../Dashboard/Layout/DashBoardLayout'
import styles from './AirTime.module.css'
import { useState } from 'react'
import { Modal } from "../Screens/Modal/Modal";
import { Link } from 'react-router-dom'


const AirTime = () => {
    const [activeTab, setActiveTab] = useState('tab_1');
    const [showRoll, setShowRoll] = useState(false);
    const [showVoucher, setShowVoucher] = useState(false);
    const [showSchedule, setShowSchedule] = useState(false);
    const [showBulk, setShowBulk] = useState(false);
    const active = styles.active;
    const inactive = styles.inactive;

    const handleTab1 =()=> {
        setActiveTab('tab_1')
    }

    const handleTab2 =()=> {
        setActiveTab('tab_2')
    }

    const TabOneItem =({title,text, icon, link, onClick})=> {
        return (
            <Link className={styles.airtimeCol} to={link} onClick={onClick}>
                <div className={styles.airCol}>
                    <div className={styles.airCon}>
                        <img src={icon} alt="" className=''/>
                    </div>
                    <div className={styles.airText}>
                        <h2>{title}</h2>
                        <p>{text}</p>
                    </div>
                </div>
                <div className={styles.airImg}>
                    <img src='./Images/wallet/arrow-square-right.svg' alt="" className='h-full'/>
                </div>
            </Link>
        )
    }

  return (
    <DashBoardLayout>
        <div className={styles.AirtimeTops}>
            <div className={styles.airtimeTop}>
                <div className="w-full h-[90px] md:h-[112.29px] lg:h-[196px] rounded-[7px] md:rounded-[11.5px] bg-gradient-to-r from-[#6EDCFF] to-[#416BFF] flex px-[16px] lg:px-[50px] justify-between items-center lg:rounded-[20px]">
                    <div className="w-[80%] pt-[19px] lg:pt-[20px]">
                        <h2 className="text-[10px] md:text-[13.75px] font-bold mb-2 lg:text-[24px] lg:mb-4">
                            TOP UP AIRTIME GLOBALLY WITH AREMXYPLUG.</h2>
                        <h2 className="text-[7px] md:text-[11.46px] lg:text-[20px] lg:leading-[26px] mb-3">
                            Top up your mobile sim with our automated airtime vending, receive instantly, enjoy discount, purchase in bulk, send to friends, family, team, employees, and your loved ones without any hassle or hidden fee.</h2>
                    </div>
                    <div className="w-[91px] h-[66px] lg:w-[170px] lg:h-[150px]">
                        <img src="./Images/airtimeTopUp/young.png" className="h-full" alt="" />
                    </div>
                </div>
                <div className={styles.airType}>
                    <div>
                        <h2>Select Airtime Type</h2>
                    </div>
                    <div>
                        <img src="./Images/wallet/arrow-square-right.svg" alt="" />
                    </div>
                </div>
                <ul className={styles.localInter}>
                    <li className={activeTab === 'tab_1' ? active : inactive} onClick={handleTab1}>Local Airtime</li>
                    <li className={activeTab === 'tab_2' ? active : inactive} onClick={handleTab2}>International Airtime</li>
                </ul>
                <div className="">
                { activeTab === 'tab_1' ? 
                        <div className={styles.containAir}>
                           <TabOneItem
                             title='Airtime VTU'
                             text='Top up your mobile sim using our automated airtime vending directly from network providers.'
                             link='/airtime-vtu'
                             onClick=''
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
                        <div className={styles.containAir}>
                             <TabOneItem
                             title='Airtime VTU'
                             text='Top up your mobile sim using our automated airtime vending directly from network providers.'
                             link='/airtime-vtu'
                             onClick=''
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
                        </div>
                    }
                    { activeTab === 'tab_2' &&
                        <Modal>
                            <div className={styles.NotInter}>
                                <div className={styles.timeAble}>
                                    <h2>International Airtime.</h2>
                                    <h3>This Feature is Currently Not Available.</h3>
                                </div>
                                <div className={styles.InterAirtime}>
                                    <img src="./Images/airtimeTopUp/international-airtime.png" alt=""/>
                                </div>
                                <div className={styles.coming}>
                                    <h2>Coming soon...</h2>
                                    <button className={styles.btnOk} onClick={handleTab1}>Okay</button>
                                </div>
                            </div>
                        </Modal>
                    }
                    { showVoucher && 
                        <Modal>
                            <div className={styles.NotInterX} >
                                <div className={styles.timeAbleX}>
                                    <h2>Airtime Voucher.</h2>
                                    <h3>This Feature is Currently Not Available.</h3>
                                </div>
                                <div className={styles.InterAirtimeX}>
                                    <img src="./Images/airtimeTopUp/airtimeVoucher.png" alt="" />
                                </div>
                                <div className={styles.comingX} >
                                    <h2>Coming soon...</h2>
                                    <button className={styles.btnOkX} onClick={()=>setShowVoucher(false)}>Okay</button>
                                </div>
                            </div>
                        </Modal>
                    }
                    { showSchedule && 
                        <Modal>
                            <div className={styles.NotInterX} >
                                <div className={styles.timeAbleX}>
                                    <h2>Airtime Schedule.</h2>
                                    <h3>This Feature is Currently Not Available.</h3>
                                </div>
                                <div className={styles.InterAirtimeX}>
                                    <img src="./Images/airtimeTopUp/schedule.png" alt="" />
                                </div>
                                <div className={styles.comingX} >
                                    <h2>Coming soon...</h2>
                                    <button className={styles.btnOkX} onClick={()=>setShowSchedule(false)}>Okay</button>
                                </div>
                            </div>
                        </Modal>
                    }
                    { showBulk && 
                        <Modal>
                            <div className={styles.NotInterX} >
                                <div className={styles.timeAbleX}>
                                    <h2>Bulk Airtime.</h2>
                                    <h3>This Feature is Currently Not Available.</h3>
                                </div>
                                <div className={styles.InterAirtimeX}>
                                    <img src="./Images/airtimeTopUp/airtimeBulk.png" alt="" />
                                </div>
                                <div className={styles.comingX} >
                                    <h2>Coming soon...</h2>
                                    <button className={styles.btnOkX} onClick={()=>setShowBulk(false)}>Okay</button>
                                </div>
                            </div>
                        </Modal>
                    }
                    { showRoll && 
                        <Modal>
                            <div className={styles.NotInterX} >
                                <div className={styles.timeAbleX}>
                                    <h2>Airtime Roll.</h2>
                                    <h3>This Feature is Currently Not Available.</h3>
                                </div>
                                <div className={styles.InterAirtimeX}>
                                    <img src="./Images/airtimeTopUp/airtimeRoll.png" alt="" />
                                </div>
                                <div className={styles.comingX} >
                                    <h2>Coming soon...</h2>
                                    <button className={styles.btnOkX} onClick={()=>setShowRoll(false)}>Okay</button>
                                </div>
                            </div>
                        </Modal>
                    }
                </div>
            </div>
            <div className={styles.help}>
                <h2>You need help?</h2>
                <Link to={`/ContactUs`} className={styles.btnContact}>Contact Us</Link>
            </div>
        </div>        
    </DashBoardLayout>
  )
}

export default AirTime
