import { Modal } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

function Login() {

    const isOpen = useSelector(state => state.opensignupModal)

  return (
    <div>
        <Modal>
            
        </Modal>
    </div>
  )
}

export default Login