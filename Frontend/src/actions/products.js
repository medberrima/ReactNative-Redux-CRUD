import ProductService from "../services/ProductService";
import * as actions from "./types"

export const getProducts = () =>{
  return dispatch => {
    ProductService.getAll()
      .then(res => { dispatch({ type: actions.GET_PRODUCTS, payload: res.data}) })
      .catch(e => { 'catch error : ',console.log(e); });
  }
}

export const addProduct = (p) =>{
  return dispatch => {
    ProductService.create(p)
      .then(res => {   dispatch({ type: actions.ADD_PRODUCT,payload: res.data})  })
      .catch(e => { 'catch error : ',console.log('erreur : ',e); });
  }
}

export const updateProduct = (id, data) =>{
  return dispatch => {
    ProductService.update(id,data)
      .then(res => {
        console.log(res.data);
        dispatch({ type: actions.UPDATE_PRODUCT, payload: res.data});
      })
      .catch(e => { 'catch error : ',console.log(e)});
  }
}

export const deleteProduct = (id) =>{
  return  dispatch => {
    ProductService.remove(id)
      .then(() => {   dispatch({ type: actions.DELETE_PRODUCT, payload: id})  })
      .catch(e => { 'catch error : ',console.log(e); });
  }
}
