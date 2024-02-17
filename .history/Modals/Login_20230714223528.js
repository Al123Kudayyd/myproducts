import { Modal } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

function Login() {

    const isOpen = useSelector(state => state.modals.opensignupModal)

  return (
    <div>
        <Modal
        open={isOpen}>
            
        </Modal>
    </div>
  )
}

export default Login