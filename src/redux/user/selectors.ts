import { RootState } from '../store';

export const selectInitialData = (state: RootState) => state.user.initialData;
export const selectLoading = (state: RootState) => state.user.loading;
export const selectError = (state: RootState) => state.user.error;
export const selectCodeVerified = (state: RootState) => state.user.codeVerified;
