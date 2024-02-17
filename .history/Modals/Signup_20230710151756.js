import { closeLoginModal, openLoginModal } from '@/redux/modalSlice'
import Modal from '@mui/material/Modal'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Signup() {

    const isOpen = useSelector(state => state.modals.openloginModal)
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

  return (
    <div>
      <p
      onClick={() => dispatch(openLoginModal())} 
      className='border-r border-[#ccc] hover:bg-gray-100 p-3'>Login in</p>
      <div className='h-[550px] w-[400px] flex flex-col justify-center'>
        <Modal 
        open={isOpen} 
        onClose={() => dispatch(closeLoginModal())}
        className='bg-white flex justify-center'>
          <div className=''>
            <div className='flex justify-between items-center py-4 px-4 border-b border-gray-400'>
              <h2 className='font-bold text-3xl'>Login in</h2>
              <p className='font-thin'>Cancel</p>
            </div>
            <h1 className='text-[#1cc592] text-3xl font-bold text-center py-4'>MarketPlace</h1>
            <div className='flex flex-col items-center'>
              <input 
                type={"email"}
                placeholder='Email' 
                className='h-10 rounded-md bg-transparent border border-gray-700 p-6'
                onChange={e => setEmail(e.tart)} 
              />
              <input 
                type={"password"}
                placeholder='Password' 
                className='h-10 rounded-md bg-transparent border border-gray-700 p-6 mt-3'
              />
              <button className="bg-[#1cc592] text-black w-full rounded-md 
              font-bold text-lg p-2">Sign In</button>
            </div>
            
          </div>
        </Modal>
      </div>
      
    </div>
  )
}

export default Signup