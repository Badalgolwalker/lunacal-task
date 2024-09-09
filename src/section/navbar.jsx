import React from 'react'

import tstyles from "../Navbar.module.css"

const navbar = ({name}) => {

  return (
    <div className='h-[50px] w-[100%] bg-red-400 flex items-center justify-between px-10'>
<button className='nav'>Experience</button>
<button className='nav'>Recomded</button>
<button className='nav'>About</button>

   
    </div>
  )
}

export default navbar
