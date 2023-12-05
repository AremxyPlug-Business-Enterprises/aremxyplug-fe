import React from 'react';
import { useState } from 'react';
import styles from './AirtimeVtu.module.css'
import { DashBoardLayout } from '../Dashboard/Layout/DashBoardLayout';
import { Modal } from "../Screens/Modal/Modal";
import Joi from "joi";
import OtpInput from "react-otp-input";
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
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { Link } from 'react-router-dom';
import AirtimeVtuReceipt from "./AirtimeVtuReceipt";

const AirtimeVtu = () => {
    // const {  isDarkMode } = useContext(ContextProvider);
    const tFee = 0;
    const points = '+2.00';

    const {networkName, setNetworkName} = useContext(ContextProvider);
    const {selectedProduct, setSelectedProduct} = useContext(ContextProvider);
    const {recipientName, setRecipientName} = useContext(ContextProvider);
    const {recipientNumber, setRecipientNumber} = useContext(ContextProvider);
    const {amount, setAmount} = useContext(ContextProvider);
    const {networkImage, setNetworkImage} = useContext(ContextProvider);


    const [addRecipient, setAddRecipient] = useState(false);
    const [discount, setDiscount] = useState('');
    const [proceed, setProceed] = useState(false);
    const [selected, setSelected] = useState(false);
    const [paymentSelected, setPaymentSelected] = useState(false);
    const [showList, setShowList] = useState(false);
    const [showPayment, setShowPayment] = useState(false);
    const [showProduct, setShowProduct] = useState(false);
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [paymentAmount, setPaymentAmount] = useState('');
    const [confirm, setConfirm] = useState(false);
    const [errors, setErrors] = useState({});
    const [codes, setCodes] = useState(false);


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

      const productList = ['SNS', 'VTU']


    const Network =({name, image, onClick})=> {
        return (
          <li className={styles.netList} onClick={onClick}>
            <div className={styles.netImage}>
              <img src={image} alt="" className={styles.NoImage}/>
            </div> 
            <h2 className={styles.netName}>{name}</h2>
          </li>
        )
      }

      const Payment =({code, flag, amount, onClick})=> {
        return (
          <li className={styles.netList} onClick={onClick}>
            <div className={styles.netImage}>
              <img src={flag} alt="" className={styles.NoImage}/>
            </div> 
            <h2 className={styles.netName}>{code}</h2>
            <h2 className={styles.netName}>Wallet({amount.toLocaleString()}.00)</h2>
          </li>
        )
      }

      const Product =({onClick, product})=> {
        return (
            <li className={styles.netList1} onClick={onClick}>
                <h2 className={styles.netName1}>{product}</h2>
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

      const schema = Joi.object({
        recipientNumber: Joi.string()
          .pattern(new RegExp(/^\d{11,}/))
          .required()
          .messages({
            "string.pattern.base": "Phone number should be 11 digits ",
          }),
        amount: Joi.string()
          .pattern(new RegExp(/\d{4,}/))
          .required()
          .messages({
            "string.pattern.base": "Amount can not be less than 1000",
          }),
      });

      const handleProceed = (e) => {
        e.preventDefault();

        const { error } = schema.validate({
        recipientNumber,
        amount,
        });

        if (error) {
        setErrors(
            error.details.reduce((acc, curr) => {
            acc[curr.path[0]] = curr.message;
            return acc;
            }, {})
        );
        } else {
        setProceed(true);
        setErrors({});
        }

    // console.log(successful);
  };

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

      const {
        toggleSideBar,
        inputPin,
        setInputPin,
        toggleVisibility,
        isVisible,
      } = useContext(ContextProvider);

      const handleConfirm =()=> {
        setProceed(false);
        setConfirm(true);
        setInputPin('')
      }

      console.log(confirm)

      console.log(recipientName, discount, newAmount, networkImage, selectedProduct, networkName, recipientNumber, name, image)

      const {
        transactSuccessPopUp,
        setTransactSuccessPopUp,
      } = useContext(ContextProvider);
    
      const handleTransactionSuccessClose =()=> {
        setConfirm(false);
        setTransactSuccessPopUp(true);
      }; 

      const [receipt] = useState(false);

      const handleReceipt =()=> {
        setTransactSuccessPopUp(false);
      }

      const handleCodes =()=> {
        setCodes(false);
        setCodes(true);
      }

  return (
    <DashBoardLayout>
      <div className={styles.AirtimeTops}>
        <div className={styles.airtimeTop}>
                <div className="w-full h-[90px] md:h-[112.29px] lg:h-[196px] rounded-[7px] md:rounded-[11.5px] bg-gradient-to-r from-[#73FF9A] to-[#6EDCFF] flex px-[16px] lg:px-[50px] justify-between items-center lg:rounded-[20px]">
                    <div className="w-[80%] pt-[19px] lg:pt-[20px]">
                        <h2 className="text-[10px] md:text-[13.75px] font-bold mb-2 lg:text-[24px] lg:mb-4">
                        AIRTIME VTU, FAST AND AUTOMATED.</h2>
                        <h2 className="text-[7px] md:text-[11.46px] lg:text-[20px] lg:leading-[26px] mb-3">
                        Top up your mobile sim using our automated airtime vending directly from network providers, enjoy discounts without any hassle or hidden fee.
                    </h2>
                    </div>
                    <div className="w-[91px] h-[66px] lg:w-[170px] lg:h-[150px]">
                        <img src="./Images/airtimeTopUp/young.png" className="h-full" alt="" />
                    </div>
                </div>
            <div className={styles.containFlex}>
                <div className={styles.FlexPut}>
                    <Link to="/select-vtu-recipient"> 
                        <div className={styles.conPut}>
                            <h2>Select Recipient</h2>
                            <div className={styles.FlexImg}>
                                <img src={weight} alt="" className=''/>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className={styles.FlexPut}>
                    <Link to="/add-vtu-recipient">
                        <div className={styles.conPut}>
                            <h2>Add Recipient</h2>
                            <div className={styles.FlexImg}>
                                <img src={add} alt="" className=''/>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <div className={styles.containFlex1}>
                <div className={styles.FlexPut1}>
                        <div className={styles.conPut1} onClick={handleCodes} >
                            <h2>Airtime Balance USSD Codes</h2>
                            <div className={styles.FlexImg1}>
                                <img src={data} alt="" className=''/>
                            </div>
                        </div>
                </div>
            </div>
            <div className={styles.mainGrid}>
                <div className={styles.mainGridCol}>
                    <div>
                        <div className={styles.NetworkFlex}>
                            <h2 className={styles.head3}>Select Network</h2>
                            <div className={styles.input}>
                                <div className={styles.output2}>
                                    { selected ? 
                                        <li onClick={handleShowList} className={styles.labelInput}>
                                            <div className={styles.network}>
                                                { networkImage && <img src={networkImage} alt=""/>}
                                            </div> 
                                            <h2 className={styles.head2}>{networkName}</h2>
                                        </li>
                                    : 
                                        <h2 onClick={handleShowList} className={styles.head6}>Select Network</h2>
                                    }
                                    <button className={styles.btnDrop} onClick={handleShowList}>
                                        <img src={arrowDown} alt=""/>
                                    </button>
                                </div>
                            </div>
                        </div>
                        { showList && 
                            <div className={styles.colDown}>
                                {networkList.map((item) => (
                                    <Network key={item.id} image={item.image} name={item.name} onClick={()=>handleSelectNetwork(item.name, item.image, item.discount)}/>
                                ))}
                            </div> 
                        }
                    </div>
                    <div>
                        <h2 className={styles.head3}>Select Product</h2>
                        <div className={styles.input1}>
                            {selectedProduct ?
                                <h2 onClick={handleShowProduct} className={styles.span2} required>{selectedProduct}</h2>
                            :
                                <span onClick={handleShowProduct}>Select Product</span>
                            }
                            <button className={styles.btnDrop} onClick={handleShowProduct}>
                                <img src={arrowDown} alt="" />
                            </button>
                        </div>
                        { showProduct && 
                            <div className={styles.colDown}>
                                { productList.map((item, index) => (
                                    <Product key={index} product={item} onClick={() => handleSelectProduct(item)}/>
                                ))}
                            </div>
                        }
                    </div>
                </div>
                <div className={styles.mainGridCol}>
                    <div>
                        <h2 className={styles.head3}>Discount</h2>
                        <div className={styles.input2}>
                            <h2 className=''>{discount ? `${networkName + ' ' +  discount}%` : ''}</h2>
                            <div className={styles.disc}>
                                <img src={discountImg} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className={styles.head3}>Phone Number <span className={styles.span3}>(Select Recipient)</span></h2>
                        <div className={styles.input}>
                            <div className={styles.output}>
                                <input type='number' className={styles.phone} required placeholder='Add recipient phone number' onChange={(event)=>setRecipientNumber(event.target.value)} value={recipientNumber}/>
                                <div className={styles.call}>
                                    <img src={call} alt=""/>
                                </div>
                            </div>
                        </div>
                        {errors.recipientNumber && (
                            <div className="text-[12px] text-red-500 italic lg:text-[14px]">
                            {errors.recipientNumber}
                            </div>
                        )}
                    </div>
                </div>
                <div className={styles.mainGridCol}>
                    <div>
                        <h2 className={styles.head3}>Recipient Name <span className={styles.span4}>(optional)</span></h2>
                        <div className={styles.input}>
                            <div className={styles.output}>
                                <input type='text' className={styles.phone} required placeholder='Add recipient name' onChange={(event)=>setRecipientName(event.target.value)} value={recipientName}/>
                                <div className={styles.call}>
                                    <img src={user} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className={styles.head3}>Type Amount</h2>
                        <div className={styles.input}>
                            <div className={styles.output}>
                                <input type='number' placeholder='Type amount' required className={styles.phone} onChange={(event)=>setAmount(event.target.value)} value={amount.toLocaleString()}/>
                                <div className={styles.call}>
                                    <img src={money} alt=""/>                            
                                </div>
                            </div>
                        </div>
                        {errors.amount && (
                            <div className="text-[12px] text-red-500 italic lg:text-[14px]">
                            {errors.amount}
                            </div>
                        )}
                    </div>
                </div>
                <div className={styles.mainGridCol}>
                    <div>
                        <h2 className={styles.head3}>Total Amount</h2>
                        <div className={styles.input}>
                            <div className={styles.output1}>
                                <h2>{newAmount ? `NGN${newAmount}` : `Total Amount`}</h2>
                                <div className={styles.disc}>
                                    <img src={money} alt="" className='w-full h-full'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h2 className={styles.head3}>Payment Method</h2>
                            <div className={styles.input1}>
                                    { paymentSelected ? 
                                        <li onClick={handleShowPayment} className={styles.labelInput}> 
                                            <h2 className={styles.head4}>{name}</h2>
                                            <h2 className={styles.head4}>Wallet({paymentAmount.toLocaleString()}.00)</h2>
                                        </li> 
                                        :
                                        <h2 onClick={handleShowPayment} className={styles.head9}>Select Payment Method</h2>}
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
                            <div className={styles.colDown}>
                                {countryList.map((country) => (
                                    <Payment key={country.id} flag={country.flag} code={country.code} amount={country.amount} onClick={()=> handleSelectPayment(country.code, country.flag, country.amount)}/>
                                ))}
                            </div>
                        }
                    </div>
                </div>
            </div>
            <div className={styles.add}>
                <h2>Add to Recipient?</h2>
                <div onClick={()=>setAddRecipient(!addRecipient) } 
                    className={` w-[15px] h-[6.4px] md:w-[30px] md:h-[12px] lg:w-[50px] lg:h-[22px] lg:rounded-full rounded cursor-pointer 
                    ${ addRecipient ? "bg-[#77ff60]" : "bg-[#b1b0b0]"}`}>
                    <div className={`rounded-full w-[7.5px] h-[6.4px] md:w-[14px] md:h-[12px] lg:h-[22px] lg:w-[21px] lg:drop-shadow-md bg-[#fff] 
                    ${addRecipient ? "float-right" : "float-left"}`}>
                    </div>
                </div>
            </div>
            {codes && (
                <Modal>
                (
                <div
                    className={`${styles.balanceMoneyPop} ${
                    toggleSideBar ? "xl:w-[65%] xl:ml-[17%] lg:ml-[20%] lg:w-[40%]"
                    : "lg:w-[40%]"
                } w-[90%] xl:w-[80%] overflow-auto`}
                >
                    <img
                    onClick={()=> setCodes(false)}
                    className="absolute cursor-pointer right-2 w-[18px] h-[18px] my-[1%] md:w-[35px] md:h-[35px] lg:w-[25px] lg:h-[25px]"
                    src="/Images/transferImages/close-circle.png"
                    alt=""
                    />
                    <hr className="h-[6px] bg-[#04177f] border-none mt-[8%] md:mt-[6%] md:h-[10px]" />

                    <button
                    className={`bg-[#04177f] my-[5%] w-[88%] flex justify-center items-center mx-auto cursor-pointer text-[12px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[50%] md:rounded-[8px] md:text-[16px] lg:text-[14px] lg:w-[350px] lg:h-[38px] lg:my-[2%]`}
                    >
                    Airtime Balace USSD Codes
                    </button>
                    <h2 className="text-[12px] my-[5%] text-center md:my-[3%] md:text-[15px] lg:my-[2%] lg:text-[16px]">
                    Airtime Balance check ussd codes.
                    </h2>
                    <h2 className="text-[12px] my-[5%] text-blue-600 text-center md:my-[3%] md:text-[15px] lg:my-[2%] lg:text-[16px]">
                    Tap the network Dial button to check airtime balance:
                    </h2>
                    <div className='flex flex-col gap-1 mb-5'>
                        <button
                            className={`bg-[#FAF8F8] my-[5%] w-[88%] flex justify-center items-center mx-auto cursor-pointer text-[14px] font-semibold h-[44px] shadow-md text-black rounded-[6px] md:w-[55%] md:rounded-[8px] md:text-[16px] lg:text-[16px] lg:w-[410px] lg:h-[51px] lg:my-[2%] xl:my-[1%]`}
                            >
                            MTN Airtime Balance Code - *310#
                        </button>
                        <button
                            className={`bg-[#FAF8F8] my-[5%] w-[88%] flex justify-center items-center mx-auto cursor-pointer text-[14px] font-semibold h-[44px] shadow-md text-black rounded-[6px] md:w-[55%] md:rounded-[8px] md:text-[16px] lg:text-[16px] lg:w-[410px] lg:h-[51px] lg:my-[2%] xl:my-[1%]`}
                            >
                            AIRTEL Airtime Balance Code - *310#
                        </button>
                        <button
                            className={`bg-[#FAF8F8] my-[5%] w-[88%] flex justify-center items-center mx-auto cursor-pointer text-[14px] font-semibold h-[44px] shadow-md text-black rounded-[6px] md:w-[55%] md:rounded-[8px] md:text-[16px] lg:text-[16px] lg:w-[410px] lg:h-[51px] lg:my-[2%] xl:my-[1%]`}
                            >
                            GLO Airtime Balance Code - *310#
                        </button>
                        <button
                            className={`bg-[#FAF8F8] my-[5%] w-[88%] flex justify-center items-center mx-auto cursor-pointer text-[14px] font-semibold h-[44px] shadow-md text-black rounded-[6px] md:w-[55%] md:rounded-[8px] md:text-[16px] lg:text-[16px] lg:w-[410px] lg:h-[51px] lg:my-[2%] xl:my-[1%]`}
                            >
                            9MOBILE Airtime Balance Code - *310#
                        </button>
                    </div>

                    <button
                    onClick={()=> setCodes(false)}
                    className={`bg-[#04177f] my-[5%] w-[88%] flex justify-center items-center mx-auto cursor-pointer text-[14px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[16px] lg:text-[14px] lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
                    >
                    Okay
                    </button>
                </div>
                )
                </Modal>
            )}
            {proceed && (
                <Modal>
                (
                <div
                    className={`${styles.transferMoneyPop} ${
                    toggleSideBar ? " lg:ml-[20%] lg:w-[40%]" : "lg:w-[40%]"
                    } w-[90%] overflow-auto`}
                >
                    <img
                    onClick={()=> setProceed(false)}
                    className="absolute cursor-pointer right-2 w-[18px] h-[18px] my-[1%] md:w-[35px] md:h-[35px] lg:w-[25px] lg:h-[25px]"
                    src="/Images/transferImages/close-circle.png"
                    alt=""
                    />
                    <hr className="h-[6px] bg-[#04177f] border-none mt-[8%] md:mt-[6%] md:h-[10px]" />
                    <h2 className="text-[10px] my-[5%] text-center md:my-[3%] md:text-[15px] lg:my-[2%] lg:text-[16px]">
                    Confirm Transaction
                    </h2>
                    <p className="text-[10px] mx-[10px] text-[#0008] text-center mb-4 md:text-[12px] lg:text-[14px]">
                    You are about to purchase{" "}
                    <span className="text-[#000] font-extrabold text-[10px] md:text-[16px] lg:text-[12px]">
                    {networkName + ' ' + selectedProduct} Airtime &#8358;{amount}.00{" "}
                    </span>
                    from your NGN wallet to{" "}
                    </p>

                    <div className="flex flex-col gap-2 mt-3">
                        <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                            <p className="text-[#0008]">Network</p>
                            <span className='flex gap-1'>
                                <div className="rounded-full w-[12.02px] h-[12.02px] flex items-center justify-center text-[10px] overflow-hidden md:w-[12.02px] lg:w-[25px] md:h-[12.02px] lg:h-[25px]">
                                <img src={networkImage} alt="" className='w-full h-full object-cover'/>
                                </div> 
                                <h2 className="text-[10px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">{networkName}</h2>
                            </span>
                        </div>
                        <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                            <p className="text-[#0008]">Product</p>
                            <span>{networkName + ' ' + selectedProduct}</span>
                        </div>
                        <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                            <p className="text-[#0008]">Discount</p>
                            <span>{discount}%</span>
                        </div>
                        <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                            <p className="text-[#0008]">Phone Number</p>
                            <span>{recipientNumber}</span>
                        </div>
                        <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                            <p className="text-[#0008]">Recipient Name</p>
                            <span>{recipientName}</span>
                        </div>
                        <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                            <p className="text-[#0008]">Payment Method</p>
                            <span>{factorWalletName(name)}</span>
                        </div>
                        <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                            <p className="text-[#0008]">Total Amount</p>
                            <span>&#8358;{newAmount}</span>
                        </div>
                        <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                            <p className="text-[#0008]">Transaction Fee</p>
                            <span>&#8358;{tFee}.00</span>
                        </div>
                        <div className="flex text-[10px] md:text-[14px] w-[90%] mx-auto justify-between  lg:text-[16px]">
                            <p className="text-[#0008]">Points Earned</p>
                            <span className="text-[#00AA48]">{points}</span>
                        </div>
                    </div>

                    <div className="bg-[#0001] h-[45px] my-5 flex justify-between items-center px-[4%]">
                    <div className="flex gap-2 items-center">
                        <div className="bg-white rounded-full h-[27px] w-[27px] flex justify-center items-center">
                        <img className="w-[16px] h-[16px]" src={image} alt="/" />
                        </div>
                        <p className="text-[10px] md:text-[14px]  lg:text-[16px]">
                        Available Balance{" "}
                        <span className="text-[#0003]">( {name+paymentAmount}.00 )</span>
                        </p>
                    </div>
                    <img
                        className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                        src="./Images/Dashboardimages/arrowright.png"
                        alt="/"
                    />
                    </div>
                    <button
                    onClick={handleConfirm}
                    className={`bg-[#04177f] my-[5%] w-[88%] flex justify-center items-center mx-auto cursor-pointer text-[14px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[16px] lg:text-[14px] lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
                    >
                    Confirmed
                    </button>
                </div>
                )
                </Modal>
            )}
            {
                confirm && (
                    <Modal>
                        <div
                            className={`${styles.inputPin} ${
                            toggleSideBar ? "md:w-[45%] lg:w-[40%] lg:ml-[20%]" : "lg:w-[40%]"
                            } md:w-[55%] w-[90%]`}
                        >
                            <img
                            onClick={() => setConfirm(false)}
                            className="absolute cursor-pointer right-2 w-[18px] h-[18px] my-[1%] md:w-[35px] md:h-[35px] lg:w-[25px] lg:h-[25px]"
                            src="/Images/transferImages/close-circle.png"
                            alt=""
                            />
                            <hr className="h-[6px] bg-[#04177f] border-none mt-[8%] md:mt-[6%] md:h-[10px]" />
                            <p className="text-[9px] md:text-[16px] font-extrabold text-center my-[8%] lg:my-[%]">
                            Input PIN to complete transaction
                            </p>
                            <div className="flex flex-col gap-[10px] justify-center items-center font-extrabold mb-[7%]">
                            <div className=" flex justify-center items-center ml-[5%] gap-[10px] md:ml-[5%] md:gap-[30px]">
                                {" "}
                                {isVisible ? (
                                <OtpInput
                                    value={inputPin}
                                    inputType="tel"
                                    onChange={setInputPin}
                                    numInputs={4}
                                    shouldAutoFocus={true}
                                    inputStyle={{
                                    color: "#403f3f",
                                    width: 30,
                                    height: 30,
                                    borderRadius: 3,
                                    }}
                                    renderInput={(props) => (
                                    <input {...props} className="inputOTP mx-[3px]" />
                                    )}
                                />
                                ) : (
                                <div className="text-[24px] md:text-[24px] mt-1">
                                    * * * *{" "}
                                </div>
                                )}
                                <div
                                className="text-[#0003] text-xl md:text-3xl"
                                onClick={toggleVisibility}
                                >
                                {isVisible ? <AiFillEye /> : <AiFillEyeInvisible />}
                                </div>
                            </div>
                            <p className="text-[8px] md:text-[12px] text-[#04177f]">
                                Forgot Pin ?
                            </p>
                            </div>
                            <button
                            onClick={handleTransactionSuccessClose}
                            disabled={inputPin.length !== 4 ? true : false}
                            className={`${
                                inputPin.length !== 4 ? "bg-[#0008]" : "bg-[#04177f]"
                            } my-[5%] w-[225px] flex justify-center items-center mx-auto cursor-pointer text-[10px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[16px] lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
                            >
                            Purchase
                            </button>
                        </div>
                    </Modal>
                )
            }
            {transactSuccessPopUp && (
                <Modal>
                {/* <TransactFailedPopUp/> */}
                <div
                    className={`${styles.successfulTwo} ${
                    toggleSideBar ? "md:w-[45%] lg:ml-[20%] lg:w-[40%]" : "lg:w-[40%]"
                    } md:w-[45%] w-[90%] overflow-auto`}
                >
                    <div className="flex justify-between items-center mx-[3%] my-[2%] lg:my-[1%]">
                    <img
                        onClick={() => setTransactSuccessPopUp(false)}
                        className=" w-[18px] h-[18px] md:w-[35px] md:h-[35px] lg:w-[35px] lg:h-[25px]"
                        src="/Images/login/arpLogo.png"
                        alt=""
                    />

                    <img
                        onClick={() => setTransactSuccessPopUp(false)}
                        className=" w-[18px] h-[18px] md:w-[35px] md:h-[35px] lg:w-[29px] lg:h-[29px]"
                        src="/Images/transferImages/close-circle.png"
                        alt=""
                    />
                    </div>
                    <hr className="h-[6px] bg-[#04177f] border-none md:h-[10px]" />
                    <h2 className="text-[12px] my-[3%] text-center md:text-[20px] md:my-[3%] lg:text-[14px] lg:my-[2%]">
                    Transaction Successful
                    </h2>
                    <img
                    className="w-[50px] h-[50px] mx-auto mb-[2%] lg:w-[70px] lg:h-[70px]"
                    src="./Gif/checkMarkGif.gif"
                    alt="/"
                    />
                    <p className="text-[10px] text-[#0008] mx-[10px] text-center mb-5 md:text-[14px] lg:text-[12px]">
                    You have successfully purchased{" "}
                    <span className="text-[#000] font-extrabold text-[10px] md:text-[14px] lg:text-[12px]">
                    {networkName + ' ' + selectedProduct} Airtime &#8358;{amount}.00{" "}
                    </span>
                    from your NGN wallet to{" "}
                    </p>

                    <div className="flex flex-col gap-1 lg:gap-4">
                    <div className="flex text-[10px] md:text-[12px] w-[90%] mx-auto justify-between  lg:text-[14px]">
                            <p className="text-[#0008]">Network</p>
                            <span className='flex gap-1'>
                                <div className="rounded-full w-[12.02px] h-[12.02px] flex items-center justify-center text-[6px] overflow-hidden md:w-[12.02px] lg:w-[25px] md:h-[12.02px] lg:h-[25px]">
                                <img src={networkImage} alt="" className='w-full h-full object-cover'/>
                                </div> 
                                <h2 className="text-[10px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">{networkName}</h2>
                            </span>
                        </div>
                        <div className="flex text-[10px] md:text-[12px] w-[90%] mx-auto justify-between  lg:text-[14px]">
                            <p className="text-[#0008]">Product</p>
                            <span>{networkName + ' ' + selectedProduct}</span>
                        </div>
                        <div className="flex text-[10px] md:text-[12px] w-[90%] mx-auto justify-between  lg:text-[14px]">
                            <p className="text-[#0008]">Phone Number</p>
                            <span>{recipientNumber}</span>
                        </div>
                        <div className="flex text-[10px] md:text-[12px] w-[90%] mx-auto justify-between  lg:text-[14px]">
                            <p className="text-[#0008]">Recipient Name</p>
                            <span>{recipientName}</span>
                        </div>
                        <div className="flex text-[10px] md:text-[12px] w-[90%] mx-auto justify-between  lg:text-[14px]">
                            <p className="text-[#0008]">Payment Method</p>
                            <span>{factorWalletName(name)}</span>
                        </div>
                        <div className="flex text-[10px] md:text-[12px] w-[90%] mx-auto justify-between  lg:text-[14px]">
                            <p className="text-[#0008]">Amount</p>
                            <span>&#8358;{amount}</span>
                        </div>
                        <div className="flex text-[10px] md:text-[12px] w-[90%] mx-auto justify-between  lg:text-[12px]">
                            <p className="text-[#0008]">Order Number</p>
                            <span>122555556464564</span>
                        </div>
                    </div>

                    <div className="bg-[#F2FAFF] mx-5 rounded-md h-[55px] my-5 flex justify-between items-center px-[4%] md:h-[75px] lg:h-[85px]">
                    <p className="text-[8px] text-center mx-auto w-[201px] md:text-[14px] md:w-[92%] lg:text-[14px]">
                    The airtime purchase has been sent successfully to the recipient phone number. Please kindly engage the recipient to check his/her balance to confirm the value. You can contact us for any further assistance.
                    </p>
                    </div>
                    <div className="flex w-[70%] mx-auto items-center gap-[5%] md:w-[60%] lg:my-[5%]">
                    <button
                        onClick={() => {
                            setTransactSuccessPopUp(false);
                            // window.location.reload();
                            setSelected("");
                            setRecipientNumber("");
                            setRecipientName("");
                            setSelectedProduct("");
                            setAmount("");
                            setDiscount("");
                            setPaymentSelected("");
                          }}
                        className={`bg-[#04177f] w-[111px] flex justify-center items-center mx-auto cursor-pointer text-[12px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[16px] lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
                    >
                        Done
                    </button>
                    <Link to="/airtime-vtu-receipt">
                        <button
                        onClick={handleReceipt}
                        className={`border-[1px] w-[111px] border-[#04177f] flex justify-center items-center mx-auto cursor-pointer text-[12px] font-extrabold h-[40px] rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[16px] lg:w-[163px] lg:h-[38px] lg:my-[2%]`}
                        >
                        Receipt
                        </button>
                    </Link>
                    </div>
                </div>
                </Modal>
            )}
            {receipt && (
                <AirtimeVtuReceipt
                networkName={networkName}
                selectedProduct={selectedProduct}
                recipientNumber={recipientNumber}
                recipientName={recipientName}
                amount={amount}
                />
            )}
            <div className={styles.containFlex2}>
                <button className={`${
                amount.length < 4 ? "bg-[#0008]" : "bg-[#04177f]"
                } w-full flex justify-center items-center mr-auto cursor-pointer text-[14px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[20px] lg:text-[16px] lg:h-[38px] lg:my-[4%]`} onClick={handleProceed}>Proceed
                </button>
            </div>
        </div>
        <div className={styles.help}>
                <h2>You need help?</h2>
                <Link to={`/ContactUs`} className={styles.btnContact}>Contact Us</Link>
        </div>
      </div>
    </DashBoardLayout>
  );
}

export default AirtimeVtu;
