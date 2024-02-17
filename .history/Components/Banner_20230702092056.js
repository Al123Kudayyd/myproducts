import Image from 'next/image'
import React from 'react'
import shopping from '../public/assets/shopping.svg'

function Banner() {
  return (
    <div>
        <Image
        src={shopping}
        alt={}
        />
    </div>
  )
}

export default Banner