import { Modal } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function ReviewInput() {
    
    const dispatch = useDispatch()

  return (
    <div>
        <Modal
        open={isOpen}
        onClose={() => dispatch(closeReviewModal())}
        >

        </Modal>
    </div>
  )
}

export default ReviewInput