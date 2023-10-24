import React from 'react'
import Image from 'next/image'
function HeroSection() {
  return (
    <>
    <div className="Hero_Section_container w-full h-[74.2vh] flex items-center">
        <div className="Hero_section_content w-[50%] 
         flex flex-col gap-[40px]">
            {/* --- */}
           <div>
           <h1 className='text-3xl font-extrabold bg-gradient-to-r from-orange-300 to-red-700 
            text-transparent bg-clip-text'>Welcome..</h1>
            <h1 className='text-white text-6xl mt-4 font-light'>
                Warmth and comfort
                </h1>
                 <span className='text-white text-6xl font-light mr-5'>for</span>
                  <span className='bg-gradient-to-r from-orange-500 to-red-700 
            text-transparent bg-clip-text font-extrabold text-6xl'>your furry friends</span>
            <p className='text-white mt-5 text-xl font-extralight'>
            Discover the perfect pet heating solutions to keep your beloved companions cozy 
            and content all year round.
            </p>
           </div>
           {/* --- */}
           <div className='buttons flex gap-4 '>
            <button className='text-white text-2xl border-2
             border-white border-solid py-3 px-6 rounded-[30px] bg-gradient-to-r from-red-500 to-rose-500 cursor-pointer'>Our services</button>
            <button className='text-white text-xl underline decoration-dotted'>Schedule a call</button>
           </div>
           {/* -- */}
           <div className="profile flex items-center gap-4">
            <div className="line h-14 w-2 rounded-sm bg-gradient-to-b from-red-500 to-rose-500"/>
           <div>
           <div className="images flex items-center gap-1 text-white">
                <Image src="/assets/profile.png" width={60} height={50} alt='profile'/>
                <h1>Our Experts</h1>
            </div>
            <p className='text-white w-72'>Chhose the service they love or start shopping now</p>
           </div>
           </div>
           
        </div>

{/* ----------------------------------------------------------------------- */}

        <div className="Hero_section_images flex justify-center w-[50%] ">
                <Image src={"/assets/biscut_white.png"}
                 width={50} height={50}
                  alt='dog'
                   className='rounded-[50%] absolute left-[60%] top-[18%]'/>
                <Image src={"/assets/circle_black_dog.png"}
                 width={50} height={50} alt='dog'
                  className='rounded-[50%] absolute 
                  left-[80%] top-[20%]'/>
                <Image src={"/assets/black_white.png"} width={60} height={60} alt='dog' className='rounded-[50%] absolute top-[18%] left-[70%]'/>
                <Image src={"/assets/pug.png"} width={50} height={50} alt='dog' className='rounded-[50%] absolute top-[65%] left-[55%]'/>
                <Image src={"/assets/biscut.png"} width={50} height={50} alt='dog' className='rounded-[50%] absolute left-[56%] top-[30%]'/>
                <div className="h-[60vh] w-[60%] bg-gradient-to-tr from-slate-950 to-fuchsia-950
                 rounded-tl-full rounded-tr-full shadow-2xl flex items-end justify-center shadow-red-300 ">
                    <Image src={'/assets/home_dog.png'} height={100} width={400}  className='h-[450px] w-[400px]' alt='dog'/>
                   
                </div>
          
        </div>
    </div>
    </>
  )
}

export default HeroSection