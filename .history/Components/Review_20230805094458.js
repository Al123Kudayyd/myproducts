import Image from 'next/image'
import React from 'react'
import Twitter from '../public/assets/twitter-logo.png'

function Review() {
  return (
    <div>
        <div className='w-[0px] h-[400px] bg-gray-200 rounded-xl relative flex justify-center'>
            <Image
            src={Twitter}
            width={70}
            height={70}
            className='rounded-full absolute -top-10'
            />
        </div>
    </div>
  )
}

export default Review