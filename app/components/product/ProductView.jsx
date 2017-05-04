import React, {Component} from 'react';
import {connect} from "react-redux";

class ProductView extends Component {
   render() {
      return (
         <div>
            <h1>this is the productt page !!</h1>
            ypu searched for {this.props.params.id}
         </div>
      )
   }
}

const mapStateToProps = (state) => {
  return {
    product: state.productState.product,
    loading: state.productState.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    initProduct : (product) => dispatch(actions.editProduct(product)),
    setLoading : (status) => dispatch(actions.loadingProducts(status))
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (ProductView);
