import React, { Component } from "react";
import { Link, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import '../css-file/Login.css';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {
        password: "",
        email: "",
      },
      error_login: ""
    };
  }

  handleValidation() {
    let email = this.state.email;
    let password = this.state.password;
    let errors = {};
    let formIsValid = true;

    //Password
    if (!password) {
      formIsValid = false;
      errors["password"] = "Không được để trống Password";
    }

    if (typeof password !== "undefined") {
      if (password.length < 5) {
        formIsValid = false;
        errors["password"] = "Vui lòng nhập password trên 10 ký tự";
      }
    }

    //Email
    if (!email) {
      formIsValid = false;
      errors["email"] = "Không được để trống email";
    }

    if (typeof email !== "undefined") {
      let lastAtPos = email.lastIndexOf('@');
      let lastDotPos = email.lastIndexOf('.');

      if (!(lastAtPos < lastDotPos && lastAtPos > 0 && email.indexOf('@@') == -1 && lastDotPos > 2 && (email.length - lastDotPos) > 2)) {
        formIsValid = false;
        errors["email"] = "Email không phù hợp";
      }
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
    e.preventDefault();
    if (this.handleValidation()) {
      alert("Form submitted");
      this.props.actLoginUsers(this.state.email, this.state.password);
      console.log(this.props.history);
    } else {
      alert("Form has errors.")
    }
  };
  componentWillReceiveProps(nextProps) {
    console.log(nextProps.login);
    if (nextProps.login[0] == "5") {
      this.setState({
        error_login: "Đăng nhập sai email hoặc password",
      })
    }
  }
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
      <div class="container">
        <div class="col-lg-6">
      <div className="Login">
        <form >
          <div class="imgcontainer">
            <img src="img/abc.jpg" alt="Avatar" class="avatar" />
          </div>

          <div class="container">
            <label for="username"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" required />

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required />

            <button type="button">Sign In</button>
            <Link to="/signup"><button type="submit">Sign Up</button></Link>
            <label>
              <input type="checkbox" checked="checked" name="remember" /> Lưu tài khoản
    </label>
    <div class="container" style={{backgroundColor:"#f1f1f1"}}>
            <span class="psw">Quên <a href="#">password?</a></span>
          </div>
          </div>
          
        </form>
        </div>
      </div>
      </div>
    );
  }
}


export default Login;
