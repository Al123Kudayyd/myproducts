import { closeReviewModal, openReviewModal } from '@/redux/modalSlice'
import Modal from '@mui/material/Modal'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RxCross2 } from 'react-icons/rx'

function Reviewers() {
    
    const open = useSelector(state => state.modals.openreviewModal)
    const dispatch = useDispatch()

  return (
    <div>
        <Modal
        open={open}
        onClose={() => dispatch(closeReviewModal())}
        className=''>
            <div className='w-[350px] h-[500px] bg-white relative'>
                <RxCross2 className='text-3xl absolute top-20 left-40' />
                <div className='flex flex-col items-center justify-center relative'>
                    <div>
                        <header>Profile</header>
                        <input 
                        type={"text"}
                        placeholder='Username' 
                        className='h-5 bg-transparent border border-gray-700 p-3 rounded-lg mb-5'
                        />
                    </div>
                </div>
            </div>
        </Modal>
    </div>
  )
}

export default Reviewers