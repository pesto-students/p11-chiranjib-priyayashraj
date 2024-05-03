import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  gifts: [],
};

const recommendedGiftsSlice = createSlice({
  name: 'recommendedGifts',
  initialState,
  reducers: {
    setGifts: (state, action) => {
      state.gifts = action.payload;
    },
  },
});

export const { setGifts } = recommendedGiftsSlice.actions;
export default recommendedGiftsSlice.reducer;
