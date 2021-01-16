import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { connect } from "react-redux";
import {GetactCheckout} from './../../actions/index'
  class CartResult extends React.Component{

    showTotalAmount = (cart) => {
        var total = 0;
        if (cart.length > 0) {
            for (var i = 0; i < cart.length; i++) {
                total += cart[i].product.price * cart[i].quantity;
            }
        }
        return total;
    }
    Checkout=()=>{
        var token = localStorage.getItem("token");
        if (token) {
            var data = JSON.parse(token);
            var config = {
              headers: { Authorization: `Bearer ${data.token}` },
            };
          
        this.props.onGetactCheckout(config);
        }
    }
      render(){
        var { cart } = this.props;
	return (
        <React.Fragment>
         <tr class="bottom_button">
        <td>
            {/* <a class="gray_btn" href="#"></a> */}
        </td>
        <td>

        </td>
        <td>

        </td>
        <td>
            <div class="cupon_text d-flex align-items-center">
                <input type="text" placeholder="Nhập coupon ở đây"/>
                <Link class="primary-btn" >Đồng ý</Link>
                <Link class="gray_btn">Đóng coupon</Link>
            </div>
        </td>
    </tr>
    <tr>
        <td>

        </td>
        <td>

        </td>
        <td>
            <h5>Tạm tính</h5>
        </td>
        <td>
            <h5>{this.showTotalAmount(cart)}$</h5>
        </td>
    </tr>
    <tr class="shipping_area">
        <td>

        </td>
        <td>

        </td>
        <td>
            <h5>Thành tiền</h5>
        </td>
        <td>
            <h5>{this.showTotalAmount(cart)}$</h5>
        </td>
    </tr>
    <tr class="out_button_area">
        <td>

        </td>
        <td>

        </td>
        <td>

        </td>
        <td>
            <div class="checkout_btn_inner d-flex align-items-center">
                <Link to="/category" class="gray_btn" >Tiếp tục mua sắm</Link>
                <Link to="/checkout" onClick={() => this.Checkout() } class="primary-btn" >Tiến hành đặt hàng</Link>
            </div>
        </td>
    </tr>
    </React.Fragment>
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
        onGetactCheckout: (config) => {
        dispatch(GetactCheckout(config));
      },
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(CartResult);
