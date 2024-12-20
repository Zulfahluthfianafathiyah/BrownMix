import {productActions} from "../actionTypes";

const initialState = {
  product: [],
  detail:[],
  loading: false,
  error: null,
  message: "",
  status: null,
};

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case productActions.GET_PRODUCT_REQUEST:
        return { ...state, loading: true };
      case productActions.GET_PRODUCT_SUCCESS:
        return { ...state, loading: false, product: action.payload };
      case productActions.GET_PROCUCT_FAILED:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
export const detailreducer = (state = initialState, action) => {
    switch (action.type) {
      case productActions.GET_DETAIL_PRODUCT_REQUEST:
        return { ...state, loading: true };
      case productActions.GET_DETAIL_PRODUCT_SUCCESS:
        return { ...state, loading: false, detail: action.payload };
      case productActions.GET_DETAIL_PROCUCT_FAILED:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };

  //buatkan reducer untuk hasilproduct.js 

