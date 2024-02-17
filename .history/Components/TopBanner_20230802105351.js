import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { HiOutlineLogout } from 'react-icons/hi'
import { MdOutlineSell } from 'react-icons/md'

function TopBanner() {
    const [modal, setModal] = useState(false)
    
    const user = useSelector(state => state.user)

  return (
    <div className='hidden lg:flex items-center text-lg cursor-pointer'>
          <p onClick={() => setModal(!modal)} 
          className='bg-[#1cc592] rounded-full px-4 py-2 font-bold text-3xl text-white uppercase'>{user.username[0]}</p>
          {modal && <div className='shadow-xl absolute top-[100px] rounded-md  py-3 right-0 text-gray-500'>
                <div className='py-2 flex items-center  hover:bg-gray-200 '>
                    <MdOutlineSell />
                    <p className='pl-3'>Sell an item</p>
                </div>
                <div className='flex items-center pb-2'>
                    <HiOutlineLogout />
                    <p className='pl-3'>Log out</p>
                </div>
                
            </div>}
    </div>
  )
}

export default TopBanner