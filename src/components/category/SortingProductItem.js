import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  GetactSaveID,
  GetactProductCategory,
  GetactLogoutUsers,
} from "../../actions/index";
class SortingProductItem extends React.Component {
  Onhandle = () => {
    var { product } = this.props;
    console.log(product);
    if (product.link) {
      let start = product.link.indexOf("category") + 9;
      let end = product.link.indexOf("/product");
      console.log("startend" +start+""+end);
      let id_user = product.link.substring(start, end);
      console.log(id_user);
      console.log(product.currentpages);
      var x = 1;
      this.props.actProductCategory(id_user, product.currentpages,null);
    }
  };
  render() {
    var { product } = this.props;
    return (
      <li onClick={() => this.Onhandle()}>
        <Link to={`/category?page=${product.currentpages}`} class="">{product.currentpages}</Link>
      </li>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    productcategory: state.productcategory,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    actProductCategory: (id_user, id_page) => {
      dispatch(GetactProductCategory(id_user, id_page));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SortingProductItem);
