import { type } from '@testing-library/user-event/dist/type';
import { createStore, combineReducers } from 'redux';
import accountReducer from './features/accounts/accountslice';
import customerReducer from './features/customers/customerSlice';

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});
const store = createStore(rootReducer);

export default store;
