import { useRouter } from 'next/router'
import React from 'react'

function Id() {
    const router = useRouter()
    const { id } = router.query

  return (
    <div>
        T
    </div>
  )
}

export default Id