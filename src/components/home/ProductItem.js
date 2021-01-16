import React from "react";
import { Link } from "react-router-dom";
class ProductItem extends React.Component {
  render() {
    var { product } = this.props;
    return (
      <div class="col-lg-3 col-md-6">
		    <Link to={`/product/${product.id}`}>
        <div class="single-product">
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
		</Link>
      </div>
    );
  }
}
export default ProductItem;
