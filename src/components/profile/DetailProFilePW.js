import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import {GetactChangePasswordUsers} from '../../actions/index';

class DetailProFilePW extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      oldpassword: "",
      password: "",
      repassword: "",
      errors: {},
    };
  }
  handleValidation() {
    let oldpassword = this.state.oldpassword;
    let password = this.state.password;
    let repassword = this.state.repassword;
    let errors = {};
    let formIsValid = true;

    
    if (!password) {
      formIsValid = false;
      errors["password"] = "Không được để trống Password";
    }

    if (typeof password !== "undefined") {
      if (password.length < 10) {
        formIsValid = false;
        errors["password"] = "Vui lòng nhập password trên 10 ký tự";
      }
    }
    if(repassword!=password){
      formIsValid = false;
      errors["repassword"] = "Password không khớp";
    }

    this.setState({ errors: errors });
    return formIsValid;
  }
  onHandleChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value,
    });
  };
  onSave = (e) => {
    var { oldpassword,password,repassword } = this.state;
    var token=localStorage.getItem('token');
		if(token)
		{var data=JSON.parse(token);
		var config = {
			headers: { Authorization: `Bearer ${data.token}` }
		};
		}
    e.preventDefault();
    if (this.handleValidation()) {
      alert("Form submitted");
      this.props.actChangePasswordUsers(config,oldpassword,password,repassword);
    } else {
      alert("Form has errors.");
    }
  };
  render() {
    return (
      <section class="lattest-product-area pb-40 category-list">
        <div class="row">
          <form
            onSubmit={this.onSave}
            class="row login_form"
            action="contact_process.php"
            method="post"
            id="contactForm"
            novalidate="novalidate"
          >
            <div class="col-md-12 form-group">
              <input
                type="password"
                class="form-control"
                id="oldpassword"
                name="oldpassword"
                placeholder="Nhập lại mật khẩu"
                value={this.state.oldpassword}
                onChange={this.onHandleChange}
                onfocus="this.placeholder = ''"
                onblur="this.placeholder = 'Nhập lại mật khẩu'"
              />
            </div>
            <div class="col-md-12 form-group">
              <input
                type="password"
                class="form-control"
                id="password"
                name="password"
                placeholder="Nhập Password"
                value={this.state.password}
                onChange={this.onHandleChange}
                onfocus="this.placeholder = ''"
                onblur="this.placeholder = 'Nhập Password'"
              />
            </div>
            <div class="col-md-12 form-group">
              <input
                type="password"
                class="form-control"
                id="repassword"
                name="repassword"
                placeholder="Nhập Lại Password"
                value={this.state.repassword}
                onChange={this.onHandleChange}
                onfocus="this.placeholder = ''"
                onblur="this.placeholder = 'Nhập Lại Password'"
              />
            </div>

            <div class="col-md-12 form-group">
              <button type="submit" value="submit" class="primary-btn">
                Xác nhận
              </button>
            </div>
          </form>
          <div />
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    actChangePasswordUsers:(config,old_password,new_password,c_new_password)=>{
      dispatch(GetactChangePasswordUsers(config,old_password,new_password,c_new_password));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailProFilePW);
