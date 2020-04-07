import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import Logo from '../../assets/mcv.svg';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_T5kA0z75ZxYgye5LQT9u8d9d00LzqObs4w';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }


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
