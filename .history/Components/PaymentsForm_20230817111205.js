import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React, { useState } from 'react'

function PaymentsForm() {

    const [success, setSuccess] = useState(false)
    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement)
        })
    }

    if(!error) {
        try{
            const { id } = paymentMethod
            const response = 
        }
    }

  return (
    <div>
        
    </div>
  )
}

export default PaymentsForm