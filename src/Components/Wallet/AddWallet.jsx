import React from 'react';
import { useState } from 'react';
import { Navigate } from 'react-router-dom'

const AddWallet = ({onClick}) => {
  const [image, setImage] = useState('');
  const [countryName, setCountryName] = useState('');
  const [showList, setShowList] = useState(false);
  const [selected, setSelected] = useState(false);
  const [countryCode, setCountryCode] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [addAccount, setAddAccount] = useState(false);
  const [notAccount, setNotAccount] = useState(false);
  const [redirect, setRedirect] = useState(false);
  
  const countryList = [
    {
      id:1,
      name: 'Nigeria',
      code: 'NGN',
      flag: require('./Images/ng.svg').default,
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

  const Country =({name, flag, onClick})=> {
    return (
      <li className="px-1 border-b flex items-center py-[3px] gap-1 last:border-b-0 md:py-[6px] cursor-pointer lg:px-2 lg:gap-2" onClick={onClick}>
        <div className="rounded-full w-[12.02px] h-[12.02px] flex items-center justify-center text-[6px] overflow-hidden md:w-[12.02px] lg:w-[20px] md:h-[12.02px] lg:h-[20px]">
          <img src={flag} alt="" className='w-full h-full object-cover'/>
        </div> 
        <h2 className="text-[8px] leading-[12px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">{name}</h2>
      </li>
    )
  }

  const placeholder = 'Search Wallets'

  const handleShowList =()=> {
    setShowList(!showList);
    setCountryName('');
    setCountryCode('');
    setImage(null);
  }

  const handleSelect =(name, flag, alt)=> {
    setCountryName(name);
    setImage(flag);
    setCountryCode(alt);
    setShowList(false);
    setSelected(true);
    setAddAccount(false);
  }
  const handleAddAccount =()=> {
  const availableCountries = ['Nigeria']
  const available = availableCountries.includes(countryName);
  if (available){
    setAddAccount(true);
  } else {
    setNotAccount(true);
  }
 }

 if (redirect) {
  window.location.reload();
  return <Navigate to='/fiat-wallet'/>
 }

  return (
    <div className='fixed top-0 left-0 w-full h-full bg-black/[0.4] z-[800] flex items-center justify-center'>
      {/* condition for it account already exists */}
      { addAccount ? 
      <>
      <div className='bg-white p-5 mx-[5%] md:mx-[25%] grow pt-[15px] pb-[33px] px-[22px] rounded-[8px] h-[300px] relative md:rounded-[11.5px] lg:h-[500px]' >
        <div className='w-[141.14px] h-[173.86px] lg:w-[318px] lg:h-[380px] md:w-[217.7px] md:h-[182.344px] absolute right-0 top-0'>
          <img src='./Images/wallet/orangeBanner.png' alt="" className=' rounded-r-md object-cover w-full'/>
        </div>
        <h2 className='text-center text-[10px] leading-[15px] mb-[10px] font-semibold md:text-[12px] md:leading-[18px] lg:text-base lg:leading-[24px]'>Add Wallet</h2>
        <h2 className='text-[7px] leading-[10.5px] mb-[6px] text-center md:text-[10px] md:leading-[15px] lg:text-base lg:leading-[24px]'>This Wallet has already exists.</h2>
        <div className='flex justify-center items-center mt-[18%] lg:mt-[8%] md:mt-[4%]'>
          <div className='w-[110px] h-[110px] lg:w-[220px] lg:h-[220px] md:w-[150px] md:h-[150px]'>
            <img src="./Images/wallet/gift.gif" alt=""/>
          </div>
        </div>
        <div className='flex gap-[45px] absolute bottom-[22px] md:justify-center md:gap-[20px] lg:w-[93%] lg:gap-[30px] md:w-[91%]' >
          <button className='text-[10px] leading-[15px] bg-primary px-[28.6px] py-[10px] text-white rounded-[7px] md:text-[12px] md:leading-[18px] lg:text-base lg:leading-[24px]' onClick={() => setRedirect(true)}>View Wallet</button>
          <button className='text-[10px] leading-[15px]  px-[28.6px] py-[10px] text-red-500 rounded-[7px] hover:bg-red-500 hover:text-white lg:text-base lg:leading-[24px]' onClick={onClick}>Cancel</button>
        </div>
      </div>
      </> 
      :
      <>
        {/* condition for if account does not exist */}
        { notAccount ? 
      <>
        <div className='bg-white p-5 mx-[5%] md:mx-[25%] grow pt-[15px] pb-[33px] px-[22px] rounded-[8px] h-[300px] lg:h-[500px] relative' >
          <div className='w-[141.14px] h-[173.86px] lg:w-[318px] lg:h-[380px] absolute right-0 top-0'>
            <img src='./Images/wallet/pinkBanner.png' alt="" className=' rounded-r-md object-cover w-full'/>
          </div>
          <h2 className='text-center text-[10px] leading-[15px] mb-[10px] font-semibold md:text-[12px] md:leading-[18px] lg:text-base lg:leading-[24px]'>Add Wallet</h2>
          <h2 className='text-[7px] leading-[10.5px] mb-[6px] text-center md:text-[12px] md:leading-[18px] lg:text-base lg:leading-[24px]'>This Wallet is currently not available.</h2>
          <div className='flex justify-center items-center mt-[10%] lg:mt-[8%]'>
            <div className='w-[110px] h-[110px] lg:w-[220px] lg:h-[220px]'>
              <img src="./Images/wallet/spinner.gif" alt=""/>
            </div>
          </div>
          <div className='w-[85%] absolute bottom-[22px] lg:w-[93%] md:flex md:justify-center'>
            <button className='w-full md:w-fit text-[10px] leading-[15px] bg-primary px-[28.6px] py-[10px] text-white rounded-[7px] lg:text-base lg:leading-[24px]' onClick={onClick}>Okay</button>
          </div>
        </div>
      </> 
        :
        <div className='bg-white p-5 mx-[5%] md:mx-[15%] lg:mx-[25%] grow pt-[15px] pb-[33px] px-[22px] md:px-[80px] lg:px-[100px] rounded-[8px] h-[300px] md:h-[350px] relative lg:h-[500px]' >
          <div className='w-[141.14px] h-[173.86px] lg:w-[318px] lg:h-[380px] absolute right-0 top-0'>
            <img src='./Images/wallet/greenBanner.png' alt="" className=' rounded-r-md object-cover w-full'/>
          </div>
          <h2 className='text-center text-[10px] leading-[15px] mb-[10px] font-semibold md:text-[12px] md:leading-[18px] lg:text-base lg:leading-[24px]'>Add Wallets</h2>
          <h2 className='text-[7px] leading-[10.5px] mb-[6px] text-center md:text-[12px] md:leading-[18px] lg:text-base lg:leading-[24px]'>Please select the available currency to add new wallets.</h2>
          <div className='flex gap-2'>
            <div className="w-3/4">
              <div className="border w-full rounded-[4px] p-[4.5px] flex justify-between items-center md:p-[6px] lg:rounded-[12px]" onClick={() =>handleShowList()}>
                { selected ? 
                  <li className="flex items-center gap-1 lg:gap-2">
                    <div className="rounded-full w-[12.02px] h-[12.02px] flex items-center justify-center text-[7px] lg:w-[24px] lg:h-[24px]">
                      <img src={image} alt='' className='w-full h-full rounded-full object-cover'/>
                    </div> 
                    <h2 className="text-[8px] leading-[12px] capitalize md:text-[10px] md:leading-[15px] lg:text-[16px] lg:leading-[24px]">{countryName}</h2>
                  </li> : 
                  <li className="flex items-center gap-1 lg:gap-2">
                    <h2 className='text-[8px] leading-[12px] md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]'>{placeholder}</h2>
                  </li>
                  }
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 lg:w-5 lg:h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
              </div>
              { showList && 
                <div className='flex flex-col justify-between h-full'>
                  <ul className="border mt-1 rounded-[4px] md:mt-2 lg:rounded-[12px]">
                    <div className='w-full p-1 h-[30px] lg:h-[35px]'>
                      <input type='text' placeholder='search here...' className='block w-full outline-none border placeholder:text-[8px] text-[8px] leading-[12px] placeholder:leading-[12px] h-full p-[3px] md:p-[6px] rounded-[4px] lg:placeholder:text-[15px] lg:p-2 lg:rounded-[6px]' value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
                    </div>
                    {countryList.map((country) => (
                      <Country name={country.name} key={country.id} flag={country.flag} onClick={()=> handleSelect(country.name, country.flag, country.code)}/>
                    ))}
                  </ul>
                </div> }
            </div>
            <div className="w-1/4">
              <div className="border w-full rounded-[4px] p-[4.5px] h-[23px] lg:rounded-[12px] lg:h-[40px]">
                {selected ? 
                <h2 className='text-[8px] leading-[12px] md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]'>{countryCode}</h2> :
                "" }
              </div>
            </div>
          </div>
          <div className='flex w-[87%] justify-between absolute bottom-[22px] md:justify-center mx-auto md:gap-[25px] md:w-[72%] lg:w-[65%] lg:gap-[30px]'>
            <button className='text-[10px] leading-[15px] bg-primary px-[28.6px] py-[10px] text-white rounded-[7px] lg:text-base lg:leading-[24px]' onClick={() => handleAddAccount()}>Add Wallet</button>
            <button className='text-[10px] leading-[15px]  px-[28.6px] py-[10px] text-red-500 rounded-[7px] hover:bg-red-500 hover:text-white lg:text-base lg:leading-[24px]' onClick={onClick}>Cancel</button>
          </div>
        </div> }
      </> 
      }
    </div>
  );
}

export default AddWallet;
