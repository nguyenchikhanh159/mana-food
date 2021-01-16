import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

function Category() {
  return (
    <section class="category-area">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-8 col-md-12">
                <div class="row">
                    <div class="col-lg-8 col-md-8">
                        <div class="single-deal">
                            <div class="overlay"></div>
                            {/* <img style={{height:"200px",width:"345px"}}  class="img-fluid w-100" src="img/De_moc_dt/De_moc_dt/1.1.jpg" alt=""/> */}
                            <Link class="img-pop-up" target="_blank">
                                <div class="deal-details">
                                    <h6 class="deal-title">Sneaker for Sports</h6>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4">
                        <div class="single-deal">
                            <div class="overlay"></div>
                            {/* <img class="img-fluid w-100" src="img/De_moc_dt/De_moc_dt/2.1.jpg" alt=""/> */}
                            <Link href="img/category/c2.jpg" class="img-pop-up" target="_blank">
                                <div class="deal-details">
                                    <h6 class="deal-title">Sneaker for Sports</h6>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4">
                        <div class="single-deal">
                            <div class="overlay"></div>
                            {/* <img class="img-fluid w-100" src="img/De_moc_dt/De_moc_dt/2.3.jpg" alt=""/> */}
                            <Link href="img/category/c3.jpg" class="img-pop-up" target="_blank">
                                <div class="deal-details">
                                    <h6 class="deal-title">Product for Couple</h6>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div class="col-lg-8 col-md-8">
                        <div class="single-deal">
                            <div class="overlay"></div>
                            {/* <img style={{height:"200px",width:"345px"}} class="img-fluid w-100" src="img/De_moc_dt/De_moc_dt/5.jpg" alt=""/> */}
                            <Link href="img/category/c4.jpg" class="img-pop-up" target="_blank">
                                <div class="deal-details">
                                    <h6 class="deal-title">Sneaker for Sports</h6>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="single-deal">
                    <div class="overlay"></div>
                    {/* <img class="img-fluid w-100" src="img/category/c5.jpg" alt=""/> */}
                    {/* <Link href="img/category/c5.jpg" class="img-pop-up" target="_blank">
                        <div class="deal-details">
                            <h6 class="deal-title">Sneaker for Sports</h6>
                        </div>
                    </Link> */}
                </div>
            </div>
        </div>
    </div>
</section>
  );
}

export default Category;
