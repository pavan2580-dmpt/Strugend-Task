import React from 'react'
import Image from 'next/image'
function HeroSection() {
  return (
    <>
    <div className="Hero_Section_container w-full 
                    flex flex-col lg:items-center
                    lg:flex-row lg:order-1  ">

        <div className="Hero_section_content w-[100%] lg:w-[50%]
                        flex flex-col gap-[40px]  order-2">
            {/* --- */}
           <div>
                  <h1 className='text-3xl font-extrabold bg-gradient-to-r
                              from-orange-300 to-red-700 text-transparent 
                                bg-clip-text'>
                                 Welcome..
                   </h1>
                   <h1 className='text-white text-4xl lg:text-6xl mt-4 font-light '>
                       Warmth and comfort
                   </h1>
                        <span className='text-white text-4xl lg:text-6xl
                                         font-light mr-7'>
                                          for
                       </span>
                       <span className='bg-gradient-to-r from-orange-500
                                      to-red-700  text-transparent bg-clip-text
                                        font-extrabold text-4xl lg:text-6xl'>
                                         your furry friends
                       </span>
                   <p className='text-white mt-5 text-xl font-extralight'>
                                 Discover the perfect pet heating solutions to 
                                 keep your beloved companions cozy 
                               and content all year round.
                   </p>
           </div>
           {/* --- */}
           <div className='buttons flex gap-4 '>
                 <button className='text-white text-xl border-2 lg:text-2xl
                                    border-white border-solid py-3 px-6 
                                     rounded-[30px] bg-gradient-to-r from-red-500
                                   to-rose-500 cursor-pointer'>
                                    Our services
                </button>
                <button className='text-white text-xl underline decoration-dotted'>
                        Schedule a call
                </button>
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

        <div className="Hero_section_images flex justify-center w-[100%] lg:w-[50%] order-1 lg:order-2">
                 <Image src={"/assets/biscut_white.png"}
                         width={60} 
                         height={60}
                         alt='dog' 
                         className='rounded-[50%] absolute left-[66%] top-[8%] sm:top-[14%] lg:left-[80%] animate-breathe-1'
                  />
                  
                <Image src={"/assets/circle_black_dog.png"}
                       width={60} height={60} alt='dog'
                       className='rounded-[50%] absolute left-[83%] top-[15%] sm:top-[25%] sm:left-[78%] 2xl:left-[85%] animate-breathe-2'
                />

                 
                <Image src={"/assets/black_white.png"} 
                       width={60} 
                       height={60} 
                       alt='dog' 
                       className='rounded-[50%] absolute top-[18%] left-[2%] sm:top-[25%] sm:left-[13%] lg:left-[55%] animate-breathe-3 '
                />

                        
                <Image src={"/assets/pug.png"} 
                       width={60} 
                       height={60} 
                       alt='dog' 
                       className='rounded-[50%] absolute top-[10%] left-[20%] sm:top-[15%] lg:left-[60%] animate-breathe-4'
                />

                        
                <Image src={"/assets/biscut.png"} 
                       width={60} 
                       height={60} 
                       alt='dog' 
                       className='rounded-[50%] absolute left-[45%] top-[6%] sm:top-[10%] lg:left-[55%] lg:top-[50%] animate-breathe-5
                '/>

                <div className="h-[60vh] w-[100%] lg:w-[60%] 
                                bg-gradient-to-tr from-slate-950 to-fuchsia-950
                                rounded-tl-full rounded-tr-full shadow-2xl flex items-end justify-center shadow-red-300 ">

                    <Image src={'/assets/home_dog.png'} height={100} width={400}  className='h-[450px] w-[400px]' alt='dog'/>
                   
                </div>
          
        </div>
    </div>
    </>
  )
}

export default HeroSection