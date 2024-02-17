import { Modal } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function ReviewInput() {
    const isOpen = useSelector(state => state.modals.openreviewModal)
    const dispatch = useDispatch()

  return (
    <div>
        <Modal
        open={isOpen}
        onClose={() => }
        >

        </Modal>
    </div>
  )
}

export default ReviewInput