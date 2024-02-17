import Image from 'next/image'
import React from 'react'
import Shopping from '../public/assets/Shopping.png'

function Banner() {
  return (
    <div className='flex justify-center items-center pb-56'>
        <div className='border border-gray-300 rounded-lg w-[650px] h-[200px]'>
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