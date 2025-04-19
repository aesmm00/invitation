import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { EighteenCategory, EighteenPerson } from './types';
import { setData, setLoading, setError } from './slice';

const BASE_URL = 'https://script.google.com/macros/s/AKfycbw1T_Gf1k37jAYAhtC-ozc8QcsKrQ2ug79VvSPDMaScCc7Gm3EUhZw1eQQlOhE4OTHB/exec';

export const fetchEighteenData = createAsyncThunk<void, EighteenCategory>(
  'eighteens/fetchData',
  async (category, { dispatch }) => {
    dispatch(setLoading({ category, loading: true }));
    dispatch(setError({ category, error: null }));

    try {
      const response = await axios.get(`${BASE_URL}?sheet=Eighteen${category}`);
      if (response.data.error) {
        dispatch(setError({ category, error: response.data.error }));
      } else {
        dispatch(setData({ category, data: response.data as EighteenPerson[] }));
      }
    } catch (error) {
      dispatch(setError({ category, error: 'Error fetching data' }));
      throw error;
    } finally {
      dispatch(setLoading({ category, loading: false }));
    }
  }
);
