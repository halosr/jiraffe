import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '@/store/reducers/index';

function createStore(initialState: any) {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
    preloadedState: initialState,
  });
}

export type RootState = ReturnType<ReturnType<typeof createStore>["getState"]>;
export type AppDispatch = ReturnType<typeof createStore>["dispatch"];

export default createStore;