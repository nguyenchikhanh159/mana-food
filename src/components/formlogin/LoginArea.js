import React, { Component } from "react";
import { Link, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { GetactLoginUsers } from "../../actions";

class LoginArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors:{
        password:"",
        email:"",
      },
      error_login:""
    };
  }
  
  handleValidation(){
    let email = this.state.email;
    let password = this.state.password;
    let errors = {};
    let formIsValid = true;

    //Password
    if(!password){
       formIsValid = false;
       errors["password"] = "Không được để trống Password";
    }

    if(typeof password !== "undefined"){
       if(password.length<5){
          formIsValid = false;
          errors["password"] = "Vui lòng nhập password trên 10 ký tự";
       }        
    }

    //Email
    if(!email){
       formIsValid = false;
       errors["email"] = "Không được để trống email";
    }

    if(typeof email !== "undefined"){
       let lastAtPos = email.lastIndexOf('@');
       let lastDotPos = email.lastIndexOf('.');

       if (!(lastAtPos < lastDotPos && lastAtPos > 0 && email.indexOf('@@') == -1 && lastDotPos > 2 && (email.length - lastDotPos) > 2)) {
          formIsValid = false;
          errors["email"] = "Email không phù hợp";
        }
   }  

   this.setState({errors: errors});
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
        if(this.handleValidation()){
           alert("Form submitted");
           this.props.actLoginUsers(this.state.email,this.state.password);
           console.log(this.props.history);
        }else{
           alert("Form has errors.")
        }
  };
  componentWillReceiveProps(nextProps){
    console.log(nextProps.login);
  if(nextProps.login[0]=="5"){
      this.setState({
        error_login:"Đăng nhập sai email hoặc password",
      })
  }
}
  render() {
    var token=localStorage.getItem("token");
    if(token){
      var {location}= this.props;
      return <Redirect to={{
        pathname:"",
        state:{
          from:location
        }
      }}
    />}
   
    return (
      <section class="login_box_area section_gap">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="login_box_img">
                <img class="img-fluid" src="img/login.jpg" alt="" />
                <div class="hover">
                  <h4>New to our website?</h4>
                  <p>
                    There are advances being made in science and technology
                    everyday, and a good example of this is the
                  </p>
                  <a class="primary-btn">Create an Account</a>
                </div>
              </div>
            </div>
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
                    <input
                      type="text"
                      class="form-control"
                      id="email"
                      name="email"
                      value={this.state.email}
                      onChange={this.onHandleChange}
                      placeholder="Email"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Email'"
                    />
                     <span style={{color: "red"}}>{this.state.errors["email"]}</span>
                     <br/>
                  </div>
                  <div class="col-md-12 form-group">
                    <input
                      type="password"
                      class="form-control"
                      id="password"
                      name="password"
                      value={this.state.password}
                      onChange={this.onHandleChange}
                      placeholder="Password"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Password'"
                    />
                    <span style={{color: "red"}}>{this.state.errors["password"]}</span>
                    <span style={{color: "red"}}>{this.state.error_login}</span>
                         <br/>
                  </div>
                  <div class="col-md-12 form-group">
                    <div class="creat_account">
                      <input type="checkbox" id="f-option2" name="selector" />
                      <label for="f-option2">Keep me logged in</label>
                    </div>
                  </div>
                  <div class="col-md-12 form-group">
                    <button type="submit" value="submit" class="primary-btn">
                      Log In
                    </button>
                    <Link to="forgotpw">Forgot Password?</Link>
                  </div>
                </form>
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
    login:state.login
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    actLoginUsers: (email,password) => {
     
      dispatch(GetactLoginUsers(email,password));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginArea);
