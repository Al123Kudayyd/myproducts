import { Card } from '@mui/material'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

function PaymentsForm() {

    const user = useSelector(state => state.user) 

    const [success, setSuccess] = useState(false)
    const stripe = useStripe()
    const elements = useElements()

    const CARD_OPTIONS = {
        iconStyle: "solid",
        style: {
            base: {
                iconColor: "#c4f0ff",
                color: "#fff",
                fontWeight: 500,
                fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
                fontSize: "16px",
                fontSmoothing: "antialiased",
                ":-webkit-autofill": { color: "#fce883" },
                "::placeholder": { color: "#87bbfd" }
            },
            invalid: {
                iconColor: "#ffc7ee",
                color: "#ffc7ee"
            }
        }
    }
    



  return (
    <>
        {!success ? 
        <form >
            <fieldset className='FormGroup'>
                <div className='FormRow'>
                    <CardElement options={CARD_OPTIONS} />
                </div>
            </fieldset>
        </form> : 
        <div>
            <h2>Thanks for shopping wih us {user.username} </h2>
        </div>}
    </>
  )
}

export default PaymentsForm