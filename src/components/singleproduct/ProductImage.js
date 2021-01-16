import React, { Component } from "react";
import { connect } from "react-redux";
import ProductImageItem from "./ProductImageItem";
class ProductImage extends Component {
  showData = (productdetail) => {
    var result = null;
    var result2 = null;
    if (Object.keys(productdetail).length > 0) {
      result = Object.keys(productdetail)
        .slice(0.7)
        .map((product, index) => {
          if (index == 2) {
            result2 = productdetail[product].map((product, index) => {
              console.log(product.name);
              return <ProductImageItem product={product} key={index} />;
            });
          }
        });
    }
    return result2;
  };
  render() {
    var { productdetail } = this.props;
    return (
      <div className="product_image_area">{this.showData(productdetail)}</div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    productdetail: state.productdetail,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductImage);
