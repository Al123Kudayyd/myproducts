import Login from '@/Modals/Login'
import Signup from '@/Modals/Signup'
import { closeLoginModal, openLoginModal } from '@/redux/modalSlice'
import Modal from '@mui/material/Modal'
import Link from 'next/link'
import React from 'react'
import { HiOutlineSearch } from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux'

function Nav() {

  

  const username = useSelector(state => state.user.username)

  return (
    <div className='flex justify-between sticky top-0 items-center border-b border-[#ccc] px-3 py-5'>
        <div className='flex items-center justify-center'>
            <Link href='/'>
              <h1 className='text-[#1cc592] text-3xl font-bold mr-5'>MarketPlace</h1>
            </Link>
            
            <input
            className='border border-[#ccc] outline-[#1cc592] w-[350px] h-[50px] px-5 text-xl rounded-2xl ' 
            placeholder='Search' 
            />
            <div className='text-xl bg-[#1cc592] px-4 rounded-full py-4 ml-3 text-white cursor-pointer'>
                <HiOutlineSearch />
            </div>
        </div>
        {!username ? (<div className='hidden lg:flex items-center text-lg cursor-pointer'>
            <p className='border-r border-[#ccc] hover:bg-gray-100 p-3'>Sell an item</p>
            <Signup />
        </div>) : <div className='hidden lg:flex items-center text-lg cursor-pointer'>
          <p className='bg-'>G</p>
          </div>}
        
        
    </div>
  )
}

export default Nav