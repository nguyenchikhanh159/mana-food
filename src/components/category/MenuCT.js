import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import {GetactSaveID,GetactProductCategory} from '../../actions/index';
class MenuCT extends Component {
 


  onHandle = (index) => {
    if (index == 0) {
      this.props.actProductCategory(this.props.saveid.data[0].id);
      console.log("123" + this.props.saveid.data[0].id);
    }
    if (index == 1) {
      this.props.actProductCategory(this.props.saveid.data[1].id);
      console.log("123" + this.props.saveid.data[1].id);
    }
    if (index == 2) {
      this.props.actProductCategory(this.props.saveid.data[2].id);
      console.log("123" + this.props.saveid.data[2].id);
    }
    if (index == 3) {
      this.props.actProductCategory(this.props.saveid.data[3].id);
      console.log("123" + this.props.saveid.data[3].id);
    }
    if (index == 4) {
      this.props.actProductCategory(this.props.saveid.data[4].id);
      console.log("123" + this.props.saveid.data[4].id);
    }
    if (index == 5) {
      this.props.actProductCategory(this.props.saveid.data[5].id);
      console.log("123" + this.props.saveid.data[5].id);
    }
  };
  render() {
    var { saveid } = this.props;
    return (
      <div class="col-xl-3 col-lg-4 col-md-5">
        <div class="sidebar-categories">
          <div class="head">Danh mục sản phẩm</div>
          <ul class="main-categories">
            <li onClick={() => this.onHandle(0)} class="main-nav-list">
              <Link
                data-toggle="collapse"
                aria-expanded="false"
                aria-controls="fruitsVegetable"
              >
                <span class="lnr lnr-arrow-right"></span>Đế mốc điện thoại
                <span class="number">(53)</span>
              </Link>
            </li>
            <li onClick={() => this.onHandle(1)} class="main-nav-list">
              <Link
                data-toggle="collapse"
                aria-expanded="false"
                aria-controls="fruitsVegetable"
              >
                <span class="lnr lnr-arrow-right"></span>Gậy tự sướng
                <span class="number">(53)</span>
              </Link>
            </li>
            <li onClick={() => this.onHandle(2) }class="main-nav-list">
              <Link
                data-toggle="collapse"
                aria-expanded="false"
                aria-controls="fruitsVegetable"
              >
                <span class="lnr lnr-arrow-right"></span>Giá đỡ điện thoại
                <span class="number">(53)</span>
              </Link>
            </li>
            <li onClick={() => this.onHandle(3)} class="main-nav-list">
              <Link
                data-toggle="collapse"
                aria-expanded="false"
                aria-controls="fruitsVegetable"
              >
                <span class="lnr lnr-arrow-right"></span>Màn hình
                <span class="number">(53)</span>
              </Link>
              <ul
                class="collapse"
                id="fruitsVegetable"
                data-toggle="collapse"
                aria-expanded="false"
                aria-controls="fruitsVegetable"
              >
                <li class="main-nav-list child">
                  <Link>
                    Ốp lưng<span class="number">(13)</span>
                  </Link>
                </li>
                <li class="main-nav-list child">
                  <Link>
                    Cường lực<span class="number">(09)</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li onClick={() => this.onHandle(4)} class="main-nav-list">
              <Link
                data-toggle="collapse"
                aria-expanded="false"
                aria-controls="fruitsVegetable"
              >
                <span class="lnr lnr-arrow-right"></span>Pin sạc dự phòng
                <span class="number">(53)</span>
              </Link>
              <li class="main-nav-list child">
                <Link>
                  Xiaomi<span class="number">(13)</span>
                </Link>
              </li>
              <li class="main-nav-list child">
                <Link>
                  Iphone<span class="number">(09)</span>
                </Link>
              </li>
            </li>
            <li onClick={() => this.onHandle(5)} class="main-nav-list">
              <Link
                data-toggle="collapse"
                aria-expanded="false"
                aria-controls="fruitsVegetable"
              >
                <span class="lnr lnr-arrow-right"></span>Sạc cáp
                <span class="number">(53)</span>
              </Link>
            </li>
            <li class="main-nav-list">
              <Link
                data-toggle="collapse"
                aria-expanded="false"
                aria-controls="fruitsVegetable"
              >
                <span class="lnr lnr-arrow-right"></span>Tai phone
                <span class="number">(53)</span>
              </Link>
            </li>
            <li class="main-nav-list">
              <Link
                data-toggle="collapse"
                aria-expanded="false"
                aria-controls="fruitsVegetable"
              >
                <span class="lnr lnr-arrow-right"></span>Thẻ nhớ
                <span class="number">(53)</span>
              </Link>
            </li>
            <li class="main-nav-list">
              <Link
                data-toggle="collapse"
                aria-expanded="false"
                aria-controls="fruitsVegetable"
              >
                <span class="lnr lnr-arrow-right"></span>Túi chống nước
                <span class="number">(53)</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    saveid: state.saveid,
    
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    actProductCategory:(id)=>{
		  dispatch(GetactProductCategory(id));
	  }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MenuCT);
