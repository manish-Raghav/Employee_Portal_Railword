import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from './ReduxToolkit/features/cardsSlice';

const store = configureStore({
  reducer: {
    cards: cardsReducer,
  },
});

export default store;
