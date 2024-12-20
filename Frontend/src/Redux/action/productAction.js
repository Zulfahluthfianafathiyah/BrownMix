import axios from "axios";
import { productActions } from "../actionTypes";
const URL_API = import.meta.env.VITE_URL_API_PRODUCT;

export function dataProduct() {
    return (dispatch) => {
      dispatch({ type: productActions.GET_PRODUCT_REQUEST });
  
      return axios
        .get(URL_API)
        .then((response) => {
          console.log(response.data);
          const data = response.data.products
          dispatch({
            type: productActions.GET_PRODUCT_SUCCESS,
            payload: data, 
          });
        })
        .catch((error) => {
          const errorMessage = error.response?.data || error.message; 
  
          console.error("Pesan", errorMessage);
  
          dispatch({
            type: productActions.GET_PROCUCT_FAILED,
            payload: errorMessage,
          });
        });
    };
  }

  export function getDataProductById(id) {
    return (dispatch) => {
      dispatch({ type: productActions.GET_PRODUCT_REQUEST });
  
      return axios
        .get(`${URL_API}/${id}`)  // Menggunakan template literal untuk menyusun URL dengan ID
        .then((response) => {
          console.log(response.data);
          // Ambil data produk dari response
          const data = response.data;  // Asumsi data langsung ada di response.data
          dispatch({
            type: productActions.GET_PRODUCT_SUCCESS,
            payload: data, 
          });
        })
        .catch((error) => {
          const errorMessage = error.response?.data || error.message;
  
          console.error("Pesan", errorMessage);
  
          dispatch({
            type: productActions.GET_PRODUCT_FAILED,  // Memperbaiki penulisan action
            payload: errorMessage,
          });
        });
    };
  }
 
// add handling data product submit 






