import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from './features/cardsSlice';

const store = configureStore({
  reducer: {
    cards: cardsReducer,
  },
});

export default store;
