import React, { Fragment } from 'react';
import BannerCK from './BannerCK';
import CheckoutArea from './CheckoutArea';
import Footer from '../home/Footer';

function Checkout() {
  return (
     <Fragment>
      
         <BannerCK/>
         <CheckoutArea/>
         <Footer/>
     </Fragment>
  );
}

export default Checkout;
