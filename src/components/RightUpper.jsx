import React, { useState } from 'react'

const RightUpper = () => {
  const [Active, setActive] = useState("about")

  return (
    <>
       <div  className='w-[85%] h-[46%] bg-zinc-800 rounded-lg'>
      <div className='h-[40px] w-[84%] mx-12 my-3 relative  rounded-full bg-black flex items-center justify-between px-1'>
<button onClick={()=>setActive("about")} className={Active === "about" ? "bg-zinc-900 text-white rounded-full py-3 px-4 shadow-2xl":"bg-neutral-600 rounded-full text-white py-1 px-3"}>About</button>
<button className={Active === "experience" ? "bg-zinc-900 text-white rounded-full py-3 px-4 shadow-2xl":"bg-neutral-600 rounded-full text-white py-1 px-3"} onClick={()=>setActive("experience")}>Experience</button>
<button className={Active === "recomended" ? "bg-zinc-900 text-white rounded-full py-3 px-4 shadow-2xl":"bg-neutral-600 rounded-full text-white py-1 px-3"} onClick={()=>setActive("recomended")}>Recomended</button>
    </div>
    
    <div className='relative h-[83%]'>
      <h1 className='text-center absolute top-[50%] left-[50%] translate-x-[-50%] text-white translate-y-[-50%] '>
        {Active === "about"? "this is  a About Page":""}
        {Active === "experience"? "this is  a experience Page":""}
        {Active === "recomended"? "this is  a recomended Page":""}
      </h1>
    </div>
      </div> 
    </>
  )
}

export default RightUpper
