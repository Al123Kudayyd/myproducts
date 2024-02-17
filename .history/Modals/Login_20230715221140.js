import { closeSignUpModal } from '@/redux/modalSlice'
import { Modal } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Login() {

    const Open = useSelector(state => state.modals.opensignupModal)
    const dispatch = useDispatch()

  return (
    <div>
        <Modal
        open={Open}
        onClose={() => dispatch(closeSignUpModal())}
        className='>
            <div className=''>
                
            </div>
        </Modal>
    </div>
  )
}

export default Login