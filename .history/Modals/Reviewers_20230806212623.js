import { closeReviewModal, openReviewModal } from '@/redux/modalSlice'
import Modal from '@mui/material/Modal'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RxCross2 } from 'react-icons/rx'
import { IoMdCloudUpload } from 'react-icons/io'

function Reviewers() {
    
    const open = useSelector(state => state.modals.openreviewModal)
    const dispatch = useDispatch()

  return (
    <div>
        <Modal
        open={open}
        onClose={() => dispatch(closeReviewModal())}
        className='flex justify-center items-center'>
            <div className='w-[350px] h-[500px] bg-white relative'>
                <RxCross2 className='text-3xl text-gray-800' />
                <div className='flex flex-col items-center justify-center relative'>
                    <div className='flex flex-col'>
                        <header className='text-xl font-bold mb-3'>Profile</header>
                        <button className='flex items-center'>
                            <IoMdCloudUpload />
                            <p className='ml-3 text-xl text-white'>Upload File</p>
                        </button>
                    </div>
                    <div>
                        <header className='text-xl font-bold mb-3'>Profile</header>
                        <input 
                        type={"number"}
                        className='h-5 bg-transparent border border-gray-700 p-3 rounded-lg mb-5'
                        />
                    </div>
                    <div>
                        <header className='text-xl font-bold mb-3'>Profile</header>
                        <input 
                        type={"desc"}
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