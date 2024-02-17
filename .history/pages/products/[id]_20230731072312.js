import { useRouter } from 'next/router'
import React from 'react'

function Id() {
    const router = useRouter()
    const { id } = router.query

  return (
    <div>
        
    </div>
  )
}

export default Id