import React from "react";
import { Link } from "react-router-dom";

export const VerificationSuccessful = () => {
  return (
    <div className="justify-between text-center border border-[#58DA8F] p-4 flex flex-col gap-[5px] rounded-[8.6px] h-[172px] w-[199px] bg-white md:absolute md:top-[20%] md:left-[50%] lg:h-[301px] lg:w-[348px] lg:rounded-[15px]">
      <div>
        <h1 className="text-[8px] lg:text-[14px]">Verification Successful</h1>
        <p className="text-[#737373] text-[6px] lg:text-[10px]">
          Sign in to your account to continue operations!
        </p>
        <img className="flex justify-center items-center mx-auto w-[60px] h-[60px] md:h-[] lg:w-[110px] lg:h-[110px]" src="https://s3-alpha-sig.figma.com/img/5daa/fe9d/4e1bef46b4d7e33b37b87c021d7f7bbe?Expires=1688342400&Signature=U38u~zXyLmnlSUEV3A2mYtsGhUX56lsx7PexfYO28~7FP9DyuXiejN9AP5Ma6xTegayPkHhzYw9TPjBxSUS3rxlcEMaF4lVAH2B5Z~eOVN4eh~UD5YpJydVUIigaH84Co4zEPBINCcmvV46UPSfzy735btuRyfsk2bWlTdMGKDn3i-yYdnVv2-Cq5IXWAkySRnzDIgd5TGgpQz-ll8lRefjvQMFTLXtThJa8~hKrm1IFggEbI7likKjfw-9tz3hnvdUKr8es1l3hQwr5ZvDEmlIpN1ikOmfolOg~j07CpOp9AuPiGrHHppVlMyoGvQQRGqrjw9dPvL0tM6sjEhdXbg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="/"/>
      </div>
      <Link to="/Login">
        <div className="bg-[#04177f] cursor-pointer mt-[5%] mx-auto w-[64px] h-[21px] flex justify-center items-center text-[#ffffff] text-[7px] rounded-[4.5px] lg:rounded-[8px] md:w-[95px] md:h-[26px] md:p-[2%] lg:w-[113px] lg:h-[38px] lg:text-[13px]">
          Continue
        </div>
      </Link>
    </div>
  );
};
