import React, { useState } from 'react'

function TopBanner() {
    const [modal, setModal] = useState(false)
    
    const user = use

  return (
    <div className='hidden lg:flex items-center text-lg cursor-pointer'>
          <p onClick={() => setModal(true)} 
          className='bg-[#1cc592] rounded-full px-4 py-2 font-bold text-3xl text-white'>G</p>
    </div>
  )
}

export default TopBanner