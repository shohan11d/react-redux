import accountReducer from './features/accounts/accountslice';
import customerReducer from './features/customers/customerSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});
export default store;
