import React from "react";
import { Link } from "react-router-dom";
import ProductItem from "./ProductItem";
import { connect } from "react-redux";
import {GetactProductCategory} from '../../actions/index';
class Product extends React.Component {

	// componentDidMount() {
	// 	window.addEventListener('load', this.handleLoad);
	// }
	showData = (productcaterogy) => {
		var result = null;
		var result2 = null;
		if (Object.keys(productcaterogy).length > 0) {
		  result = Object.keys(productcaterogy).slice(0.4).map((product, index) => {
			  if (index == 2) {
				result2 = productcaterogy[product].map((product, index) => {
				  // console.log(product.name);
				  return <ProductItem product={product} key={index} />;
				});
			  }
			});
		}
		return result2;
	  };
  render() {
	  var {productcategory}=this.props;
	  // console.log(productcategory);
    return (
      <section class="owl-carousel active-product-area section_gap">
        <div class="single-product-slider">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-6 text-center">
                <div class="section-title">
                  <h1>Sản phẩm mới nhất</h1>
                  <p></p>
                </div>
              </div>
            </div>
            <div class="row">
				{this.showData(productcategory)}
			</div>
          </div>
        </div>

        <div class="single-product-slider">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-6 text-center">
                <div class="section-title">
                  <h1>Sản Phẩm sắp tới</h1>
                  <p></p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-3 col-md-6">
                <div class="single-product">
                  {/* <img class="img-fluid" style={{height:"275px"}} src="img/De_moc_dt/De_moc_dt/6.3.jpg" alt=""/> */}
                  <div class="product-details">
                    <h6>Giá kê điện thoại</h6>
                    <div class="price">
                      <h6>100.000</h6>
                      <h6 class="l-through">125.000</h6>
                    </div>
                    <div class="prd-bottom">
                      <Link class="social-info">
                        <span class="ti-bag"></span>
                        <p class="hover-text">add to bag</p>
                      </Link>

                      <Link class="social-info">
                        <span class="lnr lnr-heart"></span>
                        <p class="hover-text">Wishlist</p>
                      </Link>

                      <Link class="social-info">
                        <span class="lnr lnr-sync"></span>
                        <p class="hover-text">compare</p>
                      </Link>

                      <Link class="social-info">
                        <span class="lnr lnr-move"></span>
                        <p class="hover-text">view more</p>
                      </Link>
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
}
const mapStateToProps = (state) => {
	return {
		productcategory: state.productcategory,
	};
  };
  const mapDispatchToProps = (dispatch, props) => {
	return {
		actProductCategory:(id)=>{
			dispatch(GetactProductCategory(id));
		}
	};
  };
  export default connect(mapStateToProps, mapDispatchToProps)(Product);
