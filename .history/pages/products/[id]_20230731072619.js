import { useRouter } from 'next/router'
import React from 'react'

function Id() {
    const router = useRouter()
    const { id } = router.query

  return (
    <div>
        <h1>This is id {id } </h1>
    </div>
  )
}

export default Id