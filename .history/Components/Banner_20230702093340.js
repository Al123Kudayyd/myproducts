import Image from 'next/image'
import React from 'react'
import shopping from '../public/assets/shopping.png'

function Banner() {
  return (
    <div>
        <Image
        src={shopping}
        alt={'img'}
        />
    </div>
  )
}

export default Banner