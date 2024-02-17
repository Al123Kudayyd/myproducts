import { closeReviewModal } from '@/redux/modalSlice'
import { Modal } from '@mui/material/Modal'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function ReviewInput() {
    
    const Open = useSelector(state => state.modals.openreviewModal)
    const dispatch = useDispatch()

  return (
    <div>
        <Modal
        open={Open}
        onClose={() => dispatch(closeReviewModal())}
        
        >
        
        </Modal>
    </div>
  )
}

export default ReviewInput