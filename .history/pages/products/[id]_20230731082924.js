import { useRouter } from 'next/router'
import React, { useState } from 'react'

function Id() {
    const router = useRouter()
    const { id } = router.query
    const [loading, setLoading] = useState(false)

  return (
    <div>
      {loading ? <AiOutlineLoading 
        className='animate-spin text-5xl text-[#1cc592]' /> :
        <h1>{ produc }</h1>
      }
     
    </div>
  )
}

export default Id