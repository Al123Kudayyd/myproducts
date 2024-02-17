import { Modal } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

function ReviewInput() {
    const isOpen = useSelector(state => state.modals.openreviewModal)
    constdispatch = useDispatch

  return (
    <div>
        <Modal
        open={isOpen}
        
        >

        </Modal>
    </div>
  )
}

export default ReviewInput