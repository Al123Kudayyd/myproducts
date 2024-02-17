import { closeLoginModal, openLoginModal } from '@/redux/modalSlice'
import Modal from '@mui/material/Modal'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Signup() {

    const isOpen = useSelector(state => state.modals.openloginModal)
    const dispatch = useDispatch()

  return (
    <div>
      <p
      onClick={() => dispatch(openLoginModal())} 
      className='border-r border-[#ccc] hover:bg-gray-100 p-3'>Login in</p>
      <div>
          
      </div>
      
    </div>
  )
}

export default Signup