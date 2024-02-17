import Image from 'next/image'
import React, { useState } from 'react'
import Twitter from '../public/assets/twitter-logo.png'
import { FaStar } from 'react-icons/fa'
import { collection, onSnapshot } from 'firebase/firestore'
import { db } from '@/firebase'

function Review() {

    const [reviews, setReviews] = useState()

    const unsubscribe = onSnapshot(collection(db, "reviews"), (snapshot) => {
        console.log(snapshot)
        setReviews(snapshot.docs.map(doc => {
            return {
                username: doc.data().username,
                profile: doc.data().profile,
                description: doc.data().description,
                rating: doc.data().rating
            }
        }))

    })


  return (
    <div className='flex flex-wrap justify-center '>
        
            {reviews?.map((review) => (
            <div className='w-[300px] h-[450px] bg-gray-200 rounded-xl relative mx-5 my-10'>
            <div className='flex justify-center border w-[50px] h-[40px] border-gray-500 rounded-full relative'>
                <img
                src={review.profile}
                width={100}
                height={150}
                className='absolute'
                />
            </div>
            <div className='flex flex-col items-center'>
                <h2 className='font-bold text-3xl absolute top-8 text-center'>{review.username}</h2>
                <div className='flex absolute text-[#FDCC0D] top-24 text-3xl'>
                    {review.rating}
                {
                    new Array(5).fill().map(() => (<FaStar />))
                    
                }
                </div>
                <p className='text-center absolute top-1/3 font-semibold text-lg overflow-hidden overflow-y-scroll'>
                    {review.description}
                </p>
            </div>
                </div>
            ))}
            
            

        
    </div>
  )
}

export default Review