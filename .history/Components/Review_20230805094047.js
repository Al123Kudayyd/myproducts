import Image from 'next/image'
import React from 'react'
import Twitter from '../public/assets/twitter-logo.png'

function Review() {
  return (
    <div>
        <div className='w-[250px] h-[400px] bg-gray-200 rounded-xl relative'>
            <Image
            src={Twitter}
            width={50}
            height={50}
            className='rounded-full j'
            />
        </div>
    </div>
  )
}

export default Review