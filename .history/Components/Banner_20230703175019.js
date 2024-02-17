import Image from 'next/image'
import React from 'react'
import Shopping from '../public/assets/Shopping.png'

function Banner() {
  return (
    <div className='flex justify-center items-center w-1/2'>
        <div className='border border-gray-300 rounded-lg'>
        <Image
        src={Shopping}
        width={600}
        height={600}
        alt={'img'}
        />
        
        </div>
    </div>
    
  )
}

export default Banner