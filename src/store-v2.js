import { type } from '@testing-library/user-event/dist/type';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import accountReducer from './features/accounts/accountslice';
import customerReducer from './features/customers/customerSlice';
import { configureStore } from '@reduxjs/toolkit';
const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
