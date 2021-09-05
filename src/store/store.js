import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './statusLogin';
import favReducer from './favSlide';

export const store = configureStore({
  reducer: {
    isLogined: loginReducer,
    fav: favReducer
  }
})
