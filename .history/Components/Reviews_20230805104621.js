import React from 'react'
import Review from './Review'

function Reviews() {
  return (
    <div>
        <div className='mt-24'>
            <h1 className='font-extrabold text-6xl text-center mb-6'>Loved by multiple users.</h1>
            <p className='text-center text-lg font-semibold'>We provide a simple service that is easy to use to anyone that goes on to our website there is no <br /> complexity that would cause a customer
            to be confused in anyway.</p>
            <div className='flex justify-center items-center my-14'>
              <Review />
              <Review />
              <Review />
            </div>
            <div className='flex justify-center'>
              <button className='bg-[#1cc592] px-10 py-4 my-7'>Write a review</button>
            </div>
        </div>
    </div>
  )
}

export default Reviews