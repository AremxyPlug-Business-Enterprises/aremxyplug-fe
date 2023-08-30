import React from 'react';
import { useState } from 'react';
import { DashBoardLayout } from '../Dashboard/Layout/DashBoardLayout';
import weight from './Images/weight.svg';
import add from './Images/add-square.svg';
import data from './Images/data.svg';
import arrowDown from './Images/arrow-down.svg';
import discountImg from './Images/discount-shape.svg';
import call from './Images/call.svg';
import user from './Images/user.svg';
import money from './Images/moneys.svg';
import { ContextProvider } from '../Context';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import OTPInput from "otp-input-react";
import closeIcon from './Images/close-circle.svg';
import AremxyIcon from './Images/aremxyplug.svg';

const AirtimeVtu = () => {
    const {  isDarkMode } = useContext(ContextProvider);
    const tFee = 0;
    const points = '+2.00';
    const orderNumber = '0124yend44'

    const [OTP, setOTP] = useState("");
    const presetNum = 1234;
    const [error, setError] = useState('');
    const [border, setBorder] = useState('border');
    const [networkName, setNetworkName] = useState('');
    const [addRecipient, setAddRecipient] = useState(false);
    const [networkImage, setNetworkImage] = useState('');
    const [discount, setDiscount] = useState('');
    const [proceed, setProceed] = useState(false);
    const [selected, setSelected] = useState(false);
    const [paymentSelected, setPaymentSelected] = useState(false);
    const [amount, setAmount] = useState('');
    const [showList, setShowList] = useState(false);
    const [showPayment, setShowPayment] = useState(false);
    const [showPaymentReciept, setShowPaymentReciept] = useState(false);
    const [paymentSuccessful, setPaymentSuccessful] = useState(false);
    const [showProduct, setShowProduct] = useState(false);
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [paymentAmount, setPaymentAmount] = useState('');
    const [recipientName, setRecipientName] = useState('');
    const [recipientNumber, setRecipientNumber] = useState('');
    const [selectedProduct, setSelectedProduct] = useState('');
    const [confirm, setConfirm] = useState(false);



    if (addRecipient) {
        console.log('recipient added')
    } else {
        console.log('did not add recipient')
    }

    const networkList = [
        {
            id:1,
            name:'MTN',
            image: require('./Images/mtn.svg').default,
            discount: 3,
        },
        {
            id:2,
            name:'AIRTEL',
            image: require('./Images/airtel.png'),
            discount: 4,
        },
        {
            id:3,
            name:'GLO',
            image: require('./Images/glo.png'),
            discount: 3,
        },
        {
            id:4,
            name:'9MOBILE',
            image: require('./Images/9mobile.svg').default,
            discount: 3,
        }
    ];

    const countryList = [
        {
          id:1,
          name: 'Nigeria',
          code: 'NGN',
          flag: require('./Images/ng.svg').default,
          amount: 50000
        },
        {
          id:2,
          name: 'United States',
          code: 'USD',
          flag: require('./Images/us.svg').default,
          amount: 0
        },
        {
          id:3,
          name: 'United Kingdom',
          code: 'GBP',
          flag: require('./Images/gb.svg').default, 
          amount: 0
        },
        {
          id:4,
          name: 'European Union',
          code: 'EUR',
          flag: require('./Images/eu.svg').default,
          amount: 0
        },
        {
          id:5,
          name: 'Australia',
          code: 'AUD',
          flag: require('./Images/au.svg').default,
          amount: 0
        },
        {
          id:6,
          name: 'Kenya',
          code: 'KSH',
          flag: require('./Images/ke.svg').default,
          amount: 0
        }
      ];

      const productList = ['VTU', 'SNS']


    const Network =({name, image, onClick})=> {
        return (
          <li className="pl-[4px] lg:pl-[14px] lg:pr-[16px] border-b flex items-center py-[3px] gap-1 last:border-b-0 md:py-[6px] cursor-pointer lg:gap-2 lg:h-[45px]" onClick={onClick}>
            <div className="rounded-full w-[12.02px] h-[12.02px] flex items-center justify-center text-[6px] overflow-hidden md:w-[12.02px] lg:w-[25px] md:h-[12.02px] lg:h-[25px]">
              <img src={image} alt="" className='w-full h-full object-cover'/>
            </div> 
            <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">{name}</h2>
          </li>
        )
      }

      const Payment =({code, flag, amount, onClick})=> {
        return (
          <li className="pl-[4px] lg:pl-[14px] lg:pr-[16px] border-b flex items-center py-[3px] gap-1 last:border-b-0 md:py-[6px] cursor-pointer lg:gap-2 lg:h-[45px]" onClick={onClick}>
            <div className="rounded-full w-[12.02px] h-[12.02px] flex items-center justify-center text-[6px] overflow-hidden md:w-[12.02px] lg:w-[25px] md:h-[12.02px] lg:h-[25px]">
              <img src={flag} alt="" className='w-full h-full object-cover'/>
            </div> 
            <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">{code}</h2>
            <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">Wallet({amount.toLocaleString()}.00)</h2>
          </li>
        )
      }

      const Product =({onClick, product})=> {
        return (
            <li className="pl-[4px] lg:pl-[14px] lg:pr-[16px] border-b flex items-center py-[3px] gap-1 last:border-b-0 md:py-[6px] cursor-pointer lg:gap-2 lg:h-[45px]" onClick={onClick}>
                <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">{product}</h2>
            </li>
        )
      }

      const handleSelectNetwork =(name, image, val)=> {
        setNetworkName(name);
        setNetworkImage(image);
        setDiscount(val);
        setShowList(false);
        setSelected(true);
      }

      const calcAmount = (a, b) => {
        if (a === '' || b === '') {
            return ''
        } else {
            const totalAmount = ((1 - (a / 100)) * b )
            return totalAmount
        }
      }
      const  newAmount = calcAmount(discount, amount).toLocaleString();

      const handleSelectPayment =(code, flag, amount)=> {
        setName(code);
        setImage(flag);
        setPaymentAmount(amount);
        setShowPayment(false);
        setPaymentSelected(true);
      }

      const handleSelectProduct =(val) => {
        setSelectedProduct(val);
        setShowProduct(false);
      }

      const handleShowList =()=> {
        setShowList(!showList);
        setNetworkName('');
        setNetworkImage('');
        setDiscount('');
        setSelected(false);
      }

      const handleShowProduct =() => {
        setShowProduct(!showProduct);
        setSelectedProduct(false);
      }

      const handleShowPayment = ()=> {
        setShowPayment(!showPayment)
        setName('');
        setImage('');
        setPaymentAmount('');
        setPaymentSelected(false);
      }

      const handleProceed =()=> {
        setProceed(true)
      }

      const factorWalletName = (value)=> {

        if (value === 'NGN') {
           return 'Nigerian NGN Wallet' 
        } 

        if (value === 'GBP') {
            return 'British GBP Wallet' 
         }
        
         if (value === 'USD') {
            return 'American USD Wallet' 
         } 

         if (value === 'AUD') {
            return 'Australian AUD Wallet' 
         } 

         if (value === 'KSH') {
            return 'Kenyan KSH Wallet' 
         }

         if (value === 'EUR') {
            return 'European EUR Wallet' 
         } 
      }

      const handleConfirm =()=> {
        setProceed(false);
        setConfirm(true)
      }

      const handlePurchase =()=> {
        setBorder('border')
        if (+OTP === presetNum) {
            setShowPaymentReciept(true)
            setPaymentSuccessful(true)
            setConfirm(false);
            setOTP("");
        } else {
            setBorder('border border-red-400')
            setError('invalid pin!!!')
        }
      }

      const handleCloseConfirm =()=> {
        setConfirm(false);
        setOTP("");
      }
 
      console.log(confirm)

      console.log(recipientName, discount, newAmount, networkImage, selectedProduct, networkName, recipientNumber, name, image)

  return (
    <DashBoardLayout>
      <div className="flex flex-col justify-between h-full">
        <div>
            <div className="h-[65.33px] md:h-[112.29px] lg:h-[196px] rounded-[7px] md:rounded-[11.5px] w-full">
                <img src="./Images/airtimeTopUp/green_banner.png" alt="" className='w-full h-full'/>
            </div>
            <div className='flex gap-[36.71px] md:gap-[58.68px] lg:gap-[100px] lg:mt-[60px] mt-[30px]'>
                <div className="border rounded-[4px] w-full h-[30px] text-[8px] leading-[12px] lg:h-[51px] md:rounded-[6px] lg:rounded-[10px] lg:pl-[14px] lg:pr-[16px] pl-[3px] pr-[5px] flex items-center justify-between flex-1">
                    <h2 className='lg:text-[16px] lg:leading-[24px]'>Select Recipient</h2>
                    <div className='lg:w-6 lg:h-6 w-[11px] h-[11px]'>
                        <img src={weight} alt="" className='w-full h-full'/>
                    </div>
                </div>
                <div className="border rounded-[4px] w-full h-[30px] text-[8px] leading-[12px] lg:h-[51px] md:rounded-[6px] lg:rounded-[10px] lg:pl-[14px] lg:pr-[16px] pl-[3px] pr-[5px] flex items-center justify-between flex-1">
                    <h2 className='lg:text-[16px] lg:leading-[24px]'>Add Recipient</h2>
                    <div className='lg:w-6 lg:h-6 w-[11px] h-[11px]'>
                        <img src={add} alt="" className='w-full h-full'/>
                    </div>
                </div>
            </div>
            <div className='flex md:gap-[58.68px] lg:gap-[100px] lg:mt-[60px] my-[30px]'>
                <div className="rounded-[4px] w-full bg-primary text-white md:w-1/2 h-[30px] lg:h-[51px] md:rounded-[6px] lg:rounded-[10px] lg:pl-[14px] lg:pr-[16px] flex items-center justify-between px-[5px]">
                    <h2 className='lg:text-[16px] lg:leading-[24px] text-[8px] leading-[12px]'>Airtime Balance USSD Codes</h2>
                    <div className='lg:w-6 lg:h-6 w-[11px] h-[11px]'>
                        <img src={data} alt="" className='w-full h-full'/>
                    </div>
                </div>
                <div className='hidden md:w-1/2 md:block'></div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-y-[20px] md:gap-x-[58.68px] lg:gap-x-[100px] md:gap-y-[15px] lg:gap-y-[25px] pb-[30px] lg:py-[60px]'>
                <div>
                    <div>
                        <h2 className='lg:text-[16px] lg:leading-[24px] mb-1 text-[8px] leading-[12px]'>Select Network</h2>
                        <div className="border w-full h-[30px] rounded-[4px] pl-[4px] pr-[8px] lg:h-[51px] md:rounded-[6px] lg:rounded-[10px] lg:pl-[14px] lg:pr-[16px] flex items-center justify-between">
                            { selected ? 
                                <li className="flex items-center py-[3px] gap-1 md:py-[6px] cursor-pointer lg:gap-2 lg:h-[45px]">
                                    <div className="rounded-full w-[12.02px] h-[12.02px] flex items-center justify-center text-[6px] overflow-hidden md:w-[12.02px] lg:w-[25px] md:h-[12.02px] lg:h-[25px]">
                                        { networkImage && <img src={networkImage} alt="" className='w-full h-full object-cover'/>}
                                    </div> 
                                    <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">{networkName}</h2>
                                </li>
                            : 
                                <h2 className='lg:text-[16px] lg:leading-[24px] text-[8px] leading-[12px] text-gray-400'>Select Network</h2>
                            }
                            <button className='lg:w-6 lg:h-6 w-[11px] h-[11px]' onClick={handleShowList}>
                                <img src={arrowDown} alt="" className='w-full h-full'/>
                            </button>
                        </div>
                    </div>
                    { showList && 
                        <div className='border md:rounded-[10px] lg:mt-2 mt-1 rounded-[4px]'>
                            {networkList.map((item) => (
                                <Network key={item.id} image={item.image} name={item.name} onClick={()=>handleSelectNetwork(item.name, item.image, item.discount)}/>
                            ))}
                        </div> 
                    }
                </div>
                <div>
                    <h2 className='lg:text-[16px] lg:leading-[24px] mb-1 text-[8px] leading-[12px]'>Select Product</h2>
                    <div className="border w-full h-[30px] rounded-[4px] pl-[4px] pr-[8px] lg:h-[51px] md:rounded-[6px] lg:rounded-[10px] lg:pl-[14px] lg:pr-[16px] flex items-center justify-between">
                        <h2 className='text-[8px] leading-[12px] lg:text-[16px] lg:leading-[24px] text-gray-400'>{selectedProduct ? selectedProduct : 'Select Product'}</h2>
                        <button className='lg:w-6 lg:h-6 w-[11px] h-[11px]' onClick={handleShowProduct}>
                            <img src={arrowDown} alt="" className='w-full h-full'/>
                        </button>
                    </div>
                    { showProduct && 
                        <div className='border md:rounded-[10px] lg:mt-2 mt-1 rounded-[4px]'>
                            { productList.map((item, index) => (
                                <Product key={index} product={item} onClick={() => handleSelectProduct(item)}/>
                            ))}
                        </div>
                    }
                </div>
                <div>
                    <h2 className='lg:text-[16px] lg:leading-[24px] mb-1 text-[8px] leading-[12px]'>Discount</h2>
                    <div className="border w-full rounded-[4px] h-[30px] pl-[4px] pr-[8px] lg:h-[51px] md:rounded-[6px] lg:rounded-[10px] lg:pl-[14px] lg:pr-[16px] flex items-center justify-between">
                        <h2 className='lg:text-[16px] lg:leading-[24px] text-[8px] leading-[12px]'>{discount ? `${networkName + ' ' +  discount}%` : ''}</h2>
                        <div className='lg:w-6 lg:h-6 h-[11px] w-[11px]'>
                            <img src={discountImg} alt="" className='w-full h-full'/>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className='lg:text-[16px] lg:leading-[24px] mb-1 text-[8px] leading-[12px]'>Phone Number <span className='text-[8px] leading-[12px] md:text-[10px] md:leading-[15px]'>(Select Recipient)</span></h2>
                    <div className="border w-full h-[30px] rounded-[4px] pr-[8px] pl-[4px] lg:h-[51px] md:rounded-[6px] lg:rounded-[10px] lg:pl-[14px] lg:pr-[16px] flex items-center justify-between">
                        <input type='text' className='lg:text-[16px] lg:leading-[24px] grow outline-none text-[8px] leading-[12px]' placeholder='Add recipient phone number' onChange={(event)=>setRecipientNumber(event.target.value)} value={recipientNumber}/>
                        <div className='lg:w-6 lg:h-6 w-[11px] h-[11px]'>
                            <img src={call} alt="" className='w-full h-full'/>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className='lg:text-[16px] lg:leading-[24px] mb-1 text-[8px] leading-[12px]'>Recipient Name <span className='md:text-[10px] text-[8px]'>(Optional)</span></h2>
                    <div className="border rounded-[4px] pl-[4px] pr-[8px] w-full h-[30px] lg:h-[51px] md:rounded-[6px] lg:rounded-[10px] lg:pl-[14px] lg:pr-[16px] flex items-center justify-between">
                        <input type='text' className='text-[8px] leading-[12px] lg:text-[16px] lg:leading-[24px] grow outline-none' placeholder='Add recipient name' onChange={(event)=>setRecipientName(event.target.value)} value={recipientName}/>
                        <div className='lg:w-6 lg:h-6 w-[11px] h-[11px]'>
                            <img src={user} alt="" className='w-full h-full'/>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className='lg:text-[16px] lg:leading-[24px] mb-1 text-[8px] leading-[12px]'>Type Amount</h2>
                    <div className="border w-full h-[30px] rounded-[4px] pl-[4px] pr-[8px] lg:h-[51px] md:rounded-[6px] lg:rounded-[10px] lg:pl-[14px] lg:pr-[16px] flex items-center justify-between">
                        <input type='text' placeholder='Type amount' className='lg:text-[16px] lg:leading-[24px] grow outline-none text-[8px] leading-[12px]' onChange={(event)=>setAmount(event.target.value)} value={amount.toLocaleString()}/>
                        <div className='lg:w-6 lg:h-6 w-[11px] h-[11px]'>
                            <img src={money} alt="" className='w-full h-full'/>                            
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className='lg:text-[16px] lg:leading-[24px] mb-1 text-[8px] leading-[12px]'>Total Amount</h2>
                    <div className="h-[30px] rounded-[4px] pl-[4px] pr-[8px] border w-full lg:h-[51px] md:rounded-[6px] lg:rounded-[10px] lg:pl-[14px] lg:pr-[16px] flex items-center justify-between">
                        <h2 className='text-[8px] leading-[12px] lg:text-[16px] lg:leading-[24px] text-gray-400'>{newAmount ? `NGN${newAmount}` : `Total Amount`}</h2>
                        <div className='lg:w-6 lg:h-6 w-[11px] h-[11px]'>
                            <img src={money} alt="" className='w-full h-full'/>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <h2 className='lg:text-[16px] lg:leading-[24px] mb-1 text-[8px] leading-[12px]'>Payment Method</h2>
                        <div className="border rounded-[4px] pl-[4px] pr-[8px] w-full h-[30px] lg:h-[51px] md:rounded-[6px] lg:rounded-[10px] lg:pl-[14px] lg:pr-[16px] flex items-center justify-between">
                            { paymentSelected ? 
                                <li className="flex items-center py-[3px] gap-1 h-[30px] last:border-b-0 md:py-[6px] cursor-pointer lg:gap-2 lg:h-[45px]"> 
                                    <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">{name}</h2>
                                    <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">Wallet({paymentAmount.toLocaleString()}.00)</h2>
                                </li> 
                                :
                                <h2 className='lg:text-[16px] lg:leading-[24px] text-[8px] leading-[12px] text-gray-400'>Select Payment Method</h2>}
                                { paymentSelected ? 
                                    <button className="rounded-full w-[12.02px] h-[12.02px] flex items-center justify-center text-[6px] overflow-hidden md:w-[12.02px] lg:w-[25px] md:h-[12.02px] lg:h-[25px]" onClick={handleShowPayment}>
                                        <img src={image} alt="" className='w-full h-full object-cover'/>
                                    </button>
                                : 
                                <button className='lg:w-6 lg:h-6 h-[11px] w-[11px]' onClick={handleShowPayment}>
                                    <img src={arrowDown} alt="" className='w-full h-full'/>
                                </button>
                            }
                        </div>
                    </div>
                    { showPayment && 
                        <div className='border md:rounded-[10px] lg:mt-2 mt-1 rounded-[4px]'>
                            {countryList.map((country) => (
                                <Payment key={country.id} flag={country.flag} code={country.code} amount={country.amount} onClick={()=> handleSelectPayment(country.code, country.flag, country.amount)}/>
                            ))}
                        </div>
                    }
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <h2 className='text-[8px] leading-[12px] lg:text-[16px] lg:leading-[24px]'>Add to Recipient?</h2>
                <div onClick={()=>setAddRecipient(!addRecipient)} 
                    className={` w-[15px] h-[6.4px] md:w-[30px] md:h-[12px] lg:w-[50px] lg:h-[22px] lg:rounded-full rounded 
                    ${ addRecipient ? "bg-[#77ff60]" : "bg-[#b1b0b0]"}`}>
                    <div className={`rounded-full w-[7.5px] h-[6.4px] md:w-[14px] md:h-[12px] lg:h-[22px] lg:w-[21px] lg:drop-shadow-md bg-[#fff] 
                    ${addRecipient ? "float-right" : "float-left"}`}>
                    </div>
                </div>
            </div>
            {/* proceed modal */}
            { proceed && 
                <div className='fixed top-0 left-0 w-full h-full bg-black/[0.3] z-[300] flex justify-center items-center'>
                    <div className={` mx-[5%] ${ isDarkMode ? "border bg-[#000]" : "bg-[#fff]"} md:ml-[30%] lg:ml-[25%] md:mr-[10%] grow pt-[20px] pb-[20px] rounded-[8px] relative md:rounded-[11.5px]`}>
                        <div className='w-full flex items-center justify-between border-b-[6px] border-primary px-[12px] md:px-[20px] lg:border-b-[10px]'>
                            <div className='lg:h-5 h-[11px] mb-[5px]'>
                                <img src={AremxyIcon} alt="" className='h-full'/>
                            </div>
                            <button onClick={()=> setProceed(false)} className='mb-[5px] lg:w-6 lg:h-6 h-[11px] w-[11px] rounded-full flex items-center justify-center'>
                                <img src={closeIcon} alt=""/>
                            </button>
                        </div>
                        <div className='p-[15px] px-[12px] md:px-[20px]'>
                            <h2 className='lg:text-[16px] lg:leading-[24px] text-center mb-1 text-[8px] leading-[12px]'>Confirm Transaction</h2>
                            <h2 className='lg:text-[16px] lg:leading-[24px] text-[8px] leading-[12px] text-center mt-[26px] mx-[10px] mb-[20px]'>You are about to purchase {networkName + ' ' + selectedProduct} Airtime {name+amount.toLocaleString()} from your {name} Wallet to</h2>
                            <div className="flex flex-col gap-[10px] md:gap-[23.73px] lg:gap-[15px]">
                                <div className='flex items-center justify-between'>
                                    <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px] text-[#7c7c7c]">Network</h2>
                                    <div className='flex gap-1'>
                                        <div className="rounded-full w-[12.02px] h-[12.02px] flex items-center justify-center text-[6px] overflow-hidden md:w-[12.02px] lg:w-[25px] md:h-[12.02px] lg:h-[25px]">
                                            <img src={networkImage} alt="" className='w-full h-full object-cover'/>
                                        </div> 
                                        <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">{networkName}</h2>
                                    </div>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px] text-[#7c7c7c]">Product</h2>
                                    <div className='flex gap-1'> 
                                        <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">{networkName + ' ' + selectedProduct}</h2>
                                    </div>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px] text-[#7c7c7c]">Discount</h2>
                                    <div className='flex gap-1'> 
                                        <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">{discount}%</h2>
                                    </div>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px] text-[#7c7c7c]">Phone Number</h2>
                                    <div className='flex gap-1'> 
                                        <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">{recipientNumber}</h2>
                                    </div>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px] text-[#7c7c7c]">Recipient Name</h2>
                                    <div className='flex gap-1'> 
                                        <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">{recipientName}</h2>
                                    </div>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px] text-[#7c7c7c]">Payment Method</h2>
                                    <div className='flex gap-1'> 
                                        <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">{factorWalletName(name)}</h2>
                                    </div>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px] text-[#7c7c7c]">Total Amount</h2>
                                    <div className='flex gap-1'> 
                                        <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">{name + ' ' + newAmount}</h2>
                                    </div>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px] text-[#7c7c7c]">Transaction Fee</h2>
                                    <div className='flex gap-1'> 
                                        <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">{name + ' ' + tFee}.00</h2>
                                    </div>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px] text-[#7c7c7c]">Points Earned</h2>
                                    <div className='flex gap-1'> 
                                        <h2 className="text-[#2ED173] text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">{points}</h2>
                                    </div>
                                </div>
                            </div>
                            <div className='my-[20px] flex items-center gap-2 bg-slate-200 -mx-[12px] px-[12px] h-[59px] md:-mx-[20px] md:px-[20px]'>
                                <div className='w-[41px] h-[41px] rounded-full overflow-hidden p-2 bg-white'>
                                    <img src={image} alt="" className='w-full h-full object-cover rounded-full'/>
                                </div>
                                <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">Available Balance <span className="text-[#7c7c7c]">( {name+paymentAmount}.00 )</span></h2>
                            </div>
                            <div className='flex items-center justify-center'>
                                <button className='w-full md:w-fit bg-primary text-white rounded-md px-[28px] text-[10px] leading-[15px] lg:text-[16px] lg:leading-[24px] py-[6px]' onClick={handleConfirm}>Confirm</button> 
                            </div>
                        </div>
                    </div>
                </div>
            }
            {/* confirm modal */}
            {
                confirm && 
                <div className='fixed top-0 left-0 w-full h-full bg-black/[0.3] z-[300] flex justify-center items-center'>
                    <div className={` mx-[5%] ${ isDarkMode ? "border bg-[#000]" : "bg-[#fff]"} md:ml-[30%] lg:ml-[25%] md:mr-[10%] grow pt-[0px] pb-[20px] rounded-[8px] relative md:rounded-[11.5px] h-[250px] md:h-[273px] lg:h-[465px] lg:pb-[4rem]`}>
                        <div className='px-[12px] md:px-[20px] lg:h-[40px] flex items-center justify-between'>
                            <div className='lg:h-5 h-[11px]'>
                                <img src={AremxyIcon} alt="" className='h-full'/>
                            </div>
                            <button onClick={handleCloseConfirm} className='lg:w-6 lg:h-6 h-[11px] w-[11px] rounded-full flex items-center justify-center'>
                                <img src={closeIcon} alt=""/>
                            </button>
                        </div>
                        <div className='border-t-[6px] border-primary w-full flex items-center flex-col h-full px-[14%] justify-between py-[2rem] lg:border-t-[10px]'>
                            <h2 className='text-[8px] md:text-[10px] lg:text-base'>Input pin to complete transaction</h2>
                            <div>
                                <div className='-mt-[15px] md:-mt-[20px]'>
                                    <div className='lg:hidden'>
                                        <OTPInput 
                                            value={OTP} 
                                            onChange={setOTP}
                                            autoFocus
                                            OTPLength={4}
                                            otpType="number"
                                            inputType="password"
                                            disabled={false}
                                            resendOTP={{justifyContent: 'space-between', display: 'flex'}}
                                            inputClassName={`${border} rounded focus:outline-none p-[5px] text-[11px] h-[40px] w-[40px]`}
                                            style={{display: 'flex', gap: `5px`}}
                                            inputStyles={{width:28, height:28, marginRight: 0}}
                                        /> 
                                    </div>
                                    <div className='hidden lg:block'>
                                        <OTPInput 
                                            value={OTP} 
                                            onChange={setOTP}
                                            autoFocus
                                            OTPLength={4}
                                            otpType="number"
                                            inputType="password"
                                            disabled={false}
                                            resendOTP={{justifyContent: 'space-between', display: 'flex'}}
                                            inputClassName={`${border} rounded focus:outline-none p-[5px] text-[16px] h-[40px] w-[40px]`}
                                            style={{display: 'flex', gap: `5px`}}
                                            inputStyles={{width:40, height:40, marginRight: 0}}
                                        /> 
                                    </div>
                                    <h2 className='text-red-500 text-[8px] text-center leading-normal lg:text-[14px] mt-[3px] lg:mt-[5px]'>{error}</h2>
                                </div>
                                <h2 className='text-[8px] text-primary mt-[10px] lg:text-[14px]'>Forgot Password?</h2>
                            </div>
                            <button className='bg-primary text-white md:w-fit md:px-[20px] w-full h-[2rem] md:h-[1.5rem] lg:h-[2.5rem] rounded-[5px] disabled:bg-gray-500 text-[8px] md:text-[10px] lg:text-base'disabled={ OTP.length !== 4 } onClick={handlePurchase}>Purchase</button>
                        </div>
                    </div>
                </div>
            }
            {/* payment reciept modal */}
            { showPaymentReciept && 
                <div className='fixed top-0 left-0 w-full h-full bg-black/[0.3] z-[300] flex justify-center items-center'>
                    {/* successful payment and unsuccessful payment*/}
                    { paymentSuccessful ? 
                        <div className={` mx-[5%] ${ isDarkMode ? "border bg-[#000]" : "bg-[#fff]"} md:ml-[30%] lg:ml-[25%] md:mr-[10%] grow pt-[20px] md:pb-[40px] pb-[20px] rounded-[8px] relative md:rounded-[11.5px]`}>
                            <div className='w-full flex justify-between items-center border-b-[6px] border-primary px-[12px] md:px-[20px] md:border-b-[10px]'>
                                <div className='lg:h-5 h-[11px] mb-[5px]'>
                                    <img src={AremxyIcon} alt="" className='h-full'/>
                                </div>
                                <button onClick={()=> setShowPaymentReciept(false)} className='lg:mb-[5px] lg:w-6 lg:h-6 h-[11px] w-[11px] flex items-center justify-center'>
                                    <img src={closeIcon} alt=""/>
                                </button>
                            </div>
                            <div className='p-[15px] px-[12px] md:px-[35px]'>
                                <h2 className='lg:text-[16px] lg:leading-[24px] text-center mb-1 text-[8px] leading-[12px]'>Purchase Successful</h2>
                                <h2 className='lg:text-[16px] lg:leading-[24px] text-[8px] leading-[12px] text-center mt-[26px] mx-[10px] mb-[20px]'>You are have successfully purchased {networkName + ' ' + selectedProduct} Airtime {name+amount.toLocaleString()} from your {name} Wallet to</h2>
                                <div className="flex flex-col gap-[10px] md:gap-[23.73px] lg:gap-[15px]">
                                    <div className='flex items-center justify-between'>
                                        <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px] text-[#7c7c7c]">Network</h2>
                                        <div className='flex gap-1'>
                                            <div className="rounded-full w-[12.02px] h-[12.02px] flex items-center justify-center text-[6px] overflow-hidden md:w-[12.02px] lg:w-[25px] md:h-[12.02px] lg:h-[25px]">
                                                <img src={networkImage} alt="" className='w-full h-full object-cover'/>
                                            </div> 
                                            <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">{networkName}</h2>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px] text-[#7c7c7c]">Product</h2>
                                        <div className='flex gap-1'> 
                                            <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">{networkName + ' ' + selectedProduct}</h2>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px] text-[#7c7c7c]">Phone Number</h2>
                                        <div className='flex gap-1'> 
                                            <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">{recipientNumber}</h2>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px] text-[#7c7c7c]">Recipient Name</h2>
                                        <div className='flex gap-1'> 
                                            <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">{recipientName}</h2>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px] text-[#7c7c7c]">Payment Method</h2>
                                        <div className='flex gap-1'> 
                                            <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">{factorWalletName(name)}</h2>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px] text-[#7c7c7c]">Total Amount</h2>
                                        <div className='flex gap-1'> 
                                            <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">{name + ' ' + newAmount}</h2>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px] text-[#7c7c7c]">Order Number</h2>
                                        <div className='flex gap-1'> 
                                            <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">{orderNumber}</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className='my-[20px] bg-slate-200  py-1 px-2 rounded-[4px] w-[88%] md:w-full mx-auto md:my-[30px] md:px-[50px] md:p-2 lg:px-[100px]'>
                                    <h2 className="text-[#7c7c7c] text-justify text-[7px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">
                                        The data purchase has been sent successfully to the recipient phone number. Please kindly engage the recipient to check his/her balance to confirm the value. You can contact us for any further assistance.
                                    </h2>
                                </div>
                                <div className='flex items-center md:justify-center justify-between w-[88%] mx-auto gap-1 md:gap-2 '>
                                    <button className='md:px-[20px] md:h-[1.5rem] h-[2rem] w-full md:w-[8rem] lg:w-[10rem] lg:h-[2.5rem] bg-primary text-white rounded-md px-[28px] text-[10px] leading-[15px] lg:text-[16px] lg:leading-[24px] py-[6px] md:py-0' onClick={handleConfirm}>Share</button> 
                                    <button className='md:px-[20px] md:h-[1.5rem] h-[2rem] w-full md:w-[8rem] lg:w-[10rem] lg:h-[2.5rem] border rounded-md px-[28px] text-[10px] leading-[15px] lg:text-[16px] lg:leading-[24px] py-[6px] md:py-0' onClick={handleConfirm}>Save as PDF</button>
                                </div>
                            </div>
                        </div>
                        :
                        <div className={` mx-[5%] ${ isDarkMode ? "border bg-[#000]" : "bg-[#fff]"} lg:ml-[25%] lg:mr-[10%] md:mx-[25%] grow pt-[20px] pb-[20px] rounded-[8px] relative md:rounded-[11.5px]`}>
                            <div className='w-full flex justify-end border-b-[6px] border-primary px-[12px] md:border-b-[10px]'>
                                < button onClick={()=> setShowPaymentReciept(false)} className='lg:w-6 lg:h-6 h-[11px] w-[11px] rounded-full border flex items-center justify-center'>
                                    <img src={closeIcon} alt=""/>
                                </button>
                            </div>
                            <div className='p-[15px] px-[12px]'>
                                <h2 className='lg:text-[16px] lg:leading-[24px] text-center mb-1 text-[8px] leading-[12px]'>Error Purchase</h2>
                                <h2 className='lg:text-[16px] lg:leading-[24px] text-[8px] leading-[12px] text-center mt-[26px] mx-[10px] mb-[20px]'>You are about to purchase {networkName + ' ' + selectedProduct} Airtime {name+amount.toLocaleString()} from your {name} Wallet to</h2>
                                <div className="flex flex-col gap-[10px] md:gap-[23.73px] lg:gap-[15px]">
                                    <div className='flex items-center justify-between'>
                                        <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">Network</h2>
                                        <div className='flex gap-1'>
                                            <div className="rounded-full w-[12.02px] h-[12.02px] flex items-center justify-center text-[6px] overflow-hidden md:w-[12.02px] lg:w-[25px] md:h-[12.02px] lg:h-[25px]">
                                                <img src={networkImage} alt="" className='w-full h-full object-cover'/>
                                            </div> 
                                            <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">{networkName}</h2>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">Product</h2>
                                        <div className='flex gap-1'> 
                                            <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">{networkName + ' ' + selectedProduct}</h2>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">Discount</h2>
                                        <div className='flex gap-1'> 
                                            <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">{discount}%</h2>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">Phone Number</h2>
                                        <div className='flex gap-1'> 
                                            <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">{recipientNumber}</h2>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">Recipient Name</h2>
                                        <div className='flex gap-1'> 
                                            <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">{recipientName}</h2>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">Payment Method</h2>
                                        <div className='flex gap-1'> 
                                            <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">{factorWalletName(name)}</h2>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">Total Amount</h2>
                                        <div className='flex gap-1'> 
                                            <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">{name + ' ' + newAmount}</h2>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">Transaction Fee</h2>
                                        <div className='flex gap-1'> 
                                            <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">{name + ' ' + tFee}.00</h2>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">Points Earned</h2>
                                        <div className='flex gap-1'> 
                                            <h2 className="text-[#2ED173] text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">{points}</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className='my-[20px] flex items-center gap-2 bg-slate-200 -mx-[12px] px-[12px] h-[59px]'>
                                    <div className='w-[41px] h-[41px] rounded-full overflow-hidden p-2 bg-white'>
                                        <img src={image} alt="" className='w-full h-full object-cover rounded-full'/>
                                    </div>
                                    <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">Available Balance ( {name+paymentAmount}.00 )</h2>
                                </div>
                                <div className='flex items-center justify-center'>
                                    <button className='w-full md:w-fit bg-primary text-white rounded-md px-[28px] text-[10px] leading-[15px] lg:text-[16px] lg:leading-[24px] py-[6px]' onClick={handleConfirm}>Confirm</button> 
                                </div>
                            </div>
                        </div>
                    }
                </div>
            }
            <div className='py-[30px] lg:py-[60px] mt-10'>
                <button className='w-full md:w-fit bg-primary text-white rounded-md px-[28px] text-[10px] leading-[15px] lg:text-[16px] lg:leading-[24px] py-[6px]' onClick={handleProceed}>Proceed</button>
            </div>
        </div>
        <div className='flex gap-2 justify-center items-center md:mt-40'>
            <h2 className='text-[8px] leading-[12px] lg:text-[12px]'>You need help?</h2>
            <Link to={`/ContactUs`} className='text-[8px] leading-[12px] text-white bg-primary px-2 py-1 rounded-full lg:text-[8px]'>Contact Us</Link>
        </div>
      </div>
    </DashBoardLayout>
  );
}

export default AirtimeVtu;
