import React, { Component } from "react";
import { Link, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { GetactProductDetail } from "../../actions/index";
import { GetactAddToCart } from "./../../actions/index";
class DetailProductItem extends Component {
 
  onHandle = (product) => {
    console.log(product);
  };

  onAddToCart = (product) => {
    var token=localStorage.getItem("token");
    let quantity=1;
    if(token){
      var data = JSON.parse(token);
      var config = {
        headers: { Authorization: `Bearer ${data.token}` },
      };
        this.props.onAddToCart(config, product, quantity)
    }
  };
  render() {
    var { product } = this.props;
    var token=localStorage.getItem("token");
    var data= token ? "/cart" : "/login";
  
    return (
      <div class="col-lg-4 col-md-6">
        <Link to={`/product/${product.id}`}>
          <div onClick={() => this.onHandle(product)} class="single-product">
            <img
              class="img-fluid"
              style={{ height: "275px" }}
              src="img/De_moc_dt/De_moc_dt/6.3.jpg"
              alt=""
            />
            <div class="product-details">
              <h6>{product.name}</h6>
              <div class="price">
                <h6>{product.price}</h6>
                <h6 class="l-through">125.000</h6>
              </div>
              <div class="prd-bottom">
                <Link
                  to={data}
                  onClick={() => this.onAddToCart(product)}
                  class="social-info"
                >
                  <span class="ti-bag"></span>
                  <p class="hover-text">add to bag</p>
                </Link>
                <Link class="social-info">
                  <span class="lnr lnr-heart"></span>
                  <p class="hover-text">Wishlist</p>
                </Link>
                <Link to={`/product/${product.id}`} class="social-info">
                  <span class="lnr lnr-move"></span>
                  <p class="hover-text">view more</p>
                </Link>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddToCart: (config, product, quantity) => {
      dispatch(GetactAddToCart(config, product, quantity));
    },
    actProductDetail: (id) => {
      dispatch(GetactProductDetail(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DetailProductItem);
