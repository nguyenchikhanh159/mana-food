import React from "react";
import { Link } from "react-router-dom";
class RealatedItem extends React.Component {
  render() {
    var { product } = this.props;
    return (
      <div class="col-lg-4 col-md-4 col-sm-6">
           <Link to={`/product/${product.id}`}>
        <div class="single-related-product d-flex">
          {/* <Link><img style={{ height: "70px", width: "70px" }} src="img/De_moc_dt/De_moc_dt/2.3.jpg" alt="" /></Link> */}
          <div class="desc">
            <Link class="title">{product.name}</Link>
            <div class="price">
              <h6>{product.price}</h6>
              <h6 class="l-through">75.000</h6>
            </div>
          </div>
        </div>
        </Link>
      </div>
    );
  }
}

export default RealatedItem;
