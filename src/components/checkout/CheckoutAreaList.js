import React, {Fragment} from "react";


class CheckoutAreaList extends React.Component {
  
  render() {
    
    return (
      <Fragment>
      <li>
      <a href="#">
        Sản phẩm <span>Đơn giá</span>
      </a>
    </li>
    <li>
      <a href="#">
        Giá đỡ điện thoại <span class="middle">x 02</span>{" "}
        <span class="last">720.00</span>
      </a>
    </li>
    <li>
      <a href="#">
        Màn hình cường lực <span class="middle">x 02</span>{" "}
        <span class="last">720.00</span>
      </a>
    </li>
  
    </Fragment>
    );
  }
}

export default CheckoutAreaList;
