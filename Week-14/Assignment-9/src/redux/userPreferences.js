import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  age: '',
  gender: '',
  interests: '',
};

const userPreferencesSlice = createSlice({
  name: 'userPreferences',
  initialState,
  reducers: {
    setAge: (state, action) => {
      state.age = action.payload;
    },
    setGender: (state, action) => {
      state.gender = action.payload;
    },
    setInterests: (state, action) => {
      state.interests = action.payload;
    },
  },
});

export const { setAge, setGender, setInterests } = userPreferencesSlice.actions;
export default userPreferencesSlice.reducer;
