import { RootState } from '../store';
import { EighteenCategory } from './types';

export const selectEighteenData = (state: RootState, category: EighteenCategory) => state.eighteens.data[category];
export const selectEighteenLoading = (state: RootState, category: EighteenCategory) => state.eighteens.loading[category];
export const selectEighteenError = (state: RootState, category: EighteenCategory) => state.eighteens.error[category];
