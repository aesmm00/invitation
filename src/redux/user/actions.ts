import { createAsyncThunk } from '@reduxjs/toolkit';
import { InitialData } from './types';
import { setLoading, setError, clearError, setInitialData } from './slice';

export const verifyCode = createAsyncThunk<InitialData, string, { rejectValue: string }>(
  'user/verifyCode',
  async (code: string, { dispatch, rejectWithValue }) => {
    dispatch(setLoading(true));
    dispatch(clearError());
    const url = `https://script.google.com/macros/s/AKfycbw1T_Gf1k37jAYAhtC-ozc8QcsKrQ2ug79VvSPDMaScCc7Gm3EUhZw1eQQlOhE4OTHB/exec?code=${code}`;
    try {
      const response = await fetch(url);


      const data = await response.json();
      if (data.error) {
        throw new Error('Invalid code');
      }
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
