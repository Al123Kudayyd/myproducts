import { useRouter } from 'next/router'
import React, { useState } from 'react'

function Id() {
    const router = useRouter()
    const { id } = router.query
    const [loading, setLoading] = useState()

  return (
    <div>
      {loading ? <AiOutlineLoading 
          className='animate-spin text-5xl text-[#1cc592]' /> :
          }
      <h1>{ id } </h1>
    </div>
  )
}

export default Id