import React from "react";
import offcanvas from "./Images/offcanvas.svg"
import profile from "./Images/johndoe.svg"
import drop from "./Images/drop.svg"
import yet from "./Images/yet.svg"

const Nav = () =>{
    return(
        <div className="mx-[22px] flex justify-between mb-[25.72px] mt-[9.69px]">
            
            <div className="flex gap-[2px]">
                <div className=" flex">
                    <img src={offcanvas} alt="" />
                </div>
                <div className="switch flex self-center justify-between border-black border-[0.39px] border-opacity-30">
                    <div className="flex gap-1">
                        <img src={profile} alt="" />
                        <p className="text-[6px] font-semibold">Switch Account</p>
                    </div>
                    <div>
                        <img src={drop} alt="" />
                    </div>
                </div>
            </div>
            <div className="text-[6px] font-semibold md:hidden self-center flex">Money Transfer</div>
            <div className="text-[6px] font-semibold hidden md:self-center md:flex">Currency Conversion</div>
            <div className="flex">
                <div className="text-[6px] font-semibold flex self-center gap-1">
                    <span>Light</span>
                    <div>-</div>
                    <span>Dark</span>
                </div>
                <div>
                    <img src="" alt="" />
                </div>
                <div className="flex">
                    <img src={yet} alt="" />
                </div>
            </div>
        </div>
    )
}


export default Nav