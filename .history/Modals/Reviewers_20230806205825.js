import Modal from '@mui/material/Modal'
import React from 'react'
import { useSelector } from 'react-redux'

function Reviewers() {
    
    const open = useSelector(state => state.modals)

  return (
    <div>
        <Modal>

        </Modal>
    </div>
  )
}

export default Reviewers