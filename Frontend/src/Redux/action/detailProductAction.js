
import axios from "axios";
import { productActions } from "../actionTypes";
const URL_API = import.meta.env.VITE_URL_API_DETAIL;

export function getDetailProduct(id) {
    return (dispatch) => {
      dispatch({ type: productActions.GET_DETAIL_PRODUCT_REQUEST });
  
      return axios
        .get(`${URL_API}/${id}`) 
        .then((response) => {
            const data = response.data.productDetails; 
            console.log(data);
          dispatch({
            type: productActions.GET_DETAIL_PRODUCT_SUCCESS,
            payload: data, 
          });
        })
        .catch((error) => {
          const errorMessage = error.response?.data || error.message;
  
          console.error("Pesan", errorMessage);
  
          dispatch({
            type: productActions.GET_DETAIL_PROCUCT_FAILED,
            payload: errorMessage,
          });
        });
    };
  }