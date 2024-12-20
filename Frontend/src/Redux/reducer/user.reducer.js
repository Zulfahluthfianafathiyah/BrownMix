import {pelangganActions} from '../actionTypes';

const initState = {
    daftarPelanggan: [],
    loading: false,
    error: null,
  };
   
  const pelanggans=(state = initState, action)=> {
    switch (action.type) { 
        case pelangganActions.CREATE_PELANGGAN_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };

        case pelangganActions.CREATE_PELANGGAN_SUCCESS:
        return {
          ...state,
          loading: false,
          daftarPelanggan: action.payload,
        };
        case pelangganActions.CREATE_PELANGGAN_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
        default:
        return state;
    }
  }

  export default pelanggans;