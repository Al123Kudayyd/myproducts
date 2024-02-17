import Image from 'next/image'
import React from 'react'
import Twitter from '../public/assets/twitter-logo.png'
import { AiOutlineStar } from 'react-icons/ai'

function Review() {
  return (
    <div>
        <div className='w-[300px] h-[450px] bg-gray-200 rounded-xl relative'>
            <div className='flex justify-center'>
                <Image
                src={Twitter}
                width={70}
                height={70}
                className='rounded-full absolute -top-10'
                />
            </div>
            <div className='flex flex-col items-center'>
                <h2 className='font-bold text-3xl absolute top-8 text-center'>Sammy A.</h2>
                <div className='flex absolute text-gray-500 top-20 text-3xl bg-[]'>
                {
                    new Array(5).fill().map(() => (<AiOutlineStar />))
                }
                </div>
                <p className='text-center absolute top-1/4 font-semibold text-lg'>Quick delivery within minutes of purchase of antivirus software retail code by email and clear instructions tp extend cover done on last day on 2 devices within 10 mins. Second time purchaser excellent service.</p>
            </div>
            

        </div>
    </div>
  )
}

export default Review