"use client"
import Image from "next/image"
import {BsArrowRightCircleFill} from "react-icons/bs"
import { useState } from 'react';
import {RxHamburgerMenu} from "react-icons/rx"
function Nav() {
  const[show,Setshow] = useState(false)
    function HandleShow(){
        Setshow(!show)
    }
  
  return (
    <>
    {
        show&&(
          <div className="sideBar w-[360px] h-[90%]
                          absolute top-[80px] right-0 sm:right-[100px]
                        bg-gray-400 rounded-md bg-clip-padding backdrop-filter
                          backdrop-blur-sm bg-opacity-10 border border-gray-100 z-10">
        <h1 className="navBarOptions_responsive">Home</h1>
        <h1 className="navBarOptions_responsive">About</h1>
        <h1 className="navBarOptions_responsive">Services</h1>
        <h1 className="navBarOptions_responsive">Traning</h1>
        <h1 className="navBarOptions_responsive">Shop</h1>
    </div>
        )
    }
    <div className="w-full h-[80px] flex items-center justify-between">
        <div className="Logo flex w-fit items-center gap-3 cursor-pointer">
            <Image src={"/Logo_White.png"} width={40} height={80} alt="logo"/>
            <h1 className="text-white text-3xl">Petty</h1>
        </div>
        
        {/* ---------- mobile Navigation ------------------ */}
        
        <>
          <RxHamburgerMenu size={30} color="white" className="lg:hidden cursor-pointer" onClick={HandleShow}/>
       
        </>
      {/* ---------- desktop navigation -------------------- */}
      <div className="hidden navOptions lg:flex gap-10">
            <div className="flex gap-2 items-center">
                <div>
                <Image src={"/Logo_colored.png"} width={25} height={20 } alt="logo" />
                    </div>
                 <h1 className="Navoptions">Home</h1>
            </div>
            <span className="Navoptions" >About</span>
            <span className="Navoptions">Services</span>
            <span className="Navoptions">Traning</span>
            <span className="Navoptions">Shop</span>

        </div>
            
       <div className="hidden lg:flex items-center gap-4 cursor-pointer text-white text-xl xl:text-2xl">
       <h1>Contact us </h1>
        <BsArrowRightCircleFill/>
       </div>













    </div>
    
    </>
  )
}

export default Nav