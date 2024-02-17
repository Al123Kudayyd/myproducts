import { Modal } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

function ReviewInput() {
    const isOpen = useSelector(state => state.modals.openreviewModal)

  return (
    <div>
        <Modal>

        </Modal>
    </div>
  )
}

export default ReviewInput