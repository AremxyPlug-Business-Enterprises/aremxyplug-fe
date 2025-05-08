import React, {useState, useContext} from "react";
import { DashBoardLayout } from "../Dashboard/Layout/DashBoardLayout";
import "../TvSubscription/TvSubscription.css";
import { Link, useNavigate } from "react-router-dom";
import style from "../AirTimePage/AirtimeVtu.module.css";
import { GetFunction } from "../ApiCollection.jsx/ApiBuck";
import { Loader } from "../Loader/Loader";
import { Modal } from "../Screens/Modal/Modal";
import { ContextProvider } from "../Context";

export const TvSubscription = () =>{
    const [tvSubscription, setTvSubscription] = useState("")
    const [loading, setLoading] = useState(false);
    const {fetchedGotvPlans, setFetchedGotvPlans, 
        fetchedDstvPlans, 
        setFetchedDstvPlans,
        fetchedShowMaxPlans, 
        setFetchedShowMaxPlans,
        fetchedStarTimesPlans, 
        setFetchedStarTimesPlans} = useContext(ContextProvider)
    const navigate = useNavigate();


    //Function to fetch users planns for a specific tv subscription
const GetFunctionHandler = async()=> {
    const SuccessHandler =()=> {
        alert(`Successfully fetched ${tvSubscription} Plans`)
    }
    const FailedHandler =()=> {
        alert(`Unable to fetch ${tvSubscription} Plans`);
    }
    const path = `products/tvsub/${tvSubscription}`
    
    let fetchedPlans;
const handleSubscriptionFunction = ()=> {
    if(tvSubscription === "gotv"){
        alert("Gotv is on")
       fetchedPlans = setFetchedGotvPlans
    }else if(tvSubscription === "dstv"){
        alert("Dstv is On")
       fetchedPlans = setFetchedDstvPlans
    }else if(tvSubscription === "startimes"){
        fetchedPlans = setFetchedStarTimesPlans
    }else if(tvSubscription === "showmax"){
        fetchedPlans = setFetchedShowMaxPlans
    }
}

// The conditional statement to help handle the getting of the plans when absent in the 
// their respective variables
const HandleAbsentResponse =  async() => {
    alert("HandleResponse is running")
   if(tvSubscription === "gotv" && (fetchedGotvPlans.status === undefined || null)){
   await GetFunction(path, setLoading, SuccessHandler, FailedHandler, fetchedPlans)
     if(GetFunction){
        setTvSubscription("");
        if(fetchedGotvPlans.length > 1){
        console.log(fetchedGotvPlans);
       if( fetchedGotvPlans.status === (200 || 201)){
        navigate("/GoTv")
       }
    }
     }
    } else if(tvSubscription === "dstv" && (fetchedDstvPlans.status === undefined || null)){
    await GetFunction(path, setLoading, SuccessHandler, FailedHandler, fetchedPlans)

        if(GetFunction){
           setTvSubscription("")
           if(fetchedDstvPlans.status === (200 || 201)){
            navigate("/DsTv")
           }
        }
    } else if(tvSubscription === "startimes" && (fetchedStarTimesPlans.status === undefined || null)){
       await GetFunction(path, setLoading, SuccessHandler, FailedHandler, fetchedPlans)
        if(GetFunction && fetchedStarTimesPlans.status === (200 || 201)){
           setTvSubscription("")
           if(fetchedStarTimesPlans.status === (201 || 200)){
            navigate("/StarTimes")
           }
        }
    }else if(tvSubscription === "showmax" && (fetchedShowMaxPlans.status === undefined || null)){
     await GetFunction(path, setLoading, SuccessHandler, FailedHandler, fetchedPlans);
        if(GetFunction ){
           setTvSubscription("");
           if(fetchedShowMaxPlans.status === (200 || 201)){
            navigate("Showmax")
           }
        
        }
     }
}
//The conditional statement to return null if the plans are present in the state
   if(tvSubscription.length > 1){
    handleSubscriptionFunction()
   if(handleSubscriptionFunction && tvSubscription === "dstv" && fetchedDstvPlans.status === (200 || 201) ){
    setTvSubscription("")
  return  navigate("/Dstv");
  }else if(handleSubscriptionFunction && tvSubscription === "showmax" && fetchedShowMaxPlans.status === (200 || 201)){
    setTvSubscription("")
   return navigate("/Showmax");
  }else if(handleSubscriptionFunction && tvSubscription === "startimes" && fetchedStarTimesPlans.status === (200 || 201)){
    setTvSubscription("") 
   return navigate("/StarTimes")
   
   }else if(handleSubscriptionFunction && tvSubscription === "gotv" && fetchedGotvPlans.status === (200 || 201)){
    setTvSubscription("")
    return navigate("/Gotv")
   }else {
    if(handleSubscriptionFunction){
    HandleAbsentResponse()
    }
}
   }
}

   



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
                            setTvSubscription("gotv")
                           setTimeout(()=> {
                            GetFunctionHandler();
                           },1000)
                            
                        }
                        }>
                            <img src="./Images/TvSubscription/goTV.svg" alt="" className="md:w-[118px] lg:w-[270px] md:h-[94px] lg:h-[250px]"/>
                        </div>
                        <div onClick ={()=>{
                            setTvSubscription("dstv")
                            setTimeout(()=> {
                                GetFunctionHandler();
                               },1000)
                        }
                        }>
                        <img src="./Images/TvSubscription/dstv.svg" alt="" className="md:w-[118px] lg:w-[270px] md:h-[94px] lg:h-[250px]"/>
                        </div>
                        <div onClick ={()=>{
                            setTvSubscription("startimes")
                            setTimeout(()=> {
                                GetFunctionHandler();
                               },1000)
                            
                        }
                        }>
                        <img src="./Images/TvSubscription/starTimes.svg" alt="" className="md:w-[118px] lg:w-[270px] md:h-[94px] lg:h-[250px]"/>
                        </div>
                        <div onClick ={()=>{
                            setTvSubscription("showmax")
                            setTimeout(()=> {
                                GetFunctionHandler();
                               },1000)
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
        </DashBoardLayout>
    )
}