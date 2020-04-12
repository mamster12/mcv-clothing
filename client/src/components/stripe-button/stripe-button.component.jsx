import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import Logo from '../../assets/mcv.svg';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_T5kA0z75ZxYgye5LQT9u8d9d00LzqObs4w';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        })
            .then(respoonse => {
                alert('payment successful');
            })
            .catch(error => {
                console.log('Payment error: ', JSON.parse(error));
                alert('There was an issue with your payment. Please make sure you use the provided credit card');
            })
    };


    return (
        <StripeCheckout
            label='Pay Now'
            name='MCV Clothing Ltd.'
            billingAddress
            shippingAddress
            image={Logo}
            description={`Your total is P${price}`}
            amout={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;
