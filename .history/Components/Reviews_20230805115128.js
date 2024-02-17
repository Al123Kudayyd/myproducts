import { db } from '@/firebase'
import { openReviewModal } from '@/redux/modalSlice'
import { addDoc, collection } from 'firebase/firestore'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Review from './Review'

function Reviews() {

  const dispatch = useDispatch()

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
        <div className='mt-24 border-t border-gray-300 mx-16 '>
            <h1 className='font-extrabold text-6xl text-center my-6'>Loved by multiple users.</h1>
            <p className='text-center text-lg font-semibold'>We provide a simple service that is easy to use to anyone that goes on to our website there is no <br /> complexity that would cause a customer
            to be confused in anyway.</p>
            <div className='flex justify-center items-center mt-14'>
              <Review />
              <Review />
              <Review />
            </div>
            <div className='flex justify-center'>
              <button 
              onClick={() => dispatch(openReviewModal())}
              className='bg-[#1cc592] px-10 py-4 my-7 text-white font-bold text-xl hover:bg-white border-[#1cc592]
              hover:text-[#1cc592] duration-300'>
              Write a review!</button>
            </div>
        </div>
    </div>
  )
}

export default Reviews