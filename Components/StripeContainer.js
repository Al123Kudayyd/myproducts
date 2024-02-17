import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import React from 'react'
import PaymentsForm from './PaymentsForm'

function StripeContainer() {

    const PUBLIC_KEY = 'pk_test_51NbMNzAskMAsPoySw8tmU3T5Huqg2st0daU2z3lv0T5w1IBIZ51C5C5coX0iN9MVpLnu11OdhaZJpJp1fZ1vgUK800OW0jL6oa'

    const stripeTestPromise = loadStripe(PUBLIC_KEY)



  return (
    <Elements stripe={stripeTestPromise}>
        <PaymentsForm />
    </Elements>
  )
}

export default StripeContainer