import React from 'react'
import Review from './Review'

function Reviews() {
  return (
    <div>
        <div className='mt-24'>
            <h1 className='font-extrabold text-6xl text-center mb-6'>Loved by multiple users.</h1>
            <p className='text-center text-lg font-semibold'>We provide a simple service that is easy to use to anyone that goes on to our website there is no <br /> complexity that would cause a customer
            to be confused in anyway.</p>
            <div>
             <Review />
            </div>
            <Review />
        </div>
    </div>
  )
}

export default Reviews