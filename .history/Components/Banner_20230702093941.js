import Image from 'next/image'
import React from 'react'
import Shopping from '../public/assets/Shopping.png'

function Banner() {
  return (
    <div className='flex justify-center items-center border border-gray-400 rounded-full'>
        <Image
        src={Shopping}
        width={600}
        height={600}
        alt={'img'}
        />
        
    </div>
  )
}

export default Banner