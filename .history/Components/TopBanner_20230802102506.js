import React, { useState } from 'react'
import { useSelector } from 'react-redux'

function TopBanner() {
    const [modal, setModal] = useState(false)
    
    const user = useSelector(state => state.user)

  return (
    <div className='hidden lg:flex items-center text-lg cursor-pointer'>
          <p onClick={() => setModal(true)} 
          className='bg-[#1cc592] rounded-full px-4 py-2 font-bold text-3xl text-white uppercase'>{user.username[0]}</p>
          {modal && <div className='border border-gray-500 '>
                <p>Se</p>
            </div>}
    </div>
  )
}

export default TopBanner