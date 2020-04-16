import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';


import './checkout.styles.scss';
// import CartItem from '../../components/cart-item/cart-item.component';

const CheckOutPage = ({ cartItems, total, currentUser }) => {
    return (
        <div className='checkout-page'>
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(cartItem =>
                    (<CheckoutItem key={cartItem.id} cartItem={cartItem} />)
                )
            }

            <div className='total'>
                TOTAL: &#8369;{total}
            </div>
            <div className='test-warning'>
                *Please use the following test credit ccard for payments*
            <br />
            4242 4242 4242 4242 = Exp: 05/20 - CVV: 123
            </div>
            {
                currentUser ? <StripeCheckoutButton price={total} /> : <div><em>Please sign-in to make a purchase</em></div>
            }
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal,
    currentUser: selectCurrentUser
})

export default connect(mapStateToProps)(CheckOutPage);
