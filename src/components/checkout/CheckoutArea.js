import React from "react";
import CheckoutAreaList from "./CheckoutAreaList";
import { connect } from "react-redux";
import {
  GetactOrderDetails
} from "../../actions/index";
import { Link, Route } from "react-router-dom";
class CheckoutArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      provice_id: "",
      district_id: "",
      ward_id: "",
      address: "",
      phone: "",
      value: "",
      errors: {},
    };
  }

  onHandleChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value,
    });
    console.log(value);
  };
  handleValidation() {
    let provice_id = this.state.provice_id;
    let district_id = this.state.district_id;
    let ward_id = this.state.ward_id;
    let address = this.state.address;
    let phone = this.state.phone;

    let errors = {};
    let formIsValid = true;

    //Name
    if (!provice_id) {
      formIsValid = false;
      errors["provice_id"] = "Vui lòng chọn Tỉnh/Thành Phố";
    }
    if (!district_id) {
      formIsValid = false;
      errors["district_id"] = "Vui lòng chọn Quận/Huyện";
    }
    if (!ward_id) {
      formIsValid = false;
      errors["ward_id"] = "Vui lòng chọn Thôn/Xã";
    }
    if (!address) {
      formIsValid = false;
      errors["address"] = "Vui lòng nhập địa chỉ";
    }
    if (!phone) {
      formIsValid = false;
      errors["phone"] = "Vui lòng nhập số điện thoại";
    }
    this.setState({ errors: errors });
    return formIsValid;
  }
  onSave = (e) => {
    e.preventDefault();
    var token = localStorage.getItem("token");
    if (token) {
      var data = JSON.parse(token);
      var config = {
        headers: { Authorization: `Bearer ${data.token}` },
      };
    }
    var {
      information_id,
      provice_id,
      district_id,
      ward_id,
      address,
      phone,
    } = this.state;
    this.props.onGetactOrderDetails(
      config,
      information_id,
      provice_id,
      district_id,
      ward_id,
      address,
      phone
    );
    if (this.handleValidation()) {
      alert("Form submitted");
      this.props.onGetactOrderDetails(
        config,
        information_id,
        provice_id,
        district_id,
        ward_id,
        address,
        phone
      );
    } else {
      alert("Form has errors.");
    }
  };
  render() {
    return (
      <section class="checkout_area section_gap">
        <div class="container">
          <div class="billing_details">
            <div class="row">
              <div class="col-lg-8">
                <h3>Thông tin đặt hàng</h3>
                <form
                    onSubmit={this.onSave}
                  class="row contact_form"
                  action="#"
                  method="post"
                  novalidate="novalidate"
                >
                  <div class="col-md-6 form-group p_star">
                    <input
                      type="text"
                      class="form-control"
                      id="first"
                      name="first_name"
                      placeholder="Họ *"
                    />

                  </div>
                  <div class="col-md-6 form-group p_star">
                    <input
                      type="text"
                      class="form-control"
                      id="last"
                      name="last_name"
                      placeholder="Tên *"
                    />
                
                  </div>
                  <div class="col-md-6 form-group p_star">
                    <input
                      type="text"
                      class="form-control"
                      id="phone"
                      name="phone"
                      value={this.state.phone}
                      onChange={this.onHandleChange}
                      placeholder="Số điện thoại *"
                    />
                    <span style={{ color: "red" }}>
                      {this.state.errors["phone"]}
                    </span>
                  </div>
                  <div class="col-md-6 form-group p_star">
                    <input
                      type="text"
                      class="form-control"
                      id="email"
                      name="email"
                      placeholder="Email *"
                    />
                   
                  </div>
                  <div class="col-md-4 form-group p_star">
                    <select
                      onChange={this.onHandleChange}
                      value={this.state.provice_id}
                      class="country_select"
                      id="email"
                      name="email"
                    >
                      <option>Tỉnh/Thành Phố</option>
                      <option value="Thành Phố Hồ Chí Minh">
                        Thành Phố Hồ Chí Minh
                      </option>
                      <option value="Thành Phố Vũng Tàu">
                        Thành Phố Vũng Tàu
                      </option>
                      <option value="Thành Phố Đà Nẵng">
                        Thành Phố Đà Nẵng
                      </option>
                    </select>
                    <span style={{ color: "red" }}>
                      {this.state.errors["provice_id"]}
                    </span>
                  </div>
                  <div class="col-md-4 form-group p_star">
                    <select
                      onChange={this.onHandleChange}
                      value={this.state.district_id}
                      class="country_select"
                    >
                      <option>Quận/Huyện</option>
                      <option value="Đất Đỏ">Đất Đỏ</option>
                      <option value="Quận 10">Quận 10</option>
                      <option value="Quận 11">Quận 11</option>
                      <option value="Quận Thủ Đức">Quận Thủ Đức</option>
                    </select>
                    <span style={{ color: "red" }}>
                      {this.state.errors["district_id"]}
                    </span>
                  </div>
                  <div class="col-md-4 form-group p_star">
                    <select
                      onChange={this.onHandleChange}
                      value={this.state.ward_id}
                      class="country_select"
                    >
                      <option>Phường/Xã</option>
                      <option value="Thị Trấn Phước Hải">
                        Thị Trấn Phước Hải
                      </option>
                      <option value="Đường số 10">Đường số 10</option>
                    </select>
                    <span style={{ color: "red" }}>
                      {this.state.errors["ward_id"]}
                    </span>
                  </div>
                  <div class="col-md-12 form-group">
                    <input
                      type="text"
                      class="form-control"
                      id="address"
                      name="address"
                      value={this.state.address}
                      onChange={this.onHandleChange}
                      placeholder="Địa chỉ"
                    />
                      <span style={{ color: "red" }}>
                      {this.state.errors["address"]}
                    </span>
                  </div>
                  <div class="col-md-12 form-group">
                    <div class="creat_account">
                      <input type="checkbox" id="f-option2" name="selector" />
                      <label for="f-option2">Sử dụng địa chỉ mặt định</label>
                    </div>
                  </div>
                  <div class="col-md-12 form-group p_star">
                    <select class="country_select">
                      <option>Địa chỉ</option>
                      <option value="2">District</option>
                      <option value="4">District</option>
                    </select>
                  </div>
                  <div class="col-md-12 form-group">
                    <textarea
                      class="form-control"
                      name="message"
                      id="message"
                      rows="1"
                      placeholder="Order Notes"
                    ></textarea>
                  </div>
                  <button type="submit" value="submit" class="primary-btn">
                      Log In
                    </button>
                </form>
              </div>
              <div class="col-lg-4">
                <div class="order_box">
                  <h2>Đơn hàng</h2>
                  <ul class="list">
                    <CheckoutAreaList />
                  </ul>
                  <ul class="list list_2">
                    <li>
                      <a href="#">
                        Tạm tính <span>2160.00</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Phí giao hàng <span>GHN: 50.00</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Tổng cộng <span>2210.00</span>
                      </a>
                    </li>
                  </ul>
                  <Link className="primary-btn" type="submit" value="submit">
                    Thanh toán
                  </Link>
                </div>
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
    saveid: state.saveid,
    productcategory: state.productcategory,
    signup: state.signup,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onGetactOrderDetails: (
      config,
      information_id,
      provice_id,
      district_id,
      ward_id,
      address,
      phone
    ) => {
      dispatch(
        GetactOrderDetails(
          config,
          information_id,
          provice_id,
          district_id,
          ward_id,
          address,
          phone
        )
      );
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutArea);
