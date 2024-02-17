import Image from 'next/image'
import React from 'react'
import Shopping from '../public/assets/Shopping.png'

function Banner() {
  return (
    <div className='flex justify-center ite'>
        <Image
        src={Shopping}
        alt={'img'}
        />
    </div>
  )
}

export default Banner