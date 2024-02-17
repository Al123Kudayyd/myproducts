import Modal from '@mui/material/Modal'
import React from 'react'
import { useSelector } from 'react-redux'

function Reviewers() {
    
    const open = useSelector(state => state.modals.openreviewModal)
    const dispatch = useDispatch()

  return (
    <div>
        <Modal
        open={open}
        onClose={() => }>

        </Modal>
    </div>
  )
}

export default Reviewers