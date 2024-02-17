import Image from 'next/image'
import React from 'react'
import Shopping from '../public/assets/Shopping.png'

function Banner() {
  return (
    <div className='flex justify-center items-center'>
        <Image
        src={Shopping}
        width={150}
        height={150}
        alt={'img'}
        />
        
    </div>
  )
}

export default Banner