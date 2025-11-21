import React, {useEffect} from 'react'
import { TestingFeature } from './TestingFeature';
import { StepsToEarnRewards } from './StepsForRewards';
import { EligibilityRules } from './Eligibility';
import { RewardsAndPricing } from './RewardsAndPricing';
import FeedbackSection from './FeedbackSection';
import RewardDistribution from './RewardDistribution';
import TestingWindow from './TestingWindow';
import Conclusion from './Conclusion';
import TestingHeroSection from './TestingHeroSection';
import { RemoveLocalStorage } from '../LocalStorage/LocalStorage';
export const TestingDesign = () => {
  const UserStatus = localStorage.getItem("cxccxfd")
 useEffect(()=> {
    if(UserStatus){
      RemoveLocalStorage();
    }
 })
  return (
   <div>
   <TestingHeroSection/> 
        {/* The Features available for testing..... */}
   <TestingFeature/>
     <StepsToEarnRewards/>
        <EligibilityRules/>
        <RewardsAndPricing/>
        <FeedbackSection/>
        <RewardDistribution/>
        <TestingWindow/>
        <Conclusion/>
        </div>
  )
}
