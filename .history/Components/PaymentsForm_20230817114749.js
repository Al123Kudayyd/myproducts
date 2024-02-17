import { Card } from '@mui/material'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React, { useState } from 'react'

function PaymentsForm() {

    const username = useSee 

    const [success, setSuccess] = useState(false)
    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement)
        })
   

    if(!error) {
        try{
            const { id } = paymentMethod
            const response = await axios.post("http://localhost:3000/payment", {
                amount: 1000,
                id
            })

            if(response.data.success) {
                console.log('successful payment')
                setSuccess(true)
            }
        } catch(error) {
            console.log('error', error)
        } 
    } else {
        console.log(error.message)
    }
}

  return (
    <>
        {!success ? 
        <form onSubmit={handleSubmit}>
            <fieldset>
                <div>
                    <CardElement options={CARD_OPTIONS} />
                </div>
            </fieldset>
        </form> : 
        <div>
            <h2>Thanks for shopping wih us </h2>
        </div>}
    </>
  )
}

export default PaymentsForm