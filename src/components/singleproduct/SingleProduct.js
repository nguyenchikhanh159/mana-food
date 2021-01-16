import React, { Fragment } from "react";
import BannerSproduct from "./BannerSproduct";
import ProductImage from "./ProductImage";
import DecriptionPD from "./DecriptionPD";
import Footer from "./../home/Footer";
import { connect } from "react-redux";
import {GetactProductDetail} from "./../../actions/index";
class SingleProduct extends React.Component {
   componentWillMount(){
    var {match} =this.props;
    if(match){
      var id = match.params.id;
      this.props.actProductDetail(id);
    }
   }
  render() {
    return (
      <Fragment>
        <BannerSproduct />
        <ProductImage  />
        <DecriptionPD />
        <Footer />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    actProductDetail: (id) => {
      dispatch(GetactProductDetail(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
