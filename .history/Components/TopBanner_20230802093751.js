import React, { useState } from 'react'

function TopBanner() {
    const [modal, setModal] = useState()
  return (
    <div className='hidden lg:flex items-center text-lg cursor-pointer'>
          <p className='bg-[#1cc592] rounded-full px-5 py-3 font-bold text-3xl'>G</p>
    </div>
  )
}

export default TopBanner