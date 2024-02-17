import { useRouter } from 'next/router'
import React from 'react'

function Id() {
    const router = useRouter()
    const { id } = router.query
    const 

  return (
    <div>
        <h1>{ id } </h1>
    </div>
  )
}

export default Id