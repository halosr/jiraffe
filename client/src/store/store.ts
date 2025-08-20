import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/index';

function createStore(initialState: any) {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
    preloadedState: initialState,
  });
}

export default createStore;