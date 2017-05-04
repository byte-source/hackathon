// Action creators -Helpers Methods
import * as ActionTypes from "./ActionTypes";

export const initProducts = (products) => {
 return {
    type : ActionTypes.INIT_PRODUCTS,
    products
  }
}

export const loadingProducts = (status) => {
  return{
    type: ActionTypes.LOADING,
    loading : status
 }
}

export const editProduct = (product) => {
  return{
    type: ActionTypes.EDIT_PRODUCT,
    product
  }
}

export const fetchProducts = () => {
    return (dispatch) => {
        dispatch(loadingProducts(true));

        fetch("http://localhost:5000/api/products")
        .then (response => response.json())
        .then (products => {
            console.warn("Dispatching init")
            dispatch(loadingProducts(false));
            dispatch(initProducts(products))
        })
    }
}
