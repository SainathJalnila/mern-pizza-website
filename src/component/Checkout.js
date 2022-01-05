import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import {useDispatch} from 'react-redux';
import {placeOrder } from '../actions/payment'

export default function Checkout({subTotal}) {
    const dispatch = useDispatch(); 
    function tokenhandler(token){
      console.log(token)
      dispatch(placeOrder(token , subTotal))
    }
    
       return (
        <div>
            <StripeCheckout
            amount={subTotal*100} // cents
            currency="INR" 
           shippingAddress           
           token={tokenhandler}
           
           stripeKey='pk_test_51KDQqESBjdsKjQ8MOl9t4uyYlIeHtELKjGsX8HgTHWngRYGxaAUu2rG9UjoCVcI3jfkdy9Kf9ShzCokoLOrMwta6003ty9Ba15'
            >
                  <button type="button" class="btn btn-primary">Pay Now</button>
            </StripeCheckout>
        </div>
    )
}