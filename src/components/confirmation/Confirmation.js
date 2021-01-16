import React, { Fragment } from 'react';
import BannerCF from './BannerCF';
import OrderDetails from './OrderDetails';
import Footer from '../home/Footer';

function Confirmation() {
    return (
        <Fragment>
            <BannerCF />
            <OrderDetails />
            <Footer/>
        </Fragment>
    );
}

export default Confirmation;
