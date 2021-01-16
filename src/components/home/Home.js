import React, { Fragment } from 'react';
import Banner from './BannerHome';
import Feature from './Feature';
import CategoryHome from './CategoryHome';
import Product from './Product';
import Realated from './Realated';
import Footer from './Footer';


function Home() {
    return (
        <Fragment> 
            <Banner />
            <Feature />
            <CategoryHome/>
            <Product/>
            <Realated/>
            <Footer/>
        </Fragment>
    );
}

export default Home;
