import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function MenuPF() {
  return (
    <div class="col-xl-3 col-lg-4 col-md-5">
      <div class="sidebar-categories">
        <div class="head">Nguyen Van A</div>
        <ul class="main-categories">
          <li class="main-nav-list">
            <Link
              data-toggle="collapse"
              aria-expanded="false"
              aria-controls="fruitsVegetable"
            >
              <span class="lnr lnr-arrow-right"></span>Tài khoản của tôi
              <span class="number"></span>
            </Link>
          </li>
          <li class="main-nav-list">
            <Link
              data-toggle="collapse"
              aria-expanded="false"
              aria-controls="fruitsVegetable"
            >
              <span class="lnr lnr-arrow-right"></span>Hồ sơ
              <span class="number"></span>
            </Link>
          </li>
          <li class="main-nav-list">
            <Link
              data-toggle="collapse"
              aria-expanded="false"
              aria-controls="fruitsVegetable"
            >
              <span class="lnr lnr-arrow-right"></span>Ngân hàng
              <span class="number"></span>
            </Link>
          </li>
          <li class="main-nav-list">
            <Link
              data-toggle="collapse"
              aria-expanded="false"
              aria-controls="fruitsVegetable"
            >
              <span class="lnr lnr-arrow-right"></span>Địa chỉ{" "}
              <span class="number"></span>
            </Link>
          </li>
          <li class="main-nav-list">
            <Link
              data-toggle="collapse"
              aria-expanded="false"
              aria-controls="fruitsVegetable"
            >
              <span class="lnr lnr-arrow-right"></span>Đổi mật khẩu{" "}
              <span class="number"></span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MenuPF;
