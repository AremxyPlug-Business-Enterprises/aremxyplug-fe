import React, {useState, useContext} from "react";
import { DashBoardLayout } from "../Dashboard/Layout/DashBoardLayout";
import "../TvSubscription/TvSubscription.css";
import { Link, useNavigate } from "react-router-dom";
import style from "../AirTimePage/AirtimeVtu.module.css";
import { GetFunction, InternalLoginSession} from "../ApiCollection.jsx/ApiBuck";
import { Loader } from "../Loader/Loader";
import { Modal } from "../Screens/Modal/Modal";
import { ContextProvider } from "../Context";
import { GetLocalStorage } from "../LocalStorage/LocalStorage";
export const TvSubscription = () =>{
   const Data = GetLocalStorage()
    const [loading, setLoading] = useState(false);
    const {fetchedGotvPlans, setFetchedGotvPlans, 
        fetchedDstvPlans, 
        setFetchedDstvPlans,
        fetchedShowMaxPlans, 
        setFetchedShowMaxPlans,
        fetchedStarTimesPlans, 
        setFetchedStarTimesPlans,
      setSelectedOptionShowmax,
    setShowMaxOrderId,
    setPackageShowMax,
    setShowMaxTransactionId,
    setShowMaxDescription,
    setShowMaxSmartCard,
    setShowMaxEmail,
    setShowMaxAmount,
    setShowMaxDecoderType,
   setShowMaxFlagResult,
    setShowMaxMobileNumber,

     setShowMaxWalletBalance,
      setDstvEmail,
   setDstvMobileNumber,
   setDstvSmartCard,
   setDstvAmount,
   setDstvOrderId,
   setDstvDescription,
   setDstvTransactionId,
   setSelectedOptionDstv,
   setPackageDstv,
   setDstvDecoderType,
    setDstvFlagResult,
    setDstvCardName,
    setDstvWalletBalance,
       setGotvOrderId,
   setGotvDescription,
   setGotvTransactionId,
   setSelectedOptionGOTV,
   setPackageGotv,
   setDecoderType,
       setFlagResult,
    setTvWalletBalance,
    setTvEmail,
   setMobileNumber,
   setSmartCard,
   setTvAmount,
   setStarTimesEmail,
   setStarTimesMobileNumber,
   setStarTimesSmartCard,
   setStarTimesAmount,
   setStarTimesOrderId,
   setStarTimesDescription,
   setStarTimesTransactionId,
   setSelectedOptionStarTimes,
   setPackageStarTimes,
   setStarTimesDecoderType,
    setStarTimesFlagResult,
    setStarTimesWalletBalance,
     setTvSubscriptionResponse,
     setDstvSubscriptionResponse,
       } = useContext(ContextProvider)
    const navigate = useNavigate();
const [sessionModal, setSessionModal]= useState(false)


const ResetShowMaxFields = ()=> {
setShowMaxEmail("");
   setShowMaxMobileNumber("");
   setShowMaxSmartCard("");
   setShowMaxAmount("");
   setShowMaxOrderId("");
   setShowMaxDescription("");
   setShowMaxTransactionId("");
   setSelectedOptionShowmax("");
   setPackageShowMax("");
   setShowMaxDecoderType("Showmax");
    setShowMaxFlagResult("");
    setShowMaxWalletBalance("");
}

const ResetDsTvFields =()=> {
  setDstvEmail("");
   setDstvMobileNumber("");
   setDstvSmartCard("");
   setDstvCardName("");
   setDstvAmount("");
   setDstvOrderId("");
   setDstvDescription("")
   setDstvTransactionId("");
   setSelectedOptionDstv("");
   setPackageDstv("");
   setDstvDecoderType("DStv");
    setDstvFlagResult("");
    setDstvWalletBalance("");
    setDstvSubscriptionResponse({})
}

const ResetGoTvFields = ()=> {
   setTvEmail("");
   setMobileNumber("");
   setSmartCard("");
   setTvAmount("");
   setGotvOrderId("");
   setGotvDescription("");
   setGotvTransactionId("");
   setSelectedOptionGOTV("");
   setPackageGotv("");
   setDecoderType("GOtv");
    setFlagResult("");
    setTvWalletBalance("");
     setTvSubscriptionResponse({});
}

const ResetStarTimesFields = ()=> {
   setStarTimesEmail("")
   setStarTimesMobileNumber("")
   setStarTimesSmartCard("");
   setStarTimesAmount("");
   setStarTimesOrderId("");
   setStarTimesDescription("")
   setStarTimesTransactionId("");
   setSelectedOptionStarTimes("");
   setPackageStarTimes("");
   setStarTimesDecoderType("StarTimes")
    setStarTimesFlagResult("");
    setStarTimesWalletBalance("");
}
const GetFunctionHandler = async(GlobalTvSubscription,tvPage, TvSubscriptionValue)=> {
    const SuccessHandler =()=> {
      //  alert(`Successfully fetched ${TvSubscriptionValue} Plans`)
      if(GlobalTvSubscription === 0){
        ResetGoTvFields()
      }else if(GlobalTvSubscription === 1){
     ResetDsTvFields()
      }else if(GlobalTvSubscription === 2){
        ResetStarTimesFields()
      }else if(GlobalTvSubscription === 3){
       ResetShowMaxFields()
      }
      return navigate(tvPage)
      
     // console.log("Successfully fetched GotvPlans");
    }
    const FailedHandler = async(DetectAuthorisation)=> {
        setLoading(true);
    //   alert("Hello")
    const AuthRetrieval = async()=> {
         setLoading(true);
     if(GlobalTvSubscription === 0){
    await GetFunction(`products/tvsub/gotv`, setLoading, SuccessHandler,(ErrorType)=> {
        if(ErrorType === "unauthorised"){
         setSessionModal(true);
        }
    }, setFetchedGotvPlans)
     }else if(GlobalTvSubscription === 1){
        await GetFunction(`products/tvsub/dstv`, setLoading, SuccessHandler, ()=> {
      
           setSessionModal(true);
    }, setFetchedDstvPlans)
     }else if(GlobalTvSubscription === 2 ){
          await GetFunction(`products/tvsub/startimes`, setLoading, SuccessHandler, ()=> {
       
           setSessionModal(true);
    }, setFetchedStarTimesPlans)
     }else if(GlobalTvSubscription === 3){
  await GetFunction(`products/tvsub/showmax`, setLoading, SuccessHandler, ()=> {
        setSessionModal(true);
    }, setFetchedShowMaxPlans)
     }else {
        console.log("This error did not result from unauthorization.")
     }
    }


    if(DetectAuthorisation === "unauthorised"){
   return  AuthRetrieval();

     }else if(DetectAuthorisation === "Server error"){
   //Handle the re-running of gotv to check if at the second time
   //the request would be successful.
      if(GlobalTvSubscription === 0){
         alert(` Gotv Plans are unavailable at the moments`)
        

      //Handle the re-running of gotv to check if at the second time
   //the request would be successful.
     }else if(GlobalTvSubscription === 1){
       alert("Dstv Plans are unavailable at the moment")
     }else if(GlobalTvSubscription === 2 ){
        alert("StarTimes Plans are unavailable at the moment")
      //Handle the re-running of gotv to check if at the second time
   //the request would be successful.
     }else if(GlobalTvSubscription === 3){
 alert("ShowMax plans are unavailable at the moment")
     }
  }
else if(DetectAuthorisation === "User error" || DetectAuthorisation === "Network error" ){
         alert("Kindly check your internet connection")
     }else{
        alert("An unexpected error has occured, try some other time.")
     }
 }

    let path;
    let fetchedPlans;
const handleSubscriptionFunction = ()=> {
    if(GlobalTvSubscription === 0){ 
       TvSubscriptionValue = "Gotv";
      path = `products/tvsub/gotv`;
       fetchedPlans = setFetchedGotvPlans;
       tvPage = "/GoTv";
    }else if(GlobalTvSubscription === 1){
        TvSubscriptionValue = "Dstv";
        path =`products/tvsub/dstv`;
       fetchedPlans = setFetchedDstvPlans;
       tvPage = "/DsTv"
    }else if(GlobalTvSubscription === 2){
        TvSubscriptionValue = "StarTimes";
        path =`products/tvsub/startimes`;
        fetchedPlans = setFetchedStarTimesPlans;
        tvPage = "/StarTimes"
    }else if(GlobalTvSubscription ===3){
         TvSubscriptionValue = "Showmax";
        fetchedPlans = setFetchedShowMaxPlans;
     path = `products/tvsub/showmax`;
     tvPage = "/Showmax";
    }
}


 const LinkToPage = ()=> {
   if(handleSubscriptionFunction && GlobalTvSubscription === 1  && (fetchedDstvPlans.status === 200 || fetchedDstvPlans.status === 201)){
  return  navigate("/DsTv");
  }else if(handleSubscriptionFunction && GlobalTvSubscription === 3  && fetchedShowMaxPlans.status === (200 || 201)){
 return navigate("/Showmax");
  }else if(handleSubscriptionFunction && GlobalTvSubscription === 2 && fetchedStarTimesPlans.status === (200 || 201)){
return navigate("/StarTimes");
   }else if(handleSubscriptionFunction && GlobalTvSubscription === 0 && fetchedGotvPlans.status === (200 || 201)){
   return navigate("/GoTv");
   }
   }

//console.log(fetchedPlans);
// The conditional statement to help handle the getting of the plans when absent in the 
// their respective variables

 handleSubscriptionFunction();
   if(handleSubscriptionFunction && GlobalTvSubscription === 0 && (fetchedGotvPlans.status !== 200)){
await GetFunction(path, setLoading, SuccessHandler, FailedHandler, fetchedPlans);
//console.log(FailedHandler);
//alert("Hello")
//   if(GetFunction && (fetchedGotvPlans.status === 200 || fetchedGotvPlans.status === 201)){
//    return navigate("/GoTv");
//   }
    } else if(handleSubscriptionFunction && GlobalTvSubscription === 1 && (fetchedDstvPlans.status !== 200 )){
    
  await GetFunction(path, setLoading, SuccessHandler, FailedHandler, fetchedPlans);
     if(GetFunction && (fetchedDstvPlans.status === 200 || fetchedDstvPlans.status === 201))
         return navigate("/DsTv");
    
    } else if(handleSubscriptionFunction && GlobalTvSubscription === 2 &&(fetchedStarTimesPlans.status !== 200 )){
        
 await GetFunction(path, setLoading, SuccessHandler, FailedHandler, fetchedPlans);
 if(GetFunction && (fetchedStarTimesPlans.status === 200 || fetchedStarTimesPlans.status === 201)){
return navigate("/StarTimes");
 }
 
    }else if(handleSubscriptionFunction && GlobalTvSubscription === 3 && (fetchedShowMaxPlans.status !== 200)){
     
  await GetFunction(path, setLoading, SuccessHandler, FailedHandler, fetchedPlans);
  if(GetFunction && (fetchedShowMaxPlans.status === 200 || fetchedShowMaxPlans.status === 201)){
 return navigate("/Showmax");
  }
     }else{
       return LinkToPage();
     }
    }
  //  console.log(fetchedGotvPlans)
 // console.log(sessionModal)
return(
        <DashBoardLayout>
            <div className={style.AirtimeTops}>
                <div className={style.airtimeTop}>
                  
                    <div>
                        <div id='tvBackground' className="min-h-[90px] py-[15px]
                         lg:h-[196px] md:h-[112.29px] rounded-[6.6px] md:rounded-[11.46px] lg:rounded-[20px]
                          mx-auto  flex gap-6 justify-between px-[16.51px] md:px-[28.65px] lg:px-[50px]">
                            <div className="py-[9.57px] md:py-[16.61px] align-middle self-center 
                            flex flex-col gap-1.5 w-[70%]">
                                <p className="text-[11px] leading-[13px] lg:leading-[30px]
                                 lg:text-[24px] md:text-[13.75px] font-semibold">
                                    SUBSCRIBE YOUR TV CHANNELS WITH AREMXYPLUG.
                                    </p>
                                <p className="text-[10px] leading-[13px] 
                                lg:leading-[25px] lg:text-[20px]
                                 md:text-[11.46px]">
                                Never miss a beat! Subscribe your tv channels on our platform to watch and stream your favorite movies without any hassle.
                                </p>
                            </div>
                            <div className="flex w-[23%] h-[97%] pt-2 shrink-0">
                                <img src="./Images/TvSubscription/tv.svg" alt="" className="" />
                            </div>
                        </div>

                        <div className={`mx-auto flex gap-1.5 py-[25.29px]
                         lg:py-[50px] md:py-[28.64px] `}>
                            <div className="text-[8px] lg:text-xl md:text-[11.46px] font-medium text-[#7C7C7C]">Select Decoder Type</div>
                            <div >
                                <img src="./Images/currencyImages/right.svg" alt="" className={`lg:h-[24px] lg:w-[24px] md:h-[13.75px]
                                   md:w-[13.75px]`} />
                            </div>
                        </div>
                        <div id="tvGrid" className="mx-auto flex flex-wrap
                         justify-between  gap-[25px] md:h-[70px] md:flex-row md:flex-nowrap md:gap-[21.27px]  lg:h-[120px]  md:w-[100%] lg:gap-[37px]">
                        <div onClick ={()=>{
                          if(Data?.ConfirmAcc === "true"){
                          GetFunctionHandler(0, "Gotv");
                          }else{
                            navigate("/GoTv")
                          }
                            }
                        }>
                            <img src="./Images/TvSubscription/goTV.svg" alt="" className="md:w-[118px] lg:w-[270px] md:h-[94px] lg:h-[250px]"/>
                        </div>
                        <div onClick ={()=>{
                          if(Data?.ConfirmAcc === "true"){
                          GetFunctionHandler(1, "Dstv");
                          }else{
                            navigate("/DsTv")
                          }
                      }
                        }>
                        <img src="./Images/TvSubscription/dstv.svg" alt="" className="md:w-[118px] lg:w-[270px] md:h-[94px] lg:h-[250px]"/>
                        </div>
                        <div onClick ={()=>{
                          if(Data?.ConfirmAcc === "true"){
                            GetFunctionHandler(2, "StarTimes");
                          }else {
                            navigate("/StarTimes")
                          } }
                        }>
                        <img src="./Images/TvSubscription/starTimes.svg" alt="" className="md:w-[118px] lg:w-[270px] md:h-[94px] lg:h-[250px]"/>
                        </div>
                        <div onClick ={()=>{
                          if(Data?.ComfirmAcc === "true"){
                           GetFunctionHandler(3, "ShowMax");
                          }else{
                            navigate("/Showmax")
                          }
                               }
                        }>
                        <img src="./Images/TvSubscription/showmax.svg" alt="" className="md:w-[118px] lg:w-[270px] md:h-[94px] lg:h-[250px]"/>
                        </div>
                        
                        </div>
                    </div>
    {/* <HandleUserSession/> */}
                </div>

                <div className={style.help}>
                    <h2>You need help?</h2>
                    <Link to={`/ContactUs`} className={style.btnContact}>Contact Us</Link>
                </div>
                {loading && (
                    <Modal>
                        <Loader/>
                    </Modal>
                )}
               
            </div>
             {sessionModal && (
                    <InternalLoginSession setExpiredSessionLogin ={setSessionModal}/>
                )}
        </DashBoardLayout>
    )
}