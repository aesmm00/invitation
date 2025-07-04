import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store';

const API_URL = 'https://script.google.com/macros/s/AKfycbxuNpTjNM19KpUSsjXYYGDzgJ_NJje34EcJ0KNlh1rIWIzz5PZ6goCA_ApFyntDC1xB9g/exec';

export const submitRSVP = createAsyncThunk(
  'rsvp/submit',
  async (_, { getState }) => {
    const state = (getState() as RootState).rsvp;
    const submissions = [];

    for (const name of state.names) {
      if (name.trim()) {
        submissions.push(
          fetch(`${API_URL}/exec`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({
              Name: name,
              Email: state.email,
              "RSVP status": state.attending,
              Allergies: state.allergies,
              Message: state.message
            })
          })
        );
      }
    }

    await Promise.all(submissions);
  }
);
