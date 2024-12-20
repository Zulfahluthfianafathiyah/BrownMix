
import axios from "axios";
import { hasilProductActions } from "../actionTypes";
const URL_API = import.meta.env.VITE_URL_API_PRODUCT;


export function dataHasilProduct() {
    return (dispatch) => {
      dispatch({ type: hasilProductActions.GET_HASIL_PRODUCT_REQUEST });
  
      return axios
        .get(URL_API)
        .then((response) => {
          console.log(response.data);
          const data = response.data.products
          dispatch({
            type: hasilProductActions.GET_HASIL_PRODUCT_SUCCESS,
            payload: data, 
          });
        })
        .catch((error) => {
          const errorMessage = error.response?.data || error.message; 
  
          console.error("Pesan", errorMessage);
  
          dispatch({
            type: hasilProductActions.GET_HASIL_PRODUCT_FAILED,
            payload: errorMessage,
          });
        });
    };
  }
 
// add handling data product submit