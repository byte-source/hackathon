  // Action creators -Helpers Methods
import * as ActionTypes from "./ActionTypes";

const initialState = {
  products:[{name:'iPhone', id:1}],
  loading: false,
  product: {}
}

export default function (state=initialState, action) {
  console.log("product reducer", state, action);

  switch(action.type) {
    case ActionTypes.INIT_PRODUCTS :{
      // return {
      //   products: action.products,
      //   loading: state.loading,
      //   product: state.product
      // }

      return Object.assign({}, state, {products:action.products})
    }

    case ActionTypes.LOADING : {
      // return {
      //   loading :action.loading,
      //   products :state.products,
      //   product: state.product
      // }

      return Object.assign({}, state, {loading:action.loading})
    }

    case ActionTypes.EDIT_PRODUCT : {
      // return {
      //   product: action.product,
      //   loading: state.loading,
      //   products: state.products
      // }
      return Object.assign({}, state, {product:action.product})
    }
    default :
      return state;
  }
}
