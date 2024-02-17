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
    <div>
        <div className='w-[300px] h-[450px] bg-gray-200 rounded-xl relative mx-5 '>
            {reviews.map((review) => (
                
            ))}
            
            

        </div>
    </div>
  )
}

export default Review