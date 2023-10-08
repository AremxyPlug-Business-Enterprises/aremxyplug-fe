import React, { useContext, useState } from 'react'
// import { useState } from 'react';
import styles from './AirtimeVtu.module.css'
import { DashBoardLayout } from '../Dashboard/Layout/DashBoardLayout';
import { Link } from 'react-router-dom';
import { ContextProvider } from '../Context';
import arrowDown from './Images/arrow-down.svg';
import Joi from "joi";
import call from './Images/call.svg';
import user from './Images/user.svg';
// import { Modal } from "../Screens/Modal/Modal";

const AddRecipient = () => {

    const {networkName, setNetworkName} = useContext(ContextProvider);
    const {recipientName, setRecipientName} = useContext(ContextProvider);
    const {recipientNumber, setRecipientNumber} = useContext(ContextProvider);
    const {networkImage, setNetworkImage} = useContext(ContextProvider);

    const [errors, setErrors] = useState({});
    // const [save, setSave] = useState(false);
    const [showList, setShowList] = useState(false);
    const [selected, setSelected] = useState(false);

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

    const handleSelectNetwork =(name, image, val)=> {
        setNetworkName(name);
        setNetworkImage(image);
        setShowList(false);
        setSelected(true);
    }

    const handleShowList =()=> {
        setShowList(!showList);
        setNetworkName('');
        setNetworkImage('');
    }

    const schema = Joi.object({
        recipientNumber: Joi.string()
          .pattern(new RegExp(/^\d{11,}/))
          .required()
          .messages({
            "string.pattern.base": "Phone number should be 11 digits ",
          })
      });

      const handleSave = (e) => {
        e.preventDefault();

        const { error } = schema.validate({
        recipientNumber,
        });

        if (error) {
        setErrors(
            error.details.reduce((acc, curr) => {
            acc[curr.path[0]] = curr.message;
            return acc;
            }, {})
        );
        } else {
        // setSave(true);
        setErrors({});
        }
    };

  return (
    <DashBoardLayout>
        <div className={styles.AirtimeTops1}>
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
                <div className="flex text-[#7c7c7c] text-[10px] leading-[26px] items-center gap-[8px] md:text-[12px] lg:text-[20px]">
                    <p>Add Recipient Details </p>
                    <img
                    className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                    src="./Images/Dashboardimages/arrowright.png"
                    alt="/"
                    />
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
                    </div>
                </div>
                <div className={styles.containFlex3}>
                    <button className={`${
                    recipientNumber.length < 11 ? "bg-[#0008]" : "bg-[#04177f]"
                    } w-full flex justify-center items-center mr-auto cursor-pointer text-[14px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[20px] lg:text-[16px] lg:h-[38px] lg:my-[4%]`} onClick={handleSave}>Save
                    </button>
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

export default AddRecipient
