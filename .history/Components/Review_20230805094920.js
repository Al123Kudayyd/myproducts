import Image from 'next/image'
import React from 'react'
import Twitter from '../public/assets/twitter-logo.png'

function Review() {
  return (
    <div>
        <div className='w-[300px] h-[450px] bg-gray-200 rounded-xl relative flex justify-center'>
            <div className=''>
                <Image
                src={Twitter}
                width={70}
                height={70}
                className='rounded-full absolute -top-10'
                />
            </div>
            <p>Quick delivery within minutes of purchase of antivirus software retail code by email and clear instructions tp extend cover done on last day on 2 devices within 10 mins. Second time purchaser excellent service.</p>

        </div>
    </div>
  )
}

export default Review