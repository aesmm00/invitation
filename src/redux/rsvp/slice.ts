import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RSVPState, UpdateFieldPayload } from './types';
import { submitRSVP } from './actions';

const initialState: RSVPState = {
  names: [''],
  email: '',
  attending: 'Yes',
  allergies: '',
  message: '',
  submitted: false,
  submitting: false,
  error: null
};

export const rsvpSlice = createSlice({
  name: 'rsvp',
  initialState,
  reducers: {
    updateField: (state, action: PayloadAction<UpdateFieldPayload>) => {
      const { field, value, index } = action.payload;
      if (field === 'names' && index !== undefined) {
        state.names[index] = value;
      } else if (field !== 'names') {
        (state[field] as string) = value;
      }
    },
    addName: (state) => {
      state.names.push('');
    },
    removeName: (state, action: PayloadAction<number>) => {
      state.names.splice(action.payload, 1);
    },
    resetForm: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitRSVP.pending, (state) => {
        state.submitting = true;
        state.error = null;
      })
      .addCase(submitRSVP.fulfilled, (state) => {
        state.submitting = false;
        state.submitted = true;
        state.error = null;
      })
      .addCase(submitRSVP.rejected, (state, action) => {
        state.submitting = false;
        state.error = action.error.message || 'An error occurred';
      });
  },
});

export const { updateField, resetForm, addName, removeName } = rsvpSlice.actions;

export default rsvpSlice.reducer;
