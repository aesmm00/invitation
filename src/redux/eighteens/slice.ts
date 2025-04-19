import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EighteenState, EighteenCategory, EighteenPerson } from './types';

const initialState: EighteenState = {
  data: {
    Roses: [],
    Candles: [],
    Treasures: [],
    BlueBills: [],
  },
  loading: {
    Roses: false,
    Candles: false,
    Treasures: false,
    BlueBills: false,
  },
  error: {
    Roses: null,
    Candles: null,
    Treasures: null,
    BlueBills: null,
  },
};

const eighteensSlice = createSlice({
  name: 'eighteens',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<{ category: EighteenCategory; data: EighteenPerson[] }>) => {
      const { category, data } = action.payload;
      state.data[category] = data;
    },
    setLoading: (state, action: PayloadAction<{ category: EighteenCategory; loading: boolean }>) => {
      const { category, loading } = action.payload;
      state.loading[category] = loading;
    },
    setError: (state, action: PayloadAction<{ category: EighteenCategory; error: string | null }>) => {
      const { category, error } = action.payload;
      state.error[category] = error;
    },
  },
});

export const { setData, setLoading, setError } = eighteensSlice.actions;
export default eighteensSlice.reducer;
