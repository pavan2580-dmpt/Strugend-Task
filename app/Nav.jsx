import Image from "next/image"
import {BsArrowRightCircleFill} from "react-icons/bs"
function Nav() {
  return (
    <>
    <div className="w-full h-[80px] flex items-center justify-between">
        <div className="Logo flex w-fit items-center gap-3 cursor-pointer">
            <Image src={"/Logo_White.png"} width={40} height={80} alt="logo"/>
            <h1 className="text-white text-3xl">Petty</h1>
        </div>
        <div className="navOptions flex gap-10">
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
            
       <div className="flex items-center gap-4 cursor-pointer text-white text-3xl">
       <h1>Contact us </h1>
        <BsArrowRightCircleFill/>
       </div>

    </div>
    
    </>
  )
}

export default Nav