import Image from 'next/image'
import React from 'react'
import Shopping from '../public/assets/Shopping.png'

function Banner() {
  return (
    <div className='flex justify-center items-center pb-40'>
        <div className='border border-gray-300 rounded-lg w-[650px] h-[400px]'>
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