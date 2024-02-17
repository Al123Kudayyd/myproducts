import { closeReviewModal, openReviewModal } from '@/redux/modalSlice'
import Modal from '@mui/material/Modal'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RxCross2 } from 'react-icons/rx'
import { IoMdCloudUpload } from 'react-icons/io'
import { FaStar } from 'react-icons/fa'

function Reviewers() {
    
    const open = useSelector(state => state.modals.openreviewModal)
    const dispatch = useDispatch()
    const [currentValue, setCurrentValue] = useState(0)
    const []

  return (
    <div>
        <Modal
        open={open}
        onClose={() => dispatch(closeReviewModal())}
        className='flex justify-center mt-24'>
            <div className='w-[350px] h-[500px] bg-white relative'>
                <RxCross2 className='text-3xl text-gray-300 cursor-pointer' onClick={() => dispatch(closeReviewModal())} />
                <div className='flex flex-col items-center justify-center relative'>
                    <div className='flex flex-col mb-5 '>
                        <header className='text-xl font-bold mb-3 text-gray-300'>Profile</header>
                        <button className='flex items-center justify-center bg-[#1cc592] px-5 py-3 hover:bg-opacity-50 transition 
                        duration-300 rounded-md'>
                            <IoMdCloudUpload className='text-white text-lg '/>
                            <p className='ml-3 text-xl text-white'>Upload File</p>
                        </button>
                    </div>
                    <div className='mb-5'>
                        <header className='text-xl font-bold mb-3 text-gray-300'>Rating</header>
                        <div className='flex text-gray-300 text-3xl' typeof='number'>
                        {
                            new Array(5).fill().map(() => (<FaStar />))
                        }
                        </div>
                    </div>
                    <div>
                        <header className='text-xl font-bold mb-3 text-gray-300'>Description</header>
                        <input 
                        type={"text"}
                        className='h-32 bg-transparent border border-gray-700 p-3 rounded-lg mb-5 '
                        />
                    </div>
                    <button className='bg-[#1cc592] px-5 py-3 hover:bg-opacity-70 transition 
                        duration-300 rounded-md text-xl font-bold w-full text-white'>Submit</button>
                </div>
            </div>
        </Modal>
    </div>
  )
}

export default Reviewers