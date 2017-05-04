import React, {Component} from 'react';
import {connect} from "react-redux";

class ProductView extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div>
        <h1>Products matching {this.props.params.item} are...</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // product: state.productState.product,
    // loading: state.productState.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // initProduct : (product) => dispatch(actions.editProduct(product)),
    // setLoading : (status) => dispatch(actions.loadingProducts(status))
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (ProductView);
