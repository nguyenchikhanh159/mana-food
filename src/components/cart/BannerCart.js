import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
function BannerCart() {
    return (
        <section class="banner-area organic-breadcrumb">
            <div class="container">
                <div class="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
                    <div class="col-first">
                        <h1>Shopping Cart</h1>
                        <nav class="d-flex align-items-center">
                            <Link>Home<span class="lnr lnr-arrow-right"></span></Link>
                            <Link >Cart</Link>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BannerCart;
