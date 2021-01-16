import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class CartAreaItem extends React.Component {
  onUpdateQuantity = (product, quantity,action) => {
    var token = localStorage.getItem("token");
    if (quantity > 0) {
      var { onUpdateProductInCart } = this.props;
      if (token) {
        var data = JSON.parse(token);
        var config = {
          headers: { Authorization: `Bearer ${data.token}` },
        };
        console.log(config);
      
        onUpdateProductInCart(config,product,quantity,action);
    }
     
    }
  };
  showSubTotal = (price, quantity) => {
    return price * quantity;
  };
  onDelete = (product) => {
    var token = localStorage.getItem("token");
    var { onDeleteProductInCart} = this.props;
    if (token) {
      var data = JSON.parse(token);
      var config = {
        headers: { Authorization: `Bearer ${data.token}` },
      };
      console.log(config);
    
      onDeleteProductInCart(config,product);
  }
    
}
  render() {
    var { item } = this.props;
    var { quantity } = item;
    console.log(item.product.name)
    return (
      <React.Fragment>
        <tr>
          <td>
            <div class="media">
              <div class="d-flex">
                <img
                  style={{ height: "70px", width: "70px" }}
                  // src={item.product.image}
                  // alt={item.product.name}
                />
              </div>
              <div class="media-body">
                <p>{item.product.name}</p>
              </div>
            </div>
          </td>
          <td>
            <h5>{item.product.price}$</h5>
          </td>
          <td>
            <div class="product_count">
              <input
                type="text"
                name="qty"
                id="sst"
                maxlength="12"
                value={quantity}
                title="Quantity:"
                class="input-text qty"
              />

              <button
                onClick={() =>
                  this.onUpdateQuantity(item.product, item.quantity + 1,"+")
                }
                class="increase items-count"
                type="button"
              >
                <i class="lnr lnr-chevron-up">+</i>
              </button>
              <button
                onClick={() =>
                  this.onUpdateQuantity(item.product, item.quantity - 1,"-")
                }
                class="reduced items-count"
                type="button"
              >
                <i class="lnr lnr-chevron-down">-</i>
              </button>
            </div>
          </td>
          <td>
            <h5>{this.showSubTotal(item.product.price, item.quantity)}$</h5>
          </td>
          <td>
            <button
              onClick={() => this.onDelete(item.product)}
              class="reduced items-count"
              type="button"
            >
              <i class="lnr lnr-chevron-down">x</i>
            </button>
          </td>
        </tr>
      </React.Fragment>
    );
  }
}

export default CartAreaItem;
