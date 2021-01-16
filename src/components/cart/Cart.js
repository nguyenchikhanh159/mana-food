import React, { Fragment } from 'react';
import BannerCart from './BannerCart';
import CartArea from './CartArea';
import Footer from '../home/Footer';
import Header from '../home/Header';
function Cart() {
    return (
        <Fragment>
         
            <BannerCart/>
            <CartArea/>
            <Footer/>
        </Fragment>
    );
}

export default Cart;
