import * as types from "./../constants/ActionType";
import callApi from "../untils/ApiCaller";
import axios from "axios";
import { Link, Route, Redirect } from "react-router-dom";


//////////Sign UP need to fix
export const GetactSignUpUsers = (name, email, password) => {
  console.log("ABC" + name + email + password);
  const headers = {
    headers: {
      'Content-Type': 'application/json',
  }
}
  //POST StudenID && Reponse Data from Student ID
  return (dispatch) => {
    return callApi("api/user/create", "POST", {
      headers:headers,
      username: name,
      email: email,
      password: password,
      roleId:1,
      createdAt:"2020-12-29",
      updateAt:"2020-12-28",
      deletedAt:"2020-12-26"
    })
      .catch((error) => {
        console.log(error);
      })
      .then((res) => {
        console.log(res);
        if (res != undefined) {
          dispatch(SignUpUsers(res.data));
        }
        if (res == undefined) {
          let datax = "null";
          console.log(datax);
          dispatch(SignUpUsers(datax));
        }
        // if (res.data && res.data.status==200) dispatch(SignUpUsers(res.data));
      });
    let datax = "null";
    dispatch(SignUpUsers(datax));
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






