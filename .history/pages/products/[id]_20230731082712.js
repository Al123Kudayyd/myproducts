import { useRouter } from 'next/router'
import React, { useState } from 'react'

function Id() {
    const router = useRouter()
    const { id } = router.query
    const [loading, setLoading] = useState()

  return (
    <div>
      
        <h1>{ id } </h1>
    </div>
  )
}

export default Id