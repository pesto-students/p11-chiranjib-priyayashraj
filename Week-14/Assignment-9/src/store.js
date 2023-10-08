import { configureStore } from '@reduxjs/toolkit';
import userPreferencesReducer from './redux/userPreferences';
import recommendedGiftsReducer from './redux/recommendedGiftsSlice';

const store = configureStore({
  reducer: {
    userPreferences: userPreferencesReducer,
    recommendedGifts: recommendedGiftsReducer,
  },
});

export default store;
