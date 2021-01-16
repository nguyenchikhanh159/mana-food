import * as types from "./../constants/ActionType";
import callApi from "../untils/ApiCaller";
import axios from "axios";
import { Link, Route, Redirect } from "react-router-dom";
//Change pasword
export const GetactChangePasswordUsers = (
  config,
  old_password,
  new_password,
  c_new_password
) => {
  //POST StudenID && Reponse Data from Student ID
  return (dispatch) => {
    return axios
      .put(
        "http://127.0.0.1:8000/api/registration/changePassword",
        {
          old_password: old_password,
          new_password: new_password,
          c_new_password: c_new_password,
        },
        config
      )
      .then((res) => {
        dispatch(actChangePasswordUsers(res.data));
        console.log(res.data);
      });
  };
};
export const actChangePasswordUsers = (data_changepassword) => {
  return {
    type: types.CHANGEPASSWORD,
    data_changepassword,
  };
};

//LOGOUT USERS
export const GetactLogoutUsers = (config) => {
  //LOUGOUT USERS
  console.log(config);
  return (dispatch) => {
    return axios
      .get("http://127.0.0.1:8000/api/registration/logout", config)
      .then((res) => {
        dispatch(actLogoutUsers(res.data));
        console.log(res.data);
        localStorage.removeItem("token");
      });
  };
};
export const actLogoutUsers = (data_logout) => {
  console.log(data_logout);
  return {
    type: types.LOGOUT,
    data_logout,
  };
};
//////////Sign UP need to fix
export const GetactSignUpUsers = (name, email, password) => {
  console.log("ABC" + name + email + password);
  //POST StudenID && Reponse Data from Student ID
  return (dispatch) => {
    return callApi("api/user/create", "POST", {
      username: name,
      email: email,
      password: password,
    })
      .catch((error) => {
        console.log(error);
      })
      .then((res) => {
        console.log(typeof res);
        if (res != undefined) {
          dispatch(SignUpUsers(res.data));
        }
        if (res == undefined) {
          let datax = "5";
          console.log(datax);
          dispatch(SignUpUsers(datax));
        }
        // if (res.data && res.data.status==200) dispatch(SignUpUsers(res.data));
      });
  };
};
export const SignUpUsers = (data_signup) => {
  return {
    type: types.SIGNUP,
    data_signup,
  };
};
//////////Login
export const GetactLoginUsers = (email, password) => {
  //POST StudenID && Reponse Data from Student ID
  return (dispatch) => {
    return callApi("api/registration/login", "POST", {
      email: email,
      password: password,
    }).then((res) => {
      if (res == undefined) {
        let datax = "5";
        console.log(datax);
        dispatch(LoginUsers(datax));
      }
      if (res != undefined) {
        if (Object.keys(res.data).length > 0) {
          var result = Object.keys(res.data).map((data, index) => {
            if (data == "data") {
              localStorage.setItem(
                "token",
                JSON.stringify({
                  token: res.data[data].token,
                  user: res.data[data].user,
                })
              );
              dispatch(LoginUsers(res.data[data].user));
            }
          });
        }
      }
    });
  };
};
export const LoginUsers = (data_login) => {
  return {
    type: types.LOGIN,
    data_login,
  };
};
/////////Get ID
export const GetactSaveID = () => {
  //POST StudenID && Reponse Data from Student ID
  return (dispatch) => {
    return callApi("api/category", "GET", {}).then((res) => {
      dispatch(SaveID(res.data));
      console.log(res.data);
    });
  };
};
export const SaveID = (id_user) => {
  return {
    type: types.SAVEID,
    id_user,
  };
};
/////////////Get product of category
export const GetactProductCategory = (id_user, id_page, url) => {
  return (dispatch) => {
    if (url == null)
      return callApi(
        `api/category/${id_user}/products?page=${id_page}`,
        "GET",
        {}
      ).then((res) => {
        dispatch(ProductCategory(res.data));
        console.log("Category" + res.data);
      });
    else {
      return axios.get(url).then((res) => {
        dispatch(ProductCategory(res.data));
        console.log("Category" + res.data);
      });
    }
  };
};
export const ProductCategory = (product_category) => {
  return {
    type: types.G_PRODUCT_CATEGORY,
    product_category,
  };
};
/////////////Get product of details
export const GetactProductDetail = (id_user) => {
  //POST StudenID && Reponse Data from Student ID
  return (dispatch) => {
    return callApi(`api/product/${id_user}`, "GET", {}).then((res) => {
      dispatch(ProductDetail(res.data));
      console.log(res.data);
    });
  };
};
export const ProductDetail = (product_detail) => {
  return {
    type: types.G_PRODUCT_DETAIL,
    product_detail,
  };
};
///////////Cart
//Get Cart to Product
export const GetactGetToCart = (config) => {
  //Get Cart
  console.log(config);
  return (dispatch) => {
    return axios.get("http://127.0.0.1:8000/api/cart/", config).then((res) => {
      dispatch(GetToCart(res.data));
      console.log(res.data);
    });
  };
};
export const GetToCart = (product) => {
  return {
    type: types.GET_TO_CART,
    product,
  };
};
///Add cart to product
export const GetactAddToCart = (config, product, quantity) => {
  //Get Cart
  console.log(product.id);
  return (dispatch) => {
    return axios
      .post(
        "http://127.0.0.1:8000/api/cart/",
        {
          product_id: product.id,
          qty: quantity,
        },
        config
      )
      .then((res) => {
        dispatch(actAddToCart(product, quantity));
        console.log(res.data);
      });
  };
};
export const actAddToCart = (product, quantity) => {
  console.log("Quality" + product + quantity);
  return {
    type: types.ADD_TO_CART,
    product,
    quantity,
  };
};

