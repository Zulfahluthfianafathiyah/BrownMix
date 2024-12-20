import { combineReducers } from 'redux';
import userReducer from './user.reducer';
import { detailreducer, productReducer } from './productReducer';

const webReducer = combineReducers({
    userReducer,
    productReducer,
    detailreducer
});

const rootReducer = (state, action) => webReducer(state, action);
export default rootReducer;
