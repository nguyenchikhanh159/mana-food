import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import DetailProductItem from "./DetailProductItem";
import {GetactSaveID,GetactProductCategory,GetactLogoutUsers} from '../../actions/index';
import productcategory from "../../reducers/productcategory";

class DetailProduct extends Component {
 
 
  componentDidMount(){
    var {saveid}=this.props;
    let result=Object.keys(saveid).map((product,index)=>{
            if(product=="data")
           { console.log(saveid[product][0].id)
            this.props.actProductCategory(saveid[product][0].id)
           }
    });
    
  }
  showData = (productcategory) => {
    var result = null;
    var result2 = null;
    if (Object.keys(productcategory).length > 0) {
      result = Object.keys(productcategory)
        .map((product, index) => {
          if (index == 2) {
            result2 = productcategory[product].map((product, index) => {
              // console.log(product.name);
              return <DetailProductItem product={product} key={index} />;
            });
          }
        });
    }
    return result2;
  };
  render() {
    var { productcategory } = this.props;
    let {saveid}=this.props;
    // console.log(saveid.data);

    return (
      <section class="lattest-product-area pb-40 category-list">
        <div class="row">
          {this.showData(productcategory)}
          <div />
        </div>
      </section>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    productcategory: state.productcategory,
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
export default connect(mapStateToProps, mapDispatchToProps)(DetailProduct);
