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
            <div className='w-[350px] h-[500px] bg-white flex flex-col items-center justify-center relative'>
                <RxCross2 className='text-3xl absolute top-20 right-40' />
                <header
            </div>
        </Modal>
    </div>
  )
}

export default Reviewers