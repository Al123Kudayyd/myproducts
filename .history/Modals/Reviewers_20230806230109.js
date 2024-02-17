import { closeReviewModal, openReviewModal } from '@/redux/modalSlice'
import Modal from '@mui/material/Modal'
import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RxCross2 } from 'react-icons/rx'
import { IoMdCloudUpload } from 'react-icons/io'
import { FaStar } from 'react-icons/fa'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '@/firebase'

function Reviewers() {
    
    const open = useSelector(state => state.modals.openreviewModal)
    const dispatch = useDispatch()
    const [currentValue, setCurrentValue] = useState(0)
    const [hoverValue, setHoverValue] = useState(undefined)
    const filePickerRef = useRef(null)

    const handleClick = (value) => {
        setCurrentValue(value)
    }

    const handleMouseOver = (value) => {
        setHoverValue(value)
    }

    const handleMouseLeave = () => {
        setHoverValue(undefined)
    }

    const colors = {
        orange: "#FFBA5A",
        grey: "#a9a9a9"
        
    };

    const [reviews, setReviews] = useState({
        profile:"",
        star:0,
        desc:""
    })
    
    async function handleSubmit() {
        const docRef = await addDoc(collection(db, "reviews"), reviews)
    }
    

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
                        <input 
                        type={"text"}
                        className='h-32 bg-transparent border border-gray-700 p-3 rounded-lg mb-5'
                        onChange={(e) => setReviews({...reviews })}
                        />
                        <button className='flex items-center justify-center bg-[#1cc592] px-5 py-3 hover:bg-opacity-50 transition 
                        duration-300 rounded-md'>
                            <IoMdCloudUpload className='text-white text-lg' onClick={() => filePickerRef.current.click()}/>
                            <p className='ml-3 text-xl text-white'>Upload File</p>
                        </button>
                    </div>
                    <div className='mb-5'>
                        <header className='text-xl font-bold mb-3 text-gray-300'>Rating</header>
                        <div className='flex text-gray-300 text-3xl cursor-pointer' typeof='number'>
                        {
                            new Array(5).fill().map((_, index) => (<FaStar 
                                onClick={() => handleClick(index + 1)}
                                color={(hoverValue || currentValue) > index ? colors.orange : colors.gray } 
                                onMouseOver={() => handleMouseOver(index + 1)}
                                onMouseLeave={handleMouseLeave}/>))
                                
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
                        duration-300 rounded-md text-xl font-bold w-full text-white'
                        onClick={handleSubmit}
                        >Submit</button>
                </div>
            </div>
        </Modal>
    </div>
  )
}

export default Reviewers