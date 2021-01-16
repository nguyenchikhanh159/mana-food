import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function BannerHome() {
    return (
        <section class="banner-area">
            <div class="container">
                <div class="row fullscreen align-items-center justify-content-start">
                    <div class="col-lg-12">
                        <div class="active-banner-slider owl-carousel">

                            <div class="row single-slide align-items-center d-flex">
                                <div class="col-lg-5 col-md-6">
                                    <div class="banner-content">
                                       
                                        {/* <div class="add-bag d-flex align-items-center">
                                            <Link class="add-btn" ><span class="lnr lnr-cross"></span></Link>
                                            <span class="add-text text-uppercase">Add to Bag</span>
                                        </div> */}
                                    </div>
                                </div>
                                    <div class="col-lg-7">
                                        <div class="banner-img">
                                            {/* <img class="img-fluid" src="img/banner/banner-img.png" alt="" /> */}
                                        </div>
                                    </div> 
                            </div>  

                            <div class="row single-slide">
                                <div class="col-lg-5">
                                    <div class="banner-content">
                                        
                                        {/* <div class="add-bag d-flex align-items-center">
                                            <Link ><span class="lnr lnr-cross"></span></Link>
                                            <span class="add-text text-uppercase">Add to Bag</span>
                                        </div> */}
                                    </div>
                                </div>
                                <div class="col-lg-7">
                                    <div class="banner-img">
                                        {/* <img class="img-fluid" src="img/banner/banner-img.png" alt="" /> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BannerHome;
