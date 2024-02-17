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
      <div className='h-[550px] w-[400px] flex flex-col justify-center'>
        <Modal 
        open={isOpen} 
        onClose={() => dispatch(closeLoginModal())}
        className='bg-white flex justify-center'>
          <div className=''>
            <div className='flex justify- items-center py-4 px-4 border-b border-gray-400'>
              <h2 className='font-bold text-3xl'>Login in</h2>
              <p className='font-thin'>Cancel</p>
            </div>
            <h1 className='text-[#1cc592] text-3xl font-bold text-center py-4'>MarketPlace</h1>
            <form>

            </form>
          </div>
        </Modal>
      </div>
      
    </div>
  )
}

export default Signup