import { useElements, useStripe } from '@stripe/react-stripe-js'
import React, { useState } from 'react'

function PaymentsForm() {

    const [success, setSuccess] = useState(false)
    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = async () => {
        
    }

  return (
    <div>
        
    </div>
  )
}

export default PaymentsForm