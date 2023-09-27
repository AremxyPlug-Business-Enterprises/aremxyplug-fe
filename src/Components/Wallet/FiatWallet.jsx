import React, { useState } from 'react';
import { DashBoardLayout } from '../Dashboard/Layout/DashBoardLayout';
import { Link } from 'react-router-dom';
import { BsEyeFill } from 'react-icons/bs'
import { Navigate } from 'react-router-dom'
import AddWallet from './AddWallet';
import AddAccount from './AddAccount'
 
const FiatWallet = () => {
  const [showModal, setShowModal] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const [selection, setSelection] = useState('');
  const [addWalletModal, setAddWalletModal] = useState(false);

  const amt = 10000

    const countryList = [
        {
          id:1,
          name: 'Nigeria',
          code: 'NGN',
          flag: require('./Images/ng.svg').default
        },
        {
          id:2,
          name: 'United States',
          code: 'USD',
          flag: require('./Images/us.svg').default
        },
        {
          id:3,
          name: 'United Kingdom',
          code: 'GBP',
          flag: require('./Images/gb.svg').default
        },
        {
          id:4,
          name: 'European Union',
          code: 'EUR',
          flag: require('./Images/eu.svg').default
        },
        {
          id:5,
          name: 'Australia',
          code: 'AUD',
          flag: require('./Images/au.svg').default
        },
        {
          id:6,
          name: 'Kenya',
          code: 'KSH',
          flag: require('./Images/ke.svg').default
        },
      ];

      const handleSelection =(value)=> {
        setSelection(value);
        setShowModal(true);
      }

      const displayMoney =(index)=> {
        setCurrentId(index);
        setClicked(!clicked);
      }
      // check if the countries in the list is among the already existing countries
      const notAvailableCountries = ['United States', 'United Kingdom', 'Kenya', 'Australia', 'European Union']
      const notAvailable = notAvailableCountries.includes(selection);
  return (
    <DashBoardLayout>
      {/* this is to make it display default if no selection then render otherwise when selected */}
      { selection === '' ?
        <>
        <div className='flex flex-col justify-between h-full'>
          <div>
            <div className="w-full h-[65.33px] md:h-[112.29px] lg:h-[196px] rounded-[7px] md:rounded-[11.5px] bg-[#ff4343]/[0.5] flex px-[16px] lg:px-[50px] justify-around lg:rounded-[20px]">
              <div className='py-[13px] lg:py-[40px]'>
                <h2 className='text-[8px] md:text-[13.75px] md:leading-[20.63px] font-bold mb-2 lg:text-[24px] lg:mb-4'>FIAT WALLETS</h2>
                <h2 className='text-[6.6px] md:text-[11.46px] md:leading-[15px] lg:text-[20px] lg:leading-[26px] mb-3'>The below Fiat Currency Wallets are reserved for your account only.</h2>
              </div>
              <div className='h-full ml-[15px]'>
                <img src='./Images/wallet/fiatBanner.png' alt="" className='h-full'/>
              </div>
            </div>
            <div className='mt-[25.39px] md:mt-[35px] lg:mt-[60px] flex items-center w-full gap-[28px]'>
              <div className='w-[60%] lg:w-[65%] h-[22px] md:h-[25px] lg:h-[51px]'>
                <div className="w-full relative">
                  <input type="text" name="" placeholder='Search for Wallets, e.g; NGN or Nigeria' className='text-[7px] leading-[10.5px] p-[4px] md:text-[9.17px] md:leading-[11.97px] w-full h-full outline-none placeholder:text-[7px] placeHolder:leading-[10.5px] rounded-[4px] border block px-1 md:placeholder:text-[9.17px] lg:placeholder:text-base lg:placeholder:leading-[20px] lg:rounded-[12px] lg:text-base lg:leading-[20px] lg:p-3'/>
                  <div className='absolute right-[4px] bottom-[3px] lg:right-[7px] lg:bottom-[10px] w-[12px] h-[12px] md:w-[11.46px] md:h-[11.46px] md:bottom-1 lg:w-[20px] lg:h-[20px]'>
                      <img src="./Images/wallet/search-status.svg" alt="searchIcon" className='w-full h-full'/>  
                  </div>
                </div>
              </div>
              <div className="w-[40%] lg:w-[35%] border flex h-[20px] md:h-[23px] lg:h-[48px] rounded-[4px] items-center justify-between px-1 lg:rounded-[12px] lg:px-3">
                <button className='text-[7px] leading-[10.5px] block md:text-[9.17px] lg:rounded-[12px] lg:text-base lg:leading-[20px] h-full'>Refresh Wallet Balances</button>
                  <div className='w-[12px] h-[12px] md:w-[11.46px] md:h-[11.46px] lg:w-[20px] lg:h-[20px]'>
                      <img src="./Images/wallet/refresh-square-2.svg" alt="searchIcon" className='w-full h-full object-cover'/>  
                  </div>
              </div>
            </div>
            <div className='mt-[25.39px] md:mt-[35px] lg:mt-[60px] flex items-center justify-between'>
              <button className='bg-primary text-white text-[7px] leading-[10.5px] rounded-[4px] md:rounded-[7px] md:text-[9.17px] md:leading-[13.75px] flex items-center lg:text-[16px] lg:leading-[24px] justify-center py-[5px] w-[85.5px] md:w-[124px] lg:w-[231px] lg:py-[10px]'>
                <div className='mr-1 w-[11.38px] h-[11.38px] md:w-[19.48px] md:h-[19.48px] lg:w-[34px] lg:h-[34px]'>
                  <img src="./Images/wallet/card-add.png" alt="" className='object-cover w-full'/>
                </div>
                <h2>Add Money</h2>
              </button>
              <button className='bg-primary text-white text-[7px] leading-[10.5px] md:text-[9.17px] md:leading-[13.75px] rounded-[4px] md:rounded-[7px] flex items-center lg:text-[16px] lg:leading-[24px] justify-center py-[5px] w-[85.5px] md:w-[124px] lg:w-[231px] lg:py-[10px]' onClick={() => setAddWalletModal(true)}>
                <div className='mr-1 w-[11.38px] h-[11.38px] md:w-[19.48px] md:h-[19.48px] lg:w-[34px] lg:h-[34px]'>
                  <img src="./Images/wallet/wallet-add.png" alt="" className='object-cover w-full'/>
                </div>
                <h2>Add Wallets</h2>
              </button>
              <Link to='/currencyConversion'>
                <button className='bg-primary text-white text-[7px] leading-[10.5px] md:text-[9.17px] md:leading-[13.75px] rounded-[4px] md:rounded-[7px] flex items-center lg:text-[16px] lg:leading-[24px] justify-center py-[5px] w-[85.5px] md:w-[124px] lg:w-[231px] lg:py-[10px]'>
                <div className='mr-1 w-[11.38px] h-[11.38px] md:w-[19.48px] md:h-[19.48px] lg:w-[34px] lg:h-[34px]'>
                  <img src="./Images/wallet/recovery-convert.png" alt="" className='object-cover w-full'/>
                </div>
                <h2>Convert Currency</h2>
              </button>
              </Link>
            </div>
            <div className="mt-[25.39px] md:mt-[35px] lg:mt-[60px] px-2 py-2 flex flex-col gap-2" style={{boxShadow: `0px 0px 6.666667461395264px 0px rgba(0, 0, 0, 0.25)`}}>
              <div className='flex justify-between items-baseline font-bold text-[8px] leading-[12px] md:text-[9.17px] md:leading-[11.92px] border-b py-1 lg:text-[16px] lg:leading-[24px]'>
                <h2 className='font-bold'>Country</h2>
                <h2 className='font-bold'>Currency</h2>
                <h2 className='font-bold'>Balance</h2>
              </div>
              <div className="flex flex-col gap-2">
                {countryList.map((country) => (
                  <div className="grid grid-cols-3 text-[7px] leading-[10.5px] pb-[8px] md:text-[10px] md:leading-[15px] border-b last:border-b-0 last:pb-0 lg:text-[16px] lg:leading-[24px] cursor-pointer lg:pb-3 lg:pt-2" key={country.id}>
                    <h2 className='text-slate-400'>{country.name}</h2>
                    <div className='flex gap-1 items-center justify-center lg:gap-2' onClick={() => handleSelection(country.name)}>
                      <div className='w-[10px] h-[10px] md:w-[15px] md:h-[15px] lg:w-[20px] lg:h-[20px] rounded-full overflow-hidden flex items-center justify-center'>
                        <img src={country.flag} alt="" className='w-full h-full object-cover'/>
                      </div>
                      <h2 className='text-right'>{country.code}</h2>
                    </div>
                    <div className='flex gap-1 justify-end items-center text-slate-400'>
                      { currentId === country.id && clicked ? <h2>{country.code}{amt}</h2> : <h2>*****</h2>}
                      <button onClick={()=> displayMoney(country.id)}>
                        <BsEyeFill className='text-[#92abfe]'/>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t -mx-2 px-2 text-right pt-1 md:pt-2 lg:pt-3 lg:pb-2 flex justify-end cursor-pointer gap-2 items-center">
                <div className="text-[7px] leading-[10.5px] md:text-[10px] md:leading-[15px] lg:text-[15px] lg:leading-[22.5px] flex items-center gap-1">
                    <span>{'<'}</span>
                    <h2>1</h2>
                    <h2>2</h2>
                    <h2>3</h2>
                    <h2>4</h2>
                    <h2>5</h2>
                    <h2>6</h2>
                    <span>{'>'}</span>
                </div>
                <div className='border text-[7px] md:text-[10px] md:leading-[15px] leading-[10.5px] lg:text-[15px] lg:leading-[22.5px] p-[3px] rounded-[4px]'>
                  <h2>10</h2>
                </div>
                <h2 className='text-[7px] leading-[10.5px] md:text-[10px] md:leading-[15px] lg:text-[15px] lg:leading-[22.5px]'>Goto</h2>
                <div className='border text-[7px] leading-[10.5px] p-[3px] rounded-[4px] md:text-[10px] md:leading-[15px] lg:text-[15px] lg:leading-[22.5px]'>
                  <h2>10</h2>
                </div>
              </div>
            </div>
          </div>
          <div className='flex gap-2 justify-center items-center md:mt-40'>
            <h2 className='text-[8px] leading-[12px] lg:text-[12px]'>You need help?</h2>
            <Link to={`/ContactUs`} className='text-[7px] leading-[10.5px] text-white bg-primary px-2 py-1 rounded-full lg:text-[8px]'>Contact Us</Link>
          </div>
        </div>
        {addWalletModal && <AddWallet onClick={() => setAddWalletModal(false)}/>}
        </> : 
        <>
          { notAvailable ? 
          <>
            <div className='flex flex-col justify-between h-full'>
              <div>
                <div className="w-full h-[65.33px] md:h-[112.29px] lg:h-[196px] rounded-[7px] md:rounded-[11.5px] bg-[#ff4343]/[0.5] flex px-[16px] lg:px-[50px] justify-around lg:rounded-[20px]">
                  <div className='py-[13px] lg:py-[40px]'>
                    <h2 className='text-[8px] md:text-[13.75px] md:leading-[20.63px] font-bold mb-2 lg:text-[24px] lg:mb-4'>FIAT WALLETS</h2>
                    <h2 className='text-[6.6px] md:text-[11.46px] md:leading-[15px] lg:text-[20px] lg:leading-[26px] mb-3'>The below Fiat Currency Wallets are reserved for your account only.</h2>
                  </div>
                  <div className='h-full ml-[15px]'>
                    <img src='./Images/wallet/fiatBanner.png' alt="" className='h-full'/>
                  </div>
                </div>
                <div className='mt-[25.39px] md:mt-[35px] lg:mt-[60px] flex items-center w-full gap-[28px]'>
                  <div className='w-[60%] lg:w-[65%] h-[22px] md:h-[25px] lg:h-[51px]'>
                    <div className="w-full relative">
                      <input type="text" name="" placeholder='Search for Wallets, e.g; NGN or Nigeria' className='text-[7px] leading-[10.5px] p-[4px] md:text-[9.17px] md:leading-[11.97px] w-full h-full outline-none placeholder:text-[7px] placeHolder:leading-[10.5px] rounded-[4px] border block px-1 md:placeholder:text-[9.17px] lg:placeholder:text-base lg:placeholder:leading-[20px] lg:rounded-[12px] lg:text-base lg:leading-[20px] lg:p-3'/>
                      <div className='absolute right-[4px] bottom-[3px] lg:right-[7px] lg:bottom-[10px] w-[12px] h-[12px] md:w-[11.46px] md:h-[11.46px] md:bottom-1 lg:w-[20px] lg:h-[20px]'>
                          <img src="./Images/wallet/search-status.svg" alt="searchIcon" className='w-full h-full'/>  
                      </div>
                    </div>
                  </div>
                  <div className="w-[40%] lg:w-[35%] border flex h-[20px] md:h-[23px] lg:h-[41px] rounded-[4px] items-center justify-between px-1 lg:rounded-[12px] lg:px-3">
                    <button className='text-[7px] leading-[10.5px] block md:text-[9.17px] lg:rounded-[12px] lg:text-base lg:leading-[20px] h-full'>Refresh Wallet Balances</button>
                      <div className='w-[12px] h-[12px] md:w-[11.46px] md:h-[11.46px] lg:w-[20px] lg:h-[20px]'>
                          <img src="./Images/wallet/refresh-square-2.svg" alt="searchIcon" className='w-full h-full object-cover'/>  
                      </div>
                  </div>
                </div>
                <div className='mt-[25.39px] md:mt-[35px] lg:mt-[60px] flex items-center justify-between'>
                  <button className='bg-primary text-white text-[7px] leading-[10.5px] rounded-[4px] md:rounded-[7px] md:text-[9.17px] md:leading-[13.75px] flex items-center lg:text-[16px] lg:leading-[24px] justify-center py-[5px] w-[85.5px] md:w-[124px] lg:w-[231px] lg:py-[10px]'>
                    <div className='mr-1 w-[11.38px] h-[11.38px] md:w-[19.48px] md:h-[19.48px] lg:w-[34px] lg:h-[34px]'>
                      <img src="./Images/wallet/card-add.png" alt="" className='object-cover w-full'/>
                    </div>
                    <h2>Add Money</h2>
                  </button>
                  <button className='bg-primary text-white text-[7px] leading-[10.5px] md:text-[9.17px] md:leading-[13.75px] rounded-[4px] md:rounded-[7px] flex items-center lg:text-[16px] lg:leading-[24px] justify-center py-[5px] w-[85.5px] md:w-[124px] lg:w-[231px] lg:py-[10px]' onClick={() => setAddWalletModal(true)}>
                    <div className='mr-1 w-[11.38px] h-[11.38px] md:w-[19.48px] md:h-[19.48px] lg:w-[34px] lg:h-[34px]'>
                      <img src="./Images/wallet/wallet-add.png" alt="" className='object-cover w-full'/>
                    </div>
                    <h2>Add Wallets</h2>
                  </button>
                  <button className='bg-primary text-white text-[7px] leading-[10.5px] md:text-[9.17px] md:leading-[13.75px] rounded-[4px] md:rounded-[7px] flex items-center lg:text-[16px] lg:leading-[24px] justify-center py-[5px] w-[85.5px] md:w-[124px] lg:w-[231px] lg:py-[10px]'>
                    <div className='mr-1 w-[11.38px] h-[11.38px] md:w-[19.48px] md:h-[19.48px] lg:w-[34px] lg:h-[34px]'>
                      <img src="./Images/wallet/recovery-convert.png" alt="" className='object-cover w-full'/>
                    </div>
                    <h2>Convert Currency</h2>
                  </button>
                </div>
                <div className="mt-[25.39px] md:mt-[35px] lg:mt-[60px] px-2 py-2 flex flex-col gap-2" style={{boxShadow: `0px 0px 6.666667461395264px 0px rgba(0, 0, 0, 0.25)`}}>
                  <div className='flex justify-between items-baseline font-bold text-[8px] leading-[12px] md:text-[9.17px] md:leading-[11.92px] border-b py-1 lg:text-[16px] lg:leading-[24px]'>
                    <h2 className='font-bold'>Country</h2>
                    <h2 className='font-bold'>Currency</h2>
                    <h2 className='font-bold'>Balance</h2>
                  </div>
                  <div className="flex flex-col gap-2">
                      {countryList.map((country) => (
                        <div className="grid grid-cols-3 text-[7px] leading-[10.5px] pb-[8px] md:text-[10px] md:leading-[15px] border-b last:border-b-0 last:pb-0 lg:text-[16px] lg:leading-[24px] cursor-pointer lg:pb-3 lg:pt-2" key={country.id}>
                          <h2 className='text-slate-400'>{country.name}</h2>
                          <div className='flex gap-1 items-center justify-center lg:gap-2' onClick={() => handleSelection(country.name)}>
                            <div className='w-[10px] h-[10px] md:w-[15px] md:h-[15px] lg:w-[20px] lg:h-[20px] rounded-full overflow-hidden flex items-center justify-center'>
                              <img src={country.flag} alt="" className='w-full h-full object-cover'/>
                            </div>
                            <h2 className='text-right'>{country.code}</h2>
                          </div>
                          <div className='flex gap-1 justify-end items-center text-slate-400'>
                            { currentId === country.id && clicked ? <h2>{country.code}{amt}</h2> : <h2>*****</h2>}
                            <button onClick={()=> displayMoney(country.id)}>
                              <BsEyeFill className='text-[#92abfe]'/>
                            </button>
                          </div>
                        </div>
                      ))}
                  </div>
                  <div className="border-t -mx-2 px-2 text-right pt-1 md:pt-2 lg:pt-3 lg:pb-2 flex justify-end cursor-pointer gap-2 items-center">
                    <div className="text-[7px] leading-[10.5px] md:text-[10px] md:leading-[15px] lg:text-[15px] lg:leading-[22.5px] flex items-center gap-1">
                        <span>{'<'}</span>
                        <h2>1</h2>
                        <h2>2</h2>
                        <h2>3</h2>
                        <h2>4</h2>
                        <h2>5</h2>
                        <h2>6</h2>
                        <span>{'>'}</span>
                    </div>
                    <div className='border text-[7px] md:text-[10px] md:leading-[15px] leading-[10.5px] lg:text-[15px] lg:leading-[22.5px] p-[3px] rounded-[4px]'>
                      <h2>10</h2>
                    </div>
                    <h2 className='text-[7px] leading-[10.5px] md:text-[10px] md:leading-[15px] lg:text-[15px] lg:leading-[22.5px]'>Goto</h2>
                    <div className='border text-[7px] leading-[10.5px] p-[3px] rounded-[4px] md:text-[10px] md:leading-[15px] lg:text-[15px] lg:leading-[22.5px]'>
                      <h2>10</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex gap-2 justify-center items-center md:mt-40'>
                <h2 className='text-[8px] leading-[12px] lg:text-[12px] lg:leading-[18px]'>You need help?</h2>
                <Link to={`/ContactUs`} className='text-[7px] leading-[10.5px] text-white bg-primary px-2 py-1 rounded-full lg:text-[8px]'>Contact Us</Link>
              </div>
            </div>
            {addWalletModal && <AddWallet onClick={() => setAddWalletModal(false)}/>}
            { showModal && <AddAccount onClick={() => setShowModal(false)}/>}
          </> :
          <>
            <Navigate to={`/new-wallet`} replace={true}/>
          </>
          }

        </> 
       }
    </DashBoardLayout>
  );
}

export default FiatWallet;
