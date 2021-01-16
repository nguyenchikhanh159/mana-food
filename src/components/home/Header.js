import React, { Component } from "react";
import { Link, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {
  GetactSaveID,
  GetactProductCategory,
  GetactLogoutUsers,
  GetactGetToCart,
} from "../../actions/index";
const menus = [
  {
    name: "Home",
    to: "/",
    exact: true,
  },
  {
    name: "Shop",
    to: "/category",
    exact: false,
  },
  {
    name: "Blog",
    to: "/blog",
    exact: true,
  },
  {
    name: "Pages",
    to: "/pages",
    exact: false,
  },
  {
    name: "Contact",
    to: "/contact",
    exact: false,
  },
];
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      check:false
    };
  }
  componentWillMount() {
    var token = localStorage.getItem("token");
     console.log(token);
    if (token ) {
      var data = JSON.parse(token);
      var config = {
        headers: { Authorization: `Bearer ${data.token}` },
      };
      this.props.actGetToCart(config);
     }
     if(this.props.logout){
       console.log(this.props.logout.status==200)
       this.setState({
         check:true
       })
     }
  }
  componentWillReceiveProps(nextProps){
      if(nextProps.logout){
        this.setState({
          check:true
        })
      }
      console.log(nextProps.logout)
  }
  LogoutUsers = (config) => {
    this.props.actLogoutUsers(config);
    localStorage.removeItem("CART");
  };
  ShowMenuLogin = (user) => {
    console.log(this.props.login);
    var token = localStorage.getItem("token");
    if (token) {
      var data = JSON.parse(token);
      var config = {
        headers: { Authorization: `Bearer ${data.token}` },
      };
    }
    // console.log(config);
    if (token) {
      return (
        <li className="nav-item submenu dropdown">
          <Link
            to="/pages"
            className="nav-link dropdown-toggle"
            data-toggle="dropdown"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {data.user.name}
          </Link>
          <ul className="dropdown-menu">
            <li className="nav-item">
              <Link to="/profile" className="nav-link">
                Đổi mật khẩu
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signup" className="nav-link">
                Thông tin cá nhân
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/cart"
                className="nav-link"
              >
                Giỏ hàng
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/"
                onClick={() => this.LogoutUsers(config)}
                className="nav-link"
              >
                Thoát
              </Link>
            </li>
          </ul>
        </li>
      );
    } else {
      return (
        <li className="nav-item submenu dropdown">
          <Link
            to="/pages"
            className="nav-link dropdown-toggle"
            data-toggle="dropdown"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Tài khoản
          </Link>
          <ul className="dropdown-menu">
            <li className="nav-item">
              <Link to="/login" className="nav-link" href="login.html">
                Đăng nhập
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signup" className="nav-link" href="tracking.html">
                Tạo tài khoản
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="elements.html">
                Đăng nhập Google
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="elements.html">
                Đăng nhập Facebook
              </a>
            </li>
          </ul>
        </li>
      );
    }
  };
  componentDidMount() {
    this.props.actSaveID();
    
  }
  
  render() {
    var { login } = this.props;
    var {logout}=this.props;
    if(logout.status==200){
      window.location.reload();
    }
   
    
    return (
      <header className="header_area sticky-header">
        <div className="main_menu">
          <nav className="navbar navbar-expand-lg navbar-light main_box">
            <div className="container">
              <Link className="navbar-brand logo_h">
                <img className="logox" src="img/logo.png" alt="" />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>

              <div
                className="collapse navbar-collapse offset"
                id="navbarSupportedContent"
              >
                <ul className="nav navbar-nav menu_nav ml-auto">
                  <li className="nav-item active">
                    <Link to="/" className="nav-link" href="index.html">
                      Trang chủ
                    </Link>
                  </li>
                  <li className="nav-item submenu dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Cửa hàng
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          to="/category"
                          className="nav-link"
                         
                        >
                          Sản phẩm
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" >
                          Theo dõi đơn hàng
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item submenu dropdown">
                    <Link
                      to="/blog"
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Blog
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a className="nav-link" href="blog.html">
                          Blog
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="single-blog.html">
                          Blog Details
                        </a>
                      </li>
                    </ul>
                  </li>
                  {this.ShowMenuLogin(login)}

                  <li className="nav-item">
                    <Link
                      to="/contact"
                      className="nav-link"
                      href="contact.html"
                    >
                      Liên lạc
                    </Link>
                  </li>

                </ul>
                <ul class="nav navbar-nav navbar-right">
                <li class="nav-item"><a href="#" class="cart"><span class="ti-bag"></span></a></li>
								<li class="nav-item">
									<button class="search"><span class="lnr lnr-magnifier" id="search"></span></button>
								</li>
							</ul>
              </div>
            </div>
          </nav>
        </div>
        <div class="search_input" id="search_input_box">
			<div class="container">
				<form class="d-flex justify-content-between">
					<input type="text" class="form-control" id="search_input" placeholder="Search Here"/>
					<button type="submit" class="btn"></button>
					<span class="lnr lnr-cross" id="close_search" title="Close Search"></span>
				</form>
			</div>
		</div>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    saveid: state.saveid,
    login: state.login,
    logout:state.logout
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    actSaveID: () => {
      dispatch(GetactSaveID());
    },
    actLogoutUsers: (config) => {
      dispatch(GetactLogoutUsers(config));
    },
    actGetToCart: (config) => {
      dispatch(GetactGetToCart(config));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
