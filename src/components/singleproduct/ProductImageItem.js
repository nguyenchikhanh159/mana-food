import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class ProductImageItem extends Component {
  render() {
    var { product } = this.props;
    var token=localStorage.getItem("token");
    var data= token ? "/cart" : "/login";
    return (
      <div className="container">
        <div className="row s_product_inner">
          <div className="col-lg-6">
            <div className="s_Product_carousel">
              <div className="single-prd-item">
                <img
                  className="img-fluid"
                  src="img/De_moc_dt/De_moc_dt/3.1.jpg"
                  alt=""
                />
              </div>
              <div className="single-prd-item">
                <img
                  className="img-fluid"
                  src="img/De_moc_dt/De_moc_dt/3.2.jpg"
                  alt=""
                />
              </div>
              <div className="single-prd-item">
                <img
                  className="img-fluid"
                  src="img/De_moc_dt/De_moc_dt/3.3.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div className="s_product_text">
              <h3>{product.name}</h3>
              <h2>{product.price}</h2>
              <ul className="list">
                <li>
                  <a className="active" href="#">
                    <span>Category</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Có sẵn</span>
                  </a>
                </li>
              </ul>
              <p>Giá đỡ điện thọai nhỏ gọn thích hợp.</p>
              <div className="product_count">
                <label for="qty">Quantity:</label>
                <input
                  type="text"
                  name="qty"
                  id="sst"
                  maxlength="12"
                  value="1"
                  title="Quantity:"
                  className="input-text qty"
                />
                <button className="increase items-count" type="button">
                  <i className="lnr lnr-chevron-up">+</i>
                </button>
                <button className="reduced items-count" type="button">
                  <i className="lnr lnr-chevron-down">-</i>
                </button>
              </div>
              <div className="card_area d-flex align-items-center">
                <Link to={data} className="primary-btn">
                  Thêm vào giỏ hàng
                </Link>
                <Link className="icon_btn">
                  <i className="lnr lnr lnr-diamond"></i>
                </Link>
                <Link className="icon_btn">
                  <i className="lnr lnr lnr-heart"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(ProductImageItem);
