import React, { Component } from "react";
import { Link, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import '../css-file/Sigpup.css';
import {
  GetactSignUpUsers,
  GetactProductCategory,
  GetactSaveID,
} from "../actions/index"

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      repassword:"",
      errors: {},
      success:""
    };
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps.productcategory);
  }
  componentWillReceiveProps(nextProps){
      console.log(nextProps.signup);
    // if(nextProps.signup[0]=="5"){
    //     this.setState({
    //       success:"Email đã có người sử dụng"
    //     })
    // }
    if(nextProps.signup.data)
    {
      this.setState({
        success:"Đăng kí thành công"
      })
    }
  }
  handleValidation() {
    let username = this.state.username;
    let email = this.state.email;
    let password = this.state.password;
    let repassword = this.state.repassword;
    let errors = {};
    let formIsValid = true;

    //Name
    if (!username) {
      formIsValid = false;
      errors["name"] = "Không được để trống Username";
    }

    if (typeof username !== "undefined") {
      if (!username.match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["name"] = "Không được nhập kí tự đặc biệt";
      }
    }

    //Email
    if (!email) {
      formIsValid = false;
      errors["email"] = "Không được để trống Email";
    }

    if (typeof email !== "undefined") {
      let lastAtPos = email.lastIndexOf("@");
      let lastDotPos = email.lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          email.indexOf("@@") == -1 &&
          lastDotPos > 2 &&
          email.length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors["email"] = "Email không phù hợp";
      }
    }
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
    var {username,email,password}=this.state;
    console.log(this.state.username);
    e.preventDefault();
    this.props.actSignUpUsers(username,email,password)
    // if (this.handleValidation()) {
    //   alert("Form submitted");
    //   this.props.actSignUpUsers(username,email,password)
    //   console.log(username);
    // } else {
    //   alert("Form has errors.");
    // }
  };
  render() {
    // var token=localStorage.getItem("token");
    // if(token){
    //   var {location}= this.props;
    //   return <Redirect to={{
    //     pathname:"",
    //     state:{
    //       from:location
    //     }
    //   }}
    // />}

    return (
      
      <div class="col-lg-6">
              <div class="login_form_inner">
                <h3>Log in to enter</h3>
                <form
                  onSubmit={this.onSave}
                  class="row login_form"
                  action="contact_process.php"
                  method="post"
                  id="contactForm"
                  novalidate="novalidate"
                >
                  <div class="col-md-12 form-group">
                  
                  </div>
                  <div class="col-md-12 form-group">
                    <input
                      type="text"
                      class="form-control"
                      id="username"
                      name="username"
                      placeholder="Username"
                      value={this.state.username}
                      onChange={this.onHandleChange}
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Username'"
                    />
                    <span style={{ color: "red" }}>
                      {this.state.errors["username"]}
                    </span>
                  </div>
                  <div class="col-md-12 form-group">
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      name="email"
                      placeholder="Email"
                      value={this.state.email}
                      onChange={this.onHandleChange}
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Email'"
                    />
                    <span style={{ color: "red" }}>
                      {this.state.errors["email"]}
                    </span>
                  </div>
                  <div class="col-md-12 form-group">
                    <input
                      type="password"
                      class="form-control"
                      id="password"
                      name="password"
                      placeholder="Password"
                      value={this.state.password}
                      onChange={this.onHandleChange}
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Password'"
                    />
                    <span style={{ color: "red" }}>
                      {this.state.errors["password"]}
                    </span>
                  </div>
                  <div class="col-md-12 form-group">
                    <input
                      type="password"
                      class="form-control"
                      id="repassword"
                      name="repassword"
                      placeholder="Nhập lại Password"
                      value={this.state.repassword}
                      onChange={this.onHandleChange}
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Nhập lại Password'"
                    />
                    <span style={{ color: "red" }}>
                      {this.state.errors["repassword"]}
                      {this.state.success}
                    </span>
                  </div>

                  <div class="col-md-12 form-group">
                    <button type="submit" value="submit" class="primary-btn">
                      Sign In
                    </button>
                  </div>
                </form>
                </div>
                </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    saveid: state.saveid,
    productcategory: state.productcategory,
    signup:state.signup
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    actSignUpUsers: (name,email,password) => {
      dispatch(GetactSignUpUsers(name,email,password));
    },
    // actProductCategory: (user) => {
    //   dispatch(GetactProductCategory(user));
    // },
    // actSaveID: () => {
    //   dispatch(GetactSaveID());
    // },
    // actProductCategory: (id) => {
    //   dispatch(GetactProductCategory(id));
    // },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Signup);
