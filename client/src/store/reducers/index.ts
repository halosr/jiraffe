import { combineReducers } from '@reduxjs/toolkit';
import pageReducer from '@/store/reducers/page.reducer';
import loginReducer from '@/store/reducers/login.reducer';

const rootReducer = combineReducers({
  page: pageReducer,
  login: loginReducer
});

export default rootReducer;