//Delete Cart
export const GetactDeleteProductInCart = (config, product) => {
  //Get Cart
  console.log(config);
  return (dispatch) => {
    return axios
      .post(
        "http://127.0.0.1:8000/api/cart/delete",
        {
          product_id: product.id,
        },
        config
      )
      .then((res) => {
        dispatch(actDeleteProductInCart(product));
        console.log(res.data);
      });
  };
};
export const actDeleteProductInCart = (product) => {
  console.log(product)
  return {
    type: types.DELETE_PRODUCT_IN_CART,
    product,
  };
};
//Update cart: Increase and Reduce products
export const GetactUpdateProductInCart = (
  config,
  product,
  quantity,
  action
) => {
  //Get Cart
  console.log(config + "quatily" + quantity + "action" + action);

  return (dispatch) => {
    return axios
      .post(
        "http://127.0.0.1:8000/api/cart/update",
        {
          product_id: product.id,
          action: action,
        },
        config
      )
      .then((res) => {
        dispatch(actUpdateProductInCart(product, quantity));
        console.log(res.data);
      });
  };
};
export const actUpdateProductInCart = (product, quantity) => {
  return {
    type: types.UPDATE_PRODUCT_IN_CART,
    product,
    quantity,
  };
};
/////////////Handle Cart
////////Checkout
export const GetactCheckout = (config) => {
  console.log(config);
  return (dispatch) => {
    return axios
      .get("http://127.0.0.1:8000/api/cart/checkout", config)
      .then((res) => {
        dispatch(actCheckout(res.data));
        console.log(res.data);
      });
  };
};
export const actCheckout = (data_checkout) => {
  return {
    type: types.CHECKOUT_TO_CART,
    data_checkout,
  };
};
////Order Detail
export const GetactOrderDetails = (
  config,
  provice_id,
  district_id,
  ward_id,
  address,
  phone
) => {
  console.log(phone);
  return (dispatch) => {
    return axios
      .post("http://127.0.0.1:8000/api/cart/order_detail",{
  
        provice_id:provice_id,
        district_id:district_id,
        ward_id:ward_id,
        address:address,
        phone:phone
      },
       config)
      .then((res) => {
        dispatch(actOrderDetails(res.data));
        console.log(res.data);
      });
  };
};
export const actOrderDetails = (data_orderdetails) => {
  return {
    type: types.ORDERDETAIL_TO_CART,
    data_orderdetails,
  };
};
////Billing Information
export const GetactBillingInformation = (
  config,
  information_id,
  provice_id,
  district_id,
  ward_id,
  address,
  phone
) => {
  console.log(config);
  return (dispatch) => {
    return axios
      .post("http://127.0.0.1:8000/api/cart/billing_information",{
        information_id:information_id,
        provice_id:provice_id,
        district_id:district_id,
        ward_id:ward_id,
        address:address,
        phone:phone
      },
       config)
      .then((res) => {
        dispatch(actBillingInformation(res.data));
        console.log(res.data);
      });
  };
};
export const actBillingInformation = (data_billinginfor) => {
  return {
    type: types.BILLING_TO_CART,
    data_billinginfor,
  };
};
////Confirm
export const GetactConfirm = (
  config,
  information_id,
  provice_id,
  district_id,
  ward_id,
  address,
  phone
) => {
  console.log(config);
  return (dispatch) => {
    return axios
      .post("http://127.0.0.1:8000/api/cart/confirm",{
        information_id:information_id,
        provice_id:provice_id,
        district_id:district_id,
        ward_id:ward_id,
        address:address,
        phone:phone
      },
       config)
      .then((res) => {
        dispatch(actConfirm(res.data));
        console.log(res.data);
      });
  };
};
export const actConfirm = (data_confirm) => {
  return {
    type: types.CONFIRM_TO_CART,
    data_confirm,
  };
};



