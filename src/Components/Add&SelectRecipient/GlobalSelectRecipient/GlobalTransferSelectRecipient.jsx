import React, {useState} from 'react';
import '../../../App.css';
import RecipientHero from '../RecipientHero';
import { DashBoardLayout } from '../../Dashboard/Layout/DashBoardLayout';
import ArrowRight from '../../EducationPins/imagesEducation/educationArrowRight.svg';
import ImageDrop from '../../EducationPins/imagesEducation/arrow-down.svg';
import AddRecipientIcon from '../RecipientImages/AddRecipientIcon.svg';
import SearchIcon from '../RecipientImages/search-status.svg';
import NoRecordImage from '../RecipientImages/NoRecordImage.svg';
import euroFlag from '../../EducationPins/imagesEducation/GBP.svg';
import nigerianFlag from '../../EducationPins/imagesEducation/Nigeriaflag.svg';
import americaFlag from '../../EducationPins/imagesEducation/Usa.svg';
import britainFlag from '../../EducationPins/imagesEducation/Britain.svg';
import austriaFlag from '../../EducationPins/imagesEducation/Austria.svg';
import kenyaFlag from '../../EducationPins/imagesEducation/Kenya.svg';
import optionsRecipient from '../RecipientImages/optionsRecipient.svg'
import imageCurrencyNotAvalaible from '../RecipientImages/CurrencyNotAvaliable.svg';
import triangleBank from '../RecipientImages/triangle.svg';
import deleteRecipientsIcon from '../RecipientImages/deleteRecipient.svg';
import closeIcon from '../../My Profile & Account Settings/ProfileImages/Cancel.svg';
import AremxyLogo from '../../EducationPins/imagesEducation/AremxyPlug.svg';
import { Modal } from '../../Screens/Modal/Modal';
import SuccessIcon from '../../My Profile & Account Settings/ProfileImages/success.gif';
import Star from '../RecipientImages/Star 2.svg';
import { Link } from 'react-router-dom';
// import { BrowserRouter as Route, Router, Link } from 'react-router-dom';
// import EditSelectRecipient from './EditSelectRecipient';

