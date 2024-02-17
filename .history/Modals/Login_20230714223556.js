import { Modal } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

function Login() {

    const isOpen = useSelector(state => state.modals.opensignupModal)

  return (
    <div>
        <Modal
        open={isOpen}
        className='bg-white'>
            <div>This is the sign up modal</div>
        </Modal>
    </div>
  )
}

export default Login