import React from 'react';
// import { useContext } from 'react';
import '../../App.css';
import { useRef } from 'react';
import { DashBoardLayout } from '../Dashboard/Layout/DashBoardLayout';
import ProfileHero from './ProfileHero';
import ProfileUpdate from './My Profile Page/ProfileUpdate';

export default function ProfileSettingsMain() {

const settingsTab = [
 { Setting : 'My Profile', Path : {},  id : 1},
  { Setting :'Account Verification', Path : {}, id : 2},
   {Setting : 'Business KYC / KYB', Path : {}, id : 3},
  { Setting : 'Authentication Settings', Path : {}, id : 4 }
];
 const getTab = useRef(null)
  
  return (
    <DashBoardLayout>
        <ProfileHero/>
     <div>
        <div className='flex w-[100%] lg:gap-[91px] border-b-[2px]
         border-[#D9D9D999] border-opacity-[60%] py-[20px] justify-between'>
            {(settingsTab.map(Tab =>{
                return (
                    <h2 ref = {getTab}
                    onClick={(ref) => {
                        if(ref.current){
                          ref.current.classList.add('activeTab')
                         }else{
                          ref.current.classList.remove('activeTab');
                         }
                        }
                    } 
                    className='w-1/4 lg:p-[20px] font-[600] text-[#A3A3A3] 
                    lg:text-[16px] lg:leading-[24px] cursor-pointer' key={Tab.id}>
                   {Tab.Setting}
                    </h2>
                )
            }))}

        </div>
        <ProfileUpdate/>
     </div>
    </DashBoardLayout>
  )
}