export default function GlobalTransferSelectRecipient() {
  const [selectRecipientCountry, setSelectRecipientCountry] = useState('');
   const [selectRecipientCountryFlag,setSelectRecipientCountryFlag] = useState(null);
  const [selectRecipientActive, setSelectRecipientActive] = useState(false);
  const [CurrencyNotAvalaible, setCurrencyNotAvalaible]= useState(false);
 const [deleteRecipientSuccess, setDeleteRecipientSuccess]= useState(false);
   const [editRecipient, setEditRecipient] = useState(null);
  const [deleteRecipient, setDeleteRecipient] = useState(false);
const [recipientTab, setRecipientTab] = useState(true);
const [favoriteTab, setFavoriteTab] = useState(false);
 const [deleteFavoriteRecipient, setDeleteFavoriteRecipient] = useState(false);
const [favoriteEdit, setFavoriteEdit] = useState(null);
const [addFavoriteRecipient, setAddFavoriteRecipient] = useState(false);
  const [recipientCountrySelection] = useState([
    {method : 'Nigeria',  flag : nigerianFlag, id : 1},
   {method : 'United states ',  flag : americaFlag, id : 2 },
   {method : 'United Kingdom',flag : britainFlag, id : 3 },
   {method :  'European',  flag : euroFlag, id : 4 },
   {method : 'Austria',  flag : austriaFlag, id : 5},
   {method : 'Kenya', flag : kenyaFlag, id: 6}
   ])
//========== RECIPIENT DROPDOWN  ==============
function RecipientDropDown(){
  setSelectRecipientActive(!selectRecipientActive);
document.querySelector('.SelectRecipientDrop').classList.toggle('DropIt');
}
  const [knownRecipient] = useState([
    {recipientName : 'Habib Kamaldeen', recipientAccountNumber : '0123456789', recipientBank : 'Sporta Bank', img : triangleBank, id: 1},
    {recipientName : 'Jeremiah', recipientAccountNumber : '2343454626', recipientBank : 'Sporta Bank', img : triangleBank, id: 2}
  ])
  const [knownFavorite] = useState([
    {recipientName : 'Habib Kamaldeen', recipientAccountNumber : '0123456789', recipientBank : 'Sporta Bank', img1 : triangleBank, img2 : Star,  id: 1},
    {recipientName : 'Jeremiah', recipientAccountNumber : '2343454626', recipientBank : 'Sporta Bank', img1 : triangleBank, img2 : Star, id: 2}
  ])

  //     FUNCTIONS FOR RECIPIENTS TAB ===========
  function handleElementClick(recipients){
    setEditRecipient(recipients);
   console.log(`elements with clicked id ${recipients}`)
}
function  closePopRecipients(){
  setEditRecipient(null);
   }

  
  function handleAccountClick(recipients){
    setDeleteRecipient(false);
    setDeleteRecipientSuccess(recipients);
    console.log(`elements with clicked id ${recipients}`)
 }
 function  DeleteSelectRecipients(recipients){
  setEditRecipient(null);
  setDeleteRecipient(recipients);
   }
   function addFavorite(recipients){
    setEditRecipient(null);
    setAddFavoriteRecipient(recipients);
   }
   function controlEditRecipient(){
    setEditRecipient(false);
   }

 //   ======= || =============
 
   
    // FUNCTIONS FOR FAVORITE TAB ===========
    function favoriteHandleElementClick(favorite){
      setFavoriteEdit(favorite);
      console.log(`elements with clicked id ${favorite}`)
    }
    function  closeFavoritePopRecipients(){
      setEditRecipient(null);
       }
     function removeFavorite(favorite){
      setFavoriteEdit(null);
      setDeleteFavoriteRecipient(favorite);
     }
     function  DeleteFavoriteRecipients(favorite){
      setFavoriteEdit(null);
      setDeleteRecipient(favorite);
       }
       function controlFavoriteRecipient(){
        setFavoriteEdit(false);
       }
       //
 
  
    const [searchRecipients, setSearchRecipients] = useState('');

const filterData = knownRecipient.filter(item =>
  item.recipientName.toLowerCase().includes(searchRecipients.toLowerCase())
);
const filterFavorite = knownFavorite.filter(item =>
  item.recipientName.toLowerCase().includes(searchRecipients.toLowerCase())
);



// const ChosenRecipient  = () => {
//   setSelectRecipientActive(false);
//   document.querySelector('.SelectRecipientDrop').classList.remove('DropIt');
//   if(recipientCountrySelection[0]){
//    setSelectRecipientCountry("Nigeria");
//    setSelectRecipientCountryFlag(nigerianFlag);
//   }else {
//     setCurrencyNotAvalaible(true);
//   }
// }

  return (

  <DashBoardLayout>
    <div className='flex flex-col justify-between lg:h-[1500px] md:h-[1600px] h-[950px] '>
    <div className=''>
      
    <RecipientHero/>
    <div className='flex flex-col lg:gap-[45px] md:gap-[30px] gap-[25px]'>
    <div className='flex md:gap-[10px] gap-[3.27px]'>
   <h2 className='text-[#7C7C7C] font-[500] text-[9px] leading-[12px] lg:text-[20px] lg:leading-[30px]'>
    Select the recipients account below
</h2>
<img src={ArrowRight} alt="" 
className='lg:w-[24px] lg:h-[24px] h-[10px] w-[10px] self-center'/>
    </div>
    {/* INPUTS TO SELECT COUNTRY */}
    <div className=''>
    <h2 className=' font-[600] text-left lg:mb-[20px] mb-[5.868px] text-[9px] leading-[12px] lg:text-[16px] lg:leading-[20.8px] '>
    Select Country
    </h2>
    <div className='flex flex-col md:flex-row lg:gap-[100px] md:gap-[90px] gap-[25px] w-[100%] md:justify-between'>
      {/* CONTAINER FOR SELECT RECIPIENT */}
   <div className='relative flex flex-col  md:w-[50%] w-[100%] '>
    {/* INPUTS TO SELECT RECIPIENT */}
    <div  onClick={RecipientDropDown}
    className='flex justify-between py-[8.178px] pl-[3.672px] pr-[7px] lg:py-[14px] lg:pl-[16px] lg:pr-[10px]
   md:border-[1px] border-[0.5px] border-[solid] border-[#7C7C7C] rounded-[3.671px] 
   lg:rounded-[10px] bg-white cursor-pointer'>
      <div className='flex lg:gap-[10px] gap-[5.868px] '>
    <img src={selectRecipientCountryFlag} alt="" 
    className='lg:w-[24px] lg:h-[24px] h-[12px] w-[12px]'/>
   <h2 className='font-[600] text-[9px]  leading-[12px] lg:text-[16px] lg:leading-[20.8px]'>
      {selectRecipientCountry}
    </h2>
   </div>
   <img src={ImageDrop}  alt=""
   className='SelectRecipientDrop lg:w-[24px] lg:h-[24px] h-[12px] w-[12px]' />
    </div>
    {selectRecipientActive && (
      <div className='absolute lg:top-[90px] md:top-[60px]  top-[50px] z-[2]  
      flex flex-col w-[100%] lg:h-225px md:h-[210px]  '>
      {(recipientCountrySelection.map(recipientCountry =>{
        return (
          <div  onClick={() => {
            setSelectRecipientActive(false);
            document.querySelector('.SelectRecipientDrop').classList.remove('DropIt')
            if(recipientCountry.id === 1){
              setSelectRecipientCountry("Nigeria");
              setSelectRecipientCountryFlag(nigerianFlag);
             }else {
               setCurrencyNotAvalaible(true);
             }
          }}
          className='flex gap-[10px] lg:py-[15px] py-[10px] pl-[10px]
          cursor-pointer hover:bg-[#EDEAEA] items-center bg-white
          shadow-[0px_3.30667px_8.26667px_0px_rgba(0,0,0,0.25)]'>

          <img className='md:h-[29.27px]  h-[14.27px]' src={recipientCountry.flag} alt=""/>
          <p className='text-[8px] leading-[10.4px] font-[500] text-[#7C7C7C]  
         md:text-[13.227px] md:leading-[17.195px] 
         lg:text-[16px] lg:leading-[20.8px] self-center cursor-pointer'
          key={recipientCountry.id}> 
          {recipientCountry.method}
          </p>
           </div>
           )
      }) )}
      </div>
    ) }
     </div>

   {/* ADD RECIPIENTS */}
   <Link to = '/GlobalTransferAddRecipient'
    className='flex md:w-[50%] justify-between lg:py-[14px] lg:pl-[16px] lg:pr-[10px]
   shadow-[0px_0px_1.468px_0px_rgba(0,0,0,0.25)]  py-[8.178px] pl-[3.671px] pr-[7px]
   md:border-[1px] border-[0.5px] border-[solid] rounded-[3.671px] border-[#7C7C7C] lg:rounded-[10px] bg-white'>
  <h2 className='font-[600] text-[9px] leading-[12px] lg:text-[16px] lg:leading-[20.8px]'>
  Add Recipient
    </h2>
    <img src={AddRecipientIcon} alt='' 
    className='lg:w-[24px] lg:h-[24px] h-[12px] w-[12px]'/>
  </Link>



    </div>
    </div>
    <div className='relative md:w-[50%] w-[60%]  '>
         <input type="text" className='focusSearch w-[100%] font-[500] text-[9px] leading-[12px]
          lg:text-[16px] lg:leading-[20.8px] placeholder-[9px] placeholder:leading-[12px]
         placeholder:lg:text-[16px] placeholder:lg:leading-[20.8px] lg:p-[10px] lg:pr-[20px] p-[5.868px] pr-[20px] md:border-[1px]
         border-[0.338px]
         border-[solid] border-[#7C7C7C] rounded-[4.052px] lg:rounded-[10px] focus:outline-none'
         placeholder='Search Account Number or Name' 
         value = { searchRecipients }
         onChange={(e) => {
           setSearchRecipients(e.target.value);
         }}/>
         <img 
         onClick={(e) => {
          document.querySelector('.focusSearch').focus();
          console.log(e);
         }}
         src={SearchIcon} alt="" 
         className='absolute md:top-[10px] md:right-[10px] top-[7.997px] right-[7.997px] 
          lg:w-[20px] lg:h-[20px] h-[12px] w-[12px] cursor-pointer'/>
    </div>



    <div className='Tabs flex flex-col lg:gap-[30px] gap-[8.28px] my-[30px] md:mt-[60px] md:mb-[80px]'>
    <div className='flex w-[100%] justify-between md:justify-normal lg:gap-[25px] border-b-[2px] md:border-b-[3px] border-[#ECECEC]'>
     <h2 onClick ={() => {
      setFavoriteTab(false);
      setRecipientTab(true);
      setFavoriteEdit(null);
     }}
     className={`md:w-[25%] w-[50%] font-[500] text-center text-[9px] leading-[12px] lg:text-[20px] lg:leading-[30px] py-[5.671px] lg:py-[10px]
     bg-[#E2F3FF] md:border-b-[3px] border-b-[2.1px] border-[#04177F] lg:rounded-[6px] rounded-[1.987px] cursor-pointer
       ${recipientTab ? 'bg-[#E2F3FF] lg:rounded-[6px] lg:border-b-[4px] border-b-[2px] rounded-[3.521px] border-[#04177F]'
        :  'bg-transparent border-none'}`}>
  Recipients
     </h2>
     <h2 onClick={() => {
       setFavoriteTab(true);
       setRecipientTab(false);
       setEditRecipient(null);
     }}
     className={`md:w-[25%] w-[50%] font-[500] text-center text-[9px] leading-[12px] lg:text-[20px] 
      lg:leading-[30px] lg:py-[10px] py-[5.671px] cursor-pointer
      ${favoriteTab ? 'bg-[#E2F3FF] lg:rounded-[6px] lg:border-b-[4px] border-b-[2px] rounded-[3.521px] border-[#04177F]'
      :  'bg-transparent border-none'}`}>
  Favorites
     </h2>
    </div>
   
  {/* <Router> */}
    {/* <Route path = "/EditRecipient/:id">
        <EditSelectRecipient/>
      </Route> */}


 {recipientTab && (
   filterData.length === 0 ? (
    <div className='flex justify-center '>
  <img src={NoRecordImage} alt="" 
      className='lg:w-[517px] lg:h-[456px]'/>
      </div>
     ):(
      <div className='flex flex-col'>
   {filterData.map(recipients => {
    return (
      <div
       className='flex justify-between pr-[19.87px]  py-[5.586px] pl-[4.758px] lg:pr-[60px] lg:py-[14px] lg:pl-[25px] border-[0.5px] 
      md:border-[1px] border-[solid] border-[#7C7C7C] bg-white lg:rounded-[12px] mt-[20px]
      shadow-[0px_0px_1.325px_0px_rgba(0,0,0,0.25)] lg:shadow-[] rounded-[3.974px]
    ' key = {recipients.id}
   >
        <div className='flex flex-col gap-[5px]'>
       <h2 
        className='text-[#7C7C7C] text-[9px] leading-[12px] lg:text-[16px] lg:leading-[24px] font-[600]'>
        {recipients.recipientName}
       </h2>
       {/* ACCOUNT NUMBER & BANK */}
       <div className='flex gap-[3px]'>
   <p className='text-[#7C7C7C]  text-[9px] leading-[12px]
    lg:text-[16px] lg:leading-[24px] font-[600]'> 
     {recipients.recipientAccountNumber}
   </p>
   <img src={triangleBank} alt=""
   className='lg:h-[24px] lg:w-[24px] w-[12px] h-[12px] self-center' />
   <p className='text-[#7C7C7C]  text-[9px] leading-[12px] 
   lg:text-[16px] lg:leading-[24px] font-[600]'>
  {recipients.recipientBank}
   </p>
       </div>
        </div>

    <div className='optionRecipient relative flex items-center'>
      <img key={recipients.id}
       onClick={() => {
        handleElementClick(recipients.id);
        if(editRecipient === recipients.id){
          controlEditRecipient();
        }
      }}
       src={optionsRecipient} alt="" 
      className='lg:w-[8px] lg:h-[28px] w-[4px] h-[14px] cursor-pointer'/>
      
      {/* FOR OPTIONS TO EDIT RECIPIENTS */}
      { editRecipient === recipients.id && (
        <div className='absolute md:top-[15px] md:right-[10px] top-[0px] right-[10px] lg:top-[10px] lg:right-[10px] flex flex-col'>
          {/* ADD TO FAVORITE */}
   <p onClick={() => {
  addFavorite(recipients.id);
   }}
   className='text-[#7C7C7C] lg:w-[220px] md:w-[180px]  py-[7.451px] pl-[5.313px] w-[110.36px]  
   lg:py-[12px] lg:px-[14px] text-[9px] leading-[12px] 
   shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)] hover:bg-gray-200 cursor-pointer
   lg:text-[16px] lg:leading-[24px] font-[500] bg-white'>
    Add to favorites
   </p>
   {/* EDIT  */}
   {/* <Link to ={`/EditRecipient/${recipients.id}`} */}
   <Link to='/EditSelectRecipient'
    onClick={() => {
   closePopRecipients();
   }}
    className='text-[#7C7C7C] lg:w-[220px] md:w-[180px] py-[7.451px] pl-[5.313px] w-[110.36px] lg:py-[12px] lg:px-[14px] text-[9px] leading-[12px] 
    shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)] hover:bg-gray-200 cursor-pointer
   lg:text-[16px] lg:leading-[24px] font-[600] bg-white'>
    Edit Recipients
    </Link>
   {/* </Link> */}
   {/* DELETE  */}
   <p onClick={() => {
  DeleteSelectRecipients(recipients.id);
   }}
   className='text-[#FA6B6B] lg:w-[220px] md:w-[180px] py-[7.451px] pl-[5.313px] w-[110.36px]  lg:py-[12px] lg:px-[14px] text-[9px] leading-[12px]
   shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)] hover:bg-gray-200 cursor-pointer
   lg:text-[16px] lg:leading-[24px] font-[600] bg-white'>
    Delete Recipients
   </p>
        </div>
      )}
    </div>
    {deleteRecipient === recipients.id && (
          <Modal>
            <div className=' h-[100%] w-[100%] md:justify-center flex md:items-center items-end md:mx-[0px] mx-[19px]'
              key={recipients.id} >
          <div className='deleteRecipientSuccess flex flex-col  lg:w-[35%] md:w-[45%]  w-[100%] lg:h-[465px] bg-white lg:rounded-[20px]
          shadow-[0px_0px_6.933px_0px_rgba(0,0,0,0.25)] rounded-t-[8px] md:rounded-[5.729px]
          lg:shadow-[0px_0px_20px_0px_rgba(0,0,0,0.25)] pb-[10px] md:pb-[20px]'>
  <div className='flex justify-between w-[100%] border-b-[15px] border-[solid] border-[#04177F] lg:p-[15px] p-[10px]'>
  <img src={AremxyLogo} alt="" 
   className='lg:h-[24.818px] lg:w-[41.825px] h-[16px] w-[16px] 
   '/>
   <img src={closeIcon} alt="" 
   className='lg:h-[32px] lg:w-[32px]  h-[16px] w-[16px]'/>
  </div>
  <div className='flex flex-col justify-between  lg:w-[100%] lg:pt-[20px] pt-[30px]  items-center h-[100%]'>
  <div className='flex flex-col items-center lg:w-[80%] lg:gap-[40px] md:pb-[0px] pb-[20px] gap-[20px]'>
   <h2 className='font-[600] text-center text-[10px] leading-[14px] lg:text-[16px] lg:leading-[24px]'>
   Are you sure you want to delete this recipient permanently?
</h2>
    <img src={deleteRecipientsIcon} alt=""
    className='lg:w-[135px] lg:h-[135px] h-[100px] w-[100px]'/>
    
  </div>
  <div className='w-[80%] flex gap-[15px] justify-center'>
    {/* YES TO PROCEED */}
  <button onClick={() => {
   handleAccountClick(recipients.id);
  }}
className='bg-[#04177F] w-[50%] lg:py-[10px] md:py-[9px] py-[11px] lg:w-[163px]
md:w-[150px] text-white text-center rounded-[4.41px]
 lg:rounded-[12px] font-[600] lg:text-[16px] lg:leading-[24px]'>
 Yes
</button>
{/* CANCEL */}
  <button onClick={() => {
    setDeleteRecipient(false);
    }}
className='text-[#F95252] w-[50%] lg:py-[10px] md:py-[9px] py-[11px] lg:w-[163px]
md:w-[150px] text-center rounded-[4.41px]
 lg:rounded-[12px] font-[600] lg:text-[16px] lg:leading-[24px]'>
 Cancel
</button>
</div>
  </div>
          </div>
          </div>
          </Modal>
        )}
        
    {deleteRecipientSuccess === recipients.id && (
          <Modal>
            <div className='h-[100%] w-[100%] md:justify-center flex md:items-center items-end md:mx-[0px] mx-[19px]'
            key={recipients.id}>
          <div className='  flex flex-col  lg:w-[35%] md:w-[45%]  w-[100%] lg:h-[465px] bg-white lg:rounded-[20px]
          shadow-[0px_0px_6.933px_0px_rgba(0,0,0,0.25)] rounded-t-[8px] md:rounded-[5.729px]
          lg:shadow-[0px_0px_20px_0px_rgba(0,0,0,0.25)] pb-[10px] md:pb-[20px]'>
  <div className='flex justify-between w-[100%] border-b-[15px] border-[solid] border-[#04177F] lg:p-[15px] p-[10px] '>
  <img src={AremxyLogo} alt="" 
   className='lg:h-[24.818px] lg:w-[41.825px] h-[16px] w-[16px] 
   '/>
   <img src={closeIcon} alt="" 
   className='lg:h-[32px] lg:w-[32px]  h-[16px] w-[16px]'/>
  </div>
  <div className='flex flex-col justify-between  lg:w-[100%] lg:pt-[20px] pt-[30px]  items-center h-[100%] px-[30px]'>
  <div className='flex flex-col items-center lg:w-[80%] lg:gap-[30px] gap-[10px]'>
    <h2 className='font-[600] text-center text-[10px] leading-[14px] lg:text-[16px] lg:leading-[24px]'>
      Successful
      </h2>
   <h2 className='font-[600]  text-[#04177F] text-center text-[10px] leading-[14px] 
   lg:text-[16px] lg:leading-[24px]' key={recipients.id} >
   Recipient *****{recipients.recipientAccountNumber.slice(6,10)} has been deleted successfully. 
   You can add recipients again anytime!
</h2>
    <img src={SuccessIcon} alt=""
    className='lg:w-[135px] lg:h-[135px] h-[100px] w-[100px]'/>
    
  </div>
  <div className='w-[100%] flex md:justify-center justify-normal'>
    {/* DONE */}
  <button onClick={() => {
    setDeleteRecipientSuccess(false);
    }}
className='text-white w-[100%] lg:py-[10px] md:py-[9px] py-[11px] lg:w-[163px]
md:w-[150px] text-center rounded-[4.41px] bg-[#04177F]
 lg:rounded-[12px] font-[600] lg:text-[16px] lg:leading-[24px]'>
 Done
</button>
</div>
  </div>
          </div>
          </div>
          </Modal>
        )}
         {addFavoriteRecipient === recipients.id && (
          <Modal>
            <div className='h-[100%] w-[100%] md:justify-center flex md:items-center items-end md:mx-[0px] mx-[19px]'
            key={recipients.id}>
          <div className='deleteRecipientSuccess flex flex-col   lg:w-[35%] md:w-[45%] w-[100%]  bg-white lg:rounded-[20px]
          shadow-[0px_0px_6.933px_0px_rgba(0,0,0,0.25)] rounded-t-[8px] md:rounded-[11.458px]
          lg:shadow-[0px_0px_20px_0px_rgba(0,0,0,0.25)] pb-[10px] lg:pb-[30px] md:pb-[10px] '>
  <div className='flex justify-between w-[100%] border-b-[15px] border-[solid] border-[#04177F] lg:p-[15px] p-[10px]'>
  <img src={AremxyLogo} alt="" 
   className='lg:h-[24.818px] lg:w-[41.825px] h-[16px] w-[16px] 
   '/>
   <img src={closeIcon} alt="" 
   className='lg:h-[32px] lg:w-[32px]  h-[16px] w-[16px]'/>
  </div>
  <div className='flex flex-col  lg:w-[100%] lg:pt-[20px] items-center pt-[30px]  h-[100%]'>
  <div className='flex flex-col items-center lg:w-[80%] md:pb-[30px]   pb-[20px]  lg:gap-[25px] gap-[10px]'>
   <h2 className='font-[600] text-center text-[10px] leading-[14px] lg:text-[16px] lg:leading-[24px]'>
    Successful
    </h2>
    <img src={SuccessIcon} alt=""
    className='lg:w-[135px] lg:h-[135px] h-[100px] w-[100px]'/>
    <p className='font-[600] text-[#0DEF6C] text-center text-[10px] leading-[14px] lg:text-[16px] lg:leading-[24px]'>
    Recipient has been successfully added to Favorites.

    </p>
  </div>
 <div
  className='w-[100%] flex justify-center'>
  <button onClick={() => {
     setAddFavoriteRecipient(false);
  }}
className='bg-[#04177F] w-[80%] md:py-[9px] py-[11px] lg:w-[163px]
md:w-[150px] text-white text-center rounded-[4.41px]
 lg:rounded-[12px] font-[600] lg:text-[16px] lg:leading-[24px]'>
Okay
</button>
</div>
  </div>
          </div>
          </div>
          </Modal>
        )}
        
        </div>
    )
   })}
      </div>
     )
  
 )}  
 
 {/* </Router>   */}
 {/* ================================FAVORITE TAB =============================*/}


 {favoriteTab && (
   filterFavorite.length === 0 ? (
    <div className='flex justify-center '>
  <img src={NoRecordImage} alt="" 
      className='lg:w-[517px] lg:h-[456px]'/>
      </div>
     ):(
      <div className='flex flex-col'>
   {filterData.map((favorite, index) => {
    return (
      <div
       className={`flex justify-between pr-[5.87px]  py-[5.586px] pl-[4.758px] lg:pr-[15px] lg:py-[14px] lg:pl-[25px] border-[0.5px] 
      md:border-[1px] border-[solid] border-[#7C7C7C] bg-white lg:rounded-[12px] mt-[20px]
      shadow-[0px_0px_1.325px_0px_rgba(0,0,0,0.25)] lg:shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] rounded-[3.974px]
      
      `}
  
     key = {favorite.id}
   >
        <div className='flex flex-col gap-[5px]'>
       <h2 
        className='text-[#7C7C7C] text-[9px] leading-[12px] lg:text-[16px] lg:leading-[24px] font-[600]'>
        {favorite.recipientName}
       </h2>
       {/* ACCOUNT NUMBER & BANK */}
       <div className='flex gap-[3px]'>
   <p className='text-[#7C7C7C]  text-[9px] leading-[12px]
    lg:text-[16px] lg:leading-[24px] font-[600]'> 
     {favorite.recipientAccountNumber}
   </p>
   <img src={triangleBank} alt=""
   className='lg:h-[24px] lg:w-[24px] w-[12px] h-[12px] self-center' />
   <p className='text-[#7C7C7C]  text-[9px] leading-[12px] 
   lg:text-[16px] lg:leading-[24px] font-[600]'>
  {favorite.recipientBank}
   </p>
       </div>
        </div>

      <div className='flex gap-[4.5px]'>
      <div key={favorite.id}
      className='relative z-[16px]  flex  items-center '>
      <img 
       onClick={() => {
       favoriteHandleElementClick(favorite.id);
       if(favoriteEdit === favorite.id){
             controlFavoriteRecipient();
      }
      }}
      className='lg:w-[8px] lg:h-[28.0px]  w-[4px] h-[20px] cursor-pointer'
       src={optionsRecipient} alt=""/>
      {/* FOR OPTIONS TO EDIT RECIPIENTS */}
      { favoriteEdit === favorite.id && (
        <div className='absolute bg-blue-400 z-[12px] md:top-[15px] md:right-[10px] top-[0px] right-[10px] lg:top-[10px] lg:right-[10px] flex flex-col'>
          {/* ADD TO FAVORITE */}
   <p onClick={() => {
  removeFavorite(favorite.id);
   }}
   className='text-[#7C7C7C] lg:w-[220px] md:w-[180px]  py-[7.451px] pl-[5.313px] w-[110.36px]  
   lg:py-[12px] lg:px-[14px] text-[9px] leading-[12px] 
   shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)] hover:bg-gray-200 cursor-pointer
   lg:text-[16px] lg:leading-[24px] font-[500] bg-white'>
    Remove to favorites
   </p>
   {/* EDIT  */}
   <Link to = '/EditSelectRecipient'
    onClick={() => {
   closeFavoritePopRecipients();
   }}
    className='text-[#7C7C7C] lg:w-[220px] md:w-[180px] py-[7.451px] pl-[5.313px] w-[110.36px] lg:py-[12px] lg:px-[14px] text-[9px] leading-[12px] 
    shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)] hover:bg-gray-200 cursor-pointer
   lg:text-[16px] lg:leading-[24px] font-[600] bg-white'>
    Edit Recipients
   </Link>
   {/* DELETE  */}
   <p onClick={() => {
  DeleteFavoriteRecipients(favorite.id);
   }}
   className='text-[#FA6B6B] lg:w-[220px] md:w-[180px] py-[7.451px] pl-[5.313px] w-[110.36px]  lg:py-[12px] lg:px-[14px] text-[9px] leading-[12px]
   shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)] hover:bg-gray-200 cursor-pointer
   lg:text-[16px] lg:leading-[24px] font-[600] bg-white'>
    Delete Recipients
   </p>
        </div>
        
      )}
      </div>
      <div className='flex justify-start'>
      <img src={Star} className='h-[15px] w-[15px] lg:h-[40px] lg:w-[40px]' alt="" />
      </div>
      </div>
      
    
    {deleteRecipient === favorite.id && (
   
          <Modal>
            <div className={` h-[100%]  w-[100%] md:justify-center flex md:items-center items-end md:mx-[0px] mx-[19px]
          `}
         
              key={favorite.id} >
          <div className='deleteRecipientSuccess flex flex-col  lg:w-[35%] md:w-[45%] w-[100%] lg:h-[465px] bg-white lg:rounded-[20px]
          shadow-[0px_0px_6.933px_0px_rgba(0,0,0,0.25)] rounded-t-[8px] md:rounded-[5.729px]
          lg:shadow-[0px_0px_20px_0px_rgba(0,0,0,0.25)] pb-[10px] md:pb-[20px]'>
  <div className='flex justify-between w-[100%] border-b-[15px] border-[solid] border-[#04177F] lg:p-[15px] p-[10px]'>
  <img src={AremxyLogo} alt="" 
   className='lg:h-[24.818px] lg:w-[41.825px] h-[16px] w-[16px] 
   '/>
   <img src={closeIcon} alt="" 
   className='lg:h-[32px] lg:w-[32px]  h-[16px] w-[16px]'/>
  </div>
  <div className='flex flex-col justify-between  lg:w-[100%] lg:pt-[20px] pt-[30px]  items-center h-[100%]'>
  <div className='flex flex-col items-center lg:w-[80%] lg:gap-[40px] md:pb-[0px] pb-[10px] gap-[20px]'>
   <h2 className='font-[600] text-center text-[10px] leading-[14px] lg:text-[16px] lg:leading-[24px]'>
   Are you sure you want to delete this recipient permanently?
</h2>
    <img src={deleteRecipientsIcon} alt=""
    className='lg:w-[135px] lg:h-[135px] h-[100px] w-[100px]'/>
    
  </div>
  <div className='w-[80%] flex gap-[15px] justify-center'>
    {/* YES TO PROCEED */}
  <button onClick={() => {
   handleAccountClick(favorite.id);
  }}
className='bg-[#04177F] w-[50%] lg:py-[10px] md:py-[7px] py-[11px] lg:w-[163px]
md:w-[150px] text-white text-center rounded-[4.41px]
 lg:rounded-[12px] font-[600] lg:text-[16px] lg:leading-[24px]'>
 Yes
</button>
{/* CANCEL */}
  <button onClick={() => {
    setDeleteRecipient(false);
    }}
className='text-[#F95252] w-[50%] lg:py-[10px] md:py-[7px] py-[11px] lg:w-[163px]
md:w-[150px] text-center rounded-[4.41px]
 lg:rounded-[12px] font-[600] lg:text-[16px] lg:leading-[24px]'>
 Cancel
</button>
</div>
  </div>
          </div>
          </div>
          </Modal>
      
    )}
        
    {deleteRecipientSuccess === favorite.id && (
       <Modal>
            <div className='h-[100%] w-[100%] md:justify-center flex md:items-center items-end md:mx-[0px] mx-[19px]'
           
            key={favorite.id}>
          <div className='deleteRecipientSuccess  flex flex-col  lg:w-[35%] md:w-[45%]  w-[100%] lg:h-[465px] bg-white lg:rounded-[20px]
          shadow-[0px_0px_6.933px_0px_rgba(0,0,0,0.25)] rounded-t-[8px] md:rounded-[5.729px]
          lg:shadow-[0px_0px_20px_0px_rgba(0,0,0,0.25)] pb-[10px] md:pb-[20px]'>
  <div className='flex justify-between w-[100%] border-b-[15px] border-[solid] border-[#04177F] lg:p-[15px] p-[10px] '>
  <img src={AremxyLogo} alt="" 
   className='lg:h-[24.818px] lg:w-[41.825px] h-[16px] w-[16px] 
   '/>
   <img src={closeIcon} alt="" 
   className='lg:h-[32px] lg:w-[32px]  h-[16px] w-[16px]'/>
  </div>
  <div className='flex flex-col justify-between  lg:w-[100%] lg:pt-[20px] pt-[30px]  items-center h-[100%] px-[30px]'>
  <div className='flex flex-col items-center lg:w-[80%] lg:gap-[30px] gap-[20px]'>
    <h2 className='font-[600] text-center text-[10px] leading-[14px] lg:text-[16px] lg:leading-[24px]'>
      Successful
      </h2>
   <h2 className='font-[600]  text-[#04177F] text-center text-[10px] leading-[14px] 
   lg:text-[16px] lg:leading-[24px]' key={favorite.id} >
   Recipient *****{favorite.recipientAccountNumber.slice(6,10)} has been deleted successfully. 
   You can add recipients again anytime!
</h2>
    <img src={SuccessIcon} alt=""
    className='lg:w-[135px] lg:h-[135px] h-[100px] w-[100px]'/>
    
  </div>
  <div className='w-[100%] flex md:justify-center justify-normal'>
    {/* DONE */}
  <button onClick={() => {
    setDeleteRecipientSuccess(false);
    }}
className='text-white w-[100%] lg:py-[10px] md:py-[7px] py-[11px] lg:w-[163px]
md:w-[150px] text-center rounded-[4.41px] bg-[#04177F]
 lg:rounded-[12px] font-[600] lg:text-[16px] lg:leading-[24px]'>
 Done
</button>
</div>
  </div>
          </div>
          </div>
          </Modal>
       
        )}
               {deleteFavoriteRecipient === favorite.id && (
                
          <Modal>
            <div className='h-[100%] w-[100%] md:justify-center flex md:items-center items-end md:mx-[0px] mx-[19px]'
            key={favorite.id}>
          <div className='deleteRecipientSuccess flex flex-col   lg:w-[35%] md:w-[45%]   w-[100%]  bg-white lg:rounded-[20px]
          shadow-[0px_0px_6.933px_0px_rgba(0,0,0,0.25)] rounded-t-[8px] md:rounded-[11.458px]
          lg:shadow-[0px_0px_20px_0px_rgba(0,0,0,0.25)] pb-[10px] lg:pb-[30px] md:pb-[10px]'>
  <div className='flex justify-between w-[100%] border-b-[15px] border-[solid] border-[#04177F] lg:p-[15px] p-[10px]'>
  <img src={AremxyLogo} alt="" 
   className='lg:h-[24.818px] lg:w-[41.825px] h-[16px] w-[16px] 
   '/>
   <img src={closeIcon} alt="" 
   className='lg:h-[32px] lg:w-[32px]  h-[16px] w-[16px]'/>
  </div>
  <div className='flex flex-col  lg:w-[100%] lg:pt-[20px] pt-[30px] items-center h-[100%]'>
  <div className='flex flex-col items-center lg:w-[80%]   pb-[40px]  lg:gap-[25px] gap-[10px]'>
   <h2 className='font-[600] text-center text-[10px] leading-[14px] lg:text-[16px] lg:leading-[24px]'>
    Successful
    </h2>
    <img src={SuccessIcon} alt=""
    className='lg:w-[135px] lg:h-[135px] h-[100px] w-[100px]'/>
    <p className='font-[600] text-[#04177F] text-center text-[10px] leading-[14px] lg:text-[16px] lg:leading-[24px]'>
    Recipient has been successfully removed from Favorites.
 </p>
  </div>
 <div
  className='w-[100%] flex justify-center'>
  <button onClick={() => {
     setDeleteFavoriteRecipient(false);
  }}
className='bg-[#04177F] w-[80%] md:py-[7px]  py-[11px] lg:w-[163px]
md:w-[150px] text-white text-center rounded-[4.41px]
 lg:rounded-[12px] font-[600] lg:text-[16px] lg:leading-[24px]'>
Okay
</button>
</div>
  </div>
          </div>
          </div>
          </Modal>
                 
        )}
       
        </div>
    )
   })}
      </div>
     )
  
 )}    


    </div>
    </div>
    </div> 
    {/* CONTACT US */}
    <div className=" flex gap-[8.729px]  md:gap-[14.896px]
       justify-center px-[8.594px] lg:pt-[30%] lg:pb-[20%] md:pt-[98%] md:pb-[30%] pt-[40%] pb-[30%]">
              <p className="font-[500] text-[10px] text-black 
              leading-[10.4px] lg:text-[16px] lg:leading-[15.6px]  md:text-[6.875px]
            ] md:leading-[12.938px] self-center">
                You need help?
              </p>
              <Link to ="/contactUs"
                className="font-[500] text-white text-[10px]  py-[4.865px] 
                px-[10.594px] leading-[10.4px] rounded-[5.156px] bg-[#04177F]
                lg:text-[12px] lg:leading-[14.4px] 
                 md:text-[4.583px]  md:py-[4.865px] 
                md:px-[14.594px] md:leading-[5.985px]  lg:py-[10px]
                lg:px-[16px] lg:rounded-[9px]"
              >
                Contact Us
              </Link>
            </div>
            {CurrencyNotAvalaible && (
              <Modal>
              <div className='h-[100%] w-[100%] md:justify-center flex 
              items-center  md:mx-[0px] mx-[19px]'>
         <div className='flex flex-col  lg:w-[38%] md:w-[45%] h-[269px]  w-[100%] lg:h-[420px] bg-white lg:rounded-[20px]
          shadow-[0px_0px_6.933px_0px_rgba(0,0,0,0.25)] md:rounded-[7.153px] rounded-[8px]
          md:shadow-[0px_0px_11.922px_0px_rgba(0, 0, 0, 0.25)] 
          lg:shadow-[0px_0px_20px_0px_rgba(0,0,0,0.25)] lg:py-[23px] lg:px-[0px] py-[10px] px-[24px]'>
          <div className='flex flex-col lg:w-[100%] lg:gap-[20px] gap-[10px]  justify-between 
           items-center h-[100%]'>
  
   <h2 className='font-[600] text-[#04177F] text-center text-[10px] leading-[14px] lg:text-[16.647px] lg:leading-[24px]'>
   This Currency is Currently Not Available.
    </h2>
    <img src={imageCurrencyNotAvalaible} alt=""
    className='lg:w-[217.263px] lg:h-[187.283px] h-[100px] w-[100px]'/>
    
 
  <div className='flex flex-col-reverse md:flex-row lg:gap-[125px] md:gap-[60px] w-[100%] 
  justify-end gap-[20px] lg:pr-[30px]'>
  <button onClick={() => {
    setCurrencyNotAvalaible(false);
  }}
className='bg-[#04177F] w-[100%] lg:py-[10px] md:py-[9px] py-[13px] md:w-[97.02px]
 text-white text-center rounded-[4.41px]
 lg:rounded-[12px] font-[600] lg:text-[16px] lg:leading-[24px]'>
  Okay
</button>
<p className='font-[600] text-center text-[10px] leading-[14px] 
lg:text-[16px] lg:leading-[24px] md:self-start self-end'>
Coming Soon...
</p>
</div>
  </div>
         </div>
              </div>
              </Modal>
            )}
           
        
    </div>

  </DashBoardLayout>
       
  )
}
