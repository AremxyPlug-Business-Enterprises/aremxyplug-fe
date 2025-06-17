import React, {useState, useContext} from "react";
import { DashBoardLayout } from "../Dashboard/Layout/DashBoardLayout";
import "../TvSubscription/TvSubscription.css";
import { Link, useNavigate } from "react-router-dom";
import style from "../AirTimePage/AirtimeVtu.module.css";
import { GetFunction, HandleUserSession} from "../ApiCollection.jsx/ApiBuck";
import { Loader } from "../Loader/Loader";
import { Modal } from "../Screens/Modal/Modal";
import { ContextProvider } from "../Context";

export const TvSubscription = () =>{
  
    const [loading, setLoading] = useState(false);
    const {fetchedGotvPlans, setFetchedGotvPlans, 
        fetchedDstvPlans, 
        setFetchedDstvPlans,
        fetchedShowMaxPlans, 
        setFetchedShowMaxPlans,
        fetchedStarTimesPlans, 
        setFetchedStarTimesPlans} = useContext(ContextProvider)
    const navigate = useNavigate();
const [sessionModal, setSessionModal]= useState(false)

const GetFunctionHandler = async(GlobalTvSubscription,tvPage, TvSubscriptionValue)=> {
    const SuccessHandler =()=> {
      //  alert(`Successfully fetched ${TvSubscriptionValue} Plans`)
      
      return navigate(tvPage)
      
     // console.log("Successfully fetched GotvPlans");
    }
    const FailedHandler = async()=> {
        setLoading(true);
   
     if(GlobalTvSubscription === 0){
    await GetFunction(`products/tvsub/gotv`, setLoading, SuccessHandler,()=> {
        console.log("Failed to fetch Gotv with cookies")
         setSessionModal(true);
    }, setFetchedGotvPlans)
     }else if(GlobalTvSubscription === 1){
        await GetFunction(`products/tvsub/dstv`, setLoading, SuccessHandler, ()=> {
        console.log("failed to fetch dstv plans with new authToken fetched from cookies")
           setSessionModal(true);
    }, setFetchedDstvPlans)
     }else if(GlobalTvSubscription === 2 ){
          await GetFunction(`products/tvsub/startimes`, setLoading, SuccessHandler, ()=> {
        console.log("failed to fetch startimes plans with new authToken fetched from cookies")
           setSessionModal(true);
    }, setFetchedStarTimesPlans)
     }else if(GlobalTvSubscription === 3){
  await GetFunction(`products/tvsub/showmax`, setLoading, SuccessHandler, ()=> {
        console.log("failed to fetch showmax plans with new authToken fetched from cookies")
           setSessionModal(true);
    }, setFetchedShowMaxPlans)
     }else {
        alert("This error did not result from unauthorization.")
     }
    
    }
    let path;
    let fetchedPlans;
const handleSubscriptionFunction = ()=> {
    if(GlobalTvSubscription === 0){
       TvSubscriptionValue = "Gotv";
      path = `products/tvsub/gotv`;
       fetchedPlans = setFetchedGotvPlans;
       tvPage = "/GoTv"
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
//   if(GetFunction && (fetchedGotvPlans.status === 200 || fetchedGotvPlans.status === 201)){
//    return navigate("/GoTv");
//   }
    } else if(handleSubscriptionFunction && GlobalTvSubscription === 1 && (fetchedDstvPlans.status !== 200 )){
    try{
  await GetFunction(path, setLoading, SuccessHandler, FailedHandler, fetchedPlans);
     if(GetFunction && (fetchedDstvPlans.status === 200 || fetchedDstvPlans.status === 201))
         return navigate("/DsTv");
    }catch(error){
        alert("Dstv Plans are unavailabe at the moment, please try again later.")
    }
    } else if(handleSubscriptionFunction && GlobalTvSubscription === 2 &&(fetchedStarTimesPlans.status !== 200 )){
         try{
 await GetFunction(path, setLoading, SuccessHandler, FailedHandler, fetchedPlans);
 if(GetFunction && (fetchedStarTimesPlans.status === 200 || fetchedStarTimesPlans.status === 201)){
return navigate("/StarTimes");
 }
 }catch(error){
        alert("StarTimes Plans are unavailabe at the moment, please try again later.")
    }
    }else if(handleSubscriptionFunction && GlobalTvSubscription === 3 && (fetchedShowMaxPlans.status !== 200)){
      try{
  await GetFunction(path, setLoading, SuccessHandler, FailedHandler, fetchedPlans);
  if(GetFunction && (fetchedShowMaxPlans.status === 200 || fetchedShowMaxPlans.status === 201)){
 return navigate("/Showmax");
  }
}catch(error){
        alert("Showmax Plans are unavailabe at the moment, please try again later.")
    }
     }else{
       return LinkToPage();
     }
    }
  //  console.log(fetchedGotvPlans)
return(
        <DashBoardLayout>
            <div className={style.AirtimeTops}>
                <div className={style.airtimeTop}>
                  
                    <div>
                        <div id='tvBackground' className="h-[90px] lg:h-[196px] md:h-[112.29px] rounded-[6.6px] md:rounded-[11.46px] lg:rounded-[20px] mx-auto  flex gap-6 justify-between px-[16.51px] md:px-[28.65px] lg:px-[50px]">
                            <div className="py-[9.57px] md:py-[16.61px] align-middle self-center flex flex-col gap-1.5 w-[70%]">
                                <p className="text-[9px] lg:text-[24px] md:text-[13.75px] font-semibold">
                                    SUBSCRIBE YOUR TV CHANNELS WITH AREMXYPLUG.
                                    </p>
                                <p className="text-[7.5px] lg:text-[20px] md:text-[11.46px]">
                                Never miss a beat! Subscribe your tv channels on our platform to watch and stream your favorite movies without any hassle.
                                </p>
                            </div>
                            <div className="flex w-[23%] h-[97%] pt-2 shrink-0">
                                <img src="./Images/TvSubscription/tv.svg" alt="" className="" />
                            </div>
                        </div>

                        <div className=" mx-auto flex gap-1.5 py-[25.29px] lg:py-[50px] md:py-[28.64px]">
                            <div className="text-[8px] lg:text-xl md:text-[11.46px] font-medium text-[#7C7C7C]">Select Decoder Type</div>
                            <div>
                                <img src="./Images/currencyImages/right.svg" alt="" className="lg:h-[24px] lg:w-[24px] md:h-[13.75px] md:w-[13.75px]" />
                            </div>
                        </div>
                        <div id="tvGrid" className="mx-auto flex flex-wrap justify-between  gap-[25px] md:h-[70px] md:flex-row md:flex-nowrap md:gap-[21.27px]  lg:h-[120px]  md:w-[100%] lg:gap-[37px]">
                        <div onClick ={()=>{
                          GetFunctionHandler(0, "Gotv");
                            }
                        }>
                            <img src="./Images/TvSubscription/goTV.svg" alt="" className="md:w-[118px] lg:w-[270px] md:h-[94px] lg:h-[250px]"/>
                        </div>
                        <div onClick ={()=>{
                          GetFunctionHandler(1, "Dstv");
                      }
                        }>
                        <img src="./Images/TvSubscription/dstv.svg" alt="" className="md:w-[118px] lg:w-[270px] md:h-[94px] lg:h-[250px]"/>
                        </div>
                        <div onClick ={()=>{
                            GetFunctionHandler(2, "StarTimes");
                               }
                        }>
                        <img src="./Images/TvSubscription/starTimes.svg" alt="" className="md:w-[118px] lg:w-[270px] md:h-[94px] lg:h-[250px]"/>
                        </div>
                        <div onClick ={()=>{
                           GetFunctionHandler(3, "ShowMax");
                               }
                        }>
                        <img src="./Images/TvSubscription/showmax.svg" alt="" className="md:w-[118px] lg:w-[270px] md:h-[94px] lg:h-[250px]"/>
                        </div>
                        
                        </div>
                    </div>

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
                    <HandleUserSession/>
                )}
        </DashBoardLayout>
    )
}