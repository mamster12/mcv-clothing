import { all, call, takeLatest, put, select } from 'redux-saga/effects';
import { getUserCartRef, getCurrentUser } from '../../firebase/firebase.utils';
import UserActionTypes from '../user/user.types';
import { clearCart, setCartFromFirebase } from './cart.actions';
import { selectCartItems } from './cart.selectors';
import CartActionTypes from './cart.types';


export function* clearCartOnSignOut() {
    yield put(clearCart());
}

export function* updateCartInFirebase() {
    const currentUser = yield getCurrentUser();
    if (currentUser) {
        try {
            const cartRef = yield getUserCartRef(currentUser.uid);
            const cartItems = yield select(selectCartItems);
            yield cartRef.update({ cartItems });
        } catch (error) {
            console.log(error);
        }
    } else {
        yield put(clearCart());
        alert("Sign-in to Add Item");

    }
}

export function* checkCartFromFirebase() {
    const user = yield getCurrentUser();
    const cartRef = yield getUserCartRef(user.uid);
    const cartSnapshot = yield cartRef.get();
    yield put(setCartFromFirebase(cartSnapshot.data().cartItems));

}

export function* onSignOutSuccess() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* onUserSignIn() {

    yield takeLatest(UserActionTypes.SIGN_IN_SUCCESS, checkCartFromFirebase);

}

export function* onCartChange() {
    yield takeLatest(
        [
            CartActionTypes.ADD_ITEM,
            CartActionTypes.REMOVE_ITEM,
            CartActionTypes.CLEAR_ITEM_FROM_CART
        ],
        updateCartInFirebase
    );
}

export function* cartSagas() {
    yield all([call(onSignOutSuccess), call(onCartChange), call(onUserSignIn)]);
}

