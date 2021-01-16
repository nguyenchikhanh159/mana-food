import React from "react";
import { Link } from "react-router-dom";
import RealatedItem from "./RealatedItem";
import { connect } from "react-redux";
class Realated extends React.Component {
  showData = (productcaterogy) => {
    var result = null;
    var result2 = null;
    if (Object.keys(productcaterogy).length > 0) {
      result = Object.keys(productcaterogy)
        .slice(0.4)
        .map((product, index) => {
          if (index == 2) {
            result2 = productcaterogy[product].map((product, index) => {
              // console.log(product.name);
              return <RealatedItem product={product} key={index} />;
            });
          }
        });
    }
    return result2;
  };
  render() {
    var { productcategory } = this.props;
    return (
      <section class="related-product-area section_gap_bottom">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6 text-center">
              <div class="section-title">
                <h1>Ưu đãi trong tuần</h1>
                <p>Black Friday </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-9">
              <div class="row">{this.showData(productcategory)}</div>
            </div>
            <div class="col-lg-3">
              <div class="ctg-right">
                <Link target="_blank">
                  {/* <img class="img-fluid d-block mx-auto" src="img/category/c5.jpg" alt="" /> */}
                </Link>
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
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Realated);
