import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import CartAreaItem from "./CartAreaItem";
import CartResult from "./CartResult";
import {
  GetactDeleteProductInCart,
  GetactUpdateProductInCart,
  GetactCheckout
} from "./../../actions/index";
class CartArea extends React.Component {
  showCartItem = (cart) => {
    var {
      onDeleteProductInCart,
      onChangeMessage,
      onUpdateProductInCart,
    } = this.props;
    var result = "";
    if (cart.length > 0) {
      result = cart.map((item, index) => {
        return (
          <CartAreaItem
            key={index}
            item={item}
            index={index}
            onDeleteProductInCart={onDeleteProductInCart}
            onChangeMessage={onChangeMessage}
            onUpdateProductInCart={onUpdateProductInCart}
          />
        );
      });
    }
    return result;
  };
  showTotalAmount = (cart) => {
    var result = null;
    if (cart.length > 0) {
      result = <CartResult  cart={cart} />;
    }
    return result;
  };
  render() {
    var { cart } = this.props;

    return (
      <section class="cart_area">
        <div class="container">
          <div class="cart_inner">
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Sản phẩm</th>
                    <th scope="col">Giá</th>
                    <th scope="col">Số lượng</th>
                    <th scope="col">Tổng</th>
                  </tr>
                </thead>
                <tbody>
                  {this.showCartItem(cart)}
                  {this.showTotalAmount(cart)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onDeleteProductInCart: (config,product) => {
      dispatch(GetactDeleteProductInCart(config,product));
    },
    onUpdateProductInCart: (config,product,quantity,action) => {
      dispatch(GetactUpdateProductInCart(config,product,quantity,action));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartArea);
