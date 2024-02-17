import Image from 'next/image'
import React from 'react'
import Shopping from '../public/assets/Shopping.png'

function Banner() {
  return (
    <div className='flex justify-center items-center mt-5'>
        <div className='flex justify-center shadow-md border border-gray-300 rounded-lg w-[1050px] h-[400px]'>
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