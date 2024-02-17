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
      <Modal 
      open={isOpen} 
      onClose={() => dispatch(closeLoginModal())}
      className='h-[450px] w-[400px] bg-white flex justify-center items-center'>
        <div className=''>
          <div>
            <h2 className='font-bold'>Login in</h2>
            <p className='font-thin'>Cancel</p>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default Signup