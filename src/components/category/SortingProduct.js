import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import SortingProductItem from "./SortingProductItem";
import {
  GetactSaveID,
  GetactProductCategory,
  GetactLogoutUsers,
} from "../../actions/index";
class SortingProduct extends React.Component {
  Onhandle = (productcategory, indexx) => {
    var result = "";
    var result2 = "";
    if (Object.keys(productcategory).length > 0) {
      result = Object.keys(productcategory).map((product, index) => {
        if (index == 3) {
          console.log(productcategory[product].links.next);
          if (indexx == 0 && productcategory[product].links.previous ) {
            this.props.actProductCategory(
              null,
              null,
              productcategory[product].links.previous
            );
          }
          if (indexx == 1 && productcategory[product].links.next) {
            this.props.actProductCategory(
              null,
              null,
              productcategory[product].links.next
            );
          }
        }
      });
    }
    return result2;
  };
  showData = (productcategory) => {
    var result = "";
    var result2 = "";
    if (Object.keys(productcategory).length > 0) {
      result = Object.keys(productcategory).map((product, index) => {
        if (index == 3) {
          var datapages = [];
          console.log(productcategory[product].links.next);
          for (let i = 1; i <= productcategory[product].totalPages; i++) {
            var data = {
              currentpages: i,
              link: productcategory[product].links.next || productcategory[product].links.previous
            };
            datapages.push(data);
          }
          result2 = datapages.map((product, index) => {
            return <SortingProductItem product={product} key={index} />;
          });
        }
      });
    }
    return result2;
  };
  render() {
    var { productcategory } = this.props;
    return (
      <div class="filter-bar d-flex flex-wrap align-items-center">
        <div class="sorting">
          <select>
            <option value="1">Default sorting</option>
            <option value="1">Default sorting</option>
            <option value="1">Default sorting</option>
          </select>
        </div>
        <div class="sorting mr-auto">
          <select>
            <option value="1">Show 12</option>
            <option value="1">Show 12</option>
            <option value="1">Show 12</option>
          </select>
        </div>
        <div class="pagination">
          <Link
            onClick={() => this.Onhandle(productcategory, 0)}
            class="prev-arrow"
          >
            <i class="fa fa-long-arrow-left" aria-hidden="true"></i>
          </Link>
          {this.showData(productcategory)}
          <Link class="dot-dot">
            <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
          </Link>
          <Link>6</Link>
          <Link
            onClick={() => this.Onhandle(productcategory, 1)}
            class="next-arrow"
          >
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </Link>
        </div>
      </div>
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
    actProductCategory: (id_user, id_page, url) => {
      dispatch(GetactProductCategory(id_user, id_page, url));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SortingProduct);
