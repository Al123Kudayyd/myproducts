import Image from 'next/image'
import React from 'react'
import Shopping from '../public/assets/'

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