import { Modal } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Login() {

    const isOpen = useSelector(state => state.modals.opensignupModal)
    const dispatch = useDispatch()

  return (
    <div>
        <Modal
        open={isOpen}
        onClose={()}
        className='bg-white'>
            <div>This is the sign up modal!</div>
        </Modal>
    </div>
  )
}

export default Login