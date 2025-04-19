import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState, InitialData } from './types';

const initialState: UserState = {
  initialData: null,
  loading: false,
  error: null,
  codeVerified: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    setInitialData: (state, action: PayloadAction<InitialData>) => {
      state.initialData = action.payload;
      state.codeVerified = true;
    },
    clearInitialData: (state) => {
      state.initialData = null;
      state.codeVerified = false;
    },
  },
});

export const { setLoading, setError, clearError, setInitialData, clearInitialData } = userSlice.actions;

export default userSlice.reducer;
