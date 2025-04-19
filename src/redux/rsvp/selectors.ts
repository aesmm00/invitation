import { RootState } from '../store';

export const selectResponses = (state: RootState) => state.rsvp.responses;
export const selectLoading = (state: RootState) => state.rsvp.loading;
export const selectError = (state: RootState) => state.rsvp.error;

