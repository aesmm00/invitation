import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RSVPState, RSVPResponse } from './types';

const initialState: RSVPState = {
  responses: [],
  loading: false,
  error: null,
};

const rsvpSlice = createSlice({
  name: 'rsvp',
  initialState,
  reducers: {
    addResponse: (state, action: PayloadAction<RSVPResponse>) => {
      state.responses.push(action.payload);
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const { 
  addResponse, 
  setLoading, 
  setError, 
  clearError 
} = rsvpSlice.actions;

export default rsvpSlice.reducer;
