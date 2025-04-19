import { createAsyncThunk } from '@reduxjs/toolkit';
import { RSVPResponse } from './types';
import { addResponse, setLoading, setError, clearError } from './slice';
import { setInitialData } from '../user/slice';
import { InitialData } from '../user/types';

export const submitResponse = createAsyncThunk<InitialData, RSVPResponse, { rejectValue: string }>(
  'rsvp/submitResponse',
  async (response: RSVPResponse, { dispatch, rejectWithValue }) => {
    dispatch(setLoading(true));
    dispatch(clearError());
    
    const url = `https://script.google.com/macros/s/AKfycbw1T_Gf1k37jAYAhtC-ozc8QcsKrQ2ug79VvSPDMaScCc7Gm3EUhZw1eQQlOhE4OTHB/exec?code=${response.code}`;
    try {
      const apiResponse = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: JSON.stringify({ 
          email: response.email, 
          rsvpStatus: response.attending
        })
      });
      
      if (!apiResponse.ok) {
        throw new Error('Failed to submit response');
      }

      const data = await apiResponse.json();
      dispatch(addResponse(response));
      dispatch(setInitialData(data));
      dispatch(setLoading(false));
      return data;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      dispatch(setError(errorMessage));
      dispatch(setLoading(false));
      return rejectWithValue(errorMessage);
    }
  }
);
